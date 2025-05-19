"use client";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import AnimatedPage from "../AnimatedPage";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function IndividualProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productRes, relatedRes] = await Promise.all([
          axios.get(`${backendUrl}/api/public/products/${productId}`),
          axios.get(`${backendUrl}/api/public/products/${productId}/related`),
        ]);

        setProduct({
          ...productRes.data,
          images: productRes.data.images || ['/placeholder-product.jpg']
        });

        setRelatedProducts(
          relatedRes.data.map(p => ({
            ...p,
            images: p.images || ['/placeholder-product.jpg'],
            primaryImage: p.primaryImage || '/placeholder-product.jpg'
          }))
        );
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <ErrorPage error={error} />;
  if (!product) return <NotFoundPage />;

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-gray-50">
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <ProductDetails product={product} />
          <RelatedProducts products={relatedProducts} />
        </main>
      </div>
    </AnimatedPage>
  );
}

// Helper components
function ErrorPage({ error }) {
  return (
    <AnimatedPage>
      <div className="text-center py-20">
        <h2 className="text-red-500 text-xl mb-4">Error: {error}</h2>
        <Link to="/products" className="text-indigo-600 hover:text-indigo-800">
          ← Back to Products
        </Link>
      </div>
    </AnimatedPage>
  );
}

function NotFoundPage() {
  return (
    <AnimatedPage>
      <div className="text-center py-20">
        <h2 className="text-xl mb-4">Product not found</h2>
        <Link to="/products" className="text-indigo-600 hover:text-indigo-800">
          ← Back to Products
        </Link>
      </div>
    </AnimatedPage>
  );
}

function ProductDetails({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const specifications = {
    material: product.material || "Not specified",
    weight: product.weight || "Not specified",
    height: product.height || "Not specified",
    width: product.width || "Not specified",
    certification: product.certification || "Not specified",
    finish: product.finish || "Not specified",
  };

  return (
    <section className="lg:grid lg:grid-cols-2 lg:gap-16">
      {/* Product Images Section */}
      <div className="flex flex-col gap-6">
        <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-lg">
          <ImageWithFallback 
            src={product.images[selectedImage]} 
            alt="Main product view"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {product.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square overflow-hidden rounded-xl transition-all ${
                selectedImage === index ? "ring-2 ring-emerald-500" : ""
              }`}
            >
              <ImageWithFallback 
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info Section */}
      <div className="mt-8 lg:mt-0">
        <h1 className="text-3xl font-bold text-gray-900">{product.productName}</h1>
        <p className="text-3xl font-semibold text-emerald-600 mt-4">
          ₹{product.productPrice}
        </p>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <h2 className="text-xl font-semibold text-gray-900">Product Specifications</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {Object.entries(specifications).map(([key, value]) => (
              <SpecItem key={key} name={key} value={value} />
            ))}
          </div>
        </div>

        {product.productDescription && (
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-600">{product.productDescription}</p>
          </div>
        )}

        <ArtisanInfo artisan={product} />
      </div>
    </section>
  );
}

function ArtisanInfo({ artisan }) {
  return (
    <div className="mt-8 border-t border-gray-200 pt-8">
      <h2 className="text-xl font-semibold text-gray-900">About the Artisan</h2>
      <div className="mt-6 flex items-start gap-4">
        <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden">
          {artisan.profileImageUrl ? (
            <ImageWithFallback
              src={artisan.profileImageUrl}
              alt={artisan.username}
              className="h-full w-full object-cover"
              fallback={<span className="text-2xl text-gray-600 flex items-center justify-center h-full">
                {artisan.username?.[0]?.toUpperCase() || 'A'}
              </span>}
            />
          ) : (
            <span className="text-2xl text-gray-600 flex items-center justify-center h-full">
              {artisan.username?.[0]?.toUpperCase() || 'A'}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{artisan.username}</h3>
          <p className="text-sm text-gray-500 mt-2">{artisan.specialization}</p>
          <p className="text-gray-600 mt-2">Contact: {artisan.PhoneNumber}</p>
        </div>
      </div>
    </div>
  );
}

function RelatedProducts({ products }) {
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <section className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
        {products.length > 4 && (
          <button
            className="text-emerald-600 hover:text-emerald-700 font-medium"
            onClick={() => setVisibleCount(prev => Math.min(prev + 4, products.length))}
          >
            View More →
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, visibleCount).map(product => (
          <RelatedProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function RelatedProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <Link
      to={`/products/${product.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
      onMouseEnter={() => {
        if (product.images.length > 1) {
          setCurrentImageIndex(1);
        }
      }}
      onMouseLeave={() => setCurrentImageIndex(0)}
    >
      <div className="aspect-square overflow-hidden relative">
        <ImageWithFallback
          src={product.images[currentImageIndex] || product.primaryImage}
          alt={product.productName}
          className="h-full w-full object-cover transition-opacity duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 truncate">{product.productName}</h3>
        <p className="mt-2 text-lg font-semibold text-emerald-600">
          ₹{product.productPrice}
        </p>
      </div>
    </Link>
  );
}

// Reusable components
function ImageWithFallback({ src, alt, className, fallback }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [errored, setErrored] = useState(false);

  const onError = () => {
    if (!errored) {
      setErrored(true);
      setImgSrc('/placeholder-product.jpg');
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={onError}
    />
  );
}

function SpecItem({ name, value }) {
  return (
    <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
      <dt className="text-sm font-medium text-gray-500">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </dt>
      <dd className="mt-1 text-gray-900">{value}</dd>
    </div>
  );
}

export default IndividualProduct;
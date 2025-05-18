"use client";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

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

        setProduct(productRes.data);
        setRelatedProducts(relatedRes.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error)
    return (
      <div className="text-center py-20">
        <h2 className="text-red-500 text-xl mb-4">Error: {error}</h2>
        <Link to="/products" className="text-indigo-600 hover:text-indigo-800">
          ← Back to Products
        </Link>
      </div>
    );
  if (!product)
    return <div className="text-center py-20">Product not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <ProductDetails product={product} />
        <RelatedProducts products={relatedProducts} />
      </main>
    </div>
  );
}

function ProductDetails({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = product.images.filter((img) => img);

  return (
    <section className="lg:grid lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-6">
        <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-lg">
          <img
            src={images[selectedImage]}
            className="h-full w-full object-cover"
            alt="Main product view"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square overflow-hidden rounded-xl transition-all ${
                selectedImage === index ? "ring-2 ring-emerald-500" : ""
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 lg:mt-0">
        <h1 className="text-3xl font-bold text-gray-900">
          {product.productName}
        </h1>
        <p className="text-3xl font-semibold text-emerald-600 mt-4">
          ₹{product.productPrice}
        </p>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Product Specifications
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
              <dt className="text-sm font-medium text-gray-500">Material</dt>
              <dd className="mt-1 text-gray-900">{product.material}</dd>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
              <dt className="text-sm font-medium text-gray-500">
                Certification
              </dt>
              <dd className="mt-1 text-gray-900">{product.certification}</dd>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
              <dt className="text-sm font-medium text-gray-500">Finish</dt>
              <dd className="mt-1 text-gray-900">{product.finish}</dd>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
              <dt className="text-sm font-medium text-gray-500">
                Closure Type
              </dt>
              <dd className="mt-1 text-gray-900">{product.closureType}</dd>
            </div>
          </div>
        </div>

        <ArtisanInfo artisanId={product.artisanId} />
      </div>
    </section>
  );
}

function ArtisanInfo({ artisanId }) {
  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    const fetchArtisan = async () => {
      try {
        const response = await axios.get(`${backendUrl}/artisans/${artisanId}`);
        setArtisan(response.data);
      } catch (error) {
        console.error("Error fetching artisan:", error);
      }
    };

    artisanId && fetchArtisan();
  }, [artisanId]);

  if (!artisan) return null;

  return (
    <div className="mt-8 border-t border-gray-200 pt-8">
      <h2 className="text-xl font-semibold text-gray-900">About the Artisan</h2>
      <div className="mt-6 flex items-start gap-4">
        <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden">
          {artisan.profileImageUrl ? (
            <img
              src={artisan.profileImageUrl}
              alt={artisan.username}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-2xl text-gray-600 flex items-center justify-center h-full">
              {artisan.username?.[0]?.toUpperCase()}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">
            {artisan.username}
          </h3>
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
            onClick={() => setVisibleCount((prev) => prev + 4)}
          >
            View More →
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, visibleCount).map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 truncate">
                {product.productName}
              </h3>
              <p className="mt-2 text-lg font-semibold text-emerald-600">
                ₹{product.productPrice}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default IndividualProduct;

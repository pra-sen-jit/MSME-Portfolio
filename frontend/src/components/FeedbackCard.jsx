function FeedbackCard({ artisanName, name, time, feedback }) {
  return (
    <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
      {/* Artisan Badge */}
      <div className="mb-4">
        <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full border border-blue-200">
          <span className="text-xs font-semibold text-blue-800">
            For: {artisanName || "Unknown Artisan"}
          </span>
        </div>
      </div>

      {/* Customer Info */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-sm">
            <span className="text-blue-700 font-bold text-xl">
              {name.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {name}
          </h3>
          <p className="text-sm text-gray-500">{time}</p>
        </div>
      </div>

      {/* Feedback Content */}
      <div className="relative pl-6">
        <div className="absolute left-0 top-1 w-1 h-8 bg-blue-200 rounded-full"></div>
        <blockquote className="text-gray-700 text-base leading-relaxed">
          <p className="before:content-['“'] before:text-3xl before:text-gray-300 before:font-serif before:mr-1 after:content-['”'] after:text-3xl after:text-gray-300 after:font-serif after:ml-1">
            {feedback}
          </p>
        </blockquote>
      </div>

      {/* Decorative Elements */}
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-blue-200"></div>
          <div className="w-2 h-2 rounded-full bg-blue-100"></div>
          <div className="w-2 h-2 rounded-full bg-blue-50"></div>
        </div>
        <svg
          className="w-5 h-5 text-blue-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
    </div>
  );
}

export default FeedbackCard;

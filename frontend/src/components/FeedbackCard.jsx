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
    </div>
  );
}

export default FeedbackCard;

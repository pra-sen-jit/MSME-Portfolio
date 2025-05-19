function FeedbackCard({ name, time, feedback }) {
  return (
    <div className="group relative flex flex-col p-6 bg-white border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-full transform translate-x-8 -translate-y-8 opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>

      {/* Quote decoration */}
      <div className="absolute top-4 right-4 text-6xl text-slate-100 font-serif opacity-40 group-hover:opacity-60 transition-opacity duration-300 select-none">
        "
      </div>

      {/* Header section with avatar and info */}
      <div className="relative flex items-center gap-4 mb-6">
        <div className="flex-shrink-0 relative">
          {/* Avatar with enhanced styling */}
          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shadow-sm ring-2 ring-blue-50 group-hover:ring-blue-100 transition-all duration-300">
            <span className="text-blue-700 font-semibold text-xl">
              {name.charAt(0).toUpperCase()}
            </span>
          </div>

          {/* Decorative dot */}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xl font-semibold text-slate-800 mb-1 truncate group-hover:text-slate-700 transition-colors duration-300">
            {name}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
            <p className="text-sm text-slate-500 font-medium">{time}</p>
          </div>
        </div>
      </div>

      {/* Feedback content */}
      <div className="relative flex-1 flex flex-col justify-center">
        <div className="relative">
          {/* Opening quote */}
          <span className="absolute -left-2 -top-2 text-2xl text-blue-200 font-serif">
            "
          </span>

          <blockquote className="text-slate-600 leading-relaxed text-base font-normal pl-4 pr-2 italic group-hover:text-slate-500 transition-colors duration-300">
            {feedback}
          </blockquote>

          {/* Closing quote */}
          <span className="absolute -right-1 -bottom-2 text-2xl text-blue-200 font-serif">
            "
          </span>
        </div>

        {/* Decorative line */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="w-12 h-1 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl ring-0 ring-blue-200 group-hover:ring-1 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
}

export default FeedbackCard;

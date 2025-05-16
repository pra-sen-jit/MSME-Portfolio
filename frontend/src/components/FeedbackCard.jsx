function FeedbackCard({ name, time, feedback }) {
  return (
    <div className="flex flex-col p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 font-bold text-lg">
              {name.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{time}</p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed italic">"{feedback}"</p>
    </div>
  );
}

export default FeedbackCard;

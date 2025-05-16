function FeedbackCard({ name, time, feedback }) {
  return (
    <div className="flex flex-col p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      <div className="flex items-center gap-3 mb-4">
        <img
          src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000"
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
        />
        <div>
          <p className="text-lg font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{time}</p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed">{feedback}</p>
    </div>
  );
}

export default FeedbackCard;

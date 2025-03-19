import { useState } from "react";

function Submitfeedback() {
  const [feedback, setFeedback] = useState("");
  const [difficulty, setDifficulty] = useState(null);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!difficulty) {
      alert("Please select the difficulty level.");
      return;
    }
    if (rating === 0) {
      alert("Please provide a rating.");
      return;
    }
    alert(`Feedback submitted!\nDifficulty: ${difficulty}\nRating: ${rating} stars\nComment: ${feedback}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Submit Feedback</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Difficulty Selection */}
        <div>
          <label className="block text-gray-700 font-medium">Difficulty Level:</label>
          <div className="flex items-center space-x-4 mt-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="difficulty"
                value="Strict"
                onChange={() => setDifficulty("Strict")}
                className="form-radio text-red-600"
              />
              <span className="text-gray-700">Strict</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="difficulty"
                value="Easy"
                onChange={() => setDifficulty("Easy")}
                className="form-radio text-green-600"
              />
              <span className="text-gray-700">Easy</span>
            </label>
          </div>
        </div>

        {/* ⭐ Star Rating System */}
        <div>
          <label className="block text-gray-700 font-medium">Rating:</label>
          <div className="flex space-x-1 mt-2">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <span
                  key={index}
                  className={`cursor-pointer text-3xl ${starValue <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
                    }`}
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(rating)}
                >
                  ★
                </span>
              );
            })}
          </div>
        </div>

        {/* Feedback Textarea */}
        <div>
          <label className="block text-gray-700 font-medium">Additional Feedback:</label>
          <textarea
            rows="4"
            className="w-full mt-2 p-3 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default Submitfeedback;

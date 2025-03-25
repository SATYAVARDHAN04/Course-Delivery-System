import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Viewfeedback() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [error, setError] = useState("");
  const location = useLocation();
  const { facultyName } = location.state || {};

  useEffect(() => {
    if (!facultyName) {
      setError("Faculty information is missing.");
      return;
    }

    const fetchFeedback = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/view-feedback/${facultyName}`);
        const feedbackData = response.data.feedback;

        setFeedbackList(feedbackData);

        // Calculate average rating
        if (feedbackData.length > 0) {
          const totalRating = feedbackData.reduce((sum, item) => sum + item.Rating, 0);
          const avg = (totalRating / feedbackData.length).toFixed(1);
          setAverageRating(avg);
        } else {
          setAverageRating("No ratings yet");
        }
      } catch (err) {
        setError("Failed to fetch feedback. Please try again.");
        console.error(err);
      }
    };

    fetchFeedback();
  }, [facultyName]);

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Feedback for {facultyName || "Faculty"}
      </h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {/* Average Rating */}
      <div className="mb-6 text-center">
        <h3 className="text-lg font-medium text-gray-700">Average Rating:</h3>
        <p className="text-2xl font-bold text-yellow-500">
          {averageRating} {typeof averageRating === "number" && "★"}
        </p>
      </div>

      {/* Feedback List */}
      {feedbackList.length > 0 ? (
        <ul className="space-y-4">
          {feedbackList.map((feedback, index) => (
            <li key={index} className="p-4 bg-gray-50 rounded-md border border-gray-200">
              <p>
                <strong>Difficulty:</strong> {feedback.Difficulty}
              </p>
              <p>
                <strong>Rating:</strong>{" "}
                <span className="text-yellow-400">
                  {"★".repeat(feedback.Rating) + "☆".repeat(5 - feedback.Rating)}
                </span>
              </p>
              <p>
                <strong>Feedback:</strong> {feedback.FeedbackText || "No comment"}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Submitted:</strong>{" "}
                {new Date(feedback.SubmittedAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600">No feedback available for this faculty.</p>
      )}
    </div>
  );
}

export default Viewfeedback;
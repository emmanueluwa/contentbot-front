import { useState } from "react";
import logo from "./assets/megaphone.png";

const App = () => {
  const [projectDescription, setProjectDescription] = useState("");
  const [projectTweet, setProjectTweet] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const generatedTweetResponse = await generateTweet();
    setProjectTweet(generatedTweetResponse);
  };

  const generateTweet = async () => {
    const response = await fetch("http://localhost:8000/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ projectDescription }),
    });
    const data = await response.json();
    return data.response;
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <img src={logo} alt="Megaphone logo" className="w-8 h-8" />
            <h1 className="text-3xl font-bold text-gray-900">
              Generate Twitter Post with AI
            </h1>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="query-description"
                placeholder="Describe your project"
                onChange={(e) => setProjectDescription(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium"
            >
              Generate Tweet
            </button>
          </form>

          {projectTweet && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-lg font-medium text-gray-900">
                {projectTweet}
              </h4>
            </div>
          )}

          <div className="text-center text-sm text-gray-500">
            <a
              href="https://www.flaticon.com/free-icons/megaphone"
              title="megaphone icons"
              className="hover:text-gray-700 transition-colors"
            >
              Megaphone icons created by Freepik - Flaticon
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;

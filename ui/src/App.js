import axios from "axios";
import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a request to the server with the prompt
    const apiKey = process.env.REACT_APP_API_KEY;
    axios
      .post(apiKey, { prompt })
      .then((res) => {
        // Update the response state with the server's response
        setResponse(res.data);
        setPrompt("");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div>
      <h1>Lets Chat </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <p>{response}</p>
    </div>
  );
}

export default App;

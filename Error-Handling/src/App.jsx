import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import Error404Page from "./Error404Page";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1000")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        if (error.response) {
          setErrorStatus(error.response.status);

          setError(`Server Error: ${error.response.status}`);
        } else if (error.request) {
          setError("Network Error");
        } else {
          setError(error.message);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading</p>;
  if (parseInt(errorStatus) === 404) return <Error404Page />;
  if (error) return <p style={{ color: "darkred" }}>{error}</p>;

  return (
    <div>
      <p>Post Details</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;

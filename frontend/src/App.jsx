import React, { useEffect, useState } from "react";

function App() {
  const [backendStatus, setBackendStatus] = useState("Checking...");
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    if (!backendUrl) {
      setBackendStatus("Backend URL not configured");
      return;
    }

    fetch(`${backendUrl}/health`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend health check failed");
        }
        return response.json();
      })
      .then((data) => {
        setBackendStatus(data.status);
        setBackendMessage("Backend connection successful!");
      })
      .catch(() => {
        setBackendStatus("Unavailable");
        setBackendMessage("Please check the backend deployment.");
      });
  }, []);

  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      <h1>AWS Microservices Capstone</h1>
      <p>React frontend deployed using Amazon ECS.</p>

      <section>
        <h2>Backend Health</h2>
        <p>Status: {backendStatus}</p>
        <p>{backendMessage}</p>
      </section>

      <p>Frontend application is running.</p>
    </main>
  );
}

export default App;

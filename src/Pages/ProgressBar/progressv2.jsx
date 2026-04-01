import React, { useState, useEffect } from "react";

function ProgressBarV2({ id }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval); // stop when full
          return 100;
        }
        return prev + 1; // increment by 1%
      });
    }, 50); // adjust speed here

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div
      style={{
        margin: "10px 0",
        height: "30px",
        width: "100%",
        backgroundColor: "#eee",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          backgroundColor: "#4caf50",
          textAlign: "center",
          lineHeight: "30px",
          color: "white",
          transition: "width 0.05s linear",
        }}
      >
        {progress}%
      </div>
    </div>
  );
}

export default ProgressBarV2;

import React, { useState } from "react";
import ProgressV2 from "./progressv2"; 

//functional component for progress bar
function ProgressBar() {
  //useState hook to manage progress state
  const [progress, setProgress] = useState(0);


  //It increases the progress value by 10, but never lets it go above 100.
  const increaseProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  //This function decreases the progress value by 10, but never lets it go below 0.
  const decreaseProgress = () => {
    setProgress((prev) => (prev > 0 ? prev - 10 : 0));
  };

  const removeProgress = () => {
    setProgress(0);
  }

//childComponet(v2 Hooks)
 const [bars, setBars] = useState([]);

  const addBar = () => {
    setBars((prev) => [...prev, { id: Date.now() }]);
  };
//childComponent(v2 Hooks)



  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
          <p><h2>ProgressBar</h2></p>
      <div
        style={{
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
            color: "white",
            lineHeight: "30px",
            transition: "width 0.3s",
          }}
        >
          {progress}%
        </div>
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={increaseProgress}>Increase</button>
        <button onClick={decreaseProgress} style={{ marginLeft: "0px",marginTop:"5px" }}>
          Decrease
        </button>
          <button onClick={removeProgress} style={{ marginLeft: "0px",marginTop:"5px" }}>
          Remove
        </button>
      </div>
      <div>
         <div style={{ width: "400px", margin: "50px auto", textAlign: "center" }}>
         <h2>Dynamic Progress Bars</h2>
         <button onClick={addBar}>Add Progress Bar</button>
            {bars.map((bar) => (
              <ProgressV2 key={bar.id} id={bar.id} />
           ))}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
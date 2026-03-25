// Accordion.js
import React, { useState } from "react";


const Acc = ({items}) => {
    //activeIndex--->Current value
    //setActiveIndex--->Function to update the value of activeIndex
    //inetial value-->null
      const [activeIndex, setActiveIndex] = useState(null);
      const toggleIndex = (index) => {
               // If already open, close it
             setActiveIndex(activeIndex === index ? null : index);
          };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => toggleIndex(index)}
            style={{
              cursor: "pointer",
              background: "#f1f1f1",
              padding: "10px",
              fontWeight: "bold",
              borderBottom: "1px solid #ccc",
            }}
          >
            {item.title}
          </div>
          {activeIndex === index && (
            <div
              className="accordion-content"
              style={{
                padding: "10px",
                borderBottom: "1px solid #ccc",
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
    );
  };
  
  export default Acc;
import React, { useState, useEffect } from "react";

const maxwidth = window.innerWidth;
console.log(maxwidth);
function Progressbar() {
  const [width, setWidth] = useState(0);

  
  

  useEffect(() => {
    const interval = setInterval(() => {
      if(width < maxwidth){
        setWidth(width + 1);
      }
      else {
        clearInterval(interval);
       }
    }, 10);
    return () => {
      clearInterval(interval); // Clean up the interval on unmount
    };
  }, );

  const progressStyle = {
    width: `${width}px`,
    height: "10px",
    border: "black",
    backgroundColor: "blue",
  };

  return <div style={progressStyle}></div>;
}

export default Progressbar;

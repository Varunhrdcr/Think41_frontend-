import React, { useState } from "react";
import ImageCanvas from "./components/ImageCanvas";
import Controls from "./components/Controls";

const App = () => {
  const [imageData, setImageData] = useState(null);
  const [neighborhoodSize, setNeighborhoodSize] = useState(3);
  const [grayscale, setGrayscale] = useState(false);
  const [hoverRGBA, setHoverRGBA] = useState(null);

  return (
    <div className="app">
      <h1 className="title">🖼️ Image Smoothing App</h1>

      <Controls
        setImageData={setImageData}
        neighborhoodSize={neighborhoodSize}
        setNeighborhoodSize={setNeighborhoodSize}
        grayscale={grayscale}
        setGrayscale={setGrayscale}
      />

      {hoverRGBA && (
        <div className="rgba-display">
          RGBA: {hoverRGBA.r}, {hoverRGBA.g}, {hoverRGBA.b}, {hoverRGBA.a}
        </div>
      )}

      <ImageCanvas
        imageData={imageData}
        neighborhoodSize={neighborhoodSize}
        grayscale={grayscale}
        setHoverRGBA={setHoverRGBA}
      />

      <footer>Built by Varun Sharma © 2025</footer>
    </div>
  );
};

export default App;

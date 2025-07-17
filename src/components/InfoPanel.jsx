import React from 'react';

export default function InfoPanel({ hoveredPixel }) {
  return (
    <div className="info-panel">
      {hoveredPixel ? (
        <>
          <p><strong>Position:</strong> ({hoveredPixel.x}, {hoveredPixel.y})</p>
          <p><strong>RGBA:</strong> {hoveredPixel.r}, {hoveredPixel.g}, {hoveredPixel.b}, {hoveredPixel.a}</p>
        </>
      ) : (
        <p>Hover over the image to see pixel info</p>
      )}
    </div>
  );
}

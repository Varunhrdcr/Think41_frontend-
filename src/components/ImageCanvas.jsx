import React, { useEffect, useRef } from "react";

const ImageCanvas = ({ imageData, neighborhoodSize, grayscale, setHoverRGBA }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!imageData || !canvasRef.current) return;

    const canvas = canvasRef.current;
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    const ctx = canvas.getContext("2d");

    const smoothedData = new ImageData(imageData.width, imageData.height);
    const getIndex = (x, y) => (y * imageData.width + x) * 4;

    for (let y = 0; y < imageData.height; y++) {
      for (let x = 0; x < imageData.width; x++) {
        let r = 0, g = 0, b = 0, a = 0, count = 0;

        for (
          let dy = -Math.floor(neighborhoodSize / 2);
          dy <= Math.floor(neighborhoodSize / 2);
          dy++
        ) {
          for (
            let dx = -Math.floor(neighborhoodSize / 2);
            dx <= Math.floor(neighborhoodSize / 2);
            dx++
          ) {
            const nx = x + dx;
            const ny = y + dy;

            if (
              nx >= 0 &&
              nx < imageData.width &&
              ny >= 0 &&
              ny < imageData.height
            ) {
              const idx = getIndex(nx, ny);
              r += imageData.data[idx];
              g += imageData.data[idx + 1];
              b += imageData.data[idx + 2];
              a += imageData.data[idx + 3];
              count++;
            }
          }
        }

        r = r / count;
        g = g / count;
        b = b / count;
        a = a / count;

        if (grayscale) {
          const gray = 0.299 * r + 0.587 * g + 0.114 * b;
          r = g = b = gray;
        }

        const outIdx = getIndex(x, y);
        smoothedData.data[outIdx] = r;
        smoothedData.data[outIdx + 1] = g;
        smoothedData.data[outIdx + 2] = b;
        smoothedData.data[outIdx + 3] = a;
      }
    }

    ctx.putImageData(smoothedData, 0, 0);
  }, [imageData, neighborhoodSize, grayscale]);

  const handleMouseMove = (e) => {
    if (!imageData || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.floor(e.clientX - rect.left);
    const y = Math.floor(e.clientY - rect.top);

    if (x >= 0 && x < imageData.width && y >= 0 && y < imageData.height) {
      const idx = (y * imageData.width + x) * 4;
      const r = imageData.data[idx];
      const g = imageData.data[idx + 1];
      const b = imageData.data[idx + 2];
      const a = imageData.data[idx + 3];

      setHoverRGBA({ r, g, b, a });
    } else {
      setHoverRGBA(null);
    }
  };

  return <canvas ref={canvasRef} className="canvas" onMouseMove={handleMouseMove} />;
};

export default ImageCanvas;

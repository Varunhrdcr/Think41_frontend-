import React from "react";

const Controls = ({
  setImageData,
  neighborhoodSize,
  setNeighborhoodSize,
  grayscale,
  setGrayscale,
}) => {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        setImageData(imageData);
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="controls">
      <input type="file" accept="image/*" onChange={handleUpload} />
      <select
        value={neighborhoodSize}
        onChange={(e) => setNeighborhoodSize(Number(e.target.value))}
      >
        <option value={3}>3x3</option>
        <option value={5}>5x5</option>
        <option value={7}>7x7</option>
      </select>
      <label>
        <input
          type="checkbox"
          checked={grayscale}
          onChange={(e) => setGrayscale(e.target.checked)}
        />
        Grayscale
      </label>
    </div>
  );
};

export default Controls;

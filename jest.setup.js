// jest.setup.js
HTMLCanvasElement.prototype.getContext = () => {
    // Return a dummy context object
    return {
      fillRect: () => {},
      clearRect: () => {},
      getImageData: (x, y, w, h) => {
        return {
          data: new Array(w * h * 4)
        };
      },
      putImageData: () => {},
      createImageData: () => [],
      setTransform: () => {},
      drawImage: () => {},
      save: () => {},
      fillText: () => {},
      restore: () => {},
      beginPath: () => {},
      moveTo: () => {},
      lineTo: () => {},
      closePath: () => {},
      stroke: () => {},
      translate: () => {},
      scale: () => {},
      rotate: () => {},
      arc: () => {},
      fill: () => {},
      measureText: () => ({ width: 0 }),
      transform: () => {},
      rect: () => {},
      clip: () => {}
    };
  };
  
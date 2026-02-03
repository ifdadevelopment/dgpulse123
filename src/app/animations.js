// animations.js
export const animations = {
  fadeUp: {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut" },
    },
  },

  fadeDown: {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut" },
    },
  },

  fadeLeft: {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeOut" },
    },
  },

  fadeRight: {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeOut" },
    },
  },

  zoomIn: {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { ease: "easeOut" },
    },
  },

  zoomOut: {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { ease: "easeOut" },
    },
  },

  slideUp: {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { ease: "easeOut" },
    },
  },

  flipLeft: {
    hidden: { rotateY: -100 },
    visible: {
      rotateY: 0,
      transition: { ease: "easeOut" },
    },
  },
};

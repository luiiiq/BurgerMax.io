export default function debounce(callback, delay) {
  let tempo;
  return (...args) => {
    if (tempo) {
      clearTimeout(tempo);
    };
    tempo = setTimeout(() => {
      callback(...args);
      tempo = null;
    }, delay);
  };
};

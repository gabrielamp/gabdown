window.onload = () => {
  fetch("index.gd")
    .then(response => response.text())
    .then(data => gabify(document.body, data));
};

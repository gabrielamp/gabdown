createCustomElement("thm-env", "<b>Theorem. </b><i>",  "</i>");
createCustomElement("def-env", "<b>Definition. </b>", "");
createCustomElement("proof-env", "<i>Proof. </i>", " <span style='float:right;'>▢ </span>");

window.onload = () => {
  fetch("/index.gd")
    .then(response => response.text())
    .then(data => gabify(document.body, data));
};

function replaceAll(s, find, replace) {
  return s.replace(new RegExp(find, 'g'), replace);
}

//Fix this
function processString(s) {
  s = replaceAll(s, String.raw`\\\(`, String.raw`\\(`);
  s = replaceAll(s, String.raw`\\\)`, String.raw`\\)`);
  s = replaceAll(s, String.raw`\\\[`, String.raw`\\[`);
  s = replaceAll(s, String.raw`\\\]`, String.raw`\\]`);
  return s;
}

function createCustomElement(name, first, last) {
  customElements.define(name, class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = marked(processString(first + this.innerHTML + last));
    }
    connectedCallback() {
      renderMathInElement(this,
        [
          {left: "$$", right: "$$", display: true},
          {left: "\\(", right: "\\)", display: false},
          {left: "\\[", right: "\\]", display: true},
          {left: "\\\\(", right: "\\\\)", display: false},
          {left: "\\\\[", right: "\\\\]", display: true}
        ]);
    }
  });
}

function gabify(element, gabdown) {
  element.innerHTML = marked(processString(gabdown));
  renderMathInElement(element, {
      delimiters: [
        {left: "$", right: "$", display: false},
        {left: "$$", right: "$$", display: true},
        {left: "\\(", right: "\\)", display: false},
        {left: "\\[", right: "\\]", display: true},
        {left: "\\\\(", right: "\\\\)", display: false},
        {left: "\\\\[", right: "\\\\]", display: true}
      ]
    }
  );
}

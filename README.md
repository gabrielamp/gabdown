# gabdown

## Import

```HTML
  <!-- KaTeX -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossorigin="anonymous">

  <!-- The loading of KaTeX is deferred to speed up page rendering -->
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js" integrity="sha384-y23I5Q6l+B6vatafAwxRu/0oK/79VlbSz7Q9aiSZUvyWYIYsd+qj+o24G5ZU2zJz" crossorigin="anonymous"></script>

  <!-- To automatically render math in text elements, include the auto-render extension: -->
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js" integrity="sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI" crossorigin="anonymous"></script>

  <!-- Markdown -->
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  
  <!-- Gabdown -->
  <script src="https://gabrielamp.github.io/gabdown/gabdown.js"></script>
```

## Usage

```javascript
  // Render gabdown content inside of element.
  gabify(element, gabdown);
  
  // Making custom elements.
  createCustomElement("thm-env", "<b>Theorem. </b><i>",  "</i>");
  createCustomElement("def-env", "<b>Definition. </b>", "");
```

```
# Example Title

## Example subtitle

<def-env>
A group \( G \) is said to be *abelian* if \( xy = yx \) for every \( x, y \in G \).
</def-env>

<thm-env>
Let \( G \) be an abelian group.
Let \( H \leq G \) be a subgroup.
Then, \( H \) is a normal subgroup of \( G \).
</thm-env>
```

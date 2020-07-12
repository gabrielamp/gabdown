# gabdown

## gabdown for Webpages

### Example
An example gabdown rendered page looks like [this](https://gabrielamp.github.io/gabdown/).

### Usage (No Command Line) 
1. Download the repository as `.zip` (by clicking on **Code** and then **Download ZIP**)
2. Extract `index.html`, `index.gd` and `style.css` into the desired folder
3. Edit the `index.gd` file
4. Make a GitHub repository
5. Upload `index.html`, `index.gd` and `style.css` to the repository
6. Go to **Settings** > **GitHub Pages** > **Source**, and select **master branch**
7. Your page is now accessible at `githubusername.github.io/repositoryname` where `githubusername` is your username and `repository name` is the name of the repository made in step 4.

### Usage (Command Line)
1. Go to your desired project directory
2. Download the necessary files using
```
wget https://raw.githubusercontent.com/gabrielamp/gabdown/master/index.gd
wget https://raw.githubusercontent.com/gabrielamp/gabdown/master/index.html
wget https://raw.githubusercontent.com/gabrielamp/gabdown/master/style.css
```
3. Edit the `index.gd` file
4. Preview the file with `python3 -m http.server 8080`
5. Upload the project as a GitHub repository
6. Go to **Settings** > **GitHub Pages** > **Source**, and select **master branch**
7. Your page is now accessible at `githubusername.github.io/repositoryname` where `githubusername` is your username and `repository name` is the name of the repository made in step 5.


## gabdown as a Library

### Import

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

### Usage

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

window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// Re-typeset on page change (only relevant if Material's instant loading is on,
// but harmless otherwise). Guard both document$ and MathJax to avoid races
// during initial page load.
if (typeof document$ !== "undefined") {
  document$.subscribe(() => {
    if (window.MathJax && window.MathJax.startup && window.MathJax.typesetPromise) {
      MathJax.startup.output.clearCache();
      MathJax.typesetClear();
      MathJax.texReset();
      MathJax.typesetPromise();
    }
  });
}

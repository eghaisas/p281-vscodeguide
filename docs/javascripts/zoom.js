// Optional page zoom from the URL, for embedding in an iframe.
// Example: index.html?zoom=1.25 shows the page at 125%.
// The theme sizes everything in rem, so scaling the root font size
// scales text and layout together. Values outside 0.5-3 are ignored.
(function () {
  const zoom = parseFloat(new URLSearchParams(location.search).get("zoom"));
  if (!(zoom >= 0.5 && zoom <= 3)) return;
  // 125% is the theme's base root font size
  document.documentElement.style.fontSize = 125 * zoom + "%";
})();

const colors = ["#a16159", "#d79e61", "#c0d470", "#92b6d4", "#aa76b8"];
window.addEventListener("mousedown", (e) => {
  const color = colors.shift();
  document.documentElement.style.setProperty("--highlight-color", color);
  colors.push(color);
});

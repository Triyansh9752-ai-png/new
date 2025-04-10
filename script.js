function moveRandomEl(elm) {
  // Get the container's bounding rectangle
  const container = document.querySelector('.container');
  const containerRect = container.getBoundingClientRect();
  
  // Ensure the button stays absolute and respects the container
  elm.style.position = "absolute";
  
  // Calculate random position within the container's bounds
  const maxTop = containerRect.height - elm.offsetHeight - 20; // Subtract button height and padding
  const maxLeft = containerRect.width - elm.offsetWidth - 20; // Subtract button width and padding
  const randomTop = Math.floor(Math.random() * maxTop) + 5; // Min 5px from top
  const randomLeft = Math.floor(Math.random() * maxLeft) + 5; // Min 5px from left
  
  elm.style.top = randomTop + "px";
  elm.style.left = randomLeft + "px";
  
  // Ensure it stays above the falling hearts
  elm.style.zIndex = "2";
}

// Select the "No" button
const moveRandom = document.querySelector("#move-random");

// Add slight debounce to prevent excessive movement on rapid hovers
let timeout;
moveRandom.addEventListener("mouseenter", function (e) {
  clearTimeout(timeout);
  moveRandomEl(e.target);
  
  timeout = setTimeout(() => {
    moveRandom.style.pointerEvents = "auto";
  }, 200);
  
  moveRandom.style.pointerEvents = "none";
});

// Reset pointer events when mouse leaves
moveRandom.addEventListener("mouseleave", function () {
  clearTimeout(timeout);
  moveRandom.style.pointerEvents = "auto";
});

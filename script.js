function moveRandomEl(elm) {
  // Ensure the button stays absolute and respects the container
  elm.style.position = "absolute";
  
  // Calculate random position within safer bounds to prevent it from going off-screen
  const maxTop = 85; // Reduced from 90 to keep it more visible
  const maxLeft = 85;
  elm.style.top = Math.floor(Math.random() * maxTop + 5) + "%";
  elm.style.left = Math.floor(Math.random() * maxLeft + 5) + "%";
  
  // Ensure it stays above the falling hearts
  elm.style.zIndex = "2"; // Higher than hearts (z-index: 0) and below container content if needed
}

// Select the "No" button
const moveRandom = document.querySelector("#move-random");

// Add slight debounce to prevent excessive movement on rapid hovers
let timeout;
moveRandom.addEventListener("mouseenter", function (e) {
  clearTimeout(timeout); // Clear any pending moves
  moveRandomEl(e.target);
  
  // Add a small delay before allowing another move
  timeout = setTimeout(() => {
    moveRandom.style.pointerEvents = "auto"; // Re-enable hover after delay
  }, 200); // 200ms delay
  
  // Temporarily disable pointer events to prevent jitter
  moveRandom.style.pointerEvents = "none";
});

// Reset pointer events when mouse leaves (optional for better UX)
moveRandom.addEventListener("mouseleave", function () {
  clearTimeout(timeout);
  moveRandom.style.pointerEvents = "auto";
});

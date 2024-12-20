let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  // Apply the parallax effect only if the scroll value is within bounds
  if (value <= maxScroll) {
    text.style.marginTop = Math.min(value * 2.5, 600) + "px"; 
    leaf.style.top = Math.min(value * -1.5, 800) + "px"; 
    leaf.style.left = Math.min(value * 1.5, 800) + "px"; 
    hill5.style.left = Math.min(value * 1.5, 800) + "px"; 
    hill4.style.left = Math.max(value * -1.5, -800) + "px"; 
    hill1.style.top = Math.min(value * 1, 200) + "px"; 
  }
});
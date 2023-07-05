var counterValue = 0;
function changeText(btnNumber) {
	if (btnNumber == 0) {
  var heading = document.getElementById("heading");
  var paragraph = document.getElementById("paragraph");
  var whichtruthdare = document.getElementById("whichtruthdare");
  
  heading.textContent = "New Heading";
  whichtruthdare.textContent = "TRUTH";
  counterValue++;
  paragraph.textContent = "Lượt: " + counterValue;
  alert("This is a BIG text!");
  }
}

function hideAndShowContent() {
  var contentElement = document.getElementById("content");
  contentElement.style.opacity = 0; // Hide the content by setting opacity to 0
  setTimeout(function() {
    contentElement.style.opacity = 1; // Show the content by setting opacity back to 1
  }, 1000); // Delay the execution for 1 second (1000 milliseconds)
}
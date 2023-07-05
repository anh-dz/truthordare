var counterValue = 0
var bgcolorlist= new Array("#228B22", "#FFD700", "#ADFF2F", "#FF69B4", "#CD5C5C", "#4B0082", "#7CFC00", "#ADD8E6", "#E84643", "#ED0A07", "#EA2907", "#E5294B", "#E00D26", "#FF3030", "#FC7500", "#F95700", "#F43900", "#F95620", "6527BE", "#000", "FFF")

fetch('data/data.json')
  .then(response => response.json())
  .then(jsonData => {
    dataTruth = jsonData.truth
    dataDare = jsonData.dare
  })
  .catch(error => {
    console.error('Error:', error)
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function changeText(btnNumber) {
	if (btnNumber == 0) {
    var content = dataTruth[Math.floor(Math.random() * dataTruth.length)]
    var title = "TRUTH"
    var col = "#1A5D1A"
  }
  if (btnNumber == 1) {
    var content = dataDare[Math.floor(Math.random() * dataDare.length)]
    var title = "DARE"
    var col = "#FF6D60"
  }
  updateText(content, title, col)
}

function updateText(content, title, col) {
  var heading = document.getElementById("heading")
  var paragraph = document.getElementById("paragraph")
  var whichtruthdare = document.getElementById("whichtruthdare")

  heading.textContent = content
  whichtruthdare.textContent = title
  whichtruthdare.style.color = col
  counterValue++
  paragraph.textContent = "👉 Lượt: " + counterValue
  hideAndShowContent()
}

function hideAndShowContent() {
  var headerElement = document.getElementById("header")
  var contentElement = document.getElementById("content")
  var footerElement = document.getElementById("footer")
  document.body.style.backgroundColor = bgcolorlist[Math.floor(Math.random() * bgcolorlist.length)]

  headerElement.style.opacity = 0
  contentElement.style.opacity = 0
  footerElement.style.opacity = 0
  setTimeout(function() {
    headerElement.style.opacity = 1
    contentElement.style.opacity = 1
    footerElement.style.opacity = 1

    document.body.style.backgroundColor = ""
  }, getRandomNumber(100, 700))
}
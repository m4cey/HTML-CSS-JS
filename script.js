let i = 1
function cycle() {
  i = i % 29 + 1
  cat.src = `cats/cat${i}.png`
  document.body.style.backgroundColor = (i % 2) ? "#F5A9B8" : "#5BCEFA"
}

const cat = document.getElementById("cat")
cat.addEventListener("click", cycle, true)
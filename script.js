const container = document.getElementById("container")

let x = getRndInteger(300, 400); 

let i = 1

while (i< 5){

    const pillartop = document.createElement("div")
    const pillarbottom = document.createElement("div")

    let height = getRndInteger(400, 600);   

    pillartop.style.position = "absolute"
    pillartop.style.width = "80px"
    pillartop.style.height = `${height}px`
    pillartop.style.left = `${x*i}px`
    pillartop.style.top = "0px"
    pillartop.style.backgroundColor = "green"

    pillarbottom.style.position = "absolute"
    pillarbottom.style.width = "80px"
    pillarbottom.style.height = `${1000 - height}px`
    pillarbottom.style.left = `${x*i}px`
    pillarbottom.style.top = `${height + 200}px`
    pillarbottom.style.backgroundColor = "green"

    container.appendChild(pillartop)
    container.appendChild(pillarbottom)

    i += 1
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
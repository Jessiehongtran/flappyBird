const container = document.getElementById("container")

let x = getRndInteger(300, 400); 

const pillarCoors = []

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

    pillarCoors.push({
        top: {
            x_start: x*i,
            x_end: x*i + 80,
            y_start: 0,
            y_end: height
        },
        bottom: {
            x_start: x*i,
            x_end: x*i + 80,
            y_start: height + 200,
            y_end: 1200
        }
    })

    container.appendChild(pillartop)
    container.appendChild(pillarbottom)

    i += 1
}

const bird = document.createElement("div")
bird.setAttribute("id", "bird")
let birdY = getRndInteger(400, 600) + 100;
let birdX = x - 200  

bird.style.position = "absolute"
bird.style.width = "60px"
bird.style.height = "60px"
bird.style.backgroundColor = "red"
bird.style.left = `${birdX}px`
bird.style.top = `${birdY}px`

container.appendChild(bird)

//Key control
function handleKeyDown(e){
    if (e.key === "ArrowUp"){
        console.log('up')
        birdY -= 50
    } else if (e.key === "ArrowDown"){
        console.log('down')
        birdY += 50
    }
    bird.style.left = `${birdX}px`
    bird.style.top = `${birdY}px`
}

//check touching pillars
function isTouchingPillars(birdX, birdY){
    console.log('pillarCoors', pillarCoors)
    for (let i = 0; i < pillarCoors.length ; i++){
        if (birdX >= pillarCoors[i].top.x_start 
            && birdX <= pillarCoors[i].top.x_end){
                if (birdY >= pillarCoors[i].top.y_start && birdY <= pillarCoors[i].top.y_end
                    || birdY + 60 >= pillarCoors[i].bottom.y_start && birdY + 60 <= pillarCoors[i].bottom.y_end){
                        return true
                    }
            }
    }
    return false
}

//mave object keeps moving right
function moveRight(){
    console.log(birdX)
    //if not touching pillars
    console.log(isTouchingPillars(birdX, birdY))
    if (! isTouchingPillars(birdX, birdY)){
        birdX += 10
        bird.style.left = `${birdX}px`
        bird.style.animation = 'none'
        setTimeout(moveRight, 50)
    }
}


document.addEventListener('keydown', handleKeyDown)

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


moveRight()
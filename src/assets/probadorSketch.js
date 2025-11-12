
// canvas
const s = 1.33333333333
let cnv

// prendas de vestir
let camisetas = {}
let camiseta1, camiseta2, camiseta3
let currentCamiseta

// ml5
let bodyPose
let poses = []

// video
let video
const vScale = 4

async function setup () {
  // container del sketch
  const container = document.getElementById('probadorCanvas')

  cnv = createCanvas(container.parentNode.offsetWidth, container.parentNode.offsetWidth/s)
  cnv.parent('probadorCanvas')

  bodyPose = await ml5.bodyPose('MoveNet', {
    modelType: 'SINGLEPOSE_LIGHTNING'
  })

  video = createCapture(VIDEO)
  video.size(width/vScale, height/vScale)
  video.hide()

  bodyPose.detectStart(video, gotPoses)

  camiseta1 = await loadImage('src/assets/images/diseño1.png')
  camiseta2 = await loadImage('src/assets/images/diseño2.png')
  camiseta3 = await loadImage('src/assets/images/diseño3.png')

  camisetas = {
    'Diseño 1': camiseta1,
    'Diseño 2': camiseta2,
    'Diseño 3': camiseta3
  }
  console.log('done setup')

}

function draw () {

  image(video, 0, 0, width, height)

  drawMarkers(poses)

  if (currentCamiseta) image(camisetas[currentCamiseta], mouseX, mouseY)
}

// redimensionar canvas cuando se redimensione la pantalla
function windowResized() {
  const container = document.getElementById('probadorCanvas')
  resizeCanvas(container.parentNode.offsetWidth, container.parentNode.offsetWidth/s)
  video.size(width/vScale, height/vScale)
}

// callback para recibir click a camisetas
function onPrendaClick (n) {
  console.log('setting', n, 'poses', poses)
  currentCamiseta = n
}

// callback para recibir las poses
function gotPoses (results) {
  poses = results
}

// draw markers
function drawMarkers (poses) {
  if (!poses.length) return

  fill('red')
  for (const pose of poses) {
    const { left_shoulder, right_shoulder } = pose

    if (right_shoulder.confidence > 0.2) {
      circle(right_shoulder.x * vScale, right_shoulder.y * vScale, 50)
    }
    if (left_shoulder.confidence > 0.2) {
      circle(left_shoulder.x * vScale, left_shoulder.y * vScale, 50)
    }
  }
}


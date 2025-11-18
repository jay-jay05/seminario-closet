
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

  camiseta1 = await loadImage('src/assets/images/fotocamisa1.png')
  camiseta2 = await loadImage('src/assets/images/fotocamisa2.png')
  camiseta3 = await loadImage('src/assets/images/fotocamisa3.png')

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

  // ==== PROBADOR REAL USANDO HOMBROS ====
  if (poses.length && currentCamiseta) {

    const { left_shoulder, right_shoulder } = poses[0];

    if (left_shoulder.confidence > 0.2 && right_shoulder.confidence > 0.2) {

      // Ajustar coordenadas al escalado del video
      const lsX = left_shoulder.x * vScale;
      const lsY = left_shoulder.y * vScale;
      const rsX = right_shoulder.x * vScale;
      const rsY = right_shoulder.y * vScale;

      // Centro entre los hombros
      const centerX = (lsX + rsX) / 2;
      const centerY = (lsY + rsY) / 2;

      // Ancho entre hombros
      const ancho = dist(lsX, lsY, rsX, rsY) * 2;

      // Ángulo de inclinación
      const angle = atan2(rsY - lsY, rsX - lsX);

      // ==== DIBUJAR CAMISETA ====
      push();
      translate(centerX, centerY + 180); // Bajar la camiseta al pecho
      // rotate(angle); // Actívalo si quieres rotación realista
      imageMode(CENTER);
      image(camisetas[currentCamiseta], 0, 0, ancho * 0.9, ancho * 0.9);
      pop();
    }
  }
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


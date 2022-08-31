const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
let direction = 0;

const snowImg = new Image();
snowImg.src = "./snow.png";
snowImg.onload = function () {
  render();
};
ctx.fillRect(canvas.width / 2, canvas.height / 2, 100, 100);

const TOTAL = 200;

class Snow {
  constructor() {
    this.x = Math.random() * canvas.width; // 0 * 1000 ~ 1 * 1000
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * 10 + 10;
    // this.h = Math.random() * 10 + 8;
    this.xSpeed = Math.random() * 40 + 30;
    this.ySpeed = Math.random() * 0.5 + 0.5;
  }

  draw() {
    ctx.drawImage(
      snowImg,
      this.x + Math.cos(this.y * 0.02) * this.xSpeed,
      this.y,
      this.r,
      this.r
    );
  }

  animate() {
    if (this.y > canvas.height || this.x > canvas.width) {
      this.x = Math.random() * canvas.width * 2;
      this.y = -Math.random() * canvas.height * 2;
    }
    this.x += direction;
    this.y += this.ySpeed;
    this.draw();
  }
}

let snowArr = [];
for (let i = 0; i < TOTAL; i++) {
  snowArr.push(new Snow());
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snowArr.forEach((snow) => snow.animate());

  window.requestAnimationFrame(render);
}

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

canvas.addEventListener("mousemove", function (e) {
  direction = -Math.cos((e.clientX / canvas.width) * Math.PI);
});

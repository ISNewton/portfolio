

console.log('ania')
const blobs = document.querySelectorAll(".blob");
let last = 0;
let changeSpeed = 1500;
let rAF;

function render(now) {
  if (!last || now - last >= changeSpeed) {
    last = now;
    blobs.forEach(blob => {
      blob.style.borderTopLeftRadius = `${random()}px ${random()}px`;
      blob.style.borderTopRightRadius = `${random()}px ${random()}px`;
      blob.style.borderBottomLeftRadius = `${random()}px ${random()}px`;
      blob.style.borderBottomRightRadius = `${random()}px ${random()}px`;
    });
  }
  rAF = requestAnimationFrame(render);
}

const random = () => {
  return Math.floor((Math.random() * 1000000));
};

render(last);

const root = document.documentElement;

const widthSlider = document.querySelector("#width-range");
widthSlider.addEventListener("input", e => {
  root.style.setProperty('--width', e.target.value + "px");
})
// const xSlider = document.querySelector("#x-range");
// xSlider.addEventListener("input", e => {
//   root.style.setProperty('--x-speed', e.target.value + "s");
// })
// const ySlider = document.querySelector("#y-range");
// ySlider.addEventListener("input", e => {
//   root.style.setProperty('--y-speed', e.target.value + "s");
// })
// const transitionSlider = document.querySelector("#transition-speed");
// transitionSlider.addEventListener("input", e => {
//   root.style.setProperty('--transition-speed', e.target.value + "s");
// })
// const changeSlider = document.querySelector("#change-speed");
// transitionSlider.addEventListener("input", e => {
//   cancelAnimationFrame(rAF);
//   last = 0;
//   render(last);
//   changeSpeed = e.target.value;
// })



const svg = document.getElementById("svg");

const getTranslate = (element) => {
  const transform = element.style.transform;
  let x = 0,
    y = 0;
  if (transform.includes("translateX"))
    x = parseInt(transform.slice(transform.indexOf("translateX") + 11));

  if (transform.includes("translateY"))
    y = parseInt(transform.slice(transform.indexOf("translateY") + 11));

  return { x, y };
};

const pan = (direction) => {
  const { x, y } = getTranslate(svg);
  let dx = 0,
    dy = 0;
  switch (direction) {
    case "left":
      dx = -1;
      break;
    case "right":
      dx = 1;
      break;
    case "up":
      dy = -1;
      break;
    case "down":
      dy = 1;
      break;
  }
  svg.style.transform =
    "translateX(" + (x + dx) + "%) translateY(" + (y + dy) + "%)";
};

document.getElementById("left-button").onclick = () => pan("left");
document.getElementById("right-button").onclick = () => pan("right");
document.getElementById("up-button").onclick = () => pan("up");
document.getElementById("down-button").onclick = () => pan("down");

let STARSRATING = [
  { stars: 5, num: 14754 },
  { stars: 4, num: 9480 },
  { stars: 3, num: 1240 },
  { stars: 2, num: 340 },
  { stars: 1, num: 270 },
];
const starsRating = document.querySelector(".stars-statistic");
function renderStarsRating() {
  STARSRATING.forEach((star) => {
    const liTag = document.createElement("li");
    liTag.classList.add("start-rating-content");
    const divCoNTag = document.createElement("div");
    divCoNTag.classList.add("star-container-empty");
    const divTag = document.createElement("div");
    divTag.classList.add("star-container-full");
    const spanStarTag = document.createElement("span");
    const spanNumTag = document.createElement("span");
    spanStarTag.textContent = `${star.stars} star`;
    spanNumTag.textContent = star.num;
    divTag.style.height = "100%";
    divTag.style.width = `${(star.num * 100) / 23980}%`;
    divCoNTag.appendChild(divTag);
    liTag.appendChild(spanStarTag);
    liTag.appendChild(divCoNTag);
    liTag.appendChild(spanNumTag);
    starsRating.appendChild(liTag);
  });
}
renderStarsRating();

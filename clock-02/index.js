const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const hand = document.querySelector(".hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    if (secondHand.style.transform === "rotate(90deg)") {
      hand.style.transition = "none";
      console.log("hi");
    }

}

console.dir(hand);



// hand.addEventListener("transitionend", (e) => {
//     console.log(e.propertyName);

// })


setInterval(setDate, 1000); // 1초마다 setDate 함수를 실행한다. 1초마다 "hi"가 출력된다.

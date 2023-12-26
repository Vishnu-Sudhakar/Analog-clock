document.addEventListener("DOMContentLoaded", function () {
    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const secondHand = document.querySelector(".second-hand");
  
    function updateClock() {
      const now = new Date();
  
      const hours = now.getHours() % 12; // Convert to 12-hour format
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
  
      const hourDeg = (hours + minutes / 60) * 360 / 12;
      const minuteDeg = (minutes + seconds / 60) * 360 / 60;
      const secondDeg = seconds * 360 / 60;
  
      setRotation(hourHand, hourDeg);
      setRotation(minuteHand, minuteDeg);
      setRotation(secondHand, secondDeg);
    }
  
    function setRotation(element, rotation) {
      element.style.transform = `translate(-50%, -100%) rotate(${rotation}deg)`;
    }
  
    setInterval(updateClock, 1000);
    updateClock(); // Initial update
  });
  
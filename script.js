document.addEventListener("DOMContentLoaded", () => {
  const balloonsContainer = document.getElementById("balloons");
  const startButton = document.getElementById("start-celebration-btn");
  const cakeContainer = document.getElementById("cake-container");
  const celebrationAudio = document.getElementById("celebration-audio");

  // Function to create floating balloons
  function createBalloon() {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    balloonsContainer.appendChild(balloon);

    // Remove balloon after animation
    setTimeout(() => {
      balloon.remove();
    }, 6000);
  }

  // Start Celebration Event
  startButton.addEventListener("click", () => {
    // Play the celebration audio
    celebrationAudio.play();

    // Show the cake
    cakeContainer.style.opacity = "1";

    // Release balloons
    for (let i = 0; i < 30; i++) {
      setTimeout(createBalloon, i * 200);
    }
  });
});




function createBalloons() {
  

  // Create decorative lights
  for (let i = 0; i < 20; i++) {
    const light = document.createElement('div');
    light.className = 'light';
    light.style.left = Math.random() * 100 + 'vw';
    light.style.top = Math.random() * 100 + 'vh';
    light.style.animationDuration = Math.random() * 2 + 1 + 's'; // Random twinkle duration
    document.body.appendChild(light);

    // Remove light after some time
    
  }
 setTimeout(()=>{
    document.body.innerHTML=`
    <div style="display: contents;
    font-size: 24px;
    font-family: 'Courier New', Courier, monospace;">
      Kaat Liya Cake ..?? Acha Suno ab I Really love you soo much 💕 I wish ki ye birthday tumhara Sabse acha jaye 
      bhale hi hum pass nhi hai lekin phir bhi lagta hai sabse pass tum hi ho ... mujhe nhi pata kya bolna chahiye bas enjoy your day my little princess ..
      Gift toh nhi de paya abhi kch lekin mai tumhe apni sari duniya dena chahta hu  aur bas return Gift mei tumhari Mushkhurat chahte hai ..Khush rahiye madam ji apki khushi mei hi humhari khushi hai 
    </div>`;
  },15000);

}


document.addEventListener('DOMContentLoaded', function() {


  // Get the velocity value from the HTML element
});



function speedGauge(){
    
    var velocityElement = document.querySelector('.velocity');
    velocityElement.textContent =mqttSpeedValue;
    
    rotateArrow() 
}

function temperature(){
    var temperatureElement = document.querySelector('.i');
    temperatureElement.textContent = mqttTemperatureValue;
}

function humidity(){
    var humidityElement = document.querySelector('.i2');
    humidityElement.textContent = mqttHumidValue;
}
function incline(){
    var inclineElement = document.querySelector('.div1');
    inclineElement.textContent = mqttTurnValue;
    // rotateArrowIncline();
    
}

function distance(){
  var distanceElement = document.querySelector('.dist_value');
  distanceElement.textContent = mqttDistanceValue;

}

let previousRotationAngle = 0;


function rotateArrow() {
  // Get the velocity value from the HTML element
  const velocityElement = document.querySelector('.velocity');
  const velocityValue = parseInt(velocityElement.textContent);
  console.log('Parsed velocity value:', velocityValue);

  // Calculate the rotation angle based on the velocity value
  const rotationAngle = velocityValue * 22.5; // Adjust the multiplier as needed
  
  // Calculate the incremental angle change
  const incrementalAngle = rotationAngle - previousRotationAngle;

  // Create a dynamic CSS rule for the rotation animation
  const styleSheet = document.createElement('style');
  styleSheet.innerHTML = `
    @keyframes rotate-arrow {
      0% {
        transform: rotate(${previousRotationAngle}deg);
      }
      100% {
        transform: rotate(${rotationAngle}deg);
      }
    }`;

  // Add the dynamic CSS rule to the document's head
  document.head.appendChild(styleSheet);

  // Apply the animation to the arrow-icon
  const arrowIcon = document.querySelector('.arrow-icon');
  arrowIcon.style.animation = 'rotate-arrow 1s cubic-bezier(0.42, 0, 0.58, 1) infinite';

  // Update the previous rotation angle
  previousRotationAngle = rotationAngle;
}



// function rotateArrowIncline() {
//   // Get the incline value from the HTML element
//   const inclineElement = document.querySelector('.div1');
//   const inclineValue = parseInt(inclineElement.textContent);
//   console.log('Parsed incline value:', inclineValue);

//   // Calculate the rotation angle based on the incline value
//   const rotationAngleIncline = inclineValue * 1; // Adjust the multiplier as needed

//   // Calculate the incremental angle change
//   // Create a dynamic CSS rule for the rotation animation
//   const styleSheet = document.createElement('style');
//   styleSheet.innerHTML = `
//     @keyframes rotate-incline {
//       0% {
//         transform: rotate-1(${previousRotationAngleIncline}deg);
//       }
//       100% {
//         transform: rotate-1(${rotationAngleIncline}deg);
//       }
//     }`;

//   // Add the dynamic CSS rule to the document's head
//   document.head.appendChild(styleSheet);

//   // Apply the animation to the incline-icon
//   const inclineIcon = document.querySelector('.needle-icon');
//   inclineIcon.style.animation = 'rotate-incline 1s cubic-bezier(0.42, 0, 0.58, 1) infinite';

//   // Update the previous rotation angle
//   const previousRotationAngleIncline = rotationAngleIncline;
// }

  

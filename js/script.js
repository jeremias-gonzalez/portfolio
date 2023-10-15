// var colors = new Array(
//     [0,0,0],
//     [255,255,60],
//     [255,225,98],
//     [45,0,230],
//     [255,0,255],
//     [0,0,0]);
  
//   var step = 0;
//   //color table indices for: 
//   // current color left
//   // next color left
//   // current color right
//   // next color right
//   var colorIndices = [0,1,2,3];
  
//   //transition speed
//   var gradientSpeed = 0.002;
  
//   function updateGradient()
//   {
    
//     if ( $===undefined ) return;
    
//   var c0_0 = colors[colorIndices[0]];
//   var c0_1 = colors[colorIndices[1]];
//   var c1_0 = colors[colorIndices[2]];
//   var c1_1 = colors[colorIndices[3]];
  
//   var istep = 1 - step;
//   var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
//   var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
//   var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
//   var color1 = "rgb("+r1+","+g1+","+b1+")";
  
//   var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
//   var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
//   var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
//   var color2 = "rgb("+r2+","+g2+","+b2+")";
  
//    $('#gradient').css({
//      background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
//       background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
//     step += gradientSpeed;
//     if ( step >= 1 )
//     {
//       step %= 1;
//       colorIndices[0] = colorIndices[1];
//       colorIndices[2] = colorIndices[3];
      
//       //pick two new target color indices
//       //do not pick the same as the current one
//       colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
//       colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
//     }
//   }
  
//   setInterval(updateGradient,10);
//   const container = document.querySelector('.container');

// window.addEventListener('scroll', () => {
//     const scrollY = window.scrollY;
//     container.style.backgroundPositionY = -scrollY * 0.5 + 'px'; // Ajusta el valor 0.5 según tu preferencia
// });

// script.js
// script.js
const imgElement = document.querySelector('.img-code');
const imgElements = document.querySelector('.presentacion-img');
let posY = 0;
let direction = 1; // 1 para mover hacia abajo, -1 para mover hacia arriba

function animateFloating() {
    const speed = 0.5; // Ajusta la velocidad (valores más bajos son más lentos)

    posY += speed * direction;

    if (posY >= 20) {
        direction = -1; // Cambia la dirección cuando llega al fondo
    } else if (posY <= -10) {
        direction = 1; // Cambia la dirección cuando llega arriba
    }

    imgElement.style.transform = `translateY(${posY}px)`;
    imgElements.style.transform = `translateY(${posY}px)`;
    requestAnimationFrame(animateFloating);
}

animateFloating(); // Inicia la animación

// script.js
const textElement = document.getElementById('texto');
const text = "JEREMIAS GONZALEZ DEVELOPER FRONT-END"; // El texto que deseas mostrar
let index = 0;

function typeText() {
    textElement.textContent = text.slice(0, index);
    index++;

    if (index <= text.length) {
        setTimeout(typeText, 100); // Ajusta la velocidad de escritura
    }
}

typeText(); // Inicia la animación

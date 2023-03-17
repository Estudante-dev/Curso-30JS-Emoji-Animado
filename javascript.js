// seleciona a pupila do personagem
const pupila = document.querySelector('.pupila');

// adiciona um evento "mousemove" no documento
document.addEventListener('mousemove', (event) => {
  // calcula a posição da pupila com base na posição do mouse
  let x = (event.clientX * 100) / window.innerWidth;
  let y = (event.clientY * 100) / window.innerHeight;

  // Especifica os limites de posição X e Y para a pupila
  const limiteXMin = 40;
  const limiteXMax = 60;
  const limiteYMin = 40;
  const limiteYMax = 60;

  // verifica se a posição X da pupila está dentro dos limites especificados
  if (x < limiteXMin) {
    x = limiteXMin;
  } else if (x > limiteXMax) {
    x = limiteXMax;
  }

  // verifica se a posição Y da pupila está dentro dos limites especificados
  if (y < limiteYMin) {
    y = limiteYMin;
  } else if (y > limiteYMax) {
    y = limiteYMax;
  }

  // converte a posição da pupila novamente em porcentagem
  x = x + '%';
  y = y + '%';

  // define a posição da pupila com base nos valores calculados 
  pupila.style.left = x;
  pupila.style.top = y;
});

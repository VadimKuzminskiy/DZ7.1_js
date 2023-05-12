let divs = document.getElementsByTagName('div');
console.log(divs);
for (let i = 1; i <= divs.length; i++) {
  if (i % 2 ) {
    divs[i - 1].innerText = 'нечетный элемент №' + (i+1) / 2;
  } else {
    divs[i - 1].innerText = 'Четный элемент №' + i / 2;
  }
} 


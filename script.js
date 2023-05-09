let divs = document.getElementsByTagName('div');

for (let i = 0; i < divs.length; i++) {
  if (i % 2 === 0) {
    divs[i].innerText = 'Нечетный элемент №' + (i+1);
  } else {
    divs[i].innerText = 'Четный элемент №' + (i+1);
  }
}

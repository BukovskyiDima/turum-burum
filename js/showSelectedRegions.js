let showSelectedRegions = function (list) {

  let ul = document.querySelector('.overview ul'),
    innerText = '',
    length = list.length,
    i = 0;
  if (length){
    for(;i < length; i++){
      innerText += '<li><span>' + list[i] + '</span><span class="cross"></span></li>';
      ul.innerHTML = innerText;
    }
  } else {
    ul.innerText = innerText;
  }
}
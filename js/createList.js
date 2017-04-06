let createList = function (list) {
  let someText = '',
    length = list.length,
    i = 0,
    regionBox = createList.usersBox || document.querySelector('.list__second');

  if (!createList.usersBox){
    createList.usersBox = document.querySelector('.users');
  }

  for (; i < length; i++){
    let info = list[i]
    someText += '<li><label><input type="checkbox" data-name="'
      + info + '"><span>'
      + info + '</span></label></li>'
  }

  // console.log(someText);
  regionBox.innerHTML = someText;
}
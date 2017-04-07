let createList = function (list) {
  let someText = '',
    length = list.length,
    i = 0,
    regionBox = createList.usersBox || document.querySelector('.list__second'),
    addMarker;

  if (!createList.usersBox){
    createList.usersBox = document.querySelector('.list__second');
  }

  for (; i < length; i++){
    let info = list[i]
    someText += '<li><label><input type="checkbox"/>' + info + '</label></li>'
  }

  // console.log(someText);
  regionBox.innerHTML = someText;

  addMarker = document.querySelectorAll('.list__second input');
  return addMarker
}
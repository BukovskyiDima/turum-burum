let createList = function (list, selected) {
  let someText = '',
    length = list.length,
    i = 0,
    j = 0,
    regionBox = createList.usersBox || document.querySelectorAll('.list__second'),
    addMarker;

  if (!createList.usersBox){
    createList.usersBox = document.querySelectorAll('.list__second');
  }

  for (; j < regionBox.length; j++) {
    for (; i < length; i++) {
      let info = list[i];

      if (selected && selected.indexOf(info) !== 1) {
        someText += '<li><label><input type="checkbox" checked/>' + info + '</label></li>';
      } else {
        someText += '<li><label><input type="checkbox"/>' + info + '</label></li>';
      }
    }

    regionBox[j].innerHTML = someText;
  }

  addMarker = document.querySelectorAll('.list__second input');
  return addMarker
};

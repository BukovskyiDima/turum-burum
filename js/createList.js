regionUtils.createList = (list, selected) => {
  let someText = '',
    length = list.length,
    i = 0,
    j = 0,
    regionBox = regionUtils.createList.usersBox || document.querySelectorAll('.list__second'),
    addMarker;
  const item =   '<li><label><input type="checkbox" %checked/>%info</label></li>';

  if (!regionUtils.createList.usersBox){
    regionUtils.createList.usersBox = document.querySelectorAll('.list__second');
  }

  for (; j < regionBox.length; j++) {
    for (; i < length; i++) {
      let info = list[i];
      const checked = selected && selected.indexOf(info) !== 1 ? 'checked' : '';

      someText += item.replace('%checked', checked).replace('%info', info)
    }
    regionBox[j].innerHTML = someText;
  }

  addMarker = document.querySelectorAll('.list__second input');
  return addMarker
};

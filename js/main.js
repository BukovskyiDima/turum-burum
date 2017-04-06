document.addEventListener('DOMContentLoaded', function() {
    const doc = document,
        showMainList = doc.querySelector('.list__main-show'),
        goUpElem = doc.querySelector('.list__main'),
        showSubListFirst = doc.querySelector('.list__main-with_some'),
        showSubListSecond = doc.querySelector('.list__main-without_some'),
        subMenu = doc.querySelector('.reg_list'),
        addMarker = doc.querySelector('.list__second'),
        region = ['Харьковская','Одесская','Киевская'];

    // показать первый список

    showMainList.addEventListener('click', showMainMenu);

    //поднять элемент на верх


    goUpElem.addEventListener('click', goUp);

    //показать второй списек

  let showSecondList = (e) => {
    let isLi = e.target.tagName === "LI";

    if(e.target.tagName == isLi){
      e.target.contains(subMenu) ? e.target.removeChild(subMenu) : e.target.appendChild(subMenu);
    } else if ( e.target.closest('li')){
      e.target.closest('li').contains(subMenu) ?
        e.target.closest('li').removeChild(subMenu) : e.target.closest('li').appendChild(subMenu);
    }
  };

  showSubListFirst.addEventListener('click', showSecondList);
  showSubListSecond.addEventListener('click', showSecondList);

    // интерактивные элементы
    //     появление по одному

  addMarker.addEventListener('click', function (e) {
    const ul = doc.querySelector('.overview ul');
    // console.log(!e.target.marker );
    // console.log(e.target.dataset.name);
    if (!e.target.marker) {
      const item = document.createElement('li');
      // console.log(item + ' 1')
      item.innerHTML = '<span>' + e.target.dataset.name + '</span><span class="cross"></span>';
      // console.log(item + ' 2');
      e.target.marker = item;
      ul.appendChild(item);
    } else {
      e.target.marker.remove();
      delete e.target.marker;
    }
  });
    // появление общее

    // интерактивный поиск

});

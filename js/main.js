document.addEventListener('DOMContentLoaded', function() {
  const doc = document,
    showMainList = doc.querySelector('.list__main-show'),
    goUpElem = doc.querySelector('.list__main'),
    showSubListFirst = doc.querySelector('li.list__main-with_some'),
    showSubListSecond = doc.querySelector('li.list__main-without_some'),
    subMenu = doc.querySelector('.reg_list'),
    regions = ['Харьковская','Одесская','Киевская','Херсонская','Львовская'],
    listSecond = doc.querySelector('.list__second');


  // показать первый список

    showMainList.addEventListener('click', showMainMenu);

    //поднять элемент на верх


    goUpElem.addEventListener('click', goUp);

    //показать второй список

  let showSecondList = (e) => {
    let isLi = e.target.tagName === 'LI';

    if(isLi){
      e.target.contains(subMenu) ?
        e.target.removeChild(subMenu) : e.target.appendChild(subMenu);
    }
  };

  showSubListFirst.addEventListener('click', showSecondList);
  showSubListSecond.addEventListener('click', showSecondList);

    // интерактивные элементы
  createList(regions);
    //     появление по одному

  let createMarker = function(e) {
    if (e.target.tagName !== 'LABEL') return

    const ul = doc.querySelector('.overview ul');
    console.log(!e.target.marker );
    console.log(e.target);
    if (!e.target.marker) {
      const item = document.createElement('li');
      // console.log(item + ' 1')
      item.innerHTML = '<span>' + e.target.innerText + '</span><span class="cross"></span>';
      // console.log(item + ' 2');
      e.target.marker = item;
      ul.appendChild(item);
    } else {
      e.target.marker.remove();
      delete e.target.marker;
    }
  };




  // console.log(addMarker);
  listSecond.addEventListener('click', createMarker)

    // интерактивный поиск
  let input = doc.querySelector('.reg_list input')

  input.addEventListener('keyup', function() {
    let value = this.value;
    let filteredRegion = regions.filter(function(reg){
      //здесь осуществляеться проверка

      for(let key in reg){
        let currentVal = reg[key] + '';
        if(currentVal.toLowerCase().indexOf(value) !== -1){
          reg = key;
          return true
        }
      }

    });

    console.log(filteredRegion);

    // createList(filteredRegion);
    (createList(filteredRegion));
  })
});

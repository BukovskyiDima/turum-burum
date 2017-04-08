document.addEventListener('DOMContentLoaded', function() {
  const doc = document,
    showMainList = doc.querySelector('.list__main-show'),
    goUpElem = doc.querySelector('.list__main'),
    showSubListFirst = doc.querySelector('li.list__main-with_some'),
    showSubListSecond = doc.querySelector('li.list__main-without_some'),
    subMenu = doc.querySelector('.reg_list'),
    listSecond = doc.querySelector('.list__second'),
    showAllMarker = doc.querySelector('.list__main-all'),
    hideAllMarker = doc.querySelector('.list__main-no_one');

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

  createList(createRegionsList());

  listSecond.addEventListener('click', createMarker);

    // интерактивный поиск
  let input = doc.querySelector('.reg_list input');

  input.addEventListener('keyup', search);
  // показать все

  showAllMarker.addEventListener('click', showAll);

//  скрыть все
  hideAllMarker.addEventListener('click', hideAll);
});

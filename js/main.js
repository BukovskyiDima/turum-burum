document.addEventListener('DOMContentLoaded', function() {
  const doc = document,
    showMainList = doc.querySelector('.list__main-show'),
    goUpElem = doc.querySelector('.list__main'),
    showSubListFirst = doc.querySelector('li.list__main-with_some'),
    showSubListSecond = doc.querySelector('li.list__main-without_some'),
    subMenuAdd = doc.querySelector('.reg_list.add'),
    subMenuRemove = doc.querySelector('.reg_list.remove'),
    listSecondAdd = doc.querySelector('.list__second.add'),
    listSecondRemove = doc.querySelector('.list__second.remove'),
    showAllMarker = doc.querySelector('.list__main-all'),
    hideAllMarker = doc.querySelector('.list__main-no_one'),
    input = doc.querySelector('.reg_list input'),
    showSecondList = (e) => {
      let isLi = e.target.tagName === 'LI';

      if (e.target.dataset.name == 'Только области' && isLi){
        e.target.contains(subMenuAdd) ?
          e.target.removeChild(subMenuAdd) : e.target.appendChild(subMenuAdd);
      } else if(e.target.dataset.name == 'Кроме областей' && isLi){
        e.target.contains(subMenuRemove) ?
          e.target.removeChild(subMenuRemove) : e.target.appendChild(subMenuRemove);
      }
    };

  createList(createRegionsList());

  showMainList.addEventListener('click', showMainMenu);
  goUpElem.addEventListener('click', goUp);
  showSubListFirst.addEventListener('click', showSecondList);
  showSubListSecond.addEventListener('click', showSecondList);
  listSecondAdd.addEventListener('click', createMarker);
  listSecondRemove.addEventListener('click', createMarkerRemove);
  input.addEventListener('keyup', search);
  showAllMarker.addEventListener('click', showAll);
  hideAllMarker.addEventListener('click', hideAll);
});

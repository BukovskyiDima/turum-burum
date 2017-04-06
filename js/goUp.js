let goUp = (e) => {
  let firstElem = document.querySelector('.list__main-show'),
    isLi = e.target.tagName === 'LI';

  if (e.target.tagName === isLi) {
    firstElem.innerHTML = e.target.dataset.name + ':';
    firstElem.dataset.name = e.target.dataset.name;
  } else if (e.target.closest('.list__main > li')) {
    firstElem.innerHTML = e.target.closest('.list__main > li').dataset.name + ':';
    firstElem.dataset.name = e.target.closest('.list__main > li').dataset.name;
  } else {
    firstElem.innerHTML = firstElem.dataset.name + ':' || firstElem.closest('.list__main > li').dataset.name;
  }
};
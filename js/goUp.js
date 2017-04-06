let goUp = function(e) {
  let firstElem = document.querySelector('.list__main-show'),
    isLi = e.target.tagName === 'LI';

  if (isLi) {
    firstElem.innerHTML = e.target.dataset.name + ':';
    firstElem.dataset.name = e.target.dataset.name;
  } else {
    firstElem.innerHTML = firstElem.dataset.name + ':' || firstElem.closest('.list__main > li').dataset.name;
  }
};
document.addEventListener('DOMContentLoaded', function() {
    const doc = document,
        showListMain = doc.querySelector('.list__main-show'),
        showListSecond = doc.querySelector('.list__main');

    // показать первый список
    let showMainList = function () {
        let showBlock = document.querySelector('.list__main');

        showBlock.classList.toggle('hide');
    };

    showListMain.addEventListener('click', showMainList);

    //поднять элемент на верх
    let goUp = function (e) {
        let firstElem = doc.querySelector('.list__main-show'),
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

    showListSecond.addEventListener('click', goUp);

    //показать второй списек

    let showSecondList = function (e) {
        let isLi = e.target.tagName === 'LI';

        if (e.target.tagName === isLi) {
            e.target.classList.toggle('show');
        } else if (e.target.closest('.list__main-with_some') || e.target.closest('.list__main-without_some')) {
            e.target.closest('li').classList.toggle('show');
        }
    };

    showListSecond.addEventListener('click', showSecondList);


    // интерактивные элементы


    // интерактивный поиск

});

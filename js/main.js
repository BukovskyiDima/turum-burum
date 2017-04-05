document.addEventListener('DOMContentLoaded', function() {
    const doc = document,
        showListMain = doc.querySelector('.list__main-show'),
        showListSecond = doc.querySelector('.list__main');

    let showMainList = function() {
        let showBlock = document.querySelector('.list__main');

        showBlock.classList.toggle('hide');
    }

    showListMain.addEventListener('click' ,showMainList );

    let showSecondList = function(e) {
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle('show');
        } else if (e.target.parentNode.tagName == 'LI') {
            e.target.parentNode.classList.toggle('show');
        }
    }

    showListSecond.addEventListener('click' ,showSecondList );
});

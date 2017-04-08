let showFilteredRegion = function (list) {
  const subMenuListElem = document.querySelectorAll('.list__second li');
  let length = list.length,
    hideRegion = function(listElem) {
      listElem.style.display = 'none';
    },
    showRegion = function(listElem) {
      listElem.style.display = 'block';
    };

  for(let i = 0; i < subMenuListElem.length; i++){
    outer:
    for (let j = 0; j < length; j++ ){
      console.log(subMenuListElem[i].innerText !== list[j]);
      if (subMenuListElem[i].innerHTML !== '<label><input type="checkbox">' + list[j] + '</label>'){
        hideRegion(subMenuListElem[i]);
      } else {
        showRegion(subMenuListElem[i]);
        break outer;
      }
    }
  }
};
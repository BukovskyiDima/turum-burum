let showAll = function(){
  let ul = document.querySelector('.overview ul'),
    regions = createRegionsList(),
    addList = '';

  for(let i = 0; i < regions.length; i++){
    addList += '<li><span>' + regions[i] + '</span><span class="cross"></span></li>'
  }
  ul.innerHTML = addList;
};
const allSelectedRegion = [];

let showAll = function(){
  let regions = createRegionsList(),
    i = 0;

  allSelectedRegion.splice(0, allSelectedRegion.length);

  for(; i < regions.length; i++){
    allSelectedRegion.push(regions[i]);
  }

  showSelectedRegions(allSelectedRegion);
};
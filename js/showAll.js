const allSelectedRegion = [];

regionUtils.showAll = () => {
  let regions = regionUtils.createRegionsList(),
    i = 0;

  allSelectedRegion.splice(0, allSelectedRegion.length);

  for(; i < regions.length; i++){
    allSelectedRegion.push(regions[i]);
  }

  regionUtils.showSelectedRegions(allSelectedRegion);
};
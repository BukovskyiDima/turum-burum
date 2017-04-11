regionUtils.showAll = () => {
  let regions = regionUtils.createRegionsList(),
    i = 0;

  regionUtils.allSelectedRegion.splice(0, regionUtils.allSelectedRegion.length);

  for(; i < regions.length; i++){
    regionUtils.allSelectedRegion.push(regions[i]);
  }

  regionUtils.showSelectedRegions(regionUtils.allSelectedRegion);
};
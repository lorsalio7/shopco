let filtersActiveButton = document.querySelector(".catalog-cards__filters-button");

if(filtersActiveButton) {
  let catalogFilters = document.querySelector(".catalog__filters");
  let filtersCloseButton = document.querySelector(".catalog-filters__close-button")
  filtersActiveButton.addEventListener("click", openCatalogFilters);

  filtersCloseButton.addEventListener("click", closeCatalogFilters);


  function openCatalogFilters() {
    scrollController.disabledScroll(".fixed-element");
    document.querySelector(".overlay").classList.add("overlay--active");
    catalogFilters.classList.add("catalog__filters--active");
  }

  function closeCatalogFilters() {
    document.querySelector(".overlay").classList.remove("overlay--active");
    catalogFilters.classList.remove("catalog__filters--active");
    scrollController.enabledScroll(".fixed-element");
  }
}

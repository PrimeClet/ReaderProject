(function() {
  // INITIALIZATION OF HEADER
  // =======================================================
  new HSHeader('#header').init()

  // INITIALIZATION OF SHOW ANIMATIONS
  // =======================================================
  new HSShowAnimation('.js-animation-link')

  // INITIALIZATION OF LISTJS COMPONENT
  // =======================================================
  const docsSearch = HSCore.components.HSList.init('#docsSearch');


  // GET JSON FILE RESULTS
  // =======================================================
  // fetch('../assets/json/docs-search.json')
  //   .then(response => response.json())
  //   .then(data => {
  //     docsSearch.getItem(0).add(data)
  //   })

  // INITIALIZATION OF GO TO
  // =======================================================
  new HSGoTo('.js-go-to')
});

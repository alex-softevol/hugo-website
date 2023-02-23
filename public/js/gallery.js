(function() {
  if(document.getElementsByClassName !=null) {
    var filterControlls = document.getElementsByClassName('gallery__filter-link');
    var filterItems = document.getElementsByClassName('gallery__item');
    var filterItemContainers = document.getElementsByClassName('gallery__item-container');


    var addControllClickHandler = function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var previousLink = document.getElementsByClassName('gallery__filter-link--current')[0];
        if(!previousLink.isEqualNode(link)) {
          window.classFunction.removeClass(previousLink, 'gallery__filter-link--current');
          window.classFunction.addClass(link, 'gallery__filter-link--current');
        }

        for(var i = 0; i < filterItems.length; i++) {
          if(filterItems[i].getAttribute('data-item').indexOf(link.getAttribute('data-for')) > -1) {
            filterItemContainers[i].style = 'display: block';
            filterItemContainers[i].setAttribute('style', 'display: block');
          } else {
            filterItemContainers[i].style = 'display: none';
            filterItemContainers[i].setAttribute('style', 'display: none');
          }
        }
      });
    };
            
    for (var i = 0; i < filterControlls.length; i++) {
      addControllClickHandler(filterControlls[i]);
    }
  }
})();
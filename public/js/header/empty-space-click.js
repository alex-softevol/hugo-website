window.emptySpaceClick = function(){
    if (event.stopPropagation) {
        event.stopPropagation();
        var header = document.querySelector('.header');
        var burger = document.querySelector('.burger-button');
        var target = event.target;
        var isHeader = target == header || header.contains(target);
        var isBurger = target == burger;
    
        if(!isHeader && !isBurger) {
            window.closeDropdownMainMenu();
        }
    }
};
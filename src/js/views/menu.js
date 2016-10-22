define(['jquery', 'backbone', 'templates/html.jst'], 
    function($, Backbone, htmlJST) {
        var initialized = false,
            showMenu = false,
            menu = document.getElementById('menu'),
            menuBtn = document.getElementById('menu-btn'),
            menuOverlay = document.getElementById('menu-overlay'),

            clickCallback = function(e) {
                e.preventDefault();

                showMenu = !showMenu;

                if (showMenu) {
                    menu.classList.add('active');
                    menuBtn.classList.add('active');
                    menuOverlay.classList.add('active');
                } else {
                    menu.classList.remove('active');
                    menuBtn.classList.remove('active');
                    menuOverlay.classList.remove('active');
                }
            },

            menuCallback = function(r) {
                if (typeof r === 'object' && r.response !== null) {
                    menu.innerHTML = JST['src/js/templates/menu.html']({
                        links: r.response
                    });
                }
            },
            
            menuView = Backbone.View.extend({
                render: function() {
                    if (initialized === false) {
                        initialized = true;
                        
                        $.getJSON('/api', {
                            menu: 1
                        }, menuCallback);

                        this.setEvent();
                    }
                },

                setEvent: function() {
                    menuBtn.addEventListener('click', clickCallback, false);
                    menuOverlay.addEventListener('click', clickCallback, false);
                }
            });
        
        return new menuView();
    }
);
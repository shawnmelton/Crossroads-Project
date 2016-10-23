define(['jquery', 'backbone', 'templates/html.jst'], 
    function($, Backbone, htmlJST) {
        var initialized = false,
            showMenu = false,
            menu = document.getElementById('menu'),
            menuBtn = document.getElementById('menu-btn'),
            menuOverlay = document.getElementById('menu-overlay'),

            clickCallback = function(e) {
                e.preventDefault();

                toggleMenu();
            },

            menuCallback = function(r) {
                if (typeof r === 'object' && r.response !== null) {
                    menu.innerHTML = JST['src/js/templates/menu.html']({
                        links: r.response
                    });

                    $(menu).find('a').click(function(e) {
                        var href = String($(this).attr('href'));
                        if ((href.indexOf('http') === -1 || href.indexOf('crcnorfolk.com') !== -1) && href.indexOf('.doc') === -1 && href.indexOf('.pdf') === -1) {
                            e.preventDefault();
                            href = href.replace('http://crcnorfolk.com', '');
                            appRouter.navigate(href, {trigger:true, replace:true});

                            if (showMenu) {
                                toggleMenu();
                            }
                        }
                    });
                }
            },

            toggleMenu = function() {
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
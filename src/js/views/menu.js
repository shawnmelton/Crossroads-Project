define(['jquery', 'backbone', 'templates/html.jst'], 
    function($, Backbone, htmlJST) {
        var initialized = false,
            menuCallback = function(r) {
                if (typeof r === 'object' && r.response !== null) {
                    document.getElementById('menu').innerHTML = JST['src/js/templates/menu.html']({
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
                    }
                }
            });
        
        return new menuView();
    }
);
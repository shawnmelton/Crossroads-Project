define(['jquery', 'backbone', 'templates/html.jst'], function($, Backbone, htmlJST){
        var secondaryView = Backbone.View.extend({
            render: function() {
                var contentCallback = function(r) {
                    if (typeof r === 'object' && r.response !== null) {
                        document.title = 'CrossRoads Church Norfolk :: '+ r.response.title;
                        document.getElementById('main-content').innerHTML = JST['src/js/templates/secondary.html']({
                            content: r.response.content
                        });
                    } else {
                        document.getElementById('main-content').innerHTML = JST['src/js/templates/404.html']();
                    }
                };

                document.body.className = 'secondary connect';
                document.getElementById('learn-nav').className = 'first';
                document.getElementById('find-nav').className = 'third';
                document.getElementById('connect-nav').className = 'second active';
                document.getElementById('logo').getElementsByTagName('img')[0].src = '/img/logo-orange-small.png';

                $.getJSON('/api', {
                    url: location.pathname
                }, contentCallback);
            }
        });
        
        return new secondaryView();
    }
);
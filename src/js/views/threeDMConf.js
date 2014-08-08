define(['jquery', 'backbone', 'templates/html.jst'], function($, Backbone, htmlJST){
        var threeDMConfView = Backbone.View.extend({
            render: function() {
                document.getElementById('main-content').innerHTML = JST['src/js/templates/threeDMConf.html']();
                document.body.className = 'secondary connect';
                document.getElementById('logo').getElementsByTagName('img')[0].src = '/img/logo-green-small.png';
                
                // Activate link.
                $("header > nav > a").removeClass("active");
            }
        });
        
        return new threeDMConfView();
    }
);
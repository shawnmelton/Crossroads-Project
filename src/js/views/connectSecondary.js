define(['jquery', 'backbone', 'templates/html.jst'], function($, Backbone, htmlJST){
        var connSecView = Backbone.View.extend({
            render: function(template) {
                document.getElementById('main-content').innerHTML = JST['src/js/templates/'+ template +'.html']();
                document.body.className = 'secondary connect';
                document.getElementById('learn-nav').className = 'first';
                document.getElementById('find-nav').className = 'third';
                document.getElementById('connect-nav').className = 'second active';
                document.getElementById('logo').getElementsByTagName('img')[0].src = '/img/logo-green-small.png';
            }
        });
        
        return new connSecView();
    }
);
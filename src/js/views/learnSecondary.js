define(['jquery', 'backbone', 'templates/html.jst'], function($, Backbone, htmlJST){
        var learnSecView = Backbone.View.extend({
            render: function(template) {
                document.getElementById('main-content').innerHTML = JST['src/js/templates/'+ template +'.html']();
                document.body.className = 'secondary learn';
                document.getElementById('learn-nav').className = 'first active';
                document.getElementById('connect-nav').className = 'second';
                document.getElementById('find-nav').className = 'third';
                document.getElementById('logo').getElementsByTagName('img')[0].src = '/img/logo-blue-small.png';
            }
        });
        
        return new learnSecView();
    }
);
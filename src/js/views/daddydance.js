define(['jquery', 'backbone', 'templates/html.jst'], function($, Backbone, htmlJST){
        var daddyDanceView = Backbone.View.extend({
            render: function(){
                document.getElementById('main-content').innerHTML = JST['src/js/templates/daddydance.html']();
                document.body.className = 'secondary connect';
                document.getElementById('logo').getElementsByTagName('img')[0].src = '/img/logo-green-small.png';
                
                // Activate link.
                $("header > nav > a").removeClass("active");
            }
        });
        
        // Our module now returns an instantiated view
        // Sometimes you might return an un-instantiated view e.g. return projectListView
        return new daddyDanceView();
    }
);
define(['jquery', 'backbone', 'templates/html.jst'], function($, Backbone, htmlJST){
        var connSecView = Backbone.View.extend({
            render: function(template) {
                document.getElementById('main-content').innerHTML = JST['src/js/templates/'+ template +'.html']();
                document.body.className = 'secondary connect';
                document.getElementById('learn-nav').className = 'first';
                document.getElementById('find-nav').className = 'third';
                document.getElementById('connect-nav').className = 'second active';
                document.getElementById('logo').getElementsByTagName('img')[0].src = '/img/logo-green-small.png';

                if(template === 'cares') {
                    this.runTwitterCode();
                }
            },

            runTwitterCode: function() {
                var twitterFunc = function(d,s,id){
                    var js,
                    fjs=d.getElementsByTagName(s)[0],
                    p=/^http:/.test(d.location)?'http':'https';

                    if(!d.getElementById(id)){
                        js=d.createElement(s);
                        js.id=id;
                        js.src=p+"://platform.twitter.com/widgets.js";
                        fjs.parentNode.insertBefore(js,fjs);
                    }
                };

                twitterFunc(document,"script","twitter-wjs");
            }
        });
        
        return new connSecView();
    }
);
define(['jquery', 'backbone', 'templates/html.jst'], function($, Backbone, htmlJST){
        var learnSecView = Backbone.View.extend({
            render: function(template) {
                document.getElementById('main-content').innerHTML = JST['src/js/templates/'+ template +'.html']();
                document.body.className = 'secondary learn';
                document.getElementById('learn-nav').className = 'first active';
                document.getElementById('connect-nav').className = 'second';
                document.getElementById('find-nav').className = 'third';
                document.getElementById('logo').getElementsByTagName('img')[0].src = '/img/logo-blue-small.png';

                if(template === 'learn' && $(window).width() > 600) {
                    $('#learn-sermons').append('<iframe id="sermon-videos-iframe" src="http://crcnorfolk.sermon.tv/mc/" name="mc-micro" width="520" height="870" frameborder="0" scrolling="no" allowTransparency="true">'+
                        '<a href="http://crcnorfolk.sermon.tv/" target="_blank" id="mobile-video">'+
                            '<img src="/img/non-flash-sermon-video.png" alt="CrossRoads Sermon Video">'+
                        '</a>'+
                    '</iframe>');
                }
            }
        });
        
        return new learnSecView();
    }
);
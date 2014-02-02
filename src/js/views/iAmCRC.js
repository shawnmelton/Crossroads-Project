define([
    'jquery',
    'backbone',
    'templates/html.jst'
    ], function($, Backbone, htmlJST){
        var iAmCRCView = Backbone.View.extend({
            el: '#main-content',

            render: function(){
                if(this.$el.html() === null) { // IE fix.
                    this.$el = $('#main-content');
                } 

                this.$el.html(JST['src/js/templates/iAmCRC.html']({}));
                
                // Apply styles for home page.
                $('body').attr('class', 'secondary learn');
                $('#logo > img').attr('src', '/img/logo-blue-small.png');
                
                // Activate link.
                $('header > nav > a').removeClass('active');
                $('header > nav > a.first').addClass('active');

                this.showVideo();
            },

            showVideo: function() {
                var width = Math.floor($(window).width() * 0.88),
                    height = Math.floor((width * 2) / 3);

                $('#iamcrc').append('<video width="'+ width +'" height="'+ height +'" controls="controls"><source src="/video/i-am-crossroads.mp4" type="video/mp4"></video>');
            }
        });
        
        return new iAmCRCView();
    }
);
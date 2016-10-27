define([], function() {
    var Events = function() {};
    Events.prototype = {
        mainEl: document.getElementById('main-content'),

        setGlobal: function() {
            this.setLinks();
            this.setImages();
        },

        setImages: function() {
            $(this.mainEl).find('img.flex').each(function(index, image) {
                var attrWidth = $(image).attr('width'),
                    maxWidth = parseInt((typeof attrWidth !== typeof undefined && attrWidth !== false) ? attrWidth : $(image).width());
                if (maxWidth > 1000) {
                    maxWidth = 1000;
                }

                $(image).removeAttr('width');
                $(image).removeAttr('height');
                $(image).css('height', '');
                $(image).css('width', '100%');
                $(image).css('max-height', '');
                $(image).css('max-width', maxWidth +'px');
            });
        },

        setLinks: function() {
            $(this.mainEl).find('a').click(function(e) {
                var href = String($(this).attr('href'));
                if ((href.indexOf('http') === -1 || href.indexOf('crcnorfolk.com') !== -1) && 
                    href.indexOf('.doc') === -1 && href.indexOf('.pdf') === -1) {
                    e.preventDefault();
                    href = href.replace('http://crcnorfolk.com', '');
                    appRouter.navigate(href, {trigger:true, replace:true});
                }
            });
        }
    };

    return new Events();

});
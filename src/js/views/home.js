define(['jquery', 'backbone', 'tools/homeHoverContent', 'templates/html.jst'],
	function($, Backbone, homeHoverContent, htmlJST) {
		var contentCallback = function(r) {
                window.scrollTo(0, 0);
                if (typeof r === 'object' && r.response !== null && r.response.title !== 'Page Not Found') {
                    document.getElementById('main-content').innerHTML = JST['src/js/templates/home.html']({
                        content: r.response.content
                    });

                    if ($(document).width() > 800 && !homeHoverContent.areHandlersSet()) {
                        homeHoverContent.setHandlers();
                    }

                    setLinkEvents();
                } else {
                    document.getElementById('main-content').innerHTML = JST['src/js/templates/404.html']();
                }
            },

            setLinkEvents = function() {
                $(document.getElementById('main-content')).find('a').click(function(e) {
                    var href = String($(this).attr('href'));
                    if ((href.indexOf('http') === -1 || href.indexOf('crcnorfolk.com') !== -1) && href.indexOf('.doc') === -1 && href.indexOf('.pdf') === -1) {
                        e.preventDefault();
                        href = href.replace('http://crcnorfolk.com', '');
                        appRouter.navigate(href, {trigger:true, replace:true});
                    }
                });
            },

            homeView = Backbone.View.extend({
                render: function(){
                    document.getElementById('main-content').innerHTML = JST['src/js/templates/loading.html']();
                    document.title = 'CrossRoads Church in Norfolk, VA';

                    $.getJSON('/api', {
                        url: '/home-page'
                    }, contentCallback);
                }
            });
		
		return new homeView();
	}
);
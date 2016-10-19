define(['jquery', 'backbone', 'tools/homeHoverContent', 'templates/html.jst'],
	function($, Backbone, homeHoverContent, htmlJST) {
		var contentCallback = function(r) {
            if (typeof r === 'object' && r.response !== null && r.response.title !== 'Page Not Found') {
                
                document.getElementById('main-content').innerHTML = JST['src/js/templates/home.html']({
                    content: r.response.content
                });
            } else {
                document.getElementById('main-content').innerHTML = JST['src/js/templates/404.html']();
            }

            if($(document).width() > 800 && !homeHoverContent.areHandlersSet()) {
				homeHoverContent.setHandlers();
			}
        };

		var homeView = Backbone.View.extend({
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
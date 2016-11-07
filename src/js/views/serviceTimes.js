define(['jquery', 'backbone', 'templates/html.jst'], 
    function($, Backbone, htmlJST) {
        var contentSet = false,
            contentCallback = function(r) {
                if (typeof r === 'object' && 'response' in r) {
                    var elements = document.getElementsByClassName('serviceTimes');
                    for (var i = 0; i < elements.length; i++) {
                        elements[i].innerHTML = r.response.content;
                    }
                }
            },

            serviceTimesView = Backbone.View.extend({
                render: function() {
                    if (contentSet === false) {
                        $.getJSON('/api/', {
                            post_id: 215
                        }, contentCallback);
                    }
                }
            });

        return new serviceTimesView();
    }
);
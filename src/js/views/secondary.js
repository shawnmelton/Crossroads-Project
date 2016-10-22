define(['jquery', 'backbone', 'templates/html.jst'], 
    function($, Backbone, htmlJST) {
        var parent = null,
            contentCallback = function(r) {
                window.scrollTo(0, 0);
                if (typeof r === 'object' && r.response !== null && r.response.title !== 'Page Not Found') {
                    document.title = 'CrossRoads Church Norfolk :: '+ r.response.title;
                    document.getElementById('main-content').innerHTML = JST['src/js/templates/secondary.html']({
                        content: r.response.content,
                        title: r.response.title,
                        children: r.response.children,
                        parent: parent
                    });

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
            };

        var secondaryView = Backbone.View.extend({
            getParent: function() {
                var parts = location.pathname.split('/'),
                    parent = null;

                for (var i = 0; i < parts.length; i++) {
                    if (parent === null && parts[i] !== '' && location.pathname !== '/'+ parts[i] && location.pathname !== '/'+ parts[i] +'/') {
                        parent = {
                            url: '/'+ parts[i],
                            title: this.toTitleCase(parts[i].replace(/-/g, ' '))
                        };
                    }
                }                

                return parent;
            },

            toTitleCase: function(str){
                return str.replace(/\w\S*/g, function(txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
            },

            render: function() {
                document.getElementById('main-content').innerHTML = JST['src/js/templates/loading.html']();

                parent = this.getParent();

                $.getJSON('/api', {
                    url: location.pathname
                }, contentCallback);
            }
        });
        
        return new secondaryView();
    }
);
/**
 * Created by tekin on 10/5/15.
 */

function jqueryTree(settings) {
    if (settings.container == undefined) {
        console.error("jqueryTree'nin uygulanacagi kapsayici belirtilmelidir!");
        return false;
    } else {
        $(settings.container).addClass('JQTree');
        var allElements = $(settings.container).children("ul,ol");
        allElements.each(function (counter, element) {
            // find değil children kullandım çünkü bu adımda açılır menülerin parçalarını değil açılır menülerin kendisini arıyorum
            $(element).find("li,ul,ol").each(function (subCounter, subElement) {
                var tag = subElement.tagName;
                if (tag == "LI") {

                } else {

                }
                hasUlorOl(subElement);
            })
        });

        if (settings.collapse == undefined && settings.collapse == true)
            collapseAll(settings.container);
        else
            expandAll(settings.container);
        console.log(settings.collapse);
    }

    function hasUlorOl(element) {
        var children = $(element).children('ul,ol');
        if ($(element).find('ul,ol').length > 0) {
            if (element.tagName == "LI") {
                element.classList.add('collapse');
                element.onclick = function (e) {
                    if (e.target != this)
                        return;
                    $(this).toggleClass(function () {
                        if ($(this).hasClass('collapse')) {
                            $(this).children('ul,ol').hide();
                            $(this).removeClass('collapse');
                            return 'expand';
                        } else {
                            $(this).children('ul,ol').show();
                            $(this).removeClass('expand');
                            return 'collapse';
                        }
                    });
                };
                $.each(children, function (subCounter, subElement) {
                    hasUlorOl(subElement);
                });
            }
        } else {
            //return false;
        }
    }

    function collapseAll(container) {
        $(container)
            .find('.expand')
            .removeClass('expand')
            .addClass('collapse');
        $(container)
            .find('.expand')
            .children('ul,ol')
            .show();
    }

    function expandAll(container) {
        $(container)
            .find('.collapse')
            .removeClass('collapse')
            .addClass('expand');
        $(container)
            .find('.expand')
            .children('ul,ol')
            .hide();
    }
}

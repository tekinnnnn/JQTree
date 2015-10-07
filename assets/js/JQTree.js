/**
 * Created by tekin on 10/5/15.
 */

function JQTree(settings) {
    if (settings.container == undefined) {
        console.error("JQTree'nin uygulanacagi kapsayici belirtilmelidir!");
        return false;
    } else {
        if (cssRulesCheck()) { // css background-image lar var ise başlat
            $(settings.container).addClass('JQTree');
            var allElements = $(settings.container).children("ul,ol");
            allElements.each(function (counter, element) {
                // find değil children kullandım çünkü bu adımda açılır menülerin parçalarını değil açılır menülerin kendisini arıyorum
                $(element).find("li,ul,ol").each(function (subCounter, subElement) {
                    var tag = subElement.tagName;
                    if (tag == "LI") {
                        hasUlorOl(subElement);
                    }
                })
            });

            if (settings.collapse == undefined || settings.collapse == true)
                collapseAll(settings.container);
            else
                expandAll(settings.container);
        }
    } // TODO: css background-image lar yok ise svg oluştur onları ekle

    function hasUlorOl(element) {
        var children = $(element).children('ul,ol');
        if ($(element).find('ul,ol').length > 0) {
            element.classList.add('collapse');
            element.onclick = function (e) {
                if (e.target != this)
                    return;
                $(this).toggleClass(function () {
                    if ($(this).hasClass('collapse')) {
                        $(this).children('ul,ol').show();
                        $(this).removeClass('collapse');
                        return 'expand';
                    } else {
                        $(this).children('ul,ol').hide();
                        $(this).removeClass('expand');
                        return 'collapse';
                    }
                });
            };
            $.each(children, function (subCounter, subElement) {
                hasUlorOl(subElement);
            });
        }
    }

    function collapseAll(container) {
        $(container)
            .find('.expand')
            .removeClass('expand')
            .addClass('collapse');
        $(container)
            .find('.collapse')
            .children('ul,ol')
            .hide();
    }

    function expandAll(container) {
        $(container)
            .find('.collapse')
            .removeClass('collapse')
            .addClass('expand');
        $(container)
            .find('.expand')
            .children('ul,ol')
            .show();
    }

    /*function appendImages() {
     $(".JQTree ul li:not(.expand,.collapse),.JQTree ol li:not(.expand,.collapse)").prepend('<img src="' + settings.listImg + '">');
     $(".JQTree li.expand").prepend('<img src="' + settings.expandListImg + '">');
     $(".JQTree li.collapse").prepend('<img src="' + settings.collapseListImg + '">');
     }

     if (settings.listImgWidth != undefined || settings.listImgHeight) {
     if ($("<style>") == undefined) {
     $("<style>")
     .prop('type', 'text/html')
     .html('')
     .appendTo("head");
     }
     $("<style>")
     .prop("type", "text/css")
     .html(
     'img {' +
     'width : ' + settings.listImgWidth + ';' +
     'height : ' + settings.listImgHeight + ';' +
     "}")
     .appendTo("head");

     }*/
}

function cssRulesCheck() {
    var bir = false;
    var iki = false;
    var uc = false;
    var cssFiles = document.styleSheets;
    $.each(cssFiles, function (i) {
        $.each(cssFiles[i].cssRules, function (j, cssRules) {
            if (cssRules.selectorText == ".jqtree li.expand::before" && cssRules.style.backgroundImage.length > 0)
                bir = true;
            if (cssRules.selectorText == ".jqtree li.collapse::before" && cssRules.style.backgroundImage.length > 0)
                iki = true;
            if (cssRules.selectorText == ".jqtree ul li::before, .jqtree ol li::before" && cssRules.style.backgroundImage.length > 0)
                uc = true;
        });
    });
    if (!bir) {
        console.error("Lütfen style dosyanıza .JQTree ul li.expand:before kuralı içerisine background-image değerini verin!");
    }
    if (!iki) {
        console.error("Lütfen style dosyanıza .JQTree ul li.collapse:before kuralı içerisine background-image değerini verin!");
    }
    if (!uc) {
        console.error("Lütfen style dosyanıza .JQTree ul li:before, .JQTree ol li:before kuralı içerisine background-image değerini verin!");
    }
    if (!bir || !iki || !uc)
        return false;
    return true;
}
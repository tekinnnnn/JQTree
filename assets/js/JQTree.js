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

            if (settings.expand == undefined || settings.expand == true)
                expandAll(settings.container);
            else
                collapseAll(settings.container);
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
            if ((settings.svg == undefined) && cssRules.selectorText == ".jqtree .svg" && cssRules.style.fill.length > 0)
                settings.svgFillColor = cssRules.style.fill;
        });
    });

    if (settings.svg != undefined && settings.svg.fill != undefined)
        settings.svgFillColor = settings.svg.fill;
    else if (settings.svgFillColor == undefined)
        settings.svgFillColor = "#000000";

    var style = (function () {
        var style = document.createElement("style");
        document.head.appendChild(style);
        return style.sheet;
    })();
    var cssIndex = 0;

    if ((!bir || !iki || !uc) || (settings.svg != undefined && settings.svg.fill != undefined)) {
        style.addRule(".JQTree li.expand:before",
            'background-image: url("' +
            'data:image/svg+xml;utf8,' +
            '<svg fill=\'' + settings.svgFillColor + '\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'>' +
            '<path d=\'M0 0h24v24H0z\' fill=\'none\'/>' +
            '<path d=\'M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z\'/>' +
            '</svg>' +
            '");',
            cssIndex);
        cssIndex++;
        style.addRule(".JQTree li.collapse:before",
            'background-image: url("' +
            'data:image/svg+xml;utf8,' +
            '<svg fill=\'' + settings.svgFillColor + '\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'>' +
            '<path d=\'M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z\'/>' +
            '<path d=\'M0 0h24v24H0z\' fill=\'none\'/>' +
            '</svg>' +
            '");',
            cssIndex);
        cssIndex++;
        style.addRule(".JQTree ul li:before, .JQTree ol li:before",
            'background-image: url("' +
            'data:image/svg+xml;utf8,' +
            '<svg fill=\'' + settings.svgFillColor + '\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'>' +
            '<path d=\'M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z\'/>' +
            '<path d=\'M0 0h24v24H0z\' fill=\'none\'/>' +
            '</svg>' +
            '");',
            cssIndex);
        cssIndex++;
    }
    console.log(cssFiles);
    return true;
}
var Dajax = {
    process: function(data)
    {
        data.each(function(elem){
        switch(elem.cmd)
        {
            case 'alert':
                alert(elem.val);
            break;

            case 'data':
                window[elem.fun](elem.val);
            break;

            case 'as':
                if(elem.prop === 'innerHTML'){
                    $$(elem.id).each(function(e){ e.set('html', elem.val); });
                }
                else{
                    $$(elem.id).each(function(e){ e[elem.prop] = elem.val; });
                }
            break;

            case 'addcc':
                elem.val.each(function(cssclass){
                    $$(elem.id).each(function(e){ e.addClass(cssclass);});
                });
            break;

            case 'remcc':
                elem.val.each(function(cssclass){
                    $$(elem.id).each(function(e){ e.removeClass(cssclass);});
                });
            break;

            case 'ap':
                $$(elem.id).each(function(e){ e[elem.prop] += elem.val; });
            break;

            case 'pp':
                $$(elem.id).each(function(e){ e[elem.prop] = elem.val + e[elem.prop]; });
            break;

            case 'clr':
                $$(elem.id).each(function(e){ e[elem.prop]=""; });
            break;

            case 'red':
                window.setTimeout('window.location="'+elem.url+'";',elem.delay);
            break;

            case 'js':
                eval(elem.val);
            break;

            case 'rm':
                $$(elem.id).each(function(e){ e.destroy(); });
            break;

            default:
            break;
            }
        });
    }
};

/**
 * 用优雅简短的JavaScript判断IE版本号
 */
var _iev = (function() {
    var v = 3,
        b = document.createElement('b'),
        all = b.all || [];
    while (
        b.innerHTML = '<!--[if gt IE ' + (++v) + ']><i><![endif]-->',
        all[0]
    );
    return v > 4 ? v : document.documentMode;
})();

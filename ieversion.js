/**
 * 用优雅简短的JavaScript判断IE版本号
 */
// 方法1
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
// 压缩
var _iev=(function(){var v=3,b=document.createElement('b'),all=b.all||[];while(b.innerHTML='<!--[if gt IE '+(++v)+']><i><![endif]-->',all[0]);return v>4?v:document.documentMode})();
// 方法2
var ie = (function(){
    // for-loop saves characters over while
    for( var v = 3,
             // b just as good as a div with 2 fewer characters
             b = document.createElement('b'),
             // b.all instead of b.getElementsByTagName('i')
             // empty array as loop breaker (and exception-avoider) for non-IE and IE10+
             all = b.all || [];
         // i tag not well-formed since we know that IE5-IE9 won't mind
         b.innerHTML = '<!--[if gt IE ' + (++v) + ']><i><![endif]-->',
         all[0];
       );
    // instead of undefined, returns the documentMode for IE10+ compatibility
    // non-IE will still get undefined as before
    return v > 4 ? v : document.documentMode;
}());
var _iev=(function(){for(var v=3,b=document.createElement('b'),all=b.all||[];b.innerHTML='<!--[if gt IE '+(++v)+']><i><![endif]-->',all[0];);return v>4?v:document.documentMode}());

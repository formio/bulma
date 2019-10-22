Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div id="' +
((__t = (ctx.id)) == null ? '' : __t) +
'"\n     ';
 if (ctx.classes.split(' ')[0] == 'row') { ;
__p += ' class = "' +
((__t = (ctx.classes.replace(/row/g, 'columns'))) == null ? '' : __t) +
'" ';
 } ;
__p += '\n     ';
 if (ctx.styles) { ;
__p += ' styles=\'' +
((__t = (ctx.styles)) == null ? '' : __t) +
'\'';
 } ;
__p += '\n     ref=\'component\' >\n    ';
 if (ctx.visible) { ;
__p += '\n    ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\n  <p ref="messageContainer" class="help is-danger"></p>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}
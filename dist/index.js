"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var i=n(function(T,s){
var y=require('@stdlib/number-float64-base-to-float32/dist'),b=require('@stdlib/blas-ext-base-ssumkbn/dist').ndarray;function d(e,r,a,u){return e<=0?NaN:e===1||a===0?r[u]:y(b(e,r,a,u)/e)}s.exports=d
});var o=n(function(g,v){
var k=require('@stdlib/strided-base-stride2offset/dist'),p=i();function l(e,r,a){return p(e,r,a,k(e,a))}v.exports=l
});var c=n(function(h,m){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=o(),x=i();j(q,"ndarray",x);m.exports=q
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),F=c(),t,f=_(R(__dirname,"./native.js"));E(f)?t=F:t=f;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

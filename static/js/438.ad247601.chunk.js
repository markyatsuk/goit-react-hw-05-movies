"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[438],{375:function(t,e,n){n.d(e,{V:function(){return u}});var r=n(8214),s=n(5861),c=n(5671),a=n(3144),i=n(4569).default,u=function(){function t(){(0,c.Z)(this,t),this.BASE_URL="https://api.themoviedb.org",this.KEY="?api_key=704271a1143bfd554df4b5f395de669f",this.searchQuery="",this.URL_BY_ID="https://api.themoviedb.org"}return(0,a.Z)(t,[{key:"fetchFilms",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("".concat(this.BASE_URL,"/3/movie/popular").concat(this.KEY));case 2:return e=t.sent,console.log(e),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"fetchMoviesById",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("".concat(this.URL_BY_ID,"/3/movie/").concat(e).concat(this.KEY));case 2:return n=t.sent,console.log(e),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"fetchMoviesByName",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("".concat(this.BASE_URL,"/3/search/movie").concat(this.KEY,"&query=").concat(this.searchQuery));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"fetchCastById",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("".concat(this.BASE_URL,"/3/movie/").concat(e,"/credits").concat(this.KEY));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"fetchReviewById",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("".concat(this.BASE_URL,"/3/movie/").concat(e,"/reviews").concat(this.KEY));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"query",get:function(){return this.searchQuery},set:function(t){this.searchQuery=t}}]),t}()},9340:function(t,e,n){n.d(e,{p:function(){return a},t:function(){return i}});var r=n(3504),s=n(4767),c=n(184);function a(t){var e=t.films;return(0,c.jsx)("ul",{children:e.map((function(t){var e=t.original_title,n=t.id;return(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:"movies/".concat(n),className:s.Z.film,children:e})},n)}))})}function i(t){var e=t.films;return(0,c.jsx)("ul",{children:e.map((function(t){var e=t.original_title,n=t.id;return(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:"".concat(n),className:s.Z.film,children:e})},n)}))})}},2438:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(8152),s=n(2791),c=n(6871),a=n(8494),i=n(375),u=n(9340),o=n(184),f=new i.V;function h(){var t=(0,c.UO)(),e=(0,c.s0)(),n=(0,s.useState)(""),i=(0,r.Z)(n,2),h=i[0],l=i[1],m=(0,s.useState)(null),p=(0,r.Z)(m,2),v=p[0],d=p[1],_=(0,s.useState)("idle"),y=(0,r.Z)(_,2),g=y[0],x=y[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("form",{className:"SearchForm",id:"search-form",onSubmit:function(n){n.preventDefault(),f.query=h,f.fetchMoviesByName().then((function(t){var n=t.data;n.results.length>0&&(d(n.results),x("resolved"),e("?query=".concat(h))),console.log(n.results)})),console.log(t)},children:[(0,o.jsx)("button",{type:"submit",className:"SearchForm-button",children:(0,o.jsx)(a.Yfv,{})}),(0,o.jsx)("input",{className:"search-form__input",type:"text",name:"query",autoComplete:"off",placeholder:"Search images and photos",onChange:function(t){l(t.currentTarget.value.toLowerCase())}})]}),"resolved"===g&&(0,o.jsx)(u.t,{films:v})]})}},4767:function(t,e){e.Z={film:"RenderFilms_film__g0On8",castList:"RenderFilms_castList__y1Sy2",castItem:"RenderFilms_castItem__xt9Z1",castPhoto:"RenderFilms_castPhoto__d7+qQ",castImg:"RenderFilms_castImg__05Ak4",castInfo:"RenderFilms_castInfo__lt9X9"}}}]);
//# sourceMappingURL=438.ad247601.chunk.js.map
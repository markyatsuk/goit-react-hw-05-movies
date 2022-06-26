"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[438],{375:function(t,e,r){r.d(e,{V:function(){return u}});var n=r(8214),s=r(5861),a=r(5671),c=r(3144),i=r(4569).default,u=function(){function t(){(0,a.Z)(this,t),this.BASE_URL="https://api.themoviedb.org",this.KEY="?api_key=704271a1143bfd554df4b5f395de669f",this.searchQuery="",this.URL_BY_ID="https://api.themoviedb.org"}return(0,c.Z)(t,[{key:"fetchFilms",value:function(){var t=(0,s.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("".concat(this.BASE_URL,"/3/movie/popular").concat(this.KEY));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"fetchMoviesById",value:function(){var t=(0,s.Z)((0,n.Z)().mark((function t(e){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("".concat(this.URL_BY_ID,"/3/movie/").concat(e).concat(this.KEY));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"fetchMoviesByName",value:function(){var t=(0,s.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("".concat(this.BASE_URL,"/3/search/movie").concat(this.KEY,"&query=").concat(this.searchQuery));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"fetchCastById",value:function(){var t=(0,s.Z)((0,n.Z)().mark((function t(e){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("".concat(this.BASE_URL,"/3/movie/").concat(e,"/credits").concat(this.KEY));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"fetchReviewById",value:function(){var t=(0,s.Z)((0,n.Z)().mark((function t(e){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("".concat(this.BASE_URL,"/3/movie/").concat(e,"/reviews").concat(this.KEY));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"query",get:function(){return this.searchQuery},set:function(t){this.searchQuery=t}}]),t}()},9340:function(t,e,r){r.d(e,{p:function(){return c},t:function(){return i}});var n=r(3504),s=r(4767),a=r(184);function c(t){var e=t.films;t.query;return(0,a.jsx)("ul",{children:e.map((function(t){var e=t.original_title,r=t.id;return(0,a.jsx)("li",{children:(0,a.jsx)(n.rU,{to:"movies/".concat(r),className:s.Z.film,state:{pathname:"/"},children:e})},r)}))})}function i(t){var e=t.films,r=t.query;return(0,a.jsx)("ul",{children:e.map((function(t){var e=t.original_title,c=t.id;return(0,a.jsx)("li",{children:(0,a.jsx)(n.rU,{to:"".concat(c),className:s.Z.film,state:{pathname:"/movies?query=".concat(r)},children:e})},c)}))})}},2438:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=r(8152),s=r(2791),a=r(6871),c=r(8494),i=r(375),u=r(9340),o=r(184),h=new i.V;function f(t){var e=t.handleSearchValue,r=(0,a.TH)(),i=(0,a.s0)(),f=(0,s.useState)(""),l=(0,n.Z)(f,2),m=l[0],v=l[1],p=(0,s.useState)(null),d=(0,n.Z)(p,2),_=d[0],y=d[1],x=(0,s.useState)("idle"),Z=(0,n.Z)(x,2),g=Z[0],w=Z[1];return(0,s.useEffect)((function(){if(r.search&&!_){var t=r.search.slice(7);h.query=t,h.fetchMoviesByName().then((function(t){var e=t.data;e.results.length>0&&(y(e.results),w("resolved"))}))}}),[r.search,_]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("form",{className:"SearchForm",id:"search-form",onSubmit:function(t){t.preventDefault(),e(m),h.query=m,h.fetchMoviesByName().then((function(t){var e=t.data;e.results.length>0&&(y(e.results),w("resolved"),i("?query=".concat(m))),console.log(e.results)})),console.log(r)},children:[(0,o.jsx)("button",{type:"submit",className:"SearchForm-button",children:(0,o.jsx)(c.Yfv,{})}),(0,o.jsx)("input",{className:"search-form__input",type:"text",name:"query",autoComplete:"off",placeholder:"Search images and photos",onChange:function(t){v(t.currentTarget.value.toLowerCase())}})]}),"resolved"===g&&(0,o.jsx)(u.t,{films:_,query:m})]})}},4767:function(t,e){e.Z={film:"RenderFilms_film__g0On8",castList:"RenderFilms_castList__y1Sy2",castItem:"RenderFilms_castItem__xt9Z1",castPhoto:"RenderFilms_castPhoto__d7+qQ",castImg:"RenderFilms_castImg__05Ak4",castInfo:"RenderFilms_castInfo__lt9X9"}}}]);
//# sourceMappingURL=438.1f317ddd.chunk.js.map
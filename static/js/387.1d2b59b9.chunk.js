"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var o,r,i,c,a,u,f=e(439),l=e(689),h=e(751),p=e(791),s=e(168),d=e(444),g=e(87),m=(d.ZP.div(o||(o=(0,s.Z)(["\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),d.ZP.ul(r||(r=(0,s.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  \n"])))),w=((0,d.ZP)(g.OL)(i||(i=(0,s.Z)(["\n  display: flex;\n  padding: 8px 0px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  flex-direction: column;\n  align-items: center;\n  &.active {\n    color: white;\n    background-color: violet;\n  }\n"]))),d.ZP.li(c||(c=(0,s.Z)(["\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  width: 320px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  &.active {\n    color: white;\n    background-color: violet;\n  }\n"]))),d.ZP.img(a||(a=(0,s.Z)(["\n  margin-right: 20px;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),d.ZP.p(u||(u=(0,s.Z)(["\n  margin-top: auto;\n  margin-bottom: auto;\n  color: inherit;\n  max-height: 80px;\n  max-width: 200px;\n  padding: 12px;\n  text-align: center;\n  &:hover {\n    color: violet;\n  }\n"]))),e(184)),x=function(){var n=(0,l.UO)().id,t=(0,p.useState)([]),e=(0,f.Z)(t,2),o=e[0],r=e[1];if((0,p.useEffect)((function(){(0,h.cI)(n).then((function(n){return r(n.cast)}))}),[n]),o)return(0,w.jsx)("div",{children:(0,w.jsx)(m,{children:o.map((function(n){return(0,w.jsxs)("li",{children:[(0,w.jsx)("img",{src:n.profile_path?"".concat("https://image.tmdb.org/t/p/w500/").concat(n.profile_path):"https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png",alt:n.name,width:"150"}),(0,w.jsxs)("p",{children:["Author: ",n.name,n.character]})]},n.id)}))})})}},751:function(n,t,e){e.d(t,{Cp:function(){return i},Lo:function(){return c},Q_:function(){return f},cI:function(){return a},fy:function(){return u}});var o="https://api.themoviedb.org/3",r="f13d6277c84585743a260c636a542839",i=function(){return fetch("".concat(o,"/trending/movie/day?api_key=").concat(r,"&page=1")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},c=function(n){return fetch("".concat(o,"/movie/").concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},a=function(n){return fetch("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},u=function(n){return fetch("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},f=function(n){return fetch("".concat(o,"/search/movie?api_key=").concat(r,"&query=").concat(n,"&language=en-US&page=1&include_adult=false")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}}}]);
//# sourceMappingURL=387.1d2b59b9.chunk.js.map
(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),o=c(7),a=c(4),l=c(5),i=c(9),r=c(8),d=c(6),u=c.n(d),p=c(1),h=(c(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),j=c(0),b=function(e){Object(i.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:["Jam"]},e.addGood=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(o.a)(e.selectedGoods),[t])}}))},e.removeGood=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.clearBucket=function(){e.setState({selectedGoods:[]})},e}return Object(l.a)(c,[{key:"getTitle",value:function(){return this.state.selectedGoods.length?1===this.state.selectedGoods.length?"".concat(this.state.selectedGoods," is selected"):"".concat(this.state.selectedGoods.slice(0,-1).join(", ")," and ").concat(this.state.selectedGoods.slice(-1)," are selected"):"No goods selected"}},{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(j.jsx)("main",{className:"App",children:Object(j.jsxs)("div",{className:"App__container",children:[Object(j.jsxs)("header",{className:"App__header",children:[Object(j.jsx)("h1",{className:"App__title",children:this.getTitle()}),0!==t.length&&Object(j.jsx)("button",{type:"button",className:"App__clear",onClick:this.clearBucket,children:"Clear"})]}),Object(j.jsx)("ul",{className:"App__list",children:h.map((function(c){return Object(j.jsxs)("li",{className:u()("App__item",{"App__item--active":t.includes(c)}),children:[Object(j.jsx)("p",{children:c}),t.includes(c)?Object(j.jsx)("button",{className:"App__remove",type:"button",onClick:function(){e.removeGood(c)},children:"Remove"}):Object(j.jsx)("button",{className:"App__select",type:"button",onClick:function(){e.addGood(c)},children:"Select"})]},c)}))})]})})}}]),c}(p.Component);n.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9a7bdb08.chunk.js.map
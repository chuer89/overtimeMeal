(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{RXBc:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var n=l(a("BMrR"));a("Pwec");var r=l(a("CtXQ"));a("+L6B");var d=l(a("2/Rp"));a("giR+");var u=l(a("fyUT"));a("jCWc");var m=l(a("kPKH"));a("2qtc");var c=l(a("kLXV")),s=l(a("XfOM")),f=a("MuoO"),i=l(a("LvDl")),o=l(a("q1tI")),p=l(a("wh9K")),v=c.default.confirm;class _ extends o.default.Component{constructor(){super(...arguments),this.state={title:[{name:"\u90e8\u95e8"},{name:"\u4efd\u6570"},{name:"\u5907\u6ce8"}],span:[10,8,6],visibleRemark:!1,indexList:0,remarkValue:""}}render(){var e=this.props,t=e.app,a=e.dispatch,l=t.department,c=this.state,f=c.title,_=c.span,k=c.visibleRemark,E=c.indexList,b=c.remarkValue,x=this,T=f.map((e,t)=>{var a="";return 1===t&&(a=s.default.textCenter),o.default.createElement(m.default,{key:t,span:_[t],className:a},o.default.createElement("div",{className:s.default.titleTable},e.name))}),y=(e,t)=>{a({type:"app/meal",payload:{value:e,index:t}})},N=l.map((e,t)=>{var a=e.number||"";return o.default.createElement("div",{className:s.default.contentTable,key:t},o.default.createElement(u.default,{min:0,max:100,value:a,onChange:e=>{y(e,t)}}))}),h=(e,t)=>{x.setState({visibleRemark:!0,indexList:e,remarkValue:t})},R=l.map((e,t)=>{var a=e.remark||"\u65e0";return o.default.createElement("div",{className:s.default.contentTable,key:t},o.default.createElement(d.default,{className:s.default.addRemark,size:"small",onClick:()=>{h(t,e.remark)}},"\u7f16\u8f91"),o.default.createElement("span",{title:a},a))}),w=l.map((e,t)=>{return o.default.createElement("div",{key:t,className:s.default.contentTable},o.default.createElement(r.default,{type:"idcard",theme:"outlined",className:s.default.departmentDel}),e.name)}),C=0;i.default.forEach(l,e=>{C+=e.number-0||0});var L={visibleRemark:k,handleCancel(){x.setState({visibleRemark:!1})},handerAdd(e){a({type:"app/meal",payload:{value:e,index:E,isRemark:!0}}),x.setState({visibleRemark:!1})},remarkValue:b},g=()=>{v({title:"\u786e\u5b9a\u6e05\u7a7a\u5417?",content:"\u6e05\u9664\u540e\uff0c\u6570\u636e\u65e0\u6cd5\u6062\u590d\u3002 ",okText:"Yes",okType:"danger",cancelText:"No",onOk(){a({type:"app/clear"})},onCancel(){}})};return o.default.createElement("div",{className:s.default.content},o.default.createElement("div",null,o.default.createElement(p.default,L)),o.default.createElement("div",{className:s.default.departmentBox},o.default.createElement("div",null,o.default.createElement("p",{className:s.default.infoTips},"\u63d0\u9192\uff1a\u672c\u7cfb\u7edf\u672a\u5b9e\u540d\uff0c\u672a\u9632\u5237\uff0c\u672a\u9632\u91cd\u590d\u70b9\u9910\uff1b",o.default.createElement("span",{className:s.default.pointInfo},"\u8bf7\u5907\u6ce8\u7528\u9910\u4eba\u59d3\u540d\uff0c\u5426\u5219\u65e0\u6548"),"\u3002\u8bf7\u4e00\u4e2a\u90e8\u95e8\u6307\u6d3e\u4e00\u4eba\u64cd\u4f5c\uff0c\u5207\u5fcc\u8bef\u70b9\u9519\u90e8\u95e8")),o.default.createElement("div",null,o.default.createElement(n.default,null,T)),o.default.createElement("div",null,o.default.createElement(n.default,null,o.default.createElement(m.default,{span:_[0]},w),o.default.createElement(m.default,{span:_[1],className:s.default.textCenter},N),o.default.createElement(m.default,{span:_[2]},R)))),o.default.createElement("div",{className:s.default.numberAll},"\u603b\u8ba1\uff1a",o.default.createElement("span",{className:s.default.number},C),"\u4efd",o.default.createElement(d.default,{className:s.default.resetBtn,type:"danger",onClick:g},"\u6e05\u7a7a")))}}var k=(0,f.connect)(e=>{var t=e.app;return{app:t}})(_);t.default=k},XfOM:function(e,t,a){e.exports={"text-overflow":"text-overflow___cHEF2",content:"content___3My1A",textCenter:"textCenter___32LOk",welcome:"welcome___2Q0k6",departmentBox:"departmentBox___3n4JN",titleTable:"titleTable___3ZNLl",contentTable:"contentTable___tovw2",departmentDel:"departmentDel___2WQyj",numberAll:"numberAll___2jBOd",number:"number___28knS",resetBtn:"resetBtn___3D1n1",addRemark:"addRemark___37gwR",infoTips:"infoTips___3f4bt",pointInfo:"pointInfo___SitaT"}},wh9K:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("q1tI"));a("2qtc");var r=l(a("kLXV"));a("5NDa");var d=l(a("5rEg")),u=(l(a("LvDl")),d.default.TextArea),m=e=>{var t=e.visibleRemark,a=e.handleCancel,l=e.handerAdd,d=e.remarkValue,m=d||"",c=e=>{m=e.target.value},s=()=>{l(m)},f={padding:"0 24px 24px 24px"};return n.default.createElement(r.default,{title:"\u5907\u6ce8\u4fe1\u606f",width:600,cancelText:"\u53d6\u6d88",okText:"\u786e\u5b9a",destroyOnClose:!0,onOk:s,visible:t,onCancel:a},n.default.createElement("div",null,n.default.createElement("div",{style:f},n.default.createElement(u,{rows:8,maxLength:480,defaultValue:d,onChange:c}))))},c=m;t.default=c}}]);
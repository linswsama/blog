(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-497aa893"],{"694b":function(t,s,e){},"6d57":function(t,s,e){for(var o=e("e44b"),i=e("80a9"),a=e("bf16"),n=e("e7ad"),c=e("86d4"),r=e("da6d"),l=e("cb3d"),g=l("iterator"),f=l("toStringTag"),u=r.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},C=i(h),L=0;L<C.length;L++){var m,d=C[L],b=h[d],S=n[d],_=S&&S.prototype;if(_&&(_[g]||c(_,g,u),_[f]||c(_,f,d),r[d]=u,b))for(m in o)_[m]||a(_,m,o[m],!0)}},af35:function(t,s,e){"use strict";var o=e("694b"),i=e.n(o);i.a},f2f7:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"classify"},[e("main",[e("section",{staticClass:"container bg-white"},[e("div",{staticClass:"tag-title flex-cc pt-4"},[e("my-icon",{attrs:{type:"tag",size:"38"}}),e("span",{staticClass:"px-3 font-26"},[t._v("文章分类")])],1),e("div",{staticClass:"tag-list row p-3"},t._l(t.tag_list,(function(s,o){return e("div",{staticClass:"col-5 col-md-2 mb-3"},[e("div",{staticClass:"py-2 bg-tag",class:{select:s.isChoose},on:{click:function(s){return t.chooaseTag(o)}}},[t._v(t._s(s.name))])])})),0)])])])},i=[],a=(e("6d57"),e("ff21"),{data:function(){return{tag_list:[{name:"tag1",isChoose:!1,bg_color:""},{name:"tag2",isChoose:!1,bg_color:""},{name:"tag3",isChoose:!1,bg_color:""},{name:"tag4",isChoose:!1,bg_color:""},{name:"tag5",isChoose:!1,bg_color:""},{name:"tag6",isChoose:!1,bg_color:""},{name:"tag7",isChoose:!1,bg_color:""},{name:"tag8",isChoose:!1,bg_color:""},{name:"tag9",isChoose:!1,bg_color:""},{name:"tag10",isChoose:!1,bg_color:""},{name:"tag11",isChoose:!1,bg_color:""}]}},methods:{goRegister:function(){this.$router.push({path:"/register"})},chooaseTag:function(t){this.tag_list.forEach((function(s,e){s.isChoose=t==e}))}},created:function(){}}),n=a,c=(e("af35"),e("5511")),r=Object(c["a"])(n,o,i,!1,null,"111c8d78",null);s["default"]=r.exports},ff21:function(t,s,e){"use strict";var o=e("e46b"),i=e("013f")(0),a=e("a2cd")([].forEach,!0);o(o.P+o.F*!a,"Array",{forEach:function(t){return i(this,t,arguments[1])}})}}]);
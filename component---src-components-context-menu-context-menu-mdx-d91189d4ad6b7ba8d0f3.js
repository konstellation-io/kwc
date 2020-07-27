(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{oqcK:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return y})),n.d(e,"default",(function(){return C}));var o=n("Fcif"),c=n("+I+c"),a=n("/FXl"),i=n("TjRS"),l=n("ZFoC"),s=n("gLcr"),p=n("3zFd"),b=n.n(p),r=n("Ji91"),u=n("1eiK"),x=n("uVDD"),d=n.n(x),O=n("DmN4"),f=n.n(O),m=n("l7ji"),j=n.n(m),y=(n("aD51"),{});void 0!==y&&y&&y===Object(y)&&Object.isExtensible(y)&&!y.hasOwnProperty("__filemeta")&&Object.defineProperty(y,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/ContextMenu/ContextMenu.mdx"}});var I={_frontmatter:y},T=i.a;function C(t){var e,n=t.components,p=Object(c.a)(t,["components"]);return Object(a.b)(T,Object(o.a)({},I,p,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"contextmenu"},"ContextMenu"),Object(a.b)("p",null,"ContextMenu component allows the user to open a contextual menu on right (optionally left) click."),Object(a.b)("p",null,"This menu shows actions that can be performed over the clicked element."),Object(a.b)("h2",{id:"props-and-interfaces"},"Props and interfaces"),Object(a.b)("h4",{id:"interfaces"},"Interfaces"),Object(a.b)("h5",{id:"menucalltoaction"},"MenuCallToAction"),Object(a.b)(l.d,{of:u.a,mdxType:"Props"}),Object(a.b)("h4",{id:"props"},"Props"),Object(a.b)(l.d,{of:r.a,mdxType:"Props"}),Object(a.b)("h2",{id:"use-cases"},"Use Cases"),Object(a.b)(s.a,{title:"Default",Component:Object(a.b)(r.a,{actions:[{Icon:d.a,text:"option 1",callToAction:function(t,e){alert(e+": 1")}},{Icon:j.a,text:"option 2",callToAction:function(t,e){alert(e+": 2")}}],contextObject:"Default",mdxType:"ContextMenu"},Object(a.b)("div",{style:{display:"flex"}},Object(a.b)("span",{style:{fontSize:"14px",lineHeight:"14px",marginRight:8}},"Menu"),Object(a.b)(f.a,{className:"icon-regular",mdxType:"IconOptions"}))),description:"",mdxType:"UseCaseInline"}),Object(a.b)(s.a,{title:"Open on left click",Component:Object(a.b)(r.a,{actions:[{Icon:d.a,text:"option 1",callToAction:function(t,e){alert(e+": 1")}},{Icon:j.a,text:"option 2",callToAction:function(t,e){alert(e+": 2")}}],contextObject:"Open on left click",openOnLeftClick:!0,mdxType:"ContextMenu"},Object(a.b)("div",{style:{display:"flex"}},Object(a.b)("span",{style:{fontSize:"14px",lineHeight:"14px",marginRight:8}},"Menu"),Object(a.b)(f.a,{className:"icon-regular",mdxType:"IconOptions"}))),description:"To show a regular menu instead of a contextual one",mdxType:"UseCaseInline"}),Object(a.b)(s.a,{title:"Disable option",Component:Object(a.b)(r.a,{actions:[{Icon:d.a,text:"option 1",disabled:!0,callToAction:function(t,e){alert(e+": 1")}},{Icon:j.a,text:"option 2",callToAction:function(t,e){alert(e+": 2")}}],contextObject:"Disable option",mdxType:"ContextMenu"},Object(a.b)("div",{style:{display:"flex"}},Object(a.b)("span",{style:{fontSize:"14px",lineHeight:"14px",marginRight:8}},"Menu"),Object(a.b)(f.a,{className:"icon-regular",mdxType:"IconOptions"}))),mdxType:"UseCaseInline"}),Object(a.b)(s.a,{title:"With a separator",Component:Object(a.b)(r.a,{openOnLeftClick:!1,actions:[{Icon:d.a,text:"Remove all",callToAction:function(t,e){alert(e+": 1")}},{text:"Select Role",separator:!0},{Icon:j.a,text:"Admin",callToAction:function(t,e){alert(e+": 2")}},{Icon:j.a,text:"Viewer",callToAction:function(t,e){alert(e+": 3")}}],contextObject:"With a separator",mdxType:"ContextMenu"},Object(a.b)("div",{style:{display:"flex"}},Object(a.b)("span",{style:{fontSize:"14px",lineHeight:"14px",marginRight:8}},"Menu"),Object(a.b)(f.a,{className:"icon-regular",mdxType:"IconOptions"}))),description:"Usefull to make agrupations",mdxType:"UseCaseInline"}),Object(a.b)("h2",{id:"playground"},"Playground"),Object(a.b)(l.c,{__position:6,__code:"<ContextMenu\n  actions={[\n    {\n      Icon: IconCopyAll,\n      text: 'disabled option',\n      disabled: true,\n      callToAction: function(_, contextObject) {\n        alert(`${contextObject}: 2`)\n      },\n    },\n    {\n      Icon: IconDelete,\n      text: 'option 1',\n      callToAction: function(_, contextObject) {\n        alert(`${contextObject}: 1`)\n      },\n    },\n    {\n      Icon: IconCopyAll,\n      text: 'Group title',\n      separator: true,\n      callToAction: function(_, contextObject) {\n        alert(`${contextObject}: 2`)\n      },\n    },\n    {\n      Icon: IconCopyAll,\n      text: 'Group child 1 (disabled)',\n      disabled: true,\n      callToAction: function(_, contextObject) {\n        alert(`${contextObject}: 2`)\n      },\n    },\n    {\n      Icon: IconCopyAll,\n      text: 'Group child 2',\n      callToAction: function(_, contextObject) {\n        alert(`${contextObject}: 2`)\n      },\n    },\n  ]}\n  contextObject={'Context of Menu!'}\n>\n  <div style={{ display: 'flex' }}>\n    <span style={{ fontSize: '14px', lineHeight: '14px', marginRight: 8 }}>\n      Menu\n    </span>\n    <IconOptions className=\"icon-regular\" />\n  </div>\n</ContextMenu>",__scope:(e={props:p,DefaultLayout:i.a,Playground:l.c,Props:l.d,UseCaseInline:s.a,IconClose:b.a,ContextMenu:r.a,MenuCallToActionIface:u.a,IconDelete:d.a,IconOptions:f.a,IconCopyAll:j.a},e.DefaultLayout=i.a,e._frontmatter=y,e),mdxType:"Playground"},Object(a.b)(r.a,{actions:[{Icon:j.a,text:"disabled option",disabled:!0,callToAction:function(t,e){alert(e+": 2")}},{Icon:d.a,text:"option 1",callToAction:function(t,e){alert(e+": 1")}},{Icon:j.a,text:"Group title",separator:!0,callToAction:function(t,e){alert(e+": 2")}},{Icon:j.a,text:"Group child 1 (disabled)",disabled:!0,callToAction:function(t,e){alert(e+": 2")}},{Icon:j.a,text:"Group child 2",callToAction:function(t,e){alert(e+": 2")}}],contextObject:"Context of Menu!",mdxType:"ContextMenu"},Object(a.b)("div",{style:{display:"flex"}},Object(a.b)("span",{style:{fontSize:"14px",lineHeight:"14px",marginRight:8}},"Menu"),Object(a.b)(f.a,{className:"icon-regular",mdxType:"IconOptions"})))))}void 0!==C&&C&&C===Object(C)&&Object.isExtensible(C)&&!C.hasOwnProperty("__filemeta")&&Object.defineProperty(C,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/ContextMenu/ContextMenu.mdx"}}),C.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-context-menu-context-menu-mdx-d91189d4ad6b7ba8d0f3.js.map
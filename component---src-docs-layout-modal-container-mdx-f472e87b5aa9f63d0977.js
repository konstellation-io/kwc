(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"7V+2":function(o,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a("IKa1"),e=a("ITlK"),d=a("V0Ug"),l=a("sN0p"),r=a("EeHy"),i=a("4o/N"),u=a("2VoF"),s=(a("xH0s"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/layout/ModalContainer.mdx"}});var y={_frontmatter:s},p=l.a;function c(o){var t,a,c,m,f=o.components,b=Object(e.a)(o,["components"]);return Object(d.b)(p,Object(n.a)({},y,b,{components:f,mdxType:"MDXLayout"}),Object(d.b)("h1",{id:"modalcontainer"},"ModalContainer"),Object(d.b)("p",null,"ModalContainer components generates a modal whose content can be customized with the modal layouts."),Object(d.b)("h2",{id:"props"},"Props"),Object(d.b)(r.d,{of:u.c,mdxType:"Props"}),Object(d.b)("h2",{id:"usage"},"Usage"),Object(d.b)("p",null,"Import this and the layout component you want use and show them when desired."),Object(d.b)("pre",null,Object(d.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import React, { useState } from 'react';\nimport {\n  ModalContainer,\n  ModalLayoutInfo\n} from 'konstellation-web-components';\n\nfunction Component() {\n  const [showModal, setShowModal] = useState(false);\n\n  return (\n    <div>\n      <div onCLick={() => setShowModal(true)}>RECORD ACTION!</div>\n      { showModal && (\n        <ModalContainer\n          title=\"CONFIRMATION\"\n          actionButtonLabel=\"RECORD ACTION\"\n          blocking\n          warning\n          onAccept={() => setShowModal(false)}\n          onCancel={() => setShowModal(false)}\n          confirmationTimer={5}\n        >\n          <ModalLayoutInfo>\n            This action will be registered in User Activity\n          </ModalLayoutInfo>\n        </ModalContainer>\n      )}\n    </div>\n  );\n}\n")),Object(d.b)("h1",{id:"modalcontainer-layouts"},"ModalContainer layouts"),Object(d.b)("h2",{id:"modallayoutinfo"},"ModalLayoutInfo"),Object(d.b)("h3",{id:"props-1"},"Props"),Object(d.b)(r.d,{of:u.f,mdxType:"Props"}),Object(d.b)(r.c,{__position:2,__code:"<ModalLayoutInfo>Some information to show inside the modal.</ModalLayoutInfo>",__scope:(t={props:b,DefaultLayout:l.a,Playground:r.c,Props:r.d,ModalContainer:i.ModalContainer,ModalLayoutCalendar:i.ModalLayoutCalendar,ModalLayoutConfirmList:i.ModalLayoutConfirmList,ModalLayoutJustify:i.ModalLayoutJustify,ModalLayoutInfo:i.ModalLayoutInfo,ModalContainerPropsComponent:u.c,ModalLayoutCalendarPropsComponent:u.d,ModalLayoutConfirmListPropsComponent:u.e,ModalLayoutJustifyPropsComponent:u.g,ModalLayoutInfoPropsComponent:u.f},t.DefaultLayout=l.a,t._frontmatter=s,t),mdxType:"Playground"},Object(d.b)(i.ModalLayoutInfo,{mdxType:"ModalLayoutInfo"},"Some information to show inside the modal.")),Object(d.b)("h2",{id:"modallayoutjustify"},"ModalLayoutJustify"),Object(d.b)("h3",{id:"props-2"},"Props"),Object(d.b)(r.d,{of:u.g,mdxType:"Props"}),Object(d.b)(r.c,{__position:4,__code:"<div style={{ width: '360px' }}>\n  <ModalLayoutJustify\n    onUpdate={() => {}}\n    submit={() => alert('submitted')}\n    error=\"\"\n    label=\"why are you doing that?\"\n  />\n</div>",__scope:(a={props:b,DefaultLayout:l.a,Playground:r.c,Props:r.d,ModalContainer:i.ModalContainer,ModalLayoutCalendar:i.ModalLayoutCalendar,ModalLayoutConfirmList:i.ModalLayoutConfirmList,ModalLayoutJustify:i.ModalLayoutJustify,ModalLayoutInfo:i.ModalLayoutInfo,ModalContainerPropsComponent:u.c,ModalLayoutCalendarPropsComponent:u.d,ModalLayoutConfirmListPropsComponent:u.e,ModalLayoutJustifyPropsComponent:u.g,ModalLayoutInfoPropsComponent:u.f},a.DefaultLayout=l.a,a._frontmatter=s,a),mdxType:"Playground"},Object(d.b)("div",{style:{width:"360px"}},Object(d.b)(i.ModalLayoutJustify,{onUpdate:function(){},submit:function(){return alert("submitted")},error:"",label:"why are you doing that?",mdxType:"ModalLayoutJustify"}))),Object(d.b)("h2",{id:"modallayoutconfirmlist"},"ModalLayoutConfirmList"),Object(d.b)("h3",{id:"props-3"},"Props"),Object(d.b)(r.d,{of:u.e,mdxType:"Props"}),Object(d.b)(r.c,{__position:6,__code:'<ModalLayoutConfirmList\n  message="Selected items"\n  confirmMessage="Are you sure you want to perform the action?"\n>\n  <div>Item A</div>\n  <div>Item D</div>\n  <div>Item F</div>\n</ModalLayoutConfirmList>',__scope:(c={props:b,DefaultLayout:l.a,Playground:r.c,Props:r.d,ModalContainer:i.ModalContainer,ModalLayoutCalendar:i.ModalLayoutCalendar,ModalLayoutConfirmList:i.ModalLayoutConfirmList,ModalLayoutJustify:i.ModalLayoutJustify,ModalLayoutInfo:i.ModalLayoutInfo,ModalContainerPropsComponent:u.c,ModalLayoutCalendarPropsComponent:u.d,ModalLayoutConfirmListPropsComponent:u.e,ModalLayoutJustifyPropsComponent:u.g,ModalLayoutInfoPropsComponent:u.f},c.DefaultLayout=l.a,c._frontmatter=s,c),mdxType:"Playground"},Object(d.b)(i.ModalLayoutConfirmList,{message:"Selected items",confirmMessage:"Are you sure you want to perform the action?",mdxType:"ModalLayoutConfirmList"},Object(d.b)("div",null,"Item A"),Object(d.b)("div",null,"Item D"),Object(d.b)("div",null,"Item F"))),Object(d.b)("h2",{id:"modallayoutcalendar"},"ModalLayoutCalendar"),Object(d.b)("h3",{id:"props-4"},"Props"),Object(d.b)(r.d,{of:u.d,mdxType:"Props"}),Object(d.b)("blockquote",null,Object(d.b)("p",{parentName:"blockquote"},"watch function must receive a param 'startDate' or 'endDate' and return its actual values.")),Object(d.b)(r.c,{__position:8,__code:"<div style={{ width: '100%', height: '600px' }}>\n  <ModalLayoutCalendar setValue={() => {}} watch={valueToWatch => {}} />\n</div>",__scope:(m={props:b,DefaultLayout:l.a,Playground:r.c,Props:r.d,ModalContainer:i.ModalContainer,ModalLayoutCalendar:i.ModalLayoutCalendar,ModalLayoutConfirmList:i.ModalLayoutConfirmList,ModalLayoutJustify:i.ModalLayoutJustify,ModalLayoutInfo:i.ModalLayoutInfo,ModalContainerPropsComponent:u.c,ModalLayoutCalendarPropsComponent:u.d,ModalLayoutConfirmListPropsComponent:u.e,ModalLayoutJustifyPropsComponent:u.g,ModalLayoutInfoPropsComponent:u.f},m.DefaultLayout=l.a,m._frontmatter=s,m),mdxType:"Playground"},Object(d.b)("div",{style:{width:"100%",height:"600px"}},Object(d.b)(i.ModalLayoutCalendar,{setValue:function(){},watch:function(o){},mdxType:"ModalLayoutCalendar"}))))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/layout/ModalContainer.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-layout-modal-container-mdx-f472e87b5aa9f63d0977.js.map
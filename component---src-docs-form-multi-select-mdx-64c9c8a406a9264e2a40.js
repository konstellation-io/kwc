(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{j9k5:function(e,t,l){"use strict";l.r(t),l.d(t,"_frontmatter",(function(){return j})),l.d(t,"default",(function(){return C}));var o=l("IKa1"),n=l("ITlK"),i=l("V0Ug"),c=l("sN0p"),a=l("EeHy"),p=l("gLcr"),r=l("zis7"),s=l("jX4y"),O=l("1xhe"),b=l.n(O),d=l("EJNT"),m=l.n(d),u=l("lRKW"),S=l.n(u),I=l("FYi0"),T=l.n(I),h=l("ovaK"),j=(l("xH0s"),{});void 0!==j&&j&&j===Object(j)&&Object.isExtensible(j)&&!j.hasOwnProperty("__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/form/MultiSelect.mdx"}});var M={_frontmatter:j},y=c.a;function C(e){var t,l=e.components,O=Object(n.a)(e,["components"]);return Object(i.b)(y,Object(o.a)({},M,O,{components:l,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"multiselect"},"MultiSelect"),Object(i.b)("p",null,"MultiSelect component implements a checkbox selector component."),Object(i.b)("h2",{id:"props-and-enums"},"Props and enums"),Object(i.b)("h3",{id:"enums"},"Enums"),Object(i.b)(r.a,{of:[{name:"MultiSelectTheme",value:s.MultiSelectTheme}],mdxType:"PropEnum"}),Object(i.b)("h3",{id:"props"},"Props"),Object(i.b)("h4",{id:"multiselectoption"},"MultiSelectOption"),Object(i.b)(a.d,{of:h.i,mdxType:"Props"}),Object(i.b)("h4",{id:"multiselect-1"},"MultiSelect"),Object(i.b)(a.d,{of:h.j,mdxType:"Props"}),Object(i.b)("h2",{id:"use-cases"},"Use Cases"),Object(i.b)(p.a,{title:"Default",Component:Object(i.b)(s.MultiSelect,{placeholder:"Options",hideError:!0,options:[{label:"Option A"},{label:"Option B"},{label:"Option C"}],mdxType:"MultiSelect"}),code:Object(i.b)("code",null,'<MultiSelect placeholder="Options" options={[{ label: "Option A" }, { label: "Option B" }, { label: "Option C" }]} hideError />'),description:"",mdxType:"UseCaseInline"}),Object(i.b)(p.a,{title:"Default",Component:Object(i.b)(s.MultiSelect,{placeholder:"Options",hideError:!0,options:[{label:"Option A"},{label:"Option B"},{label:"Option C"}],label:"OPTIONS",mdxType:"MultiSelect"}),code:Object(i.b)("code",null,'<MultiSelect placeholder="Options" options={[{ label: "Option A" }, { label: "Option B" }, { label: "Option C" }]} label="OPTIONS" hideError />'),description:"",mdxType:"UseCaseInline"}),Object(i.b)(p.a,{title:"Light Theme",Component:Object(i.b)(s.MultiSelect,{placeholder:"Options",hideError:!0,options:[{label:"Option A"},{label:"Option B"},{label:"Option C"}],theme:s.MultiSelectTheme.LIGHT,mdxType:"MultiSelect"}),code:Object(i.b)("code",null,'<MultiSelect placeholder="Options" theme={MultiSelectTheme.LIGHT} options={[{ label: "Option A" }, { label: "Option B" }, { label: "Option C" }]} hideError />'),description:"",mdxType:"UseCaseInline"}),Object(i.b)(p.a,{title:"With select all",Component:Object(i.b)(s.MultiSelect,{placeholder:"Options",hideError:!0,selectAllText:"Select all",options:[{label:"Option A"},{label:"Option B"},{label:"Option C"}],mdxType:"MultiSelect"}),code:Object(i.b)("code",null,'<MultiSelect placeholder="Options" selectAllText="Select all" options={[{ label: "Option A" }, { label: "Option B" }, { label: "Option C" }]} hideError />'),description:"",mdxType:"UseCaseInline"}),Object(i.b)(p.a,{title:"With icons",Component:Object(i.b)(s.MultiSelect,{placeholder:"Options",hideError:!0,options:[{label:"Option A",Icon:Object(i.b)(m.a,{className:"icon-regular",mdxType:"EmailIcon"})},{label:"Option B",Icon:Object(i.b)(S.a,{className:"icon-regular",mdxType:"TimeIcon"})},{label:"Option C",Icon:Object(i.b)(T.a,{className:"icon-regular",mdxType:"IconDelete"})}],mdxType:"MultiSelect"}),code:Object(i.b)("code",null,'<MultiSelect placeholder="Options" options={[{ label: "Option A", Icon: <EmailIcon className="icon-regular"/> },{ label: "Option B", Icon: <TimeIcon className="icon-regular"/> },{ label: "Option C", Icon: <IconDelete className="icon-regular"/> }]} hideError />'),description:"",mdxType:"UseCaseInline"}),Object(i.b)(p.a,{title:"With icons [start]",Component:Object(i.b)(s.MultiSelect,{placeholder:"Options",hideError:!0,options:[{label:"Option A",Icon:Object(i.b)(m.a,{className:"icon-regular",mdxType:"EmailIcon"})},{label:"Option B",Icon:Object(i.b)(S.a,{className:"icon-regular",mdxType:"TimeIcon"})},{label:"Option C",Icon:Object(i.b)(T.a,{className:"icon-regular",mdxType:"IconDelete"})}],iconAtStart:!0,mdxType:"MultiSelect"}),code:Object(i.b)("code",null,'<MultiSelect placeholder="Options" iconAtStart options={[{ label: "Option A", Icon: <EmailIcon className="icon-regular"/> },{ label: "Option B", Icon: <TimeIcon className="icon-regular"/> },{ label: "Option C", Icon: <IconDelete className="icon-regular"/> }]} hideError />'),description:"",mdxType:"UseCaseInline"}),Object(i.b)(p.a,{title:"With error",Component:Object(i.b)(s.MultiSelect,{placeholder:"Options",error:"Some error",options:[{label:"Option A"}],mdxType:"MultiSelect"}),code:Object(i.b)("code",null,'<MultiSelect placeholder="Options" error="Some error" options={[{ label: "Option A" }]} />'),description:"",mdxType:"UseCaseInline"}),Object(i.b)(p.a,{title:"Option selected",Component:Object(i.b)(s.MultiSelect,{placeholder:"Options",selectionUnit:"OPTION",options:[{label:"Option A"},{label:"Option B"}],formSelectedOptions:["Option A"],hideError:!0,mdxType:"MultiSelect"}),code:Object(i.b)("code",null,'<MultiSelect placeholder="Options" selectionUnit="OPTION" options={[{ label: "Option A" }, { label: "Option B" }]} formSelectedOptions={["Option A"]} hideError />'),description:"",mdxType:"UseCaseInline"}),Object(i.b)(p.a,{title:"Options selected",Component:Object(i.b)(s.MultiSelect,{placeholder:"Options",selectionUnit:"OPTION",options:[{label:"Option A"},{label:"Option B"},{label:"Option C"}],formSelectedOptions:["Option A","Option C"],hideError:!0,mdxType:"MultiSelect"}),code:Object(i.b)("code",null,'<MultiSelect placeholder="Options" selectionUnit="OPTION" options={[{ label: "Option A" }, { label: "Option B" }, { label: "Option C" }]} formSelectedOptions={["Option A", "Option C"]} hideError />'),description:"",mdxType:"UseCaseInline"}),Object(i.b)("h2",{id:"playground"},"Playground"),Object(i.b)(a.c,{__position:4,__code:'<MultiSelect\n  label="OPTIONS"\n  placeholder="Options"\n  hideError={false}\n  error=""\n  options={[\n    { label: \'Option A\', Icon: <EmailIcon className="icon-regular" /> },\n    { label: \'Option B\', Icon: <TimeIcon className="icon-regular" /> },\n    { label: \'Option C\', Icon: <IconDelete className="icon-regular" /> },\n    { label: \'Option D\', Icon: <StartIcon className="icon-regular" /> },\n  ]}\n  selectionUnit="OPTION"\n  formSelectedOptions={[\'Option A\', \'Option C\']}\n  onChange={newSelection => alert(`New selections: ${newSelection}`)}\n  selectAllText="ALL OPTIONS"\n  iconAtStart={true}\n/>',__scope:(t={props:O,DefaultLayout:c.a,Playground:a.c,Props:a.d,UseCaseInline:p.a,PropEnum:r.a,MultiSelect:s.MultiSelect,MultiSelectTheme:s.MultiSelectTheme,StartIcon:b.a,EmailIcon:m.a,TimeIcon:S.a,IconDelete:T.a,MultiSelectPropsComponent:h.j,MultiSelectOptionComponent:h.i},t.DefaultLayout=c.a,t._frontmatter=j,t),mdxType:"Playground"},Object(i.b)(s.MultiSelect,{label:"OPTIONS",placeholder:"Options",hideError:!1,error:"",options:[{label:"Option A",Icon:Object(i.b)(m.a,{className:"icon-regular",mdxType:"EmailIcon"})},{label:"Option B",Icon:Object(i.b)(S.a,{className:"icon-regular",mdxType:"TimeIcon"})},{label:"Option C",Icon:Object(i.b)(T.a,{className:"icon-regular",mdxType:"IconDelete"})},{label:"Option D",Icon:Object(i.b)(b.a,{className:"icon-regular",mdxType:"StartIcon"})}],selectionUnit:"OPTION",formSelectedOptions:["Option A","Option C"],onChange:function(e){return alert("New selections: "+e)},selectAllText:"ALL OPTIONS",iconAtStart:!0,mdxType:"MultiSelect"})))}void 0!==C&&C&&C===Object(C)&&Object.isExtensible(C)&&!C.hasOwnProperty("__filemeta")&&Object.defineProperty(C,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/form/MultiSelect.mdx"}}),C.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-form-multi-select-mdx-64c9c8a406a9264e2a40.js.map
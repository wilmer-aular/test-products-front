(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4316)}])},4316:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r=n(5944),i=n(5369),l=n(7294),o=n(4440),a=n(4934),c=n(4466),s=n(9360),d=n(3821),Z=n(9203),u=n(2022),m=n(4246),h=n(9505),p=n(3367),f=n(4864),x=n(9346),g=n(9131),y=n(5008),P=n(8163),w=n(1954),b=e=>{let{open:t,onClose:n,title:i,children:l,action:o,titleAction:a="Eliminar",loading:c=!1}=e;return(0,r.BX)(f.Z,{open:t,onClose:n,fullWidth:!0,maxWidth:"sm",transitionDuration:500,PaperProps:{style:{transition:"opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",opacity:t?1:0,borderRadius:8,boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)"}},children:[(0,r.tZ)(x.Z,{sx:{backgroundColor:"error.main"},children:(0,r.tZ)(m.Z,{fontWeight:600,fontSize:20,color:"#fff",sx:{my:2},children:i})}),(0,r.tZ)(g.Z,{children:l}),(0,r.BX)(y.Z,{className:"dialog-actions-dense",children:[(0,r.tZ)(P.Z,{onClick:n,color:"error",children:"Cancelar"}),(0,r.tZ)(P.Z,{variant:"contained",color:"error",onClick:o,startIcon:c?(0,r.tZ)(w.JO,{icon:"eos-icons:loading"}):(0,r.tZ)(r.HY,{}),children:a})]})]})},v=n(8207),S=n(4483),C=n(6501),X=e=>{let{row:t,refresh:n}=e,i=(0,s.Z)(),[o,a]=(0,l.useState)(!1),[c,d]=(0,l.useState)(!1),Z=async()=>{try{d(!0),await S.Z.remove("/templates/".concat(null==t?void 0:t.id)),d(!1),a(!1),C.ZP.success("Se elimin\xf3 el producto con \xe9xito."),n()}catch(e){C.ZP.error("Ups! Ocurri\xf3 un error.")}};return(0,r.BX)(r.HY,{children:[(0,r.tZ)(v.Z,{title:"Eliminar producto",placement:"top",arrow:!0,children:(0,r.tZ)(p.Z,{onClick:e=>{e.stopPropagation(),a(!0)},children:(0,r.tZ)(w.JO,{icon:"tabler:trash",style:{color:i.palette.error.main}})})}),(0,r.tZ)(b,{open:o,onClose:()=>a(!1),title:"Eliminar el producto ".concat(null==t?void 0:t.name),titleAction:"Eliminar",action:Z,loading:c,children:(0,r.BX)(m.Z,{fontSize:14,fontWeight:100,sx:{mt:3},children:["\xbfEst\xe1 seguro que desea eliminar el producto ",(0,r.tZ)("strong",{children:null==t?void 0:t.name}),"?"]})})]})},B=n(3465),N=n(6310);let _=N.Ry().shape({name:N.Z_().required(),lastName:N.Z_().required(),phone:N.Z_().required(),newPassword:N.Z_(),confirmPassword:N.Z_().when("newPassword",{is:e=>e&&e.length>0,then:e=>e.oneOf([N.iH("newPassword")],"Passwords must match")})}),k={name:"",lastName:"",phone:"",newPassword:"",confirmPassword:""};var z=e=>{let{open:t,onClose:n,title:i,children:l,onSubmit:o,loading:a=!1,size:c="sm",titleAction:s="Guardar"}=e;return(0,r.BX)(f.Z,{open:t,onClose:n,"aria-labelledby":"form-dialog-title",fullWidth:!0,maxWidth:c,transitionDuration:500,PaperProps:{style:{transition:"opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",opacity:t?1:0,borderRadius:8,boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)"}},children:[(0,r.tZ)(x.Z,{sx:{backgroundColor:"primary.main"},children:(0,r.tZ)(m.Z,{fontWeight:600,fontSize:20,color:"#fff",sx:{my:2},children:i})}),(0,r.BX)("form",{onSubmit:o,children:[(0,r.tZ)(g.Z,{children:l}),(0,r.BX)(y.Z,{className:"dialog-actions-dense",children:[(0,r.tZ)(P.Z,{onClick:n,color:"error",children:"Cancelar"}),(0,r.tZ)(P.Z,{variant:"contained",color:"primary",sx:{color:"#fff"},onClick:o,startIcon:a?(0,r.tZ)(w.JO,{icon:"eos-icons:loading"}):(0,r.tZ)(r.HY,{}),disabled:a,children:s})]})]})]})},E=n(9307),O=n(7536),W=n(7533),H=()=>{let{user:e,setUser:t}=(0,E.fi)(),[n,i]=(0,l.useState)(!1),[o,a]=(0,l.useState)(!1),{register:s,handleSubmit:d,reset:Z,formState:{errors:u}}=(0,O.cI)({defaultValues:e?{name:e.name,lastName:e.lastName,phone:e.phone,newPassword:"",confirmPassword:""}:k,mode:"onBlur",resolver:(0,W.X)(_)}),m=async n=>{try{a(!0),await S.Z.put("/staff/".concat(e.id,"/staffApp"),n),t({...e,name:n.name,lastName:n.lastName,phone:n.phone}),C.ZP.success("Data updated successfully"),Z(),a(!1),i(!1)}catch(e){C.ZP.error("Ups, An error occurred.")}};return(0,r.BX)(r.HY,{children:[(0,r.tZ)(v.Z,{title:"Actualizar Producto",arrow:!0,placement:"top",children:(0,r.tZ)(P.Z,{variant:"contained",sx:{color:"white",mt:.5},onClick:()=>i(!0),size:"small",color:"primary",startIcon:(0,r.tZ)(w.JO,{icon:"lucide:edit"}),children:"Editar"})}),(0,r.tZ)(z,{open:n,onClose:()=>i(!1),title:"Actualizar Producto",onSubmit:d(m),size:"xs",loading:o,children:(0,r.BX)(c.ZP,{container:!0,spacing:2,children:[(0,r.tZ)(c.ZP,{item:!0,xs:12,children:(0,r.tZ)(B.Z,{...s("name"),label:"Firt Name*",variant:"outlined",size:"small",fullWidth:!0,error:!!u.name})}),(0,r.tZ)(c.ZP,{item:!0,xs:12,children:(0,r.tZ)(B.Z,{...s("lastName"),label:"Last Name*",variant:"outlined",size:"small",fullWidth:!0,error:!!u.lastName})}),(0,r.tZ)(c.ZP,{item:!0,xs:12,children:(0,r.tZ)(B.Z,{...s("phone"),label:"Phone",variant:"outlined",size:"small",fullWidth:!0,error:!!u.phone})})]})})]})};let I=e=>null==e?void 0:e.split(/\s/).reduce((e,t)=>e+=t.slice(0,1),"");var J=n(2034),Y=e=>{let{products:t}=e,n=(0,s.Z)(),{user:i}=(0,E.fi)();return(0,r.tZ)(d.Z,{sx:{mb:3},children:(0,r.BX)(Z.Z,{children:[(0,r.BX)(c.ZP,{container:!0,spacing:2,children:[(0,r.tZ)(c.ZP,{item:!0,lg:3,sm:2,xs:2.5,children:(0,r.tZ)(u.Z,{alt:"Usuario",src:null==i?void 0:i.photoUrl,sx:{width:{lg:80,xs:60},height:{lg:80,xs:60},mb:2,fontSize:{lg:"2.5rem",xs:"2rem"}},children:I(null==i?void 0:i.name)})}),(0,r.BX)(c.ZP,{item:!0,lg:9,sm:3,xs:6,children:[(0,r.tZ)(m.Z,{variant:"h6",children:(0,J.E)("".concat(null==i?void 0:i.name," ").concat(null==i?void 0:i.lastName))}),(0,r.BX)(o.Z,{sx:{mt:1},children:[(null==i?void 0:i.email)?(0,r.BX)(o.Z,{sx:{display:"flex",mr:5},children:[(0,r.tZ)(w.JO,{icon:"iconoir:mail",style:{marginTop:"1px"},fontSize:20,color:n.palette.error.dark}),(0,r.tZ)(m.Z,{sx:{ml:1},color:"grey",children:null==i?void 0:i.email})]}):(0,r.tZ)(r.HY,{}),(null==i?void 0:i.phone)?(0,r.BX)(o.Z,{sx:{display:"flex",mr:5},children:[(0,r.tZ)(w.JO,{icon:"tabler:phone",style:{marginTop:"1px"},fontSize:20,color:n.palette.primary.dark}),(0,r.tZ)(m.Z,{sx:{ml:1},color:"grey",children:null==i?void 0:i.phone})]}):(0,r.tZ)(r.HY,{})]})]})]}),(0,r.tZ)(h.Z,{sx:{my:1}}),(0,r.BX)(o.Z,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"flex-start"},children:[(0,r.tZ)(H,{}),(0,r.tZ)(X,{})]})]})})},A=n(5867),q=()=>{let{user:e}=(0,E.fi)();(0,s.Z)();let[t,n]=(0,l.useState)({}),[i,d]=(0,l.useState)(!1),[Z,u]=(0,l.useState)(null),m=(0,l.useCallback)(async()=>{d(!0),u(await S.Z.get("/manifest/pendingByStaff/".concat(e.id))),d(!1)},[d]);return(0,l.useEffect)(()=>{m()},[m]),(0,r.tZ)(A.E.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeInOut"},children:i?(0,r.tZ)(o.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",p:10},children:(0,r.tZ)(a.Z,{})}):(0,r.tZ)(c.ZP,{container:!0,spacing:3,children:(0,r.tZ)(c.ZP,{item:!0,lg:4,sm:6,xs:12,children:(0,r.tZ)(Y,{products:Z})})})})},T=function(){return(0,r.tZ)(i.Z,{maxWidth:"lg",children:(0,r.tZ)(q,{})})}}},function(e){e.O(0,[699,123,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);
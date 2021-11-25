(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{246:function(e,t,a){},532:function(e,t,a){"use strict";a.r(t);var n,r,s,i,c,l,j,o,u,d,b,h,O,x=a(0),p=a.n(x),m=a(68),v=a.n(m),f=a(595),g=(a(246),a(45)),k=a(56),y=a(626),w=a(26),S=a(209),I=a.n(S),C=a(606),$=a(210),T=a.n($),F=a(15),A=a.n(F),P=a(38),D=a(12),z=a(587),V=a(623),N=a(31),B=a(96),M=Object(B.d)(n||(n=Object(N.a)(["\n  mutation($email: String, $password: String, $userId: ID) {\n    updateUser(email: $email, password: $password, userId: $userId)\n  }\n"]))),U=Object(B.d)(r||(r=Object(N.a)(["\n  mutation($userId: ID!) {\n    activateUser(userId: $userId)\n  }\n"]))),E=Object(B.d)(s||(s=Object(N.a)(["\n  mutation ($minPlayersForMatch: Int, $minPlayersForHc: Int, $ignoreHcBefore: Date, $ignoreMatchBefore: Date) {\n    setSetup(\n      minPlayersForMatch: $minPlayersForMatch,\n      minPlayersForHc: $minPlayersForHc,\n      ignoreHcBefore: $ignoreHcBefore,\n      ignoreMatchBefore: $ignoreMatchBefore\n    )\n  }\n"]))),q=Object(B.d)(i||(i=Object(N.a)(["\n  mutation($file: Upload!) {\n    uploadCsvFile(file: $file) {\n      filename\n      mimetype\n      encoding\n    }\n  }\n"]))),H=Object(B.d)(c||(c=Object(N.a)(["\n  mutation($name: String!, $password: String!, $email: String) {\n    addUser(name: $name, password: $password, email: $email) {\n      id\n    }\n  }\n"]))),L=Object(B.d)(l||(l=Object(N.a)(["\nmutation ($userId: ID!) {\n  deleteUser(userId: $userId)\n}\n"]))),R=Object(B.d)(j||(j=Object(N.a)(["\nmutation($name: String!, $password: String!) {\n  login(name: $name, password: $password)\n  \n}\n"]))),W=Object(B.d)(o||(o=Object(N.a)(["\nmutation ($alias: String!, $userId: ID) {\n  addAlias(alias: $alias, userId: $userId)\n}\n"]))),Q=Object(B.d)(u||(u=Object(N.a)(["\nmutation ($aliasId: Int!) {\n  deleteAlias(aliasId: $aliasId)\n}\n"]))),K=Object(B.d)(d||(d=Object(N.a)(["\n  query {\n    getLogs {\n      date\n      process\n      type\n      message\n    }\n  }\n"]))),J=Object(B.d)(b||(b=Object(N.a)(["\nquery ($fetchFromDatabase: Boolean) {\n  getMe (fetchFromDatabase: $fetchFromDatabase) {\n    id\n    name\n    rooli\n    email\n  }\n}\n"]))),G=Object(B.d)(h||(h=Object(N.a)(["\nquery {\n  getCourseStats {\n    rata\n    layout\n    par\n    min\n    max\n    avg\n    games\n    tenLatestRounds\n    hc\n  }\n}\n"]))),_=Object(B.d)(O||(O=Object(N.a)(["\nquery ($userId: ID) {\n  getAliases (userId: $userId ) {\n    id\n    alias\n  }\n}\n"]))),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=Object(x.useState)(null),a=Object(D.a)(t,2),n=a[0],r=a[1],s=Object(z.a)(J,{variables:{fetchFromDatabase:e}}),i=s.loading,c=s.data,l=Object(V.a)(M,{refetchQueries:[J,{variables:{fetchFromDatabase:e}}]}),j=Object(D.a)(l,1),o=j[0];Object(x.useEffect)((function(){i||((null===c||void 0===c?void 0:c.getMe)?r(c.getMe):r(void 0))}),[i,c]);var u=function(){var e=Object(P.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({variables:t});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){r(null)};return{me:n,update:u,clear:d}},Y=a(1),Z=Object(x.createContext)(),ee=function(){return Object(x.useContext)(Z)},te=function(e){var t=e.children,a=X();return Object(Y.jsx)(Z.Provider,{value:a,children:t})},ae=a(603),ne=a(607),re=a(92),se=a(596),ie=function(e){var t=e.field,a=e.type,n=e.label,r=e.form,s=e.placeholder;return console.log(t),Object(Y.jsx)(se.a,{name:t.name,value:t.value,onChange:t.onChange,type:a,label:n,placeholder:s,error:r.errors[t.name],helperText:r.errors[t.name]?r.errors[t.name]:""})};ie.defaultProps={type:"text",label:null,placeholder:null};var ce=ie;var le=function(){var e,t=Object(V.a)(H),a=Object(D.a)(t,2),n=a[0],r=a[1],s=Object(g.b)().enqueueSnackbar,i=function(){var e=Object(P.a)(A.a.mark((function e(t){var a,r,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.tunnus,r=t.password,i=t.email,e.prev=1,e.next=4,n({variables:{name:a,password:r,email:i}});case 4:s("Tunnus luotiin onnistuneesti!",{variant:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),s("Virhe tunnuksen luomisessa!",{variant:"error"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return(null===(e=r.data)||void 0===e?void 0:e.addUser.id)?Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(C.a,{variant:"h4",children:"Tunnus luotu"}),Object(Y.jsx)(C.a,{paragraph:!0,children:"Tunnus luotiin onnistuneesti! Voit kirjautua sill\xe4 sis\xe4\xe4n jahka se ensin aktivoidaan."})]}):Object(Y.jsx)(re.c,{initialValues:{tunnus:"",password:"",password2:"",email:""},onSubmit:function(e){return i(e)},validateOnChange:!1,validate:function(e){var t={};return e.password!==e.password2?t.password2="Salasanat ei t\xe4sm\xe4\xe4!":e.password.length<5&&(t.password="Hey ainakin 5 merkki\xe4 pitk\xe4 salasana d\xe4nks"),e.tunnus.length<=3&&(t.tunnus="Liian lyhyt tunnus"),t},children:Object(Y.jsx)(re.b,{children:Object(Y.jsxs)(ae.a,{container:!0,spacing:2,alignItems:"center",children:[Object(Y.jsx)(ae.a,{item:!0,xs:12,md:6,children:"Tunnus:"}),Object(Y.jsx)(ae.a,{item:!0,xs:12,md:6,children:Object(Y.jsx)(re.a,{name:"tunnus",component:ce,placeholder:"Tunnus..."})}),Object(Y.jsx)(ae.a,{item:!0,xs:12,md:6,children:"Salasana:"}),Object(Y.jsx)(ae.a,{item:!0,xs:12,md:6,children:Object(Y.jsx)(re.a,{name:"password",component:ce,type:"password",placeholder:"Salasana..."})}),Object(Y.jsx)(ae.a,{item:!0,xs:12,md:6,children:"Vahvista salasana:"}),Object(Y.jsx)(ae.a,{item:!0,xs:12,md:6,children:Object(Y.jsx)(re.a,{name:"password2",component:ce,type:"password",placeholder:"Vahvista salasana"})}),Object(Y.jsx)(ae.a,{item:!0,xs:12,md:6,children:"S\xe4hk\xf6posti:"}),Object(Y.jsx)(ae.a,{item:!0,xs:12,md:6,children:Object(Y.jsx)(re.a,{name:"email",component:ce,type:"email",placeholder:"S\xe4hk\xf6posti"})}),Object(Y.jsx)(ae.a,{item:!0,xs:12,md:6,children:Object(Y.jsx)(ne.a,{type:"submit",children:"Luo"})})]})})})},je=a(627),oe=a(591);var ue=function(){var e=Object(V.a)(R),t=Object(D.a)(e,2),a=t[0],n=t[1].loading,r=Object(g.b)().enqueueSnackbar,s=Object(oe.a)(),i=function(){var e=Object(P.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,a({variables:{name:t.target.tunnus.value,password:t.target.password.value}});case 4:return n=e.sent,window.scrollTo(0,0),window.sessionStorage.setItem("suklaaJuna",n.data.login),e.next=9,s.refetchQueries({include:[J]});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),r("V\xe4\xe4r\xe4 tunnus tai salasana (".concat(e.t0,")"),{variant:"error"});case 14:return e.prev=14,t.target.tunnus.value="",t.target.password.value="",e.finish(14);case 18:case"end":return e.stop()}}),e,null,[[1,11,14,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(Y.jsx)("div",{style:{margin:"8px 0px"},children:Object(Y.jsx)("form",{onSubmit:i,children:Object(Y.jsxs)(ae.a,{container:!0,columns:1,spacing:1,children:[Object(Y.jsx)(ae.a,{item:!0,xs:1,children:Object(Y.jsx)(se.a,{name:"tunnus",placeholder:"Tunnus..."})}),Object(Y.jsx)(ae.a,{item:!0,xs:1,children:Object(Y.jsx)(se.a,{name:"password",type:"password",variant:"outlined",placeholder:"Salasana..."})}),Object(Y.jsx)(ae.a,{item:!0,xs:1,children:Object(Y.jsx)(je.a,{loading:n,type:"submit",size:"large",children:" Kirjaudu"})})]})})})},de=function(){var e=Object(oe.a)(),t=ee(),a=function(){var a=Object(P.a)(A.a.mark((function a(){return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.clearStore();case 2:return a.next=4,e.resetStore();case 4:return a.next=6,e.refetchQueries({include:[J]});case 6:window.sessionStorage.clear(),t.clear();case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(Y.jsx)(ne.a,{onClick:a,children:"Logout"})},be=function(){var e=ee();return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)("div",{className:"wideContainer wideContainerTop",children:[Object(Y.jsx)(C.a,{variant:"h2",children:"Olet kirjautunut sis\xe4\xe4n"}),Object(Y.jsxs)(C.a,{paragraph:!0,children:["Olet kirjautunut sis\xe4\xe4n tunnuksella\xa0",Object(Y.jsx)("b",{children:null===e||void 0===e?void 0:e.me.name})]}),Object(Y.jsxs)(C.a,{paragraph:!0,children:["Jos haluat kirjautua ulos, voit erota v\xe4litt\xf6m\xe4sti ryhm\xe4st\xe4 klikkaamalla\xa0",Object(Y.jsx)(de,{}),"\xa0-nappia"]})]}),Object(Y.jsxs)("div",{className:"wideContainer splitContainer",children:[Object(Y.jsxs)("div",{className:"darkContainer",children:[Object(Y.jsx)(C.a,{variant:"h2",children:"Aliakset"}),Object(Y.jsxs)(C.a,{paragraph:!0,children:["Aliaskset yhdist\xe4v\xe4t Udiscin csv-tiedoston nimet k\xe4ytt\xe4j\xe4tunnuksiin. Aliaksia voi lis\xe4t\xe4\xa0",Object(Y.jsx)(k.b,{to:"/settings",children:"asetuksissa"})]})]}),Object(Y.jsx)("div",{children:"\xa0"})]}),Object(Y.jsxs)("div",{className:"wideContainer splitContainer",children:[Object(Y.jsx)("div",{children:"\xa0"}),Object(Y.jsxs)("div",{className:"darkContainer",children:[Object(Y.jsx)(C.a,{variant:"h2",children:"CSV-tiedosto"}),Object(Y.jsxs)(C.a,{paragraph:!0,children:["Udiscist\xe4 saatavan csv-tiedoston voi l\xe4hett\xe4\xe4\xa0",Object(Y.jsx)(k.b,{to:"/upload",children:"Upload"}),"\xa0 -sivun kautta!"]})]})]})]})},he=function(){return ee().me?Object(Y.jsx)(be,{}):Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)("div",{className:"wideContainer wideContainerTop",children:[Object(Y.jsx)(C.a,{variant:"h1",children:Object(Y.jsx)(T.a,{strings:["fRisbeegolfkerh","Fisbeego","RFisbeegolf","Risbeegomfkerho"],typeSpeed:50,backSpeed:40,backDelay:10,onComplete:function(e){e.cursor.remove()}})}),Object(Y.jsx)(C.a,{paragraph:!0,children:"Olet eksynyt Risbeegomfkerhon sivuille."}),Object(Y.jsxs)(C.a,{paragraph:!0,children:["Voit\xa0",Object(Y.jsx)("a",{href:"#login",children:"kirjautua sis\xe4\xe4n"}),"\xa0tai\xa0",Object(Y.jsx)("a",{href:"#luoTunnus",children:"luoda tunnukset"}),"."]})]}),Object(Y.jsxs)("div",{className:"wideContainer splitContainer",children:[Object(Y.jsxs)("div",{className:"darkContainer",children:[Object(Y.jsx)(C.a,{variant:"h3",children:"Ei turvallinen!?"}),Object(Y.jsx)(C.a,{paragraph:!0,children:'Voit huoletta ottaa foliohatun pois p\xe4\xe4st\xe4, sill\xe4 kaikki "arkaluontoinen" data (salasanat, tilastot yms.) kulkevat https-yhteyden kautta.'}),Object(Y.jsxs)(C.a,{paragraph:!0,children:["Risbeegomfkerho on niin k\xf6yh\xe4, ettei edes kunnolliseen",Object(Y.jsx)("a",{href:"https://risbeegomfkerho-env.eba-bw33rqyj.us-east-2.elasticbeanstalk.com/",children:"\xa0sertifikaattiin\xa0"}),"ole varaa."]})]}),Object(Y.jsxs)("div",{id:"login",children:[Object(Y.jsx)(C.a,{variant:"h3",children:"Kirjaudu sis\xe4\xe4n"}),Object(Y.jsx)(C.a,{paragraph:!0,children:"Sy\xf6t\xe4 tunnuksesi ja salasanasi alla oleviin kenttiin kirjautuaksesi sis\xe4\xe4n."}),Object(Y.jsx)(ue,{})]})]}),Object(Y.jsxs)("div",{className:"wideContainer",id:"luoTunnus",children:[Object(Y.jsx)(C.a,{variant:"h3",children:"Luo tunnuket"}),Object(Y.jsx)(C.a,{paragraph:!0,children:"Luo tunnukset t\xe4ytt\xe4m\xe4ll\xe4 alla oleva lomake. S\xe4hk\xf6postiosoite ei ole pakollinen."}),Object(Y.jsx)(C.a,{paragraph:!0,children:"Tunnukset eiv\xe4t ole k\xe4ytett\xe4viss\xe4 heti luomisen j\xe4lkeen, vaan jonkun t\xe4ytyy aktivoida ne ensin."}),Object(Y.jsx)(le,{})]})]})},Oe=a(611),xe=a(612),pe=a(613),me=a(614),ve=a(609),fe=a(610),ge=a(615),ke=a(600),ye=a(608),we=function(){return Object(Y.jsx)(ke.a,{open:!0,children:Object(Y.jsx)(ye.a,{size:100})})};var Se=function(e){var t=new Date(e.getTime()+60*e.getTimezoneOffset()*1e3),a=e.getTimezoneOffset()/60,n=e.getHours();return t.setHours(n-a),t},Ie=function(e){var t=e.log,a=t.date,n=t.process,r=t.type,s=t.message,i=Se(new Date(+a));return Object(Y.jsxs)(ve.a,{children:[Object(Y.jsx)(fe.a,{children:i.toLocaleString()}),Object(Y.jsx)(fe.a,{children:n}),Object(Y.jsx)(fe.a,{children:r}),Object(Y.jsx)(fe.a,{children:s})]})},Ce=function(){var e=Object(z.a)(K),t=Object(x.useState)(null),a=Object(D.a)(t,2),n=a[0],r=a[1];return Object(x.useEffect)((function(){e.data&&!e.loading&&r(e.data.getLogs)}),[e]),n?Object(Y.jsxs)(Oe.a,{children:[Object(Y.jsx)(C.a,{variant:"h3",children:"Captain's log"}),Object(Y.jsx)(xe.a,{children:Object(Y.jsxs)(pe.a,{children:[Object(Y.jsx)(me.a,{children:Object(Y.jsxs)(ve.a,{children:[Object(Y.jsx)(fe.a,{children:"P\xe4iv\xe4"}),Object(Y.jsx)(fe.a,{children:"Prosessi"}),Object(Y.jsx)(fe.a,{children:"Tyyppi"}),Object(Y.jsx)(fe.a,{children:"Viesti"})]})}),Object(Y.jsx)(ge.a,{children:n.map((function(e,t){return Object(Y.jsx)(Ie,{log:e},e.date+t)}))})]})})]}):Object(Y.jsx)(we,{})},$e=a(616),Te=a(617),Fe=a(618),Ae=a(619),Pe=a(221),De=a(601),ze=a(214),Ve=a.n(ze),Ne=a(16),Be=a.n(Ne),Me=function(e){var t=e.children,a=e.rooli,n=ee().me;return!n||""!==a&&n.rooli!==a?Object(Y.jsx)(Y.Fragment,{}):Object(Y.jsx)(Y.Fragment,{children:t})};Me.defaultProps={rooli:""},Me.propTypes={children:Be.a.oneOfType([Be.a.arrayOf(Be.a.object),Be.a.shape()]).isRequired,rooli:Be.a.string};var Ue=Me,Ee=function(e){var t=e.Wrap;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(qe,{to:"/",text:"Etusivu",Wrap:t}),Object(Y.jsx)(qe,{to:"/competitions",Wrap:t,text:"Kisat"}),Object(Y.jsxs)(Ue,{children:[Object(Y.jsx)(qe,{to:"/stats",Wrap:t,text:"Stats"}),Object(Y.jsx)(qe,{to:"/settings",Wrap:t,text:"Settings"}),Object(Y.jsx)(qe,{to:"/upload",Wrap:t,text:"Upload"}),Object(Y.jsx)(qe,{to:"/logs",Wrap:t,text:"Logs"})]}),Object(Y.jsx)(Ue,{rooli:"admin",children:Object(Y.jsx)(qe,{to:"/admin",Wrap:t,text:"Admin"})})]})},qe=function(e){var t=e.to,a=e.text,n=e.Wrap;return n?Object(Y.jsx)(n,{children:Object(Y.jsx)(k.c,{className:"navilinkki",to:t,children:a})}):Object(Y.jsx)(k.c,{className:"navilinkki",to:t,children:a})};qe.defaultProps={Wrap:null},Ee.defaultProps={Wrap:null};var He=Ee,Le=function(){var e=Object(x.useState)(null),t=Object(D.a)(e,2),a=t[0],n=t[1],r=Boolean(a);return Object(Y.jsx)($e.a,{position:"sticky",sx:{minHeight:{md:"100px"}},style:{justifyContent:"center"},children:Object(Y.jsxs)(Te.a,{children:[Object(Y.jsxs)(Fe.a,{sx:{display:{xs:"inline",md:"none"}},children:[Object(Y.jsx)(Ae.a,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:function(e){return n(e.currentTarget)},children:Object(Y.jsx)(Ve.a,{fontSize:"large"})}),Object(Y.jsx)(Pe.a,{open:r,anchorEl:a,onClose:function(){return n(null)},children:Object(Y.jsx)(He,{Wrap:De.a})})]}),Object(Y.jsx)(Fe.a,{style:{flexGrow:1},children:Object(Y.jsx)(C.a,{variant:"h3",component:"span",children:"Risbeegomfkerho"})}),Object(Y.jsx)(Fe.a,{sx:{display:{xs:"none",md:"inline"}},children:Object(Y.jsx)(He,{})})]})})},Re=a(592),We=a(620),Qe=a(621),Ke=a(622),Je=a(604),Ge=a(217),_e=a.n(Ge),Xe=a(597),Ye=function(e,t){var a=t-e;return a>5?"red":a<=0?"green":"orange"},Ze=function(e){return e>=0?"+".concat(e):e},et=Object(Xe.a)({latest:{color:function(e){var t=e.par,a=e.latest;return Ye(t,a)}},best:{color:function(e){var t=e.par,a=e.best;return Ye(t,a)}},avg:{color:function(e){var t=e.par,a=e.avg;return Ye(t,a)}}}),tt=function(e){var t=e.data,a=et({par:t.par,latest:t.latest,best:t.min,avg:t.avg}),n=Object(x.useState)(!1),r=Object(D.a)(n,2),s=r[0],i=r[1];return Object(Y.jsxs)(We.a,{style:{marginBottom:"15px"},children:[Object(Y.jsx)(Qe.a,{title:t.rata,subheader:t.layout,action:Object(Y.jsx)(Ae.a,{onClick:function(){return i(!s)},children:Object(Y.jsx)(_e.a,{fontSize:"large"})})}),Object(Y.jsxs)(Ke.a,{children:[Object(Y.jsx)(xe.a,{children:Object(Y.jsxs)(pe.a,{className:"stats-table",children:[Object(Y.jsx)(me.a,{children:Object(Y.jsxs)(ve.a,{children:[Object(Y.jsx)(fe.a,{children:"Radan par"}),Object(Y.jsx)(fe.a,{children:"Pelattuja pelej\xe4"}),Object(Y.jsx)(fe.a,{children:"KA"}),Object(Y.jsx)(fe.a,{children:"Paras"}),Object(Y.jsx)(fe.a,{children:"HC"})]})}),Object(Y.jsx)(ge.a,{children:Object(Y.jsxs)(ve.a,{children:[Object(Y.jsx)(fe.a,{children:t.par}),Object(Y.jsx)(fe.a,{children:t.games}),Object(Y.jsx)(fe.a,{className:a.avg,children:Ze(Math.round(10*(t.avg-t.par))/10)}),Object(Y.jsx)(fe.a,{className:a.best,children:Ze(t.min-t.par)}),Object(Y.jsx)(fe.a,{children:t.hc})]})})]})}),Object(Y.jsxs)(Je.a,{in:s,mountOnEnter:!1,children:[Object(Y.jsx)(C.a,{variant:"h5",children:"10 viimeisint\xe4 kierrosta"}),t.tenLatestRounds.map((function(e,a){var n="".concat(t.rata).concat(t.layout).concat(a);return Object(Y.jsx)("span",{className:"largeFont",style:{marginRight:"5%"},children:e-t.par},n)}))]})]})]})},at=function(){var e=Object(z.a)(G),t=Object(x.useState)(""),a=Object(D.a)(t,2),n=a[0],r=a[1];return e.loading?Object(Y.jsx)(we,{}):e.data?Object(Y.jsxs)("div",{className:"wideContainer wideContainerTop wideContainerSmallPadding",children:[Object(Y.jsx)(C.a,{variant:"h2",children:"Ratadataa"}),e.data.getCourseStats.length>0?Object(Y.jsx)("p",{children:"\xa0"}):Object(Y.jsxs)(C.a,{paragraph:!0,children:["Ei n\xe4ytett\xe4v\xe4\xe4 dataa!? Tarkista, ett\xe4 olet lis\xe4nnyt\xa0",Object(Y.jsx)(k.b,{to:"/settings/#alias",children:"aliaksia"})]}),Object(Y.jsxs)(ae.a,{container:!0,spacing:5,alignItems:"center",children:[Object(Y.jsx)(ae.a,{item:!0,children:"Suodata"}),Object(Y.jsx)(ae.a,{item:!0,children:Object(Y.jsx)(se.a,{label:"Radan nimi",value:n,onChange:function(e){return r(e.target.value)}})})]}),Object(Y.jsx)(Re.a,{}),e.data.getCourseStats.filter((function(e){return e.rata.includes(n)})).map((function(e){return Object(Y.jsx)(tt,{data:e},e.rata+e.layout)}))]}):Object(Y.jsx)("div",{className:"div-error",children:"Ei dataa, olethan kirjautunut?"})},nt=function(){var e=Object(V.a)(q),t=Object(D.a)(e,1)[0],a=Object(g.b)().enqueueSnackbar;return Object(Y.jsxs)(Oe.a,{children:[Object(Y.jsx)(C.a,{variant:"h2",children:"CSV-tiedoston l\xe4hetys"}),Object(Y.jsx)(C.a,{paragraph:!0,children:"Valitse UDiscist\xe4 saatava csv-tiedosto ja paina l\xe4het\xe4-nappia"}),Object(Y.jsxs)(C.a,{paragraph:!0,children:["Kun tiedosto on l\xe4hetetty, parsii palvelin sit\xe4 kasaan ja tunkee sen sittne tietokantaan. Etenemist\xe4 voi seurata\xa0",Object(Y.jsx)(k.b,{to:"/logs",children:"kapteenin lokista"}),"."]}),Object(Y.jsxs)("form",{encType:"multipart/form-data",onSubmit:function(e){e.preventDefault(),t({variables:{file:e.target.tiedosto.files[0]}}).then((function(){a("Tiedosto l\xe4hetetty!",{variant:"info"})})).catch((function(){a("Jokin meni vikaan :(",{variant:"error"})})),e.target.tiedosto.value=null},children:[Object(Y.jsx)("input",{type:"file",name:"tiedosto",id:"raised-button-file",accept:".csv",style:{fontSize:"1.2rem"}}),Object(Y.jsx)(C.a,{children:Object(Y.jsx)(ne.a,{variant:"contained",type:"submit",children:"L\xe4het\xe4 nappi"})})]})]})},rt=a(218),st=a.n(rt),it=function(e){var t=Object(x.useState)([]),a=Object(D.a)(t,2),n=a[0],r=a[1],s=Object(V.a)(W,{refetchQueries:[_,{variables:{userId:e}}]}),i=Object(D.a)(s,1)[0],c=Object(V.a)(Q,{refetchQueries:[_,{variables:{userId:e}}]}),l=Object(D.a)(c,1)[0],j=Object(z.a)(_,{variables:{userId:e}});Object(x.useEffect)((function(){!j.loading&&j&&j.data&&r(j.data.getAliases)}),[j.data]);var o=function(){var t=Object(P.a)(A.a.mark((function t(a,n){var r;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i({variables:{alias:a,userId:e}});case 2:r=t.sent,n(r.data.addAlias);case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),u=function(){var e=Object(P.a)(A.a.mark((function e(t,a){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({variables:{aliasId:t}});case 2:n=e.sent,a(n.data.deleteAlias);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return{aliakset:n,addAlias:o,deleteAlias:u}},ct=function(e){var t=e.userId,a=it(t),n=a.aliakset,r=a.addAlias,s=a.deleteAlias,i=Object(g.b)().enqueueSnackbar,c=function(){var e=Object(P.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,r(t.target.alias.value,(function(){i("Alias lis\xe4tty!",{variant:"success"})}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),i("Aliasta ei lis\xe4tty (".concat(e.t0.message,")"),{variant:"error"});case 9:t.target.alias.value="";case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(P.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(+t,(function(e){!0===e?i("Alias poistettu!",{variant:"success"}):i("Aliasta ei poistettu :P",{variant:"warning"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n?Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h2",{children:"Aliaksesi"}),Object(Y.jsx)(ae.a,{container:!0,alignItems:"center",width:"600px",children:n.map((function(e){return Object(Y.jsx)(lt,{alias:e,del:l},e.id)}))}),Object(Y.jsx)("h3",{children:"Lis\xe4\xe4 alias"}),Object(Y.jsxs)("form",{onSubmit:c,children:[Object(Y.jsx)(se.a,{name:"alias",placeholder:"Lis\xe4\xe4 alias",size:"small"}),"\xa0",Object(Y.jsx)(ne.a,{type:"submit",variant:"contained",children:"Lis\xe4\xe4"})]})]}):Object(Y.jsx)("div",{children:"Loading..."})},lt=function(e){var t=e.alias,a=e.del;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(ae.a,{item:!0,xs:4,children:t.alias}),Object(Y.jsx)(ae.a,{item:!0,xs:8,children:Object(Y.jsx)(Ae.a,{onClick:function(){return a(t.id)},children:Object(Y.jsx)(st.a,{color:"error"})})})]})};ct.defaultProps={userId:null};var jt,ot,ut,dt,bt=ct,ht=a(8),Ot=a(57),xt=Object(B.d)(jt||(jt=Object(N.a)(["\nquery {\n  getCompetitions {\n    game\n    paivays\n    name\n    layout\n    playerName\n    total\n    hc\n    par\n  }\n}\n"]))),pt=Object(B.d)(ot||(ot=Object(N.a)(["\nquery {\n  getUsers (active: false) {\n    id\n    name\n    email\n  }\n}\n"]))),mt=Object(B.d)(ut||(ut=Object(N.a)(["\nquery {\n  getSetup {\n    ignoreHcBefore\n    ignoreMatchBefore\n    minPlayersForHc\n    minPlayersForMatch\n  }\n}\n"]))),vt=Object(B.d)(dt||(dt=Object(N.a)(["\nquery ($id: Int, $name: String) {\n  getUser(id: $id, name: $name) {\n    id\n    name\n    email\n    rooli\n  }\n}\n"]))),ft=function(){var e=Object(x.useState)({}),t=Object(D.a)(e,2),a=t[0],n=t[1],r=Object(z.a)(mt),s=Object(V.a)(E),i=Object(D.a)(s,1)[0];Object(x.useEffect)((function(){r&&!r.loading&&n(r.data.getSetup)}),[r]);return{setup:a,setSetup:n,saveSetup:function(){return i({variables:a})}}},gt=function(){var e=ft(),t=e.setup,a=e.setSetup,n=e.saveSetup,r=Object(g.b)().enqueueSnackbar,s=function(e){var n=e.target.value;"number"===typeof t[e.target.name]&&(n=+n),a(Object(Ot.a)(Object(Ot.a)({},t),{},Object(ht.a)({},e.target.name,n)))};return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(C.a,{variant:"h4",children:"Kisa-asetukset"}),Object(Y.jsxs)(ae.a,{container:!0,spacing:2,children:[Object.keys(t).map((function(e){return e.startsWith("__")?"":Object(Y.jsx)(ae.a,{item:!0,xs:12,md:6,children:Object(Y.jsx)(se.a,{name:e,value:t[e],label:e,onChange:s,style:{width:"80%"}})},e)})),Object(Y.jsx)(ae.a,{item:!0,xs:12,children:Object(Y.jsx)(ne.a,{type:"submit",onClick:function(){n().then((function(){r("Asetukset tallennettiin onnistuneesti",{variant:"success"})})).catch((function(){r("Virhe asetuksia tallennettaessa",{variant:"error"})}))},children:"Tallenna"})})]})]})},kt=function(){var e=X(!0),t=e.me,a=e.update,n=Object(g.b)().enqueueSnackbar;return t?Object(Y.jsxs)(Oe.a,{children:[Object(Y.jsx)(C.a,{variant:"h3",gutterBottom:!0,children:"Asetukset"}),Object(Y.jsxs)(ae.a,{container:!0,spacing:2,justifyContent:"flex-start",alignItems:"center",sx:{width:{xs:"100%",md:"50%"}},children:[Object(Y.jsx)(ae.a,{item:!0,xs:6,children:"Tunnus"}),Object(Y.jsx)(ae.a,{item:!0,xs:6,children:t.name}),Object(Y.jsx)(ae.a,{item:!0,xs:6,children:"S\xe4hk\xf6posti"}),Object(Y.jsx)(ae.a,{item:!0,xs:6,children:t.email||"Ei asetettu"})]}),Object(Y.jsx)(Re.a,{}),Object(Y.jsx)(C.a,{variant:"h4",gutterBottom:!0,children:"Vaihda email"}),Object(Y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a({email:e.target.email.value}).then((function(){n("S\xe4hk\xf6posti vaihdettu!",{variant:"success"})})).catch((function(e){n("Virhe s\xe4hk\xf6postia vaihtaessa! (".concat(e,")"),{variant:"error"})})),e.target.email.value=""},children:[Object(Y.jsx)(se.a,{name:"email",label:"Uusi s\xe4hk\xf6postiosoite"}),"\xa0",Object(Y.jsx)(ne.a,{variant:"contained",type:"submit",children:"Vaihda"})]}),Object(Y.jsx)(Re.a,{}),Object(Y.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target,r=t.salasana1,s=t.salasana2;r.value!==s.value?n("Salasanat eiv\xe4t t\xe4sm\xe4\xe4!",{variant:"error"}):a({password:r.value}).then((function(){n("Salasana vaihdettu",{variant:"info"})})).catch((function(){n("Virhe salasanaa vaihtaessa!",{variant:"error"})})),r.value="",s.value=""},children:[Object(Y.jsx)(C.a,{variant:"h4",gutterBottom:!0,children:"Vaihda salasana"}),Object(Y.jsxs)(ae.a,{container:!0,spacing:2,children:[Object(Y.jsx)(ae.a,{item:!0,xs:12,children:Object(Y.jsx)(se.a,{name:"salasana1",type:"password",label:"Uusi salasana"})}),Object(Y.jsx)(ae.a,{item:!0,xs:12,children:Object(Y.jsx)(se.a,{name:"salasana2",type:"password",label:"Vahvista salasana"})}),Object(Y.jsx)(ae.a,{item:!0,xs:12,children:Object(Y.jsx)(ne.a,{type:"submit",variant:"contained",children:"Vaihda"})})]})]}),Object(Y.jsx)(Re.a,{}),Object(Y.jsx)(C.a,{variant:"h4",gutterBottom:!0,children:"Aliakset"}),Object(Y.jsx)(C.a,{paragraph:!0,children:"Aliakset yhdist\xe4v\xe4t csv-tiedostossa olevat pelaajat tunnuksiin."}),Object(Y.jsx)(bt,{}),Object(Y.jsx)(Re.a,{}),Object(Y.jsx)(Ue,{rooli:"admin",children:Object(Y.jsx)(gt,{})})]}):Object(Y.jsx)(we,{})};var yt=function(){var e=Object(z.a)(xt),t=Object(x.useState)(null),a=Object(D.a)(t,2),n=a[0],r=a[1];return Object(x.useEffect)((function(){if(e&&!e.loading){var t=e.data.getCompetitions;t=(t=function(e){return e.reduce((function(e,t){var a=e.find((function(e){return e.gameId===t.game}));return a||(a={gameId:t.game,date:new Date(+t.paivays).toLocaleString(),course:{name:t.name,layout:t.layout,par:t.par},players:[]},e.push(a)),a.players.push({name:t.playerName,total:t.total,plusminus:t.total-t.par,hc:t.hc,hcTotal:t.total-t.hc,hcPlusminus:t.total-t.hc-t.par}),e}),[])}(t)).map((function(e){return function(e){var t=e.players;t.sort((function(e,t){return e.hcTotal-t.hcTotal}));var a=1,n=t.map((function(e,n){return 0===n?Object(Ot.a)(Object(Ot.a)({},e),{},{rank:1,points:5}):(e.hcTotal>t[n-1].hcTotal&&(a+=1),Object(Ot.a)(Object(Ot.a)({},e),{},{rank:a,points:a<=5?6-a:0}))}));return Object(Ot.a)(Object(Ot.a)({},e),{},{players:n})}(e)})),r(t)}}),[e]),n},wt=function(e){var t=e.competition,a=t.course,n=t.date,r=t.players,s=t.gameId;return Object(Y.jsxs)(We.a,{style:{marginBottom:"20px"},children:[Object(Y.jsx)(Qe.a,{title:a.name,subheader:"".concat(n," @ ").concat(a.layout)}),Object(Y.jsx)(Ke.a,{children:Object(Y.jsx)(xe.a,{children:Object(Y.jsxs)(pe.a,{className:"kisataulu",children:[Object(Y.jsx)(me.a,{children:Object(Y.jsxs)(ve.a,{children:[Object(Y.jsx)(fe.a,{children:"Rank"}),Object(Y.jsx)(fe.a,{children:"Nimi"}),Object(Y.jsx)(fe.a,{children:"Total"}),Object(Y.jsx)(fe.a,{children:"+/-"}),Object(Y.jsx)(fe.a,{children:"HC"}),Object(Y.jsx)(fe.a,{children:"HC +/-"}),Object(Y.jsx)(fe.a,{children:"HC total"}),Object(Y.jsx)(fe.a,{children:"Points"})]})}),Object(Y.jsx)(ge.a,{children:r.map((function(e){return Object(Y.jsxs)(ve.a,{children:[Object(Y.jsx)(fe.a,{children:e.rank}),Object(Y.jsx)(fe.a,{children:e.name}),Object(Y.jsx)(fe.a,{children:e.total}),Object(Y.jsx)(fe.a,{children:e.plusminus}),Object(Y.jsx)(fe.a,{children:e.hc}),Object(Y.jsx)(fe.a,{children:e.hcPlusminus}),Object(Y.jsx)(fe.a,{children:e.hcTotal}),Object(Y.jsx)(fe.a,{children:e.points})]},s+e.name)}))})]})})})]})},St=function(){var e=yt();return e?Object(Y.jsxs)(Oe.a,{children:[Object(Y.jsx)(C.a,{variant:"h3",children:"Kilpailut"}),e.length<1&&Object(Y.jsx)(C.a,{paragraph:!0,children:"Ei yht\xe4\xe4n kilpailua? Erotkaa ryhm\xe4st\xe4 v\xe4litt\xf6m\xe4sti!"}),e.map((function(e){return Object(Y.jsx)(wt,{competition:e},e.gameId)}))]}):Object(Y.jsx)(we,{})},It=a(593),Ct=function(){var e,t=Object(x.useState)([]),a=Object(D.a)(t,2),n=a[0],r=a[1],s=Object(z.a)(pt),i=Object(V.a)(U,{refetchQueries:[pt]}),c=Object(D.a)(i,1)[0],l=Object(V.a)(L,{refetchQueries:[pt]}),j=Object(D.a)(l,1)[0],o=Object(g.b)().enqueueSnackbar;Object(x.useEffect)((function(){(null===s||void 0===s?void 0:s.data)&&!s.loading&&r(s.data.getUsers)}));var u=function(){var e=Object(P.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c({variables:{userId:t}});case 3:o("Tunnus ".concat(t," aktivoitu!"),{variant:"success"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),o("Tunnusta ".concat(t," ei aktivoitu (").concat(e.t0.message,")"),{variant:"error"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(P.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j({variables:{userId:t}});case 3:o("Tunnus ".concat(t," poistettu!"),{variant:"warning"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),o("Virhe tunnuksen positamisessa: ".concat(e.t0),{variant:"error"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return(null===(e=s.data)||void 0===e?void 0:e.getUsers)?s.error?Object(Y.jsxs)(Y.Fragment,{children:["Error:",s.error.message]}):0===n.length?Object(Y.jsx)(Y.Fragment,{children:"Ei aktivoitavia tunnuksia"}):Object(Y.jsx)(ae.a,{container:!0,sx:{width:{md:"50%",xs:"100%"}},alignItems:"center",spacing:3,children:n.map((function(e){return Object(Y.jsxs)(p.a.Fragment,{children:[Object(Y.jsx)(ae.a,{item:!0,xs:6,children:e.name}),Object(Y.jsxs)(ae.a,{item:!0,xs:6,children:[Object(Y.jsx)(ne.a,{onClick:function(){return u(e.id)},children:"Aktivoi"}),"\xa0",Object(Y.jsx)(ne.a,{onClick:function(){return d(e.id)},children:"Poista"})]})]},e.id)}))}):Object(Y.jsx)(ye.a,{})},$t=function(e){var t=e.user,a=Object(V.a)(M,{refetchQueries:[vt,{variables:{userId:t.id}}]}),n=Object(D.a)(a,1)[0],r=function(){var e=Object(P.a)(A.a.mark((function e(a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,n({variables:{email:a.target.email.value,rooli:a.target.rooli.value,userId:t.id}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(Y.jsx)("form",{onSubmit:r,children:Object(Y.jsxs)(ae.a,{container:!0,spacing:1,alignItems:"center",children:[Object(Y.jsx)(ae.a,{item:!0,xs:6,children:"Id"}),Object(Y.jsx)(ae.a,{item:!0,xs:6,children:t.id}),Object(Y.jsx)(ae.a,{item:!0,xs:6,children:"Tunnus"}),Object(Y.jsx)(ae.a,{item:!0,xs:6,children:t.name}),Object(Y.jsx)(ae.a,{item:!0,xs:6,children:"Email"}),Object(Y.jsx)(ae.a,{item:!0,xs:6,children:Object(Y.jsx)(se.a,{name:"email",defaultValue:t.email})}),Object(Y.jsx)(ae.a,{item:!0,xs:6,children:"Rooli"}),Object(Y.jsx)(ae.a,{item:!0,xs:6,children:Object(Y.jsx)(se.a,{name:"rooli",defaultValue:t.rooli})}),Object(Y.jsx)(ae.a,{item:!0,xs:6,children:Object(Y.jsx)(ne.a,{type:"submit",children:"Tallenna"})})]})})},Tt=function(){var e=Object(It.a)(vt),t=Object(D.a)(e,2),a=t[0],n=t[1].data;return console.log(n),Object(Y.jsxs)("div",{className:"wideContainer",children:[Object(Y.jsx)(C.a,{variant:"h1",children:"Admin"}),Object(Y.jsx)(C.a,{paragraph:!0,children:"By your command"}),Object(Y.jsx)(C.a,{variant:"h3",children:"Aktivoi tunnuksia"}),Object(Y.jsx)(Ct,{}),Object(Y.jsx)(Re.a,{}),Object(Y.jsx)(C.a,{variant:"h3",children:"Muokkaa tunnusta"}),Object(Y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a({variables:{name:e.target.tunnus.value}})},style:{marginBottom:"20px"},children:[Object(Y.jsx)(se.a,{name:"tunnus",label:"Anna tunnus"}),Object(Y.jsx)(ne.a,{type:"submit",children:"Hae"})]}),(null===n||void 0===n?void 0:n.getUser)&&Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)($t,{user:n.getUser}),Object(Y.jsx)(Re.a,{}),Object(Y.jsxs)(C.a,{variant:"h3",children:["K\xe4ytt\xe4j\xe4n\xa0",n.getUser.name,"\xa0aliakset"]}),Object(Y.jsx)(bt,{userId:n.getUser.id})]})]})};var Ft=function(){return Object(Y.jsxs)(te,{children:[Object(Y.jsx)(Le,{}),Object(Y.jsxs)(w.c,{children:[Object(Y.jsx)(w.a,{path:"/",element:Object(Y.jsx)(he,{})}),Object(Y.jsx)(w.a,{path:"/competitions",element:Object(Y.jsx)(St,{})}),Object(Y.jsx)(w.a,{path:"/stats",element:Object(Y.jsx)(at,{})}),Object(Y.jsx)(w.a,{path:"/upload",element:Object(Y.jsx)(nt,{})}),Object(Y.jsx)(w.a,{path:"/settings",element:Object(Y.jsx)(kt,{})}),Object(Y.jsx)(w.a,{path:"/logs",element:Object(Y.jsx)(Ce,{})}),Object(Y.jsx)(w.a,{path:"/admin",element:Object(Y.jsx)(Tt,{})})]}),Object(Y.jsx)(I.a,{options:{particles:{color:{value:"#5f5f5f"},size:{random:!0,value:3},move:{enable:!0},zIndex:1e4},interactivity:{events:{onHover:{enable:!0,mode:"repulse"}}}}})]})},At=a(165),Pt=a(599),Dt=a(594),zt=a.n(Dt),Vt=a(219),Nt=Object(Vt.a)((function(e,t){var a=t.headers,n=window.sessionStorage.getItem("suklaaJuna");return{headers:Object(Ot.a)(Object(Ot.a)({},a),{},{authorization:n})}})),Bt=new At.a({cache:new Pt.a,link:Nt.concat(zt()({uri:"https://risbeegomfkerho-env.eba-bw33rqyj.us-east-2.elasticbeanstalk.com/graphql"}))}),Mt=a(222),Ut="@media screen and (min-width: 900px)",Et=Object(Mt.a)({typography:{fontFamily:"Quicksand"},palette:{mode:"dark",primary:{main:"#34568B"}},components:{MuiCard:{styleOverrides:{root:{borderRadius:"15px",paddingLeft:"10px"}}},MuiCardHeader:{styleOverrides:{title:Object(ht.a)({},Ut,{fontSize:"1.7vw",margin:"0px"}),subheader:{margin:"0px"}}},MuiGrid:{styleOverrides:{root:Object(ht.a)({},Ut,{fontSize:"1.2rem"})}},MuiTextField:{styleOverrides:{root:{width:"300px",fontSize:"large"}},defaultProps:{color:"info"}},MuiTypography:{styleOverrides:{root:{margin:"10px 0px"},paragraph:Object(ht.a)({margin:"4rem 0px",fontSize:"1.2em"},Ut,{fontSize:"1.2vw"}),h1:Object(ht.a)({fontSize:"2.5rem"},Ut,{fontSize:"4vw"}),h2:Object(ht.a)({fontSize:"2.3rem"},Ut,{fontSize:"3vw"}),h3:Object(ht.a)({fontSize:"1.6rem"},Ut,{fontSize:"2vw"})}},MuiButton:{defaultProps:{variant:"contained"}},MuiDivider:{styleOverrides:{root:{margin:"20px 0px"}}},MuiTableCell:{styleOverrides:{root:Object(ht.a)({fontSize:".6em"},Ut,{fontSize:"1.2em"})}}}});v.a.render(Object(Y.jsx)(f.a,{client:Bt,children:Object(Y.jsx)(g.a,{maxSnack:5,children:Object(Y.jsx)(y.a,{theme:Et,children:Object(Y.jsx)(k.a,{children:Object(Y.jsx)(Ft,{})})})})}),document.getElementById("root"))}},[[532,1,2]]]);
//# sourceMappingURL=main.ec7ed35c.chunk.js.map
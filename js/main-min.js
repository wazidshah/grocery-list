dataList=[{Timestamp:"28/03/2020 18:48:17",type:["bakery items","grocery"],whatsapp:"no",shopName:"Central bakery - pramila Mapari",anyImage:"",phone:["9665353906"],location:"Honda tisk, honda panchayat",field8:""},{Timestamp:"28/03/2020 18:16:24",type:["coconuts","grocery"],whatsapp:"no",shopName:"Lokesh velingkar/lic.no 9346 A",anyImage:"",phone:["9373362223"],location:"Valpoi municipal area, thane, mauxi, nagargao panchayat area",field8:""},{Timestamp:"27/03/2020 23:45:59",type:["Commodity Delivery Service","grocery"],whatsapp:"no",shopName:"Aldona Constituency Commodity Delivery Service",anyImage:"",phone:["9822126125","7720089913","9657556666"],location:"Aldona",field8:""},{Timestamp:"27/03/2020 23:34:14",type:["fish","vegetables"],whatsapp:"no",shopName:"Atmaram Gadekar",anyImage:"",phone:["8999588064"],location:"Verla Canca",field8:""},{Timestamp:"28/03/2020 17:23:56",type:["food for needy"],whatsapp:"yes",shopName:"Pradosh Amoncar",anyImage:"",phone:["9823498179"],location:"Bicholim",field8:""},{Timestamp:"28/03/2020 17:23:57",type:["food for needy"],whatsapp:"yes",shopName:"Nikhil Dixit",anyImage:"",phone:["9822981325"],location:"Bicholim",field8:""}];const sheetsUrl="https://docs.google.com/spreadsheets/d/e/2PACX-1vTTUD7zK1YRnkzoaVoD33VGMUywCaFhS9gRZXa2_SAEb5PnIne7YWxWqy8k1vYvdc5ocT75_KleDmSX/pub?gid=0&single=true&output=csv",cacheKey="v2-"+sheetsUrl;function parseSheetCSV(e){return e.map(e=>(e.phone=e.phone.split("/").map(e=>e.trim()),e.type=e.type.split("/").map(e=>e.trim()),e))}function initialData(){const e=localStorage.getItem(cacheKey);return e?{contactList:parseSheetCSV(JSON.parse(e)),isLoading:!1}:{contactList:[],isLoading:!0}}const list=new Vue({el:"#contact-list",data:initialData(),created(){},mounted(){d3.csv(sheetsUrl).then((function(e){localStorage.setItem(cacheKey,JSON.stringify(e)),list.contactList=parseSheetCSV(e),list.isLoading=!1})),document.getElementById("areas").addEventListener("change",(function(e){const t=document.querySelector("input[name='type']:checked").value;let a=[...dataList],n="";n="all"!=t?a.filter((function(e){return!!e.type.includes(t)})):[...dataList];var o=new Fuse(n,{useExtendedSearch:!0,threshold:0,location:0,distance:100,minMatchCharLength:1,keys:["type","location"]}).search(`'${areas.value}`).map((function(e){return e.item}));list.contactList=[...o]})),document.querySelectorAll("input[name='type']").forEach((function(e){e.addEventListener("click",(function(e){let t=e.target.value,a={useExtendedSearch:!0,threshold:0,location:0,distance:100,minMatchCharLength:1,keys:["type","location"]};if(e.target.checked){let e=[...dataList],o="";o="all"!=t?e.filter((function(e){return!!e.type.includes(t)})):[...dataList];var n=new Fuse(o,a).search(`'${areas.value}`).map((function(e){return e.item}));list.contactList=[...n]}}))}))},updated(){document.getElementById("feedback-modal");const e=document.querySelectorAll("[data-link]");let t=document.querySelector("#feedback-modal iframe");for(var a=0;a<e.length;a++)e[a].addEventListener("click",(function(e){e.preventDefault(),console.log(e.target),t.setAttribute("src",e.target.dataset.link)}))}}),grocery=document.getElementById("grocery"),medical=document.getElementById("medical");
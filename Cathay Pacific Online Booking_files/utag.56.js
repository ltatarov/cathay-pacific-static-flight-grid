//tealium universal tag - utag.56 ut4.0.201604071206, Copyright 2016 Tealium.com Inc. All Rights Reserved.
if(!this.JSON){JSON={};}
(function(){function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z';};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}if(typeof rep==='function'){value=rep.call(holder,key,value);}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value});};}})();try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'all':1};u.server="//datacloud.tealiumiq.com/cathaypacific/main/2/i.gif";u.data_enrichment="frequent";u.enrichment_polling=1;var q=u.server.indexOf("?");if(q>0&&(q+1)==u.server.length){u.server=u.server.replace("?","");}
u.map={};u.extend=[function(a,b){try{if(typeof b['cp._ga']!='undefined'){try{b['google_visitorid']=b["cp._ga"].split(".").splice(2,2).join(".")}catch(e){}}}catch(e){utag.DB(e)}}];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev["all"]!="undefined"){u.make_enrichment_request=false;for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};if(u.server){u.data=utag.datacloud||{};for(d in utag.loader.cfg){if(utag.loader.cfg[d].load&&utag.loader.cfg[d].send){utag.loader.cfg[d].executed=1;}else{utag.loader.cfg[d].executed=0;}}
u.data["loader.cfg"]=utag.loader.cfg;u.data.data=b;for(d in u.data.data){if((d+'').indexOf("qp.")==0){u.data.data[d]=encodeURIComponent(u.data.data[d]);}else if((d+'').indexOf("va.")==0){delete u.data.data[d]}}
if(!b["cp.utag_main_dc_event"]){b["cp.utag_main_dc_visit"]=(1+(b["cp.utag_main_dc_visit"]?parseInt(b["cp.utag_main_dc_visit"]):0))+'';}
b["cp.utag_main_dc_event"]=(1+(b["cp.utag_main_dc_event"]?parseInt(b["cp.utag_main_dc_event"]):0))+'';utag.loader.SC("utag_main",{"dc_visit":b["cp.utag_main_dc_visit"],"dc_event":b["cp.utag_main_dc_event"]+";exp-session"});var dt=new Date();u.data.browser={};try{u.data.browser["height"]=window.innerHeight||document.body.clientHeight;u.data.browser["width"]=window.innerWidth||document.body.clientWidth;u.data.browser["screen_height"]=screen.height;u.data.browser["screen_width"]=screen.width;u.data.browser["timezone_offset"]=dt.getTimezoneOffset();}catch(e){utag.DB(e)}
u.data["event"]=a+'';u.data["post_time"]=dt.getTime();if(u.data_enrichment=="frequent"||u.data_enrichment=="infrequent"){u.visit_num=b["cp.utag_main_dc_visit"];try{u.va_update=parseInt(localStorage.getItem("tealium_va_update")||0);}catch(e){utag.DB(e)}
u.visitor_id=u.visitor_id||b["cp.utag_main_v_id"];if((u.data_enrichment=="frequent"&&!(u.visit_num=="1"&&b["cp.utag_main_dc_event"]=="1"))||(u.data_enrichment=="infrequent"&&parseInt(u.visit_num)>1&&parseInt(b["cp.utag_main_dc_event"])<=5&&u.visit_num!=u.va_update)){u.make_enrichment_request=true;}else if(b._corder){u.make_enrichment_request=true;u.enrichment_polling=3;}
u.visitor_service_request=function(t){var p=u.server.substring(u.server.indexOf("tealiumiq.com")).split("/");utag.ut.loader({id:"tealium_visitor_service_56",src:"//visitor-service.tealiumiq.com/"+p[1]+"/"+p[2]+"/"+u.visitor_id+"?callback=utag.ut.writeva&rnd="+t});}
utag.ut.writeva=function(o){try{var s=JSON.stringify(o);if(s!="{}"&&s!=""){localStorage.setItem('tealium_va_update',utag.data["cp.utag_main_dc_visit"]);localStorage.setItem('tealium_va',s);}}catch(e){utag.DB(e)}}
if(typeof utag.ut.loader!="undefined"&&u.make_enrichment_request){for(var i=0;i<u.enrichment_polling;i++){setTimeout(function(){u.visitor_service_request((new Date).getTime())},i*10000+1);}}}
var json_string=JSON.stringify(u.data);if(window.FormData){var formData=new FormData();formData.append("data",json_string);var xhr=new XMLHttpRequest();xhr.open('post',u.server,true);xhr.withCredentials=true;xhr.send(formData);}else{u.img=new Image();u.img.src=u.server+'?data='+encodeURIComponent(json_string);}}}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('56','cathaypacific.main');}catch(e){}
/*/home/entreprise/rails/SiteEditor/releases/20260520100806/public/assets/precompile/fr-viewer_all_sections-a49853aec4d72ea488ae98c0b12a8b22.js translated on 20 mai 2026 12h 11min 33s*/
function str_repeat(e,t){for(var i=[];t>0;i[--t]=e);
return i.join('')}function sprintf(){
for(var e=0,t,i=arguments[e++],o=[],n,s,r,a;i;){
if(n=/^[^\x25]+/.exec(i))o.push(n[0]);else if(n=/^\x25{2}/.exec(i))o.push('%');else{
if(!(n=/^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(i)))throw"In sprintf, unknow error string="+arguments[0]
;if(null==(t=arguments[n[1]||e++])||t==undefined)throw"In sprintf, Too few arguments. (string="+arguments[0]
;if(/[^s]/.test(n[7])&&'number'!=typeof t)throw"In sprintf, Expecting number but found "+typeof t+" (string="+arguments[0]
;switch(n[7]){case'b':t=t.toString(2);break;case'c':
t=String.fromCharCode(t);break;case'd':t=parseInt(t);break
;case'e':t=n[6]?t.toExponential(n[6]):t.toExponential();break
;case'f':t=n[6]?parseFloat(t).toFixed(n[6]):parseFloat(t);break
;case'o':t=t.toString(8);break;case's':
t=(t=String(t))&&n[6]?t.substring(0,n[6]):t;break;case'u':
t=Math.abs(t);break;case'x':t=t.toString(16);break;case'X':
t=t.toString(16).toUpperCase()}
t=/[def]/.test(n[7])&&n[2]&&t>0?'+'+t:t
;r=n[3]?'0'==n[3]?'0':n[3].charAt(1):' ';a=n[5]-String(t).length
;s=n[5]?str_repeat(r,a):'';o.push(n[4]?t+s:s+t)}
i=i.substring(n[0].length)}return o.join('')}
function checkCompatibility(e){
var t=[],i=window.devicePixelRatio||1,o=Math.max(screen.width,screen.height),n=Math.min(screen.width,screen.height)
;!e&&(o*i<1024||n*i<700)?t.push({name:"screen",
detected_screen_size:o*i+"x"+n*i}):!e&&(o<1024||n<700)&&t.push({
name:"screen_scaling",detected_page_size:o+"x"+n,
detected_scale:100*i});var s=1e3;try{
s=parseInt(navigator.userAgent.match(/Safari\/(\d\d\d)/)[1])
}catch(r){}
(!Modernizr.cssanimations||navigator.userAgent.match(/MSIE 10\.0\;/)||navigator.userAgent.match(/Trident\/7\.0\; rv\:11\.\;/)||s<536||window.MSInputMethodContext&&document.documentMode)&&t.push({
name:"browser"});return t}function ssl_url(e){
return"https://rb-no-cdn.cdnsw.com"+e}function cdn_url(e){
if(!e)return"";USE_CDN||(cdn_down=!0);var t=0,i=0
;if("undefined"!=typeof cdn_down&&1==cdn_down){t=1;i=1}
"undefined"!=typeof v&&v&&"editor"==v.mode&&(t=2)
;if(e.match(/^\/((images)|(assets))\//))return cdn_static_paths[i][0]+e
;if(e.match(/^\//)){
for(var o=0,n=0;n<e.length-4;n++)o+=e.charCodeAt(n);var e
;if((e=cdn_paths[t][o%cdn_paths[t].length]+e).match(/\?s\=/)){
e=e.replace("v-assets","v-images");e+="&webp_compatible=1"}
return e}return e}function cdn_failing(e){
if(!cdn_failed[e.src]){cdn_failed[e.src]=!0
;var t=e.src.match(/^(https?:)?\/\/v-(assets|images)\.cdnsw\.com(\/.*)$/)
;if(t){cdn_down=!0;e.src=cdn_url(t[3])}if(e.srcset){
var i=e.srcset.split(",");e.srcset=i.map(function(e){
var t=e.trim().split(/\s+/),i=t[0];if(!i)return e.trim()
;var o=t.slice(1).join(" "),n=i.match(/^(https?:)?\/\/v-(assets|images)\.cdnsw\.com(\/.*)$/)
;n&&(i=cdn_url(n[3]));return o?i+" "+o:i}).join(", ")}}}
function bestImgSrc(e,t,i,o){o=o||{keep_ratio:!0};var n=1
;"undefined"!=typeof navigator&&o.use_pixel_ratio&&(!navigator.connection||(navigator.connection.downlink||8)>2)&&(n=window.devicePixelRatio||1)
;t*=n;i*=n;var s=Math.max(t,i)||t||i,r
;o.keep_ratio&&e.width&&e.height&&(s=Math.max(s,e.width/e.height*i,e.height/e.width*t))
;if(/default_prod/.test(e.url))return e.url
;if(/pixabay\.com/.test(e.url)){r="https://ra0.cdnsw.com/cc0/"
;r+=e.id+"_"
;r+=s<150?"150":s<640?"640":s<960?"960":s<1280?"1280":"1920"
;r+="."+e.url.replace(/.*\.(\w+)$/,"$1")
;if("undefined"!=typeof v&&v&&"editor"==v.mode){var a
;r+="#pb:"+e.url.replace(/.*\/(\w+)_.*/,"$1")+"|"+e.thumbnails.small
}}else if(/fbcdn\.net/.test(e.url)){
s<200?r=e.thumbnails.small:s<700?r=e.thumbnails.normal:s<1500&&(r=e.thumbnails.large)
;r||(r=e.url)
}else if(/(drive\.google|googleusercontent)\.com/.test(e.url))r="https://drive.google.com/thumbnail?authuser=0&id="+e.id+"&sz=w"+Math.round(s);else{
var l=/flickr\.com/.test(e.url)?[100,240]:[150,300]
;if(e.srcset){var c=!1,d,l
;(l=Object.keys(e.srcset).map(function(e){return parseInt(e)
}).sort(function(e,t){return e>t?1:-1})).forEach(function(e){
if(!c&&e>=s){d=e;c=!0}});d||(d=l[l.length-1]);r=e.srcset[d]
}else r=s>l[1]?e.url:s>l[0]?e.thumbnails&&e.thumbnails.normal||e.url:e.thumbnails&&e.thumbnails.small||e.url
}return r}function loadCSS(e,t,i,o,n){
var s=window.document.createElement("link"),r=t||window.document.getElementsByTagName("script")[0],a=window.document.styleSheets
;s.rel="stylesheet";s.href=e;s.media=n?"only x":i||"all"
;o&&(s.onload=o);r.parentNode.insertBefore(s,r);if(n){
s.onloadcssdefined=function(t){
for(var i,o=0;o<a.length;o++)a[o].href&&a[o].href.indexOf(e)>-1&&(i=!0)
;i?window.requestAnimationFrame(t):setTimeout(function(){
s.onloadcssdefined(t)})};s.onloadcssdefined(function(){
s.media=i||"all"})}return s}function loadStyle(e,t){
var i=document.createElement('style');i.type='text/css'
;i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))
;var o=t||window.document.getElementsByTagName("script")[0]
;o.parentNode.insertBefore(i,o);return i}
function stylesheet_path(e){return{
menu_all:"/assets/precompile/cpts/menu/all-010bc423e86d1bd9bdb2cfd7ccc99b33.css",
faq_all:"/stylesheets/precompile/cpts/faq/all.css",
social_block:"/assets/precompile/cpts/common/social_block-79f5061b79dc8dfff28727961745ceab.css"
}[e]}function tb_init(e){$(e).click(function(){var e,t,i
;tb_show(this.title||this.name||null,this.href||this.alt,this.rel||!1)
;this.blur();return!1})}function tb_show(e,t,i,o){
window.v?v.tb_config||(v.tb_config={download:!1,share:!1,
thumbnail:!1,showThumbByDefault:!0,autoplayControls:!1,
autoplay:!1,mode:"lg-slide",speed:600,pause:5e3,counter:!0,
old_mode:!0,light_theme:!0,color:"rgba(56,181,241,1)"
}):window.v={tb_config:{download:!1,share:!1,thumbnail:!1,
showThumbByDefault:!0,autoplayControls:!1,autoplay:!0,
mode:"lg-slide",speed:600,pause:5e3,counter:!0,old_mode:!1,
light_theme:!0,color:"rgb(25, 181, 254)"}}
;clearTimeout(tb_remove_timeout)
;$("#TB_window,#TB_overlay").removeClass("tb_toRemove")
;(flash_objects=flash_objects||$("object").not("[id=sm2movieembed]").parent().filter(":visible").filter(":not(html)").filter(":not(body)")).hide()
;if(!i){if(null===document.getElementById("TB_overlay")){
$("body").append("<div id='TB_overlay' class='"+(marketing_opts.className?marketing_opts.className:"")+"'></div><div id='TB_window' class='"+(tb_editor?"editor_interface ":"")+(marketing_opts.className?marketing_opts.className:"")+"'></div>")
;if(!tb_marketing||marketing_opts.closeOnBackground){
$("#TB_overlay").on("mousedown",tb_remove)
;$("#TB_window").on("mousedown",function(e){
'TB_window'==$(e.target).attr('id')&&tb_remove()})}}
window.v&&window.v.mode&&v.applyPreset()
;$("#TB_overlay").addClass(tb_marketing?"TB_overlayBGmk":"TB_overlayBG")
;null===e&&(e="")
;$("body").append("<div id='TB_load' class='fonticon'>"+$.fn.fonticon("loading")+"</div>")
;$('#TB_load').show();var n=$('#TB_window'),s=n.find(".tb_c")
;if(tb_marketing){n.addClass("tb_mark")
;$("#page, #header, #footer, #submenu_panel").addClass('blur')}
0==s.length&&!(s=$("<div class=tb_c></div>").appendTo(n)).find('#TB_closeWindow').length>0&&s.append("<div id='TB_closeWindow'><div id='TB_closeWindowButton' class='fonticon'>"+$.fn.fonticon('close')+"</div></div>")
;s.addClass($("body").hasClass("sitew_body")?"-shadowXL -radiusXL":"")
}if(i){var r=[],a=[],l=null,c=$("body");i.each(function(e){
a.push({id:e.id,src:cdn_url(bestImgSrc(e,e.width,e.height)),
thumb:cdn_url(e.thumbnails.small),subHtml:""})});if(e){
e=FileDescription.get(i);r.push(e);e.done(function(e){
a.each(function(o){
if(e[o.id])o.subHtml=e[o.id].replace(/\n/g,"<br/>");else if("editor"==v.mode&&i[t].removable&&"google_drive"!=i[t].api){
o.subHtml="Pas encore de description : cliquez ici pour en ajouter une"
;o.empty_desc=!0}else o.subHtml=""})})}if(window.v){
var d={},p="",h=null;'editor'==v.mode&&(p='editor_interface')
;if(v.tb_config.old_mode){p+=" tb_old_mode";d={
width:Math.min(.8*($("#body").length?$("#body"):$("body")).width(),Math.max.apply(Math,i.map(function(e){
return e.width})))+"px",
height:Math.min(.8*$(window).innerHeight(),Math.max.apply(Math,i.map(function(e){
return e.height})))+"px",addClass:p,startClass:'',download:!1,
share:!1,thumbnail:!1,showThumbByDefault:!1,autoplayControls:!1,
autoplay:!1,counter:!1,zoom:!1,fullScreen:!1}}else{d={
addClass:p,download:v.tb_config.download,
share:v.tb_config.share,thumbnail:v.tb_config.thumbnail,
showThumbByDefault:v.tb_config.showThumbByDefault,
autoplayControls:v.tb_config.autoplayControls,
autoplay:v.tb_config.autoplay,counter:v.tb_config.counter}
;deviceController.device.match(/mobile/)&&(d.fullScreen=!0)}
"editor"==v.mode&&(d.keyPress=!1)
;$.when.apply($,r).then(function(){
$('body').lightGallery($.extend(d,{pause:v.tb_config.pause,
speed:v.tb_config.speed,mode:v.tb_config.mode,dynamic:!0,
mousewheel:!1,hash:!1,dynamicEl:a,index:t}))
;c.removeClass("tb_light_theme tb_dark_theme")
;c.addClass(v.tb_config.light_theme?"tb_light_theme":"tb_dark_theme")
;c.on("onAfterOpen.lg",function(){if(o){
var e=$(".lg-thumb-item").empty();$.each(e,function(e,t){
$(t).setImage(i[e],96,76,{keep_ratio:!1,protect:!0,
lightGallery:!0})})}
(v.tb_config.autoplay||v.tb_config.autoplayControls||v.tb_config.thumbnail)&&$("head").append("<style type='text/css' id='tb_config_style'>.lg-progress-bar .lg-progress{background-color:"+v.tb_config.color+";}.lg-outer .lg-thumb-item.active, .lg-outer .lg-thumb-item:hover{border-color:"+v.tb_config.color+";}</style>")
});c.on("onCloseAfter.lg",function(){c.data("lightGallery",null)
;c.off("onAfterOpen.lg  onCloseAfter.lg onAfterAppendSubHtml.lg onAfterSlide.lg onSlideItemLoad.lg")
;$("#live_edit_desc").remove()
;$("head").find("#tb_config_style").remove()})
;c.on("onAfterAppendSubHtml.lg",function(e,t){
l&&!$("#live_edit_desc").length&&$(".lg-sub-html").append(l)})
;c.on("onSlideItemLoad.lg",function(e,t,i){
var n=$(".lg-current"),s=n.find("img"),r=$(".lg-inner").children().index(n)
;o&&$(".lg").on('contextmenu',function(e){e.preventDefault()})})
;c.on("onAfterSlide.lg",function(e,o,n){this.to_resize=null
;var s=this;$(window).off("resize.protectGallery");h=a[t=n]
;if("editor"==v.mode&&i[t].removable&&"google_drive"!=i[t].api){
$("#live_edit_desc").remove()
;l=$("<div id='live_edit_desc' class='"+$.fn.genId("desc_wrapper_")+"' >")
;var r=$("<textarea id='live_edit_desc_area' >").attr("placeholder","Ajouter une description...").val(h.empty_desc?"":h.subHtml),c=$("<button class='set_img_desc btn btn-primary'>").text("Changer la description"),d=$("<button class='undo_img_desc btn btn-default'>").text("Fermer")
;$(".lg-sub-html").append(l.html(r.add(d).add(c)))}})})
;c.off("click",".set_img_desc").on("click",".set_img_desc",function(e){
var o=h.subHtml,n=$('#live_edit_desc').removeClass("openning").clone()
;h.subHtml=$("#live_edit_desc_area").val()
;new File(i[t]).saveDescription(h.subHtml)
;$(".lg-sub-html").html(h.subHtml.replace(/\n/g,"<br/>")).append(n)
;e.preventDefault;return!1})
;c.off("click",".lg-sub-html").on("click",".lg-sub-html",function(){
var e=$("#live_edit_desc").addClass("openning").find("textarea")
;e.val(e.val().split('<br/>').join('\n')).focus()
;$(".lg-toogle-thumb").hide()})
;c.off("click",".undo_img_desc").on("click",".undo_img_desc",function(e){
$("#live_edit_desc").removeClass("openning")
;$(".lg-toogle-thumb").css("display","");e.preventDefault
;return!1});return!1}$.when.apply($,r).then(function(){var e=t
;$('body').lightGallery({showThumbByDefault:!1,hash:!1,
download:!1,index:t,share:!1,dynamic:!0,dynamicEl:a})
;c.off("onCloseAfter.lg").on("onCloseAfter.lg",function(){
c.data("lightGallery",null)})})}else{$.fn.is_smallerScreen()
;var u,f=tb_parseQuery(t.replace(/^[^\?]+\??/,''));TB_WIDTH=0
;$.fn.smallerScreen?TB_WIDTH=window.outerWidth-10*$(window).width()/100-parseInt($('.tb_c').css('paddingLeft'))-parseInt($('.tb_c').css('paddingRight')):TB_WIDTH=1*f.width+30||Math.min(1200,80*$(window).width()/100)
;TB_HEIGHT=1*f.height+20||80*$(window).height()/100
;ajaxContentW=TB_WIDTH;ajaxContentH=TB_HEIGHT-35
;var _=""==e?"":[sprintf("<h%s>",1),e,sprintf("</h%s>",1)].join("")
;if(-1!=t.indexOf('TB_iframe')){
$("#TB_window .tb_c").append("<div id=\"tb_load_iframe\"><div class=\"loadingZone -sm\">\n      <svg version=\"1.1\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"25 25 50 50\">\n        <circle cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"3\" stroke=\"#6C4EE7\" stroke-linecap=\"round\" stroke-dashoffset=\"0\" stroke-dasharray=\"100, 200\">\n          <animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"rotate\" from=\"0 50 50\" to=\"360 50 50\" dur=\"2.5s\" repeatCount=\"indefinite\"/>\n          <animate attributeName=\"stroke-dashoffset\" values=\"0;-30;-124\" dur=\"1.25s\" repeatCount=\"indefinite\"/>\n          <animate attributeName=\"stroke-dasharray\" values=\"0,200;110,200;110,200\" dur=\"1.25s\" repeatCount=\"indefinite\"/>\n        </circle>\n      </svg>\n    </div></div>")
;urlNoQuery=t.split('TB_');$("#TB_iframeContent").remove()
;if("true"!=f.modal)s.append(_+"<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(1e3*Math.random())+"' onload='tb_showIframe()' style='width:"+(ajaxContentW+30)+"px;height:"+(ajaxContentH+17)+"px;' > </iframe>");else{
$("#TB_overlay").unbind()
;s.append("<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(1e3*Math.random())+"' onload='tb_showIframe()' style='width:"+(ajaxContentW+29)+"px;height:"+(ajaxContentH+17)+"px;'> </iframe>")
;s.find("#TB_closeWindowButton").remove()}
}else if($("#TB_ajaxContent").is(":visible")){
$("#TB_ajaxContent")[0].style.width=ajaxContentW+"px"
;$("#TB_ajaxContent")[0].style.height=ajaxContentH+"px"
;$("#TB_ajaxContent")[0].scrollTop=0
;$("#TB_ajaxWindowTitle").html(e)
}else if("true"!=f.modal)s.append(_+"<div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");else{
$("#TB_overlay").unbind()
;s.append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+(ajaxContentH+17)+"px;'></div>")
;s.find("#TB_closeWindowButton").remove()}
var m=0!=$("#TB_ajaxContent").length?$("#TB_ajaxContent"):$("#TB_iframeContent")
;$("#TB_closeWindowButton").click(tb_remove)
;if(-1!=t.indexOf('TB_inline')){
$("#TB_ajaxContent").append($('#'+f.inlineId).children())
;$("#TB_window").on("unload",function(){
$('#'+f.inlineId).append($("#TB_ajaxContent").children())})
;if(window.v&&"viewer"==v.mode){
$("body").css("overflow","hidden")
;$("#TB_window").on("unload",function(){
$("body").css("overflow","")})}tb_position()
;if(!f.height&&window.v){$(window).off("resize.thickbox")
;$("#TB_ajaxContent, #TB_window, .tb_c").removeAttr('style')
;$("#TB_window").css({display:"flex"})
;f.full_auto||$(".tb_c").css({"min-width":"25vw",
"max-width":"600px",padding:"50px"})}else $("#TB_window").css({
display:"flex"});$("#TB_load").remove()
;f.tb_top&&f.tb_left&&$("#TB_window").css({top:f.tb_top+"px",
left:f.tb_left+"px",margin:0,position:"absolute"})
;f.tb_background&&$("#TB_overlay").css("background-color",f.tb_background)
}else-1!=t.indexOf('TB_iframe')?tb_position():$("#TB_ajaxContent").load(t+="&random="+(new Date).getTime(),function(){
tb_position();$("#TB_load").remove()
;tb_init("#TB_ajaxContent a.thickbox");$("#TB_window").css({
display:"flex"})})}if(f&&!f.modal){
if(window.history&&window.history.pushState){
var g=window.location.href;window.history.pushState({thickbox:!0
},document.title,g)}
$(window).on('popstate.thickbox',function(e){tb_remove()})
;document.onkeyup=function(e){
keycode=null==e?event.keyCode:e.which;27==keycode&&tb_remove()}}
tb_editor=!0}function tb_showIframe(){$("#TB_load").remove()
;$("#tb_load_iframe").remove();$("#TB_window").css({
display:"flex"})}function tb_remove(e){
if(0!=$("#TB_window").length&&!$("#TB_window").is(":hidden")&&!$("#TB_window").is(".tb_toRemove")){
if(flash_objects){flash_objects.show();flash_objects=null}
$(window).off("resize.thickbox")
;$(window).off("popstate.thickbox")
;$(document).off("keydown.tb_show")
;$("#TB_window").removeClass("small_screen")
;$("#TB_imageOff,#TB_closeWindowButton").unbind("click")
;if(window.Modernizr&&!Modernizr.cssanimations){
$("#TB_window").hide()
;$('#TB_window,#TB_overlay,#TB_HideSelect').trigger("unload").unbind()
;try{
$('#TB_iframeContent')[0].contentWindow.$('body').trigger('unload')
}catch(t){}$('#TB_window,#TB_overlay,#TB_HideSelect').remove()
}else{$("#TB_window,#TB_overlay").addClass("tb_toRemove")
;$('#TB_window,#TB_overlay,#TB_HideSelect').trigger("unload").unbind()
;try{
$('#TB_iframeContent')[0].contentWindow.$('body').trigger('unload')
}catch(t){}clearTimeout(tb_remove_timeout)
;tb_remove_timeout=setTimeout(function(){
$('#TB_window,#TB_overlay,#TB_HideSelect').remove()},500)}
document.onkeyup="";"function"==typeof e&&e.call()
;tb_marketing&&$("#page, #header, #footer, #submenu_panel").removeClass('blur')
;$("body").css("overflow","");tb_marketing=!1;marketing_opts={}
;return!1}"function"==typeof e&&e.call()}function tb_position(){
$("#TB_window, .tb_c").removeAttr("style")
;$("#TB_window").css('display','flex')
;$(window).on("resize.thickbox",tb_position)
;$("#TB_window div.tb_c").css("overflow","")
;var e=TB_WIDTH,t=TB_HEIGHT,i=tb_getPageSize(),o=i[0],n=i[1],s=$('#TB_window iframe')
;if(TB_WIDTH>=o||TB_HEIGHT>=n){e=Math.min(TB_WIDTH,o)
;t=Math.min(TB_HEIGHT,n)
;$("#TB_window div.tb_c").css("overflow","auto")
;$("#TB_window").addClass("small_screen");if(s.length){s.css({
width:o-2*parseInt($(".tb_c").css("padding-left"))})
;size_changed=!0}}else if(size_changed&&s.width()<TB_WIDTH){
s.css("width",TB_WIDTH);size_changed=!1}$("#TB_load").remove()}
function tb_parseQuery(e){var t={};if(!e)return t
;for(var i=e.split(/[;&]/),o=0;o<i.length;o++){
var n=i[o].split('=');if(n&&2==n.length){
var s=unescape(n[0]),r=unescape(n[1]);r=r.replace(/\+/g,' ')
;t[s]=r}}return t}function tb_getPageSize(){
return[$(window).width(),$(window).height()]}
function tb_show_viewer(e,t,i,o,n){marketing_opts=n||{}
;tb_editor=!1;tb_show(e,t,i,o);tb_editor=!0}
function tb_show_marketing(e,t,i,o){tb_marketing=!0
;tb_show(e,t,i,o)}function tb_show_custom(e,t,i,o,n){
marketing_opts=n;tb_show(e,t,i,o)}function HelpTag(e){
return $("<span class='fonticon iconHelp'>"+($.fn.fonticon?$.fn.fonticon("help"):"&#xea67;")+"</span>").sitew_tooltip(e)
}function css_parser(e,t,i,o){var o=o||{},n=t;CSS_PARSER.d=i
;var s={backdrop:["link"]
}[CSS_PARSER.d.graphical_type_id||(CSS_PARSER.d.component_type?CSS_PARSER.d.component_type.class_name:null)]
;if(s)for(var r=0;r<s.length;r++){
for(var a=s[r],l=!0,c=CSS_PARSER.d.data instanceof Object?Object.keys(CSS_PARSER.d.data):[],d=0;d<c.length;d++){
var p=c[d];if(!/_order/.test(p)){
var h="gt_"+a,u=CSS_PARSER.find_data(p,h);if(u){
for(var f=null,_=o.presets?o.presets:v.presets,r=0;r<_.length;r++)_[r].graphical_type_id==a&&_[r].cssid.match(new RegExp(u+"$","gi"))&&(f=_[r])
;!f&&u<20&&(f={data:{}});if(f){
var m=n.match(new RegExp("(?:<"+a+">((?:.*?\r?\n?)*)</"+a+">)+","gim"))[0]
;l=!1;var g=i.cssid.match(/\d+$/)[0]
;n=n.replace(m,css_parser("gt_"+a,m,{
data:f.getAllData?f.getAllData():f.data},o))
;var h=e.substr(3).toLowerCase();if(f.used_by)if(f.used_by[h]){
f.used_by[h].push(g);f.used_by[h]=f.used_by[h].unique()
}else f.used_by[h]=[g];else{f.used_by={};f.used_by[h]=[g]}}}}}
l&&(n=n.replace(new RegExp("(?:<"+a[0]+">((?:.*?\r?\n?)*)</"+a[0]+">)+","gim"),"<"+a[0]+" (removed)>"))
}CSS_PARSER.d=i;switch(e.toLowerCase()){case"ui_icon":
CSS_PARSER.data_replace=[];var b,r=0
;b=[["#000","options","normal_colors",0],["#001","options","normal_colors",1],["#002","options","hover_colors",0],["#003","options","hover_colors",1],["#004","options","active_colors",0],["#005","options","active_colors",1]]
;CSS_PARSER.replacing_data("simple_with_index",b)
;b=[["4001pt","options","radius"]]
;CSS_PARSER.replacing_data("four_elements",b,"%")
;var y=CSS_PARSER.find_data("options","shadow")
;CSS_PARSER.data_replace.push(["5001pt 5002pt",y?y[6]:"#to_delete"])
;b=[[["3001pt","options","bt"],["3002pt","options","br"],["3003pt","options","bb"],["3004pt","options","bl"]]]
;CSS_PARSER.replacing_data("borders",b)
;b=[["#custom_css_icon{top:0}","options","css"]];var w={
options:"."+i.cssid+" .ui_i_wrapper"};for(r=0;r<b.length;r++){
var C=b[r],x;if(x=CSS_PARSER.find_data(C[1],C[2])){var k=w[C[1]]
;x=x.replace(/node/g,k)}
CSS_PARSER.data_replace.push([C[0],x||""])}
CSS_PARSER.data_replace.push([".preset_cssid","."+i.cssid])
;break;case"ui_blog":CSS_PARSER.data_replace=[];var b,r=0
;b=[["#001","options_background","bg_color"],["#003","options_title","text_color"],["#004","options_date","text_color"],["#005","options_title","bg_color"],["#006","options_summary","text_color"],["left","options_title","align"],["center","options_date","align"],["right","options_summary","align"],["10000","options_title","font_weight"],["20000","options_date","font_weight"],["30000","options_summary","font_weight"]]
;CSS_PARSER.replacing_data("simple_without_px",b)
;CSS_PARSER.replacing_data("simple",[["10pt","options_title","font_size"],["11pt","options_date","font_size"],["12pt","options_summary","font_size"]])
;CSS_PARSER.replacing_data("four_elements",[["2002pt","options_title","padding"],["2003pt","options_summary","padding"],["2004pt","options_background","padding"],["2006pt","options_date","padding"],["4001pt","options_background","radius"]])
;b=[[["3001pt","options_background","bt"],["3002pt","options_background","br"],["3003pt","options_background","bb"],["3004pt","options_background","bl"]]]
;CSS_PARSER.replacing_data("borders",b);b=["inherit",""]
;CSS_PARSER.data_replace.push(["100pt",(CSS_PARSER.find_data("options_background","v_gap")!=undefined?CSS_PARSER.find_data("options_background","v_gap"):i.data.v_gap)+"px"])
;CSS_PARSER.data_replace.push(["101pt",(CSS_PARSER.find_data("options_background","h_gap")!=undefined?CSS_PARSER.find_data("options_background","h_gap"):i.data.h_gap)+"px"])
;CSS_PARSER.data_replace.push(["5200pt",i.data.min_h+"px"])
;CSS_PARSER.data_replace.push(["inherit","repeat("+i.data.nb_columns+", minmax(0, 1fr))"])
;CSS_PARSER.data_replace.push(["#002",CSS_PARSER.getBackgroundGradient(i.data.img_filter[1],i.data.img_filter[0],null,!1)])
;CSS_PARSER.data_replace.push(["end",i.data.text_v_align])
;CSS_PARSER.data_replace.push(["none",i.data.btn_on_list?"block":"none"])
;var y=CSS_PARSER.find_data("options_background","shadow")
;CSS_PARSER.data_replace.push(["5001pt 5002pt",y?y[6]:"#to_delete"])
;b=[["#custom_css_title{top:0}","options_title","css"],["#custom_css_date{top:0}","options_date","css"],["#custom_css_summary{top:0}","options_summary","css"],["#custom_css_background{top:0}","options_background","css"]]
;var w={options_title:"."+i.cssid+" .uib_title",
options_date:"."+i.cssid+" .uib_date",
options_summary:"."+i.cssid+" .uib_content_first",
options_background:"."+i.cssid+" .uib_article"}
;for(r=0;r<b.length;r++){var C=b[r],x
;if(x=CSS_PARSER.find_data(C[1],C[2])){var k=w[C[1]]
;x=x.replace(/node/g,k)}
CSS_PARSER.data_replace.push([C[0],x||""])}
CSS_PARSER.data_replace.push([".preset_cssid","."+i.cssid])
;break;case"ui_faq":CSS_PARSER.data_replace=[];var b,r=0
;b=[["1001pt","options_background","margin_bottom"],["10pt","options_question","font_size_normal"],["11pt","options_question","font_size_open"],["12pt","options_answer","font_size"],["13pt","options_cat","font_size"]]
;CSS_PARSER.replacing_data("simple",b)
;b=[["#011","options_background","bg_colors",0],["#012","options_background","bg_colors",1],["#013","options_background","bg_colors",2],["#000","options_question","bg_colors",0],["#004","options_question","bg_colors",1],["#006","options_question","bg_colors",2],["#001","options_question","text_colors",0],["#003","options_question","text_colors",1],["#007","options_question","text_colors",2],["#002","options_answer","bg_colors",0],["#005","options_answer","bg_colors",1],["#008","options_answer","text_colors",0],["#009","options_answer","text_colors",1]]
;CSS_PARSER.replacing_data("simple_with_index",b)
;b=[[["3001pt","options_background","bt"],["3002pt","options_background","br"],["3003pt","options_background","bb"],["3004pt","options_background","bl"]],[["3005pt","options_question","bt"],["3006pt","options_question","br"],["3007pt","options_question","bb"],["3008pt","options_question","bl"]],[["3009pt","options_answer","bt"],["3010pt","options_answer","br"],["3011pt","options_answer","bb"],["3012pt","options_answer","bl"]]]
;CSS_PARSER.replacing_data("borders",b)
;b=[["2002pt","options_question","padding"],["2003pt","options_answer","padding"],["4001pt","options_background","radius"],["4002pt","options_question","radius"],["4003pt","options_answer","radius"]]
;CSS_PARSER.replacing_data("four_elements",b)
;b=[["10000","options_question","font_weight"],["20000","options_answer","font_weight"],["left","options_question","align"],["right","options_answer","align"],["center","options_cat","align"],["#014","options_cat","text_color"]]
;CSS_PARSER.replacing_data("simple_without_px",b)
;var y=CSS_PARSER.find_data("options_background","shadow")
;CSS_PARSER.data_replace.push(["5001pt 5002pt",y?y[6]:"#to_delete"])
;y=CSS_PARSER.find_data("options_answer","links")
;CSS_PARSER.data_replace.push(["none",y?y[0]:"#to_delete"])
;CSS_PARSER.data_replace.push(["#010",y?y[1]:"#to_delete"])
;CSS_PARSER.data_replace.push([".preset_cssid","."+i.cssid])
;break;case"ui_text":CSS_PARSER.data_replace=[];var b,r=0
;b=[["1001pt","options_background","margin"],["2001pt","options_background","padding"],["1002pt","options_title","margin"],["2002pt","options_title","padding"],["1003pt","options_paragraph","margin"],["2003pt","options_paragraph","padding"],["4001pt","options_background","radius"],["4002pt","options_title","radius"],["4003pt","options_paragraph","radius"]]
;for(r=0;r<b.length;r++){
var C=b[r],x=CSS_PARSER.find_data(C[1],C[2])
;CSS_PARSER.data_replace.push([C[0],x?x[0]+"px "+x[1]+"px "+x[2]+"px "+x[3]+"px":"#to_delete"])
}
b=[["#custom_css{top:0}","options_background","css"],["#custom_css_title{top:0}","options_title","css"],["#custom_css_paragraph{top:0}","options_paragraph","css"]]
;var w={options_background:"."+i.cssid,
options_title:"."+i.cssid+" .uit_ttltxt",
options_paragraph:"."+i.cssid+" .uit_cttxt"}
;for(r=0;r<b.length;r++){var C=b[r],x
;if(x=CSS_PARSER.find_data(C[1],C[2])){var k=w[C[1]]
;x=x.replace(/node/g,k)}
CSS_PARSER.data_replace.push([C[0],x||""])}
b=[["#001","options_background","bg_color"],["#002","options_title","text_color"],["#003","options_title","bg_color"],["#004","options_paragraph","text_color"],["#005","options_paragraph","bg_color"]]
;for(r=0;r<b.length;r++){
var C=b[r],x=CSS_PARSER.find_data(C[1],C[2])
;CSS_PARSER.data_replace.push([C[0],x?x[0]:"#to_delete"])}
b=[[["3001pt","options_background","bt"],["3002pt","options_background","br"],["3003pt","options_background","bb"],["3004pt","options_background","bl"]],[["3005pt","options_title","bt"],["3006pt","options_title","br"],["3007pt","options_title","bb"],["3008pt","options_title","bl"]],[["3009pt","options_paragraph","bt"],["3010pt","options_paragraph","br"],["3011pt","options_paragraph","bb"],["3012pt","options_paragraph","bl"]]]
;for(r=0;r<b.length;r++)for(var S=b[r],$=CSS_PARSER.find_data(S[0][1],"border"),T=0;T<S.length;T++){
var P=null;$&&(P=$.all&&$.all[3]?$.all:$[S[T][2]])
;CSS_PARSER.data_replace.push([S[T][0],P&&P[3]?P[0]+"px "+P[1]+" "+P[2]:"#to_delete"])
}
b=[["10pt","options_title","font_size"],["11pt","options_paragraph","font_size"]]
;for(r=0;r<b.length;r++){
var C=b[r],x=CSS_PARSER.find_data(C[1],C[2])
;CSS_PARSER.data_replace.push([C[0],x?x+"px":"#to_delete"])}
b=[["10000","options_title","font_weight"],["20000","options_paragraph","font_weight"],["left","options_title","align"],["right","options_paragraph","align"]]
;for(r=0;r<b.length;r++){
var C=b[r],x=CSS_PARSER.find_data(C[1],C[2])
;CSS_PARSER.data_replace.push([C[0],x||"#to_delete"])}
var y=CSS_PARSER.find_data("options_background","shadow")
;CSS_PARSER.data_replace.push(["5001pt 5002pt",y?y[6]:"#to_delete"])
;CSS_PARSER.data_replace.push([".preset_cssid","."+i.cssid])
;y=CSS_PARSER.find_data("options_paragraph","links")
;CSS_PARSER.data_replace.push(["none",y?y[0]:"#to_delete"])
;CSS_PARSER.data_replace.push(["#006",y?y[1]:"#to_delete"])
;break;case"menu":
CSS_PARSER.data_replace=[["UI_Menu",i.uniq_id+" "],["10pt",i.font_size+"px"],["1pt",i.border_weight+"px"],["2pt",i.font_size-2+"px"],["#000",i.normal_colors[0]],["#001",i.normal_colors[1]],["#002",i.normal_colors[2]],["#003",i.hover_colors[0]],["#004",i.hover_colors[1]],["#005",i.hover_colors[2]],["#006",i.selected_colors[0]],["#007",i.selected_colors[1]],["#008",i.selected_colors[2]],["initial",i.uim_align]]
;break;case"icon":
CSS_PARSER.data_replace=[["#000",i.normal_colors[0]],["#001",i.normal_colors[1]]]
;break;case"text":i.title=i.title||{};i.text=i.text||{}
;CSS_PARSER.data_replace=[["#001",i["background-color"]],["#002",i["border-left-color"]],["1pt",i["border-left-width"]+"px"],["2pt",i["border-left-style"]],["3pt",i["padding-top"]+"px"],["4pt",i["padding-right"]+"px"],["5pt",i["padding-bottom"]+"px"],["6pt",i["padding-left"]+"px"],["101pt",i.title["margin-top"]+"px"],["102pt",i.title["margin-right"]+"px"],["103pt",i.title["margin-bottom"]+"px"],["104pt",i.title["margin-left"]+"px"],["110pt",i.title["padding-top"]+"px"],["111pt",i.title["padding-right"]+"px"],["112pt",i.title["padding-bottom"]+"px"],["113pt",i.title["padding-left"]+"px"],["#101",i.title.color],["#102",i.title["border-bottom-color"]],["106pt",i.title["border-bottom-width"]+"px"],["107pt",i.title["border-bottom-style"]],["#103",i.title["background-color"]],["108pt",i.title.font_size+"px"],["10000",i.title.font_weight],["initial",i.title.text_align],["201pt",i.text["padding-top"]+"px"],["202pt",i.text["padding-right"]+"px"],["203pt",i.text["padding-bottom"]+"px"],["204pt",i.text["padding-left"]+"px"],["#201",i.text.color],["205pt",i.text.font_size+"px"],["20000",i.text.font_weight],["inherit",i.text.text_align]]
;break;case"faq":
CSS_PARSER.data_replace=[["1pt",i.font_size_question+"px"],["2pt",i.padding_question_top_bottom+"px"],["3pt",i.padding_question_left_right+"px"],["1001pt",i.questions_spacement+"px"],["4pt",i.border_bottom],["#001",i.background],["6pt",i.answer_padding],["#003",i.selected_question_color],["7pt",i.open_question_font_size]]
;break;case"blog":for(var z="",r=0;r<i.nb_columns;r++)z+="1fr "
;CSS_PARSER.data_replace=[["#001",i.bg_opt_bg_color],["5001pt 5002pt",i.bg_opt_shadow?i.bg_opt_shadow[6]:""],["2007pt",i.bg_opt_padding],["2006pt",i.date_opt_padding],["11pt",i.date_opt_font_size+"px"],["12pt",i.sum_opt_font_size+"px"],["right",i.sum_opt_align],["left",i.date_opt_align],["center",i.title_opt_align],["2009pt",i.sum_opt_padding],["10000",i.title_opt_font_weight],["20000",i.sum_opt_font_weight],["10pt",i.title_opt_font_size+"px"],["2002pt",i.title_opt_padding],["#003",i.title_opt_text_color],["#004",i.date_opt_text_color],["#006",i.sum_opt_text_color],["end",i.text_v_align],["5200pt",i.min_h+"px"],["100pt",i.v_gap+"px"],["101pt",i.h_gap+"px"],["inherit",z],["none",i.btn_on_list?"block":"none"],["4001pt",i.bg_opt_radius]]
;CSS_PARSER.data_replace.push(["#002",CSS_PARSER.getBackgroundGradient(i.img_filter[1],i.img_filter[0],null,!1)])
;break;case"font":CSS_PARSER.data_replace=[]
;for(var I=["text","title","menu","action"],A=["family","weight","spacing","italic","uppercase","caps","size","height"],r=0;r<I.length;r++)for(var T=0;T<A.length;T++)CSS_PARSER.data_replace.push([A[T]+(r+1),i[I[r]][A[T]]?i[I[r]][A[T]]:"#to_delete"])
;break;case"ui_store":CSS_PARSER.data_replace=[]
;CSS_PARSER.replacing_data("simple_without_px",[["left","options_title","align"],["center","options_price","align"],["initial","options_strike_price","align"],["right","options_stocks","align"],["10000","options_title","font_weight"],["20000","options_price","font_weight"],["30000","options_strike_price","font_weight"],["40000","options_stocks","font_weight"],["inline","options_strike_price","display"]])
;E=[["#001","options_background","bg_color",0],["#002","options_title","text_color",0],["#003","options_title","bg_color",0],["#004","options_price","text_color",0],["#005","options_price","bg_color",0],["#006","options_strike_price","text_color",0],["#007","options_strike_price","bg_color",0],["#008","options_stocks","text_color",0],["#009","options_stocks","text_color",1],["#010","options_stocks","text_color",2],["#011","options_stocks","bg_color",0],["#012","options_stocks","bg_color",1],["#013","options_stocks","bg_color",2]]
;CSS_PARSER.replacing_data("simple_with_index",E)
;CSS_PARSER.replacing_data("simple",[["110pt","options_title","font_size"],["111pt","options_price","font_size"],["112pt","options_strike_price","font_size"],["113pt","options_stocks","font_size"]])
;CSS_PARSER.replacing_data("four_elements",[["1000pt","options_background","padding"],["1001pt","options_title","padding"],["1002pt","options_price","padding"],["1003pt","options_strike_price","padding"],["1004pt","options_stocks","padding"],["4000pt","options_background","radius"],["4001pt","options_title","radius"],["4002pt","options_price","radius"],["4003pt","options_strike_price","radius"],["4004pt","options_stocks","radius"],["2000pt","options_title","margin"],["2001pt","options_price","margin"],["2002pt","options_strike_price","margin"],["2003pt","options_stocks","margin"]])
;CSS_PARSER.replacing_data("borders",[[["3000pt","options_background","bt"],["3001pt","options_background","br"],["3002pt","options_background","bb"],["3003pt","options_background","bl"]],[["3004pt","options_title","bt"],["3005pt","options_title","br"],["3006pt","options_title","bb"],["3007pt","options_title","bl"]],[["3008pt","options_price","bt"],["3009pt","options_price","br"],["3010pt","options_price","bb"],["3011pt","options_price","bl"]],[["3012pt","options_strike_price","bt"],["3013pt","options_strike_price","br"],["3014pt","options_strike_price","bb"],["3015pt","options_strike_price","bl"]],[["3016pt","options_stocks","bt"],["3017pt","options_stocks","br"],["3018pt","options_stocks","bb"],["3019pt","options_stocks","bl"]]])
;var y=CSS_PARSER.find_data("options_background","shadow")
;CSS_PARSER.data_replace.push(["5001pt 5002pt",y?y[6]:"#to_delete"])
;var y=CSS_PARSER.find_data("options_background","h_gap")
;CSS_PARSER.data_replace.push(["114pt",y!=undefined?y+"px":"#to_delete"])
;var y=CSS_PARSER.find_data("options_background","v_gap")
;CSS_PARSER.data_replace.push(["115pt",y!=undefined?y+"px":"#to_delete"])
;var y=CSS_PARSER.d.data.gt_button_width
;CSS_PARSER.data_replace.push(["100%",y?y+"%":"#to_delete"])
;var y=CSS_PARSER.d.data.image_height
;CSS_PARSER.data_replace.push(["116pt",y?y+"px":"230px"])
;b=[["#custom_css_background{top:0}","options_background","css"],["#custom_css_title{top:0}","options_title","css"],["#custom_css_price{top:0}","options_price","css"],["#custom_css_strike_price{top:0}","options_strike_price","css"],["#custom_css_stocks{top:0}","options_stocks","css"]]
;var w={options_background:"."+i.cssid+" ul.uisl_c li",
options_title:"."+i.cssid+" ul.uisl_c li > h3",
options_price:"."+i.cssid+" ul.uisl_c li > .uis_list_price",
options_strike_price:"."+i.cssid+" ul.uisl_c li > .uis_list_price .uis_list_strike",
options_stocks:"."+i.cssid+" ul.uisl_c li .uis_custom_stock_sentence_product_list"
};for(r=0;r<b.length;r++){var C=b[r],x
;if(x=CSS_PARSER.find_data(C[1],C[2])){var k=w[C[1]]
;x=x.replace(/node/g,k)}
CSS_PARSER.data_replace.push([C[0],x||""])}
CSS_PARSER.data_replace.push([".preset_cssid",".uisl_c."+i.cssid])
;break;case"carousel":
CSS_PARSER.data_replace=[["10px",i.padding[0]+'px '+i.padding[1]+'px '+i.padding[2]+'px '+i.padding[3]+'px'],["11px",i.padding[0]+'px '+(i.padding[1]>30?30:i.padding[1])+'px '+i.padding[2]+'px '+(i.padding[3]>30?30:i.padding[3])+'px'],["20px",i.margin+'px'],["200px",i.width+'px']]
;break;case"button":
CSS_PARSER.data_replace=[["#000",i.colors[0]],["#001",i.colors[1]],["#002",i.colors[2]]]
;break;case"gt_button":CSS_PARSER.data_replace=[]
;E=[["#000","options","colors",0],["#001","options","colors",1],["#003","hover_options","colors",0],["#004","hover_options","colors",1],["#009","options","bullet_colors",0],["#010","options","bullet_colors",1]]
;CSS_PARSER.replacing_data("simple_with_index",E)
;for(var D=[["#002","options","colors",2],["#005","hover_options","colors",2]],r=0;r<D.length;r++){
var R=D[r],E=CSS_PARSER.find_data(R[1],R[2]);to_delete=!0
;if(E&&E[R[3]]){
"string"==typeof E[R[3]]?CSS_PARSER.data_replace.push([R[0],E[2]]):CSS_PARSER.data_replace.push([R[0],CSS_PARSER.getBackgroundGradient(E[2][1],E[2][0],E[2][2])])
;to_delete=!1}
to_delete&&CSS_PARSER.data_replace.push([R[0],"#to_delete"])}
pxs=[["1000pt","options","text_font_size"],["1001pt","options","icon_font_size"],["2000pt","hover_options","text_font_size"],["2001pt","hover_options","icon_font_size"]]
;CSS_PARSER.replacing_data("simple",pxs)
;CSS_PARSER.replacing_data("simple_without_px",[["10000","options","font_weight"]])
;four=[["1002pt","options","radius"],["2002pt","hover_options","radius"],["1009pt","options","padding"]]
;CSS_PARSER.replacing_data("four_elements",four,"px")
;var y=CSS_PARSER.find_data("options","shadow")
;CSS_PARSER.data_replace.push(["1007pt 1008pt",y?y[6]:"#to_delete"])
;var y=CSS_PARSER.find_data("hover_options","shadow")
;CSS_PARSER.data_replace.push(["2007pt 2008pt",y?y[6]:"#to_delete"])
;V=[[["1003pt","options","bt"],["1004pt","options","br"],["1005pt","options","bb"],["1006pt","options","bl"]],[["2003pt","hover_options","bt"],["2004pt","hover_options","br"],["2005pt","hover_options","bb"],["2006pt","hover_options","bl"]]]
;CSS_PARSER.replacing_data("borders",V)
;var N=CSS_PARSER.find_data("options","icon_position");if(N){
var M="top"==N?"column":"right"==N?"row-reverse":"bottom"==N?"column-reverse":"row"
;CSS_PARSER.data_replace.push(["row0",M])}
CSS_PARSER.data_replace.push(["1010pt",(CSS_PARSER.find_data("options","icon_font_size")||CSS_PARSER.find_data("options","text_font_size")||12)+"px"])
;var H="row";"top"!=N&&"bottom"!=N||(H="column")
;"right"!=N&&"left"!=N||(H="column"==H?"column-reverse":"row-reverse")
;var L=CSS_PARSER.find_data("options",H.match(/column/)?"vertical_alignment":"horizontal_alignment"),j="center"
;L&&"middle"!=L&&(j="start"==L?M.match(/reverse/)?"flex-end":"flex-start":M.match(/reverse/)?"flex-start":"flex-end")
;CSS_PARSER.data_replace.push(["center0",j])
;var B=CSS_PARSER.find_data("options",H.match(/column/)?"horizontal_alignment":"vertical_alignment"),U="center"
;B&&"middle"!=B&&(U="start"==B?"flex-start":"flex-end")
;CSS_PARSER.data_replace.push(["center1",U]);var W="100%"
;(-1!=["start","end"].indexOf(L)||-1!=["middle",undefined].indexOf(L)&&"out"!=CSS_PARSER.find_data("options","icon_placement"))&&(W="auto")
;CSS_PARSER.data_replace.push(["inherit0",W])
;b=[["#custom_css_button{top:0}","options","css"]];var w={
options:["."+i.cssid+" .button_block","."+i.cssid+" .site_button","#TB_window ."+i.cssid+" .site_button"]
};for(r=0;r<b.length;r++){var C=b[r],x,O=""
;if(x=CSS_PARSER.find_data(C[1],C[2]))for(var F=w[C[1]],q=0;q<F.length;q++)O+=x.replace(/node/g,F[q])
;CSS_PARSER.data_replace.push([C[0],""!=O?O:""])}
CSS_PARSER.data_replace.push([".preset_cssid","."+i.cssid])
;break;case"link":break;case"gt_link":CSS_PARSER.data_replace=[]
;E=[["#801","options","colors",1],["#802","hover_options","colors",0],["#803","hover_options","colors",1]]
;CSS_PARSER.replacing_data("simple_with_index",E)
;four=[["8001pt","options","radius"],["8012pt","hover_options","radius"]]
;CSS_PARSER.replacing_data("four_elements",four,"px")
;var y=CSS_PARSER.find_data("options","colors")
;CSS_PARSER.data_replace.push(["#800",y?y[0]:"#007fff"])
;var y=CSS_PARSER.find_data("options","link_decoration")
;CSS_PARSER.data_replace.push(["8none",y||"none"])
;var y=CSS_PARSER.find_data("hover_options","link_decoration")
;CSS_PARSER.data_replace.push(["8underline",y||"none"])
;b=[["#custom_css_link{top:0}","options","css"]];var w={
options:["."+i.cssid+" a","."+i.cssid+" .site_link","#TB_window."+i.cssid+" a","#TB_window."+i.cssid+" .site_link"]
};for(r=0;r<b.length;r++){var C=b[r],x,O=""
;if(x=CSS_PARSER.find_data(C[1],C[2]))for(var F=w[C[1]],q=0;q<F.length;q++)O+=x.replace(/node/g,F[q]+":not(.site_button):not(.not_link_style):not(.button_block)")
;CSS_PARSER.data_replace.push([C[0],""!=O?O:""])}
i.cssid&&CSS_PARSER.data_replace.push([".preset_cssid","."+i.cssid])
;break;case"textbox":break;case"gt_textbox":
CSS_PARSER.data_replace=[]
;E=[["#000","options","colors",0],["#001","options","colors",1],["#002","options","colors",2],["#003","focus_options","colors",0],["#004","focus_options","colors",1],["#005","focus_options","colors",2]]
;CSS_PARSER.replacing_data("simple_with_index",E)
;four=[["1001pt","options","radius"],["1012pt","focus_options","radius"],["1015pt","options","padding"]]
;CSS_PARSER.replacing_data("four_elements",four,"px")
;var y=CSS_PARSER.find_data("options","link_decoration")
;CSS_PARSER.data_replace.push(["none",y||"#to_delete"])
;var y=CSS_PARSER.find_data("focus_options","link_decoration")
;CSS_PARSER.data_replace.push(["underline",y||"#to_delete"])
;var y=CSS_PARSER.find_data("options","text_align")
;CSS_PARSER.data_replace.push(["left",y||"#to_delete"])
;var y=CSS_PARSER.find_data("options","shadow")
;CSS_PARSER.data_replace.push(["1006pt 1007pt",y?y[6]:"#to_delete"])
;var y=CSS_PARSER.find_data("focus_options","shadow")
;CSS_PARSER.data_replace.push(["1013pt 1014pt",y?y[6]:"#to_delete"])
;V=[[["1002pt","options","bt"],["1003pt","options","br"],["1004pt","options","bb"],["1005pt","options","bl"]],[["1008pt","focus_options","bt"],["1009pt","focus_options","br"],["1010pt","focus_options","bb"],["1011pt","focus_options","bl"]]]
;CSS_PARSER.replacing_data("borders",V)
;b=[["#custom_css_textbox{top:0}","options","css"]];var w={
options:["."+i.cssid+" textarea","."+i.cssid+" .site_textbox","."+i.cssid+" select","#TB_window ."+i.cssid+" textarea","#TB_window ."+i.cssid+" .site_textbox","#TB_window ."+i.cssid+" select"]
};for(r=0;r<b.length;r++){var C=b[r],x,O=""
;if(x=CSS_PARSER.find_data(C[1],C[2]))for(var F=w[C[1]],q=0;q<F.length;q++)O+=x.replace(/node/g,F[q])
;CSS_PARSER.data_replace.push([C[0],""!=O?O:""])}
CSS_PARSER.data_replace.push([".preset_cssid","."+i.cssid])
;break;case"searchbox":break;case"gt_searchbox":
CSS_PARSER.data_replace=[]
;E=[["#000","options","colors",0],["#001","input_options","colors",0],["#002","input_options","colors",1],["#003","input_options","colors",2],["#004","button_options","colors",0],["#005","button_options","colors",1],["#006","focus_options","colors",0],["#007","focus_options","colors",1],["#008","focus_options","colors",2],["#009","hover_options","colors",0],["#010","hover_options","colors",1]]
;CSS_PARSER.replacing_data("simple_with_index",E)
;CSS_PARSER.replacing_data("four_elements",[["1004pt","options","radius"],["1005pt","options","padding"],["1012pt","input_options","radius"],["1013pt","input_options","padding"],["1020pt","focus_options","radius"],["1023pt","button_options","radius"],["1032pt","hover_options","radius"],["1039pt","button_options","padding"]],"px")
;CSS_PARSER.replacing_data("simple",[["1030pt","button_options","text_font_size"],["1031pt","options","spacing"],["1040pt","input_options","text_font_size"]])
;for(var G=[["1006pt 1007pt","options","shadow"],["1014pt 1015pt","input_options","shadow"],["1021pt 1022pt","focus_options","shadow"],["1028pt 1029pt","button_options","shadow"],["1037pt 1038pt","hover_options","shadow"]],r=0;r<G.length;r++){
var y=CSS_PARSER.find_data(G[r][1],G[r][2])
;CSS_PARSER.data_replace.push([G[r][0],y?y[6]:"#to_delete"])}
var V=[[["1000pt","options","bt"],["1001pt","options","br"],["1002pt","options","bb"],["1003pt","options","bl"]],[["1008pt","input_options","bt"],["1009pt","input_options","br"],["1010pt","input_options","bb"],["1011pt","input_options","bl"]],[["1016pt","focus_options","bt"],["1017pt","focus_options","br"],["1018pt","focus_options","bb"],["1019pt","focus_options","bl"]],[["1024pt","button_options","bt"],["1025pt","button_options","br"],["1026pt","button_options","bb"],["1027pt","button_options","bl"]],[["1033pt","hover_options","bt"],["1034pt","hover_options","br"],["1035pt","hover_options","bb"],["1036pt","hover_options","bl"]]]
;CSS_PARSER.replacing_data("borders",V)
;var y=CSS_PARSER.find_data("input_options","text_align")
;CSS_PARSER.data_replace.push(["left",y||"#to_delete"])
;b=[["#custom_css_parent{top:0}","options","css"],["#custom_css_textbox{top:0}","input_options","css"],["#custom_css_button{top:0}","button_options","css"]]
;var w={options:"."+i.cssid+" .site_search",
input_options:"."+i.cssid+" .site_search > .site_textbox",
button_options:"."+i.cssid+" .site_search > .site_button"}
;for(r=0;r<b.length;r++){var C=b[r],x
;if(x=CSS_PARSER.find_data(C[1],C[2])){var k=w[C[1]]
;x=x.replace(/node/g,k)}
CSS_PARSER.data_replace.push([C[0],x||""])}
CSS_PARSER.data_replace.push([".preset_cssid","."+i.cssid])
;break;case"backdrop":break;case"gt_backdrop":
CSS_PARSER.data_replace=[];var b,r=0
;b=[["1001pt","options_background","margin"],["2001pt","options_background","padding"],["1002pt","options_title","margin"],["2002pt","options_title","padding"],["1003pt","options_paragraph","margin"],["2003pt","options_paragraph","padding"],["4001pt","options_background","radius"],["4002pt","options_title","radius"],["4003pt","options_paragraph","radius"]]
;for(r=0;r<b.length;r++){
var C=b[r],x=CSS_PARSER.find_data(C[1],C[2])
;CSS_PARSER.data_replace.push([C[0],x?x[0]+"px "+x[1]+"px "+x[2]+"px "+x[3]+"px":"#to_delete"])
}
b=[["#custom_css{top:0}","options_background","css"],["#custom_css_title{top:0}","options_title","css"],["#custom_css_paragraph{top:0}","options_paragraph","css"]]
;var w={options_background:"."+i.cssid,
options_title:"."+i.cssid+" .gt_backdrop_title",
options_paragraph:"."+i.cssid+" .gt_backdrop_content"}
;for(r=0;r<b.length;r++){var C=b[r],x
;if(x=CSS_PARSER.find_data(C[1],C[2])){var k=w[C[1]]
;x=x.replace(/node/g,k)}
CSS_PARSER.data_replace.push([C[0],x||""])}
b=[["#006","options_background","selection_color",0],["#007","options_background","selection_color",1]]
;for(r=0;r<b.length;r++){
var C=b[r],x=CSS_PARSER.find_data(C[1],C[2])
;CSS_PARSER.data_replace.push([C[0],x?x[C[3]]:['rgba(255, 255, 255, 1)','rgba(50, 151, 253, 1)'][C[3]]])
}
b=[["#001","options_background","bg_color"],["#002","options_title","text_color"],["#003","options_title","bg_color"],["#004","options_paragraph","text_color"],["#005","options_paragraph","bg_color"]]
;for(r=0;r<b.length;r++){
var C=b[r],x=CSS_PARSER.find_data(C[1],C[2])
;CSS_PARSER.data_replace.push([C[0],x?"object"==typeof x?x[0]:x:"#to_delete"])
}
V=[[["3001pt","options_background","bt"],["3002pt","options_background","br"],["3003pt","options_background","bb"],["3004pt","options_background","bl"]],[["3005pt","options_title","bt"],["3006pt","options_title","br"],["3007pt","options_title","bb"],["3008pt","options_title","bl"]],[["3009pt","options_paragraph","bt"],["3010pt","options_paragraph","br"],["3011pt","options_paragraph","bb"],["3012pt","options_paragraph","bl"]]]
;CSS_PARSER.replacing_data("borders",V)
;b=[["10pt","options_title","font_size"],["11pt","options_paragraph","font_size"]]
;for(r=0;r<b.length;r++){
var C=b[r],x=CSS_PARSER.find_data(C[1],C[2])
;CSS_PARSER.data_replace.push([C[0],x?x+"px":"#to_delete"])}
b=[["1em","options_title","line_height"],["2em","options_paragraph","line_height"]]
;for(r=0;r<b.length;r++){
var C=b[r],x=CSS_PARSER.find_data(C[1],C[2])
;CSS_PARSER.data_replace.push([C[0],x?x+"em":"#to_delete"])}
var Y=CSS_PARSER.find_data('options_paragraph','items_spacing')
;CSS_PARSER.data_replace.push(['0rem',Y?Y+"rem":'#to_delete'])
;b=[["10000","options_title","font_weight"],["20000","options_paragraph","font_weight"],["left","options_title","align"],["right","options_paragraph","align"]]
;for(r=0;r<b.length;r++){
var C=b[r],x=CSS_PARSER.find_data(C[1],C[2])
;CSS_PARSER.data_replace.push([C[0],x||"#to_delete"])}
var y=CSS_PARSER.find_data("options_background","shadow")
;CSS_PARSER.data_replace.push(["5001pt 5002pt",y?y[6]:"#to_delete"])
;CSS_PARSER.data_replace.push([".preset_cssid","."+i.cssid])
;y=CSS_PARSER.find_data("options_paragraph","links")
;CSS_PARSER.data_replace.push(["1none",y?y[0]:"#to_delete"])
;CSS_PARSER.data_replace.push(["#008",y?y[1]:"#to_delete"])
;if(!CSS_PARSER.find_data("options_background","gt_link")){
var Z=n.match(new RegExp("(?:<link>((?:.*?\r?\n?)*)</link>)+","gim"))
;if(Z){Z[0].split('\n')
;for(var X=0;X<Z.length;X++)n=n.replace(Z[X],"")}}
if(o.is_customizable){txtcolor_for_bg=[]
;for(var Q=CSS_PARSER.find_data("options_background","bg_color"),J=[["options_title","#002"],["options_paragraph","#004"]],r=0;r<J.length;r++){
for(var K=J[r],ee=!1,te=0;te<CSS_PARSER.data_replace.length;te++)CSS_PARSER.data_replace[te][0]==K[1]&&CSS_PARSER.data_replace[te][1]&&"#to_delete"!=CSS_PARSER.data_replace[te][1]&&(ee=!0)
;if(!ee){var ie=CSS_PARSER.find_data(K[0],"bg_color")||Q;if(ie){
"string"!=typeof ie&&(ie=ie.filter(function(e){return null!=e}))
;if(ie.length||"string"==typeof ie){
for(var oe=null,ne=0;ne<txtcolor_for_bg.length;ne++)oe||txtcolor_for_bg[ne][0]!=("string"==typeof ie?ie:ie[0])||(oe=txtcolor_for_bg[ne])
;if(oe)oe=oe[1];else{
oe=get_text_color("string"==typeof ie?ie:ie[0])
;txtcolor_for_bg.push(["string"==typeof ie?ie:ie[0],oe])}
for(var se=0;se<CSS_PARSER.data_replace.length;se++)CSS_PARSER.data_replace[se][0]==K[1]&&CSS_PARSER.data_replace.splice(se,1)
;CSS_PARSER.data_replace.push([K[1],oe])}}}}}break
;case"buttonsgroup":CSS_PARSER.data_replace=[];break
;case"gt_buttonsgroup":CSS_PARSER.data_replace=[]
;E=[["#000","options","colors",0],["#001","options","colors",1],["#003","hover_options","colors",0],["#004","hover_options","colors",1],["#005","active_options","colors",0],["#006","active_options","colors",1]]
;CSS_PARSER.replacing_data("simple_with_index",E)
;pxs=[["1000pt","options","fontsize"]]
;CSS_PARSER.replacing_data("simple",pxs)
;four=[["1022pt","options","radius"],["1023pt","hover_options","radius"],["1024pt","active_options","radius"]]
;CSS_PARSER.replacing_data("four_elements",four,"px")
;var y=CSS_PARSER.find_data("options","shadow")
;CSS_PARSER.data_replace.push(["1002pt 1003pt",y?y[6]:"#to_delete"])
;var y=CSS_PARSER.find_data("hover_options","shadow")
;CSS_PARSER.data_replace.push(["1004pt 1005pt",y?y[6]:"#to_delete"])
;var y=CSS_PARSER.find_data("active_options","shadow")
;CSS_PARSER.data_replace.push(["1006pt 1007pt",y?y[6]:"#to_delete"])
;V=[[["1008pt","options","bt"],["1009pt","options","br"],["1010pt","options","bb"],["1011pt","options","bl"]],[["1012pt","hover_options","bt"],["1013pt","hover_options","br"],["1014pt","hover_options","bb"],["1015pt","hover_options","bl"]],[["1016pt","active_options","bt"],["1017pt","active_options","br"],["1018pt","active_options","bb"],["1019pt","active_options","bl"]]]
;CSS_PARSER.replacing_data("borders",V)
;CSS_PARSER.replacing_data("four_elements",[["1020pt","options","padding"],["1021pt","options","margin"]])
;b=[["#custom_css{top:0}","options","css"],["#custom_css_hover{top:0}","hover_options","css"],["#custom_css_active{top:0}","active_options","css"]]
;var w={options:"."+i.cssid+" li",
hover_options:"."+i.cssid+" li:hover, ."+i.cssid+" .site_pagination:hover, ."+i.cssid+".hovered .site_pagination",
active_options:"."+i.cssid+" li.selected, ."+i.cssid+" .site_pagination.selected, ."+i.cssid+".selected .site_pagination"
};for(r=0;r<b.length;r++){var C=b[r],x
;if(x=CSS_PARSER.find_data(C[1],C[2])){var k=w[C[1]]
;x=x.replace(/node/g,k)}
CSS_PARSER.data_replace.push([C[0],x||""])}
CSS_PARSER.data_replace.push([".preset_cssid","."+i.cssid])}
for(var re="([\\s:\\(,.}]|^)(",ae=0;ae<CSS_PARSER.data_replace.length;ae++){
var le
;re+="("+CSS_PARSER.data_replace[ae][0]+(ae+1==CSS_PARSER.data_replace.length?")":")|")
}re+=")";re=new RegExp(re,"gi")
;n=(n=(n=(n=(n=(n=n.replace(/}/g,"}\n").replace(re,function(){
for(var e=Array.prototype.slice.call(arguments,3),t,i=0,o=e.length;i<o&&t==undefined;i++)e[i]!=undefined&&(t=i)
;return arguments[1]+CSS_PARSER.data_replace[t][1]
})).replace(new RegExp("([^-])color:\\s*rgba\\((\\d+),\\s*(\\d+),\\s*(\\d+),\\s*([\\d\\.]+)\\);?","gi"),"$1color: rgb($2, $3, $4);")).replace(new RegExp("(;|{)","g"),"$1\n")).replace(new RegExp("(})","g"),"\n$1")).replace(new RegExp(".*#to_delete.*\n","g"),"")).replace(/0\.01/gi,"0")
;CSS_PARSER.d={};return n}
function create_custom_css_section_preloaded(e,t,i,o,n){
function s(e){if(!e||!e[6])return{top:0,bottom:0}
;var t=e[6].split(' '),i=parseFloat(t[1])||0,o=parseFloat(t[2])||0,n=parseFloat(t[3])||0,s=.7*o
;return{top:Math.max(0,Math.ceil(-i+n+s)),
bottom:Math.max(0,Math.ceil(i+n+s))}}
var r='.section.'+i+'_'+t,a=20,l=[e.padding[0],0,e.padding[2],0],c=[Math.min(a,e.padding[0]),0,Math.min(a,e.padding[2]),0],d='',p
;d+='\n    .detected_device_desktop '+r+' {\n'
;d+='      padding: '+l.join('px ')+'px;\n';d+='    }\n'
;d+='    .detected_device_mobile '+r+' {\n'
;d+='      padding: '+c.join('px ')+'px;\n';d+='    }\n'
;if(p=e.shadow_enabled){
d+='\n          .detected_device_mobile '+r+' .section_content {\n'
;'header'!=i&&c[0]>0&&(d+='            margin-top: '+c[0]/2+'px;\n')
;'footer'!=i&&c[2]>0&&(d+='            margin-bottom: '+c[2]/2+'px;\n')
;d+='          }\n'}d+='    '+r+' .section_background {\n'
;var h=null;switch(e.background_type){case'color':var u
;d+='      background-color: '+(u=replace_get_color(o,e.background_color))+';\n'
;break;case'gradient':
var f=JSON.parse(replace_get_color(o,JSON.stringify(e.background_gradient))),_
;d+='      background: '+CSS_PARSER.getBackgroundGradient(f[1],f[0],f[2],!1)+';\n'
;break;case'image':
var m=e.background_image,g=e.background_options||[],v=''
;if(m&&m.length){var b=-1!==g.indexOf('parallax')
;-1!==g.indexOf('repeat')?v+='repeat':v+='no-repeat '+(b?'scroll':'fixed')+' center center / '+(b?'150%':'cover')+' transparent'
;d+='\n                background: '+v+';\n';h=m[0]}}
if('foreground_width'==e.width&&n){d+='      width: '+n+'px;\n'
;var y;if(y=e.radius_enabled&&e.radius){
for(var w=[],C=0;C<y.length;C++)w.push(y[C]+'px')
;d+='      border-radius: '+w.join(' ')+';\n'}
}else d+='      width: 100%;\n';d+='    }\n';if(h){
d+='    '+r+" .section_background {background-image: url("+bestImgSrc(h,300,169)+");}\n"
;if(h.url.match(/pixabay.com.*_1920/)){
d+="@media (min-width: 300px) {\n"
;d+='    '+r+" .section_background {background-image: url("+bestImgSrc(h,1280,720)+");}\n"
;d+="}\n"}d+="@media (min-width: 1280px) {\n"
;d+='    '+r+" .section_background {background-image: url("+bestImgSrc(h,1920,1080)+");}\n"
;d+="}\n"}
var p=e.shadow_enabled&&e.shadow,y=e.radius_enabled&&'foreground_width'==e.width&&e.radius
;if(p){d+='\n          '+r+' .section_background:before {\n'
;d+='            content: "";\n'
;d+='            position: absolute;\n'
;d+='            box-shadow: '+replace_get_color(o,p[6])+';\n'
;d+='            top: 0px;\n';d+='            right: 0px;\n'
;d+='            bottom: 0px;\n';d+='            left: 0px;\n'
;if(y){for(var w=[],C=0;C<y.length;C++)w.push(y[C]+'px')
;d+='            border-radius: '+w.join(' ')+';\n'}
d+='          }\n'}if('color'===e.background_filter_type){var u
;if(u=e.background_filter_color){
d+='\n              '+r+' .section_background::after {\n'
;d+='                background-color: '+(u=replace_get_color(o,u))+';\n'
;if(y){for(var w=[],C=0;C<y.length;C++)w.push(y[C]+'px')
;d+='            border-radius: '+w.join(' ')+';\n'}
d+='              }\n'}}var x=e.shadow_enabled?s(e.shadow):{
top:0,bottom:0},k=e.margin_bottom
;!k&&x.bottom>0&&'footer'!=i&&(k=x.bottom);var S=e.margin_top
;!S&&x.top>0&&'header'!=i&&(S=x.top);var $=''
;k>0&&($+='margin-bottom: '+k+'px;')
;S>0&&($+='margin-top: '+S+'px;');if($.length>0){
d+='\n          '+r+' {\n';d+='            '+$+'\n'
;d+='          }\n'}return d}function hexToHSL(e,t){
var i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)
;r=parseInt(i[1],16);g=parseInt(i[2],16);b=parseInt(i[3],16)
;r/=255,g/=255,b/=255
;var o=Math.max(r,g,b),n=Math.min(r,g,b),s,a,l=(o+n)/2
;if(o==n)s=a=0;else{var c=o-n;a=l>.5?c/(2-o-n):c/(o+n)
;switch(o){case r:s=(g-b)/c+(g<b?6:0);break;case g:s=(b-r)/c+2
;break;case b:s=(r-g)/c+4}s/=6}var d=new Object
;d.h=Math.round(360*s);d.s=Math.round(100*a)
;d.l=Math.round(100*l)
;"array"==t?d=[d.h,d.s,d.l]:"string"==t&&(d=Color.hslArrayToString([d.h,d.s,d.l]))
;return d}function hslToHex(e,t,i){e/=360;i/=100;var o,n,s
;if(0===(t/=100))o=n=s=i;else{var r=function(e,t,i){i<0&&(i+=1)
;i>1&&(i-=1)
;return i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e
},a=i<.5?i*(1+t):i+t-i*t,l=2*i-a;o=r(l,a,e+1/3);n=r(l,a,e)
;s=r(l,a,e-1/3)}var c=function(e){
var t=Math.round(255*e).toString(16);return 1===t.length?'0'+t:t
};return c(o)+c(n)+c(s)}function hslToRgb(e,t,i){var o,n,s
;if(e>1||t>1||i>1){e/=360;t/=100;i/=100}if(0==t)o=n=s=i;else{
var r=function c(e,t,i){i<0&&(i+=1);i>1&&(i-=1)
;return i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e
},a=i<.5?i*(1+t):i+t-i*t,l=2*i-a;o=r(l,a,e+1/3);n=r(l,a,e)
;s=r(l,a,e-1/3)}
return[Math.round(255*o),Math.round(255*n),Math.round(255*s)]}
function generateVariances_2(e,t,i){return generateVariances({
base:[e,t,i]})}function generateVariances(e){
var t=5,i=0,o=0,n=10,s=e.base[2],r,a;e.lighten_variances=[]
;e.darken_variances=[];i=s+n*t<=100?n:(100-s)/t;o=s-n*t>=0?n:s/t
;i=Math.round(i);o=Math.round(o);for(r=1;r<t+1;r++){
a=Math.min(Math.round(s+i*r),97);e.lighten_variances.push({
base_hsl:'hsl('+e.base[0]+', '+e.base[1]+'%, '+a+'%)',
base:[e.base[0],e.base[1],a]})}for(r=1;r<t+1;r++){
a=Math.round(s-o*r);e.darken_variances.push({
base_hsl:'hsl('+e.base[0]+', '+e.base[1]+'%, '+a+'%)',
base:[e.base[0],e.base[1],a]})}return e}
function replace_get_color(e,t){
return t.replace(/get_color\(\d,\s?-?\d\)/gi,function(t){
var i=t.match(/-?\d+/g);return get_color(e,i[0],i[1])})}
function get_color(e,t,i,o){var n={}
;if("object"!=typeof e&&e!=undefined){n.index=e;n.pal=v.colors
;n.format=i;n.variance=t}else{
e==undefined?n.pal=v.colors:n.pal=e;n.index=t;n.variance=i
;n.format=o}n.index=parseInt(n.index)||0
;n.variance=parseInt(n.variance)||0
;n.format=n.format||"base_hsl";var s=null,r
;if(0==n.variance)s=n.pal[n.index];else if(n.variance<0){
n.pal[n.index].darken_variances||(n.pal=generateVariances(n.pal))
;s=n.pal[n.index].darken_variances[Math.abs(n.variance)-1]}else{
n.pal[n.index].lighten_variances||(n.pal=generateVariances(n.pal))
;s=n.pal[n.index].lighten_variances[n.variance-1]}
switch(n.format){case"base_hsl":case undefined:r=s.base_hsl
;break;case"array":r=s.base;break;case"hex":
r=hslToHex(s.base[0],s.base[1],s.base[2]);break;case"rgb":
r="rgb("+hslToRgb(s.base[0]/360,s.base[1]/100,s.base[2]/100).toString()+")"
}return r}
function get_text_color(pal,index,variance,coloration,ratio_limit){
var ratio_limit=ratio_limit||3.5,col_rgb_array,color
;"string"==typeof coloration&&(coloration=eval(coloration))
;if(index){color=get_color(pal,index,variance,"array")
;col_rgb_array=hslToRgb(color[0],color[1],color[2])}else{
pal.match(/#/)&&(pal=hexToHSL(pal,"string"))
;if(pal.match(/hsl/)){color=Color.hslToArray(pal)
;col_rgb_array=hslToRgb(color[0],color[1],color[2])
}else if(pal.match(/rgb/)){var c_tmp=pal.match(/\d+/gi)
;col_rgb_array=[c_tmp[0],c_tmp[1],c_tmp[2]]}}
var ratio=contrast(col_rgb_array,[255,255,255]),returned_color
;returned_color=ratio>ratio_limit?coloration?get_color(pal,index,5):"#ffffff":coloration?get_color(pal,index,-5):"#000000"
;return returned_color}function luminanace(e,t,i){
var o=[e,t,i].map(function(e){
return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)})
;return.2126*o[0]+.7152*o[1]+.0722*o[2]}function contrast(e,t){
var i=luminanace(e[0],e[1],e[2])+.05,o=luminanace(t[0],t[1],t[2])+.05,n=i/o
;o>i&&(n=1/n);return Math.float2(n)}function s(){return!0}
function load_site(e,t){var i;window.site=e.site
;window.site.original_package=e.original_package
;window.page_log.push([new Date,"viewer ready event"])
;$("#loadingNode,#loading_sitew").click(function(t){
var i=$(this).attr("id")
;window.open("https://www.sitew.com#uca="+e.utm.campaign+"&us="+e.utm.source+"&um="+e.utm.medium+"&uc="+i+"&ut="+encodeURI(t.target.textContent))
});sigCtl.connect("Model.error",function(e){
console.log("Reloading page (Model load error)",e)
;setTimeout(function(){
window.location="//"+document.location.host+v.getSelectedPage().getUrl()
},5e3)});sigCtl.connect("Ajax.allRetryFailed",function(e){
if('SiteEditor_development'!=window.app_version){
console.log("Reloading page (Ajax all retry failed)",e)
;setTimeout(function(){
window.location="//"+document.location.host+v.getSelectedPage().getUrl()
},5e3)}});Cpt.get_offsets(t.attributes.theme_class)
;$(".component").each(function(e){$(this).css({
left:"-="+Cpt.offset_left,top:"-="+Cpt.offset_top})})
;ThemeConfig=e.theme_config
;presetController=new PresetController;GraphicalType.init()
;v=new Version(e.version_id,t);v.force_no_transition=!0
;v.selectHome();secCtrl=new SecurityController
;NewsletterNotificationController.init()
;v.init_location=location.href
;v.is_sections_system||(footer=new OldFooter)
;if(document.location.hash.length>1){
$(".preloaded_cpt_block_position_css").remove()
;i=v.detectUrlChange()}else i=v.selectPageFromUrl(e.start_page)
;i.then(function(){v.force_no_transition=null
;$(window).scroll($.throttle(100,function(){
if(!v.ignore_scroll_event){var e=v.lastAnchorInView(!0)
;e&&'top'!=e?sigCtl.emit("Menu.selectAnchor",{
pageid:e.getPage().pageid,anchorid:e.data.anchorid
}):sigCtl.emit("Menu.selectPage",{pageid:v.selectedPageFg.pageid
})}}))});v.pages_fg.each(function(e){
v.selectedPageFg!=e&&(v.is_sections_system&&e.sections_preloaded?e.loadSections().then(function(){
e.sections.each(function(e){e.display();e.displayComponents()})
}):!v.is_sections_system&&e.cpts_preloaded&&e.loadComponents().done(function(){
e.cpts.each(function(e){e.display()})}))})
;mobileBar=new MobileBar;backToTop=new BackToTop
;deviceController.viewerSetup();if(!e.preview){
SecurityController.redirection(e.site_type)
;e.trial_warning&&SecurityController.trial_warning()}
$(window).on("popstate",function(e){v.detectUrlChange()})
;site.hash_url_compatible&&setInterval(function(){
v.detectUrlChange()},500)
;if(location.search.match(/capture_id/)||$.bot)sigCtl.emitVariable("User.site_owner",{});else{
setTimeout(function(){e.a_popup&&secCtrl.adult_tb()},510)
;jQuery.ajax({simple_ajax:!0,timeout:5e3,url:e.so_url,
dataType:'jsonp',data:{site:window.location.host},
success:function(e){sigCtl.emitVariable("User.site_owner",e)},
error:function(e){sigCtl.emitVariable("User.site_owner",{})}})
;if(e.stats)if(CookiesBanner.enabled()){
console.log("Tracking: waiting for consent")
;CookiesBanner.ready.then(function(){var e
;CookiesBanner.process_invisible("audience_measurement").allowed.then(function(){
console.log("Tracking: consent received")
;TrackersController.setTrackers(v.trackers||[])})})
}else TrackersController.setTrackers(v.trackers||[])
;$(document).ready(function(){CookiesBanner.display()})}
$(".show_legal").on("click",function(e){var t
;tb_show(null,'/site/get_legal/'+$(this).data("id")+'?alone=1&width='+Math.min(window.innerWidth,1e3)+'&height='+Math.min(window.innerHeight,500)+'&TB_iframe')
;e.preventDefault();return!1})
;$(".show_terms").on("click",function(e){var t
;tb_show(null,'/site/get_terms/'+$(this).data("id")+'?alone=1&width='+Math.min(window.innerWidth,1e3)+'&height='+Math.min(window.innerHeight,500)+'&TB_iframe')
;e.preventDefault();return!1})
;sigCtl.getVariable("User.site_owner",function(t,i){
COVID||"localhost"!=location.host&&!i.owner||$.ajax({
url:"/site/change_package_ribbon",data:{version_id:e.version_id,
current_package:v.site_package},dataType:'json',
success:function(e){e.html&&$(e.html).appendTo($("body"))}})})
;return i}var Class={create:function(){return function(){
this.initialize.apply(this,arguments)}}}
;Object.extend=function(e,t,i){for(var o in t){
i&&e[o]&&(e[i+o]=e[o]);e[o]=t[o]}return e};!function(e,t){
"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){
if(!e.document)throw new Error("jQuery requires a window with a document")
;return t(e)}:t(e)
}("undefined"!=typeof window?window:this,function(e,t){
function i(e){var t=!!e&&"length"in e&&e.length,i=ue.type(e)
;return"function"!==i&&!ue.isWindow(e)&&("array"===i||0===t||"number"==typeof t&&t>0&&t-1 in e)
}function o(e,t,i){
if(ue.isFunction(t))return ue.grep(e,function(e,o){
return!!t.call(e,o,e)!==i})
;if(t.nodeType)return ue.grep(e,function(e){return e===t!==i})
;if("string"==typeof t){if(xe.test(t))return ue.filter(t,e,i)
;t=ue.filter(t,e)}return ue.grep(e,function(e){
return ue.inArray(e,t)>-1!==i})}function n(e,t){do{e=e[t]
}while(e&&1!==e.nodeType);return e}function s(e){var t={}
;ue.each(e.match(ze)||[],function(e,i){t[i]=!0});return t}
function r(){if(oe.addEventListener){
oe.removeEventListener("DOMContentLoaded",a)
;e.removeEventListener("load",a)}else{
oe.detachEvent("onreadystatechange",a);e.detachEvent("onload",a)
}}function a(){
if(oe.addEventListener||"load"===e.event.type||"complete"===oe.readyState){
r();ue.ready()}}function l(e,t,i){
if(i===undefined&&1===e.nodeType){
var o="data-"+t.replace(Ee,"-$1").toLowerCase()
;if("string"==typeof(i=e.getAttribute(o))){try{
i="true"===i||"false"!==i&&("null"===i?null:+i+""===i?+i:Re.test(i)?ue.parseJSON(i):i)
}catch(n){}ue.data(e,t,i)}else i=undefined}return i}
function c(e){var t
;for(t in e)if(("data"!==t||!ue.isEmptyObject(e[t]))&&"toJSON"!==t)return!1
;return!0}function d(e,t,i,o){if(De(e)){
var n,s,r=ue.expando,a=e.nodeType,l=a?ue.cache:e,c=a?e[r]:e[r]&&r
;if(c&&l[c]&&(o||l[c].data)||i!==undefined||"string"!=typeof t){
c||(c=a?e[r]=ie.pop()||ue.guid++:r);l[c]||(l[c]=a?{}:{
toJSON:ue.noop})
;"object"!=typeof t&&"function"!=typeof t||(o?l[c]=ue.extend(l[c],t):l[c].data=ue.extend(l[c].data,t))
;s=l[c];if(!o){s.data||(s.data={});s=s.data}
i!==undefined&&(s[ue.camelCase(t)]=i)
;"string"==typeof t?null==(n=s[t])&&(n=s[ue.camelCase(t)]):n=s
;return n}}}function p(e,t,i){if(De(e)){
var o,n,s=e.nodeType,r=s?ue.cache:e,a=s?e[ue.expando]:ue.expando
;if(r[a]){if(t&&(o=i?r[a]:r[a].data)){
n=(t=ue.isArray(t)?t.concat(ue.map(t,ue.camelCase)):t in o?[t]:(t=ue.camelCase(t))in o?[t]:t.split(" ")).length
;for(;n--;)delete o[t[n]];if(i?!c(o):!ue.isEmptyObject(o))return
}if(!i){delete r[a].data;if(!c(r[a]))return}
s?ue.cleanData([e],!0):pe.deleteExpando||r!=r.window?delete r[a]:r[a]=undefined
}}}function h(e,t,i,o){var n,s=1,r=20,a=o?function(){
return o.cur()}:function(){return ue.css(e,t,"")
},l=a(),c=i&&i[3]||(ue.cssNumber[t]?"":"px"),d=(ue.cssNumber[t]||"px"!==c&&+l)&&He.exec(ue.css(e,t))
;if(d&&d[3]!==c){c=c||d[3];i=i||[];d=+l||1;do{d/=s=s||".5"
;ue.style(e,t,d+c)}while(s!==(s=a()/l)&&1!==s&&--r)}if(i){
d=+d||+l||0;n=i[1]?d+(i[1]+1)*i[2]:+i[2];if(o){o.unit=c
;o.start=d;o.end=n}}return n}function u(e){
var t=qe.split("|"),i=e.createDocumentFragment()
;if(i.createElement)for(;t.length;)i.createElement(t.pop())
;return i}function f(e,t){
var i,o,n=0,s="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):undefined
;if(!s)for(s=[],
i=e.childNodes||e;null!=(o=i[n]);n++)!t||ue.nodeName(o,t)?s.push(o):ue.merge(s,f(o,t))
;return t===undefined||t&&ue.nodeName(e,t)?ue.merge([e],s):s}
function _(e,t){
for(var i,o=0;null!=(i=e[o]);o++)ue._data(i,"globalEval",!t||ue._data(t[o],"globalEval"))
}function m(e){Ue.test(e.type)&&(e.defaultChecked=e.checked)}
function g(e,t,i,o,n){
for(var s,r,a,l,c,d,p,h=e.length,g=u(t),v=[],b=0;b<h;b++)if((r=e[b])||0===r)if("object"===ue.type(r))ue.merge(v,r.nodeType?[r]:r);else if(Ve.test(r)){
l=l||g.appendChild(t.createElement("div"))
;c=(We.exec(r)||["",""])[1].toLowerCase();p=Ge[c]||Ge._default
;l.innerHTML=p[1]+ue.htmlPrefilter(r)+p[2];s=p[0]
;for(;s--;)l=l.lastChild
;!pe.leadingWhitespace&&Fe.test(r)&&v.push(t.createTextNode(Fe.exec(r)[0]))
;if(!pe.tbody){
s=(r="table"!==c||Ye.test(r)?"<table>"!==p[1]||Ye.test(r)?0:l:l.firstChild)&&r.childNodes.length
;for(;s--;)ue.nodeName(d=r.childNodes[s],"tbody")&&!d.childNodes.length&&r.removeChild(d)
}ue.merge(v,l.childNodes);l.textContent=""
;for(;l.firstChild;)l.removeChild(l.firstChild);l=g.lastChild
}else v.push(t.createTextNode(r));l&&g.removeChild(l)
;pe.appendChecked||ue.grep(f(v,"input"),m);b=0
;for(;r=v[b++];)if(o&&ue.inArray(r,o)>-1)n&&n.push(r);else{
a=ue.contains(r.ownerDocument,r);l=f(g.appendChild(r),"script")
;a&&_(l);if(i){s=0;for(;r=l[s++];)Oe.test(r.type||"")&&i.push(r)
}}l=null;return g}function v(){return!0}function b(){return!1}
function y(){try{return oe.activeElement}catch(e){}}
function w(e,t,i,o,n,s){var r,a;if("object"==typeof t){
if("string"!=typeof i){o=o||i;i=undefined}
for(a in t)w(e,a,i,o,t[a],s);return e}if(null==o&&null==n){n=i
;o=i=undefined}else if(null==n)if("string"==typeof i){n=o
;o=undefined}else{n=o;o=i;i=undefined}
if(!1===n)n=b;else if(!n)return e;if(1===s){r=n;(n=function(e){
ue().off(e);return r.apply(this,arguments)
}).guid=r.guid||(r.guid=ue.guid++)}return e.each(function(){
ue.event.add(this,t,n,o,i)})}function C(e,t){
return ue.nodeName(e,"table")&&ue.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e
}function x(e){e.type=(null!==ue.find.attr(e,"type"))+"/"+e.type
;return e}function k(e){var t=st.exec(e.type)
;t?e.type=t[1]:e.removeAttribute("type");return e}
function S(e,t){if(1===t.nodeType&&ue.hasData(e)){
var i,o,n,s=ue._data(e),r=ue._data(t,s),a=s.events;if(a){
delete r.handle;r.events={}
;for(i in a)for(o=0,n=a[i].length;o<n;o++)ue.event.add(t,i,a[i][o])
}r.data&&(r.data=ue.extend({},r.data))}}function $(e,t){
var i,o,n;if(1===t.nodeType){i=t.nodeName.toLowerCase()
;if(!pe.noCloneEvent&&t[ue.expando]){n=ue._data(t)
;for(o in n.events)ue.removeEvent(t,o,n.handle)
;t.removeAttribute(ue.expando)}
if("script"===i&&t.text!==e.text){x(t).text=e.text;k(t)
}else if("object"===i){t.parentNode&&(t.outerHTML=e.outerHTML)
;pe.html5Clone&&e.innerHTML&&!ue.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)
}else if("input"===i&&Ue.test(e.type)){
t.defaultChecked=t.checked=e.checked
;t.value!==e.value&&(t.value=e.value)
}else"option"===i?t.defaultSelected=t.selected=e.defaultSelected:"input"!==i&&"textarea"!==i||(t.defaultValue=e.defaultValue)
}}function T(e,t,i,o){t=se.apply([],t)
;var n,s,r,a,l,c,d=0,p=e.length,h=p-1,u=t[0],_=ue.isFunction(u)
;if(_||p>1&&"string"==typeof u&&!pe.checkClone&&nt.test(u))return e.each(function(n){
var s=e.eq(n);_&&(t[0]=u.call(this,n,s.html()));T(s,t,i,o)})
;if(p){n=(c=g(t,e[0].ownerDocument,!1,e,o)).firstChild
;1===c.childNodes.length&&(c=n);if(n||o){
r=(a=ue.map(f(c,"script"),x)).length;for(;d<p;d++){s=c
;if(d!==h){s=ue.clone(s,!0,!0);r&&ue.merge(a,f(s,"script"))}
i.call(e[d],s,d)}if(r){l=a[a.length-1].ownerDocument;ue.map(a,k)
;for(d=0;d<r;d++){s=a[d]
;Oe.test(s.type||"")&&!ue._data(s,"globalEval")&&ue.contains(l,s)&&(s.src?ue._evalUrl&&ue._evalUrl(s.src):ue.globalEval((s.text||s.textContent||s.innerHTML||"").replace(rt,"")))
}}c=n=null}}return e}function P(e,t,i){
for(var o,n=t?ue.filter(t,e):e,s=0;null!=(o=n[s]);s++){
i||1!==o.nodeType||ue.cleanData(f(o));if(o.parentNode){
i&&ue.contains(o.ownerDocument,o)&&_(f(o,"script"))
;o.parentNode.removeChild(o)}}return e}function z(e,t){
var i=ue(t.createElement(e)).appendTo(t.body),o=ue.css(i[0],"display")
;i.detach();return o}function I(e){var t=oe,i=dt[e];if(!i){
if("none"===(i=z(e,t))||!i){
(t=((ct=(ct||ue("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow||ct[0].contentDocument).document).write()
;t.close();i=z(e,t);ct.detach()}dt[e]=i}return i}
function A(e,t){return{get:function(){
if(!e())return(this.get=t).apply(this,arguments);delete this.get
}}}function D(e){if(e in St)return e
;for(var t=e.charAt(0).toUpperCase()+e.slice(1),i=kt.length;i--;)if((e=kt[i]+t)in St)return e
}function R(e,t){
for(var i,o,n,s=[],r=0,a=e.length;r<a;r++)if((o=e[r]).style){
s[r]=ue._data(o,"olddisplay");i=o.style.display;if(t){
s[r]||"none"!==i||(o.style.display="")
;""===o.style.display&&je(o)&&(s[r]=ue._data(o,"olddisplay",I(o.nodeName)))
}else{n=je(o)
;(i&&"none"!==i||!n)&&ue._data(o,"olddisplay",n?i:ue.css(o,"display"))
}}
for(r=0;r<a;r++)(o=e[r]).style&&(t&&"none"!==o.style.display&&""!==o.style.display||(o.style.display=t?s[r]||"":"none"))
;return e}function E(e,t,i){var o=wt.exec(t)
;return o?Math.max(0,o[1]-(i||0))+(o[2]||"px"):t}
function N(e,t,i,o,n){
for(var s=i===(o?"border":"content")?4:"width"===t?1:0,r=0;s<4;s+=2){
"margin"===i&&(r+=ue.css(e,i+Le[s],!0,n));if(o){
"content"===i&&(r-=ue.css(e,"padding"+Le[s],!0,n))
;"margin"!==i&&(r-=ue.css(e,"border"+Le[s]+"Width",!0,n))}else{
r+=ue.css(e,"padding"+Le[s],!0,n)
;"padding"!==i&&(r+=ue.css(e,"border"+Le[s]+"Width",!0,n))}}
return r}function M(e,t,i){
var o=!0,n="width"===t?e.offsetWidth:e.offsetHeight,s=_t(e),r=pe.boxSizing&&"border-box"===ue.css(e,"boxSizing",!1,s)
;if(n<=0||null==n){((n=mt(e,t,s))<0||null==n)&&(n=e.style[t])
;if(ht.test(n))return n
;o=r&&(pe.boxSizingReliable()||n===e.style[t])
;n=parseFloat(n)||0}
return n+N(e,t,i||(r?"border":"content"),o,s)+"px"}
function H(e,t,i,o,n){return new H.prototype.init(e,t,i,o,n)}
function L(){e.setTimeout(function(){$t=undefined})
;return $t=ue.now()}function j(e,t){var i,o={height:e},n=0
;t=t?1:0;for(;n<4;n+=2-t)o["margin"+(i=Le[n])]=o["padding"+i]=e
;t&&(o.opacity=o.width=e);return o}function B(e,t,i){
for(var o,n=(O.tweeners[t]||[]).concat(O.tweeners["*"]),s=0,r=n.length;s<r;s++)if(o=n[s].call(i,t,e))return o
}function U(e,t,i){
var o,n,s,r,a,l,c,d,p=this,h={},u=e.style,f=e.nodeType&&je(e),_=ue._data(e,"fxshow")
;if(!i.queue){if(null==(a=ue._queueHooks(e,"fx")).unqueued){
a.unqueued=0;l=a.empty.fire;a.empty.fire=function(){
a.unqueued||l()}}a.unqueued++;p.always(function(){
p.always(function(){a.unqueued--
;ue.queue(e,"fx").length||a.empty.fire()})})}
if(1===e.nodeType&&("height"in t||"width"in t)){
i.overflow=[u.overflow,u.overflowX,u.overflowY]
;"inline"===(d="none"===(c=ue.css(e,"display"))?ue._data(e,"olddisplay")||I(e.nodeName):c)&&"none"===ue.css(e,"float")&&(pe.inlineBlockNeedsLayout&&"inline"!==I(e.nodeName)?u.zoom=1:u.display="inline-block")
}if(i.overflow){u.overflow="hidden"
;pe.shrinkWrapBlocks()||p.always(function(){
u.overflow=i.overflow[0];u.overflowX=i.overflow[1]
;u.overflowY=i.overflow[2]})}for(o in t){n=t[o];if(Pt.exec(n)){
delete t[o];s=s||"toggle"===n;if(n===(f?"hide":"show")){
if("show"!==n||!_||_[o]===undefined)continue;f=!0}
h[o]=_&&_[o]||ue.style(e,o)}else c=undefined}
if(ue.isEmptyObject(h))"inline"===("none"===c?I(e.nodeName):c)&&(u.display=c);else{
_?"hidden"in _&&(f=_.hidden):_=ue._data(e,"fxshow",{})
;s&&(_.hidden=!f);f?ue(e).show():p.done(function(){ue(e).hide()
});p.done(function(){var t;ue._removeData(e,"fxshow")
;for(t in h)ue.style(e,t,h[t])});for(o in h){r=B(f?_[o]:0,o,p)
;if(!(o in _)){_[o]=r.start;if(f){r.end=r.start
;r.start="width"===o||"height"===o?1:0}}}}}function W(e,t){
var i,o,n,s,r;for(i in e){n=t[o=ue.camelCase(i)];s=e[i]
;if(ue.isArray(s)){n=s[1];s=e[i]=s[0]}if(i!==o){e[o]=s
;delete e[i]}if((r=ue.cssHooks[o])&&"expand"in r){s=r.expand(s)
;delete e[o];for(i in s)if(!(i in e)){e[i]=s[i];t[i]=n}
}else t[o]=n}}function O(e,t,i){
var o,n,s=0,r=O.prefilters.length,a=ue.Deferred().always(function(){
delete l.elem}),l=function(){if(n)return!1
;for(var t=$t||L(),i=Math.max(0,c.startTime+c.duration-t),o,s=1-(i/c.duration||0),r=0,l=c.tweens.length;r<l;r++)c.tweens[r].run(s)
;a.notifyWith(e,[c,s,i]);if(s<1&&l)return i;a.resolveWith(e,[c])
;return!1},c=a.promise({elem:e,props:ue.extend({},t),
opts:ue.extend(!0,{specialEasing:{},easing:ue.easing._default
},i),originalProperties:t,originalOptions:i,startTime:$t||L(),
duration:i.duration,tweens:[],createTween:function(t,i){
var o=ue.Tween(e,c.opts,t,i,c.opts.specialEasing[t]||c.opts.easing)
;c.tweens.push(o);return o},stop:function(t){
var i=0,o=t?c.tweens.length:0;if(n)return this;n=!0
;for(;i<o;i++)c.tweens[i].run(1);if(t){a.notifyWith(e,[c,1,0])
;a.resolveWith(e,[c,t])}else a.rejectWith(e,[c,t]);return this}
}),d=c.props;W(d,c.opts.specialEasing)
;for(;s<r;s++)if(o=O.prefilters[s].call(c,e,d,c.opts)){
ue.isFunction(o.stop)&&(ue._queueHooks(c.elem,c.opts.queue).stop=ue.proxy(o.stop,o))
;return o}ue.map(d,B,c)
;ue.isFunction(c.opts.start)&&c.opts.start.call(e,c)
;ue.fx.timer(ue.extend(l,{elem:e,anim:c,queue:c.opts.queue}))
;return c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)
}function F(e){return ue.attr(e,"class")||""}function q(e){
return function(t,i){if("string"!=typeof t){i=t;t="*"}
var o,n=0,s=t.toLowerCase().match(ze)||[]
;if(ue.isFunction(i))for(;o=s[n++];)if("+"===o.charAt(0)){
o=o.slice(1)||"*";(e[o]=e[o]||[]).unshift(i)
}else(e[o]=e[o]||[]).push(i)}}function G(e,t,i,o){function n(a){
var l;s[a]=!0;ue.each(e[a]||[],function(e,a){var c=a(t,i,o)
;if("string"==typeof c&&!r&&!s[c]){t.dataTypes.unshift(c);n(c)
;return!1}if(r)return!(l=c)});return l}var s={},r=e===Kt
;return n(t.dataTypes[0])||!s["*"]&&n("*")}function V(e,t){
var i,o,n=ue.ajaxSettings.flatOptions||{}
;for(o in t)t[o]!==undefined&&((n[o]?e:i||(i={}))[o]=t[o])
;i&&ue.extend(!0,e,i);return e}function Y(e,t,i){
for(var o,n,s,r,a=e.contents,l=e.dataTypes;"*"===l[0];){
l.shift()
;n===undefined&&(n=e.mimeType||t.getResponseHeader("Content-Type"))
}if(n)for(r in a)if(a[r]&&a[r].test(n)){l.unshift(r);break}
if(l[0]in i)s=l[0];else{for(r in i){
if(!l[0]||e.converters[r+" "+l[0]]){s=r;break}o||(o=r)}s=s||o}
if(s){s!==l[0]&&l.unshift(s);return i[s]}}function Z(e,t,i,o){
var n,s,r,a,l,c={},d=e.dataTypes.slice()
;if(d[1])for(r in e.converters)c[r.toLowerCase()]=e.converters[r]
;s=d.shift();for(;s;){
e.responseFields[s]&&(i[e.responseFields[s]]=t)
;!l&&o&&e.dataFilter&&(t=e.dataFilter(t,e.dataType));l=s
;if(s=d.shift())if("*"===s)s=l;else if("*"!==l&&l!==s){
if(!(r=c[l+" "+s]||c["* "+s]))for(n in c)if((a=n.split(" "))[1]===s&&(r=c[l+" "+a[0]]||c["* "+a[0]])){
if(!0===r)r=c[n];else if(!0!==c[n]){s=a[0];d.unshift(a[1])}break
}if(!0!==r)if(r&&e.throws)t=r(t);else try{t=r(t)}catch(p){
return{state:"parsererror",
error:r?p:"No conversion from "+l+" to "+s}}}}return{
state:"success",data:t}}function X(e){
return e.style&&e.style.display||ue.css(e,"display")}
function Q(e){if(!ue.contains(e.ownerDocument||oe,e))return!0
;for(;e&&1===e.nodeType;){
if("none"===X(e)||"hidden"===e.type)return!0;e=e.parentNode}
return!1}function J(e,t,i,o){var n
;if(ue.isArray(t))ue.each(t,function(t,n){
i||ni.test(e)?o(e,n):J(e+"["+("object"==typeof n&&null!=n?t:"")+"]",n,i,o)
});else if(i||"object"!==ue.type(t))o(e,t);else for(n in t)J(e+"["+n+"]",t[n],i,o)
}function K(){try{return new e.XMLHttpRequest}catch(t){}}
function ee(){try{
return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}
function te(e){
return ue.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)
}
var ie=[],oe=e.document,ne=ie.slice,se=ie.concat,re=ie.push,ae=ie.indexOf,le={},ce=le.toString,de=le.hasOwnProperty,pe={},he="1.12.4",ue=function(e,t){
return new ue.fn.init(e,t)
},fe=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,_e=/^-ms-/,me=/-([\da-z])/gi,ge=function(e,t){
return t.toUpperCase()};ue.fn=ue.prototype={jquery:he,
constructor:ue,selector:"",length:0,toArray:function(){
return ne.call(this)},get:function(e){
return null!=e?e<0?this[e+this.length]:this[e]:ne.call(this)},
pushStack:function(e){var t=ue.merge(this.constructor(),e)
;t.prevObject=this;t.context=this.context;return t},
each:function(e){return ue.each(this,e)},map:function(e){
return this.pushStack(ue.map(this,function(t,i){
return e.call(t,i,t)}))},slice:function(){
return this.pushStack(ne.apply(this,arguments))},
first:function(){return this.eq(0)},last:function(){
return this.eq(-1)},eq:function(e){
var t=this.length,i=+e+(e<0?t:0)
;return this.pushStack(i>=0&&i<t?[this[i]]:[])},end:function(){
return this.prevObject||this.constructor()},push:re,
sort:ie.sort,splice:ie.splice}
;ue.extend=ue.fn.extend=function(){
var e,t,i,o,n,s,r=arguments[0]||{},a=1,l=arguments.length,c=!1
;if("boolean"==typeof r){c=r;r=arguments[a]||{};a++}
"object"==typeof r||ue.isFunction(r)||(r={});if(a===l){r=this
;a--}for(;a<l;a++)if(null!=(n=arguments[a]))for(o in n){e=r[o]
;if(r!==(i=n[o]))if(c&&i&&(ue.isPlainObject(i)||(t=ue.isArray(i)))){
if(t){t=!1;s=e&&ue.isArray(e)?e:[]
}else s=e&&ue.isPlainObject(e)?e:{};r[o]=ue.extend(c,s,i)
}else i!==undefined&&(r[o]=i)}return r};ue.extend({
expando:"jQuery"+(he+Math.random()).replace(/\D/g,""),
isReady:!0,error:function(e){throw new Error(e)},
noop:function(){},isFunction:function(e){
return"function"===ue.type(e)},
isArray:Array.isArray||function(e){return"array"===ue.type(e)},
isWindow:function(e){return null!=e&&e==e.window},
isNumeric:function(e){var t=e&&e.toString()
;return!ue.isArray(e)&&t-parseFloat(t)+1>=0},
isEmptyObject:function(e){var t;for(t in e)return!1;return!0},
isPlainObject:function(e){var t
;if(!e||"object"!==ue.type(e)||e.nodeType||ue.isWindow(e))return!1
;try{
if(e.constructor&&!de.call(e,"constructor")&&!de.call(e.constructor.prototype,"isPrototypeOf"))return!1
}catch(i){return!1}
if(!pe.ownFirst)for(t in e)return de.call(e,t);for(t in e);
return t===undefined||de.call(e,t)},type:function(e){
return null==e?e+"":"object"==typeof e||"function"==typeof e?le[ce.call(e)]||"object":typeof e
},globalEval:function(t){
t&&ue.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)
},camelCase:function(e){
return e.replace(_e,"ms-").replace(me,ge)},
nodeName:function(e,t){
return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},
each:function(e,t){var o,n=0;if(i(e)){o=e.length
;for(;n<o&&!1!==t.call(e[n],n,e[n]);n++);
}else for(n in e)if(!1===t.call(e[n],n,e[n]))break;return e},
trim:function(e){return null==e?"":(e+"").replace(fe,"")},
makeArray:function(e,t){var o=t||[]
;null!=e&&(i(Object(e))?ue.merge(o,"string"==typeof e?[e]:e):re.call(o,e))
;return o},inArray:function(e,t,i){var o;if(t){
if(ae)return ae.call(t,e,i);o=t.length
;i=i?i<0?Math.max(0,o+i):i:0
;for(;i<o;i++)if(i in t&&t[i]===e)return i}return-1},
merge:function(e,t){
for(var i=+t.length,o=0,n=e.length;o<i;)e[n++]=t[o++]
;if(i!=i)for(;t[o]!==undefined;)e[n++]=t[o++];e.length=n
;return e},grep:function(e,t,i){
for(var o,n=[],s=0,r=e.length,a=!i;s<r;s++)(o=!t(e[s],s))!==a&&n.push(e[s])
;return n},map:function(e,t,o){var n,s,r=0,a=[];if(i(e)){
n=e.length;for(;r<n;r++)null!=(s=t(e[r],r,o))&&a.push(s)
}else for(r in e)null!=(s=t(e[r],r,o))&&a.push(s)
;return se.apply([],a)},guid:1,proxy:function(e,t){var i,o,n
;if("string"==typeof t){n=e[t];t=e;e=n}
if(!ue.isFunction(e))return undefined;i=ne.call(arguments,2)
;(o=function(){
return e.apply(t||this,i.concat(ne.call(arguments)))
}).guid=e.guid=e.guid||ue.guid++;return o},now:function(){
return+new Date},support:pe})
;"function"==typeof Symbol&&(ue.fn[Symbol.iterator]=ie[Symbol.iterator])
;ue.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){
le["[object "+t+"]"]=t.toLowerCase()});var ve=function(e){
function t(e,t,i,o){
var n,s,r,a,l,c,p,u,f=t&&t.ownerDocument,_=t?t.nodeType:9
;i=i||[]
;if("string"!=typeof e||!e||1!==_&&9!==_&&11!==_)return i
;if(!o){(t?t.ownerDocument||t:B)!==D&&A(t);t=t||D;if(E){
if(11!==_&&(c=ge.exec(e)))if(n=c[1]){if(9===_){
if(!(r=t.getElementById(n)))return i;if(r.id===n){i.push(r)
;return i}
}else if(f&&(r=f.getElementById(n))&&L(t,r)&&r.id===n){i.push(r)
;return i}}else{if(c[2]){J.apply(i,t.getElementsByTagName(e))
;return i}
if((n=c[3])&&w.getElementsByClassName&&t.getElementsByClassName){
J.apply(i,t.getElementsByClassName(n));return i}}
if(w.qsa&&!q[e+" "]&&(!N||!N.test(e))){if(1!==_){f=t;u=e
}else if("object"!==t.nodeName.toLowerCase()){
(a=t.getAttribute("id"))?a=a.replace(be,"\\$&"):t.setAttribute("id",a=j)
;s=(p=S(e)).length;l=he.test(a)?"#"+a:"[id='"+a+"']"
;for(;s--;)p[s]=l+" "+h(p[s]);u=p.join(",")
;f=ve.test(e)&&d(t.parentNode)||t}if(u)try{
J.apply(i,f.querySelectorAll(u));return i}catch(m){}finally{
a===j&&t.removeAttribute("id")}}}}
return T(e.replace(ae,"$1"),t,i,o)}function i(){function e(i,o){
t.push(i+" ")>C.cacheLength&&delete e[t.shift()]
;return e[i+" "]=o}var t=[];return e}function o(e){e[j]=!0
;return e}function n(e){var t=D.createElement("div");try{
return!!e(t)}catch(i){return!1}finally{
t.parentNode&&t.parentNode.removeChild(t);t=null}}
function s(e,t){
for(var i=e.split("|"),o=i.length;o--;)C.attrHandle[i[o]]=t}
function r(e,t){
var i=t&&e,o=i&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||V)-(~e.sourceIndex||V)
;if(o)return o;if(i)for(;i=i.nextSibling;)if(i===t)return-1
;return e?1:-1}function a(e){return function(t){var i
;return"input"===t.nodeName.toLowerCase()&&t.type===e}}
function l(e){return function(t){var i=t.nodeName.toLowerCase()
;return("input"===i||"button"===i)&&t.type===e}}function c(e){
return o(function(t){t=+t;return o(function(i,o){
for(var n,s=e([],i.length,t),r=s.length;r--;)i[n=s[r]]&&(i[n]=!(o[n]=i[n]))
})})}function d(e){
return e&&"undefined"!=typeof e.getElementsByTagName&&e}
function p(){}function h(e){
for(var t=0,i=e.length,o="";t<i;t++)o+=e[t].value;return o}
function u(e,t,i){var o=t.dir,n=i&&"parentNode"===o,s=W++
;return t.first?function(t,i,s){
for(;t=t[o];)if(1===t.nodeType||n)return e(t,i,s)
}:function(t,i,r){var a,l,c,d=[U,s];if(r){
for(;t=t[o];)if((1===t.nodeType||n)&&e(t,i,r))return!0
}else for(;t=t[o];)if(1===t.nodeType||n){
if((a=(l=(c=t[j]||(t[j]={}))[t.uniqueID]||(c[t.uniqueID]={}))[o])&&a[0]===U&&a[1]===s)return d[2]=a[2]
;l[o]=d;if(d[2]=e(t,i,r))return!0}}}function f(e){
return e.length>1?function(t,i,o){
for(var n=e.length;n--;)if(!e[n](t,i,o))return!1;return!0}:e[0]}
function _(e,i,o){for(var n=0,s=i.length;n<s;n++)t(e,i[n],o)
;return o}function m(e,t,i,o,n){
for(var s,r=[],a=0,l=e.length,c=null!=t;a<l;a++)if((s=e[a])&&(!i||i(s,o,n))){
r.push(s);c&&t.push(a)}return r}function g(e,t,i,n,s,r){
n&&!n[j]&&(n=g(n));s&&!s[j]&&(s=g(s,r))
;return o(function(o,r,a,l){
var c,d,p,h=[],u=[],f=r.length,g=o||_(t||"*",a.nodeType?[a]:a,[]),v=!e||!o&&t?g:m(g,h,e,a,l),b=i?s||(o?e:f||n)?[]:r:v
;i&&i(v,b,a,l);if(n){c=m(b,u);n(c,[],a,l);d=c.length
;for(;d--;)(p=c[d])&&(b[u[d]]=!(v[u[d]]=p))}if(o){if(s||e){
if(s){c=[];d=b.length;for(;d--;)(p=b[d])&&c.push(v[d]=p)
;s(null,b=[],c,l)}d=b.length
;for(;d--;)(p=b[d])&&(c=s?ee(o,p):h[d])>-1&&(o[c]=!(r[c]=p))}
}else{b=m(b===r?b.splice(f,b.length):b)
;s?s(null,r,b,l):J.apply(r,b)}})}function v(e){
for(var t,i,o,n=e.length,s=C.relative[e[0].type],r=s||C.relative[" "],a=s?1:0,l=u(function(e){
return e===t},r,!0),c=u(function(e){return ee(t,e)>-1
},r,!0),d=[function(e,i,o){
var n=!s&&(o||i!==P)||((t=i).nodeType?l(e,i,o):c(e,i,o));t=null
;return n
}];a<n;a++)if(i=C.relative[e[a].type])d=[u(f(d),i)];else{
if((i=C.filter[e[a].type].apply(null,e[a].matches))[j]){o=++a
;for(;o<n&&!C.relative[e[o].type];o++);
return g(a>1&&f(d),a>1&&h(e.slice(0,a-1).concat({
value:" "===e[a-2].type?"*":""
})).replace(ae,"$1"),i,a<o&&v(e.slice(a,o)),o<n&&v(e=e.slice(o)),o<n&&h(e))
}d.push(i)}return f(d)}function b(e,i){
var n=i.length>0,s=e.length>0,r=function(o,r,a,l,c){
var d,p,h,u=0,f="0",_=o&&[],g=[],v=P,b=o||s&&C.find.TAG("*",c),y=U+=null==v?1:Math.random()||.1,w=b.length
;c&&(P=r===D||r||c);for(;f!==w&&null!=(d=b[f]);f++){if(s&&d){p=0
;if(!r&&d.ownerDocument!==D){A(d);a=!E}
for(;h=e[p++];)if(h(d,r||D,a)){l.push(d);break}c&&(U=y)}if(n){
(d=!h&&d)&&u--;o&&_.push(d)}}u+=f;if(n&&f!==u){p=0
;for(;h=i[p++];)h(_,g,r,a);if(o){
if(u>0)for(;f--;)_[f]||g[f]||(g[f]=X.call(l));g=m(g)}
J.apply(l,g);c&&!o&&g.length>0&&u+i.length>1&&t.uniqueSort(l)}
if(c){U=y;P=v}return _};return n?o(r):r}
var y,w,C,x,k,S,$,T,P,z,I,A,D,R,E,N,M,H,L,j="sizzle"+1*new Date,B=e.document,U=0,W=0,O=i(),F=i(),q=i(),G=function(e,t){
e===t&&(I=!0);return 0
},V=1<<31,Y={}.hasOwnProperty,Z=[],X=Z.pop,Q=Z.push,J=Z.push,K=Z.slice,ee=function(e,t){
for(var i=0,o=e.length;i<o;i++)if(e[i]===t)return i;return-1
},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ie="[\\x20\\t\\r\\n\\f]",oe="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ne="\\["+ie+"*("+oe+")(?:"+ie+"*([*^$|!~]?=)"+ie+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+oe+"))|)"+ie+"*\\]",se=":("+oe+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ne+")*)|.*)\\)|)",re=new RegExp(ie+"+","g"),ae=new RegExp("^"+ie+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ie+"+$","g"),le=new RegExp("^"+ie+"*,"+ie+"*"),ce=new RegExp("^"+ie+"*([>+~]|"+ie+")"+ie+"*"),de=new RegExp("="+ie+"*([^\\]'\"]*?)"+ie+"*\\]","g"),pe=new RegExp(se),he=new RegExp("^"+oe+"$"),ue={
ID:new RegExp("^#("+oe+")"),CLASS:new RegExp("^\\.("+oe+")"),
TAG:new RegExp("^("+oe+"|[*])"),ATTR:new RegExp("^"+ne),
PSEUDO:new RegExp("^"+se),
CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ie+"*(even|odd|(([+-]|)(\\d*)n|)"+ie+"*(?:([+-]|)"+ie+"*(\\d+)|))"+ie+"*\\)|)","i"),
bool:new RegExp("^(?:"+te+")$","i"),
needsContext:new RegExp("^"+ie+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ie+"*((?:-\\d)?\\d*)"+ie+"*\\)|)(?=[^-]|$)","i")
},fe=/^(?:input|select|textarea|button)$/i,_e=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,ge=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ve=/[+~]/,be=/'|\\/g,ye=new RegExp("\\\\([\\da-f]{1,6}"+ie+"?|("+ie+")|.)","ig"),we=function(e,t,i){
var o="0x"+t-65536
;return o!=o||i?t:o<0?String.fromCharCode(o+65536):String.fromCharCode(o>>10|55296,1023&o|56320)
},Ce=function(){A()};try{
J.apply(Z=K.call(B.childNodes),B.childNodes)
;Z[B.childNodes.length].nodeType}catch(xe){J={
apply:Z.length?function(e,t){Q.apply(e,K.call(t))
}:function(e,t){for(var i=e.length,o=0;e[i++]=t[o++];);
e.length=i-1}}}w=t.support={};k=t.isXML=function(e){
var t=e&&(e.ownerDocument||e).documentElement
;return!!t&&"HTML"!==t.nodeName};A=t.setDocument=function(e){
var t,i,o=e?e.ownerDocument||e:B
;if(o===D||9!==o.nodeType||!o.documentElement)return D
;R=(D=o).documentElement;E=!k(D)
;(i=D.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",Ce,!1):i.attachEvent&&i.attachEvent("onunload",Ce))
;w.attributes=n(function(e){e.className="i"
;return!e.getAttribute("className")})
;w.getElementsByTagName=n(function(e){
e.appendChild(D.createComment(""))
;return!e.getElementsByTagName("*").length})
;w.getElementsByClassName=me.test(D.getElementsByClassName)
;w.getById=n(function(e){R.appendChild(e).id=j
;return!D.getElementsByName||!D.getElementsByName(j).length})
;if(w.getById){C.find.ID=function(e,t){
if("undefined"!=typeof t.getElementById&&E){
var i=t.getElementById(e);return i?[i]:[]}}
;C.filter.ID=function(e){var t=e.replace(ye,we)
;return function(e){return e.getAttribute("id")===t}}}else{
delete C.find.ID;C.filter.ID=function(e){var t=e.replace(ye,we)
;return function(e){
var i="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id")
;return i&&i.value===t}}}
C.find.TAG=w.getElementsByTagName?function(e,t){
return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0
}:function(e,t){var i,o=[],n=0,s=t.getElementsByTagName(e)
;if("*"===e){for(;i=s[n++];)1===i.nodeType&&o.push(i);return o}
return s};C.find.CLASS=w.getElementsByClassName&&function(e,t){
if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)
};M=[];N=[];if(w.qsa=me.test(D.querySelectorAll)){n(function(e){
R.appendChild(e).innerHTML="<a id='"+j+"'></a><select id='"+j+"-\r\\' msallowcapture=''><option selected=''></option></select>"
;e.querySelectorAll("[msallowcapture^='']").length&&N.push("[*^$]="+ie+"*(?:''|\"\")")
;e.querySelectorAll("[selected]").length||N.push("\\["+ie+"*(?:value|"+te+")")
;e.querySelectorAll("[id~="+j+"-]").length||N.push("~=")
;e.querySelectorAll(":checked").length||N.push(":checked")
;e.querySelectorAll("a#"+j+"+*").length||N.push(".#.+[+~]")})
;n(function(e){var t=D.createElement("input")
;t.setAttribute("type","hidden")
;e.appendChild(t).setAttribute("name","D")
;e.querySelectorAll("[name=d]").length&&N.push("name"+ie+"*[*^$|!~]?=")
;e.querySelectorAll(":enabled").length||N.push(":enabled",":disabled")
;e.querySelectorAll("*,:x");N.push(",.*:")})}
(w.matchesSelector=me.test(H=R.matches||R.webkitMatchesSelector||R.mozMatchesSelector||R.oMatchesSelector||R.msMatchesSelector))&&n(function(e){
w.disconnectedMatch=H.call(e,"div");H.call(e,"[s!='']:x")
;M.push("!=",se)});N=N.length&&new RegExp(N.join("|"))
;M=M.length&&new RegExp(M.join("|"))
;t=me.test(R.compareDocumentPosition)
;L=t||me.test(R.contains)?function(e,t){
var i=9===e.nodeType?e.documentElement:e,o=t&&t.parentNode
;return e===o||!(!o||1!==o.nodeType||!(i.contains?i.contains(o):e.compareDocumentPosition&&16&e.compareDocumentPosition(o)))
}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
;return!1};G=t?function(e,t){if(e===t){I=!0;return 0}
var i=!e.compareDocumentPosition-!t.compareDocumentPosition
;return i||(1&(i=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!w.sortDetached&&t.compareDocumentPosition(e)===i?e===D||e.ownerDocument===B&&L(B,e)?-1:t===D||t.ownerDocument===B&&L(B,t)?1:z?ee(z,e)-ee(z,t):0:4&i?-1:1)
}:function(e,t){if(e===t){I=!0;return 0}
var i,o=0,n=e.parentNode,s=t.parentNode,a=[e],l=[t]
;if(!n||!s)return e===D?-1:t===D?1:n?-1:s?1:z?ee(z,e)-ee(z,t):0
;if(n===s)return r(e,t);i=e;for(;i=i.parentNode;)a.unshift(i)
;i=t;for(;i=i.parentNode;)l.unshift(i);for(;a[o]===l[o];)o++
;return o?r(a[o],l[o]):a[o]===B?-1:l[o]===B?1:0};return D}
;t.matches=function(e,i){return t(e,null,null,i)}
;t.matchesSelector=function(e,i){(e.ownerDocument||e)!==D&&A(e)
;i=i.replace(de,"='$1']")
;if(w.matchesSelector&&E&&!q[i+" "]&&(!M||!M.test(i))&&(!N||!N.test(i)))try{
var o=H.call(e,i)
;if(o||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return o
}catch(xe){}return t(i,D,null,[e]).length>0}
;t.contains=function(e,t){(e.ownerDocument||e)!==D&&A(e)
;return L(e,t)};t.attr=function(e,t){
(e.ownerDocument||e)!==D&&A(e)
;var i=C.attrHandle[t.toLowerCase()],o=i&&Y.call(C.attrHandle,t.toLowerCase())?i(e,t,!E):undefined
;return o!==undefined?o:w.attributes||!E?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null
};t.error=function(e){
throw new Error("Syntax error, unrecognized expression: "+e)}
;t.uniqueSort=function(e){var t,i=[],o=0,n=0
;I=!w.detectDuplicates;z=!w.sortStable&&e.slice(0);e.sort(G)
;if(I){for(;t=e[n++];)t===e[n]&&(o=i.push(n))
;for(;o--;)e.splice(i[o],1)}z=null;return e}
;x=t.getText=function(e){var t,i="",o=0,n=e.nodeType;if(n){
if(1===n||9===n||11===n){
if("string"==typeof e.textContent)return e.textContent
;for(e=e.firstChild;e;e=e.nextSibling)i+=x(e)
}else if(3===n||4===n)return e.nodeValue
}else for(;t=e[o++];)i+=x(t);return i};(C=t.selectors={
cacheLength:50,createPseudo:o,match:ue,attrHandle:{},find:{},
relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"
},"+":{dir:"previousSibling",first:!0},"~":{
dir:"previousSibling"}},preFilter:{ATTR:function(e){
e[1]=e[1].replace(ye,we)
;e[3]=(e[3]||e[4]||e[5]||"").replace(ye,we)
;"~="===e[2]&&(e[3]=" "+e[3]+" ");return e.slice(0,4)},
CHILD:function(e){e[1]=e[1].toLowerCase()
;if("nth"===e[1].slice(0,3)){e[3]||t.error(e[0])
;e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3]))
;e[5]=+(e[7]+e[8]||"odd"===e[3])}else e[3]&&t.error(e[0])
;return e},PSEUDO:function(e){var t,i=!e[6]&&e[2]
;if(ue.CHILD.test(e[0]))return null
;if(e[3])e[2]=e[4]||e[5]||"";else if(i&&pe.test(i)&&(t=S(i,!0))&&(t=i.indexOf(")",i.length-t)-i.length)){
e[0]=e[0].slice(0,t);e[2]=i.slice(0,t)}return e.slice(0,3)}},
filter:{TAG:function(e){var t=e.replace(ye,we).toLowerCase()
;return"*"===e?function(){return!0}:function(e){
return e.nodeName&&e.nodeName.toLowerCase()===t}},
CLASS:function(e){var t=O[e+" "]
;return t||(t=new RegExp("(^|"+ie+")"+e+"("+ie+"|$)"))&&O(e,function(e){
return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")
})},ATTR:function(e,i,o){return function(n){var s=t.attr(n,e)
;if(null==s)return"!="===i;if(!i)return!0;s+=""
;return"="===i?s===o:"!="===i?s!==o:"^="===i?o&&0===s.indexOf(o):"*="===i?o&&s.indexOf(o)>-1:"$="===i?o&&s.slice(-o.length)===o:"~="===i?(" "+s.replace(re," ")+" ").indexOf(o)>-1:"|="===i&&(s===o||s.slice(0,o.length+1)===o+"-")
}},CHILD:function(e,t,i,o,n){
var s="nth"!==e.slice(0,3),r="last"!==e.slice(-4),a="of-type"===t
;return 1===o&&0===n?function(e){return!!e.parentNode
}:function(t,i,l){
var c,d,p,h,u,f,_=s!==r?"nextSibling":"previousSibling",m=t.parentNode,g=a&&t.nodeName.toLowerCase(),v=!l&&!a,b=!1
;if(m){if(s){for(;_;){h=t
;for(;h=h[_];)if(a?h.nodeName.toLowerCase()===g:1===h.nodeType)return!1
;f=_="only"===e&&!f&&"nextSibling"}return!0}
f=[r?m.firstChild:m.lastChild];if(r&&v){
b=(u=(c=(d=(p=(h=m)[j]||(h[j]={}))[h.uniqueID]||(p[h.uniqueID]={}))[e]||[])[0]===U&&c[1])&&c[2]
;h=u&&m.childNodes[u]
;for(;h=++u&&h&&h[_]||(b=u=0)||f.pop();)if(1===h.nodeType&&++b&&h===t){
d[e]=[U,u,b];break}}else{
v&&(b=u=(c=(d=(p=(h=t)[j]||(h[j]={}))[h.uniqueID]||(p[h.uniqueID]={}))[e]||[])[0]===U&&c[1])
;if(!1===b)for(;h=++u&&h&&h[_]||(b=u=0)||f.pop();)if((a?h.nodeName.toLowerCase()===g:1===h.nodeType)&&++b){
v&&((d=(p=h[j]||(h[j]={}))[h.uniqueID]||(p[h.uniqueID]={}))[e]=[U,b])
;if(h===t)break}}return(b-=n)===o||b%o==0&&b/o>=0}}},
PSEUDO:function(e,i){
var n,s=C.pseudos[e]||C.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e)
;if(s[j])return s(i);if(s.length>1){n=[e,e,"",i]
;return C.setFilters.hasOwnProperty(e.toLowerCase())?o(function(e,t){
for(var o,n=s(e,i),r=n.length;r--;)e[o=ee(e,n[r])]=!(t[o]=n[r])
}):function(e){return s(e,0,n)}}return s}},pseudos:{
not:o(function(e){var t=[],i=[],n=$(e.replace(ae,"$1"))
;return n[j]?o(function(e,t,i,o){
for(var s,r=n(e,null,o,[]),a=e.length;a--;)(s=r[a])&&(e[a]=!(t[a]=s))
}):function(e,o,s){t[0]=e;n(t,null,s,i);t[0]=null;return!i.pop()
}}),has:o(function(e){return function(i){return t(e,i).length>0}
}),contains:o(function(e){e=e.replace(ye,we);return function(t){
return(t.textContent||t.innerText||x(t)).indexOf(e)>-1}}),
lang:o(function(e){
he.test(e||"")||t.error("unsupported lang: "+e)
;e=e.replace(ye,we).toLowerCase();return function(t){var i;do{
if(i=E?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(i=i.toLowerCase())===e||0===i.indexOf(e+"-")
}while((t=t.parentNode)&&1===t.nodeType);return!1}}),
target:function(t){var i=e.location&&e.location.hash
;return i&&i.slice(1)===t.id},root:function(e){return e===R},
focus:function(e){
return e===D.activeElement&&(!D.hasFocus||D.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
},enabled:function(e){return!1===e.disabled},
disabled:function(e){return!0===e.disabled},checked:function(e){
var t=e.nodeName.toLowerCase()
;return"input"===t&&!!e.checked||"option"===t&&!!e.selected},
selected:function(e){e.parentNode&&e.parentNode.selectedIndex
;return!0===e.selected},empty:function(e){
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
;return!0},parent:function(e){return!C.pseudos.empty(e)},
header:function(e){return _e.test(e.nodeName)},
input:function(e){return fe.test(e.nodeName)},
button:function(e){var t=e.nodeName.toLowerCase()
;return"input"===t&&"button"===e.type||"button"===t},
text:function(e){var t
;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())
},first:c(function(){return[0]}),last:c(function(e,t){
return[t-1]}),eq:c(function(e,t,i){return[i<0?i+t:i]}),
even:c(function(e,t){for(var i=0;i<t;i+=2)e.push(i);return e}),
odd:c(function(e,t){for(var i=1;i<t;i+=2)e.push(i);return e}),
lt:c(function(e,t,i){for(var o=i<0?i+t:i;--o>=0;)e.push(o)
;return e}),gt:c(function(e,t,i){
for(var o=i<0?i+t:i;++o<t;)e.push(o);return e})}
}).pseudos.nth=C.pseudos.eq;for(y in{radio:!0,checkbox:!0,
file:!0,password:!0,image:!0})C.pseudos[y]=a(y);for(y in{
submit:!0,reset:!0})C.pseudos[y]=l(y)
;p.prototype=C.filters=C.pseudos;C.setFilters=new p
;S=t.tokenize=function(e,i){var o,n,s,r,a,l,c,d=F[e+" "]
;if(d)return i?0:d.slice(0);a=e;l=[];c=C.preFilter;for(;a;){
if(!o||(n=le.exec(a))){n&&(a=a.slice(n[0].length)||a)
;l.push(s=[])}o=!1;if(n=ce.exec(a)){o=n.shift();s.push({value:o,
type:n[0].replace(ae," ")});a=a.slice(o.length)}
for(r in C.filter)if((n=ue[r].exec(a))&&(!c[r]||(n=c[r](n)))){
o=n.shift();s.push({value:o,type:r,matches:n})
;a=a.slice(o.length)}if(!o)break}
return i?a.length:a?t.error(e):F(e,l).slice(0)}
;$=t.compile=function(e,t){var i,o=[],n=[],s=q[e+" "];if(!s){
t||(t=S(e));i=t.length
;for(;i--;)(s=v(t[i]))[j]?o.push(s):n.push(s)
;(s=q(e,b(n,o))).selector=e}return s}
;T=t.select=function(e,t,i,o){
var n,s,r,a,l,c="function"==typeof e&&e,p=!o&&S(e=c.selector||e)
;i=i||[];if(1===p.length){
if((s=p[0]=p[0].slice(0)).length>2&&"ID"===(r=s[0]).type&&w.getById&&9===t.nodeType&&E&&C.relative[s[1].type]){
if(!(t=(C.find.ID(r.matches[0].replace(ye,we),t)||[])[0]))return i
;c&&(t=t.parentNode);e=e.slice(s.shift().value.length)}
n=ue.needsContext.test(e)?0:s.length;for(;n--;){r=s[n]
;if(C.relative[a=r.type])break
;if((l=C.find[a])&&(o=l(r.matches[0].replace(ye,we),ve.test(s[0].type)&&d(t.parentNode)||t))){
s.splice(n,1);if(!(e=o.length&&h(s))){J.apply(i,o);return i}
break}}}(c||$(e,p))(o,t,!E,i,!t||ve.test(e)&&d(t.parentNode)||t)
;return i};w.sortStable=j.split("").sort(G).join("")===j
;w.detectDuplicates=!!I;A();w.sortDetached=n(function(e){
return 1&e.compareDocumentPosition(D.createElement("div"))})
;n(function(e){e.innerHTML="<a href='#'></a>"
;return"#"===e.firstChild.getAttribute("href")
})||s("type|href|height|width",function(e,t,i){
if(!i)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})
;w.attributes&&n(function(e){e.innerHTML="<input/>"
;e.firstChild.setAttribute("value","")
;return""===e.firstChild.getAttribute("value")
})||s("value",function(e,t,i){
if(!i&&"input"===e.nodeName.toLowerCase())return e.defaultValue
});n(function(e){return null==e.getAttribute("disabled")
})||s(te,function(e,t,i){var o
;if(!i)return!0===e[t]?t.toLowerCase():(o=e.getAttributeNode(t))&&o.specified?o.value:null
});return t}(e);ue.find=ve;ue.expr=ve.selectors
;ue.expr[":"]=ue.expr.pseudos
;ue.uniqueSort=ue.unique=ve.uniqueSort;ue.text=ve.getText
;ue.isXMLDoc=ve.isXML;ue.contains=ve.contains
;var be=function(e,t,i){
for(var o=[],n=i!==undefined;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){
if(n&&ue(e).is(i))break;o.push(e)}return o},ye=function(e,t){
for(var i=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&i.push(e)
;return i
},we=ue.expr.match.needsContext,Ce=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,xe=/^.[^:#\[\.,]*$/
;ue.filter=function(e,t,i){var o=t[0];i&&(e=":not("+e+")")
;return 1===t.length&&1===o.nodeType?ue.find.matchesSelector(o,e)?[o]:[]:ue.find.matches(e,ue.grep(t,function(e){
return 1===e.nodeType}))};ue.fn.extend({find:function(e){
var t,i=[],o=this,n=o.length
;if("string"!=typeof e)return this.pushStack(ue(e).filter(function(){
for(t=0;t<n;t++)if(ue.contains(o[t],this))return!0}))
;for(t=0;t<n;t++)ue.find(e,o[t],i)
;(i=this.pushStack(n>1?ue.unique(i):i)).selector=this.selector?this.selector+" "+e:e
;return i},filter:function(e){
return this.pushStack(o(this,e||[],!1))},not:function(e){
return this.pushStack(o(this,e||[],!0))},is:function(e){
return!!o(this,"string"==typeof e&&we.test(e)?ue(e):e||[],!1).length
}});var ke,Se=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,$e
;(ue.fn.init=function(e,t,i){var o,n;if(!e)return this;i=i||ke
;if("string"==typeof e){
if(!(o="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:Se.exec(e))||!o[1]&&t)return!t||t.jquery?(t||i).find(e):this.constructor(t).find(e)
;if(o[1]){t=t instanceof ue?t[0]:t
;ue.merge(this,ue.parseHTML(o[1],t&&t.nodeType?t.ownerDocument||t:oe,!0))
;if(Ce.test(o[1])&&ue.isPlainObject(t))for(o in t)ue.isFunction(this[o])?this[o](t[o]):this.attr(o,t[o])
;return this}if((n=oe.getElementById(o[2]))&&n.parentNode){
if(n.id!==o[2])return ke.find(e);this.length=1;this[0]=n}
this.context=oe;this.selector=e;return this}if(e.nodeType){
this.context=this[0]=e;this.length=1;return this}
if(ue.isFunction(e))return"undefined"!=typeof i.ready?i.ready(e):e(ue)
;if(e.selector!==undefined){this.selector=e.selector
;this.context=e.context}return ue.makeArray(e,this)
}).prototype=ue.fn;ke=ue(oe)
;var Te=/^(?:parents|prev(?:Until|All))/,Pe={children:!0,
contents:!0,next:!0,prev:!0};ue.fn.extend({has:function(e){
var t,i=ue(e,this),o=i.length;return this.filter(function(){
for(t=0;t<o;t++)if(ue.contains(this,i[t]))return!0})},
closest:function(e,t){
for(var i,o=0,n=this.length,s=[],r=we.test(e)||"string"!=typeof e?ue(e,t||this.context):0;o<n;o++)for(i=this[o];i&&i!==t;i=i.parentNode)if(i.nodeType<11&&(r?r.index(i)>-1:1===i.nodeType&&ue.find.matchesSelector(i,e))){
s.push(i);break}
return this.pushStack(s.length>1?ue.uniqueSort(s):s)},
index:function(e){
return e?"string"==typeof e?ue.inArray(this[0],ue(e)):ue.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(e,t){
return this.pushStack(ue.uniqueSort(ue.merge(this.get(),ue(e,t))))
},addBack:function(e){
return this.add(null==e?this.prevObject:this.prevObject.filter(e))
}});ue.each({parent:function(e){var t=e.parentNode
;return t&&11!==t.nodeType?t:null},parents:function(e){
return be(e,"parentNode")},parentsUntil:function(e,t,i){
return be(e,"parentNode",i)},next:function(e){
return n(e,"nextSibling")},prev:function(e){
return n(e,"previousSibling")},nextAll:function(e){
return be(e,"nextSibling")},prevAll:function(e){
return be(e,"previousSibling")},nextUntil:function(e,t,i){
return be(e,"nextSibling",i)},prevUntil:function(e,t,i){
return be(e,"previousSibling",i)},siblings:function(e){
return ye((e.parentNode||{}).firstChild,e)},
children:function(e){return ye(e.firstChild)},
contents:function(e){
return ue.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:ue.merge([],e.childNodes)
}},function(e,t){ue.fn[e]=function(i,o){var n=ue.map(this,t,i)
;"Until"!==e.slice(-5)&&(o=i)
;o&&"string"==typeof o&&(n=ue.filter(o,n));if(this.length>1){
Pe[e]||(n=ue.uniqueSort(n));Te.test(e)&&(n=n.reverse())}
return this.pushStack(n)}});var ze=/\S+/g,Ie,Ae
;ue.Callbacks=function(e){
e="string"==typeof e?s(e):ue.extend({},e)
;var t,i,o,n,r=[],a=[],l=-1,c=function(){n=e.once;o=t=!0
;for(;a.length;l=-1){i=a.shift()
;for(;++l<r.length;)if(!1===r[l].apply(i[0],i[1])&&e.stopOnFalse){
l=r.length;i=!1}}e.memory||(i=!1);t=!1;n&&(r=i?[]:"")},d={
add:function(){if(r){if(i&&!t){l=r.length-1;a.push(i)}
!function o(t){ue.each(t,function(t,i){
ue.isFunction(i)?e.unique&&d.has(i)||r.push(i):i&&i.length&&"string"!==ue.type(i)&&o(i)
})}(arguments);i&&!t&&c()}return this},remove:function(){
ue.each(arguments,function(e,t){
for(var i;(i=ue.inArray(t,r,i))>-1;){r.splice(i,1);i<=l&&l--}})
;return this},has:function(e){
return e?ue.inArray(e,r)>-1:r.length>0},empty:function(){
r&&(r=[]);return this},disable:function(){n=a=[];r=i=""
;return this},disabled:function(){return!r},lock:function(){n=!0
;i||d.disable();return this},locked:function(){return!!n},
fireWith:function(e,i){if(!n){i=[e,(i=i||[]).slice?i.slice():i]
;a.push(i);t||c()}return this},fire:function(){
d.fireWith(this,arguments);return this},fired:function(){
return!!o}};return d};ue.extend({Deferred:function(e){
var t=[["resolve","done",ue.Callbacks("once memory"),"resolved"],["reject","fail",ue.Callbacks("once memory"),"rejected"],["notify","progress",ue.Callbacks("memory")]],i="pending",o={
state:function(){return i},always:function(){
n.done(arguments).fail(arguments);return this},then:function(){
var e=arguments;return ue.Deferred(function(i){
ue.each(t,function(t,s){var r=ue.isFunction(e[t])&&e[t]
;n[s[1]](function(){var e=r&&r.apply(this,arguments)
;e&&ue.isFunction(e.promise)?e.promise().progress(i.notify).done(i.resolve).fail(i.reject):i[s[0]+"With"](this===o?i.promise():this,r?[e]:arguments)
})});e=null}).promise()},promise:function(e){
return null!=e?ue.extend(e,o):o}},n={};o.pipe=o.then
;ue.each(t,function(e,s){var r=s[2],a=s[3];o[s[1]]=r.add
;a&&r.add(function(){i=a},t[1^e][2].disable,t[2][2].lock)
;n[s[0]]=function(){n[s[0]+"With"](this===n?o:this,arguments)
;return this};n[s[0]+"With"]=r.fireWith});o.promise(n)
;e&&e.call(n,n);return n},when:function(e){
var t=0,i=ne.call(arguments),o=i.length,n=1!==o||e&&ue.isFunction(e.promise)?o:0,s=1===n?e:ue.Deferred(),r=function(e,t,i){
return function(o){t[e]=this
;i[e]=arguments.length>1?ne.call(arguments):o
;i===a?s.notifyWith(t,i):--n||s.resolveWith(t,i)}},a,l,c
;if(o>1){a=new Array(o);l=new Array(o);c=new Array(o)
;for(;t<o;t++)i[t]&&ue.isFunction(i[t].promise)?i[t].promise().progress(r(t,l,a)).done(r(t,c,i)).fail(s.reject):--n
}n||s.resolveWith(c,i);return s.promise()}})
;ue.fn.ready=function(e){ue.ready.promise().done(e);return this}
;ue.extend({isReady:!1,readyWait:1,holdReady:function(e){
e?ue.readyWait++:ue.ready(!0)},ready:function(e){
if(!0===e?!--ue.readyWait:!ue.isReady){ue.isReady=!0
;if(!(!0!==e&&--ue.readyWait>0)){Ie.resolveWith(oe,[ue])
;if(ue.fn.triggerHandler){ue(oe).triggerHandler("ready")
;ue(oe).off("ready")}}}}});ue.ready.promise=function(t){if(!Ie){
Ie=ue.Deferred()
;if("complete"===oe.readyState||"loading"!==oe.readyState&&!oe.documentElement.doScroll)e.setTimeout(ue.ready);else if(oe.addEventListener){
oe.addEventListener("DOMContentLoaded",a)
;e.addEventListener("load",a)}else{
oe.attachEvent("onreadystatechange",a);e.attachEvent("onload",a)
;var i=!1;try{i=null==e.frameElement&&oe.documentElement
}catch(o){}i&&i.doScroll&&function t(){if(!ue.isReady){try{
i.doScroll("left")}catch(o){return e.setTimeout(t,50)}r()
;ue.ready()}}()}}return Ie.promise(t)};ue.ready.promise()
;for(Ae in ue(pe))break;pe.ownFirst="0"===Ae
;pe.inlineBlockNeedsLayout=!1;ue(function(){var e,t,i,o
;if((i=oe.getElementsByTagName("body")[0])&&i.style){
t=oe.createElement("div")
;(o=oe.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px"
;i.appendChild(o).appendChild(t)
;if("undefined"!=typeof t.style.zoom){
t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"
;pe.inlineBlockNeedsLayout=e=3===t.offsetWidth
;e&&(i.style.zoom=1)}i.removeChild(o)}});!function(){
var e=oe.createElement("div");pe.deleteExpando=!0;try{
delete e.test}catch(t){pe.deleteExpando=!1}e=null}()
;var De=function(e){
var t=ue.noData[(e.nodeName+" ").toLowerCase()],i=+e.nodeType||1
;return(1===i||9===i)&&(!t||!0!==t&&e.getAttribute("classid")===t)
},Re=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ee=/([A-Z])/g,Ne
;ue.extend({cache:{},noData:{"applet ":!0,"embed ":!0,
"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
hasData:function(e){
return!!(e=e.nodeType?ue.cache[e[ue.expando]]:e[ue.expando])&&!c(e)
},data:function(e,t,i){return d(e,t,i)},
removeData:function(e,t){return p(e,t)},_data:function(e,t,i){
return d(e,t,i,!0)},_removeData:function(e,t){return p(e,t,!0)}
});ue.fn.extend({data:function(e,t){
var i,o,n,s=this[0],r=s&&s.attributes;if(e===undefined){
if(this.length){n=ue.data(s)
;if(1===s.nodeType&&!ue._data(s,"parsedAttrs")){i=r.length
;for(;i--;)r[i]&&0===(o=r[i].name).indexOf("data-")&&l(s,o=ue.camelCase(o.slice(5)),n[o])
;ue._data(s,"parsedAttrs",!0)}}return n}
return"object"==typeof e?this.each(function(){ue.data(this,e)
}):arguments.length>1?this.each(function(){ue.data(this,e,t)
}):s?l(s,e,ue.data(s,e)):undefined},removeData:function(e){
return this.each(function(){ue.removeData(this,e)})}})
;ue.extend({queue:function(e,t,i){var o;if(e){
t=(t||"fx")+"queue";o=ue._data(e,t)
;i&&(!o||ue.isArray(i)?o=ue._data(e,t,ue.makeArray(i)):o.push(i))
;return o||[]}},dequeue:function(e,t){t=t||"fx"
;var i=ue.queue(e,t),o=i.length,n=i.shift(),s=ue._queueHooks(e,t),r=function(){
ue.dequeue(e,t)};if("inprogress"===n){n=i.shift();o--}if(n){
"fx"===t&&i.unshift("inprogress");delete s.stop;n.call(e,r,s)}
!o&&s&&s.empty.fire()},_queueHooks:function(e,t){
var i=t+"queueHooks";return ue._data(e,i)||ue._data(e,i,{
empty:ue.Callbacks("once memory").add(function(){
ue._removeData(e,t+"queue");ue._removeData(e,i)})})}})
;ue.fn.extend({queue:function(e,t){var i=2
;if("string"!=typeof e){t=e;e="fx";i--}
return arguments.length<i?ue.queue(this[0],e):t===undefined?this:this.each(function(){
var i=ue.queue(this,e,t);ue._queueHooks(this,e)
;"fx"===e&&"inprogress"!==i[0]&&ue.dequeue(this,e)})},
dequeue:function(e){return this.each(function(){
ue.dequeue(this,e)})},clearQueue:function(e){
return this.queue(e||"fx",[])},promise:function(e,t){
var i,o=1,n=ue.Deferred(),s=this,r=this.length,a=function(){
--o||n.resolveWith(s,[s])};if("string"!=typeof e){t=e
;e=undefined}e=e||"fx"
;for(;r--;)if((i=ue._data(s[r],e+"queueHooks"))&&i.empty){o++
;i.empty.add(a)}a();return n.promise(t)}})
;pe.shrinkWrapBlocks=function(){if(null!=Ne)return Ne;Ne=!1
;var e,t,i;if((t=oe.getElementsByTagName("body")[0])&&t.style){
e=oe.createElement("div")
;(i=oe.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px"
;t.appendChild(i).appendChild(e)
;if("undefined"!=typeof e.style.zoom){
e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"
;e.appendChild(oe.createElement("div")).style.width="5px"
;Ne=3!==e.offsetWidth}t.removeChild(i);return Ne}}
;var Me=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,He=new RegExp("^(?:([+-])=|)("+Me+")([a-z%]*)$","i"),Le=["Top","Right","Bottom","Left"],je=function(e,t){
e=t||e
;return"none"===ue.css(e,"display")||!ue.contains(e.ownerDocument,e)
},Be=function(e,t,i,o,n,s,r){var a=0,l=e.length,c=null==i
;if("object"===ue.type(i)){n=!0;for(a in i)Be(e,t,a,i[a],!0,s,r)
}else if(o!==undefined){n=!0;ue.isFunction(o)||(r=!0)
;if(c)if(r){t.call(e,o);t=null}else{c=t;t=function(e,t,i){
return c.call(ue(e),i)}}
if(t)for(;a<l;a++)t(e[a],i,r?o:o.call(e[a],a,t(e[a],i)))}
return n?e:c?t.call(e):l?t(e[0],i):s
},Ue=/^(?:checkbox|radio)$/i,We=/<([\w:-]+)/,Oe=/^$|\/(?:java|ecma)script/i,Fe=/^\s+/,qe="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video"
;!function(){
var e=oe.createElement("div"),t=oe.createDocumentFragment(),i=oe.createElement("input")
;e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"
;pe.leadingWhitespace=3===e.firstChild.nodeType
;pe.tbody=!e.getElementsByTagName("tbody").length
;pe.htmlSerialize=!!e.getElementsByTagName("link").length
;pe.html5Clone="<:nav></:nav>"!==oe.createElement("nav").cloneNode(!0).outerHTML
;i.type="checkbox";i.checked=!0;t.appendChild(i)
;pe.appendChecked=i.checked;e.innerHTML="<textarea>x</textarea>"
;pe.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue
;t.appendChild(e)
;(i=oe.createElement("input")).setAttribute("type","radio")
;i.setAttribute("checked","checked");i.setAttribute("name","t")
;e.appendChild(i)
;pe.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked
;pe.noCloneEvent=!!e.addEventListener;e[ue.expando]=1
;pe.attributes=!e.getAttribute(ue.expando)}();var Ge={
option:[1,"<select multiple='multiple'>","</select>"],
legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],
param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],
tr:[2,"<table><tbody>","</tbody></table>"],
col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
_default:pe.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]}
;Ge.optgroup=Ge.option
;Ge.tbody=Ge.tfoot=Ge.colgroup=Ge.caption=Ge.thead;Ge.th=Ge.td
;var Ve=/<|&#?\w+;/,Ye=/<tbody/i;!function(){
var t,i,o=oe.createElement("div");for(t in{submit:!0,change:!0,
focusin:!0}){i="on"+t;if(!(pe[t]=i in e)){o.setAttribute(i,"t")
;pe[t]=!1===o.attributes[i].expando}}o=null}()
;var Ze=/^(?:input|select|textarea)$/i,Xe=/^key/,Qe=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Je=/^(?:focusinfocus|focusoutblur)$/,Ke=/^([^.]*)(?:\.(.+)|)/
;ue.event={global:{},add:function(e,t,i,o,n){
var s,r,a,l,c,d,p,h,u,f,_,m=ue._data(e);if(m){if(i.handler){
i=(l=i).handler;n=l.selector}i.guid||(i.guid=ue.guid++)
;(r=m.events)||(r=m.events={})
;(d=m.handle)||((d=m.handle=function(e){
return void 0===ue||e&&ue.event.triggered===e.type?undefined:ue.event.dispatch.apply(d.elem,arguments)
}).elem=e);a=(t=(t||"").match(ze)||[""]).length;for(;a--;){
u=_=(s=Ke.exec(t[a])||[])[1];f=(s[2]||"").split(".").sort()
;if(u){c=ue.event.special[u]||{}
;u=(n?c.delegateType:c.bindType)||u;c=ue.event.special[u]||{}
;p=ue.extend({type:u,origType:_,data:o,handler:i,guid:i.guid,
selector:n,needsContext:n&&ue.expr.match.needsContext.test(n),
namespace:f.join(".")},l);if(!(h=r[u])){
(h=r[u]=[]).delegateCount=0
;c.setup&&!1!==c.setup.call(e,o,f,d)||(e.addEventListener?e.addEventListener(u,d,!1):e.attachEvent&&e.attachEvent("on"+u,d))
}if(c.add){c.add.call(e,p)
;p.handler.guid||(p.handler.guid=i.guid)}
n?h.splice(h.delegateCount++,0,p):h.push(p)
;ue.event.global[u]=!0}}e=null}},remove:function(e,t,i,o,n){
var s,r,a,l,c,d,p,h,u,f,_,m=ue.hasData(e)&&ue._data(e)
;if(m&&(d=m.events)){c=(t=(t||"").match(ze)||[""]).length
;for(;c--;){u=_=(a=Ke.exec(t[c])||[])[1]
;f=(a[2]||"").split(".").sort();if(u){p=ue.event.special[u]||{}
;h=d[u=(o?p.delegateType:p.bindType)||u]||[]
;a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)")
;l=s=h.length;for(;s--;){r=h[s]
;if((n||_===r.origType)&&(!i||i.guid===r.guid)&&(!a||a.test(r.namespace))&&(!o||o===r.selector||"**"===o&&r.selector)){
h.splice(s,1);r.selector&&h.delegateCount--
;p.remove&&p.remove.call(e,r)}}if(l&&!h.length){
p.teardown&&!1!==p.teardown.call(e,f,m.handle)||ue.removeEvent(e,u,m.handle)
;delete d[u]}}else for(u in d)ue.event.remove(e,u+t[c],i,o,!0)}
if(ue.isEmptyObject(d)){delete m.handle
;ue._removeData(e,"events")}}},trigger:function(t,i,o,n){
var s,r,a,l,c,d,p,h=[o||oe],u=de.call(t,"type")?t.type:t,f=de.call(t,"namespace")?t.namespace.split("."):[]
;a=d=o=o||oe
;if(3!==o.nodeType&&8!==o.nodeType&&!Je.test(u+ue.event.triggered)){
if(u.indexOf(".")>-1){u=(f=u.split(".")).shift();f.sort()}
r=u.indexOf(":")<0&&"on"+u
;(t=t[ue.expando]?t:new ue.Event(u,"object"==typeof t&&t)).isTrigger=n?2:3
;t.namespace=f.join(".")
;t.rnamespace=t.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null
;t.result=undefined;t.target||(t.target=o)
;i=null==i?[t]:ue.makeArray(i,[t]);c=ue.event.special[u]||{}
;if(n||!c.trigger||!1!==c.trigger.apply(o,i)){
if(!n&&!c.noBubble&&!ue.isWindow(o)){l=c.delegateType||u
;Je.test(l+u)||(a=a.parentNode);for(;a;a=a.parentNode){h.push(a)
;d=a}
d===(o.ownerDocument||oe)&&h.push(d.defaultView||d.parentWindow||e)
}p=0;for(;(a=h[p++])&&!t.isPropagationStopped();){
t.type=p>1?l:c.bindType||u
;(s=(ue._data(a,"events")||{})[t.type]&&ue._data(a,"handle"))&&s.apply(a,i)
;if((s=r&&a[r])&&s.apply&&De(a)){t.result=s.apply(a,i)
;!1===t.result&&t.preventDefault()}}t.type=u
;if(!n&&!t.isDefaultPrevented()&&(!c._default||!1===c._default.apply(h.pop(),i))&&De(o)&&r&&o[u]&&!ue.isWindow(o)){
(d=o[r])&&(o[r]=null);ue.event.triggered=u;try{o[u]()}catch(_){}
ue.event.triggered=undefined;d&&(o[r]=d)}return t.result}}},
dispatch:function(e){e=ue.event.fix(e)
;var t,i,o,n,s,r=[],a=ne.call(arguments),l=(ue._data(this,"events")||{})[e.type]||[],c=ue.event.special[e.type]||{}
;a[0]=e;e.delegateTarget=this
;if(!c.preDispatch||!1!==c.preDispatch.call(this,e)){
r=ue.event.handlers.call(this,e,l);t=0
;for(;(n=r[t++])&&!e.isPropagationStopped();){
e.currentTarget=n.elem;i=0
;for(;(s=n.handlers[i++])&&!e.isImmediatePropagationStopped();)if(!e.rnamespace||e.rnamespace.test(s.namespace)){
e.handleObj=s;e.data=s.data
;if((o=((ue.event.special[s.origType]||{}).handle||s.handler).apply(n.elem,a))!==undefined&&!1===(e.result=o)){
e.preventDefault();e.stopPropagation()}}}
c.postDispatch&&c.postDispatch.call(this,e);return e.result}},
handlers:function(e,t){
var i,o,n,s,r=[],a=t.delegateCount,l=e.target
;if(a&&l.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(!0!==l.disabled||"click"!==e.type)){
o=[];for(i=0;i<a;i++){
o[n=(s=t[i]).selector+" "]===undefined&&(o[n]=s.needsContext?ue(n,this).index(l)>-1:ue.find(n,this,null,[l]).length)
;o[n]&&o.push(s)}o.length&&r.push({elem:l,handlers:o})}
a<t.length&&r.push({elem:this,handlers:t.slice(a)});return r},
fix:function(e){if(e[ue.expando])return e
;var t,i,o,n=e.type,s=e,r=this.fixHooks[n]
;r||(this.fixHooks[n]=r=Qe.test(n)?this.mouseHooks:Xe.test(n)?this.keyHooks:{})
;o=r.props?this.props.concat(r.props):this.props
;e=new ue.Event(s);t=o.length;for(;t--;)e[i=o[t]]=s[i]
;e.target||(e.target=s.srcElement||oe)
;3===e.target.nodeType&&(e.target=e.target.parentNode)
;e.metaKey=!!e.metaKey;return r.filter?r.filter(e,s):e},
props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
fixHooks:{},keyHooks:{
props:"char charCode key keyCode".split(" "),
filter:function(e,t){
null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode)
;return e}},mouseHooks:{
props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
filter:function(e,t){var i,o,n,s=t.button,r=t.fromElement
;if(null==e.pageX&&null!=t.clientX){
n=(o=e.target.ownerDocument||oe).documentElement;i=o.body
;e.pageX=t.clientX+(n&&n.scrollLeft||i&&i.scrollLeft||0)-(n&&n.clientLeft||i&&i.clientLeft||0)
;e.pageY=t.clientY+(n&&n.scrollTop||i&&i.scrollTop||0)-(n&&n.clientTop||i&&i.clientTop||0)
}
!e.relatedTarget&&r&&(e.relatedTarget=r===e.target?t.toElement:r)
;e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0);return e}
},special:{load:{noBubble:!0},focus:{trigger:function(){
if(this!==y()&&this.focus)try{this.focus();return!1}catch(e){}},
delegateType:"focusin"},blur:{trigger:function(){
if(this===y()&&this.blur){this.blur();return!1}},
delegateType:"focusout"},click:{trigger:function(){
if(ue.nodeName(this,"input")&&"checkbox"===this.type&&this.click){
this.click();return!1}},_default:function(e){
return ue.nodeName(e.target,"a")}},beforeunload:{
postDispatch:function(e){
e.result!==undefined&&e.originalEvent&&(e.originalEvent.returnValue=e.result)
}}},simulate:function(e,t,i){var o=ue.extend(new ue.Event,i,{
type:e,isSimulated:!0});ue.event.trigger(o,null,t)
;o.isDefaultPrevented()&&i.preventDefault()}}
;ue.removeEvent=oe.removeEventListener?function(e,t,i){
e.removeEventListener&&e.removeEventListener(t,i)
}:function(e,t,i){var o="on"+t;if(e.detachEvent){
"undefined"==typeof e[o]&&(e[o]=null);e.detachEvent(o,i)}}
;ue.Event=function(e,t){
if(!(this instanceof ue.Event))return new ue.Event(e,t)
;if(e&&e.type){this.originalEvent=e;this.type=e.type
;this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===undefined&&!1===e.returnValue?v:b
}else this.type=e;t&&ue.extend(this,t)
;this.timeStamp=e&&e.timeStamp||ue.now();this[ue.expando]=!0}
;ue.Event.prototype={constructor:ue.Event,isDefaultPrevented:b,
isPropagationStopped:b,isImmediatePropagationStopped:b,
preventDefault:function(){var e=this.originalEvent
;this.isDefaultPrevented=v
;e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},
stopPropagation:function(){var e=this.originalEvent
;this.isPropagationStopped=v;if(e&&!this.isSimulated){
e.stopPropagation&&e.stopPropagation();e.cancelBubble=!0}},
stopImmediatePropagation:function(){var e=this.originalEvent
;this.isImmediatePropagationStopped=v
;e&&e.stopImmediatePropagation&&e.stopImmediatePropagation()
;this.stopPropagation()}};ue.each({mouseenter:"mouseover",
mouseleave:"mouseout",pointerenter:"pointerover",
pointerleave:"pointerout"},function(e,t){ue.event.special[e]={
delegateType:t,bindType:t,handle:function(e){
var i,o=this,n=e.relatedTarget,s=e.handleObj
;if(!n||n!==o&&!ue.contains(o,n)){e.type=s.origType
;i=s.handler.apply(this,arguments);e.type=t}return i}}})
;pe.submit||(ue.event.special.submit={setup:function(){
if(ue.nodeName(this,"form"))return!1
;ue.event.add(this,"click._submit keypress._submit",function(e){
var t=e.target,i=ue.nodeName(t,"input")||ue.nodeName(t,"button")?ue.prop(t,"form"):undefined
;if(i&&!ue._data(i,"submit")){
ue.event.add(i,"submit._submit",function(e){e._submitBubble=!0})
;ue._data(i,"submit",!0)}})},postDispatch:function(e){
if(e._submitBubble){delete e._submitBubble
;this.parentNode&&!e.isTrigger&&ue.event.simulate("submit",this.parentNode,e)
}},teardown:function(){if(ue.nodeName(this,"form"))return!1
;ue.event.remove(this,"._submit")}})
;pe.change||(ue.event.special.change={setup:function(){
if(Ze.test(this.nodeName)){
if("checkbox"===this.type||"radio"===this.type){
ue.event.add(this,"propertychange._change",function(e){
"checked"===e.originalEvent.propertyName&&(this._justChanged=!0)
});ue.event.add(this,"click._change",function(e){
this._justChanged&&!e.isTrigger&&(this._justChanged=!1)
;ue.event.simulate("change",this,e)})}return!1}
ue.event.add(this,"beforeactivate._change",function(e){
var t=e.target;if(Ze.test(t.nodeName)&&!ue._data(t,"change")){
ue.event.add(t,"change._change",function(e){
!this.parentNode||e.isSimulated||e.isTrigger||ue.event.simulate("change",this.parentNode,e)
});ue._data(t,"change",!0)}})},handle:function(e){var t=e.target
;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)
},teardown:function(){ue.event.remove(this,"._change")
;return!Ze.test(this.nodeName)}});pe.focusin||ue.each({
focus:"focusin",blur:"focusout"},function(e,t){
var i=function(e){ue.event.simulate(t,e.target,ue.event.fix(e))}
;ue.event.special[t]={setup:function(){
var o=this.ownerDocument||this,n=ue._data(o,t)
;n||o.addEventListener(e,i,!0);ue._data(o,t,(n||0)+1)},
teardown:function(){
var o=this.ownerDocument||this,n=ue._data(o,t)-1
;if(n)ue._data(o,t,n);else{o.removeEventListener(e,i,!0)
;ue._removeData(o,t)}}}});ue.fn.extend({on:function(e,t,i,o){
return w(this,e,t,i,o)},one:function(e,t,i,o){
return w(this,e,t,i,o,1)},off:function(e,t,i){var o,n
;if(e&&e.preventDefault&&e.handleObj){o=e.handleObj
;ue(e.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler)
;return this}if("object"==typeof e){
for(n in e)this.off(n,t,e[n]);return this}
if(!1===t||"function"==typeof t){i=t;t=undefined}!1===i&&(i=b)
;return this.each(function(){ue.event.remove(this,e,i,t)})},
trigger:function(e,t){return this.each(function(){
ue.event.trigger(e,t,this)})},triggerHandler:function(e,t){
var i=this[0];if(i)return ue.event.trigger(e,t,i,!0)}})
;var et=/ jQuery\d+="(?:null|\d+)"/g,tt=new RegExp("<(?:"+qe+")[\\s/>]","i"),it=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ot=/<script|<style|<link/i,nt=/checked\s*(?:[^=]|=\s*.checked.)/i,st=/^true\/(.*)/,rt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,at,lt=u(oe).appendChild(oe.createElement("div"))
;ue.extend({htmlPrefilter:function(e){
return e.replace(it,"<$1></$2>")},clone:function(e,t,i){
var o,n,s,r,a,l=ue.contains(e.ownerDocument,e)
;if(pe.html5Clone||ue.isXMLDoc(e)||!tt.test("<"+e.nodeName+">"))s=e.cloneNode(!0);else{
lt.innerHTML=e.outerHTML;lt.removeChild(s=lt.firstChild)}
if(!(pe.noCloneEvent&&pe.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ue.isXMLDoc(e))){
o=f(s);a=f(e);for(r=0;null!=(n=a[r]);++r)o[r]&&$(n,o[r])}
if(t)if(i){a=a||f(e);o=o||f(s)
;for(r=0;null!=(n=a[r]);r++)S(n,o[r])}else S(e,s)
;(o=f(s,"script")).length>0&&_(o,!l&&f(e,"script"));o=a=n=null
;return s},cleanData:function(e,t){
for(var i,o,n,s,r=0,a=ue.expando,l=ue.cache,c=pe.attributes,d=ue.event.special;null!=(i=e[r]);r++)if((t||De(i))&&(s=(n=i[a])&&l[n])){
if(s.events)for(o in s.events)d[o]?ue.event.remove(i,o):ue.removeEvent(i,o,s.handle)
;if(l[n]){delete l[n]
;c||"undefined"==typeof i.removeAttribute?i[a]=undefined:i.removeAttribute(a)
;ie.push(n)}}}});ue.fn.extend({domManip:T,detach:function(e){
return P(this,e,!0)},remove:function(e){return P(this,e)},
text:function(e){return Be(this,function(e){
return e===undefined?ue.text(this):this.empty().append((this[0]&&this[0].ownerDocument||oe).createTextNode(e))
},null,e,arguments.length)},append:function(){
return T(this,arguments,function(e){
if(1===this.nodeType||11===this.nodeType||9===this.nodeType){
var t;C(this,e).appendChild(e)}})},prepend:function(){
return T(this,arguments,function(e){
if(1===this.nodeType||11===this.nodeType||9===this.nodeType){
var t=C(this,e);t.insertBefore(e,t.firstChild)}})},
before:function(){return T(this,arguments,function(e){
this.parentNode&&this.parentNode.insertBefore(e,this)})},
after:function(){return T(this,arguments,function(e){
this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)
})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){
1===e.nodeType&&ue.cleanData(f(e,!1))
;for(;e.firstChild;)e.removeChild(e.firstChild)
;e.options&&ue.nodeName(e,"select")&&(e.options.length=0)}
return this},clone:function(e,t){e=null!=e&&e;t=null==t?e:t
;return this.map(function(){return ue.clone(this,e,t)})},
html:function(e){return Be(this,function(e){
var t=this[0]||{},i=0,o=this.length
;if(e===undefined)return 1===t.nodeType?t.innerHTML.replace(et,""):undefined
;if("string"==typeof e&&!ot.test(e)&&(pe.htmlSerialize||!tt.test(e))&&(pe.leadingWhitespace||!Fe.test(e))&&!Ge[(We.exec(e)||["",""])[1].toLowerCase()]){
e=ue.htmlPrefilter(e);try{
for(;i<o;i++)if(1===(t=this[i]||{}).nodeType){
ue.cleanData(f(t,!1));t.innerHTML=e}t=0}catch(n){}}
t&&this.empty().append(e)},null,e,arguments.length)},
replaceWith:function(){var e=[]
;return T(this,arguments,function(t){var i=this.parentNode
;if(ue.inArray(this,e)<0){ue.cleanData(f(this))
;i&&i.replaceChild(t,this)}},e)}});ue.each({appendTo:"append",
prependTo:"prepend",insertBefore:"before",insertAfter:"after",
replaceAll:"replaceWith"},function(e,t){ue.fn[e]=function(e){
for(var i,o=0,n=[],s=ue(e),r=s.length-1;o<=r;o++){
i=o===r?this:this.clone(!0);ue(s[o])[t](i);re.apply(n,i.get())}
return this.pushStack(n)}});var ct,dt={HTML:"block",BODY:"block"
},pt=/^margin/,ht=new RegExp("^("+Me+")(?!px)[a-z%]+$","i"),ut=function(e,t,i,o){
var n,s,r={};for(s in t){r[s]=e.style[s];e.style[s]=t[s]}
n=i.apply(e,o||[]);for(s in t)e.style[s]=r[s];return n
},ft=oe.documentElement;!function(){function t(){
var t,d,p=oe.documentElement;p.appendChild(l)
;c.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"
;i=n=a=!1;o=r=!0;if(e.getComputedStyle){d=e.getComputedStyle(c)
;i="1%"!==(d||{}).top;a="2px"===(d||{}).marginLeft
;n="4px"===(d||{width:"4px"}).width;c.style.marginRight="50%"
;o="4px"===(d||{marginRight:"4px"}).marginRight
;(t=c.appendChild(oe.createElement("div"))).style.cssText=c.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"
;t.style.marginRight=t.style.width="0";c.style.width="1px"
;r=!parseFloat((e.getComputedStyle(t)||{}).marginRight)
;c.removeChild(t)}c.style.display="none"
;if(s=0===c.getClientRects().length){c.style.display=""
;c.innerHTML="<table><tr><td></td><td>t</td></tr></table>"
;c.childNodes[0].style.borderCollapse="separate"
;(t=c.getElementsByTagName("td"))[0].style.cssText="margin:0;border:0;padding:0;display:none"
;if(s=0===t[0].offsetHeight){t[0].style.display=""
;t[1].style.display="none";s=0===t[0].offsetHeight}}
p.removeChild(l)}
var i,o,n,s,r,a,l=oe.createElement("div"),c=oe.createElement("div")
;if(c.style){c.style.cssText="float:left;opacity:.5"
;pe.opacity="0.5"===c.style.opacity
;pe.cssFloat=!!c.style.cssFloat
;c.style.backgroundClip="content-box"
;c.cloneNode(!0).style.backgroundClip=""
;pe.clearCloneStyle="content-box"===c.style.backgroundClip
;(l=oe.createElement("div")).style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"
;c.innerHTML="";l.appendChild(c)
;pe.boxSizing=""===c.style.boxSizing||""===c.style.MozBoxSizing||""===c.style.WebkitBoxSizing
;ue.extend(pe,{reliableHiddenOffsets:function(){null==i&&t()
;return s},boxSizingReliable:function(){null==i&&t();return n},
pixelMarginRight:function(){null==i&&t();return o},
pixelPosition:function(){null==i&&t();return i},
reliableMarginRight:function(){null==i&&t();return r},
reliableMarginLeft:function(){null==i&&t();return a}})}}()
;var _t,mt,gt=/^(top|right|bottom|left)$/
;if(e.getComputedStyle){_t=function(t){
var i=t.ownerDocument.defaultView;i&&i.opener||(i=e)
;return i.getComputedStyle(t)};mt=function(e,t,i){
var o,n,s,r,a=e.style
;""!==(r=(i=i||_t(e))?i.getPropertyValue(t)||i[t]:undefined)&&r!==undefined||ue.contains(e.ownerDocument,e)||(r=ue.style(e,t))
;if(i&&!pe.pixelMarginRight()&&ht.test(r)&&pt.test(t)){o=a.width
;n=a.minWidth;s=a.maxWidth;a.minWidth=a.maxWidth=a.width=r
;r=i.width;a.width=o;a.minWidth=n;a.maxWidth=s}
return r===undefined?r:r+""}}else if(ft.currentStyle){
_t=function(e){return e.currentStyle};mt=function(e,t,i){
var o,n,s,r,a=e.style
;null==(r=(i=i||_t(e))?i[t]:undefined)&&a&&a[t]&&(r=a[t])
;if(ht.test(r)&&!gt.test(t)){o=a.left
;(s=(n=e.runtimeStyle)&&n.left)&&(n.left=e.currentStyle.left)
;a.left="fontSize"===t?"1em":r;r=a.pixelLeft+"px";a.left=o
;s&&(n.left=s)}return r===undefined?r:r+""||"auto"}}
var vt=/alpha\([^)]*\)/i,bt=/opacity\s*=\s*([^)]*)/i,yt=/^(none|table(?!-c[ea]).+)/,wt=new RegExp("^("+Me+")(.*)$","i"),Ct={
position:"absolute",visibility:"hidden",display:"block"},xt={
letterSpacing:"0",fontWeight:"400"
},kt=["Webkit","O","Moz","ms"],St=oe.createElement("div").style
;ue.extend({cssHooks:{opacity:{get:function(e,t){if(t){
var i=mt(e,"opacity");return""===i?"1":i}}}},cssNumber:{
animationIterationCount:!0,columnCount:!0,fillOpacity:!0,
flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,
opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
cssProps:{float:pe.cssFloat?"cssFloat":"styleFloat"},
style:function(e,t,i,o){
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){
var n,s,r,a=ue.camelCase(t),l=e.style
;t=ue.cssProps[a]||(ue.cssProps[a]=D(a)||a)
;r=ue.cssHooks[t]||ue.cssHooks[a]
;if(i===undefined)return r&&"get"in r&&(n=r.get(e,!1,o))!==undefined?n:l[t]
;if("string"===(s=typeof i)&&(n=He.exec(i))&&n[1]){i=h(e,t,n)
;s="number"}if(null!=i&&i==i){
"number"===s&&(i+=n&&n[3]||(ue.cssNumber[a]?"":"px"))
;pe.clearCloneStyle||""!==i||0!==t.indexOf("background")||(l[t]="inherit")
;if(!(r&&"set"in r&&(i=r.set(e,i,o))===undefined))try{l[t]=i
}catch(c){}}}},css:function(e,t,i,o){var n,s,r,a=ue.camelCase(t)
;t=ue.cssProps[a]||(ue.cssProps[a]=D(a)||a)
;(r=ue.cssHooks[t]||ue.cssHooks[a])&&"get"in r&&(s=r.get(e,!0,i))
;s===undefined&&(s=mt(e,t,o));"normal"===s&&t in xt&&(s=xt[t])
;if(""===i||i){n=parseFloat(s);return!0===i||isFinite(n)?n||0:s}
return s}});ue.each(["height","width"],function(e,t){
ue.cssHooks[t]={get:function(e,i,o){
if(i)return yt.test(ue.css(e,"display"))&&0===e.offsetWidth?ut(e,Ct,function(){
return M(e,t,o)}):M(e,t,o)},set:function(e,i,o){var n=o&&_t(e)
;return E(e,i,o?N(e,t,o,pe.boxSizing&&"border-box"===ue.css(e,"boxSizing",!1,n),n):0)
}}});pe.opacity||(ue.cssHooks.opacity={get:function(e,t){
return bt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""
},set:function(e,t){
var i=e.style,o=e.currentStyle,n=ue.isNumeric(t)?"alpha(opacity="+100*t+")":"",s=o&&o.filter||i.filter||""
;i.zoom=1
;if((t>=1||""===t)&&""===ue.trim(s.replace(vt,""))&&i.removeAttribute){
i.removeAttribute("filter");if(""===t||o&&!o.filter)return}
i.filter=vt.test(s)?s.replace(vt,n):s+" "+n}})
;ue.cssHooks.marginRight=A(pe.reliableMarginRight,function(e,t){
if(t)return ut(e,{display:"inline-block"},mt,[e,"marginRight"])
});ue.cssHooks.marginLeft=A(pe.reliableMarginLeft,function(e,t){
if(t)return(parseFloat(mt(e,"marginLeft"))||(ue.contains(e.ownerDocument,e)?e.getBoundingClientRect().left-ut(e,{
marginLeft:0},function(){return e.getBoundingClientRect().left
}):0))+"px"});ue.each({margin:"",padding:"",border:"Width"
},function(e,t){ue.cssHooks[e+t]={expand:function(i){
for(var o=0,n={},s="string"==typeof i?i.split(" "):[i];o<4;o++)n[e+Le[o]+t]=s[o]||s[o-2]||s[0]
;return n}};pt.test(e)||(ue.cssHooks[e+t].set=E)})
;ue.fn.extend({css:function(e,t){return Be(this,function(e,t,i){
var o,n,s={},r=0;if(ue.isArray(t)){o=_t(e);n=t.length
;for(;r<n;r++)s[t[r]]=ue.css(e,t[r],!1,o);return s}
return i!==undefined?ue.style(e,t,i):ue.css(e,t)
},e,t,arguments.length>1)},show:function(){return R(this,!0)},
hide:function(){return R(this)},toggle:function(e){
return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){
je(this)?ue(this).show():ue(this).hide()})}});ue.Tween=H
;H.prototype={constructor:H,init:function(e,t,i,o,n,s){
this.elem=e;this.prop=i;this.easing=n||ue.easing._default
;this.options=t;this.start=this.now=this.cur();this.end=o
;this.unit=s||(ue.cssNumber[i]?"":"px")},cur:function(){
var e=H.propHooks[this.prop]
;return e&&e.get?e.get(this):H.propHooks._default.get(this)},
run:function(e){var t,i=H.propHooks[this.prop]
;this.options.duration?this.pos=t=ue.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e
;this.now=(this.end-this.start)*t+this.start
;this.options.step&&this.options.step.call(this.elem,this.now,this)
;i&&i.set?i.set(this):H.propHooks._default.set(this);return this
}};H.prototype.init.prototype=H.prototype;H.propHooks={
_default:{get:function(e){var t
;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ue.css(e.elem,e.prop,""))&&"auto"!==t?t:0
},set:function(e){
ue.fx.step[e.prop]?ue.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[ue.cssProps[e.prop]]&&!ue.cssHooks[e.prop]?e.elem[e.prop]=e.now:ue.style(e.elem,e.prop,e.now+e.unit)
}}};H.propHooks.scrollTop=H.propHooks.scrollLeft={
set:function(e){
e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}}
;ue.easing={linear:function(e){return e},swing:function(e){
return.5-Math.cos(e*Math.PI)/2},_default:"swing"}
;ue.fx=H.prototype.init;ue.fx.step={}
;var $t,Tt,Pt=/^(?:toggle|show|hide)$/,zt=/queueHooks$/
;ue.Animation=ue.extend(O,{tweeners:{"*":[function(e,t){
var i=this.createTween(e,t);h(i.elem,e,He.exec(t),i);return i}]
},tweener:function(e,t){if(ue.isFunction(e)){t=e;e=["*"]
}else e=e.match(ze);for(var i,o=0,n=e.length;o<n;o++){i=e[o]
;O.tweeners[i]=O.tweeners[i]||[];O.tweeners[i].unshift(t)}},
prefilters:[U],prefilter:function(e,t){
t?O.prefilters.unshift(e):O.prefilters.push(e)}})
;ue.speed=function(e,t,i){
var o=e&&"object"==typeof e?ue.extend({},e):{
complete:i||!i&&t||ue.isFunction(e)&&e,duration:e,
easing:i&&t||t&&!ue.isFunction(t)&&t}
;o.duration=ue.fx.off?0:"number"==typeof o.duration?o.duration:o.duration in ue.fx.speeds?ue.fx.speeds[o.duration]:ue.fx.speeds._default
;null!=o.queue&&!0!==o.queue||(o.queue="fx");o.old=o.complete
;o.complete=function(){ue.isFunction(o.old)&&o.old.call(this)
;o.queue&&ue.dequeue(this,o.queue)};return o};ue.fn.extend({
fadeTo:function(e,t,i,o){
return this.filter(je).css("opacity",0).show().end().animate({
opacity:t},e,i,o)},animate:function(e,t,i,o){
var n=ue.isEmptyObject(e),s=ue.speed(t,i,o),r=function(){
var t=O(this,ue.extend({},e),s)
;(n||ue._data(this,"finish"))&&t.stop(!0)};r.finish=r
;return n||!1===s.queue?this.each(r):this.queue(s.queue,r)},
stop:function(e,t,i){var o=function(e){var t=e.stop
;delete e.stop;t(i)};if("string"!=typeof e){i=t;t=e;e=undefined}
t&&!1!==e&&this.queue(e||"fx",[]);return this.each(function(){
var t=!0,n=null!=e&&e+"queueHooks",s=ue.timers,r=ue._data(this)
;if(n)r[n]&&r[n].stop&&o(r[n]);else for(n in r)r[n]&&r[n].stop&&zt.test(n)&&o(r[n])
;for(n=s.length;n--;)if(s[n].elem===this&&(null==e||s[n].queue===e)){
s[n].anim.stop(i);t=!1;s.splice(n,1)}!t&&i||ue.dequeue(this,e)})
},finish:function(e){!1!==e&&(e=e||"fx")
;return this.each(function(){
var t,i=ue._data(this),o=i[e+"queue"],n=i[e+"queueHooks"],s=ue.timers,r=o?o.length:0
;i.finish=!0;ue.queue(this,e,[]);n&&n.stop&&n.stop.call(this,!0)
;for(t=s.length;t--;)if(s[t].elem===this&&s[t].queue===e){
s[t].anim.stop(!0);s.splice(t,1)}
for(t=0;t<r;t++)o[t]&&o[t].finish&&o[t].finish.call(this)
;delete i.finish})}})
;ue.each(["toggle","show","hide"],function(e,t){var i=ue.fn[t]
;ue.fn[t]=function(e,o,n){
return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(j(t,!0),e,o,n)
}});ue.each({slideDown:j("show"),slideUp:j("hide"),
slideToggle:j("toggle"),fadeIn:{opacity:"show"},fadeOut:{
opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){
ue.fn[e]=function(e,i,o){return this.animate(t,e,i,o)}})
;ue.timers=[];ue.fx.tick=function(){var e,t=ue.timers,i=0
;$t=ue.now()
;for(;i<t.length;i++)(e=t[i])()||t[i]!==e||t.splice(i--,1)
;t.length||ue.fx.stop();$t=undefined};ue.fx.timer=function(e){
ue.timers.push(e);e()?ue.fx.start():ue.timers.pop()}
;ue.fx.interval=13;ue.fx.start=function(){
Tt||(Tt=e.setInterval(ue.fx.tick,ue.fx.interval))}
;ue.fx.stop=function(){e.clearInterval(Tt);Tt=null}
;ue.fx.speeds={slow:600,fast:200,_default:400}
;ue.fn.delay=function(t,i){t=ue.fx&&ue.fx.speeds[t]||t;i=i||"fx"
;return this.queue(i,function(i,o){var n=e.setTimeout(i,t)
;o.stop=function(){e.clearTimeout(n)}})};!function(){
var e,t=oe.createElement("input"),i=oe.createElement("div"),o=oe.createElement("select"),n=o.appendChild(oe.createElement("option"))
;(i=oe.createElement("div")).setAttribute("className","t")
;i.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"
;e=i.getElementsByTagName("a")[0]
;t.setAttribute("type","checkbox");i.appendChild(t)
;(e=i.getElementsByTagName("a")[0]).style.cssText="top:1px"
;pe.getSetAttribute="t"!==i.className
;pe.style=/top/.test(e.getAttribute("style"))
;pe.hrefNormalized="/a"===e.getAttribute("href")
;pe.checkOn=!!t.value;pe.optSelected=n.selected
;pe.enctype=!!oe.createElement("form").enctype;o.disabled=!0
;pe.optDisabled=!n.disabled
;(t=oe.createElement("input")).setAttribute("value","")
;pe.input=""===t.getAttribute("value");t.value="t"
;t.setAttribute("type","radio");pe.radioValue="t"===t.value}()
;var It=/\r/g,At=/[\x20\t\r\n\f]+/g;ue.fn.extend({
val:function(e){var t,i,o,n=this[0]
;if(!arguments.length)return n?(t=ue.valHooks[n.type]||ue.valHooks[n.nodeName.toLowerCase()])&&"get"in t&&(i=t.get(n,"value"))!==undefined?i:"string"==typeof(i=n.value)?i.replace(It,""):null==i?"":i:void 0
;o=ue.isFunction(e);return this.each(function(i){var n
;if(1===this.nodeType){
null==(n=o?e.call(this,i,ue(this).val()):e)?n="":"number"==typeof n?n+="":ue.isArray(n)&&(n=ue.map(n,function(e){
return null==e?"":e+""}))
;(t=ue.valHooks[this.type]||ue.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&t.set(this,n,"value")!==undefined||(this.value=n)
}})}});ue.extend({valHooks:{option:{get:function(e){
var t=ue.find.attr(e,"value")
;return null!=t?t:ue.trim(ue.text(e)).replace(At," ")}},select:{
get:function(e){
for(var t,i,o=e.options,n=e.selectedIndex,s="select-one"===e.type||n<0,r=s?null:[],a=s?n+1:o.length,l=n<0?a:s?n:0;l<a;l++)if(((i=o[l]).selected||l===n)&&(pe.optDisabled?!i.disabled:null===i.getAttribute("disabled"))&&(!i.parentNode.disabled||!ue.nodeName(i.parentNode,"optgroup"))){
t=ue(i).val();if(s)return t;r.push(t)}return r},
set:function(e,t){
for(var i,o,n=e.options,s=ue.makeArray(t),r=n.length;r--;){
o=n[r];if(ue.inArray(ue.valHooks.option.get(o),s)>-1)try{
o.selected=i=!0}catch(a){o.scrollHeight}else o.selected=!1}
i||(e.selectedIndex=-1);return n}}}})
;ue.each(["radio","checkbox"],function(){ue.valHooks[this]={
set:function(e,t){
if(ue.isArray(t))return e.checked=ue.inArray(ue(e).val(),t)>-1}}
;pe.checkOn||(ue.valHooks[this].get=function(e){
return null===e.getAttribute("value")?"on":e.value})})
;var Dt,Rt,Et=ue.expr.attrHandle,Nt=/^(?:checked|selected)$/i,Mt=pe.getSetAttribute,Ht=pe.input
;ue.fn.extend({attr:function(e,t){
return Be(this,ue.attr,e,t,arguments.length>1)},
removeAttr:function(e){return this.each(function(){
ue.removeAttr(this,e)})}});ue.extend({attr:function(e,t,i){
var o,n,s=e.nodeType;if(3!==s&&8!==s&&2!==s){
if("undefined"==typeof e.getAttribute)return ue.prop(e,t,i)
;if(1!==s||!ue.isXMLDoc(e)){t=t.toLowerCase()
;n=ue.attrHooks[t]||(ue.expr.match.bool.test(t)?Rt:Dt)}
if(i!==undefined){if(null===i){ue.removeAttr(e,t);return}
if(n&&"set"in n&&(o=n.set(e,i,t))!==undefined)return o
;e.setAttribute(t,i+"");return i}
return n&&"get"in n&&null!==(o=n.get(e,t))?o:null==(o=ue.find.attr(e,t))?undefined:o
}},attrHooks:{type:{set:function(e,t){
if(!pe.radioValue&&"radio"===t&&ue.nodeName(e,"input")){
var i=e.value;e.setAttribute("type",t);i&&(e.value=i);return t}}
}},removeAttr:function(e,t){var i,o,n=0,s=t&&t.match(ze)
;if(s&&1===e.nodeType)for(;i=s[n++];){o=ue.propFix[i]||i
;ue.expr.match.bool.test(i)?Ht&&Mt||!Nt.test(i)?e[o]=!1:e[ue.camelCase("default-"+i)]=e[o]=!1:ue.attr(e,i,"")
;e.removeAttribute(Mt?i:o)}}});Rt={set:function(e,t,i){
!1===t?ue.removeAttr(e,i):Ht&&Mt||!Nt.test(i)?e.setAttribute(!Mt&&ue.propFix[i]||i,i):e[ue.camelCase("default-"+i)]=e[i]=!0
;return i}}
;ue.each(ue.expr.match.bool.source.match(/\w+/g),function(e,t){
var i=Et[t]||ue.find.attr
;Ht&&Mt||!Nt.test(t)?Et[t]=function(e,t,o){var n,s;if(!o){
s=Et[t];Et[t]=n;n=null!=i(e,t,o)?t.toLowerCase():null;Et[t]=s}
return n}:Et[t]=function(e,t,i){
if(!i)return e[ue.camelCase("default-"+t)]?t.toLowerCase():null}
});Ht&&Mt||(ue.attrHooks.value={set:function(e,t,i){
if(!ue.nodeName(e,"input"))return Dt&&Dt.set(e,t,i)
;e.defaultValue=t}});if(!Mt){Dt={set:function(e,t,i){
var o=e.getAttributeNode(i)
;o||e.setAttributeNode(o=e.ownerDocument.createAttribute(i))
;o.value=t+="";if("value"===i||t===e.getAttribute(i))return t}}
;Et.id=Et.name=Et.coords=function(e,t,i){var o
;if(!i)return(o=e.getAttributeNode(t))&&""!==o.value?o.value:null
};ue.valHooks.button={get:function(e,t){
var i=e.getAttributeNode(t);if(i&&i.specified)return i.value},
set:Dt.set};ue.attrHooks.contenteditable={set:function(e,t,i){
Dt.set(e,""!==t&&t,i)}}
;ue.each(["width","height"],function(e,t){ue.attrHooks[t]={
set:function(e,i){if(""===i){e.setAttribute(t,"auto");return i}}
}})}pe.style||(ue.attrHooks.style={get:function(e){
return e.style.cssText||undefined},set:function(e,t){
return e.style.cssText=t+""}})
;var Lt=/^(?:input|select|textarea|button|object)$/i,jt=/^(?:a|area)$/i
;ue.fn.extend({prop:function(e,t){
return Be(this,ue.prop,e,t,arguments.length>1)},
removeProp:function(e){e=ue.propFix[e]||e
;return this.each(function(){try{this[e]=undefined
;delete this[e]}catch(t){}})}});ue.extend({prop:function(e,t,i){
var o,n,s=e.nodeType;if(3!==s&&8!==s&&2!==s){
if(1!==s||!ue.isXMLDoc(e)){t=ue.propFix[t]||t;n=ue.propHooks[t]}
return i!==undefined?n&&"set"in n&&(o=n.set(e,i,t))!==undefined?o:e[t]=i:n&&"get"in n&&null!==(o=n.get(e,t))?o:e[t]
}},propHooks:{tabIndex:{get:function(e){
var t=ue.find.attr(e,"tabindex")
;return t?parseInt(t,10):Lt.test(e.nodeName)||jt.test(e.nodeName)&&e.href?0:-1
}}},propFix:{"for":"htmlFor","class":"className"}})
;pe.hrefNormalized||ue.each(["href","src"],function(e,t){
ue.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})
;pe.optSelected||(ue.propHooks.selected={get:function(e){
var t=e.parentNode;if(t){t.selectedIndex
;t.parentNode&&t.parentNode.selectedIndex}return null},
set:function(e){var t=e.parentNode;if(t){t.selectedIndex
;t.parentNode&&t.parentNode.selectedIndex}}})
;ue.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){
ue.propFix[this.toLowerCase()]=this})
;pe.enctype||(ue.propFix.enctype="encoding")
;var Bt=/[\t\r\n\f]/g;ue.fn.extend({addClass:function(e){
var t,i,o,n,s,r,a,l=0
;if(ue.isFunction(e))return this.each(function(t){
ue(this).addClass(e.call(this,t,F(this)))})
;if("string"==typeof e&&e){t=e.match(ze)||[];for(;i=this[l++];){
n=F(i);if(o=1===i.nodeType&&(" "+n+" ").replace(Bt," ")){r=0
;for(;s=t[r++];)o.indexOf(" "+s+" ")<0&&(o+=s+" ")
;n!==(a=ue.trim(o))&&ue.attr(i,"class",a)}}}return this},
removeClass:function(e){var t,i,o,n,s,r,a,l=0
;if(ue.isFunction(e))return this.each(function(t){
ue(this).removeClass(e.call(this,t,F(this)))})
;if(!arguments.length)return this.attr("class","")
;if("string"==typeof e&&e){t=e.match(ze)||[];for(;i=this[l++];){
n=F(i);if(o=1===i.nodeType&&(" "+n+" ").replace(Bt," ")){r=0
;for(;s=t[r++];)for(;o.indexOf(" "+s+" ")>-1;)o=o.replace(" "+s+" "," ")
;n!==(a=ue.trim(o))&&ue.attr(i,"class",a)}}}return this},
toggleClass:function(e,t){var i=typeof e
;return"boolean"==typeof t&&"string"===i?t?this.addClass(e):this.removeClass(e):ue.isFunction(e)?this.each(function(i){
ue(this).toggleClass(e.call(this,i,F(this),t),t)
}):this.each(function(){var t,o,n,s;if("string"===i){o=0
;n=ue(this);s=e.match(ze)||[]
;for(;t=s[o++];)n.hasClass(t)?n.removeClass(t):n.addClass(t)
}else if(e===undefined||"boolean"===i){
(t=F(this))&&ue._data(this,"__className__",t)
;ue.attr(this,"class",t||!1===e?"":ue._data(this,"__className__")||"")
}})},hasClass:function(e){var t,i,o=0;t=" "+e+" "
;for(;i=this[o++];)if(1===i.nodeType&&(" "+F(i)+" ").replace(Bt," ").indexOf(t)>-1)return!0
;return!1}})
;ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){
ue.fn[t]=function(e,i){
return arguments.length>0?this.on(t,null,e,i):this.trigger(t)}})
;ue.fn.extend({hover:function(e,t){
return this.mouseenter(e).mouseleave(t||e)}})
;var Ut=e.location,Wt=ue.now(),Ot=/\?/,Ft=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g
;ue.parseJSON=function(t){
if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"")
;var i,o=null,n=ue.trim(t+"")
;return n&&!ue.trim(n.replace(Ft,function(e,t,n,s){i&&t&&(o=0)
;if(0===o)return e;i=n||t;o+=!s-!n;return""
}))?Function("return "+n)():ue.error("Invalid JSON: "+t)}
;ue.parseXML=function(t){var i,o
;if(!t||"string"!=typeof t)return null;try{
if(e.DOMParser)i=(o=new e.DOMParser).parseFromString(t,"text/xml");else{
(i=new e.ActiveXObject("Microsoft.XMLDOM")).async="false"
;i.loadXML(t)}}catch(n){i=undefined}
i&&i.documentElement&&!i.getElementsByTagName("parsererror").length||ue.error("Invalid XML: "+t)
;return i}
;var qt=/#.*$/,Gt=/([?&])_=[^&]*/,Vt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Yt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,Xt=/^\/\//,Qt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Jt={},Kt={},ei="*/".concat("*"),ti=Ut.href,ii=Qt.exec(ti.toLowerCase())||[]
;ue.extend({active:0,lastModified:{},etag:{},ajaxSettings:{
url:ti,type:"GET",isLocal:Yt.test(ii[1]),global:!0,
processData:!0,async:!0,
contentType:"application/x-www-form-urlencoded; charset=UTF-8",
accepts:{"*":ei,text:"text/plain",html:"text/html",
xml:"application/xml, text/xml",
json:"application/json, text/javascript"},contents:{
xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{
xml:"responseXML",text:"responseText",json:"responseJSON"},
converters:{"* text":String,"text html":!0,
"text json":ue.parseJSON,"text xml":ue.parseXML},flatOptions:{
url:!0,context:!0}},ajaxSetup:function(e,t){
return t?V(V(e,ue.ajaxSettings),t):V(ue.ajaxSettings,e)},
ajaxPrefilter:q(Jt),ajaxTransport:q(Kt),ajax:function(t,i){
function o(t,i,o,n){var s,p,v,b,w,x=i;if(2!==y){y=2
;l&&e.clearTimeout(l);d=undefined;a=n||"";C.readyState=t>0?4:0
;s=t>=200&&t<300||304===t;o&&(b=Y(h,C,o));b=Z(h,b,C,s);if(s){
if(h.ifModified){
(w=C.getResponseHeader("Last-Modified"))&&(ue.lastModified[r]=w)
;(w=C.getResponseHeader("etag"))&&(ue.etag[r]=w)}
if(204===t||"HEAD"===h.type)x="nocontent";else if(304===t)x="notmodified";else{
x=b.state;p=b.data;s=!(v=b.error)}}else{v=x;if(t||!x){x="error"
;t<0&&(t=0)}}C.status=t;C.statusText=(i||x)+""
;s?_.resolveWith(u,[p,x,C]):_.rejectWith(u,[C,x,v])
;C.statusCode(g);g=undefined
;c&&f.trigger(s?"ajaxSuccess":"ajaxError",[C,h,s?p:v])
;m.fireWith(u,[C,x]);if(c){f.trigger("ajaxComplete",[C,h])
;--ue.active||ue.event.trigger("ajaxStop")}}}
if("object"==typeof t){i=t;t=undefined}i=i||{}
;var n,s,r,a,l,c,d,p,h=ue.ajaxSetup({},i),u=h.context||h,f=h.context&&(u.nodeType||u.jquery)?ue(u):ue.event,_=ue.Deferred(),m=ue.Callbacks("once memory"),g=h.statusCode||{},v={},b={},y=0,w="canceled",C={
readyState:0,getResponseHeader:function(e){var t;if(2===y){
if(!p){p={};for(;t=Vt.exec(a);)p[t[1].toLowerCase()]=t[2]}
t=p[e.toLowerCase()]}return null==t?null:t},
getAllResponseHeaders:function(){return 2===y?a:null},
setRequestHeader:function(e,t){var i=e.toLowerCase();if(!y){
e=b[i]=b[i]||e;v[e]=t}return this},overrideMimeType:function(e){
y||(h.mimeType=e);return this},statusCode:function(e){var t
;if(e)if(y<2)for(t in e)g[t]=[g[t],e[t]];else C.always(e[C.status])
;return this},abort:function(e){var t=e||w;d&&d.abort(t);o(0,t)
;return this}};_.promise(C).complete=m.add;C.success=C.done
;C.error=C.fail
;h.url=((t||h.url||ti)+"").replace(qt,"").replace(Xt,ii[1]+"//")
;h.type=i.method||i.type||h.method||h.type
;h.dataTypes=ue.trim(h.dataType||"*").toLowerCase().match(ze)||[""]
;if(null==h.crossDomain){n=Qt.exec(h.url.toLowerCase())
;h.crossDomain=!(!n||n[1]===ii[1]&&n[2]===ii[2]&&(n[3]||("http:"===n[1]?"80":"443"))===(ii[3]||("http:"===ii[1]?"80":"443")))
}
h.data&&h.processData&&"string"!=typeof h.data&&(h.data=ue.param(h.data,h.traditional))
;G(Jt,h,i,C);if(2===y)return C
;(c=ue.event&&h.global)&&0==ue.active++&&ue.event.trigger("ajaxStart")
;h.type=h.type.toUpperCase();h.hasContent=!Zt.test(h.type)
;r=h.url;if(!h.hasContent){if(h.data){
r=h.url+=(Ot.test(r)?"&":"?")+h.data;delete h.data}
!1===h.cache&&(h.url=Gt.test(r)?r.replace(Gt,"$1_="+Wt++):r+(Ot.test(r)?"&":"?")+"_="+Wt++)
}if(h.ifModified){
ue.lastModified[r]&&C.setRequestHeader("If-Modified-Since",ue.lastModified[r])
;ue.etag[r]&&C.setRequestHeader("If-None-Match",ue.etag[r])}
(h.data&&h.hasContent&&!1!==h.contentType||i.contentType)&&C.setRequestHeader("Content-Type",h.contentType)
;C.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+ei+"; q=0.01":""):h.accepts["*"])
;for(s in h.headers)C.setRequestHeader(s,h.headers[s])
;if(h.beforeSend&&(!1===h.beforeSend.call(u,C,h)||2===y))return C.abort()
;w="abort";for(s in{success:1,error:1,complete:1})C[s](h[s])
;if(d=G(Kt,h,i,C)){C.readyState=1;c&&f.trigger("ajaxSend",[C,h])
;if(2===y)return C
;h.async&&h.timeout>0&&(l=e.setTimeout(function(){
C.abort("timeout")},h.timeout));try{y=1;d.send(v,o)}catch(x){
if(!(y<2))throw x;o(-1,x)}}else o(-1,"No Transport");return C},
getJSON:function(e,t,i){return ue.get(e,t,i,"json")},
getScript:function(e,t){return ue.get(e,undefined,t,"script")}})
;ue.each(["get","post"],function(e,t){ue[t]=function(e,i,o,n){
if(ue.isFunction(i)){n=n||o;o=i;i=undefined}
return ue.ajax(ue.extend({url:e,type:t,dataType:n,data:i,
success:o},ue.isPlainObject(e)&&e))}});ue._evalUrl=function(e){
return ue.ajax({url:e,type:"GET",dataType:"script",cache:!0,
async:!1,global:!1,throws:!0})};ue.fn.extend({
wrapAll:function(e){
if(ue.isFunction(e))return this.each(function(t){
ue(this).wrapAll(e.call(this,t))});if(this[0]){
var t=ue(e,this[0].ownerDocument).eq(0).clone(!0)
;this[0].parentNode&&t.insertBefore(this[0]);t.map(function(){
for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild
;return e}).append(this)}return this},wrapInner:function(e){
return ue.isFunction(e)?this.each(function(t){
ue(this).wrapInner(e.call(this,t))}):this.each(function(){
var t=ue(this),i=t.contents();i.length?i.wrapAll(e):t.append(e)
})},wrap:function(e){var t=ue.isFunction(e)
;return this.each(function(i){
ue(this).wrapAll(t?e.call(this,i):e)})},unwrap:function(){
return this.parent().each(function(){
ue.nodeName(this,"body")||ue(this).replaceWith(this.childNodes)
}).end()}});ue.expr.filters.hidden=function(e){
return pe.reliableHiddenOffsets()?e.offsetWidth<=0&&e.offsetHeight<=0&&!e.getClientRects().length:Q(e)
};ue.expr.filters.visible=function(e){
return!ue.expr.filters.hidden(e)}
;var oi=/%20/g,ni=/\[\]$/,si=/\r?\n/g,ri=/^(?:submit|button|image|reset|file)$/i,ai=/^(?:input|select|textarea|keygen)/i
;ue.param=function(e,t){var i,o=[],n=function(e,t){
t=ue.isFunction(t)?t():null==t?"":t
;o[o.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}
;t===undefined&&(t=ue.ajaxSettings&&ue.ajaxSettings.traditional)
;if(ue.isArray(e)||e.jquery&&!ue.isPlainObject(e))ue.each(e,function(){
n(this.name,this.value)});else for(i in e)J(i,e[i],t,n)
;return o.join("&").replace(oi,"+")};ue.fn.extend({
serialize:function(){return ue.param(this.serializeArray())},
serializeArray:function(){return this.map(function(){
var e=ue.prop(this,"elements");return e?ue.makeArray(e):this
}).filter(function(){var e=this.type
;return this.name&&!ue(this).is(":disabled")&&ai.test(this.nodeName)&&!ri.test(e)&&(this.checked||!Ue.test(e))
}).map(function(e,t){var i=ue(this).val()
;return null==i?null:ue.isArray(i)?ue.map(i,function(e){return{
name:t.name,value:e.replace(si,"\r\n")}}):{name:t.name,
value:i.replace(si,"\r\n")}}).get()}})
;ue.ajaxSettings.xhr=e.ActiveXObject!==undefined?function(){
return this.isLocal?ee():oe.documentMode>8?K():/^(get|post|head|put|delete|options)$/i.test(this.type)&&K()||ee()
}:K;var li=0,ci={},di=ue.ajaxSettings.xhr()
;e.attachEvent&&e.attachEvent("onunload",function(){
for(var e in ci)ci[e](undefined,!0)})
;pe.cors=!!di&&"withCredentials"in di
;(di=pe.ajax=!!di)&&ue.ajaxTransport(function(t){
if(!t.crossDomain||pe.cors){var i;return{send:function(o,n){
var s,r=t.xhr(),a=++li
;r.open(t.type,t.url,t.async,t.username,t.password)
;if(t.xhrFields)for(s in t.xhrFields)r[s]=t.xhrFields[s]
;t.mimeType&&r.overrideMimeType&&r.overrideMimeType(t.mimeType)
;t.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest")
;for(s in o)o[s]!==undefined&&r.setRequestHeader(s,o[s]+"")
;r.send(t.hasContent&&t.data||null);i=function(e,o){var s,l,c
;if(i&&(o||4===r.readyState)){delete ci[a];i=undefined
;r.onreadystatechange=ue.noop
;if(o)4!==r.readyState&&r.abort();else{c={};s=r.status
;"string"==typeof r.responseText&&(c.text=r.responseText);try{
l=r.statusText}catch(d){l=""}
s||!t.isLocal||t.crossDomain?1223===s&&(s=204):s=c.text?200:404}
}c&&n(s,l,c,r.getAllResponseHeaders())}
;t.async?4===r.readyState?e.setTimeout(i):r.onreadystatechange=ci[a]=i:i()
},abort:function(){i&&i(undefined,!0)}}}});ue.ajaxSetup({
accepts:{
script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},contents:{script:/\b(?:java|ecma)script\b/},converters:{
"text script":function(e){ue.globalEval(e);return e}}})
;ue.ajaxPrefilter("script",function(e){
e.cache===undefined&&(e.cache=!1);if(e.crossDomain){e.type="GET"
;e.global=!1}});ue.ajaxTransport("script",function(e){
if(e.crossDomain){
var t,i=oe.head||ue("head")[0]||oe.documentElement;return{
send:function(o,n){(t=oe.createElement("script")).async=!0
;e.scriptCharset&&(t.charset=e.scriptCharset);t.src=e.url
;t.onload=t.onreadystatechange=function(e,i){
if(i||!t.readyState||/loaded|complete/.test(t.readyState)){
t.onload=t.onreadystatechange=null
;t.parentNode&&t.parentNode.removeChild(t);t=null
;i||n(200,"success")}};i.insertBefore(t,i.firstChild)},
abort:function(){t&&t.onload(undefined,!0)}}}})
;var pi=[],hi=/(=)\?(?=&|$)|\?\?/;ue.ajaxSetup({
jsonp:"callback",jsonpCallback:function(){
var e=pi.pop()||ue.expando+"_"+Wt++;this[e]=!0;return e}})
;ue.ajaxPrefilter("json jsonp",function(t,i,o){
var n,s,r,a=!1!==t.jsonp&&(hi.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&hi.test(t.data)&&"data")
;if(a||"jsonp"===t.dataTypes[0]){
n=t.jsonpCallback=ue.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback
;a?t[a]=t[a].replace(hi,"$1"+n):!1!==t.jsonp&&(t.url+=(Ot.test(t.url)?"&":"?")+t.jsonp+"="+n)
;t.converters["script json"]=function(){
r||ue.error(n+" was not called");return r[0]}
;t.dataTypes[0]="json";s=e[n];e[n]=function(){r=arguments}
;o.always(function(){s===undefined?ue(e).removeProp(n):e[n]=s
;if(t[n]){t.jsonpCallback=i.jsonpCallback;pi.push(n)}
r&&ue.isFunction(s)&&s(r[0]);r=s=undefined});return"script"}})
;ue.parseHTML=function(e,t,i){
if(!e||"string"!=typeof e)return null;if("boolean"==typeof t){
i=t;t=!1}t=t||oe;var o=Ce.exec(e),n=!i&&[]
;if(o)return[t.createElement(o[1])];o=g([e],t,n)
;n&&n.length&&ue(n).remove();return ue.merge([],o.childNodes)}
;var ui=ue.fn.load;ue.fn.load=function(e,t,i){
if("string"!=typeof e&&ui)return ui.apply(this,arguments)
;var o,n,s,r=this,a=e.indexOf(" ");if(a>-1){
o=ue.trim(e.slice(a,e.length));e=e.slice(0,a)}
if(ue.isFunction(t)){i=t;t=undefined
}else t&&"object"==typeof t&&(n="POST");r.length>0&&ue.ajax({
url:e,type:n||"GET",dataType:"html",data:t}).done(function(e){
s=arguments
;r.html(o?ue("<div>").append(ue.parseHTML(e)).find(o):e)
}).always(i&&function(e,t){r.each(function(){
i.apply(this,s||[e.responseText,t,e])})});return this}
;ue.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){
ue.fn[t]=function(e){return this.on(t,e)}})
;ue.expr.filters.animated=function(e){
return ue.grep(ue.timers,function(t){return e===t.elem}).length}
;ue.offset={setOffset:function(e,t,i){
var o,n,s,r,a,l,c,d=ue.css(e,"position"),p=ue(e),h={}
;"static"===d&&(e.style.position="relative");a=p.offset()
;s=ue.css(e,"top");l=ue.css(e,"left")
;if(c=("absolute"===d||"fixed"===d)&&ue.inArray("auto",[s,l])>-1){
r=(o=p.position()).top;n=o.left}else{r=parseFloat(s)||0
;n=parseFloat(l)||0}
ue.isFunction(t)&&(t=t.call(e,i,ue.extend({},a)))
;null!=t.top&&(h.top=t.top-a.top+r)
;null!=t.left&&(h.left=t.left-a.left+n)
;"using"in t?t.using.call(e,h):p.css(h)}};ue.fn.extend({
offset:function(e){
if(arguments.length)return e===undefined?this:this.each(function(t){
ue.offset.setOffset(this,e,t)});var t,i,o={top:0,left:0
},n=this[0],s=n&&n.ownerDocument;if(s){t=s.documentElement
;if(!ue.contains(t,n))return o
;"undefined"!=typeof n.getBoundingClientRect&&(o=n.getBoundingClientRect())
;i=te(s);return{
top:o.top+(i.pageYOffset||t.scrollTop)-(t.clientTop||0),
left:o.left+(i.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}}},
position:function(){if(this[0]){var e,t,i={top:0,left:0
},o=this[0]
;if("fixed"===ue.css(o,"position"))t=o.getBoundingClientRect();else{
e=this.offsetParent();t=this.offset()
;ue.nodeName(e[0],"html")||(i=e.offset())
;i.top+=ue.css(e[0],"borderTopWidth",!0)
;i.left+=ue.css(e[0],"borderLeftWidth",!0)}return{
top:t.top-i.top-ue.css(o,"marginTop",!0),
left:t.left-i.left-ue.css(o,"marginLeft",!0)}}},
offsetParent:function(){return this.map(function(){
for(var e=this.offsetParent;e&&!ue.nodeName(e,"html")&&"static"===ue.css(e,"position");)e=e.offsetParent
;return e||ft})}});ue.each({scrollLeft:"pageXOffset",
scrollTop:"pageYOffset"},function(e,t){var i=/Y/.test(t)
;ue.fn[e]=function(o){return Be(this,function(e,o,n){var s=te(e)
;if(n===undefined)return s?t in s?s[t]:s.document.documentElement[o]:e[o]
;s?s.scrollTo(i?ue(s).scrollLeft():n,i?n:ue(s).scrollTop()):e[o]=n
},e,o,arguments.length,null)}})
;ue.each(["top","left"],function(e,t){
ue.cssHooks[t]=A(pe.pixelPosition,function(e,i){if(i){i=mt(e,t)
;return ht.test(i)?ue(e).position()[t]+"px":i}})});ue.each({
Height:"height",Width:"width"},function(e,t){ue.each({
padding:"inner"+e,content:t,"":"outer"+e},function(i,o){
ue.fn[o]=function(o,n){
var s=arguments.length&&(i||"boolean"!=typeof o),r=i||(!0===o||!0===n?"margin":"border")
;return Be(this,function(t,i,o){var n
;if(ue.isWindow(t))return t.document.documentElement["client"+e]
;if(9===t.nodeType){n=t.documentElement
;return Math.max(t.body["scroll"+e],n["scroll"+e],t.body["offset"+e],n["offset"+e],n["client"+e])
}return o===undefined?ue.css(t,i,r):ue.style(t,i,o,r)
},t,s?o:undefined,s,null)}})});ue.fn.extend({
bind:function(e,t,i){return this.on(e,null,t,i)},
unbind:function(e,t){return this.off(e,null,t)},
delegate:function(e,t,i,o){return this.on(t,e,i,o)},
undelegate:function(e,t,i){
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",i)
}});ue.fn.size=function(){return this.length}
;ue.fn.andSelf=ue.fn.addBack
;"function"==typeof define&&define.amd&&define("jquery",[],function(){
return ue});var fi=e.jQuery,_i=e.$;ue.noConflict=function(t){
e.$===ue&&(e.$=_i);t&&e.jQuery===ue&&(e.jQuery=fi);return ue}
;t||(e.jQuery=e.$=ue);return ue})
;String.prototype.capitalize=function(){
return"function"!=typeof this.charAt?this:this.charAt(0).toUpperCase()+this.substring(1,this.length)
};String.prototype.htmlTrim=function(){
var e=String.fromCharCode(160)
;return(this||"").replace(new RegExp("^[s"+e+"]+|[s"+e+"]+$","g"),"")
};String.prototype.truncate=function(e){
return this.length>e?this.substring(0,e-3)+"...":this+""}
;String.prototype.html_decode=function(){
return $('<div/>').html(this+"").text()}
;String.prototype.html_encode=function(){
return(this+"").replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&apos;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
};String.prototype.remove_accents=function(){
var e=this+"",t=[["\xc0\xc1\xc2\xc3\xc4\xc5","A"],["\xe0\xe1\xe2\xe3\xe4\xe5",'a'],['\xc8\xc9\xca\xcb','E'],['\xe8\xe9\xea\xeb','e'],['\xc7','C'],['\xe7','c'],['\xec\xed\xee\xef','i'],['\xcc\xcd\xce\xcf','I'],['\xd2\xd3\xd4\xd5\xd6\xd8','O'],['\xf2\xf3\xf4\xf5\xf6\xf8','o'],['\u0153','oe'],['\xdf','ss'],['\xd9\xda\xdb\xdc','u'],['\xf9\xfa\xfb\xfc','u'],['\xff','y'],['\xd1','N'],['\xf1','n']].each(function(t){
for(var i=0;i<t[0].length;i++)e=e.replace(new RegExp(t[0].charAt(i),"g"),t[1])
});return e};String.prototype.to_alphanumeric=function(e){
e=e||"_"
;return this.remove_accents().replace("_"!=e?/[^\w\_]+/g:/\W+/g,e)
};String.prototype.is_email=function(){
return this.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i)
};String.prototype.is_url=function(){
return this.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
};String.prototype.is_tel=function(){
return this.match(/^\+?[\d\s\.-]{6,}$/)}
;String.prototype.UTF8encode=function(){
string=this.replace(/\r\n/g,"\n")
;for(var e="",t=0;t<string.length;t++){
var i=string.charCodeAt(t)
;if(i<128)e+=String.fromCharCode(i);else if(i>127&&i<2048){
e+=String.fromCharCode(i>>6|192)
;e+=String.fromCharCode(63&i|128)}else{
e+=String.fromCharCode(i>>12|224)
;e+=String.fromCharCode(i>>6&63|128)
;e+=String.fromCharCode(63&i|128)}}return e}
;String.prototype.UTF8decode=function(){var e="",t=0,i=0,o=0,n=0
;utftext=this
;for(;t<utftext.length;)if((i=utftext.charCodeAt(t))<128){
e+=String.fromCharCode(i);t++}else if(i>191&&i<224){
n=utftext.charCodeAt(t+1);e+=String.fromCharCode((31&i)<<6|63&n)
;t+=2}else{n=utftext.charCodeAt(t+1);c3=utftext.charCodeAt(t+2)
;e+=String.fromCharCode((15&i)<<12|(63&n)<<6|63&c3);t+=3}
return e};String.prototype.obfuscate=function(){
for(var e="",t=0;t<this.length;++t)e+=String.fromCharCode(5^this.charCodeAt(t))
;return e};String.prototype.obfuscate36=function(){
for(var e="",t=0;t<this.length;++t)e+=(this.charCodeAt(t)+t+1).toString(36)
;return e};oburl=function(e,t){
if(e.match(/^\/files\/users\//))e=t?e.replace(/[^\/]+(...)$/,"sitew_protected.$1"):e.replace(/[^\/]+$/,"sitew_protected.swf");else if(e.match(/^\/fs\//)){
r=e.match(/(.*?\/)(\w+)-((.*?)(\.[^\.]+$)|(.*))/)
;e=r[1]+"sitew_protection/"+r[2].obfuscate36()+"-"+r[4]+(t?"":".swf")
}return e};String.prototype.strip=function(){
var e=document.createElement("div");e.innerHTML=this
;return e.textContent||e.innerText||""}
;String.prototype.singularize=function(){const e={ves:'fe',
ies:'y',i:'us',zes:'ze',ses:'s',es:'e',s:''}
;return this.replace(new RegExp(`(${Object.keys(e).join('|')})$`),function(t){
return e[t]})};String.prototype.pluralize=function(){
const e=[[/(ch|s|x|z)$/i,"$1es"],[/([^aeiou])y$/i,"$1ies"],[/([^aeiouy])o$/i,"$1oes"],[/([^aeiouy])e$/i,"$1es"],[/$/,"s"]]
;for(const t of e){const[e,i]=t
;if(this.match(e))return this.replace(e,i)}return this}
;window.Image==undefined&&(Image=function(){
return $("<img/>")[0]})
;Array.prototype.forEach||(Array.prototype.forEach=function(e,t){
for(var i=0,o=this.length;i<o;i++)e.call(t,this[i],i,this)})
;Array.prototype.each=function(e,t){
for(var i=0,o=this.length;i<o;i++)e.call(t,this[i],this)}
;Array.prototype.each_with_index=function(e,t){
for(var i=0,o=this.length;i<o;i++)e.call(t,this[i],i,this)}
;Array.prototype.collect=function(e,t){
for(var i=new Array,o=0,n=this.length;o<n;o++)i.push(e.call(t,this[o],this))
;return i};Array.prototype.find_index=function(e,t){
for(var i=0,o=this.length;i<o;i++)if(e.call(t,this[i],this))return i
;return null};Array.prototype.find=function(e,t){
for(var i=0,o=this.length;i<o;i++)if(e.call(t,this[i],this))return this[i]
;return null};Array.prototype.find_all=function(e,t){
for(var i=[],o=0,n=this.length;o<n;o++)e.call(t,this[o],this)&&i.push(this[o])
;return i};Array.prototype.include=function(e){
for(var t=0,i=this.length;t<i;t++)if(this[t]==e)return!0
;return!1};Array.prototype.includeOne=function(e){
for(var t=!1,i=0,o=this.length;!t&&i<o;i++)t|=e.include(this[i])
;return t};Array.prototype.removeAt=function(e){
return this.splice(e,1)[0]};Array.prototype.remove=function(e){
var t=this.indexOf(e);return t>=0&&this.splice(t,1)[0]}
;Array.prototype.removeAll=function(e){
for(var t=this.indexOf(e);t>=0;){this.splice(t,1)
;t=this.indexOf(e)}return this}
;Array.prototype.indexesOf=function(e){var t=[],i
;for(i=0;i<this.length;i++)this[i]===e&&t.push(i);return t}
;Array.prototype.to_h=function(e,t){t=t||"id";e=e||{}
;for(var i=0,o=this.length;i<o;i++){this[i][t]=this[i][t]||0
;e[this[i][t]||0]=this[i]}return e}
;Array.prototype.insertAt=function(e,t){var i=this.slice(0,t)
;i.push(e);return i.concat(this.slice(t))}
;Array.prototype.insertArrayAt=function(e,t){
var i=this.slice(0,t)
;return(i=i.concat(e)).concat(this.slice(t))}
;Array.prototype.max=function(){
for(var e=this[0],t=this.length,i=1;i<t;i++)this[i]>e&&(e=this[i])
;return e};Array.prototype.min=function(){
for(var e=this[0],t=this.length,i=1;i<t;i++)this[i]<e&&(e=this[i])
;return e};Array.prototype.unique=function(){var e=this
;return $.grep(this,function(t,i){return i==$.inArray(t,e)})}
;Array.prototype.move=function(e,t){
this.splice(t,0,this.splice(e,1)[0])}
;Array.prototype.diff=function(e){
return this.filter(function(t){return!(e.indexOf(t)>-1)})}
;Array.prototype.equals=function(e){if(!e)return!1
;if(this.length!=e.length)return!1
;for(var t=0,i=this.length;t<i;t++)if(this[t]instanceof Array&&e[t]instanceof Array){
if(!this[t].equals(e[t]))return!1}else if(this[t]!=e[t])return!1
;return!0}
;Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){
var i,o=t||0,n;if(!this)throw new TypeError
;if(0===(n=this.length)||o>=n)return-1;o<0&&(o=n-Math.abs(o))
;for(i=o;i<n;i++)if(this[i]===e)return i;return-1})
;Array.prototype.filter||(Array.prototype.filter=function(e){
"use strict";if(null==this)throw new TypeError
;var t=Object(this),i=t.length>>>0
;if("function"!=typeof e)throw new TypeError
;for(var o=[],n=arguments[1],s=0;s<i;s++)if(s in t){var r=t[s]
;e.call(n,r,s,t)&&o.push(r)}return o})
;Array.prototype.flatten=function(){
return this.reduce(function(e,t){
return e.concat(Array.isArray(t)?t.flatten():t)},[])}
;Array.prototype.shuffle=function(){
return this.sort(function(e,t){return.5-Math.random()})}
;Array.prototype.at||(Array.prototype.at=function(e){
return this.slice(e,e+1)[0]});this.JSON_||(JSON_=function(){
function f(e){return e<10?'0'+e:e}function stringify(e,t){
var i,o,n,s,r=/["\\\x00-\x1f\x7f-\x9f]/g,a;switch(typeof e){
case'string':return r.test(e)?'"'+e.replace(r,function(e){
var t=m[e];if(t)return t;t=e.charCodeAt()
;return'\\u00'+Math.floor(t/16).toString(16)+(t%16).toString(16)
})+'"':'"'+e+'"';case'number':
return isFinite(e)?String(e):'null';case'boolean':case'null':
return String(e);case'object':if(!e)return'null'
;if('function'==typeof e.toJSON)return stringify(e.toJSON())
;i=[]
;if('number'==typeof e.length&&!e.propertyIsEnumerable('length')){
s=e.length;for(o=0;o<s;o+=1)i.push(stringify(e[o],t)||'null')
;return'['+i.join(',')+']'}if(t){s=t.length
;for(o=0;o<s;o+=1)'string'==typeof(n=t[o])&&(a=stringify(e[n],t))&&i.push(stringify(n)+':'+a)
}else for(n in e)'string'==typeof n&&(a=stringify(e[n],t))&&i.push(stringify(n)+':'+a)
;return'{'+i.join(',')+'}'}}function stringify_safe(e,t,i){try{
var o,n,s,r,a=/["\\\x00-\x1f\x7f-\x9f]/g,l
;(t=t||{}).blacklist=t.blacklist||["responseXML"]
;t.start_time=t.start_time||new Date;t.width=t.width||1;i=i||1
;switch(typeof e){case'string':
return a.test(e)?'"'+e.replace(a,function(e){var t=m[e]
;if(t)return t;t=e.charCodeAt()
;return'\\u00'+Math.floor(t/16).toString(16)+(t%16).toString(16)
})+'"':'"'+e+'"';case'number':
return isFinite(e)?String(e):'null';case'boolean':case'null':
return String(e);case'object':if(!e)return'null'
;if('function'==typeof e.toJSON)return stringify_safe(e.toJSON(),t,i)
;o=[];i+=1;t.width+=1;if(i>(t.max_depth||12))return'"<TooDeep>"'
;if(t.width>(t.max_width||1e3))return'"<TooWide>"'
;if(new Date-t.start_time>(t.max_calculation_time||5e3))return'"<MaxCalcutionTime>"'
;if(e.nodeType)return stringify_safe($(e))
;if(e.jquery)return stringify({id:e.attr("id"),
class_:e.attr("class"),inner_html:e.html()})
;if(!('number'!=typeof e.length||e.propertyIsEnumerable&&e.propertyIsEnumerable('length'))){
r=Math.min(e.length,t.max_length||1e3)
;for(n=0;n<r;n+=1)o.push(stringify_safe(e[n],t,i)||'null')
;return'['+o.join(',')+']'}for(s in e){
if(new Date-t.start_time>(t.max_calculation_time||5e3))return'"<MaxCalcutionTime>"'
;if('string'==typeof s){try{
l=e[s]&&e[s].constructor&&-1!=blacklistType.indexOf(e[s].constructor)?'"<'+e[s].constructor+'>"':t.blacklist&&-1!=t.blacklist.indexOf(s)?'"<BlacklistedProperty>"':stringify_safe("xhr"==s?{
status:e[s].status,readyState:e[s].readyState,
responseText:e[s].responseText,timeout:e[s].timeout}:e[s],t,i)
}catch(c){l='"<UnreadableProperty '+c.toString()+'>"'}
l&&o.push(stringify(s)+':'+l)}}return'{'+o.join(',')+'}'
;case'undefined':return'"<undefined>"';case'function':
return null;default:return'"<UnstringifiableType '+typeof e+'>"'
}}catch(d){return'"<UnstringifiableType '+e.constructor+' >"'}}
Date.prototype.toJSON=function(){
return this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z'
};var m={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r',
'"':'\\"','\\':'\\\\'},blacklistType=[]
;window.HTMLDocument&&blacklistType.push(HTMLDocument)
;window.XMLDocument&&blacklistType.push(XMLDocument)
;window.Document&&blacklistType.push(Document);return{
stringify_safe:stringify_safe,stringify:stringify,
parse:function(text,filter){function walk(e,t){var i,o
;if(t&&'object'==typeof t)for(i in t)Object.prototype.hasOwnProperty.apply(t,[i])&&(o=walk(i,t[i]))!==undefined&&(t[i]=o)
;return filter(e,t)}var j
;if(/^[\],:{}\s]*$/.test(text.replace(/\\./g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(:?[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){
j=eval('('+text+')')
;return'function'==typeof filter?walk('',j):j}
throw new SyntaxError('parseJSON')}}}());!function(e,t,i){
function o(e,t){return typeof e===t}function n(){
var e,t,i,n,s,r,a;for(var l in w)if(w.hasOwnProperty(l)){e=[]
;if((t=w[l]).name){e.push(t.name.toLowerCase())
;if(t.options&&t.options.aliases&&t.options.aliases.length)for(i=0;i<t.options.aliases.length;i++)e.push(t.options.aliases[i].toLowerCase())
}n=o(t.fn,'function')?t.fn():t.fn;for(s=0;s<e.length;s++){
if(1===(a=(r=e[s]).split('.')).length)x[a[0]]=n;else{
!x[a[0]]||x[a[0]]instanceof Boolean||(x[a[0]]=new Boolean(x[a[0]]))
;x[a[0]][a[1]]=n}b.push((n?'':'no-')+a.join('-'))}}}
function s(e){var t=y.className,i=x._config.classPrefix||''
;k&&(t=t.baseVal);if(x._config.enableJSClass){
var o=new RegExp('(^|\\s)'+i+'no-js(\\s|$)')
;t=t.replace(o,'$1'+i+'js$2')}if(x._config.enableClasses){
t+=' '+i+e.join(' '+i);k?y.className.baseVal=t:y.className=t}}
function r(){
return'function'!=typeof t.createElement?t.createElement(arguments[0]):k?t.createElementNS.call(t,'http://www.w3.org/2000/svg',arguments[0]):t.createElement.apply(t,arguments)
}function a(e,t){return function(){return e.apply(t,arguments)}}
function l(e,t,i){var n
;for(var s in e)if(e[s]in t)return!1===i?e[s]:o(n=t[e[s]],'function')?a(n,i||t):n
;return!1}function c(e,t){return!!~(''+e).indexOf(t)}
function d(e){
return e.replace(/([a-z])-([a-z])/g,function(e,t,i){
return t+i.toUpperCase()}).replace(/^-/,'')}function p(e){
return e.replace(/([A-Z])/g,function(e,t){
return'-'+t.toLowerCase()}).replace(/^ms-/,'-ms-')}
function h(t,i,o){var n;if('getComputedStyle'in e){
n=getComputedStyle.call(e,t,i);var s=e.console
;if(null!==n)o&&(n=n.getPropertyValue(o));else if(s){var r
;s[s.error?'error':'log'].call(s,'getComputedStyle returning null, its possible modernizr test results are inaccurate')
}}else n=!i&&t.currentStyle&&t.currentStyle[o];return n}
function u(){var e=t.body;e||((e=r(k?'svg':'body')).fake=!0)
;return e}function f(e,i,o,n){
var s='modernizr',a,l,c,d,p=r('div'),h=u()
;if(parseInt(o,10))for(;o--;){(c=r('div')).id=n?n[o]:s+(o+1)
;p.appendChild(c)}(a=r('style')).type='text/css';a.id='s'+s
;(h.fake?h:p).appendChild(a);h.appendChild(p)
;a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e))
;p.id=s;if(h.fake){h.style.background=''
;h.style.overflow='hidden';d=y.style.overflow
;y.style.overflow='hidden';y.appendChild(h)}l=i(p,e);if(h.fake){
h.parentNode.removeChild(h);y.style.overflow=d;y.offsetHeight
}else p.parentNode.removeChild(p);return!!l}function _(t,o){
var n=t.length;if('CSS'in e&&'supports'in e.CSS){
for(;n--;)if(e.CSS.supports(p(t[n]),o))return!0;return!1}
if('CSSSupportsRule'in e){
for(var s=[];n--;)s.push('('+p(t[n])+':'+o+')')
;return f('@supports ('+(s=s.join(' or '))+') { #modernizr { position: absolute; } }',function(e){
return'absolute'==h(e,null,'position')})}return i}
function m(e,t,n,s){function a(){if(p){delete z.style
;delete z.modElem}}s=!o(s,'undefined')&&s;if(!o(n,'undefined')){
var l=_(e,n);if(!o(l,'undefined'))return l}
for(var p,h,u,f,m,g=['modernizr','tspan','samp'];!z.style&&g.length;){
p=!0;z.modElem=r(g.shift());z.style=z.modElem.style}u=e.length
;for(h=0;h<u;h++){f=e[h];m=z.style[f];c(f,'-')&&(f=d(f))
;if(z.style[f]!==i){if(s||o(n,'undefined')){a()
;return'pfx'!=t||f}try{z.style[f]=n}catch(v){}if(z.style[f]!=m){
a();return'pfx'!=t||f}}}a();return!1}function g(e,t,i,n,s){
var r=e.charAt(0).toUpperCase()+e.slice(1),a=(e+' '+$.join(r+' ')+r).split(' ')
;return o(t,'string')||o(t,'undefined')?m(a,t,n,s):l(a=(e+' '+T.join(r+' ')+r).split(' '),t,i)
}function v(e,t,o){return g(e,i,i,t,o)}
var b=[],y=t.documentElement,w=[],C={_version:'3.6.0',_config:{
classPrefix:'',enableClasses:!0,enableJSClass:!0,usePrefixes:!0
},_q:[],on:function(e,t){var i=this;setTimeout(function(){
t(i[e])},0)},addTest:function(e,t,i){w.push({name:e,fn:t,
options:i})},addAsyncTest:function(e){w.push({name:null,fn:e})}
},x=function(){};x.prototype=C;x=new x
;var k='svg'===y.nodeName.toLowerCase()
;x.addTest('rgba',function(){var e=r('a').style
;e.cssText='background-color:rgba(150,255,150,.5)'
;return(''+e.backgroundColor).indexOf('rgba')>-1})
;x.addTest('canvas',function(){var e=r('canvas')
;return!(!e.getContext||!e.getContext('2d'))})
;var S='Moz O ms Webkit',$=C._config.usePrefixes?S.split(' '):[]
;C._cssomPrefixes=$
;var T=C._config.usePrefixes?S.toLowerCase().split(' '):[]
;C._domPrefixes=T;var P={elem:r('modernizr')}
;x._q.push(function(){delete P.elem});var z={style:P.elem.style}
;x._q.unshift(function(){delete z.style});C.testAllProps=g
;C.testAllProps=v
;x.addTest('cssanimations',v('animationName','a',!0));n();s(b)
;delete C.addTest;delete C.addAsyncTest
;for(var I=0;I<x._q.length;I++)x._q[I]();e.Modernizr=x
}(window,document);var AjaxQueue=Class.create()
;AjaxQueue.prototype={initialize:function(e){this.url=e.url
;this.id=e.initial_id||0
;this.delay_between_requests=e.delay_between_requests||5e3
;this.global_data=e.global_data||{}
;this.queue_size_limit=e.queue_size_limit||5e5
;this.debug=e.debug||!1;this.success=e.success||null
;this.send_delay=e.send_delay||0;this.queue=[]
;this.request_pending=!1;this.last_request_time=null
;this.unsuccessfull_request=0},send:function(e){
this.debug?this.queue.push({date:new Date,page_log:page_log,
data:e,id:this.id}):this.queue.push({date:new Date,data:e,
id:this.id});this.id+=1;var t=this
;this.send_delay>0?setTimeout(function(){t._dequeue()
},this.send_delay):this._dequeue()},_dequeue:function(){
if(!this.request_pending&&this.queue.length>0){var e,t=this
;if(this.last_request_time&&(e=new Date-this.last_request_time-this.delay_between_requests)<0)setTimeout(function(){
t._dequeue()},-e);else{this.last_request_time=new Date
;this.request_pending=!0;var i=this.queue;this.queue=[];var o={
global_data:this.global_data,items:i};if(this.debug){
o.unsuccessfull_request=this.unsuccessfull_request
;o.request_time=this.last_request_time;o=JSON_.stringify_safe(o)
}else o=JSON_.stringify_safe(o)
;if(o.length>this.queue_size_limit){
dbg.log("AjaxQueue data too big, truncated to 1000 characters",o.substr(0,1e3))
;this.request_pending=!1;this._dequeue();return}jQuery.ajax({
url:this.url,simple_ajax:!0,type:"POST",
contentType:"application/json",data:o,cache:!1,timeout:12e4,
success:this.success,complete:function(e){t.request_pending=!1
;t._dequeue()},error:function(e,o,n){t.unsuccessfull_request+=1
;t.debug&&dbg.log("AjaxQueue request failed",{queue:t.url,xhr:e,
status:o,e:n,request_time:t.last_request_time})
;if(t.delay_between_requests<3e4){t.delay_between_requests+=5e3
;t.queue=i.concat(t.queue)}}})}}}}
;var application_starting_time=new Date;!function(e){var t={
startup_time:application_starting_time};try{
t.cookie=document.cookie}catch(s){t.cookie="Not Readable"}try{
t.screen=[screen.width,screen.height]}catch(r){
t.screen="Not Readable"}try{t.location=document.location.href
}catch(a){t.location="Not Readable"}try{
t.referer=document.referrer}catch(l){t.referer="Not Readable"}
var i=new AjaxQueue({url:"/log/js_exception",debug:!1,
global_data:t}),o=new AjaxQueue({url:"/log/js_error",debug:!1,
global_data:t}),n=0;window.onerror=function(t,o,s){
if(o&&("string"!=typeof o||!o.match(/google-analytics|^chrome:|undefined|twitter|cloudfront|netloader.cc|superfish|maxperview|addthis_widget/))){
var r={browser:navigator.userAgent};try{r.url=o}catch(a){}try{
r.line_no=s}catch(l){}try{
r.url?i.send(["window_onerror",[t,r]]):n<100&&e.ajax({
simple_ajax:!0,url:r.url,success:function(e){var o=e.split("\n")
;r.source=e.substr(0,2e3);if(0!=s)var n=s-1;try{
r["line "+(s-1)]=o[n-1]}catch(a){}try{r["line "+s]=o[n]
}catch(a){}try{r["line "+(s+1)]=o[n+1]}catch(a){}
i.send(["window_onerror",[t,r]])},error:function(e,o,n){
r.source="unreadable";r.reason_unreadable_source={xhr:e,error:o,
exp:n};i.send(["window_onerror",[t,r]])}})}catch(c){}}}
;$last_error=[];dbg={error:function(){stack=null;try{
stack=(new Error).stack.split("\n");stack.shift()}catch(e){}
if(!stack)try{stack=dbg.call_stack()}catch(e){}
o.send(["debug_error",arguments,stack]);if(console.clear){
$last_error.push(arguments)
;console.error.apply(console,arguments)}},
benchmark:function(e,t){var i=Date.now(),o=t(),n=Date.now()-i
;n>100&&console.log(e+" done in "+n+"ms");return o},
log:function(){console.log.apply(console,arguments)
;i.send(["debug_log"].concat(arguments))},client_infos:t,
call_stack:function(){
for(var e=[],t=arguments.callee.caller;t;){
var i=t.toString(),o=i.substring(i.indexOf("function")+8,i.indexOf("function")+68)||'anonymous'
;e.push(o);try{t=t.caller}catch(n){t=null}}return e}}
;cc=function(t){if(t){var i=null
;v.pages_fg.concat([v.page_bg],v.headers,v.footers).each(function(o){
i=i||o.getCpts().find(function(i){
return i.node&&i.node.is(e(t).closest(".component"))})})
;return i}
if(blockSelector&&blockSelector.selectedCpt())return blockSelector.selectedCpt()
;console.log("Selectionner un noeud ou donner un noeud en parametre pour trouver le cpt associ\xe9")
};cs=function(){
return e(".section.section--selected").data("section")?e(".section.section--selected").data("section"):console.log("Aucune section s\xe9lectionn\xe9e")
};secByTop=function(e){
return v.getSelectedPage().getSectionByYPosition(e)}
;jQuery.log=function(i,o,s){s?s.notry+=1:s=Object.extend({
date:new Date,notry:1,logged_infos:o},t);if(n<100){n+=1;var o
;if((o=JSON_.stringify_safe(s)).length>1e4){o=o.substr(0,1e4)
;var r="text/plain"}else var r="application/json";var a={
url:"/log/"+i,simple_ajax:!0,type:"POST",dataType:"text",
contentType:r,data:JSON_.stringify_safe(s),cache:!1}
;return e.ajax(a)}}}(jQuery);!function(e,t){'$:nomunge'
;var i=e.jQuery||e.Cowboy||(e.Cowboy={}),o
;i.throttle=o=function(e,o,n,s){function r(){function i(){
l=+new Date;n.apply(c,p)}function r(){a=t}
var c=this,d=+new Date-l,p=arguments;s&&!a&&i()
;a&&clearTimeout(a)
;s===t&&d>e?i():!0!==o&&(a=setTimeout(s?r:i,s===t?e-d:e))}
var a,l=0;if('boolean'!=typeof o){s=n;n=o;o=t}
i.guid&&(r.guid=n.guid=n.guid||i.guid++);return r}
;i.debounce=function(e,i,n){return n===t?o(e,i,!1):o(e,n,!1!==i)
}}(this);USE_CDN=!0
;cdn_paths=[["//v-assets.cdnsw.com"],["//v-assets-no-cdn.cdnsw.com"],["//v-assets-no-cache.cdnsw.com"]]

;cdn_static_paths=[["//st0.cdnsw.com"],["//st0-no-cdn.cdnsw.com"],[""]]
;var cdn_failed={};loadCSSAsync=function(e,t,i,o){
loadCSS(e,t,i,o,!0)};jQuery.cache_version="20260416093028"
;jQuery.icons_md5="0589b3481ff064427e2fdcb941cdac77"
;jQuery.custom_cache_version=1;COVID=!1
;var requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame
;window.requestAnimationFrame=requestAnimationFrame
;!function(e){if(e&&e.fn&&!e.fn._scrollBehaviorPatched){
var t=e.fn.animate;e.fn.animate=function(e){
var i=e&&'object'==typeof e&&e.scrollTop!==undefined,o=[]
;i&&this.each(function(){if(this&&this.style){
var e=this.style.scrollBehavior;o.push({node:this,value:e})
;this.style.scrollBehavior='auto'}})
;var n=t.apply(this,arguments)
;i&&o.length&&n&&n.promise&&n.promise().always(function(){
o.forEach(function(e){
e.node&&e.node.style&&(e.value?e.node.style.scrollBehavior=e.value:e.node.style.removeProperty?e.node.style.removeProperty('scroll-behavior'):e.node.style.scrollBehavior='')
})});return n};e.fn._scrollBehaviorPatched=!0}}(jQuery)
;jQuery.fn.enableImg=function(e){return this.each(function(){
null==e&&(e=!0);var t=this.src.match(/^(.*\/)dis-(.*)/)
;if(t&&e)this.src=t[1]+t[2];else if(!t&&!e){
var i=this.src.match(/^(.*\/)(.*)/);this.src=i[1]+"dis-"+i[2]}})
}
;jQuery.bot=!!(window.server_side_user_agent||navigator.userAgent).match(/bot|spider|crawl|speed|dareboost|Lighthouse|Insight/i)

;jQuery.chrome=navigator.userAgent.match(/Chrome\//)&&!navigator.userAgent.match(/Chromium\//)

;var total_pixel_loading=0,time_between_try=jQuery.bot?2e3:100,deferred_loading_total_pixel=jQuery.bot?(window.outerWidth||screen.availWidth)*(window.outerHeight||screen.availHeight):1e7,nbr_try_img_load_try=1e4/time_between_try,image_loading_reset=null
;jQuery.fn.cdnSrc=function(e,t,i,o){
image_loading_reset||(image_loading_reset=setTimeout(function(){
total_pixel_loading=0;image_loading_reset=null},3e4));var n=this
;if((o||0)<nbr_try_img_load_try&&total_pixel_loading>deferred_loading_total_pixel){
setTimeout(function(){n.cdnSrc(e,t,i,(o||0)+1)
},time_between_try);return this}return this.each(function(){
var n=$(this),s=$(this),r=t&&i?t*i:9e4
;"DIV"==this.tagName&&(s=$("<img>"))
;s.one("error abort",function(){
var s=e.match(/ra0\.cdnsw\.com\/cc0\/(.*?)#pb:(.*?)\|(.*)/)
;if(s){n.cdnSrc(s[3],t,i,o)
;$.get("https://www.sitew.com/file/check_pixabay/",{key:s[1],
tmp_key:s[2]},function(){n.cdnSrc(e.replace(/#.*/,""),t,i,o)})
}else{cdn_failing(this);total_pixel_loading-=r}
}).one("load",function(){total_pixel_loading-=r})
;total_pixel_loading+=r;s[0].src=cdn_url(e)
;"DIV"==this.tagName&&n.css({
"background-image":"url("+cdn_url(e)+")"})})}
;jQuery.fn.setImage=function(e,t,i,o){o||(o={})
;o.keep_ratio==undefined&&(o.keep_ratio=!0)
;o.protect==undefined&&(o.protect=!1)
;o.lightGallery==undefined&&(o.lightGallery=!1)
;o.no_canvas==undefined&&(o.no_canvas=!1)
;window.deviceController&&/mobile/.test(deviceController.device)&&!o.lightGallery&&(o.no_canvas=!0)
;var n=$.Deferred(),s=Math.max(t,i),r=null,a=null,l=this,c=$("<div></div>").css("position","relative")
;if(o.lightGallery){c.css({display:"inline-block",
"vertical-align":"middle"})
;this.is(".lg-thumb-item")||(l=this.find(".lg-img-wrap"))}
o.class_&&c.addClass(o.class_);var d=function(){
var e=document.createElement('canvas')
;return!(!e.getContext||!e.getContext('2d'))},p=function(e){try{
var s=$("<canvas id='canvas' width="+t+" height="+i+">"),a=s.get(0).getContext('2d'),l=$(new Image).on("load",function(){
a.drawImage(this,0,0,this.width,this.height,0,0,s.attr('width'),s.attr('height'))
;n.resolve()}).cdnSrc(r,1e3,700);c.append(s)
;if(o.lightGallery)s.css("pointer-events","none");else{
var d=$("<img border=0 src="+cdn_url("/images/spacer.gif")+">").width(t).height(i).css({
left:0,position:"absolute"});c.append(d)}}catch(p){}}
;if(null==i){i=Math.max(l.height(),Math.min(t,e.width))
;o.keep_ratio=!0}if(o.keep_ratio){var h=e.width/e.height
;if(o.full_height&&parseInt(e.height*t/e.width)<i)t=i*h;else{
var u=parseInt(e.width*i/e.height)
;t&&u>=t?i=parseInt(e.height*t/e.width):t=u}}s=Math.max(t,i)
;r=bestImgSrc(e,t,i)
;if(o.protect&&!o.no_canvas&&!e.url.match(/\.((gif)|(svg))(\?.*)?$/)&&d())p();else{
var f
;if(r&&r.match(/\.svg$/))f=$("<div>").addClass("svg_wrapper").append($('<object>Votre navigateur ne supporte pas les SVG.</object>').attr({
height:i,width:t,type:"image/svg+xml",data:cdn_url(r)
})).append($('<div>').addClass("svg_overlay"));else{
f=$('<img />').attr({height:i,width:t,border:0,
draggable:"false",src:cdn_url(r)});e.srcset&&f.attr({
srcset:Object.keys(e.srcset).map(function(t){
return cdn_url(e.srcset[t])+" "+t+"w"}).join(', ')})}
c.empty().append(f);n.resolve()}try{if(r&&r.match(/\.swf$/)){
var _;$("<div></div>").replaceAll(c).setFlash({url:r},t,i)}
o.protect||c.find('img').attr('border',0)}catch(m){
dbg.error("Can not set Image size.",{error:m,src:r,w:t,h:i})}
n.then(function(){l[0]!=document&&(c=l.empty().append(c))})
;return c};jQuery.fn.loadImage=function(e){var t=function(t){
function i(){n();t.resolve(s)}function o(){n();t.reject(s)}
function n(){s.onload=null;s.onerror=null;s.onabort=null}
var s=new Image;s.onload=i;s.onerror=o;s.onabort=o;s.src=e}
;return $.Deferred(t).promise()}
;jQuery.fn.setFlash=function(e,t,i){
for(var o=e.url,n=function(){
return"__setFlash"+parseInt(1e6*Math.random())
},s=n();$("#"+s).length>0;)s=n()
;var r=new FlashObject(o,s,t,i,"7","transparent")
;r.addParam("scale","scale");r.addParam("wmode","transparent")
;r.addVariable("lzproxied","false");r.write(this[0]);return s}
;jQuery.fn.genId=function(e){e=e||"_rand_";var t;do{
t=e+parseInt(1e6*Math.random())}while($(t).length);return t}
;jQuery.fn.setVideo=function(e,t,i,o){o||(o={})
;o.muted=!!o.muted
;var n=e.url,s=$.fn.genId("__setVideo"),r=this,a
;if(navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/))var l=!0
;var c="video_cover"==o["class"],d=0!=o.player_buttons&&!(c&&!l),p=$("<div id="+s+">").appendTo($(r).empty())
;o.show_on_play&&p.css("opacity",0)
;if(e.url.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/i))Apis.youtube_player(function(){
var n={fs:1,rel:0,modestbranding:1,showinfo:0,
iv_load_policy:c?3:1,controls:d?1:0,autoplay:o.autoplay||c,
loop:o.loop||c?1:0,mute:o.muted?1:0};n.loop&&(n.playlist=e.id)
;a=new YT.Player(p.get(0),{videoId:e.id,height:i,width:t,
playerVars:n,events:{onReady:function(e){
o.muted&&e.target.mute();(o.autoplay||c)&&e.target.playVideo()},
onStateChange:function(e){switch(e.data){
case YT.PlayerState.PLAYING:
o.show_on_play&&$("#"+s).css("opacity",1);break
;case YT.PlayerState.ENDED:case YT.PlayerState.PAUSED:
o.show_on_play&&$("#"+s).css("opacity",0)}}}})
});else if(e.url.match(/dailymotion/i)){
var h=o.autoplay||c,u="https://www.dailymotion.com/embed/video/"+encodeURIComponent(e.id)
;u+="?autoplay="+(h?"1":"0");o.muted&&(u+="&mute=1")
;d||(u+="&controls=0");(o.loop||c)&&(u+="&loop=1")
;var f="fullscreen; picture-in-picture; web-share"
;h&&(f="autoplay; "+f);var _=$('<iframe>').attr({src:u,width:t,
height:i,frameborder:0,allow:f});p.append(_)
;o.show_on_play&&$("#"+s).css("opacity",1)
}else if(e.url.match(/twitch.tv/i))Apis.twitch(function(){var n
;new Twitch.Player($(p).attr("id"),{width:t,height:i,
channel:e.name}).setMuted(o.muted)
});else if(e.url.match(/vimeo/i))Apis.vimeo(function(){
setTimeout(function(){
$("#"+p.attr("id")).length&&new Vimeo.Player(p.attr("id"),{
id:parseInt(e.id),width:Math.round(t),height:Math.round(i),
loop:o.loop||c,autoplay:o.autoplay||c,
autopause:!(o.autoplay||c),muted:o.muted,title:d,controls:d})
},1500)});else if(e.url.match(/facebook/i)){
var m="data-autoplay='"+o.autoplay+"'",g,a='<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com'+e.permalink_url+'&width='+t+'&show_text=true&height='+i+'&appId" width="'+t+'" height="'+i+'" style="border:none;overflow:hidden;" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>'
;$(p.get(0)).append(a)}else if("sitew"==e.api){var v
;v=e.url.replace(/.*\/([^-]+)-(.*)/,"https://v-documents-no-cdn.cdnsw.com/$1/$2")
;var b=$('<video>').attr('src',v).prop({loop:o.loop||c,
muted:o.muted||c,controls:d||!!c,controlsList:"nodownload",
playsinline:o.autoplay||c||!d,autoplay:o.autoplay||c
}).addClass('uiv_sw_video');this.html(b);var r=this
;this.find('video').on('loadedmetadata',function(e){
o.onLoadedmetadata&&o.onLoadedmetadata.call(this,e)})}
Misc.poll(function(){return $(r).find("iframe:first").length
},function(){var e=$(r).find("iframe:first")
;e.attr("webkitallowfullscreen","true").attr("mozallowfullscreen",!0).attr("allowfullscreen","true")
;c&&e.addClass("video_cover")});return s}
;jQuery.fn.setIcon=function(e,t,i,o){
var n=this,s=$("<i class='custom_icon'></i>"),r=$.Deferred(),a=function(e){
e.find("svg").css({width:"100%",height:"100%",display:"block"})
},o=o||{},l=function(){
return o&&o.fsOwner&&o.fsToken!=o.fsOwner.list_render_token}
;t&&(s=t);var c=function(){Apis.webfont(function(){
$("html").hasClass("wf-symbola-n4-active")?i&&i():WebFont.load({
custom:{families:['symbola'],
urls:["https://st0.cdnsw.com/assets/precompile/cpts/common/icons-c24affeba0560b4dbd75121f8843d219.css"]
},fontactive:function(){i&&i()}})})},d=function(){
Apis.webfont(function(){
$("html").hasClass("wf-socicon-n4-active")?i&&i():WebFont.load({
custom:{families:['socicon'],
urls:["https://st0.cdnsw.com/assets/precompile/cpts/common/socicon_icons-f48c65eeee0e8e6bdaa093b818ce0122.css"]
},fontactive:function(){i&&i()}})})};switch(e.service){
case"Google-material-icons":Apis.webfont(function(){
$("html").hasClass("wf-materialicons-n4-active")?i&&i():WebFont.load({
google:{families:["Material Icons"]},fontactive:function(){
i&&i()}})});s.addClass("material-icons");s.html(e.name)
;r.resolve();break;case"Simple-icons":
s=$("<div>").addClass("custom_icon simple-icons-icon")
;jQuery.fn.setIllustration.call(s,e,undefined,undefined,o).then(function(){
r.resolve()});break;case"Symbola":c()
;s.addClass("symbola_icons");s.html(e.name);r.resolve();break
;case"Iconoir":s=$("<div>").addClass("custom_icon iconoir-icon")
;jQuery.fn.setIllustration.call(s,e,undefined,undefined,o).then(function(){
r.resolve()});break;case"Phosphor":
s=$("<div>").addClass("custom_icon phosphor-icon")
;jQuery.fn.setIllustration.call(s,e,undefined,undefined,o).then(function(){
r.resolve()});break;case"Socicon":
var p=$("<div>").addClass("custom_icon simple-icons-icon"),h=$.get("/file/custom_icon/"+e.id,{},function(t){
if(!l())if(t&&t.content){s=p
;jQuery.fn.setIllustration.call(s,$.extend({},e,{
content:t.content}),undefined,undefined,o).then(function(){
r.resolve()})}else{d();s.addClass("socicon");s.html(e.name)
;r.resolve()}},"json").fail(function(){if(!l()){d()
;s.addClass("socicon");s.html(e.name);r.resolve()}})
;o&&o.fsOwner&&o.fsOwner.registerPendingRenderXhr(h,o.fsToken)}
if(t)return s;var u=$.Deferred();r.then(function(){if(!l()){
n.each(function(){var e=$(this),t=s.clone();a(t);e.append(t)})
;u.resolve()}});return u};jQuery.fn._illustrations_cache={}
;jQuery.fn.setIllustration=function(e,t,i,o,n){
var s=this,r=$("<div class='illustration'></div>"),a=$.Deferred(),l=function(){
return o&&o.fsOwner&&o.fsToken!=o.fsOwner.list_render_token}
;switch(e.service){case"undraw":
r.addClass("undraw-illustration")}var c=$.Deferred()
;c.then(function(e){if(!l()&&e){
r.html(e.replace(new RegExp("theme_color","g"),o.color?o.color:"#43a6dd"))
;t&&i&&r.find('svg').attr({width:t,height:i});n&&n(s)
;s.each(function(){var e=$(this);r.appendTo(e)});a.resolve(e)}})
;if(e.content)c.resolve(e.content);else{
var d=o&&o.no_cache?null:$.fn._illustrations_cache[e.id]
;if(d)d.then(function(e){c.resolve(e.content)});else{
var p=$.get("/file/"+("Iconoir"==e.service||"Phosphor"==e.service||"Simple-icons"==e.service?"custom_icon":"illustration")+"/"+e.id,{},null,"json")
;o&&o.no_cache||($.fn._illustrations_cache[e.id]=p)
;o&&o.fsOwner&&o.fsOwner.registerPendingRenderXhr(p,o.fsToken)
;p.then(function(e){c.resolve(e.content)}).fail(function(){
o&&o.no_cache||$.fn._illustrations_cache[e.id]!=p||delete $.fn._illustrations_cache[e.id]
})}}return a}
;jQuery.fn.setBackgroundGradient=function(array_gradient,orientation,angle,animate){
if(array_gradient){
array_gradient=Misc.deepCloneObj(array_gradient)
;array_gradient.forEach(function(element){
element[1].match(/get_color\(\d,\s?-?\d\)/)&&(element[1]=eval(element[1]))
})
;this.css("background",CSS_PARSER.getBackgroundGradient(array_gradient,orientation,angle,animate))
;if(animate){this.css("background-size","400% 400%")
;"diagonal"!=orientation?this.addClass("gradient_animation_"+(orientation||"vertical")):angle<45||135<angle<225||315<angle?this.addClass("gradient_animation_vertical"):this.addClass("gradient_animation_horizontal")
}return this}
console.warn("array_gradient is not defined ",array_gradient)}
;jQuery.fn.overrideWindowScroll=function(e){if(e){
if(!window.overrideWindowScroll){window.overrideWindowScroll=!0
;var t=!1,i=!1,o=0,n=0,s=0;function r(e){switch(e.keyCode){
case 38:e.preventDefault();i=!0;s=1;o=40;break;case 40:
e.preventDefault();i=!0;s=-1;o=40;break;case 35:
e.preventDefault();i=!0;s=-1;o=$("body").height();break;case 36:
e.preventDefault();i=!0;s=1;o=$("body").height();break;case 33:
e.preventDefault();i=!0;s=1;o=window.innerHeight/4;break
;case 34:e.preventDefault();i=!0;s=-1;o=window.innerHeight/4}}
function a(e){i=!0;e.preventDefault&&e.preventDefault()
;e.wheelDelta?s=e.wheelDelta/120:e.detail&&(s=-e.detail/3);o=40}
function l(){if(i){window.scrollBy(0,-s*o);if(++n>3){n=0;i=!1
;s=0}}requestAnimationFrame(l)}
window.addEventListener("mousewheel",a,!1)
;window.addEventListener("DOMMouseScroll",a,!1)
;window.addEventListener("keydown",r);l()}
}else if(window.overrideWindowScroll){
window.removeEventListener("mousewheel",a,!1)
;window.removeEventListener("DOMMouseScroll",a,!1)
;window.removeEventListener("keydown",r)}}
;jQuery.fn.setImgFilter=function(e,t,i,o,n,s){s=s||$()
;if("carousel"==t){node2=e.find(".gallery")
;e=e.find(".img_click")}"image"==t?e.css({filter:"",
"-webkit-filter":""}):e.filter(function(e,t){$(t).css({
filter:"","-webkit-filter":""})})
;$(".wholeGradientProperty",s).hide();$("#"+o).remove()
;switch(i){case"grayscale":e.css({filter:"grayscale(100%)",
"-webkit-filter":"grayscale(100%)"});break;case"blur":e.css({
filter:"blur(3px)","-webkit-filter":"blur(3px)"});break
;case"invert":e.css({filter:"invert(100%)",
"-webkit-filter":"invert(100%)"});break;case"contrast":e.css({
filter:"contrast(2)","-webkit-filter":"contrast(2)"});break
;case"color":
$(".wholeGradientProperty",s).show().children(":not(.roundSliderPropertyDiv)").show()
;$("<div id='"+o+"' class='img_overlay'></div>").prependTo("image"==t?e.parent().parent():node2)
;$("#"+o).setBackgroundGradient(n.color,n.or,n.angle)}}
;jQuery.fn.sizeload=function(e,t){var i=this
;return this.each(function(){var i=0,o=100,n=2e4/o,s=this
;if("IMG"==this.tagName){$(this).addClass("noHTC")
;var r=setInterval(function(){i++;if(s.width>0&&s.height>0){
clearInterval(r);var o=s.width,a=s.height
;$(s).removeClass("noHTC");e.apply(s,[o,a])}else if(i>n){
clearInterval(r);$(s).removeClass("noHTC");t&&t.apply(s)}},o)
}else var r=setInterval(function(){var o=0,a=0;try{
o=s.TGetProperty("/",8);a=s.TGetProperty("/",9)}catch(l){
dbg.log("TGetProperty Error")}i++;if(o>0&&a>0){clearInterval(r)
;e.call(s,o,a)}else if(i>n){clearInterval(r);t&&t.apply(s)}},o)
})};jQuery.fn.returnKey=function(e){return this.each(function(){
$(this).bind("keydown",function(t){try{var i
;t&&t.which?i=(t=t).which:"undefined"!=typeof event&&(i=(t=event).keyCode)
;if(13==i){e.call(this,arguments);return!1}}catch(t){}})})}
;jQuery.fn.rememberFocus=function(){return this.each(function(){
$(this).focus(function(){this.focused=!0}).blur(function(){
this.focused=!1})})};jQuery.fn.positionFixed=function(){
for(var e=this[0];e;){if("fixed"==$(e).css("position"))return!0
;e=e.offsetParent}return!1}
;jQuery.fn.setSocials=function(params){function getSiteUrl(){
return params.share_url||('editor'==v.mode?v.url:location.protocol+"//"+location.host)+(params.share_current_page&&"function"==typeof v.getSelectedPage().getUrl?v.getSelectedPage().getUrl():"")+"?"+Math.random()
}var deferreds=[],params=$.extend({services:{},order:[],
embed_options:{}},params||{})
;"share"==params.type&&(params.share_current_page=!0)
;var services={facebook:{icon:$.fn.fonticon('facebook'),color:{
type:"color",value:"#1877f2"},build_embed:function(e){
if(e.embed_options){if("post"==e.embed_mode){
$.load_facebook=window.FB?$.Deferred().resolve():$.load_facebook||function(){
var e=$.Deferred()
;$("body").prepend($("<div id='fb-root'></div>"))
;window.fbAsyncInit=function(){try{FB.init({xfbml:!0,
version:'v3.1'})}catch(t){console.log("Facebook init error",t)}
e.resolve()}
;$.getScript("https://connect.facebook.net/fr_FR/all.js")
;return e}()
;var t=$.Deferred(),i=$('<div class="fb-post" data-width="'+e.width+'" data-href="'+e.embed_options.facebook_post_url+'"></div>')
;$.load_facebook.then(function(){t.resolve(i)});return t}
if("feed"==e.embed_mode){var o={
href:e.embed_options.facebook_page_url,
width:Math.min(e.width,500),height:e.height,small_header:!1,
adapt_container_width:!0,hide_cover:!1,show_facepile:!0,
show_posts:!0}
;e.embed_options.facebook_no_timeline&&delete o.show_posts
;var n="https://www.facebook.com/plugins/page.php?"+$.param(o)
;if(""!=o.href)return $('<iframe src="'+n+'" width="'+o.width+'" height="'+o.height+'" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>')
}}},get_link:function(e){return'link'==e.type?{
href:e.services.facebook.url}:'share'==e.type?{click:function(){
window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(getSiteUrl()),"_blank",'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=500,left='+($(window).width()-600)/2+',top='+($(window).height()-500)/2)
}}:void 0}},twitter:{icon:$.fn.fonticon('x-twitter'),color:{
type:"color",value:"#0f1419"},build_embed:function(e){
if(e.embed_options)if("post"==e.embed_mode){var t
;if(e.embed_options.twitter_tweet_url){var i={
theme:e.embed_options.twitter_dark_mode?"dark":"light",
lang:"fr"
},o=e.embed_options.twitter_tweet_url.match(/^\d+$/)
;if(o&&o[0])t=o[0];else{
var n=e.embed_options.twitter_tweet_url.match(/status\/(\d+)/)
;n&&n[1]&&(t=n[1])}if(t){i.id=t
;return $('<iframe src="https://platform.twitter.com/embed/index.html?'+$.param(i)+'" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" style="visibility: visible; width: '+e.width+'px; height: '+e.height+'px;"></iframe>')
}}
}else if("feed"==e.embed_mode&&e.embed_options.twitter_feed_url){
var s=$.Deferred(),r=$.Deferred(),a=$("<div>")
;if(window.twttr)s.resolve();else{var l
;0==$("#"+"twitter-wjs").length&&$.getScript("//platform.twitter.com/widgets.js").then(function(){
s.resolve()})}s.then(function(){
var t=e.embed_options.twitter_feed_url,i=t.match(/twitter.[^\/]*\/([^\/\?]*)/)
;i&&i[1]&&(t=i[1]);if(t&&""!=t){var o={width:e.width,
height:e.height,
theme:e.embed_options.twitter_dark_mode?"dark":"light",
lang:"fr"};twttr.widgets.createTimeline({
sourceType:"profile",screenName:t},a.empty().get(0),o)}
r.resolve(a)});return r}},get_link:function(e){
return'link'==e.type?{href:e.services.twitter.url
}:'share'==e.type?{click:function(){
window.open("https://twitter.com/intent/tweet?url="+getSiteUrl(),"_blank",'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=500,left='+($(window).width()-600)/2+',top='+($(window).height()-500)/2)
}}:void 0}},instagram:{icon:$.fn.fonticon('instagram'),color:{
type:"color",value:"#c32aa3"},build_embed:function(e){
if('post'==e.embed_mode){var t
;if(e.embed_options.instagram_post_url&&""!=e.embed_options.instagram_post_url){
var i=e.embed_options.instagram_post_url.match(/instagram.[^\/]*\/p\/([^\/]+)/)
;i&&i[1]&&(t=i[1])
;if(t)return $('<iframe src="https://www.instagram.com/p/'+t+'/embed/captioned/"  width="'+e.width+'" height="'+e.height+'" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"></iframe>')
}}else e.embed_mode},get_link:function(e){
if('link'==e.type)return{href:e.services.instagram.url};e.type}
},linkedin:{icon:$.fn.fonticon('linkedin'),color:{type:"color",
value:"#0a66c2"},get_link:function(e){return'link'==e.type?{
href:e.services.linkedin.url}:'share'==e.type?{click:function(){
window.open("https://www.linkedin.com/sharing/share-offsite/?url="+getSiteUrl(),"_blank",'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=500,left='+($(window).width()-600)/2+',top='+($(window).height()-500)/2)
}}:void 0}},pinterest:{icon:$.fn.fonticon('pinterest'),color:{
type:"color",value:"#bd081c"},get_link:function(e){
return'link'==e.type?{href:e.services.pinterest.url
}:'share'==e.type?{click:function(){
window.open("https://www.pinterest.fr/pin/create/link/?url="+getSiteUrl(),"_blank",'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=500,left='+($(window).width()-600)/2+',top='+($(window).height()-500)/2)
}}:void 0}},youtube:{icon:$.fn.fonticon('youtube'),color:{
type:"color",value:"#ff0000"},get_link:function(e){
if('link'==e.type)return{href:e.services.youtube.url}}},tiktok:{
icon:$.fn.fonticon('tiktok'),color:{type:"color",value:"#000"},
get_link:function(e){if('link'==e.type)return{
href:e.services.tiktok.url}}}}
;$.social_block_loaded=$.social_block_loaded||function(){
var e=$.Deferred()
;loadCSS(stylesheet_path("social_block"),document.getElementById("ui_css"),"all",function(){
e.resolve()});return e}();deferreds.push($.social_block_loaded)
;this.each(function(){
var self=$(this),_current_deferred=$.Deferred()
;deferreds.push(_current_deferred)
;$.social_block_loaded.then(function(){
var _build_icon=function(e,t){
return $('<div class="fonticon"></div>').html(services[e].icon)}
;if(['share','link'].include(params.type)){
var container=$("<div>").addClass('socialblock socialblock_style_'+(params.style||"round")+' socialblock_size_'+(params.size||"32")).appendTo(self.empty())
;(params.order||[]).each(function(service_key){
if(params.services&&params.services[service_key]){
var service=services[service_key],btn=$("<div>").append(_build_icon(service_key,params.services[service_key])),icon_container=$("<a>").addClass('not_link_style').addClass('socialblock_service_'+service_key+'_icon').append(btn),color=params.services[service_key].color&&params.services[service_key].color.value||service.color.value
;color=/get_color/.test(color)?eval(color):color
;if("circle"==params.style)btn.css({borderColor:color,
color:color});else{
var text_color=get_text_color(color,undefined,undefined,undefined,2.5)
;btn.css({backgroundColor:color,
color:"#000000"==text_color?services[service_key].color.value:text_color
})}if('function'==typeof service.get_link){
var link=service.get_link(params)
;link&&link.href&&icon_container.attr('href',"https://"+link.href.replace(/https?(:\/\/)?/,"")).attr('target','_blank')
;link&&link.click&&icon_container.on('click',link.click)}
container.append(icon_container)}});_current_deferred.resolve()
}else if("embed"==params.type){self.empty()
;var service=services[params.embed_service]
;if(service&&'function'==typeof service.build_embed){
var node_or_deferred=service.build_embed(params)
;if(node_or_deferred)if(node_or_deferred.then)node_or_deferred.then(function(e){
e.appendTo(self)
;"post"==params.embed_mode&&"facebook"==params.embed_service&&window.FB?window.FB.XFBML.parse(self.get(0),function(){
_current_deferred.resolve()}):_current_deferred.resolve()
});else{node_or_deferred.appendTo(self)
;_current_deferred.resolve()}}}})})
;return $.when.apply($,deferreds)}
;jQuery.fn.emptyDom=function(){return this.each(function(){
for(;this.firstChild;)this.removeChild(this.firstChild)})}
;jQuery.fn.appendStyle=function(e){
return $(loadStyle(e,this[0]))}
;jQuery.fn.loadCss=function(e,t,i){
var o=$("<link rel=stylesheet media=all type='text/css'>").on("load",t).attr("href",e)
;i&&o.attr("id",i);$(this).before(o);return o}
;jQuery.fn.blink=function(e){var t=10,i=500;e=e||5e3
;for(var o=0;o<e;o+=t+i)this.fadeOut(t).fadeIn(i);return this}
;jQuery.fn.isInViewport=function(){
var e=$(this).offset().top,t=e+$(this).outerHeight(),i=$(window).scrollTop(),o=i+$(window).height()
;return t>i&&e<o};jQuery.inViewPort=function(e,t){var i=[{
left:e.left,top:e.top},{left:e.left+e.width,top:e.top},{
left:e.left+e.width,top:e.top+e.height},{left:e.left,
top:e.top+e.height}],o=t||{top:$(window).scrollTop(),
left:$(window).scrollLeft(),
bottom:$(window).scrollTop()+$(window).height(),
right:$(window).scrollLeft()+$(window).width()}
;ret=null==i.find(function(e){
return e.left<o.left||e.top<o.top||e.top>o.bottom||e.left>o.right
});return ret};jQuery.intersect=function(e,t){
return e.left+e.width>t.left&&e.top+e.height>t.top&&e.left<t.left+t.width&&e.top<t.top+t.height
};jQuery.positionAround=function(e,t,i,o){var n=i||0,s={}
;s=e.top?$.inViewPort(e,o)?{top:e.top,left:e.left}:{
top:o.bottom-e.height,left:o.right-e.width}:{top:t.y+20,
left:t.x+20};var r=!1;do{switch(n){case 0:case 13:
e.left=t.x+Math.floor(t.w/2-e.width/2);e.top=t.y+t.h;break
;case 1:e.left=t.x+Math.floor(t.w/2-e.width/2)
;e.top=t.y-e.height;break;case 2:e.left=t.x-e.width
;e.top=t.y+t.h;break;case 3:e.left=t.x+t.w;e.top=t.y+t.h;break
;case 4:e.left=t.x+t.w;e.top=t.y-e.height;break;case 5:
e.left=t.x-e.width;e.top=t.y-e.height;break;case 6:e.left=0
;e.top=0;break;case 10:e.left=t.x-e.width;e.top=t.y;break
;case 11:e.left=t.x+t.w;e.top=t.y;break;default:e.left=s.left
;e.top=s.top;r=!0}n++}while(!$.inViewPort(e,o)&&!r);return{
top:e.top,left:e.left}}
;jQuery.fn.restrictTo=function(e,t,i,o,n,s){
return this.each(function(){var r=$(this)
;s||(s="change blur paste input dragdrop keypress");switch(e){
case"int":t||(t=0);i||(i=9999999)
;r.unbind(s).bind(s,function(e){var s=$(this)
;setTimeout(function(){
if(""!=s.val()||"keypress"!=e.type&&"input"!=e.type){
var r=parseInt(s.val().replace(/[^0-9]/g,"").replace(/^0*/,"")||0),a=r
;o&&o.apply(s,[r,t,i]);r<t&&(r=t);r>i&&(r=i);s.val(r)
;n&&n.apply(s,[r,t,i])}},0)});break;case"price":t||(t=0)
;i||(i=999999999.99);r.unbind(s).bind(s,function(e){
var s=$(this),r=parseFloat(s.attr("min"))||t,a=parseFloat(s.attr("max"))||i,l="input"==e.type||"keypress"==e.type||"paste"==e.type
;setTimeout(function(){
var e=0,t=s.val().replace(/,/g,".").replace(/\.{2,}/g,".")
;if(t.match(/^0.+\./)){e=-1;t=t.replace(/^0/,"")}
var i=parseFloat(t.replace(/[^0-9.]/g,""))||0
;i=parseInt(100*i+.001)/100;o&&o.apply(s,[i,r,a]);i<r&&(i=r)
;i>a&&(i=a);var c=sprintf("%.2f",i)
;if(l)if(t.length==c.length||0==e&&sprintf("%.2f",parseFloat(t))==c)e+=s.caret().begin;else for(;t.charAt(e)&&c.charAt(e)&&t.charAt(e)==c.charAt(e);)e++
;s.val(c);n&&n.apply(s,[i,r,a]);l&&s.caret(e)},0)})}})}
;jQuery.fn.caret=function(e,t){try{if(0==this.length)return
;if('number'==typeof e){t='number'==typeof t?t:e
;return this.each(function(){if(this.setSelectionRange){
this.focus();this.setSelectionRange(e,t)
}else if(this.createTextRange){var i=this.createTextRange()
;i.collapse(!0);i.moveEnd('character',t)
;i.moveStart('character',e);i.select()}})}
if(this[0].setSelectionRange){e=this[0].selectionStart
;t=this[0].selectionEnd
}else if(document.selection&&document.selection.createRange){
var i=document.selection.createRange()
;e=0-i.duplicate().moveStart('character',-1e5);t=e+i.text.length
}return{begin:e,end:t}}catch(o){console.error(o);return{begin:0,
end:0}}};jQuery.fn.ellipsis=function(){
return this.each(function(){
var e=$(this),t=e.find(">span:first"),i=t.html();t.text("O")
;var o=Math.max(t.height(),e.height());t.html(i)
;for(var n=0;t.outerHeight()>o&&n<100;){n+=1;var i=t.text()
;t.text(function(e,t){return t.replace(/\W*\s(\S)*$/,'...')})
;i==t.text()&&t.text(function(e,t){
return t.replace(/\W*(.{4})$/,'...')})}})}
;jQuery.fn.collect=Array.prototype.collect
;jQuery.fn.to_a=function(){return jQuery.makeArray(this)}
;jQuery.fn.hash_size=function(e){var t=0,i
;for(i in e)e.hasOwnProperty(i)&&t++;return t}
;jQuery.fn.hash_to_a=function(e,t){var i=[],o
;for(o in e)e.hasOwnProperty(o)&&i.push(t?t(o):o);return i}
;jQuery.fn.scrollIntoView=function(e){try{
if(0==this.length)return;e?$('body,html').animate({
scrollTop:$(this).offset().top
},600):window.v&&"viewer"==v.mode?$('body,html').scrollTop($(this).offset().top):this[0].scrollIntoView()
}catch(t){dbg.error("Can not scrollIntoView",t)}}
;jQuery.fn.isTopIntoView=function(e){e=e||0;if(0!=this.length){
var t=$(window).scrollTop()+e,i=t+$(window).height(),o=this.offset().top,n=o+this.height()
;return o>=t&&o<=i}};jQuery.fn.isScrolledAtBottom=function(){
return this[0].scrollHeight-this[0].scrollTop==this[0].clientHeight
};jQuery.fn.hexToRgb=function(e){
e.match(/rgb/)&&(e=$.fn.rgbToHex(e))
;var t=parseInt(e.substring(1),16),i,o,n
;return[(16711680&t)>>16,(65280&t)>>8,255&t]}
;jQuery.fn.rgbToHsl=function(e,t,i){e/=255,t/=255,i/=255
;var o=Math.max(e,t,i),n=Math.min(e,t,i),s,r,a=(o+n)/2
;if(o==n)s=r=0;else{var l=o-n;r=a>.5?l/(2-o-n):l/(o+n)
;switch(o){case e:s=(t-i)/l+(t<i?6:0);break;case t:s=(i-e)/l+2
;break;case i:s=(e-t)/l+4}s/=6}return[s,r,a]}
;jQuery.fn.hsvToRgb=function(e,t,i){var o,n,s,r,a,l,c,d
;e=Math.max(0,Math.min(360,e));t=Math.max(0,Math.min(100,t))
;i=Math.max(0,Math.min(100,i));i/=100;if(0==(t/=100)){o=n=s=i
;return[Math.round(255*o),Math.round(255*n),Math.round(255*s)]}
l=i*(1-t);c=i*(1-t*(a=(e/=60)-(r=Math.floor(e))))
;d=i*(1-t*(1-a));switch(r){case 0:o=i;n=d;s=l;break;case 1:o=c
;n=i;s=l;break;case 2:o=l;n=i;s=d;break;case 3:o=l;n=c;s=i;break
;case 4:o=d;n=l;s=i;break;default:o=i;n=l;s=c}
return[Math.round(255*o),Math.round(255*n),Math.round(255*s)]}
;jQuery.fn.rgbToHex=function(e,t,i){var o=function(e){
var t=parseInt(e).toString(16);return 1==t.length?"0"+t:t}
;if(e&&!t&&!i){
e.match(/rgba/)&&(e=e.replace("rgba","rgb").replace(/,?\s*[\d\.]+\)/,")"))
;var n=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);e=n[1];t=n[2]
;i=n[3]}return"#"+o(e)+o(t)+o(i)}
;jQuery.fn.getBrightnessColor=function(e,t){var i
;if(/hsl/.test(e))(i=Color.hslToArray(e))[2]+=t;else{
var o=$.fn.hexToRgb(e)
;i=[360*(i=$.fn.rgbToHsl(o[0],o[1],o[2]))[0],100*i[1],100*i[2]+t]
}var n=$.fn.hsvToRgb(i[0],i[1],i[2])
;return"rgb("+n[0]+", "+n[1]+", "+n[2]+")"}
;jQuery.fn.hslToRgb=function(e,t,i){var o,n,s
;if(0==t)o=n=s=i;else{function r(e,t,i){i<0&&(i+=1);i>1&&(i-=1)
;return i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}
var a=i<.5?i*(1+t):i+t-i*t,l=2*i-a;o=r(l,a,e+1/3);n=r(l,a,e)
;s=r(l,a,e-1/3)}return[255*o,255*n,255*s]}
;jQuery.fn.paginate=function(e,t,i,o,n,s){var r=function(e){
var t,o=$("<li class='site_pagination'>"+(e+1)+"</li>")
;e==i&&o.addClass('selected');o.attr('number_of_page',e)
;a.append(o)};$(e).empty();var a=$('<ul></ul>')
;li=$("<li class='site_pagination'>&lt;</li>").attr('number_of_page',i-1).appendTo(a)
;i<=0&&li.css("visibility","hidden");if(t>10){
var l,c='<li class="site_pagination ellipse">...</li>',d=Math.max(o,n),p=Math.max(Math.min(t-d,i-o),0),h=Math.min(Math.max(d,i+o+1),t)
;if(p>0){var u=Math.min(n,p);for(l=0;l<u;l++)r(l)
;n<p&&a.append(c)}for(l=p;l<h;l++)r(l);if(h<t){
t-n>h&&a.append(c);var f;for(l=Math.max(t-n,h);l<t;l++)r(l)}
}else for(var l=0;l<t;l++)r(l)
;li=$("<li class='site_pagination'>&gt;</li>").attr('number_of_page',i+1).appendTo(a)
;i>=t-1&&li.css("visibility","hidden");e.append(a)
;$('li',e).click(function(){
$(this).is(".ellipse")||s(parseInt($(this).attr('number_of_page')))
})};jQuery.fn.generateComponentSearchbar=function(e){if(e){
$(this).empty().addClass('component_searchbar').data('config',e)
;var t=$('<div class="site_search">'),i=$('<div class="ui_search_suggest"></div>').hide(),o="blog"==e.type?"b":"search"==e.type?"27":"s"
;t.append('<div><input class="site_textbox" type="text" placeholder="'+(e.placeholder||"")+'"><span id="ui_search_loading"></span></div>')
;t.append('<div class="ui_btn site_button ui'+o+'_btn"><span class="fonticon"></span></div><div class="ui_close_search"><span class="fonticon"></span><div class="close_tooltip"><span>Fermer la recherche</span></div></div>')
;$.each(e.types,function(t,o){
var n=$('<div class=ui_suggest_'+t+'>'+sprintf("<h%s>",3)+o+sprintf("</h%s>",3)+'</div>')
;if(e.sort){var s=e.sort.find(function(e){return e[0]==t})[1]
;n.addClass('ui_suggest_length_'+s).data('sort',s)}i.append(n)})
;e.sort&&i.find('div').sort(function(e,t){
return $(e).data('sort')<=$(t).data('sort')?-1:1}).appendTo(i)
;$(this).append(t);$(this).append(i)
;$(this).append($('<div class="ui'+o+'_search_header"><div class="ui'+o+'_nbr_search_results"></div></div>'))
}};jQuery.fn.generateComponentCart=function(e){if(e){
$(this).addClass('component_cart')
;var t=$(this).html(''),i=$('<div class="fonticon"></div>'),o=$('<div class="uis_headf"><div class="uis_cart_title"></div></div>'),n=$('<div class="uis_cresume"><div class=uis_pr><img src="/assets/loading/16x16.gif"></div> <div class=uis_ttl></div></div>'),s=$('<div class="uis_cextend"><div class="uis_ul_w"></div><ul><li class="uis_shipping_infos_cart_summary"></li></ul><div class="uis_exbtn">'+UI_Store.btn({
txt:'<span class="uis_bsa button_content">Voir le panier</span>',
"class":"site_button"})+'</div></div>');if(e.main_icon){
if(e.display_icon){e.display_text&&i.css("padding-right","5px")
;i.setIcon(e.main_icon)}}else i.html($.fn.fonticon("cart"))
;o.find('.uis_cart_title').html(e.main_text?e.display_text?e.main_text:"":"Panier")
;0==e.display_text&&o.find(".uis_cart_title").hide()
;e.cart_block||o.find('.uis_cart_title').addClass('uis_ttlcf font_title_3')
;0==e.display_icon&&i.find(".fonticon").hide()
;0==e.display_price&&n.find(".uis_pr").hide()
;0==e.display_amount&&n.find(".uis_ttl").hide()
;var r=$('<div></div>');if(e.cart_block&&e.preset){
$(this).addClass('button_block site_button')
;r.addClass('button_content')
;r.append($('<span class="icon_wrapper"></span>').append(i))
;r.append($('<span class="button_text"></span>').append(o).append(n))
}else{r.append(o.prepend(i));r.append(n)}t.append(r)
;e.disable_dropdown||t.append(s)}}
;jQuery.fn.returnFont=function(e){var t
;switch(e.replace(/^image\/.*/,"image").replace(/^video\/.*/,"video")){
case"application/vnd.google-apps.audio":case"aac":case"mp3":
case"wav":case"oga":case"m4a":
return[$.fn.fonticon("ui_music"),"gd_audio","wav"]
;case"application/vnd.google-apps.document":case"csv":case"doc":
case"docm":case"docx":case"odt":case"rtf":
return[$.fn.fonticon("t_file-word"),"gd_doc","doc"]
;case"application/vnd.google-apps.drawing":
return[$.fn.fonticon("drawing"),"gd_draw","gd_draw"]
;case"application/vnd.google-apps.file":case"txt":
return[$.fn.fonticon("txt"),"gd_file","gd_file"]
;case"application/vnd.google-apps.folder":case"folder":
return[$.fn.fonticon("folder"),"gd_folder","gd_folder"]
;case"application/vnd.google-apps.spreadsheet":case"xls":
case"xlm":case"xlx":
return[$.fn.fonticon("t_table"),"gd_table","xls"]
;case"application/vnd.google-apps.site":case"url":case"website":
return[$.fn.fonticon("planet"),"gd_sites","gd_sites"]
;case"application/vnd.google-apps.presentation":case"odp":
case"pps":case"ppt":case"pptx":
return[$.fn.fonticon("transition"),"gd_slide","gd_slide"]
;case"application/vnd.google-apps.map":case"kml":
return[$.fn.fonticon("ui_map"),"gd_map","kml"]
;case"application/vnd.google-apps.form":
return[$.fn.fonticon("ui_form"),"gd_form","gd_form"]
;case"application/vnd.google-apps.photo":case"png":case"svg":
case"jpeg":case"jpg":case"bmp":case"crw":case"gif":case"tif":
case"image":return[$.fn.fonticon("ui_image"),"gd_image","bmp"]
;case"application/json":case"text/html":case"text/css":
case"application/x-ruby":case"application/javascript":case"c":
case"css":case"erb":case"h":case"java":case"js":case"php":
case"rb":case"html":
return[$.fn.fonticon("t_code"),"gd_code","gd_code"]
;case"application/vnd.google-apps.video":case"video":case"avi":
case"flv":case"mkv":case"mp4":case"mov":case"wmv":case"webm":
return[$.fn.fonticon("ui_video"),"gd_video","avi"]
;case"application/zip":
return[$.fn.fonticon("zip"),"gd_zip","7z"]
;case"application/pdf":
return[$.fn.fonticon("xls"),"gd_pdf","pdf"]
;case"calendar#calendarListEntry":case"calendar#calendar":
return[$.fn.fonticon("calendar"),"gd_calendar","gd_calendar"]
;default:
return[$.fn.fonticon("page_default"),"gd_default","default"]}}
;h_icons={arrow_down:60502,logo_wide:60503,txt:60504,
twitter:60505,twitch:60506,transition:60507,transfert:60508,
transfer:60509,tour:60510,tool_3:60511,tablet:60512,
t_table:60513,t_redo:60514,t_paragraph_justify:60515,
t_link:60516,t_font_size:60517,t_code:60518,support:60519,
storage:60520,stock:60521,statistic:60522,start_3:60523,
star_fill:60524,star:60525,stack:60526,spacing:60527,snap:60528,
send:60529,search:60530,scroll_down:60531,screen:60532,
separator:60533,smiley:60534,saved:60535,save:60536,
safari:60537,"rotate-ccw3":60538,rename:60539,remove:60540,
redo_editor:60541,publish:60542,print:60543,"plus-circle":60544,
play:60545,planet:60546,pinterest:60547,photo_camera:60548,
person:60549,pencil:60550,pen:60551,paypal:60552,pay:60553,
pause:60554,password:60555,partenaires_3:60556,pantone:60557,
palette:60558,page_default:60559,order:60560,option:60561,
opera:60562,"notification_default-1":60563,
notification_default:60564,notification:60565,mp3:60566,
more2:60567,modify_height:60568,mobiles_3:60569,mobile:60570,
"minus-circle":60571,messenger:60572,message:60573,menu:60574,
mail_domain:60575,magnet:60576,lock:60577,loading:60578,
linkedin:60579,IE:60580,home:60581,help:60582,
hebergement_3:60583,grid:60584,fs_selected:60585,
fs_deselected:60586,footer_1:60587,folder_plus:60588,
folder_3:60589,flickr:60590,"file-remove":60591,
"file-plus":60592,"file-download":60593,fb_default:60594,
favicon:60595,facebook:60596,eye_blocked2:60597,edit:60598,
dupplicate:60599,dropbox:60600,download:60601,design_3:60602,
"delete":60603,copy:60604,communaute_3:60605,comment:60606,
cloud:60607,clipboard:60608,clear:60609,chrome:60610,
"check-square":60611,cgu:60612,cb:60613,cast:60614,cancel:60615,
call_split:60616,calendar:60617,"bullet-list-68":60618,
bulb:60619,"browser-firefox":60620,
"boutique-en-ligne-3px-violet":60621,block:60622,bi_arrow:60623,
avi:60624,"arrow-width-right":60625,"arrow-width-left":60626,
"arrow-up":60627,"arrow-right-clear":60628,"arrow-right":60629,
"arrow-left-clear":60630,"arrow-left":60631,"arrow-down":60632,
arrow_tb:60633,apply:60634,anchor:60635,adult:60636,add2:60637,
add:60638,account_balance_wallet:60639,account_balance:60640,
zip:60641,youtube:60642,xls:60643,wondering:60644,warning:60645,
wait:60646,vimeo:60647,unpublish:60648,unlock:60649,
undo_editor:60650,undo:60651,pixabay:60652,"t_file-word":60653,
instagram:60654,preview_draft:60655,"stat_3-1":60656,
"mobiles_3-1":60657,interactivite_3:60658,
"hebergement_3-1":60659,enveloppe_3:60660,"design_3-1":60661,
"creer-un-site_3":60662,"boutique-en-ligne-3px-violet-1":60663,
aide_3:60664,"tool_3-1":60665,"communaute_3-1":60666,
"start_3-1":60667,"partenaires_3-1":60668,"folder_3-1":60669,
drawing:60670,cart:60671,check_payement:60672,"bubble-up":60673,
ruler:60674,cut:60675,t_font:60676,add_a_photo:60677,
popup_2:60678,paste:60679,exe:60680,yahoo:60681,google:60682,
arrow_width_right:60683,arrow_width_left:60684,
arrow_width_down:60685,arrow_width_up:60686,eye:60687,
"eye-blocked3":60688,border_all:60689,select_all:60690,
sort_by_alpha:60691,format_align_center:60692,
"t_paragraph-left":60693,"t_paragraph-right":60694,
"t_paragraph-justify":60695,"t_paragraph-center":60696,
format_color_text:60697,logout:60698,close:60699,
"folder-plus":60700,"folder-close":60701,folder:60702,
format_color_fill:60703,rulers:60704,font_download:60705,
flip_to_back:60706,grip:60707,t_clear_formatting:60708,
t_indent_increase:60709,t_indent_decrease:60710,
t_attachment:60711,t_file_word:60712,t_paragraph_center:60713,
t_paragraph_right:60714,t_paragraph_left:60715,
t_underline:60716,t_strikethrough:60717,t_bold:60718,
t_italic:60719,t_numbered_list:60720,t_highlight:60721,
cart_duration:60722,check_square:60723,line_height:60724,
rounded_corner:60725,margin:60726,padding:60727,
"t_font-size":60728,icon_placement:60729,"border-radius":60730,
status_success:60731,status_upgrade:60732,status_warning:60733,
status_error:60734,picasa:60735,textarea:60736,art_track:60737,
label:60738,upload:60739,radio_button_checked:60740,
sliders:60741,calendar2:60742,refund:60743,order_cancel:60744,
order_delivery:60745,order_pay:60746,width_mobile:60747,
tel:60748,calendar_picker:60749,img_picker:60750,
multipages:60751,blank:60752,device_desktop:60753,
device_mobile:60754,info_tooltip:60755,ui_carousel:60756,
ui_calendar:60757,ui_button:60758,ui_box:60759,ui_blog:60760,
ui_video:60761,ui_text:60762,ui_store:60763,ui_social:60764,
ui_search:60765,ui_payment:60766,ui_newsletter:60767,
ui_music:60768,ui_menu:60769,ui_member:60770,ui_map:60771,
ui_image:60772,ui_icon:60773,ui_hour:60774,ui_forum:60775,
ui_form:60776,ui_flash:60777,ui_faq:60778,ui_draw:60779,
ui_download:60780,ui_developer:60781,ui_comment:60782,
ui_cart:60783,ui_social2:60784,ui_strip:60785,editor_save:60786,
editor_publish:60787,editor_undo:60788,editor_redo:60789,
editor_mobile:60790,editor_mobile_horizontale:60791,
editor_desktop:60792,editor_star:60793,editor_tablette:60794,
editor_searchBar:60795,editor_success:60796,editor_return:60797,
editor_parametres:60798,editor_guide:60799,editor_error:60800,
editor_duplicate:60801,editor_delete:60802,editor_calques:60803,
editor_arrow:60804,editor_add:60805,editor_logout:60806,
editor_load:60807,editor_pages:60808,editor_draggable:60809,
editor_elements:60810,editor_style:60811,editor_structure:60812,
editor_star_fill:60813,editor_pen:60814,editor_add2:60815,
editor_clear:60816,editor_brush:60817,editor_switch:60818,
ui_scorenco:60819,editor_paste:60820,editor_copy:60821,
editor_cut:60822,editor_duplicate_here:60823,
editor_folder:60824,editor_add_footer:60825,
editor_folder_in:60826,editor_folder_out:60827,
editor_below:60828,editor_above:60829,editor_select_all:60830,
editor_home:60831,editor_anchor:60832,editor_move:60833,
editor_rename:60834,editor_image:60835,ui_listarticles:60836,
"dots-anim-5":60837,editor_answer:60838,editor_unpin:60839,
editor_pin:60840,"data-upload":60841,editor_lock:60842,
editor_tagRemove:60843,"invert-process":60844,
editor_unlock:60845,editor_moveAll:60846,editor_blockStar:60847,
editor_resizeBottom:60848,editor_moveBlock:60849,
editor_hide:60850,editor_load1:60851,editor_check:60852,
editor_close:60853,editor_form_msg:60854,
"editor_unlock-1":60855,pdf:60856,editor_form_triangle:60857,
editor_form_star:60858,editor_form_rect:60859,
editor_form_patate:60860,editor_form_macaron:60861,
editor_form_circle:60862,tiktok:60863,editor_background:60864,
"editor_lock-1":60865,editor_txtAlignRight:60866,
editor_txtAlignLeft:60867,editor_txtAlignCenter:60868,
editor_size:60869,editor_settings:60870,
editor_renameContent:60871,editor_media:60872,editor_link:60873,
editor_img:60874,editor_goFooter:60875,
editor_fullContainer:60876,editor_externalPosRight:60877,
editor_externalPosLeft:60878,editor_externalPosCenter:60879,
editor_distributeVertical:60880,
editor_distributeHorizontal:60881,editor_contextMenu:60882,
editor_code:60883,editor_audio:60884,editor_alignTop:60885,
editor_alignRight:60886,editor_alignLeft:60887,
editor_alignCenterVertical:60888,
editor_alignCenterHorizontal:60889,editor_alignBottom:60890,
editor_addPage:60891,animation:60892,"thumb-up":60893,
"thumb-down":60894,editor_check_1:60895,error_1:60896,
editor_eye_crossed:60897,editor_eye:60898,information:60899,
editor_warning:60900,"circle-anim-1":60901,"dots-anim-3":60902,
editor_menu:60903,editor_anchor2:60904,
editor_target_blank:60905,arrow_gallery_8:60906,
arrow_gallery_7:60907,arrow_gallery_6:60908,
arrow_gallery_5:60909,arrow_gallery_4:60910,
arrow_gallery_3:60911,arrow_gallery_1:60912,
arrow_gallery_2:60913,editor_showcase:60914,
editor_ecommerce:60915,editor_check2:60916,stat_3:60917,
opt_email_storage:60918,opt_domain:60919,opt_email:60920,
opt_storage:60921,"x-twitter":60922,logo_site:60923,
editor_arrow_bigLeft:60924,ui_listproducts:60925,
editor_bubble_chat:60926,editor_arrow_big_none:60927,
"editor_arrow_big_up-left":60928,
"editor_arrow_big_down-left":60929,editor_arrow_big_left:60930,
"editor_arrow_big_up-right":60931,
"editor_arrow_big_down-right":60932,editor_arrow_big_up:60933,
editor_arrow_big_right:60934,home_money:60935,home_fr:60936,
"plant-soil":60937,m_rgpd:60938,"restore-bin":60939,
"hand-heart":60940,recycle:60941,bicycle:60942,"in-love":60943,
teacher:60944,"shop-location":60945,tree:60946,
editor_arrow_big_down:60947,home_diy:60948,home_calendar:60949,
france:60950,upgrade_star:60951,"school-bus":60952,
editor_cross:60953,"icon-size":60954,logo_square:60955,
editor_arrowVdDim:60956,editor_addToHeader:60959,
editor_addToFooter:60960};jQuery.fn.fonticon=function(e,t){
var i={avi:["mpg","mp4","ram","vob","wmv"],
zip:["axx","gz","rar","tar","7z"],exe:["bat","msi"],
"t_file-word":["doc","ods","wps","docx"],kml:["kmz"],
ppts:["mdb","pps","ppt","pub","xlr","pptx"],mp3:["mid","wav"],
xls:["odt","xlsx"],pdf:["pdf"],txt:["rtf"],swf:["air"],
ttf:["woff","eot"],
ui_image:["png","jpg","gif","bmp","tiff","ico","svg"]
},o=t?"page_default":"fb_default"
;h_icons[e]==undefined&&$.each(i,function(t,i){
i.indexOf(e)>-1&&(e=t)})
;return"&#x"+(h_icons[e]==undefined?h_icons[o]:h_icons[e]).toString(16)+";"
};jQuery.loadFonticons=function(){
$.bot||$(".fonticon[data-icon]").each(function(){
$(this).html($(this).data("icon"))})};$.fn.activate=function(e){
if(!e){this.addClass("active").trigger("activate")
;this.siblings(".active").desactivate()
;this.siblings().find(".active").desactivate()}
this.addClass("active").trigger("activate");return this}
;$.fn.desactivate=function(){
this.filter(".active").removeClass("active").trigger("desactivate")
;return this}
;$.change_events="click keyup change paste blur keypress mouseup input dragdrop"
;$.fn.trigger_real_change=function(){
return this.each(function(){var e=$(this),t=e.val()
;e.on($.change_events,function(){if(t!=e.val()){
e.trigger("real_change");t=e.val()}})})}
;$.fn.trigger_enter=function(e){return this.each(function(){
var t=$(this);(e=e||t).on("keyup",function(e){
13==e.which&&$(e.target).trigger("enter")})})}
;$.fn.is_smallerScreen=function(){
var e=$(window),t=$('html'),i=t.hasClass('cssanimations'),o=function(){
if(e.width()<1e3&&i){t.addClass('is_smallScreen')
;$.fn.smallerScreen=!0}else{t.removeClass('is_smallScreen')
;$.fn.smallerScreen=!1}};e.on("smartresize",o);o()}
;$.fn.centerSeparator=function(){$(window).resize(function(){
$("#log_separator").removeAttr('style')
;$(window).width()>720&&$("#log_separator").css("height",$(".signup .row").height())
});$(window).resize()};$.fn.swipe=function(e){function t(e){try{
var t=e.changedTouches[0];return[t.clientX,t.clientY]}catch(i){}
}function i(e){s=t(e);r=(new Date).getTime()}function o(i){var o
;if((new Date).getTime()-r<1e3){var n=t(i);if(n){
var a=Math.abs(n[0]-s[0]),l=Math.abs(n[1]-s[1])
;a>l&&l<30&&a>30&&e(n[0]>s[0])}}}var n=$(this),s,r
;n[0].addEventListener("touchstart",i,!1)
;n[0].addEventListener("touchend",o,!1)}
;$.fn.protect_content=function(){
if(!window.v)return setTimeout($.fn.protect_content,1e3)
;if("editor"!=v.mode&&v.page_bg.security&&v.page_bg.security.content_protection&&v.features.content_protection){
$("body").addClass("content_protection")
;document.oncontextmenu=new Function("return false")}}
;$.fn.hasClassMatch=function(e){var t,i,o,n,s,r,a
;for(o=0,s=this.length;o<s;o++){i=this[o]
;for(n=0,r=(a=$(i).attr('class').split(' ')).length;n<r;n++)if((t=a[n]).match(e))return!0
}return!1};$.fn.removeClassMatch=function(e){
return this.removeClass(function(t,i){var o;return function(){
var t,n,s,r;r=[]
;for(t=0,n=(s=i.split(' ')).length;t<n;t++)(o=s[t]).match(e)&&r.push(o)
;return r}().join(' ')})};$.fn.hoverOut=function(e,t,i,o){
t=t||500;var n=this,s=null,r=function(){s=setTimeout(function(){
if(e.is(":hover")||n.is(":hover"))r();else{clearTimeout(s)
;s=null;e.removeClass("hovered");o&&o()}},t)}
;this.hover(function(){if(!s){e.addClass("hovered");i&&i()}
},function(){r()})};$.delay=function(e){var t=$.Deferred()
;setTimeout(function(){t.resolve()},e);return t}
;$.fn.random=function(e,t){
return e&&t?Math.floor(Math.random()*(t-e+1))+e:Math.random()}
;$.fn.textWidth=function(){
var e=$(this).html(),t='<span>'+e+'</span>';$(this).html(t)
;var i=$(this).find('span:first').width();$(this).html(e)
;return i};$.fn.infiniteScrolling=function(e){
var t=$(this),i=null,o=function(){var o=t,n={
append:e.item_class,path:"a.next_page",responseType:'document',
itemSelector:e.item_class,hideNav:'.pagination'};if(e.grid){
o.masonry({itemSelector:e.item_class,columnWidth:20,
isFitWidth:!0});n.outlayer=o.data('masonry')}
if($("a.next_page").length){o.infiniteScroll(n)
;o.on('request.infiniteScroll',function(e,t){
i=$("<div class='paginate_loading'></div>").html('<svg width="120" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#000"> <circle cx="15" cy="15" r="15"> <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" /> <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" /> </circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"> <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite" /> <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite" /> </circle> <circle cx="105" cy="15" r="15"> <animate attributeName="r" from="15" to="15" values="15;9;15" calcMode="linear" repeatCount="indefinite" /> <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" /></circle></svg>').appendTo(o)
});o.on('append.infiniteScroll',function(e,t,o,n){i&&i.remove()
;$.each(n,function(e,t){
$(t).addClass("infiniteScrolling_animation")})})}}
;if($.fn.infiniteScroll)o();else{
$.getScript("/assets/precompile/lib/infinite-scroll.js")
;$.getScript("/assets/precompile/lib/masonry.js")
;$("head").append($("<style>").text(".paginate_loading {position: absolute; top: 100%; left: 0; right: 0; text-align: center; padding-top: 5px;} .paginate_loading svg {transform: scale(.6);}"))
;Misc.poll(function(){return $.fn.masonry&&$.fn.infiniteScroll
},function(){o();e.cb&&e.cb()})}};$.fn.hasScrollBar=function(){
var e;if(window.v&&"editor"==v.mode){var t=this.get(0);e={
vertical:t.scrollHeight>t.clientHeight,
horizontal:t.scrollWidth>t.clientWidth}}else{e={vertical:!0,
horizontal:!0};try{
var i='BackCompat'==document.compatMode?document.body:document.documentElement
;e.vertical=i.scrollHeight>i.clientHeight
;e.horizontal=i.scrollWidth>i.clientWidth}catch(t){}}return e}
;$.fn.getScrollbarWidth=function(){
var e=document.createElement("div");e.style.visibility="hidden"
;e.style.width="100px";e.style.msOverflowStyle="scrollbar"
;document.body.appendChild(e);var t=e.offsetWidth
;e.style.overflow="scroll";var i=document.createElement("div")
;i.style.width="100%";e.appendChild(i);var o=i.offsetWidth
;e.parentNode.removeChild(e);return t-o}
;$.fn.editable_node=function(e){(e=e||{}).type=e.type||"image"
;var t=$(this);if("viewer"==v.mode){
$(".edit_ui_wrapper",t).remove();return this}
if(e.action&&"destroy"==e.action){
$(".edit_ui_wrapper",t).remove();return this}
e.editor_params&&"object"==typeof e.editor_params&&t.data('editor_params',e.editor_params)
;if($(".edit_ui_wrapper",t).length)return this
;var i=$("<div class='edit_ui_wrapper admin_elem df'>")
;["absolute","relative"].include(t.css("position"))||t.css("position","relative")
;if(!e.disable_animation){if("image"==e.type){
$import_wrapper=$("<div>").addClass("import_wrapper").appendTo(i)
;$import_wrapper.append("<svg width=\"50\" height=\"41\" viewBox=\"0 0 50 41\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.3181 7.36119C11.3238 7.36119 10.3518 7.65593 9.52509 8.20831C8.69839 8.76069 8.05415 9.5459 7.67366 10.4645C7.29318 11.383 7.19365 12.3939 7.38762 13.369C7.58159 14.3442 8.06027 15.2398 8.76332 15.9429C9.46637 16.6459 10.3622 17.1248 11.3373 17.3187C12.3125 17.5127 13.3232 17.4132 14.2417 17.0327C15.1603 16.6522 15.9455 16.0078 16.4979 15.1811C17.0503 14.3544 17.3452 13.3825 17.3452 12.3883C17.3778 11.7195 17.2701 11.0511 17.029 10.4264C16.7879 9.80169 16.4188 9.23437 15.9453 8.76088C15.4718 8.28739 14.9045 7.91829 14.2798 7.67722C13.6551 7.43615 12.9869 7.3285 12.3181 7.36119ZM10.7185 12.3883C10.7154 12.1474 10.7606 11.9083 10.8514 11.6851C10.9422 11.4619 11.0767 11.2591 11.2471 11.0887C11.4175 10.9184 11.6201 10.7838 11.8433 10.6931C12.0665 10.6023 12.3056 10.5571 12.5465 10.5601C13.0313 10.5601 13.4963 10.7527 13.8391 11.0956C14.1819 11.4384 14.3745 11.9035 14.3745 12.3883C14.3745 12.8731 14.1819 13.338 13.8391 13.6809C13.4963 14.0237 13.0313 14.2163 12.5465 14.2163C12.3056 14.2193 12.0665 14.1741 11.8433 14.0834C11.6201 13.9926 11.4175 13.8581 11.2471 13.6877C11.0767 13.5173 10.9422 13.3145 10.8514 13.0913C10.7606 12.8682 10.7154 12.6292 10.7185 12.3883Z\" fill=\"#495057\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M37.6819 0.505994H8.43353C7.47183 0.458231 6.51755 0.696767 5.69147 1.19147C3.64992 2.0893 2.01923 3.71999 1.12141 5.76153C0.786059 6.64547 0.555999 7.56584 0.435925 8.5036V32.4964C0.388163 33.4581 0.626699 34.4124 1.12141 35.2385C2.01923 37.28 3.64992 38.9107 5.69147 39.8085C6.5754 40.1439 7.49578 40.3739 8.43353 40.494H41.5665C42.5282 40.5418 43.4824 40.3032 44.3085 39.8085C46.3501 38.9107 47.9807 37.28 48.8786 35.2385C49.2139 34.3545 49.444 33.4342 49.5641 32.4964V8.5036C49.6118 7.5419 49.3733 6.58761 48.8786 5.76153C47.9807 3.71999 46.3501 2.0893 44.3085 1.19147C43.4246 0.856127 42.5042 0.626068 41.5665 0.505994H37.6819ZM7.06257 4.16198C7.6452 3.94207 8.27172 3.8638 8.89056 3.93354H41.2694C42.1834 3.93354 42.6404 4.16198 43.0974 4.16198C43.7275 4.39004 44.2998 4.75393 44.7736 5.22779C45.2475 5.70165 45.6114 6.27391 45.8394 6.90405C46.0594 7.48668 46.1376 8.1132 46.0679 8.73204V21.0713L44.6969 19.7002C43.3964 18.4479 41.9367 17.3724 40.3553 16.5012C38.5401 15.7425 36.5127 15.6613 34.6427 16.2726C32.9856 16.9424 31.4435 17.8676 30.0727 19.0147L25.0457 22.6708C24.5711 22.1496 24.0339 21.689 23.4462 21.2997C22.7402 20.6911 21.9746 20.1552 21.1612 19.7002C19.1319 18.8276 16.8495 18.7461 14.7631 19.4717C13.8797 19.8397 13.0372 20.2992 12.2495 20.8427C11.564 21.5282 10.6499 22.2138 9.50743 23.3563L3.5664 28.8403V8.73204C3.5664 7.81803 3.79485 7.36105 3.79485 6.90405C4.63738 5.75734 5.73187 4.81923 6.99395 4.16198H7.06257ZM23.7433 26.3268C22.9765 25.4904 22.1351 24.7256 21.2296 24.0418C20.5441 23.5848 20.0872 23.1277 19.8587 23.1277C18.6043 22.67 17.2285 22.67 15.9741 23.1277C15.4676 23.3506 15.0037 23.66 14.6031 24.0418C13.9176 24.4988 13.232 25.4128 12.0895 26.3268L4.54895 33.4103C4.4257 33.5344 4.26514 33.6148 4.09192 33.6389C4.09192 33.8674 4.092 33.8675 4.3205 34.096C4.53558 34.7276 4.88637 35.3044 5.34824 35.786C5.81011 36.2676 6.37182 36.6423 6.99395 36.8836C7.57658 37.1035 8.20311 37.1818 8.82194 37.1121H41.2694C42.1834 37.1121 42.6404 36.8836 43.0974 36.8836C43.7275 36.6556 44.2998 36.2917 44.7736 35.8178C45.2475 35.344 45.6114 34.7717 45.8394 34.1416C46.0594 33.5589 46.1376 32.9324 46.0679 32.3136V25.9155L42.6404 22.7164C40.5838 20.8884 39.8983 20.2029 39.2128 19.9743C38.1186 19.5583 36.925 19.4787 35.7853 19.7459C34.3901 20.3226 33.0827 21.0917 31.9008 22.0309L27.5592 25.23L33.0433 30.714C33.3366 31.0548 33.4901 31.494 33.4733 31.9433C33.4565 32.3926 33.2705 32.8189 32.9525 33.1368C32.6346 33.4548 32.2083 33.6408 31.759 33.6576C31.3097 33.6744 30.8705 33.5209 30.5297 33.2276L23.7433 26.3268Z\" fill=\"#495057\"/></svg>")
;$import_wrapper.append("<p>Importer</p>")
;e["default"]||$(".edit_ui_wrapper",t).hide()
}else i.append("<img loading=\"lazy\" src=\"https://st0.cdnsw.com/images/blog/editor_icons/edit_text.svg\" alt=\"Edit text\" />")
;t.append(i);t.addClass('editable_node')}return this}
;$.fn.perspective_mouse_move=function(e){
var e=e?e.selector?e.get(0):$(e).get(0):document.body,t=this.get(0),i={
_x:0,_y:0,x:0,y:0,updatePosition:function(e){
var t=e||window.event;this.x=t.clientX-this._x
;this.y=-1*(t.clientY-this._y)},setOrigin:function(e){
this._x=e.offsetLeft+Math.floor(e.offsetWidth/2)
;this._y=e.offsetTop+Math.floor(e.offsetHeight/2)},
show:function(){return"("+this.x+", "+this.y+")"}}
;i.setOrigin(e);var o=0,n=10,s=function(){return o++%n==0
},r=function(e){c(e)},a=function(){t.style=""},l=function(e){
s()&&c(e)},c=function(e){i.updatePosition(e)
;d((i.y/t.offsetHeight/2).toFixed(2),(i.x/t.offsetWidth/2).toFixed(2))
},d=function(e,i){var o="rotateX("+e+"deg) rotateY("+i+"deg)"
;t.style.transform=o;t.style.webkitTransform=o
;t.style.mozTranform=o;t.style.msTransform=o
;t.style.oTransform=o};e.onmousemove=l;e.onmouseleave=a
;e.onmouseenter=r};$.fn.ES5browser=function(){
return'Promise'in window==1};oldBrowser=function(){function e(){
var e=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)
;return!!e&&parseInt(e[2],10)}var t=!1
;/MSIE 10/i.test(navigator.userAgent)&&(t=!0)
;(/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent))&&(t=!0)
;/Edge\/\d./i.test(navigator.userAgent)&&(t=!0)
;e()&&e()<=67&&(t=!0);return t}
;$.fn.css_grid_support=function(){
var e=document.createElement('div'),t='string'==typeof e.style.grid
;e.remove();return Boolean(t)};$.fn.copyToClipboard=function(e){
this.each(function(t,i){$(i).on('click',function(){var t=""
;t=(t=(t=(t=(t=(t="string"==typeof e?e:e.html()).replace(/<br\/?>/g,'\r\n')).replace(/<li>/g,'\r- ')).replace(/<ul>/g,'')).replace(/<\/ul>/g,'\r')).replace(/<\/?li>/g,'')
;var i=document.createElement('textarea');i.value=t
;document.body.appendChild(i);i.select()
;document.execCommand('copy');document.body.removeChild(i)})})}
;$.fn.getVisibleHeight=function(){var e,t,i,o,n,s
;i=(o=$(window).scrollTop())+$(window).height()
;return(n=(e=(t=this.offset().top)+this.outerHeight())>i?i:e)-(s=t<o?o:t)
};var Apis={webfont:function(e){if(window.WebFont)e&&e();else{
this._create_script("googleapis-webfont","https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js")
;setTimeout(function(){Apis.webfont(e)},50)}},
facebook_api:function(e){load_facebook().done(function(){e()})},
google_apis:function(e){
if(window.gapi&&window.gapi.client)e&&e();else{
this._create_script("google_drive-search","https://apis.google.com/js/client.js")
;setTimeout(function(){Apis.google_apis(e)},50)}},
google_api_init:function(e,t){
window.statusController||(statusController={
message:statusMessage})
;var i=new ProgressController("Chargement",{
next_progress:15});if(t.oauth_container){
t.oauth_container.html('<button class="btn btn-primary"><span class="fonticon">'+$.fn.fonticon("person")+"</span> Se connecter</button><button class=\"btn btn-primary\"><span class=\"fonticon\">"+$.fn.fonticon("adult")+'</span> Se déconnecter</button>')
;t.oauth_container.children().hide()
;t.sign_in_button=t.oauth_container.find("button:first")
;t.sign_out_button=t.oauth_container.find("button:last")}
t.on_signin_status_update&&t.on_signin_status_update(!1)
;Apis.google_apis(function(){
Apis.google_api_init_client=Apis.google_api_init_client||gapi.client.init({
discoveryDocs:t.discovery_docs||["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest","https://www.googleapis.com/discovery/v1/apis/drive/v3/rest","https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
clientId:"368064768878-7m13jhbpn9hmrilfuiket4c5p7qso1k3.apps.googleusercontent.com",
cookie_policy:'single_host_origin',scope:e,
fetch_basic_profile:!1})
;Apis.google_api_init_client["catch"](function(e){
statusController.message("Error loading Google API : "+e.message,"error")
;console.error(e);Apis.google_api_init_client=null})
;Apis.google_api_init_client.then(function(){
GoogleAuth=window.GoogleAuth||gapi.auth2.getAuthInstance()
;var o=null,n=Apis.current_updateSigninStatus=function(){
if(n==Apis.current_updateSigninStatus){
var i=GoogleAuth.currentUser.get(),s=i.hasGrantedScopes(e)
;console.log("updateSigninStatus",i.isSignedIn(),e,o,s)
;if(o!=s){o=s
;t.on_signin_status_update&&t.on_signin_status_update(s)
;t.sign_in_button&&t.sign_in_button.toggle(!s)
;t.sign_out_button&&t.sign_out_button.toggle(s)
;t.revoke_access_button&&t.revoke_access_button.toggle(s)}}}
;GoogleAuth.isSignedIn.listen(Apis.current_updateSigninStatus)
;n();i.update(100);t.sign_in&&GoogleAuth.signIn({prompt:"none"})
;t.sign_in_button&&t.sign_in_button.off().click(function(){
GoogleAuth.signIn({scope:e,prompt:"select_account"
}).then(function(){console.log("Signed in for "+e)
;Apis.current_updateSigninStatus()},function(t){
console.error("Sign in for "+e+" error ",t)
;"popup_blocked_by_browser"==t.error&&statusController.message("Pour pouvoir utiliser cette fonctionnalité, votre navigateur doit accepter les fenêtres pop-up provenant de www.sitew.com","error")
;Apis.current_updateSigninStatus()})})
;t.sign_out_button&&t.sign_out_button.off().click(function(){
GoogleAuth.signOut().then(function(){try{
GoogleAuth.currentUser.get().reloadAuthResponse()}catch(e){}
Apis.current_updateSigninStatus()},function(){
Apis.current_updateSigninStatus()})})
;t.revoke_access_button&&t.revoke_access_button.off().click(function(){
GoogleAuth.disconnect()})})})},google_platform:function(){
!function(e,t,i,o,n,s){(o=e.gapi||(e.gapi={})).analytics={q:[],
ready:function(e){this.q.push(e)}};n=t.createElement(i)
;s=t.getElementsByTagName(i)[0]
;n.src='https://apis.google.com/js/platform.js'
;s.parentNode.insertBefore(n,s);n.onload=function(){
o.load('analytics')}}(window,document,'script')},
dropbox:function(e){if(window.Dropbox)e&&e();else{
this._create_script("dropbox","https://unpkg.com/dropbox/dist/Dropbox-sdk.min.js")
;setTimeout(function(){Apis.dropbox(e)},50)}},
dailymotion_api:function(e,t,i){
$.getJSON("https://api.dailymotion.com"+e,t,function(e){i&&i(e)
})},youtube_ready:!1,youtube_player:function(e){var t=this
;if(this.youtube_ready)e();else{var i="youtube-search"
;if(0==$("#"+i).length){
window.onYouTubeIframeAPIReady=function(){t.youtube_ready=!0}
;this._create_script(i,"https://www.youtube.com/iframe_api")}
setTimeout(function(){Apis.youtube_player(e)},50)}},
soundcloud_player:function(e){
if(window.SC&&SC.Widget)e&&e();else{
this._create_script("soundcloud-player","https://w.soundcloud.com/player/api.js")
;setTimeout(function(){Apis.soundcloud_player(e)},50)}},
soundcloud_search:function(e){if(window.SC&&SC.get){
SC.options.client_id||SC.initialize({
client_id:"ad7cfffd89a3438ab441069c451ebe3d",
redirect_uri:"https://www.sitew.com"});e&&e()}else{
this._create_script("soundcloud-search","https://connect.soundcloud.com/sdk.js")
;setTimeout(function(){Apis.soundcloud_search(e)},50)}},
twitch:function(e){var t=this;if(window.Twitch)e();else{
this._create_script("twitch-player","https://player.twitch.tv/js/embed/v1.js")
;setTimeout(function(){Apis.twitch(e)},50)}},vimeo:function(e){
if(window.Vimeo)e&&e();else{
this._create_script("vimeo-player","https://player.vimeo.com/api/player.js")
;setTimeout(function(){Apis.vimeo(e)},50)}},
recaptcha:function(e){var t=this
;if(window.grecaptcha&&window.grecaptcha.render)e();else{
this._create_script("recaptcha_api","https://www.google.com/recaptcha/api.js?render=explicit",{
defer:!0});setTimeout(function(){Apis.recaptcha(e)},50)}},
_create_script:function(e,t,i){if(0==$("#"+e).length){
var o,n=document,s="script",r=n.getElementsByTagName(s)[0]
;(o=n.createElement(s)).id=e;o.src=t
;(i=i||{}).async&&o.setAttribute("async","")
;i.defer&&o.setAttribute("defer","")
;r.parentNode.insertBefore(o,r)}}
},tb_remove_timeout,flash_objects,tb_editor=$("body").hasClass("sitew_editor"),tb_marketing=!1,marketing_opts={},size_changed=!1
;$(document).ready(function(){
tb_init('a.thickbox, area.thickbox, input.thickbox')})
;var SignalController=Class.create()
;SignalController.prototype={initialize:function(){
this.functionMap={};this.idMap={};this.results={}},
emit:function(e){
this.functionMap[e]&&[...this.functionMap[e]].forEach(e=>{
this.safeCall(e,arguments)})},safeCall:function(e,t){try{
e.apply(this,t)}catch(i){data={exp:i,arguments:t}
;"undefined"!=typeof e.original_function&&(e=e.original_function)
;try{data.function_name=e.name}catch(o){}try{
data.function_code=e.toString()}catch(o){}
console.warn("Exception in signal receiver",data)}},
emitVariable:function(e){if(this.results[e]==undefined){
this.emit.apply(this,arguments);this.results[e]=arguments}},
getVariable:function(e,t){if(!t)return this.results[e]
;this.results[e]!=undefined?this.safeCall(t,this.results[e]):this.connect(e,t)
},connect:function(e,t,i){if(!this.functionMap[e]){
this.functionMap[e]=new Array;this.idMap[e]=new Array}
this.functionMap[e].push(t);this.idMap[e].push(i)},
connectOnce:function(e,t){var i=this,o=function(){
0!=t.apply(null,arguments)&&i.disconnect(e,o)}
;o.original_function=t;this.connect(e,o)},
disconnect:function(e,t){var i=this
;if(this.functionMap[e]&&this.idMap[e]){
var o="function"==typeof t?this.functionMap[e].indexesOf(t):this.idMap[e].indexesOf(t)
;o.length>0&&o.each(function(t){i.functionMap[e].splice(t,1)
;i.idMap[e].splice(t,1)})}}};sigCtl=new SignalController
;var Signal=Class.create();Signal.prototype={
initialize:function(e){this.id=e},connect:function(e,t){
sigCtl.connect(e,t,this.id)},disconnect:function(e){
sigCtl.disconnect(e,this.id)}};var Misc={poll:function(e,t,i){
if(e())t.apply(r);else var o=0,n=100,s=2e4/n,r=this,a=setInterval(function(){
o++;if(e()){clearInterval(a);t.apply(r)}else if(o>s){
clearInterval(a);i&&i.apply(r)}},n)},
pollVariable:function(e,t,i){this.poll(function(){
return window[e]!=undefined},t,i)},deepCloneObj:function(myObj){
eval("var f="+JSON_.stringify(myObj));return f},
deferred_timers:[],deferred_timers_2:[],
deferred:function(e,t,i,o){o=o||e;i=i||1e4;t=t||1e3
;var n=this,s=this.deferred_timers_2.find(function(e){
return e[0]==o});if(s){clearTimeout(s[1]);if(new Date-s[2]>i){
s[2]=new Date;t=0}}else{s=[o,null,new Date]
;this.deferred_timers_2.push(s)}s[1]=setTimeout(function(){
n.deferred_timers_2.splice(n.deferred_timers_2.find_index(function(e){
return e[0]==o}),1);e()},t)},deferred_method:function(e,t,i){
i=i||1e3;var o=this.deferred_timers.find(function(i){
return i[1]==t&&i[0]==e});if(o)clearTimeout(o[2]);else{
o=[e,t,null];this.deferred_timers.push(o)}
o[2]=setTimeout(function(){t.apply(e)},i)},_nbr_try:{},
try_forever:function(e){var t=function(){
Misc._nbr_try[e]=Misc._nbr_try[e]||0;Misc._nbr_try[e]+=1
;Misc._nbr_try[e];setTimeout(function(){Misc.try_forever(e)
},100)};try{"retry"==e()&&t()}catch(i){t()}}}
;$(document).ready(function(){
$("a.sitew,span.sitew").replaceWith("<a href='https://www.sitew.com' class='sitew'><span>Site</span><span>W</span></a>")
});!function(e){var t=!1,i=[];jQuery.ori_ajax=jQuery.ajax
;jQuery.ajaxSettings.timeout=6e4
;e(document).ajaxSend(function(t,i,o){if(!o.crossDomain){
var n=e('meta[name="csrf-token"]').attr('content')
;n&&i.setRequestHeader('X-CSRF-Token',n)}});!function o(e){
var t=e.ajaxSettings.xhr;e.ajaxSetup({xhr:function(){
var e=t(),i=this;if(e){
if("function"==typeof e.addEventListener&&i.progress!==undefined){
e.addEventListener("progress",function(e){i.progress(e)},!1)
;e.addEventListener('readystatechange',function(e){
i.progressReady(e)},!1)}
"object"==typeof e.upload&&i.progressUpload!==undefined&&e.upload.addEventListener("progress",function(e){
i.progressUpload(e)},!1)}return e}})}(jQuery)
;jQuery.full_ajax=function(e){if(e.json){
e.contentType="application/json";e.data=JSON.stringify(e.json)
;e.dataType="json"}if(e.simple_ajax)return jQuery.ori_ajax(e)
;var o=null
;e.no_progress||(o=new ProgressController(e.name||sprintf("Chargement de %1$s",e.url),{
next_progress:10}));e.progress_handler=o
;var n=0,s=e.error_to_json?e.success:e.error
;e.time_of_request=new Date;if(o){e.progressReady=function(e){
switch(e.target.readyState){case 1:o.update(10,{next_progress:40
});break;case 2:o.update(40,{next_progress:80});break;case 4:
o.update(80,{next_progress:100})}};e.progress=function(e){
if(e.lengthComputable){var t=40+e.loaded/e.total*40;o.update(t,{
next_progress:t})}}
;e.progressUpload=e.progressUpload||function(e){
if(e.lengthComputable){var t=e.loaded/e.total*40;o.update(t)
;o.update(t,{next_progress:t})}}}var r=e.success
;e.success=function(t,i){try{o&&o.update(80,{next_progress:100})
;r&&r(t,i);o&&o.update(100)}catch(n){if(window.debug)throw n
;o&&o.update(100)
;dbg.log("Exception in Ajax success method, set debug=true in console to throw exception",{
exeption:n,request:e,result_data:t,result_status:i})}}
;e.error=function(r,a,l){if(503===r.status)try{
var c=JSON.parse(r.responseText);if(c.timeout&&c.retry_delays){
e._sw_timeout_count||(e._sw_timeout_count=0)
;if(e._sw_timeout_count<c.retry_delays.length){
var d=c.retry_delays[e._sw_timeout_count];e._sw_timeout_count++
;o&&o.update(0,{next_progress:10});setTimeout(function(){
jQuery.ori_ajax(e)},1e3*d);return}e.autoretry=0}}catch(p){}
o&&(o.paused=!0);n+=1;i.push({request:e,callback:s,xhr:r,
status:a,exp:l,progressHandler:o});if(!t){t=!0;if("timeout"==a){
mess="Désolé, le délai pour la connexion est dépassé. Merci de vérifier votre connexion Internet et d'essayer de nouveau."
;jQuery.ajaxSettings.timeout=6e4+2e4*n
}else if("parsererror"==a){
mess="Désolé, les données reçues ne sont pas correctes."
;dbg.error("Ajax parsererror",{xhr:r,request:e})
}else if("abort"==a);else if("undefined"!=typeof r.status)if(401==r.status)mess=sprintf("Désolé, vous avez été déconnecté, vous devez vous connecter %1$sici%2$s avant de réessayer.","<a "+(Date.now()>0?"href='/welcome/signin'":"")+" onclick='window.open(\"/welcome/signin?return_to=editor\",\"login\",\"menubar=no, status=no, scrollbars=no, menubar=no, width=600, height=400\");return false;' target=_blank>","</a>");else if(403==r.status)mess="Unauthorized access";else if(423==r.status)mess="Ce compte a été désactivé car il ne respectait pas nos conditions d'utilisation.";else if(417==r.status)mess="Vous n'êtes pas connecté avec le bon compte pour accéder à cette page."+sprintf("Désolé, vous avez été déconnecté, vous devez vous connecter %1$sici%2$s avant de réessayer.","<a "+(Date.now()>0?"href='/welcome/signin'":"")+" onclick='window.open(\"/welcome/signin?return_to=editor\",\"login\",\"menubar=no, status=no, scrollbars=no, menubar=no, width=600, height=400\");return false;' target=_blank>","</a>");else if(404==r.status)mess="Pas de résultat trouvé";else if(500==r.status)mess="Désolé, il y a eu un problème sur le serveur. Réessayez et si le problème persiste, rechargez cette page en appuyant sur F5.";else if(502==r.status)mess="Désolé, votre proxy n'arrive pas à se connecter à notre serveur. Merci de réessayer plus tard.";else if(503==r.status)mess="Merci de patienter quelques secondes entre vos recherches.";else if(0==r.status||r.status>1e4)mess="Désolé, une erreur de communication s'est produite. Merci de vérifier votre connexion Internet et d'essayer de nouveau.";else{
mess="Désolé, une erreur de communication s'est produite. ("+r.status+") Réessayez et si le problème persiste, rechargez cette page en appuyant sur F5."
;469!=r.status&&dbg.error("Ajax error with not managed status code",{
xhr:r,request:e})}else{
mess="Désolé, une erreur de communication s'est produite. Réessayez et si le problème persiste, rechargez cette page en appuyant sur F5."
;dbg.log("Ajax error with no error code",{xhr:r,request:e})}
cancel_ajax=function(o){
!e.autoretry&&window.statusController&&statusController.hide()
;e.noDbg||dbg.log("User canceled "+i.length+" requests after "+n+" try",i)
;i.each(function(e){try{
e.progressHandler&&e.progressHandler.update(80,{
next_progress:100})
;e.request.error_to_json&&e.callback?e.callback({
errors:[e.status]
},e.status):e.callback&&e.callback(e.xhr,e.status,e.exp)
}catch(t){dbg.error("Exception on an ajax error callback",{
request:e,exp_catched:t})}finally{
e.progressHandler&&e.progressHandler.update(100)}});i=[];t=!1}
;retry_ajax=function(){
!e.autoretry&&window.statusController&&statusController.hide()
;t=!1;i.each(function(e){
e.progressHandler&&e.progressHandler.update(0,{next_progress:100
});e.request.retried&&e.request.retried()
;jQuery.ori_ajax(e.request)});i=[]}
;if("abort"==a)cancel_ajax();else if(e.autoretry&&n<e.autoretry)setTimeout(function(){
retry_ajax()},5e3+5e3*n);else if(e.autoretry){
console.log("Ajax: All retry failed for "+e.url+" after "+n+" try.")
;sigCtl.emit("Ajax.allRetryFailed",e);cancel_ajax()
}else if(e.noretry||e.no_message){cancel_ajax()
;window.statusController&&!e.no_message&&statusController.message(mess,"warning")
}else window.statusController&&statusController.message(mess+"<br><a href='#' onclick='retry_ajax()'>Réessayer</a> <a href='#' onclick='cancel_ajax()'>Annuler</a> <br><small class='status_date'>"+moment().format('DD/MM/YYYY HH:mm:ss')+"</small>","warning",-1,10)
}};return jQuery.ori_ajax(e)}}(jQuery)
;var ProgressController=Class.create()
;ProgressController.prototype={initialize:function(e){},
update:function(e,t){}};jQuery.cookie=function(e,t,i){
if(void 0===t){var o=null
;if(document.cookie&&''!=document.cookie)for(var n=document.cookie.split(';'),s=0;s<n.length;s++){
var r=jQuery.trim(n[s]);if(r.substring(0,e.length+1)==e+'='){
o=decodeURIComponent(r.substring(e.length+1));break}}return o}
i=i||{};if(null===t){t='';i.expires=-1}var a=''
;if(i.expires&&('number'==typeof i.expires||i.expires.toUTCString)){
var l
;'number'==typeof i.expires?(l=new Date).setTime(l.getTime()+24*i.expires*60*60*1e3):l=i.expires
;a='; expires='+l.toUTCString()}
var c=i.path?'; path='+i.path:'',d=i.domain?'; domain='+i.domain:'',p=i.secure?'; secure':''
;document.cookie=[e,'=',encodeURIComponent(t),a,c,d,p].join('')}
;!function(){function e(e,n){if(i&&i!=o){o=i;var s=e&&n?e(n):{
x:t.pageX,y:t.pageY};$("#hsc").html(i);pos_=$.positionAround({
height:$("#hs").stop(!0,!0).show().height(),width:250},{
x:s.x-30,y:s.y-30,w:40,h:50})
;$("#hs").hide().css(pos_).fadeIn(200)}else if(!i){o=null
;$("#hs").stop(!0,!0).fadeOut(500)
;$(document).off("mousemove.pointer_tracking")}}var t,i,o,n=null
;$.inViewPort=$.inViewPort||function(e,t){var i=[{left:e.left,
top:e.top},{left:e.left+e.width,top:e.top},{left:e.left+e.width,
top:e.top+e.height},{left:e.left,top:e.top+e.height}],o=t||{
top:$(window).scrollTop(),left:$(window).scrollLeft(),
bottom:$(window).scrollTop()+$(window).height(),
right:$(window).scrollLeft()+$(window).width()}
;ret=null==i.find(function(e){
return e.left<o.left||e.top<o.top||e.top>o.bottom||e.left>o.right
});return ret}
;$.positionAround=$.positionAround||function(e,t,i,o){
var n=i||0,s={};s=e.top?$.inViewPort(e,o)?{top:e.top,left:e.left
}:{top:o.bottom-e.height,left:o.right-e.width}:{top:t.y+20,
left:t.x+20};var r=!1;do{switch(n){case 0:case 13:
e.left=t.x+Math.floor(t.w/2-e.width/2);e.top=t.y+t.h;break
;case 1:e.left=t.x+Math.floor(t.w/2-e.width/2)
;e.top=t.y-e.height;break;case 2:e.left=t.x-e.width
;e.top=t.y+t.h;break;case 3:e.left=t.x+t.w;e.top=t.y+t.h;break
;case 4:e.left=t.x+t.w;e.top=t.y-e.height;break;case 5:
e.left=t.x-e.width;e.top=t.y-e.height;break;case 6:e.left=0
;e.top=0;break;case 10:e.left=t.x-e.width;e.top=t.y;break
;case 11:e.left=t.x+t.w;e.top=t.y;break;default:e.left=s.left
;e.top=s.top;r=!0}n++}while(!$.inViewPort(e,o)&&!r);return{
top:e.top,left:e.left}};var s=function(e){t=e}
;jQuery.fn.HandleHelpTooltip=function(){if(0==$("#hs").length){
$("body").prepend('<div id="hs" class=body><div id="hsb"><div id="hsl"><div id=hsc></div></div></div></div>')
;$("#hs").mouseout(function(t){i=null;e("tooltip out")})}
$(".ishelp").each(function(){
$(this).sitew_tooltip($(this).attr("help"))})
;this.find(".dhelp").each(function(e,t){
$(this).sitew_tooltip($(this).attr("help"),500)})
;$("div.ishelp").each(function(){var e=$(this)
;HelpTag(e.html()).addClass(e.removeClass("ishelp").attr("class")).insertBefore(e)
;e.remove()});return this}
;jQuery.fn.sitew_tooltip=jQuery.fn.tooltip=function(o,r,a){
var l=$(this);r=r||50;if(o){l.tl_mout=function(t){i=null
;n=setTimeout(function(){e(a,l)},800)};l.tl_mover=function(n){
t=n;$(document).on("mousemove.pointer_tracking",s);i=o
;setTimeout(function(){e(a,l)},r)};l.tl_clk=function(){i=null
;e(a,l)}
;l.on("mouseout.tooltip",l.tl_mout).on("mouseover.tooltip",l.tl_mover).on("click.tooltip",l.tl_clk)
}else l.off("mouseout.tooltip mouseover.tooltip click.tooltip")
;return this}}();jQuery.fn.autocomplete=function(e){
if(this.length){
var t=new google.maps.places.Autocomplete(this[0],{
types:["geocode"]})
;google.maps.event.addListener(t,'place_changed',function(i){
var o=t.getPlace();e&&e(t.getPlace())})}}
;$.fn.updateScrollbar=function(){var e=this
;setTimeout(function(){e.mCustomScrollbar("update")},0)}
;$.fn.destroyScrollbar=function(){
this.off("activate.scrollbars")
;$(window).off("resize.scrollbars",this.data("scrollbar_update_func"))
;try{this.mCustomScrollbar("destroy")}catch(e){}
this.removeData("mCS")};$.fn.setScrollbar=function(e){e=e||!1
;var t=this;this.mCustomScrollbar({theme:"minimal-dark",
scrollInertia:200,advanced:{updateOnContentResize:e,
updateOnSelectorChange:!1,updateOnImageLoad:!1},mouseWheel:{
disableOver:["select","option","keygen","datalist","textarea",".selectBox",".selectOptions",".selectOption",".k-dropdown"]
}});var i=null,o=function(){
window.blockSelector&&blockSelector.interactive||Misc.deferred(function(){
t.mCustomScrollbar("update")},200,1500)}
;$(window).on("resize.scrollbars",o)
;t.data("scrollbar_update_func",o).on("activate.scrollbars",o)
;o()};jQuery.fn.highlight=function(e){function t(e,i){var o=0
;if(3==e.nodeType){
var n=e.data.remove_accents().toUpperCase().indexOf(i);if(n>=0){
if($(e).parents(".highlight").length>0)return 0
;var s=document.createElement('span');s.className='highlight'
;var r=e.splitText(n),a=r.splitText(i.length),l=r.cloneNode(!0)
;s.appendChild(l);r.parentNode.replaceChild(s,r);o=1}
}else if(1==e.nodeType&&e.childNodes&&!/(script|style)/i.test(e.tagName))for(var c=0;c<e.childNodes.length;++c)c+=t(e.childNodes[c],i)
;return o}return this.each(function(){
t(this,e.remove_accents().toUpperCase())})}
;jQuery.fn.removeHighlight=function(){
return this.find("span.highlight").each(function(){
this.parentNode.firstChild.nodeName;with(this.parentNode){
replaceChild(this.firstChild,this);normalize()}}).end()}
;!function(e){
"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)
}(function(e){function t(t,o){
var n,s,r,a=t.nodeName.toLowerCase();if("area"===a){
s=(n=t.parentNode).name
;return!(!t.href||!s||"map"!==n.nodeName.toLowerCase())&&(!!(r=e("img[usemap='#"+s+"']")[0])&&i(r))
}
return(/input|select|textarea|button|object/.test(a)?!t.disabled:"a"===a&&t.href||o)&&i(t)
}function i(t){
return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){
return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{}
;e.extend(e.ui,{version:"1.11.1",keyCode:{BACKSPACE:8,COMMA:188,
DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,
PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38
}});e.fn.extend({scrollParent:function(t){
var i=this.css("position"),o="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,s=this.parents().filter(function(){
var t=e(this)
;return(!o||"static"!==t.css("position"))&&n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))
}).eq(0)
;return"fixed"!==i&&s.length?s:e(this[0].ownerDocument||document)
},uniqueId:(o=0,function(){return this.each(function(){
this.id||(this.id="ui-id-"+ ++o)})}),removeUniqueId:function(){
return this.each(function(){
/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}})
;var o,n,s,r;e.extend(e.expr[":"],{
data:e.expr.createPseudo?e.expr.createPseudo(function(t){
return function(i){return!!e.data(i,t)}}):function(t,i,o){
return!!e.data(t,o[3])},focusable:function(i){
return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){
var o=e.attr(i,"tabindex"),n=isNaN(o);return(n||o>=0)&&t(i,!n)}
})
;e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){
function o(t,i,o,s){e.each(n,function(){
i-=parseFloat(e.css(t,"padding"+this))||0
;o&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0)
;s&&(i-=parseFloat(e.css(t,"margin"+this))||0)});return i}
var n="Width"===i?["Left","Right"]:["Top","Bottom"],s=i.toLowerCase(),r={
innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,
outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight}
;e.fn["inner"+i]=function(t){
return t===undefined?r["inner"+i].call(this):this.each(function(){
e(this).css(s,o(this,t)+"px")})};e.fn["outer"+i]=function(t,n){
return"number"!=typeof t?r["outer"+i].call(this,t):this.each(function(){
e(this).css(s,o(this,t,!0,n)+"px")})}})
;e.fn.addBack||(e.fn.addBack=function(e){
return this.add(null==e?this.prevObject:this.prevObject.filter(e))
})
;e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=(n=e.fn.removeData,
function(t){
return arguments.length?n.call(this,e.camelCase(t)):n.call(this)
}))
;e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
;e.fn.extend({focus:(r=e.fn.focus,function(t,i){
return"number"==typeof t?this.each(function(){var o=this
;setTimeout(function(){e(o).focus();i&&i.call(o)},t)
}):r.apply(this,arguments)}),
disableSelection:(s="onselectstart"in document.createElement("div")?"selectstart":"mousedown",
function(){
return this.bind(s+".ui-disableSelection",function(e){
e.preventDefault()})}),enableSelection:function(){
return this.unbind(".ui-disableSelection")},zIndex:function(t){
if(t!==undefined)return this.css("zIndex",t)
;if(this.length)for(var i=e(this[0]),o,n;i.length&&i[0]!==document;){
if("absolute"===(o=i.css("position"))||"relative"===o||"fixed"===o){
n=parseInt(i.css("zIndex"),10);if(!isNaN(n)&&0!==n)return n}
i=i.parent()}return 0}});e.ui.plugin={add:function(t,i,o){
var n,s=e.ui[t].prototype;for(n in o){
s.plugins[n]=s.plugins[n]||[];s.plugins[n].push([i,o[n]])}},
call:function(e,t,i,o){var n,s=e.plugins[t]
;if(s&&(o||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;n<s.length;n++)e.options[s[n][0]]&&s[n][1].apply(e.element,i)
}};var a=0,l=Array.prototype.slice;e.cleanData=function(t){
return function(i){var o,n,s;for(s=0;null!=(n=i[s]);s++)try{
(o=e._data(n,"events"))&&o.remove&&e(n).triggerHandler("remove")
}catch(r){}t(i)}}(e.cleanData);e.widget=function(t,i,o){
var n,s,r,a,l={},c=t.split(".")[0];t=t.split(".")[1];n=c+"-"+t
;if(!o){o=i;i=e.Widget}e.expr[":"][n.toLowerCase()]=function(t){
return!!e.data(t,n)};e[c]=e[c]||{};s=e[c][t]
;r=e[c][t]=function(e,t){
if(!this._createWidget)return new r(e,t)
;arguments.length&&this._createWidget(e,t)};e.extend(r,s,{
version:o.version,_proto:e.extend({},o),_childConstructors:[]})
;(a=new i).options=e.widget.extend({},a.options)
;e.each(o,function(t,o){if(e.isFunction(o)){l[t]=(n=function(){
return i.prototype[t].apply(this,arguments)},s=function(e){
return i.prototype[t].apply(this,e)},function(){
var e=this._super,t=this._superApply,i;this._super=n
;this._superApply=s;i=o.apply(this,arguments);this._super=e
;this._superApply=t;return i});var n,s}else l[t]=o})
;r.prototype=e.widget.extend(a,{
widgetEventPrefix:s&&a.widgetEventPrefix||t},l,{constructor:r,
namespace:c,widgetName:t,widgetFullName:n});if(s){
e.each(s._childConstructors,function(t,i){var o=i.prototype
;e.widget(o.namespace+"."+o.widgetName,r,i._proto)})
;delete s._childConstructors}else i._childConstructors.push(r)
;e.widget.bridge(t,r);return r};e.widget.extend=function(t){
for(var i=l.call(arguments,1),o=0,n=i.length,s,r;o<n;o++)for(s in i[o]){
r=i[o][s]
;i[o].hasOwnProperty(s)&&r!==undefined&&(e.isPlainObject(r)?t[s]=e.isPlainObject(t[s])?e.widget.extend({},t[s],r):e.widget.extend({},r):t[s]=r)
}return t};e.widget.bridge=function(t,i){
var o=i.prototype.widgetFullName||t;e.fn[t]=function(n){
var s="string"==typeof n,r=l.call(arguments,1),a=this
;n=!s&&r.length?e.widget.extend.apply(null,[n].concat(r)):n
;s?this.each(function(){var i,s=e.data(this,o)
;if("instance"===n){a=s;return!1}
if(!s)return e.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+n+"'")
;if(!e.isFunction(s[n])||"_"===n.charAt(0))return e.error("no such method '"+n+"' for "+t+" widget instance")
;if((i=s[n].apply(s,r))!==s&&i!==undefined){
a=i&&i.jquery?a.pushStack(i.get()):i;return!1}
}):this.each(function(){var t=e.data(this,o);if(t){
t.option(n||{});t._init&&t._init()
}else e.data(this,o,new i(n,this))});return a}}
;e.Widget=function(){};e.Widget._childConstructors=[]
;e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",
defaultElement:"<div>",options:{disabled:!1,create:null},
_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0]
;this.element=e(i);this.uuid=a++
;this.eventNamespace="."+this.widgetName+this.uuid
;this.options=e.widget.extend({},this.options,this._getCreateOptions(),t)
;this.bindings=e();this.hoverable=e();this.focusable=e()
;if(i!==this){e.data(i,this.widgetFullName,this)
;this._on(!0,this.element,{remove:function(e){
e.target===i&&this.destroy()}})
;this.document=e(i.style?i.ownerDocument:i.document||i)
;this.window=e(this.document[0].defaultView||this.document[0].parentWindow)
}this._create()
;this._trigger("create",null,this._getCreateEventData())
;this._init()},_getCreateOptions:e.noop,
_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,
destroy:function(){this._destroy()
;this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName))
;this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled")
;this.bindings.unbind(this.eventNamespace)
;this.hoverable.removeClass("ui-state-hover")
;this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,
widget:function(){return this.element},option:function(t,i){
var o=t,n,s,r
;if(0===arguments.length)return e.widget.extend({},this.options)
;if("string"==typeof t){o={};t=(n=t.split(".")).shift()
;if(n.length){s=o[t]=e.widget.extend({},this.options[t])
;for(r=0;r<n.length-1;r++){s[n[r]]=s[n[r]]||{};s=s[n[r]]}
t=n.pop()
;if(1===arguments.length)return s[t]===undefined?null:s[t]
;s[t]=i}else{
if(1===arguments.length)return this.options[t]===undefined?null:this.options[t]
;o[t]=i}}this._setOptions(o);return this},
_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t])
;return this},_setOption:function(e,t){this.options[e]=t
;if("disabled"===e){
this.widget().toggleClass(this.widgetFullName+"-disabled",!!t)
;if(t){this.hoverable.removeClass("ui-state-hover")
;this.focusable.removeClass("ui-state-focus")}}return this},
enable:function(){return this._setOptions({disabled:!1})},
disable:function(){return this._setOptions({disabled:!0})},
_on:function(t,i,o){var n,s=this;if("boolean"!=typeof t){o=i;i=t
;t=!1}if(o){i=n=e(i);this.bindings=this.bindings.add(i)}else{o=i
;i=this.element;n=this.widget()}e.each(o,function(o,r){
function a(){
if(t||!0!==s.options.disabled&&!e(this).hasClass("ui-state-disabled"))return("string"==typeof r?s[r]:r).apply(s,arguments)
}"string"!=typeof r&&(a.guid=r.guid=r.guid||a.guid||e.guid++)
;var l=o.match(/^([\w:-]*)\s*(.*)$/),c=l[1]+s.eventNamespace,d=l[2]
;d?n.delegate(d,c,a):i.bind(c,a)})},_off:function(e,t){
t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace
;e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){
return("string"==typeof e?o[e]:e).apply(o,arguments)}var o=this
;return setTimeout(i,t||0)},_hoverable:function(t){
this.hoverable=this.hoverable.add(t);this._on(t,{
mouseenter:function(t){
e(t.currentTarget).addClass("ui-state-hover")},
mouseleave:function(t){
e(t.currentTarget).removeClass("ui-state-hover")}})},
_focusable:function(t){this.focusable=this.focusable.add(t)
;this._on(t,{focusin:function(t){
e(t.currentTarget).addClass("ui-state-focus")},
focusout:function(t){
e(t.currentTarget).removeClass("ui-state-focus")}})},
_trigger:function(t,i,o){var n,s,r=this.options[t];o=o||{}
;(i=e.Event(i)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase()
;i.target=this.element[0]
;if(s=i.originalEvent)for(n in s)n in i||(i[n]=s[n])
;this.element.trigger(i,o)
;return!(e.isFunction(r)&&!1===r.apply(this.element[0],[i].concat(o))||i.isDefaultPrevented())
}};e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){
e.Widget.prototype["_"+t]=function(o,n,s){
"string"==typeof n&&(n={effect:n})
;var r,a=n?!0===n||"number"==typeof n?i:n.effect||i:t
;"number"==typeof(n=n||{})&&(n={duration:n})
;r=!e.isEmptyObject(n);n.complete=s;n.delay&&o.delay(n.delay)
;r&&e.effects&&e.effects.effect[a]?o[t](n):a!==t&&o[a]?o[a](n.duration,n.easing,s):o.queue(function(i){
e(this)[t]();s&&s.call(o[0]);i()})}});var c=e.widget,d=!1
;e(document).mouseup(function(){d=!1})
;var p=e.widget("ui.mouse",{version:"1.11.1",options:{
cancel:"input,textarea,button,select,option",distance:1,delay:0
},_mouseInit:function(){var t=this
;this.element.bind("mousedown."+this.widgetName,function(e){
return t._mouseDown(e)
}).bind("click."+this.widgetName,function(i){
if(!0===e.data(i.target,t.widgetName+".preventClickEvent")){
e.removeData(i.target,t.widgetName+".preventClickEvent")
;i.stopImmediatePropagation();return!1}});this.started=!1},
_mouseDestroy:function(){
this.element.unbind("."+this.widgetName)
;this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
},_mouseDown:function(t){if(!d){
this._mouseStarted&&this._mouseUp(t);this._mouseDownEvent=t
;var i=this,o=1===t.which,n=!("string"!=typeof this.options.cancel||!t.target.nodeName)&&e(t.target).closest(this.options.cancel).length
;if(!o||n||!this._mouseCapture(t))return!0
;this.mouseDelayMet=!this.options.delay
;this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){
i.mouseDelayMet=!0},this.options.delay))
;if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){
this._mouseStarted=!1!==this._mouseStart(t)
;if(!this._mouseStarted){t.preventDefault();return!0}}
!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent")
;this._mouseMoveDelegate=function(e){return i._mouseMove(e)}
;this._mouseUpDelegate=function(e){return i._mouseUp(e)}
;this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate)
;t.preventDefault();d=!0;return!0}},_mouseMove:function(t){
if(e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t)
;if(!t.which)return this._mouseUp(t);if(this._mouseStarted){
this._mouseDrag(t);return t.preventDefault()}
if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){
this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t)
;this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)}
return!this._mouseStarted},_mouseUp:function(t){
this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
;if(this._mouseStarted){this._mouseStarted=!1
;t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0)
;this._mouseStop(t)}d=!1;return!1},
_mouseDistanceMet:function(e){
return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance
},_mouseDelayMet:function(){return this.mouseDelayMet},
_mouseStart:function(){},_mouseDrag:function(){},
_mouseStop:function(){},_mouseCapture:function(){return!0}})
;e.widget("ui.draggable",e.ui.mouse,{version:"1.11.1",
widgetEventPrefix:"drag",options:{addClasses:!0,
appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,
cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",
iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,
revertDuration:500,scope:"default",scroll:!0,
scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",
snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,
stop:null},_create:function(){
"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")
;this.options.addClasses&&this.element.addClass("ui-draggable")
;this.options.disabled&&this.element.addClass("ui-draggable-disabled")
;this._setHandleClassName();this._mouseInit()},
_setOption:function(e,t){this._super(e,t);if("handle"===e){
this._removeHandleClassName();this._setHandleClassName()}},
_destroy:function(){
if((this.helper||this.element).is(".ui-draggable-dragging"))this.destroyOnClear=!0;else{
this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled")
;this._removeHandleClassName();this._mouseDestroy()}},
_mouseCapture:function(t){var i=this.document[0],o=this.options
;try{
i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()
}catch(n){}
if(this.helper||o.disabled||e(t.target).closest(".ui-resizable-handle").length>0)return!1
;this.handle=this._getHandle(t);if(!this.handle)return!1
;e(!0===o.iframeFix?"iframe":o.iframeFix).each(function(){
e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
width:this.offsetWidth+"px",height:this.offsetHeight+"px",
position:"absolute",opacity:"0.001",zIndex:1e3
}).css(e(this).offset()).appendTo("body")});return!0},
_mouseStart:function(t){var i=this.options
;this.helper=this._createHelper(t)
;this.helper.addClass("ui-draggable-dragging")
;this._cacheHelperProportions()
;e.ui.ddmanager&&(e.ui.ddmanager.current=this)
;this._cacheMargins()
;this.cssPosition=this.helper.css("position")
;this.scrollParent=this.helper.scrollParent(!0)
;this.offsetParent=this.helper.offsetParent()
;this.offsetParentCssPosition=this.offsetParent.css("position")
;this.offset=this.positionAbs=this.element.offset()
;this.offset={top:this.offset.top-this.margins.top,
left:this.offset.left-this.margins.left};this.offset.scroll=!1
;e.extend(this.offset,{click:{left:t.pageX-this.offset.left,
top:t.pageY-this.offset.top},parent:this._getParentOffset(),
relative:this._getRelativeOffset()})
;this.originalPosition=this.position=this._generatePosition(t,!1)
;this.originalPageX=t.pageX;this.originalPageY=t.pageY
;i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt)
;this._setContainment();if(!1===this._trigger("start",t)){
this._clear();return!1}this._cacheHelperProportions()
;e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)
;this._mouseDrag(t,!0)
;e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t);return!0},
_mouseDrag:function(t,i){
"fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset())
;this.position=this._generatePosition(t,!0)
;this.positionAbs=this._convertPositionTo("absolute");if(!i){
var o=this._uiHash();if(!1===this._trigger("drag",t,o)){
this._mouseUp({});return!1}this.position=o.position}
this.helper[0].style.left=this.position.left+"px"
;this.helper[0].style.top=this.position.top+"px"
;e.ui.ddmanager&&e.ui.ddmanager.drag(this,t);return!1},
_mouseStop:function(t){var i=this,o=!1
;e.ui.ddmanager&&!this.options.dropBehaviour&&(o=e.ui.ddmanager.drop(this,t))
;if(this.dropped){o=this.dropped;this.dropped=!1}
"invalid"===this.options.revert&&!o||"valid"===this.options.revert&&o||!0===this.options.revert||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,o)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){
!1!==i._trigger("stop",t)&&i._clear()
}):!1!==this._trigger("stop",t)&&this._clear();return!1},
_mouseUp:function(t){
e("div.ui-draggable-iframeFix").each(function(){
this.parentNode.removeChild(this)})
;e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t)
;this.element.focus()
;return e.ui.mouse.prototype._mouseUp.call(this,t)},
cancel:function(){
this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear()
;return this},_getHandle:function(t){
return!this.options.handle||!!e(t.target).closest(this.element.find(this.options.handle)).length
},_setHandleClassName:function(){
this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element
;this.handleElement.addClass("ui-draggable-handle")},
_removeHandleClassName:function(){
this.handleElement.removeClass("ui-draggable-handle")},
_createHelper:function(t){
var i=this.options,o=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element
;o.parents("body").length||o.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo)
;o[0]===this.element[0]||/(fixed|absolute)/.test(o.css("position"))||o.css("position","absolute")
;return o},_adjustOffsetFromHelper:function(t){
"string"==typeof t&&(t=t.split(" "));e.isArray(t)&&(t={
left:+t[0],top:+t[1]||0})
;"left"in t&&(this.offset.click.left=t.left+this.margins.left)
;"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left)
;"top"in t&&(this.offset.click.top=t.top+this.margins.top)
;"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)
},_isRootNode:function(e){
return/(html|body)/i.test(e.tagName)||e===this.document[0]},
_getParentOffset:function(){
var t=this.offsetParent.offset(),i=this.document[0]
;if("absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])){
t.left+=this.scrollParent.scrollLeft()
;t.top+=this.scrollParent.scrollTop()}
this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0})
;return{
top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),
left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)
}},_getRelativeOffset:function(){
if("relative"!==this.cssPosition)return{top:0,left:0}
;var e=this.element.position(),t=this._isRootNode(this.scrollParent[0])
;return{
top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),
left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())
}},_cacheMargins:function(){this.margins={
left:parseInt(this.element.css("marginLeft"),10)||0,
top:parseInt(this.element.css("marginTop"),10)||0,
right:parseInt(this.element.css("marginRight"),10)||0,
bottom:parseInt(this.element.css("marginBottom"),10)||0}},
_cacheHelperProportions:function(){this.helperProportions={
width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){
var t,i,o,n=this.options,s=this.document[0]
;this.relativeContainer=null
;if(n.containment)if("window"!==n.containment)if("document"!==n.containment)if(n.containment.constructor!==Array){
"parent"===n.containment&&(n.containment=this.helper[0].parentNode)
;if(o=(i=e(n.containment))[0]){t="hidden"!==i.css("overflow")
;this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(o.scrollWidth,o.offsetWidth):o.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(o.scrollHeight,o.offsetHeight):o.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom]
;this.relativeContainer=i}
}else this.containment=n.containment;else this.containment=[0,0,e(s).width()-this.helperProportions.width-this.margins.left,(e(s).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];else this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];else this.containment=null
},_convertPositionTo:function(e,t){t||(t=this.position)
;var i="absolute"===e?1:-1,o=this._isRootNode(this.scrollParent[0])
;return{
top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:o?0:this.offset.scroll.top)*i,
left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:o?0:this.offset.scroll.left)*i
}},_generatePosition:function(e,t){
var i,o,n,s,r=this.options,a=this._isRootNode(this.scrollParent[0]),l=e.pageX,c=e.pageY
;a&&this.offset.scroll||(this.offset.scroll={
top:this.scrollParent.scrollTop(),
left:this.scrollParent.scrollLeft()});if(t){
if(this.containment){if(this.relativeContainer){
o=this.relativeContainer.offset()
;i=[this.containment[0]+o.left,this.containment[1]+o.top,this.containment[2]+o.left,this.containment[3]+o.top]
}else i=this.containment
;e.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left)
;e.pageY-this.offset.click.top<i[1]&&(c=i[1]+this.offset.click.top)
;e.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left)
;e.pageY-this.offset.click.top>i[3]&&(c=i[3]+this.offset.click.top)
}if(r.grid){
n=r.grid[1]?this.originalPageY+Math.round((c-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY
;c=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-r.grid[1]:n+r.grid[1]:n
;s=r.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX
;l=i?s-this.offset.click.left>=i[0]||s-this.offset.click.left>i[2]?s:s-this.offset.click.left>=i[0]?s-r.grid[0]:s+r.grid[0]:s
}"y"===r.axis&&(l=this.originalPageX)
;"x"===r.axis&&(c=this.originalPageY)}return{
top:c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:a?0:this.offset.scroll.top),
left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:a?0:this.offset.scroll.left)
}},_clear:function(){
this.helper.removeClass("ui-draggable-dragging")
;this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove()
;this.helper=null;this.cancelHelperRemoval=!1
;this.destroyOnClear&&this.destroy()},_trigger:function(t,i,o){
o=o||this._uiHash();e.ui.plugin.call(this,t,[i,o,this],!0)
;"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute"))
;return e.Widget.prototype._trigger.call(this,t,i,o)},
plugins:{},_uiHash:function(){return{helper:this.helper,
position:this.position,originalPosition:this.originalPosition,
offset:this.positionAbs}}})
;e.ui.plugin.add("draggable","connectToSortable",{
start:function(t,i,o){var n=o.options,s=e.extend({},i,{
item:o.element});o.sortables=[]
;e(n.connectToSortable).each(function(){
var i=e(this).sortable("instance");if(i&&!i.options.disabled){
o.sortables.push({instance:i,shouldRevert:i.options.revert})
;i.refreshPositions();i._trigger("activate",t,s)}})},
stop:function(t,i,o){var n=e.extend({},i,{item:o.element})
;e.each(o.sortables,function(){if(this.instance.isOver){
this.instance.isOver=0;o.cancelHelperRemoval=!0
;this.instance.cancelHelperRemoval=!1
;this.shouldRevert&&(this.instance.options.revert=this.shouldRevert)
;this.instance._mouseStop(t)
;this.instance.options.helper=this.instance.options._helper
;"original"===o.options.helper&&this.instance.currentItem.css({
top:"auto",left:"auto"})}else{
this.instance.cancelHelperRemoval=!1
;this.instance._trigger("deactivate",t,n)}})},
drag:function(t,i,o){var n=this;e.each(o.sortables,function(){
var s=!1,r=this;this.instance.positionAbs=o.positionAbs
;this.instance.helperProportions=o.helperProportions
;this.instance.offset.click=o.offset.click
;if(this.instance._intersectsWith(this.instance.containerCache)){
s=!0;e.each(o.sortables,function(){
this.instance.positionAbs=o.positionAbs
;this.instance.helperProportions=o.helperProportions
;this.instance.offset.click=o.offset.click
;this!==r&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(r.instance.element[0],this.instance.element[0])&&(s=!1)
;return s})}if(s){if(!this.instance.isOver){
this.instance.isOver=1
;this.instance.currentItem=e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0)
;this.instance.options._helper=this.instance.options.helper
;this.instance.options.helper=function(){return i.helper[0]}
;t.target=this.instance.currentItem[0]
;this.instance._mouseCapture(t,!0)
;this.instance._mouseStart(t,!0,!0)
;this.instance.offset.click.top=o.offset.click.top
;this.instance.offset.click.left=o.offset.click.left
;this.instance.offset.parent.left-=o.offset.parent.left-this.instance.offset.parent.left
;this.instance.offset.parent.top-=o.offset.parent.top-this.instance.offset.parent.top
;o._trigger("toSortable",t);o.dropped=this.instance.element
;o.currentItem=o.element;this.instance.fromOutside=o}
this.instance.currentItem&&this.instance._mouseDrag(t)
}else if(this.instance.isOver){this.instance.isOver=0
;this.instance.cancelHelperRemoval=!0
;this.instance.options.revert=!1
;this.instance._trigger("out",t,this.instance._uiHash(this.instance))
;this.instance._mouseStop(t,!0)
;this.instance.options.helper=this.instance.options._helper
;this.instance.currentItem.remove()
;this.instance.placeholder&&this.instance.placeholder.remove()
;o._trigger("fromSortable",t);o.dropped=!1}})}})
;e.ui.plugin.add("draggable","cursor",{start:function(t,i,o){
var n=e("body"),s=o.options
;n.css("cursor")&&(s._cursor=n.css("cursor"))
;n.css("cursor",s.cursor)},stop:function(t,i,o){var n=o.options
;n._cursor&&e("body").css("cursor",n._cursor)}})
;e.ui.plugin.add("draggable","opacity",{start:function(t,i,o){
var n=e(i.helper),s=o.options
;n.css("opacity")&&(s._opacity=n.css("opacity"))
;n.css("opacity",s.opacity)},stop:function(t,i,o){
var n=o.options
;n._opacity&&e(i.helper).css("opacity",n._opacity)}})
;e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){
i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1))
;i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())
},drag:function(t,i,o){
var n=o.options,s=!1,r=o.scrollParentNotHidden[0],a=o.document[0]
;if(r!==a&&"HTML"!==r.tagName){
n.axis&&"x"===n.axis||(o.overflowOffset.top+r.offsetHeight-t.pageY<n.scrollSensitivity?r.scrollTop=s=r.scrollTop+n.scrollSpeed:t.pageY-o.overflowOffset.top<n.scrollSensitivity&&(r.scrollTop=s=r.scrollTop-n.scrollSpeed))
;n.axis&&"y"===n.axis||(o.overflowOffset.left+r.offsetWidth-t.pageX<n.scrollSensitivity?r.scrollLeft=s=r.scrollLeft+n.scrollSpeed:t.pageX-o.overflowOffset.left<n.scrollSensitivity&&(r.scrollLeft=s=r.scrollLeft-n.scrollSpeed))
}else{
n.axis&&"x"===n.axis||(t.pageY-e(a).scrollTop()<n.scrollSensitivity?s=e(a).scrollTop(e(a).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(a).scrollTop())<n.scrollSensitivity&&(s=e(a).scrollTop(e(a).scrollTop()+n.scrollSpeed)))
;n.axis&&"y"===n.axis||(t.pageX-e(a).scrollLeft()<n.scrollSensitivity?s=e(a).scrollLeft(e(a).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(a).scrollLeft())<n.scrollSensitivity&&(s=e(a).scrollLeft(e(a).scrollLeft()+n.scrollSpeed)))
}
!1!==s&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(o,t)
}});e.ui.plugin.add("draggable","snap",{start:function(t,i,o){
var n=o.options;o.snapElements=[]
;e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){
var t=e(this),i=t.offset()
;this!==o.element[0]&&o.snapElements.push({item:this,
width:t.outerWidth(),height:t.outerHeight(),top:i.top,
left:i.left})})},drag:function(t,i,o){
var n,s,r,a,l,c,d,p,h,u,f=o.options,_=f.snapTolerance,m=i.offset.left,g=m+o.helperProportions.width,v=i.offset.top,b=v+o.helperProportions.height
;for(h=o.snapElements.length-1;h>=0;h--){
c=(l=o.snapElements[h].left)+o.snapElements[h].width
;p=(d=o.snapElements[h].top)+o.snapElements[h].height
;if(g<l-_||m>c+_||b<d-_||v>p+_||!e.contains(o.snapElements[h].item.ownerDocument,o.snapElements[h].item)){
o.snapElements[h].snapping&&o.options.snap.release&&o.options.snap.release.call(o.element,t,e.extend(o._uiHash(),{
snapItem:o.snapElements[h].item}));o.snapElements[h].snapping=!1
}else{if("inner"!==f.snapMode){n=Math.abs(d-b)<=_
;s=Math.abs(p-v)<=_;r=Math.abs(l-g)<=_;a=Math.abs(c-m)<=_
;n&&(i.position.top=o._convertPositionTo("relative",{
top:d-o.helperProportions.height,left:0}).top-o.margins.top)
;s&&(i.position.top=o._convertPositionTo("relative",{top:p,
left:0}).top-o.margins.top)
;r&&(i.position.left=o._convertPositionTo("relative",{top:0,
left:l-o.helperProportions.width}).left-o.margins.left)
;a&&(i.position.left=o._convertPositionTo("relative",{top:0,
left:c}).left-o.margins.left)}u=n||s||r||a
;if("outer"!==f.snapMode){n=Math.abs(d-v)<=_;s=Math.abs(p-b)<=_
;r=Math.abs(l-m)<=_;a=Math.abs(c-g)<=_
;n&&(i.position.top=o._convertPositionTo("relative",{top:d,
left:0}).top-o.margins.top)
;s&&(i.position.top=o._convertPositionTo("relative",{
top:p-o.helperProportions.height,left:0}).top-o.margins.top)
;r&&(i.position.left=o._convertPositionTo("relative",{top:0,
left:l}).left-o.margins.left)
;a&&(i.position.left=o._convertPositionTo("relative",{top:0,
left:c-o.helperProportions.width}).left-o.margins.left)}
!o.snapElements[h].snapping&&(n||s||r||a||u)&&o.options.snap.snap&&o.options.snap.snap.call(o.element,t,e.extend(o._uiHash(),{
snapItem:o.snapElements[h].item}))
;o.snapElements[h].snapping=n||s||r||a||u}}}})
;e.ui.plugin.add("draggable","stack",{start:function(t,i,o){
var n,s=o.options,r=e.makeArray(e(s.stack)).sort(function(t,i){
return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)
});if(r.length){n=parseInt(e(r[0]).css("zIndex"),10)||0
;e(r).each(function(t){e(this).css("zIndex",n+t)})
;this.css("zIndex",n+r.length)}}})
;e.ui.plugin.add("draggable","zIndex",{start:function(t,i,o){
var n=e(i.helper),s=o.options
;n.css("zIndex")&&(s._zIndex=n.css("zIndex"))
;n.css("zIndex",s.zIndex)},stop:function(t,i,o){var n=o.options
;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}})
;var h=e.ui.draggable;e.widget("ui.droppable",{version:"1.11.1",
widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,
addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",
tolerance:"intersect",activate:null,deactivate:null,drop:null,
out:null,over:null},_create:function(){
var t,i=this.options,o=i.accept;this.isover=!1;this.isout=!0
;this.accept=e.isFunction(o)?o:function(e){return e.is(o)}
;this.proportions=function(){if(!arguments.length)return t||(t={
width:this.element[0].offsetWidth,
height:this.element[0].offsetHeight});t=arguments[0]}
;this._addToManager(i.scope)
;i.addClasses&&this.element.addClass("ui-droppable")},
_addToManager:function(t){
e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[]
;e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){
for(var t=0;t<e.length;t++)e[t]===this&&e.splice(t,1)},
_destroy:function(){
var t=e.ui.ddmanager.droppables[this.options.scope]
;this._splice(t)
;this.element.removeClass("ui-droppable ui-droppable-disabled")
},_setOption:function(t,i){
if("accept"===t)this.accept=e.isFunction(i)?i:function(e){
return e.is(i)};else if("scope"===t){
var o=e.ui.ddmanager.droppables[this.options.scope]
;this._splice(o);this._addToManager(i)}this._super(t,i)},
_activate:function(t){var i=e.ui.ddmanager.current
;this.options.activeClass&&this.element.addClass(this.options.activeClass)
;i&&this._trigger("activate",t,this.ui(i))},
_deactivate:function(t){var i=e.ui.ddmanager.current
;this.options.activeClass&&this.element.removeClass(this.options.activeClass)
;i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){
var i=e.ui.ddmanager.current
;if(i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)){
this.options.hoverClass&&this.element.addClass(this.options.hoverClass)
;this._trigger("over",t,this.ui(i))}},_out:function(t){
var i=e.ui.ddmanager.current
;if(i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)){
this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)
;this._trigger("out",t,this.ui(i))}},_drop:function(t,i){
var o=i||e.ui.ddmanager.current,n=!1
;if(!o||(o.currentItem||o.element)[0]===this.element[0])return!1
;this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){
var i=e(this).droppable("instance")
;if(i.options.greedy&&!i.options.disabled&&i.options.scope===o.options.scope&&i.accept.call(i.element[0],o.currentItem||o.element)&&e.ui.intersect(o,e.extend(i,{
offset:i.element.offset()}),i.options.tolerance,t)){n=!0
;return!1}});if(n)return!1
;if(this.accept.call(this.element[0],o.currentItem||o.element)){
this.options.activeClass&&this.element.removeClass(this.options.activeClass)
;this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)
;this._trigger("drop",t,this.ui(o));return this.element}return!1
},ui:function(e){return{draggable:e.currentItem||e.element,
helper:e.helper,position:e.position,offset:e.positionAbs}}})
;e.ui.intersect=function(){function e(e,t,i){return e>=t&&e<t+i}
return function(t,i,o,n){if(!i.offset)return!1
;var s=(t.positionAbs||t.position.absolute).left,r=(t.positionAbs||t.position.absolute).top,a=s+t.helperProportions.width,l=r+t.helperProportions.height,c=i.offset.left,d=i.offset.top,p=c+i.proportions().width,h=d+i.proportions().height
;switch(o){case"fit":return c<=s&&a<=p&&d<=r&&l<=h
;case"intersect":
return c<s+t.helperProportions.width/2&&a-t.helperProportions.width/2<p&&d<r+t.helperProportions.height/2&&l-t.helperProportions.height/2<h
;case"pointer":
return e(n.pageY,d,i.proportions().height)&&e(n.pageX,c,i.proportions().width)
;case"touch":
return(r>=d&&r<=h||l>=d&&l<=h||r<d&&l>h)&&(s>=c&&s<=p||a>=c&&a<=p||s<c&&a>p)
;default:return!1}}}();e.ui.ddmanager={current:null,droppables:{
"default":[]},prepareOffsets:function(t,i){
var o,n,s=e.ui.ddmanager.droppables[t.options.scope]||[],r=i?i.type:null,a=(t.currentItem||t.element).find(":data(ui-droppable)").addBack()
;e:for(o=0;o<s.length;o++)if(!(s[o].options.disabled||t&&!s[o].accept.call(s[o].element[0],t.currentItem||t.element))){
for(n=0;n<a.length;n++)if(a[n]===s[o].element[0]){
s[o].proportions().height=0;continue e}
s[o].visible="none"!==s[o].element.css("display")
;if(s[o].visible){"mousedown"===r&&s[o]._activate.call(s[o],i)
;s[o].offset=s[o].element.offset();s[o].proportions({
width:s[o].element[0].offsetWidth,
height:s[o].element[0].offsetHeight})}}},drop:function(t,i){
var o=!1
;e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){
if(this.options){
!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,i)&&(o=this._drop.call(this,i)||o)
;if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)){
this.isout=!0;this.isover=!1;this._deactivate.call(this,i)}}})
;return o},dragStart:function(t,i){
t.element.parentsUntil("body").bind("scroll.droppable",function(){
t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})
},drag:function(t,i){
t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i)
;e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){
if(!this.options.disabled&&!this.greedyChild&&this.visible){
var o,n,s,r=e.ui.intersect(t,this,this.options.tolerance,i),a=!r&&this.isover?"isout":r&&!this.isover?"isover":null
;if(a){if(this.options.greedy){n=this.options.scope
;(s=this.element.parents(":data(ui-droppable)").filter(function(){
return e(this).droppable("instance").options.scope===n
})).length&&((o=e(s[0]).droppable("instance")).greedyChild="isover"===a)
}if(o&&"isover"===a){o.isover=!1;o.isout=!0;o._out.call(o,i)}
this[a]=!0;this["isout"===a?"isover":"isout"]=!1
;this["isover"===a?"_over":"_out"].call(this,i)
;if(o&&"isout"===a){o.isout=!1;o.isover=!0;o._over.call(o,i)}}}
})},dragStop:function(t,i){
t.element.parentsUntil("body").unbind("scroll.droppable")
;t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}
};var u=e.ui.droppable;e.widget("ui.resizable",e.ui.mouse,{
version:"1.11.1",widgetEventPrefix:"resize",options:{
alsoResize:!1,animate:!1,animateDuration:"slow",
animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,
ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,
maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,
start:null,stop:null},_num:function(e){return parseInt(e,10)||0
},_isNumber:function(e){return!isNaN(parseInt(e,10))},
_hasScroll:function(t,i){
if("hidden"===e(t).css("overflow"))return!1
;var o=i&&"left"===i?"scrollLeft":"scrollTop",n=!1
;if(t[o]>0)return!0;t[o]=1;n=t[o]>0;t[o]=0;return n},
_create:function(){var t,i,o,n,s,r=this,a=this.options
;this.element.addClass("ui-resizable");e.extend(this,{
_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,
originalElement:this.element,_proportionallyResizeElements:[],
_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null
})
;if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){
this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
position:this.element.css("position"),
width:this.element.outerWidth(),
height:this.element.outerHeight(),top:this.element.css("top"),
left:this.element.css("left")}))
;this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance"))
;this.elementIsWrapper=!0;this.element.css({
marginLeft:this.originalElement.css("marginLeft"),
marginTop:this.originalElement.css("marginTop"),
marginRight:this.originalElement.css("marginRight"),
marginBottom:this.originalElement.css("marginBottom")})
;this.originalElement.css({marginLeft:0,marginTop:0,
marginRight:0,marginBottom:0})
;this.originalResizeStyle=this.originalElement.css("resize")
;this.originalElement.css("resize","none")
;this._proportionallyResizeElements.push(this.originalElement.css({
position:"static",zoom:1,display:"block"}))
;this.originalElement.css({
margin:this.originalElement.css("margin")})
;this._proportionallyResize()}
this.handles=a.handles||(e(".ui-resizable-handle",this.element).length?{
n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",
w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",
ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se")
;if(this.handles.constructor===String){
"all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw")
;t=this.handles.split(",");this.handles={}
;for(i=0;i<t.length;i++){o=e.trim(t[i])
;(n=e("<div class='ui-resizable-handle "+(s="ui-resizable-"+o)+"'></div>")).css({
zIndex:a.zIndex})
;"se"===o&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
;this.handles[o]=".ui-resizable-"+o;this.element.append(n)}}
this._renderAxis=function(t){var i,o,n,s;t=t||this.element
;for(i in this.handles){
this.handles[i].constructor===String&&(this.handles[i]=this.element.children(this.handles[i]).first().show())
;if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){
o=e(this.handles[i],this.element)
;s=/sw|ne|nw|se|n|s/.test(i)?o.outerHeight():o.outerWidth()
;n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("")
;t.css(n,s);this._proportionallyResize()}
e(this.handles[i]).length}};this._renderAxis(this.element)
;this._handles=e(".ui-resizable-handle",this.element).disableSelection()
;this._handles.mouseover(function(){if(!r.resizing){
this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i))
;r.axis=n&&n[1]?n[1]:"se"}});if(a.autoHide){this._handles.hide()
;e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){
if(!a.disabled){e(this).removeClass("ui-resizable-autohide")
;r._handles.show()}}).mouseleave(function(){
if(!a.disabled&&!r.resizing){
e(this).addClass("ui-resizable-autohide");r._handles.hide()}})}
this._mouseInit()},_destroy:function(){this._mouseDestroy()
;var t,i=function(t){
e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};if(this.elementIsWrapper){i(this.element);t=this.element
;this.originalElement.css({position:t.css("position"),
width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),
left:t.css("left")}).insertAfter(t);t.remove()}
this.originalElement.css("resize",this.originalResizeStyle)
;i(this.originalElement);return this},_mouseCapture:function(t){
var i,o,n=!1
;for(i in this.handles)((o=e(this.handles[i])[0])===t.target||e.contains(o,t.target))&&(n=!0)
;return!this.options.disabled&&n},_mouseStart:function(t){
var i,o,n,s=this.options,r=this.element;this.resizing=!0
;this._renderProxy();i=this._num(this.helper.css("left"))
;o=this._num(this.helper.css("top"));if(s.containment){
i+=e(s.containment).scrollLeft()||0
;o+=e(s.containment).scrollTop()||0}
this.offset=this.helper.offset();this.position={left:i,top:o}
;this.size=this._helper?{width:this.helper.width(),
height:this.helper.height()}:{width:r.width(),height:r.height()}
;this.originalSize=this._helper?{width:r.outerWidth(),
height:r.outerHeight()}:{width:r.width(),height:r.height()}
;this.sizeDiff={width:r.outerWidth()-r.width(),
height:r.outerHeight()-r.height()};this.originalPosition={
left:i,top:o};this.originalMousePosition={left:t.pageX,
top:t.pageY}
;this.aspectRatio="number"==typeof s.aspectRatio?s.aspectRatio:this.originalSize.width/this.originalSize.height||1
;n=e(".ui-resizable-"+this.axis).css("cursor")
;e("body").css("cursor","auto"===n?this.axis+"-resize":n)
;r.addClass("ui-resizable-resizing");this._propagate("start",t)
;this.scrollParent=this.helper.scrollParent(!1)
;this.initScrollTop=this.scrollParent[0].scrollTop
;this.initScrollLeft=this.scrollParent[0].scrollLeft;return!0},
_mouseDrag:function(t){
var i,o,n=this.originalMousePosition,s=this.axis,r=t.pageX-n.left||0,a=t.pageY-n.top||0,l=this._change[s]
;if(this.initScrollTop!=undefined){var c=this.scrollParent[0]
;r=r+c.scrollLeft-this.initScrollLeft
;a=a+c.scrollTop-this.initScrollTop}this._updatePrevProperties()
;if(!l)return!1;i=l.apply(this,[t,r,a])
;this._updateVirtualBoundaries(t.shiftKey)
;(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t))
;i=this._respectSize(i,t);this._updateCache(i)
;this._propagate("resize",t);o=this._applyChanges()
;!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize()
;if(!e.isEmptyObject(o)){this._updatePrevProperties()
;this._trigger("resize",t,this.ui());this._applyChanges()}
return!1},_mouseStop:function(t){this.resizing=!1
;var i,o,n,s,r,a,l,c=this.options,d=this;if(this._helper){
n=(o=(i=this._proportionallyResizeElements).length&&/textarea/i.test(i[0].nodeName))&&this._hasScroll(i[0],"left")?0:d.sizeDiff.height
;s=o?0:d.sizeDiff.width;r={width:d.helper.width()-s,
height:d.helper.height()-n}
;a=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null
;l=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null
;c.animate||this.element.css(e.extend(r,{top:l,left:a}))
;d.helper.height(d.size.height);d.helper.width(d.size.width)
;this._helper&&!c.animate&&this._proportionallyResize()}
e("body").css("cursor","auto")
;this.element.removeClass("ui-resizable-resizing")
;this._propagate("stop",t);this._helper&&this.helper.remove()
;return!1},_updatePrevProperties:function(){this.prevPosition={
top:this.position.top,left:this.position.left};this.prevSize={
width:this.size.width,height:this.size.height}},
_applyChanges:function(){var e={}
;this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px")
;this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px")
;this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px")
;this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px")
;this.helper.css(e);return e},
_updateVirtualBoundaries:function(e){
var t,i,o,n,s,r=this.options;s={
minWidth:this._isNumber(r.minWidth)?r.minWidth:0,
maxWidth:this._isNumber(r.maxWidth)?r.maxWidth:Infinity,
minHeight:this._isNumber(r.minHeight)?r.minHeight:0,
maxHeight:this._isNumber(r.maxHeight)?r.maxHeight:Infinity}
;if(this._aspectRatio||e){t=s.minHeight*this.aspectRatio
;o=s.minWidth/this.aspectRatio;i=s.maxHeight*this.aspectRatio
;n=s.maxWidth/this.aspectRatio;t>s.minWidth&&(s.minWidth=t)
;o>s.minHeight&&(s.minHeight=o);i<s.maxWidth&&(s.maxWidth=i)
;n<s.maxHeight&&(s.maxHeight=n)}this._vBoundaries=s},
_updateCache:function(e){this.offset=this.helper.offset()
;this._isNumber(e.left)&&(this.position.left=e.left)
;this._isNumber(e.top)&&(this.position.top=e.top)
;this._isNumber(e.height)&&(this.size.height=e.height)
;this._isNumber(e.width)&&(this.size.width=e.width)},
_updateRatio:function(e){
var t=this.position,i=this.size,o=this.axis
;this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio)
;if("sw"===o){e.left=t.left+(i.width-e.width);e.top=null}
if("nw"===o){e.top=t.top+(i.height-e.height)
;e.left=t.left+(i.width-e.width)}return e},
_respectSize:function(e){
var t=this._vBoundaries,i=this.axis,o=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,n=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,s=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,r=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,a=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,c=/sw|nw|w/.test(i),d=/nw|ne|n/.test(i)
;s&&(e.width=t.minWidth);r&&(e.height=t.minHeight)
;o&&(e.width=t.maxWidth);n&&(e.height=t.maxHeight)
;s&&c&&(e.left=a-t.minWidth);o&&c&&(e.left=a-t.maxWidth)
;r&&d&&(e.top=l-t.minHeight);n&&d&&(e.top=l-t.maxHeight)
;e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null
;return e},_getPaddingPlusBorderDimensions:function(e){
for(var t=0,i=[],o=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],n=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];t<4;t++){
i[t]=parseInt(o[t],10)||0;i[t]+=parseInt(n[t],10)||0}return{
height:i[0]+i[2],width:i[1]+i[3]}},
_proportionallyResize:function(){
if(this._proportionallyResizeElements.length)for(var e,t=0,i=this.helper||this.element;t<this._proportionallyResizeElements.length;t++){
e=this._proportionallyResizeElements[t]
;this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e))
;e.css({height:i.height()-this.outerDimensions.height||0,
width:i.width()-this.outerDimensions.width||0})}},
_renderProxy:function(){var t=this.element,i=this.options
;this.elementOffset=t.offset();if(this._helper){
this.helper=this.helper||e("<div style='overflow:hidden;'></div>")
;this.helper.addClass(this._helper).css({
width:this.element.outerWidth()-1,
height:this.element.outerHeight()-1,position:"absolute",
left:this.elementOffset.left+"px",
top:this.elementOffset.top+"px",zIndex:++i.zIndex})
;this.helper.appendTo("body").disableSelection()
}else this.helper=this.element},_change:{e:function(e,t){return{
width:this.originalSize.width+t}},w:function(e,t){
var i=this.originalSize,o;return{
left:this.originalPosition.left+t,width:i.width-t}},
n:function(e,t,i){var o=this.originalSize,n;return{
top:this.originalPosition.top+i,height:o.height-i}},
s:function(e,t,i){return{height:this.originalSize.height+i}},
se:function(t,i,o){
return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,o]))
},sw:function(t,i,o){
return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,o]))
},ne:function(t,i,o){
return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,o]))
},nw:function(t,i,o){
return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,o]))
}},_propagate:function(t,i){
e.ui.plugin.call(this,t,[i,this.ui()])
;"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},
ui:function(){return{originalElement:this.originalElement,
element:this.element,helper:this.helper,position:this.position,
size:this.size,originalSize:this.originalSize,
originalPosition:this.originalPosition}}})
;e.ui.plugin.add("resizable","animate",{stop:function(t){
var i=e(this).resizable("instance"),o=i.options,n=i._proportionallyResizeElements,s=n.length&&/textarea/i.test(n[0].nodeName),r=s&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,a=s?0:i.sizeDiff.width,l={
width:i.size.width-a,height:i.size.height-r
},c=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,d=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null
;i.element.animate(e.extend(l,d&&c?{top:d,left:c}:{}),{
duration:o.animateDuration,easing:o.animateEasing,
step:function(){var o={
width:parseInt(i.element.css("width"),10),
height:parseInt(i.element.css("height"),10),
top:parseInt(i.element.css("top"),10),
left:parseInt(i.element.css("left"),10)}
;n&&n.length&&e(n[0]).css({width:o.width,height:o.height})
;i._updateCache(o);i._propagate("resize",t)}})}})
;e.ui.plugin.add("resizable","containment",{start:function(){
var t,i,o,n,s,r,a,l=e(this).resizable("instance"),c=l.options,d=l.element,p=c.containment,h=p instanceof e?p.get(0):/parent/.test(p)?d.parent().get(0):p
;if(h){l.containerElement=e(h)
;if(/document/.test(p)||p===document){l.containerOffset={left:0,
top:0};l.containerPosition={left:0,top:0};l.parentData={
element:e(document),left:0,top:0,width:e(document).width(),
height:e(document).height()||document.body.parentNode.scrollHeight
}}else{t=e(h);i=[]
;e(["Top","Right","Left","Bottom"]).each(function(e,o){
i[e]=l._num(t.css("padding"+o))});l.containerOffset=t.offset()
;l.containerPosition=t.position();l.containerSize={
height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]}
;o=l.containerOffset;n=l.containerSize.height
;s=l.containerSize.width
;r=l._hasScroll(h,"left")?h.scrollWidth:s
;a=l._hasScroll(h)?h.scrollHeight:n;l.parentData={element:h,
left:o.left,top:o.top,width:r,height:a}}}},resize:function(t){
var i,o,n,s,r=e(this).resizable("instance"),a=r.options,l=r.containerOffset,c=r.position,d=r._aspectRatio||t.shiftKey,p={
top:0,left:0},h=r.containerElement,u=!0
;h[0]!==document&&/static/.test(h.css("position"))&&(p=l)
;if(c.left<(r._helper?l.left:0)){
r.size.width=r.size.width+(r._helper?r.position.left-l.left:r.position.left-p.left)
;if(d){r.size.height=r.size.width/r.aspectRatio;u=!1}
r.position.left=a.helper?l.left:0}if(c.top<(r._helper?l.top:0)){
r.size.height=r.size.height+(r._helper?r.position.top-l.top:r.position.top)
;if(d){r.size.width=r.size.height*r.aspectRatio;u=!1}
r.position.top=r._helper?l.top:0}
n=r.containerElement.get(0)===r.element.parent().get(0)
;s=/relative|absolute/.test(r.containerElement.css("position"))
;if(n&&s){r.offset.left=r.parentData.left+r.position.left
;r.offset.top=r.parentData.top+r.position.top}else{
r.offset.left=r.element.offset().left
;r.offset.top=r.element.offset().top}
i=Math.abs(r.sizeDiff.width+(r._helper?r.offset.left-p.left:r.offset.left-l.left))
;o=Math.abs(r.sizeDiff.height+(r._helper?r.offset.top-p.top:r.offset.top-l.top))
;if(i+r.size.width>=r.parentData.width){
r.size.width=r.parentData.width-i;if(d){
r.size.height=r.size.width/r.aspectRatio;u=!1}}
if(o+r.size.height>=r.parentData.height){
r.size.height=r.parentData.height-o;if(d){
r.size.width=r.size.height*r.aspectRatio;u=!1}}if(!u){
r.position.left=r.prevPosition.left
;r.position.top=r.prevPosition.top;r.size.width=r.prevSize.width
;r.size.height=r.prevSize.height}},stop:function(){
var t=e(this).resizable("instance"),i=t.options,o=t.containerOffset,n=t.containerPosition,s=t.containerElement,r=e(t.helper),a=r.offset(),l=r.outerWidth()-t.sizeDiff.width,c=r.outerHeight()-t.sizeDiff.height
;t._helper&&!i.animate&&/relative/.test(s.css("position"))&&e(this).css({
left:a.left-n.left-o.left,width:l,height:c})
;t._helper&&!i.animate&&/static/.test(s.css("position"))&&e(this).css({
left:a.left-n.left-o.left,width:l,height:c})}})
;e.ui.plugin.add("resizable","alsoResize",{start:function(){
var t,i=e(this).resizable("instance").options,o=function(t){
e(t).each(function(){var t=e(this)
;t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),
height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),
top:parseInt(t.css("top"),10)})})}
;if("object"!=typeof i.alsoResize||i.alsoResize.parentNode)o(i.alsoResize);else if(i.alsoResize.length){
i.alsoResize=i.alsoResize[0];o(i.alsoResize)
}else e.each(i.alsoResize,function(e){o(e)})},
resize:function(t,i){
var o=e(this).resizable("instance"),n=o.options,s=o.originalSize,r=o.originalPosition,a={
height:o.size.height-s.height||0,width:o.size.width-s.width||0,
top:o.position.top-r.top||0,left:o.position.left-r.left||0
},l=function(t,o){e(t).each(function(){
var t=e(this),n=e(this).data("ui-resizable-alsoresize"),s={},r=o&&o.length?o:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"]
;e.each(r,function(e,t){var i=(n[t]||0)+(a[t]||0)
;i&&i>=0&&(s[t]=i||null)});t.css(s)})}
;"object"!=typeof n.alsoResize||n.alsoResize.nodeType?l(n.alsoResize):e.each(n.alsoResize,function(e,t){
l(e,t)})},stop:function(){
e(this).removeData("resizable-alsoresize")}})
;e.ui.plugin.add("resizable","ghost",{start:function(){
var t=e(this).resizable("instance"),i=t.options,o=t.size
;t.ghost=t.originalElement.clone();t.ghost.css({opacity:.25,
display:"block",position:"relative",height:o.height,
width:o.width,margin:0,left:0,top:0
}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:"")
;t.ghost.appendTo(t.helper)},resize:function(){
var t=e(this).resizable("instance");t.ghost&&t.ghost.css({
position:"relative",height:t.size.height,width:t.size.width})},
stop:function(){var t=e(this).resizable("instance")
;t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}
});e.ui.plugin.add("resizable","grid",{resize:function(){
var t,i=e(this).resizable("instance"),o=i.options,n=i.size,s=i.originalSize,r=i.originalPosition,a=i.axis,l="number"==typeof o.grid?[o.grid,o.grid]:o.grid,c=l[0]||1,d=l[1]||1,p=Math.round((n.width-s.width)/c)*c,h=Math.round((n.height-s.height)/d)*d,u=s.width+p,f=s.height+h,_=o.maxWidth&&o.maxWidth<u,m=o.maxHeight&&o.maxHeight<f,g=o.minWidth&&o.minWidth>u,v=o.minHeight&&o.minHeight>f
;o.grid=l;g&&(u+=c);v&&(f+=d);_&&(u-=c);m&&(f-=d)
;if(/^(se|s|e)$/.test(a)){i.size.width=u;i.size.height=f
}else if(/^(ne)$/.test(a)){i.size.width=u;i.size.height=f
;i.position.top=r.top-h}else if(/^(sw)$/.test(a)){i.size.width=u
;i.size.height=f;i.position.left=r.left-p}else{
(f-d<=0||u-c<=0)&&(t=i._getPaddingPlusBorderDimensions(this))
;if(f-d>0){i.size.height=f;i.position.top=r.top-h}else{
f=d-t.height;i.size.height=f;i.position.top=r.top+s.height-f}
if(u-c>0){i.size.width=u;i.position.left=r.left-p}else{
u=d-t.height;i.size.width=u;i.position.left=r.left+s.width-u}}}
});var f=e.ui.resizable,_=e.widget("ui.sortable",e.ui.mouse,{
version:"1.11.1",widgetEventPrefix:"sort",ready:!1,options:{
appendTo:"parent",axis:!1,connectWith:!1,containment:!1,
cursor:"auto",cursorAt:!1,dropOnEmpty:!0,
forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,
helper:"original",items:"> *",opacity:!1,placeholder:!1,
revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,
scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,
beforeStop:null,change:null,deactivate:null,out:null,over:null,
receive:null,remove:null,sort:null,start:null,stop:null,
update:null},_isOverAxis:function(e,t,i){return e>=t&&e<t+i},
_isFloating:function(e){
return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))
},_create:function(){var e=this.options;this.containerCache={}
;this.element.addClass("ui-sortable");this.refresh()
;this.floating=!!this.items.length&&("x"===e.axis||this._isFloating(this.items[0].item))
;this.offset=this.element.offset();this._mouseInit()
;this._setHandleClassName();this.ready=!0},
_setOption:function(e,t){this._super(e,t)
;"handle"===e&&this._setHandleClassName()},
_setHandleClassName:function(){
this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle")
;e.each(this.items,function(){
(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")
})},_destroy:function(){
this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle")
;this._mouseDestroy()
;for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item")
;return this},_mouseCapture:function(t,i){var o=null,n=!1,s=this
;if(this.reverting)return!1
;if(this.options.disabled||"static"===this.options.type)return!1
;this._refreshItems(t);e(t.target).parents().each(function(){
if(e.data(this,s.widgetName+"-item")===s){o=e(this);return!1}})
;e.data(t.target,s.widgetName+"-item")===s&&(o=e(t.target))
;if(!o)return!1;if(this.options.handle&&!i){
e(this.options.handle,o).find("*").addBack().each(function(){
this===t.target&&(n=!0)});if(!n)return!1}this.currentItem=o
;this._removeCurrentsFromItems();return!0},
_mouseStart:function(t,i,o){var n,s,r=this.options
;this.currentContainer=this;this.refreshPositions()
;this.helper=this._createHelper(t)
;this._cacheHelperProportions();this._cacheMargins()
;this.scrollParent=this.helper.scrollParent()
;this.offset=this.currentItem.offset();this.offset={
top:this.offset.top-this.margins.top,
left:this.offset.left-this.margins.left};e.extend(this.offset,{
click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top
},parent:this._getParentOffset(),
relative:this._getRelativeOffset()})
;this.helper.css("position","absolute")
;this.cssPosition=this.helper.css("position")
;this.originalPosition=this._generatePosition(t)
;this.originalPageX=t.pageX;this.originalPageY=t.pageY
;r.cursorAt&&this._adjustOffsetFromHelper(r.cursorAt)
;this.domPosition={prev:this.currentItem.prev()[0],
parent:this.currentItem.parent()[0]}
;this.helper[0]!==this.currentItem[0]&&this.currentItem.hide()
;this._createPlaceholder();r.containment&&this._setContainment()
;if(r.cursor&&"auto"!==r.cursor){s=this.document.find("body")
;this.storedCursor=s.css("cursor");s.css("cursor",r.cursor)
;this.storedStylesheet=e("<style>*{ cursor: "+r.cursor+" !important; }</style>").appendTo(s)
}if(r.opacity){
this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity"))
;this.helper.css("opacity",r.opacity)}if(r.zIndex){
this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex"))
;this.helper.css("zIndex",r.zIndex)}
this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset())
;this._trigger("start",t,this._uiHash())
;this._preserveHelperProportions||this._cacheHelperProportions()
;if(!o)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this))
;e.ui.ddmanager&&(e.ui.ddmanager.current=this)
;e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)
;this.dragging=!0;this.helper.addClass("ui-sortable-helper")
;this._mouseDrag(t);return!0},_mouseDrag:function(t){
var i,o,n,s,r=this.options,a=!1
;this.position=this._generatePosition(t)
;this.positionAbs=this._convertPositionTo("absolute")
;this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs)
;if(this.options.scroll){
if(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName){
this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<r.scrollSensitivity?this.scrollParent[0].scrollTop=a=this.scrollParent[0].scrollTop+r.scrollSpeed:t.pageY-this.overflowOffset.top<r.scrollSensitivity&&(this.scrollParent[0].scrollTop=a=this.scrollParent[0].scrollTop-r.scrollSpeed)
;this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<r.scrollSensitivity?this.scrollParent[0].scrollLeft=a=this.scrollParent[0].scrollLeft+r.scrollSpeed:t.pageX-this.overflowOffset.left<r.scrollSensitivity&&(this.scrollParent[0].scrollLeft=a=this.scrollParent[0].scrollLeft-r.scrollSpeed)
}else{
t.pageY-e(document).scrollTop()<r.scrollSensitivity?a=e(document).scrollTop(e(document).scrollTop()-r.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<r.scrollSensitivity&&(a=e(document).scrollTop(e(document).scrollTop()+r.scrollSpeed))
;t.pageX-e(document).scrollLeft()<r.scrollSensitivity?a=e(document).scrollLeft(e(document).scrollLeft()-r.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<r.scrollSensitivity&&(a=e(document).scrollLeft(e(document).scrollLeft()+r.scrollSpeed))
}
!1!==a&&e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)
}this.positionAbs=this._convertPositionTo("absolute")
;this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px")
;this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px")
;for(i=this.items.length-1;i>=0;i--){n=(o=this.items[i]).item[0]
;if((s=this._intersectsWithPointer(o))&&(o.instance===this.currentContainer&&!(n===this.currentItem[0]||this.placeholder[1===s?"next":"prev"]()[0]===n||e.contains(this.placeholder[0],n)||"semi-dynamic"===this.options.type&&e.contains(this.element[0],n)))){
this.direction=1===s?"down":"up"
;if("pointer"!==this.options.tolerance&&!this._intersectsWithSides(o))break
;this._rearrange(t,o);this._trigger("change",t,this._uiHash())
;break}}this._contactContainers(t)
;e.ui.ddmanager&&e.ui.ddmanager.drag(this,t)
;this._trigger("sort",t,this._uiHash())
;this.lastPositionAbs=this.positionAbs;return!1},
_mouseStop:function(t,i){if(t){
e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t)
;if(this.options.revert){
var o=this,n=this.placeholder.offset(),s=this.options.axis,r={}
;s&&"x"!==s||(r.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft))
;s&&"y"!==s||(r.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop))
;this.reverting=!0
;e(this.helper).animate(r,parseInt(this.options.revert,10)||500,function(){
o._clear(t)})}else this._clear(t,i);return!1}},
cancel:function(){if(this.dragging){this._mouseUp({target:null})
;"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show()
;for(var t=this.containers.length-1;t>=0;t--){
this.containers[t]._trigger("deactivate",null,this._uiHash(this))
;if(this.containers[t].containerCache.over){
this.containers[t]._trigger("out",null,this._uiHash(this))
;this.containers[t].containerCache.over=0}}}
if(this.placeholder){
this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0])
;"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove()
;e.extend(this,{helper:null,dragging:!1,reverting:!1,
_noFinalSort:null})
;this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)
}return this},serialize:function(t){
var i=this._getItemsAsjQuery(t&&t.connected),o=[];t=t||{}
;e(i).each(function(){
var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/)
;i&&o.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))
});!o.length&&t.key&&o.push(t.key+"=");return o.join("&")},
toArray:function(t){
var i=this._getItemsAsjQuery(t&&t.connected),o=[];t=t||{}
;i.each(function(){
o.push(e(t.item||this).attr(t.attribute||"id")||"")});return o},
_intersectsWith:function(e){
var t=this.positionAbs.left,i=t+this.helperProportions.width,o=this.positionAbs.top,n=o+this.helperProportions.height,s=e.left,r=s+e.width,a=e.top,l=a+e.height,c=this.offset.click.top,d=this.offset.click.left,p="x"===this.options.axis||o+c>a&&o+c<l,h="y"===this.options.axis||t+d>s&&t+d<r,u=p&&h
;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?u:s<t+this.helperProportions.width/2&&i-this.helperProportions.width/2<r&&a<o+this.helperProportions.height/2&&n-this.helperProportions.height/2<l
},_intersectsWithPointer:function(e){
var t="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),o=t&&i,n=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection()
;return!!o&&(this.floating?s&&"right"===s||"down"===n?2:1:n&&("down"===n?2:1))
},_intersectsWithSides:function(e){
var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),o=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection()
;return this.floating&&n?"right"===n&&i||"left"===n&&!i:o&&("down"===o&&t||"up"===o&&!t)
},_getDragVerticalDirection:function(){
var e=this.positionAbs.top-this.lastPositionAbs.top
;return 0!==e&&(e>0?"down":"up")},
_getDragHorizontalDirection:function(){
var e=this.positionAbs.left-this.lastPositionAbs.left
;return 0!==e&&(e>0?"right":"left")},refresh:function(e){
this._refreshItems(e);this._setHandleClassName()
;this.refreshPositions();return this},_connectWith:function(){
var e=this.options
;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith
},_getItemsAsjQuery:function(t){function i(){a.push(this)}
var o,n,s,r,a=[],l=[],c=this._connectWith()
;if(c&&t)for(o=c.length-1;o>=0;o--)for(n=(s=e(c[o])).length-1;n>=0;n--)(r=e.data(s[n],this.widgetFullName))&&r!==this&&!r.options.disabled&&l.push([e.isFunction(r.options.items)?r.options.items.call(r.element):e(r.options.items,r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),r])
;l.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{
options:this.options,item:this.currentItem
}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this])
;for(o=l.length-1;o>=0;o--)l[o][0].each(i);return e(a)},
_removeCurrentsFromItems:function(){
var t=this.currentItem.find(":data("+this.widgetName+"-item)")
;this.items=e.grep(this.items,function(e){
for(var i=0;i<t.length;i++)if(t[i]===e.item[0])return!1;return!0
})},_refreshItems:function(t){this.items=[]
;this.containers=[this]
;var i,o,n,s,r,a,l,c,d=this.items,p=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{
item:this.currentItem
}):e(this.options.items,this.element),this]],h=this._connectWith()
;if(h&&this.ready)for(i=h.length-1;i>=0;i--)for(o=(n=e(h[i])).length-1;o>=0;o--)if((s=e.data(n[o],this.widgetFullName))&&s!==this&&!s.options.disabled){
p.push([e.isFunction(s.options.items)?s.options.items.call(s.element[0],t,{
item:this.currentItem}):e(s.options.items,s.element),s])
;this.containers.push(s)}for(i=p.length-1;i>=0;i--){r=p[i][1]
;for(o=0,c=(a=p[i][0]).length;o<c;o++){
(l=e(a[o])).data(this.widgetName+"-item",r);d.push({item:l,
instance:r,width:0,height:0,left:0,top:0})}}},
refreshPositions:function(t){
this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset())
;var i,o,n,s
;for(i=this.items.length-1;i>=0;i--)if((o=this.items[i]).instance===this.currentContainer||!this.currentContainer||o.item[0]===this.currentItem[0]){
n=this.options.toleranceElement?e(this.options.toleranceElement,o.item):o.item
;if(!t){o.width=n.outerWidth();o.height=n.outerHeight()}
s=n.offset();o.left=s.left;o.top=s.top}
if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--){
s=this.containers[i].element.offset()
;this.containers[i].containerCache.left=s.left
;this.containers[i].containerCache.top=s.top
;this.containers[i].containerCache.width=this.containers[i].element.outerWidth()
;this.containers[i].containerCache.height=this.containers[i].element.outerHeight()
}return this},_createPlaceholder:function(t){
var i,o=(t=t||this).options
;if(!o.placeholder||o.placeholder.constructor===String){
i=o.placeholder;o.placeholder={element:function(){
var o=t.currentItem[0].nodeName.toLowerCase(),n=e("<"+o+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")
;"tr"===o?t.currentItem.children().each(function(){
e("<td>&#160;</td>",t.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(n)
}):"img"===o&&n.attr("src",t.currentItem.attr("src"))
;i||n.css("visibility","hidden");return n},update:function(e,n){
if(!i||o.forcePlaceholderSize){
n.height()||n.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10))
;n.width()||n.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10))
}}}}
t.placeholder=e(o.placeholder.element.call(t.element,t.currentItem))
;t.currentItem.after(t.placeholder)
;o.placeholder.update(t,t.placeholder)},
_contactContainers:function(t){
var i,o,n,s,r,a,l,c,d,p,h=null,u=null
;for(i=this.containers.length-1;i>=0;i--)if(!e.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){
if(h&&e.contains(this.containers[i].element[0],h.element[0]))continue
;h=this.containers[i];u=i
}else if(this.containers[i].containerCache.over){
this.containers[i]._trigger("out",t,this._uiHash(this))
;this.containers[i].containerCache.over=0}
if(h)if(1===this.containers.length){
if(!this.containers[u].containerCache.over){
this.containers[u]._trigger("over",t,this._uiHash(this))
;this.containers[u].containerCache.over=1}}else{n=1e4;s=null
;r=(d=h.floating||this._isFloating(this.currentItem))?"left":"top"
;a=d?"width":"height";p=d?"clientX":"clientY"
;for(o=this.items.length-1;o>=0;o--)if(e.contains(this.containers[u].element[0],this.items[o].item[0])&&this.items[o].item[0]!==this.currentItem[0]){
l=this.items[o].item.offset()[r];c=!1
;t[p]-l>this.items[o][a]/2&&(c=!0);if(Math.abs(t[p]-l)<n){
n=Math.abs(t[p]-l);s=this.items[o];this.direction=c?"up":"down"}
}if(!s&&!this.options.dropOnEmpty)return
;if(this.currentContainer===this.containers[u])return
;s?this._rearrange(t,s,null,!0):this._rearrange(t,null,this.containers[u].element,!0)
;this._trigger("change",t,this._uiHash())
;this.containers[u]._trigger("change",t,this._uiHash(this))
;this.currentContainer=this.containers[u]
;this.options.placeholder.update(this.currentContainer,this.placeholder)
;this.containers[u]._trigger("over",t,this._uiHash(this))
;this.containers[u].containerCache.over=1}},
_createHelper:function(t){
var i=this.options,o=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem
;o.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(o[0])
;o[0]===this.currentItem[0]&&(this._storedCSS={
width:this.currentItem[0].style.width,
height:this.currentItem[0].style.height,
position:this.currentItem.css("position"),
top:this.currentItem.css("top"),
left:this.currentItem.css("left")})
;o[0].style.width&&!i.forceHelperSize||o.width(this.currentItem.width())
;o[0].style.height&&!i.forceHelperSize||o.height(this.currentItem.height())
;return o},_adjustOffsetFromHelper:function(t){
"string"==typeof t&&(t=t.split(" "));e.isArray(t)&&(t={
left:+t[0],top:+t[1]||0})
;"left"in t&&(this.offset.click.left=t.left+this.margins.left)
;"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left)
;"top"in t&&(this.offset.click.top=t.top+this.margins.top)
;"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)
},_getParentOffset:function(){
this.offsetParent=this.helper.offsetParent()
;var t=this.offsetParent.offset()
;if("absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])){
t.left+=this.scrollParent.scrollLeft()
;t.top+=this.scrollParent.scrollTop()}
(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={
top:0,left:0});return{
top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),
left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)
}},_getRelativeOffset:function(){
if("relative"===this.cssPosition){
var e=this.currentItem.position();return{
top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),
left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()
}}return{top:0,left:0}},_cacheMargins:function(){this.margins={
left:parseInt(this.currentItem.css("marginLeft"),10)||0,
top:parseInt(this.currentItem.css("marginTop"),10)||0}},
_cacheHelperProportions:function(){this.helperProportions={
width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var t,i,o,n=this.options
;"parent"===n.containment&&(n.containment=this.helper[0].parentNode)
;"document"!==n.containment&&"window"!==n.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(e("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top])
;if(!/^(document|window|parent)$/.test(n.containment)){
t=e(n.containment)[0];i=e(n.containment).offset()
;o="hidden"!==e(t).css("overflow")
;this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(o?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(o?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(t,i){i||(i=this.position)
;var o="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(n[0].tagName)
;return{
top:i.top+this.offset.relative.top*o+this.offset.parent.top*o-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():s?0:n.scrollTop())*o,
left:i.left+this.offset.relative.left*o+this.offset.parent.left*o-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():s?0:n.scrollLeft())*o
}},_generatePosition:function(t){
var i,o,n=this.options,s=t.pageX,r=t.pageY,a="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=/(html|body)/i.test(a[0].tagName)
;"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset())
;if(this.originalPosition){if(this.containment){
t.pageX-this.offset.click.left<this.containment[0]&&(s=this.containment[0]+this.offset.click.left)
;t.pageY-this.offset.click.top<this.containment[1]&&(r=this.containment[1]+this.offset.click.top)
;t.pageX-this.offset.click.left>this.containment[2]&&(s=this.containment[2]+this.offset.click.left)
;t.pageY-this.offset.click.top>this.containment[3]&&(r=this.containment[3]+this.offset.click.top)
}if(n.grid){
i=this.originalPageY+Math.round((r-this.originalPageY)/n.grid[1])*n.grid[1]
;r=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i
;o=this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0]
;s=this.containment?o-this.offset.click.left>=this.containment[0]&&o-this.offset.click.left<=this.containment[2]?o:o-this.offset.click.left>=this.containment[0]?o-n.grid[0]:o+n.grid[0]:o
}}return{
top:r-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():l?0:a.scrollTop()),
left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():l?0:a.scrollLeft())
}},_rearrange:function(e,t,i,o){
i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling)
;this.counter=this.counter?++this.counter:1;var n=this.counter
;this._delay(function(){
n===this.counter&&this.refreshPositions(!o)})},
_clear:function(e,t){function i(e,t,i){return function(o){
i._trigger(e,o,t._uiHash(t))}}this.reverting=!1;var o,n=[]
;!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem)
;this._noFinalSort=null
;if(this.helper[0]===this.currentItem[0]){
for(o in this._storedCSS)"auto"!==this._storedCSS[o]&&"static"!==this._storedCSS[o]||(this._storedCSS[o]="")
;this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else this.currentItem.show()
;this.fromOutside&&!t&&n.push(function(e){
this._trigger("receive",e,this._uiHash(this.fromOutside))})
;!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||n.push(function(e){
this._trigger("update",e,this._uiHash())})
;if(this!==this.currentContainer&&!t){n.push(function(e){
this._trigger("remove",e,this._uiHash())});n.push(function(e){
return function(t){e._trigger("receive",t,this._uiHash(this))}
}.call(this,this.currentContainer));n.push(function(e){
return function(t){e._trigger("update",t,this._uiHash(this))}
}.call(this,this.currentContainer))}
for(o=this.containers.length-1;o>=0;o--){
t||n.push(i("deactivate",this,this.containers[o]))
;if(this.containers[o].containerCache.over){
n.push(i("out",this,this.containers[o]))
;this.containers[o].containerCache.over=0}}
if(this.storedCursor){
this.document.find("body").css("cursor",this.storedCursor)
;this.storedStylesheet.remove()}
this._storedOpacity&&this.helper.css("opacity",this._storedOpacity)
;this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex)
;this.dragging=!1;if(this.cancelHelperRemoval){if(!t){
this._trigger("beforeStop",e,this._uiHash())
;for(o=0;o<n.length;o++)n[o].call(this,e)
;this._trigger("stop",e,this._uiHash())}this.fromOutside=!1
;return!1}t||this._trigger("beforeStop",e,this._uiHash())
;this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0])
;this.helper[0]!==this.currentItem[0]&&this.helper.remove()
;this.helper=null;if(!t){
for(o=0;o<n.length;o++)n[o].call(this,e)
;this._trigger("stop",e,this._uiHash())}this.fromOutside=!1
;return!0},_trigger:function(){
!1===e.Widget.prototype._trigger.apply(this,arguments)&&this.cancel()
},_uiHash:function(t){var i=t||this;return{helper:i.helper,
placeholder:i.placeholder||e([]),position:i.position,
originalPosition:i.originalPosition,offset:i.positionAbs,
item:i.currentItem,sender:t?t.element:null}}})})
;var componentSearchBar={findUiType:function(){
return eval(this.cpt.component_type.class_name)},
isUiSearch:function(){
return"UI_Search"==this.cpt.component_type.class_name},
triggerSearch:function(e){
void 0!==e&&$("input",this.n.search).val(e).change()
;$(".ui_btn",this.n.search).click()},searchLoading:function(e){
this.search_loading+=e
;this.n.search.toggleClass("ui_search_loading",0!=this.search_loading)
},showSearchResult:function(type,value){var self=this
;this.n.search.find('input').trigger('blur');switch(type){
case"word":this.triggerSearch(value);break;case"category":
case"article":case"product":case"blog_category":
case"store_category":var p,eid=value[1]
;p=!this.isUiSearch()&&("category"==type&&(this.cat_ids?-1!=this.cat_ids.indexOf(eid):this.categories.include(eid))||"product"==type&&(1==this.cat_ids.length&&0==this.cat_ids[0]||this.cat_ids.find(function(e){
return 0!=e&&-1!=UI_Store.categories[e].products.indexOf(eid)
}))||"article"==type&&this.order.include(eid))?$.Deferred().resolve(v.getSelectedPage()):"editor"==v.mode?v.selectPageFromUrl(value[0]):v.selectPageFromUrl([value[0],"/"+value[2]])
;$.when(p).done(function(p){
"editor"==v.mode&&v.selectedPageFg.setCptUrl("/"+value[2])
;var cpt=p.getVisibleCpts().find(function(c){
return self.isUiSearch()?eval({article:"UI_Blog",
product:"UI_Store",faq:"UI_Faq",forum_topic:"UI_Forum",
store_category:"UI_Store",blog_category:"UI_Blog"
}[type]).cpts.include(c):self.findUiType().cpts.include(c)})
;cpt&&cpt.onDisplayed.then(function(){
self.isUiSearch()||$("input",cpt.ui.n.search).val($("input",self.n.search).val()).change()
;cpt.ui.n.suggestions_list.hide();self._setZ(!1);switch(type){
case"category":case"blog_category":case"store_category":
cpt.ui.selectCat(eid,!0);break;case"product":
cpt.ui.selectProd(eid);break;case"article":
cpt.ui.selectArticle(eid)}})});break;case"page":
v.selectPageFromUrl(value[0]);break;case"forum_topic":
v.selectPageFromUrl(value[0]).then(function(e){
var t=e.getVisibleCpts().find(function(e){
return"UI_Forum"==e.component_type.class_name})
;t.ui.displayPage({page:"posts",topic_id:value[1],page_no:1})
;v.scroll_to_component(t,{fast:!0})});break;case"faq":
v.selectPageFromUrl(value[0]).then(function(e){
UI_Faq.getCategories(!0,function(){var e=[]
;$.each(value[2].collect(function(e){return UI_Faq.categories[e]
}),function(t,i){e.push(i.id)})
;var t=v.selectedPageFg.getVisibleCpts().find_all(function(e){
return"UI_Faq"==e.component_type.class_name})
;$.when.apply($,t.collect(function(e){return e.onDisplayed
})).then(function(){var i=!1;t.each(function(t){
if(!i&&(t.ui.cat_ids.include(0)||t.ui.cat_ids.includeOne(e))){
i=!0;var o=$.Deferred()
;UI_Faq.categories_loaded?o=UI_Faq.categories_loaded:setTimeout(function(){
o.resolve()},2e3);o.then(function(){
t.ui._triggerSearch(value[3]).then(function(){
t.ui.all_questions.find("dt.uifaq_question:visible").trigger("click")
;v.scroll_to_component(t)})})}})})},null,!0)});break;case"file":
window.open(value[0].url.replace("/fs/","/dl/"))
;sigCtl.emit("UI_Download.download",value[0]);break
;case"search":
$(".ui_search_suggest",this.n.search).removeClass("ui_typing")
;window.UI_Blog&&this.findUiType()==UI_Blog?this.selectSearch(value,0):this.isUiSearch()?this.n.search.find('input').trigger('focus'):this.cpt.getPage().setCptUrl("/s0s0/"+encodeURI(value),value)
}},bindSearch:function(){var e=this,t=this.findUiType()
;this.search_loading=0;t.suggestions=t.suggestions||{}
;var i=this.n.search;$(".ui_btn .fonticon",i).setIcon({
service:"Google-material-icons",name:"search"})
;$(".ui_close_search .fonticon",i).html($.fn.fonticon("close"))
;$(".ui_close_search",this.n.search).click(function(){
e.triggerSearch("")});var o="",n="",s=function(n){
var n=n||{},s=$(".ui_search_suggest",i)
;if(!i.data('config').fast_display){
s.removeClass("ui_result_available");$(">div>div",s).remove()}
n.search!=o&&(i.data('config').display_empty||$(">div",s).hide())
;if(0!=o.length){
var r=n.results?n:t.custom_cache?t.custom_cache(o,e):t.suggestions[o]
;if(r)e.displayed_search=n?n.search:o;else if(i.data('config').disable_cache_suggestions)r={
results:[]};else{for(var a=o;!r&&a.length>1;){
a=a.substr(0,a.length-1)
;r=t.custom_cache?t.custom_cache(a,e):t.suggestions[a]}
if(!r)return;e.displayed_search=null}
s.find('.ui_suggest_no_results').remove()
;e.n.search_counter&&e.n.search_counter.html("")
;if(r.results.length>0){s.addClass("ui_result_available")
;e.n.suggestions_list.css('display',"");e._setZ(!0)
}else if(e.n.search_counter){e.n.suggestions_list.hide()
;e.n.search_counter.html("Pas de résultat trouvé");e._setZ(!1)}
r.results.each(function(t){
var o=s.find(".ui_suggest_"+t[1]).removeClass('to_hide')
;i.data('config').fast_display&&o.find('div').not('.ui_suggest_word, .ui_suggest_more').remove()
;var n=o.show().find('div.ui_suggest_word, div.ui_suggest_more'),r
;(r=n.length>0?$("<div>").insertBefore(n.first()):$("<div>").appendTo(o)).append($('<span class="ui27_lab_result">').text(t[0]))
;switch(t[1]){case"article":
r.prepend($("<img>").attr("src",cdn_url(t[3][0])));break
;case"product":var a=$("<img>").attr("src",cdn_url(t[3][0]))
;if(e.isUiSearch()){var l=r.html()
;r.html(a.add($("<div>").html($(l).add($('<div class="ui27_price">').html(t[3][1])))))
}else r.prepend(a)}r.on('click',function(){
e.showSearchResult(t[1],t[2])})})
;r.more&&i.data('config')&&i.data('config').show_more_only&&Object.keys(r.more).find_all(function(e){
return i.data('config').show_more_only.include(e)
}).each(function(e){function t(t){
var i=r.results.find(function(t){return t[1]==e})
;i&&v.selectPageFromUrl(i[2][0]).then(function(){
$.when.apply($,v.selectedPageFg.getVisibleCpts().collect(function(e){
return e.onDisplayed})).then(function(){
var i=v.selectedPageFg.getCpts().find(function(t){
return t.component_type.class_name=={article:"UI_Blog",
product:"UI_Store"}[e]})
;i.ui.showSearchResult&&i.ui.showSearchResult("search",t)})})}
i.data('config').fast_display&&$('.ui_suggest_'+e,i).find('.ui_suggest_word, .ui_suggest_more').remove()
;r.more[e].each(function(o){
$('.ui_suggest_'+e,i).append($('<div class="ui_suggest_word">').html(sprintf('Plus de résultats pour \"%1$s\"',"<b>"+o[0]+"</b>")).on('click',function(){
t(o[0])}))});var n=$('.ui_suggest_'+e,i).find('h3')
;n.find(".ui_suggest_more").remove()
;n.append($('<span class="ui_suggest_more fonticon">').html($.fn.fonticon("add2")).on('click',function(){
t(o)}))});o.split(/\s+/).sort(function(e,t){return e-t
}).each(function(e){
e.length>0&&$(">div>div:not(.ui_suggest_word)",s).highlight(e)})
;e._resizeCpt&&e._resizeCpt()
;e._searchBarSuggestionsDisplayed&&e._searchBarSuggestionsDisplayed()
}};$("input",i).on('focus',function(){
var t=e.n.suggestions_list.find('span').length>0
;e.n.suggestions_list.css("display",t?"":"none")
;clearTimeout(this.blur_timeout);e._setZ(t)})
;$("input",i).on('blur',function(){
clearTimeout(this.blur_timeout)
;this.blur_timeout=setTimeout(function(){
e.n.suggestions_list.hide();e.n.search_counter.hide()
;e._setZ(!1)},200)})
;$("input",i).on($.change_events,function(r){
27==r.which&&$(this).val("")
;o=$(this).val().remove_accents().toLowerCase()
;e.n.search_counter.show()
;var a=e.n.suggestions_list.hasClass('ui_result_available')&&e.n.suggestions_list.is(':visible')
;if(13!=r.which){if([37,38,39,40].include(r.which)){if(a){var l
;if((l=e.n.suggestions_list.find('>div:visible >div.selected')).length>0){
l.removeClass('selected')
;if(40==r.which&&1==l.next().length||38==r.which&&1==l.prev('div').length)40==r.which?l.next().addClass('selected'):l.prev().addClass('selected');else switch(r.which){
case 37:case 38:
var c=l.parent().prevAll(':visible').filter(':first')
;1!=c.length&&(c=l.parent().nextAll(':visible').filter(':last'))
;c.find(37==r.which?'div:first':'div:last').addClass('selected')
;break;case 39:case 40:
var d=l.parent().nextAll(':visible').filter(':first')
;1!=d.length&&(d=l.parent().prevAll(':visible').filter(':last'))
;d.find('div:first').addClass('selected')}
}else e.n.suggestions_list.find('>div:visible >div').filter([37,38].include(r.which)?':last':':first').addClass('selected')
}}else if(n!=o){$(".ui_search_suggest",i).addClass("ui_typing")
;n=o;var p=o
;if((t.custom_cache?!t.custom_cache(p,e):!t.suggestions[p])&&p.length>0){
e.searchLoading(1);var h=[]
;e.custom_suggestions_call?h=e.custom_suggestions_call(p):h.push(e.cpt.ask({
request:"search_suggest",query:p,version_id:v.id,
all:"editor"==v.mode},function(e){return e}).then(function(i){
if(t.custom_cache&&!t.custom_cache(p,e)||!t.suggestions[p])t.custom_cache?t.custom_cache(p,e,i):t.suggestions[p]=i;else if(t.custom_cache){
var o=t.custom_cache(p,e)
;t.custom_cache(p,e,o.results.concat(i.results))
;i.more&&$.extend(o.more,i.more)}else{
t.suggestions[p].results=t.suggestions[p].results.concat(i.results)
;i.more&&$.extend(t.suggestions[p].more,i.more)}return i}))
;if(i.data('config').fast_display){
e.n.suggestions_list.find("> div").addClass('to_hide')
;h.each(function(e){e.then(function(e){s(e)})})}
$.when.apply($,h).then(function(t){
i.data('config').fast_display?e.n.suggestions_list.find('> div.to_hide').hide().removeClass('to_hide'):p==t.search&&s()
},function(e){statusController.message(e,"error")
}).always(function(){e.searchLoading(-1)})}s()}}else if(a){var l
;1==(l=e.n.suggestions_list.find('>div:visible >div.selected')).length?l.trigger('click'):e.triggerSearch()
}});$(".ui_btn",i).click(function(){
e.showSearchResult("search",o)})},_setZ:function(e){
if(this.isUiSearch()){this.ori_z=this.cpt.Z_with_offset()
;this.cpt.node.css("z-index",e?99999:this.ori_z)}else{
var t=this.cpt.node.find(".ui_search_suggest")
;this.ori_z=t.zIndex();t.css("z-index",e?99999:this.ori_z)}}
},componentGdpr={gdpr:{context_count:0,in_eu:function(){
return window.in_eu},checkboxes:[],nodes:null},
getGdprConfig:function(e){var t={enabled:!1,text:null,
checkbox:null};switch(e||this.cpt.component_type.class_name){
case"UI_Store":return site.store_gdpr||t;case"UI_Member":
return v.member_config.gdpr||t;default:return{
enabled:this.cpt.data.gdpr,text:this.cpt.data.gdpr_text,
checkbox:this.cpt.data.gdpr_checkbox}}},
initGdpr:function(e,t,i){var o=this.getGdprConfig(e)
;this.gdpr.nodes=(t||this.cpt.node).find('.component_gdpr_container')
;this.gdpr.in_eu()&&o.enabled&&o.text&&o.text.length>0&&this.displayGdpr(i||this.n.gdpr,e)
},updateGdpr:function(e,t,i){var o=this.getGdprConfig(e)
;if(blockSelector.selected_blocks.length<=1){
o.enabled||this.gdpr.nodes.empty()
;this.gdpr.nodes.removeClass('error');this.initGdpr(e,t,i)
;this.cpt.propertyNode.find('.gdpr_text, .gdpr_checkbox').toggle(o.enabled)
;this.component.uiCall('onResizeStop')}},
findGdprCheckbox:function(e){
return e.find('input[name=gdpr_checkbox]')},
findGdprNode:function(e){
return this.findGdprCheckbox(e).parents('.component_gdpr_container')
},checkedGdpr:function(e){
return this.findGdprCheckbox(e).prop('checked')},
errorGdpr:function(e){this.findGdprNode(e).addClass('error')},
testFormGdpr:function(e,t){var i=this.getGdprConfig(t)
;if(this.gdpr.in_eu()&&i.enabled&&i.checkbox&&i.text.length>0){
this.findGdprNode(e).removeClass('error')
;return!!this.checkedGdpr(e)||this.errorGdpr(e)}return!0},
getGdpr:function(e){
return(e.hasClass('component_gdpr_container')?e:e.find('.component_gdpr_container')).data('gdpr')
},displayGdpr:function(e,t){var i=this;e.each(function(e,o){
$(o).empty()
;var n=i.getGdprConfig(t),s=$('<div>'),r=$('<label for="gdpr_checkbox_'+i.gdpr.context_count+'">').html(n.text)
;if(n.checkbox){
var a=$('<input type="checkbox" name="gdpr_checkbox" id="gdpr_checkbox_'+i.gdpr.context_count+'"/>')
;i.gdpr.checkboxes.push(a)
;r.append('<span class="require_info">*</span>');r.prepend(a)}
$(o).data('gdpr',{text:n.text,checkbox:n.checkbox||!1})
;$(o).append(r);i.gdpr.context_count++})}},Cache=Class.create()
;Cache.prototype={initialize:function(){this.cache={}},
compute_default:function(){return null},get:function(e,t){
var i=this.cache[e]||(this.cache[e]=(t||this.compute_default)())
;if(i&&i.done){var o=this;i.done(function(t){o.cache[e]=t})}
return i}};UI_Store={cache_version:1,init:function(){var e=this
;sigCtl.connect("Theme.changed",function(){
!$(".accept_bg").length&&UI_Store.cpts.collect(function(e){
return e.data.style
}).include("m")&&UI_Store.cpts.each(function(e){
e.ui._setProdListStyle()})})
;sigCtl.connect("Member.connection_state_changed",function(){
if(!UI_Store.order_in_progress)if(Object.values(UI_Store.products).find(function(e){
return e.custom_prices&&e.custom_prices.find(function(e){
return"any"!=e.group_id})})){
console.log("Reloading website to update custom prices for the new connected member")
;$.log("viewer_reload custom_price update after member connect").then(function(){
prompt("Si vous b\xe9n\xe9ficiez de r\xe9ductions sp\xe9cifiques, vous devez recharger le site pour qu'elles soient appliqu\xe9es.\nVoulez-vous recharger le site maintenant ?")&&location.reload()
})}else if(e.cpts[0]){e.load_categories[e.cpts[0].id]=null
;e.getCategories(e.cpts[0])}})},cart:{items:{},num:0,price:0,
coupons:[],discount_codes:[],discounts:[],options:{},
custom_shipping_params:{},cart_id:null,
reservation_expires_at:null,reservation_expired:!1},
generateCartId:function(){function e(){
return Math.floor(65536*(1+Math.random())).toString(16).substring(1)
}return e()+e()+'-'+e()+'-'+e()+'-'+e()+'-'+e()+e()+e()},
conf:{},cpts:[],categories:{},products:{},load_categories:{},
thumb_size:110,cache:new Cache,preset_data:{
default_presets:["default_1"],default_preset_index:1,
css_style:{},prefix:"uistore_preset_"},
getDefaultOptions:function(){var e=!1,t={};return t={}},
updatePreset:function(){$.each(UI_Store.cpts,function(e,t){
parseInt(t.data.preset)>UI_Store.preset_data.default_presets.length&&!presetController.find(t.component_type_id,null,t.data.preset)&&($("#design_blocks_wrapper").hasClass('active')&&blockSelector.isSelected(t)?historyController.offRecords(function(){
$(".ui_store_styles section[data-cssid="+UI_Store.preset_data.default_preset_index+"] .rad").prop("checked",!0).click()
}):historyController.offRecords(function(){
t.setData("preset",UI_Store.preset_data.default_preset_index)}))
;t.ui.applyPreset()})},onPropertyPresetChanged:function(e){var e
;(e=e||[]).push("preset_properties");this.cpts.each(function(t){
t.ui.onPropertyChanged(e)})},cptServer:function(){
var e=this.cpts.find(function(e){return e.idserver})
;"undefined"==typeof UI_Cart||e||(e=UI_Cart.cpts[0]);return e},
findCptServer:function(){var e=this
;return $.post("/json/cpt_server/"+v.site_id,{type:"UI_Store",
version_id:v.id}).then(function(t){e.cpt_server=JSON_.parse(t)
;0==e.cpt_server.length&&(e.cpt_server=null)})},
getPaymentConf:function(e){var t=this;this.cptServer().ask({
request:"get_conf",
site_package:"editor"==v.mode?SitePackage.order[SitePackage.order.length-1]:v.site_package
},function(i){t.conf=i;e&&e.call()},function(e){
dbg.error("Impossible to get the payment conf.\n"+e.join("\n"))
},null,this.cpts[0]&&this.cpts[0].idserver?null:this.cpt_server)
},update_nbr_products:function(e){e&&(this.nbr_products=e)
;$(".uis_limit_nbr_product").toggle(this.nbr_products>=v.features.uis_nbr_products)
},getCategories:function(e){
var t=$.Deferred(),i=this.cptServer()
;if(!i&&e.component_type_id!=ComponentType.getType('UI_Store').id&&!this.cpt_server){
t.reject();return t}i=i||e
;this.load_categories[e.id]=this.load_categories[e.id]||i.ask({
request:"get_categories",all:"editor"==v.mode,
site_package:"editor"==v.mode?SitePackage.order[SitePackage.order.length-1]:v.site_package,
uis_shipping_limited:v.features.uis_shipping_limited&&"editor"!=v.mode,
site:v.site_id
},null,null,null,i.component_type_id==ComponentType.getType('UI_Store').id?null:this.cpt_server)
;var o=this;this.load_categories[e.id].then(function(e){
e.conf&&(o.conf=e.conf)
;e.current_member&&(o.current_member=e.current_member)
;o.member_groups=e.member_groups
;o.discount_feature_active=("editor"==v.mode||v.features.uis_coupons)&&e.coupon
;o.nopid=e.nopid;o.trackers=e.trackers;o.cb_text=e.cb_text
;UI_Store.update_nbr_products(e.nbr_products)
;o.update_category_list(e.categories);t.resolve(e.options)
;sigCtl.emit("UI_Store.updateCatListGui")},function(e){
dbg.error("Impossible to get the category list.\n"+e.join("\n"))
});return t},get_all_specific_category:function(e,t,i){
var o=$.Deferred(),n=e.sort(function(e,t){return e>t}).join('-')
;if(UI_Store.categories[n]&&!i)return o.resolve(UI_Store.categories[n])
;this.cptServer().ask({request:"all_category",ids:e,
site_package:"editor"==v.mode?SitePackage.order[SitePackage.order.length-1]:v.site_package,
site:v.site_id,all:"editor"==v.mode},function(e){
UI_Store.categories[n]=e.category;o.resolve(e.category);if(t){
UI_Store.load_categories[t].then(function(t){
t.categories[n]=e.category});var i=UI_Store.categories[n].stores
;i.include(t)||i.push(t)}},function(e){
dbg.error("Impossible to get all specific category.\n"+e.join("\n")+"\n key:"+n)
});return o},getProducts:function(e){var t=this
;return t.cptServer().ask({request:"get_products",product_ids:e,
offset_zone:(new Date).getTimezoneOffset(),all:"editor"==v.mode
},function(i){var o=e.map(function(e){return parseInt(e)
}).filter(function(e){return i.products.map(function(e){
return parseInt(e.id)}).indexOf(e)<0})
;o.length>0&&o.forEach(function(e){delete UI_Store.cart.items[e]
});t.update_product_list(i.products,!0)},function(e){
dbg.error("Impossible to get the products.\n"+e.join("\n"))
},null,this.cpts[0]&&this.cpts[0].idserver?null:this.cpt_server)
},getProduct:function(e,t){var i=this;return i.cptServer().ask({
request:"get_product",product_id:e,
custom_shipping_params:UI_Store.cart.custom_shipping_params,
shipping_infos:("editor"==v.mode||v.features.uis_shipping)&&i.conf.shipping,
uis_shipping_limited:v.features.uis_shipping_limited&&"editor"!=v.mode,
all:"editor"==v.mode},function(o){i.products[e].desc=o.desc
;i.products[e].shipping_infos=o.shipping_infos
;t&&t.call(this,o.desc)},function(e){
dbg.error("Impossible to get the product description.\n"+e.join("\n"))
},null,this.cpts[0]&&this.cpts[0].idserver?null:this.cpt_server)
},searchProducts:function(e){var t=this
;return this.cptServer().ask({request:"search_query",query:e,
version_id:v.id},function(e){t.getProducts(e.products)})},
update_category_list:function(e,t){
this.categories=e.to_h(t?this.products:null)},
update_product_list:function(e,t){this.checkCartItems(e)
;this.products=e.to_h(t?this.products:null)},
add_product:function(e){this.products[e.id]=e
;this.categories[0].products=this.categories[0].products.insertAt(e.id,e.all[0])
;this.categories[0].products_by_price=this.categories[0].products_by_price.insertAt(e.id,e.all[1])
;var t=this;for(var i in this.categories){
var o=this.categories[i];if(0!=i){o.products.removeAll(e.id)
;o.products_by_price.removeAll(e.id)}}
e.category_ids.each(function(i){var o=t.categories[i[0]];if(o){
o.products=o.products.insertAt(e.id,i[1])
;o.products_by_price=o.products_by_price.insertAt(e.id,i[2])}})
;delete this.products[e.id].all
;this.products[e.id].category_ids=this.products[e.id].category_ids.find_all(function(e){
return null!=e[1]&&"string"!=typeof e[0]}).collect(function(e){
return e[0]})},del_product:function(e){
delete this.products[e.id]
;this.categories[0].products.removeAll(e.id)
;this.categories[0].products_by_price.removeAll(e.id);var t=this
;for(var i in this.categories){var o=this.categories[i]
;o.products.removeAll(e.id);o.products_by_price.removeAll(e.id)}
},addDiscountCode:function(e){this.cart.discount_codes.push(e)
;UI_Store.updateCartHtml()},cleanCartOptions:function(){
for(var e in this.cart.options)null==this.conf.options.find(function(t){
return t.name==e})&&delete this.cart.options[e]},
checkOptions:function(e,t,i,o){
if("cart"==e&&"editor"!=v.mode&&!v.features.uis_cart_options)return!0
;var n=!0;$("input, textarea",t).each(function(){input=$(this)
;var e=i.find(function(e){return e.name==input.attr("name")})
;input.removeClass("uis_options_error").parent().find(".uis_options_error_message").remove()
;var t=input.val()
;if((o||!input.attr("firstTime"))&&(t.length<e[">"]||t.length>e["<"])){
input.addClass("uis_options_error").parent().append("<div class='uis_options_error_message'>"+sprintf("Cette option doit comporter de %1$d à %2$d caractères.",e[">"],e["<"])+"</div>")
;n=!1}});$("select",t).each(function(e,t){var i=$(t)
;i.removeClass("uis_options_error").parent().parent().find(".uis_options_error_message").remove()
;var s=i.val()
;if((o||!i.attr("firstTime"))&&"uis_no_select"==s){
i.addClass("uis_options_error").parent().parent().append("<div class='uis_options_error_message'>Veuillez choisir une option.</div>")
;n=!1}});return n},checkCartItems:function(product_list){
var self=this,product_missing=[],errors=[]
;$.each(this.cart.items,function(e,t){var i
;(product_list?product_list.find(function(t){return t.id==e
}):UI_Store.products[e])||product_missing.push(e)})
;if(product_missing.length>0)return product_missing
;$.each(this.cart.items,function(prod_id,option_amount){
var prod=product_list?product_list.find(function(e){
return e.id==prod_id
}):UI_Store.products[prod_id],all_option_invalid=!0,items_with_same_stock_key_in_cart={}
;$.each(option_amount,function(option_key,amount){
var options,option_valid=!0;options=eval(option_key)
;var new_option_key=[],stock_key=[]
;if(null!=options&&options.length==prod.opts.length){
options.each(function(e){var t=e[0],i=e[1];if(option_valid){
var o=prod.opts.find_index(function(e){if(e.name==t){
if(e.options==undefined){var o
;return!(i.length<e[">"]||i.length>e["<"])}var n=!1,s=!1
;$.each(e.options,function(t){if(i==t){n=!0;s=e.options[t].s}})
;stock_key.push(s?i:"|");return n}return!1})
;0==prod.opts.length||o||0==o?new_option_key[o]=e:option_valid=!1
}});if(option_valid){
var new_option_key_s=JSON_.stringify(new_option_key)
;if(new_option_key_s!=option_key){
self.cart.items[prod_id][new_option_key_s]=self.cart.items[prod_id][option_key]
;delete self.cart.items[prod_id][option_key]
;options=new_option_key;option_key=new_option_key_s}
stock_key_str=JSON_.stringify(stock_key)
;items_with_same_stock_key_in_cart[stock_key_str]=items_with_same_stock_key_in_cart[stock_key_str]||0
;var ordered_quantity=self.cart.items[prod_id][option_key],items_in_stock=Math.min(prod.max,prod.stocks[stock_key_str]||0==prod.stocks[stock_key_str]?prod.stocks[stock_key_str]:prod.max),adjusted_quantity=Math.min(ordered_quantity,items_in_stock-items_with_same_stock_key_in_cart[stock_key_str])
;ordered_quantity>adjusted_quantity&&errors.push({product:prod,
ordered_quantity:ordered_quantity,
adjusted_quantity:adjusted_quantity,
items_in_stock:items_in_stock,stock_key:stock_key,
option_key:option_key})
;self.cart.items[prod_id][option_key]=adjusted_quantity
;items_with_same_stock_key_in_cart[stock_key_str]+=adjusted_quantity
;self.cart.items[prod_id][option_key]<0&&(option_valid=!1)}
}else option_valid=!1;all_option_invalid&=!option_valid
;option_valid||delete self.cart.items[prod_id][option_key]})
;all_option_invalid&&delete self.cart.items[prod_id]})
;if(errors.length>0){UI_Store.saveCookie()
;var message="Attention : Certaines quantités de produits ont été ajustées pour correspondre au stock actuel :"
;$.each(errors,function(e,t){var i=t.stock_key.join(" / ")
;message+="\n\n"+(i?sprintf("- %1$s de type %2$s : nouvelle quantité ajustée à %3$s car il ne reste que %4$s articles en stock et vous les avez déjà tous ajoutés à votre panier.",t.product.name,i,t.adjusted_quantity,t.items_in_stock):sprintf("- %1$s : nouvelle quantité ajustée à %2$s car il n'y a que %3$s articles en stock et vous les avez tous ajoutés à votre panier.",t.product.name,t.adjusted_quantity,t.items_in_stock))
});alert(message)}return[]},option2select:function(e,t,i,o){
var n=$("<div class=uis_option_select><div class='select_style'><span class=uis_option_title></span></div></div>"),s=$("<select "+(t==undefined?"firstTime=1 ":"")+" style='width:100%'>").attr("name",e.name)
;s.appendTo($(".select_style",n));var r=[]
;for(var a in e.options){var l=jQuery.extend({},e.options[a])
;l.name=a;r.push(l)}r=r.sort(function(e,t){return e.n-t.n})
;e.label&&$("<option value='uis_no_select' class='label'>").html("- "+e.label+" -").appendTo(s)
;for(var c=0;c<r.length;c++){var a;(a=r[c]).p=parseInt(a.p)
;var d=$("<option>").val(a.name).html(a.name+(a.p>0&&"cart"==i?" ("+UI_Store.show_price(a.p/100)+")":"")).appendTo(s)
;a.s&&d.attr("data-managed","true");if(!t&&!e.label||t==a.name){
t=a.name;d.attr("selected",'selected')}}
if("buttons"==e.display_style){$(".select_style",n).hide()
;var p=$("<div class=uis_option_buttons><div><span class=uis_option_title></span><span class=uis_selected_option_value></span></div></div>").appendTo(n)
;r.each(function(e){
var t=e.imgs?$("<div class='uis_option_image uis_option_button'>").attr("title",e.name.html_decode()):$("<button class=uis_option_button>").html(e.name)
;e.imgs&&t.setImage(e.imgs[0],50,50)
;t.data("option-value",e.name);var r=function(r,a){
t.parent().find(".selected").removeClass("selected")
;t.addClass("selected");s.val(e.name);s.change()
;n.find(".uis_selected_option_value").html(e.name)
;if("cart"!=i&&!a){
UI_Store.setImage($(".uis_img:visible"),e.imgs?e.imgs.concat(o.img):o.img,null,!0,$(".uis_imgs:visible > div"))
;UI_Store._setZoomProduct($(".uis_img").find("img"),e.imgs?e.imgs.concat(o.img):o.img)
;if(deviceController.device.match(/mobile/)&&e.imgs)if(1==e.imgs.length){
img=imgs[0]
;window.open(cdnurl(bestImgSrc(img,img.width,img.height)),"img_fullscreen")
}else tb_show_viewer(e.name,0,e.imgs,!1)}}
;t.click(r).data("select_option",r);p.append(t)})
;null==e.label?$(".uis_option_button:first",n).data("select_option")(null,!0):n.find(".uis_selected_option_value").html(e.label)
}"cart"!=i&&s.change(function(){var e=r.find(function(e){
return e.name==s.val()})
;UI_Store.setImage($(".uis_img:visible"),e.imgs?e.imgs.concat(o.img):o.img,null,!0,$(".uis_imgs:visible > div"))
;UI_Store._setZoomProduct($(".uis_img").find("img"),e.imgs?e.imgs.concat(o.img):o.img)
;deviceController.device.match(/mobile/)&&e.imgs&&tb_show_viewer(e.name,0,e.imgs,!1)
})
;$(".uis_option_title",n).html(e.name.match(/^-h-\d+/)?"":sprintf("%s : ",e.name))
;return n},option2input:function(e,t){var i=e["<"]>25
;t&&t.substr(0,e["<"])
;var o=$("<div class=uis_option_input><span class=uis_option_title></span></div>")
;if(i){$("<br>").appendTo(o)
;var n=$("<textarea class='site_textbox' maxlength='"+e["<"]+"' style='resize:none;width:100%' rows="+Math.min(Math.floor(e["<"]/25-1),4)+">").attr("name",e.name)
}else var n=$("<input class='site_textbox' type=text maxlength='"+e["<"]+"'>").attr("name",e.name)
;n.val(t);n.appendTo(o);t==undefined&&n.attr("firstTime","1")
;$(".uis_option_title",o).html(sprintf("%s : ",e.name))
;return o},options2html:function(e){var t=this
;return 0==e.length?"":1==e.length?this.option2html(e[0]):"<ul><li>"+$.map(e,function(e){
return t.option2html(e)}).join("<li>")+"</ul>"},
option2html:function(e){
return(e[0].match(/^-h-\d+/)?"":"<b>"+e[0]+":</b> ")+e[1]},
catjoin:function(e){var t="",i=[]
;for(var o in UI_Store.categories){var n=UI_Store.categories[o]
;n.virtual||i.push(n)}i.sort(function(e,t){
return e.order-t.order});i.each(function(i){t+=e.call(i,o)})
;return t},addCpt:function(e){this.cpts.push(e)
;!this.cpts[0].idserver&&e.idserver&&this.cpts.reverse()},
remCpt:function(e){
this.cpt_server&&this.cpt_server[0]==e.idserver&&(this.cpt_server=null)
;this.cpts.remove(e);sigCtl.emit("UI_Store.removed",e)},
setImage:function(e,t,i,o,n,s){var r=this.cpts[0],a=this,l
;if(r){
e.closest(".UI_Store").length>0&&e.closest(".UI_Store").data("cpt")&&(r=e.closest(".UI_Store").data("cpt"))
;l=(r.data.protect||v.page_bg.security.content_protection)&&"editor"!=v.mode
}else l=!1;var c=t[0];i||(i=[e.width(),null])
;c&&e.setImage(c,i[0],i[1],$.extend({protect:l},s))
;"viewer"==v.mode&&o&&e.unbind("click").click(function(){
tb_show(FileDescription.get(t),0,t,l)});if(n){
n.hide().unbind("click").parent().hide()
;if(t.length>1)for(var d=t.length>3?1:0,p=d;p<=n.length&&p<t.length;p++){
var h=$(n[p-d]),u=200
;h.setImage(t[p],Math.min(Math.max(t[p].width,t[p].height),UI_Store.thumb_size),null,{
protect:l})
;h.show().parents(".uis_imgs:first").show(0,function(e,i,o){
var n=o.find("span:last");n.length||(n=o.find("img:first"))
;a._setZoomProduct(n,t[e]);"viewer"==v.mode&&o.click(function(){
tb_show(FileDescription.get(i),e,i,l);return!1})}(p,t,h))}}},
_setZoomProduct:function(e,t,i){var o=e.closest(".component")
;if(i||o.hasClass("uis_prod_responsive")){
$('.zoomContainer, .zoomWindowContainer').remove()
;$.removeData(e.find("img"),"elevateZoom")}else{
var n=o.find(".uis_td_attr");e.data("zoom-image",t.url)
;n.is(e.closest(".uis_img"))?e.elevateZoom({
zoomWindowFadeIn:200,zoomWindowFadeOut:200,zoomType:"inner",
cursor:"crosshair",borderSize:0,cursor:"pointer"
}):e.elevateZoom({zoomWindowFadeIn:200,zoomWindowFadeOut:200,
zoomWindowPosition:n,zoomWindowWidth:n.width(),
zoomWindowHeight:n.height(),borderSize:0,scrollZoom:!0,
zoomWindowBgColour:"transparent",cursor:"pointer"})}},
loadCookie:function(){try{var c=$.cookie('uis_cart');if(c){
eval("var j="+c.obfuscate());j&&j.num&&j.items&&(this.cart=j)}
this.cart.options?this.cleanCartOptions():this.cart.options={}
;this.cart.discount_codes=this.cart.discount_codes||[]
;this.cart.cart_id||(this.cart.cart_id=this.generateCartId())
;if(this.cart.reservation_expires_at&&this.cart.num>0){
var now=(new Date).getTime()
;this.cart.reservation_expires_at>now?this.startReservationTimer(this.cart.reservation_expires_at):this.cart.reservation_expired=!0
}this.saveCookie()}catch(e){return $.cookie('uis_cart',null,{
path:"/"})}},saveCookie:function(){
$.cookie('uis_cart',JSON_.stringify(this.cart).obfuscate(),{
expires:365,path:"/"})},updateItem:function(e,t,i,o,n){
t=parseInt(t)
;"object"!=typeof this.cart.items[e.id]&&(this.cart.items[e.id]={})
;var s=parseInt(this.cart.items[e.id][i]=this.cart.items[e.id][i]||0)
;if(t!=NaN){if(o&&t>0&&t==s)return
;this.cart.items[e.id][i]=t>0?t+(o?0:s):0
}else this.cart.items[e.id][i]+=1;n||this.updateCartHtml()},
updateItems:function(e){if(e.length>0){
for(var t=0;t<e.length;t++)UI_Store.products[e[t][0]]?this.updateItem(UI_Store.products[e[t][0]],e[t][1],e[t][2],!0,!0):delete UI_Store.cart.items[e[t][0]]
;this.updateCartHtml()}},removeItems:function(e){
this.stopReservationTimer();this.cart={items:{},num:0,price:0,
coupons:[],discount_codes:e?[]:this.cart.discount_codes||[],
discounts:[],options:{},custom_shipping_params:{},
cart_id:this.generateCartId(),reservation_expires_at:null,
reservation_expired:!1};UI_Store.saveCookie()
;$.cookie('uis_last_unpaid_order',null,{path:"/"})
;this.updateCartHtml()},customPriceAmount:function(e,t){
return"percent"==t.type?Math.round(e*(1-t.value/100)*100)/100:"amount"==t.type?t.value:void 0
},unitPrice:function(e,t,i){t=t||1;var o=null
;if(e.custom_prices){var n=e.custom_prices.find(function(e){
return t>=e.quantity&&("any"==e.group_id||i&&-1!=i.group_ids.indexOf(parseInt(e.group_id)))
});n&&(o=this.customPriceAmount(e.price,n))}null==o&&(o=e.price)
;return o},createCartHtml:function(){var e=this
;this.html=$('<div style="display:none"></div>').appendTo("body")
;this.ct=$("<div><h2 class=title>Votre panier</h2><div class=uis_payment_err></div><div class='uis_reservation_info'><div class='uis_reservation_container' style='display:none;'><div class='uis_reservation_active'><div class='uis_reservation_message'>"+sprintf("Disponibilité du panier garantie pendant %1$s jusqu'à l'étape de paiement puis pendant %2$s",'<strong class="uis_reservation_timer"></strong>','5:00')+"</div></div><div class='uis_reservation_expired_message' style='display:none;'><div class='uis_reservation_expired_text'><strong>\u26a0\ufe0f Panier expiré</strong><br>La disponibilité des articles commandés n'est plus garantie</div><div class='uis_btn site_button uis_renew_reservation_button' onclick='UI_Store.renewReservation(); return false;'><span class='uis_bsa'>Vérifier la disponibilité</span></div></div></div></div><table class='main_cart'><thead><tr><td>Produit</td><td>Prix</td><td>Quantité</td><td>Total</td></tr></thead><tbody></tbody><tfoot><tr><td colspan=3 style='text-align: right' class='uis_total_label'>Total des articles</td><td class='uis_ar'></td></tr><tr><td colspan=3 class='uis_extra uis_options uis_c_thead'><div class='uis_c_thead'>Options de la commande</div><div class='uis_options_table'></div></td><td class='uis_extra uis_ar uis_option_price'></td></tr><tr><td colspan=3 class='uis_extra uis_ship uis_c_thead'><div>Méthode de livraison</div><div class=uis_shipping_solutions_loading><img src='/assets/loadingAnimation.gif'></div><div class='uis_shipping_solutions'></div><div class=uis_shipping_infos_cart></div></td><td class='uis_extra uis_ar'></td></tr><tr class='uis_discounts'><td colspan=3 class='uis_extra uis_c_thead'></td><td class='uis_extra uis_ar'></td></tr><tr class='uis_total uis_before_terms'><td colspan=3 style='text-align: right' class='uis_total_label'>"+(this.conf.billing.enabled&&0!=this.conf.billing.vat_rate?"Total TTC":"TOTAL")+"</td><td class='uis_ar'></td></tr>"+(this.conf.billing.enabled&&0!=this.conf.billing.vat_rate?"<tr class='uis_vat uis_before_terms'><td colspan=3 class='uis_extra uis_total_label'>"+UI_Store.vat_name("dont la TVA")+"</td><td class='uis_ar uis_extra'></td></tr>":"")+"</tfoot></table></div>")
;this.tb=this.ct.find("tbody");$(UI_Store.btn({
"class":'uis_sb site_button uis_back_to_list',
txt:"<span class='uis_bsa'>\u2190 Retourner à la boutique</span>"
})).prependTo(this.ct);if(this.discount_feature_active){
this.cp=$("<tr class='uis_add_discount_code'><td colspan=4>Vous avez un code de réduction ?<div class='uis_coup_f'><div class='uis_coup_e'></div><input class='site_textbox' type=text placeholder='Entrez le code'><input type=submit class='site_button' value='ok'</div></td></tr>").insertBefore(this.ct.find(".uis_total"))
;this.cp.find("input:submit").click(function(){
UI_Store.addDiscountCode($(this).parent().find("input:text").val())
});this.cp.find("input:text").returnKey(function(){
UI_Store.addDiscountCode($(this).val())})}
var t=this.pay_btn=$("<div class=uis_pay_btn></div>")
;this.ct.find("tfoot").append($("<tr>").html($("<td colspan=4>").html(this.pay_btn)))
;var i=$.fn.hash_to_a(e.conf.methods).sort(),o,n="float:right;clear:right;",s="div"
;"editor"!=v.mode&&!v.features.uis_terms||null==this.conf.terms||$("<tr class='uis_terms'></tr>").html($("<td colspan=4>").html($('<input class=uis_terms_checkbox name="terms_checkbox" type="checkbox"/>').css({
verticalAlign:'middle'
}).prop("checked",UI_Store.cart.terms).on("change blur",function(){
UI_Store.cart.terms=$(".uis_terms_checkbox").prop("checked")
;UI_Store.saveCookie()
}).add($("<span id=terms_label> J'ai lu et accepté les  </span>").click(function(){
$(".uis_terms_checkbox").prop("checked",function(e,t){return!t
}).trigger("change")
})).add($("<span class='clickable_link site_link'>conditions générales de vente</span>").click(function(){
e.show_terms()
})))).insertAfter(this.ct.find(".uis_before_terms:last"))
;sigCtl.getVariable("User.site_owner",function(r,a){
var l=!!a.owner,c=[];i.each(function(t){
e.conf.methods[t].testmode&&!l||c.push(t)});if(c.length>0){
t=$("<div class=\"uis_pay_wrapper\"><div class=\"uis_btn_panel\"><a href=\"javascript:\" class=\"uis_sb\">Continuer vos achats</a> </div><div class=\"uis_btn_panel\"><div class=title>Passer la commande</div><span class=\"uis_pay_method_label\">Choisissez votre méthode de paiement :</span><div class=\"uis_pay_btns_wrapper\"></div></div></div>").appendTo(t)
;for(var d=0;d<c.length;d++)!function(i){var o={
check:"check_payement",form:"txt",transfer:"transfer",
paypal:"paypal"},n=$(UI_Store.btn({
"class":"uis_sbp site_button",node:s,
txt:"<span class='uis_bsa' method="+i+"><span class='fonticon'>"+$.fn.fonticon(o[i]||"cb")+"</span><b>"+e.conf.methods[i].btn+"</b></span>"
})).appendTo(t.find(".uis_pay_btns_wrapper"))
;if(-1==c.indexOf("cb")&&"paypal"==i&&e.conf.methods[i].btn.match(/car/)){
n.tooltip("Pour payer par carte bancaire, cliquez puis choisissez la méthode de paiement par carte sur la page suivante.")
;$(document).HandleHelpTooltip()}}(c[d]);null!=o&&o.appendTo(t)
;t.find('.uis_pay_method_label').toggle(c.length>1)
;t.find(".uis_btn").mousedown(function(){e.callTrackers()})
}else t.append("<div style='"+n+"'>Le marchand n'a pas encore configuré de méthode de paiement.<br>Merci de revenir ultérieurement...</div>")
})},extractBonusAndStockKey:function(e,t){var i=0,o=[]
;if(e.opts.length>0)for(var n=0;n<t.length&&n<e.opts.length;n++)try{
if(e.opts[n].options){var s=t[n][1]
;if("uis_no_select"!=s&&e.opts[n].options[s]){
i+=parseFloat(e.opts[n].options[s].p)||0
;o.push(e.opts[n].options[s].s?s:"|")}}}catch(r){
dbg.error("Store TryCatch",r,t,e.opts,n)}
return[i,o=JSON_.stringify(o)]},callTrackers:function(){try{
UI_Store.trackers&&sigCtl.getVariable("UI_Store."+UI_Store.create_cart_ref,function(e,t){
$.each(UI_Store.trackers,function(e,i){try{
var o=UI_Store.cart.total-(UI_Store.cart.shipping||0)
;UI_Store.conf.billing.vat_rate&&(o/=1+UI_Store.conf.billing.vat_rate/100)
;var n=i.replace("-CMD-",t).replace("-RAWPRICE-",sprintf("%.2f",o)).replace("-PRICE-",sprintf("%.2f",UI_Store.cart.total)),s=$("<img />").attr('src',n).on("load",function(){
this.complete&&"undefined"!=typeof this.naturalWidth&&0!=this.naturalWidth||dbg.error("FAIL Loading tracker",n,this)
})}catch(r){dbg.error("Tracker Call Exception",i,r)}})})
}catch(e){dbg.error("Trackers Exception",e)}},
updateCartLocalData:function(){
var self=this,deferred=$.Deferred(),products_to_load=this.checkCartItems()
;this.cart.num=0;this.cart.price=0
;if(0==products_to_load.length){for(var k in this.cart.items){
var p=this.products[k];for(var o in this.cart.items[k]){
var quantity=parseInt(this.cart.items[k][o])
;if(p.max>0&&quantity>0){var ks=[];try{eval("ks="+o)}catch(e){
dbg.error("ERROR during EVAL",o)}this.cart.num+=quantity
;var bsk=this.extractBonusAndStockKey(p,ks),bonus=bsk[0],unit_price=UI_Store.unitPrice(p,quantity,UI_Store.current_member),tot=(unit_price+bonus/100)*quantity
;this.cart.price+=tot}}}deferred.resolve()
}else deferred=this.getProducts(products_to_load).done(function(){
self.updateCartLocalData()});return deferred},
updateCartHtml:function(prod_loaded){var self=this
;this.html?this.tb.empty():this.createCartHtml()
;this.create_cart_ref=(this.create_cart_ref||0)+1;var self=this
;this.tb.html("<tr><td colspan=4><img src='/assets/loadingAnimation.gif'></tr>")
;this.updateCartLocalData().then(function(){
function calculateTotal(){calculating_total=!0
;var e=$(document).add(self.ct)
;$(".uis_shipping_cart_summary",e).empty()
;$(".uis_shipping_solutions_loading",e).show()
;$(".uis_shipping_solutions",e).hide();self.updateCartData({
uis_shipping_limited:v.features.uis_shipping_limited&&"editor"!=v.mode,
use_cheapest_combinaison:$(".uis_shipping_solutions .options:checked").is(".uis_shipping_solutions .options:first")
},function(e){
self.discount_feature_active&&$("tr.uis_discounts").each(function(){
var e=$(this),t=e.find("td:first").empty(),i=!1
;(self.cart.discounts||[]).each(function(e){if(e.valid||e.code){
i=!0
;$("<span class=uis_discount_code_name></span>").text(e.name).appendTo(t)
;e.valid&&"number"==typeof e.amount&&e.amount>0&&$("<span class=uis_discount_code_amount> ("+UI_Store.show_price(-e.amount)+")</span>").appendTo(t)
;$("<br>").appendTo(t);if(e.errors.length>0){
$("<span class=uis_discount_code_errors></span>").html(e.errors.join("<br>")).appendTo(t)
;$("<br>").appendTo(t)}}})
;$("<span><img class=uis_br src='/assets/icons/remove.png' width=10></span>").prependTo(t).click(function(){
UI_Store.cart.discount_codes=[];UI_Store.updateCartHtml()})
;$("<div class=uis_c_thead>Réductions</div>").prependTo(t)
;e.find("td:last").html(UI_Store.cart.coupon_red>0?UI_Store.show_price(-UI_Store.cart.coupon_red):"")
;e.toggle(i)});if(UI_Store.use_shipping){
UI_Store.shipping_infos=e.shipping_infos
;UI_Store.shipping_step_needed=e.shipping_step_needed
;if(UI_Store.conf.shipping.display_on_cart||e.undeliverable){
$(".uis_ship").parent().show().find("td:last").html(UI_Store.show_price(UI_Store.cart.shipping))
;$(".uis_shipping_solutions").toggle(!e.undeliverable)
;$(".uis_shipping_solutions").html(e.shipping_solutions_html||"")
;UI_Store.format_prices($(".uis_shipping_solutions"))
;$(".uis_shipping_infos_cart").html(e.shipping_infos.cart)
;UI_Store.format_prices($(".uis_shipping_infos_cart"))
;if(!e.undeliverable){
$(".uis_shipping_solutions .options").prop("checked",!1)
;$(".uis_shipping_solutions .options[value='"+UI_Store.shipping_method_ids()+"']").prop("checked",!0)
}}else $(".uis_ship").parent().hide()
;$(".uis_shipping_infos_cart_summary").html('<div class="uis_prodInfos"><div>Frais de port</div><div></div><div>'+e.shipping_infos.cart_summary+'</div></div>')
;UI_Store.format_prices($(".uis_shipping_infos_cart_summary"))
;$(".change_country_button").off().click(function(){
$("[name=change_country]",$(this).parent()).toggle();return!1})
;$(".change_country_button_summary").off().click(function(){
$(this).closest(".uis_cextend").find(".uis_btn").click()
;return!1})
;$("[name=change_country]").off().on("change",function(){
self.cpts[0].ask({request:"change_country",country_id:this.value
},function(e){UI_Store.updateCartHtml()})})
;UI_Store.conf.shipping.display_on_cart_summary&&$(".uis_pr").html(""+UI_Store.show_price(UI_Store.cart.total))
;$(".uis_shipping_infos_shipping_selection_page").html(e.shipping_infos.shipping_selection_page)
;$(".uis_shipping_solutions_loading").hide()}
$(".uis_pay_btn").toggle(!UI_Store.use_shipping||!e.undeliverable)
;self.cpts.each(function(e){e.ui.updateCptSize()})
;set_total(UI_Store.cart.total);calculating_total=!1
},function(){$(".uis_pay_btn").show();calculating_total=!1})}
self.tb.empty();var item_counter=0
;self.cartHtmlProd=$("<ul></ul>");for(var k in self.cart.items){
var p=self.products[k];for(var o in self.cart.items[k]){
var quantity=parseInt(self.cart.items[k][o])
;if(p.max>0&&quantity>0){var ks=[];try{eval("ks="+o)}catch(e){
dbg.error("ERROR during EVAL",o)}
var bsk=self.extractBonusAndStockKey(p,ks),bonus=bsk[0],stock_key=bsk[1],d=p.stocks[stock_key],max=Math.min(p.max,d||0==d?d:p.max),unit_price=UI_Store.unitPrice(p,quantity,UI_Store.current_member),tot=(unit_price+bonus/100)*quantity,prod_list_cart=$("<li>").html("<div class='uis_itimg'></div><div class='uis_prodInfos'></div>").data("p",p)
;self.setImage(prod_list_cart.find(".uis_itimg"),p.img,[50,null],!0)
;prod_list_cart.find(".uis_prodInfos").html("<div>"+p.name+"</div><div>"+sprintf(1==quantity?" %1$s article":" %1$s articles",quantity)+"</div><div>"+UI_Store.show_price(unit_price+bonus/100)+"</div>")
;ks.length>0&&prod_list_cart.find(".uis_iname").append("<div class='uis_ciopt'>"+self.options2html(ks)+"</div>")
;prod_list_cart.appendTo(self.cartHtmlProd)
;var tr=$("<tr item-value="+k+"><td><div class=uis_bi></div>"+p.name+" "+(ks.length>0?"<div class='uis_cp_opts'><span class='uis_opts'>Options :&nbsp;</span><span class='uis_opts'>"+self.options2html(ks)+"</span>":"")+" </div></td><td class=uis_ar><div class=uis_unit_price_without_detail>"+UI_Store.show_price(unit_price+bonus/100)+"</div><div class=uis_unit_price_with_detail>"+UI_Store.show_price(unit_price)+(0!=bonus?"<br><small>+"+UI_Store.show_price(bonus/100)+"</small></div>":"")+"</td><td class='uis_cp_qte'>"+(max>1?"<div class='uis_quantity_stepper site_textbox'><button type='button' class='uis_qte_btn uis_qte_dec'>-</button><input type='number' class='uis_qte_prod uis_qte_input' value='"+quantity+"' min='1' max='"+max+"' step='1' inputmode='numeric'><button type='button' class='uis_qte_btn uis_qte_inc'>+</button></div><div class='uis_qte_alert'><div class='uis_qte_alert_max'>"+max+"&nbsp;articles maximum</div>"+sprintf("<div class='uis_qte_alert_min'>Cliquez sur %1$s pour supprimer l'article</div>","<img src='/assets/icons/drop.gif'>")+"</div>":"1 <input type=hidden value=1>")+"<span class='uis_br fonticon'>"+$.fn.fonticon("close")+"</span></td><td class=uis_ar>"+UI_Store.show_price(tot)+"</td></tr>").appendTo(self.tb)
;tr.attr("data-itemkey",o)
;tr.find(".uis_qte_input").restrictTo("int",1,max,function(e,t,i){
if(e>i||e<t){
var o=e>i?$(this).closest("td").find(".uis_qte_alert_max"):$(this).closest("td").find(".uis_qte_alert_min")
;e<=t&&o.unbind("click").click(function(){
o.parents("td:first").find(".uis_br").click()});o.show()
;setTimeout(function(){o.hide()},3e3)}
}).on("keypress",function(e){
13==e.keyCode&&$(this).trigger("blur")}).on("focus",function(){
$(this).closest(".gttextbox_preset").addClass("focused")
}).on("blur",function(){var e=$(this)
;e.closest(".gttextbox_preset").removeClass("focused")
;setTimeout(function(){
self.updateCartFromHtml(e.parents(".uis_bill:first"))},50)})
;tr.find(".uis_qte_inc,.uis_qte_dec").click(function(){
var e=$(this).closest("tr").find(".uis_qte_input")
;e.val(parseInt(e.val(),10)+($(this).is(".uis_qte_inc")?1:-1)).blur()
});self.setImage(tr.find(".uis_bi:first"),p.img,[110,null],!0)
;$(".uis_br",tr).click(function(e){
var t=self.products[$(e.target).parents("tr:first").attr("item-value")]
;confirm(sprintf("Voulez-vous vraiment supprimer l'article '%1$s' de votre panier ?",$("<p>").html(t.name).text()))&&self.updateItem(t,0,$(e.target).parents("tr:first").attr("data-itemkey"))
});item_counter++}}}
0==self.cart.num&&$("<tr><td colspan=4>Votre panier est vide. <a href='javascript:' class=uis_sb>Retourner à la boutique</a></tr>").prependTo(self.tb)
;self.cart.price=parseFloat(sprintf("%.2f",UI_Store.cart.price))
;self.ct.find("tfoot tr:first td:last").html(UI_Store.show_price(UI_Store.cart.price))
;var tro=self.ct.find("tfoot > tr:eq(1)").css("display","none"),trot=tro.find(".uis_options_table").empty(),trs=self.ct.find("tfoot > tr:eq(2)").css("display","none"),trc=self.ct.find("tfoot > tr.uis_discounts").css("display","none"),trm=self.ct.find("tfoot > tr.uis_terms").css("display","none"),trt=self.ct.find("tfoot > tr.uis_total").css("display","none"),tr_vat=self.ct.find("tfoot > tr.uis_vat").css("display","none"),set_total=function(e,t){
UI_Store.cart.total=e
;t||$("tr.uis_total").add("tr.uis_total",self.ct).show().find("td:last").html(UI_Store.show_price(e,!1,!0))
;self.conf.billing.enabled&&$("tr.uis_vat").add("tr.uis_vat",self.ct).show().find("td:last").html(UI_Store.show_price(UI_Store.cart.total_vat||0,!1,!0))
};set_total(UI_Store.cart.price,!0);var option_bonus=0
;if((0!=item_counter||"editor"==v.mode)&&("editor"==v.mode||v.features.uis_cart_options)&&self.conf.options.length>0){
var option_list=[];tro.show()
;UI_Store.conf.options.each(function(e){
var t=$("<div class=uis_options_tr><div class='uis_extra uis_options_td'></div></div>").appendTo(trot).find(".uis_options_td:last")
;if(e.options){
var i=self.option2select(e,UI_Store.cart.options[e.name],"cart")
;i.appendTo(t);(i=i.find("select:first")).change(function(){
var t=$(this).removeAttr("firstTime")
;UI_Store.cart.options[e.name]=t.val();setTimeout(function(){
self.updateCartFromHtml(t.parents(".uis_bill:first"))},50)})
;if(e.options[i.val()]){
option_bonus+=e.options[i.val()].p/100||0
;option_list.push(e.name+": "+i.val().html_decode())
;UI_Store.cart.options[e.name]=i.val()}}else{
var o=self.option2input(e,UI_Store.cart.options[e.name])
;o.appendTo(t).find("input,textarea").blur(function(){
var t=$(this).removeAttr("firstTime"),i=t.val().substr(0,e["<"])
;t.val(i);UI_Store.cart.options[e.name]=i
;UI_Store.checkOptions("cart",t.parent(),UI_Store.conf.options)
;UI_Store.saveCookie()})
;UI_Store.cart.options[e.name]=$(o).val()}})
;UI_Store.checkOptions("cart",trot,UI_Store.conf.options)
;tro.find("td:last").html(UI_Store.show_price(option_bonus))
;option_bonus>0&&item_counter++}
0==item_counter&&"editor"!=v.mode||trm.show()
;UI_Store.cart.option_bonus=option_bonus
;UI_Store.cart.coupon_red=0
;UI_Store.use_shipping=!("editor"!=v.mode&&!v.features.uis_shipping||!UI_Store.conf.shipping||!Object.keys(UI_Store.cart.items).find(function(e){
return!UI_Store.products[e].digital}));var calculating_total=!1
;if(UI_Store.use_shipping)$(self.ct).off().on("change click",".uis_shipping_solutions .options",function(){
var e=$(this).parents(".uis_bill:first"),t=$(".uis_shipping_solutions .options:checked",e).val()
;if(!(calculating_total||UI_Store.cart.shipping_methods&&t==UI_Store.shipping_method_ids())){
$(this).off()
;UI_Store.cart.shipping_methods=t.split(",").collect(function(e){
return{id:parseInt(e)}});calculateTotal()}});else{
delete UI_Store.cart.shipping_methods;UI_Store.cart.shipping=0
;$(".uis_ship",self.ct).parent().hide()}
set_total(UI_Store.cart.price+UI_Store.cart.option_bonus-UI_Store.cart.coupon_red)
;calculateTotal()
;self.cart.num<=0&&$(".uis_shipping_solutions",self.ct).hide()
;self.saveCookie();self.pay_btn.hide()
;sigCtl.emit("UI_Store.updateCart")})},
updateCartData:function(e,t,i){e.cart=UI_Store.cart
;e.cart_id=UI_Store.cart.cart_id;return this.cptServer().ask({
request:"calculate_total",data:e},function(e){
UI_Store.cart=e.cart;for(var o in UI_Store.cart.items){
for(var n in UI_Store.cart.items[o])0==UI_Store.cart.items[o][n]&&delete UI_Store.cart.items[o][n]
;0==Object.keys(UI_Store.cart.items[o]).length&&delete UI_Store.cart.items[o]
}UI_Store.saveCookie()
;UI_Store.cart.num>0&&e.cart.reservation_expires_at?UI_Store.startReservationTimer(e.cart.reservation_expires_at):UI_Store.stopReservationTimer()
;if(e.cart.unavailable_items&&e.cart.unavailable_items.length>0){
var s=!1,r="Attention : Certaines quantités de produits ont été ajustées pour correspondre au stock actuel :\n\n"
;e.cart.unavailable_items.forEach(function(e){
r+="- "+e.product_name+" de type "+e.stock_key+": "
;e.available_quantity>0?r+=sprintf(" seulement %1$d disponible(s)",e.available_quantity):r+=" rupture de stock"
;if(null!=e.reserved_other_quantity&&e.reserved_other_quantity>0){
s=!0;if(e.reserved_other_until){
var t,i=new Date(e.reserved_other_until).toLocaleTimeString([],{
hour:"2-digit",minute:"2-digit",second:"2-digit"})
;r+=sprintf(", %1$d sont en cours de commande par d'autres clients et sont réservés jusqu'à %2$s",e.reserved_other_quantity,i)
}}r+="\n"})
;s&&(r+="\nCertains produits sont actuellement en cours de commande par d'autres clients. Vous pourrez réessayer après l'expiration de leur réservation s'ils ne finalisent pas leur commande.")
;alert(r);e.cart.unavailable_items=[];UI_Store.saveCookie()
;"function"==typeof i&&i();UI_Store.updateCartHtml()
}else"function"==typeof t&&t(e)},function(){
"function"==typeof i&&i()
},null,this.cpts[0]&&this.cpts[0].idserver?null:this.cpt_server)
},updateCartFromHtml:function(e){var t=[]
;e.find("tbody tr").each(function(){var e=$(this)
;t.push([e.attr("item-value"),parseInt(e.find("input").val())||0,e.attr("data-itemkey")])
});this.updateItems(t)},initQuantityStepper:function(e){
e.find(".uis_qte_btn").click(function(){
var e=$(this).siblings(".uis_qte_prod"),t=parseInt(e.attr("min"),10)||1,i=parseInt(e.attr("max"),10),o=parseInt(e.val(),10)
;o=(isNaN(o)?t:o)+($(this).is(".uis_qte_inc")?1:-1)
;isNaN(i)||(o=Math.min(i,o));e.val(Math.max(t,o))})
;e.find(".uis_qte_prod").on("focus",function(){
$(this).closest(".gttextbox_preset").addClass("focused")
}).on("blur",function(){
var e=parseInt(this.min,10)||1,t=parseInt(this.max,10),i=parseInt(this.value,10)
;i=Math.max(e,isNaN(i)?e:i);isNaN(t)||(i=Math.min(t,i))
;this.value=i
;$(this).closest(".gttextbox_preset").removeClass("focused")})},
btn:function(e){var t=e["class"]||"",i=e.node||"div",o
;return"<"+i+" class='uis_btn "+t+"' style="+(e.style||"")+">"+e.txt+"<span class='uis_bse'></span></"+i+">"
},_rate:1,_no_vat_rate:1,_price_display:"%.2f&nbsp;%s",
price_round:function(e){return Math.round(100*e)/100},
format_prices:function(e){$("[data-price]",e).each(function(){
$(this).html(UI_Store.show_price(parseFloat($(this).data("price"))))
})},convert_with_vat:function(e){
return this.conf.billing.enabled&&this.conf.billing.no_vat_display?e*(1+this.conf.billing.vat_rate/100):e
},convert_without_vat:function(e){
return this.conf.billing.enabled&&this.conf.billing.no_vat_display?this.price_round(e/(1+this.conf.billing.vat_rate/100)):e
},show_price:function(e,t,i){
var o=!i&&this.conf.billing.enabled&&this.conf.billing.no_vat_display
;"XPF"!=this.conf.currency&&"JPY"!=this.conf.currency||(this._price_display="%d&nbsp;%s")
;if(!this._cur){if(this.conf.custom&&this.conf.custom.currency){
this.conf.custom.currency.price_display&&(this._price_display=this.conf.custom.currency.price_display)
;this.conf.custom.currency.rate&&(this._rate=parseFloat(this.conf.custom.currency.rate))
}
o&&(this._no_vat_rate=this._rate/(1+this.conf.billing.vat_rate/100))
;this._cur=this.currency_sym()}
return(e||0==e?sprintf(this._price_display,this.price_round(e*(o?this._no_vat_rate:t?1:this._rate)),this._cur):sprintf("&nbsp;%s",t?this.currency_sym(!0):this._cur))+(o?" HT":"")
},vat_name:function(e){
return"XPF"==this.conf.currency?e.replace("TVA","TGC"):e},
currency_sym:function(e){
return!e&&this.conf.custom&&this.conf.custom.currency&&this.conf.custom.currency.name?this.conf.custom.currency.name:this.conf.currency.replace(/X[OA]F/,"FCFA").replace(/XPF/,"FCFP").replace(/EUR/,"&euro;").replace(/JPY/,"&yen;").replace(/GBP/,"&pound;").replace(/MAD/,"Dh").replace(/(\w\w)D/,"$$$1")
},show_terms:function(){
tb_show(null,'/site/get_terms/'+this.conf.terms+'?alone=1&width=1000&height=500&btn_store=1&TB_iframe')
},update_gdpr:function(){
$.get('/site/get_store_gdpr/'+v.site_id,{},function(e){
window.site.store_gdpr=JSON_.parse(e)
;sigCtl.emit("UI_Store.updateGdpr")})},
shipping_method_ids:function(){
return UI_Store.cart.shipping_methods.collect(function(e){
return e.id}).join(",")},reservation_timer_interval:null,
startReservationTimer:function(e){
this.cart.reservation_expires_at=e||(new Date).getTime()+6e5
;this.cart.reservation_expired=!1;this.saveCookie()
;this.reservation_timer_interval&&clearInterval(this.reservation_timer_interval)
;this.updateReservationDisplay();var t=this
;this.reservation_timer_interval=setInterval(function(){
t.updateReservationDisplay()},1e3)},
stopReservationTimer:function(){
if(this.reservation_timer_interval){
clearInterval(this.reservation_timer_interval)
;this.reservation_timer_interval=null}},
updateReservationDisplay:function(){
if(this.cart.reservation_expires_at){
var e=(new Date).getTime(),t=this.cart.reservation_expires_at-e
;if(t<=0){this.cart.reservation_expired=!0;this.saveCookie()
;this.stopReservationTimer();this.showReservationExpired()}else{
var i=Math.floor(t/6e4),o=Math.floor(t%6e4/1e3),n=i+":"+(o<10?"0":"")+o
;$(".uis_reservation_timer").text(n)
;$(".uis_reservation_active").show()
;$(".uis_reservation_expired_message").hide()
;sigCtl.emit("UI_Store.reservation_timer_updated")}}},
showReservationExpired:function(){
$(".uis_reservation_active").hide()
;$(".uis_reservation_expired_message").show()
;sigCtl.emit("UI_Store.reservation_timer_updated")},
renewReservation:function(){var e=this
;this.cart.reservation_expired=!1;UI_Store.updateCartHtml()}}
;!function(e,t){
'function'==typeof define&&define.amd?define(['jquery'],function(e){
return t(e)
}):'object'==typeof module&&module.exports?module.exports=t(require('jquery')):t(e.jQuery)
}(this,function(e){!function(){'use strict';function t(t,o){
this.el=t;this.$el=e(t);this.s=e.extend({},i,o)
;if(this.s.dynamic&&'undefined'!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw'When using dynamic mode, you must also define dynamicEl as an Array.'
;this.modules={};this.lGalleryOn=!1;this.lgBusy=!1
;this.hideBartimeout=!1
;this.isTouch='ontouchstart'in document.documentElement
;this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1)
;this.s.dynamic?this.$items=this.s.dynamicEl:'this'===this.s.selector?this.$items=this.$el:''!==this.s.selector?this.s.selectWithin?this.$items=e(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(e(this.s.selector)):this.$items=this.$el.children()
;this.$slide='';this.$outer='';this.init();return this}var i={
mode:'lg-slide',cssEasing:'ease',easing:'linear',speed:600,
height:'100%',width:'100%',addClass:'',
startClass:'lg-start-zoom',backdropDuration:150,
hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,
keyPress:!0,controls:!0,slideEndAnimatoin:!0,
hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,
appendSubHtmlTo:'.lg-sub-html',subHtmlSelectorRelative:!1,
preload:1,showAfterLoad:!0,selector:'',selectWithin:'',
nextHtml:'',prevHtml:'',index:!1,iframeMaxWidth:'100%',
download:!0,counter:!0,appendCounterTo:'.lg-toolbar',
swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,
dynamicEl:[],galleryId:1};t.prototype.init=function(){var t=this
;t.s.preload>t.$items.length&&(t.s.preload=t.$items.length)
;var i=window.location.hash
;if(i.indexOf('lg='+this.s.galleryId)>0){
t.index=parseInt(i.split('&slide=')[1],10)
;e('body').addClass('lg-from-hash')
;if(!e('body').hasClass('lg-on')){setTimeout(function(){
t.build(t.index)});e('body').addClass('lg-on')}}if(t.s.dynamic){
t.$el.trigger('onBeforeOpen.lg');t.index=t.s.index||0
;e('body').hasClass('lg-on')||setTimeout(function(){
t.build(t.index);e('body').addClass('lg-on')})
}else t.$items.on('click.lgcustom',function(i){try{
i.preventDefault();i.preventDefault()}catch(o){i.returnValue=!1}
t.$el.trigger('onBeforeOpen.lg')
;t.index=t.s.index||t.$items.index(this)
;if(!e('body').hasClass('lg-on')){t.build(t.index)
;e('body').addClass('lg-on')}})};t.prototype.build=function(t){
var i=this;i.structure()
;e.each(e.fn.lightGallery.modules,function(t){
i.modules[t]=new e.fn.lightGallery.modules[t](i.el)})
;i.slide(t,!1,!1,!1);i.s.keyPress&&i.keyPress()
;if(i.$items.length>1){i.arrow();setTimeout(function(){
i.enableDrag();i.enableSwipe()},50)
;i.s.mousewheel&&i.mousewheel()
}else i.$slide.on('click.lg',function(){
i.$el.trigger('onSlideClick.lg')});i.counter();i.closeGallery()
;i.$el.trigger('onAfterOpen.lg')
;i.$outer.on('mousemove.lg click.lg touchstart.lg',function(){
i.$outer.removeClass('lg-hide-items')
;clearTimeout(i.hideBartimeout)
;i.hideBartimeout=setTimeout(function(){
i.$outer.addClass('lg-hide-items')},i.s.hideBarsDelay)})
;i.$outer.trigger('mousemove.lg');i.pushHistoryState=function(){
history.pushState&&history.pushState({lgOpened:!0},null,null)}
;i.pushHistoryState();i.popStateHandler=function(e){
if(document.body.classList.contains('lg-on')){
sigCtl.emit("Gallery.close");i.destroy()}}
;window.addEventListener('popstate',i.popStateHandler)}
;t.prototype.structure=function(){
var t='',i='',o=0,n='',s,r=this
;e('body').append('<div class="lg-backdrop"></div>')
;e('.lg-backdrop').css('transition-duration',this.s.backdropDuration+'ms')
;for(o=0;o<this.$items.length;o++)t+='<div class="lg-item"></div>'
;this.s.controls&&this.$items.length>1&&(i="<div class=\"lg-actions\"><button class=\"lg-prev lg-icon\">"+this.s.prevHtml+"</button><button class=\"lg-next lg-icon\">"+this.s.nextHtml+"</button></div>")
;'.lg-sub-html'===this.s.appendSubHtmlTo&&(n='<div class="lg-sub-html"></div>')
;s='<div class="lg-outer '+this.s.addClass+' '+this.s.startClass+"\"><div class=\"lg\" style=\"width:"+this.s.width+'; height:'+this.s.height+"\"><div class=\"lg-inner\">"+t+"</div><div class=\"lg-toolbar lg-group\"><span class=\"lg-close lg-icon\"></span></div>"+i+n+"</div></div>"
;e('body').append(s);this.$outer=e('.lg-outer')
;this.$slide=this.$outer.find('.lg-item');if(this.s.useLeft){
this.$outer.addClass('lg-use-left');this.s.mode='lg-slide'
}else this.$outer.addClass('lg-use-css3');r.setTop()
;e(window).on('resize.lg orientationchange.lg',function(){
setTimeout(function(){r.setTop()},100)})
;this.$slide.eq(this.index).addClass('lg-current')
;if(this.doCss())this.$outer.addClass('lg-css3');else{
this.$outer.addClass('lg-css');this.s.speed=0}
this.$outer.addClass(this.s.mode)
;this.s.enableDrag&&this.$items.length>1&&this.$outer.addClass('lg-grab')
;this.s.showAfterLoad&&this.$outer.addClass('lg-show-after-load')
;if(this.doCss()){var a=this.$outer.find('.lg-inner')
;a.css('transition-timing-function',this.s.cssEasing)
;a.css('transition-duration',this.s.speed+'ms')}
setTimeout(function(){e('.lg-backdrop').addClass('in')})
;setTimeout(function(){r.$outer.addClass('lg-visible')
},this.s.backdropDuration)
;this.s.download&&this.$outer.find('.lg-toolbar').append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>')
;this.prevScrollTop=e(window).scrollTop()}
;t.prototype.setTop=function(){if('100%'!==this.s.height){
var t=e(window).height(),i=(t-parseInt(this.s.height,10))/2,o=this.$outer.find('.lg')
;t>=parseInt(this.s.height,10)?o.css('top',i+'px'):o.css('top','0px')
}};t.prototype.doCss=function(){var e;return!!function(){
var e=['transition','MozTransition','WebkitTransition','OTransition','msTransition','KhtmlTransition'],t=document.documentElement,i=0
;for(i=0;i<e.length;i++)if(e[i]in t.style)return!0}()}
;t.prototype.isVideo=function(e,t){var i
;i=this.s.dynamic?this.s.dynamicEl[t].html:this.$items.eq(t).attr('data-html')
;if(!e){if(i)return{html5:!0}
;console.error('lightGallery :- data-src is not pvovided on slide item '+(t+1)+'. Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html')
;return!1}
var o=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),n=e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),s=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),r=e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i)
;return o?{youtube:o}:n?{vimeo:n}:s?{dailymotion:s}:r?{vk:r
}:void 0};t.prototype.counter=function(){
this.s.counter&&e(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+'</span></div>')
};t.prototype.addHtml=function(t){var i=null,o,n
;if(this.s.dynamic)this.s.dynamicEl[t].subHtmlUrl?o=this.s.dynamicEl[t].subHtmlUrl:i=this.s.dynamicEl[t].subHtml;else if((n=this.$items.eq(t)).attr('data-sub-html-url'))o=n.attr('data-sub-html-url');else{
i=n.attr('data-sub-html')
;this.s.getCaptionFromTitleOrAlt&&!i&&(i=n.attr('title')||n.find('img').first().attr('alt'))
}if(!o)if(null!=i){var s=i.substring(0,1)
;'.'!==s&&'#'!==s||(i=this.s.subHtmlSelectorRelative&&!this.s.dynamic?n.find(i).html():e(i).html())
}else i=''
;'.lg-sub-html'===this.s.appendSubHtmlTo?o?this.$outer.find(this.s.appendSubHtmlTo).load(o):this.$outer.find(this.s.appendSubHtmlTo).html(i):o?this.$slide.eq(t).load(o):this.$slide.eq(t).append(i)
;null!=i&&(''===i?this.$outer.find(this.s.appendSubHtmlTo).addClass('lg-empty-html'):this.$outer.find(this.s.appendSubHtmlTo).removeClass('lg-empty-html'))
;this.$el.trigger('onAfterAppendSubHtml.lg',[t])}
;t.prototype.preload=function(e){var t=1,i=1
;for(t=1;t<=this.s.preload&&!(t>=this.$items.length-e);t++)this.loadContent(e+t,!1,0)
;for(i=1;i<=this.s.preload&&!(e-i<0);i++)this.loadContent(e-i,!1,0)
};t.prototype.loadContent=function(t,i,o){
var n=this,s=!1,r,a,l,c,d,p,h=function(t){
for(var i=[],o=[],n=0;n<t.length;n++){var s=t[n].split(' ')
;''===s[0]&&s.splice(0,1);o.push(s[0]);i.push(s[1])}
for(var r=e(window).width(),l=0;l<i.length;l++)if(parseInt(i[l],10)>r){
a=o[l];break}};if(n.s.dynamic){if(n.s.dynamicEl[t].poster){s=!0
;l=n.s.dynamicEl[t].poster}p=n.s.dynamicEl[t].html
;a=n.s.dynamicEl[t].src;if(n.s.dynamicEl[t].responsive){var u
;h(n.s.dynamicEl[t].responsive.split(','))}
c=n.s.dynamicEl[t].srcset;d=n.s.dynamicEl[t].sizes}else{
if(n.$items.eq(t).attr('data-poster')){s=!0
;l=n.$items.eq(t).attr('data-poster')}
p=n.$items.eq(t).attr('data-html')
;a=n.$items.eq(t).attr('href')||n.$items.eq(t).attr('data-src')
;if(n.$items.eq(t).attr('data-responsive')){var f
;h(n.$items.eq(t).attr('data-responsive').split(','))}
c=n.$items.eq(t).attr('data-srcset')
;d=n.$items.eq(t).attr('data-sizes')}var _=!1
;n.s.dynamic?n.s.dynamicEl[t].iframe&&(_=!0):'true'===n.$items.eq(t).attr('data-iframe')&&(_=!0)
;var m=n.isVideo(a,t);if(!n.$slide.eq(t).hasClass('lg-loaded')){
if(_)n.$slide.eq(t).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:'+n.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+a+'"  allowfullscreen="true"></iframe></div></div>');else if(s){
var g=''
;g=m&&m.youtube?'lg-has-youtube':m&&m.vimeo?'lg-has-vimeo':'lg-has-html5'
;n.$slide.eq(t).prepend('<div class="lg-video-cont '+g+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+l+'" /></div></div>')
}else if(m){
n.$slide.eq(t).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>')
;n.$el.trigger('hasVideo.lg',[t,a,p])
}else n.$slide.eq(t).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+a+'" /></div>')
;n.$el.trigger('onAferAppendSlide.lg',[t])
;r=n.$slide.eq(t).find('.lg-object');d&&r.attr('sizes',d);if(c){
r.attr('srcset',c);try{picturefill({elements:[r[0]]})}catch(v){
console.warn('lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.')
}}'.lg-sub-html'!==this.s.appendSubHtmlTo&&n.addHtml(t)
;n.$slide.eq(t).addClass('lg-loaded')}
n.$slide.eq(t).find('.lg-object').on('load.lg error.lg',function(){
var i=0;o&&!e('body').hasClass('lg-from-hash')&&(i=o)
;setTimeout(function(){n.$slide.eq(t).addClass('lg-complete')
;n.$el.trigger('onSlideItemLoad.lg',[t,o||0])},i)})
;m&&m.html5&&!s&&n.$slide.eq(t).addClass('lg-complete')
;!0===i&&(n.$slide.eq(t).hasClass('lg-complete')?n.preload(t):n.$slide.eq(t).find('.lg-object').on('load.lg error.lg',function(){
n.preload(t)}))};t.prototype.slide=function(t,i,o,n){
var s=this.$outer.find('.lg-current').index(),r=this
;if(!r.lGalleryOn||s!==t){
var a=this.$slide.length,l=r.lGalleryOn?this.s.speed:0
;if(!r.lgBusy){if(this.s.download){var c
;if(c=r.s.dynamic?!1!==r.s.dynamicEl[t].downloadUrl&&(r.s.dynamicEl[t].downloadUrl||r.s.dynamicEl[t].src):'false'!==r.$items.eq(t).attr('data-download-url')&&(r.$items.eq(t).attr('data-download-url')||r.$items.eq(t).attr('href')||r.$items.eq(t).attr('data-src'))){
e('#lg-download').attr('href',c)
;r.$outer.removeClass('lg-hide-download')
}else r.$outer.addClass('lg-hide-download')}
this.$el.trigger('onBeforeSlide.lg',[s,t,i,o]);r.lgBusy=!0
;clearTimeout(r.hideBartimeout)
;'.lg-sub-html'===this.s.appendSubHtmlTo&&setTimeout(function(){
r.addHtml(t)},l);this.arrowDisable(t)
;n||(t<s?n='prev':t>s&&(n='next'));if(i){
this.$slide.removeClass('lg-prev-slide lg-current lg-next-slide')
;var d,p;if(a>2){d=t-1;p=t+1;if(0===t&&s===a-1){p=0;d=a-1
}else if(t===a-1&&0===s){p=0;d=a-1}}else{d=0;p=1}
'prev'===n?r.$slide.eq(p).addClass('lg-next-slide'):r.$slide.eq(d).addClass('lg-prev-slide')
;r.$slide.eq(t).addClass('lg-current')}else{
r.$outer.addClass('lg-no-trans')
;this.$slide.removeClass('lg-prev-slide lg-next-slide')
;if('prev'===n){this.$slide.eq(t).addClass('lg-prev-slide')
;this.$slide.eq(s).addClass('lg-next-slide')}else{
this.$slide.eq(t).addClass('lg-next-slide')
;this.$slide.eq(s).addClass('lg-prev-slide')}
setTimeout(function(){r.$slide.removeClass('lg-current')
;r.$slide.eq(t).addClass('lg-current')
;r.$outer.removeClass('lg-no-trans')},50)}if(r.lGalleryOn){
setTimeout(function(){r.loadContent(t,!0,0)},this.s.speed+50)
;setTimeout(function(){r.lgBusy=!1
;r.$el.trigger('onAfterSlide.lg',[s,t,i,o])},this.s.speed)}else{
r.loadContent(t,!0,r.s.backdropDuration);r.lgBusy=!1
;r.$el.trigger('onAfterSlide.lg',[s,t,i,o])}r.lGalleryOn=!0
;this.s.counter&&e('#lg-counter-current').text(t+1)}r.index=t}}
;t.prototype.goToNextSlide=function(e){var t=this,i=t.s.loop
;e&&t.$slide.length<3&&(i=!1)
;if(!t.lgBusy)if(t.index+1<t.$slide.length){t.index++
;t.$el.trigger('onBeforeNextSlide.lg',[t.index])
;t.slide(t.index,e,!1,'next')}else if(i){t.index=0
;t.$el.trigger('onBeforeNextSlide.lg',[t.index])
;t.slide(t.index,e,!1,'next')
}else if(t.s.slideEndAnimatoin&&!e){
t.$outer.addClass('lg-right-end');setTimeout(function(){
t.$outer.removeClass('lg-right-end')},400)}}
;t.prototype.goToPrevSlide=function(e){var t=this,i=t.s.loop
;e&&t.$slide.length<3&&(i=!1);if(!t.lgBusy)if(t.index>0){
t.index--;t.$el.trigger('onBeforePrevSlide.lg',[t.index,e])
;t.slide(t.index,e,!1,'prev')}else if(i){
t.index=t.$items.length-1
;t.$el.trigger('onBeforePrevSlide.lg',[t.index,e])
;t.slide(t.index,e,!1,'prev')
}else if(t.s.slideEndAnimatoin&&!e){
t.$outer.addClass('lg-left-end');setTimeout(function(){
t.$outer.removeClass('lg-left-end')},400)}}
;t.prototype.keyPress=function(){var t=this
;this.$items.length>1&&e(window).on('keyup.lg',function(e){
if(t.$items.length>1){if(37===e.keyCode){e.preventDefault()
;t.goToPrevSlide()}if(39===e.keyCode){e.preventDefault()
;t.goToNextSlide()}}});e(window).on('keydown.lg',function(e){
if(!0===t.s.escKey&&27===e.keyCode){e.preventDefault()
;t.$outer.hasClass('lg-thumb-open')?t.$outer.removeClass('lg-thumb-open'):t.destroy()
}})};t.prototype.arrow=function(){var e=this
;this.$outer.find('.lg-prev').on('click.lg',function(){
e.goToPrevSlide()})
;this.$outer.find('.lg-next').on('click.lg',function(){
e.goToNextSlide()})};t.prototype.arrowDisable=function(e){
if(!this.s.loop&&this.s.hideControlOnEnd){
e+1<this.$slide.length?this.$outer.find('.lg-next').removeAttr('disabled').removeClass('disabled'):this.$outer.find('.lg-next').attr('disabled','disabled').addClass('disabled')
;e>0?this.$outer.find('.lg-prev').removeAttr('disabled').removeClass('disabled'):this.$outer.find('.lg-prev').attr('disabled','disabled').addClass('disabled')
}};t.prototype.setTranslate=function(e,t,i){
this.s.useLeft?e.css('left',t):e.css({
transform:'translate3d('+t+'px, '+i+'px, 0px)'})}
;t.prototype.touchMove=function(t,i){var o=i-t
;if(Math.abs(o)>15){this.$outer.addClass('lg-dragging')
;this.setTranslate(this.$slide.eq(this.index),o,0)
;this.setTranslate(e('.lg-prev-slide'),-this.$slide.eq(this.index).width()+o,0)
;this.setTranslate(e('.lg-next-slide'),this.$slide.eq(this.index).width()+o,0)
}};t.prototype.touchEnd=function(e){var t=this
;'lg-slide'!==t.s.mode&&t.$outer.addClass('lg-slide')
;this.$slide.not('.lg-current, .lg-prev-slide, .lg-next-slide').css('opacity','0')
;setTimeout(function(){t.$outer.removeClass('lg-dragging')
;e<0&&Math.abs(e)>t.s.swipeThreshold?t.goToNextSlide(!0):e>0&&Math.abs(e)>t.s.swipeThreshold?t.goToPrevSlide(!0):Math.abs(e)<5&&t.$el.trigger('onSlideClick.lg')
;t.$slide.removeAttr('style')});setTimeout(function(){
t.$outer.hasClass('lg-dragging')||'lg-slide'===t.s.mode||t.$outer.removeClass('lg-slide')
},t.s.speed+100)};t.prototype.enableSwipe=function(){
var e=this,t=0,i=0,o=!1;if(e.s.enableSwipe&&e.doCss()){
e.$slide.on('touchstart.lg',function(i){
if(!e.$outer.hasClass('lg-zoomed')&&!e.lgBusy){
i.preventDefault();e.manageSwipeClass()
;t=i.originalEvent.targetTouches[0].pageX}})
;e.$slide.on('touchmove.lg',function(n){
if(!e.$outer.hasClass('lg-zoomed')){n.preventDefault()
;i=n.originalEvent.targetTouches[0].pageX;e.touchMove(t,i);o=!0}
});e.$slide.on('touchend.lg',function(){
if(!e.$outer.hasClass('lg-zoomed'))if(o){o=!1;e.touchEnd(i-t)
}else e.$el.trigger('onSlideClick.lg')})}}
;t.prototype.enableDrag=function(){var t=this,i=0,o=0,n=!1,s=!1
;if(t.s.enableDrag&&t.doCss()){
t.$slide.on('mousedown.lg',function(o){
if(!t.$outer.hasClass('lg-zoomed')&&!t.lgBusy&&!e(o.target).text().trim()){
o.preventDefault();t.manageSwipeClass();i=o.pageX;n=!0
;t.$outer.scrollLeft+=1;t.$outer.scrollLeft-=1
;t.$outer.removeClass('lg-grab').addClass('lg-grabbing')
;t.$el.trigger('onDragstart.lg')}})
;e(window).on('mousemove.lg',function(e){if(n){s=!0;o=e.pageX
;t.touchMove(i,o);t.$el.trigger('onDragmove.lg')}})
;e(window).on('mouseup.lg',function(r){if(s){s=!1
;t.touchEnd(o-i);t.$el.trigger('onDragend.lg')
}else(e(r.target).hasClass('lg-object')||e(r.target).hasClass('lg-video-play'))&&t.$el.trigger('onSlideClick.lg')
;if(n){n=!1
;t.$outer.removeClass('lg-grabbing').addClass('lg-grab')}})}}
;t.prototype.manageSwipeClass=function(){
var e=this.index+1,t=this.index-1
;this.s.loop&&this.$slide.length>2&&(0===this.index?t=this.$slide.length-1:this.index===this.$slide.length-1&&(e=0))
;this.$slide.removeClass('lg-next-slide lg-prev-slide')
;t>-1&&this.$slide.eq(t).addClass('lg-prev-slide')
;this.$slide.eq(e).addClass('lg-next-slide')}
;t.prototype.mousewheel=function(){var e=this
;e.$outer.on('mousewheel.lg',function(t){if(t.deltaY){
t.deltaY>0?e.goToPrevSlide():e.goToNextSlide()
;t.preventDefault()}})};t.prototype.closeGallery=function(){
var t=this,i=!1
;this.$outer.find('.lg-close').on('click.lg',function(){
sigCtl.emit("Gallery.close");t.destroy()});if(t.s.closable){
t.$outer.on('mousedown.lg',function(t){
i=!!(e(t.target).is('.lg-outer')||e(t.target).is('.lg-item ')||e(t.target).is('.lg-img-wrap'))
});t.$outer.on('mousemove.lg',function(){i=!1})
;t.$outer.on('mouseup.lg',function(o){
(e(o.target).is('.lg-outer')||e(o.target).is('.lg-item ')||e(o.target).is('.lg-img-wrap')&&i)&&(t.$outer.hasClass('lg-dragging')||t.destroy())
})}};t.prototype.destroy=function(t){var i=this;if(!t){
i.$el.trigger('onBeforeClose.lg')
;e(window).scrollTop(i.prevScrollTop)}if(t){
i.s.dynamic||this.$items.off('click.lg click.lgcustom')
;e.removeData(i.el,'lightGallery')}this.$el.off('.lg.tm')
;e.each(e.fn.lightGallery.modules,function(e){
i.modules[e]&&i.modules[e].destroy()});this.lGalleryOn=!1
;clearTimeout(i.hideBartimeout);this.hideBartimeout=!1
;e(window).off('.lg')
;window.removeEventListener('popstate',i.popStateHandler)
;e('body').removeClass('lg-on lg-from-hash')
;i.$outer&&i.$outer.removeClass('lg-visible')
;e('.lg-backdrop').removeClass('in');setTimeout(function(){
i.$outer&&i.$outer.remove();e('.lg-backdrop').remove()
;t||i.$el.trigger('onCloseAfter.lg')},i.s.backdropDuration+50)}
;e.fn.lightGallery=function(i){return this.each(function(){
if(e.data(this,'lightGallery'))try{
e(this).data('lightGallery').init()}catch(o){
console.error('lightGallery has not initiated properly')
}else e.data(this,'lightGallery',new t(this,i))})}
;e.fn.lightGallery.modules={}}()});!function(e,t){
'function'==typeof define&&define.amd?define(['jquery'],function(e){
return t(e)
}):'object'==typeof exports?module.exports=t(require('jquery')):t(jQuery)
}(this,function(e){!function(){'use strict';var t={autoplay:!1,
pause:5e3,progressBar:!0,fourceAutoplay:!1,autoplayControls:!0,
appendAutoplayControlsTo:'.lg-toolbar'},i=function(i){
this.core=e(i).data('lightGallery');this.$el=e(i)
;if(this.core.$items.length<2)return!1
;this.core.s=e.extend({},t,this.core.s);this.interval=!1
;this.fromAuto=!0;this.canceledOnTouch=!1
;this.fourceAutoplayTemp=this.core.s.fourceAutoplay
;this.core.doCss()||(this.core.s.progressBar=!1);this.init()
;return this};i.prototype.init=function(){var e=this
;e.core.s.autoplayControls&&e.controls()
;e.core.s.progressBar&&e.core.$outer.find('.lg').append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>')
;e.progress()
;e.core.s.autoplay&&e.$el.one('onSlideItemLoad.lg.tm',function(){
e.startlAuto()})
;e.$el.on('onDragstart.lg.tm touchstart.lg.tm',function(){
if(e.interval){e.cancelAuto();e.canceledOnTouch=!0}})
;e.$el.on('onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm',function(){
if(!e.interval&&e.canceledOnTouch){e.startlAuto()
;e.canceledOnTouch=!1}})};i.prototype.progress=function(){
var e=this,t,i;e.$el.on('onBeforeSlide.lg.tm',function(){
if(e.core.s.progressBar&&e.fromAuto){
t=e.core.$outer.find('.lg-progress-bar')
;i=e.core.$outer.find('.lg-progress');if(e.interval){
i.removeAttr('style');t.removeClass('lg-start')
;setTimeout(function(){
i.css('transition','width '+(e.core.s.speed+e.core.s.pause)+'ms ease 0s')
;t.addClass('lg-start')},20)}}
e.fromAuto||e.core.s.fourceAutoplay||e.cancelAuto()
;e.fromAuto=!1})};i.prototype.controls=function(){
var t=this,i='<span class="lg-autoplay-button lg-icon"></span>'
;e(this.core.s.appendAutoplayControlsTo).append(i)
;t.core.$outer.find('.lg-autoplay-button').on('click.lg',function(){
if(e(t.core.$outer).hasClass('lg-show-autoplay')){t.cancelAuto()
;t.core.s.fourceAutoplay=!1}else if(!t.interval){t.startlAuto()
;t.core.s.fourceAutoplay=t.fourceAutoplayTemp}})}
;i.prototype.startlAuto=function(){var e=this
;e.core.$outer.find('.lg-progress').css('transition','width '+(e.core.s.speed+e.core.s.pause)+'ms ease 0s')
;e.core.$outer.addClass('lg-show-autoplay')
;e.core.$outer.find('.lg-progress-bar').addClass('lg-start')
;e.interval=setInterval(function(){
e.core.index+1<e.core.$items.length?e.core.index++:e.core.index=0
;e.fromAuto=!0;e.core.slide(e.core.index,!1,!1,'next')
},e.core.s.speed+e.core.s.pause)}
;i.prototype.cancelAuto=function(){clearInterval(this.interval)
;this.interval=!1
;this.core.$outer.find('.lg-progress').removeAttr('style')
;this.core.$outer.removeClass('lg-show-autoplay')
;this.core.$outer.find('.lg-progress-bar').removeClass('lg-start')
};i.prototype.destroy=function(){this.cancelAuto()
;this.core.$outer.find('.lg-progress-bar').remove()}
;e.fn.lightGallery.modules.autoplay=i}()});!function(e,t){
'function'==typeof define&&define.amd?define(['jquery'],function(e){
return t(e)
}):'object'==typeof exports?module.exports=t(require('jquery')):t(jQuery)
}(this,function(e){!function(){'use strict';var t={fullScreen:!0
},i=function(i){this.core=e(i).data('lightGallery')
;this.$el=e(i);this.core.s=e.extend({},t,this.core.s)
;this.init();return this};i.prototype.init=function(){var e=''
;if(this.core.s.fullScreen){
if(!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled))return
;e='<span class="lg-fullscreen lg-icon"></span>'
;this.core.$outer.find('.lg-toolbar').append(e)
;this.fullScreen()}};i.prototype.requestFullscreen=function(){
var e=document.documentElement
;e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()
};i.prototype.exitFullscreen=function(){
document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.exitFullscreen&&document.exitFullscreen()
};i.prototype.fullScreen=function(){var t=this
;e(document).on('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg',function(){
t.core.$outer.toggleClass('lg-fullscreen-on')})
;this.core.$outer.find('.lg-fullscreen').on('click.lg',function(){
document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?t.exitFullscreen():t.requestFullscreen()
})};i.prototype.destroy=function(){this.exitFullscreen()
;e(document).off('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg')
};e.fn.lightGallery.modules.fullscreen=i}()});!function(e,t){
'function'==typeof define&&define.amd?define(['jquery'],function(e){
return t(e)
}):'object'==typeof exports?module.exports=t(require('jquery')):t(jQuery)
}(this,function(e){!function(){'use strict';var t={pager:!1
},i=function(i){this.core=e(i).data('lightGallery')
;this.$el=e(i);this.core.s=e.extend({},t,this.core.s)
;this.core.s.pager&&this.core.$items.length>1&&this.init()
;return this};i.prototype.init=function(){var t=this,i='',o,n,s
;t.core.$outer.find('.lg').append('<div class="lg-pager-outer"></div>')
;if(t.core.s.dynamic)for(var r=0;r<t.core.s.dynamicEl.length;r++)i+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+t.core.s.dynamicEl[r].thumb+'" /></div></span>';else t.core.$items.each(function(){
t.core.s.exThumbImage?i+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+e(this).attr(t.core.s.exThumbImage)+'" /></div></span>':i+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+e(this).find('img').attr('src')+'" /></div></span>'
});(n=t.core.$outer.find('.lg-pager-outer')).html(i)
;(o=t.core.$outer.find('.lg-pager-cont')).on('click.lg touchend.lg',function(){
var i=e(this);t.core.index=i.index()
;t.core.slide(t.core.index,!1,!0,!1)})
;n.on('mouseover.lg',function(){clearTimeout(s)
;n.addClass('lg-pager-hover')});n.on('mouseout.lg',function(){
s=setTimeout(function(){n.removeClass('lg-pager-hover')})})
;t.core.$el.on('onBeforeSlide.lg.tm',function(e,t,i){
o.removeClass('lg-pager-active')
;o.eq(i).addClass('lg-pager-active')})}
;i.prototype.destroy=function(){}
;e.fn.lightGallery.modules.pager=i}()});!function(e,t){
'function'==typeof define&&define.amd?define(['jquery'],function(e){
return t(e)
}):'object'==typeof exports?module.exports=t(require('jquery')):t(jQuery)
}(this,function(e){!function(){'use strict';var t={thumbnail:!0,
animateThumb:!0,currentPagerPosition:'middle',thumbWidth:100,
thumbHeight:'80px',thumbContHeight:100,thumbMargin:5,
exThumbImage:!1,showThumbByDefault:!0,toogleThumb:!0,
pullCaptionUp:!0,enableThumbDrag:!0,enableThumbSwipe:!0,
swipeThreshold:50,loadYoutubeThumbnail:!0,youtubeThumbSize:1,
loadVimeoThumbnail:!0,vimeoThumbSize:'thumbnail_small',
loadDailymotionThumbnail:!0},i=function(i){
this.core=e(i).data('lightGallery')
;this.core.s=e.extend({},t,this.core.s);this.$el=e(i)
;this.$thumbOuter=null;this.thumbOuterWidth=0
;this.thumbTotalWidth=this.core.$items.length*(this.core.s.thumbWidth+this.core.s.thumbMargin)
;this.thumbIndex=this.core.index
;this.core.s.animateThumb&&(this.core.s.thumbHeight='100%')
;this.left=0;this.init();return this}
;i.prototype.init=function(){var e=this
;if(this.core.s.thumbnail&&this.core.$items.length>1){
this.core.s.showThumbByDefault&&setTimeout(function(){
e.core.$outer.addClass('lg-thumb-open')},700)
;this.core.s.pullCaptionUp&&this.core.$outer.addClass('lg-pull-caption-up')
;this.build();if(this.core.s.animateThumb&&this.core.doCss()){
this.core.s.enableThumbDrag&&this.enableThumbDrag()
;this.core.s.enableThumbSwipe&&this.enableThumbSwipe()
;this.thumbClickable=!1}else this.thumbClickable=!0
;this.toogle();this.thumbkeyPress()}}
;i.prototype.build=function(){function t(e,t,s){
var r=i.core.isVideo(e,s)||{},a,l=''
;if(r.youtube||r.vimeo||r.dailymotion)if(r.youtube)a=i.core.s.loadYoutubeThumbnail?'//img.youtube.com/vi/'+r.youtube[1]+'/'+i.core.s.youtubeThumbSize+'.jpg':t;else if(r.vimeo)if(i.core.s.loadVimeoThumbnail){
a='//i.vimeocdn.com/video/error_'+n+'.jpg';l=r.vimeo[1]
}else a=t;else r.dailymotion&&(a=i.core.s.loadDailymotionThumbnail?'//www.dailymotion.com/thumbnail/video/'+r.dailymotion[1]:t);else a=t
;o+='<div data-vimeo-id="'+l+'" class="lg-thumb-item" style="width:'+i.core.s.thumbWidth+'px; height: '+i.core.s.thumbHeight+'; margin-right: '+i.core.s.thumbMargin+'px"><img src="'+a+'" /></div>'
;l=''}
var i=this,o='',n='',s,r="<div class=\"lg-thumb-outer\"><div class=\"lg-thumb lg-group\"></div></div>"
;switch(this.core.s.vimeoThumbSize){case'thumbnail_large':
n='640';break;case'thumbnail_medium':n='200x150';break
;case'thumbnail_small':n='100x75'}
i.core.$outer.addClass('lg-has-thumb')
;i.core.$outer.find('.lg').append(r)
;i.$thumbOuter=i.core.$outer.find('.lg-thumb-outer')
;i.thumbOuterWidth=i.$thumbOuter.width()
;i.core.s.animateThumb&&i.core.$outer.find('.lg-thumb').css({
width:i.thumbTotalWidth+'px',position:'relative'})
;this.core.s.animateThumb&&i.$thumbOuter.css('height',i.core.s.thumbContHeight+'px')
;if(i.core.s.dynamic)for(var a=0;a<i.core.s.dynamicEl.length;a++)t(i.core.s.dynamicEl[a].src,i.core.s.dynamicEl[a].thumb,a);else i.core.$items.each(function(o){
i.core.s.exThumbImage?t(e(this).attr('href')||e(this).attr('data-src'),e(this).attr(i.core.s.exThumbImage),o):t(e(this).attr('href')||e(this).attr('data-src'),e(this).find('img').attr('src'),o)
});i.core.$outer.find('.lg-thumb').html(o)
;(s=i.core.$outer.find('.lg-thumb-item')).each(function(){
var t=e(this),o=t.attr('data-vimeo-id')
;o&&e.getJSON('//www.vimeo.com/api/v2/video/'+o+'.json?callback=?',{
format:'json'},function(e){
t.find('img').attr('src',e[0][i.core.s.vimeoThumbSize])})})
;s.eq(i.core.index).addClass('active')
;i.core.$el.on('onBeforeSlide.lg.tm',function(){
s.removeClass('active');s.eq(i.core.index).addClass('active')})
;s.on('click.lg touchend.lg',function(){var t=e(this)
;setTimeout(function(){
if(i.thumbClickable&&!i.core.lgBusy||!i.core.doCss()){
i.core.index=t.index();i.core.slide(i.core.index,!1,!0,!1)}},50)
});i.core.$el.on('onBeforeSlide.lg.tm',function(){
i.animateThumb(i.core.index)})
;e(window).on('resize.lg.thumb orientationchange.lg.thumb',function(){
setTimeout(function(){i.animateThumb(i.core.index)
;i.thumbOuterWidth=i.$thumbOuter.width()},200)})}
;i.prototype.setTranslate=function(e){
this.core.$outer.find('.lg-thumb').css({
transform:'translate3d(-'+e+'px, 0px, 0px)'})}
;i.prototype.animateThumb=function(e){
var t=this.core.$outer.find('.lg-thumb')
;if(this.core.s.animateThumb){var i
;switch(this.core.s.currentPagerPosition){case'left':i=0;break
;case'middle':i=this.thumbOuterWidth/2-this.core.s.thumbWidth/2
;break;case'right':i=this.thumbOuterWidth-this.core.s.thumbWidth
}
this.left=(this.core.s.thumbWidth+this.core.s.thumbMargin)*e-1-i
;this.left>this.thumbTotalWidth-this.thumbOuterWidth&&(this.left=this.thumbTotalWidth-this.thumbOuterWidth)
;this.left<0&&(this.left=0);if(this.core.lGalleryOn){
t.hasClass('on')||this.core.$outer.find('.lg-thumb').css('transition-duration',this.core.s.speed+'ms')
;this.core.doCss()||t.animate({left:-this.left+'px'
},this.core.s.speed)
}else this.core.doCss()||t.css('left',-this.left+'px')
;this.setTranslate(this.left)}}
;i.prototype.enableThumbDrag=function(){
var t=this,i=0,o=0,n=!1,s=!1,r=0
;t.$thumbOuter.addClass('lg-grab')
;t.core.$outer.find('.lg-thumb').on('mousedown.lg.thumb',function(e){
if(t.thumbTotalWidth>t.thumbOuterWidth){e.preventDefault()
;i=e.pageX;n=!0;t.core.$outer.scrollLeft+=1
;t.core.$outer.scrollLeft-=1;t.thumbClickable=!1
;t.$thumbOuter.removeClass('lg-grab').addClass('lg-grabbing')}})
;e(window).on('mousemove.lg.thumb',function(e){if(n){r=t.left
;s=!0;o=e.pageX;t.$thumbOuter.addClass('lg-dragging')
;(r-=o-i)>t.thumbTotalWidth-t.thumbOuterWidth&&(r=t.thumbTotalWidth-t.thumbOuterWidth)
;r<0&&(r=0);t.setTranslate(r)}})
;e(window).on('mouseup.lg.thumb',function(){if(s){s=!1
;t.$thumbOuter.removeClass('lg-dragging');t.left=r
;Math.abs(o-i)<t.core.s.swipeThreshold&&(t.thumbClickable=!0)
}else t.thumbClickable=!0;if(n){n=!1
;t.$thumbOuter.removeClass('lg-grabbing').addClass('lg-grab')}})
};i.prototype.enableThumbSwipe=function(){
var e=this,t=0,i=0,o=!1,n=0
;e.core.$outer.find('.lg-thumb').on('touchstart.lg',function(i){
if(e.thumbTotalWidth>e.thumbOuterWidth){i.preventDefault()
;t=i.originalEvent.targetTouches[0].pageX;e.thumbClickable=!1}})
;e.core.$outer.find('.lg-thumb').on('touchmove.lg',function(s){
if(e.thumbTotalWidth>e.thumbOuterWidth){s.preventDefault()
;i=s.originalEvent.targetTouches[0].pageX;o=!0
;e.$thumbOuter.addClass('lg-dragging');n=e.left
;(n-=i-t)>e.thumbTotalWidth-e.thumbOuterWidth&&(n=e.thumbTotalWidth-e.thumbOuterWidth)
;n<0&&(n=0);e.setTranslate(n)}})
;e.core.$outer.find('.lg-thumb').on('touchend.lg',function(){
if(e.thumbTotalWidth>e.thumbOuterWidth)if(o){o=!1
;e.$thumbOuter.removeClass('lg-dragging')
;Math.abs(i-t)<e.core.s.swipeThreshold&&(e.thumbClickable=!0)
;e.left=n}else e.thumbClickable=!0;else e.thumbClickable=!0})}
;i.prototype.toogle=function(){var e=this
;if(e.core.s.toogleThumb){
e.core.$outer.addClass('lg-can-toggle')
;e.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>')
;e.core.$outer.find('.lg-toogle-thumb').on('click.lg',function(){
e.core.$outer.toggleClass('lg-thumb-open')})}}
;i.prototype.thumbkeyPress=function(){var t=this
;e(window).on('keydown.lg.thumb',function(e){if(38===e.keyCode){
e.preventDefault();t.core.$outer.addClass('lg-thumb-open')
}else if(40===e.keyCode){e.preventDefault()
;t.core.$outer.removeClass('lg-thumb-open')}})}
;i.prototype.destroy=function(){
if(this.core.s.thumbnail&&this.core.$items.length>1){
e(window).off('resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb')
;this.$thumbOuter.remove()
;this.core.$outer.removeClass('lg-has-thumb')}}
;e.fn.lightGallery.modules.Thumbnail=i}()});!function(e,t){
'function'==typeof define&&define.amd?define(['jquery'],function(e){
return t(e)
}):'object'==typeof module&&module.exports?module.exports=t(require('jquery')):t(e.jQuery)
}(this,function(e){!function(){'use strict';function t(e,t,i,o){
var n=this
;n.core.$slide.eq(t).find('.lg-video').append(n.loadVideo(i,'lg-object',!0,t,o))
;if(o)if(n.core.s.videojs)try{
videojs(n.core.$slide.eq(t).find('.lg-html5').get(0),n.core.s.videojsOptions,function(){
!n.videoLoaded&&n.core.s.autoplayFirstVideo&&this.play()})
}catch(s){console.error('Make sure you have included videojs')
}else!n.videoLoaded&&n.core.s.autoplayFirstVideo&&n.core.$slide.eq(t).find('.lg-html5').get(0).play()
}function i(e,t){
var i=this.core.$slide.eq(t).find('.lg-video-cont')
;if(!i.hasClass('lg-has-iframe')){
i.css('max-width',this.core.s.videoMaxWidth);this.videoLoaded=!0
}}function o(t,i,o){
var n=this,s=n.core.$slide.eq(i),r=s.find('.lg-youtube').get(0),a=s.find('.lg-vimeo').get(0),l=s.find('.lg-dailymotion').get(0),c=s.find('.lg-vk').get(0),d=s.find('.lg-html5').get(0),p
;if(r)r.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');else if(a)try{
$f(a).api('pause')}catch(u){
console.error('Make sure you have included froogaloop2 js')
}else if(l)l.contentWindow.postMessage('pause','*');else if(d)if(n.core.s.videojs)try{
videojs(d).pause()}catch(u){
console.error('Make sure you have included videojs')
}else d.pause()
;c&&e(c).attr('src',e(c).attr('src').replace('&autoplay','&noplay'))
;p=n.core.s.dynamic?n.core.s.dynamicEl[o].src:n.core.$items.eq(o).attr('href')||n.core.$items.eq(o).attr('data-src')
;var h=n.core.isVideo(p,o)||{}
;(h.youtube||h.vimeo||h.dailymotion||h.vk)&&n.core.$outer.addClass('lg-hide-download')
}var n={videoMaxWidth:'855px',autoplayFirstVideo:!0,
youtubePlayerParams:!1,vimeoPlayerParams:!1,
dailymotionPlayerParams:!1,vkPlayerParams:!1,videojs:!1,
videojsOptions:{}},s=function(t){
this.core=e(t).data('lightGallery');this.$el=e(t)
;this.core.s=e.extend({},n,this.core.s);this.videoLoaded=!1
;this.init();return this};s.prototype.init=function(){var n=this
;n.core.$el.on('hasVideo.lg.tm',t.bind(this))
;n.core.$el.on('onAferAppendSlide.lg.tm',i.bind(this))
;n.core.doCss()&&n.core.$items.length>1&&(n.core.s.enableSwipe||n.core.s.enableDrag)?n.core.$el.on('onSlideClick.lg.tm',function(){
var e=n.core.$slide.eq(n.core.index);n.loadVideoOnclick(e)
}):n.core.$slide.on('click.lg',function(){
n.loadVideoOnclick(e(this))})
;n.core.$el.on('onBeforeSlide.lg.tm',o.bind(this))
;n.core.$el.on('onAfterSlide.lg.tm',function(e,t){
n.core.$slide.eq(t).removeClass('lg-video-playing')})}
;s.prototype.loadVideo=function(t,i,o,n,s){
var r='',a=1,l='',c=this.core.isVideo(t,n)||{}
;o&&(a=this.videoLoaded?0:this.core.s.autoplayFirstVideo?1:0)
;if(c.youtube){l='?wmode=opaque&autoplay='+a+'&enablejsapi=1'
;this.core.s.youtubePlayerParams&&(l=l+'&'+e.param(this.core.s.youtubePlayerParams))
;r='<iframe class="lg-video-object lg-youtube '+i+'" width="560" height="315" src="//www.youtube.com/embed/'+c.youtube[1]+l+'" frameborder="0" allowfullscreen></iframe>'
}else if(c.vimeo){l='?autoplay='+a+'&api=1'
;this.core.s.vimeoPlayerParams&&(l=l+'&'+e.param(this.core.s.vimeoPlayerParams))
;r='<iframe class="lg-video-object lg-vimeo '+i+'" width="560" height="315"  src="//player.vimeo.com/video/'+c.vimeo[1]+l+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
}else if(c.dailymotion){
l='?wmode=opaque&autoplay='+a+'&api=postMessage'
;this.core.s.dailymotionPlayerParams&&(l=l+'&'+e.param(this.core.s.dailymotionPlayerParams))
;r='<iframe class="lg-video-object lg-dailymotion '+i+'" width="560" height="315" src="//www.dailymotion.com/embed/video/'+c.dailymotion[1]+l+'" frameborder="0" allowfullscreen></iframe>'
}else if(c.html5){var d=s.substring(0,1)
;'.'!==d&&'#'!==d||(s=e(s).html());r=s}else if(c.vk){
l='&autoplay='+a
;this.core.s.vkPlayerParams&&(l=l+'&'+e.param(this.core.s.vkPlayerParams))
;r='<iframe class="lg-video-object lg-vk '+i+'" width="560" height="315" src="//vk.com/video_ext.php?'+c.vk[1]+l+'" frameborder="0" allowfullscreen></iframe>'
}return r};s.prototype.loadVideoOnclick=function(e){var t=this
;if(e.find('.lg-object').hasClass('lg-has-poster')&&e.find('.lg-object').is(':visible'))if(e.hasClass('lg-has-video')){
var i=e.find('.lg-youtube').get(0),o=e.find('.lg-vimeo').get(0),n=e.find('.lg-dailymotion').get(0),s=e.find('.lg-html5').get(0)
;if(i)i.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}','*');else if(o)try{
$f(o).api('play')}catch(d){
console.error('Make sure you have included froogaloop2 js')
}else if(n)n.contentWindow.postMessage('play','*');else if(s)if(t.core.s.videojs)try{
videojs(s).play()}catch(d){
console.error('Make sure you have included videojs')
}else s.play();e.addClass('lg-video-playing')}else{
e.addClass('lg-video-playing lg-has-video')
;var r,a,l=function(i,o){
e.find('.lg-video').append(t.loadVideo(i,'',!1,t.core.index,o))
;if(o)if(t.core.s.videojs)try{
videojs(t.core.$slide.eq(t.core.index).find('.lg-html5').get(0),t.core.s.videojsOptions,function(){
this.play()})}catch(d){
console.error('Make sure you have included videojs')
}else t.core.$slide.eq(t.core.index).find('.lg-html5').get(0).play()
}
;t.core.s.dynamic?l(r=t.core.s.dynamicEl[t.core.index].src,a=t.core.s.dynamicEl[t.core.index].html):l(r=t.core.$items.eq(t.core.index).attr('href')||t.core.$items.eq(t.core.index).attr('data-src'),a=t.core.$items.eq(t.core.index).attr('data-html'))
;var c=e.find('.lg-object');e.find('.lg-video').append(c)
;if(!e.find('.lg-video-object').hasClass('lg-html5')){
e.removeClass('lg-complete')
;e.find('.lg-video-object').on('load.lg error.lg',function(){
e.addClass('lg-complete')})}}};s.prototype.destroy=function(){
this.videoLoaded=!1};e.fn.lightGallery.modules.video=s}()})
;!function(e,t){
'function'==typeof define&&define.amd?define(['jquery'],function(e){
return t(e)
}):'object'==typeof exports?module.exports=t(require('jquery')):t(jQuery)
}(this,function(e){!function(){'use strict';var t,i={scale:1,
zoom:!0,actualSize:!0,enableZoomAfter:300,
useLeftForZoom:function(){
var e=!1,t=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)
;t&&parseInt(t[2],10)<54&&(e=!0);return e}()},o=function(t){
this.core=e(t).data('lightGallery')
;this.core.s=e.extend({},i,this.core.s)
;if(this.core.s.zoom&&this.core.doCss()){this.init()
;this.zoomabletimeout=!1;this.pageX=e(window).width()/2
;this.pageY=e(window).height()/2+e(window).scrollTop()}
return this};o.prototype.init=function(){
var t=this,i='<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>'
;t.core.s.actualSize&&(i+='<span id="lg-actual-size" class="lg-icon"></span>')
;t.core.s.useLeftForZoom?t.core.$outer.addClass('lg-use-left-for-zoom'):t.core.$outer.addClass('lg-use-transition-for-zoom')
;this.core.$outer.find('.lg-toolbar').append(i)
;t.core.$el.on('onSlideItemLoad.lg.tm.zoom',function(i,o,n){
var s=t.core.s.enableZoomAfter+n
;e('body').hasClass('lg-from-hash')&&n?s=0:e('body').removeClass('lg-from-hash')
;t.zoomabletimeout=setTimeout(function(){
t.core.$slide.eq(o).addClass('lg-zoomable')},s+30)})
;var o=1,n=function(i){
var o=t.core.$outer.find('.lg-current .lg-image'),n,s,r=(e(window).width()-o.prop('offsetWidth'))/2,a=(e(window).height()-o.prop('offsetHeight'))/2+e(window).scrollTop(),l=(i-1)*(n=t.pageX-r),c=(i-1)*(s=t.pageY-a)
;o.css('transform','scale3d('+i+', '+i+', 1)').attr('data-scale',i)
;t.core.s.useLeftForZoom?o.parent().css({left:-l+'px',
top:-c+'px'
}).attr('data-x',l).attr('data-y',c):o.parent().css('transform','translate3d(-'+l+'px, -'+c+'px, 0)').attr('data-x',l).attr('data-y',c)
},s=function(){
o>1?t.core.$outer.addClass('lg-zoomed'):t.resetZoom();o<1&&(o=1)
;n(o)},r=function(i,n,r,a){var l=n.prop('offsetWidth'),c,d
;c=t.core.s.dynamic?t.core.s.dynamicEl[r].width||n[0].naturalWidth||l:t.core.$items.eq(r).attr('data-width')||n[0].naturalWidth||l
;t.core.$outer.hasClass('lg-zoomed')?o=1:c>l&&(o=(d=c/l)||2)
;if(a){t.pageX=e(window).width()/2
;t.pageY=e(window).height()/2+e(window).scrollTop()}else{
t.pageX=i.pageX||i.originalEvent.targetTouches[0].pageX
;t.pageY=i.pageY||i.originalEvent.targetTouches[0].pageY}s()
;setTimeout(function(){
t.core.$outer.removeClass('lg-grabbing').addClass('lg-grab')
},10)},a=!1
;t.core.$el.on('onAferAppendSlide.lg.tm.zoom',function(e,i){
var o=t.core.$slide.eq(i).find('.lg-image')
;o.on('dblclick',function(e){r(e,o,i)})
;o.on('touchstart',function(e){if(a){clearTimeout(a);a=null
;r(e,o,i)}else a=setTimeout(function(){a=null},300)
;e.preventDefault()})})
;e(window).on('resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom',function(){
t.pageX=e(window).width()/2
;t.pageY=e(window).height()/2+e(window).scrollTop();n(o)})
;e('#lg-zoom-out').on('click.lg',function(){
if(t.core.$outer.find('.lg-current .lg-image').length){
o-=t.core.s.scale;s()}})
;e('#lg-zoom-in').on('click.lg',function(){
if(t.core.$outer.find('.lg-current .lg-image').length){
o+=t.core.s.scale;s()}})
;e('#lg-actual-size').on('click.lg',function(e){
r(e,t.core.$slide.eq(t.core.index).find('.lg-image'),t.core.index,!0)
});t.core.$el.on('onBeforeSlide.lg.tm',function(){o=1
;t.resetZoom()});t.zoomDrag();t.zoomSwipe()}
;o.prototype.resetZoom=function(){
this.core.$outer.removeClass('lg-zoomed')
;this.core.$slide.find('.lg-img-wrap').removeAttr('style data-x data-y')
;this.core.$slide.find('.lg-image').removeAttr('style data-scale')
;this.pageX=e(window).width()/2
;this.pageY=e(window).height()/2+e(window).scrollTop()}
;o.prototype.zoomSwipe=function(){
var e=this,t={},i={},o=!1,n=!1,s=!1
;e.core.$slide.on('touchstart.lg',function(i){
if(e.core.$outer.hasClass('lg-zoomed')){
var o=e.core.$slide.eq(e.core.index).find('.lg-object')
;s=o.prop('offsetHeight')*o.attr('data-scale')>e.core.$outer.find('.lg').height()
;if((n=o.prop('offsetWidth')*o.attr('data-scale')>e.core.$outer.find('.lg').width())||s){
i.preventDefault();t={x:i.originalEvent.targetTouches[0].pageX,
y:i.originalEvent.targetTouches[0].pageY}}}})
;e.core.$slide.on('touchmove.lg',function(r){
if(e.core.$outer.hasClass('lg-zoomed')){
var a=e.core.$slide.eq(e.core.index).find('.lg-img-wrap'),l,c
;r.preventDefault();o=!0;i={
x:r.originalEvent.targetTouches[0].pageX,
y:r.originalEvent.targetTouches[0].pageY}
;e.core.$outer.addClass('lg-zoom-dragging')
;c=s?-Math.abs(a.attr('data-y'))+(i.y-t.y):-Math.abs(a.attr('data-y'))
;l=n?-Math.abs(a.attr('data-x'))+(i.x-t.x):-Math.abs(a.attr('data-x'))
;(Math.abs(i.x-t.x)>15||Math.abs(i.y-t.y)>15)&&(e.core.s.useLeftForZoom?a.css({
left:l+'px',top:c+'px'
}):a.css('transform','translate3d('+l+'px, '+c+'px, 0)'))}})
;e.core.$slide.on('touchend.lg',function(){
if(e.core.$outer.hasClass('lg-zoomed')&&o){o=!1
;e.core.$outer.removeClass('lg-zoom-dragging')
;e.touchendZoom(t,i,n,s)}})};o.prototype.zoomDrag=function(){
var t=this,i={},o={},n=!1,s=!1,r=!1,a=!1
;t.core.$slide.on('mousedown.lg.zoom',function(o){
var s=t.core.$slide.eq(t.core.index).find('.lg-object')
;a=s.prop('offsetHeight')*s.attr('data-scale')>t.core.$outer.find('.lg').height()
;r=s.prop('offsetWidth')*s.attr('data-scale')>t.core.$outer.find('.lg').width()
;if(t.core.$outer.hasClass('lg-zoomed')&&e(o.target).hasClass('lg-object')&&(r||a)){
o.preventDefault();i={x:o.pageX,y:o.pageY};n=!0
;t.core.$outer.scrollLeft+=1;t.core.$outer.scrollLeft-=1
;t.core.$outer.removeClass('lg-grab').addClass('lg-grabbing')}})
;e(window).on('mousemove.lg.zoom',function(e){if(n){
var l=t.core.$slide.eq(t.core.index).find('.lg-img-wrap'),c,d
;s=!0;o={x:e.pageX,y:e.pageY}
;t.core.$outer.addClass('lg-zoom-dragging')
;d=a?-Math.abs(l.attr('data-y'))+(o.y-i.y):-Math.abs(l.attr('data-y'))
;c=r?-Math.abs(l.attr('data-x'))+(o.x-i.x):-Math.abs(l.attr('data-x'))
;t.core.s.useLeftForZoom?l.css({left:c+'px',top:d+'px'
}):l.css('transform','translate3d('+c+'px, '+d+'px, 0)')}})
;e(window).on('mouseup.lg.zoom',function(e){if(n){n=!1
;t.core.$outer.removeClass('lg-zoom-dragging')
;if(s&&(i.x!==o.x||i.y!==o.y)){o={x:e.pageX,y:e.pageY}
;t.touchendZoom(i,o,r,a)}s=!1}
t.core.$outer.removeClass('lg-grabbing').addClass('lg-grab')})}
;o.prototype.touchendZoom=function(e,t,i,o){
var n=this,s=n.core.$slide.eq(n.core.index).find('.lg-img-wrap'),r=n.core.$slide.eq(n.core.index).find('.lg-object'),a=-Math.abs(s.attr('data-x'))+(t.x-e.x),l=-Math.abs(s.attr('data-y'))+(t.y-e.y),c=(n.core.$outer.find('.lg').height()-r.prop('offsetHeight'))/2,d=Math.abs(r.prop('offsetHeight')*Math.abs(r.attr('data-scale'))-n.core.$outer.find('.lg').height()+c),p=(n.core.$outer.find('.lg').width()-r.prop('offsetWidth'))/2,h=Math.abs(r.prop('offsetWidth')*Math.abs(r.attr('data-scale'))-n.core.$outer.find('.lg').width()+p)
;if(Math.abs(t.x-e.x)>15||Math.abs(t.y-e.y)>15){
o&&(l<=-d?l=-d:l>=-c&&(l=-c));i&&(a<=-h?a=-h:a>=-p&&(a=-p))
;o?s.attr('data-y',Math.abs(l)):l=-Math.abs(s.attr('data-y'))
;i?s.attr('data-x',Math.abs(a)):a=-Math.abs(s.attr('data-x'))
;n.core.s.useLeftForZoom?s.css({left:a+'px',top:l+'px'
}):s.css('transform','translate3d('+a+'px, '+l+'px, 0)')}}
;o.prototype.destroy=function(){var t=this
;t.core.$el.off('.lg.zoom');e(window).off('.lg.zoom')
;t.core.$slide.off('.lg.zoom');t.core.$el.off('.lg.tm.zoom')
;t.resetZoom();clearTimeout(t.zoomabletimeout)
;t.zoomabletimeout=!1};e.fn.lightGallery.modules.zoom=o}()})
;!function(e,t){
'function'==typeof define&&define.amd?define(['jquery'],function(e){
return t(e)
}):'object'==typeof exports?module.exports=t(require('jquery')):t(jQuery)
}(this,function(e){!function(){'use strict';var t={hash:!0
},i=function(i){this.core=e(i).data('lightGallery')
;this.core.s=e.extend({},t,this.core.s);if(this.core.s.hash){
this.oldHash=window.location.hash;this.init()}return this}
;i.prototype.init=function(){var t=this,i
;t.core.$el.on('onAfterSlide.lg.tm',function(e,i,o){
history.replaceState?history.replaceState(null,null,window.location.pathname+window.location.search+'#lg='+t.core.s.galleryId+'&slide='+o):window.location.hash='lg='+t.core.s.galleryId+'&slide='+o
});e(window).on('hashchange.lg.hash',function(){
i=window.location.hash;var e=parseInt(i.split('&slide=')[1],10)
;i.indexOf('lg='+t.core.s.galleryId)>-1?t.core.slide(e,!1,!1):t.core.lGalleryOn&&t.core.destroy()
})};i.prototype.destroy=function(){if(this.core.s.hash){
this.oldHash&&this.oldHash.indexOf('lg='+this.core.s.galleryId)<0?history.replaceState?history.replaceState(null,null,this.oldHash):window.location.hash=this.oldHash:history.replaceState?history.replaceState(null,document.title,window.location.pathname+window.location.search):window.location.hash=''
;this.core.$el.off('.lg.hash')}}
;e.fn.lightGallery.modules.hash=i}()});!function(e,t){
'function'==typeof define&&define.amd?define(['jquery'],function(e){
return t(e)
}):'object'==typeof exports?module.exports=t(require('jquery')):t(jQuery)
}(this,function(e){!function(){'use strict';var t={share:!0,
facebook:!0,facebookDropdownText:'Facebook',twitter:!0,
twitterDropdownText:'Twitter',googlePlus:!0,
googlePlusDropdownText:'GooglePlus',pinterest:!0,
pinterestDropdownText:'Pinterest'},i=function(i){
this.core=e(i).data('lightGallery')
;this.core.s=e.extend({},t,this.core.s)
;this.core.s.share&&this.init();return this}
;i.prototype.init=function(){
var t=this,i="<span id=\"lg-share\" class=\"lg-icon\"><ul class=\"lg-dropdown\" style=\"position: absolute;\">"
;i+=t.core.s.facebook?'<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.facebookDropdownText+'</span></a></li>':''
;i+=t.core.s.twitter?'<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.twitterDropdownText+'</span></a></li>':''
;i+=t.core.s.googlePlus?'<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.googlePlusDropdownText+'</span></a></li>':''
;i+=t.core.s.pinterest?'<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.pinterestDropdownText+'</span></a></li>':''
;i+='</ul></span>'
;this.core.$outer.find('.lg-toolbar').append(i)
;this.core.$outer.find('.lg').append('<div id="lg-dropdown-overlay"></div>')
;e('#lg-share').on('click.lg',function(){
t.core.$outer.toggleClass('lg-dropdown-active')})
;e('#lg-dropdown-overlay').on('click.lg',function(){
t.core.$outer.removeClass('lg-dropdown-active')})
;t.core.$el.on('onAfterSlide.lg.tm',function(i,o,n){
setTimeout(function(){
e('#lg-share-facebook').attr('href','https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(t.getSahreProps(n,'facebookShareUrl')||window.location.href))
;e('#lg-share-twitter').attr('href','https://twitter.com/intent/tweet?text='+t.getSahreProps(n,'tweetText')+'&url='+encodeURIComponent(t.getSahreProps(n,'twitterShareUrl')||window.location.href))
;e('#lg-share-googleplus').attr('href','https://plus.google.com/share?url='+encodeURIComponent(t.getSahreProps(n,'googleplusShareUrl')||window.location.href))
;e('#lg-share-pinterest').attr('href','http://www.pinterest.com/pin/create/button/?url='+encodeURIComponent(t.getSahreProps(n,'pinterestShareUrl')||window.location.href)+'&media='+encodeURIComponent(t.getSahreProps(n,'src'))+'&description='+t.getSahreProps(n,'pinterestText'))
},100)})};i.prototype.getSahreProps=function(e,t){var i=''
;if(this.core.s.dynamic)i=this.core.s.dynamicEl[e][t];else{
var o=this.core.$items.eq(e).attr('href'),n=this.core.$items.eq(e).data(t)
;i='src'===t&&o||n}return i};i.prototype.destroy=function(){}
;e.fn.lightGallery.modules.share=i}()});SitePackage={
order:["starter","showcase_essential","showcase_advanced","showcase_unlimited","ecommerce_essential","ecommerce_advanced","ecommerce_unlimited"],
features:{starter:{max_file_size:10485760,disk_size:5,
max_pages:5,unlimited_pages:!1,google_search_console:!0,
full_stats:!1,draft_enabled:!1,private_pages:!1,
content_protection:!1,image_protection:!1,advanced_seo:!1,
custom_rich_snippets:!1,page_draft_enabled:!1,
immediate_seo_submission:!1,mobile_landscape:!1,
mobile_tree_max_pages:50,tablet:!1,mobile_bar_extra_buttons:!1,
no_branding:!1,ads_on_editor:!0,image_mouseover:!1,
image_menu_mouseover:!1,component_presets:!0,
carousel_auto_play:!1,ssl:!0,nbr_collaborators:0,favicon:!1,
allopass_percent:50,emails:0,emails_5gb:0,nbr_free_domains:0,
uis_payment_methods:!1,uis_bank_cb:!1,uis_bank_cb_forced:[],
uin_max_emails_sent:0,uis_nbr_products:25,uis_nbr_categories:5,
uis_stock:!1,uis_coupons:!1,uis_billing:!1,uis_shipping:!1,
uis_shipping_labels:!1,uis_cart_options:!1,uis_terms:!1,
uis_mailing:!1,uis_cart_reservation:!1,UI_Developer_html:!1,
UI_Blog_comments:!1,do_follow_links:!1,no_adult_popup:!0,
member_notify_limit:100,unavailable:!1,conversion_tracking:!1,
UI_Listproducts:!1,UI_Listproducts_manual_categories:!1,
UI_Listproducts_auto_categories:!1,UI_Carousel:!0,UI_Flash:!1,
UI_Image:!0,UI_Map:!0,UI_Menu:!0,UI_Text:!0,UI_Video:!0,
UI_Comment:!1,UI_Contact:!1,UI_Music:!1,UI_Developer:!0,
UI_Gas:!0,UI_Store:!1,UI_Newsletter:!1,UI_Forum:!1,
UI_Download:!0,UI_Social:!0,UI_Member:!1,UI_Blog:!1,UI_Box:!0,
UI_Button:!0,UI_Icon:!0,UI_Calendar:!1,UI_Form:!1,UI_Faq:!1,
UI_Search:!1,UI_Cart:!1,UI_Hour:!1,UI_Draw:!0,UI_Strip:!0,
UI_Payment:!0,UI_Social2:!0,UI_Scorenco:!0,UI_Listarticles:!1},
showcase_essential:{max_file_size:10485760,disk_size:10.24,
max_pages:100,unlimited_pages:!0,google_search_console:!0,
full_stats:!1,draft_enabled:!1,private_pages:!1,
content_protection:!1,image_protection:!1,advanced_seo:!1,
custom_rich_snippets:!1,page_draft_enabled:!1,
immediate_seo_submission:!0,mobile_landscape:!1,
mobile_tree_max_pages:50,tablet:!1,mobile_bar_extra_buttons:!1,
no_branding:!1,ads_on_editor:!1,image_mouseover:!1,
image_menu_mouseover:!1,component_presets:!0,
carousel_auto_play:!1,ssl:!0,nbr_collaborators:0,favicon:!1,
allopass_percent:50,emails:1,emails_5gb:0,nbr_free_domains:1,
uis_payment_methods:!1,uis_bank_cb:!1,uis_bank_cb_forced:[],
uin_max_emails_sent:0,uis_nbr_products:25,uis_nbr_categories:5,
uis_stock:!1,uis_coupons:!1,uis_billing:!1,uis_shipping:!1,
uis_shipping_limited:!1,uis_shipping_labels:!1,
uis_cart_options:!1,uis_terms:!1,uis_mailing:!1,
uis_cart_reservation:!1,UI_Developer_html:!1,
UI_Blog_comments:!1,do_follow_links:!0,no_adult_popup:!0,
member_notify_limit:100,unavailable:!1,conversion_tracking:!1,
UI_Listproducts:!1,UI_Listproducts_manual_categories:!1,
UI_Listproducts_auto_categories:!1,UI_Carousel:!0,UI_Flash:!1,
UI_Image:!0,UI_Map:!0,UI_Menu:!0,UI_Text:!0,UI_Video:!0,
UI_Comment:!1,UI_Contact:!1,UI_Music:!1,UI_Developer:!0,
UI_Gas:!0,UI_Store:!1,UI_Newsletter:!1,UI_Forum:!1,
UI_Download:!0,UI_Social:!0,UI_Member:!1,UI_Blog:!0,UI_Box:!0,
UI_Button:!0,UI_Icon:!0,UI_Calendar:!1,UI_Form:!1,UI_Faq:!1,
UI_Search:!1,UI_Cart:!1,UI_Hour:!1,UI_Draw:!0,UI_Strip:!0,
UI_Payment:!0,UI_Social2:!0,UI_Scorenco:!0,UI_Listarticles:!0},
showcase_advanced:{max_file_size:209715200,disk_size:61.44,
max_pages:500,unlimited_pages:!0,google_search_console:!0,
full_stats:!0,draft_enabled:!0,private_pages:!0,
content_protection:!0,image_protection:!0,advanced_seo:!0,
custom_rich_snippets:!1,page_draft_enabled:!0,
immediate_seo_submission:!0,mobile_landscape:!0,
mobile_tree_max_pages:50,tablet:!0,mobile_bar_extra_buttons:!0,
no_branding:!0,ads_on_editor:!1,image_mouseover:!0,
image_menu_mouseover:!0,component_presets:!0,
carousel_auto_play:!0,ssl:!0,nbr_collaborators:5,favicon:!0,
allopass_percent:80,emails:2,emails_5gb:0,nbr_free_domains:1,
uis_payment_methods:!1,uis_bank_cb:!1,uis_bank_cb_forced:[],
uin_max_emails_sent:1e4,uis_nbr_products:25,
uis_nbr_categories:5,uis_stock:!1,uis_coupons:!1,uis_billing:!1,
uis_shipping:!1,uis_shipping_limited:!1,uis_shipping_labels:!1,
uis_cart_options:!1,uis_terms:!1,uis_mailing:!1,
uis_cart_reservation:!1,UI_Developer_html:!0,
UI_Blog_comments:!0,do_follow_links:!0,no_adult_popup:!0,
member_notify_limit:100,unavailable:!1,conversion_tracking:!1,
UI_Listproducts:!0,UI_Listproducts_manual_categories:!1,
UI_Listproducts_auto_categories:!1,UI_Carousel:!0,UI_Flash:!0,
UI_Image:!0,UI_Map:!0,UI_Menu:!0,UI_Text:!0,UI_Video:!0,
UI_Comment:!0,UI_Contact:!0,UI_Music:!0,UI_Developer:!0,
UI_Gas:!0,UI_Store:!0,UI_Newsletter:!0,UI_Forum:!0,
UI_Download:!0,UI_Social:!0,UI_Member:!0,UI_Blog:!0,UI_Box:!0,
UI_Button:!0,UI_Icon:!0,UI_Calendar:!0,UI_Form:!0,UI_Faq:!0,
UI_Search:!0,UI_Cart:!0,UI_Hour:!0,UI_Draw:!0,UI_Strip:!0,
UI_Payment:!0,UI_Social2:!0,UI_Scorenco:!0,UI_Listarticles:!0},
showcase_unlimited:{max_file_size:209715200,disk_size:102.4,
max_pages:1e4,unlimited_pages:!0,google_search_console:!0,
full_stats:!0,draft_enabled:!0,private_pages:!0,
content_protection:!0,image_protection:!0,advanced_seo:!0,
custom_rich_snippets:!0,page_draft_enabled:!0,
immediate_seo_submission:!0,mobile_landscape:!0,
mobile_tree_max_pages:50,tablet:!0,mobile_bar_extra_buttons:!0,
no_branding:!0,ads_on_editor:!1,image_mouseover:!0,
image_menu_mouseover:!0,component_presets:!0,
carousel_auto_play:!0,ssl:!0,nbr_collaborators:10,favicon:!0,
allopass_percent:80,emails:5,emails_5gb:0,nbr_free_domains:1,
uis_payment_methods:!1,uis_bank_cb:!1,uis_bank_cb_forced:[],
uin_max_emails_sent:1e5,uis_nbr_products:25,
uis_nbr_categories:5,uis_stock:!1,uis_coupons:!1,uis_billing:!1,
uis_shipping:!1,uis_shipping_limited:!1,uis_shipping_labels:!1,
uis_cart_options:!1,uis_terms:!1,uis_mailing:!1,
uis_cart_reservation:!1,UI_Developer_html:!0,
UI_Blog_comments:!0,do_follow_links:!0,no_adult_popup:!0,
member_notify_limit:100,unavailable:!1,conversion_tracking:!0,
UI_Listproducts:!0,UI_Listproducts_manual_categories:!1,
UI_Listproducts_auto_categories:!1,UI_Carousel:!0,UI_Flash:!0,
UI_Image:!0,UI_Map:!0,UI_Menu:!0,UI_Text:!0,UI_Video:!0,
UI_Comment:!0,UI_Contact:!0,UI_Music:!0,UI_Developer:!0,
UI_Gas:!0,UI_Store:!0,UI_Newsletter:!0,UI_Forum:!0,
UI_Download:!0,UI_Social:!0,UI_Member:!0,UI_Blog:!0,UI_Box:!0,
UI_Button:!0,UI_Icon:!0,UI_Calendar:!0,UI_Form:!0,UI_Faq:!0,
UI_Search:!0,UI_Cart:!0,UI_Hour:!0,UI_Draw:!0,UI_Strip:!0,
UI_Payment:!0,UI_Social2:!0,UI_Scorenco:!0,UI_Listarticles:!0},
ecommerce_essential:{max_file_size:209715200,disk_size:102.4,
max_pages:100,unlimited_pages:!0,google_search_console:!0,
full_stats:!0,draft_enabled:!0,private_pages:!0,
content_protection:!0,image_protection:!0,advanced_seo:!0,
custom_rich_snippets:!1,page_draft_enabled:!0,
immediate_seo_submission:!0,mobile_landscape:!0,
mobile_tree_max_pages:50,tablet:!0,mobile_bar_extra_buttons:!0,
no_branding:!0,ads_on_editor:!1,image_mouseover:!0,
image_menu_mouseover:!0,component_presets:!0,
carousel_auto_play:!0,ssl:!0,nbr_collaborators:5,favicon:!0,
allopass_percent:80,emails:3,emails_5gb:0,nbr_free_domains:1,
uis_payment_methods:!0,uis_bank_cb:!1,
uis_bank_cb_forced:["stripe","helloasso","sumup"],
uin_max_emails_sent:1e4,uis_nbr_products:25,
uis_nbr_categories:5,uis_stock:!1,uis_coupons:!1,uis_billing:!1,
uis_shipping:!0,uis_shipping_limited:!0,uis_shipping_labels:!1,
uis_cart_options:!0,uis_terms:!0,uis_mailing:!1,
uis_cart_reservation:!1,uis_google_shopping:!1,
UI_Developer_html:!0,UI_Blog_comments:!0,do_follow_links:!0,
no_adult_popup:!0,member_notify_limit:100,unavailable:!1,
conversion_tracking:!1,UI_Listproducts:!0,
UI_Listproducts_manual_categories:!1,
UI_Listproducts_auto_categories:!1,UI_Carousel:!0,UI_Flash:!0,
UI_Image:!0,UI_Map:!0,UI_Menu:!0,UI_Text:!0,UI_Video:!0,
UI_Comment:!0,UI_Contact:!0,UI_Music:!0,UI_Developer:!0,
UI_Gas:!0,UI_Store:!0,UI_Newsletter:!0,UI_Forum:!0,
UI_Download:!0,UI_Social:!0,UI_Member:!0,UI_Blog:!0,UI_Box:!0,
UI_Button:!0,UI_Icon:!0,UI_Calendar:!0,UI_Form:!0,UI_Faq:!0,
UI_Search:!0,UI_Cart:!0,UI_Hour:!0,UI_Draw:!0,UI_Strip:!0,
UI_Payment:!0,UI_Social2:!0,UI_Scorenco:!0,UI_Listarticles:!0},
ecommerce_advanced:{max_file_size:209715200,disk_size:204.8,
max_pages:500,unlimited_pages:!0,google_search_console:!0,
full_stats:!0,draft_enabled:!0,private_pages:!0,
content_protection:!0,image_protection:!0,advanced_seo:!0,
ads_on_editor:!1,custom_rich_snippets:!1,page_draft_enabled:!0,
immediate_seo_submission:!0,mobile_landscape:!0,
mobile_tree_max_pages:50,tablet:!0,mobile_bar_extra_buttons:!0,
no_branding:!0,image_mouseover:!0,image_menu_mouseover:!0,
component_presets:!0,carousel_auto_play:!0,ssl:!0,
nbr_collaborators:7,favicon:!0,allopass_percent:95,emails:10,
emails_5gb:0,nbr_free_domains:1,uis_payment_methods:!0,
uis_bank_cb:!0,uis_bank_cb_forced:[],uin_max_emails_sent:5e4,
uis_nbr_products:100,uis_nbr_categories:50,uis_stock:!0,
uis_billing:!0,uis_coupons:!0,uis_shipping:!0,
uis_shipping_limited:!1,uis_shipping_labels:!1,
uis_cart_options:!0,uis_terms:!0,uis_mailing:!0,
uis_cart_reservation:!1,uis_google_shopping:!0,
UI_Developer_html:!0,UI_Blog_comments:!0,do_follow_links:!0,
no_adult_popup:!0,member_notify_limit:100,unavailable:!1,
conversion_tracking:!1,UI_Listproducts:!0,
UI_Listproducts_manual_categories:!0,
UI_Listproducts_auto_categories:!0,UI_Carousel:!0,UI_Flash:!0,
UI_Image:!0,UI_Map:!0,UI_Menu:!0,UI_Text:!0,UI_Video:!0,
UI_Comment:!0,UI_Contact:!0,UI_Music:!0,UI_Developer:!0,
UI_Gas:!0,UI_Store:!0,UI_Newsletter:!0,UI_Forum:!0,
UI_Download:!0,UI_Social:!0,UI_Member:!0,UI_Blog:!0,UI_Box:!0,
UI_Button:!0,UI_Icon:!0,UI_Calendar:!0,UI_Form:!0,UI_Faq:!0,
UI_Search:!0,UI_Cart:!0,UI_Hour:!0,UI_Draw:!0,UI_Strip:!0,
UI_Payment:!0,UI_Social2:!0,UI_Scorenco:!0,UI_Listarticles:!0},
ecommerce_unlimited:{max_file_size:209715200,disk_size:307.2,
max_pages:1e4,unlimited_pages:!0,google_search_console:!0,
full_stats:!0,draft_enabled:!0,private_pages:!0,
content_protection:!0,image_protection:!0,advanced_seo:!0,
custom_rich_snippets:!0,page_draft_enabled:!0,
immediate_seo_submission:!0,mobile_landscape:!0,
mobile_tree_max_pages:50,tablet:!0,mobile_bar_extra_buttons:!0,
no_branding:!0,ads_on_editor:!1,image_mouseover:!0,
image_menu_mouseover:!0,component_presets:!0,
carousel_auto_play:!0,ssl:!0,nbr_collaborators:10,favicon:!0,
allopass_percent:95,emails:15,emails_5gb:0,nbr_free_domains:1,
uis_payment_methods:!0,uis_bank_cb:!0,uis_bank_cb_forced:[],
uin_max_emails_sent:1e5,uis_nbr_products:1e5,
uis_nbr_categories:1e4,uis_stock:!0,uis_billing:!0,
uis_coupons:!0,uis_shipping:!0,uis_shipping_limited:!1,
uis_shipping_labels:!0,uis_cart_options:!0,uis_terms:!0,
uis_mailing:!0,uis_cart_reservation:!0,uis_google_shopping:!0,
UI_Developer_html:!0,UI_Blog_comments:!0,do_follow_links:!0,
no_adult_popup:!0,member_notify_limit:100,unavailable:!1,
conversion_tracking:!0,UI_Listproducts:!0,
UI_Listproducts_manual_categories:!0,
UI_Listproducts_auto_categories:!0,UI_Carousel:!0,UI_Flash:!0,
UI_Image:!0,UI_Map:!0,UI_Menu:!0,UI_Text:!0,UI_Video:!0,
UI_Comment:!0,UI_Contact:!0,UI_Music:!0,UI_Developer:!0,
UI_Gas:!0,UI_Store:!0,UI_Newsletter:!0,UI_Forum:!0,
UI_Download:!0,UI_Social:!0,UI_Member:!0,UI_Blog:!0,UI_Box:!0,
UI_Button:!0,UI_Icon:!0,UI_Calendar:!0,UI_Form:!0,UI_Faq:!0,
UI_Search:!0,UI_Cart:!0,UI_Hour:!0,UI_Draw:!0,UI_Strip:!0,
UI_Payment:!0,UI_Social2:!0,UI_Scorenco:!0,UI_Listarticles:!0}},
disabled_mode:["draft_enabled","uis_billing","uis_stock"],
packages_with_feature:function(e){var t=[]
;for(var i in this.features)this.features[i][e]&&t.push(i)
;return t},names:function(e){return e.map(function(e){return{
starter:"Découverte",
showcase_essential:"Vitrine Essentielle",
showcase_advanced:"Vitrine Avancée",
showcase_unlimited:"Vitrine Illimitée",
ecommerce_essential:"E-commerce Essentiel",
ecommerce_advanced:"E-commerce Avancé",
ecommerce_unlimited:"E-commerce Illimité"
}[e]}).join("/")}}
;var sw_welcome_editor_viewer_cache_version="1",menuDataManagement={
addLink:function(e,t){
var i=this.component,o=Misc.deepCloneObj(t||i.data),n=v.getPageFromId(e.pageid),s=n.getCptByAnchorId(e.anchorid),r=$.map(o.links,function(t){
if(t.pageid==e.pageid){if(t.anchorid){
var i=v.getPageFromId(t.pageid).getCptByAnchorId(t.anchorid)
;return i&&s.Y()>i.Y()}return!0}return!1});r=r.lastIndexOf(!0)+1
;o.links=o.links.insertAt(e,r);n.has_anchor=!0
;if(!t||this.component.component_type&&"MobilBar"==this.component.component_type.class_name){
i.setData('links',o.links);this.refreshMenu()}return o},
removeLink:function(e,t){
var i=this.component,o=Misc.deepCloneObj(t||i.data),n=v.getPageFromId(e.pageid),s=o.links.find_index(function(t){
return t.pageid==e.pageid&&e.anchorid==t.anchorid})
;null!=s&&o.links.removeAt(s)
;0==n.getAnchors().length&&(n.has_anchor=!1)
;if(!t||this.component.component_type&&"MobilBar"==this.component.component_type.class_name){
i.setData('links',o.links);this.refreshMenu()}return o},
renameLink:function(e,t,i,o){
var n=this,s=this.component,r=o||s.data;if(null!=e){
var a=$.merge([],r.links),l=a.find_index(function(t){
return(t.pageid==i||"page_bg"==t.pageid)&&t.anchorid==e})
;if(null!=l){a[l].anchorid=t
;if(!o||this.component.component_type&&"MobilBar"==this.component.component_type.class_name){
s.setData({links:a});this.refreshMenu()}}}return r},
cleanupLinks:function(e){
var t=this,i=this.component,o=e||i.data,n=$.grep(o.links||i.getData("links")||[],function(e){
var t=v.getPageFromId(e.pageid)
;return t&&(!e.anchorid||!t.download_children||t.getCptByAnchorId(e.anchorid))||"page_bg"==e.pageid
})
;if(e)o.links=n;else if(0==n.length&&o.pages_to_show_on)i.parent.removeCpt(i);else{
n=$.map(n,function(e){return{pageid:e.pageid,anchorid:e.anchorid
}});i.setData("links",n)}if(o.pages_to_show_on){
var s=$.grep(o.pages_to_show_on,function(e){
return v.getPageFromId(e)})
;e?o.pages_to_show_on=s:0==s.length&&"custom"==o.show_mode?i.parent.removeCpt(i):i.setData("pages_to_show_on",s)
}e||this.refreshMenu();return o},
shouldDisplayOnPage:function(e,t){
var i=this.cpt||this.component,o=t||i.data,n=!1
;if("subpages"==o.show_mode){var s
;(o.links||i.getData("links")||[]).each(function(t){
t.pageid==e.pageid?n=!0:e!=v.page_bg&&e.childrenPages().find(function(e){
return e.pageid==t.pageid})&&(n=!0)})
}else"custom"==o.show_mode?o.pages_to_show_on.include(e.pageid)&&(n=!0):n=!0
;return n},shouldListPage:function(e,t){
var i=this.component,o=t||i.data,n=e.page||e,s=o.links||i.getData("links")||[],r=!1
;s.each(function(e){
n.pageid!=e.pageid||e.anchorid||!v.draft&&'function'==typeof n.isDraft&&n.isDraft()||(r=!0)
});return r},shouldListAnchor:function(e,t){
var i=this.component,o,n=(t||i.data).links||i.getData("links")||[],s=!1
;n.each(function(t){
e.anchorid!=t.anchorid||""!=e.pageid&&t.pageid!=e.pageid||(s=!0)
});return s}},Property=Class.create()
;Property.handlePropertyNode=function(e,t){
$("input[type=text]",t).rememberFocus().each(function(t,i){
var o=i.name;i.value=e[o];var n=statusController
;$(i).change(function(){var t=e.validate(o,i.value);if(t){
i.value=e[o];n.message(t,"error")}})})
;$("input[type=checkbox]",t).each(function(t,i){var o=i.name
;i.checked=e[o];$(i).change(function(){e.validate(o,i.checked)})
})};Property.childToNode=function(subnode,n,cpt,self){
var node_attributes={};if(n.nodeType){if(1==n.nodeType){
for(var att,i=0,atts=n.attributes;i<atts.length;i++){att=atts[i]
;node_attributes[att.nodeName]=att.nodeValue}
node_attributes.tagName=n.tagName
;node_attributes.propertyNode=$(n)
;var xml_properties_to_object=function(e,t){
$(t).each(function(t,i){if(!i.nodeType||1==i.nodeType){
if(1==i.nodeType){
for(var o={},n,t=0,s=i.attributes;t<s.length;t++)o[(n=s[t]).nodeName]=n.nodeValue
;o.tagName=i.tagName;if(i.childNodes&&i.childNodes.length){
o.child_nodes=[]
;xml_properties_to_object(o.child_nodes,i.childNodes)}}else o=i
;e.push(o)}})};if(n.childNodes.length){
node_attributes.child_nodes=[]
;xml_properties_to_object(node_attributes.child_nodes,n.childNodes)
}}}else node_attributes=n
;cpt.ui&&'function'==typeof cpt.ui.blockSelectorToolbarUpdateAttributes&&cpt.ui.blockSelectorToolbarUpdateAttributes(node_attributes)
;if("function"==typeof node_attributes["if"]?node_attributes["if"].call():"string"==typeof node_attributes["if"]?eval(node_attributes["if"]):(node_attributes["if"],
1)){
var container=subnode.addClass("propContainer"),help=node_attributes.help
;help&&container.attr("help",help.replace(/\&apos;/g,"'")).addClass("helpEditor")
;node_attributes.feature&&container.attr("data-feature",node_attributes.feature).addClass("helpEditor")
;var title=node_attributes.title
;title&&$("<span class='propertyTitle'>"+title+" </span>").appendTo(container)
;if(node_attributes.block_selector_toolbar){
node_attributes.block_selector_toolbar=$.parseJSON(node_attributes.block_selector_toolbar)
;!node_attributes.block_selector_toolbar.help&&node_attributes.help&&(node_attributes.block_selector_toolbar.help=node_attributes.help)
}
var element=propertyConverter["convert"+node_attributes.tagName.capitalize()].call(propertyConverter,cpt,node_attributes,self)
;element.defaultAction&&"true"==node_attributes.default_action&&(self.defaultAction=element.defaultAction)
;if(node_attributes.context_menu){var o={
name:node_attributes.context_menu,action:element.defaultAction,
propertyNode:n}
;node_attributes.context_menu_icon&&(o.icon=node_attributes.context_menu_icon)
;self.contextMenu.push(o)}
if(element.block_selector_toolbar_items){
'function'==typeof cpt.ui.blockSelectorToolbarItemFilter&&element.block_selector_toolbar_items.each(function(e){
e["if"]=e["if"]||cpt.ui.blockSelectorToolbarItemFilter(node_attributes)||function(){
return!0}})
;cpt.block_selector_toolbar[self.xml[0].nodeName]=cpt.block_selector_toolbar[self.xml[0].nodeName].concat(element.block_selector_toolbar_items)
}element.node&&container.append(element.node)
;title&&$(element.node).addClass("property_select_with_title")
;node_attributes.attributes instanceof Object&&Object.keys(node_attributes.attributes).each(function(e){
"class"==e?$(element.node).addClass(node_attributes.attributes[e]):$(element.node).attr(e,node_attributes.attributes[e])
});element.inserted&&setTimeout(function(){
element.inserted(element)})
;node_attributes.inserted&&setTimeout(function(){
node_attributes.inserted(element)});return element}}
;Property.prototype={initialize:function(e){this.xml=e
;0==this.xml.length&&(this.xml=[{}]);this.radioCounter=0
;this.checkboxCounter=0;this.inputCounter=0;this.optionCounter=0
;this.contextMenu=[]},getDefault:function(conf){
var config=conf||{},data={},val,get_default_from_node=function(node){
try{
var default_key=config.default_from_pre_made_section?"default_from_pre_made_section":"default",default_value=$(node).attr(default_key)||$(node).attr("default")
;eval("val="+default_value);data[$(node).attr("name")]=val
}catch(ex){
dbg.error("Can't get property default value for "+$(node).attr("name")+" with "+$(node).attr("default"))
}};$(this.xml[0].childNodes).each(function(e,t){
1!=t.nodeType||!$(t).attr("name")||!$(t).attr("default")||config.for_preset&&$(t).attr('ignore_for_preset')?1==t.nodeType&&"tabs"==t.nodeName?$(t.children).each(function(e,t){
$(t.children).each(function(e,t){
1!=t.nodeType||!$(t).attr("name")||!$(t).attr("default")||config.for_preset&&$(t).attr('ignore_for_preset')||get_default_from_node(t)
})
}):1==t.nodeType&&"bloc"==t.nodeName&&$(t.children).each(function(e,t){
1!=t.nodeType||!$(t).attr("name")||!$(t).attr("default")||config.for_preset&&$(t).attr('ignore_for_preset')||get_default_from_node(t)
}):get_default_from_node(t)});return data},toNode:function(e){
var t=$("<ul></ul>");historyController.offRecords(()=>{
this.xml[0].nodeName?$(this.xml[0].childNodes).each((i,o)=>{
if(1==o.nodeType){
var n=$("<"+($(o).attr('node')||"li")+($(o).attr('class')?' class="'+$(o).attr('class')+'"':"")+" />")
;Property.childToNode(n,o,e,this);t.append(n)}
}):this.xml.each(i=>{if(i.tagName){
var o=$("<"+(i.node||"li")+(i["class"]?' class="'+i["class"]+'"':"")+" />")
;Property.childToNode(o,i,e,this);t.append(o)}})});return t},
defaultAction:function(){}};var Content=Class.create()
;Content.prototype={initialize:function(e){this.htmlText=e},
toNode:function(e){
var t=$("<div class='componentBody'>"+this.htmlText+"</div>"),i=this
;t.find("[uitype=editor],[uitype=captcha],[uitype=member],[uitype=recaptcha]").each(function(t,o){
i["_convert_"+$(o).attr("uitype")].call(i,e,$(o))});return t},
_convert_editor:function(e,t){if("editor"==v.mode){
t.on("mousedown","a",function(e){var t=e.currentTarget
;if(t.getAttribute("onclick")&&!e.shiftKey){
t.setAttribute("disabled_onclick",t.getAttribute("onclick"))
;t.removeAttribute("onclick")
;statusController.message("Pour \u003cb\u003etester un lien\u003c/b\u003e, appuyez sur la \u003cb\u003etouche MAJ\u003c/b\u003e pendant que vous cliquez.")
}});t.on('mousedown',function(i){
t.find("a[disabled_onclick]").each(function(e,t){
t.setAttribute("onclick",t.getAttribute("disabled_onclick"))
;t.removeAttribute("disabled_onclick")})
;if(!i.ctrlKey&&!i.metaKey)if(blockSelector.selected_cpts.include(e)){
if(!t.hasClass("editor_initialized")){
var o=t.data('editor_params')
;"string"==typeof o&&t.data('editor_params',JSON.parse(o))
;editorController.select(e,t,i);return!1}}else{
if(e.option_for('locked'))return!1;blockSelector.selectCpts([e])
}})}},_convert_captcha:function(e,t){var i=Math.random()
;t.append("<img width=110 height=36 alt='Captcha' src=/simple_captcha/simple_captcha?simple_captcha_key="+i+" captcha_key="+i+" class='captcha_img'><input type='text' maxlength='3' name='captcha' class='site_textbox captcha_field'>")
},_convert_recaptcha:function(e,t){var i=this,o=300
;Apis.recaptcha(function(){
var n=$('<div class="g-recaptcha"></div>').appendTo(t.empty().off("recaptacha:resize"))
;t.data("size",t.width()<o?"compact":"normal")
;grecaptcha.render(n.get(0),{
sitekey:"6LcJdRsUAAAAAPqaSNTZhmt4hwDixDODWLrvABqi",
theme:'light',size:t.data("size"),callback:function(){
document.getElementById("body").scrollTo(0,0)}})
;t.on("recaptacha:resize",function(){var n
;(t.width()<o?"compact":"normal")!=t.data("size")&&i._convert_recaptcha(e,t)
})})},_convert_member:function(e,t){
var i="<div class=member_unlogged><div style='text-align:center'><span class='_ui18_do_member_signin site_button'>Se connecter</span> ou <span class='_ui18_do_member_signup site_link'>S'inscrire</span></div>"
;t.attr("noregisterform")||(i+="<div class=_ui18_member_signup><table><tr><td class=mbm_name>Nom à afficher</td><td><input type=text class='site_textbox' name='member_display_name' autocomplete='name'/></td></tr><tr><td>Email</td><td><input type=text class='site_textbox' name='member_email' autocomplete='email'/></td></tr><tr class=mbm_password><td>Mot de passe</td><td><input type=password class='site_textbox' name='member_new_password' autocomplete='new-password'/></td></tr><tr class=mbm_nl><td>Newsletter</td><td><input type=checkbox name='newsletter' id=newsletter_label/><label for=newsletter_label>J'accepte de recevoir des newsletters</label></td></tr><tr class='mbm_captcha'><td>Recopiez ce code</td><td><div uitype='captcha'></div></td></tr></table></div>")
;i+="<div class=_ui18_member_signin><table><tr><td>Email</td><td><input type=text class='site_textbox' name='member_email' autocomplete='email'/></td></tr><tr><td>Mot de passe</td><td><input type=password class='site_textbox' name='member_password' autocomplete='current-password'/></td></tr></table></div></div>"
;t.append(i)
;"true"==t.attr("nocaptcha")?t.find(".mbm_captcha").remove():this._convert_captcha(e,$("[uitype=captcha]",t))
;"true"==t.attr('noregisterform')&&t.find('._ui18_do_member_signup').on('click',function(){
MemberController.tb_show("signup")})
;"false"==t.attr("password")&&t.find(".mbm_password").remove()
;"true"==t.attr("real_name")&&t.find(".mbm_name").text("Nom")
;return t}};var componentParent={getVersion:function(){
return'Page'==this.type?this.version:this.getPage().version},
displayComponents:function(){var e=this
;this.load_animation_script();var t=[]
;this.cpts.each(function(e){try{t.push(e.display())}catch(i){
dbg.error("Error showing component",i.name,i.message)}})
;$.when.apply($,t).then(function(){
e.all_cpts_displayed.resolve()});return this.all_cpts_displayed
},getComponentById:function(e,t){var i=this.getVersion()
;if(i.is_sections_system&&"Page"==this.type)return this.getCptByIdWithSections(e)
;var o=this.cpts
;t&&i.getBackgroundCptParent()&&(o=o.concat(i.getBackgroundCptParent().cpts))
;return o.find(function(t){return t.getId()==e})},
updateCountType:function(){var e=this;this.countType={}
;this.cpts.each(function(t){
e.countType[t.component_type_id]=e.countType[t.component_type_id]+1||1
})},load_animation_script:function(){
this.cpts.find(e=>e.shouldBeAnimatedWithAos())&&Aos.load()},
pushComponent:function(e){
e.id&&this.cpts.include(e)&&dbg.error("Pushing a cpt already present",{
cpt_pushed:e,version:v});this.cpts.push(e)},
validatesAddCpt:function(cpt,silent){let page=this.getPage()
;if(ComponentType.hasUrl(cpt.component_type_id)){
if(page==page.version.page_bg){
silent||statusController.message(sprintf("Vous ne pouvez pas ajouter un module %1$s sur la page d'arrière-plan.<br>Veuillez ajouter ce module sur une autre page...",cpt.component_type.title),"warning",null,5)
;return!1}if(page==page.version.pages_fg[0]){
silent||statusController.message(sprintf("Vous ne pouvez pas ajouter un module %1$s sur la page d'accueil.<br>Veuillez ajouter ce module sur une autre page...",cpt.component_type.title),"warning",null,5)
;return!1}if(page.countCptWithUrl()>0){
silent||statusController.message("Ce module ne peut pas être ajouté sur cette page (elle ne peut pas contenir plus d'1 module Blog, Forum ou Boutique).\u003cbr\u003eVeuillez ajouter ce module sur une autre page...","warning",null,5)
;return!1}if(['Header','Footer'].include(this.type)){
silent||statusController.message(sprintf("Ce module ne peut pas être ajouté dans %1$s<br/>Veuillez l'ajouter dans une section de page.",this.getI18n().type_article),"warning",null,5)
;return!1}}
var ui_global=cpt.component_type&&'undefined'!=eval("typeof "+cpt.component_type.class_name)&&eval(cpt.component_type.class_name)
;if(ui_global&&'function'==typeof ui_global.validateNewCpt){
var validation=ui_global.validateNewCpt(cpt)
;if(0==validation.success){
statusController.message(validation.message,"warning",null,5)
;return!1}}return!0},addCpt:function(e,t){
var i=this.getPage(),o=!i.version.is_sections_system&&footer.highlight(),n
;if(!i.version.is_sections_system&&i.version.selectedPageFg&&(5==e||footer.highlight()&&footer.page_for_blocks()==this.getVersion().page_bg)&&this.selectable)return i.version.page_bg.addCpt(e,t)
;var s=new Cpt(this,e),r=$.Deferred()
;ComponentType.loadType(s.component_type_id).then(e=>{
s.component_type=e;if(this.validatesAddCpt(s)){
e.simplified_placement_when_adding&&$.extend(t,s.calcXWFullContainer())
;o&&historyController.startInGroup();this.pushCptWithHistory(s)
;if(o){n=Misc.deepCloneObj(t);t.y=t.y-footer.Y()}
s.setStartupXYZWH=t;s.create();s.onDisplayed.done(()=>{
this.setHasChanged(s);i.version.checkHeight()
;if(o)if(s.hasOptions("footer")){footer.set_cpt(s,{add:o})
;historyController.stopInGroup()
}else historyController.offRecords(()=>{
blockSelector.move_cpts({move_action:!0,cpts_to_move:[s],
dst_page:this.getVersion().getSelectedPage(),coord:n})})})
;r.resolve(s)}else r.reject(s)});return r},
removeCpt:function(e,t){var i=$.Deferred()
;blockSelector.selected_cpts.include(e)&&blockSelector.deselect()
;e.data.anchorid&&sigCtl.emit("Page.rmAnchor",{
pageid:this.getPage().pageid,anchorid:e.data.anchorid})
;this.rmCpt(e,t).done(()=>{this.getVersion().checkHeight()
;i.resolve()});e.setHasChanged();return i},getPage:function(){
return"Section"==this.type?this.page:"Page"==this.type?this:this.getVersion().getSelectedPage()
},getParentContentNode:function(){
return"Page"!=this.type?this.$content:this.node},
moveToTop:function(e){var t=this.zOnTop();e.Z()<=t&&e.setXYZWH({
z:t+2})},setAllZIndeces:function(){this.cpts.sort(function(e,t){
return e.Z()-t.Z()})
;for(var e=(this.maxZIndex-this.minZIndex)/2+this.minZIndex-this.cpts.length,t=0;t<this.cpts.length;t++){
this.cpts[t].setXYZWH({z:e});e+=2}return{min:this.cpts[0].Z(),
max:this.cpts[this.cpts.length-1].Z()}},getCpts:function(){
if(this.getVersion().is_sections_system&&"Page"==this.type){
var e=new Array;this.sections.each(function(t){
t.cpts.each(function(t){e.push(t)})})
;return e=e.concat(this.getLayoutCpts())}return this.cpts},
getVisibleCpts:function(e,t){var i=e
;e=e||deviceController.device;var o=this.getVersion()
;"mobile_tree"==e&&(e="mobile")
;return this.getCpts().filter(function(n){var s
;o.is_sections_system?['Header','Footer'].include(n.parent.type)&&t&&(s=!1):n.option_for("footer")&&(s=!t&&(o.getSelectedPage()!=o.page_bg&&"unique"==o.getSelectedPage().footer.select?o.getSelectedPage()==n.parent:n.device_coordinates[e]&&1==n.device_coordinates[e].v))
;if(s==undefined){
s=n.device_coordinates[e]&&1==n.device_coordinates[e].v
;"mobile_tree"==i&&n.device_coordinates.desktop&&!n.device_coordinates.desktop.v&&(s=!1)
}return s})},cptsSortByY:function(){
return this.getCpts().sort(function(e,t){
return e.Y()>t.Y()?1:t.Y()>e.Y()?-1:0})},
moveToBottom:function(e){
for(var t=e.Z(),i=this.cpts.length-1;i>=0;i--)t>this.cpts[i].Z()&&(t=this.cpts[i].Z())
;if(t!=e.Z()){t<=this.minZIndex+2&&(t=this.setAllZIndeces().min)
;e.setXYZWH({z:t-2})}},zOnTop:function(){
for(var e=0,t=this.cpts.length-1;t>=0;t--){
var i=this.cpts[t].Z();e<i&&(e=i)}
e>=this.maxZIndex-1&&(e=this.setAllZIndeces().max)
;return 0==e?(this.maxZIndex-this.minZIndex)/2+this.minZIndex:e
},historyRemoveCpt:function(e){
blockSelector.selected_cpts.find(function(t){return e==t
})&&blockSelector.deselect();e.node.detach();this.unpushCpt(e)
;this.childrenToDelete.push(e);e.remove()
;this.getVersion().checkHeight()},historyAddCpt:function(e){
this.getParentContentNode().append(e.node);this.pushCpt(e)
;this.childrenToDelete.remove(e);e.updateShow("force_event")
;blockSelector.selected_cpts.find(function(t){return e==t
})||blockSelector.select(blockSelector.getLastCptsNodeSelected())
;this.getVersion().checkHeight()}},pageChildren={
getId:function(){if(this.id)return this.id
;this.tmp_id||this.uniqId();return this.tmp_id},
uniqId:function(){var e,t=this.getLowerType()
;if(this.id)e=t+"_"+this.id;else{
this.tmp_id=this.tmp_id||$.fn.genId(t+"_tmp_");e=this.tmp_id}
return e},getLowerType:function(){return this.type.toLowerCase()
}},UI={initialize:function(){},onDisplay:function(e){},
onSelect:function(){},onDeselect:function(){},
onPropertyChanged:function(){},advancedProperties:function(){},
onMoveZStart:function(){},onMoveZStop:function(){},
onMoveStart:function(){},onMove:function(){},
onMoveStop:function(){},onResizeStart:function(){},
onResize:function(){},onResizeStop:function(){},
onRotateStart:function(){},onRotateStop:function(){},
onRemove:function(){},onShow:function(){},onSave:function(){},
onHide:function(){},onHashChange:function(){},
onFontFamilyUpdate:function(){},_isEmpty:function(){},
innerSize:function(){},_innerOffset:function(){},
onDeviceChanged:function(){}
},UI_List={},ComponentType=Class.create()
;ComponentType.types_with_simplified_placement_when_adding=['UI_Store','UI_Blog','UI_Listarticles','UI_Listproducts','UI_Calendar']
;ComponentType.includes={};ComponentType.init=function(e){
this.component_types={};this.ordered_ids=[]
;this.component_type_id_with_url=[];for(var t=0;t<e.length;t++){
this.ordered_ids.push(e[t].id)
;this.component_types[e[t].id]=e[t]
;e[t].with_url&&this.component_type_id_with_url.push(e[t].id)
;ComponentType.types_with_simplified_placement_when_adding.include(e[t].class_name)&&(this.component_types[e[t].id].simplified_placement_when_adding=!0)
}};ComponentType.loadType=function(component_type_id){
var component_type=this.component_types[component_type_id]
;component_type||(component_type=this.getType(component_type_id))
;if(!component_type.loading){component_type.loading=$.Deferred()
;var deferreds=[];$.when(component_type.xml||$.ajax({type:"GET",
url:cdn_url(component_type.path),dataType:"text",
name:sprintf("Téléchargement des modules %1$s",component_type.title.capitalize()),
cache:!0,simple_ajax:!0})).done(function(dom){
var parsed_dom=$.parseXML(dom.replace(/^\<\!DOCTYPE html\>\s*/,""))
;Object.extend(component_type,new ComponentType(parsed_dom,component_type.class_name))
;var newClass=Class.create()
;Object.extend(newClass.prototype,UI)
;Object.extend(newClass.prototype,UI_List[component_type.class_name])
;var last_loaded_dependencie=$.Deferred().resolve()
;component_type.dependencies.each(function(e){
last_loaded_dependencie=last_loaded_dependencie.then(function(){
load_dependencie_deferred=e()
;deferreds.push(load_dependencie_deferred)
;return load_dependencie_deferred})})
;UI_List[component_type.class_name]=newClass
;window[component_type.class_name]&&window[component_type.class_name].init&&window[component_type.class_name].init()
;if(window[component_type.class_name]){
var h_cpt=window[component_type.class_name]
;h_cpt.init&&h_cpt.init()
;h_cpt.preset_data&&sigCtl.connect("Theme.changed",function(){
$(".accept_bg").length?presetController.loadDefaultPresets(component_type,null,!0,h_cpt.preset_data.default_presets):$(".ui_"+component_type.short_class_name()+"_custom_css").remove()
;$.each(eval(component_type.class_name).cpts,function(e,t){
t.uiCall("onDisplay",t.componentBody)})})}
$.when.apply($,deferreds).then(function(){
presetController.componentTypeLoaded(component_type.id)
;component_type.loading.resolve(component_type)})
}).fail(function(e,t){
statusController.message(sprintf("Le module %1$s n'a pas pu être téléchargé.<br/>Merci de vérifier votre connexion Internet, vos Firewall, Proxy ou antivirus et d'essayer de nouveau.",component_type.title.toLowerCase()).capitalize(),"error",1e4,5)
;component_type.loading.reject(component_type)})
;delete component_type.xml}return component_type.loading}
;ComponentType.hasUrl=function(e){
return this.component_type_id_with_url.includes(e)}
;ComponentType.getType=function(e){var t=this,i=null
;$.each(this.component_types,function(o,n){
n.class_name==e&&(i=t.component_types[o])});return i}
;ComponentType.prototype={initialize:function(dom,class_name){
dom=$(dom);this.metadata=dom.find("metadata")
;0==$("ui_css_"+class_name).length&&$("#ui_css").appendStyle(dom.find("style").text()).addClass("ui_css ui_css_"+class_name)
;eval(dom.find("script").text())
;dom.find("includes link").each(function(){
$(document.createElement('link')).attr({type:"text/css",
rel:"stylesheet",media:"screen"
}).prependTo($("head")).attr("href",$(this).attr("href"))})
;this.width=100;this.height=100
;var max=this.metadata.find("max");max[0]&&(this.max={
fg:parseInt(max.attr("fg")),bg:parseInt(max.attr("bg")),
url:max.attr("url")?parseInt(max.attr("url")):null})
;var size=this.metadata.find("size");if(size[0]){
var w=size.attr("width"),h=size.attr("height")
;w&&(this.width=parseInt(w));h&&(this.height=parseInt(h))}
this.content=new Content(dom.find("content").text())
;this.properties=new Property(dom.find("properties"))
;this.design_properties=new Property(dom.find("design_properties"))
;this.preset_properties=new Property(dom.find("preset_properties"))
;this.remove_warning=this.metadata.find("remove_warning").html()
;this.counter=0;this.default_preset=null
;this.includes_loaded=$.Deferred().resolve();var self=this
;dom.find("includes").children().each(function(){var e=$(this)
;if(e.attr("mode")==undefined||site.mode==e.attr("mode")){
var t=e.attr("href")
;(window.app_version||"").match(/SiteEditor/)&&(t=t.replace('/fr-','/').replace('/en-','/'))
;var i=t.replace(/clearcache=\d+/,"")
;if("script"==e[0].tagName)self.includes_loaded=self.includes_loaded.then(function(){
return ComponentType.includes[i]=ComponentType.includes[i]||$.getScript(t).then(function(){
console.log("Loaded "+class_name+" include:"+t)})});else{
if("stylesheet"!=e[0].tagName)throw"invalid tag name (should be script or stylesheet)"+e[0].tagName
;self.includes_loaded=self.includes_loaded.then(function(){
ComponentType.includes[t]=ComponentType.includes[t]||function(){
var e=$.Deferred()
;loadCSS(t,document.getElementById("ui_css"),null,function(){
console.log("Loaded "+class_name+" include:"+t);e.resolve()})
;return e}()})}}});this.dependencies=[]
;dom.find('dependencies *').each(function(e,t){
switch(t.tagName){case'component_type':
self.dependencies.push(function(){
var e=ComponentType.loadType(ComponentType.getType($(t).attr('name')).id)
;return e.then?e.then(function(){
console.log('component_type dependencie is loaded ('+$(t).attr('name')+')')
}):$.Deferred().resolve(e)});break;case'default_presets':
self.dependencies.push(function(){
return $.Deferred().resolve(presetController.loadDefaultPresets(ComponentType.getType($(t).attr('name'))))
});break;default:
throw"invalid tag name (should be component_type or default_presets)"+t.tagName
}})},getCounter:function(){return this.counter++},
presetCss:function(){
this.presetCssReq||(this.presetCssReq=$.ajax({
url:"/assets/precompile/cpts/"+this.class_name.replace(/^UI_/,"").toLowerCase()+"/preset.css?clearcache=5",
dataType:"text",name:"Chargement des styles de module"}))
;return this.presetCssReq},get_default_preset:function(){
var e=null;if(this.default_preset)e=this.default_preset;else{
var t=presetController.find_all(this.id)[presetController.find_all(this.id).length-1]
;t&&(e=t.cssid.match(/\d+/)[0])}return e},
short_class_name:function(){
return this.class_name.replace("UI_","").toLowerCase()},
hasUrl:function(){
return ComponentType.component_type_id_with_url.includes(this.id)
}};var GraphicalType=Class.create()
;Object.extend(GraphicalType,{loaded:$.Deferred()})
;GraphicalType.init=function(){this.graphical_types={}
;this.available=!0;if($(".accept_bg").length){var e;[{
key:"button",name:"Bouton",class_name:"GT_Button",
default_presets:["default_1","default_2"],
preset_preview:'<div class="preset_demo"><div class="button_block site_button"><a class="button_content"><span class="uibtn_icon_wrapper"><i class="custom_icon material-icons">grade</i></span><span class="prev_t button_text">Bouton</span></a></div></div>',
properties:[],design_properties:[],preset_properties:[{
tagName:"tabs",display:"Normal|Au survol",
trigger_function:"onTabChanged",
tabs_data:"[{'state': 'normal'}, {'state': 'hovered'}]",
child_nodes:[{tagName:"tab",child_nodes:[{tagName:"options",
name:"options",sortable:"false",uniq:"true",design:"true",
options:[{name:"opt_colors",title:"Couleurs",
icon:"format_color_fill",properties:[{tagName:"colors",
name:"colors",
display:"Texte|Icône|Fond",
colspan:"1|1|1",
'default':"['theme_text_color', 'theme_text_color', 'theme_color']",
'class':"colorsButton",elts:"3",options:[{hide_alpha:!0},{},{
allow_gradient:!0}]}]},{name:"opt_fontsize_text",
title:"Taille du texte",icon:"t_font-size",properties:[{
tagName:"slider",name:"text_font_size",'default':"12",
minimum:"9",maximum:"50"}]},{name:"opt_font_weight",
title:"Epaisseur de l'écriture",icon:"font_download",properties:[{
tagName:"select",name:"font_weight",values:'300|400|700',
display:'*Clair|Normal|Gras',
'default':'400'}]},{name:"opt_fontsize_icon",
title:"Taille de l'icône",icon:"modify_height",properties:[{
tagName:"slider",name:"icon_font_size",'default':"12",
minimum:"9",maximum:"50"}]},{name:"opt_alignment",
title:"Alignements",icon:"t_paragraph-center",
properties:[{tagName:"label",text:"Alignement horizontal"
},{tagName:"select",name:"horizontal_alignment",
values:"start|middle|end",
display:"Gauche|Centré|Droite",
'default':"'middle'"},{tagName:"html",val:"[br]"},{
tagName:"label",text:"Alignement vertical"},{
tagName:"select",name:"vertical_alignment",
values:"start|middle|end",
display:"En haut|Centré|En bas",
'default':"'middle'"},{tagName:"html",val:"[br]"},{
tagName:"label",text:"Position de l'icône"},{tagName:"select",
name:"icon_position",values:"left|top|right|bottom",
display:"Sur la gauche|Au-dessus|Sur la droite|Au-dessous",
'default':"'left'"}]},{name:"opt_icon_placement",
title:"Emplacement de l'icône",icon:"icon_placement",
properties:[{tagName:"select",name:"icon_placement",
values:"text|out",display:"Texte|Séparé",
'default':"'text'"}]},{name:"opt_shadow",title:"Ombre",
icon:"flip_to_back",properties:[{tagName:"box_shadow",
name:"shadow",
'default':"[45, 5, 0, 5, 'rgba(0,0,0,0.4)', false, '3px 3px 5px 0px rgba(0,0,0,0.4)']"
}]},{name:"opt_border",title:"Bordure",icon:"border_all",
properties:[{tagName:"border",name:"border",
'default':"({'all':[3, 'solid', 'theme_color', true], 'bt':[3, 'solid', 'theme_color', false], 'br':[3, 'solid', 'theme_color', false], 'bb':[3, 'solid', 'theme_color', false], 'bl':[3, 'solid', 'theme_color', false]})"
}]},{name:"opt_radius",title:"Arrondi",
icon:"rounded_corner",properties:[{tagName:"radius",
name:"radius",'default':"[3, 3, 3, 3]",minimum:"0",maximum:"100"
}]},{name:"opt_padding",title:"Marges internes",icon:"padding",
properties:[{tagName:"space",name:"padding",
'default':"[5,5,5,5]"}]},{name:"opt_bullet_colors",
title:"Couleur des notifications",icon:"format_color_fill",
properties:[{tagName:"colors",name:"bullet_colors",
display:"Texte|Fond",colspan:"1|1",
'default':"['rgba(255,255,255,1)', 'rgba(236, 47, 47,1)']",
'class':"colorsBullet",elts:"2",options:[{hide_alpha:!0},{}]}]
},{name:"opt_css",title:"CSS personnalisé",icon:"t_code",
properties:[{tagName:"inputCss",name:"css",'default':"''"}]}]}]
},{tagName:"tab",child_nodes:[{tagName:"options",
name:"hover_options",sortable:"false",uniq:"true",design:"true",
options:[{name:"opt_colors",title:"Couleurs",
icon:"format_color_fill",properties:[{tagName:"colors",
name:"colors",
display:"Texte|Icône|Fond",
colspan:"1|1|1",
'default':"['theme_text_color', 'theme_text_color', 'theme_color']",
'class':"colorsButton",elts:"3",options:[{hide_alpha:!0},{},{
allow_gradient:!0}]}]},{name:"opt_shadow",
title:"Ombre",icon:"flip_to_back",properties:[{
tagName:"box_shadow",name:"shadow",
'default':"[45, 5, 0, 5, 'rgba(0,0,0,0.4)', false, '3px 3px 5px 0px rgba(0,0,0,0.4)']"
}]},{name:"opt_border",title:"Bordure",icon:"border_all",
properties:[{tagName:"border",name:"border",
'default':"({'all':[3, 'solid', 'theme_color', true], 'bt':[3, 'solid', 'theme_color', false], 'br':[3, 'solid', 'theme_color', false], 'bb':[3, 'solid', 'theme_color', false], 'bl':[3, 'solid', 'theme_color', false]})"
}]},{name:"opt_radius",title:"Arrondi",
icon:"rounded_corner",properties:[{tagName:"radius",
name:"radius",'default':"[3, 3, 3, 3]",minimum:"0",maximum:"100"
}]}]}]}]}]},{key:"link",name:"Lien",
class_name:"GT_Link",default_presets:["default_1","default_2"],
preset_preview:'<div class="preset_demo"><a>Lien</a></div>',
properties:[],design_properties:[],preset_properties:[{
tagName:"tabs",display:"Normal|Au survol",
trigger_function:"onTabChanged",
tabs_data:"[{'state': 'normal'}, {'state': 'hovered'}]",
child_nodes:[{tagName:"tab",child_nodes:[{tagName:"options",
name:"options",sortable:"false",uniq:"true",design:"true",
options:[{name:"opt_colors",title:"Couleurs",
icon:"format_color_fill",properties:[{tagName:"colors",
name:"colors",display:"Texte|Fond",
colspan:"1|1",
'default':"['theme_color', 'rgba(255,255,255,0)']",
'class':"colorsButton",elts:"2",options:[{hide_alpha:!0},{}]}]
},{name:"opt_link_decoration",title:"Style des liens",
icon:"eye",properties:[{tagName:"select",name:"link_decoration",
values:"none|underline|overline|line-through",
display:"Aucun|Souligné|Surlignement|Barré",
'default':"'none'"}]},{name:"opt_css",
title:"CSS personnalisé",icon:"t_code",properties:[{
tagName:"inputCss",name:"css",'default':"'node{a: b;}'"}]}]}]},{
tagName:"tab",child_nodes:[{tagName:"options",
name:"hover_options",sortable:"false",uniq:"true",design:"true",
options:[{name:"opt_colors",title:"Couleurs",
icon:"format_color_fill",properties:[{tagName:"colors",
name:"colors",display:"Texte|Fond",
colspan:"1|1",
'default':"['theme_color', 'rgba(255,255,255,0)']",
'class':"colorsButton",elts:"2",options:[{hide_alpha:!0},{}]}]
},{name:"opt_link_decoration",title:"Style des liens",
icon:"eye",properties:[{tagName:"select",name:"link_decoration",
values:"none|underline|overline|line-through",
display:"Aucun|Souligné|Surlignement|Barré",
'default':"'none'"}]}]}]}]}],default_options:{},
theme_config_values:{options:["colors"]},included:["backdrop"]
},{key:"textbox",name:"Champ texte",
class_name:"GT_Textbox",
default_presets:["default_1","default_2"],
preset_preview:'<div class="preset_demo"><input class="site_textbox" type="text" value="Valeur"></div>',
properties:[],design_properties:[],preset_properties:[{
tagName:"tabs",display:"Normal|Saisie",
trigger_function:"onTabChanged",
tabs_data:"[{'state': 'normal'}, {'state': 'focused'}]",
child_nodes:[{tagName:"tab",child_nodes:[{tagName:"options",
name:"options",sortable:"false",uniq:"true",design:"true",
options:[{name:"opt_colors",title:"Couleurs",
icon:"format_color_fill",properties:[{tagName:"colors",
name:"colors",
display:"Texte|Texte d'aide|Fond",
colspan:"1|1|1",
'default':"['rgba(0,0,0,1)', 'rgb(117,117,117)', 'rgba(255,255,255,1)']",
'class':"colorsButton",elts:"3",options:[{hide_alpha:!0},{
hide_alpha:!0},{}]}]},{name:"opt_border",title:"Bordure",
icon:"border_all",properties:[{tagName:"border",name:"border",
'default':"({'all':[3, 'solid', 'theme_color', true], 'bt':[3, 'solid', 'theme_color', false], 'br':[3, 'solid', 'theme_color', false], 'bb':[3, 'solid', 'theme_color', false], 'bl':[3, 'solid', 'theme_color', false]})"
}]},{name:"opt_radius",title:"Arrondi",
icon:"rounded_corner",properties:[{tagName:"radius",
name:"radius",'default':"[3, 3, 3, 3]",minimum:"0",maximum:"100"
}]},{name:"opt_padding",title:"Marges internes",icon:"padding",
properties:[{tagName:"space",name:"padding",
'default':"[5,5,5,5]"}]},{name:"opt_shadow",
title:"Ombre",icon:"flip_to_back",properties:[{
tagName:"box_shadow",name:"shadow",
'default':"[45, 5, 0, 5, 'rgba(0,0,0,0.4)', false, '3px 3px 5px 0px rgba(0,0,0,0.4)']"
}]},{name:"opt_align",title:"Alignement du texte",
icon:"format_align_center",properties:[{tagName:"select",
name:"text_align",values:"left|center|right",
display:"Gauche|Centré|Droite",
'default':"'left'"}]},{name:"opt_css",
title:"CSS personnalisé",icon:"t_code",properties:[{
tagName:"inputCss",name:"css",'default':"'node{a: b;}'"}]}]}]},{
tagName:"tab",child_nodes:[{tagName:"options",
name:"focus_options",sortable:"false",uniq:"true",design:"true",
options:[{name:"opt_colors",title:"Couleurs",
icon:"format_color_fill",properties:[{tagName:"colors",
name:"colors",
display:"Texte|Texte d'aide|Fond",
colspan:"1|1|1",
'default':"['rgba(0,0,0,1)', 'rgb(117,117,117)', 'rgba(255,255,255,1)']",
'class':"colorsButton",elts:"3",options:[{hide_alpha:!0},{
hide_alpha:!0},{}]}]},{name:"opt_border",title:"Bordure",
icon:"border_all",properties:[{tagName:"border",name:"border",
'default':"({'all':[3, 'solid', 'theme_color', true], 'bt':[3, 'solid', 'theme_color', false], 'br':[3, 'solid', 'theme_color', false], 'bb':[3, 'solid', 'theme_color', false], 'bl':[3, 'solid', 'theme_color', false]})"
}]},{name:"opt_radius",title:"Arrondi",
icon:"rounded_corner",properties:[{tagName:"radius",
name:"radius",'default':"[3, 3, 3, 3]",minimum:"0",maximum:"100"
}]},{name:"opt_shadow",title:"Ombre",
icon:"flip_to_back",properties:[{tagName:"box_shadow",
name:"shadow",
'default':"[45, 5, 0, 5, 'rgba(0,0,0,0.4)', false, '3px 3px 5px 0px rgba(0,0,0,0.4)']"
}]}]}]}]}],theme_config_values:{options:["colors"]}},{
key:"searchbox",name:"Champ de recherche",
class_name:"GT_Searchbox",default_presets:["default_1"],
preset_preview:'<div class="preset_demo"><div class="site_search"><input class="site_textbox" type="text" placeholder="Rechercher..."><div class="site_button"><span class="fonticon" style="display: inline;"><i class="custom_icon material-icons">search</i></span><span></span></div></div></div>',
properties:[],design_properties:[],preset_properties:[{
tagName:"tabs",
display:"Normal|Saisie|Au survol",
trigger_function:"onTabChanged",
tabs_data:"[{'state': 'normal'}, {'state': 'focused'}, {'state': 'hovered'}]",
child_nodes:[{tagName:"tab",child_nodes:[{tagName:"options",
name:"options",sortable:"false",uniq:"true",design:"true",
options:[{name:"opt_colors",title:"Couleur d'arrière-plan",
icon:"format_color_fill",properties:[{tagName:"colors",
name:"colors",colspan:"1",'default':"['rgba(255,255,255,0)']",
'class':"colorsButton",elts:"1"}]},{name:"opt_border",
title:"Bordure",icon:"border_all",properties:[{
tagName:"border",name:"border",
'default':"({'all':[3, 'solid', 'theme_color', true], 'bt':[3, 'solid', 'theme_color', false], 'br':[3, 'solid', 'theme_color', false], 'bb':[3, 'solid', 'theme_color', false], 'bl':[3, 'solid', 'theme_color', false]})"
}]},{name:"opt_radius",title:"Arrondi",
icon:"rounded_corner",properties:[{tagName:"radius",
name:"radius",'default':"[3, 3, 3, 3]",minimum:"0",maximum:"100"
}]},{name:"opt_padding",title:"Marges internes",icon:"padding",
properties:[{tagName:"space",name:"padding",
'default':"[5,5,5,5]"}]},{name:"opt_shadow",
title:"Ombre",icon:"flip_to_back",properties:[{
tagName:"box_shadow",name:"shadow",
'default':"[45, 5, 0, 5, 'rgba(0,0,0,0.4)', false, '3px 3px 5px 0px rgba(0,0,0,0.4)']"
}]},{name:"opt_spacing",
title:"Espace entre le champ et le bouton",
icon:"bi_arrow",properties:[{tagName:"slider",name:"spacing",
minimum:"0",maximum:"100",'default':"0"}]},{name:"opt_css",
title:"CSS personnalisé",icon:"t_code",properties:[{
tagName:"inputCss",name:"css",'default':"'node{a: b;}'"}]}]},{
tagName:"html",val:"[hr]"},{tagName:"options",
name:"input_options",text:"Ajouter un style pour le champ",
sortable:"false",uniq:"true",design:"true",options:[{
name:"opt_colors",title:"Couleurs",
icon:"format_color_fill",properties:[{tagName:"colors",
name:"colors",
display:"Texte|Texte d'aide|Fond",
colspan:"1|1|1",
'default':"['rgba(0,0,0,1)', 'rgb(117,117,117)', 'rgba(255,255,255,1)']",
'class':"colorsButton",elts:"3",options:[{hide_alpha:!0},{
hide_alpha:!0},{}]}]},{name:"opt_border",title:"Bordure",
icon:"border_all",properties:[{tagName:"border",name:"border",
'default':"({'all':[3, 'solid', 'theme_color', true], 'bt':[3, 'solid', 'theme_color', false], 'br':[3, 'solid', 'theme_color', false], 'bb':[3, 'solid', 'theme_color', false], 'bl':[3, 'solid', 'theme_color', false]})"
}]},{name:"opt_radius",title:"Arrondi",
icon:"rounded_corner",properties:[{tagName:"radius",
name:"radius",'default':"[3, 3, 3, 3]",minimum:"0",maximum:"100"
}]},{name:"opt_fontsize_text",title:"Taille du texte",
icon:"t_font-size",properties:[{tagName:"slider",
name:"text_font_size",'default':"12",minimum:"9",maximum:"50"}]
},{name:"opt_padding",title:"Marges internes",icon:"padding",
properties:[{tagName:"space",name:"padding",
'default':"[5,5,5,5]"}]},{name:"opt_shadow",
title:"Ombre",icon:"flip_to_back",properties:[{
tagName:"box_shadow",name:"shadow",
'default':"[45, 5, 0, 5, 'rgba(0,0,0,0.4)', false, '3px 3px 5px 0px rgba(0,0,0,0.4)']"
}]},{name:"opt_align",title:"Alignement du texte",
icon:"format_align_center",properties:[{tagName:"select",
name:"text_align",values:"left|center|right",
display:"Gauche|Centré|Droite",
'default':"'left'"}]},{name:"opt_css",
title:"CSS personnalisé",icon:"t_code",properties:[{
tagName:"inputCss",name:"css",'default':"'node{a: b;}'"}]}]},{
tagName:"html",val:"[hr]"},{tagName:"options",
name:"button_options",
text:"Ajouter un style pour le bouton",sortable:"false",
uniq:"true",design:"true",options:[{name:"opt_colors",
title:"Couleurs",icon:"format_color_fill",properties:[{
tagName:"colors",name:"colors",
display:"Texte|Fond",colspan:"1|1",
'default':"['theme_text_color', 'theme_color']",
'class':"colorsButton",elts:"2",options:[{hide_alpha:!0},{}]}]
},{name:"opt_fontsize_text",title:"Taille du texte",
icon:"t_font-size",properties:[{tagName:"slider",
name:"text_font_size",'default':"12",minimum:"9",maximum:"50"}]
},{name:"opt_shadow",title:"Ombre",icon:"flip_to_back",
properties:[{tagName:"box_shadow",name:"shadow",
'default':"[45, 5, 0, 5, 'rgba(0,0,0,0.4)', false, '3px 3px 5px 0px rgba(0,0,0,0.4)']"
}]},{name:"opt_border",title:"Bordure",icon:"border_all",
properties:[{tagName:"border",name:"border",
'default':"({'all':[3, 'solid', 'theme_color', true], 'bt':[3, 'solid', 'theme_color', false], 'br':[3, 'solid', 'theme_color', false], 'bb':[3, 'solid', 'theme_color', false], 'bl':[3, 'solid', 'theme_color', false]})"
}]},{name:"opt_radius",title:"Arrondi",
icon:"rounded_corner",properties:[{tagName:"radius",
name:"radius",'default':"[3, 3, 3, 3]",minimum:"0",maximum:"100"
}]},{name:"opt_padding",title:"Marges internes",icon:"padding",
properties:[{tagName:"space",name:"padding",
'default':"[5,5,5,5]"}]},{name:"opt_css",
title:"CSS personnalisé",icon:"t_code",properties:[{
tagName:"inputCss",name:"css",'default':"'node{a: b;}'"}]}]}]},{
tagName:"tab",child_nodes:[{tagName:"options",
name:"focus_options",sortable:"false",uniq:"true",design:"true",
options:[{name:"opt_colors",title:"Couleurs",
icon:"format_color_fill",properties:[{tagName:"colors",
name:"colors",
display:"Texte|Texte d'aide|Fond",
colspan:"1|1|1",
'default':"['rgba(0,0,0,1)', 'rgb(117,117,117)', 'rgba(255,255,255,1)']",
'class':"colorsButton",elts:"3",options:[{hide_alpha:!0},{
hide_alpha:!0},{}]}]},{name:"opt_border",title:"Bordure",
icon:"border_all",properties:[{tagName:"border",name:"border",
'default':"({'all':[3, 'solid', 'theme_color', true], 'bt':[3, 'solid', 'theme_color', false], 'br':[3, 'solid', 'theme_color', false], 'bb':[3, 'solid', 'theme_color', false], 'bl':[3, 'solid', 'theme_color', false]})"
}]},{name:"opt_radius",title:"Arrondi",
icon:"rounded_corner",properties:[{tagName:"radius",
name:"radius",'default':"[3, 3, 3, 3]",minimum:"0",maximum:"100"
}]},{name:"opt_shadow",title:"Ombre",
icon:"flip_to_back",properties:[{tagName:"box_shadow",
name:"shadow",
'default':"[45, 5, 0, 5, 'rgba(0,0,0,0.4)', false, '3px 3px 5px 0px rgba(0,0,0,0.4)']"
}]},{name:"opt_css",title:"CSS personnalisé",icon:"t_code",
properties:[{tagName:"inputCss",name:"css",
'default':"'node{a: b;}'"}]}]}]},{tagName:"tab",child_nodes:[{
tagName:"options",name:"hover_options",sortable:"false",
uniq:"true",design:"true",options:[{name:"opt_colors",
title:"Couleurs",icon:"format_color_fill",properties:[{
tagName:"colors",name:"colors",
display:"Texte|Fond",colspan:"1|1",
'default':"['theme_text_color', 'theme_color']",
'class':"colorsButton",elts:"2",options:[{hide_alpha:!0},{}]}]
},{name:"opt_shadow",title:"Ombre",icon:"flip_to_back",
properties:[{tagName:"box_shadow",name:"shadow",
'default':"[45, 5, 0, 5, 'rgba(0,0,0,0.4)', false, '3px 3px 5px 0px rgba(0,0,0,0.4)']"
}]},{name:"opt_border",title:"Bordure",icon:"border_all",
properties:[{tagName:"border",name:"border",
'default':"({'all':[3, 'solid', 'theme_color', true], 'bt':[3, 'solid', 'theme_color', false], 'br':[3, 'solid', 'theme_color', false], 'bb':[3, 'solid', 'theme_color', false], 'bl':[3, 'solid', 'theme_color', false]})"
}]},{name:"opt_radius",title:"Arrondi",
icon:"rounded_corner",properties:[{tagName:"radius",
name:"radius",'default':"[3, 3, 3, 3]",minimum:"0",maximum:"100"
}]},{name:"opt_css",title:"CSS personnalisé",icon:"t_code",
properties:[{tagName:"inputCss",name:"css",
'default':"'node{a: b;}'"}]}]}]}]}],default_options:{},
theme_config_values:{options:["colors"]}},{key:"backdrop",
name:"Fonds des modules",no_version:!0,
class_name:"GT_Backdrop",
default_presets:["default_1","default_2","default_3","default_4"],
preset_preview:'<div class="preset_demo"><div class="gt_backdrop_title uit_ttltxt"><div class="c"><div><p>Titre</p></div></div></div><div class="uit_ct uit_cttxt gt_backdrop_content"><div class="c"><div><p>Contenu... <a class="site_link">Lien</a></p></div></div></div></div>',
properties:[],design_properties:[],preset_properties:[{
tagName:"options",name:"options_background",sortable:'false',
uniq:'true',design:'true',options:[{tagName:"option",
name:"opt_margin",
"if":"cpt.data && Object.keys(cpt.data.options_background||{}).find(function(k){return cpt.data.options_background[k].name=='opt_margin' || cpt.data.options_background[k].type=='opt_margin'})",
title:"Marge externe",icon:"margin",properties:[{
tagName:"space",name:"margin",'default':'[5,5,5,5]'}]},{
tagName:"option",name:"opt_padding",title:"Marges internes",
icon:"padding",properties:[{tagName:"space",name:"padding",
'default':'[5,5,5,5]'}]},{tagName:"option",name:"opt_bg_color",
title:"Couleur d'arrière-plan",icon:"format_color_fill",
properties:[{tagName:"colors",name:"bg_color",
'default':"['rgba(255,255,255,1)']",elts:"1"}]},{
tagName:"option",name:"opt_border",title:"Bordure",
icon:"border_all",properties:[{tagName:"border",name:"border",
'default':"({'all':[3, 'solid', 'theme_color', true], 'bt':[3, 'solid', 'theme_color', false], 'br':[3, 'solid', 'theme_color', false], 'bb':[3, 'solid', 'theme_color', false], 'bl':[3, 'solid', 'theme_color', false]})"
}]},{tagName:"option",name:"opt_radius",title:"Arrondi",
icon:"rounded_corner",properties:[{tagName:"radius",
name:"radius",'default':"[5,5,5,5]",minimum:0,maximum:50}]},{
tagName:"option",name:"opt_shadow",title:"Ombre",
icon:"flip_to_back",properties:[{tagName:"box_shadow",
name:"shadow",
'default':"[45, 5, 0, 5, 'rgba(0,0,0,0.4)', false, '3px 3px 5px 0px rgba(0,0,0,0.4)']"
}]},{tagName:"option",name:"opt_gt_link",title:"Lien",
icon:"t_link",
"if":"cpt.data && !Object.keys(cpt.data.options_paragraph||{}).find(function(k){return cpt.data.options_paragraph[k].name=='opt_link' || cpt.data.options_paragraph[k].type=='opt_link'})",
properties:[{tagName:"trigger_preset",name:"gt_link",
gt_type:"link"}]},{tagName:"option",name:"opt_selection",
title:"Couleur de surlignage",icon:"select_all",properties:[{
tagName:"colors",name:"selection_color",
'default':"['rgba(255, 255, 255, 1)', 'rgba(50, 151, 253, 1)']",
elts:"2",colspan:"1|1",display:"Texte|Fond"
}]},{tagName:"option",name:"opt_css",title:"CSS personnalisé",
icon:"t_code",properties:[{tagName:"inputCss",name:"css",
'default':"'node{a: b;}'"}]}]},{tagName:"html",val:"[hr]"},{
tagName:"options",name:"options_title",
text:"Ajouter un style pour le titre",sortable:'false',uniq:'true',
design:'true',options:[{tagName:"option",name:"opt_margin",
title:"Marge externe",icon:"margin",properties:[{
tagName:"space",name:"margin",'default':'[5,5,5,5]'}]},{
tagName:"option",name:"opt_padding",title:"Marges internes",
icon:"padding",properties:[{tagName:"space",name:"padding",
'default':'[5,5,5,5]'}]},{tagName:"option",name:"opt_font_size",
title:"Taille d'écriture",icon:"sort_by_alpha",properties:[{
tagName:"slider",name:"font_size",'default':'16',minimum:'10',
maximum:'150'}]},{tagName:"option",name:"opt_line_height",
title:"Interligne (em)",icon:"line_height",
properties:[{tagName:"slider",name:"line_height",'default':'1',
minimum:'0.4',maximum:'3',step:'0.01'}]},{tagName:"option",
name:"opt_font_weight",title:"Epaisseur de l'écriture",
icon:"font_download",allow_optional:'true',properties:[{
tagName:"select",name:"font_weight",values:'300|400|700',
display:'Clair|Normal|Gras',
'default':'400'}]},{tagName:"option",name:"opt_bg_color",
title:"Couleur d'arrière-plan",icon:"format_color_fill",
properties:[{tagName:"colors",name:"bg_color",
'default':"['rgba(101, 101, 101, 1)']",elts:'1'}]},{
tagName:"option",name:"opt_text_color",
title:"Couleur du texte",icon:"format_color_text",
properties:[{tagName:"colors",name:"text_color",
'default':"['rgba(255,255,255,1)']",elts:'1',options:[{
hide_alpha:!0}]}]},{tagName:"option",name:"opt_border",
title:"Bordure",icon:"border_all",properties:[{
tagName:"border",name:"border",
'default':"({'all':[3, 'solid', 'theme_color', true], 'bt':[3, 'solid', 'theme_color', false], 'br':[3, 'solid', 'theme_color', false], 'bb':[3, 'solid', 'theme_color', false], 'bl':[3, 'solid', 'theme_color', false]})"
}]},{tagName:"option",name:"opt_radius",title:"Arrondi",
icon:"rounded_corner",properties:[{tagName:"radius",
name:"radius",'default':"[5,5,5,5]",minimum:0,maximum:50}]},{
tagName:"option",name:"opt_align",title:"Alignement",
icon:"format_align_center",properties:[{tagName:"align",
name:"align",with_justify:"true",'default':"'left'"}]},{
tagName:"option",name:"opt_css",title:"CSS personnalisé",
icon:"t_code",properties:[{tagName:"inputCss",name:"css",
'default':"'node{a: b;}'"}]}]},{tagName:"html",val:"[hr]"},{
tagName:"options",name:"options_paragraph",
text:"Ajouter un style de paragraphe",sortable:'false',
uniq:'true',design:'true',options:[{tagName:"option",
name:"opt_margin",title:"Marge externe",icon:"margin",
properties:[{tagName:"space",name:"margin",'default':'[5,5,5,5]'
}]},{tagName:"option",name:"opt_padding",
title:"Marges internes",icon:"padding",properties:[{
tagName:"space",name:"padding",'default':'[5,5,5,5]'}]},{
tagName:"option",name:"opt_font_size",title:"Taille d'écriture",
icon:"sort_by_alpha",properties:[{tagName:"slider",
name:"font_size",'default':'16',minimum:'10',maximum:'150'}]},{
tagName:"option",name:"opt_line_height",
title:"Interligne (em)",icon:"line_height",
properties:[{tagName:"slider",name:"line_height",'default':'1',
minimum:'0.5',maximum:'3',step:'0.01'}]},{tagName:"option",
name:"opt_items_spacing",title:"Espacement (rem)",
icon:"spacing",properties:[{tagName:"slider",
name:"items_spacing",'default':'0',minimum:'0',maximum:'5',
step:'0.1'}]},{tagName:"option",name:"opt_font_weight",
title:"Epaisseur de l'écriture",icon:"font_download",
allow_optional:'true',properties:[{tagName:"select",
name:"font_weight",values:'300|400|700',
display:'*Clair|Normal|Gras',
'default':'400'}]},{tagName:"option",name:"opt_bg_color",
title:"Couleur d'arrière-plan",icon:"format_color_fill",
properties:[{tagName:"colors",name:"bg_color",
'default':"['rgba(101, 101, 101, 1)']",elts:'1'}]},{
tagName:"option",name:"opt_text_color",
title:"Couleur du texte",icon:"format_color_text",
properties:[{tagName:"colors",name:"text_color",
'default':"['rgba(255,255,255,1)']",elts:'1',options:[{
hide_alpha:!0}]}]},{tagName:"option",name:"opt_border",
title:"Bordure",icon:"border_all",properties:[{
tagName:"border",name:"border",
'default':"({'all':[3, 'solid', 'theme_color', true], 'bt':[3, 'solid', 'theme_color', false], 'br':[3, 'solid', 'theme_color', false], 'bb':[3, 'solid', 'theme_color', false], 'bl':[3, 'solid', 'theme_color', false]})"
}]},{tagName:"option",name:"opt_radius",title:"Arrondi",
icon:"rounded_corner",properties:[{tagName:"radius",
name:"radius",'default':"[5,5,5,5]",minimum:0,maximum:50}]},{
tagName:"option",name:"opt_align",title:"Alignement",
icon:"format_align_center",properties:[{tagName:"align",
name:"align",with_justify:"true",'default':"'left'"}]},{
tagName:"option",name:"opt_link",title:"Liens",
icon:"t_link",
"if":"cpt.data && cpt.data.options_paragraph && Object.keys(cpt.data.options_paragraph).find(function(k){return cpt.data.options_paragraph[k].name=='opt_link' || cpt.data.options_paragraph[k].type=='opt_link'})",
properties:[{tagName:"links",name:"links",
'default':"['underline', 'theme_color']"}]},{tagName:"option",
name:"opt_css",title:"CSS personnalisé",icon:"t_code",
properties:[{tagName:"inputCss",name:"css",
'default':"'node{a: b;}'"}]}]}],default_options:{},
theme_config_values:{options:["colors"]},includes:["link"]},{
key:"buttonsgroup",name:"Groupe de boutons",
class_name:"GT_Buttonsgroup",default_presets:["default_1"],
preset_preview:'<div class="preset_demo"><ul><li class="selected gtbuttons_group_li site_pagination">1</li><li class="gtbuttons_group_li site_pagination">2</li><li class="gtbuttons_group_li site_pagination">3</li><li class="gtbuttons_group_li site_pagination">4</li><li class="gtbuttons_group_li site_pagination">&gt;</li></ul></div>',
properties:[],design_properties:[],preset_properties:[{
tagName:"tabs",
display:"Normal|Au survol|Sélectionné",
trigger_function:"onTabChanged",
tabs_data:"[{'state': 'normal'}, {'state': 'hovered'}, {'state': 'selected'}]",
child_nodes:[{tagName:"tab",child_nodes:[{tagName:"options",
name:"options",sortable:'false',uniq:'true',design:'true',
options:[{name:"opt_colors",title:"Couleurs",
icon:"format_color_fill",properties:[{tagName:"colors",
name:"colors",display:"Texte|Fond",
colspan:"1|1",'default':"['theme_text_color', 'theme_color']",
'class':"colorsButton",elts:"2",options:[{hide_alpha:!0},{
allow_gradient:!0}]}]},{name:"opt_fontsize",
title:"Taille du texte",icon:"t_font-size",properties:[{
tagName:"slider",name:"fontsize",'default':"12",minimum:"9",
maximum:"20"}]},{name:"opt_shadow",title:"Ombre",
icon:"flip_to_back",properties:[{tagName:"box_shadow",
name:"shadow",
'default':"[45, 5, 0, 5, 'rgba(0,0,0,0.4)', false, '3px 3px 5px 0px rgba(0,0,0,0.4)']"
}]},{name:"opt_border",title:"Bordure",icon:"border_all",
properties:[{tagName:"border",name:"border",
'default':"({'all':[3, 'solid', 'theme_color', true], 'bt':[3, 'solid', 'theme_color', false], 'br':[3, 'solid', 'theme_color', false], 'bb':[3, 'solid', 'theme_color', false], 'bl':[3, 'solid', 'theme_color', false]})"
}]},{name:"opt_radius",title:"Arrondi",
icon:"rounded_corner",properties:[{tagName:"radius",
name:"radius",'default':"[3, 3, 3, 3]",minimum:"0",maximum:"100"
}]},{tagName:"option",name:"opt_margin",title:"Marge externe",
icon:"margin",properties:[{tagName:"space",name:"margin",
'default':'[5,5,5,5]'}]},{name:"opt_padding",
title:"Marges internes",icon:"padding",properties:[{
tagName:"space",name:"padding",'default':"[5,5,5,5]"}]},{
name:"opt_css",title:"CSS personnalisé",icon:"t_code",
properties:[{tagName:"inputCss",name:"css",
'default':"'node{a: b;}'"}]}]}]},{tagName:"tab",child_nodes:[{
tagName:"options",name:"hover_options",sortable:'false',
uniq:'true',design:'true',options:[{name:"opt_colors",
title:"Couleurs",icon:"format_color_fill",properties:[{
tagName:"colors",name:"colors",
display:"Texte|Fond",colspan:"1|1",
'default':"['theme_text_color', 'theme_color']",
'class':"colorsButton",elts:"2",options:[{hide_alpha:!0},{
allow_gradient:!0}]}]},{name:"opt_shadow",
title:"Ombre",icon:"flip_to_back",properties:[{
tagName:"box_shadow",name:"shadow",
'default':"[45, 5, 0, 5, 'rgba(0,0,0,0.4)', false, '3px 3px 5px 0px rgba(0,0,0,0.4)']"
}]},{name:"opt_border",title:"Bordure",icon:"border_all",
properties:[{tagName:"border",name:"border",
'default':"({'all':[3, 'solid', 'theme_color', true], 'bt':[3, 'solid', 'theme_color', false], 'br':[3, 'solid', 'theme_color', false], 'bb':[3, 'solid', 'theme_color', false], 'bl':[3, 'solid', 'theme_color', false]})"
}]},{name:"opt_radius",title:"Arrondi",
icon:"rounded_corner",properties:[{tagName:"radius",
name:"radius",'default':"[3, 3, 3, 3]",minimum:"0",maximum:"100"
}]},{name:"opt_css",title:"CSS personnalisé",icon:"t_code",
properties:[{tagName:"inputCss",name:"css",
'default':"'node{a: b;}'"}]}]}]},{tagName:"tab",child_nodes:[{
tagName:"options",name:"active_options",sortable:'false',
uniq:'true',design:'true',options:[{name:"opt_colors",
title:"Couleurs",icon:"format_color_fill",properties:[{
tagName:"colors",name:"colors",
display:"Texte|Fond",colspan:"1|1",
'default':"['theme_text_color', 'theme_color']",
'class':"colorsButton",elts:"2",options:[{hide_alpha:!0},{
allow_gradient:!0}]}]},{name:"opt_shadow",
title:"Ombre",icon:"flip_to_back",properties:[{
tagName:"box_shadow",name:"shadow",
'default':"[45, 5, 0, 5, 'rgba(0,0,0,0.4)', false, '3px 3px 5px 0px rgba(0,0,0,0.4)']"
}]},{name:"opt_border",title:"Bordure",icon:"border_all",
properties:[{tagName:"border",name:"border",
'default':"({'all':[3, 'solid', 'theme_color', true], 'bt':[3, 'solid', 'theme_color', false], 'br':[3, 'solid', 'theme_color', false], 'bb':[3, 'solid', 'theme_color', false], 'bl':[3, 'solid', 'theme_color', false]})"
}]},{name:"opt_radius",title:"Arrondi",
icon:"rounded_corner",properties:[{tagName:"radius",
name:"radius",'default':"[3, 3, 3, 3]",minimum:"0",maximum:"100"
}]},{name:"opt_css",title:"CSS personnalisé",icon:"t_code",
properties:[{tagName:"inputCss",name:"css",
'default':"'node{a: b;}'"}]}]}]}]}]}].each(function(e){
new GraphicalType(e)});this.loaded.resolve()
}else this.available=!1;sigCtl.emit("GraphicalType.ready")}
;GraphicalType.version_config=function(e){
if(e)return v.default_presets.find(function(t){return t[0]==e})}
;GraphicalType.set_version_preset=function(e,t){
var i=GraphicalType.version_config(e)
;v.default_presets=v.default_presets.find_all(function(t){
return t[0]!=e});v.setHasChanged()
;historyController.add(presetController,[GraphicalType.graphical_types[e],"setVersionPreset",i,[e,t,!1]])
;v.default_presets.push([e,t,!1])
;sigCtl.emit("GraphicalType.version_preset_changed",e,t)
;var o=GraphicalType.graphical_types[e]
;o.included.each(function(e){
sigCtl.emit("GraphicalType.refresh_ui_previews",e)})
;o.update_help_panel();o.updateCpts()}
;GraphicalType.remove_version_preset=function(e){
v.default_presets.remove(v.default_presets.find(function(t){
return t[0]==e}));v.setHasChanged()
;GraphicalType.graphical_types[e].update_help_panel()}
;GraphicalType.findSafeBackdropPreset=function(e,t){var i
;if(!GraphicalType.graphical_types.backdrop)return e?""+e:null
;var o=function(e){
if(!(e=e instanceof Array?e[0]:e)||"string"!=typeof e)return null
;var t=e.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\)/)
;if(t){var i=t[4]!==undefined?parseFloat(t[4]):1;return{
r:parseInt(t[1]),g:parseInt(t[2]),b:parseInt(t[3]),a:i}}
var o=e.match(/hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\)/)
;if(o){
var n=parseFloat(o[1])/360,s=parseFloat(o[2])/100,r=parseFloat(o[3])/100,i=o[4]!==undefined?parseFloat(o[4]):1,a,l,c
;if(0===s)a=l=c=r;else{var d=function(e,t,i){i<0&&(i+=1)
;i>1&&(i-=1)
;return i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e
},p=r<.5?r*(1+s):r+s-r*s,h=2*r-p;a=d(h,p,n+1/3);l=d(h,p,n)
;c=d(h,p,n-1/3)}return{r:Math.round(255*a),g:Math.round(255*l),
b:Math.round(255*c),a:i}}
if("white"===(e=e.replace(/\s/g,"").toLowerCase()))return{r:255,
g:255,b:255,a:1};if("black"===e)return{r:0,g:0,b:0,a:1}
;if("#"===e.charAt(0)){var u=e.slice(1)
;3===u.length&&(u=u[0]+u[0]+u[1]+u[1]+u[2]+u[2])
;if(6===u.length)return{r:parseInt(u.substr(0,2),16),
g:parseInt(u.substr(2,2),16),b:parseInt(u.substr(4,2),16),a:1}}
return null},n=function(e){return!e||e.a<.1},s,r=function(e,t){
var i=presetController.find(null,"backdrop",e);if(!i){
console.log("[findSafeBackdropPreset] preset",e,"not found, skipping")
;return!1}
var n=o(i.find_data("options_title","text_color")),s=o(i.find_data("options_paragraph","text_color"))
;if(!n&&!s)return!0;for(var r=[n,s].filter(function(e){return e
}),a=0;a<r.length;a++){
var l=contrast([r[a].r,r[a].g,r[a].b],[t.r,t.g,t.b])
;console.log("[findSafeBackdropPreset] preset",e,"text:",r[a],"pageBg:",t,"ratio:",l,l<3?"UNSAFE":"ok")
;if(l<3)return!1}return!0},a=t?function(e){if(!e)return{r:255,
g:255,b:255,a:1};for(var t=e;t&&t!==document.documentElement;){
var i=window.getComputedStyle(t),n=o(i.backgroundColor)
;if(n&&n.a>.5)return n;t=t.parentElement}return{r:255,g:255,
b:255,a:1}}(t):{r:255,g:255,b:255,a:1}
;console.log("[findSafeBackdropPreset] preferred:",e,"contextNode:",!!t,"fallbackBg:",a)
;if(e&&r(e,a)){
console.log("[findSafeBackdropPreset] =>",e,"(preferred is safe)")
;return""+e}
for(var l=presetController.find_all(null,"backdrop"),c=0;c<l.length;c++){
var d=l[c].cssid.match(/\d+/);if(d){var p=parseInt(d[0])
;if(p!=e&&1!=p&&r(p,a)){
console.log("[findSafeBackdropPreset] =>",p,"(fallback)")
;return""+p}}}
console.log("[findSafeBackdropPreset] => null (aucun preset safe)")
;return null};GraphicalType.is_default_preset=function(e,t){
return t<=GraphicalType.graphical_types[e].preset_data.default_presets.length
};GraphicalType.data_or_version_preset=function(e,t){
var i,o=GraphicalType.version_config(e)
;if(o&&!t)i=o[1];else if(t){
var n=presetController.find(null,e,t)
;if(n)i=n.cssid.match(/\d+/)[0];else{
var s=GraphicalType.graphical_types[e]
;i=t<=s.preset_data.default_presets.length?t:s.preset_data.default_preset_index
}}return i};GraphicalType.prototype={initialize:function(e){
var t=this;this.key=e.key;this.name=e.name
;this.version=!e.no_version;this.title=this.name
;this.class_name=e.class_name;this.preset_data={
default_presets:e.default_presets,
default_preset_index:e.default_preset_index||1,
prefix:'gt'+this.key+'_preset',preset_preview:e.preset_preview}
;this.default_options=e.default_options
;this.theme_config_values=e.theme_config_values
;this.includes=e.includes||[];this.included=e.included||[]
;this.counter=0;this.default_preset=null;this.cpts=[]
;for(var i=["properties","design_properties","preset_properties"],o=0;o<i.length;o++){
var n=i[o];t[n]={json:e[n],toNode:function(e){
var i=$("<ul></ul>");t[n].json.each(function(o){
var n,s=$("<"+(o.node||"li")+(o["class"]?' class="'+o["class"]+'"':"")+" />").addClass("propContainer"),r=o.help
;r&&s.attr("help",r.replace(/\&apos;/g,"'")).addClass("helpEditor")
;o.feature&&s.attr("data-feature",o.feature).addClass("helpEditor")
;var a=o.title
;a&&$("<span class='propertyTitle'>"+a+" </span>").appendTo(s)
;var l=propertyConverter["convert"+o.tagName.capitalize()].call(propertyConverter,e,o)
;l.defaultAction&&"true"==o.default_action&&(t.defaultAction=l.defaultAction)
;l.node&&s.append(l.node)
;a&&$(l.node).addClass("property_select_with_title")
;l.inserted&&setTimeout(function(){l.inserted()});i.append(s)})
;return $('<div class="gt_edit_panel"></div>').append(i)},
getDefault:function(){}}}
presetController.loadDefaultPresets(null,this,!0,this.preset_data.default_presets)
;presetController.componentTypeLoaded(null,this.key)
;GraphicalType.graphical_types[this.key]=this},
getDefaultOptions:function(){var e=this,t=this.default_options
;if(t&&this.theme_config_values)for(var i=0;i<Object.keys(this.theme_config_values).length;i++){
var o=Object.keys(this.theme_config_values)[i],n
;if(this.default_options[o])for(var s=0;s<Object.keys(this.default_options[o]).length;s++){
var r=t[o][Object.keys(this.default_options[o])[s]]
;if(Object.keys(r).includeOne(this.theme_config_values[o])){
var a=Object.keys(r).find(function(t){
return e.theme_config_values[o].include(t)
}),l=ThemeConfig[e.class_name][a]
;l?r[a]=l:console.warn('No default value for '+e.class_name+'#'+a+' in config.json')
}}}return t||{}},getCounter:function(){return this.counter++},
presetCss:function(){var e=this;if(!this.presetCssReq){
this.presetCssReq=$.Deferred();$.ajax({
url:"/assets/precompile/gt/"+this.class_name.replace(/^GT_/,"").toLowerCase()+"/preset.css?clearcache=12",
dataType:"text",name:"Chargement des styles de module"
}).done(function(t){if(e.includes.length){var i=[]
;e.includes.each(function(e){
i.push(GraphicalType.graphical_types[e].presetCss().then(function(i){
t=t.concat("/*<"+e+">*/"+i+"/*</"+e+">*/")}))})
;$.when.apply($,i).then(function(){e.presetCssReq.resolve(t)})
}else e.presetCssReq.resolve(t)})}return this.presetCssReq},
get_default_preset:function(){var e=null
;if(this.default_preset)e=this.default_preset;else{
var t=presetController.find_all(this.id)[presetController.find_all(this.id).length-1]
;t&&(e=t.cssid.match(/\d+/)[0])}return e},
short_class_name:function(){return this.class_name.toLowerCase()
},getPropertyDesignNode:function(){
return this.propertyDesignNode},onPanelPresetLoad:function(e){
var t=this,e=e||{},i=$(".gt_"+this.key+"_styles")
;presetController.create_panel(t,{mode:"select"})
;var o=function(){
$(this).closest('section').addClass("selected").siblings().removeClass("selected")
;$("#design_blocks_wrapper").hasClass("active")&&$("#design_blocks_wrapper").desactivate()
;$("#list_styles").removeClass("selectionnable")
},n=e.cpt||blockSelector.selectedCpt()
;i.on("change",".rad",function(){
if($(this).val()!=n.data[e.name||"preset"]){
n.setData(e.name||"preset",$(this).val());o()}})
;i.on("click","section",function(){
$(this).find(".rad").prop("checked",!0).trigger("change")})
;var s=e.cpt.getGTPreset(e.gt_type,e.name||"preset")
;$("input[name=selected_button_style][value="+s+"]:first").prop("checked",!0)
},init_panel:function(e){var t=this
;this.propertyDesignNode=e||this.propertyDesignNode
;this.propertyDesignNode.find('.presets_container, .properties_container').empty()
;this.propertyDesignNode.find('.presets_container').html("<h3>Tous les styles</h3>")
;this.version||this.propertyDesignNode.find('.version_preset_container').remove()
;$("html").hasClass("wf-materialicons-n4-active")||WebFont.load({
google:{families:["Material Icons"]}})
;e.find('.gt_name').html($("<span>").text(this.name))
;e.find('.properties_container').append($('<button class="btn btn-default btn-block btn-block-prop">Créer un nouveau style</button>').on('click',function(){
$("#design_blocks_wrapper").destroyScrollbar()
;var i=presetController.create(t);t.update_help_panel()
;e.find(".presets_container [data-cssid="+i.cssid.match(/\d+$/)[0]+"]").activate()
;$('#design_blocks_wrapper').activate(!0)}))
;"backdrop"==this.key&&v.applyPreset()
;e.on("click",".btn-edit-preset, .button_list_content",function(){
var e=$(this).parents(".items_container")
;$('#design_blocks_wrapper').destroyScrollbar()
;if(e.hasClass('active'))e.add('#design_blocks_wrapper').desactivate();else{
t.propertyDesignNode.find('.button_list_options').desactivate()
;e.activate();var i=e.data('cssid')
;if(presetController.find(null,t.key,i))presetController.load_panel(t,i);else{
historyController.startInGroup()
;var o=presetController.create(t,i)
;$(".preset_demo",e).removeClassMatch(new RegExp(t.preset_data.prefix)).addClass(t.preset_data.prefix+' '+t.preset_data.prefix+'_'+i)
;historyController.add(presetController,[e,"customizePreset",t],!1)
;historyController.stopInGroup()}
$('#design_blocks_wrapper').find('> ul').addClass('gt_edit_panel')
;$('#design_blocks_wrapper').activate(!0)}})
;e.on("click",".btn-delete",function(){
var e=$(this).parents(".button_list_options").data("cssid")
;$('#design_blocks_wrapper').desactivate()
;var i=t.propertyDesignNode.find('.presets_container .button_list_options'),o=$(this).parents(".button_list_options"),n=i.index(o)
;n<0&&(n=0);o.desactivate();o.remove()
;presetController.find(null,t.key,e).remove(n,o);if(t.version){
var s=GraphicalType.version_config(t.key)
;s&&s[1]==e&&GraphicalType.remove_version_preset(t.key)}
$('#preset_gt'+t.key+'_preset_'+e).remove()
;t.update_help_panel();t.updateCpts()})
;e.on("click",".btn-clone",function(){
$('#design_blocks_wrapper').destroyScrollbar()
;var e=$(this).parents(".button_list_options").desactivate().data("cssid"),i,o=presetController.create(t,e,{},!0).cssid.match(/\d+$/)[0]
;$('#design_blocks_wrapper').activate(!0);t.update_help_panel()
;var n=$('.items_container[data-cssid='+o+']').activate()
;setTimeout(function(){
t.getPropertyDesignNode().mCustomScrollbar("scrollTo",n.offset().top+n.height())
},500);return!1});e.on("click",".btn-revert",function(){
$('#design_blocks_wrapper').desactivate()
;var e,i=$(this).parents(".button_list_options").desactivate().data("cssid"),o=presetController.find(null,t.key,i)
;historyController.offRecords(function(){if(o){o.remove()
;$('#preset_gt'+t.key+'_preset_'+i).remove()}})})
;this.version&&e.on('click','.define_version_preset_link',function(){
GraphicalType.set_version_preset(t.key,$(this).parents(".button_list_options").data("cssid"),!1)
;t.getPropertyDesignNode().mCustomScrollbar("scrollTo","top")})
;this.update_help_panel()},
create_preset_selection_node:function(e,t){var t,i=this
;if("select"==(t=t||{}).mode){var o
;(o=$("#list_styles section:not(.preset_interface):eq(0)").clone(!1)).removeClass('unselectionable')
;o.find(".preset_demo").removeClassMatch(new RegExp('gt'+this.key+'_preset')).addClass('gt'+this.key+'_preset gt'+this.key+'_preset_'+e)
;o.removeAttr("data-cssid").removeData("cssid")
;$("#list_styles .dyn_presets").append(o)}else{
var n=v.presets_names[this.class_name.toLowerCase()]&&v.presets_names[this.class_name.toLowerCase()][e]?v.presets_names[this.class_name.toLowerCase()][e]:"",o=$("<div class=\"items_container button_list_options\"><div class=\"gt_preset_name\">"+n+"</div><div class=\"button_list_content\"></div><div class=\"button_list_actions\"><span class=\"edit_btn design preset_link_edition btn-edit-preset\"><span class=\"fonticon\"> "+$.fn.fonticon("editor_pen")+"</span>Modifier le style</span><div class=\"button_list_actions_more\"><div class=\"button_list_action_more\"><span class=\"preset_link_edition btn-clone\"><span class=\"fonticon\"> "+$.fn.fonticon("editor_duplicate")+"</span>Dupliquer</span></div><div class=\"button_list_action_more\"><span class=\"preset_link_edition btn-revert\"><span class=\"fonticon\"> "+$.fn.fonticon("editor_clear")+"</span>Nettoyer</button></div><div class=\"button_list_action_more\"><span class=\"preset_link_edition btn-delete\"><span class=\"fonticon\"> "+$.fn.fonticon("editor_delete")+'</span>Supprimer</span></div></div></div></div>'),s=GraphicalType.version_config(this.key)
;(t.disable_remove||s&&s[1]==e)&&o.find('.btn-delete').parent().remove()
;var r=presetController.find(null,this.key,e),a=GraphicalType.is_default_preset(this.key,e)
;!t.disable_revert&&a||o.find('.btn-revert').parent().remove()
;if(this.version){
var s=GraphicalType.version_config(this.key),l=$('<a for="preset_version_'+e+'" class="not_link_style">Définir comme style principal</a>')
;o.find('.button_list_actions .btn-edit-preset').after($('<div class="button_list_actions_more preset_link_edition define_version_preset_link"></div>').html($('<span class="fonticon"> '+$.fn.fonticon("editor_star_fill")+'</span>').add(l)))
}var c=['gt'+this.key+'_preset','gt'+this.key+'_preset_'+e]
;if("backdrop"==this.key&&(!r||r&&r.data&&(!r.data.options_background||r.data.options_background&&!Object.keys(r.data.options_background).find(function(e){
return r.data.options_background[e].gt_link})))){
var d=GraphicalType.data_or_version_preset("link");if(d){
var p=GraphicalType.graphical_types.link
;c.push(p.preset_data.prefix,p.preset_data.prefix+"_"+d)}}
o.find('.button_list_content').append($(this.preset_data.preset_preview).addClass(c.join(' ')))
;o.attr('data-cssid',e)
;"create_panel"==t.panel_mode&&GraphicalType.is_default_preset(this.key,e)&&o.addClass('default_preset')
;this.propertyDesignNode.find('.presets_container').append(o)
;$.each($(".items_container.default_preset",this.propertyDesignNode),function(){
i.propertyDesignNode.has($(this)).length&&$(".items_container[data-cssid="+$(this).data('cssid')+"]",i.propertyDesignNode).not($(this)).remove()
})}if("select"==t.mode){
o.find("input.rad").attr("id","rad_uit_"+e).val(e)
;o.find("label").attr("for","rad_uit_"+e);o.attr('data-cssid',e)
;$.each($("section:not(.create_preset)",$('#design_blocks_wrapper')),function(){
$('#design_blocks_wrapper').has($(this)).length&&$("section:not(.create_preset)[data-cssid="+$(this).data('cssid')+"]",$('#design_blocks_wrapper')).not($(this)).remove()
})}return o},update_help_panel:function(){var e
;(e=this.getPropertyDesignNode()).find(".version_preset").empty()
;e.find(".presets_container").empty().html("<h3>Tous les styles</h3>")
;presetController.create_panel(this,{list_default_presets:!0})
;e.find(".warning_custom_css").toggle(!!(v.css&&v.css.length>10))
;if(this.version){
var t=GraphicalType.version_config(this.key),e,i=(e=this.propertyDesignNode).find('.version_preset_defined .version_preset')
;e.find('.version_preset_defined').append(i)
;e.find('.version_preset_defined').toggle(!!t)
;e.find('.version_preset_undefined').toggle(!t)
;e.find('.version_preset .items_container').detach().appendTo(e.find('.presets_container'))
;if(t){
var o=$('.presets_container div[data-cssid='+t[1]+']',e).detach()
;e.find('.version_preset_defined').append(i.append(o))
;e.find(".presets_container").toggle(0!=e.find(".presets_container > div").length)
}}},trigger_preset:function(e,t){
return propertyConverter.convertTrigger_preset({data:t,
setData:function(e,i){t[e]=i;v.setHasChanged()},
getGTPreset:function(e,i){
return GraphicalType.data_or_version_preset(e,t[i])}},{
btn:e.btn||"",mode:"select",gt_type:this.key,name:e.name,
'class':"gtbutton_prop_custom"}).node},addCpt:function(e,t){
this.cpts.push([e,t])},removePreset:function(e){
this.updateCpts()},updateCpts:function(e){var t=this
;this.cpts&&this.cpts.each(function(i){
i[1]?i[1].each(function(o){
(!e||i[0].getGTPreset&&i[0].getGTPreset(t.key,o)==e)&&i[0].ui.applyPreset()
}):v.applyPreset(t.key)})}};var ProgressController_={
progress_objects:{},object_id:0,progress:0,done:0,total:0,
emulate_progress:null,add:function(e){var t=0
;for(var i in this.progress_objects)t+=1
;var o=100*(t+1)-ProgressController_.done,n=0==ProgressController_.total?0:ProgressController_.progress/ProgressController_.total
;ProgressController_.total=0==ProgressController_.total?100:-o/(n-1)
;ProgressController_.progress=ProgressController_.total-o
;this.progress_objects[this.object_id.toString()]=e
;this.object_id+=1;this.emulate_progress||this.emulateProgress()
;return this.object_id-1},busy:function(){
return null!=this.last_shown},last_shown:null,
emulateProgress:function(){
return clearInterval(this.emulate_progress)}
},ProgressController=Class.create()
;ProgressController.prototype={initialize:function(e,t){
this.opts=t||{};this.name=e
;this.id=ProgressController_.add(this)
;this.next_progress=this.opts.next_progress||10;this.update(0)
;this.paused=!1;this.start_time=new Date
;this.display_priority=this.opts.display_priority||0},
update:function(e,t){t=t||{};e=Math.min(100,e)
;this.next_progress=t.next_progress||this.next_progress
;this.paused=!1
;ProgressController_.progress+=e-(this.progress||0)
;ProgressController_.done+=e-(this.progress||0);this.progress=e
;var i=0,o,n=0,s=101,r,a=-1
;for(o in ProgressController_.progress_objects){
var l=ProgressController_.progress_objects[o].display_priority,c=ProgressController_.progress_objects[o].progress||0
;if(l>a||l==a&&c<s){s=c;r=o;a=l}i+=c;n+=1}if(0!=n)if(i==100*n){
statusController.progressMessage("Terminé",100)
;ProgressController_.total=0;ProgressController_.progress=0
;ProgressController_.done=0
;ProgressController_.progress_objects={}
;ProgressController_.last_shown=null
;sigCtl.emit("Progress.allFinished")
;clearInterval(ProgressController_.emulate_progress)
;ProgressController_.emulate_progress=null}else{
null==ProgressController_.last_shown&&sigCtl.emit("Progress.begin",JSON_.stringify(ProgressController_))
;(null==ProgressController_.last_shown||ProgressController_.progress_objects[ProgressController_.last_shown].progress>=100)&&(ProgressController_.last_shown=r)
;try{
var d=ProgressController_.progress_objects[ProgressController_.last_shown]
;d&&statusController.progressMessage(d.name,!(!window.v||"viewer"==v.mode||1!=n||d.opts.estimated_duration||d.opts.next_progress||!(i<100))||ProgressController_.progress/ProgressController_.total*100)
}catch(p){}
}else console.log("Progress update call whereas it is already finished",this.name)
}};var ModelTransfer={type:"POST",dataType:"json",
error_to_json:!0,cache:!1},Model=Class.create()
;Model.CHILDREN_SAVING_BATCH_SIZE=5;Model.prototype={
initialize:function(){this.type="Model"},m_get:function(){
var e=this
;this.m_get_done&&"rejected"===this.m_get_done.state()&&(this.m_get_done=null)
;var t=location.search.match(/preview_key=([^&]+)/),i="Page"==this.type?this.version:this.page.version
;t&&(t=t[1]);$.ajax({url:"/json/get",dataType:"jsonp",
name:"Chargement de la page",error_to_json:!0,jsonp:!1,
jsonpCallback:"json_get_"+this.id,data:{type:this.type,
id:this.id,app_version:window.app_version,mode:i.mode,
preview_key:t},success:function(t){if(t.access_denied){
secCtrl.popup();e.m_get_done.reject("access_dedied");return!1}
e.getCallback(t)}})
;return this.m_get_done=this.m_get_done||$.Deferred()},
m_copy:function(e,t,i){var o=this;$.ajax(Object.extend({
url:"/json/copy"+e,name:"Copie en cours",data:t,
success:function(e){o.getCallback(e);i&&i(o)}},ModelTransfer))},
getCallback:function(e,t=!1){
if(e.errors)sigCtl.emit("Model.error",{action:"get",
errors:e.errors,item:this});else{
if(e.attributes)for(var i in e.attributes)this[i]=e.attributes[i]
;for(var o in e)if("attributes"!=o)if(e[o])if(e[o].constructor==Array)for(var n=0;n<e[o].length;n++){
var s=new(window[o.capitalize().singularize()])(this)
;s.getCallback(e[o][n],!0);this[o].push(s)}else{
this[o]=new(window[o.capitalize()])(this)
;this[o].getCallback(e[o],!0)}else this[o]=null}
this.m_get_done&&(t&&'function'==typeof this.loadChildren&&'function'==typeof this.hasToLoadChildren&&this.hasToLoadChildren()||this.m_get_done.resolve())
},m_post:function(e){var t=this,i=$.Deferred()
;$.ajax(Object.extend({url:"/json/post",
name:"Enregistrement des éléments",dataType:"json",
contentType:"application/json",
data:JSON.stringify(Object.extend({type:this.type,id:this.id,
app_version:window.app_version,save_id:(e||{}).save_id
},this.to_json()))},ModelTransfer)).then(function(o){var n=[]
;if(!o.success){
n.push("model post saving error "+t.type+"#"+t.id+" "+o.errors)
;t.setHasChanged()}console.log(t.type+"#"+t.id+" saved")
;t.saveChildren?t.saveChildren(e).then(function(e){
i.resolve(n.concat(e))}):i.resolve(n);i.done(function(e){
console.log(t.type+"#"+t.id+" fully saved "+e)})},function(){
return $.Deferred().resolve(["Ajax post error saving "+t.type+"#"+t.id])
});return i},m_delete:function(e){var t=this,i=$.Deferred()
;this.id?$.ajax(Object.extend({url:"/json/delete",
name:"Suppression des éléments enlevés",data:{type:this.type,
id:this.id,app_version:window.app_version,
save_id:(e||{}).save_id},success:function(e){
e.success||sigCtl.emit("Model.error",{action:"delete",
errors:e.errors,item:t})
;t.deleteChildren?t.deleteChildren().then(function(){i.resolve()
}):i.resolve()}},ModelTransfer)):i.resolve();return i},
m_put:function(e){var t=this;json=this.to_json()
;var i=$.Deferred();$.ajax(Object.extend({url:"/json/put",
name:"Sauvegarde des nouveaux éléments",dataType:"json",
contentType:"application/json",
data:JSON.stringify(Object.extend({type:this.type,
app_version:window.app_version,save_id:(e||{}).save_id},json))
},ModelTransfer)).then(function(o){var n=[];if(o.success){
t.id=o.id;o.idserver&&(t.idserver=o.idserver)
;t.saveChildren?t.saveChildren(e).then(function(e){
i.resolve(n.concat(e))}):i.resolve(n)}else{
n.push("model put saving error "+t.type+"#"+t.id+" "+o.errors)
;t.setHasChanged();i.resolve(n)}},function(){
return i.resolve(["Ajax error put saving "+t.type+"#"+t.id])})
;i.done(function(e){console.log(t.type+"#"+t.id+" created "+e)})
;return i},save:function(e){if(this.id){
this.mobileTreeHasChanged&&(this.mobileTreeHasChanged=!1)
;if(this.hasChanged){var t=this.m_post(e);this.hasChanged=!1
;return t}return $.Deferred().resolve([])}return this.m_put(e)}}
;var Page=Class.create();Page.gotoCart=function(){
if(v.selectedPageFg){var e
;if(v.selectedPageFg.getCpts().find(function(e){
return e.component_type&&"UI_Store"==e.component_type.class_name
})){v.selectPageFromUrl([v.selectedPageFg.pageid,"/s0b/"])
;return}}Page.findCartPage().done(function(e){
v.selectPageFromUrl([e.pageid,"/s0b/"])})}
;Page.findCartPage=function(){return $.ajax({
url:"/cpt_store/get_page/"+v.id+"?site="+v.site_id+"&device="+deviceController.device,
dataType:"json"})};Object.extend(Page.prototype,new Model)
;Object.extend(Page.prototype,componentParent)
;Object.extend(Page.prototype,{initialize:function(){},
pageInit:function(e,t){this.version=e;this.type="Page"
;this.cpts=[];this.childrenToDelete=[];this.sections=[]
;this.selectable=!0;this.nbr_components=0;this.hasChanged=!1
;this.mobileTreeHasChanged=!1;this.level=0;this.order=0
;this.myheight=0;this.showing=!1;this.editor={}
;this.countType={};this.m_get_done=$.Deferred();if(t){
this.from_clone=t;this.download_children=$.Deferred().resolve()}
this.node=$("#pages");this.addSectionsNode();this.postLoading=[]
;this.all_cpts_displayed=$.Deferred();this.maxZIndex=1e4
;this.minZIndex=5e3},addSectionsNode:function(){
this.version.is_sections_system&&(0==this.node.find("#sections").length?this.$sections=$("<div id=\"sections\">").appendTo(this.node):this.$sections=this.node.find("#sections"))
},getNodeForDevice:function(e){return this.node},
getContentNodeForDevice:function(e){
return this.getNodeForDevice(e)},getChildren:function(e){
var t=this.version.is_sections_system?this.sections:this.cpts
;e&&this!=this.version.page_bg&&(t=t.concat(this.version.page_bg.getChildren()))
;return t},getChildById:function(e,t){
return this.getChildren(t).find(function(t){return t.getId()==e
})},elevateContent:function(e){},initAos:function(){
var e=this.maxDuration()+15;setTimeout(()=>{
this.version.checkHeight();Aos.load().then(()=>{
"viewer"==this.version.mode&&AOS.init()})},e)},
displaySections:function(){var e=[]
;this.sections.each(function(t){e.push(t.display())})
;this.setViewerFooterMarginTop();return $.when.apply($,e)},
showing_resolve:function(){var e=this;e.version.checkHeight()
;if(e.version.page_bg==e)sigCtl.emitVariable("PageBg.shown");else{
sigCtl.emit("PageFg.shown",e)
;deviceController.updatePageDisplay(e)}
sigCtl.emit("Page.shown",e)},show:function(){var e=this
;this.showing=$.Deferred()
;this.security_method||this.header&&this.footer||this.loadLayout()
;this.loadChildren().then(function(){
if(e.version.is_sections_system){e.load_animation_script()
;e.displaySections().then(function(){e.showing.resolve()})
}else e.displayComponents().then(function(){e.showing.resolve()
})})
;'editor'==this.version.mode&&this.version.setSectionHovered(null)
;return this.showing.then(function(){e.initAos()
;!e.security_method||e.header&&e.footer||e.loadLayout()
;e.showing_resolve();if(e.version.is_sections_system){
var t=$.Deferred()
;sigCtl.connectOnce("Version.checkHeight",function(){
"viewer"==e.version.mode?e.setViewerFooterMarginTop():sectionAddPlaceholder.build()
;t.resolve()});return t}return $.Deferred().resolve()})},
to_json:function(){var e={name:this.name,
version_id:this.version.id,order:this.order,level:this.level,
security:JSON_.stringify(this.security),pageid:this.pageid,
draft:this.draft};this.seo&&(e.seo=JSON_.stringify(this.seo))
;e.background=JSON_.stringify(this.background)
;e.foreground=JSON_.stringify(this.foreground)
;if(this.version.is_sections_system){e.header_id=this.header_id
;e.footer_id=this.footer_id
}else e.footer=JSON_.stringify(this.footer)
;e.effects=JSON_.stringify(this.effects)
;e.transition=JSON_.stringify(this.transition)
;e.editor=JSON_.stringify(this.editor);return e},
toJSON:function(){return{type:"page",name:this.name,
version_id:this.version.id,id:this.id,sections:this.sections,
draft:this.draft}},hasToLoadChildren:function(){
return this.version.is_sections_system?!this.sections_preloaded:!this.cpts_preloaded
},loadChildren:function(){
return this.version.is_sections_system?this.loadSections():this.loadComponents()
},loadComponents:function(){
if(!this.download_children)if(this.cpts_preloaded||0==this.nbr_components)this.download_children=$.Deferred().resolve();else{
var e=this;this.download_children=this.m_get()
;this.m_get_done.done(function(){e.updateCountType()
}).fail(function(){e.download_children=null})}
return this.download_children},loadSections:function(){
if(!this.download_children)if(this.sections_preloaded||0==this.nbr_sections||!this.id)this.download_children=$.Deferred().resolve();else{
var e=this;this.download_children=this.m_get()
;this.m_get_done.fail(function(){e.download_children=null})}
return this.download_children},countCptWithUrl:function(){
var e=0;this.version.is_sections_system?this.sections.each(t=>{
e+=t.countCptWithUrl()}):this.cpts.each(t=>{
ComponentType.hasUrl(t.component_type_id)&&(e+=1)});return e},
pushCpt:function(e){this.pushComponent(e)
;this.countType[e.component_type_id]=this.countType[e.component_type_id]+1||1
},pushCptWithHistory:function(e){this.pushCpt(e)
;this.historyAction(e,"add");return e},getCpt:function(e){
var t=this,i;t.loadComponents().then(function(){
i=t.cpts.find(function(t){return t.getId()==e})});return i},
getAnchors:function(e){
if(this.version.is_sections_system)return this.sections.find_all(e=>e.data.name&&e.data.name.length>0)
;var t=this.cptsSortByY();if(!e)return $.grep(t,function(e){
return e.data&&e.data.anchorid});$.map(e,function(e){
return t.find(function(t){return e.anchorid==t.data.anchorid})})
},getCptByAnchorId:function(e){
return this.getAnchors().find(function(t){
return t.data.anchorid==e})},getCptByIdWithSections:function(e){
var t=[],i=[];this.header&&i.push(this.header)
;i=i.concat(this.sections);this.footer&&i.push(this.footer)
;i.each(function(e){t=t.concat(e.getCpts())})
;return t.find(function(t){return t.getId()==e})},
getLayoutCpts:function(){var e=[]
;this.header&&(e=e.concat(this.header.cpts))
;this.footer&&(e=e.concat(this.footer.cpts));return e},
getCptsAndLayoutCpts:function(){
return[].concat(this.getCpts(),this.version.is_sections_system?this.getLayoutCpts():[])
},getCptsSortedByY:function(){var e=new Array
;this.sections.each(function(t){
t.getCptsSortedByTop().each(function(t){e.push(t)})});return e},
unpushCpt:function(e){this.cpts.remove(e)
;this.countType[e.component_type_id]=this.countType[e.component_type_id]-1||0
},rmCpt:function(e,t){if(t){t.cpts.push(e)
;e.parent.setHasChanged(e);e.parent=t
;historyController.add(this,[e,"mvAction",t.pageid])}else{
e.remove();this.childrenToDelete.push(e)
;historyController.add(this,[e,"rmAction"],function(e,t){
return"undo"==e&&null!=t[0].idserver})}this.unpushCpt(e)
;return $.Deferred().resolve()},createSection:function(e){
var t=$.Deferred(),i=new Section(this),o
;i.added_in_page=$.Deferred();i.setDefaultData()
;i.data.name=e||"";var n={};this.sections.each(function(e){
var t=JSON.stringify(e.getData('padding'));n[t]=(n[t]||0)+1})
;o=JSON.parse(Object.keys(n).sort(function(e,t){
return n[e]<n[t]?1:n[e]>n[t]?-1:0})[0]||"[20, 0, 20, 0]")
;i.data.padding=o;this.setHasChanged()
;i.display().then(function(){t.resolve(i)});return t},
addSection:function(e,t){var i=$.Deferred()
;this.version.is_sections_system&&(this!=this.version.page_bg||this.sections.length<1)&&this.createSection(e).then(e=>{
if('number'==typeof t){this.sections.splice(t,0,e);if(0===t){
var o=this.$sections.find(".section").not(".header").first()
;o.length>0&&e.$node.insertBefore(o)
}else this.sections[t-1]?e.$node.insertAfter(this.sections[t-1].$node):console.log('[addSection] WARNING: no section found at index',t-1)
}else if(sectionAddPopup.isEmptyConfig())this.sections.push(e);else{
t=sectionAddPopup.getIndexOfNewSection()
;this.sections.splice(t,0,e)}e.added_in_page.resolve()
;sigCtl.emit("Page.addSection");this.historyAction(e,"add")
;this.setSectionsOrder();this.version.checkHeight();i.resolve(e)
});return i},removeSection:function(e){
e.$node.removeClass("visible");this.sections.remove(e)
;this.childrenToDelete.push(e);this.setSectionsOrder()
;this.historyAction(e,"rm");this.version.checkHeight()
;this.setHasChanged();sectionAddPlaceholder.build()},
moveSection:function(e,t,i){e.moveToPage(t,i)
;sectionAddPlaceholder.build()},getSectionByOrder:function(e){
return this.sections.find(function(t){return t.order==e})},
setSectionsOrder:function(){var e=this
;this.sections.forEach(function(t,i){t.setOrder(i+1)
;(i<=1||i>=e.sections.length-2)&&t.features&&t.features.toolbar.buildHtml()
})},historySelectPage:function(e){
this.version.getSelectedPage()!=e.page&&this.version.selectPage(e.page)
},historyInsertSection:function(e){
0==this.sections.length?e.$node.insertBefore(sectionAddPlaceholder.$node):e.order-1==0?e.$node.insertBefore(this.sections[0].$node):e.$node.insertAfter(this.sections[e.order-2].$node)
},historyRemoveSection:function(e){this.historySelectPage(e)
;blockSelector.selected_sections.find(function(t){return e==t
})&&blockSelector.deselect();this.sections.remove(e)
;e.$node.detach();this.removeSection(e);this.setSectionsOrder()
;this.version.checkHeight()},historyAction:function(e,t){
historyController.add(this,[e,t+"Action"],function(e,t){
return"undo"==e&&null!=t[0].idserver})},
historyAddSection:function(e){e.id&&(e.id=null)
;this.historySelectPage(e);this.historyInsertSection(e)
;this.sections.splice(e.order-1,0,e)
;this.childrenToDelete.remove(e);e.$node.addClass("visible")
;blockSelector.selected_sections.find(function(t){return e==t
})||blockSelector.selectSection(e);this.setSectionsOrder()
;this.version.checkHeight()},historyAddChildren:function(e){
this.version.is_sections_system?this.historyAddSection(e):this.historyAddCpt(e)
},historyRemoveChildren:function(e){
this.version.is_sections_system?this.historyRemoveSection(e):this.historyRemoveCpt(e)
},historyMoveAction:function(e,t){
var i='Component'==e[0].type&&e[0].option_for("footer")&&e[0].page==this.version.page_bg,o=this.version.getPageFromId(e[2]),n="undo"==t?o:this,s="undo"==t?this:o
;'Component'==e[0].type?n.removeCpt(e[0],s):n.moveSection(e[0],s,"undo"==t?e[3]:null)
;setTimeout(()=>{i||historyController.offRecords(()=>{
this.version.selectPage(s,!0)});this.version.checkHeight()})
;'Component'==e[0].type?blockSelector.selected_cpts.find(function(t){
return e[0]==t
})||blockSelector.selectCpts([e[0]]):blockSelector.selected_sections.find(function(t){
return e[0]==t})||blockSelector.selectSection(e[0])},
historyChangeLayout:function(e,t){var i,o;if("undo"==t){i=e[2]
;o=e[0]}else{i=e[0];o=e[2]}this.setPartial(e[3],o)},
historyUndoOrRedo:function(e,t){e[0].setHasChanged()
;"rmAction"==e[1]?"undo"==t?this.historyAddChildren(e[0]):this.historyRemoveChildren(e[0]):"addAction"==e[1]?"undo"==t?this.historyRemoveChildren(e[0]):this.historyAddChildren(e[0]):"mvAction"==e[1]?this.historyMoveAction(e,t):"changeLayout"==e[1]&&this.historyChangeLayout(e,t)
},undo:function(e){var t=this
;historyController.offRecords(function(){
t.historyUndoOrRedo(e,"undo")})},redo:function(e){var t=this
;historyController.offRecords(function(){
t.historyUndoOrRedo(e,"redo")})},saveAndCleanHistory:function(){
return this.save().done(function(){
historyController.clean_undoable()})},saveChildren:function(e){
var t=[],i=$.Deferred(),o=this.getChildren(),n=$.Deferred().resolve()
;for(let i=0;i<o.length;i+=Model.CHILDREN_SAVING_BATCH_SIZE)n=n.then(()=>{
var n=o.slice(i,i+Model.CHILDREN_SAVING_BATCH_SIZE).map(i=>i.save(e).then(e=>{
t=t.concat(e)}));return $.when.apply($,n)});n.then(()=>{var t=[]
;this.childrenToDelete.each(i=>{
i.id&&t.push(i.m_delete(e).then(()=>{
this.childrenToDelete.remove(i);i.idserver||(i.id=null)}))})
;$.when.apply($,t).then(()=>{
"mobile_tree"==this.version.device_modes.mobile&&MobileTree.custom_positions.clean(this)
;if(this.is_sections_system){
this.header&&(this.header_id=this.header.id)
;this.footer&&(this.footer_id=this.footer.id)}i.resolve()})})
;return i.then(function(){return t})},remove:function(){
this.hide()},getTransition:function(e){
var t=Object.keys(this.transition||{})[0];if(t)switch(e){
case"class":t="transition_"+t;break;case"data":
t=this.transition[t]}return t},launchTransitions:function(){
var e=this;if(!this.transition_launched){
this.transition_launched=!0
;this.getCptsAndLayoutCpts().each(e=>{
e.V()&&e.launchTransition()});setTimeout(function(){
e.transition_launched=!1},200)}},
launchTransitionsOut:function(){
this.getCptsAndLayoutCpts().each(e=>{
e.V()&&e.launchTransitionOut()})},maxDuration:function(){
var e=!1
;!this.version.force_no_transition&&this.version.selectedPageFg&&this.version.selectedPageFg.getCpts().length&&this.version.page_bg.getTransition()&&Modernizr.cssanimations&&(e=(e=Math.max.apply(null,this.version.selectedPageFg.getCpts().map(e=>e.node&&e.node.data("effective_duration"))))>0&&1.1*e)
;return e},hide:function(){this.version.selectedPageFg=null
;this.getChildren().each(function(e){e.hide()})
;sigCtl.emit("Page.hide",this)},height:function(){
return this.myheight},setHeight:function(e){e+=Cpt.offset_top
;this.node.height("mobile_auto"==deviceController.device?"auto":e)
;var t=$(document).scrollTop()
;$("#pageContainer").height(this.node.outerHeight(!0))
;$("#site_tools").height($("#site_content").outerHeight())
;$(document).scrollTop(t)},setForeground:function(reset){
if(0!=$("#theme_background").length){var self=this,$defaultStyle
;$("#theme_content").removeClass("gradient_animation_vertical gradient_animation_horizontal gradient_animation_radial")
;if(!window.v)return setTimeout(function(){self.setForeground()
},100)
;var $defaultStyle=$("#u2_foreground").length?$("#u2_foreground").removeClass():$("<div id='u2_foreground'></div>").appendTo("#theme_background")
;if(this==this.version.page_bg||!$.isEmptyObject(this.version.getSelectedPage().foreground)&&"global"!=this.version.getSelectedPage().foreground.select){
if(reset){
this.foreground.color=[["1%",$defaultStyle.css("background-color")],["100%",$defaultStyle.css("background-color")]]
;$("#theme_content").css("background",$defaultStyle.css("background-color"))
}if(this.foreground.activate||reset){$("#theme_content").show()
;this.foreground.activate=!0
;$("#theme_content").css($defaultStyle.css(["margin-top","margin-bottom","width"]))
;$("#theme_content").css(this.foreground)
;$("#theme_content,#site_content").data("foreground_width",this.foreground.width||$defaultStyle.css("width"))
;if(this.foreground.border){$("#theme_content").css({
"border-radius":!!this.foreground.border&&this.foreground["border-radius"]||"10px",
"border-width":!!this.foreground.border&&this.foreground["border-width"]||"5px",
"border-color":/get_color/.test(this.foreground.bordercolor)?eval(this.foreground.bordercolor):this.foreground.bordercolor||$defaultStyle.css("border-left-color")
})
;this.foreground.bordercolor=this.foreground.bordercolor||$defaultStyle.css("background-color").replace(/,[\d\.]+\)/,"0.7)")
}else $("#theme_content").css({
"border-radius":$defaultStyle.css("border-top-left-radius"),
"border-width":$defaultStyle.css("border-left-width"),
"border-color":$defaultStyle.css("border-left-color")})
;if(this.foreground.set)if("gradient"==this.foreground.set){
var grad_data=this.foreground.gradient
;$("#theme_content").setBackgroundGradient(grad_data.array,grad_data.orientation,grad_data.angle,grad_data.animate)
}else"color"==this.foreground.set?$("#theme_content").css("background",/get_color/.test(this.foreground.color)?eval(this.foreground.color):this.foreground.color):$("#theme_content").css("background","");else this.foreground.color?$("#theme_content").setBackgroundGradient(this.foreground.color,this.foreground.orientation,this.foreground.angle):$("#theme_content").css("background","")
;if(this.foreground.shadow||"editor"==this.version.mode){
if("none"==$defaultStyle.css("box-shadow")||""==$defaultStyle.css("box-shadow")||"undefined"==$defaultStyle.css("box-shadow"))var defaultH="0px",defaultV="0px",defaultD="50px",defaultColor="rgba(130, 130, 130, 1)";else var tabBoxS=$defaultStyle.css("box-shadow").match(/(-?\d*\.?\d+px)/g),defaultH=tabBoxS[0],defaultV=tabBoxS[1],defaultD=tabBoxS[2],defaultColor=$defaultStyle.css("box-shadow").match(/^.*(rgba?\([^)]+\)).*$/,'$1')[1]
;if(this.foreground.shadow){$("#theme_content").css({
"box-shadow":(this.foreground.shadowH||defaultH)+" "+(this.foreground.shadowV||defaultV)+" "+(this.foreground.shadowD||defaultD)+" "+(/get_color/.test(this.foreground.shadowcolor)?eval(this.foreground.shadowcolor):this.foreground.shadowcolor||defaultColor)
})
;this.foreground.shadowcolor=this.foreground.shadowcolor||defaultColor
}else $("#theme_content").css("box-shadow","none")
}else $("#theme_content").css("box-shadow","")
;$("#theme_content").css("bottom","0px");$defaultStyle.remove()
}else!1!==this.foreground.select&&$("#theme_content").hide()
;sigCtl.emit('Foreground.changed',this)}else{
this.version.page_bg.foreground.activate==undefined&&(this.version.page_bg.foreground.activate=!0)
;this.version.page_bg.setForeground()}}},
getForeground:function(){var e
;return e=this.foreground&&'unique'==this.foreground.select?this.foreground.activate&&parseInt(this.foreground.width)>0?this.foreground:{}:this.version.page_bg.foreground&&this.version.page_bg.foreground.activate&&parseInt(this.version.page_bg.foreground.width)>0?this.version.page_bg.foreground:{}
},getForegroundWidth:function(){
return parseInt(this.getForeground().width)||deviceController.device_size(deviceController.device).width
},getFooterCpts:function(){
return this.isPartialActive('footer')?this.version.is_sections_system?this.footer.cpts:footer.cpts_for_page():[]
},isFooterHasCpts:function(){return getFooterCpts().length>0},
updateFooter:function(){if(!this.version.is_sections_system){
var self=this,footer_node=$("#footer_bg").removeClass("gradient_animation_vertical gradient_animation_horizontal gradient_animation_radial")
;if(!window.v||!footer_node.length)return setTimeout(function(){
self.updateFooter()},100)
;if(this!=this.version.page_bg&&($.isEmptyObject(this.version.getSelectedPage().footer)||"global"==this.version.getSelectedPage().footer.select)){
this.version.page_bg.footer.activate==undefined&&(this.version.page_bg.footer.activate=!0)
;this.version.page_bg.updateFooter();return}
this.footer.width=this.footer.width||"full_width"
;this.footer.padding_bottom=this.footer.padding_bottom||0
;this.footer.margin_top=this.footer.margin_top||0
;if(this.footer.activate){
var footer_data="unique"==this.footer.select?this.footer:this.version.page_bg.footer
;switch(footer_data.set){case"none":
$("#footer_bg").css("background","");break;case"image":
case"texture":var images=footer_data.images||footer_data.image
;if(images&&images.length>0){var arg
;arg="texture"==footer_data.set?"repeat":"no-repeat "+(footer_data.attachment||"scroll")+" center center / cover transparent"
;footer_node.css("background",arg)
;footer_node.cdnSrc(bestImgSrc(images[0],$(window).width(),$(window).height()))
}break;case"color":
footer_node.css("background",(/get_color/.test(footer_data.color)?eval(footer_data.color):footer_data.color)||($("#accept_bg").length?ThemeConfig.colors.color1:"rgba(125,125,125)"))
;break;case"gradient":var g=this.footer.gradient
;g&&footer_node.setBackgroundGradient(g.array,g.orientation||this.footer.orientation,g.angle||this.footer.angle,g.animate||!1)
}footer.set_width();footer.set_height()}}},
setBackground:function(){var self=this
;if(!window.v)return setTimeout(function(){self.setBackground()
},100);var n=$(".accept_bg:first")
;n.removeClass("gradient_animation_vertical gradient_animation_horizontal gradient_animation_radial")
;$("#bg-images, #bg-video, #bg-pause, #mobile_image_background").remove()
;n.add("#site, .body").not("#mobile_bar").css("background","")
;var $window="editor"==this.version.mode?$("#site"):$(window)
;$window.off("scroll.parallax");$window.off("resize.parallax")
;$(window).off("resize.video")
;sigCtl.disconnect("Site.resized","background_video")
;sigCtl.disconnect("Version.checkHeight","parallax_check_height")
;!this.background.set&&this.background.images&&this.background.images.length&&(this.background.set="image")
;if(n.length)if("global"!=this.version.getSelectedPage().background.select||this==this.version.page_bg)switch(this.background.set){
case"image":case"texture":
if(this.background.images&&this.background.images[0]){
var url=bestImgSrc(this.background.images[0],$(window).width(),$(window).height()),opt_bg="repeat"
;"image"==this.background.set&&(opt_bg="no-repeat fixed center center / cover transparent")
;n.removeAttr("style").find("#mobile_image_background").remove()
;$.fn.is_smallerScreen()
;if($.fn.smallerScreen&&"desktop"!=deviceController.device)$("#theme_background").prepend($("<div id='mobile_image_background'>").cdnSrc(url).css({
position:"fixed",top:"0",bottom:"0",left:"0",right:"0",
"background-size":"cover","background-position":"50% 50%"
}));else{n.css("background",opt_bg);n.cdnSrc(url)}
is_customizable()&&this.version.font.color_activate&&this.version.font.color&&n.css("color",/get_color/.test(this.version.font.color)?eval(this.version.font.color):this.version.font.color)
}break;case"color":case"gradient":
if("gradient"==this.background.set){
var g=this.background.gradient
;g&&n.setBackgroundGradient(g.array,g.orientation,g.angle,g.animate)
}else n.css("background",/get_color/.test(this.background.color)?eval(this.background.color):this.background.color)
;n.css("color","");if(is_customizable()){
if(this.version.font.color_activate&&this.version.font.color){
n.css("color",/get_color/.test(this.version.font.color)?eval(this.version.font.color):this.version.font.color)
;return}
var bg_color,current_page,get_first_color_of_gradient=function(page_data){
if(!page_data.gradient)return null
;if(page_data.gradient.array[0]&&page_data.gradient.array[0][1]){
var cc=page_data.gradient.array[0][1]
;return bg_color=/get_color/.test(cc)?eval(cc):cc}}
;current_page=this.version.getSelectedPage().foreground.select&&"global"!=this.version.getSelectedPage().foreground.select?this.version.getSelectedPage():this.version.page_bg
;current_page.foreground.activate&&(bg_color="color"==current_page.foreground.set?current_page.foreground.color:get_first_color_of_gradient(current_page.foreground))
;if(!bg_color){
current_page=this.version.getSelectedPage().foreground.select&&"global"!=this.version.getSelectedPage().background.select?this.version.getSelectedPage():this.version.page_bg
;bg_color="color"==current_page.background.set?current_page.background.color:get_first_color_of_gradient(current_page.background)
}
bg_color&&n.css("color",get_text_color(/get_color/.test(bg_color)?eval(bg_color):bg_color))
}break;case"parallax":
this.setBackgroundParallax(this.background.images);break
;case"video":if("desktop"==deviceController.device){
this.setBackgroundVideo()
;sigCtl.connect("Site.resized",function(){
self.setBackgroundVideo()},"background_video")
;$(window).on("resize.video",function(){
self.setBackgroundVideo()})
}else if(this.background.video&&this.background.video[0].thumbnails){
opt_bg="no-repeat fixed center center / cover transparent"
;n.css("background","url(\""+this.background.video[0].thumbnails.normal+"\") "+opt_bg)
}break;default:
this!=this.version.page_bg&&this.version.page_bg.setBackground()
}else this.version.page_bg.setBackground()},
setBackgroundParallax:function(){
var e=this,t=this.background.images;if(t&&0!=t.length){
var i=window.navigator.userAgent.match(/MSIE|Trident|Edge/),o=()=>{
var e=10,o=0,n="editor"==this.version.mode?$("#site"):$(window),s="desktop"==deviceDetector.real_device,r=parseInt($("#body").height()),a,l=$("#bg-images")
;if(l.length){var c=l.find(".multi_imgs:last")
;if(c.position().top+c.height()+parseInt($("#theme_background").css("top"))>=r)return
;l.empty()
}else l=$("<div id='bg-images'></div>").prependTo($("#theme_background"))
;if(t.length>1){var d,p,h;do{
p=bestImgSrc(t[o],$(window).width(),$(window).height())
;h="fixed"==(d=$("<div>").addClass("multi_imgs").appendTo(l)).css("background-attachment")&&s
;d.cdnSrc(p);d.data({speed:e,offset:d.position().top})
;o=(o+1)%t.length}while(d.position().top+d.height()<r)
;h&&(a=function(){var t
;$('#bg-images .multi_imgs').each(function(t){
var i=$(this),o=i.data("offset")
;if(i.offset().top<n.scrollTop()+n.height()&&i.offset().top>-i.height()){
var s,r='50% '+-(n.scrollTop()-o)/e+'px';i.css({
backgroundPosition:r})}})})}else{var d,h
;(d=$("<div>").addClass("multi_imgs").cdnSrc(bestImgSrc(t[o],$(window).width(),$(window).height())).appendTo(l)).data({
speed:e,offset:d.position().top});d.css({height:"100%",
"margin-top":"0%"})
;(h="fixed"==d.css("background-attachment")&&s)?a=function(){
var e,t='50% '+-n.scrollTop()/r*100+'px';d.css({
backgroundPosition:t})}:d.css("position","fixed")}
navigator&&navigator.platform&&("iPad"==navigator.platform||"MacIntel"==navigator.platform&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2)&&$('.multi_imgs').css({
height:"100%",position:"fixed",backgroundAttachment:"scroll"})
;if(a){n.off("scroll.parallax").on("scroll.parallax",a)
;i&&"viewer"==this.version.mode&&jQuery.fn.overrideWindowScroll(!0)
}};o()
;sigCtl.connect("Version.checkHeight",o,"parallax_check_height")
;$.fn.trigger("scroll")}},setBackgroundVideo:function(){
if(this.background.video&&this.background.video[0]){
var e=this.background.video[0],t="editor"==this.version.mode?$("#content_editor"):$("#theme_background"),i={
"class":"video_cover",muted:1,show_on_play:!0
},o=$(window).width(),n=e.width,s=$(window).height(),r=e.height
;o/s>n/r?s=o/n*r:o=s/r*n;$("#bg-video, #bg-pause").remove()
;var a=$("<div id='bg-video'><div id='bg-video-wrapper'></div></div>").prependTo(t).css("left",$("#left_menu").width()).find("div:first")
;a.setVideo(e,o,s,i)
;var l=$("<div id=bg-pause>").attr("title","Cache/affiche le fond vidéo.").html($("<span class='fonticon bg_play' style='display:none;'>").html($.fn.fonticon("play")).add($("<span class='fonticon bg-pause'>").html($.fn.fonticon("pause")))).appendTo(".body").on("click",function(){
var t=$(this);t.children().toggle()
;$(":first",t).is(":visible")?a.empty():a.setVideo(e,o,s,i)})
;"editor"==this.version.mode&&l.css($("#site").offset())
;e.thumbnails&&e.thumbnails.normal&&a.css("background-image","url("+e.thumbnails.normal+")")
;$("#site, .body").css("background","transparent")}},
setHasChanged:function(e){this.hasChanged=!0
;e&&e.component_type&&"UI_Menu"==e.component_type.class_name||(this.mobileTreeHasChanged=!0)
;this.version&&this.version.setHasChanged()
;this.version.is_sections_system?this.has_anchor=this.sections.length>0:this.has_anchor=!!this.getCpts().find(e=>e.data&&e.data.anchorid)
},loadPartial:function(e){var t=this;if(this[`${e}_id`]){
this[e]=this.version.getPartialById(e,t[`${e}_id`])
;this[e]&&this[e].display()}},loadLayout:function(){
if(this.version.is_sections_system){var e=this
;if(this.header_id||this.footer_id){this.loadPartial("header")
;this.loadPartial("footer")
}else this.m_get_done.then(function(){e.loadPartial("header")
;e.loadPartial("footer")})}},checkHeight:function(){
if(this.version.is_sections_system)return this==this.version.page_bg?0:this.getHeightOfSections()
;var e=0;this.cpts.each(function(t){
if(t.node.is(":visible")&&t.V()&&!t.option_for("fixed")&&!t.option_for("footer")){
var i=(t.node[0].getBoundingClientRect().height-t.H())/2,o=t.Y()+t.H()+i
;o>e&&(e=o)}})
;e+=parseInt($("#theme_content").css("margin-bottom"))||0
;this.myheight=e;return e},checkWidth:function(){
if("viewer"==this.version.mode&&"desktop"!=deviceController.device)return deviceController.device_size().width/2
;var e=0,t=$("#pages").width()/2
;this.getCpts().each(function(i){
if(i.V()&&!i.option_for("fixed")&&"UI_Menu"!=i.component_type.class_name){
if(i.data&&i.data.gadget&&"backtotop"==i.data.gadget)return
;var o=i.W(),n=(i.node[0].getBoundingClientRect().width-o)/2,s=i.X()-(i.option_for("fixed")?$("#pages")[0].getBoundingClientRect().left:0)-t-n,r=s+o+2*n
;-s>e&&(e=-s);r>e&&(e=r)}});return e},checkType:function(e){
var t=this.getTypeMax(e);if(0==t){
statusController.message(sprintf("Ce module ne peut pas être ajouté à cette page.\u003cbr\u003eVeuillez ajouter ce module sur une autre page...",t),"warning",null,5)
;return!1}if(t&&(this.countType[e.component_type_id]||1)>t){
statusController.message(sprintf("Ce module ne peut pas être ajouté (chaque page ne peut pas en contenir plus de %1$d).\u003cbr\u003eVeuillez ajouter ce module sur une autre page...",t),"warning",null,5)
;return!1}return!0},getSectionsWithLayout:function(e){var t=[]
;(e=e||{}).with_header='undefined'==typeof e.with_header||e.with_header
;e.with_footer='undefined'==typeof e.with_footer||e.with_footer
;e.with_header&&this.header&&(t=t.concat(this.header))
;t=t.concat(this.sections)
;e.with_footer&&this.footer&&(t=t.concat(this.footer));return t
},getSectionById:function(e){
return this.sections.find(function(e){e.getId()})},
getLastSection:function(){
return this.sections[this.sections.length-1]},
getSectionByYPosition:function(e){
var t=this.getSectionsWithLayout().find(t=>{
var i=t.$node.position()
;return e>=i.top&&e<=i.top+t.getHeightWithPadding()})
;sectionAddPlaceholder.$node.toggleClass("section-state-hover",!t&&$("body").hasClass("onDraggable"))
;return t},getHeightOfSections:function(){
return"mobile_tree"==deviceController.device?$("#mobile_wrapper").height():this.$sections.height()
},getVisibleHeight:function(){
return this.node.getVisibleHeight()},
toggleSectionOverlay:function(e){
var t=this.getSectionByYPosition(e)
;this.getSectionsWithLayout().each(function(e){
e.$node.toggleClass("section-state-hover",e==t&&$("body").hasClass("onDraggable"))
})},setPartial:function(e,t,i){i=i||{};var o=this[e]
;o&&o.detachFromDOM();if(t){this[e]=t;this[e+"_id"]=t.getId()
;t.display();t.features.createToolBar()
;i.no_select||blockSelector.selectSection(t)}else{this[e]=null
;this[e+"_id"]=null}if(o!=this[e]){this.setHasChanged()
;historyController.add(this,[o,"changeLayout",this[e],e])}
this.version.commonPartialTasks(e,!1);this.setHasChanged()},
setLayout:function(e){if(e){historyController.startInGroup()
;if('object'==typeof e.header){
this.setPartial('header',e.header,{no_select:!0})
;this.sections.length>0&&this.sections[0].features.buildNodesAddButtons()
}if('object'==typeof e.footer){
this.setPartial('footer',e.footer,{no_select:!0})
;this.sections.length>0&&this.getLastSection().features.buildNodesAddButtons()
}historyController.stopInGroup()}},getLayout:function(){return{
header:this.header||null,footer:this.footer||null}},
isPartialActive:function(e){var t=!1
;this.version.is_sections_system?this[e]&&(t=!0):"footer"==e&&(t=footer.active())
;return t},allSectionsDisplayed:function(){
return this.loadSections().then(()=>$.when.apply($,this.sections.map(e=>e.onDisplayed)))
},setViewerFooterMarginTop:function(){
this.version.is_sections_system&&"viewer"==this.version.mode&&'mobile_tree'!=deviceController.device&&this.allSectionsDisplayed().then(()=>{
var e=this.getSectionsWithLayout().slice(-1)[0]
;if(e&&"Footer"==e.type){this.getSectionsWithLayout().each(e=>{
e.$node.css({marginTop:''})})
;var t=$("#vw_footer_holder").height(),i=this.getHeightOfSections(),o=window.innerHeight
;if(i<=o){var n=o-i-t;e.$node.css({marginTop:Math.max(n,0)})
}else e.$node.css({marginTop:''});this.version.checkHeight()}})
},defaultPartial:function(e){if(!this[e]){
var t=this.version[e.pluralize()][0];this[e]=t}},
defaultLayout:function(){if(this.version.is_sections_system){
this.defaultPartial("header");this.defaultPartial("footer")}},
removeAllHoveredFeatures:function(){
this.getSectionsWithLayout().each(function(e){
e.toggleHovered(!1)})},isInSectionsDOM:function(e){
return this.$sections.find(e).length>0}})
;var Pages_fg=Class.create()
;Object.extend(Pages_fg.prototype,new Page)
;Object.extend(Pages_fg.prototype,{initialize:function(){
var e=this;this.visible=!0;this.pageInit.apply(this,arguments)
;this.security={};this.background={};this.foreground={}
;this.version.is_sections_system||(this.footer={})
;this.effects={};this.mobile_tree=[];this.transition={}
;this.seo={};this.cptUrl=null;this.cptTitle=null
;sigCtl.connect("Theme.changed",function(){
if(e.version.selectedPageFg==e){e.setBackground()
;e.setForeground();e.updateFooter()}})
;'editor'==this.version.mode&&(this.ai=new AiObject(this,{
getters:{url:function(){return window.v.url+e.getUrl()},
title:function(){return e.getTitle()},name:function(){
return e.name},content:function(){
return e.getVisibleCpts('desktop').map(function(e){
return e.ui.ai&&e.ui.ai.getters&&e.ui.ai.getters.content()
}).filter(function(e){return'string'==typeof e&&e.length>0
}).join("\n")}}}))},clone:function(e){var t=new Pages_fg(e,!0)
;t.security=$.extend({},this.security)
;t.background=$.extend({},this.background)
;t.foreground=$.extend({},this.foreground)
;t.effects=$.extend({},this.effects);t.mobile_tree=[]
;t.transition=$.extend({},this.transition)
;t.seo=$.extend({},this.seo)
;t.editor=Misc.deepCloneObj(this.editor)
;if(this.version.is_sections_system){
t.setPartial('header',this.header)
;t.setPartial('footer',this.footer)}else{
this.getCpts().sort(function(e,t){return e.Z()-t.Z()})
;t.footer=this.footer}t.from_clone=!0
;var i=v.is_sections_system?this.allSectionsDisplayed():$.Deferred().resolve()
;this.getChildren().each(e=>{
i=i.then(()=>$.delay(100)).then(()=>{var i=e.clone(t)
;if(this.version.is_sections_system)return i
;MobileTree.custom_positions.migrate('tmp_id',i,e.getId(),i.getId())
;return i.create()})});return t},getClass:function(){
return"page_fg"},_updateMobileTree:function(e){
var t=$.Deferred();this.version.force_no_transition=!0
;generateTree(this).then(()=>{e?this.saveTree().then(()=>{
setTimeout(()=>{t.resolve()},50)}):setTimeout(()=>{t.resolve()
},50)});t.then(()=>{this.version.force_no_transition=null})
;return t},saveTree:function(){var e=this,t=[]
;if(this.version.is_sections_system){
var i=i=>i.mobile_tree_has_changed&&!i.mobile_tree_has_tmp_ids&&-1===JSON.stringify(i.mobile_tree||[]).indexOf('_tmp_')?$.ajax(Object.extend({
url:"/json/post",
name:"Sauvegarde du site mobile automatique",
dataType:"json",contentType:"application/json",
data:JSON.stringify(Object.extend({type:i.type,id:i.id,
mobile_tree:i.mobile_tree,mobile_tree_debug:i.mobile_tree_debug
},{}))},ModelTransfer)).then(function(o){
i.mobile_tree_has_changed=!1
;o.success||t.push("Error saving mobile tree for "+e.id+" "+(o.errors||""))
;return $.Deferred().resolve()},function(){
t.push("Error saving mobile tree for "+e.id)
;return $.Deferred().resolve()
}):$.Deferred().resolve(),o=this.sections.map(e=>i(e))
;Object.values(this.getLayout()).forEach(e=>{e&&o.push(i(e))})
;return $.when.apply($,o)}var n=$.Deferred()
;$.ajax(Object.extend({url:"/json/post",
name:"Sauvegarde du site mobile automatique",
dataType:"json",contentType:"application/json",
data:JSON.stringify(Object.extend({type:e.type,id:e.id,
app_version:window.app_version,mobile_tree:e.mobile_tree,
editor:e.editor},{}))},ModelTransfer)).then(function(i){
i.success||t.push("Error saving mobile tree for "+e.id+" "+(i.errors||""))
;n.resolve()},function(){
t.push("Error saving mobile tree for "+e.id);n.resolve()})
;return n},getHash:function(e,t){t=t||this.cptUrl
;URL_WITH_UNDERSCORE_LAST_SITE_ID=1657e3
;var i=this.seo&&this.seo.url&&""!=this.seo.url?this.seo.url.remove_accents().replace(/\ /g,'-').to_alphanumeric('-'):this.name.to_alphanumeric(this.version.site_id<=URL_WITH_UNDERSCORE_LAST_SITE_ID?"_":"-")
;site.clean_urls||(i+="."+this.pageid);!e&&t&&(i+=t);return i},
getUrl:function(e,t,i){i=i||{};t=t||this.cptUrl;var o
;o=!e&&t||0!=this.version.pages_fg.indexOf(this)?"/"+this.getHash(e,t)+(!e&&t?"":site.clean_urls?"":".htm"):"/"
;i.skip_search||(o+=!location.search.match(/preview_key|capture_id|clid/)&&this.version.pathname?"":location.search)
;return o+=this.anchorUrl?"#"+this.anchorUrl:""},
getTitle:function(){
if(this.cptTitle)return this.cptTitle+" - "+this.version.name
;if(this.seo&&this.seo.title&&""!=this.seo.title)return this.seo.title
;var e=this.version.name+" - "+this.name
;return e.length>60?this.name+" - "+this.version.name:e},
getDescription:function(){
return this.seo&&this.seo.description?this.seo.description:this.getTitle()
},setCptUrl:function(e,t,i){var o=this.cptUrl;this.cptUrl=e
;(t||null==t)&&(this.cptTitle=t)
;this.version.setPathname(this,i||o==e)},isDraft:function(){
return!(!(this.draft||this.parentPage()&&this.parentPage().draft)||!this.version.features.page_draft_enabled||this==this.version.pages_fg[0]||this==this.version.page_bg)
},getStatName:function(){
return this.cptUrl?this.name+this.cptUrl:this.name},
getTypeMax:function(e){
return e.component_type&&e.component_type.max?e.component_type.max.fg:null
},previous:function(){
for(var e=null,t=0;!e&&t<this.version.pages_fg.length;){
this.version.pages_fg[t]==this&&(e=t);t++}
return e>0?this.version.pages_fg[e-1]:null},
parentPage:function(){
for(var e=this.previous();null!=e&&e.level>=this.level;)e=e.previous()
;return e},childrenPages:function(e){
for(var t=this.version.pages_fg.slice(this.version.pages_fg.indexOf(this)+1),i=[],o=0;o<t.length&&!(t[o].level<=this.level);o++)i.push(t[o])
;return e?i:i.sort(function(e,t){return e.level>t.level})}})
;var Page_bg=Class.create()
;Object.extend(Page_bg.prototype,new Page)
;Object.extend(Page_bg.prototype,{initialize:function(){
this.pageInit.apply(this,arguments);this.security={}
;this.editor=null;this.maxZIndex=5e3;this.foreground={}
;this.minZIndex=0;var e=this
;sigCtl.getVariable("PageBg.shown",function(){
setTimeout(function(){e.launchEffects()},2e3)
;$.fn.protect_content()})
;sigCtl.connect("Theme.changed",function(){e.launchEffects()
;e.setBackground();e.setForeground();e.updateFooter()})},
getClass:function(){return"page_bg"},getTypeMax:function(e){
return e.component_type&&e.component_type.max?e.component_type.max.bg:null
},setEffect:function(e,t){clearInterval(this.effectInterval)
;if(!window.v)return setTimeout(function(){i.setEffect(e,t)
},100);var i=this,o="sw_"+e
;$("#"+e+", .control_effect").remove();if(t){this.effects[e]=t
;var n=JSON.parse($.cookie(o))
;n||$("<div id='"+e+"'>").prependTo("#body")
;$("<div id='control_"+e+"' class='control_effect'>").on("click",function(){
n=!JSON.parse($.cookie(o));$.cookie(o,n,{expires:0,path:'/'})
;if(n){clearInterval(i.effectInterval);$("#"+e).remove()
}else i.setEffect(e,t)}).prependTo("#body");switch(e){
case"none":
$("#snow, #control_snow, #heart, #control_heart").remove()
;delete this.effects.snow;delete this.effects.heart
;delete this.effects.none;break;case"snow":
$("#heart, #control_heart").remove();delete this.effects.heart
;var s=$("#snow").clone();$("#snow").remove()
;$("<div id='snow_w'></div>").prependTo('#body').append(s);break
;case"heart":delete this.effects.snow
;$("#snow, #control_snow").remove()
;$("#heart").append("<canvas></canvas>")
;$(window).resize(function(){
window.v.page_bg.effects[v]&&setTimeout(function(){
i.setEffect(e,t)},100)});this.getHeartBuild(!0).initialize()}
}else delete this.effects[e];return this},
launchEffects:function(){var e=this
;$.each(this.effects,function(t,i){e.setEffect(t,i)})},
getHeartBuild:function(e){var t=this;return{heartHeight:60,
heartWidth:64,hearts:[],
heartImage:"https://ssl.sitew.org/images/blog/ntnw5.png",
maxHearts:40,minScale:.4,draw:function(){this.setCanvasSize()
;this.ctx.clearRect(0,0,this.w,this.h)
;for(var e=0;e<this.hearts.length;e++){var t=this.hearts[e]
;t.image=new Image;t.image.style.height=t.height
;t.image.src=this.heartImage;this.ctx.globalAlpha=t.opacity
;this.ctx.drawImage(t.image,t.x,t.y,t.width,t.height)}
this.move()},move:function(){
for(var t=0;t<this.hearts.length;t++){var i=this.hearts[t]
;e?i.y-=i.ys:i.y+=i.ys;if(e?i.y<-this.heartHeight:i.y>this.h){
i.x=Math.random()*this.w
;i.y=e?this.h+this.heartHeight:-1*this.heartHeight}}},
setCanvasSize:function(){
this.canvas.width=Math.min($("#heart").outerWidth(),4096)
;this.canvas.height=Math.min($("#heart").outerHeight(),8192)
;this.w=this.canvas.width;this.h=this.canvas.height},
initialize:function(){this.canvas=$('#heart canvas')[0]
;if(this.canvas&&this.canvas.getContext){this.setCanvasSize()
;this.ctx=this.canvas.getContext('2d')
;for(var e=0;e<this.maxHearts;e++){
var i=Math.random()*(1-this.minScale)+this.minScale
;this.hearts.push({x:Math.random()*this.w,
y:Math.random()*this.h,ys:Math.random()+1,
height:i*this.heartHeight,width:i*this.heartWidth,opacity:i})}
t.effectInterval=setInterval($.proxy(this.draw,this),60)}}}}})
;var Preset=Class.create()
;Object.extend(Preset.prototype,new Model)
;Object.extend(Preset.prototype,{initialize:function(e,t,i){
e?this.component_type_id=e:t&&(this.graphical_type_id=t)
;this.cssid=i;this.m_get_done=$.Deferred();var o=this
;this.sigCtl=new Signal(this);this.m_get_done.done(function(){
o.loaded()})},loaded:function(){var e=this
;this.type="ComponentPreset"
;this.component_type_id?this.component_type=ComponentType.component_types[this.component_type_id]:this.graphical_type_id&&GraphicalType.loaded.then(function(){
e.component_type=GraphicalType.graphical_types[e.graphical_type_id]
});e.sigCtl.connect("Theme.changed",function(){
Misc.deferred(function(){e.load()},500,5e3)})},
to_json:function(){var e={version_id:this.version_id,
cssid:this.cssid,data:this.data}
;this.component_type_id?e.component_type_id=this.component_type_id:this.graphical_type_id&&(e.graphical_type_id=this.graphical_type_id)
;return e},parse:function(){
return css_parser("preset",this.cssid,JSON.parse(this.data),{
is_customizable:is_customizable()})},ui_cpt:function(){
this.component_type instanceof GraphicalType||this._ui_cpt||(this._ui_cpt=eval(this.component_type.class_name))
;return this._ui_cpt},remove:function(e,t){
historyController.add(presetController,[this,this.is_version_preset()?"removeVersionPreset":"removePreset",t,e,this.component_type],!1)
;v.presets.splice(v.presets.indexOf(this),1)
;v.presetsToDelete.push(this)
;$("#preset"+(this.component_type_id?"_"+this.component_type_id:"")+"_"+this.cssid).remove()
;var i=this.cssid.match(/\d+/);if(i&&i[0]){i=i[0]
;if(this.graphical_type_id)GraphicalType.graphical_types[this.graphical_type_id].removePreset(i);else{
var o=this.component_type.class_name.toLowerCase()
;if(v.presets_names[o]&&v.presets_names[o][i]){
delete v.presets_names[o][i];v.setHasChanged()}
this.ui_cpt().updatePreset()}
this.sigCtl.disconnect("Theme.changed")}},
_customDataKey:function(e){
return e?e.match(/^([^#]*)#(opt_\w+)#(.*)/):undefined},
customGetData:function(k,v,force,opts){
var ret=null,opts=opts||{},d=this._customDataKey(k)
;d&&this.data[d[1]][d[2]]&&(ret=this.data[d[1]][d[2]][d[3]]&&!opts.raw?JSON.parse(JSON.stringify(this.data[d[1]][d[2]][d[3]]).replace(new RegExp("get_color\\((\\d),\\s?(-?\\d)\\)","gi"),function(match){
return eval(match)})):this.data[d[1]][d[2]][d[3]]);try{
var js_migrations=[[""+k,/options_(paragraph|title)#opt(_\d+)#font_weight/,"ret == 'bold'",700],[""+k,/options_(paragraph|title)#opt(_\d+)#font_weight/,"ret == 'normal'",400],[""+k,/options_(paragraph|title)#opt(_\d+)#font_weight/,"ret == 'light'",300]]
;js_migrations.each(function(js_migration){
js_migration[0].match(js_migration[1])&&eval(js_migration[2])&&(ret=js_migration[3])
})}catch(e){}return ret},getData:function(k,no_custom,opts){
var opts=opts||{};if(no_custom||k&&!k.match("#")){
var data=this.data[k]&&!opts.raw?JSON.parse(JSON.stringify(this.data[k]).replace(new RegExp("get_color\\((\\d),\\s?(-?\\d)\\)","gi"),function(match){
return eval(match)})):this.data[k];return data}
return this.customGetData(k,undefined,undefined,opts)},
getAllData:function(e,t){var i=this,o={}
;Object.keys(this.data).each(function(n){o[n]=i.getData(n,e,t)})
;return o},customSetData:function(e,t,i){
var o=this,n=!1,s=this._customDataKey(e),r=Misc.deepCloneObj(this.getData(e))
;if(s){var a=Misc.deepCloneObj(this.data[s[1]]||{})
;a[s[2]]=a[s[2]]||{};a[s[2]][s[3]]=t
;n=this._setDataKey(s[1],a,i,!0)
}else n=this._setDataKey(e,t,i,!0);if(this.graphical_type_id){
var l=Misc.deepCloneObj(this.getData(e))
;JSON_.stringify(r)!=JSON_.stringify(l)&&historyController.withMerge(this.uniqId()+'_setData_'+e.match(/(.*#.*)#/)[1],function(){
historyController.add(presetController,[o,"dataAction",[e,r,l]],!1)
})}return n},_setDataKey:function(e,t,i,o){
if(!(o||e&&!e.match("#")))return this.customSetData(e,t)
;if(i||JSON_.stringify(this.data[e])!=JSON_.stringify(t)){
this.data[e]=t;return!0}},setData:function(e,t,i){var o=[]
;if("object"==typeof e)for(var n in e)this._setDataKey(n,e[n],i)&&o.push(n);else this._setDataKey(e,t,i)&&o.push(e)
;if(o.length>0){this.setHasChanged();var s=this.ui_cpt()
;s&&s.onPropertyPresetChanged&&s.onPropertyPresetChanged(o)}
this.load(o)},find_data:function(e,t){
if(!this.data[e+"_order"])return undefined
;for(var i=undefined,o=!1,n=0,s=this;!i&&n<this.data[e+"_order"].length;){
Object.keys(s.data[e])[n]&&(i=s.data[e][Object.keys(s.data[e])[n]][t])
;n++}return i},getPropertyPresetNode:function(){
if(!this.propertyPresetNode){
this.propertyPresetNode=this.component_type.preset_properties.toNode(this)
;if(this.graphical_type_id){
var e=this.cssid.match(/\d+$/),t=GraphicalType.graphical_types[this.graphical_type_id],i=[t.preset_data.prefix+"_"+e,t.preset_data.prefix]
;this.propertyPresetNode.prepend($("<fieldset class='gt_preview_left_panel'><legend>Aperçu</legend></fieldset>").append($(t.preset_data.preset_preview).addClass(i.join(' '))))
;this.propertyPresetNode.append('<div class="gt_name_wrapper"><div>Nom du style :</div><input type="text" class="preset_name_edit gt_name_input" /></div>')
;presetController.bind_preset_name(this.component_type,this.propertyPresetNode.find(".gt_name_wrapper"),e[0])
}
this.propertyPresetNode.is(":empty")&&this.propertyPresetNode.append("<li>Ce module n'a pas encore de styles.</li>")
}return this.propertyPresetNode},
getDefaultFromProperties:function(){
this.data=Object.extend({},this.component_type.properties.getDefault({
for_preset:!0}))
;this.data=Object.extend(this.data,this.component_type.preset_properties.getDefault({
for_preset:!0}))},init_controls:function(){var e=this
;this.init_sliders&&this.init_sliders(this)},
setHasChanged:function(){this.hasChanged=!0;v.setHasChanged()},
load:function(e){if("editor"==v.mode){
var t=this,i,o=function(i){
var o="preset_"+(t.component_type_id?t.component_type_id+"_":"")+t.cssid
;$("#"+o).remove()
;$(loadStyle(css_parser(t.component_type.class_name,i,$.extend({},t,{
data:t.getAllData()}),{is_customizable:is_customizable()
}),$("#presets_custom_styles_css")[0])).attr("id",o).addClass("preset_for_cpts")
;t.graphical_type_id&&t.used_by&&Object.keys(t.used_by).each(function(e){
t.used_by[e].each(function(t){Misc.deferred(function(){try{
presetController.find(null,e,t).load()}catch(i){}},500,2e3)})})
;GraphicalType.available&&e&&e.length&&t.graphical_type_id&&JSON_.stringify(e).match(/border|margin|padding|gt_|size/)&&GraphicalType.loaded.then(function(){
t.component_type.updateCpts(t.cssid.match(/\d+$/)[0])})}
;t.component_type.presetCss?(i=t.component_type.presetCss()).done(o):ComponentType.loadType(t.component_type.id).done(function(){
(i=t.component_type.presetCss()).done(o)})}},uniqId:function(){
var e;if(this.id)e="preset_"+this.id;else{
this.tmp_id=this.tmp_id||$.fn.genId("preset_tmp_");e=this.tmp_id
}return e},is_version_preset:function(){
if(this.graphical_type_id){
var e=GraphicalType.version_config(this.graphical_type_id)
;return e&&e[1]==this.cssid.match(/\d+$/)[0]}return!1},
onTabChanged:function(e){
var t,i=(this.component_type instanceof GraphicalType?$('#design_blocks_wrapper'):this.component_type.getPropertyDesignNode().find(".preset_properties_node")).find(".preset_demo")
;if(i.length&&e.tabs_data&&e.tabs_data.length>=e.selected_tab){
var o=e.tabs_data[e.selected_tab];if(o&&o.state){
i.removeClass("normal hovered selected focused")
;i.addClass(o.state)}}}});var PresetController=Class.create()
;PresetController.prototype={initialize:function(){
this.presets_downloaded=$.Deferred()
;this.presets_loaded=$.Deferred()
;this.presets_loaded.then(function(){
console.info("[Preset Controller] Presets loaded")
;sigCtl.emit('presets_loaded')})},find:function(e,t,i){
if(arguments.length<3){
console.warn("Missing parameters in presetController.find call")
;return[]}return v.presets.find(function(o){
var n=o.cssid.match(/\d+/)
;return n&&(e&&o.component_type_id==e||t&&o.graphical_type_id==t)&&parseInt(n[0])==parseInt(i)
})},find_all:function(e,t){
return v.presets.find_all(function(i){
return e&&i.component_type_id==e||t&&i.graphical_type_id==t})},
create:function(cpt,clone_css_id,dup_options,force_clone_default_preset){
var self=this,h_class=cpt.component_type?eval(cpt.component_type.class_name):cpt
;dup_options=dup_options||{};$("#loading_preset").show()
;var css_id=clone_css_id&&!force_clone_default_preset&&clone_css_id<=h_class.preset_data.default_presets.length?clone_css_id:(new Date).valueOf(),p=new Preset(cpt.component_type_id,cpt.key,h_class.preset_data.prefix+(cpt instanceof GraphicalType?"_":"")+css_id)
;v.presets.push(p);p.loaded()
;if(force_clone_default_preset||clone_css_id&&clone_css_id>h_class.preset_data.default_presets.length){
p.data=Misc.deepCloneObj(this.find(cpt.component_type_id,cpt.key,clone_css_id).data)
;statusController.message(sprintf("Le style de %1$s a été cloné, vous pouvez maintenant le modifier",(cpt.component_type?cpt.component_type:cpt).title.toLowerCase()),"success")
}else{p.getDefaultFromProperties();if(clone_css_id){
var theme_config_type=ThemeConfig[cpt instanceof GraphicalType?cpt.class_name:cpt.component_type.class_name]
;if(theme_config_type&&theme_config_type["default_"+clone_css_id]){
var json_data=ThemeConfig[cpt instanceof GraphicalType?cpt.class_name:cpt.component_type.class_name]["default_"+clone_css_id]
;$.each(json_data.keys_for_js,function(e,t){
p.data[t]=json_data[t]})}
}else p.data=$.extend(p.data,h_class.getDefaultOptions(),dup_options)
;statusController.message(sprintf("Le style de %1$s a été créé, vous pouvez maintenant le modifier",(cpt.component_type?cpt.component_type:cpt).title.toLowerCase()),"success")
}p.load();p.version_id=v.id
;cpt.component_type?cpt.component_type.default_preset=css_id:cpt.default_preset=css_id
;cpt.setData&&historyController.offRecords(function(){
cpt.setData("preset",css_id)})
;var new_node_list=(cpt.ui?cpt.ui:cpt).create_preset_selection_node(css_id)
;this.load_panel(cpt,css_id)
;new_node_list.find(".rad").prop("checked",!0).change()
;$("#loading_preset").hide()
;historyController.add(this,[p,"addPreset",new_node_list,new_node_list.index()-(p.graphical_type_id?1:0)],!1)
;$("#design_blocks_wrapper").desactivate()
;cpt.ui&&cpt.ui.applyPreset&&cpt.ui.applyPreset();return p},
componentTypeLoaded:function(e,t){var i=this
;this.presets_downloaded.done(function(){
i.find_all(e,t).each(function(e){e.load()})
;i.presets_loaded.resolve()})},undo:function(e){switch(e[1]){
case"addPreset":e[0].remove();e[2].remove()
;$('#design_blocks_wrapper').desactivate();break
;case"removePreset":v.presetsToDelete.remove(e[0])
;v.presets.push(e[0])
;0==e[3]?$(e[2]).prependTo(e[0].graphical_type_id?GraphicalType.graphical_types[e[0].graphical_type_id].propertyDesignNode.find('.presets_container .presets_container'):".dyn_presets"):$(e[2]).insertAfter((e[0].graphical_type_id?GraphicalType.graphical_types[e[0].graphical_type_id].propertyDesignNode.find('.presets_container .button_list_options'):$(".dyn_presets section")).eq(e[3]-1))
;e[0].load&&e[0].load();break;case"removeVersionPreset":
v.presetsToDelete.remove(e[0]);v.presets.push(e[0])
;e[0].load&&e[0].load()
;GraphicalType.remove_version_preset(e[0].graphical_type_id)
;GraphicalType.set_version_preset(e[0].graphical_type_id,e[0].cssid.match(/\d+$/)[0])
;GraphicalType.graphical_types[e[0].graphical_type_id].propertyDesignNode.find('.version_preset_container .version_preset').empty().append($(e[2]))
;break;case"customizePreset":
$(e[0]).find(".btn-revert").trigger("click");break
;case"setVersionPreset":
e[2]?GraphicalType.set_version_preset(e[0].key,e[2][1]):GraphicalType.remove_version_preset(e[0].key)
;break;case"dataAction":historyController.offRecords(function(){
e[0].setData(e[2][0],e[2][1])});e[0].setHasChanged()
;e[0].propertyPresetNode=undefined
;e[0]==(e[0].graphical_type_id?$('#design_blocks_wrapper'):e[0].getPropertyDesignNode().find(".preset_properties_node")).data('preset')&&presetController.load_panel(e[0].component_type,e[0].cssid.match(/\d+$/)[0])
;e[0].load();break;case"addProperty":
delete e[0].data[e[2]][e[3]]
;e[0].data[e[2]+"_order"].remove(e[3])
;e[0].propertyPresetNode=undefined
;e[0]==(e[0].graphical_type_id?$('#design_blocks_wrapper'):e[0].getPropertyDesignNode().find(".preset_properties_node")).data('preset')&&presetController.load_panel(e[0].component_type,e[0].cssid.match(/\d+$/)[0])
;e[0].load();break;case"removeProperty":var t={}
;Object.keys(e[4]).each(function(i){
t[e[2]+"#"+e[3]+"#"+i]=e[4][i]});e[0].setData(t)
;e[0].data[e[2]+"_order"].push(e[3])
;e[0].propertyPresetNode=undefined
;e[0]==(e[0].graphical_type_id?$('#design_blocks_wrapper'):e[0].getPropertyDesignNode().find(".preset_properties_node")).data('preset')&&presetController.load_panel(e[0].component_type,e[0].cssid.match(/\d+$/)[0])
;e[0].load()}},redo:function(e){switch(e[1]){case"addPreset":
v.presetsToDelete.remove(e[0]);v.presets.push(e[0])
;0==e[3]?$(e[2]).prependTo(e[0].graphical_type_id?GraphicalType.graphical_types[e[0].graphical_type_id].propertyDesignNode.find('.presets_container .presets_container'):".dyn_presets"):$(e[2]).insertAfter((e[0].graphical_type_id?GraphicalType.graphical_types[e[0].graphical_type_id].propertyDesignNode.find('.presets_container .button_list_options'):$(".dyn_presets section")).eq(e[3]-1))
;e[0].load&&e[0].load();break;case"removePreset":e[0].remove()
;e[2].remove();$('#design_blocks_wrapper').desactivate();break
;case"removeVersionPreset":v.presetsToDelete.push(e[0])
;v.presets.remove(e[0])
;GraphicalType.remove_version_preset(e[0].graphical_type_id)
;var t=GraphicalType.graphical_types[e[0].graphical_type_id]
;t.updateCpts()
;t.propertyDesignNode.find('.items_container[data-cssid='+e[0].cssid.match(/\d+$/)[0]+']').remove()
;break;case"customizePreset":
$(e[0]).find(".convertPreset").trigger("click");break
;case"setVersionPreset":
GraphicalType.set_version_preset(e[0].key,e[3][1]);break
;case"dataAction":historyController.offRecords(function(){
e[0].setData(e[2][0],e[2][2])});e[0].setHasChanged()
;e[0].propertyPresetNode=undefined
;e[0]==(e[0].graphical_type_id?$('#design_blocks_wrapper'):e[0].getPropertyDesignNode().find(".preset_properties_node")).data('preset')&&presetController.load_panel(e[0].component_type,e[0].cssid.match(/\d+$/)[0])
;e[0].load();break;case"addProperty":e[0].setData(e[4])
;e[0].data[e[2]+"_order"].push(e[3])
;e[0].propertyPresetNode=undefined
;e[0]==(e[0].graphical_type_id?$('#design_blocks_wrapper'):e[0].getPropertyDesignNode().find(".preset_properties_node")).data('preset')&&presetController.load_panel(e[0].component_type,e[0].cssid.match(/\d+$/)[0])
;e[0].load();break;case"removeProperty":
delete e[0].data[e[2]][e[3]]
;e[0].data[e[2]+"_order"].remove(e[3])
;e[0].propertyPresetNode=undefined
;e[0]==(e[0].graphical_type_id?$('#design_blocks_wrapper'):e[0].getPropertyDesignNode().find(".preset_properties_node")).data('preset')&&presetController.load_panel(e[0].component_type,e[0].cssid.match(/\d+$/)[0])
;e[0].load()}},historyMerge:function(e,t){var i=[t[0],t[1],t[2]]
;if(t[2][0]!=e[2][0])return!1;i[2][1]=e[2][1];return i},
loadDefaultPresets:function(cpt_type,gt_type,force,data_to_load){
if(cpt_type)var cpt_class=eval(cpt_type.class_name),cpt_type_short_class_name=cpt_type.short_class_name(),class_name=cpt_type.class_name,class_selector="ui_"+cpt_type_short_class_name+"_custom_css";else if(gt_type)var cpt_class=gt_type,cpt_type_short_class_name=gt_type.short_class_name().replace("gt_",""),class_name=gt_type.class_name,class_selector=class_name.toLowerCase()+"_custom_css"
;data_to_load=data_to_load||cpt_class.preset_data.default_presets||[]
;var loadPressetCss=function(e,t){
var i=class_selector+"_style_"+t
;cpt_class.preset_data.css_style[t]=cpt_class.preset_data.css_style[t]||$.ajax({
url:"/assets/precompile/"+(gt_type?"gt":"cpts")+"/"+cpt_type_short_class_name+"/"+(e+1)+".css?clearcache=11",
dataType:"text",name:"Chargement des styles par défaut"})
;cpt_class.preset_data.css_style[t].done(function(e){
$("#"+i).length||ThemeConfig[(cpt_type||gt_type).class_name]&&ThemeConfig[(cpt_type||gt_type).class_name][t]&&$(loadStyle(css_parser(cpt_type_short_class_name,e,ThemeConfig[(cpt_type||gt_type).class_name][t],{
is_customizable:is_customizable()
}),$("#block_custom_styles_css")[0])).attr("id",i).addClass(class_selector)
})};if(force){$("."+class_selector).remove()
;cpt_class.preset_data.css_style={}}
0==$("."+class_selector).length&&data_to_load.length&&$.each(data_to_load,function(e,t){
loadPressetCss(e,t)})},create_panel:function(e,t){
var i=this,t=t||{};$.extend(t,{panel_mode:"create_panel"})
;editorController.deselect();if(window.v&&"editor"==v.mode){
var o=(e instanceof GraphicalType?v.site_id+"_"+e.class_name:e.component_type.class_name).toLocaleLowerCase()
;editorConfig.preset_name=editorConfig.preset_name||{}
;editorConfig.preset_name[o]||(editorConfig.preset_name[o]={})}
var n=i.find_all.apply(i,e instanceof GraphicalType?[null,e.key]:[e.component_type_id,null])
;t.list_default_presets&&e.preset_data.default_presets&&e.preset_data.default_presets.each(function(i){
var o=$.extend({disable_remove:!0},t)
;e.create_preset_selection_node?e.create_preset_selection_node(i.match(/default_(\d+)/)[1],o):e.ui.create_preset_selection_node(i.match(/default_(\d+)/)[1],o)
});$.each(n,function(i,o){
e.create_preset_selection_node?e.create_preset_selection_node(o.cssid.match(/\d+/)[0],$.extend({
disable_revert:!0
},t)):e.ui.create_preset_selection_node(o.cssid.match(/\d+/)[0],t)
})},load_panel:function(e,t){
var i=this.find(e instanceof GraphicalType?null:e.component_type_id,e instanceof GraphicalType?e.key:null,t),o=e instanceof GraphicalType?$('#design_blocks_wrapper'):e.getPropertyDesignNode().find(".preset_properties_node")
;o.destroyScrollbar();o.find('> *').detach();o.data({preset:i})
;if(i){o.append(i.getPropertyPresetNode())
;i.init_controls("script.js load_preset_panel")}},
get_cpt_type_name:function(e){return e.class_name.toLowerCase()
},save_name:function(e,t,i){
var o=t.find(".preset_name_edit").val();o=o||""
;v.presets_names[this.get_cpt_type_name(e)]=v.presets_names[this.get_cpt_type_name(e)]||{}
;v.presets_names[this.get_cpt_type_name(e)][i]=o
;v.setHasChanged()
;if(e.key)$("#gt_"+e.key+"_panel").find("[data-cssid="+i+"] .gt_preset_name").text(o);else{
t.find(".preset_name").text(o)
;t.removeClass("editing_preset_name")}
t.find(".preset_name_edit, .preset_name").css("display","")},
bind_preset_name:function(e,t,i,o,n){
var s=this,n=n||{},r=(o?"Style personnalisé ":"Style ")+((e.class_name.match(/^GT_/)&&t.hasClass('gt_name_wrapper')?e.getPropertyDesignNode().find('.presets_container').find('> div[data-cssid='+i+']').prevAll().not('h3').length:t.prevAll().length)+1),a=v.presets_names&&v.presets_names[this.get_cpt_type_name(e)]&&v.presets_names[this.get_cpt_type_name(e)][i]||r
;$(".preset_name",t).text(a);if(!n.disable_edit){
$(".preset_name_edit",t).val(a)
;$(".preset_name",t).on("click",function(e){var i=$(this)
;i.hide();i.siblings().show().focus()
;t.addClass("editing_preset_name");e.preventDefault();return!1})
;$(".preset_name_edit",t).on("blur",function(o){
presetController.save_name(e,t,i);o.preventDefault();return!1
}).on("keyup",function(o){var n=o.keyCode||o.which
;if(13==n)presetController.save_name(e,t,i);else if(27==n){
t.find(".preset_name_edit, .preset_name").css("display","")
;$(".preset_name",t).text(a);$(".preset_name_edit",t).val(a)}
o.preventDefault();return!1}).on("click",function(e){
e.preventDefault();return!1})}},get_spacing_diff:function(e,t){
var i=presetController.find(null,e,t),o=0
;[["options_background","padding"],["options_paragraph","padding"],["options_title","padding"]].forEach(function(e){
p_data=i.find_data(e[0],e[1]);if(p_data){o+=p_data[0]
;o+=p_data[2]}});return o}};MemberController=Class.create()
;MemberController.allowedFields=[{name:"member_email",
placeholder:"Email",optional:!1,exclude:!0},{
name:"member_new_password",placeholder:"Mot de passe",
optional:!1,exclude:!0},{name:"member_display_name",
value:"member_display_name",
placeholder:"Nom à afficher",optional:!0,exclude:!0
},{name:"member_name",value:"member_name",
placeholder:"Nom",optional:!0},{
name:"member_firstname",value:"member_firstname",
placeholder:"Prénom",optional:!0}].concat([{
name:"company",placeholder:"Société",optional:!0},{
name:"street",placeholder:"Adresse",optional:!0},{
name:"zip",placeholder:"Code postal",optional:!0},{name:"city",
placeholder:"Ville",optional:!0},{name:"state",
placeholder:"État",optional:!0},{name:"country_id",
placeholder:"Pays",optional:!0},{name:"phone",
placeholder:"Téléphone",optional:!0}])
;MemberController.prototype={initialize:function(e,t){
this.form=e
;$("._ui18_member_signin, ._ui18_member_signin input",e).hide()
;$("._ui18_do_member_signin").addClass("clickable_link")
;$("._ui18_do_member_signin",this.form).addClass("uif_clickable").click(function(){
$(".uis_gdpr",e).hide()
;$("._ui18_member_signup, ._ui18_member_signup input",e).hide()
;$("._ui18_member_signin, ._ui18_member_signin input",e).show()
;$("._ui18_do_member_signin").removeClass("clickable_link")
;$("._ui18_do_member_signup").addClass("clickable_link")
;t&&t.ui.updateCptSize&&t.ui.updateCptSize()})
;$("._ui18_do_member_signup",this.form).addClass("uif_clickable").click(function(){
$(".uis_gdpr",e).show()
;$("._ui18_member_signin, ._ui18_member_signin input",e).hide()
;$("._ui18_member_signup, ._ui18_member_signup input",e).show()
;$("._ui18_do_member_signup").removeClass("clickable_link")
;$("._ui18_do_member_signin").addClass("clickable_link")
;t&&t.ui.updateCptSize&&t.ui.updateCptSize()})},
showForm:function(){if(null==$.cookie("member_auth_token")){
$(".member_unlogged, ._ui18_member_signin, ._ui18_member_signin input",this.form).show()
;$('._ui18_do_member_signin').removeClass('clickable_link')
}else $(".member_unlogged",this.form).hide()}}
;MemberController.isConnected=function(){
return null!=$.cookie("member_auth_token")}
;MemberController.nlSubscriber=function(){
return"true"==$.cookie("member_nl_subscriber")}
;MemberController.signout=function(){
$.cookie("member_auth_token",null,{expires:360,path:'/'})
;$.cookie("member_nl_subscriber",null,{expires:360,path:'/'})
;"editor"!=v.mode&&v.pages_fg.find(function(e){
return"members"==e.security_method
})?$.log("viewer_reload after_signout").then(function(){
prompt("Le site doit \xeatre recharg\xe9 pour retirer l'acc\xe8s aux pages prot\xe9g\xe9es.\nVoulez-vous recharger le site maintenant ?")&&location.reload()
}):tb_remove(function(){
sigCtl.emit("Member.connection_state_changed")})
;MemberController.data={};MemberController.data.avatar={}}
;MemberController.deleteAccount=function(){
confirm("Supprimer votre compte ?")&&$.ajax({
url:"/cpt_member/delete_account",dataType:"json",method:"post",
cache:!1,data:{site_id:v.site_id},success:function(e){
tb_remove();MemberController.signout()}})}
;MemberController.forgotPasswordButton=function(e){
$("._ui18_do_forgot_password",e).off("click").click(function(){
var t=$("input[name=member_email]:visible",e).val()
;t&&""!=t?$.ajax({url:"/cpt_member/forgot_password",data:{
site_id:v.site_id,member_email:t},dataType:"json",method:"post",
success:function(e){
e.success?alert("Un message avec les instructions pour réinitialiser le mot de passe a été envoyé. Merci de vérifier vos emails."):e.error&&alert(e.error)
}
}):alert("Merci d'entrer votre adresse email dans la case correspondante.")
;return!1})};MemberController.member_space=function(e){
var t=e||v.getSelectedPage();if(MemberController.isConnected()){
t.setCptUrl&&t.setCptUrl("/m0o/Account",null,!0);params={
site_id:v.site_id}
;"editor"==v.mode&&v.hasChanged&&$.extend(params,{draft:!0},{
config:JSON_.stringify(v.member_config.showedFields)})
;tb_show_viewer(null,'/cpt_member/member_space?'+$.param(params)+'&TB_iframe=true&height=500&width=1000',null,null,{
className:"memberSpace"})
;$('#TB_window').on("unload",function(){
t.setCptUrl&&setTimeout(function(){t.setCptUrl(null)},500)})}}
;MemberController.choose_password=function(e){
var t=new URLSearchParams(location.search)
;e.setCptUrl&&e.setCptUrl("/m0p/choisir-un-mot-de-passe",null,!0)
;var i={site_id:v.site_id,key:t.get("key")}
;tb_show_viewer(null,'/cpt_member/choose_password?'+$.param(i)+'&TB_iframe=true&height=300&width=450',null,null,{
className:"choosePassword"})}
;MemberController.onHashChange=function(e){if(e.cptUrl){
var t=e.cptUrl.match(/m(\d+)([op])\/.*/);if(t){
var i=parseInt(t[1])
;"o"==t[2]?MemberController.member_space(e):"p"==t[2]&&MemberController.choose_password(e)
}}};MemberController.tb_show=function(type,opts){opts=opts||{}
;var self=this,f=function(){
MemberController.update_fields().then(function(){var d={
signup:[650,"ui18_signup_content"],
signin:[250,"ui18_signin_content"]}
;tb_show_viewer(null,"TB_inline?width=600&inlineId="+d[type][1])
;if("signup"==type){var $logo=$('.ui18_logo')
;if(v.member_config.logo){
var url=bestImgSrc(v.member_config.logo,$logo.width(),$logo.height())
;opt_bg="no-repeat center center / contain transparent"
;$logo.css("background",opt_bg);$logo.cdnSrc(url)
;$logo.css("display","inline-block")
}else $logo.css("display","none")
;v.member_config.signup_baseline?$("#signup_baseline_node").html(v.member_config.signup_baseline.replace(/\n/g,"<br>")).show():$("#signup_baseline_node").hide()
}else v.member_config.signin_baseline?$("#signin_baseline_node").html(v.member_config.signin_baseline.replace(/\n/g,"<br>")).show():$("#signin_baseline_node").hide()
;$('#TB_window .mySignupLink').toggle(!opts.hide_signup&&!v.member_config.disable_signup)
;opts.errors&&$('#TB_window .window_popup_content.ui18_modal ._ui18_errors').empty().append($('<span>').html(opts.errors.join("<br/>")))
;opts.callback&&"function"==typeof opts.callback&&$('#TB_window').on('unload',function(){
opts.callback.call()});var $overlay=$("#TB_overlay")
;switch(v.member_config.background_selected){case"none":
$overlay.css("background","none");break;case"color":
$overlay.css("background-color",/get_color/.test(v.member_config.color)?eval(v.member_config.color):v.member_config.color)
;break;case"image":case"texture":if(v.member_config.image){
var arg
;arg="texture"==v.member_config.background_selected?"repeat":"no-repeat scroll center center / cover transparent"
;$overlay.css("background",arg)
;$overlay.cdnSrc(bestImgSrc(v.member_config.image,$(window).width(),$(window).height()))
}break;case"gradient":
$overlay.setBackgroundGradient(v.member_config.array_gradient,v.member_config.orientation,v.member_config.angle||0,v.member_config.animate_gradient)
}$overlay.css("opacity",1);MemberController.ui.applyPreset()})}
;if($("#TB_window").length){tb_remove();setTimeout(f,500)
}else f()};MemberController.update_fields=function(){
var e=$.Deferred()
;MemberController.loadPopups().then(function(){var t=$("<div>")
;t.append('<div class="item_div"><label class="label_form phd"><span class="phd_s">Email<p class="label_form_important">*</p></span><input name="member_email" type="email" class="site_textbox" autocomplete="false" required></label></div>')
;t.append('<div class="item_div"><label class="label_form phd"><span class="phd_s">Mot de passe<p class="label_form_important">*</p></span><input name="member_new_password" type="password" class="site_textbox" autocomplete="new-password" required></label></div>')
;t.append('<div class="item_div"><label class="label_form phd"><span class="phd_s">Nom à afficher</span><input name="member_display_name" type="text" class="site_textbox" autocomplete="false" required></label></div>')
;var i=!1,o=[]
;$.each(v.member_config.showedFields,function(e,n){
$.each(MemberController.allowedFields,function(s,r){
if(r.name==n[0]&&r.optional){var a=$.Deferred(),l=n[1]
;l&&!i&&(i=!0)
;var c=$('<div class="item_div"><label class="label_form phd"><span class="phd_s">'+r.placeholder+(l?'<p class="label_form_important">*</p>':'')+'</span></label></div>'),d=""
;if("country_id"==r.name)$.get("/cpt_store/country_list?v2",function(e){
d=$(e).find("select").attr("name","country_id");a.resolve()
});else{
d=$('<input class="site_textbox" name="'+r.name+'" type="text" '+(l?"required":"")+'>')
;a.resolve()}a.then(function(){c.find('label').append(d)
;$('.item_div:nth-child('+(parseInt(e)+3)+'):not(.newsletter_check)',t).length>0?$('.item_div:nth-child('+(parseInt(e)+3)+')',t).after(c):t.append(c)
});o.push(a)}})});$.when.apply($,o).then(function(){
v.member_config.nl&&t.append(sprintf("<div class=\"item_div newsletter_check\" id=\"nl_tr\"><label class=\"label_form\"><input class=\"newsletter_check\" style=\"margin-left: 5px;\" name=\"newsletter\" type=\"checkbox\"><span>%s</span></label></div>","J'accepte de recevoir des newsletters"))
;$('#ui18_connection_forms .facultative_fields').html(t.html())
;i&&!$("#ui18_connection_forms .span_form_important").length&&$('#ui18_connection_forms .component_gdpr_container').after('<span class="span_form_important">* Champs obligatoires</span>')
;t.remove();e.resolve()})});return e}
;MemberController.remember_if_connected=function(e){
MemberController.was_connected=MemberController.isConnected()}
;MemberController.getData=function(e){var t={
auth_token:$.cookie("member_auth_token")}
;if(v&&"editor"==v.mode){t.draft=!0
;t.config=JSON_.stringify(v.member_config.showedFields)}
var i=$('.ui18_modal:visible');i.length&&(e=i)
;if($("._ui18_member_signup:visible",e).add(".signup_form:visible").length){
t.signup=!0
;t.gdpr=member_gdpr.getGdpr($('#TB_window .signup_form'))}
e.find("input, select, textarea").filter(":visible").each(function(e,i){
t[i.name]=$(i).is(":checkbox")?$(i).is(":checked"):i.value})
;e.find('input[name=member_config]').length&&(t.config=e.find('input[name=member_config]').val())
;return t};MemberController.signin=function(e){var t=e
;e instanceof $&&(t=MemberController.getData(e))
;MemberController.remember_if_connected()
;return!t.signup||member_gdpr.testFormGdpr($('#TB_window .signup_form'),"UI_Member")?$.ajax({
url:"/json/member_sign_in_or_up",dataType:"json",data:{m:t,
site_id:v.site_id},method:"post",success:function(e){
MemberController.signin_callback(e)
;e.errors&&alert(e.errors.join("\n"))
;MemberController.isConnected()!=MemberController.was_connected&&sigCtl.emit("Member.connection_state_changed")
}}):$.Deferred().reject()};MemberController.data={}
;MemberController.data.avatar={}
;MemberController.signin_callback=function(e){
if(e.member&&e.member.auth_token){
MemberController.data.id=e.member.id
;MemberController.data.avatar.image=e.member.avatar.image
;MemberController.data.avatar.mode=e.member.avatar.mode
;MemberController.data.avatar.initials=e.member.avatar.initials
;MemberController.data.display_name=e.member.display_name
;$.cookie("member_auth_token",e.member.auth_token,{expires:360,
path:'/'})
;$.cookie("member_nl_subscriber",e.member.nl_subscriber,{
expires:360,path:'/'})
;$.cookie("member_display_name",e.member.display_name,{
expires:360,path:'/'});if(!MemberController.was_connected){
MemberController.was_connected=!0;tb_remove(function(){
sigCtl.emit("Member.connection_state_changed")})}
}else if(e.delete_member_auth_token){
$.cookie("member_auth_token",null)
;$.cookie("member_nl_subscriber",null)
;$.cookie("member_display_name",null)
;MemberController.was_connected=!1}}
;MemberController.loadPopups=function(){
var e=this,t=function(e){
$(".mySigninLink",e).on("click",function(){
$(".first_signin_content:visible, ._ui18_member_unlogged:visible").length?tb_remove():MemberController.tb_show("signin")
})
;MemberController.forgotPasswordButton(e.find(".submit_form.signin_form").parent())
;$(".mySignupLink",e).on("click",function(){
MemberController.tb_show("signup")})
;$("._ui18_do_member_signup, ._ui18_do_member_signin",e).on("click",function(t){
MemberController.signin(e);t.preventDefault();return!1})
},i=$.Deferred()
;$("#ui18_connection_forms").length?i.resolve():$.ajax({
url:"/cpt_member/connection_forms",data:{},dataType:"html",
success:function(o){
t($("<div id='ui18_connection_forms'></div>").html(o).appendTo("body").hide())
;sigCtl.emit("Member.popups_loaded")
;e.use_graphical_preset("button",["buttons_preset"])
;e.use_graphical_preset("textbox",["textboxes_preset"])
;i.resolve()}});return i}
;MemberController.use_graphical_preset=function(e,t){
if(GraphicalType.available){
var i=GraphicalType.graphical_types[e];i&&i.addCpt(this,t)}}
;MemberController.ui={applyPreset:function(){
if(GraphicalType.available){
var e=GraphicalType.graphical_types.button.preset_data.prefix,t,i
;(t=$('.ui18_modal').find('.submit_form ._ui18_do_member_signin').parent().add($('.ui18_modal').find('.submit_form ._ui18_do_member_signup').parent())).removeClassMatch(new RegExp(e))
;(i=GraphicalType.data_or_version_preset("button",v.member_config.buttons_preset))&&t.addClass(e+' '+e+"_"+i)
;var e=GraphicalType.graphical_types.textbox.preset_data.prefix,t,i
;(t=$('.ui18_modal').find('.submit_form')).removeClassMatch(new RegExp(e))
;(i=GraphicalType.data_or_version_preset("textbox",v.member_config.textboxes_preset))&&t.addClass(e+' '+e+'_'+i)
;var e=GraphicalType.graphical_types.link.preset_data.prefix,t,i
;(t=$('#TB_window')).removeClassMatch(new RegExp(e))
;(i=GraphicalType.data_or_version_preset("link",v.member_config.links_preset))&&t.addClass(e+' '+e+'_'+i)
}}}
;'function'!=typeof Object.create&&(Object.create=function(e){
function t(){}t.prototype=e;return new t});!function(e,t,i,o){
var n={init:function(t,i){var o=this;o.elem=i;o.$elem=e(i)
;o.imageSrc=o.$elem.data("zoom-image")?o.$elem.data("zoom-image"):o.$elem.attr("src")
;o.options=e.extend({},e.fn.elevateZoom.options,t)
;o.options.tint&&(o.options.lensColour="none",
o.options.lensOpacity="1")
;"inner"==o.options.zoomType&&(o.options.showLens=!1)
;o.$elem.parent().removeAttr('title').removeAttr('alt')
;o.zoomImage=o.imageSrc;o.refresh(1)
;e('#'+o.options.gallery+' a').click(function(t){
if(o.options.galleryActiveClass){
e('#'+o.options.gallery+' a').removeClass(o.options.galleryActiveClass)
;e(this).addClass(o.options.galleryActiveClass)}
t.preventDefault()
;e(this).data("zoom-image")?o.zoomImagePre=e(this).data("zoom-image"):o.zoomImagePre=e(this).data("image")
;o.swaptheimage(e(this).data("image"),o.zoomImagePre);return!1})
},refresh:function(e){var t=this;setTimeout(function(){
t.fetch(t.imageSrc)},e||t.options.refresh)},fetch:function(e){
var t=this,i=new Image;i.onload=function(){
t.largeWidth=100*i.width;t.largeHeight=100*i.height
;t.options.scrollZoomIncrement=Math.pow(i.width*i.height,.81)/2e4
;t.startZoom();t.currentImage=t.imageSrc
;t.options.onZoomedImageLoaded(t.$elem)};i.src=e},
startZoom:function(){var t=this;t.nzWidth=t.$elem.width()
;t.nzHeight=t.$elem.height();t.isWindowActive=!1
;t.isLensActive=!1;t.isTintActive=!1;t.overWindow=!1
;if(t.options.imageCrossfade){
t.zoomWrap=t.$elem.wrap('<div style="height:'+t.nzHeight+'px;width:'+t.nzWidth+'px;" class="zoomWrapper" />')
;t.$elem.css('position','absolute')}t.zoomLock=1
;t.scrollingLock=!1;t.changeBgSize=!1
;t.currentZoomLevel=t.options.zoomLevel
;t.nzOffset=t.$elem.offset()
;t.widthRatio=t.largeWidth/t.currentZoomLevel/t.nzWidth
;t.heightRatio=t.largeHeight/t.currentZoomLevel/t.nzHeight
;"window"==t.options.zoomType&&(t.zoomWindowStyle="overflow: hidden;background-position: 0px 0px;text-align:center;background-color: "+String(t.options.zoomWindowBgColour)+";width: "+String(t.options.zoomWindowWidth)+"px;height: "+String(t.options.zoomWindowHeight)+"px;float: left;background-size: "+t.largeWidth/t.currentZoomLevel+"px "+t.largeHeight/t.currentZoomLevel+"px;display: none;z-index:100;border: "+String(t.options.borderSize)+"px solid "+t.options.borderColour+";background-repeat: no-repeat;position: absolute;")
;if("inner"==t.options.zoomType){
var i=t.$elem.css("border-left-width")
;t.zoomWindowStyle="overflow: hidden;margin-left: "+String(i)+";margin-top: "+String(i)+";background-position: 0px 0px;width: "+String(t.nzWidth)+"px;height: "+String(t.nzHeight)+"px;px;float: left;display: none;cursor:"+t.options.cursor+";px solid "+t.options.borderColour+";background-repeat: no-repeat;position: absolute;"
}if("window"==t.options.zoomType){
t.nzHeight<t.options.zoomWindowWidth/t.widthRatio?lensHeight=t.nzHeight:lensHeight=String(t.options.zoomWindowHeight/t.heightRatio)
;t.largeWidth<t.options.zoomWindowWidth?lensWidth=t.nzWidth:lensWidth=t.options.zoomWindowWidth/t.widthRatio
;t.lensStyle="background-position: 0px 0px;width: "+String(t.options.zoomWindowWidth/t.widthRatio)+"px;height: "+String(t.options.zoomWindowHeight/t.heightRatio)+"px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:"+t.options.lensOpacity+";filter: alpha(opacity = "+100*t.options.lensOpacity+"); zoom:1;width:"+lensWidth+"px;height:"+lensHeight+"px;background-color:"+t.options.lensColour+";cursor:"+t.options.cursor+";border: "+t.options.lensBorderSize+"px solid "+t.options.lensBorderColour+";background-repeat: no-repeat;position: absolute;"
}
t.tintStyle="display: block;position: absolute;background-color: "+t.options.tintColour+";filter:alpha(opacity=0);opacity: 0;width: "+t.nzWidth+"px;height: "+t.nzHeight+"px;"
;t.lensRound=''
;"lens"==t.options.zoomType&&(t.lensStyle="background-position: 0px 0px;float: left;display: none;border: "+String(t.options.borderSize)+"px solid "+t.options.borderColour+";width:"+String(t.options.lensSize)+"px;height:"+String(t.options.lensSize)+"px;background-repeat: no-repeat;position: absolute;")
;"round"==t.options.lensShape&&(t.lensRound="border-top-left-radius: "+String(t.options.lensSize/2+t.options.borderSize)+"px;border-top-right-radius: "+String(t.options.lensSize/2+t.options.borderSize)+"px;border-bottom-left-radius: "+String(t.options.lensSize/2+t.options.borderSize)+"px;border-bottom-right-radius: "+String(t.options.lensSize/2+t.options.borderSize)+"px;")
;t.zoomContainer=e('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:'+t.nzOffset.left+'px;top:'+t.nzOffset.top+'px;height:'+t.nzHeight+'px;width:'+t.nzWidth+'px;"></div>')
;e('body').append(t.zoomContainer)
;t.options.containLensZoom&&"lens"==t.options.zoomType&&t.zoomContainer.css("overflow","hidden")
;if("inner"!=t.options.zoomType){
t.zoomLens=e("<div class='zoomLens' style='"+t.lensStyle+t.lensRound+"'>&nbsp;</div>").appendTo(t.zoomContainer).click(function(){
t.$elem.trigger('click')});if(t.options.tint){
t.tintContainer=e('<div/>').addClass('tintContainer')
;t.zoomTint=e("<div class='zoomTint' style='"+t.tintStyle+"'></div>")
;t.zoomLens.wrap(t.tintContainer)
;t.zoomTintcss=t.zoomLens.after(t.zoomTint)
;t.zoomTintImage=e('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+t.nzWidth+'px; height: '+t.nzHeight+'px;" src="'+t.imageSrc+'">').appendTo(t.zoomLens).click(function(){
t.$elem.trigger('click')})}}
isNaN(t.options.zoomWindowPosition)?t.zoomWindow=e("<div style='z-index:999;left:"+t.windowOffsetLeft+"px;top:"+t.windowOffsetTop+"px;"+t.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo('body').click(function(){
t.$elem.trigger('click')
}):t.zoomWindow=e("<div style='z-index:999;left:"+t.windowOffsetLeft+"px;top:"+t.windowOffsetTop+"px;"+t.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo(t.zoomContainer).click(function(){
t.$elem.trigger('click')})
;t.zoomWindowContainer=e('<div/>').addClass('zoomWindowContainer').css("width",t.options.zoomWindowWidth)
;t.zoomWindow.wrap(t.zoomWindowContainer)
;"lens"==t.options.zoomType&&t.zoomLens.css({
backgroundImage:"url('"+t.imageSrc+"')"})
;"window"==t.options.zoomType&&t.zoomWindow.css({
backgroundImage:"url('"+t.imageSrc+"')"})
;"inner"==t.options.zoomType&&t.zoomWindow.css({
backgroundImage:"url('"+t.imageSrc+"')"})
;t.$elem.bind('touchmove',function(e){e.preventDefault()
;var i=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0]
;t.setPosition(i)})
;t.zoomContainer.bind('touchmove',function(e){
"inner"==t.options.zoomType&&t.showHideWindow("show")
;e.preventDefault()
;var i=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0]
;t.setPosition(i)});t.zoomContainer.bind('touchend',function(e){
t.showHideWindow("hide")
;t.options.showLens&&t.showHideLens("hide")
;t.options.tint&&"inner"!=t.options.zoomType&&t.showHideTint("hide")
});t.$elem.bind('touchend',function(e){t.showHideWindow("hide")
;t.options.showLens&&t.showHideLens("hide")
;t.options.tint&&"inner"!=t.options.zoomType&&t.showHideTint("hide")
});if(t.options.showLens){
t.zoomLens.bind('touchmove',function(e){e.preventDefault()
;var i=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0]
;t.setPosition(i)});t.zoomLens.bind('touchend',function(e){
t.showHideWindow("hide")
;t.options.showLens&&t.showHideLens("hide")
;t.options.tint&&"inner"!=t.options.zoomType&&t.showHideTint("hide")
})}t.$elem.bind('mousemove',function(e){
0==t.overWindow&&t.setElements("show")
;if(t.lastX!==e.clientX||t.lastY!==e.clientY){t.setPosition(e)
;t.currentLoc=e}t.lastX=e.clientX;t.lastY=e.clientY})
;t.zoomContainer.bind('mousemove',function(e){
0==t.overWindow&&t.setElements("show")
;if(t.lastX!==e.clientX||t.lastY!==e.clientY){t.setPosition(e)
;t.currentLoc=e}t.lastX=e.clientX;t.lastY=e.clientY})
;"inner"!=t.options.zoomType&&t.zoomLens.bind('mousemove',function(e){
if(t.lastX!==e.clientX||t.lastY!==e.clientY){t.setPosition(e)
;t.currentLoc=e}t.lastX=e.clientX;t.lastY=e.clientY})
;t.options.tint&&"inner"!=t.options.zoomType&&t.zoomTint.bind('mousemove',function(e){
if(t.lastX!==e.clientX||t.lastY!==e.clientY){t.setPosition(e)
;t.currentLoc=e}t.lastX=e.clientX;t.lastY=e.clientY})
;"inner"==t.options.zoomType&&t.zoomWindow.bind('mousemove',function(e){
if(t.lastX!==e.clientX||t.lastY!==e.clientY){t.setPosition(e)
;t.currentLoc=e}t.lastX=e.clientX;t.lastY=e.clientY})
;t.zoomContainer.add(t.$elem).mouseenter(function(e){
0==t.overWindow&&t.setElements("show");t.currentLoc=e
;t.changeZoomLevel(101)}).mouseleave(function(){
if(t.scrollLock)setTimeout(function(){
t.zoomContainer.add(t.$elem).trigger("mouseleave")},250);else{
t.setElements("hide");t.options.onDestroy(t.$elem)}})
;"inner"!=t.options.zoomType&&t.zoomWindow.mouseenter(function(){
t.overWindow=!0;t.setElements("hide")}).mouseleave(function(){
t.overWindow=!1});t.options.zoomLevel
;t.options.minZoomLevel?t.minZoomLevel=t.options.minZoomLevel:t.minZoomLevel=2*t.options.scrollZoomIncrement
;t.options.scrollZoom&&t.zoomContainer.add(t.$elem).bind('mousewheel DOMMouseScroll MozMousePixelScroll',function(i){
t.scrollLock=!0;clearTimeout(e.data(this,'timer'))
;e.data(this,'timer',setTimeout(function(){t.scrollLock=!1
},250))
;var o=i.originalEvent.wheelDelta||-1*i.originalEvent.detail
;i.stopImmediatePropagation();i.stopPropagation()
;i.preventDefault()
;o/120>0?t.currentZoomLevel>=t.minZoomLevel&&t.changeZoomLevel(t.currentZoomLevel-t.options.scrollZoomIncrement):t.options.maxZoomLevel?t.currentZoomLevel<=t.options.maxZoomLevel&&t.changeZoomLevel(parseFloat(t.currentZoomLevel)+t.options.scrollZoomIncrement):t.changeZoomLevel(parseFloat(t.currentZoomLevel)+t.options.scrollZoomIncrement)
;return!1})},setElements:function(e){var t=this
;if(!t.options.zoomEnabled)return!1
;if("show"==e&&t.isWindowSet){
"inner"==t.options.zoomType&&t.showHideWindow("show")
;"window"==t.options.zoomType&&t.showHideWindow("show")
;t.options.showLens&&t.showHideLens("show")
;t.options.tint&&"inner"!=t.options.zoomType&&t.showHideTint("show")
}if("hide"==e){
"window"==t.options.zoomType&&t.showHideWindow("hide")
;t.options.tint||t.showHideWindow("hide")
;t.options.showLens&&t.showHideLens("hide")
;t.options.tint&&t.showHideTint("hide")}},
setPosition:function(e){var t=this
;if(!t.options.zoomEnabled)return!1;t.nzHeight=t.$elem.height()
;t.nzWidth=t.$elem.width();t.nzOffset=t.$elem.offset()
;if(t.options.tint&&"inner"!=t.options.zoomType){
t.zoomTint.css({top:0});t.zoomTint.css({left:0})}
if(t.options.responsive&&!t.options.scrollZoom&&t.options.showLens){
t.nzHeight<t.options.zoomWindowWidth/t.widthRatio?lensHeight=t.nzHeight:lensHeight=String(t.options.zoomWindowHeight/t.heightRatio)
;t.largeWidth<t.options.zoomWindowWidth?lensWidth=t.nzWidth:lensWidth=t.options.zoomWindowWidth/t.widthRatio
;t.widthRatio=t.largeWidth/t.nzWidth
;t.heightRatio=t.largeHeight/t.nzHeight
;if("lens"!=t.options.zoomType){
t.nzHeight<t.options.zoomWindowWidth/t.widthRatio?lensHeight=t.nzHeight:lensHeight=String(t.options.zoomWindowHeight/t.heightRatio)
;t.nzWidth<t.options.zoomWindowHeight/t.heightRatio?lensWidth=t.nzWidth:lensWidth=String(t.options.zoomWindowWidth/t.widthRatio)
;t.zoomLens.css('width',lensWidth)
;t.zoomLens.css('height',lensHeight);if(t.options.tint){
t.zoomTintImage.css('width',t.nzWidth)
;t.zoomTintImage.css('height',t.nzHeight)}}
"lens"==t.options.zoomType&&t.zoomLens.css({
width:String(t.options.lensSize)+'px',
height:String(t.options.lensSize)+'px'})}t.zoomContainer.css({
top:t.nzOffset.top});t.zoomContainer.css({left:t.nzOffset.left})
;t.mouseLeft=parseInt(e.pageX-t.nzOffset.left)
;t.mouseTop=parseInt(e.pageY-t.nzOffset.top)
;if("window"==t.options.zoomType){
t.Etoppos=t.mouseTop<t.zoomLens.height()/2
;t.Eboppos=t.mouseTop>t.nzHeight-t.zoomLens.height()/2-2*t.options.lensBorderSize
;t.Eloppos=t.mouseLeft<0+t.zoomLens.width()/2
;t.Eroppos=t.mouseLeft>t.nzWidth-t.zoomLens.width()/2-2*t.options.lensBorderSize
}if("inner"==t.options.zoomType){
t.Etoppos=t.mouseTop<t.nzHeight/2/t.heightRatio
;t.Eboppos=t.mouseTop>t.nzHeight-t.nzHeight/2/t.heightRatio
;t.Eloppos=t.mouseLeft<0+t.nzWidth/2/t.widthRatio
;t.Eroppos=t.mouseLeft>t.nzWidth-t.nzWidth/2/t.widthRatio-2*t.options.lensBorderSize
}
if(t.mouseLeft<0||t.mouseTop<0||t.mouseLeft>t.nzWidth||t.mouseTop>t.nzHeight)t.setElements("hide");else{
if(t.options.showLens){
t.lensLeftPos=String(Math.floor(t.mouseLeft-t.zoomLens.width()/2))
;t.lensTopPos=String(Math.floor(t.mouseTop-t.zoomLens.height()/2))
}t.Etoppos&&(t.lensTopPos=0);if(t.Eloppos){t.windowLeftPos=0
;t.lensLeftPos=0;t.tintpos=0}if("window"==t.options.zoomType){
t.Eboppos&&(t.lensTopPos=Math.max(t.nzHeight-t.zoomLens.height()-2*t.options.lensBorderSize,0))
;t.Eroppos&&(t.lensLeftPos=t.nzWidth-t.zoomLens.width()-2*t.options.lensBorderSize)
}if("inner"==t.options.zoomType){
t.Eboppos&&(t.lensTopPos=Math.max(t.nzHeight-2*t.options.lensBorderSize,0))
;t.Eroppos&&(t.lensLeftPos=t.nzWidth-t.nzWidth-2*t.options.lensBorderSize)
}if("lens"==t.options.zoomType){
t.windowLeftPos=String(-1*((e.pageX-t.nzOffset.left)*t.widthRatio-t.zoomLens.width()/2))
;t.windowTopPos=String(-1*((e.pageY-t.nzOffset.top)*t.heightRatio-t.zoomLens.height()/2))
;t.zoomLens.css({
backgroundPosition:t.windowLeftPos+'px '+t.windowTopPos+'px'})
;if(t.changeBgSize){if(t.nzHeight>t.nzWidth){
"lens"==t.options.zoomType&&t.zoomLens.css({
"background-size":t.largeWidth/t.newvalueheight+'px '+t.largeHeight/t.newvalueheight+'px'
});t.zoomWindow.css({
"background-size":t.largeWidth/t.newvalueheight+'px '+t.largeHeight/t.newvalueheight+'px'
})}else{"lens"==t.options.zoomType&&t.zoomLens.css({
"background-size":t.largeWidth/t.newvaluewidth+'px '+t.largeHeight/t.newvaluewidth+'px'
});t.zoomWindow.css({
"background-size":t.largeWidth/t.newvaluewidth+'px '+t.largeHeight/t.newvaluewidth+'px'
})}t.changeBgSize=!1}t.setWindowPostition(e)}
t.options.tint&&"inner"!=t.options.zoomType&&t.setTintPosition(e)
;"window"==t.options.zoomType&&t.setWindowPostition(e)
;"inner"==t.options.zoomType&&t.setWindowPostition(e)
;if(t.options.showLens){
t.fullwidth&&"lens"!=t.options.zoomType&&(t.lensLeftPos=0)
;t.zoomLens.css({left:t.lensLeftPos+'px',top:t.lensTopPos+'px'})
}}},showHideWindow:function(e){var t=this
;if("show"==e&&!t.isWindowActive){
t.options.zoomWindowFadeIn?t.zoomWindow.stop(!0,!0,!1).fadeIn(t.options.zoomWindowFadeIn):t.zoomWindow.show()
;t.isWindowActive=!0}if("hide"==e&&t.isWindowActive){
t.options.zoomWindowFadeOut?t.zoomWindow.stop(!0,!0).fadeOut(t.options.zoomWindowFadeOut,function(){
if(t.loop){clearInterval(t.loop);t.loop=!1}
}):t.zoomWindow.hide();t.isWindowActive=!1}},
showHideLens:function(e){var t=this
;if("show"==e&&!t.isLensActive){
t.options.lensFadeIn?t.zoomLens.stop(!0,!0,!1).fadeIn(t.options.lensFadeIn):t.zoomLens.show()
;t.isLensActive=!0}if("hide"==e&&t.isLensActive){
t.options.lensFadeOut?t.zoomLens.stop(!0,!0).fadeOut(t.options.lensFadeOut):t.zoomLens.hide()
;t.isLensActive=!1}},showHideTint:function(e){var t=this
;if("show"==e&&!t.isTintActive){
if(t.options.zoomTintFadeIn)t.zoomTint.css({
opacity:t.options.tintOpacity
}).animate().stop(!0,!0).fadeIn("slow");else{t.zoomTint.css({
opacity:t.options.tintOpacity}).animate();t.zoomTint.show()}
t.isTintActive=!0}if("hide"==e&&t.isTintActive){
t.options.zoomTintFadeOut?t.zoomTint.stop(!0,!0).fadeOut(t.options.zoomTintFadeOut):t.zoomTint.hide()
;t.isTintActive=!1}},setLensPostition:function(e){},
setWindowPostition:function(t){var i=this
;if(isNaN(i.options.zoomWindowPosition)){
"object"==typeof i.options.zoomWindowPosition?i.externalContainer=i.options.zoomWindowPosition:i.externalContainer=e('#'+i.options.zoomWindowPosition)
;i.externalContainerWidth=i.externalContainer.width()
;i.externalContainerHeight=i.externalContainer.height()
;i.externalContainerOffset=i.externalContainer.offset()
;i.windowOffsetTop=i.externalContainerOffset.top
;i.windowOffsetLeft=i.externalContainerOffset.left
}else switch(i.options.zoomWindowPosition){case 1:
i.windowOffsetTop=i.options.zoomWindowOffety
;i.windowOffsetLeft=+i.nzWidth;break;case 2:
if(i.options.zoomWindowHeight>i.nzHeight){
i.windowOffsetTop=-1*(i.options.zoomWindowHeight/2-i.nzHeight/2)
;i.windowOffsetLeft=i.nzWidth}break;case 3:
i.windowOffsetTop=i.nzHeight-i.zoomWindow.height()-2*i.options.borderSize
;i.windowOffsetLeft=i.nzWidth;break;case 4:
i.windowOffsetTop=i.nzHeight;i.windowOffsetLeft=i.nzWidth;break
;case 5:i.windowOffsetTop=i.nzHeight
;i.windowOffsetLeft=i.nzWidth-i.zoomWindow.width()-2*i.options.borderSize
;break;case 6:if(i.options.zoomWindowHeight>i.nzHeight){
i.windowOffsetTop=i.nzHeight
;i.windowOffsetLeft=-1*(i.options.zoomWindowWidth/2-i.nzWidth/2+2*i.options.borderSize)
}break;case 7:i.windowOffsetTop=i.nzHeight;i.windowOffsetLeft=0
;break;case 8:i.windowOffsetTop=i.nzHeight
;i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize)
;break;case 9:
i.windowOffsetTop=i.nzHeight-i.zoomWindow.height()-2*i.options.borderSize
;i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize)
;break;case 10:if(i.options.zoomWindowHeight>i.nzHeight){
i.windowOffsetTop=-1*(i.options.zoomWindowHeight/2-i.nzHeight/2)
;i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize)
}break;case 11:i.windowOffsetTop=i.options.zoomWindowOffety
;i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize)
;break;case 12:
i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize)
;i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize)
;break;case 13:
i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize)
;i.windowOffsetLeft=0;break;case 14:
if(i.options.zoomWindowHeight>i.nzHeight){
i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize)
;i.windowOffsetLeft=-1*(i.options.zoomWindowWidth/2-i.nzWidth/2+2*i.options.borderSize)
}break;case 15:
i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize)
;i.windowOffsetLeft=i.nzWidth-i.zoomWindow.width()-2*i.options.borderSize
;break;case 16:
i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize)
;i.windowOffsetLeft=i.nzWidth;break;default:
i.windowOffsetTop=i.options.zoomWindowOffety
;i.windowOffsetLeft=i.nzWidth}i.isWindowSet=!0
;i.windowOffsetTop=i.windowOffsetTop+i.options.zoomWindowOffety
;i.windowOffsetLeft=i.windowOffsetLeft+i.options.zoomWindowOffetx
;i.zoomWindow.css({top:i.windowOffsetTop});i.zoomWindow.css({
left:i.windowOffsetLeft});if("inner"==i.options.zoomType){
i.zoomWindow.css({top:0});i.zoomWindow.css({left:0})}
i.windowLeftPos=String(-1*((t.pageX-i.nzOffset.left)*i.widthRatio-i.zoomWindow.width()/2))
;i.windowTopPos=String(-1*((t.pageY-i.nzOffset.top)*i.heightRatio-i.zoomWindow.height()/2))
;i.Etoppos&&(i.windowTopPos=0);i.Eloppos&&(i.windowLeftPos=0)
;i.Eboppos&&(i.windowTopPos=-1*(i.largeHeight/i.currentZoomLevel-i.zoomWindow.height()))
;i.Eroppos&&(i.windowLeftPos=-1*(i.largeWidth/i.currentZoomLevel-i.zoomWindow.width()))
;i.fullheight&&(i.windowTopPos=0)
;i.fullwidth&&(i.windowLeftPos=0)
;if("window"==i.options.zoomType||"inner"==i.options.zoomType){
if(1==i.zoomLock){i.widthRatio<=1&&(i.windowLeftPos=0)
;i.heightRatio<=1&&(i.windowTopPos=0)}
if("window"==i.options.zoomType){
i.largeHeight<i.options.zoomWindowHeight&&(i.windowTopPos=0)
;i.largeWidth<i.options.zoomWindowWidth&&(i.windowLeftPos=0)}
if(i.options.easing){i.xp||(i.xp=0);i.yp||(i.yp=0)
;i.loop||(i.loop=setInterval(function(){
i.xp+=(i.windowLeftPos-i.xp)/i.options.easingAmount
;i.yp+=(i.windowTopPos-i.yp)/i.options.easingAmount
;if(i.scrollingLock){clearInterval(i.loop);i.xp=i.windowLeftPos
;i.yp=i.windowTopPos
;i.xp=-1*((t.pageX-i.nzOffset.left)*i.widthRatio-i.zoomWindow.width()/2)
;i.yp=-1*((t.pageY-i.nzOffset.top)*i.heightRatio-i.zoomWindow.height()/2)
;if(i.changeBgSize){if(i.nzHeight>i.nzWidth){
"lens"==i.options.zoomType&&i.zoomLens.css({
"background-size":i.largeWidth/i.newvalueheight+'px '+i.largeHeight/i.newvalueheight+'px'
});i.zoomWindow.css({
"background-size":i.largeWidth/i.newvalueheight+'px '+i.largeHeight/i.newvalueheight+'px'
})}else{"lens"!=i.options.zoomType&&i.zoomLens.css({
"background-size":i.largeWidth/i.newvaluewidth+'px '+i.largeHeight/i.newvalueheight+'px'
});i.zoomWindow.css({
"background-size":i.largeWidth/i.newvaluewidth+'px '+i.largeHeight/i.newvaluewidth+'px'
})}i.changeBgSize=!1}i.zoomWindow.css({
backgroundPosition:i.windowLeftPos+'px '+i.windowTopPos+'px'})
;i.scrollingLock=!1;i.loop=!1
}else if(Math.round(Math.abs(i.xp-i.windowLeftPos)+Math.abs(i.yp-i.windowTopPos))<1){
clearInterval(i.loop);i.zoomWindow.css({
backgroundPosition:i.windowLeftPos+'px '+i.windowTopPos+'px'})
;i.loop=!1}else{if(i.changeBgSize){if(i.nzHeight>i.nzWidth){
"lens"==i.options.zoomType&&i.zoomLens.css({
"background-size":i.largeWidth/i.newvalueheight+'px '+i.largeHeight/i.newvalueheight+'px'
});i.zoomWindow.css({
"background-size":i.largeWidth/i.newvalueheight+'px '+i.largeHeight/i.newvalueheight+'px'
})}else{"lens"!=i.options.zoomType&&i.zoomLens.css({
"background-size":i.largeWidth/i.newvaluewidth+'px '+i.largeHeight/i.newvaluewidth+'px'
});i.zoomWindow.css({
"background-size":i.largeWidth/i.newvaluewidth+'px '+i.largeHeight/i.newvaluewidth+'px'
})}i.changeBgSize=!1}i.zoomWindow.css({
backgroundPosition:i.xp+'px '+i.yp+'px'})}},16))}else{
if(i.changeBgSize){if(i.nzHeight>i.nzWidth){
"lens"==i.options.zoomType&&i.zoomLens.css({
"background-size":i.largeWidth/i.newvalueheight+'px '+i.largeHeight/i.newvalueheight+'px'
});i.zoomWindow.css({
"background-size":i.largeWidth/i.newvalueheight+'px '+i.largeHeight/i.newvalueheight+'px'
})}else{"lens"==i.options.zoomType&&i.zoomLens.css({
"background-size":i.largeWidth/i.newvaluewidth+'px '+i.largeHeight/i.newvaluewidth+'px'
})
;i.largeHeight/i.newvaluewidth<i.options.zoomWindowHeight?i.zoomWindow.css({
"background-size":i.largeWidth/i.newvaluewidth+'px '+i.largeHeight/i.newvaluewidth+'px'
}):i.zoomWindow.css({
"background-size":i.largeWidth/i.newvalueheight+'px '+i.largeHeight/i.newvalueheight+'px'
})}i.changeBgSize=!1}i.zoomWindow.css({
backgroundPosition:i.windowLeftPos+'px '+i.windowTopPos+'px'})}}
},setTintPosition:function(e){var t=this
;t.nzOffset=t.$elem.offset()
;t.tintpos=String(-1*(e.pageX-t.nzOffset.left-t.zoomLens.width()/2))
;t.tintposy=String(-1*(e.pageY-t.nzOffset.top-t.zoomLens.height()/2))
;t.Etoppos&&(t.tintposy=0);t.Eloppos&&(t.tintpos=0)
;t.Eboppos&&(t.tintposy=-1*(t.nzHeight-t.zoomLens.height()-2*t.options.lensBorderSize))
;t.Eroppos&&(t.tintpos=-1*(t.nzWidth-t.zoomLens.width()-2*t.options.lensBorderSize))
;if(t.options.tint){t.fullheight&&(t.tintposy=0)
;t.fullwidth&&(t.tintpos=0);t.zoomTintImage.css({
left:t.tintpos+'px'});t.zoomTintImage.css({top:t.tintposy+'px'})
}},swaptheimage:function(t,i){var o=this,n=new Image
;if(o.options.loadingIcon){
o.spinner=e('<div style="background: url(\''+o.options.loadingIcon+'\') no-repeat center;height:'+o.nzHeight+'px;width:'+o.nzWidth+'px;z-index: 2000;position: absolute; background-position: center center;"></div>')
;o.$elem.after(o.spinner)}o.options.onImageSwap(o.$elem)
;n.onload=function(){o.largeWidth=n.width;o.largeHeight=n.height
;o.zoomImage=i;o.zoomWindow.css({
"background-size":o.largeWidth+'px '+o.largeHeight+'px'})
;o.swapAction(t,i)};n.src=i},swapAction:function(t,i){
var o=this,n=new Image;n.onload=function(){o.nzHeight=n.height
;o.nzWidth=n.width;o.options.onImageSwapComplete(o.$elem)
;o.doneCallback()};n.src=t
;o.currentZoomLevel=o.options.zoomLevel
;o.options.maxZoomLevel=!1
;"lens"==o.options.zoomType&&o.zoomLens.css({
backgroundImage:"url('"+i+"')"})
;"window"==o.options.zoomType&&o.zoomWindow.css({
backgroundImage:"url('"+i+"')"})
;"inner"==o.options.zoomType&&o.zoomWindow.css({
backgroundImage:"url('"+i+"')"});o.currentImage=i
;if(o.options.imageCrossfade){var s=o.$elem,r=s.clone()
;o.$elem.attr("src",t);o.$elem.after(r)
;r.stop(!0).fadeOut(o.options.imageCrossfade,function(){
e(this).remove()});o.$elem.width("auto").removeAttr("width")
;o.$elem.height("auto").removeAttr("height")
;s.fadeIn(o.options.imageCrossfade)
;if(o.options.tint&&"inner"!=o.options.zoomType){
var a=o.zoomTintImage,l=a.clone();o.zoomTintImage.attr("src",i)
;o.zoomTintImage.after(l)
;l.stop(!0).fadeOut(o.options.imageCrossfade,function(){
e(this).remove()});a.fadeIn(o.options.imageCrossfade)
;o.zoomTint.css({height:o.$elem.height()});o.zoomTint.css({
width:o.$elem.width()})}
o.zoomContainer.css("height",o.$elem.height())
;o.zoomContainer.css("width",o.$elem.width())
;if("inner"==o.options.zoomType&&!o.options.constrainType){
o.zoomWrap.parent().css("height",o.$elem.height())
;o.zoomWrap.parent().css("width",o.$elem.width())
;o.zoomWindow.css("height",o.$elem.height())
;o.zoomWindow.css("width",o.$elem.width())}
if(o.options.imageCrossfade){
o.zoomWrap.css("height",o.$elem.height())
;o.zoomWrap.css("width",o.$elem.width())}}else{
o.$elem.attr("src",t);if(o.options.tint){
o.zoomTintImage.attr("src",i)
;o.zoomTintImage.attr("height",o.$elem.height())
;o.zoomTintImage.css({height:o.$elem.height()});o.zoomTint.css({
height:o.$elem.height()})}
o.zoomContainer.css("height",o.$elem.height())
;o.zoomContainer.css("width",o.$elem.width())
;if(o.options.imageCrossfade){
o.zoomWrap.css("height",o.$elem.height())
;o.zoomWrap.css("width",o.$elem.width())}}
if(o.options.constrainType){
if("height"==o.options.constrainType){
o.zoomContainer.css("height",o.options.constrainSize)
;o.zoomContainer.css("width","auto")
;if(o.options.imageCrossfade){
o.zoomWrap.css("height",o.options.constrainSize)
;o.zoomWrap.css("width","auto");o.constwidth=o.zoomWrap.width()
}else{o.$elem.css("height",o.options.constrainSize)
;o.$elem.css("width","auto");o.constwidth=o.$elem.width()}
if("inner"==o.options.zoomType){
o.zoomWrap.parent().css("height",o.options.constrainSize)
;o.zoomWrap.parent().css("width",o.constwidth)
;o.zoomWindow.css("height",o.options.constrainSize)
;o.zoomWindow.css("width",o.constwidth)}if(o.options.tint){
o.tintContainer.css("height",o.options.constrainSize)
;o.tintContainer.css("width",o.constwidth)
;o.zoomTint.css("height",o.options.constrainSize)
;o.zoomTint.css("width",o.constwidth)
;o.zoomTintImage.css("height",o.options.constrainSize)
;o.zoomTintImage.css("width",o.constwidth)}}
if("width"==o.options.constrainType){
o.zoomContainer.css("height","auto")
;o.zoomContainer.css("width",o.options.constrainSize)
;if(o.options.imageCrossfade){o.zoomWrap.css("height","auto")
;o.zoomWrap.css("width",o.options.constrainSize)
;o.constheight=o.zoomWrap.height()}else{
o.$elem.css("height","auto")
;o.$elem.css("width",o.options.constrainSize)
;o.constheight=o.$elem.height()}if("inner"==o.options.zoomType){
o.zoomWrap.parent().css("height",o.constheight)
;o.zoomWrap.parent().css("width",o.options.constrainSize)
;o.zoomWindow.css("height",o.constheight)
;o.zoomWindow.css("width",o.options.constrainSize)}
if(o.options.tint){o.tintContainer.css("height",o.constheight)
;o.tintContainer.css("width",o.options.constrainSize)
;o.zoomTint.css("height",o.constheight)
;o.zoomTint.css("width",o.options.constrainSize)
;o.zoomTintImage.css("height",o.constheight)
;o.zoomTintImage.css("width",o.options.constrainSize)}}}},
doneCallback:function(){var e=this
;e.options.loadingIcon&&e.spinner.hide()
;e.nzOffset=e.$elem.offset();e.nzWidth=e.$elem.width()
;e.nzHeight=e.$elem.height()
;e.currentZoomLevel=e.options.zoomLevel
;e.widthRatio=e.largeWidth/e.nzWidth
;e.heightRatio=e.largeHeight/e.nzHeight
;if("window"==e.options.zoomType){
e.nzHeight<e.options.zoomWindowWidth/e.widthRatio?lensHeight=e.nzHeight:lensHeight=String(e.options.zoomWindowHeight/e.heightRatio)
;e.options.zoomWindowWidth<e.options.zoomWindowWidth?lensWidth=e.nzWidth:lensWidth=e.options.zoomWindowWidth/e.widthRatio
;if(e.zoomLens){e.zoomLens.css('width',lensWidth)
;e.zoomLens.css('height',lensHeight)}}},
getCurrentImage:function(){var e;return this.zoomImage},
getGalleryList:function(){var t=this;t.gallerylist=[]
;t.options.gallery?e('#'+t.options.gallery+' a').each(function(){
var i=''
;e(this).data("zoom-image")?i=e(this).data("zoom-image"):e(this).data("image")&&(i=e(this).data("image"))
;i==t.zoomImage?t.gallerylist.unshift({href:''+i,
title:e(this).find('img').attr("title")}):t.gallerylist.push({
href:''+i,title:e(this).find('img').attr("title")})
}):t.gallerylist.push({href:''+t.zoomImage,
title:e(this).find('img').attr("title")});return t.gallerylist},
changeZoomLevel:function(e){var t=this;t.scrollingLock=!0
;t.newvalue=parseFloat(e).toFixed(2)
;newvalue=parseFloat(e).toFixed(2)
;maxheightnewvalue=t.largeHeight/(t.options.zoomWindowHeight/t.nzHeight*t.nzHeight)
;maxwidthtnewvalue=t.largeWidth/(t.options.zoomWindowWidth/t.nzWidth*t.nzWidth)
;if("inner"!=t.options.zoomType){
if(maxheightnewvalue<=newvalue){
t.heightRatio=t.largeHeight/maxheightnewvalue/t.nzHeight
;t.newvalueheight=maxheightnewvalue;t.fullheight=!0}else{
t.heightRatio=t.largeHeight/newvalue/t.nzHeight
;t.newvalueheight=newvalue;t.fullheight=!1}
if(maxwidthtnewvalue<=newvalue){
t.widthRatio=t.largeWidth/maxwidthtnewvalue/t.nzWidth
;t.newvaluewidth=maxwidthtnewvalue;t.fullwidth=!0}else{
t.widthRatio=t.largeWidth/newvalue/t.nzWidth
;t.newvaluewidth=newvalue;t.fullwidth=!1}
if("lens"==t.options.zoomType)if(maxheightnewvalue<=newvalue){
t.fullwidth=!0;t.newvaluewidth=maxheightnewvalue}else{
t.widthRatio=t.largeWidth/newvalue/t.nzWidth
;t.newvaluewidth=newvalue;t.fullwidth=!1}}
if("inner"==t.options.zoomType){
maxheightnewvalue=parseFloat(t.largeHeight/t.nzHeight).toFixed(2)
;maxwidthtnewvalue=parseFloat(t.largeWidth/t.nzWidth).toFixed(2)
;newvalue>maxheightnewvalue&&(newvalue=maxheightnewvalue)
;newvalue>maxwidthtnewvalue&&(newvalue=maxwidthtnewvalue)
;if(maxheightnewvalue<=newvalue){
t.heightRatio=t.largeHeight/newvalue/t.nzHeight
;newvalue>maxheightnewvalue?t.newvalueheight=maxheightnewvalue:t.newvalueheight=newvalue
;t.fullheight=!0}else{
t.heightRatio=t.largeHeight/newvalue/t.nzHeight
;newvalue>maxheightnewvalue?t.newvalueheight=maxheightnewvalue:t.newvalueheight=newvalue
;t.fullheight=!1}if(maxwidthtnewvalue<=newvalue){
t.widthRatio=t.largeWidth/newvalue/t.nzWidth
;newvalue>maxwidthtnewvalue?t.newvaluewidth=maxwidthtnewvalue:t.newvaluewidth=newvalue
;t.fullwidth=!0}else{
t.widthRatio=t.largeWidth/newvalue/t.nzWidth
;t.newvaluewidth=newvalue;t.fullwidth=!1}}scrcontinue=!1
;if("inner"==t.options.zoomType){
if(t.nzWidth>=t.nzHeight)if(t.newvaluewidth<=maxwidthtnewvalue)scrcontinue=!0;else{
scrcontinue=!1;t.fullheight=!0;t.fullwidth=!0}
if(t.nzHeight>t.nzWidth)if(t.newvaluewidth<=maxwidthtnewvalue)scrcontinue=!0;else{
scrcontinue=!1;t.fullheight=!0;t.fullwidth=!0}}
"inner"!=t.options.zoomType&&(scrcontinue=!0);if(scrcontinue){
t.zoomLock=0;t.changeZoom=!0
;if(t.options.zoomWindowHeight/t.heightRatio<=t.nzHeight){
t.currentZoomLevel=t.newvalueheight
;if("lens"!=t.options.zoomType&&"inner"!=t.options.zoomType){
t.changeBgSize=!0;t.zoomLens.css({
height:String(t.options.zoomWindowHeight/t.heightRatio)+'px'})}
"lens"!=t.options.zoomType&&"inner"!=t.options.zoomType||(t.changeBgSize=!0)
}if(t.options.zoomWindowWidth/t.widthRatio<=t.nzWidth){
"inner"!=t.options.zoomType&&t.newvaluewidth>t.newvalueheight&&(t.currentZoomLevel=t.newvaluewidth)
;if("lens"!=t.options.zoomType&&"inner"!=t.options.zoomType){
t.changeBgSize=!0;t.zoomLens.css({
width:String(t.options.zoomWindowWidth/t.widthRatio)+'px'})}
"lens"!=t.options.zoomType&&"inner"!=t.options.zoomType||(t.changeBgSize=!0)
}if("inner"==t.options.zoomType){t.changeBgSize=!0
;t.nzWidth>t.nzHeight&&(t.currentZoomLevel=t.newvaluewidth)
;t.nzHeight>t.nzWidth&&(t.currentZoomLevel=t.newvaluewidth)}}
t.setPosition(t.currentLoc)},closeAll:function(){
self.zoomWindow&&self.zoomWindow.hide()
;self.zoomLens&&self.zoomLens.hide()
;self.zoomTint&&self.zoomTint.hide()},changeState:function(e){
var t=this;'enable'==e&&(t.options.zoomEnabled=!0)
;'disable'==e&&(t.options.zoomEnabled=!1)}}
;e.fn.elevateZoom=function(t){return this.each(function(){
var i=Object.create(n);i.init(t,this)
;e.data(this,'elevateZoom',i)})};e.fn.elevateZoom.options={
zoomActivation:"hover",zoomEnabled:!0,preloading:1,zoomLevel:1,
scrollZoom:!1,scrollZoomIncrement:.1,minZoomLevel:!1,
maxZoomLevel:!1,easing:!1,easingAmount:12,lensSize:200,
zoomWindowWidth:400,zoomWindowHeight:400,zoomWindowOffetx:0,
zoomWindowOffety:0,zoomWindowPosition:1,
zoomWindowBgColour:"#fff",lensFadeIn:!1,lensFadeOut:!1,debug:!1,
zoomWindowFadeIn:!1,zoomWindowFadeOut:!1,
zoomWindowAlwaysShow:!1,zoomTintFadeIn:!1,zoomTintFadeOut:!1,
borderSize:4,showLens:!0,borderColour:"#888",lensBorderSize:1,
lensBorderColour:"#000",lensShape:"square",zoomType:"window",
containLensZoom:!1,lensColour:"white",lensOpacity:.4,
lenszoom:!1,tint:!1,tintColour:"#333",tintOpacity:.4,gallery:!1,
galleryActiveClass:"zoomGalleryActive",imageCrossfade:!1,
constrainType:!1,constrainSize:!1,loadingIcon:!1,
cursor:"default",responsive:!0,onComplete:e.noop,
onDestroy:function(){},onZoomedImageLoaded:function(){},
onImageSwap:e.noop,onImageSwapComplete:e.noop}
}(jQuery,window,document);var DeviceController=Class.create()
;DeviceController.prototype={initialize:function(e){var t=this
;this.device="desktop";this.version=e
;deviceDetector.device_modes=e.device_modes
;this.min_viewport=320;this.previous_device="desktop"
;if("viewer"==e.mode){if(!this.version.features.tablet){
this.version.device_modes.mobile_landscape="desktop"
;"tablet"==this.version.device_modes.tablet&&(this.version.device_modes.tablet="desktop")
}this.detectDevice()
;this.mobile_auto_css=mobile_auto_css+"#pages div.component{max-width:none};"
;this.mobile_tree_css=mobile_tree_css
;$("#mobile_auto_css").prev().filter("style").remove()
;$("#mobile_tree_css").prev().filter("style").remove()}
setTimeout(function(){t.checkAndSetDefaultMobileBar()},1111)},
checkAndSetDefaultMobileBar:function(){
if(!this.version.mobile_bar){var e=[]
;this.version.pages_fg.each(function(t){e.push({pageid:t.pageid
})});if("editor"==v.mode){
mobileBar.component_interface.setData("buttons",[{type:"menu",
image:MobileBar.button_types.menu.image,css_class:"up",
device:"all"}]);mobileBar.component_interface.setData("links",e)
}else{v.mobile_bar|={};v.mobile_bar.buttons|=[{css_class:"up",
device:"all",links:e,type:"menu"}]}}},viewerSetup:function(){
var e=this
;$(window).on("resize"+(0==window.outerWidth&&0==window.outerHeight?" orientationchange":""),function(){
if(0==$('input:focus,textarea:focus').length){
var t=deviceDetector.detect();if(t!=deviceController.device){
deviceController.previous_device=deviceController.device
;deviceController.device=t;e.updateDisplay()}}})
;e.updateDisplay()},detectDevice:function(){
this.device=deviceDetector.detect()},
updateDisplay:function(e,t){var t=t||{},i=this
;if(e||this.previous_device!=this.device){
if("mobile_auto"==this.previous_device){
$("#mobile_auto_css").prev().remove();this.version.checkWidth()}
if("mobile_auto"==this.device){
$("#mobile_auto_css").prev().filter("style").remove()
;loadStyle(this.mobile_auto_css,$("#mobile_auto_css")[0])
}else if("mobile_tree"==this.device){
$("#mobile_tree_css").prev().filter("style").remove()
;loadStyle(this.mobile_tree_css,$("#mobile_tree_css")[0])}
if("mobile_tree"==this.previous_device){
$("#mobile_tree_css").prev().remove()
;v.getSelectedPage().getCptsAndLayoutCpts().each(e=>{
e.reattachComponentBody()})
;$("#pages").append($("#footer_zone").css("padding",""))
;$("#mobile_wrapper, #footer_zone").find(".component").detach()
;$("#mobile_wrapper").remove()
;$(".sub_cpt_node, .sub_column_node").remove()
;$(".component.hide_mobile").removeClass('hide_mobile')
;$(".component").removeClass('force_height')
;$("#mobile_bar").css({transform:"",left:""})
;if(!v.is_sections_system&&footer.active()){v.checkHeight()
;footer.set_height()}}
"mobile_auto"==this.device?$("#pages").css({left:"0%"
}):"mobile_auto"!=this.previous_device&&"mobile_landscape"!=this.previous_device&&"mobile"!=this.previous_device||$("#pages").css({
left:"50%"});var o=this.version.getSelectedPage()
;if("mobile_tree"==this.device&&o){
"editor"==v.mode&&o._updateMobileTree()
;if(0==$("#mobile_wrapper").length){
var n=$("<div id='mobile_wrapper'></div>")
;v.is_sections_system&&$("<div id=\"sections_mobile\"></div>").appendTo(n)
;$("#pages").prepend(n)}
$("#mobile_wrapper").width(Math.max(deviceController.device_size().width,deviceDetector.w||0))
;v.is_sections_system||footer.node.css({position:"relative",
top:"",height:"auto",padding:"5px",
"margin-top":footer.page_for_blocks().footer.margin_top,
"padding-bottom":footer.page_for_blocks().footer.padding_bottom
})}else if(o){
v.is_sections_system||this.version.page_bg.loadComponents().then(function(){
i.updatePageDisplay(i.version.page_bg)})
;v.is_sections_system||footer.node.css({position:"absolute",
"margin-top":"","padding-bottom":""})}
t.no_mobilebar_update||mobileBar.updateDisplay()
;"desktop"==this.previous_device&&deviceDetector.loadDeviceScreenCss()
;"desktop"==this.device&&deviceDetector.removeDeviceScreenCss()
;o&&o.loadChildren().then(function(){i.updatePageDisplay(o)
;setTimeout(function(){sigCtl.emit("Device.changed")})})
;this.version.checkHeight()}},updateCptSize:function(e){
e.onDisplayed.then(function(){setTimeout(function(){
e.uiCall("onResizeStart");e.uiCall("onResize")
;e.uiCall("onResizeStop")
;deviceController.previous_device!=deviceController.device&&e.uiCall("onDeviceChanged",{
from:deviceController.previous_device,to:deviceController.device
})})})},updateDisplayCptMobileTree:function(e,t,i){
var i=i||{},o=e.node,n=null;switch(e.component_type.class_name){
case"UI_Button":break;case"UI_Download":n=function(){
e.uiCall("onResize")};break;case"UI_Carousel":
e.uiCall('onDeviceChanged');break;case"UI_Map":
o.height(e.device_coordinates["mobile_tree"==deviceController.device?"desktop":deviceController.device].h)
;break;case"UI_Payment":o.height(e.device_coordinates.desktop.h)
;break;case"UI_Calendar":
o.addClass('force_height').css('min-height',Math.min(e.device_coordinates.desktop.h,500))
;break;case"UI_Image":
if('ratio'==e.data.ratio_type&&e.device_coordinates){
var s=e.device_coordinates.desktop.h/e.device_coordinates.desktop.w
;t.css('display','block')
;o.css('min-height',Math.round(Math.min(e.device_coordinates.desktop.w,t.width())*s))
;t.css('display','');setTimeout(function(){o.find("img").css({
width:"100%",height:"auto"})},150)}break;case"UI_Video":
if(e.data.videoFile.width&&e.data.videoFile.height&&e.data.aspectRatio){
var r=e.data.videoFile.height/e.data.videoFile.width
;r>1?o.width(e.device_coordinates.desktop.w).height(e.device_coordinates.desktop.w*r):o.width(e.device_coordinates.desktop.w/r).height(e.device_coordinates.desktop.h)
}break;case"UI_Social2":o.height(e.device_coordinates.desktop.h)
}t.append(o)
;var a=e.device_coordinates.desktop.w>t.width()?"100%":e.device_coordinates.desktop.w+"px"
;(e.data.full_width||e.data.ratio_type&&"fullwidth"==e.data.ratio_type||e.data.type&&"s"==e.data.type&&1==e.data.slider_width)&&(a="100%")
;o.css({position:"relative",height:"auto",width:a,top:"auto",
left:0})
;var l=presetController.find(e.component_type_id,"backdrop",e.data.preset),c=l&&l.find_data("options_background","padding")
;t.hasClass("sub_cpt_node")||"100%"!=a||"UI_Text"!=e.component_type.class_name||l&&c&&("object"!=typeof c||!$.isEmptyObject(c))||$(".componentBody",o).css({
paddingLeft:10,paddingRight:10})
;if(t.hasClass("sub_cpt_node")||t.hasClass("component")){
"number"==typeof a?t.css('padding',5):t.css({width:"100%",
boxSizing:"border-box"})
;o.parents(".component").each(function(){var e=$(this)
;if("number"==typeof a){e.width()<a&&e.width(a)
;e.css("padding","0")}})}
if("UI_Video"==e.component_type.class_name&&'sitew'!=e.data.videoFile.api){
var d=e.device_coordinates.desktop.w/e.device_coordinates.desktop.h
;o.addClass("force_height").css("min-height",[deviceController.device_size().width,[t.width(),e.W()].max()].min()/d)
}o.removeClass('hide_mobile').addClass('visible');n&&n()
;var p=function(){
if("UI_Text"==e.component_type.class_name||6==e.data.select_shape||"UI_Map"!=e.component_type.class_name&&"UI_Payment"!=e.component_type.class_name&&"UI_Carousel"!=e.component_type.class_name&&"UI_Developer"!=e.component_type.class_name&&!o.data('isContainer')&&0!=o.outerHeight()){
if("UI_Developer"==e.component_type.class_name){
o.removeClass('force_height')
;0==o.outerHeight()&&o.addClass('force_height')}}else{
var t=e.device_coordinates.desktop.h
;o.find(".jcarousel-container").length&&(t=o.find(".jcarousel-container").outerHeight())
;o.addClass("force_height").css("min-height",t)}}
;e.option_for("footer")&&(t.is("#mobile_wrapper")?footer.node.append(o):!t.hasClass("sub_column_node")&&!t.hasClass("sub_row_node")||t.closest("#footer_zone").length||footer.node.append(t))
;setTimeout(function(){p()})},waitCptForMobileTree:function(e){
return"pending"!==e.onDisplayed.state()?$.Deferred().resolve():e._display_launched?$.when(e.onDisplayed).then(null,function(){
return $.Deferred().resolve()}):$.Deferred().resolve()},
display_tree_add_cpt:function(e,t,i){var o=this
;this.add_cpt_to_tree=this.add_cpt_to_tree.then(function(){
return o.waitCptForMobileTree(e)}).then(function(){
if(e.component_type&&e.node){if(!Array.isArray(t)){
e.node.data("isContainer",!1);e.node.data("cpt",e)
;o.updateDisplayCptMobileTree(e,i.$content,{isContainer:!1})
;return $.Deferred().resolve()}e.node.data("isContainer",!0)
;o.updateDisplayCptMobileTree(e,i.$content,{isContainer:!0})
;$(".sub_cpt_node",e.node).each(function(){
$(this).find('.component').detach()
;this.parentNode.removeChild(this)})
;o.add_cpt_to_tree=o.add_cpt_to_tree.then(function(){
var i=$.fn.genId(),n=$("<div class='sub_cpt_node' id='"+i+"'></div>").appendTo(e.node),s=o.get_container_options(e)
;s.css&&n.css(s.css);return o.display_tree(t[1],i)})}})},
display_tree_mobile_row:function(e,t,i){
var o=$.fn.genId(),n=$("<div class='sub_row_node' id='"+o+"' style='margin-bottom:20px'></div>").appendTo(i.$content)
;return this.display_tree(e[1],o).then(function(){
var e=10,t=n.width();0==t&&(t=$("#body").width())
;var i=n.find("> .component"),o=i.length,s=[],r=[]
;i.each(function(i,n){var a=$(n);a.css({marginLeft:e,
marginRight:e})
;a.hasClass('visible')&&(a.width()+2*e>=t/o?s.push(a):r.push(a))
});r.each(function(i){t-=i.width()+2*e});s.each(function(i){
i.css({width:t/s.length-2*e-2})})})},
display_tree_components:function(e,t,i){var o=this
;if(v.is_sections_system)var n=i.$content;else var n=$("#"+t)
;$.each(e,function(e,s){
var r=Array.isArray(s)?s[0]:s,a='object'==typeof r&&"Mobile_Row"==r.type
;if(r==COLUMN_ID||a)o.add_cpt_to_tree=o.add_cpt_to_tree.then(function(){
var e;if(s[1].flatten().find(function(e){
var t=i.instance.getComponentById(e,!0)
;return t&&t.device_coordinates&&t.device_coordinates.mobile&&t.device_coordinates.mobile.v
})){if(!a){
var r=$.fn.genId(),l=$("<div class='sub_column_node' style='margin-bottom:20px' id='"+r+"'></div>").appendTo(n)
;return o.display_tree(s[1],r)}o.display_tree_mobile_row(s,t,i)}
});else{var l=i.instance.getComponentById(r,!0);if(!l)return
;var c={...i};c.instance!=l.parent&&(c.instance=l.parent)
;l.node.data("cpt",l);o.display_tree_add_cpt(l,s,c)}})},
display_tree_sections:function(e,t){
var i=this,o=$("#"+t).find("#sections_mobile")
;o.find('.component').detach();o.html("")
;var n=v.getSelectedPage();e.each(function(e){if(e[0]){
var s,r=e[0].type.toLowerCase()
;if(s="section"==r?n.getChildById(e[0].id,!0):n[r]){
if(e[1]&&e[1].length>0){var a=s.getMobileTreeNode()
;a.appendTo(o);a.css("height","auto")
;i.display_tree_components(e[1],t,{instance:s,
$content:a.find(".section_content").html("")})}
}else console.warn("[DeviceController] Section not found",e)}})
},display_tree:function(e,t,i){var i=i||{}
;window.COLUMN_ID=window.COLUMN_ID||"COLUMN"
;this.add_cpt_to_tree=$.Deferred().resolve()
;v.is_sections_system&&"mobile_wrapper"==t?this.display_tree_sections(e,t):this.display_tree_components(e,t,{
instance:v.getSelectedPage(),$content:$("#"+t)})
;return this.add_cpt_to_tree},updatePageDisplay:function(e){
var t=this,i=screen.availWidth,o=screen.availHeight
;!v.is_sections_system&&footer.active()&&$('#footer_zone').width('')
;if("mobile_tree"==deviceController.device){
$("#body .component:not(#mobile_bar)").addClass('hide_mobile')
;var n;n=v.is_sections_system?e.getSectionsWithLayout({
with_header:!0}).map(e=>e.mobile_tree).find_all(function(e){
return e&&e.length>0}):e.mobile_tree
;if(!v.is_sections_system&&footer.active()){var s
;s='editor'==v.mode?deviceController.device_size().width:i
;$("#footer_zone").width(s-parseInt($('#footer_zone').css('paddingRight'))-parseInt($('#footer_zone').css('paddingLeft')))
}this.display_tree(n,"mobile_wrapper").then(function(){
[v.page_bg,e].each(function(e){
e.getVisibleCpts().each(function(e){t.updateCptSize(e)})})
;v.is_sections_system&&e.getSectionsWithLayout().each(function(e){
t.previous_device!=t.device&&e.onDeviceChanged({
from:t.previous_device,to:t.device})})
;$("#mobile_wrapper").find(".component:first").find(".sub_cpt_node .component").add($("#mobile_wrapper").find("div:not(.sub_row_node) > .component:first")).css("margin-top","0px")
;$("#mobile_wrapper").append($("#footer_zone"))
;$("#pages > .component:not(#mobile_bar)").each(function(){
$(this).addClass('hide_mobile').removeClass('visible')
;this.style.display=""})
;$('#mobile_wrapper').find('> .sub_column_node, > .sub_row_node').each(function(e,t){
var i=$(t);i.css('display','')
;0==i.height()&&0==i.find('.UI_Image').length&&i.css('display','none')
});var i=t.version.getSelectedPage();i.launchTransitions()
;t.version.page_bg.launchTransitions();i.setBackground()
;i.setForeground();i.updateFooter();t.version.checkHeight()})
}else{e.getCptsAndLayoutCpts().each(function(e){
t.checkMissingCptCoordinates(e);e.display({
force:"mobile_auto"==t.device&&e.prop("desktop").v})
;e.onDisplayed.done(function(){e.node.css({position:"",
padding:"","min-height":""});$(".componentBody",e.node).css({
paddingLeft:"",paddingRight:""})
;e.node_position_temporarily_absolute()
;var n=e.device_coordinates[deviceController.device]
;e.setXYZWH(n);if("mobile_auto"==t.device){
e.device_coordinates.mobile_auto={}
;if("UI_Menu"==e.component_type.class_name){
if(0==e.data.auto_size){
e.device_coordinates.desktop.auto_size=e.device_coordinates.desktop.auto_size||e.data.auto_size
;e.device_coordinates.mobile_auto.auto_size=!0}
if("drop-down"==e.data.style){
e.device_coordinates.desktop.style=e.data.style
;e.device_coordinates.mobile_auto.style="submenu"}}var s={
v:e.prop("desktop").v,h:e.prop("desktop").h,
w:Math.min(e.prop("desktop").w,i)}
;("UI_Gas"==e.component_type.class_name&&e.prop().w>i||"UI_Developer"==e.component_type.class_name&&e.data.gadget&&e.data.gadget.match(/((shape)|(backtotop))/)||e.option_for("fixed"))&&(s.v=!1)
;"UI_Map"==e.component_type.class_name&&(s.h=Math.min(s.h,.7*o))
;e.aspectRatio&&(s.h=s.w*e.aspectRatio);if(0==s.v){delete s.h
;delete s.w}historyController.offRecords(function(){
e.setXYZWH(s)})}else{setTimeout(function(){
e.node_position_to_fixed();e.node_position_to_sticky()},0)
;t.checkMissingCptCoordinates(e)}
if(("mobile_auto"==t.device||"desktop"==t.device)&&"UI_Menu"==e.component_type.class_name){
e.device_coordinates[t.device].auto_size!=undefined&&(e.data.auto_size=e.device_coordinates[t.device].auto_size)
;"mobile_auto"!=t.device&&e.device_coordinates[t.device].auto_size==undefined||setTimeout(function(){
e.uiCall("autoSize")},0)
;if(e.device_coordinates[t.device].style!=undefined){
e.data.style=e.device_coordinates[t.device].style
;setTimeout(function(){e.uiCall("onPropertyChanged",["style"])
},0)}}t.updateCptSize(e)})})
;v.is_sections_system&&e.getSectionsWithLayout().each(e=>{
e.$node.toggle('desktop'==this.device||e.getVisibleCpts().length>0)
})}},niceName:function(e,t){var i;return{
mobile:["Mobile","Les mobiles"],
mobile_tree:["Optimisation automatique","Optimisation automatique"],
mobile_landscape:["Mobile horizontal","Mobiles horizontaux"],
tablet:["Tablette","Les tablettes"],
desktop:["Ordinateur","Les ordinateurs"]
}[e||this.device][t||0]},device_size:function(e){var t;return{
mobile_tree:{width:360,height:640},mobile_auto:{width:360,
height:640},mobile:{width:360,height:640},mobile_landscape:{
width:600,height:360},tablet:{width:700,height:1e3}
}[e||this.device]||{width:1200,height:1e4}},
checkMissingCptCoordinates:function(e,t){
var t=t||this.device,i="xyzwhav".split("").find_all(function(i){
return e.device_coordinates[t]===undefined||e.device_coordinates[t][i]===undefined
});if(i.length){i.each(function(i){
var o,n=[e.device_coordinates[deviceDetector.bestSourceDevice(t)],e.device_coordinates.desktop].find(function(e){
return e&&e[i]!==undefined});if(n){
e.device_coordinates[t]=e.device_coordinates[t]||{}
;e.device_coordinates[t][i]=n[i]}})
;e.setHasChanged&&e.setHasChanged()}},
get_container_options:function(e){var t={};if(e.component_type){
var i=10
;if(["UI_Box","UI_Strip"].includes(e.component_type.class_name))var o=e.getData("border"),n=e.getData("border_activate"),s=n?o.all[3]?o.all[0]:o.bt[3]?o.bt[0]:i:i,r=n?o.all[3]?o.all[0]:o.bl[3]?o.bl[0]:i:i,a=n?o.all[3]?o.all[0]:o.br[3]?o.br[0]:i:i,l=n?o.all[3]?o.all[0]:o.bb[3]?o.bb[0]:i:i
;switch(e.component_type.class_name){case"UI_Box":
var c=e.getData("distance_shadow"),d=e.getData("shadow");t={
paddingTop:s+(d?c-e.getData("vertical_shadow"):0),
paddingLeft:r+(d&&!e.getData("full_width")?c-e.getData("horizontal_shadow"):0),
paddingRight:a+(d&&!e.getData("full_width")?c+e.getData("horizontal_shadow"):0),
paddingBottom:l+(d?c:0)};break;case"UI_Strip":t={paddingTop:s,
paddingLeft:r,paddingRight:a}}}return{css:t}}}
;var PageMarginTop={list:[],add:function(){var e={val:0,
update:function(e){this.val=e;var t=0
;PageMarginTop.list.each(function(e){t+=e.val})
;$("#pages").css("margin-top",t)
;$(".accept_bg").length>0&&$("#theme_background").css("top",t)
;sigCtl.emit("Site.moved")}};this.list.push(e);return e},
max:function(){
return Math.max.apply(null,Object.keys(PageMarginTop.list).map(function(e){
return PageMarginTop.list[e].val}))},rulerH:function(){
return'mobile'==deviceController.device&&$(".accept_bg").length>0?$("#ruler_space_hide").height():0
}};CSS_PARSER={d:{},data_replace:[],index:{},
index_data:function(){var e=CSS_PARSER.d.data
;for(var t in e)if(-1==t.indexOf("_order")){
CSS_PARSER.index[t]={};var i=e[t+"_order"]
;if(i)for(var o=0;o<i.length;o++){var n=i[o]
;if(n)for(var s in e[t][n])CSS_PARSER.index[t][s]=CSS_PARSER.index[t][s]||e[t][n][s]
}}},find_data_with_index:function(e,t){
var i=CSS_PARSER.index[e],o=i?i[t]:undefined},
find_data:function(e,t){
if(!CSS_PARSER.d.data||!CSS_PARSER.d.data[e+"_order"])return undefined
;for(var i=undefined,o=0,n=CSS_PARSER.d.data[e+"_order"];i==undefined&&o<n.length;){
n[o]&&CSS_PARSER.d.data[e][n[o]]&&(i=CSS_PARSER.d.data[e][n[o]][t])
;o++}return i},replacing_data:function(e,t,i){var o=0;switch(e){
case"simple":for(o=0;o<t.length;o++){
var n=t[o],s=CSS_PARSER.find_data(n[1],n[2])
;CSS_PARSER.data_replace.push([n[0],s?s+"px":"#to_delete"])}
break;case"simple_without_px":for(o=0;o<t.length;o++){
var n=t[o],s=CSS_PARSER.find_data(n[1],n[2])
;CSS_PARSER.data_replace.push([n[0],s?"string"==typeof s?s:s[0]:"#to_delete"])
}break;case"simple_with_index":for(o=0;o<t.length;o++){
var n=t[o],s=CSS_PARSER.find_data(n[1],n[2])
;CSS_PARSER.data_replace.push([n[0],s?"string"==typeof s?s:s[n[3]]:"#to_delete"])
}break;case"borders":
for(o=0;o<t.length;o++)for(var r=t[o],a=CSS_PARSER.find_data(r[0][1],"border"),l=0;l<r.length;l++){
var c=null;a&&(c=a.all&&a.all[3]?a.all:a[r[l][2]])
;CSS_PARSER.data_replace.push([r[l][0],c&&c[3]?c[0]+"px "+c[1]+" "+c[2]:i||"#to_delete"])
}break;case"four_elements":i=i||"px";for(o=0;o<t.length;o++){
var n=t[o],s=CSS_PARSER.find_data(n[1],n[2])
;CSS_PARSER.data_replace.push([n[0],s?s[0]+i+" "+s[1]+i+" "+s[2]+i+" "+s[3]+i:"#to_delete"])
}}},getBackgroundGradient:function(e,t,i,o){if(e){
if(e&&1==e.length)return e[0][1];var n="180deg",s='linear'
;if("diagonal"===t&&i!=undefined)n=i+"deg";else if('horizontal'===t)n="90deg";else if('radial'===t){
s='radial';n='circle at center'}
for(var r=[],a=0;a<e.length;a++){var l=e[a]
;r.push(l[1]+' '+l[0])}
return s+'-gradient('+n+','+(r=r.join(","))+')'}}}
;Math.float2=function(e){return Math.round(100*e)/100};Color={
hslToArray:function(e){return e.split(",").map(function(e,t){
try{return parseInt(e.match(/\d+/)[0])}catch(i){
return 1==t||2==t?100:0}})},hslArrayToString:function(e){
return'hsl('+e[0]+', '+e[1]+'%, '+e[2]+'%)'},
isHexColor:function(e){return!!e.match(/^#[0-9A-F]{6}$/i)}}
;is_colored=function(){
return window.__is_colored==undefined?window.__is_colored=Boolean(is_customizable()||$(".accept_bg").length):window.__is_colored
};is_customizable=function(){
return window.__is_customizable==undefined?window.__is_customizable=Boolean($(".customizable").length):window.__is_customizable
};MemberCommentsController=Class.create()
;MemberCommentsController.prototype={initialize:function(e,t){
this.version=1;this.cpt=e;this.opts=t
;this.paginate_after_remove=!1;var i=this
;sigCtl.connect("Theme.changed",function(){i._loadCSS()})
;this._loadCSS()},_loadCSS:function(){
if(!MemberCommentsController.css_loaded){
loadCSS("/assets/precompile/member_comment.css?version=3")
;MemberCommentsController.css_loaded=!0}if(is_colored()){
var e="style_member_comment_site";$("#"+e).remove();var t=""
;t+=".member-comment-avatar { color: "+get_color(0,-2)+"; background: "+get_color(0,4)+" }"
;t+=".member-comment-author { color: "+get_color(0,-2)+" }"
;t+=".member-comment-header-add-form { color: "+get_color(0,-2)+" }"
;$(loadStyle(t,$("#block_custom_styles_css")[0])).attr("id",e)}
},formAddMemberComment:function(e){
if(this.opts.configuration.enabled&&this.opts.has_feature){
version_preset_id=GraphicalType.data_or_version_preset('textbox')
;$member_comment_form_add=$("<div>").addClass("member-comment-form-add").appendTo(e)
;$member_comment_article_form_container=$("<div>").addClass("member-comment-article-form-container").appendTo($member_comment_form_add)
;$member_comment_form_article=$("<form>").addClass(is_colored()&&version_preset_id?"gttextbox_preset gttextbox_preset_"+version_preset_id:"site_textbox").appendTo($member_comment_article_form_container)
;if(MemberController.isConnected()){
$member_comment_header_add_form=$("<div>").addClass("member-comment-header-add-form").append(this.getCurrentMemberAvatar(MemberController.data.avatar.image,MemberController.data.avatar.mode,MemberController.data.avatar.initials)).append("<strong>"+MemberController.data.display_name+"</strong>")
;$("member-comment-header-add-form").length>0?$("member-comment-header-add-form").replaceWith($member_comment_header_add_form):$member_comment_article_form_container.prepend($member_comment_header_add_form)
}
$member_comment_form_article.append("<textarea rows='3' class='member-comment-add-textarea' resize='none' placeholder='Ajouter un commentaire...'></textarea>").append(this.getPostButtonHtml())
;this.addMemberComment(e,this.article_id,this.cpt.node.find(".member-comment-article-form-container form"))
}},addMemberComment:function(e,t,i){
var o=this,n=i.find("> textarea");n.css({
height:n.prop("scrollHeight")+"px","overflow-y":"hidden"})
;n.height()<=0&&n.css({height:""});n.on("input",function(){
$(this).css({height:"auto"});$(this).css({
height:n.prop("scrollHeight")+"px"})})
;i.on("submit",function(s){s.preventDefault()
;callback_submit_form=function(){
var s=0==i.closest(".member-comment-container").length?e.find(".member-comment-node-container"):i.closest(".member-comment-container").find("> .member-comment-wrapper-answers > .member-comment-answers"),r=o.article_id==t?"article":"comment"
;MemberController.isConnected()&&""!=n.val()&&o.cpt.ask({
request:"add_member_comment",content:n.val(),id:t,type:r
}).then(function(t){if(t.success){n.val("").height("")
;if(t.all_comments_from_commentable==s.find("> .member-comment-container").length+1){
$member_comment_container=o.insertComment(t.comment,s,t.all_comments_from_commentable,!1)
;!site.blog_configuration.comments.moderation.enabled||t.comment.approved?$member_comment_container.append("<p class='member-comment-success member-comment-flash'><span>\ud83e\udd73</span>Félicitations, votre commentaire est en ligne !</p>"):site.blog_configuration.comments.moderation.enabled&&!t.comment.approved&&$member_comment_container.append("<p class='member-comment-warning-moderation member-comment-flash'><span>\u23f3</span>Votre commentaire est en attente de validation par l’administrateur du site</p>")
}$(".member-comment-helper-first").remove()
;if("article"==r)e.find("#member-comment-count").text(t.all_comments_from_commentable);else{
$member_comment_card=e.find("> .member-comment-card")
;$member_comment_action_container=$member_comment_card.find("> .member-comment-action-container")
;$member_comment_action_container.find("> .member-comment-update, > .member-comment-remove").hide()
}setTimeout(function(){o.opts.resize_cpt.call()},500)}
t.spam&&alert("Veuillez réessayer plus tard")})}
;MemberController.isConnected()?callback_submit_form():MemberController.tb_show("signin")
})},structureMemberComments:function(e){
if(this.opts.configuration.enabled&&this.opts.has_feature){
var t=$("<div></div>").addClass("member-comment-module"),i=$("<div></div>").addClass("member-comment-wrapper").addClass("block_section"),o=$("<h3>Commentaires (<span id='member-comment-count'>0</span>)</h3>").addClass("member-comment-module-title")
;t.appendTo(e.node);i.appendTo(t);i.append(o)
;this.article_id=e.article_id;this.formAddMemberComment(i)}},
listMemberComments:function(e){this.article_id=e.article_id
;if(this.opts.configuration.enabled&&this.opts.has_feature){
var t=e.node.find('.member-comment-wrapper')
;t.find(".member-comment-node-container").remove()
;var i=$("<div></div>").addClass("member-comment-node-container").appendTo(t),o=this
;o.askGetCommentsFromCommentable(this.article_id,i,o.opts.configuration.pagination).then(function(n){
$article_form_container=$(".member-comment-article-form-container")
;if(n.all_comments_from_commentable>0){
$(".member-comment-helper-first").remove()
;0==t.find("> .separation").length&&$("<hr class='separation'>").insertAfter($(".member-comment-form-add"))
;o.loopOnComments(n,i,n.all_comments_from_commentable)
;e.node.find("#member-comment-count").text(n.all_comments_from_commentable)
;setTimeout(function(){
if(n.all_comments_from_commentable>o.opts.configuration.pagination*o.calculForCommentsPagination(o.cpt.node.find(".member-comment-node-container"),o.opts.configuration.pagination)){
var e=$("<strong class='member-comment-more'><span class='fonticon'>"+$.fn.fonticon('editor_add')+"</span>Voir plus de commentaires</strong>").appendTo(t)
;setTimeout(function(){o.opts.resize_cpt.call()},300)
;e.click(function(){
o.askGetCommentsFromCommentable(o.article_id,i,o.opts.configuration.pagination).then(function(t){
o.loopOnComments(t,i,t.all_comments_from_commentable)
;t.all_comments_from_commentable<=i.find("> .member-comment-container").length&&e.hide()
;setTimeout(function(){o.opts.resize_cpt.call()},300)})})}},500)
}else if(0==$(".member-comment-helper-first").length){
$helper_first=$("<div>").addClass("member-comment-helper-first").insertAfter(".member-comment-module-title")
;$("<p>").text("Il n’y a pas encore de commentaires pour cet article...").appendTo($helper_first)
;$first_to_speak=$("<strong>")
;is_colored()?$first_to_speak.css("color",get_color()):$first_to_speak.addClass("clickable_link")
;$first_to_speak.text("Soyez la première personne à vous exprimer !").appendTo($helper_first)
}})}},updateComment:function(e,t){var i=this
;$member_comment_card=$(e).closest(".member-comment-card")
;$content=$member_comment_card.find("> .member-comment-content")
;$content.replaceWith($("<textarea class='member-comment-updating' rows='3'>"+$content.text()+"</textarea>"))
;$textarea=$member_comment_card.find("> .member-comment-updating")
;$textarea.css({"overflow-y":"hidden"})
;$textarea.on("input",function(){$(this).css({height:"auto"})
;$(this).css({height:$textarea.prop("scrollHeight")+"px"})})
;$update_button=$(e).hide()
;$validate_button=$(e).siblings(".member-comment-validate").show()
;MemberController.isConnected()&&$validate_button.one('click',function(){
i.cpt.ask({request:"update_member_comment",
content:$textarea.val(),member_comment_id:t}).then(function(t){
if(t.success){
$textarea.replaceWith("<div class='member-comment-content'>"+$textarea.val()+"</pre>")
;$update_button.show();$validate_button.hide()
;i.updateInfoComment($(e).closest(".member-comment-container"),t.member_comment)
;setTimeout(function(){i.opts.resize_cpt.call()},500)}})})},
updateInfoComment:function(e,t){
$member_comment_published=e.find("> .member-comment-card > .member-comment-author > .member-comment-author-content .member-comment-published")
;0==$member_comment_published.find(".member-comment-update-info").length&&t.created_at.split('.')[0]!=t.updated_at.split('.')[0]&&$member_comment_published.append(" <span class='member-comment-update-info'>(Modifié)</span>")
},removeComment:function(e,t,i){
var o=this,n=$(e).closest(".member-comment-container"),s=n.parent(),r=s.closest(".member-comment-wrapper"),a=s.hasClass("member-comment-answers")?"comment":"article"
;MemberController.isConnected()&&confirm("Voulez-vous supprimer votre commentaire ?")&&this.cpt.ask({
request:"remove_member_comment",member_comment_id:t
}).then(function(e){
"article"==a?r.find("#member-comment-count").text(e.all_comments_from_commentable):0==e.all_comments_from_commentable&&n.closest(".member-comment-wrapper-answers").siblings(".member-comment-card").find("> .member-comment-action-container").find("> .member-comment-update, > .member-comment-remove").show()
;n.remove()
;e.all_comments_from_commentable>s.find("> .member-comment-container").length&&i.call()
;setTimeout(function(){o.opts.resize_cpt.call()},500)})},
assignReply:function(e,t){
var i=$(e).hide(),o=$(e).closest(".member-comment-container"),n=$(e).siblings(".member-comment-cancel-reply").show(),s=o.find("> .member-comment-wrapper-answers"),r=s.find("> .member-comment-answers"),a
;if(0==s.find('> .member-comment-form-container-reply').length){
a=$("<div>").addClass("member-comment-form-container-reply")
;$form_reply=$("<form>").addClass("gttextbox_preset gttextbox_preset_"+GraphicalType.data_or_version_preset('textbox')).appendTo(a)
;$form_reply.append(this.getCurrentMemberAvatar(MemberController.data.avatar.image,MemberController.data.avatar.mode,MemberController.data.avatar.initials)).append("<textarea rows='3' placeholder='Répondre à un commentaire...'></textarea>").append(this.getPostButtonHtml())
;s.prepend(a);this.addMemberComment(o,t,a.find("> form"))
}else a=r.find('> .member-comment-form-container-reply')
;n.click(function(){a.remove();i.show();$(this).hide()})},
insertComment:function(e,t,i,o,n){void 0===o&&(o=!0)
;var s=this,r=$("<div></div>").addClass("member-comment-container"),a=$("<div class='member-comment-card'></div>").addClass("gttextbox_preset gttextbox_preset_"+GraphicalType.data_or_version_preset('textbox')).appendTo(r),l=$("<div class='member-comment-wrapper-answers'></div>").appendTo(r),c=$("<div class='member-comment-answers'></div>").appendTo(l),d=e.avatar,p=$("<div>").addClass("member-comment-author").append(this.getCurrentMemberAvatar(d.image,d.mode,d.initials)).appendTo(a),h=$("<div>").addClass("member-comment-author-content").appendTo(p)
;$("<span>").addClass("member-comment-author-name").text(e.display_name).appendTo(h)
;$("<span>").addClass("member-comment-published").text(!site.blog_configuration.comments.moderation.enabled||e.approved?sprintf("Posté le %1$s",this.translateDate(e.created_at)):"En attente de publication").appendTo(h)
;$("<div>").addClass("member-comment-content").text(e.content).appendTo(a)
;$action_container=$("<div></div>").addClass("member-comment-action-container").appendTo(a)
;$update_button=$("<button>Modifier</button>").addClass("member-comment-update member-comment-action").prepend("<span class='fonticon'>"+$.fn.fonticon("editor_pen")+"</span>")
;$validate_button=$("<button>Confirmer</button>").addClass("member-comment-validate member-comment-action").hide().prepend("<span class='fonticon'>"+$.fn.fonticon("editor_pen")+"</span>")
;$remove_button=$("<button class='member-comment-remove member-comment-action' data-idcomment="+e.id+">Supprimer</button>").prepend("<span class='fonticon'>"+$.fn.fonticon("editor_delete")+"</span>")
;$reply_button=$("<button class='member-comment-reply member-comment-action'>Répondre</button>").prepend("<span class='fonticon'>"+$.fn.fonticon("editor_answer")+"</span>")
;$cancel_reply_button=$("<button class='member-comment-cancel-reply member-comment-action'>Annuler</button>").prepend("<span class='fonticon'>"+$.fn.fonticon("editor_answer")+"</span>").hide()
;if(MemberController.isConnected()){
if(MemberController.data.id==e.member_id){
$action_container.append($update_button).append($validate_button).append($remove_button)
;if(e.nb_comments>0){$update_button.hide()
;$validate_button.hide();$remove_button.hide()}
$remove_button.click(function(){s.removeComment(this,e.id,n)})
;$update_button.click(function(){s.updateComment(this,e.id)})}
if(e.level<s.opts.configuration.threads.max_level){
$action_container.append($reply_button).append($cancel_reply_button)
;$reply_button.on('click',function(){s.assignReply(this,e.id)})}
}o?r.appendTo(t):r.prependTo(t);if(e.comments){
this.loopOnComments(e,c,i,s.opts.configuration.threads.first_pagination,!0)
;if(e.nb_comments>site.blog_configuration.comments.threads.first_pagination){
var u=$("<strong class='member-comment-more'><span class='fonticon'>"+$.fn.fonticon('editor_arrow')+"</span>Voir plus de réponses</strong>")
;u.appendTo(l);u.click(function(){
s.askGetCommentsFromCommentable(e.id,c,s.opts.configuration.threads.pagination,s.paginate_after_remove?0:1,!!s.paginate_after_remove).then(function(e){
s.paginate_after_remove=!1
;s.loopOnComments(e,c,e.all_comments_from_commentable,s.opts.configuration.threads.pagination,!0)
;e.all_comments_from_commentable<=c.find("> .member-comment-container").length&&u.hide()
;setTimeout(function(){s.opts.resize_cpt.call()},500)})})}}
this.updateInfoComment(r,e);return r},
calculForCommentsPagination:function(e,t,i){void 0===i&&(i=0)
;return Math.ceil((e.find("> .member-comment-container").length+i)/t)
},askGetCommentsFromCommentable:function(e,t,i,o,n){var s=this
;void 0===o&&(o=1);void 0===n&&(n=!1)
;t.append('<svg class="member-comments-loader" xmlns="<a target="_blank" data-stringify-link="http://www.w3.org/2000/svg" delay="150" data-sk="tooltip_parent" href="http://www.w3.org/2000/svg" rel="noopener noreferrer" tabindex="-1" data-remove-tab-index="true">http://www.w3.org/2000/svg</a>" width="32" height="32" viewBox="0 0 32 32"><g fill="#383838"><g class="nc-loop-dots-5-32-icon-f"><circle cx="16" cy="6" fill="#383838" r="5"></circle><circle cx="26" cy="16" r="5"></circle><circle cx="16" cy="26" fill="#333333" r="5"></circle><circle cx="6" cy="16" r="5"></circle></g><style>.nc-loop-dots-5-32-icon-f{--animation-duration:1s}.nc-loop-dots-5-32-icon-f *{animation:nc-loop-dots-5-anim var(--animation-duration) infinite}.nc-loop-dots-5-32-icon-f :nth-child(1){transform-origin:16px 6px}.nc-loop-dots-5-32-icon-f :nth-child(2){transform-origin:26px 16px;animation-delay:.1s}.nc-loop-dots-5-32-icon-f :nth-child(3){transform-origin:16px 26px;animation-delay:.2s}.nc-loop-dots-5-32-icon-f :nth-child(4){transform-origin:6px 16px;animation-delay:.3s}@keyframes nc-loop-dots-5-anim{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}</style></g></svg>')
;return this.cpt.ask({request:"get_member_comments",id:e,
page:s.calculForCommentsPagination(t,i,n?1:0)+o,
type:e==s.article_id?"article":"comment",per_page:i,
after_remove:n},function(e){
t.find('.member-comments-loader').remove()})},
loopOnComments:function(e,t,i,o,n){var s=this;void 0===n&&(n=!1)
;var r=0;e.comments.each(function(a){if(n&&r==o)return!1
;s.insertComment(a,t,e.all_comments_from_commentable||i,!0,function(){
site_blog_config="MemberComment"==a.commentable_type?s.opts.configuration.threads.pagination:s.opts.configuration.pagination
;s.askGetCommentsFromCommentable(a.commentable_id,t,site_blog_config,0,!0).then(function(e){
t.html("");s.paginate_after_remove=!0
;s.loopOnComments(e,t,e.all_comments_from_commentable,site_blog_config,n)
;e.all_comments_from_commentable<=t.find("> .member-comment-container").length&&t.siblings(".member-comment-more").hide()
})});r++})},translateDate:function(e){var t,i
;t=e.match("/")?4==e.split("/")[0].length?"YYYY/MM/DD":"DD/MM/YYYY":4==e.split("-")[0].length?"YYYY-MM-DD":"DD-MM-YYYY"
;return moment(e,t).format("DD/MM/YYYY")
},getPostButtonHtml:function(){
var e=GraphicalType.data_or_version_preset('button')
;return is_colored()&&e?$("<div>").addClass("member-comment-cta gtbutton_preset gtbutton_preset_"+e).append($("<button>").addClass("button_block site_button").text("Publier")):$("<button>").addClass("site_button").text("Publier")
},getCurrentMemberAvatar:function(e,t,i){$avatar=""
;is_colored()&&"initials"==t?$avatar=$("<div>").text(i):$avatar=$("<img>").attr('src',e)
;return $avatar.addClass("member-comment-avatar")}};class Aos{
static async load(){
if(this.loaded||this.load_pending)return this.loading
;this.load_pending=!0
;$.getScript("localhost"==document.location.hostname?"/assets/lib/aos.js":"/assets/precompile/lib/aos.js",function(){
$("<link>").prependTo($("head")).attr({type:"text/css",
rel:"stylesheet",media:"screen",
href:"localhost"==document.location.hostname?"/assets/lib/aos.css":"/assets/precompile/lib/aos.css",
id:"aos_css"})});Misc.poll(()=>window.AOS,()=>{this.loaded=!0
;this.loading.resolve()});return this.loading}}Aos.loaded=!1
;Aos.loading=$.Deferred();var editor_viewer_cache_version="1"
;jQuery.viewer_ajax=function(e){
e.autoretry==undefined&&(e.autoretry=1)
;return jQuery.full_ajax(e)};jQuery.ajax=jQuery.viewer_ajax
;var Cpt=Class.create(),deviceController
;Object.extend(Cpt.prototype,new Model);Cpt.offset_top=0
;Cpt.offset_left=0;Cpt.get_offsets=function(e){$("#pages").css({
left:"",top:"",width:""})
;Cpt.offset_top=$("#body").offset().top-$("#pages").offset().top
;var t=[$("#body").offset().left,$("#pages").offset().left,$("#body").width()]
;e||"base"==(e=$("#theme_link").attr("href").split("/")[3])&&(e=$("#theme_link").attr("href").split("/")[2])
;Cpt.offset_left={hyperglass:400,balanced:480,modern:383.5,
discret:383.5,snowcrystals:389,zoe_green:409.5,unicolor:383.5,
fotoladia:350,littlestars:400,popular:400,squarely:400,
widget:400,altruism:400,flavour:400,nature:389,cristal:400,
elegance:400,vibe:400
}[e]||$("#body").offset().left-$("#pages").offset().left+$("#body").width()/2
;$("#pages").css("top",0);$("#pages").css({left:"50%",
width:"0px",
top:$("#body").offset().top-$("#pages").offset().top+"px"})}
;Object.extend(Cpt.prototype,{initialize:function(parent){
this.parent=parent
;"Page"==parent.type?this.page=parent:this.section=parent
;this.type="Component";this.ui=UI;this.onDisplayed=$.Deferred()
;this.fixed_loop_count=0;var self=this
;this.onDisplayed.fail(function(){self.parent.unpushCpt(self)})
;this.m_get_done=$.Deferred().done(function(){try{
eval("self.data="+self.data)}catch(exp){
dbg.error("Error in data from component id "+self.id,self.data)}
self.data||(self.data={})
;self.normalizeFlatOptionKeysFromRegression()})
;this.componentBodyDetached=!1},find_data:function(e,t){
if(!this.data[e+"_order"])return undefined
;for(var i=undefined,o=this,n=0;!i&&n<this.data[e+"_order"].length;){
Object.keys(o.data[e])[n]&&(i=o.data[e][Object.keys(o.data[e])[n]][t])
;n++}return i},_customDataKey:function(e){
return e?e.match(/^([^#]*)#(opt_\w+)#(.*)/):undefined},
normalizeFlatOptionKeysFromRegression:function(){
if(this.data&&"object"==typeof this.data)for(var e=this.data,t=Object.keys(e),i=0;i<t.length;i++){
var o=t[i],n=o.match(/^([^#]*)#(opt_\w+)#(.*)/);if(n){
var s=n[1],r=n[2],a=n[3]
;(null==e[s]||"object"!=typeof e[s]||Array.isArray(e[s]))&&(e[s]={})
;(null==e[s][r]||"object"!=typeof e[s][r]||Array.isArray(e[s][r]))&&(e[s][r]={})
;"undefined"==typeof e[s][r][a]&&(e[s][r][a]=e[o]);delete e[o]}}
},customGetData:function(e,t,i){
var o=null,n=this._customDataKey(e)
;n&&this.data[n[1]]&&this.data[n[1]][n[2]]&&(o=this.data[n[1]][n[2]][n[3]])
;return o},getData:function(k,no_custom,opts){var opts=opts||{}
;if(no_custom||k&&!k.match("#")){
var data=this.data[k]&&!opts.raw?JSON.parse(JSON.stringify(this.data[k]).replace(new RegExp("get_color\\((\\d),\\s?(-?\\d)\\)","gi"),function(match){
return eval(match)})):this.data[k];return data}
return this.customGetData(k)},getAllData:function(e,t){
var i=this,o={};Object.keys(this.data).each(function(n){
o[n]=i.getData(n,e,t)});return o},getPage:function(){
return"Page"==this.parent.type?this.parent:"Section"==this.parent.type?this.parent.page:v.getSelectedPage()
},uniqId:function(){return"component_"+this.id},
prop:function(e){
return this.device_coordinates[e||deviceController.device]||{}},
uiCall:function(e){if(this.ui[e]){
if("localhost"==document.location.hostname)return this.ui[e].apply(this.ui,Array.prototype.slice.call(arguments,1))
;try{
return this.ui[e].apply(this.ui,Array.prototype.slice.call(arguments,1))
}catch(i){
if(['UI_Store','UI_Blog','UI_Listproducts'].include(this.component_type.class_name)){
console.error(this.component_type.class_name+"#"+e+" Exception",i.message,i)
;cpt_error={cpt_id:this.id,exception:{name:i.name,
message:i.message,fileName:i.fileName,lineNumber:i.lineNumber}}
;var t="Page"==this.parent.type?"page":"section"
;v.is_sections_system&&(cpt_error[t+"_type"]=this.parent.type)
;cpt_error[t+"_id"]=this.parent.id;cpt_error
;dbg.error(this.component_type.class_name+"#"+e+" Exception",cpt_error)
}}}},remove:function(){this.uiCall("onRemove")
;this.node.removeClass("visible up down left right").removeClassMatch(/transition_/).removeClassMatch(/distance_/)
},select:function(){},to_json:function(){return{}},
display:function(e){if(this._display_launched){
"resolved"==this.onDisplayed.state()&&this.updateShow();return!0
}e=e||{};var t=this,i=function(){null!=t.x&&t.setXYZWH({
x:t.x-Cpt.offset_left,y:t.y-Cpt.offset_top,z:t.z,w:t.w,h:t.h,
a:t.a,v:t.prop("desktop").v},{device:"desktop",send_events:!1})
;!v.is_sections_system&&(t.option_for("footer")||"viewer"==v.mode&&t.data&&t.data._cpt_footer)&&t.node.css("visibility","hidden")
;delete t.x;delete t.y;delete t.z;delete t.w;delete t.h
;delete t.a;deviceController.checkMissingCptCoordinates(t)
;"desktop"!=deviceController.device&&t.setXYZWH(t.prop(),{
send_events:!1})
;t.preloaded&&$("style.block_position_css_"+t.id).remove()}
;this.preloaded?this.node=this.node||$("#cpt_"+this.id):this.node||(this.node=$("<div class='component'></div>"))
;e.no_move_in_dom||(v.is_sections_system?0==this.node.parent().length&&this.node.appendTo(this.parent.$content):this.node.appendTo(this.parent.node))
;var o=t.isDisplayed()
;if(!o&&t.preloaded&&6!=t.component_type_id){t.node.empty()
;t.preloaded=!1}if(!o&&!e.force)return!1
;this._display_launched=!0
;var n=$.Deferred(),s=new ProgressController("Chargement des modules",{
next_progress:15});this.onDisplayed.progress(function(e,t){
s.progress<100&&s.update(e,{next_pogress:t})
}).always(function(){s.progress<100&&s.update(100)})
;ComponentType.loadType(this.component_type_id).then(function(e){
t.component_type=e
;s.name=sprintf("Chargement des modules %1$s",t.component_type.title.capitalize())
;return $.delay(10)}).then(function(){var o=t.isDisplayed()
;if(!o&&t.preloaded&&6!=t.component_type_id){t.node.empty()
;t.preloaded=!1}if(!o&&!e.force){t._display_launched=!1
;s.update(100);n.resolve(!1);return n}
if(!$("body").hasClass("sitew_editor")&&CookiesBanner.enabled()){
var r=CookiesBanner.process_component(t);if(r.blocked){i()
;r.allowed.then(function(){
r.placeholder_builded&&r.placeholder_builded.reject()
;e.force_event=!0;e.no_set_coordinates=!0;e.no_move_in_dom=!0
;var i=t.display(e);i.then&&i.then($.debounce(500,function(){
v.checkHeight()}))})
;r.placeholder_builded&&r.placeholder_builded.then(function(e){
t.node.find('.componentBody').length?t.node.find('.componentBody').empty().append(e):t.node.append($('<div>').addClass('componentBody').append(e))
});t.onDisplayed.resolve();n.resolve(!1);t._display_launched=!1
;t.preloaded=!1;return n}}
t.ui=new UI_List[t.component_type.class_name](t)
;t.ui.component=t;t.onDisplayed.notify(50,60)
;if(!t.getPage()&&t.component_type.with_url||t.getPage()&&!t.getPage().checkType(t)){
t.onDisplayed.reject(["type_rejected"]);n.resolve(!1);return n}
if(t.preloaded){t.componentBody=t.node.children(":first")
;t.componentBody.hasClass("to_rebuild")&&t.componentBody.append(t.component_type.content.toNode(t).children())
}else t.componentBody=t.component_type.content.toNode(t).addClass(t.component_type.class_name).appendTo(t.node.empty())
;if(t.newlyCreated){var a=t.setStartupXYZWH||{}
;t.setStartupXYZWH=null;if(!t.from_clone){
a.w=a.w||0==a.w?a.w:Math.min(deviceController.device_size().width,t.component_type.width)
;"mobile"==deviceController.device.substr(0,6)&&(a.x=-a.w/2)}
t.setXYZWH({x:a.x||0,
y:a.y||0==a.y?a.y:document.documentElement.scrollTop,
z:t.parent.zOnTop()+2,a:a.a||0==a.a?a.a:0,
w:a.w||0==a.w?a.w:Math.min(deviceController.device_size().width,t.component_type.width),
h:a.h||0==a.h?a.h:t.component_type.height},{send_events:!1})
;for(var l in v.device_modes){
var c="mobile"==l&&"mobile_tree"==v.device_modes.mobile
;if(v.device_modes[l]==l||c){var d=l==deviceController.device||c
;t.setXYZWH({v:d},{device:l,send_events:!1})}}
if(t.setStartupData)t.data=t.setStartupData;else{t.data={}
;t.getDefaultFromProperties()}}else e.no_set_coordinates||i()
;t.onDisplayed.notify(60,100)
;t.coordinates_loading&&t.coordinates_loading.resolve()
;if("editor"==v.mode){sigCtl.emit("component.display",t)
;t.set_anchorGUI()}
t.component_type.includes_loaded.then(function(){
dbg.benchmark("onDisplay "+t.id,function(){
$.when(t.uiCall("onDisplay",t.componentBody),n).then(function(){
t.onDisplayed.resolve()})})})
;if("editor"==v.mode&&t.newlyCreated&&('undefined'==typeof TunnelSessionLoader||!TunnelSessionLoader.generating)){
t.setStartupData||sigCtl.connectOnce("blockSelector.select",function(e,i){
if(i==t){t.propertyDefaultAction()
;sigCtl.emit("blockSelector.select2",i);return!0}return!1})
;t.newlyCreated=!1}
t.updateShow(e.force_event?"force_event":undefined,"editor"==v.mode)
;n.resolve(!0)});var t=this
;sigCtl.connect("Site.FontFamily",function(){
"resolved"==t.onDisplayed.state()&&t.uiCall("onFontFamilyUpdate")
});this.onDisplayed.notify(15,50);return n},
ask:function(e,t,i,o,n){var s=$.Deferred(),r={data:e}
;t=t||function(){};i=i||function(){};o=o||this.componentBody
;if(this.idserver||n){if(o.find("[uitype=captcha]").length>0){
r.captcha={
key:o.find("[uitype=captcha] img").attr("captcha_key"),
entry:o.find("[uitype=captcha] input").val()}
;var a=Math.random(),l=o.find("[uitype=captcha]")
;l.find('img').attr('captcha_key',a).attr('src',"/simple_captcha/simple_captcha?simple_captcha_key="+a)
;l.find('input').val("")}
MemberController.remember_if_connected()
;r.member=MemberController.getData(o);var c=0,d={type:"POST",
url:"/json/cpt_ask/"+(n?n[0]:this.idserver)+","+(n?n[1]:this.component_type.id),
name:sprintf("Chargement des données du module %1$s",this.component_type.title.toLowerCase()).capitalize(),
data:JSON_.stringify(r),success:function(e){
e.member&&e.member.auth_token?MemberController.signin_callback(e):e.delete_member_auth_token&&MemberController.signout()
;if(e.errors){i(e.errors,e.error_details||null)
;s.reject(e.errors,e.error_details||null)}else{t(e);s.resolve(e)
}},error:function(e){if(503===e.status)try{
var t=JSON.parse(e.responseText)
;if(t.timeout&&t.retry_delays&&c<t.retry_delays.length){
var o=t.retry_delays[c];c++;setTimeout(function(){$.ajax(d)
},1e3*o);return}}catch(r){}
var n=["Erreur de communication avec le serveur"];i(n)
;s.reject(n)},dataType:"json",
contentType:"application/json; charset=utf-8"};$.ajax(d)}else{
var p=["Sauvegardez ou publiez votre site pour avoir accès à cette fonction."]
;i(p);s.reject(p)}return s},moveStart:function(){
"resolved"==this.onDisplayed.state()&&this.uiCall("onMoveStart")
},moveStop:function(){if("resolved"==this.onDisplayed.state()){
v.checkHeight();this.uiCall("onMoveStop")}},
rotateStart:function(){
"resolved"==this.onDisplayed.state()&&this.uiCall("onRotateStart")
},rotateStop:function(){
"resolved"==this.onDisplayed.state()&&this.uiCall("onRotateStop")
},move:function(e,t){
"resolved"==this.onDisplayed.state()&&this.uiCall("onMove",e,t)
},moved:function(){
"resolved"==this.onDisplayed.state()&&this.uiCall("onMoved")},
resizeStart:function(){
"resolved"==this.onDisplayed.state()&&this.uiCall("onResizeStart")
},resizeStop:function(){
if("resolved"==this.onDisplayed.state()){v.checkHeight()
;this.uiCall("onResizeStop")}},resize:function(){
"resolved"==this.onDisplayed.state()&&this.uiCall("onResize")},
moveZStart:function(){
"resolved"==this.onDisplayed.state()&&this.uiCall("onMoveZStart")
},moveZStop:function(){
"resolved"==this.onDisplayed.state()&&this.uiCall("onMoveZStop")
},setOptions:function(e){this.block_options=e
;"editor"==v.mode&&blockSelector.selectedCpt()&&blockSelector.on_option_change()
},X:function(){return parseInt(this.node.css('left'))},
Y:function(){return parseInt(this.node.css('top'))},
Z:function(){return this.prop().z},W:function(){
return parseInt(this.node.css('width'))},H:function(){
return parseInt(this.node.css('height'))},A:function(){
return this.prop().a},V:function(){return this.isDisplayed()},
getTop:function(){
return v.is_sections_system?this.Y():parseInt(this.node.get(0).getBoundingClientRect().top+$("#site").scrollTop()-$("#header").height()-$("#left_ruler_bg").height())
},getBottom:function(){
return v.is_sections_system?this.prop().y+this.prop().h:parseInt(this.node.get(0).getBoundingClientRect().bottom+$("#site").scrollTop()-$("#header").height()-$("#left_ruler_bg").height())
},setXYZWH:function(e,t){if(this.parent.cpts.include(this)){
(t=t||{}).send_events=t.send_events==undefined||t.send_events
;t.device=t.device||deviceController.device
;if(this.device_coordinates&&this.device_coordinates[t.device]!=undefined){
for(var i in e)null===e[i]&&delete e[i];var o=this.setHasChanged
;t.no_save&&(this.setHasChanged=$.noop);var n={
x:[this.moveStart,this.moveStop],
y:[this.moveStart,this.moveStop],
z:[this.moveZStart,this.moveZStop],
w:[this.resizeStart,this.resizeStop],
h:[this.resizeStart,this.resizeStop],
a:[this.rotateStart,this.rotateStop],
v:[$.noop,this.setHasChanged]
},s=[],r=this.node.hasClass("visible")
;if(t.send_events)for(var i in n)if(e[i]!=undefined)if(e[i]!=this.prop(this.current_displayed_device)[i]&&-1==s.indexOf(n[i][1])){
n[i][0].apply(this);s.push(n[i][1]);if(window.debug){
console.log('coordinate '+i+' changed (1)',e[i],this.prop(this.current_displayed_device)[i],this.component_type&&this.component_type.class_name,this)
;window.debug_stop}
}else if(e[i]!=this.prop(t.device)[i]&&-1==s.indexOf(this.setHasChanged)){
s.push(this.setHasChanged);if(window.debug){
console.log('coordinate '+i+' changed (2)',e[i],this.prop(t.device)[i],this.component_type&&this.component_type.class_name,this)
;window.debug_stop}}
for(var i in e)this.device_coordinates[t.device][i]=e[i]
;if(t.device==deviceController.device){
var a=deviceController.device;this.current_displayed_device=a
;e.x!=undefined&&this.node.css('left',this.device_coordinates[a].x+"px")
;if(e.y!=undefined){var l=this.device_coordinates[a].y
;if(this.option_for("footer")&&window.footer&&footer.active()){
this.device_coordinates[a].y=Math.max(this.device_coordinates[a].y,0)
;l=this.get_relative_y("site")}this.node.css('top',l+"px")}
e.z!=undefined&&(window.blockSelector&&blockSelector.selected_blocks.is(this.node)||this.node.css('z-index',this.Z_with_offset()+(this.node.data("zoffset")||0)))
;if("mobile_tree"!=deviceController.device||11==this.component_type_id){
e.w!=undefined&&this.node.css('width',this.device_coordinates[a].w+"px")
;e.h!=undefined&&this.node.css('height',this.device_coordinates[a].h+"px")
;e.a!=undefined&&this.node.css("transform","rotate("+this.device_coordinates[a].a+"rad)")
}}for(var c=0;c<s.length;c++)s[c].apply(this)
;if(t.send_events||e.v!=undefined&&deviceController.device==t.device){
r||this.node.removeClass("visible")
;this.updateShow(t.send_events?"send_event":"no_event",this.option_for("footer")||!t.send_events)
}this.setHasChanged=o
;t.send_events&&s.length>0&&sigCtl.emit("Component.moved")}}},
Z_with_offset:function(){var e=0
;(11==this.component_type_id&&/gadget.*backtotop/.test(this.data)||/above_fg\":true/.test(this.data)||this.data&&this.data.above_fg||5==this.component_type_id&&this.data&&this.data.above_fg===undefined)&&(e=2e4)
;return e+(this.device_coordinates["mobile_tree"==deviceController.device?"desktop":deviceController.device]?this.device_coordinates["mobile_tree"==deviceController.device?"desktop":deviceController.device].z:0)
},setHasChanged:$.noop,isDisplayed:function(){
var e=this,t=v.selectedPageFg||v.pages_fg[0],i=this.device_coordinates["mobile_tree"==deviceController.device?"desktop":deviceController.device]||this.device_coordinates[deviceDetector.bestSourceDevice(deviceController.device)]||this.device_coordinates.desktop,o=!0
;if(!v.is_sections_system){var n
;o=this.parent==t.version.page_bg||this.parent==t.version.selectedPageFg
}
if('mobile_auto'==deviceController.device)var s=!0;else var s=i.x!=undefined||this.x!=undefined
;if("mobile_tree"==deviceController.device)var r=(this.device_coordinates.mobile||this.device_coordinates.mobile_tree||this.device_coordinates.desktop).v&&this.device_coordinates.desktop.v;else var r=1==i.v
;return r&&s&&o},hide:function(){this.updateShow()},
updateShow:function(e,t){
var i=this,o=this.isDisplayed(),n="force_event"==e?o:!this.node||(!this.node.hasClass("visible")||!this.node[0].isConnected)
;if(o&&n){"no_event"!=e?i.onDisplayed.then(function(){
i.reattachComponentBody()
;dbg.benchmark("onShow "+i.id,function(){i.uiCall("onShow")})
;i.launchTransition(t)}):i.launchTransition(t)
;"viewer"==v.mode&&this.applyAOSAttr();return!0}if(o||n)return!n
;0!=Math.min(this.node.width(),this.node.height())&&i.launchTransitionOut(t)
;"no_event"!=e&&i.onDisplayed.then(function(){
dbg.benchmark("onHide "+i.id,function(){i.uiCall("onHide")})})
;return!1},shouldBeAnimated:function(){
return!((v.is_sections_system?this.isInLayout():this.isInPageBackground())||this.getData("full_width")||"fullwidth"==this.getData("ratio_type")||this.option_for("container")||this.option_for("fixed")||this.option_for("footer"))
},shouldBeAnimatedWithAos:function(){
return this.shouldBeAnimated()&&this.data&&this.getData("_cpt_scroll_animated")
},isUnderOffset:function(){
var e=v.getSelectedPage().checkHeight()
;v.is_sections_system||(e+=footer.H());return e-this.Y()<120},
applyAOSAttr:function(){if(this.shouldBeAnimatedWithAos()){
var e=this.componentBody||this.node.find(".componentBody")
;e.attr({
"data-aos":this.getData("data-aos-animType")+("none"==this.getData("data-aos-direction")?"":"-"+this.getData("data-aos-direction")),
"data-aos-duration":this.getData("data-aos-duration"),
"data-aos-delay":this.getData("data-aos-delay"),
"data-aos-once":!this.getData("data-aos-manyTimes")})
;"viewer"==v.mode&&this.isUnderOffset()&&e.attr({
"data-aos-offset":0,"data-aos-anchor-placement":"bottom-bottom"
})}},getTransition:function(){
return!v.force_no_transition&&this.component_type&&"UI_Menu"!=this.component_type.class_name&&!this.A()&&!this.is_fullWidth&&"desktop"==deviceController.device&&Modernizr.cssanimations&&v.page_bg.getTransition()
},reattachComponentBody:function(){
if(this.node&&this.node.get(0)){
this.node.css("margin",'mobile_tree'==deviceController.device?'10px auto':'')
;if(this.componentBodyDetached){
this.componentBody.appendTo(this.node)
;this.componentBodyDetached=!1
}else this.node.get(0).isConnected||this.node.appendTo(this.parent.getContentNodeForDevice())
}},launchTransition:function(e){
var t=this.node,i=this,o=(e=e||!this.shouldBeAnimated())?null:this.getTransition()
;this.reattachComponentBody()
;t.removeClass("up down left right").removeClassMatch(/transition_/).removeClassMatch(/distance_/)
;var n=v.page_bg.getTransition("data");if(n){var s=n.duration
;effective_duration=$.fn.random(s,s+40*s/100)
}else effective_duration=10;t.addClass("transitionLaunched")
;if(o){t.removeClass("visible")
;this.node.data("effective_duration",effective_duration)
;this.setDuration();setTimeout(function(){i.setDuration(!0)
;n.direction&&t.addClass(n.direction)
;n.distance&&t.addClass("distance_"+n.distance)
;t.addClass("transition_"+o)
;t.toggleClass("visible",i.isDisplayed())
;i.option_for("fixed")&&setTimeout(function(){
i.node_position_to_fixed()},effective_duration+150)},10)}else{
this.node.animationDuration="";setTimeout(function(){
t.toggleClass("visible",i.isDisplayed())
;i.option_for("fixed")&&setTimeout(function(){
i.node_position_to_fixed()},150)
;i.option_for("sticky")&&setTimeout(function(){
i.node_position_to_sticky()},150)},e?10:effective_duration)}},
launchTransitionOut:function(e){
var t=this,i=this.node,o=e?null:this.getTransition(),n=function(){
if(t.componentBody){t.componentBody.detach()
;t.componentBodyDetached=!0}}
;i.removeClass("transitionLaunched");if(o){
var s=v.page_bg.getTransition("data"),r=s.duration,a=$.fn.random(r,r+40*r/100)
;this.node.data("effective_duration",a);t.setDuration(!0)
;s.direction&&i.addClass(s.direction)
;s.distance&&i.addClass("distance_"+s.distance)
;i.addClass("transition_"+o);i.addClass("out")
;setTimeout(function(){
i.removeClass('up down left right out').removeClassMatch(/transition_/).removeClassMatch(/distance_/)
;i.toggleClass("visible",t.isDisplayed());n()
},i.data("effective_duration")||800)}else{
i.removeClass("visible");n()}},setDuration:function(e){
if(!this.node||!this.node[0])return this
;if(v.page_bg.getTransition()){var t=e?{
"animation-duration":this.node.data("effective_duration")+"ms",
"-webkit-animation-duration":this.node.data("effective_duration")+"ms"
}:{"animation-duration":"0ms","-webkit-animation-duration":"0ms"
};this.node.css(t)
;e&&setTimeout(()=>{},this.node.data("effective_duration"))
}else this.node[0].style.cssDuration="";return this},
setSize:function(e){this.setXYZWH(e,{send_events:!1})
;v.is_sections_system?this.section.resize():v.checkHeight()
;return this},setAspectRatio:function(e){this.aspectRatio=e},
statusLoading:function(){
var e=new ProgressController(sprintf("Affichage du module %1$s ("+(this.id||"")+")",this.component_type.title.toLowerCase()).capitalize())
;setTimeout(function(){e.progress<100&&e.update(100)},6e4)
;return e},deselect:function(){
dbg.error("deselect called in viewer for cpt "+this.component_type.class_name,this.id)
},setFullWidth:function(e,t){if(this.node.is(":visible")){
t=t||{};var i=this.node,o=$("#device"),n=this
;0==o.length&&(o=$("#body.body"))
;var s=i.find(".componentBody:first"),r=s.css("overflow"),a="editor"==v.mode,l=t.silent!==undefined?t.silent:!!a&&!(!window.blockSelector||!blockSelector.selected_cpts||blockSelector.selected_cpts.include(this))
;t.dont_clear_css_node||s.removeAttr("style")
;s.css("overflow",r);if(this.fullWidth_cb){
$(window).unbind("resize",this.fullWidth_cb)
;a&&sigCtl.disconnect("Site.resized",this.fullWidth_cb)
;sigCtl.disconnect("Version.width",this.fullWidth_cb)
;this.fullWidth_cb=null}if(e){this.fullWidth_cb=function(){
n.setFullWidth(e,{silent:!0,
dont_clear_css_node:t.dont_clear_css_node})}
;a&&this.hasOptions("scroll_animated")&&this.propertyDesignNode&&this.togglePropAnimationOnOff({
hide:!0});if(a){var n=this
;MobileTree.custom_positions.list(this.getPage()).each(function(e){
e&&['left','right'].include(e.side)&&(e.cpt_id==n.getId()||e.from==n.getId())&&MobileTree.custom_positions.remove(n.getPage(),e)
})
;"mobile_tree"!=deviceController.device&&n.alignCpt(n.calcXWFullContainer(),{
no_event:l})}if("static"==i.css("position"))s.css({
width:o.width()});else{
var c="desktop"!=deviceController.device&&a?deviceController.device_size().width:o.width(),d=0,p=0,h=c
;if(0!=this.A()){var u=Math.abs(Math.cos(this.A()));if(1/u<3){
c/=u;var p;d=((c-=p=Math.abs(Math.tan(this.A())*this.H()))-h)/2}
}s.css({position:"absolute",
left:(o.offset()?o.offset().left:0)+o.width()/2-h/2-i.offset().left-d,
right:"auto",width:c+2*p})}
$(window).bind("resize",this.fullWidth_cb)
;a&&sigCtl.connect("Site.resized",this.fullWidth_cb)
;sigCtl.connect("Version.width",this.fullWidth_cb)
}else a&&this.hasOptions("scroll_animated")&&this.propertyDesignNode&&this.togglePropAnimationOnOff({
hide:!1})
;a&&blockSelector.selected_blocks.is(this.node)&&BlocksPositions.toggle_alignOnPage_btns()
;this.is_fullWidth=e}},getId:function(){return this.id},
hasOptions:function(e){
return this.block_options&&$.inArray(e,this.block_options)>-1},
option_for:function(e,t){var i,o=this
;if(this.hasOptions(e))if(t!=undefined){var n=function(){
o.setData("above_fg",!1);o.option_for("container",!1)
;o.option_for("footer",!1);if(o.data.anchorid){
sigCtl.emit("Page.rmAnchor",{pageid:o.getPage().pageid,
anchorid:o.data.anchorid});o.setData("anchorid",!1)
;o.setAnchor()}};historyController.startInGroup()
;var s="toggle"===t?!!this.data["_cpt_"+e]:!!t
;this.data["_cpt_"+e]=!s;this.setData("_cpt_"+e,s);switch(e){
case"fixed":s&&n();this.set_fixed_position();break;case"sticky":
if(s){n();this.node_position_to_sticky()}else{
$("editor"==v.mode?"#site":window).off(`scroll.${this.getId()}`)
;o.node.css({position:"absolute"})
;historyController.offRecords(function(){o.setXYZWH({
y:o.device_coordinates[deviceController.device].y})})}break
;case"container":s&&this.option_for("fixed",!1);break
;case"footer":if(t&&!v.is_sections_system){
this.option_for("fixed",!1);this.option_for("sticky",!1)}}
this.uiCall("onPropertyChanged",[`_cpt_${e}`])
;historyController.stopInGroup()
;blockSelector.on_option_change();i=this
}else i=(!v.is_sections_system||"footer"!=e)&&(this.data&&this.data[`_cpt_${e}`]||!1);else i=!1
;return i},node_position_temporarily_absolute:function(){},
node_position_to_sticky:function(e){
var t=this,i="scroll."+this.getId(),o="editor"==v.mode?$("#site"):$(window)
;o.off(i);var n=function(){
if(t.device_coordinates[deviceController.device]){t.lim_top=0
;$.each(v.getSelectedPage().getCpts().concat(v.page_bg.cpts).filter(function(e){
return e.getId()!=t.getId()&&(e.option_for("sticky")||e.option_for("fixed"))&&e.node.is(":visible")&&e.node.hasClass("visible")
}),function(e,i){
var o=i.device_coordinates[deviceController.device].y,n=t.device_coordinates[deviceController.device].y
;i.option_for("fixed")&&i.data.fixed_position&&(i.lim_top=i.data.fixed_position.top)
;var s=o<=n&&n<o+i.H();if(o<n&&t.lim_top<i.H()+i.lim_top){
t.lim_top=i.H()+i.lim_top;s&&(t.lim_top=i.lim_top+(n-o))}})
;var i=e||o.scrollTop(),n=t.device_coordinates[deviceController.device].y,s=i>0&&n-i<t.lim_top&&i+t.lim_top>n&&"desktop"==deviceController.device
;if(!(!s&&!t.data._cpt_fixed||s&&t.data._cpt_fixed))if(s){
t.data._cpt_fixed=!0;t.data.fixed_position={top:t.lim_top}
;t.node_position_to_fixed(!1,e)}else{t.data._cpt_fixed=!1
;delete t.data.fixed_position;var r=t.calc_absolute();r.y=n
;t.node.css({position:"absolute"})
;historyController.offRecords(function(){t.setXYZWH(r)})}}}
;if(this.option_for("sticky")&&"desktop"==deviceController.device){
e?t.componentBody.is(":visible")&&!t.parent.childrenToDelete.include(t)&&n():o.on(i,$.throttle(150,function(){
!t.parent.childrenToDelete.include(t)&&("UI_Menu"==t.component_type.class_name?menuDataManagement.shouldDisplayOnPage.call(t.ui,v.getSelectedPage()):t.componentBody.is(":visible"))&&n()
}));setTimeout(function(){o.trigger(i)},50)}},
node_position_to_fixed:function(e){
if((!e||"fixed"==this.node.css("position"))&&this.option_for("fixed")){
var t=this,i="editor"==v.mode?$("#site"):$(window)
;if(this.getPage()&&this.getPage()!=v.getSelectedPage()&&(v.is_sections_system||!this.isInPageBackground())||!this.option_for("fixed")||"desktop"!=deviceController.device)return
;var o=Math.max("viewer"==v.mode?$("#pages").offset().left+this.device_coordinates[deviceController.device].x-i.scrollLeft():$("#pages").offset().left+this.device_coordinates[deviceController.device].x,0)
;if(this.data.fixed_position)if(this.data.fixed_position.bottom!=undefined){
var n=this.data.fixed_position.bottom;this.node.css({
position:"fixed",top:"auto",bottom:n+"px",left:o+"px"})}else{
var s=this.data.fixed_position.top+("editor"==v.mode?$("#pages")[0].getBoundingClientRect().top+i.scrollTop():0)
;this.node.css({position:"fixed",top:s+"px",bottom:"auto",
left:o+"px"})}var r=0,a=0
;i.hasScrollBar().vertical&&(r=v.scrollBarSize)
;i.hasScrollBar().horizontal&&(a=v.scrollBarSize)
;var l=this.W(),c=this.H()
;o+l>window.innerWidth-r&&this.node.css("left",window.innerWidth-l-r+"px")
;s+c>window.innerHeight-a&&this.node.css("top",window.innerHeight-c-a+"px")
;i.data("current_scroll_x")||i.data("current_scroll_x",i.scrollLeft())
;if(!this.scroll_event){
this.scroll_event="scroll.cpt"+this.getId()
;this.resize_event="resize.cpt"+this.getId()
;i.on(this.scroll_event,$.throttle(10,function(){
i.data("current_scroll_x")!=i.scrollLeft()&&t.node_position_to_fixed(!0)
;setTimeout(function(){i.data("current_scroll_x",i.scrollLeft())
},10)}));$(window).on(this.resize_event,function(){
t.node_position_to_fixed(!0)})
;if("editor"==v.mode&&!window.mousewheel_on_fixed_cpt_activated){
window.mousewheel_on_fixed_cpt_activated=!0
;$("#site").on("mousewheel",".component",function(e){var t
;$(this).data("cpt").option_for("fixed")&&$("#site").scrollTop($("#site").scrollTop()+(e.originalEvent.deltaY>0?50:-50))
})}}setTimeout(function(){
if((!t.node.isInViewport()||"fixed"!=t.node.css("position"))&&t.fixed_loop_count<100){
t.fixed_loop_count++;t.node_position_to_fixed()
}else t.fixed_loop_count=0},350)}},calc_absolute:function(e){
this.node.css("transform","rotate(0)");var t={
x:this.device_coordinates[deviceController.device].x,
y:this.node[0].getBoundingClientRect().top-$("#pages")[0].getBoundingClientRect().top,
a:this.device_coordinates[deviceController.device].a};return e?{
position:"absolute",left:t.x,top:t.y,
transform:"rotate("+t.a+"rad)"}:t},get_relative_y:function(e){
if(v.is_sections_system)throw new Error("get_relative_y is not available for sections system")
;var t;switch(e=e||"site"){case'site':var i=footer.Y()
;(t=this.option_for("footer")?i+this.prop().y:this.prop().y)<i&&(t=i+this.prop().y)
;break;case'footer':t=this.prop().y;t-=footer.Y()
;t=Math.max(0,t)}return t},
migrateOldGradientProperty:function(){var e=this
;this.data.gradient_colors=this.data.gradient_colors||[this.data.select_Gradient,this.data.gradientColor,this.data.gradientAngle]
;$.each(["select_Gradient","gradientColor","gradientAngle"],function(t,i){
delete e.data[i]})},use_graphical_preset:function(e,t){},
getGTPreset:function(e,t){
if(GraphicalType.available)return GraphicalType.data_or_version_preset(e,this.getData(t))
},load_script:function(e,t,i){
var o=this.component_type.class_name,n="/assets/precompile/"+o.toLocaleLowerCase()+"/",s="localhost"==document.location.hostname?"":$("html").attr("lang")+"-"
;switch(e){case"css":var r=o+"_css_"+t
;if($("head #"+r).length)return
;$("<link>").prependTo($("head")).attr({type:"text/css",
rel:"stylesheet",media:"screen",href:n+t+".css?clearcache=4",
id:r});break;case"js":if($("head #"+i).length)return
;var a,l=document,c="script",d=l.getElementsByTagName(c)[0]
;(a=l.createElement(c)).id=i;a.src=n+s+t+".js?clearcache=4"
;d.parentNode.insertBefore(a,d)}},get_gdpr_service:function(){
if(this.component_type)switch(this.component_type.class_name){
case"UI_Map":return"map_block";case"UI_Video":
return"video_block";case"UI_Developer":
if(this.data.html_code&&""!=this.data.html_code&&/<[iframe|script]/gi.test(this.data.html_code))return"widget_block"
;break;case"UI_Social":return"social_block";case"UI_Calendar":
if(this.data.externalCalendar&&this.data.externalCalendar.length>0)return"calendar_block"
;break;case"UI_Social2":
if("embed"==(this.getData('social_configuration')||{}).type)return"social_block"
}},isInPageBackground:function(){
return!v.is_sections_system&&this.parent==v.page_bg},
isInLayout:function(){
return!!v.is_sections_system&&this.parent.isLayout()}})
;var Version=Class.create()
;Object.extend(Version.prototype,new Model)
;Object.extend(Version.prototype,{initialize:function(e,t){
this.mode="viewer";site.mode=this.mode;this.type="Version"
;this.dev_base_path=''
;if('localhost'==location.host||'www.sitew.com'==location.host){
var i=location.pathname.match(/^\/site\/(?:view_by_site_id|view_template)\/\d+/)
;i&&(this.dev_base_path=i[0])}this.id=e
;this.device_modes=t.attributes.device_modes
;this.site_package=t.attributes.site_package
;this.features=t.attributes.features
;deviceController=new DeviceController(this)
;this.pages_fg=new Array;this.presets=new Array
;this.headers=new Array;this.footers=new Array
;this.getCallback(t);var o=this
;this.configurations=this.configurations||{}
;0==this.pages_fg.length&&dbg.error('Viewer with no pages_fg cache should be cleared',this.site_id)
;this.pages_fg.sort(function(e,t){return e.order-t.order})
;this.ignore_scroll_event=!1
;this.scrollBarSize=$.fn.getScrollbarWidth()
;this.is_sections_system&&$(window).resize(function(){
o.checkWidth()});sigCtl.connect("Page.shown",function(e,t){
sigCtl.getVariable("PageBg.shown",function(){
"page_bg"!=t.getClass()&&o.checkWidth()})})
;sigCtl.getVariable("PageBg.shown",function(){
$(window).resize(function(){o.checkWidth()});o.applyPreset()})
;this.initFont()
;window.in_eu&&CookiesBanner.initialize(t.attributes.cookies_config)
;member_gdpr=$.extend({},componentGdpr)
;sigCtl.connect("Member.popups_loaded",function(){
member_gdpr.initGdpr("UI_Member",$('#ui18_connection_forms'),$('#ui18_connection_forms').find('.component_gdpr_container'))
});sigCtl.connect("GraphicalType.ready",function(){
GraphicalType.available&&GraphicalType.graphical_types.link.addCpt(this,null)
})},selectHome:function(){if(!this.is_sections_system){
this.page_bg.show();this.footer_ready=$.Deferred()}},
initFont:function(){
var e=this,t=["Source Sans Pro",this.font.title.family,this.font.text.family,this.font.menu.family,this.font.action.family,Object.keys(this.font.list||[]).map(function(t){
return e.font.list[t]})].flatten().filter(function(e){return e
}),i;Apis.webfont(function(){WebFont.load({google:{
families:$.map(t,function(e){
return e+":300,300i,400,400i,700,700i"})},
fontactive:function(e,t){clearTimeout(i)
;i=setTimeout(function(){sigCtl.emit("Site.FontFamily")},50)},
fontinactive:function(e,t){console.warn("fontinactive",e)}})})},
setTitle:function(e){
$.bot||(document.title=("localhost"==location.host?"\ud83c\udfe0":"")+e.getTitle())
},getIdFromUrl:function(e){
var t=e.match(/^\/[^.]*\.(\w+)((\/.+)|\.htm)(#(.*))?$/)
;if(t)return[t[1],t[3],""!=t[5]?t[5]:null];if(site.clean_urls){
var i=undefined,o=e.replace(/\/?(?:[^\/]*)([^]*)/,function(){
i=arguments[1];return arguments[0].replace(arguments[1],'')
}),n=this.pages_fg.find(function(e){
return e.getUrl(!0).replace(location.search,'')==o})
;return n?i?[n.pageid,i]:[n.pageid]:undefined}return null},
getIdFromHash:function(){
var e=document.location.hash.match(/^\#[-\w]*\.(\w+)((\/.+))?$/)
;return e?[e[1],e[3]]:null},getIdFromBBIframe:function(){try{
var e=window.frames.back_button.document.body.innerHTML.match(/^.+\.([^\/]+)(\/.+)?$/)
;return[e[1],e[2]]}catch(t){return null}},
detectUrlChange:function(){
var e=$.Deferred().resolve(),t=this.dev_base_path?location.pathname.substr(this.dev_base_path.length)||'/':location.pathname,i=t+("#"==location.hash?"":location.hash)
;if(decodeURI(i)!=(this.pathname||"not_set").replace(/\?.*/,"")){
if(this.disableDetectUrl)return;var o=this
;this.disableDetectUrl=!0;var o=this;this.replaceUrl=!0
;var n=null,s=null,e=null;if(location.hash.length>1){
url=this.getIdFromHash();url&&(n=this.getPageFromId(url[0]))
;if(n){this.replaceUrl=!0;e=this.selectPageFromUrl(url)
}else s=location.hash.substr(1)}if(!e){
url="/"==t?this.pages_fg[0].pageid:this.getIdFromUrl(t)
;if(url)e=s?this.selectAnchor(url,decodeURI(s)):this.selectPageFromUrl(url);else{
this.pathname=null;e=this.error404("url_not_detected",s,i)}}
e.done(function(){o.replaceUrl=!1;o.disableDetectUrl=!1})}
return e},selectPageFromUrl:function(e,t){
"string"==typeof e&&(e=[e]);var i;if($.cookie("error404")){
this.error404("error404_cookie_set")
;return $.Deferred().reject()}page=this.getPageFromId(e[0])
;if(page)if(t&&"_blank"==t.target)window.open(page.getUrl());else{
page.anchorUrl=e[2];if(page!=this.selectedPageFg){
page.cptUrl=e[1];i=this.selectPageFg(page)}else{
page.setCptUrl(e[1]);i=$.Deferred().resolve(page)}}else{
if(this.sent_404)return $.Deferred().reject();this.sent_404=!0
;var o=this;i=$.ajax({cache:!1,dataType:"json",simple_ajax:!0,
url:document.location.href.replace(document.location.pathname+"#","/")+".htm",
error:function(e){o.error404("server_ask_failed");o.sent_404=!1}
}).then(function(e){var t
;if(e.url)t=o.selectPageFromUrl(e.url);else{
o.error404("server_ask_not_found");t=$.Deferred().reject()}
o.sent_404=!1;return t})}return i},order_links:function(e){
var t=this,i=[];$.each(v.pages_fg,function(t,o){
var n=$.grep(e,function(e){
return o.pageid==e.pageid&&!e.anchorid});n.length&&i.push(n[0])
;var s=$.grep(e,function(e){
return o.pageid==e.pageid&&e.anchorid});$.merge(i,s)})
;var o=$.grep(e,function(e){
return"page_bg"==e.pageid&&e.anchorid});$.merge(i,o);var n=[]
;i.forEach(function(e){
var t="page_bg"==e.pageid?v.page_bg:v.getPageFromId(e.pageid)
;!t||!v.draft&&"page_bg"!=e.pageid&&t.isDraft()||n.push($.extend({},e,{
page:t}))});return n},cptsInView:function(e,t){
var i=[],o=$.merge([],v.page_bg.getVisibleCpts())
;$.merge(o,v.selectedPageFg.getVisibleCpts())
;(o=o.filter(function(e){return e.node})).sort(function(e,t){
return e.Y()-t.Y()});t&&(o=o.filter(function(e){
return e.data&&e.data.anchorid}));o.each(function(t){
var o=t.Y(),n=o+t.H(),s=$(window).scrollTop(),r
;o<s+$(window).height()&&(e?i.push(t):n>s&&i.push(t))});return i
},anchorsInView:function(e){return this.cptsInView(e,!0)},
lastAnchorInView:function(){
if(0==$(window).scrollTop())return'top'
;var e=this.anchorsInView(!0),t=$(window).scrollTop()+$(window).height()==$('body').height(),i=$(window).scrollTop()+(t?4:3)*($(window).height()/4),o=[]
;e.each(function(e){e.Y()<i&&o.push(e)});return o[o.length-1]},
alignCpts:function(e){var t=[]
;v.selectedPageFg.getCpts().each(function(i){
e.Y()==i.Y()&&e!=i&&t.push(i)});return t},
selectAnchor:function(e,t){var i=$.Deferred(),o=this
;if(v.is_sections_system){
var n=v.getSelectedPage(),s=v.getPageFromId(e);if(s){var r=()=>{
var e=s.sections.find(e=>e.data.name==t)
;e&&e.onDisplayed.then(()=>{this.scroll_to_section(e)})}
;n.pageid!=e?this.selectPageFromUrl(e).then(()=>{
sigCtl.connectOnce("Version.checkHeight",r)}):r()}
}else if("page_bg"==e)v.page_bg.getCpts().each(function(e){
if(e.data.anchorid==t){o.scroll_to_component(e)
;v.page_bg.anchorUrl=t;v.replaceUrl=!1
;v.setPathname(v.selectedPageFg);i.resolve()}});else{
var a=v.selectedPageFg
;this.selectPageFromUrl(e).done(function(){var n=function(){
v.selectedPageFg.getCpts().each(function(e){
if(t==e.data.anchorid){o.scroll_to_component(e)
;v.selectedPageFg==a&&(v.replaceUrl=!1)
;v.setPathname(v.selectedPageFg);i.resolve()}})}
;a&&a.pageid==e?n():sigCtl.connectOnce("Version.checkHeight",function(){
n()})})}return i},selectArticle:function(e,t,i){var o
;if('_blank'==(("string"==typeof i?JSON_.parse(i):i)||{}).target){
var n='/'+this.getPageFromId(e).getHash(!1,'/b'+t+'a')
;window.open(n)
}else this.selectPageFromUrl([e,"/b"+t+"a/"]).done(function(){
v.selectedPageFg.getCpts().each(function(e){
e.onDisplayed.then(function(){
if(e.component_type&&"UI_Blog"==e.component_type.class_name){
v.selectedPageFg.setCptUrl("/b"+t+"a/");e.ui.selectArticle(t)}})
})})},selectProduct:function(e,t,i){
var o=("string"==typeof i?JSON_.parse(i):i)||{},n="";if(o){
$.each(o,function(e,t){"target"!=e&&(n+=e+t)})
;if("_blank"==o.target){
var s="/"+this.getPageFromId(e).getHash(!1,"/s"+t+"p"+n+"/")
;window.open(s);return}}
this.selectPageFromUrl([e,"/s"+t+"p"+n+"/"]).done(function(){
v.selectedPageFg.getVisibleCpts().each(function(e){
e.onDisplayed.then(function(){
"UI_Store"==e.component_type.class_name&&e.ui.selectProd(t)})})
})},selectCategory:function(e,t,i){var o
;if('_blank'==(("string"==typeof i?JSON_.parse(i):i)||{}).target){
var n='/'+this.getPageFromId(e).getHash(!1,'/s'+(t||0)+'c')
;window.open(n)}else v.selectPageFromUrl(e).done(function(){
var e=v.getSelectedPage();e.getVisibleCpts().each(function(i){
$.when(i.ui.next_show).then(function(){setTimeout(function(){
switch(i.component_type.class_name){case"UI_Blog":
e.setCptUrl('/b'+(t||0)+'c/');break;case"UI_Store":
e.setCptUrl('/s'+(t||0)+'c/')}},1e3)})})})},
showDocument:function(e,t){window.open(e)},
getScrollOffset:function(e){
var t=window.outerHeight,i=e.W(),o=e.H(),n=e.Y(),s=$.extend([],v.page_bg.getCpts().find_all(function(e){
return e.option_for('fixed')||e.option_for('sticky')})||[])
;$.merge(s,v.selectedPageFg.getCpts().find_all(function(e){
return e.option_for('fixed')||e.option_for('sticky')})||[])
;s=s.find_all(function(t){
var i=(t.device_coordinates[deviceController.device]||{x:0}).x
;return i<e.X()+e.W()&&i+t.W()>e.X()});var r=[],a=0
;s.each(function(s){var a=s.Y()
;if((s.getPage()==v.page_bg||s.Z()>e.Z())&&s.V()&&(s.data.fixed_position?!(s.data.fixed_position.bottom<window.innerHeight/2):s.option_for('sticky')||s.Z()>e.Z())&&a<n){
var l=s.H(),c=s.is_fullWidth,d=e.is_fullWidth,p=$.extend([],{
top:0,height:n+o,width:i,left:e.componentBody.offset().left
}),h=$.extend([],s.componentBody.offset(),{height:l,width:s.W()
})
;(c||d||$.intersect(p,h))&&h.top+h.height<t/2&&r.push([s,(s.data.fixed_position&&s.data.fixed_position.top!=undefined?s.data.fixed_position.top:a)+l])
}});r.each(function(e){
e[1]>a&&!e[0].option_for('sticky')&&(a=e[1])});var l=[]
;if((l=s.find_all(function(t){
return t.option_for("sticky")&&(t.getPage()==v.page_bg||t.getPage()==e.getPage())
})).length){var c=$.extend([],l);l.each(function(e){
e.node_position_to_sticky(n)});if((l=(l=l.find_all(function(e){
return e.data.fixed_position&&(0==e.data.fixed_position.top||e.data.fixed_position.top)&&e.componentBody.is(":visible")&&e.Y()+e.H()>a
})).sort(function(e,t){
return t.data.fixed_position.top+t.H()-(e.data.fixed_position.top+e.H())
})).length){var d=null,p=null;l.each(function(e){
var t=e.Y(),i=t+e.H();(null==d||d>t)&&(d=t)
;(null==p||p<i)&&(p=i)});a+=(p||0)-(d||0)}c.each(function(e){
e.node_position_to_sticky()});$("html,body").trigger("scroll")}
return a},scroll_to_component:function(e,t){t=t||{}
;this.ignore_scroll_event=!0;var i=this,o=0,n=0
;if(deviceController.device.match(/mobile/))n=$('#mobile_bar').height();else if("desktop"==deviceController.device){
var s=this.alignCpts(e);s.push(e);s.each(function(e){
var t=i.getScrollOffset(e);o<t&&(o=t)})}$("html,body").animate({
scrollTop:e.componentBody.offset().top-o-n
},t.fast?0:'slow',function(){setTimeout(function(){
i.ignore_scroll_event=!1;$('html,body').trigger("scroll")},100)
})},scroll_to_section:function(e,t){t=t||{}
;this.ignore_scroll_event=!0
;var i=e.getNodeForDevice().offset().top-PageMarginTop.max()
;$("html, body").animate({scrollTop:i},t.fast?0:'slow',()=>{
setTimeout(()=>{this.ignore_scroll_event=!1
;$('html, body').trigger("scroll")},100)})},
scroll_to_top:function(){$("html,body").animate({scrollTop:0
},'slow')},error404:function(e){
console.log("Error 404",e,location.pathname,location.anchor)
;this.setPathname(this.pages_fg[0])
;var t=this.selectPageFg(this.pages_fg[0])
;$.cookie("error404",null)
;alert("La page n'existe pas. Vous êtes redirigé sur la page d'accueil.")
;return t},partialDisplay:function(e,t,i){var o=i&&i[t]
;o&&o.detachFromDOM();e[t]&&e[t].display()},
layoutDisplay:function(e,t){if(this.is_sections_system){
this.partialDisplay(e,"header",t)
;this.partialDisplay(e,"footer",t)}},
getPartialById:function(e,t){
return this[e.pluralize()].find(function(e){return e.getId()==t
})},showing_page:function(e){$('#TB_window').unbind("unload")
;tb_remove();this.setPathname(e);var t=this.selectedPageFg
;t&&t.hide();$(window).scrollTop(0);this.selectedPageFg=e
;shown=e.show();this.layoutDisplay(e,t)
;sigCtl.emit("Version.selectPageFg",e);e.setForeground()
;e.setBackground();return shown.then(function(){e.updateFooter()
;v.checkHeight()
;document.dispatchEvent(new Event("DOMContentLoaded"))
;sigCtl.emit("Version.pageShown",e)
;v.is_sections_system&&sigCtl.emitVariable("PageBg.shown")
;return $.Deferred().resolve(e)})},selectPageFg:function(e){
if(e!=this.selectedPageFg){var t=this
;if(e.order>this.max_pages-1||'function'==typeof e.isDraft&&e.isDraft()&&!v.draft){
e.order>this.max_pages-1?this.error404("page_exceed_max_pages_of_package"):this.error404("page_is_draft")
;return $.Deferred().reject()}
if(e!=this.selectedPageFg&&this.selectedPageFg){
var i=e.maxDuration();if(i){if(t.timeout_change_page){
console.log("Page change Canceled because a transition is in progress")
;return $.Deferred().reject()}var o=this.showing_page(e)
;t.timeout_change_page=setTimeout(function(){
t.timeout_change_page=null},i);return o}
return this.showing_page(e)}return this.showing_page(e)}},
setPathname:function(e,t){var i=e.getUrl(),o=e.anchorUrl
;e.anchorUrl=null;this.setTitle(e);if(this.pathname!=i){
console.log("setPathname:",e.cptUrl,o,this.pathname,"to",i)
;sigCtl.emit("Version.urlChanged",e)
;if(this.replaceUrl||this.pathname&&"/"!=this.pathname&&-1==i.indexOf("#")&&-1!=i.indexOf(this.pathname.replace(".htm",""))){
console.log("replacing state")
;history.replaceState(null,"",this.dev_base_path+i)}else{
console.log("pushing state ")
;history.pushState(null,"",this.dev_base_path+i)}
this.replaceUrl=!1;this.pathname=i;if(!t){
MemberController.onHashChange(e)
;for(var n=e.getCpts().length-1;n>=0;n--)e.getCpts()[n].uiCall("onHashChange")
}}},getSelectedPage:function(){return this.selectedPageFg},
getPageFromId:function(e){
return e?this.pages_fg.find(function(t){return t.pageid==e
}):this.page_bg},getPageFromUrl:function(e){
var t=this.getIdFromUrl(e)
;return t?this.getPageFromId(t[0]):null},
getBackgroundCptParent:function(){
return this.is_sections_system?this.page_bg.sections[0]:this.page_bg
},windowHeight:function(){
return $(window).outerHeight()-$("#vw_footer_holder").height()},
calcHeight:function(){
return Math.max(this.page_bg.checkHeight(),this.selectedPageFg?this.selectedPageFg.checkHeight():0)
},checkHeight:function(){
if(this.is_sections_system&&!this.preloaded_height_css_cleared){
this.preloaded_height_css_cleared=!0
;$(".preloaded_sections_height_css").remove()}
Misc.deferred_method(this,this._checkHeight,200)},
_checkHeight:function(){var e=this.windowHeight(),t
;if("mobile_tree"==deviceController.device){t=0
;if(v.is_sections_system)t=$("#sections_mobile").height();else{
var i=$("#mobile_wrapper").find(">div:not(#mobile_bar):visible:last")
;i.length&&(t=i.offset().top+parseInt(i.css("padding-top"))+i.outerHeight()-PageMarginTop.max()-Cpt.offset_top)
}t=Math.max(t,e)
}else if(!v.is_sections_system&&footer.active()){
footer.set_height()
;t=Math.max(this.calcHeight()+footer.H()+footer.page_for_blocks().footer.margin_top,e)
}else{t=Math.max(this.page_bg.checkHeight(),e)
;this.selectedPageFg&&(t=Math.max(t,this.selectedPageFg.checkHeight()))
}
var o=$("#vw_footer_holder"),n=o.get(0)&&$.trim(o.get(0).innerText).length>0
;o.toggle(n);t+=n&&o.height()||0;t=Math.round(t)
;this.page_bg.setHeight(t);this.checkWidth()
;sigCtl.emit("Version.checkHeight")},checkWidth:function(e){
var t=this;try{
var i=e?0:this._page_bg_width=this._page_bg_width?this._page_bg_width:this.page_bg.checkWidth()
;!e&&this.selectedPageFg&&(i=Math.max(i,this.selectedPageFg.checkWidth()))
;var o=Math.floor($(window).width()/2),n=i,i=Math.max(o,i),s=Math.min(2*i,4e3),r=$("#body.body")
;this.is_sections_system&&(r=r.add($('#sections')));r.width(s)
;this.width!=s&&sigCtl.emit("Version.width",s);this.width=s
;$("#vw_footer_holder:not(.outer)").length>0&&$("#vw_footer_holder").width(s).css({
left:-$("#pages").offset().left,
bottom:$("#site_content").height()-$("body").height()})
;$("#vw_footer_holder").css("visibility","visible")
;var a=Math.max(deviceController.min_viewport,2*n)
;a+=mobileBar.current_width;var l=deviceDetector.w,c=l
;l>1.3*a?c=1.3*a:l<a&&(a<deviceController.device_size("desktop").width?c=a:l<deviceController.device_size("desktop").width&&(c=deviceController.device_size("desktop").width))
;$("#viewport").attr("content","width="+(c==l||"desktop"==deviceController.device?"device-width":c)+",initial-scale="+sprintf("%1.1f","desktop"==deviceDetector.real_device&&"desktop"==deviceController.device?1:l/c))
;t.horizontalScroll()}catch(d){setTimeout(function(){
t.checkWidth()},150)}},horizontalScroll:function(){
$(window).scrollLeft(($(document).width()-$(window).width())/2)
},setHasChanged:function(){dbg.error("setHasChanged in viewer")
},applyPreset:function(){if(GraphicalType.available){
var e=GraphicalType.data_or_version_preset("link"),t=GraphicalType.graphical_types.link
;$('#body').removeClassMatch(new RegExp(t.preset_data.prefix))
;e&&$('#body').addClass(t.preset_data.prefix+' '+t.preset_data.prefix+"_"+e)
}}});var MobileBar=Class.create()
;MobileBar.link_action=function(conf){
var href=conf.href||(conf.link?conf.link.href:null)
;if("editor"==v.mode)if("link_tel"==conf.type||"link_email"==conf.type)statusController.message("Cette action fonctionnera sur le site publié","success");else if("link_geo"==conf.type)if(href){
var h=href.split("|"),l="name"==h[0]?"https://maps.google.com/maps?daddr="+h[2]:h[2]
;statusController.message("Cette action fonctionnera sur le site publié<br/><a href='"+l+"' target='_blank'>Tester le lien</a>","success")
}else statusController.message("Merci de configurer ce bouton","success");else conf.link&&""!=(conf.link.onClick||"")?eval("(function(){"+conf.link.onClick+"})()"):href?window.open(href,"_blank"):statusController.message("Merci de configurer ce bouton","success");else conf.link&&""!=(conf.link.onClick||"")?eval("(function(){"+conf.link.onClick+"})()"):href&&("link_geo"==conf.type?window.open("name"==href.split("|")[0]?(navigator.platform&&-1!=navigator.platform.indexOf("iPhone")||-1!=navigator.platform.indexOf("iPod")||-1!=navigator.platform.indexOf("iPad")?"maps://maps.google.com/maps?daddr=":"https://maps.google.com/maps?daddr=")+href.split("|")[2]:href.split("|")[2]):location.href=({
link_tel:"tel:",link_email:"mailto:"}[conf.type]||"")+href)}
;MobileBar.link_valid_conf=function(e){var t
;return""!=(e.href||(e.link?e.link.href:null)||"")}
;MobileBar.button_types={image:{title:"Image",
help:"Ajoute une petite image ou un logo pour personnaliser la barre mobile.",
image:{id:1889,name:"camera",service:"Iconoir",removable:!1,
tags:"camera photos and videos",api:"icon"},action:function(e){
e.link&&MobileBar.link_action.call(this,e)}},space:{
title:"Espacement",
help:"Permet de séparer les boutons.",image:{id:7618,
name:"square-dashed",service:"Iconoir",removable:!1,
tags:"square dashed other selection",api:"icon"}},link_page:{
title:"Lien",
help:"Ajoute un lien vers une page spécifique, un site, un document ou une image.",
image:{id:1867,name:"link",service:"Iconoir",removable:!1,
tags:"link other",api:"icon"},action:MobileBar.link_action,
valid_conf:MobileBar.link_valid_conf},link_tel:{
title:"Appel",
help:"Redirige le visiteur vers l'application d'appel téléphonique avec votre numéro de téléphone pré-enregistré.",
image:{id:1395,name:"phone",service:"Iconoir",removable:!1,
tags:"phone communication",api:"icon"},
action:MobileBar.link_action,
valid_conf:MobileBar.link_valid_conf,default_conf:function(){
return{href:(site.phone||"").replace(".","")}}},link_email:{
title:"Contact",
help:"Redirige le visiteur vers l'application email permettant de vous contacter.",
image:{id:1385,name:"message-text",service:"Iconoir",
removable:!1,tags:"message text communication",api:"icon"},
action:MobileBar.link_action,
valid_conf:MobileBar.link_valid_conf,default_conf:function(){
return{href:site.email}}},link_geo:{title:"Adresse",
help:"Ouvre l'application carte pour obtenir un itinéraire vers votre adresse.",
image:{id:1758,name:"pin-alt",service:"Iconoir",removable:!1,
tags:"pin-alt maps",api:"icon"},action:MobileBar.link_action,
valid_conf:MobileBar.link_valid_conf,default_conf:function(){
return{
href:"url|Paris, France|https://maps.google.com/?q=Paris,+France&ftid=0x47e66e1f06e2b70f:0x40b82c3688c9460"
}}},cart:{title:"Panier",
help:"Permet d'accéder directement au panier d'achat.",
image:{id:1952,name:"cart",service:"Iconoir",removable:!1,
tags:"cart shopping",api:"icon"},action:function(){
Page.gotoCart()}},member_space:{
title:"Espace membre/client",
help:"Permet à un visiteur de se connecter/déconnecter et d'accéder à son espace membre/client.",
image:{id:2068,name:"profile-circled",service:"Iconoir",
removable:!1,tags:"profile-circled users",api:"icon"},
action:function(){
MemberController.isConnected()?MemberController.member_space():MemberController.tb_show("signin")
}},menu:{title:"Menu",
help:"Permet l'accès à certaines pages de votre site.",
image:{id:1193,name:"menu",service:"Iconoir",removable:!1,
tags:"menu actions",api:"icon"},action:function(conf){
var set_icon=function(e){
if(e)$("#mobile_bar_top .menu.actionable .mb_img").empty().css("background-image","").setIcon({
id:1177,name:"cancel",service:"Iconoir",removable:!1,
tags:"cancel actions",api:"icon"});else{
var t=mobileBar.menuConf().image,i=$("#mobile_bar_top .menu.actionable .mb_img").empty().css("background-image","")
;t&&"icon"==t.api?i.setIcon(t&&-1!=t.id?t:MobileBar.button_types.menu.image):i.css("background-image","url("+cdn_url(bestImgSrc(t,20,20))+")")
}
},conf=conf||{},shoud_close=conf.keep_state?0==$("#mobile_bar_menu").length:$("#mobile_bar_menu").length>0
;if(shoud_close){set_icon();$("#mobile_bar_menu").remove()}else{
$("#mobile_bar_menu").remove();set_icon(!0)
;var self=this,mbl=$("<ul class='mobile_bar_list l_0'>"),current_level=0,current_list=mbl,mobile_bar_menu=$("<div id=mobile_bar_menu>").appendTo(self.body_node)
;mobile_bar_menu.append(mbl)
;mobile_bar_menu.on("click",".mobile_bar_button",function(){
var e=$(this).data("page"),t=$(this).data("anchorid")
;if(conf.label_nav&&$(this).closest("li").next().is("ul"));else{
$("#mobile_bar_menu").remove();set_icon()
;t?v.selectAnchor(e.pageid?e.pageid:"page_bg",t):e!=v.selectedPageFg?v.selectPageFg(e):v.scroll_to_top()
}});function getButton(e,t){var i=''
;i=t?t.replace(/&#39;/g,"'"):e.name
;var o=$("<li class='mobile_bar_button"+(e==v.selectedPageFg?" selected":"")+" "+(t?"mobile_bar_anchor":"")+"'>").text(i).data({
page:e,anchorid:t});if(e.draft&&!t&&"editor"==v.mode){
var n=$('<span class="fonticon icon_helper helpEditor iconDraft mobileMenuDraft">')
;n.html($.fn.fonticon("eye_blocked2"))
;n.attr('help',"Cette page est dépubliée. Ce lien ne sera pas visible sur la version en ligne de votre site.")
;o.prepend(n)}return o}
var _buttons=mobileBar.component_interface.getData("buttons"),_data=mobileBar.menuConf()||{}
;_buttons.each(function(e){
"menu"==e.type&&v.order_links(e.links).each(function(e){
if(mobileBar.component_interface.ui.shouldListAnchor(e,_data)||mobileBar.component_interface.ui.shouldListPage(e,_data)){
var t=v.getPageFromId(e.pageid)
;if(t&&!(t.seo&&t.seo.lang&&"multi"!=(t.seo.lang||"multi")&&v.selectedPageFg&&v.selectedPageFg.seo&&t.seo.lang!=v.selectedPageFg.seo.lang&&"multi"!=(v.selectedPageFg.seo.lang||"multi"))){
var i=0;e.anchorid&&(i=1)
;for(var o=current_level;o>t.level+i;o--)current_list=current_list.parent()
;if(current_level<t.level+i){current_level++
;current_list=$('<ul>').appendTo(current_list)
}else current_level=t.level+i
;current_list.append(getButton(t,e.anchorid))}}})})
;if($("#loading_sitew").length>0){var ad=$("<li>").appendTo(mbl)
;ad.append($("#loading_sitew").clone())}var scrollToSelected=0
;$("#mobile_bar_menu .selected").length&&(scrollToSelected=Math.max(0,$("#mobile_bar_menu .selected").offset().top-$("#mobile_bar_menu").offset().top-$("#mobile_bar_menu").height()/2))
;var $menu=$("#mobile_bar_menu"),menu_mode=mobileBar.component_interface.getData('menu_mode'),_fullscreen="fullscreen"==menu_mode||menu_mode==undefined,_css={
height:"",width:"",left:"",maxHeight:420}
;if("landscape-primary"==deviceDetector.orientation){
var _width=_fullscreen?("editor"==v.mode?deviceController.device_size().width:$(window).width())-mobileBar.node.width():""
;_css.width=_width;_css.left="number"==typeof _width?-_width:""
;_css.height=_fullscreen?"editor"==v.mode?deviceController.device_size().height:$(window).height():""
}else{
_css.height=_fullscreen?"calc(100vh - "+mobileBar.node.height()+"px"+("editor"==v.mode?" - "+$("#header.editor_interface").height()+"px":"")+")":""
;_css.maxHeight=_fullscreen?"":420}
$menu.css(_css).scrollTop(scrollToSelected)
;var menu_color=mobileBar.component_interface.getData("menu_color")
;menu_color&&("object"==typeof menu_color[0]?$menu.setBackgroundGradient(menu_color[0][1],menu_color[0][0],menu_color[0][2]):$menu.css("backgroundColor",/get_color/.test(menu_color)?eval(menu_color):menu_color))
;var menu_text_colors=mobileBar.component_interface.getData("menu_text_colors")
;$("#mobile_bar_css").remove();if(menu_text_colors){
var css="#mobile_bar .mobile_bar_button{color: "+(/get_color/.test(menu_text_colors[0])?eval(menu_text_colors[0]):menu_text_colors[0])+"!important}"
;css+="#mobile_bar .mobile_bar_button.selected{color: "+(/get_color/.test(menu_text_colors[1])?eval(menu_text_colors[1]):menu_text_colors[1])+"!important}"
;$("head").append("<style id='mobile_bar_css'>"+css+"</style>")}
}}}};MobileBar.height=50;MobileBar.prototype={
initialize:function(){
"editor"==v.mode&&$.extend(this.component_interface,MobileBar.component_interface_editor)
;var e=this
;this.node=$("<div id=mobile_bar class='component page_background disable_drag body'><div class=componentBody>")
;"viewer"==v.mode&&this.node.hide()
;this.node.appendTo($("editor"==v.mode?"#pages":"body"))
;this.body_node=this.node.children()
;this.node.find(".componentBody").append($('<div id="mobile_bar_top"><div class="up"></div><div class="down"></div></div>'))
;this.component_interface.page=v.page_bg;try{
this.component_interface.data.links=v.mobile_bar&&v.mobile_bar.buttons?this.menuConf().links:[]
}catch(t){this.component_interface.data.links=[]}
this.component_interface.ui.component=this.component_interface
;$.extend(this.component_interface.ui,menuDataManagement)
;this.component_interface.node=this.node
;this.component_interface.node.data("cpt",this.component_interface)
;this.current_width=0;this.page_margin_top=PageMarginTop.add()
;sigCtl.connect("Version.rmPage",function(){
var t=v.mobile_bar.buttons.find(function(e){return"menu"==e.type
});t&&e.component_interface.ui.cleanupLinks(t.links)})
;sigCtl.connect("Page.rmAnchor",function(t,i){
i.anchorid&&e.component_interface.ui.removeLink(i,{
links:e.component_interface.getData('links')})})
;sigCtl.connect("Menu.rnAnchor",function(t,i,o,n){
e.component_interface.ui.renameLink(i,o,n,{
links:e.component_interface.getData('links')})})
;sigCtl.connect("Page.draftChanged",function(t,i){
$("#mobile_bar_menu").length>0&&MobileBar.button_types.menu.action.call(e,{
keep_state:!0})})
;"editor"==v.mode&&sigCtl.connect("DeviceEditor.deviceChanged",function(){
blockSelector.selected_cpts[0]&&"MobilBar"==blockSelector.selected_cpts[0].component_type.class_name&&blockSelector.deselect()
})},menuConf:function(){
return this.component_interface.getData("buttons").find(function(e){
return"menu"==e.type})||{}},height:function(){
return v.mobile_bar&&v.mobile_bar.height||MobileBar.height},
updateDisplay:function(e){
var e=e||{},t=this,i="mobile"==deviceController.device.substr(0,6)&&"mobile_auto"!=deviceController.device&&0!=this.component_interface.getData("enabled"),o=e.force_height||this.height()
;"editor"==v.mode?this.node.toggleClass("visible",i):this.node.toggle(i)
;this.page_margin_top.update(i&&"landscape-primary"!=deviceDetector.orientation?o:0)
;if("landscape-primary"==deviceDetector.orientation){
this.node.addClass("horizontal");this.node.width(o).css({
height:"100%",
left:"editor"==v.mode?deviceController.device_size().width/2:"auto",
right:0})}else{this.node.removeClass("horizontal")
;this.node.height(o).css({width:"",left:0,right:"",
transform:"editor"==v.mode?"translateX(-50%)":""})}
$("#site").off("scroll.mobilebar")
;i&&"editor"==v.mode&&$("#site").on("scroll.mobilebar",function(){
t.node.css({
top:$("#site").scrollTop()-("mobile"!=deviceController.device&&"mobile_tree"!=deviceController.device||"landscape-primary"==deviceDetector.orientation?0:e.force_height||t.height())
})
;blockSelector.selected_cpts[0]==mobileBar.component_interface&&blockSelector.node.css({
top:t.node.offset().top-$("#site_tools").offset().top,
left:t.node.offset().left-$("#site_tools").offset().left})
}).trigger("scroll.mobilebar")
;$(window).off("resize.mobile_bar");if(i&&v.mobile_bar){
t.current_width="landscape-primary"==deviceDetector.orientation?mobileBar.height():0
;$("#pages").css({
left:"editor"==v.mode?"50%":"calc(50% - "+t.current_width/2+"px)"
});var n=deviceDetector.orientation
;$(window).on("resize.mobile_bar",function(){
n!=deviceDetector.orientation&&t.updateDisplay()})
;this.body_node.find(".up, .down").empty()
;mobileBar.component_interface.getData("buttons").each(function(e){
if(e){
var i=MobileBar.button_types[e.type].valid_conf||function(){
return!0}
;if((e.device==deviceController.device.substr(0,6)||"all"==e.device)&&("editor"==v.mode||v.features.mobile_bar_extra_buttons||-1==MobileBarExtraButtons.indexOf(e.type))&&("editor"==v.mode||i(e))){
var o=-1==e.image.id?MobileBar.button_types[e.type].image:e.image,n=$("<div class='mb_img'>")
;"icon"==o.api?n.setIcon(o):n.css({
"background-image":"url("+cdn_url(bestImgSrc(e.image,20,20))+")"
})
;var s=$("<div>").addClass(e.type).append(n).appendTo(t.body_node.find("."+e.css_class))
;MobileBar.button_types[e.type].action&&("image"!=e.type||e.link&&e.link.href)&&s.addClass("actionable").on("click",function(){
MobileBar.button_types[e.type].action.call(t,e)})}}})
;this.updateDisplayHeight(e);this.updateDisplayColors()
;this.updateDisplayShadow()
;this.node.find('.ov_block').length||$('<div class="ov_block"><div class="tl"></div><div class="tr"></div><div class="bl"></div><div class="br"></div></div>').appendTo(this.node)
;"landscape-primary"==deviceDetector.orientation&&($(".up:last",t.node).length>0?$("<div class=separator>").insertAfter($(".up:last",t.node)):$(".down:first",t.node).length>0&&$("<div class=separator>").insertBefore($(".down:first",t.node)))
}},updateDisplayColors:function(){
var bar_colors=this.component_interface.getData("bar_colors")
;if(bar_colors){var $bar=$("#mobile_bar")
;"object"==typeof bar_colors[0]?$bar.setBackgroundGradient(bar_colors[0][1],bar_colors[0][0],bar_colors[0][2]):$bar.css("backgroundColor",/get_color/.test(bar_colors[0])?eval(bar_colors[0]):bar_colors[0])
;$bar.css({
color:/get_color/.test(bar_colors[1])?eval(bar_colors[1]):bar_colors[1]
})}},updateDisplayShadow:function(){
if(0==this.component_interface.getData("shadow"))this.node.css("box-shadow","none");else{
var _vertical_shadow=this.component_interface.getData("vertical_shadow"),_landscape="landscape-primary"==deviceDetector.orientation,_colors=this.component_interface.getData("shadow_colors")
;this.node.css({
boxShadow:(_landscape?-_vertical_shadow:0)+"px "+(_landscape?0:_vertical_shadow)+"px "+this.component_interface.getData("distance_shadow")+"px "+(/get_color/.test(_colors)?eval(_colors):_colors),
clipPath:_vertical_shadow})}},updateDisplayHeight:function(e){
var t=e.force_height||this.height(),i="landscape-primary"==deviceDetector.orientation,o=Math.round(.07*t),n=Math.max(i?0:20,Math.min(70,.75*(t-2*o))),s=this.node.find(".mb_img"),r=s.length
;if(r>0){var a=i?this.node.height():this.node.width();a-=20
;var l=Math.floor(a/r),c=l-2*o
;c<n&&(c=l-2*(o=Math.max(2,Math.round(.08*c))))
;var d=Math.max(i?0:14,Math.min(n,c))}else var d=n;s.css({
width:d,height:d,fontSize:d,lineHeight:d+"px",margin:o+"px"})},
component_interface:$.extend({},Cpt.prototype,{ui:{
menuType:"mobile_bar",blockSelector_options:{no_drag:!0,
max_height:100,min_height:30},menuFullName:function(){
return"Menu mobile"},onResize:$.throttle(50,function(){
mobileBar.updateDisplay({force_height:mobileBar.node.height()})
}),onDeselect:function(){
$("#block_tools_overlay").length&&$("#block_tools_overlay").remove()
},refreshMenu:function(){},onPropertyChanged:function(e){
if(e.include("shadow")||e.include("vertical_shadow")||e.include("distance_shadow")||e.include("shadow_colors")){
blockSelector.node.addClass('disable-side-bottom')
;clearTimeout(this.__shadowTimeout)
;this.__shadowTimeout=setTimeout(function(){
blockSelector.node.removeClass('disable-side-bottom')},2e3)
;mobileBar.component_interface.propertyDesignNode.find(".shadow_prop").toggle(mobileBar.component_interface.getData("shadow"))
;mobileBar.updateDisplayShadow()}
e.include("bar_colors")&&mobileBar.updateDisplayColors()
;if(e.include("buttons")||e.include("height")||e.include("enabled")){
mobileBar.updateDisplay()
;mobileBar.component_interface.getPropertyNode()
;mobileBar.component_interface.getPropertyDesignNode()}}},
data:{},component_type:{class_name:"MobilBar",
description:"Personnalisation de la barre mobile",
title:"Menu mobile",
help:"Choisissez les boutons affichés et leur agencement (en utilisant le glisser/déplacer dans la configuration)",
icon:'<img src="https://ssl.sitew.org/images/blog/editor_icons/design_panel/design_mobile.svg"/>'
},setXYZWH:function(e){e.h&&this.setData({height:e.h})},
V:function(){return 0!=this.getData("enabled")},A:function(){
return 0},X:function(){return 0},Y:function(){return 0},
W:function(){return 0},H:function(){return 0},Z:function(){
return 1e4},Z_with_offset:function(){return 1e4},
onDisplayed:$.Deferred().resolve(),option_for:function(){
return!1},hasOptions:function(){return!1},getData:function(e){
var t=v.mobile_bar&&v.mobile_bar&&v.mobile_bar[e]
;"buttons"==e?t=t.map(function(e){return $.extend({},e,{
image:-1==e.image.id?MobileBar.button_types[e.type].image:e.image
})}):"links"==e&&(t=this.getData("buttons").find(function(e){
return"menu"==e.type}).links||[]);return t},getPage:function(){
return v.page_bg},prop:function(){return{x:0,y:0,z:1e4,w:0,h:0,
v:!0}},getName:function(){return"Barre mobile"},
getFonticon:function(){return $.fn.fonticon("mobile")}})}
;var OldFooter=Class.create();OldFooter.prototype={
initialize:function(){var e=this
;this.node=$("<div id=footer_zone>")
;this.bg_node=$("<div id='footer_bg'></div>").appendTo(this.node)
;this.max_margin=300;if("editor"==v.mode){this.padding_bottom={
node:$("<div id='footer_padding_bottom' class='footer_control helpEditor'>").html("<span class='fonticon'>"+$.fn.fonticon("spacing")+"</span>").attr({
help:"<h3>Marge du bas</h3>Cette poignée vous permet de définir la marge sous le pied de page (de 0px à 300px)",
"data-position":"top"}).appendTo(this.node),position_x:0,
placeholder_node:"<div id='placeholder_bottom'><span></span></div>"
};this.margin_top={
node:$("<div id='footer_margin_top' class='footer_control helpEditor'>").html("<span class='fonticon'>"+$.fn.fonticon("spacing")+"</span>").attr({
help:"<h3>Marge du haut</h3>Cette poignée vous permet de définir la marge au-dessus du pied de page (de 0px à 300px)",
"data-position":"top"}).appendTo(this.node),position_x:0,
placeholder_node:"<div id='placeholder_top'><span></span></div>"
}
;this.label_node=$("<div id='lab_footer' class='footer_control helpEditor editor_interface' help='' data-position='top'></div>").html("<span id='footer_menu'><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 16 16\" xml:space=\"preserve\" width=\"16\" height=\"16\"><g class=\"nc-icon-wrapper\" fill=\"#ffffff\"><circle data-color=\"color-2\" fill=\"#ffffff\" cx=\"8\" cy=\"8\" r=\"2\"></circle> <circle fill=\"#ffffff\" cx=\"2\" cy=\"8\" r=\"2\"></circle> <circle fill=\"#ffffff\" cx=\"14\" cy=\"8\" r=\"2\"></circle></g></svg></span><span id='lab_footer_menu'>Pied de page</span>").appendTo(this.node)
;this.margin_top.node.draggable({
scope:'draggable_footer_margin_top',zIndex:1e4,scroll:!0,
cursor:"s-resize",scroll:!0,axis:"y",start:function(t,i){
var o=v.getSelectedPage();blockSelector.deselect()
;$("body").addClass("force_highlight");e.margin_top.node.hide()
;e.margin_top.height_node=i.helper.height()/2
;e.backup_pheight=v.calcHeight()
;v.getSelectedPage().setHeight($("#pages").height()+1e4)
;e.tmp_pos_y=i.position.top-12;e.tmp_y=e.Y()
;e.cpts_for_page().each(function(e){e.node.hide()})
;$("#pages").append(e.margin_top.placeholder_node)
;var n=[].concat(o.getVisibleCpts(deviceController.device,!0),v.page_bg.getVisibleCpts(deviceController.device,!0)),s=0
;if(n.length&&e.backup_pheight<=e.Y()-e.page_for_blocks().footer.margin_top){
s=(n=(n=n.sort(function(e,t){
return e.Y()+e.H()>t.Y()+t.H()?1:t.Y()+t.H()>e.Y()+e.H()?-1:0
}))[n.length-1]).X()+n.W()/2;$("#placeholder_top").css("left",s)
}else $("#placeholder_top").hide()},drag:function(t,i){
var o=v.getSelectedPage(),n
;$("body").addClass("onDraggable_footer")
;n=i.position.top-e.tmp_pos_y+e.tmp_y>e.backup_pheight+e.max_margin&&o.getVisibleCpts(deviceController.device,!0).length?e.backup_pheight+e.max_margin:e.tmp_y+Math.max(i.position.top-e.tmp_pos_y,0-e.page_for_blocks().footer.margin_top)
;$("#placeholder_top").css({top:e.backup_pheight,
height:n-e.backup_pheight
}).find("span").text(Math.floor(Math.max(n-e.backup_pheight,0))+"px")
;e.node.css("top",n)},stop:function(t,i){
$("#placeholder_top").remove()
;$("body").removeClass("onDraggable_footer force_highlight")
;e.node.removeClass("footer-state-hover")
;var o=Math.max(e.page_for_blocks().footer.margin_top+(i.position.top-e.tmp_pos_y),0)
;o>e.max_margin&&(o=e.max_margin)
;e.page_for_blocks().footer.margin_top=o
;$(".footer_slider[data-value=margin_top").parent().find(".position_info").val(o).change()
;e.margin_top.node.css({top:"",position:"absolute",display:""})
;e.cpts_for_page().each(function(e){e.node.show()})
;e.updateDisplay();e.page_for_blocks().setHasChanged()
;v.checkHeight()}});this.padding_bottom.node.draggable({
scope:'draggable_footer_padding_bottom',zIndex:1e4,scroll:!0,
cursor:"s-resize",scroll:!0,axis:"y",start:function(t,i){
blockSelector.deselect();$("body").addClass("force_highlight")
;e.padding_bottom.node.hide()
;e.padding_bottom.height_node=i.helper.height()/2
;v.getSelectedPage().setHeight($("#pages").height()+1e4)
;e.tmp_pos_y=i.position.top;e.tmp_height=e.H()
;$("#pages").append(e.padding_bottom.placeholder_node)
;var o=e.cpts_for_page(),n=0;if(o.length){o=[]
;$.each(e.cpts_for_page(),function(e,t){o.push(t)})
;n=(o=(o=o.sort(function(e,t){
return e.Y()+e.H()>t.Y()+t.H()?1:t.Y()+t.H()>e.Y()+e.H()?-1:0
}))[o.length-1]).X()+o.W()/2
;e.placeholder_bottom_last_cpt_y=o.Y()+o.H()
;$("#placeholder_bottom").css("left",n)
}else $("#placeholder_bottom").hide()},drag:function(t,i){
$("body").addClass("onDraggable_footer")
;e.set_height(e.tmp_height+(i.position.top-e.tmp_pos_y))
;$("#placeholder_bottom").css({
top:e.placeholder_bottom_last_cpt_y,
height:e.Y()+e.H()-e.placeholder_bottom_last_cpt_y
}).find("span").text(e.Y()+e.H()-e.placeholder_bottom_last_cpt_y+"px")
},stop:function(t,i){e.padding_bottom.node.css({left:"0",top:"",
position:"absolute",display:""})
;$("body").removeClass("onDraggable_footer force_highlight")
;e.node.removeClass("footer-state-hover")
;$("#placeholder_bottom").remove()
;var o=Math.max(e.page_for_blocks().footer.padding_bottom+(i.position.top-e.tmp_pos_y),0)
;o>e.max_margin&&(o=e.max_margin)
;e.page_for_blocks().footer.padding_bottom=o
;$(".footer_slider[data-value=padding_bottom").parent().find(".position_info").val(o).change()
;e.page_for_blocks().setHasChanged();v.checkHeight()}})}
this.node.appendTo("#pages");if("editor"==v.mode){
this.padding_bottom.node.css({top:"",position:"absolute"})
;this.margin_top.node.css({top:"",position:"absolute"})}
sigCtl.connect("Site.resized",function(){e.updateDisplay()})
;sigCtl.connect("Version.width",function(t,i){e.updateDisplay({
width:i})});sigCtl.connect("Version.checkHeight",function(t,i){
$('body').hasClass('onDraggable')||e.updateDisplay()})},
updateY:function(e){
var e=e||{},t=this.page_for_blocks().footer.margin_top
;this.set_width(e.width)
;this.node.removeClass("footer-bg footer-fg").addClass("footer-"+(this.page_for_blocks()==v.page_bg?"bg":"fg"))
;if("mobile_tree"!=deviceController.device){var i
;i=e.top?e.top-this.H():Math.max(v.windowHeight()-this.H(!0)+PageMarginTop.max(),v.calcHeight()+t)
;this.node.css("top",i)}},updateDisplay:function(e){
if(!this.disable_refresh){var t=this
;this.cpts_for_page("all").each(function(e){
e.node.removeClass("visible")});if(this.active()){
this.mousemove_event||"editor"!=v.mode||(this.mousemove_event=$("body").on("mousemove.footer","#site,#context-menu-layer",$.throttle(1e3,function(e){
var i=$(e.target)
;t.active()&&!i.hasClass("ov_block")&&t.node.toggleClass("active",Boolean(blockSelector.selected_cpts.length&&blockSelector.selected_cpts.filter(function(e){
return e.option_for("footer")
}).length||i.closest("#footer_zone").length||i.closest(".component")&&i.closest(".component").data("cpt")&&i.closest(".component").data("cpt").option_for("footer")||$("#footer_panel").is(".active")||t.force_active||$("body").hasClass("force_highlight")))
})));this.node.show();this.updateY(e);var i=this.cpts_for_page()
;$.each(i,function(e,t){t.node.css("visibility","")
;t.node.css("top","mobile_tree"!=deviceController.device?t.get_relative_y():"auto")
;$.when.apply($,i.map(function(e){return e.onDisplayed
})).then(function(){
t.updateShow("no_event","transition killed \ud83d\udd2b")})})
;if("editor"==v.mode){
blockSelector.selected_blocks.length&&blockSelector.drawSelector()
;var o="",n
;o+="<h3>"+sprintf("Pied de page pour %1$s",this.page_for_blocks()==v.page_bg?"tout le site":sprintf("cette page seulement (%1$s)",v.getSelectedPage().name))+"</h3>"
;o+="<p>Les modules situés dans le pied de page sont affichés en bas de chaque page (quelle que soit leur taille).</p>"
;o+="<code style='padding:2px;'><b>Information</b><br/>"+sprintf("%1$d modules",i.length)+" - "+sprintf("marges externes : %dpx",this.page_for_blocks().footer.margin_top)+" - "+sprintf("marges internes : %dpx",this.page_for_blocks().footer.padding_bottom)+"</code>"
;this.label_node.attr("help",o)
;this.margin_top.node.css("display",this.Y()>$("#site").height()?"":"none")
}"pending"==v.footer_ready.state()&&v.footer_ready.resolve()
}else{this.node.hide();if(this.mousemove_event){
$("body").off("mousemove.footer");this.mousemove_event=null}}}},
H:function(e){
var t=e?this.page_for_blocks().footer.padding_bottom:0
;return this.active()?this.node.outerHeight()+t:0},Y:function(){
return Math.round(parseFloat(this.node.css("top"))||0)},
set_width:function(e){
var t,i,o=v.getSelectedPage(),n="mobile_tree"==deviceController.device
;if(n)i=0;else if("full_width"==this.page_for_blocks().footer.width||"unique"==o.foreground.select&&"100%"==o.foreground.width||("global"==o.foreground.select||$.isEmptyObject(o.foreground))&&"100%"==v.page_bg.foreground.width){
i=0-($("#pages").offset().left-$("#body").offset().left)
;t=e||$("#body").width()}else{var s
;s=(s="global"==o.foreground.select||$.isEmptyObject(o.foreground)?v.page_bg.foreground.width:o.foreground.width)||$("#theme_content").width()
;var r=parseInt(s),a=$("#top_ruler").is(":visible")?$("#top_ruler").width():0
;t=r+a;i=0-r/2-a}if("editor"==v.mode&&!n){var l=0
;this.padding_bottom.position_x=l;this.margin_top.position_x=l
;this.padding_bottom.node.css("left",l)
;this.margin_top.node.css("left",l);if(editorConfig.do_ruler){
i+=$("#top_ruler").width();t-=$("#top_ruler").width()}
this.label_node.css("left",i)}
this.bg_node.css("left",i+"px").css("width",t?t+"px":"100%")},
set_height:function(e){var t=this
;if(this.active()&&"mobile_tree"!=deviceController.device){
0==this.Y()&&setTimeout(function(){t.set_height()},50)
;var i=this.cpts_for_page(),o,n=o=i.length?Math.max.apply(Math,i.map(function(e){
return(e.prop().h||0)+Math.max(e.Y()-t.Y()||0,0)})):50
;o+=this.page_for_blocks().footer.padding_bottom
;$("body").hasClass("onDraggable_footer")?e<n?e=n:e>n+this.max_margin&&(e=n+this.max_margin):(!e||o>e)&&(e=o)
;this.node.height(e);return e}},addCpts:function(e){
var t=this,i=0,o=e;e=(e=[].concat(e,$.map(e,function(e){
var t=e.contained_blocks();t.each(function(e){e.need_diff=!0})
;return t}))).unique()
;(o.length>1||e.length>1)&&(i=Math.min.apply(Math,(o.length>1?e:e.filter(function(e){
return e.need_diff})).map(function(e){return e.prop().y})))
;blockSelector.deselect();historyController.startInGroup()
;e.each(function(e){e.historyStart(e.prop())
;if(o.length>1||e.need_diff){delete e.need_diff
;e.device_coordinates[deviceController.device].y=e.get_relative_y("footer")+(t.Y()-i)
}else e.device_coordinates[deviceController.device].y=0
;t.set_cpt(e,{add:!0});blockSelector.move_cpts({move_action:!0,
cpts_to_move:[e],dst_page:t.page_for_blocks(),
coord:e.device_coordinates[deviceController.device],to_footer:!0
});e.historyStop(e.prop());e.setFullWidth(e.is_fullWidth)
;"UI_Menu"==e.component_type.class_name&&e.ui.onPropertyChanged([""])
});historyController.stopInGroup();blockSelector.selectCpts(o)},
set_cpt:function(e,t){t=t||{};e.option_for("footer",t.add||!1)
;e.hasOptions("scroll_animated")&&e.propertyDesignNode&&e.togglePropAnimationOnOff({
hide:t.add||!1});this.updateDisplay()},highlight:function(){
return this.node.hasClass("footer-state-hover")},
active:function(){var e=v.getSelectedPage().footer,t
;return!(0==e.activate&&"unique"==e.select||0==v.page_bg.footer.activate&&("global"==e.select||!e.select)||0==v.page_bg.footer.activate&&"unique"==e.select&&[undefined,!1].include(e.activate)||"viewer"==v.mode&&!Object.keys(this.cpts_for_page()).length)
},page_for_blocks:function(){
return"unique"==v.getSelectedPage().footer.select?v.getSelectedPage():v.page_bg
},cpts_for_page:function(e){var t
;if(e)t="all"==e?[].concat(v.page_bg.getCpts(),v.getSelectedPage().getCpts()):e.getCpts();else{
t=this.page_for_blocks().getVisibleCpts(deviceController.device)
;v.page_bg.getCpts().filter(function(e){
e.component_type&&"UI_Menu"==e.component_type.class_name&&!t.include(e)&&t.push(e)
})}return t.filter(function(t){var i=!1
;if(t.option_for("footer")||"viewer"==v.mode&&t.data&&t.data._cpt_footer){
var o
;window.deviceController&&(o="mobile_tree"==deviceController.device?"mobile":deviceController.device||"desktop")
;if("all"==e)i=!0;else{var n
;t.component_type&&"UI_Menu"==t.component_type.class_name?t.device_coordinates[o]&&t.device_coordinates[o].v&&("all"==t.data.show_mode||!t.data.pages_to_show_on.length||t.data.pages_to_show_on.include(v.getSelectedPage().pageid))&&(i=!0):t.device_coordinates[o]&&t.device_coordinates[o].v&&(i=!0)
}}return i})},toggleRefresh:function(e){this.disable_refresh=!e}
};var BackToTop=Class.create();BackToTop.prototype={
initialize:function(){var e=this
;"editor"==v.mode&&$.extend(this.component_interface,BackToTop.component_interface_editor)
;this.node=$("<div id='back_to_top'>")
;this.component_interface.getData("enabled")&&this.node.appendTo("#site_content")
;this.component_interface.page=v.page_bg
;this.component_interface.node=this.node
;this.component_interface.ui.allSVG=[]
;this.component_interface.ui.allSVG.push({
name:"11_arrow_light.svg",
value:'<svg width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0004 0.256592L23.1307 12.4999H0.870117L12.0004 0.256592ZM3.13067 11.4999H20.8701L12.0004 1.7432L3.13067 11.4999Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"12_arrow_medium.svg",
value:'<svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.2606 0L24.5211 13.4866H0L12.2606 0ZM4.5211 11.4866H20L12.2606 2.97321L4.5211 11.4866Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"13_arrow_bold.svg",
value:'<svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5211 0L29.0422 15.9732H0L14.5211 0ZM9.04221 11.9732H20L14.5211 5.94643L9.04221 11.9732Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"14_arrow_fill.svg",
value:'<svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1818 0L0 14.5H26.3636L13.1818 0Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"21_arrow_light.svg",
value:'<svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3702 2.15024C10.1718 1.93202 9.82862 1.93202 9.63024 2.15024L1.89079 10.6636C1.59881 10.9848 1.82669 11.5 2.26076 11.5H17.7397C18.1737 11.5 18.4016 10.9848 18.1096 10.6636L10.3702 2.15024ZM8.8903 1.47756C9.48544 0.82291 10.515 0.822907 11.1101 1.47756L18.8496 9.99095C19.7255 10.9545 19.0419 12.5 17.7397 12.5H2.26076C0.958551 12.5 0.274891 10.9545 1.15085 9.99096L8.8903 1.47756Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"22_arrow_medium.svg",
value:'<svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.2635 0.654655C9.05702 -0.218216 10.4297 -0.21822 11.2233 0.654654L18.9627 9.16805C20.1307 10.4528 19.2191 12.5134 17.4828 12.5134H2.00394C0.267652 12.5134 -0.643895 10.4528 0.524056 9.16805L8.2635 0.654655ZM17.4828 10.5134L9.74338 2L2.00394 10.5134L17.4828 10.5134Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"23_arrow_bold.svg",
value:'<svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7454 4.48661L5.26646 10.5134H16.2243L10.7454 4.48661ZM8.52553 0.981982C9.71581 -0.327324 11.7749 -0.32733 12.9652 0.981981L20.7046 9.49537C22.4565 11.4225 21.0892 14.5134 18.4848 14.5134H3.0059C0.401478 14.5134 -0.965843 11.4225 0.786084 9.49537L8.52553 0.981982Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"24_arrow_fill.svg",
value:'<svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.68102 0.946714L0.757851 9.66221C-0.931153 11.5201 0.387058 14.5 2.89794 14.5H18.7443C21.2552 14.5 22.5734 11.5201 20.8844 9.6622L12.9612 0.946713C11.8137 -0.315571 9.82855 -0.315571 8.68102 0.946714Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"31_arrow_light.svg",
value:'<svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.70589 0L17.4118 9.79412L16.6644 10.4585L8.70589 1.5052L0.747409 10.4585L0 9.79412L8.70589 0Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"32_arrow_medium.svg",
value:'<svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.41177 0L18.8235 10.5882L17.3287 11.917L9.41177 3.0104L1.49482 11.917L0 10.5882L9.41177 0Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"33_arrow_bold.svg",
value:'<svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8235 0L21.6471 12.1765L18.6575 14.8339L10.8235 6.0208L2.98964 14.8339L0 12.1765L10.8235 0Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"34_arrow_outline.svg",
value:'<svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8234 0.247314L23.3528 13.2179L19.6158 16.5397L11.8234 7.77331L4.03099 16.5397L0.293945 13.2179L11.8234 0.247314ZM1.70572 13.1349L3.94795 15.128L11.8234 6.26811L19.6988 15.128L21.941 13.1349L11.8234 1.75251L1.70572 13.1349Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"41_arrow_light.svg",
value:'<svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.87371 1.16782C8.67482 0.944061 8.3252 0.944061 8.1263 1.16782L0.87371 9.32698C0.690251 9.53337 0.374215 9.55196 0.167823 9.36851C-0.038568 9.18505 -0.0571583 8.86901 0.126301 8.66262L7.37889 0.503454C7.97558 -0.167818 9.02443 -0.167818 9.62112 0.503454L16.8737 8.66262C17.0572 8.86901 17.0386 9.18505 16.8322 9.36851C16.6258 9.55196 16.3098 9.53337 16.1263 9.32698L8.87371 1.16782Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"42_arrow_medium.svg",
value:'<svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.50519 0.671272C8.30077 -0.223757 9.69925 -0.223757 10.4948 0.671272L17.7474 8.83044C18.1143 9.24322 18.0772 9.87529 17.6644 10.2422C17.2516 10.6091 16.6195 10.5719 16.2526 10.1592L9.00001 2L1.74742 10.1592C1.3805 10.5719 0.74843 10.6091 0.335647 10.2422C-0.0771359 9.87529 -0.114317 9.24322 0.252601 8.83044L7.50519 0.671272Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"43_arrow_bold.svg",
value:'<svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75779 1.00691C8.95117 -0.335636 11.0489 -0.335636 12.2422 1.00691L19.4948 9.16607C20.2287 9.99164 20.1543 11.2558 19.3287 11.9896C18.5032 12.7235 17.239 12.6491 16.5052 11.8235L10 4.5052L3.49484 11.8235C2.761 12.6491 1.49686 12.7235 0.671294 11.9896C-0.154272 11.2558 -0.228633 9.99164 0.505203 9.16607L7.75779 1.00691Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"44_arrow_outline.svg",
value:'<svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.38409 1.67473C9.77636 0.108425 12.2237 0.108424 13.616 1.67473L20.8685 9.83389C21.7858 10.8658 21.6929 12.446 20.6609 13.3633C19.629 14.2806 18.0488 14.1877 17.1315 13.1557L11 6.2578L4.86855 13.1557C3.95126 14.1877 2.37107 14.2806 1.33912 13.3633C0.30716 12.446 0.214209 10.8658 1.1315 9.83389L8.38409 1.67473ZM12.8685 2.33909C11.8741 1.2203 10.126 1.2203 9.1315 2.33909L1.87891 10.4983C1.32854 11.1174 1.38431 12.0655 2.00348 12.6159C2.62266 13.1663 3.57076 13.1105 4.12114 12.4913L11 4.7526L17.8789 12.4913C18.4293 13.1105 19.3774 13.1663 19.9966 12.6159C20.6157 12.0655 20.6715 11.1174 20.1211 10.4983L12.8685 2.33909Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"51_arrow_light.svg",
value:'<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00006 1.30985L0.873765 9.32692C0.690306 9.53331 0.37427 9.5519 0.167879 9.36844C-0.0385128 9.18499 -0.0571031 8.86895 0.126356 8.66256L7.37895 0.503393C7.97563 -0.167879 9.02449 -0.167879 9.62117 0.503393L16.8738 8.66256C17.0572 8.86895 17.0386 9.18499 16.8322 9.36844C16.6259 9.5519 16.3098 9.53331 16.1264 9.32692L9.00006 1.30983L9.00006 17.9948C9.00006 18.271 8.7762 18.4948 8.50006 18.4948C8.22391 18.4948 8.00006 18.271 8.00006 17.9948L8.00006 1.30985Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"52_arrow_medium.svg",
value:'<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4947 0.671333C9.69915 -0.223696 8.30067 -0.223696 7.50509 0.671333L0.252502 8.8305C-0.114416 9.24328 -0.077235 9.87535 0.335548 10.2423C0.748331 10.6092 1.3804 10.572 1.74732 10.1592L7.9999 3.12507L7.9999 18.4949C7.9999 19.0472 8.44762 19.4949 8.9999 19.4949C9.55219 19.4949 9.9999 19.0472 9.9999 18.4949L9.9999 3.12505L16.2525 10.1592C16.6194 10.572 17.2515 10.6092 17.6643 10.2423C18.0771 9.87535 18.1142 9.24328 17.7473 8.8305L10.4947 0.671333Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"53_arrow_bold.svg",
value:'<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.2422 1.03057C11.0489 -0.343525 8.95117 -0.343525 7.75779 1.03057L0.505203 9.38151C-0.228633 10.2265 -0.154272 11.5203 0.671294 12.2714C1.49686 13.0225 2.761 12.9464 3.49484 12.1014L8.00002 6.91397L8.00002 19.953C8.00002 21.0835 8.89545 22 10 22C11.1046 22 12 21.0835 12 19.953L12 6.91397L16.5052 12.1014C17.239 12.9464 18.5032 13.0225 19.3287 12.2714C20.1543 11.5203 20.2287 10.2265 19.4948 9.38151L12.2422 1.03057Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"54_arrow_outline.svg",
value:'<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8685 2.33909C11.8741 1.2203 10.126 1.2203 9.1315 2.33909L1.87891 10.4983C1.32854 11.1174 1.38431 12.0655 2.00348 12.6159C2.62266 13.1663 3.57076 13.1105 4.12114 12.4913L9.50003 6.4401L9.50003 20.4948C9.50003 21.3232 10.1716 21.9948 11 21.9948C11.8285 21.9948 12.5 21.3232 12.5 20.4948L12.5 6.4401L17.8789 12.4913C18.4293 13.1105 19.3774 13.1663 19.9966 12.6159C20.6157 12.0655 20.6715 11.1174 20.1211 10.4983L12.8685 2.33909ZM8.38409 1.67473C9.77636 0.108424 12.2237 0.108424 13.616 1.67473L20.8685 9.83389C21.7858 10.8658 21.6929 12.446 20.6609 13.3633C19.629 14.2806 18.0488 14.1877 17.1315 13.1557L13.5 9.0703L13.5 20.4948C13.5 21.8755 12.3807 22.9948 11 22.9948C9.61932 22.9948 8.50003 21.8755 8.50003 20.4948L8.50003 9.0703L4.86855 13.1557C3.95126 14.1877 2.37107 14.2806 1.33912 13.3633C0.30716 12.446 0.214208 10.8658 1.1315 9.83389L8.38409 1.67473Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"61_arrow_light.svg",
value:'<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.3737 0L16.7474 9.42042L16 10.0848L8.8737 2.0677V18.7526H7.8737V2.0677L0.747409 10.0848L0 9.42042L8.3737 0Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"62_arrow_medium.svg",
value:'<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.74741 0L17.4948 9.84084L16 11.1696L9.74741 4.1354V19.5052H7.74741V4.1354L1.49482 11.1696L0 9.84084L8.74741 0Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"63_arrow_bold.svg",
value:'<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0L20 11.1848L16.8513 13.9674L12.1064 8.66036V22H7.89359V8.66036L3.1487 13.9674L0 11.1848L10 0Z" fill="#495057"/></svg>'
});this.component_interface.ui.allSVG.push({
name:"64_arrow_outline.svg",
value:'<svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4947 0.247314L20.6954 11.7231L16.9583 15.0449L12.9947 10.5858V22.5103H7.99465V10.5858L4.03099 15.0449L0.293945 11.7231L10.4947 0.247314ZM1.70572 11.6401L3.94795 13.6332L8.99465 7.95561V21.5103H11.9947V7.95561L17.0414 13.6332L19.2836 11.6401L10.4947 1.75251L1.70572 11.6401Z" fill="#495057"/></svg>'
})
;this.component_interface.ui.component=this.component_interface
;v.configurations.backtotop||(v.configurations.backtotop={})
;sigCtl.connect("Device.changed",function(){
e.component_interface.getData("enabled")&&e.component_interface.ui._mobileBackToTop()
});sigCtl.connect('Theme.changed',function(){
e.component_interface.getData("enabled")&&e.component_interface.ui._changeBorderWeightAndColors()
})
;loadCSSAsync("/assets/precompile/backtotop_view.css?version=1")
;if(this.component_interface.getData("enabled")){
this.component_interface.node.click(function(){
$('body,html,#site').animate({scrollTop:0},600)})
;this.component_interface.ui._changeSVG()
;this.component_interface.ui._changeRadius()
;this.component_interface.ui._changeSize()
;this.component_interface.ui._changeBorderWeightAndColors()}},
component_interface:$.extend({},Cpt.prototype,{ui:{
menuType:"backtotop",menuFullName:function(){
return"Revenir en haut"},onPropertyChanged:function(e){
var t=this;e.includes("enabled")&&this._changeEnabled()
;if(this.component.getData("enabled")){
0==$("#style_back_to_top").length&&this._changeBorderWeightAndColors()
;e.includes('list_form')&&this._changeRadius()
;e.includes('list_size')&&this._changeSize()
;e.includes("list_arrow")&&this._changeSVG()
;(e.includes("border_weight")||e.includes("normal_colors")||e.includes("hover_colors"))&&this._changeBorderWeightAndColors()
}},_changeEnabled:function(){
var e=$(".items_container.open.bloc_properties",this.component.propertyDesignNode)
;if(this.component.getData('enabled')){
this.component.node.appendTo("#site_content");e.show()
;if(0==this.component.node.find("svg").length){this._changeSVG()
;this._changeBorderWeightAndColors();this._changeRadius()
;this._changeSize();this.component.getPropertyDesignNode()}
}else{this.component.node.detach();e.hide()}},
_changeRadius:function(){
var e=this.component.getData('list_form').name||this.component.getData('list_form')
;this.component.node.removeClassMatch(/list_form_/)
;this.component.node.addClass("list_form_"+e)},
_changeSize:function(){
var e=this.component.getData('list_size').name||this.component.getData('list_size')
;this.component.node.removeClassMatch(/list_size_/)
;this.component.node.addClass("list_size_"+e)},
_changeSVG:function(){
var e=this,t=this.component.getData('list_arrow').name||this.component.getData('list_arrow')
;this.allSVG.each(function(i){
i.name==t&&e.component.node.html(i.value)})},
_changeBorderWeightAndColors:function(){
var self=this,normal_colors=self.component.getData('normal_colors'),hover_colors=self.component.getData('hover_colors'),getColor=function(color){
return color.match(/get_color/)?eval(color):color
},border_str="border: "+self.component.getData('border_weight')+"px solid ",style="#back_to_top { background-color: "+getColor(normal_colors[0])+"; "+border_str+getColor(normal_colors[1])+"; }"
;style+="#back_to_top svg { fill: "+getColor(normal_colors[2])+"; }"
;style+="#back_to_top svg path { fill: "+getColor(normal_colors[2])+"; }"
;style+=".detected_device_desktop #back_to_top:hover { background-color: "+getColor(hover_colors[0])+"; "+border_str+getColor(hover_colors[1])+"; }"
;style+=".detected_device_desktop #back_to_top:hover svg { fill: "+getColor(hover_colors[2])+"; }"
;style+=".detected_device_desktop #back_to_top:hover svg path { fill: "+getColor(hover_colors[2])+"; }"
;$("#style_back_to_top").remove()
;$(loadStyle(style,$("#block_custom_styles_css")[0])).attr("id","style_back_to_top")
},_mobileBackToTop:function(){var e=this
;if("editor"==v.mode)if(deviceController.device.match(/mobile/)||"tablet"==deviceController.device){
this.component.node.appendTo("#pages")
;$("#site").on("scroll.mobilebar",$.throttle(100,function(){
e.component.node.css({
top:$('#site').scrollTop()+$('#site').height()-e.component.node.height()-PageMarginTop.max()-PageMarginTop.rulerH()-30+"px",
left:deviceController.device_size().width/2-e.component.node.width()-30+"px"
})})).trigger("scroll.mobilebar")}else{
$("#site").off("scroll.mobilebar");e.component.node.css({top:"",
left:""})
;this.component.node.appendTo("#site_content").click(function(){
if("editor"==v.mode){designBlockPanel.hide()
;designBlockPanel.show([backToTop.component_interface])
;$("#design_block_panel").activate()}})}}},data:{},
component_type:{class_name:"BackToTop",
description:"Revenir en haut",title:"Revenir en haut",
help:"Permettez à vos visiteurs de remonter en haut de la page en un clic."
},V:function(){return 0!=this.getData("enabled")},A:function(){
return 0},X:function(){return 0},Y:function(){return 0},
W:function(){return 60},H:function(){return 60},Z:function(){
return 1e4},Z_with_offset:function(){return 1e4},
onDisplayed:$.Deferred().resolve(),option_for:function(){
return!1},getData:function(e){
if(v.configurations&&v.configurations.backtotop)return e?v.configurations.backtotop[e]:v.configurations.backtotop
},prop:function(){return{x:0,y:0,z:1e4,w:60,h:60,v:!0}},
getName:function(){return"Revenir en haut"},
getFonticon:function(){return this.svgImage}})}
;var historyController={offRecords:function(e){e.call()}
},StatusController=Class.create();StatusController.prototype={
initialize:function(e){this.loading_initial_scale=.5
;this.prog=$("#progressLoading");this.prog.css({
animation:"none",
transform:"scaleX("+this.loading_initial_scale+")",
transition:"transform 0.3s ease-in-out"})
;this.bg=$("#loadingNodeBG");this.loading=$("#loadingNode")
;this.to=null},message:function(e,t,i,o){},
progressMessage:function(e,t){
const i=this.loading_initial_scale+t/100*(1-this.loading_initial_scale)
;this.prog.css("transform","scaleX("+i+")");if(100==t){
this.bg.addClass('finish')
;this.loading.hasClass('done')||this.loading.addClass("done")
}else{clearTimeout(this.to);this.loading.removeClass('done')
;this.bg.removeClass('finish')}},hide:function(){}}
;var SecurityController=Class.create()
;SecurityController.redirection=function(e){var t=5,i
;"/"==location.pathname&&window!=top&&e?sigCtl.getVariable("User.site_owner",function(e,t){
if(t.owner){var i="";try{i=top.location.host}catch(o){}
tb_show(null,"/security/redirection_control/"+v.site_id+"?referrer="+encodeURI(i)+"&TB_iframe=1")
;$('#TB_window').on("unload",function(){
top.location=location.href})}else top.location=location.href
}):window!=top&&(top.location=location.href)}
;SecurityController.trial_warning=function(){
sigCtl.getVariable("User.site_owner",function(e,t){
if(!t.owner&&!$.bot){var i="";try{i=top.location.host}catch(o){}
tb_show(null,"/security/trial_warning/"+v.site_id+"?referrer="+encodeURI(i)+"&TB_iframe=1&width=830&height=540")
}})};SecurityController.prototype={initialize:function(){
var e=this
;sigCtl.connect("Member.connection_state_changed",function(){
if(!MemberController.isConnected()){e.pop=!0;e.popup()}})},
createNode:function(){this.pop=!0
;var e=this.n=$("<div id=sec_node><div class=sec_border><div class=sec_fix><span class=\"fonticon icon_helper iconLock helpEditor sec_ad dhelp\">"+$.fn.fonticon("editor_lock")+"</span><b>L’accès à cette page est limité.</b><br/><input type=submit value=\"Compléter le formulaire de sécurité\"/></div></div></div>").prependTo("body")
;$(document).HandleHelpTooltip()
;sigCtl.connect("Version.selectPageFg",function(i,o){t.pop=!0
;e.slideUp()});var t=this
;this.btn=e.find("input").click(function(){e.slideUp();t.tb()})
},popup:function(){this.n||this.createNode()
;this.pop?this.btn.click():this.n.slideDown(null,null,function(){
mobileBar.node.css('top',$('.sec_border').height())})
;this.pop=!1},tb:function(){function e(){
v.selectedPageFg.download_children=null;v.selectedPageFg.show()}
if(v.selectedPageFg.security_method){
if("members"!=v.selectedPageFg.security_method||MemberController.isConnected()){
tb_show(null,"/security/form/"+v.site_id+"?host="+window.location.host+"&pageid="+v.selectedPageFg.pageid+"&r="+Math.random()+(location.search.match(/preview_key=/)?"&from_preview=1":"")+"&TB_iframe=1&height=400&width=600")
;$('#TB_window').on("unload",e)
}else MemberController.tb_show("signin",{
errors:["L’accès à cette page est limité.",v.member_config.disable_signup?"Pour la voir, merci de vous connecter ci-dessous.":"Pour la voir, veuillez vous connecter ci-dessous ou vous inscrire."],
callback:e});mobileBar.node.css('top',0)}},adult_tb:function(){
var e=this;tb_remove();if('ok'!=$.cookie('adult_check')){
$("#body.body, #theme_body").css("opacity",0);if(this.sigOwner){
tb_show(null,"/security/adult/"+v.site_id+(e.owner?"?o=1&":"?")+"TB_iframe=1&modal=true")
;$('#TB_window').on("unload",function(){e.adult_tb()})}else{
this.sigOwner=!0;var t=$.Deferred();setTimeout(function(){
t.resolve()},2e3)
;sigCtl.getVariable("User.site_owner",function(t,i){
e.owner=i.owner;i.resolve()});t.done(function(){e.adult_tb()})}
}else $("#body.body, #theme_body").css("opacity","")}}
;var NewsletterNotificationController={init:function(){
var e=new URLSearchParams(location.search).get("nl_status")
;if(e){var t,i={
subscribed:"Votre abonnement à la newsletter est maintenant actif.",
unsubscribed:"Vous avez été désabonné de la newsletter.",
already_unsubscribed:"Vous avez déjà été désabonné de la newsletter.",
error:"Lien invalide : l'action sur la newsletter n'a pas pu être effectuée.",
rejected:"Désolé, votre adresse email a été rejetée par votre service de messagerie.",
too_soon:"Veuillez patienter quelques minutes avant de réessayer."
}[e];if(i){var o="error"===e||"rejected"===e||"too_soon"===e
;this.show(i,o);this.cleanUrl()}}},show:function(e,t){
var i,o=$('<div id="nl_notification" class="'+(t?"nl_notif_error":"nl_notif_success")+"\"><div class=\"nl_notif_inner\"><span class=\"nl_notif_msg\">"+e+"</span><span class=\"nl_notif_close\">&times;</span></div></div>").prependTo("body")
;o.find(".nl_notif_close").click(function(){
o.slideUp(200,function(){o.remove()})});setTimeout(function(){
o.slideUp(300,function(){o.remove()})},8e3)},
cleanUrl:function(){if(history.replaceState){
var e=new URL(location.href)
;e.searchParams["delete"]("nl_status")
;history.replaceState(null,"",e)}}}
;window.dataLayer=window.dataLayer||[];TrackersController={
addTrackingFunction:function(e){
v.selectedPageFg&&e("page_view",v.selectedPageFg.getUrl(),v.selectedPageFg.name)
;var t=null;sigCtl.connect("Version.urlChanged",function(i,o){
o.getUrl()!=t&&e("page_view",t=o.getUrl(),o.name)})
;sigCtl.connect("UI_Download.download",function(t,i){
e("UI_Download_dwnload","/Download/"+i.url.replace(/^\/fs\//,""),i.name)
});sigCtl.connect("UI_Form.sent",function(t,i){
e("UI_Form_sent","/Form-sent/"+i.replace(" ","_"),i)})
;sigCtl.connect("UI_Image.fullscreen",function(t,i){
e("UI_Image_fullscreen","/Image-fullscreen/"+i.url.replace(/^\/fs\//,""),i.name)
});sigCtl.connect("UI_Carousel.fullscreen",function(t,i){
e("UI_Carousel_fullscreen","/Carousel-fullscreen/"+i.url.replace(/^\/fs\//,""),i.name)
});sigCtl.connect("UI_Music.play",function(t,i){
e("UI_Music_play","/Music-play/"+i.cpt.data.sound.url.replace(/^\/fs\//,""),i.cpt.data.sound.name)
});sigCtl.connect("UI_Store.add_to_cart",function(t,i){
e("UI_Store_add_to_cart","/Store-add-to-cart/"+i.name.replace(" ","_"),i.name,{
product:{name:i.name,reference:i.reference,price:i.price}})})
;sigCtl.connect("UI_Store.visit_cart",function(t){
e("UI_Store_visit_cart","/Store-visit-cart/cart","cart","cart")
});sigCtl.connect("UI_Store.start_order",function(t,i){
e("UI_Store_start_order","/Store-start-order/"+i.replace(" ","_"),i)
});sigCtl.connect("UI_Store.start_payment",function(t,i){
e("UI_Store_start_payment","/Store-start-payment/"+i.replace(" ","_"),i)
});sigCtl.connect("UI_Store.cart_paid",function(t,i){
e("UI_Store_cart_paid","/Store-cart-paid/"+i.order_reference,i.order_reference,{
cart:{total:i.total,total_vat:i.total_vat,
order_reference:i.order_reference,member_id:i.member_id,
total_in_cents:100*i.total,
total_without_vat:i.total-UI_Store.cart.total_vat||0,
total_without_vat_in_cents:100*(i.total-UI_Store.cart.total_vat||0)
}})})},loadGTag:function(e,t){if(!this.gtag){this.gtag=$.ajax({
url:"https://www.googletagmanager.com/gtag/js?id="+e,
dataType:"script",simple_ajax:!0})
;window.dataLayer=window.dataLayer||[];window.gtag=function(){
dataLayer.push(arguments)};gtag('js',new Date)
;gtag('consent','default',{ad_user_data:'granted',
ad_personalization:'granted',ad_storage:'granted',
analytics_storage:'granted'})}gtag('config',e,t)
;var i=function(t,i,o,n){
console.log("Page "+i+" ("+o+") view event sent to tracker "+e)
;gtag('event',t,{page_title:o,page_path:i,send_to:e})
;i.match(/^\/Form-sent\//)&&gtag("event","generate_lead",{name:o
})
;i.match(/^\/Store-add-to-cart\//)&&gtag("event","add_to_cart",{
currency:UI_Store.conf.currency,items:[{
item_id:n.product.reference,item_name:n.product.name,
price:n.product.price}]})
;i.match(/^\/Store-start-order\//)&&gtag("event","begin_checkout",{
currency:UI_Store.conf.currency,value:UI_Store.cart.total})
;i.match(/^\/Store-start-payment\//)&&gtag("event","add_payment_info",{
payment_type:o})
;i.match(/^\/Store-visit-cart\//)&&gtag("event","view_cart",{
currency:UI_Store.conf.currency,value:UI_Store.cart.total})
;i.match(/^\/Store-cart-paid\//)&&gtag("event","purchase",{
transaction_id:n.cart.order_reference,value:n.cart.total,
tax:n.cart.total_vat,shipping:n.cart.shipping,
currency:UI_Store.conf.currency})}
;TrackersController.addTrackingFunction(i)},
setTrackers:function(e){
$.bot?console.log("Trackers disabled in bots."):e.each(function(e){
switch(e.type){case"sitew_universal_analytics":
case"universal_analytics":break;case"ga4":
TrackersController.loadGTag(e.identifier,{send_page_view:!1})
;break;case"gtm":gtag('consent','default',{
ad_user_data:'granted',ad_personalization:'granted',
ad_storage:'granted',analytics_storage:'granted'})
;TrackersController.addTrackingFunction(function(e,t,i,o){
dataLayer.push({event:"SiteWPageView",path:t,name:i,
host:location.host,details:o})
;t.match(/^\/Form-sent\//)&&dataLayer.push({
event:"generate_lead",name:i})
;t.match(/^\/Store-cart-paid\//)&&dataLayer.push({
event:"purchase",name:i,value:o.cart.total,
order_reference:o.cart.order_reference,
member_id:o.cart.member_id,ecommerce:{
transaction_id:o.cart.order_reference,value:o.cart.total,
tax:o.cart.total_vat,currency:UI_Store.conf.currency}})})}})}}
;$("#body .to_rebuild").empty().removeClass("se_content")
;Content.prototype._convertEditor=s;editorController={
deselect:s,pause:s,resume:s,select:s,changeCss:s,
updatePosition:s,disable:s,setContent:function(e,t){e.html(t)}}
;statusController=new StatusController($("#loadingNodeBG,#loadingNode"))
;statusController.hide();var FileDescription={_pending:{},
get:function(e){var t=[];e.each(function(e){
e.removable&&t.push(e.id)})
;if(0==t.length)return $.Deferred().resolve([])
;var i=t.sort().join(),o=FileDescription._pending[i]||$.ajax({
name:"Récupération des descriptions",url:"/file/descriptions",
dataType:"jsonp",data:{fids:JSON_.stringify(t)}})
;FileDescription._pending[i]=o;o.done(function(){
delete FileDescription._pending[i]});return o}},CookiesBanner={
initialize:function(e){var t=this;if(window.in_eu){this.opts=e
;this.services={};this.ready=$.Deferred()
;this.window_ready_trigerred=!1
;window.addEventListener('ready',function(){
t.window_ready_trigerred=!0})
}else $(".show_cookies_popup").hide();return this},
enabled:function(){
return this.opts&&this.opts.configuration&&this.opts.configuration.enabled
},display:function(){var e=this
;this.enabled()&&(this.load_script=this.load_script||function(){
var e=$.Deferred()
;$("#ui_css").loadCss("https://st0.cdnsw.com/assets/precompile/lib/tarteaucitron.css?version=1",function(){
e.resolve()});return $.when(e,$.ajax({
url:"https://st0.cdnsw.com/assets/precompile/lib/tarteaucitron.js",
dataType:"script",autoretry:!1}).then(function(){return $.ajax({
url:sprintf("https://st0.cdnsw.com/assets/precompile/lib/tarteaucitron/lang/tarteaucitron.%s.js","fr"),
dataType:"script",autoretry:!1})}))}()).then(function(){
['tac.close_alert','tac.open_alert'].each(function(e){
window.addEventListener(e,function(e){
$("#tarteaucitronRoot").removeClassMatch(/tac-is-[visible|invisible]/).addClass('tac-is-'+('tac.open_alert'==e.type?'visible':'invisible'))
})});window.addEventListener('tac.close_panel',function(){
tarteaucitron.userInterface.closeAlert()})
;window.addEventListener('tac.open_panel',function(){
$(".tarteaucitronInfoBox a").attr('target','_blank')})
;tarteaucitron.lang.alertBigPrivacy=e.opts.configuration.text
;tarteaucitron.lang.disclaimer=""!=e.opts.configuration.panel_text&&e.opts.configuration.panel_text?e.opts.configuration.panel_text:"Les fonctionnalités de ce site listées ci-dessous s’appuient sur des services proposés par des tiers. Si vous donnez votre accord (consentement), ces tiers déposeront des cookies qui vous permettront de visualiser directement sur ce site du contenu hébergé par ces tiers ou de partager nos contenus. Par le biais de ces cookies, ces tiers collecteront et utiliseront vos données de navigation pour leurs propres finalités, conformément à leur politique de confidentialité."
;if(e.opts.configuration.extra_panel_text_enabled&&e.opts.configuration.extra_panel_text&&""!=e.opts.configuration.extra_panel_text){
tarteaucitron.lang.disclaimer+="<span class=\"read_more\">Lire la suite</span>"
;tarteaucitron.lang.disclaimer+=sprintf("<section style=\"display: none;\">%s</section>",e.opts.configuration.extra_panel_text)
}var t=$.extend({banner_bg:"#edeff5",banner_fg:"#838391",
button_bg:"#4b81e8",button_fg:"#ffffff",position:"banner_bottom"
},e.opts.configuration.style),i=`\n          #tarteaucitronAlertBig, #tarteaucitronMainLineOffset, #tarteaucitronInfo, #tarteaucitron *:not(.tarteaucitronCheck):not(.tarteaucitronCross):not(.tarteaucitronPlus) {\n            background: ${t.banner_bg}!important;\n          }\n          #tarteaucitron #tarteaucitronInfo {\n            text-align: left!important\n          }\n          #tarteaucitronDisclaimerAlert, #tarteaucitronAlertBig, #tarteaucitronDisclaimerAlert *, #tarteaucitronMainLineOffset, #tarteaucitronInfo, #tarteaucitronRoot * {\n            color: ${t.banner_fg}!important;\n          }\n          #tarteaucitronMainLineOffset, .tarteaucitronBorder {\n            border: none!important\n          }\n          #tarteaucitronRoot button:not(#tarteaucitronBack) {\n            background: ${t.button_bg}!important;\n            color: ${t.button_fg}!important;\n          }\n          #tarteaucitronRoot .tarteaucitronCheck::before, #tarteaucitronRoot .tarteaucitronCross::before {\n            color: ${t.button_fg}!important;\n          }\n          #tarteaucitronInfo p, #tarteaucitronInfo span, #tarteaucitronInfo section {\n            color: #fff;\n          }\n          #tarteaucitronInfo span.read_more {\n            cursor: pointer;\n            text-decoration: underline;\n          }\n          .tarteaucitronInfoBox * {\n            color: #fff!important;\n          }\n          .tarteaucitronInfoBox b {\n            font-weight: bold!important;\n          }\n          .tarteaucitronListCookies, .tarteaucitronName br {\n            display: none;\n          }\n          #body .tarteaucitronAllow {\n            background: ${t.button_bg};\n            color: ${t.button_fg};\n            }\n          #tarteaucitronRoot .tarteaucitronLine .tarteaucitronH3, #tarteaucitronRoot .tarteaucitronLine .tarteaucitronH3 a {\n            font-size: 14px;\n          }\n          #tarteaucitronRoot .tarteaucitronLine .tarteaucitronH3 b {\n            font-weight: bold;\n            text-decoration: underline;\n          }\n          .tac_activate .tac_float {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            height: inherit;\n            flex-direction: column;\n          }\n          .tac_activate .tarteaucitronAllow {\n            margin-top: 10px;\n          }\n        `
;switch(t.position){case"banner_bottom":break;case"banner_top":
i+="\n              #tarteaucitronAlertBig {\n                bottom: auto;\n              }\n            "
;break;case"popup":
i+=`\n              #tarteaucitronRoot #tarteaucitronAlertBig {\n                top: calc(50% - 100px);\n                bottom: auto;\n                padding: 20px;\n                width: ${deviceController.device.match(/mobile/)?"calc(100% - 40px)!important;":"430px!important; left: calc(50% - 200px)!important;"}\n                border-radius: 16px;\n              }\n              #tarteaucitronRoot.tac-is-visible {\n                left: 0;\n                position: fixed;\n                right: 0;\n                top: 0;\n                width: 100%;\n                background-color: #0f0f0f9c;\n                bottom: 0;\n                z-index: 1000000000;\n              }\n              #tarteaucitronRoot #tarteaucitronDisclaimerAlert {\n                padding: 0;\n                display: block;\n              }\n              #tarteaucitronAlertBig button {\n                margin: 20px 0 0 0;\n              }\n            `
}loadStyle(i,$("#ui_css").get(0))
;(e.opts.configuration.purposes||[]).each(function(t){
if("hidden"!=t.consent_type){var i={key:t.key,type:{
audience_measurement:"analytic",video_block:"video",
social_block:"social",calendar_block:"api",map_block:"api",
widget_block:"api"}[t.key],name:{
audience_measurement:"Mesure d'audience",
video_block:"Vidéos",
social_block:"Réseaux sociaux",
calendar_block:"Calendriers",map_block:"Cartes",
widget_block:"Widgets HTML utilisant des services tiers"
}[t.key]}
;if("mandatory"==t.consent_type)(tarteaucitron.lang.mandatoryTextSentences=tarteaucitron.lang.mandatoryTextSentences||[]).push("<b>"+i.name+" :</b>"+t.description);else if(i&&i.type&&i.name){
var o="consent"==t.consent_type
;tarteaucitron.services[t.key]=$.extend({},i,{needConsent:o,
name_short:i.name,
name:("api"==i.type?"<b>"+i.name+" :</b>":"")+t.description,
cookies:['_'],js:function(){
e.find_or_create_service(t.key).allowed.resolve()},
fallback:function(){}})
;(tarteaucitron.job=tarteaucitron.job||[]).push(t.key)}}})
;(tarteaucitron.lang.mandatoryTextSentences||[]).length>0&&(tarteaucitron.lang.mandatoryText=tarteaucitron.lang.mandatoryTextSentences.join("<br/>"))
;tarteaucitron.init({useExternalCss:!0,useExternalJs:!0,
privacyUrl:"",cookieName:"eu-consent",orientation:"bottom",
showAlertSmall:!1,cookieslist:!0,closePopup:!1,showIcon:!1,
adblocker:!1,DenyAllCta:!0,AcceptAllCta:!0,highPrivacy:!0,
handleBrowserDNTRequest:!1,removeCredit:!0,moreInfoLink:!1,
readmoreLink:"",mandatory:!0})
;e.window_ready_trigerred||tarteaucitron.initEvents.loadEvent(!1)
;$(document).on('click','.tarteaucitronAllow',function(){
tarteaucitron.userInterface.respond(this,!0)})
;$(".show_cookies_popup").on('click',function(){
tarteaucitron.userInterface.openPanel()
;window.dispatchEvent(new Event('resize'))})
;$("#tarteaucitronRoot #tarteaucitronInfo .read_more").off("click").on('click',function(){
$(this).siblings('section').toggle()});e.ready.resolve()})},
destroy:function(){this.opts={};this.services={}
;"object"==typeof tarteaucitron&&tarteaucitron.userInterface&&tarteaucitron.userInterface.closeAlert()
;"object"==typeof tarteaucitron&&tarteaucitron.userInterface&&tarteaucitron.userInterface.closePanel()
},find_or_create_service:function(e,t){var t=t||{}
;this.services=this.services||{}
;return this.services[e]=this.services[e]||{
allowed:t.allowed||$.Deferred()}},process_component:function(e){
var t=e.get_gdpr_service();if(t){
var i=this.opts.configuration.purposes.find(function(e){
return e.key==t})
;if(i&&!["hidden","mandatory"].include(i.consent_type)){
var o=this.find_or_create_service(t)
;if("undefined"==typeof tarteaucitron||tarteaucitron.state&&!0!==tarteaucitron.state[t])return{
blocked:"pending"==o.allowed.state(),
placeholder_builded:this.create_placeholder(t),allowed:o.allowed
}}}return{blocked:!1,allowed:$.Deferred().resolve()}},
process_invisible:function(e){
var t=this.opts.configuration.purposes.find(function(t){
return t.key==e})
;if(t&&!["hidden","mandatory"].include(t.consent_type)){
var i=this.find_or_create_service(e)
;if("undefined"==typeof tarteaucitron||tarteaucitron.state&&!0!==tarteaucitron.state[e])return{
blocked:"pending"==i.allowed.state(),allowed:i.allowed}}return{
blocked:!1,allowed:$.Deferred().resolve()}},
create_placeholder:function(e){var t=function(e){
var t='',i=Math.floor(1e5*Math.random()),o=tarteaucitron.lang.begin_fallback+' '+tarteaucitron.services[e].name_short+' '+tarteaucitron.lang.fallback
;tarteaucitron.lang['engage-'+e]!==undefined&&(o=tarteaucitron.lang['engage-'+e])
;t+='<div class="tac_activate tac_activate_'+e+'">'
;t+='   <div class="tac_float">';t+='      '+o
;t+='      <button type="button" class="tarteaucitronAllow" id="Eng'+i+'ed'+e+'">'
;t+='          <span class="tarteaucitronCheck"></span> '+tarteaucitron.lang.allow
;t+='       </button>';t+='   </div>';return t+='</div>'
},i=$.Deferred();this.ready.then(function(){i.resolve(t(e))})
;return i}},Section=Class.create()
;Object.extend(Section.prototype,new Model)
;Object.extend(Section.prototype,pageChildren)
;Object.extend(Section.prototype,componentParent)
;Object.extend(Section.prototype,{initialize:function(e){
this.all_cpts_displayed=$.Deferred()
;this.added_in_page=$.Deferred().resolve();this.maxZIndex=1e4
;this.minZIndex=5e3;this.type="Section";this.cpts=[]
;this.childrenToDelete=[];this.hasChanged=!1;if("Page"==e.type){
this.page=e;this.order=this.page.sections.length+1}
this.onDisplayed=$.Deferred()
;this.m_get_done=$.Deferred().done(()=>{this.updateCountType()
;if(!this.from_clone){try{this.data=JSON.parse(this.data)
}catch(e){
dbg.error("Error in data from section id "+this.id,this.data)}
this.data&&!$.isEmptyObject(this.data)||this.setDefaultData()}})
;this.onDisplayed.done(()=>{sigCtl.connect('Theme.changed',()=>{
Misc.deferred(()=>{this.loadCustomCss()},500,5e3)})
;sigCtl.connect('Device.changed',()=>{this.loadCustomCss()})
;if("editor"==v.mode){this.bindHover();this.updateClasses()
;this.features=new SectionFeatures(this)}})},
getNodeForDevice:function(e){
return"mobile_tree"==(e=e||deviceController.device)?this.getMobileTreeNode():this.getNode()
},getNode:function(){return this.$node},
getMobileTreeNode:function(){
this.$mobile_tree_node||(this.$mobile_tree_node=this.$node.clone(!0).attr('id',null))
;return this.$mobile_tree_node},
getContentNodeForDevice:function(e){
return this.getNodeForDevice(e).find(".section_content")},
setHasChanged:function(e){},onDeviceChanged:function(){
this.setParallax();this.updateClasses&&this.updateClasses()
;this.resize()},getData:function(e){
return e==undefined?this.data:this.data.hasOwnProperty(e)?this.data[e]:void 0
},setDataWithKeyValue:function(e,t){
var i=Misc.deepCloneObj(this.data[e]),o=Misc.deepCloneObj(t)
;if(JSON_.stringify(i)!=JSON_.stringify(o)){this.data[e]=t
;return!0}},setData:function(e,t){
var i=[],o=Misc.deepCloneObj(this.data)
;if("object"==typeof e)for(var n in e)this.setDataWithKeyValue(n,e[n])&&i.push(n);else this.setDataWithKeyValue(e,t)&&i.push(e)
;var s=Misc.deepCloneObj(this.data)
;JSON_.stringify(o)!=JSON_.stringify(s)&&historyController.add(this,[[o,s],"dataAction"])
;if(i.length>0){this.setHasChanged();this.onPropertyChanged(i)}
},setDefaultData:function(){this.data={background_type:'none',
padding:[20,0,20,0],width:'fullwidth'}},setOrder:function(e){
if(this.order!=e){this.order=e;this.setHasChanged()}},
to_json:function(){return{order:this.order,page_id:this.page.id,
data:JSON.stringify(this.data)}},
insertBeforePlaceholderOrRelativeNode:function(e){
(e="string"==typeof e?$(e):e).data("section")==this.page.footer&&v.getSelectedPage().isInSectionsDOM(sectionAddPlaceholder.$node)?this.$node.insertBefore(sectionAddPlaceholder.$node):this.$node.insertBefore(e)
},insertInDOM:function(){
"Section"!=this.type&&"viewer"!=v.mode||("editor"==v.mode?this.insertInDOMEditor():this.$node.appendTo("section"==this.getLowerType()?page.$sections:$("#sections")))
;"editor"==v.mode&&this.$node.hover(()=>{
v.setSectionHovered(this)})},loadCustomCss:function(e){if(!e){
var t=v.getSelectedPage().getForegroundWidth(),i=create_custom_css_section_preloaded(this.data,this.getId(),this.getLowerType(),null,t)
;this.css&&this.css.remove()
;this.css=loadStyle(i,document.getElementById("section_css"))}},
setParallax:function(){
var e="editor"==v.mode?$("#site"):$(window)
;if('function'==typeof this.__on_window_scroll){
e.off("scroll",this.__on_window_scroll)
;e.off("resize",this.__on_window_scroll)}
if((this.getData("background_options")||[]).includes("parallax")){
let t=this.getNodeForDevice(),i=this.getNodeForDevice().find(".section_background")
;this.__on_window_scroll=(()=>{if(t.is(":visible")){
var o=t.position().top-e.height(),n=t.position().top+t.height()
;if(e.scrollTop()>o&&e.scrollTop()<n){
var s=100*(e.scrollTop()-o)/(n-o);i.css({
backgroundPosition:"50% "+(100-s)+"%"})}}})
;e.on("scroll",this.__on_window_scroll)
;e.on("resize",this.__on_window_scroll)
;requestAnimationFrame(()=>{this.__on_window_scroll()})
}else this.$background.css({backgroundPosition:""})},
getFullId:function(){return this.getLowerType()+"_"+this.getId()
},display:function(){this.loadCustomCss(this.preloaded)
;if(!this.$node){var e=this.getFullId();if(this.preloaded){
this.$node=$(`#${e}`);if(this.$node.length){
this.$background=this.$node.find(".section_background")
;this.$content=this.$node.find(".section_content")
}else this.$node=null}if(!this.$node){
this.$node=$("<div>").addClass(`section visible ${e}`)
;this.$node.attr({id:e})
;this.$background=$("<div>").addClass("section_background").appendTo(this.$node)
;this.$content=$("<div>").addClass("section_content").appendTo(this.$node)
;this.insertInDOM();this.preloaded=!0}this.onDisplayed.resolve()
}this.show();this.onDisplayed.done(()=>{
this.$node.data("section",this);this.setParallax()
;let e=this.getVisibleCpts()
;e.length>0?this.displayComponents().then(()=>{
$.when.apply($,e.map(e=>e.onDisplayed)).then(()=>{
this.loadHeight()})}):this.all_cpts_displayed.resolve()})
;return this.all_cpts_displayed.then(()=>{this.resize()})},
getCptById:function(e){return this.getCpts().find(function(t){
return t.getId()==e})},getVersion:function(){
return'Section'==this.type?this.page.version:this.version},
getHeight:function(){return this.$node.height()},
getPadding:function(e){
let t=20,i=this.getData("padding")||[0,0,0,0],o,n,s,r
;return[(e=e||deviceController.device).match(/mobile/)?Math.min(t,i[0]):i[0],'mobile_tree'==e?t:0,e.match(/mobile/)?Math.min(t,i[2]):i[2],'mobile_tree'==e?t:0]
},getHeightWithPadding:function(){
let e=this.getPadding(),t=this.getHeight();e[0]>0&&(t+=e[0])
;e[2]>0&&(t+=e[2]);return t},
getHeightWithPaddingAndMargin:function(){
let e=this.getHeightWithPadding(),t=this.getData("margin_top")
;t>0&&(e+=t);let i=this.getData("margin_bottom");i>0&&(e+=i)
;return e},setHeight:function(e){if(e>0){this.$node.height(e)
;v.checkHeight()}},getY:function(){
return this.$node.position().top},getYViewPort:function(){
return this.$node.offset().top},
getYViewPortWithPadding:function(){
return this.$node.offset().top+this.getPadding()[0]},
getYWithPadding:function(){
return this.getY()+this.getPadding()[0]},getBottom:function(){
return this.getY()+this.$node.height()},hide:function(){
this.getCpts().each(function(e){e.hide()})
;this.$node.removeClass("visible")},show:function(){
this.$node.addClass("visible")},getCptsSortedByTop:function(){
return this.getVisibleCpts().sort(function(e,t){
return e.getTop()-t.getTop()})},getCptWithLowestTop:function(){
return this.getCptsSortedByTop().at(0)},
getCptsSortedByBottom:function(){
return this.getVisibleCpts().sort(function(e,t){
return e.getBottom()-t.getBottom()})},
getCptWithHighestBottom:function(){
return this.getCptsSortedByBottom().at(-1)},
getCptWithLowestBottom:function(){
return this.getCptsSortedByBottom().at(0)},
getCalculatedHeight:function(){
var e=this.getCptWithHighestBottom()
;return e?e.getBottom():this.height()},
onPropertyChanged:function(){},loadHeight:function(){
if(this.getVisibleCpts().length>0){
var e=this.getCptWithHighestBottom(),t=$.Deferred().resolve()
;(t=e.resize_finished?e.resize_finished:e.onDisplayed).done(()=>{
this.resize()})}else'editor'==v.mode&&this.resize()},
updateYOfAllCpts:function(e){var t=this.getVisibleCpts()
;if(t.length>1){t.each(function(t){t.setXYZWH({y:t.Y()+e},{
send_events:!1})});sigCtl.emit("Component.moved")}},
resize:function(){
if(this.getVisibleCpts().length>0)this.setHeight(this.getCalculatedHeight());else if('editor'==v.mode){
var e=0
;this.$content&&this.$content.length&&(e=this.$content.outerHeight())
;this.setHeight(Math.max(e,200))
}else this.$node.css("height","")},
getSiblingSection:function(e){
return"up"==e?this.getPreviousSection():this.getNextSection()},
getPreviousSection:function(){
return $(this.$node.prevAll(".visible")[0]).data("section")},
getNextSection:function(){
return $(this.$node.nextAll(".visible")[0]).data("section")},
getPages:function(){
return'Section'==this.type?[this.page]:v.pages_fg.find_all(e=>{
var t=e[this.getLowerType()]
;return t?t.getId()==this.id:e[`${this.getLowerType()}_id`]==this.id
})},countCptWithUrl:function(){var e=0
;this.getVisibleCpts().each(t=>{
ComponentType.hasUrl(t.component_type_id)&&(e+=1)});return e},
select:function(){this.toggleSelected(!0)
;sectionEditor.open(this.getLowerType(),this)},
isInPageBackground:function(){v.page_bg.sections.includes(this)
},isLayout:function(){return!1},toggleHovered:function(e){
this.getNodeForDevice().toggleClass("section--hovered",e)
;this.features.toggleHovered(e)},toggleSelected:function(e){
this.getNodeForDevice().toggleClass("section--selected",e)},
elevateContent:function(e){
this.getNodeForDevice().toggleClass("section--content-elevated",e)
},getName:function(){
this.getData("name")||(this.data.name=sprintf("%1$s sans nom",this.getI18n().type))
;return this.data.name},uiCall:function(e,t){this[e](t)}})
;var Header=class e extends Section{constructor(e){super(e)
;this.version=e;this.type="Header"}to_json(){return{
version_id:v.id,data:JSON.stringify(this.data)}}isActive(){
return this.data.activate}setDefaultData(){
super.setDefaultData()
;this.data.name=`${e.i18n.type.capitalize()} ${v.headers.length+1}`
;this.data.margin_bottom=0}insert(){
this.$node.addClass("header background_page").prependTo(v.getSelectedPage().$sections)
;this.isDisplayed=!0}display(){
v.getSelectedPage().allSectionsDisplayed().then(()=>{
if(this.$node){this.insert();super.display()
}else super.display().then(()=>{this.insert();this.resize()})})}
detachFromDOM(){this.isDisplayed&&this.$node.detach()}
onPropertyChanged(e){super.onPropertyChanged(e)}isLayout(){
return!0}},Footer=class e extends Section{constructor(e){
super(e);this.version=e;this.type="Footer"}to_json(){return{
version_id:this.version.id,data:JSON.stringify(this.data)}}
isActive(){return this.data.activate}setDefaultData(){
super.setDefaultData()
;this.data.name=`${e.i18n.type.capitalize()} ${v.footers.length+1}`
;this.data.margin_top=0}insert(){
this.$node.addClass("footer background_page").appendTo(v.getSelectedPage().$sections)
;this.isDisplayed=!0}display(){
v.getSelectedPage().allSectionsDisplayed().then(()=>{
if(this.$node){this.insert();super.display()
}else super.display().then(()=>{this.insert();this.resize()})})}
detachFromDOM(){this.isDisplayed&&this.$node.detach()}
isLayout(){return!0}};if(window.page_log==undefined)window.page_log=[];window.page_log.push([new Date(),'Executed aggregated file '+"./public/assets/precompile/fr-viewer_all_sections-a49853aec4d72ea488ae98c0b12a8b22.js"]);if(window.js_list)js_list.push("./public/assets/precompile/fr-viewer_all_sections-a49853aec4d72ea488ae98c0b12a8b22.js");
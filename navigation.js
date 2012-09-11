/***********************************************
* AnyLink Drop Down Menu- © Dynamic Drive (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

//Contents for menu 1
var menu5=new Array()
menu5[0]='<a href="about_us/about_us.htm">About Us</a>'
menu5[1]='<a href="about_us/board_of_directors.htm">Board of Directors</a>'
menu5[2]='<a href="about_us/meet_our_staff.htm">Meet Our Staff</a>'
menu5[3]='<a href="about_us/partners.htm">Partners</a>'
menu5[4]='<a href="about_us/funding_and_financials.htm">Funding and Financials</a>'
menu5[5]='<a href="about_us/jobs_and_internships.htm">Jobs and Internships</a>'
menu5[6]='<a href="about_us/contact_us.htm">Contact Us</a>'

//Contents for menu 2, and so on
var menu6=new Array()
menu6[0]='<a href="ecological_footprint/about_ecological_footprint.htm">About Ecological Footprint</a>'
menu6[1]='<a href="ecological_footprint/using_the_footprint.htm">Using the Footprint</a>'
menu6[2]='<a href="ecological_footprint/footprint_FAQs.htm">Footprint FAQs</a>'
menu6[3]='<a href="ecological_footprint/reducing_your_footprint.htm">Reducing Your Footprint</a>'
menu6[4]='<a href="education/footprint_education.htm">Footprint Education</a>'

var menu7=new Array()
menu7[0]='<a href="climate_policy/about_climate_policy.htm">About Climate Policy</a>'
menu7[1]='<a href="climate_policy/california_cap.htm">California Climate Asset Plan</a>'
menu7[2]='<a href="climate_policy/illinois_cap.htm">Illinois Climate Asset Plan</a>'
menu7[3]='<a href="climate_policy/new_york_cap.htm">New York Climate Asset Plan</a>'

var menu8=new Array()
menu8[0]='<a href="environmental_justice/about_environmental_justice.htm">About Environmental Justice</a>'

var menu9=new Array()
menu9[0]='<a href="sustainable_economics/about_sustainable_economics.htm">About Sustainable Economics</a>'
menu9[1]='<a href="sustainable_economics/environment_and_economy.htm">Environment and Economy</a>'
menu9[2]='<a href="sustainable_economics/environment_and_equity.htm">Environment and Equity</a>'
menu9[3]='<a href="sustainable_economics/economic_localization.htm">Economic Localization</a>'
		
		
var menu10=new Array()
menu10[0]='<a href="sustainability_indicators/about_sustainability_indicators.htm">About Sustainability Indicators</a>'
menu10[1]='<a href="sustainability_indicators/genuine_progress_indicator.htm">Genuine Progress Indicator</a>'
menu10[2]='<a href="sustainability_indicators/community_indicators.htm">Community Indicators</a>'
menu10[3]='<a href="sustainability_indicators/regional_indicators.htm">Regional Indicators</a>'
		
var menu11=new Array()
menu11[0]='<a href="publications/index.htm">Research and Publications</a>'


var menuwidth='145px' //default menu width
var menubgcolor='#004f5a'  //menu bgcolor
var disappeardelay=250  //menu disappear speed onMouseout (in miliseconds)
var hidemenu_onclick="yes" //hide menu when user clicks within menu?

/////No further editting needed

var ie4=document.all
var ns6=document.getElementById&&!document.all

if (ie4||ns6)
document.write('<div id="dropmenudiv" style="visibility:hidden;width:'+menuwidth+';background-color:'+menubgcolor+'" onMouseover="clearhidemenu()" onMouseout="dynamichide(event)"></div>')

function getposOffset(what, offsettype){
var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
var parentEl=what.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}


function showhide(obj, e, visible, hidden, menuwidth){
if (ie4||ns6)
dropmenuobj.style.left=dropmenuobj.style.top="-500px"
if (menuwidth!=""){
dropmenuobj.widthobj=dropmenuobj.style
dropmenuobj.widthobj.width=menuwidth
}
if (e.type=="click" && obj.visibility==hidden || e.type=="mouseover")
obj.visibility=visible
else if (e.type=="click")
obj.visibility=hidden
}

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
var edgeoffset=0
if (whichedge=="rightedge"){
var windowedge=ie4 && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure-obj.offsetWidth
}
else{
var topedge=ie4 && !window.opera? iecompattest().scrollTop : window.pageYOffset
var windowedge=ie4 && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
if (windowedge-dropmenuobj.y < dropmenuobj.contentmeasure){ //move up?
edgeoffset=dropmenuobj.contentmeasure+obj.offsetHeight
if ((dropmenuobj.y-topedge)<dropmenuobj.contentmeasure) //up no good either?
edgeoffset=dropmenuobj.y+obj.offsetHeight-topedge
}
}
return edgeoffset
}

function populatemenu(what){
if (ie4||ns6)
dropmenuobj.innerHTML=what.join("")
}


function dropdownmenu(obj, e, menucontents, menuwidth){
if (window.event) event.cancelBubble=true
else if (e.stopPropagation) e.stopPropagation()
clearhidemenu()
dropmenuobj=document.getElementById? document.getElementById("dropmenudiv") : dropmenudiv
populatemenu(menucontents)

if (ie4||ns6){
showhide(dropmenuobj.style, e, "visible", "hidden", menuwidth)
dropmenuobj.x=getposOffset(obj, "left")
dropmenuobj.y=getposOffset(obj, "top")
dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+"px"
dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px"
}

return clickreturnvalue()
}

function clickreturnvalue(){
if (ie4||ns6) return false
else return true
}

function contains_ns6(a, b) {
while (b.parentNode)
if ((b = b.parentNode) == a)
return true;
return false;
}

function dynamichide(e){
if (ie4&&!dropmenuobj.contains(e.toElement))
delayhidemenu()
else if (ns6&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
delayhidemenu()
}

function hidemenu(e){
if (typeof dropmenuobj!="undefined"){
if (ie4||ns6)
dropmenuobj.style.visibility="hidden"
}
}

function delayhidemenu(){
if (ie4||ns6)
delayhide=setTimeout("hidemenu()",disappeardelay)
}

function clearhidemenu(){
if (typeof delayhide!="undefined")
clearTimeout(delayhide)
}

if (hidemenu_onclick=="yes")
document.onclick=hidemenu
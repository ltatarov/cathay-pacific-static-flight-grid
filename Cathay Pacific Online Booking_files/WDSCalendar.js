function WDSCalendar(a,b){this.id=a;this.resultObj=b;this.parentCalendar=this.linkCalendar=null;this.popupOpened=false;this.iconText=this.title="";this.popupDate=new Date;this.startDateValidity=new Date(WDSCalendar.serverDate.getTime()+WDSCalendar.minValidityDelay);this.endDateValidity=new Date(WDSCalendar.serverDate.getTime()+WDSCalendar.maxValidityDelay);this.endDateValidity.setHours(23,59,59);this.dateRangesValidity=[new DateRange(this.startDateValidity,this.endDateValidity)];this.dateRangesUpdate=[new DateRange(this.startDateValidity,this.endDateValidity)];this.startDate=new Date(this.startDateValidity);this.callBack=this.selectedDate=null;this.panelAction=true;this.addGoAction=false;this.addCloseAction=false;this.changeDatesText="";this.goCallBack=null;this.closeActionText="close";this.popupCssClass="";}WDSCalendar.DAY="Day";WDSCalendar.MONTHYEAR="MonthYear";WDSCalendar.MONTH="Month";WDSCalendar.YEAR="Year";WDSCalendar.HOUR="Hour";WDSCalendar.ICON="Icon";WDSCalendar.ALLMONTHS="ALLMONTHS";WDSCalendar.ONEMONTH="ONEMONTH";WDSCalendar.SELECTMONTH="SELECTMONTH";WDSCalendar.PanelTitle="Title";WDSCalendar.PanelMonths="Months";WDSCalendar.PanelDate="Date";WDSCalendar.PanelCalendar="Calendar";WDSCalendar.PanelAction="Action";WDSCalendar.formatDayCode="DD";WDSCalendar.formatMonthYearCode="mmYYYY";WDSCalendar.formatMonthCode="mm";WDSCalendar.formatYearCode="YYYY";WDSCalendar.formatHourCode="HHMM";WDSCalendar.serverDate=new Date;WDSCalendar.serverDate.setHours(0,0,0,0);WDSCalendar.displayDay=true;WDSCalendar.displayMonthYear=true;WDSCalendar.displayMonth=false;WDSCalendar.displayYear=false;WDSCalendar.displayHour=true;WDSCalendar.displayPopup=true;WDSCalendar.formatDayValue="DD";WDSCalendar.formatMonthYearValue="mmmm YYYY";WDSCalendar.formatMonthValue="mmmm";WDSCalendar.formatYearValue="YYYY";WDSCalendar.formatHourValue="HH:MM";WDSCalendar.formatResultValue="YYYYDDmmHHMM";WDSCalendar.minValidityDelay=10800000;WDSCalendar.maxValidityDelay=30499200000;WDSCalendar.PopupOffsetX=0;WDSCalendar.PanelFormatMonth=WDSCalendar.ALLMONTHS;WDSCalendar.PanelFormatDate="DD mmmm YYYY";WDSCalendar.Panels=[];WDSCalendar.Panels[WDSCalendar.PanelTitle]=[true,0,0];WDSCalendar.Panels[WDSCalendar.PanelMonths]=[true,0,1];WDSCalendar.Panels[WDSCalendar.PanelDate]=[true,0,2];WDSCalendar.Panels[WDSCalendar.PanelCalendar]=[true,0,3];WDSCalendar.Panels[WDSCalendar.PanelAction]=[true,0,4];WDSCalendar.fieldsOrder=[WDSCalendar.DAY,WDSCalendar.MONTHYEAR,WDSCalendar.MONTH,WDSCalendar.YEAR,WDSCalendar.HOUR,WDSCalendar.ICON];WDSCalendar.DisplayLinkedCalendar=false;WDSCalendar.prototype.setCallBack=function(a){this.callBack=a;};WDSCalendar.prototype.setEndDateValidity=function(a){this.endDateValidity=new Date(a);this.dateRangesUpdate=[new DateRange(this.startDateValidity,this.endDateValidity)];};WDSCalendar.prototype.setStartDateValidity=function(a){this.startDateValidity=new Date(a);this.dateRangesUpdate=[new DateRange(this.startDateValidity,this.endDateValidity)];};WDSCalendar.prototype.setLinkCalendar=function(a){this.linkCalendar=a;this.linkCalendar.parentCalendar=this;};WDSCalendar.prototype.setTitle=function(a){this.title=a;};WDSCalendar.prototype.setIconText=function(a){this.iconText=a;};WDSCalendar.prototype.getPopupObject=function(){return document.getElementById("WDSCalendarIdPopup");};WDSCalendar.prototype.getObject=function(){return document.getElementById(this.id);};WDSCalendar.prototype.display=function(){var a="";for(i in WDSCalendar.fieldsOrder){if(WDSCalendar.fieldsOrder[i]==WDSCalendar.DAY&&WDSCalendar.displayDay){a+=this.getField(WDSCalendar.DAY)+"&nbsp;";}else{if(WDSCalendar.fieldsOrder[i]==WDSCalendar.MONTHYEAR&&WDSCalendar.displayMonthYear){a+=this.getField(WDSCalendar.MONTHYEAR)+"&nbsp;";}else{if(WDSCalendar.fieldsOrder[i]==WDSCalendar.MONTH&&WDSCalendar.displayMonth){a+=this.getField(WDSCalendar.MONTH)+"&nbsp;";}else{if(WDSCalendar.fieldsOrder[i]==WDSCalendar.YEAR&&WDSCalendar.displayYear){a+=this.getField(WDSCalendar.YEAR)+"&nbsp;";}else{if(WDSCalendar.fieldsOrder[i]==WDSCalendar.HOUR&&WDSCalendar.displayHour){a+=this.getField(WDSCalendar.HOUR)+"&nbsp;";}else{if(WDSCalendar.fieldsOrder[i]==WDSCalendar.ICON&&WDSCalendar.displayPopup){a+='<a href="javascript:'+this.id+".popupToggle();\" class=WDSCalendarIcon id='"+this.id+"IconId'>"+this.iconText+"</a>";}}}}}}this.getObject().innerHTML=a;}};WDSCalendar.prototype.getField=function(a){a="<select name="+this.id+a+" id="+this.id+a+"Id";a+=' onChange="'+this.id+'.update();"';a+="></select>";return a;};WDSCalendar.prototype.setDateAndAdjustMaxDay=function(a,b,c,d){var e=28;if(d/4-parseInt(d/4)==0){e=29;}e=[31,e,31,30,31,30,31,31,30,31,30,31][c];if(b>e){b=e;}a.setDate(b);a.setFullYear(d);a.setMonth(c);};WDSCalendar.prototype.updateSelectedDate=function(){WDSTrace.dump("-----------------------------");WDSTrace.dump("BEGIN : WDSCalendar.getSelectedDate");var a,b;if(null==this.selectedDate){this.selectedDate=new Date(this.dateRangesUpdate[0].from);}else{this.selectedDate=new Date;if(WDSCalendar.displayMonthYear){b=WDSCommon.getTagValue(document.getElementById(this.id+WDSCalendar.MONTHYEAR+"Id"));a=parseInt(b.substr(2,4),10);b=parseInt(b.substr(0,2),10)-1;this.setDateAndAdjustMaxDay(this.selectedDate,this.selectedDate.getDate(),b,a);}else{if(WDSCalendar.displayYear){a=WDSCommon.getTagValue(document.getElementById(this.id+WDSCalendar.YEAR+"Id"));this.setDateAndAdjustMaxDay(this.selectedDate,this.selectedDate.getDate(),this.selectedDate.getMonth(),a);}if(WDSCalendar.displayMonth){b=parseInt(WDSCommon.getTagValue(document.getElementById(this.id+WDSCalendar.MONTH+"Id")),10)-1;this.setDateAndAdjustMaxDay(this.selectedDate,this.selectedDate.getDate(),b,this.selectedDate.getFullYear());}}WDSCalendar.displayDay&&this.setDateAndAdjustMaxDay(this.selectedDate,WDSCommon.getTagValue(document.getElementById(this.id+WDSCalendar.DAY+"Id")),this.selectedDate.getMonth(),this.selectedDate.getFullYear());if(WDSCalendar.displayHour){a=WDSCommon.getTagValue(document.getElementById(this.id+WDSCalendar.HOUR+"Id"));this.selectedDate.setHours(parseInt(a.substr(0,2),10),parseInt(a.substr(2,2),10),0,0);}WDSTrace.dump("range = "+this.dateRangesUpdate);if(!this.selectedDate.dateWithinRanges(this.dateRangesUpdate)){this.selectedDate.setDate(1);if(!this.selectedDate.dateWithinRanges(this.dateRangesUpdate)){this.selectedDate=this.dateRangesUpdate[0].from;}}WDSTrace.dump("selectedDate = "+this.selectedDate);WDSTrace.dump("END   : WDSCalendar.getSelectedDate");this.popupDate=new Date(this.selectedDate);}};WDSCalendar.prototype.setSelectedDate=function(a){this.selectedDate=new Date(a);if(WDSCalendar.displayMonthYear){WDSCommon.updateTag(document.getElementById(this.id+WDSCalendar.MONTHYEAR+"Id"),null,this.selectedDate.format(WDSCalendar.formatMonthYearCode));this.updateMonthYear();}if(WDSCalendar.displayDay){WDSCommon.updateTag(document.getElementById(this.id+WDSCalendar.DAY+"Id"),null,this.selectedDate.format(WDSCalendar.formatDayCode));this.updateDay();}if(WDSCalendar.displayHour){WDSCommon.updateTag(document.getElementById(this.id+WDSCalendar.HOUR+"Id"),null,this.selectedDate.format(WDSCalendar.formatHourCode));this.updateHour();}this.resultObj&&WDSCommon.updateTag(this.resultObj,null,this.selectedDate.format(WDSCalendar.formatResultValue));};WDSCalendar.prototype.update=function(){this.updateSelectedDate();this.resultObj&&WDSCommon.updateTag(this.resultObj,null,this.selectedDate.format(WDSCalendar.formatResultValue));this.callBack!=null&&this.callBack(this,this.selectedDate);WDSTrace.dump("---------------------------------------------------------------");WDSTrace.dump("Selected Date = "+this.selectedDate);WDSCalendar.displayMonthYear&&this.updateMonthYear();WDSCalendar.displayDay&&this.updateDay();WDSCalendar.displayHour&&this.updateHour();if(this.linkCalendar){this.linkCalendar.startDate=new Date(this.selectedDate);this.linkCalendar.dateRangesUpdate=[new DateRange(this.selectedDate,this.linkCalendar.endDateValidity)];this.linkCalendar.update();}if($("select.selectBox").length){$("select").selectBox("refresh");}};WDSCalendar.prototype.updateDay=function(){WDSTrace.dump("-----------------------------");WDSTrace.dump("BEGIN : WDSCalendar.updateDay");var a=new WDSList("Days"+this.id),b=this.selectedDate.getMonth(),c=this.selectedDate.getDate(),d=new Date(this.selectedDate);WDSTrace.dump("dateRange = "+this.dateRangesUpdate.toString());for(var e=1;e<=31;++e){d.setDate(e);WDSTrace.dump("current date = "+d.toString());if(b==d.getMonth()){WDSTrace.dump("test mois "+b+" == "+d.getMonth());if(d.dateWithinRanges(this.dateRangesUpdate)){WDSTrace.dump("add...");a.add(d.format(WDSCalendar.formatDayCode),d.format(WDSCalendar.formatDayValue));}}}if(this.selectedDate){c=this.selectedDate.getDate();}a.updateHtmlSelect(this.id+WDSCalendar.DAY+"Id",c);WDSTrace.dump("END   : WDSCalendar.updateDay");};WDSCalendar.prototype.updateMonthYear=function(){WDSTrace.dump("-----------------------------");WDSTrace.dump("BEGIN : WDSCalendar.updateMonthYear");var a=new WDSList("Months"+this.id),b=new Date(this.startDate);b.setDate(1);WDSTrace.dump("date = "+b);for(WDSTrace.dump("range = "+this.dateRangesUpdate);b.getTime()<this.dateRangesUpdate[0].to.getTime();){WDSTrace.dump("current month = "+parseInt(b.getMonth()+1));if(b.monthWithinRanges(this.dateRangesUpdate)){a.add(b.format(WDSCalendar.formatMonthYearCode),b.format(WDSCalendar.formatMonthYearValue));WDSTrace.dump("add...");}b.setMonth(b.getMonth()+1);}b=this.startDate.format(WDSCalendar.formatMonthYearCode);if(this.selectedDate){b=this.selectedDate.format(WDSCalendar.formatMonthYearCode);}WDSTrace.dump("default value = "+b);a.updateHtmlSelect(this.id+WDSCalendar.MONTHYEAR+"Id",b);WDSTrace.dump("END   : WDSCalendar.updateMonthYear");};WDSCalendar.prototype.updateMonth=function(){alert("to be implemented");};WDSCalendar.prototype.updateYear=function(){alert("to be implemented");};WDSCalendar.prototype.updateHour=function(){WDSTrace.dump("--------------------------------");WDSTrace.dump("BEGIN   : WDSCalendar.updateHour");var a=new WDSList("Hour"+this.id);a.addList(Date.listHours);var b=null;if(this.selectedDate){b=this.selectedDate.format(WDSCalendar.formatHourCode);}a.updateHtmlSelect(this.id+WDSCalendar.HOUR+"Id",b);WDSTrace.dump("END     : WDSCalendar.updateHour");};WDSCalendar.prototype.updatePopup=function(){var a="";if(WDSBrowser.ie&&!WDSBrowser.opera&&!WDSBrowser.mac){a+='<iframe src="noFile.htm" scrolling="no" frameborder="1"></iframe>';}a+=this.getPopupHtml();if(this.linkCalendar!=null){if(WDSCalendar.DisplayLinkedCalendar){a+=this.linkCalendar.getPopupHtml();}}this.getPopupObject().innerHTML=a;};WDSCalendar.prototype.getPopupHtml=function(){var a=0,b=0,c;for(c in WDSCalendar.Panels){if(WDSCalendar.Panels[c][0]){var d=WDSCalendar.Panels[c][1],e=WDSCalendar.Panels[c][2];if(a<d+1){a=d+1;}if(b<e+1){b=e+1;}}}c="<table cellspacing=0 cellpadding=0 class='WDSCalendarPopup "+this.popupCssClass+"'>";for(d=0;d<b;d++){c+="<tr>";for(e=0;e<a;e++){if(d==0){c+='<td class="toFromCol">';}else{c+="<td>";}c+=this.getPanelHtml(e,d);c+="</td>";}c+="</tr>";}c+="</table>";return c;};WDSCalendar.prototype.getPanelHtml=function(a,b){for(var c in WDSCalendar.Panels){if(WDSCalendar.Panels[c][0]&&WDSCalendar.Panels[c][1]==a&&WDSCalendar.Panels[c][2]==b){if(c==WDSCalendar.PanelTitle){return this.getPanelTitleHtml();}else{if(c==WDSCalendar.PanelMonths){return this.getPanelMonthsHtml();}else{if(c==WDSCalendar.PanelDate){return this.getPanelDateHtml();}else{if(c==WDSCalendar.PanelCalendar){return this.getPanelCalendarHtml();}else{if(c==WDSCalendar.PanelAction&&this.panelAction){return this.getPanelActionHtml();}}}}}}}return"";};WDSCalendar.prototype.getPanelTitleHtml=function(){var a='<table width="100%" class="WDSCalendarPanelTitle"><tr><td>';a+=this.title+" : "+this.popupDate.format(WDSCalendar.PanelFormatDate);a+="</td></tr></table>";return a;};WDSCalendar.prototype.getPanelMonthsHtml=function(){if(WDSCalendar.PanelFormatMonth==WDSCalendar.ALLMONTHS){return this.getPanelMonthsHtmlAllMonths();}else{if(WDSCalendar.PanelFormatMonth==WDSCalendar.ONEMONTH){return this.getPanelMonthsHtmlOneMonth();}else{if(WDSCalendar.PanelFormatMonth==WDSCalendar.SELECTMONTH){return this.getPanelMonthsHtmlSelectMonth();}}}return"";};WDSCalendar.prototype.getPanelMonthsHtmlAllMonths=function(){var a=new Date(this.startDate);a.setDate(1);for(var b=0,c="<table class=WDSCalendarPanelMonth cellspacing=1 cellpadding=1 width=100%><tr>";a.getFullYear()<this.endDateValidity.getFullYear()||a.getMonth()<=this.endDateValidity.getMonth()&&a.getFullYear()<=this.endDateValidity.getFullYear()||b%7!=0;){c+="<td ";if(a.monthWithinRanges(this.dateRangesUpdate)){if(a.getMonth()==this.popupDate.getMonth()&&a.getFullYear()==this.popupDate.getFullYear()){c+=' class="WDSCalendarPanelMonthActive"';}else{c+=' class="WDSCalendarPanelMonthEnable"';c+=" onMouseOver=\"this.className='WDSCalendarPanelMonthEnableOver'\"";c+=" onMouseOut=\"this.className='WDSCalendarPanelMonthEnable'\"";c+=' onClick="'+this.id+".setPopupMonthYear("+a.getMonth()+", "+a.getFullYear()+')"';}c+=' title="'+a.getFullMonth()+" "+a.getFullYear()+'"';}else{c+=' class="WDSCalendarPanelMonthDisable"';}c+=">";c+=a.getShortMonth();c+="</td>";a.setMonth(a.getMonth()+1);if(++b%7==0){c+="</tr><tr>";}}c+="</tr></table>";return c;};WDSCalendar.prototype.getPanelMonthsHtmlOneMonth=function(){var a=(new Date(this.popupDate.getTime())).addMonth(-1),b=(new Date(this.popupDate.getTime())).addMonth(1),c="<table class=WDSCalendarPanelMonth cellspacing=1 width=100%><tr>";c+="<td";if(a.monthWithinRanges(this.dateRangesUpdate)){c+=' class="WDSCalendarPanelMonthEnable"';c+=" onMouseOver=\"this.className='WDSCalendarPanelMonthEnableOver'\"";c+=" onMouseOut=\"this.className='WDSCalendarPanelMonthEnable'\"";c+=" onClick=\"this.onclick = ''; "+this.id+".setPopupMonthYear("+a.getMonth()+", "+a.getFullYear()+')"';}else{c+=' class="WDSCalendarPanelMonthDisable"';}c+=">&lt;</td>";c+='<td class="WDSCalendarPanelMonthActive">';c+=this.popupDate.getShortMonth();c+="</td>";c+="<td";if(b.monthWithinRanges(this.dateRangesUpdate)){c+=' class="WDSCalendarPanelMonthEnable"';c+=" onMouseOver=\"this.className='WDSCalendarPanelMonthEnableOver'\"";c+=" onMouseOut=\"this.className='WDSCalendarPanelMonthEnable'\"";c+=" onClick=\"this.onclick = ''; "+this.id+".setPopupMonthYear("+b.getMonth()+", "+b.getFullYear()+')"';}else{c+=' class="WDSCalendarPanelMonthDisable"';}c+=">&gt;</td>";c+="</tr></table>";return c;};WDSCalendar.prototype.getPanelMonthsHtmlSelectMonth=function(){var a=new Date(this.popupDate),b=document.getElementById(this.id+WDSCalendar.MONTHYEAR+"Id"),c='<select name="popupMonth" ';c+='onChange="'+this.id+'.setPopupMonthYear((parseInt(this.value.substr(0, 2), 10) - 1), parseInt(this.value.substr(2, 4), 10))"';c+=">";for(var d=0;d<b.options.length;d++){c+='<option value="'+b.options[d].value+'"';if(a.format(WDSCalendar.formatMonthYearCode)==b.options[d].value){c+=" selected";}c+=">";c+=b.options[d].text;c+="</option>";}c+="</select>";return c;};WDSCalendar.prototype.getPanelDateHtml=function(){var a='<table class="WDSCalendarPanelDate" width="100%" cellspacing=1><tr>';a+="<tr><td>";a+=this.popupDate.format(WDSCalendar.PanelFormatDate);a+="</tr></table>";return a;};WDSCalendar.prototype.getPanelCalendarHtml=function(){var a='<table class="WDSCalendarPanelCalendar" width="100%" cellspacing=1>';a+="<tr>";for(var b=0;b<Date.listShortDays.size();++b){a+='<td class="WDSCalendarPanelCalendarHeader">'+Date.listShortDays.get(b)+"</td>";}a+="</tr>";b=new Date(this.popupDate);b.setDate(1);b.setHours(0,0,0,0);for(var c=b.getDay(),d=0;d<6;++d){for(var e=true,f="<tr>",g=0;g<7;++g){if(g+7*d>=c&&b.getMonth()==this.popupDate.getMonth()){f+="<td";if(this.dateRangesUpdate==null||b.dateWithinRanges(this.dateRangesUpdate)){if(b.getDate()==this.popupDate.getDate()&&b.getMonth()==this.popupDate.getMonth()&&b.getFullYear()==this.popupDate.getFullYear()){f+=' class="WDSCalendarPanelCalendarActive '+this.id+'"';}else{f+=' class="WDSCalendarPanelCalendarEnable"';f+=" onMouseOver=\"this.className='WDSCalendarPanelCalendarEnableOver'\"";f+=" onMouseOut=\"this.className='WDSCalendarPanelCalendarEnable'\"";}f+=' onClick="'+this.id+".setPopupDate("+b.getDate()+')"';}else{f+=' class="WDSCalendarPanelCalendarDisable"';}f+="><span>"+b.getDate()+"</span></td>";b.setDate(g+7*d+2-c);e=false;}else{f+="<td><span>&nbsp;</span></td>";}}f+="</tr>";e||(a+=f);}a+="</table>";return a;};WDSCalendar.prototype.getPanelActionHtml=function(){var a='<table class="WDSCalendarPanelAction" width="100%" cellspacing=1>';a+="<tr>";if(this.addCloseAction){a+="<td id='"+this.id+"CloseActionId' ";a+='><div id="buttons" class="noborder nopadding"><div class="btn right"><input type="button" value="'+this.closeActionText+'" onclick="'+this.id+'.close();"></div></div></td>';}else{a+="<td>&nbsp;</td>";}if(this.addGoAction){a+="<td id='WDSCalendarPanelActionGoTitle'>"+this.changeDatesText+"</td>";a+='<td class="WDSCalendarPanelActionGo"><div id="buttons" class="noborder nopadding"><div class="btn right"><input type="button" value="'+this.goActionText+'" onclick="'+this.id+'.goAction();"></div></div>'+"</td>";}else{a+="<td>&nbsp;</td>";a+="<td>&nbsp;</td>";}a+="</tr></table>";return a;};WDSCalendar.prototype.goAction=function(){this.goCallBack!=null&&this.goCallBack(this);this.close();};WDSCalendar.prototype.setGoCallBack=function(a){this.goCallBack=a;};WDSCalendar.prototype.setPopupDate=function(a){this.setDateAndAdjustMaxDay(this.popupDate,a,this.popupDate.getMonth(),this.popupDate.getFullYear());this.setSelectedDate(this.popupDate);this.updatePopup();this.update();this.setNewSelectBoxDate();if(WDSCalendar.DisplayLinkedCalendar){if(this.linkCalendar==null){if(this.parentCalendar!=null){this.addGoAction?this.parentCalendar.open():this.parentCalendar.close();}else{this.close();}}else{this.open();}}else{this.addGoAction?this.open():this.close();}};WDSCalendar.prototype.setPopupMonthYear=function(a,b){this.setDateAndAdjustMaxDay(this.popupDate,this.popupDate.getDate(),a,b);this.setSelectedDate(this.popupDate);this.updatePopup();this.update();this.setNewSelectBoxDate();if(WDSCalendar.DisplayLinkedCalendar){if(this.linkCalendar==null){this.parentCalendar!=null?this.parentCalendar.open():this.open();}else{this.open();}}else{this.open();}};WDSCalendar.prototype.popupToggle=function(a){this.popupOpened?this.close():this.open(a);};WDSCalendar.prototype.open=function(a){this.updatePopup();this.getPopupObject().style.visibility="hidden";this.getPopupObject().style.display="";if(a!=null){this.refElement=a;}a=this.getObject();if(this.refElement!=null){a=this.refElement;}this.popupX=0;this.popupY=a.offsetHeight+1;for(var b=a;b.offsetParent!=null;){this.popupX+=b.offsetLeft;this.popupY+=b.offsetTop;b=b.offsetParent;}this.popupX+=a.offsetWidth-this.getPopupObject().offsetWidth;this.getPopupObject().style.left=this.popupX+WDSCalendar.PopupOffsetX+"px";this.getPopupObject().style.top=this.popupY+"px";this.popupOpened=true;if(WDSBrowser.ie&&!WDSBrowser.opera&&!WDSBrowser.mac){this.getPopupObject().firstChild.style.width=this.getPopupObject().offsetWidth+"px";this.getPopupObject().firstChild.style.height=this.getPopupObject().offsetHeight+"px";this.getPopupObject().style.zIndex="99";}this.getPopupObject().style.visibility="visible";};WDSCalendar.prototype.close=function(){this.getPopupObject().style.display="none";this.popupOpened=false;if(WDSCalendar.DisplayLinkedCalendar&&this.parentCalendar!=null){this.parentCalendar.popupOpened=false;}};function DateRange(a,b){this.from=a;this.to=b;}DateRange.prototype.toString=function(){return"\nfrom : "+this.from.toString()+"\nto   : "+this.to.toString();};DateRange.prototype.withinRange=function(a){return this.from.getTime()<=a.getTime()&&a.getTime()<=this.to.getTime();};DateRange.prototype.intersectsRange=function(a){return a.from.getTime()<=this.to.getTime()&&this.to.getTime()<=a.to.getTime()||a.from.getTime()<=this.from.getTime()&&this.from.getTime()<=a.to.getTime();};DateRange.prototype.intersectsRanges=function(a){for(var b=0;b<a.length;++b){if(this.intersectsRange(dateRangeArray[b])){return true;}}return false;};Date.listDays=new WDSList("DAYS");Date.listShortDays=new WDSList("SHORT_DAYS");Date.listMonths=new WDSList("MONTHS");Date.listShortMonths=new WDSList("SHORT_MONTHS");Date.listHours=new WDSList("HOURS");Date.prototype.padded=function(a){return a<10?"0"+a:a.toString();};Date.prototype.getFullMonth=function(){return Date.listMonths.get(this.padded(this.getMonth()+1));};Date.prototype.getShortMonth=function(){return Date.listShortMonths.get(this.padded(this.getMonth()+1));};Date.prototype.getFullDay=function(){return Date.listDays.get(this.getDay());};Date.prototype.getShortDay=function(){return Date.listShortDays.get(this.getDay());};Date.prototype.format=function(a){a=new String(a);a=a.replace(RegExp("H","g"),"||H");a=a.replace(RegExp("M","g"),"||M");a=a.replace(RegExp("S","g"),"||S");a=a.replace(RegExp("Y","g"),"||Y");a=a.replace(RegExp("D","g"),"||D");a=a.replace(RegExp("m","g"),"||m");a=a.replace("||H||H",this.padded(this.getHours()));a=a.replace("||H",this.getHours().toString());a=a.replace("||M||M",this.padded(this.getMinutes()));a=a.replace("||M",this.getMinutes().toString());a=a.replace("||S||S",this.padded(this.getSeconds()));a=a.replace("||S",this.getSeconds().toString());a=a.replace("||Y||Y||Y||Y",this.getFullYear().toString());a=a.replace("||Y||Y",this.getFullYear().toString().substring(2,4));a=a.replace("||D||D||D||D",this.getFullDay());a=a.replace("||D||D||D",this.getShortDay());a=a.replace("||D||D",this.padded(this.getDate()));a=a.replace("||D",this.getDate().toString());a=a.replace("||m||m||m||m",this.getFullMonth());a=a.replace("||m||m||m",this.getShortMonth());return a=a.replace("||m||m",this.padded(this.getMonth()+1));};Date.prototype.withinRange=function(a){return a.from.getTime()<=this.getTime()&&this.getTime()<=a.to.getTime();};Date.prototype.withinRanges=function(a){for(var b=0;b<a.length;++b){if(this.withinRange(a[b])){return true;}}return false;};Date.prototype.dateWithinRange=function(a){var b=new Date(a.from.getTime());a=new Date(a.to.getTime());b.setHours(0,0,0,0);a.setHours(23,59,59,999);return b.getTime()<=this.getTime()&&this.getTime()<=a.getTime();};Date.prototype.dateWithinRanges=function(a){for(var b=0;b<a.length;++b){if(this.dateWithinRange(a[b])){return true;}}return false;};Date.prototype.monthWithinRange=function(a){var b=new Date(a.from.getTime()),c=new Date(a.to.getTime());b.setDate(1);b.setHours(0,0,0,0);c.setMonth(a.to.getMonth()+1,1);c.setHours(0,0,0,0);c.setTime(c.getTime()-1);return b.getTime()<=this.getTime()&&this.getTime()<=c.getTime();};Date.prototype.monthWithinRanges=function(a){for(var b=0;b<a.length;++b){if(this.monthWithinRange(a[b])){return true;}}return false;};Date.prototype.addMonth=function(a){for(var b=new Date(this.getTime()),c=0;c<a;c+=1){b.nextMonth();}for(c=0;c>a;c-=1){b.prevMonth();}return b;};Date.prototype.nextMonth=function(){var a=this.getMonth();this.setMonth(a+1);this.getMonth()!=a+1&&this.getMonth()!=0&&this.setDate(0);};Date.prototype.prevMonth=function(){var a=this.getMonth();this.setMonth(a-1);if(this.getMonth()!=a-1&&(this.getMonth()!=11||a==11&&this.getDate()==1)){this.setDate(0);}};
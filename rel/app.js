var pxSvgIconString=pxSvgIconString||"";pxSvgIconString+='<g id="timezone-clock" data-size="49x49" class="timezone-picker-svg-svg ">	<circle class="st0" cx="24.186" cy="24.187" r="23.186"/><line class="st0" x1="24.186" y1="10.493" x2="24.186" y2="4.695"/><line class="st1" x1="32.522" y1="9.839" x2="33.979" y2="7.333"/><line class="st1" x1="38.603" y1="15.969" x2="41.121" y2="14.534"/><line class="st1" x1="38.421" y1="32.713" x2="40.908" y2="34.203"/><line class="st1" x1="32.211" y1="38.711" x2="33.612" y2="41.249"/><line class="st1" x1="15.471" y1="38.307" x2="13.948" y2="40.773"/><line class="st1" x1="9.556" y1="32.017" x2="7" y2="33.384"/><line class="st1" x1="10.184" y1="15.284" x2="7.738" y2="13.727"/><line class="st1" x1="16.552" y1="9.453" x2="15.22" y2="6.879"/><line class="st0" x1="37.88" y1="24.187" x2="43.678" y2="24.187"/><line class="st0" x1="24.186" y1="37.88" x2="24.186" y2="43.678"/><line class="st0" x1="10.493" y1="24.187" x2="4.695" y2="24.187"/><polyline class="st2" points="36.126,17.619 24.186,24.187 24.186,24.187 17.125,20.218 	"/></g>';var pxSvgIconString=pxSvgIconString||"";pxSvgIconString+="",function e(n,t,o){function i(r,a){if(!t[r]){if(!n[r]){var c="function"==typeof require&&require;if(!a&&c)return c(r,!0);if(s)return s(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var d=t[r]={exports:{}};n[r][0].call(d.exports,function(e){var t=n[r][1][e];return i(t?t:e)},d,d.exports,e,n,t,o)}return t[r].exports}for(var s="function"==typeof require&&require,r=0;r<o.length;r++)i(o[r]);return i}({1:[function(e,n,t){var o,i;i=e("jade/component"),o=function(){function e(e,n){var t;this.options=n,this.options.path||console.error("Missing /path/to timezone data!"),timezoneJS.timezone.zoneFileBasePath=this.options.path+"/tz/",timezoneJS.timezone.init(),this.$node=$(i()),e.append(this.$node),t=function(){return console.warn("No callback provided")},this.onReady=this.options.onReady||t,this.onHover=this.options.onHover||t,this.onSelected=this.options.onSelected||t,castShadows($(".shadow-parent"))}return e.prototype.build=function(){return this.tzp=this.$node.find("#zonepicker"),this.tzp.timezonePicker({jsonRootUrl:this.options.path+"/tz_json/",mapOptions:{zoom:2,maxZoom:5,minZoom:2,centerLat:0,centerLng:0,panControl:!1,mapTypeControl:!1,streetViewControl:!1},onReady:function(e){return function(){var n;switch(n=e.options.timezone,!1){case!!n:return e.tzp.timezonePicker("selectZone",moment.tz.guess()),e.onReady();case"UTC"!==n:return e.$node.find(".timezone").html("UTC"),e.$node.find(".timezone-time").html(moment().utc().format("hh:mm a"));default:return e.tzp.timezonePicker("selectZone",n),e.onReady()}}}(this),onHover:function(e){return function(n,t){return e.onHover(n,t)}}(this),onSelected:function(e){return function(n,t,o){var i;return i=moment(),i.milliseconds(i.milliseconds()-60*(i.utcOffset()-t)*1e3),e.$node.find(".timezone").html(n+" - "+new timezoneJS.Date(n).getTimezoneAbbreviation()),e.$node.find(".timezone-time").html(i.format("hh:mm a")),e.onSelected(n,t,o)}}(this)})},e}(),window.nanobox||(window.nanobox={}),nanobox.TimezonePicker=o},{"jade/component":2}],2:[function(e,n,t){n.exports=function(e){var n=[];return n.push('<div class="nanobox-dash-ui-timezone"><header class="shadow-parent"><img id="clock" data-src="timezone-clock" class="shadow-icon"/><div class="timezone-data"><div class="timezone"></div><div class="timezone-time"></div></div></header><div class="timezone-map"><div id="zonepicker" style="width:640px; height:480px;"></div></div></div>'),n.join("")}},{}]},{},[1]);
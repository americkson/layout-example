/*!
 * jQuery Form Plugin
 * version: 4.2.2
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,r){return void 0===r&&(r="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(r),r}:e(jQuery)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).closest("form").ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=r.form;if(i.clk=r,"image"===r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n=/\r?\n/g,i={};i.fileapi=void 0!==e('<input type="file">').get(0).files,i.formdata=void 0!==window.FormData;var o=!!e.fn.prop;e.fn.attr2=function(){if(!o)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t,r,n,s){function u(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;a<o;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function c(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(e){a("cannot get iframe.contentWindow document: "+e)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function i(){function t(){try{var e=n(v).readyState;a("state = "+e),e&&"uninitialized"===e.toLowerCase()&&setTimeout(t,50)}catch(e){a("Server abort: ",e," (",e.name,")"),s(L),j&&clearTimeout(j),j=void 0}}var r=p.attr2("target"),i=p.attr2("action"),o=p.attr("enctype")||p.attr("encoding")||"multipart/form-data";w.setAttribute("target",m),l&&!/post/i.test(l)||w.setAttribute("method","POST"),i!==f.url&&w.setAttribute("action",f.url),f.skipEncodingOverride||l&&!/post/i.test(l)||p.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),f.timeout&&(j=setTimeout(function(){T=!0,s(A)},f.timeout));var u=[];try{if(f.extraData)for(var c in f.extraData)f.extraData.hasOwnProperty(c)&&(e.isPlainObject(f.extraData[c])&&f.extraData[c].hasOwnProperty("name")&&f.extraData[c].hasOwnProperty("value")?u.push(e('<input type="hidden" name="'+f.extraData[c].name+'">',k).val(f.extraData[c].value).appendTo(w)[0]):u.push(e('<input type="hidden" name="'+c+'">',k).val(f.extraData[c]).appendTo(w)[0]));f.iframeTarget||h.appendTo(D),v.attachEvent?v.attachEvent("onload",s):v.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(e){document.createElement("form").submit.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",o),r?w.setAttribute("target",r):p.removeAttr("target"),e(u).remove()}}function s(t){if(!x.aborted&&!X){if((O=n(v))||(a("cannot access response document"),t=L),t===A&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t===L&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(O&&O.location.href!==f.iframeSrc||T){v.detachEvent?v.detachEvent("onload",s):v.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"===f.dataType||O.XMLDocument||e.isXMLDoc(O);if(a("isXml="+o),!o&&window.opera&&(null===O.body||!O.body.innerHTML)&&--C)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=O.body?O.body:O.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=O.XMLDocument?O.XMLDocument:O,o&&(f.dataType="xml"),x.getResponseHeader=function(e){return{"content-type":f.dataType}[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(f.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||f.textarea){var p=O.getElementsByTagName("textarea")[0];if(p)x.responseText=p.value,x.status=Number(p.getAttribute("status"))||x.status,x.statusText=p.getAttribute("statusText")||x.statusText;else if(l){var m=O.getElementsByTagName("pre")[0],g=O.getElementsByTagName("body")[0];m?x.responseText=m.textContent?m.textContent:m.innerText:g&&(x.responseText=g.textContent?g.textContent:g.innerText)}}else"xml"===c&&!x.responseXML&&x.responseText&&(x.responseXML=q(x.responseText));try{M=N(x,c,f)}catch(e){i="parsererror",x.error=r=e||i}}catch(e){a("error caught: ",e),i="error",x.error=r=e||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(f.success&&f.success.call(f.context,M,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,f])):i&&(void 0===r&&(r=x.statusText),f.error&&f.error.call(f.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,f,r])),d&&e.event.trigger("ajaxComplete",[x,f]),d&&!--e.active&&e.event.trigger("ajaxStop"),f.complete&&f.complete.call(f.context,x,i),X=!0,f.timeout&&clearTimeout(j),setTimeout(function(){f.iframeTarget?h.attr("src",f.iframeSrc):h.remove(),x.responseXML=null},100)}}}var u,c,f,d,m,h,v,x,y,b,T,j,w=p[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(c=0;c<g.length;c++)u=e(g[c]),o?u.prop("disabled",!1):u.removeAttr("disabled");(f=e.extend(!0,{},e.ajaxSettings,t)).context=f.context||f,m="jqFormIO"+(new Date).getTime();var k=w.ownerDocument,D=p.closest("body");if(f.iframeTarget?(b=(h=e(f.iframeTarget,k)).attr2("name"))?m=b:h.attr2("name",m):(h=e('<iframe name="'+m+'" src="'+f.iframeSrc+'" />',k)).css({position:"absolute",top:"-1000px",left:"-1000px"}),v=h[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{v.contentWindow.document.execCommand&&v.contentWindow.document.execCommand("Stop")}catch(e){}h.attr("src",f.iframeSrc),x.error=r,f.error&&f.error.call(f.context,x,r,t),d&&e.event.trigger("ajaxError",[x,f,r]),f.complete&&f.complete.call(f.context,x,r)}},(d=f.global)&&0==e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,f]),f.beforeSend&&!1===f.beforeSend.call(f.context,x,f))return f.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;(y=w.clk)&&(b=y.name)&&!y.disabled&&(f.extraData=f.extraData||{},f.extraData[b]=y.value,"image"===y.type&&(f.extraData[b+".x"]=w.clk_x,f.extraData[b+".y"]=w.clk_y));var A=1,L=2,F=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&F&&(f.extraData=f.extraData||{},f.extraData[E]=F),f.forceSync?i():setTimeout(i,10);var M,O,X,C=50,q=e.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},_=e.parseJSON||function(e){return window.eval("("+e+")")},N=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i=("xml"===r||!r)&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&(("json"===r||!r)&&n.indexOf("json")>=0?o=_(o):("script"===r||!r)&&n.indexOf("javascript")>=0&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var l,f,d,p=this;"function"==typeof t?t={success:t}:"string"==typeof t||!1===t&&arguments.length>0?(t={url:t,data:r,dataType:n},"function"==typeof s&&(t.success=s)):void 0===t&&(t={}),l=t.method||t.type||this.attr2("method"),(d=(d="string"==typeof(f=t.url||this.attr2("action"))?e.trim(f):"")||window.location.href||"")&&(d=(d.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:d,success:e.ajaxSettings.success,type:l||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&!1===t.beforeSerialize(this,t))return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var h=t.traditional;void 0===h&&(h=e.ajaxSettings.traditional);var v,g=[],x=this.formToArray(t.semantic,g,t.filtering);if(t.data){var y=e.isFunction(t.data)?t.data(x):t.data;t.extraData=y,v=e.param(y,h)}if(t.beforeSubmit&&!1===t.beforeSubmit(x,this,t))return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[x,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var b=e.param(x,h);v&&(b=b?b+"&"+v:v),"GET"===t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+b,t.data=null):t.data=b;var T=[];if(t.resetForm&&T.push(function(){p.resetForm()}),t.clearForm&&T.push(function(){p.clearForm(t.includeHidden)}),!t.dataType&&t.target){var j=t.success||function(){};T.push(function(r,a,n){var i=arguments,o=t.replaceTarget?"replaceWith":"html";e(t.target)[o](r).each(function(){j.apply(this,i)})})}else t.success&&(e.isArray(t.success)?e.merge(T,t.success):T.push(t.success));if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=T.length;i<o;i++)T[i].apply(n,[e,r,a||p,p])},t.error){var w=t.error;t.error=function(e,r,a){var n=t.context||this;w.apply(n,[e,r,a,p])}}if(t.complete){var S=t.complete;t.complete=function(e,r){var a=t.context||this;S.apply(a,[e,r,p])}}var k=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}).length>0,D="multipart/form-data",A=p.attr("enctype")===D||p.attr("encoding")===D,L=i.fileapi&&i.formdata;a("fileAPI :"+L);var F,E=(k||A)&&!L;!1!==t.iframe&&(t.iframe||E)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){F=c(x)}):F=c(x):F=(k||A)&&L?function(r){for(var a=new FormData,n=0;n<r.length;n++)a.append(r[n].name,r[n].value);if(t.extraData){var i=u(t.extraData);for(n=0;n<i.length;n++)i[n]&&a.append(i[n][0],i[n][1])}t.data=null;var o=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:l||"POST"});t.uploadProgress&&(o.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),o.data=null;var s=o.beforeSend;return o.beforeSend=function(e,r){t.formData?r.data=t.formData:r.data=a,s&&s.call(this,e,r)},e.ajax(o)}(x):e.ajax(t),p.removeData("jqxhr").data("jqxhr",F);for(var M=0;M<g.length;M++)g[M]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n,i,o,s){if(("string"==typeof n||!1===n&&arguments.length>0)&&(n={url:n,data:i,dataType:o},"function"==typeof s&&(n.success=s)),n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var u={s:this.selector,c:this.context};return!e.isReady&&u.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(u.s,u.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().on("submit.form-plugin",n,t).on("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r,a){var n=[];if(0===this.length)return n;var o,s=this[0],u=this.attr("id"),c=t||void 0===s.elements?s.getElementsByTagName("*"):s.elements;if(c&&(c=e.makeArray(c)),u&&(t||/(Edge|Trident)\//.test(navigator.userAgent))&&(o=e(':input[form="'+u+'"]').get()).length&&(c=(c||[]).concat(o)),!c||!c.length)return n;e.isFunction(a)&&(c=e.map(c,a));var l,f,d,p,m,h,v;for(l=0,h=c.length;l<h;l++)if(m=c[l],(d=m.name)&&!m.disabled)if(t&&s.clk&&"image"===m.type)s.clk===m&&(n.push({name:d,value:e(m).val(),type:m.type}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}));else if((p=e.fieldValue(m,!0))&&p.constructor===Array)for(r&&r.push(m),f=0,v=p.length;f<v;f++)n.push({name:d,value:p[f]});else if(i.fileapi&&"file"===m.type){r&&r.push(m);var g=m.files;if(g.length)for(f=0;f<g.length;f++)n.push({name:d,value:g[f],type:m.type});else n.push({name:d,value:"",type:m.type})}else null!==p&&void 0!==p&&(r&&r.push(m),n.push({name:d,value:p,type:m.type,required:m.required}));if(!t&&s.clk){var x=e(s.clk),y=x[0];(d=y.name)&&!y.disabled&&"image"===y.type&&(n.push({name:d,value:x.val()}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}))}return n},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor===Array)for(var i=0,o=n.length;i<o;i++)r.push({name:a,value:n[i]});else null!==n&&void 0!==n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;a<n;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor===Array&&!o.length||(o.constructor===Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,i=t.type,o=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"===i||"button"===i||("checkbox"===i||"radio"===i)&&!t.checked||("submit"===i||"image"===i)&&t.form&&t.form.clk!==t||"select"===o&&-1===t.selectedIndex))return null;if("select"===o){var s=t.selectedIndex;if(s<0)return null;for(var u=[],c=t.options,l="select-one"===i,f=l?s+1:c.length,d=l?s:0;d<f;d++){var p=c[d];if(p.selected&&!p.disabled){var m=p.value;if(m||(m=p.attributes&&p.attributes.value&&!p.attributes.value.specified?p.text:p.value),l)return m;u.push(m)}}return u}return e(t).val().replace(n,"\r\n")},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"===n?this.value="":"checkbox"===a||"radio"===a?this.checked=!1:"select"===n?this.selectedIndex=-1:"file"===a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(!0===t&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){var t=e(this),r=this.tagName.toLowerCase();switch(r){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var a=t.parents("select");return a.length&&a[0].multiple?"option"===r?this.selected=this.defaultSelected:t.find("option").resetForm():a.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var n=e(t.attr("for")),i=t.find("input,select,textarea");return n[0]&&i.unshift(n[0]),i.resetForm(),!0;case"form":return("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"===r||"radio"===r)this.checked=t;else if("option"===this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"===a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});

;
/**
 * @file entity_browser.common.js
 *
 * Common helper functions used by various parts of entity browser.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.entityBrowser = {};

  /**
   * Command to refresh an entity_browser_entity_reference field widget.
   *
   * @param {Drupal.Ajax} [ajax]
   *   The ajax object.
   * @param {object} response
   *   Object holding the server response.
   * @param {string} response.details_id
   *   The ID for the details element.
   * @param {number} [status]
   *   The HTTP status code.
   */
  Drupal.AjaxCommands.prototype.entity_browser_value_updated = function (ajax, response, status) {
    $('#' + response.details_id)
      .find('input[type="hidden"][name$="[target_id]"]')
      .trigger('entity_browser_value_updated');
  };

  /**
   * Reacts on "entities selected" event.
   *
   * @param {object} event
   *   Event object.
   * @param {string} uuid
   *   Entity browser UUID.
   * @param {array} entities
   *   Array of selected entities.
   */
  Drupal.entityBrowser.selectionCompleted = function (event, uuid, entities) {
    var selected_entities = $.map(entities, function (item) {
      return item[2] + ':' + item[0];
    });
    // @todo Use uuid here. But for this to work we need to move eb uuid
    // generation from display to eb directly. When we do this, we can change
    // \Drupal\entity_browser\Plugin\Field\FieldWidget\EntityReferenceBrowserWidget::formElement
    // also.
    // Checking if cardinality is set - assume unlimited.
    var cardinality = isNaN(parseInt(drupalSettings['entity_browser'][uuid]['cardinality'])) ? -1 : parseInt(drupalSettings['entity_browser'][uuid]['cardinality']);

    // Get field widget selection mode.
    var selection_mode = drupalSettings['entity_browser'][uuid]['selection_mode'];

    // Update value form element with new entity IDs.
    var selector = drupalSettings['entity_browser'][uuid]['selector'] ? $(drupalSettings['entity_browser'][uuid]['selector']) : $(this).parent().parent().find('input[type*=hidden]');
    var entity_ids = selector.val();
    var existing_entities = (entity_ids.length !== 0) ? entity_ids.split(' ') : [];

    entity_ids = Drupal.entityBrowser.updateEntityIds(
      existing_entities,
      selected_entities,
      selection_mode,
      cardinality
    );

    selector.val(entity_ids);
    selector.trigger('entity_browser_value_updated');
  };

  /**
   * Updates the list of selected entities.
   *
   * It uses existing selection and selected entities in entity browser. Also
   * considers cardinality and used selection mode.
   *
   * Note: Selection modes are defined in EntityBrowserElement class and same
   * options should be used here to determine what action will be performed.
   * Default action is append ('selection_append').
   *
   * @param {Array} existing_entities
   *   List of existing entity IDs.
   * @param {Array} selected_entities
   *   The entities that are selected and entity browser.
   * @param {string} selection_mode
   *   Selection mode defined by entity browser field widget.
   * @param {int} cardinality
   *   The maximal amount of items the field can store.
   *
   * @return {string}
   *   List of entities as a string, separated by space.
   */
  Drupal.entityBrowser.updateEntityIds = function (existing_entities, selected_entities, selection_mode, cardinality) {
    var combined_entities;

    if (selection_mode === 'selection_edit') {
      // Propagate new selected entities.
      combined_entities = selected_entities;
    }
    else if (selection_mode === 'selection_prepend') {
      // Prepend selected entities to existing list of entities.
      combined_entities = selected_entities.concat(existing_entities);
    }
    else {
      // Append selected entities to existing list of entities.
      combined_entities = existing_entities.concat(selected_entities);
    }

    // Having more elements than cardinality should never happen, because
    // server side authentication should prevent it, but we handle it here
    // anyway.
    if (cardinality > 0 && combined_entities.length > cardinality) {
      combined_entities = combined_entities.slice(0, cardinality);
    }

    return combined_entities.join(' ');
  };

  /**
   * Reacts on "entities selected" event.
   *
   * @param {object} element
   *   Element to bind on.
   * @param {array} callbacks
   *   List of callbacks.
   * @param {string} event_name
   *   Name of event to bind to.
   */
  Drupal.entityBrowser.registerJsCallbacks = function (element, callbacks, event_name) {
    // JS callbacks are registred as strings. We need to split their names and
    // find actual functions.
    for (var i = 0; i < callbacks.length; i++) {
      var callback = callbacks[i].split('.');
      var fn = window;

      for (var j = 0; j < callback.length; j++) {
        fn = fn[callback[j]];
      }

      if (typeof fn === 'function') {
        $(element).bind(event_name, fn);
      }
    }
  };

}(jQuery, Drupal, drupalSettings));
;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./mouse","../data","../ie","../scroll-parent","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.sortable",a.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(a,b,c){return a>=b&&a<b+c},_isFloating:function(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(a,b){this._super(a,b),"handle"===a&&this._setHandleClassName()},_setHandleClassName:function(){var b=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),a.each(this.items,function(){b._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(b,c){var d=null,e=!1,f=this;return!this.reverting&&(!this.options.disabled&&"static"!==this.options.type&&(this._refreshItems(b),a(b.target).parents().each(function(){if(a.data(this,f.widgetName+"-item")===f)return d=a(this),!1}),a.data(b.target,f.widgetName+"-item")===f&&(d=a(b.target)),!!d&&(!(this.options.handle&&!c&&(a(this.options.handle,d).find("*").addBack().each(function(){this===b.target&&(e=!0)}),!e))&&(this.currentItem=d,this._removeCurrentsFromItems(),!0))))},_mouseStart:function(b,c,d){var e,f,g=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,g.cursorAt&&this._adjustOffsetFromHelper(g.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),g.containment&&this._setContainment(),g.cursor&&"auto"!==g.cursor&&(f=this.document.find("body"),this.storedCursor=f.css("cursor"),f.css("cursor",g.cursor),this.storedStylesheet=a("<style>*{ cursor: "+g.cursor+" !important; }</style>").appendTo(f)),g.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",g.opacity)),g.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",g.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!d)for(e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("activate",b,this._uiHash(this));return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag:function(b){var c,d,e,f,g=this.options,h=!1;for(this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<g.scrollSensitivity?this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop+g.scrollSpeed:b.pageY-this.overflowOffset.top<g.scrollSensitivity&&(this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop-g.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<g.scrollSensitivity?this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft+g.scrollSpeed:b.pageX-this.overflowOffset.left<g.scrollSensitivity&&(this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft-g.scrollSpeed)):(b.pageY-this.document.scrollTop()<g.scrollSensitivity?h=this.document.scrollTop(this.document.scrollTop()-g.scrollSpeed):this.window.height()-(b.pageY-this.document.scrollTop())<g.scrollSensitivity&&(h=this.document.scrollTop(this.document.scrollTop()+g.scrollSpeed)),b.pageX-this.document.scrollLeft()<g.scrollSensitivity?h=this.document.scrollLeft(this.document.scrollLeft()-g.scrollSpeed):this.window.width()-(b.pageX-this.document.scrollLeft())<g.scrollSensitivity&&(h=this.document.scrollLeft(this.document.scrollLeft()+g.scrollSpeed))),h!==!1&&a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),c=this.items.length-1;c>=0;c--)if(d=this.items[c],e=d.item[0],f=this._intersectsWithPointer(d),f&&d.instance===this.currentContainer&&!(e===this.currentItem[0]||this.placeholder[1===f?"next":"prev"]()[0]===e||a.contains(this.placeholder[0],e)||"semi-dynamic"===this.options.type&&a.contains(this.element[0],e))){if(this.direction=1===f?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(d))break;this._rearrange(b,d),this._trigger("change",b,this._uiHash());break}return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){if(b){if(a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b),this.options.revert){var d=this,e=this.placeholder.offset(),f=this.options.axis,g={};f&&"x"!==f||(g.left=e.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),f&&"y"!==f||(g.top=e.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,a(this.helper).animate(g,parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new a.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--)this.containers[b]._trigger("deactivate",null,this._uiHash(this)),this.containers[b].containerCache.over&&(this.containers[b]._trigger("out",null,this._uiHash(this)),this.containers[b].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[\-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l="x"===this.options.axis||d+j>h&&d+j<i,m="y"===this.options.axis||b+k>f&&b+k<g,n=l&&m;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?n:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(a){var b,c,d="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height),e="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width),f=d&&e;return!!f&&(b=this._getDragVerticalDirection(),c=this._getDragHorizontalDirection(),this.floating?"right"===c||"down"===b?2:1:b&&("down"===b?2:1))},_intersectsWithSides:function(a){var b=this._isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height),c=this._isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width),d=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();return this.floating&&e?"right"===e&&c||"left"===e&&!c:d&&("down"===d&&b||"up"===d&&!b)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return 0!==a&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return 0!==a&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor===String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){function c(){h.push(this)}var d,e,f,g,h=[],i=[],j=this._connectWith();if(j&&b)for(d=j.length-1;d>=0;d--)for(f=a(j[d],this.document[0]),e=f.length-1;e>=0;e--)g=a.data(f[e],this.widgetFullName),g&&g!==this&&!g.options.disabled&&i.push([a.isFunction(g.options.items)?g.options.items.call(g.element):a(g.options.items,g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),g]);for(i.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),d=i.length-1;d>=0;d--)i[d][0].each(c);return a(h)},_removeCurrentsFromItems:function(){var b=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=a.grep(this.items,function(a){for(var c=0;c<b.length;c++)if(b[c]===a.item[0])return!1;return!0})},_refreshItems:function(b){this.items=[],this.containers=[this];var c,d,e,f,g,h,i,j,k=this.items,l=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],m=this._connectWith();if(m&&this.ready)for(c=m.length-1;c>=0;c--)for(e=a(m[c],this.document[0]),d=e.length-1;d>=0;d--)f=a.data(e[d],this.widgetFullName),f&&f!==this&&!f.options.disabled&&(l.push([a.isFunction(f.options.items)?f.options.items.call(f.element[0],b,{item:this.currentItem}):a(f.options.items,f.element),f]),this.containers.push(f));for(c=l.length-1;c>=0;c--)for(g=l[c][1],h=l[c][0],d=0,j=h.length;d<j;d++)i=a(h[d]),i.data(this.widgetName+"-item",g),k.push({item:i,instance:g,width:0,height:0,left:0,top:0})},refreshPositions:function(b){this.floating=!!this.items.length&&("x"===this.options.axis||this._isFloating(this.items[0].item)),this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var c,d,e,f;for(c=this.items.length-1;c>=0;c--)d=this.items[c],d.instance!==this.currentContainer&&this.currentContainer&&d.item[0]!==this.currentItem[0]||(e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item,b||(d.width=e.outerWidth(),d.height=e.outerHeight()),f=e.offset(),d.left=f.left,d.top=f.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(c=this.containers.length-1;c>=0;c--)f=this.containers[c].element.offset(),this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight();return this},_createPlaceholder:function(b){b=b||this;var c,d=b.options;d.placeholder&&d.placeholder.constructor!==String||(c=d.placeholder,d.placeholder={element:function(){var d=b.currentItem[0].nodeName.toLowerCase(),e=a("<"+d+">",b.document[0]);return b._addClass(e,"ui-sortable-placeholder",c||b.currentItem[0].className)._removeClass(e,"ui-sortable-helper"),"tbody"===d?b._createTrPlaceholder(b.currentItem.find("tr").eq(0),a("<tr>",b.document[0]).appendTo(e)):"tr"===d?b._createTrPlaceholder(b.currentItem,e):"img"===d&&e.attr("src",b.currentItem.attr("src")),c||e.css("visibility","hidden"),e},update:function(a,e){c&&!d.forcePlaceholderSize||(e.height()||e.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10)),e.width()||e.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10)))}}),b.placeholder=a(d.placeholder.element.call(b.element,b.currentItem)),b.currentItem.after(b.placeholder),d.placeholder.update(b,b.placeholder)},_createTrPlaceholder:function(b,c){var d=this;b.children().each(function(){a("<td>&#160;</td>",d.document[0]).attr("colspan",a(this).attr("colspan")||1).appendTo(c)})},_contactContainers:function(b){var c,d,e,f,g,h,i,j,k,l,m=null,n=null;for(c=this.containers.length-1;c>=0;c--)if(!a.contains(this.currentItem[0],this.containers[c].element[0]))if(this._intersectsWith(this.containers[c].containerCache)){if(m&&a.contains(this.containers[c].element[0],m.element[0]))continue;m=this.containers[c],n=c}else this.containers[c].containerCache.over&&(this.containers[c]._trigger("out",b,this._uiHash(this)),this.containers[c].containerCache.over=0);if(m)if(1===this.containers.length)this.containers[n].containerCache.over||(this.containers[n]._trigger("over",b,this._uiHash(this)),this.containers[n].containerCache.over=1);else{for(e=1e4,f=null,k=m.floating||this._isFloating(this.currentItem),g=k?"left":"top",h=k?"width":"height",l=k?"pageX":"pageY",d=this.items.length-1;d>=0;d--)a.contains(this.containers[n].element[0],this.items[d].item[0])&&this.items[d].item[0]!==this.currentItem[0]&&(i=this.items[d].item.offset()[g],j=!1,b[l]-i>this.items[d][h]/2&&(j=!0),Math.abs(b[l]-i)<e&&(e=Math.abs(b[l]-i),f=this.items[d],this.direction=j?"up":"down"));if(!f&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[n])return void(this.currentContainer.containerCache.over||(this.containers[n]._trigger("over",b,this._uiHash()),this.currentContainer.containerCache.over=1));f?this._rearrange(b,f,null,!0):this._rearrange(b,null,this.containers[n].element,!0),this._trigger("change",b,this._uiHash()),this.containers[n]._trigger("change",b,this._uiHash(this)),this.currentContainer=this.containers[n],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[n]._trigger("over",b,this._uiHash(this)),this.containers[n].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):"clone"===c.helper?this.currentItem.clone():this.currentItem;return d.parents("body").length||a("parent"!==c.appendTo?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),d[0].style.width&&!c.forceHelperSize||d.width(this.currentItem.width()),d[0].style.height&&!c.forceHelperSize||d.height(this.currentItem.height()),d},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&a.ui.ie)&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options;"parent"===e.containment&&(e.containment=this.helper[0].parentNode),"document"!==e.containment&&"window"!==e.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===e.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===e.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(e.containment)||(b=a(e.containment)[0],c=a(e.containment).offset(),d="hidden"!==a(b).css("overflow"),this.containment=[c.left+(parseInt(a(b).css("borderLeftWidth"),10)||0)+(parseInt(a(b).css("paddingLeft"),10)||0)-this.margins.left,c.top+(parseInt(a(b).css("borderTopWidth"),10)||0)+(parseInt(a(b).css("paddingTop"),10)||0)-this.margins.top,c.left+(d?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(a(b).css("borderLeftWidth"),10)||0)-(parseInt(a(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,c.top+(d?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(a(b).css("borderTopWidth"),10)||0)-(parseInt(a(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(b,c){c||(c=this.position);var d="absolute"===b?1:-1,e="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=/(html|body)/i.test(e[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():f?0:e.scrollTop())*d,left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():f?0:e.scrollLeft())*d}},_generatePosition:function(b){var c,d,e=this.options,f=b.pageX,g=b.pageY,h="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(h[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top)),e.grid&&(c=this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1],g=this.containment?c-this.offset.click.top>=this.containment[1]&&c-this.offset.click.top<=this.containment[3]?c:c-this.offset.click.top>=this.containment[1]?c-e.grid[1]:c+e.grid[1]:c,d=this.originalPageX+Math.round((f-this.originalPageX)/e.grid[0])*e.grid[0],f=this.containment?d-this.offset.click.left>=this.containment[0]&&d-this.offset.click.left<=this.containment[2]?d:d-this.offset.click.left>=this.containment[0]?d-e.grid[0]:d+e.grid[0]:d)),{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():i?0:h.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():i?0:h.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this.counter;this._delay(function(){e===this.counter&&this.refreshPositions(!d)})},_clear:function(a,b){function c(a,b,c){return function(d){c._trigger(a,d,b._uiHash(b))}}this.reverting=!1;var d,e=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(d in this._storedCSS)"auto"!==this._storedCSS[d]&&"static"!==this._storedCSS[d]||(this._storedCSS[d]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!b&&e.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||b||e.push(function(a){this._trigger("update",a,this._uiHash())}),this!==this.currentContainer&&(b||(e.push(function(a){this._trigger("remove",a,this._uiHash())}),e.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.currentContainer)),e.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.currentContainer)))),d=this.containers.length-1;d>=0;d--)b||e.push(c("deactivate",this,this.containers[d])),this.containers[d].containerCache.over&&(e.push(c("out",this,this.containers[d])),this.containers[d].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,b||this._trigger("beforeStop",a,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!b){for(d=0;d<e.length;d++)e[d].call(this,a);this._trigger("stop",a,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}})});;
/**
 * @file entity_browser.entity_reference.js
 *
 * Defines the behavior of the entity reference widget that utilizes entity
 * browser.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Registers behaviours related to entity reference field widget.
   */
  Drupal.behaviors.entityBrowserEntityReference = {
    attach: function (context) {
      $(context).find('.field--widget-entity-browser-entity-reference').each(function () {
        $(this).find('.entities-list.sortable').sortable({
          stop: Drupal.entityBrowserEntityReference.entitiesReordered
        });
      });
      // The AJAX callback will give us a flag when we need to re-open the
      // browser, most likely due to a "Replace" button being clicked.
      if (typeof drupalSettings.entity_browser_reopen_browser !== 'undefined' &&  drupalSettings.entity_browser_reopen_browser) {
        var data_drupal_selector = '[data-drupal-selector^="edit-' + drupalSettings.entity_browser_reopen_browser.replace(/_/g, '-') + '-entity-browser-entity-browser-' + '"][data-uuid]';
        var $launch_browser_element = $(context).find(data_drupal_selector);
        if ($launch_browser_element.attr('data-uuid') in drupalSettings.entity_browser && !drupalSettings.entity_browser[$launch_browser_element.attr('data-uuid')].auto_open) {
          $launch_browser_element.click();
        }
        // In case this is inside a fieldset closed by default, open it so the
        // user doesn't need to guess the browser is open but hidden there.
        var $fieldset_summary = $launch_browser_element.closest('details').find('summary');
        if ($fieldset_summary.length && $fieldset_summary.attr('aria-expanded') === 'false') {
          $fieldset_summary.click();
        }
      }
    }
  };

  Drupal.entityBrowserEntityReference = {};

  /**
   * Reacts on sorting of the entities.
   *
   * @param {object} event
   *   Event object.
   * @param {object} ui
   *   Object with detailed information about the sort event.
   */
  Drupal.entityBrowserEntityReference.entitiesReordered = function (event, ui) {
    var items = $(this).find('.item-container');
    var ids = [];
    for (var i = 0; i < items.length; i++) {
      ids[i] = $(items[i]).attr('data-entity-id');
    }

    $(this).parent().parent().find('input[type*=hidden][name*="[target_id]"]').val(ids.join(' '));
  };

}(jQuery, Drupal));
;
/**
 * @file entity_browser.modal.js
 *
 * Defines the behavior of the entity browser's modal display.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.entityBrowserModal = {};

  Drupal.AjaxCommands.prototype.select_entities = function (ajax, response, status) {
    var uuid = drupalSettings.entity_browser.modal.uuid;

    $(':input[data-uuid="' + uuid + '"]').trigger('entities-selected', [uuid, response.entities])
      .removeClass('entity-browser-processed').unbind('entities-selected');
  };

  /**
   * Registers behaviours related to modal display.
   */
  Drupal.behaviors.entityBrowserModal = {
    attach: function (context) {
      _.each(drupalSettings.entity_browser.modal, function (instance) {
        _.each(instance.js_callbacks, function (callback) {
          // Get the callback.
          callback = callback.split('.');
          var fn = window;

          for (var j = 0; j < callback.length; j++) {
            fn = fn[callback[j]];
          }

          if (typeof fn === 'function') {
            $(':input[data-uuid="' + instance.uuid + '"]').not('.entity-browser-processed')
              .bind('entities-selected', fn).addClass('entity-browser-processed');
          }
        });
        if (instance.auto_open) {
          $('input[data-uuid="' + instance.uuid + '"]').click();
        }
      });
    }
  };

  /**
   * Registers behaviours related to modal open and windows resize for fluid modal.
   */
  Drupal.behaviors.fluidModal = {
    attach: function (context) {
      var $window = $(window);
      var $document = $(document);

      // Be sure to run only once per window document.
      if ($document.once('fluid-modal').length === 0) {
        return;
      }

      // Recalculate dialog size on window resize.
      $window.resize(function (event) {
        Drupal.entityBrowserModal.fluidDialog();
      });

      // Catch dialog if opened within a viewport smaller than the dialog width
      // and recalculate size of all open dialogs.
      $(document).on('dialogopen', '.ui-dialog', function (event, ui) {
        Drupal.entityBrowserModal.fluidDialog();
      });

      // Disable scrolling of the whole browser window to not interfere with the
      // iframe scrollbar.
      $window.on({
        'dialog:aftercreate': function (event, dialog, $element, settings) {
          $('body').css({overflow: 'hidden'});
        },
        'dialog:beforeclose': function (event, dialog, $element) {
          $('body').css({overflow: 'inherit'});
        }
      });
    }
  };

  /**
   * Recalculates size of the modal.
   */
  Drupal.entityBrowserModal.fluidDialog = function () {

    var $visible = $('.ui-dialog:visible');
    // For each open dialog.
    $visible.each(function () {
      var $this = $(this);
      var dialog = $this.find('.ui-dialog-content').data('ui-dialog');
      // If fluid option == true.
      if (dialog.options.fluid) {
        var wWidth = $(window).width();
        // Check window width against dialog width.
        if (dialog.options.maxWidth && (wWidth > parseInt(dialog.options.maxWidth) + 50)) {
          dialog.option('width', dialog.options.maxWidth);
        }
        else {
          // If no maxWidth is defined, make it responsive.
          dialog.option('width', '92%');
        }

        var vHeight = $(window).height();
        // Check window width against dialog width.
        if (dialog.options.maxHeight && vHeight > (parseInt(dialog.options.maxHeight) + 50)) {
          dialog.option('height', dialog.options.maxHeight);
        }
        else {
          // If no maxHeight is defined, make it responsive.
          dialog.option('height', .92 * vHeight);

          // Because there is no iframe height 100% in HTML 5, we have to set
          // the height of the iframe as well.
          var contentHeight = $this.find('.ui-dialog-content').height();
          $this.find('iframe').css('height', contentHeight);
        }

        // Reposition dialog.
        dialog.option('position', dialog.options.position);
      }
    });
  };

}(jQuery, Drupal, drupalSettings));
;
!function(a,b){"use strict";function c(b){var c=a(b.target),d=c.attr("id"),e=c.find('iframe[name*="slick_browser"]');d.indexOf("slick-browser")!==-1&&(a("html")["dialogopen"===b.type?"addClass":"removeClass"]("sb-html-dialog"),a(".ui-dialog")["dialogopen"===b.type?"addClass":"removeClass"]("ui-dialog--sb"),c.addClass("media--loading").css("padding",0),window.setTimeout(function(){e.length&&e.on("load",function(){c.removeClass("media--loading")})},600)),"dialogclose"===b.type&&a(".media--loading").removeClass("media--loading")}b.behaviors.slickBrowserModal={attach:function(b){a(document).on("dialogopen",".ui-dialog",c).on("dialogclose",".ui-dialog",c)},detach:function(b,c,d){"unload"===d&&a("html").removeClass("sb-html-dialog")}}}(jQuery,Drupal);
;

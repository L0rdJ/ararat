/*
YUI 3.4.1 (build 4118)
Copyright 2011 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("history-hash-ie",function(g){if(g.UA.ie&&!g.HistoryBase.nativeHashChange){var c=g.Do,d=YUI.namespace("Env.HistoryHash"),b=g.HistoryHash,e=d._iframe,f=g.config.win,a=f.location;b.getIframeHash=function(){if(!e||!e.contentWindow){return"";}var h=b.hashPrefix,i=e.contentWindow.location.hash.substr(1);return h&&i.indexOf(h)===0?i.replace(h,""):i;};b._updateIframe=function(i,h){var j=e&&e.contentWindow&&e.contentWindow.document,k=j&&j.location;if(!j||!k){return;}if(h){k.replace(i.charAt(0)==="#"?i:"#"+i);}else{j.open().close();k.hash=i;}};c.before(b._updateIframe,b,"replaceHash",b,true);if(!e){g.on("domready",function(){var h=b.getHash();e=d._iframe=g.Node.getDOMNode(g.Node.create('<iframe src="javascript:0" style="display:none" height="0" width="0" tabindex="-1" title="empty"/>'));g.config.doc.documentElement.appendChild(e);b._updateIframe(h||"#");g.on("hashchange",function(i){h=i.newHash;if(b.getIframeHash()!==h){b._updateIframe(h);}},f);g.later(50,null,function(){var i=b.getIframeHash();if(i!==h){b.setHash(i);}},null,true);});}}},"3.4.1",{requires:["history-hash","node-base"]});

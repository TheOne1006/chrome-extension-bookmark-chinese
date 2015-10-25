'use strict';

// url统计
var urlHref,urlHostName;
urlHref = location.href;
urlHostName = location.hostname;

if(urlHref && urlHostName) {
  chrome.runtime.sendMessage({
    'action':'statisticalUrl',
    'data':{
      'href':urlHref,
      'hostName':urlHostName
    }
  });
}

// 活跃事件统计
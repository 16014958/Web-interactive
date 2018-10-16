define(["require","exports","tslib","modules/clean/react/file_comments/logger","modules/clean/storage","modules/constants/comments_panel"],function(e,r,t,n,o,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n=t.__importDefault(n);var i=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var t=e[0],o=t.fileActivityKey,i=t.commentActivityKey,l=null!=i?i:null,s=t.originType;return n.default.log_event(a.FILE_ACTIVITY_LOG_EVENT_TYPE.CLIENT_SIGN_UP_MODAL,o,l,s)};r.logSignUpModal=i;var l=function(e){var r=e.name,t=e.fileActivityKey,n=e.args;try{var a=void 0,i="commenting_actions:v1:"+t,l=null!=(a=o.SessionStorage.get(i))?a:[];return l.push({name:r,args:n}),o.SessionStorage.set(i,l)}catch(e){return void console.error(e)}};r.saveActionCreator=l;var s=function(e){var r=e.actionCreators,t=e.fileActivityKey;try{var n=void 0,a="commenting_actions:v1:"+t,i=null!=(n=o.SessionStorage.get(a))?n:[];return o.SessionStorage.set(a,null),i.forEach(function(e){var t=e.name,n=e.args;return r[t].apply(r,Array.from(n||[]))})}catch(e){return void console.error(e)}};r.replayActionCreators=s});
//# sourceMappingURL=logged_out_utils.min.js-vfl3kUHLL.map
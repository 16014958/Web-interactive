define(["require","exports","tslib","external/react","modules/core/i18n","modules/clean/react_format","modules/clean/react/file_activity_stream/file_activity_stream_card","modules/clean/react/file_activity_stream/utils"],function(e,t,a,r,i,s,n,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importStar(r);var m=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),Object.defineProperty(t.prototype,"message",{get:function(){var e=this.props.activity.user;return l.isViewingUser(this.props)?s.reactFormat(i._("<strong>You</strong> renamed this file"),{strong:r.createElement("strong",null)}):s.reactFormat(i._("<strong>%(name)s</strong> renamed this file"),{strong:r.createElement("strong",null),name:e.display_name})},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this.props.activity,t=e.last_filename&&r.createElement("div",{className:"file_rename_activity_stream_card__last_filename"},e.last_filename);return r.createElement(n.FileActivityStreamCard,{user:e.user,timestamp:e.timestamp,className:"file_rename_activity_stream_card",message:this.message},r.createElement(n.FileActivityStreamCard.Detail,{placeholderClass:"file_activity_stream_card__image_placeholder"},r.createElement("div",{style:{flex:"1"}},r.createElement("div",{className:"file_rename_activity_stream_card__filename"},e.filename),t)))},t})(r.Component);t.FileRenameActivityCard=m});
//# sourceMappingURL=file_rename_activity_card.min.js-vfl0FmVQJ.map
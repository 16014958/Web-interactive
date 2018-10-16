define(["require","exports","tslib","external/react","modules/core/i18n","modules/clean/react_format","modules/clean/react/file_activity_stream/file_activity_stream_card","modules/clean/react/file_activity_stream/utils","modules/clean/react/file_activity_stream/breadcrumbs"],function(e,t,r,a,i,s,n,l,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importStar(a);var o=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),Object.defineProperty(t.prototype,"message",{get:function(){var e=this.props.activity.user;return l.isViewingUser(this.props)?s.reactFormat(i._("<strong>You</strong> added this file"),{strong:a.createElement("strong",null)}):s.reactFormat(i._("<strong>%(name)s</strong> added this file"),{strong:a.createElement("strong",null),name:e.display_name})},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this.props,t=e.activity,r=e.viewingUser;return a.createElement(n.FileActivityStreamCard,{user:t.user,timestamp:t.timestamp,className:"file_add_activity_stream_card",message:this.message},a.createElement(n.FileActivityStreamCard.Detail,{placeholderClass:"file_activity_stream_card__image_placeholder"},a.createElement(c.Breadcrumbs,{filepath:t.path,maxWidth:19,user:r})))},t})(a.Component);t.FileAddActivityCard=o});
//# sourceMappingURL=file_add_activity_card.min.js-vflfkVPpk.map
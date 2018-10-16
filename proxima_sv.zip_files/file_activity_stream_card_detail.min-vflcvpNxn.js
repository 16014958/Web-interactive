define(["require","exports","tslib","external/react","external/prop-types","modules/clean/react/file_activity_stream/utils"],function(e,t,i,r,a,s){"use strict";function n(e){var i=e.detail,a=e.title;return r.createElement("div",{className:"file_activity_stream_card_detail_entity"},r.createElement("div",{className:"file_activity_stream_card_detail_entity__title"},r.createElement("strong",null,a)),r.createElement("div",{className:t.ENTITY_DETAIL_CLASS_NAME},i))}Object.defineProperty(t,"__esModule",{value:!0}),r=i.__importStar(r),a=i.__importStar(a),t.ENTITY_DETAIL_CLASS_NAME="file_activity_stream_card_detail_entity__detail";var l=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.children,i=e.email,a=e.group,n=e.icon,l=e.placeholderClass,_=e.user,c=i||a||_?s.renderAvatar(i||a||_,{dimension:16}):n?s.renderIcon(n):l?r.createElement("div",{className:l}):null;return r.createElement("div",{className:"file_activity_stream_card__inner"},r.createElement("div",{className:"file_activity_stream_card__avatar"},c),t)},t.Entity=n,t.propTypes=a.oneOfType([a.shape({user:a.shape({display_name:a.string.isRequired,photo_url:a.string})}),a.shape({group:a.shape({is_team_group:a.bool.isRequired,name:a.string.isRequired})}),a.shape({email:a.string}),a.shape({icon:a.shape({group:a.string.isRequired,name:a.string.isRequired})}),a.shape({placeholderClass:a.string.isRequired})]).isRequired,t})(r.Component);t.FileActivityStreamCardDetail=l});
//# sourceMappingURL=file_activity_stream_card_detail.min.js-vflS6HPsA.map
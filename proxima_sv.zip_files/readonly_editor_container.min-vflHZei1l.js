define(["require","exports","tslib","spectrum_comments/comment_editor/types","spectrum_comments/comment_editor/layers/text","spectrum_comments/comment_editor/layers/update","spectrum_comments/comment_editor/layers/style","spectrum_comments/comment_editor/core/editor_container_component","spectrum_comments/comment_editor/layers/scaffold","spectrum_comments/comment_editor/layers/mentions_entity"],function(e,t,n,o,r,m,s,c,a,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u={draft:o.DraftNames,comment:o.CommentNames},p=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),Object.defineProperty(t.prototype,"scopeNames",{get:function(){return u},enumerable:!0,configurable:!0}),t.prototype.mapPropsToLayers=function(e){return[new r.TextLayer,new s.StyleLayer,new i.MentionsEntityLayer,new m.UpdateLayer]},t.prototype.createDefaultStatus=function(){return a.createDefaultStatus(this.scopeNames)},t.prototype.mapPropsToUpdates=function(e,t){var o={};return e.content!==t.comment.content&&(o=n.__assign({},o,{comment:n.__assign({},t.comment,{content:e.content})})),o},t})(c.EditorContainer);t.ReadonlyEditorContainer=p});
//# sourceMappingURL=readonly_editor_container.min.js-vfl3esb8W.map
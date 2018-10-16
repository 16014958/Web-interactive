define(["require","exports","tslib","react","draft-js"],function(e,t,n,r,o){"use strict";function a(e){function t(e){m&&k(a(e.target))}function a(e){if(!m)return!1;var t=e.getBoundingClientRect(),n=m.getBoundingClientRect();return n.bottom<t.bottom&&n.top>t.top}function i(e){if(null===e)throw new Error("Unable to find scroll parent");return e.classList.contains("sc-comment-editor-draft")?e:i(e.parentElement)}var c=e.innerProps,u=e.status,d=e.triggers,s=e.kernel,l=u.macro,f=l.active,m=l.macroRef,g=u.draft,p=g.editorState,h=g.readOnly,y=g.placeholder,v=d.draft,C=v.change,b=v.keyCommand,E=v.input,B=v.returnKey,D=v.key,K=v.focus,S=v.blur,k=d.macro.updateVisibility,w=c.annotation,R=c.editorRef,x=d.comment.post,P={editorState:p,readOnly:h,onChange:function(e){C(e)},onBlur:function(e){k(!1),S(e)},onFocus:function(e){k(a(i(e.target))),K(e)},handleReturn:function(e,t){if(e.metaKey||e.ctrlKey){return""===t.getCurrentContent().getPlainText().trim()||x(t),"handled"}return B(e).editorState!==t||f?(e.preventDefault(),"handled"):"not-handled"},keyBindingFn:function(e){return D(e),s.compose(function(t){return t.status.suggestion!==u.suggestion?(e.preventDefault(),null):o.getDefaultKeyBinding(e)})},handleKeyCommand:function(e,t){return b(e).editorState===t?"not-handled":"handled"},handleBeforeInput:function(e,t){return E(e).editorState===t?"not-handled":"handled"}},_=""===p.getCurrentContent().getPlainText();return r.createElement("div",{className:"sc-comment-editor-draft",onScroll:t,onKeyDown:function(e){switch(e.which){case 38:case 39:case 40:D(e);break;case 13:if(f)return void e.preventDefault()}s.compose(function(t){t.status.suggestion!==u.suggestion&&e.preventDefault()})}},r.createElement("div",{className:"sc-comment-editor-prefix"},w,_&&r.createElement("span",{className:"sc-comment-editor-placeholder"},y)),r.createElement(o.Editor,n.__assign({},P,{ref:R})))}Object.defineProperty(t,"__esModule",{value:!0}),t.draftComposer=a});
//# sourceMappingURL=draft_composer.min.js-vfljAta8x.map
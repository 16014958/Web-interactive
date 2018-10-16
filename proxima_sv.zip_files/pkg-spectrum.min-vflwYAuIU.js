define("spectrum/icon_bundles/inline",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ICONS={edit:{attrs:{width:"24",height:"24",viewBox:"0 0 24 24"},innerHtml:'<g fill="none" fill-rule="evenodd"><g fill-rule="nonzero" fill="#637282"><path d="M9.499 12.498L14.502 7.5l1.999 2-5 5.003zM8.454 13.137l2.43 2.407-1.388.958-2.496.5.498-2.5z"></path></g></g>'},info:{attrs:{width:"24",height:"24",viewBox:"0 0 24 24"},innerHtml:'<g fill="none" fill-rule="evenodd"><path d="M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-1.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" fill="#B4BBC2"></path><path stroke="#B4BBC2" d="M11.5 12h1v3.5h-1zM11.5 8.5h1v1h-1z"></path></g>'}}}),define("spectrum/icon_inline",["require","exports","tslib","react","spectrum/icon_templates/stateless","spectrum/icon_bundles/inline"],function(e,t,n,o,i,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ICONS=s.ICONS,t.IconInline=function(e){var t=e.name,r=s.ICONS[t],l=r.attrs,a=r.innerHtml,u=o.createElement("svg",n.__assign({},l,{dangerouslySetInnerHTML:{__html:a}}));return o.createElement(i.Component,n.__assign({icon:u},e,{key:t}))},t.IconInline.displayName="IconInline"}),define("spectrum/portal",["require","exports","tslib","spectrum/portal/portal"],function(e,t,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.__exportStar(o,t)}),define("spectrum/portal/portal",["require","exports","tslib","react","react-dom"],function(e,t,n,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.componentWillUnmount=function(){this.portalRootElement&&this.unMountPortal()},t.prototype.componentWillMount=function(){!this.portalRootElement&&this.props.isShowInitially&&this.mountPortal()},t.prototype.mountPortal=function(){var e=this;if(!this.portalRootElement){this.portalRootElement=document.createElement("div");(this.props.parentElement||document.body).appendChild(this.portalRootElement);var t=o.createElement("div",{"aria-hidden":!1,className:this.props.className||"mc-portal-content",id:this.props.id,role:this.props.role,ref:function(t){return e.portalContentElementRef=t}},this.props.children);i.render(t,this.portalRootElement)}},t.prototype.unMountPortal=function(){if(this.portalRootElement){i.unmountComponentAtNode(this.portalRootElement);(this.props.parentElement||document.body).removeChild(this.portalRootElement),this.portalRootElement=null,this.portalContentElementRef=null}},t.prototype.render=function(){return null},t})(o.Component);t.Portal=s}),define("spectrum/positioned_portal",["require","exports","tslib","spectrum/positioned_portal/positioned_portal","spectrum/positioned_portal/utils"],function(e,t,n,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.__exportStar(o,t),n.__exportStar(i,t)}),define("spectrum/positioned_portal/positioned_portal",["require","exports","tslib","react","spectrum/positioned_portal/utils","spectrum/portal"],function(e,t,n,o,i,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(function(e){function t(t){var n=e.call(this,t)||this;return n.handleMouseOver=n.handleMouseOver.bind(n),n.handleMouseOut=n.handleMouseOut.bind(n),n.handleOnFocus=n.handleOnFocus.bind(n),n.handleOnBlur=n.handleOnBlur.bind(n),n.handleClick=n.handleClick.bind(n),n.closePortal=n.closePortal.bind(n),n.handleKeyEvent=n.handleKeyEvent.bind(n),n.handleScrollEvent=n.handleScrollEvent.bind(n),n.state={isShown:!!t.isShowInitially},n}return n.__extends(t,e),t.prototype.componentDidMount=function(){this.state.isShown&&(this.portalInstance.mountPortal(),this.resolvePortalPosition())},t.prototype.componentDidUpdate=function(){this.state.isShown&&this.portalInstance?(this.mountListeners(),this.props.onWillShow&&this.props.onWillShow(),this.portalInstance.mountPortal(),this.props.onDidShow&&this.props.onDidShow(),this.resolvePortalPosition()):this.portalInstance&&(this.unMountListeners(),this.props.onWillClose&&this.props.onWillClose(),this.portalInstance.unMountPortal(),this.wrapperElementRef=null)},t.prototype.componentWillUnmount=function(){this.portalInstance&&this.portalInstance.unMountPortal()},t.prototype.mountListeners=function(){document.addEventListener("keydown",this.handleKeyEvent,!1),document.addEventListener("scroll",this.handleScrollEvent,!1)},t.prototype.unMountListeners=function(){document.removeEventListener("keydown",this.handleKeyEvent,!1),document.removeEventListener("scroll",this.handleScrollEvent,!1)},t.prototype.handleOnFocus=function(e){!this.props.showOnClick&&this.showPortal()},t.prototype.handleOnBlur=function(e){this.props.closeOnBlur&&this.closePortal()},t.prototype.handleMouseOver=function(e){this.props.showOnMouseMove&&this.showPortal()},t.prototype.handleMouseOut=function(e){this.props.showOnMouseMove&&this.hidePortal()},t.prototype.handleClick=function(e){this.props.showOnClick&&this.showPortal()},t.prototype.handleKeyEvent=function(e){27===e.keyCode&&this.closePortal()},t.prototype.handleScrollEvent=function(){this.state.isShown&&this.resolvePortalPosition()},t.prototype.closePortal=function(){this.hidePortal(),this.props.onDidClose&&this.props.onDidClose()},t.prototype.showPortal=function(){this.setState({isShown:!0})},t.prototype.hidePortal=function(){this.setState({isShown:!1})},t.prototype.resolvePortalPosition=function(){if(this.portalInstance&&this.wrapperElementRef){var e=this.wrapperElementRef.childElementCount<2&&this.wrapperElementRef.firstElementChild||this.wrapperElementRef,t=i.calculatePosition(e,this.portalInstance.portalContentElementRef,this.props.positioning||"above",this.props.positionOffset);this.portalInstance.portalContentElementRef.style.top=t.top+"px",this.portalInstance.portalContentElementRef.style.left=t.left+"px"}},t.prototype.render=function(){var e=this;return o.createElement("div",{"aria-describedby":this.props.id,onMouseOver:this.handleMouseOver,onMouseLeave:this.handleMouseOut,onFocusCapture:this.handleOnFocus,onBlur:this.handleOnBlur,onClick:this.handleClick,className:this.props.wrapperClassName?this.props.wrapperClassName:"mc-positioned-portal-wrapper",ref:function(t){return e.wrapperElementRef=t}},o.createElement(s.Portal,{ref:function(t){return e.portalInstance=t},className:"mc-positioned-portal-content",parentElement:this.props.portalParentElement},this.props.renderContent&&this.props.renderContent()||null),this.props.children)},t})(o.Component);t.PositionedPortal=r}),define("spectrum/positioned_portal/utils",["require","exports"],function(e,t){"use strict";function n(e,t,n,o){void 0===o&&(o=0);var i={top:0,left:0},s=e.getBoundingClientRect(),r=t.getBoundingClientRect();switch(n){case"below":i={top:s.top+s.height+o,left:s.left+s.width/2-r.width/2};break;case"left":i={top:s.top+s.height/2-r.height/2,left:s.left-r.width-o};break;case"right":i={top:s.top+s.height/2-r.height/2,left:s.left+s.width+o};break;case"above":i={top:s.top-r.height-o,left:s.left+s.width/2-r.width/2}}return i}Object.defineProperty(t,"__esModule",{value:!0}),t.calculatePosition=n}),define("spectrum/suggestions_list",["require","exports","tslib","spectrum/suggestions_list/suggestions_list"],function(e,t,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.__exportStar(o,t)}),define("spectrum/suggestions_list/suggestions_list",["require","exports","tslib","classnames","react","react-dom","spectrum/culled_list"],function(e,t,n,o,i,s,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=(function(e){function t(t){var n=e.call(this,t)||this;return n.requestedNextPage=!1,n.updatedFromNextPage=!1,n.renderSuggestionRow=function(e,t,s){var r,l,a=n.props,u=a.selectedIndex,p=void 0===u?0:u,c=a.listItemHeight,d=void 0===c?64:c;return r=Array.isArray(d)?d[t]:d,l=t===p?o("mc-suggestions-list-suggestion","selected"):o("mc-suggestions-list-suggestion"),i.createElement("li",{onMouseDown:function(e){return e.preventDefault()},onClick:function(){return n.props.onSelect(e,t)},className:l,style:{position:"absolute",top:s,height:r}},n.props.renderSuggestion(e))},n.onRangeInView=function(e,t){var o=n.props,i=o.onNextPageRequested,s=o.suggestionsBuffer,r=void 0===s?10:s;o.suggestions.length-1-t<=r&&!n.requestedNextPage&&i&&(n.updatedFromNextPage=!0,i(),n.requestedNextPage=!0)},n.cachedSuggestions=t.suggestions,n}return n.__extends(t,e),t.prototype.componentWillUpdate=function(e){var t=this.props.suggestions;this.cachedSuggestions=e.suggestions,t.length!==e.suggestions.length&&(this.requestedNextPage=!1);var n=t!==e.suggestions,o=this.props.selectedIndex!==e.selectedIndex;!n&&o&&(this.cachedSuggestions=this.cachedSuggestions.slice())},t.prototype.componentDidUpdate=function(){if(this.culledListInstance){var e=s.findDOMNode(this.culledListInstance);if(e instanceof Element){var t=this.props,n=t.listItemHeight,o=void 0===n?64:n,i=t.selectedIndex,r=void 0===i?0:i,l=0,a=0;if(Array.isArray(o)){for(var u=0;u<r;u++)l+=o[u];a=l+o[r]}else l=o*r,a=o*(r+1);var p=a-(e.scrollTop+this.props.height);p>0&&(e.scrollTop+=p);var c=e.scrollTop-l;this.updatedFromNextPage||c>0&&(e.scrollTop=e.scrollTop-c)}}this.updatedFromNextPage=!1},t.prototype.getRenderHeightForList=function(){var e=this.props,t=e.suggestions,n=e.height,o=e.listItemHeight,i=void 0===o?64:o;if(0===t.length)return 0;var s=0;if(Array.isArray(i))for(var r=0;r<i.length&&(s+=i[r],!(s>=n));r++);else s=i*t.length;return Math.min(s,n)},t.prototype.render=function(){var e=this,t=this.props,n=t.listItemHeight,s=void 0===n?64:n,l=t.suggestionsBuffer,a=void 0===l?10:l,u=t.scrollThreshold,p=void 0===u?1:u,c=t.className,d=o("mc-suggestions-list",c);return i.createElement("div",{className:d},i.createElement(r.CulledList,{ref:function(t){return e.culledListInstance=t},className:"mc-suggestions-list-culled-list",items:this.cachedSuggestions,listItemHeight:s,shouldUseWindowAsScrollContainer:!1,onRangeInView:this.onRangeInView,renderRow:this.renderSuggestionRow,scrollThreshold:p,itemBuffer:a,viewportHeight:this.getRenderHeightForList()}))},t})(i.Component);t.SuggestionsList=l}),define("spectrum/token",["require","exports","tslib","spectrum/token/token"],function(e,t,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.__exportStar(o,t)}),define("spectrum/token/token",["require","exports","tslib","classnames","react","spectrum/tooltip"],function(e,t,n,o,i,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Token=function(e){var t,r,l=e.children,a=e.className,u=e.focused,p=void 0!==u&&u,c=e.onClose,d=e.onClick,h=e.onKeyDown,m=e.onFocus,f=e.onBlur,g=e.selected,v=void 0!==g&&g,y=e.variant,_=void 0===y?"default":y,w=e.tabIndex,S=void 0===w?-1:w,E=e.tooltipContent,b=n.__rest(e,["children","className","focused","onClose","onClick","onKeyDown","onFocus","onBlur","selected","variant","tabIndex","tooltipContent"]),k=o(a,{"mc-token":!0,"mc-token-error":"error"===_,"mc-token-focused":p,"mc-token-selected":v,"mc-token-warning":"warning"===_}),P=function(e){var t=e.key;"Backspace"===t&&c&&(e.preventDefault(),c(e)),"Enter"===t&&d&&d(e),h&&h(e)},C=function(e){c&&c(e)},O=function(e){var n=e.target;t===n||t.contains(n)||d&&d(e)},x=function(e){var n=e.target;t===n||t.contains(n)||(m&&m(e),r.showTooltip())},I=function(e){f&&f(e),r.hideTooltip()},M=e.id?"tooltip-for-"+e.id:void 0,T=i.createElement("svg",{width:13,height:13,viewBox:"0 0 24 24",className:"mc-token-close-icon"},i.createElement("title",null,"Delete Token"),i.createElement("path",{className:"mc-token-close-icon-x",d:"M12 10.586l-4.95-4.95L5.636 7.05l4.95\n        4.95-4.95 4.95 1.414 1.414 4.95-4.95\n        4.95 4.95 1.414-1.414-4.95-4.95\n        4.95-4.95-1.414-1.414z",fillRule:"evenodd"}));return i.createElement("div",n.__assign({className:k,onKeyDown:P,role:"button",onClick:O,onFocus:x,onBlur:I,tabIndex:S},b),i.createElement(s.Tooltip,{tooltipContent:E,ref:function(e){return r=e},id:M},i.createElement("div",{className:"mc-token-inner-wrapper"},i.createElement("div",{className:"mc-token-content"},l),i.createElement("button",{className:"mc-token-close",onClick:C,tabIndex:-1,ref:function(e){return t=e}},T))))}}),define("spectrum/tokenized_input",["require","exports","tslib","spectrum/tokenized_input/tokenized_input"],function(e,t,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.__exportStar(o,t)}),define("spectrum/tokenized_input/tokenized_input",["require","exports","tslib","classnames","react"],function(e,t,n,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TokenizedInput=function(e){var t=function(e){var t=e.currentTarget.selectionStart,n=e.currentTarget.selectionEnd,o=e.key;if(0===t&&n===t&&("ArrowLeft"===o||"Backspace"===o)){e.preventDefault();var i=e.currentTarget.previousElementSibling;i&&i.focus()}},s=e.tokens,r=void 0===s?[]:s,l=e.inputElement,a=void 0===l?i.createElement("input",{className:"mc-tokenized-input-input","aria-label":"typeAhead input",onKeyDown:t,placeholder:"Type here"}):l,u=e.className,p=e.inputProps,c=(n.__rest(e,["tokens","inputElement","className","inputProps"]),o(u,{"mc-tokenized-input":!0})),d=function(e){var t=e.key;if("ArrowRight"===t){var n=e.currentTarget.nextElementSibling;n&&n.focus()}if("ArrowLeft"===t){var o=e.currentTarget.previousElementSibling;o&&o.focus()}},h=r.map(function(e){return i.cloneElement(e,{onKeyDown:d})});return i.createElement("div",{className:c},h,i.cloneElement(a,p))}}),define("spectrum/tooltip",["require","exports","tslib","spectrum/tooltip/tooltip"],function(e,t,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.__exportStar(o,t)}),define("spectrum/tooltip/tooltip",["require","exports","tslib","classnames","react","spectrum/positioned_portal","spectrum/util/uuid_generator"],function(e,t,n,o,i,s,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TOOLTIP_OFFSETS={above:12,below:12,left:14,right:14};var l=0,a=(function(e){function a(t){var n=e.call(this,t)||this;return n.renderContent=n.renderContent.bind(n),n.handlePortalWillClose=n.handlePortalWillClose.bind(n),n.handlePortalWillShow=n.handlePortalWillShow.bind(n),n.handleAnimationEnd=n.handleAnimationEnd.bind(n),n.tooltipWasVisible=!1,n.showTooltip=n.showTooltip.bind(n),n.hideTooltip=n.hideTooltip.bind(n),n}return n.__extends(a,e),a.prototype.handleAnimationEnd=function(e){"delayed-tooltip"===e.animationName&&(l=Date.now(),this.tooltipWasVisible=!0,this.props.onDidShow&&this.props.onDidShow())},a.prototype.shouldShowDelayed=function(){return l<Date.now()-3e3},a.prototype.handlePortalWillShow=function(){document.addEventListener("animationend",this.handleAnimationEnd),this.props.onWillShow&&this.props.onWillShow()},a.prototype.handlePortalWillClose=function(){document.removeEventListener("animationend",this.handleAnimationEnd),this.tooltipWasVisible&&(l=Date.now()),this.tooltipWasVisible=!1,this.props.onWillClose&&this.props.onWillClose()},a.prototype.showTooltip=function(){this.positionedPortalEl.showPortal()},a.prototype.hideTooltip=function(){this.positionedPortalEl.hidePortal()},a.prototype.renderContent=function(){if(this.props.tooltipContent){var e=this.props,t=e.positioning,n=void 0===t?"above":t,s=e.forceSingleLine,r=void 0!==s&&s,l=e.className,a=this.shouldShowDelayed(),u=o({"mc-tooltip":!0,"mc-tooltip-bottom":"below"===n,"mc-tooltip-top":"above"===n,"mc-tooltip-left":"left"===n,"mc-tooltip-right":"right"===n,"mc-tooltip-delay":a,"mc-tooltip-no-delay":!a,"mc-tooltip-single-line":r},l);return i.createElement("div",{className:u},i.createElement("div",{className:"mc-tooltip-body"},this.props.tooltipContent))}return null},a.prototype.render=function(){var e=this,o=this.props,l=o.renderContent,a=void 0===l?this.renderContent:l,u=o.showOnMouseMove,p=void 0===u||u,c=o.closeOnBlur,d=void 0===c||c,h=o.showOnClick,m=void 0!==h&&h,f=o.positioning,g=void 0===f?"above":f,v=o.id,y=void 0===v?r.generateUUID("tooltip"):v,_=(o.className,n.__rest(o,["renderContent","showOnMouseMove","closeOnBlur","showOnClick","positioning","id","className"]));return i.createElement(s.PositionedPortal,n.__assign({renderContent:a,showOnMouseMove:p,closeOnBlur:d,showOnClick:m,positioning:g,positionOffset:t.TOOLTIP_OFFSETS[g],id:y},_,{onWillShow:this.handlePortalWillShow,onWillClose:this.handlePortalWillClose,role:"tooltip",ref:function(t){return e.positionedPortalEl=t}}),this.props.children)},a})(i.Component);t.Tooltip=a}),define("spectrum/typeahead",["require","exports","tslib","spectrum/typeahead/typeahead"],function(e,t,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.__exportStar(o,t)}),define("spectrum/typeahead/typeahead",["require","exports","tslib","classnames","react","spectrum/suggestions_list","spectrum/token","spectrum/tokenized_input"],function(e,t,n,o,i,s,r,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(function(e){function t(t){var n=e.call(this,t)||this;return n.handleOnClick=function(e){n.setState({selectedToken:e})},n.handleOnTokenBlur=function(){n.setState({selectedToken:{content:null,key:"",variant:"default"}})},n.handleInputBlur=function(){n.setState({suggestionListVisible:!1})},n.handleInputFocus=function(){n.setState({suggestionListVisible:!0})},n.handleTokenFocus=function(e){n.setState({selectedToken:e})},n.handleOnSelect=function(e,t){n.props.onSelect(e,t,n.state.inputValue),n.setState({inputValue:""})},n.handleKeyDown=function(e){var t=n.props.suggestions,o=n.state,i=o.suggestionsListSelectedIndex,s=(o.inputValue,e.currentTarget.selectionStart),r=e.currentTarget.selectionEnd,l=e.key;if(0===s&&r===s&&("ArrowLeft"===l||"Backspace"===l)){e.preventDefault();var a=e.currentTarget.previousElementSibling;a&&a.focus()}"Enter"===l&&(t.length?n.handleOnSelect(t[i],i):n.handleOnSelect(null,-1),n.setState({suggestionsListSelectedIndex:0})),"ArrowUp"===l&&n.setState({suggestionsListSelectedIndex:Math.max(i-1,0)}),"ArrowDown"===l&&n.setState({suggestionsListSelectedIndex:Math.min(i+1,t.length-1)})},n.handleOnChange=function(e){var t=e.currentTarget.value;n.setState({inputValue:t,suggestionsListSelectedIndex:0}),n.props.onChange(t)},n.handleOnRemove=function(e,t){n.setState({selectedToken:{content:null,key:"",variant:"default"}}),n.props.onRemoveToken(t.content);var o=e.currentTarget.previousElementSibling,i=e.currentTarget.nextElementSibling;o?o.focus():i&&i.focus()},n.state={suggestionsListSelectedIndex:0,selectedToken:{content:null,key:"",variant:"default"},inputValue:"",suggestionListVisible:!1},n}return n.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){0===e.suggestions.length&&this.setState({suggestionsListSelectedIndex:0})},t.prototype.renderTokens=function(){var e=this;return this.props.tokens.map(function(t){return i.createElement(r.Token,n.__assign({},e.props.tokenProps,{key:t.key,onClick:function(){return e.handleOnClick(t)},onClose:function(n){return e.handleOnRemove(n,t)},onBlur:e.handleOnTokenBlur,onFocus:function(){return e.handleTokenFocus(t)},selected:t.key===e.state.selectedToken.key,variant:t.variant}),e.props.renderTokenContent(t.content))})},t.prototype.renderSuggestionsList=function(){var e=this;if(!this.state.suggestionListVisible)return null;var t=this.props,n=t.suggestions,o=t.renderSuggestion,r=t.height,l=t.onNextPageRequested,a=t.listItemHeight,u=this.state.suggestionsListSelectedIndex;return 0===n.length?null:i.createElement(s.SuggestionsList,{suggestions:n,onSelect:function(t,n){return e.handleOnSelect(t,n)},renderSuggestion:o,height:r,listItemHeight:a,selectedIndex:u,onNextPageRequested:l})},t.prototype.render=function(){var e=this.props,t=e.className,s=void 0===t?"":t,r=e.inputElement,a=e.inputProps,u=this.state.inputValue;return i.createElement("div",{className:o("mc-typeahead",s)},i.createElement(l.TokenizedInput,{inputElement:r,tokens:this.renderTokens(),inputProps:n.__assign({},a,{onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,onChange:this.handleOnChange,onKeyDown:this.handleKeyDown,value:u})}),this.renderSuggestionsList())},t})(i.Component);t.Typeahead=a}),define("spectrum/util/uuid_generator",["require","exports"],function(e,t){"use strict";function n(e){var t=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return e+"-"+(t()+t()+t()+t())}Object.defineProperty(t,"__esModule",{value:!0}),t.generateUUID=n});
//# sourceMappingURL=pkg-spectrum.min.js-vflzqxTSQ.map
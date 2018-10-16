define(["require","exports","tslib","esignature_prototype/data/actions","esignature_prototype/data/selectors","esignature_prototype/utils","external/react","external/react-redux","modules/clean/react/css","modules/clean/react/title_bar/overflow_menu"],function(e,t,r,n,o,s,a,i,u,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importStar(a);var c=function(e){return{isSendForSignatureMode:o.getIsSendForSignatureMode(e)}},l={enterSendForSignatureMode:n.enterSendForSignatureMode,exitSendForSignature:n.exitSendForSignature},p=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.isSendForSignatureMode,r=e.file;return s.shouldIncludeEsignaturePopoverItem(r,t)?a.createElement(d.PopoverOrMobileItem,{className:"more-button__send-for-signature",key:"more-button__send-for-signature",onSelect:this.props.enterSendForSignatureMode},a.createElement("div",{className:"send-for-signature-title"},"Prepare For Signature",a.createElement("div",{className:"esignature-new-badge"},"New")),a.createElement("div",{className:"send-for-signature-description"},"Transform this PDF into a secure, signable document.")):t?a.createElement(d.PopoverOrMobileItem,{className:"more-button__send-for-signature",key:"more-button__exit-send-for-signature",onSelect:this.props.exitSendForSignature},"Exit Prepare for Signature Mode"):null},t})(a.Component),g=i.connect(c,l)(p),m=u.requireCssWithComponent(g,["/static/css/esignature_prototype/more_button-vflvhciRw.css"]);t.EsignaturePopoverItem=m});
//# sourceMappingURL=esignature_popover_item.min.js-vflqkAv-I.map
define(["require","exports","tslib","external/react","modules/clean/em_string","modules/clean/filepath","modules/clean/react_format","modules/core/i18n","modules/clean/react/modal","spectrum/file_icon"],function(e,t,a,n,l,i,s,c,o,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=a.__importStar(n),i=a.__importStar(i);var d=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isFileSelected:t.props.allowFileDonation,feedback:""},t.onDone=function(){t.props.onDone(t.state.isFileSelected,t.state.feedback),o.Modal.close()},t.onDismiss=function(){t.props.onDismiss(),o.Modal.close()},t.checkboxChange=function(e){t.setState({isFileSelected:e.target.checked})},t}return a.__extends(t,e),t.showInstance=function(e){o.Modal.showInstance(e)},t.prototype.renderFileDonation=function(){if(!this.props.allowFileDonation)return null;var e=l.Emstring.em_snippet(i.filename(this.props.filename),32);return n.createElement("label",{className:"file_selection"},n.createElement("div",{className:"file_check"},n.createElement("input",{type:"checkbox",checked:this.state.isFileSelected,"aria-checked":this.state.isFileSelected,onClick:this.checkboxChange,id:"file_selection_checkbox"})),n.createElement("div",{className:"file_image"},n.createElement(r.FileIcon,{path:this.props.filename})),n.createElement("div",{className:"file_desc"},n.createElement("div",{className:"file_desc_container"},n.createElement("div",{className:"main"},s.reactFormat(c._("Include <b>%(filename)s</b>"),{filename:e,b:n.createElement("b",null)})),n.createElement("div",{className:"disclaimer"},c._("The Dropbox team will review your document. It will only be used to help improve previews.")))))},t.prototype.render=function(){var e=this;return n.createElement(o.Modal,{title:c._("Tell us what’s wrong"),acceptButtonText:c._("Send feedback"),dismissButtonText:c._("Cancel"),autoClose:!1,showX:!0,onAccept:this.onDone,onDismiss:this.onDismiss},n.createElement("div",{className:"send_feedback_modal_content"},n.createElement("textarea",{className:"feedback",name:"feedback",id:"feedback",maxLength:255,readOnly:!1,placeholder:c._("My document doesn’t look right because..."),value:this.state.feedback,onChange:function(t){return e.setState({feedback:t.target.value})}}),this.renderFileDonation()))},t})(n.Component);t.PreviewFeedbackModal=d});
//# sourceMappingURL=feedback_modal.min.js-vfljWxjJ2.map
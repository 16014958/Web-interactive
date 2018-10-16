define(["require","exports","tslib","external/classnames","external/lodash","external/react","modules/core/i18n","modules/clean/react/size_class/constants"],function(e,t,a,n,o,r,s,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=a.__importDefault(n),o=a.__importStar(o),r=a.__importStar(r);var u=(function(e){function t(t){var a=e.call(this,t)||this;return a.textInputRef=function(e){return a.textInput=e},a.debouncedOnPageNumberUpdated=o.debounce(a.props.onPageNumberUpdated,300),a.handlePageIndexChange=function(e){var t=a.props,n=t.currentPageIndex,o=t.pageCount;if(""===e.currentTarget.value||!n||!o)return a.setState({pageNumber:void 0,showSecondaryText:!1}),void a.debouncedOnPageNumberUpdated.cancel();var r=0|+e.target.value;if(isNaN(r)||r<=0||r>o)return void a.setPageNumber(n);a.debouncedOnPageNumberUpdated(r-1),a.setPageNumber(r)},a.onBlur=function(){a.props.currentPageIndex&&a.setPageNumber(a.props.currentPageIndex),a.props.onPageIndicatorBlured()},a.onFocus=function(){a.setState({pageNumber:void 0,showSecondaryText:!1}),a.props.onPageIndicatorFocused()},a.onClick=function(){a.textInput.focus()},a.setPageNumber=function(e){e>=1&&a.props.pageCount&&e<=a.props.pageCount&&a.setState({pageNumber:e,showSecondaryText:!0})},a.state={pageNumber:a.props.currentPageIndex,showSecondaryText:!0},a}return a.__extends(t,e),t.prototype.componentDidUpdate=function(e,t){e.currentPageIndex!==this.props.currentPageIndex&&this.props.currentPageIndex&&this.setPageNumber(this.props.currentPageIndex)},t.prototype.render=function(){var e=this.props,t=e.className,a=e.focused,o=e.pageCount,u=e.sizeClass,i=this.state,l=i.pageNumber,p=i.showSecondaryText,d=s._("Click to jump to a page"),m=p?u===c.SizeClass.Small?"":"  / "+o+" ":"";return r.createElement("div",{className:n.default(t,"toolbar-button-entry",{focus:a}),onClick:this.onClick,style:{marginLeft:0,marginRight:0}},r.createElement("div",{className:"toolbar-tooltip"},r.createElement("div",{className:"toolbar-tooltip-container"},r.createElement("div",{className:"toolbar-tooltip-pointer-border"})),r.createElement("div",{className:"toolbar-tooltip-container"},r.createElement("div",{className:"toolbar-tooltip-body"},d)),r.createElement("div",{className:"toolbar-tooltip-container"},r.createElement("div",{className:"toolbar-tooltip-pointer"}))),r.createElement("div",{className:"content"},r.createElement("input",{className:n.default("page-input",{focus:a,"with-text":!!l&&a}),alt:d,placeholder:s._("Page..."),onChange:this.handlePageIndexChange,onBlur:this.onBlur,onFocus:this.onFocus,value:l?l:"",ref:this.textInputRef}),m))},t})(r.PureComponent);t.PageIndicator=u});
//# sourceMappingURL=preview_toolbar_page_indicator.min.js-vflO0aqTj.map
define(["require","exports","tslib","external/create-react-class","external/react-dom","external/prop-types","modules/clean/react/bubble_dropdown"],function(e,t,n,i,o,r,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o=n.__importStar(o),r=n.__importStar(r);var s=c.DROPDOWN_ROOT_ID;t.ClickOutside=i({displayName:"ClickOutside",propTypes:{onClickOutside:r.func},componentDidMount:function(){document.addEventListener("click",this.handleClickOutside,!0)},componentWillUnmount:function(){document.removeEventListener("click",this.handleClickOutside,!0)},getDropdownRoot:function(){return document.getElementById(s)},handleClickOutside:function(e){var t=o.findDOMNode(this),n=this.getDropdownRoot();!this.props.onClickOutside||n&&n.contains(e.target)||t&&t.contains(e.target)||this.props.onClickOutside(e)},render:function(){return this.props.children}})});
//# sourceMappingURL=click_outside.min.js-vfln06rPn.map
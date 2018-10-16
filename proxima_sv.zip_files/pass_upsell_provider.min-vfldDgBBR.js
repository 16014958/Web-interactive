define(["require","exports","tslib","external/react","external/prop-types","modules/clean/react/pass/upsell/simple_upsell","modules/clean/web_timing_logger","modules/clean/growth/pass_upsell/pass_upsell_tracker","modules/clean/growth/gating"],function(e,t,n,r,l,s,i,a,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=n.__importStar(r),l=n.__importStar(l);var o=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={simpleUpsellGate:p.inactiveGatingStatus,tracker:null},t.getTracker=function(){return t.state.tracker},t.getUpsellUrl=function(){return s.simpleUpsellUrlForVariant(t.state.simpleUpsellGate.variant)},t.isInSimpleUpsellExperiment=function(){return t.state.simpleUpsellGate.is_active},t.getVariant=function(){return t.state.simpleUpsellGate.variant},t}return n.__extends(t,e),t.prototype.getChildContext=function(){return{getTracker:this.getTracker,getUpsellUrl:this.getUpsellUrl,getVariant:this.getVariant,isInSimpleUpsellExperiment:this.isInSimpleUpsellExperiment}},t.prototype.componentDidMount=function(){var e=this;this.mounted=!0,i.waitForTTI().then(function(){return n.__awaiter(e,void 0,void 0,function(){var e;return n.__generator(this,function(t){switch(t.label){case 0:return[4,s.simpleUpsellGatingStatus()];case 1:return e=t.sent(),this.mounted&&this.setState({simpleUpsellGate:e,tracker:e.is_active?new a.PassUpsellTracker(this.props.userId):null}),[2]}})})})},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return r.Children.only(this.props.children)},t.childContextTypes={getTracker:l.func,getUpsellUrl:l.func,getVariant:l.func,isInSimpleUpsellExperiment:l.func},t})(r.Component);t.PassUpsellProvider=o});
//# sourceMappingURL=pass_upsell_provider.min.js-vflA1GkmU.map
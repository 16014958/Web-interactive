define(["require","exports","tslib","external/react","modules/clean/datetime"],function(t,e,n,o,i){"use strict";function r(){for(var t=new Date,e=0,n=s;e<n.length;e++){(0,n[e])(t)}}function a(t){s.push(t),void 0===p&&(p=setInterval(r,6e4))}function u(t){s=s.filter(function(e){return e!==t}),0===s.length&&void 0!==p&&(clearInterval(p),p=void 0)}Object.defineProperty(e,"__esModule",{value:!0}),o=n.__importStar(o),i=n.__importStar(i);var p=void 0,s=[],c=(function(t){function e(e){var n=t.call(this,e)||this;return n.updateTimestamp=function(t){n.setState({now:t})},n.state={now:new Date},n}return n.__extends(e,t),e.prototype.componentDidMount=function(){a(this.updateTimestamp)},e.prototype.componentWillUnmount=function(){u(this.updateTimestamp)},e.prototype.render=function(){var t=i.agoFromDate(this.props.timestamp,this.state.now,!0,!0);return o.createElement("span",null,t)},e})(o.PureComponent);e.UpdatingTimeAgo=c});
//# sourceMappingURL=updating_time_ago.min.js-vfl3Vof9u.map
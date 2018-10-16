define(["require","exports","tslib","external/react","modules/clean/react/file_viewer/coach_mark","modules/clean/react/pass/data_helpers","modules/clean/react_format","modules/core/i18n"],function(e,t,a,r,o,n,c,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importStar(r);var s=(function(e){function t(t){var a=e.call(this,t)||this;return a.getCoachmarkCompletion=function(e){"none"!==e[".tag"]?a.setState({coachmarkType:e,showCoachmark:!0}):a.setState({showCoachmark:!1})},a.onCoachmarkButtonClick=function(){a.setState({showCoachmark:!1}),n.SeenStateHelpers.logCoachmarkInteraction(a.props.userId,a.props.file.file_id,a.props.url,a.state.coachmarkType,{".tag":"accepted"})},a.onCoachmarkLearnMoreClick=function(){n.SeenStateHelpers.logCoachmarkInteraction(a.props.userId,a.props.file.file_id,a.props.url,a.state.coachmarkType,{".tag":"learn_more"})},a.renderPresenceCoachmark=function(){var e=c.reactFormat(i._("Get more visibility into shared files by seeing when collaborators view. <a>Learn more</a>"),{a:r.createElement("a",{className:"plain-link",href:"https://www.dropbox.com/help/9262",target:"_blank",rel:"noopener noreferrer",onClick:a.onCoachmarkLearnMoreClick})});return r.createElement("div",{className:"presence-coach-mark"},r.createElement(o.CoachMark,{title:i._("New! See who’s viewing this file"),buttonText:i._("Got it"),arrowPosition:o.ARROW_POSITION.TOP,onButtonClick:a.onCoachmarkButtonClick},e))},a.renderSeenStateCoachmark=function(){var e=c.reactFormat(i._("Get more visibility into shared files by seeing when collaborators view. <a>Learn more</a>"),{a:r.createElement("a",{className:"plain-link",href:"https://www.dropbox.com/help/9262",target:"_blank",rel:"noopener noreferrer",onClick:a.onCoachmarkLearnMoreClick})});return r.createElement("div",{className:"seen-state-coach-mark"},r.createElement(o.CoachMark,{title:i._("New! See who’s viewed this file"),buttonText:i._("Got it"),arrowPosition:o.ARROW_POSITION.TOP,onButtonClick:a.onCoachmarkButtonClick},e))},a.state={coachmarkType:{".tag":"none"},showCoachmark:!1},a}return a.__extends(t,e),t.prototype.componentDidMount=function(){n.SeenStateHelpers.getCoachmark(this.props.userId,this.props.file.file_id,this.props.url,this.getCoachmarkCompletion)},t.prototype.render=function(){if(!this.state.showCoachmark)return r.createElement("div",null);switch(this.state.coachmarkType[".tag"]){case"presence":return this.renderPresenceCoachmark();case"seen_state":return this.renderSeenStateCoachmark();default:return r.createElement("div",null)}},t.displayName="SeenStateCoachmark",t})(r.Component);t.SeenStateCoachmark=s});
//# sourceMappingURL=seen_state_coachmark.min.js-vfl0qnIeW.map
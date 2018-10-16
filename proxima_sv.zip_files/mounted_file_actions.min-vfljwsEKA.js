define(["require","exports","tslib","external/react","modules/clean/react/file_viewer/logging","modules/clean/react/file_viewer/constants","modules/clean/react/file_viewer/more_dropdown","modules/clean/react/file_viewer/open_button/open_button","modules/clean/react/file_viewer/share_helpers","modules/clean/react/title_bar/controls_container","modules/clean/react/user_notifications/dropdown","modules/clean/sharing/api/client","modules/clean/sharing/delete_link_modal","modules/clean/react/size_class/constants","modules/core/i18n","modules/core/browser","modules/clean/react/paper/utils","modules/clean/react/paper/open_in_paper_button","modules/clean/web_timing_logger","modules/clean/react/app_actions/app_actions_menu","modules/clean/react/app_actions/app_actions_store"],function(e,t,n,a,i,r,o,s,l,c,p,u,h,d,_,f,m,S,k,C,g){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importStar(a),l=n.__importStar(l);var v=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={linkMetadata:null},t.cancelGetSharedLinkInfo=function(){},t.handleShareClick=function(){l.share(t.props.file,t.props.user,null,"PREVIEW_PAGE"),i.logUserAction(r.UserAction.Share,r.UserActionContext.TitleBarMain)},t.removeShareLink=function(){var e=new u.ShareApiClient({userId:t.props.user.id}),n=t.state.linkMetadata,a=n.name,i=n.url;h.deleteLinkWithConfirm({client:e,contentName:a,onCancel:null,onDeleteLink:function(){return t.setState({linkMetadata:null})},url:i})},t}return n.__extends(t,e),t.prototype.componentDidMount=function(){this.setupShare(this.props),this.getAppActions(this.props.file),this.setState({openInPaperButtonVariant:m.getOpenInPaperButtonVariant({file:this.props.file,user:this.props.user})})},t.prototype.componentWillUnmount=function(){this.cancelGetSharedLinkInfo()},t.prototype.componentWillReceiveProps=function(e){e.file!==this.props.file&&(this.cancelGetSharedLinkInfo(),this.setState({linkMetadata:null}),this.setupShare(e),this.getAppActions(e.file))},t.prototype.setupShare=function(e){return n.__awaiter(this,void 0,void 0,function(){var t,a,i;return n.__generator(this,function(n){switch(n.label){case 0:return t=!1,this.cancelGetSharedLinkInfo=function(){t=!0},a=new u.ShareApiClient({userId:e.user.id}),[4,a.sharedLinkInfo({fileIdOrPath:e.file.fq_path})];case 1:return i=n.sent(),t||this.setState({linkMetadata:i}),this.cancelGetSharedLinkInfo=function(){},[2]}})})},t.prototype.getAppActions=function(e){return n.__awaiter(this,void 0,void 0,function(){var t;return n.__generator(this,function(n){switch(n.label){case 0:return[4,k.waitForTTI()];case 1:return n.sent(),[4,g.getAppActionsStore().getActionsForFile(e,this.props.user.id)];case 2:return t=n.sent(),this.setState({actionCategories:t}),[2]}})})},t.prototype.logUserActionInTitleBarFactory=function(e){return function(){return i.logUserAction(e,r.UserActionContext.TitleBarMain)}},t.prototype.render=function(){var e=!!this.state.linkMetadata&&this.state.linkMetadata.link_permissions.can_revoke,t=this.props,i=t.file,l=t.sizeClass,u=t.shouldDisplayActionButtons,h=t.user,k=l===d.SizeClass.Small,g={allowRemoveLink:e,isPrivate:!0,file:i,onClickShareLink:this.handleShareClick,onRemoveShareLink:this.removeShareLink,sizeClass:l,user:h,showOpenInPaper:this.state.openInPaperButtonVariant===m.OpenInPaperButtonVariant.Ellipsis&&!k};if(l!==d.SizeClass.Large)return a.createElement(c.TitleBarControlsContainer,null,!u||f.is_mobile_or_tablet()||l===d.SizeClass.Small?null:a.createElement(s.OpenButton,{file:i,location:r.FileViewerPane.TitleBar,user:h}),a.createElement(o.MoreDropdown,n.__assign({},g)));var v;return u&&(v=[a.createElement("button",{className:"share-button button-primary control__button",onClick:this.handleShareClick,key:0},_._("Share"))],this.state.openInPaperButtonVariant===m.OpenInPaperButtonVariant.Button&&v.push(a.createElement(S.OpenInPaperButton,{key:"openinpaper",file:i,user:h,hideCallout:!1})),this.state.actionCategories?v.push(a.createElement("div",{className:"control__button"},a.createElement(C.AppActionsMenu,{file:i,actionCategories:this.state.actionCategories,user:h,showAsButtonIfDownloadOnly:!0,hasOpenInPaperSupport:this.state.openInPaperButtonVariant===m.OpenInPaperButtonVariant.Dropdown,telemetryContext:{surface:"previews"}}))):v.push(a.createElement(s.OpenButton,{file:i,location:r.FileViewerPane.TitleBar,user:h,key:2,sizeClass:this.props.sizeClass,hasOpenInPaperSupport:this.state.openInPaperButtonVariant===m.OpenInPaperButtonVariant.Dropdown}))),a.createElement(c.TitleBarControlsContainer,null,v,a.createElement(o.MoreDropdown,n.__assign({},g)),a.createElement("div",{className:"react-title-bar__divider"}),a.createElement(p.UserNotificationsDropdown,{isPagelet:!1,onClick:this.logUserActionInTitleBarFactory(r.UserAction.ClickNotifications)}))},t})(a.Component);t.MountedFileActions=v});
//# sourceMappingURL=mounted_file_actions.min.js-vflRr-_p4.map
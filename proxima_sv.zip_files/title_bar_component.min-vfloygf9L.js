define(["require","exports","tslib","esignature_prototype/data/selectors","external/react","external/react-redux","modules/clean/filepath","modules/clean/react/css_timing","modules/clean/file_store/utils","spectrum/file_icon","modules/clean/react/title_bar/base","modules/clean/react/file_viewer/title_bar/controls","modules/clean/react/file_viewer/title_bar/title","modules/clean/react/file_viewer/title_bar/title_breadcrumb","modules/constants/python","modules/core/i18n","external/classnames"],function(e,i,t,s,n,o,r,l,a,d,c,u,p,f,m,S,g){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),n=t.__importStar(n),m=t.__importStar(m),g=t.__importDefault(g);var h=(function(e){function i(){var i=null!==e&&e.apply(this,arguments)||this;return i.isSharedFile=function(){return!!i.props.sharedLinkInfo},i.isMountedFile=function(){return!i.isSharedFile()},i.closeButtonTitle=function(){if(i.isMountedFile()){var e=void 0;if(i.props.isVersionHistoryMode)e=S._("Version history");else if(i.props.fileViewOrigin===m.FileViewOriginType.RECENTS)e=S._("Recents");else if(i.props.fileViewOrigin===m.FileViewOriginType.HOME)e=S._("Home");else{if(i.props.fileViewOrigin===m.FileViewOriginType.PHOTOS||i.props.fileViewAction===m.FileViewActionType.SEARCH)return S._("Close");var t=i.props.file;a.isBrowseFile(t)&&t.fq_path&&(e=r.filename(r.parent_dir(t.fq_path)))}if(e)return S._("Back to %(folder)s").format({folder:e})}return S._("Close")},i}return t.__extends(i,e),i.prototype.componentDidMount=function(){var e=this.props.onMount;e&&e()},i.prototype.render=function(){var e=this.props,i=e.canClose,t=e.canRestoreRevision,s=e.closeUrl,o=e.file,r=e.fileSubpath,l=e.hidePageChrome,m=e.isSeenStatesEnabled,S=e.isVersionHistoryMode,h=e.isViewingFileSubpath,_=e.maxFilenameEmLength,F=e.onClose,M=e.onRestoreRevision,C=e.sharedLinkInfo,v=e.sharePermission,b=e.shareToken,y=e.sizeClass,w=e.user,V=e.isSigningMode,T=e.isSendForSignatureMode,E=e.areAllFieldsCompleted,R=C?C.ownerTeamLogo:void 0,k=l?n.createElement("div",{className:"file-icon"},n.createElement(d.FileIcon,{path:a.getFilename(o)})):null,A=!(!v||0!==v.canViewMetadataRoles.length);return n.createElement(c.TitleBarBase,{canClose:i&&!l,className:g.default({"esignature-title-bar":T||V,"esignature-title-bar-complete":E}),closeTitle:this.closeButtonTitle(),customLogoUrl:R,file:o,isSigningMode:V,isSendForSignatureMode:T,areAllFieldsCompleted:E,closeUrl:s,onClose:F,overrideIcon:k,shouldShowIcon:!h,sizeClass:y,title:E?void 0:h?n.createElement(f.TitleBreadcrumb,{file:o,fileSubpath:r,sizeClass:y}):n.createElement(p.Title,{file:o,maxFilenameEmLength:_,sharedLinkInfo:C,shouldDisplayStarred:!l,shouldDisplayMetadata:!l,sizeClass:y,user:w}),controls:[l||V||T?null:n.createElement(u.SeenStates,{key:"seen-states",file:o,isSeenStatesEnabled:m,isVersionHistoryMode:S,isViewingFileSubpath:h,isViewMetadataDisabled:A,sharedLinkInfo:C,user:w,sizeClass:y}),l?null:n.createElement(u.FileActions,{key:"file-actions",canRestoreRevision:t,file:o,isSharedFile:this.isSharedFile(),isVersionHistoryMode:S,onRestoreRevision:M,sharedLinkInfo:C,sharePermission:v,shareToken:b,shouldDisplayActionButtons:!h,sizeClass:y,user:w,isSigningMode:V,isSendForSignatureMode:T})]})},i.defaultProps={canClose:!1,canRestoreRevision:!1,isSeenStatesEnabled:!0,isVersionHistoryMode:!1,isSendForSignatureMode:!1,isSigningMode:!1},i})(n.Component);i._TitleBar=h;var _=function(e){return{isSendForSignatureMode:s.getIsSendForSignatureMode(e),isSigningMode:s.getIsSigningMode(e),areAllFieldsCompleted:s.getAreAllFieldsCompleted(e)}},F=o.connect(_,void 0)(h),M=l.requireCssWithComponent(F,["/static/css/react_title_bar-vflncrwNx.css"]);i.TitleBar=M});
//# sourceMappingURL=title_bar_component.min.js-vflKMerKl.map
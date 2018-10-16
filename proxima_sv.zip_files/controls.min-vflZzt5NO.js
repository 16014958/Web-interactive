define(["require","exports","tslib","esignature_prototype/components/title_bar/esignature_title_bar_actions","external/react","modules/clean/react/pass/empty_seen_state_facepile","modules/clean/react/file_viewer/mounted_file_actions","modules/clean/react/pass/seen_state_facepile_controller","modules/clean/react/file_viewer/utils","modules/clean/react/file_viewer/shared_file_actions","modules/clean/react/file_viewer/version_history_file_actions","modules/core/browser"],function(e,i,s,t,n,r,a,o,l,c,u,d){"use strict";function _(e){var i=e.file,s=e.isSeenStatesEnabled,t=e.isVersionHistoryMode,a=e.isViewingFileSubpath,l=e.isViewMetadataDisabled,c=e.sharedLinkInfo,u=e.sizeClass,d=e.user;return!s||t||null===i.ns_id?n.createElement(r.EmptySeenStateFacepile,null):n.createElement(o.SeenStateFacepileController,{file:i,fromBrowse:!1,isViewMetadataDisabled:l,isViewingFileSubpath:!!a,sharedLinkInfo:c,sizeClass:u,user:d})}function p(e){var i=e.canRestoreRevision,s=e.file,r=e.isSharedFile,o=e.isVersionHistoryMode,_=e.onRestoreRevision,p=e.sharedLinkInfo,m=e.sharePermission,h=e.shareToken,S=e.shouldDisplayActionButtons,v=e.sizeClass,y=e.user,w=e.isSigningMode,A=e.isSendForSignatureMode;if(w||A)return n.createElement(t.EsignatureTitleBarActions,{isSigningMode:w,user:y,file:s,tokenKey:h?h.linkKey:void 0});if(r){var b=!(!s.open_in_app_data||!s.preview_type);return d.is_tablet()&&(b=b&&!l.renderOpenInAppAsBanner()),n.createElement(c.SharedFileActions,{file:s,sharedLinkInfo:p,sharePermission:m,shareToken:h,shouldDisplayActionButtons:S,showOpenInAppButton:b,sizeClass:v,user:y})}return o?n.createElement(u.VersionHistoryFileActions,{canRestoreRevision:!!i,file:s,onRestoreRevision:_||f,shouldDisplayActionButtons:S,user:y}):n.createElement(a.MountedFileActions,{file:s,sizeClass:v,shouldDisplayActionButtons:S,user:y})}Object.defineProperty(i,"__esModule",{value:!0}),n=s.__importStar(n),i.SeenStates=_;var f=function(){};i.FileActions=p});
//# sourceMappingURL=controls.min.js-vflY-kpn-.map
define(["require","exports","tslib","external/immutable","external/react","modules/clean/filepath","modules/clean/react/file_viewer/constants","modules/clean/react_format","modules/clean/react/share_download/actions","modules/core/i18n"],function(e,o,r,t,a,n,i,s,c,l){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),t=r.__importStar(t),a=r.__importStar(a),n=r.__importStar(n),c=r.__importStar(c);var d={text:void 0,handler:void 0,spriteName:void 0,isDisabled:void 0,userAction:void 0},m=(function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(o,e),o.buildDirectOption=function(e){return new o({text:l._("Direct download"),handler:function(){c.direct(e)},spriteName:"download_arrow",userAction:i.UserAction.Download})},o.buildToDropboxOption=function(e,r,t,d,m,_){void 0===_&&(_=!1);var p=l._("Save to my Dropbox"),u="dropbox",f=i.UserAction.SaveToDropbox;if(d&&d.is_cdm_member){var b=n.filename(d.cdm_tmf_path);p=b.length>12?l._("Save to my member folder"):s.reactFormat(l._("Save to <strong>%(cdm_tmf_name)s</strong> folder"),{cdm_tmf_name:b,strong:a.createElement("strong",null)}),t.is_paired&&(u="s_briefcase",f=i.UserAction.SaveToDropboxWork)}else if(t.is_paired)switch(m){case"personal":p=l._("Save to personal Dropbox"),u="s_house",f=i.UserAction.SaveToDropboxPersonal;break;case"work":p=l._("Save to %(team_name)s Dropbox").format({team_name:t.team_name}),u="s_briefcase",f=i.UserAction.SaveToDropboxWork}return new o({text:p,handler:function(){c.toDropbox(e,r,m,d)},spriteName:u,isDisabled:_,userAction:f})},o})(t.Record(d));o.ShareDownloadActionOption=m});
//# sourceMappingURL=models.min.js-vfll3UYsf.map
define(["require","exports","tslib","external/react","modules/clean/viewer","modules/clean/react/file_path_breadcrumb"],function(e,r,t,a,n,i){"use strict";function u(e,r){for(var t=[{name:n.Viewer.get_root_name(r)}],a=e.split("/").filter(function(e){return e}),i=0,u=a;i<u.length;i++){var c=u[i];t.push({name:c})}return t}function c(e){return e.replace(new RegExp("/[^/]*$"),"")}function l(e){var r=e.filepath,t=e.maxWidth,n=e.user,l=u(c(r),n);return a.createElement(i.FilePathBreadcrumb,{paths:l,maxWidth:t,useLinks:!1,pathClassname:"file_activity_stream__breadcrumb",showTooltipOnTruncated:!0})}Object.defineProperty(r,"__esModule",{value:!0}),a=t.__importStar(a),r.Breadcrumbs=l});
//# sourceMappingURL=breadcrumbs.min.js-vflZaFdmr.map
"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[2934],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),c=n,f=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return a?r.createElement(f,o(o({ref:t},u),{},{components:a})):r.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},75680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={id:"ogc-wfs",description:"Catalog Web Service",title:"WFS - Web Feature Service",slug:"ogc-wfs",tags:["ogc","vector","protocol","api"]},o="WFS - Web Feature Service",i={unversionedId:"ogc/protocols/ogc-wfs",id:"ogc/protocols/ogc-wfs",title:"WFS - Web Feature Service",description:"Catalog Web Service",source:"@site/docs/ogc/protocols/ogc-wfs.md",sourceDirName:"ogc/protocols",slug:"/ogc/protocols/ogc-wfs",permalink:"/developer-portal/pr-preview/pr-80/docs/ogc/protocols/ogc-wfs",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/ogc/protocols/ogc-wfs.md",tags:[{label:"ogc",permalink:"/developer-portal/pr-preview/pr-80/docs/tags/ogc"},{label:"vector",permalink:"/developer-portal/pr-preview/pr-80/docs/tags/vector"},{label:"protocol",permalink:"/developer-portal/pr-preview/pr-80/docs/tags/protocol"},{label:"api",permalink:"/developer-portal/pr-preview/pr-80/docs/tags/api"}],version:"current",frontMatter:{id:"ogc-wfs",description:"Catalog Web Service",title:"WFS - Web Feature Service",slug:"ogc-wfs",tags:["ogc","vector","protocol","api"]},sidebar:"ogcSidebar",previous:{title:"WCS - Web Coverage Service",permalink:"/developer-portal/pr-preview/pr-80/docs/ogc/protocols/ogc-wcs"}},p={},s=[{value:"GetCapabilities",id:"getcapabilities",level:2},{value:"DescribeFeatureType",id:"describefeaturetype",level:2},{value:"GetFeature",id:"getfeature",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...l}=e;return(0,n.kt)(d,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wfs---web-feature-service"},"WFS - Web Feature Service"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://opengeospatial.github.io/e-learning/wmts/text/operations.html"},"Official OGC documentation(Online)")," \ud83c\udf10"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:a(63219).Z,title:"download"},"Official OGC documentation(Offline)")," \ud83d\udcc4"),(0,n.kt)("p",null,"The OGC Web Feature Service (WFS) Interface Standard defines a set of interfaces for accessing geographic information at the feature and feature property level over the Internet. A feature is an abstraction of real world phenomena, that is it is a representation of anything that can be found in the world. The attributes or characteristics of a geographic feature are referred to as feature properties. WFS offer the means to retrieve or query geographic features in a manner independent of the underlying data stores they publish. Where a WFS is authorized to do so, the service can also update or delete geographic features. An instance of a WFS is also able to store queries in order to enable client applications to retrieve or execute the queries at a later point in time."),(0,n.kt)("p",null,"The following table depicts all WFS protocol operations and their supported WFS version:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Operation"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetCapabilities"),(0,n.kt)("td",{parentName:"tr",align:null},"Generates a metadata document describing a WFS service provided by server as well as valid WFS operations and parameters"),(0,n.kt)("td",{parentName:"tr",align:null},"All")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DescribeFeatureType"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns a description of feature types supported by a WFS service"),(0,n.kt)("td",{parentName:"tr",align:null},"All")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetFeature"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns a selection of features from a data source including geometry and attribute values"),(0,n.kt)("td",{parentName:"tr",align:null},"All")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LockFeature"),(0,n.kt)("td",{parentName:"tr",align:null},"Prevents a feature from being edited through a persistent feature lock"),(0,n.kt)("td",{parentName:"tr",align:null},"All")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Transaction"),(0,n.kt)("td",{parentName:"tr",align:null},"Edits existing feature types by creating, updating, and deleting"),(0,n.kt)("td",{parentName:"tr",align:null},"All")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetPropertyValue"),(0,n.kt)("td",{parentName:"tr",align:null},"Retrieves the value of a feature property or part of the value of a complex feature property from the data store for a set of features identified using a query expression"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetFeatureWithLock"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns a selection of features and also applies a lock on those features"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CreateStoredQuery"),(0,n.kt)("td",{parentName:"tr",align:null},"Create a stored query on the WFS server"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DropStoredQuery"),(0,n.kt)("td",{parentName:"tr",align:null},"Deletes a stored query from the WFS server"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ListStoredQueries"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns a list of the stored queries on a WFS server"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DescribeStoredQueries"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns a metadata document describing the stored queries on a WFS server"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetGMLObject"),(0,n.kt)("td",{parentName:"tr",align:null},"Retrieves features and elements by ID from a WFS"),(0,n.kt)("td",{parentName:"tr",align:null},"1.1.0")))),(0,n.kt)("p",null,"The following parameters are common query parameters for all of the provided operations:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Is Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Service name, value is wfs on this service")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"version"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Service version, value is one of 1.0.0, 1.1.0, 2.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"request"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Operation name")))),(0,n.kt)("h2",{id:"getcapabilities"},"GetCapabilities"),(0,n.kt)("p",null,"The GetCapabilities operation is a GET request to a WFS server for a list of the operations, services or capabilities supported by that service"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<WFS_SERVICE_URL>/wfs?\n    service=wfs&\n    version={WFS_SERVICE_VERSION}&\n    request=GetCapabilities\n")),(0,n.kt)("h2",{id:"describefeaturetype"},"DescribeFeatureType"),(0,n.kt)("p",null,"The DescribeFeatureType request provides information about all or an individual feature type.\nSpecifically, the operation will request a list of features and attributes for the given feature type, or list the feature types available on the service."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Is Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"typeNames"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the feature types to describe (use typeName for WFS 1.1.0 and earlier)"),(0,n.kt)("td",{parentName:"tr",align:null},"an empty value which will list all the feature types provided by the service")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exceptions"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Format for reporting exceptions, choose one of (",(0,n.kt)("inlineCode",{parentName:"td"},"text/xml"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"application/json"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"text/javascript"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"text/xml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"outputFormat"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"The output format (",(0,n.kt)("inlineCode",{parentName:"td"},"application/json")," can be choose)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"application/xml"))))),(0,n.kt)("p",null,"The following GET request will return a list of all feature types, sorted by namespace"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<WFS_SERVICE_URL>/wfs?\n    service=wfs&\n    version={WFS_SERVICE_VERSION}&\n    request=DescribeFeatureType\n")),(0,n.kt)("p",null,"The following GET request will list information about a specific feature type named ",(0,n.kt)("inlineCode",{parentName:"p"},"namespace:featuretype"),", the response will be formatted in ",(0,n.kt)("inlineCode",{parentName:"p"},"application/json")," format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<WFS_SERVICE_URL>/wfs?\n    service=wfs&\n    version={WFS_SERVICE_VERSION}&\n    request=DescribeFeatureType&\n    typeNames=namespace:featuretype&\n    outputFormat=application/json\n")),(0,n.kt)("h2",{id:"getfeature"},"GetFeature"),(0,n.kt)("p",null,"The GetFeature request queries the server with a set of parameters describing the geographic features to be returned, the request can also be sorted and/or limited."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Is Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"typeNames"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the feature type to query from (use typeName for WFS 1.1.0 and earlier)"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exceptions"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Format for reporting exceptions, choose one of (",(0,n.kt)("inlineCode",{parentName:"td"},"text/xml"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"application/json"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"text/javascript"),")"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"text/xml"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"outputFormat"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Defines the scheme description language used to describe feature types (one of ",(0,n.kt)("inlineCode",{parentName:"td"},"gml2"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"gml3"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"shapefile"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"application/json"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"text/javascript"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"csv"),")"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"gml2 for WFS v1.0.0")," and ",(0,n.kt)("strong",{parentName:"td"},"gml3 for WFS v1.1.0 and v2.0.0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"featureId"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"The Id of a specific feature"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"count"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"The maximum number of features to be returned. Use maxFeatures parameter for WFS versions earlier than 2.0.0"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"startIndex"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"The index from which the server shall begin presenting results in the response"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sortBy"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"An attribute to sort the features by (append a +A or +D to the request for ascending or descending order. Default sort is in ascending order.)"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"propertyName"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Select specific attributes to be retrieved from the feature. A single attribute, or multiple attributes separated by commas can be selected.  If some properties in the feature are not-nillable or if they have ",(0,n.kt)("inlineCode",{parentName:"td"},"minOccurs")," greater than zero they will be included in the result even if not requested"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"bbox"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Search for features that are contained (or partially contained) inside a coordinates box. The format of the BBOX parameter is bbox=a1,b1,a2,b2,","[crs]"," where a1, b1, a2, b2 represent the coordinate values. The optional crs parameter is used to name the CRS for the bbox coordinates. bottom corner coordinate (left or right) to be provided first"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"srsName"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"The coordinate reference system for the returned features to be encoded in"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resultType"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},'The possible values for this parameter are "results" and "hits". If the value is set to "results" the server shall generate a complete response document containing resources that satisfy the operation. If the value is set to "hits" the server shall generate an empty response document containing no resource instances and the root element of the response container shall contain the count of the total number of resources that the operation found and the value for the number of resources presented in the response document shall be set to zero.'),(0,n.kt)("td",{parentName:"tr",align:null},"-")))),(0,n.kt)("p",null,"The following GET request will get at most the top N features of feature type named ",(0,n.kt)("inlineCode",{parentName:"p"},"namespace:featuretype")," sorted by attributeA, the response will be formatted in ",(0,n.kt)("inlineCode",{parentName:"p"},"application/json")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<WFS_SERVICE_URL>/wfs?\n    service=wfs&\n    version={WFS_SERVICE_VERSION}&\n    request=GetFeature&\n    typeNames=namespace:featuretype&\n    outputFormat=application/json&\n    count=N&\n    sortBy=attributeA\n")),(0,n.kt)("p",null,"The following GET request will search for all the features contained or partially contained by the specified bounding box in the specified coordinate reference system (",(0,n.kt)("inlineCode",{parentName:"p"},"EPSG:4326"),").\nThe retrieved features will be encoded in ",(0,n.kt)("inlineCode",{parentName:"p"},"EPSG:4326")," as well as requested by the srsName parameter value."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<WFS_SERVICE_URL>/wfs?\n    service=wfs&\n    version={WFS_SERVICE_VERSION}&\n    request=GetFeature&\n    typeNames=namespace:featuretype&\n    bbox=51.607317,5.106151,51.629884,5.228022,urn:ogc:def:crs:EPSG::4326&\n    srsName=urn:ogc:def:crs:EPSG::4326\n")),(0,n.kt)("p",null,"The following GET request will retrieve a specific feature by provided featureId FID"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<WFS_SERVICE_URL>/wfs?\n    service=wfs&\n    version={WFS_SERVICE_VERSION}&\n    request=GetFeature&\n    typeNames=namespace:featuretype&\n    featureId=FID\n")))}m.isMDXComponent=!0},63219:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/web_feature_service_ogc-c63416a4d97e51e4c2e468565bb21539.pdf"}}]);
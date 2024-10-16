"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[3349],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(k,i(i({ref:n},p),{},{components:t})):o.createElement(k,i({ref:n},p))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29194:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={id:"vector-feedback-api-service",slug:"feedback",title:"Feedback Api \ud83d\udc8c",description:"Feedback for Geocoding responses",tags:["vector","API","osm","Geocoding"]},i="Feedback Api \ud83d\udc8c",s={unversionedId:"MapColonies/vector/Services/geocoding/vector-feedback-api-service",id:"MapColonies/vector/Services/geocoding/vector-feedback-api-service",title:"Feedback Api \ud83d\udc8c",description:"Feedback for Geocoding responses",source:"@site/docs/MapColonies/vector/Services/geocoding/feedback_api.md",sourceDirName:"MapColonies/vector/Services/geocoding",slug:"/MapColonies/vector/Services/geocoding/feedback",permalink:"/developer-portal/docs/MapColonies/vector/Services/geocoding/feedback",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/vector/Services/geocoding/feedback_api.md",tags:[{label:"vector",permalink:"/developer-portal/docs/tags/vector"},{label:"API",permalink:"/developer-portal/docs/tags/api"},{label:"osm",permalink:"/developer-portal/docs/tags/osm"},{label:"Geocoding",permalink:"/developer-portal/docs/tags/geocoding"}],version:"current",frontMatter:{id:"vector-feedback-api-service",slug:"feedback",title:"Feedback Api \ud83d\udc8c",description:"Feedback for Geocoding responses",tags:["vector","API","osm","Geocoding"]},sidebar:"docSidebar",previous:{title:"Geocoding \ud83d\udccd",permalink:"/developer-portal/docs/MapColonies/vector/Services/geocoding/info"},next:{title:"Nominatim \ud83c\udf0d",permalink:"/developer-portal/docs/MapColonies/vector/Services/nominatim_service"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Response headers",id:"response-headers",level:5},{value:"Response payload",id:"response-payload",level:5}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"feedback-api-"},"Feedback Api \ud83d\udc8c"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Click ",(0,r.kt)("a",{parentName:"p",href:"/docs/MapColonies/vector/services/feedback-api/api"},"here")," for the OpenAPI")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you're not familier with Geocoding API, ",(0,r.kt)("a",{parentName:"p",href:"/developer-portal/docs/MapColonies/vector/Services/geocoding/info"},"read more here"),".")),(0,r.kt)("p",null,"Geocoding's feedback ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," collects ",(0,r.kt)("inlineCode",{parentName:"p"},"usage data")," from the ",(0,r.kt)("a",{parentName:"p",href:"/developer-portal/docs/MapColonies/vector/Services/geocoding/info"},"Geocoding API")," user's response and stores it for BI purposes. We use this ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," to better understand and measure the relevance of our responses and adjust the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"algorithm")," accordingly.",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("p",null,"Once a user gets a response from ",(0,r.kt)("inlineCode",{parentName:"p"},"Geocoding"),", the requesting system will send the ",(0,r.kt)("inlineCode",{parentName:"p"},"request ID")," and the chosen ",(0,r.kt)("inlineCode",{parentName:"p"},"response ID")," back to us.",(0,r.kt)("br",null)),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"You will need an API token as part of the ",(0,r.kt)("a",{parentName:"strong",href:"/docs/MapColonies/authentication"},"service authentication"),". ","\xa0"))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="Geocoding\'s Query Search Request"',title:"\"Geocoding's",Query:!0,Search:!0,'Request"':!0},"curl --location '<geocoding_url>/search/location/query?query=school' \\\n--header 'x-api-key: <x-api-key>' \\\n--header 'x-user-id: <x-user-id>'\n")),(0,r.kt)("details",{style:{"background-color":"#f6f8fa",border:"var(--ifm-alert-border-width) solid var(--ifm-alert-border-color)","border-left-width":"var(--ifm-alert-border-left-width)",color:"black"}},(0,r.kt)("summary",null,"Response \ud83d\udc47"),(0,r.kt)("h5",{id:"response-headers"},"Response headers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"x-request-id": "4ac9cb81-8d6c-425d-b808-0c868bbaa97c"\n')),(0,r.kt)("h5",{id:"response-payload"},"Response payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "FeatureCollection",\n    "geocoding": {\n        "version": "0.1.0",\n        "query": {\n            "query": "school",\n            "disable_fuzziness": false,\n            "limit": 5\n        },\n        "response": {\n            "results_count": 2,\n            "max_score": 1.2880917,\n            "match_latency_ms": 7,\n            "name": "",\n            "place_types": [\n                "education"\n            ],\n            "sub_place_types": [\n                "school"\n            ],\n            "hierarchies": []\n        }\n    },\n    "features": [\n        {\n            "type": "Feature",\n            "geometry": {\n                "coordinates": [ [ [ -118.30812263653988, 33.71684417247593 ],\n                        [ -118.30861990876181, 33.71674433152869 ],\n                        [ -118.30879709771484, 33.71635922964194 ],\n                        [ -118.30619642115158, 33.71550819588987 ],\n                        [ -118.30586490633668, 33.715921827872904 ],\n                        [ -118.30587062210924, 33.716183318328746 ],\n                        [ -118.30812263653988, 33.71684417247593 ]\n                    ]\n                ],\n                "type": "Polygon"\n            },\n            "properties": {\n                "score": 1.2880917,\n                "matches": [ { "layer": "osm_schools", "source": "OSM", "source_id": [ "1a5b981b-bb0e-44dd-b9e2-424b92f2de49" ] } ],\n                "names": { "en": [ "White Point Elementary School" ], "fr": [ "Escuela Primaria White Point" ], "default": [ "White Point Elementary School" ], "display": "White Point Elementary School" },\n                "placetype": "education",\n                "sub_placetype": "school",\n                "regions": [ { "region": "USA", "sub_region_names": [ "Los Angeles" ] } ]\n            }\n        },\n        {\n            "type": "Feature",\n            "geometry": {\n                "coordinates": [ [\n                        [ 2.346441270696971, 48.88088750665477 ],\n                        [ 2.3462780852304945, 48.88018258877358 ],\n                        [ 2.347503576087604, 48.87999951892243 ],\n                        [ 2.347737155284733, 48.88070864783427 ],\n                        [ 2.346441270696971, 48.88088750665477 ] ] ],\n                "type": "Polygon"\n            },\n            "properties": {\n                "score": 1.2880917,\n                "matches": [\n                    { "layer": "osm_schools", "source": "OSM", "source_id": [ "dc02a3f9-156a-4f61-85bd-fd040cd322a3" ] } ],\n                "names": { "en": [ "Wi School Paris 9" ], "fr": [ "Ecole Wi Paris 9" ], "default": [ "Wi School Paris 9" ], "display": "Wi School Paris 9" },\n                "placetype": "education",\n                "sub_placetype": "school",\n                "regions": [ { "region": "FRANCE", "sub_region_names": [ "Paris" ] } ]\n            }\n        }\n    ]\n}\n'))),(0,r.kt)("p",null,"Notice this response listed 2 features.",(0,r.kt)("br",null),(0,r.kt)("br",null),"\nWhen sending the response to the ",(0,r.kt)("inlineCode",{parentName:"p"},"feedback API"),", you need to provide two parameters:",(0,r.kt)("br",null),"\n\ud83d\udccd Request ID - from the header ",(0,r.kt)("inlineCode",{parentName:"p"},"'x-request-id'"),".",(0,r.kt)("br",null),"\n\ud83d\udccd Chosen Response ID - the ID of the user's selected response (corresponding index of the result). ",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("p",null,"Lets think of the current response as the actual response in this case:",(0,r.kt)("br",null),"\n\ud83d\udccd If the user chose ",(0,r.kt)("inlineCode",{parentName:"p"},'"White Point Elementary School"'),", the Chosen Response ID would be ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),".",(0,r.kt)("br",null),"\n\ud83d\udccd If the user chose ",(0,r.kt)("inlineCode",{parentName:"p"},'"Wi School Paris 9"'),", the Chosen Response ID would be ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),".",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("p",null,"Then our request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"feedback API")," would look like this: ",(0,r.kt)("br",null)),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="Geocoding\'s Feedback Api Request"',title:"\"Geocoding's",Feedback:!0,Api:!0,'Request"':!0},"curl --location --request POST '<feedback_api_url>/feedback' \\\n--header 'x-api-key: <x-api-key>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"request_id\": \"4ac9cb81-8d6c-425d-b808-0c868bbaa97c\",\n    \"chosen_response_id\": 1\n}'\n")),(0,r.kt)("p",null,"And we will receive (in case ",(0,r.kt)("inlineCode",{parentName:"p"},"request_id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"chosen_response_id")," actually exist):",(0,r.kt)("br",null)),(0,r.kt)("details",{style:{"background-color":"#f6f8fa",border:"var(--ifm-alert-border-width) solid var(--ifm-alert-border-color)","border-left-width":"var(--ifm-alert-border-left-width)",color:"black"}},(0,r.kt)("summary",null,"Response \ud83d\udc47"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"204     Feedback has been sent succesfully\n"))))}u.isMDXComponent=!0}}]);
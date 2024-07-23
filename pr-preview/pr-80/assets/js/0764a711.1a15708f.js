"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[9745],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>g});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?t.createElement(g,l(l({ref:n},c),{},{components:r})):t.createElement(g,l({ref:n},c))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71379:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var t=r(87462),o=(r(67294),r(3905));const i={id:"3d-tile-server",slug:"3d-tile-server",title:"3D Tile Model Server",tags:["3D","b3dm","smart-reality","photorealistic","API"]},l="3D Tile Server",a={unversionedId:"MapColonies/3D/services/3d-tile-server",id:"MapColonies/3D/services/3d-tile-server",title:"3D Tile Model Server",description:"Hardware Acceleration for WebGL / WebGL2 is crucial for 3D tiles rendering performance. for more information click here.",source:"@site/docs/MapColonies/3D/services/3Dtiles_server.md",sourceDirName:"MapColonies/3D/services",slug:"/MapColonies/3D/services/3d-tile-server",permalink:"/developer-portal/pr-preview/pr-80/docs/MapColonies/3D/services/3d-tile-server",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/3D/services/3Dtiles_server.md",tags:[{label:"3D",permalink:"/developer-portal/pr-preview/pr-80/docs/tags/3-d"},{label:"b3dm",permalink:"/developer-portal/pr-preview/pr-80/docs/tags/b-3-dm"},{label:"smart-reality",permalink:"/developer-portal/pr-preview/pr-80/docs/tags/smart-reality"},{label:"photorealistic",permalink:"/developer-portal/pr-preview/pr-80/docs/tags/photorealistic"},{label:"API",permalink:"/developer-portal/pr-preview/pr-80/docs/tags/api"}],version:"current",frontMatter:{id:"3d-tile-server",slug:"3d-tile-server",title:"3D Tile Model Server",tags:["3D","b3dm","smart-reality","photorealistic","API"]},sidebar:"docSidebar",previous:{title:"Services",permalink:"/developer-portal/pr-preview/pr-80/docs/category/services-2"},next:{title:"3D Model Viewer \ud83c\udf0d",permalink:"/developer-portal/pr-preview/pr-80/docs/MapColonies/3D/services/3dViewer/3d-viewer"}},p={},s=[],c={toc:s},d="wrapper";function u(e){let{components:n,...r}=e;return(0,o.kt)(d,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"3d-tile-server"},"3D Tile Server"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Hardware Acceleration for WebGL / WebGL2 is crucial for 3D tiles rendering performance. for more information click ",(0,o.kt)("a",{parentName:"p",href:"/docs/MapColonies/3D/Guides/HardwareAcceleration"},"here"),".")),(0,o.kt)("p",null,"In 3D, the 3DTiles server uses the ",(0,o.kt)("strong",{parentName:"p"},"XYZ protocol")," to serve the models files."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How does it work?")),(0,o.kt)("p",null,"Just send a get request with the file you want to get."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Pay attention to the authentication you need to provide!\nFor further information, see: ",(0,o.kt)("a",{parentName:"p",href:"/docs/MapColonies/authentication"},"Authentication"))),(0,o.kt)("p",null,"The get request should be like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-curl"},"<3D_MODEL_SERVING_SERVICE_URL>/[PATH_TO_FILE_TILESET_JSON]\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"[PATH_TO_FILE_TILESET_JSON]")," - the full path to the wanted file."),(0,o.kt)("p",null,"An example:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<3D_MODEL_SERVING_SERVICE_URL>/path/tileset.json")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This request is ",(0,o.kt)("strong",{parentName:"p"},"without")," the authentication")),(0,o.kt)("p",null,"The response is the content of the file from the request."),(0,o.kt)("p",null,"An example:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Response example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "asset": {\n    "version": "0.0",\n    "tilesetVersion": "1.0"\n  },\n  "geometricError": 27596589.783091642,\n  "root": {\n    "boundingVolume": {\n      "region": [\n        -1.3002877215936859,\n        0.7041575058907783,\n        -1.2780350790633774,\n        0.7172779626921096,\n        0,\n        540.9999999997664\n      ]\n    },\n    "geometricError": 597.7486716289187,\n    "refine": "add",\n    "content": {\n      "url": "0/0/0.b3dm",\n      "boundingVolume": {\n        "region": [\n          -1.3001359425259444,\n          0.7046416776785741,\n          -1.2847412414241195,\n          0.715974250610089,\n          0,\n          45.4\n        ]\n      }\n    },\n    "children": [\n      {\n        "boundingVolume": {\n          "region": [\n            -1.3002877215936859,\n            0.7041575058907783,\n            -1.2901045718929864,\n            0.7096268127518264,\n            0,\n            90.4\n          ]\n        },\n        "geometricError": 315.07835765914325,\n        "content": {\n          "url": "1/0/0.b3dm",\n          "boundingVolume": {\n            "region": [\n              -1.3002838399814296,\n              0.7042702559057864,\n              -1.2901097869367912,\n              0.7096162412925472,\n              0,\n              45.4\n            ]\n          }\n        },\n        "children": [\n          {\n            "boundingVolume": {\n              "region": [\n                -1.3002877215936859,\n                0.7041575058907783,\n                -1.292420442296141,\n                0.7082788949705112,\n                0,\n                30.7\n              ]\n            },\n            "geometricError": 208.26652664025082,\n            "content": {\n              "url": "2/0/0.b3dm",\n              "boundingVolume": {\n                "region": [\n                  -1.3002834211024092,\n                  0.7042036838121276,\n                  -1.2933332268056539,\n                  0.7082788949705112,\n                  0,\n                  16.2\n                ]\n              }\n            },\n            "children": [\n              {\n                "boundingVolume": {\n                  "region": [\n                    -1.3002852257728557,\n                    0.7041710828070297,\n                    -1.2947794415304408,\n                    0.707218443388975,\n                    0,\n                    22.4\n                  ]\n                },\n                "geometricError": 106.35154744399651,\n                "content": {\n                  "url": "3/0/0.b3dm",\n                  "boundingVolume": {\n                    "region": [\n                      -1.3002679103613466,\n                      0.7041822878208275,\n                      -1.2947794415304408,\n                      0.707218443388975,\n                      0,\n                      22.4\n                    ]\n                  }\n                },\n                "children": [\n                  {\n                    "boundingVolume": {\n                      "region": [\n                        -1.3002852257728557,\n                        0.7041710828070297,\n                        -1.296688695596441,\n                        0.7060297275607097,\n                        0,\n                        0\n                      ]\n                    },\n                    "geometricError": 0,\n                    "content": {\n                      "url": "4/0/0.b3dm"\n                    }\n                  },\n                  {\n                    "boundingVolume": {\n                      "region": [\n                        -1.2963847011286456,\n                        0.7044581196558126,\n                        -1.2947855885800665,\n                        0.7069076351557798,\n                        0,\n                        15.4\n                      ]\n                    },\n                    "geometricError": 23.081303749744492,\n                    "content": {\n                      "url": "4/1/0.b3dm"\n                    },\n                    "children": [\n                      {\n                        "boundingVolume": {\n                          "region": [\n                            -1.295899761395979,\n                            0.7051670619259972,\n                            -1.2956769317197185,\n                            0.7068777673362904,\n                            0,\n                            11.4\n                          ],\n                          "geometricError": 0,\n                          "content": {\n                            "url": "5/2/0.b3dm"\n                          }\n                        }\n                      },\n                      {\n                        "boundingVolume": {\n                          "region": [\n                            -1.2959047460563227,\n                            0.7068762419185242,\n                            -1.2955470390807973,\n                            0.7069071534449063,\n                            0,\n                            10.7\n                          ]\n                        },\n                        "geometricError": 0,\n                        "content": {\n                          "url": "3/0/7.b3dm"\n                        },\n                        "children": [\n                          {\n                            "boundingVolume": {\n                              "region": [\n                                -1.2949925392507924,\n                                0.7154444192637318,\n                                -1.294344742845622,\n                                0.7164660163254601,\n                                0,\n                                0\n                              ]\n                            },\n                            "geometricError": 0,\n                            "content": {\n                              "url": "4/1/14.b3dm"\n                            }\n                          }\n                        ]\n                      }\n                    ]\n                  }\n                ]\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n}\n'))),(0,o.kt)("p",null,"This get request is actually the URL from the ",(0,o.kt)("inlineCode",{parentName:"p"},"mc:links")," element from the records showed in catalog service."))}u.isMDXComponent=!0}}]);
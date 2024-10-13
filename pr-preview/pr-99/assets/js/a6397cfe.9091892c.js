"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[3107],{58631:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=s(74848),i=s(28453);const t={sidebar_position:1,id:"osm-nominatim-search",slug:"Osm-Search-API",title:"Search API",tags:["osm","search","API","nominatim"]},a="Search queries",o={id:"MapColonies/openstreetmap/nominatim/osm-nominatim-search",title:"Search API",description:"The search API allows you to look up a location from a textual description",source:"@site/docs/MapColonies/openstreetmap/nominatim/search.md",sourceDirName:"MapColonies/openstreetmap/nominatim",slug:"/MapColonies/openstreetmap/nominatim/Osm-Search-API",permalink:"/developer-portal/pr-preview/pr-99/docs/MapColonies/openstreetmap/nominatim/Osm-Search-API",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/nominatim/search.md",tags:[{inline:!0,label:"osm",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/osm"},{inline:!0,label:"search",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/search"},{inline:!0,label:"API",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/api"},{inline:!0,label:"nominatim",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/nominatim"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"osm-nominatim-search",slug:"Osm-Search-API",title:"Search API",tags:["osm","search","API","nominatim"]},sidebar:"docSidebar",previous:{title:"Nominatim APIs",permalink:"/developer-portal/pr-preview/pr-99/docs/category/nominatim-apis"},next:{title:"Reverse GeoCoding API",permalink:"/developer-portal/pr-preview/pr-99/docs/MapColonies/openstreetmap/nominatim/Osm-Reverse-Search-API"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Output format",id:"output-format",level:3},{value:"Output details",id:"output-details",level:3},{value:"Language of results",id:"language-of-results",level:3},{value:"Result limitation",id:"result-limitation",level:3},{value:"Polygon output",id:"polygon-output",level:3},{value:"Other",id:"other",level:3},{value:"Examples",id:"examples",level:2},{value:"XML with KML polygon",id:"xml-with-kml-polygon",level:5},{value:"JSON with SVG polygon",id:"json-with-svg-polygon",level:5},{value:"JSON with address details",id:"json-with-address-details",level:5},{value:"GeoJSON",id:"geojson",level:5},{value:"GeocodeJSON",id:"geocodejson",level:5}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"search-queries",children:"Search queries"})}),"\n",(0,r.jsx)(n.p,{children:"The search API allows you to look up a location from a textual description\nor address. Nominatim supports structured and free-form search queries."}),"\n",(0,r.jsxs)(n.p,{children:["The search query may also contain\n",(0,r.jsx)(n.em,{children:"special phrases"}),' (for example "airport near lod")\nwhich are translated into specific OpenStreetMap (OSM) tags (e.g. Pub => ',(0,r.jsx)(n.code,{children:"amenity=pub"}),").\nThis can be used to narrow down the kind of objects to be returned."]}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.p,{children:"The search API has the following format:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"   <VECTOR-NOMINATIM-SERVICE_URL>/search?<params>\n"})}),"\n",(0,r.jsx)(n.p,{children:"The search term may be specified with two different sets of parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"q=<query>"})}),"\n",(0,r.jsxs)(n.p,{children:["Free-form query string to search for. ",(0,r.jsx)("br",{}),"\nFree-form queries are processed first left-to-right and then right-to-left if that fails. So you may search for\n",(0,r.jsx)(n.a,{href:"%3CVECTOR-NOMINATIM-SERVICE_URL%3E/search?q=pilkington+avenue,birmingham",children:"pilkington avenue, birmingham"})," as well as for\n",(0,r.jsx)(n.a,{href:"%3CVECTOR-NOMINATIM-SERVICE_URL%3E/search?q=birmingham,+pilkington+avenue",children:"birmingham, pilkington avenue"}),". ",(0,r.jsx)("br",{}),"\nCommas are optional, but improve performance by reducing the complexity of the search. ",(0,r.jsx)("br",{}),"\nFor searching with special phrases you can read more ",(0,r.jsx)(n.a,{href:"/docs/MapColonies/openstreetmap/nominatim/Osm-special-phrases",children:"here"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"street=<housenumber> <streetname>"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"city=<city>"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"county=<county>"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"state=<state>"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"country=<country>"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"postalcode=<postalcode>"})}),"\n",(0,r.jsxs)(n.p,{children:["Alternative query string format split into several parameters for structured requests.\nStructured requests are faster but are less robust against alternative\nOSM tagging schemas. ",(0,r.jsx)(n.strong,{children:"Do not combine with"})," ",(0,r.jsx)(n.code,{children:"q=<query>"})," ",(0,r.jsx)(n.strong,{children:"parameter"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Both query forms accept the additional parameters listed below."}),"\n",(0,r.jsx)(n.h3,{id:"output-format",children:"Output format"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"format=[xml|json|jsonv2|geojson|geocodejson]"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/MapColonies/openstreetmap/nominatim/Osm-output-API",children:"Place Output Formats"})," for details on each format. (Default: jsonv2)"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"json_callback=<string>"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Wrap JSON output in a callback function ",(0,r.jsx)(n.code,{children:"JSONP"})," i.e. ",(0,r.jsx)(n.code,{children:"<string>(<json>)"}),".\nOnly has an effect for JSON output formats."]}),"\n",(0,r.jsx)(n.h3,{id:"output-details",children:"Output details"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"addressdetails=[0|1]"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Include a breakdown of the address into elements. (Default: 0)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"extratags=[0|1]"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Include additional information in the result if available,\ne.g. wikipedia link, opening hours. (Default: 0)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"namedetails=[0|1]"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Include a list of alternative names in the results. These may include\nlanguage variants, references, operator and brand. (Default: 0)"}),"\n",(0,r.jsx)(n.h3,{id:"language-of-results",children:"Language of results"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"accept-language=<browser language string>"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Preferred language order for showing search results, overrides the value\nspecified in the ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language",children:'"Accept-Language" HTTP header'}),".\nEither use a standard RFC2616 accept-language string or a simple\ncomma-separated list of language codes."]}),"\n",(0,r.jsx)(n.h3,{id:"result-limitation",children:"Result limitation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"countrycodes=<countrycode>[,<countrycode>][,<countrycode>]..."})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Limit search results to one or more countries. ",(0,r.jsx)(n.code,{children:"<countrycode>"})," must be the\n",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2",children:"ISO 3166-1alpha2"})," code,\ne.g. ",(0,r.jsx)(n.code,{children:"gb"})," for the United Kingdom, ",(0,r.jsx)(n.code,{children:"de"})," for Germany."]}),"\n",(0,r.jsx)(n.p,{children:"Each place in Nominatim is assigned to one country code based\non OSM country boundaries. In rare cases a place may not be in any country\nat all, for example, in international waters."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"exclude_place_ids=<place_id,[place_id],[place_id]"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you do not want certain OSM objects to appear in the search\nresult, give a comma separated list of the ",(0,r.jsx)(n.code,{children:"place_id"}),"s you want to skip.\nThis can be used to retrieve additional search results. For example, if a\nprevious query only returned a few results, then including those here would\ncause the search to return other, less accurate, matches (if possible)."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"limit=<integer>"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Limit the number of returned results. (Default: 10, Maximum: 50)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"viewbox=<x1>,<y1>,<x2>,<y2>"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The preferred area to find search results. Any two corner points of the box\nare accepted as long as they span a real box. ",(0,r.jsx)(n.code,{children:"x"})," is longitude,\n",(0,r.jsx)(n.code,{children:"y"})," is latitude."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"bounded=[0|1]"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When a viewbox is given, restrict the result to items contained within that\nviewbox (see above). When ",(0,r.jsx)(n.code,{children:"viewbox"})," and ",(0,r.jsx)(n.code,{children:"bounded=1"})," are given, an amenity\nonly search is allowed. Give the special keyword for the amenity in square\nbrackets, e.g. ",(0,r.jsx)(n.code,{children:"[pub]"})," and a selection of objects of this type is returned.\nThere is no guarantee that the result is complete. (Default: 0)"]}),"\n",(0,r.jsx)(n.h3,{id:"polygon-output",children:"Polygon output"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"polygon_geojson=1"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"polygon_kml=1"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"polygon_svg=1"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"polygon_text=1"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Output geometry of results as a GeoJSON, KML, SVG or WKT. Only one of these\noptions can be used at a time. (Default: 0)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"polygon_threshold=0.0"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return a simplified version of the output geometry. The parameter is the\ntolerance in degrees with which the geometry may differ from the original\ngeometry. Topology is preserved in the result. (Default: 0.0)"}),"\n",(0,r.jsx)(n.h3,{id:"other",children:"Other"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"email=<valid email address>"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If you are making large numbers of request please include an appropriate email\naddress to identify your requests (only relevant when using the service in the internet)."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"dedupe=[0|1]"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Sometimes you have several objects in OSM identifying the same place or\nobject in reality. The simplest case is a street being split into many\ndifferent OSM ways due to different characteristics. Nominatim will\nattempt to detect such duplicates and only return one match unless\nthis parameter is set to 0. (Default: 1)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"debug=[0|1]"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'Output assorted developer debug information. Data on internals of Nominatim\'s\n"Search Loop" logic, and SQL queries. The output is (rough) HTML format.\nThis overrides the specified machine readable format. (Default: 0)'}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.h5,{id:"xml-with-kml-polygon",children:"XML with KML polygon"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"/search.html?q=\u05e0\u05d5\u05d4+\u05e9\u05d0\u05e0\u05df+20+\u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd&polygon_geojson=1&addressdetails=1"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:'title="XML with KML polygon"',children:'  <searchresults timestamp="Mon, 23 Jan 23 11:14:56 +0000"\n    attribution="Data \xa9 OpenStreetMap contributors, ODbL 1.0. http://www.openstreetmap.org/copyright"\n    querystring="\u05e0\u05d5\u05d4 \u05e9\u05d0\u05e0\u05df 20 \u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd" exclude_place_ids="135102101"\n    more_url="<VECTOR-NOMINATIM-SERVICE_URL>/search/?q=%D7%A0%D7%95%D7%94+%D7%A9%D7%90%D7%A0%D7%9F+20+%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D&addressdetails=1&polygon_geojson=1&exclude_place_ids=135102101&format=xml&accept-language=en-GB%2Cen-US%3Bq%3D0.9%2Cen%3Bq%3D0.8">\n    <place place_id="135102101" osm_type="way" osm_id="117395912" place_rank="26" address_rank="26"\n      boundingbox="31.7701362,31.7728728,35.2005205,35.2011552" geojson="{" type":" LineString"," coordinates":[[35.2005205,31.7728728],[35.2006515,31.7727207],[35.2008554,31.7724425],[35.2008817,31.7722532],[35.2009251,31.7719408],[35.2010378,31.7709603],[35.2010813,31.77059],[35.2011075,31.7703674],[35.2011369,31.7702248],[35.2011552,31.7701362]]}" lat="31.7719408"\n      lon="35.2009251"\n      display_name="Nave Shaanan, Nayot, Jerusalem, Jerusalem Subdistrict, Jerusalem District, 9218812, Israel"\n      class="highway" type="residential" importance="0.10001">\n      <road>Nave Shaanan</road>\n      <suburb>Nayot</suburb>\n      <city>Jerusalem</city>\n      <state_district>Jerusalem Subdistrict</state_district>\n      <state>Jerusalem District</state>\n      <ISO3166-2-lvl4>IL-JM</ISO3166-2-lvl4>\n      <postcode>9218812</postcode>\n      <country>Israel</country>\n      <country_code>il</country_code>\n    </place>\n  </searchresults>\n'})}),"\n",(0,r.jsx)(n.h5,{id:"json-with-svg-polygon",children:"JSON with SVG polygon"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"/search.html?q=\u05e9\u05d3\u05e8\u05d5\u05ea+\u05e8\u05d5\u05d8\u05e9\u05d9\u05dc\u05d3+\u05ea\u05dc+\u05d0\u05d1\u05d9\u05d1&format=jsonv2&addressdetails=1&limit=1"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="JSON with SVG polygon"',children:'    {\n        "place_id": 144435067,\n        "licence": "Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",\n        "osm_type": "way",\n        "osm_id": 154741757,\n        "boundingbox": [\n            "32.0635149",\n            "32.0681999",\n            "34.7729215",\n            "34.7779348"\n        ],\n        "lat": "32.0654291",\n        "lon": "34.7766695",\n        "display_name": "Rothschild Boulevard, Tel Aviv, Lev Tel Aviv, Tel Aviv-Yafo, Tel Aviv Subdistrict, Tel Aviv District, 6688209, Israel",\n        "class": "highway",\n        "type": "tertiary",\n        "importance": 0.10000999999999993,\n        "address": {\n            "road": "Rothschild Boulevard",\n            "residential": "Tel Aviv",\n            "suburb": "Lev Tel Aviv",\n            "city": "Tel Aviv-Yafo",\n            "state_district": "Tel Aviv Subdistrict",\n            "state": "Tel Aviv District",\n            "ISO3166-2-lvl4": "IL-TA",\n            "postcode": "6688209",\n            "country": "Israel",\n            "country_code": "il"\n        },\n        "svg": "M 34.7779348 -32.0681999 L 34.7779248 -32.0681693 34.777464 -32.0667233 34.7774456 -32.0666655 34.7774298 -32.0666189 34.7771958 -32.0659273 34.7767089 -32.0654665 34.7766695 -32.0654291 34.7755674 -32.0643757 34.7748309 -32.0641328 34.7747835 -32.0641179 34.7747331 -32.0641021 34.7744227 -32.0640012 34.7741919 -32.0639261 34.7740025 -32.0638618 34.7737944 -32.0637997 34.7737636 -32.0637897 34.7729979 -32.0635408 34.7729506 -32.0635243 34.7729215 -32.0635149"\n    }\n'})}),"\n",(0,r.jsx)(n.h5,{id:"json-with-address-details",children:"JSON with address details"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"/search.html?addressdetails=1&q=bakery+in+beer+sheba+&format=json&limit=1"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="JSON with address details"',children:'    {\n        "place_id": 15852500,\n        "licence": "Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",\n        "osm_type": "node",\n        "osm_id": 1772765812,\n        "boundingbox": [\n            "31.2447187",\n            "31.2448187",\n            "34.8124668",\n            "34.8125668"\n        ],\n        "lat": "31.2447687",\n        "lon": "34.8125168",\n        "display_name": "Harishonim bakery, Eliyahu Nawi, Beersheba Industrial Area, Beer-Sheba, Beersheba Subdistrict, South District, 8441410, Israel",\n        "class": "shop",\n        "type": "bakery",\n        "importance": 0.40001,\n        "icon": "<VECTOR-NOMINATIM-SERVICE_URL>/ui/mapicons/shopping_bakery.p.20.png",\n        "address": {\n            "shop": "Harishonim bakery",\n            "road": "Eliyahu Nawi",\n            "suburb": "Beersheba Industrial Area",\n            "city": "Beer-Sheba",\n            "state_district": "Beersheba Subdistrict",\n            "state": "South District",\n            "ISO3166-2-lvl4": "IL-D",\n            "postcode": "8441410",\n            "country": "Israel",\n            "country_code": "il"\n        }\n    }\n'})}),"\n",(0,r.jsx)(n.h5,{id:"geojson",children:"GeoJSON"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"/search.html?q=\u05d7\u05d5\u05e8\u05d1+15+\u05d7\u05d9\u05e4\u05d4&format=geojson"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="GeoJSON Format"',children:'{\n    "type": "FeatureCollection",\n    "licence": "Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",\n    "features": [\n        {\n            "type": "Feature",\n            "properties": {\n                "place_id": 123700904,\n                "osm_type": "way",\n                "osm_id": 60468022,\n                "display_name": "Horev Center, 15, Horev, Ahuzzat Shemuel, Carmel Heights District, Haifa, Haifa Subdistrict, Haifa District, 3434120, Israel",\n                "place_rank": 30,\n                "category": "shop",\n                "type": "mall",\n                "importance": 0.11000999999999997\n            },\n            "bbox": [\n                34.9867531,\n                32.7841525,\n                34.9877418,\n                32.785079\n            ],\n            "geometry": {\n                "type": "Point",\n                "coordinates": [\n                    34.98706599757996,\n                    32.7845887\n                ]\n            }\n        }\n    ]\n}\n'})}),"\n",(0,r.jsx)(n.h5,{id:"geocodejson",children:"GeocodeJSON"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"/search.html?q=\u05d4\u05db\u05d5\u05ea\u05dc+\u05d4\u05de\u05e2\u05e8\u05d1\u05d9&format=geocodejson"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="GeocodeJSON Format"',children:'{\n    "type": "FeatureCollection",\n    "geocoding": {\n        "version": "0.1.0",\n        "attribution": "Data \xa9 OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",\n        "licence": "ODbL",\n        "query": "\u05d4\u05db\u05d5\u05ea\u05dc \u05d4\u05de\u05e2\u05e8\u05d1\u05d9"\n    },\n    "features": [\n        {\n            "type": "Feature",\n            "properties": {\n                "geocoding": {\n                    "place_id": 267010108,\n                    "osm_type": "way",\n                    "osm_id": 817206833,\n                    "osm_key": "amenity",\n                    "osm_value": "place_of_worship",\n                    "type": "house",\n                    "label": "Western Wall, Wilson\'s Arch, Jewish Quarter, Old City, Jerusalem, Jerusalem Subdistrict, Jerusalem District, 9511208, Israel",\n                    "name": "Western Wall"\n                }\n            },\n            "geometry": {\n                "type": "Point",\n                "coordinates": [\n                    35.23446114230339,\n                    31.776734949999998\n                ]\n            }\n        }\n    ]\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var r=s(96540);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
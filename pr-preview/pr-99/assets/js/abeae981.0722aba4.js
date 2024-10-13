"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[7627],{66934:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>a,contentTitle:()=>w,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var r=s(74848),n=s(28453);const t={id:"ogc-wcs",title:"WCS - Web Coverage Service",description:"Coverage Web Service",slug:"ogc-wcs",tags:["ogc","catalog","dem","protocol","api"]},w="WCS - Web Coverage Service",i={id:"ogc/protocols/ogc-wcs",title:"WCS - Web Coverage Service",description:"Coverage Web Service",source:"@site/docs/ogc/protocols/ogc-wcs.md",sourceDirName:"ogc/protocols",slug:"/ogc/protocols/ogc-wcs",permalink:"/developer-portal/pr-preview/pr-99/docs/ogc/protocols/ogc-wcs",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/ogc/protocols/ogc-wcs.md",tags:[{inline:!0,label:"ogc",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/ogc"},{inline:!0,label:"catalog",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/catalog"},{inline:!0,label:"dem",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/dem"},{inline:!0,label:"protocol",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/protocol"},{inline:!0,label:"api",permalink:"/developer-portal/pr-preview/pr-99/docs/tags/api"}],version:"current",frontMatter:{id:"ogc-wcs",title:"WCS - Web Coverage Service",description:"Coverage Web Service",slug:"ogc-wcs",tags:["ogc","catalog","dem","protocol","api"]},sidebar:"ogcSidebar",previous:{title:"Query Examples",permalink:"/developer-portal/pr-preview/pr-99/docs/ogc/protocols/ogc-csw/ogc-csw-examples"},next:{title:"WFS - Web Feature Service",permalink:"/developer-portal/pr-preview/pr-99/docs/ogc/protocols/ogc-wfs"}},a={},c=[{value:"GetCapabilities",id:"getcapabilities",level:2},{value:"DescribeCoverage",id:"describecoverage",level:2},{value:"GetCoverage",id:"getcoverage",level:2}];function p(e){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components},{Details:t}=o;return t||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"wcs---web-coverage-service",children:"WCS - Web Coverage Service"})}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"https://www.ogc.org/standards/wcs",children:"WCS OGC standard"})," \ud83c\udf10"]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(52897).A+"",title:"download",children:"WCS OGC standard (Offline)"})," \ud83d\udcda"]}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Operation"}),(0,r.jsx)(o.th,{children:"Description"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"GetCapabilities"}),(0,r.jsx)(o.td,{children:"Retrieves a list of the server\u2019s data, as well as valid WCS operations and parameters"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"DescribeCoverage"}),(0,r.jsx)(o.td,{children:"Retrieves an XML document that fully describes the request coverages."})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"GetCoverage"}),(0,r.jsx)(o.td,{children:"Returns a coverage in a well known format. Like a WMS GetMap request, but with several extensions to support the retrieval of coverages."})]})]})]}),"\n",(0,r.jsx)(o.h2,{id:"getcapabilities",children:"GetCapabilities"}),"\n",(0,r.jsxs)(o.p,{children:["A WCS server responding to a ",(0,r.jsx)(o.strong,{children:"GetCapabilities"})," request returns metadata about the service, including supported operations and parameters, and a list of the available layers."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"<DEM-DEM-SERVING-SERVICE_URL>/geoserver/ows?\nservice=WCS&\nversion=2.0.1&\nrequest=GetCapabilities\n"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Response example"}),(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-xml",metastring:'title="Response Example"',children:'  <?xml version="1.0" encoding="UTF-8"?>\n  <wcs:Capabilities xmlns:wcs="http://www.opengis.net/wcs/2.0" xmlns:crs="http://www.opengis.net/wcs/crs/1.0" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:gmlcov="http://www.opengis.net/gmlcov/1.0" xmlns:inspire_common="https://inspire.ec.europa.eu/schemas/common/1.0" xmlns:inspire_dls="https://inspire.ec.europa.eu/schemas/inspire_dls/1.0" xmlns:int="http://www.opengis.net/WCS_service-extension_interpolation/1.0" xmlns:ows="http://www.opengis.net/ows/2.0" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="2.0.1" updateSequence="142" xsi:schemaLocation=" http://www.opengis.net/wcs/2.0 http://schemas.opengis.net/wcs/2.0/wcsGetCapabilities.xsd https://inspire.ec.europa.eu/schemas/inspire_dls/1.0 https://inspire.ec.europa.eu/schemas/inspire_dls/1.0/inspire_dls.xsd">\n    <ows:ServiceIdentification>\n        <ows:Title />\n        <ows:Abstract />\n        <ows:ServiceType>urn:ogc:service:wcs</ows:ServiceType>\n        <ows:ServiceTypeVersion>2.0.1</ows:ServiceTypeVersion>\n        <ows:ServiceTypeVersion>1.1.1</ows:ServiceTypeVersion>\n        <ows:ServiceTypeVersion>1.1.0</ows:ServiceTypeVersion>\n        <ows:Profile>http://www.opengis.net/spec/WCS/2.0/conf/core</ows:Profile>\n        <ows:Profile>http://www.opengis.net/spec/WCS_protocol-binding_get-kvp/1.0.1</ows:Profile>\n        <ows:Profile>http://www.opengis.net/spec/WCS_protocol-binding_post-xml/1.0</ows:Profile>\n        <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_crs/1.0/conf/crs-gridded-coverage</ows:Profile>\n        <ows:Profile>http://www.opengis.net/spec/WCS_geotiff-coverages/1.0/conf/geotiff-coverage</ows:Profile>\n        <ows:Profile>http://www.opengis.net/spec/GMLCOV/1.0/conf/gml-coverage</ows:Profile>\n        <ows:Profile>http://www.opengis.net/spec/GMLCOV/1.0/conf/special-format</ows:Profile>\n        <ows:Profile>http://www.opengis.net/spec/GMLCOV/1.0/conf/multipart</ows:Profile>\n        <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_scaling/1.0/conf/scaling</ows:Profile>\n        <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_crs/1.0/conf/crs</ows:Profile>\n        <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_interpolation/1.0/conf/interpolation</ows:Profile>\n        <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_interpolation/1.0/conf/interpolation-per-axis</ows:Profile>\n        <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_interpolation/1.0/conf/nearest-neighbor</ows:Profile>\n        <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_interpolation/1.0/conf/linear</ows:Profile>\n        <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_interpolation/1.0/conf/cubic</ows:Profile>\n        <ows:Profile>http://www.opengis.net/spec/WCS_service-extension_range-subsetting/1.0/conf/record-subsetting</ows:Profile>\n        <ows:Fees>NONE</ows:Fees>\n        <ows:AccessConstraints>NONE</ows:AccessConstraints>\n    </ows:ServiceIdentification>\n    <ows:ServiceProvider>\n        <ows:ProviderName />\n        <ows:ProviderSite xlink:href="" />\n        <ows:ServiceContact>\n          <ows:ContactInfo>\n              <ows:Phone />\n              <ows:Address />\n          </ows:ContactInfo>\n        </ows:ServiceContact>\n    </ows:ServiceProvider>\n    <ows:OperationsMetadata>\n        <ows:Operation name="GetCapabilities">\n          <ows:DCP>\n              <ows:HTTP>\n                <ows:Get xlink:href="<DEM-DEM-SERVING-SERVICE_URL>/geoserver/wcs?" />\n              </ows:HTTP>\n          </ows:DCP>\n          <ows:DCP>\n              <ows:HTTP>\n                <ows:Post xlink:href="<DEM-DEM-SERVING-SERVICE_URL>/geoserver/wcs?" />\n              </ows:HTTP>\n          </ows:DCP>\n        </ows:Operation>\n        <ows:Operation name="DescribeCoverage">\n          <ows:DCP>\n              <ows:HTTP>\n                <ows:Get xlink:href="<DEM-DEM-SERVING-SERVICE_URL>/geoserver/wcs?" />\n              </ows:HTTP>\n          </ows:DCP>\n          <ows:DCP>\n              <ows:HTTP>\n                <ows:Post xlink:href="<DEM-DEM-SERVING-SERVICE_URL>/geoserver/wcs?" />\n              </ows:HTTP>\n          </ows:DCP>\n        </ows:Operation>\n        <ows:Operation name="GetCoverage">\n          <ows:DCP>\n              <ows:HTTP>\n                <ows:Get xlink:href="<DEM-DEM-SERVING-SERVICE_URL>/geoserver/wcs?" />\n              </ows:HTTP>\n          </ows:DCP>\n          <ows:DCP>\n              <ows:HTTP>\n                <ows:Post xlink:href="<DEM-DEM-SERVING-SERVICE_URL>/geoserver/wcs?" />\n              </ows:HTTP>\n          </ows:DCP>\n        </ows:Operation>\n        <ows:Constraint name="PostEncoding">\n          <ows:AllowedValues>\n              <ows:Value>XML</ows:Value>\n          </ows:AllowedValues>\n        </ows:Constraint>\n    </ows:OperationsMetadata>\n    <wcs:ServiceMetadata>\n        <wcs:formatSupported>application/gml+xml</wcs:formatSupported>\n        <wcs:formatSupported>application/x-gzip</wcs:formatSupported>\n        <wcs:formatSupported>image/jpeg</wcs:formatSupported>\n        <wcs:formatSupported>image/png</wcs:formatSupported>\n        <wcs:formatSupported>image/tiff</wcs:formatSupported>\n        <wcs:formatSupported>text/plain</wcs:formatSupported>\n        <wcs:Extension>\n          <crs:CrsMetadata>\n              <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/2000</crs:crsSupported>\n              <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/100001</crs:crsSupported>\n              <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/100002</crs:crsSupported>\n              <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/100003</crs:crsSupported>\n              <crs:crsSupported>http://www.opengis.net/def/crs/EPSG/0/900913</crs:crsSupported>\n          </crs:CrsMetadata>\n          <int:interpolationSupported>http://www.opengis.net/def/interpolation/OGC/1/nearest-neighbor</int:interpolationSupported>\n          <int:interpolationSupported>http://www.opengis.net/def/interpolation/OGC/1/linear</int:interpolationSupported>\n          <int:interpolationSupported>http://www.opengis.net/def/interpolation/OGC/1/cubic</int:interpolationSupported>\n        </wcs:Extension>\n    </wcs:ServiceMetadata>\n    <wcs:Contents>\n        <wcs:CoverageSummary>\n          <ows:Title>30n030e_20101117_gmted_min075</ows:Title>\n          <ows:Abstract>Generated from GeoTIFF</ows:Abstract>\n          <ows:Keywords>\n              <ows:Keyword>30n030e_20101117_gmted_min075</ows:Keyword>\n              <ows:Keyword>WCS</ows:Keyword>\n              <ows:Keyword>GeoTIFF</ows:Keyword>\n          </ows:Keywords>\n          <wcs:CoverageId>dem__30n030e_20101117_gmted_min075</wcs:CoverageId>\n          <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>\n          <ows:WGS84BoundingBox>\n              <ows:LowerCorner>29.999861111111112 29.99986111111111</ows:LowerCorner>\n              <ows:UpperCorner>59.999861111111116 49.99986111111111</ows:UpperCorner>\n          </ows:WGS84BoundingBox>\n          <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">\n              <ows:LowerCorner>29.999861111111112 29.99986111111111</ows:LowerCorner>\n              <ows:UpperCorner>59.999861111111116 49.99986111111111</ows:UpperCorner>\n          </ows:BoundingBox>\n        </wcs:CoverageSummary>\n        <wcs:CoverageSummary>\n          <ows:Title>gt30e020n40</ows:Title>\n          <ows:Abstract>Generated from GeoTIFF</ows:Abstract>\n          <ows:Keywords>\n              <ows:Keyword>gt30e020n40</ows:Keyword>\n              <ows:Keyword>WCS</ows:Keyword>\n              <ows:Keyword>GeoTIFF</ows:Keyword>\n          </ows:Keywords>\n          <wcs:CoverageId>dem__gt30e020n40</wcs:CoverageId>\n          <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>\n          <ows:WGS84BoundingBox>\n              <ows:LowerCorner>20.000000000000004 -9.999999999980012</ows:LowerCorner>\n              <ows:UpperCorner>59.99999999998401 39.99999999999999</ows:UpperCorner>\n          </ows:WGS84BoundingBox>\n          <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">\n              <ows:LowerCorner>20.000000000000004 -9.999999999980012</ows:LowerCorner>\n              <ows:UpperCorner>59.99999999998401 39.99999999999999</ows:UpperCorner>\n          </ows:BoundingBox>\n        </wcs:CoverageSummary>\n        <wcs:CoverageSummary>\n          <ows:Title>n30_e034_1arc_v3</ows:Title>\n          <ows:Abstract>Generated from GeoTIFF</ows:Abstract>\n          <ows:Keywords>\n              <ows:Keyword>n30_e034_1arc_v3</ows:Keyword>\n              <ows:Keyword>WCS</ows:Keyword>\n              <ows:Keyword>GeoTIFF</ows:Keyword>\n          </ows:Keywords>\n          <wcs:CoverageId>dem__n30_e034_1arc_v3</wcs:CoverageId>\n          <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>\n          <ows:WGS84BoundingBox>\n              <ows:LowerCorner>33.99986111111111 29.999861111111112</ows:LowerCorner>\n              <ows:UpperCorner>35.000138888888884 31.00013888888889</ows:UpperCorner>\n          </ows:WGS84BoundingBox>\n          <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">\n              <ows:LowerCorner>33.99986111111111 29.999861111111112</ows:LowerCorner>\n              <ows:UpperCorner>35.000138888888884 31.00013888888889</ows:UpperCorner>\n          </ows:BoundingBox>\n        </wcs:CoverageSummary>\n        <wcs:CoverageSummary>\n          <ows:Title>n30_e035_1arc_v3</ows:Title>\n          <ows:Abstract>Generated from GeoTIFF</ows:Abstract>\n          <ows:Keywords>\n              <ows:Keyword>n30_e035_1arc_v3</ows:Keyword>\n              <ows:Keyword>WCS</ows:Keyword>\n              <ows:Keyword>GeoTIFF</ows:Keyword>\n          </ows:Keywords>\n          <wcs:CoverageId>dem__n30_e035_1arc_v3</wcs:CoverageId>\n          <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>\n          <ows:WGS84BoundingBox>\n              <ows:LowerCorner>34.99986111111111 29.999861111111112</ows:LowerCorner>\n              <ows:UpperCorner>36.000138888888884 31.00013888888889</ows:UpperCorner>\n          </ows:WGS84BoundingBox>\n          <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">\n              <ows:LowerCorner>34.99986111111111 29.999861111111112</ows:LowerCorner>\n              <ows:UpperCorner>36.000138888888884 31.00013888888889</ows:UpperCorner>\n          </ows:BoundingBox>\n          <ows:Metadata about="metadata" xlink:type="simple" xlink:href="https://www.google.com" />\n        </wcs:CoverageSummary>\n        <wcs:CoverageSummary>\n          <ows:Title>n31_e034_1arc_v3</ows:Title>\n          <ows:Abstract>Generated from GeoTIFF</ows:Abstract>\n          <ows:Keywords>\n              <ows:Keyword>n31_e034_1arc_v3</ows:Keyword>\n              <ows:Keyword>WCS</ows:Keyword>\n              <ows:Keyword>GeoTIFF</ows:Keyword>\n          </ows:Keywords>\n          <wcs:CoverageId>dem__n31_e034_1arc_v3</wcs:CoverageId>\n          <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>\n          <ows:WGS84BoundingBox>\n              <ows:LowerCorner>33.99986111111111 30.999861111111112</ows:LowerCorner>\n              <ows:UpperCorner>35.000138888888884 32.00013888888889</ows:UpperCorner>\n          </ows:WGS84BoundingBox>\n          <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">\n              <ows:LowerCorner>33.99986111111111 30.999861111111112</ows:LowerCorner>\n              <ows:UpperCorner>35.000138888888884 32.00013888888889</ows:UpperCorner>\n          </ows:BoundingBox>\n        </wcs:CoverageSummary>\n        <wcs:CoverageSummary>\n          <ows:Title>n31_e035_1arc_v3</ows:Title>\n          <ows:Abstract>Generated from GeoTIFF</ows:Abstract>\n          <ows:Keywords>\n              <ows:Keyword>n31_e035_1arc_v3</ows:Keyword>\n              <ows:Keyword>WCS</ows:Keyword>\n              <ows:Keyword>GeoTIFF</ows:Keyword>\n          </ows:Keywords>\n          <wcs:CoverageId>dem__n31_e035_1arc_v3</wcs:CoverageId>\n          <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>\n          <ows:WGS84BoundingBox>\n              <ows:LowerCorner>34.99986111111111 30.999861111111112</ows:LowerCorner>\n              <ows:UpperCorner>36.000138888888884 32.00013888888889</ows:UpperCorner>\n          </ows:WGS84BoundingBox>\n          <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">\n              <ows:LowerCorner>34.99986111111111 30.999861111111112</ows:LowerCorner>\n              <ows:UpperCorner>36.000138888888884 32.00013888888889</ows:UpperCorner>\n          </ows:BoundingBox>\n        </wcs:CoverageSummary>\n        <wcs:CoverageSummary>\n          <ows:Title>n31_e036_1arc_v3</ows:Title>\n          <ows:Abstract>Generated from GeoTIFF</ows:Abstract>\n          <ows:Keywords>\n              <ows:Keyword>n31_e036_1arc_v3</ows:Keyword>\n              <ows:Keyword>WCS</ows:Keyword>\n              <ows:Keyword>GeoTIFF</ows:Keyword>\n          </ows:Keywords>\n          <wcs:CoverageId>dem__n31_e036_1arc_v3</wcs:CoverageId>\n          <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>\n          <ows:WGS84BoundingBox>\n              <ows:LowerCorner>35.99986111111111 30.999861111111112</ows:LowerCorner>\n              <ows:UpperCorner>37.000138888888884 32.00013888888889</ows:UpperCorner>\n          </ows:WGS84BoundingBox>\n          <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">\n              <ows:LowerCorner>35.99986111111111 30.999861111111112</ows:LowerCorner>\n              <ows:UpperCorner>37.000138888888884 32.00013888888889</ows:UpperCorner>\n          </ows:BoundingBox>\n        </wcs:CoverageSummary>\n        <wcs:CoverageSummary>\n          <ows:Title>n32_e034_1arc_v3</ows:Title>\n          <ows:Abstract>Generated from GeoTIFF</ows:Abstract>\n          <ows:Keywords>\n              <ows:Keyword>n32_e034_1arc_v3</ows:Keyword>\n              <ows:Keyword>WCS</ows:Keyword>\n              <ows:Keyword>GeoTIFF</ows:Keyword>\n          </ows:Keywords>\n          <wcs:CoverageId>dem__n32_e034_1arc_v3</wcs:CoverageId>\n          <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>\n          <ows:WGS84BoundingBox>\n              <ows:LowerCorner>33.99986111111111 31.999861111111112</ows:LowerCorner>\n              <ows:UpperCorner>35.000138888888884 33.00013888888889</ows:UpperCorner>\n          </ows:WGS84BoundingBox>\n          <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">\n              <ows:LowerCorner>33.99986111111111 31.999861111111112</ows:LowerCorner>\n              <ows:UpperCorner>35.000138888888884 33.00013888888889</ows:UpperCorner>\n          </ows:BoundingBox>\n        </wcs:CoverageSummary>\n        <wcs:CoverageSummary>\n          <ows:Title>n32_e035_1arc_v3</ows:Title>\n          <ows:Abstract>Generated from GeoTIFF</ows:Abstract>\n          <ows:Keywords>\n              <ows:Keyword>n32_e035_1arc_v3</ows:Keyword>\n              <ows:Keyword>WCS</ows:Keyword>\n              <ows:Keyword>GeoTIFF</ows:Keyword>\n          </ows:Keywords>\n          <wcs:CoverageId>dem__n32_e035_1arc_v3</wcs:CoverageId>\n          <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>\n          <ows:WGS84BoundingBox>\n              <ows:LowerCorner>34.99986111111111 31.999861111111112</ows:LowerCorner>\n              <ows:UpperCorner>36.000138888888884 33.00013888888889</ows:UpperCorner>\n          </ows:WGS84BoundingBox>\n          <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">\n              <ows:LowerCorner>34.99986111111111 31.999861111111112</ows:LowerCorner>\n              <ows:UpperCorner>36.000138888888884 33.00013888888889</ows:UpperCorner>\n          </ows:BoundingBox>\n        </wcs:CoverageSummary>\n        <wcs:CoverageSummary>\n          <ows:Title>n32_e036_1arc_v3</ows:Title>\n          <ows:Abstract>Generated from GeoTIFF</ows:Abstract>\n          <ows:Keywords>\n              <ows:Keyword>n32_e036_1arc_v3</ows:Keyword>\n              <ows:Keyword>WCS</ows:Keyword>\n              <ows:Keyword>GeoTIFF</ows:Keyword>\n          </ows:Keywords>\n          <wcs:CoverageId>dem__n32_e036_1arc_v3</wcs:CoverageId>\n          <wcs:CoverageSubtype>RectifiedGridCoverage</wcs:CoverageSubtype>\n          <ows:WGS84BoundingBox>\n              <ows:LowerCorner>35.99986111111111 31.999861111111112</ows:LowerCorner>\n              <ows:UpperCorner>37.000138888888884 33.00013888888889</ows:UpperCorner>\n          </ows:WGS84BoundingBox>\n          <ows:BoundingBox crs="http://www.opengis.net/def/crs/EPSG/0/EPSG:4326">\n              <ows:LowerCorner>35.99986111111111 31.999861111111112</ows:LowerCorner>\n              <ows:UpperCorner>37.000138888888884 33.00013888888889</ows:UpperCorner>\n          </ows:BoundingBox>\n        </wcs:CoverageSummary>\n        <wcs:Extension />\n    </wcs:Contents>\n  </wcs:Capabilities>\n\n'})})]}),"\n",(0,r.jsxs)(o.p,{children:["This request shows an XML file containing the WCS 2.0.1 ",(0,r.jsx)(o.em,{children:(0,r.jsx)(o.strong,{children:"GetCapabilities"})})," response (the following pictures contains the ",(0,r.jsx)(o.strong,{children:"dem__gt30e020n40"})," layer related sub-section)."]}),"\n",(0,r.jsx)("figure",{children:(0,r.jsx)("img",{src:s(42935).A,style:{display:"block","margin-left":"auto","margin-right":"auto",width:"80%"}})}),"\n",(0,r.jsx)(o.h2,{id:"describecoverage",children:"DescribeCoverage"}),"\n",(0,r.jsxs)(o.p,{children:["The purpose of the ",(0,r.jsx)(o.strong,{children:"DescribeCoverage"})," request is to additional information about a Coverage a client wants to query. It returns information about the crs, the metadata, the domain, the range and the formats it is available in. A client generally will need to issue a DescribeCoverage request before being sure it can make the proper GetCoverage request"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"<DEM-DEM-SERVING-SERVICE_URL>/geoserver/ows?\nSERVICE=WCS&\nVERSION=1.0.0&\nREQUEST=DescribeCoverage&\nCOVERAGE=n30_e034_1arc_v3\n"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Response example"}),(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-xml",children:' <?xml version="1.0" encoding="UTF-8"?>\n  <wcs:CoverageDescription xmlns:wcs="http://www.opengis.net/wcs" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wcs http://dem-dev-geoserver-development-dem-dev.apps.v0h0bdx6.eastus.aroapp.io/geoserver/schemas/wcs/1.0.0/describeCoverage.xsd" version="1.0.0">\n    <wcs:CoverageOffering>\n        <wcs:description>Generated from GeoTIFF</wcs:description>\n        <wcs:name>dem:n30_e034_1arc_v3</wcs:name>\n        <wcs:label>n30_e034_1arc_v3</wcs:label>\n        <wcs:lonLatEnvelope srsName="urn:ogc:def:crs:OGC:1.3:CRS84">\n          <gml:pos>33.99986111111111 29.999861111111112</gml:pos>\n          <gml:pos>35.000138888888884 31.00013888888889</gml:pos>\n        </wcs:lonLatEnvelope>\n        <wcs:keywords>\n          <wcs:keyword>n30_e034_1arc_v3</wcs:keyword>\n          <wcs:keyword>WCS</wcs:keyword>\n          <wcs:keyword>GeoTIFF</wcs:keyword>\n        </wcs:keywords>\n        <wcs:domainSet>\n          <wcs:spatialDomain>\n              <gml:Envelope srsName="EPSG:4326">\n                <gml:pos>33.99986111111111 29.999861111111112</gml:pos>\n                <gml:pos>35.000138888888884 31.00013888888889</gml:pos>\n              </gml:Envelope>\n              <gml:RectifiedGrid dimension="2" srsName="EPSG:4326">\n                <gml:limits>\n                    <gml:GridEnvelope>\n                      <gml:low>0 0</gml:low>\n                      <gml:high>3600 3600</gml:high>\n                    </gml:GridEnvelope>\n                </gml:limits>\n                <gml:axisName>x</gml:axisName>\n                <gml:axisName>y</gml:axisName>\n                <gml:origin>\n                    <gml:pos>34.0 31.000000000000004</gml:pos>\n                </gml:origin>\n                <gml:offsetVector>2.777777777777778E-4 0.0</gml:offsetVector>\n                <gml:offsetVector>0.0 -2.777777777777778E-4</gml:offsetVector>\n              </gml:RectifiedGrid>\n          </wcs:spatialDomain>\n        </wcs:domainSet>\n        <wcs:rangeSet>\n          <wcs:RangeSet>\n              <wcs:name>n30_e034_1arc_v3</wcs:name>\n              <wcs:label>n30_e034_1arc_v3</wcs:label>\n              <wcs:axisDescription>\n                <wcs:AxisDescription>\n                    <wcs:name>Band</wcs:name>\n                    <wcs:label>Band</wcs:label>\n                    <wcs:values>\n                      <wcs:singleValue>1</wcs:singleValue>\n                    </wcs:values>\n                </wcs:AxisDescription>\n              </wcs:axisDescription>\n          </wcs:RangeSet>\n        </wcs:rangeSet>\n        <wcs:supportedCRSs>\n          <wcs:requestResponseCRSs>EPSG:4326</wcs:requestResponseCRSs>\n        </wcs:supportedCRSs>\n        <wcs:supportedFormats nativeFormat="GeoTIFF">\n          <wcs:formats>AIG</wcs:formats>\n          <wcs:formats>ArcGrid</wcs:formats>\n          <wcs:formats>DTED</wcs:formats>\n          <wcs:formats>EHdr</wcs:formats>\n          <wcs:formats>ENVIHdr</wcs:formats>\n          <wcs:formats>ERDASImg</wcs:formats>\n          <wcs:formats>GeoTIFF</wcs:formats>\n          <wcs:formats>GIF</wcs:formats>\n          <wcs:formats>GeoPackage (mosaic)</wcs:formats>\n          <wcs:formats>ImageMosaic</wcs:formats>\n          <wcs:formats>ImagePyramid</wcs:formats>\n          <wcs:formats>JPEG</wcs:formats>\n          <wcs:formats>NITF</wcs:formats>\n          <wcs:formats>PNG</wcs:formats>\n          <wcs:formats>RPFTOC</wcs:formats>\n          <wcs:formats>RST</wcs:formats>\n          <wcs:formats>SRP</wcs:formats>\n          <wcs:formats>TIFF</wcs:formats>\n          <wcs:formats>VRT</wcs:formats>\n        </wcs:supportedFormats>\n        <wcs:supportedInterpolations default="nearest neighbor">\n          <wcs:interpolationMethod>nearest neighbor</wcs:interpolationMethod>\n          <wcs:interpolationMethod>bilinear</wcs:interpolationMethod>\n          <wcs:interpolationMethod>bicubic</wcs:interpolationMethod>\n        </wcs:supportedInterpolations>\n    </wcs:CoverageOffering>\n  </wcs:CoverageDescription>\n'})})]}),"\n",(0,r.jsxs)(o.p,{children:["This request shows an XML file containing the DescribeCoverage response of ",(0,r.jsx)(o.em,{children:(0,r.jsx)(o.strong,{children:"n30_e034_1arc_v3"})}),"  layer."]}),"\n",(0,r.jsx)(o.h2,{id:"getcoverage",children:"GetCoverage"}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.strong,{children:"GetCoverage"})," operation requests the actual spatial data. It can retrieve subsets of coverages, and the result can be either the coverage itself or a reference to it. The most powerful thing about a GetCoverage request is its ability to subset domains (height and time) and ranges. It can also do resampling, encode in different data formats, and return the resulting file in different ways."]}),"\n",(0,r.jsxs)(o.p,{children:["Detailed explanation about params might be found ",(0,r.jsx)(o.a,{href:"https://www.mapserver.org/ogc/wcs_server.html",children:"here"})," \ud83c\udf10"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"<DEM-DEM-SERVING-SERVICE_URL>/geoserver/ows?\nSERVICE=WCS&\nVERSION=1.0.0&\nREQUEST=GetCoverage&\ncoverage=n30_e034_1arc_v3&\nCRS=EPSG:4326&\nBBOX=33.99986111111111,29.999861111111112,35.000138888888884,31.00013888888889&\nWIDTH=3199&\nHEIGHT=2833&\nFORMAT=PNG\n"})}),"\n",(0,r.jsxs)(o.p,{children:["Downloaded data/image for ",(0,r.jsx)(o.strong,{children:"n30_e034_1arc_v3"})," layer for ",(0,r.jsx)(o.strong,{children:"EPSG:4326"})," projection and for defined ",(0,r.jsx)(o.strong,{children:"BBOX"})]})]})}function d(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},52897:(e,o,s)=>{s.d(o,{A:()=>r});const r=s.p+"assets/files/17-089r1_WCS_2.1_Interface_Standard_-_Core-688fcbad14b9f0fe6951fb98e9f30541.pdf"},42935:(e,o,s)=>{s.d(o,{A:()=>r});const r=s.p+"assets/images/getcap_wcs_example-1c73bff10f0c41525c4491bb2bb0a3af.png"},28453:(e,o,s)=>{s.d(o,{R:()=>w,x:()=>i});var r=s(96540);const n={},t=r.createContext(n);function w(e){const o=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:w(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);
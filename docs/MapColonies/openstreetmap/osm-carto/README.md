---
id: openstreetmap-carto
slug: openstreetmap-carto
title: OpenStreetMap Cartography
tags:
  - osm
  - carto
  - raster
  - symbols
---

# OpenStreetMap Carto
![The openstreetmap website](/img/openstreetmap/osm-carto/osm-carto.png)
OpenStreetMap Carto (or OSM Carto or osm-carto for short) is an open-source stylesheet for rendering OpenStreetMap data to raster tiles. Since 2013, the main OpenStreetMap homepage has featured OSM Carto tiles as the default tile layer.

## How to use
The style can be consumed as a raster tiles layer from Raster team services.
For more information check [Raster step by step guide](/docs/MapColonies/Raster/Guides/raster-getting-started).

## What did we do
As this stylesheet is an open-source, we had to make a few minor changes compared to the original one.
- We changed the stylesheet projection from Web Mercator to WGS84. See [mapping terms](/docs/KnowledgeBase/terms#mapping).
- We modified the database insertion script to prefer names in Hebrew and English when possible.
- We imported data from the Natural Earth dataset in places where we didn't import OSM data.

## Style key
- [Symbols](/docs/MapColonies/openstreetmap/osm-carto/osm-carto-symbols)
- [Lines](/docs/MapColonies/openstreetmap/osm-carto/osm-carto-lines-symbology)
- [Areas](/docs/MapColonies/openstreetmap/osm-carto/osm-carto-areas-symbology)

## "My house doesn't appears on the map, fix it 😡"
First, we are sorry, but its not our fault 🤷

We import the data as is from the internet, without any change or modification to maintain authenticity. Because OpenStreetMap is free and Open Source, you can go on their website at `openstreetmap.org`, and make the changes yourself. Be sure to read the guidelines before making any change to avoid it being removed.

## Stylesheet design goals
<small>Taken from the project repository</small>
### General purpose

This style has multiple purposes:

* It's an important feedback mechanism for mappers to validate their edits and helps to prevent unfavorable fragmentation of tag use.
* It's a major part of the public face of OpenStreetMap, for many people the map on osm.org rendered with this style _is_ OpenStreetMap.
* It's used in many map applications as a general purpose map.
* It's an exemplar stylesheet for rendering OSM data.

There is no ranking of these purposes.  To allow serving all of them and to
avoid satisfying only some at the cost of the others the following main goals
have been identified.

### Main goals

The following goals need to be balanced against each other to serve the purposes
above.  There is no fixed order of priorities.  Apart from these goals there are
of course also technical constraints and requirements that need to be taken into
account.

* **Legibility and clarity** - The map should be intuitively readable by users with some general experience using maps without a map key, preferrably with relatively little effort.  A map key or more extensive experience using this map style can be required for clearly identifying minor differences or the exact meaning of certain features but in broad strokes orientation and identification of map elements should be possible on an intuitive level.  We also aim for the map appearance to be esthetically pleasing.
* **Being understandable and supportive for mappers** - To serve as feedback for mappers and encourage correct mapping this style needs to render the data in a way that allows mappers to understand how the data produces a certain rendering result based on basic observation without in depth understanding how map rendering works or looking at the style implementation.
* **Diversity** - The style should represent the diversity of the OSM community and geography in general.  The most obvious element to serve this goal is showing the local names everywhere on earth in their respective scripts.  This goal however goes beyond labels.  Both physical and cultural geography differs a lot globally and the aim is to represent this variety with equal determination - well mapped areas are not supposed to have more weight here than less mapped parts of the world.  This also means the target map user is the potential global map user and no special consideration is given to the current geographic distribution of actual map use.
* **A rich map** - This style deliberately creating a fairly rich map showing a significant number of different features.  This way it shows the richness of OSM data and gives a broad recognition to the mappers' work.  The aim is not however to show all or even most of the OSM data.
* **Maintainability** - The implementation of this style should not be too hard to maintain. This refers to both the volume and complexity of the code and how fast the style can be parsed when rendering it, which is very important for efficient development work. So the amount of code should be kept small and complex and fragile interdependencies should be avoided. If the code is difficult to maintain this would ultimately seriously affect all of the above goals.
* **Adaptability and ease of use** - The style should be easy to customize, like for creating localized or special purpose maps. It is also important to keep demands on rendering infrastructure for serving the style low so it is not too difficult and costly to set up a tile server for this style or a specialized variant of it.

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';
import type { Config, ReportingSeverity } from '@docusaurus/types';
import type { Option, ThemeConfig } from '@docusaurus/preset-classic';
import type { PresetEntry } from 'redocusaurus';

const config: Config = {
  title: 'MapColonies Developer Portal',
  tagline: 'Developer Portal',
  favicon: 'img/libot_logo.ico',
  // Set the production url of your site here
  url: 'https://mapcolonies.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL || '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MapColonies', // Usually your GitHub org/user name.
  projectName: 'developer-portal', // Usually your repo name.
  onBrokenLinks: 'warn' as ReportingSeverity,
  onBrokenMarkdownLinks: 'warn' as ReportingSeverity,
  themes: ['@docusaurus/theme-mermaid'],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  customFields: {
    mapColoniesBaseURLS: {
      playground: process.env.PLAYGROUND_URL,
      puzzle: process.env.PUZZLE_URL,
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/MapColonies/developer-portal',
          blogSidebarCount: 'ALL',
          blogTitle: 'Release Notes',
          blogDescription: 'Discover MapColonies Releases!'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }) satisfies Preset.Options,
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'static/openapi/vector/replica-server-openapi.yaml',
            route: '/docs/MapColonies/vector/services/replication/api',
          },
          {
            spec: 'static/openapi/vector/feedback-api-openapi.yaml',
            route: '/docs/MapColonies/vector/services/feedback-api/api',
          },
          {
            spec: 'static/openapi/vector/geocoding-openapi.yaml',
            route: '/docs/MapColonies/vector/services/geocoding/api',
          },
          {
            spec: 'static/openapi/raster/exporter-management-openapi.yaml',
            route: '/docs/MapColonies/raster/services/export/api',
          },
          {
            spec: 'static/openapi/dem/elevation-openapi.yaml',
            route: '/docs/MapColonies/dem/services/elevation/api',
          }
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ] satisfies PresetEntry,
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MapColonies',
        logo: {
          alt: 'MapColonies',
          src: 'img/libot_logo.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'gettingStartedSidebar',
            position: "left",
            label: "Getting Started"
          },
          {to: '/blog', label: 'Release Notes', position: 'left'},
          {to: process.env.PLAYGROUND_URL, label: 'Interactive Playground', position: 'right'},
          {to: process.env.CATALOG_APPLICATION_URL, label: 'Catalog App', position: 'right'},
          {to: process.env.YAHALOM_APPLICATION_URL, label: 'Yahalom App', position: 'right'},
          {to: process.env.PUZZLE_URL, label: 'Puzzle Game', position: 'right'},
          {
            type: 'docSidebar',
            sidebarId: 'ogcSidebar',
            position: 'left',
            label: 'OGC',
          },
          {
            type: 'docSidebar',
            sidebarId: 'knowledgeBaseSidebar',
            position: 'left',
            label: 'Knowledge base',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/MapColonies/Raster/Guides/raster-getting-started',
              },
              {
                label: 'Raster',
                to: '/docs/MapColonies/Raster/overview'
              },
              {
                label: 'Vector',
                to: '/docs/MapColonies/vector/vector-overview'
              },
              {
                label: '3D',
                to: '/docs/MapColonies/3D/3d-overview'
              },
              {
                label: 'DEM',
                to: '/docs/MapColonies/DEM/dem-overview'
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Knowledge base',
                to: '/docs/KnowledgeBase/terms',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MapColonies, Inc. Built with Docusaurus with love ❤️`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' },
      },
    }),
    markdown: {
      mermaid: true
    },
    plugins: [
      [require.resolve('docusaurus-lunr-search'), {}],
    ],
} satisfies Preset.ThemeConfig;

export default config;

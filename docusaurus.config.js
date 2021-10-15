// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DecisionHub Documentation",
  tagline:
    "A collaborative decision making platform for organizations to save time, remove bias, and make informed group decisions.",
  url: "https://decisionhub.org/",
  baseUrl: "/documentation/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "decisionhub", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/decisionhub/documentation/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "DecisionHub",
        logo: {
          alt: "DecisionHub Logo",
          src: "img/favicon.ico",
        },
        items: [
          {
            type: "doc",
            docId: "manage-organization",
            position: "left",
            label: "Documentation",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Decisionhub Portal",
                href: "https://app.decisionhub.org/redirect",
              },
              {
                label: "Main Website",
                href: "https://decisionhub.org/",
              },
            ],
          },
          {
            title: "Social Media",
            items: [
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/decisionhub",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Decision Hub. Inc`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

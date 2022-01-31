// @ts-check

/** @type {import('gatsby').GatsbyConfig} */

const gatsbyConfig = {
  jsxRuntime: 'automatic',
  plugins: [
    {
      resolve: 'gatsby-plugin-styled-components',
      options: { displayName: true },
    },
  ],
};

export default gatsbyConfig;

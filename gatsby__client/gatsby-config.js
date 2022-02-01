// @ts-check

/** @type {import('gatsby').GatsbyConfig} */

const gatsbyConfig = {
  jsxRuntime: 'automatic',
  plugins: [
    {
      resolve: 'gatsby-plugin-styled-components',
      options: { displayName: process.env.NODE_ENV === 'development' },
    },
  ],
};

export default gatsbyConfig;

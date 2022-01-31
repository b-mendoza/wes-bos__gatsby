// @ts-check

import 'normalize.css';
import { StrictMode } from 'react';

import MainLayout from './src/components/Layouts/MainLayout';

import GlobalStyles from './src/styles/globals';
import StyledTypography from './src/styles/typography';

/** @type {import('gatsby').GatsbySSR['wrapPageElement']} */

export const wrapPageElement = (wrapPageElementProps) => {
  const { element, props } = wrapPageElementProps;

  return (
    <>
      <GlobalStyles />

      <StyledTypography />

      <MainLayout {...props}>{element}</MainLayout>
    </>
  );
};

/** @type {import('gatsby').GatsbySSR['wrapRootElement']} */

export const wrapRootElement = (wrapRootElementProps) => {
  const { element } = wrapRootElementProps;

  return <StrictMode>{element}</StrictMode>;
};

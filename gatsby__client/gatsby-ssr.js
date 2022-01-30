// @ts-check

import MainLayout from './src/components/Layouts/MainLayout';

/** @type {import('gatsby').GatsbySSR['wrapPageElement']} */

export const wrapPageElement = (wrapPageElementProps) => {
  const { element, props } = wrapPageElementProps;

  return <MainLayout {...props}>{element}</MainLayout>;
};

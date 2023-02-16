import type { AppProps } from 'next/app';

import type TNextPageWithLayout from './NextPageWithLayout';

type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout
}

export default TAppPropsWithLayout;

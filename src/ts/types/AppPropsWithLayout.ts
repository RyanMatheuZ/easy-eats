import type { AppProps } from 'next/app';

import type { TNextPageWithLayout } from '@ts/types';

type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout
}

export default TAppPropsWithLayout;

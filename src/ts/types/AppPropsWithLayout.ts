import { type AppProps } from 'next/app';

import { type DehydratedState } from '@tanstack/react-query';

import type { TNextPageWithLayout } from '@ts/types';

type TAppPropsWithLayout = AppProps<{ dehydratedState: DehydratedState }> & {
  Component: TNextPageWithLayout
}

export default TAppPropsWithLayout;

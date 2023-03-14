import { type ReactElement, type ReactNode } from 'react';

import { type NextPage } from 'next';

import { type DehydratedState } from '@tanstack/react-query';

// eslint-disable-next-line @typescript-eslint/ban-types
type TNextPageWithLayout<P = { dehydratedState: DehydratedState }, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export default TNextPageWithLayout;

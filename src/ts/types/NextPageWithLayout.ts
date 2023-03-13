import { DehydratedState } from '@tanstack/react-query';
import type { NextPage } from 'next';

import type { ReactElement, ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type TNextPageWithLayout<P = { dehydratedState: DehydratedState }, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export default TNextPageWithLayout;

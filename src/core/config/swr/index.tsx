import type { FC } from 'react';

import { SWRConfig } from 'swr';

interface SWRConfigContainerProps {
  children: JSX.Element
}

const fetcher = (resource: any, init: any) => fetch(resource, init).then(res => res.json());

const SWRConfigContainer: FC<SWRConfigContainerProps> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher: fetcher
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRConfigContainer;

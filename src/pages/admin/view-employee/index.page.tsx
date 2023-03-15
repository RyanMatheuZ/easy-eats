import { useState, type ReactElement, type ChangeEvent } from 'react';

import Link from 'next/link';

import { debounce } from 'lodash';

import { Pagination } from '@mui/material';

import type { TNextPageWithLayout } from '@ts/types';
import type { IParams } from '@ts/interfaces';

import { useAuth } from '@context/auth';

import { ContentWithDrawer } from '@components/layouts';
import { Head } from '@components/meta';
import { LoadingSpinner, StyledInput } from '@components/elements';

import { useEmployee } from '@hooks/index';

import NoEmployees from './NoEmployees';

import { head } from './utils';

import {
  Container,
  PaginationContainer,
  EmployeeCard,
  EmployeeCardBody,
  EmployeeName,
  EmployeeRole,
  EmployeeIcon
} from './styles';

const ViewEmployee: TNextPageWithLayout = () => {
  const { description } = head;

  const { company } = useAuth();

  const { handleGetAllEmployees } = useEmployee();

  const defaultPage = 1;
  const [params, setParams] = useState<IParams>({
    page: defaultPage,
    limit: 5,
    name: ''
  });

  const { data, isLoading, isFetched } = handleGetAllEmployees(String(company?.info?.cnpj), params);

  const isLoadedAndFetched = !isLoading && isFetched;
  const hasEmployees = Number(data?.totalCount) > 0;
  const totalPages = Math.ceil(Number(data?.totalCount) / Number(params?.limit));

  const handleFilterByName = debounce((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setParams((prevState) => ({ ...prevState, name: event.target.value }));
  }, 1000);

  const handleChangePagination = (_event: ChangeEvent<unknown>, page: number) => {
    setParams((prevState) => ({ ...prevState, page }));
  };

  return (
    <>
      <Head title={company?.info?.fantasyName as string} description={description} />
      <Container>
        {(!hasEmployees && isLoadedAndFetched) && (
          <NoEmployees />
        )}
        {hasEmployees && (
          <StyledInput
            label="Nome"
            fullWidth
            onChange={handleFilterByName}
          />
        )}
        <LoadingSpinner isLoading={isLoading || !isFetched} />
        {(hasEmployees && isLoadedAndFetched) && (
          <>
            <PaginationContainer>
              <Pagination
                color='primary'
                count={totalPages}
                page={params.page}
                onChange={handleChangePagination}
              />
            </PaginationContainer>
            {data?.employees?.map(({ _id, info }) => (
              <Link
                key={_id}
                href={`/admin/view-employee/${_id}`}
                legacyBehavior
                passHref
              >
                <a>
                  <EmployeeCard>
                    <EmployeeIcon />
                    <EmployeeCardBody>
                      <EmployeeName>
                        {info?.firstName} {info?.surname} {info?.socialName && `(${info.socialName})`}
                      </EmployeeName>
                      <EmployeeRole>
                        {info?.role}
                      </EmployeeRole>
                    </EmployeeCardBody>
                  </EmployeeCard>
                </a>
              </Link>
            ))}
          </>
        )}
      </Container>
    </>
  );
};

ViewEmployee.getLayout = (page: ReactElement) => (
  <ContentWithDrawer>
    {page}
  </ContentWithDrawer>
);

export default ViewEmployee;

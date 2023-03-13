import type { ReactElement, ChangeEvent } from 'react';
import { useState } from 'react';

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

  const { data, isLoading, isFetched } = handleGetAllEmployees(params);

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
        <StyledInput
          label="Nome"
          fullWidth
          onChange={handleFilterByName}
        />
        <LoadingSpinner isLoading={isLoading || !isFetched} />
        {(!isLoading && isFetched) && (
          <>
            <PaginationContainer>
              <Pagination
                color='primary'
                count={totalPages}
                page={params.page}
                onChange={handleChangePagination}
              />
            </PaginationContainer>
            {data?.employees?.map((prop) => (
              <Link
                key={prop?._id}
                href={`/admin/view-employee/${prop?._id}`}
                legacyBehavior
                passHref
              >
                <a>
                  <EmployeeCard>
                    <EmployeeIcon />
                    <EmployeeCardBody>
                      <EmployeeName>
                        {prop?.info?.firstName}
                      </EmployeeName>
                      <EmployeeRole>
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

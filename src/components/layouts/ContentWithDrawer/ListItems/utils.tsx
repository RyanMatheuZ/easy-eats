import {
  CompanyDataIcon,
  RegisterEmployeesIcon,
  ViewEmployessIcon
} from '../styles';

interface ListItems {
  subHeader: string;
  items: {
    icon: JSX.Element;
    label: string;
    path: string;
  }[];
}

export const basePath = '/admin';

export const listItems: ListItems[] = [
  {
    subHeader: 'Empresa',
    items: [
      {
        icon: <CompanyDataIcon />,
        label: 'Dados',
        path: `${basePath}/company-data`
      }
    ]
  },
  {
    subHeader: 'Colaboradores',
    items: [
      {
        icon: <RegisterEmployeesIcon />,
        label: 'Cadastro',
        path: `${basePath}/register-employee`
      },
      {
        icon: <ViewEmployessIcon />,
        label: 'Visualização',
        path: `${basePath}/view-employee`
      }
    ]
  }
];

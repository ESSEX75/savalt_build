import { createGlobalStyle } from 'styled-components';
import ttInterfacesBold from './assets/fonts/TTInterfaces-Bold.ttf';
import ttInterfacesMedium from './assets/fonts/TTInterfaces-Medium.ttf';
import ttInterfacesRegular from './assets/fonts/TTInterfaces-Regular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'ttInterfaces';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('ttInterfacesBold'), url(${ttInterfacesBold}) format('truetype');
  }

  @font-face {
    font-family: 'ttInterfaces';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('ttInterfacesMedium'), url(${ttInterfacesMedium}) format('truetype');;
  }

  @font-face {
    font-family: 'ttInterfaces';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('ttInterfacesRegular'), url(${ttInterfacesRegular}) format('truetype');;
  }
`;

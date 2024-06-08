import { useQueryClient } from '@tanstack/react-query';
import DetailWeather from './DetailWeather';
import Header from './Header';
import SideBar from './SideBar';
import { useNavigation } from 'react-router-dom';
import useCurrentWeather from '../hooks/useCurrentWeather';
import Body from './Body';

function AppLayout() {
  return (
    <main className="grid min-h-screen grid-rows-[auto_1fr] overscroll-auto bg-gray-800 pb-7 text-white ">
      <Header />
      <Body>
        <SideBar />
        <DetailWeather />
      </Body>
    </main>
  );
}

export default AppLayout;

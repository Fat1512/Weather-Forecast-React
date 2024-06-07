import { useQueryClient } from '@tanstack/react-query';
import DetailWeather from './DetailWeather';
import Header from './Header';
import SideBar from './SideBar';

function AppLayout() {
  const queryClient = useQueryClient();
  console.log('Asd');
  return (
    <main className="grid min-h-screen grid-rows-[auto_1fr_auto] overscroll-auto bg-gray-800 pb-7 text-white xl:grid-cols-[25rem_1fr] 2xl:grid-cols-[30rem_1fr]">
      <Header />
      <SideBar />
      <DetailWeather />
    </main>
  );
}

export default AppLayout;

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppLayout from './ui/AppLayout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

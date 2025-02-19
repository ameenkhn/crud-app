import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.css'; // Import global styles

// Create a React Query client
const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  return (
    // Wrap the entire app with React Query Provider
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
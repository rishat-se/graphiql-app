import '@/styles/global.scss';
import '@/styles/nullstyle.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { setupStore } from '@/store';

export default function App({ Component, pageProps }: AppProps) {
  const store = setupStore();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

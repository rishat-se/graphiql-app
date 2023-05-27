import AuthCheck from '@/components/AuthCheck/AuthChech';
import { setupStore } from '@/store';
import '@/styles/global.scss';
import '@/styles/nullstyle.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../firebase/firebase';
import { appWithTranslation } from 'next-i18next';

const store = setupStore();

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthCheck>
        <Component {...pageProps} />
      </AuthCheck>
    </Provider>
  );
}

export default appWithTranslation(App);

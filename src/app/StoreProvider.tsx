"use client"

import { Provider } from 'react-redux';
import { store } from '@/lib/store/store';
import { ReactNode } from 'react';

function StoreProvider({children}:{children:ReactNode} ) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default StoreProvider;

import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { Provider } from 'react-redux';
import Login from './components/auth/Login';
import store from './store';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Login />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;

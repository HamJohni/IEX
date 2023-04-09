import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import { ChakraProvider } from '@chakra-ui/react'

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <ChakraProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </ChakraProvider>
    </BrowserRouter>
);
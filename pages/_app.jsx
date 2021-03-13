import React from "react";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import watchLoadData1 from "../redux/Rick and Morty/generators/saga";
import watchLoadData2 from "../redux/Weather/generators/saga";
import rootReducer from "../redux/Rick and Morty/reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(thunk, sagaMiddleware),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, enhancer);



sagaMiddleware.run(watchLoadData1);
sagaMiddleware.run(watchLoadData2);

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.StrictMode>
  );
}

export const getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return {
    props: { pageProps },
  };
};

export default MyApp;

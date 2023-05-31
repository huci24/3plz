import { BrowserRouter, Routes, Route } from "react-router-dom";
import Regular from "./pages/Regular";
import Main from "./pages/Main";
import Hot from "./pages/Hot";
import { createStore } from "redux";
import { Provider } from "react-redux";
import memesReducer from "./redux/memsReducer";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const store = createStore(memesReducer);
const persistor = persistStore(store);

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/hot" element={<Hot memes={store} />} />
              <Route path="/regular" element={<Regular memes={store} />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

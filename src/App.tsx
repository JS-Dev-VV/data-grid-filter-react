import React, { Suspense, lazy, useState, useCallback, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/Global.scss";
import "./styles/Style.scss";
import "antd/dist/antd.css";
import ErrorBoundary from "./components/error-boundary/MyErrorBoundary";
import FallBackComp from "./components/fallback/Fallback";
import Header from "./components/header/Header";
import Filter from "./components/filter/Filter";
import { ToastContainer } from "react-toastify";
import { SearchContext } from "./contexts/searchContext";
import { ListContext } from "./contexts/listContext";
import debounce from "lodash.debounce";

const App = () => {
  const ListComp = lazy(() => import("./components/list/List"));
  const [searchWord, setSearchWord] = useState("");
  const [listData, setListData] = useState<any>([]);

  const routes = [
    {
      key: "home",
      path: "/",
      component: <ListComp />,
    },
  ];

  async function fetchData(url: string) {
    const data = await fetch(url);
    const res = await data.json();
    setListData(res);
  }

  useEffect(() => {
    const url = `${process.env.REACT_APP_ALL_DEV_URI}`;
    fetchData(url);
  }, []);

  const debouncedSave = useCallback(
    debounce((nextValue) => setSearchWord(nextValue), 500),
    []
  );

  const handleChange = (value: any) => {
    debouncedSave(value);
  };

  return (
    <ErrorBoundary>
      <Suspense fallback={FallBackComp}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />

        <Header />

        <div className="d-flex w-100 my-05rem">
          <div className="w-15 mx-05rem shadow-464646 br-5px">
            <Filter handler={(value: any) => handleChange(value)} />
          </div>
          <SearchContext.Provider value={{ searchString: searchWord }}>
            <ListContext.Provider value={{ list: listData }}>
              <div className="w-85 mx-05rem shadow-464646 br-5px">
                <Router>
                  <Routes>
                    {routes.map((item) => (
                      <Route
                        key={item.key}
                        path={item.path}
                        element={item.component}
                      ></Route>
                    ))}
                  </Routes>
                </Router>
              </div>
            </ListContext.Provider>
          </SearchContext.Provider>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default React.memo(App);

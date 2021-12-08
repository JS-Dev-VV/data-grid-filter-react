import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/Global.scss";
import "./styles/Style.scss";
import "antd/dist/antd.css";
import ErrorBoundary from "./components/error-boundary/MyErrorBoundary";
import FallBackComp from "./components/fallback/Fallback";
import Header from "./components/header/Header";
import Filter from "./components/filter/Filter";
import { ToastContainer } from "react-toastify";

const App = () => {
  const ListComp = lazy(() => import("./components/list/List"));

  const routes = [
    {
      key: "home",
      path: "/",
      component: <ListComp />,
    },
  ];

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
            <Filter />
          </div>

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
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;

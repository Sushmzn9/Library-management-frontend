import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Signup from "./pages/signup-signin/Signup";
import Signin from "./pages/signup-signin/Signin";
import Dashboard from "./pages/Dashboard/Dashboard";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import BurrowHistory from "./pages/BurrowHistory/BurrowHistory";
import Books from "./pages/Books/Books";
import Profile from "./pages/Profile/Profile";
import Students from "./pages/Students/Students";
import { NewBookForm } from "./components/book-com/NewBookForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBookAction } from "./pages/Books/bookAction";
import { EditBookForm } from "./components/book-com/EditBookForm";

function App() {
  const dispatch = useDispatch();

  //fetch book because its is rendering on reload
  useEffect(() => {
    dispatch(fetchBookAction());
  }, [dispatch]);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/new-admin" element={<Signup />} />

        {/* // private routes */}

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/burrow-history"
          element={
            <PrivateRoute>
              <BurrowHistory />
            </PrivateRoute>
          }
        />

        <Route
          path="/books"
          element={
            <PrivateRoute>
              <Books />
            </PrivateRoute>
          }
        />
        <Route
          path="/book/new"
          element={
            <PrivateRoute>
              <NewBookForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/book/edit/:_id"
          element={
            <PrivateRoute>
              <EditBookForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/students"
          element={
            <PrivateRoute>
              <Students />
            </PrivateRoute>
          }
        />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;

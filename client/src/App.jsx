import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
import CompanyCreation from "./components/Home/CompanyCreation";
import PrivacyAndPolicy from "./components/Login/PrivacyAndPolicy";
import Dashboard from "./components/dashboard/Dashboard";


function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Login login />,
  
      },
      {
        path: "/forgotPassword",
        element: <Login forgotPassword />,
  
      },
      {
        path: "/register",
        element: <Login register />,
  
      },
      {
        path: "/createCompany",
        element: <Login companyCreation/>,
  
      },
      {
        path: "/companyDetail",
        element: <Login companyDetail/>,
  
      },
      {
        path: "/companyList",
        element: <Login companyList/>,
  
      },
      {
        path: "/dashboard",
        element: <Dashboard title='dashboard'/>,
  
      },
      {
        path: "/followup",
        element: <Dashboard title='followup'/>,
  
      },
    ],
    {
      redirectTo: "/",
    }
  );
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
   </>
  );
}

export default App;

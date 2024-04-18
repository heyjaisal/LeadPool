import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
import CompanyCreation from "./components/Home/CompanyCreation";
import PrivacyAndPolicy from "./components/Login/PrivacyAndPolicy";


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
        path: "/privacyandpolicy",
        element: <PrivacyAndPolicy/>,
  
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

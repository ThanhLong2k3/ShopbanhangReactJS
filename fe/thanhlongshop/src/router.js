import { Routes, Route } from "react-router-dom"; // Đừng quên import Routes và Route từ react-router-dom
import { ROUTER } from "./utils/router";
import HomePage from "./pages/user/homePage";
import MasterLayout from "./pages/user/theme/masterLayout";
import ProfilePage from "./pages/user/profilePage";

const renderUserRouter = () => {
  const UserRouter = [
    {
      path: ROUTER.USE.HOME,
      Component: <HomePage />
    },
    {
        path: ROUTER.USE.PROFILE,
        Component: <ProfilePage />
      }

  ];

  return (
    <MasterLayout>
        <Routes>
        {UserRouter.map((item, key) => (
            <Route key={key} path={item.path} element={item.Component} />
        ))}
        </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;

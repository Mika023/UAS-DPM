import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Register from "./pages/Register";
import AndroidLarge4 from "./pages/AndroidLarge4";
import AndroidLarge3 from "./pages/AndroidLarge3";
import AndroidLarge2 from "./pages/AndroidLarge2";
import AndroidLarge1 from "./pages/AndroidLarge1";
import Login from "./pages/Login";
import SausageTab from "./pages/SausageTab";
import GenshinImpactTab from "./pages/GenshinImpactTab";
import FreeFireTab from "./pages/FreeFireTab";
import HomePage from "./pages/HomePage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/laman-admin":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/thanks":
        title = "";
        metaDescription = "";
        break;
      case "/confirm-payment":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/sausage-tab":
        title = "";
        metaDescription = "";
        break;
      case "/genshin-impact-tab":
        title = "";
        metaDescription = "";
        break;
      case "/free-fire-tab":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/laman-admin" element={<AndroidLarge4 />} />
      <Route path="/profile" element={<AndroidLarge3 />} />
      <Route path="/thanks" element={<AndroidLarge2 />} />
      <Route path="/confirm-payment" element={<AndroidLarge1 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sausage-tab" element={<SausageTab />} />
      <Route path="/genshin-impact-tab" element={<GenshinImpactTab />} />
      <Route path="/free-fire-tab" element={<FreeFireTab />} />
      <Route path="/home-page" element={<HomePage />} />
    </Routes>
  );
}
export default App;

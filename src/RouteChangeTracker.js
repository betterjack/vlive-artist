import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // 구글 애널리틱스 운영서버만 적용
    console.log(process.env.REACT_APP_GOOGLE_ANALYTICS_ID)
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);

  return <></>;
};

export default RouteChangeTracker;
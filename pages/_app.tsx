import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useEffect } from "react";
import { getAuthToken } from "../utils/authTokenHandler";
import { useRouter } from "next/router";
import validateToken from "../utils/validateToken";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  async function verifyToken() {
    const userToken = getAuthToken();
    if (!userToken) {
      router.push("/login");
    } else {
      try {
        const validation = await validateToken(userToken);
        if (!validation) router.push("/login");
      } catch(err: any){
        router.push("/login")
      }
    }
  }

  useEffect(() => {
    setTimeout(() => verifyToken(), 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

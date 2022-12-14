
import Link from 'next/link';
import { ChakraProvider, Progress } from "@chakra-ui/react"
import {useSession,signOut} from "next-auth/client";
import React from "react";
import Router from 'next/router'
import {Provider} from "next-auth/client";
import Lay from "../components/Layout/Lay";
import theme from "../theme"
import "@fontsource/open-sans/700.css"
import {Nav} from "../components/Layout";
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import "@fontsource/alef/700.css"
import SmallWithSocial from "../components/Layout/footer";
function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {

      setLoading(true);
    };
    const end = () => {

      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);


  return(

      <ChakraProvider theme={theme}>

        <title>Orange DC Stock management</title>
        <Nav/>
        {loading?<Progress size="xs" colorScheme={"purple"} isIndeterminate />:<Lay><Component {...pageProps} /></Lay>}




      </ChakraProvider>

  )

}

export default MyApp

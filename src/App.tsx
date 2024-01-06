import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { LoadingFallback } from "./components/loading-fallback"
import { Helmet, HelmetProvider } from "react-helmet-async"


function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet
          titleTemplate="aymkh | %s"
          defaultTitle="aymkh"
        />

        <RouterProvider
          router={router}
          fallbackElement={<LoadingFallback />}
        />
      </HelmetProvider>
    </>
  )
}

export default App

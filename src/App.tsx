import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { LoadingFallback } from "./components/loading-fallback"


function App() {
  return (
    <>
      <RouterProvider
        router={router}
        fallbackElement={<LoadingFallback />}
      />
    </>
  )
}

export default App

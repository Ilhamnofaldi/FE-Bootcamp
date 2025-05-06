import './App.css'
import { AllContext } from './context'
import { router } from './routers'
import { RouterProvider } from 'react-router-dom'


function App() {
  const user = {
    username : 'Admin'
  }
  return (
    <>
    <AllContext.Provider value = {user}>
      <RouterProvider router={router} />
    </AllContext.Provider>
    </>
  )
}

export default App

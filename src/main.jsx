import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Quiz from './pages/Quiz.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js' 
import Result from './pages/Result.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      { index:true, element:<Quiz /> },
      { path:"result", element:<Result /> },
    ],
  },
], { basename: '/Quiz-App' }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home,About,ContactUs , User ,Github} from './components/index.js'



const router = createBrowserRouter([
  {
    path : '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element : <Home/>
      } , {
        path : 'about',
        element: <About/>
      },{
        path: 'contact',
        element: <ContactUs/>
      },
      {
        path : 'user/:userid',
        element : <User/>
      },
      {
        path : 'github',
        element : <Github/>
      }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element = {<Layout/>}>
//       <Route path= '' element = {<Home/>}/>
//       <Route path= 'about' element = {<About/>}/>
//       <Route path= 'contact' element = {<ContactUs/>}/>
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)

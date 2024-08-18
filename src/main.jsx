
import { RouterProvider } from "react-router-dom"
import AuthProvider from "./components/authProvider/AuthProvider"
import "./index.css"

import { createRoot } from 'react-dom/client'
import router from "./routes/routes.jsx"

createRoot(document.getElementById('root')).render(
 
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

 
)

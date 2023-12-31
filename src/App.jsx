import'./styles/Nav.css'
import'./styles/Header.css'
import './styles/Carousel.css'
import './styles/Footer.css'
import './styles/CallToAction.css'
import './styles/Cards.css'
import './styles/Cities.css'
import './styles/Details.css'
import './styles/SignIn.css'
import './styles/SignUp.css'
import './styles/Activities.css'
import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { user_token } from "./store/actions/userActions"
function App() {
  
  let dispatch = useDispatch();

  useEffect(() => {
    let url = `http://localhost:8000/api/auth/token`
    let token = localStorage.getItem('token')

    console.log(token)

    if (token) {
      let configs = { headers: { 'Authorization': `Bearer ${token}` } }

      axios.post(url, null, configs)
        .then(response => dispatch(user_token(response.data.user)))
        .catch(err => console.log(err))
    }

  }, [])


  return (
    
   <RouterProvider router={router}/>
  )
}

export default App

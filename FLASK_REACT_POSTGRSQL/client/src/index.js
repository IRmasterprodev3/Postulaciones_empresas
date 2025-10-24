
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'
import React from 'react'
import ReactDOM from 'react-dom' //React 17
import {createRoot} from 'react-dom/client' //React 18
import NavBar from './components/Navbar';

import {
    BrowserRouter as Router,
    //Switch,
    Routes,
    Route
} from 'react-router-dom'
import HomePage from './components/Home';
import SignUpPage from './components/SignUp';
import LoginPage from './components/Login';
import CreateRecipePage from './components/CreateRecipe';

const App=()=>{

    return(
        <Router>
            <div className="">
                <NavBar/>
                <Routes>
                    <Route path='/create_recipe' element={<CreateRecipePage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/signup' element={<SignUpPage/>}/>
                    <Route path='/' element={<HomePage/>}/>
                </Routes>
            </div>
        </Router>
    )
}

/* Manera para React 17 */
//ReactDOM.render(<App/>, document.getElementById('root'));

/* Manera para React ^18 */
const root = createRoot(document.getElementById('root'));
root.render(<App/>);

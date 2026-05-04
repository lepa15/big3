import './App.css';
import {RegisterForm} from './features/register_new_user';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {LoginForm} from "./features/login_form";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RegisterForm/>}/>
                <Route path='/login' element={<LoginForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App

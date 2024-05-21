import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './page/Home';
import Sobre from './page/Home';
import Contato from './page/Home';
import Erro from './page/Home';
import Produto from './page/Home';

import Header from './components/Header';

function RouteApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/contato' element={<Contato/>}/>
                <Route path='/produto' element={<Produto/>}/>
                <Route path='*' element={<Erro/>}/>
            </Routes>
                
            
        </BrowserRouter>
    );
}

export default RoutesApp;
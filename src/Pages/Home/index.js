import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>Bem-vindo á pagina HOME</h1>
            <span>Giovane Galvão</span>
            <br/>

            <Link to="/sobre">Sobre</Link><br/>
            <Link to="/contato">Contato</Link>

            <hr/>

            <Link to="/produto">Acessar Produto</Link>
        </div>
    );
}

export default Home;
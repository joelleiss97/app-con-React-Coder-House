import './NavBar.css';
import   LogoMascotas from '../mascotas.png';

function NavBar() {
    return(
        <header className='Navbar'>
            <span>
            <img className='nav-logo' src={LogoMascotas} alt="mascotas.png"
                style={{
                    bottom: '20px',
                    width: '150px',
                    padding: '120px'
                    
                }}
                ></img>
            </span>
                 
            <div className='nav-items'>
                <a href="/home">Home</a>
                <a href="/productos">Productos</a>
                <a href="/servicio">Servicio</a>
                <a href="/contacto">Contacto</a>

            </div>
            <div className='nav-spac'>
                <div className='bar'></div>

            </div>
        
        </header>
    );
}

export default NavBar;
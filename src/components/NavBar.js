import './NavBar.css';
import   LogoMascotas from '../mascotas.png';
import CartWidget from './CartWidget';
function NavBar() {
    return(
        <header className='Navbar'>
            <span>
            <img className='nav-logo' src={LogoMascotas} alt="mascotas.png"
                style={{
                    bottom: '20px',
                    width: '150px',
                    padding: '150px'
                    
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
                <CartWidget></CartWidget>
            </div>
            
            
        </header>
    );
}

export default NavBar;
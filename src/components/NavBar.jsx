import ButtonComponent from './ButtonComponent';
import CartWidget from './CartWidget';
import './NavBar.css';


export default function NavBar(){
    return (
        <header className='allNav'>
        <h1 className='logo'>PerfumesJeC</h1>
        <nav className='barra'>
        <ButtonComponent nombre = 'Todos'/>
        <ButtonComponent nombre = 'Hombres'/>
        <ButtonComponent nombre = 'Mujeres'/>

        

        </nav>
        <CartWidget />
        </header>
    );
}
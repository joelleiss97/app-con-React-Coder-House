
import './App.css';
import Body from './components/Body';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      
       
        <NavBar/>
        <ItemListContainer titulo='Tienda de Mascotas Huellitas'></ItemListContainer>
        <Body/>
    </div>
  );
}

export default App;

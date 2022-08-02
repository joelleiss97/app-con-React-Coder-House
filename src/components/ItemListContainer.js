
import './ItemListContainer.css'
import ItemCount from './ItemCount';


function ItemListContainer(props) {
  const onAdd = (count) => {
    alert(`Se agregaron ${count} productos al carrito`);
  };
  return(
    <section>
        <div className='SubTitulo'>
            <h1>{props.titulo}</h1>

            <ItemCount onAdd={onAdd} initial={1} stock={5} />
        </div>
       
    </section>
     
  );
}

export default ItemListContainer;

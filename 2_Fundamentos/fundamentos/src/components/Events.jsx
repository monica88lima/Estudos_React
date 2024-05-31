const Events = () => {
    const handlerMyEvents =(e)=>{
     console.log(e);
     console.log("Evento Ativado")
    }
  return(
<div>
    <div>
        <button onClick={handlerMyEvents}>Clique Aqui</button>
    </div>
</div>
  ) ;
};
export default Events;
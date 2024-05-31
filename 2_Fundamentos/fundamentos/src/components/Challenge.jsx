const Challenge =()=>{
    const primeiroNumero= 10;
    const segundoNumero = 2;
    const handlerSomar=(num1,num2)=>{
        num1 = primeiroNumero;
        num2 = segundoNumero;
        var result = num1 + num2;
        console.log(result);
        
       }
return(
    <div>
        <p>Primeiro número: {primeiroNumero}</p>
        <p>Segundo número: {segundoNumero}</p>
        <button onClick={handlerSomar}>Somar</button>

    </div>
);
};
export default Challenge
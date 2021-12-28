import React, { useState } from 'react';
import './calculadora.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

const Calculadora = () => {

    const [num,setNum] = useState(0);
    const [oldnum,setOldNum] = useState(0);
    const [operador,setOperador] = useState();

    function inputNum(e){
        var input=e.target.value;
        if( num===0){
            setNum(input);
        }else{
            setNum(num + input);
        }
    }

    function clear(e){
        setNum(0);
    }

    function percentage(e){
        setNum(num/100);
    }

    function potencia(e){
        setNum(Math.pow(num, 2));
    }

    function changeSign(){
        if(num>0){
            setNum(-num)
        }else{
            setNum(Math.abs(num));
        }
    }

    function operatorHandeler(e){
        var operadorInput=e.target.value;
        setOperador(operadorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate(){
        if(operador === '/'){
            setNum(parseFloat(oldnum) / parseFloat(num));
        }
        else if(operador === '*'){
            setNum(parseFloat(oldnum) * parseFloat(num));
        }
        else if(operador === '-'){
            setNum(parseFloat(oldnum) - parseFloat(num));
        }
        else if(operador === '+'){
            setNum(parseFloat(oldnum) + parseFloat(num));
        }
    }


    return (
        <div>
            <Box m={5}/>
            
            <Container maxWidth="xs">
                <div className='wrapper'>

                    <h1 class="result">{num}</h1>

                    <button onClick={percentage}>%</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={potencia}>x²</button>

                    <button onClick={operatorHandeler} value={'/'}>÷</button>

                    <button onClick={inputNum} value={7}>7</button>
                    <button onClick={inputNum} value={8}>8</button>
                    <button onClick={inputNum} value={9}>9</button>

                    <button onClick={operatorHandeler} value={'*'}>x</button>

                    <button onClick={inputNum} value={4}>4</button>
                    <button onClick={inputNum} value={5}>5</button>
                    <button onClick={inputNum} value={6}>6</button>

                    <button onClick={operatorHandeler} value={'-'}>-</button>

                    <button onClick={inputNum} value={1}>1</button>
                    <button onClick={inputNum} value={2}>2</button>
                    <button onClick={inputNum} value={3}>3</button>

                    <button onClick={operatorHandeler} value={'+'}>+</button>

                    <button onClick={inputNum} value={'.'}>,</button>
                    <button onClick={inputNum} value={0}>0</button>

                    <button onClick={clear}>CE</button>

                    <button onClick={calculate}>=</button>

                </div>
            </Container>

            <h1>Created by Kaio Vinicius</h1>
        </div>
    );
}

export default Calculadora;

import { AddNums, AndNums, DivNums, MulNums, OrNums, PowNums, SubNums, XorNums } from './Functions';
//import './style.css';
import { useState } from "react";

function DisplayResult() {

    const [first, setFirst] = useState();  
    const [second, setSecond] = useState(); 
    const [inputType1, setInputType1]=useState('binary')
    const [inputType2, setInputType2]=useState('binary')
    const [operation,setOperation]=useState('addition')
    const [resultDecimal, setResultDecimal] = useState('');
    const [resultBinary, setResultBinary] = useState('');
    const [resultHexadecimal, setResultHexadecimal] = useState('');

    const calculateHandler=()=>{
        const num1=first;
        const num2=second;

        let userRes1,userRes2;
        if(inputType1==='binary'){
            userRes1=parseInt(num1,2);
        }
        else if(inputType1==='Hexa'){
            userRes1=parseInt(num1,16)
        }
        else if(inputType1==='decimal'){
            userRes1=parseFloat(num1)
        }

        if(inputType2==='binary'){
            userRes2=parseInt(num2,2);
        }
        else if(inputType2==='Hexa'){
            userRes2=parseInt(num2,16)
        }
        else if(inputType2==='decimal'){
            userRes2=parseFloat(num2)
        }

        let Result;

        switch (operation) {
        case 'addition':
            Result = AddNums(userRes1, userRes2);
            break;
        case 'substract':
            Result = SubNums(userRes1,userRes2);
            break;
        case 'multiply':
            Result = MulNums(userRes1, userRes2);
            break;
        case 'divide':
            if (userRes2 !== 0) {
            Result = DivNums(userRes1, userRes2);
            } 
            else {
            alert('Division by zero is not allowed.');
            return;
            }
            break;
        case 'power':
            Result=PowNums(userRes1,userRes2);
            break;
        case 'and':
            Result=AndNums(userRes1,userRes2);
            break;
        case 'or':
            Result=OrNums(userRes1,userRes2);
            break;
        case 'xor':
            Result=XorNums(userRes1,userRes2);
            break;
        default:
            alert('Invalid operation selected.');
            return;
        }

        setResultDecimal(Result);
        setResultBinary(Result.toString(2));
        setResultHexadecimal(Result.toString(16).toUpperCase());
    }
    
    return ( 
        <div className='bg-indigo-200 h-screen text-center pt-[75px]'>
            <h1 className='text-4xl font-semibold pb-[4px] text-indigo-600'>
                Binary Calculator
            </h1>

            <form className=' text-[19px] p-[15px] max-w-[520px] mx-[32%] text-left shadow-lg
            bg-indigo-300 shadow-indigo-400'>
                 
                {/* Taking first input */}
                <p htmlFor="message">First Number</p>
                <div className='flex space-x-4'>
                    <input id="mesage" className='text-[25px] rounded-md'
                    onChange={(e) => setFirst(+e.target.value)}></input>

                    <select name="choice" value={inputType1} onChange={(e) => setInputType1(e.target.value)}
                    className='h-10 text-xl border-4 rounded-lg border-indigo-500 overflow-hidden'>
                        <option value="Hexa">Hexa</option>
                        <option value="binary">Binary</option>
                        <option value="decimal">Decimal</option>
                        </select>
                </div>
                    
                <p >Operation:</p>
                <select value={operation} onChange={(e) => setOperation(e.target.value)}
                    className=' h-10 text-xl border-4 rounded-lg border-indigo-500 overflow-hidden'>
                        <option value="addition"> Add(+)</option>
                        <option value="substract"> Substract(-)</option>
                        <option value="multiply"> Multiply(*)</option>
                        <option value="divide">Division(/)</option>
                        <option value="power">Power(^)</option>
                        <option value="and">And(&)</option>
                        <option value="or">Or(|)</option>
                        <option value="xor">Xor(^)</option>
                        <option value="not">Not (~)</option>
                        <option value="leftshift">left shift ()</option>
                        <option value="rightshift">Right Shift ()</option>

                </select>
               
                {/* Taking second input  */}
                <p htmlFor="message" className='text-[19px]'>Second Number</p>
                <div className='flex space-x-4'>
                    <input id="mesage"className='text-[25px] rounded-md'
                    onChange={(e) => setSecond(+e.target.value)}></input>

                    <select name="choice" value={inputType2} onChange={(e) => setInputType2(e.target.value)}
                        className=' h-10 text-xl border-4 rounded-lg overflow-hidden border-indigo-500'>
                            <option value="binary">Binary</option>
                            <option value="Hexa">Hexa</option>
                            <option value="decimal">Decimal</option>
                    </select>
                </div>
                <p className='text-[15px]'>* and,or,not,xor operations are limited to 32 bits numbers</p>

            </form>

            {/* Result part */}
            <div className=' text-[19px] p-[15px] bg-indigo-300 max-w-[520px] mx-[32%] shadow-lg shadow-indigo-400'>
                <button onClick={calculateHandler} className='p-2 w-[25%] border-4 border-indigo-500 rounded-md bg-indigo-400 hover:bg-indigo-300 text-center'>
                    Calculate
                </button>
               
                <div className='text-left'>
                    <p >Result in Hexa</p>
                    <textarea className='text-[25px] rounded-md bg-white w-[58%]' rows="1" value={resultHexadecimal} readOnly></textarea>
                </div>

                <div className='text-left'>
                    <p >Result in Decimal</p>
                    <textarea className='text-[25px] rounded-md bg-white w-[58%]' rows="1" value={resultDecimal} readOnly></textarea>
                </div>

                <div className='text-left'>
                    <p>Result in Binary</p>
                    <textarea className='text-[25px] rounded-md bg-white w-[58%]' rows="1"  value={resultBinary}readOnly></textarea>  
                </div> 

            </div>
                
            
        </div>
    );
}

export default DisplayResult;

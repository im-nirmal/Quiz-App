import React, { useState } from 'react'
import { data } from '../data'

function Quizz() {
    const [currentNumber, setCurrentNumber] = useState(0)
    const [selectOption,setSelectOption] = useState(null)
    const [score,setScore] = useState(0)
    const [result,setResult] = useState(false)


    const handleOption = (index) =>{
        
            // console.log("checking");
            setSelectOption(index)
            if(data[currentNumber].answer === index.toString()){
                // console.log("correct");
                setScore(score+1)
            }
    }

    const handleNext = () =>{
        if(currentNumber < data.length -1){
            setCurrentNumber(currentNumber+1)
            setSelectOption(null)
        }else{
            setResult(true)
        }
    }

  return (
    <>
        <div style={{width:'100%', height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column bg-primary '>
        <div className='bg-light mb-5 rounded p-1'>
            <h1 className='text-center dw-bold'>Quizz App</h1>
        </div>
        <div style={{width:'700px'}} className='p-5 bg-warning rounded text-center'>
            { !result ? (
                <><div className='mb-4'>
                          <span className='fs-5 fst-italic'>Question {currentNumber + 1}/{data.length}</span>
                          <hr />
                      </div><div className='question mb-4'>
                              <h4><b>{currentNumber + 1}.</b> {data[currentNumber].question}</h4>
                          </div><div className='option '>
                              {data[currentNumber].options.map((item, index) => (
                                  <><button onClick={() => handleOption(index)} key={index} style={{ width: '200px' }} className={`btn mb-1 ${selectOption === index ? 'btn-success' : 'btn-info'}`}>{item}</button><br /></>
                              ))}
                          </div><button onClick={handleNext} className="btn btn-primary mt-3">Next</button></>
            ): (
                <div className="result">
                    <h2>Your Score: <b>{score}/{data.length}</b></h2>
                    <button onClick={()=>window.location.reload()} className="btn btn-danger">Restart</button>
                </div>
            )
                
            }

            
                
        </div>

    </div>

    </>
  )
}

export default Quizz
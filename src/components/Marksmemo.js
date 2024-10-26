import React, { useEffect, useRef } from 'react'


function Marksmemo() {

    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let engInputRef = useRef();
    let hindiInputRef = useRef();
    let telInputRef = useRef();
    let mathsInputRef = useRef();
    let sciInputRef = useRef();
    let socInputRef = useRef();

    let resultPara = useRef();

    let engInputspanRef = useRef();
    let hindiInputspanRef = useRef();
    let telInputspanRef = useRef();
    let mathsInputspanRef = useRef();
    let sciInputspanRef = useRef();
    let socInputspanRef = useRef();

    let firstNamespanRef = useRef();
    let lastNamespanRef = useRef();


    useEffect(()=>{
        console.log("Marksmemo loaded")
    },[]); 


  return (
    <div>
        <form>
            <h2>Marks Memo</h2>
            <div>
                <label>First Name</label>
                <input ref={firstNameInputRef}></input>
                <span ref={firstNamespanRef}></span>
            </div>

            <div>
                <label>Last name</label>
                <input ref={lastNameInputRef}></input>
                <span ref={lastNamespanRef}></span>
            </div>

            <div>
                <label>English</label>
                <input ref={engInputRef}

                onFocus={()=>{console.log("Eng on Focus");
                    engInputRef.current.style.backgroundColor="yellow";
                }}
                
                
                onChange={()=>{console.log("Eng on Change");

                    let marks =Number(engInputRef.current.value);

                    console.log(marks>=35?"PASS" : "FAIL");
                    engInputspanRef.current.innerHTML= marks>=35 ? "PASS" : "FAIL";
                   
                }}
                onBlur={()=>{console.log("Eng on Blur");
                    engInputRef.current.style.backgroundColor="";}}

                ></input>

              <span ref={engInputspanRef}></span>

            </div>
            <div>
                <label>Hindi</label>
                <input ref={hindiInputRef} onFocus={()=>{console.log("Hindi on Focus");
                    hindiInputRef.current.style.backgroundColor="green";
                }}
                
                
                onChange={()=>{console.log("Hindi on Change");

                    let marks =Number(hindiInputRef.current.value);

                    console.log(marks>=35?"PASS" : "FAIL");
                    hindiInputspanRef.current.innerHTML= marks>=18 ? "PASS" : "FAIL";
                    
                }}
                onBlur={()=>{console.log("Hindi on Blur");
                    hindiInputRef.current.style.backgroundColor="";}}

                ></input>
                 <span ref={hindiInputspanRef}></span>
            </div>

            <div>
                <label>Telugu</label>
                <input ref={telInputRef}
                             onFocus={()=>{console.log("tel on Focus");
                                telInputRef.current.style.backgroundColor="grey";}}                         
                            onChange={()=>{console.log("tel on Change");
            
                                let marks =Number(telInputRef.current.value);
            
                                console.log(marks>=35?"pass":"fail");
                                telInputspanRef.current.innerHTML= marks>=35 ? "PASS" : "FAIL";}}
                            onBlur={()=>{console.log("tel on Blur");
                                telInputRef.current.style.backgroundColor="";}}
            
                            ></input>
            
                          <span ref={telInputspanRef}></span>
                
            </div>
            <div>
                <label>Maths</label>
                <input ref={mathsInputRef}
                onFocus={()=>{
                             console.log("maths on focus");
                             mathsInputRef.current.style.backgroundColor="pink";
                }}

                onChange={()=>{
                    console.log("maths on change");
                    let marks =Number(mathsInputRef.current.value);
            
                    console.log(marks>=35?"PASS" : "FAIL");
                    mathsInputspanRef.current.innerHTML= marks>=35 ? "✌️" : "😞";
                    
                }}
            
            onBlur={()=>{console.log("maths on Blur");
                mathsInputRef.current.style.backgroundColor="";}}

            ></input>

          <span ref={mathsInputspanRef}></span>
            
            </div>
            <div>
                <label>Science</label>
                <input ref={sciInputRef}
                onFocus={()=>{
                    console.log("sci on focus");
                    sciInputRef.current.style.backgroundColor="brown"; }}

       onChange={()=>{
           console.log("sci on change");
           let marks =Number(sciInputRef.current.value);
   
           console.log(marks>=35?"PASS" : "FAIL");
           sciInputspanRef.current.innerHTML= marks>=35 ? "PASS" : "FAIL";
           sciInputspanRef.current.style.backgroundColor= marks>=35 ? "green" : "red";
       }}
   
   onBlur={()=>{console.log("maths on Blur");
       sciInputRef.current.style.backgroundColor="";}}

   ></input>

 <span ref={sciInputspanRef}></span>
            </div>
            <div>
                <label>Social</label>
                <input ref={socInputRef}
                onFocus={()=>{
                    console.log("soc on focus");
                    socInputRef.current.style.backgroundColor="skyblue";
       }}

       onChange={()=>{
           console.log("soc on change");
           let marks =Number(socInputRef.current.value);
   
           console.log(marks>=35?"PASS" : "FAIL");
           socInputspanRef.current.innerHTML= marks>=35 ? "PASS" : "FAIL";
       }}
   
   onBlur={()=>{console.log("soc on Blur");
       socInputRef.current.style.backgroundColor="";}}

   ></input>

 <span ref={socInputspanRef}></span>
            </div>
            <div>
                <button type='button' onMouseMove={()=>{
             
             let firstName = firstNameInputRef.current.value;
             let lastName = lastNameInputRef.current.value;

             let engMarks = Number (engInputRef.current.value);
             let hindiMarks = Number (hindiInputRef.current.value);
             let telMarks = Number (telInputRef.current.value);
             let mathsMarks = Number (mathsInputRef.current.value);
             let sciMarks = Number (sciInputRef.current.value);
             let scomarks = Number (socInputRef.current.value);

             

             let totalMarks = engMarks+hindiMarks+telMarks+mathsMarks+sciMarks+scomarks;

             let perc = totalMarks/600*100;

            //  alert(`${firstName}${lastName} total marks of ${totalMarks} ${perc .toFixed(3)}%`)

             resultPara.current.innerHTML= `${firstName}${lastName} total marks of ${totalMarks} ${perc.toFixed(2)}%`;

                }}>Calculate Result</button>

                <p ref={resultPara}></p>
            </div>
        </form>
      
    </div>
  )
}

export default Marksmemo

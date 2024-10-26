import React, { useRef } from 'react'

function TenthMarksMemo() {

    let FirstnameInputRef =useRef();
    let LastnameInputRef  =useRef();

    let EnglishInputRef = useRef();
    let TeluguInputRef  = useRef();
    let HindiInputRef   = useRef();
    let MathsInputRef   = useRef();
    let ScienceInputRef = useRef();
    let SocialInputRef  = useRef();

    let resultLabelRef = useRef();

    
    

  return (
    <div>
        
        <form>
        <h1>Tenth Marks Memo</h1>
            <div>
            <label>Firstname</label>
            <input ref={FirstnameInputRef}></input>
            </div>

            <div>
            <label>Lastname</label>
            <input ref={LastnameInputRef}></input>
            </div>

            <div>
            <label>English</label>
            <input type='number' ref={EnglishInputRef}></input>
            </div>

            <div>
            <label>Telugu</label>
            <input type='number' ref={TeluguInputRef}></input>
            </div>

            <div>
            <label>Hindi</label>
            <input type='number' ref={HindiInputRef}></input>
            </div>

            <div>
            <label>Maths</label>
            <input type='number' ref={MathsInputRef}></input>
            </div>

            <div>
            <label>Science</label>
            <input type='number' ref={ScienceInputRef}></input>
            </div>

            <div>
            <label>Social</label>
            <input type='number' ref={SocialInputRef}></input>
            </div>

            <div>
                <button type='button' onClick={()=>{

                    let Firstname = FirstnameInputRef.current.value;
                    let Lastname = LastnameInputRef.current.value;

                    let English = Number(EnglishInputRef.current.value);
                    let Telugu  = Number(TeluguInputRef.current.value);
                    let Hindi   = Number(HindiInputRef.current.value);
                    let Maths   = Number(MathsInputRef.current.value);
                    let Science = Number(ScienceInputRef.current.value);
                    let Social  = Number(SocialInputRef.current.value);

                   

                    let total= English+Telugu+Hindi+Maths+Science+Social;

                    alert(`${Firstname} ${Lastname}Total marks ${total}`);
                    
                    resultLabelRef.current.innerHTML = `${Firstname} ${Lastname} Total marks ${total}` 
                    
                    // console.log(total)
                    
                    // EnglishInputRef.current.value=1234567890;
                    // EnglishInputRef.current.style.backgroundColor="skyblue"

                    


                }}>submit</button>
            </div> 

            {/* <div>
              <button  onClick={()=>{
                let a = 10;
                console.log(b)
                ()=>{
                  console.log(a)
                  let b=5;
                }
              }}>Scope of variables</button>
            </div> */}


            <label className='submitbutton' ref={resultLabelRef}> Please Enter marks and Click Submit button</label>
            </form>
      
    </div>
  )
}

export default TenthMarksMemo

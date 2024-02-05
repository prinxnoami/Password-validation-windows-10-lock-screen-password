        const Pass_input = document.querySelector('input')
        const eyeBtn = document.getElementById('eye')
        const result = document.querySelector('.result')
        const eng = document.querySelector('span.eng')
        const right_arrow = document.querySelector('.fa-arrow-right')
        const bgImage = document.querySelector('img.bg')
        const container = document.querySelector('.parent_container')
        function changeLan(){
            if(eng.innerHTML == 'Eng'){
                eng.innerHTML = 'Urdu'
            }else{
                eng.innerHTML = 'Eng'
            }
        }

        //Focus on the input field on startup
        Pass_input.focus()
        
        //When the eye icon is clicked
        eyeBtn.addEventListener('click', ()=>{
            myfun()
        })
        
        //function for eye icon 
        function myfun(){
            if(Pass_input.type === 'password'){
                Pass_input.type = 'text'
                eyeBtn.classList.remove('fa-eye')
                eyeBtn.classList.add('fa-eye-slash')
                Pass_input.focus()
                
            }
            else{
                Pass_input.focus()
                Pass_input.type = 'password'
                eyeBtn.classList.remove('fa-eye-slash')
                eyeBtn.classList.add('fa-eye')
              }
            }


            //When you press enter after putting something in the input value
            Pass_input.addEventListener('keydown',(e)=>{
                
                if(e.key === 'Enter'){
                    if(Pass_input.value === 'unlockme'){
                        bgImage.classList.remove('bg')
                        bgImage.classList.add('active')
                        container.classList.add('container_active')
                        result.innerHTML =`<p style='text-align:center'>You've successfully typed the correct Password!</p>
                        <p>Did you know that you can also click on the Eng text below?</p>`
                        
                    }else{
                        container.classList.remove('container_active')
                        bgImage.classList.remove('active')
                        bgImage.classList.add('bg')
                        result.innerHTML ="The Password is incorrect. Try again"
                    }
                }
            })

            right_arrow.addEventListener('click',()=>{
                result.innerHTML =`You've successfully typed your Password! and your password is: <b>${Pass_input.value}</b>`
            })
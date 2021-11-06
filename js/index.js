const submit_btn_div = document.querySelector("#submit-btn-div");
const title= document.querySelector(".title");
const input_box = document.querySelector(".form-control");
const btn_container = document.querySelector(".btn-container")

submit_btn_div.addEventListener("click",()=>{
    console.log("here");
    title.classList.add("form-enable-title");
    input_box.classList.add("form-enable-input")
    
})
const validateEmail = (email)=> {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
} 

input_box.addEventListener("input",e=>{
    const email_validation = validateEmail(e.target.value)
    console.log(email_validation)
    if(email_validation){
        const btn = `
        <button type="submit" class="submit-btn">
            <span class="submit-btn-text">Done</span>
            <img src="./img/tick.svg" class="tick-icon"/>
        </button>`
        btn_container.innerHTML = btn;
    }  else{
        btn_container.innerHTML = `<div class="submit-btn-div"><img src="./img/right_arrow.svg" alt=""></div>`
    }  
})

let x_turn=true
let o_turn=false
let x_area=[]
let o_area=[]





let reset_btn=document.querySelector(".reset-btn")
reset_btn.addEventListener("click",()=>{
    window.location.reload()
    console.log(x_area,o_area)
})

let inner_container=document.querySelector(".inner")
inner_container.addEventListener("click",(e)=>{
    let clicked_box=e.target
    clicked_box.classList.add("rotateff")
    setTimeout(()=>{

        if(x_turn && clicked_box.innerHTML==""){
            clicked_box.innerHTML="X"
            x_turn=false
            o_turn=true
            document.querySelector(".cur-player").innerHTML="O"
            // x_area.push(clicked_box.id)
            x_area.push(clicked_box.getAttribute("id"))
        }
        else{
            if(clicked_box.innerHTML==""){
                clicked_box.innerHTML="O"
                o_turn=false
                x_turn=true
                document.querySelector(".cur-player").innerHTML="X"
                o_area.push(clicked_box.getAttribute("id"))
            }
        }
    },300)
})






function valueinput(){
const value=document.getElementById('value');
const input=document.getElementById('input');
value.textContent=1;
input.addEventListener("input",(event)=>{
    value.textContent=event.target.value;
});
}

export default valueinput();


let numInput = document.getElementById('number');
let btn = document.getElementById('btn');
let table = document.getElementById('ok');

let heading = document.getElementById('heading');

btn.addEventListener("click", () => {
    if(numInput.value.trim() == "") table.innerHTML="Please Enter a Number"
    else{
        let result = ""
        for(let i = 1;i<=10;i++){
            result +=  `${numInput.value} × ${i} = ${ numInput.value * i } <br>` 
        }
           heading.innerText = `Table of ${numInput.value}`
        table.innerHTML = result;
    }
})

let marks = [];
let InputMarks = document.getElementById('Input_Marks')
let addMarks = document.getElementById('AddMarks');
let one;
let result = "";
let addedMarks = document.getElementById('addedMarks')
let total = 0;
let totalMarks = document.getElementById('totalMarks')
let avgMarks = document.getElementById('avgMarks')
let highestMarks = document.getElementById('highMarks')
let lowestMarks = document.getElementById('lowMarks')

let Insearch = document.getElementById('search_Marks')
let search = document.getElementById('searchMarks')

let finalResult = document.getElementById('result')

addMarks.addEventListener("click", () => {
    result = ""
    if (InputMarks.value.trim() == "") addedMarks.innerText = "please enter a no."
    else {
        one = Number(InputMarks.value);
        marks.push(one)
        console.log(marks);

        for (let i = 0; i < marks.length; i++) {
            result += `${marks[i]}<br>`;;

        }
        //  console.log(result);   
        addedMarks.innerHTML = result
    }

    InputMarks.value = "";
    InputMarks.focus();
    total = 0
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    totalMarks.innerHTML = total

    let avg = total / marks.length;

    avgMarks.innerHTML = avg

    let highest = marks[0];
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] > highest) highest = marks[i]
    }
    highestMarks.innerHTML = highest;

    let lowest = marks[0];
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < lowest) lowest = marks[i]
    }
    lowestMarks.innerHTML = lowest;

})

 search.addEventListener("click", () => {

        let searchMark = Number(Insearch.value);

        if (marks.includes(searchMark)) {
            finalResult.innerText = " Found!";
        } else {
            finalResult.innerText = " Not Found!";
        }

        Insearch.value = "";
        Insearch.focus();
    }) 



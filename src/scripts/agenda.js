let htmlTemplate = document.getElementById('schedule-container');
var keepedSchedule = localStorage.getItem('schedule');
htmlTemplate.innerHTML = keepedSchedule;
console.log(keepedSchedule);

function editSchedule(){
    let testSchedule = localStorage.getItem('schedule');
    const title = document.getElementById('title').value;
    const sumario = document.getElementById('sumario').value;
    const date = document.getElementById('release-date').value;
    

    if (title != '' && sumario != '' && date != ''){
        if(testSchedule == null){
            htmlTemplate.innerHTML += ` Sua agenda: <div> <span class="transformBold">Você está esperando por: </span > ${title}. <span class="transformBold">Seus motivos são: </span> ${sumario}. <span class="transformBold">A data de estreia é: </span>${date}.</div>`;
        }
        else{
            htmlTemplate.innerHTML += `<div> <span class="transformBold">Você está esperando por: </span > ${title}. <span class="transformBold">Seus motivos são: </span> ${sumario}. <span class="transformBold">A data de estreia é: </span>${date}.</div>`;
        }
        localStorage.setItem('schedule', htmlTemplate.innerHTML);
    }

}






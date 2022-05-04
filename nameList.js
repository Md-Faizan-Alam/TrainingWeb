let nameBox = document.getElementById('nameBox');
let screen = document.getElementById('screen');
let showTable = document.getElementById('showTable');
let nameList = [];
function add(){
    let name = nameBox.value;
    if(name!=""){
        nameList.push(name);
    }
    nameBox.value = "";
}

function show(){
    showTable.style.display = 'table';
    screen.innerHTML = "";
        for(let i in nameList){
            screen.innerHTML += '<tr><td>'+(++i)+'</td><td>'+nameList[i-1]+'</td></tr>';
        }
}
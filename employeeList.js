let details = JSON.parse(localStorage.getItem('details'));
let screen = document.getElementById('screen');

for(let i in details){
    screen.innerHTML += '<a href="#" class="list-group-item list-group-item-action list-group-item-primary">'+(++i)+'. '+details[i-1]+'</a>';
}



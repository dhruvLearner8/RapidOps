let users = [];

let userCard = document.getElementById("user-card1");

let inputSearch = document.getElementById("search");

inputSearch.addEventListener('input',e => {
    let inputText = e.target.value.toLowerCase();
    for(let user of users){
        let isVisible = user.name.toLowerCase().includes(inputText) || user.email.toLowerCase().includes(inputText);
        user.element.classList.toggle("hide",!isVisible);
    }
})

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        

       for(let user of data){

            
            let card = document.createElement('div');
            card.classList.add('card');

            let header = document.createElement('div');
            header.classList.add('header');

            let body = document.createElement('div');
            body.classList.add('body');

            header.textContent = user.name;
            body.textContent = user.email;

            card.appendChild(header);
            card.appendChild(body);
            userCard.appendChild(card);
            const obj = {
                name: user.name,
                email: user.email,
                element: card
            }
            users.push(obj);
            
       }
    })
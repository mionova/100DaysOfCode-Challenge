//Dynamically display HTML with a loop

const main = document.querySelector('main');
let html = ' ';

for (let i = 1; i < 10; i++) {
    html += `<div>${i}</div>`;
}

main.innerHTML = html;
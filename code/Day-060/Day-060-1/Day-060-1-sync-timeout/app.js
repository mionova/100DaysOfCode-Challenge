const btn = document.getElementById('btn');

function wait() {
 console.log('starting...');
 let start = new Date().getTime();
 while (new Date().getTime() - start < 8000);
 console.log('finished!');
}

btn.addEventListener('click', wait);


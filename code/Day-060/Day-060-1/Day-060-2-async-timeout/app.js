const btn = document.getElementById('btn');

function carryOn() {
  console.log('starting...');
  setTimeout(() => {
    console.log('finished!');
  }, 8000);
};

btn.addEventListener('click', carryOn);


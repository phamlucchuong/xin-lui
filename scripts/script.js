function showQuestion() {
    document.getElementById('first').style.display = 'none';
    document.getElementById('second').style.display = 'block';
}

const width = window.innerWidth;
const height = window.innerHeight;

function changePosition() {
    const no = document.getElementById('second__button--no');
    const yes = document.getElementById('second__button--yes').getBoundingClientRect();
    const noRect = no.getBoundingClientRect();

    var x;
    var y;

    do {    
        x = Math.floor(Math.random() * (width - 130));
        y = Math.floor(Math.random() * (height - 50));
    } while (
        x < yes.right &&
        x + noRect.width > yes.left &&
        y < yes.bottom &&
        y + noRect.height > yes.top
    );

    no.style.position = 'absolute';
    no.style.left = `${x}px`;
    no.style.top = `${y}px`;

    document.getElementById('duck-quack').play();
}

function yee() {
    document.getElementById('third').style.display = 'block';
    document.getElementById('ting').play();
}

function thirdYes() {
    document.getElementById('third').style.display = 'none';
    document.getElementById('final').style.display = 'block';
}

function hideFinal() {
    document.getElementById('final').style.display = 'none';
}
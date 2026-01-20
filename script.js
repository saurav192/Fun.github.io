const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const question = document.getElementById('question');
const subText = document.getElementById('sub-text');
const mainGif = document.getElementById('main-gif');

let clickCount = 0;

// Content progression as seen in the video
const texts = [
    "Please think again! 🥺",
    "Ek aur baar Soch lo! 🧐",
    "beautiful pls Man jao na! ❤️"
];

const gifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp1eXp1ZzZ1eXp1ZzZ1eXp1ZzZ1eXp1ZzZ1eXp1JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/v6aO77M8qs5fdf67kk/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp1eXp1ZzZ1eXp1ZzZ1eXp1ZzZ1eXp1ZzZ1eXp1JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/c76IJLufpNNoG9sY0s/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp1eXp1ZzZ1eXp1ZzZ1eXp1ZzZ1eXp1ZzZ1eXp1JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/3ov9jE7W4d8F5U1Y7q/giphy.gif"
];

// Move the "No" button randomly
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Update text and gif as user tries to click No
    if (clickCount < texts.length) {
        question.innerText = texts[clickCount];
        mainGif.src = gifs[clickCount];
        clickCount++;
    }
});

// Final "Yes" action
yesBtn.addEventListener('click', () => {
    question.innerText = "I knew it! You Love me a lot 💖";
    subText.style.display = "none";
    mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp1eXp1ZzZ1eXp1ZzZ1eXp1ZzZ1eXp1ZzZ1eXp1JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/v6aO77M8qs5fdf67kk/giphy.gif";
    document.querySelector('.btn-wrapper').style.display = "none";
});


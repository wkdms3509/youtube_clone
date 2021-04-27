'use strict';

const moreBtn = document.querySelector('.info .video__metadata .titleAndBtn .moreBtn');
const title = document.querySelector('.info .video__metadata .titleAndBtn .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
})


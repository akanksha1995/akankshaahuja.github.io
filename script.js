const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const work_container = document.querySelector('.work-container')

if (container) {
    open.addEventListener('click', () => container.classList.add('show-nav'));

    close.addEventListener('click', () => container.classList.remove('show-nav'));
}

if (work_container) {
    console.log("hii");
    open.addEventListener('click', () => work_container.classList.add('show-nav'));

    close.addEventListener('click', () => work_container.classList.remove('show-nav'));
}

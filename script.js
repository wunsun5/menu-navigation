const listMenu = document.querySelectorAll('.navigation ul li');
const color = ['#d51b6c', '#3e42cf', '#00d15f', '#00cbfe', '#ff9900'];

listMenu.forEach((list, index) => {
    list.addEventListener('click', () => {
        listMenu.forEach(list => {
            list.classList.remove('active');
            list.style.backgroundColor = 'transparent';
            list.firstChild.style.color = 'black';
        })

        list.style.backgroundColor = color[index];
        document.body.style.backgroundColor = color[index];
        list.firstChild.style.color = 'white';
        list.classList.add('active');
    })
});
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.menu ul li a');
    const currentPage = window.location.pathname.split('/').pop();

    links.forEach(link => {
        if(link.getAttribute('href') === currentPage){
            link.classList.add('active');
        }
    });
});

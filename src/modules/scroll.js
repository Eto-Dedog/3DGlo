const scroll = () => {
    const smoothLinks = document.querySelectorAll('a[href^="#service-block"], a[href^="#portfolio"], a[href^="#calc"], a[href^="#command"], a[href^="#connect"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
    
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
}
export default scroll
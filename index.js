document.addEventListener('DOMContentLoaded',()=>{
    
    const carousel = document.querySelector('.carousel');
    const inner = document.querySelector('.carousel-inner');
    const prev = document.querySelector('.carousel-prev');
    const next = document.querySelector('.carousel-next');
    const imgWidth = document.querySelector('img').clientWidth;

    let currentIndex = 0;

    prev.addEventListener('click',(event)=>{
        event.preventDefault();
        currentIndex = Math.max(currentIndex - 1 , 0);

        inner.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
    });

    next.addEventListener('click',(event)=>{
        event.preventDefault();
        currentIndex = Math.min(currentIndex + 1 , inner.childElementCount - 1);

        inner.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
    });

});
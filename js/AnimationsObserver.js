const createObserver = (classnameAnimate, elementToObserve) => {
    return new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                elementToObserve.classList.add(classnameAnimate);
            } else {
                elementToObserve.classList.remove(classnameAnimate);
            }
        });
    }, { threshold: 0.5 });
};

const textToObserve = Array.from(document.querySelectorAll('.titleSection'));
const observeTextTitle = Array.from(document.querySelectorAll('.observeTextTitle')); 

console.log(textToObserve);

textToObserve.forEach((text,index)=>{
    const observer = createObserver('leftToRight', text);
    observer.observe(observeTextTitle[index]);
});


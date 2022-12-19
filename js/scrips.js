console.log('Cheguei!')

const images = document.querySelectorAll('.image-container img');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const image = entry.target;
        image.src = image.src.replace("&w=10&q=60", "&w=1000&q=600");
        observer.unobserve(image);
    });
}, {});

images.forEach((image) => {
    observer.observe(image);
});
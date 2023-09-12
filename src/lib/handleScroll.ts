// Smooth scrolling 
const handleScroll = (event: Event) => {
    // prevent page reload after click
    event.preventDefault();
    // get the a tag
    const link: any = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace('#', '');
    const anchor = document.getElementById(`#${anchorId}`);
    window.scroll({
        top: anchor?.offsetTop,
        behavior: 'smooth'
    })
}

export { handleScroll }
const handleScroll = (event: Event) => {
    event.preventDefault();
    const link: any = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace('#', '');
    const anchor = document.getElementById(`#${anchorId}`);
    window.scroll({
        top: anchor?.offsetTop,
        behavior: 'smooth'
    })
}

export { handleScroll }
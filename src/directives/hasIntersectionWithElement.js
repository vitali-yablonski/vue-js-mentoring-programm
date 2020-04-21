export default {
    inserted(el, binding, vnode) {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if (entries.length) {
                const first = entries[0];
                if (first.isIntersecting) {
                    if (vnode.componentInstance) {
                        vnode.componentInstance.$emit('intersection', { detail: el });
                    } else {
                        vnode.elm.dispatchEvent(new CustomEvent('intersection', { detail: el }));
                    }
                }
            }
        }, {
            root: document.querySelector(binding.value)
        });
        intersectionObserver.observe(el);
    }
};

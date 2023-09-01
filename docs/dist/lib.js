function ctx(id, el, src) {
        el = document.createElement(el);
        if (id) { el.id = id}
    if(src){el.url=src}
       
        return el
    }
  

document.addEventListener('mousemove', e=> {

    let bubles = document.createElement('bubles');
    let x = e.pageX;
    let y = e.pageY;
    bubles.style.left = x + "px";
    bubles.style.top = y + "px";
    let size = Math.random() * 100;
    bubles.style.width = 1 + size + "px";
    bubles.style.height = 1 + size + "px";
    
    document.body.appendChild(bubles);
    setTimeout(function() {
      bubles.remove();
    }, 1100);
  });
anime({
    targets: '.enter',
    marginTop :'0',
    duration:800,
    easing: 'easeOutExpo',
    delay:  anime.stagger(400)
  });

  (function () {

    const link = document.querySelectorAll('.hover-this');
    const cursor = document.querySelector('.cursor');

    const animateit = function (e) {
          const span = this.querySelector('span');
          const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,

          move =10,
          xMove = x / width * (move * 2) - move,
          yMove = y / height * (move * 2) - move;

          span.style.transform = `translate(${xMove}px, ${yMove}px)`;

          if (e.type === 'mouseleave') span.style.transform = '';
    };

    const editCursor = e => {
          const { clientX: x, clientY: y } = e;
          cursor.style.left = x + 'px';
          cursor.style.top = y + 'px';
    };

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

})();

let cursor=document.querySelector('.cursor');
let hoverable=document.querySelectorAll('.hover-this');

hoverable.forEach(item=>{
  item.addEventListener('mouseenter', ()=>{
    cursor.classList.add('cursor-active');
  })

  item.addEventListener('mouseleave', () =>{
    cursor.classList.remove('cursor-active')
  })
})
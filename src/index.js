console.log('Aplicación Cargada.')

new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       100,          // default
    mobile:       true,       // default
    live:         true
}).init();

let dark = 0

if(localStorage.getItem('dark') == 1){
    document.querySelector('html').classList.add('dark');
}

document.getElementById('nigthmode').addEventListener('click',function(){

    document.querySelector('html').classList.toggle('dark')

    if(dark){
        dark = 0;
    }else{
        dark = 1;
    }

    localStorage.setItem('dark',dark)
    
})
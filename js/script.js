
let rocketAnim = document.querySelector('.falcon-heavy');

window.addEventListener('scroll', () => {
    if(window.scrollY > 840) {
        rocketAnim.style.cssText = 'margin-top:-380px; transition:.9s;'
    } else {
        rocketAnim.style.cssText = 'margin-top:100px; transition:.9s;';
    }
});

let globeAnim = document.querySelector('.main-globe-img');

window.addEventListener('scroll', () => {
    if(window.scrollY > 200) {
        globeAnim.style.cssText = 'transform:scale(1); transition: 2s;'
    } else {
        globeAnim.style.cssText = 'transform:scale(.8); transition: 2s;';
    }
});

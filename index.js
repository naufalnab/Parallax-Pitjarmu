matahari = document.getElementById('matahari');
gunung_depan = document.getElementById('gunung_depan');
gunung_belakang = document.getElementById('gunung_belakang');
burung_kiri = document.getElementById('burung_kiri');
burung_kanan = document.getElementById('burung_kanan');

window.addEventListener('scroll', () => {
    let { scrollY } = window;
    console.log(scrollY);
    matahari.style.left = 2 * scrollY + 'px';
    matahari.style.top = -2 * scrollY + 'px';
    gunung_depan.style.left = 2 * scrollY + 'px';
    gunung_belakang.style.left = -0.5 * scrollY + 'px';
    burung_kiri.style.left = -2 * scrollY + 'px';
    burung_kiri.style.top = -2 * scrollY + 'px';
    burung_kanan.style.left = 2 * scrollY + 'px';
    burung_kanan.style.top = -2 * scrollY + 'px';
});
// ---------------- Variables ----------------
let projects = document.querySelectorAll('.boxs #open-modal');
let projectCards = document.querySelectorAll('.modal');


let modal = document.getElementById('modal');
let closeModalBnt = document.querySelectorAll('#close-btn');


// close modal event

closeModalBnt.forEach((el) =>{
            el.addEventListener('click', () => {
                projectCards.forEach((p)=>{
                    p.classList.remove('active');
                });
                document.body.style.overflow = 'auto';
            });
});

// project items fillter
projects.forEach((el) => {
    el.addEventListener('click', (ele) => {
        document.querySelectorAll((ele.currentTarget.dataset.show)).forEach((el) => {
            el.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
});

// TODO: Make the website with tow langs

// let langBtnDesc = document.getElementById('lang-btn-desc');
// let langBtnMob = document.getElementById('lang-btn-mob');
// let listDesc = document.querySelector('.list-desc');
// let listMob = document.querySelector('.list-mob');
// let lLang = document.querySelectorAll('.l-lang');

// langBtnMob.addEventListener('click', ()=>{
//     listMob.classList.add('active');
// });
// langBtnDesc.addEventListener('click', ()=>{
//     listDesc.classList.add('active');
// });
// let langu = localStorage.getItem("lang");
// lLang.forEach((e)=>{
//     e.addEventListener('click',()=>{
//         e.parentElement.classList.remove('active');
//         if(e.innerText === "En"){
//             e.innerText = "ع";
//             langBtnMob.innerText = "En";
//             langBtnDesc.innerText = "En";
//         }else if(e.innerText = "ع"){
//             e.innerText = "En";
//             langBtnMob.innerText = "ع";
//             langBtnDesc.innerText = "ع";
//         }
//         localStorage.setItem("lang",langBtnDesc.innerText);
//         langu = localStorage.getItem("lang");
//     });
// });


//Database
// let contentAr = {
//     heroTitle:"",
//     serviceTitle:"",
//     portfolioTitle:"",
//     contactTitle:"",
//     serviceSubTitle:"",
//     portfolioSubTitle:"",

// };
let imgbx = document.querySelectorAll('.Img')
let btn = document.querySelectorAll('.content ul li')

function setActive(i){
    for(pic of imgbx){
        // pic.classList.remove('active');
        // pic.classList[i].add('active');
        pic.classList.remove('active')
        imgbx[i].classList.add('active')
    }
    //圖片

    for(b of btn){
        // pic.classList.remove('active');
        // pic.classList[i].add('active');
        b.classList.remove('active')
        btn[i].classList.add('active')
    }
    //圖標
}


for(let j = 0 ; j<btn.length; j++){
    btn[j].addEventListener('click',function(){
        setActive(j)
        //雖然for跑過一次讓每個btn都吃到addevent
        //晚點再理解。
    })
};


//計時器
let turn = 0;

function tackTurn(){
    if(turn == imgbx.length -1){
        turn = 0
        setActive(turn)
    }else{
        turn++
        setActive(turn)
    }    
}

(function(){
    setInterval('tackTurn();', 7000);
}())



//手機選單
let mobileMenu = document.querySelector('.mobileMenu')//選單
let mobileBtn = document.querySelector('.mobile')//按鈕
let btnIconA = document.querySelector('.iconA')//圖標開
let btnIconB = document.querySelector('.iconB')//圖標關
mobileBtn.addEventListener('click',openMenu)
//監聽與指定

function openMenu(){
    mobileMenu.classList.toggle('active')
    btnIconA.classList.toggle('active')
    btnIconB.classList.toggle('active')
}



//建立中alert
function remindUser(){
    alert('努力建立中，請稍等等。')
}

let computerMenu = document.querySelectorAll('.header ul li a')//電腦選單
let phoneMenu = document.querySelectorAll('.mobileMenu div')


for(let btn of computerMenu){
    btn.addEventListener('click',remindUser)
}

for(let btn of phoneMenu){
    btn.addEventListener('click',remindUser)
}

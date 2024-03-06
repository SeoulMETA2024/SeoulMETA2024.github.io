function enlistButton(){
    alert('지원 기간이 아닙니다. ')

    //신청 사이트 나오면 수정 필요
    var link = 'https://google.com';
 
    location.href=link;
    location.replace(link);
    window.open(link)

}


//Button Click Effect
let Button = document.getElementById('enlist')


Button.addEventListener('touchstart', function(){
    console.log('click!');
    this.style.backgroundColor = '#28558c';
});
Button.addEventListener('touchend', function(){
    this.style.backgroundColor = '#4193f7';
});



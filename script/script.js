function enlistButton(){


    //신청 사이트 나오면 수정 필요
    var link = 'https://seoulhs-club.site/application?club=기계공학부';
 
    location.href=link;
    location.replace(link);
    window.open(link)

}


//Button Click Effect
let Button = document.getElementById('enlist')


Button.addEventListener('touchstart', function(){
    console.log('click!');
    this.style.backgroundColor = '#7d7d7d';
});
Button.addEventListener('touchend', function(){
    this.style.backgroundColor = '#ffffff';
});



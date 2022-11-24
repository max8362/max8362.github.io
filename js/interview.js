//1025 노션보기
$(document).ready(function(){ // 페이지가 열리면 실행

    const nvDB = [
        ['About me','#about'],
        ['Portfolio','#portfoloio'],
        ['Interview','#preInterview'],
        ['Contact','#contact']
    ];

    let nvli = '';
    for(let i in nvDB){
        nvli += `<li><a href="${nvDB[i][1]}">${nvDB[i][0]}</a></li>`
    }
    $('.depth1').html(nvli); //ul에 네비넣기 
    

    $('.slideSection').each(function(){
        $(this).find('h2').html(nvDB[$(this).index()][0])
    });
    
    //네비 슬라이드 섹션이동
     $(".depth1 a").click(function(e){         
        e.preventDefault(); 
        var targetPos = $($(this).attr('href')).offset().top;        
        $('body, html').animate({'scrollTop':targetPos});    
        
        //인터뷰섹션
        //는 같다 $(this).parent().addClass('active').siblings().removeClass('active') //depth1 li.active a
        $('.depth1 li').removeClass('active')
        $(this).parent().addClass('active')

     });////click

    //햄버거 메뉴 토글
     $(document).ready(
        function(){
            $('#allMenu').click(function(){
                $(this).toggleClass('open');
            })
        }
    )
    $(window).scroll(function(){
        if($(window).scrollTop() > 0 ){
            $('body').addClass('scroll')
          }else{
          $('body').removeClass('scroll')
        }
   
      })

     
})


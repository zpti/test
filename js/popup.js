$(function(){
      // 팝업창 표시(기본)
      $('.popup').addClass('show');

      // 닫기 버튼 클릭시 팝업장 종료
      $('#close_pop').click(function(){
        $('.popup').removeClass('show');
      });
    });
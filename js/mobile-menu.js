var viewport = window.matchMedia('(max-width: 999px)');
var items = $('.menu-item');
var board_list = $('.board-list > li');

$(window).resize(function(){
  location.reload();
});

board_list.attr('class', 'icon-star');

if(viewport.matches){
  var nav = $('.navigation');
  var btn = $('.btn-menubar');
  var menu = $('.menu');
  var lists = $('.menu-list');

  items.addClass('icon-plus');
  items.attr('role', 'button');
  items.attr('aria-haspopup', 'true');
  items.attr('aria-expanded', 'false');
  items.attr('aria-pressed', 'false');
  btn.on('click', function(e){
    e.preventDefault();
    nav.toggleClass('nav-act');
    if(nav.hasClass('nav-act')){
      btn.attr('aria-label', '메인메뉴 닫기');
    }else{
      btn.attr('aria-label', '메인메뉴 열기');
    }
  });

  items.on('click', function(e){
    lists.removeClass('menu-act');
    $(this).parent().addClass('menu-act');
    if(lists.hasClass('menu-act')){
      items.removeClass('icon-minus').addClass('icon-plus').attr('aria-pressed', 'false');
      $(this).removeClass('icon-plus').addClass('icon-minus');
      $(this).attr('aria-expanded', 'true').attr('aria-pressed', 'true');
    }
  });

  menu.on('fucusin', function(){
  nav.addClass('nav-act');
    
})
  menu.on('fucusout', function(){
  nav.removeClass('nav-act');
    
})



}else{
  var bar = $('.bar');
  items.attr('role', 'presentation');
  bar.attr('aria-hidden', 'true');
}


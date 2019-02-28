$(function(){
    $('#top').bgSwitcher({
      images: ['images/niwa.jpg', 'images/take.jpg', 'images/fusuma.jpg', 'images/teien.jpg'],
      interval: 5000,
      loop: true,
      shufle: false,
      effect: 'slide',
      duration: 2000,
      easing: 'linear'
    })
    $('#home').on('mouseover', function(){
        $(this).attr('src', 'images/home2.png');
    });
    $('#home').on('mouseout', function(){
        $(this).attr('src', 'images/home.png');
    });
})
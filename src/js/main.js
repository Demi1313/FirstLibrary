import $ from './lib/lib';

$('button').click(function() {
    $('div').eq(1).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));
$('button').fadeIn(1800);



// 버튼 0 누르면
// - 모든 버튼에 붙은 오렌지 제거
// - 버튼 0에 오랜지 추가
// - 모든div의 show제거
// - div0에 show 추가

// $('.tab-button').eq(0).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// });

// $('.tab-button').eq(1).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// });

// $('.tab-button').eq(2).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// });

// for(let i = 0; i < $('.tab-button').length; i++){
//     $('.tab-button').eq(i).on('click', function(){
//         탭열기(i)
//     });
// }

function 탭열기(숫자){
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(숫자).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(숫자).addClass('show');
  }

$('.list').click(function(e){
    
    탭열기(e.target.dataset.id);

})

var a = '<option>30</option><option>32</option><option>34</option>'
var b = `<option>90</option>
<option>95</option>
<option>100</option>`

$('#closet-select').on('input', function(){
if ($("#closet-select option:selected").val() == 'shirts') {
  $('#shirts-select').removeClass('shirts-size');
  $('#shirts-select').html(b)
};
if ($("#closet-select option:selected").val() == 'pants') {
  $('#shirts-select').removeClass('shirts-size');
  $('#shirts-select').html(a)
};
if($("#closet-select option:selected").val() == 'hat'){
  $('#shirts-select').addClass('shirts-size');
}
});


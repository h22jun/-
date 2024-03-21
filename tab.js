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

var 출석부 = ['흥민', '영희', '철수', '재석'];

function 이름찾기(a){
  var 출석부 = ['흥민', '영희', '철수', '재석'];

  //a가 출석부 안에 있으면 있어요, 없으면 공백
  for(let i = 0; i < 출석부.length; i++){
    if(출석부[i] == a){
      return '있어요'; 
    }

  }
  return '  ';
}
function 구구단(){
for(i=2; i<=9; i++){
  console.log(
    1*i, 2*i, 3*i, 4*i, 5*i, 6*i, 7*i, 8*i, 9*i
    )

}}


eleven_성적 = '80'

function 성적확인(c){
var 모의고사성적 = [62, 73, 92, 74, 91, 77]
var a = 0;
var b = 0;
for(let i=0; i<모의고사성적.length; i++){
  a = a + 모의고사성적[i];
  
  console.log(a)
}

var b = a/모의고사성적.length
console.log(b)

if(b>c){
  return "성적이 "+(b-c)+"만큼 낮네요"
} else if(b==c){
  return '성적이 같네요'
} else {
  return '성적이 '+(c-b)+'만큼 높네요'
}

}


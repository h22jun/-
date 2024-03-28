

var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

  products.forEach((a, i)=>{
    var 템플릿 = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${products[i].title}</h5>
      <p style = "margin-right : 5px" class="수평정렬 cost_btn">가격 : ${products[i].price}</p><div class="수평정렬 btn btn-danger buy_btn">구매</div>
    </div>`;
    $('#card').append(템플릿)
});

$('#가격정렬').click(function(){
    products.sort(function(a, b){
        return a.price - b.price 
      }); 


$('#card').html('');

products.forEach((a, i)=>{
  var 템플릿 = 
  `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p style = "margin-right : 5px" class="수평정렬 cost_btn">가격 : ${products[i].price}</p><div class="수평정렬 btn btn-danger" buy_btn">구매</div>
  </div>`;
  $('#card').append(템플릿)
})
})

$('#상품명정렬').click(function(){
    products.sort(function(a, b){
        return a.title > b.title ? -1 : a.title > b.title ? 1 : 0;

      }); 


$('#card').html('');

products.forEach((a, i)=>{
  var 템플릿 = 
  `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p style = "margin-right : 5px" class="수평정렬 cost_btn">가격 : ${products[i].price}</p><div class="수평정렬 btn btn-danger buy_btn">구매</div>
  </div>`;
  $('#card').append(템플릿)
})
})


$('#6만원이하').click(function(){
   var products2 = products.filter(function(a){
        return a.price <= 60000;
      }); 
      console.log(products2)


$('#card').html('');

products2.forEach((a, i)=>{
  var 템플릿 = 
  `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${a.title}</h5>
    <p style = "margin-right : 5px" class="수평정렬 cost_btn">가격 : ${products[i].price}</p><div class="수평정렬 btn btn-danger buy_btn">구매</div>
  </div>`;
  $('#card').append(템플릿)
})
})







// var list_making = function (y){
//     //y에 링크
// $('.btn').click(function(){$.get(y).done((data)=>{
//     console.log(data)
//         data.forEach((a, i)=>{
//             var 템플릿 = 
//             `<div class="col-sm-4">
//               <img src="https://via.placeholder.com/600" class="w-100">
//               <h5>${a[i].title}</h5>
//               <p>가격 : ${a[i].price}</p>
//             </div>`;
//             $('#card').append(템플릿)
//         });
    


// })})};
var clicker = 0;

var list_making = function (y) {
    $.get(y).done(function(data)  {
            console.log(data);
            
            data.forEach((a) => { // 여기서 a는 배열의 각 아이템을 나타냅니다.
                var 템플릿 =
                    `<div class="col-sm-4">
                        <img src="https://via.placeholder.com/600" class="w-100">
                        <h5>${a.title}</h5> 
                        <p style = "margin-right : 5px" class="수평정렬 cost_btn" >가격 : ${a.price}</p><div class="수평정렬 btn btn-danger buy_btn">구매</div>
                    </div>`;
                $('#card').append(템플릿);
            });
            clicker++;
        });
        
    };
    

$('#더보기btn').click(function(){
if(clicker == 0){
    list_making (`https://codingapple1.github.io/js/more1.json`);
    console.log('1번작동')
};
if(clicker == 1){
   list_making ('https://codingapple1.github.io/js/more2.json');
   $('#더보기btn').addClass('display_none');
   console.log('2번작동')
};   
});

 
$('.buy_btn').click(function(){
  var thissell = $(this);
  var 가격 = thissell.prev();
  var 상품명 = 가격.prev();
  console.log(가격.html());
  console.log(상품명.html());

  // 로컬 스토리지에서 기존 장바구니 목록 불러오기
  var 기존목록 = localStorage.getItem('장바구니');
  var 장바구니 = 기존목록 ? JSON.parse(기존목록) : [];

  // 새 상품 추가하기
  장바구니.push([가격.html(), 상품명.html()]);

  // 업데이트된 목록 저장하기
  localStorage.setItem('장바구니', JSON.stringify(장바구니));
  
})



var 담은목록 = localStorage.getItem('장바구니');
담은목록 = JSON.parse(담은목록);
console.log(담은목록);

console.log(담은목록.length)

//어레이 1번 꺼내서 상품명 : 1번쨰 그다음 2번쨰(가격: 포함됨) 반복문 ... 

 
for(i=0; i<담은목록.length; i++){
  
var 장바구니목록 = `<h3>상품명 : ${담은목록[i][1]}</h3> <h3>${담은목록[i][0]}</h3>`
$('.jangbasket').append(장바구니목록)

}
    

    


















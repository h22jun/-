

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
      <p>가격 : ${products[i].price}</p>
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
    <p>가격 : ${products[i].price}</p>
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
    <p>가격 : ${products[i].price}</p>
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
    <p>가격 : ${a.price}</p>
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
                        <p>가격 : ${a.price}</p> 
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


    

    


















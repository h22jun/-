

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



$('.btn').click(function(){$.get('https://codingapple1.github.io/js/more1.json').done((data)=>{
    var products2 = data
    
    products2.forEach((a, i)=>{
        var 템플릿 = 
        `<div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100">
          <h5>${products2[i].title}</h5>
          <p>가격 : ${products2[i].price}</p>
        </div>`;
        $('#card').append(템플릿)
    });
})})







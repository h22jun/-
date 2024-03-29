$.get('store.json').done(function(data){
    console.log(data);

    // 여기서 `data.items` 대신 `data.products`를 사용해야 합니다.
    data.products.forEach((a,i)=>{
        var 템플릿 = 
        `<div class="card">
            <div class="card"><img src="${a.photo}">
              <p class="card-text">${a.title}</p>
              <p>${a.brand}</p>
              <p>가격 : ${a.price}</p>
            </div>
            <button type="button" class="btn btn-danger btn-jang" id="products${i}">담기</button>
        </div>`;
        $('.card-box').append(템플릿);
    });
});

//2개로 나눠. 각버튼마다 스위치문 만든다. 눌렀을떄 생성할지 추가할지
//반복문으로 축약 


$(document).on('click', '.btn-jang', function(){
    var buttonId = $(this).attr("id");
    switch (buttonId) {
      case 'products0':
        console.log('1임!');
        //jangbaguni에다가 카드넣기
        var 장바구니 = 
        `<div class="card-box jangba-box">
            <div class="card"><img src="pr1.jpg">
              <p class="card-text">식기세척기</p>
              <p>세척나라</p>
              <p>가격 : 10000</p>
            </div>
        </div>`;
        $('.jangbaguni').append(장바구니);
        break;
      case 'products1':
        console.log('2임!');
        var 장바구니 = 
        `<div class="card-box jangba-box">
            <div class="card"><img src="pr2.jpg">
              <p class="card-text">원목 침대 프레임</p>
              <p>침대나라</p>
              <p>가격 : 20000</p>
            </div>
        </div>`;
        $('.jangbaguni').append(장바구니);
        break;
      case 'products2':
        console.log('3임!');
        var 장바구니 = 
        `<div class="card-box jangba-box">
            <div class="card"><img src="pr3.jpg">
              <p class="card-text">천연 디퓨저 세트</p>
              <p>향기나라</p>
              <p>가격 : 30000</p>
            </div>
        </div>`;
        $('.jangbaguni').append(장바구니);
        break;
      case 'products3':
        console.log('4임!');
        var 장바구니 = 
        `<div class="card jangba-box">
            <div class="card"><img src="pr4.jpg">
              <p class="card-text">시원한 서큘레이터</p>
              <p>바람나라</p>
              <p>가격 : 40000</p>
            </div>
        </div>`;
        $('.jangbaguni').append(장바구니);
        break;
      default:
        console.log('암것도 아님!');
    }
});









// 메인 카테고리 리스트 불러오기
$(function(){
    $.ajax({
        url: "./json/main_nav.json",
        dataType: "json",
        success : function(data){
            console.log("main_nav");
            console.log(data);
            if(data.length>0){
                for(var i in data.slice(0, 8)){
                    $("#main_nav_1 > ul").append(`
                        <li><a href="sub.html" target="_self">
                            <img src="${data[i].img}" alt="${data[i].name}">
                            <span>${data[i].name}</span>
                        </a></li>
                    `);
                }

                var nav_2 = data.slice(8);
                for(var i in nav_2){
                    $("#main_nav_2 > ul").append(`
                        <li><a href="sub.html" target="_self">
                            <img src="${nav_2[i].img}" alt="${nav_2[i].name}">
                            <span>${nav_2[i].name}</span>
                        </a></li>
                    `);
                }
            }
        }
    });
});

// section_1 부담없는 알뜰 반찬 목록 불러오기
$(function(){
    $.ajax({
        url: "./json/altelbanchan.json",
        dataType: "json",
        success : function(data){
            console.log("altelbanchan");
            if(data.length>0){
                for(var i in data){
                    $("#section_1 > .banchan_list").append(`
                        <div class="product">
                            <a href="#">
                                <img src="${data[i].main_img}" alt="${data[i].name}">
                                <div class="prd_discription">
                                    <h4>${data[i].name}</h4>
                                    <p>${data[i].discription}</p>
                                    <h5>${data[i].discount_price}원</h5>
                                </div>
                            </a>
                        </div>
                    `);


                }
            }
        }
    });
});

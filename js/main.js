// 메인 카테고리 리스트 불러오기
$(function(){
    $.ajax({
        url: "json/main_nav.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(var i in data.slide(0, 8)){
                    $("#main_nav_1 > ul").append(`
                        <li><a href="sub.html" target="_self">
                            <img src="${data[i].img}" alt="${data[i].name}">
                            <span>${data[i].name}</span>
                        </a></li>
                    `);
                }

                for(var i in data.slide(8)){
                    $("#main_nav_2 > ul").append(`
                        <li><a href="sub.html" target="_self">
                            <img src="${data[i].img}" alt="${data[i].name}">
                            <span>${data[i].name}</span>
                        </a></li>
                    `);
                }
            }
        }
    });
});
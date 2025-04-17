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

// 더보기 눌렀을 때
$(function() {
    $(".nav_more > button").on("click",function() {
        console.log("nav more btn click");
        $("#main_nav_2").slideToggle();

        if($("#main_nav_2").show()) {
            $(".nav_more span").text("접기");
            $(".nav_more img").attr("src", "img/icon/icon-arrow-up.svg");
        } else {
            $(".nav_more span").text("더보기");
            $(".nav_more img").attr("src", "img/icon/icon-arrow-down.svg");
        }
    });
})
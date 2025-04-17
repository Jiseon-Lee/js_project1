// 메인 카테고리 리스트 불러오기
$(function(){
    $.ajax({
        url: "./json/main_nav.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(var i in data.slice(0, 8)){
                    $("#main_nav_1 > ul").append(`
                        <li><a href="sub.html" target="_self">
                            <img src="${data[i].img}" alt="${data[i].name}">
                            <span>${data[i].name}</span>
                        </a></li>
                    `);
                }

                for(var i in data.slice(8, data.length)){
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

// section_1 부담없는 알뜰 반찬 목록 불러오기
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("./json/altelbanchan.json");
        if (!response.ok) throw new Error("데이터를 불러오는 데 실패했습니다.");

        const data = await response.json();
        if (data.length > 0) {
            for(var i in data){
                $("#section_1 > .banchan_list").append(`
                    <div class="product">
                        <a href="#">
                            <img src="${data.main_img}" alt="${data.name}">
                            <div class="prd_discription">
                                <span class="prd_tag tag_${data.tag[0].tag_id}">${data.tag[0].tag_name}</span>
                                <h4>${data.name}</h4>
                                <p>${data.discription}</p>
                                <h5>${data.discount_price}원</h5>
                            </div>
                        </a>
                    </div>
                `);
            }
        }
    } catch (error) {
        console.error("오류 발생:", error);
    }
});
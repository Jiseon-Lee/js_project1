var mdRcmIndex = 0;
var mdRcmBanchanList;

// 07_mdrecommendbanchan.json 리스트를 받아옴
const getMrecommendTotal = async () => {
    try {
        const response = await fetch("./json/07_mdrecommendbanchan.json");
        console.log("getMrecommendTotal");
        if (!response.ok) throw new Error("데이터를 불러오는 데 실패했습니다.");

        const data = await response.json();
        mdRcmBanchanList = data;
        console.log("mdrecommend.js ", data);
        if (data.length > 0) {
            getmdRcmBanchanList(data[0]);
        }
    } catch (error) {
        console.error("오류 발생:", error);
    }
}

// 문서가 로드되면
document.addEventListener('DOMContentLoaded', function() {
    console.log("mdrecommend.js addEventListener");
    getMrecommendTotal();
})

function getmdRcmBanchanList(obj) {      // 보여줄 상품을 HTML에 추가
    $("#section_7 .banchan_list").empty();
    var list = obj["list"]
    for(let i in list){
        $("#section_7 .banchan_list").append(`
            <div class="product">
                <a href="#">
                    <img src="${list[i].main_img}" alt="${list[i].name}">
                    <div class="prd_discription">
                        <h4>${list[i].name}</h4>
                        <p>${list[i].discription}</p>
                        <h5>${list[i].discount_price}원</h5>
                    </div>
                </a>
            </div>
        `);

        let tag = list[i].tag;
        for(let j in tag) {         // 상품의 태그 추가
            $("#section_7 .prd_discription").eq(i).prepend(`
                <span class="prd_tag tag_${tag[j].tag_id}">${tag[j].tag_name}</span>
            `)
        }
    }
}

$(function() {
    $("#section_7 .recommend_tab span").click(function() {
        var menu = $("#section_7 .recommend_tab span").index(this);
        $("#section_7 .recommend_tab span").removeClass("on");
        $("#section_7 .recommend_tab span").eq(menu).addClass("on");
        console.log("recommend_tab changed ", menu);
        getmdRcmBanchanList(mdRcmBanchanList[menu]);
    });
});
// 04_regularbanchan.json 리스트를 받아옴
const getRegularTotal = async () => {
    try {
        const response = await fetch("./json/04_regularbanchan.json");
        console.log("getRegularTotal");
        if (!response.ok) throw new Error("데이터를 불러오는 데 실패했습니다.");

        const data = await response.json();
        console.log("regular.js ", data);
        if (data.length > 0) {
            getRgBanchanList(data[0]);
        }
    } catch (error) {
        console.error("오류 발생:", error);
    }
}

// 문서가 로드되면
document.addEventListener('DOMContentLoaded', function() {
    console.log("regular.js addEventListener");
    getRegularTotal();
})

function getRgBanchanList(obj) {      // 보여줄 상품을 HTML에 추가
    console.log("getRgBanchanList ", obj)
    $("#section_4 .regular_list_disc .title").text(`${obj.title}`);
    $("#section_4 .regular_list_disc .disc").text(`${obj.disc}개`);

    var week1 = obj["week1"];
    var week2 = obj["week2"];
    for(let i in week1){
        console.log("week1", week1);
        $("#section_4 #week1 ul").append(`
            <li>
                <img src="${week1[i].main_img}" alt="${week1[i].name}">
                <p>${week1[i].name}</p>
            </li>
        `);
    }
    for(let i in week2){
        $("#section_4 #week2 ul").append(`
            <li>
                <img src="${week2[i].main_img}" alt="${week2[i].name}">
                <p>${week2[i].name}</p>
            </li>
        `);
    }
}

// $(function() {
//     $(".rank_tab li").click(function() {
//         console.log("rankingTab changed ");
//         var menu = $(".rank_tab li").index(this);
//         $(".rank_tab li").removeClass("on");
//         $(".rank_tab li").eq(menu).addClass("on");
//         if(menu == 0) {
//             getRkBanchanList(saleRk);
//         } else if (menu == 1) {
//             getRkBanchanList(commentRk);
//         } else {
//             getRkBanchanList(recmRk);
//         }
//     });
// });

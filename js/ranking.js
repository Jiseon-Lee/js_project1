var menu = 0;
var saleRk;
var commentRk;
var recmRk;

// 05_banchanranking.json 리스트를 받아옴
const getRankingTotal = async () => {
    try {
        const response = await fetch("./json/05_banchanranking.json");
        console.log("getRankingTotal");
        if (!response.ok) throw new Error("데이터를 불러오는 데 실패했습니다.");

        const data = await response.json();
        console.log("ranking.js ", data);
        if (Object.keys(data).length > 0) {
            saleRk = data.saleRk;
            commentRk = data.commentRk;
            recmRk = data.recmRk;
            getRkBanchanList(saleRk);
        }
    } catch (error) {
        console.error("오류 발생:", error);
    }
}

// 문서가 로드되면
document.addEventListener('DOMContentLoaded', function() {
    console.log("ranking.js addEventListener");
    getRankingTotal();
})

function getRkBanchanList(list) {      // 보여줄 상품을 HTML에 추가
    console.log("getRkBanchanList", list);
    for(let i in list){
        console.log("getRkBanchanList " + i, list[i]);
        $("#section_5 .rank_list").append(`
            <div class="product_rank">
                <div>
                    <img src="${list[i].main_img}" alt="${list[i].name}">
                </div>
                <div class="prd_discription">
                    <h4>${list[i].name}</h4>
                    <p>${list[i].discription}</p>
                    <h5>${list[i].discount_price}원</h5>
                </div>
            </div>
        `);

        let tag = list[i].tag;
        for(let j in tag) {         // 상품의 태그 추가
            $("#section_5 .prd_discription").eq(i).prepend(`
                <span class="prd_tag tag_${tag[j].tag_id}">${tag[j].tag_name}</span>
            `)
        }
    }
}


var kid_index = 0;

// 02_kidbanchan.json 리스트를 받아옴
const getKidBanchanTotal = async () => {
    try {
        const response = await fetch("./json/02_kidbanchan.json");
        if (!response.ok) throw new Error("데이터를 불러오는 데 실패했습니다.");

        const data = await response.json();
        if (data.length > 0) {
            var show = data.slice(kid_index, (kid_index + 4));
            getKidBanchan(show);
        }
    } catch (error) {
        console.error("오류 발생:", error);
    }
}

// 문서가 로드되면
document.addEventListener('DOMContentLoaded', function() {
    getKidBanchanTotal();
})

function getKidBanchan(list) {      // 보여줄 상품을 HTML에 추가
    for(let i in list){
        $("#section_2 > .banchan_list").append(`
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
            $("#section_2 .prd_discription").eq(i).prepend(`
                <span class="prd_tag tag_${tag[j].tag_id}">${tag[j].tag_name}</span>
            `)
        }
    }
}
var current_index = 0;

const getNewBanchan = async () => {
    try {
        const response = await fetch("./json/03_newbanchan.json");
        if (!response.ok) throw new Error("데이터를 불러오는 데 실패했습니다.");

        const data = await response.json();
        if (data.length > 0) {
            for(var i in data){         // 상품을 출력
                $("#section_3 > .banchan_list").append(`
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

                var tag = data[i].tag;
                for(var j in tag) {         // 상품의 태그 추가
                    $("#section_3 .prd_discription").eq(i).prepend(`
                        <span class="prd_tag tag_${tag[j].tag_id}">${tag[j].tag_name}</span>
                    `)
                }
            }
        }
    } catch (error) {
        console.error("오류 발생:", error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    getNewBanchan();
})
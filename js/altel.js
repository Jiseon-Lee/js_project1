// section_1 부담없는 알뜰 반찬 목록 불러오기
$(function(){
    $.ajax({
        url: "./json/01_altelbanchan.json",
        dataType: "json",
        success : function(data){
            console.log("altel" + data);
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

                    var tag = data[i].tag;
                    for(var j in tag) {
                        $("#section_1 .prd_discription").eq(i).prepend(`
                            <span class="prd_tag tag_${tag[j].tag_id}">${tag[j].tag_name}</span>
                        `)
                    }
                }
            }
        }
    });
});

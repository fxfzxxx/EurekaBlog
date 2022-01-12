
        var nav = document.querySelector(".navbar")
        var itemDetails = document.querySelector(".products-info")
        var frg = document.createDocumentFragment();
        var service = document.querySelector(".navbar .service"); //再服务节点前插入li
        dataList.forEach(element => {
            var li = document.createElement('li')
            li.className = "more-products"
            li.innerHTML = `<a href="#">${element.name}</a>`
            frg.appendChild(li)
        });
        nav.insertBefore(frg,service)

        //二级菜单
        var navItem = document.querySelectorAll(".navbar li.more-products")
        console.log(navItem);
        navItem.forEach((e, i) => { // i 就是li的索引 对应list数组的索引
            console.log();
            e.onmouseover = function(){
                itemDetails.innerHTML = ""
                var ol = document.createElement('ol')
                ol.className = "w"
                dataList[i].list.forEach(element => {
                    var li = document.createElement('li')
                    var spanName = document.createElement('span')
                    var spanPtice = document.createElement('span')
                    var img = document.createElement('img')
                    img.src = element.list_url
                    spanName.innerHTML = element.list_name
                    spanPtice.innerHTML = element.list_price
                    li.appendChild(img)
                    li.appendChild(spanName)
                    li.appendChild(spanPtice)
                    ol.appendChild(li)
                })
            itemDetails.appendChild(ol)
            }
        })

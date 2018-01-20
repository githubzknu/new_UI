// JavaScript Document






$(function(){
    $("#navList_itemSort").mouseover(function(){

        $thisul=$(this).next()	        /* 使a标签同级下一个元素ul显示出来       商品分类按钮*/
        $thisul.css("display","block")
        $other_ul=$(this).parents().next().find("#showSuper")

        $other_ul.css("display","none")
    })
    $("#navList_itemSuper").mouseover(function(){

        $thisul=$(this).next()	        /* 使a标签同级上一个ul显示出来    超级运动会按钮*/
        $thisul.css("display","block")
        $other_ul=$(this).parents().prev().find("#showSort")

        $other_ul.css("display","none")
    })
})

/*  背景 字体颜色切换 begin*/
$(function(){
    $("#navList_itemSuper").mouseover(function(){
        $(this).addClass("selectedSuper")
        $sort=$(this).parents().prev().find("#navList_itemSort")
        $sort.removeClass("selecterSort")

    })

    $("#navList_itemSort").mouseover(function(){
        $(this).addClass("selecterSort")
        $super=$(this).parents().next().find("#navList_itemSuper")
        $super.removeClass("selectedSuper")
    })


})

$(function(){													/* 导航栏头部 滑出天猫 !*/
    $(".navList_item").mouseover(function(){

        $(this).next().animate({
            top:"-8"
        },150)
    })

    $(".navList_item").mouseleave(function(){

        $(this).next().animate({
            top:"0"
        },150)
    })
})

$(function(){                                            /* 点击图片 跳转到对应的课程*/
    $(".proj-bottom > div.row > div").click(function(){
        $index=$(this).index()

        $detailHeight=$(".content_main_logo").offset().top;

        $('html,body').animate({scrollTop:$detailHeight},"slow");
        $logoButton_container=$(".logoButton_container > a");

        $showLogo_item=$($logoButton_container).parents().prev().find(".showLogo_item")
        $showLogo_item.eq($index).show().siblings().hide();

        /* 改变圆形按钮图片*/
        $img=$($logoButton_container).find("img")	 						/*获得当前a标签下单独的img*/
        $img.attr("src","index img/btngray.png")			/*设置这个a标签下的img更换选中时的图片*/
        $imgOthers=$($logoButton_container).siblings().find("img")			/*找都a标签同级元素其他a标签下img*/
        $imgOthers.attr("src","index img/btnwhite.png")		/*使其他的img改为未选中时的图片*/
        $img.eq($index).attr("src","index img/btngray.png").siblings().attr("src","index img/btnwhite.png")

    })


})

$(function(){
    $(".logoButton_container > a").mouseover(function(){
        $index=$(this).index()                               /*this为img的容器a标签*/

        $showLogo_item=$(this).parents().prev().find(".showLogo_item")
        $showLogo_item.eq($index).show().siblings().hide();

        /* 改变圆形按钮图片*/
        $img=$(this).find("img")	 						/*获得当前a标签下单独的img*/
        $img.attr("src","index img/btngray.png")			/*设置这个a标签下的img更换选中时的图片*/
        $imgOthers=$(this).siblings().find("img")			/*找都a标签同级元素其他a标签下img*/
        $imgOthers.attr("src","index img/btnwhite.png")		/*使其他的img改为未选中时的图片*/
        $img.eq($index).attr("src","index img/btngray.png").siblings().attr("src","index img/btnwhite.png")
    })

})







$(function(){																/*activityLogo_container 鼠标移入及移出中的图片 透明度变化*/
    $(".activityLogo_container > a").mouseover(function(){

        $(this).animate({
            opacity:"0.8"
        },190)
    })
    $(".activityLogo_container > a").mouseleave(function(){

        $(this).animate({
            opacity:"1"
        },180)
    })

})


$(function(){															/* .brand_list ul li span 鼠标移入及移出中的图片 透明度变化*/
    $(".brand_listShow > li").mouseover(function(){
        $span=$(this).find("span")

        $span.fadeIn(200)

    }).mouseleave(function(){
            $span.stop(false,false);		   							/* 淡入还没完成时移出鼠标停止淡出效果 */
        })

    $(".brand_listShow > li").mouseleave(function(){
        $span=$(this).find("span")
        $span.fadeOut(100)

    })

})


$(function(){															/* activityLogo_container 鼠标移入及移出中的图片 透明度变化*/
    $(".recommend_item > a").mouseover(function(){
        $(this).animate({
            opacity:"0.7",

        },180)


    })
    $(".recommend_item > a").mouseleave(function(){
        $(this).animate({
            opacity:"1",
        },180)

    })

})


$( function(){											//上 右悬浮框


    $(window).scroll(function(){
        var scrollY=$(document).scrollTop();            // 获取垂直滚动的距离，即滚动了多少

        if(scrollY>700)										//如果滚动距离大于700px则滑出，否则隐藏
        {
            $(".suspend_search").slideDown();
            $(".suspend_nav").fadeIn()
        }
        else
        {
            $(".suspend_search").slideUp();
            $(".suspend_nav").fadeOut();
        }
    })

})


/*  左侧按钮 点击后页面移动事件*/
$(function(){
    $("#suspend_itemBtn1").click(function(){								/* 点击按钮移动到页面特位置 */

        $('html,body').animate({scrollTop:1500},"slow");


    })

    $("#suspend_itemBtn2").click(function(){								/* 点击按钮移动到页面特位置 */

        $('html,body').animate({scrollTop:2100},"slow");


    })
    $("#suspend_itemBtn3").click(function(){								/* 点击按钮移动到页面特位置 */

        $('html,body').animate({scrollTop:2700},"slow");


    })
    $("#suspend_itemBtn4").click(function(){								/* 点击按钮移动到页面特位置 */

        $('html,body').animate({scrollTop:3300},"slow");

        suspend_navBack
    })
    $("#suspend_itemBtn5").click(function(){								/* 点击按钮移动到页面特位置 */

        $('html,body').animate({scrollTop:3900},"slow");

        suspend_navBack
    })
    $("#suspend_navBack").click(function(){								/* 点击按钮移动到 页面顶部 */

        $('html,body').animate({scrollTop:0},"slow");


    })
    $("#suspend_navBack2").click(function(){								/* 点击按钮移动到 页面顶部 */

        $('html,body').animate({scrollTop:0},"slow");


    })
})




$(function(){																/*  右侧导航栏中 购物车切换图片 */
    $("#suspend_login_buyCar").mouseover(function(){
        $img=$(this).find("img");
        $img.attr("src","index img/suspend_login_buyCar.png")
    })

    $("#suspend_login_buyCar").mouseleave(function(){
        $img=$(this).find("img");
        $img.attr("src","index img/suspend_login_buyCarRed.png")
    })


})


$(function(){															/* channel中左侧大图  鼠标移入及移出中的图片 透明 */
    $(".channel_logo1 > img").mouseover(function(){

        $(this).animate({
            opacity:"0.85"

        },180)


    })
    $(".channel_logo1 > img").mouseleave(function(){
        $(this).animate({
            opacity:"1"
        },180)

    })

})


$(function(){																/*  channel mid  中部小图片移动 */
    $(".channel_item > img").mouseover(function(){
        $(this).animate({
            right:"10"
        },180)

    })
    $(".channel_item > img").mouseleave(function(){
        $(this).animate({
            right:"0"
        },180)

    })

})


$(function(){															    /*  channel  right  右侧小图片移动 */
    $(".channel_recommend_item > a > img").mouseover(function(){
        $(this).animate({
            right:"5"
        },180)

    })
    $(".channel_recommend_item > a > img").mouseleave(function(){
        $(this).animate({
            right:"0"
        },180)

    })

})



$(function(){
    $(".gototop > .gototop_wx").mouseover(function(){

        $(this).find("div").show();


    }).mouseleave(function(){
            $(this).find("div").hide()  ;

        })

})

$(function(){                       //导航栏高亮显示



    var url = location.search; //获取url中"?"符后的字串
    if (url.indexOf("?") != -1) {    //判断是否有参数
        var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
        strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
        //alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
        $index=strs[1]
    }
    $li=$(".menu-1 > ul > li")
    $li.eq($index).addClass("active").siblings().removeClass("active")



})
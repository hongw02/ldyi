
$(function () {
    $(".navcontain a").click(function () {
        $(".activenav").removeClass("activenav"); //移除
        $(this).addClass("activenav"); // 追加样式
    });


    var a=new Object();
    a.sclTrg=0;
    a.f1=function f() {
        $("#shafa").removeClass("hide");
        $("#shafa").addClass("drop");
        $("#shafaUp").removeClass("hide");
        $("#shafaUp").addClass("up");
        $("#shafaRight").removeClass("hide");
        $("#shafaRight").addClass("rightIn");
        $("#shafaLeft").removeClass("hide");
        $("#shafaLeft").addClass("leftIn");
    }
    a.f2=function f() {
        $("#ball").removeClass("hide");
        $("#ball").addClass("drop1");
        $("#ballUp").removeClass("hide");
        $("#ballUp").addClass("up1");
        $("#ballRight").removeClass("hide");
        $("#ballRight").addClass("rightIn1");
        $("#ballLeft").removeClass("hide");
        $("#ballLeft").addClass("leftIn1");
    }
    a.f3=function f() {
        $("#chair").removeClass("hide");
        $("#chair").addClass("drop2");
        $("#chairUp").removeClass("hide");
        $("#chairUp").addClass("up2");
        $("#chairRight").removeClass("hide");
        $("#chairRight").addClass("rightIn2");
        $("#chairLeft").removeClass("hide");
        $("#chairLeft").addClass("leftIn2");
    }

    var flag=true;
    $(document.body).scroll(function () {

        //   alert($(window).height()); //浏览器时下窗口可视区域高度
        // alert($(document).height()); //浏览器时下窗口文档的高度
        //  alert($(document.body).height());//浏览器时下窗口文档body的高度
        // alert($(document.body).outerHeight(true));//浏览器时下窗口文档body的总高度 包括border padding margin

        //  alert($(window).width()); //浏览器时下窗口可视区域宽度
        //  alert($(document).width());//浏览器时下窗口文档对于象宽度
        //    alert($(document.body).width());//浏览器时下窗口文档body的高度
        //  alert($(document.body).outerWidth(true));//浏览器时下窗口文档body的总宽度 包括border padding margin



        var scrollTop = parseInt($(document.body).scrollTop());
        var screenHeight =parseInt( $(document.body).height());
        if (screenHeight < 640) {
            screenHeight = 640;
        }
        if(flag){
            flag=false;
            //alert(scrollTop);
            //alert(screenHeight);
            //alert();
            //alert(scrollTop/screenHeight);

            console.log(a.sclTrg);
            if (scrollTop>screenHeight*(a.sclTrg+0.8)) {

                switch (a.sclTrg) {
                    case 0:
                        a.f1();
                        break;
                    case 1:
                        a.f2();
                        break;
                    case 2:
                        a.f3()
                        $(document.body).unbind() ;
                        break;
                }
                a.sclTrg+=1;
            }
            flag=true;
        }



    })
});
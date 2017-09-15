/**
 * Created by 小天 on 2017/2/7.
 */
$(function () {
    var $LeftLi=$('#Left ul li');
    var $StarLi=$('#star ul li');
    var $shopping=$('#shopping');
    var $Float=$('#shopping #Folat');
    var $search = $('#search ');
    var $search_txt = $('#search #txt ');
    var $search_but = $(' #but');

    var list = $('.list');
    var list_L = $('.list .L');
    var $img=$('#img  li');
    var $btn=$('#btn  li');
    var $banner_li=$('#banner .b_list');
    var $banner_Ul=$('#banner .b_menu_li');
    var $b_button=$('#content .b_button');
    var index=0;
    var timer=null
    var $content=$('#content');
    $LeftLi.hover(function () {
        $(this).addClass('on').siblings().removeClass('on')
    });
    $StarLi.hover(function () {
        $(this).addClass('on').siblings().removeClass('on')
    });



    $shopping.hover(function () {
        $($shopping).css({
            'backgroundColor':'white'

        });
        $('#shopping a').css({
            'color':'#ff6600'
        })
        $Float.stop(true).fadeIn(30).animate({
            'height': '108px',
            'backgroundColor':'white'
        })
    },function () {
        $(this).css({
            'backgroundColor':'#424242'

        })
        $('#shopping a').css({
            'color':'#aebb9d'
        })
        $Float.stop(true).fadeOut(750).animate({
            'height': '0px',
            'backgroundColor':'rgba(255,255,255,0.5)'
        })
    })
    list.hover(function () {
        index = $(this).index();
        list_L.eq(index).stop(true).fadeIn(500);
        $(this).addClass('on').stop(true).siblings().removeClass('on')
    }, function () {
        list_L.hide();
    });
    $search.hover(function () {
        $($search_txt).css({
            'border': '1px solid  #999999'
        });
        $($search_but).css({
            'border': '1px solid  #999999'
        })
    }, function () {
        $($search_txt).css({
            'border': '1px solid  #dddddd'
        });
        $($search_but).css({
            'border': '1px solid  #dddddd'
        })
    });
    $search_but.hover(function () {

        $(this).css({

            'backgroundColor': '#ff6600'
        })
    },function () {
        $(this).css({

            'backgroundColor': 'white'
        });
    })
    $btn.hover(function () {
        index=$(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $img.eq(index).stop(true).fadeIn(500).siblings().stop(true).fadeOut(500);
    })


    $banner_li.hover(function () {
        $(this).addClass('on').siblings().removeClass('on');
        index=$(this).index();
        $banner_Ul.eq(index).stop(true).fadeIn(500);
    },function () {
        $banner_Ul.stop(true).fadeOut(500)
    })
    $b_button.hover(function () {
        var i=$(this).index();
        if (i==3)
        {
            $(this).css({
                'backgroundPosition':'2px 0px'
            })
        }
        else {
            $(this).css({
                'backgroundPosition':'-43px 0px'
            })
        }

    },function () {
        var i=$(this).index();
        if (i==3)
        {
            $(this).css({
                'backgroundPosition':'-84px 0px'
            })
        }
        else {
            $(this).css({
                'backgroundPosition':'-125px 0px'
            })
        }
    });

    $b_button.click(function () {
        var i=$(this).index();
        if (i==4)
        {
            index++;
            if  (index>=$btn.length)
            {
                index=0;
            }
        }
        else {
            index--;
            if (index<=-1)
            {
                index=$btn.length-1;
            }
        }
        $($btn).eq(index).addClass('on').siblings().removeClass('on');
        $img.eq(index).stop(true).fadeIn(500).siblings().stop(true).fadeOut(500);
    })

    fn();
    $content.hover(function () {
        clearInterval(timer)
    },function () {
        fn();
    })


    function fn() {
        timer=setInterval(function () {


            index++;
            if  (index>=$btn.length)
            {
                index=0;
            }
            $($btn).eq(index).addClass('on').siblings().removeClass('on');
            $img.eq(index).stop(true).fadeIn(500).siblings().stop(true).fadeOut(500);
        },2500)
    }

});
$(function () {
    var $m_ul=$('#m_show ul')
    var $m_showW=$('#m_show').width();
    var $m_show=$('#m_show');
    var btn=$('#m_litile #m_btn .m_btn');


    var timer=null;
    var index=0;
    btn.click(function () {
        var i=$(this).index()
        if(i)
        {
            $m_ul.animate({'left':''+(-$m_showW)+'px'},500)
            $(this).addClass('hover').siblings().removeClass('hover')


        }
        else {
            $m_ul.animate({'left':''+(0)+'px'},500)
            $(this).addClass('hover').siblings().removeClass('hover')
        }
    })
    fn1() ;
    $m_show.hover(function () {
        clearInterval(timer)
    },function () {
        fn1()
    })
    function fn1() {
        timer=  setInterval(function () {
            index++;
            if (index>=2)
            {
                index=0
            }
            if (index==1)
            {
                $m_ul.animate({'left':''+(-$m_showW)+'px'},500);
                $(btn).eq(index).addClass('hover').siblings().removeClass('hover')
            }
            else {
                $m_ul.animate({'left':''+(0)+'px'},500);
                $(btn).eq(index).addClass('hover').siblings().removeClass('hover')
            }
        },3000)
    }

    D_show();
    sell();
    procduct();
    busy();
    v_content()
    function D_show() {
        var $D_ul=$('#d_hot ul')
        var $D_li=$('#d_hot  ul li');
        $D_li.hover(function () {
            $(this).stop(true).animate({
                'bottom':'5px'
            },500)
        },function () {
            $(this).stop(true).animate({
                'bottom':'0px'
            },500)
        })
    }
    function sell() {
        var $s_showLi=$('.s_show ul li');

        var $s_show=$('.s_show');
        var s_show=document.getElementsByClassName('s_show');
        var s_btnLi=document.getElementById("s_btn").getElementsByTagName('li');
        var $s_menu=$('.s_menu ')
        for (var i=0; i<s_btnLi.length; i++)
        {
            s_btnLi[i].index=i;
            s_btnLi[i].onmouseover=function () {
                for (var j=0; j<s_btnLi.length; j++)
                {
                    s_btnLi[j].className='';
                    s_show[j].style.display='none'
                }
                s_btnLi[this.index].className='on';
                s_show[this.index].style.display='block';
            }

        }
        $s_showLi.hover(function () {
            $(this).stop(true).animate({'bottom': '8px'}).find('.s_menu').css({'display':'block','opacity':0}).stop(true).animate({'bottom': '0px','opacity':1}, 500)
        }, function () {
            $(this).stop(true).animate({'bottom': '0px'}).find('.s_menu').stop(true).animate({'bottom': '-69px','opacity':0}, 300,function () {
                $(this).css({'display':'none'})
            })
        });
    }
    function procduct() {
        var $p_list=$('#p_list ul li')
        $p_list.hover(function () {
            $(this).animate({'bottom':'5px'})
        },function () {
            $(this).animate({'bottom':'0px'})
        })
    }
    function busy() {
        var $img=$('.y_img ul');
        var  imgW=$('.y_img').width();
        var $y_button=$('#y_list .y_button');
        var $button=$('.y_button ')
        var $y_btn=$('.y_btn  ul  li');
        var index=0;
        var $imgL=$('#y_list ul li');
        var $List=$('#y_list .y_list1')

        $imgL.hover(function () {
            var $imgLeft=  $(this).find($img);

            $(this).animate({'bottom':'5px'}).find($y_btn).click(function () {
                index=$(this).index();
                $(this).addClass('on').siblings().removeClass('on');
                $imgLeft.animate({'left':''+(-imgW*index)+'px'})
            });

            $(this).find($y_button).show();
        },function () {
            $(this).animate({'bottom':'0px'});
            $(this).find($y_button).hide();
        });

        $List.each(function () {
            index=$(this).index();
            var $imgLeft=  $(this).find($img);
            var button=$(this).find($button);
            var y_btn=$(this).find($y_btn);
            button.click(function () {

                var i=$(this).index();
                if (i){index++}
                else {index--}
                $imgLeft.animate({'left':''+(-imgW*index)+'px'})
                $(y_btn).eq(index).addClass('on').siblings().removeClass('on');
            })
        })



    }
    function v_content() {
        var $v_list=$('#v_content ul li')
        $v_list.hover(function () {
            $(this).stop(true).animate({'bottom':'5px'})
        },function () {
            $(this).stop(true).animate({'bottom':'0px'})
        })
    }

});

(function( $ ) {
    var methods = {
        init : function() {
            $(this).css('background-image','url("'+$(this).attr('imgsrc')+'")');
            var pos=$(this).attr('pos');
            pos=eval(pos);
            $(this).html(methods.getCoverHTML(pos.length,$(this).height(),$(this).width()));
            $(this).children("div").each(function(index){$(this).bind('mouseenter',function(){$(this).ChangeImageOnMouseOver('changeImage')})});
            $(this).bind('mouseleave',function(){$(this).css('background-position','')});
        },
        changeImage : function(){
            var pos=eval($(this).parent().attr('pos'));
            var position=pos[$(this).attr('n')][0]+ " "+pos[$(this).attr('n')][1] ;
            console.log(position);
            $(this).parent().css('background-position',position);
        },
        getCoverHTML : function(n,height,width){
            var y = parseInt(Math.sqrt(n));
            var ary=Array();
            var i;
            for(i=0;i<y;i++){
                var tempary=Array();
                var i2;
                for(i2=0;i2<y;i2++){
                    tempary.push('x');
                }
                ary.push(tempary);
            }
            var less=n-y*y
            if(less==0){
            }else{
                for(;less>0;less--){
                    ary[y-1-(less-1)%y].push('x');
                }
            }
            var html=''
            var n=0;
            for(i=0;i<ary.length;i++){
                for(i2=0;i2<ary[i].length;i2++){
                    html+='<div n='+n+' x='+i+' y='+i2+' style="float:left;height:'+height/ary.length+'px;width:'+width/ary[i].length+'px;"></div>';
                    n++;
                }
            }

            return html;
        }
    };

    $.fn.ChangeImageOnMouseOver = function (method){
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        }    
    };

    })( jQuery );

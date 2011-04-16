(function($) {
    easySlider = function(options){
        var defaults = {
            speed: 			500,
            pause:			10000,
            continuous:		true
        };

        var options = $.extend(defaults, options);        
        var s;
        var w ;       
        var ts;
        var t = 0;
        
        $(".arrow-right").click(function(){            
            animateClick("next");
            return false;
        });
        $(".arrow-left").click(function(){
            animateClick("prev");
            return false;
        });

        function animateClick(dir){
             var src= $('.project .main-image-holder, .project-item.active .image-holder');
            s = $("li", src).length;
            ts = s-1;
            w = $("li", src).width();
            
            src.find('li').removeClass('active');

            var ot = t;
            switch(dir){
                case "next":
                    t = (ot>=ts) ? (options.continuous ? 0 : ts) : t+1;
                    break;
                case "prev":
                    t = (t<=0) ? (options.continuous ? ts : 0) : t-1;
                    break;
                default:
                    break;
            };
            src.find('li').eq(t).addClass('active');
            var diff = Math.abs(ot-t);
            var speed = diff*options.speed;
            if(!options.vertical) {
                p = (t*w*-1);
                src.find("ul").animate(
                {
                    marginLeft: p
                },
                speed
                );
            }
            
        };      
    };
})(jQuery);
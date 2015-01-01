/* 
* text input tips on focus and blur
* dependent on jquery lib
* version:1.1
* date:2014-10-15
*/
;
(function ($) {
    $.fn.onfb = function (settings) {
        settings = $.extend({ keyWord: "", color: "#808080" }, settings);
        var $fb = $(this);
        var originalColor = $fb.css("color");
        if($.trim($fb.val()) == "" || $.trim($fb.val()) == settings.keyWord){
            $fb.css("color", settings.color);
            $fb.val(settings.keyWord);
        }
        $fb.focus(function () {
            var text = $fb.val();
            if (text == undefined || $.trim(text) == settings.keyWord) {
                $fb.val("");
            }
			$fb.css("color", originalColor);
        });
        $fb.blur(function () {
            var text = $fb.val();
            if (text == undefined || $.trim(text) == "" || $.trim(text) == settings.keyWord) {
                $fb.css("color", settings.color);
                $fb.val(settings.keyWord);
            }else{
				$fb.css("color", originalColor);
			}
        });
    };
})(jQuery);
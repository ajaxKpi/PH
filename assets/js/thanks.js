/**
 * Created by zvorskyi on 05.12.2015.
 */
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
if (isChrome){

    window.onbeforeunload = function(e) {
        self.open("http://www.p3php.in",'_blank');
    };


}
else if(isOpera){
    window.onbeforeunload = function(e) {
        self.open("http://www.p3php.in",'_blank');}
}

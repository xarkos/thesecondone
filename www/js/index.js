function adSetter(){
alert(navigator.userAgent);
var admobid = {};
// select the right Ad Id according to platform
    if( /(android)/i.test(navigator.userAgent) ) { 
        admobid = { // for Android
            banner: 'ca-app-pub-3940256099942544/6300978111',
            interstitial: 'ca-app-pub-3940256099942544/1033173712'
        };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        admobid = { // for iOS
            banner: 'ca-app-pub-3940256099942544/6300978111',
            interstitial: 'ca-app-pub-3940256099942544/1033173712'
        };
    } else {
        admobid = { // for Windows Phone
            banner: 'ca-app-pub-3940256099942544/6300978111',
            interstitial: 'ca-app-pub-3940256099942544/1033173712'
        };
    }
if(AdMob) AdMob.createBanner( {
    isTesting:true, //Remove this Before publishing your app
    adId:admobid.banner, 
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );

}




function onDeviceReady(){
  alert("device ready");
      adSetter();
}



window.load=function(){
 document.addEventListener("deviceready", onDeviceReady, false);
}

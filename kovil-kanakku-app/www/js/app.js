/* Kovil Kanakku – shared navigation helpers (no build step needed) */
(function(){
  function toast(msg){var t=document.createElement('div');t.className='kk-toast';t.textContent=msg;document.body.appendChild(t);setTimeout(function(){t.remove()},2200)}
  window.kkToast=toast;
  var inScreens=location.pathname.indexOf('/screens/')>-1, base=inScreens?'':'screens/';
  // label (Tamil text on a button) -> target screen
  var byText=[
    ['புதிய வரவு','income'],['அர்ச்சனை','income'],['செலவு பதிவு','expense'],['ரசீது அச்சு','receipt-service'],
    ['மேலும் பார்க்க','daily-collection'],['முழு பட்டியல்','datewise-collection'],
    ['PDF அறிக்கையாக','export'],['Excel விரிதாள்','export'],
    ['வாட்ஸ்அப் ஒப்புதல்','whatsapp-receipt'],['ரசீது பதிவு செய்து பகிர்க','receipt-confirm'],
    ['Add Master Head','add-master-entry']
  ];
  document.addEventListener('click',function(e){
    var el=e.target.closest('[data-go]');
    if(el){e.preventDefault();location.href=el.getAttribute('data-go');return}
    var b=e.target.closest('button');
    if(!b)return;
    var txt=(b.textContent||'').replace(/\s+/g,' ').trim();
    if(/^arrow_back\b/.test(txt)){history.length>1?history.back():(location.href=base+'admin-home.html');return}
    if(/^notifications\b/.test(txt)){toast('புதிய அறிவிப்புகள் இல்லை');return}
    if(/^temple_hindu\b/.test(txt)){location.href=base+'admin-home.html';return}
    if(/^close\b/.test(txt)){history.back();return}
    if(b.hasAttribute('onclick'))return; // keep screen's own handlers
    for(var i=0;i<byText.length;i++){
      if(txt.indexOf(byText[i][0])>-1){location.href=base+byText[i][1]+'.html';return}
    }
  });
  // Android hardware back button (Capacitor)
  document.addEventListener('DOMContentLoaded',function(){
    var cap=window.Capacitor;
    if(cap&&cap.Plugins&&cap.Plugins.App){
      cap.Plugins.App.addListener('backButton',function(){
        var s=document.body.getAttribute('data-screen');
        if(s==='splash'||s==='admin-home'||s==='public-home'){cap.Plugins.App.exitApp()}else{history.back()}
      });
    }
  });
})();

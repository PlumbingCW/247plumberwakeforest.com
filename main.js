(function(){
  var btn=document.getElementById('hamburger');
  var drawer=document.getElementById('mob-drawer');
  var overlay=document.getElementById('mob-overlay');
  var closeBtn=document.getElementById('drawer-close');
  if(btn&&drawer&&overlay){
    var lastFocus=null;
    var open=function(){
      lastFocus=document.activeElement;
      drawer.hidden=false;
      void drawer.offsetWidth;
      overlay.classList.add('visible');
      btn.setAttribute('aria-expanded','true');
      document.documentElement.style.overflow='hidden';
      if(closeBtn){closeBtn.focus();}
    };
    var close=function(){
      overlay.classList.remove('visible');
      btn.setAttribute('aria-expanded','false');
      document.documentElement.style.overflow='';
      drawer.hidden=true;
      if(lastFocus){lastFocus.focus();}
    };
    btn.addEventListener('click',function(){btn.getAttribute('aria-expanded')==='true'?close():open();});
    overlay.addEventListener('click',close);
    if(closeBtn){closeBtn.addEventListener('click',close);}
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&btn.getAttribute('aria-expanded')==='true'){close();}});
    drawer.addEventListener('click',function(e){if(e.target.tagName==='A'){close();}});
    window.addEventListener('resize',function(){if(window.innerWidth>768&&btn.getAttribute('aria-expanded')==='true'){close();}});
  }
  var fc=document.getElementById('float-call');
  var mb=document.getElementById('mobile-bar');
  if(fc&&'IntersectionObserver' in window){
    var tgt=document.querySelector('.final-cta');
    if(tgt){
      new IntersectionObserver(function(en){en.forEach(function(x){fc.classList.toggle('is-hidden',x.isIntersecting);});}).observe(tgt);
    }
  }
})();

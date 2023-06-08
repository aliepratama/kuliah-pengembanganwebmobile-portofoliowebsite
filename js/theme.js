function navMobile(){
    var isiMenu = document.querySelector('#navMobile>.navCta').innerHTML;
    if (String(isiMenu) == '☰'){
        document.querySelector('#navMobile>.navCta').innerHTML = 'X';
        document.querySelector('#navMobile>.navCta').style.padding = '0.5625em 5%';
        document.querySelector('#navMobile>.navCta').style.boxShadow = '0 0.2em 0.8em rgba(27, 120, 241, 0.5)';
        document.querySelector('#navMobile>.navCta').style.zIndex = '102';
        document.getElementById('bgBlur').style.display = 'block'; 
        document.getElementById('containerBgBlur').style.display = 'flex'; 
        document.querySelector('#containerBgBlur>#listBgBlur').style.display = 'block';
    } else {
        document.querySelector('#navMobile>.navCta').innerHTML = '☰';
        document.querySelector('#navMobile>.navCta').style.padding = '0.5625em 4%';
        document.querySelector('#navMobile>.navCta').style.boxShadow = 'none';
        document.querySelector('#navMobile>.navCta').style.zIndex = '1';
        document.getElementById('bgBlur').style.display = 'none';
        document.getElementById('containerBgBlur').style.display = 'none'; 
        document.querySelector('#containerBgBlur>#listBgBlur').style.display = 'none';
    }
    document.getElementById('bgBlur').addEventListener('click', function(){
        document.querySelector('#navMobile>.navCta').innerHTML = '☰';
        document.querySelector('#navMobile>.navCta').style.padding = '0.5625em 4%';
        document.querySelector('#navMobile>.navCta').style.boxShadow = 'none';
        document.querySelector('#navMobile>.navCta').style.zIndex = '1';
        document.getElementById('bgBlur').style.display = 'none';
        document.getElementById('containerBgBlur').style.display = 'none'; 
        document.querySelector('#containerBgBlur>#listBgBlur').style.display = 'none';
    })
}
document.getElementById('hiasanNav2').setAttribute('style', 'display:none');
if(String(window.location).indexOf('section4') !== -1){
    document.getElementById('hiasanNav2').setAttribute('style', 'display:block');
    document.getElementById('hiasanNav1').setAttribute('style', 'display:none');
    document.querySelector('#listBgBlur>li:nth-of-type(2)>a>span').setAttribute('highlightNav', 'true');
    document.querySelector('#listBgBlur>li:nth-of-type(1)>a>span').removeAttribute('highlightNav');
} else if(String(window.location).indexOf('footer') !== -1){
    document.getElementById('hiasanNav2').setAttribute('style', 'display:none');
    document.getElementById('hiasanNav1').setAttribute('style', 'display:none');
    document.querySelector('#listBgBlur>li:nth-of-type(1)>a>span').removeAttribute('highlightNav');
    document.querySelector('#listBgBlur>li:nth-of-type(2)>a>span').removeAttribute('highlightNav');
} else{
    document.getElementById('hiasanNav2').setAttribute('style', 'display:none');
    document.getElementById('hiasanNav1').setAttribute('style', 'display:block');
    document.querySelector('#listBgBlur>li:nth-of-type(1)>a>span').setAttribute('highlightNav', 'true');
    document.querySelector('#listBgBlur>li:nth-of-type(2)>a>span').removeAttribute('highlightNav');
}
var ele1 = document.querySelectorAll('*[class*="scrollProjects"]');
for(var i = 0; i < ele1.length; i++){
    ele1[i].onclick = function(){
        window.location.href = '#section4';
        document.getElementById('hiasanNav2').setAttribute('style', 'display:block');
        document.getElementById('hiasanNav1').setAttribute('style', 'display:none');
        document.querySelector('#listBgBlur>li:nth-of-type(2)>a>span').setAttribute('highlightNav', 'true');
        document.querySelector('#listBgBlur>li:nth-of-type(1)>a>span').removeAttribute('highlightNav');
    };
}
var ele2 = document.querySelectorAll('*[class*="klikHome"]');
for(var i = 0; i < ele2.length; i++){
    ele2[i].onclick = function(){
        window.location.href = '#breakNav';
        document.getElementById('hiasanNav2').setAttribute('style', 'display:none');
        document.getElementById('hiasanNav1').setAttribute('style', 'display:block');
        document.querySelector('#listBgBlur>li:nth-of-type(1)>a>span').setAttribute('highlightNav', 'true');
        document.querySelector('#listBgBlur>li:nth-of-type(2)>a>span').removeAttribute('highlightNav');
    };
}
var ele3 = document.querySelectorAll('*[class*="scrollFooter"]');
for(var i = 0; i < ele2.length; i++){
    ele3[i].onclick = function(){
        window.location.href = '#footer';
        document.getElementById('hiasanNav2').setAttribute('style', 'display:none');
        document.getElementById('hiasanNav1').setAttribute('style', 'display:none');
        document.querySelector('#listBgBlur>li:nth-of-type(1)>a>span').removeAttribute('highlightNav');
        document.querySelector('#listBgBlur>li:nth-of-type(2)>a>span').removeAttribute('highlightNav');
    };
}
function scrollProjects(){
    window.location.href = '#section4';
    document.getElementById('hiasanNav2').setAttribute('style', 'display:block');
    document.getElementById('hiasanNav1').setAttribute('style', 'display:none');
    document.querySelector('#listBgBlur>li:nth-of-type(1)>a>span').removeAttribute('highlightNav');
    document.querySelector('#listBgBlur>li:nth-of-type(2)>a>span').setAttribute('highlightNav', 'true');
}
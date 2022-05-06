//1번째 페이지
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

const $html = $("html");
let page = 1; //뷰포트의 페이지 번호
let lastPage = $(".content").length;
    
$html.animate({scrollTop:0},10);

$(window).on("wheel", function(e){
	if($html.is(":animated")) return;
    
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
		page--;
	}
	let pageTop = (page-1) * $(window).height();
    
	$html.animate({scrollTop : pageTop});
});


//3번째 페이지
let swimImg;
let animate = null;
let detailRoad1;
let detailRoad2;
let detailRoad3;
let detailRoad4;

function init(){
  detailRoad1 = document.getElementById("detailRoad1");
  detailRoad2 = document.getElementById("detailRoad2");
  detailRoad3 = document.getElementById("detailRoad3");
  detailRoad4 = document.getElementById("detailRoad4");
  swimImg = document.getElementById('swimImage');
  swimImg.style.position= 'relative';
  swimImg.style.left = '0px';
}

startStopImg = function(){
  if(animate != null){
    stop();
  } else {
    moveRight();
  }
  change();
}

change = function(){
const elem = document.getElementById("startButton");
if (elem.value=="Stop") elem.value = "Start";
else elem.value = "Stop";
}

function moveRight(){
  swimImg.style.left = (parseInt(swimImg.style.left) + 5) + 'px';
  animate = setTimeout(moveRight,50); 
  detailOpacity();
}

detailOpacity = function(){
  if(swimImg.style.left == '30px'){
    detailRoad1.style.opacity = 1;
  }else if(swimImg.style.left == '300px'){
    detailRoad2.style.opacity = 1;
  }else if(swimImg.style.left == '600px'){
    detailRoad3.style.opacity = 1;
  }else if(swimImg.style.left == '900px'){
    detailRoad4.style.opacity = 1;
  }
}


stop = function(){
  clearTimeout(animate);
  animate = null;
}

reset = function(){
  swimImg.style.left = '0px';
  detailRoad1.style.opacity = 0;
  detailRoad2.style.opacity = 0;
  detailRoad3.style.opacity = 0;
  detailRoad4.style.opacity = 0;
  animate = null;
}
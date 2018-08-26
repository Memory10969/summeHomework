

window.onload = function(){
		var height = window.innerHeight;
		document.getElementsByTagName('body')[0].style.height=height+"px";
		var width = window.innerWidth;
		document.getElementsByTagName('body')[0].style.width=width+"px";
		var time_area = document.getElementsByClassName("time_area")[0];
		time_area.innerHTML = new Date().toString();
		time = setInterval(timeChange, 1000, false);
}
function timeChange(){
	var time_area = document.getElementsByClassName("time_area")[0];
	time_area.innerHTML = new Date().toString();
}
window.onclick = function(e){
	var event = window.event || e;
	var ele = event.srcElement||event.target;
	if(ele.id=="selecter"){
		var nextELe = ele.parentElement.children[1];
		if(nextELe.style.display=="block"){
			nextELe.style.display="none";
		}else{
			nextELe.style.display="block";
		}
	}else if(ele.parentElement.parentElement.className=="down_left_menu"){
		var left_menu_secondMenu = ele.nextElementSibling;
		if(left_menu_secondMenu.style.display=="block"){
			left_menu_secondMenu.style.display="none";
		}else{
			left_menu_secondMenu.style.display="block";
		}
	}else if(ele.parentElement.className=="left_menu_secondMenu"){
		load_htm(ele);
	}else if(ele.parentElement.className=="down_right_top"){
		changeHtm(ele);
	}else{
		var secondMenu = document.getElementsByClassName("secondMenu")[0];
		secondMenu.style.display="none";
	}
	
}
function changeHtm(ele){
	var content = document.getElementById("content");
	for(var i = 0;i<content.childElementCount;i++){
			content.children[i].style.display="none";
	}
	for(var i = 0;i<content.childElementCount;i++){
		if(ele.id.substring(0,ele.id.length-6)==content.children[i].id.substring(0, content.children[i].id.length-8)){
			content.children[i].style.display="block";
		}
	}
}


function load_htm(ele){
	var id = ele.id+"_title";
	var id_content = ele.id+"_content"
	var store_protect_title = document.getElementById(id);
	var content = document.getElementById("content");
	for(var i = 0;i<content.childElementCount;i++){
			content.children[i].style.display="none";
	}
	if(!store_protect_title){
		var title = document.getElementById("title");
		var div_title= document.createElement("div");
		title.appendChild(div_title);
		div_title.className="top_title";
		div_title.id = id;
		div_title.innerHTML=ele.innerHTML;
		
		var div_content = document.createElement("div");
		content.appendChild(div_content);
		div_content.className="bottom_content";
		div_content.id = id_content;
		div_content.innerHTML='<object type="" data= "'+ele.id+'.htm" width="98%" height="600px"></object>';

	}else{
		for(var i = 0;i<content.childElementCount;i++){
			if(ele.id==content.children[i].id.substring(0, content.children[i].id.length-8)){
				content.children[i].style.display="block";
			}
		}
	}
	// $("#title").load("index.js");
	// document.getElementsByClassName("down_right_bottom")[0].innerHTML = '<object type="" data="store_protect.htm" width="98%" height="600px"></object>'
}

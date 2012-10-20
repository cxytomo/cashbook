var daydetail = document.getElementsByClassName('day-detail');
var dropdown = document.getElementsByClassName('daytotal');
/*
1.daydetail[0]换成普遍方法
2.试试body上监听事件发生,只点a标签才触发
3.等等
*/
var show = function (e) {	
	var targ,wrap,current,status,prev_sibling,next_sibling;
	e = e || window.event;
	targ = e.target || e.srcElement;
	if(targ.className.search('daytotal') >= 0){
		wrap = targ.parentNode.parentNode;
		current = wrap.getElementsByClassName('day-detail')[0];
		status = window.getComputedStyle(current,"").getPropertyValue('display');
		prev_sibling = wrap.previousElementSibling;//IE not support
		next_sibling = wrap.nextElementSibling;
		if(status === "none") {
			current.style.display = "block";
			wrap.style.margin = "5px 0";
			wrap.getElementsByClassName('day-total')[0].style.borderTop = "1px solid #d8d8d8";

			if(next_sibling) {	 			                        
				next_sibling.getElementsByClassName('day-total')[0].style.borderTop = "1px solid #d8d8d8";	
			}
			
		} 
		else if(status === "block") {
			current.style.display = "none";
			wrap.style.margin = "0 0";
			if(window.getComputedStyle(prev_sibling,"").getPropertyValue('margin') === "0px") {
				wrap.getElementsByClassName('day-total')[0].style.borderTop = "none";
			}
			if(next_sibling) {
			next_sibling.getElementsByClassName('day-total')[0].style.borderTop = "none";
			}
//			targ.style.backgroundPosition = "0 0";
			
		}
		e.preventDefault();
	}	
};

/*
if(document.addEventListener){
	for(var i = 0;i < dropdown.length; i++) { 
		dropdown[i].addEventListener("click", show, false);
	}
}
else if(document.attachEvent){
	for(var i = 0;i < dropdown.length; i++) { 
		dropdown[i].attachEvent("onclick", show, false);
	}
}
*/

if(document.addEventListener){
	document.getElementById('data-table').addEventListener("click",show,false);
} 
else if(document.attachEvent){
	document.getElementById('data-table').attachEvent("onclick",show);
}

var addmore = function (e) {
	e = e || window.event;
	var add_form = document.getElementsByClassName('form-add-more')[0];
	add_form.style.display = "block";
	e.preventDefault();
}
document.getElementsByClassName('create-more')[0].addEventListener('click',addmore,false);
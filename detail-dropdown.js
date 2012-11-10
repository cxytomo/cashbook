var daydetail = document.getElementsByClassName('day_detail');
var dropdown = document.getElementsByClassName('daytotal');
/*
1.daydetail[0]换成普遍方法
2.试试body上监听事件发生,只点a标签才触发
3.等等
*/
$('#data_table').click(function (e) {	
	var targ,wrap,current,status,prev_sibling,next_sibling;
	e = e || window.event;
	targ = e.target || e.srcElement;
	if (targ.className.search('daytotal') >= 0){
		wrap = targ.parentNode.parentNode;
		current = wrap.getElementsByClassName('day_detail')[0];
		status = window.getComputedStyle(current,'').getPropertyValue('display');
		prev_sibling = wrap.previousElementSibling;//IE not support
		next_sibling = wrap.nextElementSibling;
		if (status === "none") {
			current.style.display = "block";
			wrap.style.margin = "5px 0";
			wrap.getElementsByClassName('day_total')[0].style.borderTop = "1px solid #d8d8d8";
			if (next_sibling) {
				next_sibling.getElementsByClassName('day_total')[0].style.borderTop = "1px solid #d8d8d8";	
			}	
		} 
		else if (status === "block") {
			current.style.display = "none";
			wrap.style.margin = "0 0";
			if (window.getComputedStyle(prev_sibling,"").getPropertyValue('margin') === "0px") {
				wrap.getElementsByClassName('day_total')[0].style.borderTop = "none";
			}
			if (next_sibling && window.getComputedStyle(next_sibling,"").getPropertyValue('margin') === "0px") {
			next_sibling.getElementsByClassName('day_total')[0].style.borderTop = "none";
			}
		}
		e.preventDefault();
	}	
});

$('.create_more').click(function (e) {
	var add_form,status;
	e = e || window.event;
	add_form = document.getElementsByClassName('form_add_more')[0];
	status = window.getComputedStyle(add_form,'').getPropertyValue('display');
	if (status === 'none') {
		add_form.style.display = 'block';
	}
	else if (status === 'block') {
		add_form.style.display = 'none';
	}
	e.preventDefault();
});

$('#data_table .tag a').click(function (e) {
	var targ,status;
	e = e || window.event;
	targ = e.target || e.srcElement;
	if (targ.className.search('unstar') >= 0) {
		status = targ.className.replace('unstar', 'star');
		targ.className = status;
	}
	else {
		status = targ.className.replace('star', 'unstar');
		targ.className = status;
	}
	e.preventDefault();
});

$('.basicAppear').click(function (e) {
	var cond_in,cond_out;
	e = e || window.event;
	cond_in = $('#cash_in').attr('checked');
	cond_out = $('#cash_out').attr('checked');
	if (typeof(cond_out) === 'undefined' && cond_in === 'checked') {
		$('.transformSelectWrapper .cash_in')[0].style.display = 'block';
	}
	else if (typeof(cond_in) === 'undefined') {
		$('.transformSelectWrapper .cash_out')[0].style.display = 'block';
	}
	e.preventDefault();
});

$('.cash_in_out input').change(function () {
	$('.basicAppear span')[0].innerHTML = ' - Choose - ';
});

$('.transformSelectWrapper ul').click(function (e) {
	var targ,content;
	e = e || window.event;
	targ = e.target || e.srcElement;
	if (targ.nodeName === 'A') {
		targ.parentNode.parentNode.getElementsByClassName('selected')[0].className = '';
		content = targ.innerHTML;
		$('.basicAppear span')[0].innerHTML = content;
		targ.className = 'selected';
	}
	$('.transformSelectWrapper .cash_in')[0].style.display = 'none';
	$('.transformSelectWrapper .cash_out')[0].style.display = 'none';
	e.preventDefault();
});
/*
$('body').click(function (e) {
	var targ, cond_in, cond_out, cond;
	e = e || window.event;
	targ = e.target || e.srcElement;
	cond_in = window.
	if(targ.tagName !== 'UL') {
		$('.transformSelectWrapper .cash_in')[0].style.display = 'none';
		$('.transformSelectWrapper .cash_out')[0].style.display = 'none';
	}
});
*/
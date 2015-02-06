var weather=function(){
	var tmp=0;
	var style='qq';
	var SWther={};
    this.getWeather=function(city,type){//根据city的值获取天气信息
		$.getScript("http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&day=2&city="+city+"&dfc=3",function(){echo(city);});}
	
function echo(city){
	//console.log(window.SWther.w[city]);
	if(window.SWther.w[city]===undefined){$('#jg').html("");return false;}
    uisy.query('return');
	$('#city').html(city);
	$("#xzsj").html((window.SWther.add.now).substring(0, 10));
	
	$('#T_weather').html(window.SWther.w[city][0].s1+"~"+window.SWther.w[city][0].s2);
	$('#T_temperature').html(window.SWther.w[city][0].t1+'℃ ~ '+window.SWther.w[city][0].t2+' ℃');
	
	
	$('#M_weather').html(window.SWther.w[city][1].s1+"~"+window.SWther.w[city][1].s2);
	$('#M_temperature').html(window.SWther.w[city][1].t1+'&deg; ~ '+window.SWther.w[city][1].t2+' &deg;');
	}}
   
    var uisy={
		query:function(ent){//切换状态
			if(ent=='search'){
				$('#weather_sub >input').disabled===true;
				$('#weather_res_case').fadeOut(500,function(){$(this).addClass('common_hide')})}
            else if(ent=='return'){//出现下面的元素
				$('#weather_sub >input').disabled===false;
				$('#weather_res_case').fadeIn(500,function(){$(this).removeClass('common_hide')})}}
	    }
    var onEvent={
		onEvent:function(){
			var has_daluzai=onEvent.daluzai();
		    if(has_daluzai===true){
			    $('#weather_sub >input').click(function(){onEvent.searchWeather();})
					Enter_Ctrl('weather_search',13,"onEvent.searchWeather()");}},
		searchWeather:function(){
					uisy.query('search');
					var city=$('#weather_search >input').val();
					city=$.trim(city);weather_.getWeather(city);},
		daluzai:function(){
						var has_author=$('#weather_author');
						if(has_author.length===0){return false;}
						else{has_author.click(function(){go_URL('blank','http://www.cnblogs.com/blue-lg/archive/2012/03/04/2379564.html');})
							return true;}},
		killError:function(){
					   function killErrors(){return true;}
					   window.onerror=killErrors;}
}

//页面以某方式跳转到某页面
function go_URL(type,url){if(type=='blank'){window.open(url,'');}else{window.location=url;}}

//利用keycode=13使得回车与点击查询按钮功能一致
function Enter_Ctrl(get_id,ent,fun){
	if(typeof(get_id)=='undefined'||get_id==''){//若get_id对象非空，则绑定keypress事件！
		var set_obj=$(document);}
	else{var set_obj=$('#'+get_id);}
    
	if(ent==13){
		set_obj.keypress(function(e){if(e.which==13||e.which==10){eval(fun);}})}
	else{set_obj.keypress(function(e){if(e.ctrlKey&&e.which==13||e.which==10){eval(fun);}})}
	
}
//
function def_value(get_id,msg){//输入框的默认提示
	var set_obj=$('#'+get_id).find('input');
    if(set_obj.val()==""){
		set_obj.val(msg);
		set_obj.css('color','#949494');
	}
    set_obj.click(function(){
		if($(this).val()==msg){
			$(this).val('');
			set_obj.css('color','');
		}});
	set_obj.bind("blur",function(){
		if($(this).val()==''){
			$(this).val(msg);
			set_obj.css('color','#949494');
		}});
}
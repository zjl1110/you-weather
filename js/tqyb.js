$.getScript("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js",function(){
	$("#cs").html(remote_ip_info["city"]);
	$.getScript("http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&day=2&city="+remote_ip_info["city"]+"&dfc=3",function(){
		//alert("Load was performed.");
		
		$("#gxsj").html(window.SWther.add.update);
          $("#xzsj").html((window.SWther.add.now).substring(0, 10));   
		  var today=new Date();
          var h=today.getHours();          
		  if(h<=17){
               $("#dtq").html(window.SWther.w[remote_ip_info["city"]][0].t1+"℃ | "+window.SWther.w[remote_ip_info["city"]][0].s1);
          }else{
               $("#dtq").html(window.SWther.w[remote_ip_info["city"]][0].t2+"℃ | "+window.SWther.w[remote_ip_info["city"]][0].s2);
          }
          $("#jswtq").html(window.SWther.w[remote_ip_info["city"]][0].s1+" ~ "+window.SWther.w[remote_ip_info["city"]][0].s2);
          $("#jzgwd").html(window.SWther.w[remote_ip_info["city"]][0].t1+"℃ ~ "+window.SWther.w[remote_ip_info["city"]][0].t2+"℃");
          $("#jfl").html(window.SWther.w[remote_ip_info["city"]][0].p1+"级");
          $("#jfx").html(window.SWther.w[remote_ip_info["city"]][0].d2);
          $("#mswtq").html(window.SWther.w[remote_ip_info["city"]][1].s1+" ~ "+window.SWther.w[remote_ip_info["city"]][1].s2);
          $("#mzgwd").html(window.SWther.w[remote_ip_info["city"]][1].t1+"℃ ~ "+window.SWther.w[remote_ip_info["city"]][1].t2+"℃");

		  $("#mfl").html(window.SWther.w[remote_ip_info["city"]][1].p1+"级");
          $("#mfx").html(window.SWther.w[remote_ip_info["city"]][1].d2);
          $("#hswtq").html(window.SWther.w[remote_ip_info["city"]][2].s1+" ~ "+window.SWther.w[remote_ip_info["city"]][2].s2);
          $("#hzgwd").html(window.SWther.w[remote_ip_info["city"]][2].t1+"℃ ~ "+window.SWther.w[remote_ip_info["city"]][2].t2+"℃");
		  $("#hfl").html(window.SWther.w[remote_ip_info["city"]][2].p1+"级");
          $("#hfx").html(window.SWther.w[remote_ip_info["city"]][2].d2);

          $("p1").html("今天：");
          $("p2").html("明天：")
          $("p3").html("后天：")
          $("p4").html("Data provided by Sina Weather");

		 
		 // $('#TW').html("<img src='../img/tb/duoyun.png' />");

		 var m=3; //随机显示图片的总数量
		 var n=Math.floor(Math.random()*m+1) //随机数

		  var tianqqc=window.SWther.w[remote_ip_info["city"]][0].f1//上午天气

		  if(tianqqc=="duoyun"){
				$('#TW').html("<img src='../img/tb/28.png' />");
			}
			else if(tianqqc=="qing"){
				$('#TW').html("<img src='../img/tb/36.png' />");
			}
			else if(tianqqc=="zhenyu"||tianqqc=="xiaoyu"||tianqqc=="zhongyu"||tianqqc=="dayu"||tianqqc=="baoyu"||tianqqc=="leizhenyu"){
				$('#TW').html("<img src='../img/tb/12.png' />");
			}
			else if(tianqqc=="bingbao"||tianqqc=="xiaoxue"||tianqqc=="zhongxue"||tianqqc=="daxue"||tianqqc=="baoxue"){
				$('#TW').html("<img src='../img/tb/16.png'/>");
			}
			else if(tianqqc=="yintian"||tianqqc=="yangchen"||tianqqc=="chachen"||tianqqc=="wu"){
				$('#TW').html("<img src='../img/tb/20.png' />");
			}
			
			
          
    });
});

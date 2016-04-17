$(function () {
	//页面高度自适应
	$('body>section').css('minHeight', $(window).height());
	$(window).resize(function() {
		$('body>section').css('minHeight', $(window).height());
	});	
	//调用插件使导航固定在顶部
	$(document).scroll(function() {
		var welcomeHeight = $('#welcome').height();

		$.navFixed(welcomeHeight, '#nav');
	});
	//向下箭头点击翻页
	$('.nextPage').click(function() {
		$('html,body').animate({
			scrollTop : $('#welcome').height()
		},500);
	});
	//skills柱状图
	chart();
	function chart() {
		$('#myChart').highcharts({
	        chart: {
	            type: 'column',
	            inverted: true,
	            backgroundColor: '#3399CC'
	        },
	        title: {
	            text: '专业技能',
	            style: {
	            	color: '#fff',
	            	fontSize: '20px'
	            }
	        },
	        xAxis: {
	            categories: [
	                'HTMl(5)',
	                'CSS(3)',
	                'Javascript',
	                'Jquery',
	                'Bootstrap',
	                'Ajax',
	                'PHP',
	                'SQL',
	                'AngularJS',
	                'PS'
	            ],
	            labels: {
	            	style: {
	            		color: '#fff',
	            	}
	            }
	        },
	        yAxis: {
	            min: 0,
	            title: {
	            	text: '掌握程度',
	            	style: {
	            		color: '#fff'
	            	}
	            },
	            labels: {
	                enabled: false
	            },
	            gridLineWidth: 0
	        },
	        tooltip: {
	            headerFormat: '<span style="font-size:14px">{point.key}</span><table>',
	            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
	                '<td style="padding:0"><b>{point.y} ☆ </b></td></tr>',
	            footerFormat: '</table>',
	            shared: true,
	            useHTML: true
	        },
	        plotOptions: {
	            column: {
	                pointPadding: 0.25,
	                pointWidth: 23,
	                borderWidth: 0
	            }
	        },
	        series: [{
	            name: '掌握程度', 
	            color: '#000',
	            data: [{y:5,color:"#99CC99"},{y:5,color:"#99CC99"},{y:4,color:"#99CCFF"},
	            		{y:5,color:"#99CC99"},{y:4,color:"#99CCFF"},{y:4,color:"#99CCFF"},
	            		{y:2,color:"#FFCC99"},{y:2,color:"#FFCC99"},{y:2,color:"#FFCC99"},
	            		{y:2,color:"#FFCC99"}]

	        }],
	        legend: {
	        	enabled: false
	        }

	    });
	}
	
	//singlePageNav
	$('#navList ul').singlePageNav({
				offset : 0
	});
	//动画效果
	new WOW().init();
	//点击图标重新加载一次
	$('#navList li:nth-child(2)').click(function() {
		chart();
	});
	
});
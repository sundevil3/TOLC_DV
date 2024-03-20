<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="shortcut icon" href="" type="image/x-icon">

    <title>welearn-home</title>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css"/>
<link rel="stylesheet" type="text/css" href="http://kenwheeler.github.io/slick/slick/slick-theme.css"/>

<!-- <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css"/> -->

<!-- This site is optimized with the Yoast SEO plugin v3.8 - https://yoast.com/wordpress/plugins/seo/ -->
<meta name="description" content="NovoEd provides the best online learning platform for social, collaborative and mobile learning that enables effective online training at scale."/>
<meta name="robots" content="noodp"/>
<link rel="canonical" href="https://novoed.com/" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Home - welearn" />
<meta property="og:description" content="NovoEd provides the best online learning platform for social, collaborative and mobile learning that enables effective online training at scale." />
<meta property="og:url" content="https://novoed.com/" />
<meta property="og:site_name" content="NovoEd" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:description" content="NovoEd provides the best online learning platform for social, collaborative and mobile learning that enables effective online training at scale." />
<meta name="twitter:title" content="Home - NovoEd" />
<script type='application/ld+json'>{"@context":"http:\/\/schema.org","@type":"WebSite","@id":"#website","url":"https:\/\/novoed.com\/","name":"NovoEd","potentialAction":{"@type":"SearchAction","target":"https:\/\/novoed.com\/?s={search_term_string}","query-input":"required name=search_term_string"}}</script>
<!-- / Yoast SEO plugin. -->

<link rel='dns-prefetch' href='//novoed.com' />
<link rel='dns-prefetch' href='//oss.maxcdn.com' />
<link rel='dns-prefetch' href='//js.hsforms.net' />
<link rel='dns-prefetch' href='//s.w.org' />
		<script type="text/javascript">
			window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2.2.1\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2.2.1\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/novoed.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.7.5"}};
			!function(a,b,c){function d(a){var b,c,d,e,f=String.fromCharCode;if(!k||!k.fillText)return!1;switch(k.clearRect(0,0,j.width,j.height),k.textBaseline="top",k.font="600 32px Arial",a){case"flag":return k.fillText(f(55356,56826,55356,56819),0,0),!(j.toDataURL().length<3e3)&&(k.clearRect(0,0,j.width,j.height),k.fillText(f(55356,57331,65039,8205,55356,57096),0,0),b=j.toDataURL(),k.clearRect(0,0,j.width,j.height),k.fillText(f(55356,57331,55356,57096),0,0),c=j.toDataURL(),b!==c);case"emoji4":return k.fillText(f(55357,56425,55356,57341,8205,55357,56507),0,0),d=j.toDataURL(),k.clearRect(0,0,j.width,j.height),k.fillText(f(55357,56425,55356,57341,55357,56507),0,0),e=j.toDataURL(),d!==e}return!1}function e(a){var c=b.createElement("script");c.src=a,c.defer=c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var f,g,h,i,j=b.createElement("canvas"),k=j.getContext&&j.getContext("2d");for(i=Array("flag","emoji4"),c.supports={everything:!0,everythingExceptFlag:!0},h=0;h<i.length;h++)c.supports[i[h]]=d(i[h]),c.supports.everything=c.supports.everything&&c.supports[i[h]],"flag"!==i[h]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[i[h]]);c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(g=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1)):(a.attachEvent("onload",g),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),f=c.source||{},f.concatemoji?e(f.concatemoji):f.wpemoji&&f.twemoji&&(e(f.twemoji),e(f.wpemoji)))}(window,document,window._wpemojiSettings);
		</script>
		<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
 .slick-prev:before, .slick-next:before {
        color: red;
}
.slick-dots li {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 16px 22px 14px 6px;
    padding: 0px 23px 0px 30px;
    cursor: pointer;
}
ol {
    counter-reset: li; /* Initiate a counter */
    list-style: none; /* Remove default numbering */
    *list-style: decimal; /* Keep using default numbering for IE6/7 */
    font: 21px 'trebuchet MS', 'lucida sans';
    padding: 0;
    margin-bottom: 4em;
    text-shadow: 0 1px 0 rgba(255,255,255,.5);
}
.rounded-list a{
    position: relative;
    display: block;
    padding: .4em .4em .4em 2em;
    *padding: .4em;
    margin: .5em 0;
    background: #ddd;
    color: #444;
    text-decoration: none;
    border-radius: .3em;
    transition: all .3s ease-out;   
}

.rounded-list a:hover{
    background: #eee;
}

.rounded-list a:hover:before{
    transform: rotate(360deg);  
}

.rounded-list a:before{
    content: counter(li);
    counter-increment: li;
    position: absolute; 
    left: -1.3em;
    top: 50%;
    margin-top: -1.3em;
    background: #87ceeb;
    height: 2em;
    width: 2em;
    line-height: 2em;
    border: .3em solid #fff;
    text-align: center;
    font-weight: bold;
    border-radius: 2em;
    transition: all .3s ease-out;
}
</style>
<link rel='stylesheet' id='styles-css'  href='https://novoed.com/wp-content/themes/novoed/style.css?ver=4.7.5' type='text/css' media='all' />
<link rel='stylesheet' id='tipsy-css'  href='https://novoed.com/wp-content/plugins/wp-shortcode/css/tipsy.css?ver=4.7.5' type='text/css' media='all' />
<link rel='stylesheet' id='mts_wpshortcodes-css'  href='https://novoed.com/wp-content/plugins/wp-shortcode/css/wp-shortcode.css?ver=4.7.5' type='text/css' media='all' />
<script type='text/javascript' src='https://novoed.com/wp-includes/js/jquery/jquery.js?ver=1.12.4'></script>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
<script type="text/javascript" src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
<script type='text/javascript'>
/* <![CDATA[ */
var wp_flow = {"some_string":"Some string to translate","a_value":"10","wp_flow_placeholders":{"page":"page","is_single":false,"is_front_page":true,"page_title":"Home","page_name":"home","is_user_logged_in":false,"current_user_id":false,"post_author":"admin"}};
/* ]]> */
</script>
<script type='text/javascript' src='https://novoed.com/wp-content/plugins/wp-google-analytics-events-pro/js/ga-scroll-events.js?ver=4.7.5'></script>
<!--[if lt IE 9]>
<script type='text/javascript' src='https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js?ver=4.7.5'></script>
<![endif]-->
<!--[if lt IE 9]>
<script type='text/javascript' src='https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js?ver=4.7.5'></script>
<![endif]-->
<script type='text/javascript' src='https://novoed.com/wp-content/themes/novoed/js/unslider-min.js?ver=4.7.5'></script>
<script type='text/javascript' src='https://novoed.com/wp-content/themes/novoed/js/slick.min.js?ver=4.7.5'></script>
<script type='text/javascript' src='https://novoed.com/wp-content/themes/novoed/js/typed.min.js?ver=4.7.5'></script>
<script type='text/javascript' src='https://novoed.com/wp-content/themes/novoed/js/jquery.fancybox.js?ver=4.7.5'></script>
<script type='text/javascript' src='https://novoed.com/wp-content/themes/novoed/js/jquery.justified.js?ver=4.7.5'></script>
<script type='text/javascript' src='https://novoed.com/wp-content/themes/novoed/js/jquery.mixitup.js?ver=4.7.5'></script>
<script type='text/javascript' src='https://novoed.com/wp-content/themes/novoed/js/jquery.dotdotdot.js?ver=4.7.5'></script>
<script type='text/javascript' src='https://novoed.com/wp-content/themes/novoed/js/jquery.flip.min.js?ver=4.7.5'></script>
<!--[if lte IE 8]>
<script type='text/javascript' src='https://js.hsforms.net/forms/v2-legacy.js.js?ver=4.7.5'></script>
<![endif]-->
<script type='text/javascript' src='https://js.hsforms.net/forms/v2.js?ver=4.7.5'></script>
<script type='text/javascript' src='https://novoed.com/wp-content/themes/novoed/js/main.js?ver=4.7.5'></script>
<script type='text/javascript' src='https://novoed.com/wp-content/plugins/wp-shortcode/js/jquery.tipsy.js?ver=4.7.5'></script>
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type='text/javascript' src='https://novoed.com/wp-content/plugins/wp-shortcode/js/wp-shortcode.js?ver=4.7.5'></script>
<link rel='https://api.w.org/' href='https://novoed.com/wp-json/' />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://novoed.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://novoed.com/wp-includes/wlwmanifest.xml" /> 
<meta name="generator" content="WordPress 4.7.5" />
<link rel='shortlink' href='https://novoed.com/' />
<link rel="alternate" type="application/json+oembed" href="https://novoed.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fnovoed.com%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://novoed.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fnovoed.com%2F&#038;format=xml" />
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-30499841-2', 'auto');
ga('send', 'pageview');
</script>
<link rel="icon" href="https://novoed.com/wp-content/uploads/2016/12/cropped-NovoEd-Logo-v4-Favicon-Blue-512x517-60x60.png" sizes="32x32" />
<link rel="icon" href="https://novoed.com/wp-content/uploads/2016/12/cropped-NovoEd-Logo-v4-Favicon-Blue-512x517-280x280.png" sizes="192x192" />
<link rel="apple-touch-icon-precomposed" href="https://novoed.com/wp-content/uploads/2016/12/cropped-NovoEd-Logo-v4-Favicon-Blue-512x517-280x280.png" />
<meta name="msapplication-TileImage" content="https://novoed.com/wp-content/uploads/2016/12/cropped-NovoEd-Logo-v4-Favicon-Blue-512x517-280x280.png" />

<!-- begin heap Hubspot tracking code -->
<script>
window.addEventListener('load', function(){
  setTimeout(function(){
    var form = document.body
    form.addEventListener('hsvalidatedsubmit', function(e){
      e.preventDefault();
      var data = {};
      var inputs = [].slice.call(e.target.getElementsByTagName('input'));
      inputs.forEach(function(input){
        if (input.name!='hs_context') data[input.name] = input.value;
      });
      heap.addUserProperties(data);
    });
  }, 2000);
});
</script>


<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '678167132284607'); 
fbq('track', 'PageView');
</script>
<noscript>
 <img height="1" width="1" 
src="https://www.facebook.com/tr?id=678167132284607&ev=PageView
&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->

</head>
<body>
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.js'></script>
<!-- <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-min.js'></script> -->
<header>
    <div class="container">
                <div class="logo">
            <a href="userHomepage?id=${employee.id}">
                <img src="https://image.ibb.co/cPU8qb/welearn.png" class="default" alt="Learn"> 
                <img src="https://image.ibb.co/cPU8qb/welearn.png" class="colored" alt="Collolearn">
            </a>
        </div>
        <nav>
            <ul id="menu-header-bar" class="menu">
<li id="menu-item-3884" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3884"><a href="aboutUs?id=${employee.id}">About Us</a></li>
<li id="menu-item-3885" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3885"><a href="customers?id=${employee.id}">Customers</a></li>
<li id="menu-item-3910" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3910"><a href="courseList?id=${employee.id}">Courses</a></li>
<%-- <li id="menu-item-3920" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3910"><a href="chatAndLearn?id=${employee.id}">Chat</a></li> --%>
<li id="menu-item-3920" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3910"><a href="editEmployee?id=${employee.id}">Edit Profile</a></li>
<li id="menu-item-3920" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3910"><a href="initialPage">Logout</a></li>

</ul>                           
					<ul id="personal-menu">
                                            <li>
                            
                        </li>
                                    </ul>
                    </nav>
        <div class="nav-toggle">
            <span></span><span></span><span></span><span></span>
        </div>
    </div>
</header>


<section class="page">

					
		
			<div class="fold-screen ">
				<section class="page-header" style="background-image: url(https://image.ibb.co/jmMA3w/homepage.jpg);">
			<div class="container-fluid">
								
												<h1>Promote <span class="typed-element" data-strings='["Learning","Collaboration"]'></span></h1>
								
												<p>Learn as you collaborate with the world.</p>
				
								<div class="buttons">
															<a href="#solution-highlights" class="btn btn-transparent">Learn More</a>
															
									</div>
								
								<div id="top-slider" class="slider">
					
				</div>
							</div>
		</section>
	</div>
	
		
			
		

			
<script type="text/javascript">
$(document).ready(function(){
	  $('.slidingGraphs').slick({
		  dots: true,
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: true,
		  adaptiveHeight: true
	  });
	  ${employee.id}
	  var topicMentionArr = [${algoIntroCount}, ${greedy}, ${divideAndConquer}, ${dynamic}, ${databasesCount}, ${architecture}, ${models}, ${schemas}, ${operatingSystemsCount}, ${memMgmt}, ${cache}, ${secStorage}]
		var maxMention = Math.max.apply(null, topicMentionArr);
		var positionOfMax = topicMentionArr.indexOf(maxMention) + 1;
		var topicNameFoundHighest;
		//href's have to be changed and hence repetitive statements
		if(positionOfMax == 1){
			topicNameFoundHighest = "Introduction to Algorithms";
			$('.rounded-list').append('<li><a href="algorithms/intro?id=${employee.id}">'+ topicNameFoundHighest +' &nbsp;  has been mentioned in chats &nbsp;'+ maxMention+' times. <br> Click on this bar to view its content. Check if it needs any modifications </a></li><hr> ');
		} else if (positionOfMax == 2) {
			topicNameFoundHighest = "Greedy Approach";
			$('.rounded-list').append('<li><a href="algorithms/greedyApproach?id=${employee.id}">'+ topicNameFoundHighest +' has been mentioned in chats &nbsp;'+ maxMention+' times. <br> Click on this bar to view its content. Check if it needs any modifications </a></li><hr> ');
		} else if (positionOfMax == 3) {
			topicNameFoundHighest = "Divide and Conquer";
			$('.rounded-list').append('<li><a href="algorithms/divideAndConquer?id=${employee.id}">'+ topicNameFoundHighest +' &nbsp;  has been mentioned in chats &nbsp;'+ maxMention+' times. <br> Click on this bar to view its content. Check if it needs any modifications </a></li><hr> ');
		} else if (positionOfMax == 4) {
			topicNameFoundHighest = "Dynamic Programming";
			$('.rounded-list').append('<li><a href="algorithms/dynamicProgramming?id=${employee.id}">'+ topicNameFoundHighest +' &nbsp;  has been mentioned in chats &nbsp;'+ maxMention+' times. <br> Click on this bar to view its content. Check if it needs any modifications </a></li><hr> ');
		} else if (positionOfMax == 5) {
			topicNameFoundHighest = "Introduction to Databases";
			$('.rounded-list').append('<li><a href="databases/intro?id=${employee.id}">'+ topicNameFoundHighest +' &nbsp;  has been mentioned in chats &nbsp;'+ maxMention+' times. <br> Click on this bar to view its content. Check if it needs any modifications </a></li><hr> ');
		} else if (positionOfMax == 6) {
			topicNameFoundHighest = "Architecture";
			$('.rounded-list').append('<li><a href="databases/architecture?id=${employee.id}">'+ topicNameFoundHighest +' &nbsp;  has been mentioned in chats &nbsp;'+ maxMention+' times. <br> Click on this bar to view its content. Check if it needs any modifications </a></li><hr> ');
		} else if (positionOfMax == 7) {
			topicNameFoundHighest = "Models";
			$('.rounded-list').append('<li><a href="databases/models?id=${employee.id}">'+ topicNameFoundHighest +' &nbsp;  has been mentioned in chats &nbsp;'+ maxMention+' times. <br> Click on this bar to view its content. Check if it needs any modifications </a></li><hr> ');
		} else if (positionOfMax == 8) {
			topicNameFoundHighest = "Schemas";
			$('.rounded-list').append('<li><a href="databases/schemas?id=${employee.id}">'+ topicNameFoundHighest +' &nbsp;  has been mentioned in chats &nbsp;'+ maxMention+' times. <br> Click on this bar to view its content. Check if it needs any modifications </a></li><hr> ');
		} else if (positionOfMax == 9) {
			topicNameFoundHighest = "Introduction to Operating Systems";
			$('.rounded-list').append('<li><a href="operatingSystems/intro?id=${employee.id}">'+ topicNameFoundHighest +' &nbsp;  has been mentioned in chats &nbsp;'+ maxMention+' times. <br> Click on this bar to view its content. Check if it needs any modifications </a></li><hr> ');
		} else if (positionOfMax == 10) {
			topicNameFoundHighest = "Memory Management";
			$('.rounded-list').append('<li><a href="operatingSystems/memoryManagement?id=${employee.id}">'+ topicNameFoundHighest +' &nbsp;  has been mentioned in chats &nbsp;'+ maxMention+' times. <br> Click on this bar to view its content. Check if it needs any modifications </a></li><hr> ');
		} else if (positionOfMax == 11) {
			topicNameFoundHighest = "Cache";
			$('.rounded-list').append('<li><a href="operatingSystems/cache?id=${employee.id}">'+ topicNameFoundHighest +' &nbsp;  has been mentioned in chats &nbsp;'+ maxMention+' times. <br> Click on this bar to view its content. Check if it needs any modifications </a></li><hr> ');
		} else if (positionOfMax == 12) {
			topicNameFoundHighest = "Secondary Storage";
			$('.rounded-list').append('<li><a href="operatingSystems/secondaryStorage?id=${employee.id}">'+ topicNameFoundHighest +' &nbsp;  has been mentioned in chats &nbsp;'+ maxMention+' times. <br> Click on this bar to view its content. Check if it needs any modifications </a></li><hr> ');
		}

	});
		
</script>		
				
	<section id="solution-highlights" class="solution-highlights" style="">
		<div class="container">
		<ol class="rounded-list">
		    <li><a href="">Number of messages sent: ${sentCount}</a></li>
		    <li><a href="">Number of messages received : ${receivedCount} <br></a></li>
		    <li><a href="">Overall progress in all courses so far: ${overallProgress}% </a></li>
		    <li><a href="">Your Social Learning Rate (SLR): ${socialLearningRate}</a></li>
		    <li><a href="">Number of courses completed in Algorithms: ${algoLevel}</a></li>
		    <li><a href="">Number of courses completed in Databases: ${dbLevel}</a></li>
		    <li><a href="">Number of courses completed in Operating Systems: ${osLevel}</a></li>
		    <li><a href="">Number of people who marked you as helpful: ${contributionPos}</a></li>
		    <li><a href="">Number of people who marked you as not helpful: ${contributionNeg}</a></li>
		</ol>
		
		<%-- Number of messages sent: ${sentCount} <br>
		Number of messages received : ${receivedCount} <br> --%>
		
		
		
		<%-- Overall progress in all courses so far: ${overallProgress}% <br>
		Your Social Learning Rate (SLR): ${socialLearningRate} <br> --%>		
		<%-- <c:forEach var="hash" items="${topicWiseHelpingCountAlgorithms}">
        	<option><c:out value="${hash}"/></option>
  		</c:forEach> --%>
  		<%-- ${topicWiseHelpingCountAlgorithms['Introduction to Algorithms']}
  		${topicWiseHelpingCountAlgorithms['Greedy Approach']}
  		${topicWiseHelpingCountAlgorithms['Divide And Conquer']}
  		${topicWiseHelpingCountAlgorithms['Dynamic Programming']}
  		 --%>
		<script type="text/javascript">
		window.onload = function () {
			CanvasJS.addColorSet("myColorScaling",
	                [//colorSet Array
	                	"#d7191c",
	                	"#fdae61",
	                	"#abdda4",
	                	"#2b83ba"          
	                ]);
			//Algorithms Chart
			var chartAlgo = new CanvasJS.Chart("chartContainerAlgo", {
				
				 colorSet: "myColorScaling",
				 backgroundColor: "transparent",
				title:{
					text: "Contribution in Algorithms"              
				},
				axisX: {						
		      		title: "Courses in Algorithms"
		      	},
		      	axisY: {						
		      		title: "Number of people helped",
		      		interval: 1
		      	},
				data: [              
				{
					type: "bar",
					 fillOpacity: .7, 
					dataPoints: [
						{ label: "Introduction to Algorithms",  y: ${topicWiseHelpingCountAlgorithms['Introduction to Algorithms']}  },
						{ label: "Greedy Approach", y: ${topicWiseHelpingCountAlgorithms['Greedy Approach']} },
						{ label: "Divide And Conquer", y: ${topicWiseHelpingCountAlgorithms['Divide And Conquer']} },
						{ label: "Dynamic Programming",  y: ${topicWiseHelpingCountAlgorithms['Dynamic Programming']} },
					]
				}
				]
			});
			
			chartAlgo.render();
			
			
			//Databases Chart
			
			var chartDb = new CanvasJS.Chart("chartContainerDb", {
				colorSet: "myColorScaling",
				backgroundColor: "transparent",
				title:{
					text: "Contribution in Databases"              
				},
				axisX: {						
		      		title: "Courses in Databases"
		      	},
		      	axisY: {						
		      		title: "Number of people helped",
		      		interval: 1
		      	},
				data: [              
				{
					type: "bar",
					fillOpacity: .7,
					dataPoints: [
						{ label: "Introduction to Databases",  y: ${topicWiseHelpingCountDatabases['Introduction to Databases']}  },
						{ label: "Architecture", y: ${topicWiseHelpingCountDatabases['Architecture']} },
						{ label: "Models", y: ${topicWiseHelpingCountDatabases['Models']} },
						{ label: "Schemas",  y: ${topicWiseHelpingCountDatabases['Schemas']} },
					]
				}
				]
			});
			chartDb.render();
			
			//Operating Systems Chart 
			
			var chartOs = new CanvasJS.Chart("chartContainerOs", {
				colorSet: "myColorScaling",
				backgroundColor: "transparent",
				title:{
					text: "Contribution in Operating Systems"              
				},
				axisX: {						
		      		title: "Courses in Operating Systems"
		      	},
		      	axisY: {						
		      		title: "Number of people helped",
		      		interval: 1
		      	},
				data: [              
				{
					type: "bar",
					fillOpacity: .7,
					dataPoints: [
						{ label: "Introduction to Operating Systems",  y: ${topicWiseHelpingCountOperatingSystems['Introduction to Operating Systems']}  },
						{ label: "Memory Management", y: ${topicWiseHelpingCountOperatingSystems['Memory Management']} },
						{ label: "Cache", y: ${topicWiseHelpingCountOperatingSystems['Cache']} },
						{ label: "Secondary Storage",  y: ${topicWiseHelpingCountOperatingSystems['Secondary Storage']} },
					]
				}
				]
			});
			chartOs.render();
			
			//Learning vs. Contribution Pie Chart
			var chartPie = new CanvasJS.Chart("chartContainerPie",
					{
						backgroundColor: "transparent",
						colorSet: "myColorScaling",
						title:{
							text: "Total Learning vs. Total Contribution"
						},		
						data: [
						{       
							type: "pie",
							showInLegend: true,
							toolTipContent: "#percent %",
							legendText: "{indexLabel}",
							dataPoints: [
								{  y: ${algoLevel}+${osLevel}+${dbLevel}, indexLabel: "Overall Learning" },
								{  y: ${peopleHelped}, indexLabel: "Overall Contribution" }
							]
						}
						]
					});
			chartPie.render();
		}
		</script>
  		
  		<div class="slidingGraphs">
  		<div id="chartContainerAlgo" style="height: 450px; width: 100%;">
  			
  		</div>
  		<div id="chartContainerDb" style="height: 450px; width: 100%;">
  			
  		</div>
  		<div id="chartContainerOs" style="height: 450px; width: 100%;">
  			
  		</div>
  		<div id="chartContainerPie" style="height: 450px; width: 100%;">
  			
  		</div>
  		</div>
		
						<h2 class="heading">Product Highlights</h2>
									<p class="subheading">welearn engages learners to collaborate with tutors and to keep track of their progress.</p>
						<div class="highlights">
								<div class="screenshot">
					<img src="https://novoed.com/wp-content/uploads/2016/10/Landscape-iPad-Submission-Gallery-1023x725.png" alt="NovoEd's Online Social Learning Platform: Submissions on iPad" />
				</div>
																																<style>
					.page .solution-highlights .highlights .highlight.highlight1 a:before {
						background-image: url(https://novoed.com/wp-content/uploads/2016/10/icon1.svg);
					}
				</style>
				<div class="highlight highlight1">
					<a href="/product/#feature-item1">Look for Help</a>
				</div>
																								<style>
					.page .solution-highlights .highlights .highlight.highlight2 a:before {
						background-image: url(https://novoed.com/wp-content/uploads/2016/10/icon2.svg);
					}
				</style>
				<div class="highlight highlight2">
					<a href="/product/#feature-item2">Easy to Track Progress</a>
				</div>
																								<style>
					.page .solution-highlights .highlights .highlight.highlight3 a:before {
						background-image: url(https://novoed.com/wp-content/uploads/2016/10/icon3.svg);
					}
				</style>
				<div class="highlight highlight3">
					<a href="/product/#feature-item3">Social & Engaging</a>
				</div>
																								<style>
					.page .solution-highlights .highlights .highlight.highlight4 a:before {
						background-image: url(https://novoed.com/wp-content/uploads/2016/10/icon4.svg);
					}
				</style>
				<div class="highlight highlight4">
					<a href="/product/#feature-item4">Powerful Chatting</a>
				</div>
							</div>
		</div>
	</section>
	
		
			
		
			
	<section class="cards" style="">
		<div class="container">
									<div class="row">
								<div class="col-md-4">
					<div class="card">
						<div class="flipper">
							<div class="front">
																<div class="picture">
									<img src="https://novoed.com/wp-content/uploads/2016/10/P-icon.png" alt="Hyperlink Chat">
								</div>
																								<div class="title">Hyperlink Chat</div>
																								<div class="description">Find the right resources that conveys your question to the tutor without wasting time.</div>
															</div>
							<div class="back">
																<div class="title">Hyperlink Chat</div>
																								<div class="text"><ul>
<li>Quickly delve into the concept as you're both on the same page</li>
<li>Easily reference resources within the website through keywords</li>
<li>Navigate to the specific sub-topic within each topic</li>
</ul>
</div>
															</div>
						</div>
					</div>
				</div>
								<div class="col-md-4">
					<div class="card">
						<div class="flipper">
							<div class="front">
																<div class="picture">
									<img src="https://novoed.com/wp-content/uploads/2016/10/B-icon.png" alt="Ticker">
								</div>
																								<div class="title">Ticker Updates</div>
																								<div class="description">Look for the most recent masters at your course</div>
															</div>
							<div class="back">
																<div class="title">Ticker Updates</div>
																								<div class="text"><ul>
<li>Features the online profile users completing a course</li>
<li>Lists the users by sorting them based on most recent completion</li>
<li>Easy to choose the person you want to seek help from</li>
</ul>
</div>
															</div>
						</div>
					</div>
				</div>
								<div class="col-md-4">
					<div class="card">
						<div class="flipper">
							<div class="front">
																<div class="picture">
									<img src="https://novoed.com/wp-content/uploads/2016/10/U-icon.png" alt="Progress">
								</div>
																								<div class="title">Progress Bar</div>
																								<div class="description">Measures your active participation on the online learning platform</div>
															</div>
							<div class="back">
																<div class="title">Progress Bar</div>
																								<div class="text"><ul>
<li>Displays graphs of the user's participation to provide a personal measure</li>
<li>Provides clear distinctions of time spent learning and time spent teaching</li>
<li>The feedback based on the progress can help user alter participation levels</li>
</ul>
</div>
															</div>
						</div>
					</div>
				</div>
							</div>
		</div>
	</section>
	
		
			
		
							
	<!-- <section class="testimonial" style="background-image: url(https://novoed.com/wp-content/uploads/2016/10/Transformation-Cropped.jpg);">
		<div class="container">
									<div class="row">
				<div class="col-md-8 col-md-offset-2">
										<div class="text">
						welearn is changing the way students interact on an online learning platform</div>
										<div class="author">
												<div class="photo">
							<img src="" alt="Pranoy" />
						</div>
																		<div class="name">Pranoy Chandra</div>
																		<div class="info">GRADUATE RESEARCH ASSISTANT,<br/>GRADUATE STUDENT AT ARIZONA STATE UNIVERSITY</div>
											</div>
				</div>
			</div>
		</div>
	</section> -->
	
		
			
		
				
	<section id="resources" class="resources" style="">
		<div class="container">
						<h2 class="heading">Sample course syllabi</h2>
									<div class="row">
				<div class="slider">
																				
										<div>
						<div class="resource whitepaper">
							<div class="picture">
																<a href="#download-form-4570"><img src="https://image.ibb.co/e8oCGG/algo.png" alt="Algorithm Design" /></a>
															</div>
							<div class="type">SYLLABUS</div>
							<div class="title">
								<a href="#download-form-4570">Design and Analysis of Algorithms</a>
							</div>
							<div class="link download https://novoed.com/wp-content/uploads/2017/04/Brandon-Hall-NovoEd-Solution-Profile-PUBLIC_v3.pdf">
								<a href="#download-form-4570">Download</a>
							</div>

							<div id="download-form-4570" class="novoed-modal download">
								<div class="header">
									<div class="icon"></div>
								</div>
								<p>Thank you for your interest.  Please submit the form below to download.</p>

								<script>
									hbspt.forms.create({
										portalId: '559363',
										formId: 'd91af230-d8ca-44ce-bf21-358ffce3f763',
										css: '',
										redirectUrl: 'https://novoed.com/wp-content/uploads/2017/04/Brandon-Hall-NovoEd-Solution-Profile-PUBLIC_v3.pdf',
										submitButtonClass: 'btn btn-blue',
										onFormSubmit: function ($form) {
											jQuery.fancybox.close();

											ga('send', 'event', {
												eventCategory: 'Form',
												eventAction: 'submit',
												eventLabel: 'Case Study Hubspot Form',
												transport: 'beacon'
											});

											fbq('track', 'Lead');

										}
									});
								</script>
							</div>
						</div>
					</div>
																				
										<div>
						<div class="resource whitepaper">
							<div class="picture">
																<a href="#download-form-3544"><img src="https://image.ibb.co/epH6bG/database.jpg" alt="Database design" /></a>
															</div>
							<div class="type">SYLLABUS</div>
							<div class="title">
								<a href="#download-form-3544">Database Management Systems</a>
							</div>
							<div class="link download https://novoed.com/wp-content/uploads/2017/02/2017_06_15-25x-NovoEd-eBook-LXD.pdf">
								<a href="#download-form-3544">Download</a>
							</div>

							<div id="download-form-3544" class="novoed-modal download">
								<div class="header">
									<div class="icon"></div>
								</div>
								<p>Thank you for your interest.  Please submit the form below to download.</p>

								<script>
									hbspt.forms.create({
										portalId: '559363',
										formId: 'd91af230-d8ca-44ce-bf21-358ffce3f763',
										css: '',
										redirectUrl: 'https://novoed.com/wp-content/uploads/2017/02/2017_06_15-25x-NovoEd-eBook-LXD.pdf',
										submitButtonClass: 'btn btn-blue',
										onFormSubmit: function ($form) {
											jQuery.fancybox.close();

											ga('send', 'event', {
												eventCategory: 'Form',
												eventAction: 'submit',
												eventLabel: 'Case Study Hubspot Form',
												transport: 'beacon'
											});

											fbq('track', 'Lead');

										}
									});
								</script>
							</div>
						</div>
					</div>
																				
										<div>
						<div class="resource whitepaper">
							<div class="picture">
																<a href="#download-form-3193"><img src="https://image.ibb.co/gAoewG/os.jpg" alt="Operating Systems" /></a>
															</div>
							<div class="type">SYLLABUS</div>
							<div class="title">
								<a href="#download-form-3193">Operating Systems</a>
							</div>
							<div class="link download https://novoed.com/wp-content/uploads/2016/12/NovoEd-White-Paper-Chuck-Eesley-Engagement-Study-v3-Dec-2016.pdf">
								<a href="#download-form-3193">Download</a>
							</div>

							<div id="download-form-3193" class="novoed-modal download">
								<div class="header">
									<div class="icon"></div>
								</div>
								<p>Thank you for your interest.  Please submit the form below to download.</p>

								<script>
									hbspt.forms.create({
										portalId: '559363',
										formId: 'd91af230-d8ca-44ce-bf21-358ffce3f763',
										css: '',
										redirectUrl: 'https://novoed.com/wp-content/uploads/2016/12/NovoEd-White-Paper-Chuck-Eesley-Engagement-Study-v3-Dec-2016.pdf',
										submitButtonClass: 'btn btn-blue',
										onFormSubmit: function ($form) {
											jQuery.fancybox.close();

											ga('send', 'event', {
												eventCategory: 'Form',
												eventAction: 'submit',
												eventLabel: 'Case Study Hubspot Form',
												transport: 'beacon'
											});

											fbq('track', 'Lead');

										}
									});
								</script>
							</div>
						</div>
					</div>
		
</section>

	
		
		



</body>
</html>
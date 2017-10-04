$(document).ready(function () {
    //
    //alert("jquery is on");
    /* global $ */
    
    
        /* tabs*/
    
			$(".gs-tabs-navigation > .sg-tab-menu-item").on("click",function(evt){
				// remove any existing active elements
				$(this).closest(".sg-tabs-container")
					   .find(".active-tab-item")
					   .removeClass("active-tab-item");
				// add active class to clicked element
				$(this).addClass("active-tab-item");
				$(this).closest(".sg-tabs-container")
					   .find(".sg-tabs-body .sg-tab-content[data-item='"+($(this).data("item"))+"']")
					   .addClass("active-tab-item");
			});
  
    /* tabs*/
    // MetisMenu
    var sideMenu = $('#side-menu');
    sideMenu.metisMenu();
    //add .navbarCollapsed to the menu
    $('body').addClass('navbarCollapsed');
    // add active class to parent li
    $( ".nav-second-level li.active" ).parent().parent().addClass('activeNav');
    // add glyph to active li
    $('.nav li.active i, .nav li.activeNav i').addClass('nc-icon-glyph');
    // hide span tags initially
    $('.help-support span.nav-label').addClass('hideNav');
    $('.nav span').fadeTo(0);
    // hover menu
     $('#navbar-menu-side').on('mouseenter', function () {
        $('.help-support span.nav-label').removeClass('hideNav');
		$("body").toggleClass("navbarCollapsed");
		$('.nav span').fadeTo('fast', 100);
// 		$(".nav-second-level").toggleClass("in");
    }).on('mouseleave', function () {
		$("body").toggleClass("navbarCollapsed");
		$(".nav-second-level").removeClass("in");
     	$(".metismenu li").removeClass("active");
		$('.nav-label').hide();
		$('.arrow').hide();
	})
	//
	// Right Sidebars
	var openTask = $('a.open-task');
	var openNotifications = $('a.open-notifications');
	var tasksSidebar = $('#tasks-sidebar');
	var notificationsSidebar = $('#notifications-sidebar');
	//
	//open Task Sidebar by default
	tasksSidebar.addClass('rOpen');
	// add if condition to check if task sidebar is open
	if( $('.rOpen').length > 0 ){
	    $('#pageContent').addClass('sidebarOpen');
	    openTask.parent().addClass('active');
	}else{
	   openTask.parent().removeClass('active');
	    $('#pageContent').removeClass('sidebarOpen'); 
	}
	//
	openTask.on('click', function () {
	        tasksSidebar.removeClass('tasksOpen');
            tasksSidebar.toggleClass('rOpen tasksOpen');
            notificationsSidebar.removeClass('rOpen notificationsOpen');
            $(this).parent().toggleClass('active');
            openNotifications.parent().removeClass('active');
            // 
            $("a.open-notifications i").removeClass('nc-icon-glyph');
            $(openNotifications + " i").removeClass('nc-icon-outline');
            $(this).children('i').addClass('nc-icon-outline');
            //
            if(!tasksSidebar.hasClass('rOpen') ){
                $("a.open-task i").removeClass('nc-icon-glyph');
                $(this).removeClass('active');
            }
            if( $('.rOpen').length > 0 ){
                $("a.open-task i").addClass('nc-icon-glyph');
	            $('#pageContent').addClass('sidebarOpen');
	        }else{
	            $("a.open-task i").removeClass('nc-icon-glyph');
	            $("a.open-task i").addClass('nc-icon-outline');
	            $('#pageContent').removeClass('sidebarOpen'); 
	        }
            
    });
    //
    openNotifications.on('click', function () {
            //$('#pageContent').toggleClass('sidebarOpen');
            notificationsSidebar.toggleClass('rOpen notificationsOpen');
            tasksSidebar.removeClass('rOpen');
            $(this).parent().toggleClass('active');
            openTask.parent().removeClass('active');
            // 
            // $(openNotifications + " i").removeClass('nc-icon-outline');
            $("a.open-task i").removeClass('nc-icon-outline');
            $(this).children('i').addClass('nc-icon-glyph');
            // $("a.open-notifications i").addClass('nc-icon-outline');
            //
            if( !notificationsSidebar.hasClass('rOpen') ){
                $("a.open-notifications i").removeClass('nc-icon-glyph');
                $(this).removeClass('active');
            }
            //
            if( $('.rOpen').length >= 0 ){
	            $('#pageContent').addClass('sidebarOpen');
	        }else{
	            $('#pageContent').removeClass('sidebarOpen'); 
	        }
    });
    //
    //help footer
    $('.help-support a').on('click', function () {
        $('#help-footer').toggleClass('fOpen');
    });
    //close footer
    $('.closeFooter').on('click', function () {
        $('#help-footer').removeClass('fOpen');
    });
    // Open/close small chat
    $('.open-small-chat').on('click', function () {
        $(this).children().toggleClass('ui-3_chat-33').toggleClass('ui-1_simple-remove');
        $('.small-chat-box').toggleClass('active');
    });
    // Initialize slimscroll for small chat
    $('.small-chat-box .content').slimScroll({
        height: '234px',
        railOpacity: 0.4
    });
    // Bootstrap Tour
    /* global Tour */
    var tour = new Tour({
		  onEnd:function(){ 
		    //here will be a message
			alert("Tour ended! Click 'Start Tour' button to see it again.");
		  },
		  
		  steps: [
		  {
			element: "#my-other-element-1",
			title: "Help & Support",
			content: "Help content will be different depending on the page you are on",
			placement: "top"
		  },
		  {
			element: "#my-other-element",
			title: "Step 1",
			content: "Content of my step",
			placement: "top"
		  },
		  {
			element: "#my-other-element-2",
			title: "Step 2",
			content: "Content of my step <br/><img src='img/edyta.jpg' width='100%' /><br/> some content under the image",
			placement: "top",
            backdrop: true,
            backdropContainer: '.container',
		  }
		  ,
		  {
			element: "#my-other-element-3",
			title: "Step 3",
			content: "Content of my step",
			placement: "top"
		  }
		]});
		
		// Initialize the tour
		tour.init();
		// Start the tour
		tour.start();
		
		$('.startTour').click(function(){
            tour.restart();
            // Start the tour
            // tour.start();
        });
    	//Masonary layout for cards
    	$('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
    
    
    //TO FIX
    //get the height of sidebar div
    /*
    var sidebarHeaderWrap =  $('.sidebarHeaderWrap');
    var outerHeight = sidebarHeaderWrap.outerHeight();
    var trueOuterHeight = sidebarHeaderWrap.outerHeight(true);
    //alert("outer height: "+ outerHeight + "<br/> true height: " + trueOuterHeight);
    //add true height as padding 
    var sidebarWrap = $('.sidebarWrap');
    //sidebarWrap.css('padding', 'trueOuterHeight');
    trueOuterHeight = parseInt(trueOuterHeight);
    //alert(trueOuterHeight +20);
    sidebarWrap.css({
        "padding-top" : trueOuterHeight + 25,
        "padding-right" : '0',
        "padding-bottom" : '100px',
        "padding-left" : '0'
        
    });
    */
    //Auto complete
    //  $('.form-control').on('click', function () {
    //   $('.form-control').addClass('search-bar');
    // });
    // $('.form-control').mouseenter( function () {
    // $('.k-state-focused').removeClass('k-state-hover');
    // });
    //   $('.form-control').mouseleave( function () {
    //   $('.k-state-focused').removeClass('k-state-hover');
    //   $('.form-control').removeClass('search-bar');
      
    // });
    // var data = [
                            
    //                     ];

    //                 //create AutoComplete UI component
    //                 $("#top-search").kendoAutoComplete({
    //                     dataSource: data,
    //                     filter: "startswith",
    //                     placeholder: "Search by Keyword",
    //                     separator: ", "
    //                 });
       var availableTags = [
      "GTFP AB Burkina",
      "AB Bank Rwanda",
      "AEFB Tacks Farm",
      "GMAC WHLPRST Farm",
      "PRST Farm",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#top-search" ).autocomplete({
       classes: {
    "ui-autocomplete": "search-auto"
     },
      source: availableTags
    });
        
         //
         $("nav li.nav_green_1").click(function() {
		$("nav li.nav_blue").removeClass("active activeNav");
         });
                    
                    //
    //Open lightbox for Tasks
    $('.lLink').on('click', function() {
        alert('lightbox will be here');
    });
}); //end of document ready
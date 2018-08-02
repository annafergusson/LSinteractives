    //collect the screen size of the device (from https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window)
    function getScreenSize() {
       var w = window,
       d = document,
       e = d.documentElement,
       g = d.getElementsByTagName('body')[0],
       screenWidth = w.innerWidth || e.clientWidth || g.clientWidth,
       screenHeight = w.innerHeight|| e.clientHeight|| g.clientHeight;
       return {width: screenWidth, height: screenHeight};
    } 

    //get the type of device (from https://www.reddit.com/r/javascript/comments/6ekvv8/find_users_device_type/)
    function getPlatformType() {
       if(navigator.userAgent.match(/mobile/i)) {
          return 'mobile';
       } else if (navigator.userAgent.match(/iPad|Android|Touch/i)) {
          return 'tablet';
       } else {
          return 'desktop';
       }
    }
    
    //check the orientation for mobile devices (from http://www.williammalone.com/articles/html5-javascript-ios-orientation/)
    function readDeviceOrientation() {
       if (Math.abs(window.orientation) === 90) {
          return "landscape";
       } else {
          return "portrait";
       }
    }

    //get coordinates for where in the canvas has been clicked/touched
    function getCoord(event,canvasid){
        var can = document.getElementById(canvasid);
        var tx = event.pageX;
        var ty = event.pageY;
        var touch = event.touches;
        if ( typeof touch !== 'undefined' && touch)
        {
		  touch = event.touches[0];
          tx = touch.pageX;
          ty = touch.pageY;
        }
	    var top  = window.pageYOffset || document.documentElement.scrollTop,
        left = window.pageXOffset || document.documentElement.scrollLeft;
        tx = tx - left;
        ty = ty - top;
        var rect = can.getBoundingClientRect();
        canvas_x = (tx-rect.left)/(rect.right-rect.left)*can.width;
        canvas_y = (ty-rect.top)/(rect.bottom-rect.top)*can.height;
        return {x: canvas_x,y: canvas_y};
    }

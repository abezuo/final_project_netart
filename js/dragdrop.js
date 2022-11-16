divs = document.getElementsByTagName("div");
            for (div of divs) div.onmousedown = onMouseDown;

            document.onmousemove = onMouseMove;
            document.onmouseup   = onMouseUp;

            var the_moving_div = '';
            var the_last_mouse_position = { x:0, y:0 };


            function onMouseDown(e) {
              e.preventDefault();
  the_moving_div            = e.target.id;      // remember which div has been selected
  if (the_moving_div === "" && e.target.parentNode.id) {
    the_moving_div = e.target.parentNode.id
  }
  else if (the_moving_div == "") return;
  the_last_mouse_position.x = e.clientX;        // remember where the mouse was when it was clicked
  the_last_mouse_position.y = e.clientY;
  var d = document.getElementById(the_moving_div);
  d.style.border = "2px solid blue";     // highlight the border of the div

  var divs = document.getElementsByTagName("div");
  e.target.style.zIndex = divs.length;          // put this div  on top
  var i = 1; for (div of divs) if (div.id != the_moving_div) div.style.zIndex = i++;   // put all other divs behind the selected one

            }

            function onMouseMove(e) {
              e.preventDefault();
  if (the_moving_div == "") return;
  var d = document.getElementById(the_moving_div);
  d.style.left = d.offsetLeft + e.clientX - the_last_mouse_position.x + "px";     // move the div by however much the mouse moved
  d.style.top  = d.offsetTop  + e.clientY - the_last_mouse_position.y + "px";
  the_last_mouse_position.x = e.clientX;                                          // remember where the mouse is now
  the_last_mouse_position.y = e.clientY;
            }

            function onMouseUp(e) {
              e.preventDefault();
  if (the_moving_div == "") return;
  var d = document.getElementById(the_moving_div);
  d.style.border = "none";             // hide the border again
  the_moving_div = "";
            }

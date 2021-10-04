
		"use strict";
		
		!function() {
		  var t = window.driftt = window.drift = window.driftt || [];
		  if (!t.init) {
			if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
			t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
			t.factory = function(e) {
			  return function() {
				var n = Array.prototype.slice.call(arguments);
				return n.unshift(e), t.push(n), t;
			  };
			}, t.methods.forEach(function(e) {
			  t[e] = t.factory(e);
			}), t.load = function(t) {
			  var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
			  o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
			  var i = document.getElementsByTagName("script")[0];
			  i.parentNode.insertBefore(o, i);
			};
		  }
		}();
		drift.SNIPPET_VERSION = '0.3.1';
		drift.load('ptuwu3fpgv9x');
  function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
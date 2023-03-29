/*
Copyright (C) Xander Smalbil (Netbulae.eu)
 
This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.
 
This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
Lesser General Public License for more details.
 
You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
*/
var Scroller = {

	elements: [],
	targets: [],
	menu: '',
	menuoffset: 0,
	/**
	* Adds/Attaches eventlisteners to the document.
	*
	* @method init
	*/
	init: function()
	{
		// Populate array with all menu items
		Scroller.elements = Scroller.elmByName('anchor');
		// Populate array with all menu items targets
		for(var o = 0; o < Scroller.elements.length; o++)
		{
			Scroller.targets.push(new Scroller.target(Scroller.elements[o].dataset.id,Scroller.elmById(Scroller.elements[o].dataset.id).offsetTop));
		}

		Scroller.menu = Scroller.elmByClass(Scroller.menu);
		Scroller.menuoffset = Scroller.menu.offsetTop;

		if (document.addEventListener)
		{
			document.addEventListener("touchmove", Scroller.watchScroll, false);
			document.addEventListener("scroll", Scroller.watchScroll, false);
			for(var i = 0; i < Scroller.elements.length; i++)
			{
				Scroller.elements[i].addEventListener('click', Scroller.clickScroll, false);
			}
		}
		else if (window.attachEvent)
		{
			window.attachEvent("onscroll", Scroller.watchScroll);

			for(var i = 0; i < Scroller.elements.length; i++)
			{
				Scroller.elements[i].attachEvent('onclick', Scroller.clickScroll);
			}

		}
	},
	/**
	* Target object
	*
	* @method target
	*/
	target: function(id, offsetY)
	{
		 this.id = id;
		 this.offsetY = offsetY;
	},
	/**
	* Returns the current Y scrolling position.
	*
	* @method currentYPosition
	* @returns {Number} The y offset
	*/
	currentYPosition: function()
	{
	    // Firefox, Chrome, Opera, Safari
	    if (self.pageYOffset) return self.pageYOffset;
	    // Internet Explorer 6 - standards mode
	    if (document.documentElement && document.documentElement.scrollTop)
	        return document.documentElement.scrollTop;
	    // Internet Explorer 6, 7 and 8
	    if (document.body.scrollTop) return document.body.scrollTop;
	    	return 0;
	},
	/**
	* Returns the Y position of a certain element in the DOM.
	*
	* @method elmYPosition
	* @param {String} eId The id of the element
	* @returns {Number} y The y position of the element
	*/
	elmYPosition: function(eID)
	{
		var elm 	= 	document.getElementById(eID),
			y 		= 	elm.offsetTop,
			node 	= 	elm;

		while (node.offsetParent && node.offsetParent != document.body)
		{

			node = node.offsetParent;
			y += node.offsetTop;

		}

		return y;
	},
	clickScroll: function(e)
	{
		e = e || window.event;
	    var target = e.target || e.srcElement;

		Scroller.removeAllClasses("li");
		Scroller.addClass(target.parentNode, "active");
		Scroller.smoothScroll(target.dataset.id, target.dataset.correction); return false;
	},
	/**
	* Moves the scrolling position to the position of the supplied element
	*
	* @method smoothScroll
	* @param {String} id The id of the element we need to scrolll to
	* @param {Number} correction The correction, in pixels, so you could scroll less or more
	* @returns {Boolean} false
	*/
	smoothScroll: function(eID, correction)
	{
		// maybe site specific?
		var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
		if(is_firefox)
		{
			var correction = typeof correction !== 'undefined' ? correction : correction;
			correction = correction - 15;
		}
		else
		{
			var correction = typeof correction !== 'undefined' ? correction : correction;
		}

		var	startY = Scroller.currentYPosition(),
			stopY = Scroller.elmYPosition(eID) - correction,
			distance = stopY > startY ? stopY - startY : startY - stopY;

		if (distance < 100)
		{
			scrollTo(0, stopY); return;
		}

		var speed = Math.round(distance / 100);
			if (speed >= 20) speed = 20;

		var step = Math.round(distance / 25),
			leapY = stopY > startY ? startY + step : startY - step,
			timer = 0;

		if (stopY > startY)
		{
			for ( var i=startY; i<stopY; i+=step )
			{
				setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
				leapY += step; if (leapY > stopY) leapY = stopY; timer++;
			} return;
		}

		for ( var i=startY; i>stopY; i-=step )
		{
			setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
			leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
		}
		return false;
	},
	/**
	* Returns the scrolling X and Y offset
	*
	* @method getScrollXY
	* @returns {Array} Returns an array with X and Y offsets
	*/
	getScrollXY: function()
	{
		var scrOfX = 0, scrOfY = 0;
		if( typeof( window.pageYOffset ) == 'number' )
		{
			//Netscape compliant
			scrOfY = window.pageYOffset;
			scrOfX = window.pageXOffset;
		}
		else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) )
		{
			//DOM compliant
			scrOfY = document.body.scrollTop;
			scrOfX = document.body.scrollLeft;
		} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) )
		{
			//IE6 standards compliant mode
			scrOfY = document.documentElement.scrollTop;
			scrOfX = document.documentElement.scrollLeft;
		}
		return [ scrOfX, scrOfY ];
	},
	/**
	* Check if an element has some classname
	*
	* @method hasClass
	* @param {String} ele The element
	* @param {String} cls The classname that needs to be checked against
	* @returns {Boolean} Returns true or false
	*/
	hasClass: function (ele,cls)
	{
		return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
	},
	/**
	* Adds a class to an element
	*
	* @method addClass
	* @param {String} ele The element
	* @param {String} cls The classname that needs to be added
	*/
	addClass: function(ele,cls)
	{
  		if (!Scroller.hasClass(ele,cls)) ele.className += " "+cls;
	},
	/**
	* Removes a classname from a certain element if it exists
	*
	* @method removeClass
	* @param {String} ele The element
	* @param {String} cls The classname that needs to be removed
	*/
	removeClass: function(ele,cls)
	{
		if (Scroller.hasClass(ele,cls))
		{
			var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
			ele.className=ele.className.replace(reg,'');
		}
	},
	/**
	* Removes all classes from a tag type
	*
	* @method removeAllClasses
	* @param {String} tag The tag type that needs to be checked
	*/
	removeAllClasses: function(tag){
		var tags = document.getElementsByTagName(tag);

		for (var i = 0; i < tags.length; i++)
		{
	  		Scroller.removeClass(tags[i], 'active');
		}
	},
	/**
	* Watches changes and adds whatever you want. Joke.. i actually does not watch :p
	*
	* @method watchScroll
	*/
	watchScroll: function()
	{
		if(Scroller.getScrollXY()[1] >= Scroller.menuoffset)
		{
			Scroller.menu.style.position = "fixed";
			Scroller.menu.style.top = "auto";
			Scroller.watchTargets(Scroller.getScrollXY()[1]);
		}
		else
		{
			Scroller.menu.style.position = "absolute";
			Scroller.menu.style.top = ""+Scroller.menuoffset+"px";
			// Site specific solution. This site has an empty non-clickable first menu item
			Scroller.removeAllClasses("li");
			Scroller.addClass(Scroller.elmByClass('empty'), 'active');
		}

	},
	/**
	* Watches changes to the offset and add active classes to the menu items
	*
	* @method watchTargets
	*/
	watchTargets: function(ypos)
	{
		var targets = Scroller.targets,
			elements = Scroller.elements;
		for(var i = 0; i < targets.length; i++)
		{
			if(targets[i].offsetY == ypos)
			{
				console.log("Offset: "+ targets[i].offsetY + " Name: "+ targets[i].id + " elements: "+ elements[i].dataset.id);
				Scroller.removeAllClasses("li");
				Scroller.addClass(elements[i].parentNode, "active");
			}

		}
	},
	/**
	* Get element by classname
	*
	* @method elmByClass
	* @param {String} cls The classname of the element
	* @returns {Object} The matched object
	*/
	elmByClass: function(cls)
	{
		return document.getElementsByClassName(cls)[0];
	},
	/**
	* Get element by id
	*
	* @method elmById
	* @param {String} id The id of the element
	* @returns {Object} The matched object
	*/
	elmById: function(id)
	{
		return document.getElementById(id);
	},
	/**
	* Get elements by name
	*
	* @method elmByName
	* @param {String} name The name of the element
	* @returns {Object} The matched object
	*/
	elmByName: function(name)
	{
		return document.getElementsByName(name);
	}

}

Scroller.menu = 'menu';
Scroller.init();





/* this loads the jQuery and javscript when the document is loaded */
$(document).ready(function () {

	
	
	/* this is the html code for the navigation bar */
var html = [
	'<div id="bS">',
	'<nav class="navbar navbar-default">',
	'<ul class="nav navbar-nav">',
	'<button class="buttonStyle" onclick="scrollFunction(1)"> Seciton 1 </button>',
	'<button class="buttonStyle" onclick="scrollFunction(2)"> Seciton 2 </button>',
	'<button class="buttonStyle" onclick="scrollFunction(3)"> Seciton 3 </button>',
	'<button class="buttonStyle" onclick="scrollFunction(4)"> Seciton 4 </button>',
	'</ul>',

	'</nav>',
	'</div>'
].join('\n');

	/*const nav = document.querySelector("#bs");
	const sections = document.querySelectorAll("section");
	for (const section of sections) {
		const a = document.createElement("li");
		a.innerText = section.dataset.linkText;
		nav.appendChild(a);
	}*/





	/* The append() method inserts specified content at the end of the selected elements. */
	$(".navbar__menu").append(html);



	



	/* this section of the code makes the button highlighter to which section is selected  */
	var header = document.getElementById("bS");
	var btns = header.getElementsByClassName("buttonStyle");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function () {
			var current = document.getElementsByClassName("active");
			if (current.length > 0) {
				current[0].className = current[0].className.replace(" active", "");
			}
			this.className += " active";
		});
	}


	
});


/**
 * 
 * scroll function logs sections that are scrolled to 
 */


/*The appendChild() method appends a node (element) as the last child of an element. */

const para = document.createElement("section");
para.innerHTML = "<div  class='landing__container'> <h2> Section 1</h2 > <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p></div > ";
document.getElementById("mySection").appendChild(para);


const para2 = document.createElement("section");
para2.innerHTML = "<div  class='landing__container'> <h2> Section 2</h2 > <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p> </div > ";
document.getElementById("section2").appendChild(para2);


const para3 = document.createElement("section");
para3.innerHTML = "<div class='landing__container'> <h2> Section 3</h2 > <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p> </div > ";
document.getElementById("section3").appendChild(para3);

const para4 = document.createElement("section");
para4.innerHTML = "<div class='landing__container'> <h2> Section 4</h2 > <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p> </div > ";
document.getElementById("section4").appendChild(para4);



document.addEventListener('scroll', function (event) {
	console.log(event);
	console.log(window.scrollY);

	var current = document.getElementsByClassName("active");
	if (current.length > 0) {
		current[0].className = current[0].className.replace(" active", "");
	}

	if (window.scrollY < 800) { // or any other filtering condition        
		var current = document.getElementsByClassName("buttonStyle")[0];
		current.className += " active";
	} else if (window.scrollY >= 801 && window.scrollY < 1400) {
		var current = document.getElementsByClassName("buttonStyle")[1];
		current.className += " active";
	} else if (window.scrollY >= 1401 && window.scrollY < 2000) {
		var current = document.getElementsByClassName("buttonStyle")[2];
		current.className += " active";
	}
	else if (window.scrollY >= 2001) {
		var current = document.getElementsByClassName("buttonStyle")[3];
		current.className += " active";
	}





}, true /*Capture event*/);



/*this function scrolls to the clicked on section */
function scrollFunction(x) {
	if (x == 1) {
		const element = document.getElementById("mySection");
		element.scrollIntoView();
	}

	else if (x == 2) {
		const element = document.getElementById("section2");
		element.scrollIntoView();
	}
	else if (x == 3) {
		const element = document.getElementById("section3");
		element.scrollIntoView();
	}
	else if (x == 4) {
		const element = document.getElementById("section4");
		element.scrollIntoView();
	}

}




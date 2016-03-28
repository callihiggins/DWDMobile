function changeNav() {

/*When an HTML document is loaded into a web browser, it becomes a document object.
The document object is the root node of the HTML document and the "owner" of all other nodes:
(element nodes, text nodes, attribute nodes, and comment nodes). */
	document.getElementById("the-nav").style.background = "#000";
	document.getElementsByClassName("test-btn")[0].innerHTML= "Why is the nav black now?"
	console.log("hi");
	//Turn this on and off to pause the code and inspect it
	debugger;
}

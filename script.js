//If the site link says target add some script in two different section - first link paragraph, banners, banners2, store grid, and menu
//If the site link says scentbird add some script in two different section - first link paragraph, banners, banners2, store grid, and menu


var prodsAttrib = new Array();
prodsAttrib[0] = "Buy Fine Things For Fine Prices.";
prodsAttrib[1] = "Target is selling all the best products. Stuff Your Cart!";
prodsAttrib[2] = "Make your Day. Make a list.";
prodsAttrib[3] = "Do you know the Best Electronics are at eShop now?";
prodsAttrib[4] = "Deals Deals And More Deals!";

var prods_qula = new Array();
prods_qula[0] = " Savings on Brand Name items.";
prods_qula[1] = "Fast Service";
prods_qula[2] = " Everyday Sale Prices and Events";
prods_qula[3] = " Membership Discounts";
prods_qula[4] = " Account Management";

var prodsFeats = new Array();
prodsFeats[0] = " Soft";
prodsFeats[1] = " Scented";
prodsFeats[2] = " Smooth";
prodsFeats[3] = " Seasonal";
prodsFeats[4] = " Durable";

var upList = new Array();
upList[0] = "Shop and Save!";
upList[1] = "Browse and Buy!";
upList[2] = "Find and Share!";
upList[3] = "Deals and Promos!";
upList[4] = "Picks and Grabs!";
upList[5] = "Bring the Season a Better Style! Buy and Browse.";
upList[6] = "Seasonal Buys are Big! Shop Now";
upList[7] = "Deals and Promos to Shop for.";
upList[8] = "Find all the sales of the season!";
upList[9] = "Shops that make you hop!";
upList[10] = upList[0];

var jsonTx_Pile = '<p>' + JSON.stringify(upList[getRandomColor()], replaceToUpper) + '</p>';
var jsonTxPile = '<p>' + JSON.stringify(upList[getRandomColor()], replaceToUpper) + '</p>';


var jsonText = JSON.stringify(upList[getRandomColor()], replaceToUpper); 
var jsonText1 = JSON.stringify(upList[getRandomColor()], replaceToUpper);
var jsonText2 = JSON.stringify(upList[getRandomColor()], replaceToUpper);
var arrayjson = new Array()
arrayjson[0] = JSON.stringify(upList[getRandomColor()], replaceToUpper);
arrayjson[1] = JSON.stringify(upList[getRandomColor()], replaceToUpper);
arrayjson[2] = JSON.stringify(upList[getRandomColor()], replaceToUpper);
arrayjson[3] = JSON.stringify(upList[getRandomColor()], replaceToUpper);
arrayjson[4] = JSON.stringify(upList[getRandomColor()], replaceToUpper);
function replaceToUpper(key, value) {
	return value.toString().toUpperCase()
}

    function getRandomColor() {
		var color = function () { return Math.floor(Math.random() * 10) + 1; }
        var colorString = color().toString();

        return colorString;
		console.log(colorString)		
		
    }
	
	function getRndInteger(min, max) {
		return Math.floor(Math.random() * (max - min) ) + min;
	}

	

var btopic = "Find super sales here!" 
console.log(btopic);


for(j=0; j < document.links.length -7; ++j)
	{
	

  }
	document.getElementById('vt2Bnads').innerHTML = '<p>' + upList[getRandomColor()] + '</p>';
	document.getElementById('st2gridit').innerHTML += jsonText;
	document.getElementById('st3gridit').innerHTML += jsonText2;
	/*document.getElementById('container').innerHTML += jsonText;
	
	document.getElementById('st4gridit').innerHTML += jsonTx_Pile;
	document.getElementById('st5gridit').innerHTML += jsonTxPile;
	document.getElementById('st6gridit').innerHTML += jsonTxPile;
	document.getElementById('st7gridit').innerHTML += jsonTxPile;
	document.getElementById('st8gridit').innerHTML += jsonTxPile;
	document.getElementById('st9gridit').innerHTML += jsonTxPile; */



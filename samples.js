	
	var myObj = new Object();
		myObj.quest = "Guest What.";
		myObj.quest1 = " You can find all the ";
		myObj.quest1x = "Best ";
		myObj.itm_no = "Subscription Sites ";
		myObj.quest2 = "At";
		myObj.web_lk = " ShopSoSavy";
		myObj.quest3 = "!";
		myObj.catagories = 100;

		myObj.getcatas = 
			function () {
				return this.catagories;
    };

	document.write(myObj.quest);
	document.write(myObj.quest1);
	document.write(myObj.quest1x);
	document.write(myObj.itm_no);
	document.write(myObj.quest2);
	document.write(myObj.web_lk);
	document.write(myObj.quest3);
	document.write("<br/>");
	
	document.write("<br/>");
	
	var x;

	// This method works.
	if (x == undefined) {
		document.write("Find All The Best Stores To Shop At When You Come here. <br/>");
	}

	
	for(Y=0; Y < document.getElementById('stgridit').length -7; ++Y)
	{

	}
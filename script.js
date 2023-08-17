function validateForm() {
	var status = false;

	const id = document.getElementById("id").value;
	const salasana = document.getElementById("salasana").value;
	const nimi = document.getElementById("nimi").value;
	const osoite = document.getElementById("osoite").value;
	const maa = document.getElementById("maa").value;
	const postinumero = document.getElementById("postinumero").value;
	const email = document.getElementById("email").value;
	let radio1 = document.getElementById('radio1');
	let radio2 = document.getElementById('radio2');
	let check1 = document.getElementById('check1');
	let check2 = document.getElementById('check2');
	let check3 = document.getElementById('check3');
	const lisatietoja = document.getElementById("lisatietoja").value;

	if(id == '') {	//DONE
		document.getElementById("idPaikka").innerHTML = ("Ei saa olla tyhjä");
		document.getElementById("idPaikka1").innerHTML = ("");
		status = false;
	} else if (id.length < 6){
		document.getElementById("idPaikka").innerHTML = ("Liian lyhyt");
		document.getElementById("idPaikka1").innerHTML = ("");
		status = false;
	} else {
		document.getElementById("idPaikka1").innerHTML = ("Hyvä!");
		document.getElementById("idPaikka").innerHTML = ("");
		status = true;
	}

	if(salasana == '') { 	//DONE
		document.getElementById("salasanaPaikka").innerHTML = "Ei saa olla tyhjä";
		document.getElementById("salasanaPaikka1").innerHTML = ("");
		status = false;
	} else {
		document.getElementById("salasanaPaikka1").innerHTML = ("Hyvä!");
		document.getElementById("salasanaPaikka").innerHTML = ("");
		
		status = true;
	}

	if(nimi == '') {	//>DONE
		document.getElementById("nimiPaikka").innerHTML = "Kirjoita nimi"
		document.getElementById("nimiPaikka1").innerHTML = "";
		status = false;
	} else {
		document.getElementById("nimiPaikka1").innerHTML = "Hyvä!";
		document.getElementById("nimiPaikka").innerHTML = "";
		status = true;
	}

	if (osoite == '') {	//done
		document.getElementById("osoitePaikka").innerHTML = ("Ei saa olla tyhjä");
		document.getElementById("osoitePaikka1").innerHTML = ("");
		status = false;
	} else {
		document.getElementById("osoitePaikka1").innerHTML = ("Hyvä!");
		document.getElementById("osoitePaikka").innerHTML = ("");
		status = true;
	}

	if ( document.getElementById('maa').selectedIndex == 0 ) {			//DONE
        document.getElementById("maaPaikka1").innerHTML = "Hyvä!";
        status = true;
	} else if (document.getElementById('maa').selectedIndex == 1){
		document.getElementById("maaPaikka1").innerHTML = "Hyvä!";
        status = true;
	} else if (document.getElementById('maa').selectedIndex == 2) {
		document.getElementById("maaPaikka1").innerHTML = "Hyvä!";
        status = true;
	}

	if(postinumero == '') {	//fix side thingy
		document.getElementById("postinumeroPaikka").innerHTML = ("Ei saa olla tyhjä");
		document.getElementById("postinumeroPaikka1").innerHTML = ("");
		status = false;
	} else if (postinumero.length == 5){
		document.getElementById("postinumeroPaikka1").innerHTML = ("Hyvä!");
		document.getElementById("postinumeroPaikka").innerHTML = ("");
		status = true;
	} else {
		document.getElementById("postinumeroPaikka").innerHTML = ("Postinumerossa pitää olla 5 numeroa");
		document.getElementById("postinumeroPaikka1").innerHTML = ("");
		status = false;
	}
	
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){	//DONE
		document.getElementById("emailPaikka1").innerHTML = ("Hyvä!");
		document.getElementById("emailPaikka").innerHTML = ("");
		status = true;
	} else {
		document.getElementById("emailPaikka").innerHTML = ("Tämä sähköposti ei käy");
		document.getElementById("emailPaikka1").innerHTML = ("");
	  status = false;
	}
	 
   if(radio1.checked){			// done
		document.getElementById("sukupuoliPaikka1").innerHTML = "Hyvä!";
		document.getElementById("sukupuoliPaikka").innerHTML = "";
		status = true;
   } else if(radio2.checked){
		document.getElementById("sukupuoliPaikka1").innerHTML = ("Hyvä!");
		document.getElementById("sukupuoliPaikka").innerHTML = "";
		status = true;
	} else {
		document.getElementById("sukupuoliPaikka").innerHTML = "Valitse";
		document.getElementById("sukupuoliPaikka1").innerHTML = ("");
		status = false;
	} 

	if(check1.checked){			// DONE
		document.getElementById("kieliPaikka1").innerHTML = "Hyvä!";
		document.getElementById("kieliPaikka").innerHTML = "";
		status = true;
   } else if(check2.checked){
		document.getElementById("kieliPaikka1").innerHTML = ("Hyvä!");
		document.getElementById("kieliPaikka").innerHTML = "";
		status = true;
	} else if(check3.checked) {
		document.getElementById("kieliPaikka1").innerHTML = ("Hyvä!");
		document.getElementById("kieliPaikka").innerHTML = "";
		status = true;
	} else {
		document.getElementById("kieliPaikka").innerHTML = "Valitse";
		document.getElementById("kieliPaikka1").innerHTML = ("");
		status = false;
	} 
	
	if (!lisatietoja == "") {				//Done
		document.getElementById("lisatietojaPaikka1").innerHTML = ("Hyvä!");
	} else {
		document.getElementById("lisatietojaPaikka1").innerHTML = ("");
	}
	return status;
}
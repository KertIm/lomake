const form = document.getElementById("form");
const id = document.getElementById('id');
const salasana = document.getElementById('salasana');
const nimi = document.getElementById('nimi');
/**const osoite = document.getElementById('osoite'); */
/*const maa = document.getElementById("maat").;	oikea muoto laita 
const postinumero = document.getElementById('postinumero');
const email = document.getElementById('email');*/
/**const sukupuoli = document.getElementById('sukupuoli').;	 */
/**const kieli = document.getElementById('kieli').;	 
const lisatietoja = document.getElementById('lisatietoja');*/

function validateForm() {
	var status = false;

	const id = document.getElementById("id").value;
	const salasana = document.getElementById("salasana").value;
	const nimi = document.getElementById("nimi").value;
	/**
	const osoite = osoite..trim();
	maa 
	const postinumero = postinumero..trim();
	const email = email..trim();*/
	/**const sukupuoli = sukupuoli..trim();
	const kieli = kieli..trim(); */
	/**const lisatietoja = lisatietoja..trim(); */

	if(id == '') {	//DONE
		document.getElementById("idPaikka").innerHTML = ("tyhjä");
		status = false;
	} else if (id.length < 6){
		document.getElementById("idPaikka").innerHTML = ("Liian lyhyt");
		status = false;
	} else {
		document.getElementById("idPaikka").innerHTML = ("läpi");
		status = true;
	}

	if(salasana == '') { 	//DONE
		document.getElementById("salasanaPaikka").innerHTML = "ei saa olla tyhjä";
		status = false;

	} else {
		document.getElementById("salasanaPaikka").innerHTML = ("läpi");
		status = true;
	}

	if(nimi == '') {	//>DONE
		document.getElementById("nimiPaikka").innerHTML = "Kirjoita nimi"
		status = false;
	} else {
		document.getElementById("nimiPaikka").innerHTML = "läpi";
		status = true;
	}
	return status;
	

	/*osoite */

	/*maa */

	/*postinumero */
/** 
	if(email === '') {
		setErrorFor(email, 'Sähköposti ei voi olla tyhjä');
	} else if (!isEmail(email)) {     
		setErrorFor(email, 'Ei hyväksyttävä sähköposti');
	} else {
		setSuccessFor(email);
	}*/
	/**sukupuoli 
	if(document.getElementById('mies').checked == true) {   
         document.write("");   
    } else {  
         document.write("");   
    } */
	/**kieli */

	/**lisätietoja-valinnainen */
	
}
/**
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}	 
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}*/
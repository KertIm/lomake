const form = document.getElementById("form");

const id = document.getElementById('id');
const salasana = document.getElementById('salasana');
const nimi = document.getElementById('nimi');
const osoite = document.getElementById('osoite');
/*const maa = document.getElementById("maat").value;	oikea muoto laita */
const postinumero = document.getElementById('postinumero');
const email = document.getElementById('email');
/**const sukupuoli = document.getElementById('sukupuoli').value;	 */
/**const kieli = document.getElementById('kieli').value;	 */
const lisatietoja = document.getElementById('lisatietoja');

/**form.addEventListener('lähetä', e => { //error
	e.preventDefault();
	
	checkInputs();
}); */

function checkInputs() {

	const idValue = id.value.trim();
	const salasanaValue = salasana.value.trim();
	const nimiValue = nimi.value.trim();
	const osoite = osoite.value.trim();
	/**maa */
	const postinumero = postinumero.value.trim();
	const emailValue = email.value.trim();
	/**const sukupuoli = sukupuoli.value.trim();
	const kieli = kieli.value.trim(); */
	const lisatietoja = lisatietoja.value.trim();

	if(idValue === '') {
		setErrorFor(id, 'ID ei voi olla tyhjä');
	} else if (id < 6){
		setErrorFor(id, 'ID on liian lyhyt');
	} else {
		setSuccessFor(id);
	}

	if(salasanaValue === '') {
		setErrorFor(salasana, 'salasana ei voi olla tyhjä');
	} else {
		setSuccessFor(salasana);
	}

	if(nimiValue === '') {
		setErrorFor(nimi, 'Nimi ei voi olla tyhjä');
	} else {
		setSuccessFor(nimi);
	}
	/*osoite */

	/*maa */

	/*postinumero */

	if(emailValue === '') {
		setErrorFor(email, 'Sähköposti ei voi olla tyhjä');
	} else if (!isEmail(emailValue)) {      /*got no glue */ 
		setErrorFor(email, 'Ei hyväksyttävä sähköposti');
	} else {
		setSuccessFor(email);
	}
	/**sukupuoli */
	if(document.getElementById('mies').checked == true) {   
         document.write("");   
    } else {  
         document.write("");   
    } 
	/**kieli */

	/**lisätietoja-valinnainen */
	
}
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
}
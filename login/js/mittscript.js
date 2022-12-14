/* Kommentarer i 
   JavaScript kan 
   gå over flere linjer	   
*/
	
// eller bare en enkelt linje 


// Nå skal vi definere en funksjon som henter variabler fra HTML-form

function variablerFraForm(){
	
	// det er god praksis å deklarere lokale variabler (variabler som benyttes inne i en funksjon) i starten av funksjonen
	
	let variabel_brukernavn ="";
	let variabel_passord ="";
	let korrekt_brukernavn ="TheGaiaProject";
	let korrekt_passord ="pz";
	let myOutput = "";
	let myDebug = 0;
	// let returVerdi = "";

	// tilordne lokale variabler med verdier fra skjema/form
	// vi bruker document.getElementById(id/variabelnavn_i_form)

	variabel_brukernavn = document.getElementById("brukernavn").value;
	variabel_passord = document.getElementById("passord").value;

	
	// console.log brukes for utvikling/debugging
	// output til console.log i browser inspector (ctrl/cmd+i)
	// vis variablene i konsoll-loggen
	
	if(myDebug == 1){
		console.log("Brukernavn : " + variabel_brukernavn);
		console.log("Passord : " + variabel_passord);
	}
	if(	(variabel_brukernavn == "") || (variabel_passord == "")	)	{
		myOutput = myOutput + "Du må skrive in brukernavn og passord" + "!";

	} else{
	
		//sjekk brukernavn og passord
		if(		(variabel_brukernavn == korrekt_brukernavn) && (variabel_passord == korrekt_passord)	) {
			myOutput = myOutput + "Velkommen " + variabel_brukernavn + "!";

		}
		else{
			myOutput = myOutput + "Feil Bruker navn eller Passord er feil <br> prøv på nytt";

		}
	}
	// legge til det som skal vises i html-filen i variabelen myOutput
	//

	// myOutput = "Hei " + variabel_brukernavn + " !";
	
	// vise output i en spesifikk paragraph <p id="output"> i html-filen	
	document.getElementById("output").innerHTML = myOutput;	
	
}

function comprobar()
{
	var primo=window.prompt("Dime numero primo del 1 al 10");

	if (primo==1||primo==2||primo==3)
{
	window.alert("Lo has conseguido tio!!")
}
}

function viajar(){
	var viaje=window.prompt("Dime donde quieres viajar");
	
	switch (viaje) {
	  case "Roma":
		  window.alert("Presupuesto : 500 euros");
		  break;
	  case "roma":
		  window.alert("Presupuesto : 500 euros");
	    break;
	  case "Paris":
		  window.alert("Presupuesto : 450 euros");
		  break;
	  case "paris":
		  window.alert("Presupuesto : 450 euros");
		  break;
	  case "París":
		  window.alert("Presupuesto : 450 euros");
	    break;
	  case "parís":
		  window.alert("Presupuesto : 450 euros");
		  break;
	  case "Berlin":
		  window.alert("Presupuesto : 586.56 euros");
		  break;
	  case "Berlín":
		  window.alert("Presupuesto : 586.56 euros");
		  break;
	  case "berlín":
		  window.alert("Presupuesto : 586.56 euros");
		  break;
	  case "berlin":
		  window.alert("Presupuesto : 586.56 euros");
	    break;
	  default:
		  window.alert("Pide Presupuesto");
	}
}
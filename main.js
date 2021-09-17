const fichaSocio=[];

class Datos {
    constructor(nombre,edad,telefono,mail){
        this._nombre = nombre;
        this._edad = edad;
        this._telefono = telefono;
        this._mail = mail;
    }
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }
    get telefono(){
        return this._telefono;
    }

    set telefono(telefono){
        this._telefono =  telefono;
    }
    get mail(){
        return this._mail;
    }

    set mail(mail){
        this._mail = mail;
    }
}

// botón que dispara el programa (con Jquery)
const btn1 = $('#btn_1');
btn1.on('click', () => registrarPersona());

function registrarPersona(){
    const forma = document.forms["form"];
    const nombre = forma["nombre"];
    const edad = forma["edad"];
    const telefono = forma["telefono"];
    const mail = forma["mail"];

    if (nombre.value != "" && edad.value != "" && telefono.value != "" && mail.value != "" ){
        const persona = new Datos(nombre.value, edad.value, telefono.value, mail.value);
        crearRegistro(persona, fichaSocio);
        vaciarCampos();
    }
    else {
        mostrarError("Por favor ingrese todos los datos");
        vaciarCampos();
    }   
}

function crearRegistro(persona, fichaSocio) {
    console.log(persona);
    fichaSocio.push(persona);
    const texto = document.createElement("tr");
    texto.id = "datosPersona";
    texto.innerHTML =`<td>${persona.nombre}</td>
    <td>${persona.edad}</td>
    <td>${persona.telefono}</td>
    <td>${persona.mail}</td>`
    document.getElementById("personaId").appendChild(texto);
    localStorage.setItem("datosPersona",JSON.stringify(fichaSocio));
    alert("Datos enviados Exitosamente. Muchas Gracias!");
}

function vaciarCampos() {
    $("#nombre").val("");
    $("#edad").val("");
    $("#telefono").val("");
    $("#mail").val("");  
}



const formulario = $("#form");

  //form de contacto enviada satisfactoriamente
  $('#enviarForm').on('click', () => alert('Gracias por enviar su consulta!'));


anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



	// Accordion
	// initAccordion('.accordion', true);
	// initAccordion('.accordion', false);

	function initAccordion(elem, option){
		document.addEventListener('click', function (e) {
			// Daca elementul nu este .acc-title, nu fa nimic
			if (!e.target.matches(elem+' .acc-title')) return;
			else {
				// Daca parintele (.acc-container) lui .acc-title are clasa .acc-active
				if(!e.target.parentElement.classList.contains('acc-active')) {
					// Daca option==true, sterge clasa .acc-active pentru celelalte elemente
					if(option==true) {
						var elementList = document.querySelectorAll(elem+' .acc-container');
						Array.prototype.forEach.call(elementList, function (e) {
	                        e.classList.remove('acc-active');
						});
					}
					// Daca nu are clasa .acc-active, adauga clasa .acc-active
					e.target.parentElement.classList.add('acc-active');
				} else {
					// Daca are clasa .acc-active, remove clasa .acc-active
					e.target.parentElement.classList.remove('acc-active');
				}
			}
		});
	}

	// Deschide doar unul, inchide celelalte
	initAccordion('.accordion.acc-single-open', true);
	// Deschide multiple, fara a inchide celelalte
	initAccordion('.accordion.acc-multiple-open', false);

  function calcularIMC() {
    var nombre = document.getElementById('nombre').value;
    var alturaEnCentimetros = parseInt(document.getElementById('altura').value);
    var alturaEnMetros = alturaEnCentimetros / 100;
    var pesoEnKilos = parseInt(document.getElementById('peso').value);
  
    var imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
    var clasificacion;
    
    if (imc < 18.5) {
      clasificacion = 'estás muy delgado';
    } else if (imc < 25) {
      clasificacion = 'estás saludable';
    } else {
      clasificacion = 'tienes sobrepeso';
    }
    /* Consejo:
    
    */
    var respuesta = 'Hola, tu IMC es ' + imc + ' y tu ' + clasificacion;
    alert(respuesta);
  }
  
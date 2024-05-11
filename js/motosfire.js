console.log("prueba con firebase!")

const firebaseConfig = {
	apiKey: "AIzaSyA-GlmskHVOmxsl73dzrnYe0ynnUHyWJKg",
	authDomain: "motos-44a2b.firebaseapp.com",
	projectId: "motos-44a2b",
	storageBucket: "motos-44a2b.appspot.com",
	messagingSenderId: "761686545023",
	appId: "1:761686545023:web:bb393965c3c3a8a09ae54a"
  };


  // Inicializa Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const usuariosRef = db.collection('tus_motos');

const motos = [];

usuariosRef.get().then((querySnapshot) => {
	// Itera sobre cada documento en la colección
		
	querySnapshot.forEach((doc) => {
	  // Accede a los datos de cada documento
	  const moto = doc.data();
	  console.log(moto); // Muestra los datos del usuario en la consola
	  motos.push(doc.data());
	});


	console.log("aqui es");
	motos.forEach(moto =>{
		console.log(moto.modelo);
	});

	motos.forEach(moto =>{	
		//creamos cada elemento HTML
	
		const card = document.createElement("div");
		card.classList.add("card");
		const contenido = document.createElement("div");
		  contenido.classList.add("contenido");
		const model = document.createElement("h3");
		model.classList.add("model");
		const descrip = document.createElement("p");
		descrip.classList.add("descrip");
		const precio = document.createElement("h2");
		precio.classList.add("precio");
		const imagen = document.createElement("div");
		imagen.classList.add("imagen");
		const img = document.createElement("img");
		img.classList.add("moto");	
	
		//Agregamos los valores que traimos de la DB y dejamos en un JSON
		model.textContent = moto.modelo;
		descrip.textContent = moto.descripcion;
		precio.textContent = "Con un precio de " + moto.precio;
		img.src = moto.url_img;
		img.alt = "motos";
	
		//inyectamos los elementos al DOM
		contenido.appendChild(model);
		contenido.appendChild(descrip);
		contenido.appendChild(precio);
		imagen.appendChild(img);
		card.appendChild(contenido);
		card.appendChild(imagen);
	
		tarjetas.appendChild(card);
	
	});

  }).catch((error) => {
	console.error('Error al obtener usuarios:', error);
  });

  //console.log("los datos son:");
  console.log("aqui vamos");
  
 

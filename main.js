window.addEventListener('load', ()=>{
    let indice = 0;
    showTechnologies(indice);
})

// Establecemos los valores para los detalles del modal
var modal = document.getElementById("ventanaModal");
//Hace referencia al div 'modal-content'
var modalContent = document.querySelector('.modal-content'); 



const tecnologias = [{
    nombre: 'HTML',
    image: `./img/html-5.png`,
    next: `./img/next.png`,
    previous: `./img/previous.png`,
    descripcion: 
    ' HTML lo aprendi mediante cursos en youtube hace ya 3 años. Fue lo primero que estudie sobre el desarrollo web. Los canales que me apoyaron para poder entender lo esencial de esta tecnologia fueron "pildorasinformaticas" y "Soy Dalto". Mas adelante fui repasando sobre otros cursos de platzi para entender mas a profundidas otros conocimientos sobre este lenguaje de etiquetas.'
    },
    {
    nombre: 'CSS',
    image: './img/prueba2.png',
    next: `./img/next.png`,
    previous: `./img/previous.png`,
    descripcion: 'Al igual que con HTML, aprendi sobre este lenguaje gracias a "pildorasinformaticas" y "Soy Dalto". Luego mediante foros o practicas independientes fui sumergiendome un poco mas sobre esta tecnologia.'
    },
    {
    nombre: 'JavaScript',
    image: './img/prueba3.png',
    next: `./img/next.png`,
    previous: `./img/previous.png`,
    descripcion: 'JavaScript es la impresionante tecnologia sobre la que mas informacion adquiri a lo largo de mi aprendizaje. Lo aprendi por diferentes sitios/canales desde "pildorasinformaticas" a cursos de Platzi, Udemy. Es con la herramienta que realice todas las interacciones que se van a encontrar en la pagina. Aunque pudo haber sido mas facil apoyarse con otras tecnologias en varios aspectos decidi ir por JavaScript ya que me habia establecido utilizar solo estas 3 tecnologias para realizar el portfolio (HTML, CSS, JavaScript)'
    },
    {
    nombre: 'ReactJS',
    image: './img/prueba4.png',
    next: `./img/next.png`,
    previous: `./img/previous.png`,
    descripcion: 'Aunque actualemente sigo en el aprendizaje de esta tecnologia al momento de que estes leyendo esto, decidi lanzarme a ReactJS al momento de terminar lo que tenia como meta en cuanto a las 3 anteriores tecnologias vistas. Estoy aprendiendola mediante un curso de platzi donde me encuentro realizando una app capaz de establecer tareas propuestas por uno ("TODOs APP"). '
    },
    {
    nombre: 'NodeJS',
    image: './img/prueba5.png',
    next: `./img/next.png`,
    previous: `./img/previous.png`,
    descripcion: 'Conoci y aprendi algunos de los metodos de trabajar con la parte del servidor mediante NodeJS. Lo aprendi por cursos en Platzi y distintos canales de youtube como "HolaMundo" o "Fazt". Actualmente no tengo un gran uso de esta tecnologia aunque estoy en proceso de realizar nuevos proyectos que tengan la necesidad de un backedn para poder aplicar lo aprendido'
    }
]

function navbarMenuInteractions(){
    const inicio = document.getElementById('inicio').addEventListener('click', ()=>{
        window.scrollTo(0, 0);
    });
    
    
    const sobreMi = document.getElementById('sobre-mi').addEventListener('click', ()=>{
        window.scrollTo(0, 800);
    });
    
    const conocimientos = document.getElementById('conocimientos').addEventListener('click', ()=>{
        window.scrollTo(0, 1650);
    });
    
    
    const proyectos = document.getElementById('proyectos').addEventListener('click', ()=>{
        window.scrollTo(0, 2465);
    });
    
    const contacto = document.getElementById('contacto').addEventListener('click', ()=>{
        window.scrollTo(0, 3000);
    });
}

function showTechnologies(indice){
    const scrollContainer = document.querySelector('.scroll-container');

    const tecnologia = tecnologias[indice].nombre;

    const div = document.createElement('div');
    div.classList.add(`tecnologia`, `${tecnologias[indice].nombre}`);

    const img = document.createElement('img');
    img.setAttribute('id', 'abrirModal');
    img.classList.add('tecnologia-img');
    img.src = (`${tecnologias[indice].image}`);
    // img.addEventListener('click', ()=> {
    //     modal.style.display = "block";
    // })
    img.addEventListener('click', () => {
        showModal(indice);
    });

    const h2 = document.createElement('h2');
    h2.innerText = tecnologia;

    const next = document.createElement('img');
    next.classList.add('next');
    next.src = (`${tecnologias[indice].next}`);
    next.addEventListener('click', ()=> {
        if(indice < tecnologias.length-1)
        {
            div.classList.add('oculto');
            showTechnologies(indice+1);
        }else{
            div.classList.add('oculto');
            indice = 0;
            showTechnologies(indice);
        }
    })

    const previous = document.createElement('img');
    previous.classList.add('previous');
    previous.src = (`${tecnologias[indice].previous}`)
    previous.addEventListener('click', ()=>{
        div.classList.add('oculto');
        if(indice == 0)
        {
            indice = tecnologias.length-1;
            showTechnologies(indice);
        }else{
            showTechnologies(indice-1);
        }
    })

    div.append(h2, img, previous, next);
    scrollContainer.append(div);
} 

function showModal(indice){
    modal.style.display = 'block';
    modalContent.innerText = '';

    const imgModal = document.createElement('img');
    imgModal.src = tecnologias[indice].image;

    const divImgModal = document.createElement('div');
    divImgModal.classList.add('imgModal');
    divImgModal.append(imgModal);

    const cerrarModal = document.createElement('p');
    cerrarModal.classList.add('cerrar');
    cerrarModal.innerText = 'X';
    cerrarModal.addEventListener('click', () =>{
        modal.style.display = 'none';
    })

    const tittleModal = document.createElement('h2');
    tittleModal.classList.add('tittleModal');
    tittleModal.innerHTML = tecnologias[indice].nombre;

    const descripcionModal = document.createElement('p');
    descripcionModal.classList.add('descripcionModal');
    descripcionModal.innerHTML = tecnologias[indice].descripcion;

    const divInfoModal = document.createElement('div');
    divInfoModal.classList.add('infoModal');
    divInfoModal.append(cerrarModal, tittleModal, descripcionModal);

    modalContent.append(divImgModal, divInfoModal);

    // Si el usuario hace clic fuera de la ventana, se cierra.
    window.addEventListener("click",function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
});
}


navbarMenuInteractions();


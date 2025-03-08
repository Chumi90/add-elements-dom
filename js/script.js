 // Aquí tu código
const pulsar=document.getElementById('agregar'); //Obtenemos el ID del HTML para el botón que vamos a clicar
const addtext=document.getElementById('lista'); //Obtenemos el ID de <ul></ul> donde vamos a añadir nuestra lista.
//const elementLi=document.createElement('li'); //Agregar como un elemento hijo al UL para que se cree la lista, pero no es válido fuera dado que no podemos incrementar la lista, solo podríamos hacerlo una vez y el resto de datos se quedarían en un solo <li></li> (no se crean nuevos li)
/* Código Correcto*/
pulsar.addEventListener('click', function(){
    const elementLi=document.createElement('li'); //Agregar como un elemento hijo al UL para que se cree la lista cada vez que gamos la función tendremos que incrementar la lista por eso tiene que crearse un nuevo elemento <li> y estar dentro de la función.
    addtext.appendChild(elementLi); //Hacemos que elementLi sea hijo del ID Lista que es <ul></ul>
    elemt=prompt('Agregar elemento'); //Pedimos el dato
    elementLi.insertAdjacentHTML('afterbegin',elemt); //After introduce el elemt dentro de <li></li>.
})

/* NO VALIDO. Notas Abel y explicaciones*//*
pulsar.addEventListener('click', function(){
    const elementLi=document.createElement('li'); //Agregar como un elemento hijo al UL para que se cree la lista cada vez que gamos la función tendremos que incrementar la lista por eso tiene que crearse un nuevo elemento <li> y estar dentro de la función.
    addtext.appendChild(elementLi); //Hacemos que elementLi sea hijo del ID Lista que es <ul></ul>
    elemt=prompt('Agregar elemento'); //Pedimos el dato
    elementLi.insertAdjacentHTML('beforebegin',elemt); //After introduce el dato primero y luego crea el --> elemt \n<li></li>
})*/
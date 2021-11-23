
// Clique sur 'People' et affichage des noms de personnage

$(".people").click(()=>{
    $.get("https://swapi.dev/api/people/").done((data)=>{
        $(".secondaire").css('display','none')
        $(".principal").html("")
        $(".principal").css('display',"block")       
        $(".bouton").css('display',"flex")
        for (let i = 0; i<data.results.length;i++){
            $(".principal").html($(".principal").html()+"<div class='clique' onclick='clickperso(\""+data.results[i].url+"\")'>"+data.results[i].name+"</div><br>")
        }
        if (data.next !== null){
            $('.next').css('display','block')
            $(".next").attr('onclick', 'clicknext("'+data.next+'","clickperso")')
        }
        else {
            $(".next").css('display','none')
        }

        if (data.previous !== null){
            $('.previous').css('display','block')
            $('.previous').attr('onclick', 'clickprevious("'+data.previous+'","clickperso")')
        }
        else {
            $(".previous").css('display','none')
        } 
    })
})

// Clique sur 'Films' et affichage des films

$(".films").click(()=>{
    $.get("https://swapi.dev/api/films/").done((data)=>{
        $('.secondaire').css('display','none')
        $(".principal").html("")
        $(".principal").css('display',"block")
        $(".bouton").css('display',"flex")
        for (let i = 0; i<data.results.length;i++){
            $(".principal").html($(".principal").html()+"<div class='clique' onclick='clickfilm(\""+data.results[i].url+"\")'>"+data.results[i].title+"</div><br>")
        }
        if (data.next !== null){
            $('.next').css('display','block')
            $(".next").attr('onclick', 'clicknext("'+data.next+'","clickfilm")')
        }
        else {
            $(".next").css('display','none')
        }

        if (data.previous !== null){
            $('.previous').css('display','block')
            $('.previous').attr('onclick', 'clickprevious("'+data.previous+'","clickfilm")')
        }
        else {
            $(".previous").css('display','none')
        } 
    })
})

// Clique sur 'Starships' et affichage des noms vaisseau

$(".starships").click(()=>{
    $.get("https://swapi.dev/api/starships/").done((data)=>{
        $(".secondaire").css('display','none')
        $(".principal").html("")
        $(".principal").css('display',"block")       
        $(".bouton").css('display',"flex")
        for (let i = 0; i<data.results.length;i++){
            $(".principal").html($(".principal").html()+"<div class='clique' onclick='clickstar(\""+data.results[i].url+"\")'>"+data.results[i].name+"</div><br>")
        }
        if (data.next !== null){
            $('.next').css('display','block')
            $(".next").attr('onclick', 'clicknext("'+data.next+'","clickstar")')
        }
        else {
            $(".next").css('display','none')
        }

        if (data.previous !== null){
            $('.previous').css('display','block')
            $('.previous').attr('onclick', 'clickprevious("'+data.previous+'","clickstar")')
        }
        else {
            $(".previous").css('display','none')
        } 
    })
})

// Clique sur 'Vehicles' et affichage des noms de vehicules

$(".vehicles").click(()=>{
    $.get("https://swapi.dev/api/vehicles/").done((data)=>{
        $(".secondaire").css('display','none')
        $(".principal").html("")
        $(".principal").css('display',"block")       
        $(".bouton").css('display',"flex")
        for (let i = 0; i<data.results.length;i++){
            $(".principal").html($(".principal").html()+"<div class='clique' onclick='clickvehicles(\""+data.results[i].url+"\")'>"+data.results[i].name+"</div><br>")
        }
        if (data.next !== null){
            $('.next').css('display','block')
            $(".next").attr('onclick', 'clicknext("'+data.next+'","clickvehicles")')
        }
        else {
            $(".next").css('display','none')
        }

        if (data.previous !== null){
            $('.previous').css('display','block')
            $('.previous').attr('onclick', 'clickprevious("'+data.previous+'","clickvehicles")')
        }
        else {
            $(".previous").css('display','none')
        } 
    })
})


// Clique sur 'Species' et affichage des especes

$(".species").click(()=>{
    $.get("https://swapi.dev/api/species/").done((data)=>{
        $(".secondaire").css('display','none')
        $(".principal").html("")
        $(".principal").css('display',"block")       
        $(".bouton").css('display',"flex")
        for (let i = 0; i<data.results.length;i++){
            $(".principal").html($(".principal").html()+"<div class='clique' onclick='clickspecies(\""+data.results[i].url+"\")'>"+data.results[i].name+"</div><br>")
        }
        if (data.next !== null){
            $('.next').css('display','block')
            $(".next").attr('onclick', 'clicknext("'+data.next+'","clickspecies")')
        }
        else {
            $(".next").css('display','none')
        }

        if (data.previous !== null){
            $('.previous').css('display','block')
            $('.previous').attr('onclick', 'clickprevious("'+data.previous+'","clickspecies")')
        }
        else {
            $(".previous").css('display','none')
        } 
    })
})

// Clique sur 'Planets' et affichage des planetes

$(".planets").click(()=>{
    $.get("https://swapi.dev/api/planets/").done((data)=>{
        $(".secondaire").css('display','none')
        $(".principal").html("")
        $(".principal").css('display',"block")       
        $(".bouton").css('display',"flex")
        for (let i = 0; i<data.results.length;i++){
            $(".principal").html($(".principal").html()+"<div class='clique' onclick='clickplanets(\""+data.results[i].url+"\")'>"+data.results[i].name+"</div><br>")
        }
        if (data.next !== null){
            $('.next').css('display','block')
            $(".next").attr('onclick', 'clicknext("'+data.next+'","clickplanets")')
        }
        else {
            $(".next").css('display','none')
        }

        if (data.previous !== null){
            $('.previous').css('display','block')
            $('.previous').attr('onclick', 'clickprevious("'+data.previous+'","clickplanets")')
        }
        else {
            $(".previous").css('display','none')
        } 
    })
})



// Fonction de clique et d'affichage du bouton "Next"

function clicknext(url,nomDeFonction){
    $.get(url).done((data)=>{
        $(".secondaire").css('display','none')
        $(".principal").html("")
        $(".principal").css('display',"block")       
        $(".bouton").css('display',"flex")
        for (let i = 0; i<data.results.length;i++){
            $(".principal").html($(".principal").html()+"<div class='clique' onclick='"+nomDeFonction+"(\""+data.results[i].url+"\")'>"+data.results[i].name+"</div><br>")
        }
        if (data.next !== null){
            $('.next').css('display','block')
            $(".next").attr('onclick', 'clicknext("'+data.next+'","'+nomDeFonction+'")')
        }
        else {
            $(".next").css('display','none')
        }

        if (data.previous !== null){
            $('.previous').css('display','block')
            $('.previous').attr('onclick', 'clickprevious("'+data.previous+'","'+nomDeFonction+'")')
        }
        else {
            $(".previous").css('display','none')
        }  
    })
}

// Fonction de clique et d'affichage du bouton "Previous"

function clickprevious(url,nomDeFonction){
    $.get(url).done((data)=>{
        $(".secondaire").css('display','none')
        $(".principal").html("")
        $(".principal").css('display',"block")       
        $(".bouton").css('display',"flex")
        for (let i = 0; i<data.results.length;i++){
            $(".principal").html($(".principal").html()+"<div class='clique' onclick='"+nomDeFonction+"(\""+data.results[i].url+"\")'>"+data.results[i].name+"</div><br>")
        }
        if (data.next !== null){
            $('.next').css('display','block')
            $(".next").attr('onclick', 'clicknext("'+data.next+'","'+nomDeFonction+'")')
        }
        else {
            $(".next").css('display','none')
        }

        if (data.previous !== null){
            $('.previous').css('display','block')
            $('.previous').attr('onclick', 'clickprevious("'+data.previous+'","'+nomDeFonction+'")')
        }
        else {
            $(".previous").css('display','none')
        }   
    })
}


// Fonction de clique sur les personnage et affichage des infos detaillées dans la div secondaire

function clickperso(url){
    $.get(url).done((data)=>{
        $(".secondaire").html('')
        $(".secondaire").css('display','block')
        $(".secondaire").html($(".secondaire").html()+"Nom : "+data.name+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Taille : "+data.height+' Cm' +"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Poids : "+data.mass+" Kg <br><br>")
        $(".secondaire").html($(".secondaire").html()+"Couleur de cheveux : "+data.hair_color+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Couleur de peau : "+data.skin_color+"<br><br>")
        
    }) 
}


// Fonction de clique sur les films et affichage des infos detaillées dans la div secondaire

function clickfilm(url){
    $.get(url).done((data)=>{
        $(".secondaire").html('')
        $(".secondaire").css('display','block')
        $(".secondaire").html($(".secondaire").html()+"Titre : "+data.title+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Episode : "+data.episode_id+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Synopsis : "+data.opening_crawl+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Premiere diffusion : "+data.release_date+"<br><br>")
    
    }) 
}

// Fonction de clique sur les vaisseaux et affichage des infos detaillées dans la div secondaire

function clickstar(url){
    $.get(url).done((data)=>{
        $(".secondaire").html('')
        $(".secondaire").css('display','block')
        $(".secondaire").html($(".secondaire").html()+"Nom : "+data.name+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Modèle : "+data.model+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Fabricant : "+data.manufacturer+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Valeur : "+data.cost_in_credits+" credits<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Taille : "+data.length+" M<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Vitesse atmospherique : "+data.max_atmosphering_speed+" Km/h<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Equipage : "+data.crew+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Passager max : "+data.passengers+"<br><br>")
    })
}


// Fonction de clique sur les vehicules et affichage des infos detaillées dans la div secondaire

function clickvehicles(url){
    $.get(url).done((data)=>{
        $(".secondaire").html('')
        $(".secondaire").css('display','block')
        $(".secondaire").html($(".secondaire").html()+"Nom : "+data.name+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Modèle : "+data.model+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Fabricant : "+data.manufacturer+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Valeur : "+data.cost_in_credits+" credits<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Taille : "+data.length+" M<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Vitesse atmospherique : "+data.max_atmosphering_speed+" Km/h<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Equipage : "+data.crew+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Passager max : "+data.passengers+"<br><br>")
    })
}

// Fonction de clique sur les especes et affichage des infos detaillées dans la div secondaire

function clickspecies(url){
    $.get(url).done((data)=>{
        $(".secondaire").html('')
        $(".secondaire").css('display','block')
        $(".secondaire").html($(".secondaire").html()+"Nom : "+data.name+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Classification : "+data.classification+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Designation : "+data.designation+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Taille moyenne : "+data.average_height+" Cm<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Couleurs de peau : "+data.skin_colors+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Couleurs de cheveux : "+data.hair_colors+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Durée de vie : "+data.everage_lifespan+" ans<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Langue : "+data.language+"<br><br>")
        
    })
}

// Fonction de clique sur les planetes et affichage des infos detaillées dans la div secondaire

function clickplanets(url){
    $.get(url).done((data)=>{
        $(".secondaire").html('')
        $(".secondaire").css('display','block')
        $(".secondaire").html($(".secondaire").html()+"Nom : "+data.name+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Periode de rotation : "+data.rotation_period+" heures<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Periode de revolution : "+data.orbital_period+" jours<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Diametre : "+data.diameter+" Km<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Gravité : "+data.gravity+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Type de terrain : "+data.terrain+"<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Eau en surface : "+data.surface_water+" %<br><br>")
        $(".secondaire").html($(".secondaire").html()+"Population : "+data.population+"<br><br>")
        
    })
}
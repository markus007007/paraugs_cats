//console.log(1)
let zina = document.querySelector('.zina');
    let zinas = document.querySelector('.cataZina');

function sutitZinu()
{
    console.log('sutitZinu()darbojas');
    
    zinas.innerHTML = zinas.innerHTML+'<br>'+zina.value;
}

function ieladetCataZinas()
{
    let datiNoServera = await fetch('chatazinas.txt');
    let dati = await datiNoServera.text

}
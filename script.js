//console.log(1)
let zina = document.querySelector('.zina');
    let zinas = document.querySelector('.cataZina');

function sutitZinu()
{
    console.log('sutitZinu()darbojas');
    
    zinas.innerHTML = zinas.innerHTML+'<br>'+zina.value;
}






const btnEnviar = document.getElementById('btn')


btnEnviar.addEventListener('click', () =>{
    const input = document.getElementById('input').value

    const listas = JSON.parse(localStorage.getItem('listas')) || [];
    listas.push({ input });
    localStorage.setItem('listas', JSON.stringify(listas));
})








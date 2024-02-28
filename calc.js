/* Calculadora */

document.getElementById('calculadora').addEventListener('input', (e) => {
    document.querySelector('.calculadora__display').innerText = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(e.target.value * 3)

}) 

function mostrarPlanes() {
    const planesSection = document.getElementById('planes');
    planesSection.style.display = 'block';
    planesSection.scrollIntoView({ behavior: 'smooth' });
}

function ocultarPlanes() {
    const planesSection = document.getElementById('planes');
    planesSection.style.display = 'none';
}


function seleccionarPlan(nombrePlan) {
    const precios = {
        'Básico': '7.99',
        'Estándar': '10.99',
        'Premium': '14.99'
    };

    alert(`Has seleccionado el plan ${nombrePlan} por ${precios[nombrePlan]}/mes.`);
}

// Dataset
const serviciosData = {
    postoperatorios: {
        img: "/public/images/postoperatorios.png",
        title: "Cuidado y Rehabilitación Estética Postoperatoria",
        text: "Acelera tu recuperación con nuestro tratamiento especializado. Mejoramos la cicatrización y los resultados estéticos tras procedimientos quirúrgicos, ayudándote a recuperar tu bienestar y confianza."
    },
    traumatologicos: {
        img: "/public/images/traumatologico.jpg",
        title: "Rehabilitación Traumatológica Funcional",
        text: "Recupera tu funcionalidad con nuestro tratamiento especializado en rehabilitación traumatológica. Optimiza la recuperación de tus lesiones y vuelve a tu mejor estado físico con nuestro enfoque personalizado."
    },
    lesiones: {
        img: "/public/images/deportivas.jpg",
        title: "Tratamiento de Lesiones Deportivas",
        text: "Optimiza tu recuperación con nuestro tratamiento especializado en lesiones deportivas. Nuestro enfoque personalizado te ayuda a volver a tus actividades con mayor rapidez y eficacia."
    },
    dermatofuncional: {
        img: "/public/images/dermato.jpg",
        title: "Salud y Rejuvenecimiento de la Piel",
        text: "Mejora tu salud y apariencia de la piel con nuestro tratamiento dermatofuncional. Ofrecemos soluciones efectivas para problemas dermatológicos, combinando tecnología avanzada con cuidados personalizados."
    }
};

// Función para actualizar el contenido del artículo
function updateServicio(selectedId) {
    const data = serviciosData[selectedId];
    document.getElementById('servicios-img').src = data.img;
    document.getElementById('servicios-title').textContent = data.title;
    document.getElementById('servicios-text').textContent = data.text;
}

// Añadir manejadores de eventos a los botones de radio
document.querySelectorAll('input[name="texto"]').forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.checked) {
            updateServicio(this.id);
        }
    });
});

// Actualizar el contenido del servicio al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    updateServicio(document.querySelector('input[name="texto"]:checked').id);
});

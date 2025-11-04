<template>
  <nav class="nav-bar">
    <img src="@/assets/images/logoivvi1.png" alt=/>

    
    <ul class="nav-links">
      <li><a href="#inicio">INICIO</a></li>
      <li><a href="#sobre-nosotros">SOBRE NOSOTROS</a></li>
      <li><a href="#diseños">DISEÑOS</a></li>
      <li><a href="#cta-probar">PROBADOR</a></li>

    </ul>
  </nav>
</template>

<script setup>
// No necesitas lógica de JavaScript aquí para un navbar simple.
</script>

<style scoped>
/*
  ======================================================
  ESTILOS PARA src/componentes/NavBar.vue
  ======================================================
*/

.nav-bar {
  position: fixed; /* Barra fija en la parte superior */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
  
  display: flex;
  justify-content: space-between; /* Logo a la izquierda, enlaces a la derecha */
  align-items: center; /* Centra verticalmente los ítems */
  
  background-color: #a9a9a9; /* Color de fondo gris */
  padding: 15px 50px; /* Espaciado interno */
  
  border-bottom: 5px solid #333; /* Línea oscura inferior como en el diseño */
  box-sizing: border-box; /* Incluye padding y borde en el ancho/alto */
}

.logo {
  font-weight: bold;
  font-size: 1.5em; /* Tamaño un poco más grande para el logo */
  color: #333; /* Color oscuro para el logo */
  /* Si usas una imagen, asegúrate de que tenga estilos para tamaño */
}

.logo-img {
  height: 40px; /* Ajusta según el tamaño de tu logo */
  width: auto;
}

/* --- Estilos de los Enlaces --- */
.nav-links {
  list-style: none; /* Elimina los puntos de la lista */
  display: flex;
  margin: 0;
  padding: 0;
  /* CAMBIO: Ajuste para el centrado más preciso */
  /* El "margin-right" ya no es tan necesario si ajustas el padding del nav-bar y el gap */
}

.nav-links li {
  margin-left: 40px; /* Espacio entre los enlaces */
}

.nav-links a {
  text-decoration: none; /* Elimina el subrayado */
  color: #333; /* Color oscuro para el texto de los enlaces */
  font-weight: bold;
  font-size: 0.95em; /* Tamaño de fuente ligeramente ajustado */
  text-transform: uppercase;
  transition: color 0.3s ease; /* Transición suave al pasar el mouse */
}

.nav-links a:hover {
  color: #fff; /* Color del texto al pasar el mouse */
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-links li {
  display: inline-block;
}

.nav-links a {
  color: #000;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s, transform 0.2s;
}

.nav-links a:hover {
  color: #555;
  transform: scale(1.05);
}

/* 🔥 Destacar la opción de "Probador" un poco más */
.probador-link {
  background-color: black;
  color: white !important;
  padding: 8px 18px;
  border-radius: 20px;
  transition: all 0.3s;
}

.probador-link:hover {
  background-color: #333;
  transform: scale(1.08);
}

/* Responsive básico para la navegación */
@media (max-width: 768px) {
  .nav-bar {
    flex-direction: column; /* Apila el logo y los enlaces */
    padding: 15px 20px;
  }
  .nav-links {
    margin-top: 15px;
    flex-direction: column; /* Apila los enlaces en móvil */
    text-align: center;
  }
  .nav-links li {
    margin: 10px 0; /* Espacio vertical entre enlaces en móvil */
  }
}
</style>
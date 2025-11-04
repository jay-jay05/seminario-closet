<template>
  <div class="home-page">
    
    <NavBar />

    <section id="inicio" class="hero-section">
      <div class="hero-content">
          <h1 class="main-title">LOOKLAB <br/> IVVI</h1> 
          <a href="#diseños" class="scroll-arrow">
            ↓ 
          </a>
      </div>
    </section>

    <section id="sobre-nosotros" class="about-section">
      <p class="about-text">
      LOOKLAB IVVI es el complemento digital de la marca de ropa IVVI. Aquí, transformamos la experiencia de compra: te ofrecemos la
      posibilidad de explorar nuestros diseños exclusivos utilizando realidad aumentada. Simplemente, elige una prenda y visualiza con 
      precisión cómo lucirá en tu cuerpo antes de tomar una decisión.
      </p>
    </section>
      <section id="diseños" class="designs-section">
        <h2>DISEÑOS</h2>

        <div class="designs-grid">
          <div class="design-card">
            <img src="@/assets/images/diseño1.png" alt="Diseño 1" />
          </div>
          <div class="design-card">
            <img src="@/assets/images/diseño2.png" alt="Diseño 2" />
          </div>
          <div class="design-card">
            <img src="@/assets/images/diseño3.png" alt="Diseño 3" />
          </div>
        </div>
      </section>
      <section id="cta-probar">
            <div class="cta-probar">
              <div class="texto-explicativo">
                <p>
                  Da clic en el botón para abrir nuestro <strong>PROBADOR VIRTUAL</strong>  
                  y ver cómo lucen los diseños IVVI en realidad aumentada 
                </p>
              </div>

              <router-link to="/probador" class="btn-probar">
              --> Pruébatelos <--
              </router-link>
            </div>
      </section>
  </div> 
</template>





<script setup>
import NavBar from '../componentes/NavBar.vue'; 
</script>

<style scoped>

.home-page {
  font-family: Arial, sans-serif;
  color: #000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* --- SECCIÓN PRINCIPAL (HERO) --- */
.hero-section {

  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #a9a9a9;
  text-align: center;
  padding-top: 80px; 
  box-sizing: border-box;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto; 
  margin-bottom: 50px; 
}

.main-title {
  font-size: 4em;
  font-weight: bold;
  margin: 0;
  line-height: 1;
  text-align: center;
}

.scroll-arrow {
  /* flecha */
  font-size: 8em;
  line-height: 0.5;
  margin-top: 50px; 
  color: #333;
  text-decoration: none;
  align-self: center; 
}

/* --- SECCIÓN "SOBRE NOSOTROS"  */
.about-section {
  padding: 30px 150px;
  background-color: #f4f4f4;
  text-align: center;
  line-height: 1.6;
  max-width: 1300px;
  margin: 0 auto;
}

.about-text {
  font-size: 1.1em;
  color: #444;
}
.designs-section {
  text-align: center;
  margin-top: 80px;
}

.designs-section h2 {
  font-size: 2.5em;
  font-weight: 700;
  color: #eaeaea;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  background: linear-gradient(135deg, #252525, #3f3f3f);
  padding: 12px 40px;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-bottom: 50px;
}

.designs-section h2:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* --- TARJETAS DE DISEÑOS --- */
.designs-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.design-card {
  width: 300px; /* Tamaño fijo de cada tarjeta */
  height: 300px;
  background-color: #696969;
  border-radius: 12px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Imagen dentro de cada tarjeta */
.design-card img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Mantiene la proporción sin deformar */
  transition: transform 0.4s ease;
}

/* Efecto hover */
.design-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}

.design-card:hover img {
  transform: scale(1.1);
}

.btn-probar {
  background: linear-gradient(90deg, #000, #222);
  color: #fff;
  padding: 15px 35px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-probar:hover {
  background: linear-gradient(90deg, #444, #000);
  transform: scale(1.08);
}


.cta-probar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 80px;
  text-align: center;
}

.btn-probar {
  background: linear-gradient(90deg, #000000, #222222);
  color: #ffffff;
  padding: 16px 40px;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-block;
}

.btn-probar:hover {
  background: linear-gradient(90deg, #444444, #000000);
  transform: scale(1.08);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.2);
}

.cta-probar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 100px;
  text-align: center;
}

.texto-explicativo {
  max-width: 600px;
  margin-bottom: 20px;
}

.texto-explicativo p {
  font-size: 1.1rem;
  color: #333;
  line-height: 1.5;
  font-weight: 500;
}

.texto-explicativo strong {
  color: #000;
  font-weight: 700;
}

.btn-probar {
  background: linear-gradient(90deg, #000000, #222222);
  color: #ffffff;
  padding: 16px 40px;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-probar:hover {
  background: linear-gradient(90deg, #444444, #000000);
  transform: scale(1.08);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.2);
}


/* Responsive básico para pantallas más pequeñas */
@media (max-width: 768px) {
  .main-title {
    font-size: 3em;
  }
  .scroll-arrow {
    font-size: 6em;
    margin-top: 30px;
  }
  .designs-section {
    min-height: 60vh; /* Ajustar en móvil */
    padding: 60px 20px;
  }
  .designs-grid {
    flex-direction: column;
    align-items: center;
  }
  .design-card {
    width: 80%;
    padding-bottom: 80%;
  }
}
</style>

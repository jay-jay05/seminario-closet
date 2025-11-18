<template>
  <div class="probador">
        <!-- Botón volver al inicio -->
    <router-link to="/" class="volver">⬅ Volver al inicio</router-link>


    <!-- SECCIÓN DE DISEÑOS -->
    <section class="designs-section">
      <h1>DISEÑOS</h1>

      <div class="designs-grid">
        <div
          v-for="(design, index) in designs"
          :key="index"
          class="design-card"
          @click="selectDesign(design)"
        >
          <img :src="design.image" :alt="design.name" />
        </div>
      </div>
    </section>

    <!-- SECCIÓN DEL VISOR -->
    <section class="viewer-section">
      <div class="viewer-box">
        <p v-if="!selectedDesign">Selecciona un diseño para probarlo</p>
        <div id="probadorCanvas" class="sketchContainer" v-show="selectedDesign">
          <!-- <canvas id="probadorCanvas"></canvas> -->
          <!-- <div>gono</div> -->
        </div>
        <!-- <template v-show="selectedDesign"> -->
        <!--   <h2>{{ selectedDesign.name }}</h2> -->
        <!--   <img :src="selectedDesign.image" :alt="selectedDesign.name" class="selected-image" /> -->
        <!--   <div style="display: flex; justify-content: center;"> -->
        <!--   </div> -->
        <!-- </template> -->
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScriptTag } from '@vueuse/core'


// Lista de diseños
const designs = ref([
  { name: 'Diseño 1', image: new URL('@/assets/images/diseño1.png', import.meta.url).href },
  { name: 'Diseño 2', image: new URL('@/assets/images/diseño2.png', import.meta.url).href },
  { name: 'Diseño 3', image: new URL('@/assets/images/diseño3.png', import.meta.url).href },
])

// Diseño seleccionado
const selectedDesign = ref(null)

function selectDesign(design) {
  selectedDesign.value = design
  onPrendaClick(design.name)
}
//useScriptTag('https://unpkg.com/ml5@1/dist/ml5.js')
useScriptTag('https://cdn.jsdelivr.net/npm/p5@2.1.1/lib/p5.js')
useScriptTag('/src/assets/probadorSketch.js')
</script>

<style scoped>
.sketchContainer {
  width: 100%;
  height: 100%;
}
.probador {
  background-color: #f1f0f5;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  min-height: 100vh;
}
/* 🟣 BOTÓN VOLVER */
.volver {
  display: inline-block;
  margin: 20px;
  padding: 10px 25px;
  background: linear-gradient(135deg, #646464, #242229);
  color: white;
  font-weight: 600;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
/* 🔹 SECCIÓN DE DISEÑOS */
.designs-section {
  background-color: #a0a0a0;
  padding: 40px 0;
  border-radius: 0 0 20px 20px;
}

.designs-section h1 {
  background-color: #d9d9d9;
  display: inline-block;
  padding: 10px 30px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1.8rem;
  color: #111;
  margin-bottom: 20px;
}

.designs-grid {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.design-card {
  background-color: #222;
  padding: 10px;
  border-radius: 10px;
  width: 130px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.design-card:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
}

.design-card img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

/* 👕 VISOR */
.viewer-section {
  background-color: #333;
  color: white;
  margin: 40px auto;
  width: 85%;
  border-radius: 15px;
  padding: 50px 20px;
  font-size: 1.1rem;
}

.viewer-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.selected-image {
  margin-top: 20px;
  width: 300px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.selected-image:hover {
  transform: scale(1.05);
}
</style>

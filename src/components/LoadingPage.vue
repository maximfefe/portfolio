<!-- Loading.vue -->
<template>
    <div v-if="isLoaded" class="loading">
      <!-- Ajoutez ici votre animation ou message de chargement -->
      <div class="spinner"></div>
      <p>Chargement en cours...</p>
    </div>
  </template>
  
  <script>
    export default {
        name: 'Loading',
        data() {
            return {
                isLoaded : true
            }
        },
        mounted() {
            setTimeout(() => {
                document.onreadystatechange = () => {
                    if(document.readyState == 'complete') {
                        this.isLoaded = false;
                    }
                }
            }, 2000);
        }
    }
        
  </script>
  
  <style scoped>
  /* Styles pour votre page de chargement */
  .loading {
    /* Styles pour centrer le contenu */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .spinner {
    /* Styles pour une animation de chargement, par exemple */
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top: 4px solid #3498db;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  
<template>
    <div class="not-found">
        <h1>Erreur 404 - Page non trouvée</h1>
        <p>Vous pouvez retourner <router-link :to="{ name: 'home' }">à l'accueil</router-link></p>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
<style lang="scss">

</style>
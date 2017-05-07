<template>
    <div class="login">
        <login-form>
            <div slot="login">
                <form @submit.prevent="submitLogin">
                    <input type="text" placeholder="Entrez votre adresse mail" v-model="loginForm.email">
                    <input type="text" placeholder="Entrez votre mot de passe" v-model="loginForm.password">
                    <label>Se souvenir de moi
                        <input type="checkbox" v-model="registerForm.remember_me">
                    </label>
                    <button type="submit">Se connecter</button>
                </form>
            </div>
            <div slot="register">
                <form @submit.prevent="submitRegister">
                    <input type="text" placeholder="Entrez votre nom" v-model="registerForm.name">
                    <input type="text" placeholder="Entrez votre adresse mail" v-model="registerForm.email">
                    <input type="text" placeholder="Entrez votre mot de passe" v-model="registerForm.password">
                    <input type="text" placeholder="Ré entrez votre mot de passe" v-model="registerForm.password_confirmation">
                    <button type="submit">S'inscrire</button>
                </form>
            </div>
        </login-form>
    </div>
</template>
<script>

    import LoginForm from '../components/LoginForm.vue';

    export default {
        components: { LoginForm },
        data() {
            return {
                loginForm: {
                    email: '',
                    password: '',
                    remember_me: false
                },
                registerForm: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                }
            }
        },
        methods: {
            submitLogin() {
                axios.post('/login', this.loginForm)
                    .then(response => { console.log(response) })
                    .catch(error => { console.log(error) })
            },
            submitRegister() {
                axios.put('/register', this.registerForm)
                    .then(response => { console.log(response) })
                    .catch(error => { console.log(error) })
            }
        }
    }
</script>
<style lang="scss">

</style>
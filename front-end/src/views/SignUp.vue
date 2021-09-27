<template>
<div>
    <Header></Header>
        <main class="d-flex f-wrap">
            <div class="signup d-flex">
                <form method="POST" class="signup-form d-flex">
                    <div class="login-title">
                        <h2>Sign Up</h2>
                        <img src="images/in 1.png" alt="door logo">
                    </div>
                    <input type="text" id="first-name" name="first-name" placeholder="Votre prénom">
                    <input type="text" id="second-name" name="second-name" placeholder="Votre nom">
                    <input type="email" id="mail-adress" name="email" placeholder="Votre mail">
                    <input type="password" id="password1" name="password1" placeholder="Mot de passe">
                    <input type="password" id="password2" name="password2" placeholder="Confirmer mot de passe">
                    <input type="submit" id="connexion" name="connexion" value="Créer mon compte">
                </form>
            </div>
        </main>
    <Footer></Footer>
</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
    components: {
        Header, Footer
    }
}
</script>
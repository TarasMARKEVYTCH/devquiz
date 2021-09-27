<template>
    <div>
        <Header></Header>
            <main class="d-flex f-wrap">
                <div class="signup d-flex">
                    <form method="POST" class="signup-form d-flex">
                        <div class="login-title">
                            <h2>Recuperation de mot de passe</h2>
                        </div>
                        <input type="email" id="email1" name="email1" placeholder="Votre mail">
                        <input type="email" id="email2" name="email2" placeholder="Confirmez votre mail">
                        <input type="submit" id="connexion" name="connexion" value="Envoyer">
                    </form>
                </div>
            </main>
        <Footer></Footer>
        <!-- <router-view></router-view> -->
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
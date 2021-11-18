<template>
    <section class="main-content d-flex f-wrap">
            <div class="main-content-title d-flex f-wrap">
                <h1>PRESENTATION</h1>
                <span class="line"></span>
            </div>
            <article class="descr-card d-flex f-wrap">
                <div class="descr-card-item d-flex">
                    <img src="images/Group 3.png" alt="idea logo">
                    <h4 class="descr-card-item-title">Lorem, ipsum dolor.</h4>
                    <p class="descr-card-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, perferendis?</p>
                </div>
                <div class="descr-card-item d-flex">
                    <img src="images/Vector.png" alt="vector logo">
                    <h4 class="descr-card-item-title">Lorem, ipsum dolor.</h4>
                    <p class="descr-card-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, perferendis?</p>
                </div>
                <div class="descr-card-item d-flex">
                    <img src="images/Vector1.png" alt="capital logo">
                    <h4 class="descr-card-item-title">Lorem, ipsum dolor.</h4>
                    <p class="descr-card-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, perferendis?</p>
                </div>
                <!-- <div class="login d-flex f-wrap">
                    <form method="POST" class="login-form d-flex f-wrap">
                        <div class="login-title">
                            <h2>LOG IN</h2>
                            <img src="images/in 1.png" alt="door logo">
                        </div>
                        <input type="email" id="email" name="email" placeholder="Votre mail">
                        <input type="password" id="password" name="password" placeholder="Mot de passe">
                        <input type="submit" id="connexion" name="connexion" value="CONNECTER">
                    </form>
                    <router-link to="/SignUp" class="connexion-link">Créer un compte</router-link> 
                    <router-link to="/RecupPass" class="connexion-link">Mot de pass oublié</router-link>
                </div> -->
            </article>
            <Languages></Languages>
        </section>
</template>

<script>
import Languages from '@/components/Languages'
export default {
    components: {
        Languages,
    }
}
</script>
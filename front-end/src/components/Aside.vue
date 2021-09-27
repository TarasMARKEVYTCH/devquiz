<template>
    <aside d-flex f-wrap>
        <div class="login d-flex f-wrap">
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
        </div>
    </aside>
</template>
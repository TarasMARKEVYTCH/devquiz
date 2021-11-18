<template>
<div class="col-md-12">
        <main class="d-flex f-wrap col-md-8 mx-auto">
            <div class="signup d-flex col-12 bg-light">
                <form method="POST" class="signup-form d-flex text-light">
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
</div>
</template>

<script>
export default {
    name:
        'signUp',
    components: {
    }
}
</script>
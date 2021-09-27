<template>
    <header class="d-flex f-wrap">
        <nav class="d-flex">
            <div class="logo d-flex">
                <router-link to="/"><img src="images/hapi-seeklogo.com.svg" alt="main logo"></router-link>
            </div>
            <div class="hamburger">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </div>
            <ul class="nav-link d-flex">
                <li class="nav-link-item"><router-link to="../views/Categories">Categories</router-link></li>
                <li class="nav-link-item"><a href="forum.html">Forum</a></li>
                <li class="nav-link-item"><a href="contact.html">Contact</a></li>
                <li class="nav-link-item"><a href="contact.html"><img src="images/in 2.png" alt="door logo"></a></li>
            </ul>
        </nav>
        <div class="subheader d-flex">
            <!-- <div class="subheader-descr d-flex f-wrap"> -->
                <h2 class="subheader-title">En savoir plus sur <br> notre projet</h2>
                <h6 class="subheader-subtitle">Plus de 2000 participants</h6>
                <button type="submit" class="discover">DÉCOUVRIR</button>
            <!-- </div> -->
                <!-- <img src="images/Office workers.png" alt="office workers logo" class="subheader-img d-flex"> -->
        </div>
        <div class="header-login d-flex f-wrap">
            <form method="POST" class="header-login-form d-flex f-wrap">
                <div class="header-login-title d-flex">
                    <h2>LOG IN</h2>
                    <img src="images/in 2.png" alt="door logo">
                </div>
                <input type="email" id="mail" name="email" placeholder="Votre mail">
                <input type="password" id="pass" name="password" placeholder="Mot de passe">
                <input type="submit" id="header-connexion" name="connexion" value="CONNECTER">
            </form>
            <div class="header-connexion-link d-flex">
                <router-link to="../views/SignUp">Créer un compte</router-link><span id="separator">|</span>
                <router-link to="../views/RecupPass">Mot de pass oublié</router-link>
            </div>
        </div>
    </header>
</template>
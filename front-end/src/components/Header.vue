<template>
    <header class="d-flex f-wrap">
        <nav class="d-flex">
            <div class="logo d-flex">
                <router-link to="/"><img src="images/hapi-seeklogo.com.svg" alt="main logo"></router-link>
            </div>
            <div
            class="hamburger"
            @click="hamburgerActive = !hamburgerActive"
            :class="{hamburgerActive: hamburgerActive}">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </div>
            <div class="dropdown">
                <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Menu
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><router-link class="dropdown-item" to="../views/Contact">Login</router-link></li>
                    <li><router-link class="dropdown-item" to="../views/Categories">Categories</router-link></li>
                    <li><router-link class="dropdown-item" to="../views/Forum">Forum</router-link></li>
                    <li><router-link class="dropdown-item" to="../views/Contact">Contact</router-link></li>
                    <li><router-link class="dropdown-item" to="../views/SignUp">SignUp</router-link></li>
                </ul>
            </div>
        </nav>
        
        <div class="subheader d-flex">
                <h2 class="subheader-title">En savoir plus sur <br> notre projet</h2>
                <h6 class="subheader-subtitle">Plus de 2000 participants</h6>
                <router-link to="../Discover" class="discover">DÉCOUVRIR</router-link>
        </div>
    </header>
</template>

<script>
export default {
    data: () =>{
       return {
           hamburgerActive: false,
           navlinkActive: false,
           active: false

           }
    },
    name: 'Header',
    
}
</script>

<style scoped>
.active{
    color: rgb(255, 145, 0);
}
</style>
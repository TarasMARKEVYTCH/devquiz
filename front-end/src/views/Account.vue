<template>
    <div>
        <Header></Header>
        <main class="d-flex f-wrap">
            <h2 class="user-title">Information personnelle</h2>
            <section class="user d-flex f-wrap">
                <div class="user-photo d-flex">
                    <img src="images/gunicorn-seeklogo.com.svg" alt="user-avatar">
                </div>
                <div class="user-info d-flex f-wrap">
                    <p>User firstname</p>
                    <p>User lastname</p>
                    <p>Avec nous depuis : date</p>
                    
                </div>
                <button type="submit" id="upgrade" name="upgrade">Modifier mon profil</button>
            </section>
            <section class="quiz d-flex f-wrap">
                <h2 >Vos tests</h2>
                
            </section>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
    name: 'Account',
    components: {
        Header, Footer
    }
}
</script>
<style scoped>

</style>
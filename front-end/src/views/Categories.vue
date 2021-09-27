<template>
    <div>
        <Header></Header>
        <main class="d-flex d-wrap">
            <Languages></Languages>
        </main>
        <Footer></Footer>
    </div>

</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Languages from '../components/Languages.vue'

export default {
    name: 'Categories',
    components: {
        Header,Footer,
        Languages
    }
}
</script>

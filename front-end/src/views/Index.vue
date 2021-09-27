<template>
    <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main'
// import Test from '@/components/Test'

export default {
    name: 'Index',
    components: {
        Main, Header, Footer 
        // Test
    }
}
</script>
<template>
    <div class="app-main-layout">
        <Header></Header>
          <main>
              
                <router-view></router-view>
              
          </main>

    
        <Footer></Footer>
</div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true
  }),
  components: {
    Header, Footer
  },
}
</script>
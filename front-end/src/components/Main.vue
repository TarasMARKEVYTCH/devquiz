<template>
      <main class="d-flex f-wrap">
        <MainContent></MainContent>
        <!-- <Aside></Aside> -->
      </main>
</template>

<script>
// import Aside from '@/components/Aside'
import MainContent from '@/components/MainContent'

export default {
  name: 'Main',
    components: {
      
        //  Aside, 
         MainContent
    }
}
</script>
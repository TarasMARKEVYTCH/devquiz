<template>
    <section class="language d-flex f-wrap">
        <h2 class="language-title">Lorem, ipsum dolor.</h2>
        <router-link
        v-bind:langs="langs"
        v-for="lang in langs"
        :key="lang.url"
        tag="article"
        :to="lang.url"
        class="language-item d-flex">
                <a href="#"> {{ lang.title }} </a>
        </router-link>
    </section>
</template>

<script>
export default {
        data: () => ({
                langs: [
                        {title: 'HTML', url: '/CategorieItem'},
                        {title: 'CSS', url: '/CategorieItem'},
                        {title: 'JavaScript', url: '/CategorieItem'},
                        {title: 'JAVA', url: '/CategorieItem'},
                        {title: 'PHP', url: '/CategorieItem'},
                        {title: 'PYTHON', url: '/CategorieItem'}
                ]
        }),
        name: 'Languages'
}
</script>

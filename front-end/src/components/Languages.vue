<template>
    <section class="language d-flex f-wrap">
        <h2 class="language-title">Lorem, ipsum dolor.</h2>
        <router-link
        v-for="lang in langs"
        :key="lang.url"
        tag="article"
        :to="lang.url"
        class="language-item d-flex">
                <a href="#"> {{ lang.title }} </a>
        </router-link>
        <!-- <article class="language-item d-flex">
                <router-link to='../views/CategorieItem'> HTML </router-link>
        </article>
        <article class="language-item d-flex">
                <router-link to='../views/CategorieItem'>{ CSS }</router-link>
        </article>
        <article class="language-item d-flex">
                <router-link to='../views/CategorieItem'>JavaScript</router-link>
        </article>
        <article class="language-item d-flex">
                <router-link to='../views/CategorieItem'>{ PHP }</router-link>
        </article>
        <article class="language-item d-flex">
                <router-link to='../views/CategorieItem'> PYTHON</router-link>
        </article>
        <article class="language-item d-flex">
                <router-link to='../views/CategorieItem'>{ JAVA }</router-link>
        </article> -->
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

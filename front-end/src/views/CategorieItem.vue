<template>
    <div>
        <Header></Header>
            <main class="categorie d-flex">
                <article class="categorie-item d-flex">
                    <div class="categorie-item-title">
                        <h2>Lorem</h2>
                        <router-link to="/Quiz">Commencer le test</router-link>
                    </div>
                    <div class="categorie-item-descr">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nostrum nulla dolorum corporis odit quibusdam eos exercitationem quas debitis ut enim neque sed, perspiciatis repellat ullam at consectetur incidunt necessitatibus molestias non et aliquam voluptates labore repellendus! Aperiam, maiores in. Porro minima facere quam nihil tempora dolore nulla numquam minus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nostrum nulla dolorum corporis odit quibusdam eos exercitationem quas debitis ut enim neque sed, perspiciatis repellat ullam at consectetur incidunt necessitatibus molestias non et aliquam voluptates labore repellendus! Aperiam, maiores in. Porro minima facere quam nihil tempora dolore nulla numquam minus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nostrum nulla dolorum corporis odit quibusdam eos exercitationem quas debitis ut enim neque sed, perspiciatis repellat ullam at consectetur incidunt necessitatibus molestias non et aliquam voluptates labore repellendus! Aperiam, maiores in. Porro minima facere quam nihil tempora dolore nulla numquam minus!</p>
                    </div>
                </article>
            </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
    name: 'CategorieItem',
    components: {
        Header, Footer
    }
}
</script>
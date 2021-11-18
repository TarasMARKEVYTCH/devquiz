<template>
    <div>
        <main d-flex>
            <form action="#" class="contact-form d-flex f-wrap"> 
                <div class="contact-info d-flex">
                    <label class="contact-form-title" for="contact-form">Sujet:</label>
                    <select name="contact" id="contact-list">
                        <option value="">-- CHOISIR --</option>
                        <option value="">Probléme de connexion</option>
                        <option value="">Support technique</option>
                        <option value="">Nous rejoindre</option>
                        <option value="">Autres</option>
                    </select>
                        <label for="mail-field" id="label-mail">Adresse email:</label>
                        <input type="email" id="mail-field" placeholder="Votre adresse mail">
                </div>
                <textarea name="contact-msg" id="contact-msg" cols="100" rows="15"></textarea>
                <input type="submit" id="contact-send"  value="Envoyer">
            </form>
            <h2>Ou retrouvez nous sur :</h2>
            
        </main>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    components: {
    }
    
}
</script>

<style scoped>

</style>


<script>
import {sendRequest} from "../helpers/sendRequest";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
    name: "Quiz",
    data() {
        return {
            question: undefined,
            counter: 0,
            result: 0,
            numberRandom: NaN,
            idex: 0,
            body: {
                var1: false,
                var2: false,
                var3: false,
                var4: false,
            },
            err: ""
        }
    },
    components:{
        Header, Footer
    },
    methods: {
        checkResponse() {
            if( 
                this.body.var1 == false &&
                this.body.var2 == false &&
                this.body.var3 == false &&
                this.body.var4 == false 
            ) {
                this.err = "Choisissez au moins une reponse!!!"
            } else {
                sendRequest(`http://localhost:3000/api/question/${ this.question.id }`, "POST", this.body)  // check question on back-end
            .then((res) => {
                this.result += res.point; 
            })
            .catch((err) => {console.log(err)});
            sendRequest(`http://localhost:3000/api/question/categorie/${ this.$route.params.id }`, "GET") // get new question
            .then((data) => {
                this.question = data;
                console.log(this.question.id);
            })
            .catch((err) => {
                console.log(err);
            })
                this.counter++;
                this.body.var1 = false;
                this.body.var2 = false;
                this.body.var3 = false;
                this.body.var4 = false;
                this.numberRandom = this.getRandom(1,3);
            this.err = ""
            }
        },
        getRandom(min, max){
           return Math.floor(Math.random() * (max - min + 1) + min)
        },
    },
    beforeMount() {
        this.numberRandom = this.getRandom(1,3);  
        sendRequest(`http://localhost:3000/api/question/categorie/${ this.$route.params.id }`, "GET") 
        // console.log(this.$routes.params.id)
        .then((data) => {
            this.question = data;
        })
        .catch((err) => {
            console.log(err);
        })
    }
};
</script>
<template>
    <div>
        <Header></Header>
        <h1>hello</h1>
        <div class="counter">
            <h3>Temps restant - 01:00 min</h3>
            <h2 class="question-num">Question 1/10</h2>
        </div>
        <main class="d-flex d-wrap">
            <form class="quiz-form d-flex f-wrap" v-if="counter !== 6 && question != undefined">
                <p class="question-text">{{ question.id }} {{ question.description }}</p>
                <label for="" v-if="question.textAnswer1 !== null && numberRandom === 1">{{question.textAnswer1}}<input type="checkbox" v-model="body.var1"></label>
                <label for="" v-if="question.textAnswer2 !== null && numberRandom === 1">{{question.textAnswer2}}<input type="checkbox" v-model="body.var2"></label>
                <label for="" v-if="question.textAnswer3 !== null && numberRandom === 1">{{question.textAnswer3}}<input type="checkbox" v-model="body.var3"></label>
                <label for="" v-if="question.textAnswer4 !== null && numberRandom === 1">{{question.textAnswer4}}<input type="checkbox" v-model="body.var4"></label>
                <label for="" v-if="question.textAnswer2 !== null && numberRandom === 2">{{question.textAnswer2}}<input type="checkbox" v-model="body.var2"></label>
                <label for="" v-if="question.textAnswer4 !== null && numberRandom === 2">{{question.textAnswer4}}<input type="checkbox" v-model="body.var4"></label>
                <label for="" v-if="question.textAnswer3 !== null && numberRandom === 2">{{question.textAnswer3}}<input type="checkbox" v-model="body.var3"></label>
                <label for="" v-if="question.textAnswer1 !== null && numberRandom === 2">{{question.textAnswer1}}<input type="checkbox" v-model="body.var1"></label>
                <label for="" v-if="question.textAnswer2 !== null && numberRandom === 3">{{question.textAnswer2}}<input type="checkbox" v-model="body.var2"></label>
                <label for="" v-if="question.textAnswer1 !== null && numberRandom === 3">{{question.textAnswer1}}<input type="checkbox" v-model="body.var1"></label>
                <label for="" v-if="question.textAnswer4 !== null && numberRandom === 3">{{question.textAnswer4}}<input type="checkbox" v-model="body.var4"></label>
                <label for="" v-if="question.textAnswer3 !== null && numberRandom === 3">{{question.textAnswer3}}<input type="checkbox" v-model="body.var3"></label>
                <input type="submit" value="Valider" class="response-btn" @click="checkResponse">
            </form>
            <div class="finish" v-else>Finish</div>
            <div class="err" v-if="err != ''">{{ err }}</div>
            <img :src="err" alt="">
            <div class="chek">result = {{result}} </div>
        </main>
        <Footer></Footer>
    </div>
</template>
<style lang="sass">
</style>
<template>
    <div>
        <h1>hello</h1>
        <div class="counter">
            <h3>Temps restant - 0{{minutes}} : {{seconds}} min</h3>
            <h2 class="question-num">Question {{questionNum}}/10</h2>
            <div class="err text-danger fs-1" v-if="err != ''">{{ err }}</div>
        </div>
        <main class="d-flex d-wrap">
            <form class="quiz-form d-flex f-wrap" v-if="counter !== 10 && question != undefined">
                <p class="question-text"> {{ question.description }} ???</p>
                <label class="response" for="answer1" v-if="question.textAnswer1 !== null && numberRandom === 1">{{question.textAnswer1}}<input class="checkbox" type="checkbox" id="answer1" v-model="body.var1"></label>
                <label class="response" for="answer2" v-if="question.textAnswer2 !== null && numberRandom === 1">{{question.textAnswer2}}<input class="checkbox" type="checkbox" id="answer2" v-model="body.var2"></label>
                <label class="response" for="answer3" v-if="question.textAnswer3 !== null && numberRandom === 1">{{question.textAnswer3}}<input class="checkbox" type="checkbox" id="answer3" v-model="body.var3"></label>
                <label class="response" for="answer4" v-if="question.textAnswer4 !== null && numberRandom === 1">{{question.textAnswer4}}<input class="checkbox" type="checkbox" id="answer4" v-model="body.var4"></label>
                <label class="response" for="answer5" v-if="question.textAnswer2 !== null && numberRandom === 2">{{question.textAnswer2}}<input class="checkbox" type="checkbox" id="answer5" v-model="body.var2"></label>
                <label class="response" for="answer6" v-if="question.textAnswer4 !== null && numberRandom === 2">{{question.textAnswer4}}<input class="checkbox" type="checkbox" id="answer6" v-model="body.var4"></label>
                <label class="response" for="answer7" v-if="question.textAnswer3 !== null && numberRandom === 2">{{question.textAnswer3}}<input class="checkbox" type="checkbox" id="answer7" v-model="body.var3"></label>
                <label class="response" for="answer8" v-if="question.textAnswer1 !== null && numberRandom === 2">{{question.textAnswer1}}<input class="checkbox" type="checkbox" id="answer8" v-model="body.var1"></label>
                <label class="response" for="answer9" v-if="question.textAnswer2 !== null && numberRandom === 3">{{question.textAnswer2}}<input class="checkbox" type="checkbox" id="answer9" v-model="body.var2"></label>
                <label class="response" for="answer10" v-if="question.textAnswer1 !== null && numberRandom === 3">{{question.textAnswer1}}<input class="checkbox" type="checkbox" id="answer10" v-model="body.var1"></label>
                <label class="response" for="answer11" v-if="question.textAnswer4 !== null && numberRandom === 3">{{question.textAnswer4}}<input class="checkbox" type="checkbox" id="answer11" v-model="body.var4"></label>
                <label class="response" for="answer12" v-if="question.textAnswer3 !== null && numberRandom === 3">{{question.textAnswer3}}<input class="checkbox" type="checkbox" id="answer12" v-model="body.var3"></label>
                <input type="submit" value="Valider" class="response-btn" @click.prevent="checkResponse">
            </form>
            <div class="finish" v-else>Finish</div>
            
            <img :src="err" alt="">
            <div class="chek">result = {{result}} </div>
        </main>
    </div>
</template>

<script>
import {sendRequest} from "../helpers/sendRequest";
export default {
    name: "Quiz",
    data() {
        return {
            question: undefined,
            counter: 0,
            result: 0,
            numberRandom: NaN,
            idex: 0,
            minutes: 3,
            seconds: 0,
            questionNum: 1,
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
                this.questionNum++;
                this.minutes = 3;
                this.seconds = "00"

            })
            .catch((err) => {console.log(err)});
            sendRequest(`http://localhost:3000/api/question/categorie/${ this.$route.params.id }`, "GET") // get new question
            .then((data) => {
                this.question = data;
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
        timeCounter(){
           this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
            setTimeout(()=> {
                if (this.minutes == 0 && this.seconds == "00") {
                    this.err = "Time out";
                }
                else if(this.seconds === "00"){
                    this.minutes--;
                    this.seconds = 59;
                    this.timeCounter();
                } else {
                    this.seconds--;
                    this.timeCounter();
                }
            }, 1000)
        }
    },
    beforeMount() {
        this.numberRandom = this.getRandom(1,3);  
        sendRequest(`http://localhost:3000/api/question/categorie/1`, "GET") 
        // console.log(this.$routes.params.id)
        .then((data) => {
            this.question = data;
            this.timeCounter();
        })
        .catch((err) => {
            console.log(err);
        })
    }
};
</script>

<style lang="sass">
</style>
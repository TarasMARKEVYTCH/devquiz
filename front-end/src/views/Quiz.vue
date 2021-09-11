<script>
export default {
    name: "Quiz",
    data() {
        return {
            questions: [{id: 1,
                        text: "question 1 rep3",
                        responseText1: "php",
                        response1:false,
                        responseText2: "js",
                        response2:false,
                        responseText3: "java",
                        response3:true,
                        responseText4: "python",
                        response4:false,
                        },
                        {id: 2,
                        text: "question 2 rep 1 et 3",
                        responseText1: "ruby",
                        response1:true,
                        responseText2: "c#",
                        response2:false,
                        responseText3: "delfi",
                        response3:true,
                        responseText4: "go",
                        response4:false,
                        }],
            counter: 0,
            idex: 0,
            body: {
                var1: false,
                var2: false,
                var3: false,
                var4: false,
            }
        }
    },
    methods: {
        checkResponse() {
            console.log("ok");
            console.log(this.counter)
            console.log(this.body);

            if(
                this.body.var1 === this.questions[this.idex].response1 &&
                this.body.var2 === this.questions[this.idex].response2 &&
                this.body.var3 === this.questions[this.idex].response3 &&
                this.body.var4 === this.questions[this.idex].response4
            ) {
                this.counter++
            }
                this.idex++;
                this.body.var1 = false;
                this.body.var2 = false;
                this.body.var3 = false;
                this.body.var4 = false;


        }
    }
};

</script>

<template>
    <div class="main-layout">
        <h1>hello</h1>
        <div action="#" v-if="idex<questions.length">
            <p>{{ questions[idex].text }}</p>
            <label for="">{{questions[idex].responseText1}}</label>
            <input type="checkbox" v-model="body.var1">
            <label for="">{{questions[idex].responseText2}}</label>
            <input type="checkbox" v-model="body.var2">
            <label for="">{{questions[idex].responseText3}}</label>
            <input type="checkbox" v-model="body.var3">
            <label for="">{{questions[idex].responseText4}}</label>
            <input type="checkbox" v-model="body.var4">
            <input type="submit" v-on:click="checkResponse">
        </div>


        <div class="finish" v-else>Finish</div>

        <div class="chek">result = {{counter}} </div>

        
    </div>
</template>


<style lang="sass">

</style>
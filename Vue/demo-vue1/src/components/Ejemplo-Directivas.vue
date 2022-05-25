<template>
 <div>
    <h1 >{{text}}</h1>
    <h1 v-show="true" v-once v-text="text"></h1>
    <h2 v-show="true" v-html="html" />
    <button @click="actualizarTexto">Click Me</button>
    <a :href="link.url" :target="link.target" :tabindex="link.tabindex" v-text="link.title"/>
    <p v-if="cantidad>100">Mayor a 100</p>
    <p v-else-if="cantidad>50">Mayor a 50</p>
    <p v-else>Cantidad no es ni mayor de 50 o de 100</p>
    <div class="form">
        <label>
        Name
        <input type="text" v-model="name" />
        </label>
        <label>
           Preferred javascript style
         <select name="language" v-model="language">
                        <option value="Javascript">JavaScript</option>
                        <option value="TypeScript">TypeScript</option>
                        <option value="CoffeeScript">CoffeeScript</option>
                        <option value="Dart">Dart</option>
                    </select>
                </label>
            </div>
            <ul class="overview">
                <li><strong>Overview</strong></li>
                <li>Name: {{ name }}</li>
                <li>Preference: {{ language }}</li>
            </ul>
            <ul>
                <li v-for="n in 5" :key="`loop-1-${n}`">
                    {{ n }}
                </li>
                <li v-for="n in 5" :key="`loop-2-${n}`">
                    {{ n }}
                </li>
            </ul>
            <ul>
                <li v-for="(pasatiempo,index) in pasatiempos" :key="index">
                    {{index+1}}.{{pasatiempo}}
                </li>
            </ul>
            <ul>
                <li v-for="(persona,index) in personas" :key="index">
                    {{persona.id}} {{persona.nombre}} {{persona.estado}}
                </li>
            </ul>
 </div>
</template>
<script>
export default {
  methods: {
     actualizarTexto: function(){
         this.text="Nuevo texto";
     }
 },   
 data() {
    return {
        // v-text
        text: 'Directive text',
        // v-html
        html: 'Stylise</br>HTML in<br/><b>your data</b>',
        link: {
            url: 'https://google.com',
            target: '_blank',
            tabindex: '0',
            title: 'Go to google'
        },
        cantidad: 1000,
        name: "",
        language:"",
        pasatiempos: ['XBOX', 'BOXEO', 'LALALA', 'Dormir'],
        personas: [
            {"id":"1","nombre":"adan","estado":"sonora"},
            {"id":"2","nombre":"luna","estado":"durango"},
            {"id":"3","nombre":"pao","estado":"michoacan"},
        ]
    }
 }
 
}
</script>
<style lang="scss">
    h2 {
        margin: 40px 0 0;
        font-weight: normal;
    }
    .form {
        display: flex;
        justify-content: space-evenly;
        max-width: 800px;
        padding: 40px 20px;
        border-radius: 10px;
        margin: 0 auto;
        background: #ececec;
    }
    .overview {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        max-width: 300px;
        margin: 40px auto;
        padding: 40px 20px;
        border-radius: 10px;
        border: 1px solid #ececec;
        > li {
            list-style: none;
            + li {
            margin-top: 20px;
            }
        }
}
</style>
<template>
    <div>
        <ul>
            <h2 v-text="titulo"></h2>
            <table class="table mt-2">
                <thead>
                    <tr class="table-primary">
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Amount</th>
                        <th scope="col">ShoppingCart</th>
                    </tr>
                </thead>
                <tbody v-for="(producto,index) in productos" :key="index">
                    <tr>
                        <td> {{ producto.id }}</td>
                        <td> {{ producto.nombre }}</td>
                        <td> {{ producto.precio }}</td>
                        <td> {{ producto.cantidad }}</td>
                        <td><button class="btn btn-success" @click="addCart(producto)">Add</button></td>
                    </tr>

               
                </tbody>
            </table>
            
        </ul>
        <ul>
            <h2 v-text="subtitulo"></h2>
            <table class="table mt-2">
                <thead>
                    <tr class="table-primary">
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody v-for="(producto,index) in carrito" :key="index">
                  <tr>
                    <td>{{ producto.nombre }}</td>
                    <td>${{ producto.precio }}</td>
                    <td>{{ producto.carrito }}</td>
                  </tr>
                </tbody>
            </table>
            
            <p><button class="btn btn-danger" @click="cleanCart">Vaciar Carrito</button></p>
            <h3>Total Products: {{cantidad}}  Total: ${{total}}.00</h3>
        </ul>
        <br/>
        <br/>
        <br/>
    </div>
</template>

<script>


export default {
    methods: {
        addCart: function(producto){
            if(producto.cantidad>=1){
                producto.cantidad=producto.cantidad-1;
                this.total=this.total+parseFloat(producto.precio);
                let exist=this.carrito.find(x=>x.id==producto.id);
                producto.carrito=parseInt(producto.carrito)+1;
                this.cantidad+=1;
                if(exist==null){
                    
                    this.carrito.push(producto);
                }
                
            }
            if(producto.cantidad==0){
                alert("Ultimo producto");
                this.productos=this.productos.filter(p=>p.id !== producto.id);
            }
            
        },
        cleanCart:function(){
            this.cantidad=0;
            this.total=0.0;
            this.carrito=[];
            this.productos=[
            {"id":"1","nombre":"fabuloso","precio":"20.00","cantidad":"5", "carrito":"0"},
            {"id":"2","nombre":"pinol","precio":"25.00", "cantidad":"5", "carrito":"0"},
            {"id":"3","nombre":"zote","precio":"20.00", "cantidad":"10", "carrito":"0"},
            {"id":"4","nombre":"foca","precio":"23.00", "cantidad":"12", "carrito":"0"},
            {"id":"5","nombre":"cloro","precio":"15.00", "cantidad":"2", "carrito":"0"},
            ];
        }
    },
    data() {
        return {
            titulo: "Products",
            productos: [
            {"id":"1","nombre":"fabuloso","precio":"20.00","cantidad":"5", "carrito":"0"},
            {"id":"2","nombre":"pinol","precio":"25.00", "cantidad":"5", "carrito":"0"},
            {"id":"3","nombre":"zote","precio":"20.00", "cantidad":"10", "carrito":"0"},
            {"id":"4","nombre":"foca","precio":"23.00", "cantidad":"12", "carrito":"0"},
            {"id":"5","nombre":"cloro","precio":"15.00", "cantidad":"2", "carrito":"0"},
            ],
            cantidad: 0,
            total: 0.0,
            subtitulo: "ShoppingCart Products",
            carrito: [],
            totalProducto: 0.0
           
        }
    },
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
        background: #0aad69;
    }
    .overview {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        max-width: 500px;
        margin: 40px auto;
        padding: 40px 20px;
        border-radius: 10px;
        border: 1px solid #058d27;
        > li {
            list-style: none;
            + li {
            margin-top: 20px;
            }
        }
}
</style>
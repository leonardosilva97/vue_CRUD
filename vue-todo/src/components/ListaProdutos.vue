<template>
    <div id="produt-table">
        
        <div>
            <div id="produt-table-heading">
                <div class="order-id">#</div>
                <div>Nome Produto:</div>
                <div>Quantidade</div>
                <div>Medida:</div>
                <div>Descrição:</div>
                <div>Ações</div>
            </div>
            <div id="produt-table-rows">
                <div class="produt-table-row" v-for="produto in produtos" :key="produto.id">
                    <div class="order-number">{{produto.id}}</div>
                    <div>{{produto.nome}}</div>
                    <div>{{produto.quantidade}}</div>
                    <div>{{produto.medida}}</div>
                    <div>{{produto.descricao}}</div>
                    <div class="btn">
                        <router-link :to="`edit/${produto.id}`">
                            <button class="edit-btn">Editar</button>
                        </router-link>
                        <form @submit="deletarProduto(produto.id)">
                            <button class="delete-btn" type="submit">Excluir</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Produtos from '../services/produtos.js';
    export default {
        
        name: 'ListaProdutos',
        data(){
            return{
                id: null,
                nome: null,
                produtos: null,
                quantidades: null,
                medidas: null,

            }
        },
        methods:{
            async getProduto(){
                Produtos.getProducts().then((response)=> {
                  this.produtos = response.data;

                  console.log(response)
                }).catch((err) => console.log(err))

            },

            async deletarProduto(id){
                Produtos.deleteProductsById(id)
                .then((res)  => console.log(res))
                .catch((err) => console.log(err))
            }
        },
        mounted() {
            this.getProduto();
        },
    }
</script>

<style scoped>
    #produt-table{
        max-width: 1200px;
        margin: 0 auto;
    }

    #produt-table-heading,
    #produt-table-rows,
    .produt-table-row{
        display: flex;
        flex-wrap: wrap;
    }

    #produt-table-heading{
        font-weight: bold;
        padding: 12px;
        border-bottom: 3px solid #333;
    }

    .produt-table-row{
        width: 100%;
        padding: 12px;
        border-bottom: 1px solid #ccc;

    }

    #produt-table-heading div,
    .produt-table-row div{
        width: 19%;

    }

    #produt-table-heading .order-id,
    .produt-table-row .order-number{
        width: 5%;
    }

    select{
        padding: 12px 6px;
        margin-right: 12px;
    }

    .delete-btn{
        background-color: #222;
        color: #fcba03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }

    .delete-btn:hover{
        background-color: transparent;
        color: #222;
    }

    .edit-btn{
        background-color: #fcba03;
        color: #222;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }

    .edit-btn:hover{
        background-color: transparent;
        color: #fcba03;
    }

    .btn{
        display: flex;
        justify-content: space-between;
    }


</style>
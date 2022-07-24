<template>
    <div>
        <Message :msg="msg" v-show="msg"/>
        <h1>Editar Produto</h1>
        <div class="form">
            <form id="produto-form" @submit="editProduto">
                <div class="input-container">
                    <input type="hidden"  name="id" v-model="id" >
                </div>
                <div class="input-container">
                    <label for="quantidade">Nome</label>
                    <v-text-field  name="nome" v-model="nome" :value="nome"  placeholder="Digite o nome do produto"></v-text-field>
                </div>
                <div class="input-container">
                    <label for="quantidade">Quantidade</label>
                    <v-text-field type="number" name="quantidade" v-model="quantidade" :value="quantidade" placeholder="Digite a quantidade"></v-text-field>
                </div>
                <div class="input-container">
                    <label for="medida">medida</label>
                    <v-text-field type="number"  name="medida" v-model="medida" :value="medida" placeholder="Digite a medida"></v-text-field>
                </div>

                <div class="input-container">
                    <label for="descricao">Descrição</label>
                    <v-container fluid>
                    <v-textarea
                      v-model="descricao"
                      :value="descricao"
                      clearable
                      clear-icon="mdi-close-circle"
                      label="Descreva o produto"
                    ></v-textarea>
                  </v-container>
                </div>
                
                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Atualizar Produto">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import Produtos from '@/services/produtos.js'
    import Message from './Message.vue'
    export default {
    name: "Form",
    data() {
        return {
            id: null,
            nome: null,
            quantidade: null,
            medida: null,
            descricao: null,
            msg: null
        };
    },
    methods: {
        async editProduto(e) {
            e.preventDefault()
            const data = {
                id: this.id,
                nome: this.nome,
                quantidade: this.quantidade,
                medida: this.medida,
                descricao: this.descricao
            };
            console.log("data", data);
            Produtos.updateProducts(data)
                .then((response) => console.log(response))
                .catch((error) => console.log(error));

            this.msg = "Atualização realizada com sucesso"

            setTimeout(() => {
                this.msg = ""
            }, 2000)

            this.nome = "";
            this.quantidade = "";
            this.medida = "";
            this.descricao = "";
        },
        getProductsById(id) {
            Produtos.getProductsById(id)
                .then((res) => {
                console.log("ola", res.data);
                this.nome = res.data.nome;
                this.quantidade = res.data.quantidade;
                this.medida = res.data.medida;
                this.descricao = res.data.descricao;
            })
                .catch((error) => console.log(error))
        }
    },
    mounted() {
        this.id = this.$route.params.id ? this.$route.params.id : 0
        this.getProductsById(this.id)
    },
    components: { Message }
}
</script>

<style scoped>
    h1{
        text-align: center;
        margin-bottom: 20px;
    }
  .form{
    margin-top: 50px;
  }

  #produto-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;;
    padding: 5px 10px;
    border-left: 4px solid #222;
  }

  input, textarea{
    border: 1px solid #222;
  }

  input, select {
    padding: 5px 10px;
    width: 300px;
  }

  .submit-btn {
    background-color: #222;
    color:#fff;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }

  .submit-btn:hover {
    background-color: transparent;
    color: #222;
  }
</style>
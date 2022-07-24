<template>
    <div>
        <Message :msg="msg" v-show="msg"/>
        <h1>Cadastrar Produto</h1>
        <div class="form">
            <form id="produto-form" @submit="createProduto">
                <div class="input-container">
                    <label for="quantidade">Nome</label>
                    <v-text-field name="nome" v-model="nome" placeholder="Digite o nome do produto"></v-text-field>
                </div>
                <div class="input-container">
                    <label for="quantidade">Quantidade</label>
                    <v-text-field type="number" name="quantidade" v-model="quantidade" placeholder="Digite a quantidade"></v-text-field>
                </div>
                <div class="input-container">
                    <label for="medida">medida</label>
                    <v-text-field type="number"  name="medida" v-model="medida" placeholder="Digite a medida"></v-text-field>
                </div>

                <div class="input-container">
                    <label for="descricao">Descrição</label>
                    <v-container fluid>
                    <v-textarea
                      v-model="descricao"
                      clearable
                      clear-icon="mdi-close-circle"
                      label="Descreva o produto"
                      value="This is clearable text."
                    ></v-textarea>
                  </v-container>
                </div>
                
                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Criar meu Produto">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import Produtos from '../services/produtos.js'
    import Message from './Message.vue'

    export default {
    name: "Form",
    components: { Message },
    data() {
        return {
            nome: null,
            quantidade: null,
            medida: null,
            descricao: null,
            msg: null
        };
    },
    methods: {
        async createProduto(e) {
            e.preventDefault();
            const data = {
                nome: this.nome,
                quantidade: this.quantidade,
                medida: this.medida,
                descricao: this.descricao
            };
            Produtos.create(data)
                .then((response) => console.log(response))
                .catch((error) => console.log(error))

            this.msg = "Cadastro realizado com sucesso"
            setTimeout(() => {
                this.msg = ""
            }, 3000)


            this.nome = "";
            this.quantidade = ""
            this.medida = ""
            this.descricao = ""
        }
    },
    
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
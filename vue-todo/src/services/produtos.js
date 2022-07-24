import Api from "./api";


class Produtos extends Api {
    async create(data){
        const response = await this.api.post("produtos/cadastrar", 
        data, {
            headers: {
                Accept: "application/json"
            }
        });

        return response;
    }

    async getProducts(){
        const response = await this.api.get("produtos/listar")

        return response
    }

    async getProductsById(id){
        const response = await this.api.get(`produtos/${id}/pesquisar`)

        return response
    }

    async updateProducts(data){
        const response = await this.api.put(`produtos/${data.id}/atualizar`, 
        data, {
            headers: {
                Accept: "application/json"
            }
        });

        return response;
    }

    async deleteProductsById(id){
        const response = await this.api.delete(`produtos/${id}/deletar`)

        return response
    }

}

export default new Produtos();
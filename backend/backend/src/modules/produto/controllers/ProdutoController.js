const Produto = require('../models/Produto');

module.exports = {
    async cadastrar(req, res) {
        try{
            const { nome, descricao, medida, quantidade} = req.body;

            const produto = await Produto.create({nome, descricao, medida, quantidade});

            return res.status(200).json({message: "Produto inserido com sucesso!!!"});
        }catch(err){
            return res.status(400).json(err);
        }
    },

    async listar(req, res) {
        try{
            const produtos = await Produto.findAll();

            return res.status(200).json(produtos);
        }catch(err){
            return res.status(400).json(err);
        }
    },

    async listarUm(req, res) {
        try{
            const { id } =  req.params;
            const produto = await Produto.findByPk(id);

            if(!produto){
                return res.status(400).json({message: "Produto não encontrado!"})
            }
    
            return res.status(200).json(produto);
        }catch(err){
            return res.status(400).json(err);
        }
        
    },

    async atualizar(req, res) {

        const { id } = req.params;

        const { nome, descricao, medida, quantidade} = req.body;
        console.log(id, nome, descricao, medida, quantidade)
        try{
            const produtoExiste = await Produto.findByPk(id);
          
            if(!produtoExiste){
                return res.status(400).json({message: "Produto não encontrado!"})
            }
            
            await Produto.update({nome, descricao, medida, quantidade},
                {where: { id } });
    
            return res.status(200).json({message:" Atualizado com sucesso!!!"});
        }catch(err){
            return res.status(400).json(err);
        }
    },

    async deletar(req, res) {
        const { id } = req.params;

        try{
            const produtoExiste = await Produto.findByPk(id);

            console.log('existe ',produtoExiste);
           
            if(!produtoExiste){
                return res.status(400).json({message: "Produto não encontrado!"})
            }
            
            await Produto.destroy({ where: {id}});
    
            return res.status(200).json({message:" Deletado com sucesso!!!"});
        }catch(err){
            return res.status(400).json(err);
        }

    }
}
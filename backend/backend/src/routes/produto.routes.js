const { Router } = require("express");
const ProdutoController = require("../modules/produto/controllers/ProdutoController")

const produtoRouter = Router();

produtoRouter.post("/cadastrar", ProdutoController.cadastrar);
produtoRouter.get("/listar", ProdutoController.listar);
produtoRouter.get("/:id/pesquisar", ProdutoController.listarUm);
produtoRouter.put("/:id/atualizar", ProdutoController.atualizar);
produtoRouter.delete("/:id/deletar", ProdutoController.deletar);

module.exports = produtoRouter;
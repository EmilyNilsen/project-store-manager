const { expect } = require('chai');
const productModel = require('../../../models/productsModels');

describe('Cria endpoints para listar os produtos', () => {
  describe('Listar todos os produtos', () => {
    it('o resultado é um array', async () => {
      const products = await productModel.getAll();
      expect(products).to.be.an('array');
    })
    it('cada propriedade no array tem id, name e quantity', async () => {
      const products = await productModel.getAll();

      products.forEach(prod => {
        expect(prod).to.have.keys('id', 'name', 'quantity');
      })
    })
  });
});

const sinon = require("sinon");
const { expect } = require('chai');

const ProductServices = require('../../../services/productsServices');
const ProductModel = require('../../../models/productsModels');

describe('3 - Teste a camada Service do endpoint products', () => {
  describe('3.1 - Quando não existem produtos cadastrados', () => {
    before(() => {
      sinon.stub(ProductModel,'getAll').resolves([]);
    });

    after(() => {
      ProductModel.getAll.restore();
    });
  
    it('Retorno é um array vazio', async () => {
      const products = await ProductServices.getAll();

      expect(products).to.be.an('array');
      expect(products).to.be.empty;
    });
  });

  describe('3.2 - Quando existem produtos cadastrado', () => {
    before(() => {
      const product = {
        id: 1,
        name: 'Martelo de Thor',
        quantity: 12,
      };

      sinon.stub(ProductModel,'getAll').resolves([ product ]);
    });

    after(() => {
      ProductModel.getAll.restore();
    });

    it('Retorna um array de objetos', async () => {
      const products = await ProductServices.getAll();

      expect(products).to.be.an('array');
      expect(products).not.to.be.empty;
      products.forEach(p => expect(p).to.be.an('object'));
    });

    it('Cada objeto no array deve ter as chaves id, name e quantity', async () => {
      const products = await ProductServices.getAll();

      expect(products).not.to.be.empty;
      products.forEach(prod => expect(prod).to.include.all.keys('id', 'name', 'quantity'));
    });
  });
});

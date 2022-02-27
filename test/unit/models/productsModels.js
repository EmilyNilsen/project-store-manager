const sinon = require("sinon");
const { expect } = require('chai');
const productModel = require('../../../models/productsModels');
const connection = require('../../../models/connection');

describe('Lista todos os produtos do BD', () => {
  describe('Quando não existe produtos no BD', () => {
    before(() => {
      const products = [[], []];
      sinon.stub(connection, 'execute').resolves(products);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna um array vazio', async () => {
      const products = await productModel.getAll();

      expect(products).to.be.an('array');
      expect(products).to.be.empty;
    });
  });

  describe('Quando existe produtos no BD', () => {
    before(() => {
      const product = {
        id: 1,
        name: 'Martelo de Thor',
        quantity: 12,
      }
      const result = [[product], []];
      sinon.stub(connection, 'execute').resolves(result);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Retorna um array de objetos', async () => {
      const products = await productModel.getAll();

      expect(products).to.be.an('array');
      expect(products).not.to.be.empty;
      products.forEach(p => expect(p).to.be.an('object'));
    });
    it('Cada objeto no array deve ter as chaves id, name e quantity', async () => {
      const products = await productModel.getAll();
      
      expect(products).not.to.be.empty;
      products.forEach(prod => expect(prod).to.include.all.keys('id', 'name', 'quantity'));
    });
  });

  describe('Insere um produto no BD' , () => {
    describe('Quando é inserido com sucesso', () => {
    before(() => {
      const objectFromDataBase = [
        {
        name: "Exempo product",
        quantity: 15
        }
      ];

      sinon.stub(connection, 'execute').resolves(objectFromDataBase);
    });

    after(() => {
      connection.execute.restore();
    });

      it('retorna um objeto', async () => {
        const productToBeCreated = [{
          name: "Exempo product",
          quantity: 15
        }];
        const product =  await productModel.createNewProduct(productToBeCreated);

        expect(product).to.be.a('object');
      });
      it('o produto novo possui "id"', async () => {
        const product = await productModel.createNewProduct([{ name: 'Exempo product', quantity: 15 }])
        expect(product).to.have.a.property('id')
      });
    });
  });
});

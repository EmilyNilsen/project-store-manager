const sinon = require("sinon");
const { expect } = require('chai');

const saleModel = require('../../../models/salesModels');
const connection = require('../../../models/connection');

describe('2 - Teste a camada model do endpoint sales', () => {
  describe('2.1 - Quando não existe vendas no banco de dados', () => {
    before(() => {
      const sales = [[], []];
      sinon.stub(connection, 'execute').resolves(sales);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Retorna um array vazio', async () => {
      const sales = await saleModel.getAllSales();

      expect(sales).to.be.an('array');
      expect(sales).to.be.empty;
    });
  });
  describe('2.2- Quando existe vendas no banco de dados', async () => {
    before(() => {
      const sale = [
        {
          saleId: 1,
          date: "2022-03-03T20:13:53.000Z",
          productId: 1,
          quantity: 5
        },
        {
          saleId: 1,
          date: "2022-03-03T20:13:53.000Z",
          productId: 2,
          quantity: 10
        }
      ]
    const result = [sale];
    sinon.stub(connection, 'execute').resolves(result);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Retorna um array de objetos', async () => {
      const sales = await saleModel.getAllSales();
      expect(sales).to.be.an('array');
      expect(sales).not.to.be.empty;
      sales.forEach(s => expect(s).to.be.an('object'));
    });
    it('Cada objeto no array deve ter as chaves saleId, date, productId e quantity', async () => {
      const sales = await saleModel.getAllSales();
      
      expect(sales).not.to.be.empty;
      sales.forEach(sale => expect(sale).to.include.all.keys('saleId', 'date', 'productId', 'quantity'));
    });
  })
});

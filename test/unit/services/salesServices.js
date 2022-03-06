const sinon = require("sinon");
const { expect } = require('chai');

const salesService = require('../../../services/salesServices');
const salesModels = require('../../../models/salesModels');

describe('3 - Teste a camada Service do endpoint sales', () => {
  describe('3.1 quando não existem vendas cadastradas', () => {
    before(() => {
      sinon.stub(salesModels, 'getAllSales').resolves([]);
    });

    after(() => {
      salesModels.getAllSales.restore();
    });

    it('Retorno é um arrray vazio', async () => {
      const sales = await salesService.getAllSales();

      expect(sales).to.be.an('array');
      expect(sales).to.be.empty;
    });
  });
    describe('3.2 - Quando existe vendas cadastradas', async () => {
      before(() => {
        const sale = {
          saleId: 1,
          date: "2022-03-03T20:13:53.000Z",
          productId: 1,
          quantity: 5
        };

        sinon.stub(salesModels, 'getAllSales').resolves([sale])
      });

      after(() => {
        salesModels.getAllSales.restore();
      });

      it('Retorna um array de objetos', async () => {
        const sales = await salesService.getAllSales();

        expect(sales).to.be.an('array');
        expect(sales).not.to.be.empty;
        sales.forEach(s => expect(s).to.be.an('object'));
      });

      it('Cada objeto no array deve ter as chaves saleId, date, productId e quantity', async () => {
        const sales = await saleModel.getAllSales();
      
        expect(sales).not.to.be.empty;
        sales.forEach(sale => expect(sale).to.include.all.keys('saleId', 'date', 'productId', 'quantity'));
      });
    });
});

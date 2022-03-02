const sinon = require("sinon");
const { expect } = require('chai');

const salesControllers = require('../../../controllers/ salesControllers');
const salesService = require('../../../services/salesServices');

describe('Ao chamar a controller listSales', () => {
  let request = {}, response = {}, next = {};

  describe('Quandndo o serviço retorna um array vazio', () => {
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(salesService, 'getAllSales').resolves([]);
    });

    after(() => {
      salesService.getAllSales.restore();
    });

    it('responde a requisição com com status 200', async () => {
      await salesControllers.getAllSales(request, response, next);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('res.json é chamado passando um array de objetos', async () => {
      await salesControllers.getAllSales(request, response, next);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });

  describe('Quando ocorre um erro no serviço', () => {
    const err = Error('erro no serviço');
    before(() => {
      next = sinon.stub();
      sinon.stub(salesService, 'getAllSales').throws(err);
    });
    after(() => {
      salesService.getAllSales.restore();
    });

    it('O erro é passado para o próximo handler de erro na lista de handlers', async () => {
      await salesControllers.getAllSales(request, response, next);

      expect(next.calledWith(sinon.match(err))).to.be.equal(true);
    });
  });
});

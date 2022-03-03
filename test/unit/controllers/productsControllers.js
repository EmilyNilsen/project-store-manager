const sinon = require("sinon");
const { expect } = require('chai');

const productController = require('../../../controllers/productsControllers');
const ProductServices = require ('../../../services/productsServices');

describe('Ao chamar o controller listProducts', () =>{
  let request = {}, response = {}, next = {};
  
  describe('Quando o serviço retorna um array de produtos', () => {
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(ProductServices, 'getAll').resolves([]);
    });

    after(() => {
      ProductServices.getAll.restore();
    });

    it('responde a requisição com status 200', async () => {
      await productController.getAllProducts(request, response, next);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('res.json() é chamado passando um array', async () => {
      await productController.getAllProducts(request, response, next);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });

  describe('Quando ocorre um erro no serviço', () => {
    const err = Error('erro no serviço');
    before(() => {
      next = sinon.stub();
      sinon.stub(ProductServices, 'getAll').throws(err);
    });

    after(()=> {
      ProductServices.getAll.restore();
    });

    it ('o erro é passado para o próximo handler de erro na lista de handlers', async () =>{
      await productController.getAllProducts(request, response, next);
      expect(next.calledWith(sinon.match(err))).to.be.equal(true);
    });
  });
});

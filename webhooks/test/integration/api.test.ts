// not using assert and should, using only expect
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
const app = require("../../src/index");
import productMock from "../fixtures/mock";
describe("Webhook API", () => {
  it("should return 200", async () => {
    const res = await chai.request(app).post("/handle-event").send(productMock);
    expect(res.status).to.equal(200);
  });
});

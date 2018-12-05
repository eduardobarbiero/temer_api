module.exports = (server, assert) => {
  describe("Orders test", function () {

    let order = {
      "clientId": 2,
      "orderItems": [
        {

          "productId": 3,
          "price": 1000,
          "quantity": 2
        },
        {

          "productId": 3,
          "price": 5000,
          "quantity": 2
        }
      ]
    };

    it("Create Order", function (done) {
      server
        .post("/api/orders")
        .send(order)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          assert.equal(res.body.clientId, 2)
          assert.equal(res.body.orderItems.length, 2)
          order = res.body;
          done(err);
        });
    });

    it("Get Order", function (done) {
      server
        .get("/api/orders/" + order.id)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it("Update Order", function (done) {
      server
        .put("/api/orders/" + order.id)
        .send({ clientId: 3 })
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          assert.equal(res.body, true)
          done(err);
        });
    });

    it("Delete Order", function (done) {
      server
        .delete("/api/orders/" + order.id)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          assert.equal(res.body, true)
          done(err);
        });
    });

    it("Get Orders", function (done) {
      server
        .get("/api/orders")
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

  });
};
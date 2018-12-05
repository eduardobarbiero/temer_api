module.exports = (server, assert) => {
  describe("products test", function(){

    it("Get Products", function(done){    
      server
      .get("/api/products")
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });  
    
  });
};
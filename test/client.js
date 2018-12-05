module.exports = (server, assert) => {
  describe("clients test", function(){

    it("Get Clients", function(done){    
      server
      .get("/api/clients")
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });  
  });
};
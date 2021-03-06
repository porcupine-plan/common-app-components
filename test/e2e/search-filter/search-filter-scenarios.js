(function() {
  "use strict";
  var expect = require('rv-common-e2e').expect;
  browser.driver.manage().window().setSize(1024, 768);

  describe("search filter", function() {
    beforeEach(function () {
      browser.get("/test/e2e/search-filter/search-filter-scenarios.html");
    });

    it("Should load", function () {
      expect(element(by.css(".input-group")).isPresent()).to.eventually.be.true;
    });
    
    it("Should show default value", function() {      
      expect(element(by.css(".input-group input")).getAttribute("value"))
        .to.eventually.equal("test");
    });
    
    it("Clear button should clear query", function() {
      element(by.css(".fa-times")).click();
      
      expect(element(by.css(".input-group input")).getAttribute("value"))
        .to.eventually.equal("");
      expect(element(by.id("searchCount")).getText())
        .to.eventually.equal("1");
    });
    
    it("Pressing enter should trigger search", function() {
      element(by.css(".input-group input")).sendKeys("a");
      element(by.css(".input-group input")).sendKeys(protractor.Key.ENTER);
      expect(element(by.id("searchCount")).getText())
        .to.eventually.equal("1");
    });
        
  });

})();

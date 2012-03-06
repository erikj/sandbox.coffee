(function() {
  var Adder, adder;

  Adder = function(a, b) {
    var add, coalesce;
    coalesce = function() {
      if (a == null) a = 0;
      if (b == null) return b = 0;
    };
    add = function() {
      return a + b;
    };
    return {
      add: add
    };
  };

  adder = new Adder(1, 2);

  console.log(adder.add());

}).call(this);

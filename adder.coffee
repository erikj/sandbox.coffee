
# following @ home w/ Node Tuts - Javascript classes, http://vimeo.com/29599974

# adder w/ private methods

Adder = (a,b) ->

  coalesce = () ->
    a=0 unless a?
    b=0 unless b?

  add = () ->
    return a + b

  return {add:add}

adder = new Adder(1,2)
console.log adder.add()

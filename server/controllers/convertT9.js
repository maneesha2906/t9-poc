

const numList = [
  [], 
  [], 
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z']
];

const colours = ['red','orange','yellow','green','blue','indigo','violet','purple','pink','silver','gold','beige','brown','grey','gray','black','white']
exports.convertT9 = function (req, res, next) {
  const numFilter = []
  for (const c of req.query.numString) {
      numFilter.push(numList[c])
  }

 const letComb =  numFilter.reduce((accumulator, item, counter) => {
    let comb = [];
    if(counter === numFilter.length-1){
      for (var i in accumulator) {
        for (var j in item) {
          if(colours.includes(accumulator[i] + item[j]))
            comb.push(accumulator[i] + item[j]);
        }
    }  
    } else{
    for (var i in accumulator) {
        for (var j in item) {
          comb.push(accumulator[i] + item[j]);
        }
    }
  }
    return comb;
})
res.send(letComb)
};



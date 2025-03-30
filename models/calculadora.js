function somar(a, b) {
  if(typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('a e b precisam ser números');
  }
  return a + b;
}

module.exports = {
  somar
};
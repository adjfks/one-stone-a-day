function myJsonParse(json) {
  return eval('(' + json + ')')
}

module.exports = {
  myJsonParse
}

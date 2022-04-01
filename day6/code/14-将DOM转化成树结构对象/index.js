function domToTree(dom) {
  const obj = {}
  obj.tag = dom.tagName
  obj.children = []
  Array.prototype.forEach.call(dom.children, (child) => {
    obj.children.push(domToTree(child))
  })
  return obj
}

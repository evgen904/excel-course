class Dom {
  constructor(elector) {
    this.$el = typeof elector === 'string'
      ? document.querySelector(elector)
      : elector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    } else {
      return this.$el.outerHTML.trim()
    }
  }

  clear() {
    this.html('')
    return this
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }

}

export function $(elector) {
  return new Dom(elector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}

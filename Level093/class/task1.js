class book {
  constructor(title, author, isAvailable) {
    this.title = title
    this.author = author
    this.isAvailable = isAvailable
  }

  borrow() {
    if (this.isAvailable == false) {
      return `You borrowed ${title}`
    } else {
      return `Sorry, ${title} is not available.`
    }
  }
}
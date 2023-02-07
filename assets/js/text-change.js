function title_animation() {
    var title = document.title,
      index_title = 0,
      index_animation = 0,
      element_animation = ["/", "-", "\\", "|", "$", "@", "!", "#", "%", "^", "*"]
  
  
    function start_title_animation() {
      var text_title = title.substring(0, index_title);
  
      if (index_title > title.length) {
        index_animation = 0
        index_title = 0
      }
      if (index_animation > 3) {
        index_title++
        index_animation = 0
  
      }
      document.title = text_title + element_animation[index_animation];
      index_animation++
    }
    window.setInterval(start_title_animation, 150);
  }
  
  title_animation()
  
  
  class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="text-change">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
  
  const phrases = [
    'Selenium',
    'SQLalchemy',
    'PostgreSQL',
    'PyAutoGui',
    'VKbottle',
    'Requests',
    'Aiogram',
    'Scrapy',
    'sqlite',
    'BS4',
  ]
  
  const el = document.querySelector(".change_text")
  const fx = new TextScramble(el)
  
  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 1500)
    })
    counter = (counter + 1) % phrases.length
  }
  
  next()

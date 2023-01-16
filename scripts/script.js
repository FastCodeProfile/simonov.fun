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
  'Александр Симонов',
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

const el = document.querySelector("body > header > span")
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1500)
  })
  counter = (counter + 1) % phrases.length
}

next()


function icon_animation() {
  var icon_name_tg = document.querySelector("body > footer > div:nth-child(1) > p").textContent,
    icon_name_github = document.querySelector("body > footer > div:nth-child(2) > p").textContent,
    icon_name_vk = document.querySelector("body > footer > div:nth-child(3) > p").textContent,
    index_icon_tg = 0,
    index_animation_tg = 0,
    index_icon_github = 0,
    index_animation_github = 0,
    index_icon_vk = 0,
    index_animation_vk = 0,
    element_animation = ["/", "-", "\\", "|", "$", "@", "!", "#", "%", "^", "*"]


  function start_icon_animation() {
    console.log(icon_name_tg)
    var text_title_tg = icon_name_tg.substring(0, index_icon_tg);
    var text_title_github = icon_name_github.substring(0, index_icon_github);
    var text_title_vk = icon_name_vk.substring(0, index_icon_vk);

    if (index_icon_github > icon_name_github.length) {
      index_animation_github = 0
      index_icon_github = 0

    }
    if (index_animation_github > 3) {
      index_icon_github++
      index_animation_github = 0

    }

    if (index_icon_vk > icon_name_vk.length) {
      index_animation_vk = 0
      index_icon_vk = 0

    }
    if (index_animation_vk > 3) {
      index_icon_vk++
      index_animation_vk = 0

    }

    if (index_icon_tg > icon_name_tg.length) {
      index_animation_tg = 0
      index_icon_tg = 0

    }
    if (index_animation_tg > 3) {
      index_icon_tg++
      index_animation_tg = 0

    }
    document.querySelector("body > footer > div:nth-child(1) > p").innerHTML = text_title_tg + element_animation[index_animation_tg];
    document.querySelector("body > footer > div:nth-child(2) > p").innerHTML = text_title_github + element_animation[index_animation_github];
    document.querySelector("body > footer > div:nth-child(3) > p").innerHTML = text_title_vk + element_animation[index_animation_vk];
    index_animation_tg++
    index_animation_github++
    index_animation_vk++
  }
  window.setInterval(start_icon_animation, 200);
}

icon_animation()

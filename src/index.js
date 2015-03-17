var react = require('react')
var app = require('./page')
var page = require('page')
var ee = require('nee')()

var content = (
  { 'Consulting': (
      { title: 'Consulting'
      , body: (
          [ 'Theory Consulting offers private consulting in the creative process of brand articulation for creative professionals, non-profits, and small businesses.'
          , 'You will notice on any content-writing blog two words in excess: story and authenticity. Seems easy enough, right? But when you sit down to write about your own work do a whole lot of blank pages sit in front of you? Or the story comes out feeling flat, devoid of the true passion you feel for your business. This is your life’s work. That in itself is an amazing story, let\'s draw it out together.'
          , 'One-on-one coaching can help you define your brand, build your pitch, and start a sustainable practice to keep yourself engaged within your community. Build your company’s voice from the inside out. A compelling story exists already inside you, your brand, your product--let\'s find the tools to open it up.'
          ]
        )
      }
    )
  , 'Classes': (
      { title: 'Classes'
      , body: (
          [ 'With offerings in creative writing, creative wellness, entrepreneurial writing.'
          , 'Check back in April! Class offerings beginning in June 2015!'
          ]
        )
      }
    )
  , 'Retreats': (
      { title: 'Retreats'
      , body: (
          [ 'As human beings we are naturally creative beings. Be it in the arts, sciences, mathematics, business, or childcare we all have such creative solutions to the problems we face. When we are committed to finding the best solution to the task at hand we are putting our work, our own artform to the world. And yet in our daily lives we lose sight of this and we find that it is difficult to build and continue a creative practice in our day to day existence. Where do we find the time.'
          , 'Our retreats are designed to restore a balance between body and mind. Art, writing, yoga. Each practice require patience and commitment, and occasionally; re-invigoration. Come away with us for a week of creative retreat, yoga, writing practice. Return to your practices with renewed faith in your own creative force. '
          , 'We offer retreats to renew the creative spirit, and re-invigorate the desire to create. There is a creative energy that resides within the body. It is easy to forget that we are by our nature in the universe all creative beings with talents to offer.'
          ]
        )
      }
    )
  }
)

window.addEventListener('load', function (e) {
  var body = document.querySelector('body')
  react.renderComponent(app({ ee: ee, content: content }), body)
  page('*', function (context) {
    var locationString = context.canonicalPath.split('#')[1]
    if (typeof locationString === 'undefined') locationString = '/'

    if (locationString === '/') document.querySelector('body').className = 'splash'
    else document.querySelector('body').className = ''
    ee.emit('nav-click', [locationString])
  })
  page.start()
})

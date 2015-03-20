var react = require('react')
var header = require('./header')
var title = require('./title')
var content = require('./content')
var footer = require('./footer')
var d = react.DOM

module.exports = react.createClass(
  { getInitialState: function () { return { route: '/' } }
  , componentDidMount: function () {
      var self = this
      self.props.ee.on('nav-click', function (route) {
        self.setState({ route: route })
      })
    }
  , render: function () {
      var self = this
      return d.div({ className: (self.state.route === '/') ? 'site splash' : 'site' }
      , [ header({ ee: self.props.ee, sections: Object.keys(self.props.content) })
        , d.main({ className: 'row main-container' }
          , [ title(
                { route: self.state.route
                , ee: self.props.ee
                , nav: self.props.nav
                }
              )
            , content(
                { ee: self.props.ee
                , route: self.state.route
                , content: self.props.content
                }
              )
            ]
          )
        , footer({})
        ]
      )
    }
  }
)

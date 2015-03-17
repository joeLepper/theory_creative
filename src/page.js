var react = require('react')
var title = require('./title')
var header = require('./header')
var content = require('./content')
var page = require('page')
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
      return d.div({ className: (self.state.route === '/') ? 'page splash' : 'page' }
      , [ header({ ee: self.props.ee, sections: Object.keys(self.props.content) })
        , d.div({ className: 'row main-container' }
          , [ title({ route: self.state.route })
            , content(
                { ee: self.props.ee
                , route: self.state.route
                , content: self.props.content
                }
              )
            ]
          )
        ]
      )
    }
  }
)

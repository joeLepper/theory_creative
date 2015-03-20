var react = require('react')
var d = react.DOM

module.exports = react.createClass(
  { render: function () {
      var self = this
      var titleContainerClass = (
        [ 'title-container'
        , 'col-lg-4'
        , 'col-md-6'
        , 'col-sm-6'
        , 'col-xs-12'
        ]
      )
      var titleClass = (
        [ 'col-sm-12'
        , 'col-md-12'
        , 'col-xs-12'
        , 'col-lg-12'
        ]
      )
      var offsetClass = (
        [ 'col-md-offset-2'
        , 'col-sm-offset-2'
        ]
      )
      var height = 150

      return d.div({ className: titleContainerClass.concat(offsetClass).join(' ') }
      , d.div(
          { className: 'row main-title'
          , onClick: function (e) { self.props.nav.redirect('/')  }
          }
        , d.div({ className: titleClass.join(' ') }
          , d.img(
              { height: height
              , width: height * 2.35
              , src: 'img/Theory-logo.png'
              }
            )
          )
        )
      )
    }
  }
)

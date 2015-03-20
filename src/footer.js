var react = require('react')
var d = react.DOM

module.exports = react.createClass(
  { render: function () {
      return d.footer({ className: 'row' }
      , [ d.span({ className: 'col-md-2 col-sm-2 col-xs-4 col-lg-4' }, '928.308.1807')
        , d.a(
            { className: 'col-md-2 col-sm-2 col-xs-4 col-lg-4'
            , href: "mailto:heidi@theory.consulting"
            }
          , 'heidi@theory.consulting'
          )
        ]
      )
    }
  }
)
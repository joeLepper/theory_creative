var react = require('react')
var d = react.DOM

module.exports = react.createClass(
  { render: function () {
      var self = this
      var ee = this.props.ee
      var headerClass = (
        [ 'row'
        , 'start-xs'
        , 'start-sm'
        , 'center-md'
        , 'center-lg'
        ]
      )
      var headerItemClass = (
        [ 'col-md-2'
        , 'col-sm-2'
        , 'col-xs-4'
        ]
      )
      var offsetClass = (
        [ 'col-md-offset-5'
        , 'col-sm-offset-2'
        ]
      )
      var sections = self.props.sections.map(function (loc, i) {
        return d.span({ className:  !i ? headerItemClass.concat(offsetClass).join(' ') : headerItemClass.join(' ') }
        , d.a({ href: '#' + loc, className: 'box' }, loc)
        )
      })
      return d.header({ className: headerClass.join(' ') }, sections)
    }
  }
)

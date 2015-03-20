var react = require('react')
var d = react.DOM

module.exports = react.createClass(
  { render: function () {
      var self = this
      var contentContainerClass = (
        [ 'col-xs-12'
        , 'col-sm-6'
        , 'col-md-6'
        , 'col-lg-6'
        , 'content-container'
        ]
      )

      if (self.props.route === '/') var bodies = title = null
      else {
        var currentContent = self.props.content[self.props.route]
        var bodies = currentContent.body.map(function (a) { return d.p({},a) })
        var title = currentContent.title ? null : d.h3({}, currentContent.title)
      }
      return d.div({ className: contentContainerClass.join(' ') }, [title, bodies])
    }
  }
)

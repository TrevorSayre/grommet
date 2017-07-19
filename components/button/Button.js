var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import deepAssign from 'deep-assign';

import StyledButton, { StyledLabel, StyledIcon } from './StyledButton';

import { withFocus } from '../hocs';

import doc from './doc';

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          a11yTitle = _props.a11yTitle,
          box = _props.box,
          children = _props.children,
          icon = _props.icon,
          focus = _props.focus,
          href = _props.href,
          label = _props.label,
          onClick = _props.onClick,
          plain = _props.plain,
          reverse = _props.reverse,
          theme = _props.theme,
          type = _props.type,
          rest = _objectWithoutProperties(_props, ['a11yTitle', 'box', 'children', 'icon', 'focus', 'href', 'label', 'onClick', 'plain', 'reverse', 'theme', 'type']);

      var contextTheme = this.context.theme;

      var localTheme = deepAssign(contextTheme, theme);

      var Tag = StyledButton;
      if (href) {
        Tag = Tag.withComponent('a');
      }

      var boxProps = void 0;
      if (box) {
        // Let the root element of the Button be a Box element with tag prop
        boxProps = {
          tag: href ? 'a' : 'button'
        };
        // TODO: replace it with Box
        Tag = Tag.withComponent('div');
      }

      var buttonIcon = void 0;
      if (icon) {
        buttonIcon = React.createElement(
          StyledIcon,
          { theme: localTheme },
          icon
        );
      }

      var buttonLabel = void 0;
      if (label) {
        buttonLabel = React.createElement(
          StyledLabel,
          { theme: localTheme },
          label
        );
      }

      var first = reverse ? buttonLabel : buttonIcon;
      var second = reverse ? buttonIcon : buttonLabel;

      var disabled = !href && !onClick && ['reset', 'submit'].indexOf(type) === -1;

      var plainProp = plain || box || Children.count(children) > 0 || icon && !label;

      return React.createElement(
        Tag,
        _extends({}, rest, boxProps, {
          'aria-label': a11yTitle,
          box: box,
          disabled: disabled,
          focus: focus,
          href: href,
          onClick: onClick,
          plain: plainProp,
          theme: localTheme,
          type: type
        }),
        first,
        second,
        children
      );
    }
  }]);

  return Button;
}(Component);

Button.contextTypes = {
  theme: PropTypes.object.isRequired
};


doc(Button);

export default withFocus(Button);
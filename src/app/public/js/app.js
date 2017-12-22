/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _history = __webpack_require__(3);
	
	var _reactDom = __webpack_require__(4);
	
	var _routes = __webpack_require__(5);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _componentsCommonContextWrapper = __webpack_require__(15);
	
	var _componentsCommonContextWrapper2 = _interopRequireDefault(_componentsCommonContextWrapper);
	
	(0, _reactDom.render)(_react2['default'].createElement(
	    _componentsCommonContextWrapper2['default'],
	    { data: window.APP_STATE || {} },
	    _react2['default'].createElement(
	        _reactRouter.Router,
	        { history: (0, _history.createHistory)() },
	        _routes2['default']
	    )
	), document.querySelectorAll('[data-ui-role="content"]')[0]);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = ReactRouter;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = History;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _componentsApp = __webpack_require__(6);
	
	var _componentsApp2 = _interopRequireDefault(_componentsApp);
	
	var _componentsCommonNoMatch = __webpack_require__(8);
	
	var _componentsCommonNoMatch2 = _interopRequireDefault(_componentsCommonNoMatch);
	
	var _componentsDashboardDashboard = __webpack_require__(9);
	
	var _componentsDashboardDashboard2 = _interopRequireDefault(_componentsDashboardDashboard);
	
	var _componentsBillLatestBills = __webpack_require__(10);
	
	var _componentsBillLatestBills2 = _interopRequireDefault(_componentsBillLatestBills);
	
	var _componentsBillDetailedBill = __webpack_require__(14);
	
	var _componentsBillDetailedBill2 = _interopRequireDefault(_componentsBillDetailedBill);
	
	exports['default'] = _react2['default'].createElement(
	    _reactRouter.Route,
	    { path: '/', component: _componentsApp2['default'] },
	    _react2['default'].createElement(
	        _reactRouter.Route,
	        { component: _componentsDashboardDashboard2['default'] },
	        _react2['default'].createElement(_reactRouter.IndexRoute, { component: _componentsBillLatestBills2['default'] }),
	        _react2['default'].createElement(_reactRouter.Route, { path: 'bill/:id', component: _componentsBillDetailedBill2['default'] })
	    ),
	    _react2['default'].createElement(_reactRouter.Route, { path: '*', component: _componentsCommonNoMatch2['default'] })
	);
	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mainHeader = __webpack_require__(7);
	
	var _mainHeader2 = _interopRequireDefault(_mainHeader);
	
	var App = (function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App() {
	        _classCallCheck(this, App);
	
	        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(_mainHeader2['default'], { root: this.props.route.path }),
	                this.props.children
	            );
	        }
	    }]);
	
	    return App;
	})(_react2['default'].Component);
	
	exports['default'] = App;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var Header = (function (_React$Component) {
	    _inherits(Header, _React$Component);
	
	    function Header() {
	        _classCallCheck(this, Header);
	
	        _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Header, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'header',
	                { className: 'app-header' },
	                _react2['default'].createElement(
	                    'h1',
	                    { className: 'title' },
	                    _react2['default'].createElement(
	                        _reactRouter.IndexLink,
	                        { to: this.props.root },
	                        'App'
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Header;
	})(_react2['default'].Component);
	
	exports['default'] = Header;
	module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var NoMatch = (function (_React$Component) {
	    _inherits(NoMatch, _React$Component);
	
	    function NoMatch() {
	        _classCallCheck(this, NoMatch);
	
	        _get(Object.getPrototypeOf(NoMatch.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(NoMatch, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                "section",
	                { className: "app-content" },
	                _react2["default"].createElement(
	                    "header",
	                    { className: "section-header" },
	                    _react2["default"].createElement(
	                        "h3",
	                        { className: "title" },
	                        "Not Found"
	                    )
	                )
	            );
	        }
	    }]);
	
	    return NoMatch;
	})(_react2["default"].Component);
	
	exports["default"] = NoMatch;
	module.exports = exports["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Dashboard = (function (_React$Component) {
	    _inherits(Dashboard, _React$Component);
	
	    function Dashboard() {
	        _classCallCheck(this, Dashboard);
	
	        _get(Object.getPrototypeOf(Dashboard.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(Dashboard, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                "main",
	                { className: "app-content dashboard" },
	                this.props.children
	            );
	        }
	    }]);
	
	    return Dashboard;
	})(_react2["default"].Component);
	
	exports["default"] = Dashboard;
	module.exports = exports["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _axios = __webpack_require__(11);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _commonList = __webpack_require__(12);
	
	var _commonList2 = _interopRequireDefault(_commonList);
	
	var _CompactBill = __webpack_require__(13);
	
	var _CompactBill2 = _interopRequireDefault(_CompactBill);
	
	var LatestBills = (function (_React$Component) {
	    _inherits(LatestBills, _React$Component);
	
	    _createClass(LatestBills, null, [{
	        key: 'requestData',
	        value: function requestData(params) {
	            var domain = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
	
	            return _axios2['default'].get(domain + '/api/latest-bills');
	        }
	    }, {
	        key: 'NAME',
	        get: function get() {
	            return 'LatestBills';
	        }
	    }, {
	        key: 'contextTypes',
	        get: function get() {
	            return {
	                data: _react2['default'].PropTypes.object
	            };
	        }
	    }]);
	
	    function LatestBills(props, context) {
	        _classCallCheck(this, LatestBills);
	
	        _get(Object.getPrototypeOf(LatestBills.prototype), 'constructor', this).call(this, props, context);
	        this.state = context.data[LatestBills.NAME] || { items: [] };
	    }
	
	    _createClass(LatestBills, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'section',
	                { className: 'latest-bills' },
	                _react2['default'].createElement(
	                    'header',
	                    { className: 'section-header' },
	                    _react2['default'].createElement(
	                        'h3',
	                        { className: 'title' },
	                        'Latest Bills'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'section',
	                    { className: 'section-content' },
	                    _react2['default'].createElement(_commonList2['default'], { items: this.state.items, itemType: _CompactBill2['default'] })
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this = this;
	
	            this.constructor.requestData().then(function (response) {
	                _this.setState(response.data);
	            })['catch'](function (err) {
	                throw new Error(err);
	            });
	        }
	    }]);
	
	    return LatestBills;
	})(_react2['default'].Component);
	
	exports['default'] = LatestBills;
	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = axios;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var List = (function (_React$Component) {
	    _inherits(List, _React$Component);
	
	    function List() {
	        _classCallCheck(this, List);
	
	        _get(Object.getPrototypeOf(List.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(List, [{
	        key: "render",
	        value: function render() {
	            var ItemType = this.props.itemType;
	            var items = this.props.items || [];
	            var markupItems = this.createItemsMarkup(items, ItemType);
	
	            return _react2["default"].createElement(
	                "ul",
	                { className: "ui-list" },
	                markupItems
	            );
	        }
	    }, {
	        key: "createItemsMarkup",
	        value: function createItemsMarkup(items, Type) {
	            var markupItems = items.map(function (item) {
	                return _react2["default"].createElement(
	                    "li",
	                    { className: "ui-list-item", key: item.id },
	                    _react2["default"].createElement(Type, { data: item })
	                );
	            });
	
	            return markupItems;
	        }
	    }]);
	
	    return List;
	})(_react2["default"].Component);
	
	exports["default"] = List;
	module.exports = exports["default"];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var CompactBill = (function (_React$Component) {
	    _inherits(CompactBill, _React$Component);
	
	    function CompactBill() {
	        _classCallCheck(this, CompactBill);
	
	        _get(Object.getPrototypeOf(CompactBill.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(CompactBill, [{
	        key: 'render',
	        value: function render() {
	            var data = this.props.data;
	            var amount = '$' + data.amount;
	            var link = this.calculateLink(data);
	
	            return _react2['default'].createElement(
	                'div',
	                { className: 'bill compact-bill' },
	                _react2['default'].createElement('img', { className: 'icon', src: data.icon }),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'info-container' },
	                    _react2['default'].createElement(
	                        'h4',
	                        { className: 'title' },
	                        data.vendor
	                    ),
	                    _react2['default'].createElement(
	                        'span',
	                        { className: 'period' },
	                        data.period
	                    ),
	                    _react2['default'].createElement(
	                        _reactRouter.Link,
	                        { className: 'link', to: link },
	                        'More Details »'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'span',
	                    { className: 'amount' },
	                    amount
	                )
	            );
	        }
	    }, {
	        key: 'calculateLink',
	        value: function calculateLink(data) {
	            return '/bill/' + data.id;
	        }
	    }]);
	
	    return CompactBill;
	})(_react2['default'].Component);
	
	exports['default'] = CompactBill;
	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _axios = __webpack_require__(11);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var DetailedBill = (function (_React$Component) {
	    _inherits(DetailedBill, _React$Component);
	
	    _createClass(DetailedBill, null, [{
	        key: 'requestData',
	        value: function requestData(params) {
	            var domain = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
	
	            return _axios2['default'].get(domain + '/api/bill/' + params.id);
	        }
	    }, {
	        key: 'NAME',
	        get: function get() {
	            return 'DetailedBill';
	        }
	    }, {
	        key: 'contextTypes',
	        get: function get() {
	            return {
	                data: _react2['default'].PropTypes.object
	            };
	        }
	    }]);
	
	    function DetailedBill(props, context) {
	        _classCallCheck(this, DetailedBill);
	
	        _get(Object.getPrototypeOf(DetailedBill.prototype), 'constructor', this).call(this, props, context);
	        this.state = context.data[DetailedBill.NAME] || {};
	    }
	
	    _createClass(DetailedBill, [{
	        key: 'render',
	        value: function render() {
	            var amount = '$' + this.state.amount;
	
	            return _react2['default'].createElement(
	                'section',
	                { className: 'latest-bills' },
	                _react2['default'].createElement(
	                    'header',
	                    { className: 'section-header' },
	                    _react2['default'].createElement(
	                        'h3',
	                        { className: 'title' },
	                        'Bill Details'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'section',
	                    { className: 'section-content' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'bill detailed-bill' },
	                        _react2['default'].createElement('img', { className: 'icon', src: this.state.icon }),
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'info-container' },
	                            _react2['default'].createElement(
	                                'h4',
	                                { className: 'title' },
	                                this.state.vendor
	                            ),
	                            _react2['default'].createElement(
	                                'span',
	                                { className: 'period' },
	                                this.state.period
	                            ),
	                            _react2['default'].createElement('hr', null),
	                            _react2['default'].createElement(
	                                'span',
	                                null,
	                                _react2['default'].createElement(
	                                    'span',
	                                    { className: 'period' },
	                                    'Paid using: '
	                                ),
	                                _react2['default'].createElement(
	                                    'span',
	                                    null,
	                                    this.state.paymeans
	                                )
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            'span',
	                            { className: 'amount' },
	                            amount
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this = this;
	
	            this.constructor.requestData(this.props.params).then(function (response) {
	                _this.setState(response.data);
	            })['catch'](function (err) {
	                throw new Error(err);
	            });
	        }
	    }]);
	
	    return DetailedBill;
	})(_react2['default'].Component);
	
	exports['default'] = DetailedBill;
	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var ContextWrapper = (function (_React$Component) {
	    _inherits(ContextWrapper, _React$Component);
	
	    function ContextWrapper() {
	        _classCallCheck(this, ContextWrapper);
	
	        _get(Object.getPrototypeOf(ContextWrapper.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(ContextWrapper, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                data: this.props.data
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return this.props.children;
	        }
	    }], [{
	        key: 'childContextTypes',
	        get: function get() {
	            return {
	                data: _react2['default'].PropTypes.object
	            };
	        }
	    }]);
	
	    return ContextWrapper;
	})(_react2['default'].Component);
	
	exports['default'] = ContextWrapper;
	module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDk2N2U5MTRkYzdmZTg1YWI0ZjciLCJ3ZWJwYWNrOi8vLy4vYXBwL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0Um91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiSGlzdG9yeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbi9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvY29tbW9uL05vTWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9iaWxsL0xhdGVzdEJpbGxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvY29tbW9uL0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYmlsbC9Db21wYWN0QmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9iaWxsL0RldGFpbGVkQmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb21tb24vQ29udGV4dFdyYXBwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7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NkJBQUUsTUFBTTswQkFBUTtzQkFDdEM7a0JBQ0E7Y0FDSixDQUNaO1VBQ0w7OztnQkFFZ0IsNkJBQUc7OztBQUNoQixpQkFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFRLEVBQUs7QUFDL0QsdUJBQUssUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztjQUNoQyxDQUFDLFNBQU0sQ0FBQyxVQUFDLEdBQUcsRUFBSztBQUNkLHVCQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2NBQ3hCLENBQUMsQ0FBQztVQUNOOzs7WUFyRGdCLFlBQVk7SUFBUyxtQkFBTSxTQUFTOztzQkFBcEMsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDSGYsQ0FBTzs7OztLQUVKLGNBQWM7ZUFBZCxjQUFjOztjQUFkLGNBQWM7K0JBQWQsY0FBYzs7b0NBQWQsY0FBYzs7O2tCQUFkLGNBQWM7O2dCQU1oQiwyQkFBRztBQUNkLG9CQUFPO0FBQ0gscUJBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7Y0FDeEIsQ0FBQztVQUNMOzs7Z0JBRUssa0JBQUc7QUFDTCxvQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztVQUM5Qjs7O2NBYjJCLGVBQUc7QUFDM0Isb0JBQU87QUFDSCxxQkFBSSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO2NBQy9CLENBQUM7VUFDTDs7O1lBTGdCLGNBQWM7SUFBUyxtQkFBTSxTQUFTOztzQkFBdEMsY0FBYyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDk2N2U5MTRkYzdmZTg1YWI0ZjciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQge2NyZWF0ZUhpc3Rvcnl9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuXG5pbXBvcnQgQ29udGV4dFdyYXBwZXIgZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbi9Db250ZXh0V3JhcHBlcic7XG5cbnJlbmRlcigoXG4gICAgPENvbnRleHRXcmFwcGVyIGRhdGE9e3dpbmRvdy5BUFBfU1RBVEUgfHwge319PlxuICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2NyZWF0ZUhpc3RvcnkoKX0+XG4gICAgICAgICAgICB7cm91dGVzfVxuICAgICAgICA8L1JvdXRlcj5cbiAgICA8L0NvbnRleHRXcmFwcGVyPlxuKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdWktcm9sZT1cImNvbnRlbnRcIl0nKVswXSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY2xpZW50LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJvdXRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0Um91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBIaXN0b3J5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiSGlzdG9yeVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0luZGV4Um91dGUsIFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnO1xuaW1wb3J0IE5vTWF0Y2ggZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbi9Ob01hdGNoJztcblxuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZCc7XG5pbXBvcnQgTGF0ZXN0QmlsbHMgZnJvbSAnLi9jb21wb25lbnRzL2JpbGwvTGF0ZXN0QmlsbHMnO1xuaW1wb3J0IERldGFpbGVkQmlsbCBmcm9tICcuL2NvbXBvbmVudHMvYmlsbC9EZXRhaWxlZEJpbGwnO1xuXG5leHBvcnQgZGVmYXVsdCAoXG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxuICAgICAgICA8Um91dGUgY29tcG9uZW50PXtEYXNoYm9hcmR9PlxuICAgICAgICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtMYXRlc3RCaWxsc30vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJiaWxsLzppZFwiIGNvbXBvbmVudD17RGV0YWlsZWRCaWxsfS8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGNvbXBvbmVudD17Tm9NYXRjaH0vPlxuICAgIDwvUm91dGU+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JvdXRlcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9tYWluL0hlYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIHJvb3Q9e3RoaXMucHJvcHMucm91dGUucGF0aH0vPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvYXBwLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7SW5kZXhMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYXBwLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8SW5kZXhMaW5rIHRvPXt0aGlzLnByb3BzLnJvb3R9PkFwcDwvSW5kZXhMaW5rPlxuICAgICAgICAgICAgICAgIDwvaDE+ICBcbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL21haW4vSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9NYXRjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXBwLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPk5vdCBGb3VuZDwvaDM+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvY29tbW9uL05vTWF0Y2guanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImFwcC1jb250ZW50IGRhc2hib2FyZFwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tbW9uL0xpc3QnO1xuaW1wb3J0IENvbXBhY3RCaWxsIGZyb20gJy4vQ29tcGFjdEJpbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXRlc3RCaWxscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgICByZXR1cm4gJ0xhdGVzdEJpbGxzJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGNvbnRleHRUeXBlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QgICAgICAgICAgICBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVxdWVzdERhdGEocGFyYW1zLCBkb21haW4gPSAnJykge1xuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGAke2RvbWFpbn0vYXBpL2xhdGVzdC1iaWxsc2ApO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGNvbnRleHQuZGF0YVtMYXRlc3RCaWxscy5OQU1FXSB8fCB7aXRlbXM6IFtdfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsYXRlc3QtYmlsbHNcIj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPkxhdGVzdCBCaWxsczwvaDM+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IGl0ZW1zPXt0aGlzLnN0YXRlLml0ZW1zfSBpdGVtVHlwZT17Q29tcGFjdEJpbGx9Lz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IucmVxdWVzdERhdGEoKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL2JpbGwvTGF0ZXN0QmlsbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXhpb3NcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBJdGVtVHlwZSA9IHRoaXMucHJvcHMuaXRlbVR5cGU7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5pdGVtcyB8fCBbXTtcbiAgICAgICAgY29uc3QgbWFya3VwSXRlbXMgPSB0aGlzLmNyZWF0ZUl0ZW1zTWFya3VwKGl0ZW1zLCBJdGVtVHlwZSk7XG5cbiAgICAgICAgcmV0dXJuICg8dWwgY2xhc3NOYW1lPVwidWktbGlzdFwiPnttYXJrdXBJdGVtc308L3VsPik7XG4gICAgfVxuXG4gICAgY3JlYXRlSXRlbXNNYXJrdXAoaXRlbXMsIFR5cGUpIHtcbiAgICAgICAgY29uc3QgbWFya3VwSXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0pID0+IHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInVpLWxpc3QtaXRlbVwiIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBlIGRhdGE9e2l0ZW19Lz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1hcmt1cEl0ZW1zO1xuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvY29tbW9uL0xpc3QuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wYWN0QmlsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICBjb25zdCBhbW91bnQgPSBgJCR7ZGF0YS5hbW91bnR9YDtcbiAgICAgICAgY29uc3QgbGluayA9IHRoaXMuY2FsY3VsYXRlTGluayhkYXRhKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWxsIGNvbXBhY3QtYmlsbFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17ZGF0YS5pY29ufS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj57ZGF0YS52ZW5kb3J9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGVyaW9kXCI+e2RhdGEucGVyaW9kfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibGlua1wiIHRvPXtsaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1vcmUgRGV0YWlscyAmIzE4NztcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFtb3VudFwiPnthbW91bnR9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlTGluayhkYXRhKSB7XG4gICAgICAgIHJldHVybiBgL2JpbGwvJHtkYXRhLmlkfWA7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvYmlsbC9Db21wYWN0QmlsbC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxlZEJpbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgICAgcmV0dXJuICdEZXRhaWxlZEJpbGwnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgY29udGV4dFR5cGVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCAgICAgICAgICAgIFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyByZXF1ZXN0RGF0YShwYXJhbXMsIGRvbWFpbiA9ICcnKSB7XG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoYCR7ZG9tYWlufS9hcGkvYmlsbC8ke3BhcmFtcy5pZH1gKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBjb250ZXh0LmRhdGFbRGV0YWlsZWRCaWxsLk5BTUVdIHx8IHt9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gYCQke3RoaXMuc3RhdGUuYW1vdW50fWA7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxhdGVzdC1iaWxsc1wiPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+QmlsbCBEZXRhaWxzPC9oMz5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWxsIGRldGFpbGVkLWJpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17dGhpcy5zdGF0ZS5pY29ufS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMuc3RhdGUudmVuZG9yfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGVyaW9kXCI+e3RoaXMuc3RhdGUucGVyaW9kfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwZXJpb2RcIj5QYWlkIHVzaW5nOiA8L3NwYW4+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5zdGF0ZS5wYXltZWFuc308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbW91bnRcIj57YW1vdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnJlcXVlc3REYXRhKHRoaXMucHJvcHMucGFyYW1zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL2JpbGwvRGV0YWlsZWRCaWxsLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBnZXQgY2hpbGRDb250ZXh0VHlwZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0ICAgICAgICAgICAgXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IHRoaXMucHJvcHMuZGF0YVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvY29tbW9uL0NvbnRleHRXcmFwcGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
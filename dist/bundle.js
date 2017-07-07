webpackJsonp([1],Array(20).concat([
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(19);


/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  __WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */]('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(207);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */](value) || __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */](value) != objectTag) {
    return false;
  }
  var proto = __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */](value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(237);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */](action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(201);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(74)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(217)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(96);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default.a(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default.a(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default.a(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidMount` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (process.env.NODE_ENV !== 'production') {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          if (this.subscription) this.subscription.tryUnsubscribe();
          this.initSubscription();
          if (shouldHandleStateChanges) this.subscription.trySubscribe();
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default.a(Connect, WrappedComponent);
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(99);


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (process.env.NODE_ENV !== 'production') __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */](props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifyPlainObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(54);



function verifyPlainObject(value, displayName, methodName) {
  if (!__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */](value)) {
    __WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */](methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(58);

var _redux = __webpack_require__(52);

var _reactRedux = __webpack_require__(215);

var _reduxThunk = __webpack_require__(228);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = __webpack_require__(229);

var _index2 = _interopRequireDefault(_index);

var _app = __webpack_require__(232);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = [_reduxThunk2.default];

var store = (0, _redux.createStore)(_index2.default, _redux.applyMiddleware.apply(undefined, middleware));

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_app2.default, null)
), document.getElementById("app"));

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(204);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */](value)
    : __WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */](value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(202);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(33)))

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(92);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(206);


/** Built-in value references. */
var getPrototype = __WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */](Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(209);


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(211);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33), __webpack_require__(210)(module)))

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(93);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */](inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        __WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */]('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        __WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */](warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(94);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(221);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(54);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  __WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */]('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (process.env.NODE_ENV !== 'production') {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);
  Provider.displayName = 'Provider';

  return Provider;
}

/* harmony default export */ __webpack_exports__["b"] = (createProvider());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(8);
var invariant = __webpack_require__(1);
var ReactPropTypesSecret = __webpack_require__(43);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(226);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(98);



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */](mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */](function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */](function (dispatch) {
    return __WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"](mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(98);


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */](mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */](function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(99);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (process.env.NODE_ENV !== 'production') __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */](mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(227);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (process.env.NODE_ENV !== 'production') {
    __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__["a" /* default */](mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifySubselectors;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(54);


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      __WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */]('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(52);

var _profile = __webpack_require__(230);

var _profile2 = _interopRequireDefault(_profile);

var _routes = __webpack_require__(231);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  profile: _profile2.default
});

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var profile = function profile() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'UPDATE_PROFILE':
      return state;
    default:
      return state;
  }
};

exports.default = profile;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _map = __webpack_require__(233);

var _map2 = _interopRequireDefault(_map);

var _profile = __webpack_require__(238);

var _profile2 = _interopRequireDefault(_profile);

var _style = __webpack_require__(241);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          store;
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_map2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _mapstyles = __webpack_require__(234);

var _mapstyles2 = _interopRequireDefault(_mapstyles);

var _mapboxGl = __webpack_require__(57);

var _mapboxGl2 = _interopRequireDefault(_mapboxGl);

var _style = __webpack_require__(235);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = function (_Component) {
  _inherits(Map, _Component);

  function Map() {
    _classCallCheck(this, Map);

    return _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).apply(this, arguments));
  }

  _createClass(Map, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      var map = new _mapboxGl2.default.Map({
        container: 'map',
        style: _mapstyles2.default
      });

      map.addControl(new _mapboxGl2.default.NavigationControl(), 'top-right');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { id: 'map' })
      );
    }
  }]);

  return Map;
}(_react.Component);

;

exports.default = Map;

/***/ }),
/* 234 */
/***/ (function(module, exports) {

module.exports = {
	"version": 8,
	"name": "Bright",
	"sources": {
		"mapbox": {
			"url": "https://osm2vectortiles.tileserver.com/v2.json",
			"type": "vector"
		}
	},
	"sprite": "https://raw.githubusercontent.com/osm2vectortiles/mapbox-gl-styles/master/sprites/bright-v9",
	"glyphs": "https://raw.githubusercontent.com/osm2vectortiles/mapbox-gl-styles/master/glyphs/{fontstack}/{range}.pbf",
	"metadata": {
		"mapbox:autocomposite": true,
		"mapbox:type": "template",
		"mapbox:groups": {
			"1444849364238.8171": {
				"name": "Buildings",
				"collapsed": true
			},
			"1444849354174.1904": {
				"name": "Tunnels",
				"collapsed": true
			},
			"1444849320558.5054": {
				"name": "Water labels",
				"collapsed": true
			},
			"1444849371739.5945": {
				"name": "Aeroways",
				"collapsed": true
			},
			"1444849258897.3083": {
				"name": "Marine labels",
				"collapsed": true
			},
			"1444849388993.3071": {
				"name": "Landuse",
				"collapsed": true
			},
			"1444849242106.713": {
				"name": "Country labels",
				"collapsed": true
			},
			"1444849382550.77": {
				"name": "Water",
				"collapsed": true
			},
			"1444849345966.4436": {
				"name": "Roads",
				"collapsed": true
			},
			"1444849307123.581": {
				"name": "Admin  lines",
				"collapsed": true
			},
			"1456163609504.0715": {
				"name": "Road labels",
				"collapsed": true
			},
			"1444849272561.29": {
				"name": "Place labels",
				"collapsed": true
			},
			"1444849290021.1838": {
				"name": "Road labels",
				"collapsed": true
			},
			"1444849334699.1902": {
				"name": "Bridges",
				"collapsed": true
			},
			"1444849297111.495": {
				"name": "POI labels",
				"collapsed": true
			}
		}
	},
	"layers": [
		{
			"id": "background",
			"type": "background",
			"paint": {
				"background-color": "#f8f4f0"
			},
			"interactive": true
		},
		{
			"id": "landuse_overlay_national_park",
			"type": "fill",
			"source": "mapbox",
			"source-layer": "landuse_overlay",
			"filter": [
				"==",
				"class",
				"national_park"
			],
			"paint": {
				"fill-color": "#d8e8c8",
				"fill-opacity": 0.75
			},
			"metadata": {
				"mapbox:group": "1444849388993.3071"
			},
			"interactive": true
		},
		{
			"id": "landuse_park",
			"type": "fill",
			"source": "mapbox",
			"source-layer": "landuse",
			"filter": [
				"==",
				"class",
				"park"
			],
			"paint": {
				"fill-color": "#d8e8c8"
			},
			"metadata": {
				"mapbox:group": "1444849388993.3071"
			},
			"interactive": true
		},
		{
			"id": "landuse_cemetery",
			"type": "fill",
			"source": "mapbox",
			"source-layer": "landuse",
			"filter": [
				"==",
				"class",
				"cemetery"
			],
			"paint": {
				"fill-color": "#e0e4dd"
			},
			"metadata": {
				"mapbox:group": "1444849388993.3071"
			},
			"interactive": true
		},
		{
			"id": "landuse_hospital",
			"type": "fill",
			"source": "mapbox",
			"source-layer": "landuse",
			"filter": [
				"==",
				"class",
				"hospital"
			],
			"paint": {
				"fill-color": "#fde"
			},
			"metadata": {
				"mapbox:group": "1444849388993.3071"
			},
			"interactive": true
		},
		{
			"id": "landuse_school",
			"type": "fill",
			"source": "mapbox",
			"source-layer": "landuse",
			"filter": [
				"==",
				"class",
				"school"
			],
			"paint": {
				"fill-color": "#f0e8f8"
			},
			"metadata": {
				"mapbox:group": "1444849388993.3071"
			},
			"interactive": true
		},
		{
			"id": "landuse_wood",
			"type": "fill",
			"source": "mapbox",
			"source-layer": "landuse",
			"filter": [
				"==",
				"class",
				"wood"
			],
			"paint": {
				"fill-color": "#6a4",
				"fill-opacity": 0.1
			},
			"metadata": {
				"mapbox:group": "1444849388993.3071"
			},
			"interactive": true
		},
		{
			"interactive": true,
			"layout": {
				"line-cap": "round"
			},
			"metadata": {
				"mapbox:group": "1444849382550.77"
			},
			"filter": [
				"all",
				[
					"!=",
					"class",
					"river"
				],
				[
					"!=",
					"class",
					"stream"
				],
				[
					"!=",
					"class",
					"canal"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "waterway",
			"paint": {
				"line-color": "#a0c8f0",
				"line-width": {
					"base": 1.3,
					"stops": [
						[
							13,
							0.5
						],
						[
							20,
							2
						]
					]
				}
			},
			"source-layer": "waterway"
		},
		{
			"interactive": true,
			"layout": {
				"line-cap": "round"
			},
			"metadata": {
				"mapbox:group": "1444849382550.77"
			},
			"filter": [
				"==",
				"class",
				"river"
			],
			"type": "line",
			"source": "mapbox",
			"id": "waterway_river",
			"paint": {
				"line-color": "#a0c8f0",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							11,
							0.5
						],
						[
							20,
							6
						]
					]
				}
			},
			"source-layer": "waterway"
		},
		{
			"interactive": true,
			"layout": {
				"line-cap": "round"
			},
			"metadata": {
				"mapbox:group": "1444849382550.77"
			},
			"filter": [
				"in",
				"class",
				"stream",
				"canal"
			],
			"type": "line",
			"source": "mapbox",
			"id": "waterway_stream_canal",
			"paint": {
				"line-color": "#a0c8f0",
				"line-width": {
					"base": 1.3,
					"stops": [
						[
							13,
							0.5
						],
						[
							20,
							6
						]
					]
				}
			},
			"source-layer": "waterway"
		},
		{
			"id": "water",
			"type": "fill",
			"source": "mapbox",
			"source-layer": "water",
			"paint": {
				"fill-color": "#a0c8f0"
			},
			"metadata": {
				"mapbox:group": "1444849382550.77"
			},
			"interactive": true
		},
		{
			"interactive": true,
			"minzoom": 11,
			"metadata": {
				"mapbox:group": "1444849371739.5945"
			},
			"filter": [
				"==",
				"$type",
				"Polygon"
			],
			"type": "fill",
			"source": "mapbox",
			"id": "aeroway_fill",
			"paint": {
				"fill-color": "#f0ede9",
				"fill-opacity": 0.7
			},
			"source-layer": "aeroway"
		},
		{
			"interactive": true,
			"minzoom": 11,
			"metadata": {
				"mapbox:group": "1444849371739.5945"
			},
			"filter": [
				"all",
				[
					"==",
					"$type",
					"LineString"
				],
				[
					"==",
					"type",
					"runway"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "aeroway_runway",
			"paint": {
				"line-color": "#f0ede9",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							11,
							3
						],
						[
							20,
							16
						]
					]
				}
			},
			"source-layer": "aeroway"
		},
		{
			"interactive": true,
			"minzoom": 11,
			"metadata": {
				"mapbox:group": "1444849371739.5945"
			},
			"filter": [
				"all",
				[
					"==",
					"$type",
					"LineString"
				],
				[
					"==",
					"type",
					"taxiway"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "aeroway_taxiway",
			"paint": {
				"line-color": "#f0ede9",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							11,
							0.5
						],
						[
							20,
							6
						]
					]
				}
			},
			"source-layer": "aeroway"
		},
		{
			"id": "building",
			"type": "fill",
			"source": "mapbox",
			"source-layer": "building",
			"paint": {
				"fill-color": {
					"base": 1,
					"stops": [
						[
							15.5,
							"#f2eae2"
						],
						[
							16,
							"#dfdbd7"
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849364238.8171"
			},
			"interactive": true
		},
		{
			"id": "building_top",
			"paint": {
				"fill-color": "#f2eae2",
				"fill-opacity": {
					"base": 1,
					"stops": [
						[
							15,
							0
						],
						[
							16,
							1
						]
					]
				},
				"fill-translate": {
					"stops": [
						[
							15,
							[
								0,
								0
							]
						],
						[
							16,
							[
								-2,
								-2
							]
						]
					],
					"base": 1
				},
				"fill-outline-color": "#dfdbd7"
			},
			"metadata": {
				"mapbox:group": "1444849364238.8171"
			},
			"interactive": true,
			"ref": "building"
		},
		{
			"interactive": true,
			"layout": {
				"line-join": "round",
				"visibility": "visible"
			},
			"metadata": {
				"mapbox:group": "1444849354174.1904"
			},
			"filter": [
				"all",
				[
					"==",
					"structure",
					"tunnel"
				],
				[
					"==",
					"class",
					"motorway_link"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "tunnel_motorway_link_casing",
			"paint": {
				"line-color": "#e9ac77",
				"line-dasharray": [
					0.5,
					0.25
				],
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							12,
							1
						],
						[
							13,
							3
						],
						[
							14,
							4
						],
						[
							20,
							15
						]
					]
				},
				"line-opacity": 1
			},
			"source-layer": "road"
		},
		{
			"interactive": true,
			"layout": {
				"line-join": "round"
			},
			"metadata": {
				"mapbox:group": "1444849354174.1904"
			},
			"filter": [
				"all",
				[
					"==",
					"structure",
					"tunnel"
				],
				[
					"in",
					"class",
					"service",
					"track"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "tunnel_service_track_casing",
			"paint": {
				"line-color": "#cfcdca",
				"line-dasharray": [
					0.5,
					0.25
				],
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							15,
							1
						],
						[
							16,
							4
						],
						[
							20,
							11
						]
					]
				}
			},
			"source-layer": "road"
		},
		{
			"interactive": true,
			"layout": {
				"line-join": "round"
			},
			"metadata": {
				"mapbox:group": "1444849354174.1904"
			},
			"filter": [
				"all",
				[
					"==",
					"structure",
					"tunnel"
				],
				[
					"==",
					"class",
					"link"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "tunnel_link_casing",
			"paint": {
				"line-color": "#e9ac77",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							12,
							1
						],
						[
							13,
							3
						],
						[
							14,
							4
						],
						[
							20,
							15
						]
					]
				},
				"line-opacity": 1
			},
			"source-layer": "road"
		},
		{
			"interactive": true,
			"layout": {
				"line-join": "round"
			},
			"metadata": {
				"mapbox:group": "1444849354174.1904"
			},
			"filter": [
				"all",
				[
					"==",
					"structure",
					"tunnel"
				],
				[
					"in",
					"class",
					"street",
					"street_limited"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "tunnel_street_casing",
			"paint": {
				"line-color": "#cfcdca",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							12,
							0.5
						],
						[
							13,
							1
						],
						[
							14,
							4
						],
						[
							20,
							15
						]
					]
				},
				"line-opacity": {
					"stops": [
						[
							12,
							0
						],
						[
							12.5,
							1
						]
					]
				}
			},
			"source-layer": "road"
		},
		{
			"interactive": true,
			"layout": {
				"line-join": "round"
			},
			"metadata": {
				"mapbox:group": "1444849354174.1904"
			},
			"filter": [
				"all",
				[
					"==",
					"structure",
					"tunnel"
				],
				[
					"in",
					"class",
					"secondary",
					"tertiary"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "tunnel_secondary_tertiary_casing",
			"paint": {
				"line-color": "#e9ac77",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							8,
							1.5
						],
						[
							20,
							17
						]
					]
				},
				"line-opacity": 1
			},
			"source-layer": "road"
		},
		{
			"interactive": true,
			"layout": {
				"line-join": "round"
			},
			"metadata": {
				"mapbox:group": "1444849354174.1904"
			},
			"filter": [
				"all",
				[
					"==",
					"structure",
					"tunnel"
				],
				[
					"in",
					"class",
					"trunk",
					"primary"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "tunnel_trunk_primary_casing",
			"paint": {
				"line-color": "#e9ac77",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							5,
							0.4
						],
						[
							6,
							0.6
						],
						[
							7,
							1.5
						],
						[
							20,
							22
						]
					]
				}
			},
			"source-layer": "road"
		},
		{
			"interactive": true,
			"layout": {
				"line-join": "round",
				"visibility": "visible"
			},
			"metadata": {
				"mapbox:group": "1444849354174.1904"
			},
			"filter": [
				"all",
				[
					"==",
					"structure",
					"tunnel"
				],
				[
					"==",
					"class",
					"motorway"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "tunnel_motorway_casing",
			"paint": {
				"line-color": "#e9ac77",
				"line-dasharray": [
					0.5,
					0.25
				],
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							5,
							0.4
						],
						[
							6,
							0.6
						],
						[
							7,
							1.5
						],
						[
							20,
							22
						]
					]
				}
			},
			"source-layer": "road"
		},
		{
			"id": "tunnel_path_pedestrian",
			"type": "line",
			"source": "mapbox",
			"source-layer": "road",
			"filter": [
				"all",
				[
					"==",
					"$type",
					"LineString"
				],
				[
					"all",
					[
						"==",
						"structure",
						"tunnel"
					],
					[
						"in",
						"class",
						"path",
						"pedestrian"
					]
				]
			],
			"paint": {
				"line-color": "#cba",
				"line-dasharray": [
					1.5,
					0.75
				],
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							15,
							1.2
						],
						[
							20,
							4
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849354174.1904"
			},
			"interactive": true
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849354174.1904"
			},
			"id": "tunnel_motorway_link",
			"paint": {
				"line-color": "#fc8",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							12.5,
							0
						],
						[
							13,
							1.5
						],
						[
							14,
							2.5
						],
						[
							20,
							11.5
						]
					]
				}
			},
			"ref": "tunnel_motorway_link_casing"
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849354174.1904"
			},
			"id": "tunnel_service_track",
			"paint": {
				"line-color": "#fff",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							15.5,
							0
						],
						[
							16,
							2
						],
						[
							20,
							7.5
						]
					]
				}
			},
			"ref": "tunnel_service_track_casing"
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849354174.1904"
			},
			"id": "tunnel_link",
			"paint": {
				"line-color": "#fff4c6",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							12.5,
							0
						],
						[
							13,
							1.5
						],
						[
							14,
							2.5
						],
						[
							20,
							11.5
						]
					]
				}
			},
			"ref": "tunnel_link_casing"
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849354174.1904"
			},
			"id": "tunnel_street",
			"paint": {
				"line-color": "#fff",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							13.5,
							0
						],
						[
							14,
							2.5
						],
						[
							20,
							11.5
						]
					]
				},
				"line-opacity": 1
			},
			"ref": "tunnel_street_casing"
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849354174.1904"
			},
			"id": "tunnel_secondary_tertiary",
			"paint": {
				"line-color": "#fff4c6",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							6.5,
							0
						],
						[
							7,
							0.5
						],
						[
							20,
							10
						]
					]
				}
			},
			"ref": "tunnel_secondary_tertiary_casing"
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849354174.1904"
			},
			"id": "tunnel_trunk_primary",
			"paint": {
				"line-color": "#fff4c6",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							6.5,
							0
						],
						[
							7,
							0.5
						],
						[
							20,
							18
						]
					]
				}
			},
			"ref": "tunnel_trunk_primary_casing"
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849354174.1904"
			},
			"id": "tunnel_motorway",
			"paint": {
				"line-color": "#ffdaa6",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							6.5,
							0
						],
						[
							7,
							0.5
						],
						[
							20,
							18
						]
					]
				}
			},
			"ref": "tunnel_motorway_casing"
		},
		{
			"id": "tunnel_major_rail",
			"type": "line",
			"source": "mapbox",
			"source-layer": "road",
			"filter": [
				"all",
				[
					"==",
					"structure",
					"tunnel"
				],
				[
					"in",
					"class",
					"major_rail",
					"minor_rail"
				]
			],
			"paint": {
				"line-color": "#bbb",
				"line-width": {
					"base": 1.4,
					"stops": [
						[
							14,
							0.4
						],
						[
							15,
							0.75
						],
						[
							20,
							2
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849354174.1904"
			},
			"interactive": true
		},
		{
			"id": "tunnel_major_rail_hatching",
			"paint": {
				"line-color": "#bbb",
				"line-dasharray": [
					0.2,
					8
				],
				"line-width": {
					"base": 1.4,
					"stops": [
						[
							14.5,
							0
						],
						[
							15,
							3
						],
						[
							20,
							8
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849354174.1904"
			},
			"interactive": true,
			"ref": "tunnel_major_rail"
		},
		{
			"interactive": true,
			"minzoom": 12,
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"metadata": {
				"mapbox:group": "1444849345966.4436"
			},
			"filter": [
				"all",
				[
					"==",
					"class",
					"motorway_link"
				],
				[
					"!in",
					"structure",
					"bridge",
					"tunnel"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "road_motorway_link_casing",
			"paint": {
				"line-color": "#e9ac77",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							12,
							1
						],
						[
							13,
							3
						],
						[
							14,
							4
						],
						[
							20,
							15
						]
					]
				},
				"line-opacity": 1
			},
			"source-layer": "road"
		},
		{
			"interactive": true,
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"metadata": {
				"mapbox:group": "1444849345966.4436"
			},
			"filter": [
				"all",
				[
					"in",
					"class",
					"service",
					"track"
				],
				[
					"!in",
					"structure",
					"bridge",
					"tunnel"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "road_service_track_casing",
			"paint": {
				"line-color": "#cfcdca",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							15,
							1
						],
						[
							16,
							4
						],
						[
							20,
							11
						]
					]
				}
			},
			"source-layer": "road"
		},
		{
			"interactive": true,
			"minzoom": 13,
			"layout": {
				"line-cap": "round",
				"line-join": "round",
				"visibility": "visible"
			},
			"metadata": {
				"mapbox:group": "1444849345966.4436"
			},
			"filter": [
				"all",
				[
					"==",
					"class",
					"link"
				],
				[
					"!in",
					"structure",
					"bridge",
					"tunnel"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "road_link_casing",
			"paint": {
				"line-color": "#e9ac77",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							12,
							1
						],
						[
							13,
							3
						],
						[
							14,
							4
						],
						[
							20,
							15
						]
					]
				},
				"line-opacity": 1
			},
			"source-layer": "road"
		},
		{
			"interactive": true,
			"layout": {
				"line-cap": "round",
				"line-join": "round"
			},
			"metadata": {
				"mapbox:group": "1444849345966.4436"
			},
			"filter": [
				"all",
				[
					"==",
					"$type",
					"LineString"
				],
				[
					"all",
					[
						"in",
						"class",
						"street",
						"street_limited"
					],
					[
						"!in",
						"structure",
						"bridge",
						"tunnel"
					]
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "road_street_casing",
			"paint": {
				"line-color": "#cfcdca",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							12,
							0.5
						],
						[
							13,
							1
						],
						[
							14,
							4
						],
						[
							20,
							15
						]
					]
				},
				"line-opacity": {
					"stops": [
						[
							12,
							0
						],
						[
							12.5,
							1
						]
					]
				}
			},
			"source-layer": "road"
		},
		{
			"interactive": true,
			"layout": {
				"line-cap": "round",
				"line-join": "round",
				"visibility": "visible"
			},
			"metadata": {
				"mapbox:group": "1444849345966.4436"
			},
			"filter": [
				"all",
				[
					"in",
					"class",
					"secondary",
					"tertiary"
				],
				[
					"!in",
					"structure",
					"bridge",
					"tunnel"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "road_secondary_tertiary_casing",
			"paint": {
				"line-color": "#e9ac77",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							8,
							1.5
						],
						[
							20,
							17
						]
					]
				},
				"line-opacity": 1
			},
			"source-layer": "road"
		},
		{
			"interactive": true,
			"layout": {
				"line-cap": "round",
				"line-join": "round",
				"visibility": "visible"
			},
			"metadata": {
				"mapbox:group": "1444849345966.4436"
			},
			"filter": [
				"all",
				[
					"in",
					"class",
					"trunk",
					"primary"
				],
				[
					"!in",
					"structure",
					"bridge",
					"tunnel"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "road_trunk_primary_casing",
			"paint": {
				"line-color": "#e9ac77",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							5,
							0.4
						],
						[
							6,
							0.6
						],
						[
							7,
							1.5
						],
						[
							20,
							22
						]
					]
				},
				"line-opacity": 1
			},
			"source-layer": "road"
		},
		{
			"interactive": true,
			"minzoom": 5,
			"layout": {
				"line-cap": "round",
				"line-join": "round",
				"visibility": "visible"
			},
			"metadata": {
				"mapbox:group": "1444849345966.4436"
			},
			"filter": [
				"all",
				[
					"==",
					"class",
					"motorway"
				],
				[
					"!in",
					"structure",
					"bridge",
					"tunnel"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "road_motorway_casing",
			"paint": {
				"line-color": "#e9ac77",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							5,
							0.4
						],
						[
							6,
							0.6
						],
						[
							7,
							1.5
						],
						[
							20,
							22
						]
					]
				}
			},
			"source-layer": "road"
		},
		{
			"id": "road_path_pedestrian",
			"type": "line",
			"source": "mapbox",
			"source-layer": "road",
			"filter": [
				"all",
				[
					"==",
					"$type",
					"LineString"
				],
				[
					"all",
					[
						"in",
						"class",
						"path",
						"pedestrian"
					],
					[
						"!in",
						"structure",
						"bridge",
						"tunnel"
					]
				]
			],
			"paint": {
				"line-color": "#cba",
				"line-dasharray": [
					1.5,
					0.75
				],
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							15,
							1.2
						],
						[
							20,
							4
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849345966.4436"
			},
			"interactive": true
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849345966.4436"
			},
			"id": "road_motorway_link",
			"paint": {
				"line-color": "#fc8",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							12.5,
							0
						],
						[
							13,
							1.5
						],
						[
							14,
							2.5
						],
						[
							20,
							11.5
						]
					]
				}
			},
			"ref": "road_motorway_link_casing"
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849345966.4436"
			},
			"id": "road_service_track",
			"paint": {
				"line-color": "#fff",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							15.5,
							0
						],
						[
							16,
							2
						],
						[
							20,
							7.5
						]
					]
				}
			},
			"ref": "road_service_track_casing"
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849345966.4436"
			},
			"id": "road_link",
			"paint": {
				"line-color": "#fea",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							12.5,
							0
						],
						[
							13,
							1.5
						],
						[
							14,
							2.5
						],
						[
							20,
							11.5
						]
					]
				}
			},
			"ref": "road_link_casing"
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849345966.4436"
			},
			"id": "road_street",
			"paint": {
				"line-color": "#fff",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							13.5,
							0
						],
						[
							14,
							2.5
						],
						[
							20,
							11.5
						]
					]
				},
				"line-opacity": 1
			},
			"ref": "road_street_casing"
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849345966.4436"
			},
			"id": "road_secondary_tertiary",
			"paint": {
				"line-color": "#fea",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							6.5,
							0
						],
						[
							8,
							0.5
						],
						[
							20,
							13
						]
					]
				}
			},
			"ref": "road_secondary_tertiary_casing"
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849345966.4436"
			},
			"id": "road_trunk_primary",
			"paint": {
				"line-color": "#fea",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							6.5,
							0
						],
						[
							7,
							0.5
						],
						[
							20,
							18
						]
					]
				}
			},
			"ref": "road_trunk_primary_casing"
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849345966.4436"
			},
			"id": "road_motorway",
			"paint": {
				"line-color": "#fc8",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							6.5,
							0
						],
						[
							7,
							0.5
						],
						[
							20,
							18
						]
					]
				}
			},
			"ref": "road_motorway_casing"
		},
		{
			"id": "road_major_rail",
			"type": "line",
			"source": "mapbox",
			"source-layer": "road",
			"filter": [
				"all",
				[
					"==",
					"class",
					"major_rail"
				],
				[
					"!in",
					"structure",
					"bridge",
					"tunnel"
				]
			],
			"paint": {
				"line-color": "#bbb",
				"line-width": {
					"base": 1.4,
					"stops": [
						[
							14,
							0.4
						],
						[
							15,
							0.75
						],
						[
							20,
							2
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849345966.4436"
			},
			"interactive": true
		},
		{
			"id": "road_major_rail_hatching",
			"paint": {
				"line-color": "#bbb",
				"line-dasharray": [
					0.2,
					8
				],
				"line-width": {
					"base": 1.4,
					"stops": [
						[
							14.5,
							0
						],
						[
							15,
							3
						],
						[
							20,
							8
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849345966.4436"
			},
			"interactive": true,
			"ref": "road_major_rail"
		},
		{
			"interactive": true,
			"layout": {
				"line-join": "round"
			},
			"metadata": {
				"mapbox:group": "1444849334699.1902"
			},
			"filter": [
				"all",
				[
					"==",
					"structure",
					"bridge"
				],
				[
					"==",
					"class",
					"motorway_link"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "bridge_motorway_link_casing",
			"paint": {
				"line-color": "#e9ac77",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							12,
							1
						],
						[
							13,
							3
						],
						[
							14,
							4
						],
						[
							20,
							15
						]
					]
				},
				"line-opacity": 1
			},
			"source-layer": "road"
		},
		{
			"interactive": true,
			"layout": {
				"line-join": "round"
			},
			"metadata": {
				"mapbox:group": "1444849334699.1902"
			},
			"filter": [
				"all",
				[
					"==",
					"structure",
					"bridge"
				],
				[
					"in",
					"class",
					"service",
					"track"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "bridge_service_track_casing",
			"paint": {
				"line-color": "#cfcdca",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							15,
							1
						],
						[
							16,
							4
						],
						[
							20,
							11
						]
					]
				}
			},
			"source-layer": "road"
		},
		{
			"interactive": true,
			"layout": {
				"line-join": "round"
			},
			"metadata": {
				"mapbox:group": "1444849334699.1902"
			},
			"filter": [
				"all",
				[
					"==",
					"structure",
					"bridge"
				],
				[
					"==",
					"class",
					"link"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "bridge_link_casing",
			"paint": {
				"line-color": "#e9ac77",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							12,
							1
						],
						[
							13,
							3
						],
						[
							14,
							4
						],
						[
							20,
							15
						]
					]
				},
				"line-opacity": 1
			},
			"source-layer": "road"
		},
		{
			"interactive": true,
			"layout": {
				"line-join": "round"
			},
			"metadata": {
				"mapbox:group": "1444849334699.1902"
			},
			"filter": [
				"all",
				[
					"==",
					"structure",
					"bridge"
				],
				[
					"in",
					"class",
					"street",
					"street_limited"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "bridge_street_casing",
			"paint": {
				"line-color": "#cfcdca",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							12,
							0.5
						],
						[
							13,
							1
						],
						[
							14,
							4
						],
						[
							20,
							15
						]
					]
				},
				"line-opacity": {
					"stops": [
						[
							12,
							0
						],
						[
							12.5,
							1
						]
					]
				}
			},
			"source-layer": "road"
		},
		{
			"interactive": true,
			"layout": {
				"line-join": "round"
			},
			"metadata": {
				"mapbox:group": "1444849334699.1902"
			},
			"filter": [
				"all",
				[
					"==",
					"structure",
					"bridge"
				],
				[
					"in",
					"class",
					"secondary",
					"tertiary"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "bridge_secondary_tertiary_casing",
			"paint": {
				"line-color": "#e9ac77",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							8,
							1.5
						],
						[
							20,
							17
						]
					]
				},
				"line-opacity": 1
			},
			"source-layer": "road"
		},
		{
			"interactive": true,
			"layout": {
				"line-join": "round"
			},
			"metadata": {
				"mapbox:group": "1444849334699.1902"
			},
			"filter": [
				"all",
				[
					"==",
					"structure",
					"bridge"
				],
				[
					"in",
					"class",
					"trunk",
					"primary"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "bridge_trunk_primary_casing",
			"paint": {
				"line-color": "#e9ac77",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							5,
							0.4
						],
						[
							6,
							0.6
						],
						[
							7,
							1.5
						],
						[
							20,
							22
						]
					]
				}
			},
			"source-layer": "road"
		},
		{
			"interactive": true,
			"layout": {
				"line-join": "round"
			},
			"metadata": {
				"mapbox:group": "1444849334699.1902"
			},
			"filter": [
				"all",
				[
					"==",
					"structure",
					"bridge"
				],
				[
					"==",
					"class",
					"motorway"
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "bridge_motorway_casing",
			"paint": {
				"line-color": "#e9ac77",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							5,
							0.4
						],
						[
							6,
							0.6
						],
						[
							7,
							1.5
						],
						[
							20,
							22
						]
					]
				}
			},
			"source-layer": "road"
		},
		{
			"id": "bridge_path_pedestrian",
			"type": "line",
			"source": "mapbox",
			"source-layer": "road",
			"filter": [
				"all",
				[
					"==",
					"$type",
					"LineString"
				],
				[
					"all",
					[
						"==",
						"structure",
						"bridge"
					],
					[
						"in",
						"class",
						"path",
						"pedestrian"
					]
				]
			],
			"paint": {
				"line-color": "#cba",
				"line-dasharray": [
					1.5,
					0.75
				],
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							15,
							1.2
						],
						[
							20,
							4
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849334699.1902"
			},
			"interactive": true
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849334699.1902"
			},
			"id": "bridge_motorway_link",
			"paint": {
				"line-color": "#fc8",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							12.5,
							0
						],
						[
							13,
							1.5
						],
						[
							14,
							2.5
						],
						[
							20,
							11.5
						]
					]
				}
			},
			"ref": "bridge_motorway_link_casing"
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849334699.1902"
			},
			"id": "bridge_service_track",
			"paint": {
				"line-color": "#fff",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							15.5,
							0
						],
						[
							16,
							2
						],
						[
							20,
							7.5
						]
					]
				}
			},
			"ref": "bridge_service_track_casing"
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849334699.1902"
			},
			"id": "bridge_link",
			"paint": {
				"line-color": "#fea",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							12.5,
							0
						],
						[
							13,
							1.5
						],
						[
							14,
							2.5
						],
						[
							20,
							11.5
						]
					]
				}
			},
			"ref": "bridge_link_casing"
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849334699.1902"
			},
			"id": "bridge_street",
			"paint": {
				"line-color": "#fff",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							13.5,
							0
						],
						[
							14,
							2.5
						],
						[
							20,
							11.5
						]
					]
				},
				"line-opacity": 1
			},
			"ref": "bridge_street_casing"
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849334699.1902"
			},
			"id": "bridge_secondary_tertiary",
			"paint": {
				"line-color": "#fea",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							6.5,
							0
						],
						[
							7,
							0.5
						],
						[
							20,
							10
						]
					]
				}
			},
			"ref": "bridge_secondary_tertiary_casing"
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849334699.1902"
			},
			"id": "bridge_trunk_primary",
			"paint": {
				"line-color": "#fea",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							6.5,
							0
						],
						[
							7,
							0.5
						],
						[
							20,
							18
						]
					]
				}
			},
			"ref": "bridge_trunk_primary_casing"
		},
		{
			"interactive": true,
			"metadata": {
				"mapbox:group": "1444849334699.1902"
			},
			"id": "bridge_motorway",
			"paint": {
				"line-color": "#fc8",
				"line-width": {
					"base": 1.2,
					"stops": [
						[
							6.5,
							0
						],
						[
							7,
							0.5
						],
						[
							20,
							18
						]
					]
				}
			},
			"ref": "bridge_motorway_casing"
		},
		{
			"id": "bridge_major_rail",
			"type": "line",
			"source": "mapbox",
			"source-layer": "road",
			"filter": [
				"all",
				[
					"==",
					"structure",
					"bridge"
				],
				[
					"==",
					"class",
					"major_rail"
				]
			],
			"paint": {
				"line-color": "#bbb",
				"line-width": {
					"base": 1.4,
					"stops": [
						[
							14,
							0.4
						],
						[
							15,
							0.75
						],
						[
							20,
							2
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849334699.1902"
			},
			"interactive": true
		},
		{
			"id": "bridge_major_rail_hatching",
			"paint": {
				"line-color": "#bbb",
				"line-dasharray": [
					0.2,
					8
				],
				"line-width": {
					"base": 1.4,
					"stops": [
						[
							14.5,
							0
						],
						[
							15,
							3
						],
						[
							20,
							8
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849334699.1902"
			},
			"interactive": true,
			"ref": "bridge_major_rail"
		},
		{
			"interactive": true,
			"layout": {
				"line-join": "round"
			},
			"metadata": {
				"mapbox:group": "1444849307123.581"
			},
			"filter": [
				"all",
				[
					">=",
					"admin_level",
					3
				],
				[
					"==",
					"maritime",
					0
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "admin_level_3",
			"paint": {
				"line-color": "#9e9cab",
				"line-dasharray": [
					3,
					1,
					1,
					1
				],
				"line-width": {
					"base": 1,
					"stops": [
						[
							4,
							0.4
						],
						[
							5,
							1
						],
						[
							12,
							3
						]
					]
				}
			},
			"source-layer": "admin"
		},
		{
			"interactive": true,
			"layout": {
				"line-join": "round",
				"line-cap": "round"
			},
			"metadata": {
				"mapbox:group": "1444849307123.581"
			},
			"filter": [
				"all",
				[
					"==",
					"admin_level",
					2
				],
				[
					"==",
					"disputed",
					0
				],
				[
					"==",
					"maritime",
					0
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "admin_level_2",
			"paint": {
				"line-color": "#9e9cab",
				"line-width": {
					"base": 1,
					"stops": [
						[
							4,
							1.4
						],
						[
							5,
							2
						],
						[
							12,
							8
						]
					]
				}
			},
			"source-layer": "admin"
		},
		{
			"interactive": true,
			"layout": {
				"line-cap": "round"
			},
			"metadata": {
				"mapbox:group": "1444849307123.581"
			},
			"filter": [
				"all",
				[
					"==",
					"admin_level",
					2
				],
				[
					"==",
					"disputed",
					1
				],
				[
					"==",
					"maritime",
					0
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "admin_level_2_disputed",
			"paint": {
				"line-color": "#9e9cab",
				"line-dasharray": [
					2,
					2
				],
				"line-width": {
					"base": 1,
					"stops": [
						[
							4,
							1.4
						],
						[
							5,
							2
						],
						[
							12,
							8
						]
					]
				}
			},
			"source-layer": "admin"
		},
		{
			"interactive": true,
			"layout": {
				"line-join": "round"
			},
			"metadata": {
				"mapbox:group": "1444849307123.581"
			},
			"filter": [
				"all",
				[
					">=",
					"admin_level",
					3
				],
				[
					"==",
					"maritime",
					1
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "admin_level_3_maritime",
			"paint": {
				"line-color": "#a0c8f0",
				"line-opacity": 0.5,
				"line-dasharray": [
					3,
					1,
					1,
					1
				],
				"line-width": {
					"base": 1,
					"stops": [
						[
							4,
							0.4
						],
						[
							5,
							1
						],
						[
							12,
							3
						]
					]
				}
			},
			"source-layer": "admin"
		},
		{
			"interactive": true,
			"layout": {
				"line-cap": "round"
			},
			"metadata": {
				"mapbox:group": "1444849307123.581"
			},
			"filter": [
				"all",
				[
					"==",
					"admin_level",
					2
				],
				[
					"==",
					"maritime",
					1
				]
			],
			"type": "line",
			"source": "mapbox",
			"id": "admin_level_2_maritime",
			"paint": {
				"line-color": "#a0c8f0",
				"line-opacity": 0.5,
				"line-width": {
					"base": 1,
					"stops": [
						[
							4,
							1.4
						],
						[
							5,
							2
						],
						[
							12,
							8
						]
					]
				}
			},
			"source-layer": "admin"
		},
		{
			"interactive": true,
			"layout": {
				"text-font": [
					"Open Sans Italic"
				],
				"text-field": "{name_en}",
				"text-max-width": 5,
				"text-size": 12
			},
			"metadata": {
				"mapbox:group": "1444849320558.5054"
			},
			"filter": [
				"==",
				"$type",
				"Point"
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "water_label",
			"paint": {
				"text-color": "#74aee9",
				"text-halo-width": 1.5,
				"text-halo-color": "rgba(255,255,255,0.7)"
			},
			"source-layer": "water_label"
		},
		{
			"interactive": true,
			"minzoom": 16,
			"layout": {
				"icon-image": "{maki}-11",
				"text-font": [
					"Open Sans Semibold"
				],
				"text-field": "{name_en}",
				"text-max-width": 9,
				"text-padding": 2,
				"text-offset": [
					0,
					0.6
				],
				"text-anchor": "top",
				"text-size": 12
			},
			"metadata": {
				"mapbox:group": "1444849297111.495"
			},
			"filter": [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"==",
					"scalerank",
					4
				]
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "poi_label_4",
			"paint": {
				"text-color": "#666",
				"text-halo-color": "#ffffff",
				"text-halo-width": 1,
				"text-halo-blur": 0.5
			},
			"source-layer": "poi_label"
		},
		{
			"interactive": true,
			"minzoom": 15,
			"layout": {
				"icon-image": "{maki}-11",
				"text-font": [
					"Open Sans Semibold"
				],
				"text-field": "{name_en}",
				"text-max-width": 9,
				"text-padding": 2,
				"text-offset": [
					0,
					0.6
				],
				"text-anchor": "top",
				"text-size": 12
			},
			"metadata": {
				"mapbox:group": "1444849297111.495"
			},
			"filter": [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"==",
					"scalerank",
					3
				]
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "poi_label_3",
			"paint": {
				"text-color": "#666",
				"text-halo-color": "#ffffff",
				"text-halo-width": 1,
				"text-halo-blur": 0.5
			},
			"source-layer": "poi_label"
		},
		{
			"interactive": true,
			"minzoom": 14,
			"layout": {
				"icon-image": "{maki}-11",
				"text-font": [
					"Open Sans Semibold"
				],
				"text-field": "{name_en}",
				"text-max-width": 9,
				"text-padding": 2,
				"text-offset": [
					0,
					0.6
				],
				"text-anchor": "top",
				"text-size": 12
			},
			"metadata": {
				"mapbox:group": "1444849297111.495"
			},
			"filter": [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"==",
					"scalerank",
					2
				]
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "poi_label_2",
			"paint": {
				"text-color": "#666",
				"text-halo-color": "#ffffff",
				"text-halo-width": 1,
				"text-halo-blur": 0.5
			},
			"source-layer": "poi_label"
		},
		{
			"layout": {
				"text-size": 12,
				"icon-image": "{maki}-11",
				"text-font": [
					"Open Sans Semibold"
				],
				"text-padding": 2,
				"visibility": "visible",
				"text-offset": [
					0,
					0.6
				],
				"text-anchor": "top",
				"text-field": "{name_en}",
				"text-max-width": 9
			},
			"metadata": {
				"mapbox:group": "1444849297111.495"
			},
			"type": "symbol",
			"source": "mapbox",
			"id": "rail_station_label",
			"paint": {
				"text-color": "#666",
				"text-halo-color": "#ffffff",
				"text-halo-width": 1,
				"text-halo-blur": 0.5
			},
			"source-layer": "rail_station_label",
			"interactive": true
		},
		{
			"interactive": true,
			"minzoom": 13,
			"layout": {
				"icon-image": "{maki}-11",
				"text-font": [
					"Open Sans Semibold"
				],
				"text-field": "{name_en}",
				"text-max-width": 9,
				"text-padding": 2,
				"text-offset": [
					0,
					0.6
				],
				"text-anchor": "top",
				"text-size": 12
			},
			"metadata": {
				"mapbox:group": "1444849297111.495"
			},
			"filter": [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"==",
					"scalerank",
					1
				]
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "poi_label_1",
			"paint": {
				"text-color": "#666",
				"text-halo-color": "#ffffff",
				"text-halo-width": 1,
				"text-halo-blur": 0.5
			},
			"source-layer": "poi_label"
		},
		{
			"interactive": true,
			"minzoom": 11,
			"layout": {
				"icon-image": "{maki}-11",
				"text-font": [
					"Open Sans Semibold"
				],
				"text-field": "{name_en}",
				"text-max-width": 9,
				"text-padding": 2,
				"text-offset": [
					0,
					0.6
				],
				"text-anchor": "top",
				"text-size": 12
			},
			"metadata": {
				"mapbox:group": "1444849297111.495"
			},
			"filter": [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"in",
					"scalerank",
					1,
					2,
					3
				]
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "airport_label",
			"paint": {
				"text-color": "#666",
				"text-halo-color": "#ffffff",
				"text-halo-width": 1,
				"text-halo-blur": 0.5
			},
			"source-layer": "airport_label"
		},
		{
			"interactive": true,
			"layout": {
				"text-field": "{name_en}",
				"text-font": [
					"Open Sans Regular"
				],
				"text-size": {
					"base": 1,
					"stops": [
						[
							13,
							12
						],
						[
							14,
							13
						]
					]
				},
				"symbol-placement": "line"
			},
			"metadata": {
				"mapbox:group": "1456163609504.0715"
			},
			"filter": [
				"!=",
				"class",
				"ferry"
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "road_label",
			"paint": {
				"text-color": "#765",
				"text-halo-width": 1,
				"text-halo-blur": 0.5
			},
			"source-layer": "road_label"
		},
		{
			"interactive": true,
			"minzoom": 8,
			"layout": {
				"text-field": "{ref}",
				"text-font": [
					"Open Sans Semibold"
				],
				"text-size": 11,
				"icon-image": "motorway_{reflen}",
				"symbol-placement": {
					"base": 1,
					"stops": [
						[
							10,
							"point"
						],
						[
							11,
							"line"
						]
					]
				},
				"symbol-spacing": 500,
				"text-rotation-alignment": "viewport",
				"icon-rotation-alignment": "viewport"
			},
			"metadata": {
				"mapbox:group": "1456163609504.0715"
			},
			"filter": [
				"<=",
				"reflen",
				6
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "road_label_highway_shield",
			"paint": {},
			"source-layer": "road_label"
		},
		{
			"interactive": true,
			"layout": {
				"text-font": [
					"Open Sans Bold"
				],
				"text-transform": "uppercase",
				"text-letter-spacing": 0.1,
				"text-field": "{name_en}",
				"text-max-width": 9,
				"text-size": {
					"base": 1.2,
					"stops": [
						[
							12,
							10
						],
						[
							15,
							14
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849272561.29"
			},
			"filter": [
				"in",
				"type",
				"hamlet",
				"suburb",
				"neighbourhood",
				"island",
				"islet"
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "place_label_other",
			"paint": {
				"text-color": "#633",
				"text-halo-color": "rgba(255,255,255,0.8)",
				"text-halo-width": 1.2
			},
			"source-layer": "place_label"
		},
		{
			"interactive": true,
			"layout": {
				"text-font": [
					"Open Sans Regular"
				],
				"text-field": "{name_en}",
				"text-max-width": 8,
				"text-size": {
					"base": 1.2,
					"stops": [
						[
							10,
							12
						],
						[
							15,
							22
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849272561.29"
			},
			"filter": [
				"==",
				"type",
				"village"
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "place_label_village",
			"paint": {
				"text-color": "#333",
				"text-halo-color": "rgba(255,255,255,0.8)",
				"text-halo-width": 1.2
			},
			"source-layer": "place_label"
		},
		{
			"interactive": true,
			"layout": {
				"text-font": [
					"Open Sans Regular"
				],
				"text-field": "{name_en}",
				"text-max-width": 8,
				"text-size": {
					"base": 1.2,
					"stops": [
						[
							10,
							14
						],
						[
							15,
							24
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849272561.29"
			},
			"filter": [
				"==",
				"type",
				"town"
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "place_label_town",
			"paint": {
				"text-color": "#333",
				"text-halo-color": "rgba(255,255,255,0.8)",
				"text-halo-width": 1.2
			},
			"source-layer": "place_label"
		},
		{
			"interactive": true,
			"layout": {
				"text-font": [
					"Open Sans Semibold"
				],
				"text-field": "{name_en}",
				"text-max-width": 8,
				"text-size": {
					"base": 1.2,
					"stops": [
						[
							7,
							14
						],
						[
							11,
							24
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849272561.29"
			},
			"filter": [
				"==",
				"type",
				"city"
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "place_label_city",
			"paint": {
				"text-color": "#333",
				"text-halo-color": "rgba(255,255,255,0.8)",
				"text-halo-width": 1.2
			},
			"source-layer": "place_label"
		},
		{
			"interactive": true,
			"layout": {
				"text-font": [
					"Open Sans Italic"
				],
				"text-field": "{name_en}",
				"text-letter-spacing": 0.2,
				"symbol-placement": "line",
				"text-size": {
					"stops": [
						[
							3,
							11
						],
						[
							4,
							12
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849258897.3083"
			},
			"filter": [
				"all",
				[
					"==",
					"$type",
					"LineString"
				],
				[
					">=",
					"labelrank",
					4
				]
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "marine_label_line_4",
			"paint": {
				"text-color": "#74aee9",
				"text-halo-color": "rgba(255,255,255,0.7)",
				"text-halo-width": 0.75,
				"text-halo-blur": 0.75
			},
			"source-layer": "marine_label"
		},
		{
			"interactive": true,
			"layout": {
				"text-font": [
					"Open Sans Italic"
				],
				"text-field": "{name_en}",
				"text-max-width": 6,
				"text-letter-spacing": 0.2,
				"symbol-placement": "point",
				"text-size": {
					"stops": [
						[
							3,
							11
						],
						[
							4,
							12
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849258897.3083"
			},
			"filter": [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					">=",
					"labelrank",
					4
				]
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "marine_label_4",
			"paint": {
				"text-color": "#74aee9",
				"text-halo-color": "rgba(255,255,255,0.7)",
				"text-halo-width": 0.75,
				"text-halo-blur": 0.75
			},
			"source-layer": "marine_label"
		},
		{
			"interactive": true,
			"layout": {
				"text-font": [
					"Open Sans Italic"
				],
				"text-field": "{name_en}",
				"text-letter-spacing": 0.2,
				"symbol-placement": "line",
				"text-size": {
					"stops": [
						[
							3,
							11
						],
						[
							4,
							14
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849258897.3083"
			},
			"filter": [
				"all",
				[
					"==",
					"$type",
					"LineString"
				],
				[
					"==",
					"labelrank",
					3
				]
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "marine_label_line_3",
			"paint": {
				"text-color": "#74aee9",
				"text-halo-color": "rgba(255,255,255,0.7)",
				"text-halo-width": 0.75,
				"text-halo-blur": 0.75
			},
			"source-layer": "marine_label"
		},
		{
			"interactive": true,
			"layout": {
				"text-font": [
					"Open Sans Italic"
				],
				"text-field": "{name_en}",
				"text-max-width": 5,
				"text-letter-spacing": 0.2,
				"symbol-placement": "point",
				"text-size": {
					"stops": [
						[
							3,
							11
						],
						[
							4,
							14
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849258897.3083"
			},
			"filter": [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"==",
					"labelrank",
					3
				]
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "marine_label_point_3",
			"paint": {
				"text-color": "#74aee9",
				"text-halo-color": "rgba(255,255,255,0.7)",
				"text-halo-width": 0.75,
				"text-halo-blur": 0.75
			},
			"source-layer": "marine_label"
		},
		{
			"interactive": true,
			"layout": {
				"text-font": [
					"Open Sans Italic"
				],
				"text-field": "{name_en}",
				"text-letter-spacing": 0.2,
				"symbol-placement": "line",
				"text-size": {
					"stops": [
						[
							3,
							14
						],
						[
							4,
							16
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849258897.3083"
			},
			"filter": [
				"all",
				[
					"==",
					"$type",
					"LineString"
				],
				[
					"==",
					"labelrank",
					2
				]
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "marine_label_line_2",
			"paint": {
				"text-color": "#74aee9",
				"text-halo-color": "rgba(255,255,255,0.7)",
				"text-halo-width": 0.75,
				"text-halo-blur": 0.75
			},
			"source-layer": "marine_label"
		},
		{
			"interactive": true,
			"layout": {
				"text-font": [
					"Open Sans Italic"
				],
				"text-field": "{name_en}",
				"text-max-width": 5,
				"text-letter-spacing": 0.2,
				"symbol-placement": "point",
				"text-size": {
					"stops": [
						[
							3,
							14
						],
						[
							4,
							16
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849258897.3083"
			},
			"filter": [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"==",
					"labelrank",
					2
				]
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "marine_label_point_2",
			"paint": {
				"text-color": "#74aee9",
				"text-halo-color": "rgba(255,255,255,0.7)",
				"text-halo-width": 0.75,
				"text-halo-blur": 0.75
			},
			"source-layer": "marine_label"
		},
		{
			"interactive": true,
			"layout": {
				"text-font": [
					"Open Sans Italic"
				],
				"text-field": "{name_en}",
				"text-letter-spacing": 0.2,
				"symbol-placement": "line",
				"text-size": {
					"stops": [
						[
							3,
							18
						],
						[
							4,
							22
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849258897.3083"
			},
			"filter": [
				"all",
				[
					"==",
					"$type",
					"LineString"
				],
				[
					"==",
					"labelrank",
					1
				]
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "marine_label_line_1",
			"paint": {
				"text-color": "#74aee9",
				"text-halo-color": "rgba(255,255,255,0.7)",
				"text-halo-width": 0.75,
				"text-halo-blur": 0.75
			},
			"source-layer": "marine_label"
		},
		{
			"interactive": true,
			"layout": {
				"text-font": [
					"Open Sans Italic"
				],
				"text-field": "{name_en}",
				"text-max-width": 5,
				"text-letter-spacing": 0.2,
				"text-line-height": 1.6,
				"symbol-placement": "point",
				"text-offset": [
					0,
					2.4
				],
				"text-size": {
					"stops": [
						[
							3,
							18
						],
						[
							4,
							22
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849258897.3083"
			},
			"filter": [
				"all",
				[
					"==",
					"$type",
					"Point"
				],
				[
					"==",
					"labelrank",
					1
				]
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "marine_label_point_1",
			"paint": {
				"text-color": "#74aee9",
				"text-halo-color": "rgba(255,255,255,0.7)",
				"text-halo-width": 0.75,
				"text-halo-blur": 0.75
			},
			"source-layer": "marine_label"
		},
		{
			"interactive": true,
			"layout": {
				"text-font": [
					"Open Sans Bold"
				],
				"text-field": "{name_en}",
				"text-max-width": 6.25,
				"text-transform": "uppercase",
				"text-size": {
					"stops": [
						[
							4,
							11
						],
						[
							6,
							15
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849242106.713"
			},
			"filter": [
				">=",
				"scalerank",
				4
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "country_label_4",
			"paint": {
				"text-color": "#334",
				"text-halo-color": "rgba(255,255,255,0.8)",
				"text-halo-width": 2,
				"text-halo-blur": 1
			},
			"source-layer": "country_label"
		},
		{
			"interactive": true,
			"layout": {
				"text-font": [
					"Open Sans Bold"
				],
				"text-field": "{name_en}",
				"text-max-width": 6.25,
				"text-transform": "uppercase",
				"text-size": {
					"stops": [
						[
							3,
							11
						],
						[
							7,
							17
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849242106.713"
			},
			"filter": [
				"==",
				"scalerank",
				3
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "country_label_3",
			"paint": {
				"text-color": "#334",
				"text-halo-color": "rgba(255,255,255,0.8)",
				"text-halo-width": 2,
				"text-halo-blur": 1
			},
			"source-layer": "country_label"
		},
		{
			"interactive": true,
			"layout": {
				"text-font": [
					"Open Sans Bold"
				],
				"text-field": "{name_en}",
				"text-max-width": 6.25,
				"text-transform": "uppercase",
				"text-size": {
					"stops": [
						[
							2,
							11
						],
						[
							5,
							17
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849242106.713"
			},
			"filter": [
				"==",
				"scalerank",
				2
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "country_label_2",
			"paint": {
				"text-color": "#334",
				"text-halo-color": "rgba(255,255,255,0.8)",
				"text-halo-width": 2,
				"text-halo-blur": 1
			},
			"source-layer": "country_label"
		},
		{
			"interactive": true,
			"layout": {
				"text-font": [
					"Open Sans Bold"
				],
				"text-field": "{name_en}",
				"text-max-width": 6.25,
				"text-transform": "uppercase",
				"text-size": {
					"stops": [
						[
							1,
							11
						],
						[
							4,
							17
						]
					]
				}
			},
			"metadata": {
				"mapbox:group": "1444849242106.713"
			},
			"filter": [
				"==",
				"scalerank",
				1
			],
			"type": "symbol",
			"source": "mapbox",
			"id": "country_label_1",
			"paint": {
				"text-color": "#334",
				"text-halo-color": "rgba(255,255,255,0.8)",
				"text-halo-width": 2,
				"text-halo-blur": 1
			},
			"source-layer": "country_label"
		}
	]
};

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(236);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(56)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(undefined);
// imports


// module
exports.push([module.i, ".mapboxgl-map {\n  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  overflow: hidden;\n  position: relative;\n  -webkit-tap-highlight-color: transparent; }\n\n.mapboxgl-canvas-container.mapboxgl-interactive,\n.mapboxgl-ctrl-nav-compass {\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab; }\n\n.mapboxgl-canvas-container.mapboxgl-interactive:active,\n.mapboxgl-ctrl-nav-compass:active {\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing; }\n\n.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate {\n  -ms-touch-action: pan-x pan-y;\n  touch-action: pan-x pan-y; }\n\n.mapboxgl-canvas-container.mapboxgl-touch-drag-pan {\n  -ms-touch-action: pinch-zoom; }\n\n.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan {\n  -ms-touch-action: none;\n  touch-action: none; }\n\n.mapboxgl-ctrl-top-left,\n.mapboxgl-ctrl-top-right,\n.mapboxgl-ctrl-bottom-left,\n.mapboxgl-ctrl-bottom-right {\n  position: absolute;\n  pointer-events: none;\n  z-index: 2; }\n\n.mapboxgl-ctrl-top-left {\n  top: 0;\n  left: 0; }\n\n.mapboxgl-ctrl-top-right {\n  top: 0;\n  right: 0; }\n\n.mapboxgl-ctrl-bottom-left {\n  bottom: 0;\n  left: 0; }\n\n.mapboxgl-ctrl-bottom-right {\n  right: 0;\n  bottom: 0; }\n\n.mapboxgl-ctrl {\n  clear: both;\n  pointer-events: auto; }\n\n.mapboxgl-ctrl-top-left .mapboxgl-ctrl {\n  margin: 10px 0 0 10px;\n  float: left; }\n\n.mapboxgl-ctrl-top-right .mapboxgl-ctrl {\n  margin: 10px 10px 0 0;\n  float: right; }\n\n.mapboxgl-ctrl-bottom-left .mapboxgl-ctrl {\n  margin: 0 0 10px 10px;\n  float: left; }\n\n.mapboxgl-ctrl-bottom-right .mapboxgl-ctrl {\n  margin: 0 10px 10px 0;\n  float: right; }\n\n.mapboxgl-ctrl-group {\n  border-radius: 4px;\n  -moz-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  background: #fff; }\n\n.mapboxgl-ctrl-group > button {\n  width: 30px;\n  height: 30px;\n  display: block;\n  padding: 0;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  box-sizing: border-box;\n  background-color: transparent;\n  cursor: pointer; }\n\n/* https://bugzilla.mozilla.org/show_bug.cgi?id=140562 */\n.mapboxgl-ctrl > button::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n.mapboxgl-ctrl > button:last-child {\n  border-bottom: 0; }\n\n.mapboxgl-ctrl > button:hover {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.mapboxgl-ctrl-icon,\n.mapboxgl-ctrl-icon > .mapboxgl-ctrl-compass-arrow {\n  speak: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.mapboxgl-ctrl-icon {\n  padding: 5px; }\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-out {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0A%20%20%3Cpath%20style%3D%27fill%3A%23333333%3B%27%20d%3D%27m%207%2C9%20c%20-0.554%2C0%20-1%2C0.446%20-1%2C1%200%2C0.554%200.446%2C1%201%2C1%20l%206%2C0%20c%200.554%2C0%201%2C-0.446%201%2C-1%200%2C-0.554%20-0.446%2C-1%20-1%2C-1%20z%27%20%2F%3E%0A%3C%2Fsvg%3E%0A\"); }\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-in {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0A%20%20%3Cpath%20style%3D%27fill%3A%23333333%3B%27%20d%3D%27M%2010%206%20C%209.446%206%209%206.4459904%209%207%20L%209%209%20L%207%209%20C%206.446%209%206%209.446%206%2010%20C%206%2010.554%206.446%2011%207%2011%20L%209%2011%20L%209%2013%20C%209%2013.55401%209.446%2014%2010%2014%20C%2010.554%2014%2011%2013.55401%2011%2013%20L%2011%2011%20L%2013%2011%20C%2013.554%2011%2014%2010.554%2014%2010%20C%2014%209.446%2013.554%209%2013%209%20L%2011%209%20L%2011%207%20C%2011%206.4459904%2010.554%206%2010%206%20z%27%20%2F%3E%0A%3C%2Fsvg%3E%0A\"); }\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0D%0A%20%20%3Cpath%20style%3D%27fill%3A%23333%3B%27%20d%3D%27M10%204C9%204%209%205%209%205L9%205.1A5%205%200%200%200%205.1%209L5%209C5%209%204%209%204%2010%204%2011%205%2011%205%2011L5.1%2011A5%205%200%200%200%209%2014.9L9%2015C9%2015%209%2016%2010%2016%2011%2016%2011%2015%2011%2015L11%2014.9A5%205%200%200%200%2014.9%2011L15%2011C15%2011%2016%2011%2016%2010%2016%209%2015%209%2015%209L14.9%209A5%205%200%200%200%2011%205.1L11%205C11%205%2011%204%2010%204zM10%206.5A3.5%203.5%200%200%201%2013.5%2010%203.5%203.5%200%200%201%2010%2013.5%203.5%203.5%200%200%201%206.5%2010%203.5%203.5%200%200%201%2010%206.5zM10%208.3A1.8%201.8%200%200%200%208.3%2010%201.8%201.8%200%200%200%2010%2011.8%201.8%201.8%200%200%200%2011.8%2010%201.8%201.8%200%200%200%2010%208.3z%27%20%2F%3E%0D%0A%3C%2Fsvg%3E\"); }\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate.watching {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0D%0A%20%20%3Cpath%20style%3D%27fill%3A%2300f%3B%27%20d%3D%27M10%204C9%204%209%205%209%205L9%205.1A5%205%200%200%200%205.1%209L5%209C5%209%204%209%204%2010%204%2011%205%2011%205%2011L5.1%2011A5%205%200%200%200%209%2014.9L9%2015C9%2015%209%2016%2010%2016%2011%2016%2011%2015%2011%2015L11%2014.9A5%205%200%200%200%2014.9%2011L15%2011C15%2011%2016%2011%2016%2010%2016%209%2015%209%2015%209L14.9%209A5%205%200%200%200%2011%205.1L11%205C11%205%2011%204%2010%204zM10%206.5A3.5%203.5%200%200%201%2013.5%2010%203.5%203.5%200%200%201%2010%2013.5%203.5%203.5%200%200%201%206.5%2010%203.5%203.5%200%200%201%2010%206.5zM10%208.3A1.8%201.8%200%200%200%208.3%2010%201.8%201.8%200%200%200%2010%2011.8%201.8%201.8%200%200%200%2011.8%2010%201.8%201.8%200%200%200%2010%208.3z%27%20%2F%3E%0D%0A%3C%2Fsvg%3E\"); }\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-fullscreen {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iTGF5ZXJfMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAyMCAyMCIKICAgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iZnVsbHNjcmVlbi5zdmciPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTQxODUiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgICAgaWQ9ImRlZnM0MTgzIiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTQ3MSIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI2OTUiCiAgICAgaWQ9Im5hbWVkdmlldzQxODEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjExLjMxMzcwOCIKICAgICBpbmtzY2FwZTpjeD0iMTQuNjk4MjgiCiAgICAgaW5rc2NhcGU6Y3k9IjEwLjUyNjY4OSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iNjk3IgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyOTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIgogICAgIGlua3NjYXBlOnNuYXAtYmJveD0idHJ1ZSIKICAgICBpbmtzY2FwZTpiYm94LXBhdGhzPSJ0cnVlIgogICAgIGlua3NjYXBlOm9iamVjdC1wYXRocz0idHJ1ZSIKICAgICBpbmtzY2FwZTpiYm94LW5vZGVzPSJ0cnVlIgogICAgIGlua3NjYXBlOm9iamVjdC1ub2Rlcz0idHJ1ZSI+PGlua3NjYXBlOmdyaWQKICAgICAgIHR5cGU9Inh5Z3JpZCIKICAgICAgIGlkPSJncmlkNjA3NiIgLz48L3NvZGlwb2RpOm5hbWVkdmlldz48cGF0aAogICAgIGQ9Ik0gNSA0IEMgNC41IDQgNCA0LjUgNCA1IEwgNCA2IEwgNCA5IEwgNC41IDkgTCA1Ljc3NzM0MzggNy4yOTY4NzUgQyA2Ljc3NzEzMTkgOC4wNjAyMTMxIDcuODM1NzY1IDguOTU2NTcyOCA4Ljg5MDYyNSAxMCBDIDcuODI1NzEyMSAxMS4wNjMzIDYuNzc2MTc5MSAxMS45NTE2NzUgNS43ODEyNSAxMi43MDcwMzEgTCA0LjUgMTEgTCA0IDExIEwgNCAxNSBDIDQgMTUuNSA0LjUgMTYgNSAxNiBMIDkgMTYgTCA5IDE1LjUgTCA3LjI3MzQzNzUgMTQuMjA1MDc4IEMgOC4wNDI4OTMxIDEzLjE4Nzg4NiA4LjkzOTU0NDEgMTIuMTMzNDgxIDkuOTYwOTM3NSAxMS4wNjgzNTkgQyAxMS4wNDIzNzEgMTIuMTQ2OTkgMTEuOTQyMDkzIDEzLjIxMTIgMTIuNzA3MDMxIDE0LjIxODc1IEwgMTEgMTUuNSBMIDExIDE2IEwgMTQgMTYgTCAxNSAxNiBDIDE1LjUgMTYgMTYgMTUuNSAxNiAxNSBMIDE2IDE0IEwgMTYgMTEgTCAxNS41IDExIEwgMTQuMjA1MDc4IDEyLjcyNjU2MiBDIDEzLjE3Nzk4NSAxMS45NDk2MTcgMTIuMTEyNzE4IDExLjA0MzU3NyAxMS4wMzcxMDkgMTAuMDA5NzY2IEMgMTIuMTUxODU2IDguOTgxMDYxIDEzLjIyNDM0NSA4LjA3OTg2MjQgMTQuMjI4NTE2IDcuMzA0Njg3NSBMIDE1LjUgOSBMIDE2IDkgTCAxNiA1IEMgMTYgNC41IDE1LjUgNCAxNSA0IEwgMTEgNCBMIDExIDQuNSBMIDEyLjcwMzEyNSA1Ljc3NzM0MzggQyAxMS45MzI2NDcgNi43ODY0ODM0IDExLjAyNjY5MyA3Ljg1NTQ3MTIgOS45NzA3MDMxIDguOTE5OTIxOSBDIDguOTU4NDczOSA3LjgyMDQ5NDMgOC4wNjk4NzY3IDYuNzYyNzE4OCA3LjMwNDY4NzUgNS43NzE0ODQ0IEwgOSA0LjUgTCA5IDQgTCA2IDQgTCA1IDQgeiAiCiAgICAgaWQ9InBhdGg0MTY5IiAvPjwvc3ZnPg==\"); }\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-shrink {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iTGF5ZXJfMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAyMCAyMCIKICAgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ic2hyaW5rLnN2ZyI+PG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMTkiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgICAgaWQ9ImRlZnMxNyIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjIwMjEiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iOTA4IgogICAgIGlkPSJuYW1lZHZpZXcxNSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMSIKICAgICBpbmtzY2FwZTpjeD0iNC45NTAxMDgyIgogICAgIGlua3NjYXBlOmN5PSIxMC44NTQ3NDciCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIgogICAgIGlua3NjYXBlOnNuYXAtYmJveD0idHJ1ZSIKICAgICBpbmtzY2FwZTpiYm94LXBhdGhzPSJ0cnVlIgogICAgIGlua3NjYXBlOnNuYXAtYmJveC1lZGdlLW1pZHBvaW50cz0idHJ1ZSIKICAgICBpbmtzY2FwZTpiYm94LW5vZGVzPSJ0cnVlIgogICAgIGlua3NjYXBlOnNuYXAtYmJveC1taWRwb2ludHM9InRydWUiCiAgICAgaW5rc2NhcGU6b2JqZWN0LXBhdGhzPSJ0cnVlIgogICAgIGlua3NjYXBlOm9iamVjdC1ub2Rlcz0idHJ1ZSI+PGlua3NjYXBlOmdyaWQKICAgICAgIHR5cGU9Inh5Z3JpZCIKICAgICAgIGlkPSJncmlkNDE0NyIgLz48L3NvZGlwb2RpOm5hbWVkdmlldz48cGF0aAogICAgIHN0eWxlPSJmaWxsOiMwMDAwMDAiCiAgICAgZD0iTSA0LjI0MjE4NzUgMy40OTIxODc1IEEgMC43NTAwNzUgMC43NTAwNzUgMCAwIDAgMy43MTg3NSA0Ljc4MTI1IEwgNS45NjQ4NDM4IDcuMDI3MzQzOCBMIDQgOC41IEwgNCA5IEwgOCA5IEMgOC41MDAwMDEgOC45OTk5OTg4IDkgOC40OTk5OTkyIDkgOCBMIDkgNCBMIDguNSA0IEwgNy4wMTc1NzgxIDUuOTU1MDc4MSBMIDQuNzgxMjUgMy43MTg3NSBBIDAuNzUwMDc1IDAuNzUwMDc1IDAgMCAwIDQuMjQyMTg3NSAzLjQ5MjE4NzUgeiBNIDE1LjczNDM3NSAzLjQ5MjE4NzUgQSAwLjc1MDA3NSAwLjc1MDA3NSAwIDAgMCAxNS4yMTg3NSAzLjcxODc1IEwgMTIuOTg0Mzc1IDUuOTUzMTI1IEwgMTEuNSA0IEwgMTEgNCBMIDExIDggQyAxMSA4LjQ5OTk5OTIgMTEuNDk5OTk5IDguOTk5OTk4OCAxMiA5IEwgMTYgOSBMIDE2IDguNSBMIDE0LjAzNTE1NiA3LjAyNzM0MzggTCAxNi4yODEyNSA0Ljc4MTI1IEEgMC43NTAwNzUgMC43NTAwNzUgMCAwIDAgMTUuNzM0Mzc1IDMuNDkyMTg3NSB6IE0gNCAxMSBMIDQgMTEuNSBMIDUuOTY0ODQzOCAxMi45NzI2NTYgTCAzLjcxODc1IDE1LjIxODc1IEEgMC43NTEzMDA5NiAwLjc1MTMwMDk2IDAgMSAwIDQuNzgxMjUgMTYuMjgxMjUgTCA3LjAyNzM0MzggMTQuMDM1MTU2IEwgOC41IDE2IEwgOSAxNiBMIDkgMTIgQyA5IDExLjUwMDAwMSA4LjUwMDAwMSAxMS4wMDAwMDEgOCAxMSBMIDQgMTEgeiBNIDEyIDExIEMgMTEuNDk5OTk5IDExLjAwMDAwMSAxMSAxMS41MDAwMDEgMTEgMTIgTCAxMSAxNiBMIDExLjUgMTYgTCAxMi45NzI2NTYgMTQuMDM1MTU2IEwgMTUuMjE4NzUgMTYuMjgxMjUgQSAwLjc1MTMwMDk2IDAuNzUxMzAwOTYgMCAxIDAgMTYuMjgxMjUgMTUuMjE4NzUgTCAxNC4wMzUxNTYgMTIuOTcyNjU2IEwgMTYgMTEuNSBMIDE2IDExIEwgMTIgMTEgeiAiCiAgICAgaWQ9InBhdGg3IiAvPjwvc3ZnPg==\"); }\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-compass > .mapboxgl-ctrl-compass-arrow {\n  width: 20px;\n  height: 20px;\n  margin: 5px;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2020%2020%27%3E%0A%09%3Cpolygon%20fill%3D%27%23333333%27%20points%3D%276%2C9%2010%2C1%2014%2C9%27%2F%3E%0A%09%3Cpolygon%20fill%3D%27%23CCCCCC%27%20points%3D%276%2C11%2010%2C19%2014%2C11%20%27%2F%3E%0A%3C%2Fsvg%3E\");\n  background-repeat: no-repeat;\n  display: inline-block; }\n\na.mapboxgl-ctrl-logo {\n  width: 60px;\n  height: 20px;\n  display: block;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjU5LjEiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCA1OS4xIDE4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1OS4xMTkgMTgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0xLjQgMEMwLjYgMC4xIDAgMC44IDAgMS41TDAgMTMuNEMwIDE0LjIgMC43IDE0LjggMS41IDE0LjhMMy4zIDE0LjhDNCAxNC44IDQuNyAxNC4yIDQuOCAxMy40TDQuOCA5LjEgNS41IDEwLjNDNiAxMS4yIDcuNSAxMS4yIDggMTAuM0w4LjggOS4xIDguOCAxMy40QzguOCAxNC4xIDkuNSAxNC44IDEwLjIgMTQuOEwxMiAxNC44QzEyLjggMTQuOCAxMy41IDE0LjIgMTMuNSAxMy40TDEzLjUgMTMuMkMxNC41IDE0LjMgMTUuOSAxNSAxNy42IDE1TDIxLjcgMTUgMjEuNyAxNi41QzIxLjcgMTcuMyAyMi4zIDE4IDIzLjEgMThMMjQuOSAxOEMyNS43IDE4IDI2LjQgMTcuMyAyNi40IDE2LjVMMjYuNCAxNUMyOC4xIDE1IDI5LjUgMTQuNCAzMC41IDEzLjNMMzAuNSAxMy41QzMwLjUgMTMuOSAzMC43IDE0LjMgMzEgMTQuNiAzMS4zIDE0LjkgMzEuNiAxNSAzMiAxNUwzNS4zIDE1QzM3LjQgMTUgMzkuMiAxNCA0MC4zIDEyLjMgNDEuMyAxMy45IDQzLjEgMTUgNDUuMSAxNSA0Ni4yIDE1IDQ3LjEgMTQuOCA0Ny45IDE0LjMgNDguMiAxNC42IDQ4LjcgMTQuOCA0OS4xIDE0LjhMNTEuMyAxNC44QzUxLjcgMTQuOCA1Mi4yIDE0LjYgNTIuNSAxNC4yTDUzLjQgMTIuOSA1NC4zIDE0LjJDNTQuNiAxNC42IDU1LjEgMTQuOCA1NS41IDE0LjhMNTcuNyAxNC44QzU4LjggMTQuOCA1OS41IDEzLjQgNTguOSAxMi41TDU2LjMgOC45IDU4LjcgNS41QzU5LjQgNC42IDU4LjYgMy4xIDU3LjUgMy4xTDU1LjMgMy4xQzU0LjkgMy4xIDU0LjQgMy40IDU0LjEgMy44TDUzLjQgNC44IDUyLjcgMy44QzUyLjQgMy40IDUxLjkgMy4xIDUxLjQgMy4xTDQ5LjMgMy4xQzQ4LjggMy4xIDQ4LjMgMy40IDQ4IDMuOCA0Ny4yIDMuMyA0Ni4yIDMgNDUuMSAzIDQzLjEgMyA0MS4zIDQuMSA0MC4yIDUuNyAzOS4yIDQgMzcuNCAzIDM1LjMgM0wzNS4zIDEuNUMzNS4zIDEuMSAzNS4xIDAuNyAzNC44IDAuNCAzNC42IDAuMiAzNC4yIDAgMzMuOCAwTDMyIDBDMzEuMyAwIDMwLjUgMC44IDMwLjUgMS41TDMwLjUgNC43QzI5LjUgMy42IDI4LjEgMyAyNi41IDNMMjMuMSAzQzIyLjQgMyAyMS43IDMuNyAyMS43IDQuNUwyMS43IDQuOEMyMC42IDMuNyAxOS4yIDMgMTcuNiAzIDE1LjkgMyAxNC41IDMuNyAxMy41IDQuOEwxMy41IDEuNUMxMy41IDAuNyAxMi44IDAgMTIgMEwxMC42IDBDOS42IDAgOC40IDAuNCA3LjggMS40TDYuOCAzLjEgNS44IDEuNEM1LjEgMC40IDMuOSAwIDIuOSAwTDEuNSAwIDEuNCAwek0xLjUgMS41TDIuOSAxLjVDMy42IDEuNSA0LjIgMS43IDQuNSAyLjJMNi44IDYuMSA5IDIuMkM5LjMgMS43IDkuOSAxLjUgMTAuNiAxLjVMMTIgMS41IDEyIDEzLjUgMTAuMiAxMy41IDEwLjIgMy42IDYuOCA5LjUgMy4zIDMuNiAzLjMgMTMuNSAxLjUgMTMuNSAxLjUgMS41ek0zMi4xIDEuNUwzMy44IDEuNSAzMy44IDQuNUMzNC40IDQuNSAzNC44IDQuNSAzNS4zIDQuNSAzNy44IDQuNSAzOS43IDYuNCAzOS43IDkgMzkuNyAxMS42IDM3LjggMTMuNSAzNS4zIDEzLjVMMzIuMSAxMy41IDMyLjEgMS41ek0xNy42IDQuNUMyMCA0LjUgMjEuOCA2LjQgMjEuOCA5TDIxLjggMTMuNSAxNy42IDEzLjVDMTUuMSAxMy41IDEzLjQgMTEuNiAxMy40IDkgMTMuNCA2LjQgMTUuMSA0LjUgMTcuNiA0LjV6TTQ1LjEgNC41QzQ3LjUgNC41IDQ5LjUgNi41IDQ5LjUgOSA0OS41IDExLjUgNDcuNSAxMy41IDQ1LjEgMTMuNSA0Mi43IDEzLjUgNDAuNyAxMS41IDQwLjcgOSA0MC43IDYuNSA0Mi43IDQuNSA0NS4xIDQuNXpNMjMuMSA0LjVMMjYuNSA0LjVDMjguOSA0LjUgMzAuOCA2LjQgMzAuOCA5IDMwLjggMTEuNiAyOC45IDEzLjUgMjYuNSAxMy41TDI0LjkgMTMuNSAyNC45IDE2LjUgMjMuMSAxNi41IDIzLjEgNC41ek00OS4zIDQuNUw1MS40IDQuNSA1My40IDcuMyA1NS4zIDQuNSA1Ny41IDQuNSA1NC41IDguOSA1Ny43IDEzLjUgNTUuNSAxMy41IDUzLjQgMTAuNCA1MS4yIDEzLjUgNDkuMSAxMy41IDUyLjMgOC45IDQ5LjMgNC41ek0xNy42IDYuMkMxNi4yIDYuMiAxNS4xIDcuNCAxNS4xIDkgMTUuMSAxMC42IDE2LjIgMTEuOCAxNy42IDExLjhMMjAgMTEuOCAyMCA5QzIwIDcuNCAxOSA2LjIgMTcuNiA2LjJ6TTQ1LjEgNi4yQzQzLjcgNi4yIDQyLjUgNy41IDQyLjUgOSA0Mi41IDEwLjUgNDMuNyAxMS44IDQ1LjEgMTEuOCA0Ni42IDExLjggNDcuNyAxMC41IDQ3LjcgOSA0Ny43IDcuNSA0Ni42IDYuMiA0NS4xIDYuMnpNMjQuOSA2LjNMMjQuOSAxMS44IDI2LjUgMTEuOEMyNy45IDExLjggMjkuMSAxMC41IDI5LjEgOSAyOS4xIDcuNSAyOC4xIDYuMyAyNi41IDYuM0wyNC45IDYuM3pNMzMuOCA2LjNMMzMuOCAxMS44IDM1LjMgMTEuOEMzNi45IDExLjggMzggMTAuNSAzOCA5IDM4IDcuNSAzNi44IDYuMyAzNS4zIDYuM0wzMy44IDYuM3pNMTcuNiA3LjdDMTguMSA3LjcgMTguNSA4LjEgMTguNSA5TDE4LjUgMTAuMyAxNy42IDEwLjNDMTcgMTAuMyAxNi42IDkuOSAxNi42IDkgMTYuNiA4LjEgMTcgNy43IDE3LjYgNy43ek0yNi40IDcuN0MyNy4yIDcuNyAyNy42IDguNCAyNy42IDkgMjcuNiA5LjkgMjYuOSAxMC4zIDI2LjQgMTAuM0wyNi40IDcuN3pNMzUuMSA3LjdDMzUuOCA3LjcgMzYuNSA4LjMgMzYuNSA5IDM2LjUgOS44IDM1LjkgMTAuMyAzNS4xIDEwLjNMMzUuMSA3Ljd6TTQ1LjEgNy43QzQ1LjcgNy43IDQ2LjIgOC4yIDQ2LjIgOSA0Ni4yIDkuOCA0NS43IDEwLjMgNDUuMSAxMC4zIDQ0LjUgMTAuMyA0NCA5LjggNDQgOSA0NCA4LjIgNDQuNSA3LjcgNDUuMSA3Ljd6IiBvcGFjaXR5PSIwLjMiLz48cGF0aCBkPSJtMS41IDEuNSAwIDEyIDEuOCAwIDAtOS45IDMuNSA1LjkgMy41LTUuOSAwIDkuOSAxLjggMCAwLTEyLTEuNCAwQzkuOSAxLjUgOS4zIDEuNyA5IDIuMkw2LjggNi4xIDQuNSAyLjJDNC4yIDEuNyAzLjYgMS41IDIuOSAxLjVMMS41IDEuNVptMzAuNiAwIDAgMTIgMy4zIDBjMi40IDAgNC40LTEuOSA0LjQtNC41IDAtMi42LTEuOS00LjUtNC40LTQuNS0wLjUgMC0wLjkgMC0xLjUgMGwwLTMtMS43IDB6TTE3LjYgNC41Yy0yLjQgMC00LjIgMS45LTQuMiA0LjUgMCAyLjYgMS44IDQuNSA0LjIgNC41bDQuMiAwTDIxLjggOWMwLTIuNi0xLjctNC41LTQuMi00LjV6bTI3LjYgMGMtMi40IDAtNC40IDItNC40IDQuNSAwIDIuNSAyIDQuNSA0LjQgNC41IDIuNCAwIDQuMy0yIDQuMy00LjUgMC0yLjUtMS45LTQuNS00LjMtNC41em0tMjIgMCAwIDEyIDEuOCAwIDAtMyAxLjYgMGMyLjQgMCA0LjMtMS45IDQuMy00LjUgMC0yLjYtMS45LTQuNS00LjMtNC41bC0zLjMgMHptMjYuMiAwIDMgNC40LTMuMiA0LjYgMi4xIDAgMi4yLTMuMSAyLjEgMy4xIDIuMiAwTDU0LjUgOC45IDU3LjUgNC41IDU1LjMgNC41IDUzLjQgNy4zIDUxLjQgNC41IDQ5LjMgNC41Wk0xNy42IDYuMkMxOSA2LjIgMjAgNy40IDIwIDlsMCAyLjgtMi40IDBjLTEuNCAwLTIuNC0xLjItMi40LTIuOCAwLTEuNiAxLTIuOCAyLjQtMi44em0yNy42IDBjMS40IDAgMi42IDEuMiAyLjYgMi44IDAgMS41LTEuMiAyLjgtMi42IDIuOEM0My43IDExLjggNDIuNSAxMC41IDQyLjUgOWMwLTEuNSAxLjItMi44IDIuNi0yLjh6bS0yMC4yIDAgMS42IDBjMS42IDAgMi42IDEuMyAyLjYgMi44IDAgMS41LTEuMSAyLjgtMi42IDIuOGwtMS42IDAgMC01LjV6bTkgMCAxLjUgMGMxLjUgMCAyLjYgMS4zIDIuNiAyLjggMCAxLjUtMSAyLjgtMi42IDIuOGwtMS41IDAgMC01LjV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"); }\n\n.mapboxgl-ctrl.mapboxgl-ctrl-attrib {\n  padding: 0 5px;\n  background-color: rgba(255, 255, 255, 0.5);\n  margin: 0; }\n\n.mapboxgl-ctrl-attrib.compact {\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin: 0 10px 10px 10px;\n  position: relative;\n  padding-right: 24px;\n  background-color: #fff;\n  border-radius: 3px 12px 12px 3px;\n  visibility: hidden; }\n\n.mapboxgl-ctrl-attrib.compact:hover {\n  visibility: visible; }\n\n.mapboxgl-ctrl-attrib.compact:after {\n  content: '';\n  cursor: pointer;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0D%0A%09%3Cpath%20fill%3D%27%23333333%27%20fill-rule%3D%27evenodd%27%20d%3D%27M4%2C10a6%2C6%200%201%2C0%2012%2C0a6%2C6%200%201%2C0%20-12%2C0%20M9%2C7a1%2C1%200%201%2C0%202%2C0a1%2C1%200%201%2C0%20-2%2C0%20M9%2C10a1%2C1%200%201%2C1%202%2C0l0%2C3a1%2C1%200%201%2C1%20-2%2C0%27%20%2F%3E%0D%0A%3C%2Fsvg%3E\");\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 24px;\n  height: 24px;\n  box-sizing: border-box;\n  visibility: visible;\n  border-radius: 12px; }\n\n.mapboxgl-ctrl-attrib a {\n  color: rgba(0, 0, 0, 0.75);\n  text-decoration: none; }\n\n.mapboxgl-ctrl-attrib a:hover {\n  color: inherit;\n  text-decoration: underline; }\n\n.mapboxgl-ctrl-attrib .mapbox-improve-map {\n  font-weight: bold;\n  margin-left: 2px; }\n\n.mapboxgl-ctrl-scale {\n  background-color: rgba(255, 255, 255, 0.75);\n  font-size: 10px;\n  border-width: medium 2px 2px;\n  border-style: none solid solid;\n  border-color: #333;\n  padding: 0 5px;\n  color: #333; }\n\n.mapboxgl-popup {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: -webkit-flex;\n  display: flex;\n  will-change: transform;\n  pointer-events: none;\n  z-index: 999; }\n\n.mapboxgl-popup-anchor-top,\n.mapboxgl-popup-anchor-top-left,\n.mapboxgl-popup-anchor-top-right {\n  -webkit-flex-direction: column;\n  flex-direction: column; }\n\n.mapboxgl-popup-anchor-bottom,\n.mapboxgl-popup-anchor-bottom-left,\n.mapboxgl-popup-anchor-bottom-right {\n  -webkit-flex-direction: column-reverse;\n  flex-direction: column-reverse; }\n\n.mapboxgl-popup-anchor-left {\n  -webkit-flex-direction: row;\n  flex-direction: row; }\n\n.mapboxgl-popup-anchor-right {\n  -webkit-flex-direction: row-reverse;\n  flex-direction: row-reverse; }\n\n.mapboxgl-popup-tip {\n  width: 0;\n  height: 0;\n  border: 10px solid transparent;\n  z-index: 1; }\n\n.mapboxgl-popup-anchor-top .mapboxgl-popup-tip {\n  -webkit-align-self: center;\n  align-self: center;\n  border-top: none;\n  border-bottom-color: #fff; }\n\n.mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip {\n  -webkit-align-self: flex-start;\n  align-self: flex-start;\n  border-top: none;\n  border-left: none;\n  border-bottom-color: #fff; }\n\n.mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {\n  -webkit-align-self: flex-end;\n  align-self: flex-end;\n  border-top: none;\n  border-right: none;\n  border-bottom-color: #fff; }\n\n.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {\n  -webkit-align-self: center;\n  align-self: center;\n  border-bottom: none;\n  border-top-color: #fff; }\n\n.mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip {\n  -webkit-align-self: flex-start;\n  align-self: flex-start;\n  border-bottom: none;\n  border-left: none;\n  border-top-color: #fff; }\n\n.mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip {\n  -webkit-align-self: flex-end;\n  align-self: flex-end;\n  border-bottom: none;\n  border-right: none;\n  border-top-color: #fff; }\n\n.mapboxgl-popup-anchor-left .mapboxgl-popup-tip {\n  -webkit-align-self: center;\n  align-self: center;\n  border-left: none;\n  border-right-color: #fff; }\n\n.mapboxgl-popup-anchor-right .mapboxgl-popup-tip {\n  -webkit-align-self: center;\n  align-self: center;\n  border-right: none;\n  border-left-color: #fff; }\n\n.mapboxgl-popup-close-button {\n  position: absolute;\n  right: 0;\n  top: 0;\n  border: none;\n  border-radius: 0 3px 0 0;\n  cursor: pointer;\n  background-color: transparent; }\n\n.mapboxgl-popup-close-button:hover {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.mapboxgl-popup-content {\n  position: relative;\n  background: #fff;\n  border-radius: 3px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  padding: 10px 10px 15px;\n  pointer-events: auto; }\n\n.mapboxgl-popup-anchor-top-left .mapboxgl-popup-content {\n  border-top-left-radius: 0; }\n\n.mapboxgl-popup-anchor-top-right .mapboxgl-popup-content {\n  border-top-right-radius: 0; }\n\n.mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-content {\n  border-bottom-left-radius: 0; }\n\n.mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-content {\n  border-bottom-right-radius: 0; }\n\n.mapboxgl-marker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  will-change: transform; }\n\n.mapboxgl-crosshair,\n.mapboxgl-crosshair .mapboxgl-interactive,\n.mapboxgl-crosshair .mapboxgl-interactive:active {\n  cursor: crosshair; }\n\n.mapboxgl-boxzoom {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 0;\n  background: #fff;\n  border: 2px dotted #202020;\n  opacity: 0.5; }\n\n@media print {\n  .mapbox-improve-map {\n    display: none; } }\n\n#map {\n  height: 500px; }\n", ""]);

// exports


/***/ }),
/* 237 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(239);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
  }

  _createClass(Profile, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement('div', { id: 'profile' })
      );
    }
  }]);

  return Profile;
}(_react.Component);

;

exports.default = Profile;

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(240);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(56)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(242);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(56)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ })
]),[199]);
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/@reach/router/index.js"), require("/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js"), require("fs"), require("/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/lodash/lodash.js"), require("/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/lodash/keys.js"), require("/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/lodash/map.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/@reach/router/index.js", "/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js", "fs", "/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/lodash/lodash.js", "/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/lodash/keys.js", "/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/lodash/map.js", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/@reach/router/index.js"), require("/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js"), require("fs"), require("/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/lodash/lodash.js"), require("/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/lodash/keys.js"), require("/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/lodash/map.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/@reach/router/index.js"], root["/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js"], root["fs"], root["/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/lodash/lodash.js"], root["/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/lodash/keys.js"], root["/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/lodash/map.js"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_lodash_keys__, __WEBPACK_EXTERNAL_MODULE_lodash_map__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins=[{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),options:{"plugins":[]}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-remark-images/gatsby-ssr */ "./node_modules/gatsby-remark-images/gatsby-ssr.js"),options:{"plugins":[],"maxWidth":850}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-remark-autolink-headers/gatsby-ssr */ "./node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js"),options:{"plugins":[],"offsetY":"100","maintainCase":false,"removeAccents":true}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-google-analytics/gatsby-ssr */ "./node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js"),options:{"plugins":[],"trackingId":"UA-168014760-1"}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-sitemap/gatsby-ssr */ "./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js"),options:{"plugins":[]}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-manifest/gatsby-ssr */ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js"),options:{"plugins":[],"name":"Ashmeet Sehgal","short_name":"Ashmeet Sehgal","description":"Ashmeet Sehgal is a full stack software developer specializing in modern JavaScript.","start_url":"","background_color":"#ffffff","theme_color":"#3F80FF","display":"minimal-ui","purpose":"maskable any","icons":[{"src":"/logos/logo-48.webp","sizes":"48x48","type":"image/jpg"},{"src":"/logos/logo-1024.webp","sizes":"1024x1024","type":"image/jpg"}],"cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":null}}];// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]
const apis=__webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js");// Run the specified API in any plugins that have implemented it
module.exports=(api,args,defaultReturn,argTransform)=>{if(!apis[api]){console.log(`This API doesn't exist`,api);}// Run each plugin in series.
// eslint-disable-next-line no-undef
let results=plugins.map(plugin=>{if(!plugin.plugin[api]){return undefined;}const result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args,result});}return result;});// Filter out undefined results.
results=results.filter(result=>typeof result!==`undefined`);if(results.length>0){return results;}else{return[defaultReturn];}};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */ /**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */exports.replaceRenderer=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */exports.onRenderBody=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */exports.onPreRenderHTML=true;/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper components around pages that won't get
 * unmounted on page changes. For setting Provider components, use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapPageElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */exports.wrapPageElement=true;/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to set up any Provider components that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapRootElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */exports.wrapRootElement=true;

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function HTML(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html",props.htmlAttributes,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{charSet:"utf-8"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),props.headComponents),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body",props.bodyAttributes,props.preBodyComponents,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:`body`,id:"___gatsby",dangerouslySetInnerHTML:{__html:props.body}}),props.postBodyComponents));}HTML.propTypes={htmlAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,headComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,bodyAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,preBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,body:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,postBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array};

/***/ }),

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");
const emitter=Object(mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();/* harmony default export */ __webpack_exports__["default"] = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/*! exports provided: setMatchPaths, findMatchPath, findPath, cleanPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatchPaths", function() { return setMatchPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findMatchPath", function() { return findMatchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPath", function() { return findPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanPath", function() { return cleanPath; });
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/router/lib/utils */ "./node_modules/@reach/router/lib/utils.js");
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");
const pathCache=new Map();let matchPaths=[];const trimPathname=rawPathname=>{const pathname=decodeURIComponent(rawPathname);// Remove the pathPrefix from the pathname.
const trimmedPathname=Object(_strip_prefix__WEBPACK_IMPORTED_MODULE_1__["default"])(pathname,"")// Remove any hashfragment
.split(`#`)[0]// Remove search query
.split(`?`)[0];return trimmedPathname;};/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */const setMatchPaths=value=>{matchPaths=value;};/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */const findMatchPath=rawPathname=>{const trimmedPathname=cleanPath(rawPathname);for(const{matchPath,path}of matchPaths){if(Object(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__["match"])(matchPath,trimmedPathname)){return Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(path);}}return null;};// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
const findPath=rawPathname=>{const trimmedPathname=trimPathname(rawPathname);if(pathCache.has(trimmedPathname)){return pathCache.get(trimmedPathname);}let foundPath=findMatchPath(trimmedPathname);if(!foundPath){foundPath=cleanPath(rawPathname);}pathCache.set(trimmedPathname,foundPath);return foundPath;};/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */const cleanPath=rawPathname=>{const trimmedPathname=trimPathname(rawPathname);let foundPath=trimmedPathname;if(foundPath===`/index.html`){foundPath=`/`;}foundPath=Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(foundPath);return foundPath;};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withAssetPrefix, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery, prefetchPathname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetchPathname", function() { return prefetchPathname; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAssetPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withAssetPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
const prefetchPathname=_loader__WEBPACK_IMPORTED_MODULE_4__["default"].enqueue;const StaticQueryContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});function StaticQueryDataRenderer({staticQueryData,data,query,render}){const finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,finalData&&render(finalData),!finalData&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Loading (StaticQuery)"));}const StaticQuery=props=>{const{data,query,render,children}=props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer,null,staticQueryData=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData}));};const useStaticQuery=query=>{if(typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext!==`function`&&"production"===`development`){throw new Error(`You're likely using a version of React that doesn't support Hooks\n`+`Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`);}const context=react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);// query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
// to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
// catch the misuse of the API and give proper direction
if(isNaN(Number(query))){throw new Error(`useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:

import { useStaticQuery, graphql } from 'gatsby';

useStaticQuery(graphql\`${query}\`);
`);}if(context[query]&&context[query].data){return context[query].data;}else{throw new Error(`The result of this StaticQuery could not be fetched.\n\n`+`This is likely a bug in Gatsby and if refreshing the page does not fix it, `+`please open an issue in https://github.com/gatsbyjs/gatsby/issues`);}};StaticQuery.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,query:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,render:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func};function graphql(){throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls `+`are supposed to only be evaluated at compile time, and then compiled away. `+`Unfortunately, something went wrong and the query was left in the compiled code.\n\n`+`Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);}

/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/*! exports provided: PageResourceStatus, BaseLoader, ProdLoader, setLoader, publicLoader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageResourceStatus", function() { return PageResourceStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoader", function() { return BaseLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdLoader", function() { return ProdLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoader", function() { return setLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicLoader", function() { return publicLoader; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2;}/**
 * Available resource loading statuses
 */const PageResourceStatus={/**
   * At least one of critical resources failed to load
   */Error:`error`,/**
   * Resources loaded successfully
   */Success:`success`};const preferDefault=m=>m&&m.default||m;const stripSurroundingSlashes=s=>{s=s[0]===`/`?s.slice(1):s;s=s.endsWith(`/`)?s.slice(0,-1):s;return s;};const createPageDataUrl=path=>{const fixedPath=path===`/`?`index`:stripSurroundingSlashes(path);return`${""}/page-data/${fixedPath}/page-data.json`;};const doFetch=(url,method=`GET`)=>new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open(method,url,true);req.onreadystatechange=()=>{if(req.readyState==4){resolve(req);}};req.send(null);});const loadPageDataJson=loadObj=>{const{pagePath,retries=0}=loadObj;const url=createPageDataUrl(pagePath);return doFetch(url).then(req=>{const{status,responseText}=req;// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.path===undefined){throw new Error(`not a valid pageData response`);}return Object.assign(loadObj,{status:PageResourceStatus.Success,payload:jsonPayload});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404 page and it doesn't exist, we're done
if(pagePath===`/404.html`){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return loadPageDataJson(Object.assign(loadObj,{pagePath:`/404.html`,notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return loadPageDataJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is an error.
return Object.assign(loadObj,{status:PageResourceStatus.Error});});};const doesConnectionSupportPrefetch=()=>{if(`connection`in navigator&&typeof navigator.connection!==`undefined`){if((navigator.connection.effectiveType||``).includes(`2g`)){return false;}if(navigator.connection.saveData){return false;}}return true;};const toPageResources=(pageData,component=null)=>{const page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath};return{component,json:pageData.result,page};};class BaseLoader{constructor(loadComponent,matchPaths){// Map of pagePath -> Page. Where Page is an object with: {
//   status: PageResourceStatus.Success || PageResourceStatus.Error,
//   payload: PageResources, // undefined if PageResourceStatus.Error
// }
// PageResources is {
//   component,
//   json: pageData.result,
//   page: {
//     componentChunkName,
//     path,
//     webpackCompilationHash,
//   }
// }
this.pageDb=new Map();this.inFlightDb=new Map();this.pageDataDb=new Map();this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["setMatchPaths"])(matchPaths);}setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner(`disableCorePrefetching`).some(a=>a);}loadPageDataJson(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDataDb.has(pagePath)){return Promise.resolve(this.pageDataDb.get(pagePath));}return loadPageDataJson({pagePath}).then(pageData=>{this.pageDataDb.set(pagePath,pageData);return pageData;});}findMatchPath(rawPath){return Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findMatchPath"])(rawPath);}// TODO check all uses of this and whether they use undefined for page resources not exist
loadPage(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDb.has(pagePath)){const page=this.pageDb.get(pagePath);return Promise.resolve(page.payload);}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}const inFlight=Promise.all([this.loadAppData(),this.loadPageDataJson(pagePath)]).then(allData=>{const result=allData[1];if(result.status===PageResourceStatus.Error){return{status:PageResourceStatus.Error};}let pageData=result.payload;const{componentChunkName}=pageData;return this.loadComponent(componentChunkName).then(component=>{const finalResult={createdAt:new Date()};let pageResources;if(!component){finalResult.status=PageResourceStatus.Error;}else{finalResult.status=PageResourceStatus.Success;if(result.notFound===true){finalResult.notFound=true;}pageData=Object.assign(pageData,{webpackCompilationHash:allData[0]?allData[0].webpackCompilationHash:``});pageResources=toPageResources(pageData,component);finalResult.payload=pageResources;_emitter__WEBPACK_IMPORTED_MODULE_2__["default"].emit(`onPostLoadPageResources`,{page:pageResources,pageResources});}this.pageDb.set(pagePath,finalResult);// undefined if final result is an error
return pageResources;});})// prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
.then(response=>{this.inFlightDb.delete(pagePath);return response;}).catch(err=>{this.inFlightDb.delete(pagePath);throw err;});this.inFlightDb.set(pagePath,inFlight);return inFlight;}// returns undefined if loading page ran into errors
loadPageSync(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDb.has(pagePath)){return this.pageDb.get(pagePath).payload;}return undefined;}shouldPrefetch(pagePath){// Skip prefetching if we know user is on slow or constrained connection
if(!doesConnectionSupportPrefetch()){return false;}// Check if the page exists.
if(this.pageDb.has(pagePath)){return false;}return true;}prefetch(pagePath){if(!this.shouldPrefetch(pagePath)){return false;}// Tell plugins with custom prefetching logic that they should start
// prefetching this path.
if(!this.prefetchTriggered.has(pagePath)){this.apiRunner(`onPrefetchPathname`,{pathname:pagePath});this.prefetchTriggered.add(pagePath);}// If a plugin has disabled core prefetching, stop now.
if(this.prefetchDisabled){return false;}const realPath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(pagePath);// Todo make doPrefetch logic cacheable
// eslint-disable-next-line consistent-return
this.doPrefetch(realPath).then(()=>{if(!this.prefetchCompleted.has(pagePath)){this.apiRunner(`onPostPrefetchPathname`,{pathname:pagePath});this.prefetchCompleted.add(pagePath);}});return true;}doPrefetch(pagePath){throw new Error(`doPrefetch not implemented`);}hovering(rawPath){this.loadPage(rawPath);}getResourceURLsForPathname(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);const page=this.pageDataDb.get(pagePath);if(page){const pageResources=toPageResources(page.payload);return[].concat(_toConsumableArray(createComponentUrls(pageResources.page.componentChunkName)),[createPageDataUrl(pagePath)]);}else{return null;}}isPageNotFound(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);const page=this.pageDb.get(pagePath);return page&&page.notFound===true;}loadAppData(retries=0){return doFetch(`${""}/page-data/app-data.json`).then(req=>{const{status,responseText}=req;let appData;if(status!==200&&retries<3){// Retry 3 times incase of non-200 responses
return this.loadAppData(retries+1);}// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error(`not a valid app-data response`);}appData=jsonPayload;}catch(err){// continue regardless of error
}}return appData;});}}const createComponentUrls=componentChunkName=>(window.___chunkMapping[componentChunkName]||[]).map(chunk=>""+chunk);class ProdLoader extends BaseLoader{constructor(asyncRequires,matchPaths){const loadComponent=chunkName=>asyncRequires.components[chunkName]?asyncRequires.components[chunkName]().then(preferDefault)// loader will handle the case when component is null
.catch(()=>null):Promise.resolve();super(loadComponent,matchPaths);}doPrefetch(pagePath){const pageDataUrl=createPageDataUrl(pagePath);return Object(_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])(pageDataUrl,{crossOrigin:`anonymous`,as:`fetch`}).then(()=>// This was just prefetched, so will return a response from
// the cache instead of making another request to the server
this.loadPageDataJson(pagePath)).then(result=>{if(result.status!==PageResourceStatus.Success){return Promise.resolve();}const pageData=result.payload;const chunkName=pageData.componentChunkName;const componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])).then(()=>pageData);});}loadPageDataJson(rawPath){return super.loadPageDataJson(rawPath).then(data=>{if(data.notFound){// check if html file exist using HEAD request:
// if it does we should navigate to it instead of showing 404
return doFetch(rawPath,`HEAD`).then(req=>{if(req.status===200){// page (.html file) actually exist (or we asked for 404 )
// returning page resources status as errored to trigger
// regular browser navigation to given page
return{status:PageResourceStatus.Error};}// if HEAD request wasn't 200, return notFound result
// and show 404 page
return data;});}return data;});}}let instance;const setLoader=_loader=>{instance=_loader;};const publicLoader={// Deprecated methods. As far as we're aware, these are only used by
// core gatsby and the offline plugin, however there's a very small
// chance they're called by others.
getResourcesForPathname:rawPath=>{console.warn(`Warning: getResourcesForPathname is deprecated. Use loadPage instead`);return instance.i.loadPage(rawPath);},getResourcesForPathnameSync:rawPath=>{console.warn(`Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead`);return instance.i.loadPageSync(rawPath);},enqueue:rawPath=>instance.prefetch(rawPath),// Real methods
getResourceURLsForPathname:rawPath=>instance.getResourceURLsForPathname(rawPath),loadPage:rawPath=>instance.loadPage(rawPath),loadPageSync:rawPath=>instance.loadPageSync(rawPath),prefetch:rawPath=>instance.prefetch(rawPath),isPageNotFound:rawPath=>instance.isPageNotFound(rawPath),hovering:rawPath=>instance.hovering(rawPath),loadAppData:()=>instance.loadAppData()};/* harmony default export */ __webpack_exports__["default"] = (publicLoader);

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (path=>{if(path===undefined){return path;}if(path===`/`){return`/`;}if(path.charAt(path.length-1)===`/`){return path.slice(0,-1);}return path;});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const support=function(feature){if(typeof document===`undefined`){return false;}const fakeLink=document.createElement(`link`);try{if(fakeLink.relList&&typeof fakeLink.relList.supports===`function`){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};const linkPrefetchStrategy=function(url,options){return new Promise((resolve,reject)=>{if(typeof document===`undefined`){reject();return;}const link=document.createElement(`link`);link.setAttribute(`rel`,`prefetch`);link.setAttribute(`href`,url);Object.keys(options).forEach(key=>{link.setAttribute(key,options[key]);});link.onload=resolve;link.onerror=reject;const parentElement=document.getElementsByTagName(`head`)[0]||document.getElementsByName(`script`)[0].parentNode;parentElement.appendChild(link);});};const xhrPrefetchStrategy=function(url){return new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open(`GET`,url,true);req.onload=()=>{if(req.status===200){resolve();}else{reject();}};req.send(null);});};const supportedPrefetchStrategy=support(`prefetch`)?linkPrefetchStrategy:xhrPrefetchStrategy;const preFetched={};const prefetch=function(url,options){return new Promise(resolve=>{if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url,options).then(()=>{resolve();preFetched[url]=true;}).catch(()=>{});// 404s are logged to the console anyway
});};/* harmony default export */ __webpack_exports__["default"] = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const preferDefault=m=>m&&m.default||m;if(false){}else if(false){}else{module.exports=()=>null;}

/***/ }),

/***/ "./.cache/route-announcer-props.js":
/*!*****************************************!*\
  !*** ./.cache/route-announcer-props.js ***!
  \*****************************************/
/*! exports provided: RouteAnnouncerProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteAnnouncerProps", function() { return RouteAnnouncerProps; });
// This is extracted to separate module because it's shared
// between browser and SSR code
const RouteAnnouncerProps={id:`gatsby-announcer`,style:{position:`absolute`,top:0,width:1,height:1,padding:0,overflow:`hidden`,clip:`rect(0, 0, 0, 0)`,whiteSpace:`nowrap`,border:0},"aria-live":`assertive`,"aria-atomic":`true`};

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: sanitizeComponents, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeComponents", function() { return sanitizeComponents; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2;}const React=__webpack_require__(/*! react */ "react");const fs=__webpack_require__(/*! fs */ "fs");const{join}=__webpack_require__(/*! path */ "path");const{renderToString,renderToStaticMarkup}=__webpack_require__(/*! react-dom/server */ "react-dom/server");const{ServerLocation,Router,isRedirect}=__webpack_require__(/*! @reach/router */ "@reach/router");const{get,merge,isObject,flatten,uniqBy,flattenDeep,replace,concat,memoize}=__webpack_require__(/*! lodash */ "lodash");const{RouteAnnouncerProps}=__webpack_require__(/*! ./route-announcer-props */ "./.cache/route-announcer-props.js");const apiRunner=__webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");const syncRequires=__webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");const{version:gatsbyVersion}=__webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json");const stats=JSON.parse(fs.readFileSync(`${process.cwd()}/public/webpack.stats.json`,`utf-8`));const chunkMapping=JSON.parse(fs.readFileSync(`${process.cwd()}/public/chunk-map.json`,`utf-8`));// const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.
const testRequireError=(moduleName,err)=>{const regex=new RegExp(`Error: Cannot find module\\s.${moduleName}`);const firstLine=err.toString().split(`\n`)[0];return regex.test(firstLine);};let Html;try{Html=__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));}catch(err){if(testRequireError(`../src/html`,err)){Html=__webpack_require__(/*! ./default-html */ "./.cache/default-html.js");}else{throw err;}}Html=Html&&Html.__esModule?Html.default:Html;const getPageDataPath=path=>{const fixedPagePath=path===`/`?`index`:path;return join(`page-data`,fixedPagePath,`page-data.json`);};const getPageDataUrl=pagePath=>{const pageDataPath=getPageDataPath(pagePath);return`${""}/${pageDataPath}`;};const getPageData=pagePath=>{const pageDataPath=getPageDataPath(pagePath);const absolutePageDataPath=join(process.cwd(),`public`,pageDataPath);const pageDataRaw=fs.readFileSync(absolutePageDataPath);try{return JSON.parse(pageDataRaw.toString());}catch(err){return null;}};const appDataPath=join(`page-data`,`app-data.json`);const getAppDataUrl=memoize(()=>{let appData;try{const absoluteAppDataPath=join(process.cwd(),`public`,appDataPath);const appDataRaw=fs.readFileSync(absoluteAppDataPath);appData=JSON.parse(appDataRaw.toString());if(!appData){return null;}}catch(err){return null;}return`${""}/${appDataPath}`;});const loadPageDataSync=pagePath=>{const pageDataPath=getPageDataPath(pagePath);const pageDataFile=join(process.cwd(),`public`,pageDataPath);try{const pageDataJson=fs.readFileSync(pageDataFile);return JSON.parse(pageDataJson);}catch(error){// not an error if file is not found. There's just no page data
return null;}};const createElement=React.createElement;const sanitizeComponents=components=>{const componentsArray=ensureArray(components);return componentsArray.map(component=>{// Ensure manifest is always loaded from content server
// And not asset server when an assetPrefix is used
if(false){}return component;});};const ensureArray=components=>{if(Array.isArray(components)){// remove falsy items and flatten
return flattenDeep(components.filter(val=>Array.isArray(val)?val.length>0:val));}else{// we also accept single components, so we need to handle this case as well
return components?[components]:[];}};/* harmony default export */ __webpack_exports__["default"] = ((pagePath,callback)=>{var _postBodyComponents;let bodyHtml=``;let headComponents=[/*#__PURE__*/React.createElement("meta",{name:"generator",content:`Gatsby ${gatsbyVersion}`,key:`generator-${gatsbyVersion}`})];let htmlAttributes={};let bodyAttributes={};let preBodyComponents=[];let postBodyComponents=[];let bodyProps={};const replaceBodyHTMLString=body=>{bodyHtml=body;};const setHeadComponents=components=>{headComponents=headComponents.concat(sanitizeComponents(components));};const setHtmlAttributes=attributes=>{htmlAttributes=merge(htmlAttributes,attributes);};const setBodyAttributes=attributes=>{bodyAttributes=merge(bodyAttributes,attributes);};const setPreBodyComponents=components=>{preBodyComponents=preBodyComponents.concat(sanitizeComponents(components));};const setPostBodyComponents=components=>{postBodyComponents=postBodyComponents.concat(sanitizeComponents(components));};const setBodyProps=props=>{bodyProps=merge({},bodyProps,props);};const getHeadComponents=()=>headComponents;const replaceHeadComponents=components=>{headComponents=sanitizeComponents(components);};const getPreBodyComponents=()=>preBodyComponents;const replacePreBodyComponents=components=>{preBodyComponents=sanitizeComponents(components);};const getPostBodyComponents=()=>postBodyComponents;const replacePostBodyComponents=components=>{postBodyComponents=sanitizeComponents(components);};const pageData=getPageData(pagePath);const pageDataUrl=getPageDataUrl(pagePath);const appDataUrl=getAppDataUrl();const{componentChunkName}=pageData;class RouteHandler extends React.Component{render(){const props={...this.props,...pageData.result,// pathContext was deprecated in v2. Renamed to pageContext
pathContext:pageData.result?pageData.result.pageContext:undefined};const pageElement=createElement(syncRequires.components[componentChunkName],props);const wrappedPage=apiRunner(`wrapPageElement`,{element:pageElement,props},pageElement,({result})=>{return{element:result,props};}).pop();return wrappedPage;}}const routerElement=/*#__PURE__*/React.createElement(ServerLocation,{url:`${""}${pagePath}`},/*#__PURE__*/React.createElement(Router,{id:"gatsby-focus-wrapper",baseuri:""},/*#__PURE__*/React.createElement(RouteHandler,{path:"/*"})),/*#__PURE__*/React.createElement("div",RouteAnnouncerProps));const bodyComponent=apiRunner(`wrapRootElement`,{element:routerElement,pathname:pagePath},routerElement,({result})=>{return{element:result,pathname:pagePath};}).pop();// Let the site or plugin render the page component.
apiRunner(`replaceRenderer`,{bodyComponent,replaceBodyHTMLString,setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,pathPrefix:""});// If no one stepped up, we'll handle it.
if(!bodyHtml){try{bodyHtml=renderToString(bodyComponent);}catch(e){// ignore @reach/router redirect errors
if(!isRedirect(e))throw e;}}// Create paths to scripts
let scriptsAndStyles=flatten([`app`,componentChunkName].map(s=>{const fetchKey=`assetsByChunkName[${s}]`;let chunks=get(stats,fetchKey);const namedChunkGroups=get(stats,`namedChunkGroups`);if(!chunks){return null;}chunks=chunks.map(chunk=>{if(chunk===`/`){return null;}return{rel:`preload`,name:chunk};});namedChunkGroups[s].assets.forEach(asset=>chunks.push({rel:`preload`,name:asset}));const childAssets=namedChunkGroups[s].childAssets;for(const rel in childAssets){chunks=concat(chunks,childAssets[rel].map(chunk=>{return{rel,name:chunk};}));}return chunks;})).filter(s=>isObject(s)).sort((s1,s2)=>s1.rel==`preload`?-1:1);// given priority to preload
scriptsAndStyles=uniqBy(scriptsAndStyles,item=>item.name);const scripts=scriptsAndStyles.filter(script=>script.name&&script.name.endsWith(`.js`));const styles=scriptsAndStyles.filter(style=>style.name&&style.name.endsWith(`.css`));apiRunner(`onRenderBody`,{setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,loadPageDataSync,bodyHtml,scripts,styles,pathPrefix:""});scripts.slice(0).reverse().forEach(script=>{// Add preload/prefetch <link>s for scripts.
headComponents.push(/*#__PURE__*/React.createElement("link",{as:"script",rel:script.rel,key:script.name,href:`${""}/${script.name}`}));});if(pageData){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"fetch",rel:"preload",key:pageDataUrl,href:pageDataUrl,crossOrigin:"anonymous"}));}if(appDataUrl){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"fetch",rel:"preload",key:appDataUrl,href:appDataUrl,crossOrigin:"anonymous"}));}styles.slice(0).reverse().forEach(style=>{// Add <link>s for styles that should be prefetched
// otherwise, inline as a <style> tag
if(style.rel===`prefetch`){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"style",rel:style.rel,key:style.name,href:`${""}/${style.name}`}));}else{headComponents.unshift(/*#__PURE__*/React.createElement("style",{"data-href":`${""}/${style.name}`,dangerouslySetInnerHTML:{__html:fs.readFileSync(join(process.cwd(),`public`,style.name),`utf-8`)}}));}});// Add page metadata for the current page
const windowPageData=`/*<![CDATA[*/window.pagePath="${pagePath}";/*]]>*/`;postBodyComponents.push(/*#__PURE__*/React.createElement("script",{key:`script-loader`,id:`gatsby-script-loader`,dangerouslySetInnerHTML:{__html:windowPageData}}));// Add chunk mapping metadata
const scriptChunkMapping=`/*<![CDATA[*/window.___chunkMapping=${JSON.stringify(chunkMapping)};/*]]>*/`;postBodyComponents.push(/*#__PURE__*/React.createElement("script",{key:`chunk-mapping`,id:`gatsby-chunk-mapping`,dangerouslySetInnerHTML:{__html:scriptChunkMapping}}));// Filter out prefetched bundles as adding them as a script tag
// would force high priority fetching.
const bodyScripts=scripts.filter(s=>s.rel!==`prefetch`).map(s=>{const scriptPath=`${""}/${JSON.stringify(s.name).slice(1,-1)}`;return/*#__PURE__*/React.createElement("script",{key:scriptPath,src:scriptPath,async:true});});(_postBodyComponents=postBodyComponents).push.apply(_postBodyComponents,_toConsumableArray(bodyScripts));apiRunner(`onPreRenderHTML`,{getHeadComponents,replaceHeadComponents,getPreBodyComponents,replacePreBodyComponents,getPostBodyComponents,replacePostBodyComponents,pathname:pagePath,pathPrefix:""});const html=`<!DOCTYPE html>${renderToStaticMarkup(/*#__PURE__*/React.createElement(Html,Object.assign({},bodyProps,{headComponents:headComponents,htmlAttributes:htmlAttributes,bodyAttributes:bodyAttributes,preBodyComponents:preBodyComponents,postBodyComponents:postBodyComponents,body:bodyHtml,path:pagePath})))}`;callback(null,html);});

/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 *//* harmony default export */ __webpack_exports__["default"] = ((str,prefix=``)=>{if(!prefix){return str;}prefix+=`/`;if(str.substr(0,prefix.length)===prefix){return str.slice(prefix.length-1);}return str;});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const{hot}=__webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");// prefer default export if available
const preferDefault=m=>m&&m.default||m;exports.components={"component---src-pages-404-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/404.js */ "./src/pages/404.js"))),"component---src-pages-contact-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/contact.js */ "./src/pages/contact.js"))),"component---src-pages-index-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js"))),"component---src-pages-me-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/me.js */ "./src/pages/me.js")))};

/***/ }),

/***/ "./content/thumbnails/facebook.webp":
/*!******************************************!*\
  !*** ./content/thumbnails/facebook.webp ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/webp;base64,UklGRtYCAABXRUJQVlA4WAoAAAAQAAAATwAATwAAQUxQSPABAAABkLxt+2E335nYtjPZZztdadqV/4KuuLKxMuLUtm3b7bFqm7Gn1y+a38nv+33VLiImAHoGaSXWGoNJbNRYS7QgMFdXfmIEflqlmgxyMSJdei/6a0bmGx0AVBcj1KVC0EpG6sog7RMtn7QSRmyJlRprDTU1BjUG+xutf+O+f/tWr3c/yfdy+5h++Umx0aaaXzL/NFWBAFdJ1bquEAIvkaluciiQ0jzRArRUBQMt9mygxRgLxLjTqSmBvl4rS+vQgMLjEhOTkpL0Z7K8K+ILGVJ98YHD6XR6fjBZ78VyhS1sYNIfD+Ea1cLk32HhUbYxAjcAb8wdCtZyJbupSfX/j1rPlfZEol+Og/sPHDhw4NAYrrjygwdM919pRnY+UwnqVeECJchciVyCbCaI79+EayqCEe24piGYwHBPR7AA2QwEm5HNFBd6GtkscfEPkc0Wl/OSmuLvyOaLG9yC7HSiqJAVDHnHtdWreq4ZzRU5a80q02ON2Dh3WXgSXYzA7Xx2CrbR5iABqNn6R5XkpGDLH89mPtefTjIJm2hz/4lsxGNI4RFh1GDZwJUipMZKjbWEmhLtE5L1fF4Bn7SglbSsDALVhWMdEpcKAPobdKm+PnujQ0/dRYVLh97VlZ/ErUXwaZUK5kFaibXGkMmosZZoQdATVlA4IMAAAACQBQCdASpQAFAAPlEmkEYjoiGhIpgJuHAKCWMA07EHbtj9AAAVd2VPZN4lC90ULbaXRdxCAAD+795f/4pSbe/4gv4grSv828jb6GId5ZZpEzF7qW8xUGF9+2ULtf36xXsfFdjGbfkbyDD94x36yeVdV76lDMYxvcH94x8/8lqUqZgHuxPOzMxfMYjuNVRtUe0u1BlyLXfiD8mmd1sMNr/xXL1KTiH6R4t5KaieEqrRC5ThDEHcyIGKEghwhUBjAAA="

/***/ }),

/***/ "./content/thumbnails/github.webp":
/*!****************************************!*\
  !*** ./content/thumbnails/github.webp ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/webp;base64,UklGRuYHAABXRUJQVlA4WAoAAAAQAAAATwAATwAAQUxQSFwEAAABkEVb2/FGb1jb7ti2bdu2bdu2bdu2a41t1Q3+96LJ973fl5n7iJgA+O9qPXOVqdu6a8+eXVvVLZPLU2dbzoXbzzv29P2fTJOCqJgy/7x/enxe+8LONuJec/aNLyYkNH29Maemh3TqwpPupaLA1HsTC6tl0lba9AmFf9xUSStN6W0/UcqfW0vJETj7M0r7aWaAOHWjByj1/QYqQW4zfqPkv6e6Csl5WEHplQPhAkreQ5u8XYysYgzaaGQ5ovLxaLOxZUmKRKANPy1IEHQNbfpSAJfDVrTxjfY8Q422ljWAo9wHtPl3pZhcTuI/8IgTSy/jvyCrG0NQBPIavxrEpX8x8+DjAGtjkDuuXKud38S8Xlm31lcuZbiVoGi+s1rQlN2ZRvdjUT4AjwgujAiw1F/h26MGAH3Lu2ZEw+cnJzfMGT9y1IR5m05HfDUiGi9UVwGA4w0+cy8LLteQf182AN/eG2Y2ze+hA6t6r0Kt5m3o4g7ZnW/z4SXnbDVSCK44WBAckEDwt2q2xUj4JpcMFf8S4HwA8HpCYeokwyCkfOgBUDWFAnvJMJEkuRLAOKSMCpeh9FsKHAX6oxR/WoKUHZMpDumC4yjmqOVQL6GICaz8i+BxAEiaM5HgZ+VeRj5lCEg7h8DQayHyf8wvT5VkPlxwmOC6kzx+cQQH7xDsVMljf4ngdjzBKpBXc5gg/j3BSpkOErz/SrBRIu0Jgq/fCA5o5HG4RvDtM8E1R3m8owg+vyJICpSnwBeC188IkivL08xAEHGBAMfKsxAJL22muOYii89Tiq3jFYL0prJ0MRAoE5ulEeAVTzkCHiBhesuC7yiUORoZ7FYh5YfCLtcpMG2UTpzDjCySm66wmAQzlgWKyr3FgKTLAVoYSBAfdfcVoMkzNgFpjW0AQp8TofHZvPqh9gRa37L99rxF6lfhAOqtVIiY8fLi2rHtQlg86k09Ev0HBe7UAEDzTDqL5oeFrJW5noFiDa0BALweCkKcZ0WzD0U/8ckGI4Wts6I7LWwcWAyLF/SzvhXomiboeU5LME7QLLCunWoWMwWsBj7hMHJk1WcA36dCokKtQedMtrfRbD+KssBSEYaewOiwhy1t0nGF5bATUy8Rh51YoGACE17NOywiy0Jm3MIwYG5ioHtZDNjbJjMpy+29m0zbvGvduPoBwFk7gyytC3Cqp5lY0LizmBoAQO3mJIsyT8sDTpuYEL+cWjhhyspTkTdrcTTIotrpCvzeB9kYr7uytTQRHfcHSv/DNN+LsHVVaE4GA63vDoUivQbbICTdHwDUrgvSCTLrso2hyFzuAfS63u/50muyTSb4NEAPQstfUnhSK7NN5LtaGUR7TfjAkVKJbRDPp6k+IGHJHclMyRXYGmQyJe8sBXLq6x5JZogJYAuMZfhzqI4epLWvufWjJeMw4ByYZenthmp2ILWm0Ngbf8yGV2PseeyGJ6ZnfD0/OK8a5Hcp16ZJTiAMqV67kAP8RwFWUDggZAMAADASAJ0BKlAAUAA+RRyJRCKhoRzMBMwoBES0gAr1Xp3crtKpMKfbz9TwsyuOCfzJa/NMc/p3oQ5/3qDgAJbRG5/hIzHazcOlOxsBZsqQmZdQo7xQSFTwyQ+2l6qGnV2y3QdKTWSiw8Pg6MBVYg+Lw9KURG81haw3JHCUzJx3HTsPTb4X7zh/GAHchAQelhLLYtvqop/BaR3ayAAA/v4Hhvhlv0+MCsu5rPFtQA/3n3O89d/wt7IrPyQCgLD/8L9ef/M0/m5OmUO6RMe23E5Lys7qx1cejw9pt+vEUZxFjKnuUwUXmIYLj6uhLkqPfGb163gzWMP3S964qmh+eZJ57N9dGFI+U2SO+9Bd1gw+VYC9SIPo7UF+hOFUQORP+HhDBLS49uPtrOKVy2qyjTfMc2Oj+5dsfiiWj07PcXby5svb/RVNh6i3ZKBWlR/zbx/hua/HG4zlH9qaZCvq9FK3YTbtwhL1W3tqHVkL0WO0qxeNQJ1+nshWZQSqDs0K3cjTCx/S8+sCvC11b0tfbP4aSlgK59jhmcyKrChPD0c5rx6Lvrimf6yqumu9H3W5m4fl+6I7nSiAELywBMUvmMNmkvyxk47JiwHID1fM/AA2akhkHtv+DENSCcph4cDX0oNqzsYn+8ve/Law9dOSA0moEqa5xflDWLBQXIe7k0it88chvWtnp2UmQO869IT+CyQiD0OuK+6mhyrYi6FSCP/jF3RrO8jBrqtjr/VojH8krKqUyO2kzhtH4ISNXh8lB7/RmgjIZjaGLPd+w7hNlFOvCqI+9ZaotKApJOMEice+3+u0+FYzkFpTKr/e2THacfJCj9skjmyYl835xYanPTUCXhfVX/+eT0j+EZhF6a6je2yayOtIzuTxsyXrPvb98qgjjR/zDKHWdMN+m4l1o90fi3FlobREz5deL+/o0f3YinfvP7HCASXA1CQfe/94XWqkH6GZUUlXw64iTQ8n5z6OkUvfWhSYYKV6EDcgHDYHhZBQr8tVzXdoQS6UjSnfOgCrA9IEc68UcH+0gI5LmHToN6+jWsQzsGqHSI23lf5/yrPRNJtAcg3hrpOV7btL8NXrDzUDHKvKFw7pK6fHxGSf/xGbczsdin47eezpYCzTKeaAQDvpm9Itxk88sANiA/A/3xuQAAA="

/***/ }),

/***/ "./content/thumbnails/gmail.webp":
/*!***************************************!*\
  !*** ./content/thumbnails/gmail.webp ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/webp;base64,UklGRvgDAABXRUJQVlA4WAoAAAAQAAAATwAATwAAQUxQSHgAAAABYFNbW5s0AxxmggfQgwGcISGZYqGuTUAM9D7lm1IjgmCSptgR6wTrmtajjPsnyxn1jhBl4qI+3SI2iuyQYTeB2IVyReQTkLmwaDBBGVDdYtHqaAIzatBoejT66ffNHm54Pxnvx+N1BrwOAtdp4DoSXOeC63CXtBZWUDggWgMAADAWAJ0BKlAAUAA+UR6NRSOhoRXKrgA4BQS2AGCLFz9A/FXa+Oq/kr0DmuPeb8gMwD8G/S/959x3aA8wD9AP9L1APMB+zPUM/9HqE/0nqQPQA/YDrOf2h/a/2Vf//nKvTekQOwIMgVA9rL1IbcAoAzTofSXFZtkBpMqydV4gsEHK4aRRmjclX8dqbz/GqytfDRp2jEcf37Iy78ZLh2gx2FJjml3Fdg6MFuRUynTf7h4Nq9CIkTFS1OPsdgD+/nR5fMeUnjgRQIu/U5ULobHN0c/5vhMe6N1wOdaZWZuuawYRFp/SjVz/Ocq98pfwA0h6/2bEXIAgn7l+m4A+llwDVYRxCidv9FL5DgjZT12H+J+1oMH93CsbXBzavvoWUQ2LVquwk6iv2BtVp5aClyarHp6PPCiiKBRpJqIN+2CROF/DiW4CJm6OSzUX2oz4pkvHliN7qurVjc/Xo3Yb0mSXIvfy0bTpKF9gRuwtUTgLl/0mnmc8ZZFbHQrQGPtlvvNpfMvnBiDUX5piicRrg2OedpDoO/4S0t2jq+/D4xKtefvzUNMdJi3hkcmFBa/16MAKgToUyLqza8SrVmsA4O/GUZFEegAmHMyIuG6pdsnL1oLO9IOmqKEkp0OsqHynpZIpFa8yFp7C5GFKEzwhZjagu/XIh1TUbwCEg2y6bfClPWcqpovuYkc+CmbHQP5vF1xmdH9gAjWU+q88bi5CVGfRcLYngB5S1NqPerHfbmirNsJUh/PWM0/O6KUlYfScAUqBpEcaema7CZly3qmsJeMlZdoFmqTP7gl+QQ9Wam+TWt9qpO5EnklLGB3w3w35MQvCEm7loHoLkm2PrtbBOP6JGhQgqbtg1+NeY1HmKrxb1eGRHang3kHhOtwGK9rJIimP46P4l0rRJ8XajFCjNRNFU7ex7UM72xJWS1IfOLlJeepBJ0+u6OQqIe6CX1mxHvXmgAFwZv+ysaksPDdNPM4ITd3mU4mwufZuWboGkWB1kgQOdOefsFOc6EDYGSsx9011dt8bLs5b+y0aIMOf/tP85kfdZ/n3v94HN2hIR4z++tJ0CLD5KKQBZOt/mL/OpPK5XAOBY0HWKtNkbV8uViV//LDE44NXdfMQO4nPH11QvzG0/5w0IaQMEAAAAA=="

/***/ }),

/***/ "./content/thumbnails/instagram.webp":
/*!*******************************************!*\
  !*** ./content/thumbnails/instagram.webp ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/webp;base64,UklGRtQGAABXRUJQVlA4WAoAAAAQAAAATwAATwAAQUxQSKgDAAABkDTtn9q2y1rbZVSwzAzhpMzMzD0xY0DjGV/LzKZy3fEX6ImZGa65ZTQ7dTkwzsTqFva/HBEO3EZSpORgZhmGep6AuFrDS+OvcHWKSJuqxq/ipcMtJKc3x38/4RKFuon7/hyvBCVBh2jQCZaI0nE3JprEuzsKMf4p0ejT8Xx8GzHRKt7o49A0UEs0Wxtoyk4H6gmb5DfsSIu/JQnb+gAzuZGZditj26YWDOgr7YCCqdtilS4zuZF1NMxKPd3Y3YuU6e2+8SkrgcfDs7JOVFWeiRSbWV7FOk9Hmt0E8mwk0uDIZwS6m66NGHKrN9Ji71uMRSUIIW+Qkf731fRhJINehHIcuIfytZ2W2JuHNKZWwh2cHIT88ETlqr8L3qcI+Xo6G/2zHJ7Hj6z7sFRkKmbqZ0J5ofn/8zwF3LeGJ8D/RsXfVjcITd1MqiKCv8TwUpemsrskHg+PvC8EePQ/3SvB0yiNE5qYV3zfdqPX7InEYpE9a0a380DG1kGu/r8Wb4zQxl8Btomm0uZEP1XDS67+FJ2TRpPzGXKQuo5tgFcYtGRTxbBWPUwSjsmHq6z/tLgOqJlCFwtwfbia5luBEONvNBABG26Mp7JVNKeaUhR8ox8d7JDxAAFa2gkiaMJuiRCa8jhJfjt7LUQxAIPuG9aovnwywhJ9fyqc8f/Cpm1YOQiWnr6wRxYn4xqR8loGvExltAwTScMtVWOnWFQ/j9jr1tmR59XMlbZixrOO9jU63gKldnz0K+tg45Vi3SCQu+OY/aVv3F0CvWGpZFUDwD3fDnFsd96F5X+VQtIewss53wZxbXMeXtPDNHXMScK1VJqbhCuTc5ThicKjjUNCjoMHi3pU0e4TvFCfGL4o4FM7VYwG5bt6PBJ0PLyu0apYQ2ieW6JYzwntGlXsAUSQsBHAHlVEALY4NrxRRXhigHXirIN9ncc8jMuYt4l5BzKvHplXz81rh4xrJ81rx43rZ8zrB43rp40bRxg7zjF/HKZvnCiOtnEsC+44Vtc4mw1vnK0nDuDBiwO0xClceHGKhjhKBE4cpTzOE4IX5zHjUG3y4lBmnKwNXpzMjON1wYvjOfMMeuDOM5g3D2LcPI1x80jmzXMZNw9n7jwh8gXqea3XN+xIi7/xWrz6AHtQ1DRQSzRbG2iK2Po2Yr3gjQJDtvFPdfJUrKvouFvbQry7IxK0JOjowAmWyBTkHP/9hKsSN3HfnyNbTazhpfFXuDolT6oav4qXDud3ighWUDggBgMAALARAJ0BKlAAUAA+USCNRSOvoRZqbdz4BQS2Hb+sAHtb3RIrzdkZ+p/kN7HdPfsf4R4GArPZpyk9pf7qvcA/VHqF+YD9Vf2M95b/JeoD/GeoX/ev8B1kXoAfsz6Yf7c/Cn+6XpI//994AUOW5sbKewoDyJvr/72qbeQc4O3EWdVKzMP88PDfvcJEk+gDN1ao8O6NFSomAAD+8Ve/BzmwIr4fBK2KHY48ROAfi/BhtHzerSm4tEBRhTZl9bVhDn/8brO3dNWel0vpHBQWYQUXC+c3/Q32ad57YmCktNglTEduy7IQTVkADUMfPHVOaHif2EoztuabSaRVRjm4x+7GeO1PovcjbpV+CYLuN23C3AhzPusADhcrnmcOULS8Nfi9kl+DAl6n4zrmPo/9cryG5qNynHgK6w7QWLMQAYtCBp02c7CHwzFPCnQ7KTacfbbP+8jewK+o2/d+3Iq34o2RAKZj+RG8vEGyyPzQQrHo8R3Ipp3ksGdSnapv8KzrsRSzrXU3eiYjywn20U1HpE0T5BvazruWbku0mMHPTb75j/xRK3H+SFe/mQrci0NGtkMHIldtZm/FDs/pqIAaG40MfVDeaxj686APY0wAa+QOBrDiFHs/2Bu7ATwsx7s8R3z7/12gEKG/+1WwSiDGJp5QttlGXFaXJT5j7xa6V/ELVK9+CWX2tDMVr6Qwfc5iUAcSu5zbbYJY3Wtr6iYX1JUqcivkXHvUryTJc77ywVekoD/8/Isr7mJh4gvAy//5WTHwKTGoCHqvu7C3OIqPXIrcpL3X17dLjP1OzTPaks6BCoATCVoQxT1hoRpbKOSgr7KbH5SjVh+CB26895HPwA2bfwZiHslb0iwhJfHdmSpgRJffbNiDmrhkT1SeXAc5U0VgUJKQHfUFdGk/CwsL4xd2h7seJYZv038JTO83wheyIvIjgXjgvP91wyehTHbvmYdVIXqIWAAF/76/+zarerHMGfXCHQjquy38t7JMowKcWJANa8PNGSpXS+KQF7MGn9gwN2eLkrfwAA=="

/***/ }),

/***/ "./content/thumbnails/linkedin.webp":
/*!******************************************!*\
  !*** ./content/thumbnails/linkedin.webp ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/webp;base64,UklGRoQEAABXRUJQVlA4WAoAAAAQAAAATwAATwAAQUxQSHQCAAABkERbmyFJf9u2NbZt27Zt27Zt2/a0ladte4zsHtXpilhU9h/VE3FmNYuImAAA8F4TJRPKPZGj1niDZmeJUEESqTMAdC6kAi3sDN4SFarkvYaIhayJooKNkkUjE9EQyvo7Kzw48RtPrN/O9fSysnBqui5dELHd9UG5yhW1CKJqA9LquAA+tge042v+9ujgoEcJb1+bAqPFW97CrVlgE2839JjG83ZBh2mYmrMHhkzTKedJLkxHePvdl8U1gTd634xhjpo71Rxco2zK/5dxuoh6EVSExTv8lKzHpVJBpu0f2qpZz5VBKipO9Y9iFf3XV31IDHn97I2UU1Je5PmcSZOVpxyVlV7NnjRZedLmIo3SmJ19azhZmhiZ2ni3nv/0e7mEuQJSd7tCnDdgp5ZSGjvRGdCm7W78KYeDgO6h0riui2rwXX3GG5hNprzT3l5cl98aV/Vwn/eYgzZ7Ff0dXbXR8IAlaHdkMS92TqBlvX28lKNfimhgtXBqvhON4R2e9CytTdhgPj82oy+HSi93NtNlaVPCS7UnpVTz0xJDBu9sTjwCaJl/pjBYBPOhs4MiU31x+rf4qJ6PodNxcJSPeRR9TR+3nQuDO7hoO9xqLpwScbk+uPlcVP+A+1gTN5OLBl9xX+rgpgtnqnCm/JdoD66LwhVdVH2Gz7Vxk7VyHjdMrfHQANWqBCc3xS3USlE/S7Oyq7+imp8GW5iV7X6WMp5yM0PWjdAK/RbmH6DoH5hLlb+H+Qco+vsnq1nUSf7+AYr+gfm0bIISIpFFI0eJJmoNEQtZ4y2JRfKGzoUiKewMAJ0lIgoidQZN7zVRMuGPyFFrvAEAVlA4IOoBAAAQDgCdASpQAFAAPlEmjkUjoiET2q3kOAUEtABnVrZ/QPxV7p6pHM/yq/IDn6dzvBnIUWl/d/ug7Tf479B7/OdR3zAfsL6Ln+O9h3oAf03/Aeq56jHoM/rB6bHseftv+0ftVAVqlzbGQ49Cg0icBOlNOO0rOPpMu5uAAP7wG6phLrZC4c3jDNuZSkcrLQJvGu9iIh3Mpv55CAny4ww6hgIaIZcA53knzXqvStOMZw1W7ladKeWsEdVdkIAHE5/OpYAlgmTZmlCrLzXt/6H5Amhix62EJJhzTD342JAR0rmImbFYn3A6wv21Rs+JrCkwCgcuotYSfFOmLpyiucWWz9Eldt7YFw+F/li///FalFV0MKABO16QGUnW+Tcz6JMj99rSuze08MWa+bRE7/Rqe6mCk8f3yz7Br9SKojQozBZKJpb9CXkcZIImunC+T8W0wuM20w/a7uBYUGVVyv4XJIZXYB/AytVyfNTsUM61MNDHeoeTNW9QWc12AeTruB4AevFB2IfQwtuUd3iv1NZ3d+nslHXJL/nIdcLjpdcN29htn+Xi8lgYD8Ysd/sy892O4XhGIWTtomnjHmdFlOMtPjCHXmo9MobzCpy4ZnMWAmH9b+POGtcZkRaYMa6b7JJFoQ+s5OpPGAX3VsAA"

/***/ }),

/***/ "./content/thumbnails/medium.webp":
/*!****************************************!*\
  !*** ./content/thumbnails/medium.webp ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/webp;base64,UklGRoYEAABXRUJQVlA4WAoAAAAQAAAATwAATwAAQUxQSFACAAABkAVJsmlbfax4tm3btm3btm3btm3bts1rH8/jObPXXc/vIyImAH+Go5gVaDenkkW8CqcPtY7HFk5he+tFFyzpDSLXla6JmIiIbCeaxRJJNZG+dt/ql5yNyHG+XTxxivp8g4geDEvDRuS62i2xIFF2k6dPx2ViI3Lf7pdciLYOj4heTcuh5iKiB8PSKJfqHnn9bl4+DRvR03GZFNLMIE6fZUX0bESvpuVQK1E6gIUoYF1pIxvRu3n5tGzRDxJ78NZKFjYin2VF9ExdnHxEYXtrRWEjClhX2siR/jEpaz1SLwobUciyGN5pF5Di1lUKkLubd5WClSOnEvQkozexTlBkX6Lzoo870oVW8yzLc4r8Z+N5ol9OMhzsSc0wKbzJ/b1450iOG0zfGUyStDb6Vq43sqDrSb4yriN5TlABaBAhEZ+iQKIrJNM9UTCapOpok++9XOjRGfo/qls6VyY8lsw+farB96Sy3wAk633TLRcgYefLTrkAcVufccgFiNn4qFUuQNQ6+8LlAliqbA+RC2Asuz5QLoC+2ApfuQDa/AveywVQ55zxWpmHwgGqzBOeKJF9xmvhAKQeeJcPqiwTn4sHJO153c0FIN3IR+IBCTpedLIBKQfeEQ+I0/KUnQ1I0uOaSzggRsMjVjYgQYcLTuGAqLX2hrEBcVqesgsHWCptDWYDYjQ8bBUOMJZeF8AGRKm5J0w4QF9kmQ8bYK60NVg4QJtv3js2wFh6bQDRHr1QgDrHtFdEbh5AX2Tp1aYQP9O4y/O4AG10VSQAouv4ft8DVlA4IBACAADQEQCdASpQAFAAPkkei0QioaEY/t3QKASEsgBlHPq/jvxA2G/vn4q/kB1WnF3e7mrz5dlzBf/K+qJ5i/1L/WvhAP7v/YOuI9ADyr/2l+Br9iv2X+AD9kf//rRI9TKrUNbBBF+rqfFCLZ6nkQgHFvv9tmJ26nJBlTVpqnJVqCOlpChKc+bTEz1AhevTljVfBqnw79Yk9uiAAP7gvf/cYXov6UpeBrPf9QMnRZd+2E13dZGo+soFtNU0/S//LCjRH0/f/57R89SWKnFb5LQVMAuFjYS6LM+P4IvVwD44qBXIbQNf8q+nj8/7DP///lg2v9RdEJ8Vym+nkvipCr9lf1ccyODvIIaS6KHXzWExDrh+4iNgas2qUU3LI20wBdpP6aWDQn1Z/DxtB+RIJPhf/8dviqad6Tx/o/fd/H+YZ5hzMrHm39UsfYvF/69fzka1sOhKSjktUZrAZAEEAyAMaYMMe1kjSZzAMWZpchdrqyvWlLbJrYX+UnNO1nXOEdM5HKX3+tl8rtM02uY6H/hHV8QqWZ/mg4L4przR3sEIKfZUXH4Sgnn/CoAhb83se3LYFBqShTLK5Vja5xY0A70vsHNps+Q7///r5RDhq4aXH9h+cIdWZHUMv1b0TRSQHPvOOE9jX3V4343l/yXcOpUUGJJ69648CC45wLV8qkAIEfrfgVLnSPRnG92yoFPdpnYAAAA="

/***/ }),

/***/ "./content/thumbnails/reddit.webp":
/*!****************************************!*\
  !*** ./content/thumbnails/reddit.webp ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/webp;base64,UklGRn4HAABXRUJQVlA4WAoAAAAQAAAATwAATwAAQUxQSNEEAAABoIZt2xlHe5qZ2tbaqrtGubZt27Zt27Zt2zZrdzptg+dD8r7vZLL/I2IC4G+urxpbxJaBd2SbJuWtzKNpsvHbxUUdgt04EpcRzw0iH7+/mllswv+LyY93DI8uaC3jvU9C2d/tzMDpLiKP8obPZ+a2CXC23YDKf2qor2wcZg0dtutpioSyQuLd4wYCPGKjumb5+M4bOPfQrsuv/sxD+uRQ1U1FPGEFsvYlG00+8jaTQuqoNv0RxJlAaulbffgfIuyvNu/XyLckAgCrq0RiO7VVTseE8jSwnCghUG09Ee+7UEWmk+y2UttKxC0WVPqlBF9CQeX2VxGHAL37Fl7uYwNQe/EfaIhiAPa9b6fmGr6sCwDV18vFz4VYALiE1qlVmAP1j0E8Z8PGXLk9iAtAS92fothBU0KSMTlYUzqI+NRdUxYg7ua0xOYc4mjQ0oKf0VhXUyIN+L2YpgxCvGSlDZYeZWq17Dv6DuLjkX1aRZb3tjYn+3Jt5hx/HpctoKJgSHh9bln3MBezcI6YdiVOQKZS6v1lTXxUxpUffzsTTZr3clF1G5Nwzr4+DkqWNTf9RhWmHWvmoOTg4+vMkbh32PHg/buby6KtAcCiyo40VKnxbEMrALCKWnrz3fsH29u7KcTe4FE2c2cZKDg/AVWcvT0QSm7LQFn+eoxM+wQkfDLyEar888xHSBjXFgBq/UEN/V0DXM+jpp5x7mTUlpz2x1Bjj/zSmp/5WpMnaI2QyEziTSNIzBIvspFezO/YrPfWP6wSdw9s1XXRS0aX+uaxyJrlBwDAhZ1gc6GqDgDAf1YWi/wBntcYGIdxIO95mMUZP5DnhhgZ3PCGmHi6HdagXPYT3Y9gULbaSpdYBwA6xNGk1wTS2XRLgLRaGk1CZ/h/9HWR7L4zUUwOTW4DIsc7ZNKtWJAPTiA7pCMqE0+TFEDE7SUz1gfFmtlkB8lKx9EklifbQ4a9lVoJZHcciSKzaXJiiexvUMxU6oHkqVWIpiL1LKLwZIqVSr0pcKOeoMQ7ug+lCHRrkXKdUheJwtBPyXUPMtzvptQrm2aZUqN8Ckyf6CkTcFBiIR0OkPEYm4q0k5TCUmlQfDi9Zb3Oa38g4x9rO9VpNvmegLRSFyWfN1SIKORJaEIxl0eGGVWUdPtYmONzTyXoqw1rgbDkdy0wNiSxWKMF151JoFIiC9EUIgu+KxBzS+lyFrY9ze5km0U5dBecyaDYS6qrduC5IpNN+hIPsLtKlRwNtK0yae57AljWOZBAF78nRg/geZ9GmmJBpZshUojbfADAKmjQnqfxBuF/vCHuya4BAZYA4LNVpDngDPQOmykQr8fqAQB07mUjWnbr27dbi4gybhwAgC7mGtJeLwwsPfbSYNrWKAdgaB+5JRVp75YDth5bJQrEzCsTIvysSax9a427nIHU18oCa6d5OTSImP3+7Orxvdo2b9621/jVZ95lIb20rxCw13f7Ricv8ryIjNOmOYNJQ4/xbEx4rwEHJnbs81pNv6b7ggqLTPusloS1waDSEhOe8qaTPi8J40C93u32/RBNknSmXzFQub5k1y3P0yUm2e8PDAq2BXO08KzcffHxR99SDPmCKAr5OWk/n59dNSDCTw/mbOlSJCiiQct27Vo1igot7m4Nf10AVlA4IIYCAAAQEACdASpQAFAAPlEkjUSjoiEVyq4AOAUEtgBh1Np/Jfxr7PyjfTPxs/JnorN7/C2Uh+CfmP+V+3ntAeYB+nPSA8wH8n/uX7Vezp6jPQA/qv+L6wD9lfYA/cD00vYn/b79tvgG/ZL/zhArpOuJ7Cvlqv7NoIGHi3MaQX9Pp3K4pZ5XSfqMlgW6AAD+/keAC5+MP//8BYXPxRRUB/dPFc0RUXZsCXgQSMbsdVH+wVPTFp5VWr5hdRVdTeUoWryY7VWLx5Ol6BJOH2TwUiyANEtsWevw+Ks+3NWmb0Jf0Xgx77Pij96jKafiBACPoJi3I9USOmaBQt/lcKTnnbjXTIHnIv7QqpUs/7wi539+ST/cw3bJf+KQlRsi2MN9+/PJ3/3gK3gHvV1m5bQEd9tWxTKd2KHKw4FT2J/vz7dd7ueSCxpoVTDDJbr+tyoX3oDUWD4YSGOx/5/XR8bAumsI09pjy3jIvjSnURyJKTlsfbPu90dXhHvCcZ7U0WNIg+D2dfxBZBNQpog7f9fqiRkxEJkloJr2ebHThLgZdcTAjx0Kjadv/GrsiDyfNk85cKMN8+0QiGyfzgoiWXUDk8Czl8279AZjVNxhdFakxuOVFtu7PjE/CUl/LIAtsw/za479K+RrtX99DYEbWX1nCn06R/S39WPgoLhOXYZAMB8WwlwOfi4mU4c8UHVPw7SqKecXoHSNEmy21KiurkBxfTUw7plCJPwtf4+BTLzBdv/uzBZXbdUM/6Gs9CdapUvt912qlrTn01Rbzcs15NOpo4Rz7q2ZNiDoWXB+0tD3v74g5c+LvqAkQ7dvwVAD13ioVTSrijpyE9Pdt3GpGE7xftJYDuNL6nDrAAAA"

/***/ }),

/***/ "./content/thumbnails/twitter.webp":
/*!*****************************************!*\
  !*** ./content/thumbnails/twitter.webp ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/webp;base64,UklGRtoFAABXRUJQVlA4WAoAAAAQAAAATwAATwAAQUxQSG8DAAABoEVtmyFJ+jLLVWPbtm3btm3btm3btm3btkvZ9S+yIzMi+mquImIC8BesI2WZVn0G9WhcOKElQkjabucLLxFR6Nf9lbVjGrDGVYSL0/duiFgDZxq7GZTMc9pCV8niFqX4KTLsX59Oz1107pu3WfQSne+jCKG2eEdm3igBRM7e88B3oimKXnv63lQEpf0PMvdJ3+mnPhIR3UkFXddeoo91BKj1lTj/rAf9TO+J6F1dbhnvE+fAQAsABUAdjYjoU3OVj2MFcfaNsANRy9YDMIR0f/Rzcin7k9PrDp4EpUafu5ofwCw9CsyJx8G2jvh+WzFm24M/9Ls+AGV5OESHc5uX6S2nMI2IyN9bBYDFDPSig9ustiRi2AQH/j+FhQIbc5mjLBYhONED3S5MRK+HJjbDc1wA73An9Ev9YSO62Tm+sTh3+L1pbUO4Ce4aodC1nimNJH7C7XlJMCrzDRHRkxklozElesztqJMFJX+YQPTrzIiScdRw4tzhdjoSk3OjKUT0++aqriVTRbUBjqPcTrEh/zuT/v/n5YVts4d2vcDtqJsNfYLmCbvbbsC9QLo1KoO9Umog+jLZpoPRsffprEpJEk75KVdfFnUNke/Zkc2vpAqrz4LRFAH+yM9UV4sAHidmSv0iAjjgZLKuiQAmgL3yH+mCNQ24t0v3PKUBFHov21a7EfQMStYRhl2z5Hqd3hiiztVkWmczAZ7BX+UJ1IapavnjmiwXY5kDxGh59FtIiu4w1RYvisOeuN4OrwR3kpoTec3FI8cu3P0SJkFfmNyXZL2eyKxkdyXR2sD0jpoc+6KaF3mjFB+LgmPqizIMU3gg13XxDsYE36zHRHuaG7wTTPsm1M9G4G8pvfW7ONogVQDAVXjc6bfeYEiE2W6IGiVdiSm/BFgRDeI6Wjwm/qtiQdw8G/3EPbQkJoTNMOEt8fdNjAxBnXknPycBP3a2Q0hXxjY7vpCIV8uBo8ehKIrFHiVR9rpjD7wLkYjeJcnBs+jU9ctXbtp97tFnjQS93sABrmqWJT9I5Nejk4K7tdCKL8K8m50dQtoKz3kmQujBxBwqRFVSdz/8mdOHnW2SQWxP7n67n/lN+vNwc8esTkjoSFFl8OrzL775Q+Fo3k8PTy7uWSqRDfKqUVPkKt+kY48Bg/v1aF27VNaEkRT83QoAVlA4IEQCAABQEQCdASpQAFAAPkkejEQioaGYXsZUKASEtQFwAfQB/AEuc7H87/E3r9IUdJ/Ij8SenX2A7ZYcx+K+4f3AfwD2AeYB+k3+f6gHmA/Vr/Gf6r3nP6T+gHuA9AD+kf3LrAPQA/Xf0u/2S+CH9wv2F9rDHAATvoXAnAMjMY/ohZNsIzoQnza0mv1cpD9gdRfeoz4kaMAA/vacbvklgB9KtXlVQNPvHxpmZ8RmV96XuBne1BqVVhp/+ttIIpy5Y+0JfJttPmdEBL0F+IDnenDuKZ93Bz604qNqX4Z7C+g2+88tt4bkv+AefJ5WkmrCxXIZgIaVq8Wu7vRRt3dDTOVwrbzpumjArRN78qZ57QjMH4gMfVEOPo8A/yqYgmx7b1BGmOvfI9EmvLn5/W9v9fvrztlSnJSj/+4hVtPqo4SQTXwVsKLcJ+gAIJXuvAan/9GrxuH8CoX1vhjLpDy53BAvp6rJBwAvdyOHu5cWBcBKBCIGIRIy56quAWmK6oC0qAhWAF97JIOCu3nlPv/elFcmOvAJQyrDsd+/j//71YENjxpccZPnWCUs+w8bYvhL9BCYvoO/FcYH+/GB4YtJ3rH1iSTv9lxMeQHAYZ2znCj+lJGqfpjWaOx8S6OQzTk13em5AA8/GBzxUbcETJJkhr68v03GbfljxF4KAfucO4t5PSkS6X9Nj+FuKTYVaG6ZOUHdDCQcYyyGmlLQ3SjXffSAS9891I/OCKyI4eCoX7JBJ6fn4vUhJTyKVY74bkgUT+RJqIrOQAAA"

/***/ }),

/***/ "./data/SiteConfig.js":
/*!****************************!*\
  !*** ./data/SiteConfig.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const config={siteTitle:'Ashmeet Sehgal',siteTitleShort:'Ashmeet Sehgal',siteTitleAlt:'Ashmeet Sehgal',siteLogo:'/logos/logo-1024.webp',siteUrl:'https://ashmeetsehgal.com',repo:'https://github.com/ashmeetsehgal/ashmeetsehgal.com',pathPrefix:'',dateFromFormat:'YYYY-MM-DD',dateFormat:'MMMM Do, YYYY',siteDescription:'Ashmeet Sehgal is a full stack software developer specializing in modern JavaScript.',siteRss:'/rss.xml',googleAnalyticsID:'UA-168014760-1',postDefaultCategoryID:'Tech',newsletter:'https://ashmeetsehgal.substack.com',newsletterEmbed:'https://ashmeetsehgal.substack.com/embed',userName:'Ashmeet',userEmail:'sglashmeet@gmail.com',userTwitter:'ashmeetsehgal',menuLinks:[{name:'About',link:'/me/'},// {
//   name: 'Articles',
//   link: '/blog/',
// },
{name:'Contact',link:'/contact/'}],themeColor:'#3F80FF',// Used for setting manifest and progress theme colors.
backgroundColor:'#ffffff'};// Make sure siteUrl doesn't have an ending forward slash
if(config.siteUrl.substr(-1)==='/')config.siteUrl=config.siteUrl.slice(0,-1);// Make sure siteRss has a starting forward slash
if(config.siteRss&&config.siteRss[0]!=='/')config.siteRss=`/${config.siteRss}`;module.exports=config;

/***/ }),

/***/ "./data/socialProfiles.js":
/*!********************************!*\
  !*** ./data/socialProfiles.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({twitter:{id:'twitter',alt:'twitter',title:'Twitter',link:'https://twitter.com/ashmeetsehgal',description:'My day to day writings '},instagram:{id:'instagram',alt:'instagram',title:'Instagram',link:'https://www.instagram.com/ashmeet.sehgal',description:'Mostly fun/travelling posts'},// facebook: {
//   id: 'facebook',
//   alt: 'facebook',
//   title: 'Facebook',
//   link: 'https://www.facebook.com/ashmeet.sehgal',
//   description: 'For people who are not there on any other platform',
// },
linkedin:{id:'linkedin',alt:'linkedin',title:'LinkedIn',link:'https://www.linkedin.com/in/ashmeetsehgal',description:'Tech updates/posts'},medium:{id:'medium',alt:'medium',title:'Medium',link:'https://medium.com/@ashmeetsehgal',description:'Detailed posts'},reddit:{id:'reddit',alt:'reddit',title:'Reddit',link:'https://www.reddit.com/user/ashmeetsehgal',description:'lit things happen here'},github:{id:'github',alt:'github',title:'Github',link:'https://github.com/ashmeetsehgal',description:'my code prototypes go here'},gmail:{id:'gmail',alt:'gmail',title:'Gmail',link:'mailto:sglashmeet@gmail.com?&subject=ashmeetsehgal.com||your-subject-here&body=Please-start-writing-here',description:'1 on 1 conversation, what else'}});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@reach/router/lib/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/@reach/router/lib/utils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.shallowCompare = exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : (0, _invariant2.default)(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)
var insertParams = function insertParams(path, params) {
  var segments = segmentize(path);
  return "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname, query) {
  return pathname + (query ? "?" + query : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////
exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;
exports.shallowCompare = shallowCompare;

/***/ }),

/***/ "./node_modules/balanced-match/index.js":
/*!**********************************************!*\
  !*** ./node_modules/balanced-match/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),

/***/ "./node_modules/brace-expansion/index.js":
/*!***********************************************!*\
  !*** ./node_modules/brace-expansion/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var concatMap = __webpack_require__(/*! concat-map */ "./node_modules/concat-map/index.js");
var balanced = __webpack_require__(/*! balanced-match */ "./node_modules/balanced-match/index.js");

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function identity(e) {
  return e;
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m || /\$$/.test(m.pre)) return [str];

  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(',') >= 0;
  if (!isSequence && !isOptions) {
    // {a},b}
    if (m.post.match(/,.*\}/)) {
      str = m.pre + '{' + m.body + escClose + m.post;
      return expand(str);
    }
    return [str];
  }

  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      // x{{a,b}}y ==> x{a}y x{b}y
      n = expand(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length
          ? expand(m.post, false)
          : [''];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }

  // at this point, n is the parts, and we know it's not a comma set
  // with a single entry.

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  var N;

  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length)
    var incr = n.length == 3
      ? Math.abs(numeric(n[2]))
      : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);

    N = [];

    for (var i = x; test(i, y); i += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i);
        if (c === '\\')
          c = '';
      } else {
        c = String(i);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join('0');
            if (i < 0)
              c = '-' + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) { return expand(el, false) });
  }

  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }

  return expansions;
}



/***/ }),

/***/ "./node_modules/concat-map/index.js":
/*!******************************************!*\
  !*** ./node_modules/concat-map/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.withAssetPrefix = withAssetPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

function withPrefix(path) {
  return normalizePath([ true ? "" : undefined, path].join("/"));
}

function withAssetPrefix(path) {
  return [""].concat([path.replace(/^\//, "")]).join("/");
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool
}; // Set up IntersectionObserver

var createIntersectionObserver = function createIntersectionObserver(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
  return {
    instance: io,
    el: el
  };
};

var GatsbyLink = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)((0, _extends2.default)({}, _this.props.style), _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.io) {
      return;
    }

    var _this$io = this.io,
        instance = _this$io.instance,
        el = _this$io.el;
    instance.unobserve(el);
    instance.disconnect();
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      this.io = createIntersectionObserver(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return /*#__PURE__*/_react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault();
          var shouldReplace = replace;
          var isCurrent = encodeURI(to) === window.location.pathname;

          if (typeof replace !== "boolean" && isCurrent) {
            shouldReplace = true;
          } // Make sure the necessary scripts and data are
          // loaded before continuing.


          navigate(to, {
            state: state,
            replace: shouldReplace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)((0, _extends2.default)({}, NavLinkPropTypes), {}, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool,
  state: _propTypes.default.object
});

var showDeprecationWarning = function showDeprecationWarning(functionName, altFunctionName, version) {
  return console.warn("The \"" + functionName + "\" method is now deprecated and will be removed in Gatsby v" + version + ". Please use \"" + altFunctionName + "\" instead.");
};

var _default = _react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(GatsbyLink, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  showDeprecationWarning("push", "navigate", 3);

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  showDeprecationWarning("replace", "navigate", 3);

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  showDeprecationWarning("navigateTo", "navigate", 3);
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.onRenderBody=void 0;var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var knownOptions={createOnly:{clientId:"string",sampleRate:"number",siteSpeedSampleRate:"number",alwaysSendReferrer:"boolean",allowAnchor:"boolean",cookieName:"string",cookieExpires:"number",storeGac:"boolean",legacyCookieDomain:"string",legacyHistoryImport:"boolean",allowLinker:"boolean"},general:{allowAdFeatures:"boolean",dataSource:"string",queueTime:"number",forceSSL:"boolean",transport:"string"}};var onRenderBody=function onRenderBody(_ref,pluginOptions){var setHeadComponents=_ref.setHeadComponents,setPostBodyComponents=_ref.setPostBodyComponents;if( false||!pluginOptions.trackingId){return null;}// Lighthouse recommends pre-connecting to google analytics
setHeadComponents([/*#__PURE__*/_react.default.createElement("link",{rel:"preconnect dns-prefetch",key:"preconnect-google-analytics",href:"https://www.google-analytics.com"})]);var excludeGAPaths=[];if(typeof pluginOptions.exclude!=="undefined"){var Minimatch=__webpack_require__(/*! minimatch */ "./node_modules/minimatch/minimatch.js").Minimatch;pluginOptions.exclude.map(function(exclude){var mm=new Minimatch(exclude);excludeGAPaths.push(mm.makeRe());});}var gaCreateOptions={};for(var option in knownOptions.createOnly){if(typeof pluginOptions[option]===knownOptions.createOnly[option]){gaCreateOptions[option]=pluginOptions[option];}}var setComponents=pluginOptions.head?setHeadComponents:setPostBodyComponents;return setComponents([/*#__PURE__*/_react.default.createElement("script",{key:"gatsby-plugin-google-analytics",dangerouslySetInnerHTML:{__html:"\n  "+(excludeGAPaths.length?"window.excludeGAPaths=["+excludeGAPaths.join(",")+"];":"")+"\n  "+(typeof pluginOptions.anonymize!=="undefined"&&pluginOptions.anonymize===true?"function gaOptout(){document.cookie=disableStr+'=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/',window[disableStr]=!0}var gaProperty='"+pluginOptions.trackingId+"',disableStr='ga-disable-'+gaProperty;document.cookie.indexOf(disableStr+'=true')>-1&&(window[disableStr]=!0);":"")+"\n  if("+(typeof pluginOptions.respectDNT!=="undefined"&&pluginOptions.respectDNT==true?"!(parseInt(navigator.doNotTrack) === 1 || parseInt(window.doNotTrack) === 1 || parseInt(navigator.msDoNotTrack) === 1 || navigator.doNotTrack === \"yes\")":"true")+") {\n    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n    m=s.getElementsByTagName(o)[0];"+(pluginOptions.defer?"a.defer=1;":"a.async=1;")+"a.src=g;m.parentNode.insertBefore(a,m)\n    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n  }\n  if (typeof ga === \"function\") {\n    ga('create', '"+pluginOptions.trackingId+"', '"+(typeof pluginOptions.cookieDomain==="string"?pluginOptions.cookieDomain:"auto")+"', "+(typeof pluginOptions.name==="string"?"'"+pluginOptions.name+"', ":"")+JSON.stringify(gaCreateOptions)+");\n      "+(typeof pluginOptions.anonymize!=="undefined"&&pluginOptions.anonymize===true?"ga('set', 'anonymizeIp', true);":"")+"\n      "+(typeof pluginOptions.optimizeId!=="undefined"?"ga('require', '"+pluginOptions.optimizeId+"');":"")+"\n      "+(typeof pluginOptions.experimentId!=="undefined"?"ga('set', 'expId', '"+pluginOptions.experimentId+"');":"")+"\n      "+(typeof pluginOptions.variationId!=="undefined"?"ga('set', 'expVar', '"+pluginOptions.variationId+"');":"")+"\n      "+Object.keys(knownOptions.general).reduce(function(gaSetCommands,option){if(typeof pluginOptions[option]===knownOptions.general[option]){gaSetCommands+="ga('set', '"+option+"', '"+pluginOptions[option]+"');\n";}return gaSetCommands;},"")+"\n      }"}})]);};exports.onRenderBody=onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/common.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/common.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _fs=_interopRequireDefault(__webpack_require__(/*! fs */ "fs"));var _path=_interopRequireDefault(__webpack_require__(/*! path */ "path"));exports.favicons=[{src:"favicon-32x32.png",sizes:"32x32",type:"image/png"}];// default icons for generating icons
exports.defaultIcons=[{src:"icons/icon-48x48.png",sizes:"48x48",type:"image/png"},{src:"icons/icon-72x72.png",sizes:"72x72",type:"image/png"},{src:"icons/icon-96x96.png",sizes:"96x96",type:"image/png"},{src:"icons/icon-144x144.png",sizes:"144x144",type:"image/png"},{src:"icons/icon-192x192.png",sizes:"192x192",type:"image/png"},{src:"icons/icon-256x256.png",sizes:"256x256",type:"image/png"},{src:"icons/icon-384x384.png",sizes:"384x384",type:"image/png"},{src:"icons/icon-512x512.png",sizes:"512x512",type:"image/png"}];/**
 * Check if the icon exists on the filesystem
 *
 * @param {String} srcIcon Path of the icon
 */exports.doesIconExist=function doesIconExist(srcIcon){try{return _fs.default.statSync(srcIcon).isFile();}catch(e){if(e.code!=="ENOENT"){throw e;}return false;}};/**
 * @param {string} path The generic path to an icon
 * @param {string} digest The digest of the icon provided in the plugin's options.
 */exports.addDigestToPath=function(path,digest,method){if(method==="name"){var parsedPath=_path.default.parse(path);return parsedPath.dir+"/"+parsedPath.name+"-"+digest+parsedPath.ext;}if(method==="query"){return path+"?v="+digest;}return path;};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/gatsby-ssr.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");var React=_interopRequireWildcard(__webpack_require__(/*! react */ "react"));var _gatsby=__webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");var _common=__webpack_require__(/*! ./common.js */ "./node_modules/gatsby-plugin-manifest/common.js");var _getManifestPathname=_interopRequireDefault(__webpack_require__(/*! ./get-manifest-pathname */ "./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js"));// TODO: remove for v3
var withPrefix=_gatsby.withAssetPrefix||_gatsby.withPrefix;exports.onRenderBody=function(_ref,_ref2){var setHeadComponents=_ref.setHeadComponents,_ref$pathname=_ref.pathname,pathname=_ref$pathname===void 0?"/":_ref$pathname;var localize=_ref2.localize,legacy=_ref2.legacy,cacheBusting=_ref2.cache_busting_mode,cacheDigest=_ref2.cacheDigest,icon=_ref2.icon,pluginIcons=_ref2.icons,insertFaviconLinkTag=_ref2.include_favicon,insertMetaTag=_ref2.theme_color_in_head,theme_color=_ref2.theme_color,crossOrigin=_ref2.crossOrigin;// We use this to build a final array to pass as the argument to setHeadComponents at the end of onRenderBody.
var headComponents=[];var srcIconExists=!!icon;var icons=pluginIcons||_common.defaultIcons;var manifestFileName=(0,_getManifestPathname.default)(pathname,localize);// If icons were generated, also add a favicon link.
if(srcIconExists){if(insertFaviconLinkTag){_common.favicons.forEach(function(favicon){headComponents.push(/*#__PURE__*/React.createElement("link",{key:"gatsby-plugin-manifest-icon-link",rel:"icon",href:withPrefix((0,_common.addDigestToPath)(favicon.src,cacheDigest,cacheBusting))}));});}}// Add manifest link tag.
headComponents.push(/*#__PURE__*/React.createElement("link",{key:"gatsby-plugin-manifest-link",rel:"manifest",href:withPrefix("/"+manifestFileName),crossOrigin:crossOrigin}));// The user has an option to opt out of the theme_color meta tag being inserted into the head.
if(theme_color&&insertMetaTag){headComponents.push(/*#__PURE__*/React.createElement("meta",{key:"gatsby-plugin-manifest-meta",name:"theme-color",content:theme_color}));}if(legacy){icons.forEach(function(icon){headComponents.push(/*#__PURE__*/React.createElement("link",{key:"gatsby-plugin-manifest-apple-touch-icon-"+icon.sizes,rel:"apple-touch-icon",sizes:icon.sizes,href:withPrefix((0,_common.addDigestToPath)(icon.src,cacheDigest,srcIconExists?cacheBusting:"none"))}));});}setHeadComponents(headComponents);return true;};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.default=void 0;/**
 * Get a manifest filename depending on localized pathname
 *
 * @param {string} pathname
 * @param {Array<{start_url: string, lang: string}>} localizedManifests
 * @return string
 */var _default=function _default(pathname,localizedManifests){var defaultFilename="manifest.webmanifest";if(!Array.isArray(localizedManifests)){return defaultFilename;}var localizedManifest=localizedManifests.find(function(app){return pathname.startsWith(app.start_url);});if(!localizedManifest){return defaultFilename;}return"manifest_"+localizedManifest.lang+".webmanifest";};exports.default=_default;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.onRenderBody=void 0;var _reactHelmet=__webpack_require__(/*! react-helmet */ "react-helmet");var onRenderBody=function onRenderBody(_ref){var setHeadComponents=_ref.setHeadComponents,setHtmlAttributes=_ref.setHtmlAttributes,setBodyAttributes=_ref.setBodyAttributes;var helmet=_reactHelmet.Helmet.renderStatic();// These action functions were added partway through the Gatsby 1.x cycle.
if(setHtmlAttributes){setHtmlAttributes(helmet.htmlAttributes.toComponent());}if(setBodyAttributes){setBodyAttributes(helmet.bodyAttributes.toComponent());}setHeadComponents([helmet.title.toComponent(),helmet.link.toComponent(),helmet.meta.toComponent(),helmet.noscript.toComponent(),helmet.script.toComponent(),helmet.style.toComponent()]);};exports.onRenderBody=onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _gatsby=__webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");var _internals=__webpack_require__(/*! ./internals */ "./node_modules/gatsby-plugin-sitemap/internals.js");// TODO: remove for v3
var withPrefix=_gatsby.withAssetPrefix||_gatsby.withPrefix;exports.onRenderBody=function(_ref,pluginOptions){var setHeadComponents=_ref.setHeadComponents;var _defaultOptions$plugi=(0,_extends2.default)({},_internals.defaultOptions,pluginOptions),output=_defaultOptions$plugi.output,createLinkInHead=_defaultOptions$plugi.createLinkInHead;if(!createLinkInHead){return;}if(output.charAt(0)!=="/"){output="/"+output;}setHeadComponents([_react.default.createElement("link",{key:"gatsby-plugin-sitemap",rel:"sitemap",type:"application/xml",href:withPrefix(output)})]);};

/***/ }),

/***/ "./node_modules/gatsby-plugin-sitemap/internals.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-plugin-sitemap/internals.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.defaultOptions=exports.runQuery=exports.renameFile=exports.writeFile=exports.withoutTrailingSlash=void 0;var _fs=_interopRequireDefault(__webpack_require__(/*! fs */ "fs"));var _pify=_interopRequireDefault(__webpack_require__(/*! pify */ "./node_modules/pify/index.js"));var _minimatch=_interopRequireDefault(__webpack_require__(/*! minimatch */ "./node_modules/minimatch/minimatch.js"));var withoutTrailingSlash=function withoutTrailingSlash(path){return path==="/"?path:path.replace(/\/$/,"");};exports.withoutTrailingSlash=withoutTrailingSlash;var writeFile=(0,_pify.default)(_fs.default.writeFile);exports.writeFile=writeFile;var renameFile=(0,_pify.default)(_fs.default.rename);exports.renameFile=renameFile;var runQuery=function runQuery(handler,query,excludes,pathPrefix){return handler(query).then(function(r){if(r.errors){throw new Error(r.errors.join(", "));}// Removing excluded paths
r.data.allSitePage.edges=r.data.allSitePage.edges.filter(function(page){return!excludes.some(function(excludedRoute){return(0,_minimatch.default)(withoutTrailingSlash(page.node.path),excludedRoute);});});// Add path prefix
r.data.allSitePage.edges=r.data.allSitePage.edges.map(function(page){page.node.path=(pathPrefix+page.node.path).replace(/^\/\//g,"/");return page;});if(!r.data.site.siteMetadata.siteUrl){throw new Error("SiteMetaData 'siteUrl' property is required. Check out the documentation to see a working example: https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/#how-to-use");}// remove trailing slash of siteUrl
r.data.site.siteMetadata.siteUrl=withoutTrailingSlash(r.data.site.siteMetadata.siteUrl);return r.data;});};exports.runQuery=runQuery;var defaultOptions={query:"\n    {\n      site {\n        siteMetadata {\n          siteUrl\n        }\n      }\n\n      allSitePage {\n        edges {\n          node {\n            path\n          }\n        }\n      }\n  }",output:"/sitemap.xml",exclude:["/dev-404-page","/404","/404.html","/offline-plugin-app-shell-fallback"],createLinkInHead:true,serialize:function serialize(_ref){var site=_ref.site,allSitePage=_ref.allSitePage;return allSitePage.edges.map(function(edge){return{url:site.siteMetadata.siteUrl+edge.node.path,changefreq:"daily",priority:0.7};});}};exports.defaultOptions=defaultOptions;

/***/ }),

/***/ "./node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var pluginDefaults={className:"anchor",icon:true,offsetY:0};exports.onRenderBody=function(_ref,pluginOptions){var setHeadComponents=_ref.setHeadComponents;var _Object$assign=Object.assign(pluginDefaults,pluginOptions),className=_Object$assign.className,icon=_Object$assign.icon,offsetY=_Object$assign.offsetY;var styles="\n    ."+className+".before {\n      position: absolute;\n      top: 0;\n      left: 0;\n      transform: translateX(-100%);\n      padding-right: 4px;\n    }\n    ."+className+".after {\n      display: inline-block;\n      padding-left: 4px;\n    }\n    h1 ."+className+" svg,\n    h2 ."+className+" svg,\n    h3 ."+className+" svg,\n    h4 ."+className+" svg,\n    h5 ."+className+" svg,\n    h6 ."+className+" svg {\n      visibility: hidden;\n    }\n    h1:hover ."+className+" svg,\n    h2:hover ."+className+" svg,\n    h3:hover ."+className+" svg,\n    h4:hover ."+className+" svg,\n    h5:hover ."+className+" svg,\n    h6:hover ."+className+" svg,\n    h1 ."+className+":focus svg,\n    h2 ."+className+":focus svg,\n    h3 ."+className+":focus svg,\n    h4 ."+className+":focus svg,\n    h5 ."+className+":focus svg,\n    h6 ."+className+":focus svg {\n      visibility: visible;\n    }\n  ";// This script used to have `let scrollTop` and `let clientTop` instead of
// current ones which are `var`. It is changed due to incompatibility with
// older browsers (that do not implement `let`). See:
//  - https://github.com/gatsbyjs/gatsby/issues/21058
//  - https://github.com/gatsbyjs/gatsby/pull/21083
var script="\n    document.addEventListener(\"DOMContentLoaded\", function(event) {\n      var hash = window.decodeURI(location.hash.replace('#', ''))\n      if (hash !== '') {\n        var element = document.getElementById(hash)\n        if (element) {\n          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop\n          var clientTop = document.documentElement.clientTop || document.body.clientTop || 0\n          var offset = element.getBoundingClientRect().top + scrollTop - clientTop\n          // Wait for the browser to finish rendering before scrolling.\n          setTimeout((function() {\n            window.scrollTo(0, offset - "+offsetY+")\n          }), 0)\n        }\n      }\n    })\n  ";var style=icon?/*#__PURE__*/_react.default.createElement("style",{key:"gatsby-remark-autolink-headers-style",type:"text/css"},styles):undefined;return setHeadComponents([style,/*#__PURE__*/_react.default.createElement("script",{key:"gatsby-remark-autolink-headers-script",dangerouslySetInnerHTML:{__html:script}})]);};

/***/ }),

/***/ "./node_modules/gatsby-remark-images/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/gatsby-remark-images/constants.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.DEFAULT_OPTIONS={maxWidth:650,wrapperStyle:"",backgroundColor:"white",linkImagesToOriginal:true,showCaptions:false,withWebp:false,tracedSVG:false};exports.imageClass="gatsby-resp-image-image";exports.imageWrapperClass="gatsby-resp-image-wrapper";exports.imageBackgroundClass="gatsby-resp-image-background-image";

/***/ }),

/***/ "./node_modules/gatsby-remark-images/gatsby-ssr.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-remark-images/gatsby-ssr.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _require=__webpack_require__(/*! ./constants */ "./node_modules/gatsby-remark-images/constants.js"),imageClass=_require.imageClass;exports.onRenderBody=function(_ref){var setHeadComponents=_ref.setHeadComponents;var style=("\n  ."+imageClass+" {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    vertical-align: middle;\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: transparent;\n  }").replace(/\s*\n\s*/g,"").replace(/: /g,":").replace(/ \{/g,"{");setHeadComponents([_react.default.createElement("style",{type:"text/css",key:"gatsby-remark-images-styles"},style)]);};

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: name, description, version, author, bin, bugs, dependencies, devDependencies, engines, files, homepage, keywords, license, main, module, peerDependencies, repository, resolutions, scripts, types, yargs, gitHead, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"gatsby\",\"description\":\"Blazing fast modern site generator for React\",\"version\":\"2.22.13\",\"author\":\"Kyle Mathews <mathews.kyle@gmail.com>\",\"bin\":{\"gatsby\":\"./dist/bin/gatsby.js\"},\"bugs\":{\"url\":\"https://github.com/gatsbyjs/gatsby/issues\"},\"dependencies\":{\"@babel/code-frame\":\"^7.8.3\",\"@babel/core\":\"^7.9.6\",\"@babel/parser\":\"^7.9.6\",\"@babel/polyfill\":\"^7.8.7\",\"@babel/runtime\":\"^7.9.6\",\"@babel/traverse\":\"^7.9.6\",\"@hapi/joi\":\"^15.1.1\",\"@mikaelkristiansson/domready\":\"^1.0.10\",\"@pieh/friendly-errors-webpack-plugin\":\"1.7.0-chalk-2\",\"@pmmmwh/react-refresh-webpack-plugin\":\"^0.3.1\",\"@reach/router\":\"^1.3.3\",\"@types/http-proxy\":\"^1.17.4\",\"@typescript-eslint/eslint-plugin\":\"^2.24.0\",\"@typescript-eslint/parser\":\"^2.24.0\",\"address\":\"1.1.2\",\"autoprefixer\":\"^9.8.0\",\"axios\":\"^0.19.2\",\"babel-core\":\"7.0.0-bridge.0\",\"babel-eslint\":\"^10.1.0\",\"babel-loader\":\"^8.1.0\",\"babel-plugin-add-module-exports\":\"^0.3.3\",\"babel-plugin-dynamic-import-node\":\"^2.3.3\",\"babel-plugin-remove-graphql-queries\":\"^2.9.2\",\"babel-preset-gatsby\":\"^0.4.7\",\"better-opn\":\"1.0.0\",\"better-queue\":\"^3.8.10\",\"bluebird\":\"^3.7.2\",\"browserslist\":\"^4.12.0\",\"cache-manager\":\"^2.11.1\",\"cache-manager-fs-hash\":\"^0.0.8\",\"chalk\":\"^2.4.2\",\"chokidar\":\"3.4.0\",\"common-tags\":\"^1.8.0\",\"compression\":\"^1.7.4\",\"convert-hrtime\":\"^3.0.0\",\"copyfiles\":\"^2.2.0\",\"core-js\":\"^2.6.11\",\"cors\":\"^2.8.5\",\"css-loader\":\"^1.0.1\",\"date-fns\":\"^2.14.0\",\"debug\":\"^3.2.6\",\"del\":\"^5.1.0\",\"detect-port\":\"^1.3.0\",\"devcert\":\"^1.1.0\",\"dotenv\":\"^8.2.0\",\"eslint\":\"^6.8.0\",\"eslint-config-react-app\":\"^5.2.1\",\"eslint-loader\":\"^2.2.1\",\"eslint-plugin-flowtype\":\"^3.13.0\",\"eslint-plugin-graphql\":\"^3.1.1\",\"eslint-plugin-import\":\"^2.20.2\",\"eslint-plugin-jsx-a11y\":\"^6.2.3\",\"eslint-plugin-react\":\"^7.20.0\",\"eslint-plugin-react-hooks\":\"^1.7.0\",\"event-source-polyfill\":\"^1.0.14\",\"express\":\"^4.17.1\",\"express-graphql\":\"^0.9.0\",\"fast-levenshtein\":\"^2.0.6\",\"file-loader\":\"^1.1.11\",\"flat\":\"^4.1.0\",\"fs-exists-cached\":\"1.0.0\",\"fs-extra\":\"^8.1.0\",\"gatsby-admin\":\"^0.1.54\",\"gatsby-cli\":\"^2.12.38\",\"gatsby-core-utils\":\"^1.3.3\",\"gatsby-graphiql-explorer\":\"^0.4.3\",\"gatsby-link\":\"^2.4.3\",\"gatsby-plugin-page-creator\":\"^2.3.7\",\"gatsby-plugin-typescript\":\"^2.4.3\",\"gatsby-react-router-scroll\":\"^3.0.1\",\"gatsby-telemetry\":\"^1.3.9\",\"glob\":\"^7.1.6\",\"got\":\"8.3.2\",\"graphql\":\"^14.6.0\",\"graphql-compose\":\"^6.3.8\",\"graphql-playground-middleware-express\":\"^1.7.14\",\"hasha\":\"^5.2.0\",\"http-proxy\":\"^1.18.1\",\"invariant\":\"^2.2.4\",\"is-relative\":\"^1.0.0\",\"is-relative-url\":\"^3.0.0\",\"is-wsl\":\"^2.2.0\",\"jest-worker\":\"^24.9.0\",\"json-loader\":\"^0.5.7\",\"json-stringify-safe\":\"^5.0.1\",\"latest-version\":\"5.1.0\",\"lodash\":\"^4.17.15\",\"md5\":\"^2.2.1\",\"md5-file\":\"^3.2.3\",\"meant\":\"^1.0.1\",\"micromatch\":\"^3.1.10\",\"mime\":\"^2.4.5\",\"mini-css-extract-plugin\":\"^0.8.2\",\"mitt\":\"^1.2.0\",\"mkdirp\":\"^0.5.1\",\"moment\":\"^2.25.3\",\"name-all-modules-plugin\":\"^1.0.1\",\"normalize-path\":\"^2.1.1\",\"null-loader\":\"^3.0.0\",\"opentracing\":\"^0.14.4\",\"optimize-css-assets-webpack-plugin\":\"^5.0.3\",\"p-defer\":\"^3.0.0\",\"parseurl\":\"^1.3.3\",\"physical-cpu-count\":\"^2.0.0\",\"pnp-webpack-plugin\":\"^1.6.4\",\"postcss-flexbugs-fixes\":\"^4.2.1\",\"postcss-loader\":\"^3.0.0\",\"prompts\":\"^2.3.2\",\"prop-types\":\"^15.7.2\",\"query-string\":\"^6.12.1\",\"raw-loader\":\"^0.5.1\",\"react-dev-utils\":\"^4.2.3\",\"react-error-overlay\":\"^3.0.0\",\"react-hot-loader\":\"^4.12.21\",\"react-refresh\":\"^0.7.0\",\"redux\":\"^4.0.5\",\"redux-thunk\":\"^2.3.0\",\"semver\":\"^5.7.1\",\"shallow-compare\":\"^1.2.2\",\"sift\":\"^5.1.0\",\"signal-exit\":\"^3.0.3\",\"slugify\":\"^1.4.0\",\"socket.io\":\"^2.3.0\",\"socket.io-client\":\"2.3.0\",\"st\":\"^2.0.0\",\"stack-trace\":\"^0.0.10\",\"string-similarity\":\"^1.2.2\",\"style-loader\":\"^0.23.1\",\"terser-webpack-plugin\":\"^1.4.3\",\"tmp\":\"^0.2.1\",\"true-case-path\":\"^2.2.1\",\"type-of\":\"^2.0.1\",\"url-loader\":\"^1.1.2\",\"util.promisify\":\"^1.0.1\",\"uuid\":\"^3.4.0\",\"v8-compile-cache\":\"^1.1.2\",\"webpack\":\"~4.43.0\",\"webpack-dev-middleware\":\"^3.7.2\",\"webpack-dev-server\":\"^3.11.0\",\"webpack-hot-middleware\":\"^2.25.0\",\"webpack-merge\":\"^4.2.2\",\"webpack-stats-plugin\":\"^0.3.1\",\"xstate\":\"^4.9.1\",\"yaml-loader\":\"^0.6.0\"},\"devDependencies\":{\"@babel/cli\":\"^7.8.4\",\"@babel/runtime\":\"^7.9.6\",\"@types/hapi__joi\":\"^16.0.12\",\"@types/reach__router\":\"^1.3.5\",\"@types/semver\":\"^7.1.0\",\"@types/socket.io\":\"^2.1.4\",\"@types/string-similarity\":\"^3.0.0\",\"@types/tmp\":\"^0.2.0\",\"babel-preset-gatsby-package\":\"^0.4.2\",\"cross-env\":\"^5.2.1\",\"documentation\":\"^12.3.0\",\"eslint-plugin-jsx-a11y\":\"^6.2.3\",\"react\":\"^16.12.0\",\"react-dom\":\"^16.12.0\",\"rimraf\":\"^3.0.2\",\"xhr-mock\":\"^2.5.1\",\"zipkin\":\"^0.19.2\",\"zipkin-javascript-opentracing\":\"^2.1.0\",\"zipkin-transport-http\":\"^0.19.2\"},\"engines\":{\"node\":\">=10.13.0\"},\"files\":[\"apis.json\",\"ipc.json\",\"cache-dir\",\"dist\",\"graphql.js\",\"index.d.ts\",\"scripts/postinstall.js\",\"utils.js\"],\"homepage\":\"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme\",\"keywords\":[\"blog\",\"generator\",\"jekyll\",\"markdown\",\"react\",\"ssg\",\"website\"],\"license\":\"MIT\",\"main\":\"cache-dir/commonjs/gatsby-browser-entry.js\",\"module\":\"cache-dir/gatsby-browser-entry.js\",\"peerDependencies\":{\"react\":\"^16.4.2\",\"react-dom\":\"^16.4.2\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/gatsbyjs/gatsby.git\"},\"resolutions\":{\"graphql\":\"^14.6.0\"},\"scripts\":{\"build\":\"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs\",\"postbuild\":\"node scripts/output-api-file.js\",\"build:internal-plugins\":\"copyfiles -u 1 src/internal-plugins/**/package.json dist\",\"build:rawfiles\":\"copyfiles -u 1 src/internal-plugins/**/raw_* dist\",\"build:cjs\":\"babel cache-dir --out-dir cache-dir/commonjs --ignore \\\"**/__tests__\\\"\",\"build:src\":\"babel src --out-dir dist --source-maps --verbose --ignore \\\"**/gatsby-cli.js,src/internal-plugins/dev-404-page/raw_dev-404-page.js,**/__tests__\\\" --extensions \\\".ts,.js\\\"\",\"clean-test-bundles\":\"find test/ -type f -name bundle.js* -exec rm -rf {} +\",\"prebuild\":\"rimraf dist && rimraf cache-dir/commonjs\",\"postinstall\":\"node scripts/postinstall.js\",\"prepare\":\"cross-env NODE_ENV=production npm run build\",\"watch\":\"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch\"},\"types\":\"index.d.ts\",\"yargs\":{\"boolean-negation\":false},\"gitHead\":\"3a1b7477afea16ca7e2407c774c1b26e466a6a31\"}");

/***/ }),

/***/ "./node_modules/github-buttons/dist/buttons.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/github-buttons/dist/buttons.esm.js ***!
  \*********************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render$1; });
/*!
 * github-buttons v2.10.1
 * (c) 2020 なつき
 * @license BSD-2-Clause
 */
var document = window.document;

var Math = window.Math;

var HTMLElement = window.HTMLElement;

var XMLHttpRequest = window.XMLHttpRequest;

var createElementInDocument = function (document) {
  return function (tag, props, children) {
    var el = document.createElement(tag);
    if (props != null) {
      for (var prop in props) {
        var val = props[prop];
        if (val != null) {
          if (el[prop] != null) {
            el[prop] = val;
          } else {
            el.setAttribute(prop, val);
          }
        }
      }
    }
    if (children != null) {
      for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        el.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
      }
    }
    return el
  }
};

var createElement = createElementInDocument(document);

var dispatchOnce = function (func) {
  var onceToken;
  return function () {
    if (!onceToken) {
      onceToken = 1;
      func.apply(this, arguments);
    }
  }
};

var hasOwnProperty = function (obj, prop) {
  return {}.hasOwnProperty.call(obj, prop)
};

var name = "github-buttons";
var version = "2.10.1";

var iframeURL = 'https://' + (/* istanbul ignore next */  'unpkg.com/' + name + '@' + version + '/dist' ) + '/buttons.html';

var domain = 'github.com';

var apiBaseURL = 'https://api.' + domain;

var useXHR = XMLHttpRequest && 'prototype' in XMLHttpRequest && 'withCredentials' in XMLHttpRequest.prototype;

var useShadowDOM = useXHR && HTMLElement && 'attachShadow' in HTMLElement.prototype && !('prototype' in HTMLElement.prototype.attachShadow);

var onEvent = function (target, eventName, func) {
  /* istanbul ignore else: IE lt 9 */
  if (target.addEventListener) {
    target.addEventListener(eventName, func, false);
  } else {
    target.attachEvent('on' + eventName, func);
  }
};

var offEvent = function (target, eventName, func) {
  /* istanbul ignore else: IE lt 9 */
  if (target.removeEventListener) {
    target.removeEventListener(eventName, func, false);
  } else {
    target.detachEvent('on' + eventName, func);
  }
};

var onceEvent = function (target, eventName, func) {
  var callback = function (event) {
    offEvent(target, eventName, callback);
    return func(event)
  };
  onEvent(target, eventName, callback);
};

var onceReadyStateChange = /* istanbul ignore next: IE lt 9 */ function (target, regex, func) {
  var eventName = 'readystatechange';
  var callback = function (event) {
    if (regex.test(target.readyState)) {
      offEvent(target, eventName, callback);
      return func(event)
    }
  };
  onEvent(target, eventName, callback);
};

var parseOptions = function (anchor) {
  var options = {
    href: anchor.href,
    title: anchor.title,
    'aria-label': anchor.getAttribute('aria-label')
  };
  var ref = ['icon', 'color-scheme', 'text', 'size', 'show-count'];
  for (var i = 0, len = ref.length; i < len; i++) {
    var attribute = 'data-' + ref[i];
    options[attribute] = anchor.getAttribute(attribute);
  }
  if (options['data-text'] == null) {
    options['data-text'] = anchor.textContent || anchor.innerText;
  }
  return options
};

var buttonsCssText = "body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}";

var light = ".btn{color:#24292e;background-color:#eff3f6;border-color:#c5c9cc;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e6ebf1;background-position:-0.5em;border-color:#9fa4a9;border-color:rgba(27,31,35,.35);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f0f3f6'/%3e%3cstop offset='90%25' stop-color='%23e6ebf1'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;border-color:#a1a4a8;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#d1d2d3;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}";

var dark = ".btn{color:#fafbfc;background-color:#202428;border-color:#1f2327;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232f363d'/%3e%3cstop offset='90%25' stop-color='%23202428'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2f363d, #202428 90%);background-image:linear-gradient(180deg, #2f363d, #202428 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2F363D', endColorstr='#FF1E2226')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#1b1f23;background-position:-0.5em;border-color:#1b1f23;border-color:rgba(27,31,35,.5);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232b3137'/%3e%3cstop offset='90%25' stop-color='%231b1f23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2b3137, #1b1f23 90%);background-image:linear-gradient(180deg, #2b3137, #1b1f23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2B3137', endColorstr='#FF191D21')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#181b1f;border-color:#1a1d21;border-color:rgba(27,31,35,.5);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#fafbfc;background-color:#1b1f23;border-color:#1b1f23;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#2188ff}.octicon-heart{color:#ec6cb9}";

var stringify = function (obj, sep, eq, encodeURIComponent) {
  if (sep == null) {
    sep = '&';
  }
  if (eq == null) {
    eq = '=';
  }
  if (encodeURIComponent == null) {
    encodeURIComponent = window.encodeURIComponent;
  }
  var params = [];
  for (var name in obj) {
    var value = obj[name];
    if (value != null) {
      params.push(encodeURIComponent(name) + eq + encodeURIComponent(value));
    }
  }
  return params.join(sep)
};

var parse = function (str, sep, eq, decodeURIComponent) {
  if (sep == null) {
    sep = '&';
  }
  if (eq == null) {
    eq = '=';
  }
  if (decodeURIComponent == null) {
    decodeURIComponent = window.decodeURIComponent;
  }
  var obj = {};
  var params = str.split(sep);
  for (var i = 0, len = params.length; i < len; i++) {
    var entry = params[i];
    if (entry !== '') {
      var ref = entry.split(eq);
      obj[decodeURIComponent(ref[0])] = (ref[1] != null ? decodeURIComponent(ref.slice(1).join(eq)) : undefined);
    }
  }
  return obj
};

var widgetColorSchemes = {
  light: light,
  dark: dark
};

var getColorSchemeMediaQuery = function (systemColorScheme, widgetColorScheme) {
  return '@media(prefers-color-scheme:' + systemColorScheme + '){' + widgetColorSchemes[hasOwnProperty(widgetColorSchemes, widgetColorScheme) ? widgetColorScheme : systemColorScheme] + '}'
};

var getColorScheme = function (declarations) {
  if (declarations == null) {
    return widgetColorSchemes.light
  }

  var colorSchemes = parse(declarations, ';', ':', function (str) {
    return str.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g, '')
  });

  return widgetColorSchemes[hasOwnProperty(widgetColorSchemes, colorSchemes['no-preference']) ? colorSchemes['no-preference'] : 'light'] +
    getColorSchemeMediaQuery('light', colorSchemes.light) +
    getColorSchemeMediaQuery('dark', colorSchemes.dark)
};

var data = {"mark-github":{"heights":{"16":{"width":16,"path":"<path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z\"></path>"}}},"heart":{"heights":{"16":{"width":16,"path":"<path fill-rule=\"evenodd\" d=\"M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z\"></path>"}}},"eye":{"heights":{"16":{"width":16,"path":"<path fill-rule=\"evenodd\" d=\"M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z\"></path>"}}},"star":{"heights":{"16":{"width":16,"path":"<path fill-rule=\"evenodd\" d=\"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z\"></path>"}}},"repo-forked":{"heights":{"16":{"width":16,"path":"<path fill-rule=\"evenodd\" d=\"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z\"></path>"}}},"repo-template":{"heights":{"16":{"width":16,"path":"<path fill-rule=\"evenodd\" d=\"M6 .75A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.75.75 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM2.75 8a.75.75 0 01.75.75v.268A1.72 1.72 0 013.75 9h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 01-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zm10.5 0a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM6 9.75A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zm-1 2.5v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z\"></path>"}}},"issue-opened":{"heights":{"16":{"width":16,"path":"<path fill-rule=\"evenodd\" d=\"M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z\"></path>"}}},"download":{"heights":{"16":{"width":16,"path":"<path fill-rule=\"evenodd\" d=\"M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z\"></path>"}}}};

var octicon = function (icon, height) {
  icon = ('' + icon).toLowerCase().replace(/^octicon-/, '');
  if (!hasOwnProperty(data, icon)) {
    icon = 'mark-github';
  }

  var defaultHeight = height >= 24 && /* istanbul ignore next */ 24 in data[icon].heights ? /* istanbul ignore next */ 24 : 16;

  var svg = data[icon].heights[defaultHeight];

  return '<svg viewBox="0 0 ' + svg.width + ' ' + defaultHeight + '" width="' + (height * svg.width / defaultHeight) + '" height="' + height + '" class="octicon octicon-' + icon + '" aria-hidden="true">' + svg.path + '</svg>'
};

var queues = {};

var fetch = function (url, func) {
  var queue = queues[url] || (queues[url] = []);
  if (queue.push(func) > 1) {
    return
  }

  var callback = dispatchOnce(function () {
    delete queues[url];
    while ((func = queue.shift())) {
      func.apply(null, arguments);
    }
  });

  if (useXHR) {
    var xhr = new XMLHttpRequest();
    onEvent(xhr, 'abort', callback);
    onEvent(xhr, 'error', callback);
    onEvent(xhr, 'load', function () {
      var data;
      try {
        data = JSON.parse(xhr.responseText);
      } catch (error) {
        callback(error);
        return
      }
      callback(xhr.status !== 200, data);
    });
    xhr.open('GET', url);
    xhr.send();
  } else {
    var contentWindow = this || window;
    contentWindow._ = function (json) {
      contentWindow._ = null;
      callback(json.meta.status !== 200, json.data);
    };
    var script = createElementInDocument(contentWindow.document)('script', {
      async: true,
      src: url + (/\?/.test(url) ? '&' : '?') + 'callback=_'
    });
    var onloadend = /* istanbul ignore next: IE lt 9 */ function () {
      if (contentWindow._) {
        contentWindow._({
          meta: {}
        });
      }
    };
    onEvent(script, 'load', onloadend);
    onEvent(script, 'error', onloadend);
    /* istanbul ignore if: IE lt 9 */
    if (script.readyState) {
      onceReadyStateChange(script, /de|m/, onloadend);
    }
    contentWindow.document.getElementsByTagName('head')[0].appendChild(script);
  }
};

var render = function (root, options, func) {
  var createElement = createElementInDocument(root.ownerDocument);

  var style = root.appendChild(createElement('style', {
    type: 'text/css'
  }));

  var cssText = buttonsCssText + getColorScheme(options['data-color-scheme']);

  /* istanbul ignore if: IE lt 9 */
  if (style.styleSheet) {
    style.styleSheet.cssText = cssText;
  } else {
    style.appendChild(root.ownerDocument.createTextNode(cssText));
  }

  var btn = createElement('a', {
    className: 'btn',
    href: options.href,
    rel: 'noopener',
    target: '_blank',
    title: options.title || undefined,
    'aria-label': options['aria-label'] || undefined,
    innerHTML: octicon(options['data-icon'], /^large$/i.test(options['data-size']) ? 16 : 14)
  }, [
    ' ',
    createElement('span', {}, [options['data-text'] || ''])
  ]);

  var widget = root.appendChild(createElement('div', {
    className: 'widget' + (/^large$/i.test(options['data-size']) ? ' widget-lg' : '')
  }, [
    btn
  ]));

  var hostname = btn.hostname.replace(/\.$/, '');
  if (hostname.length < domain.length || ('.' + hostname).substring(hostname.length - domain.length) !== ('.' + domain)) {
    btn.href = '#';
    btn.target = '_self';
    func(widget);
    return
  }

  var path = (' /' + btn.pathname).split(/\/+/);
  if (((hostname === domain || hostname === 'gist.' + domain) && path[3] === 'archive') ||
    (hostname === domain && path[3] === 'releases' && path[4] === 'download') ||
    (hostname === 'codeload.' + domain)) {
    btn.target = '_top';
  }

  if (!/^true$/i.test(options['data-show-count']) || hostname !== domain) {
    func(widget);
    return
  }

  var href, property;
  if (!path[2] && path[1]) {
    href = property = 'followers';
  } else if (!path[3] && path[2]) {
    property = 'stargazers_count';
    href = 'stargazers';
  } else if (!path[4] && path[3] === 'subscription') {
    property = 'subscribers_count';
    href = 'watchers';
  } else if (!path[4] && path[3] === 'fork') {
    property = 'forks_count';
    href = 'network/members';
  } else if (path[3] === 'issues') {
    property = 'open_issues_count';
    href = 'issues';
  } else {
    func(widget);
    return
  }

  var api = path[2] ? '/repos/' + path[1] + '/' + path[2] : '/users/' + path[1];
  fetch.call(this, apiBaseURL + api, function (error, json) {
    if (!error) {
      var data = json[property];
      widget.appendChild(createElement('a', {
        className: 'social-count',
        href: json.html_url + '/' + href,
        rel: 'noopener',
        target: '_blank',
        'aria-label': data + ' ' + property.replace(/_count$/, '').replace('_', ' ').slice(0, data < 2 ? -1 : undefined) + ' on GitHub'
      }, [
        ('' + data).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      ]));
    }
    func(widget);
  });
};

var devicePixelRatio = window.devicePixelRatio || /* istanbul ignore next */ 1;

var ceilPixel = function (px) {
  return (devicePixelRatio > 1 ? Math.ceil(Math.round(px * devicePixelRatio) / devicePixelRatio * 2) / 2 : Math.ceil(px)) || 0
};

var get = function (el) {
  var width = el.offsetWidth;
  var height = el.offsetHeight;
  if (el.getBoundingClientRect) {
    var boundingClientRect = el.getBoundingClientRect();
    width = Math.max(width, ceilPixel(boundingClientRect.width));
    height = Math.max(height, ceilPixel(boundingClientRect.height));
  }
  return [width, height]
};

var set = function (el, size) {
  el.style.width = size[0] + 'px';
  el.style.height = size[1] + 'px';
};

var render$1 = function (options, func) {
  if (options == null || func == null) {
    return
  }
  if (options.getAttribute) {
    options = parseOptions(options);
  }
  if (useShadowDOM) {
    var host = createElement('span');
    render(host.attachShadow({ mode:  'closed' }), options, function () {
      func(host);
    });
  } else {
    var iframe = createElement('iframe', {
      src: 'javascript:0',
      title: options.title || undefined,
      allowtransparency: true,
      scrolling: 'no',
      frameBorder: 0
    });
    set(iframe, [0, 0]);
    iframe.style.border = 'none';
    var callback = function () {
      var contentWindow = iframe.contentWindow;
      var body;
      try {
        body = contentWindow.document.body;
      } catch (_) /* istanbul ignore next: IE 11 */ {
        document.body.appendChild(iframe.parentNode.removeChild(iframe));
        return
      }
      offEvent(iframe, 'load', callback);
      render.call(contentWindow, body, options, function (widget) {
        var size = get(widget);
        iframe.parentNode.removeChild(iframe);
        onceEvent(iframe, 'load', function () {
          set(iframe, size);
        });
        iframe.src = iframeURL + '#' + (iframe.name = stringify(options));
        func(iframe);
      });
    };
    onEvent(iframe, 'load', callback);
    document.body.appendChild(iframe);
  }
};




/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
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


/***/ }),

/***/ "./node_modules/minimatch/minimatch.js":
/*!*********************************************!*\
  !*** ./node_modules/minimatch/minimatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = minimatch
minimatch.Minimatch = Minimatch

var path = { sep: '/' }
try {
  path = __webpack_require__(/*! path */ "path")
} catch (er) {}

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
var expand = __webpack_require__(/*! brace-expansion */ "./node_modules/brace-expansion/index.js")

var plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
}

// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]'

// * => any number of characters
var star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!')

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split('').reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  a = a || {}
  b = b || {}
  var t = {}
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return minimatch

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig.minimatch(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return Minimatch
  return minimatch.defaults(def).Minimatch
}

function minimatch (p, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  // "" only matches ""
  if (pattern.trim() === '') return p === ''

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options)
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}
  pattern = pattern.trim()

  // windows support: need to use /, not \
  if (path.sep !== '/') {
    pattern = pattern.split(path.sep).join('/')
  }

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function () {}

Minimatch.prototype.make = make
function make () {
  // don't do it more than once.
  if (this._made) return

  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = console.error

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return s.indexOf(false) === -1
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
  var negate = false
  var options = this.options
  var negateOffset = 0

  if (options.nonegate) return

  for (var i = 0, l = pattern.length
    ; i < l && pattern.charAt(i) === '!'
    ; i++) {
    negate = !negate
    negateOffset++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return braceExpand(pattern, options)
}

Minimatch.prototype.braceExpand = braceExpand

function braceExpand (pattern, options) {
  if (!options) {
    if (this instanceof Minimatch) {
      options = this.options
    } else {
      options = {}
    }
  }

  pattern = typeof pattern === 'undefined'
    ? this.pattern : pattern

  if (typeof pattern === 'undefined') {
    throw new TypeError('undefined pattern')
  }

  if (options.nobrace ||
    !pattern.match(/\{.*\}/)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  if (pattern.length > 1024 * 64) {
    throw new TypeError('pattern is too long')
  }

  var options = this.options

  // shortcuts
  if (!options.noglobstar && pattern === '**') return GLOBSTAR
  if (pattern === '') return ''

  var re = ''
  var hasMagic = !!options.nocase
  var escaping = false
  // ? => one single character
  var patternListStack = []
  var negativeLists = []
  var stateChar
  var inClass = false
  var reClassStart = -1
  var classStart = -1
  // . and .. never match anything that doesn't start with .,
  // even when options.dot is set.
  var patternStart = pattern.charAt(0) === '.' ? '' // anything
  // not (start or / followed by . or .. followed by / or end)
  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
  : '(?!\\.)'
  var self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case '*':
          re += star
          hasMagic = true
        break
        case '?':
          re += qmark
          hasMagic = true
        break
        default:
          re += '\\' + stateChar
        break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for (var i = 0, len = pattern.length, c
    ; (i < len) && (c = pattern.charAt(i))
    ; i++) {
    this.debug('%s\t%s %s %j', pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += '\\' + c
      escaping = false
      continue
    }

    switch (c) {
      case '/':
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false

      case '\\':
        clearStateChar()
        escaping = true
      continue

      // the various stateChar values
      // for the "extglob" stuff.
      case '?':
      case '*':
      case '+':
      case '@':
      case '!':
        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === '!' && i === classStart + 1) c = '^'
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
      continue

      case '(':
        if (inClass) {
          re += '('
          continue
        }

        if (!stateChar) {
          re += '\\('
          continue
        }

        patternListStack.push({
          type: stateChar,
          start: i - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
      continue

      case ')':
        if (inClass || !patternListStack.length) {
          re += '\\)'
          continue
        }

        clearStateChar()
        hasMagic = true
        var pl = patternListStack.pop()
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        re += pl.close
        if (pl.type === '!') {
          negativeLists.push(pl)
        }
        pl.reEnd = re.length
      continue

      case '|':
        if (inClass || !patternListStack.length || escaping) {
          re += '\\|'
          escaping = false
          continue
        }

        clearStateChar()
        re += '|'
      continue

      // these are mostly the same in regexp and glob
      case '[':
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += '\\' + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
      continue

      case ']':
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += '\\' + c
          escaping = false
          continue
        }

        // handle the case where we left a class open.
        // "[z-a]" is valid, equivalent to "\[z-a\]"
        if (inClass) {
          // split where the last [ was, make sure we don't have
          // an invalid re. if so, re-walk the contents of the
          // would-be class to re-translate any characters that
          // were passed through as-is
          // TODO: It would probably be faster to determine this
          // without a try/catch and a new RegExp, but it's tricky
          // to do safely.  For now, this is safe and works.
          var cs = pattern.substring(classStart + 1, i)
          try {
            RegExp('[' + cs + ']')
          } catch (er) {
            // not a valid class!
            var sp = this.parse(cs, SUBPARSE)
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
            hasMagic = hasMagic || sp[1]
            inClass = false
            continue
          }
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
      continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
          && !(c === '^' && inClass)) {
          re += '\\'
        }

        re += c

    } // switch
  } // for

  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    cs = pattern.substr(classStart + 1)
    sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + '\\[' + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length)
    this.debug('setting tail', re, pl)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = '\\'
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + '|'
    })

    this.debug('tail=%j\n   %s', tail, tail, pl, re)
    var t = pl.type === '*' ? star
      : pl.type === '?' ? qmark
      : '\\' + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart) + t + '\\(' + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += '\\\\'
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case '.':
    case '[':
    case '(': addPatternStart = true
  }

  // Hack to work around lack of negative lookbehind in JS
  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
  // like 'a.xyz.yz' doesn't match.  So, the first negative
  // lookahead, has to look ALL the way ahead, to the end of
  // the pattern.
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n]

    var nlBefore = re.slice(0, nl.reStart)
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
    var nlAfter = re.slice(nl.reEnd)

    nlLast += nlAfter

    // Handle nested stuff like *(*.js|!(*.json)), where open parens
    // mean that we should *not* include the ) in the bit that is considered
    // "after" the negated section.
    var openParensBefore = nlBefore.split('(').length - 1
    var cleanAfter = nlAfter
    for (i = 0; i < openParensBefore; i++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
    }
    nlAfter = cleanAfter

    var dollar = ''
    if (nlAfter === '' && isSub !== SUBPARSE) {
      dollar = '$'
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
    re = newRe
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== '' && hasMagic) {
    re = '(?=.)' + re
  }

  if (addPatternStart) {
    re = patternStart + re
  }

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [re, hasMagic]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? 'i' : ''
  try {
    var regExp = new RegExp('^' + re + '$', flags)
  } catch (er) {
    // If it was an invalid regular expression, then it can't match
    // anything.  This trick looks for a character after the end of
    // the string, which is of course impossible, except in multi-line
    // mode, but it's not a /m regex.
    return new RegExp('$.')
  }

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) {
    this.regexp = false
    return this.regexp
  }
  var options = this.options

  var twoStar = options.noglobstar ? star
    : options.dot ? twoStarDot
    : twoStarNoDot
  var flags = options.nocase ? 'i' : ''

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
      : (typeof p === 'string') ? regExpEscape(p)
      : p._src
    }).join('\\\/')
  }).join('|')

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = '^(?:' + re + ')$'

  // can match anything, as long as it's not this.
  if (this.negate) re = '^(?!' + re + ').*$'

  try {
    this.regexp = new RegExp(re, flags)
  } catch (ex) {
    this.regexp = false
  }
  return this.regexp
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = match
function match (f, partial) {
  this.debug('match', f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ''

  if (f === '/' && partial) return true

  var options = this.options

  // windows: need to use /, not \
  if (path.sep !== '/') {
    f = f.split(path.sep).join('/')
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, 'split', f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, 'set', set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename
  var i
  for (i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (i = 0; i < set.length; i++) {
    var pattern = set[i]
    var file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug('matchOne',
    { 'this': this, file: file, pattern: pattern })

  this.debug('matchOne', file.length, pattern.length)

  for (var fi = 0,
      pi = 0,
      fl = file.length,
      pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi++, pi++) {
    this.debug('matchOne loop')
    var p = pattern[pi]
    var f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
      var pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for (; fi < fl; fi++) {
          if (file[fi] === '.' || file[fi] === '..' ||
            (!options.dot && file[fi].charAt(0) === '.')) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === '.' || swallowee === '..' ||
            (!options.dot && swallowee.charAt(0) === '.')) {
            this.debug('dot detected!', file, fr, pattern, pr)
            break
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr++
        }
      }

      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      if (partial) {
        // ran out of file
        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === 'string') {
      if (options.nocase) {
        hit = f.toLowerCase() === p.toLowerCase()
      } else {
        hit = f === p
      }
      this.debug('string match', p, f, hit)
    } else {
      hit = f.match(p)
      this.debug('pattern match', p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    var emptyFileEnd = (fi === fl - 1) && (file[fi] === '')
    return emptyFileEnd
  }

  // should be unreachable.
  throw new Error('wtf?')
}

// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, '$1')
}

function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/pify/index.js":
/*!************************************!*\
  !*** ./node_modules/pify/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const processFn = (fn, opts) => function () {
	const P = opts.promiseModule;
	const args = new Array(arguments.length);

	for (let i = 0; i < arguments.length; i++) {
		args[i] = arguments[i];
	}

	return new P((resolve, reject) => {
		if (opts.errorFirst) {
			args.push(function (err, result) {
				if (opts.multiArgs) {
					const results = new Array(arguments.length - 1);

					for (let i = 1; i < arguments.length; i++) {
						results[i - 1] = arguments[i];
					}

					if (err) {
						results.unshift(err);
						reject(results);
					} else {
						resolve(results);
					}
				} else if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		} else {
			args.push(function (result) {
				if (opts.multiArgs) {
					const results = new Array(arguments.length - 1);

					for (let i = 0; i < arguments.length; i++) {
						results[i] = arguments[i];
					}

					resolve(results);
				} else {
					resolve(result);
				}
			});
		}

		fn.apply(this, args);
	});
};

module.exports = (obj, opts) => {
	opts = Object.assign({
		exclude: [/.+(Sync|Stream)$/],
		errorFirst: true,
		promiseModule: Promise
	}, opts);

	const filter = key => {
		const match = pattern => typeof pattern === 'string' ? key === pattern : pattern.test(key);
		return opts.include ? opts.include.some(match) : !opts.exclude.some(match);
	};

	let ret;
	if (typeof obj === 'function') {
		ret = function () {
			if (opts.excludeMain) {
				return obj.apply(this, arguments);
			}

			return processFn(obj, opts).apply(this, arguments);
		};
	} else {
		ret = Object.create(Object.getPrototypeOf(obj));
	}

	for (const key in obj) { // eslint-disable-line guard-for-in
		const x = obj[key];
		ret[key] = typeof x === 'function' && filter(key) ? processFn(x, opts) : x;
	}

	return ret;
};


/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
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
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-github-btn/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-github-btn/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class GitHubButton extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor (props) {
    super(props)
    this.$ = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()
    this._ = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()
  }
  render () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', { ref: this.$ }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('a', { ...this.props, ref: this._ }, this.props.children))
  }
  componentDidMount () {
    this.paint()
  }
  getSnapshotBeforeUpdate () {
    this.reset()
    return null
  }
  componentDidUpdate () {
    this.paint()
  }
  componentWillUnmount () {
    this.reset()
  }
  paint () {
    const _ = this.$.current.appendChild(document.createElement('span'))
    Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(null, /*! github-buttons */ "./node_modules/github-buttons/dist/buttons.esm.js")).then(({ render }) => {
      render(_.appendChild(this._.current), function (el) {
        try {
          _.parentNode.replaceChild(el, _)
        } catch (_) {}
      })
    })
  }
  reset () {
    this.$.current.replaceChild(this._.current, this.$.current.lastChild)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (GitHubButton);


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function (a) {
    return a;
  };
}


/***/ }),

/***/ "./node_modules/react-proptype-conditional-require/dist/isRequiredIf.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-proptype-conditional-require/dist/isRequiredIf.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var VALIDATOR_ARG_ERROR_MESSAGE='The typeValidator argument must be a function with the signature function(props, propName, componentName).',MESSAGE_ARG_ERROR_MESSAGE='The error message is optional, but must be a string if provided.',propIsRequired=function propIsRequired(a,b,c,d){if('boolean'==typeof a)return a;return'function'==typeof a?a(b,c,d):!(!0!==!!a)&&!!a},propExists=function propExists(a,b){return Object.hasOwnProperty.call(a,b)},missingPropError=function missingPropError(a,b,c,d){return d?new Error(d):new Error('Required '+a[b]+' `'+b+'`'+(' was not specified in `'+c+'`.'))},guardAgainstInvalidArgTypes=function guardAgainstInvalidArgTypes(a,b){if('function'!=typeof a)throw new TypeError(VALIDATOR_ARG_ERROR_MESSAGE);if(!!b&&'string'!=typeof b)throw new TypeError(MESSAGE_ARG_ERROR_MESSAGE)},isRequiredIf=function isRequiredIf(a,b,c){return guardAgainstInvalidArgTypes(a,c),function(d,e,f){for(var _len=arguments.length,g=Array(3<_len?_len-3:0),_key=3;_key<_len;_key++)g[_key-3]=arguments[_key];return propIsRequired(b,d,e,f)?propExists(d,e)?a.apply(void 0,[d,e,f].concat(g)):missingPropError(d,e,f,c):a.apply(void 0,[d,e,f].concat(g));// Is not required, so just run typeValidator.
}};exports.default=isRequiredIf;

//# sourceMappingURL=isRequiredIf.js.map

/***/ }),

/***/ "./node_modules/react-slideshow-image/dist/react-slideshow-image.min.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-slideshow-image/dist/react-slideshow-image.min.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! react */ "react")):undefined}(window,(function(t){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=17)}([function(t,e,n){t.exports=n(9)()},function(e,n){e.exports=t},function(t,e,n){"use strict";(function(t){var n=function(){this._tweens={},this._tweensAddedDuringUpdate={}};n.prototype={getAll:function(){return Object.keys(this._tweens).map(function(t){return this._tweens[t]}.bind(this))},removeAll:function(){this._tweens={}},add:function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},remove:function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},update:function(t,e){var n=Object.keys(this._tweens);if(0===n.length)return!1;for(t=void 0!==t?t:r.now();n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var o=this._tweens[n[i]];o&&!1===o.update(t)&&(o._isPlaying=!1,e||delete this._tweens[n[i]])}n=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var i,r=new n;r.Group=n,r._nextId=0,r.nextId=function(){return r._nextId++},"undefined"==typeof self&&void 0!==t&&t.hrtime?r.now=function(){var e=t.hrtime();return 1e3*e[0]+e[1]/1e6}:"undefined"!=typeof self&&void 0!==self.performance&&void 0!==self.performance.now?r.now=self.performance.now.bind(self.performance):void 0!==Date.now?r.now=Date.now:r.now=function(){return(new Date).getTime()},r.Tween=function(t,e){this._object=t,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=r.Easing.Linear.None,this._interpolationFunction=r.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onRepeatCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=e||r,this._id=r.nextId()},r.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},to:function(t,e){return this._valuesEnd=Object.create(t),void 0!==e&&(this._duration=e),this},duration:function(t){return this._duration=t,this},start:function(t){for(var e in this._group.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=void 0!==t?"string"==typeof t?r.now()+parseFloat(t):t:r.now(),this._startTime+=this._delayTime,this._valuesEnd){if(this._valuesEnd[e]instanceof Array){if(0===this._valuesEnd[e].length)continue;this._valuesEnd[e]=[this._object[e]].concat(this._valuesEnd[e])}void 0!==this._object[e]&&(this._valuesStart[e]=this._object[e],this._valuesStart[e]instanceof Array==!1&&(this._valuesStart[e]*=1),this._valuesStartRepeat[e]=this._valuesStart[e]||0)}return this},stop:function(){return this._isPlaying?(this._group.remove(this),this._isPlaying=!1,null!==this._onStopCallback&&this._onStopCallback(this._object),this.stopChainedTweens(),this):this},end:function(){return this.update(1/0),this},stopChainedTweens:function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop()},group:function(t){return this._group=t,this},delay:function(t){return this._delayTime=t,this},repeat:function(t){return this._repeat=t,this},repeatDelay:function(t){return this._repeatDelayTime=t,this},yoyo:function(t){return this._yoyo=t,this},easing:function(t){return this._easingFunction=t,this},interpolation:function(t){return this._interpolationFunction=t,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(t){return this._onStartCallback=t,this},onUpdate:function(t){return this._onUpdateCallback=t,this},onRepeat:function(t){return this._onRepeatCallback=t,this},onComplete:function(t){return this._onCompleteCallback=t,this},onStop:function(t){return this._onStopCallback=t,this},update:function(t){var e,n,i;if(t<this._startTime)return!0;for(e in!1===this._onStartCallbackFired&&(null!==this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),n=(t-this._startTime)/this._duration,n=0===this._duration||n>1?1:n,i=this._easingFunction(n),this._valuesEnd)if(void 0!==this._valuesStart[e]){var r=this._valuesStart[e]||0,o=this._valuesEnd[e];o instanceof Array?this._object[e]=this._interpolationFunction(o,i):("string"==typeof o&&(o="+"===o.charAt(0)||"-"===o.charAt(0)?r+parseFloat(o):parseFloat(o)),"number"==typeof o&&(this._object[e]=r+(o-r)*i))}if(null!==this._onUpdateCallback&&this._onUpdateCallback(this._object,n),1===n){if(this._repeat>0){for(e in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if("string"==typeof this._valuesEnd[e]&&(this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(this._valuesEnd[e])),this._yoyo){var a=this._valuesStartRepeat[e];this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=a}this._valuesStart[e]=this._valuesStartRepeat[e]}return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,null!==this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}null!==this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var s=0,u=this._chainedTweens.length;s<u;s++)this._chainedTweens[s].start(this._startTime+this._duration);return!1}return!0}},r.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-r.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*r.Easing.Bounce.In(2*t):.5*r.Easing.Bounce.Out(2*t-1)+.5}}},r.Interpolation={Linear:function(t,e){var n=t.length-1,i=n*e,o=Math.floor(i),a=r.Interpolation.Utils.Linear;return e<0?a(t[0],t[1],i):e>1?a(t[n],t[n-1],n-i):a(t[o],t[o+1>n?n:o+1],i-o)},Bezier:function(t,e){for(var n=0,i=t.length-1,o=Math.pow,a=r.Interpolation.Utils.Bernstein,s=0;s<=i;s++)n+=o(1-e,i-s)*o(e,s)*t[s]*a(i,s);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,o=Math.floor(i),a=r.Interpolation.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(o=Math.floor(i=n*(1+e))),a(t[(o-1+n)%n],t[o],t[(o+1)%n],t[(o+2)%n],i-o)):e<0?t[0]-(a(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(a(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):a(t[o?o-1:0],t[o],t[n<o+1?n:o+1],t[n<o+2?n:o+2],i-o)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=r.Interpolation.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:(i=[1],function(t){var e=1;if(i[t])return i[t];for(var n=t;n>1;n--)e*=n;return i[t]=e,e}),CatmullRom:function(t,e,n,i,r){var o=.5*(n-t),a=.5*(i-e),s=r*r;return(2*e-2*n+o+a)*(r*s)+(-3*e+3*n-2*o-a)*s+o*r+e}}},e.a=r}).call(this,n(8))},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),o=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot).concat(t," */")}));return[n].concat(o).concat([r]).join("\n")}var a,s,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){var i,r,o={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),s=function(t){return document.querySelector(t)},u=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=s.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),l=null,c=0,h=[],p=n(7);function d(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=o[i.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](i.parts[a]);for(;a<i.parts.length;a++)r.parts.push(b(i.parts[a],e))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(b(i.parts[a],e));o[i.id]={id:i.id,refs:1,parts:s}}}}function f(t,e){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}function v(t,e){var n=u(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=h[h.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),h.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=u(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,r)}}function y(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=h.indexOf(t);e>=0&&h.splice(e,1)}function m(t){var e=document.createElement("style");return t.attrs.type="text/css",w(e,t.attrs),v(t,e),e}function w(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function b(t,e){var n,i,r,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var a=c++;n=l||(l=m(e)),i=x.bind(null,n,a,!1),r=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",w(e,t.attrs),v(t,e),e}(e),i=k.bind(null,n,e),r=function(){y(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),i=T.bind(null,n),r=function(){y(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return d(n,e),function(t){for(var i=[],r=0;r<n.length;r++){var a=n[r];(s=o[a.id]).refs--,i.push(s)}t&&d(f(t,e),e);for(r=0;r<i.length;r++){var s;if(0===(s=i[r]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete o[s.id]}}}};var g,_=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function x(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=_(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function T(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function k(t,e,n){var i=n.css,r=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=p(i)),r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".react-slideshow-container {\n  display: flex;\n  align-items: center;\n}\n\n.react-slideshow-container .nav {\n  height: 30px;\n  background: rgba(255, 255, 255, 0.6);\n  width: 30px;\n  z-index: 10;\n  text-align: center;\n  cursor: pointer;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.react-slideshow-container .nav span {\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-color: #000;\n  border-style: solid;\n  transform: rotate(45deg);\n}\n\n.react-slideshow-container .nav.disabled span {\n  border-color: #666;\n}\n\n.react-slideshow-container .nav:hover {\n  background: white;\n  color: #666;\n}\n\n.react-slideshow-container .nav.disabled:hover {\n  cursor: not-allowed;\n}\n\n.react-slideshow-container .nav:first-of-type {\n  margin-right: -30px;\n  border-right: none;\n  border-top: none;\n}\n\n.react-slideshow-container .nav:first-of-type span {\n  margin-left: 5px;\n  border-right: none;\n  border-top: none;\n}\n\n.react-slideshow-container .nav:last-of-type {\n  margin-left: -30px;\n}\n\n.react-slideshow-container .nav:last-of-type span {\n  margin-right: 5px;\n  border-left: none;\n  border-bottom: none;\n}\n\n.react-slideshow-container + div.indicators {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.react-slideshow-container + div.indicators > .each-slideshow-indicator {\n  width: 7px;\n  height: 7px;\n  margin: 0 5px 10px;\n  border-radius: 50%;\n  background: #ccc;\n  cursor: pointer;\n}\n\n.react-slideshow-container + div.indicators > .each-slideshow-indicator:hover {\n  background: #666;\n}\n\n.react-slideshow-container + div.indicators > .each-slideshow-indicator.active {\n  background: #000;\n}\n",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var r,o=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}},function(t,e){var n,i,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(t){i=a}}();var u,l=[],c=!1,h=-1;function p(){c&&u&&(c=!1,u.length?l=u.concat(l):h=-1,l.length&&d())}function d(){if(!c){var t=s(p);c=!0;for(var e=l.length;e;){for(u=l,l=[];++h<e;)u&&u[h].run();h=-1,e=l.length}u=null,c=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function v(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new f(t,e)),1!==l.length||c||s(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(t,e,n){"use strict";var i=n(10);function r(){}function o(){}o.resetWarningCache=r,t.exports=function(){function t(t,e,n,r,o,a){if(a!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){var i=n(12);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".react-slideshow-wrapper.slide {\n  width: 100%;\n  overflow: hidden;\n}\n\n.react-slideshow-wrapper .images-wrap {\n  display: flex;\n  flex-wrap: wrap;\n}\n",""])},function(t,e,n){var i=n(14);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".react-slideshow-fade-wrapper {\n  width: 100%;\n  overflow: hidden;\n}\n\n.react-slideshow-fade-wrapper .react-slideshow-fade-images-wrap {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.react-slideshow-fade-wrapper .react-slideshow-fade-images-wrap > div {\n  position: relative;\n  opacity: 0;\n}\n",""])},function(t,e,n){var i=n(16);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".react-slideshow-zoom-wrapper {\n  width: 100%;\n  overflow: hidden;\n}\n\n.react-slideshow-zoom-wrapper .zoom-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  overflow: hidden;\n}\n\n.react-slideshow-zoom-wrapper .zoom-wrapper > div {\n  position: relative;\n  display: flex;\n}\n",""])},function(t,e,n){"use strict";n.r(e);n(5);var i=n(1),r=n.n(i),o=n(2),a=n(0),s=n.n(a);function u(t,e){var n=Object.keys(t);return Object.keys(e).reduce((function(t,i){return-1===n.indexOf(i)&&(t[i]=e[i]),t}),{})}n(11);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=function(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?p(t):e}(this,h(e).call(this,t))).state={index:t.defaultIndex&&t.defaultIndex<t.children.length?t.defaultIndex:0},n.width=0,n.imageContainer=null,n.wrapper=null,n.timeout=null,n.moveSlides=n.moveSlides.bind(p(n)),n.pauseSlides=n.pauseSlides.bind(p(n)),n.startSlides=n.startSlides.bind(p(n)),n.resizeListener=n.resizeListener.bind(p(n)),n.goToSlide=n.goToSlide.bind(p(n)),n.tweenGroup=new o.a.Group,n}var n,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,t),n=e,(i=[{key:"componentDidMount",value:function(){var t=this;this.setWidth(),window.addEventListener("resize",this.resizeListener);var e=this.props,n=e.autoplay,i=e.duration;n&&(this.timeout=setTimeout((function(){return t.goNext()}),i))}},{key:"componentWillUnmount",value:function(){this.willUnmount=!0,clearTimeout(this.timeout),window.removeEventListener("resize",this.resizeListener)}},{key:"setWidth",value:function(){this.allImages=Array.prototype.slice.call(this.wrapper.querySelectorAll(".images-wrap > div"),0),this.width=this.wrapper.clientWidth;var t=this.width*(this.props.children.length+2);this.imageContainer.style.width="".concat(t,"px"),this.imageContainer.style.transform="translate(-".concat(this.width*(this.state.index+1),"px)"),this.applySlideStyle()}},{key:"componentDidUpdate",value:function(t){var e=this;this.props.autoplay!==t.autoplay&&(this.props.autoplay?this.timeout=setTimeout((function(){return e.goNext()}),this.props.duration):clearTimeout(this.timeout)),this.props.children.length!=t.children.length&&this.setWidth()}},{key:"resizeListener",value:function(){this.setWidth()}},{key:"applySlideStyle",value:function(){var t=this;this.allImages.forEach((function(e,n){e.style.width="".concat(t.width,"px")}))}},{key:"pauseSlides",value:function(){this.props.pauseOnHover&&clearTimeout(this.timeout)}},{key:"startSlides",value:function(){var t=this,e=this.props,n=e.pauseOnHover,i=e.autoplay;n&&i&&(this.timeout=setTimeout((function(){return t.goNext()}),this.props.duration))}},{key:"moveSlides",value:function(t){"next"===t.currentTarget.dataset.type?this.goNext():this.goBack()}},{key:"goToSlide",value:function(t){var e=t.currentTarget;this.goTo(parseInt(e.dataset.key))}},{key:"goTo",value:function(t){this.slideImages(t)}},{key:"goNext",value:function(){var t=this.state.index,e=this.props,n=e.children;(e.infinite||t!==n.length-1)&&this.slideImages(t+1)}},{key:"goBack",value:function(){var t=this.state.index;(this.props.infinite||0!==t)&&this.slideImages(t-1)}},{key:"showIndicators",value:function(){var t=this,e="boolean"!=typeof this.props.indicators,n=!e&&"each-slideshow-indicator";return r.a.createElement("div",{className:"indicators"},this.props.children.map((function(i,o){return r.a.createElement("div",{key:o,"data-key":o,className:"".concat(n," ").concat(t.state.index===o&&"active"),onClick:t.goToSlide},e&&t.props.indicators(o))})))}},{key:"showPreviousArrow",value:function(){var t=this.props,e=t.arrows,n=t.prevArrow,i=t.infinite,o="";return n||(o="nav ".concat(this.state.index<=0&&!i&&"disabled")),e&&r.a.createElement("div",{className:o,"data-type":"prev",onClick:this.moveSlides},n||r.a.createElement("span",null))}},{key:"showNextArrow",value:function(){var t=this.props,e=t.arrows,n=t.nextArrow,i=t.infinite,o=t.children,a="";return n||(a="nav ".concat(this.state.index===o.length-1&&!i&&"disabled")),e&&r.a.createElement("div",{className:a,"data-type":"next",onClick:this.moveSlides},n||r.a.createElement("span",null))}},{key:"render",value:function(){var t=this,n=this.props,i=n.children,o=(n.infinite,n.indicators),a=(n.arrows,u(e.propTypes,this.props)),s=this.state.index,l={transform:"translate(-".concat((s+1)*this.width,"px)")};return r.a.createElement("div",a,r.a.createElement("div",{className:"react-slideshow-container",onMouseEnter:this.pauseSlides,onMouseLeave:this.startSlides},this.showPreviousArrow(),r.a.createElement("div",{className:"react-slideshow-wrapper slide",ref:function(e){return t.wrapper=e}},r.a.createElement("div",{className:"images-wrap",style:l,ref:function(e){return t.imageContainer=e}},r.a.createElement("div",{"data-index":"-1"},i[i.length-1]),i.map((function(t,e){return r.a.createElement("div",{"data-index":e,key:e,className:e===s?"active":""},t)})),r.a.createElement("div",{"data-index":"-1"},i[0]))),this.showNextArrow()),o&&this.showIndicators())}},{key:"slideImages",value:function(t){var e=this,n=this.props,i=n.children,r=n.transitionDuration,a=n.autoplay,s=n.infinite,u=n.duration,l=n.onChange;if(!this.tweenGroup.getAll().length){clearTimeout(this.timeout);var c={margin:-this.width*(this.state.index+1)},h=new o.a.Tween(c,this.tweenGroup).to({margin:-this.width*(t+1)},r).onUpdate((function(t){e.imageContainer.style.transform="translate(".concat(t.margin,"px)")})).start();!function t(){e.willUnmount?e.tweenGroup.removeAll():(requestAnimationFrame(t),e.tweenGroup.update())}(),h.onComplete((function(){var n=t<0?i.length-1:t>=i.length?0:t;e.willUnmount||("function"==typeof l&&l(e.state.index,n),e.setState({index:n},(function(){a&&(s||e.state.index<i.length)&&(e.timeout=setTimeout((function(){return e.goNext()}),u))})))}))}}}])&&c(n.prototype,i),a&&c(n,a),e}(i.Component);f.defaultProps={duration:5e3,transitionDuration:1e3,defaultIndex:0,infinite:!0,autoplay:!0,indicators:!1,arrows:!0,pauseOnHover:!1},f.propTypes={duration:s.a.number,transitionDuration:s.a.number,defaultIndex:s.a.number,infinite:s.a.bool,indicators:s.a.oneOfType([s.a.bool,s.a.func]),autoplay:s.a.bool,arrows:s.a.bool,onChange:s.a.func,pauseOnHover:s.a.bool,prevArrow:s.a.oneOfType([s.a.object,s.a.func]),nextArrow:s.a.oneOfType([s.a.object,s.a.func])};var v=f;n(13);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var _=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=function(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?b(t):e}(this,w(e).call(this,t))).state={index:t.defaultIndex&&t.defaultIndex<t.children.length?t.defaultIndex:0},n.width=0,n.timeout=null,n.divsContainer=null,n.wrapper=null,n.setWidth=n.setWidth.bind(b(n)),n.resizeListener=n.resizeListener.bind(b(n)),n.navigate=n.navigate.bind(b(n)),n.preFade=n.preFade.bind(b(n)),n.pauseSlides=n.pauseSlides.bind(b(n)),n.startSlides=n.startSlides.bind(b(n)),n.tweenGroup=new o.a.Group,n}var n,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,t),n=e,(i=[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeListener),this.setWidth(),this.play()}},{key:"play",value:function(){var t=this,e=this.props,n=e.autoplay,i=e.children,r=this.state.index;n&&i.length>1&&(clearTimeout(this.timeout),this.timeout=setTimeout((function(){return t.fadeImages(r+1)}),this.props.duration))}},{key:"componentDidUpdate",value:function(t){this.props.autoplay!==t.autoplay&&(this.props.autoplay?this.play():clearTimeout(this.timeout)),this.props.children.length!=t.children.length&&(this.applyStyle(),this.play())}},{key:"componentWillUnmount",value:function(){this.willUnmount=!0,clearTimeout(this.timeout),window.removeEventListener("resize",this.resizeListener)}},{key:"setWidth",value:function(){this.width=this.wrapper.clientWidth,this.applyStyle()}},{key:"resizeListener",value:function(){this.setWidth()}},{key:"applyStyle",value:function(){var t=this.width*this.props.children.length;this.divsContainer.style.width="".concat(t,"px");for(var e=0;e<this.divsContainer.children.length;e++){var n=this.divsContainer.children[e];n&&(n.style.width="".concat(this.width,"px"),n.style.left="".concat(e*-this.width,"px"))}}},{key:"pauseSlides",value:function(){this.props.pauseOnHover&&clearTimeout(this.timeout)}},{key:"startSlides",value:function(){var t=this,e=this.props,n=e.pauseOnHover,i=e.autoplay;n&&i&&(this.timeout=setTimeout((function(){return t.goNext()}),this.props.duration))}},{key:"goNext",value:function(){var t=this.state.index,e=this.props,n=e.children;(e.infinite||t!==n.length-1)&&this.fadeImages((t+1)%n.length)}},{key:"goBack",value:function(){var t=this.state.index,e=this.props,n=e.children;(e.infinite||0!==t)&&this.fadeImages(0===t?n.length-1:t-1)}},{key:"navigate",value:function(t){var e=t.currentTarget.dataset;e.key!=this.state.index&&this.goTo(parseInt(e.key))}},{key:"goTo",value:function(t){this.fadeImages(t)}},{key:"preFade",value:function(t){"prev"===t.currentTarget.dataset.type?this.goBack():this.goNext()}},{key:"showIndicators",value:function(){var t=this,e="boolean"!=typeof this.props.indicators,n=!e&&"each-slideshow-indicator";return r.a.createElement("div",{className:"indicators"},this.props.children.map((function(i,o){return r.a.createElement("div",{key:o,"data-key":o,className:"".concat(n," ").concat(t.state.index===o&&"active"),onClick:t.navigate},e&&t.props.indicators(o))})))}},{key:"showPreviousArrow",value:function(){var t=this.props,e=t.arrows,n=t.prevArrow,i=t.infinite,o="";return n||(o="nav ".concat(this.state.index<=0&&!i&&"disabled")),e&&r.a.createElement("div",{className:o,"data-type":"prev",onClick:this.preFade},n||r.a.createElement("span",null))}},{key:"showNextArrow",value:function(){var t=this.props,e=t.arrows,n=t.nextArrow,i=t.infinite,o=t.children,a="";return n||(a="nav ".concat(this.state.index===o.length-1&&!i&&"disabled")),e&&r.a.createElement("div",{className:a,"data-type":"next",onClick:this.preFade},n||r.a.createElement("span",null))}},{key:"render",value:function(){var t=this,n=this.props,i=n.indicators,o=n.children,a=this.state.index,s=u(e.propTypes,this.props);return r.a.createElement("div",s,r.a.createElement("div",{className:"react-slideshow-container",onMouseEnter:this.pauseSlides,onMouseLeave:this.startSlides},this.showPreviousArrow(),r.a.createElement("div",{className:"react-slideshow-fade-wrapper",ref:function(e){return t.wrapper=e}},r.a.createElement("div",{className:"react-slideshow-fade-images-wrap",ref:function(e){return t.divsContainer=e}},o.map((function(t,e){return r.a.createElement("div",{style:{opacity:e===a?"1":"0",zIndex:e===a?"1":"0"},"data-index":e,key:e},t)})))),this.showNextArrow()),i&&this.showIndicators())}},{key:"fadeImages",value:function(t){var e=this,n=this.state.index,i=this.props,r=i.autoplay,a=i.children,s=i.infinite,u=i.duration,l=i.transitionDuration,c=i.onChange;this.tweenGroup.getAll().length||(this.divsContainer.children[t]||(t=0),clearTimeout(this.timeout),function t(){e.willUnmount?e.tweenGroup.removeAll():(requestAnimationFrame(t),e.tweenGroup.update())}(),new o.a.Tween({opacity:0},this.tweenGroup).to({opacity:1},l).onUpdate((function(i){e.divsContainer.children[t].style.opacity=i.opacity,e.divsContainer.children[n].style.opacity=1-i.opacity})).start().onComplete((function(){e.willUnmount||(e.setState({index:t}),"function"==typeof c&&c(n,t),r&&(s||t<a.length-1)&&(clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.fadeImages((t+1)%a.length)}),u)))})))}}])&&m(n.prototype,i),a&&m(n,a),e}(i.Component);_.defaultProps={duration:5e3,transitionDuration:1e3,defaultIndex:0,indicators:!1,arrows:!0,autoplay:!0,infinite:!0,pauseOnHover:!1},_.propTypes={duration:s.a.number,transitionDuration:s.a.number,defaultIndex:s.a.number,indicators:s.a.oneOfType([s.a.bool,s.a.func]),arrows:s.a.bool,autoplay:s.a.bool,infinite:s.a.bool,onChange:s.a.func,pauseOnHover:s.a.bool,prevArrow:s.a.oneOfType([s.a.object,s.a.func]),nextArrow:s.a.oneOfType([s.a.object,s.a.func])};var x=_;n(15);function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var I=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=function(t,e){return!e||"object"!==T(e)&&"function"!=typeof e?O(t):e}(this,S(e).call(this,t))).state={index:t.defaultIndex&&t.defaultIndex<t.children.length?t.defaultIndex:0},n.width=0,n.timeout=null,n.divsContainer=null,n.wrapper=null,n.setWidth=n.setWidth.bind(O(n)),n.resizeListener=n.resizeListener.bind(O(n)),n.navigate=n.navigate.bind(O(n)),n.preZoom=n.preZoom.bind(O(n)),n.pauseSlides=n.pauseSlides.bind(O(n)),n.startSlides=n.startSlides.bind(O(n)),n.tweenGroup=new o.a.Group,n}var n,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(e,t),n=e,(i=[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeListener),this.setWidth(),this.play()}},{key:"play",value:function(){var t=this,e=this.props,n=e.autoplay,i=e.children,r=this.state.index;n&&i.length>1&&(clearTimeout(this.timeout),this.timeout=setTimeout((function(){return t.zoomTo(r+1)}),this.props.duration))}},{key:"componentWillUnmount",value:function(){this.willUnmount=!0,clearTimeout(this.timeout),window.removeEventListener("resize",this.resizeListener)}},{key:"componentDidUpdate",value:function(t){this.props.autoplay!==t.autoplay&&(this.props.autoplay?this.play():clearTimeout(this.timeout)),this.props.children.length!=t.children.length&&(this.applyStyle(),this.play())}},{key:"setWidth",value:function(){this.width=this.wrapper.clientWidth,this.applyStyle()}},{key:"resizeListener",value:function(){this.setWidth()}},{key:"applyStyle",value:function(){var t=this.width*this.props.children.length;this.divsContainer.style.width="".concat(t,"px");for(var e=0;e<this.divsContainer.children.length;e++){var n=this.divsContainer.children[e];n&&(n.style.width="".concat(this.width,"px"),n.style.left="".concat(e*-this.width,"px"))}}},{key:"pauseSlides",value:function(){this.props.pauseOnHover&&clearTimeout(this.timeout)}},{key:"startSlides",value:function(){var t=this,e=this.props,n=e.pauseOnHover,i=e.autoplay;n&&i&&(this.timeout=setTimeout((function(){return t.goNext()}),this.props.duration))}},{key:"goNext",value:function(){var t=this.state.index,e=this.props,n=e.children;(e.infinite||t!==n.length-1)&&this.zoomTo((t+1)%n.length)}},{key:"goBack",value:function(){var t=this.state.index,e=this.props,n=e.children;(e.infinite||0!==t)&&this.zoomTo(0===t?n.length-1:t-1)}},{key:"goTo",value:function(t){this.zoomTo(t)}},{key:"navigate",value:function(t){var e=t.currentTarget.dataset;e.key!=this.state.index&&this.goTo(parseInt(e.key))}},{key:"preZoom",value:function(t){"prev"===t.currentTarget.dataset.type?this.goBack():this.goNext()}},{key:"showIndicators",value:function(){var t=this,e="boolean"!=typeof this.props.indicators,n=!e&&"each-slideshow-indicator";return r.a.createElement("div",{className:"indicators"},this.props.children.map((function(i,o){return r.a.createElement("div",{key:o,"data-key":o,className:"".concat(n," ").concat(t.state.index===o&&"active"),onClick:t.navigate},e&&t.props.indicators(o))})))}},{key:"showPreviousArrow",value:function(){var t=this.props,e=t.arrows,n=t.prevArrow,i=t.infinite,o="";return n||(o="nav ".concat(this.state.index<=0&&!i&&"disabled")),e&&r.a.createElement("div",{className:o,"data-type":"prev",onClick:this.preZoom},n||r.a.createElement("span",null))}},{key:"showNextArrow",value:function(){var t=this.props,e=t.arrows,n=t.nextArrow,i=t.infinite,o=t.children,a="";return n||(a="nav ".concat(this.state.index===o.length-1&&!i&&"disabled")),e&&r.a.createElement("div",{className:a,"data-type":"next",onClick:this.preZoom},n||r.a.createElement("span",null))}},{key:"render",value:function(){var t=this,n=this.props,i=n.indicators,o=(n.arrows,n.infinite,n.children),a=this.state.index,s=u(e.propTypes,this.props);return r.a.createElement("div",s,r.a.createElement("div",{className:"react-slideshow-container",onMouseEnter:this.pauseSlides,onMouseLeave:this.startSlides},this.showPreviousArrow(),r.a.createElement("div",{className:"react-slideshow-zoom-wrapper",ref:function(e){return t.wrapper=e}},r.a.createElement("div",{className:"zoom-wrapper",ref:function(e){return t.divsContainer=e}},o.map((function(t,e){return r.a.createElement("div",{style:{opacity:e===a?"1":"0",zIndex:e===a?"1":"0"},"data-index":e,key:e},t)})))),this.showNextArrow()),i&&this.showIndicators())}},{key:"zoomTo",value:function(t){var e=this,n=this.state.index,i=this.props,r=i.children,a=i.scale,s=i.autoplay,u=i.infinite,l=i.transitionDuration,c=i.duration,h=i.onChange;this.tweenGroup.getAll().length||(this.divsContainer.children[t]||(t=0),clearTimeout(this.timeout),function t(){e.willUnmount?e.tweenGroup.removeAll():(requestAnimationFrame(t),e.tweenGroup.update())}(),new o.a.Tween({opacity:0,scale:1},this.tweenGroup).to({opacity:1,scale:a},l).onUpdate((function(i){e.divsContainer.children[t].style.opacity=i.opacity,e.divsContainer.children[n].style.opacity=1-i.opacity,e.divsContainer.children[n].style.transform="scale(".concat(i.scale,")")})).start().onComplete((function(){e.willUnmount||("function"==typeof h&&h(n,t),e.setState({index:t},(function(){e.divsContainer.children[n].style.transform="scale(1)"})),s&&(u||t<r.length-1)&&(clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.zoomTo((t+1)%r.length)}),c)))})))}}])&&k(n.prototype,i),a&&k(n,a),e}(i.Component);I.defaultProps={duration:5e3,transitionDuration:1e3,defaultIndex:0,indicators:!1,arrows:!0,autoplay:!0,infinite:!0,pauseOnHover:!1},I.propTypes={duration:s.a.number,transitionDuration:s.a.number,defaultIndex:s.a.number,indicators:s.a.oneOfType([s.a.bool,s.a.func]),scale:s.a.number.isRequired,arrows:s.a.bool,autoplay:s.a.bool,infinite:s.a.bool,onChange:s.a.func,pauseOnHover:s.a.bool,prevArrow:s.a.oneOfType([s.a.object,s.a.func]),nextArrow:s.a.oneOfType([s.a.object,s.a.func])};var E=I;n.d(e,"Slide",(function(){return v})),n.d(e,"Fade",(function(){return x})),n.d(e,"Zoom",(function(){return E}))}])}));
//# sourceMappingURL=react-slideshow-image.min.js.map

/***/ }),

/***/ "./node_modules/react-twitter-embed/dist/index.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-twitter-embed/dist/index.es.js ***!
  \***********************************************************/
/*! exports provided: TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterTimelineEmbed", function() { return TwitterTimelineEmbed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterShareButton", function() { return TwitterShareButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterFollowButton", function() { return TwitterFollowButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterHashtagButton", function() { return TwitterHashtagButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterMentionButton", function() { return TwitterMentionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterTweetEmbed", function() { return TwitterTweetEmbed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterMomentShare", function() { return TwitterMomentShare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterDMButton", function() { return TwitterDMButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterVideoEmbed", function() { return TwitterVideoEmbed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterOnAirButton", function() { return TwitterOnAirButton; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-proptype-conditional-require */ "./node_modules/react-proptype-conditional-require/dist/isRequiredIf.js");
/* harmony import */ var react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_9__);











var twitterWidgetJs = 'https://platform.twitter.com/widgets.js';

var TwitterTimelineEmbed =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterTimelineEmbed, _Component);

  function TwitterTimelineEmbed(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterTimelineEmbed);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterTimelineEmbed).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterTimelineEmbed, [{
    key: "buildChromeOptions",
    value: function buildChromeOptions(options) {
      options.chrome = '';

      if (this.props.noHeader) {
        options.chrome = options.chrome + ' noheader';
      }

      if (this.props.noFooter) {
        options.chrome = options.chrome + ' nofooter';
      }

      if (this.props.noBorders) {
        options.chrome = options.chrome + ' noborders';
      }

      if (this.props.noScrollbar) {
        options.chrome = options.chrome + ' noscrollbar';
      }

      if (this.props.transparent) {
        options.chrome = options.chrome + ' transparent';
      }

      return options;
    }
  }, {
    key: "buildOptions",
    value: function buildOptions() {
      var options = Object.assign({}, this.props.options);

      if (this.props.autoHeight) {
        options.height = this.refs.embedContainer.parentNode.offsetHeight;
      }

      options = Object.assign({}, options, {
        theme: this.props.theme,
        linkColor: this.props.linkColor,
        borderColor: this.props.borderColor,
        lang: this.props.lang
      });
      return options;
    }
  }, {
    key: "renderWidget",
    value: function renderWidget(options) {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (!this.isMountCanceled) {
        window.twttr.widgets.createTimeline({
          sourceType: this.props.sourceType,
          screenName: this.props.screenName,
          userId: this.props.userId,
          ownerScreenName: this.props.ownerScreenName,
          slug: this.props.slug,
          id: this.props.id || this.props.widgetId,
          url: this.props.url
        }, this.refs.embedContainer, options).then(function (element) {
          _this2.setState({
            isLoading: false
          });

          if (onLoad) {
            onLoad(element);
          }
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterTimelineEmbed, aborting load.');
            return;
          }

          var options = _this3.buildOptions();
          /** Append chrome options */


          options = _this3.buildChromeOptions(options);

          _this3.renderWidget(options);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      }));
    }
  }]);

  return TwitterTimelineEmbed;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterTimelineEmbed, "propTypes", {
  /**
       * This can be either of profile, likes, list, collection, URL, widget
       */
  sourceType: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['profile', 'likes', 'list', 'collection', 'url', 'widget']).isRequired,

  /**
       * username of twitter handle as String
       */
  screenName: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, function (props) {
    return !props.hasOwnProperty('userId') && (props.sourceType === 'profile' || props.sourceType === 'likes');
  }),

  /**
       * UserId of twitter handle as number
       */
  userId: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, function (props) {
    return !props.hasOwnProperty('screenName') && (props.sourceType === 'profile' || props.sourceType === 'likes');
  }),

  /**
       * To show list, used along with slug
       */
  ownerScreenName: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, function (props) {
    return props.sourceType === 'list' && !props.hasOwnProperty('id');
  }),

  /**
       * To show list, used along with ownerScreenName
       */
  slug: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, function (props) {
    return props.sourceType === 'list' && !props.hasOwnProperty('id');
  }),

  /**
       * To show list, unique list id
       * Also used with collections, in that case its valid collection id
       */
  id: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]), function (props) {
    return props.sourceType === 'list' && !props.hasOwnProperty('ownerScreenName') && !props.hasOwnProperty('slug') || props.sourceType === 'collection';
  }),

  /**
       * To show twitter content with url.
       * Supported content includes profiles, likes, lists, and collections.
       */
  url: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, function (props) {
    return props.sourceType === 'url';
  }),

  /**
       * To show custom widget
       */
  widgetId: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, function (props) {
    return props.sourceType === 'widget';
  }),

  /**
       * Additional options to pass to twitter widget plugin
       */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
       * Automatically fit into parent container height
       */
  autoHeight: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
       * With dark or light theme
       */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['dark', 'light']),

  /**
       * With custom link colors. Note: Only Hex colors are supported.
       */
  linkColor: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
       * With custom border colors. Note: Only Hex colors are supported.
       */
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
       * Hide the header from timeline
       */
  noHeader: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
       * Hide the footer from timeline
       */
  noFooter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
       * Hide the border from timeline
       */
  noBorders: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
       * Hide the scrollbars
       */
  noScrollbar: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
       * Enable Transparancy
       */
  transparent: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
       * Custom language code. Supported codes here: https://developer.twitter.com/en/docs/twitter-for-websites/twitter-for-websites-supported-languages/overview.html
       */
  lang: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterShareButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterShareButton, _Component);

  function TwitterShareButton(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterShareButton);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterShareButton).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterShareButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterShareButton, aborting load.');
            return;
          }

          if (!_this2.isMountCanceled) {
            window.twttr.widgets.createShareButton(_this2.props.url, _this2.refs.embedContainer, _this2.props.options).then(function (element) {
              _this2.setState({
                isLoading: false
              });

              if (onLoad) {
                onLoad(element);
              }
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      }));
    }
  }]);

  return TwitterShareButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterShareButton, "propTypes", {
  /**
  * Url for sharing
  */
  url: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
  * Additional options for overriding config. Details at : https://dev.twitter.com/web/tweet-button/parameters
  */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterFollowButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterFollowButton, _Component);

  function TwitterFollowButton(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterFollowButton);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterFollowButton).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterFollowButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterFollowButton, aborting load.');
            return;
          }

          if (!_this2.isMountCanceled) {
            window.twttr.widgets.createFollowButton(_this2.props.screenName, _this2.refs.embedContainer, _this2.props.options).then(function (element) {
              _this2.setState({
                isLoading: false
              });

              if (onLoad) {
                onLoad(element);
              }
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      }));
    }
  }]);

  return TwitterFollowButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterFollowButton, "propTypes", {
  /**
       * Username of twitter user which will be followed on click
       */
  screenName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
       * Additional options to be added to the button
       */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterHashtagButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterHashtagButton, _Component);

  function TwitterHashtagButton(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterHashtagButton);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterHashtagButton).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterHashtagButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterHashtagButton, aborting load.');
            return;
          }

          if (!_this2.isMountCanceled) {
            window.twttr.widgets.createHashtagButton(_this2.props.tag, _this2.refs.embedContainer, _this2.props.options).then(function (element) {
              _this2.setState({
                isLoading: false
              });

              if (onLoad) {
                onLoad(element);
              }
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      }));
    }
  }]);

  return TwitterHashtagButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterHashtagButton, "propTypes", {
  /**
       * Tag name for hashtag button
       */
  tag: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
       * Additional options to be added to the button
       */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterMentionButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterMentionButton, _Component);

  function TwitterMentionButton(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterMentionButton);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterMentionButton).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterMentionButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterMentionButton, aborting load.');
            return;
          }

          if (!_this2.isMountCanceled) {
            window.twttr.widgets.createMentionButton(_this2.props.screenName, _this2.refs.embedContainer, _this2.props.options).then(function (element) {
              _this2.setState({
                isLoading: false
              });

              if (onLoad) {
                onLoad(element);
              }
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      }));
    }
  }]);

  return TwitterMentionButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterMentionButton, "propTypes", {
  /**
   * Username to which you will need to tweet
   */
  screenName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
   * Additional options for overriding config.
   */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterTweetEmbed =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterTweetEmbed, _Component);

  function TwitterTweetEmbed(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterTweetEmbed);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterTweetEmbed).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterTweetEmbed, [{
    key: "renderWidget",
    value: function renderWidget() {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (!window.twttr) {
        console.error('Failure to load window.twttr in TwitterTweetEmbed, aborting load.');
        return;
      }

      if (!this.isMountCanceled) {
        window.twttr.widgets.createTweet(this.props.tweetId, this.refs.embedContainer, this.props.options).then(function (element) {
          _this2.setState({
            isLoading: false
          });

          if (onLoad) {
            onLoad(element);
          }
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          _this3.renderWidget();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      }));
    }
  }]);

  return TwitterTweetEmbed;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterTweetEmbed, "propTypes", {
  /**
       * Tweet id that needs to be shown
       */
  tweetId: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
       * Additional options to pass to twitter widget plugin
       */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterMomentShare =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterMomentShare, _Component);

  function TwitterMomentShare(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterMomentShare);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterMomentShare).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterMomentShare, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterMomentShare, aborting load.');
            return;
          }

          if (!_this2.isMountCanceled) {
            window.twttr.widgets.createMoment(_this2.props.momentId, _this2.refs.shareMoment, _this2.props.options).then(function (element) {
              _this2.setState({
                isLoading: false
              });

              if (onLoad) {
                onLoad(element);
              }
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "shareMoment"
      }));
    }
  }]);

  return TwitterMomentShare;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterMomentShare, "propTypes", {
  /**
   * id of Twitter moment to show
   */
  momentId: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
   * Additional options for overriding config.
   */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterDMButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterDMButton, _Component);

  function TwitterDMButton(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterDMButton);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterDMButton).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterDMButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterDMButton, aborting load.');
            return;
          }

          if (!_this2.isMountCanceled) {
            window.twttr.widgets.createDMButton(_this2.props.id, _this2.refs.embedContainer, _this2.props.options).then(function (element) {
              _this2.setState({
                isLoading: false
              });

              if (onLoad) {
                onLoad(element);
              }
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      }));
    }
  }]);

  return TwitterDMButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterDMButton, "propTypes", {
  /**
  * Twitter user id for DM button
  */
  id: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired,

  /**
  * Additional options to be added to the button
  */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterVideoEmbed =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterVideoEmbed, _Component);

  function TwitterVideoEmbed(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterVideoEmbed);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterVideoEmbed).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterVideoEmbed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterVideoEmbed, aborting load.');
            return;
          }

          if (!_this2.isMountCanceled) {
            window.twttr.widgets.createVideo(_this2.props.id, _this2.refs.embedContainer).then(function (element) {
              _this2.setState({
                isLoading: false
              });

              if (onLoad) {
                onLoad(element);
              }
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      }));
    }
  }]);

  return TwitterVideoEmbed;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterVideoEmbed, "propTypes", {
  /**
       * Id of video tweet.
       */
  id: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterOnAirButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterOnAirButton, _Component);

  function TwitterOnAirButton(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterOnAirButton);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterOnAirButton).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterOnAirButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var onLoad = this.props.onLoad;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitterWidgetJs, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterOnAirButton, aborting load.');
            return;
          }

          if (!_this2.isMountCanceled) {
            window.twttr.widgets.createPeriscopeOnAirButton(_this2.props.username, _this2.refs.embedContainer, _this2.props.options).then(function (element) {
              _this2.setState({
                isLoading: false
              });

              if (onLoad) {
                onLoad(element);
              }
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var placeholder = this.props.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, isLoading && placeholder, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      }));
    }
  }]);

  return TwitterOnAirButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterOnAirButton, "propTypes", {
  /**
   * Username for which you require periscope on air button
   */
  username: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
   * Additional options for overriding config.
   */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * Placeholder while tweet is loading
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element]),

  /**
   * Function to execute after load, return html element
   */
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/react-typed/dist/react-typed.js":
/*!******************************************************!*\
  !*** ./node_modules/react-typed/dist/react-typed.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "react")):undefined}(this,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(e,t,n){var r=n(3);e.exports=n(8)(r.isElement,!0)},function(t,n){t.exports=e},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=n(7)},function(e,t,n){
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.9
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=n(1),s=n(3),i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o.initializer.load(this,n,t),this.begin()}return r(e,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var e=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var e=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){e.currentElContent&&0!==e.currentElContent.length?e.backspace(e.currentElContent,e.currentElContent.length):e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos)},this.startDelay)}},{key:"typewrite",value:function(e,t){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),o=1;!0!==this.pause.status?this.timeout=setTimeout(function(){t=s.htmlParser.typeHtmlChars(e,t,n);var r=0,i=e.substr(t);if("^"===i.charAt(0)&&/^\^\d+/.test(i)){var a=1;a+=(i=/\d+/.exec(i)[0]).length,r=parseInt(i),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),e=e.substring(0,t)+e.substring(t+a),n.toggleBlinking(!0)}if("`"===i.charAt(0)){for(;"`"!==e.substr(t+o).charAt(0)&&!(t+ ++o>e.length););var u=e.substring(0,t),c=e.substring(u.length+1,t+o),l=e.substring(t+o+1);e=u+c+l,o--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),t>=e.length?n.doneTyping(e,t):n.keepTyping(e,t,o),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},r)},r):this.setPauseStatus(e,t,!0)}},{key:"keepTyping",value:function(e,t,n){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),t+=n;var r=e.substr(0,t);this.replaceText(r),this.typewrite(e,t)}},{key:"doneTyping",value:function(e,t){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(e,t)},this.backDelay))}},{key:"backspace",value:function(e,t){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){t=s.htmlParser.backSpaceHtmlChars(e,t,n);var r=e.substr(0,t);if(n.replaceText(r),n.smartBackspace){var o=n.strings[n.arrayPos+1];o&&r===o.substr(0,t)?n.stopNum=t:n.stopNum=0}t>n.stopNum?(t--,n.backspace(e,t)):t<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],t))},r)}else this.setPauseStatus(e,t,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(e,t,n){this.pause.typewrite=n,this.pause.curString=e,this.pause.curStrPos=t}},{key:"toggleBlinking",value:function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(e){return Math.round(Math.random()*e/2)+e}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e}},{key:"bindFocusEvents",value:function(){var e=this;this.isInput&&(this.el.addEventListener("focus",function(t){e.stop()}),this.el.addEventListener("blur",function(t){e.el.value&&0!==e.el.value.length||e.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),e}();t.default=i,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var s,i=n(2),a=(s=i)&&s.__esModule?s:{default:s},u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"load",value:function(e,t,n){if(e.el="string"==typeof n?document.querySelector(n):n,e.options=r({},a.default,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(e){return e.trim()}),"string"==typeof e.options.stringsElement?e.stringsElement=document.querySelector(e.options.stringsElement):e.stringsElement=e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.display="none";var o=Array.prototype.slice.apply(e.stringsElement.children),s=o.length;if(s)for(var i=0;i<s;i+=1){var u=o[i];e.strings.push(u.innerHTML.trim())}}for(var i in e.strPos=0,e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.sequence=[],e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.strings)e.sequence[i]=i;e.currentElContent=this.getCurrentElContent(e),e.autoInsertCss=e.options.autoInsertCss,this.appendAnimationCss(e)}},{key:"getCurrentElContent",value:function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent}},{key:"appendAnimationCss",value:function(e){if(e.autoInsertCss&&(e.showCursor||e.fadeOut)&&!document.querySelector("[data-typed-js-css]")){var t=document.createElement("style");t.type="text/css",t.setAttribute("data-typed-js-css",!0);var n="";e.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),e.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==t.length&&(t.innerHTML=n,document.body.appendChild(t))}}}]),e}();t.default=u;var c=new u;t.initializer=c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}};t.default=n,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"typeHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var r=e.substr(t).charAt(0);if("<"===r||"&"===r){var o="";for(o="<"===r?">":";";e.substr(t+1).charAt(0)!==o&&!(++t+1>e.length););t++}return t}},{key:"backSpaceHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var r=e.substr(t).charAt(0);if(">"===r||";"===r){var o="";for(o=">"===r?"<":"&";e.substr(t-1).charAt(0)!==o&&!(--t<0););t--}return t}}]),e}();t.default=r;var o=new r;t.htmlParser=o}])},e.exports=r()},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),s=n(0),i=n.n(s),a=n(4),u=n.n(a);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){var e,n,r,s,i,a,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,f=new Array(l),d=0;d<l;d++)f[d]=arguments[d];return r=this,n=!(s=(e=p(t)).call.apply(e,[this].concat(f)))||"object"!==c(s)&&"function"!=typeof s?y(r):s,i=y(n),a="rootElement",u=o.a.createRef(),a in i?Object.defineProperty(i,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[a]=u,n}var n,s,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["Component"]),n=t,(s=[{key:"componentDidMount",value:function(){var e=this.props,t=(e.style,e.typedRef,e.stopped),n=(e.className,l(e,["style","typedRef","stopped","className"]));this.constructTyped(n),t&&this.typed.stop()}},{key:"constructTyped",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.props,r=(n.style,n.typedRef,n.stopped,n.className,l(n,["style","typedRef","stopped","className"]));this.typed&&this.typed.destroy(),this.typed=new u.a(this.rootElement.current,Object.assign(r,t)),this.props.typedRef&&this.props.typedRef(this.typed),this.typed.reConstruct=function(t){e.constructTyped(t)}}},{key:"shouldComponentUpdate",value:function(e){var t=this;if(this.props!==e){e.style,e.typedRef,e.stopped,e.className;var n=l(e,["style","typedRef","stopped","className"]);return this.typed.options=Object.assign(this.typed.options,n),!Object.keys(e).every(function(n){return!t.props[n]&&e[n]?(t.constructTyped(e),!1):(t.typed[n]&&(t.typed[n]=e[n]),!0)})||this.props.strings.length===e.strings.length||this.constructTyped(e),!0}return!1}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.className,r=e.children,s=o.a.createElement("span",{ref:this.rootElement});return r&&(s=o.a.cloneElement(r,{ref:this.rootElement})),o.a.createElement("span",{style:t,className:n},s)}}])&&f(n.prototype,s),i&&f(n,i),t}();h.propTypes={style:i.a.object,className:i.a.string,children:i.a.object,typedRef:i.a.func,stopped:i.a.bool,strings:i.a.arrayOf(i.a.string),typeSpeed:i.a.number,startDelay:i.a.number,backSpeed:i.a.number,smartBackspace:i.a.bool,shuffle:i.a.bool,backDelay:i.a.number,fadeOut:i.a.bool,fadeOutClass:i.a.string,fadeOutDelay:i.a.number,loop:i.a.bool,loopCount:i.a.number,showCursor:i.a.bool,cursorChar:i.a.string,autoInsertCss:i.a.bool,attr:i.a.string,bindInputFocusEvents:i.a.bool,contentType:i.a.oneOf(["html",""]),onComplete:i.a.func,preStringTyped:i.a.func,onStringTyped:i.a.func,onLastStringBackspaced:i.a.func,onTypingPaused:i.a.func,onTypingResumed:i.a.func,onReset:i.a.func,onStop:i.a.func,onStart:i.a.func,onDestroy:i.a.func},t.default=h},function(e,t,n){"use strict";
/** @license React v16.9.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,s=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case i:case u:case a:case d:return e;default:switch(e=e&&e.$$typeof){case l:case y:case c:return e;default:return t}}case b:case m:case s:return t}}}function O(e){return S(e)===p}t.typeOf=S,t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=c,t.Element=o,t.ForwardRef=y,t.Fragment=i,t.Lazy=b,t.Memo=m,t.Portal=s,t.Profiler=u,t.StrictMode=a,t.Suspense=d,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===u||e===a||e===d||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===c||e.$$typeof===l||e.$$typeof===y||e.$$typeof===v||e.$$typeof===g)},t.isAsyncMode=function(e){return O(e)||S(e)===f},t.isConcurrentMode=O,t.isContextConsumer=function(e){return S(e)===l},t.isContextProvider=function(e){return S(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return S(e)===y},t.isFragment=function(e){return S(e)===i},t.isLazy=function(e){return S(e)===b},t.isMemo=function(e){return S(e)===m},t.isPortal=function(e){return S(e)===s},t.isProfiler=function(e){return S(e)===u},t.isStrictMode=function(e){return S(e)===a},t.isSuspense=function(e){return S(e)===d}},function(e,t,n){"use strict";
/** @license React v16.9.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){Object.defineProperty(t,"__esModule",{value:!0});var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118;var v=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,s="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.warn(s);try{throw new Error(s)}catch(e){}},g=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];v.apply(void 0,[t].concat(r))}};function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var y=e.type;switch(y){case c:case l:case o:case i:case s:case p:return y;default:var m=y&&y.$$typeof;switch(m){case u:case f:case a:return m;default:return t}}case h:case d:case r:return t}}}var O=c,w=l,k=u,P=a,C=n,j=f,T=o,x=h,E=d,I=r,_=i,R=s,$=p,M=!1;function A(e){return S(e)===l}t.typeOf=S,t.AsyncMode=O,t.ConcurrentMode=w,t.ContextConsumer=k,t.ContextProvider=P,t.Element=C,t.ForwardRef=j,t.Fragment=T,t.Lazy=x,t.Memo=E,t.Portal=I,t.Profiler=_,t.StrictMode=R,t.Suspense=$,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===l||e===i||e===s||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===d||e.$$typeof===a||e.$$typeof===u||e.$$typeof===f||e.$$typeof===m||e.$$typeof===b)},t.isAsyncMode=function(e){return M||(M=!0,g(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||S(e)===c},t.isConcurrentMode=A,t.isContextConsumer=function(e){return S(e)===u},t.isContextProvider=function(e){return S(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return S(e)===f},t.isFragment=function(e){return S(e)===o},t.isLazy=function(e){return S(e)===h},t.isMemo=function(e){return S(e)===d},t.isPortal=function(e){return S(e)===r},t.isProfiler=function(e){return S(e)===i},t.isStrictMode=function(e){return S(e)===s},t.isSuspense=function(e){return S(e)===p}})()},function(e,t,n){"use strict";var r=n(3),o=n(9),s=n(2),i=n(10),a=Function.call.bind(Object.prototype.hasOwnProperty),u=function(){};function c(){return null}u=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,l="@@iterator";var f="<<anonymous>>",p={array:m("array"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:h(c),arrayOf:function(e){return h(function(t,n,r,o,i){if("function"!=typeof e)return new d("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=t[n];if(!Array.isArray(a))return new d("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+r+"`, expected an array.");for(var u=0;u<a.length;u++){var c=e(a,u,r,o,i+"["+u+"]",s);if(c instanceof Error)return c}return null})},element:h(function(t,n,r,o,s){var i=t[n];return e(i)?null:new d("Invalid "+o+" `"+s+"` of type `"+v(i)+"` supplied to `"+r+"`, expected a single ReactElement.")}),elementType:h(function(e,t,n,o,s){var i=e[t];return r.isValidElementType(i)?null:new d("Invalid "+o+" `"+s+"` of type `"+v(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")}),instanceOf:function(e){return h(function(t,n,r,o,s){if(!(t[n]instanceof e)){var i=e.name||f;return new d("Invalid "+o+" `"+s+"` of type `"+function(e){if(!e.constructor||!e.constructor.name)return f;return e.constructor.name}(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null})},node:h(function(e,t,n,r,o){return b(e[t])?null:new d("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}),objectOf:function(e){return h(function(t,n,r,o,i){if("function"!=typeof e)return new d("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],c=v(u);if("object"!==c)return new d("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var l in u)if(a(u,l)){var f=e(u,l,r,o,i+"."+l,s);if(f instanceof Error)return f}return null})},oneOf:function(e){if(!Array.isArray(e))return arguments.length>1?u("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):u("Invalid argument supplied to oneOf, expected an array."),c;return h(function(t,n,r,o,s){for(var i=t[n],a=0;a<e.length;a++)if(y(i,e[a]))return null;var u=JSON.stringify(e,function(e,t){return"symbol"===g(t)?String(t):t});return new d("Invalid "+o+" `"+s+"` of value `"+String(i)+"` supplied to `"+r+"`, expected one of "+u+".")})},oneOfType:function(e){if(!Array.isArray(e))return u("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+S(n)+" at index "+t+"."),c}return h(function(t,n,r,o,i){for(var a=0;a<e.length;a++){if(null==(0,e[a])(t,n,r,o,i,s))return null}return new d("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")})},shape:function(e){return h(function(t,n,r,o,i){var a=t[n],u=v(a);if("object"!==u)return new d("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var l=e[c];if(l){var f=l(a,c,r,o,i+"."+c,s);if(f)return f}}return null})},exact:function(e){return h(function(t,n,r,i,a){var u=t[n],c=v(u);if("object"!==c)return new d("Invalid "+i+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");var l=o({},t[n],e);for(var f in l){var p=e[f];if(!p)return new d("Invalid "+i+" `"+a+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=p(u,f,r,i,a+"."+f,s);if(y)return y}return null})}};function y(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){this.message=e,this.stack=""}function h(e){var n={},r=0;function o(o,i,a,c,l,p,y){if(c=c||f,p=p||a,y!==s){if(t){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}if("undefined"!=typeof console){var m=c+":"+a;!n[m]&&r<3&&(u("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[m]=!0,r++)}}return null==i[a]?o?null===i[a]?new d("The "+l+" `"+p+"` is marked as required in `"+c+"`, but its value is `null`."):new d("The "+l+" `"+p+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(i,a,c,l,p)}var i=o.bind(null,!1);return i.isRequired=o.bind(null,!0),i}function m(e){return h(function(t,n,r,o,s,i){var a=t[n];return v(a)!==e?new d("Invalid "+o+" `"+s+"` of type `"+g(a)+"` supplied to `"+r+"`, expected `"+e+"`."):null})}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[l]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,s=r.call(t);if(r!==t.entries){for(;!(o=s.next()).done;)if(!b(o.value))return!1}else for(;!(o=s.next()).done;){var i=o.value;if(i&&!b(i[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function g(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function S(e){var t=g(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return d.prototype=Error.prototype,p.checkPropTypes=i,p.resetWarningCache=i.resetWarningCache,p.PropTypes=p,p}},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,u=i(e),c=1;c<arguments.length;c++){for(var l in n=Object(arguments[c]))o.call(n,l)&&(u[l]=n[l]);if(r){a=r(n);for(var f=0;f<a.length;f++)s.call(n,a[f])&&(u[a[f]]=n[a[f]])}}return u}},function(e,t,n){"use strict";var r=function(){},o=n(2),s={},i=Function.call.bind(Object.prototype.hasOwnProperty);function a(e,t,n,a,u){for(var c in e)if(i(e,c)){var l;try{if("function"!=typeof e[c]){var f=Error((a||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.");throw f.name="Invariant Violation",f}l=e[c](t,c,a,n,null,o)}catch(e){l=e}if(!l||l instanceof Error||r((a||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in s)){s[l.message]=!0;var p=u?u():"";r("Failed "+n+" type: "+l.message+(null!=p?p:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},a.resetWarningCache=function(){s={}},e.exports=a},function(e,t,n){"use strict";var r=n(2);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,s,i){if(i!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return n.PropTypes=n,n}}])});

/***/ }),

/***/ "./node_modules/scriptjs/dist/script.js":
/*!**********************************************!*\
  !*** ./node_modules/scriptjs/dist/script.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, definition) {
  if ( true && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else {}
})('$script', function () {
  var doc = document
    , head = doc.getElementsByTagName('head')[0]
    , s = 'string'
    , f = false
    , push = 'push'
    , readyState = 'readyState'
    , onreadystatechange = 'onreadystatechange'
    , list = {}
    , ids = {}
    , delay = {}
    , scripts = {}
    , scriptpath
    , urlArgs

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
    return 1
  }
  function each(ar, fn) {
    every(ar, function (el) {
      fn(el)
      return 1
    })
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths]
    var idOrDoneIsDone = idOrDone && idOrDone.call
      , done = idOrDoneIsDone ? idOrDone : optDone
      , id = idOrDoneIsDone ? paths.join('') : idOrDone
      , queue = paths.length
    function loopFn(item) {
      return item.call ? item() : list[item]
    }
    function callback() {
      if (!--queue) {
        list[id] = 1
        done && done()
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback()
        
        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
        }
        
        if (scripts[path]) {
          if (id) ids[id] = 1
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
        }

        scripts[path] = 1
        if (id) ids[id] = 1
        create(path, callback)
      })
    }, 0)
    return $script
  }

  function create(path, fn) {
    var el = doc.createElement('script'), loaded
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
      el.onload = el[onreadystatechange] = null
      loaded = 1
      scripts[path] = 2
      fn()
    }
    el.async = 1
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild)
  }

  $script.get = create

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift()
      !scripts.length ? $script(s, id, done) : $script(s, callback)
    }())
  }

  $script.path = function (p) {
    scriptpath = p
  }
  $script.urlArgs = function (str) {
    urlArgs = str;
  }
  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps]
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {return list[dep]}) ?
      ready() : !function (key) {
      delay[key] = delay[key] || []
      delay[key][push](ready)
      req && req(missing)
    }(deps.join('|'))
    return $script
  }

  $script.done = function (idOrDone) {
    $script([null], idOrDone)
  }

  return $script
});


/***/ }),

/***/ "./node_modules/url-join/lib/url-join.js":
/*!***********************************************!*\
  !*** ./node_modules/url-join/lib/url-join.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (name, context, definition) {
  if ( true && module.exports) module.exports = definition();
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else {}
})('urljoin', this, function () {

  function normalize (strArray) {
    var resultArray = [];
    if (strArray.length === 0) { return ''; }

    if (typeof strArray[0] !== 'string') {
      throw new TypeError('Url must be a string. Received ' + strArray[0]);
    }

    // If the first part is a plain protocol, we combine it with the next part.
    if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
      var first = strArray.shift();
      strArray[0] = first + strArray[0];
    }

    // There must be two or three slashes in the file protocol, two slashes in anything else.
    if (strArray[0].match(/^file:\/\/\//)) {
      strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1:///');
    } else {
      strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1://');
    }

    for (var i = 0; i < strArray.length; i++) {
      var component = strArray[i];

      if (typeof component !== 'string') {
        throw new TypeError('Url must be a string. Received ' + component);
      }

      if (component === '') { continue; }

      if (i > 0) {
        // Removing the starting slashes for each component but the first.
        component = component.replace(/^[\/]+/, '');
      }
      if (i < strArray.length - 1) {
        // Removing the ending slashes for each component but the last.
        component = component.replace(/[\/]+$/, '');
      } else {
        // For the last component we will combine multiple slashes to a single one.
        component = component.replace(/[\/]+$/, '/');
      }

      resultArray.push(component);

    }

    var str = resultArray.join('/');
    // Each input component is now separated by a single slash except the possible first plain protocol part.

    // remove trailing slash before parameters or hash
    str = str.replace(/\/(\?|&|#[^!])/g, '$1');

    // replace ? in parameters with &
    var parts = str.split('?');
    str = parts.shift() + (parts.length > 0 ? '?': '') + parts.join('&');

    return str;
  }

  return function () {
    var input;

    if (typeof arguments[0] === 'object') {
      input = arguments[0];
    } else {
      input = [].slice.call(arguments);
    }

    return normalize(input);
  };

});


/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/keys */ "lodash/keys");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SocialLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SocialLink */ "./src/components/SocialLink.js");
/* harmony import */ var _data_socialProfiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/socialProfiles */ "./data/socialProfiles.js");
class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"]{render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer",{className:"footer container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(lodash_keys__WEBPACK_IMPORTED_MODULE_1___default()(_data_socialProfiles__WEBPACK_IMPORTED_MODULE_4__["default"]),(socialLink,idx)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialLink__WEBPACK_IMPORTED_MODULE_3__["default"],{key:`${idx}`,socialMedia:socialLink}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Made with \u2764\uFE0F"));}}

/***/ }),

/***/ "./src/components/Navigation.js":
/*!**************************************!*\
  !*** ./src/components/Navigation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _static_images_eng_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/eng.webp */ "./static/images/eng.webp");
/* harmony import */ var _static_images_eng_webp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_images_eng_webp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_sun_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/sun.svg */ "./src/images/sun.svg");
/* harmony import */ var _images_sun_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_sun_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_moon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/moon.svg */ "./src/images/moon.svg");
/* harmony import */ var _images_moon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_moon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/ThemeContext */ "./src/context/ThemeContext.js");
class Navigation extends react__WEBPACK_IMPORTED_MODULE_0__["Component"]{constructor(...args){super(...args);this.state={scrolled:false};this.navOnScroll=()=>{if(window.scrollY>20){this.setState({scrolled:true});}else{this.setState({scrolled:false});}};}componentDidMount(){window.addEventListener('scroll',this.navOnScroll);}componentWillUnmount(){window.removeEventListener('scroll',this.navOnScroll);}render(){const{scrolled}=this.state;const{menuLinks}=this.props;const theme=this.context;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav",{className:scrolled?'nav scroll':'nav'},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"nav-container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"brand"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{to:"/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:_static_images_eng_webp__WEBPACK_IMPORTED_MODULE_2___default.a,className:"favicon",alt:"ashmeet"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"text"},"ashmeetsehgal.com"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"links"},menuLinks.map(link=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{key:link.name,to:link.link,activeClassName:"active"},link.name))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"cta"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:"dark-switcher",onClick:theme.toggleDark,"aria-label":"Toggle Dark Mode.",title:"Toggle Dark Mode"},theme.dark?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:_images_sun_svg__WEBPACK_IMPORTED_MODULE_3___default.a,className:"theme-icon",alt:"Light Mode"}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:_images_moon_svg__WEBPACK_IMPORTED_MODULE_4___default.a,className:"theme-icon",alt:"Dark Mode"})))));}}Navigation.contextType=_context_ThemeContext__WEBPACK_IMPORTED_MODULE_5__["default"];

/***/ }),

/***/ "./src/components/SEO.js":
/*!*******************************!*\
  !*** ./src/components/SEO.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-join */ "./node_modules/url-join/lib/url-join.js");
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url_join__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3__);
class SEO extends react__WEBPACK_IMPORTED_MODULE_0__["Component"]{render(){const image=url_join__WEBPACK_IMPORTED_MODULE_2___default()(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteUrl,_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteLogo);const blogURL=url_join__WEBPACK_IMPORTED_MODULE_2___default()(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteUrl,_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.pathPrefix);const schemaOrgJSONLD=[{'@context':'http://schema.org','@type':'WebSite',url:blogURL,name:_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteTitle,alternateName:_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteTitleAlt?_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteTitleAlt:''}];return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"description",content:_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"image",content:image}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script",{type:"application/ld+json"},JSON.stringify(schemaOrgJSONLD)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:url",content:_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteUrl}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:title",content:_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteTitle}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:description",content:_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:image",content:image}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"twitter:creator",content:_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.userTwitter}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"twitter:title",content:_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.userTwitter}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"twitter:description",content:_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"twitter:image",content:image}));}}

/***/ }),

/***/ "./src/components/SocialLink.js":
/*!**************************************!*\
  !*** ./src/components/SocialLink.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_socialProfiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/socialProfiles */ "./data/socialProfiles.js");
/* harmony import */ var _configs_image_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/image.config */ "./src/configs/image.config.js");
/* harmony default export */ __webpack_exports__["default"] = (({socialMedia})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:_data_socialProfiles__WEBPACK_IMPORTED_MODULE_1__["default"][socialMedia].link,title:_data_socialProfiles__WEBPACK_IMPORTED_MODULE_1__["default"][socialMedia].title,target:"_blank",rel:"noopener noreferrer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:_configs_image_config__WEBPACK_IMPORTED_MODULE_2__["default"][socialMedia],className:"footer-img",alt:_data_socialProfiles__WEBPACK_IMPORTED_MODULE_1__["default"][socialMedia].alt}));});

/***/ }),

/***/ "./src/components/SocialList.js":
/*!**************************************!*\
  !*** ./src/components/SocialList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocialList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SocialLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocialLink */ "./src/components/SocialLink.js");
/* harmony import */ var _configs_socialPlugin_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/socialPlugin.config */ "./src/configs/socialPlugin.config.js");
class SocialList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"]{render(){const{socialList}=this.props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"projects"},lodash_map__WEBPACK_IMPORTED_MODULE_1___default()(socialList,project=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{key:project.title,href:project.link,target:"_blank",rel:"noopener noreferrer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"each"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"project-icon"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialLink__WEBPACK_IMPORTED_MODULE_2__["default"],{socialMedia:project.id})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"project-title"},project.title)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,project.description),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"social-plugins buttons"},_configs_socialPlugin_config__WEBPACK_IMPORTED_MODULE_3__["default"][project.id]&&_configs_socialPlugin_config__WEBPACK_IMPORTED_MODULE_3__["default"][project.id])))));}}

/***/ }),

/***/ "./src/configs/image.config.js":
/*!*************************************!*\
  !*** ./src/configs/image.config.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_thumbnails_twitter_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../content/thumbnails/twitter.webp */ "./content/thumbnails/twitter.webp");
/* harmony import */ var _content_thumbnails_twitter_webp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_thumbnails_twitter_webp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_thumbnails_instagram_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content/thumbnails/instagram.webp */ "./content/thumbnails/instagram.webp");
/* harmony import */ var _content_thumbnails_instagram_webp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_thumbnails_instagram_webp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_thumbnails_facebook_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../content/thumbnails/facebook.webp */ "./content/thumbnails/facebook.webp");
/* harmony import */ var _content_thumbnails_facebook_webp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_thumbnails_facebook_webp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content_thumbnails_linkedin_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../content/thumbnails/linkedin.webp */ "./content/thumbnails/linkedin.webp");
/* harmony import */ var _content_thumbnails_linkedin_webp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_thumbnails_linkedin_webp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _content_thumbnails_medium_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../content/thumbnails/medium.webp */ "./content/thumbnails/medium.webp");
/* harmony import */ var _content_thumbnails_medium_webp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_content_thumbnails_medium_webp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _content_thumbnails_reddit_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../content/thumbnails/reddit.webp */ "./content/thumbnails/reddit.webp");
/* harmony import */ var _content_thumbnails_reddit_webp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_content_thumbnails_reddit_webp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _content_thumbnails_gmail_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../content/thumbnails/gmail.webp */ "./content/thumbnails/gmail.webp");
/* harmony import */ var _content_thumbnails_gmail_webp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_content_thumbnails_gmail_webp__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _content_thumbnails_github_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../content/thumbnails/github.webp */ "./content/thumbnails/github.webp");
/* harmony import */ var _content_thumbnails_github_webp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_content_thumbnails_github_webp__WEBPACK_IMPORTED_MODULE_7__);
/* harmony default export */ __webpack_exports__["default"] = ({twitter: (_content_thumbnails_twitter_webp__WEBPACK_IMPORTED_MODULE_0___default()),instagram: (_content_thumbnails_instagram_webp__WEBPACK_IMPORTED_MODULE_1___default()),facebook: (_content_thumbnails_facebook_webp__WEBPACK_IMPORTED_MODULE_2___default()),linkedin: (_content_thumbnails_linkedin_webp__WEBPACK_IMPORTED_MODULE_3___default()),medium: (_content_thumbnails_medium_webp__WEBPACK_IMPORTED_MODULE_4___default()),reddit: (_content_thumbnails_reddit_webp__WEBPACK_IMPORTED_MODULE_5___default()),gmail: (_content_thumbnails_gmail_webp__WEBPACK_IMPORTED_MODULE_6___default()),github: (_content_thumbnails_github_webp__WEBPACK_IMPORTED_MODULE_7___default())});

/***/ }),

/***/ "./src/configs/socialPlugin.config.js":
/*!********************************************!*\
  !*** ./src/configs/socialPlugin.config.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_github_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-github-btn */ "./node_modules/react-github-btn/index.js");
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-twitter-embed */ "./node_modules/react-twitter-embed/dist/index.es.js");
/* harmony default export */ __webpack_exports__["default"] = ({twitter:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_twitter_embed__WEBPACK_IMPORTED_MODULE_2__["TwitterFollowButton"],{screenName:'ashmeetsehgal'}),github:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_github_btn__WEBPACK_IMPORTED_MODULE_1__["default"],{href:"https://github.com/ashmeetsehgal","data-size":"large","data-show-count":"true"},"ashmeetsehgal")});

/***/ }),

/***/ "./src/context/ThemeContext.js":
/*!*************************************!*\
  !*** ./src/context/ThemeContext.js ***!
  \*************************************/
/*! exports provided: default, ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const defaultState={dark:false,notFound:false,toggleDark:()=>{}};const ThemeContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(defaultState);class ThemeProvider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"]{constructor(...args){super(...args);this.state={dark:false,notFound:false};this.toggleDark=()=>{this.setState(prevState=>({dark:!prevState.dark}));};this.setNotFound=()=>{this.setState({notFound:true});};this.setFound=()=>{this.setState({notFound:false});};}componentDidMount(){const lsDark=JSON.parse(localStorage.getItem('dark'));if(lsDark){this.setState({dark:lsDark});}}componentDidUpdate(prevState){const{dark}=this.state;if(prevState.dark!==dark){localStorage.setItem('dark',JSON.stringify(dark));}}render(){const{children}=this.props;const{dark,notFound}=this.state;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeContext.Provider,{value:{dark,notFound,setFound:this.setFound,setNotFound:this.setNotFound,toggleDark:this.toggleDark}},children);}}/* harmony default export */ __webpack_exports__["default"] = (ThemeContext);

/***/ }),

/***/ "./src/images/moon.svg":
/*!*****************************!*\
  !*** ./src/images/moon.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxwYXRoIGQ9Ik0xMDUuODcsMTQuOTljLTMuNzQtMy4zOS03LjkxLTYuMzgtMTIuNDItOC44OWMtMC44Ny0wLjQ5LTItMC4zNS0yLjcxLDAuMzMgYy0wLjcxLDAuNjgtMC44MywxLjczLTAuMjksMi41M2MxNS42MywyMi45MywxMi4yOSw1Mi41Mi04LjExLDcxLjk3Yy0xMS45LDExLjM1LTI3Ljg1LDE3LjYtNDQuOTEsMTcuNiBjLTExLjM5LDAtMjIuNTQtMi44Ni0zMi4yNC04LjI3Yy0wLjg3LTAuNDktMi0wLjM2LTIuNzEsMC4zM2MtMC43MSwwLjY4LTAuODMsMS43Mi0wLjI4LDIuNTNjMi44MSw0LjEyLDYuMTIsNy45Myw5Ljg2LDExLjMyIGMxMi42MSwxMS40NSwyOS4yNywxNy43Niw0Ni45LDE3Ljc2YzE4LjI3LDAsMzUuMzQtNi43LDQ4LjA5LTE4Ljg2YzEyLjUzLTExLjk0LDE5LjMxLTI3LjcxLDE5LjA5LTQ0LjQgQzEyNS45Miw0Mi4yNSwxMTguNzIsMjYuNjQsMTA1Ljg3LDE0Ljk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KPC9zdmc+"

/***/ }),

/***/ "./src/images/sun.svg":
/*!****************************!*\
  !*** ./src/images/sun.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxnPgogICAgPHBhdGggZD0iTTY0LDMwLjM0Yy0xOC41OSwwLTMzLjY2LDE1LjA3LTMzLjY2LDMzLjY1YzAsMTguNTksMTUuMDcsMzMuNjYsMzMuNjYsMzMuNjYgYzE4LjU5LDAsMzMuNjYtMTUuMDcsMzMuNjYtMzMuNjZDOTcuNjYsNDUuNDEsODIuNTksMzAuMzQsNjQsMzAuMzR6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTU2Ljc2LDI0LjIxTDU2Ljc2LDI0LjIxaDE0LjQ5YzAuNjcsMCwxLjI5LTAuMzMsMS42OC0wLjg4YzAuMzgtMC41NCwwLjQ3LTEuMjUsMC4yNC0xLjg4IEw2NS45MiwxLjgzYy0wLjMtMC44MS0xLjA2LTEuMzQtMS45Mi0xLjM0cy0xLjYyLDAuNTQtMS45MiwxLjM0bC03LjI1LDE5LjYzYy0wLjIzLDAuNjMtMC4xNCwxLjMzLDAuMjQsMS44OCBDNTUuNDYsMjMuODksNTYuMDksMjQuMjEsNTYuNzYsMjQuMjF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTk3LjI2LDQwLjk5YzAuMzgsMC4zOSwwLjkxLDAuNiwxLjQ0LDAuNmMwLjEyLDAsMC4yNC0wLjAxLDAuMzYtMC4wM2MwLjY2LTAuMTIsMS4yMS0wLjU1LDEuNS0xLjE2IGw4Ljc2LTE5LjAxYzAuMzYtMC43OCwwLjE5LTEuNjktMC40MS0yLjNjLTAuNjEtMC42MS0xLjUzLTAuNzctMi4zMS0wLjQyTDg3LjYsMjcuNDRjLTAuNjEsMC4yOC0xLjA0LDAuODQtMS4xNiwxLjUgYy0wLjEyLDAuNjYsMC4xLDEuMzMsMC41NiwxLjgxTDk3LjI2LDQwLjk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0xMjYuMTgsNjIuMDhsLTE5LjY0LTcuMjRjLTAuNjMtMC4yMy0xLjMzLTAuMTQtMS44OCwwLjI0Yy0wLjU1LDAuMzgtMC44NywxLTAuODcsMS42N2wwLjAxLDE0LjQ5IGMwLDAuNjcsMC4zMywxLjMsMC44OCwxLjY4YzAuMzUsMC4yMywwLjc2LDAuMzYsMS4xNywwLjM2YzAuMjQsMCwwLjQ4LTAuMDQsMC43MS0wLjEzbDE5LjY0LTcuMjRjMC44LTAuMjksMS4zNC0xLjA2LDEuMzQtMS45MyBDMTI3LjUyLDYzLjE0LDEyNi45OSw2Mi4zOCwxMjYuMTgsNjIuMDh6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTEwMC41Niw4Ny42Yy0wLjI4LTAuNjEtMC44NC0xLjA0LTEuNS0xLjE2Yy0wLjY2LTAuMTEtMS4zNCwwLjEtMS44LDAuNTdMODcuMDEsOTcuMjYgYy0wLjQ3LDAuNDctMC42OSwxLjE1LTAuNTcsMS44MWMwLjEyLDAuNjUsMC41NSwxLjIyLDEuMTYsMS41bDE5LjAxLDguNzZjMC4yNywwLjEzLDAuNTYsMC4xOCwwLjg2LDAuMTggYzAuNTMsMCwxLjA1LTAuMjEsMS40NC0wLjZjMC42MS0wLjYxLDAuNzctMS41MiwwLjQxLTIuM0wxMDAuNTYsODcuNnoiIHN0eWxlPSJmaWxsOiNGQ0MyMUI7Ii8+CiAgICA8cGF0aCBkPSJNNzEuMjQsMTAzLjc4TDcxLjI0LDEwMy43OGwtMTQuNDksMC4wMWMtMC42NywwLTEuMjksMC4zMy0xLjY3LDAuODggYy0wLjM4LDAuNTUtMC40NywxLjI1LTAuMjUsMS44N2w3LjI1LDE5LjY0YzAuMywwLjgsMS4wNiwxLjM0LDEuOTIsMS4zNHMxLjYyLTAuNTQsMS45Mi0xLjM0bDcuMjUtMTkuNjQgYzAuMjMtMC42MywwLjE0LTEuMzMtMC4yNC0xLjg4QzcyLjU0LDEwNC4xMSw3MS45MiwxMDMuNzgsNzEuMjQsMTAzLjc4eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0zMC43NCw4Ny4wMWMtMC40Ny0wLjQ3LTEuMTQtMC42OC0xLjgtMC41N2MtMC42NiwwLjEyLTEuMjIsMC41NS0xLjUsMS4xNmwtOC43NiwxOS4wMSBjLTAuMzYsMC43OC0wLjE5LDEuNywwLjQyLDIuM2MwLjM5LDAuMzksMC45MSwwLjYsMS40NCwwLjZjMC4yOSwwLDAuNTgtMC4wNiwwLjg2LTAuMTlsMTkuMDEtOC43N2MwLjYxLTAuMjgsMS4wNC0wLjg0LDEuMTYtMS41IGMwLjEyLTAuNjYtMC4xLTEuMzMtMC41Ny0xLjhMMzAuNzQsODcuMDF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTIyLjE3LDczLjI5YzAuNDEsMCwwLjgyLTAuMTMsMS4xNy0wLjM3YzAuNTUtMC4zOCwwLjg4LTEuMDEsMC44OC0xLjY4bC0wLjAxLTE0LjQ5IGMwLTAuNjctMC4zMy0xLjI5LTAuODgtMS42OGMtMC41NS0wLjM4LTEuMjUtMC40Ny0xLjg3LTAuMjRMMS44Miw2Mi4wOGMtMC44LDAuMjktMS4zNCwxLjA2LTEuMzQsMS45MmMwLDAuODUsMC41MywxLjYyLDEuMzQsMS45MiBsMTkuNjUsNy4yNEMyMS43LDczLjI1LDIxLjkzLDczLjI5LDIyLjE3LDczLjI5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0yNy40NSw0MC40YzAuMjgsMC42MSwwLjg0LDEuMDQsMS41LDEuMTZjMC4xMiwwLjAyLDAuMjQsMC4wMywwLjM2LDAuMDNjMC41NCwwLDEuMDYtMC4yMSwxLjQ1LTAuNiBMNDEsMzAuNzRjMC40Ny0wLjQ4LDAuNjgtMS4xNSwwLjU2LTEuODFjLTAuMTItMC42NS0wLjU1LTEuMjEtMS4xNi0xLjQ5bC0xOS4wMi04Ljc2Yy0wLjc4LTAuMzYtMS42OS0wLjE5LTIuMywwLjQyIGMtMC42MSwwLjYxLTAuNzcsMS41Mi0wLjQxLDIuM0wyNy40NSw0MC40eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./src/layout/index.js":
/*!*****************************!*\
  !*** ./src/layout/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ThemeContext */ "./src/context/ThemeContext.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navigation */ "./src/components/Navigation.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_logos_logo_48_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/logos/logo-48.webp */ "./static/logos/logo-48.webp");
/* harmony import */ var _static_logos_logo_48_webp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_logos_logo_48_webp__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_7__);
class MainLayout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"]{render(){const{dark,notFound}=this.context;const{children}=this.props;let themeClass='';if(dark&&!notFound){themeClass='dark';}else if(notFound){themeClass='not-found';}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a,{bodyAttributes:{class:`theme ${themeClass}`}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"description",content:_data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.siteDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link",{rel:"icon",href:_static_logos_logo_48_webp__WEBPACK_IMPORTED_MODULE_6___default.a})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"],{menuLinks:_data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.menuLinks}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main",{id:"main-content"},children),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"],null));}}MainLayout.contextType=_context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__["default"];

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFoundPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout */ "./src/layout/index.js");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SEO */ "./src/components/SEO.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__);
class NotFoundPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]{render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_2__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a,{title:`Page not found – ${_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteTitle}`}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SEO__WEBPACK_IMPORTED_MODULE_3__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"404"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"You're lost it seems"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Go home, it's not safe outside"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{className:"button",href:"/"},"Go home")));}}

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout */ "./src/layout/index.js");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SEO */ "./src/components/SEO.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_SocialList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SocialList */ "./src/components/SocialList.js");
/* harmony import */ var _data_socialProfiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/socialProfiles */ "./data/socialProfiles.js");
class Contact extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]{render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_2__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a,{title:`${_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteTitle} – Full Stack Software Developer`}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SEO__WEBPACK_IMPORTED_MODULE_3__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Contact"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"I best respond on emails, try to send one on",' ',/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"mailto:sglashmeet@gmail.com?&subject=ashmeetsehgal.com||your-subject-here&body=Please-start-writing-here",title:"gmail",target:"_blank",rel:"noopener noreferrer"},"sglashmeet@gmail.com"),' ',"if you'd like to catch up with me"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Newsletter"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"If you'd prefer to be contacted by me, you can get notified when I've written or created something new via the newsletter. I generally send out an email once a month or less, and you can one-click unsubscribe at any time."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe",{title:"newsletter",src:"https://ashmeet.substack.com/embed",width:"100%",height:"100%",style:{border:'1px',solid:'#EEE',background:'white'},frameBorder:"0",scrolling:"no"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"You can connect with me on different channels"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SocialList__WEBPACK_IMPORTED_MODULE_5__["default"],{socialList:_data_socialProfiles__WEBPACK_IMPORTED_MODULE_6__["default"]}))));}}

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-typed */ "./node_modules/react-typed/dist/react-typed.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slideshow_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slideshow-image */ "./node_modules/react-slideshow-image/dist/react-slideshow-image.min.js");
/* harmony import */ var react_slideshow_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slideshow_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_github_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-github-btn */ "./node_modules/react-github-btn/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout */ "./src/layout/index.js");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SEO */ "./src/components/SEO.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_images_creator_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../static/images/creator.webp */ "./static/images/creator.webp");
/* harmony import */ var _static_images_creator_webp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_images_creator_webp__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_images_bp_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../static/images/bp.webp */ "./static/images/bp.webp");
/* harmony import */ var _static_images_bp_webp__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_images_bp_webp__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_images_writer_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../static/images/writer.webp */ "./static/images/writer.webp");
/* harmony import */ var _static_images_writer_webp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_images_writer_webp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_images_eng_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../static/images/eng.webp */ "./static/images/eng.webp");
/* harmony import */ var _static_images_eng_webp__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_images_eng_webp__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_text_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/text.util */ "./src/utils/text.util.js");
const sliderMap=[{image:_static_images_creator_webp__WEBPACK_IMPORTED_MODULE_8___default.a,title:'Creator',desc:'',alt:'Creator'},{image:_static_images_bp_webp__WEBPACK_IMPORTED_MODULE_9___default.a,title:'Bagpacker',desc:'',alt:'Bagpacker'},{image:_static_images_writer_webp__WEBPACK_IMPORTED_MODULE_10___default.a,title:'Writer',desc:'',alt:'Writer'},{image:_static_images_eng_webp__WEBPACK_IMPORTED_MODULE_11___default.a,title:'Engineer',desc:'',alt:'Engineer'}];const properties={duration:1800,transitionDuration:400,infinite:true,arrows:false};class Index extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]{constructor(...args){super(...args);this.state={loading:true,error:false,data:[]};}componentDidMount(){fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ashmeetsehgal').then(res=>res.json()).then(data=>data.items.filter(item=>item.categories.length>0)).then(dataList=>this.setState({loading:false,data:dataList})).catch(err=>this.setState({loading:false,error:err}));}render(){const{data,loading,error}=this.state;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_5__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a,{title:`${_data_SiteConfig__WEBPACK_IMPORTED_MODULE_7___default.a.siteTitle} – Full Stack Software Developer`}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SEO__WEBPACK_IMPORTED_MODULE_6__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"lead"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"newsletter-section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"slide-container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slideshow_image__WEBPACK_IMPORTED_MODULE_3__["Slide"],properties,sliderMap.map(item=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"each-fade",key:item.alt},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"image-container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:item.image,className:"newsletter-avatar",alt:item.alt})))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typed__WEBPACK_IMPORTED_MODULE_2___default.a,{strings:sliderMap.map(item=>item.title),typeSpeed:80,backDelay:1100,backSpeed:20,loop:true})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"I write/post stuff on different platforms. Get an update when something new comes out by signing up below!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{className:"button",href:"https://ashmeet.substack.com/"},"Subscribe"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"elevator"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Hey \uD83D\uDC4B I'm Ashmeet "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"I'm a full stack software developer who loves building experiences, improving productivity, sharing ideas, solving problems, implementing solutions."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"social-buttons"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_github_btn__WEBPACK_IMPORTED_MODULE_4__["default"],{href:"https://github.com/ashmeetsehgal","data-size":"large","data-show-count":"true"},"ashmeetsehgal"))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container front-page"}),!loading&&!error&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"gradient-section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Tech Posts (More coming soon...)")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"quotations"},data&&data.map(item=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{key:item.guid,href:item.link,target:"_blank",rel:"noopener noreferrer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote",{className:"quotation"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:item.thumbnail,className:"medium-img",alt:item.title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,item.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("cite",null,"\u2014 ",Object(_utils_text_util__WEBPACK_IMPORTED_MODULE_12__["shortenText"])(item.pubDate,0,10))))))));}}

/***/ }),

/***/ "./src/pages/me.js":
/*!*************************!*\
  !*** ./src/pages/me.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Me; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout */ "./src/layout/index.js");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SEO */ "./src/components/SEO.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__);
class Me extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]{render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_2__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a,{title:`${_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteTitle} – Full Stack Software Developer`}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SEO__WEBPACK_IMPORTED_MODULE_3__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"About Me"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"I'm Ashmeet Sehgal, a Software Engineer who enjoys creating stuff. I use this space as a compendium of things I have learned or created over the years."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"I spend my time on learing new tech, writing non-fiction stuff, learning piano."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"In conclusion:"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"emoji"},"\uD83D\uDCBB")," works as a software engineer "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"emoji"},"\uD83C\uDDEE\uD83C\uDDF3")," from India, and can read and write 3 different languages "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"emoji"},"\uD83C\uDF92")," love to bagpack to different places "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"emoji"},"\uD83D\uDE36")," ambivert in nature "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"emoji"},"\u270D")," write about life "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"emoji"},"\uD83D\uDCAA")," don't need tea, coffee or beer to work for hours "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"emoji"},"\uD83C\uDFB9")," can play piano "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"emoji"},"\uD83C\uDFCA")," swimming relaxes me "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"emoji"},"\uD83C\uDFA7")," music helps me to disconnect with the world "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"emoji"},"\uD83C\uDF31")," vegetarian "))));}}

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/utils/text.util.js":
/*!********************************!*\
  !*** ./src/utils/text.util.js ***!
  \********************************/
/*! exports provided: shortenText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortenText", function() { return shortenText; });
// eslint-disable-next-line import/prefer-default-export
function shortenText(text,startingPoint,maxLength){return text.length>maxLength?text.slice(startingPoint,maxLength):text;}

/***/ }),

/***/ "./static/images/bp.webp":
/*!*******************************!*\
  !*** ./static/images/bp.webp ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bp-07a0ec7fe8ef0cfd2477fa7084a3357d.webp";

/***/ }),

/***/ "./static/images/creator.webp":
/*!************************************!*\
  !*** ./static/images/creator.webp ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/creator-c054a24327a0a4af83d0ebb1aa24cbaa.webp";

/***/ }),

/***/ "./static/images/eng.webp":
/*!********************************!*\
  !*** ./static/images/eng.webp ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/eng-6c507b0202782473acc14dfe4cf3b1c5.webp";

/***/ }),

/***/ "./static/images/writer.webp":
/*!***********************************!*\
  !*** ./static/images/writer.webp ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/writer-e3fcd16f8352cf3d4fa507591e28c9f9.webp";

/***/ }),

/***/ "./static/logos/logo-48.webp":
/*!***********************************!*\
  !*** ./static/logos/logo-48.webp ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/webp;base64,UklGRhwEAABXRUJQVlA4IBAEAACQEQCdASowADAAPk0gjUQioiEXHAZkKATEtgBOmUI/GkCVN++7WiYX3PZh3tr+2eBfiA84SErg/4b9vPxnCDtbf4DgTMmf7LjH7jjjFy/Wfp6k9gr9detazpZsyKmzx7a1HwTtiipZaOq01N8Bw+/aVlk57370tplYAZfcADbnA5SaoyTOi1cjbN+nMDWXlci6TH9oEAD+/JT+ymRGvPSPnleBvqsv1wWu4Infgjc/uQYfcoeXlM4prA8GoOzkfRemQv6MWwsabCoEIGa5Qe56vR//VX4/MsGVo9/o8J/8NMK4/MIN/dbFLoTmOhtBz/pKNSIpPliNLxYvP/wa/SAgSYsV57+OcI6kC4c/7jM9knCg/3PySe3QfgTT5zZsdyd6Q4RxuNquYxfk6/g9qJWvKYQQlkQfw3sh/+JVkfjsT3NCuya2MV0Oj1v8e+ctmaV6s/x8HB+RA5nThENmo5fgvcyGiglI84bCxOPGpklPDoZFSXEx65th+yF0utxjtprJab9KFPjJWkTEckNtuFnYBSkMAszQDlr/5mWcngx5hlEn/pdW9+woisJcv6cU5RbY9qrN1VJcwXP3rzB3MmYKHm5ts/ogqvlMucNRzT795fS2erCxU5woxg15cbDEN0Ohlb747HkcUf4Jz/LUjsTMTL/xy0JQhtYL6BAXtfpkq3Jorb4BmFbrZcssGb7YH7BORoHY+bF0KVK53HwnDflhGXCtYelOnkZ7anERQrZQa8ujnMcFXn8k1NuJORsBTjMOfOe4mrl04aziWvn8WKvSyMS14/G6DIpMHJFHfbYf3LbHPPAS9CsvPhOKm+PHCpL0FNQR9moi7R9v/9XjN82BfvJj9gInVs49RpSoVBY4kV+R/a2KuIghK3w1XsablQTS1LkU1Ylgz0MKlzTJnK5ycvLW5QEnu96YhempvB8EBd/zi9xSTsSLmue+Tn5Ox2A123zkTC4Zew5EdyRb/1Lh325Zya6RMz2i/Hpnfck8/Wm6RFYDuZUIc4mySZPrTH0V3Rp774OvP5rye8cr5O+pEm/rYXzlTfU/NcwPP1gLNWDV3ZXgqsKwPwddjAXqlt0ApIrmhiE7DGDajEsvQ/tsG2bmA+CX4+Oo3jR3/4OG+I6SazaSQlY7Pw+Xg9HM/6Xlk1iZIiR5D35KQS42B2uPz2+eBhFqpugn8hzEqUcWT7N1tQcTamR8JPzzFT5vt/yw0K3IL69jJa5b756L6sfvSvP648c//53ALqYpkHVesMWXxhJ4FRdcHQkTp3SHUFrwiQ4L8OYvlNb4aaAlrwlsWeEhtL2Wqgd61hLNvc9mwaRbyOcnbwQNd3zJNK9+s58vb8Z/3aPYxMocQXIvAZHccZFpvXzAbLB4FMNroAAAAA=="

/***/ }),

/***/ "@reach/router":
/*!*********************************************************************************************************************!*\
  !*** external "/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/@reach/router/index.js" ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!******************************************************************************************************************************************************!*\
  !*** external "/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js" ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!***************************************************************************************************************!*\
  !*** external "/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/lodash/lodash.js" ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "lodash/keys":
/*!*************************************************************************************************************!*\
  !*** external "/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/lodash/keys.js" ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_keys__;

/***/ }),

/***/ "lodash/map":
/*!************************************************************************************************************!*\
  !*** external "/Users/a0s07y3/Documents/personal/Code/MyProj/as/ashmeetsehgal/node_modules/lodash/map.js" ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_map__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map
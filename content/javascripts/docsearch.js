/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@docsearch/js@3.2.0/dist/umd/index.js
 * Adaptation française par Ekylibre, https://doc.ekylibre.com
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*! @docsearch/js 3.2.0 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */
! function (e, t) {
   "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).docsearch = t()
}(this, (function () {
   "use strict";

   function e(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var r = Object.getOwnPropertySymbols(e);
         t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
         }))), n.push.apply(n, r)
      }
      return n
   }

   function t(t) {
      for (var n = 1; n < arguments.length; n++) {
         var o = null != arguments[n] ? arguments[n] : {};
         n % 2 ? e(Object(o), !0).forEach((function (e) {
            r(t, e, o[e])
         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach((function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
         }))
      }
      return t
   }

   function n(e) {
      return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
         return typeof e
      } : function (e) {
         return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, n(e)
   }

   function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
         value: n,
         enumerable: !0,
         configurable: !0,
         writable: !0
      }) : e[t] = n, e
   }

   function o() {
      return o = Object.assign || function (e) {
         for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
         }
         return e
      }, o.apply(this, arguments)
   }

   function c(e, t) {
      if (null == e) return {};
      var n, r, o = function (e, t) {
         if (null == e) return {};
         var n, r, o = {},
            c = Object.keys(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
         return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
         var c = Object.getOwnPropertySymbols(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
   }

   function i(e, t) {
      return function (e) {
         if (Array.isArray(e)) return e
      }(e) || function (e, t) {
         var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
         if (null == n) return;
         var r, o, c = [],
            i = !0,
            a = !1;
         try {
            for (n = n.call(e); !(i = (r = n.next()).done) && (c.push(r.value), !t || c.length !== t); i = !0);
         } catch (e) {
            a = !0, o = e
         } finally {
            try {
               i || null == n.return || n.return()
            } finally {
               if (a) throw o
            }
         }
         return c
      }(e, t) || u(e, t) || function () {
         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
   }

   function a(e) {
      return function (e) {
         if (Array.isArray(e)) return l(e)
      }(e) || function (e) {
         if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
      }(e) || u(e) || function () {
         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
   }

   function u(e, t) {
      if (e) {
         if ("string" == typeof e) return l(e, t);
         var n = Object.prototype.toString.call(e).slice(8, -1);
         return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
      }
   }

   function l(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
   }
   var s, f, p, m, d, h = {},
      v = [],
      y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

   function _(e, t) {
      for (var n in t) e[n] = t[n];
      return e
   }

   function b(e) {
      var t = e.parentNode;
      t && t.removeChild(e)
   }

   function g(e, t, n) {
      var r, o, c, i = arguments,
         a = {};
      for (c in t) "key" == c ? r = t[c] : "ref" == c ? o = t[c] : a[c] = t[c];
      if (arguments.length > 3)
         for (n = [n], c = 3; c < arguments.length; c++) n.push(i[c]);
      if (null != n && (a.children = n), "function" == typeof e && null != e.defaultProps)
         for (c in e.defaultProps) void 0 === a[c] && (a[c] = e.defaultProps[c]);
      return O(e, a, r, o, null)
   }

   function O(e, t, n, r, o) {
      var c = {
         type: e,
         props: t,
         key: n,
         ref: r,
         __k: null,
         __: null,
         __b: 0,
         __e: null,
         __d: void 0,
         __c: null,
         __h: null,
         constructor: void 0,
         __v: null == o ? ++s.__v : o
      };
      return null != s.vnode && s.vnode(c), c
   }

   function S(e) {
      return e.children
   }

   function E(e, t) {
      this.props = e, this.context = t
   }

   function w(e, t) {
      if (null == t) return e.__ ? w(e.__, e.__.__k.indexOf(e) + 1) : null;
      for (var n; t < e.__k.length; t++)
         if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
      return "function" == typeof e.type ? w(e) : null
   }

   function j(e) {
      var t, n;
      if (null != (e = e.__) && null != e.__c) {
         for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) {
               e.__e = e.__c.base = n.__e;
               break
            } return j(e)
      }
   }

   function P(e) {
      (!e.__d && (e.__d = !0) && f.push(e) && !I.__r++ || m !== s.debounceRendering) && ((m = s.debounceRendering) || p)(I)
   }

   function I() {
      for (var e; I.__r = f.length;) e = f.sort((function (e, t) {
         return e.__v.__b - t.__v.__b
      })), f = [], e.some((function (e) {
         var t, n, r, o, c, i;
         e.__d && (c = (o = (t = e).__v).__e, (i = t.__P) && (n = [], (r = _({}, o)).__v = o.__v + 1, L(i, o, r, t.__n, void 0 !== i.ownerSVGElement, null != o.__h ? [c] : null, n, null == c ? w(o) : c, o.__h), q(n, o), o.__e != c && j(o)))
      }))
   }

   function k(e, t, n, r, o, c, i, a, u, l) {
      var s, f, p, m, d, y, _, b = r && r.__k || v,
         g = b.length;
      for (n.__k = [], s = 0; s < t.length; s++)
         if (null != (m = n.__k[s] = null == (m = t[s]) || "boolean" == typeof m ? null : "string" == typeof m || "number" == typeof m ? O(null, m, null, null, m) : Array.isArray(m) ? O(S, {
               children: m
            }, null, null, null) : m.__b > 0 ? O(m.type, m.props, m.key, null, m.__v) : m)) {
            if (m.__ = n, m.__b = n.__b + 1, null === (p = b[s]) || p && m.key == p.key && m.type === p.type) b[s] = void 0;
            else
               for (f = 0; f < g; f++) {
                  if ((p = b[f]) && m.key == p.key && m.type === p.type) {
                     b[f] = void 0;
                     break
                  }
                  p = null
               }
            L(e, m, p = p || h, o, c, i, a, u, l), d = m.__e, (f = m.ref) && p.ref != f && (_ || (_ = []), p.ref && _.push(p.ref, null, m), _.push(f, m.__c || d, m)), null != d ? (null == y && (y = d), "function" == typeof m.type && null != m.__k && m.__k === p.__k ? m.__d = u = D(m, u, e) : u = A(e, m, p, b, d, u), l || "option" !== n.type ? "function" == typeof n.type && (n.__d = u) : e.value = "") : u && p.__e == u && u.parentNode != e && (u = w(p))
         } for (n.__e = y, s = g; s--;) null != b[s] && ("function" == typeof n.type && null != b[s].__e && b[s].__e == n.__d && (n.__d = w(r, s + 1)), U(b[s], b[s]));
      if (_)
         for (s = 0; s < _.length; s++) H(_[s], _[++s], _[++s])
   }

   function D(e, t, n) {
      var r, o;
      for (r = 0; r < e.__k.length; r++)(o = e.__k[r]) && (o.__ = e, t = "function" == typeof o.type ? D(o, t, n) : A(n, o, o, e.__k, o.__e, t));
      return t
   }

   function C(e, t) {
      return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function (e) {
         C(e, t)
      })) : t.push(e)), t
   }

   function A(e, t, n, r, o, c) {
      var i, a, u;
      if (void 0 !== t.__d) i = t.__d, t.__d = void 0;
      else if (null == n || o != c || null == o.parentNode) e: if (null == c || c.parentNode !== e) e.appendChild(o), i = null;
         else {
            for (a = c, u = 0;
               (a = a.nextSibling) && u < r.length; u += 2)
               if (a == o) break e;
            e.insertBefore(o, c), i = c
         } return void 0 !== i ? i : o.nextSibling
   }

   function x(e, t, n) {
      "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || y.test(t) ? n : n + "px"
   }

   function N(e, t, n, r, o) {
      var c;
      e: if ("style" === t)
         if ("string" == typeof n) e.style.cssText = n;
         else {
            if ("string" == typeof r && (e.style.cssText = r = ""), r)
               for (t in r) n && t in n || x(e.style, t, "");
            if (n)
               for (t in n) r && n[t] === r[t] || x(e.style, t, n[t])
         }
      else if ("o" === t[0] && "n" === t[1]) c = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + c] = n, n ? r || e.addEventListener(t, c ? T : R, c) : e.removeEventListener(t, c ? T : R, c);
      else if ("dangerouslySetInnerHTML" !== t) {
         if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
         else if ("href" !== t && "list" !== t && "form" !== t && "download" !== t && t in e) try {
            e[t] = null == n ? "" : n;
            break e
         } catch (e) {}
         "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
      }
   }

   function R(e) {
      this.l[e.type + !1](s.event ? s.event(e) : e)
   }

   function T(e) {
      this.l[e.type + !0](s.event ? s.event(e) : e)
   }

   function L(e, t, n, r, o, c, i, a, u) {
      var l, f, p, m, d, h, v, y, b, g, O, w = t.type;
      if (void 0 !== t.constructor) return null;
      null != n.__h && (u = n.__h, a = t.__e = n.__e, t.__h = null, c = [a]), (l = s.__b) && l(t);
      try {
         e: if ("function" == typeof w) {
            if (y = t.props, b = (l = w.contextType) && r[l.__c], g = l ? b ? b.props.value : l.__ : r, n.__c ? v = (f = t.__c = n.__c).__ = f.__E : ("prototype" in w && w.prototype.render ? t.__c = f = new w(y, g) : (t.__c = f = new E(y, g), f.constructor = w, f.render = F), b && b.sub(f), f.props = y, f.state || (f.state = {}), f.context = g, f.__n = r, p = f.__d = !0, f.__h = []), null == f.__s && (f.__s = f.state), null != w.getDerivedStateFromProps && (f.__s == f.state && (f.__s = _({}, f.__s)), _(f.__s, w.getDerivedStateFromProps(y, f.__s))), m = f.props, d = f.state, p) null == w.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(), null != f.componentDidMount && f.__h.push(f.componentDidMount);
            else {
               if (null == w.getDerivedStateFromProps && y !== m && null != f.componentWillReceiveProps && f.componentWillReceiveProps(y, g), !f.__e && null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(y, f.__s, g) || t.__v === n.__v) {
                  f.props = y, f.state = f.__s, t.__v !== n.__v && (f.__d = !1), f.__v = t, t.__e = n.__e, t.__k = n.__k, f.__h.length && i.push(f);
                  break e
               }
               null != f.componentWillUpdate && f.componentWillUpdate(y, f.__s, g), null != f.componentDidUpdate && f.__h.push((function () {
                  f.componentDidUpdate(m, d, h)
               }))
            }
            f.context = g, f.props = y, f.state = f.__s, (l = s.__r) && l(t), f.__d = !1, f.__v = t, f.__P = e, l = f.render(f.props, f.state, f.context), f.state = f.__s, null != f.getChildContext && (r = _(_({}, r), f.getChildContext())), p || null == f.getSnapshotBeforeUpdate || (h = f.getSnapshotBeforeUpdate(m, d)), O = null != l && l.type === S && null == l.key ? l.props.children : l, k(e, Array.isArray(O) ? O : [O], t, n, r, o, c, i, a, u), f.base = t.__e, t.__h = null, f.__h.length && i.push(f), v && (f.__E = f.__ = null), f.__e = !1
         } else null == c && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = M(n.__e, t, n, r, o, c, i, u);
         (l = s.diffed) && l(t)
      }
      catch (e) {
         t.__v = null, (u || null != c) && (t.__e = a, t.__h = !!u, c[c.indexOf(a)] = null), s.__e(e, t, n)
      }
   }

   function q(e, t) {
      s.__c && s.__c(t, e), e.some((function (t) {
         try {
            e = t.__h, t.__h = [], e.some((function (e) {
               e.call(t)
            }))
         } catch (e) {
            s.__e(e, t.__v)
         }
      }))
   }

   function M(e, t, n, r, o, c, i, a) {
      var u, l, s, f, p = n.props,
         m = t.props,
         d = t.type,
         y = 0;
      if ("svg" === d && (o = !0), null != c)
         for (; y < c.length; y++)
            if ((u = c[y]) && (u === e || (d ? u.localName == d : 3 == u.nodeType))) {
               e = u, c[y] = null;
               break
            } if (null == e) {
         if (null === d) return document.createTextNode(m);
         e = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, m.is && m), c = null, a = !1
      }
      if (null === d) p === m || a && e.data === m || (e.data = m);
      else {
         if (c = c && v.slice.call(e.childNodes), l = (p = n.props || h).dangerouslySetInnerHTML, s = m.dangerouslySetInnerHTML, !a) {
            if (null != c)
               for (p = {}, f = 0; f < e.attributes.length; f++) p[e.attributes[f].name] = e.attributes[f].value;
            (s || l) && (s && (l && s.__html == l.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""))
         }
         if (function (e, t, n, r, o) {
               var c;
               for (c in n) "children" === c || "key" === c || c in t || N(e, c, null, n[c], r);
               for (c in t) o && "function" != typeof t[c] || "children" === c || "key" === c || "value" === c || "checked" === c || n[c] === t[c] || N(e, c, t[c], n[c], r)
            }(e, m, p, o, a), s) t.__k = [];
         else if (y = t.props.children, k(e, Array.isArray(y) ? y : [y], t, n, r, o && "foreignObject" !== d, c, i, e.firstChild, a), null != c)
            for (y = c.length; y--;) null != c[y] && b(c[y]);
         a || ("value" in m && void 0 !== (y = m.value) && (y !== e.value || "progress" === d && !y) && N(e, "value", y, p.value, !1), "checked" in m && void 0 !== (y = m.checked) && y !== e.checked && N(e, "checked", y, p.checked, !1))
      }
      return e
   }

   function H(e, t, n) {
      try {
         "function" == typeof e ? e(t) : e.current = t
      } catch (e) {
         s.__e(e, n)
      }
   }

   function U(e, t, n) {
      var r, o, c;
      if (s.unmount && s.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || H(r, null, t)), n || "function" == typeof e.type || (n = null != (o = e.__e)), e.__e = e.__d = void 0, null != (r = e.__c)) {
         if (r.componentWillUnmount) try {
            r.componentWillUnmount()
         } catch (e) {
            s.__e(e, t)
         }
         r.base = r.__P = null
      }
      if (r = e.__k)
         for (c = 0; c < r.length; c++) r[c] && U(r[c], t, n);
      null != o && b(o)
   }

   function F(e, t, n) {
      return this.constructor(e, n)
   }

   function B(e, t, n) {
      var r, o, c;
      s.__ && s.__(e, t), o = (r = "function" == typeof n) ? null : n && n.__k || t.__k, c = [], L(t, e = (!r && n || t).__k = g(S, null, [e]), o || h, h, void 0 !== t.ownerSVGElement, !r && n ? [n] : o ? null : t.firstChild ? v.slice.call(t.childNodes) : null, c, !r && n ? n : o ? o.__e : t.firstChild, r), q(c, e)
   }

   function V(e, t) {
      B(e, t, V)
   }

   function z(e, t, n) {
      var r, o, c, i = arguments,
         a = _({}, e.props);
      for (c in t) "key" == c ? r = t[c] : "ref" == c ? o = t[c] : a[c] = t[c];
      if (arguments.length > 3)
         for (n = [n], c = 3; c < arguments.length; c++) n.push(i[c]);
      return null != n && (a.children = n), O(e.type, a, r || e.key, o || e.ref, null)
   }
   s = {
      __e: function (e, t) {
         for (var n, r, o; t = t.__;)
            if ((n = t.__c) && !n.__) try {
               if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o) return n.__E = n
            } catch (t) {
               e = t
            }
         throw e
      },
      __v: 0
   }, E.prototype.setState = function (e, t) {
      var n;
      n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = _({}, this.state), "function" == typeof e && (e = e(_({}, n), this.props)), e && _(n, e), null != e && this.__v && (t && this.__h.push(t), P(this))
   }, E.prototype.forceUpdate = function (e) {
      this.__v && (this.__e = !0, e && this.__h.push(e), P(this))
   }, E.prototype.render = S, f = [], p = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, I.__r = 0, d = 0;
   var W, K, J, $ = 0,
      Q = [],
      Y = s.__b,
      G = s.__r,
      Z = s.diffed,
      X = s.__c,
      ee = s.unmount;

   function te(e, t) {
      s.__h && s.__h(K, e, $ || t), $ = 0;
      var n = K.__H || (K.__H = {
         __: [],
         __h: []
      });
      return e >= n.__.length && n.__.push({}), n.__[e]
   }

   function ne(e) {
      return $ = 1, re(pe, e)
   }

   function re(e, t, n) {
      var r = te(W++, 2);
      return r.t = e, r.__c || (r.__ = [n ? n(t) : pe(void 0, t), function (e) {
         var t = r.t(r.__[0], e);
         r.__[0] !== t && (r.__ = [t, r.__[1]], r.__c.setState({}))
      }], r.__c = K), r.__
   }

   function oe(e, t) {
      var n = te(W++, 3);
      !s.__s && fe(n.__H, t) && (n.__ = e, n.__H = t, K.__H.__h.push(n))
   }

   function ce(e, t) {
      var n = te(W++, 4);
      !s.__s && fe(n.__H, t) && (n.__ = e, n.__H = t, K.__h.push(n))
   }

   function ie(e, t) {
      var n = te(W++, 7);
      return fe(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__
   }

   function ae() {
      Q.forEach((function (e) {
         if (e.__P) try {
            e.__H.__h.forEach(le), e.__H.__h.forEach(se), e.__H.__h = []
         } catch (t) {
            e.__H.__h = [], s.__e(t, e.__v)
         }
      })), Q = []
   }
   s.__b = function (e) {
      K = null, Y && Y(e)
   }, s.__r = function (e) {
      G && G(e), W = 0;
      var t = (K = e.__c).__H;
      t && (t.__h.forEach(le), t.__h.forEach(se), t.__h = [])
   }, s.diffed = function (e) {
      Z && Z(e);
      var t = e.__c;
      t && t.__H && t.__H.__h.length && (1 !== Q.push(t) && J === s.requestAnimationFrame || ((J = s.requestAnimationFrame) || function (e) {
         var t, n = function () {
               clearTimeout(r), ue && cancelAnimationFrame(t), setTimeout(e)
            },
            r = setTimeout(n, 100);
         ue && (t = requestAnimationFrame(n))
      })(ae)), K = void 0
   }, s.__c = function (e, t) {
      t.some((function (e) {
         try {
            e.__h.forEach(le), e.__h = e.__h.filter((function (e) {
               return !e.__ || se(e)
            }))
         } catch (n) {
            t.some((function (e) {
               e.__h && (e.__h = [])
            })), t = [], s.__e(n, e.__v)
         }
      })), X && X(e, t)
   }, s.unmount = function (e) {
      ee && ee(e);
      var t = e.__c;
      if (t && t.__H) try {
         t.__H.__.forEach(le)
      } catch (e) {
         s.__e(e, t.__v)
      }
   };
   var ue = "function" == typeof requestAnimationFrame;

   function le(e) {
      var t = K;
      "function" == typeof e.__c && e.__c(), K = t
   }

   function se(e) {
      var t = K;
      e.__c = e.__(), K = t
   }

   function fe(e, t) {
      return !e || e.length !== t.length || t.some((function (t, n) {
         return t !== e[n]
      }))
   }

   function pe(e, t) {
      return "function" == typeof t ? t(e) : t
   }

   function me(e, t) {
      for (var n in t) e[n] = t[n];
      return e
   }

   function de(e, t) {
      for (var n in e)
         if ("__source" !== n && !(n in t)) return !0;
      for (var r in t)
         if ("__source" !== r && e[r] !== t[r]) return !0;
      return !1
   }

   function he(e) {
      this.props = e
   }(he.prototype = new E).isPureReactComponent = !0, he.prototype.shouldComponentUpdate = function (e, t) {
      return de(this.props, e) || de(this.state, t)
   };
   var ve = s.__b;
   s.__b = function (e) {
      e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ve && ve(e)
   };
   var ye = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
   var _e = function (e, t) {
         return null == e ? null : C(C(e).map(t))
      },
      be = {
         map: _e,
         forEach: _e,
         count: function (e) {
            return e ? C(e).length : 0
         },
         only: function (e) {
            var t = C(e);
            if (1 !== t.length) throw "Children.only";
            return t[0]
         },
         toArray: C
      },
      ge = s.__e;

   function Oe() {
      this.__u = 0, this.t = null, this.__b = null
   }

   function Se(e) {
      var t = e.__.__c;
      return t && t.__e && t.__e(e)
   }

   function Ee() {
      this.u = null, this.o = null
   }
   s.__e = function (e, t, n) {
      if (e.then)
         for (var r, o = t; o = o.__;)
            if ((r = o.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
      ge(e, t, n)
   }, (Oe.prototype = new E).__c = function (e, t) {
      var n = t.__c,
         r = this;
      null == r.t && (r.t = []), r.t.push(n);
      var o = Se(r.__v),
         c = !1,
         i = function () {
            c || (c = !0, n.componentWillUnmount = n.__c, o ? o(a) : a())
         };
      n.__c = n.componentWillUnmount, n.componentWillUnmount = function () {
         i(), n.__c && n.__c()
      };
      var a = function () {
            if (!--r.__u) {
               if (r.state.__e) {
                  var e = r.state.__e;
                  r.__v.__k[0] = function e(t, n, r) {
                     return t && (t.__v = null, t.__k = t.__k && t.__k.map((function (t) {
                        return e(t, n, r)
                     })), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t
                  }(e, e.__c.__P, e.__c.__O)
               }
               var t;
               for (r.setState({
                     __e: r.__b = null
                  }); t = r.t.pop();) t.forceUpdate()
            }
         },
         u = !0 === t.__h;
      r.__u++ || u || r.setState({
         __e: r.__b = r.__v.__k[0]
      }), e.then(i, i)
   }, Oe.prototype.componentWillUnmount = function () {
      this.t = []
   }, Oe.prototype.render = function (e, t) {
      if (this.__b) {
         if (this.__v.__k) {
            var n = document.createElement("div"),
               r = this.__v.__k[0].__c;
            this.__v.__k[0] = function e(t, n, r) {
               return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function (e) {
                  "function" == typeof e.__c && e.__c()
               })), t.__c.__H = null), null != (t = me({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map((function (t) {
                  return e(t, n, r)
               }))), t
            }(this.__b, n, r.__O = r.__P)
         }
         this.__b = null
      }
      var o = t.__e && g(S, null, e.fallback);
      return o && (o.__h = null), [g(S, null, t.__e ? null : e.children), o]
   };
   var we = function (e, t, n) {
      if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
         for (n = e.u; n;) {
            for (; n.length > 3;) n.pop()();
            if (n[1] < n[0]) break;
            e.u = n = n[2]
         }
   };

   function je(e) {
      return this.getChildContext = function () {
         return e.context
      }, e.children
   }

   function Pe(e) {
      var t = this,
         n = e.i;
      t.componentWillUnmount = function () {
         B(null, t.l), t.l = null, t.i = null
      }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
         nodeType: 1,
         parentNode: n,
         childNodes: [],
         appendChild: function (e) {
            this.childNodes.push(e), t.i.appendChild(e)
         },
         insertBefore: function (e, n) {
            this.childNodes.push(e), t.i.appendChild(e)
         },
         removeChild: function (e) {
            this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
         }
      }), B(g(je, {
         context: t.context
      }, e.__v), t.l)) : t.l && t.componentWillUnmount()
   }

   function Ie(e, t) {
      return g(Pe, {
         __v: e,
         i: t
      })
   }(Ee.prototype = new E).__e = function (e) {
      var t = this,
         n = Se(t.__v),
         r = t.o.get(e);
      return r[0]++,
         function (o) {
            var c = function () {
               t.props.revealOrder ? (r.push(o), we(t, e, r)) : o()
            };
            n ? n(c) : c()
         }
   }, Ee.prototype.render = function (e) {
      this.u = null, this.o = new Map;
      var t = C(e.children);
      e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
      for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
      return e.children
   }, Ee.prototype.componentDidUpdate = Ee.prototype.componentDidMount = function () {
      var e = this;
      this.o.forEach((function (t, n) {
         we(e, n, t)
      }))
   };
   var ke = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
      De = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
      Ce = function (e) {
         return ("undefined" != typeof Symbol && "symbol" == n(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(e)
      };

   function Ae(e, t, n) {
      return null == t.__k && (t.textContent = ""), B(e, t), "function" == typeof n && n(), e ? e.__c : null
   }
   E.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function (e) {
      Object.defineProperty(E.prototype, e, {
         configurable: !0,
         get: function () {
            return this["UNSAFE_" + e]
         },
         set: function (t) {
            Object.defineProperty(this, e, {
               configurable: !0,
               writable: !0,
               value: t
            })
         }
      })
   }));
   var xe = s.event;

   function Ne() {}

   function Re() {
      return this.cancelBubble
   }

   function Te() {
      return this.defaultPrevented
   }
   s.event = function (e) {
      return xe && (e = xe(e)), e.persist = Ne, e.isPropagationStopped = Re, e.isDefaultPrevented = Te, e.nativeEvent = e
   };
   var Le, qe = {
         configurable: !0,
         get: function () {
            return this.class
         }
      },
      Me = s.vnode;
   s.vnode = function (e) {
      var t = e.type,
         n = e.props,
         r = n;
      if ("string" == typeof t) {
         for (var o in r = {}, n) {
            var c = n[o];
            "value" === o && "defaultValue" in n && null == c || ("defaultValue" === o && "value" in n && null == n.value ? o = "value" : "download" === o && !0 === c ? c = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !Ce(n.type) ? o = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : De.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === c && (c = void 0), r[o] = c)
         }
         "select" == t && r.multiple && Array.isArray(r.value) && (r.value = C(n.children).forEach((function (e) {
            e.props.selected = -1 != r.value.indexOf(e.props.value)
         }))), "select" == t && null != r.defaultValue && (r.value = C(n.children).forEach((function (e) {
            e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
         }))), e.props = r
      }
      t && n.class != n.className && (qe.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", qe)), e.$$typeof = ke, Me && Me(e)
   };
   var He = s.__r;
   s.__r = function (e) {
      He && He(e), Le = e.__c
   };
   var Ue = {
      ReactCurrentDispatcher: {
         current: {
            readContext: function (e) {
               return Le.__n[e.__c].props.value
            }
         }
      }
   };
   "object" == ("undefined" == typeof performance ? "undefined" : n(performance)) && "function" == typeof performance.now && performance.now.bind(performance);

   function Fe(e) {
      return !!e && e.$$typeof === ke
   }
   var Be = {
      useState: ne,
      useReducer: re,
      useEffect: oe,
      useLayoutEffect: ce,
      useRef: function (e) {
         return $ = 5, ie((function () {
            return {
               current: e
            }
         }), [])
      },
      useImperativeHandle: function (e, t, n) {
         $ = 6, ce((function () {
            "function" == typeof e ? e(t()) : e && (e.current = t())
         }), null == n ? n : n.concat(e))
      },
      useMemo: ie,
      useCallback: function (e, t) {
         return $ = 8, ie((function () {
            return e
         }), t)
      },
      useContext: function (e) {
         var t = K.context[e.__c],
            n = te(W++, 9);
         return n.__c = e, t ? (null == n.__ && (n.__ = !0, t.sub(K)), t.props.value) : e.__
      },
      useDebugValue: function (e, t) {
         s.useDebugValue && s.useDebugValue(t ? t(e) : e)
      },
      version: "16.8.0",
      Children: be,
      render: Ae,
      hydrate: function (e, t, n) {
         return V(e, t), "function" == typeof n && n(), e ? e.__c : null
      },
      unmountComponentAtNode: function (e) {
         return !!e.__k && (B(null, e), !0)
      },
      createPortal: Ie,
      createElement: g,
      createContext: function (e, t) {
         var n = {
            __c: t = "__cC" + d++,
            __: e,
            Consumer: function (e, t) {
               return e.children(t)
            },
            Provider: function (e) {
               var n, r;
               return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function () {
                  return r
               }, this.shouldComponentUpdate = function (e) {
                  this.props.value !== e.value && n.some(P)
               }, this.sub = function (e) {
                  n.push(e);
                  var t = e.componentWillUnmount;
                  e.componentWillUnmount = function () {
                     n.splice(n.indexOf(e), 1), t && t.call(e)
                  }
               }), e.children
            }
         };
         return n.Provider.__ = n.Consumer.contextType = n
      },
      createFactory: function (e) {
         return g.bind(null, e)
      },
      cloneElement: function (e) {
         return Fe(e) ? z.apply(null, arguments) : e
      },
      createRef: function () {
         return {
            current: null
         }
      },
      Fragment: S,
      isValidElement: Fe,
      findDOMNode: function (e) {
         return e && (e.base || 1 === e.nodeType && e) || null
      },
      Component: E,
      PureComponent: he,
      memo: function (e, t) {
         function n(e) {
            var n = this.props.ref,
               r = n == e.ref;
            return !r && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !r : de(this.props, e)
         }

         function r(t) {
            return this.shouldComponentUpdate = n, g(e, t)
         }
         return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
      },
      forwardRef: function (e) {
         function t(t, r) {
            var o = me({}, t);
            return delete o.ref, e(o, (r = t.ref || r) && ("object" != n(r) || "current" in r) ? r : null)
         }
         return t.$$typeof = ye, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
      },
      unstable_batchedUpdates: function (e, t) {
         return e(t)
      },
      StrictMode: S,
      Suspense: Oe,
      SuspenseList: Ee,
      lazy: function (e) {
         var t, n, r;

         function o(o) {
            if (t || (t = e()).then((function (e) {
                  n = e.default || e
               }), (function (e) {
                  r = e
               })), r) throw r;
            if (!n) throw t;
            return g(n, o)
         }
         return o.displayName = "Lazy", o.__f = !0, o
      },
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ue
   };

   function Ve() {
      return Be.createElement("svg", {
         width: "15",
         height: "15",
         className: "DocSearch-Control-Key-Icon"
      }, Be.createElement("path", {
         d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",
         strokeWidth: "1.2",
         stroke: "currentColor",
         fill: "none",
         strokeLinecap: "square"
      }))
   }

   function ze() {
      return Be.createElement("svg", {
         width: "20",
         height: "20",
         className: "DocSearch-Search-Icon",
         viewBox: "0 0 20 20"
      }, Be.createElement("path", {
         d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
         stroke: "currentColor",
         fill: "none",
         fillRule: "evenodd",
         strokeLinecap: "round",
         strokeLinejoin: "round"
      }))
   }
   var We = ["translations"];

   function Ke() {
      return Ke = Object.assign || function (e) {
         for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
         }
         return e
      }, Ke.apply(this, arguments)
   }

   function Je(e, t) {
      return function (e) {
         if (Array.isArray(e)) return e
      }(e) || function (e, t) {
         var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
         if (null == n) return;
         var r, o, c = [],
            i = !0,
            a = !1;
         try {
            for (n = n.call(e); !(i = (r = n.next()).done) && (c.push(r.value), !t || c.length !== t); i = !0);
         } catch (e) {
            a = !0, o = e
         } finally {
            try {
               i || null == n.return || n.return()
            } finally {
               if (a) throw o
            }
         }
         return c
      }(e, t) || function (e, t) {
         if (!e) return;
         if ("string" == typeof e) return $e(e, t);
         var n = Object.prototype.toString.call(e).slice(8, -1);
         "Object" === n && e.constructor && (n = e.constructor.name);
         if ("Map" === n || "Set" === n) return Array.from(e);
         if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $e(e, t)
      }(e, t) || function () {
         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
   }

   function $e(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
   }

   function Qe(e, t) {
      if (null == e) return {};
      var n, r, o = function (e, t) {
         if (null == e) return {};
         var n, r, o = {},
            c = Object.keys(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
         return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
         var c = Object.getOwnPropertySymbols(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
   }
   var Ye = "Ctrl";
   var Ge = Be.forwardRef((function (e, t) {
      var n = e.translations,
         r = void 0 === n ? {} : n,
         o = Qe(e, We),
         c = r.buttonText,
         i = void 0 === c ? "Rechercher…" : c,
         a = r.buttonAriaLabel,
         u = void 0 === a ? "Rechercher…" : a,
         l = Je(ne(null), 2),
         s = l[0],
         f = l[1];
      return oe((function () {
         "undefined" != typeof navigator && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? f("⌘") : f(Ye))
      }), []), Be.createElement("button", Ke({
         type: "button",
         className: "DocSearch DocSearch-Button",
         "aria-label": u
      }, o, {
         ref: t
      }), Be.createElement("span", {
         className: "DocSearch-Button-Container"
      }, Be.createElement(ze, null), Be.createElement("span", {
         className: "DocSearch-Button-Placeholder"
      }, i)), Be.createElement("span", {
         className: "DocSearch-Button-Keys"
      }, null !== s && Be.createElement(Be.Fragment, null, Be.createElement("kbd", {
         className: "DocSearch-Button-Key"
      }, s === Ye ? Be.createElement(Ve, null) : s), Be.createElement("kbd", {
         className: "DocSearch-Button-Key"
      }, "K"))))
   }));

   function Ze(e) {
      return e.reduce((function (e, t) {
         return e.concat(t)
      }), [])
   }
   var Xe = 0;

   function et(e) {
      return 0 === e.collections.length ? 0 : e.collections.reduce((function (e, t) {
         return e + t.items.length
      }), 0)
   }
   var tt = function () {},
      nt = [{
         segment: "autocomplete-core",
         version: "1.7.1"
      }];

   function rt(e, t) {
      var n = t;
      return {
         then: function (t, r) {
            return rt(e.then(ct(t, n, e), ct(r, n, e)), n)
         },
         catch: function (t) {
            return rt(e.catch(ct(t, n, e)), n)
         },
         finally: function (t) {
            return t && n.onCancelList.push(t), rt(e.finally(ct(t && function () {
               return n.onCancelList = [], t()
            }, n, e)), n)
         },
         cancel: function () {
            n.isCanceled = !0;
            var e = n.onCancelList;
            n.onCancelList = [], e.forEach((function (e) {
               e()
            }))
         },
         isCanceled: function () {
            return !0 === n.isCanceled
         }
      }
   }

   function ot(e) {
      return rt(e, {
         isCanceled: !1,
         onCancelList: []
      })
   }

   function ct(e, t, n) {
      return e ? function (n) {
         return t.isCanceled ? n : e(n)
      } : n
   }

   function it(e, t, n, r) {
      if (!n) return null;
      if (e < 0 && (null === t || null !== r && 0 === t)) return n + e;
      var o = (null === t ? -1 : t) + e;
      return o <= -1 || o >= n ? null === r ? null : 0 : o
   }

   function at(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var r = Object.getOwnPropertySymbols(e);
         t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
         }))), n.push.apply(n, r)
      }
      return n
   }

   function ut(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
         value: n,
         enumerable: !0,
         configurable: !0,
         writable: !0
      }) : e[t] = n, e
   }

   function lt(e, t) {
      var n = [];
      return Promise.resolve(e(t)).then((function (e) {
         return Promise.all(e.filter((function (e) {
            return Boolean(e)
         })).map((function (e) {
            if (e.sourceId, n.includes(e.sourceId)) throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e.sourceId), " is not unique."));
            n.push(e.sourceId);
            var t = function (e) {
               for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? at(Object(n), !0).forEach((function (t) {
                     ut(e, t, n[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : at(Object(n)).forEach((function (t) {
                     Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                  }))
               }
               return e
            }({
               getItemInputValue: function (e) {
                  return e.state.query
               },
               getItemUrl: function () {},
               onSelect: function (e) {
                  (0, e.setIsOpen)(!1)
               },
               onActive: tt
            }, e);
            return Promise.resolve(t)
         })))
      }))
   }

   function st(e) {
      var t = function (e) {
         var t = e.collections.map((function (e) {
            return e.items.length
         })).reduce((function (e, t, n) {
            var r = (e[n - 1] || 0) + t;
            return e.push(r), e
         }), []).reduce((function (t, n) {
            return n <= e.activeItemId ? t + 1 : t
         }), 0);
         return e.collections[t]
      }(e);
      if (!t) return null;
      var n = t.items[function (e) {
            for (var t = e.state, n = e.collection, r = !1, o = 0, c = 0; !1 === r;) {
               var i = t.collections[o];
               if (i === n) {
                  r = !0;
                  break
               }
               c += i.items.length, o++
            }
            return t.activeItemId - c
         }({
            state: e,
            collection: t
         })],
         r = t.source;
      return {
         item: n,
         itemInputValue: r.getItemInputValue({
            item: n,
            state: e
         }),
         itemUrl: r.getItemUrl({
            item: n,
            state: e
         }),
         source: r
      }
   }
   var ft = /((gt|sm)-|galaxy nexus)|samsung[- ]/i;

   function pt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var r = Object.getOwnPropertySymbols(e);
         t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
         }))), n.push.apply(n, r)
      }
      return n
   }

   function mt(e) {
      for (var t = 1; t < arguments.length; t++) {
         var n = null != arguments[t] ? arguments[t] : {};
         t % 2 ? pt(Object(n), !0).forEach((function (t) {
            dt(e, t, n[t])
         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pt(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
         }))
      }
      return e
   }

   function dt(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
         value: n,
         enumerable: !0,
         configurable: !0,
         writable: !0
      }) : e[t] = n, e
   }

   function ht(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var r = Object.getOwnPropertySymbols(e);
         t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
         }))), n.push.apply(n, r)
      }
      return n
   }

   function vt(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
         value: n,
         enumerable: !0,
         configurable: !0,
         writable: !0
      }) : e[t] = n, e
   }

   function yt(e, t, n) {
      var r, o = t.initialState;
      return {
         getState: function () {
            return o
         },
         dispatch: function (r, c) {
            var i = function (e) {
               for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? ht(Object(n), !0).forEach((function (t) {
                     vt(e, t, n[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ht(Object(n)).forEach((function (t) {
                     Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                  }))
               }
               return e
            }({}, o);
            o = e(o, {
               type: r,
               props: t,
               payload: c
            }), n({
               state: o,
               prevState: i
            })
         },
         pendingRequests: (r = [], {
            add: function (e) {
               return r.push(e), e.finally((function () {
                  r = r.filter((function (t) {
                     return t !== e
                  }))
               }))
            },
            cancelAll: function () {
               r.forEach((function (e) {
                  return e.cancel()
               }))
            },
            isEmpty: function () {
               return 0 === r.length
            }
         })
      }
   }

   function _t(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var r = Object.getOwnPropertySymbols(e);
         t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
         }))), n.push.apply(n, r)
      }
      return n
   }

   function bt(e) {
      for (var t = 1; t < arguments.length; t++) {
         var n = null != arguments[t] ? arguments[t] : {};
         t % 2 ? _t(Object(n), !0).forEach((function (t) {
            gt(e, t, n[t])
         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _t(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
         }))
      }
      return e
   }

   function gt(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
         value: n,
         enumerable: !0,
         configurable: !0,
         writable: !0
      }) : e[t] = n, e
   }

   function Ot(e) {
      return function (e) {
         if (Array.isArray(e)) return St(e)
      }(e) || function (e) {
         if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
      }(e) || function (e, t) {
         if (!e) return;
         if ("string" == typeof e) return St(e, t);
         var n = Object.prototype.toString.call(e).slice(8, -1);
         "Object" === n && e.constructor && (n = e.constructor.name);
         if ("Map" === n || "Set" === n) return Array.from(e);
         if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return St(e, t)
      }(e) || function () {
         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
   }

   function St(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
   }

   function Et(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var r = Object.getOwnPropertySymbols(e);
         t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
         }))), n.push.apply(n, r)
      }
      return n
   }

   function wt(e) {
      for (var t = 1; t < arguments.length; t++) {
         var n = null != arguments[t] ? arguments[t] : {};
         t % 2 ? Et(Object(n), !0).forEach((function (t) {
            jt(e, t, n[t])
         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Et(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
         }))
      }
      return e
   }

   function jt(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
         value: n,
         enumerable: !0,
         configurable: !0,
         writable: !0
      }) : e[t] = n, e
   }

   function Pt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var r = Object.getOwnPropertySymbols(e);
         t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
         }))), n.push.apply(n, r)
      }
      return n
   }

   function It(e) {
      for (var t = 1; t < arguments.length; t++) {
         var n = null != arguments[t] ? arguments[t] : {};
         t % 2 ? Pt(Object(n), !0).forEach((function (t) {
            kt(e, t, n[t])
         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pt(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
         }))
      }
      return e
   }

   function kt(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
         value: n,
         enumerable: !0,
         configurable: !0,
         writable: !0
      }) : e[t] = n, e
   }

   function Dt(e) {
      return function (e) {
         if (Array.isArray(e)) return Ct(e)
      }(e) || function (e) {
         if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
      }(e) || function (e, t) {
         if (!e) return;
         if ("string" == typeof e) return Ct(e, t);
         var n = Object.prototype.toString.call(e).slice(8, -1);
         "Object" === n && e.constructor && (n = e.constructor.name);
         if ("Map" === n || "Set" === n) return Array.from(e);
         if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ct(e, t)
      }(e) || function () {
         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
   }

   function Ct(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
   }

   function At(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var r = Object.getOwnPropertySymbols(e);
         t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
         }))), n.push.apply(n, r)
      }
      return n
   }

   function xt(e) {
      for (var t = 1; t < arguments.length; t++) {
         var n = null != arguments[t] ? arguments[t] : {};
         t % 2 ? At(Object(n), !0).forEach((function (t) {
            Nt(e, t, n[t])
         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : At(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
         }))
      }
      return e
   }

   function Nt(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
         value: n,
         enumerable: !0,
         configurable: !0,
         writable: !0
      }) : e[t] = n, e
   }

   function Rt(e) {
      return Boolean(e.execute)
   }

   function Tt(e, t) {
      return n = e, Boolean(null == n ? void 0 : n.execute) ? xt(xt({}, e), {}, {
         requests: e.queries.map((function (n) {
            return {
               query: n,
               sourceId: t,
               transformResponse: e.transformResponse
            }
         }))
      }) : {
         items: e,
         sourceId: t
      };
      var n
   }

   function Lt(e) {
      var t = e.reduce((function (e, t) {
         if (!Rt(t)) return e.push(t), e;
         var n = t.searchClient,
            r = t.execute,
            o = t.requesterId,
            c = t.requests,
            i = e.find((function (e) {
               return Rt(t) && Rt(e) && e.searchClient === n && Boolean(o) && e.requesterId === o
            }));
         if (i) {
            var a;
            (a = i.items).push.apply(a, Dt(c))
         } else {
            var u = {
               execute: r,
               requesterId: o,
               items: c,
               searchClient: n
            };
            e.push(u)
         }
         return e
      }), []).map((function (e) {
         if (!Rt(e)) return Promise.resolve(e);
         var t = e,
            n = t.execute,
            r = t.items;
         return n({
            searchClient: t.searchClient,
            requests: r
         })
      }));
      return Promise.all(t).then((function (e) {
         return Ze(e)
      }))
   }

   function qt(e, t) {
      return t.map((function (t) {
         var n = e.filter((function (e) {
               return e.sourceId === t.sourceId
            })),
            r = n.map((function (e) {
               return e.items
            })),
            o = n[0].transformResponse,
            c = o ? o(function (e) {
               var t = e.map((function (e) {
                  var t;
                  return mt(mt({}, e), {}, {
                     hits: null === (t = e.hits) || void 0 === t ? void 0 : t.map((function (t) {
                        return mt(mt({}, t), {}, {
                           __autocomplete_indexName: e.index,
                           __autocomplete_queryID: e.queryID
                        })
                     }))
                  })
               }));
               return {
                  results: t,
                  hits: t.map((function (e) {
                     return e.hits
                  })).filter(Boolean),
                  facetHits: t.map((function (e) {
                     var t;
                     return null === (t = e.facetHits) || void 0 === t ? void 0 : t.map((function (e) {
                        return {
                           label: e.value,
                           count: e.count,
                           _highlightResult: {
                              label: {
                                 value: e.highlighted
                              }
                           }
                        }
                     }))
                  })).filter(Boolean)
               }
            }(r)) : r;
         return c.every(Boolean), 'The `getItems` function from source "'.concat(t.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"), {
            source: t,
            items: c
         }
      }))
   }
   var Mt = ["event", "nextState", "props", "query", "refresh", "store"];

   function Ht(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var r = Object.getOwnPropertySymbols(e);
         t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
         }))), n.push.apply(n, r)
      }
      return n
   }

   function Ut(e) {
      for (var t = 1; t < arguments.length; t++) {
         var n = null != arguments[t] ? arguments[t] : {};
         t % 2 ? Ht(Object(n), !0).forEach((function (t) {
            Ft(e, t, n[t])
         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ht(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
         }))
      }
      return e
   }

   function Ft(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
         value: n,
         enumerable: !0,
         configurable: !0,
         writable: !0
      }) : e[t] = n, e
   }

   function Bt(e, t) {
      if (null == e) return {};
      var n, r, o = function (e, t) {
         if (null == e) return {};
         var n, r, o = {},
            c = Object.keys(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
         return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
         var c = Object.getOwnPropertySymbols(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
   }
   var Vt, zt, Wt, Kt = null,
      Jt = (Vt = -1, zt = -1, Wt = void 0, function (e) {
         var t = ++Vt;
         return Promise.resolve(e).then((function (e) {
            return Wt && t < zt ? Wt : (zt = t, Wt = e, e)
         }))
      });

   function $t(e) {
      var t = e.event,
         n = e.nextState,
         r = void 0 === n ? {} : n,
         o = e.props,
         c = e.query,
         i = e.refresh,
         a = e.store,
         u = Bt(e, Mt);
      Kt && o.environment.clearTimeout(Kt);
      var l = u.setCollections,
         s = u.setIsOpen,
         f = u.setQuery,
         p = u.setActiveItemId,
         m = u.setStatus;
      if (f(c), p(o.defaultActiveItemId), !c && !1 === o.openOnFocus) {
         var d, h = a.getState().collections.map((function (e) {
            return Ut(Ut({}, e), {}, {
               items: []
            })
         }));
         m("idle"), l(h), s(null !== (d = r.isOpen) && void 0 !== d ? d : o.shouldPanelOpen({
            state: a.getState()
         }));
         var v = ot(Jt(h).then((function () {
            return Promise.resolve()
         })));
         return a.pendingRequests.add(v)
      }
      m("loading"), Kt = o.environment.setTimeout((function () {
         m("stalled")
      }), o.stallThreshold);
      var y = ot(Jt(o.getSources(Ut({
         query: c,
         refresh: i,
         state: a.getState()
      }, u)).then((function (e) {
         return Promise.all(e.map((function (e) {
            return Promise.resolve(e.getItems(Ut({
               query: c,
               refresh: i,
               state: a.getState()
            }, u))).then((function (t) {
               return Tt(t, e.sourceId)
            }))
         }))).then(Lt).then((function (t) {
            return qt(t, e)
         })).then((function (e) {
            return function (e) {
               var t = e.collections,
                  n = e.props,
                  r = e.state,
                  o = t.reduce((function (e, t) {
                     return It(It({}, e), {}, kt({}, t.source.sourceId, It(It({}, t.source), {}, {
                        getItems: function () {
                           return Ze(t.items)
                        }
                     })))
                  }), {});
               return Ze(n.reshape({
                  sources: Object.values(o),
                  sourcesBySourceId: o,
                  state: r
               })).filter(Boolean).map((function (e) {
                  return {
                     source: e,
                     items: e.getItems()
                  }
               }))
            }({
               collections: e,
               props: o,
               state: a.getState()
            })
         }))
      })))).then((function (e) {
         var n;
         m("idle"), l(e);
         var f = o.shouldPanelOpen({
            state: a.getState()
         });
         s(null !== (n = r.isOpen) && void 0 !== n ? n : o.openOnFocus && !c && f || f);
         var p = st(a.getState());
         if (null !== a.getState().activeItemId && p) {
            var d = p.item,
               h = p.itemInputValue,
               v = p.itemUrl,
               y = p.source;
            y.onActive(Ut({
               event: t,
               item: d,
               itemInputValue: h,
               itemUrl: v,
               refresh: i,
               source: y,
               state: a.getState()
            }, u))
         }
      })).finally((function () {
         m("idle"), Kt && o.environment.clearTimeout(Kt)
      }));
      return a.pendingRequests.add(y)
   }
   var Qt = ["event", "props", "refresh", "store"];

   function Yt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var r = Object.getOwnPropertySymbols(e);
         t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
         }))), n.push.apply(n, r)
      }
      return n
   }

   function Gt(e) {
      for (var t = 1; t < arguments.length; t++) {
         var n = null != arguments[t] ? arguments[t] : {};
         t % 2 ? Yt(Object(n), !0).forEach((function (t) {
            Zt(e, t, n[t])
         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yt(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
         }))
      }
      return e
   }

   function Zt(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
         value: n,
         enumerable: !0,
         configurable: !0,
         writable: !0
      }) : e[t] = n, e
   }

   function Xt(e, t) {
      if (null == e) return {};
      var n, r, o = function (e, t) {
         if (null == e) return {};
         var n, r, o = {},
            c = Object.keys(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
         return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
         var c = Object.getOwnPropertySymbols(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
   }
   var en = ["props", "refresh", "store"],
      tn = ["inputElement", "formElement", "panelElement"],
      nn = ["inputElement"],
      rn = ["inputElement", "maxLength"],
      on = ["item", "source"];

   function cn(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var r = Object.getOwnPropertySymbols(e);
         t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
         }))), n.push.apply(n, r)
      }
      return n
   }

   function an(e) {
      for (var t = 1; t < arguments.length; t++) {
         var n = null != arguments[t] ? arguments[t] : {};
         t % 2 ? cn(Object(n), !0).forEach((function (t) {
            un(e, t, n[t])
         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cn(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
         }))
      }
      return e
   }

   function un(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
         value: n,
         enumerable: !0,
         configurable: !0,
         writable: !0
      }) : e[t] = n, e
   }

   function ln(e, t) {
      if (null == e) return {};
      var n, r, o = function (e, t) {
         if (null == e) return {};
         var n, r, o = {},
            c = Object.keys(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
         return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
         var c = Object.getOwnPropertySymbols(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
   }

   function sn(e) {
      var t = e.props,
         n = e.refresh,
         r = e.store,
         o = ln(e, en);
      return {
         getEnvironmentProps: function (e) {
            var n = e.inputElement,
               o = e.formElement,
               c = e.panelElement;

            function i(e) {
               !r.getState().isOpen && r.pendingRequests.isEmpty() || e.target === n || !1 === [o, c].some((function (t) {
                  return n = t, r = e.target, n === r || n.contains(r);
                  var n, r
               })) && (r.dispatch("blur", null), t.debug || r.pendingRequests.cancelAll())
            }
            return an({
               onTouchStart: i,
               onMouseDown: i,
               onTouchMove: function (e) {
                  !1 !== r.getState().isOpen && n === t.environment.document.activeElement && e.target !== n && n.blur()
               }
            }, ln(e, tn))
         },
         getRootProps: function (e) {
            return an({
               role: "combobox",
               "aria-expanded": r.getState().isOpen,
               "aria-haspopup": "listbox",
               "aria-owns": r.getState().isOpen ? "".concat(t.id, "-list") : void 0,
               "aria-labelledby": "".concat(t.id, "-label")
            }, e)
         },
         getFormProps: function (e) {
            e.inputElement;
            return an({
               action: "",
               noValidate: !0,
               role: "search",
               onSubmit: function (c) {
                  var i;
                  c.preventDefault(), t.onSubmit(an({
                     event: c,
                     refresh: n,
                     state: r.getState()
                  }, o)), r.dispatch("submit", null), null === (i = e.inputElement) || void 0 === i || i.blur()
               },
               onReset: function (c) {
                  var i;
                  c.preventDefault(), t.onReset(an({
                     event: c,
                     refresh: n,
                     state: r.getState()
                  }, o)), r.dispatch("reset", null), null === (i = e.inputElement) || void 0 === i || i.focus()
               }
            }, ln(e, nn))
         },
         getLabelProps: function (e) {
            return an({
               htmlFor: "".concat(t.id, "-input"),
               id: "".concat(t.id, "-label")
            }, e)
         },
         getInputProps: function (e) {
            var c;

            function i(e) {
               (t.openOnFocus || Boolean(r.getState().query)) && $t(an({
                  event: e,
                  props: t,
                  query: r.getState().completion || r.getState().query,
                  refresh: n,
                  store: r
               }, o)), r.dispatch("focus", null)
            }
            var a = e || {},
               u = (a.inputElement, a.maxLength),
               l = void 0 === u ? 512 : u,
               s = ln(a, rn),
               f = st(r.getState()),
               p = function (e) {
                  return Boolean(e && e.match(ft))
               }((null === (c = t.environment.navigator) || void 0 === c ? void 0 : c.userAgent) || ""),
               m = null != f && f.itemUrl && !p ? "go" : "search";
            return an({
               "aria-autocomplete": "both",
               "aria-activedescendant": r.getState().isOpen && null !== r.getState().activeItemId ? "".concat(t.id, "-item-").concat(r.getState().activeItemId) : void 0,
               "aria-controls": r.getState().isOpen ? "".concat(t.id, "-list") : void 0,
               "aria-labelledby": "".concat(t.id, "-label"),
               value: r.getState().completion || r.getState().query,
               id: "".concat(t.id, "-input"),
               autoComplete: "off",
               autoCorrect: "off",
               autoCapitalize: "off",
               enterKeyHint: m,
               spellCheck: "false",
               autoFocus: t.autoFocus,
               placeholder: t.placeholder,
               maxLength: l,
               type: "search",
               onChange: function (e) {
                  $t(an({
                     event: e,
                     props: t,
                     query: e.currentTarget.value.slice(0, l),
                     refresh: n,
                     store: r
                  }, o))
               },
               onKeyDown: function (e) {
                  ! function (e) {
                     var t = e.event,
                        n = e.props,
                        r = e.refresh,
                        o = e.store,
                        c = Xt(e, Qt);
                     if ("ArrowUp" === t.key || "ArrowDown" === t.key) {
                        var i = function () {
                              var e = n.environment.document.getElementById("".concat(n.id, "-item-").concat(o.getState().activeItemId));
                              e && (e.scrollIntoViewIfNeeded ? e.scrollIntoViewIfNeeded(!1) : e.scrollIntoView(!1))
                           },
                           a = function () {
                              var e = st(o.getState());
                              if (null !== o.getState().activeItemId && e) {
                                 var n = e.item,
                                    i = e.itemInputValue,
                                    a = e.itemUrl,
                                    u = e.source;
                                 u.onActive(Gt({
                                    event: t,
                                    item: n,
                                    itemInputValue: i,
                                    itemUrl: a,
                                    refresh: r,
                                    source: u,
                                    state: o.getState()
                                 }, c))
                              }
                           };
                        t.preventDefault(), !1 === o.getState().isOpen && (n.openOnFocus || Boolean(o.getState().query)) ? $t(Gt({
                           event: t,
                           props: n,
                           query: o.getState().query,
                           refresh: r,
                           store: o
                        }, c)).then((function () {
                           o.dispatch(t.key, {
                              nextActiveItemId: n.defaultActiveItemId
                           }), a(), setTimeout(i, 0)
                        })) : (o.dispatch(t.key, {}), a(), i())
                     } else if ("Escape" === t.key) t.preventDefault(), o.dispatch(t.key, null), o.pendingRequests.cancelAll();
                     else if ("Tab" === t.key) o.dispatch("blur", null), o.pendingRequests.cancelAll();
                     else if ("Enter" === t.key) {
                        if (null === o.getState().activeItemId || o.getState().collections.every((function (e) {
                              return 0 === e.items.length
                           }))) return void(n.debug || o.pendingRequests.cancelAll());
                        t.preventDefault();
                        var u = st(o.getState()),
                           l = u.item,
                           s = u.itemInputValue,
                           f = u.itemUrl,
                           p = u.source;
                        if (t.metaKey || t.ctrlKey) void 0 !== f && (p.onSelect(Gt({
                           event: t,
                           item: l,
                           itemInputValue: s,
                           itemUrl: f,
                           refresh: r,
                           source: p,
                           state: o.getState()
                        }, c)), n.navigator.navigateNewTab({
                           itemUrl: f,
                           item: l,
                           state: o.getState()
                        }));
                        else if (t.shiftKey) void 0 !== f && (p.onSelect(Gt({
                           event: t,
                           item: l,
                           itemInputValue: s,
                           itemUrl: f,
                           refresh: r,
                           source: p,
                           state: o.getState()
                        }, c)), n.navigator.navigateNewWindow({
                           itemUrl: f,
                           item: l,
                           state: o.getState()
                        }));
                        else if (t.altKey);
                        else {
                           if (void 0 !== f) return p.onSelect(Gt({
                              event: t,
                              item: l,
                              itemInputValue: s,
                              itemUrl: f,
                              refresh: r,
                              source: p,
                              state: o.getState()
                           }, c)), void n.navigator.navigate({
                              itemUrl: f,
                              item: l,
                              state: o.getState()
                           });
                           $t(Gt({
                              event: t,
                              nextState: {
                                 isOpen: !1
                              },
                              props: n,
                              query: s,
                              refresh: r,
                              store: o
                           }, c)).then((function () {
                              p.onSelect(Gt({
                                 event: t,
                                 item: l,
                                 itemInputValue: s,
                                 itemUrl: f,
                                 refresh: r,
                                 source: p,
                                 state: o.getState()
                              }, c))
                           }))
                        }
                     }
                  }(an({
                     event: e,
                     props: t,
                     refresh: n,
                     store: r
                  }, o))
               },
               onFocus: i,
               onBlur: tt,
               onClick: function (n) {
                  e.inputElement !== t.environment.document.activeElement || r.getState().isOpen || i(n)
               }
            }, s)
         },
         getPanelProps: function (e) {
            return an({
               onMouseDown: function (e) {
                  e.preventDefault()
               },
               onMouseLeave: function () {
                  r.dispatch("mouseleave", null)
               }
            }, e)
         },
         getListProps: function (e) {
            return an({
               role: "listbox",
               "aria-labelledby": "".concat(t.id, "-label"),
               id: "".concat(t.id, "-list")
            }, e)
         },
         getItemProps: function (e) {
            var c = e.item,
               i = e.source,
               a = ln(e, on);
            return an({
               id: "".concat(t.id, "-item-").concat(c.__autocomplete_id),
               role: "option",
               "aria-selected": r.getState().activeItemId === c.__autocomplete_id,
               onMouseMove: function (e) {
                  if (c.__autocomplete_id !== r.getState().activeItemId) {
                     r.dispatch("mousemove", c.__autocomplete_id);
                     var t = st(r.getState());
                     if (null !== r.getState().activeItemId && t) {
                        var i = t.item,
                           a = t.itemInputValue,
                           u = t.itemUrl,
                           l = t.source;
                        l.onActive(an({
                           event: e,
                           item: i,
                           itemInputValue: a,
                           itemUrl: u,
                           refresh: n,
                           source: l,
                           state: r.getState()
                        }, o))
                     }
                  }
               },
               onMouseDown: function (e) {
                  e.preventDefault()
               },
               onClick: function (e) {
                  var a = i.getItemInputValue({
                        item: c,
                        state: r.getState()
                     }),
                     u = i.getItemUrl({
                        item: c,
                        state: r.getState()
                     });
                  (u ? Promise.resolve() : $t(an({
                     event: e,
                     nextState: {
                        isOpen: !1
                     },
                     props: t,
                     query: a,
                     refresh: n,
                     store: r
                  }, o))).then((function () {
                     i.onSelect(an({
                        event: e,
                        item: c,
                        itemInputValue: a,
                        itemUrl: u,
                        refresh: n,
                        source: i,
                        state: r.getState()
                     }, o))
                  }))
               }
            }, a)
         }
      }
   }

   function fn(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var r = Object.getOwnPropertySymbols(e);
         t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
         }))), n.push.apply(n, r)
      }
      return n
   }

   function pn(e) {
      for (var t = 1; t < arguments.length; t++) {
         var n = null != arguments[t] ? arguments[t] : {};
         t % 2 ? fn(Object(n), !0).forEach((function (t) {
            mn(e, t, n[t])
         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fn(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
         }))
      }
      return e
   }

   function mn(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
         value: n,
         enumerable: !0,
         configurable: !0,
         writable: !0
      }) : e[t] = n, e
   }

   function dn(e) {
      var t, n, r, o, c = e.plugins,
         i = e.options,
         a = null === (t = ((null === (n = i.__autocomplete_metadata) || void 0 === n ? void 0 : n.userAgents) || [])[0]) || void 0 === t ? void 0 : t.segment,
         u = a ? mn({}, a, Object.keys((null === (r = i.__autocomplete_metadata) || void 0 === r ? void 0 : r.options) || {})) : {};
      return {
         plugins: c.map((function (e) {
            return {
               name: e.name,
               options: Object.keys(e.__autocomplete_pluginOptions || [])
            }
         })),
         options: pn({
            "autocomplete-core": Object.keys(i)
         }, u),
         ua: nt.concat((null === (o = i.__autocomplete_metadata) || void 0 === o ? void 0 : o.userAgents) || [])
      }
   }

   function hn(e) {
      var t, n = e.state;
      return !1 === n.isOpen || null === n.activeItemId ? null : (null === (t = st(n)) || void 0 === t ? void 0 : t.itemInputValue) || null
   }

   function vn(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var r = Object.getOwnPropertySymbols(e);
         t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
         }))), n.push.apply(n, r)
      }
      return n
   }

   function yn(e) {
      for (var t = 1; t < arguments.length; t++) {
         var n = null != arguments[t] ? arguments[t] : {};
         t % 2 ? vn(Object(n), !0).forEach((function (t) {
            _n(e, t, n[t])
         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vn(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
         }))
      }
      return e
   }

   function _n(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
         value: n,
         enumerable: !0,
         configurable: !0,
         writable: !0
      }) : e[t] = n, e
   }
   var bn = function (e, t) {
      switch (t.type) {
         case "setActiveItemId":
         case "mousemove":
            return yn(yn({}, e), {}, {
               activeItemId: t.payload
            });
         case "setQuery":
            return yn(yn({}, e), {}, {
               query: t.payload,
               completion: null
            });
         case "setCollections":
            return yn(yn({}, e), {}, {
               collections: t.payload
            });
         case "setIsOpen":
            return yn(yn({}, e), {}, {
               isOpen: t.payload
            });
         case "setStatus":
            return yn(yn({}, e), {}, {
               status: t.payload
            });
         case "setContext":
            return yn(yn({}, e), {}, {
               context: yn(yn({}, e.context), t.payload)
            });
         case "ArrowDown":
            var n = yn(yn({}, e), {}, {
               activeItemId: t.payload.hasOwnProperty("nextActiveItemId") ? t.payload.nextActiveItemId : it(1, e.activeItemId, et(e), t.props.defaultActiveItemId)
            });
            return yn(yn({}, n), {}, {
               completion: hn({
                  state: n
               })
            });
         case "ArrowUp":
            var r = yn(yn({}, e), {}, {
               activeItemId: it(-1, e.activeItemId, et(e), t.props.defaultActiveItemId)
            });
            return yn(yn({}, r), {}, {
               completion: hn({
                  state: r
               })
            });
         case "Escape":
            return e.isOpen ? yn(yn({}, e), {}, {
               activeItemId: null,
               isOpen: !1,
               completion: null
            }) : yn(yn({}, e), {}, {
               activeItemId: null,
               query: "",
               status: "idle",
               collections: []
            });
         case "submit":
            return yn(yn({}, e), {}, {
               activeItemId: null,
               isOpen: !1,
               status: "idle"
            });
         case "reset":
            return yn(yn({}, e), {}, {
               activeItemId: !0 === t.props.openOnFocus ? t.props.defaultActiveItemId : null,
               status: "idle",
               query: ""
            });
         case "focus":
            return yn(yn({}, e), {}, {
               activeItemId: t.props.defaultActiveItemId,
               isOpen: (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({
                  state: e
               })
            });
         case "blur":
            return t.props.debug ? e : yn(yn({}, e), {}, {
               isOpen: !1,
               activeItemId: null
            });
         case "mouseleave":
            return yn(yn({}, e), {}, {
               activeItemId: t.props.defaultActiveItemId
            });
         default:
            return "The reducer action ".concat(JSON.stringify(t.type), " is not supported."), e
      }
   };

   function gn(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var r = Object.getOwnPropertySymbols(e);
         t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
         }))), n.push.apply(n, r)
      }
      return n
   }

   function On(e) {
      for (var t = 1; t < arguments.length; t++) {
         var n = null != arguments[t] ? arguments[t] : {};
         t % 2 ? gn(Object(n), !0).forEach((function (t) {
            Sn(e, t, n[t])
         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gn(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
         }))
      }
      return e
   }

   function Sn(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
         value: n,
         enumerable: !0,
         configurable: !0,
         writable: !0
      }) : e[t] = n, e
   }

   function En(e) {
      var t = [],
         n = function (e, t) {
            var n, r = "undefined" != typeof window ? window : {},
               o = e.plugins || [];
            return wt(wt({
               debug: !1,
               openOnFocus: !1,
               placeholder: "",
               autoFocus: !1,
               defaultActiveItemId: null,
               stallThreshold: 300,
               environment: r,
               shouldPanelOpen: function (e) {
                  return et(e.state) > 0
               },
               reshape: function (e) {
                  return e.sources
               }
            }, e), {}, {
               id: null !== (n = e.id) && void 0 !== n ? n : "autocomplete-".concat(Xe++),
               plugins: o,
               initialState: wt({
                  activeItemId: null,
                  query: "",
                  completion: null,
                  collections: [],
                  isOpen: !1,
                  status: "idle",
                  context: {}
               }, e.initialState),
               onStateChange: function (t) {
                  var n;
                  null === (n = e.onStateChange) || void 0 === n || n.call(e, t), o.forEach((function (e) {
                     var n;
                     return null === (n = e.onStateChange) || void 0 === n ? void 0 : n.call(e, t)
                  }))
               },
               onSubmit: function (t) {
                  var n;
                  null === (n = e.onSubmit) || void 0 === n || n.call(e, t), o.forEach((function (e) {
                     var n;
                     return null === (n = e.onSubmit) || void 0 === n ? void 0 : n.call(e, t)
                  }))
               },
               onReset: function (t) {
                  var n;
                  null === (n = e.onReset) || void 0 === n || n.call(e, t), o.forEach((function (e) {
                     var n;
                     return null === (n = e.onReset) || void 0 === n ? void 0 : n.call(e, t)
                  }))
               },
               getSources: function (n) {
                  return Promise.all([].concat(Ot(o.map((function (e) {
                     return e.getSources
                  }))), [e.getSources]).filter(Boolean).map((function (e) {
                     return lt(e, n)
                  }))).then((function (e) {
                     return Ze(e)
                  })).then((function (e) {
                     return e.map((function (e) {
                        return wt(wt({}, e), {}, {
                           onSelect: function (n) {
                              e.onSelect(n), t.forEach((function (e) {
                                 var t;
                                 return null === (t = e.onSelect) || void 0 === t ? void 0 : t.call(e, n)
                              }))
                           },
                           onActive: function (n) {
                              e.onActive(n), t.forEach((function (e) {
                                 var t;
                                 return null === (t = e.onActive) || void 0 === t ? void 0 : t.call(e, n)
                              }))
                           }
                        })
                     }))
                  }))
               },
               navigator: wt({
                  navigate: function (e) {
                     var t = e.itemUrl;
                     r.location.assign(t)
                  },
                  navigateNewTab: function (e) {
                     var t = e.itemUrl,
                        n = r.open(t, "_blank", "noopener");
                     null == n || n.focus()
                  },
                  navigateNewWindow: function (e) {
                     var t = e.itemUrl;
                     r.open(t, "_blank", "noopener")
                  }
               }, e.navigator)
            })
         }(e, t),
         r = yt(bn, n, (function (e) {
            var t = e.prevState,
               r = e.state;
            n.onStateChange(On({
               prevState: t,
               state: r,
               refresh: i
            }, o))
         })),
         o = function (e) {
            var t = e.store;
            return {
               setActiveItemId: function (e) {
                  t.dispatch("setActiveItemId", e)
               },
               setQuery: function (e) {
                  t.dispatch("setQuery", e)
               },
               setCollections: function (e) {
                  var n = 0,
                     r = e.map((function (e) {
                        return bt(bt({}, e), {}, {
                           items: Ze(e.items).map((function (e) {
                              return bt(bt({}, e), {}, {
                                 __autocomplete_id: n++
                              })
                           }))
                        })
                     }));
                  t.dispatch("setCollections", r)
               },
               setIsOpen: function (e) {
                  t.dispatch("setIsOpen", e)
               },
               setStatus: function (e) {
                  t.dispatch("setStatus", e)
               },
               setContext: function (e) {
                  t.dispatch("setContext", e)
               }
            }
         }({
            store: r
         }),
         c = sn(On({
            props: n,
            refresh: i,
            store: r
         }, o));

      function i() {
         return $t(On({
            event: new Event("input"),
            nextState: {
               isOpen: r.getState().isOpen
            },
            props: n,
            query: r.getState().query,
            refresh: i,
            store: r
         }, o))
      }
      return n.plugins.forEach((function (e) {
            var n;
            return null === (n = e.subscribe) || void 0 === n ? void 0 : n.call(e, On(On({}, o), {}, {
               refresh: i,
               onSelect: function (e) {
                  t.push({
                     onSelect: e
                  })
               },
               onActive: function (e) {
                  t.push({
                     onActive: e
                  })
               }
            }))
         })),
         function (e) {
            var t, n, r = e.metadata,
               o = e.environment;
            if (null === (t = o.navigator) || void 0 === t || null === (n = t.userAgent) || void 0 === n ? void 0 : n.includes("Algolia Crawler")) {
               var c = o.document.createElement("meta"),
                  i = o.document.querySelector("head");
               c.name = "algolia:metadata", setTimeout((function () {
                  c.content = JSON.stringify(r), i.appendChild(c)
               }), 0)
            }
         }({
            metadata: dn({
               plugins: n.plugins,
               options: e
            }),
            environment: n.environment
         }), On(On({
            refresh: i
         }, c), o)
   }

   function wn(e) {
      var t = e.translations,
         n = (void 0 === t ? {} : t).searchByText,
         r = void 0 === n ? "Search by" : n;
      return Be.createElement("a", {
         href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"),
         target: "_blank",
         rel: "noopener noreferrer"
      }, Be.createElement("span", {
         className: "DocSearch-Label"
      }, r), Be.createElement("svg", {
         width: "77",
         height: "19",
         "aria-label": "Algolia",
         role: "img"
      }, Be.createElement("path", {
         d: "M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.8856.2767.5088.1838.9195.4428 1.2204.7717.3068.334.5147.7777.6423 1.251.1327.4723.196.991.196 1.5603v5.798c-.5235.1036-1.05.192-1.5787.2649-.7048.1037-1.4976.156-2.3774.156-.5832 0-1.1215-.0582-1.6016-.167a3.385 3.385 0 01-1.2432-.5364 2.6034 2.6034 0 01-.8037-.9565c-.191-.3922-.29-.9447-.29-1.5208 0-.5533.11-.905.3246-1.2863a2.7351 2.7351 0 01.8849-.9329c.376-.242.8029-.415 1.2948-.5187a7.4517 7.4517 0 011.5381-.156 7.1162 7.1162 0 011.6667.2024V8.886c0-.259-.0296-.5061-.093-.7372a1.5847 1.5847 0 00-.3245-.6158 1.5079 1.5079 0 00-.6119-.4158 2.6788 2.6788 0 00-.966-.173c-.5206 0-.9948.0634-1.4283.1384a6.5481 6.5481 0 00-1.065.259l-.2712-1.849c.2831-.0986.7048-.1964 1.2491-.2943a9.2979 9.2979 0 011.752-.1501v.0008zm44.6597 8.1193c.6947 0 1.2086-.0405 1.567-.1097v-2.2942a5.3743 5.3743 0 00-1.3303-.1679c-.2485 0-.503.0177-.7573.0582a2.2853 2.2853 0 00-.688.2024 1.2333 1.2333 0 00-.4918.4142c-.1268.1788-.1843.2826-.1843.5533 0 .5297.1843.8359.5198 1.0375.3414.2066.7927.3053 1.365.3053v.0009zm-.191-8.1767c.7463 0 1.3768.0912 1.8856.2759.5087.1847.9195.4436 1.2204.7717.3.329.5147.7786.6414 1.251a5.7248 5.7248 0 01.197 1.562v5.7972c-.3466.0742-.874.1602-1.5788.2648-.7049.1038-1.4976.1552-2.3774.1552-.5832 0-1.1215-.0573-1.6016-.167a3.385 3.385 0 01-1.2432-.5356 2.6034 2.6034 0 01-.8038-.9565c-.191-.3922-.2898-.9447-.2898-1.5216 0-.5533.1098-.905.3245-1.2854a2.7373 2.7373 0 01.8849-.9338c.376-.2412.8029-.4141 1.2947-.5178a7.4545 7.4545 0 012.325-.1097c.2781.0287.5672.081.879.156v-.3686a2.7781 2.7781 0 00-.092-.738 1.5788 1.5788 0 00-.3246-.6166 1.5079 1.5079 0 00-.612-.415 2.6797 2.6797 0 00-.966-.1729c-.5205 0-.9947.0633-1.4282.1384a6.5608 6.5608 0 00-1.065.259l-.2712-1.8498c.283-.0979.7048-.1957 1.2491-.2935a9.8597 9.8597 0 011.752-.1494zm-6.79-1.072c-.7576.001-1.373-.6103-1.3759-1.3664 0-.755.6128-1.3664 1.376-1.3664.764 0 1.3775.6115 1.3775 1.3664s-.6195 1.3664-1.3776 1.3664zm1.1393 11.1507h-2.2726V5.3409l2.2734-.3568v10.0845l-.0008.0017zm-3.984 0c-3.707.0168-3.707-2.986-3.707-3.4642L59.7069.3576 61.9685 0v11.1794c0 .2715 0 1.9889 1.452 1.994V15.0703zm-7.3512-4.979c0-.975-.2138-1.7873-.6305-2.3516-.4167-.571-.9998-.852-1.747-.852-.7454 0-1.3302.281-1.7452.852-.4166.5702-.6195 1.3765-.6195 2.3516 0 .9851.208 1.6473.6254 2.2183.4158.576.9998.8587 1.7461.8587.7454 0 1.3303-.2885 1.747-.8595.4158-.5761.6237-1.2315.6237-2.2184v.0009zm2.3132-.006c0 .7609-.1099 1.3361-.3356 1.9654a4.654 4.654 0 01-.9533 1.6076A4.214 4.214 0 0155.613 14.69c-.579.2412-1.4697.3795-1.9143.3795-.4462-.005-1.3303-.1324-1.9033-.3795a4.307 4.307 0 01-1.474-1.0316c-.4115-.4445-.7293-.9801-.9609-1.6076a5.3423 5.3423 0 01-.3465-1.9653c0-.7608.104-1.493.3356-2.1155a4.683 4.683 0 01.9719-1.5958 4.3383 4.3383 0 011.479-1.0257c.5739-.242 1.2043-.3567 1.8864-.3567.6829 0 1.3125.1197 1.8906.3567a4.1245 4.1245 0 011.4816 1.0257 4.7587 4.7587 0 01.9592 1.5958c.2426.6225.3643 1.3547.3643 2.1155zm-17.0198 0c0 .9448.208 1.9932.6238 2.431.4166.4386.955.6579 1.6142.6579.3584 0 .6998-.0523 1.0176-.1502.3186-.0978.5721-.2134.775-.3517V7.0784a8.8706 8.8706 0 00-1.4926-.1906c-.8206-.0236-1.4452.312-1.8847.8468-.4335.5365-.6533 1.476-.6533 2.3516v-.0008zm6.2863 4.4485c0 1.5385-.3938 2.662-1.1866 3.3773-.791.7136-2.0005 1.0712-3.6308 1.0712-.5958 0-1.834-.1156-2.8228-.334l.3643-1.7865c.8282.173 1.9202.2193 2.4932.2193.9077 0 1.555-.1847 1.943-.5533.388-.3686.578-.916.578-1.643v-.3687a6.8289 6.8289 0 01-.8848.3349c-.3634.1096-.786.167-1.261.167-.6246 0-1.1917-.0979-1.7055-.2944a3.5554 3.5554 0 01-1.3244-.8645c-.3642-.3796-.6541-.8579-.8561-1.4289-.2028-.571-.3068-1.59-.3068-2.339 0-.7034.1099-1.5856.3245-2.1735.2198-.5871.5316-1.0949.9542-1.515.4167-.42.9255-.743 1.5213-.98a5.5923 5.5923 0 012.052-.3855c.7353 0 1.4114.092 2.0707.2024.6592.1088 1.2204.2236 1.6776.35v8.945-.0008zM11.5026 4.2418v-.6511c-.0005-.4553-.3704-.8241-.8266-.8241H8.749c-.4561 0-.826.3688-.8265.824v.669c0 .0742.0693.1264.1445.1096a6.0346 6.0346 0 011.6768-.2362 6.125 6.125 0 011.6202.2185.1116.1116 0 00.1386-.1097zm-5.2806.852l-.3296-.3282a.8266.8266 0 00-1.168 0l-.393.3922a.8199.8199 0 000 1.164l.3237.323c.0524.0515.1268.0397.1733-.0117.191-.259.3989-.507.6305-.7372.2374-.2362.48-.4437.7462-.6335.0575-.0354.0634-.1155.017-.1687zm3.5159 2.069v2.818c0 .081.0879.1392.1622.0987l2.5102-1.2964c.0574-.0287.0752-.0987.0464-.1552a3.1237 3.1237 0 00-2.603-1.574c-.0575 0-.115.0456-.115.1097l-.0008-.0009zm.0008 6.789c-2.0933.0005-3.7915-1.6912-3.7947-3.7804C5.9468 8.0821 7.6452 6.39 9.7387 6.391c2.0932-.0005 3.7911 1.6914 3.794 3.7804a3.7783 3.7783 0 01-1.1124 2.675 3.7936 3.7936 0 01-2.6824 1.1054h.0008zM9.738 4.8002c-1.9218 0-3.6975 1.0232-4.6584 2.6841a5.359 5.359 0 000 5.3683c.9609 1.661 2.7366 2.6841 4.6584 2.6841a5.3891 5.3891 0 003.8073-1.5725 5.3675 5.3675 0 001.578-3.7987 5.3574 5.3574 0 00-1.5771-3.797A5.379 5.379 0 009.7387 4.801l-.0008-.0008z",
         fill: "currentColor",
         fillRule: "evenodd"
      })))
   }

   function jn(e) {
      return Be.createElement("svg", {
         width: "15",
         height: "15",
         "aria-label": e.ariaLabel,
         role: "img"
      }, Be.createElement("g", {
         fill: "none",
         stroke: "currentColor",
         strokeLinecap: "round",
         strokeLinejoin: "round",
         strokeWidth: "1.2"
      }, e.children))
   }

   function Pn(e) {
      var t = e.translations,
         n = void 0 === t ? {} : t,
         r = n.selectText,
         o = void 0 === r ? "Sélectionner" : r,
         c = n.selectKeyAriaLabel,
         i = void 0 === c ? "Enter key" : c,
         a = n.navigateText,
         u = void 0 === a ? "Parcourir" : a,
         l = n.navigateUpKeyAriaLabel,
         s = void 0 === l ? "Arrow up" : l,
         f = n.navigateDownKeyAriaLabel,
         p = void 0 === f ? "Arrow down" : f,
         m = n.closeText,
         d = void 0 === m ? "Fermer" : m,
         h = n.closeKeyAriaLabel,
         v = void 0 === h ? "Escape key" : h,
         y = n.searchByText,
         _ = void 0 === y ? "Recherche par" : y;
      return Be.createElement(Be.Fragment, null, Be.createElement("div", {
         className: "DocSearch-Logo"
      }, Be.createElement(wn, {
         translations: {
            searchByText: _
         }
      })), Be.createElement("ul", {
         className: "DocSearch-Commands"
      }, Be.createElement("li", null, Be.createElement("kbd", {
         className: "DocSearch-Commands-Key"
      }, Be.createElement(jn, {
         ariaLabel: i
      }, Be.createElement("path", {
         d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"
      }))), Be.createElement("span", {
         className: "DocSearch-Label"
      }, o)), Be.createElement("li", null, Be.createElement("kbd", {
         className: "DocSearch-Commands-Key"
      }, Be.createElement(jn, {
         ariaLabel: p
      }, Be.createElement("path", {
         d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3"
      }))), Be.createElement("kbd", {
         className: "DocSearch-Commands-Key"
      }, Be.createElement(jn, {
         ariaLabel: s
      }, Be.createElement("path", {
         d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3"
      }))), Be.createElement("span", {
         className: "DocSearch-Label"
      }, u)), Be.createElement("li", null, Be.createElement("kbd", {
         className: "DocSearch-Commands-Key"
      }, Be.createElement(jn, {
         ariaLabel: v
      }, Be.createElement("path", {
         d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"
      }))), Be.createElement("span", {
         className: "DocSearch-Label"
      }, d))))
   }

   function In(e) {
      var t = e.hit,
         n = e.children;
      return Be.createElement("a", {
         href: t.url
      }, n)
   }

   function kn() {
      return Be.createElement("svg", {
         viewBox: "0 0 38 38",
         stroke: "currentColor",
         strokeOpacity: ".5"
      }, Be.createElement("g", {
         fill: "none",
         fillRule: "evenodd"
      }, Be.createElement("g", {
         transform: "translate(1 1)",
         strokeWidth: "2"
      }, Be.createElement("circle", {
         strokeOpacity: ".3",
         cx: "18",
         cy: "18",
         r: "18"
      }), Be.createElement("path", {
         d: "M36 18c0-9.94-8.06-18-18-18"
      }, Be.createElement("animateTransform", {
         attributeName: "transform",
         type: "rotate",
         from: "0 18 18",
         to: "360 18 18",
         dur: "1s",
         repeatCount: "indefinite"
      })))))
   }

   function Dn() {
      return Be.createElement("svg", {
         width: "20",
         height: "20",
         viewBox: "0 0 20 20"
      }, Be.createElement("g", {
         stroke: "currentColor",
         fill: "none",
         fillRule: "evenodd",
         strokeLinecap: "round",
         strokeLinejoin: "round"
      }, Be.createElement("path", {
         d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0"
      }), Be.createElement("path", {
         d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13"
      })))
   }

   function Cn() {
      return Be.createElement("svg", {
         width: "20",
         height: "20",
         viewBox: "0 0 20 20"
      }, Be.createElement("path", {
         d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
         stroke: "currentColor",
         fill: "none",
         fillRule: "evenodd",
         strokeLinecap: "round",
         strokeLinejoin: "round"
      }))
   }

   function An() {
      return Be.createElement("svg", {
         className: "DocSearch-Hit-Select-Icon",
         width: "20",
         height: "20",
         viewBox: "0 0 20 20"
      }, Be.createElement("g", {
         stroke: "currentColor",
         fill: "none",
         fillRule: "evenodd",
         strokeLinecap: "round",
         strokeLinejoin: "round"
      }, Be.createElement("path", {
         d: "M18 3v4c0 2-2 4-4 4H2"
      }), Be.createElement("path", {
         d: "M8 17l-6-6 6-6"
      })))
   }
   var xn = function () {
      return Be.createElement("svg", {
         width: "20",
         height: "20",
         viewBox: "0 0 20 20"
      }, Be.createElement("path", {
         d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",
         stroke: "currentColor",
         fill: "none",
         fillRule: "evenodd",
         strokeLinejoin: "round"
      }))
   };

   function Nn(e) {
      switch (e.type) {
         case "lvl1":
            return Be.createElement(xn, null);
         case "content":
            return Be.createElement(Tn, null);
         default:
            return Be.createElement(Rn, null)
      }
   }

   function Rn() {
      return Be.createElement("svg", {
         width: "20",
         height: "20",
         viewBox: "0 0 20 20"
      }, Be.createElement("path", {
         d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z",
         stroke: "currentColor",
         fill: "none",
         fillRule: "evenodd",
         strokeLinecap: "round",
         strokeLinejoin: "round"
      }))
   }

   function Tn() {
      return Be.createElement("svg", {
         width: "20",
         height: "20",
         viewBox: "0 0 20 20"
      }, Be.createElement("path", {
         d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z",
         stroke: "currentColor",
         fill: "none",
         fillRule: "evenodd",
         strokeLinejoin: "round"
      }))
   }

   function Ln() {
      return Be.createElement("svg", {
         width: "20",
         height: "20",
         viewBox: "0 0 20 20"
      }, Be.createElement("path", {
         d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z",
         stroke: "currentColor",
         fill: "none",
         fillRule: "evenodd",
         strokeLinejoin: "round"
      }))
   }

   function qn() {
      return Be.createElement("svg", {
         width: "40",
         height: "40",
         viewBox: "0 0 20 20",
         fill: "none",
         fillRule: "evenodd",
         stroke: "currentColor",
         strokeLinecap: "round",
         strokeLinejoin: "round"
      }, Be.createElement("path", {
         d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0"
      }))
   }

   function Mn() {
      return Be.createElement("svg", {
         width: "40",
         height: "40",
         viewBox: "0 0 20 20",
         fill: "none",
         fillRule: "evenodd",
         stroke: "currentColor",
         strokeLinecap: "round",
         strokeLinejoin: "round"
      }, Be.createElement("path", {
         d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"
      }))
   }

   function Hn(e) {
      var t = e.translations,
         n = void 0 === t ? {} : t,
         r = n.titleText,
         o = void 0 === r ? "Unable to fetch results" : r,
         c = n.helpText,
         i = void 0 === c ? "You might want to check your network connection." : c;
      return Be.createElement("div", {
         className: "DocSearch-ErrorScreen"
      }, Be.createElement("div", {
         className: "DocSearch-Screen-Icon"
      }, Be.createElement(qn, null)), Be.createElement("p", {
         className: "DocSearch-Title"
      }, o), Be.createElement("p", {
         className: "DocSearch-Help"
      }, i))
   }
   var Un = ["translations"];

   function Fn(e) {
      return function (e) {
         if (Array.isArray(e)) return Bn(e)
      }(e) || function (e) {
         if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
      }(e) || function (e, t) {
         if (!e) return;
         if ("string" == typeof e) return Bn(e, t);
         var n = Object.prototype.toString.call(e).slice(8, -1);
         "Object" === n && e.constructor && (n = e.constructor.name);
         if ("Map" === n || "Set" === n) return Array.from(e);
         if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Bn(e, t)
      }(e) || function () {
         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
   }

   function Bn(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
   }

   function Vn(e, t) {
      if (null == e) return {};
      var n, r, o = function (e, t) {
         if (null == e) return {};
         var n, r, o = {},
            c = Object.keys(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
         return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
         var c = Object.getOwnPropertySymbols(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
   }

   function zn(e) {
      var t = e.translations,
         n = void 0 === t ? {} : t,
         r = Vn(e, Un),
         o = n.noResultsText,
         c = void 0 === o ? "Aucun résultat pour" : o,
         i = n.suggestedQueryText,
         a = void 0 === i ? "Essayer une nouvelle recherche dans " : i,
         u = n.reportMissingResultsText,
         l = void 0 === u ? "Pensez-vous que cette requête devrait aboutir ?" : u,
         s = n.reportMissingResultsLinkText,
         f = void 0 === s ? "Faites-le nous savoir." : s,
         p = r.state.context.searchSuggestions;
      return Be.createElement("div", {
         className: "DocSearch-NoResults"
      }, Be.createElement("div", {
         className: "DocSearch-Screen-Icon"
      }, Be.createElement(Mn, null)), Be.createElement("p", {
         className: "DocSearch-Title"
      }, c, ' "', Be.createElement("strong", null, r.state.query), '"'), p && p.length > 0 && Be.createElement("div", {
         className: "DocSearch-NoResults-Prefill-List"
      }, Be.createElement("p", {
         className: "DocSearch-Help"
      }, a, ":"), Be.createElement("ul", null, p.slice(0, 3).reduce((function (e, t) {
         return [].concat(Fn(e), [Be.createElement("li", {
            key: t
         }, Be.createElement("button", {
            className: "DocSearch-Prefill",
            key: t,
            type: "button",
            onClick: function () {
               r.setQuery(t.toLowerCase() + " "), r.refresh(), r.inputRef.current.focus()
            }
         }, t))])
      }), []))), r.getMissingResultsUrl && Be.createElement("p", {
         className: "DocSearch-Help"
      }, "".concat(l, " "), Be.createElement("a", {
         href: r.getMissingResultsUrl({
            query: r.state.query
         }),
         target: "_blank",
         rel: "noopener noreferrer"
      }, f)))
   }
   var Wn = ["hit", "attribute", "tagName"];

   function Kn(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var r = Object.getOwnPropertySymbols(e);
         t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
         }))), n.push.apply(n, r)
      }
      return n
   }

   function Jn(e) {
      for (var t = 1; t < arguments.length; t++) {
         var n = null != arguments[t] ? arguments[t] : {};
         t % 2 ? Kn(Object(n), !0).forEach((function (t) {
            $n(e, t, n[t])
         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kn(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
         }))
      }
      return e
   }

   function $n(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
         value: n,
         enumerable: !0,
         configurable: !0,
         writable: !0
      }) : e[t] = n, e
   }

   function Qn(e, t) {
      if (null == e) return {};
      var n, r, o = function (e, t) {
         if (null == e) return {};
         var n, r, o = {},
            c = Object.keys(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
         return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
         var c = Object.getOwnPropertySymbols(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
   }

   function Yn(e, t) {
      return t.split(".").reduce((function (e, t) {
         return null != e && e[t] ? e[t] : null
      }), e)
   }

   function Gn(e) {
      var t = e.hit,
         n = e.attribute,
         r = e.tagName;
      return g(void 0 === r ? "span" : r, Jn(Jn({}, Qn(e, Wn)), {}, {
         dangerouslySetInnerHTML: {
            __html: Yn(t, "_snippetResult.".concat(n, ".value")) || Yn(t, n)
         }
      }))
   }

   function Zn(e, t) {
      return function (e) {
         if (Array.isArray(e)) return e
      }(e) || function (e, t) {
         var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
         if (null == n) return;
         var r, o, c = [],
            i = !0,
            a = !1;
         try {
            for (n = n.call(e); !(i = (r = n.next()).done) && (c.push(r.value), !t || c.length !== t); i = !0);
         } catch (e) {
            a = !0, o = e
         } finally {
            try {
               i || null == n.return || n.return()
            } finally {
               if (a) throw o
            }
         }
         return c
      }(e, t) || function (e, t) {
         if (!e) return;
         if ("string" == typeof e) return Xn(e, t);
         var n = Object.prototype.toString.call(e).slice(8, -1);
         "Object" === n && e.constructor && (n = e.constructor.name);
         if ("Map" === n || "Set" === n) return Array.from(e);
         if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xn(e, t)
      }(e, t) || function () {
         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
   }

   function Xn(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
   }

   function er() {
      return er = Object.assign || function (e) {
         for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
         }
         return e
      }, er.apply(this, arguments)
   }

   function tr(e) {
      return e.collection && 0 !== e.collection.items.length ? Be.createElement("section", {
         className: "DocSearch-Hits"
      }, Be.createElement("div", {
         className: "DocSearch-Hit-source"
      }, e.title), Be.createElement("ul", e.getListProps(), e.collection.items.map((function (t, n) {
         return Be.createElement(nr, er({
            key: [e.title, t.objectID].join(":"),
            item: t,
            index: n
         }, e))
      })))) : null
   }

   function nr(e) {
      var t = e.item,
         n = e.index,
         r = e.renderIcon,
         o = e.renderAction,
         c = e.getItemProps,
         i = e.onItemClick,
         a = e.collection,
         u = e.hitComponent,
         l = Zn(Be.useState(!1), 2),
         s = l[0],
         f = l[1],
         p = Zn(Be.useState(!1), 2),
         m = p[0],
         d = p[1],
         h = Be.useRef(null),
         v = u;
      return Be.createElement("li", er({
         className: ["DocSearch-Hit", t.__docsearch_parent && "DocSearch-Hit--Child", s && "DocSearch-Hit--deleting", m && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "),
         onTransitionEnd: function () {
            h.current && h.current()
         }
      }, c({
         item: t,
         source: a.source,
         onClick: function () {
            i(t)
         }
      })), Be.createElement(v, {
         hit: t
      }, Be.createElement("div", {
         className: "DocSearch-Hit-Container"
      }, r({
         item: t,
         index: n
      }), t.hierarchy[t.type] && "lvl1" === t.type && Be.createElement("div", {
         className: "DocSearch-Hit-content-wrapper"
      }, Be.createElement(Gn, {
         className: "DocSearch-Hit-title",
         hit: t,
         attribute: "hierarchy.lvl1"
      }), t.content && Be.createElement(Gn, {
         className: "DocSearch-Hit-path",
         hit: t,
         attribute: "content"
      })), t.hierarchy[t.type] && ("lvl2" === t.type || "lvl3" === t.type || "lvl4" === t.type || "lvl5" === t.type || "lvl6" === t.type) && Be.createElement("div", {
         className: "DocSearch-Hit-content-wrapper"
      }, Be.createElement(Gn, {
         className: "DocSearch-Hit-title",
         hit: t,
         attribute: "hierarchy.".concat(t.type)
      }), Be.createElement(Gn, {
         className: "DocSearch-Hit-path",
         hit: t,
         attribute: "hierarchy.lvl1"
      })), "content" === t.type && Be.createElement("div", {
         className: "DocSearch-Hit-content-wrapper"
      }, Be.createElement(Gn, {
         className: "DocSearch-Hit-title",
         hit: t,
         attribute: "content"
      }), Be.createElement(Gn, {
         className: "DocSearch-Hit-path",
         hit: t,
         attribute: "hierarchy.lvl1"
      })), o({
         item: t,
         runDeleteTransition: function (e) {
            f(!0), h.current = e
         },
         runFavoriteTransition: function (e) {
            d(!0), h.current = e
         }
      }))))
   }

   function rr(e, t) {
      return e.reduce((function (e, n) {
         var r = t(n);
         return e.hasOwnProperty(r) || (e[r] = []), e[r].length < 5 && e[r].push(n), e
      }), {})
   }

   function or(e) {
      return e
   }

   function cr() {}
   var ir = /(<mark>|<\/mark>)/g,
      ar = RegExp(ir.source);

   function ur(e) {
      var t, n, r, o, c, i = e;
      if (!i.__docsearch_parent && !e._highlightResult) return e.hierarchy.lvl0;
      var a = ((i.__docsearch_parent ? null === (t = i.__docsearch_parent) || void 0 === t || null === (n = t._highlightResult) || void 0 === n || null === (r = n.hierarchy) || void 0 === r ? void 0 : r.lvl0 : null === (o = e._highlightResult) || void 0 === o || null === (c = o.hierarchy) || void 0 === c ? void 0 : c.lvl0) || {}).value;
      return a && ar.test(a) ? a.replace(ir, "") : a
   }

   function lr() {
      return lr = Object.assign || function (e) {
         for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
         }
         return e
      }, lr.apply(this, arguments)
   }

   function sr(e) {
      return Be.createElement("div", {
         className: "DocSearch-Dropdown-Container"
      }, e.state.collections.map((function (t) {
         if (0 === t.items.length) return null;
         var n = ur(t.items[0]);
         return Be.createElement(tr, lr({}, e, {
            key: t.source.sourceId,
            title: n,
            collection: t,
            renderIcon: function (e) {
               var n, r = e.item,
                  o = e.index;
               return Be.createElement(Be.Fragment, null, r.__docsearch_parent && Be.createElement("svg", {
                  className: "DocSearch-Hit-Tree",
                  viewBox: "0 0 24 54"
               }, Be.createElement("g", {
                  stroke: "currentColor",
                  fill: "none",
                  fillRule: "evenodd",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
               }, r.__docsearch_parent !== (null === (n = t.items[o + 1]) || void 0 === n ? void 0 : n.__docsearch_parent) ? Be.createElement("path", {
                  d: "M8 6v21M20 27H8.3"
               }) : Be.createElement("path", {
                  d: "M8 6v42M20 27H8.3"
               }))), Be.createElement("div", {
                  className: "DocSearch-Hit-icon"
               }, Be.createElement(Nn, {
                  type: r.type
               })))
            },
            renderAction: function () {
               return Be.createElement("div", {
                  className: "DocSearch-Hit-action"
               }, Be.createElement(An, null))
            }
         }))
      })), e.resultsFooterComponent && Be.createElement("section", {
         className: "DocSearch-HitsFooter"
      }, Be.createElement(e.resultsFooterComponent, {
         state: e.state
      })))
   }
   var fr = ["translations"];

   function pr() {
      return pr = Object.assign || function (e) {
         for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
         }
         return e
      }, pr.apply(this, arguments)
   }

   function mr(e, t) {
      if (null == e) return {};
      var n, r, o = function (e, t) {
         if (null == e) return {};
         var n, r, o = {},
            c = Object.keys(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
         return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
         var c = Object.getOwnPropertySymbols(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
   }

   function dr(e) {
      var t = e.translations,
         n = void 0 === t ? {} : t,
         r = mr(e, fr),
         o = n.recentSearchesTitle,
         c = void 0 === o ? "Recherches récentes" : o,
         i = n.noRecentSearchesText,
         a = void 0 === i ? "Pas de recherches récentes" : i,
         u = n.saveRecentSearchButtonTitle,
         l = void 0 === u ? "Enregistrer cette recherche" : u,
         s = n.removeRecentSearchButtonTitle,
         f = void 0 === s ? "Supprimer cette recherche de l'historique" : s,
         p = n.favoriteSearchesTitle,
         m = void 0 === p ? "Favori" : p,
         d = n.removeFavoriteSearchButtonTitle,
         h = void 0 === d ? "Supprimer cette recherche des favoris" : d;
      return "idle" === r.state.status && !1 === r.hasCollections ? r.disableUserPersonalization ? null : Be.createElement("div", {
         className: "DocSearch-StartScreen"
      }, Be.createElement("p", {
         className: "DocSearch-Help"
      }, a)) : !1 === r.hasCollections ? null : Be.createElement("div", {
         className: "DocSearch-Dropdown-Container"
      }, Be.createElement(tr, pr({}, r, {
         title: c,
         collection: r.state.collections[0],
         renderIcon: function () {
            return Be.createElement("div", {
               className: "DocSearch-Hit-icon"
            }, Be.createElement(Dn, null))
         },
         renderAction: function (e) {
            var t = e.item,
               n = e.runFavoriteTransition,
               o = e.runDeleteTransition;
            return Be.createElement(Be.Fragment, null, Be.createElement("div", {
               className: "DocSearch-Hit-action"
            }, Be.createElement("button", {
               className: "DocSearch-Hit-action-button",
               title: l,
               type: "submit",
               onClick: function (e) {
                  e.preventDefault(), e.stopPropagation(), n((function () {
                     r.favoriteSearches.add(t), r.recentSearches.remove(t), r.refresh()
                  }))
               }
            }, Be.createElement(Ln, null))), Be.createElement("div", {
               className: "DocSearch-Hit-action"
            }, Be.createElement("button", {
               className: "DocSearch-Hit-action-button",
               title: f,
               type: "submit",
               onClick: function (e) {
                  e.preventDefault(), e.stopPropagation(), o((function () {
                     r.recentSearches.remove(t), r.refresh()
                  }))
               }
            }, Be.createElement(Cn, null))))
         }
      })), Be.createElement(tr, pr({}, r, {
         title: m,
         collection: r.state.collections[1],
         renderIcon: function () {
            return Be.createElement("div", {
               className: "DocSearch-Hit-icon"
            }, Be.createElement(Ln, null))
         },
         renderAction: function (e) {
            var t = e.item,
               n = e.runDeleteTransition;
            return Be.createElement("div", {
               className: "DocSearch-Hit-action"
            }, Be.createElement("button", {
               className: "DocSearch-Hit-action-button",
               title: h,
               type: "submit",
               onClick: function (e) {
                  e.preventDefault(), e.stopPropagation(), n((function () {
                     r.favoriteSearches.remove(t), r.refresh()
                  }))
               }
            }, Be.createElement(Cn, null)))
         }
      })))
   }
   var hr = ["translations"];

   function vr() {
      return vr = Object.assign || function (e) {
         for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
         }
         return e
      }, vr.apply(this, arguments)
   }

   function yr(e, t) {
      if (null == e) return {};
      var n, r, o = function (e, t) {
         if (null == e) return {};
         var n, r, o = {},
            c = Object.keys(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
         return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
         var c = Object.getOwnPropertySymbols(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
   }
   var _r = Be.memo((function (e) {
         var t = e.translations,
            n = void 0 === t ? {} : t,
            r = yr(e, hr);
         if ("error" === r.state.status) return Be.createElement(Hn, {
            translations: null == n ? void 0 : n.errorScreen
         });
         var o = r.state.collections.some((function (e) {
            return e.items.length > 0
         }));
         return r.state.query ? !1 === o ? Be.createElement(zn, vr({}, r, {
            translations: null == n ? void 0 : n.noResultsScreen
         })) : Be.createElement(sr, r) : Be.createElement(dr, vr({}, r, {
            hasCollections: o,
            translations: null == n ? void 0 : n.startScreen
         }))
      }), (function (e, t) {
         return "loading" === t.state.status || "stalled" === t.state.status
      })),
      br = ["translations"];

   function gr() {
      return gr = Object.assign || function (e) {
         for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
         }
         return e
      }, gr.apply(this, arguments)
   }

   function Or(e, t) {
      if (null == e) return {};
      var n, r, o = function (e, t) {
         if (null == e) return {};
         var n, r, o = {},
            c = Object.keys(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
         return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
         var c = Object.getOwnPropertySymbols(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
   }

   function Sr(e) {
      var t = e.translations,
         n = void 0 === t ? {} : t,
         r = Or(e, br),
         o = n.resetButtonTitle,
         c = void 0 === o ? "Effacer la requête" : o,
         i = n.resetButtonAriaLabel,
         a = void 0 === i ? "Effacer la requête" : i,
         u = n.cancelButtonText,
         l = void 0 === u ? "Annuler" : u,
         s = n.cancelButtonAriaLabel,
         f = void 0 === s ? "Annuler" : s,
         p = r.getFormProps({
            inputElement: r.inputRef.current
         }).onReset;
      return Be.useEffect((function () {
         r.autoFocus && r.inputRef.current && r.inputRef.current.focus()
      }), [r.autoFocus, r.inputRef]), Be.useEffect((function () {
         r.isFromSelection && r.inputRef.current && r.inputRef.current.select()
      }), [r.isFromSelection, r.inputRef]), Be.createElement(Be.Fragment, null, Be.createElement("form", {
         className: "DocSearch-Form",
         onSubmit: function (e) {
            e.preventDefault()
         },
         onReset: p
      }, Be.createElement("label", gr({
         className: "DocSearch-MagnifierLabel"
      }, r.getLabelProps()), Be.createElement(ze, null)), Be.createElement("div", {
         className: "DocSearch-LoadingIndicator"
      }, Be.createElement(kn, null)), Be.createElement("input", gr({
         className: "DocSearch-Input",
         ref: r.inputRef
      }, r.getInputProps({
         inputElement: r.inputRef.current,
         autoFocus: r.autoFocus,
         maxLength: 64
      }))), Be.createElement("button", {
         type: "reset",
         title: c,
         className: "DocSearch-Reset",
         "aria-label": a,
         hidden: !r.state.query
      }, Be.createElement(Cn, null))), Be.createElement("button", {
         className: "DocSearch-Cancel",
         type: "reset",
         "aria-label": f,
         onClick: r.onClose
      }, l))
   }
   var Er = ["_highlightResult", "_snippetResult"];

   function wr(e, t) {
      if (null == e) return {};
      var n, r, o = function (e, t) {
         if (null == e) return {};
         var n, r, o = {},
            c = Object.keys(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
         return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
         var c = Object.getOwnPropertySymbols(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
   }

   function jr(e) {
      return !1 === function () {
         var e = "__TEST_KEY__";
         try {
            return localStorage.setItem(e, ""), localStorage.removeItem(e), !0
         } catch (e) {
            return !1
         }
      }() ? {
         setItem: function () {},
         getItem: function () {
            return []
         }
      } : {
         setItem: function (t) {
            return window.localStorage.setItem(e, JSON.stringify(t))
         },
         getItem: function () {
            var t = window.localStorage.getItem(e);
            return t ? JSON.parse(t) : []
         }
      }
   }

   function Pr(e) {
      var t = e.key,
         n = e.limit,
         r = void 0 === n ? 5 : n,
         o = jr(t),
         c = o.getItem().slice(0, r);
      return {
         add: function (e) {
            var t = e,
               n = (t._highlightResult, t._snippetResult, wr(t, Er)),
               i = c.findIndex((function (e) {
                  return e.objectID === n.objectID
               }));
            i > -1 && c.splice(i, 1), c.unshift(n), c = c.slice(0, r), o.setItem(c)
         },
         remove: function (e) {
            c = c.filter((function (t) {
               return t.objectID !== e.objectID
            })), o.setItem(c)
         },
         getAll: function () {
            return c
         }
      }
   }
   var Ir = ["facetName", "facetQuery"];

   function kr(e) {
      var t, n = "algoliasearch-client-js-".concat(e.key),
         r = function () {
            return void 0 === t && (t = e.localStorage || window.localStorage), t
         },
         o = function () {
            return JSON.parse(r().getItem(n) || "{}")
         };
      return {
         get: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
               miss: function () {
                  return Promise.resolve()
               }
            };
            return Promise.resolve().then((function () {
               var n = JSON.stringify(e),
                  r = o()[n];
               return Promise.all([r || t(), void 0 !== r])
            })).then((function (e) {
               var t = i(e, 2),
                  r = t[0],
                  o = t[1];
               return Promise.all([r, o || n.miss(r)])
            })).then((function (e) {
               return i(e, 1)[0]
            }))
         },
         set: function (e, t) {
            return Promise.resolve().then((function () {
               var c = o();
               return c[JSON.stringify(e)] = t, r().setItem(n, JSON.stringify(c)), t
            }))
         },
         delete: function (e) {
            return Promise.resolve().then((function () {
               var t = o();
               delete t[JSON.stringify(e)], r().setItem(n, JSON.stringify(t))
            }))
         },
         clear: function () {
            return Promise.resolve().then((function () {
               r().removeItem(n)
            }))
         }
      }
   }

   function Dr(e) {
      var t = a(e.caches),
         n = t.shift();
      return void 0 === n ? {
         get: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
               miss: function () {
                  return Promise.resolve()
               }
            };
            return t().then((function (e) {
               return Promise.all([e, n.miss(e)])
            })).then((function (e) {
               return i(e, 1)[0]
            }))
         },
         set: function (e, t) {
            return Promise.resolve(t)
         },
         delete: function (e) {
            return Promise.resolve()
         },
         clear: function () {
            return Promise.resolve()
         }
      } : {
         get: function (e, r) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
               miss: function () {
                  return Promise.resolve()
               }
            };
            return n.get(e, r, o).catch((function () {
               return Dr({
                  caches: t
               }).get(e, r, o)
            }))
         },
         set: function (e, r) {
            return n.set(e, r).catch((function () {
               return Dr({
                  caches: t
               }).set(e, r)
            }))
         },
         delete: function (e) {
            return n.delete(e).catch((function () {
               return Dr({
                  caches: t
               }).delete(e)
            }))
         },
         clear: function () {
            return n.clear().catch((function () {
               return Dr({
                  caches: t
               }).clear()
            }))
         }
      }
   }

   function Cr() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            serializable: !0
         },
         t = {};
      return {
         get: function (n, r) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                  miss: function () {
                     return Promise.resolve()
                  }
               },
               c = JSON.stringify(n);
            if (c in t) return Promise.resolve(e.serializable ? JSON.parse(t[c]) : t[c]);
            var i = r(),
               a = o && o.miss || function () {
                  return Promise.resolve()
               };
            return i.then((function (e) {
               return a(e)
            })).then((function () {
               return i
            }))
         },
         set: function (n, r) {
            return t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r, Promise.resolve(r)
         },
         delete: function (e) {
            return delete t[JSON.stringify(e)], Promise.resolve()
         },
         clear: function () {
            return t = {}, Promise.resolve()
         }
      }
   }

   function Ar(e) {
      for (var t = e.length - 1; t > 0; t--) {
         var n = Math.floor(Math.random() * (t + 1)),
            r = e[t];
         e[t] = e[n], e[n] = r
      }
      return e
   }

   function xr(e, t) {
      return t ? (Object.keys(t).forEach((function (n) {
         e[n] = t[n](e)
      })), e) : e
   }

   function Nr(e) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
      var o = 0;
      return e.replace(/%s/g, (function () {
         return encodeURIComponent(n[o++])
      }))
   }
   var Rr = "4.8.5",
      Tr = {
         WithinQueryParameters: 0,
         WithinHeaders: 1
      };

   function Lr(e, t) {
      var n = e || {},
         r = n.data || {};
      return Object.keys(n).forEach((function (e) {
         -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e) && (r[e] = n[e])
      })), {
         data: Object.entries(r).length > 0 ? r : void 0,
         timeout: n.timeout || t,
         headers: n.headers || {},
         queryParameters: n.queryParameters || {},
         cacheable: n.cacheable
      }
   }
   var qr = {
         Read: 1,
         Write: 2,
         Any: 3
      },
      Mr = 1,
      Hr = 2,
      Ur = 3,
      Fr = 12e4;

   function Br(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mr;
      return t(t({}, e), {}, {
         status: n,
         lastUpdate: Date.now()
      })
   }

   function Vr(e) {
      return "string" == typeof e ? {
         protocol: "https",
         url: e,
         accept: qr.Any
      } : {
         protocol: e.protocol || "https",
         url: e.url,
         accept: e.accept || qr.Any
      }
   }
   var zr = "GET",
      Wr = "POST";

   function Kr(e, t) {
      return Promise.all(t.map((function (t) {
         return e.get(t, (function () {
            return Promise.resolve(Br(t))
         }))
      }))).then((function (e) {
         var n = e.filter((function (e) {
               return function (e) {
                  return e.status === Mr || Date.now() - e.lastUpdate > Fr
               }(e)
            })),
            r = e.filter((function (e) {
               return function (e) {
                  return e.status === Ur && Date.now() - e.lastUpdate <= Fr
               }(e)
            })),
            o = [].concat(a(n), a(r));
         return {
            getTimeout: function (e, t) {
               return (0 === r.length && 0 === e ? 1 : r.length + 3 + e) * t
            },
            statelessHosts: o.length > 0 ? o.map((function (e) {
               return Vr(e)
            })) : t
         }
      }))
   }

   function Jr(e, n, r, o) {
      var c = [],
         i = function (e, n) {
            if (e.method === zr || void 0 === e.data && void 0 === n.data) return;
            var r = Array.isArray(e.data) ? e.data : t(t({}, e.data), n.data);
            return JSON.stringify(r)
         }(r, o),
         u = function (e, n) {
            var r = t(t({}, e.headers), n.headers),
               o = {};
            return Object.keys(r).forEach((function (e) {
               var t = r[e];
               o[e.toLowerCase()] = t
            })), o
         }(e, o),
         l = r.method,
         s = r.method !== zr ? {} : t(t({}, r.data), o.data),
         f = t(t(t({
            "x-algolia-agent": e.userAgent.value
         }, e.queryParameters), s), o.queryParameters),
         p = 0,
         m = function t(n, a) {
            var s = n.pop();
            if (void 0 === s) throw {
               name: "RetryError",
               message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
               transporterStackTrace: Gr(c)
            };
            var m = {
                  data: i,
                  headers: u,
                  method: l,
                  url: Qr(s, r.path, f),
                  connectTimeout: a(p, e.timeouts.connect),
                  responseTimeout: a(p, o.timeout)
               },
               d = function (e) {
                  var t = {
                     request: m,
                     response: e,
                     host: s,
                     triesLeft: n.length
                  };
                  return c.push(t), t
               },
               h = {
                  onSucess: function (e) {
                     return function (e) {
                        try {
                           return JSON.parse(e.content)
                        } catch (t) {
                           throw function (e, t) {
                              return {
                                 name: "DeserializationError",
                                 message: e,
                                 response: t
                              }
                           }(t.message, e)
                        }
                     }(e)
                  },
                  onRetry: function (r) {
                     var o = d(r);
                     return r.isTimedOut && p++, Promise.all([e.logger.info("Retryable failure", Zr(o)), e.hostsCache.set(s, Br(s, r.isTimedOut ? Ur : Hr))]).then((function () {
                        return t(n, a)
                     }))
                  },
                  onFail: function (e) {
                     throw d(e),
                        function (e, t) {
                           var n = e.content,
                              r = e.status,
                              o = n;
                           try {
                              o = JSON.parse(n).message
                           } catch (e) {}
                           return function (e, t, n) {
                              return {
                                 name: "ApiError",
                                 message: e,
                                 status: t,
                                 transporterStackTrace: n
                              }
                           }(o, r, t)
                        }(e, Gr(c))
                  }
               };
            return e.requester.send(m).then((function (e) {
               return function (e, t) {
                  return function (e) {
                     var t = e.status;
                     return e.isTimedOut || function (e) {
                        var t = e.isTimedOut,
                           n = e.status;
                        return !t && 0 == ~~n
                     }(e) || 2 != ~~(t / 100) && 4 != ~~(t / 100)
                  }(e) ? t.onRetry(e) : 2 == ~~(e.status / 100) ? t.onSucess(e) : t.onFail(e)
               }(e, h)
            }))
         };
      return Kr(e.hostsCache, n).then((function (e) {
         return m(a(e.statelessHosts).reverse(), e.getTimeout)
      }))
   }

   function $r(e) {
      var t = {
         value: "Algolia for JavaScript (".concat(e, ")"),
         add: function (e) {
            var n = "; ".concat(e.segment).concat(void 0 !== e.version ? " (".concat(e.version, ")") : "");
            return -1 === t.value.indexOf(n) && (t.value = "".concat(t.value).concat(n)), t
         }
      };
      return t
   }

   function Qr(e, t, n) {
      var r = Yr(n),
         o = "".concat(e.protocol, "://").concat(e.url, "/").concat("/" === t.charAt(0) ? t.substr(1) : t);
      return r.length && (o += "?".concat(r)), o
   }

   function Yr(e) {
      return Object.keys(e).map((function (t) {
         return Nr("%s=%s", t, (n = e[t], "[object Object]" === Object.prototype.toString.call(n) || "[object Array]" === Object.prototype.toString.call(n) ? JSON.stringify(e[t]) : e[t]));
         var n
      })).join("&")
   }

   function Gr(e) {
      return e.map((function (e) {
         return Zr(e)
      }))
   }

   function Zr(e) {
      var n = e.request.headers["x-algolia-api-key"] ? {
         "x-algolia-api-key": "*****"
      } : {};
      return t(t({}, e), {}, {
         request: t(t({}, e.request), {}, {
            headers: t(t({}, e.request.headers), n)
         })
      })
   }
   var Xr = function (e) {
         var n = e.appId,
            r = function (e, t, n) {
               var r = {
                  "x-algolia-api-key": n,
                  "x-algolia-application-id": t
               };
               return {
                  headers: function () {
                     return e === Tr.WithinHeaders ? r : {}
                  },
                  queryParameters: function () {
                     return e === Tr.WithinQueryParameters ? r : {}
                  }
               }
            }(void 0 !== e.authMode ? e.authMode : Tr.WithinHeaders, n, e.apiKey),
            o = function (e) {
               var t = e.hostsCache,
                  n = e.logger,
                  r = e.requester,
                  o = e.requestsCache,
                  c = e.responsesCache,
                  a = e.timeouts,
                  u = e.userAgent,
                  l = e.hosts,
                  s = e.queryParameters,
                  f = {
                     hostsCache: t,
                     logger: n,
                     requester: r,
                     requestsCache: o,
                     responsesCache: c,
                     timeouts: a,
                     userAgent: u,
                     headers: e.headers,
                     queryParameters: s,
                     hosts: l.map((function (e) {
                        return Vr(e)
                     })),
                     read: function (e, t) {
                        var n = Lr(t, f.timeouts.read),
                           r = function () {
                              return Jr(f, f.hosts.filter((function (e) {
                                 return 0 != (e.accept & qr.Read)
                              })), e, n)
                           };
                        if (!0 !== (void 0 !== n.cacheable ? n.cacheable : e.cacheable)) return r();
                        var o = {
                           request: e,
                           mappedRequestOptions: n,
                           transporter: {
                              queryParameters: f.queryParameters,
                              headers: f.headers
                           }
                        };
                        return f.responsesCache.get(o, (function () {
                           return f.requestsCache.get(o, (function () {
                              return f.requestsCache.set(o, r()).then((function (e) {
                                 return Promise.all([f.requestsCache.delete(o), e])
                              }), (function (e) {
                                 return Promise.all([f.requestsCache.delete(o), Promise.reject(e)])
                              })).then((function (e) {
                                 var t = i(e, 2);
                                 return t[0], t[1]
                              }))
                           }))
                        }), {
                           miss: function (e) {
                              return f.responsesCache.set(o, e)
                           }
                        })
                     },
                     write: function (e, t) {
                        return Jr(f, f.hosts.filter((function (e) {
                           return 0 != (e.accept & qr.Write)
                        })), e, Lr(t, f.timeouts.write))
                     }
                  };
               return f
            }(t(t({
               hosts: [{
                  url: "".concat(n, "-dsn.algolia.net"),
                  accept: qr.Read
               }, {
                  url: "".concat(n, ".algolia.net"),
                  accept: qr.Write
               }].concat(Ar([{
                  url: "".concat(n, "-1.algolianet.com")
               }, {
                  url: "".concat(n, "-2.algolianet.com")
               }, {
                  url: "".concat(n, "-3.algolianet.com")
               }]))
            }, e), {}, {
               headers: t(t(t({}, r.headers()), {
                  "content-type": "application/x-www-form-urlencoded"
               }), e.headers),
               queryParameters: t(t({}, r.queryParameters()), e.queryParameters)
            })),
            c = {
               transporter: o,
               appId: n,
               addAlgoliaAgent: function (e, t) {
                  o.userAgent.add({
                     segment: e,
                     version: t
                  })
               },
               clearCache: function () {
                  return Promise.all([o.requestsCache.clear(), o.responsesCache.clear()]).then((function () {}))
               }
            };
         return xr(c, e.methods)
      },
      eo = function (e) {
         return function (t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
               r = {
                  transporter: e.transporter,
                  appId: e.appId,
                  indexName: t
               };
            return xr(r, n.methods)
         }
      },
      to = function (e) {
         return function (n, r) {
            var o = n.map((function (e) {
               return t(t({}, e), {}, {
                  params: Yr(e.params || {})
               })
            }));
            return e.transporter.read({
               method: Wr,
               path: "1/indexes/*/queries",
               data: {
                  requests: o
               },
               cacheable: !0
            }, r)
         }
      },
      no = function (e) {
         return function (n, r) {
            return Promise.all(n.map((function (n) {
               var o = n.params,
                  i = o.facetName,
                  a = o.facetQuery,
                  u = c(o, Ir);
               return eo(e)(n.indexName, {
                  methods: {
                     searchForFacetValues: co
                  }
               }).searchForFacetValues(i, a, t(t({}, r), u))
            })))
         }
      },
      ro = function (e) {
         return function (t, n, r) {
            return e.transporter.read({
               method: Wr,
               path: Nr("1/answers/%s/prediction", e.indexName),
               data: {
                  query: t,
                  queryLanguages: n
               },
               cacheable: !0
            }, r)
         }
      },
      oo = function (e) {
         return function (t, n) {
            return e.transporter.read({
               method: Wr,
               path: Nr("1/indexes/%s/query", e.indexName),
               data: {
                  query: t
               },
               cacheable: !0
            }, n)
         }
      },
      co = function (e) {
         return function (t, n, r) {
            return e.transporter.read({
               method: Wr,
               path: Nr("1/indexes/%s/facets/%s/query", e.indexName, t),
               data: {
                  facetQuery: n
               },
               cacheable: !0
            }, r)
         }
      },
      io = 1,
      ao = 2,
      uo = 3;

   function lo(e, n, r) {
      var o, c = {
         appId: e,
         apiKey: n,
         timeouts: {
            connect: 1,
            read: 2,
            write: 30
         },
         requester: {
            send: function (e) {
               return new Promise((function (t) {
                  var n = new XMLHttpRequest;
                  n.open(e.method, e.url, !0), Object.keys(e.headers).forEach((function (t) {
                     return n.setRequestHeader(t, e.headers[t])
                  }));
                  var r, o = function (e, r) {
                        return setTimeout((function () {
                           n.abort(), t({
                              status: 0,
                              content: r,
                              isTimedOut: !0
                           })
                        }), 1e3 * e)
                     },
                     c = o(e.connectTimeout, "Connection timeout");
                  n.onreadystatechange = function () {
                     n.readyState > n.OPENED && void 0 === r && (clearTimeout(c), r = o(e.responseTimeout, "Socket timeout"))
                  }, n.onerror = function () {
                     0 === n.status && (clearTimeout(c), clearTimeout(r), t({
                        content: n.responseText || "Network request failed",
                        status: n.status,
                        isTimedOut: !1
                     }))
                  }, n.onload = function () {
                     clearTimeout(c), clearTimeout(r), t({
                        content: n.responseText,
                        status: n.status,
                        isTimedOut: !1
                     })
                  }, n.send(e.data)
               }))
            }
         },
         logger: (o = uo, {
            debug: function (e, t) {
               return io >= o && console.debug(e, t), Promise.resolve()
            },
            info: function (e, t) {
               return ao >= o && console.info(e, t), Promise.resolve()
            },
            error: function (e, t) {
               return console.error(e, t), Promise.resolve()
            }
         }),
         responsesCache: Cr(),
         requestsCache: Cr({
            serializable: !1
         }),
         hostsCache: Dr({
            caches: [kr({
               key: "".concat(Rr, "-").concat(e)
            }), Cr()]
         }),
         userAgent: $r(Rr).add({
            segment: "Browser",
            version: "lite"
         }),
         authMode: Tr.WithinQueryParameters
      };
      return Xr(t(t(t({}, c), r), {}, {
         methods: {
            search: to,
            searchForFacetValues: no,
            multipleQueries: to,
            multipleSearchForFacetValues: no,
            initIndex: function (e) {
               return function (t) {
                  return eo(e)(t, {
                     methods: {
                        search: oo,
                        searchForFacetValues: co,
                        findAnswers: ro
                     }
                  })
               }
            }
         }
      }))
   }
   lo.version = Rr;
   var so = "3.2.0";
   var fo = ["footer", "searchBox"];

   function po() {
      return po = Object.assign || function (e) {
         for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
         }
         return e
      }, po.apply(this, arguments)
   }

   function mo(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
         var r = Object.getOwnPropertySymbols(e);
         t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
         }))), n.push.apply(n, r)
      }
      return n
   }

   function ho(e) {
      for (var t = 1; t < arguments.length; t++) {
         var n = null != arguments[t] ? arguments[t] : {};
         t % 2 ? mo(Object(n), !0).forEach((function (t) {
            vo(e, t, n[t])
         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mo(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
         }))
      }
      return e
   }

   function vo(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
         value: n,
         enumerable: !0,
         configurable: !0,
         writable: !0
      }) : e[t] = n, e
   }

   function yo(e, t) {
      return function (e) {
         if (Array.isArray(e)) return e
      }(e) || function (e, t) {
         var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
         if (null == n) return;
         var r, o, c = [],
            i = !0,
            a = !1;
         try {
            for (n = n.call(e); !(i = (r = n.next()).done) && (c.push(r.value), !t || c.length !== t); i = !0);
         } catch (e) {
            a = !0, o = e
         } finally {
            try {
               i || null == n.return || n.return()
            } finally {
               if (a) throw o
            }
         }
         return c
      }(e, t) || function (e, t) {
         if (!e) return;
         if ("string" == typeof e) return _o(e, t);
         var n = Object.prototype.toString.call(e).slice(8, -1);
         "Object" === n && e.constructor && (n = e.constructor.name);
         if ("Map" === n || "Set" === n) return Array.from(e);
         if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _o(e, t)
      }(e, t) || function () {
         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
   }

   function _o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
   }

   function bo(e, t) {
      if (null == e) return {};
      var n, r, o = function (e, t) {
         if (null == e) return {};
         var n, r, o = {},
            c = Object.keys(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
         return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
         var c = Object.getOwnPropertySymbols(e);
         for (r = 0; r < c.length; r++) n = c[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
   }

   function go(e) {
      var t = e.appId,
         n = e.apiKey,
         r = e.indexName,
         o = e.placeholder,
         c = void 0 === o ? "Rechercher…" : o,
         i = e.searchParameters,
         a = e.onClose,
         u = void 0 === a ? cr : a,
         l = e.transformItems,
         s = void 0 === l ? or : l,
         f = e.hitComponent,
         p = void 0 === f ? In : f,
         m = e.resultsFooterComponent,
         d = void 0 === m ? function () {
            return null
         } : m,
         h = e.navigator,
         v = e.initialScrollY,
         y = void 0 === v ? 0 : v,
         _ = e.transformSearchClient,
         b = void 0 === _ ? or : _,
         g = e.disableUserPersonalization,
         O = void 0 !== g && g,
         S = e.initialQuery,
         E = void 0 === S ? "" : S,
         w = e.translations,
         j = void 0 === w ? {} : w,
         P = e.getMissingResultsUrl,
         I = j.footer,
         k = j.searchBox,
         D = bo(j, fo),
         C = yo(Be.useState({
            query: "",
            collections: [],
            completion: null,
            context: {},
            isOpen: !1,
            activeItemId: null,
            status: "idle"
         }), 2),
         A = C[0],
         x = C[1],
         N = Be.useRef(null),
         R = Be.useRef(null),
         T = Be.useRef(null),
         L = Be.useRef(null),
         q = Be.useRef(null),
         M = Be.useRef(10),
         H = Be.useRef("undefined" != typeof window ? window.getSelection().toString().slice(0, 64) : "").current,
         U = Be.useRef(E || H).current,
         F = function (e, t, n) {
            return Be.useMemo((function () {
               var r = lo(e, t);
               return r.addAlgoliaAgent("docsearch", so), !1 === /docsearch.js \(.*\)/.test(r.transporter.userAgent.value) && r.addAlgoliaAgent("docsearch-react", so), n(r)
            }), [e, t, n])
         }(t, n, b),
         B = Be.useRef(Pr({
            key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(r),
            limit: 10
         })).current,
         V = Be.useRef(Pr({
            key: "__DOCSEARCH_RECENT_SEARCHES__".concat(r),
            limit: 0 === B.getAll().length ? 7 : 4
         })).current,
         z = Be.useCallback((function (e) {
            if (!O) {
               var t = "content" === e.type ? e.__docsearch_parent : e;
               t && -1 === B.getAll().findIndex((function (e) {
                  return e.objectID === t.objectID
               })) && V.add(t)
            }
         }), [B, V, O]),
         W = Be.useMemo((function () {
            return En({
               id: "docsearch",
               defaultActiveItemId: 0,
               placeholder: c,
               openOnFocus: !0,
               initialState: {
                  query: U,
                  context: {
                     searchSuggestions: []
                  }
               },
               navigator: h,
               onStateChange: function (e) {
                  x(e.state)
               },
               getSources: function (e) {
                  var t = e.query,
                     n = e.state,
                     o = e.setContext,
                     c = e.setStatus;
                  return t ? F.search([{
                     query: t,
                     indexName: r,
                     params: ho({
                        attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"],
                        attributesToSnippet: ["hierarchy.lvl1:".concat(M.current), "hierarchy.lvl2:".concat(M.current), "hierarchy.lvl3:".concat(M.current), "hierarchy.lvl4:".concat(M.current), "hierarchy.lvl5:".concat(M.current), "hierarchy.lvl6:".concat(M.current), "content:".concat(M.current)],
                        snippetEllipsisText: "…",
                        highlightPreTag: "<mark>",
                        highlightPostTag: "</mark>",
                        hitsPerPage: 20
                     }, i)
                  }]).catch((function (e) {
                     throw "RetryError" === e.name && c("error"), e
                  })).then((function (e) {
                     var t = e.results[0],
                        r = t.hits,
                        c = t.nbHits,
                        i = rr(r, (function (e) {
                           return ur(e)
                        }));
                     return n.context.searchSuggestions.length < Object.keys(i).length && o({
                        searchSuggestions: Object.keys(i)
                     }), o({
                        nbHits: c
                     }), Object.values(i).map((function (e, t) {
                        return {
                           sourceId: "hits".concat(t),
                           onSelect: function (e) {
                              var t = e.item,
                                 n = e.event;
                              z(t), n.shiftKey || n.ctrlKey || n.metaKey || u()
                           },
                           getItemUrl: function (e) {
                              return e.item.url
                           },
                           getItems: function () {
                              return Object.values(rr(e, (function (e) {
                                 return e.hierarchy.lvl1
                              }))).map(s).map((function (e) {
                                 return e.map((function (t) {
                                    return ho(ho({}, t), {}, {
                                       __docsearch_parent: "lvl1" !== t.type && e.find((function (e) {
                                          return "lvl1" === e.type && e.hierarchy.lvl1 === t.hierarchy.lvl1
                                       }))
                                    })
                                 }))
                              })).flat()
                           }
                        }
                     }))
                  })) : O ? [] : [{
                     sourceId: "recentSearches",
                     onSelect: function (e) {
                        var t = e.item,
                           n = e.event;
                        z(t), n.shiftKey || n.ctrlKey || n.metaKey || u()
                     },
                     getItemUrl: function (e) {
                        return e.item.url
                     },
                     getItems: function () {
                        return V.getAll()
                     }
                  }, {
                     sourceId: "favoriteSearches",
                     onSelect: function (e) {
                        var t = e.item,
                           n = e.event;
                        z(t), n.shiftKey || n.ctrlKey || n.metaKey || u()
                     },
                     getItemUrl: function (e) {
                        return e.item.url
                     },
                     getItems: function () {
                        return B.getAll()
                     }
                  }]
               }
            })
         }), [r, i, F, u, V, B, z, U, c, h, s, O]),
         K = W.getEnvironmentProps,
         J = W.getRootProps,
         $ = W.refresh;
      return function (e) {
            var t = e.getEnvironmentProps,
               n = e.panelElement,
               r = e.formElement,
               o = e.inputElement;
            Be.useEffect((function () {
               if (n && r && o) {
                  var e = t({
                        panelElement: n,
                        formElement: r,
                        inputElement: o
                     }),
                     c = e.onTouchStart,
                     i = e.onTouchMove;
                  return window.addEventListener("touchstart", c), window.addEventListener("touchmove", i),
                     function () {
                        window.removeEventListener("touchstart", c), window.removeEventListener("touchmove", i)
                     }
               }
            }), [t, n, r, o])
         }({
            getEnvironmentProps: K,
            panelElement: L.current,
            formElement: T.current,
            inputElement: q.current
         }),
         function (e) {
            var t = e.container;
            Be.useEffect((function () {
               if (t) {
                  var e = t.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"),
                     n = e[0],
                     r = e[e.length - 1];
                  return t.addEventListener("keydown", o),
                     function () {
                        t.removeEventListener("keydown", o)
                     }
               }

               function o(e) {
                  "Tab" === e.key && (e.shiftKey ? document.activeElement === n && (e.preventDefault(), r.focus()) : document.activeElement === r && (e.preventDefault(), n.focus()))
               }
            }), [t])
         }({
            container: N.current
         }), Be.useEffect((function () {
            return document.body.classList.add("DocSearch--active"),
               function () {
                  var e, t;
                  document.body.classList.remove("DocSearch--active"), null === (e = (t = window).scrollTo) || void 0 === e || e.call(t, 0, y)
               }
         }), []), Be.useEffect((function () {
            window.matchMedia("(max-width: 768px)").matches && (M.current = 5)
         }), []), Be.useEffect((function () {
            L.current && (L.current.scrollTop = 0)
         }), [A.query]), Be.useEffect((function () {
            U.length > 0 && ($(), q.current && q.current.focus())
         }), [U, $]), Be.useEffect((function () {
            function e() {
               if (R.current) {
                  var e = .01 * window.innerHeight;
                  R.current.style.setProperty("--docsearch-vh", "".concat(e, "px"))
               }
            }
            return e(), window.addEventListener("resize", e),
               function () {
                  window.removeEventListener("resize", e)
               }
         }), []), Be.createElement("div", po({
            ref: N
         }, J({
            "aria-expanded": !0
         }), {
            className: ["DocSearch", "DocSearch-Container", "stalled" === A.status && "DocSearch-Container--Stalled", "error" === A.status && "DocSearch-Container--Errored"].filter(Boolean).join(" "),
            role: "button",
            tabIndex: 0,
            onMouseDown: function (e) {
               e.target === e.currentTarget && u()
            }
         }), Be.createElement("div", {
            className: "DocSearch-Modal",
            ref: R
         }, Be.createElement("header", {
            className: "DocSearch-SearchBar",
            ref: T
         }, Be.createElement(Sr, po({}, W, {
            state: A,
            autoFocus: 0 === U.length,
            inputRef: q,
            isFromSelection: Boolean(U) && U === H,
            translations: k,
            onClose: u
         }))), Be.createElement("div", {
            className: "DocSearch-Dropdown",
            ref: L
         }, Be.createElement(_r, po({}, W, {
            indexName: r,
            state: A,
            hitComponent: p,
            resultsFooterComponent: d,
            disableUserPersonalization: O,
            recentSearches: V,
            favoriteSearches: B,
            inputRef: q,
            translations: D,
            getMissingResultsUrl: P,
            onItemClick: function (e) {
               z(e), u()
            }
         }))), Be.createElement("footer", {
            className: "DocSearch-Footer"
         }, Be.createElement(Pn, {
            translations: I
         }))))
   }

   function Oo() {
      return Oo = Object.assign || function (e) {
         for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
         }
         return e
      }, Oo.apply(this, arguments)
   }

   function So(e, t) {
      return function (e) {
         if (Array.isArray(e)) return e
      }(e) || function (e, t) {
         var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
         if (null == n) return;
         var r, o, c = [],
            i = !0,
            a = !1;
         try {
            for (n = n.call(e); !(i = (r = n.next()).done) && (c.push(r.value), !t || c.length !== t); i = !0);
         } catch (e) {
            a = !0, o = e
         } finally {
            try {
               i || null == n.return || n.return()
            } finally {
               if (a) throw o
            }
         }
         return c
      }(e, t) || function (e, t) {
         if (!e) return;
         if ("string" == typeof e) return Eo(e, t);
         var n = Object.prototype.toString.call(e).slice(8, -1);
         "Object" === n && e.constructor && (n = e.constructor.name);
         if ("Map" === n || "Set" === n) return Array.from(e);
         if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Eo(e, t)
      }(e, t) || function () {
         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
   }

   function Eo(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
   }

   function wo(e) {
      var t, n, r = Be.useRef(null),
         o = So(Be.useState(!1), 2),
         c = o[0],
         i = o[1],
         a = So(Be.useState((null == e ? void 0 : e.initialQuery) || void 0), 2),
         u = a[0],
         l = a[1],
         s = Be.useCallback((function () {
            i(!0)
         }), [i]),
         f = Be.useCallback((function () {
            i(!1)
         }), [i]);
      return function (e) {
         var t = e.isOpen,
            n = e.onOpen,
            r = e.onClose,
            o = e.onInput,
            c = e.searchButtonRef;
         Be.useEffect((function () {
            function e(e) {
               (27 === e.keyCode && t || "k" === e.key && (e.metaKey || e.ctrlKey) || ! function (e) {
                  var t = e.target,
                     n = t.tagName;
                  return t.isContentEditable || "INPUT" === n || "SELECT" === n || "TEXTAREA" === n
               }(e) && "/" === e.key && !t) && (e.preventDefault(), t ? r() : document.body.classList.contains("DocSearch--active") || document.body.classList.contains("DocSearch--active") || n()), c && c.current === document.activeElement && o && /[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode)) && o(e)
            }
            return window.addEventListener("keydown", e),
               function () {
                  window.removeEventListener("keydown", e)
               }
         }), [t, n, r, o, c])
      }({
         isOpen: c,
         onOpen: s,
         onClose: f,
         onInput: Be.useCallback((function (e) {
            i(!0), l(e.key)
         }), [i, l]),
         searchButtonRef: r
      }), Be.createElement(Be.Fragment, null, Be.createElement(Ge, {
         ref: r,
         translations: null == e || null === (t = e.translations) || void 0 === t ? void 0 : t.button,
         onClick: s
      }), c && Ie(Be.createElement(go, Oo({}, e, {
         initialScrollY: window.scrollY,
         initialQuery: u,
         translations: null == e || null === (n = e.translations) || void 0 === n ? void 0 : n.modal,
         onClose: f
      })), document.body))
   }
   return function (e) {
      Ae(Be.createElement(wo, o({}, e, {
         transformSearchClient: function (t) {
            return t.addAlgoliaAgent("docsearch.js", so), e.transformSearchClient ? e.transformSearchClient(t) : t
         }
      })), function (e) {
         var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
         return "string" == typeof e ? t.document.querySelector(e) : e
      }(e.container, e.environment))
   }
}));
//# sourceMappingURL=index.js.map
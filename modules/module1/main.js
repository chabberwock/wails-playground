!(function (e, t) {
  debugger;
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = t(require('React'));
  else if ('function' == typeof define && define.amd) define(['React'], t);
  else {
    var r = 'object' == typeof exports ? t(require('React')) : t(e.React);
    for (var n in r) {
      debugger;
      ('object' == typeof exports ? exports : e)[n] = r[n];
    }
  }
})(self, (e) =>
  (() => {
    'use strict';
    var t = {
        626: (e, t, r) => {
          r.d(t, { A: () => c });
          var n = r(601),
            o = r.n(n),
            a = r(314),
            i = r.n(a)()(o());
          i.push([e.id, 'h1{\n  color: teal\n}', '']);
          const c = i;
        },
        314: (e) => {
          e.exports = function (e) {
            var t = [];
            return (
              (t.toString = function () {
                return this.map(function (t) {
                  var r = '',
                    n = void 0 !== t[5];
                  return (
                    t[4] && (r += '@supports ('.concat(t[4], ') {')),
                    t[2] && (r += '@media '.concat(t[2], ' {')),
                    n &&
                      (r += '@layer'.concat(
                        t[5].length > 0 ? ' '.concat(t[5]) : '',
                        ' {'
                      )),
                    (r += e(t)),
                    n && (r += '}'),
                    t[2] && (r += '}'),
                    t[4] && (r += '}'),
                    r
                  );
                }).join('');
              }),
              (t.i = function (e, r, n, o, a) {
                'string' == typeof e && (e = [[null, e, void 0]]);
                var i = {};
                if (n)
                  for (var c = 0; c < this.length; c++) {
                    var s = this[c][0];
                    null != s && (i[s] = !0);
                  }
                for (var u = 0; u < e.length; u++) {
                  var l = [].concat(e[u]);
                  (n && i[l[0]]) ||
                    (void 0 !== a &&
                      (void 0 === l[5] ||
                        (l[1] = '@layer'
                          .concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
                          .concat(l[1], '}')),
                      (l[5] = a)),
                    r &&
                      (l[2]
                        ? ((l[1] = '@media '
                            .concat(l[2], ' {')
                            .concat(l[1], '}')),
                          (l[2] = r))
                        : (l[2] = r)),
                    o &&
                      (l[4]
                        ? ((l[1] = '@supports ('
                            .concat(l[4], ') {')
                            .concat(l[1], '}')),
                          (l[4] = o))
                        : (l[4] = ''.concat(o))),
                    t.push(l));
                }
              }),
              t
            );
          };
        },
        601: (e) => {
          e.exports = function (e) {
            return e[1];
          };
        },
        72: (e) => {
          var t = [];
          function r(e) {
            for (var r = -1, n = 0; n < t.length; n++)
              if (t[n].identifier === e) {
                r = n;
                break;
              }
            return r;
          }
          function n(e, n) {
            for (var a = {}, i = [], c = 0; c < e.length; c++) {
              var s = e[c],
                u = n.base ? s[0] + n.base : s[0],
                l = a[u] || 0,
                p = ''.concat(u, ' ').concat(l);
              a[u] = l + 1;
              var f = r(p),
                d = {
                  css: s[1],
                  media: s[2],
                  sourceMap: s[3],
                  supports: s[4],
                  layer: s[5],
                };
              if (-1 !== f) t[f].references++, t[f].updater(d);
              else {
                var v = o(d, n);
                (n.byIndex = c),
                  t.splice(c, 0, { identifier: p, updater: v, references: 1 });
              }
              i.push(p);
            }
            return i;
          }
          function o(e, t) {
            var r = t.domAPI(t);
            return (
              r.update(e),
              function (t) {
                if (t) {
                  if (
                    t.css === e.css &&
                    t.media === e.media &&
                    t.sourceMap === e.sourceMap &&
                    t.supports === e.supports &&
                    t.layer === e.layer
                  )
                    return;
                  r.update((e = t));
                } else r.remove();
              }
            );
          }
          e.exports = function (e, o) {
            var a = n((e = e || []), (o = o || {}));
            return function (e) {
              e = e || [];
              for (var i = 0; i < a.length; i++) {
                var c = r(a[i]);
                t[c].references--;
              }
              for (var s = n(e, o), u = 0; u < a.length; u++) {
                var l = r(a[u]);
                0 === t[l].references && (t[l].updater(), t.splice(l, 1));
              }
              a = s;
            };
          };
        },
        659: (e) => {
          var t = {};
          e.exports = function (e, r) {
            var n = (function (e) {
              if (void 0 === t[e]) {
                var r = document.querySelector(e);
                if (
                  window.HTMLIFrameElement &&
                  r instanceof window.HTMLIFrameElement
                )
                  try {
                    r = r.contentDocument.head;
                  } catch (e) {
                    r = null;
                  }
                t[e] = r;
              }
              return t[e];
            })(e);
            if (!n)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            n.appendChild(r);
          };
        },
        540: (e) => {
          e.exports = function (e) {
            var t = document.createElement('style');
            return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
          };
        },
        56: (e, t, r) => {
          e.exports = function (e) {
            var t = r.nc;
            t && e.setAttribute('nonce', t);
          };
        },
        825: (e) => {
          e.exports = function (e) {
            if ('undefined' == typeof document)
              return { update: function () {}, remove: function () {} };
            var t = e.insertStyleElement(e);
            return {
              update: function (r) {
                !(function (e, t, r) {
                  var n = '';
                  r.supports && (n += '@supports ('.concat(r.supports, ') {')),
                    r.media && (n += '@media '.concat(r.media, ' {'));
                  var o = void 0 !== r.layer;
                  o &&
                    (n += '@layer'.concat(
                      r.layer.length > 0 ? ' '.concat(r.layer) : '',
                      ' {'
                    )),
                    (n += r.css),
                    o && (n += '}'),
                    r.media && (n += '}'),
                    r.supports && (n += '}');
                  var a = r.sourceMap;
                  a &&
                    'undefined' != typeof btoa &&
                    (n +=
                      '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                        ' */'
                      )),
                    t.styleTagTransform(n, e, t.options);
                })(t, e, r);
              },
              remove: function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(t);
              },
            };
          };
        },
        113: (e) => {
          e.exports = function (e, t) {
            if (t.styleSheet) t.styleSheet.cssText = e;
            else {
              for (; t.firstChild; ) t.removeChild(t.firstChild);
              t.appendChild(document.createTextNode(e));
            }
          };
        },
        883: (t) => {
          t.exports = e;
        },
      },
      r = {};
    function n(e) {
      var o = r[e];
      if (void 0 !== o) return o.exports;
      var a = (r[e] = { id: e, exports: {} });
      return t[e](a, a.exports, n), a.exports;
    }
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
      (n.d = (e, t) => {
        for (var r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (n.r = (e) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.nc = void 0);
    var o = {};
    n.r(o), n.d(o, { default: () => S });
    var a = n(883),
      i = n.n(a),
      c = n(72),
      s = n.n(c),
      u = n(825),
      l = n.n(u),
      p = n(659),
      f = n.n(p),
      d = n(56),
      v = n.n(d),
      m = n(540),
      y = n.n(m),
      h = n(113),
      b = n.n(h),
      g = n(626),
      x = {};
    (x.styleTagTransform = b()),
      (x.setAttributes = v()),
      (x.insert = f().bind(null, 'head')),
      (x.domAPI = l()),
      (x.insertStyleElement = y()),
      s()(g.A, x),
      g.A && g.A.locals && g.A.locals;
    const S = function () {
      return i().createElement(
        'div',
        null,
        i().createElement('h2', null, 'Welcome to React App Server 1'),
        i().createElement('h3', null, 'Date : ', new Date().toDateString())
      );
    };
    return o;
  })()
);

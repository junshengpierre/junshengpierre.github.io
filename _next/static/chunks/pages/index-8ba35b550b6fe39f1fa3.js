_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [7],
  {
    Lnxd: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return c
      })
      var n = r('q1tI'),
        a = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        s = n.createContext && n.createContext(a),
        i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
              return e
            }).apply(this, arguments)
        },
        o = function (e, t) {
          var r = {}
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n])
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0
            for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
              t.indexOf(n[a]) < 0 && (r[n[a]] = e[n[a]])
          }
          return r
        }
      function c(e) {
        return function (t) {
          return n.createElement(
            l,
            i({ attr: i({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map(function (t, r) {
                  return n.createElement(
                    t.tag,
                    i({ key: r }, t.attr),
                    e(t.child)
                  )
                })
              )
            })(e.child)
          )
        }
      }
      function l(e) {
        var t = function (t) {
          var r,
            a = e.size || t.size || '1em'
          t.className && (r = t.className),
            e.className && (r = (r ? r + ' ' : '') + e.className)
          var s = e.attr,
            c = e.title,
            l = o(e, ['attr', 'title'])
          return n.createElement(
            'svg',
            i(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: '0',
              },
              t.attr,
              s,
              l,
              {
                className: r,
                style: i({ color: e.color || t.color }, t.style, e.style),
                height: a,
                width: a,
                xmlns: 'http://www.w3.org/2000/svg',
              }
            ),
            c && n.createElement('title', null, c),
            e.children
          )
        }
        return void 0 !== s
          ? n.createElement(s.Consumer, null, function (e) {
              return t(e)
            })
          : t(a)
      }
    },
    Qetd: function (e, t, r) {
      'use strict'
      var n = Object.assign.bind(Object)
      ;(e.exports = n), (e.exports.default = e.exports)
    },
    RNiq: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('q1tI'),
        a = r.n(n)
      var s = (function () {
          function e(e) {
            var t = this
            ;(this._insertTag = function (e) {
              var r
              ;(r =
                0 === t.tags.length
                  ? t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, r),
                t.tags.push(e)
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.before = null)
          }
          var t = e.prototype
          return (
            (t.hydrate = function (e) {
              e.forEach(this._insertTag)
            }),
            (t.insert = function (e) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
                this._insertTag(
                  (function (e) {
                    var t = document.createElement('style')
                    return (
                      t.setAttribute('data-emotion', e.key),
                      void 0 !== e.nonce && t.setAttribute('nonce', e.nonce),
                      t.appendChild(document.createTextNode('')),
                      t.setAttribute('data-s', ''),
                      t
                    )
                  })(this)
                )
              var t = this.tags[this.tags.length - 1]
              if (this.isSpeedy) {
                var r = (function (e) {
                  if (e.sheet) return e.sheet
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t]
                })(t)
                try {
                  r.insertRule(e, r.cssRules.length)
                } catch (i) {
                  0
                }
              } else t.appendChild(document.createTextNode(e))
              this.ctr++
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode.removeChild(e)
              }),
                (this.tags = []),
                (this.ctr = 0)
            }),
            e
          )
        })(),
        i = '-ms-',
        o = '-moz-',
        c = '-webkit-',
        l = 'comm',
        u = 'rule',
        f = 'decl',
        m = Math.abs,
        d = String.fromCharCode
      function h(e) {
        return e.trim()
      }
      function p(e, t, r) {
        return e.replace(t, r)
      }
      function g(e, t) {
        return 0 | e.charCodeAt(t)
      }
      function v(e, t, r) {
        return e.slice(t, r)
      }
      function y(e) {
        return e.length
      }
      function b(e) {
        return e.length
      }
      function w(e, t) {
        return t.push(e), e
      }
      function x(e, t) {
        return e.map(t).join('')
      }
      var k = 1,
        N = 1,
        S = 0,
        C = 0,
        $ = 0,
        j = ''
      function A(e, t, r, n, a, s, i) {
        return {
          value: e,
          root: t,
          parent: r,
          type: n,
          props: a,
          children: s,
          line: k,
          column: N,
          length: i,
          return: '',
        }
      }
      function _(e, t, r) {
        return A(e, t.root, t.parent, r, t.props, t.children, 0)
      }
      function E() {
        return ($ = C < S ? g(j, C++) : 0), N++, 10 === $ && ((N = 1), k++), $
      }
      function O() {
        return g(j, C)
      }
      function I() {
        return C
      }
      function R(e, t) {
        return v(j, e, t)
      }
      function z(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4
          case 58:
            return 3
          case 34:
          case 39:
          case 40:
          case 91:
            return 2
          case 41:
          case 93:
            return 1
        }
        return 0
      }
      function P(e) {
        return (k = N = 1), (S = y((j = e))), (C = 0), []
      }
      function T(e) {
        return (j = ''), e
      }
      function G(e) {
        return h(
          R(
            C - 1,
            (function e(t) {
              for (; E(); )
                switch ($) {
                  case t:
                    return C
                  case 34:
                  case 39:
                    return e(34 === t || 39 === t ? t : $)
                  case 40:
                    41 === t && e(t)
                    break
                  case 92:
                    E()
                }
              return C
            })(91 === e ? e + 2 : 40 === e ? e + 1 : e)
          )
        )
      }
      function q(e) {
        for (; ($ = O()) && $ < 33; ) E()
        return z(e) > 2 || z($) > 3 ? '' : ' '
      }
      function D(e, t) {
        for (; E() && e + $ !== 57 && (e + $ !== 84 || 47 !== O()); );
        return '/*' + R(t, C - 1) + '*' + d(47 === e ? e : E())
      }
      function M(e) {
        for (; !z(O()); ) E()
        return R(e, C)
      }
      function W(e) {
        return T(
          (function e(t, r, n, a, s, i, o, c, l) {
            var u = 0,
              f = 0,
              m = o,
              h = 0,
              g = 0,
              v = 0,
              b = 1,
              x = 1,
              k = 1,
              N = 0,
              S = '',
              C = s,
              $ = i,
              j = a,
              A = S
            for (; x; )
              switch (((v = N), (N = E()))) {
                case 34:
                case 39:
                case 91:
                case 40:
                  A += G(N)
                  break
                case 9:
                case 10:
                case 13:
                case 32:
                  A += q(v)
                  break
                case 47:
                  switch (O()) {
                    case 42:
                    case 47:
                      w(U(D(E(), I()), r, n), l)
                      break
                    default:
                      A += '/'
                  }
                  break
                case 123 * b:
                  c[u++] = y(A) * k
                case 125 * b:
                case 59:
                case 0:
                  switch (N) {
                    case 0:
                    case 125:
                      x = 0
                    case 59 + f:
                      g > 0 &&
                        w(
                          g > 32
                            ? F(A + ';', a, n, m - 1)
                            : F(p(A, ' ', '') + ';', a, n, m - 2),
                          l
                        )
                      break
                    case 59:
                      A += ';'
                    default:
                      if (
                        (w(
                          (j = J(
                            A,
                            r,
                            n,
                            u,
                            f,
                            s,
                            c,
                            S,
                            (C = []),
                            ($ = []),
                            m
                          )),
                          i
                        ),
                        123 === N)
                      )
                        if (0 === f) e(A, r, j, j, C, i, m, c, $)
                        else
                          switch (h) {
                            case 100:
                            case 109:
                            case 115:
                              e(
                                t,
                                j,
                                j,
                                a &&
                                  w(
                                    J(t, j, j, 0, 0, s, c, S, s, (C = []), m),
                                    $
                                  ),
                                s,
                                $,
                                m,
                                c,
                                a ? C : $
                              )
                              break
                            default:
                              e(A, j, j, j, [''], $, m, c, $)
                          }
                  }
                  ;(u = f = g = 0), (b = k = 1), (S = A = ''), (m = o)
                  break
                case 58:
                  ;(m = 1 + y(A)), (g = v)
                default:
                  switch (((A += d(N)), N * b)) {
                    case 38:
                      k = f > 0 ? 1 : ((A += '\f'), -1)
                      break
                    case 44:
                      ;(c[u++] = (y(A) - 1) * k), (k = 1)
                      break
                    case 64:
                      45 === O() && (A += G(E())),
                        (h = O()),
                        (f = y((S = A += M(I())))),
                        N++
                      break
                    case 45:
                      45 === v && 2 == y(A) && (b = 0)
                  }
              }
            return i
          })('', null, null, null, [''], (e = P(e)), 0, [0], e)
        )
      }
      function J(e, t, r, n, a, s, i, o, c, l, f) {
        for (
          var d = a - 1, g = 0 === a ? s : [''], y = b(g), w = 0, x = 0, k = 0;
          w < n;
          ++w
        )
          for (
            var N = 0, S = v(e, d + 1, (d = m((x = i[w])))), C = e;
            N < y;
            ++N
          )
            (C = h(x > 0 ? g[N] + ' ' + S : p(S, /&\f/g, g[N]))) && (c[k++] = C)
        return A(e, t, r, 0 === a ? u : o, c, l, f)
      }
      function U(e, t, r) {
        return A(e, t, r, l, d($), v(e, 2, -2), 0)
      }
      function F(e, t, r, n) {
        return A(e, t, r, f, v(e, 0, n), v(e, n + 1, -1), n)
      }
      function L(e, t) {
        switch (
          (function (e, t) {
            return (
              (((((((t << 2) ^ g(e, 0)) << 2) ^ g(e, 1)) << 2) ^ g(e, 2)) <<
                2) ^
              g(e, 3)
            )
          })(e, t)
        ) {
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return c + e + e
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return c + e + o + e + i + e + e
          case 6828:
          case 4268:
            return c + e + i + e + e
          case 6165:
            return c + e + i + 'flex-' + e + e
          case 5187:
            return (
              c +
              e +
              p(e, /(\w+).+(:[^]+)/, c + 'box-$1$2' + i + 'flex-$1$2') +
              e
            )
          case 5443:
            return c + e + i + 'flex-item-' + p(e, /flex-|-self/, '') + e
          case 4675:
            return (
              c +
              e +
              i +
              'flex-line-pack' +
              p(e, /align-content|flex-|-self/, '') +
              e
            )
          case 5548:
            return c + e + i + p(e, 'shrink', 'negative') + e
          case 5292:
            return c + e + i + p(e, 'basis', 'preferred-size') + e
          case 6060:
            return (
              c +
              'box-' +
              p(e, '-grow', '') +
              c +
              e +
              i +
              p(e, 'grow', 'positive') +
              e
            )
          case 4554:
            return c + p(e, /([^-])(transform)/g, '$1' + c + '$2') + e
          case 6187:
            return (
              p(
                p(p(e, /(zoom-|grab)/, c + '$1'), /(image-set)/, c + '$1'),
                e,
                ''
              ) + e
            )
          case 5495:
          case 3959:
            return p(e, /(image-set\([^]*)/, c + '$1$`$1')
          case 4968:
            return (
              p(
                p(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  c + 'box-pack:$3' + i + 'flex-pack:$3'
                ),
                /s.+-b[^;]+/,
                'justify'
              ) +
              c +
              e +
              e
            )
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return p(e, /(.+)-inline(.+)/, c + '$1$2') + e
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (y(e) - 1 - t > 6)
              switch (g(e, t + 1)) {
                case 109:
                  return (
                    p(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      '$1' + c + '$2-$3$1' + o + '$2-$3'
                    ) + e
                  )
                case 102:
                  return (
                    p(e, /(.+:)(.+)-([^]+)/, '$1' + c + '$2-$3$1' + o + '$3') +
                    e
                  )
                case 115:
                  return L(p(e, 'stretch', 'fill-available'), t) + e
              }
            break
          case 4949:
            if (115 !== g(e, t + 1)) break
          case 6444:
            switch (
              g(
                e,
                y(e) -
                  3 -
                  (~(function (e, t) {
                    return e.indexOf(t)
                  })(e, '!important') && 10)
              )
            ) {
              case 107:
              case 111:
                return p(e, e, c + e) + e
              case 101:
                return (
                  p(
                    e,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    '$1' +
                      c +
                      (45 === g(e, 14) ? 'inline-' : '') +
                      'box$3$1' +
                      c +
                      '$2$3$1' +
                      i +
                      '$2box$3'
                  ) + e
                )
            }
            break
          case 5936:
            switch (g(e, t + 11)) {
              case 114:
                return c + e + i + p(e, /[svh]\w+-[tblr]{2}/, 'tb') + e
              case 108:
                return c + e + i + p(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e
              case 45:
                return c + e + i + p(e, /[svh]\w+-[tblr]{2}/, 'lr') + e
            }
            return c + e + i + e + e
        }
        return e
      }
      function B(e, t) {
        for (var r = '', n = b(e), a = 0; a < n; a++)
          r += t(e[a], a, e, t) || ''
        return r
      }
      function H(e, t, r, n) {
        switch (e.type) {
          case '@import':
          case f:
            return (e.return = e.return || e.value)
          case l:
            return ''
          case u:
            e.value = e.props.join(',')
        }
        return y((r = B(e.children, n)))
          ? (e.return = e.value + '{' + r + '}')
          : ''
      }
      function X(e) {
        return function (t) {
          t.root || ((t = t.return) && e(t))
        }
      }
      var Q = function (e) {
          var t = {}
          return function (r) {
            return void 0 === t[r] && (t[r] = e(r)), t[r]
          }
        },
        Z = function (e, t) {
          return T(
            (function (e, t) {
              var r = -1,
                n = 44
              do {
                switch (z(n)) {
                  case 0:
                    38 === n && 12 === O() && (t[r] = 1), (e[r] += M(C - 1))
                    break
                  case 2:
                    e[r] += G(n)
                    break
                  case 4:
                    if (44 === n) {
                      ;(e[++r] = 58 === O() ? '&\f' : ''), (t[r] = e[r].length)
                      break
                    }
                  default:
                    e[r] += d(n)
                }
              } while ((n = E()))
              return e
            })(P(e), t)
          )
        },
        K = new WeakMap(),
        V = function (e) {
          if ('rule' === e.type && e.parent && e.length) {
            for (
              var t = e.value,
                r = e.parent,
                n = e.column === r.column && e.line === r.line;
              'rule' !== r.type;

            )
              r = r.parent
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || K.get(r)) &&
              !n
            ) {
              K.set(e, !0)
              for (
                var a = [], s = Z(t, a), i = r.props, o = 0, c = 0;
                o < s.length;
                o++
              )
                for (var l = 0; l < i.length; l++, c++)
                  e.props[c] = a[o]
                    ? s[o].replace(/&\f/g, i[l])
                    : i[l] + ' ' + s[o]
            }
          }
        },
        Y = function (e) {
          if ('decl' === e.type) {
            var t = e.value
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ''), (e.value = ''))
          }
        },
        ee = [
          function (e, t, r, n) {
            if (!e.return)
              switch (e.type) {
                case f:
                  e.return = L(e.value, e.length)
                  break
                case '@keyframes':
                  return B([_(p(e.value, '@', '@' + c), e, '')], n)
                case u:
                  if (e.length)
                    return x(e.props, function (t) {
                      switch (
                        (function (e, t) {
                          return (e = t.exec(e)) ? e[0] : e
                        })(t, /(::plac\w+|:read-\w+)/)
                      ) {
                        case ':read-only':
                        case ':read-write':
                          return B(
                            [_(p(t, /:(read-\w+)/, ':-moz-$1'), e, '')],
                            n
                          )
                        case '::placeholder':
                          return B(
                            [
                              _(
                                p(t, /:(plac\w+)/, ':' + c + 'input-$1'),
                                e,
                                ''
                              ),
                              _(p(t, /:(plac\w+)/, ':-moz-$1'), e, ''),
                              _(p(t, /:(plac\w+)/, i + 'input-$1'), e, ''),
                            ],
                            n
                          )
                      }
                      return ''
                    })
              }
          },
        ],
        te = function (e) {
          var t = e.key
          if ('css' === t) {
            var r = document.querySelectorAll(
              'style[data-emotion]:not([data-s])'
            )
            Array.prototype.forEach.call(r, function (e) {
              document.head.appendChild(e), e.setAttribute('data-s', '')
            })
          }
          var n = e.stylisPlugins || ee
          var a,
            i,
            o = {},
            c = []
          ;(a = e.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion]'),
              function (e) {
                var r = e.getAttribute('data-emotion').split(' ')
                if (r[0] === t) {
                  for (var n = 1; n < r.length; n++) o[r[n]] = !0
                  c.push(e)
                }
              }
            )
          var l = [V, Y]
          var u,
            f = [
              H,
              X(function (e) {
                u.insert(e)
              }),
            ],
            m = (function (e) {
              var t = b(e)
              return function (r, n, a, s) {
                for (var i = '', o = 0; o < t; o++) i += e[o](r, n, a, s) || ''
                return i
              }
            })(l.concat(n, f))
          i = function (e, t, r, n) {
            ;(u = r),
              B(W(e ? e + '{' + t.styles + '}' : t.styles), m),
              n && (d.inserted[t.name] = !0)
          }
          var d = {
            key: t,
            sheet: new s({
              key: t,
              container: a,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
            }),
            nonce: e.nonce,
            inserted: o,
            registered: {},
            insert: i,
          }
          return d.sheet.hydrate(c), d
        }
      var re = function (e) {
          for (var t, r = 0, n = 0, a = e.length; a >= 4; ++n, a -= 4)
            (t =
              1540483477 *
                (65535 &
                  (t =
                    (255 & e.charCodeAt(n)) |
                    ((255 & e.charCodeAt(++n)) << 8) |
                    ((255 & e.charCodeAt(++n)) << 16) |
                    ((255 & e.charCodeAt(++n)) << 24))) +
              ((59797 * (t >>> 16)) << 16)),
              (r =
                (1540483477 * (65535 & (t ^= t >>> 24)) +
                  ((59797 * (t >>> 16)) << 16)) ^
                (1540483477 * (65535 & r) + ((59797 * (r >>> 16)) << 16)))
          switch (a) {
            case 3:
              r ^= (255 & e.charCodeAt(n + 2)) << 16
            case 2:
              r ^= (255 & e.charCodeAt(n + 1)) << 8
            case 1:
              r =
                1540483477 * (65535 & (r ^= 255 & e.charCodeAt(n))) +
                ((59797 * (r >>> 16)) << 16)
          }
          return (
            ((r =
              1540483477 * (65535 & (r ^= r >>> 13)) +
              ((59797 * (r >>> 16)) << 16)) ^
              (r >>> 15)) >>>
            0
          ).toString(36)
        },
        ne = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        ae = /[A-Z]|^ms/g,
        se = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        ie = function (e) {
          return 45 === e.charCodeAt(1)
        },
        oe = function (e) {
          return null != e && 'boolean' !== typeof e
        },
        ce = Q(function (e) {
          return ie(e) ? e : e.replace(ae, '-$&').toLowerCase()
        }),
        le = function (e, t) {
          switch (e) {
            case 'animation':
            case 'animationName':
              if ('string' === typeof t)
                return t.replace(se, function (e, t, r) {
                  return (fe = { name: t, styles: r, next: fe }), t
                })
          }
          return 1 === ne[e] || ie(e) || 'number' !== typeof t || 0 === t
            ? t
            : t + 'px'
        }
      function ue(e, t, r) {
        if (null == r) return ''
        if (void 0 !== r.__emotion_styles) return r
        switch (typeof r) {
          case 'boolean':
            return ''
          case 'object':
            if (1 === r.anim)
              return (fe = { name: r.name, styles: r.styles, next: fe }), r.name
            if (void 0 !== r.styles) {
              var n = r.next
              if (void 0 !== n)
                for (; void 0 !== n; )
                  (fe = { name: n.name, styles: n.styles, next: fe }),
                    (n = n.next)
              return r.styles + ';'
            }
            return (function (e, t, r) {
              var n = ''
              if (Array.isArray(r))
                for (var a = 0; a < r.length; a++) n += ue(e, t, r[a]) + ';'
              else
                for (var s in r) {
                  var i = r[s]
                  if ('object' !== typeof i)
                    null != t && void 0 !== t[i]
                      ? (n += s + '{' + t[i] + '}')
                      : oe(i) && (n += ce(s) + ':' + le(s, i) + ';')
                  else if (
                    !Array.isArray(i) ||
                    'string' !== typeof i[0] ||
                    (null != t && void 0 !== t[i[0]])
                  ) {
                    var o = ue(e, t, i)
                    switch (s) {
                      case 'animation':
                      case 'animationName':
                        n += ce(s) + ':' + o + ';'
                        break
                      default:
                        n += s + '{' + o + '}'
                    }
                  } else
                    for (var c = 0; c < i.length; c++)
                      oe(i[c]) && (n += ce(s) + ':' + le(s, i[c]) + ';')
                }
              return n
            })(e, t, r)
          case 'function':
            if (void 0 !== e) {
              var a = fe,
                s = r(e)
              return (fe = a), ue(e, t, s)
            }
            break
          case 'string':
        }
        if (null == t) return r
        var i = t[r]
        return void 0 !== i ? i : r
      }
      var fe,
        me = /label:\s*([^\s;\n{]+)\s*;/g
      var de = function (e, t, r) {
        if (
          1 === e.length &&
          'object' === typeof e[0] &&
          null !== e[0] &&
          void 0 !== e[0].styles
        )
          return e[0]
        var n = !0,
          a = ''
        fe = void 0
        var s = e[0]
        null == s || void 0 === s.raw
          ? ((n = !1), (a += ue(r, t, s)))
          : (a += s[0])
        for (var i = 1; i < e.length; i++)
          (a += ue(r, t, e[i])), n && (a += s[i])
        me.lastIndex = 0
        for (var o, c = ''; null !== (o = me.exec(a)); ) c += '-' + o[1]
        return { name: re(a) + c, styles: a, next: fe }
      }
      function he(e, t, r) {
        var n = ''
        return (
          r.split(' ').forEach(function (r) {
            void 0 !== e[r] ? t.push(e[r] + ';') : (n += r + ' ')
          }),
          n
        )
      }
      var pe = function (e, t, r) {
        var n = e.key + '-' + t.name
        if (
          (!1 === r &&
            void 0 === e.registered[n] &&
            (e.registered[n] = t.styles),
          void 0 === e.inserted[t.name])
        ) {
          var a = t
          do {
            e.insert(t === a ? '.' + n : '', a, e.sheet, !0)
            a = a.next
          } while (void 0 !== a)
        }
      }
      function ge(e, t) {
        if (void 0 === e.inserted[t.name]) return e.insert('', t, e.sheet, !0)
      }
      function ve(e, t, r) {
        var n = [],
          a = he(e, n, r)
        return n.length < 2 ? r : a + t(n)
      }
      var ye = function e(t) {
          for (var r = '', n = 0; n < t.length; n++) {
            var a = t[n]
            if (null != a) {
              var s = void 0
              switch (typeof a) {
                case 'boolean':
                  break
                case 'object':
                  if (Array.isArray(a)) s = e(a)
                  else
                    for (var i in ((s = ''), a))
                      a[i] && i && (s && (s += ' '), (s += i))
                  break
                default:
                  s = a
              }
              s && (r && (r += ' '), (r += s))
            }
          }
          return r
        },
        be = (function (e) {
          var t = te(e)
          ;(t.sheet.speedy = function (e) {
            this.isSpeedy = e
          }),
            (t.compat = !0)
          var r = function () {
            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
              r[n] = arguments[n]
            var a = de(r, t.registered, void 0)
            return pe(t, a, !1), t.key + '-' + a.name
          }
          return {
            css: r,
            cx: function () {
              for (
                var e = arguments.length, n = new Array(e), a = 0;
                a < e;
                a++
              )
                n[a] = arguments[a]
              return ve(t.registered, r, ye(n))
            },
            injectGlobal: function () {
              for (
                var e = arguments.length, r = new Array(e), n = 0;
                n < e;
                n++
              )
                r[n] = arguments[n]
              var a = de(r, t.registered)
              ge(t, a)
            },
            keyframes: function () {
              for (
                var e = arguments.length, r = new Array(e), n = 0;
                n < e;
                n++
              )
                r[n] = arguments[n]
              var a = de(r, t.registered),
                s = 'animation-' + a.name
              return (
                ge(t, {
                  name: a.name,
                  styles: '@keyframes ' + s + '{' + a.styles + '}',
                }),
                s
              )
            },
            hydrate: function (e) {
              e.forEach(function (e) {
                t.inserted[e] = !0
              })
            },
            flush: function () {
              ;(t.registered = {}), (t.inserted = {}), t.sheet.flush()
            },
            sheet: t.sheet,
            cache: t,
            getRegisteredStyles: he.bind(null, t.registered),
            merge: ve.bind(null, t.registered, r),
          }
        })({ key: 'css' }),
        we =
          (be.flush,
          be.hydrate,
          be.cx,
          be.merge,
          be.getRegisteredStyles,
          be.injectGlobal,
          be.keyframes,
          be.css),
        xe = (be.sheet, be.cache, r('ma3e')),
        ke = a.a.createElement
      t.default = function () {
        return ke(
          'div',
          {
            className: we({
              name: '195b9bi',
              styles:
                'display:grid;justify-content:center;align-items:center;height:100vh',
            }),
          },
          ke(
            'main',
            {
              className: we({
                name: 'k0jqnb',
                styles:
                  'display:flex;flex-direction:column;margin-top:2rem;margin-bottom:2rem;@media (min-width: 768px){flex-direction:row;}',
              }),
            },
            ke(
              'div',
              {
                className: we({ name: '8dk3vg', styles: 'margin-bottom:1rem' }),
              },
              ke('img', {
                className: we({
                  name: '1vt610p',
                  styles: 'width:16rem;border-radius:9999px',
                }),
                src: '/profile_image_junshengpierre.jpg',
              })
            ),
            ke(
              'div',
              {
                className: we({
                  name: 'dxc5wl',
                  styles:
                    'max-width:28rem;@media (min-width: 768px){margin-left:2rem;}',
                }),
              },
              ke(
                'section',
                {
                  className: we({
                    name: '8dk3vg',
                    styles: 'margin-bottom:1rem',
                  }),
                },
                ke(
                  'h1',
                  {
                    className: we({
                      name: '9tjm9n',
                      styles:
                        'font-weight:600;font-size:1.875rem;margin-bottom:0.5rem;font-family:Inter var, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    }),
                  },
                  'Teo Jun Sheng, Pierre'
                ),
                ke(
                  'div',
                  {
                    className: we({
                      name: '19v1j92',
                      styles:
                        'display:flex;flex-direction:row;align-items:center;margin-bottom:0.5rem',
                    }),
                  },
                  ke(xe.a, {
                    className: we(
                      {
                        '--text-opacity': '1',
                        fill: 'currentColor',
                        color: [
                          '#6b7280',
                          'rgba(107, 114, 128, var(--text-opacity))',
                        ],
                      },
                      '',
                      ''
                    ),
                  }),
                  ke(
                    'p',
                    {
                      className: we({
                        name: 'uaob3j',
                        styles: 'margin-left:0.5rem',
                      }),
                    },
                    'Software Developer'
                  )
                ),
                ke(
                  'div',
                  {
                    className: we({
                      name: '1gok8e8',
                      styles: 'margin-bottom:0.5rem',
                    }),
                  },
                  ke(Ne, {
                    url: 'https://www.google.com/maps/place/Singapore/',
                    title: 'Singapore',
                    Icon: xe.d,
                  })
                )
              ),
              ke(
                'section',
                {
                  className: we({
                    name: '8dk3vg',
                    styles: 'margin-bottom:1rem',
                  }),
                },
                ke(
                  'p',
                  {
                    className: we({
                      name: 'dehiuz',
                      styles: 'margin-bottom:0.75rem;line-height:1.625',
                    }),
                  },
                  'I am a Software Developer with 5 years of experience working mostly with frontend web and cross-platform mobile developement with TypeScript, JavaScript, React and React Native.'
                ),
                ke(
                  'p',
                  {
                    className: we({
                      name: 'dehiuz',
                      styles: 'margin-bottom:0.75rem;line-height:1.625',
                    }),
                  },
                  'I am a team player, and enjoy learning and contributing meaningfully to build reliable and maintainable software that enables delightful end user experience and empowers stakeholders to achieve their goals and deliver impact.'
                ),
                ke(
                  'p',
                  {
                    className: we({
                      name: 'dehiuz',
                      styles: 'margin-bottom:0.75rem;line-height:1.625',
                    }),
                  },
                  "Things I've been excited about and am exploring lately are iOS development with SwiftUI and full-stack web development."
                )
              ),
              ke(
                'section',
                {
                  className: we({
                    name: '8dk3vg',
                    styles: 'margin-bottom:1rem',
                  }),
                },
                ke(
                  'ul',
                  null,
                  ke(
                    'li',
                    {
                      className: we({
                        name: '1gok8e8',
                        styles: 'margin-bottom:0.5rem',
                      }),
                    },
                    ke(Ne, {
                      url: 'https://www.linkedin.com/in/junshengpierre',
                      title: 'https://www.linkedin.com/in/junshengpierre',
                      Icon: xe.c,
                    })
                  ),
                  ke(
                    'li',
                    {
                      className: we({
                        name: '1gok8e8',
                        styles: 'margin-bottom:0.5rem',
                      }),
                    },
                    ke(Ne, {
                      url: 'https://github.com/junshengpierre',
                      title: 'https://github.com/junshengpierre',
                      Icon: xe.b,
                    })
                  ),
                  ke(
                    'li',
                    {
                      className: we({
                        name: '1gok8e8',
                        styles: 'margin-bottom:0.5rem',
                      }),
                    },
                    ke(Ne, {
                      url: 'https://twitter.com/junshengpierre',
                      title: 'https://twitter.com/junshengpierre',
                      Icon: xe.e,
                    })
                  )
                )
              ),
              ke(
                'section',
                null,
                ke(
                  'h3',
                  {
                    className: we({
                      name: 'm1dqar',
                      styles: 'margin-bottom:0.5rem;font-weight:600',
                    }),
                  },
                  'Projects'
                ),
                ke('p', null, 'Coming soon...')
              )
            )
          )
        )
      }
      var Ne = function (e) {
        var t = e.url,
          r = e.title,
          n = e.Icon
        return ke(
          'span',
          {
            className: we({
              name: 'fhxb3m',
              styles: 'display:flex;flex-direction:row;align-items:center',
            }),
          },
          ke(
            'span',
            null,
            ke(n, {
              className: we(
                {
                  '--text-opacity': '1',
                  fill: 'currentColor',
                  color: [
                    '#6b7280',
                    'rgba(107, 114, 128, var(--text-opacity))',
                  ],
                },
                '',
                ''
              ),
            })
          ),
          ke(
            'a',
            {
              href: t,
              target: '_blank',
              rel: 'noreferrer',
              className: we({
                name: '1hxb071',
                styles:
                  'margin-left:0.5rem;&:hover{text-decoration:underline;}',
              }),
            },
            r
          )
        )
      }
    },
    vlRD: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return r('RNiq')
        },
      ])
    },
  },
  [['vlRD', 0, 1, 3]],
])

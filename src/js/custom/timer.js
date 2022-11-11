let countItem = document.querySelectorAll(".timer");
if (countItem) {
  parcelRequire = (function (e, r, t, n) {
    var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;
    function f(t, n) {
      if (!r[t]) {
        if (!e[t]) {
          var i = "function" == typeof parcelRequire && parcelRequire;
          if (!n && i) return i(t, !0);
          if (o) return o(t, !0);
          if (u && "string" == typeof t) return u(t);
          var c = new Error("Cannot find module '" + t + "'");
          throw ((c.code = "MODULE_NOT_FOUND"), c);
        }
        (p.resolve = function (r) {
          return e[t][1][r] || r;
        }),
          (p.cache = {});
        var l = (r[t] = new f.Module(t));
        e[t][0].call(l.exports, p, l, l.exports, this);
      }
      return r[t].exports;
      function p(e) {
        return f(p.resolve(e));
      }
    }
    (f.isParcelRequire = !0),
      (f.Module = function (e) {
        (this.id = e), (this.bundle = f), (this.exports = {});
      }),
      (f.modules = e),
      (f.cache = r),
      (f.parent = o),
      (f.register = function (r, t) {
        e[r] = [
          function (e, r) {
            r.exports = t;
          },
          {},
        ];
      });
    for (var c = 0; c < t.length; c++)
      try {
        f(t[c]);
      } catch (e) {
        i || (i = e);
      }
    if (t.length) {
      var l = f(t[t.length - 1]);
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = l)
        : "function" == typeof define && define.amd
        ? define(function () {
            return l;
          })
        : n && (this[n] = l);
    }
    if (((parcelRequire = f), i)) throw i;
    return f;
  })(
    {
      OpL8: [
        function (require, module, exports) {
          var e = document.getElementById("countdown-wrapper"),
            n = document.getElementById("countdown-days"),
            t = document.getElementById("countdown-hours"),
            o = document.getElementById("countdown-minutes"),
            d = document.getElementById("countdown-seconds"),
            a = document.getElementById("countdown-days-label"),
            u = document.getElementById("countdown-hours-label"),
            r = document.getElementById("countdown-minutes-label"),
            c = document.getElementById("countdown-seconds-label"),
            s = new Date(e.dataset.datetime),
            l = 1e3,
            i = 60 * l,
            m = 60 * i,
            y = 24 * m,
            h = function (e, n) {
              switch (e) {
                case "day":
                  return 0 === n || n > 4
                    ? "dní"
                    : n > 1 && n < 5
                    ? "dny"
                    : "den";
                case "hour":
                  return 0 === n || n > 4
                    ? "hodin"
                    : n > 1 && n < 5
                    ? "hodiny"
                    : "hodina";
                case "minute":
                  return 0 === n || n > 4
                    ? "minut"
                    : n > 1 && n < 5
                    ? "minuty"
                    : "minuta";
                case "second":
                  return 0 === n || n > 4
                    ? "vteřin"
                    : n > 1 && n < 5
                    ? "vteřiny"
                    : "vteřina";
              }
            },
            w = function () {
              var w = new Date(),
                I = s - w;
              if (I <= 0)
                (e.innerHTML =
                  '<b class="py-3 text-uppercase" style="grid-column: span 4">UtkÃ¡nÃ­ jiÅ¾ bylo zahÃ¡jeno</b>'),
                  clearInterval(M);
              else {
                var g = Math.floor(I / y),
                  B = Math.floor((I % y) / m),
                  E = Math.floor((I % m) / i),
                  H = Math.floor((I % i) / l);
                isNaN(g) || isNaN(B) || isNaN(E) || isNaN(H)
                  ? clearInterval(M)
                  : ((n.innerHTML = g),
                    (t.innerHTML = B),
                    (o.innerHTML = E),
                    (d.innerHTML = H),
                    (a.innerHTML = h("day", g)),
                    (u.innerHTML = h("hour", B)),
                    (r.innerHTML = h("minute", E)),
                    (c.innerHTML = h("second", H)));
              }
            },
            M = setInterval(w, l);
        },
        {},
      ],
    },
    {},
    ["OpL8"],
    null
  );
}
//# sourceMappingURL=/dist/js/countdown.js.map

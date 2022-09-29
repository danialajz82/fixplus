(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var aa;

    function ba(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        l = {},
        ha = {};

    function r(a, b) {
        var c = ha[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function v(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in l ? f = l : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(l, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ha[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    v("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    v("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, l.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(ba(this))
                }
            })
        }
        return a
    }, "es6");

    function ia(a) {
        a = {
            next: a
        };
        a[r(l.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function ja(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[r(l.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    v("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ja(this, function(b) {
                return b
            })
        }
    }, "es6");
    var ka = fa && "function" == typeof r(Object, "assign") ? r(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    v("Object.assign", function(a) {
        return a || ka
    }, "es6");

    function la(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    v("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = la(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    v("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    v("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    v("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ja(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    v("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    v("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || r(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    v("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== la(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    var x = this || self;

    function ma(a) {
        return a
    };

    function z(a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? 0 : a
    };

    function na(a, b) {
        this.i = a === oa && b || "";
        this.g = pa
    }
    var pa = {},
        oa = {};
    var qa = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        ra = Array.prototype.some ? function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var sa;

    function va(a, b) {
        this.g = b === wa ? a : ""
    }
    va.prototype.toString = function() {
        return this.g + ""
    };

    function xa(a) {
        return a instanceof va && a.constructor === va ? a.g : "type_error:TrustedResourceUrl"
    }
    var ya = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        wa = {};

    function za(a) {
        if (void 0 === sa) {
            var b = null;
            var c = x.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: ma,
                        createScript: ma,
                        createScriptURL: ma
                    })
                } catch (d) {
                    x.console && x.console.error(d.message)
                }
                sa = b
            } else sa = b
        }
        a = (b = sa) ? b.createScriptURL(a) : a;
        return new va(a, wa)
    }

    function Aa(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };

    function Ba(a) {
        var b;
        a: {
            if (b = x.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function Ca(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function Da(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function Ea(a) {
        Ea[" "](a);
        return a
    }
    Ea[" "] = function() {};
    var Fa = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Ga(a) {
        var b = a.match(Fa);
        a = b[5];
        var c = b[6];
        b = b[7];
        var d = "";
        a && (d += a);
        c && (d += "?" + c);
        b && (d += "#" + b);
        return d
    }

    function Ha(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var Ia = /#|$/;

    function A(a, b) {
        var c = a.search(Ia),
            d = Ha(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
    var Ja = /[?&]($|#)/;

    function C(a, b, c) {
        for (var d = a.search(Ia), e = 0, f, g = []; 0 <= (f = Ha(a, e, b, d));) g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
        g.push(a.slice(e));
        a = g.join("").replace(Ja, "$1");
        c = null != c ? "=" + encodeURIComponent(String(c)) : "";
        (b += c) ? (c = a.indexOf("#"), 0 > c && (c = a.length), d = a.indexOf("?"), 0 > d || d > c ? (d = c, e = "") : e = a.substring(d + 1, c), c = [a.slice(0, d), e, a.slice(c)], a = c[1], c[1] = b ? a ? a + "&" + b : b : a, b = c[0] + (c[1] ? "?" + c[1] : "") + c[2]) : b = a;
        return b
    };

    function Ka() {
        if (!l.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            l.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function La(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    var Na = Da(function() {
            return ra(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Ma) || 1E-4 > Math.random()
        }),
        Oa = Da(function() {
            return Ba("MSIE")
        });

    function Ma(a) {
        return Ba(a)
    }

    function D(a) {
        return /^true$/.test(a)
    }

    function Pa(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var Qa = z("0.20"),
        Ra = z("0.002"),
        Sa = z("0.00"),
        Ta = z("0.00"),
        Ua = z("0.00"),
        Va = D("true"),
        Wa = D("true"),
        Xa = D("true"),
        Ya = D("true");
    var Za = null;

    function $a() {
        if (null === Za) {
            Za = "";
            try {
                var a = "";
                try {
                    a = x.top.location.hash
                } catch (c) {
                    a = x.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Za = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Za
    }

    function F(a, b, c) {
        var d = G;
        if (c ? d.g.hasOwnProperty(c) && "" == d.g[c] : 1) {
            var e;
            e = (e = $a()) ? (e = e.match(new RegExp("\\b(" + a.join("|") + ")\\b"))) ? e[0] : null : null;
            if (e) a = e;
            else a: {
                if (!Oa() && !Na() && (e = Math.random(), e < b)) {
                    e = Ka();
                    a = a[Math.floor(e * a.length)];
                    break a
                }
                a = null
            }
            a && "" != a && (c ? d.g.hasOwnProperty(c) && (d.g[c] = a) : d.i[a] = !0)
        }
    }

    function H(a) {
        var b = G;
        return b.g.hasOwnProperty(a) ? b.g[a] : ""
    }

    function ab() {
        var a = G,
            b = [];
        La(a.i, function(c, d) {
            b.push(d)
        });
        La(a.g, function(c) {
            "" != c && b.push(c)
        });
        return b
    };
    var bb = {
            K: 2,
            S: 13,
            R: 14,
            N: 16,
            M: 17,
            L: 18,
            J: 19,
            T: 20
        },
        G = null;

    function cb() {
        return !!G && ("466465926" == H(20) || "466465925" == H(20))
    }

    function db() {
        return !!G && "592230571" == H(16)
    };

    function eb(a) {
        var b = void 0 === b ? x : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };

    function K(a) {
        var b = "u";
        if (a.u && a.hasOwnProperty(b)) return a.u;
        b = new a;
        return a.u = b
    };
    var fb = {
        O: 0,
        G: 1,
        P: 2,
        I: 3,
        H: 4
    };

    function gb() {
        this.g = {}
    }

    function hb(a, b, c) {
        "number" === typeof c && 0 < c && (a.g[b] = Math.round(c))
    }

    function ib(a) {
        var b = K(gb);
        var c = void 0 === c ? x : c;
        c = c.performance;
        hb(b, a, c && c.now ? c.now() : null)
    }

    function jb() {
        function a() {
            return hb(b, 0, eb("loadEventStart") - eb("navigationStart"))
        }
        var b = K(gb);
        0 != eb("loadEventStart") ? a() : window.addEventListener("load", a)
    }

    function kb(a, b) {
        b.google_tag_manager && b.google_tag_manager._li && (b = b.google_tag_manager._li, hb(a, 4, b.cbt), hb(a, 3, b.cst))
    }

    function lb() {
        var a = K(gb);
        return r(Object, "values").call(Object, fb).map(function(b) {
            return [b, a.g[b] || 0]
        })
    };
    var mb = D("false");

    function nb(a) {
        return "function" === typeof a
    }
    var ob = Array.isArray;

    function pb(a, b) {
        if (a && ob(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function qb(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }

    function rb() {
        return new Date(Date.now())
    };
    var L = window,
        M = document;

    function sb(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null, b())
        })
    }
    var tb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        ub = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function vb(a, b, c) {
        b && qb(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }

    function wb(a, b, c) {
        var d = M.createElement("script");
        vb(d, void 0, tb);
        d.type = "text/javascript";
        d.async = !0;
        a = za(a);
        d.src = xa(a);
        Ca(d);
        sb(d, b);
        c ? c.appendChild(d) : (b = M.getElementsByTagName("script")[0] || M.body || M.head, b.parentNode.insertBefore(d, b))
    }

    function xb(a, b, c, d, e, f) {
        f = void 0 === f ? !0 : f;
        var g = e;
        e = !1;
        g || (g = M.createElement("iframe"), e = !0);
        vb(g, c, ub);
        d && qb(d, function(h, k) {
            g.dataset[h] = k
        });
        f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
        e && (c = M.body && M.body.lastChild || M.body || M.head, c.parentNode.insertBefore(g, c));
        sb(g, b);
        void 0 !== a && (g.src = a)
    };
    var yb = {};

    function N(a) {
        yb.TAGGING = yb.TAGGING || [];
        yb.TAGGING[a] = !0
    };

    function zb() {
        var a = void 0 === a ? document : a;
        var b;
        return !(null == (b = a.featurePolicy) || !(aa = b.allowedFeatures(), r(aa, "includes")).call(aa, "attribution-reporting"))
    };

    function Ab(a, b, c) {
        a = Bb(a, !0);
        if (a[b]) return !1;
        a[b] = [];
        a[b][0] = c;
        return !0
    }

    function Bb(a, b) {
        var c = a.GooglebQhCsO;
        c || (c = {}, b && (a.GooglebQhCsO = c));
        return c
    };
    var Cb = {},
        Db = null;

    function Eb(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        a = 4;
        void 0 === a && (a = 0);
        if (!Db)
            for (Db = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Cb[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Db[h] && (Db[h] = g)
                }
            }
        a = Cb[a];
        c = Array(Math.floor(b.length / 3));
        d = a[64] || "";
        for (e = f = 0; f < b.length - 2; f += 3) {
            var k = b[f],
                m = b[f + 1];
            h = b[f + 2];
            g = a[k >> 2];
            k = a[(k &
                3) << 4 | m >> 4];
            m = a[(m & 15) << 2 | h >> 6];
            h = a[h & 63];
            c[e++] = g + k + m + h
        }
        g = 0;
        h = d;
        switch (b.length - f) {
            case 2:
                g = b[f + 1], h = a[(g & 15) << 2] || d;
            case 1:
                b = b[f], c[e] = a[b >> 2] + a[(b & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };

    function Fb(a, b, c, d) {
        var e = A(c, "fmt");
        if (d) {
            var f = A(c, "random"),
                g = A(c, "label") || "";
            if (!f) return !1;
            f = Eb(decodeURIComponent(g.replace(/\+/g, " ")) + ":" + decodeURIComponent(f.replace(/\+/g, " ")));
            if (!Ab(a, f, d)) return !1
        }
        e && 4 != e && (c = C(c, "rfmt", e));
        c = C(c, "fmt", 4);
        wb(c, function() {
            a.google_noFurtherRedirects && d && d.call && (a.google_noFurtherRedirects = null, d())
        }, b.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Gb = new function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);

    function Hb() {
        var a = {};
        this.g = function() {
            var b = Gb.g,
                c = Gb.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.i = function(b) {
            a[Gb.g] = b
        }
    };
    var O = [];

    function P() {
        var a = {};
        var b = L.google_tag_data;
        L.google_tag_data = void 0 === b ? a : b;
        a = L.google_tag_data;
        a.ics || (a.ics = {
            entries: {},
            set: Ib,
            update: Jb,
            addListener: Kb,
            notifyListeners: Lb,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function Ib(a, b, c, d, e, f) {
        var g = P();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries;
            g = h[a] || {};
            var k = g.region;
            c = c && "string" === typeof c ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || c === e || (c === d ? k !== e : !c && !k)) {
                e = !!(f && 0 < f && void 0 === g.update);
                var m = {
                    region: c,
                    initial: "granted" === b,
                    update: g.update,
                    quiet: e
                };
                if ("" !== d || !1 !== g.initial) h[a] = m;
                e && L.setTimeout(function() {
                    h[a] === m && m.quiet && (m.quiet = !1, Mb(a),
                        Lb(), N(2))
                }, f)
            }
        }
    }

    function Jb(a, b) {
        var c = P();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Nb(c, a),
                e = c.entries;
            e = e[a] = e[a] || {};
            e.update = "granted" === b;
            b = Nb(c, a);
            e.quiet ? (e.quiet = !1, Mb(a)) : b !== d && Mb(a)
        }
    }

    function Kb(a, b) {
        O.push({
            s: a,
            C: b
        })
    }

    function Mb(a) {
        for (var b = 0; b < O.length; ++b) {
            var c = O[b];
            ob(c.s) && -1 !== c.s.indexOf(a) && (c.B = !0)
        }
    }

    function Lb(a, b) {
        for (var c = 0; c < O.length; ++c) {
            var d = O[c];
            if (d.B) {
                d.B = !1;
                try {
                    d.C({
                        U: a,
                        V: b
                    })
                } catch (e) {}
            }
        }
    }

    function Nb(a, b) {
        a = a.entries[b] || {};
        return void 0 !== a.update ? a.update : a.initial
    }

    function Ob(a) {
        var b = P();
        b.accessedAny = !0;
        return Nb(b, a)
    }

    function Pb(a) {
        var b = P();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }

    function Qb() {
        if (!K(Hb).g()) return !1;
        var a = P();
        a.accessedAny = !0;
        return a.active
    }

    function Rb(a, b) {
        P().addListener(a, b)
    }

    function Sb(a) {
        function b() {
            for (var e = 0; e < c.length; e++)
                if (!Pb(c[e])) return !0;
            return !1
        }
        var c = ["ad_storage"];
        if (b()) {
            var d = !1;
            Rb(c, function(e) {
                d || b() || (d = !0, a(e))
            })
        } else a({})
    }

    function Tb(a) {
        function b() {
            for (var e = [], f = 0; f < c.length; f++) {
                var g = c[f];
                !1 === Ob(g) || d[g] || (e.push(g), d[g] = !0)
            }
            return e
        }
        var c = ["ad_storage"],
            d = {};
        b().length !== c.length && Rb(c, function(e) {
            var f = b();
            0 < f.length && (e.s = f, a(e))
        })
    };

    function Ub(a, b, c, d) {
        if (Vb(d)) {
            d = [];
            b = String(b || Wb()).split(";");
            for (var e = 0; e < b.length; e++) {
                var f = b[e].split("="),
                    g = f[0].replace(/^\s*|\s*$/g, "");
                g && g == a && ((f = f.slice(1).join("=").replace(/^\s*|\s*$/g, "")) && c && (f = decodeURIComponent(f)), d.push(f))
            }
            a = d
        } else a = [];
        return a
    }

    function Xb(a, b, c, d) {
        var e = Wb(),
            f = window;
        "null" !== f.origin && (f.document.cookie = a);
        a = Wb();
        return e != a || void 0 != c && 0 <= Ub(b, a, !1, d).indexOf(c)
    }

    function Yb(a, b, c) {
        function d(p, q, t) {
            if (null == t) return delete g[q], p;
            g[q] = t;
            return p + "; " + q + "=" + t
        }

        function e(p, q) {
            if (null == q) return delete g[q], p;
            g[q] = !0;
            return p + "; " + q
        }
        if (Vb(c.j)) {
            if (void 0 == b) var f = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else c.encode && (b = encodeURIComponent(b)), b = $b(b), f = a + "=" + b;
            var g = {};
            f = d(f, "path", c.path);
            if (c.expires instanceof Date) var h = c.expires.toUTCString();
            else null != c.expires && (h = c.expires);
            f = d(f, "expires", h);
            f = d(f, "max-age", c.W);
            f = d(f, "samesite", c.X);
            c.Y &&
                (f = e(f, "secure"));
            if ((h = c.domain) && "auto" === h.toLowerCase()) {
                h = ac();
                for (var k = 0; k < h.length; ++k) {
                    var m = "none" !== h[k] ? h[k] : void 0,
                        n = d(f, "domain", m);
                    n = e(n, c.flags);
                    if (!bc(m, c.path) && Xb(n, a, b, c.j)) break
                }
            } else h && "none" !== h.toLowerCase() && (f = d(f, "domain", h)), f = e(f, c.flags), bc(h, c.path) || Xb(f, a, b, c.j)
        }
    }

    function cc(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        Yb(a, b, c)
    }

    function $b(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
    var dc = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        ec = /(^|\.)doubleclick\.net$/i;

    function bc(a, b) {
        return ec.test(window.document.location.hostname) || "/" === b && dc.test(a)
    }

    function Wb() {
        return "null" !== window.origin ? window.document.cookie : ""
    }

    function ac() {
        var a = [],
            b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"]
        }
        for (c = b.length - 2; 0 <= c; c--) a.push(b.slice(c).join("."));
        b = window.document.location.hostname;
        ec.test(b) || dc.test(b) || a.push("none");
        return a
    }

    function Vb(a) {
        if (!K(Hb).g() || !a || !Qb()) return !0;
        if (!Pb(a)) return !1;
        a = Ob(a);
        return null == a ? !0 : !!a
    };

    function fc(a, b) {
        var c, d = Number(null != a.A ? a.A : void 0);
        0 !== d && (c = new Date((b || rb().getTime()) + 1E3 * (d || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !0,
            expires: c,
            j: void 0
        }
    };

    function gc(a) {
        var b = [],
            c = M.cookie.split(";");
        a = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].match(a);
            e && b.push({
                v: e[1],
                value: e[2],
                timestamp: Number(e[2].split(".")[1]) || 0
            })
        }
        b.sort(function(f, g) {
            return g.timestamp - f.timestamp
        });
        return b
    }

    function Q(a, b) {
        a = gc(a);
        var c = {};
        if (!a || !a.length) return c;
        for (var d = 0; d < a.length; d++) {
            var e = a[d].value.split(".");
            if (!("1" !== e[0] || b && 3 > e.length || !b && 3 !== e.length) && Number(e[1])) {
                c[a[d].v] || (c[a[d].v] = []);
                var f = {
                    version: e[0],
                    timestamp: 1E3 * Number(e[1]),
                    h: e[2]
                };
                b && 3 < e.length && (f.labels = e.slice(3));
                c[a[d].v].push(f)
            }
        }
        return c
    };
    var hc = /:[0-9]+$/;

    function ic(a, b) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].split("=");
            if (decodeURIComponent(d[0]).replace(/\+/g, " ") === b) return decodeURIComponent(d.slice(1).join("=")).replace(/\+/g, " ")
        }
    }

    function jc(a, b) {
        var c = "query",
            d = kc(a.protocol);
        c && (c = String(c).toLowerCase());
        switch (c) {
            case "url_no_fragment":
                b = "";
                a && a.href && (b = a.href.indexOf("#"), b = 0 > b ? a.href : a.href.substr(0, b));
                a = b;
                break;
            case "protocol":
                a = d;
                break;
            case "host":
                a = a.hostname.replace(hc, "").toLowerCase();
                break;
            case "port":
                a = String(Number(a.port) || ("http" === d ? 80 : "https" === d ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || N(1);
                a = "/" === a.pathname.charAt(0) ? a.pathname : "/" + a.pathname;
                a = a.split("/");
                0 <= [].indexOf(a[a.length - 1]) && (a[a.length -
                    1] = "");
                a = a.join("/");
                break;
            case "query":
                a = a.search.replace("?", "");
                b && (a = ic(a, b));
                break;
            case "extension":
                a = a.pathname.split(".");
                a = 1 < a.length ? a[a.length - 1] : "";
                a = a.split("/")[0];
                break;
            case "fragment":
                a = a.hash.replace("#", "");
                break;
            default:
                a = a && a.href
        }
        return a
    }

    function kc(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    };
    var lc = {};
    var mc = /^\w+$/,
        nc = /^[\w-]+$/,
        oc = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        };

    function R() {
        if (!K(Hb).g() || !Qb()) return !0;
        var a = Ob("ad_storage");
        return null == a ? !0 : !!a
    }

    function pc(a, b) {
        Pb("ad_storage") ? R() ? a() : Tb(a) : b ? N(3) : Sb(function() {
            pc(a, !0)
        })
    }

    function qc(a) {
        return S(a).map(function(b) {
            return b.h
        })
    }

    function S(a) {
        var b = [];
        if ("null" === L.origin || !M.cookie) return b;
        a = Ub(a, M.cookie, void 0, "ad_storage");
        if (!a || 0 == a.length) return b;
        for (var c = {}, d = 0; d < a.length; c = {
                l: c.l
            }, d++) {
            var e = rc(a[d]);
            if (null != e) {
                var f = e;
                e = f.version;
                c.l = f.h;
                var g = f.timestamp;
                f = f.labels;
                var h = pb(b, function(k) {
                    return function(m) {
                        return m.h === k.l
                    }
                }(c));
                h ? (h.timestamp = Math.max(h.timestamp, g), h.labels = sc(h.labels, f || [])) : b.push({
                    version: e,
                    h: c.l,
                    timestamp: g,
                    labels: f
                })
            }
        }
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return tc(b)
    }

    function sc(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (a = 0; a < b.length; a++) c[b[a]] || d.push(b[a]);
        return d
    }

    function uc(a) {
        return a && "string" == typeof a && a.match(mc) ? a : "_gcl"
    }

    function vc() {
        var a = L.location.href,
            b = M.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || N(1), c = "/" + c);
        a = b.hostname.replace(hc, "");
        var d = {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: a,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        };
        b = jc(d, "gclid");
        c = jc(d, "gclsrc");
        a = jc(d, "wbraid");
        var e = jc(d, "dclid");
        b && c && a || (d = d.hash.replace("#", ""), b = b || ic(d, "gclid"), c = c || ic(d, "gclsrc"), a = a || ic(d, "wbraid"));
        return wc(b, c, e, a)
    }

    function wc(a, b, c, d) {
        function e(g, h) {
            f[h] || (f[h] = []);
            f[h].push(g)
        }
        var f = {};
        f.gclid = a;
        f.gclsrc = b;
        f.dclid = c;
        void 0 !== d && nc.test(d) && (f.gbraid = d, e(d, "gb"));
        if (void 0 !== a && a.match(nc)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
        }
        c && e(c, "dc");
        return f
    }

    function xc() {
        var a = {},
            b = vc();
        pc(function() {
            yc(b, !1, a)
        })
    }

    function yc(a, b, c, d, e) {
        function f(p) {
            p = ["GCL", n, p];
            0 < e.length && p.push(e.join("."));
            return p.join(".")
        }

        function g(p, q) {
            if (p = zc(p, h)) cc(p, q, k), m = !0
        }
        c = c || {};
        e = e || [];
        var h = uc(c.prefix);
        d = d || rb().getTime();
        var k = fc(c, d);
        k.j = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3);
        a.aw && g("aw", f(a.aw[0]));
        a.dc && g("dc", f(a.dc[0]));
        a.gf && g("gf", f(a.gf[0]));
        a.ha && g("ha", f(a.ha[0]));
        a.gp && g("gp", f(a.gp[0]));
        if ((void 0 == lc.enable_gbraid_cookie_write ? 0 : lc.enable_gbraid_cookie_write) && !m && a.gb) {
            a = a.gb[0];
            d = zc("gb", h);
            c = !1;
            if (!b)
                for (b =
                    S(d), d = 0; d < b.length; d++) b[d].h === a && b[d].labels && 0 < b[d].labels.length && (c = !0);
            c || g("gb", f(a))
        }
    }

    function zc(a, b) {
        a = oc[a];
        if (void 0 !== a) return b + a
    }

    function Ac(a) {
        return 0 !== Bc(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    }

    function rc(a) {
        a = Bc(a.split("."));
        return 0 === a.length ? null : {
            version: a[0],
            h: a[2],
            timestamp: 1E3 * (Number(a[1]) || 0),
            labels: a.slice(3)
        }
    }

    function Bc(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !nc.test(a[2]) ? [] : a
    }

    function tc(a) {
        return a.filter(function(b) {
            return nc.test(b.h)
        })
    }

    function Cc() {
        var a = ["aw"],
            b = {};
        if ("null" !== L.origin) {
            for (var c = uc(b.prefix), d = {}, e = 0; e < a.length; e++) oc[a[e]] && (d[a[e]] = oc[a[e]]);
            pc(function() {
                qb(d, function(f, g) {
                    g = Ub(c + g, M.cookie, void 0, "ad_storage");
                    g.sort(function(n, p) {
                        return Ac(p) - Ac(n)
                    });
                    if (g.length) {
                        var h = g[0];
                        g = Ac(h);
                        var k = 0 !== Bc(h.split(".")).length ? h.split(".").slice(3) : [],
                            m = {};
                        h = 0 !== Bc(h.split(".")).length ? h.split(".")[2] : void 0;
                        m[f] = [h];
                        yc(m, !0, b, g, k)
                    }
                })
            })
        }
    }

    function Dc(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!R()) return e;
        var f = S(a);
        if (!f.length) return e;
        for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
        if (d) return e;
        1 !== e[0] && (d = f[0], f = f[0].timestamp, b = [d.version, Math.round(f / 1E3), d.h].concat(d.labels || [], [b]).join("."), c = fc(c, f), c.j = "ad_storage", cc(a, b, c));
        return e
    }

    function Ec(a, b) {
        b = uc(b);
        a = zc(a, b);
        if (!a) return 0;
        a = S(a);
        for (var c = b = 0; c < a.length; c++) b = Math.max(b, a[c].timestamp);
        return b
    }

    function Fc(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var Gc = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        Hc = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        Ic = /^\d+\.fls\.doubleclick\.net$/,
        Jc = /;gac=([^;?]+)/,
        Kc = /;gacgb=([^;?]+)/,
        Lc = /;gclaw=([^;?]+)/,
        Mc = /;gclgb=([^;?]+)/;

    function Nc(a, b, c) {
        if (Ic.test(a.location.host)) return (b = a.location.href.match(c)) && 2 == b.length && b[1].match(Gc) ? decodeURIComponent(b[1]) : "";
        a = [];
        for (var d in b) {
            c = [];
            for (var e = b[d], f = 0; f < e.length; f++) c.push(e[f].h);
            a.push(d + ":" + c.join(","))
        }
        return 0 < a.length ? a.join(";") : ""
    }

    function Oc(a, b, c, d) {
        var e = R() ? Q("_gac_gb", !0) : {},
            f = [],
            g = !1,
            h;
        for (h in e) {
            var k = Dc("_gac_gb_" + h, b, c, d);
            g = g || 0 !== k.length && k.some(function(m) {
                return 1 === m
            });
            f.push(h + ":" + k.join(","))
        }
        return {
            F: g ? f.join(";") : "",
            D: Nc(a, e, Kc)
        }
    }

    function Pc(a, b, c, d) {
        if (Ic.test(a.location.host)) {
            if ((a = a.location.href.match(d)) && 2 == a.length && a[1].match(Hc)) return [{
                h: a[1]
            }]
        } else return S((b || "_gcl") + c);
        return []
    }

    function Qc(a, b) {
        return Pc(a, b, "_aw", Lc).map(function(c) {
            return c.h
        }).join(".")
    }

    function Rc(a, b) {
        return Pc(a, b, "_gb", Mc).map(function(c) {
            return c.h
        }).join(".")
    }

    function Sc(a, b) {
        var c = "" !== Rc(a, b) || 0 < r(Object, "keys").call(Object, R() ? Q("_gac_gb", !0) : {}).length;
        a = "" !== Qc(a, b) || "" !== Nc(a, R() ? Q() : {}, Jc);
        return c && a
    }

    function Tc(a) {
        0 !== qc("_gcl_aw").length || a && 0 !== qc(a + "_aw").length || (xc(), Cc())
    }

    function Uc(a, b, c) {
        a = Dc((b && b.prefix || "_gcl") + "_gb", a, b, c);
        return 0 === a.length || a.every(function(d) {
            return 0 === d
        }) ? "" : a.join(".")
    };

    function Vc() {
        if (nb(L.__uspapi)) {
            var a = "";
            try {
                L.__uspapi("getUSPData", 1, function(b, c) {
                    c && b && (b = b.uspString) && RegExp("^[\\da-zA-Z-]{1,20}$").test(b) && (a = b)
                })
            } catch (b) {}
            return a
        }
    };
    var Wc = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Xc(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function Yc(a) {
        a = a.google_tag_data;
        if (null != a && a.uach) {
            a = a.uach;
            var b = r(Object, "assign").call(Object, {}, a);
            a.fullVersionList && (b.fullVersionList = a.fullVersionList.slice(0));
            a = b
        } else a = null;
        return a
    }

    function Zc() {
        var a = window,
            b, c;
        if ("function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)) {
            var d = Xc(a);
            d.uach_promise || (a = a.navigator.userAgentData.getHighEntropyValues(Wc).then(function(e) {
                null != d.uach || (d.uach = e);
                return e
            }), d.uach_promise = a)
        }
    };
    var $c = {
            id: !0,
            origin: !0,
            destination: !0,
            start_date: !0,
            end_date: !0,
            location_id: !0
        },
        ad = /^[a-zA-Z0-9_]+$/,
        bd = !1,
        cd = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_gcl_cookie_path google_gcl_cookie_flags google_gcl_cookie_domain google_gcl_cookie_max_age_seconds google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(" ");

    function dd(a, b) {
        var c = a;
        return function() {
            --c;
            0 >= c && b()
        }
    }

    function T(a) {
        return null != a ? encodeURIComponent(String(a)) : ""
    }

    function ed(a) {
        if (null != a) {
            a = String(a).substring(0, 512);
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        }
        return ""
    }

    function U(a, b) {
        b = T(b);
        return "" != b && (a = T(a), "" != a) ? "&".concat(a, "=", b) : ""
    }

    function fd(a) {
        var b = typeof a;
        return null == a || "object" == b || "function" == b ? null : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
    }

    function gd(a) {
        if (!a || "object" != typeof a || "function" == typeof a.join) return "";
        var b = [],
            c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = a[c];
                if (d && "function" === typeof d.join) {
                    for (var e = [], f = 0; f < d.length; ++f) {
                        var g = fd(d[f]);
                        null != g && e.push(g)
                    }
                    d = 0 == e.length ? null : e.join(",")
                } else d = fd(d);
                (e = fd(c)) && null != d && b.push(e + "=" + d)
            }
        return b.join(";")
    }

    function V(a) {
        return "number" != typeof a && "string" != typeof a ? "" : T(a.toString())
    }

    function hd(a, b) {
        if (b.google_read_gcl_cookie_opt_out || b.google_remarketing_only || b.google_conversion_domain && (!b.google_gcl_cookie_prefix || !/^_ycl/.test(b.google_gcl_cookie_prefix))) return "";
        var c = "",
            d = id(b),
            e = {};
        b.google_gcl_cookie_domain && (e.domain = b.google_gcl_cookie_domain);
        b.google_gcl_cookie_flags && (e.flags = b.google_gcl_cookie_flags);
        null != b.google_gcl_cookie_max_age_seconds && (e.A = b.google_gcl_cookie_max_age_seconds);
        b.google_gcl_cookie_path && (e.path = b.google_gcl_cookie_path);
        d && (e.prefix = d);
        if (jd(b) && b.m) var f = void 0 === b.o;
        else Ic.test(a.location.host) ? f = !(Lc.test(a.location.href) || Jc.test(a.location.href)) : (f = Math.max(Ec("aw", d), Fc(R() ? Q() : {})), f = Math.max(Ec("gb", d), Fc(R() ? Q("_gac_gb", !0) : {})) > f);
        if (f) {
            if (void 0 !== b.o) return b.o;
            c = Rc(a, d || void 0);
            f = b.google_conversion_label;
            var g = Uc(f, e, b.m);
            c = U("gclgb", c) + (g ? U("mcov", g) : "");
            if (d) return b.o = c;
            d = Oc(a, f, e, b.m);
            a = d.D;
            d = d.F;
            c += (a ? U("gacgb", a) : "") + (d ? U("gacmcov", d) : "");
            return b.o = c
        }
        if (d) return b = Qc(a, d), U("gclaw", b);
        (b = Qc(a)) && (c = U("gclaw",
            b));
        b = Nc(a, R() ? Q() : {}, Jc);
        return c + (b ? U("gac", b) : "")
    }

    function kd(a) {
        function b(d) {
            try {
                return decodeURIComponent(d), !0
            } catch (e) {
                return !1
            }
        }
        a = a ? a.title : "";
        if (void 0 == a || "" == a) return "";
        a = encodeURIComponent(a);
        for (var c = 256; !b(a.substr(0, c));) c--;
        return "&tiba=" + a.substr(0, c)
    }

    function ld(a, b, c, d, e, f) {
        var g = "https://",
            h = "landing" === d.google_conversion_type ? "/extclk" : "/";
        switch (e) {
            default: return "";
            case 2:
                    case 3:
                    var k = "googleads.g.doubleclick.net/";
                var m = "pagead/viewthroughconversion/";
                break;
            case 1:
                    k = "www.google.com/";m = "pagead/1p-conversion/";
                break;
            case 6:
                    k = "www.google.com/";m = "ccm/conversion/";
                break;
            case 0:
                    k = d.google_conversion_domain || "www.googleadservices.com/";m = "pagead/conversion/";
                break;
            case 5:
                    k = d.google_conversion_domain || "www.googleadservices.com/";m = "ccm/conversion/";
                break;
            case 4:
                    k = (k = d.google_gtm_experiments) && k.apcm ? "www.google.com" : k && k.capiorig ? d.google_conversion_id + ".privacysandbox.googleadservices.com" : "www.google.com/";m = "pagead/privacysandbox/conversion/";
                break;
            case 7:
                    k = "googleads.g.doubleclick.net/",
                m = "td/rul/"
        }
        Va && d.google_transport_url && (k = d.google_transport_url);
        "/" !== k[k.length - 1] && (k += "/");
        if (0 === k.indexOf("http://") || 0 === k.indexOf("https://")) g = "";
        g = [g, k, m, T(d.google_conversion_id), h, "?random=", T(d.google_conversion_time)].join("");
        h = U("cv", d.google_conversion_js_version);
        k = U("fst", d.google_conversion_first_time);
        m = U("num", d.google_conversion_snippets);
        var n = U("fmt", d.google_conversion_format),
            p = d.google_remarketing_only ? U("userId", d.google_user_id) : "";
        var q = d.google_tag_for_child_directed_treatment;
        q = null == q || 0 !== q && 1 !== q ? "" : U("tfcd", q);
        var t = d.google_tag_for_under_age_of_consent;
        t = null == t || 0 !== t && 1 !== t ? "" : U("tfua", t);
        var E = d.google_allow_ad_personalization_signals;
        E = !1 === E ? U("npa", 1) : !0 === E ? U("npa", 0) : "";
        var Y = d.google_restricted_data_processing;
        Y = Xa ? !0 === Y ? U("rdp",
            1) : !1 === Y ? U("rdp", 0) : "" : "";
        var wd = U("value", d.google_conversion_value),
            xd = U("currency_code", d.google_conversion_currency),
            yd = U("label", d.google_conversion_label),
            zd = U("oid", d.google_conversion_order_id),
            Ad = U("bg", d.google_conversion_color);
        a: {
            var y = d.google_conversion_language;
            if (null != y) {
                y = y.toString();
                if (2 == y.length) {
                    y = U("hl", y);
                    break a
                }
                if (5 == y.length) {
                    y = U("hl", y.substring(0, 2)) + U("gl", y.substring(3, 5));
                    break a
                }
            }
            y = ""
        }
        var Bd = U("guid", "ON"),
            Cd = !d.google_conversion_domain && "GooglemKTybQhCsO" in x &&
            "function" == typeof x.GooglemKTybQhCsO ? U("resp", "GooglemKTybQhCsO") : "",
            Dd = U("disvt", d.google_disable_viewthrough),
            Ed = U("eid", ab().join());
        var Z = d.google_conversion_date;
        var w = [];
        if (a) {
            var I = a.screen;
            I && (w.push(U("u_h", I.height)), w.push(U("u_w", I.width)), w.push(U("u_ah", I.availHeight)), w.push(U("u_aw", I.availWidth)), w.push(U("u_cd", I.colorDepth)));
            a.history && w.push(U("u_his", a.history.length))
        }
        Z && "function" == typeof Z.getTimezoneOffset && w.push(U("u_tz", -Z.getTimezoneOffset()));
        b && ("function" == typeof b.javaEnabled &&
            w.push(U("u_java", b.javaEnabled())), b.plugins && w.push(U("u_nplug", b.plugins.length)), b.mimeTypes && w.push(U("u_nmime", b.mimeTypes.length)));
        Z = w.join("");
        w = U("gtm", d.google_gtm);
        b = b && b.sendBeacon ? U("sendb", "1") : "";
        I = md();
        var Gd = U("ig", /googleadservices\.com/.test("www.googleadservices.com") ? 1 : 0),
            ta = gd(d.google_custom_params);
        f = gd(f);
        f = ta.concat(0 < ta.length && 0 < f.length ? ";" : "", f);
        f = "" == f ? "" : "&".concat("data=", encodeURIComponent(f));
        ta = hd(c, d);
        var Zb = d.google_conversion_page_url,
            Hd = d.google_conversion_referrer_url,
            ua = "";
        if (c) {
            if (a.top == a) var u = 0;
            else {
                var J = a.location.ancestorOrigins;
                if (J) u = J[J.length - 1] == a.location.origin ? 1 : 2;
                else {
                    J = a.top;
                    try {
                        var B;
                        if (B = !!J && null != J.location.href) c: {
                            try {
                                Ea(J.foo);
                                B = !0;
                                break c
                            } catch (Id) {}
                            B = !1
                        }
                        u = B
                    } catch (Id) {
                        u = !1
                    }
                    u = u ? 1 : 2
                }
            }
            B = Zb ? Zb : 1 == u ? a.top.location.href : a.location.href;
            ua += U("frm", u);
            ua += U("url", ed(B));
            ua += U("ref", ed(Hd || c.referrer))
        }
        a = [h, k, m, n, p, q, t, E, Y, wd, xd, yd, zd, Ad, y, Bd, Cd, Dd, Ed, Z, w, b, I, Gd, f, ta, ua, kd(c), nd(d.google_additional_params), nd(d.google_remarketing_only ? {} : d.google_additional_conversion_params),
            "&hn=" + T("www.googleadservices.com"), od(a), pd(a)
        ].join("");
        c = $a();
        a += 0 < c.length ? "&debug_experiment_id=" + c : "";
        if (!d.google_remarketing_only && !d.google_conversion_domain) {
            c = [U("mid", d.google_conversion_merchant_id), U("fcntr", d.google_basket_feed_country), U("flng", d.google_basket_feed_language), U("dscnt", d.google_basket_discount), U("bttype", d.google_basket_transaction_type)].join("");
            if (d)
                if (u = d.google_conversion_items) {
                    B = [];
                    h = 0;
                    for (k = u.length; h < k; h++) m = u[h], n = [], m && (n.push(V(m.value)), n.push(V(m.quantity)),
                        n.push(V(m.item_id)), n.push(V(m.start_date)), n.push(V(m.end_date)), B.push("(" + n.join("*") + ")"));
                    u = 0 < B.length ? "&item=" + B.join("") : ""
                } else u = "";
            else u = "";
            c = [a, c, u].join("");
            a = 4E3 < c.length ? [a, U("item", "elngth")].join("") : c
        }
        g += a;
        1 === e || 6 === e ? g += [U("gcp", 1), U("sscte", 1), U("ct_cookie_present", 1)].join("") : 3 == e && (g += U("gcp", 1), g += U("ct_cookie_present", 1));
        Wa && (e = Vc(), void 0 !== e && (g += U("us_privacy", e || "error")));
        jd(d) && (g = d.m ? g + U("gbcov", 1) : g + U("gbcov", 0));
        return g
    }

    function qd(a) {
        if (!mb) {
            var b = document;
            var c = "IFRAME";
            "application/xhtml+xml" === b.contentType && (c = c.toLowerCase());
            c = b.createElement(c);
            c.style.display = "none";
            c.src = "https://bid.g.doubleclick.net/xbbe/pixel?d=KAE";
            a.body.appendChild(c)
        }
    }

    function rd() {
        return new Image
    }

    function sd(a, b, c, d, e, f) {
        var g = c.onload_callback,
            h;
        e && g && g.call ? h = g : h = function() {};
        d += U("async", "1");
        e = c.google_gtm_url_processor;
        nb(e) && (d = e(d));
        g = (e = c.opt_image_generator) && e.call;
        if (!(f = g || !f)) {
            if (c.google_conversion_domain) var k = !1;
            else try {
                k = Fb(a, b, d, h)
            } catch (m) {
                k = !1
            }
            f = !k
        }
        f && (a = rd, g && (a = e), a = a(), a.src = d, a.onload = h)
    }

    function td(a, b) {
        G && "376635471" == H(2) && ("complete" === b.readyState ? qd(b) : a.addEventListener ? a.addEventListener("load", function() {
            qd(b)
        }) : a.attachEvent("onload", function() {
            qd(b)
        }))
    }

    function ud(a) {
        if ("landing" === a.google_conversion_type || !a.google_conversion_id || a.google_remarketing_only && a.google_disable_viewthrough) return !1;
        a.google_conversion_date = new Date;
        a.google_conversion_time = a.google_conversion_date.getTime();
        a.google_conversion_snippets = "number" === typeof a.google_conversion_snippets && 0 < a.google_conversion_snippets ? a.google_conversion_snippets + 1 : 1;
        void 0 === a.google_conversion_first_time && (a.google_conversion_first_time = a.google_conversion_time);
        a.google_conversion_js_version =
            "9";
        0 != a.google_conversion_format && 1 != a.google_conversion_format && 2 != a.google_conversion_format && 3 != a.google_conversion_format && (a.google_conversion_format = 3);
        !1 !== a.google_enable_display_cookie_match && (a.google_enable_display_cookie_match = !0);
        return !0
    }

    function vd(a, b) {
        function c(f) {
            d[f] = b && null != b[f] ? b[f] : a[f]
        }
        for (var d = {}, e = 0; e < cd.length; e++) c(cd[e]);
        c("onload_callback");
        return d
    }

    function Fd(a) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c],
                e = void 0;
            d.hasOwnProperty("google_business_vertical") ? (e = d.google_business_vertical, b[e] = b[e] || {
                google_business_vertical: e
            }) : (e = "", Object.prototype.hasOwnProperty.call(b, e) || (b[e] = {}));
            e = b[e];
            for (var f = r(Object, "keys").call(Object, d).filter(function(k) {
                    return $c.hasOwnProperty(k)
                }), g = 0; g < f.length; g++) {
                var h = f[g];
                h in e || (e[h] = []);
                e[h].push(d[h])
            }
        }
        return r(Object, "values").call(Object, b)
    }

    function md() {
        var a = "";
        db() && (a = lb().map(function(b) {
            return b.join("-")
        }).join("_"));
        return U("li", a)
    }

    function od(a) {
        if (!Ya || !a.__gsaExp || !a.__gsaExp.id) return "";
        a = a.__gsaExp.id;
        if (!nb(a)) return "";
        try {
            var b = Number(a());
            return isNaN(b) ? "" : U("gsaexp", b)
        } catch (c) {
            return ""
        }
    }

    function pd(a) {
        function b(d, e) {
            null != e && c.push(d + "=" + e)
        }
        if (!cb()) return "";
        a = Yc(a);
        if (!a) return "";
        var c = [];
        b("&uaa", a.architecture);
        b("&uab", a.bitness);
        b("&uam", a.model);
        b("&uap", a.platform);
        b("&uapv", a.platformVersion);
        null != a.wow64 && c.push("&uaw=" + (a.wow64 ? "1" : "0"));
        a.fullVersionList && c.push("&uafvl=" + a.fullVersionList.map(function(d) {
            return encodeURIComponent(d.brand || "") + ";" + encodeURIComponent(d.version || "")
        }).join("|"));
        return c.join("")
    }

    function nd(a) {
        if (!a) return "";
        var b = "",
            c;
        for (c in a) a.hasOwnProperty(c) && (b += U(c, a[c]));
        return b
    }

    function jd(a) {
        return (a = a.google_gtm_experiments) && a.gbcov ? !0 : !1
    }

    function id(a) {
        return a.google_gcl_cookie_prefix && "_gcl" !== a.google_gcl_cookie_prefix && ad.test(a.google_gcl_cookie_prefix) ? a.google_gcl_cookie_prefix : ""
    }

    function Jd(a, b) {
        if (!b.google_remarketing_only && Kd(a, b)) {
            a = b.google_additional_conversion_params || {};
            var c = b.google_gtm_experiments;
            a.capi = c && c.apcm ? "2" : "1";
            b.google_additional_conversion_params = a
        }
    }

    function Kd(a, b) {
        if (b.google_transport_url) return !1;
        if ((b = b.google_gtm_experiments) && b.apcm) return !0;
        if (!b || !b.capi) return !1;
        a: {
            if (!bd && !zb()) {
                if (b = r("www.googleadservices.com", "endsWith").call("www.googleadservices.com", "google.com") ? "" : "Azy2GzGQxPvGmQwVDdEL1jRuKSXIdSSASA06JCA6PCeaVHpFYf8Rw5/q+9adc9CrBTxfCeUwxkuDM4PWEmdqywwAAACKeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJQcml2YWN5U2FuZGJveEFkc0FQSXMiLCJleHBpcnkiOjE2NjEyOTkxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", a.head) {
                    var c = Pa("META");
                    a.head.appendChild(c);
                    c.httpEquiv = "origin-trial";
                    c.content = b;
                    a = c
                } else a = null;
                if (!a) {
                    a = !1;
                    break a
                }
                bd = !0
            }
            a = zb()
        }
        return a
    }

    function Ld(a, b, c, d, e) {
        a = ld(a, b, c, d, 7, e);
        b = "AW-" + d.google_conversion_id;
        (d = d.google_conversion_label) && (b = b + "/" + d);
        a: {
            d = b;b = void 0;
            try {
                b = M.querySelector('iframe[data-tagging-id="' + d + '"]')
            } catch (f) {}
            if (b) {
                if ((c = Number(b.dataset.loadTime)) && 6E4 > rb().getTime() - c) {
                    N(9);
                    break a
                }
            } else try {
                if (50 <= M.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                    N(10);
                    break a
                }
            } catch (f) {}
            xb(a, void 0, {
                allow: "join-ad-interest-group"
            }, {
                taggingId: d,
                loadTime: rb().getTime()
            }, b)
        }
    };
    var Md = !1,
        Nd = document.currentScript && document.currentScript.src || "";

    function Od(a, b, c) {
        try {
            if (!Md && (Md = !0, !c.google_gtm)) {
                var d = void 0,
                    e = A(a.location.href, "gtm_debug");
                Pd(e) && (d = 2);
                d || 0 !== b.referrer.indexOf("https://tagassistant.google.com/") || (d = 3);
                var f;
                if (f = !d) f = 0 <= qa(b.cookie.split("; "), "__TAG_ASSISTANT=x");
                f && (d = 4);
                if (!d) {
                    var g = b.documentElement.getAttribute("data-tag-assistant-present");
                    Pd(g) && (d = 5)
                }
                if (d) {
                    var h = "AW-" + (c.google_conversion_id || "");
                    if (!a["google.tagmanager.debugui2.queue"]) {
                        a["google.tagmanager.debugui2.queue"] = [];
                        var k = new na(oa, "https://www.googletagmanager.com/debug/bootstrap");
                        var m = za(k instanceof na && k.constructor === na && k.g === pa ? k.i : "type_error:Const");
                        c = {
                            id: h,
                            src: "LEGACY",
                            cond: d
                        };
                        var n = ya.exec(xa(m).toString()),
                            p = n[3] || "";
                        var q = za(n[1] + Aa("?", n[2] || "", c) + Aa("#", p));
                        var t = Pa("SCRIPT", b);
                        t.src = xa(q);
                        Ca(t);
                        var E = b.getElementsByTagName("script")[0];
                        E && E.parentNode && E.parentNode.insertBefore(t, E)
                    }
                    a["google.tagmanager.debugui2.queue"].push({
                        messageType: "LEGACY_CONTAINER_STARTING",
                        data: {
                            id: h,
                            scriptSource: Nd
                        }
                    })
                }
            }
        } catch (Y) {}
    }

    function Pd(a) {
        if (null == a || 0 === a.length) return !1;
        a = Number(a);
        var b = Date.now();
        return a < b + 3E5 && a > b - 9E5
    };

    function Qd(a, b) {
        a.onload_callback && "function" == typeof a.onload_callback.call ? a.onload_callback = dd(b, a.onload_callback) : a.onload_callback = function() {}
    }

    function Rd(a, b, c, d) {
        Od(a, c, d);
        db() && (ib(2), d.google_gtm && kb(K(gb), a));
        var e = !1;
        if (3 != d.google_conversion_format) return !1;
        try {
            if (ud(d)) {
                d.google_remarketing_only && d.google_enable_display_cookie_match && !mb && G && F(["376635470", "376635471"], Qa, 2);
                d.google_remarketing_only && !d.google_conversion_domain && G && F(["759238990", "759238991"], Ua, 13);
                !d.google_remarketing_only || d.google_conversion_domain || G && ("759248991" == H(14) || "759248990" == H(14)) || G && F(["759248990", "759248991"], Ta, 14);
                !1 !== d.google_conversion_linker &&
                    (d.google_gtm || Tc(d.google_gcl_cookie_prefix));
                if (1 == d.google_remarketing_only && null != d.google_gtag_event_data && null != d.google_gtag_event_data.items && d.google_gtag_event_data.items.constructor === Array && 0 < d.google_gtag_event_data.items.length) Sd(a, b, c, d);
                else {
                    var f = d.google_gtm_experiments && d.google_gtm_experiments.ccmpp;
                    if (d.google_conversion_domain || d.google_transport_url && "https://pagead2.googlesyndication.com/" !== d.google_transport_url) f = !1;
                    var g = !1;
                    r("www.googleadservices.com", "endsWith").call("www.googleadservices.com",
                        "google.com") && (g = !0);
                    var h = d.google_additional_params;
                    h && h.dg && (g = "e" === h.dg);
                    h = function(k, m, n) {
                        m = void 0 === m ? !0 : m;
                        n = void 0 === n ? !0 : n;
                        sd(a, c, d, ld(a, b, c, d, k), m, n)
                    };
                    d.google_gtm_experiments && d.google_gtm_experiments.fledge && (d.google_additional_params = d.google_additional_params || {}, d.google_additional_params.fledge = "1");
                    d.google_remarketing_only ? h(2) : g ? (Qd(d, f ? 3 : 2), Jd(c, d), h(1), h(3), f && h(6, !0, !1)) : (Qd(d, f ? 2 : 1), Jd(c, d), h(0), f && h(5, !0, !1), jd(d) && Sc(c, id(d)) && (d.m = !0, h(0, !1)));
                    d.google_gtm_experiments &&
                        d.google_gtm_experiments.fledge && Ld(a, b, c, d)
                }
                d.google_remarketing_only && d.google_enable_display_cookie_match && td(a, c);
                e = !0
            }
        } catch (k) {}
        return e
    }

    function Sd(a, b, c, d) {
        var e = Fd(d.google_gtag_event_data.items);
        Qd(d, e.length);
        for (var f = 0; f < e.length; f++) {
            var g = e[f];
            d.google_gtm_experiments && d.google_gtm_experiments.fledge && (d.google_additional_params = d.google_additional_params || {}, d.google_additional_params.fledge = "1");
            sd(a, c, d, ld(a, b, c, d, 2, g), !0, !0);
            d.google_gtm_experiments && d.google_gtm_experiments.fledge && Ld(a, b, c, d, g);
            d.google_conversion_time = d.google_conversion_time + 1
        }
    };
    G = new function() {
        var a = [];
        var b = 0,
            c;
        for (c in bb) a[b++] = bb[c];
        a = void 0 === a ? [] : a;
        this.i = {};
        this.g = {};
        for (b = 0; b < a.length; ++b) this.g[a[b]] = ""
    };
    F(["466465925", "466465926"], Sa, 20);
    cb() && Zc();
    G && F(["592230570", "592230571"], Ra, 16);
    db() && (ib(1), jb());

    function Td(a, b, c) {
        function d(m, n) {
            var p = new Image;
            p.onload = m;
            p.src = n
        }

        function e() {
            --f;
            if (0 >= f) {
                var m = Bb(a, !1),
                    n = m[b];
                n && (delete m[b], (m = n[0]) && m.call && m())
            }
        }
        var f = c.length + 1;
        if (2 == c.length) {
            var g = c[0],
                h = c[1];
            0 <= Ha(g, 0, "rmt_tld", g.search(Ia)) && 0 <= Ha(g, 0, "ipr", g.search(Ia)) && !h.match(Fa)[6] && (h += Ga(g), c[1] = C(h, "rmt_tld", "1"))
        }
        for (g = 0; g < c.length; g++) {
            h = c[g];
            var k = A(h, "fmt");
            switch (parseInt(k, 10)) {
                case 1:
                case 2:
                    (k = a.document.getElementById("goog_conv_iframe")) && !k.src ? xb(h, e, void 0, void 0, k, !1) : d(e,
                        h);
                    break;
                case 4:
                    Fb(a, a.document, h, e);
                    break;
                case 5:
                    if (a.navigator && a.navigator.sendBeacon)
                        if (a.navigator.sendBeacon(h, "")) {
                            e();
                            break
                        } else h = C(h, "sendb", 2);
                    h = C(h, "fmt", 3);
                default:
                    d(e, h)
            }
        }
        e()
    }
    var Ud = ["GooglemKTybQhCsO"],
        W = x;
    Ud[0] in W || "undefined" == typeof W.execScript || W.execScript("var " + Ud[0]);
    for (var X; Ud.length && (X = Ud.shift());) Ud.length || void 0 === Td ? W[X] && W[X] !== Object.prototype[X] ? W = W[X] : W = W[X] = {} : W[X] = Td;
    window.google_trackConversion = function(a) {
        var b = window,
            c = navigator,
            d = document;
        a = vd(b, a);
        a.google_conversion_format = 3;
        var e = !!a.google_gtm;
        K(Hb).i(e);
        return Rd(b, c, d, a)
    };
}).call(this);
// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "158",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__dee"
            }],
            "tags": [{
                "function": "__asprv",
                "vtp_globalName": "google_optimize",
                "vtp_listenForMutations": false,
                "tag_id": 13
            }, {
                "function": "__asprv",
                "tag_id": 14
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": ["macro", 1]
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "optimize.callback"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0]
                ],
                [
                    ["if", 1],
                    ["add", 1]
                ]
            ]
        },
        "runtime": []




    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa, ba = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        da = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ea;
    if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
    else {
        var fa;
        a: {
            var ha = {
                    a: !0
                },
                ia = {};
            try {
                ia.__proto__ = ha;
                fa = ia.a;
                break a
            } catch (a) {}
            fa = !1
        }
        ea = fa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ja = ea,
        ka = function(a, b) {
            a.prototype = da(b.prototype);
            a.prototype.constructor = a;
            if (ja) ja(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.ik = b.prototype
        },
        la = this || self,
        ma = function(a) {
            return a
        };
    var oa = function() {},
        pa = function(a) {
            return "function" === typeof a
        },
        h = function(a) {
            return "string" === typeof a
        },
        qa = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        ra = Array.isArray,
        sa = function(a, b) {
            if (a && ra(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        ta = function(a, b) {
            if (!qa(a) || !qa(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        wa = function(a, b) {
            for (var c = new ua, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        k = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        xa = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        ya = function(a) {
            return Math.round(Number(a)) || 0
        },
        za = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Aa = function(a) {
            var b = [];
            if (ra(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ba = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Da = function() {
            return new Date(Date.now())
        },
        z = function() {
            return Da().getTime()
        },
        ua = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    ua.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    ua.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ea = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Fa = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Ga = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ha = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ia = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Ja = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Ka = /^\w{1,9}$/,
        Na = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            k(a, function(d, e) {
                Ka.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Oa = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Pa, Qa = function() {
        if (void 0 === Pa) {
            var a = null,
                b = la.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ma,
                        createScript: ma,
                        createScriptURL: ma
                    })
                } catch (c) {
                    la.console && la.console.error(c.message)
                }
                Pa = a
            } else Pa = a
        }
        return Pa
    };
    var Sa = function(a, b) {
        this.h = b === Ra ? a : ""
    };
    Sa.prototype.toString = function() {
        return this.h + ""
    };
    var Ra = {};
    var Ta = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Ua() {
        var a = la.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    function Va(a) {
        return -1 != Ua().indexOf(a)
    };

    function Wa() {
        return Va("Firefox") || Va("FxiOS")
    }

    function Xa() {
        return (Va("Chrome") || Va("CriOS")) && !Va("Edge") || Va("Silk")
    };
    var Ya = {},
        Za = function(a, b) {
            this.h = b === Ya ? a : ""
        };
    Za.prototype.toString = function() {
        return this.h.toString()
    };
    var $a = function(a) {
            return a instanceof Za && a.constructor === Za ? a.h : "type_error:SafeHtml"
        },
        ab = function(a) {
            var b = a,
                c = Qa(),
                d = c ? c.createHTML(b) : b;
            return new Za(d, Ya)
        };

    function bb(a) {
        if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
        if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
    };
    var E = window,
        G = document,
        cb = navigator,
        db = G.currentScript && G.currentScript.src,
        eb = function(a, b) {
            var c = E[a];
            E[a] = void 0 === c ? b : c;
            return E[a]
        },
        fb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        gb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        hb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function ib(a, b, c) {
        b && k(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var jb = function(a, b, c, d, e) {
            var f = G.createElement("script");
            ib(f, d, gb);
            f.type = "text/javascript";
            f.async = !0;
            var g, l = a,
                m = Qa(),
                n = m ? m.createScriptURL(l) : l;
            g = new Sa(n, Ra);
            f.src = g instanceof Sa && g.constructor === Sa ? g.h : "type_error:TrustedResourceUrl";
            var p, q, t, u = null == (t = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : t.call(q, "script[nonce]");
            (p = u ? u.nonce || u.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            fb(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var r =
                    G.getElementsByTagName("script")[0] || G.body || G.head;
                r.parentNode.insertBefore(f, r)
            }
            return f
        },
        kb = function() {
            if (db) {
                var a = db.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        lb = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                l = !1;
            g || (g = G.createElement("iframe"), l = !0);
            ib(g, c, hb);
            d && k(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (l) {
                var m = G.body && G.body.lastChild || G.body || G.head;
                m.parentNode.insertBefore(g, m)
            }
            fb(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        mb = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        nb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        ob = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        I = function(a) {
            E.setTimeout(a, 0)
        },
        pb = function(a, b) {
            return a && b && a.attributes &&
                a.attributes[b] ? a.attributes[b].value : null
        },
        qb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        rb = function(a) {
            var b = G.createElement("div"),
                c = b,
                d = ab("A<div>" + a + "</div>");
            void 0 !== c.tagName && bb(c);
            c.innerHTML = $a(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        sb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f &&
                g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        tb = function(a) {
            var b;
            try {
                b = cb.sendBeacon && cb.sendBeacon(a)
            } catch (c) {}
            b || mb(a)
        },
        ub = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var vb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        wb = function(a) {
            if (null == a) return String(a);
            var b = vb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        xb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        K = function(a) {
            if (!a || "object" != wb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !xb(a, "constructor") && !xb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || xb(a, b)
        },
        N = function(a, b) {
            var c = b || ("array" == wb(a) ? [] : {}),
                d;
            for (d in a)
                if (xb(a, d)) {
                    var e = a[d];
                    "array" == wb(e) ? ("array" != wb(c[d]) && (c[d] = []), c[d] = N(e, c[d])) : K(e) ? (K(c[d]) || (c[d] = {}), c[d] = N(e, c[d])) : c[d] = e
                }
            return c
        };
    var yb = function(a) {
        if (void 0 === a || ra(a) || K(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var zb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Fh: a("consent"),
            Df: a("convert_case_to"),
            Ef: a("convert_false_to"),
            Ff: a("convert_null_to"),
            Gf: a("convert_true_to"),
            Hf: a("convert_undefined_to"),
            Wj: a("debug_mode_metadata"),
            Ab: a("function"),
            Qe: a("instance_name"),
            oi: a("live_only"),
            ri: a("malware_disabled"),
            si: a("metadata"),
            wi: a("original_activity_id"),
            Zj: a("original_vendor_template_id"),
            Yj: a("once_on_load"),
            vi: a("once_per_event"),
            Jg: a("once_per_load"),
            bk: a("priority_override"),
            ck: a("respected_consent_types"),
            Ng: a("setup_tags"),
            Og: a("tag_id"),
            Pg: a("teardown_tags")
        }
    }();
    var Wb;
    var Xb = [],
        Yb = [],
        Zb = [],
        $b = [],
        ac = [],
        bc = {},
        cc, ec, gc = function() {
            var a = fc;
            ec = ec || a
        },
        hc, ic = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = bc[c],
                f = {},
                g;
            for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.Ug && d.Ug(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]);
            e && d && d.Tg && (f.vtp_gtmCachedValues = d.Tg);
            if (b) {
                if (null == b.name) {
                    var l;
                    a: {
                        var m = b.index;
                        if (null == m) l = "";
                        else {
                            var n;
                            switch (b.type) {
                                case 2:
                                    n = Xb[m];
                                    break;
                                case 1:
                                    n = $b[m];
                                    break;
                                default:
                                    l = "";
                                    break a
                            }
                            var p = n && n[zb.Qe];
                            l = p ? String(p) : ""
                        }
                    }
                    b.name = l
                }
                e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
            }
            return void 0 !== e ? e(f) : Wb(c, f, b)
        },
        kc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = jc(a[e], b, c));
            return d
        },
        jc = function(a, b, c) {
            if (ra(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(jc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = Xb[f];
                        if (!g || b.df(g)) return;
                        c[f] = !0;
                        var l =
                            String(g[zb.Qe]);
                        try {
                            var m = kc(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = ic(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: l
                            });
                            hc && (d = hc.Ki(d, m))
                        } catch (x) {
                            b.ih && b.ih(x, Number(f), l), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[jc(a[n], b, c)] = jc(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var t = jc(a[q], b, c);
                            ec && (p = p || t === ec.Nd);
                            d.push(t)
                        }
                        return ec && p ? ec.Li(d) : d.join("");
                    case "escape":
                        d = jc(a[1], b, c);
                        if (ec && ra(a[1]) && "macro" ===
                            a[1][0] && ec.ij(a)) return ec.zj(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) Ab[a[u]] && (d = Ab[a[u]](d));
                        return d;
                    case "tag":
                        var r = a[1];
                        if (!$b[r]) throw Error("Unable to resolve tag reference " + r + ".");
                        return d = {
                            ah: a[2],
                            index: r
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] = a[1];
                        var w = lc(v, b, c),
                            y = !!a[4];
                        return y || 2 !== w ? y !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        lc = function(a, b, c) {
            try {
                return cc(kc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var oc = function(a) {
            function b(t) {
                for (var u = 0; u < t.length; u++) d[t[u]] = !0
            }
            for (var c = [], d = [], e = mc(a), f = 0; f < Yb.length; f++) {
                var g = Yb[f],
                    l = nc(g, e);
                if (l) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === l && b(g.block || []);
            }
            for (var p = [], q = 0; q < $b.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        nc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var l = b(f[g]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        mc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = lc(Zb[c], a));
                return b[c]
            }
        };
    var pc = {
        Ki: function(a, b) {
            b[zb.Df] && "string" === typeof a && (a = 1 == b[zb.Df] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(zb.Ff) && null === a && (a = b[zb.Ff]);
            b.hasOwnProperty(zb.Hf) && void 0 === a && (a = b[zb.Hf]);
            b.hasOwnProperty(zb.Gf) && !0 === a && (a = b[zb.Gf]);
            b.hasOwnProperty(zb.Ef) && !1 === a && (a = b[zb.Ef]);
            return a
        }
    };
    var Pc = function(a) {
            return Oc ? G.querySelectorAll(a) : null
        },
        Qc = function(a, b) {
            if (!Oc) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!G.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Rc = !1;
    if (G.querySelectorAll) try {
        var Sc = G.querySelectorAll(":root");
        Sc && 1 == Sc.length && Sc[0] == G.documentElement && (Rc = !0)
    } catch (a) {}
    var Oc = Rc;
    var Tc = [];
    Tc[3] = !0;
    Tc[20] = !0;
    Tc[21] = !0;
    Tc[22] = !0;
    Tc[17] = !0;
    Tc[19] = !0;

    Tc[29] = !0;
    Tc[31] = !0;
    var Uc = {},
        Vc = function(a, b) {
            Uc[a] = Uc[a] || [];
            Uc[a][b] = !0
        },
        Wc = function() {
            delete Uc.GA4_EVENT
        },
        Xc = function(a) {
            for (var b = [], c = Uc[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        },
        Yc = function() {
            for (var a = [], b = Uc.GA4_EVENT || [], c = 0; c < b.length; c++) b[c] && a.push(c);
            return 0 < a.length ? a : void 0
        };
    var Q = function(a) {
        Vc("GTM", a)
    };
    var S = {
            g: {
                D: "ad_storage",
                P: "analytics_storage",
                Af: "region",
                Bf: "consent_updated",
                Cf: "wait_for_update",
                Ih: "app_remove",
                Jh: "app_store_refund",
                Kh: "app_store_subscription_cancel",
                Lh: "app_store_subscription_convert",
                Mh: "app_store_subscription_renew",
                Jf: "add_payment_info",
                Kf: "add_shipping_info",
                oc: "add_to_cart",
                qc: "remove_from_cart",
                Lf: "view_cart",
                Kb: "begin_checkout",
                sc: "select_item",
                tb: "view_item_list",
                Lb: "select_promotion",
                ub: "view_promotion",
                Ea: "purchase",
                uc: "refund",
                Ja: "view_item",
                Mf: "add_to_wishlist",
                Nh: "first_open",
                Oh: "first_visit",
                xa: "gtag.config",
                Fa: "gtag.get",
                Ph: "in_app_purchase",
                vc: "page_view",
                Qh: "session_start",
                se: "user_engagement",
                Mb: "gclid",
                fa: "ads_data_redaction",
                W: "allow_ad_personalization_signals",
                te: "allow_custom_scripts",
                Rh: "allow_display_features",
                wc: "allow_enhanced_conversions",
                xc: "allow_google_signals",
                ya: "allow_interest_groups",
                sd: "auid",
                Sh: "auto_detection_enabled",
                Xa: "aw_remarketing",
                ud: "aw_remarketing_only",
                yc: "discount",
                zc: "aw_feed_country",
                Ac: "aw_feed_language",
                X: "items",
                Bc: "aw_merchant_id",
                Nf: "aw_basket_type",
                vd: "campaign_content",
                wd: "campaign_id",
                xd: "campaign_medium",
                yd: "campaign_name",
                Cc: "campaign",
                zd: "campaign_source",
                Ad: "campaign_term",
                ob: "client_id",
                Th: "content_group",
                Uh: "content_type",
                Ga: "conversion_cookie_prefix",
                Dc: "conversion_id",
                Ya: "conversion_label",
                ra: "conversion_linker",
                ue: "conversion_api",
                Za: "cookie_domain",
                Ka: "cookie_expires",
                ab: "cookie_flags",
                Ec: "cookie_name",
                ve: "cookie_path",
                cb: "cookie_prefix",
                vb: "cookie_update",
                Nb: "country",
                na: "currency",
                Fc: "customer_lifetime_value",
                Gc: "custom_map",
                Vh: "debug_mode",
                Z: "developer_id",
                Of: "disable_merchant_reported_purchases",
                Wh: "dc_custom_params",
                Xh: "dc_natural_search",
                we: "dynamic_event_settings",
                Yh: "affiliation",
                Pf: "checkout_option",
                Qf: "checkout_step",
                Zh: "coupon",
                Rf: "item_list_name",
                Sf: "list_name",
                ai: "promotions",
                Hc: "shipping",
                Tf: "tax",
                Bd: "engagement_time_msec",
                Ic: "enhanced_client_id",
                Jc: "enhanced_conversions",
                Uf: "enhanced_conversions_automatic_settings",
                Vf: "enhanced_conversions_mode",
                Kc: "estimated_delivery_date",
                xe: "euid_logged_in_state",
                Ob: "event_callback",
                Pb: "event_developer_id_string",
                Wf: "event",
                Cd: "event_settings",
                Dd: "event_timeout",
                bi: "experiments",
                ye: "firebase_id",
                Ed: "first_party_collection",
                Fd: "_x_20",
                wb: "_x_19",
                Xf: "fledge",
                Yf: "gac_gclid",
                Gd: "gac_wbraid",
                Zf: "gac_wbraid_multiple_conversions",
                Lc: "ga_restrict_domain",
                ze: "ga_temp_client_id",
                ag: "gdpr_applies",
                cg: "geo_granularity",
                eb: "value_callback",
                Qa: "value_key",
                Qb: "global_developer_id_string",
                Xj: "google_ono",
                pb: "google_signals",
                Hd: "google_tld",
                Id: "groups",
                dg: "gsa_experiment_id",
                eg: "iframe_state",
                Jd: "ignore_referrer",
                Ae: "internal_traffic_results",
                fg: "is_passthrough",
                La: "language",
                Be: "legacy_developer_id_string",
                sa: "linker",
                Rb: "accept_incoming",
                Sb: "decorate_forms",
                T: "domains",
                Mc: "url_position",
                gg: "method",
                Tb: "new_customer",
                hg: "non_interaction",
                ci: "optimize_id",
                Ma: "page_location",
                Ce: "page_path",
                Ra: "page_referrer",
                Ub: "page_title",
                ig: "passengers",
                jg: "phone_conversion_callback",
                di: "phone_conversion_country_code",
                kg: "phone_conversion_css_class",
                ei: "phone_conversion_ids",
                lg: "phone_conversion_number",
                mg: "phone_conversion_options",
                ng: "quantity",
                Kd: "redact_device_info",
                og: "redact_enhanced_user_id",
                fi: "redact_ga_client_id",
                gi: "redact_user_id",
                Ld: "referral_exclusion_definition",
                qb: "restricted_data_processing",
                hi: "retoken",
                pg: "screen_name",
                xb: "screen_resolution",
                ii: "search_term",
                za: "send_page_view",
                yb: "send_to",
                Nc: "session_duration",
                De: "session_engaged",
                Ee: "session_engaged_time",
                zb: "session_id",
                Fe: "session_number",
                Vb: "delivery_postal_code",
                qg: "tc_privacy_string",
                rg: "temporary_client_id",
                ji: "tracking_id",
                Ge: "traffic_type",
                Ha: "transaction_id",
                ba: "transport_url",
                sg: "trip_type",
                Oc: "update",
                fb: "url_passthrough",
                He: "_user_agent_architecture",
                Ie: "_user_agent_bitness",
                Je: "_user_agent_full_version_list",
                ug: "_user_agent_mobile",
                Ke: "_user_agent_model",
                Le: "_user_agent_platform",
                Me: "_user_agent_platform_version",
                Ne: "_user_agent_wow64",
                va: "user_data",
                vg: "user_data_auto_latency",
                wg: "user_data_auto_meta",
                xg: "user_data_auto_multi",
                yg: "user_data_auto_selectors",
                zg: "user_data_auto_status",
                Ag: "user_data_settings",
                wa: "user_id",
                Na: "user_properties",
                Bg: "us_privacy_string",
                ka: "value",
                Md: "wbraid",
                Cg: "wbraid_multiple_conversions",
                Eg: "_host_name",
                Fg: "_in_page_command",
                Gg: "_is_linker_valid",
                Hg: "_is_passthrough_cid",
                Ig: "non_personalized_ads"
            }
        },
        xd = {},
        yd = Object.freeze((xd[S.g.W] = 1, xd[S.g.wc] = 1, xd[S.g.xc] = 1, xd[S.g.X] = 1, xd[S.g.Za] = 1, xd[S.g.Ka] = 1, xd[S.g.ab] = 1, xd[S.g.Ec] = 1, xd[S.g.ve] = 1, xd[S.g.cb] = 1, xd[S.g.vb] = 1, xd[S.g.Gc] = 1, xd[S.g.Z] = 1, xd[S.g.we] = 1, xd[S.g.Ob] = 1, xd[S.g.Cd] = 1, xd[S.g.Dd] = 1, xd[S.g.Ed] = 1, xd[S.g.Lc] = 1, xd[S.g.pb] = 1, xd[S.g.Hd] =
            1, xd[S.g.Id] = 1, xd[S.g.Ae] = 1, xd[S.g.sa] = 1, xd[S.g.Ld] = 1, xd[S.g.qb] = 1, xd[S.g.za] = 1, xd[S.g.yb] = 1, xd[S.g.Nc] = 1, xd[S.g.Ee] = 1, xd[S.g.Vb] = 1, xd[S.g.ba] = 1, xd[S.g.Oc] = 1, xd[S.g.Ag] = 1, xd[S.g.Na] = 1, xd));
    Object.freeze([S.g.Ma, S.g.Ra, S.g.Ub, S.g.La, S.g.pg, S.g.wa, S.g.ye, S.g.Th]);
    var zd = {},
        Ad = Object.freeze((zd[S.g.Ih] = 1, zd[S.g.Jh] = 1, zd[S.g.Kh] = 1, zd[S.g.Lh] = 1, zd[S.g.Mh] = 1, zd[S.g.Nh] = 1, zd[S.g.Oh] = 1, zd[S.g.Ph] = 1, zd[S.g.Qh] = 1, zd[S.g.se] = 1, zd)),
        Bd = {},
        Cd = Object.freeze((Bd[S.g.Jf] = 1, Bd[S.g.Kf] = 1, Bd[S.g.oc] = 1, Bd[S.g.qc] = 1, Bd[S.g.Lf] = 1, Bd[S.g.Kb] = 1, Bd[S.g.sc] = 1, Bd[S.g.tb] = 1, Bd[S.g.Lb] = 1, Bd[S.g.ub] = 1, Bd[S.g.Ea] = 1, Bd[S.g.uc] = 1, Bd[S.g.Ja] = 1, Bd[S.g.Mf] = 1, Bd)),
        Dd = Object.freeze([S.g.W, S.g.xc, S.g.vb]),
        Ed = Object.freeze([].concat(Dd)),
        Fd = Object.freeze([S.g.Ka, S.g.Dd, S.g.Nc, S.g.Ee, S.g.Bd]),
        Gd = Object.freeze([].concat(Fd)),
        Hd = {},
        Id = (Hd[S.g.D] = "1", Hd[S.g.P] = "2", Hd),
        Jd = {},
        Kd = Object.freeze((Jd[S.g.W] = 1, Jd[S.g.wc] = 1, Jd[S.g.ya] = 1, Jd[S.g.Xa] = 1, Jd[S.g.ud] = 1, Jd[S.g.yc] = 1, Jd[S.g.zc] = 1, Jd[S.g.Ac] = 1, Jd[S.g.X] = 1, Jd[S.g.Bc] = 1, Jd[S.g.Ga] = 1, Jd[S.g.ra] = 1, Jd[S.g.Za] = 1, Jd[S.g.Ka] = 1, Jd[S.g.ab] = 1, Jd[S.g.cb] = 1, Jd[S.g.na] = 1, Jd[S.g.Fc] = 1, Jd[S.g.Z] = 1, Jd[S.g.Of] = 1, Jd[S.g.Jc] = 1, Jd[S.g.Kc] = 1, Jd[S.g.ye] = 1, Jd[S.g.Ed] = 1, Jd[S.g.La] = 1, Jd[S.g.Tb] = 1, Jd[S.g.Ma] = 1, Jd[S.g.Ra] = 1, Jd[S.g.jg] = 1, Jd[S.g.kg] = 1, Jd[S.g.lg] = 1, Jd[S.g.mg] =
            1, Jd[S.g.qb] = 1, Jd[S.g.za] = 1, Jd[S.g.yb] = 1, Jd[S.g.Vb] = 1, Jd[S.g.Ha] = 1, Jd[S.g.ba] = 1, Jd[S.g.Oc] = 1, Jd[S.g.fb] = 1, Jd[S.g.va] = 1, Jd[S.g.wa] = 1, Jd[S.g.ka] = 1, Jd));
    Object.freeze(S.g);
    var Ld = {},
        Nd = E.google_tag_manager = E.google_tag_manager || {},
        Od = Math.random();
    Ld.Rd = "970";
    Ld.da = "dataLayer";
    Ld.Hh = "";
    var Pd = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        Qd = {
            __paused: !0,
            __tg: !0
        },
        Rd;
    for (Rd in Pd) Pd.hasOwnProperty(Rd) && (Qd[Rd] = !0);
    Ld.nc = "www.googletagmanager.com";
    var Sd, Td = Ld.nc + "/gtm.js";
    Sd = Td;
    var Ud = za(""),
        Vd = za(""),
        Wd = null,
        Xd = null,
        Yd = {},
        Zd = {},
        $d = function() {
            var a = Nd.sequence || 1;
            Nd.sequence = a + 1;
            return a
        };
    Ld.Gh = "";
    var ae = "";
    Ld.Sd = ae;
    var be = new ua,
        ce = {},
        de = {},
        ge = {
            name: Ld.da,
            set: function(a, b) {
                N(Ja(a, b), ce);
                ee()
            },
            get: function(a) {
                return fe(a, 2)
            },
            reset: function() {
                be = new ua;
                ce = {};
                ee()
            }
        },
        fe = function(a, b) {
            return 2 != b ? be.get(a) : he(a)
        },
        he = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = ce, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        ie = function(a, b) {
            de.hasOwnProperty(a) || (be.set(a, b), N(Ja(a, b), ce), ee())
        },
        ee = function(a) {
            k(de, function(b, c) {
                be.set(b, c);
                N(Ja(b), ce);
                N(Ja(b,
                    c), ce);
                a && delete de[b]
            })
        },
        je = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? he(a) : be.get(a);
            "array" === wb(d) || "object" === wb(d) ? c = N(d) : c = d;
            return c
        };
    var ke, le = !1,
        me = function(a) {
            if (!le) {
                le = !0;
                ke = ke || {}
            }
            return ke[a]
        };
    var ne = function() {
            var a = E.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        oe = function(a) {
            if (G.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !E.getComputedStyle) return !0;
            var c = E.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var l = g.indexOf("opacity(");
                    0 <= l && (g = g.substring(l + 8, g.indexOf(")", l)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = E.getComputedStyle(d, null))
            }
            return !1
        };
    var xe = /:[0-9]+$/,
        ye = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        Be = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = ze(a.protocol) || ze(E.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : E.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" ===
                b && (a.hostname = (a.hostname || E.location.hostname).replace(xe, "").toLowerCase());
            return Ae(a, b, c, d, e)
        },
        Ae = function(a, b, c, d, e) {
            var f, g = ze(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = Ce(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(xe, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || Vc("TAGGING",
                        1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = ye(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        ze = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        Ce = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        De = function(a) {
            var b = G.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Vc("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(xe, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        Ee = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = De(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                l = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === l[0] && (l = l.substring(1));
            g = c(g);
            l = c(l);
            "" !== g && (g = "?" + g);
            "" !== l && (l = "#" + l);
            var m = "" + f + g + l;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        };
    var Fe = {};
    var kf = {},
        lf = function(a, b) {
            if (E._gtmexpgrp && E._gtmexpgrp.hasOwnProperty(a)) return E._gtmexpgrp[a];
            void 0 === kf[a] && (kf[a] = Math.floor(Math.random() * b));
            return kf[a]
        };
    var nf = {
        Wg: "",
        Fj: ""
    };
    var of = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var pf = function(a) {
        pf[" "](a);
        return a
    };
    pf[" "] = function() {};
    var rf = function() {
        var a = qf,
            b = "bf";
        if (a.bf && a.hasOwnProperty(b)) return a.bf;
        var c = new a;
        return a.bf = c
    };
    var qf = function() {
        var a = {};
        this.h = function() {
            var b = of .h,
                c = of .defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.m = function() {
            a[ of .h] = !0
        }
    };
    var sf = [];

    function tf() {
        var a = eb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: uf,
            update: vf,
            addListener: wf,
            notifyListeners: xf,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function uf(a, b, c, d, e, f) {
        var g = tf();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var l = g.entries,
                m = l[a] || {},
                n = m.region,
                p = c && h(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    t = {
                        region: p,
                        initial: "granted" === b,
                        update: m.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== m.initial) l[a] = t;
                q && E.setTimeout(function() {
                    l[a] === t && t.quiet && (t.quiet = !1, yf(a), xf(), Vc("TAGGING",
                        2))
                }, f)
            }
        }
    }

    function vf(a, b) {
        var c = tf();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = zf(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = zf(c, a);
            f.quiet ? (f.quiet = !1, yf(a)) : g !== d && yf(a)
        }
    }

    function wf(a, b) {
        sf.push({
            Ve: a,
            Ri: b
        })
    }

    function yf(a) {
        for (var b = 0; b < sf.length; ++b) {
            var c = sf[b];
            ra(c.Ve) && -1 !== c.Ve.indexOf(a) && (c.nh = !0)
        }
    }

    function xf(a, b) {
        for (var c = 0; c < sf.length; ++c) {
            var d = sf[c];
            if (d.nh) {
                d.nh = !1;
                try {
                    d.Ri({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function zf(a, b) {
        var c = a.entries[b] || {};
        return void 0 !== c.update ? c.update : c.initial
    }
    var Af = function(a) {
            var b = tf();
            b.accessedAny = !0;
            return zf(b, a)
        },
        Bf = function(a) {
            var b = tf();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        Cf = function(a) {
            var b = tf();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Df = function() {
            if (!rf().h()) return !1;
            var a = tf();
            a.accessedAny = !0;
            return a.active
        },
        Ef = function() {
            var a = tf();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Ff = function(a, b) {
            tf().addListener(a, b)
        },
        Gf = function(a, b) {
            tf().notifyListeners(a, b)
        },
        Hf = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Cf(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Ff(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        If = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var l = d[g];
                    !1 === Af(l) || e[l] || (f.push(l), e[l] = !0)
                }
                return f
            }
            var d = h(b) ? [b] : b,
                e = {};
            c().length !== d.length && Ff(d, function(f) {
                var g = c();
                0 < g.length && (f.Ve = g, a(f))
            })
        };

    function Jf() {}

    function Kf() {};

    function Lf(a) {
        for (var b = [], c = 0; c < Mf.length; c++) {
            var d = a(Mf[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Mf = [S.g.D, S.g.P],
        Nf = function(a) {
            var b = a[S.g.Af];
            b && Q(40);
            var c = a[S.g.Cf];
            c && Q(41);
            for (var d = ra(b) ? b : [b], e = {
                    jc: 0
                }; e.jc < d.length; e = {
                    jc: e.jc
                }, ++e.jc) k(a, function(f) {
                return function(g, l) {
                    if (g !== S.g.Af && g !== S.g.Cf) {
                        var m = d[f.jc],
                            n = nf.Wg,
                            p = nf.Fj;
                        tf().set(g, l, m, n, p, c)
                    }
                }
            }(e))
        },
        Of = 0,
        Pf = function(a, b) {
            k(a, function(e, f) {
                tf().update(e, f)
            });
            Gf(b.eventId, b.priorityId);
            var c = z(),
                d = c - Of;
            Of && 0 <= d && 1E3 > d && Q(66);
            Of = c
        },
        Qf = function(a) {
            var b = Af(a);
            return void 0 != b ? b : !0
        },
        Rf = function() {
            return "G1" + Lf(Af)
        },
        Sf = function(a,
            b) {
            If(a, b)
        },
        Tf = function(a, b) {
            Hf(a, b)
        };
    var Uf = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var Vf = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                l = g[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var Wf = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Xf = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function Yf(a) {
        return "null" !== a.origin
    };
    var ag = function(a, b, c, d) {
            return Zf(d) ? Vf(a, String(b || $f()), c) : []
        },
        dg = function(a, b, c, d, e) {
            if (Zf(e)) {
                var f = bg(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = cg(f, function(g) {
                        return g.Yd
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = cg(f, function(g) {
                        return g.dd
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function eg(a, b, c, d) {
        var e = $f(),
            f = window;
        Yf(f) && (f.document.cookie = a);
        var g = $f();
        return e != g || void 0 != c && 0 <= ag(b, g, !1, d).indexOf(c)
    }
    var ig = function(a, b, c) {
            function d(u, r, v) {
                if (null == v) return delete g[r], u;
                g[r] = v;
                return u + "; " + r + "=" + v
            }

            function e(u, r) {
                if (null == r) return delete g[r], u;
                g[r] = !0;
                return u + "; " + r
            }
            if (!Zf(c.Ua)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = fg(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.fk);
            f = d(f, "samesite",
                c.gk);
            c.hk && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = gg(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        t = d(f, "domain", q);
                    t = e(t, c.flags);
                    if (!hg(q, c.path) && eg(t, a, b, c.Ua)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return hg(m, c.path) ? 1 : eg(f, a, b, c.Ua) ? 0 : 1
        },
        jg = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return ig(a, b, c)
        };

    function cg(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var l = a[g],
                m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function bg(a, b, c) {
        for (var d = [], e = ag(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                l = g.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    Yd: 1 * m[0] || 1,
                    dd: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var fg = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        kg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        lg = /(^|\.)doubleclick\.net$/i,
        hg = function(a, b) {
            return lg.test(window.document.location.hostname) || "/" === b && kg.test(a)
        },
        $f = function() {
            return Yf(window) ? window.document.cookie : ""
        },
        gg = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            lg.test(e) || kg.test(e) || a.push("none");
            return a
        },
        Zf = function(a) {
            if (!rf().h() || !a || !Df()) return !0;
            if (!Cf(a)) return !1;
            var b = Af(a);
            return null == b ? !0 : !!b
        };
    var mg = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ Uf(a) & 2147483647) : String(b)
        },
        ng = function(a) {
            return [mg(a), Math.round(z() / 1E3)].join(".")
        },
        qg = function(a, b, c, d, e) {
            var f = og(b);
            return dg(a, f, pg(c), d, e)
        },
        rg = function(a, b, c, d) {
            var e = "" + og(c),
                f = pg(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        og = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        pg = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };
    var sg = function() {
        Nd.dedupe_gclid || (Nd.dedupe_gclid = "" + ng());
        return Nd.dedupe_gclid
    };
    var tg = function() {
        var a = !1;
        return a
    };
    var ug = {
            J: "GTM-P3B33MM",
            mc: ""
        },
        Eg = {
            kh: "GTM-P3B33MM",
            lh: "GTM-P3B33MM"
        },
        Fg = function() {
            return Eg.kh ? Eg.kh.split("|") : [ug.J]
        },
        Gg = function() {
            if (Eg.lh) return Eg.lh.split("|");
            Q(84);
            return []
        },
        Hg = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {}
        },
        Jg = function() {
            for (var a = Ig(), b = Fg(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                !d || qa(d) ? a.container[b[c]] = {
                    state: 2
                } : d.state = 2
            }
            for (var e = Gg(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && Q(93);
                g ? g.state = 2 : a.destination[e[f]] = {
                    state: 2
                }
            }
            a.canonical[ug.mc] = 2
        },
        Kg = function(a) {
            return !!Ig().container[a]
        },
        Lg = function() {
            var a = Ig().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b)) {
                    var c = a[b];
                    if (qa(c)) {
                        if (1 === c) return !0
                    } else if (1 === c.state) return !0
                }
            return !1
        },
        Mg = function() {
            var a = {};
            k(Ig().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        };

    function Ig() {
        var a = Nd.tidr;
        a || (a = new Hg, Nd.tidr = a);
        return a
    }
    var Ng;
    if (3 === Ld.Rd.length) Ng = "g";
    else {
        var Og = "G";
        Ng = Og
    }
    var Pg = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            GT: "t",
            HA: "h",
            MC: "m",
            GTM: Ng,
            OPT: "o"
        },
        Qg = function(a) {
            var b = ug.J.split("-"),
                c = b[0].toUpperCase(),
                d = Pg[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === Ld.Rd.length) {
                var g = "w";
                g = "z";
                f = "2" + g
            } else f = "";
            return f + d + Ld.Rd + e
        };

    function Rg(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Sg = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };

    function Tg() {
        return Va("iPhone") && !Va("iPod") && !Va("iPad")
    }

    function Ug() {
        Tg() || Va("iPad") || Va("iPod")
    };
    Va("Opera");
    Va("Trident") || Va("MSIE");
    Va("Edge");
    !Va("Gecko") || -1 != Ua().toLowerCase().indexOf("webkit") && !Va("Edge") || Va("Trident") || Va("MSIE") || Va("Edge"); - 1 != Ua().toLowerCase().indexOf("webkit") && !Va("Edge") && Va("Mobile");
    Va("Macintosh");
    Va("Windows");
    Va("Linux") || Va("CrOS");
    var Vg = la.navigator || null;
    Vg && (Vg.appVersion || "").indexOf("X11");
    Va("Android");
    Tg();
    Va("iPad");
    Va("iPod");
    Ug();
    Ua().toLowerCase().indexOf("kaios");
    var Wg = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var l = a.charCodeAt(e + f);
                    if (!l || 61 == l || 38 == l || 35 == l) return e
                }
                e += f + 1
            }
            return -1
        },
        Xg = /#|$/,
        Yg = function(a, b) {
            var c = a.search(Xg),
                d = Wg(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        Zg = /[?&]($|#)/,
        $g = function(a, b, c) {
            for (var d, e = a.search(Xg), f = 0, g, l = []; 0 <= (g = Wg(a, f, b, e));) l.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            l.push(a.slice(f));
            d = l.join("").replace(Zg, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, t = d.indexOf("#");
                0 > t && (t = d.length);
                var u = d.indexOf("?"),
                    r;
                0 > u || u > t ? (u = t, r = "") : r = d.substring(u + 1, t);
                q = [d.slice(0, u), r, d.slice(t)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };

    function ah(a) {
        if (!a || !G.head) return null;
        var b, c;
        c = void 0 === c ? document : c;
        b = c.createElement("meta");
        G.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var bh = function() {
        if (E.top == E) return 0;
        var a = E.location.ancestorOrigins;
        if (a) return a[a.length - 1] == E.location.origin ? 1 : 2;
        var b;
        var c = E.top;
        try {
            var d;
            if (d = !!c && null != c.location.href) b: {
                try {
                    pf(c.foo);
                    d = !0;
                    break b
                } catch (e) {}
                d = !1
            }
            b = d
        } catch (e) {
            b = !1
        }
        return b ? 1 : 2
    };
    var ch = function() {};
    var dh = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        eh = function(a, b, c) {
            this.m = a;
            this.h = null;
            this.R = {};
            this.nb = 0;
            this.qa = void 0 === b ? 500 : b;
            this.F = void 0 === c ? !1 : c;
            this.B = null
        };
    ka(eh, ch);
    eh.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.F
            },
            d = Xf(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.qa && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.qa));
        var f = function(g, l) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = dh(c), c.internalBlockOnErrors = b.F, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            fh(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    eh.prototype.removeEventListener = function(a) {
        a && a.listenerId && fh(this, "removeEventListener", null, a.listenerId)
    };
    var hh = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var l = c;
            2 === c ? (l = 0, 2 === g && (l = 1)) : 3 === c && (l = 1, 1 === g && (l = 0));
            var m;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = gh(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && gh(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === l ? a.purpose && a.vendor ? gh(a.purpose.legitimateInterests,
                b) && gh(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        gh = function(a, b) {
            return !(!a || !a[b])
        },
        fh = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.m.__tcfapi) {
                var e = a.m.__tcfapi;
                e(b, 2, c, d)
            } else if (ih(a)) {
                jh(a);
                var f = ++a.nb;
                a.R[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        ih = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.m, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (l) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (l) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        jh = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.R[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Sg(a.m, a.B))
        };
    var kh = !0;
    kh = !1;
    var lh = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        mh = Rg("", 550),
        nh = Rg("", 500);

    function oh() {
        var a = Nd.tcf || {};
        return Nd.tcf = a
    }
    var th = function() {
        var a = oh(),
            b = new eh(E, kh ? 3E3 : -1);
        if (!0 === E.gtag_enable_tcf_support && !a.active && ("function" === typeof E.__tcfapi || "function" === typeof b.m.__tcfapi || null != ih(b))) {
            a.active = !0;
            a.fd = {};
            ph();
            var c = null;
            kh ? c = E.setTimeout(function() {
                qh(a);
                rh(a);
                c = null
            }, nh) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c), c = null);
                    if (0 !== d.internalErrorState) qh(a), rh(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies) e = sh(), b.removeEventListener(d);
                        else if ("tcloaded" ===
                            d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {},
                                g;
                            for (g in lh)
                                if (lh.hasOwnProperty(g))
                                    if ("1" === g) {
                                        var l = d,
                                            m = !0;
                                        m = void 0 === m ? !1 : m;
                                        var n;
                                        var p = l;
                                        !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = dh(p)), n = "error" === p.cmpStatus || 0 !== p.internalErrorState ? !p.internalBlockOnErrors : "loaded" !== p.cmpStatus || "tcloaded" !== p.eventStatus && "useractioncomplete" !== p.eventStatus ? !1 : !0);
                                        f["1"] = n ? !1 === l.gdprApplies || "tcunavailable" === l.tcString ||
                                            void 0 === l.gdprApplies && !m || "string" !== typeof l.tcString || !l.tcString.length ? !0 : hh(l, "1", 0) : !1
                                    } else f[g] = hh(d, g, lh[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty", a.fd = e, rh(a))
                    }
                })
            } catch (d) {
                c && (clearTimeout(c), c = null), qh(a), rh(a)
            }
        }
    };

    function qh(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        kh && (a.fd = sh())
    }

    function ph() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = mh, a);
        Nf(b)
    }

    function sh() {
        var a = {},
            b;
        for (b in lh) lh.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function rh(a) {
        var b = {},
            c = (b.ad_storage = a.fd["1"] ? "granted" : "denied", b);
        Pf(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: uh()
        })
    }
    var uh = function() {
            var a = oh();
            return a.active ? a.tcString || "" : ""
        },
        vh = function() {
            var a = oh();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        wh = function(a) {
            if (!lh.hasOwnProperty(String(a))) return !0;
            var b = oh();
            return b.active && b.fd ? !!b.fd[String(a)] : !0
        };

    function xh(a, b, c, d) {
        var e, f = Number(null != a.Ta ? a.Ta : void 0);
        0 !== f && (e = new Date((b || z()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Ua: d
        }
    };
    var yh = ["1"],
        zh = {},
        Ah = {},
        Ch = function(a) {
            return zh[Bh(a)]
        },
        Fh = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = Bh(a.prefix);
            if (!zh[c] && !Dh(c, a.path, a.domain) && b) {
                var d = Bh(a.prefix),
                    e = ng();
                if (0 === Eh(d, e, a)) {
                    var f = eb("google_tag_data", {});
                    f._gcl_au ? Vc("GTM", 57) : f._gcl_au = e
                }
                Dh(c, a.path, a.domain)
            }
        };

    function Eh(a, b, c, d) {
        var e = rg(b, "1", c.domain, c.path),
            f = xh(c, d);
        f.Ua = "ad_storage";
        return jg(a, e, f)
    }

    function Dh(a, b, c) {
        var d = qg(a, b, c, yh, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (zh[a] = e.slice(0, 2).join("."), Ah[a] = {
            id: e.slice(2, 4).join("."),
            hh: Number(e[4]) || 0
        }) : 3 === e.length ? Ah[a] = {
            id: e.slice(0, 2).join("."),
            hh: Number(e[2]) || 0
        } : zh[a] = d;
        return !0
    }

    function Bh(a) {
        return (a || "_gcl") + "_au"
    };

    function Gh() {
        for (var a = Hh, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Ih() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Hh, Jh;

    function Kh(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Jh[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Hh = Hh || Ih();
        Jh = Jh || Gh();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != l && (c += String.fromCharCode(g << 6 & 192 | l)))
        }
    };
    var Lh;
    var Ph = function() {
            var a = Mh,
                b = Nh,
                c = Oh(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                nb(G, "mousedown", d);
                nb(G, "keyup", d);
                nb(G, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Qh = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Oh().decorators.push(f)
        },
        Rh = function(a, b, c) {
            for (var d = Oh().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    l;
                if (l = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== G.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var t = g.placement;
                    void 0 == t && (t = g.fragment ? 2 : 1);
                    t === b && Ga(e, g.callback())
                }
            }
            return e
        };

    function Oh() {
        var a = eb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Sh = /(.*?)\*(.*?)\*(.*)/,
        Th = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Uh = /^(?:www\.|m\.|amp\.)+/,
        Vh = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Wh(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Yh = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                    b.push(c);
                    var e = b,
                        f = e.push,
                        g, l = String(d);
                    Hh = Hh || Ih();
                    Jh = Jh || Gh();
                    for (var m = [], n = 0; n < l.length; n += 3) {
                        var p = n + 1 < l.length,
                            q = n + 2 < l.length,
                            t = l.charCodeAt(n),
                            u = p ? l.charCodeAt(n + 1) : 0,
                            r = q ? l.charCodeAt(n + 2) : 0,
                            v = t >> 2,
                            w = (t & 3) << 4 | u >> 4,
                            y = (u & 15) << 2 | r >> 6,
                            x = r & 63;
                        q || (x = 64, p || (y = 64));
                        m.push(Hh[v], Hh[w], Hh[y], Hh[x])
                    }
                    g = m.join("");
                    f.call(e, g)
                }
            }
        var B = b.join("*");
        return ["1", Xh(B),
            B
        ].join("*")
    };

    function Xh(a, b) {
        var c = [E.navigator.userAgent, (new Date).getTimezoneOffset(), cb.userLanguage || cb.language, Math.floor(z() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Lh)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, l = 0; 8 > l; l++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Lh = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Lh[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function Zh() {
        return function(a) {
            var b = De(E.location.href),
                c = b.search.replace("?", ""),
                d = ye(c, "_gl", !0) || "";
            a.query = $h(d) || {};
            var e = Be(b, "fragment").match(Wh("_gl"));
            a.fragment = $h(e && e[3] || "") || {}
        }
    }

    function ai(a, b) {
        var c = Wh(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var bi = function(a, b) {
            b || (b = "_gl");
            var c = Vh.exec(a);
            if (!c) return "";
            var d = c[1],
                e = ai(b, (c[2] || "").slice(1)),
                f = ai(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        ci = function(a) {
            var b = Zh(),
                c = Oh();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ga(d, e.query), a && Ga(d, e.fragment));
            return d
        },
        $h = function(a) {
            try {
                var b = di(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = Kh(d[e + 1]);
                        c[f] = g
                    }
                    Vc("TAGGING", 6);
                    return c
                }
            } catch (l) {
                Vc("TAGGING",
                    8)
            }
        };

    function di(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Sh.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var l = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Xh(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return l;
                Vc("TAGGING", 7)
            }
        }
    }

    function ei(a, b, c, d) {
        function e(p) {
            p = ai(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Vh.exec(c);
        if (!f) return "";
        var g = f[1],
            l = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
        return "" + g + l + m
    }

    function fi(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Rh(b, 1, c),
            e = Rh(b, 2, c),
            f = Rh(b, 3, c);
        if (Ha(d)) {
            var g = Yh(d);
            c ? gi("_gl", g, a) : hi("_gl", g, a, !1)
        }
        if (!c && Ha(e)) {
            var l = Yh(e);
            hi("_gl", l, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        hi(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        gi(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && ei(n, p, q)
            }
    }

    function hi(a, b, c, d) {
        if (c.href) {
            var e = ei(a, b, c.href, void 0 === d ? !1 : d);
            Ta.test(e) && (c.href = e)
        }
    }

    function gi(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var l = e[g];
                    if (l.name === a) {
                        l.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = G.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = ei(a, b, c.action);
                Ta.test(n) && (c.action = n)
            }
        }
    }

    function Mh(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || fi(e, e.hostname)
            }
        } catch (g) {}
    }

    function Nh(a) {
        try {
            if (a.action) {
                var b = Be(De(a.action), "host");
                fi(a, b)
            }
        } catch (c) {}
    }
    var ii = function(a, b, c, d) {
            Ph();
            Qh(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        ji = function(a, b) {
            Ph();
            Qh(a, [Ae(E.location, "host", !0)], b, !0, !0)
        },
        ki = function() {
            var a = G.location.hostname,
                b = Th.exec(G.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var l = a.replace(Uh, ""),
                m = e.replace(Uh, ""),
                n;
            if (!(n = l === m)) {
                var p = "." + m;
                n = l.substring(l.length - p.length,
                    l.length) === p
            }
            return n
        },
        li = function(a, b) {
            return !1 === a ? !1 : a || b || ki()
        };
    var mi = {};
    var ni = function(a) {
        for (var b = [], c = G.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                wf: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, l) {
            return l.timestamp - g.timestamp
        });
        return b
    };

    function oi(a, b) {
        var c = ni(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].wf] || (d[c[e].wf] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    ca: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].wf].push(g)
            }
        }
        return d
    };
    var pi = /^\w+$/,
        qi = /^[\w-]+$/,
        ri = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        si = function() {
            if (!rf().h() || !Df()) return !0;
            var a = Af("ad_storage");
            return null == a ? !0 : !!a
        },
        ti = function(a, b) {
            Cf("ad_storage") ? si() ? a() : If(a, "ad_storage") : b ? Vc("TAGGING", 3) : Hf(function() {
                ti(a, !0)
            }, ["ad_storage"])
        },
        vi = function(a) {
            return ui(a).map(function(b) {
                return b.ca
            })
        },
        ui = function(a) {
            var b = [];
            if (!Yf(E) || !G.cookie) return b;
            var c = ag(a, G.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    nd: d.nd
                }, e++) {
                var f = wi(c[e]);
                if (null != f) {
                    var g = f,
                        l = g.version;
                    d.nd = g.ca;
                    var m = g.timestamp,
                        n = g.labels,
                        p = sa(b, function(q) {
                            return function(t) {
                                return t.ca === q.nd
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = xi(p.labels, n || [])) : b.push({
                        version: l,
                        ca: d.nd,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, t) {
                return t.timestamp - q.timestamp
            });
            return yi(b)
        };

    function xi(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function zi(a) {
        return a && "string" == typeof a && a.match(pi) ? a : "_gcl"
    }
    var Bi = function() {
            var a = De(E.location.href),
                b = Be(a, "query", !1, void 0, "gclid"),
                c = Be(a, "query", !1, void 0, "gclsrc"),
                d = Be(a, "query", !1, void 0, "wbraid"),
                e = Be(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || ye(f, "gclid");
                c = c || ye(f, "gclsrc");
                d = d || ye(f, "wbraid")
            }
            return Ai(b, c, e, d)
        },
        Ai = function(a, b, c, d) {
            var e = {},
                f = function(g, l) {
                    e[l] || (e[l] = []);
                    e[l].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && qi.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(qi)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Di = function(a) {
            var b = Bi();
            ti(function() {
                Ci(b, !1, a)
            })
        };

    function Ci(a, b, c, d, e) {
        function f(w, y) {
            var x = Ei(w, g);
            x && (jg(x, y, l), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = zi(c.prefix);
        d = d || z();
        var l = xh(c, d, !0);
        l.Ua = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var y = ["GCL", n, w];
                0 < e.length && y.push(e.join("."));
                return y.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == mi.enable_gbraid_cookie_write ? 0 : mi.enable_gbraid_cookie_write) && !m && a.gb) {
            var q = a.gb[0],
                t = Ei("gb", g),
                u = !1;
            if (!b)
                for (var r = ui(t), v = 0; v < r.length; v++) r[v].ca === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }
    var Gi = function(a, b) {
            var c = ci(!0);
            ti(function() {
                for (var d = zi(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== ri[f]) {
                        var g = Ei(f, d),
                            l = c[g];
                        if (l) {
                            var m = Math.min(Fi(l), z()),
                                n;
                            b: {
                                var p = m;
                                if (Yf(E))
                                    for (var q = ag(g, G.cookie, void 0, "ad_storage"), t = 0; t < q.length; ++t)
                                        if (Fi(q[t]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var u = xh(b, m, !0);
                                u.Ua = "ad_storage";
                                jg(g, l, u)
                            }
                        }
                    }
                }
                Ci(Ai(c.gclid, c.gclsrc), !1, b)
            })
        },
        Ei = function(a, b) {
            var c = ri[a];
            if (void 0 !== c) return b + c
        },
        Fi = function(a) {
            return 0 !== Hi(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function wi(a) {
        var b = Hi(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            ca: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function Hi(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !qi.test(a[2]) ? [] : a
    }
    var Ii = function(a, b, c, d, e) {
            if (ra(b) && Yf(E)) {
                var f = zi(e),
                    g = function() {
                        for (var l = {}, m = 0; m < a.length; ++m) {
                            var n = Ei(a[m], f);
                            if (n) {
                                var p = ag(n, G.cookie, void 0, "ad_storage");
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                ti(function() {
                    ii(g, b, c, d)
                })
            }
        },
        yi = function(a) {
            return a.filter(function(b) {
                return qi.test(b.ca)
            })
        },
        Ji = function(a, b) {
            if (Yf(E)) {
                for (var c = zi(b.prefix), d = {}, e = 0; e < a.length; e++) ri[a[e]] && (d[a[e]] = ri[a[e]]);
                ti(function() {
                    k(d, function(f, g) {
                        var l = ag(c + g, G.cookie, void 0, "ad_storage");
                        l.sort(function(u,
                            r) {
                            return Fi(r) - Fi(u)
                        });
                        if (l.length) {
                            var m = l[0],
                                n = Fi(m),
                                p = 0 !== Hi(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                t;
                            t = 0 !== Hi(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [t];
                            Ci(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function Ki(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Li = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (Df()) {
                var c = Bi();
                if (Ki(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    ji(function() {
                        return d
                    }, 3);
                    ji(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        Mi = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!si()) return e;
            var f = ui(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var l = f[0],
                    m = f[0].timestamp,
                    n = [l.version, Math.round(m /
                        1E3), l.ca].concat(l.labels || [], [b]).join("."),
                    p = xh(c, m, !0);
                p.Ua = "ad_storage";
                jg(a, n, p)
            }
            return e
        };

    function Ni(a, b) {
        var c = zi(b),
            d = Ei(a, c);
        if (!d) return 0;
        for (var e = ui(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Oi(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var Pi = function(a) {
        var b = Math.max(Ni("aw", a), Oi(si() ? oi() : {}));
        return Math.max(Ni("gb", a), Oi(si() ? oi("_gac_gb", !0) : {})) > b
    };
    var Ui = /[A-Z]+/,
        Vi = /\s/,
        Wi = function(a) {
            if (h(a)) {
                a = Ba(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Ui.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || Vi.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return {
                            id: a,
                            prefix: c,
                            M: c + "-" + d[0],
                            H: d
                        }
                    }
                }
            }
        },
        Yi = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Wi(a[c]);
                d && (b[d.id] = d)
            }
            Xi(b);
            var e = [];
            k(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function Xi(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.H[1] && b.push(d.M)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var $i = function(a, b, c, d) {
            return (2 === Zi() || d || "http:" != E.location.protocol ? a : b) + c
        },
        Zi = function() {
            var a = kb(),
                b;
            if (1 === a) a: {
                var c = Sd;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = G.getElementsByTagName("script"), l = 0; l < g.length && 100 > l; l++) {
                    var m = g[l].src;
                    if (m) {
                        m = m.toLowerCase();
                        if (0 === m.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === m.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var lj = function(a, b, c) {
            this.target = a;
            this.eventName = b;
            this.h = c;
            this.m = {};
            this.metadata = N(c.eventMetadata || {});
            this.K = !1
        },
        mj = function(a, b, c) {
            var d = T(a.h, b);
            void 0 !== d ? a.m[b] = d : void 0 !== c && (a.m[b] = c)
        },
        nj = function(a, b, c) {
            var d = me(a.target.M);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };

    function oj(a) {
        return {
            getDestinationId: function() {
                return a.target.M
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                return void(a.eventName = b)
            },
            getHitData: function(b) {
                return a.m[b]
            },
            setHitData: function(b, c) {
                return void(a.m[b] = c)
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.m[b] && (a.m[b] = c)
            },
            copyToHitData: function(b, c) {
                mj(a, b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                return void(a.metadata[b] = c)
            },
            abort: function() {
                return void(a.K = !0)
            },
            getProcessedEvent: function() {
                return a
            }
        }
    };
    var ck = function(a) {
            var b = !1;
            if (!ak || !bk[ak]) return !1;
            b = a || "C" in bk[ak];
            return b
        },
        fk = function(a, b) {
            var c;
            if (!ak || !ck(b)) return "";
            var d = bk[ak];
            c = "&al=" + dk.filter(function(e) {
                return void 0 !== d[e]
            }).map(function(e) {
                return e + Math.floor(d[e])
            }).join(".") + (".Z" + ek[ak]);
            a && delete bk[ak];
            return c
        },
        ik = function(a) {},
        mk = function(a) {},
        nk = function() {
            return "&tc=" + $b.filter(function(a) {
                return a
            }).length
        },
        qk = function() {
            2022 <= ok().length && pk()
        },
        rk = function(a) {
            return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
        },
        tk = function() {
            sk || (sk = E.setTimeout(pk, 500))
        },
        pk = function(a) {
            sk && (E.clearTimeout(sk), sk = void 0);
            if (void 0 !== ak && (!uk[ak] || vk || wk || ck(a)))
                if (void 0 === ek[ak] && (xk[ak] || yk.jj() || 0 >= zk--)) Q(1), xk[ak] = !0;
                else {
                    void 0 === ek[ak] && yk.Gj();
                    var b = ok(!0, a);
                    a ? tb(b) : mb(b);
                    if (Ak || Bk && 0 < Ck.length) {
                        var c = b.replace("/a?", "/td?");
                        mb(c)
                    }
                    uk[ak] = !0;
                    Bk = Ak = Dk = Ek = wk = vk = "";
                    Ck = []
                }
        },
        ok = function(a, b) {
            var c = ak;
            if (void 0 === c) return "";
            var d = Xc("GTM"),
                e = Xc("TAGGING"),
                f = Fk,
                g = uk[c] ? "" : "&es=1",
                l = Gk[c],
                m = ik(c),
                n = nk(),
                p = vk,
                q = wk,
                t = Ek,
                u = mk(a),
                r = Dk,
                v = Ak,
                w = fk(a, b),
                y;
            return [f, g, l, m, d ? "&u=" + d : "", e ? "&ut=" + e : "", n, p, q, t, u, r, v, w, y, Bk ? "&dl=" + encodeURIComponent(Bk) : "", 0 < Ck.length ? "&tdp=" +
                Ck.join(".") : "", "&z=0"
            ].join("")
        },
        Jk = function() {
            Fk = Ik()
        },
        Ik = function() {
            return [Kk, "&v=3&t=t", "&pid=" + ta(), "&rv=" + Ld.Rd].join("")
        },
        lk = ["L", "S", "Y"],
        hk = ["S", "E"],
        Lk = {
            sampleRate: "0.005000",
            Bh: "",
            Ah: Number("5")
        },
        Mk = 0 <= G.location.search.indexOf("?gtm_latency=") || 0 <= G.location.search.indexOf("&gtm_latency="),
        Nk;
    if (!(Nk = Mk)) {
        var Ok = Math.random(),
            Pk = Lk.sampleRate;
        Nk = Ok < Pk
    }
    var Qk = Nk,
        Kk = "https://www.googletagmanager.com/a?id=" + ug.J + "&cv=158",
        Rk = {
            label: ug.J + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        },
        Fk = Ik(),
        uk = {},
        vk = "",
        wk = "",
        Dk = "",
        Ak = "",
        Ck = [],
        Bk = "",
        kk = {},
        jk = !1,
        gk = {},
        Sk = {},
        Ek = "",
        ak = void 0,
        Gk = {},
        xk = {},
        sk = void 0,
        Tk = 5;
    0 < Lk.Ah && (Tk = Lk.Ah);
    var yk = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                jj: function() {
                    return c < a ? !1 : z() - d[c % a] < b
                },
                Gj: function() {
                    var f =
                        c++ % a;
                    d[f] = z()
                }
            }
        }(Tk, 1E3),
        zk = 1E3,
        Vk = function(a, b) {
            if (Qk && void 0 !== a && !xk[a] && ak !== a) {
                pk();
                ak = a;
                Dk = vk = "";
                Gk[a] = "&e=" + rk(b) + "&eid=" + a;
                tk();
            }
        },
        Wk = function(a, b, c, d) {
            if (Qk && b) {
                var e, f = String(b[zb.Ab] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f =
                    "cvt");
                e = f;
                var g = c + e;
                if (!xk[a]) {
                    a !== ak && (pk(), ak = a);
                    vk = vk ? vk + "." + g : "&tr=" + g;
                    var l = b["function"];
                    if (!l) throw Error("Error: No function name given for function call.");
                    var m = (bc[l] ? "1" : "2") + e;
                    Dk = Dk ? Dk + "." + m : "&ti=" + m;
                    tk();
                    qk()
                }
            }
        };
    var cl = function(a, b, c) {
            if (Qk && void 0 !== a && !xk[a]) {
                a !== ak && (pk(), ak = a);
                var d = c + b;
                wk = wk ? wk + "." + d : "&epr=" + d;
                tk();
                qk()
            }
        },
        dl = function(a, b, c) {},
        dk = ["S", "P", "C", "Z"],
        el = {},
        fl = (el[1] = 5, el[2] = 5, el[3] = 5, el),
        bk = {},
        ek = {},
        Hk = void 0,
        gl = function(a, b) {
            var c = !1;
            if (!Qk || ek[a] || 0 === fl[b]) return !1;
            --fl[b];
            ek[a] = b;
            c = !0;
            return c
        },
        hl = function(a, b, c) {
            if (!Qk || !ek[a]) return;
            var d = bk[a];
            d || (bk[a] = d = {});
            d[b] =
                c;
        },
        il = function() {
            if (Qk) {
                E.setInterval(Jk, 864E5);
                nb(E, "pagehide", function() {
                    ak && ek[ak] && pk(!0);
                    for (var a in bk) bk.hasOwnProperty(a) && (ak = Number(a), pk(!0));
                });
            }
        };
    Wa();
    Tg() || Va("iPod");
    Va("iPad");
    !Va("Android") || Xa() || Wa() || Va("Opera") || Va("Silk");
    Xa();
    !Va("Safari") || Xa() || Va("Coast") || Va("Opera") || Va("Edge") || Va("Edg/") || Va("OPR") || Wa() || Va("Silk") || Va("Android") || Ug();
    var jl = {},
        kl = null,
        ll = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!kl) {
                kl = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = g.concat(l[m].split(""));
                    jl[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === kl[q] && (kl[q] = p)
                    }
                }
            }
            for (var t = jl[f], u = Array(Math.floor(b.length / 3)), r = t[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var y = b[v],
                    x = b[v + 1],
                    B = b[v + 2],
                    A = t[y >> 2],
                    C = t[(y & 3) << 4 | x >> 4],
                    F = t[(x & 15) << 2 | B >> 6],
                    H = t[B & 63];
                u[w++] = "" + A + C + F + H
            }
            var D = 0,
                M = r;
            switch (b.length - v) {
                case 2:
                    D = b[v + 1], M = t[(D & 15) << 2] || r;
                case 1:
                    var J = b[v];
                    u[w] = "" + t[J >> 2] + t[(J & 3) << 4 | D >> 4] + M + r
            }
            return u.join("")
        };
    var ml = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function nl() {
        var a;
        return null != (a = E.google_tag_data) ? a : E.google_tag_data = {}
    }

    function ol() {
        var a = E.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function pl() {
        var a, b;
        if ("function" !== typeof(null == (a = E.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)) return null;
        var c = nl();
        if (c.uach_promise) return c.uach_promise;
        var d = E.navigator.userAgentData.getHighEntropyValues(ml).then(function(e) {
            null != c.uach || (c.uach = e);
            return e
        });
        return c.uach_promise = d
    };

    function tl() {
        return "attribution-reporting"
    }

    function ul(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var vl = !1;

    function wl() {
        if (ul("join-ad-interest-group") && pa(cb.joinAdInterestGroup)) return !0;
        vl || (ah('A7bG5hJ4XpMV5a3V1wwAR0PalkFSxLOZeL9D/YBYdupYUIgUgGhfVJ1zBFOqGybb7gRhswfJ+AmO7S2rNK2IOwkAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), vl = !0);
        return ul("join-ad-interest-group") && pa(cb.joinAdInterestGroup)
    }

    function xl(a, b) {
        var c = void 0;
        try {
            c = G.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > z() - d) {
                Vc("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= G.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                Vc("TAGGING", 10);
                return
            }
        } catch (e) {}
        lb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: z()
        }, c)
    };
    var yl = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        zl = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        Al = /^\d+\.fls\.doubleclick\.net$/,
        Bl = /;gac=([^;?]+)/,
        Cl = /;gacgb=([^;?]+)/,
        Dl = /;gclaw=([^;?]+)/,
        El = /;gclgb=([^;?]+)/;

    function Fl(a, b) {
        if (Al.test(G.location.host)) {
            var c = G.location.href.match(b);
            return c && 2 == c.length && c[1].match(yl) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].ca);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var Gl = function(a, b, c) {
        var d = si() ? oi("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var l = Mi("_gac_gb_" + g, a, b, c);
            f = f || 0 !== l.length && l.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + l.join(","))
        }
        return {
            Ui: f ? e.join(";") : "",
            Ti: Fl(d, Cl)
        }
    };

    function Hl(a, b, c) {
        if (Al.test(G.location.host)) {
            var d = G.location.href.match(c);
            if (d && 2 == d.length && d[1].match(zl)) return [{
                ca: d[1]
            }]
        } else return ui((a || "_gcl") + b);
        return []
    }
    var Il = function(a) {
            return Hl(a, "_aw", Dl).map(function(b) {
                return b.ca
            }).join(".")
        },
        Jl = function(a) {
            return Hl(a, "_gb", El).map(function(b) {
                return b.ca
            }).join(".")
        },
        Kl = function(a, b) {
            var c = Mi((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var Ll = function() {
        if (pa(E.__uspapi)) {
            var a = "";
            try {
                E.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var um = function(a, b) {
        var c, d = E.GooglebQhCsO;
        d || (d = {}, E.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var vm = function(a, b) {
        var c = Yg(a, "fmt");
        if (b) {
            var d = Yg(a, "random"),
                e = Yg(a, "label") || "";
            if (!d) return !1;
            var f = ll(decodeURIComponent(e.replace(/\+/g, " ")) + ":" + decodeURIComponent(d.replace(/\+/g, " ")));
            if (!um(f, b)) return !1
        }
        c && 4 != c && (a = $g(a, "rfmt", c));
        var g = $g(a, "fmt", 4);
        jb(g, function() {
            E.google_noFurtherRedirects && b && b.call && (E.google_noFurtherRedirects = null, b())
        }, void 0, void 0, G.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Lm = function() {
            this.h = {}
        },
        Mm = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        Nm = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        Pm = function(a, b, c, d, e) {};

    function Rm(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return De("" + c + b).href
        }
    }

    function Sm(a, b) {
        return Tm() ? Rm(a, b) : void 0
    }

    function Tm() {
        var a = !1;
        return a
    }

    function Um() {
        return !!Ld.Sd && "SGTM_TOKEN" !== Ld.Sd.split("@@").join("")
    };
    var Wm = function(a, b, c, d) {
            if (!Vm() && !Kg(a)) {
                var e = c ? "/gtag/js" : "/gtm.js",
                    f = "?id=" + encodeURIComponent(a) + "&l=" + Ld.da,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c");
                var l = Um();
                l && (f += "&sign=" + Ld.Sd);
                var m = Sm(b, e + f);
                if (!m) {
                    var n = Ld.nc + e;
                    l && db && g && (n = db.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    m = $i("https://", "http://", n + f)
                }
                Ig().container[a] = {
                    state: 1,
                    context: d
                };
                jb(m)
            }
        },
        Xm = function(a, b, c) {
            var d;
            if (d = !Vm()) {
                var e = Ig().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (Tc[31] && Lg()) Ig().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c
                }, Q(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Ld.da + "&cx=c";
                    Um() && (f += "&sign=" + Ld.Sd);
                    var g = Sm(b, f);
                    g || (g = $i("https://", "http://", Ld.nc + f));
                    Ig().destination[a] = {
                        state: 1,
                        context: c
                    };
                    jb(g)
                }
        };

    function Vm() {
        if (tg()) {
            return !0
        }
        return !1
    };
    var Ym = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Zm = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        $m = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        an = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var bn = function() {
            var a = !1;
            return a
        },
        dn = function(a) {
            var b = fe("gtm.allowlist") || fe("gtm.whitelist");
            b && Q(9);
            bn() && (b = ["google", "gtagfl", "lcl", "zone"]);
            var c = b && Ia(Aa(b), Zm),
                d = fe("gtm.blocklist") ||
                fe("gtm.blacklist");
            d || (d = fe("tagTypeBlacklist")) && Q(3);
            d ? Q(8) : d = [];
            cn() && (d = Aa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Aa(d).indexOf("google") && Q(2);
            var e = d && Ia(Aa(d), $m),
                f = {};
            return function(g) {
                var l = g && g[zb.Ab];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var m = Zd[l] || [],
                    n = a(l, m);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var q = 0; q < m.length; q++) {
                                    if (0 > c.indexOf(m[q])) {
                                        Q(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var t = !1;
                if (d) {
                    var u = 0 <= e.indexOf(l);
                    if (u) t = u;
                    else {
                        var r = wa(e, m || []);
                        r && Q(10);
                        t = r
                    }
                }
                var v = !n || t;
                v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = wa(e, an));
                return f[l] = v
            }
        },
        cn = function() {
            return Ym.test(E.location && E.location.hostname)
        };
    var en = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        fn = {},
        gn = Object.freeze((fn[S.g.za] = !0, fn)),
        hn = 0 <= G.location.search.indexOf("?gtm_diagnostics=") || 0 <= G.location.search.indexOf("&gtm_diagnostics="),
        kn = function(a, b, c) {
            if ("config" !== a || 1 < Wi(b).H.length) return;
            var d, e = eb("google_tag_data", {});
            e.td || (e.td = {});
            d = e.td;
            var f = N(c.m);
            N(c.ma, f);
            var g = [],
                l;
            for (l in d) {
                var m = jn(d[l], f);
                m.length && (hn && console.log(m), g.push(l))
            }
            if (g.length) {
                if (g.length) {
                    var n = b + "*" + g.join(".");
                    Ak = Ak ? Ak + "!" + n : "&tdc=" + n
                }
                Vc("TAGGING", en[G.readyState] || 14)
            }
            d[b] = f;
        };

    function ln(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function jn(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, t) {
                var u = t[q];
                return void 0 === u ? gn[q] : u
            },
            f;
        for (f in ln(a, b)) {
            var g = (d ? d + "." : "") + f,
                l = e(f, a),
                m = e(f, b),
                n = "object" === wb(l) || "array" === wb(l),
                p = "object" === wb(m) || "array" === wb(m);
            if (n && p) jn(l, m, c, g);
            else if (n || p || l !== m) c[g] = !0
        }
        return Object.keys(c)
    };
    var mn = !1,
        nn = 0,
        on = [];

    function pn(a) {
        if (!mn) {
            var b = G.createEventObject,
                c = "complete" == G.readyState,
                d = "interactive" == G.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                mn = !0;
                for (var e = 0; e < on.length; e++) I(on[e])
            }
            on.push = function() {
                for (var f = 0; f < arguments.length; f++) I(arguments[f]);
                return 0
            }
        }
    }

    function qn() {
        if (!mn && 140 > nn) {
            nn++;
            try {
                G.documentElement.doScroll("left"), pn()
            } catch (a) {
                E.setTimeout(qn, 50)
            }
        }
    }
    var rn = function(a) {
        mn ? a() : on.push(a)
    };
    var sn = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: ug.J
        }
    };
    var un = function(a, b) {
            this.h = !1;
            this.F = [];
            this.R = {
                tags: []
            };
            this.qa = !1;
            this.m = this.B = 0;
            tn(this, a, b)
        },
        vn = function(a, b, c, d) {
            if (Qd.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            K(d) && (e = N(d, e));
            e.id = c;
            e.status = "timeout";
            return a.R.tags.push(e) - 1
        },
        wn = function(a, b, c, d) {
            var e = a.R.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        xn = function(a) {
            if (!a.h) {
                for (var b = a.F, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.F.length = 0
            }
        },
        tn = function(a, b, c) {
            void 0 !== b && yn(a, b);
            c && E.setTimeout(function() {
                return xn(a)
            }, Number(c))
        },
        yn =
        function(a, b) {
            var c = Fa(function() {
                return I(function() {
                    b(ug.J, a.R)
                })
            });
            a.h ? c() : a.F.push(c)
        },
        zn = function(a) {
            a.B++;
            return Fa(function() {
                a.m++;
                a.qa && a.m >= a.B && xn(a)
            })
        },
        An = function(a) {
            a.qa = !0;
            a.m >= a.B && xn(a)
        };
    var Bn = function() {
            function a(d) {
                return !qa(d) || 0 > d ? 0 : d
            }
            if (!Nd._li && E.performance && E.performance.timing) {
                var b = E.performance.timing.navigationStart,
                    c = qa(ge.get("gtm.start")) ? ge.get("gtm.start") : 0;
                Nd._li = {
                    cst: a(c - b),
                    cbt: a(Xd - b)
                }
            }
        },
        Cn = function(a) {
            E.performance && E.performance.mark(ug.J + "_" + a + "_start")
        },
        Dn = function(a) {
            if (E.performance) {
                var b = ug.J + "_" + a + "_start",
                    c = ug.J + "_" + a + "_duration";
                E.performance.measure(c, b);
                var d = E.performance.getEntriesByName(c)[0];
                E.performance.clearMarks(b);
                E.performance.clearMeasures(c);
                var e = Nd._p || {};
                void 0 === e[a] && (e[a] = d.duration, Nd._p = e);
                return d.duration
            }
        },
        En = function() {
            if (E.performance && E.performance.now) {
                var a = Nd._p || {};
                a.PAGEVIEW = E.performance.now();
                Nd._p = a
            }
        };
    var Fn = {},
        Gn = function() {
            return E.GoogleAnalyticsObject && E[E.GoogleAnalyticsObject]
        },
        Hn = !1;
    var In = function(a) {
            E.GoogleAnalyticsObject || (E.GoogleAnalyticsObject = a || "ga");
            var b = E.GoogleAnalyticsObject;
            if (E[b]) E.hasOwnProperty(b) || Q(12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Da());
                E[b] = c
            }
            Bn();
            return E[b]
        },
        Jn = function(a) {
            if (Df()) {
                var b = Gn();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function Kn() {
        return E.GoogleAnalyticsObject || "ga"
    }
    var Ln = function(a) {
            if (Fn[a] || Hn) return;
            var b = E[Kn()];
            pa(b) && (b("provide", a, oa), Fn[a] = !0);
        },
        Mn = function(a, b) {
            return function() {
                var c = Gn(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };

    function Rn(a, b, c, d) {
        var e = $b[a],
            f = Sn(a, b, c, d);
        if (!f) return null;
        var g = jc(e[zb.Ng], c, []);
        if (g && g.length) {
            var l = g[0];
            f = Rn(l.index, {
                O: f,
                N: 1 === l.ah ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Sn(a, b, c, d) {
        function e() {
            if (f[zb.ri]) l();
            else {
                var w = kc(f, c, []),
                    y = w[zb.Fh];
                if (null != y)
                    for (var x = 0; x < y.length; x++)
                        if (!Qf(y[x])) {
                            l();
                            return
                        }
                var B = vn(c.Cb, String(f[zb.Ab]), Number(f[zb.Og]), w[zb.si]),
                    A = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var H = z() - F;
                        Wk(c.id, $b[a], "5", H);
                        wn(c.Cb, B, "success", H);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var H = z() - F;
                        Wk(c.id, $b[a], "6", H);
                        wn(c.Cb, B, "failure", H);
                        l()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Wk(c.id, f, "1");
                var C = function() {
                    var H = z() - F;
                    Wk(c.id, f, "7", H);
                    wn(c.Cb, B, "exception", H);
                    A || (A = !0, l())
                };
                var F =
                    z();
                try {
                    ic(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (H) {
                    C(H)
                }
            }
        }
        var f = $b[a],
            g = b.O,
            l = b.N,
            m = b.terminate;
        if (c.df(f)) return null;
        var n = jc(f[zb.Pg], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Rn(p.index, {
                    O: g,
                    N: l,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            l = 2 === p.ah ? m : q
        }
        if (f[zb.Jg] || f[zb.vi]) {
            var t = f[zb.Jg] ? ac : c.Rj,
                u = g,
                r = l;
            if (!t[a]) {
                e = Fa(e);
                var v = Tn(a, t, e);
                g = v.O;
                l = v.N
            }
            return function() {
                t[a](u, r)
            }
        }
        return e
    }

    function Tn(a, b, c) {
        var d = [],
            e = [];
        b[a] = Un(d, e, c);
        return {
            O: function() {
                b[a] = Vn;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            N: function() {
                b[a] = Wn;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Un(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Vn(a) {
        a()
    }

    function Wn(a, b) {
        b()
    };
    var Yn = function(a, b) {
            return 1 === arguments.length ? Xn("config", a) : Xn("config", a, b)
        },
        Zn = function(a, b, c) {
            c = c || {};
            c[S.g.yb] = a;
            return Xn("event", b, c)
        };

    function Xn(a) {
        return arguments
    }
    var $n = function() {
        this.h = [];
        this.m = []
    };
    $n.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.m.length; f++) try {
            this.m[f](e)
        } catch (g) {}
    };
    $n.prototype.listen = function(a) {
        this.m.push(a)
    };
    $n.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    $n.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var bo = function(a, b, c) {
            ao().enqueue(a, b, c)
        },
        eo = function() {
            var a = co;
            ao().listen(a)
        };

    function ao() {
        var a = Nd.mb;
        a || (a = new $n, Nd.mb = a);
        return a
    }
    var mo = function(a) {
            var b = Nd.zones;
            return b ? b.getIsAllowedFn(Fg(), a) : function() {
                return !0
            }
        },
        no = function(a) {
            var b = Nd.zones;
            return b ? b.isActive(Fg(), a) : !0
        };
    var qo = function(a, b) {
        for (var c = [], d = 0; d < $b.length; d++)
            if (a[d]) {
                var e = $b[d];
                var f = zn(b.Cb);
                try {
                    var g = Rn(d, {
                        O: f,
                        N: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var l = c,
                            m = l.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = bc[p];
                        m.call(l, {
                            xh: n,
                            oh: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else oo(d, b), f()
                } catch (u) {
                    f()
                }
            }
        c.sort(po);
        for (var t = 0; t < c.length; t++) c[t].execute();
        return 0 < c.length
    };

    function po(a, b) {
        var c, d = b.oh,
            e = a.oh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.xh,
                l = b.xh;
            f = g > l ? 1 : g < l ? -1 : 0
        }
        return f
    }

    function oo(a, b) {
        if (!Qk) return;
        var c = function(d) {
            var e = b.df($b[d]) ? "3" : "4",
                f = jc($b[d][zb.Ng], b, []);
            f && f.length && c(f[0].index);
            Wk(b.id, $b[d], e);
            var g = jc($b[d][zb.Pg], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var to = !1,
        ro;
    var yo = function(a) {
        var b = z(),
            c = a["gtm.uniqueEventId"],
            d = a["gtm.priorityId"],
            e = a.event;
        if ("gtm.js" === e) {
            if (to) return !1;
            to = !0;
        }
        var l, m = !1;
        if (no(c)) l = mo(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
            m = !0;
            l = mo(Number.MAX_SAFE_INTEGER)
        }
        Vk(c, e);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = n;
        var t = {
                id: c,
                priorityId: d,
                name: e,
                df: dn(l),
                Rj: [],
                ih: function() {
                    Q(6)
                },
                Tg: uo(),
                Ug: vo(c),
                Cb: new un(q, p)
            },
            u = oc(t);
        m && (u = wo(u));
        var r = qo(u, t),
            v = !1;
        An(t.Cb);
        "gtm.js" !== e && "gtm.sync" !== e || Ln(ug.J);
        return xo(u, r) || v
    };

    function vo(a) {
        return function(b) {
            Qk && (yb(b) || dl(a, "input", b))
        }
    }

    function uo() {
        var a = {};
        a.event = je("event", 1);
        a.ecommerce = je("ecommerce", 1);
        a.gtm = je("gtm");
        a.eventModel = je("eventModel");
        return a
    }

    function wo(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String($b[c][zb.Ab]),
                    e;
                if (!(e = Pd[d] || void 0 !== $b[c][zb.wi])) {
                    var f = $b[c]["function"];
                    if (!f) throw "Error: No function name given for function call.";
                    var g = bc[f];
                    e = g ? g.isInfrastructure || !1 : !1
                }
                if (e || 0 === d.indexOf("__ccd") || 0 === d.indexOf("__ogt") || "__set_product_settings" === d) b[c] = !0
            }
        return b
    }

    function xo(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && $b[c] && !Qd[String($b[c][zb.Ab])]) return !0;
        return !1
    }
    var zo = function(a, b) {
            this.eventId = a;
            this.priorityId = b;
            this.ma = {};
            this.h = {};
            this.Ba = {};
            this.m = {};
            this.B = {};
            this.ja = {};
            this.eventMetadata = {};
            this.O = function() {};
            this.N = function() {};
            this.C = !1
        },
        Ao = function(a, b) {
            a.ma = b;
            return a
        },
        Bo = function(a, b) {
            a.h = b;
            return a
        },
        Co = function(a, b) {
            a.Ba = b;
            return a
        },
        Do = function(a, b) {
            a.m = b;
            return a
        },
        Eo = function(a, b) {
            a.B = b;
            return a
        },
        Fo = function(a, b) {
            a.ja = b;
            return a
        },
        Go = function(a, b) {
            a.eventMetadata = b || {};
            return a
        },
        Ho = function(a, b) {
            a.O = b;
            return a
        },
        Io = function(a, b) {
            a.N = b;
            return a
        },
        T = function(a, b) {
            if (void 0 !== a.ma[b]) return a.ma[b];
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.Ba[b]) return a.Ba[b];
            Jo(a, a.m[b], a.B[b]) && (Q(71), Q(79));
            if (void 0 !== a.m[b]) return a.m[b];
            if (void 0 !== a.ja[b]) return a.ja[b]
        },
        Ko = function(a) {
            function b(g) {
                for (var l = Object.keys(g), m = 0; m < l.length; ++m) c[l[m]] = 1
            }
            var c = {};
            b(a.ma);
            b(a.h);
            b(a.Ba);
            b(a.m);
            for (var d = Object.keys(a.B), e = 0; e < d.length; e++) {
                var f =
                    d[e];
                if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                    Q(71);
                    Q(80);
                    break
                }
            }
            return Object.keys(c)
        },
        em = function(a, b, c) {
            function d(m) {
                K(m) && k(m, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.ja[b]), d(a.m[b]), d(a.Ba[b]), d(a.h[b]));
            c && 2 !== c || d(a.ma[b]);
            var g = f,
                l = e;
            e = {};
            f = !1;
            c && 1 !== c || (d(a.ja[b]), d(a.B[b]), d(a.Ba[b]), d(a.h[b]));
            c && 2 !== c || d(a.ma[b]);
            if (f !== g || Jo(a, e, l)) Q(71), Q(81);
            f = g;
            e = l;
            return f ? e : void 0
        },
        Lo = function(a) {
            var b = [S.g.Cc, S.g.vd, S.g.wd, S.g.xd, S.g.yd, S.g.zd, S.g.Ad],
                c = {},
                d = !1,
                e = function(l) {
                    for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && (c[b[m]] = l[b[m]], d = !0);
                    return d
                };
            if (e(a.ma) || e(a.h) || e(a.Ba)) return c;
            e(a.m);
            var f = c,
                g = d;
            c = {};
            d = !1;
            e(a.B);
            Jo(a, c, f) && (Q(71), Q(82));
            c = f;
            d = g;
            if (d) return c;
            e(a.ja);
            return c
        },
        Jo = function(a, b, c) {
            try {
                if (b === c) return !1;
                var d = wb(b);
                if (d !== wb(c) ||
                    !(K(b) && K(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e = 0; e < b.length; e++)
                        if (Jo(a, b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b)
                        if (!c.hasOwnProperty(g) || Jo(a, b[g], c[g])) return !0
                }
            } catch (l) {
                Q(72)
            }
            return !1
        };
    var lq = function() {
            var a = !0;
            wh(7) && wh(9) && wh(10) || (a = !1);
            return a
        },
        mq = function() {
            var a = !0;
            wh(3) && wh(4) || (a = !1);
            return a
        };
    var hr = function(a, b, c, d) {
            gr.push("event", [b, a], c, d)
        },
        ir = function(a, b, c, d) {
            gr.push("get", [a, b], c, d)
        },
        jr = function() {
            return gr.B[S.g.ba]
        },
        kr = function() {
            this.status = 1;
            this.h = {};
            this.ja = {};
            this.B = {};
            this.F = null;
            this.Ba = {};
            this.m = !1
        },
        lr = function(a, b, c, d) {
            var e = z();
            this.type = a;
            this.m = e;
            this.V = b || "";
            this.h = c;
            this.messageContext = d
        },
        mr = function() {
            this.m = {};
            this.B = {};
            this.h = []
        },
        nr = function(a, b) {
            var c = Wi(b);
            return a.m[c.M] = a.m[c.M] || new kr
        },
        or = function(a, b, c, d) {
            if (d.V) {
                var e = nr(a, d.V),
                    f = e.F;
                if (f) {
                    var g = N(c),
                        l = N(e.h[d.V]),
                        m = N(e.Ba),
                        n = N(e.ja),
                        p = N(a.B),
                        q = {};
                    try {
                        q = N(ce)
                    } catch (v) {
                        Q(72)
                    }
                    var t = Wi(d.V).prefix,
                        u = function(v) {
                            cl(d.messageContext.eventId, t, v);
                            var w = g[S.g.Ob];
                            w && I(w)
                        },
                        r = Io(Ho(Go(Eo(Do(Fo(Co(Bo(Ao(new zo(d.messageContext.eventId, d.messageContext.priorityId), g), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (u) {
                                var v = u;
                                u = void 0;
                                v("2")
                            }
                        }), function() {
                            if (u) {
                                var v =
                                    u;
                                u = void 0;
                                v("3")
                            }
                        });
                    try {
                        cl(d.messageContext.eventId, t, "1"), kn(d.type, d.V, r);
                        f(d.V, b, d.m, r)
                    } catch (v) {
                        cl(d.messageContext.eventId, t, "4");
                    }
                }
            }
        };
    mr.prototype.register = function(a, b, c) {
        var d = nr(this, a);
        3 !== d.status && (d.F = b, d.status = 3, c && (N(d.ja, c), d.ja = c), this.flush())
    };
    mr.prototype.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!Wi(c)) return;
            a: if (c) {
                var e = Wi(c);
                if (e && 1 === nr(this, c).status) {
                    nr(this, c).status = 2;
                    this.push("require", [{}], e.M, {});
                }
            }
            nr(this, c).m && (d.deferrable = !1)
        }
        this.h.push(new lr(a, c, b, d));
        d.deferrable || this.flush()
    };
    mr.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0];
            if (f.messageContext.deferrable) !f.V || nr(this, f.V).m ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = nr(this, f.V);
                        if (3 !== g.status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        k(f.h[0], function(t, u) {
                            N(Ja(t, u), b.B)
                        });
                        break;
                    case "config":
                        g = nr(this, f.V);
                        e.jb = {};
                        k(f.h[0], function(t) {
                            return function(u, r) {
                                N(Ja(u, r), t.jb)
                            }
                        }(e));
                        var l = !!e.jb[S.g.Oc];
                        delete e.jb[S.g.Oc];
                        var m = Wi(f.V),
                            n = m.M === m.id;
                        l || (n ? g.Ba = {} : g.h[f.V] = {});
                        g.m && l || or(this, S.g.xa, e.jb, f);
                        g.m = !0;
                        n ? N(e.jb, g.Ba) : (N(e.jb, g.h[f.V]), Q(70));
                        d = !0;
                        break;
                    case "event":
                        g = nr(this, f.V);
                        e.md = {};
                        k(f.h[0], function(t) {
                            return function(u, r) {
                                N(Ja(u, r), t.md)
                            }
                        }(e));
                        or(this, f.h[1], e.md, f);
                        break;
                    case "get":
                        g = nr(this, f.V);
                        var p = {},
                            q = (p[S.g.Qa] = f.h[0], p[S.g.eb] = f.h[1], p);
                        or(this, S.g.Fa, q, f)
                }
                this.h.shift();
                pr(this, f)
            }
            e = {
                jb: e.jb,
                md: e.md
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var pr = function(a, b) {
            if ("require" !== b.type)
                if (b.V)
                    for (var c = nr(a, b.V).B[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.m)
                        if (a.m.hasOwnProperty(e)) {
                            var f = a.m[e];
                            if (f && f.B)
                                for (var g = f.B[b.type] || [], l = 0; l < g.length; l++) g[l]()
                        }
        },
        qr = function(a, b) {
            var c = gr,
                d = N(b);
            N(nr(c, a).ja, d);
            nr(c, a).ja = d
        },
        gr = new mr;
    var rr = {},
        sr = {},
        tr = function(a, b) {
            b = b.toString().split(",");
            for (var c = 0; c < b.length; c++) {
                var d = rr[b[c]] || [];
                rr[b[c]] = d;
                0 > d.indexOf(a) && d.push(a)
            }
        },
        ur = function(a, b) {
            b = String(b).split(",");
            for (var c = 0; c < b.length; c++) {
                var d = sr[b[c]] || [];
                sr[b[c]] = d;
                0 > d.indexOf(a) && d.push(a)
            }
        },
        vr = function(a) {
            for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
                    rd: d.rd,
                    od: d.od
                }, e++) {
                var f = a[e];
                if (0 <= f.indexOf("-")) {
                    if (d.rd = Wi(f), d.rd) {
                        var g = Gg();
                        sa(g, function(q) {
                            return function(t) {
                                return q.rd.M === t
                            }
                        }(d)) ? b.push(f) : c.push(f)
                    }
                } else {
                    var l =
                        rr[f] || [];
                    d.od = {};
                    l.forEach(function(q) {
                        return function(t) {
                            return q.od[t] = !0
                        }
                    }(d));
                    for (var m = Fg(), n = 0; n < m.length; n++)
                        if (d.od[m[n]]) {
                            b = b.concat(Gg());
                            break
                        }
                    var p = sr[f] || [];
                    p.length && (b = b.concat(p))
                }
            }
            return {
                rj: b,
                tj: c
            }
        },
        wr = function(a) {
            k(rr, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        xr = function(a) {
            k(sr, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var yr = "HA GF G UA AW DC MC".split(" "),
        zr = !1,
        Ar = !1;

    function Br(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: $d()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Cr = {
            config: function(a, b) {
                var c = Br(a, b);
                if (!(2 > a.length) && h(a[1])) {
                    var d = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !K(a[2]) || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = Wi(a[1]);
                    if (e) {
                        Vk(c.eventId, "gtag.config");
                        var f = e.id === e.M,
                            g = e.M,
                            l = !1,
                            m = !!d[S.g.Oc],
                            n = f && -1 !== Fg().indexOf(g);
                        n && !m && (l = Ar, Ar = !0);
                        if (!(Vd && f && l)) {
                            var p = d[S.g.ba] || jr();
                            if (!f) {
                                if (!sa(Gg(), function(y) {
                                        return y === e.M
                                    })) {
                                    Xm(e.M, p, {
                                        source: 2,
                                        fromContainerExecution: b.fromContainerExecution
                                    });
                                    return
                                }
                            } else if (!n && !tg()) {
                                Wm(g, p, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                return
                            }
                            b.noTargetGroup || (f ? (wr(e.id), tr(e.id, d[S.g.Id] || "default")) : (xr(e.id), ur(e.id, d[S.g.Id] || "default")));
                            delete d[S.g.Id];
                            zr || Q(43);
                            var q = [e.id];
                            f && (q = Gg());
                            for (var t = !1, u = 0; u < q.length; u++) {
                                var r = Wi(q[u]),
                                    v = N(b);
                                if (r && -1 !== yr.indexOf(r.prefix)) {
                                    var w = v.eventMetadata || {};
                                    w.hasOwnProperty("is_external_event") || (w.is_external_event = !v.fromContainerExecution);
                                    v.eventMetadata = w;
                                    delete d[S.g.Ob];
                                    gr.push("config", [d], r.id, v);
                                    t = !0
                                }
                            }
                            t || (ie("gtag.targets." + e.id), ie("gtag.targets." + e.id, N(d)))
                        }
                    }
                }
            },
            consent: function(a,
                b) {
                if (3 === a.length) {
                    Q(39);
                    var c = Br(a, b),
                        d = a[1];
                    "default" === d ? Nf(a[2]) : "update" === d && Pf(a[2], c)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && h(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!K(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = N(e), e[S.g.Ob] && (g.eventCallback = e[S.g.Ob]), e[S.g.Dd] && (g.eventTimeout = e[S.g.Dd]));
                    var l = Br(a, b),
                        m = l.eventId,
                        n = l.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        t = q && q[S.g.yb];
                    void 0 === t && (t = fe(S.g.yb, 2), void 0 === t && (t = "default"));
                    if (h(t) || ra(t)) {
                        var u = t.toString().replace(/\s+/g, "").split(","),
                            r = vr(u),
                            v = r.rj,
                            w = r.tj;
                        if (w.length)
                            for (var y = q && q[S.g.ba] || jr(), x = 0; x < w.length; x++) {
                                var B = Wi(w[x]);
                                B && Xm(B.M, y, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = Yi(v)
                    } else p = void 0;
                    var A = p;
                    if (A) {
                        Vk(m, c);
                        for (var C = [], F = 0; F < A.length; F++) {
                            var H = A[F],
                                D = N(b);
                            if (-1 !== yr.indexOf(H.prefix)) {
                                var M = N(d),
                                    J = D.eventMetadata || {};
                                J.hasOwnProperty("is_external_event") ||
                                    (J.is_external_event = !D.fromContainerExecution);
                                D.eventMetadata = J;
                                delete M[S.g.Ob];
                                hr(c, M, H.id, D)
                            }
                            C.push(H.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < A.length ? g.eventModel[S.g.yb] = C.join() : delete g.eventModel[S.g.yb];
                        zr || Q(43);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                Q(53);
                if (4 === a.length && h(a[1]) && h(a[2]) && pa(a[3])) {
                    var c = Wi(a[1]),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        zr || Q(43);
                        var f = jr();
                        if (!sa(Gg(), function(l) {
                                return c.M === l
                            })) Xm(c.M, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !==
                            yr.indexOf(c.prefix)) {
                            Br(a, b);
                            var g = {};
                            Jf(N((g[S.g.Qa] = d, g[S.g.eb] = e, g)));
                            ir(d, function(l) {
                                I(function() {
                                    return e(l)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    zr = !0;
                    var c = Br(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && K(a[1]) ? c = N(a[1]) : 3 == a.length && h(a[1]) && (c = {}, K(a[2]) || ra(a[2]) ? c[a[1]] = N(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = Br(a,
                            b),
                        e = d.eventId,
                        f = d.priorityId;
                    N(c);
                    var g = N(c);
                    gr.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        Dr = {
            policy: !0
        };
    var Er = function(a) {
            var b = E[Ld.da].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        Fr = function(a) {
            var b = E[Ld.da],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Gr = !1,
        Hr = [];

    function Ir() {
        if (!Gr) {
            Gr = !0;
            for (var a = 0; a < Hr.length; a++) I(Hr[a])
        }
    }
    var Jr = function(a) {
        Gr ? I(a) : Hr.push(a)
    };
    var Sr = function() {},
        Tr = function() {
            var a = E.gaData,
                b = 0,
                c = void 0;
            if (a)
                for (var d in a)
                    if (a.hasOwnProperty(d) && 0 === d.indexOf("UA-") && a[d].hitcount) {
                        b += a[d].hitcount;
                        var e = Number(a[d].first_hit);
                        e && (!c || e < c) && (c = e)
                    }
            return {
                fh: b,
                bh: c
            }
        },
        Lr = function(a, b) {
            var c, d, e, f, g, l, m, n, p;
            return {
                hd: d,
                jd: c,
                je: e,
                ke: f,
                ce: g,
                oe: l,
                Yc: m,
                af: n,
                Xc: p
            }
        },
        Rr = function(a, b) {
            b = void 0 === b ? "ol" : b;
        },
        Vr = !1,
        Kr, Mr, Nr, Ur, Or, Pr, Qr;
    var Wr = function() {},
        Yr = function(a) {
            var b = Xr;
        };
    var $r = function(a) {
        if (Zr(a)) return a;
        this.h = a
    };
    $r.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var Zr = function(a) {
        return !a || "object" !== wb(a) || K(a) ? !1 : "getUntrustedMessageValue" in a
    };
    $r.prototype.getUntrustedMessageValue = $r.prototype.getUntrustedMessageValue;
    var as = 0,
        bs = {},
        cs = [],
        ds = [],
        es = !1,
        fs = !1;

    function gs(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var hs = function(a) {
            return E[Ld.da].push(a)
        },
        is = function(a, b) {
            var c = Nd[Ld.da],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = E.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (E.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function js(a, b) {
        var c = a._clear || b.overwriteModelFields;
        k(a, function(e, f) {
            "_clear" !== e && (c && ie(e), ie(e, f))
        });
        Wd || (Wd = a["gtm.start"]);
        Wr();
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = $d(), a["gtm.uniqueEventId"] = d, ie("gtm.uniqueEventId", d));
        return yo(a)
    }

    function ks(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (xa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function ls() {
        var a;
        if (ds.length) a = ds.shift();
        else if (cs.length) a = cs.shift();
        else return;
        var b;
        var c = a;
        if (es || !ks(c.message)) b = c;
        else {
            es = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = $d());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                l = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            cs.unshift(l, c);
            b: {
                var m =
                    ug.J;
                if (!m) break b;
                var n, p = De(E.location.href);n = p.hostname + p.pathname;Bk || (Bk = n);Ck.push(m);
            }
            b = f
        }
        return b
    }

    function ms() {
        for (var a = !1, b; !fs && (b = ls());) {
            fs = !0;
            delete ce.eventModel;
            ee();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) fs = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < f.length; g++) {
                        var l = f[g],
                            m = fe(l, 1);
                        if (ra(m) || K(m)) m = N(m);
                        de[l] = m
                    }
                try {
                    if (pa(d)) try {
                        d.call(ge)
                    } catch (B) {} else if (ra(d)) {
                        var n =
                            d;
                        if (h(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                t = n.slice(1),
                                u = fe(p.join("."), 2);
                            if (null != u) try {
                                u[q].apply(u, t)
                            } catch (B) {}
                        }
                    } else {
                        var r = void 0;
                        if (xa(d)) a: {
                            if (d.length && h(d[0])) {
                                var v = Cr[d[0]];
                                if (v && (!e.fromContainerExecution || !Dr[d[0]])) {
                                    r = v(d, e);
                                    break a
                                }
                            }
                            r = void 0
                        }
                        else r = d;
                        r && (a = js(r, e) || a)
                    }
                } finally {
                    e.fromContainerExecution && ee(!0);
                    var w = d["gtm.uniqueEventId"];
                    if ("number" === typeof w) {
                        for (var y = bs[String(w)] || [], x = 0; x < y.length; x++) ds.push(ns(y[x]));
                        y.length && ds.sort(gs);
                        delete bs[String(w)];
                        w > as && (as =
                            w)
                    }
                    fs = !1
                }
            }
        }
        return !a
    }

    function os() {
        var b = ms();
        try {
            Er(ug.J)
        } catch (c) {}
        return b
    }

    function co(a) {
        if (as < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            bs[b] = bs[b] || [];
            bs[b].push(a)
        } else ds.push(ns(a)), ds.sort(gs), I(function() {
            fs || ms()
        })
    }

    function ns(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var qs = function() {
            function a(f) {
                var g = {};
                if (Zr(f)) {
                    var l = f;
                    f = Zr(l) ? l.getUntrustedMessageValue() : void 0;
                    g.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: g
                }
            }
            var b = eb(Ld.da, []),
                c = Nd[Ld.da] = Nd[Ld.da] || {};
            !0 === c.pruned && Q(83);
            bs = ao().get();
            eo();
            rn(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            Jr(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < Nd.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var g = 0; g < arguments.length; g++) f[g] = new $r(arguments[g])
                } else f = [].slice.call(arguments, 0);
                var l = f.map(function(q) {
                    return a(q)
                });
                cs.push.apply(cs, l);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (Q(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof m || m;
                return ms() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            cs.push.apply(cs, e);
            if (ps()) {
                I(os)
            }
        },
        ps = function() {
            var a = !0;
            return a
        };

    function rs(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = z();
        return b < c + 3E5 && b > c - 9E5
    };
    var fc = {};
    fc.Nd = new String("undefined");
    var Ss = E.clearTimeout,
        Ts = E.setTimeout,
        V = function(a, b, c, d) {
            if (tg()) {
                b && I(b)
            } else return jb(a, b, c, d)
        },
        Us = function() {
            return new Date
        },
        Vs = function() {
            return E.location.href
        },
        Ws = function(a) {
            return Be(De(a), "fragment")
        },
        Xs = function(a) {
            return Ce(De(a))
        },
        Ys = function(a, b) {
            return fe(a, b || 2)
        },
        Zs = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = hs(a)) : d = hs(a);
            return d
        },
        $s = function(a, b) {
            E[a] = b
        },
        W = function(a, b, c) {
            b &&
                (void 0 === E[a] || c && !E[a]) && (E[a] = b);
            return E[a]
        },
        at = function(a, b, c) {
            return ag(a, b, void 0 === c ? !0 : !!c)
        },
        bt = function(a, b, c) {
            return 0 === jg(a, b, c)
        },
        ct = function(a, b) {
            if (tg()) {
                b && I(b)
            } else lb(a, b)
        },
        dt = function(a) {
            return !!ys(a, "init", !1)
        },
        et = function(a) {
            ws(a, "init", !0)
        },
        ft = function(a, b, c) {
            Qk && (yb(a) || dl(c, b, a))
        };

    var ht = function(a) {
            if (!a || a.nodeType != Node.ELEMENT_NODE) return !1;
            var b = a.tagName.toUpperCase();
            return "SCRIPT" == b || "STYLE" == b || "LINK" == b
        },
        it = function(a, b, c) {
            try {
                null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
            } catch (d) {
                return d
            }
            return null
        },
        jt = function(a, b, c) {
            var d = a.getAttribute(b);
            return it(a, b, c) ? 8 : function() {
                it(a, b, d)
            }
        },
        mt = function(a, b, c) {
            var d, e, f = a.ownerDocument || a.document || document;
            c = (c || "").toLowerCase();
            "after" == c ? (d = a.parentNode, e = a.nextSibling) : "insert" == c ? (d = a, e = a.firstChild) : "append" ==
                c ? (d = a, e = null) : (d = a.parentNode, e = a);
            if (!d || d == f) return {
                result: 1,
                dj: []
            };
            var g = kt(b, d);
            lt(g, "SCRIPT");
            lt(g, "NOSCRIPT");
            var l = [];
            if (g.firstChild)
                for (var m = g.firstChild; m;) {
                    var n = m.nextSibling;
                    l.push(m);
                    d.insertBefore(m, e);
                    m = n
                }
            var p = a.nextSibling;
            "replace" == c && d.removeChild(a);
            return {
                result: function() {
                    for (; 0 < l.length;) d.removeChild(l.pop());
                    "replace" == c && d.insertBefore(a, p)
                },
                dj: l.slice()
            }
        },
        nt = {
            SELECT: [1, '<select multiple="multiple">', "</select>"],
            FIELDSET: [1, "<fieldset>", "</fieldset>"],
            MAP: [1, "<map>",
                "</map>"
            ],
            OBJECT: [1, "<object>", "</object>"],
            TABLE: [1, "<table>", "</table>"],
            TBODY: [2, "<table><tbody>", "</tbody></table>"],
            COLGROUP: [2, "<table><colgroup>", "</colgroup></table>"],
            TR: [3, "<table><tbody><tr>", "</tr></tbody></table>"]
        },
        kt = function(a, b) {
            var c = 0,
                d = "",
                e = "",
                f = nt[b.tagName];
            null != f && (c = f[0], d = f[1], e = f[2]);
            var g = b.ownerDocument.createElement("div"),
                l = ab(d + (a || "") + e);
            void 0 !== g.tagName && bb(g);
            g.innerHTML = $a(l);
            for (var m = g; 0 < c;) {
                var n = m.firstChild;
                if (null == n.firstChild) return b.ownerDocument.createElement("div");
                m = n;
                c--
            }
            return m
        },
        lt = function(a, b) {
            for (var c = a.getElementsByTagName(b), d = [], e = c.length - 1; 0 <= e; e--) {
                var f = c[e];
                f.parentNode.removeChild(f);
                d.push(f)
            }
        },
        ot = function(a) {
            var b = null,
                c = null;
            try {
                b = new Function("element", a)
            } catch (d) {
                c = d
            }
            return {
                Ye: b,
                error: c
            }
        },
        st = function(a, b, c, d, e) {
            var f = a + "{" + (b + ": " + c + (d ? " !important" : "")) + "}";
            e && (f = e + "{" + f + "}");
            var g = document;
            if (g.createStyleSheet) {
                var l = pt(g),
                    m = l.rules.length;
                l.insertRule(f, m);
                return function() {
                    l.deleteRule ? l.deleteRule(m) : l.removeRule(m);
                    l.insertRule("x {}",
                        m)
                }
            }
            var n = qt(f, g);
            rt(n, g);
            var p = n.parentNode;
            return function() {
                p.removeChild(n)
            }
        },
        tt = null,
        pt = function(a) {
            if (tt) return tt;
            for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
                var c = a.styleSheets[b];
                if (!c.href) {
                    var d = c.ownerNode;
                    if (d && d.parentNode && "HEAD" == d.parentNode.tagName) return tt = c
                }
            }
            0 == a.styleSheets.length && a.createStyleSheet();
            return tt = a.styleSheets[0]
        },
        qt = function(a, b) {
            var c = (b || document).createElement("style");
            void 0 !== c.cssText ? c.cssText = a : c.innerHTML = a;
            return c
        },
        rt = function(a, b) {
            var c = b || document,
                d = c.getElementsByTagName("head")[0];
            d || (d = c.createElement("head"), c.body.parentNode.insertBefore(d, c.body));
            d.appendChild(a)
        },
        ut = function(a, b, c, d) {
            if (a.style.setProperty) try {
                var e = a.style.getPropertyValue(b),
                    f = a.style.getPropertyPriority(b);
                a.style.setProperty(b, c, d ? "important" : "");
                return function() {
                    a.style.setProperty(b, "", f);
                    a.style.setProperty(b, e, f)
                }
            } catch (l) {}
            var g = a.style.cssText;
            a.style.cssText += ";" + (b + ": " + c + (d ? " !important" : "")) + ";";
            return function() {
                a.style.cssText = g
            }
        },
        wt = function(a, b, c,
            d) {
            if (ht(a)) return 7;
            if (b) return vt(a, b, d);
            if (c && c.parentNode) {
                var e = a.parentNode,
                    f = a.nextSibling;
                try {
                    c.parentNode.insertBefore(a, c.nextSibling)
                } catch (g) {
                    return 9
                }
                return function() {
                    e.insertBefore(a, f)
                }
            }
            return 4
        },
        vt = function(a, b, c) {
            var d = a.parentNode,
                e = a.nextSibling;
            c = (c || "").toLowerCase();
            try {
                if ("bottom" == c) b.appendChild(a);
                else if ("top" == c) b.insertBefore(a, b.childNodes[0] || null);
                else if ("before" == c)
                    if (b.parentNode) b.parentNode.insertBefore(a, b);
                    else return 5;
                else if ("after" == c)
                    if (b.parentNode) b.parentNode.insertBefore(a,
                        b.nextSibling);
                    else return 5
            } catch (f) {
                return 9
            }
            return function() {
                try {
                    d.insertBefore(a, e)
                } catch (f) {}
            }
        },
        xt = function(a, b, c) {
            if (0 <= b && b < a.childNodes.length) {
                var d = a.childNodes[b];
                if (null != d && d.nodeType == Node.TEXT_NODE) {
                    var e = d.nodeValue;
                    d.nodeValue = c;
                    return function() {
                        d.nodeValue = e
                    }
                }
                return 2
            }
            return 3
        },
        yt = function(a, b, c, d) {
            c ? d = c.nextSibling : d && (c = d.previousSibling);
            if (null != c && c.nodeType == Node.TEXT_NODE) {
                var e = c.nodeValue;
                c.nodeValue += a;
                return function() {
                    c.nodeValue = e
                }
            }
            if (null != d && d.nodeType == Node.TEXT_NODE) {
                var f =
                    d.nodeValue;
                d.nodeValue = a + d.nodeValue;
                return function() {
                    d.nodeValue = f
                }
            }
            var g = (b.ownerDocument || b.document || document).createTextNode(a);
            d ? b.insertBefore(g, d) : b.appendChild(g);
            return function() {
                b.removeChild(g)
            }
        },
        zt = function(a) {
            var b = document.createElement("a");
            a && (b.href = a);
            return b
        };
    var Dt = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function Et(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var Ft = new ua;

    function Gt(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Ft.get(e);
            f || (f = new RegExp(b, d), Ft.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function Ht(a, b) {
        function c(g) {
            var l = De(g),
                m = Be(l, "protocol"),
                n = Be(l, "host", !0),
                p = Be(l, "port"),
                q = Be(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function It(a) {
        return Jt(a) ? 1 : 0
    }

    function Jt(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = N(a, {});
                N({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (It(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < Dt.length; g++) {
                            var l = Dt[g];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return Et(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return Gt(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return Ht(b, c)
        }
        return !1
    };
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);

    function au() {
        return E.gaGlobal = E.gaGlobal || {}
    }
    var bu = function() {
            var a = au();
            a.hid = a.hid || ta();
            return a.hid
        },
        cu = function(a, b) {
            var c = au();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var cv = window,
        dv = document,
        ev = function(a) {
            var b = cv._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === cv["ga-disable-" + a]) return !0;
            try {
                var c = cv.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Vf("AMP_TOKEN", String(dv.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return dv.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var fv = {};

    function nv(a) {
        k(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[S.g.Na] || {};
        k(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var xv = function(a, b) {};

    function wv(a, b) {
        var c = function() {};
        return c
    }

    function yv(a, b, c) {};
    var Dv = wv;
    var Fv = encodeURI,
        Y = encodeURIComponent,
        Gv = mb;
    var Hv = function(a, b) {
            if (!a) return !1;
            var c = Be(De(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        Iv = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Lv = function(a) {
            if (!Jv[a]) {
                Jv[a] = !0;
                var b = E[a] || {};
                E[a] = b;
                var c = function(e) {
                        return Kv[e]
                    },
                    d = b.get;
                b.get = d ? function(e) {
                    return void 0 !== Kv[e] ? Kv[e] : d(e)
                } : c
            }
        },
        Ov = function(a, b) {
            Kv[a] = b;
            for (var c = Mv(a), d = 0; d < c.length; d++) Nv(c[d], a, b);
            c = Mv("");
            for (var e = 0; e < c.length; e++) Nv(c[e], a, b)
        },
        Nv = function(a, b, c) {
            try {
                a(c, b, ug.J)
            } catch (d) {}
        },
        Mv = function(a) {
            Pv[a] = Pv[a] || [];
            return Pv[a]
        },
        Kv = {},
        Pv = {},
        Jv = {};
    var Qv = function() {
            E.gaData = E.gaData || {};
            return E.gaData
        },
        Rv = function(a, b) {
            b = void 0 === b ? !1 : b;
            E.gaData = E.gaData || {};
            var c = E.gaData,
                d = c.tracker_created;
            c.tracker_created = function(e) {
                b && a(e);
                d && pa(d) && d(e);
                b || a(e)
            }
        },
        Sv = function(a) {
            var b = E[Kn()];
            try {
                if (pa(b) && pa(b.getAll)) return b.getAll().filter(function(c) {
                    return c.get("trackingId") === a
                })
            } catch (c) {}
            return []
        },
        Yv = function(a, b) {
            var c = Tv[a];
            if (c) I(function() {
                return b(c)
            });
            else {
                var d = Sv(a)[0];
                d ? (Tv[a] = d, Uv || (Uv = d), I(function() {
                    return b(d)
                })) : (Vv[a] || (Vv[a] = []), Vv[a].push(b), Wv || (Wv = !0, Rv(function(e) {
                    var f = e.get("trackingId");
                    if (Vv[f]) {
                        if (Xv[f]) {
                            Xv[f] = !1;
                            var g = E[Kn()];
                            pa(g) && g("ga.require", "_" + ug.J)
                        }
                        Uv || (Uv = e);
                        Tv[f] = e;
                        for (var l = Vv[f], m; void 0 !== (m = l.shift());) m(e);
                        Vv[f] = void 0
                    }
                })))
            }
        },
        Zv = function(a, b, c, d) {
            var e = E[Kn()];
            if ("data" === b.hitType && c) {
                var f = E.gaData,
                    g = Number(f && f[d] && f[d].first_hit),
                    l = z();
                !isNaN(g) && l > g && (b.queueTime = Math.min(2E3, l + 100 - g))
            }
            try {
                var m = "t0" != a.get("name") ? a.get("name") + ".send" : "send";
                e(m, b)
            } catch (n) {}
        },
        Tv = {},
        Vv = {},
        Xv = {},
        Uv, Wv = !1,
        $v, aw = function(a, b, c) {
            Yv(a, function(d) {
                I(function() {
                    Zv(d, b, c, a)
                })
            })
        },
        bw = function() {
            var a = !1;
            Rv(function() {
                if (!a) {
                    var b = E[Kn()];
                    pa(b) && (b("ga.require", "__" + ug.J), a = !0)
                }
            }, !0)
        },
        cw = function(a, b, c) {
            var d = Qv(),
                e = d[a] = d[a] || {};
            (e.pending_experiments = e.pending_experiments || {})[b] = c;
            e.experiments = e.experiments || {};
            e.experiments[b] = c
        },
        dw = function(a) {
            var b = Qv()[a];
            return b ? b.hitcount || 0 : 0
        },
        gw = function(a, b, c, d, e, f) {
            Ov(b, c);
            var g = d;
            if (d) {
                var l = Ae(E.location, "host");
                Ae(De(d), "host") === l && (d = "")
            }
            Rv(function(q) {
                q.set("referrer",
                    d ? d : void 0)
            }, !0);
            if (ew(a)) Nd.ga4_referrer_override = g, fw(a, b, c, e, f);
            else {
                cw(a, b, c);
                for (var m = Sv(a), n = 0; n < m.length; ++n) m[n].set("referrer", d ? d : void 0);
                if (0 < dw(a)) {
                    var p = m[0];
                    p && Zv(p, {
                        hitType: "data"
                    }, !0, a)
                }
            }
        },
        ew = function(a) {
            return !!a && "G-" === a.substring(0, 2)
        },
        hw = function(a, b, c, d, e) {
            Tc[29] || Xm(a, c[S.g.ba] || jr(), {
                source: 3,
                fromContainerExecution: !0
            });
            var f = Zn(a, b, c);
            bo(f, d, {
                originatingEntity: e,
                deferrable: !0
            })
        },
        fw = function(a, b, c, d, e) {
            ew(a) ? hw(a, "experiment_impression", {
                    experiment_id: b,
                    variant_id: c
                }, d, e) :
                (cw(a, b, c), 0 < dw(a) && aw(a, {
                    hitType: "data"
                }, !0))
        };
    var lw = function(a, b, c) {
            function d() {
                f || (f = !0, !0 !== iw && (iw = !1), jw(c), Er(e))
            }
            Xr = a;
            var e = "GTM-P3B33MM_" + b,
                f = !1;
            Fr(e);
            E.google_optimize = E.google_optimize || {};
            var g = E.google_optimize;
            g["GTM-P3B33MM"] = g["GTM-P3B33MM"] || {};
            g["GTM-P3B33MM"].optimize_dyn = function(m) {
                m.split(",").forEach(function(n) {
                    kw[n] = !0
                });
                iw = !0;
                d()
            };
            jb(a, void 0, d);
            var l = E[Ld.da];
            E.setTimeout(function() {
                d()
            }, Number(l && l.hide && l.hide.timeout) || 1E4)
        },
        jw = function(a) {
            if (void 0 !== mw) {
                var b = mw - nw,
                    c, d;
                iw ? c = z() - mw : d = z() - mw;
                Yr({
                    Uj: b,
                    oj: c,
                    mj: d
                })
            }
            kw.optimize_ready = !0;
            hs({
                event: "opt.dyn"
            });
            hs({
                event: "opt.js"
            });
            if (a && 0 < a.length) {
                var e = {};
                E[Ld.da].forEach(function(f) {
                    var g = f.event;
                    g && (e[g] = !0)
                });
                a.forEach(function(f) {
                    e[f] && hs({
                        event: f
                    })
                })
            }
            I(function() {
                Ln("_" + ug.J)
            })
        },
        ow = function(a, b, c, d, e, f, g, l, m) {
            function n(w, y) {
                y && (u += "&" + w + "=" + encodeURIComponent(y))
            }
            nw = z();
            if (a || b || c) {
                var p = void 0;
                if (b) {
                    var q = Bi().aw;
                    q && (p = q[0])
                }
                if (f && (a || c || p)) {
                    var t = 1,
                        u, r = "GTM-P3B33MM_" + t++;
                    Fr(r);
                    var v = function(w) {
                        $v = w;
                        mw = z();
                        a || b ? (u = "https://www.google-analytics.com/gtm/optimize-dyn.js?id=GTM-P3B33MM", a && n("cid", w), n("gclid",
                            p), g && (n("gtm_auth", ""), n("gtm_preview", "")), (g || a) && n("cb", String(Math.random())), lw(u, t++, e)) : jw(e);
                        Er(r)
                    };
                    ew(d) ? (Tc[29] || Xm(d, jr(), {
                        source: 4,
                        fromContainerExecution: !0
                    }), bo(Xn("get", d, "client_id", v), l, {
                        originatingEntity: m,
                        deferrable: !0
                    })) : (Xv[d] = !0, Yv(d, function(w) {
                        return v(w.get("clientId"))
                    }))
                } else jw(e)
            }
        },
        kw = {},
        nw, mw, iw, Xr;
    var pw = function(a, b) {
        this.Yd = a;
        this.dd = b
    };
    pw.prototype.toString = function() {
        var a = "" + this.Yd;
        1 < this.dd && (a = a + "-" + this.dd);
        return a
    };
    var qw = function(a, b) {
        this.m = a;
        this.h = b
    };
    qw.prototype.toString = function() {
        return this.h + "." + this.m
    };
    var rw = function() {
            var a = fe("optimize.cookie_path", 2);
            return h(a) ? a : "/"
        },
        tw = function(a, b) {
            var c = new sw(a, b);
            c.vj();
            return c
        },
        sw = function(a, b) {
            this.F = Math.floor(new Date / 864E5);
            this.B = a || "auto";
            this.h = b || rw();
            this.m = new pw(og(this.B), pg(this.h));
            this.H = [];
            this.map = {}
        };
    aa = sw.prototype;
    aa.Yi = function(a) {
        if (!a) return "";
        var b = this.Ze(a);
        return b ? b.m : ""
    };
    aa.Mj = function(a, b, c, d, e) {
        var f, g;
        f = void 0 === f ? 10 : f;
        g = void 0 === g ? 3E3 : g;
        if (!a) return !1;
        void 0 == b && (b = "");
        this.me(a, new qw(b, c));
        this.Ei(e);
        return this.ni(d,
            f, g)
    };
    aa.Ze = function(a) {
        return this.map[a]
    };
    aa.Wi = function() {
        for (var a = 0, b = 0; b < this.H.length; b++) "x" !== this.Ze(this.H[b]).m[0] && a++;
        return a
    };
    aa.me = function(a, b) {
        a && ("" === b.m ? this.rh(a) : (this.map[a] || this.H.push(a), this.map[a] = b))
    };
    aa.Qj = function(a) {
        for (var b = 0; b < a.length; b++) this.me(a[b][0], a[b][1])
    };
    aa.rh = function(a) {
        var b = this.H.indexOf(a);
        0 <= b && this.H.splice(b, 1);
        delete this.map[a]
    };
    aa.Ej = function() {
        for (var a = [], b = 0; b < this.H.length; b++) {
            var c = this.H[b];
            this.map[c].h < this.F && a.push(c)
        }
        for (var d =
                0; d < a.length; d++) this.rh(a[d])
    };
    aa.Vi = function() {
        for (var a = [], b = 0; b < this.H.length; b++) {
            var c = this.H[b];
            a.push([c, this.map[c]])
        }
        return a
    };
    aa.Pi = function() {
        for (var a = 0, b = 0; b < this.H.length; b++) a = Math.max(a, this.map[this.H[b]].h);
        return 864E5 * a
    };
    aa.toString = function() {
        if (0 == this.H.length) return "";
        for (var a = [], b = 0; b < this.H.length; b++) {
            var c = this.H[b];
            a.push(c + "." + this.map[c].toString())
        }
        return "GAX1." + this.m.toString() + "." + a.join("!")
    };
    aa.ni = function(a, b, c) {
        var d = new Date;
        this.Ej();
        var e = this.Wi();
        if (e >
            b || e > (a || 10) && $f().replace(RegExp("(?:;\\s*)?(_gaexp=[^;]+)(?:;\\s*)?"), this.toString()).length > c) return !1;
        d.setTime(this.Pi());
        if ("auto" != this.B) return this.m = new pw(og(this.B), pg(this.h)), 0 === jg("_gaexp", this.toString(), {
            path: this.h,
            domain: this.B,
            expires: d
        });
        for (var f = gg(), g = 0; g < f.length; g++)
            if (this.m = new pw(og(f[g]), pg(this.h)), 0 === jg("_gaexp", this.toString(), {
                    path: this.h,
                    domain: f[g],
                    expires: d
                })) return !0;
        return !1
    };
    aa.vj = function() {
        var a = dg("_gaexp", this.m.Yd, this.m.dd);
        if (a) {
            var b = this.wj(a);
            b &&
                this.Qj(b.Vi())
        }
    };
    aa.wj = function(a) {
        for (var b = new sw(this.B, this.h), c = a.split("!"), d = 0; d < c.length; d++) {
            var e = c[d].split(".");
            if (3 == e.length) {
                if (isNaN(Number(e[1]))) return;
                b.me(e[0], new qw(e[2], Number(e[1])))
            }
        }
        return b
    };
    aa.Ei = function(a) {
        a = a || {};
        var b = 0;
        a.hasOwnProperty("") && !isNaN(Number(a[""])) && (b = this.F - ya(a[""]));
        for (var c = 0; c < this.H.length; c++) {
            var d = this.H[c];
            if (a.hasOwnProperty(d) && !isNaN(Number(a[d]))) {
                var e = this.Ze(d);
                e.h = ya(a[d]) + b;
                this.me(d, e)
            }
        }
    };
    var yw = function() {
            uw = z();
            var a = vw;
            vw = [];
            for (var b = 0; b < a.length; b++) a[b]();
            ww && (ww.takeRecords(), vw.length || (ww && (ww.disconnect(), ww = null), xw && (E.clearTimeout(xw), xw = null)))
        },
        Aw = function() {
            var a = z() - uw;
            a >= zw ? (xw && (E.clearTimeout(xw), xw = null), yw()) : xw || (xw = E.setTimeout(function() {
                yw();
                xw = null
            }, zw - a))
        },
        Bw = function(a) {
            if (!E.MutationObserver) return !1;
            try {
                return ww || (ww = new MutationObserver(Aw), ww.observe(G.documentElement, {
                    subtree: !0,
                    childList: !0,
                    attributes: !0,
                    characterData: !0
                }), uw = z()), vw.push(a), !0
            } catch (b) {
                return !1
            }
        },
        ww = null,
        vw = [],
        zw = 0,
        uw = 0,
        xw = null;
    var Kw = function(a, b) {
            b && Bw(a) || E.setTimeout(a, 80)
        },
        Ow = function(a) {
            try {
                return Pc(a)
            } catch (b) {
                return null
            }
        },
        Pw = function(a) {
            if (mn) return !0;
            for (; a;) {
                if (a.nextSibling) return !0;
                a = a.parentNode
            }
            return !1
        },
        Qw = function(a, b) {
            for (var c = Ow(a.la) || [], d = [], e = 0; e < c.length; e++) {
                var f = c[e];
                if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
                    if (a.Ia && !Pw(f)) break;
                    d.push(f)
                }
            }
            return d
        },
        Rw = function(a, b) {
            return function() {
                a.gtmProgressiveApplied && delete a.gtmProgressiveApplied[b]
            }
        },
        Sw = function(a, b) {
            a.gtmProgressiveApplied ||
                (a.gtmProgressiveApplied = {});
            a.gtmProgressiveApplied[b] = !0
        },
        Tw = function(a, b, c) {
            var d;
            var e = [];
            if (b.Pa)
                if (b.Pa.Ue) d = [{
                    element: G.head
                }];
                else {
                    var f = Qw(b.Pa, b.id),
                        g = null;
                    b.ne && (g = Qw(b.ne, b.id + "-t"));
                    for (var l = 0; l < f.length; l++) {
                        var m = f[l],
                            n = void 0;
                        if (null != g && (n = g.length > l ? g[l] : null, !n && !mn && (null === b.ne.ia || b.Sg + e.length < b.ne.ia))) break;
                        e.push({
                            element: m,
                            targetElement: n
                        })
                    }
                    d = e
                }
            else d = e;
            var p = d;
            if (!mn && b.Bi && (!a || null == b.Pa.ia || b.Pa.ia != b.Vd + p.length)) return !1;
            for (var q = 0; q < p.length; q++) {
                var t = p[q].element,
                    u = p[q].targetElement,
                    r = void 0;
                b.Vd++;
                Sw(t, b.id);
                u && (b.Sg++, r = b.id + "-t", Sw(u, r));
                var v = b.Fi(t, u);
                pa(v) && b.fc.push(v);
                b.fc.push(Rw(t, b.id));
                u && r && b.fc.push(Rw(u, r))
            }
            if (b.Pa.ia && b.Pa.ia == b.Vd || mn && (!c || b.Vd)) b.finished = !0;
            return !0
        },
        Uw = function(a) {
            for (var b = {}, c = 0; c < a.Oa.length; c++) {
                var d = a.Oa[c];
                if (!d.Pa.Ue) {
                    var e = b[d.Pa.la];
                    e || (e = b[d.Pa.la] = Ow(d.Pa.la) || []);
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        g.gtmProgressiveApplied && g.gtmProgressiveApplied[d.id] || (Sw(g, d.id), d.fc.push(Rw(g, d.id)))
                    }
                }
            }
        },
        Vw = function(a) {
            if (!a.uf) {
                for (var b =
                        a.Wc; b < a.Oa.length; b++) {
                    var c = a.Oa[b],
                        d = b == a.Wc;
                    if (!c.finished && !Tw(d, c, a.Ch && a.zh)) break;
                    c.finished && d && a.Wc++
                }
                a.Oa.length > a.Wc ? (!a.pending && a.Ch && (a.pending = !0, Kw(function() {
                    a.pending = !1;
                    Vw(a)
                }, a.zh)), mn || a.pf || (a.pf = function() {
                    I(function() {
                        Vw(a)
                    })
                }, nb(G, "DOMContentLoaded", a.pf))) : Uw(a)
            }
        },
        Ww = {},
        Xw = {},
        Yw = void 0,
        Zw = function(a, b, c, d) {
            var e = Yw;
            if (!Oc || !e) return !1;
            var f = {
                id: e.id + ":" + e.Oa.length,
                Fi: b,
                fc: [],
                Bi: c,
                Pa: a,
                Vd: 0,
                ne: d || null,
                Sg: 0,
                finished: !1
            };
            e.Oa.push(f);
            null === a ? (f.finished = !0, b(null)) : Vw(e);
            return !0
        },
        $w = function(a) {
            var b = oa;
            try {
                b = st(a, "visibility", "hidden", !0)
            } catch (c) {}
            return function() {
                pa(b) && b.apply();
                b = null
            }
        },
        ax = function(a, b, c, d) {
            var e = b;
            if (!mn && !a.Ue) {
                var f = $w(a.la);
                on.push(f);
                e = function(g, l) {
                    var m = b(g, l);
                    f();
                    return m
                }
            }
            return Zw(a, e, c, d)
        };
    var Z = {
        o: {}
    };
    Z.o.dee = ["google"],
        function() {
            (function(a) {
                Z.__dee = a;
                Z.__dee.s = "dee";
                Z.__dee.isVendorTemplate = !0;
                Z.__dee.priorityOverride = 0;
                Z.__dee.isInfrastructure = !1
            })(function() {
                var a = !1;
                return a ? "gtm.sync" : "gtm.js"
            })
        }();
    Z.o.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.s = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !1
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();

    Z.o.asprv = ["google"],
        function() {
            function a() {
                Zs({
                    event: "optimize.domChange"
                });
                Bw(a)
            }(function(b) {
                Z.__asprv = b;
                Z.__asprv.s = "asprv";
                Z.__asprv.isVendorTemplate = !0;
                Z.__asprv.priorityOverride = 0;
                Z.__asprv.isInfrastructure = !1
            })(function(b) {
                var c = b.vtp_globalName,
                    d = !!b.vtp_listenForMutations,
                    e = Ys("eventModel");
                c && Lv(c);
                d && a();
                var f, g, l;
                e && (f = e.name || "", g = e.callback, l = e.remove);
                if (g && pa(g))
                    if (f = String(f), !0 !== l) {
                        var m = f,
                            n = g;
                        Mv(m).push(n);
                        if ("" !== m) void 0 !== Kv[m] && Nv(n, m, Kv[m]);
                        else
                            for (var p in Kv) void 0 !==
                                Kv[p] && Nv(n, p, Kv[p])
                    } else {
                        var q = g,
                            t = Mv(f),
                            u = t.indexOf(q);
                        0 <= u && t.splice(u, 1)
                    }
                b.vtp_gtmOnSuccess()
            })
        }();


















    var cx = {};
    cx.dataLayer = ge;
    cx.callback = function(a) {
        Yd.hasOwnProperty(a) && pa(Yd[a]) && Yd[a]();
        delete Yd[a]
    };
    cx.bootstrap = 0;
    cx._spx = !1;

    function dx() {
        Nd[ug.J] = cx;
        ug.mc && (Nd["ctid_" + ug.mc] = cx);
        Jg();
        Lg() || k(Mg(), function(a, b) {
            Xm(a, b.transportUrl, b.context);
            Q(92)
        });
        Ga(Zd, Z.o);
        hc = pc
    }
    (function(a) {
        if (!E["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (G.referrer) {
                var c = De(G.referrer);
                b = "cct.google" === Ae(c, "host")
            }
            if (!b) {
                var d = ag("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (E["__TAGGY_INSTALLED"] = !0, jb("https://cct.google/taggy/agent.js"))
        }
        var e = !0;
        if (e) {
            a();
            return
        }
        var f = function(q) {
                var t = "GTM",
                    u = "GTM";
                u = t = "OPT";
                var r = E["google.tagmanager.debugui2.queue"];
                r || (r = [], E["google.tagmanager.debugui2.queue"] = r, jb("https://" + Ld.nc + "/debug/bootstrap?id=" + ug.J + "&src=" + u + "&cond=" + q + "&gtm=" + Qg()));
                var v = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: db,
                        containerProduct: t,
                        debug: !1,
                        id: ug.J,
                        isGte: Vd
                    }
                };
                v.data.resume = function() {
                    a()
                };
                Ld.Gh && (v.data.initialPublish = !0);
                r.push(v)
            },
            g = void 0,
            l = Be(E.location, "query", !1, void 0, "gtm_debug");
        rs(l) && (g = 2);
        if (!g && G.referrer) {
            var m = De(G.referrer);
            "tagassistant.google.com" === Ae(m, "host") && (g = 3)
        }
        if (!g) {
            var n = ag("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = G.documentElement.getAttribute("data-tag-assistant-present");
            rs(p) && (g = 5)
        }
        g && db ? f(g) : a()
    })(function() {
        var a = !1;
        a && Cn("INIT");
        rf().m();
        th();
        mi.enable_gbraid_cookie_write = !0;
        var b = !!Nd[ug.J];
        !b && ug.mc && (b = !!Nd["ctid_" + ug.mc]);
        if (b) {
            var c = Nd.zones;
            c && c.unregisterChild(Fg());
        } else {
            for (var d =
                    data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) Xb.push(e[f]);
            for (var g = d.tags || [], l = 0; l < g.length; l++) $b.push(g[l]);
            for (var m = d.predicates || [], n = 0; n < m.length; n++) Zb.push(m[n]);
            for (var p = d.rules || [], q = 0; q < p.length; q++) {
                for (var t = p[q], u = {}, r = 0; r < t.length; r++) u[t[r][0]] = Array.prototype.slice.call(t[r], 1);
                Yb.push(u)
            }
            bc = Z;
            cc = It;
            dx();
            qs();
            mn = !1;
            nn = 0;
            if ("interactive" == G.readyState && !G.createEventObject || "complete" == G.readyState) pn();
            else {
                nb(G, "DOMContentLoaded", pn);
                nb(G, "readystatechange", pn);
                if (G.createEventObject &&
                    G.documentElement.doScroll) {
                    var v = !0;
                    try {
                        v = !E.frameElement
                    } catch (A) {}
                    v && qn()
                }
                nb(E, "load", pn)
            }
            Gr = !1;
            "complete" === G.readyState ? Ir() : nb(E, "load", Ir);
            il();
            hs({
                event: "gtm.js"
            });
            Xd = z();
            cx.bootstrap = Xd;
            if (a) {
                var B = Dn("INIT");
            }
        }
    });


})()
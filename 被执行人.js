navigator = {
    appCodeName: "Mozilla",
    appMinorVersion: "0",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko",
    browserLanguage: "zh-CN",
    cookieEnabled: true,
    cpuClass: "x86",
    language: "zh-CN",
    maxTouchPoints: 0,
    msManipulationViewsEnabled: true,
    msMaxTouchPoints: 0,
    msPointerEnabled: true,
    onLine: true,
    platform: "Win32",
    pointerEnabled: true,
    product: "Gecko",
    systemLanguage: "zh-CN",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko",
    userLanguage: "zh-CN",
    vendor: "",
    vendorSub: "",
    webdriver: false
}, window = {}, window.navigator = navigator, document = {referrer: "", cookie: ""}, location = {
    hash: "",
    host: "zhixing.court.gov.cn",
    hostname: "zhixing.court.gov.cn",
    href: "http://zhixing.court.gov.cn/search/",
    origin: "http://zhixing.court.gov.cn",
    pathname: "/search/",
    port: "",
    protocol: "http:",
};
var Gridsum;
(function (a) {
    function d(a) {
        return "string" == typeof a
    }

    var b = document
        , l = Math;
    a.b = {
        lower: function (a) {
            return a && d(a) ? a.toLowerCase() : a
        },
        indexOf: function (a, b, k) {
            if (a) {
                if (a.indexOf)
                    return a.indexOf(b, k);
                if (a.length)
                    for (k = k || 0; k < a.length; k++)
                        if (a[k] === b)
                            return k
            }
            return -1
        },
        T: function (p, b) {
            var k = 1315423911, f, m;
            b || (p = a.b.lower(p));
            for (f = p.length - 1; 0 <= f; f--)
                m = p.charCodeAt(f),
                    k ^= (k << 5) + m + (k >> 2);
            return k & 2147483647
        },
        za: function () {
            return l.round((new Date).getTimezoneOffset() / -60) + ""
        },
        aa: function (a) {
            var b, k = [];
            for (b = 0; b < a; b++)
                k.push("abcdefghijklmnopqrstuvwxyz0123456789".charAt(l.round(35 * l.random())));
            return k.join("")
        },
        l: function () {
            var b = (new Date).getTime() + ""
                , d = "" + l.abs(a.b.T(location.href + document.referrer + navigator.userAgent))
                , d = d.substring(0, 2 < d.length ? 2 : d.length);
            return b.substring(2, b.length - 3) + a.b.aa(6) + d
        },
        O: function (p, d, k) {
            if (!p)
                return null;
            var f, m = a.b.qa(b.cookie, "=", ";", !0);
            p = a.b.lower(p);
            for (f in m)
                if (m && m.hasOwnProperty && m.hasOwnProperty(f) && a.b.lower(f) === p)
                    return k ? m[f] : a.b.decode(m[f]);
            return d || null
        },
        P: function (p, d, k, f, m, l, n) {
            p && (p = a.b.lower(p),
            n || (d = a.b.encode(d)),
                p = p + "=" + d + ";",
                d = k ? "expires=" + a.b.kb(k).toUTCString() + ";" : "",
                b.cookie = p + d + (f ? "path=" + f + ";" : "path=/;") + (m ? "domain=" + m + ";" : "") + (l ? "secure=true;" : ""))
        },
        cb: function (b, d, k) {
            a.b.P(b, "", -1E3, d, k)
        },
        kb: function (a) {
            return new Date((new Date).getTime() + 1E3 * a)
        },
        trim: function (a) {
            return a && d(a) ? a.replace(/(^\s+)|(\s+$)/ig, "") : a
        },
        qa: function (b, d, k, f) {
            var m = {};
            d = d || "=";
            b = b.split(k || "&");
            var l = f ? a.b.trim : function (a) {
                    return a
                }
            ;
            for (f = 0; f < b.length; f++)
                k = b[f].indexOf(d),
                    -1 < k ? m[l(b[f].substring(0, k))] = l(b[f].substring(k + 1)) : m[b[f]] = null;
            return m
        },
        encode: function (a) {
            return a && d(a) ? (encodeURIComponent || escape)(a) : a
        },
        decode: function (a) {
            if (a && d(a)) {
                a = a.replace(/\+/ig, "%20");
                try {
                    return (decodeURIComponent || unescape)(a)
                } catch (b) {
                }
            }
            return a
        },
        rc: function () {
            a.b.P("gs_tc", "1");
            var b = a.b.O("gs_tc");
            a.b.cb("gs_tc");
            return !!b
        },
        mb: function (b) {
            var d = "cn hk tw au uk us \u516c\u53f8 \u4e2d\u56fd \u7f51\u7edc".split(" ")
                , k = "com edu net org gov int cc me tel mobi asia biz info name tv".split(" ")
                , f = b.split(".")
                , m = f.length;
            return 3 <= m ? -1 < a.b.indexOf(d, f[m - 1]) && -1 < a.b.indexOf(k, f[m - 2]) ? f[m - 3] + "." + f[m - 2] + "." + f[m - 1] : f[m - 2] + "." + f[m - 1] : b
        },
        Dc: function (b) {
            for (var d in b)
                a.b[d] = b[d]
        }
    }
})(Gridsum || (Gridsum = {}));
(function (a) {
    var d = window, b = document, l = b.documentElement, p = location, u = navigator.userAgent.toLowerCase(), k = Math,
        f, m, t, n, w, z, q, v = {
            ya: ["diag-wd.gridsumdissector.com/receivewddiag/gs.gif"],
            u: void 0,
            Kb: function (a) {
                return a
            },
            isArray: function (a) {
                return a && a.constructor == Array
            },
            sb: function (a, C) {
                return a && a.hasOwnProperty ? a.hasOwnProperty(C) : !1
            },
            ub: function (a) {
                return "string" == typeof a
            },
            D: function (a, C, g, c) {
                if (!C)
                    return null;
                a = (a || p.pathname + p.search).replace(/\#.*/ig, "");
                for (var b = ["&", "?"], f = 0; 2 > f; f++) {
                    var d = v.find(a, b[f] + C + "=", "&", g);
                    if (null != d)
                        return c ? n(d) : d
                }
                return null
            },
            find: function (a, b, g, c, f) {
                a = v.gb(a, b, g, c, f);
                b = a.length;
                return 0 < b ? a[b - 1] : null
            },
            gb: function (B, b, g, c, d) {
                if (!B || !q(B))
                    return [];
                var k = [], l, n, t = "";
                n = 0;
                b = b || "";
                c || (t = f(B),
                    b = f(b),
                    g = f(g));
                for (; -1 < n;) {
                    c = null;
                    -1 < (l = m(t, b, n)) && (c = l + b.length,
                        g ? (n = m(t, g, c),
                            n >= c ? (c = B.substring(c, n),
                                n += g.length) : (c = B.substring(c),
                                n = -1)) : (c = B.substring(c),
                            n = -1));
                    if (!c)
                        break;
                    k.push(d ? c : a.b.trim(c))
                }
                return k
            },
            $: function () {
                return (new Date).getTime() + 36E5 * Number(a.b.za())
            },
            uc: function (a, b, g) {
                g = f(g || p.pathname);
                b = f(b);
                w(a) || (a = [a]);
                for (var c = 0; c < a.length; c++) {
                    var d = f(a[c]);
                    if ("contains" == b && -1 < m(g, d) || "startswith" == b && 0 == m(g, d) || "endswith" == b && -1 < m(g, d, g.length - d.length) || "exactmatch" == b && g == d || "regex" == b && d.test && d.test(g))
                        return !0
                }
                return !1
            },
            ea: function (b) {
                for (; b && " " == b[0];)
                    b = b.substr(1);
                var f, g = {
                    url: b
                };
                (f = b.match(/((\w+:)?\/\/([^\/\#&?]*))?\/?([^?#]*)?(\?[^#]*)?(#.*)?/)) ? (b = f[2] || p.protocol,
                    g.protocol = b.substring(0, b.length - 1),
                    g.local = "file" == g.protocol,
                    g.host = f[3] || p.host,
                    g.path = "/" + (f[4] || ""),
                    g.fullPath = g.path,
                    g.s = (f[5] || "").substring(1),
                    g.anchor = (f[6] || "").substring(1),
                g.s && (g.fullPath += "?" + g.s,
                    g.i = a.b.qa(g.s.replace(/\?/g, "&")))) : (g.local = !0,
                    g.protocol = "file",
                    g.fullPath = g.path = "/" + b.replace(/\\/g, "/"));
                return g
            },
            B: function (a, b, g, c, f) {
                function d(c) {
                    if (!c)
                        return "";
                    var a = [], b;
                    for (b in c)
                        z(c, b) && (c[b] || 0 === c[b]) && a.push(b + ":" + t(c[b]));
                    return a.join(";")
                }

                var k = [];
                f = f ? v.Kb : t;
                var m, l = "gsurl gsorurl gsref gsmcurl lk url gssresurl gssref gsourl".split(" ");
                b = b || "=";
                g = g || "&";
                for (m in a) {
                    var n = !1, p;
                    for (p in l)
                        if (l[p] == m) {
                            n = !0;
                            break
                        }
                    !n && z(a, m) && (c || a[m] || 0 === a[m]) && k.push(m + b + ("pcp" == m || "ecp" == m ? d(a[m]) : f(a[m])))
                }
                for (m = 0; m < l.length; m++)
                    z(a, l[m]) && (c || a[l[m]] || 0 === a[l[m]]) && k.push(l[m] + b + f(a[l[m]]));
                return k.join(g)
            },
            J: function (a) {
                return q(a) ? b.getElementById(a) : a
            },
            Ra: function (a, b, g, c, f) {
                c = c || 30;
                var m = setInterval(function () {
                    var g;
                    if (a.split) {
                        var k = a.split(".", 3)
                            , l = k.length
                            , n = d;
                        if (1 < l) {
                            for (g = 0; g < l; g++)
                                if (!g || "window" != k[g])
                                    if (n = n[k[g]],
                                        !n)
                                        break;
                            g = n
                        }
                    }
                    g || (g = v.J(a)) ? (clearInterval(m),
                        b(g)) : 0 < c ? --c : (clearInterval(m),
                    f && f(g))
                }, g || 1E3)
            },
            C: function (a) {
                var f, g, c = null;
                g = [];
                f = b.body;
                var d;
                if (null === a.parentNode || "none" == a.style.display)
                    return null;
                if (a.getBoundingClientRect)
                    return g = a.getBoundingClientRect(),
                        a = k.max(l.scrollTop, f.scrollTop),
                        f = k.max(l.scrollLeft, f.scrollLeft),
                        "BackCompat" == b.compatMode && v.Da() ? d = {
                            x: g.left,
                            y: g.top
                        } : d = {
                            x: g.left + f,
                            y: g.top + a
                        },
                        d;
                if (b.getBoxObjectFor)
                    g = b.getBoxObjectFor(a),
                        g = [g.x - (a.style.borderLeftWidth ? parseInt(a.style.borderLeftWidth, 10) : 0), g.y - (a.style.borderTopWidth ? parseInt(a.style.borderTopWidth, 10) : 0)];
                else {
                    g = [a.offsetLeft, a.offsetTop];
                    c = a.offsetParent;
                    if (c != a)
                        for (; c;)
                            g[0] += c.offsetLeft,
                                g[1] += c.offsetTop,
                                c = c.offsetParent;
                    if (-1 != m(u, "opera") || -1 != m(u, "safari") && "absolute" == a.style.position)
                        g[0] -= f.offsetLeft,
                            g[1] -= f.offsetTop
                }
                for (a.parentNode ? c = a.parentNode : c = null; c && "BODY" != c.tagName && "HTML" != c.tagName;)
                    g[0] -= c.scrollLeft,
                        g[1] -= c.scrollTop,
                        c.parentNode ? c = c.parentNode : c = null;
                return d = {
                    x: g[0],
                    y: g[1]
                }
            },
            jb: function () {
                return l && l.scrollWidth || b.body && b.body.scrollWidth || 0
            },
            lb: function (a) {
                var f = b.body || {
                    scrollLeft: 0,
                    scrollTop: 0
                };
                return {
                    x: a.pageX || a.clientX + (l.scrollLeft || f.scrollLeft) - (l.clientLeft || 0),
                    y: a.pageY || a.clientY + (l.scrollTop || f.scrollTop) - (l.clientTop || 0)
                }
            },
            observe: function (a, b, g) {
                function c(c) {
                    c.target || (c.target = c.srcElement || a);
                    if (!c.pageX) {
                        var b = v.lb(c);
                        c.pageX = b.x;
                        c.pageY = b.y
                    }
                    c.root = a;
                    g.call(a, c)
                }

                "beforeunload" == b && v.rb() && (b = "pagehide");
                a = v.J(a);
                if (!a)
                    return null;
                a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c);
                return a
            },
            Ia: function (a, b) {
                function g(c) {
                    f = c.pageX;
                    d = c.pageY
                }

                function c(c) {
                    c.target || (c.target = c.srcElement || a);
                    try {
                        if (c.changedTouches[0].pageX != f || c.changedTouches[0].pageY != d) {
                            d = f = null;
                            return
                        }
                    } catch (g) {
                        v.f("", "M_utility_observeTouch", g);
                        d = f = null;
                        return
                    }
                    v.u = {
                        ra: f,
                        sa: d
                    };
                    d = f = null;
                    c.root = a;
                    b.call(a, c)
                }

                var f, d;
                a = v.J(a);
                if (!a)
                    return null;
                a.addEventListener ? (a.addEventListener("touchstart", g, !1),
                    a.addEventListener("touchend", c, !1)) : (a.attachEvent("ontouchstart", g),
                    a.attachEvent("ontouchend", c));
                return a
            },
            ia: function (b) {
                return (b = v.J(b)) && b.innerHTML ? a.b.trim(b.innerHTML.replace(/<[^>]+>/ig, "")) : null
            },
            Z: function (a, b) {
                a = v.J(a);
                var f = "";
                if (a && a.innerHTML)
                    for (var c = a.innerHTML, d = c.indexOf(b + '="'); -1 != d;)
                         var d = d + (b.length + 2)
                             , m = c.indexOf('"', d)
                             , f = f + c.substr(d, m - d)
                             , c = c.substr(m)
                             , d = c.indexOf(b + '="');
                return f
            },
            A: function (a, b, g, c, d) {
                var k;
                g = f(g);
                a = a && a.parentNode;
                var l = void 0 === b.target || q(b.target) ? b : b.target;
                do {
                    b = !0;
                    if (!g || f(l.tagName) == g)
                        for (k in b = !1,
                            c)
                            if (z(c, k) && 0 > m(f(l[k] || l.getAttribute(k)), f(c[k]))) {
                                b = !0;
                                break
                            }
                    if (b)
                        l = l.parentNode;
                    else
                        return l;
                    if (0 == d)
                        break;
                    d--
                } while (l && l != a && l.getAttribute);
                return null
            },
            f: function (b, f, g) {
                try {
                    g = g || {};
                    for (var c = 0; c < v.ya.length; c++) {
                        var d = ("https:" == p.protocol ? "https://" : "http://") + v.ya[c] + "?gscmd=err&gsrd=" + k.round(2147483647 * k.random()) + "&gsver=" + a.h.version + "&gserrc=" + f + "&gssrvid=" + b + "&gserrobj=" + v.B(g, "~", "'");
                        (new Image(1, 1)).src = d
                    }
                } catch (m) {
                }
            },
            hb: function (b, f) {
                var g, c, d, m = f.ua, k = f.Fa, l = f.Pa, t = f.Ha, p = f.wa, w = f.Ba, u = f.va, z = f.Ua, q = f.v;
                c = v.ea(b);
                !c.local && (c = new a.Mb(c.host, [], [m, k, l, t, p, w, u, z]),
                    g = {
                        X: q.X,
                        group: q.group,
                        source: q.source,
                        da: q.da,
                        ca: q.ca,
                        content: q.content,
                        channel: q.channel,
                        W: q.W
                    },
                    c = c.match(b.replace(/#/g, "?"))) && (d = c.i,
                0 !== c.Hc && (g.X = q.X || (m != f.Xa ? n(d[m]) : null),
                    g.group = q.group || (w != f.ob ? n(d[w]) : null),
                    g.source = q.source || (l != f.Hb ? n(d[l]) : null),
                    g.da = q.da || (t != f.yb ? n(d[t]) : null),
                    g.ca = q.ca || (k != f.vb ? n(d[k]) : null),
                    g.content = q.content || (p != f.bb ? n(d[p]) : null),
                    g.channel = q.channel || (u != f.Ya ? n(d[u]) : null),
                    g.W = q.W || (z != f.Va ? n(d[z]) : null)));
                return g
            },
            Da: function () {
                return "\v" == "v"
            },
            rb: function () {
                var a = navigator.userAgent;
                return 0 <= a.indexOf("Android") || 0 <= a.indexOf("iPhone") || 0 <= a.indexOf("iPad")
            },
            hd: function () {
                var a = navigator.userAgent;
                return 0 <= a.indexOf("iPhone") || 0 <= a.indexOf("iPad")
            },
            o: function (b, d) {
                return f(t(b + "_" + a.b.T(d.c + "_" + d.domain)))
            },
            gc: function () {
                function a(c, b) {
                    var f = b.match(c);
                    return f ? f[1] : null
                }

                var b, d, c = navigator.plugins, k, l, n = null, t = null;
                if (c && 0 < (k = c.length))
                    for (d = 0; d < k; d++)
                        b = f(c[d].description),
                            l = f(c[d].name),
                        !n && b && -1 < m(b, "shockwave flash") && (n = a(/shockwave flash (\d+\.\d+)/i, b)),
                        !t && l && b && -1 < m(l, "silverlight") && (t = a(/(\d+\.\d+)/i, b));
                return {
                    ec: n,
                    Qc: t
                }
            },
            sc: function () {
                var f = a.b.D(p.href, "_gscu_");
                if (null != f && 32 === f.length)
                    return !0;
                var f = null, d, g = a.b.qa(b.cookie, "=", ";", !0);
                for (d in g)
                    if (g && g.hasOwnProperty && g.hasOwnProperty(d) && "_gscu_" === d.substr(0, 6) && (f = g[d],
                    null != f && 32 === f.length))
                        return !0;
                return !1
            }
        };
    f = a.b.lower;
    m = a.b.indexOf;
    t = a.b.encode;
    n = a.b.decode;
    w = v.isArray;
    z = v.sb;
    q = v.ub;
    a.b.Dc(v)
})(Gridsum || (Gridsum = {}));
(function (a) {
    var d = function () {
        function b(a) {
            this.a = a
        }

        b.prototype.get = function (b, d) {
            if ("_gscu" === b) {
                var u = a.b.D(location.href, "_gscu_");
                null !== u && this.set("_gscu", u, 63072E3)
            } else
                "_gscs" === b && (u = a.b.D(location.href, "_gscs_"),
                null !== u && (u = a.b.decode(u),
                    this.set("_gscs", u, 1800)));
            return a.b.O(a.b.o(b, this.a), d, !0)
        }
        ;
        b.prototype.set = function (b, d, u, k, f, m) {
            f = f || this.a.domain;
            k = k || this.a.path;
            m = m || this.a.Nc;
            a.b.P(a.b.o(b, this.a), d, u, k, f, m, !0)
        }
        ;
        b.prototype.remove = function (a) {
            this.set(a, "0", -1E3)
        }
        ;
        return b
    }();
    a.Sa = d
})(Gridsum || (Gridsum = {}));
(function (a) {
    var d = window
        , b = function () {
        function b(f) {
            void 0 == d.gstempobj && (d.gstempobj = "");
            this.a = f;
            this.pa = [new u(f), new l(f), new p(f), new a.Sa(f)]
        }

        b.prototype.get = function (a, b) {
            if (!a)
                return null;
            var d, k, l;
            for (k = 0; 4 > k; k++)
                if (d = this.pa[k].get(a)) {
                    for (l = 0; 4 > l; l++)
                        k != l && this.pa[l].set(a, d, 63072E3);
                    return d
                }
            return b || null
        }
        ;
        b.prototype.set = function (a, b, d, k, l, p) {
            if (a) {
                var q;
                for (q = 0; 4 > q; q++)
                    this.pa[q].set(a, b, d, k, l, p)
            }
        }
        ;
        b.prototype.remove = function (a) {
            this.pa[3].remove(a)
        }
        ;
        return b
    }();
    a.Lb = b;
    var l = function () {
        function b(a) {
            this.a = a;
            this.I = ["_gscu"]
        }

        b.prototype.get = function (b) {
            try {
                if (0 <= a.b.indexOf(this.I, b)) {
                    var k = d.localStorage;
                    if (k)
                        return k.getItem(a.b.o(b, this.a))
                }
            } catch (l) {
            }
            return null
        }
        ;
        b.prototype.set = function (b, k) {
            try {
                if (0 <= a.b.indexOf(this.I, b)) {
                    var l = d.localStorage;
                    l && l.setItem(a.b.o(b, this.a), k)
                }
            } catch (n) {
            }
        }
        ;
        return b
    }()
        , p = function () {
        function b(a) {
            this.a = a;
            this.I = ["_gscu"]
        }

        b.prototype.get = function (b) {
            try {
                if (0 <= a.b.indexOf(this.I, b)) {
                    var k = d.sessionStorage;
                    if (k)
                        return k.getItem(a.b.o(b, this.a))
                }
            } catch (l) {
            }
            return null
        }
        ;
        b.prototype.set = function (b, k) {
            try {
                if (0 <= a.b.indexOf(this.I, b)) {
                    var l = d.sessionStorage;
                    l && l.setItem(a.b.o(b, this.a), k)
                }
            } catch (n) {
            }
        }
        ;
        return b
    }()
        , u = function () {
        function b(a) {
            this.a = a;
            this.I = ["_gscu"]
        }

        b.prototype.get = function (b) {
            try {
                if (0 <= a.b.indexOf(this.I, b))
                    return this.hc(a.b.o(b, this.a), d.gstempobj)
            } catch (k) {
            }
            return null
        }
        ;
        b.prototype.set = function (b, k) {
            try {
                0 <= a.b.indexOf(this.I, b) && (d.gstempobj = this.replace(d.gstempobj, a.b.o(b, this.a), k))
            } catch (l) {
            }
        }
        ;
        b.prototype.replace = function (a, b, d) {
            if (-1 < a.indexOf("&" + b + "=") || 0 === a.indexOf(b + "=")) {
                var k = a.indexOf("&" + b + "=");
                -1 === k && (k = a.indexOf(b + "="));
                var l = a.indexOf("&", k + 1);
                return -1 !== l ? a.substr(0, k) + a.substr(l + (k ? 0 : 1)) + "&" + b + "=" + d : a.substr(0, k) + "&" + b + "=" + d
            }
            return a + "&" + b + "=" + d
        }
        ;
        b.prototype.hc = function (a, b) {
            if ("string" !== typeof b)
                return null;
            var d = a + "=", k = b.split(/[;&]/), l, p;
            for (l = 0; l < k.length; l++) {
                for (p = k[l]; " " === p.charAt(0);)
                    p = p.substring(1, p.length);
                if (0 === p.indexOf(d))
                    return p.substring(d.length, p.length)
            }
            return null
        }
        ;
        return b
    }()
})(Gridsum || (Gridsum = {}));
var __extends = this && this.__extends || function (a, d) {
        function b() {
            this.constructor = a
        }

        for (var l in d)
            d.hasOwnProperty(l) && (a[l] = d[l]);
        a.prototype = null === d ? Object.create(d) : (b.prototype = d.prototype,
            new b)
    }
;
(function (a) {
    function d(c) {
        if ("U" == c[0])
            K[c[1]](c[2], c[3], c[4], c[5], c[6], c[7], c[8]);
        else if ("W" == c[0])
            a.h[c[1]](c[2], c[3], c[4]);
        else if ("T" == c[0])
            a.h.getTracker(c[1])[c[2]](c[3], c[4], c[5], c[6], c[7], c[8], c[9])
    }

    Function.prototype.bind || (Function.prototype.bind = function (a) {
            function c() {
                return D.apply(this instanceof e ? this : a, b.concat(Array.prototype.slice.call(arguments)))
            }

            function e() {
            }

            if ("function" !== typeof this)
                throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var b = Array.prototype.slice.call(arguments, 1)
                , D = this;
            this.prototype && (e.prototype = this.prototype);
            c.prototype = new e;
            return c
        }
    );
    var b = window, l = document, p = l.referrer, u = l.documentElement, k = location,
        f = navigator.userAgent.toLowerCase(), m = Math, t, n, w, z, q, v, B, C = Array.prototype.slice, g = Number,
        c = a.b;
    t = function (a) {
        return a && d(a) ? a.toLowerCase() : a
    };
    n = function (a, b, k) {
        if (a) {
            if (a.indexOf)
                return a.indexOf(b, k);
            if (a.length)
                for (k = k || 0; k < a.length; k++)
                    if (a[k] === b)
                        return k
        }
        return -1
    };
    w = function (a) {
        return a && d(a) ? (encodeURIComponent || escape)(a) : a
    };
    z = function (a) {
        if (a && d(a)) {
            a = a.replace(/\+/ig, "%20");
            try {
                return (decodeURIComponent || unescape)(a)
            } catch (b) {
            }
        }
        return a
    };
    q = function (a) {
        return a && a.constructor == Array
    };
    v = function (a, C) {
        return a && a.hasOwnProperty ? a.hasOwnProperty(C) : !1
    };
    B = function (a) {
        return "string" == typeof a
    };
    var F = function () {
        function a(c, e, b) {
            this.host = c;
            this.Mc = e || [];
            this.Gc = b || []
        }

        a.prototype.Vc = function (a) {
            var e = this.host;
            return B(e) ? -1 < n(a, e) : e.test && e.test(a)
        }
        ;
        a.prototype.match = function (a) {
            var e, b, D, d = 0;
            b = c.ea(a);
            a = {};
            var g = this.Mc
                , f = this.Gc
                , k = b.host;
            if (this.Vc(k)) {
                if (D = b.i) {
                    for (e in D)
                        v(D, e) && (D[t(e)] = D[e]);
                    for (e = 0; e < g.length; e++)
                        if (b = D[g[e]])
                            a[g[e]] = b,
                                d++;
                        else
                            return !1;
                    for (e = 0; e < f.length; e++)
                        if (b = D[f[e]])
                            a[f[e]] = b,
                                d++
                } else if (g.length)
                    return !1;
                return {
                    host: k,
                    i: a,
                    Hc: d
                }
            }
            return !1
        }
        ;
        return a
    }();
    a.Mb = F;
    var H = function () {
        function b(a) {
            this.a = a
        }

        b.prototype.Aa = function (a, e, b) {
            b = b || this.a.oa[0];
            return b + "?" + c.B(a, "=", "&", !1, e)
        }
        ;
        b.prototype.V = function (h, e, b) {
            h.rd = c.aa(5);
            var D = this.a.c
                , d = new Image(1, 1)
                , g = {};
            a.h.execHook("sender.send", h, b, g);
            if (!g.cancel) {
                var f = this.Aa(h, e, b).substring(0, 2E3);
                d.onerror = function () {
                    setTimeout(function () {
                        var e = new Image(1, 1);
                        e.onload = function () {
                            c.f(D, "RetrySuccess", {
                                cmd: h.gscmd,
                                url: b
                            })
                        }
                        ;
                        e.onerror = function () {
                            c.f(D, "SendingFailed", {
                                cmd: h.gscmd,
                                url: b
                            })
                        }
                        ;
                        e.src = f
                    }, 2E3)
                }
                ;
                d.src = f
            }
        }
        ;
        b.prototype.Zb = function (a) {
            a.rd = c.aa(5);
            return 2E3 >= this.Aa(a, void 0, void 0).length
        }
        ;
        b.prototype.send = function (a, e, c) {
            if (a)
                if (c)
                    this.V(a, e, c);
                else {
                    c = this.a.oa;
                    for (var b = 0; b < c.length; b++)
                        this.V(a, e, c[b])
                }
        }
        ;
        return b
    }()
        , O = function (d) {
        function h() {
            d.apply(this, arguments);
            this.F = 0
        }

        __extends(h, d);
        h.prototype.V = function (e, b, h) {
            var d = this;
            d.F++;
            e.rd = c.aa(5);
            var g = d.a.c
                , f = new Image(1, 1)
                , k = {};
            a.h.execHook("sender.send", e, h, k);
            if (!k.cancel) {
                if ("spv" == e.gscmd || "ecom" == e.gscmd || "ev" == e.gscmd)
                    void 0 == e.dedupid && (e.dedupid = c.l()),
                        d.appendData(e, b, h);
                b = d.Aa(e, b, h).substring(0, 2E3);
                f.onerror = function () {
                    d.F--;
                    d.F = 0 > d.F ? 0 : d.F;
                    c.f(g, "SendingFailed", {
                        cmd: e.gscmd,
                        url: h
                    })
                }
                ;
                f.onload = function () {
                    d.F--;
                    d.F = 0 > d.F ? 0 : d.F;
                    void 0 != e.dedupid && d.Lc(e.dedupid);
                    if (0 == d.F) {
                        var a = d.Ic();
                        a && (a.obj.gsdelay = c.$() - a.obj.gsltime,
                            d.send(a.obj, a.noEncode, a.destUrl))
                    }
                }
                ;
                f.src = b
            }
        }
        ;
        h.prototype.appendData = function (e, a, h) {
            try {
                var d = this.Ka();
                100 > d.length && (d.push({
                    obj: e,
                    noEncode: a,
                    destUrl: h
                }),
                    b.localStorage.setItem(c.o("gsfailed", this.a), JSON.stringify(d)))
            } catch (f) {
            }
        }
        ;
        h.prototype.Ic = function () {
            try {
                var e = this.Ka()
                    , a = e.splice(0, 1)[0];
                b.localStorage.setItem(c.o("gsfailed", this.a), JSON.stringify(e));
                return a
            } catch (h) {
            }
            return null
        }
        ;
        h.prototype.Lc = function (e) {
            try {
                var a = this.Ka(), h;
                for (h = 0; h < a.length; h++)
                    a[h].obj.dedupid == e && (a.splice(h, 1),
                        h--);
                b.localStorage.setItem(c.o("gsfailed", this.a), JSON.stringify(a))
            } catch (d) {
            }
        }
        ;
        h.prototype.Ka = function () {
            try {
                var e = c.o("gsfailed", this.a)
                    , a = b.localStorage.getItem(e);
                b.localStorage.removeItem(e);
                if (a)
                    return JSON.parse(a)
            } catch (h) {
            }
            return []
        }
        ;
        return h
    }(H)
        , P = function () {
        function a(c) {
            this.a = c
        }

        a.prototype.parse = function (a) {
            try {
                var e, b, d = this.a.Ea, f = this.a.w, g = this.a.G;
                a = a || k.href;
                var l = c.ea(a)
                    , m = {
                    protocol: l.protocol,
                    local: l.local,
                    host: l.host,
                    path: l.fullPath,
                    anchor: l.anchor,
                    i: l.i
                };
                d && l.anchor && (m.path += "#" + l.anchor);
                if (g)
                    m.G = g;
                else if (0 !== f.length && l.i) {
                    for (var y in l.i)
                        for (e = 0; e < f.length; e++)
                            t(y) == f[e] && delete l.i[y];
                    for (e = 0; e < f.length; e++)
                        delete l.i[f[e]];
                    (b = c.B(l.i, "=", "&", !1, !0)) && (b = "?" + b);
                    d && l.anchor && (b += "#" + l.anchor);
                    m.G = [l.protocol, "://", l.host, l.path, b].join("")
                } else
                    m.G = [l.protocol, "://", l.host, m.path].join("");
                if (!m.local) {
                    var n = c.hb(a, this.a);
                    m.v = n
                }
                return m
            } catch (r) {
                c.f(this.a.c, "M_Url", r)
            }
            return null
        }
        ;
        return a
    }()
        , Q = function () {
        function b(c) {
            this.a = c;
            this.j = c.N.appVersion ? new a.cd(c) : c.eb ? new a.Lb(c) : new a.Sa(c);
            this.S = {};
            this.M = {}
        }

        b.prototype.update = function () {
            var a, e = this.uid, c = this.R, b = [], d = [];
            for (a in this.S)
                v(this.S, a) && b.push(a + ":" + w(this.S[a]));
            0 < b.length && (e = e + "|" + b.join("|"));
            for (a in this.M)
                v(this.M, a) && d.push(a + ":" + w(this.M[a]));
            0 < d.length && (c = c + "|" + d.join("|"));
            this.j.set("_gscu", e, 63072E3);
            this.j.set("_gscs", c, 1800);
            this.j.set("_gscbrs", "1");
            window._gscu = e;
            window._gscs = c;
        }
        ;
        b.prototype.parse = function (a) {
            if (!a)
                return null;
            var e;
            e = /[^\d\w]+/i;
            var c = {}
                , b = {};
            a = a.split("|");
            var d;
            if (0 == a[0].length || 32 < a[0].length || e.test(a[0]) || "null" == a[0])
                return null;
            c.id = a[0];
            for (e = 1; e < a.length; e++)
                d = a[e].split(":"),
                    b[d[0]] = z(d[1]);
            c.data = b;
            return c
        }
        ;
        b.prototype.U = function (a) {
            try {
                var e, b = void 0, d = void 0, f = void 0, g = void 0, l = "";
                this.S = {};
                this.M = {};
                this.a.ac && (e = c.D(k.href.replace("#", "&"), "_gsc")) && (e = e.split(";"),
                2 == e.length && (f = z(e[0]),
                    g = z(e[1]),
                    b = 1,
                    d = !0));
                d || (f = this.j.get("_gscu"),
                    g = this.j.get("_gscs"),
                    b = this.j.get("_gscbrs"));
                (f = this.parse(f)) ? (this.uid = f.id,
                    this.S = f.data,
                    (g = this.parse(g)) ? (this.R = g.id,
                        this.M = g.data) : (!g && b && (l = "t"),
                        this.R = l + c.l())) : (this.uid = c.l(),
                    this.R = c.l());
                a || this.update()
            } catch (m) {
                console.log(m)
                c.f(this.a.c, "M_User", m),
                    this.uid = c.l(),
                    this.R = c.l(),
                    this.S = {},
                    this.M = {},
                    this.update()
            }
        }
        ;
        b.prototype.Fb = function (a, e) {
            this.M[a] = e + "";
            this.update()
        }
        ;
        b.prototype.Jb = function (a) {
            var e = this.j.get("_gsref");
            !e && a && (e = a + "");
            e && this.a.Oc && this.j.set("_gsref", e, 1800)
        }
        ;
        b.prototype.kc = function () {
            return this.j.get("_gsref")
        }
        ;
        b.prototype.get = function (a) {
            return this.S[a] || this.M[a] || null
        }
        ;
        b.prototype.B = function () {
            return "_gsc=" + this.j.get("_gscu") + ";" + this.j.get("_gscs")
        }
        ;
        b.prototype.vc = function () {
            var a = this.a.Eb;
            return c.T(this.uid) % 1E4 < 100 * a
        }
        ;
        return b
    }()
        , T = function () {
        function a(c, e) {
            this.value = this.key = "";
            try {
                this.index = e,
                -1 !== c.indexOf("=") && (this.key = c.split("=")[0],
                    this.value = c.split("=")[1])
            } catch (b) {
                this.key = c
            }
        }

        a.ic = function (c) {
            for (var e = [], b = 0; b < c.length; b++)
                e.push(new a(c[b], b));
            return e
        }
        ;
        return a
    }()
        , J = function () {
        function a() {
        }

        a.Vb = function (a) {
            for (var e = 0; e < a.length - 1; e++) {
                for (var c = e, b = e + 1; b < a.length; b++)
                    a[b].value.length > a[c].value.length && (c = b);
                c !== e && (b = a[c],
                    a[c] = a[e],
                    a[e] = b)
            }
            return a
        }
        ;
        a.Nb = function (b, e) {
            for (var d = [], f = 0; f < b.length; f++)
                100 < b[f].value.length && -1 === c.indexOf(e, b[f].key) && d.push(b[f]);
            return a.Vb(d)
        }
        ;
        a.prototype.jc = function (h) {
            if (!h)
                try {
                    h = b.top.document.referrer
                } catch (e) {
                    h = p
                }
            if (!h)
                try {
                    b.opener && (h = b.opener.location.href)
                } catch (d) {
                }
            if (700 >= h.length)
                return h;
            var f = "eqid wd word q p query w search keyword kw".split(" ")
                , g = h.indexOf("?")
                , l = h.substr(0, g);
            if (-1 !== g) {
                var k = h.length;
                h = h.substr(g + 1).split("&");
                for (var g = T.ic(h), g = a.Nb(g, f), m = 0; m < g.length; m++) {
                    if (700 >= k)
                        return l + "?" + h.join("&");
                    var n = g[m].value
                        , q = n.substr(0, n.length / 2);
                    h[g[m].index] = g[m].key + "=" + q;
                    k -= n.length - q.length
                }
                for (g = h.length - 1; 0 <= g && !(700 >= k); g--)
                    -1 === c.indexOf(f, h[g].split("=")[0]) && (k = k - h[g].length - 1,
                        h.splice(g, 1));
                return l + "?" + h.join("&")
            }
            return h
        }
        ;
        return a
    }();
    a.dd = J;
    var R = function () {
        function d(a) {
            this.a = a;
            this.N = a.N;
            this.origin = a.origin
        }

        d.prototype.isEnabled = function () {
            return this.a.H ? 100 == this.a.Ga ? !0 : m.round(1E4 * m.random()) < 100 * this.a.Ga : !1
        }
        ;
        d.prototype.Xc = function () {
            if (this.a.ga) {
                var a = (c.jb() - this.a.ga) / 2;
                this.offsetX = 0 < a ? a : 0;
                this.offsetY = 0
            } else
                this.origin ? (a = c.C(this.origin),
                    this.offsetX = a.x,
                    this.offsetY = a.y) : this.offsetY = this.offsetX = 0
        }
        ;
        d.prototype.C = function (a, e) {
            this.Xc();
            return this.nb({
                x: a - this.offsetX,
                y: e - this.offsetY
            })
        }
        ;
        d.prototype.nb = function (a) {
            a.x = m.round(a.x);
            a.y = m.round(a.y);
            return a
        }
        ;
        d.prototype.V = function (d, e, x, f) {
            var k, E = g(b[this.a.Sc] || 0), A = this.N.getCommon("mc"), n = this.N.url.parse();
            k = [];
            k = {};
            -1 < E && 256 > E || (E = 0);
            a.h.execHook("heatmap.send", A, d, e, x, f, k);
            if (!k.cancel) {
                x = f.button;
                c.Da() && (1 == x ? x = 0 : 4 == x && (x = 1));
                A.btn = x;
                x = c.A(null, f, "A", null, 3);
                if (null != x)
                    A.lk = x.href,
                        A.lt = c.Z(x, "title") + x.title || c.Z(x, "alt") || c.ia(x),
                        k = c.C(x),
                        k = this.C(k.x, k.y),
                        A.lx = k.x,
                        A.ly = k.y,
                        A.lw = m.round(x.offsetWidth),
                        A.lh = m.round(x.offsetHeight);
                else if (this.a.Bc)
                    return;
                x = c.A(null, f, null, {
                    gsregion: ""
                });
                null != x && (k = g(x.getAttribute("gsregion")),
                -1 < k && 256 > k && (A.re = k,
                "1" == x.getAttribute("gsposfixed") && (k = c.C(x),
                    k = this.C(k.x, k.y),
                    d -= k.x,
                    e -= k.y),
                    x = c.A(null, f, null, {
                        gssnapshot: ""
                    }))) && (E = g(x.getAttribute("gssnapshot")),
                0 > E || 255 < E) && (E = 0);
                A.gspver = this.a.Ja;
                A.gsmcoffsetx = d;
                A.gsmcoffsety = e;
                k = [n.protocol, "://", n.host, n.path];
                A.gsmcurl = k.join("");
                A.gstl = this.a.ka || l.title;
                A.gssn = E;
                A.gsorurl = this.a.G;
                A.gsscr = screen.width + "*" + screen.height;
                this.N.sender.send(A)
            }
        }
        ;
        d.prototype.Ab = function (a) {
            if (!this.$a(a))
                try {
                    if (this.isEnabled()) {
                        var e = t(a.target.tagName);
                        if ("body" != e && "html" != e) {
                            var b = a.pageX
                                , d = a.pageY;
                            c.u && (b = c.u.ra,
                                d = c.u.sa,
                                c.u = null);
                            var f = this.C(b, d);
                            this.V(f.x, f.y, a.srcElement, a)
                        }
                    }
                } catch (g) {
                    c.f(this.a.c, "M_Heatmap_doc", g)
                }
        }
        ;
        d.prototype.nc = function (a, e) {
            if (!this.$a(e))
                try {
                    var b = e.clientX
                        , d = e.clientY;
                    c.u && (b = c.u.ra,
                        d = c.u.sa,
                        c.u = null);
                    var f = this.nb(c.C(a))
                        , g = this.C(b, d);
                    this.V(g.x + f.x, g.y + f.y, a, e)
                } catch (k) {
                    c.f(this.a.c, "M_Heatmap_iframe", k)
                }
        }
        ;
        d.prototype.$a = function (a) {
            return c.u && c.u.ra == a.pageX && c.u.sa == a.pageY
        }
        ;
        d.prototype.Wa = function () {
            var a = this, e, b = a.a.oc, d = frames;
            if (0 == b.length)
                for (e = 0; e < d.length; e++)
                    try {
                        var f = d[e].frameElement || d[e];
                        if (f.contentDocument || d[e].document)
                            f.contentDocument = f.contentDocument || d[e].document,
                                b.push(f)
                    } catch (g) {
                    }
            for (e = 0; e < b.length; e++)
                if (d = c.J(b[e]))
                    try {
                        var d = d.frameElement || d
                            , k = d.contentDocument
                            , m = function (e) {
                            return function (c) {
                                a.nc(e, c)
                            }
                        }(d);
                        void 0 !== l.ontouchstart && c.Ia(k, m.bind(a));
                        c.observe(k, "mouseup", m.bind(a))
                    } catch (n) {
                    }
        }
        ;
        d.prototype.bind = function () {
            !this.qc && this.a.H && (this.qc = !0,
            void 0 !== l.ontouchstart && c.Ia(l, this.Ab.bind(this)),
                c.observe(l, "mouseup", this.Ab.bind(this)),
                /loaded|complete/.test(l.readyState) ? this.Wa() : c.observe(b, "load", this.Wa.bind(this)))
        }
        ;
        d.prototype.U = function () {
            this.bind()
        }
        ;
        return d
    }()
        , S = function () {
        function a(c) {
            this.a = c;
            this.ja = [];
            this.L = []
        }

        a.prototype.Qb = function (a, e, c) {
            e = g(e);
            this.ja.push({
                K: a + "",
                ma: e || 0,
                na: 0,
                currency: c,
                La: [],
                Cb: !e
            })
        }
        ;
        a.prototype.Rb = function (a, e, b, d, f, k, l, m) {
            try {
                var n, p = void 0, r = this.ja;
                a += "";
                d = g(d) || 0;
                f = g(f) || 0;
                for (n = 0; n < r.length; n++)
                    if (r[n].K == a) {
                        p = r[n];
                        break
                    }
                p || (p = {
                    K: a,
                    ma: 0,
                    na: 0,
                    currency: "",
                    La: [],
                    Cb: !0
                },
                    r.push(p));
                var q = p.Cb
                    , y = g((d * f).toFixed(2));
                a = {
                    orderid: a,
                    name: e,
                    sku: b,
                    quantity: f,
                    unitPrice: d,
                    price: y,
                    category: k,
                    currency: m
                };
                l && (a.procp = c.B(l, ":", ",", !0, !1));
                p.na += a.quantity;
                p.La.push(a);
                q && (p.ma = g((p.ma + y).toFixed(2)))
            } catch (t) {
                c.f(this.a.c, "FC_addProduct", t)
            }
        }
        ;
        return a
    }()
        , I = function () {
        return function (c) {
            var b = k.hostname;
            this.v = {};
            this.Bb = {};
            this.la = null;
            this.c = c;
            this.oa = ["http" + ("https:" == k.protocol ? "s" : "") + "://www.webdissector.com/recv/gs.gif", "http" + ("https:" == k.protocol ? "s" : "") + "://recv-wd.gridsumdissector.com/gs.gif"];
            this.ba = "//www.webdissector.cn/js/heatmap_v" + a.h.version + ".js";
            this.Jc = "//www.addissector.com/";
            this.Kc = "/redirect.gif";
            this.Xa = "utm_campaign";
            this.yb = "utm_medium";
            this.Hb = "utm_source";
            this.ob = "utm_adgroup";
            this.vb = "utm_term";
            this.bb = "utm_content";
            this.Ya = "utm_channel";
            this.Pb = "utm_account";
            this.Va = "gsadid";
            this.ua = this.Xa;
            this.Ha = this.yb;
            this.Pa = this.Hb;
            this.Ba = this.ob;
            this.Fa = this.vb;
            this.wa = this.bb;
            this.va = this.Ya;
            this.Ob = this.Pb;
            this.Ua = this.Va;
            this.w = ["gclid", "bdclkid", "gs_ws", this.ua, this.Ha, this.Pa, this.Ba, this.Fa, this.wa, this.va, this.Ob, "gsadid", "gsabredir"];
            this.$b = "content_";
            "www." == b.substring(0, 4) && (b = b.substring(4));
            this.domain = b;
            this.path = "/";
            this.Pc = 1800;
            this.Eb = 100;
            this.origin = l.body;
            this.Ga = 100;
            this.oc = [];
            this.Sc = "GridsumSnapshotID";
            this.Ib = "GSTS";
            this.zb = {};
            this.Ea = !0;
            this.Ta = "http://ctrl-ab.gridsumdissector.com/";
            this.eb = this.xb = !0;
            this.ab = "http://ctrl-ab.gridsumdissector.com/clientredir.html";
            this.qb = !1
        }
    }();
    a.ad = I;
    var M = function () {
        function a(c) {
            this.append = [];
            var e = c.indexOf("?")
                , b = c.indexOf("#");
            -1 === e ? -1 === b ? (this.ha = c,
                this.hash = this.s = "") : (this.ha = c.substr(0, b),
                this.s = "",
                this.hash = c.substr(b + 1)) : -1 === b ? (this.ha = c.substr(0, e),
                this.s = c.substr(e + 1),
                this.hash = "") : (this.ha = c.substr(0, e),
                this.s = c.substr(e + 1, b - e - 1),
                this.hash = c.substr(b + 1))
        }

        a.prototype.Ub = function (a) {
            this.append.push("_gscu_=" + a)
        }
        ;
        a.prototype.Tb = function (a) {
            a = c.encode(a);
            this.append.push("_gscs_=" + a)
        }
        ;
        a.prototype.toString = function () {
            this.s = "" === this.s ? this.append.join("&") : this.s + ("&" + this.append.join("&"));
            this.append = [];
            return this.ha + ("" === this.s ? "" : "?" + this.s) + ("" === this.hash ? "" : "#" + this.hash)
        }
        ;
        return a
    }();
    a.bd = M;
    var N = function () {
        function d(e, a, c) {
            var b = new I(e);
            b.N = this;
            this.c = e;
            this.appVersion = a;
            this.Sb = c;
            this.a = b
        }

        var h = d.prototype;
        h.check = function () {
            try {
                c.O("_gsHijack") || top == b || top.location.href != k.href || (c.f(this.c, "WebPageHijack"),
                    c.P("_gsHijack", "1"))
            } catch (e) {
            }
        }
        ;
        h.isLocal = function () {
            if (this.a.Wc)
                return !1;
            var e = k.hostname;
            return "file:" == k.protocol || -1 < n(e, "localhost") || 0 == n(e, "127.") || 0 == n(e, "192.168.") || 0 == n(e, "10.") || 0 == n(e, "172.")
        }
        ;
        h.isHeatmapModeOn = function () {
            var e = t(k.hash);
            return this.a.H && -1 < n(e, "#gwdheatmap&") && -1 < n(e, this.c.substring(4))
        }
        ;
        h.isDisable = function () {
            return !this.c || !this.appVersion && this.isLocal() || this.isHeatmapModeOn() || -1 < n(f, this.a.pc) || !this.g.vc()
        }
        ;
        h.getCommon = function (e) {
            var b = this.g;
            e = {
                gsver: a.h.version,
                gscmd: e,
                gssrvid: this.c,
                gsuid: b.uid,
                gssid: b.R,
                pvid: this.Ma,
                gsltime: c.$(),
                gstmzone: c.za(),
                gsjp: this.a.wc,
                gsdelay: null,
                rd: 1
            };
            this.a.Yb && (e.gscs = c.T(e.gsver + e.gscmd + e.gssrvid + e.gsuid + e.gssid + e.gsltime, !0));
            return e
        }
        ;
        h.appendBrowserInfo = function (e) {
            e.gsscr = screen.width + "*" + screen.height
        }
        ;
        h.calculateDuration = function (e) {
            e = m.round((g(new Date) - e) / 1E3);
            180 < e && (e = 180);
            0 > e && (e = 0);
            this.duration = e
        }
        ;
        h.sendHeartbeat = function (e, a, b) {
            this.lc || (this.trackHeartbeat(e, a),
                this.wb = c.$(),
            b || (this.lc = 1))
        }
        ;
        h.ta = function (e) {
            e.gsst = m.max(u ? u.scrollTop : 0, l.body ? l.body.scrollTop : 0);
            e.gswh = this.a.Yc || b.innerHeight || (u ? u.clientHeight : null)
        }
        ;
        h.init = function () {
            var e = this;
            if (e.tc)
                e.g.U();
            else {
                e.g = new Q(e.a);
                e.referrer = new J;
                e.url = new P(e.a);
                e.m = new S(e.a);
                e.sender = e.a.xb ? new O(e.a) : new H(e.a);
                e.H = new R(e.a);
                e.g.U();
                if (e.a.qb) {
                    var d = new a.Zc(e.a);
                    d.kd(function () {
                        var a = d.get("_gscu");
                        a || (a = c.l(),
                            d.set("_gscu", a));
                        e.trackJunctionPoint(a, 4)
                    });
                    d.ed()
                }
                var f, g = a.h.plugins;
                for (f = 0; f < g.length; f++) {
                    var k = g[f];
                    e[k.name] = new k.Uc(e.a)
                }
                e.isHeatmapModeOn() && e.showHeatmap();
                if (e.isDisable())
                    e.disabled = !0;
                else {
                    e.a.Ac ? c.observe(b, "load", function () {
                        e.H.U()
                    }) : e.H.U();
                    e.Ma = c.l();
                    var h = new Date;
                    c.observe(b, "load", function () {
                        e.calculateDuration(b[e.a.Ib] || h)
                    });
                    c.observe(b, "beforeunload", function () {
                        null == e.duration && e.calculateDuration(b[e.a.Ib] || h);
                        e.sendHeartbeat()
                    });
                    if (e.appVersion) {
                        f = ["webkit", "moz", "o", "ms"];
                        for (var m = "-", g = 0; 4 > g; g++)
                            void 0 != document[f[g] + "Hidden"] && (m = f[g]);
                        void 0 != document.hidden && (m = "");
                        "-" == m ? c.f(e.c, "Page visibility is not supported on Cordova.") : c.observe(l, "" == m ? "visibilitychange" : m + "visibilitychange", function () {
                            if ("hidden" == document["" == m ? "visibilityState" : m + "VisibilityState"])
                                e.sendHeartbeat(void 0, void 0, !0);
                            else if ("visible" == document["" == m ? "visibilityState" : m + "VisibilityState"]) {
                                if (void 0 != e.wb && e.wb + 3E4 < c.$()) {
                                    var a = c.l();
                                    e.g.j.set("_gscs", a);
                                    e.g.uid = a;
                                    e.trackLaunch(!0)
                                }
                                e.track()
                            }
                        })
                    }
                    if (!e.appVersion)
                        var n, p = e.g.R, r = e.g.uid, q = b.setInterval(function () {
                            if (!e.Ca) {
                                e.g.U(!0);
                                var a = e.g.get("pv");
                                n && n < a ? e.Ca = 1 : e.g.R != p && (e.Ca = 1);
                                n = a
                            }
                            e.Ca && null != e.duration && (e.sendHeartbeat(p, r),
                                e.g.Jb(e.Db),
                                b.clearInterval(q))
                        }, 1E3)
                }
                e.tc = !0
            }
        }
        ;
        h.track = function (a, b) {
            try {
                if (this.init(),
                    !this.disabled) {
                    var d = !1, f = this.a.Bb, h = this.a.la, m, q = this.g, t, y = this.url, r = this.getCommon("spv"),
                        v = a && b ? k.href : "";
                    if (a) {
                        var d = !0
                            , w = a.split("://", 2);
                        if (1 < w.length) {
                            if (-1 == w[1].indexOf(k.hostname)) {
                                c.f(this.c, "The url's domain is wrong.");
                                return
                            }
                            a = w[0] + "://" + w[1].replace(/\/+/g, "/")
                        } else
                            a = a.replace(/\/+/g, "/")
                    }
                    a = y.parse(a || k.href);
                    v = this.referrer.jc(v);
                    t = g(q.get("pv")) || 0;
                    0 === t && (r.gsfir = 1);
                    this.tb ? r.pvid = "" : this.tb = 1;
                    this.appVersion && this.tb && (this.Ma = c.l(),
                        r.pvid = this.Ma);
                    r.gstl = this.a.ka || l.title;
                    r.ubc = this.a.Wb;
                    r.gscp = c.B(f, "::", "||", !1, !1);
                    r.pcp = h;
                    r.gstestid = "";
                    r.gstestverid = "";
                    r.fbr = "";
                    r.gsce = c.rc() ? 1 : 0;
                    var L = c.gc();
                    r.gsflver = L.ec;
                    r.gssil = L.Qc;
                    r.gsclr = screen.colorDepth || 32;
                    try {
                        r.gsje = navigator.javaEnabled() ? 1 : 0
                    } catch (B) {
                    }
                    this.ta(r);
                    r.gsph = u ? u.scrollHeight : null;
                    r.gspw = u ? u.scrollWidth : null;
                    !0 === this.Gb && (r.gssce = 1);
                    this.appVersion ? r.gsurl = a.path : (r.gsurl = [a.protocol, "://", a.host, a.path].join(""),
                        m = a.v,
                        r.adcp = m.X,
                        r.adgp = m.group,
                        r.adsr = m.source,
                        r.admd = m.da,
                        r.adkw = m.ca,
                        r.adct = m.content,
                        r.adch = m.channel,
                        r.adid = m.W);
                    this.appendBrowserInfo(r);
                    !d && this.a.G && (r.gsorurl = this.a.G);
                    this.Db = r.gsref = v || "";
                    a.i && a.i.tid && a.i.tvid && (r.gstestid = a.i.tid,
                        r.gstestverid = z(a.i.tvid),
                        r.fbr = a.i.fbr,
                    "" != r.gsref && 0 != r.gsref.indexOf(this.a.Ta) || void 0 == a.i.refurl || (r.gsref = z(a.i.refurl)));
                    this.sender.send(r);
                    q.Jb(this.Db);
                    q.Fb("pv", ++t);
                    if (this.Na && 1 == t && (!p || -1 < n(p, this.Na))) {
                        r.gscmd = "rpv";
                        var U = [this.a.Jc, c.T(this.Na), this.a.Kc].join("");
                        this.sender.send(r, !1, U)
                    }
                    this.check()
                }
            } catch (C) {
                c.f(this.c, "FC_track", C)
            }
        }
        ;
        h.trackLaunch = function (e) {
            try {
                if ((e || null == sessionStorage.getItem("gslaunched")) && b.device && (this.init(),
                    !this.disabled)) {
                    var d = this.getCommon("launch");
                    d.gsmappver = this.appVersion;
                    d.gschannel = this.Sb;
                    a.gd.fd(d);
                    d.gscp = c.B(this.a.zb, "::", "||", !1, !1);
                    this.sender.send(d);
                    sessionStorage.setItem("gslaunched", "1")
                }
            } catch (f) {
                c.f(this.c, "FC_trackLaunch", f)
            }
        }
        ;
        h.trackLink = function (a, c, b, d) {
            var f = this;
            return f.bindEvent(c, "click", function () {
                f.track(a, !0)
            }, b, d)
        }
        ;
        h.trackECom = function () {
            try {
                if (this.init(),
                    !this.disabled) {
                    var a, b, d, f, g = this.sender, k = this.m.ja, h, l, m, p, q = this.g, t = q.get("_gsecom");
                    t ? t = t.split(",") : t = [];
                    for (a = 0; a < k.length; a++) {
                        var y = this.getCommon("ecom");
                        l = k[a];
                        f = w(l.K);
                        if (!(-1 < n(t, f))) {
                            t.push(f);
                            y.gsorderid = l.K;
                            y.gstotal = l.ma;
                            y.gsquan = l.na;
                            y.gscur = l.currency;
                            for (var v in this.m.L)
                                if (this.m.L[v].K == l.K) {
                                    y.ecp = this.m.L[v].xa;
                                    break
                                }
                            h = l.La;
                            p = [];
                            b = 0;
                            for (d = h.length; b < d; b++)
                                m = h[b],
                                    m = c.B(m, "::", ",,", !1, !0),
                                    p.push(m);
                            y.gsproducts = p.join("||");
                            if (g.Zb(y))
                                g.send(y);
                            else
                                for (b = 0; b < d; b++) {
                                    var u = this.getCommon("ecom");
                                    u.gsorderid = y.gsorderid;
                                    u.gstotal = y.gstotal;
                                    u.gsquan = y.gsquan;
                                    u.gscur = y.gscur;
                                    u.ecp = y.ecp;
                                    m = h[b];
                                    m = c.B(m, "::", ",,", !1, !0);
                                    u.gsproducts = m;
                                    g.send(u)
                                }
                        }
                    }
                    q.Fb("_gsecom", t.join(","));
                    this.m.ja = []
                }
            } catch (z) {
                c.f(this.c, "FC_trackECom", z)
            }
        }
        ;
        h.trackClickthrough = function (a, b) {
            try {
                if (this.init(),
                !this.disabled && (a || b)) {
                    var d = this.getCommon("ct")
                        , f = this.zc;
                    f && (d.gsssid = f,
                    b && (d.url = b),
                        d.gsclktl = a,
                        d.gssresurl = k.href,
                        this.sender.send(d))
                }
            } catch (g) {
                c.f(this.c, "FC_trackClickthrough", g)
            }
        }
        ;
        h.trackHeartbeat = function (a, b) {
            var c = this.getCommon("hb");
            c.pld = this.duration;
            this.ta(c);
            c.gssid = a || c.gssid;
            c.gsuid = b || c.gsuid;
            this.sender.send(c)
        }
        ;
        h.trackSiteSearch = function (a, b, d, f, g) {
            try {
                if (this.init(),
                    !this.disabled) {
                    var h = this.getCommon("ss")
                        , l = c.l();
                    f ? (h.gsskwd = c.D(k.href, a),
                        h.gssenc = d || "utf-8",
                        h.gsscat = c.D(k.href, b)) : d ? (h.gsskwd = a,
                        h.gsscat = b,
                        h.gssenc = d) : (h.gsskwd = w(a),
                        h.gsscat = w(b),
                        h.gssenc = "utf-8");
                    h.gsskwd && (h.gsssid = this.zc = l,
                    (g = g || p) && (h.gssref = g),
                        h.gssresurl = k.href,
                        this.sender.send(h))
                }
            } catch (m) {
                c.f(this.c, "FC_trackSiteSearch", m)
            }
        }
        ;
        h.trackEvent = function (a, b, d, f) {
            try {
                if (this.init(),
                    !this.disabled) {
                    var g = this.getCommon("ev")
                        , h = k.href;
                    g.eca = a;
                    g.eac = b;
                    g.eva = f;
                    g.ela = d;
                    g.gstl = this.a.ka || l.title;
                    h = this.url.parse(h);
                    g.gsourl = h.G;
                    this.sender.send(g)
                }
            } catch (m) {
                c.f(this.c, "FC_trackEvent", m)
            }
        }
        ;
        h.trackInternalLink = function (a) {
            try {
                this.init();
                if (this.disabled)
                    return !0;
                var b = this.getCommon("ct");
                b.gstype = 1;
                b.url = a.href;
                b.gsclktl = c.Z(a, "title") + a.title || c.Z(a, "alt") || c.ia(a);
                b.gssresurl = k.href;
                b.gstl = this.a.ka || l.title;
                var d = c.A(null, a, null, {
                    gscampaign: ""
                });
                null != d && (b.gscamp = d.getAttribute("gscampaign"));
                d = c.A(null, a, null, {
                    gsposition: ""
                });
                null != d && (b.gspos = d.getAttribute("gsposition"));
                d = c.A(null, a, null, {
                    gsexpkey: ""
                });
                null != d && (b.gsexpkey = d.getAttribute("gsexpkey"));
                this.sender.send(b)
            } catch (f) {
                c.f(this.c, "FC_trackInternalLink", f)
            }
            return !0
        }
        ;
        h.trackLocation = function () {
            var a = this;
            try {
                a.init(),
                a.disabled || navigator.geolocation.getCurrentPosition(function (b) {
                    var c = a.getCommon("loc");
                    c.gsmlati = b.coords.latitude;
                    c.gsmlongi = b.coords.longitude;
                    a.sender.send(c)
                }, function () {
                }, {
                    timeout: 6E4
                })
            } catch (b) {
                c.f(a.c, "FC_trackLocation", b)
            }
        }
        ;
        h.trackJunctionPoint = function (a, b) {
            try {
                if (this.init(),
                    !this.disabled) {
                    var d = this.getCommon("jp");
                    void 0 == a ? (d.gsjpid = this.g.uid,
                        d.gsjptype = 0) : (d.gsjpid = a,
                        d.gsjptype = void 0 == b ? 0 : b);
                    this.sender.send(d)
                }
            } catch (f) {
                c.f(this.c, "FC_trackLogin", f)
            }
        }
        ;
        h.enableScroll = function () {
            var a = this;
            void 0 === a.Gb && (a.Gb = !0,
                c.observe(b, "scroll", function () {
                    try {
                        if (a.init(),
                            !a.disabled) {
                            var d = a.getCommon("sc");
                            a.ta(d);
                            d.gsorurl = a.a.G;
                            d.scid = c.l();
                            a.yc = d.scid;
                            b.setTimeout(function () {
                                d.scid === a.yc && (d.scid = null,
                                    a.sender.send(d))
                            }, 1E3)
                        }
                    } catch (f) {
                        c.f(a.c, "FC_enableScroll", f)
                    }
                }))
        }
        ;
        h.bindEvent = function (a, b, d, f, g) {
            g = g || {};
            return c.observe(a, b, function (b) {
                if (b && b.target) {
                    var h = c.A(a, b, f, g);
                    null != h && (b.Cc = h,
                        d(b))
                }
            })
        }
        ;
        h.bindSearchResults = function (a, b) {
            var d = this;
            return d.bindEvent(a, "click", function (a) {
                a = a.Cc;
                d.trackClickthrough(c.ia(a), a.href)
            }, "a", b)
        }
        ;
        h.showHeatmap = function () {
            var e = this.a.ba;
            a.h.ba = k.href;
            var b = l.createElement("script");
            b.src = e;
            l.getElementsByTagName("head")[0].appendChild(b)
        }
        ;
        h.addOrder = function (a, b, d) {
            try {
                this.init(),
                this.disabled || this.m.Qb(a, g(b), d ? d : "RMB")
            } catch (f) {
                c.f(this.c, "FC_addOrder", f)
            }
        }
        ;
        h.addProduct = function (a, b, d, f, h, k, l, m) {
            try {
                this.init(),
                this.disabled || this.m.Rb(a, b, d, g(f), g(h), k, l, m ? m : "RMB")
            } catch (n) {
                c.f(this.c, "FC_addProduct", n)
            }
        }
        ;
        h.setSessionTimeout = function (a) {
            1 > a || 3600 < a || (this.a.Pc = a)
        }
        ;
        h.setBreadcrumb = function (a) {
            this.a.Wb = a
        }
        ;
        h.setCampaign = function (a) {
            a && a.length && (this.a.v.X = a)
        }
        ;
        h.setGroup = function (a) {
            a && a.length && (this.a.v.group = a)
        }
        ;
        h.setContent = function (a) {
            a && a.length && (this.a.v.content = a)
        }
        ;
        h.setKeyword = function (a) {
            a && a.length && (this.a.v.ca = a)
        }
        ;
        h.setMedium = function (a) {
            a && a.length && (this.a.v.da = a)
        }
        ;
        h.setSource = function (a) {
            a && a.length && (this.a.v.source = a)
        }
        ;
        h.setAdid = function (a) {
            a && a.length && (this.a.v.W = a)
        }
        ;
        h.setCampaignKey = function (a) {
            this.a.w.push(this.a.ua = t(a))
        }
        ;
        h.setMediumKey = function (a) {
            this.a.w.push(this.a.Ha = t(a))
        }
        ;
        h.setContentKey = function (a) {
            this.a.w.push(this.a.wa = t(a))
        }
        ;
        h.setSourceKey = function (a) {
            this.a.w.push(this.a.Pa = t(a))
        }
        ;
        h.setKeywordKey = function (a) {
            this.a.w.push(this.a.Fa = t(a))
        }
        ;
        h.setGroupKey = function (a) {
            this.a.w.push(this.a.Ba = t(a))
        }
        ;
        h.setChannelKey = function (a) {
            this.a.w.push(this.a.va = t(a))
        }
        ;
        h.setAdidKey = function (a) {
            this.a.w.push(this.a.Ua = t(a))
        }
        ;
        h.setContentNetworkPrefix = function (a) {
            this.a.$b = a
        }
        ;
        h.setChannel = function (a, b, d) {
            b && (b = d ? c.D(p, b) : c.D(k.href, b)) && (a = b);
            a && 0 != a.length && (this.a.v.channel = a)
        }
        ;
        h.setIgnoreTrafficKeyword = function (a) {
            a && (this.a.pc = a)
        }
        ;
        h.setCustomProperty = function (a, b, d, f) {
            var g = b;
            "cookie" == d ? g = c.O(f) || b : "query" == d && (g = c.D(k.href, f) || b);
            null != g && (this.a.Bb[a] = g)
        }
        ;
        h.setMobileLaunchProperty = function (a, b) {
            a && b && (this.a.zb[a] = b)
        }
        ;
        h.setPageProperty = function (a, b) {
            null != a && null != b && (this.a.la || (this.a.la = {}),
                this.a.la[a] = b)
        }
        ;
        h.setEcomProperty = function (a, b, c) {
            if (null != a && null != b && null != c) {
                for (var d in this.m.L)
                    if (this.m.L[d].K == a) {
                        this.m.L[d].xa[b] = c;
                        return
                    }
                a = this.m.L.push({
                    K: a,
                    xa: {}
                });
                this.m.L[a - 1].xa[b] = c
            }
        }
        ;
        h.setHeatmapScriptUrl = function (a) {
            this.a.ba = a
        }
        ;
        h.setPageName = function (a) {
            this.a.ka = a
        }
        ;
        h.setServiceUrl = function (a) {
            this.a.oa = [a]
        }
        ;
        h.setServiceUrls = function (a) {
            q(a) || (a = C.call(arguments));
            this.a.oa = a
        }
        ;
        h.setJunctionPoint = function (a) {
            this.a.wc = a
        }
        ;
        h.setCookieProperties = function (a, b, c) {
            a && "." == a.charAt(0) && (a = a.substring(1));
            0 <= k.host.indexOf(a) && (this.a.domain = a || this.a.domain);
            this.a.path = b || this.a.path;
            this.a.Nc = !!c
        }
        ;
        h.setSamplingRate = function (a) {
            this.a.Eb = a
        }
        ;
        h.setClickSamplingRate = function (a) {
            this.a.Ga = a
        }
        ;
        h.setDocWidth = function (a) {
            this.a.ga = g(a)
        }
        ;
        h.setWindowHeight = function (a) {
            this.a.Yc = g(a)
        }
        ;
        h.setOriginalUrl = function (a) {
            this.a.G = a
        }
        ;
        h.setOriginElement = function (a) {
            this.a.origin = c.J(a)
        }
        ;
        h.setPageVersion = function (a) {
            this.a.Ja = a
        }
        ;
        h.getWDCookieString = function () {
            this.init();
            return this.g.B()
        }
        ;
        h.jump = function (a) {
            var b = this.getWDCookieString();
            a = B(a) ? a : a.action;
            k.href = a + "#" + b
        }
        ;
        h.addIgnoreParams = function () {
            this.a.w = this.a.w.concat(C.call(arguments))
        }
        ;
        h.enableLazyClickTrace = function (a) {
            this.a.Ac = !a
        }
        ;
        h.enableHeatmap = function (a) {
            this.a.H = !0;
            this.a.Bc = a;
            this.H && this.H.bind()
        }
        ;
        h.enableCrossDomain = function (a) {
            this.a.ac = !a
        }
        ;
        h.enableLocalTraffic = function () {
            this.a.Wc = !0
        }
        ;
        h.enableAnchor = function () {
        }
        ;
        h.keepAnchor = function (a) {
            this.a.Ea = !a
        }
        ;
        h.disableAnchor = function () {
            this.a.Ea = !1
        }
        ;
        h.enableRedirectServer = function (a) {
            this.Na = a || this.a.domain
        }
        ;
        h.setErrorUrls = function (a) {
            q(a) || (a = C.call(arguments));
            c.ya = a || []
        }
        ;
        h.getSessionRefPage = function () {
            if (this.g)
                return this.g.kc()
        }
        ;
        h.enableCheckSum = function (a) {
            this.a.Yb = void 0 == a ? !0 : a
        }
        ;
        h.setAbServer = function (a) {
            this.a.Ta = a
        }
        ;
        h.enableAdditionalStorage = function (a) {
            this.a.qb = void 0 == a ? !0 : a
        }
        ;
        h.enableDurable = function (a) {
            this.a.eb = void 0 == a ? !0 : a
        }
        ;
        h.enableLocalized = function (a) {
            this.a.xb = void 0 == a ? !0 : a
        }
        ;
        h.linkDomains = function () {
            function a(b, d) {
                if (-1 == k.pathname.indexOf("gridsum_crossdomain_helper"))
                    for (var e, f = 0, g = b.length; f < g; f++)
                        e = l.createElement("iframe"),
                            e.src = "//" + b[f].domain + b[f].path + "#" + d,
                            e.style.display = "none",
                            l.body.appendChild(e);
                c.P("_gspc1", "1", 1600);
                c.P("_gspc2", "1")
            }

            try {
                this.enableCrossDomain();
                var b, d = C.call(arguments), f = d.length, g = location.hostname,
                    h = !(c.O("_gspc1") && c.O("_gspc2")), m = [], n, p = !1;
                for (b = 0; b < f; b++) {
                    var r = d[b].split("/")[0]
                        , q = d[b].substring(d[b].indexOf("/"))
                        , y = h && location.pathname != q;
                    if (r != g) {
                        var t = "www." == r.substr(0, 4) ? r.substr(4) : r;
                        -1 === g.indexOf(t, g.length - t.length + 1) && y && (p = !0,
                            m.push({
                                domain: r,
                                path: q
                            }))
                    }
                }
                p && (n = this.getWDCookieString(),
                    l.body ? a(m, n) : c.Ra("document.body", function () {
                        a(m, n)
                    }))
            } catch (u) {
                c.f(this.a.jd, "P_CD", u)
            }
        }
        ;
        h.clientRedirect = function (a, b) {
            try {
                this.init();
                if (this.disabled)
                    return !0;
                var d = a.href
                    , f = this.g.j.get("_gscs")
                    , g = f ? f.split("|")[0] : "null"
                    , h = "?destUrl=" + w(d) + "&gssid=" + g;
                0 != b && (h += "&gsref=" + w(k.href));
                a.href = this.a.ab + h
            } catch (l) {
                c.f(this.c, "FC_clientRedirect", l)
            }
            return !0
        }
        ;
        h.setClientRedirectUrl = function (a) {
            this.a.ab = a
        }
        ;
        h.bindDomains = function (a) {
            try {
                if (this.init(),
                    !this.disabled) {
                    for (var b = c.mb(k.hostname), d = 0; d < a.length; d++)
                        -1 < a[d].indexOf(b) && (a.splice(d, 1),
                            d--);
                    for (var f = document.getElementsByTagName("a"), b = 0; b < f.length; b++) {
                        var g;
                        a: {
                            for (var h = f[b].href, d = a, l = 0; l < d.length; l++)
                                if (0 === h.indexOf(d[l])) {
                                    g = !0;
                                    break a
                                }
                            g = !1
                        }
                        if (g) {
                            var m = new M(f[b].href);
                            m.Ub(this.g.j.get("_gscu"));
                            m.Tb(this.g.j.get("_gscs"));
                            f[b].href = m.toString()
                        }
                    }
                }
            } catch (n) {
                c.f(this.c, "FC_bindDomains", n)
            }
        }
        ;
        h.enableSessionRefPage = function (a) {
            this.a.Oc = void 0 == a ? !0 : a
        }
        ;
        h.trackExposure = function () {
            try {
                if (this.init(),
                !this.disabled && l.getElementsByClassName) {
                    for (var a = l.getElementsByClassName("gsexp"), b = {}, d = 0; d < a.length; d++) {
                        var f = c.A(null, a[d], null, {
                            gscampaign: ""
                        })
                            , g = null != f ? f.getAttribute("gscampaign") : ""
                            , f = c.A(null, a[d], null, {
                            gsposition: ""
                        })
                            , h = null != f ? f.getAttribute("gsposition") : ""
                            , f = c.A(null, a[d], null, {
                            gsexpkey: ""
                        });
                        if (null != f) {
                            var k = f.getAttribute("gsexpkey");
                            null !== k && (void 0 === b[g] && (b[g] = {}),
                            void 0 === b[g][h] && (b[g][h] = []),
                                b[g][h].push(k))
                        }
                    }
                    for (var m in b) {
                        var n = this.getCommon("exp");
                        n.gscamp = m;
                        var a = [], p;
                        for (p in b[m])
                            a.push(p + ":" + b[m][p].join(","));
                        n.gslist = a.join("|");
                        this.sender.send(n)
                    }
                }
            } catch (q) {
                c.f(this.c, "trackExposure", q)
            }
        }
        ;
        return d
    }();
    a.h = {
        version: "3.5.0.1",
        pb: {},
        plugins: [],
        Qa: {},
        ba: void 0,
        register: function (b, c, d) {
            a.h.plugins.push({
                name: b,
                Uc: c
            });
            a.h.addApis(d)
        },
        addApis: function (a) {
            if (a)
                for (var b in a)
                    v(a, b) && (N.prototype[b] = a[b])
        },
        addHook: function (b, c) {
            var d = a.h.pb;
            b = t(b);
            d[b] = d[b] || [];
            d[b].push(c)
        },
        execHook: function (b) {
            for (var c = [], d = 1; d < arguments.length; d++)
                c[d - 1] = arguments[d];
            if (d = a.h.pb[b])
                for (var f = 0; f < d.length; f++) {
                    var g = d[f];
                    g.apply(g, c)
                }
        },
        isTrackerExist: function (b) {
            return !!a.h.Qa[b]
        },
        getTracker: function (b, d, e) {
            b = c.trim(b);
            return a.h.Qa[b] || (a.h.Qa[b] = new N(b, d, e))
        },
        getHybridTracker: function (b, d) {
            c.sc() && (d = b);
            return a.h.getTracker(d)
        },
        loadCallback: function (a, b, d) {
            c.Ra("window." + (a || "_gsCallback"), function (a) {
                a()
            }, b, d)
        }
    };
    var K = {
        decode: c.decode,
        delCookie: c.cb,
        encode: c.encode,
        find: c.find,
        findArray: c.gb,
        getAd: c.hb,
        getCookie: c.O,
        getDocWidth: c.jb,
        getEl: c.J,
        getExpireDate: c.kb,
        getHashCode: c.T,
        getInnerText: c.ia,
        getInnerUnvisibleText: c.Z,
        getLocalTime: c.$,
        getPointer: c.lb,
        getPos: c.C,
        getPrimaryDomain: c.mb,
        getRandomID: c.l,
        getRandomString: c.aa,
        getTimeZone: c.za,
        getUrlParam: c.D,
        indexOf: c.indexOf,
        isIE: c.Da,
        isMobile: c.rb,
        isPageMatch: c.uc,
        lower: c.lower,
        observe: c.observe,
        observeTouch: c.Ia,
        report: c.f,
        resolveURL: c.ea,
        resolveUrl: c.ea,
        searchUp: c.A,
        serialize: c.B,
        setCookie: c.P,
        toDict: c.qa,
        trim: c.trim,
        voidFunc: c.Kb,
        waitFor: c.Ra
    }
        , F = function () {
        function a() {
        }

        a.prototype.push = function (a) {
            d(a)
        }
        ;
        return a
    }();
    try {
        for (var G = 0; G < _gsq.length; G++)
            d(_gsq[G]);
        _gsq = new F
    } catch (V) {
    }
    b.GridsumWebDissector = a.h;
    b._gsUtility = K;
})(Gridsum || (Gridsum = {}));
GridsumWebDissector = window.GridsumWebDissector;
_gsUtility = window._gsUtility;
var _gsTracker = GridsumWebDissector.getTracker('GWD-910005');
_gsTracker.setServiceUrls('http://yhxwsjjs.court.gov.cn/gs.gif');
if (_gsUtility.isPageMatch(["shixin.court.gov.cn/"], 'exactmatch', location.host + location.pathname)) {
    _gsTracker.enableHeatmap();
    _gsTracker.setDocWidth(1050);
    _gsTracker.setPageVersion("ver20170327");
    _gsTracker.setOriginalUrl("http://shixin.court.gov.cn/");
} else {
    // console.log("a")
}

function get_id() {
    _gsTracker.track();
    var result_id = document.cookie.match(/\d+/);
    var ret_id = {
        "_gscs": ["_gscs" + result_id[0], window._gscs + "|pv:1"],
        "_gscu":["_gscu"+result_id[0],window._gscu],
        "uid": ["uid",_gsTracker.g.uid],
        "_gscbrs": ["_gscbrs"+result_id[0],'1'],
        "result": ["result",result_id]
    };
    return JSON.stringify(ret_id)

}

console.log(get_id());
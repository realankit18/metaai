(function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) o(l);
    new MutationObserver(l => {
        for (const d of l)
            if (d.type === "childList")
                for (const c of d.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && o(c)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(l) {
        const d = {};
        return l.integrity && (d.integrity = l.integrity), l.referrerPolicy && (d.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? d.credentials = "include" : l.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin", d
    }

    function o(l) {
        if (l.ep) return;
        l.ep = !0;
        const d = s(l);
        fetch(l.href, d)
    }
})();

function Op(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var El = {
        exports: {}
    },
    yi = {},
    Cl = {
        exports: {}
    },
    le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xd;

function N0() {
    if (Xd) return le;
    Xd = 1;
    var n = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        l = Symbol.for("react.profiler"),
        d = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        h = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        y = Symbol.for("react.memo"),
        g = Symbol.for("react.lazy"),
        v = Symbol.iterator;

    function S(E) {
        return E === null || typeof E != "object" ? null : (E = v && E[v] || E["@@iterator"], typeof E == "function" ? E : null)
    }
    var k = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        M = Object.assign,
        P = {};

    function R(E, V, oe) {
        this.props = E, this.context = V, this.refs = P, this.updater = oe || k
    }
    R.prototype.isReactComponent = {}, R.prototype.setState = function(E, V) {
        if (typeof E != "object" && typeof E != "function" && E != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, E, V, "setState")
    }, R.prototype.forceUpdate = function(E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate")
    };

    function L() {}
    L.prototype = R.prototype;

    function U(E, V, oe) {
        this.props = E, this.context = V, this.refs = P, this.updater = oe || k
    }
    var j = U.prototype = new L;
    j.constructor = U, M(j, R.prototype), j.isPureReactComponent = !0;
    var G = Array.isArray,
        B = Object.prototype.hasOwnProperty,
        W = {
            current: null
        },
        ne = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function J(E, V, oe) {
        var ue, fe = {},
            de = null,
            ye = null;
        if (V != null)
            for (ue in V.ref !== void 0 && (ye = V.ref), V.key !== void 0 && (de = "" + V.key), V) B.call(V, ue) && !ne.hasOwnProperty(ue) && (fe[ue] = V[ue]);
        var me = arguments.length - 2;
        if (me === 1) fe.children = oe;
        else if (1 < me) {
            for (var Te = Array(me), pt = 0; pt < me; pt++) Te[pt] = arguments[pt + 2];
            fe.children = Te
        }
        if (E && E.defaultProps)
            for (ue in me = E.defaultProps, me) fe[ue] === void 0 && (fe[ue] = me[ue]);
        return {
            $$typeof: n,
            type: E,
            key: de,
            ref: ye,
            props: fe,
            _owner: W.current
        }
    }

    function pe(E, V) {
        return {
            $$typeof: n,
            type: E.type,
            key: V,
            ref: E.ref,
            props: E.props,
            _owner: E._owner
        }
    }

    function Se(E) {
        return typeof E == "object" && E !== null && E.$$typeof === n
    }

    function nt(E) {
        var V = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + E.replace(/[=:]/g, function(oe) {
            return V[oe]
        })
    }
    var ht = /\/+/g;

    function Ye(E, V) {
        return typeof E == "object" && E !== null && E.key != null ? nt("" + E.key) : V.toString(36)
    }

    function rt(E, V, oe, ue, fe) {
        var de = typeof E;
        (de === "undefined" || de === "boolean") && (E = null);
        var ye = !1;
        if (E === null) ye = !0;
        else switch (de) {
            case "string":
            case "number":
                ye = !0;
                break;
            case "object":
                switch (E.$$typeof) {
                    case n:
                    case r:
                        ye = !0
                }
        }
        if (ye) return ye = E, fe = fe(ye), E = ue === "" ? "." + Ye(ye, 0) : ue, G(fe) ? (oe = "", E != null && (oe = E.replace(ht, "$&/") + "/"), rt(fe, V, oe, "", function(pt) {
            return pt
        })) : fe != null && (Se(fe) && (fe = pe(fe, oe + (!fe.key || ye && ye.key === fe.key ? "" : ("" + fe.key).replace(ht, "$&/") + "/") + E)), V.push(fe)), 1;
        if (ye = 0, ue = ue === "" ? "." : ue + ":", G(E))
            for (var me = 0; me < E.length; me++) {
                de = E[me];
                var Te = ue + Ye(de, me);
                ye += rt(de, V, oe, Te, fe)
            } else if (Te = S(E), typeof Te == "function")
                for (E = Te.call(E), me = 0; !(de = E.next()).done;) de = de.value, Te = ue + Ye(de, me++), ye += rt(de, V, oe, Te, fe);
            else if (de === "object") throw V = String(E), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.");
        return ye
    }

    function At(E, V, oe) {
        if (E == null) return E;
        var ue = [],
            fe = 0;
        return rt(E, ue, "", "", function(de) {
            return V.call(oe, de, fe++)
        }), ue
    }

    function Je(E) {
        if (E._status === -1) {
            var V = E._result;
            V = V(), V.then(function(oe) {
                (E._status === 0 || E._status === -1) && (E._status = 1, E._result = oe)
            }, function(oe) {
                (E._status === 0 || E._status === -1) && (E._status = 2, E._result = oe)
            }), E._status === -1 && (E._status = 0, E._result = V)
        }
        if (E._status === 1) return E._result.default;
        throw E._result
    }
    var ae = {
            current: null
        },
        $ = {
            transition: null
        },
        Z = {
            ReactCurrentDispatcher: ae,
            ReactCurrentBatchConfig: $,
            ReactCurrentOwner: W
        };

    function K() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return le.Children = {
        map: At,
        forEach: function(E, V, oe) {
            At(E, function() {
                V.apply(this, arguments)
            }, oe)
        },
        count: function(E) {
            var V = 0;
            return At(E, function() {
                V++
            }), V
        },
        toArray: function(E) {
            return At(E, function(V) {
                return V
            }) || []
        },
        only: function(E) {
            if (!Se(E)) throw Error("React.Children.only expected to receive a single React element child.");
            return E
        }
    }, le.Component = R, le.Fragment = s, le.Profiler = l, le.PureComponent = U, le.StrictMode = o, le.Suspense = p, le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z, le.act = K, le.cloneElement = function(E, V, oe) {
        if (E == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + E + ".");
        var ue = M({}, E.props),
            fe = E.key,
            de = E.ref,
            ye = E._owner;
        if (V != null) {
            if (V.ref !== void 0 && (de = V.ref, ye = W.current), V.key !== void 0 && (fe = "" + V.key), E.type && E.type.defaultProps) var me = E.type.defaultProps;
            for (Te in V) B.call(V, Te) && !ne.hasOwnProperty(Te) && (ue[Te] = V[Te] === void 0 && me !== void 0 ? me[Te] : V[Te])
        }
        var Te = arguments.length - 2;
        if (Te === 1) ue.children = oe;
        else if (1 < Te) {
            me = Array(Te);
            for (var pt = 0; pt < Te; pt++) me[pt] = arguments[pt + 2];
            ue.children = me
        }
        return {
            $$typeof: n,
            type: E.type,
            key: fe,
            ref: de,
            props: ue,
            _owner: ye
        }
    }, le.createContext = function(E) {
        return E = {
            $$typeof: c,
            _currentValue: E,
            _currentValue2: E,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, E.Provider = {
            $$typeof: d,
            _context: E
        }, E.Consumer = E
    }, le.createElement = J, le.createFactory = function(E) {
        var V = J.bind(null, E);
        return V.type = E, V
    }, le.createRef = function() {
        return {
            current: null
        }
    }, le.forwardRef = function(E) {
        return {
            $$typeof: h,
            render: E
        }
    }, le.isValidElement = Se, le.lazy = function(E) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: E
            },
            _init: Je
        }
    }, le.memo = function(E, V) {
        return {
            $$typeof: y,
            type: E,
            compare: V === void 0 ? null : V
        }
    }, le.startTransition = function(E) {
        var V = $.transition;
        $.transition = {};
        try {
            E()
        } finally {
            $.transition = V
        }
    }, le.unstable_act = K, le.useCallback = function(E, V) {
        return ae.current.useCallback(E, V)
    }, le.useContext = function(E) {
        return ae.current.useContext(E)
    }, le.useDebugValue = function() {}, le.useDeferredValue = function(E) {
        return ae.current.useDeferredValue(E)
    }, le.useEffect = function(E, V) {
        return ae.current.useEffect(E, V)
    }, le.useId = function() {
        return ae.current.useId()
    }, le.useImperativeHandle = function(E, V, oe) {
        return ae.current.useImperativeHandle(E, V, oe)
    }, le.useInsertionEffect = function(E, V) {
        return ae.current.useInsertionEffect(E, V)
    }, le.useLayoutEffect = function(E, V) {
        return ae.current.useLayoutEffect(E, V)
    }, le.useMemo = function(E, V) {
        return ae.current.useMemo(E, V)
    }, le.useReducer = function(E, V, oe) {
        return ae.current.useReducer(E, V, oe)
    }, le.useRef = function(E) {
        return ae.current.useRef(E)
    }, le.useState = function(E) {
        return ae.current.useState(E)
    }, le.useSyncExternalStore = function(E, V, oe) {
        return ae.current.useSyncExternalStore(E, V, oe)
    }, le.useTransition = function() {
        return ae.current.useTransition()
    }, le.version = "18.3.1", le
}
var Qd;

function gu() {
    return Qd || (Qd = 1, Cl.exports = N0()), Cl.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yd;

function L0() {
    if (Yd) return yi;
    Yd = 1;
    var n = gu(),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function c(h, p, y) {
        var g, v = {},
            S = null,
            k = null;
        y !== void 0 && (S = "" + y), p.key !== void 0 && (S = "" + p.key), p.ref !== void 0 && (k = p.ref);
        for (g in p) o.call(p, g) && !d.hasOwnProperty(g) && (v[g] = p[g]);
        if (h && h.defaultProps)
            for (g in p = h.defaultProps, p) v[g] === void 0 && (v[g] = p[g]);
        return {
            $$typeof: r,
            type: h,
            key: S,
            ref: k,
            props: v,
            _owner: l.current
        }
    }
    return yi.Fragment = s, yi.jsx = c, yi.jsxs = c, yi
}
var Jd;

function O0() {
    return Jd || (Jd = 1, El.exports = L0()), El.exports
}
var O = O0(),
    b = gu();
const j0 = Op(b);
var eo = {},
    kl = {
        exports: {}
    },
    ut = {},
    Pl = {
        exports: {}
    },
    Rl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zd;

function _0() {
    return Zd || (Zd = 1, function(n) {
        function r($, Z) {
            var K = $.length;
            $.push(Z);
            e: for (; 0 < K;) {
                var E = K - 1 >>> 1,
                    V = $[E];
                if (0 < l(V, Z)) $[E] = Z, $[K] = V, K = E;
                else break e
            }
        }

        function s($) {
            return $.length === 0 ? null : $[0]
        }

        function o($) {
            if ($.length === 0) return null;
            var Z = $[0],
                K = $.pop();
            if (K !== Z) {
                $[0] = K;
                e: for (var E = 0, V = $.length, oe = V >>> 1; E < oe;) {
                    var ue = 2 * (E + 1) - 1,
                        fe = $[ue],
                        de = ue + 1,
                        ye = $[de];
                    if (0 > l(fe, K)) de < V && 0 > l(ye, fe) ? ($[E] = ye, $[de] = K, E = de) : ($[E] = fe, $[ue] = K, E = ue);
                    else if (de < V && 0 > l(ye, K)) $[E] = ye, $[de] = K, E = de;
                    else break e
                }
            }
            return Z
        }

        function l($, Z) {
            var K = $.sortIndex - Z.sortIndex;
            return K !== 0 ? K : $.id - Z.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var d = performance;
            n.unstable_now = function() {
                return d.now()
            }
        } else {
            var c = Date,
                h = c.now();
            n.unstable_now = function() {
                return c.now() - h
            }
        }
        var p = [],
            y = [],
            g = 1,
            v = null,
            S = 3,
            k = !1,
            M = !1,
            P = !1,
            R = typeof setTimeout == "function" ? setTimeout : null,
            L = typeof clearTimeout == "function" ? clearTimeout : null,
            U = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function j($) {
            for (var Z = s(y); Z !== null;) {
                if (Z.callback === null) o(y);
                else if (Z.startTime <= $) o(y), Z.sortIndex = Z.expirationTime, r(p, Z);
                else break;
                Z = s(y)
            }
        }

        function G($) {
            if (P = !1, j($), !M)
                if (s(p) !== null) M = !0, Je(B);
                else {
                    var Z = s(y);
                    Z !== null && ae(G, Z.startTime - $)
                }
        }

        function B($, Z) {
            M = !1, P && (P = !1, L(J), J = -1), k = !0;
            var K = S;
            try {
                for (j(Z), v = s(p); v !== null && (!(v.expirationTime > Z) || $ && !nt());) {
                    var E = v.callback;
                    if (typeof E == "function") {
                        v.callback = null, S = v.priorityLevel;
                        var V = E(v.expirationTime <= Z);
                        Z = n.unstable_now(), typeof V == "function" ? v.callback = V : v === s(p) && o(p), j(Z)
                    } else o(p);
                    v = s(p)
                }
                if (v !== null) var oe = !0;
                else {
                    var ue = s(y);
                    ue !== null && ae(G, ue.startTime - Z), oe = !1
                }
                return oe
            } finally {
                v = null, S = K, k = !1
            }
        }
        var W = !1,
            ne = null,
            J = -1,
            pe = 5,
            Se = -1;

        function nt() {
            return !(n.unstable_now() - Se < pe)
        }

        function ht() {
            if (ne !== null) {
                var $ = n.unstable_now();
                Se = $;
                var Z = !0;
                try {
                    Z = ne(!0, $)
                } finally {
                    Z ? Ye() : (W = !1, ne = null)
                }
            } else W = !1
        }
        var Ye;
        if (typeof U == "function") Ye = function() {
            U(ht)
        };
        else if (typeof MessageChannel < "u") {
            var rt = new MessageChannel,
                At = rt.port2;
            rt.port1.onmessage = ht, Ye = function() {
                At.postMessage(null)
            }
        } else Ye = function() {
            R(ht, 0)
        };

        function Je($) {
            ne = $, W || (W = !0, Ye())
        }

        function ae($, Z) {
            J = R(function() {
                $(n.unstable_now())
            }, Z)
        }
        n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function($) {
            $.callback = null
        }, n.unstable_continueExecution = function() {
            M || k || (M = !0, Je(B))
        }, n.unstable_forceFrameRate = function($) {
            0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : pe = 0 < $ ? Math.floor(1e3 / $) : 5
        }, n.unstable_getCurrentPriorityLevel = function() {
            return S
        }, n.unstable_getFirstCallbackNode = function() {
            return s(p)
        }, n.unstable_next = function($) {
            switch (S) {
                case 1:
                case 2:
                case 3:
                    var Z = 3;
                    break;
                default:
                    Z = S
            }
            var K = S;
            S = Z;
            try {
                return $()
            } finally {
                S = K
            }
        }, n.unstable_pauseExecution = function() {}, n.unstable_requestPaint = function() {}, n.unstable_runWithPriority = function($, Z) {
            switch ($) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    $ = 3
            }
            var K = S;
            S = $;
            try {
                return Z()
            } finally {
                S = K
            }
        }, n.unstable_scheduleCallback = function($, Z, K) {
            var E = n.unstable_now();
            switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? E + K : E) : K = E, $) {
                case 1:
                    var V = -1;
                    break;
                case 2:
                    V = 250;
                    break;
                case 5:
                    V = 1073741823;
                    break;
                case 4:
                    V = 1e4;
                    break;
                default:
                    V = 5e3
            }
            return V = K + V, $ = {
                id: g++,
                callback: Z,
                priorityLevel: $,
                startTime: K,
                expirationTime: V,
                sortIndex: -1
            }, K > E ? ($.sortIndex = K, r(y, $), s(p) === null && $ === s(y) && (P ? (L(J), J = -1) : P = !0, ae(G, K - E))) : ($.sortIndex = V, r(p, $), M || k || (M = !0, Je(B))), $
        }, n.unstable_shouldYield = nt, n.unstable_wrapCallback = function($) {
            var Z = S;
            return function() {
                var K = S;
                S = Z;
                try {
                    return $.apply(this, arguments)
                } finally {
                    S = K
                }
            }
        }
    }(Rl)), Rl
}
var eh;

function V0() {
    return eh || (eh = 1, Pl.exports = _0()), Pl.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var th;

function F0() {
    if (th) return ut;
    th = 1;
    var n = gu(),
        r = V0();

    function s(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) t += "&args[]=" + encodeURIComponent(arguments[i]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var o = new Set,
        l = {};

    function d(e, t) {
        c(e, t), c(e + "Capture", t)
    }

    function c(e, t) {
        for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e])
    }
    var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        p = Object.prototype.hasOwnProperty,
        y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        g = {},
        v = {};

    function S(e) {
        return p.call(v, e) ? !0 : p.call(g, e) ? !1 : y.test(e) ? v[e] = !0 : (g[e] = !0, !1)
    }

    function k(e, t, i, a) {
        if (i !== null && i.type === 0) return !1;
        switch (typeof t) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return a ? !1 : i !== null ? !i.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1
        }
    }

    function M(e, t, i, a) {
        if (t === null || typeof t > "u" || k(e, t, i, a)) return !0;
        if (a) return !1;
        if (i !== null) switch (i.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
        return !1
    }

    function P(e, t, i, a, u, f, m) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = a, this.attributeNamespace = u, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = f, this.removeEmptyString = m
    }
    var R = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        R[e] = new P(e, 0, !1, e, null, !1, !1)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(e) {
        var t = e[0];
        R[t] = new P(t, 1, !1, e[1], null, !1, !1)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        R[e] = new P(e, 2, !1, e.toLowerCase(), null, !1, !1)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        R[e] = new P(e, 2, !1, e, null, !1, !1)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        R[e] = new P(e, 3, !1, e.toLowerCase(), null, !1, !1)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        R[e] = new P(e, 3, !0, e, null, !1, !1)
    }), ["capture", "download"].forEach(function(e) {
        R[e] = new P(e, 4, !1, e, null, !1, !1)
    }), ["cols", "rows", "size", "span"].forEach(function(e) {
        R[e] = new P(e, 6, !1, e, null, !1, !1)
    }), ["rowSpan", "start"].forEach(function(e) {
        R[e] = new P(e, 5, !1, e.toLowerCase(), null, !1, !1)
    });
    var L = /[\-:]([a-z])/g;

    function U(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(L, U);
        R[t] = new P(t, 1, !1, e, null, !1, !1)
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(L, U);
        R[t] = new P(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(L, U);
        R[t] = new P(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
        R[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1)
    }), R.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
        R[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0)
    });

    function j(e, t, i, a) {
        var u = R.hasOwnProperty(t) ? R[t] : null;
        (u !== null ? u.type !== 0 : a || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (M(t, i, u, a) && (i = null), a || u === null ? S(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : u.mustUseProperty ? e[u.propertyName] = i === null ? u.type === 3 ? !1 : "" : i : (t = u.attributeName, a = u.attributeNamespace, i === null ? e.removeAttribute(t) : (u = u.type, i = u === 3 || u === 4 && i === !0 ? "" : "" + i, a ? e.setAttributeNS(a, t, i) : e.setAttribute(t, i))))
    }
    var G = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        B = Symbol.for("react.element"),
        W = Symbol.for("react.portal"),
        ne = Symbol.for("react.fragment"),
        J = Symbol.for("react.strict_mode"),
        pe = Symbol.for("react.profiler"),
        Se = Symbol.for("react.provider"),
        nt = Symbol.for("react.context"),
        ht = Symbol.for("react.forward_ref"),
        Ye = Symbol.for("react.suspense"),
        rt = Symbol.for("react.suspense_list"),
        At = Symbol.for("react.memo"),
        Je = Symbol.for("react.lazy"),
        ae = Symbol.for("react.offscreen"),
        $ = Symbol.iterator;

    function Z(e) {
        return e === null || typeof e != "object" ? null : (e = $ && e[$] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var K = Object.assign,
        E;

    function V(e) {
        if (E === void 0) try {
            throw Error()
        } catch (i) {
            var t = i.stack.trim().match(/\n( *(at )?)/);
            E = t && t[1] || ""
        }
        return `
` + E + e
    }
    var oe = !1;

    function ue(e, t) {
        if (!e || oe) return "";
        oe = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                        throw Error()
                    }, Object.defineProperty(t.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (D) {
                        var a = D
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (D) {
                        a = D
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (D) {
                    a = D
                }
                e()
            }
        } catch (D) {
            if (D && a && typeof D.stack == "string") {
                for (var u = D.stack.split(`
`), f = a.stack.split(`
`), m = u.length - 1, w = f.length - 1; 1 <= m && 0 <= w && u[m] !== f[w];) w--;
                for (; 1 <= m && 0 <= w; m--, w--)
                    if (u[m] !== f[w]) {
                        if (m !== 1 || w !== 1)
                            do
                                if (m--, w--, 0 > w || u[m] !== f[w]) {
                                    var x = `
` + u[m].replace(" at new ", " at ");
                                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), x
                                } while (1 <= m && 0 <= w);
                        break
                    }
            }
        } finally {
            oe = !1, Error.prepareStackTrace = i
        }
        return (e = e ? e.displayName || e.name : "") ? V(e) : ""
    }

    function fe(e) {
        switch (e.tag) {
            case 5:
                return V(e.type);
            case 16:
                return V("Lazy");
            case 13:
                return V("Suspense");
            case 19:
                return V("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = ue(e.type, !1), e;
            case 11:
                return e = ue(e.type.render, !1), e;
            case 1:
                return e = ue(e.type, !0), e;
            default:
                return ""
        }
    }

    function de(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case ne:
                return "Fragment";
            case W:
                return "Portal";
            case pe:
                return "Profiler";
            case J:
                return "StrictMode";
            case Ye:
                return "Suspense";
            case rt:
                return "SuspenseList"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case nt:
                return (e.displayName || "Context") + ".Consumer";
            case Se:
                return (e._context.displayName || "Context") + ".Provider";
            case ht:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case At:
                return t = e.displayName || null, t !== null ? t : de(e.type) || "Memo";
            case Je:
                t = e._payload, e = e._init;
                try {
                    return de(e(t))
                } catch {}
        }
        return null
    }

    function ye(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return de(t);
            case 8:
                return t === J ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function") return t.displayName || t.name || null;
                if (typeof t == "string") return t
        }
        return null
    }

    function me(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function Te(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function pt(e) {
        var t = Te(e) ? "checked" : "value",
            i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            a = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
            var u = i.get,
                f = i.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(m) {
                    a = "" + m, f.call(this, m)
                }
            }), Object.defineProperty(e, t, {
                enumerable: i.enumerable
            }), {
                getValue: function() {
                    return a
                },
                setValue: function(m) {
                    a = "" + m
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function Hi(e) {
        e._valueTracker || (e._valueTracker = pt(e))
    }

    function ec(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var i = t.getValue(),
            a = "";
        return e && (a = Te(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== i ? (t.setValue(e), !0) : !1
    }

    function Wi(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }

    function Do(e, t) {
        var i = t.checked;
        return K({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: i ?? e._wrapperState.initialChecked
        })
    }

    function tc(e, t) {
        var i = t.defaultValue == null ? "" : t.defaultValue,
            a = t.checked != null ? t.checked : t.defaultChecked;
        i = me(t.value != null ? t.value : i), e._wrapperState = {
            initialChecked: a,
            initialValue: i,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }

    function nc(e, t) {
        t = t.checked, t != null && j(e, "checked", t, !1)
    }

    function No(e, t) {
        nc(e, t);
        var i = me(t.value),
            a = t.type;
        if (i != null) a === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
        else if (a === "submit" || a === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? Lo(e, t.type, i) : t.hasOwnProperty("defaultValue") && Lo(e, t.type, me(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }

    function rc(e, t, i) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var a = t.type;
            if (!(a !== "submit" && a !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, i || t === e.value || (e.value = t), e.defaultValue = t
        }
        i = e.name, i !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, i !== "" && (e.name = i)
    }

    function Lo(e, t, i) {
        (t !== "number" || Wi(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i))
    }
    var Lr = Array.isArray;

    function Qn(e, t, i, a) {
        if (e = e.options, t) {
            t = {};
            for (var u = 0; u < i.length; u++) t["$" + i[u]] = !0;
            for (i = 0; i < e.length; i++) u = t.hasOwnProperty("$" + e[i].value), e[i].selected !== u && (e[i].selected = u), u && a && (e[i].defaultSelected = !0)
        } else {
            for (i = "" + me(i), t = null, u = 0; u < e.length; u++) {
                if (e[u].value === i) {
                    e[u].selected = !0, a && (e[u].defaultSelected = !0);
                    return
                }
                t !== null || e[u].disabled || (t = e[u])
            }
            t !== null && (t.selected = !0)
        }
    }

    function Oo(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
        return K({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function ic(e, t) {
        var i = t.value;
        if (i == null) {
            if (i = t.children, t = t.defaultValue, i != null) {
                if (t != null) throw Error(s(92));
                if (Lr(i)) {
                    if (1 < i.length) throw Error(s(93));
                    i = i[0]
                }
                t = i
            }
            t == null && (t = ""), i = t
        }
        e._wrapperState = {
            initialValue: me(i)
        }
    }

    function sc(e, t) {
        var i = me(t.value),
            a = me(t.defaultValue);
        i != null && (i = "" + i, i !== e.value && (e.value = i), t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)), a != null && (e.defaultValue = "" + a)
    }

    function oc(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }

    function ac(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function jo(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? ac(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var Ki, lc = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, a, u) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, i, a, u)
            })
        } : e
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (Ki = Ki || document.createElement("div"), Ki.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ki.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    });

    function Or(e, t) {
        if (t) {
            var i = e.firstChild;
            if (i && i === e.lastChild && i.nodeType === 3) {
                i.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var jr = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        _g = ["Webkit", "ms", "Moz", "O"];
    Object.keys(jr).forEach(function(e) {
        _g.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), jr[t] = jr[e]
        })
    });

    function uc(e, t, i) {
        return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || jr.hasOwnProperty(e) && jr[e] ? ("" + t).trim() : t + "px"
    }

    function cc(e, t) {
        e = e.style;
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                var a = i.indexOf("--") === 0,
                    u = uc(i, t[i], a);
                i === "float" && (i = "cssFloat"), a ? e.setProperty(i, u) : e[i] = u
            }
    }
    var Vg = K({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function _o(e, t) {
        if (t) {
            if (Vg[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(s(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61))
            }
            if (t.style != null && typeof t.style != "object") throw Error(s(62))
        }
    }

    function Vo(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var Fo = null;

    function Io(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var Bo = null,
        Yn = null,
        Jn = null;

    function fc(e) {
        if (e = ni(e)) {
            if (typeof Bo != "function") throw Error(s(280));
            var t = e.stateNode;
            t && (t = ms(t), Bo(e.stateNode, e.type, t))
        }
    }

    function dc(e) {
        Yn ? Jn ? Jn.push(e) : Jn = [e] : Yn = e
    }

    function hc() {
        if (Yn) {
            var e = Yn,
                t = Jn;
            if (Jn = Yn = null, fc(e), t)
                for (e = 0; e < t.length; e++) fc(t[e])
        }
    }

    function pc(e, t) {
        return e(t)
    }

    function mc() {}
    var zo = !1;

    function gc(e, t, i) {
        if (zo) return e(t, i);
        zo = !0;
        try {
            return pc(e, t, i)
        } finally {
            zo = !1, (Yn !== null || Jn !== null) && (mc(), hc())
        }
    }

    function _r(e, t) {
        var i = e.stateNode;
        if (i === null) return null;
        var a = ms(i);
        if (a === null) return null;
        i = a[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (i && typeof i != "function") throw Error(s(231, t, typeof i));
        return i
    }
    var Uo = !1;
    if (h) try {
        var Vr = {};
        Object.defineProperty(Vr, "passive", {
            get: function() {
                Uo = !0
            }
        }), window.addEventListener("test", Vr, Vr), window.removeEventListener("test", Vr, Vr)
    } catch {
        Uo = !1
    }

    function Fg(e, t, i, a, u, f, m, w, x) {
        var D = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(i, D)
        } catch (F) {
            this.onError(F)
        }
    }
    var Fr = !1,
        qi = null,
        Gi = !1,
        $o = null,
        Ig = {
            onError: function(e) {
                Fr = !0, qi = e
            }
        };

    function Bg(e, t, i, a, u, f, m, w, x) {
        Fr = !1, qi = null, Fg.apply(Ig, arguments)
    }

    function zg(e, t, i, a, u, f, m, w, x) {
        if (Bg.apply(this, arguments), Fr) {
            if (Fr) {
                var D = qi;
                Fr = !1, qi = null
            } else throw Error(s(198));
            Gi || (Gi = !0, $o = D)
        }
    }

    function An(e) {
        var t = e,
            i = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, (t.flags & 4098) !== 0 && (i = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? i : null
    }

    function yc(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function vc(e) {
        if (An(e) !== e) throw Error(s(188))
    }

    function Ug(e) {
        var t = e.alternate;
        if (!t) {
            if (t = An(e), t === null) throw Error(s(188));
            return t !== e ? null : e
        }
        for (var i = e, a = t;;) {
            var u = i.return;
            if (u === null) break;
            var f = u.alternate;
            if (f === null) {
                if (a = u.return, a !== null) {
                    i = a;
                    continue
                }
                break
            }
            if (u.child === f.child) {
                for (f = u.child; f;) {
                    if (f === i) return vc(u), e;
                    if (f === a) return vc(u), t;
                    f = f.sibling
                }
                throw Error(s(188))
            }
            if (i.return !== a.return) i = u, a = f;
            else {
                for (var m = !1, w = u.child; w;) {
                    if (w === i) {
                        m = !0, i = u, a = f;
                        break
                    }
                    if (w === a) {
                        m = !0, a = u, i = f;
                        break
                    }
                    w = w.sibling
                }
                if (!m) {
                    for (w = f.child; w;) {
                        if (w === i) {
                            m = !0, i = f, a = u;
                            break
                        }
                        if (w === a) {
                            m = !0, a = f, i = u;
                            break
                        }
                        w = w.sibling
                    }
                    if (!m) throw Error(s(189))
                }
            }
            if (i.alternate !== a) throw Error(s(190))
        }
        if (i.tag !== 3) throw Error(s(188));
        return i.stateNode.current === i ? e : t
    }

    function wc(e) {
        return e = Ug(e), e !== null ? xc(e) : null
    }

    function xc(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null;) {
            var t = xc(e);
            if (t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var Sc = r.unstable_scheduleCallback,
        Tc = r.unstable_cancelCallback,
        $g = r.unstable_shouldYield,
        bg = r.unstable_requestPaint,
        De = r.unstable_now,
        Hg = r.unstable_getCurrentPriorityLevel,
        bo = r.unstable_ImmediatePriority,
        Ec = r.unstable_UserBlockingPriority,
        Xi = r.unstable_NormalPriority,
        Wg = r.unstable_LowPriority,
        Cc = r.unstable_IdlePriority,
        Qi = null,
        It = null;

    function Kg(e) {
        if (It && typeof It.onCommitFiberRoot == "function") try {
            It.onCommitFiberRoot(Qi, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
    }
    var Mt = Math.clz32 ? Math.clz32 : Xg,
        qg = Math.log,
        Gg = Math.LN2;

    function Xg(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (qg(e) / Gg | 0) | 0
    }
    var Yi = 64,
        Ji = 4194304;

    function Ir(e) {
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e
        }
    }

    function Zi(e, t) {
        var i = e.pendingLanes;
        if (i === 0) return 0;
        var a = 0,
            u = e.suspendedLanes,
            f = e.pingedLanes,
            m = i & 268435455;
        if (m !== 0) {
            var w = m & ~u;
            w !== 0 ? a = Ir(w) : (f &= m, f !== 0 && (a = Ir(f)))
        } else m = i & ~u, m !== 0 ? a = Ir(m) : f !== 0 && (a = Ir(f));
        if (a === 0) return 0;
        if (t !== 0 && t !== a && (t & u) === 0 && (u = a & -a, f = t & -t, u >= f || u === 16 && (f & 4194240) !== 0)) return t;
        if ((a & 4) !== 0 && (a |= i & 16), t = e.entangledLanes, t !== 0)
            for (e = e.entanglements, t &= a; 0 < t;) i = 31 - Mt(t), u = 1 << i, a |= e[i], t &= ~u;
        return a
    }

    function Qg(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function Yg(e, t) {
        for (var i = e.suspendedLanes, a = e.pingedLanes, u = e.expirationTimes, f = e.pendingLanes; 0 < f;) {
            var m = 31 - Mt(f),
                w = 1 << m,
                x = u[m];
            x === -1 ? ((w & i) === 0 || (w & a) !== 0) && (u[m] = Qg(w, t)) : x <= t && (e.expiredLanes |= w), f &= ~w
        }
    }

    function Ho(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }

    function kc() {
        var e = Yi;
        return Yi <<= 1, (Yi & 4194240) === 0 && (Yi = 64), e
    }

    function Wo(e) {
        for (var t = [], i = 0; 31 > i; i++) t.push(e);
        return t
    }

    function Br(e, t, i) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Mt(t), e[t] = i
    }

    function Jg(e, t) {
        var i = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var a = e.eventTimes;
        for (e = e.expirationTimes; 0 < i;) {
            var u = 31 - Mt(i),
                f = 1 << u;
            t[u] = 0, a[u] = -1, e[u] = -1, i &= ~f
        }
    }

    function Ko(e, t) {
        var i = e.entangledLanes |= t;
        for (e = e.entanglements; i;) {
            var a = 31 - Mt(i),
                u = 1 << a;
            u & t | e[a] & t && (e[a] |= t), i &= ~u
        }
    }
    var ge = 0;

    function Pc(e) {
        return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Rc, qo, Ac, Mc, Dc, Go = !1,
        es = [],
        sn = null,
        on = null,
        an = null,
        zr = new Map,
        Ur = new Map,
        ln = [],
        Zg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function Nc(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                sn = null;
                break;
            case "dragenter":
            case "dragleave":
                on = null;
                break;
            case "mouseover":
            case "mouseout":
                an = null;
                break;
            case "pointerover":
            case "pointerout":
                zr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Ur.delete(t.pointerId)
        }
    }

    function $r(e, t, i, a, u, f) {
        return e === null || e.nativeEvent !== f ? (e = {
            blockedOn: t,
            domEventName: i,
            eventSystemFlags: a,
            nativeEvent: f,
            targetContainers: [u]
        }, t !== null && (t = ni(t), t !== null && qo(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e)
    }

    function ey(e, t, i, a, u) {
        switch (t) {
            case "focusin":
                return sn = $r(sn, e, t, i, a, u), !0;
            case "dragenter":
                return on = $r(on, e, t, i, a, u), !0;
            case "mouseover":
                return an = $r(an, e, t, i, a, u), !0;
            case "pointerover":
                var f = u.pointerId;
                return zr.set(f, $r(zr.get(f) || null, e, t, i, a, u)), !0;
            case "gotpointercapture":
                return f = u.pointerId, Ur.set(f, $r(Ur.get(f) || null, e, t, i, a, u)), !0
        }
        return !1
    }

    function Lc(e) {
        var t = Mn(e.target);
        if (t !== null) {
            var i = An(t);
            if (i !== null) {
                if (t = i.tag, t === 13) {
                    if (t = yc(i), t !== null) {
                        e.blockedOn = t, Dc(e.priority, function() {
                            Ac(i)
                        });
                        return
                    }
                } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function ts(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var i = Qo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (i === null) {
                i = e.nativeEvent;
                var a = new i.constructor(i.type, i);
                Fo = a, i.target.dispatchEvent(a), Fo = null
            } else return t = ni(i), t !== null && qo(t), e.blockedOn = i, !1;
            t.shift()
        }
        return !0
    }

    function Oc(e, t, i) {
        ts(e) && i.delete(t)
    }

    function ty() {
        Go = !1, sn !== null && ts(sn) && (sn = null), on !== null && ts(on) && (on = null), an !== null && ts(an) && (an = null), zr.forEach(Oc), Ur.forEach(Oc)
    }

    function br(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Go || (Go = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, ty)))
    }

    function Hr(e) {
        function t(u) {
            return br(u, e)
        }
        if (0 < es.length) {
            br(es[0], e);
            for (var i = 1; i < es.length; i++) {
                var a = es[i];
                a.blockedOn === e && (a.blockedOn = null)
            }
        }
        for (sn !== null && br(sn, e), on !== null && br(on, e), an !== null && br(an, e), zr.forEach(t), Ur.forEach(t), i = 0; i < ln.length; i++) a = ln[i], a.blockedOn === e && (a.blockedOn = null);
        for (; 0 < ln.length && (i = ln[0], i.blockedOn === null);) Lc(i), i.blockedOn === null && ln.shift()
    }
    var Zn = G.ReactCurrentBatchConfig,
        ns = !0;

    function ny(e, t, i, a) {
        var u = ge,
            f = Zn.transition;
        Zn.transition = null;
        try {
            ge = 1, Xo(e, t, i, a)
        } finally {
            ge = u, Zn.transition = f
        }
    }

    function ry(e, t, i, a) {
        var u = ge,
            f = Zn.transition;
        Zn.transition = null;
        try {
            ge = 4, Xo(e, t, i, a)
        } finally {
            ge = u, Zn.transition = f
        }
    }

    function Xo(e, t, i, a) {
        if (ns) {
            var u = Qo(e, t, i, a);
            if (u === null) ha(e, t, a, rs, i), Nc(e, a);
            else if (ey(u, e, t, i, a)) a.stopPropagation();
            else if (Nc(e, a), t & 4 && -1 < Zg.indexOf(e)) {
                for (; u !== null;) {
                    var f = ni(u);
                    if (f !== null && Rc(f), f = Qo(e, t, i, a), f === null && ha(e, t, a, rs, i), f === u) break;
                    u = f
                }
                u !== null && a.stopPropagation()
            } else ha(e, t, a, null, i)
        }
    }
    var rs = null;

    function Qo(e, t, i, a) {
        if (rs = null, e = Io(a), e = Mn(e), e !== null)
            if (t = An(e), t === null) e = null;
            else if (i = t.tag, i === 13) {
            if (e = yc(t), e !== null) return e;
            e = null
        } else if (i === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else t !== e && (e = null);
        return rs = e, null
    }

    function jc(e) {
        switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (Hg()) {
                    case bo:
                        return 1;
                    case Ec:
                        return 4;
                    case Xi:
                    case Wg:
                        return 16;
                    case Cc:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var un = null,
        Yo = null,
        is = null;

    function _c() {
        if (is) return is;
        var e, t = Yo,
            i = t.length,
            a, u = "value" in un ? un.value : un.textContent,
            f = u.length;
        for (e = 0; e < i && t[e] === u[e]; e++);
        var m = i - e;
        for (a = 1; a <= m && t[i - a] === u[f - a]; a++);
        return is = u.slice(e, 1 < a ? 1 - a : void 0)
    }

    function ss(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function os() {
        return !0
    }

    function Vc() {
        return !1
    }

    function mt(e) {
        function t(i, a, u, f, m) {
            this._reactName = i, this._targetInst = u, this.type = a, this.nativeEvent = f, this.target = m, this.currentTarget = null;
            for (var w in e) e.hasOwnProperty(w) && (i = e[w], this[w] = i ? i(f) : f[w]);
            return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? os : Vc, this.isPropagationStopped = Vc, this
        }
        return K(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var i = this.nativeEvent;
                i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = os)
            },
            stopPropagation: function() {
                var i = this.nativeEvent;
                i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = os)
            },
            persist: function() {},
            isPersistent: os
        }), t
    }
    var er = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Jo = mt(er),
        Wr = K({}, er, {
            view: 0,
            detail: 0
        }),
        iy = mt(Wr),
        Zo, ea, Kr, as = K({}, Wr, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: na,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Kr && (Kr && e.type === "mousemove" ? (Zo = e.screenX - Kr.screenX, ea = e.screenY - Kr.screenY) : ea = Zo = 0, Kr = e), Zo)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : ea
            }
        }),
        Fc = mt(as),
        sy = K({}, as, {
            dataTransfer: 0
        }),
        oy = mt(sy),
        ay = K({}, Wr, {
            relatedTarget: 0
        }),
        ta = mt(ay),
        ly = K({}, er, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        uy = mt(ly),
        cy = K({}, er, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        fy = mt(cy),
        dy = K({}, er, {
            data: 0
        }),
        Ic = mt(dy),
        hy = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        py = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        my = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function gy(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = my[e]) ? !!t[e] : !1
    }

    function na() {
        return gy
    }
    var yy = K({}, Wr, {
            key: function(e) {
                if (e.key) {
                    var t = hy[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = ss(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? py[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: na,
            charCode: function(e) {
                return e.type === "keypress" ? ss(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? ss(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        vy = mt(yy),
        wy = K({}, as, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Bc = mt(wy),
        xy = K({}, Wr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: na
        }),
        Sy = mt(xy),
        Ty = K({}, er, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Ey = mt(Ty),
        Cy = K({}, as, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        ky = mt(Cy),
        Py = [9, 13, 27, 32],
        ra = h && "CompositionEvent" in window,
        qr = null;
    h && "documentMode" in document && (qr = document.documentMode);
    var Ry = h && "TextEvent" in window && !qr,
        zc = h && (!ra || qr && 8 < qr && 11 >= qr),
        Uc = " ",
        $c = !1;

    function bc(e, t) {
        switch (e) {
            case "keyup":
                return Py.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Hc(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var tr = !1;

    function Ay(e, t) {
        switch (e) {
            case "compositionend":
                return Hc(t);
            case "keypress":
                return t.which !== 32 ? null : ($c = !0, Uc);
            case "textInput":
                return e = t.data, e === Uc && $c ? null : e;
            default:
                return null
        }
    }

    function My(e, t) {
        if (tr) return e === "compositionend" || !ra && bc(e, t) ? (e = _c(), is = Yo = un = null, tr = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return zc && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var Dy = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Wc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Dy[e.type] : t === "textarea"
    }

    function Kc(e, t, i, a) {
        dc(a), t = ds(t, "onChange"), 0 < t.length && (i = new Jo("onChange", "change", null, i, a), e.push({
            event: i,
            listeners: t
        }))
    }
    var Gr = null,
        Xr = null;

    function Ny(e) {
        ff(e, 0)
    }

    function ls(e) {
        var t = or(e);
        if (ec(t)) return e
    }

    function Ly(e, t) {
        if (e === "change") return t
    }
    var qc = !1;
    if (h) {
        var ia;
        if (h) {
            var sa = "oninput" in document;
            if (!sa) {
                var Gc = document.createElement("div");
                Gc.setAttribute("oninput", "return;"), sa = typeof Gc.oninput == "function"
            }
            ia = sa
        } else ia = !1;
        qc = ia && (!document.documentMode || 9 < document.documentMode)
    }

    function Xc() {
        Gr && (Gr.detachEvent("onpropertychange", Qc), Xr = Gr = null)
    }

    function Qc(e) {
        if (e.propertyName === "value" && ls(Xr)) {
            var t = [];
            Kc(t, Xr, e, Io(e)), gc(Ny, t)
        }
    }

    function Oy(e, t, i) {
        e === "focusin" ? (Xc(), Gr = t, Xr = i, Gr.attachEvent("onpropertychange", Qc)) : e === "focusout" && Xc()
    }

    function jy(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return ls(Xr)
    }

    function _y(e, t) {
        if (e === "click") return ls(t)
    }

    function Vy(e, t) {
        if (e === "input" || e === "change") return ls(t)
    }

    function Fy(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Dt = typeof Object.is == "function" ? Object.is : Fy;

    function Qr(e, t) {
        if (Dt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var i = Object.keys(e),
            a = Object.keys(t);
        if (i.length !== a.length) return !1;
        for (a = 0; a < i.length; a++) {
            var u = i[a];
            if (!p.call(t, u) || !Dt(e[u], t[u])) return !1
        }
        return !0
    }

    function Yc(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function Jc(e, t) {
        var i = Yc(e);
        e = 0;
        for (var a; i;) {
            if (i.nodeType === 3) {
                if (a = e + i.textContent.length, e <= t && a >= t) return {
                    node: i,
                    offset: t - e
                };
                e = a
            }
            e: {
                for (; i;) {
                    if (i.nextSibling) {
                        i = i.nextSibling;
                        break e
                    }
                    i = i.parentNode
                }
                i = void 0
            }
            i = Yc(i)
        }
    }

    function Zc(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function ef() {
        for (var e = window, t = Wi(); t instanceof e.HTMLIFrameElement;) {
            try {
                var i = typeof t.contentWindow.location.href == "string"
            } catch {
                i = !1
            }
            if (i) e = t.contentWindow;
            else break;
            t = Wi(e.document)
        }
        return t
    }

    function oa(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }

    function Iy(e) {
        var t = ef(),
            i = e.focusedElem,
            a = e.selectionRange;
        if (t !== i && i && i.ownerDocument && Zc(i.ownerDocument.documentElement, i)) {
            if (a !== null && oa(i)) {
                if (t = a.start, e = a.end, e === void 0 && (e = t), "selectionStart" in i) i.selectionStart = t, i.selectionEnd = Math.min(e, i.value.length);
                else if (e = (t = i.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var u = i.textContent.length,
                        f = Math.min(a.start, u);
                    a = a.end === void 0 ? f : Math.min(a.end, u), !e.extend && f > a && (u = a, a = f, f = u), u = Jc(i, f);
                    var m = Jc(i, a);
                    u && m && (e.rangeCount !== 1 || e.anchorNode !== u.node || e.anchorOffset !== u.offset || e.focusNode !== m.node || e.focusOffset !== m.offset) && (t = t.createRange(), t.setStart(u.node, u.offset), e.removeAllRanges(), f > a ? (e.addRange(t), e.extend(m.node, m.offset)) : (t.setEnd(m.node, m.offset), e.addRange(t)))
                }
            }
            for (t = [], e = i; e = e.parentNode;) e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++) e = t[i], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
        }
    }
    var By = h && "documentMode" in document && 11 >= document.documentMode,
        nr = null,
        aa = null,
        Yr = null,
        la = !1;

    function tf(e, t, i) {
        var a = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
        la || nr == null || nr !== Wi(a) || (a = nr, "selectionStart" in a && oa(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }), Yr && Qr(Yr, a) || (Yr = a, a = ds(aa, "onSelect"), 0 < a.length && (t = new Jo("onSelect", "select", null, t, i), e.push({
            event: t,
            listeners: a
        }), t.target = nr)))
    }

    function us(e, t) {
        var i = {};
        return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i
    }
    var rr = {
            animationend: us("Animation", "AnimationEnd"),
            animationiteration: us("Animation", "AnimationIteration"),
            animationstart: us("Animation", "AnimationStart"),
            transitionend: us("Transition", "TransitionEnd")
        },
        ua = {},
        nf = {};
    h && (nf = document.createElement("div").style, "AnimationEvent" in window || (delete rr.animationend.animation, delete rr.animationiteration.animation, delete rr.animationstart.animation), "TransitionEvent" in window || delete rr.transitionend.transition);

    function cs(e) {
        if (ua[e]) return ua[e];
        if (!rr[e]) return e;
        var t = rr[e],
            i;
        for (i in t)
            if (t.hasOwnProperty(i) && i in nf) return ua[e] = t[i];
        return e
    }
    var rf = cs("animationend"),
        sf = cs("animationiteration"),
        of = cs("animationstart"),
        af = cs("transitionend"),
        lf = new Map,
        uf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function cn(e, t) {
        lf.set(e, t), d(t, [e])
    }
    for (var ca = 0; ca < uf.length; ca++) {
        var fa = uf[ca],
            zy = fa.toLowerCase(),
            Uy = fa[0].toUpperCase() + fa.slice(1);
        cn(zy, "on" + Uy)
    }
    cn(rf, "onAnimationEnd"), cn(sf, "onAnimationIteration"), cn(of, "onAnimationStart"), cn("dblclick", "onDoubleClick"), cn("focusin", "onFocus"), cn("focusout", "onBlur"), cn(af, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), d("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), d("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), d("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Jr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        $y = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));

    function cf(e, t, i) {
        var a = e.type || "unknown-event";
        e.currentTarget = i, zg(a, t, void 0, e), e.currentTarget = null
    }

    function ff(e, t) {
        t = (t & 4) !== 0;
        for (var i = 0; i < e.length; i++) {
            var a = e[i],
                u = a.event;
            a = a.listeners;
            e: {
                var f = void 0;
                if (t)
                    for (var m = a.length - 1; 0 <= m; m--) {
                        var w = a[m],
                            x = w.instance,
                            D = w.currentTarget;
                        if (w = w.listener, x !== f && u.isPropagationStopped()) break e;
                        cf(u, w, D), f = x
                    } else
                        for (m = 0; m < a.length; m++) {
                            if (w = a[m], x = w.instance, D = w.currentTarget, w = w.listener, x !== f && u.isPropagationStopped()) break e;
                            cf(u, w, D), f = x
                        }
            }
        }
        if (Gi) throw e = $o, Gi = !1, $o = null, e
    }

    function we(e, t) {
        var i = t[wa];
        i === void 0 && (i = t[wa] = new Set);
        var a = e + "__bubble";
        i.has(a) || (df(t, e, 2, !1), i.add(a))
    }

    function da(e, t, i) {
        var a = 0;
        t && (a |= 4), df(i, e, a, t)
    }
    var fs = "_reactListening" + Math.random().toString(36).slice(2);

    function Zr(e) {
        if (!e[fs]) {
            e[fs] = !0, o.forEach(function(i) {
                i !== "selectionchange" && ($y.has(i) || da(i, !1, e), da(i, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[fs] || (t[fs] = !0, da("selectionchange", !1, t))
        }
    }

    function df(e, t, i, a) {
        switch (jc(t)) {
            case 1:
                var u = ny;
                break;
            case 4:
                u = ry;
                break;
            default:
                u = Xo
        }
        i = u.bind(null, t, i, e), u = void 0, !Uo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), a ? u !== void 0 ? e.addEventListener(t, i, {
            capture: !0,
            passive: u
        }) : e.addEventListener(t, i, !0) : u !== void 0 ? e.addEventListener(t, i, {
            passive: u
        }) : e.addEventListener(t, i, !1)
    }

    function ha(e, t, i, a, u) {
        var f = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for (;;) {
            if (a === null) return;
            var m = a.tag;
            if (m === 3 || m === 4) {
                var w = a.stateNode.containerInfo;
                if (w === u || w.nodeType === 8 && w.parentNode === u) break;
                if (m === 4)
                    for (m = a.return; m !== null;) {
                        var x = m.tag;
                        if ((x === 3 || x === 4) && (x = m.stateNode.containerInfo, x === u || x.nodeType === 8 && x.parentNode === u)) return;
                        m = m.return
                    }
                for (; w !== null;) {
                    if (m = Mn(w), m === null) return;
                    if (x = m.tag, x === 5 || x === 6) {
                        a = f = m;
                        continue e
                    }
                    w = w.parentNode
                }
            }
            a = a.return
        }
        gc(function() {
            var D = f,
                F = Io(i),
                I = [];
            e: {
                var _ = lf.get(e);
                if (_ !== void 0) {
                    var H = Jo,
                        X = e;
                    switch (e) {
                        case "keypress":
                            if (ss(i) === 0) break e;
                        case "keydown":
                        case "keyup":
                            H = vy;
                            break;
                        case "focusin":
                            X = "focus", H = ta;
                            break;
                        case "focusout":
                            X = "blur", H = ta;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            H = ta;
                            break;
                        case "click":
                            if (i.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            H = Fc;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            H = oy;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            H = Sy;
                            break;
                        case rf:
                        case sf:
                        case of:
                            H = uy;
                            break;
                        case af:
                            H = Ey;
                            break;
                        case "scroll":
                            H = iy;
                            break;
                        case "wheel":
                            H = ky;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            H = fy;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            H = Bc
                    }
                    var Q = (t & 4) !== 0,
                        Ne = !Q && e === "scroll",
                        C = Q ? _ !== null ? _ + "Capture" : null : _;
                    Q = [];
                    for (var T = D, A; T !== null;) {
                        A = T;
                        var z = A.stateNode;
                        if (A.tag === 5 && z !== null && (A = z, C !== null && (z = _r(T, C), z != null && Q.push(ei(T, z, A)))), Ne) break;
                        T = T.return
                    }
                    0 < Q.length && (_ = new H(_, X, null, i, F), I.push({
                        event: _,
                        listeners: Q
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (_ = e === "mouseover" || e === "pointerover", H = e === "mouseout" || e === "pointerout", _ && i !== Fo && (X = i.relatedTarget || i.fromElement) && (Mn(X) || X[Gt])) break e;
                    if ((H || _) && (_ = F.window === F ? F : (_ = F.ownerDocument) ? _.defaultView || _.parentWindow : window, H ? (X = i.relatedTarget || i.toElement, H = D, X = X ? Mn(X) : null, X !== null && (Ne = An(X), X !== Ne || X.tag !== 5 && X.tag !== 6) && (X = null)) : (H = null, X = D), H !== X)) {
                        if (Q = Fc, z = "onMouseLeave", C = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (Q = Bc, z = "onPointerLeave", C = "onPointerEnter", T = "pointer"), Ne = H == null ? _ : or(H), A = X == null ? _ : or(X), _ = new Q(z, T + "leave", H, i, F), _.target = Ne, _.relatedTarget = A, z = null, Mn(F) === D && (Q = new Q(C, T + "enter", X, i, F), Q.target = A, Q.relatedTarget = Ne, z = Q), Ne = z, H && X) t: {
                            for (Q = H, C = X, T = 0, A = Q; A; A = ir(A)) T++;
                            for (A = 0, z = C; z; z = ir(z)) A++;
                            for (; 0 < T - A;) Q = ir(Q),
                            T--;
                            for (; 0 < A - T;) C = ir(C),
                            A--;
                            for (; T--;) {
                                if (Q === C || C !== null && Q === C.alternate) break t;
                                Q = ir(Q), C = ir(C)
                            }
                            Q = null
                        }
                        else Q = null;
                        H !== null && hf(I, _, H, Q, !1), X !== null && Ne !== null && hf(I, Ne, X, Q, !0)
                    }
                }
                e: {
                    if (_ = D ? or(D) : window, H = _.nodeName && _.nodeName.toLowerCase(), H === "select" || H === "input" && _.type === "file") var Y = Ly;
                    else if (Wc(_))
                        if (qc) Y = Vy;
                        else {
                            Y = jy;
                            var ee = Oy
                        }
                    else(H = _.nodeName) && H.toLowerCase() === "input" && (_.type === "checkbox" || _.type === "radio") && (Y = _y);
                    if (Y && (Y = Y(e, D))) {
                        Kc(I, Y, i, F);
                        break e
                    }
                    ee && ee(e, _, D),
                    e === "focusout" && (ee = _._wrapperState) && ee.controlled && _.type === "number" && Lo(_, "number", _.value)
                }
                switch (ee = D ? or(D) : window, e) {
                    case "focusin":
                        (Wc(ee) || ee.contentEditable === "true") && (nr = ee, aa = D, Yr = null);
                        break;
                    case "focusout":
                        Yr = aa = nr = null;
                        break;
                    case "mousedown":
                        la = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        la = !1, tf(I, i, F);
                        break;
                    case "selectionchange":
                        if (By) break;
                    case "keydown":
                    case "keyup":
                        tf(I, i, F)
                }
                var te;
                if (ra) e: {
                    switch (e) {
                        case "compositionstart":
                            var ie = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ie = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ie = "onCompositionUpdate";
                            break e
                    }
                    ie = void 0
                }
                else tr ? bc(e, i) && (ie = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (ie = "onCompositionStart");ie && (zc && i.locale !== "ko" && (tr || ie !== "onCompositionStart" ? ie === "onCompositionEnd" && tr && (te = _c()) : (un = F, Yo = "value" in un ? un.value : un.textContent, tr = !0)), ee = ds(D, ie), 0 < ee.length && (ie = new Ic(ie, e, null, i, F), I.push({
                    event: ie,
                    listeners: ee
                }), te ? ie.data = te : (te = Hc(i), te !== null && (ie.data = te)))),
                (te = Ry ? Ay(e, i) : My(e, i)) && (D = ds(D, "onBeforeInput"), 0 < D.length && (F = new Ic("onBeforeInput", "beforeinput", null, i, F), I.push({
                    event: F,
                    listeners: D
                }), F.data = te))
            }
            ff(I, t)
        })
    }

    function ei(e, t, i) {
        return {
            instance: e,
            listener: t,
            currentTarget: i
        }
    }

    function ds(e, t) {
        for (var i = t + "Capture", a = []; e !== null;) {
            var u = e,
                f = u.stateNode;
            u.tag === 5 && f !== null && (u = f, f = _r(e, i), f != null && a.unshift(ei(e, f, u)), f = _r(e, t), f != null && a.push(ei(e, f, u))), e = e.return
        }
        return a
    }

    function ir(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5);
        return e || null
    }

    function hf(e, t, i, a, u) {
        for (var f = t._reactName, m = []; i !== null && i !== a;) {
            var w = i,
                x = w.alternate,
                D = w.stateNode;
            if (x !== null && x === a) break;
            w.tag === 5 && D !== null && (w = D, u ? (x = _r(i, f), x != null && m.unshift(ei(i, x, w))) : u || (x = _r(i, f), x != null && m.push(ei(i, x, w)))), i = i.return
        }
        m.length !== 0 && e.push({
            event: t,
            listeners: m
        })
    }
    var by = /\r\n?/g,
        Hy = /\u0000|\uFFFD/g;

    function pf(e) {
        return (typeof e == "string" ? e : "" + e).replace(by, `
`).replace(Hy, "")
    }

    function hs(e, t, i) {
        if (t = pf(t), pf(e) !== t && i) throw Error(s(425))
    }

    function ps() {}
    var pa = null,
        ma = null;

    function ga(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var ya = typeof setTimeout == "function" ? setTimeout : void 0,
        Wy = typeof clearTimeout == "function" ? clearTimeout : void 0,
        mf = typeof Promise == "function" ? Promise : void 0,
        Ky = typeof queueMicrotask == "function" ? queueMicrotask : typeof mf < "u" ? function(e) {
            return mf.resolve(null).then(e).catch(qy)
        } : ya;

    function qy(e) {
        setTimeout(function() {
            throw e
        })
    }

    function va(e, t) {
        var i = t,
            a = 0;
        do {
            var u = i.nextSibling;
            if (e.removeChild(i), u && u.nodeType === 8)
                if (i = u.data, i === "/$") {
                    if (a === 0) {
                        e.removeChild(u), Hr(t);
                        return
                    }
                    a--
                } else i !== "$" && i !== "$?" && i !== "$!" || a++;
            i = u
        } while (i);
        Hr(t)
    }

    function fn(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
                if (t === "/$") return null
            }
        }
        return e
    }

    function gf(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var i = e.data;
                if (i === "$" || i === "$!" || i === "$?") {
                    if (t === 0) return e;
                    t--
                } else i === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var sr = Math.random().toString(36).slice(2),
        Bt = "__reactFiber$" + sr,
        ti = "__reactProps$" + sr,
        Gt = "__reactContainer$" + sr,
        wa = "__reactEvents$" + sr,
        Gy = "__reactListeners$" + sr,
        Xy = "__reactHandles$" + sr;

    function Mn(e) {
        var t = e[Bt];
        if (t) return t;
        for (var i = e.parentNode; i;) {
            if (t = i[Gt] || i[Bt]) {
                if (i = t.alternate, t.child !== null || i !== null && i.child !== null)
                    for (e = gf(e); e !== null;) {
                        if (i = e[Bt]) return i;
                        e = gf(e)
                    }
                return t
            }
            e = i, i = e.parentNode
        }
        return null
    }

    function ni(e) {
        return e = e[Bt] || e[Gt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }

    function or(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(s(33))
    }

    function ms(e) {
        return e[ti] || null
    }
    var xa = [],
        ar = -1;

    function dn(e) {
        return {
            current: e
        }
    }

    function xe(e) {
        0 > ar || (e.current = xa[ar], xa[ar] = null, ar--)
    }

    function ve(e, t) {
        ar++, xa[ar] = e.current, e.current = t
    }
    var hn = {},
        He = dn(hn),
        it = dn(!1),
        Dn = hn;

    function lr(e, t) {
        var i = e.type.contextTypes;
        if (!i) return hn;
        var a = e.stateNode;
        if (a && a.__reactInternalMemoizedUnmaskedChildContext === t) return a.__reactInternalMemoizedMaskedChildContext;
        var u = {},
            f;
        for (f in i) u[f] = t[f];
        return a && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = u), u
    }

    function st(e) {
        return e = e.childContextTypes, e != null
    }

    function gs() {
        xe(it), xe(He)
    }

    function yf(e, t, i) {
        if (He.current !== hn) throw Error(s(168));
        ve(He, t), ve(it, i)
    }

    function vf(e, t, i) {
        var a = e.stateNode;
        if (t = t.childContextTypes, typeof a.getChildContext != "function") return i;
        a = a.getChildContext();
        for (var u in a)
            if (!(u in t)) throw Error(s(108, ye(e) || "Unknown", u));
        return K({}, i, a)
    }

    function ys(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || hn, Dn = He.current, ve(He, e), ve(it, it.current), !0
    }

    function wf(e, t, i) {
        var a = e.stateNode;
        if (!a) throw Error(s(169));
        i ? (e = vf(e, t, Dn), a.__reactInternalMemoizedMergedChildContext = e, xe(it), xe(He), ve(He, e)) : xe(it), ve(it, i)
    }
    var Xt = null,
        vs = !1,
        Sa = !1;

    function xf(e) {
        Xt === null ? Xt = [e] : Xt.push(e)
    }

    function Qy(e) {
        vs = !0, xf(e)
    }

    function pn() {
        if (!Sa && Xt !== null) {
            Sa = !0;
            var e = 0,
                t = ge;
            try {
                var i = Xt;
                for (ge = 1; e < i.length; e++) {
                    var a = i[e];
                    do a = a(!0); while (a !== null)
                }
                Xt = null, vs = !1
            } catch (u) {
                throw Xt !== null && (Xt = Xt.slice(e + 1)), Sc(bo, pn), u
            } finally {
                ge = t, Sa = !1
            }
        }
        return null
    }
    var ur = [],
        cr = 0,
        ws = null,
        xs = 0,
        wt = [],
        xt = 0,
        Nn = null,
        Qt = 1,
        Yt = "";

    function Ln(e, t) {
        ur[cr++] = xs, ur[cr++] = ws, ws = e, xs = t
    }

    function Sf(e, t, i) {
        wt[xt++] = Qt, wt[xt++] = Yt, wt[xt++] = Nn, Nn = e;
        var a = Qt;
        e = Yt;
        var u = 32 - Mt(a) - 1;
        a &= ~(1 << u), i += 1;
        var f = 32 - Mt(t) + u;
        if (30 < f) {
            var m = u - u % 5;
            f = (a & (1 << m) - 1).toString(32), a >>= m, u -= m, Qt = 1 << 32 - Mt(t) + u | i << u | a, Yt = f + e
        } else Qt = 1 << f | i << u | a, Yt = e
    }

    function Ta(e) {
        e.return !== null && (Ln(e, 1), Sf(e, 1, 0))
    }

    function Ea(e) {
        for (; e === ws;) ws = ur[--cr], ur[cr] = null, xs = ur[--cr], ur[cr] = null;
        for (; e === Nn;) Nn = wt[--xt], wt[xt] = null, Yt = wt[--xt], wt[xt] = null, Qt = wt[--xt], wt[xt] = null
    }
    var gt = null,
        yt = null,
        Ee = !1,
        Nt = null;

    function Tf(e, t) {
        var i = Ct(5, null, null, 0);
        i.elementType = "DELETED", i.stateNode = t, i.return = e, t = e.deletions, t === null ? (e.deletions = [i], e.flags |= 16) : t.push(i)
    }

    function Ef(e, t) {
        switch (e.tag) {
            case 5:
                var i = e.type;
                return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, gt = e, yt = fn(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, gt = e, yt = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (i = Nn !== null ? {
                    id: Qt,
                    overflow: Yt
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: i,
                    retryLane: 1073741824
                }, i = Ct(18, null, null, 0), i.stateNode = t, i.return = e, e.child = i, gt = e, yt = null, !0) : !1;
            default:
                return !1
        }
    }

    function Ca(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }

    function ka(e) {
        if (Ee) {
            var t = yt;
            if (t) {
                var i = t;
                if (!Ef(e, t)) {
                    if (Ca(e)) throw Error(s(418));
                    t = fn(i.nextSibling);
                    var a = gt;
                    t && Ef(e, t) ? Tf(a, i) : (e.flags = e.flags & -4097 | 2, Ee = !1, gt = e)
                }
            } else {
                if (Ca(e)) throw Error(s(418));
                e.flags = e.flags & -4097 | 2, Ee = !1, gt = e
            }
        }
    }

    function Cf(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
        gt = e
    }

    function Ss(e) {
        if (e !== gt) return !1;
        if (!Ee) return Cf(e), Ee = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ga(e.type, e.memoizedProps)), t && (t = yt)) {
            if (Ca(e)) throw kf(), Error(s(418));
            for (; t;) Tf(e, t), t = fn(t.nextSibling)
        }
        if (Cf(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8) {
                        var i = e.data;
                        if (i === "/$") {
                            if (t === 0) {
                                yt = fn(e.nextSibling);
                                break e
                            }
                            t--
                        } else i !== "$" && i !== "$!" && i !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                yt = null
            }
        } else yt = gt ? fn(e.stateNode.nextSibling) : null;
        return !0
    }

    function kf() {
        for (var e = yt; e;) e = fn(e.nextSibling)
    }

    function fr() {
        yt = gt = null, Ee = !1
    }

    function Pa(e) {
        Nt === null ? Nt = [e] : Nt.push(e)
    }
    var Yy = G.ReactCurrentBatchConfig;

    function ri(e, t, i) {
        if (e = i.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (i._owner) {
                if (i = i._owner, i) {
                    if (i.tag !== 1) throw Error(s(309));
                    var a = i.stateNode
                }
                if (!a) throw Error(s(147, e));
                var u = a,
                    f = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === f ? t.ref : (t = function(m) {
                    var w = u.refs;
                    m === null ? delete w[f] : w[f] = m
                }, t._stringRef = f, t)
            }
            if (typeof e != "string") throw Error(s(284));
            if (!i._owner) throw Error(s(290, e))
        }
        return e
    }

    function Ts(e, t) {
        throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }

    function Pf(e) {
        var t = e._init;
        return t(e._payload)
    }

    function Rf(e) {
        function t(C, T) {
            if (e) {
                var A = C.deletions;
                A === null ? (C.deletions = [T], C.flags |= 16) : A.push(T)
            }
        }

        function i(C, T) {
            if (!e) return null;
            for (; T !== null;) t(C, T), T = T.sibling;
            return null
        }

        function a(C, T) {
            for (C = new Map; T !== null;) T.key !== null ? C.set(T.key, T) : C.set(T.index, T), T = T.sibling;
            return C
        }

        function u(C, T) {
            return C = Tn(C, T), C.index = 0, C.sibling = null, C
        }

        function f(C, T, A) {
            return C.index = A, e ? (A = C.alternate, A !== null ? (A = A.index, A < T ? (C.flags |= 2, T) : A) : (C.flags |= 2, T)) : (C.flags |= 1048576, T)
        }

        function m(C) {
            return e && C.alternate === null && (C.flags |= 2), C
        }

        function w(C, T, A, z) {
            return T === null || T.tag !== 6 ? (T = yl(A, C.mode, z), T.return = C, T) : (T = u(T, A), T.return = C, T)
        }

        function x(C, T, A, z) {
            var Y = A.type;
            return Y === ne ? F(C, T, A.props.children, z, A.key) : T !== null && (T.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === Je && Pf(Y) === T.type) ? (z = u(T, A.props), z.ref = ri(C, T, A), z.return = C, z) : (z = Ks(A.type, A.key, A.props, null, C.mode, z), z.ref = ri(C, T, A), z.return = C, z)
        }

        function D(C, T, A, z) {
            return T === null || T.tag !== 4 || T.stateNode.containerInfo !== A.containerInfo || T.stateNode.implementation !== A.implementation ? (T = vl(A, C.mode, z), T.return = C, T) : (T = u(T, A.children || []), T.return = C, T)
        }

        function F(C, T, A, z, Y) {
            return T === null || T.tag !== 7 ? (T = zn(A, C.mode, z, Y), T.return = C, T) : (T = u(T, A), T.return = C, T)
        }

        function I(C, T, A) {
            if (typeof T == "string" && T !== "" || typeof T == "number") return T = yl("" + T, C.mode, A), T.return = C, T;
            if (typeof T == "object" && T !== null) {
                switch (T.$$typeof) {
                    case B:
                        return A = Ks(T.type, T.key, T.props, null, C.mode, A), A.ref = ri(C, null, T), A.return = C, A;
                    case W:
                        return T = vl(T, C.mode, A), T.return = C, T;
                    case Je:
                        var z = T._init;
                        return I(C, z(T._payload), A)
                }
                if (Lr(T) || Z(T)) return T = zn(T, C.mode, A, null), T.return = C, T;
                Ts(C, T)
            }
            return null
        }

        function _(C, T, A, z) {
            var Y = T !== null ? T.key : null;
            if (typeof A == "string" && A !== "" || typeof A == "number") return Y !== null ? null : w(C, T, "" + A, z);
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                    case B:
                        return A.key === Y ? x(C, T, A, z) : null;
                    case W:
                        return A.key === Y ? D(C, T, A, z) : null;
                    case Je:
                        return Y = A._init, _(C, T, Y(A._payload), z)
                }
                if (Lr(A) || Z(A)) return Y !== null ? null : F(C, T, A, z, null);
                Ts(C, A)
            }
            return null
        }

        function H(C, T, A, z, Y) {
            if (typeof z == "string" && z !== "" || typeof z == "number") return C = C.get(A) || null, w(T, C, "" + z, Y);
            if (typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                    case B:
                        return C = C.get(z.key === null ? A : z.key) || null, x(T, C, z, Y);
                    case W:
                        return C = C.get(z.key === null ? A : z.key) || null, D(T, C, z, Y);
                    case Je:
                        var ee = z._init;
                        return H(C, T, A, ee(z._payload), Y)
                }
                if (Lr(z) || Z(z)) return C = C.get(A) || null, F(T, C, z, Y, null);
                Ts(T, z)
            }
            return null
        }

        function X(C, T, A, z) {
            for (var Y = null, ee = null, te = T, ie = T = 0, Be = null; te !== null && ie < A.length; ie++) {
                te.index > ie ? (Be = te, te = null) : Be = te.sibling;
                var he = _(C, te, A[ie], z);
                if (he === null) {
                    te === null && (te = Be);
                    break
                }
                e && te && he.alternate === null && t(C, te), T = f(he, T, ie), ee === null ? Y = he : ee.sibling = he, ee = he, te = Be
            }
            if (ie === A.length) return i(C, te), Ee && Ln(C, ie), Y;
            if (te === null) {
                for (; ie < A.length; ie++) te = I(C, A[ie], z), te !== null && (T = f(te, T, ie), ee === null ? Y = te : ee.sibling = te, ee = te);
                return Ee && Ln(C, ie), Y
            }
            for (te = a(C, te); ie < A.length; ie++) Be = H(te, C, ie, A[ie], z), Be !== null && (e && Be.alternate !== null && te.delete(Be.key === null ? ie : Be.key), T = f(Be, T, ie), ee === null ? Y = Be : ee.sibling = Be, ee = Be);
            return e && te.forEach(function(En) {
                return t(C, En)
            }), Ee && Ln(C, ie), Y
        }

        function Q(C, T, A, z) {
            var Y = Z(A);
            if (typeof Y != "function") throw Error(s(150));
            if (A = Y.call(A), A == null) throw Error(s(151));
            for (var ee = Y = null, te = T, ie = T = 0, Be = null, he = A.next(); te !== null && !he.done; ie++, he = A.next()) {
                te.index > ie ? (Be = te, te = null) : Be = te.sibling;
                var En = _(C, te, he.value, z);
                if (En === null) {
                    te === null && (te = Be);
                    break
                }
                e && te && En.alternate === null && t(C, te), T = f(En, T, ie), ee === null ? Y = En : ee.sibling = En, ee = En, te = Be
            }
            if (he.done) return i(C, te), Ee && Ln(C, ie), Y;
            if (te === null) {
                for (; !he.done; ie++, he = A.next()) he = I(C, he.value, z), he !== null && (T = f(he, T, ie), ee === null ? Y = he : ee.sibling = he, ee = he);
                return Ee && Ln(C, ie), Y
            }
            for (te = a(C, te); !he.done; ie++, he = A.next()) he = H(te, C, ie, he.value, z), he !== null && (e && he.alternate !== null && te.delete(he.key === null ? ie : he.key), T = f(he, T, ie), ee === null ? Y = he : ee.sibling = he, ee = he);
            return e && te.forEach(function(D0) {
                return t(C, D0)
            }), Ee && Ln(C, ie), Y
        }

        function Ne(C, T, A, z) {
            if (typeof A == "object" && A !== null && A.type === ne && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                    case B:
                        e: {
                            for (var Y = A.key, ee = T; ee !== null;) {
                                if (ee.key === Y) {
                                    if (Y = A.type, Y === ne) {
                                        if (ee.tag === 7) {
                                            i(C, ee.sibling), T = u(ee, A.props.children), T.return = C, C = T;
                                            break e
                                        }
                                    } else if (ee.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === Je && Pf(Y) === ee.type) {
                                        i(C, ee.sibling), T = u(ee, A.props), T.ref = ri(C, ee, A), T.return = C, C = T;
                                        break e
                                    }
                                    i(C, ee);
                                    break
                                } else t(C, ee);
                                ee = ee.sibling
                            }
                            A.type === ne ? (T = zn(A.props.children, C.mode, z, A.key), T.return = C, C = T) : (z = Ks(A.type, A.key, A.props, null, C.mode, z), z.ref = ri(C, T, A), z.return = C, C = z)
                        }
                        return m(C);
                    case W:
                        e: {
                            for (ee = A.key; T !== null;) {
                                if (T.key === ee)
                                    if (T.tag === 4 && T.stateNode.containerInfo === A.containerInfo && T.stateNode.implementation === A.implementation) {
                                        i(C, T.sibling), T = u(T, A.children || []), T.return = C, C = T;
                                        break e
                                    } else {
                                        i(C, T);
                                        break
                                    }
                                else t(C, T);
                                T = T.sibling
                            }
                            T = vl(A, C.mode, z),
                            T.return = C,
                            C = T
                        }
                        return m(C);
                    case Je:
                        return ee = A._init, Ne(C, T, ee(A._payload), z)
                }
                if (Lr(A)) return X(C, T, A, z);
                if (Z(A)) return Q(C, T, A, z);
                Ts(C, A)
            }
            return typeof A == "string" && A !== "" || typeof A == "number" ? (A = "" + A, T !== null && T.tag === 6 ? (i(C, T.sibling), T = u(T, A), T.return = C, C = T) : (i(C, T), T = yl(A, C.mode, z), T.return = C, C = T), m(C)) : i(C, T)
        }
        return Ne
    }
    var dr = Rf(!0),
        Af = Rf(!1),
        Es = dn(null),
        Cs = null,
        hr = null,
        Ra = null;

    function Aa() {
        Ra = hr = Cs = null
    }

    function Ma(e) {
        var t = Es.current;
        xe(Es), e._currentValue = t
    }

    function Da(e, t, i) {
        for (; e !== null;) {
            var a = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === i) break;
            e = e.return
        }
    }

    function pr(e, t) {
        Cs = e, Ra = hr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (ot = !0), e.firstContext = null)
    }

    function St(e) {
        var t = e._currentValue;
        if (Ra !== e)
            if (e = {
                    context: e,
                    memoizedValue: t,
                    next: null
                }, hr === null) {
                if (Cs === null) throw Error(s(308));
                hr = e, Cs.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else hr = hr.next = e;
        return t
    }
    var On = null;

    function Na(e) {
        On === null ? On = [e] : On.push(e)
    }

    function Mf(e, t, i, a) {
        var u = t.interleaved;
        return u === null ? (i.next = i, Na(t)) : (i.next = u.next, u.next = i), t.interleaved = i, Jt(e, a)
    }

    function Jt(e, t) {
        e.lanes |= t;
        var i = e.alternate;
        for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null;) e.childLanes |= t, i = e.alternate, i !== null && (i.childLanes |= t), i = e, e = e.return;
        return i.tag === 3 ? i.stateNode : null
    }
    var mn = !1;

    function La(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function Df(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }

    function Zt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function gn(e, t, i) {
        var a = e.updateQueue;
        if (a === null) return null;
        if (a = a.shared, (ce & 2) !== 0) {
            var u = a.pending;
            return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, Jt(e, i)
        }
        return u = a.interleaved, u === null ? (t.next = t, Na(a)) : (t.next = u.next, u.next = t), a.interleaved = t, Jt(e, i)
    }

    function ks(e, t, i) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194240) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes, i |= a, t.lanes = i, Ko(e, i)
        }
    }

    function Nf(e, t) {
        var i = e.updateQueue,
            a = e.alternate;
        if (a !== null && (a = a.updateQueue, i === a)) {
            var u = null,
                f = null;
            if (i = i.firstBaseUpdate, i !== null) {
                do {
                    var m = {
                        eventTime: i.eventTime,
                        lane: i.lane,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null
                    };
                    f === null ? u = f = m : f = f.next = m, i = i.next
                } while (i !== null);
                f === null ? u = f = t : f = f.next = t
            } else u = f = t;
            i = {
                baseState: a.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: f,
                shared: a.shared,
                effects: a.effects
            }, e.updateQueue = i;
            return
        }
        e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t
    }

    function Ps(e, t, i, a) {
        var u = e.updateQueue;
        mn = !1;
        var f = u.firstBaseUpdate,
            m = u.lastBaseUpdate,
            w = u.shared.pending;
        if (w !== null) {
            u.shared.pending = null;
            var x = w,
                D = x.next;
            x.next = null, m === null ? f = D : m.next = D, m = x;
            var F = e.alternate;
            F !== null && (F = F.updateQueue, w = F.lastBaseUpdate, w !== m && (w === null ? F.firstBaseUpdate = D : w.next = D, F.lastBaseUpdate = x))
        }
        if (f !== null) {
            var I = u.baseState;
            m = 0, F = D = x = null, w = f;
            do {
                var _ = w.lane,
                    H = w.eventTime;
                if ((a & _) === _) {
                    F !== null && (F = F.next = {
                        eventTime: H,
                        lane: 0,
                        tag: w.tag,
                        payload: w.payload,
                        callback: w.callback,
                        next: null
                    });
                    e: {
                        var X = e,
                            Q = w;
                        switch (_ = t, H = i, Q.tag) {
                            case 1:
                                if (X = Q.payload, typeof X == "function") {
                                    I = X.call(H, I, _);
                                    break e
                                }
                                I = X;
                                break e;
                            case 3:
                                X.flags = X.flags & -65537 | 128;
                            case 0:
                                if (X = Q.payload, _ = typeof X == "function" ? X.call(H, I, _) : X, _ == null) break e;
                                I = K({}, I, _);
                                break e;
                            case 2:
                                mn = !0
                        }
                    }
                    w.callback !== null && w.lane !== 0 && (e.flags |= 64, _ = u.effects, _ === null ? u.effects = [w] : _.push(w))
                } else H = {
                    eventTime: H,
                    lane: _,
                    tag: w.tag,
                    payload: w.payload,
                    callback: w.callback,
                    next: null
                }, F === null ? (D = F = H, x = I) : F = F.next = H, m |= _;
                if (w = w.next, w === null) {
                    if (w = u.shared.pending, w === null) break;
                    _ = w, w = _.next, _.next = null, u.lastBaseUpdate = _, u.shared.pending = null
                }
            } while (!0);
            if (F === null && (x = I), u.baseState = x, u.firstBaseUpdate = D, u.lastBaseUpdate = F, t = u.shared.interleaved, t !== null) {
                u = t;
                do m |= u.lane, u = u.next; while (u !== t)
            } else f === null && (u.shared.lanes = 0);
            Vn |= m, e.lanes = m, e.memoizedState = I
        }
    }

    function Lf(e, t, i) {
        if (e = t.effects, t.effects = null, e !== null)
            for (t = 0; t < e.length; t++) {
                var a = e[t],
                    u = a.callback;
                if (u !== null) {
                    if (a.callback = null, a = i, typeof u != "function") throw Error(s(191, u));
                    u.call(a)
                }
            }
    }
    var ii = {},
        zt = dn(ii),
        si = dn(ii),
        oi = dn(ii);

    function jn(e) {
        if (e === ii) throw Error(s(174));
        return e
    }

    function Oa(e, t) {
        switch (ve(oi, t), ve(si, e), ve(zt, ii), e = t.nodeType, e) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : jo(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = jo(t, e)
        }
        xe(zt), ve(zt, t)
    }

    function mr() {
        xe(zt), xe(si), xe(oi)
    }

    function Of(e) {
        jn(oi.current);
        var t = jn(zt.current),
            i = jo(t, e.type);
        t !== i && (ve(si, e), ve(zt, i))
    }

    function ja(e) {
        si.current === e && (xe(zt), xe(si))
    }
    var Ce = dn(0);

    function Rs(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var i = t.memoizedState;
                if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || i.data === "$!")) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }
    var _a = [];

    function Va() {
        for (var e = 0; e < _a.length; e++) _a[e]._workInProgressVersionPrimary = null;
        _a.length = 0
    }
    var As = G.ReactCurrentDispatcher,
        Fa = G.ReactCurrentBatchConfig,
        _n = 0,
        ke = null,
        _e = null,
        Fe = null,
        Ms = !1,
        ai = !1,
        li = 0,
        Jy = 0;

    function We() {
        throw Error(s(321))
    }

    function Ia(e, t) {
        if (t === null) return !1;
        for (var i = 0; i < t.length && i < e.length; i++)
            if (!Dt(e[i], t[i])) return !1;
        return !0
    }

    function Ba(e, t, i, a, u, f) {
        if (_n = f, ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, As.current = e === null || e.memoizedState === null ? n0 : r0, e = i(a, u), ai) {
            f = 0;
            do {
                if (ai = !1, li = 0, 25 <= f) throw Error(s(301));
                f += 1, Fe = _e = null, t.updateQueue = null, As.current = i0, e = i(a, u)
            } while (ai)
        }
        if (As.current = Ls, t = _e !== null && _e.next !== null, _n = 0, Fe = _e = ke = null, Ms = !1, t) throw Error(s(300));
        return e
    }

    function za() {
        var e = li !== 0;
        return li = 0, e
    }

    function Ut() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Fe === null ? ke.memoizedState = Fe = e : Fe = Fe.next = e, Fe
    }

    function Tt() {
        if (_e === null) {
            var e = ke.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = _e.next;
        var t = Fe === null ? ke.memoizedState : Fe.next;
        if (t !== null) Fe = t, _e = e;
        else {
            if (e === null) throw Error(s(310));
            _e = e, e = {
                memoizedState: _e.memoizedState,
                baseState: _e.baseState,
                baseQueue: _e.baseQueue,
                queue: _e.queue,
                next: null
            }, Fe === null ? ke.memoizedState = Fe = e : Fe = Fe.next = e
        }
        return Fe
    }

    function ui(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function Ua(e) {
        var t = Tt(),
            i = t.queue;
        if (i === null) throw Error(s(311));
        i.lastRenderedReducer = e;
        var a = _e,
            u = a.baseQueue,
            f = i.pending;
        if (f !== null) {
            if (u !== null) {
                var m = u.next;
                u.next = f.next, f.next = m
            }
            a.baseQueue = u = f, i.pending = null
        }
        if (u !== null) {
            f = u.next, a = a.baseState;
            var w = m = null,
                x = null,
                D = f;
            do {
                var F = D.lane;
                if ((_n & F) === F) x !== null && (x = x.next = {
                    lane: 0,
                    action: D.action,
                    hasEagerState: D.hasEagerState,
                    eagerState: D.eagerState,
                    next: null
                }), a = D.hasEagerState ? D.eagerState : e(a, D.action);
                else {
                    var I = {
                        lane: F,
                        action: D.action,
                        hasEagerState: D.hasEagerState,
                        eagerState: D.eagerState,
                        next: null
                    };
                    x === null ? (w = x = I, m = a) : x = x.next = I, ke.lanes |= F, Vn |= F
                }
                D = D.next
            } while (D !== null && D !== f);
            x === null ? m = a : x.next = w, Dt(a, t.memoizedState) || (ot = !0), t.memoizedState = a, t.baseState = m, t.baseQueue = x, i.lastRenderedState = a
        }
        if (e = i.interleaved, e !== null) {
            u = e;
            do f = u.lane, ke.lanes |= f, Vn |= f, u = u.next; while (u !== e)
        } else u === null && (i.lanes = 0);
        return [t.memoizedState, i.dispatch]
    }

    function $a(e) {
        var t = Tt(),
            i = t.queue;
        if (i === null) throw Error(s(311));
        i.lastRenderedReducer = e;
        var a = i.dispatch,
            u = i.pending,
            f = t.memoizedState;
        if (u !== null) {
            i.pending = null;
            var m = u = u.next;
            do f = e(f, m.action), m = m.next; while (m !== u);
            Dt(f, t.memoizedState) || (ot = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), i.lastRenderedState = f
        }
        return [f, a]
    }

    function jf() {}

    function _f(e, t) {
        var i = ke,
            a = Tt(),
            u = t(),
            f = !Dt(a.memoizedState, u);
        if (f && (a.memoizedState = u, ot = !0), a = a.queue, ba(If.bind(null, i, a, e), [e]), a.getSnapshot !== t || f || Fe !== null && Fe.memoizedState.tag & 1) {
            if (i.flags |= 2048, ci(9, Ff.bind(null, i, a, u, t), void 0, null), Ie === null) throw Error(s(349));
            (_n & 30) !== 0 || Vf(i, t, u)
        }
        return u
    }

    function Vf(e, t, i) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: i
        }, t = ke.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, ke.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e))
    }

    function Ff(e, t, i, a) {
        t.value = i, t.getSnapshot = a, Bf(t) && zf(e)
    }

    function If(e, t, i) {
        return i(function() {
            Bf(t) && zf(e)
        })
    }

    function Bf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var i = t();
            return !Dt(e, i)
        } catch {
            return !0
        }
    }

    function zf(e) {
        var t = Jt(e, 1);
        t !== null && _t(t, e, 1, -1)
    }

    function Uf(e) {
        var t = Ut();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ui,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = t0.bind(null, ke, e), [t.memoizedState, e]
    }

    function ci(e, t, i, a) {
        return e = {
            tag: e,
            create: t,
            destroy: i,
            deps: a,
            next: null
        }, t = ke.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, ke.updateQueue = t, t.lastEffect = e.next = e) : (i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (a = i.next, i.next = e, e.next = a, t.lastEffect = e)), e
    }

    function $f() {
        return Tt().memoizedState
    }

    function Ds(e, t, i, a) {
        var u = Ut();
        ke.flags |= e, u.memoizedState = ci(1 | t, i, void 0, a === void 0 ? null : a)
    }

    function Ns(e, t, i, a) {
        var u = Tt();
        a = a === void 0 ? null : a;
        var f = void 0;
        if (_e !== null) {
            var m = _e.memoizedState;
            if (f = m.destroy, a !== null && Ia(a, m.deps)) {
                u.memoizedState = ci(t, i, f, a);
                return
            }
        }
        ke.flags |= e, u.memoizedState = ci(1 | t, i, f, a)
    }

    function bf(e, t) {
        return Ds(8390656, 8, e, t)
    }

    function ba(e, t) {
        return Ns(2048, 8, e, t)
    }

    function Hf(e, t) {
        return Ns(4, 2, e, t)
    }

    function Wf(e, t) {
        return Ns(4, 4, e, t)
    }

    function Kf(e, t) {
        if (typeof t == "function") return e = e(), t(e),
            function() {
                t(null)
            };
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function qf(e, t, i) {
        return i = i != null ? i.concat([e]) : null, Ns(4, 4, Kf.bind(null, t, e), i)
    }

    function Ha() {}

    function Gf(e, t) {
        var i = Tt();
        t = t === void 0 ? null : t;
        var a = i.memoizedState;
        return a !== null && t !== null && Ia(t, a[1]) ? a[0] : (i.memoizedState = [e, t], e)
    }

    function Xf(e, t) {
        var i = Tt();
        t = t === void 0 ? null : t;
        var a = i.memoizedState;
        return a !== null && t !== null && Ia(t, a[1]) ? a[0] : (e = e(), i.memoizedState = [e, t], e)
    }

    function Qf(e, t, i) {
        return (_n & 21) === 0 ? (e.baseState && (e.baseState = !1, ot = !0), e.memoizedState = i) : (Dt(i, t) || (i = kc(), ke.lanes |= i, Vn |= i, e.baseState = !0), t)
    }

    function Zy(e, t) {
        var i = ge;
        ge = i !== 0 && 4 > i ? i : 4, e(!0);
        var a = Fa.transition;
        Fa.transition = {};
        try {
            e(!1), t()
        } finally {
            ge = i, Fa.transition = a
        }
    }

    function Yf() {
        return Tt().memoizedState
    }

    function e0(e, t, i) {
        var a = xn(e);
        if (i = {
                lane: a,
                action: i,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Jf(e)) Zf(t, i);
        else if (i = Mf(e, t, i, a), i !== null) {
            var u = et();
            _t(i, e, a, u), ed(i, t, a)
        }
    }

    function t0(e, t, i) {
        var a = xn(e),
            u = {
                lane: a,
                action: i,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (Jf(e)) Zf(t, u);
        else {
            var f = e.alternate;
            if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) try {
                var m = t.lastRenderedState,
                    w = f(m, i);
                if (u.hasEagerState = !0, u.eagerState = w, Dt(w, m)) {
                    var x = t.interleaved;
                    x === null ? (u.next = u, Na(t)) : (u.next = x.next, x.next = u), t.interleaved = u;
                    return
                }
            } catch {} finally {}
            i = Mf(e, t, u, a), i !== null && (u = et(), _t(i, e, a, u), ed(i, t, a))
        }
    }

    function Jf(e) {
        var t = e.alternate;
        return e === ke || t !== null && t === ke
    }

    function Zf(e, t) {
        ai = Ms = !0;
        var i = e.pending;
        i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t
    }

    function ed(e, t, i) {
        if ((i & 4194240) !== 0) {
            var a = t.lanes;
            a &= e.pendingLanes, i |= a, t.lanes = i, Ko(e, i)
        }
    }
    var Ls = {
            readContext: St,
            useCallback: We,
            useContext: We,
            useEffect: We,
            useImperativeHandle: We,
            useInsertionEffect: We,
            useLayoutEffect: We,
            useMemo: We,
            useReducer: We,
            useRef: We,
            useState: We,
            useDebugValue: We,
            useDeferredValue: We,
            useTransition: We,
            useMutableSource: We,
            useSyncExternalStore: We,
            useId: We,
            unstable_isNewReconciler: !1
        },
        n0 = {
            readContext: St,
            useCallback: function(e, t) {
                return Ut().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: St,
            useEffect: bf,
            useImperativeHandle: function(e, t, i) {
                return i = i != null ? i.concat([e]) : null, Ds(4194308, 4, Kf.bind(null, t, e), i)
            },
            useLayoutEffect: function(e, t) {
                return Ds(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                return Ds(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var i = Ut();
                return t = t === void 0 ? null : t, e = e(), i.memoizedState = [e, t], e
            },
            useReducer: function(e, t, i) {
                var a = Ut();
                return t = i !== void 0 ? i(t) : t, a.memoizedState = a.baseState = t, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }, a.queue = e, e = e.dispatch = e0.bind(null, ke, e), [a.memoizedState, e]
            },
            useRef: function(e) {
                var t = Ut();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: Uf,
            useDebugValue: Ha,
            useDeferredValue: function(e) {
                return Ut().memoizedState = e
            },
            useTransition: function() {
                var e = Uf(!1),
                    t = e[0];
                return e = Zy.bind(null, e[1]), Ut().memoizedState = e, [t, e]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(e, t, i) {
                var a = ke,
                    u = Ut();
                if (Ee) {
                    if (i === void 0) throw Error(s(407));
                    i = i()
                } else {
                    if (i = t(), Ie === null) throw Error(s(349));
                    (_n & 30) !== 0 || Vf(a, t, i)
                }
                u.memoizedState = i;
                var f = {
                    value: i,
                    getSnapshot: t
                };
                return u.queue = f, bf(If.bind(null, a, f, e), [e]), a.flags |= 2048, ci(9, Ff.bind(null, a, f, i, t), void 0, null), i
            },
            useId: function() {
                var e = Ut(),
                    t = Ie.identifierPrefix;
                if (Ee) {
                    var i = Yt,
                        a = Qt;
                    i = (a & ~(1 << 32 - Mt(a) - 1)).toString(32) + i, t = ":" + t + "R" + i, i = li++, 0 < i && (t += "H" + i.toString(32)), t += ":"
                } else i = Jy++, t = ":" + t + "r" + i.toString(32) + ":";
                return e.memoizedState = t
            },
            unstable_isNewReconciler: !1
        },
        r0 = {
            readContext: St,
            useCallback: Gf,
            useContext: St,
            useEffect: ba,
            useImperativeHandle: qf,
            useInsertionEffect: Hf,
            useLayoutEffect: Wf,
            useMemo: Xf,
            useReducer: Ua,
            useRef: $f,
            useState: function() {
                return Ua(ui)
            },
            useDebugValue: Ha,
            useDeferredValue: function(e) {
                var t = Tt();
                return Qf(t, _e.memoizedState, e)
            },
            useTransition: function() {
                var e = Ua(ui)[0],
                    t = Tt().memoizedState;
                return [e, t]
            },
            useMutableSource: jf,
            useSyncExternalStore: _f,
            useId: Yf,
            unstable_isNewReconciler: !1
        },
        i0 = {
            readContext: St,
            useCallback: Gf,
            useContext: St,
            useEffect: ba,
            useImperativeHandle: qf,
            useInsertionEffect: Hf,
            useLayoutEffect: Wf,
            useMemo: Xf,
            useReducer: $a,
            useRef: $f,
            useState: function() {
                return $a(ui)
            },
            useDebugValue: Ha,
            useDeferredValue: function(e) {
                var t = Tt();
                return _e === null ? t.memoizedState = e : Qf(t, _e.memoizedState, e)
            },
            useTransition: function() {
                var e = $a(ui)[0],
                    t = Tt().memoizedState;
                return [e, t]
            },
            useMutableSource: jf,
            useSyncExternalStore: _f,
            useId: Yf,
            unstable_isNewReconciler: !1
        };

    function Lt(e, t) {
        if (e && e.defaultProps) {
            t = K({}, t), e = e.defaultProps;
            for (var i in e) t[i] === void 0 && (t[i] = e[i]);
            return t
        }
        return t
    }

    function Wa(e, t, i, a) {
        t = e.memoizedState, i = i(a, t), i = i == null ? t : K({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i)
    }
    var Os = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? An(e) === e : !1
        },
        enqueueSetState: function(e, t, i) {
            e = e._reactInternals;
            var a = et(),
                u = xn(e),
                f = Zt(a, u);
            f.payload = t, i != null && (f.callback = i), t = gn(e, f, u), t !== null && (_t(t, e, u, a), ks(t, e, u))
        },
        enqueueReplaceState: function(e, t, i) {
            e = e._reactInternals;
            var a = et(),
                u = xn(e),
                f = Zt(a, u);
            f.tag = 1, f.payload = t, i != null && (f.callback = i), t = gn(e, f, u), t !== null && (_t(t, e, u, a), ks(t, e, u))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var i = et(),
                a = xn(e),
                u = Zt(i, a);
            u.tag = 2, t != null && (u.callback = t), t = gn(e, u, a), t !== null && (_t(t, e, a, i), ks(t, e, a))
        }
    };

    function td(e, t, i, a, u, f, m) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, f, m) : t.prototype && t.prototype.isPureReactComponent ? !Qr(i, a) || !Qr(u, f) : !0
    }

    function nd(e, t, i) {
        var a = !1,
            u = hn,
            f = t.contextType;
        return typeof f == "object" && f !== null ? f = St(f) : (u = st(t) ? Dn : He.current, a = t.contextTypes, f = (a = a != null) ? lr(e, u) : hn), t = new t(i, f), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Os, e.stateNode = t, t._reactInternals = e, a && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = u, e.__reactInternalMemoizedMaskedChildContext = f), t
    }

    function rd(e, t, i, a) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, a), t.state !== e && Os.enqueueReplaceState(t, t.state, null)
    }

    function Ka(e, t, i, a) {
        var u = e.stateNode;
        u.props = i, u.state = e.memoizedState, u.refs = {}, La(e);
        var f = t.contextType;
        typeof f == "object" && f !== null ? u.context = St(f) : (f = st(t) ? Dn : He.current, u.context = lr(e, f)), u.state = e.memoizedState, f = t.getDerivedStateFromProps, typeof f == "function" && (Wa(e, t, f, i), u.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (t = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), t !== u.state && Os.enqueueReplaceState(u, u.state, null), Ps(e, i, u, a), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308)
    }

    function gr(e, t) {
        try {
            var i = "",
                a = t;
            do i += fe(a), a = a.return; while (a);
            var u = i
        } catch (f) {
            u = `
Error generating stack: ` + f.message + `
` + f.stack
        }
        return {
            value: e,
            source: t,
            stack: u,
            digest: null
        }
    }

    function qa(e, t, i) {
        return {
            value: e,
            source: null,
            stack: i ?? null,
            digest: t ?? null
        }
    }

    function Ga(e, t) {
        try {
            console.error(t.value)
        } catch (i) {
            setTimeout(function() {
                throw i
            })
        }
    }
    var s0 = typeof WeakMap == "function" ? WeakMap : Map;

    function id(e, t, i) {
        i = Zt(-1, i), i.tag = 3, i.payload = {
            element: null
        };
        var a = t.value;
        return i.callback = function() {
            zs || (zs = !0, ul = a), Ga(e, t)
        }, i
    }

    function sd(e, t, i) {
        i = Zt(-1, i), i.tag = 3;
        var a = e.type.getDerivedStateFromError;
        if (typeof a == "function") {
            var u = t.value;
            i.payload = function() {
                return a(u)
            }, i.callback = function() {
                Ga(e, t)
            }
        }
        var f = e.stateNode;
        return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
            Ga(e, t), typeof a != "function" && (vn === null ? vn = new Set([this]) : vn.add(this));
            var m = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: m !== null ? m : ""
            })
        }), i
    }

    function od(e, t, i) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new s0;
            var u = new Set;
            a.set(t, u)
        } else u = a.get(t), u === void 0 && (u = new Set, a.set(t, u));
        u.has(i) || (u.add(i), e = w0.bind(null, e, t, i), t.then(e, e))
    }

    function ad(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return
        } while (e !== null);
        return null
    }

    function ld(e, t, i, a, u) {
        return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = Zt(-1, 1), t.tag = 2, gn(i, t, 1))), i.lanes |= 1), e) : (e.flags |= 65536, e.lanes = u, e)
    }
    var o0 = G.ReactCurrentOwner,
        ot = !1;

    function Ze(e, t, i, a) {
        t.child = e === null ? Af(t, null, i, a) : dr(t, e.child, i, a)
    }

    function ud(e, t, i, a, u) {
        i = i.render;
        var f = t.ref;
        return pr(t, u), a = Ba(e, t, i, a, f, u), i = za(), e !== null && !ot ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, en(e, t, u)) : (Ee && i && Ta(t), t.flags |= 1, Ze(e, t, a, u), t.child)
    }

    function cd(e, t, i, a, u) {
        if (e === null) {
            var f = i.type;
            return typeof f == "function" && !gl(f) && f.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15, t.type = f, fd(e, t, f, a, u)) : (e = Ks(i.type, null, a, t, t.mode, u), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (f = e.child, (e.lanes & u) === 0) {
            var m = f.memoizedProps;
            if (i = i.compare, i = i !== null ? i : Qr, i(m, a) && e.ref === t.ref) return en(e, t, u)
        }
        return t.flags |= 1, e = Tn(f, a), e.ref = t.ref, e.return = t, t.child = e
    }

    function fd(e, t, i, a, u) {
        if (e !== null) {
            var f = e.memoizedProps;
            if (Qr(f, a) && e.ref === t.ref)
                if (ot = !1, t.pendingProps = a = f, (e.lanes & u) !== 0)(e.flags & 131072) !== 0 && (ot = !0);
                else return t.lanes = e.lanes, en(e, t, u)
        }
        return Xa(e, t, i, a, u)
    }

    function dd(e, t, i) {
        var a = t.pendingProps,
            u = a.children,
            f = e !== null ? e.memoizedState : null;
        if (a.mode === "hidden")
            if ((t.mode & 1) === 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, ve(vr, vt), vt |= i;
            else {
                if ((i & 1073741824) === 0) return e = f !== null ? f.baseLanes | i : i, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }, t.updateQueue = null, ve(vr, vt), vt |= e, null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, a = f !== null ? f.baseLanes : i, ve(vr, vt), vt |= a
            }
        else f !== null ? (a = f.baseLanes | i, t.memoizedState = null) : a = i, ve(vr, vt), vt |= a;
        return Ze(e, t, u, i), t.child
    }

    function hd(e, t) {
        var i = t.ref;
        (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512, t.flags |= 2097152)
    }

    function Xa(e, t, i, a, u) {
        var f = st(i) ? Dn : He.current;
        return f = lr(t, f), pr(t, u), i = Ba(e, t, i, a, f, u), a = za(), e !== null && !ot ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, en(e, t, u)) : (Ee && a && Ta(t), t.flags |= 1, Ze(e, t, i, u), t.child)
    }

    function pd(e, t, i, a, u) {
        if (st(i)) {
            var f = !0;
            ys(t)
        } else f = !1;
        if (pr(t, u), t.stateNode === null) _s(e, t), nd(t, i, a), Ka(t, i, a, u), a = !0;
        else if (e === null) {
            var m = t.stateNode,
                w = t.memoizedProps;
            m.props = w;
            var x = m.context,
                D = i.contextType;
            typeof D == "object" && D !== null ? D = St(D) : (D = st(i) ? Dn : He.current, D = lr(t, D));
            var F = i.getDerivedStateFromProps,
                I = typeof F == "function" || typeof m.getSnapshotBeforeUpdate == "function";
            I || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (w !== a || x !== D) && rd(t, m, a, D), mn = !1;
            var _ = t.memoizedState;
            m.state = _, Ps(t, a, m, u), x = t.memoizedState, w !== a || _ !== x || it.current || mn ? (typeof F == "function" && (Wa(t, i, F, a), x = t.memoizedState), (w = mn || td(t, i, w, a, _, x, D)) ? (I || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = x), m.props = a, m.state = x, m.context = D, a = w) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), a = !1)
        } else {
            m = t.stateNode, Df(e, t), w = t.memoizedProps, D = t.type === t.elementType ? w : Lt(t.type, w), m.props = D, I = t.pendingProps, _ = m.context, x = i.contextType, typeof x == "object" && x !== null ? x = St(x) : (x = st(i) ? Dn : He.current, x = lr(t, x));
            var H = i.getDerivedStateFromProps;
            (F = typeof H == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (w !== I || _ !== x) && rd(t, m, a, x), mn = !1, _ = t.memoizedState, m.state = _, Ps(t, a, m, u);
            var X = t.memoizedState;
            w !== I || _ !== X || it.current || mn ? (typeof H == "function" && (Wa(t, i, H, a), X = t.memoizedState), (D = mn || td(t, i, D, a, _, X, x) || !1) ? (F || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(a, X, x), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(a, X, x)), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || w === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = X), m.props = a, m.state = X, m.context = x, a = D) : (typeof m.componentDidUpdate != "function" || w === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), a = !1)
        }
        return Qa(e, t, i, a, f, u)
    }

    function Qa(e, t, i, a, u, f) {
        hd(e, t);
        var m = (t.flags & 128) !== 0;
        if (!a && !m) return u && wf(t, i, !1), en(e, t, f);
        a = t.stateNode, o0.current = t;
        var w = m && typeof i.getDerivedStateFromError != "function" ? null : a.render();
        return t.flags |= 1, e !== null && m ? (t.child = dr(t, e.child, null, f), t.child = dr(t, null, w, f)) : Ze(e, t, w, f), t.memoizedState = a.state, u && wf(t, i, !0), t.child
    }

    function md(e) {
        var t = e.stateNode;
        t.pendingContext ? yf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && yf(e, t.context, !1), Oa(e, t.containerInfo)
    }

    function gd(e, t, i, a, u) {
        return fr(), Pa(u), t.flags |= 256, Ze(e, t, i, a), t.child
    }
    var Ya = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function Ja(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }

    function yd(e, t, i) {
        var a = t.pendingProps,
            u = Ce.current,
            f = !1,
            m = (t.flags & 128) !== 0,
            w;
        if ((w = m) || (w = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0), w ? (f = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u |= 1), ve(Ce, u & 1), e === null) return ka(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (m = a.children, e = a.fallback, f ? (a = t.mode, f = t.child, m = {
            mode: "hidden",
            children: m
        }, (a & 1) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = m) : f = qs(m, a, 0, null), e = zn(e, a, i, null), f.return = t, e.return = t, f.sibling = e, t.child = f, t.child.memoizedState = Ja(i), t.memoizedState = Ya, e) : Za(t, m));
        if (u = e.memoizedState, u !== null && (w = u.dehydrated, w !== null)) return a0(e, t, m, a, w, u, i);
        if (f) {
            f = a.fallback, m = t.mode, u = e.child, w = u.sibling;
            var x = {
                mode: "hidden",
                children: a.children
            };
            return (m & 1) === 0 && t.child !== u ? (a = t.child, a.childLanes = 0, a.pendingProps = x, t.deletions = null) : (a = Tn(u, x), a.subtreeFlags = u.subtreeFlags & 14680064), w !== null ? f = Tn(w, f) : (f = zn(f, m, i, null), f.flags |= 2), f.return = t, a.return = t, a.sibling = f, t.child = a, a = f, f = t.child, m = e.child.memoizedState, m = m === null ? Ja(i) : {
                baseLanes: m.baseLanes | i,
                cachePool: null,
                transitions: m.transitions
            }, f.memoizedState = m, f.childLanes = e.childLanes & ~i, t.memoizedState = Ya, a
        }
        return f = e.child, e = f.sibling, a = Tn(f, {
            mode: "visible",
            children: a.children
        }), (t.mode & 1) === 0 && (a.lanes = i), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a
    }

    function Za(e, t) {
        return t = qs({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t
    }

    function js(e, t, i, a) {
        return a !== null && Pa(a), dr(t, e.child, null, i), e = Za(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function a0(e, t, i, a, u, f, m) {
        if (i) return t.flags & 256 ? (t.flags &= -257, a = qa(Error(s(422))), js(e, t, m, a)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (f = a.fallback, u = t.mode, a = qs({
            mode: "visible",
            children: a.children
        }, u, 0, null), f = zn(f, u, m, null), f.flags |= 2, a.return = t, f.return = t, a.sibling = f, t.child = a, (t.mode & 1) !== 0 && dr(t, e.child, null, m), t.child.memoizedState = Ja(m), t.memoizedState = Ya, f);
        if ((t.mode & 1) === 0) return js(e, t, m, null);
        if (u.data === "$!") {
            if (a = u.nextSibling && u.nextSibling.dataset, a) var w = a.dgst;
            return a = w, f = Error(s(419)), a = qa(f, a, void 0), js(e, t, m, a)
        }
        if (w = (m & e.childLanes) !== 0, ot || w) {
            if (a = Ie, a !== null) {
                switch (m & -m) {
                    case 4:
                        u = 2;
                        break;
                    case 16:
                        u = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        u = 32;
                        break;
                    case 536870912:
                        u = 268435456;
                        break;
                    default:
                        u = 0
                }
                u = (u & (a.suspendedLanes | m)) !== 0 ? 0 : u, u !== 0 && u !== f.retryLane && (f.retryLane = u, Jt(e, u), _t(a, e, u, -1))
            }
            return ml(), a = qa(Error(s(421))), js(e, t, m, a)
        }
        return u.data === "$?" ? (t.flags |= 128, t.child = e.child, t = x0.bind(null, e), u._reactRetry = t, null) : (e = f.treeContext, yt = fn(u.nextSibling), gt = t, Ee = !0, Nt = null, e !== null && (wt[xt++] = Qt, wt[xt++] = Yt, wt[xt++] = Nn, Qt = e.id, Yt = e.overflow, Nn = t), t = Za(t, a.children), t.flags |= 4096, t)
    }

    function vd(e, t, i) {
        e.lanes |= t;
        var a = e.alternate;
        a !== null && (a.lanes |= t), Da(e.return, t, i)
    }

    function el(e, t, i, a, u) {
        var f = e.memoizedState;
        f === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: i,
            tailMode: u
        } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = i, f.tailMode = u)
    }

    function wd(e, t, i) {
        var a = t.pendingProps,
            u = a.revealOrder,
            f = a.tail;
        if (Ze(e, t, a.children, i), a = Ce.current, (a & 2) !== 0) a = a & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && vd(e, i, t);
                else if (e.tag === 19) vd(e, i, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            a &= 1
        }
        if (ve(Ce, a), (t.mode & 1) === 0) t.memoizedState = null;
        else switch (u) {
            case "forwards":
                for (i = t.child, u = null; i !== null;) e = i.alternate, e !== null && Rs(e) === null && (u = i), i = i.sibling;
                i = u, i === null ? (u = t.child, t.child = null) : (u = i.sibling, i.sibling = null), el(t, !1, u, i, f);
                break;
            case "backwards":
                for (i = null, u = t.child, t.child = null; u !== null;) {
                    if (e = u.alternate, e !== null && Rs(e) === null) {
                        t.child = u;
                        break
                    }
                    e = u.sibling, u.sibling = i, i = u, u = e
                }
                el(t, !0, i, null, f);
                break;
            case "together":
                el(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function _s(e, t) {
        (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
    }

    function en(e, t, i) {
        if (e !== null && (t.dependencies = e.dependencies), Vn |= t.lanes, (i & t.childLanes) === 0) return null;
        if (e !== null && t.child !== e.child) throw Error(s(153));
        if (t.child !== null) {
            for (e = t.child, i = Tn(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null;) e = e.sibling, i = i.sibling = Tn(e, e.pendingProps), i.return = t;
            i.sibling = null
        }
        return t.child
    }

    function l0(e, t, i) {
        switch (t.tag) {
            case 3:
                md(t), fr();
                break;
            case 5:
                Of(t);
                break;
            case 1:
                st(t.type) && ys(t);
                break;
            case 4:
                Oa(t, t.stateNode.containerInfo);
                break;
            case 10:
                var a = t.type._context,
                    u = t.memoizedProps.value;
                ve(Es, a._currentValue), a._currentValue = u;
                break;
            case 13:
                if (a = t.memoizedState, a !== null) return a.dehydrated !== null ? (ve(Ce, Ce.current & 1), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? yd(e, t, i) : (ve(Ce, Ce.current & 1), e = en(e, t, i), e !== null ? e.sibling : null);
                ve(Ce, Ce.current & 1);
                break;
            case 19:
                if (a = (i & t.childLanes) !== 0, (e.flags & 128) !== 0) {
                    if (a) return wd(e, t, i);
                    t.flags |= 128
                }
                if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), ve(Ce, Ce.current), a) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, dd(e, t, i)
        }
        return en(e, t, i)
    }
    var xd, tl, Sd, Td;
    xd = function(e, t) {
        for (var i = t.child; i !== null;) {
            if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
            else if (i.tag !== 4 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue
            }
            if (i === t) break;
            for (; i.sibling === null;) {
                if (i.return === null || i.return === t) return;
                i = i.return
            }
            i.sibling.return = i.return, i = i.sibling
        }
    }, tl = function() {}, Sd = function(e, t, i, a) {
        var u = e.memoizedProps;
        if (u !== a) {
            e = t.stateNode, jn(zt.current);
            var f = null;
            switch (i) {
                case "input":
                    u = Do(e, u), a = Do(e, a), f = [];
                    break;
                case "select":
                    u = K({}, u, {
                        value: void 0
                    }), a = K({}, a, {
                        value: void 0
                    }), f = [];
                    break;
                case "textarea":
                    u = Oo(e, u), a = Oo(e, a), f = [];
                    break;
                default:
                    typeof u.onClick != "function" && typeof a.onClick == "function" && (e.onclick = ps)
            }
            _o(i, a);
            var m;
            i = null;
            for (D in u)
                if (!a.hasOwnProperty(D) && u.hasOwnProperty(D) && u[D] != null)
                    if (D === "style") {
                        var w = u[D];
                        for (m in w) w.hasOwnProperty(m) && (i || (i = {}), i[m] = "")
                    } else D !== "dangerouslySetInnerHTML" && D !== "children" && D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && D !== "autoFocus" && (l.hasOwnProperty(D) ? f || (f = []) : (f = f || []).push(D, null));
            for (D in a) {
                var x = a[D];
                if (w = u != null ? u[D] : void 0, a.hasOwnProperty(D) && x !== w && (x != null || w != null))
                    if (D === "style")
                        if (w) {
                            for (m in w) !w.hasOwnProperty(m) || x && x.hasOwnProperty(m) || (i || (i = {}), i[m] = "");
                            for (m in x) x.hasOwnProperty(m) && w[m] !== x[m] && (i || (i = {}), i[m] = x[m])
                        } else i || (f || (f = []), f.push(D, i)), i = x;
                else D === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, w = w ? w.__html : void 0, x != null && w !== x && (f = f || []).push(D, x)) : D === "children" ? typeof x != "string" && typeof x != "number" || (f = f || []).push(D, "" + x) : D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && (l.hasOwnProperty(D) ? (x != null && D === "onScroll" && we("scroll", e), f || w === x || (f = [])) : (f = f || []).push(D, x))
            }
            i && (f = f || []).push("style", i);
            var D = f;
            (t.updateQueue = D) && (t.flags |= 4)
        }
    }, Td = function(e, t, i, a) {
        i !== a && (t.flags |= 4)
    };

    function fi(e, t) {
        if (!Ee) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var i = null; t !== null;) t.alternate !== null && (i = t), t = t.sibling;
                i === null ? e.tail = null : i.sibling = null;
                break;
            case "collapsed":
                i = e.tail;
                for (var a = null; i !== null;) i.alternate !== null && (a = i), i = i.sibling;
                a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
        }
    }

    function Ke(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            i = 0,
            a = 0;
        if (t)
            for (var u = e.child; u !== null;) i |= u.lanes | u.childLanes, a |= u.subtreeFlags & 14680064, a |= u.flags & 14680064, u.return = e, u = u.sibling;
        else
            for (u = e.child; u !== null;) i |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = e, u = u.sibling;
        return e.subtreeFlags |= a, e.childLanes = i, t
    }

    function u0(e, t, i) {
        var a = t.pendingProps;
        switch (Ea(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Ke(t), null;
            case 1:
                return st(t.type) && gs(), Ke(t), null;
            case 3:
                return a = t.stateNode, mr(), xe(it), xe(He), Va(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ss(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Nt !== null && (dl(Nt), Nt = null))), tl(e, t), Ke(t), null;
            case 5:
                ja(t);
                var u = jn(oi.current);
                if (i = t.type, e !== null && t.stateNode != null) Sd(e, t, i, a, u), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(s(166));
                        return Ke(t), null
                    }
                    if (e = jn(zt.current), Ss(t)) {
                        a = t.stateNode, i = t.type;
                        var f = t.memoizedProps;
                        switch (a[Bt] = t, a[ti] = f, e = (t.mode & 1) !== 0, i) {
                            case "dialog":
                                we("cancel", a), we("close", a);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                we("load", a);
                                break;
                            case "video":
                            case "audio":
                                for (u = 0; u < Jr.length; u++) we(Jr[u], a);
                                break;
                            case "source":
                                we("error", a);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                we("error", a), we("load", a);
                                break;
                            case "details":
                                we("toggle", a);
                                break;
                            case "input":
                                tc(a, f), we("invalid", a);
                                break;
                            case "select":
                                a._wrapperState = {
                                    wasMultiple: !!f.multiple
                                }, we("invalid", a);
                                break;
                            case "textarea":
                                ic(a, f), we("invalid", a)
                        }
                        _o(i, f), u = null;
                        for (var m in f)
                            if (f.hasOwnProperty(m)) {
                                var w = f[m];
                                m === "children" ? typeof w == "string" ? a.textContent !== w && (f.suppressHydrationWarning !== !0 && hs(a.textContent, w, e), u = ["children", w]) : typeof w == "number" && a.textContent !== "" + w && (f.suppressHydrationWarning !== !0 && hs(a.textContent, w, e), u = ["children", "" + w]) : l.hasOwnProperty(m) && w != null && m === "onScroll" && we("scroll", a)
                            } switch (i) {
                            case "input":
                                Hi(a), rc(a, f, !0);
                                break;
                            case "textarea":
                                Hi(a), oc(a);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof f.onClick == "function" && (a.onclick = ps)
                        }
                        a = u, t.updateQueue = a, a !== null && (t.flags |= 4)
                    } else {
                        m = u.nodeType === 9 ? u : u.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ac(i)), e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = m.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof a.is == "string" ? e = m.createElement(i, {
                            is: a.is
                        }) : (e = m.createElement(i), i === "select" && (m = e, a.multiple ? m.multiple = !0 : a.size && (m.size = a.size))) : e = m.createElementNS(e, i), e[Bt] = t, e[ti] = a, xd(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch (m = Vo(i, a), i) {
                                case "dialog":
                                    we("cancel", e), we("close", e), u = a;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    we("load", e), u = a;
                                    break;
                                case "video":
                                case "audio":
                                    for (u = 0; u < Jr.length; u++) we(Jr[u], e);
                                    u = a;
                                    break;
                                case "source":
                                    we("error", e), u = a;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    we("error", e), we("load", e), u = a;
                                    break;
                                case "details":
                                    we("toggle", e), u = a;
                                    break;
                                case "input":
                                    tc(e, a), u = Do(e, a), we("invalid", e);
                                    break;
                                case "option":
                                    u = a;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!a.multiple
                                    }, u = K({}, a, {
                                        value: void 0
                                    }), we("invalid", e);
                                    break;
                                case "textarea":
                                    ic(e, a), u = Oo(e, a), we("invalid", e);
                                    break;
                                default:
                                    u = a
                            }
                            _o(i, u),
                            w = u;
                            for (f in w)
                                if (w.hasOwnProperty(f)) {
                                    var x = w[f];
                                    f === "style" ? cc(e, x) : f === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, x != null && lc(e, x)) : f === "children" ? typeof x == "string" ? (i !== "textarea" || x !== "") && Or(e, x) : typeof x == "number" && Or(e, "" + x) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (l.hasOwnProperty(f) ? x != null && f === "onScroll" && we("scroll", e) : x != null && j(e, f, x, m))
                                } switch (i) {
                                case "input":
                                    Hi(e), rc(e, a, !1);
                                    break;
                                case "textarea":
                                    Hi(e), oc(e);
                                    break;
                                case "option":
                                    a.value != null && e.setAttribute("value", "" + me(a.value));
                                    break;
                                case "select":
                                    e.multiple = !!a.multiple, f = a.value, f != null ? Qn(e, !!a.multiple, f, !1) : a.defaultValue != null && Qn(e, !!a.multiple, a.defaultValue, !0);
                                    break;
                                default:
                                    typeof u.onClick == "function" && (e.onclick = ps)
                            }
                            switch (i) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a = !!a.autoFocus;
                                    break e;
                                case "img":
                                    a = !0;
                                    break e;
                                default:
                                    a = !1
                            }
                        }
                        a && (t.flags |= 4)
                    }
                    t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
                }
                return Ke(t), null;
            case 6:
                if (e && t.stateNode != null) Td(e, t, e.memoizedProps, a);
                else {
                    if (typeof a != "string" && t.stateNode === null) throw Error(s(166));
                    if (i = jn(oi.current), jn(zt.current), Ss(t)) {
                        if (a = t.stateNode, i = t.memoizedProps, a[Bt] = t, (f = a.nodeValue !== i) && (e = gt, e !== null)) switch (e.tag) {
                            case 3:
                                hs(a.nodeValue, i, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && hs(a.nodeValue, i, (e.mode & 1) !== 0)
                        }
                        f && (t.flags |= 4)
                    } else a = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(a), a[Bt] = t, t.stateNode = a
                }
                return Ke(t), null;
            case 13:
                if (xe(Ce), a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (Ee && yt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) kf(), fr(), t.flags |= 98560, f = !1;
                    else if (f = Ss(t), a !== null && a.dehydrated !== null) {
                        if (e === null) {
                            if (!f) throw Error(s(318));
                            if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f) throw Error(s(317));
                            f[Bt] = t
                        } else fr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        Ke(t), f = !1
                    } else Nt !== null && (dl(Nt), Nt = null), f = !0;
                    if (!f) return t.flags & 65536 ? t : null
                }
                return (t.flags & 128) !== 0 ? (t.lanes = i, t) : (a = a !== null, a !== (e !== null && e.memoizedState !== null) && a && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ce.current & 1) !== 0 ? Ve === 0 && (Ve = 3) : ml())), t.updateQueue !== null && (t.flags |= 4), Ke(t), null);
            case 4:
                return mr(), tl(e, t), e === null && Zr(t.stateNode.containerInfo), Ke(t), null;
            case 10:
                return Ma(t.type._context), Ke(t), null;
            case 17:
                return st(t.type) && gs(), Ke(t), null;
            case 19:
                if (xe(Ce), f = t.memoizedState, f === null) return Ke(t), null;
                if (a = (t.flags & 128) !== 0, m = f.rendering, m === null)
                    if (a) fi(f, !1);
                    else {
                        if (Ve !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null;) {
                                if (m = Rs(e), m !== null) {
                                    for (t.flags |= 128, fi(f, !1), a = m.updateQueue, a !== null && (t.updateQueue = a, t.flags |= 4), t.subtreeFlags = 0, a = i, i = t.child; i !== null;) f = i, e = a, f.flags &= 14680066, m = f.alternate, m === null ? (f.childLanes = 0, f.lanes = e, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = m.childLanes, f.lanes = m.lanes, f.child = m.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = m.memoizedProps, f.memoizedState = m.memoizedState, f.updateQueue = m.updateQueue, f.type = m.type, e = m.dependencies, f.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }), i = i.sibling;
                                    return ve(Ce, Ce.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        f.tail !== null && De() > wr && (t.flags |= 128, a = !0, fi(f, !1), t.lanes = 4194304)
                    }
                else {
                    if (!a)
                        if (e = Rs(m), e !== null) {
                            if (t.flags |= 128, a = !0, i = e.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), fi(f, !0), f.tail === null && f.tailMode === "hidden" && !m.alternate && !Ee) return Ke(t), null
                        } else 2 * De() - f.renderingStartTime > wr && i !== 1073741824 && (t.flags |= 128, a = !0, fi(f, !1), t.lanes = 4194304);
                    f.isBackwards ? (m.sibling = t.child, t.child = m) : (i = f.last, i !== null ? i.sibling = m : t.child = m, f.last = m)
                }
                return f.tail !== null ? (t = f.tail, f.rendering = t, f.tail = t.sibling, f.renderingStartTime = De(), t.sibling = null, i = Ce.current, ve(Ce, a ? i & 1 | 2 : i & 1), t) : (Ke(t), null);
            case 22:
            case 23:
                return pl(), a = t.memoizedState !== null, e !== null && e.memoizedState !== null !== a && (t.flags |= 8192), a && (t.mode & 1) !== 0 ? (vt & 1073741824) !== 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(s(156, t.tag))
    }

    function c0(e, t) {
        switch (Ea(t), t.tag) {
            case 1:
                return st(t.type) && gs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return mr(), xe(it), xe(He), Va(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return ja(t), null;
            case 13:
                if (xe(Ce), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(s(340));
                    fr()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return xe(Ce), null;
            case 4:
                return mr(), null;
            case 10:
                return Ma(t.type._context), null;
            case 22:
            case 23:
                return pl(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var Vs = !1,
        qe = !1,
        f0 = typeof WeakSet == "function" ? WeakSet : Set,
        q = null;

    function yr(e, t) {
        var i = e.ref;
        if (i !== null)
            if (typeof i == "function") try {
                i(null)
            } catch (a) {
                Ae(e, t, a)
            } else i.current = null
    }

    function nl(e, t, i) {
        try {
            i()
        } catch (a) {
            Ae(e, t, a)
        }
    }
    var Ed = !1;

    function d0(e, t) {
        if (pa = ns, e = ef(), oa(e)) {
            if ("selectionStart" in e) var i = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                i = (i = e.ownerDocument) && i.defaultView || window;
                var a = i.getSelection && i.getSelection();
                if (a && a.rangeCount !== 0) {
                    i = a.anchorNode;
                    var u = a.anchorOffset,
                        f = a.focusNode;
                    a = a.focusOffset;
                    try {
                        i.nodeType, f.nodeType
                    } catch {
                        i = null;
                        break e
                    }
                    var m = 0,
                        w = -1,
                        x = -1,
                        D = 0,
                        F = 0,
                        I = e,
                        _ = null;
                    t: for (;;) {
                        for (var H; I !== i || u !== 0 && I.nodeType !== 3 || (w = m + u), I !== f || a !== 0 && I.nodeType !== 3 || (x = m + a), I.nodeType === 3 && (m += I.nodeValue.length), (H = I.firstChild) !== null;) _ = I, I = H;
                        for (;;) {
                            if (I === e) break t;
                            if (_ === i && ++D === u && (w = m), _ === f && ++F === a && (x = m), (H = I.nextSibling) !== null) break;
                            I = _, _ = I.parentNode
                        }
                        I = H
                    }
                    i = w === -1 || x === -1 ? null : {
                        start: w,
                        end: x
                    }
                } else i = null
            }
            i = i || {
                start: 0,
                end: 0
            }
        } else i = null;
        for (ma = {
                focusedElem: e,
                selectionRange: i
            }, ns = !1, q = t; q !== null;)
            if (t = q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, q = e;
            else
                for (; q !== null;) {
                    t = q;
                    try {
                        var X = t.alternate;
                        if ((t.flags & 1024) !== 0) switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (X !== null) {
                                    var Q = X.memoizedProps,
                                        Ne = X.memoizedState,
                                        C = t.stateNode,
                                        T = C.getSnapshotBeforeUpdate(t.elementType === t.type ? Q : Lt(t.type, Q), Ne);
                                    C.__reactInternalSnapshotBeforeUpdate = T
                                }
                                break;
                            case 3:
                                var A = t.stateNode.containerInfo;
                                A.nodeType === 1 ? A.textContent = "" : A.nodeType === 9 && A.documentElement && A.removeChild(A.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(s(163))
                        }
                    } catch (z) {
                        Ae(t, t.return, z)
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, q = e;
                        break
                    }
                    q = t.return
                }
        return X = Ed, Ed = !1, X
    }

    function di(e, t, i) {
        var a = t.updateQueue;
        if (a = a !== null ? a.lastEffect : null, a !== null) {
            var u = a = a.next;
            do {
                if ((u.tag & e) === e) {
                    var f = u.destroy;
                    u.destroy = void 0, f !== void 0 && nl(t, i, f)
                }
                u = u.next
            } while (u !== a)
        }
    }

    function Fs(e, t) {
        if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            var i = t = t.next;
            do {
                if ((i.tag & e) === e) {
                    var a = i.create;
                    i.destroy = a()
                }
                i = i.next
            } while (i !== t)
        }
    }

    function rl(e) {
        var t = e.ref;
        if (t !== null) {
            var i = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = i;
                    break;
                default:
                    e = i
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }

    function Cd(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, Cd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Bt], delete t[ti], delete t[wa], delete t[Gy], delete t[Xy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }

    function kd(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }

    function Pd(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || kd(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function il(e, t, i) {
        var a = e.tag;
        if (a === 5 || a === 6) e = e.stateNode, t ? i.nodeType === 8 ? i.parentNode.insertBefore(e, t) : i.insertBefore(e, t) : (i.nodeType === 8 ? (t = i.parentNode, t.insertBefore(e, i)) : (t = i, t.appendChild(e)), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = ps));
        else if (a !== 4 && (e = e.child, e !== null))
            for (il(e, t, i), e = e.sibling; e !== null;) il(e, t, i), e = e.sibling
    }

    function sl(e, t, i) {
        var a = e.tag;
        if (a === 5 || a === 6) e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
        else if (a !== 4 && (e = e.child, e !== null))
            for (sl(e, t, i), e = e.sibling; e !== null;) sl(e, t, i), e = e.sibling
    }
    var ze = null,
        Ot = !1;

    function yn(e, t, i) {
        for (i = i.child; i !== null;) Rd(e, t, i), i = i.sibling
    }

    function Rd(e, t, i) {
        if (It && typeof It.onCommitFiberUnmount == "function") try {
            It.onCommitFiberUnmount(Qi, i)
        } catch {}
        switch (i.tag) {
            case 5:
                qe || yr(i, t);
            case 6:
                var a = ze,
                    u = Ot;
                ze = null, yn(e, t, i), ze = a, Ot = u, ze !== null && (Ot ? (e = ze, i = i.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : ze.removeChild(i.stateNode));
                break;
            case 18:
                ze !== null && (Ot ? (e = ze, i = i.stateNode, e.nodeType === 8 ? va(e.parentNode, i) : e.nodeType === 1 && va(e, i), Hr(e)) : va(ze, i.stateNode));
                break;
            case 4:
                a = ze, u = Ot, ze = i.stateNode.containerInfo, Ot = !0, yn(e, t, i), ze = a, Ot = u;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!qe && (a = i.updateQueue, a !== null && (a = a.lastEffect, a !== null))) {
                    u = a = a.next;
                    do {
                        var f = u,
                            m = f.destroy;
                        f = f.tag, m !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && nl(i, t, m), u = u.next
                    } while (u !== a)
                }
                yn(e, t, i);
                break;
            case 1:
                if (!qe && (yr(i, t), a = i.stateNode, typeof a.componentWillUnmount == "function")) try {
                    a.props = i.memoizedProps, a.state = i.memoizedState, a.componentWillUnmount()
                } catch (w) {
                    Ae(i, t, w)
                }
                yn(e, t, i);
                break;
            case 21:
                yn(e, t, i);
                break;
            case 22:
                i.mode & 1 ? (qe = (a = qe) || i.memoizedState !== null, yn(e, t, i), qe = a) : yn(e, t, i);
                break;
            default:
                yn(e, t, i)
        }
    }

    function Ad(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var i = e.stateNode;
            i === null && (i = e.stateNode = new f0), t.forEach(function(a) {
                var u = S0.bind(null, e, a);
                i.has(a) || (i.add(a), a.then(u, u))
            })
        }
    }

    function jt(e, t) {
        var i = t.deletions;
        if (i !== null)
            for (var a = 0; a < i.length; a++) {
                var u = i[a];
                try {
                    var f = e,
                        m = t,
                        w = m;
                    e: for (; w !== null;) {
                        switch (w.tag) {
                            case 5:
                                ze = w.stateNode, Ot = !1;
                                break e;
                            case 3:
                                ze = w.stateNode.containerInfo, Ot = !0;
                                break e;
                            case 4:
                                ze = w.stateNode.containerInfo, Ot = !0;
                                break e
                        }
                        w = w.return
                    }
                    if (ze === null) throw Error(s(160));
                    Rd(f, m, u), ze = null, Ot = !1;
                    var x = u.alternate;
                    x !== null && (x.return = null), u.return = null
                } catch (D) {
                    Ae(u, t, D)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null;) Md(t, e), t = t.sibling
    }

    function Md(e, t) {
        var i = e.alternate,
            a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (jt(t, e), $t(e), a & 4) {
                    try {
                        di(3, e, e.return), Fs(3, e)
                    } catch (Q) {
                        Ae(e, e.return, Q)
                    }
                    try {
                        di(5, e, e.return)
                    } catch (Q) {
                        Ae(e, e.return, Q)
                    }
                }
                break;
            case 1:
                jt(t, e), $t(e), a & 512 && i !== null && yr(i, i.return);
                break;
            case 5:
                if (jt(t, e), $t(e), a & 512 && i !== null && yr(i, i.return), e.flags & 32) {
                    var u = e.stateNode;
                    try {
                        Or(u, "")
                    } catch (Q) {
                        Ae(e, e.return, Q)
                    }
                }
                if (a & 4 && (u = e.stateNode, u != null)) {
                    var f = e.memoizedProps,
                        m = i !== null ? i.memoizedProps : f,
                        w = e.type,
                        x = e.updateQueue;
                    if (e.updateQueue = null, x !== null) try {
                        w === "input" && f.type === "radio" && f.name != null && nc(u, f), Vo(w, m);
                        var D = Vo(w, f);
                        for (m = 0; m < x.length; m += 2) {
                            var F = x[m],
                                I = x[m + 1];
                            F === "style" ? cc(u, I) : F === "dangerouslySetInnerHTML" ? lc(u, I) : F === "children" ? Or(u, I) : j(u, F, I, D)
                        }
                        switch (w) {
                            case "input":
                                No(u, f);
                                break;
                            case "textarea":
                                sc(u, f);
                                break;
                            case "select":
                                var _ = u._wrapperState.wasMultiple;
                                u._wrapperState.wasMultiple = !!f.multiple;
                                var H = f.value;
                                H != null ? Qn(u, !!f.multiple, H, !1) : _ !== !!f.multiple && (f.defaultValue != null ? Qn(u, !!f.multiple, f.defaultValue, !0) : Qn(u, !!f.multiple, f.multiple ? [] : "", !1))
                        }
                        u[ti] = f
                    } catch (Q) {
                        Ae(e, e.return, Q)
                    }
                }
                break;
            case 6:
                if (jt(t, e), $t(e), a & 4) {
                    if (e.stateNode === null) throw Error(s(162));
                    u = e.stateNode, f = e.memoizedProps;
                    try {
                        u.nodeValue = f
                    } catch (Q) {
                        Ae(e, e.return, Q)
                    }
                }
                break;
            case 3:
                if (jt(t, e), $t(e), a & 4 && i !== null && i.memoizedState.isDehydrated) try {
                    Hr(t.containerInfo)
                } catch (Q) {
                    Ae(e, e.return, Q)
                }
                break;
            case 4:
                jt(t, e), $t(e);
                break;
            case 13:
                jt(t, e), $t(e), u = e.child, u.flags & 8192 && (f = u.memoizedState !== null, u.stateNode.isHidden = f, !f || u.alternate !== null && u.alternate.memoizedState !== null || (ll = De())), a & 4 && Ad(e);
                break;
            case 22:
                if (F = i !== null && i.memoizedState !== null, e.mode & 1 ? (qe = (D = qe) || F, jt(t, e), qe = D) : jt(t, e), $t(e), a & 8192) {
                    if (D = e.memoizedState !== null, (e.stateNode.isHidden = D) && !F && (e.mode & 1) !== 0)
                        for (q = e, F = e.child; F !== null;) {
                            for (I = q = F; q !== null;) {
                                switch (_ = q, H = _.child, _.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        di(4, _, _.return);
                                        break;
                                    case 1:
                                        yr(_, _.return);
                                        var X = _.stateNode;
                                        if (typeof X.componentWillUnmount == "function") {
                                            a = _, i = _.return;
                                            try {
                                                t = a, X.props = t.memoizedProps, X.state = t.memoizedState, X.componentWillUnmount()
                                            } catch (Q) {
                                                Ae(a, i, Q)
                                            }
                                        }
                                        break;
                                    case 5:
                                        yr(_, _.return);
                                        break;
                                    case 22:
                                        if (_.memoizedState !== null) {
                                            Ld(I);
                                            continue
                                        }
                                }
                                H !== null ? (H.return = _, q = H) : Ld(I)
                            }
                            F = F.sibling
                        }
                    e: for (F = null, I = e;;) {
                        if (I.tag === 5) {
                            if (F === null) {
                                F = I;
                                try {
                                    u = I.stateNode, D ? (f = u.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none") : (w = I.stateNode, x = I.memoizedProps.style, m = x != null && x.hasOwnProperty("display") ? x.display : null, w.style.display = uc("display", m))
                                } catch (Q) {
                                    Ae(e, e.return, Q)
                                }
                            }
                        } else if (I.tag === 6) {
                            if (F === null) try {
                                I.stateNode.nodeValue = D ? "" : I.memoizedProps
                            } catch (Q) {
                                Ae(e, e.return, Q)
                            }
                        } else if ((I.tag !== 22 && I.tag !== 23 || I.memoizedState === null || I === e) && I.child !== null) {
                            I.child.return = I, I = I.child;
                            continue
                        }
                        if (I === e) break e;
                        for (; I.sibling === null;) {
                            if (I.return === null || I.return === e) break e;
                            F === I && (F = null), I = I.return
                        }
                        F === I && (F = null), I.sibling.return = I.return, I = I.sibling
                    }
                }
                break;
            case 19:
                jt(t, e), $t(e), a & 4 && Ad(e);
                break;
            case 21:
                break;
            default:
                jt(t, e), $t(e)
        }
    }

    function $t(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var i = e.return; i !== null;) {
                        if (kd(i)) {
                            var a = i;
                            break e
                        }
                        i = i.return
                    }
                    throw Error(s(160))
                }
                switch (a.tag) {
                    case 5:
                        var u = a.stateNode;
                        a.flags & 32 && (Or(u, ""), a.flags &= -33);
                        var f = Pd(e);
                        sl(e, f, u);
                        break;
                    case 3:
                    case 4:
                        var m = a.stateNode.containerInfo,
                            w = Pd(e);
                        il(e, w, m);
                        break;
                    default:
                        throw Error(s(161))
                }
            }
            catch (x) {
                Ae(e, e.return, x)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function h0(e, t, i) {
        q = e, Dd(e)
    }

    function Dd(e, t, i) {
        for (var a = (e.mode & 1) !== 0; q !== null;) {
            var u = q,
                f = u.child;
            if (u.tag === 22 && a) {
                var m = u.memoizedState !== null || Vs;
                if (!m) {
                    var w = u.alternate,
                        x = w !== null && w.memoizedState !== null || qe;
                    w = Vs;
                    var D = qe;
                    if (Vs = m, (qe = x) && !D)
                        for (q = u; q !== null;) m = q, x = m.child, m.tag === 22 && m.memoizedState !== null ? Od(u) : x !== null ? (x.return = m, q = x) : Od(u);
                    for (; f !== null;) q = f, Dd(f), f = f.sibling;
                    q = u, Vs = w, qe = D
                }
                Nd(e)
            } else(u.subtreeFlags & 8772) !== 0 && f !== null ? (f.return = u, q = f) : Nd(e)
        }
    }

    function Nd(e) {
        for (; q !== null;) {
            var t = q;
            if ((t.flags & 8772) !== 0) {
                var i = t.alternate;
                try {
                    if ((t.flags & 8772) !== 0) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            qe || Fs(5, t);
                            break;
                        case 1:
                            var a = t.stateNode;
                            if (t.flags & 4 && !qe)
                                if (i === null) a.componentDidMount();
                                else {
                                    var u = t.elementType === t.type ? i.memoizedProps : Lt(t.type, i.memoizedProps);
                                    a.componentDidUpdate(u, i.memoizedState, a.__reactInternalSnapshotBeforeUpdate)
                                } var f = t.updateQueue;
                            f !== null && Lf(t, f, a);
                            break;
                        case 3:
                            var m = t.updateQueue;
                            if (m !== null) {
                                if (i = null, t.child !== null) switch (t.child.tag) {
                                    case 5:
                                        i = t.child.stateNode;
                                        break;
                                    case 1:
                                        i = t.child.stateNode
                                }
                                Lf(t, m, i)
                            }
                            break;
                        case 5:
                            var w = t.stateNode;
                            if (i === null && t.flags & 4) {
                                i = w;
                                var x = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        x.autoFocus && i.focus();
                                        break;
                                    case "img":
                                        x.src && (i.src = x.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var D = t.alternate;
                                if (D !== null) {
                                    var F = D.memoizedState;
                                    if (F !== null) {
                                        var I = F.dehydrated;
                                        I !== null && Hr(I)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(s(163))
                    }
                    qe || t.flags & 512 && rl(t)
                } catch (_) {
                    Ae(t, t.return, _)
                }
            }
            if (t === e) {
                q = null;
                break
            }
            if (i = t.sibling, i !== null) {
                i.return = t.return, q = i;
                break
            }
            q = t.return
        }
    }

    function Ld(e) {
        for (; q !== null;) {
            var t = q;
            if (t === e) {
                q = null;
                break
            }
            var i = t.sibling;
            if (i !== null) {
                i.return = t.return, q = i;
                break
            }
            q = t.return
        }
    }

    function Od(e) {
        for (; q !== null;) {
            var t = q;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var i = t.return;
                        try {
                            Fs(4, t)
                        } catch (x) {
                            Ae(t, i, x)
                        }
                        break;
                    case 1:
                        var a = t.stateNode;
                        if (typeof a.componentDidMount == "function") {
                            var u = t.return;
                            try {
                                a.componentDidMount()
                            } catch (x) {
                                Ae(t, u, x)
                            }
                        }
                        var f = t.return;
                        try {
                            rl(t)
                        } catch (x) {
                            Ae(t, f, x)
                        }
                        break;
                    case 5:
                        var m = t.return;
                        try {
                            rl(t)
                        } catch (x) {
                            Ae(t, m, x)
                        }
                }
            } catch (x) {
                Ae(t, t.return, x)
            }
            if (t === e) {
                q = null;
                break
            }
            var w = t.sibling;
            if (w !== null) {
                w.return = t.return, q = w;
                break
            }
            q = t.return
        }
    }
    var p0 = Math.ceil,
        Is = G.ReactCurrentDispatcher,
        ol = G.ReactCurrentOwner,
        Et = G.ReactCurrentBatchConfig,
        ce = 0,
        Ie = null,
        je = null,
        Ue = 0,
        vt = 0,
        vr = dn(0),
        Ve = 0,
        hi = null,
        Vn = 0,
        Bs = 0,
        al = 0,
        pi = null,
        at = null,
        ll = 0,
        wr = 1 / 0,
        tn = null,
        zs = !1,
        ul = null,
        vn = null,
        Us = !1,
        wn = null,
        $s = 0,
        mi = 0,
        cl = null,
        bs = -1,
        Hs = 0;

    function et() {
        return (ce & 6) !== 0 ? De() : bs !== -1 ? bs : bs = De()
    }

    function xn(e) {
        return (e.mode & 1) === 0 ? 1 : (ce & 2) !== 0 && Ue !== 0 ? Ue & -Ue : Yy.transition !== null ? (Hs === 0 && (Hs = kc()), Hs) : (e = ge, e !== 0 || (e = window.event, e = e === void 0 ? 16 : jc(e.type)), e)
    }

    function _t(e, t, i, a) {
        if (50 < mi) throw mi = 0, cl = null, Error(s(185));
        Br(e, i, a), ((ce & 2) === 0 || e !== Ie) && (e === Ie && ((ce & 2) === 0 && (Bs |= i), Ve === 4 && Sn(e, Ue)), lt(e, a), i === 1 && ce === 0 && (t.mode & 1) === 0 && (wr = De() + 500, vs && pn()))
    }

    function lt(e, t) {
        var i = e.callbackNode;
        Yg(e, t);
        var a = Zi(e, e === Ie ? Ue : 0);
        if (a === 0) i !== null && Tc(i), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = a & -a, e.callbackPriority !== t) {
            if (i != null && Tc(i), t === 1) e.tag === 0 ? Qy(_d.bind(null, e)) : xf(_d.bind(null, e)), Ky(function() {
                (ce & 6) === 0 && pn()
            }), i = null;
            else {
                switch (Pc(a)) {
                    case 1:
                        i = bo;
                        break;
                    case 4:
                        i = Ec;
                        break;
                    case 16:
                        i = Xi;
                        break;
                    case 536870912:
                        i = Cc;
                        break;
                    default:
                        i = Xi
                }
                i = bd(i, jd.bind(null, e))
            }
            e.callbackPriority = t, e.callbackNode = i
        }
    }

    function jd(e, t) {
        if (bs = -1, Hs = 0, (ce & 6) !== 0) throw Error(s(327));
        var i = e.callbackNode;
        if (xr() && e.callbackNode !== i) return null;
        var a = Zi(e, e === Ie ? Ue : 0);
        if (a === 0) return null;
        if ((a & 30) !== 0 || (a & e.expiredLanes) !== 0 || t) t = Ws(e, a);
        else {
            t = a;
            var u = ce;
            ce |= 2;
            var f = Fd();
            (Ie !== e || Ue !== t) && (tn = null, wr = De() + 500, In(e, t));
            do try {
                y0();
                break
            } catch (w) {
                Vd(e, w)
            }
            while (!0);
            Aa(), Is.current = f, ce = u, je !== null ? t = 0 : (Ie = null, Ue = 0, t = Ve)
        }
        if (t !== 0) {
            if (t === 2 && (u = Ho(e), u !== 0 && (a = u, t = fl(e, u))), t === 1) throw i = hi, In(e, 0), Sn(e, a), lt(e, De()), i;
            if (t === 6) Sn(e, a);
            else {
                if (u = e.current.alternate, (a & 30) === 0 && !m0(u) && (t = Ws(e, a), t === 2 && (f = Ho(e), f !== 0 && (a = f, t = fl(e, f))), t === 1)) throw i = hi, In(e, 0), Sn(e, a), lt(e, De()), i;
                switch (e.finishedWork = u, e.finishedLanes = a, t) {
                    case 0:
                    case 1:
                        throw Error(s(345));
                    case 2:
                        Bn(e, at, tn);
                        break;
                    case 3:
                        if (Sn(e, a), (a & 130023424) === a && (t = ll + 500 - De(), 10 < t)) {
                            if (Zi(e, 0) !== 0) break;
                            if (u = e.suspendedLanes, (u & a) !== a) {
                                et(), e.pingedLanes |= e.suspendedLanes & u;
                                break
                            }
                            e.timeoutHandle = ya(Bn.bind(null, e, at, tn), t);
                            break
                        }
                        Bn(e, at, tn);
                        break;
                    case 4:
                        if (Sn(e, a), (a & 4194240) === a) break;
                        for (t = e.eventTimes, u = -1; 0 < a;) {
                            var m = 31 - Mt(a);
                            f = 1 << m, m = t[m], m > u && (u = m), a &= ~f
                        }
                        if (a = u, a = De() - a, a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * p0(a / 1960)) - a, 10 < a) {
                            e.timeoutHandle = ya(Bn.bind(null, e, at, tn), a);
                            break
                        }
                        Bn(e, at, tn);
                        break;
                    case 5:
                        Bn(e, at, tn);
                        break;
                    default:
                        throw Error(s(329))
                }
            }
        }
        return lt(e, De()), e.callbackNode === i ? jd.bind(null, e) : null
    }

    function fl(e, t) {
        var i = pi;
        return e.current.memoizedState.isDehydrated && (In(e, t).flags |= 256), e = Ws(e, t), e !== 2 && (t = at, at = i, t !== null && dl(t)), e
    }

    function dl(e) {
        at === null ? at = e : at.push.apply(at, e)
    }

    function m0(e) {
        for (var t = e;;) {
            if (t.flags & 16384) {
                var i = t.updateQueue;
                if (i !== null && (i = i.stores, i !== null))
                    for (var a = 0; a < i.length; a++) {
                        var u = i[a],
                            f = u.getSnapshot;
                        u = u.value;
                        try {
                            if (!Dt(f(), u)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (i = t.child, t.subtreeFlags & 16384 && i !== null) i.return = t, t = i;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function Sn(e, t) {
        for (t &= ~al, t &= ~Bs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var i = 31 - Mt(t),
                a = 1 << i;
            e[i] = -1, t &= ~a
        }
    }

    function _d(e) {
        if ((ce & 6) !== 0) throw Error(s(327));
        xr();
        var t = Zi(e, 0);
        if ((t & 1) === 0) return lt(e, De()), null;
        var i = Ws(e, t);
        if (e.tag !== 0 && i === 2) {
            var a = Ho(e);
            a !== 0 && (t = a, i = fl(e, a))
        }
        if (i === 1) throw i = hi, In(e, 0), Sn(e, t), lt(e, De()), i;
        if (i === 6) throw Error(s(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bn(e, at, tn), lt(e, De()), null
    }

    function hl(e, t) {
        var i = ce;
        ce |= 1;
        try {
            return e(t)
        } finally {
            ce = i, ce === 0 && (wr = De() + 500, vs && pn())
        }
    }

    function Fn(e) {
        wn !== null && wn.tag === 0 && (ce & 6) === 0 && xr();
        var t = ce;
        ce |= 1;
        var i = Et.transition,
            a = ge;
        try {
            if (Et.transition = null, ge = 1, e) return e()
        } finally {
            ge = a, Et.transition = i, ce = t, (ce & 6) === 0 && pn()
        }
    }

    function pl() {
        vt = vr.current, xe(vr)
    }

    function In(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var i = e.timeoutHandle;
        if (i !== -1 && (e.timeoutHandle = -1, Wy(i)), je !== null)
            for (i = je.return; i !== null;) {
                var a = i;
                switch (Ea(a), a.tag) {
                    case 1:
                        a = a.type.childContextTypes, a != null && gs();
                        break;
                    case 3:
                        mr(), xe(it), xe(He), Va();
                        break;
                    case 5:
                        ja(a);
                        break;
                    case 4:
                        mr();
                        break;
                    case 13:
                        xe(Ce);
                        break;
                    case 19:
                        xe(Ce);
                        break;
                    case 10:
                        Ma(a.type._context);
                        break;
                    case 22:
                    case 23:
                        pl()
                }
                i = i.return
            }
        if (Ie = e, je = e = Tn(e.current, null), Ue = vt = t, Ve = 0, hi = null, al = Bs = Vn = 0, at = pi = null, On !== null) {
            for (t = 0; t < On.length; t++)
                if (i = On[t], a = i.interleaved, a !== null) {
                    i.interleaved = null;
                    var u = a.next,
                        f = i.pending;
                    if (f !== null) {
                        var m = f.next;
                        f.next = u, a.next = m
                    }
                    i.pending = a
                } On = null
        }
        return e
    }

    function Vd(e, t) {
        do {
            var i = je;
            try {
                if (Aa(), As.current = Ls, Ms) {
                    for (var a = ke.memoizedState; a !== null;) {
                        var u = a.queue;
                        u !== null && (u.pending = null), a = a.next
                    }
                    Ms = !1
                }
                if (_n = 0, Fe = _e = ke = null, ai = !1, li = 0, ol.current = null, i === null || i.return === null) {
                    Ve = 1, hi = t, je = null;
                    break
                }
                e: {
                    var f = e,
                        m = i.return,
                        w = i,
                        x = t;
                    if (t = Ue, w.flags |= 32768, x !== null && typeof x == "object" && typeof x.then == "function") {
                        var D = x,
                            F = w,
                            I = F.tag;
                        if ((F.mode & 1) === 0 && (I === 0 || I === 11 || I === 15)) {
                            var _ = F.alternate;
                            _ ? (F.updateQueue = _.updateQueue, F.memoizedState = _.memoizedState, F.lanes = _.lanes) : (F.updateQueue = null, F.memoizedState = null)
                        }
                        var H = ad(m);
                        if (H !== null) {
                            H.flags &= -257, ld(H, m, w, f, t), H.mode & 1 && od(f, D, t), t = H, x = D;
                            var X = t.updateQueue;
                            if (X === null) {
                                var Q = new Set;
                                Q.add(x), t.updateQueue = Q
                            } else X.add(x);
                            break e
                        } else {
                            if ((t & 1) === 0) {
                                od(f, D, t), ml();
                                break e
                            }
                            x = Error(s(426))
                        }
                    } else if (Ee && w.mode & 1) {
                        var Ne = ad(m);
                        if (Ne !== null) {
                            (Ne.flags & 65536) === 0 && (Ne.flags |= 256), ld(Ne, m, w, f, t), Pa(gr(x, w));
                            break e
                        }
                    }
                    f = x = gr(x, w),
                    Ve !== 4 && (Ve = 2),
                    pi === null ? pi = [f] : pi.push(f),
                    f = m;do {
                        switch (f.tag) {
                            case 3:
                                f.flags |= 65536, t &= -t, f.lanes |= t;
                                var C = id(f, x, t);
                                Nf(f, C);
                                break e;
                            case 1:
                                w = x;
                                var T = f.type,
                                    A = f.stateNode;
                                if ((f.flags & 128) === 0 && (typeof T.getDerivedStateFromError == "function" || A !== null && typeof A.componentDidCatch == "function" && (vn === null || !vn.has(A)))) {
                                    f.flags |= 65536, t &= -t, f.lanes |= t;
                                    var z = sd(f, w, t);
                                    Nf(f, z);
                                    break e
                                }
                        }
                        f = f.return
                    } while (f !== null)
                }
                Bd(i)
            } catch (Y) {
                t = Y, je === i && i !== null && (je = i = i.return);
                continue
            }
            break
        } while (!0)
    }

    function Fd() {
        var e = Is.current;
        return Is.current = Ls, e === null ? Ls : e
    }

    function ml() {
        (Ve === 0 || Ve === 3 || Ve === 2) && (Ve = 4), Ie === null || (Vn & 268435455) === 0 && (Bs & 268435455) === 0 || Sn(Ie, Ue)
    }

    function Ws(e, t) {
        var i = ce;
        ce |= 2;
        var a = Fd();
        (Ie !== e || Ue !== t) && (tn = null, In(e, t));
        do try {
            g0();
            break
        } catch (u) {
            Vd(e, u)
        }
        while (!0);
        if (Aa(), ce = i, Is.current = a, je !== null) throw Error(s(261));
        return Ie = null, Ue = 0, Ve
    }

    function g0() {
        for (; je !== null;) Id(je)
    }

    function y0() {
        for (; je !== null && !$g();) Id(je)
    }

    function Id(e) {
        var t = $d(e.alternate, e, vt);
        e.memoizedProps = e.pendingProps, t === null ? Bd(e) : je = t, ol.current = null
    }

    function Bd(e) {
        var t = e;
        do {
            var i = t.alternate;
            if (e = t.return, (t.flags & 32768) === 0) {
                if (i = u0(i, t, vt), i !== null) {
                    je = i;
                    return
                }
            } else {
                if (i = c0(i, t), i !== null) {
                    i.flags &= 32767, je = i;
                    return
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    Ve = 6, je = null;
                    return
                }
            }
            if (t = t.sibling, t !== null) {
                je = t;
                return
            }
            je = t = e
        } while (t !== null);
        Ve === 0 && (Ve = 5)
    }

    function Bn(e, t, i) {
        var a = ge,
            u = Et.transition;
        try {
            Et.transition = null, ge = 1, v0(e, t, i, a)
        } finally {
            Et.transition = u, ge = a
        }
        return null
    }

    function v0(e, t, i, a) {
        do xr(); while (wn !== null);
        if ((ce & 6) !== 0) throw Error(s(327));
        i = e.finishedWork;
        var u = e.finishedLanes;
        if (i === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, i === e.current) throw Error(s(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var f = i.lanes | i.childLanes;
        if (Jg(e, f), e === Ie && (je = Ie = null, Ue = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || Us || (Us = !0, bd(Xi, function() {
                return xr(), null
            })), f = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || f) {
            f = Et.transition, Et.transition = null;
            var m = ge;
            ge = 1;
            var w = ce;
            ce |= 4, ol.current = null, d0(e, i), Md(i, e), Iy(ma), ns = !!pa, ma = pa = null, e.current = i, h0(i), bg(), ce = w, ge = m, Et.transition = f
        } else e.current = i;
        if (Us && (Us = !1, wn = e, $s = u), f = e.pendingLanes, f === 0 && (vn = null), Kg(i.stateNode), lt(e, De()), t !== null)
            for (a = e.onRecoverableError, i = 0; i < t.length; i++) u = t[i], a(u.value, {
                componentStack: u.stack,
                digest: u.digest
            });
        if (zs) throw zs = !1, e = ul, ul = null, e;
        return ($s & 1) !== 0 && e.tag !== 0 && xr(), f = e.pendingLanes, (f & 1) !== 0 ? e === cl ? mi++ : (mi = 0, cl = e) : mi = 0, pn(), null
    }

    function xr() {
        if (wn !== null) {
            var e = Pc($s),
                t = Et.transition,
                i = ge;
            try {
                if (Et.transition = null, ge = 16 > e ? 16 : e, wn === null) var a = !1;
                else {
                    if (e = wn, wn = null, $s = 0, (ce & 6) !== 0) throw Error(s(331));
                    var u = ce;
                    for (ce |= 4, q = e.current; q !== null;) {
                        var f = q,
                            m = f.child;
                        if ((q.flags & 16) !== 0) {
                            var w = f.deletions;
                            if (w !== null) {
                                for (var x = 0; x < w.length; x++) {
                                    var D = w[x];
                                    for (q = D; q !== null;) {
                                        var F = q;
                                        switch (F.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                di(8, F, f)
                                        }
                                        var I = F.child;
                                        if (I !== null) I.return = F, q = I;
                                        else
                                            for (; q !== null;) {
                                                F = q;
                                                var _ = F.sibling,
                                                    H = F.return;
                                                if (Cd(F), F === D) {
                                                    q = null;
                                                    break
                                                }
                                                if (_ !== null) {
                                                    _.return = H, q = _;
                                                    break
                                                }
                                                q = H
                                            }
                                    }
                                }
                                var X = f.alternate;
                                if (X !== null) {
                                    var Q = X.child;
                                    if (Q !== null) {
                                        X.child = null;
                                        do {
                                            var Ne = Q.sibling;
                                            Q.sibling = null, Q = Ne
                                        } while (Q !== null)
                                    }
                                }
                                q = f
                            }
                        }
                        if ((f.subtreeFlags & 2064) !== 0 && m !== null) m.return = f, q = m;
                        else e: for (; q !== null;) {
                            if (f = q, (f.flags & 2048) !== 0) switch (f.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    di(9, f, f.return)
                            }
                            var C = f.sibling;
                            if (C !== null) {
                                C.return = f.return, q = C;
                                break e
                            }
                            q = f.return
                        }
                    }
                    var T = e.current;
                    for (q = T; q !== null;) {
                        m = q;
                        var A = m.child;
                        if ((m.subtreeFlags & 2064) !== 0 && A !== null) A.return = m, q = A;
                        else e: for (m = T; q !== null;) {
                            if (w = q, (w.flags & 2048) !== 0) try {
                                switch (w.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Fs(9, w)
                                }
                            } catch (Y) {
                                Ae(w, w.return, Y)
                            }
                            if (w === m) {
                                q = null;
                                break e
                            }
                            var z = w.sibling;
                            if (z !== null) {
                                z.return = w.return, q = z;
                                break e
                            }
                            q = w.return
                        }
                    }
                    if (ce = u, pn(), It && typeof It.onPostCommitFiberRoot == "function") try {
                        It.onPostCommitFiberRoot(Qi, e)
                    } catch {}
                    a = !0
                }
                return a
            } finally {
                ge = i, Et.transition = t
            }
        }
        return !1
    }

    function zd(e, t, i) {
        t = gr(i, t), t = id(e, t, 1), e = gn(e, t, 1), t = et(), e !== null && (Br(e, 1, t), lt(e, t))
    }

    function Ae(e, t, i) {
        if (e.tag === 3) zd(e, e, i);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    zd(t, e, i);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (vn === null || !vn.has(a))) {
                        e = gr(i, e), e = sd(t, e, 1), t = gn(t, e, 1), e = et(), t !== null && (Br(t, 1, e), lt(t, e));
                        break
                    }
                }
                t = t.return
            }
    }

    function w0(e, t, i) {
        var a = e.pingCache;
        a !== null && a.delete(t), t = et(), e.pingedLanes |= e.suspendedLanes & i, Ie === e && (Ue & i) === i && (Ve === 4 || Ve === 3 && (Ue & 130023424) === Ue && 500 > De() - ll ? In(e, 0) : al |= i), lt(e, t)
    }

    function Ud(e, t) {
        t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Ji, Ji <<= 1, (Ji & 130023424) === 0 && (Ji = 4194304)));
        var i = et();
        e = Jt(e, t), e !== null && (Br(e, t, i), lt(e, i))
    }

    function x0(e) {
        var t = e.memoizedState,
            i = 0;
        t !== null && (i = t.retryLane), Ud(e, i)
    }

    function S0(e, t) {
        var i = 0;
        switch (e.tag) {
            case 13:
                var a = e.stateNode,
                    u = e.memoizedState;
                u !== null && (i = u.retryLane);
                break;
            case 19:
                a = e.stateNode;
                break;
            default:
                throw Error(s(314))
        }
        a !== null && a.delete(t), Ud(e, i)
    }
    var $d;
    $d = function(e, t, i) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || it.current) ot = !0;
            else {
                if ((e.lanes & i) === 0 && (t.flags & 128) === 0) return ot = !1, l0(e, t, i);
                ot = (e.flags & 131072) !== 0
            }
        else ot = !1, Ee && (t.flags & 1048576) !== 0 && Sf(t, xs, t.index);
        switch (t.lanes = 0, t.tag) {
            case 2:
                var a = t.type;
                _s(e, t), e = t.pendingProps;
                var u = lr(t, He.current);
                pr(t, i), u = Ba(null, t, a, e, u, i);
                var f = za();
                return t.flags |= 1, typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, st(a) ? (f = !0, ys(t)) : f = !1, t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, La(t), u.updater = Os, t.stateNode = u, u._reactInternals = t, Ka(t, a, e, i), t = Qa(null, t, a, !0, f, i)) : (t.tag = 0, Ee && f && Ta(t), Ze(null, t, u, i), t = t.child), t;
            case 16:
                a = t.elementType;
                e: {
                    switch (_s(e, t), e = t.pendingProps, u = a._init, a = u(a._payload), t.type = a, u = t.tag = E0(a), e = Lt(a, e), u) {
                        case 0:
                            t = Xa(null, t, a, e, i);
                            break e;
                        case 1:
                            t = pd(null, t, a, e, i);
                            break e;
                        case 11:
                            t = ud(null, t, a, e, i);
                            break e;
                        case 14:
                            t = cd(null, t, a, Lt(a.type, e), i);
                            break e
                    }
                    throw Error(s(306, a, ""))
                }
                return t;
            case 0:
                return a = t.type, u = t.pendingProps, u = t.elementType === a ? u : Lt(a, u), Xa(e, t, a, u, i);
            case 1:
                return a = t.type, u = t.pendingProps, u = t.elementType === a ? u : Lt(a, u), pd(e, t, a, u, i);
            case 3:
                e: {
                    if (md(t), e === null) throw Error(s(387));a = t.pendingProps,
                    f = t.memoizedState,
                    u = f.element,
                    Df(e, t),
                    Ps(t, a, null, i);
                    var m = t.memoizedState;
                    if (a = m.element, f.isDehydrated)
                        if (f = {
                                element: a,
                                isDehydrated: !1,
                                cache: m.cache,
                                pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
                                transitions: m.transitions
                            }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                            u = gr(Error(s(423)), t), t = gd(e, t, a, i, u);
                            break e
                        } else if (a !== u) {
                        u = gr(Error(s(424)), t), t = gd(e, t, a, i, u);
                        break e
                    } else
                        for (yt = fn(t.stateNode.containerInfo.firstChild), gt = t, Ee = !0, Nt = null, i = Af(t, null, a, i), t.child = i; i;) i.flags = i.flags & -3 | 4096, i = i.sibling;
                    else {
                        if (fr(), a === u) {
                            t = en(e, t, i);
                            break e
                        }
                        Ze(e, t, a, i)
                    }
                    t = t.child
                }
                return t;
            case 5:
                return Of(t), e === null && ka(t), a = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, m = u.children, ga(a, u) ? m = null : f !== null && ga(a, f) && (t.flags |= 32), hd(e, t), Ze(e, t, m, i), t.child;
            case 6:
                return e === null && ka(t), null;
            case 13:
                return yd(e, t, i);
            case 4:
                return Oa(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = dr(t, null, a, i) : Ze(e, t, a, i), t.child;
            case 11:
                return a = t.type, u = t.pendingProps, u = t.elementType === a ? u : Lt(a, u), ud(e, t, a, u, i);
            case 7:
                return Ze(e, t, t.pendingProps, i), t.child;
            case 8:
                return Ze(e, t, t.pendingProps.children, i), t.child;
            case 12:
                return Ze(e, t, t.pendingProps.children, i), t.child;
            case 10:
                e: {
                    if (a = t.type._context, u = t.pendingProps, f = t.memoizedProps, m = u.value, ve(Es, a._currentValue), a._currentValue = m, f !== null)
                        if (Dt(f.value, m)) {
                            if (f.children === u.children && !it.current) {
                                t = en(e, t, i);
                                break e
                            }
                        } else
                            for (f = t.child, f !== null && (f.return = t); f !== null;) {
                                var w = f.dependencies;
                                if (w !== null) {
                                    m = f.child;
                                    for (var x = w.firstContext; x !== null;) {
                                        if (x.context === a) {
                                            if (f.tag === 1) {
                                                x = Zt(-1, i & -i), x.tag = 2;
                                                var D = f.updateQueue;
                                                if (D !== null) {
                                                    D = D.shared;
                                                    var F = D.pending;
                                                    F === null ? x.next = x : (x.next = F.next, F.next = x), D.pending = x
                                                }
                                            }
                                            f.lanes |= i, x = f.alternate, x !== null && (x.lanes |= i), Da(f.return, i, t), w.lanes |= i;
                                            break
                                        }
                                        x = x.next
                                    }
                                } else if (f.tag === 10) m = f.type === t.type ? null : f.child;
                                else if (f.tag === 18) {
                                    if (m = f.return, m === null) throw Error(s(341));
                                    m.lanes |= i, w = m.alternate, w !== null && (w.lanes |= i), Da(m, i, t), m = f.sibling
                                } else m = f.child;
                                if (m !== null) m.return = f;
                                else
                                    for (m = f; m !== null;) {
                                        if (m === t) {
                                            m = null;
                                            break
                                        }
                                        if (f = m.sibling, f !== null) {
                                            f.return = m.return, m = f;
                                            break
                                        }
                                        m = m.return
                                    }
                                f = m
                            }
                    Ze(e, t, u.children, i),
                    t = t.child
                }
                return t;
            case 9:
                return u = t.type, a = t.pendingProps.children, pr(t, i), u = St(u), a = a(u), t.flags |= 1, Ze(e, t, a, i), t.child;
            case 14:
                return a = t.type, u = Lt(a, t.pendingProps), u = Lt(a.type, u), cd(e, t, a, u, i);
            case 15:
                return fd(e, t, t.type, t.pendingProps, i);
            case 17:
                return a = t.type, u = t.pendingProps, u = t.elementType === a ? u : Lt(a, u), _s(e, t), t.tag = 1, st(a) ? (e = !0, ys(t)) : e = !1, pr(t, i), nd(t, a, u), Ka(t, a, u, i), Qa(null, t, a, !0, e, i);
            case 19:
                return wd(e, t, i);
            case 22:
                return dd(e, t, i)
        }
        throw Error(s(156, t.tag))
    };

    function bd(e, t) {
        return Sc(e, t)
    }

    function T0(e, t, i, a) {
        this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Ct(e, t, i, a) {
        return new T0(e, t, i, a)
    }

    function gl(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function E0(e) {
        if (typeof e == "function") return gl(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === ht) return 11;
            if (e === At) return 14
        }
        return 2
    }

    function Tn(e, t) {
        var i = e.alternate;
        return i === null ? (i = Ct(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 14680064, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i
    }

    function Ks(e, t, i, a, u, f) {
        var m = 2;
        if (a = e, typeof e == "function") gl(e) && (m = 1);
        else if (typeof e == "string") m = 5;
        else e: switch (e) {
            case ne:
                return zn(i.children, u, f, t);
            case J:
                m = 8, u |= 8;
                break;
            case pe:
                return e = Ct(12, i, t, u | 2), e.elementType = pe, e.lanes = f, e;
            case Ye:
                return e = Ct(13, i, t, u), e.elementType = Ye, e.lanes = f, e;
            case rt:
                return e = Ct(19, i, t, u), e.elementType = rt, e.lanes = f, e;
            case ae:
                return qs(i, u, f, t);
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case Se:
                        m = 10;
                        break e;
                    case nt:
                        m = 9;
                        break e;
                    case ht:
                        m = 11;
                        break e;
                    case At:
                        m = 14;
                        break e;
                    case Je:
                        m = 16, a = null;
                        break e
                }
                throw Error(s(130, e == null ? e : typeof e, ""))
        }
        return t = Ct(m, i, t, u), t.elementType = e, t.type = a, t.lanes = f, t
    }

    function zn(e, t, i, a) {
        return e = Ct(7, e, a, t), e.lanes = i, e
    }

    function qs(e, t, i, a) {
        return e = Ct(22, e, a, t), e.elementType = ae, e.lanes = i, e.stateNode = {
            isHidden: !1
        }, e
    }

    function yl(e, t, i) {
        return e = Ct(6, e, null, t), e.lanes = i, e
    }

    function vl(e, t, i) {
        return t = Ct(4, e.children !== null ? e.children : [], e.key, t), t.lanes = i, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function C0(e, t, i, a, u) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wo(0), this.expirationTimes = Wo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wo(0), this.identifierPrefix = a, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null
    }

    function wl(e, t, i, a, u, f, m, w, x) {
        return e = new C0(e, t, i, w, x), t === 1 ? (t = 1, f === !0 && (t |= 8)) : t = 0, f = Ct(3, null, null, t), e.current = f, f.stateNode = e, f.memoizedState = {
            element: a,
            isDehydrated: i,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, La(f), e
    }

    function k0(e, t, i) {
        var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: W,
            key: a == null ? null : "" + a,
            children: e,
            containerInfo: t,
            implementation: i
        }
    }

    function Hd(e) {
        if (!e) return hn;
        e = e._reactInternals;
        e: {
            if (An(e) !== e || e.tag !== 1) throw Error(s(170));
            var t = e;do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (st(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                t = t.return
            } while (t !== null);
            throw Error(s(171))
        }
        if (e.tag === 1) {
            var i = e.type;
            if (st(i)) return vf(e, i, t)
        }
        return t
    }

    function Wd(e, t, i, a, u, f, m, w, x) {
        return e = wl(i, a, !0, e, u, f, m, w, x), e.context = Hd(null), i = e.current, a = et(), u = xn(i), f = Zt(a, u), f.callback = t ?? null, gn(i, f, u), e.current.lanes = u, Br(e, u, a), lt(e, a), e
    }

    function Gs(e, t, i, a) {
        var u = t.current,
            f = et(),
            m = xn(u);
        return i = Hd(i), t.context === null ? t.context = i : t.pendingContext = i, t = Zt(f, m), t.payload = {
            element: e
        }, a = a === void 0 ? null : a, a !== null && (t.callback = a), e = gn(u, t, m), e !== null && (_t(e, u, m, f), ks(e, u, m)), m
    }

    function Xs(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode
        }
    }

    function Kd(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var i = e.retryLane;
            e.retryLane = i !== 0 && i < t ? i : t
        }
    }

    function xl(e, t) {
        Kd(e, t), (e = e.alternate) && Kd(e, t)
    }

    function P0() {
        return null
    }
    var qd = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    };

    function Sl(e) {
        this._internalRoot = e
    }
    Qs.prototype.render = Sl.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(s(409));
        Gs(e, t, null, null)
    }, Qs.prototype.unmount = Sl.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Fn(function() {
                Gs(null, e, null, null)
            }), t[Gt] = null
        }
    };

    function Qs(e) {
        this._internalRoot = e
    }
    Qs.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Mc();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var i = 0; i < ln.length && t !== 0 && t < ln[i].priority; i++);
            ln.splice(i, 0, e), i === 0 && Lc(e)
        }
    };

    function Tl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function Ys(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }

    function Gd() {}

    function R0(e, t, i, a, u) {
        if (u) {
            if (typeof a == "function") {
                var f = a;
                a = function() {
                    var D = Xs(m);
                    f.call(D)
                }
            }
            var m = Wd(t, a, e, 0, null, !1, !1, "", Gd);
            return e._reactRootContainer = m, e[Gt] = m.current, Zr(e.nodeType === 8 ? e.parentNode : e), Fn(), m
        }
        for (; u = e.lastChild;) e.removeChild(u);
        if (typeof a == "function") {
            var w = a;
            a = function() {
                var D = Xs(x);
                w.call(D)
            }
        }
        var x = wl(e, 0, !1, null, null, !1, !1, "", Gd);
        return e._reactRootContainer = x, e[Gt] = x.current, Zr(e.nodeType === 8 ? e.parentNode : e), Fn(function() {
            Gs(t, x, i, a)
        }), x
    }

    function Js(e, t, i, a, u) {
        var f = i._reactRootContainer;
        if (f) {
            var m = f;
            if (typeof u == "function") {
                var w = u;
                u = function() {
                    var x = Xs(m);
                    w.call(x)
                }
            }
            Gs(t, m, e, u)
        } else m = R0(i, t, e, u, a);
        return Xs(m)
    }
    Rc = function(e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var i = Ir(t.pendingLanes);
                    i !== 0 && (Ko(t, i | 1), lt(t, De()), (ce & 6) === 0 && (wr = De() + 500, pn()))
                }
                break;
            case 13:
                Fn(function() {
                    var a = Jt(e, 1);
                    if (a !== null) {
                        var u = et();
                        _t(a, e, 1, u)
                    }
                }), xl(e, 1)
        }
    }, qo = function(e) {
        if (e.tag === 13) {
            var t = Jt(e, 134217728);
            if (t !== null) {
                var i = et();
                _t(t, e, 134217728, i)
            }
            xl(e, 134217728)
        }
    }, Ac = function(e) {
        if (e.tag === 13) {
            var t = xn(e),
                i = Jt(e, t);
            if (i !== null) {
                var a = et();
                _t(i, e, t, a)
            }
            xl(e, t)
        }
    }, Mc = function() {
        return ge
    }, Dc = function(e, t) {
        var i = ge;
        try {
            return ge = e, t()
        } finally {
            ge = i
        }
    }, Bo = function(e, t, i) {
        switch (t) {
            case "input":
                if (No(e, i), t = i.name, i.type === "radio" && t != null) {
                    for (i = e; i.parentNode;) i = i.parentNode;
                    for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < i.length; t++) {
                        var a = i[t];
                        if (a !== e && a.form === e.form) {
                            var u = ms(a);
                            if (!u) throw Error(s(90));
                            ec(a), No(a, u)
                        }
                    }
                }
                break;
            case "textarea":
                sc(e, i);
                break;
            case "select":
                t = i.value, t != null && Qn(e, !!i.multiple, t, !1)
        }
    }, pc = hl, mc = Fn;
    var A0 = {
            usingClientEntryPoint: !1,
            Events: [ni, or, ms, dc, hc, hl]
        },
        gi = {
            findFiberByHostInstance: Mn,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        M0 = {
            bundleType: gi.bundleType,
            version: gi.version,
            rendererPackageName: gi.rendererPackageName,
            rendererConfig: gi.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: G.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
                return e = wc(e), e === null ? null : e.stateNode
            },
            findFiberByHostInstance: gi.findFiberByHostInstance || P0,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Zs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Zs.isDisabled && Zs.supportsFiber) try {
            Qi = Zs.inject(M0), It = Zs
        } catch {}
    }
    return ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A0, ut.createPortal = function(e, t) {
        var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Tl(t)) throw Error(s(200));
        return k0(e, t, null, i)
    }, ut.createRoot = function(e, t) {
        if (!Tl(e)) throw Error(s(299));
        var i = !1,
            a = "",
            u = qd;
        return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = wl(e, 1, !1, null, null, i, !1, a, u), e[Gt] = t.current, Zr(e.nodeType === 8 ? e.parentNode : e), new Sl(t)
    }, ut.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
        return e = wc(t), e = e === null ? null : e.stateNode, e
    }, ut.flushSync = function(e) {
        return Fn(e)
    }, ut.hydrate = function(e, t, i) {
        if (!Ys(t)) throw Error(s(200));
        return Js(null, e, t, !0, i)
    }, ut.hydrateRoot = function(e, t, i) {
        if (!Tl(e)) throw Error(s(405));
        var a = i != null && i.hydratedSources || null,
            u = !1,
            f = "",
            m = qd;
        if (i != null && (i.unstable_strictMode === !0 && (u = !0), i.identifierPrefix !== void 0 && (f = i.identifierPrefix), i.onRecoverableError !== void 0 && (m = i.onRecoverableError)), t = Wd(t, null, e, 1, i ?? null, u, !1, f, m), e[Gt] = t.current, Zr(e), a)
            for (e = 0; e < a.length; e++) i = a[e], u = i._getVersion, u = u(i._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [i, u] : t.mutableSourceEagerHydrationData.push(i, u);
        return new Qs(t)
    }, ut.render = function(e, t, i) {
        if (!Ys(t)) throw Error(s(200));
        return Js(null, e, t, !1, i)
    }, ut.unmountComponentAtNode = function(e) {
        if (!Ys(e)) throw Error(s(40));
        return e._reactRootContainer ? (Fn(function() {
            Js(null, null, e, !1, function() {
                e._reactRootContainer = null, e[Gt] = null
            })
        }), !0) : !1
    }, ut.unstable_batchedUpdates = hl, ut.unstable_renderSubtreeIntoContainer = function(e, t, i, a) {
        if (!Ys(i)) throw Error(s(200));
        if (e == null || e._reactInternals === void 0) throw Error(s(38));
        return Js(e, t, i, !1, a)
    }, ut.version = "18.3.1-next-f1338f8080-20240426", ut
}
var nh;

function I0() {
    if (nh) return kl.exports;
    nh = 1;

    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
        } catch (r) {
            console.error(r)
        }
    }
    return n(), kl.exports = F0(), kl.exports
}
var rh;

function B0() {
    if (rh) return eo;
    rh = 1;
    var n = I0();
    return eo.createRoot = n.createRoot, eo.hydrateRoot = n.hydrateRoot, eo
}
var z0 = B0();
const U0 = Op(z0),
    $e = [];
for (let n = 0; n < 256; ++n) $e.push((n + 256).toString(16).slice(1));

function $0(n, r = 0) {
    return ($e[n[r + 0]] + $e[n[r + 1]] + $e[n[r + 2]] + $e[n[r + 3]] + "-" + $e[n[r + 4]] + $e[n[r + 5]] + "-" + $e[n[r + 6]] + $e[n[r + 7]] + "-" + $e[n[r + 8]] + $e[n[r + 9]] + "-" + $e[n[r + 10]] + $e[n[r + 11]] + $e[n[r + 12]] + $e[n[r + 13]] + $e[n[r + 14]] + $e[n[r + 15]]).toLowerCase()
}
let Al;
const b0 = new Uint8Array(16);

function H0() {
    if (!Al) {
        if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        Al = crypto.getRandomValues.bind(crypto)
    }
    return Al(b0)
}
const W0 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    ih = {
        randomUUID: W0
    };

function vi(n, r, s) {
    var l;
    if (ih.randomUUID && !n) return ih.randomUUID();
    n = n || {};
    const o = n.random ?? ((l = n.rng) == null ? void 0 : l.call(n)) ?? H0();
    if (o.length < 16) throw new Error("Random bytes length must be >= 16");
    return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, $0(o)
}
const yu = b.createContext({});

function vu(n) {
    const r = b.useRef(null);
    return r.current === null && (r.current = n()), r.current
}
const wu = typeof window < "u",
    jp = wu ? b.useLayoutEffect : b.useEffect,
    wo = b.createContext(null),
    xu = b.createContext({
        transformPagePoint: n => n,
        isStatic: !1,
        reducedMotion: "never"
    });
class K0 extends b.Component {
    getSnapshotBeforeUpdate(r) {
        const s = this.props.childRef.current;
        if (s && r.isPresent && !this.props.isPresent) {
            const o = s.offsetParent,
                l = o instanceof HTMLElement && o.offsetWidth || 0,
                d = this.props.sizeRef.current;
            d.height = s.offsetHeight || 0, d.width = s.offsetWidth || 0, d.top = s.offsetTop, d.left = s.offsetLeft, d.right = l - d.width - d.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function q0({
    children: n,
    isPresent: r,
    anchorX: s
}) {
    const o = b.useId(),
        l = b.useRef(null),
        d = b.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0
        }),
        {
            nonce: c
        } = b.useContext(xu);
    return b.useInsertionEffect(() => {
        const {
            width: h,
            height: p,
            top: y,
            left: g,
            right: v
        } = d.current;
        if (r || !l.current || !h || !p) return;
        const S = s === "left" ? `left: ${g}` : `right: ${v}`;
        l.current.dataset.motionPopId = o;
        const k = document.createElement("style");
        return c && (k.nonce = c), document.head.appendChild(k), k.sheet && k.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${p}px !important;
            ${S}px !important;
            top: ${y}px !important;
          }
        `), () => {
            document.head.contains(k) && document.head.removeChild(k)
        }
    }, [r]), O.jsx(K0, {
        isPresent: r,
        childRef: l,
        sizeRef: d,
        children: b.cloneElement(n, {
            ref: l
        })
    })
}
const G0 = ({
    children: n,
    initial: r,
    isPresent: s,
    onExitComplete: o,
    custom: l,
    presenceAffectsLayout: d,
    mode: c,
    anchorX: h
}) => {
    const p = vu(X0),
        y = b.useId();
    let g = !0,
        v = b.useMemo(() => (g = !1, {
            id: y,
            initial: r,
            isPresent: s,
            custom: l,
            onExitComplete: S => {
                p.set(S, !0);
                for (const k of p.values())
                    if (!k) return;
                o && o()
            },
            register: S => (p.set(S, !1), () => p.delete(S))
        }), [s, p, o]);
    return d && g && (v = {
        ...v
    }), b.useMemo(() => {
        p.forEach((S, k) => p.set(k, !1))
    }, [s]), b.useEffect(() => {
        !s && !p.size && o && o()
    }, [s]), c === "popLayout" && (n = O.jsx(q0, {
        isPresent: s,
        anchorX: h,
        children: n
    })), O.jsx(wo.Provider, {
        value: v,
        children: n
    })
};

function X0() {
    return new Map
}

function _p(n = !0) {
    const r = b.useContext(wo);
    if (r === null) return [!0, null];
    const {
        isPresent: s,
        onExitComplete: o,
        register: l
    } = r, d = b.useId();
    b.useEffect(() => {
        if (n) return l(d)
    }, [n]);
    const c = b.useCallback(() => n && o && o(d), [d, o, n]);
    return !s && o ? [!1, c] : [!0]
}
const to = n => n.key || "";

function sh(n) {
    const r = [];
    return b.Children.forEach(n, s => {
        b.isValidElement(s) && r.push(s)
    }), r
}
const Su = ({
    children: n,
    custom: r,
    initial: s = !0,
    onExitComplete: o,
    presenceAffectsLayout: l = !0,
    mode: d = "sync",
    propagate: c = !1,
    anchorX: h = "left"
}) => {
    const [p, y] = _p(c), g = b.useMemo(() => sh(n), [n]), v = c && !p ? [] : g.map(to), S = b.useRef(!0), k = b.useRef(g), M = vu(() => new Map), [P, R] = b.useState(g), [L, U] = b.useState(g);
    jp(() => {
        S.current = !1, k.current = g;
        for (let B = 0; B < L.length; B++) {
            const W = to(L[B]);
            v.includes(W) ? M.delete(W) : M.get(W) !== !0 && M.set(W, !1)
        }
    }, [L, v.length, v.join("-")]);
    const j = [];
    if (g !== P) {
        let B = [...g];
        for (let W = 0; W < L.length; W++) {
            const ne = L[W],
                J = to(ne);
            v.includes(J) || (B.splice(W, 0, ne), j.push(ne))
        }
        return d === "wait" && j.length && (B = j), U(sh(B)), R(g), null
    }
    const {
        forceRender: G
    } = b.useContext(yu);
    return O.jsx(O.Fragment, {
        children: L.map(B => {
            const W = to(B),
                ne = c && !p ? !1 : g === L || v.includes(W),
                J = () => {
                    if (M.has(W)) M.set(W, !0);
                    else return;
                    let pe = !0;
                    M.forEach(Se => {
                        Se || (pe = !1)
                    }), pe && (G == null || G(), U(k.current), c && (y == null || y()), o && o())
                };
            return O.jsx(G0, {
                isPresent: ne,
                initial: !S.current || s ? void 0 : !1,
                custom: r,
                presenceAffectsLayout: l,
                mode: d,
                onExitComplete: ne ? void 0 : J,
                anchorX: h,
                children: B
            }, W)
        })
    })
};

function Tu(n, r) {
    n.indexOf(r) === -1 && n.push(r)
}

function Eu(n, r) {
    const s = n.indexOf(r);
    s > -1 && n.splice(s, 1)
}
const nn = (n, r, s) => s > r ? r : s < n ? n : s;
let Cu = () => {};
const rn = {},
    Vp = n => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
    Fp = n => /^0[^.\s]+$/u.test(n);

function ku(n) {
    let r;
    return () => (r === void 0 && (r = n()), r)
}
const Rt = n => n,
    Q0 = (n, r) => s => r(n(s)),
    Ii = (...n) => n.reduce(Q0),
    Mi = (n, r, s) => {
        const o = r - n;
        return o === 0 ? 1 : (s - n) / o
    };
class Pu {
    constructor() {
        this.subscriptions = []
    }
    add(r) {
        return Tu(this.subscriptions, r), () => Eu(this.subscriptions, r)
    }
    notify(r, s, o) {
        const l = this.subscriptions.length;
        if (l)
            if (l === 1) this.subscriptions[0](r, s, o);
            else
                for (let d = 0; d < l; d++) {
                    const c = this.subscriptions[d];
                    c && c(r, s, o)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Ht = n => n * 1e3,
    Wt = n => n / 1e3;

function Ip(n, r) {
    return r ? n * (1e3 / r) : 0
}
const Bp = (n, r, s) => (((1 - 3 * s + 3 * r) * n + (3 * s - 6 * r)) * n + 3 * r) * n,
    Y0 = 1e-7,
    J0 = 12;

function Z0(n, r, s, o, l) {
    let d, c, h = 0;
    do c = r + (s - r) / 2, d = Bp(c, o, l) - n, d > 0 ? s = c : r = c; while (Math.abs(d) > Y0 && ++h < J0);
    return c
}

function Bi(n, r, s, o) {
    if (n === r && s === o) return Rt;
    const l = d => Z0(d, 0, 1, n, s);
    return d => d === 0 || d === 1 ? d : Bp(l(d), r, o)
}
const zp = n => r => r <= .5 ? n(2 * r) / 2 : (2 - n(2 * (1 - r))) / 2,
    Up = n => r => 1 - n(1 - r),
    $p = Bi(.33, 1.53, .69, .99),
    Ru = Up($p),
    bp = zp(Ru),
    Hp = n => (n *= 2) < 1 ? .5 * Ru(n) : .5 * (2 - Math.pow(2, -10 * (n - 1))),
    Au = n => 1 - Math.sin(Math.acos(n)),
    Wp = Up(Au),
    Kp = zp(Au),
    ev = Bi(.42, 0, 1, 1),
    tv = Bi(0, 0, .58, 1),
    qp = Bi(.42, 0, .58, 1),
    nv = n => Array.isArray(n) && typeof n[0] != "number",
    Gp = n => Array.isArray(n) && typeof n[0] == "number",
    rv = {
        linear: Rt,
        easeIn: ev,
        easeInOut: qp,
        easeOut: tv,
        circIn: Au,
        circInOut: Kp,
        circOut: Wp,
        backIn: Ru,
        backInOut: bp,
        backOut: $p,
        anticipate: Hp
    },
    iv = n => typeof n == "string",
    oh = n => {
        if (Gp(n)) {
            Cu(n.length === 4);
            const [r, s, o, l] = n;
            return Bi(r, s, o, l)
        } else if (iv(n)) return rv[n];
        return n
    },
    no = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
    ah = {
        value: null
    };

function sv(n, r) {
    let s = new Set,
        o = new Set,
        l = !1,
        d = !1;
    const c = new WeakSet;
    let h = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        p = 0;

    function y(v) {
        c.has(v) && (g.schedule(v), n()), p++, v(h)
    }
    const g = {
        schedule: (v, S = !1, k = !1) => {
            const P = k && l ? s : o;
            return S && c.add(v), P.has(v) || P.add(v), v
        },
        cancel: v => {
            o.delete(v), c.delete(v)
        },
        process: v => {
            if (h = v, l) {
                d = !0;
                return
            }
            l = !0, [s, o] = [o, s], s.forEach(y), r && ah.value && ah.value.frameloop[r].push(p), p = 0, s.clear(), l = !1, d && (d = !1, g.process(v))
        }
    };
    return g
}
const ov = 40;

function Xp(n, r) {
    let s = !1,
        o = !0;
    const l = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        d = () => s = !0,
        c = no.reduce((j, G) => (j[G] = sv(d, r ? G : void 0), j), {}),
        {
            setup: h,
            read: p,
            resolveKeyframes: y,
            preUpdate: g,
            update: v,
            preRender: S,
            render: k,
            postRender: M
        } = c,
        P = () => {
            const j = rn.useManualTiming ? l.timestamp : performance.now();
            s = !1, rn.useManualTiming || (l.delta = o ? 1e3 / 60 : Math.max(Math.min(j - l.timestamp, ov), 1)), l.timestamp = j, l.isProcessing = !0, h.process(l), p.process(l), y.process(l), g.process(l), v.process(l), S.process(l), k.process(l), M.process(l), l.isProcessing = !1, s && r && (o = !1, n(P))
        },
        R = () => {
            s = !0, o = !0, l.isProcessing || n(P)
        };
    return {
        schedule: no.reduce((j, G) => {
            const B = c[G];
            return j[G] = (W, ne = !1, J = !1) => (s || R(), B.schedule(W, ne, J)), j
        }, {}),
        cancel: j => {
            for (let G = 0; G < no.length; G++) c[no[G]].cancel(j)
        },
        state: l,
        steps: c
    }
}
const {
    schedule: Re,
    cancel: kn,
    state: be,
    steps: Ml
} = Xp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Rt, !0);
let so;

function av() {
    so = void 0
}
const ct = {
        now: () => (so === void 0 && ct.set(be.isProcessing || rn.useManualTiming ? be.timestamp : performance.now()), so),
        set: n => {
            so = n, queueMicrotask(av)
        }
    },
    Qp = n => r => typeof r == "string" && r.startsWith(n),
    Mu = Qp("--"),
    lv = Qp("var(--"),
    Du = n => lv(n) ? uv.test(n.split("/*")[0].trim()) : !1,
    uv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    Rr = {
        test: n => typeof n == "number",
        parse: parseFloat,
        transform: n => n
    },
    Di = {
        ...Rr,
        transform: n => nn(0, 1, n)
    },
    ro = {
        ...Rr,
        default: 1
    },
    Ci = n => Math.round(n * 1e5) / 1e5,
    Nu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function cv(n) {
    return n == null
}
const fv = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Lu = (n, r) => s => !!(typeof s == "string" && fv.test(s) && s.startsWith(n) || r && !cv(s) && Object.prototype.hasOwnProperty.call(s, r)),
    Yp = (n, r, s) => o => {
        if (typeof o != "string") return o;
        const [l, d, c, h] = o.match(Nu);
        return {
            [n]: parseFloat(l),
            [r]: parseFloat(d),
            [s]: parseFloat(c),
            alpha: h !== void 0 ? parseFloat(h) : 1
        }
    },
    dv = n => nn(0, 255, n),
    Dl = {
        ...Rr,
        transform: n => Math.round(dv(n))
    },
    bn = {
        test: Lu("rgb", "red"),
        parse: Yp("red", "green", "blue"),
        transform: ({
            red: n,
            green: r,
            blue: s,
            alpha: o = 1
        }) => "rgba(" + Dl.transform(n) + ", " + Dl.transform(r) + ", " + Dl.transform(s) + ", " + Ci(Di.transform(o)) + ")"
    };

function hv(n) {
    let r = "",
        s = "",
        o = "",
        l = "";
    return n.length > 5 ? (r = n.substring(1, 3), s = n.substring(3, 5), o = n.substring(5, 7), l = n.substring(7, 9)) : (r = n.substring(1, 2), s = n.substring(2, 3), o = n.substring(3, 4), l = n.substring(4, 5), r += r, s += s, o += o, l += l), {
        red: parseInt(r, 16),
        green: parseInt(s, 16),
        blue: parseInt(o, 16),
        alpha: l ? parseInt(l, 16) / 255 : 1
    }
}
const Hl = {
        test: Lu("#"),
        parse: hv,
        transform: bn.transform
    },
    zi = n => ({
        test: r => typeof r == "string" && r.endsWith(n) && r.split(" ").length === 1,
        parse: parseFloat,
        transform: r => `${r}${n}`
    }),
    Cn = zi("deg"),
    Kt = zi("%"),
    re = zi("px"),
    pv = zi("vh"),
    mv = zi("vw"),
    lh = {
        ...Kt,
        parse: n => Kt.parse(n) / 100,
        transform: n => Kt.transform(n * 100)
    },
    Sr = {
        test: Lu("hsl", "hue"),
        parse: Yp("hue", "saturation", "lightness"),
        transform: ({
            hue: n,
            saturation: r,
            lightness: s,
            alpha: o = 1
        }) => "hsla(" + Math.round(n) + ", " + Kt.transform(Ci(r)) + ", " + Kt.transform(Ci(s)) + ", " + Ci(Di.transform(o)) + ")"
    },
    Ge = {
        test: n => bn.test(n) || Hl.test(n) || Sr.test(n),
        parse: n => bn.test(n) ? bn.parse(n) : Sr.test(n) ? Sr.parse(n) : Hl.parse(n),
        transform: n => typeof n == "string" ? n : n.hasOwnProperty("red") ? bn.transform(n) : Sr.transform(n)
    },
    gv = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function yv(n) {
    var r, s;
    return isNaN(n) && typeof n == "string" && (((r = n.match(Nu)) == null ? void 0 : r.length) || 0) + (((s = n.match(gv)) == null ? void 0 : s.length) || 0) > 0
}
const Jp = "number",
    Zp = "color",
    vv = "var",
    wv = "var(",
    uh = "${}",
    xv = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function Ni(n) {
    const r = n.toString(),
        s = [],
        o = {
            color: [],
            number: [],
            var: []
        },
        l = [];
    let d = 0;
    const h = r.replace(xv, p => (Ge.test(p) ? (o.color.push(d), l.push(Zp), s.push(Ge.parse(p))) : p.startsWith(wv) ? (o.var.push(d), l.push(vv), s.push(p)) : (o.number.push(d), l.push(Jp), s.push(parseFloat(p))), ++d, uh)).split(uh);
    return {
        values: s,
        split: h,
        indexes: o,
        types: l
    }
}

function em(n) {
    return Ni(n).values
}

function tm(n) {
    const {
        split: r,
        types: s
    } = Ni(n), o = r.length;
    return l => {
        let d = "";
        for (let c = 0; c < o; c++)
            if (d += r[c], l[c] !== void 0) {
                const h = s[c];
                h === Jp ? d += Ci(l[c]) : h === Zp ? d += Ge.transform(l[c]) : d += l[c]
            } return d
    }
}
const Sv = n => typeof n == "number" ? 0 : n;

function Tv(n) {
    const r = em(n);
    return tm(n)(r.map(Sv))
}
const Pn = {
    test: yv,
    parse: em,
    createTransformer: tm,
    getAnimatableNone: Tv
};

function Nl(n, r, s) {
    return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? n + (r - n) * 6 * s : s < 1 / 2 ? r : s < 2 / 3 ? n + (r - n) * (2 / 3 - s) * 6 : n
}

function Ev({
    hue: n,
    saturation: r,
    lightness: s,
    alpha: o
}) {
    n /= 360, r /= 100, s /= 100;
    let l = 0,
        d = 0,
        c = 0;
    if (!r) l = d = c = s;
    else {
        const h = s < .5 ? s * (1 + r) : s + r - s * r,
            p = 2 * s - h;
        l = Nl(p, h, n + 1 / 3), d = Nl(p, h, n), c = Nl(p, h, n - 1 / 3)
    }
    return {
        red: Math.round(l * 255),
        green: Math.round(d * 255),
        blue: Math.round(c * 255),
        alpha: o
    }
}

function fo(n, r) {
    return s => s > 0 ? r : n
}
const Pe = (n, r, s) => n + (r - n) * s,
    Ll = (n, r, s) => {
        const o = n * n,
            l = s * (r * r - o) + o;
        return l < 0 ? 0 : Math.sqrt(l)
    },
    Cv = [Hl, bn, Sr],
    kv = n => Cv.find(r => r.test(n));

function ch(n) {
    const r = kv(n);
    if (!r) return !1;
    let s = r.parse(n);
    return r === Sr && (s = Ev(s)), s
}
const fh = (n, r) => {
        const s = ch(n),
            o = ch(r);
        if (!s || !o) return fo(n, r);
        const l = {
            ...s
        };
        return d => (l.red = Ll(s.red, o.red, d), l.green = Ll(s.green, o.green, d), l.blue = Ll(s.blue, o.blue, d), l.alpha = Pe(s.alpha, o.alpha, d), bn.transform(l))
    },
    Wl = new Set(["none", "hidden"]);

function Pv(n, r) {
    return Wl.has(n) ? s => s <= 0 ? n : r : s => s >= 1 ? r : n
}

function Rv(n, r) {
    return s => Pe(n, r, s)
}

function Ou(n) {
    return typeof n == "number" ? Rv : typeof n == "string" ? Du(n) ? fo : Ge.test(n) ? fh : Dv : Array.isArray(n) ? nm : typeof n == "object" ? Ge.test(n) ? fh : Av : fo
}

function nm(n, r) {
    const s = [...n],
        o = s.length,
        l = n.map((d, c) => Ou(d)(d, r[c]));
    return d => {
        for (let c = 0; c < o; c++) s[c] = l[c](d);
        return s
    }
}

function Av(n, r) {
    const s = {
            ...n,
            ...r
        },
        o = {};
    for (const l in s) n[l] !== void 0 && r[l] !== void 0 && (o[l] = Ou(n[l])(n[l], r[l]));
    return l => {
        for (const d in o) s[d] = o[d](l);
        return s
    }
}

function Mv(n, r) {
    const s = [],
        o = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let l = 0; l < r.values.length; l++) {
        const d = r.types[l],
            c = n.indexes[d][o[d]],
            h = n.values[c] ?? 0;
        s[l] = h, o[d]++
    }
    return s
}
const Dv = (n, r) => {
    const s = Pn.createTransformer(r),
        o = Ni(n),
        l = Ni(r);
    return o.indexes.var.length === l.indexes.var.length && o.indexes.color.length === l.indexes.color.length && o.indexes.number.length >= l.indexes.number.length ? Wl.has(n) && !l.values.length || Wl.has(r) && !o.values.length ? Pv(n, r) : Ii(nm(Mv(o, l), l.values), s) : fo(n, r)
};

function rm(n, r, s) {
    return typeof n == "number" && typeof r == "number" && typeof s == "number" ? Pe(n, r, s) : Ou(n)(n, r)
}
const Nv = n => {
        const r = ({
            timestamp: s
        }) => n(s);
        return {
            start: () => Re.update(r, !0),
            stop: () => kn(r),
            now: () => be.isProcessing ? be.timestamp : ct.now()
        }
    },
    im = (n, r, s = 10) => {
        let o = "";
        const l = Math.max(Math.round(r / s), 2);
        for (let d = 0; d < l; d++) o += n(d / (l - 1)) + ", ";
        return `linear(${o.substring(0,o.length-2)})`
    },
    ho = 2e4;

function ju(n) {
    let r = 0;
    const s = 50;
    let o = n.next(r);
    for (; !o.done && r < ho;) r += s, o = n.next(r);
    return r >= ho ? 1 / 0 : r
}

function Lv(n, r = 100, s) {
    const o = s({
            ...n,
            keyframes: [0, r]
        }),
        l = Math.min(ju(o), ho);
    return {
        type: "keyframes",
        ease: d => o.next(l * d).value / r,
        duration: Wt(l)
    }
}
const Ov = 5;

function sm(n, r, s) {
    const o = Math.max(r - Ov, 0);
    return Ip(s - n(o), r - o)
}
const Me = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    dh = .001;

function jv({
    duration: n = Me.duration,
    bounce: r = Me.bounce,
    velocity: s = Me.velocity,
    mass: o = Me.mass
}) {
    let l, d, c = 1 - r;
    c = nn(Me.minDamping, Me.maxDamping, c), n = nn(Me.minDuration, Me.maxDuration, Wt(n)), c < 1 ? (l = y => {
        const g = y * c,
            v = g * n,
            S = g - s,
            k = Kl(y, c),
            M = Math.exp(-v);
        return dh - S / k * M
    }, d = y => {
        const v = y * c * n,
            S = v * s + s,
            k = Math.pow(c, 2) * Math.pow(y, 2) * n,
            M = Math.exp(-v),
            P = Kl(Math.pow(y, 2), c);
        return (-l(y) + dh > 0 ? -1 : 1) * ((S - k) * M) / P
    }) : (l = y => {
        const g = Math.exp(-y * n),
            v = (y - s) * n + 1;
        return -.001 + g * v
    }, d = y => {
        const g = Math.exp(-y * n),
            v = (s - y) * (n * n);
        return g * v
    });
    const h = 5 / n,
        p = Vv(l, d, h);
    if (n = Ht(n), isNaN(p)) return {
        stiffness: Me.stiffness,
        damping: Me.damping,
        duration: n
    };
    {
        const y = Math.pow(p, 2) * o;
        return {
            stiffness: y,
            damping: c * 2 * Math.sqrt(o * y),
            duration: n
        }
    }
}
const _v = 12;

function Vv(n, r, s) {
    let o = s;
    for (let l = 1; l < _v; l++) o = o - n(o) / r(o);
    return o
}

function Kl(n, r) {
    return n * Math.sqrt(1 - r * r)
}
const Fv = ["duration", "bounce"],
    Iv = ["stiffness", "damping", "mass"];

function hh(n, r) {
    return r.some(s => n[s] !== void 0)
}

function Bv(n) {
    let r = {
        velocity: Me.velocity,
        stiffness: Me.stiffness,
        damping: Me.damping,
        mass: Me.mass,
        isResolvedFromDuration: !1,
        ...n
    };
    if (!hh(n, Iv) && hh(n, Fv))
        if (n.visualDuration) {
            const s = n.visualDuration,
                o = 2 * Math.PI / (s * 1.2),
                l = o * o,
                d = 2 * nn(.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(l);
            r = {
                ...r,
                mass: Me.mass,
                stiffness: l,
                damping: d
            }
        } else {
            const s = jv(n);
            r = {
                ...r,
                ...s,
                mass: Me.mass
            }, r.isResolvedFromDuration = !0
        } return r
}

function po(n = Me.visualDuration, r = Me.bounce) {
    const s = typeof n != "object" ? {
        visualDuration: n,
        keyframes: [0, 1],
        bounce: r
    } : n;
    let {
        restSpeed: o,
        restDelta: l
    } = s;
    const d = s.keyframes[0],
        c = s.keyframes[s.keyframes.length - 1],
        h = {
            done: !1,
            value: d
        },
        {
            stiffness: p,
            damping: y,
            mass: g,
            duration: v,
            velocity: S,
            isResolvedFromDuration: k
        } = Bv({
            ...s,
            velocity: -Wt(s.velocity || 0)
        }),
        M = S || 0,
        P = y / (2 * Math.sqrt(p * g)),
        R = c - d,
        L = Wt(Math.sqrt(p / g)),
        U = Math.abs(R) < 5;
    o || (o = U ? Me.restSpeed.granular : Me.restSpeed.default), l || (l = U ? Me.restDelta.granular : Me.restDelta.default);
    let j;
    if (P < 1) {
        const B = Kl(L, P);
        j = W => {
            const ne = Math.exp(-P * L * W);
            return c - ne * ((M + P * L * R) / B * Math.sin(B * W) + R * Math.cos(B * W))
        }
    } else if (P === 1) j = B => c - Math.exp(-L * B) * (R + (M + L * R) * B);
    else {
        const B = L * Math.sqrt(P * P - 1);
        j = W => {
            const ne = Math.exp(-P * L * W),
                J = Math.min(B * W, 300);
            return c - ne * ((M + P * L * R) * Math.sinh(J) + B * R * Math.cosh(J)) / B
        }
    }
    const G = {
        calculatedDuration: k && v || null,
        next: B => {
            const W = j(B);
            if (k) h.done = B >= v;
            else {
                let ne = B === 0 ? M : 0;
                P < 1 && (ne = B === 0 ? Ht(M) : sm(j, B, W));
                const J = Math.abs(ne) <= o,
                    pe = Math.abs(c - W) <= l;
                h.done = J && pe
            }
            return h.value = h.done ? c : W, h
        },
        toString: () => {
            const B = Math.min(ju(G), ho),
                W = im(ne => G.next(B * ne).value, B, 30);
            return B + "ms " + W
        },
        toTransition: () => {}
    };
    return G
}
po.applyToOptions = n => {
    const r = Lv(n, 100, po);
    return n.ease = r.ease, n.duration = Ht(r.duration), n.type = "keyframes", n
};

function ql({
    keyframes: n,
    velocity: r = 0,
    power: s = .8,
    timeConstant: o = 325,
    bounceDamping: l = 10,
    bounceStiffness: d = 500,
    modifyTarget: c,
    min: h,
    max: p,
    restDelta: y = .5,
    restSpeed: g
}) {
    const v = n[0],
        S = {
            done: !1,
            value: v
        },
        k = J => h !== void 0 && J < h || p !== void 0 && J > p,
        M = J => h === void 0 ? p : p === void 0 || Math.abs(h - J) < Math.abs(p - J) ? h : p;
    let P = s * r;
    const R = v + P,
        L = c === void 0 ? R : c(R);
    L !== R && (P = L - v);
    const U = J => -P * Math.exp(-J / o),
        j = J => L + U(J),
        G = J => {
            const pe = U(J),
                Se = j(J);
            S.done = Math.abs(pe) <= y, S.value = S.done ? L : Se
        };
    let B, W;
    const ne = J => {
        k(S.value) && (B = J, W = po({
            keyframes: [S.value, M(S.value)],
            velocity: sm(j, J, S.value),
            damping: l,
            stiffness: d,
            restDelta: y,
            restSpeed: g
        }))
    };
    return ne(0), {
        calculatedDuration: null,
        next: J => {
            let pe = !1;
            return !W && B === void 0 && (pe = !0, G(J), ne(J)), B !== void 0 && J >= B ? W.next(J - B) : (!pe && G(J), S)
        }
    }
}

function zv(n, r, s) {
    const o = [],
        l = s || rn.mix || rm,
        d = n.length - 1;
    for (let c = 0; c < d; c++) {
        let h = l(n[c], n[c + 1]);
        if (r) {
            const p = Array.isArray(r) ? r[c] || Rt : r;
            h = Ii(p, h)
        }
        o.push(h)
    }
    return o
}

function Uv(n, r, {
    clamp: s = !0,
    ease: o,
    mixer: l
} = {}) {
    const d = n.length;
    if (Cu(d === r.length), d === 1) return () => r[0];
    if (d === 2 && r[0] === r[1]) return () => r[1];
    const c = n[0] === n[1];
    n[0] > n[d - 1] && (n = [...n].reverse(), r = [...r].reverse());
    const h = zv(r, o, l),
        p = h.length,
        y = g => {
            if (c && g < n[0]) return r[0];
            let v = 0;
            if (p > 1)
                for (; v < n.length - 2 && !(g < n[v + 1]); v++);
            const S = Mi(n[v], n[v + 1], g);
            return h[v](S)
        };
    return s ? g => y(nn(n[0], n[d - 1], g)) : y
}

function $v(n, r) {
    const s = n[n.length - 1];
    for (let o = 1; o <= r; o++) {
        const l = Mi(0, r, o);
        n.push(Pe(s, 1, l))
    }
}

function bv(n) {
    const r = [0];
    return $v(r, n.length - 1), r
}

function Hv(n, r) {
    return n.map(s => s * r)
}

function Wv(n, r) {
    return n.map(() => r || qp).splice(0, n.length - 1)
}

function ki({
    duration: n = 300,
    keyframes: r,
    times: s,
    ease: o = "easeInOut"
}) {
    const l = nv(o) ? o.map(oh) : oh(o),
        d = {
            done: !1,
            value: r[0]
        },
        c = Hv(s && s.length === r.length ? s : bv(r), n),
        h = Uv(c, r, {
            ease: Array.isArray(l) ? l : Wv(r, l)
        });
    return {
        calculatedDuration: n,
        next: p => (d.value = h(p), d.done = p >= n, d)
    }
}
const Kv = n => n !== null;

function _u(n, {
    repeat: r,
    repeatType: s = "loop"
}, o, l = 1) {
    const d = n.filter(Kv),
        h = l < 0 || r && s !== "loop" && r % 2 === 1 ? 0 : d.length - 1;
    return !h || o === void 0 ? d[h] : o
}
const qv = {
    decay: ql,
    inertia: ql,
    tween: ki,
    keyframes: ki,
    spring: po
};

function om(n) {
    typeof n.type == "string" && (n.type = qv[n.type])
}
class Vu {
    constructor() {
        this.count = 0, this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this.count++, this._finished = new Promise(r => {
            this.resolve = r
        })
    }
    notifyFinished() {
        this.resolve()
    }
    then(r, s) {
        return this.finished.then(r, s)
    }
}
const Gv = n => n / 100;
class am extends Vu {
    constructor(r) {
        super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
            const {
                motionValue: s
            } = this.options;
            if (s && s.updatedAt !== ct.now() && this.tick(ct.now()), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: o
            } = this.options;
            o && o()
        }, this.options = r, this.initAnimation(), this.play(), r.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {
            options: r
        } = this;
        om(r);
        const {
            type: s = ki,
            repeat: o = 0,
            repeatDelay: l = 0,
            repeatType: d,
            velocity: c = 0
        } = r;
        let {
            keyframes: h
        } = r;
        const p = s || ki;
        p !== ki && typeof h[0] != "number" && (this.mixKeyframes = Ii(Gv, rm(h[0], h[1])), h = [0, 100]);
        const y = p({
            ...r,
            keyframes: h
        });
        d === "mirror" && (this.mirroredGenerator = p({
            ...r,
            keyframes: [...h].reverse(),
            velocity: -c
        })), y.calculatedDuration === null && (y.calculatedDuration = ju(y));
        const {
            calculatedDuration: g
        } = y;
        this.calculatedDuration = g, this.resolvedDuration = g + l, this.totalDuration = this.resolvedDuration * (o + 1) - l, this.generator = y
    }
    updateTime(r) {
        const s = Math.round(r - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = s
    }
    tick(r, s = !1) {
        const {
            generator: o,
            totalDuration: l,
            mixKeyframes: d,
            mirroredGenerator: c,
            resolvedDuration: h,
            calculatedDuration: p
        } = this;
        if (this.startTime === null) return o.next(0);
        const {
            delay: y = 0,
            keyframes: g,
            repeat: v,
            repeatType: S,
            repeatDelay: k,
            type: M,
            onUpdate: P,
            finalKeyframe: R
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, r) : this.speed < 0 && (this.startTime = Math.min(r - l / this.speed, this.startTime)), s ? this.currentTime = r : this.updateTime(r);
        const L = this.currentTime - y * (this.playbackSpeed >= 0 ? 1 : -1),
            U = this.playbackSpeed >= 0 ? L < 0 : L > l;
        this.currentTime = Math.max(L, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = l);
        let j = this.currentTime,
            G = o;
        if (v) {
            const J = Math.min(this.currentTime, l) / h;
            let pe = Math.floor(J),
                Se = J % 1;
            !Se && J >= 1 && (Se = 1), Se === 1 && pe--, pe = Math.min(pe, v + 1), !!(pe % 2) && (S === "reverse" ? (Se = 1 - Se, k && (Se -= k / h)) : S === "mirror" && (G = c)), j = nn(0, 1, Se) * h
        }
        const B = U ? {
            done: !1,
            value: g[0]
        } : G.next(j);
        d && (B.value = d(B.value));
        let {
            done: W
        } = B;
        !U && p !== null && (W = this.playbackSpeed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
        const ne = this.holdTime === null && (this.state === "finished" || this.state === "running" && W);
        return ne && M !== ql && (B.value = _u(g, this.options, R, this.speed)), P && P(B.value), ne && this.finish(), B
    }
    then(r, s) {
        return this.finished.then(r, s)
    }
    get duration() {
        return Wt(this.calculatedDuration)
    }
    get time() {
        return Wt(this.currentTime)
    }
    set time(r) {
        r = Ht(r), this.currentTime = r, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = r : this.driver && (this.startTime = this.driver.now() - r / this.playbackSpeed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(r) {
        this.updateTime(ct.now());
        const s = this.playbackSpeed !== r;
        this.playbackSpeed = r, s && (this.time = Wt(this.currentTime))
    }
    play() {
        if (this.isStopped) return;
        const {
            driver: r = Nv,
            onPlay: s,
            startTime: o
        } = this.options;
        this.driver || (this.driver = r(d => this.tick(d))), s && s();
        const l = this.driver.now();
        this.state === "finished" ? (this.updateFinished(), this.startTime = l) : this.holdTime !== null ? this.startTime = l - this.holdTime : this.startTime || (this.startTime = o ?? l), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        this.state = "paused", this.updateTime(ct.now()), this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: r
        } = this.options;
        r && r()
    }
    cancel() {
        this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown()
    }
    teardown() {
        this.notifyFinished(), this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(r) {
        return this.startTime = 0, this.tick(r, !0)
    }
    attachTimeline(r) {
        return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), r.observe(this)
    }
}

function Xv(n) {
    for (let r = 1; r < n.length; r++) n[r] ?? (n[r] = n[r - 1])
}
const Hn = n => n * 180 / Math.PI,
    Gl = n => {
        const r = Hn(Math.atan2(n[1], n[0]));
        return Xl(r)
    },
    Qv = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: n => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
        rotate: Gl,
        rotateZ: Gl,
        skewX: n => Hn(Math.atan(n[1])),
        skewY: n => Hn(Math.atan(n[2])),
        skew: n => (Math.abs(n[1]) + Math.abs(n[2])) / 2
    },
    Xl = n => (n = n % 360, n < 0 && (n += 360), n),
    ph = Gl,
    mh = n => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
    gh = n => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
    Yv = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: mh,
        scaleY: gh,
        scale: n => (mh(n) + gh(n)) / 2,
        rotateX: n => Xl(Hn(Math.atan2(n[6], n[5]))),
        rotateY: n => Xl(Hn(Math.atan2(-n[2], n[0]))),
        rotateZ: ph,
        rotate: ph,
        skewX: n => Hn(Math.atan(n[4])),
        skewY: n => Hn(Math.atan(n[1])),
        skew: n => (Math.abs(n[1]) + Math.abs(n[4])) / 2
    };

function yh(n) {
    return n.includes("scale") ? 1 : 0
}

function Ql(n, r) {
    if (!n || n === "none") return yh(r);
    const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let o, l;
    if (s) o = Yv, l = s;
    else {
        const h = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        o = Qv, l = h
    }
    if (!l) return yh(r);
    const d = o[r],
        c = l[1].split(",").map(Zv);
    return typeof d == "function" ? d(c) : c[d]
}
const Jv = (n, r) => {
    const {
        transform: s = "none"
    } = getComputedStyle(n);
    return Ql(s, r)
};

function Zv(n) {
    return parseFloat(n.trim())
}
const Ar = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    Mr = new Set(Ar),
    vh = n => n === Rr || n === re,
    e1 = new Set(["x", "y", "z"]),
    t1 = Ar.filter(n => !e1.has(n));

function n1(n) {
    const r = [];
    return t1.forEach(s => {
        const o = n.getValue(s);
        o !== void 0 && (r.push([s, o.get()]), o.set(s.startsWith("scale") ? 1 : 0))
    }), r
}
const Kn = {
    width: ({
        x: n
    }, {
        paddingLeft: r = "0",
        paddingRight: s = "0"
    }) => n.max - n.min - parseFloat(r) - parseFloat(s),
    height: ({
        y: n
    }, {
        paddingTop: r = "0",
        paddingBottom: s = "0"
    }) => n.max - n.min - parseFloat(r) - parseFloat(s),
    top: (n, {
        top: r
    }) => parseFloat(r),
    left: (n, {
        left: r
    }) => parseFloat(r),
    bottom: ({
        y: n
    }, {
        top: r
    }) => parseFloat(r) + (n.max - n.min),
    right: ({
        x: n
    }, {
        left: r
    }) => parseFloat(r) + (n.max - n.min),
    x: (n, {
        transform: r
    }) => Ql(r, "x"),
    y: (n, {
        transform: r
    }) => Ql(r, "y")
};
Kn.translateX = Kn.x;
Kn.translateY = Kn.y;
const qn = new Set;
let Yl = !1,
    Jl = !1,
    Zl = !1;

function lm() {
    if (Jl) {
        const n = Array.from(qn).filter(o => o.needsMeasurement),
            r = new Set(n.map(o => o.element)),
            s = new Map;
        r.forEach(o => {
            const l = n1(o);
            l.length && (s.set(o, l), o.render())
        }), n.forEach(o => o.measureInitialState()), r.forEach(o => {
            o.render();
            const l = s.get(o);
            l && l.forEach(([d, c]) => {
                var h;
                (h = o.getValue(d)) == null || h.set(c)
            })
        }), n.forEach(o => o.measureEndState()), n.forEach(o => {
            o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY)
        })
    }
    Jl = !1, Yl = !1, qn.forEach(n => n.complete(Zl)), qn.clear()
}

function um() {
    qn.forEach(n => {
        n.readKeyframes(), n.needsMeasurement && (Jl = !0)
    })
}

function r1() {
    Zl = !0, um(), lm(), Zl = !1
}
class Fu {
    constructor(r, s, o, l, d, c = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...r], this.onComplete = s, this.name = o, this.motionValue = l, this.element = d, this.isAsync = c
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (qn.add(this), Yl || (Yl = !0, Re.read(um), Re.resolveKeyframes(lm))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: r,
            name: s,
            element: o,
            motionValue: l
        } = this;
        if (r[0] === null) {
            const d = l == null ? void 0 : l.get(),
                c = r[r.length - 1];
            if (d !== void 0) r[0] = d;
            else if (o && s) {
                const h = o.readValue(s, c);
                h != null && (r[0] = h)
            }
            r[0] === void 0 && (r[0] = c), l && d === void 0 && l.set(r[0])
        }
        Xv(r)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(r = !1) {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, r), qn.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, qn.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const i1 = n => n.startsWith("--");

function s1(n, r, s) {
    i1(r) ? n.style.setProperty(r, s) : n.style[r] = s
}
const o1 = ku(() => window.ScrollTimeline !== void 0),
    a1 = {};

function l1(n, r) {
    const s = ku(n);
    return () => a1[r] ?? s()
}
const cm = l1(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    Ti = ([n, r, s, o]) => `cubic-bezier(${n}, ${r}, ${s}, ${o})`,
    wh = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Ti([0, .65, .55, 1]),
        circOut: Ti([.55, 0, 1, .45]),
        backIn: Ti([.31, .01, .66, -.59]),
        backOut: Ti([.33, 1.53, .69, .99])
    };

function fm(n, r) {
    if (n) return typeof n == "function" ? cm() ? im(n, r) : "ease-out" : Gp(n) ? Ti(n) : Array.isArray(n) ? n.map(s => fm(s, r) || wh.easeOut) : wh[n]
}

function u1(n, r, s, {
    delay: o = 0,
    duration: l = 300,
    repeat: d = 0,
    repeatType: c = "loop",
    ease: h = "easeOut",
    times: p
} = {}, y = void 0) {
    const g = {
        [r]: s
    };
    p && (g.offset = p);
    const v = fm(h, l);
    Array.isArray(v) && (g.easing = v);
    const S = {
        delay: o,
        duration: l,
        easing: Array.isArray(v) ? "linear" : v,
        fill: "both",
        iterations: d + 1,
        direction: c === "reverse" ? "alternate" : "normal"
    };
    return y && (S.pseudoElement = y), n.animate(g, S)
}

function dm(n) {
    return typeof n == "function" && "applyToOptions" in n
}

function c1({
    type: n,
    ...r
}) {
    return dm(n) && cm() ? n.applyToOptions(r) : (r.duration ?? (r.duration = 300), r.ease ?? (r.ease = "easeOut"), r)
}
class f1 extends Vu {
    constructor(r) {
        if (super(), this.finishedTime = null, this.isStopped = !1, !r) return;
        const {
            element: s,
            name: o,
            keyframes: l,
            pseudoElement: d,
            allowFlatten: c = !1,
            finalKeyframe: h,
            onComplete: p
        } = r;
        this.isPseudoElement = !!d, this.allowFlatten = c, this.options = r, Cu(typeof r.type != "string");
        const y = c1(r);
        this.animation = u1(s, o, l, y, d), y.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !d) {
                const g = _u(l, this.options, h, this.speed);
                this.updateMotionValue ? this.updateMotionValue(g) : s1(s, o, g), this.animation.cancel()
            }
            p == null || p(), this.notifyFinished()
        }, this.animation.oncancel = () => this.notifyFinished()
    }
    play() {
        this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var r, s;
        (s = (r = this.animation).finish) == null || s.call(r)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const {
            state: r
        } = this;
        r === "idle" || r === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var r, s;
        this.isPseudoElement || (s = (r = this.animation).commitStyles) == null || s.call(r)
    }
    get duration() {
        var s, o;
        const r = ((o = (s = this.animation.effect) == null ? void 0 : s.getComputedTiming) == null ? void 0 : o.call(s).duration) || 0;
        return Wt(Number(r))
    }
    get time() {
        return Wt(Number(this.animation.currentTime) || 0)
    }
    set time(r) {
        this.finishedTime = null, this.animation.currentTime = Ht(r)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(r) {
        r < 0 && (this.finishedTime = null), this.animation.playbackRate = r
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return Number(this.animation.startTime)
    }
    set startTime(r) {
        this.animation.startTime = r
    }
    attachTimeline({
        timeline: r,
        observe: s
    }) {
        var o;
        return this.allowFlatten && ((o = this.animation.effect) == null || o.updateTiming({
            easing: "linear"
        })), this.animation.onfinish = null, r && o1() ? (this.animation.timeline = r, Rt) : s(this)
    }
}
const hm = {
    anticipate: Hp,
    backInOut: bp,
    circInOut: Kp
};

function d1(n) {
    return n in hm
}

function h1(n) {
    typeof n.ease == "string" && d1(n.ease) && (n.ease = hm[n.ease])
}
const xh = 10;
class p1 extends f1 {
    constructor(r) {
        h1(r), om(r), super(r), r.startTime && (this.startTime = r.startTime), this.options = r
    }
    updateMotionValue(r) {
        const {
            motionValue: s,
            onUpdate: o,
            onComplete: l,
            element: d,
            ...c
        } = this.options;
        if (!s) return;
        if (r !== void 0) {
            s.set(r);
            return
        }
        const h = new am({
                ...c,
                autoplay: !1
            }),
            p = Ht(this.finishedTime ?? this.time);
        s.setWithVelocity(h.sample(p - xh).value, h.sample(p).value, xh), h.stop()
    }
}
const Sh = (n, r) => r === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && (Pn.test(n) || n === "0") && !n.startsWith("url("));

function m1(n) {
    const r = n[0];
    if (n.length === 1) return !0;
    for (let s = 0; s < n.length; s++)
        if (n[s] !== r) return !0
}

function g1(n, r, s, o) {
    const l = n[0];
    if (l === null) return !1;
    if (r === "display" || r === "visibility") return !0;
    const d = n[n.length - 1],
        c = Sh(l, r),
        h = Sh(d, r);
    return !c || !h ? !1 : m1(n) || (s === "spring" || dm(s)) && o
}
const y1 = new Set(["opacity", "clipPath", "filter", "transform"]),
    v1 = ku(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function w1(n) {
    const {
        motionValue: r,
        name: s,
        repeatDelay: o,
        repeatType: l,
        damping: d,
        type: c
    } = n;
    if (!r || !r.owner || !(r.owner.current instanceof HTMLElement)) return !1;
    const {
        onUpdate: h,
        transformTemplate: p
    } = r.owner.getProps();
    return v1() && s && y1.has(s) && (s !== "transform" || !p) && !h && !o && l !== "mirror" && d !== 0 && c !== "inertia"
}
const x1 = 40;
class S1 extends Vu {
    constructor({
        autoplay: r = !0,
        delay: s = 0,
        type: o = "keyframes",
        repeat: l = 0,
        repeatDelay: d = 0,
        repeatType: c = "loop",
        keyframes: h,
        name: p,
        motionValue: y,
        element: g,
        ...v
    }) {
        var M;
        super(), this.stop = () => {
            var P, R;
            this._animation ? (this._animation.stop(), (P = this.stopTimeline) == null || P.call(this)) : (R = this.keyframeResolver) == null || R.cancel()
        }, this.createdAt = ct.now();
        const S = {
                autoplay: r,
                delay: s,
                type: o,
                repeat: l,
                repeatDelay: d,
                repeatType: c,
                name: p,
                motionValue: y,
                element: g,
                ...v
            },
            k = (g == null ? void 0 : g.KeyframeResolver) || Fu;
        this.keyframeResolver = new k(h, (P, R, L) => this.onKeyframesResolved(P, R, S, !L), p, y, g), (M = this.keyframeResolver) == null || M.scheduleResolve()
    }
    onKeyframesResolved(r, s, o, l) {
        this.keyframeResolver = void 0;
        const {
            name: d,
            type: c,
            velocity: h,
            delay: p,
            isHandoff: y,
            onUpdate: g
        } = o;
        this.resolvedAt = ct.now(), g1(r, d, c, h) || ((rn.instantAnimations || !p) && (g == null || g(_u(r, o, s))), r[0] = r[r.length - 1], o.duration = 0, o.repeat = 0);
        const S = {
                startTime: l ? this.resolvedAt ? this.resolvedAt - this.createdAt > x1 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
                finalKeyframe: s,
                ...o,
                keyframes: r
            },
            k = !y && w1(S) ? new p1({
                ...S,
                element: S.motionValue.owner.current
            }) : new am(S);
        k.finished.then(() => this.notifyFinished()).catch(Rt), this.pendingTimeline && (this.stopTimeline = k.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = k
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(r, s) {
        return this.finished.finally(r).then(() => {})
    }
    get animation() {
        return this._animation || r1(), this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get time() {
        return this.animation.time
    }
    set time(r) {
        this.animation.time = r
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(r) {
        this.animation.speed = r
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(r) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(r) : this.pendingTimeline = r, () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        this.animation.cancel()
    }
}
const T1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function E1(n) {
    const r = T1.exec(n);
    if (!r) return [, ];
    const [, s, o, l] = r;
    return [`--${s??o}`, l]
}

function pm(n, r, s = 1) {
    const [o, l] = E1(n);
    if (!o) return;
    const d = window.getComputedStyle(r).getPropertyValue(o);
    if (d) {
        const c = d.trim();
        return Vp(c) ? parseFloat(c) : c
    }
    return Du(l) ? pm(l, r, s + 1) : l
}

function Iu(n, r) {
    return (n == null ? void 0 : n[r]) ?? (n == null ? void 0 : n.default) ?? n
}
const mm = new Set(["width", "height", "top", "left", "right", "bottom", ...Ar]),
    C1 = {
        test: n => n === "auto",
        parse: n => n
    },
    gm = n => r => r.test(n),
    ym = [Rr, re, Kt, Cn, mv, pv, C1],
    Th = n => ym.find(gm(n));

function k1(n) {
    return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || Fp(n) : !0
}
const P1 = new Set(["brightness", "contrast", "saturate", "opacity"]);

function R1(n) {
    const [r, s] = n.slice(0, -1).split("(");
    if (r === "drop-shadow") return n;
    const [o] = s.match(Nu) || [];
    if (!o) return n;
    const l = s.replace(o, "");
    let d = P1.has(r) ? 1 : 0;
    return o !== s && (d *= 100), r + "(" + d + l + ")"
}
const A1 = /\b([a-z-]*)\(.*?\)/gu,
    eu = {
        ...Pn,
        getAnimatableNone: n => {
            const r = n.match(A1);
            return r ? r.map(R1).join(" ") : n
        }
    },
    Eh = {
        ...Rr,
        transform: Math.round
    },
    M1 = {
        rotate: Cn,
        rotateX: Cn,
        rotateY: Cn,
        rotateZ: Cn,
        scale: ro,
        scaleX: ro,
        scaleY: ro,
        scaleZ: ro,
        skew: Cn,
        skewX: Cn,
        skewY: Cn,
        distance: re,
        translateX: re,
        translateY: re,
        translateZ: re,
        x: re,
        y: re,
        z: re,
        perspective: re,
        transformPerspective: re,
        opacity: Di,
        originX: lh,
        originY: lh,
        originZ: re
    },
    Bu = {
        borderWidth: re,
        borderTopWidth: re,
        borderRightWidth: re,
        borderBottomWidth: re,
        borderLeftWidth: re,
        borderRadius: re,
        radius: re,
        borderTopLeftRadius: re,
        borderTopRightRadius: re,
        borderBottomRightRadius: re,
        borderBottomLeftRadius: re,
        width: re,
        maxWidth: re,
        height: re,
        maxHeight: re,
        top: re,
        right: re,
        bottom: re,
        left: re,
        padding: re,
        paddingTop: re,
        paddingRight: re,
        paddingBottom: re,
        paddingLeft: re,
        margin: re,
        marginTop: re,
        marginRight: re,
        marginBottom: re,
        marginLeft: re,
        backgroundPositionX: re,
        backgroundPositionY: re,
        ...M1,
        zIndex: Eh,
        fillOpacity: Di,
        strokeOpacity: Di,
        numOctaves: Eh
    },
    D1 = {
        ...Bu,
        color: Ge,
        backgroundColor: Ge,
        outlineColor: Ge,
        fill: Ge,
        stroke: Ge,
        borderColor: Ge,
        borderTopColor: Ge,
        borderRightColor: Ge,
        borderBottomColor: Ge,
        borderLeftColor: Ge,
        filter: eu,
        WebkitFilter: eu
    },
    vm = n => D1[n];

function wm(n, r) {
    let s = vm(n);
    return s !== eu && (s = Pn), s.getAnimatableNone ? s.getAnimatableNone(r) : void 0
}
const N1 = new Set(["auto", "none", "0"]);

function L1(n, r, s) {
    let o = 0,
        l;
    for (; o < n.length && !l;) {
        const d = n[o];
        typeof d == "string" && !N1.has(d) && Ni(d).values.length && (l = n[o]), o++
    }
    if (l && s)
        for (const d of r) n[d] = wm(s, l)
}
class O1 extends Fu {
    constructor(r, s, o, l, d) {
        super(r, s, o, l, d, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: r,
            element: s,
            name: o
        } = this;
        if (!s || !s.current) return;
        super.readKeyframes();
        for (let p = 0; p < r.length; p++) {
            let y = r[p];
            if (typeof y == "string" && (y = y.trim(), Du(y))) {
                const g = pm(y, s.current);
                g !== void 0 && (r[p] = g), p === r.length - 1 && (this.finalKeyframe = y)
            }
        }
        if (this.resolveNoneKeyframes(), !mm.has(o) || r.length !== 2) return;
        const [l, d] = r, c = Th(l), h = Th(d);
        if (c !== h)
            if (vh(c) && vh(h))
                for (let p = 0; p < r.length; p++) {
                    const y = r[p];
                    typeof y == "string" && (r[p] = parseFloat(y))
                } else Kn[o] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: r,
            name: s
        } = this, o = [];
        for (let l = 0; l < r.length; l++)(r[l] === null || k1(r[l])) && o.push(l);
        o.length && L1(r, o, s)
    }
    measureInitialState() {
        const {
            element: r,
            unresolvedKeyframes: s,
            name: o
        } = this;
        if (!r || !r.current) return;
        o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Kn[o](r.measureViewportBox(), window.getComputedStyle(r.current)), s[0] = this.measuredOrigin;
        const l = s[s.length - 1];
        l !== void 0 && r.getValue(o, l).jump(l, !1)
    }
    measureEndState() {
        var h;
        const {
            element: r,
            name: s,
            unresolvedKeyframes: o
        } = this;
        if (!r || !r.current) return;
        const l = r.getValue(s);
        l && l.jump(this.measuredOrigin, !1);
        const d = o.length - 1,
            c = o[d];
        o[d] = Kn[s](r.measureViewportBox(), window.getComputedStyle(r.current)), c !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = c), (h = this.removedTransforms) != null && h.length && this.removedTransforms.forEach(([p, y]) => {
            r.getValue(p).set(y)
        }), this.resolveNoneKeyframes()
    }
}

function j1(n, r, s) {
    if (n instanceof EventTarget) return [n];
    if (typeof n == "string") {
        let o = document;
        const l = (s == null ? void 0 : s[n]) ?? o.querySelectorAll(n);
        return l ? Array.from(l) : []
    }
    return Array.from(n)
}
const Ch = 30,
    _1 = n => !isNaN(parseFloat(n));
class V1 {
    constructor(r, s = {}) {
        this.version = "__VERSION__", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (o, l = !0) => {
            var c, h;
            const d = ct.now();
            if (this.updatedAt !== d && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && ((c = this.events.change) == null || c.notify(this.current), this.dependents))
                for (const p of this.dependents) p.dirty();
            l && ((h = this.events.renderRequest) == null || h.notify(this.current))
        }, this.hasAnimated = !1, this.setCurrent(r), this.owner = s.owner
    }
    setCurrent(r) {
        this.current = r, this.updatedAt = ct.now(), this.canTrackVelocity === null && r !== void 0 && (this.canTrackVelocity = _1(this.current))
    }
    setPrevFrameValue(r = this.current) {
        this.prevFrameValue = r, this.prevUpdatedAt = this.updatedAt
    }
    onChange(r) {
        return this.on("change", r)
    }
    on(r, s) {
        this.events[r] || (this.events[r] = new Pu);
        const o = this.events[r].add(s);
        return r === "change" ? () => {
            o(), Re.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : o
    }
    clearListeners() {
        for (const r in this.events) this.events[r].clear()
    }
    attach(r, s) {
        this.passiveEffect = r, this.stopPassiveEffect = s
    }
    set(r, s = !0) {
        !s || !this.passiveEffect ? this.updateAndNotify(r, s) : this.passiveEffect(r, this.updateAndNotify)
    }
    setWithVelocity(r, s, o) {
        this.set(s), this.prev = void 0, this.prevFrameValue = r, this.prevUpdatedAt = this.updatedAt - o
    }
    jump(r, s = !0) {
        this.updateAndNotify(r), this.prev = r, this.prevUpdatedAt = this.prevFrameValue = void 0, s && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var r;
        (r = this.events.change) == null || r.notify(this.current)
    }
    addDependent(r) {
        this.dependents || (this.dependents = new Set), this.dependents.add(r)
    }
    removeDependent(r) {
        this.dependents && this.dependents.delete(r)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const r = ct.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || r - this.updatedAt > Ch) return 0;
        const s = Math.min(this.updatedAt - this.prevUpdatedAt, Ch);
        return Ip(parseFloat(this.current) - parseFloat(this.prevFrameValue), s)
    }
    start(r) {
        return this.stop(), new Promise(s => {
            this.hasAnimated = !0, this.animation = r(s), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var r, s;
        (r = this.dependents) == null || r.clear(), (s = this.events.destroy) == null || s.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Li(n, r) {
    return new V1(n, r)
}
const xm = (n, r) => r && typeof n == "number" ? r.transform(n) : n,
    {
        schedule: zu
    } = Xp(queueMicrotask, !1),
    Vt = {
        x: !1,
        y: !1
    };

function Sm() {
    return Vt.x || Vt.y
}

function F1(n) {
    return n === "x" || n === "y" ? Vt[n] ? null : (Vt[n] = !0, () => {
        Vt[n] = !1
    }) : Vt.x || Vt.y ? null : (Vt.x = Vt.y = !0, () => {
        Vt.x = Vt.y = !1
    })
}

function Tm(n, r) {
    const s = j1(n),
        o = new AbortController,
        l = {
            passive: !0,
            ...r,
            signal: o.signal
        };
    return [s, l, () => o.abort()]
}

function kh(n) {
    return !(n.pointerType === "touch" || Sm())
}

function I1(n, r, s = {}) {
    const [o, l, d] = Tm(n, s), c = h => {
        if (!kh(h)) return;
        const {
            target: p
        } = h, y = r(p, h);
        if (typeof y != "function" || !p) return;
        const g = v => {
            kh(v) && (y(v), p.removeEventListener("pointerleave", g))
        };
        p.addEventListener("pointerleave", g, l)
    };
    return o.forEach(h => {
        h.addEventListener("pointerenter", c, l)
    }), d
}
const Em = (n, r) => r ? n === r ? !0 : Em(n, r.parentElement) : !1,
    Uu = n => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1,
    B1 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function z1(n) {
    return B1.has(n.tagName) || n.tabIndex !== -1
}
const Ei = new WeakSet;

function Ph(n) {
    return r => {
        r.key === "Enter" && n(r)
    }
}

function Ol(n, r) {
    n.dispatchEvent(new PointerEvent("pointer" + r, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const U1 = (n, r) => {
    const s = n.currentTarget;
    if (!s) return;
    const o = Ph(() => {
        if (Ei.has(s)) return;
        Ol(s, "down");
        const l = Ph(() => {
                Ol(s, "up")
            }),
            d = () => Ol(s, "cancel");
        s.addEventListener("keyup", l, r), s.addEventListener("blur", d, r)
    });
    s.addEventListener("keydown", o, r), s.addEventListener("blur", () => s.removeEventListener("keydown", o), r)
};

function Rh(n) {
    return Uu(n) && !Sm()
}

function $1(n, r, s = {}) {
    const [o, l, d] = Tm(n, s), c = h => {
        const p = h.currentTarget;
        if (!Rh(h) || Ei.has(p)) return;
        Ei.add(p);
        const y = r(p, h),
            g = (k, M) => {
                window.removeEventListener("pointerup", v), window.removeEventListener("pointercancel", S), Ei.has(p) && Ei.delete(p), Rh(k) && typeof y == "function" && y(k, {
                    success: M
                })
            },
            v = k => {
                g(k, p === window || p === document || s.useGlobalTarget || Em(p, k.target))
            },
            S = k => {
                g(k, !1)
            };
        window.addEventListener("pointerup", v, l), window.addEventListener("pointercancel", S, l)
    };
    return o.forEach(h => {
        (s.useGlobalTarget ? window : h).addEventListener("pointerdown", c, l), h instanceof HTMLElement && (h.addEventListener("focus", y => U1(y, l)), !z1(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0))
    }), d
}
const b1 = [...ym, Ge, Pn],
    H1 = n => b1.find(gm(n)),
    Cm = b.createContext({
        strict: !1
    }),
    Ah = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    Pr = {};
for (const n in Ah) Pr[n] = {
    isEnabled: r => Ah[n].some(s => !!r[s])
};

function W1(n) {
    for (const r in n) Pr[r] = {
        ...Pr[r],
        ...n[r]
    }
}
const K1 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function mo(n) {
    return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || K1.has(n)
}
let km = n => !mo(n);

function q1(n) {
    n && (km = r => r.startsWith("on") ? !mo(r) : n(r))
}
try {
    q1(require("@emotion/is-prop-valid").default)
} catch {}

function G1(n, r, s) {
    const o = {};
    for (const l in n) l === "values" && typeof n.values == "object" || (km(l) || s === !0 && mo(l) || !r && !mo(l) || n.draggable && l.startsWith("onDrag")) && (o[l] = n[l]);
    return o
}

function X1(n) {
    if (typeof Proxy > "u") return n;
    const r = new Map,
        s = (...o) => n(...o);
    return new Proxy(s, {
        get: (o, l) => l === "create" ? n : (r.has(l) || r.set(l, n(l)), r.get(l))
    })
}
const xo = b.createContext({});

function So(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function"
}

function Oi(n) {
    return typeof n == "string" || Array.isArray(n)
}
const $u = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    bu = ["initial", ...$u];

function To(n) {
    return So(n.animate) || bu.some(r => Oi(n[r]))
}

function Pm(n) {
    return !!(To(n) || n.variants)
}

function Q1(n, r) {
    if (To(n)) {
        const {
            initial: s,
            animate: o
        } = n;
        return {
            initial: s === !1 || Oi(s) ? s : void 0,
            animate: Oi(o) ? o : void 0
        }
    }
    return n.inherit !== !1 ? r : {}
}

function Y1(n) {
    const {
        initial: r,
        animate: s
    } = Q1(n, b.useContext(xo));
    return b.useMemo(() => ({
        initial: r,
        animate: s
    }), [Mh(r), Mh(s)])
}

function Mh(n) {
    return Array.isArray(n) ? n.join(" ") : n
}
const J1 = Symbol.for("motionComponentSymbol");

function Tr(n) {
    return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current")
}

function Z1(n, r, s) {
    return b.useCallback(o => {
        o && n.onMount && n.onMount(o), r && (o ? r.mount(o) : r.unmount()), s && (typeof s == "function" ? s(o) : Tr(s) && (s.current = o))
    }, [r])
}
const Hu = n => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    ew = "framerAppearId",
    Rm = "data-" + Hu(ew),
    Am = b.createContext({});

function tw(n, r, s, o, l) {
    var P, R;
    const {
        visualElement: d
    } = b.useContext(xo), c = b.useContext(Cm), h = b.useContext(wo), p = b.useContext(xu).reducedMotion, y = b.useRef(null);
    o = o || c.renderer, !y.current && o && (y.current = o(n, {
        visualState: r,
        parent: d,
        props: s,
        presenceContext: h,
        blockInitialAnimation: h ? h.initial === !1 : !1,
        reducedMotionConfig: p
    }));
    const g = y.current,
        v = b.useContext(Am);
    g && !g.projection && l && (g.type === "html" || g.type === "svg") && nw(y.current, s, l, v);
    const S = b.useRef(!1);
    b.useInsertionEffect(() => {
        g && S.current && g.update(s, h)
    });
    const k = s[Rm],
        M = b.useRef(!!k && !((P = window.MotionHandoffIsComplete) != null && P.call(window, k)) && ((R = window.MotionHasOptimisedAnimation) == null ? void 0 : R.call(window, k)));
    return jp(() => {
        g && (S.current = !0, window.MotionIsMounted = !0, g.updateFeatures(), zu.render(g.render), M.current && g.animationState && g.animationState.animateChanges())
    }), b.useEffect(() => {
        g && (!M.current && g.animationState && g.animationState.animateChanges(), M.current && (queueMicrotask(() => {
            var L;
            (L = window.MotionHandoffMarkAsComplete) == null || L.call(window, k)
        }), M.current = !1))
    }), g
}

function nw(n, r, s, o) {
    const {
        layoutId: l,
        layout: d,
        drag: c,
        dragConstraints: h,
        layoutScroll: p,
        layoutRoot: y,
        layoutCrossfade: g
    } = r;
    n.projection = new s(n.latestValues, r["data-framer-portal-id"] ? void 0 : Mm(n.parent)), n.projection.setOptions({
        layoutId: l,
        layout: d,
        alwaysMeasureLayout: !!c || h && Tr(h),
        visualElement: n,
        animationType: typeof d == "string" ? d : "both",
        initialPromotionConfig: o,
        crossfade: g,
        layoutScroll: p,
        layoutRoot: y
    })
}

function Mm(n) {
    if (n) return n.options.allowProjection !== !1 ? n.projection : Mm(n.parent)
}

function rw({
    preloadedFeatures: n,
    createVisualElement: r,
    useRender: s,
    useVisualState: o,
    Component: l
}) {
    n && W1(n);

    function d(h, p) {
        let y;
        const g = {
                ...b.useContext(xu),
                ...h,
                layoutId: iw(h)
            },
            {
                isStatic: v
            } = g,
            S = Y1(h),
            k = o(h, v);
        if (!v && wu) {
            sw();
            const M = ow(g);
            y = M.MeasureLayout, S.visualElement = tw(l, k, g, r, M.ProjectionNode)
        }
        return O.jsxs(xo.Provider, {
            value: S,
            children: [y && S.visualElement ? O.jsx(y, {
                visualElement: S.visualElement,
                ...g
            }) : null, s(l, h, Z1(k, S.visualElement, p), k, v, S.visualElement)]
        })
    }
    d.displayName = `motion.${typeof l=="string"?l:`create(${l.displayName??l.name??""})`}`;
    const c = b.forwardRef(d);
    return c[J1] = l, c
}

function iw({
    layoutId: n
}) {
    const r = b.useContext(yu).id;
    return r && n !== void 0 ? r + "-" + n : n
}

function sw(n, r) {
    b.useContext(Cm).strict
}

function ow(n) {
    const {
        drag: r,
        layout: s
    } = Pr;
    if (!r && !s) return {};
    const o = {
        ...r,
        ...s
    };
    return {
        MeasureLayout: r != null && r.isEnabled(n) || s != null && s.isEnabled(n) ? o.MeasureLayout : void 0,
        ProjectionNode: o.ProjectionNode
    }
}
const ji = {};

function aw(n) {
    for (const r in n) ji[r] = n[r], Mu(r) && (ji[r].isCSSVariable = !0)
}

function Dm(n, {
    layout: r,
    layoutId: s
}) {
    return Mr.has(n) || n.startsWith("origin") || (r || s !== void 0) && (!!ji[n] || n === "opacity")
}
const Qe = n => !!(n && n.getVelocity),
    lw = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    uw = Ar.length;

function cw(n, r, s) {
    let o = "",
        l = !0;
    for (let d = 0; d < uw; d++) {
        const c = Ar[d],
            h = n[c];
        if (h === void 0) continue;
        let p = !0;
        if (typeof h == "number" ? p = h === (c.startsWith("scale") ? 1 : 0) : p = parseFloat(h) === 0, !p || s) {
            const y = xm(h, Bu[c]);
            if (!p) {
                l = !1;
                const g = lw[c] || c;
                o += `${g}(${y}) `
            }
            s && (r[c] = y)
        }
    }
    return o = o.trim(), s ? o = s(r, l ? "" : o) : l && (o = "none"), o
}

function Wu(n, r, s) {
    const {
        style: o,
        vars: l,
        transformOrigin: d
    } = n;
    let c = !1,
        h = !1;
    for (const p in r) {
        const y = r[p];
        if (Mr.has(p)) {
            c = !0;
            continue
        } else if (Mu(p)) {
            l[p] = y;
            continue
        } else {
            const g = xm(y, Bu[p]);
            p.startsWith("origin") ? (h = !0, d[p] = g) : o[p] = g
        }
    }
    if (r.transform || (c || s ? o.transform = cw(r, n.transform, s) : o.transform && (o.transform = "none")), h) {
        const {
            originX: p = "50%",
            originY: y = "50%",
            originZ: g = 0
        } = d;
        o.transformOrigin = `${p} ${y} ${g}`
    }
}
const Ku = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function Nm(n, r, s) {
    for (const o in r) !Qe(r[o]) && !Dm(o, s) && (n[o] = r[o])
}

function fw({
    transformTemplate: n
}, r) {
    return b.useMemo(() => {
        const s = Ku();
        return Wu(s, r, n), Object.assign({}, s.vars, s.style)
    }, [r])
}

function dw(n, r) {
    const s = n.style || {},
        o = {};
    return Nm(o, s, n), Object.assign(o, fw(n, r)), o
}

function hw(n, r) {
    const s = {},
        o = dw(n, r);
    return n.drag && n.dragListener !== !1 && (s.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = n.drag === !0 ? "none" : `pan-${n.drag==="x"?"y":"x"}`), n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (s.tabIndex = 0), s.style = o, s
}
const pw = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function qu(n) {
    return typeof n != "string" || n.includes("-") ? !1 : !!(pw.indexOf(n) > -1 || /[A-Z]/u.test(n))
}
const mw = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    gw = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function yw(n, r, s = 1, o = 0, l = !0) {
    n.pathLength = 1;
    const d = l ? mw : gw;
    n[d.offset] = re.transform(-o);
    const c = re.transform(r),
        h = re.transform(s);
    n[d.array] = `${c} ${h}`
}

function Lm(n, {
    attrX: r,
    attrY: s,
    attrScale: o,
    pathLength: l,
    pathSpacing: d = 1,
    pathOffset: c = 0,
    ...h
}, p, y, g) {
    if (Wu(n, h, y), p) {
        n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
        return
    }
    n.attrs = n.style, n.style = {};
    const {
        attrs: v,
        style: S
    } = n;
    v.transform && (S.transform = v.transform, delete v.transform), (S.transform || v.transformOrigin) && (S.transformOrigin = v.transformOrigin ?? "50% 50%", delete v.transformOrigin), S.transform && (S.transformBox = (g == null ? void 0 : g.transformBox) ?? "fill-box", delete v.transformBox), r !== void 0 && (v.x = r), s !== void 0 && (v.y = s), o !== void 0 && (v.scale = o), l !== void 0 && yw(v, l, d, c, !1)
}
const Om = () => ({
        ...Ku(),
        attrs: {}
    }),
    jm = n => typeof n == "string" && n.toLowerCase() === "svg";

function vw(n, r, s, o) {
    const l = b.useMemo(() => {
        const d = Om();
        return Lm(d, r, jm(o), n.transformTemplate, n.style), {
            ...d.attrs,
            style: {
                ...d.style
            }
        }
    }, [r]);
    if (n.style) {
        const d = {};
        Nm(d, n.style, n), l.style = {
            ...d,
            ...l.style
        }
    }
    return l
}

function ww(n = !1) {
    return (s, o, l, {
        latestValues: d
    }, c) => {
        const p = (qu(s) ? vw : hw)(o, d, c, s),
            y = G1(o, typeof s == "string", n),
            g = s !== b.Fragment ? {
                ...y,
                ...p,
                ref: l
            } : {},
            {
                children: v
            } = o,
            S = b.useMemo(() => Qe(v) ? v.get() : v, [v]);
        return b.createElement(s, {
            ...g,
            children: S
        })
    }
}

function Dh(n) {
    const r = [{}, {}];
    return n == null || n.values.forEach((s, o) => {
        r[0][o] = s.get(), r[1][o] = s.getVelocity()
    }), r
}

function Gu(n, r, s, o) {
    if (typeof r == "function") {
        const [l, d] = Dh(o);
        r = r(s !== void 0 ? s : n.custom, l, d)
    }
    if (typeof r == "string" && (r = n.variants && n.variants[r]), typeof r == "function") {
        const [l, d] = Dh(o);
        r = r(s !== void 0 ? s : n.custom, l, d)
    }
    return r
}

function oo(n) {
    return Qe(n) ? n.get() : n
}

function xw({
    scrapeMotionValuesFromProps: n,
    createRenderState: r
}, s, o, l) {
    return {
        latestValues: Sw(s, o, l, n),
        renderState: r()
    }
}
const _m = n => (r, s) => {
    const o = b.useContext(xo),
        l = b.useContext(wo),
        d = () => xw(n, r, o, l);
    return s ? d() : vu(d)
};

function Sw(n, r, s, o) {
    const l = {},
        d = o(n, {});
    for (const S in d) l[S] = oo(d[S]);
    let {
        initial: c,
        animate: h
    } = n;
    const p = To(n),
        y = Pm(n);
    r && y && !p && n.inherit !== !1 && (c === void 0 && (c = r.initial), h === void 0 && (h = r.animate));
    let g = s ? s.initial === !1 : !1;
    g = g || c === !1;
    const v = g ? h : c;
    if (v && typeof v != "boolean" && !So(v)) {
        const S = Array.isArray(v) ? v : [v];
        for (let k = 0; k < S.length; k++) {
            const M = Gu(n, S[k]);
            if (M) {
                const {
                    transitionEnd: P,
                    transition: R,
                    ...L
                } = M;
                for (const U in L) {
                    let j = L[U];
                    if (Array.isArray(j)) {
                        const G = g ? j.length - 1 : 0;
                        j = j[G]
                    }
                    j !== null && (l[U] = j)
                }
                for (const U in P) l[U] = P[U]
            }
        }
    }
    return l
}

function Xu(n, r, s) {
    var d;
    const {
        style: o
    } = n, l = {};
    for (const c in o)(Qe(o[c]) || r.style && Qe(r.style[c]) || Dm(c, n) || ((d = s == null ? void 0 : s.getValue(c)) == null ? void 0 : d.liveStyle) !== void 0) && (l[c] = o[c]);
    return l
}
const Tw = {
    useVisualState: _m({
        scrapeMotionValuesFromProps: Xu,
        createRenderState: Ku
    })
};

function Vm(n, r, s) {
    const o = Xu(n, r, s);
    for (const l in n)
        if (Qe(n[l]) || Qe(r[l])) {
            const d = Ar.indexOf(l) !== -1 ? "attr" + l.charAt(0).toUpperCase() + l.substring(1) : l;
            o[d] = n[l]
        } return o
}
const Ew = {
    useVisualState: _m({
        scrapeMotionValuesFromProps: Vm,
        createRenderState: Om
    })
};

function Cw(n, r) {
    return function(o, {
        forwardMotionProps: l
    } = {
        forwardMotionProps: !1
    }) {
        const c = {
            ...qu(o) ? Ew : Tw,
            preloadedFeatures: n,
            useRender: ww(l),
            createVisualElement: r,
            Component: o
        };
        return rw(c)
    }
}

function _i(n, r, s) {
    const o = n.getProps();
    return Gu(o, r, s !== void 0 ? s : o.custom, n)
}
const tu = n => Array.isArray(n);

function kw(n, r, s) {
    n.hasValue(r) ? n.getValue(r).set(s) : n.addValue(r, Li(s))
}

function Pw(n) {
    return tu(n) ? n[n.length - 1] || 0 : n
}

function Rw(n, r) {
    const s = _i(n, r);
    let {
        transitionEnd: o = {},
        transition: l = {},
        ...d
    } = s || {};
    d = {
        ...d,
        ...o
    };
    for (const c in d) {
        const h = Pw(d[c]);
        kw(n, c, h)
    }
}

function Aw(n) {
    return !!(Qe(n) && n.add)
}

function nu(n, r) {
    const s = n.getValue("willChange");
    if (Aw(s)) return s.add(r);
    if (!s && rn.WillChange) {
        const o = new rn.WillChange("auto");
        n.addValue("willChange", o), o.add(r)
    }
}

function Fm(n) {
    return n.props[Rm]
}
const Mw = n => n !== null;

function Dw(n, {
    repeat: r,
    repeatType: s = "loop"
}, o) {
    const l = n.filter(Mw),
        d = r && s !== "loop" && r % 2 === 1 ? 0 : l.length - 1;
    return l[d]
}
const Nw = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    Lw = n => ({
        type: "spring",
        stiffness: 550,
        damping: n === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    Ow = {
        type: "keyframes",
        duration: .8
    },
    jw = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    _w = (n, {
        keyframes: r
    }) => r.length > 2 ? Ow : Mr.has(n) ? n.startsWith("scale") ? Lw(r[1]) : Nw : jw;

function Vw({
    when: n,
    delay: r,
    delayChildren: s,
    staggerChildren: o,
    staggerDirection: l,
    repeat: d,
    repeatType: c,
    repeatDelay: h,
    from: p,
    elapsed: y,
    ...g
}) {
    return !!Object.keys(g).length
}
const Qu = (n, r, s, o = {}, l, d) => c => {
    const h = Iu(o, n) || {},
        p = h.delay || o.delay || 0;
    let {
        elapsed: y = 0
    } = o;
    y = y - Ht(p);
    const g = {
        keyframes: Array.isArray(s) ? s : [null, s],
        ease: "easeOut",
        velocity: r.getVelocity(),
        ...h,
        delay: -y,
        onUpdate: S => {
            r.set(S), h.onUpdate && h.onUpdate(S)
        },
        onComplete: () => {
            c(), h.onComplete && h.onComplete()
        },
        name: n,
        motionValue: r,
        element: d ? void 0 : l
    };
    Vw(h) || Object.assign(g, _w(n, g)), g.duration && (g.duration = Ht(g.duration)), g.repeatDelay && (g.repeatDelay = Ht(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
    let v = !1;
    if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0, g.delay === 0 && (v = !0)), (rn.instantAnimations || rn.skipAnimations) && (v = !0, g.duration = 0, g.delay = 0), g.allowFlatten = !h.type && !h.ease, v && !d && r.get() !== void 0) {
        const S = Dw(g.keyframes, h);
        if (S !== void 0) {
            Re.update(() => {
                g.onUpdate(S), g.onComplete()
            });
            return
        }
    }
    return new S1(g)
};

function Fw({
    protectedKeys: n,
    needsAnimating: r
}, s) {
    const o = n.hasOwnProperty(s) && r[s] !== !0;
    return r[s] = !1, o
}

function Im(n, r, {
    delay: s = 0,
    transitionOverride: o,
    type: l
} = {}) {
    let {
        transition: d = n.getDefaultTransition(),
        transitionEnd: c,
        ...h
    } = r;
    o && (d = o);
    const p = [],
        y = l && n.animationState && n.animationState.getState()[l];
    for (const g in h) {
        const v = n.getValue(g, n.latestValues[g] ?? null),
            S = h[g];
        if (S === void 0 || y && Fw(y, g)) continue;
        const k = {
                delay: s,
                ...Iu(d || {}, g)
            },
            M = v.get();
        if (M !== void 0 && !v.isAnimating && !Array.isArray(S) && S === M && !k.velocity) continue;
        let P = !1;
        if (window.MotionHandoffAnimation) {
            const L = Fm(n);
            if (L) {
                const U = window.MotionHandoffAnimation(L, g, Re);
                U !== null && (k.startTime = U, P = !0)
            }
        }
        nu(n, g), v.start(Qu(g, v, S, n.shouldReduceMotion && mm.has(g) ? {
            type: !1
        } : k, n, P));
        const R = v.animation;
        R && p.push(R)
    }
    return c && Promise.all(p).then(() => {
        Re.update(() => {
            c && Rw(n, c)
        })
    }), p
}

function ru(n, r, s = {}) {
    var p;
    const o = _i(n, r, s.type === "exit" ? (p = n.presenceContext) == null ? void 0 : p.custom : void 0);
    let {
        transition: l = n.getDefaultTransition() || {}
    } = o || {};
    s.transitionOverride && (l = s.transitionOverride);
    const d = o ? () => Promise.all(Im(n, o, s)) : () => Promise.resolve(),
        c = n.variantChildren && n.variantChildren.size ? (y = 0) => {
            const {
                delayChildren: g = 0,
                staggerChildren: v,
                staggerDirection: S
            } = l;
            return Iw(n, r, g + y, v, S, s)
        } : () => Promise.resolve(),
        {
            when: h
        } = l;
    if (h) {
        const [y, g] = h === "beforeChildren" ? [d, c] : [c, d];
        return y().then(() => g())
    } else return Promise.all([d(), c(s.delay)])
}

function Iw(n, r, s = 0, o = 0, l = 1, d) {
    const c = [],
        h = (n.variantChildren.size - 1) * o,
        p = l === 1 ? (y = 0) => y * o : (y = 0) => h - y * o;
    return Array.from(n.variantChildren).sort(Bw).forEach((y, g) => {
        y.notify("AnimationStart", r), c.push(ru(y, r, {
            ...d,
            delay: s + p(g)
        }).then(() => y.notify("AnimationComplete", r)))
    }), Promise.all(c)
}

function Bw(n, r) {
    return n.sortNodePosition(r)
}

function zw(n, r, s = {}) {
    n.notify("AnimationStart", r);
    let o;
    if (Array.isArray(r)) {
        const l = r.map(d => ru(n, d, s));
        o = Promise.all(l)
    } else if (typeof r == "string") o = ru(n, r, s);
    else {
        const l = typeof r == "function" ? _i(n, r, s.custom) : r;
        o = Promise.all(Im(n, l, s))
    }
    return o.then(() => {
        n.notify("AnimationComplete", r)
    })
}

function Bm(n, r) {
    if (!Array.isArray(r)) return !1;
    const s = r.length;
    if (s !== n.length) return !1;
    for (let o = 0; o < s; o++)
        if (r[o] !== n[o]) return !1;
    return !0
}
const Uw = bu.length;

function zm(n) {
    if (!n) return;
    if (!n.isControllingVariants) {
        const s = n.parent ? zm(n.parent) || {} : {};
        return n.props.initial !== void 0 && (s.initial = n.props.initial), s
    }
    const r = {};
    for (let s = 0; s < Uw; s++) {
        const o = bu[s],
            l = n.props[o];
        (Oi(l) || l === !1) && (r[o] = l)
    }
    return r
}
const $w = [...$u].reverse(),
    bw = $u.length;

function Hw(n) {
    return r => Promise.all(r.map(({
        animation: s,
        options: o
    }) => zw(n, s, o)))
}

function Ww(n) {
    let r = Hw(n),
        s = Nh(),
        o = !0;
    const l = p => (y, g) => {
        var S;
        const v = _i(n, g, p === "exit" ? (S = n.presenceContext) == null ? void 0 : S.custom : void 0);
        if (v) {
            const {
                transition: k,
                transitionEnd: M,
                ...P
            } = v;
            y = {
                ...y,
                ...P,
                ...M
            }
        }
        return y
    };

    function d(p) {
        r = p(n)
    }

    function c(p) {
        const {
            props: y
        } = n, g = zm(n.parent) || {}, v = [], S = new Set;
        let k = {},
            M = 1 / 0;
        for (let R = 0; R < bw; R++) {
            const L = $w[R],
                U = s[L],
                j = y[L] !== void 0 ? y[L] : g[L],
                G = Oi(j),
                B = L === p ? U.isActive : null;
            B === !1 && (M = R);
            let W = j === g[L] && j !== y[L] && G;
            if (W && o && n.manuallyAnimateOnMount && (W = !1), U.protectedKeys = {
                    ...k
                }, !U.isActive && B === null || !j && !U.prevProp || So(j) || typeof j == "boolean") continue;
            const ne = Kw(U.prevProp, j);
            let J = ne || L === p && U.isActive && !W && G || R > M && G,
                pe = !1;
            const Se = Array.isArray(j) ? j : [j];
            let nt = Se.reduce(l(L), {});
            B === !1 && (nt = {});
            const {
                prevResolvedValues: ht = {}
            } = U, Ye = {
                ...ht,
                ...nt
            }, rt = ae => {
                J = !0, S.has(ae) && (pe = !0, S.delete(ae)), U.needsAnimating[ae] = !0;
                const $ = n.getValue(ae);
                $ && ($.liveStyle = !1)
            };
            for (const ae in Ye) {
                const $ = nt[ae],
                    Z = ht[ae];
                if (k.hasOwnProperty(ae)) continue;
                let K = !1;
                tu($) && tu(Z) ? K = !Bm($, Z) : K = $ !== Z, K ? $ != null ? rt(ae) : S.add(ae) : $ !== void 0 && S.has(ae) ? rt(ae) : U.protectedKeys[ae] = !0
            }
            U.prevProp = j, U.prevResolvedValues = nt, U.isActive && (k = {
                ...k,
                ...nt
            }), o && n.blockInitialAnimation && (J = !1), J && (!(W && ne) || pe) && v.push(...Se.map(ae => ({
                animation: ae,
                options: {
                    type: L
                }
            })))
        }
        if (S.size) {
            const R = {};
            if (typeof y.initial != "boolean") {
                const L = _i(n, Array.isArray(y.initial) ? y.initial[0] : y.initial);
                L && L.transition && (R.transition = L.transition)
            }
            S.forEach(L => {
                const U = n.getBaseTarget(L),
                    j = n.getValue(L);
                j && (j.liveStyle = !0), R[L] = U ?? null
            }), v.push({
                animation: R
            })
        }
        let P = !!v.length;
        return o && (y.initial === !1 || y.initial === y.animate) && !n.manuallyAnimateOnMount && (P = !1), o = !1, P ? r(v) : Promise.resolve()
    }

    function h(p, y) {
        var v;
        if (s[p].isActive === y) return Promise.resolve();
        (v = n.variantChildren) == null || v.forEach(S => {
            var k;
            return (k = S.animationState) == null ? void 0 : k.setActive(p, y)
        }), s[p].isActive = y;
        const g = c(p);
        for (const S in s) s[S].protectedKeys = {};
        return g
    }
    return {
        animateChanges: c,
        setActive: h,
        setAnimateFunction: d,
        getState: () => s,
        reset: () => {
            s = Nh(), o = !0
        }
    }
}

function Kw(n, r) {
    return typeof r == "string" ? r !== n : Array.isArray(r) ? !Bm(r, n) : !1
}

function Un(n = !1) {
    return {
        isActive: n,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Nh() {
    return {
        animate: Un(!0),
        whileInView: Un(),
        whileHover: Un(),
        whileTap: Un(),
        whileDrag: Un(),
        whileFocus: Un(),
        exit: Un()
    }
}
class Rn {
    constructor(r) {
        this.isMounted = !1, this.node = r
    }
    update() {}
}
class qw extends Rn {
    constructor(r) {
        super(r), r.animationState || (r.animationState = Ww(r))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: r
        } = this.node.getProps();
        So(r) && (this.unmountControls = r.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: r
        } = this.node.getProps(), {
            animate: s
        } = this.node.prevProps || {};
        r !== s && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var r;
        this.node.animationState.reset(), (r = this.unmountControls) == null || r.call(this)
    }
}
let Gw = 0;
class Xw extends Rn {
    constructor() {
        super(...arguments), this.id = Gw++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: r,
            onExitComplete: s
        } = this.node.presenceContext, {
            isPresent: o
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || r === o) return;
        const l = this.node.animationState.setActive("exit", !r);
        s && !r && l.then(() => {
            s(this.id)
        })
    }
    mount() {
        const {
            register: r,
            onExitComplete: s
        } = this.node.presenceContext || {};
        s && s(this.id), r && (this.unmount = r(this.id))
    }
    unmount() {}
}
const Qw = {
    animation: {
        Feature: qw
    },
    exit: {
        Feature: Xw
    }
};

function Vi(n, r, s, o = {
    passive: !0
}) {
    return n.addEventListener(r, s, o), () => n.removeEventListener(r, s)
}

function Ui(n) {
    return {
        point: {
            x: n.pageX,
            y: n.pageY
        }
    }
}
const Yw = n => r => Uu(r) && n(r, Ui(r));

function Pi(n, r, s, o) {
    return Vi(n, r, Yw(s), o)
}

function Um({
    top: n,
    left: r,
    right: s,
    bottom: o
}) {
    return {
        x: {
            min: r,
            max: s
        },
        y: {
            min: n,
            max: o
        }
    }
}

function Jw({
    x: n,
    y: r
}) {
    return {
        top: r.min,
        right: n.max,
        bottom: r.max,
        left: n.min
    }
}

function Zw(n, r) {
    if (!r) return n;
    const s = r({
            x: n.left,
            y: n.top
        }),
        o = r({
            x: n.right,
            y: n.bottom
        });
    return {
        top: s.y,
        left: s.x,
        bottom: o.y,
        right: o.x
    }
}
const $m = 1e-4,
    ex = 1 - $m,
    tx = 1 + $m,
    bm = .01,
    nx = 0 - bm,
    rx = 0 + bm;

function tt(n) {
    return n.max - n.min
}

function ix(n, r, s) {
    return Math.abs(n - r) <= s
}

function Lh(n, r, s, o = .5) {
    n.origin = o, n.originPoint = Pe(r.min, r.max, n.origin), n.scale = tt(s) / tt(r), n.translate = Pe(s.min, s.max, n.origin) - n.originPoint, (n.scale >= ex && n.scale <= tx || isNaN(n.scale)) && (n.scale = 1), (n.translate >= nx && n.translate <= rx || isNaN(n.translate)) && (n.translate = 0)
}

function Ri(n, r, s, o) {
    Lh(n.x, r.x, s.x, o ? o.originX : void 0), Lh(n.y, r.y, s.y, o ? o.originY : void 0)
}

function Oh(n, r, s) {
    n.min = s.min + r.min, n.max = n.min + tt(r)
}

function sx(n, r, s) {
    Oh(n.x, r.x, s.x), Oh(n.y, r.y, s.y)
}

function jh(n, r, s) {
    n.min = r.min - s.min, n.max = n.min + tt(r)
}

function Ai(n, r, s) {
    jh(n.x, r.x, s.x), jh(n.y, r.y, s.y)
}
const _h = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Er = () => ({
        x: _h(),
        y: _h()
    }),
    Vh = () => ({
        min: 0,
        max: 0
    }),
    Le = () => ({
        x: Vh(),
        y: Vh()
    });

function Pt(n) {
    return [n("x"), n("y")]
}

function jl(n) {
    return n === void 0 || n === 1
}

function iu({
    scale: n,
    scaleX: r,
    scaleY: s
}) {
    return !jl(n) || !jl(r) || !jl(s)
}

function $n(n) {
    return iu(n) || Hm(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY
}

function Hm(n) {
    return Fh(n.x) || Fh(n.y)
}

function Fh(n) {
    return n && n !== "0%"
}

function go(n, r, s) {
    const o = n - s,
        l = r * o;
    return s + l
}

function Ih(n, r, s, o, l) {
    return l !== void 0 && (n = go(n, l, o)), go(n, s, o) + r
}

function su(n, r = 0, s = 1, o, l) {
    n.min = Ih(n.min, r, s, o, l), n.max = Ih(n.max, r, s, o, l)
}

function Wm(n, {
    x: r,
    y: s
}) {
    su(n.x, r.translate, r.scale, r.originPoint), su(n.y, s.translate, s.scale, s.originPoint)
}
const Bh = .999999999999,
    zh = 1.0000000000001;

function ox(n, r, s, o = !1) {
    const l = s.length;
    if (!l) return;
    r.x = r.y = 1;
    let d, c;
    for (let h = 0; h < l; h++) {
        d = s[h], c = d.projectionDelta;
        const {
            visualElement: p
        } = d.options;
        p && p.props.style && p.props.style.display === "contents" || (o && d.options.layoutScroll && d.scroll && d !== d.root && kr(n, {
            x: -d.scroll.offset.x,
            y: -d.scroll.offset.y
        }), c && (r.x *= c.x.scale, r.y *= c.y.scale, Wm(n, c)), o && $n(d.latestValues) && kr(n, d.latestValues))
    }
    r.x < zh && r.x > Bh && (r.x = 1), r.y < zh && r.y > Bh && (r.y = 1)
}

function Cr(n, r) {
    n.min = n.min + r, n.max = n.max + r
}

function Uh(n, r, s, o, l = .5) {
    const d = Pe(n.min, n.max, l);
    su(n, r, s, d, o)
}

function kr(n, r) {
    Uh(n.x, r.x, r.scaleX, r.scale, r.originX), Uh(n.y, r.y, r.scaleY, r.scale, r.originY)
}

function Km(n, r) {
    return Um(Zw(n.getBoundingClientRect(), r))
}

function ax(n, r, s) {
    const o = Km(n, s),
        {
            scroll: l
        } = r;
    return l && (Cr(o.x, l.offset.x), Cr(o.y, l.offset.y)), o
}
const qm = ({
        current: n
    }) => n ? n.ownerDocument.defaultView : null,
    $h = (n, r) => Math.abs(n - r);

function lx(n, r) {
    const s = $h(n.x, r.x),
        o = $h(n.y, r.y);
    return Math.sqrt(s ** 2 + o ** 2)
}
class Gm {
    constructor(r, s, {
        transformPagePoint: o,
        contextWindow: l,
        dragSnapToOrigin: d = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const v = Vl(this.lastMoveEventInfo, this.history),
                    S = this.startEvent !== null,
                    k = lx(v.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!S && !k) return;
                const {
                    point: M
                } = v, {
                    timestamp: P
                } = be;
                this.history.push({
                    ...M,
                    timestamp: P
                });
                const {
                    onStart: R,
                    onMove: L
                } = this.handlers;
                S || (R && R(this.lastMoveEvent, v), this.startEvent = this.lastMoveEvent), L && L(this.lastMoveEvent, v)
            }, this.handlePointerMove = (v, S) => {
                this.lastMoveEvent = v, this.lastMoveEventInfo = _l(S, this.transformPagePoint), Re.update(this.updatePoint, !0)
            }, this.handlePointerUp = (v, S) => {
                this.end();
                const {
                    onEnd: k,
                    onSessionEnd: M,
                    resumeAnimation: P
                } = this.handlers;
                if (this.dragSnapToOrigin && P && P(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const R = Vl(v.type === "pointercancel" ? this.lastMoveEventInfo : _l(S, this.transformPagePoint), this.history);
                this.startEvent && k && k(v, R), M && M(v, R)
            }, !Uu(r)) return;
        this.dragSnapToOrigin = d, this.handlers = s, this.transformPagePoint = o, this.contextWindow = l || window;
        const c = Ui(r),
            h = _l(c, this.transformPagePoint),
            {
                point: p
            } = h,
            {
                timestamp: y
            } = be;
        this.history = [{
            ...p,
            timestamp: y
        }];
        const {
            onSessionStart: g
        } = s;
        g && g(r, Vl(h, this.history)), this.removeListeners = Ii(Pi(this.contextWindow, "pointermove", this.handlePointerMove), Pi(this.contextWindow, "pointerup", this.handlePointerUp), Pi(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(r) {
        this.handlers = r
    }
    end() {
        this.removeListeners && this.removeListeners(), kn(this.updatePoint)
    }
}

function _l(n, r) {
    return r ? {
        point: r(n.point)
    } : n
}

function bh(n, r) {
    return {
        x: n.x - r.x,
        y: n.y - r.y
    }
}

function Vl({
    point: n
}, r) {
    return {
        point: n,
        delta: bh(n, Xm(r)),
        offset: bh(n, ux(r)),
        velocity: cx(r, .1)
    }
}

function ux(n) {
    return n[0]
}

function Xm(n) {
    return n[n.length - 1]
}

function cx(n, r) {
    if (n.length < 2) return {
        x: 0,
        y: 0
    };
    let s = n.length - 1,
        o = null;
    const l = Xm(n);
    for (; s >= 0 && (o = n[s], !(l.timestamp - o.timestamp > Ht(r)));) s--;
    if (!o) return {
        x: 0,
        y: 0
    };
    const d = Wt(l.timestamp - o.timestamp);
    if (d === 0) return {
        x: 0,
        y: 0
    };
    const c = {
        x: (l.x - o.x) / d,
        y: (l.y - o.y) / d
    };
    return c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c
}

function fx(n, {
    min: r,
    max: s
}, o) {
    return r !== void 0 && n < r ? n = o ? Pe(r, n, o.min) : Math.max(n, r) : s !== void 0 && n > s && (n = o ? Pe(s, n, o.max) : Math.min(n, s)), n
}

function Hh(n, r, s) {
    return {
        min: r !== void 0 ? n.min + r : void 0,
        max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0
    }
}

function dx(n, {
    top: r,
    left: s,
    bottom: o,
    right: l
}) {
    return {
        x: Hh(n.x, s, l),
        y: Hh(n.y, r, o)
    }
}

function Wh(n, r) {
    let s = r.min - n.min,
        o = r.max - n.max;
    return r.max - r.min < n.max - n.min && ([s, o] = [o, s]), {
        min: s,
        max: o
    }
}

function hx(n, r) {
    return {
        x: Wh(n.x, r.x),
        y: Wh(n.y, r.y)
    }
}

function px(n, r) {
    let s = .5;
    const o = tt(n),
        l = tt(r);
    return l > o ? s = Mi(r.min, r.max - o, n.min) : o > l && (s = Mi(n.min, n.max - l, r.min)), nn(0, 1, s)
}

function mx(n, r) {
    const s = {};
    return r.min !== void 0 && (s.min = r.min - n.min), r.max !== void 0 && (s.max = r.max - n.min), s
}
const ou = .35;

function gx(n = ou) {
    return n === !1 ? n = 0 : n === !0 && (n = ou), {
        x: Kh(n, "left", "right"),
        y: Kh(n, "top", "bottom")
    }
}

function Kh(n, r, s) {
    return {
        min: qh(n, r),
        max: qh(n, s)
    }
}

function qh(n, r) {
    return typeof n == "number" ? n : n[r] || 0
}
const yx = new WeakMap;
class vx {
    constructor(r) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Le(), this.visualElement = r
    }
    start(r, {
        snapToCursor: s = !1
    } = {}) {
        const {
            presenceContext: o
        } = this.visualElement;
        if (o && o.isPresent === !1) return;
        const l = g => {
                const {
                    dragSnapToOrigin: v
                } = this.getProps();
                v ? this.pauseAnimation() : this.stopAnimation(), s && this.snapToCursor(Ui(g).point)
            },
            d = (g, v) => {
                const {
                    drag: S,
                    dragPropagation: k,
                    onDragStart: M
                } = this.getProps();
                if (S && !k && (this.openDragLock && this.openDragLock(), this.openDragLock = F1(S), !this.openDragLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Pt(R => {
                    let L = this.getAxisMotionValue(R).get() || 0;
                    if (Kt.test(L)) {
                        const {
                            projection: U
                        } = this.visualElement;
                        if (U && U.layout) {
                            const j = U.layout.layoutBox[R];
                            j && (L = tt(j) * (parseFloat(L) / 100))
                        }
                    }
                    this.originPoint[R] = L
                }), M && Re.postRender(() => M(g, v)), nu(this.visualElement, "transform");
                const {
                    animationState: P
                } = this.visualElement;
                P && P.setActive("whileDrag", !0)
            },
            c = (g, v) => {
                const {
                    dragPropagation: S,
                    dragDirectionLock: k,
                    onDirectionLock: M,
                    onDrag: P
                } = this.getProps();
                if (!S && !this.openDragLock) return;
                const {
                    offset: R
                } = v;
                if (k && this.currentDirection === null) {
                    this.currentDirection = wx(R), this.currentDirection !== null && M && M(this.currentDirection);
                    return
                }
                this.updateAxis("x", v.point, R), this.updateAxis("y", v.point, R), this.visualElement.render(), P && P(g, v)
            },
            h = (g, v) => this.stop(g, v),
            p = () => Pt(g => {
                var v;
                return this.getAnimationState(g) === "paused" && ((v = this.getAxisMotionValue(g).animation) == null ? void 0 : v.play())
            }),
            {
                dragSnapToOrigin: y
            } = this.getProps();
        this.panSession = new Gm(r, {
            onSessionStart: l,
            onStart: d,
            onMove: c,
            onSessionEnd: h,
            resumeAnimation: p
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: y,
            contextWindow: qm(this.visualElement)
        })
    }
    stop(r, s) {
        const o = this.isDragging;
        if (this.cancel(), !o) return;
        const {
            velocity: l
        } = s;
        this.startAnimation(l);
        const {
            onDragEnd: d
        } = this.getProps();
        d && Re.postRender(() => d(r, s))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: r,
            animationState: s
        } = this.visualElement;
        r && (r.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: o
        } = this.getProps();
        !o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), s && s.setActive("whileDrag", !1)
    }
    updateAxis(r, s, o) {
        const {
            drag: l
        } = this.getProps();
        if (!o || !io(r, l, this.currentDirection)) return;
        const d = this.getAxisMotionValue(r);
        let c = this.originPoint[r] + o[r];
        this.constraints && this.constraints[r] && (c = fx(c, this.constraints[r], this.elastic[r])), d.set(c)
    }
    resolveConstraints() {
        var d;
        const {
            dragConstraints: r,
            dragElastic: s
        } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (d = this.visualElement.projection) == null ? void 0 : d.layout, l = this.constraints;
        r && Tr(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && o ? this.constraints = dx(o.layoutBox, r) : this.constraints = !1, this.elastic = gx(s), l !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Pt(c => {
            this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = mx(o.layoutBox[c], this.constraints[c]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: r,
            onMeasureDragConstraints: s
        } = this.getProps();
        if (!r || !Tr(r)) return !1;
        const o = r.current,
            {
                projection: l
            } = this.visualElement;
        if (!l || !l.layout) return !1;
        const d = ax(o, l.root, this.visualElement.getTransformPagePoint());
        let c = hx(l.layout.layoutBox, d);
        if (s) {
            const h = s(Jw(c));
            this.hasMutatedConstraints = !!h, h && (c = Um(h))
        }
        return c
    }
    startAnimation(r) {
        const {
            drag: s,
            dragMomentum: o,
            dragElastic: l,
            dragTransition: d,
            dragSnapToOrigin: c,
            onDragTransitionEnd: h
        } = this.getProps(), p = this.constraints || {}, y = Pt(g => {
            if (!io(g, s, this.currentDirection)) return;
            let v = p && p[g] || {};
            c && (v = {
                min: 0,
                max: 0
            });
            const S = l ? 200 : 1e6,
                k = l ? 40 : 1e7,
                M = {
                    type: "inertia",
                    velocity: o ? r[g] : 0,
                    bounceStiffness: S,
                    bounceDamping: k,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...d,
                    ...v
                };
            return this.startAxisValueAnimation(g, M)
        });
        return Promise.all(y).then(h)
    }
    startAxisValueAnimation(r, s) {
        const o = this.getAxisMotionValue(r);
        return nu(this.visualElement, r), o.start(Qu(r, o, 0, s, this.visualElement, !1))
    }
    stopAnimation() {
        Pt(r => this.getAxisMotionValue(r).stop())
    }
    pauseAnimation() {
        Pt(r => {
            var s;
            return (s = this.getAxisMotionValue(r).animation) == null ? void 0 : s.pause()
        })
    }
    getAnimationState(r) {
        var s;
        return (s = this.getAxisMotionValue(r).animation) == null ? void 0 : s.state
    }
    getAxisMotionValue(r) {
        const s = `_drag${r.toUpperCase()}`,
            o = this.visualElement.getProps(),
            l = o[s];
        return l || this.visualElement.getValue(r, (o.initial ? o.initial[r] : void 0) || 0)
    }
    snapToCursor(r) {
        Pt(s => {
            const {
                drag: o
            } = this.getProps();
            if (!io(s, o, this.currentDirection)) return;
            const {
                projection: l
            } = this.visualElement, d = this.getAxisMotionValue(s);
            if (l && l.layout) {
                const {
                    min: c,
                    max: h
                } = l.layout.layoutBox[s];
                d.set(r[s] - Pe(c, h, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: r,
            dragConstraints: s
        } = this.getProps(), {
            projection: o
        } = this.visualElement;
        if (!Tr(s) || !o || !this.constraints) return;
        this.stopAnimation();
        const l = {
            x: 0,
            y: 0
        };
        Pt(c => {
            const h = this.getAxisMotionValue(c);
            if (h && this.constraints !== !1) {
                const p = h.get();
                l[c] = px({
                    min: p,
                    max: p
                }, this.constraints[c])
            }
        });
        const {
            transformTemplate: d
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = d ? d({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), Pt(c => {
            if (!io(c, r, null)) return;
            const h = this.getAxisMotionValue(c),
                {
                    min: p,
                    max: y
                } = this.constraints[c];
            h.set(Pe(p, y, l[c]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        yx.set(this.visualElement, this);
        const r = this.visualElement.current,
            s = Pi(r, "pointerdown", p => {
                const {
                    drag: y,
                    dragListener: g = !0
                } = this.getProps();
                y && g && this.start(p)
            }),
            o = () => {
                const {
                    dragConstraints: p
                } = this.getProps();
                Tr(p) && p.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: l
            } = this.visualElement,
            d = l.addEventListener("measure", o);
        l && !l.layout && (l.root && l.root.updateScroll(), l.updateLayout()), Re.read(o);
        const c = Vi(window, "resize", () => this.scalePositionWithinConstraints()),
            h = l.addEventListener("didUpdate", ({
                delta: p,
                hasLayoutChanged: y
            }) => {
                this.isDragging && y && (Pt(g => {
                    const v = this.getAxisMotionValue(g);
                    v && (this.originPoint[g] += p[g].translate, v.set(v.get() + p[g].translate))
                }), this.visualElement.render())
            });
        return () => {
            c(), s(), d(), h && h()
        }
    }
    getProps() {
        const r = this.visualElement.getProps(),
            {
                drag: s = !1,
                dragDirectionLock: o = !1,
                dragPropagation: l = !1,
                dragConstraints: d = !1,
                dragElastic: c = ou,
                dragMomentum: h = !0
            } = r;
        return {
            ...r,
            drag: s,
            dragDirectionLock: o,
            dragPropagation: l,
            dragConstraints: d,
            dragElastic: c,
            dragMomentum: h
        }
    }
}

function io(n, r, s) {
    return (r === !0 || r === n) && (s === null || s === n)
}

function wx(n, r = 10) {
    let s = null;
    return Math.abs(n.y) > r ? s = "y" : Math.abs(n.x) > r && (s = "x"), s
}
class xx extends Rn {
    constructor(r) {
        super(r), this.removeGroupControls = Rt, this.removeListeners = Rt, this.controls = new vx(r)
    }
    mount() {
        const {
            dragControls: r
        } = this.node.getProps();
        r && (this.removeGroupControls = r.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Rt
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const Gh = n => (r, s) => {
    n && Re.postRender(() => n(r, s))
};
class Sx extends Rn {
    constructor() {
        super(...arguments), this.removePointerDownListener = Rt
    }
    onPointerDown(r) {
        this.session = new Gm(r, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: qm(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: r,
            onPanStart: s,
            onPan: o,
            onPanEnd: l
        } = this.node.getProps();
        return {
            onSessionStart: Gh(r),
            onStart: Gh(s),
            onMove: o,
            onEnd: (d, c) => {
                delete this.session, l && Re.postRender(() => l(d, c))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Pi(this.node.current, "pointerdown", r => this.onPointerDown(r))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const ao = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function Xh(n, r) {
    return r.max === r.min ? 0 : n / (r.max - r.min) * 100
}
const wi = {
        correct: (n, r) => {
            if (!r.target) return n;
            if (typeof n == "string")
                if (re.test(n)) n = parseFloat(n);
                else return n;
            const s = Xh(n, r.target.x),
                o = Xh(n, r.target.y);
            return `${s}% ${o}%`
        }
    },
    Tx = {
        correct: (n, {
            treeScale: r,
            projectionDelta: s
        }) => {
            const o = n,
                l = Pn.parse(n);
            if (l.length > 5) return o;
            const d = Pn.createTransformer(n),
                c = typeof l[0] != "number" ? 1 : 0,
                h = s.x.scale * r.x,
                p = s.y.scale * r.y;
            l[0 + c] /= h, l[1 + c] /= p;
            const y = Pe(h, p, .5);
            return typeof l[2 + c] == "number" && (l[2 + c] /= y), typeof l[3 + c] == "number" && (l[3 + c] /= y), d(l)
        }
    };
class Ex extends b.Component {
    componentDidMount() {
        const {
            visualElement: r,
            layoutGroup: s,
            switchLayoutGroup: o,
            layoutId: l
        } = this.props, {
            projection: d
        } = r;
        aw(Cx), d && (s.group && s.group.add(d), o && o.register && l && o.register(d), d.root.didUpdate(), d.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), d.setOptions({
            ...d.options,
            onExitComplete: () => this.safeToRemove()
        })), ao.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(r) {
        const {
            layoutDependency: s,
            visualElement: o,
            drag: l,
            isPresent: d
        } = this.props, {
            projection: c
        } = o;
        return c && (c.isPresent = d, l || r.layoutDependency !== s || s === void 0 || r.isPresent !== d ? c.willUpdate() : this.safeToRemove(), r.isPresent !== d && (d ? c.promote() : c.relegate() || Re.postRender(() => {
            const h = c.getStack();
            (!h || !h.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: r
        } = this.props.visualElement;
        r && (r.root.didUpdate(), zu.postRender(() => {
            !r.currentAnimation && r.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: r,
            layoutGroup: s,
            switchLayoutGroup: o
        } = this.props, {
            projection: l
        } = r;
        l && (l.scheduleCheckAfterUnmount(), s && s.group && s.group.remove(l), o && o.deregister && o.deregister(l))
    }
    safeToRemove() {
        const {
            safeToRemove: r
        } = this.props;
        r && r()
    }
    render() {
        return null
    }
}

function Qm(n) {
    const [r, s] = _p(), o = b.useContext(yu);
    return O.jsx(Ex, {
        ...n,
        layoutGroup: o,
        switchLayoutGroup: b.useContext(Am),
        isPresent: r,
        safeToRemove: s
    })
}
const Cx = {
    borderRadius: {
        ...wi,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: wi,
    borderTopRightRadius: wi,
    borderBottomLeftRadius: wi,
    borderBottomRightRadius: wi,
    boxShadow: Tx
};

function kx(n, r, s) {
    const o = Qe(n) ? n : Li(n);
    return o.start(Qu("", o, r, s)), o.animation
}

function Px(n) {
    return n instanceof SVGElement && n.tagName !== "svg"
}
const Rx = (n, r) => n.depth - r.depth;
class Ax {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(r) {
        Tu(this.children, r), this.isDirty = !0
    }
    remove(r) {
        Eu(this.children, r), this.isDirty = !0
    }
    forEach(r) {
        this.isDirty && this.children.sort(Rx), this.isDirty = !1, this.children.forEach(r)
    }
}

function Mx(n, r) {
    const s = ct.now(),
        o = ({
            timestamp: l
        }) => {
            const d = l - s;
            d >= r && (kn(o), n(d - r))
        };
    return Re.setup(o, !0), () => kn(o)
}
const Ym = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    Dx = Ym.length,
    Qh = n => typeof n == "string" ? parseFloat(n) : n,
    Yh = n => typeof n == "number" || re.test(n);

function Nx(n, r, s, o, l, d) {
    l ? (n.opacity = Pe(0, s.opacity ?? 1, Lx(o)), n.opacityExit = Pe(r.opacity ?? 1, 0, Ox(o))) : d && (n.opacity = Pe(r.opacity ?? 1, s.opacity ?? 1, o));
    for (let c = 0; c < Dx; c++) {
        const h = `border${Ym[c]}Radius`;
        let p = Jh(r, h),
            y = Jh(s, h);
        if (p === void 0 && y === void 0) continue;
        p || (p = 0), y || (y = 0), p === 0 || y === 0 || Yh(p) === Yh(y) ? (n[h] = Math.max(Pe(Qh(p), Qh(y), o), 0), (Kt.test(y) || Kt.test(p)) && (n[h] += "%")) : n[h] = y
    }(r.rotate || s.rotate) && (n.rotate = Pe(r.rotate || 0, s.rotate || 0, o))
}

function Jh(n, r) {
    return n[r] !== void 0 ? n[r] : n.borderRadius
}
const Lx = Jm(0, .5, Wp),
    Ox = Jm(.5, .95, Rt);

function Jm(n, r, s) {
    return o => o < n ? 0 : o > r ? 1 : s(Mi(n, r, o))
}

function Zh(n, r) {
    n.min = r.min, n.max = r.max
}

function kt(n, r) {
    Zh(n.x, r.x), Zh(n.y, r.y)
}

function ep(n, r) {
    n.translate = r.translate, n.scale = r.scale, n.originPoint = r.originPoint, n.origin = r.origin
}

function tp(n, r, s, o, l) {
    return n -= r, n = go(n, 1 / s, o), l !== void 0 && (n = go(n, 1 / l, o)), n
}

function jx(n, r = 0, s = 1, o = .5, l, d = n, c = n) {
    if (Kt.test(r) && (r = parseFloat(r), r = Pe(c.min, c.max, r / 100) - c.min), typeof r != "number") return;
    let h = Pe(d.min, d.max, o);
    n === d && (h -= r), n.min = tp(n.min, r, s, h, l), n.max = tp(n.max, r, s, h, l)
}

function np(n, r, [s, o, l], d, c) {
    jx(n, r[s], r[o], r[l], r.scale, d, c)
}
const _x = ["x", "scaleX", "originX"],
    Vx = ["y", "scaleY", "originY"];

function rp(n, r, s, o) {
    np(n.x, r, _x, s ? s.x : void 0, o ? o.x : void 0), np(n.y, r, Vx, s ? s.y : void 0, o ? o.y : void 0)
}

function ip(n) {
    return n.translate === 0 && n.scale === 1
}

function Zm(n) {
    return ip(n.x) && ip(n.y)
}

function sp(n, r) {
    return n.min === r.min && n.max === r.max
}

function Fx(n, r) {
    return sp(n.x, r.x) && sp(n.y, r.y)
}

function op(n, r) {
    return Math.round(n.min) === Math.round(r.min) && Math.round(n.max) === Math.round(r.max)
}

function eg(n, r) {
    return op(n.x, r.x) && op(n.y, r.y)
}

function ap(n) {
    return tt(n.x) / tt(n.y)
}

function lp(n, r) {
    return n.translate === r.translate && n.scale === r.scale && n.originPoint === r.originPoint
}
class Ix {
    constructor() {
        this.members = []
    }
    add(r) {
        Tu(this.members, r), r.scheduleRender()
    }
    remove(r) {
        if (Eu(this.members, r), r === this.prevLead && (this.prevLead = void 0), r === this.lead) {
            const s = this.members[this.members.length - 1];
            s && this.promote(s)
        }
    }
    relegate(r) {
        const s = this.members.findIndex(l => r === l);
        if (s === 0) return !1;
        let o;
        for (let l = s; l >= 0; l--) {
            const d = this.members[l];
            if (d.isPresent !== !1) {
                o = d;
                break
            }
        }
        return o ? (this.promote(o), !0) : !1
    }
    promote(r, s) {
        const o = this.lead;
        if (r !== o && (this.prevLead = o, this.lead = r, r.show(), o)) {
            o.instance && o.scheduleRender(), r.scheduleRender(), r.resumeFrom = o, s && (r.resumeFrom.preserveOpacity = !0), o.snapshot && (r.snapshot = o.snapshot, r.snapshot.latestValues = o.animationValues || o.latestValues), r.root && r.root.isUpdating && (r.isLayoutDirty = !0);
            const {
                crossfade: l
            } = r.options;
            l === !1 && o.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(r => {
            const {
                options: s,
                resumingFrom: o
            } = r;
            s.onExitComplete && s.onExitComplete(), o && o.options.onExitComplete && o.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(r => {
            r.instance && r.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function Bx(n, r, s) {
    let o = "";
    const l = n.x.translate / r.x,
        d = n.y.translate / r.y,
        c = (s == null ? void 0 : s.z) || 0;
    if ((l || d || c) && (o = `translate3d(${l}px, ${d}px, ${c}px) `), (r.x !== 1 || r.y !== 1) && (o += `scale(${1/r.x}, ${1/r.y}) `), s) {
        const {
            transformPerspective: y,
            rotate: g,
            rotateX: v,
            rotateY: S,
            skewX: k,
            skewY: M
        } = s;
        y && (o = `perspective(${y}px) ${o}`), g && (o += `rotate(${g}deg) `), v && (o += `rotateX(${v}deg) `), S && (o += `rotateY(${S}deg) `), k && (o += `skewX(${k}deg) `), M && (o += `skewY(${M}deg) `)
    }
    const h = n.x.scale * r.x,
        p = n.y.scale * r.y;
    return (h !== 1 || p !== 1) && (o += `scale(${h}, ${p})`), o || "none"
}
const Fl = ["", "X", "Y", "Z"],
    zx = {
        visibility: "hidden"
    },
    up = 1e3;
let Ux = 0;

function Il(n, r, s, o) {
    const {
        latestValues: l
    } = r;
    l[n] && (s[n] = l[n], r.setStaticValue(n, 0), o && (o[n] = 0))
}

function tg(n) {
    if (n.hasCheckedOptimisedAppear = !0, n.root === n) return;
    const {
        visualElement: r
    } = n.options;
    if (!r) return;
    const s = Fm(r);
    if (window.MotionHasOptimisedAnimation(s, "transform")) {
        const {
            layout: l,
            layoutId: d
        } = n.options;
        window.MotionCancelOptimisedAnimation(s, "transform", Re, !(l || d))
    }
    const {
        parent: o
    } = n;
    o && !o.hasCheckedOptimisedAppear && tg(o)
}

function ng({
    attachResizeListener: n,
    defaultParent: r,
    measureScroll: s,
    checkIsScrollRoot: o,
    resetTransform: l
}) {
    return class {
        constructor(c = {}, h = r == null ? void 0 : r()) {
            this.id = Ux++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach(Hx), this.nodes.forEach(Xx), this.nodes.forEach(Qx), this.nodes.forEach(Wx)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = c, this.root = h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 : 0;
            for (let p = 0; p < this.path.length; p++) this.path[p].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Ax)
        }
        addEventListener(c, h) {
            return this.eventHandlers.has(c) || this.eventHandlers.set(c, new Pu), this.eventHandlers.get(c).add(h)
        }
        notifyListeners(c, ...h) {
            const p = this.eventHandlers.get(c);
            p && p.notify(...h)
        }
        hasListeners(c) {
            return this.eventHandlers.has(c)
        }
        mount(c) {
            if (this.instance) return;
            this.isSVG = Px(c), this.instance = c;
            const {
                layoutId: h,
                layout: p,
                visualElement: y
            } = this.options;
            if (y && !y.current && y.mount(c), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (p || h) && (this.isLayoutDirty = !0), n) {
                let g;
                const v = () => this.root.updateBlockedByResize = !1;
                n(c, () => {
                    this.root.updateBlockedByResize = !0, g && g(), g = Mx(v, 250), ao.hasAnimatedSinceResize && (ao.hasAnimatedSinceResize = !1, this.nodes.forEach(fp))
                })
            }
            h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && y && (h || p) && this.addEventListener("didUpdate", ({
                delta: g,
                hasLayoutChanged: v,
                hasRelativeLayoutChanged: S,
                layout: k
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const M = this.options.transition || y.getDefaultTransition() || tS,
                    {
                        onLayoutAnimationStart: P,
                        onLayoutAnimationComplete: R
                    } = y.getProps(),
                    L = !this.targetLayout || !eg(this.targetLayout, k),
                    U = !v && S;
                if (this.options.layoutRoot || this.resumeFrom || U || v && (L || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(g, U);
                    const j = {
                        ...Iu(M, "layout"),
                        onPlay: P,
                        onComplete: R
                    };
                    (y.shouldReduceMotion || this.options.layoutRoot) && (j.delay = 0, j.type = !1), this.startAnimation(j)
                } else v || fp(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = k
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const c = this.getStack();
            c && c.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), kn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Yx), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: c
            } = this.options;
            return c && c.getProps().transformTemplate
        }
        willUpdate(c = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && tg(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const v = this.path[g];
                v.shouldResetTransform = !0, v.updateScroll("snapshot"), v.options.layoutRoot && v.willUpdate(!1)
            }
            const {
                layoutId: h,
                layout: p
            } = this.options;
            if (h === void 0 && !p) return;
            const y = this.getTransformTemplate();
            this.prevTransformTemplateValue = y ? y(this.latestValues, "") : void 0, this.updateSnapshot(), c && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(cp);
                return
            }
            this.isUpdating || this.nodes.forEach(qx), this.isUpdating = !1, this.nodes.forEach(Gx), this.nodes.forEach($x), this.nodes.forEach(bx), this.clearAllSnapshots();
            const h = ct.now();
            be.delta = nn(0, 1e3 / 60, h - be.timestamp), be.timestamp = h, be.isProcessing = !0, Ml.update.process(be), Ml.preRender.process(be), Ml.render.process(be), be.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, zu.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Kx), this.sharedNodes.forEach(Jx)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Re.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Re.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !tt(this.snapshot.measuredBox.x) && !tt(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
            const c = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = Le(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: h
            } = this.options;
            h && h.notify("LayoutMeasure", this.layout.layoutBox, c ? c.layoutBox : void 0)
        }
        updateScroll(c = "measure") {
            let h = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === c && (h = !1), h && this.instance) {
                const p = o(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: c,
                    isRoot: p,
                    offset: s(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : p
                }
            }
        }
        resetTransform() {
            if (!l) return;
            const c = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                h = this.projectionDelta && !Zm(this.projectionDelta),
                p = this.getTransformTemplate(),
                y = p ? p(this.latestValues, "") : void 0,
                g = y !== this.prevTransformTemplateValue;
            c && this.instance && (h || $n(this.latestValues) || g) && (l(this.instance, y), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(c = !0) {
            const h = this.measurePageBox();
            let p = this.removeElementScroll(h);
            return c && (p = this.removeTransform(p)), nS(p), {
                animationId: this.root.animationId,
                measuredBox: h,
                layoutBox: p,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var y;
            const {
                visualElement: c
            } = this.options;
            if (!c) return Le();
            const h = c.measureViewportBox();
            if (!(((y = this.scroll) == null ? void 0 : y.wasRoot) || this.path.some(rS))) {
                const {
                    scroll: g
                } = this.root;
                g && (Cr(h.x, g.offset.x), Cr(h.y, g.offset.y))
            }
            return h
        }
        removeElementScroll(c) {
            var p;
            const h = Le();
            if (kt(h, c), (p = this.scroll) != null && p.wasRoot) return h;
            for (let y = 0; y < this.path.length; y++) {
                const g = this.path[y],
                    {
                        scroll: v,
                        options: S
                    } = g;
                g !== this.root && v && S.layoutScroll && (v.wasRoot && kt(h, c), Cr(h.x, v.offset.x), Cr(h.y, v.offset.y))
            }
            return h
        }
        applyTransform(c, h = !1) {
            const p = Le();
            kt(p, c);
            for (let y = 0; y < this.path.length; y++) {
                const g = this.path[y];
                !h && g.options.layoutScroll && g.scroll && g !== g.root && kr(p, {
                    x: -g.scroll.offset.x,
                    y: -g.scroll.offset.y
                }), $n(g.latestValues) && kr(p, g.latestValues)
            }
            return $n(this.latestValues) && kr(p, this.latestValues), p
        }
        removeTransform(c) {
            const h = Le();
            kt(h, c);
            for (let p = 0; p < this.path.length; p++) {
                const y = this.path[p];
                if (!y.instance || !$n(y.latestValues)) continue;
                iu(y.latestValues) && y.updateSnapshot();
                const g = Le(),
                    v = y.measurePageBox();
                kt(g, v), rp(h, y.latestValues, y.snapshot ? y.snapshot.layoutBox : void 0, g)
            }
            return $n(this.latestValues) && rp(h, this.latestValues), h
        }
        setTargetDelta(c) {
            this.targetDelta = c, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(c) {
            this.options = {
                ...this.options,
                ...c,
                crossfade: c.crossfade !== void 0 ? c.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== be.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(c = !1) {
            var S;
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const p = !!this.resumingFrom || this !== h;
            if (!(c || p && this.isSharedProjectionDirty || this.isProjectionDirty || (S = this.parent) != null && S.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: g,
                layoutId: v
            } = this.options;
            if (!(!this.layout || !(g || v))) {
                if (this.resolvedRelativeTargetAt = be.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const k = this.getClosestProjectingParent();
                    k && k.layout && this.animationProgress !== 1 ? (this.relativeParent = k, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Le(), this.relativeTargetOrigin = Le(), Ai(this.relativeTargetOrigin, this.layout.layoutBox, k.layout.layoutBox), kt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Le(), this.targetWithTransforms = Le()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), sx(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : kt(this.target, this.layout.layoutBox), Wm(this.target, this.targetDelta)) : kt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const k = this.getClosestProjectingParent();
                    k && !!k.resumingFrom == !!this.resumingFrom && !k.options.layoutScroll && k.target && this.animationProgress !== 1 ? (this.relativeParent = k, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Le(), this.relativeTargetOrigin = Le(), Ai(this.relativeTargetOrigin, this.target, k.target), kt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || iu(this.parent.latestValues) || Hm(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var M;
            const c = this.getLead(),
                h = !!this.resumingFrom || this !== c;
            let p = !0;
            if ((this.isProjectionDirty || (M = this.parent) != null && M.isProjectionDirty) && (p = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1), this.resolvedRelativeTargetAt === be.timestamp && (p = !1), p) return;
            const {
                layout: y,
                layoutId: g
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(y || g)) return;
            kt(this.layoutCorrected, this.layout.layoutBox);
            const v = this.treeScale.x,
                S = this.treeScale.y;
            ox(this.layoutCorrected, this.treeScale, this.path, h), c.layout && !c.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (c.target = c.layout.layoutBox, c.targetWithTransforms = Le());
            const {
                target: k
            } = c;
            if (!k) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ep(this.prevProjectionDelta.x, this.projectionDelta.x), ep(this.prevProjectionDelta.y, this.projectionDelta.y)), Ri(this.projectionDelta, this.layoutCorrected, k, this.latestValues), (this.treeScale.x !== v || this.treeScale.y !== S || !lp(this.projectionDelta.x, this.prevProjectionDelta.x) || !lp(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", k))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(c = !0) {
            var h;
            if ((h = this.options.visualElement) == null || h.scheduleRender(), c) {
                const p = this.getStack();
                p && p.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Er(), this.projectionDelta = Er(), this.projectionDeltaWithTransform = Er()
        }
        setAnimationOrigin(c, h = !1) {
            const p = this.snapshot,
                y = p ? p.latestValues : {},
                g = {
                    ...this.latestValues
                },
                v = Er();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h;
            const S = Le(),
                k = p ? p.source : void 0,
                M = this.layout ? this.layout.source : void 0,
                P = k !== M,
                R = this.getStack(),
                L = !R || R.members.length <= 1,
                U = !!(P && !L && this.options.crossfade === !0 && !this.path.some(eS));
            this.animationProgress = 0;
            let j;
            this.mixTargetDelta = G => {
                const B = G / 1e3;
                dp(v.x, c.x, B), dp(v.y, c.y, B), this.setTargetDelta(v), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ai(S, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Zx(this.relativeTarget, this.relativeTargetOrigin, S, B), j && Fx(this.relativeTarget, j) && (this.isProjectionDirty = !1), j || (j = Le()), kt(j, this.relativeTarget)), P && (this.animationValues = g, Nx(g, y, this.latestValues, B, U, L)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = B
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(c) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (kn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Re.update(() => {
                ao.hasAnimatedSinceResize = !0, this.currentAnimation = kx(0, up, {
                    ...c,
                    onUpdate: h => {
                        this.mixTargetDelta(h), c.onUpdate && c.onUpdate(h)
                    },
                    onStop: () => {},
                    onComplete: () => {
                        c.onComplete && c.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const c = this.getStack();
            c && c.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(up), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const c = this.getLead();
            let {
                targetWithTransforms: h,
                target: p,
                layout: y,
                latestValues: g
            } = c;
            if (!(!h || !p || !y)) {
                if (this !== c && this.layout && y && rg(this.options.animationType, this.layout.layoutBox, y.layoutBox)) {
                    p = this.target || Le();
                    const v = tt(this.layout.layoutBox.x);
                    p.x.min = c.target.x.min, p.x.max = p.x.min + v;
                    const S = tt(this.layout.layoutBox.y);
                    p.y.min = c.target.y.min, p.y.max = p.y.min + S
                }
                kt(h, p), kr(h, g), Ri(this.projectionDeltaWithTransform, this.layoutCorrected, h, g)
            }
        }
        registerSharedNode(c, h) {
            this.sharedNodes.has(c) || this.sharedNodes.set(c, new Ix), this.sharedNodes.get(c).add(h);
            const y = h.options.initialPromotionConfig;
            h.promote({
                transition: y ? y.transition : void 0,
                preserveFollowOpacity: y && y.shouldPreserveFollowOpacity ? y.shouldPreserveFollowOpacity(h) : void 0
            })
        }
        isLead() {
            const c = this.getStack();
            return c ? c.lead === this : !0
        }
        getLead() {
            var h;
            const {
                layoutId: c
            } = this.options;
            return c ? ((h = this.getStack()) == null ? void 0 : h.lead) || this : this
        }
        getPrevLead() {
            var h;
            const {
                layoutId: c
            } = this.options;
            return c ? (h = this.getStack()) == null ? void 0 : h.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: c
            } = this.options;
            if (c) return this.root.sharedNodes.get(c)
        }
        promote({
            needsReset: c,
            transition: h,
            preserveFollowOpacity: p
        } = {}) {
            const y = this.getStack();
            y && y.promote(this, p), c && (this.projectionDelta = void 0, this.needsReset = !0), h && this.setOptions({
                transition: h
            })
        }
        relegate() {
            const c = this.getStack();
            return c ? c.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: c
            } = this.options;
            if (!c) return;
            let h = !1;
            const {
                latestValues: p
            } = c;
            if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (h = !0), !h) return;
            const y = {};
            p.z && Il("z", c, y, this.animationValues);
            for (let g = 0; g < Fl.length; g++) Il(`rotate${Fl[g]}`, c, y, this.animationValues), Il(`skew${Fl[g]}`, c, y, this.animationValues);
            c.render();
            for (const g in y) c.setStaticValue(g, y[g]), this.animationValues && (this.animationValues[g] = y[g]);
            c.scheduleRender()
        }
        getProjectionStyles(c) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return zx;
            const h = {
                    visibility: ""
                },
                p = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, h.opacity = "", h.pointerEvents = oo(c == null ? void 0 : c.pointerEvents) || "", h.transform = p ? p(this.latestValues, "") : "none", h;
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                const k = {};
                return this.options.layoutId && (k.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, k.pointerEvents = oo(c == null ? void 0 : c.pointerEvents) || ""), this.hasProjected && !$n(this.latestValues) && (k.transform = p ? p({}, "") : "none", this.hasProjected = !1), k
            }
            const g = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(), h.transform = Bx(this.projectionDeltaWithTransform, this.treeScale, g), p && (h.transform = p(g, h.transform));
            const {
                x: v,
                y: S
            } = this.projectionDelta;
            h.transformOrigin = `${v.origin*100}% ${S.origin*100}% 0`, y.animationValues ? h.opacity = y === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : h.opacity = y === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
            for (const k in ji) {
                if (g[k] === void 0) continue;
                const {
                    correct: M,
                    applyTo: P,
                    isCSSVariable: R
                } = ji[k], L = h.transform === "none" ? g[k] : M(g[k], y);
                if (P) {
                    const U = P.length;
                    for (let j = 0; j < U; j++) h[P[j]] = L
                } else R ? this.options.visualElement.renderState.vars[k] = L : h[k] = L
            }
            return this.options.layoutId && (h.pointerEvents = y === this ? oo(c == null ? void 0 : c.pointerEvents) || "" : "none"), h
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(c => {
                var h;
                return (h = c.currentAnimation) == null ? void 0 : h.stop()
            }), this.root.nodes.forEach(cp), this.root.sharedNodes.clear()
        }
    }
}

function $x(n) {
    n.updateLayout()
}

function bx(n) {
    var s;
    const r = ((s = n.resumeFrom) == null ? void 0 : s.snapshot) || n.snapshot;
    if (n.isLead() && n.layout && r && n.hasListeners("didUpdate")) {
        const {
            layoutBox: o,
            measuredBox: l
        } = n.layout, {
            animationType: d
        } = n.options, c = r.source !== n.layout.source;
        d === "size" ? Pt(v => {
            const S = c ? r.measuredBox[v] : r.layoutBox[v],
                k = tt(S);
            S.min = o[v].min, S.max = S.min + k
        }) : rg(d, r.layoutBox, o) && Pt(v => {
            const S = c ? r.measuredBox[v] : r.layoutBox[v],
                k = tt(o[v]);
            S.max = S.min + k, n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0, n.relativeTarget[v].max = n.relativeTarget[v].min + k)
        });
        const h = Er();
        Ri(h, o, r.layoutBox);
        const p = Er();
        c ? Ri(p, n.applyTransform(l, !0), r.measuredBox) : Ri(p, o, r.layoutBox);
        const y = !Zm(h);
        let g = !1;
        if (!n.resumeFrom) {
            const v = n.getClosestProjectingParent();
            if (v && !v.resumeFrom) {
                const {
                    snapshot: S,
                    layout: k
                } = v;
                if (S && k) {
                    const M = Le();
                    Ai(M, r.layoutBox, S.layoutBox);
                    const P = Le();
                    Ai(P, o, k.layoutBox), eg(M, P) || (g = !0), v.options.layoutRoot && (n.relativeTarget = P, n.relativeTargetOrigin = M, n.relativeParent = v)
                }
            }
        }
        n.notifyListeners("didUpdate", {
            layout: o,
            snapshot: r,
            delta: p,
            layoutDelta: h,
            hasLayoutChanged: y,
            hasRelativeLayoutChanged: g
        })
    } else if (n.isLead()) {
        const {
            onExitComplete: o
        } = n.options;
        o && o()
    }
    n.options.transition = void 0
}

function Hx(n) {
    n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty), n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)), n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty))
}

function Wx(n) {
    n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1
}

function Kx(n) {
    n.clearSnapshot()
}

function cp(n) {
    n.clearMeasurements()
}

function qx(n) {
    n.isLayoutDirty = !1
}

function Gx(n) {
    const {
        visualElement: r
    } = n.options;
    r && r.getProps().onBeforeLayoutMeasure && r.notify("BeforeLayoutMeasure"), n.resetTransform()
}

function fp(n) {
    n.finishAnimation(), n.targetDelta = n.relativeTarget = n.target = void 0, n.isProjectionDirty = !0
}

function Xx(n) {
    n.resolveTargetDelta()
}

function Qx(n) {
    n.calcProjection()
}

function Yx(n) {
    n.resetSkewAndRotation()
}

function Jx(n) {
    n.removeLeadSnapshot()
}

function dp(n, r, s) {
    n.translate = Pe(r.translate, 0, s), n.scale = Pe(r.scale, 1, s), n.origin = r.origin, n.originPoint = r.originPoint
}

function hp(n, r, s, o) {
    n.min = Pe(r.min, s.min, o), n.max = Pe(r.max, s.max, o)
}

function Zx(n, r, s, o) {
    hp(n.x, r.x, s.x, o), hp(n.y, r.y, s.y, o)
}

function eS(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0
}
const tS = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    pp = n => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n),
    mp = pp("applewebkit/") && !pp("chrome/") ? Math.round : Rt;

function gp(n) {
    n.min = mp(n.min), n.max = mp(n.max)
}

function nS(n) {
    gp(n.x), gp(n.y)
}

function rg(n, r, s) {
    return n === "position" || n === "preserve-aspect" && !ix(ap(r), ap(s), .2)
}

function rS(n) {
    var r;
    return n !== n.root && ((r = n.scroll) == null ? void 0 : r.wasRoot)
}
const iS = ng({
        attachResizeListener: (n, r) => Vi(n, "resize", r),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Bl = {
        current: void 0
    },
    ig = ng({
        measureScroll: n => ({
            x: n.scrollLeft,
            y: n.scrollTop
        }),
        defaultParent: () => {
            if (!Bl.current) {
                const n = new iS({});
                n.mount(window), n.setOptions({
                    layoutScroll: !0
                }), Bl.current = n
            }
            return Bl.current
        },
        resetTransform: (n, r) => {
            n.style.transform = r !== void 0 ? r : "none"
        },
        checkIsScrollRoot: n => window.getComputedStyle(n).position === "fixed"
    }),
    sS = {
        pan: {
            Feature: Sx
        },
        drag: {
            Feature: xx,
            ProjectionNode: ig,
            MeasureLayout: Qm
        }
    };

function yp(n, r, s) {
    const {
        props: o
    } = n;
    n.animationState && o.whileHover && n.animationState.setActive("whileHover", s === "Start");
    const l = "onHover" + s,
        d = o[l];
    d && Re.postRender(() => d(r, Ui(r)))
}
class oS extends Rn {
    mount() {
        const {
            current: r
        } = this.node;
        r && (this.unmount = I1(r, (s, o) => (yp(this.node, o, "Start"), l => yp(this.node, l, "End"))))
    }
    unmount() {}
}
class aS extends Rn {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let r = !1;
        try {
            r = this.node.current.matches(":focus-visible")
        } catch {
            r = !0
        }!r || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Ii(Vi(this.node.current, "focus", () => this.onFocus()), Vi(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function vp(n, r, s) {
    const {
        props: o
    } = n;
    if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
    n.animationState && o.whileTap && n.animationState.setActive("whileTap", s === "Start");
    const l = "onTap" + (s === "End" ? "" : s),
        d = o[l];
    d && Re.postRender(() => d(r, Ui(r)))
}
class lS extends Rn {
    mount() {
        const {
            current: r
        } = this.node;
        r && (this.unmount = $1(r, (s, o) => (vp(this.node, o, "Start"), (l, {
            success: d
        }) => vp(this.node, l, d ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const au = new WeakMap,
    zl = new WeakMap,
    uS = n => {
        const r = au.get(n.target);
        r && r(n)
    },
    cS = n => {
        n.forEach(uS)
    };

function fS({
    root: n,
    ...r
}) {
    const s = n || document;
    zl.has(s) || zl.set(s, {});
    const o = zl.get(s),
        l = JSON.stringify(r);
    return o[l] || (o[l] = new IntersectionObserver(cS, {
        root: n,
        ...r
    })), o[l]
}

function dS(n, r, s) {
    const o = fS(r);
    return au.set(n, s), o.observe(n), () => {
        au.delete(n), o.unobserve(n)
    }
}
const hS = {
    some: 0,
    all: 1
};
class pS extends Rn {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: r = {}
        } = this.node.getProps(), {
            root: s,
            margin: o,
            amount: l = "some",
            once: d
        } = r, c = {
            root: s ? s.current : void 0,
            rootMargin: o,
            threshold: typeof l == "number" ? l : hS[l]
        }, h = p => {
            const {
                isIntersecting: y
            } = p;
            if (this.isInView === y || (this.isInView = y, d && !y && this.hasEnteredView)) return;
            y && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", y);
            const {
                onViewportEnter: g,
                onViewportLeave: v
            } = this.node.getProps(), S = y ? g : v;
            S && S(p)
        };
        return dS(this.node.current, c, h)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: r,
            prevProps: s
        } = this.node;
        ["amount", "margin", "root"].some(mS(r, s)) && this.startObserver()
    }
    unmount() {}
}

function mS({
    viewport: n = {}
}, {
    viewport: r = {}
} = {}) {
    return s => n[s] !== r[s]
}
const gS = {
        inView: {
            Feature: pS
        },
        tap: {
            Feature: lS
        },
        focus: {
            Feature: aS
        },
        hover: {
            Feature: oS
        }
    },
    yS = {
        layout: {
            ProjectionNode: ig,
            MeasureLayout: Qm
        }
    },
    lu = {
        current: null
    },
    sg = {
        current: !1
    };

function vS() {
    if (sg.current = !0, !!wu)
        if (window.matchMedia) {
            const n = window.matchMedia("(prefers-reduced-motion)"),
                r = () => lu.current = n.matches;
            n.addListener(r), r()
        } else lu.current = !1
}
const wS = new WeakMap;

function xS(n, r, s) {
    for (const o in r) {
        const l = r[o],
            d = s[o];
        if (Qe(l)) n.addValue(o, l);
        else if (Qe(d)) n.addValue(o, Li(l, {
            owner: n
        }));
        else if (d !== l)
            if (n.hasValue(o)) {
                const c = n.getValue(o);
                c.liveStyle === !0 ? c.jump(l) : c.hasAnimated || c.set(l)
            } else {
                const c = n.getStaticValue(o);
                n.addValue(o, Li(c !== void 0 ? c : l, {
                    owner: n
                }))
            }
    }
    for (const o in s) r[o] === void 0 && n.removeValue(o);
    return r
}
const wp = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class SS {
    scrapeMotionValuesFromProps(r, s, o) {
        return {}
    }
    constructor({
        parent: r,
        props: s,
        presenceContext: o,
        reducedMotionConfig: l,
        blockInitialAnimation: d,
        visualState: c
    }, h = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Fu, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const S = ct.now();
            this.renderScheduledAt < S && (this.renderScheduledAt = S, Re.render(this.render, !1, !0))
        };
        const {
            latestValues: p,
            renderState: y
        } = c;
        this.latestValues = p, this.baseTarget = {
            ...p
        }, this.initialValues = s.initial ? {
            ...p
        } : {}, this.renderState = y, this.parent = r, this.props = s, this.presenceContext = o, this.depth = r ? r.depth + 1 : 0, this.reducedMotionConfig = l, this.options = h, this.blockInitialAnimation = !!d, this.isControllingVariants = To(s), this.isVariantNode = Pm(s), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(r && r.current);
        const {
            willChange: g,
            ...v
        } = this.scrapeMotionValuesFromProps(s, {}, this);
        for (const S in v) {
            const k = v[S];
            p[S] !== void 0 && Qe(k) && k.set(p[S], !1)
        }
    }
    mount(r) {
        this.current = r, wS.set(r, this), this.projection && !this.projection.instance && this.projection.mount(r), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((s, o) => this.bindToMotionValue(o, s)), sg.current || vS(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : lu.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(), kn(this.notifyUpdate), kn(this.render), this.valueSubscriptions.forEach(r => r()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const r in this.events) this.events[r].clear();
        for (const r in this.features) {
            const s = this.features[r];
            s && (s.unmount(), s.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(r, s) {
        this.valueSubscriptions.has(r) && this.valueSubscriptions.get(r)();
        const o = Mr.has(r);
        o && this.onBindTransform && this.onBindTransform();
        const l = s.on("change", h => {
                this.latestValues[r] = h, this.props.onUpdate && Re.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0)
            }),
            d = s.on("renderRequest", this.scheduleRender);
        let c;
        window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, r, s)), this.valueSubscriptions.set(r, () => {
            l(), d(), c && c(), s.owner && s.stop()
        })
    }
    sortNodePosition(r) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== r.type ? 0 : this.sortInstanceNodePosition(this.current, r.current)
    }
    updateFeatures() {
        let r = "animation";
        for (r in Pr) {
            const s = Pr[r];
            if (!s) continue;
            const {
                isEnabled: o,
                Feature: l
            } = s;
            if (!this.features[r] && l && o(this.props) && (this.features[r] = new l(this)), this.features[r]) {
                const d = this.features[r];
                d.isMounted ? d.update() : (d.mount(), d.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Le()
    }
    getStaticValue(r) {
        return this.latestValues[r]
    }
    setStaticValue(r, s) {
        this.latestValues[r] = s
    }
    update(r, s) {
        (r.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = r, this.prevPresenceContext = this.presenceContext, this.presenceContext = s;
        for (let o = 0; o < wp.length; o++) {
            const l = wp[o];
            this.propEventSubscriptions[l] && (this.propEventSubscriptions[l](), delete this.propEventSubscriptions[l]);
            const d = "on" + l,
                c = r[d];
            c && (this.propEventSubscriptions[l] = this.on(l, c))
        }
        this.prevMotionValues = xS(this, this.scrapeMotionValuesFromProps(r, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(r) {
        return this.props.variants ? this.props.variants[r] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(r) {
        const s = this.getClosestVariantNode();
        if (s) return s.variantChildren && s.variantChildren.add(r), () => s.variantChildren.delete(r)
    }
    addValue(r, s) {
        const o = this.values.get(r);
        s !== o && (o && this.removeValue(r), this.bindToMotionValue(r, s), this.values.set(r, s), this.latestValues[r] = s.get())
    }
    removeValue(r) {
        this.values.delete(r);
        const s = this.valueSubscriptions.get(r);
        s && (s(), this.valueSubscriptions.delete(r)), delete this.latestValues[r], this.removeValueFromRenderState(r, this.renderState)
    }
    hasValue(r) {
        return this.values.has(r)
    }
    getValue(r, s) {
        if (this.props.values && this.props.values[r]) return this.props.values[r];
        let o = this.values.get(r);
        return o === void 0 && s !== void 0 && (o = Li(s === null ? void 0 : s, {
            owner: this
        }), this.addValue(r, o)), o
    }
    readValue(r, s) {
        let o = this.latestValues[r] !== void 0 || !this.current ? this.latestValues[r] : this.getBaseTargetFromProps(this.props, r) ?? this.readValueFromInstance(this.current, r, this.options);
        return o != null && (typeof o == "string" && (Vp(o) || Fp(o)) ? o = parseFloat(o) : !H1(o) && Pn.test(s) && (o = wm(r, s)), this.setBaseTarget(r, Qe(o) ? o.get() : o)), Qe(o) ? o.get() : o
    }
    setBaseTarget(r, s) {
        this.baseTarget[r] = s
    }
    getBaseTarget(r) {
        var d;
        const {
            initial: s
        } = this.props;
        let o;
        if (typeof s == "string" || typeof s == "object") {
            const c = Gu(this.props, s, (d = this.presenceContext) == null ? void 0 : d.custom);
            c && (o = c[r])
        }
        if (s && o !== void 0) return o;
        const l = this.getBaseTargetFromProps(this.props, r);
        return l !== void 0 && !Qe(l) ? l : this.initialValues[r] !== void 0 && o === void 0 ? void 0 : this.baseTarget[r]
    }
    on(r, s) {
        return this.events[r] || (this.events[r] = new Pu), this.events[r].add(s)
    }
    notify(r, ...s) {
        this.events[r] && this.events[r].notify(...s)
    }
}
class og extends SS {
    constructor() {
        super(...arguments), this.KeyframeResolver = O1
    }
    sortInstanceNodePosition(r, s) {
        return r.compareDocumentPosition(s) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(r, s) {
        return r.style ? r.style[s] : void 0
    }
    removeValueFromRenderState(r, {
        vars: s,
        style: o
    }) {
        delete s[r], delete o[r]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: r
        } = this.props;
        Qe(r) && (this.childSubscription = r.on("change", s => {
            this.current && (this.current.textContent = `${s}`)
        }))
    }
}

function ag(n, {
    style: r,
    vars: s
}, o, l) {
    Object.assign(n.style, r, l && l.getProjectionStyles(o));
    for (const d in s) n.style.setProperty(d, s[d])
}

function TS(n) {
    return window.getComputedStyle(n)
}
class ES extends og {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = ag
    }
    readValueFromInstance(r, s) {
        if (Mr.has(s)) return Jv(r, s);
        {
            const o = TS(r),
                l = (Mu(s) ? o.getPropertyValue(s) : o[s]) || 0;
            return typeof l == "string" ? l.trim() : l
        }
    }
    measureInstanceViewportBox(r, {
        transformPagePoint: s
    }) {
        return Km(r, s)
    }
    build(r, s, o) {
        Wu(r, s, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(r, s, o) {
        return Xu(r, s, o)
    }
}
const lg = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function CS(n, r, s, o) {
    ag(n, r, void 0, o);
    for (const l in r.attrs) n.setAttribute(lg.has(l) ? l : Hu(l), r.attrs[l])
}
class kS extends og {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Le
    }
    getBaseTargetFromProps(r, s) {
        return r[s]
    }
    readValueFromInstance(r, s) {
        if (Mr.has(s)) {
            const o = vm(s);
            return o && o.default || 0
        }
        return s = lg.has(s) ? s : Hu(s), r.getAttribute(s)
    }
    scrapeMotionValuesFromProps(r, s, o) {
        return Vm(r, s, o)
    }
    build(r, s, o) {
        Lm(r, s, this.isSVGTag, o.transformTemplate, o.style)
    }
    renderInstance(r, s, o, l) {
        CS(r, s, o, l)
    }
    mount(r) {
        this.isSVGTag = jm(r.tagName), super.mount(r)
    }
}
const PS = (n, r) => qu(n) ? new kS(r) : new ES(r, {
        allowProjection: n !== b.Fragment
    }),
    RS = Cw({
        ...Qw,
        ...gS,
        ...sS,
        ...yS
    }, PS),
    qt = X1(RS),
    AS = ({
        conversations: n,
        activeConversationId: r,
        onSelectConversation: s,
        onNewConversation: o,
        onClose: l,
        isMobile: d
    }) => O.jsxs("div", {
        className: "flex flex-col h-full",
        children: [O.jsxs("div", {
            className: "flex items-center justify-between p-4 border-b border-gray-800",
            children: [O.jsx("h1", {
                className: "text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 neon-text",
                children: "Genify AI"
            }), d && O.jsx("button", {
                onClick: l,
                className: "p-2 rounded-full hover:bg-gray-800 transition-colors",
                "data-testid": "sidebar-close-button",
                "aria-label": "Close sidebar",
                children: O.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: O.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                    })
                })
            })]
        }), O.jsx("div", {
            className: "p-4",
            children: O.jsxs("button", {
                className: "w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 font-medium flex items-center justify-center gap-2 neon-border",
                onClick: o,
                "data-testid": "new-chat-button",
                children: [O.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: O.jsx("path", {
                        fillRule: "evenodd",
                        d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
                        clipRule: "evenodd"
                    })
                }), "New Chat"]
            })
        }), O.jsxs("div", {
            className: "flex-1 overflow-y-auto px-4 pb-4",
            children: [O.jsx("h2", {
                className: "text-sm uppercase tracking-wider text-gray-400 mb-2 ml-1 sticky top-0 bg-gray-950 py-2 z-10",
                children: "Recent Conversations"
            }), O.jsx("ul", {
                className: "space-y-2",
                "data-testid": "conversations-list",
                children: n.length > 0 ? n.map(c => O.jsx(qt.li, {
                    whileHover: {
                        scale: 1.02
                    },
                    whileTap: {
                        scale: .98
                    },
                    children: O.jsx("button", {
                        className: `w-full py-3 px-4 text-left rounded-lg transition-all duration-300 ${r===c.id?"glass-card neon-border font-medium bg-gradient-to-r from-purple-900/30 to-indigo-900/30":"hover:bg-gray-800/80"}`,
                        onClick: () => s(c.id),
                        "data-testid": `conversation-${c.id}`,
                        children: O.jsxs("div", {
                            className: "flex items-center",
                            children: [O.jsx("span", {
                                className: "mr-3",
                                children: O.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5 text-indigo-400",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: O.jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
                                        clipRule: "evenodd"
                                    })
                                })
                            }), O.jsx("span", {
                                className: "truncate",
                                children: c.title
                            })]
                        })
                    })
                }, c.id)) : O.jsx("p", {
                    className: "text-gray-500 py-3 px-4 text-sm italic",
                    children: "No conversations yet. Start a new chat!"
                })
            })]
        }), O.jsx("div", {
            className: "px-4 py-3 border-t border-gray-800/30",
            children: O.jsxs("div", {
                className: "text-xs text-gray-500 flex justify-center items-center",
                children: [O.jsx("span", {
                    children: "Made with ❤️ | "
                }), O.jsx("a", {
                    href: "https://guns.lol/rich.php/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "ml-1 hover:text-indigo-400 transition-colors",
                    children: "ꜱᴛᴏɪᴄ ꭙ ᴅᴇᴠᴢ"
                })]
            })
        })]
    }),
    MS = ({
        images: n
    }) => {
        const [r, s] = b.useState(null), o = d => {
            s(d)
        }, l = () => {
            s(null)
        };
        return O.jsxs("div", {
            "data-testid": "image-gallery",
            children: [O.jsx("div", {
                className: `grid ${n.length>1?"grid-cols-2":"grid-cols-1"} gap-2`,
                children: n.map((d, c) => O.jsx("div", {
                    className: "relative rounded-lg overflow-hidden aspect-square bg-gray-800 cursor-pointer",
                    onClick: () => o(d),
                    "data-testid": `image-thumbnail-${c}`,
                    children: O.jsx("img", {
                        src: d.url,
                        alt: d.prompt || "AI generated image",
                        className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300",
                        onError: h => {
                            const p = h.target;
                            p.src = "https://via.placeholder.com/400x400?text=Image+Error"
                        }
                    })
                }, `${d.url}-${c}`))
            }), O.jsx(Su, {
                children: r && O.jsx(qt.div, {
                    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: l,
                    "data-testid": "full-image-modal",
                    children: O.jsx(qt.div, {
                        className: "relative max-w-4xl max-h-[90vh] overflow-hidden rounded-xl",
                        initial: {
                            scale: .9
                        },
                        animate: {
                            scale: 1
                        },
                        exit: {
                            scale: .9
                        },
                        onClick: d => d.stopPropagation(),
                        children: O.jsxs("div", {
                            className: "relative",
                            children: [O.jsx("img", {
                                src: r.url,
                                alt: r.prompt || "AI generated image",
                                className: "w-full h-auto max-h-[90vh] object-contain rounded-lg"
                            }), O.jsx("button", {
                                className: "absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors",
                                onClick: l,
                                "data-testid": "close-full-image-button",
                                children: O.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: O.jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                        clipRule: "evenodd"
                                    })
                                })
                            }), r.prompt && O.jsx("div", {
                                className: "absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent",
                                children: O.jsx("p", {
                                    className: "text-white text-sm",
                                    children: r.prompt
                                })
                            })]
                        })
                    })
                })
            })]
        })
    },
    DS = ({
        message: n
    }) => {
        const r = n.role === "user";
        return O.jsx("div", {
            className: `flex ${r?"justify-end":"justify-start"}`,
            "data-testid": `chat-message-${n.id}`,
            children: O.jsxs("div", {
                className: `relative max-w-[85%] md:max-w-[75%] ${r?"glass-card bg-gradient-to-r from-indigo-900/40 to-purple-900/40":"glass-card"} p-4 rounded-xl`,
                children: [!r && O.jsx("div", {
                    className: "absolute -left-3 -top-3 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center border-2 border-gray-900",
                    children: O.jsx("span", {
                        className: "text-xs font-bold",
                        children: "AI"
                    })
                }), O.jsx("div", {
                    className: "prose prose-invert max-w-none",
                    children: O.jsx("p", {
                        className: `whitespace-pre-wrap ${n.error?"text-red-400":""}`,
                        "data-testid": "message-content",
                        children: n.content
                    })
                }), n.images && n.images.length > 0 && O.jsx("div", {
                    className: "mt-3",
                    children: O.jsx(MS, {
                        images: n.images
                    })
                }), O.jsx("div", {
                    className: "text-xs text-gray-500 mt-2 text-right",
                    children: new Date(n.timestamp).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit"
                    })
                })]
            })
        })
    },
    NS = ({
        messages: n,
        isLoading: r
    }) => {
        const s = b.useRef(null);
        return b.useEffect(() => {
            var o;
            (o = s.current) == null || o.scrollIntoView({
                behavior: "smooth"
            })
        }, [n]), O.jsxs("div", {
            className: "flex-1 overflow-y-auto py-4 px-4 md:px-8 relative",
            "data-testid": "chat-window",
            children: [n.length === 0 && O.jsx("div", {
                className: "flex flex-col items-center justify-center h-full max-w-3xl mx-auto text-center",
                children: O.jsxs(qt.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5
                    },
                    className: "glass-card p-8 rounded-2xl",
                    children: [O.jsx("div", {
                        className: "w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center",
                        children: O.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-12 w-12",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: O.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            })
                        })
                    }), O.jsx("h2", {
                        className: "text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400",
                        children: "Welcome to Genify AI"
                    }), O.jsx("p", {
                        className: "text-gray-300 mb-6",
                        children: "Start a conversation with the AI assistant. Ask questions, get creative responses, and explore what it can do!"
                    }), O.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-left",
                        children: [O.jsxs("div", {
                            className: "glass p-3 rounded-lg",
                            children: [O.jsx("p", {
                                className: "font-medium mb-1",
                                children: "Try asking:"
                            }), O.jsx("p", {
                                className: "text-gray-400",
                                children: '"Tell me a joke about programming"'
                            })]
                        }), O.jsxs("div", {
                            className: "glass p-3 rounded-lg",
                            children: [O.jsx("p", {
                                className: "font-medium mb-1",
                                children: "Try asking:"
                            }), O.jsx("p", {
                                className: "text-gray-400",
                                children: '"Show me images of space"'
                            })]
                        })]
                    })]
                })
            }), O.jsxs("div", {
                className: "max-w-3xl mx-auto space-y-6",
                children: [O.jsx(Su, {
                    children: n.map(o => O.jsx(qt.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            height: 0
                        },
                        transition: {
                            duration: .3
                        },
                        children: O.jsx(DS, {
                            message: o
                        })
                    }, o.id))
                }), r && O.jsxs(qt.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: "flex items-center space-x-3 p-4 rounded-lg glass-card w-full max-w-lg mx-auto",
                    "data-testid": "loading-indicator",
                    children: [O.jsxs("div", {
                        className: "flex space-x-2 justify-center items-center",
                        children: [O.jsx("div", {
                            className: "h-3 w-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]"
                        }), O.jsx("div", {
                            className: "h-3 w-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"
                        }), O.jsx("div", {
                            className: "h-3 w-3 bg-pink-500 rounded-full animate-bounce"
                        })]
                    }), O.jsx("span", {
                        className: "text-gray-300 text-sm",
                        children: "AI is thinking..."
                    })]
                }), O.jsx("div", {
                    ref: s
                })]
            })]
        })
    },
    LS = ({
        onSendMessage: n,
        isLoading: r
    }) => {
        const [s, o] = b.useState(""), l = b.useRef(null);
        b.useEffect(() => {
            l.current && (l.current.style.height = "auto", l.current.style.height = `${l.current.scrollHeight}px`)
        }, [s]);
        const d = h => {
                h.preventDefault(), !(!s.trim() || r) && (n(s), o(""))
            },
            c = h => {
                h.key === "Enter" && !h.shiftKey && (h.preventDefault(), d(h))
            };
        return O.jsx("div", {
            className: "sticky bottom-0 w-full p-4 bg-gradient-to-t from-gray-950 via-gray-950/95 to-transparent",
            children: O.jsxs(qt.form, {
                onSubmit: d,
                className: "glass-card max-w-3xl mx-auto relative neon-border",
                initial: {
                    y: 50,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    type: "spring",
                    damping: 20
                },
                "data-testid": "message-form",
                children: [O.jsx("textarea", {
                    ref: l,
                    value: s,
                    onChange: h => o(h.target.value),
                    onKeyDown: c,
                    placeholder: "Type a message...",
                    className: "w-full bg-transparent resize-none py-4 px-4 pr-16 outline-none focus:ring-0 max-h-40",
                    rows: 1,
                    disabled: r,
                    "data-testid": "message-input"
                }), O.jsx("button", {
                    type: "submit",
                    className: `absolute right-3 bottom-3 p-2 rounded-full 
            ${r||!s.trim()?"bg-gray-700 text-gray-400 cursor-not-allowed":"bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-200"}`,
                    disabled: r || !s.trim(),
                    "data-testid": "send-button",
                    children: O.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-6 w-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: O.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        })
                    })
                })]
            })
        })
    },
    ug = "meta-ai-conversations",
    uu = () => {
        try {
            const n = localStorage.getItem(ug);
            return n ? JSON.parse(n) : []
        } catch (n) {
            return console.error("Error loading conversations from localStorage:", n), []
        }
    },
    xi = n => {
        try {
            const r = uu(),
                s = r.findIndex(l => l.id === n.id);
            s >= 0 ? r[s] = n : r.unshift(n);
            const o = r.slice(0, 15);
            localStorage.setItem(ug, JSON.stringify(o))
        } catch (r) {
            console.error("Error saving conversation to localStorage:", r)
        }
    };

function cg(n, r) {
    return function() {
        return n.apply(r, arguments)
    }
}
const {
    toString: OS
} = Object.prototype, {
    getPrototypeOf: Yu
} = Object, {
    iterator: Eo,
    toStringTag: fg
} = Symbol, Co = (n => r => {
    const s = OS.call(r);
    return n[s] || (n[s] = s.slice(8, -1).toLowerCase())
})(Object.create(null)), Ft = n => (n = n.toLowerCase(), r => Co(r) === n), ko = n => r => typeof r === n, {
    isArray: Dr
} = Array, Fi = ko("undefined");

function jS(n) {
    return n !== null && !Fi(n) && n.constructor !== null && !Fi(n.constructor) && ft(n.constructor.isBuffer) && n.constructor.isBuffer(n)
}
const dg = Ft("ArrayBuffer");

function _S(n) {
    let r;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(n) : r = n && n.buffer && dg(n.buffer), r
}
const VS = ko("string"),
    ft = ko("function"),
    hg = ko("number"),
    Po = n => n !== null && typeof n == "object",
    FS = n => n === !0 || n === !1,
    lo = n => {
        if (Co(n) !== "object") return !1;
        const r = Yu(n);
        return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(fg in n) && !(Eo in n)
    },
    IS = Ft("Date"),
    BS = Ft("File"),
    zS = Ft("Blob"),
    US = Ft("FileList"),
    $S = n => Po(n) && ft(n.pipe),
    bS = n => {
        let r;
        return n && (typeof FormData == "function" && n instanceof FormData || ft(n.append) && ((r = Co(n)) === "formdata" || r === "object" && ft(n.toString) && n.toString() === "[object FormData]"))
    },
    HS = Ft("URLSearchParams"),
    [WS, KS, qS, GS] = ["ReadableStream", "Request", "Response", "Headers"].map(Ft),
    XS = n => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function $i(n, r, {
    allOwnKeys: s = !1
} = {}) {
    if (n === null || typeof n > "u") return;
    let o, l;
    if (typeof n != "object" && (n = [n]), Dr(n))
        for (o = 0, l = n.length; o < l; o++) r.call(null, n[o], o, n);
    else {
        const d = s ? Object.getOwnPropertyNames(n) : Object.keys(n),
            c = d.length;
        let h;
        for (o = 0; o < c; o++) h = d[o], r.call(null, n[h], h, n)
    }
}

function pg(n, r) {
    r = r.toLowerCase();
    const s = Object.keys(n);
    let o = s.length,
        l;
    for (; o-- > 0;)
        if (l = s[o], r === l.toLowerCase()) return l;
    return null
}
const Wn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
    mg = n => !Fi(n) && n !== Wn;

function cu() {
    const {
        caseless: n
    } = mg(this) && this || {}, r = {}, s = (o, l) => {
        const d = n && pg(r, l) || l;
        lo(r[d]) && lo(o) ? r[d] = cu(r[d], o) : lo(o) ? r[d] = cu({}, o) : Dr(o) ? r[d] = o.slice() : r[d] = o
    };
    for (let o = 0, l = arguments.length; o < l; o++) arguments[o] && $i(arguments[o], s);
    return r
}
const QS = (n, r, s, {
        allOwnKeys: o
    } = {}) => ($i(r, (l, d) => {
        s && ft(l) ? n[d] = cg(l, s) : n[d] = l
    }, {
        allOwnKeys: o
    }), n),
    YS = n => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
    JS = (n, r, s, o) => {
        n.prototype = Object.create(r.prototype, o), n.prototype.constructor = n, Object.defineProperty(n, "super", {
            value: r.prototype
        }), s && Object.assign(n.prototype, s)
    },
    ZS = (n, r, s, o) => {
        let l, d, c;
        const h = {};
        if (r = r || {}, n == null) return r;
        do {
            for (l = Object.getOwnPropertyNames(n), d = l.length; d-- > 0;) c = l[d], (!o || o(c, n, r)) && !h[c] && (r[c] = n[c], h[c] = !0);
            n = s !== !1 && Yu(n)
        } while (n && (!s || s(n, r)) && n !== Object.prototype);
        return r
    },
    eT = (n, r, s) => {
        n = String(n), (s === void 0 || s > n.length) && (s = n.length), s -= r.length;
        const o = n.indexOf(r, s);
        return o !== -1 && o === s
    },
    tT = n => {
        if (!n) return null;
        if (Dr(n)) return n;
        let r = n.length;
        if (!hg(r)) return null;
        const s = new Array(r);
        for (; r-- > 0;) s[r] = n[r];
        return s
    },
    nT = (n => r => n && r instanceof n)(typeof Uint8Array < "u" && Yu(Uint8Array)),
    rT = (n, r) => {
        const o = (n && n[Eo]).call(n);
        let l;
        for (;
            (l = o.next()) && !l.done;) {
            const d = l.value;
            r.call(n, d[0], d[1])
        }
    },
    iT = (n, r) => {
        let s;
        const o = [];
        for (;
            (s = n.exec(r)) !== null;) o.push(s);
        return o
    },
    sT = Ft("HTMLFormElement"),
    oT = n => n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(s, o, l) {
        return o.toUpperCase() + l
    }),
    xp = (({
        hasOwnProperty: n
    }) => (r, s) => n.call(r, s))(Object.prototype),
    aT = Ft("RegExp"),
    gg = (n, r) => {
        const s = Object.getOwnPropertyDescriptors(n),
            o = {};
        $i(s, (l, d) => {
            let c;
            (c = r(l, d, n)) !== !1 && (o[d] = c || l)
        }), Object.defineProperties(n, o)
    },
    lT = n => {
        gg(n, (r, s) => {
            if (ft(n) && ["arguments", "caller", "callee"].indexOf(s) !== -1) return !1;
            const o = n[s];
            if (ft(o)) {
                if (r.enumerable = !1, "writable" in r) {
                    r.writable = !1;
                    return
                }
                r.set || (r.set = () => {
                    throw Error("Can not rewrite read-only method '" + s + "'")
                })
            }
        })
    },
    uT = (n, r) => {
        const s = {},
            o = l => {
                l.forEach(d => {
                    s[d] = !0
                })
            };
        return Dr(n) ? o(n) : o(String(n).split(r)), s
    },
    cT = () => {},
    fT = (n, r) => n != null && Number.isFinite(n = +n) ? n : r;

function dT(n) {
    return !!(n && ft(n.append) && n[fg] === "FormData" && n[Eo])
}
const hT = n => {
        const r = new Array(10),
            s = (o, l) => {
                if (Po(o)) {
                    if (r.indexOf(o) >= 0) return;
                    if (!("toJSON" in o)) {
                        r[l] = o;
                        const d = Dr(o) ? [] : {};
                        return $i(o, (c, h) => {
                            const p = s(c, l + 1);
                            !Fi(p) && (d[h] = p)
                        }), r[l] = void 0, d
                    }
                }
                return o
            };
        return s(n, 0)
    },
    pT = Ft("AsyncFunction"),
    mT = n => n && (Po(n) || ft(n)) && ft(n.then) && ft(n.catch),
    yg = ((n, r) => n ? setImmediate : r ? ((s, o) => (Wn.addEventListener("message", ({
        source: l,
        data: d
    }) => {
        l === Wn && d === s && o.length && o.shift()()
    }, !1), l => {
        o.push(l), Wn.postMessage(s, "*")
    }))(`axios@${Math.random()}`, []) : s => setTimeout(s))(typeof setImmediate == "function", ft(Wn.postMessage)),
    gT = typeof queueMicrotask < "u" ? queueMicrotask.bind(Wn) : typeof process < "u" && process.nextTick || yg,
    yT = n => n != null && ft(n[Eo]),
    N = {
        isArray: Dr,
        isArrayBuffer: dg,
        isBuffer: jS,
        isFormData: bS,
        isArrayBufferView: _S,
        isString: VS,
        isNumber: hg,
        isBoolean: FS,
        isObject: Po,
        isPlainObject: lo,
        isReadableStream: WS,
        isRequest: KS,
        isResponse: qS,
        isHeaders: GS,
        isUndefined: Fi,
        isDate: IS,
        isFile: BS,
        isBlob: zS,
        isRegExp: aT,
        isFunction: ft,
        isStream: $S,
        isURLSearchParams: HS,
        isTypedArray: nT,
        isFileList: US,
        forEach: $i,
        merge: cu,
        extend: QS,
        trim: XS,
        stripBOM: YS,
        inherits: JS,
        toFlatObject: ZS,
        kindOf: Co,
        kindOfTest: Ft,
        endsWith: eT,
        toArray: tT,
        forEachEntry: rT,
        matchAll: iT,
        isHTMLForm: sT,
        hasOwnProperty: xp,
        hasOwnProp: xp,
        reduceDescriptors: gg,
        freezeMethods: lT,
        toObjectSet: uT,
        toCamelCase: oT,
        noop: cT,
        toFiniteNumber: fT,
        findKey: pg,
        global: Wn,
        isContextDefined: mg,
        isSpecCompliantForm: dT,
        toJSONObject: hT,
        isAsyncFn: pT,
        isThenable: mT,
        setImmediate: yg,
        asap: gT,
        isIterable: yT
    };

function se(n, r, s, o, l) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", r && (this.code = r), s && (this.config = s), o && (this.request = o), l && (this.response = l, this.status = l.status ? l.status : null)
}
N.inherits(se, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: N.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const vg = se.prototype,
    wg = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(n => {
    wg[n] = {
        value: n
    }
});
Object.defineProperties(se, wg);
Object.defineProperty(vg, "isAxiosError", {
    value: !0
});
se.from = (n, r, s, o, l, d) => {
    const c = Object.create(vg);
    return N.toFlatObject(n, c, function(p) {
        return p !== Error.prototype
    }, h => h !== "isAxiosError"), se.call(c, n.message, r, s, o, l), c.cause = n, c.name = n.name, d && Object.assign(c, d), c
};
const vT = null;

function fu(n) {
    return N.isPlainObject(n) || N.isArray(n)
}

function xg(n) {
    return N.endsWith(n, "[]") ? n.slice(0, -2) : n
}

function Sp(n, r, s) {
    return n ? n.concat(r).map(function(l, d) {
        return l = xg(l), !s && d ? "[" + l + "]" : l
    }).join(s ? "." : "") : r
}

function wT(n) {
    return N.isArray(n) && !n.some(fu)
}
const xT = N.toFlatObject(N, {}, null, function(r) {
    return /^is[A-Z]/.test(r)
});

function Ro(n, r, s) {
    if (!N.isObject(n)) throw new TypeError("target must be an object");
    r = r || new FormData, s = N.toFlatObject(s, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(P, R) {
        return !N.isUndefined(R[P])
    });
    const o = s.metaTokens,
        l = s.visitor || g,
        d = s.dots,
        c = s.indexes,
        p = (s.Blob || typeof Blob < "u" && Blob) && N.isSpecCompliantForm(r);
    if (!N.isFunction(l)) throw new TypeError("visitor must be a function");

    function y(M) {
        if (M === null) return "";
        if (N.isDate(M)) return M.toISOString();
        if (!p && N.isBlob(M)) throw new se("Blob is not supported. Use a Buffer instead.");
        return N.isArrayBuffer(M) || N.isTypedArray(M) ? p && typeof Blob == "function" ? new Blob([M]) : Buffer.from(M) : M
    }

    function g(M, P, R) {
        let L = M;
        if (M && !R && typeof M == "object") {
            if (N.endsWith(P, "{}")) P = o ? P : P.slice(0, -2), M = JSON.stringify(M);
            else if (N.isArray(M) && wT(M) || (N.isFileList(M) || N.endsWith(P, "[]")) && (L = N.toArray(M))) return P = xg(P), L.forEach(function(j, G) {
                !(N.isUndefined(j) || j === null) && r.append(c === !0 ? Sp([P], G, d) : c === null ? P : P + "[]", y(j))
            }), !1
        }
        return fu(M) ? !0 : (r.append(Sp(R, P, d), y(M)), !1)
    }
    const v = [],
        S = Object.assign(xT, {
            defaultVisitor: g,
            convertValue: y,
            isVisitable: fu
        });

    function k(M, P) {
        if (!N.isUndefined(M)) {
            if (v.indexOf(M) !== -1) throw Error("Circular reference detected in " + P.join("."));
            v.push(M), N.forEach(M, function(L, U) {
                (!(N.isUndefined(L) || L === null) && l.call(r, L, N.isString(U) ? U.trim() : U, P, S)) === !0 && k(L, P ? P.concat(U) : [U])
            }), v.pop()
        }
    }
    if (!N.isObject(n)) throw new TypeError("data must be an object");
    return k(n), r
}

function Tp(n) {
    const r = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(o) {
        return r[o]
    })
}

function Ju(n, r) {
    this._pairs = [], n && Ro(n, this, r)
}
const Sg = Ju.prototype;
Sg.append = function(r, s) {
    this._pairs.push([r, s])
};
Sg.toString = function(r) {
    const s = r ? function(o) {
        return r.call(this, o, Tp)
    } : Tp;
    return this._pairs.map(function(l) {
        return s(l[0]) + "=" + s(l[1])
    }, "").join("&")
};

function ST(n) {
    return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function Tg(n, r, s) {
    if (!r) return n;
    const o = s && s.encode || ST;
    N.isFunction(s) && (s = {
        serialize: s
    });
    const l = s && s.serialize;
    let d;
    if (l ? d = l(r, s) : d = N.isURLSearchParams(r) ? r.toString() : new Ju(r, s).toString(o), d) {
        const c = n.indexOf("#");
        c !== -1 && (n = n.slice(0, c)), n += (n.indexOf("?") === -1 ? "?" : "&") + d
    }
    return n
}
class Ep {
    constructor() {
        this.handlers = []
    }
    use(r, s, o) {
        return this.handlers.push({
            fulfilled: r,
            rejected: s,
            synchronous: o ? o.synchronous : !1,
            runWhen: o ? o.runWhen : null
        }), this.handlers.length - 1
    }
    eject(r) {
        this.handlers[r] && (this.handlers[r] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(r) {
        N.forEach(this.handlers, function(o) {
            o !== null && r(o)
        })
    }
}
const Eg = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    TT = typeof URLSearchParams < "u" ? URLSearchParams : Ju,
    ET = typeof FormData < "u" ? FormData : null,
    CT = typeof Blob < "u" ? Blob : null,
    kT = {
        isBrowser: !0,
        classes: {
            URLSearchParams: TT,
            FormData: ET,
            Blob: CT
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    Zu = typeof window < "u" && typeof document < "u",
    du = typeof navigator == "object" && navigator || void 0,
    PT = Zu && (!du || ["ReactNative", "NativeScript", "NS"].indexOf(du.product) < 0),
    RT = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    AT = Zu && window.location.href || "http://localhost",
    MT = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: Zu,
        hasStandardBrowserEnv: PT,
        hasStandardBrowserWebWorkerEnv: RT,
        navigator: du,
        origin: AT
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Xe = {
        ...MT,
        ...kT
    };

function DT(n, r) {
    return Ro(n, new Xe.classes.URLSearchParams, Object.assign({
        visitor: function(s, o, l, d) {
            return Xe.isNode && N.isBuffer(s) ? (this.append(o, s.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments)
        }
    }, r))
}

function NT(n) {
    return N.matchAll(/\w+|\[(\w*)]/g, n).map(r => r[0] === "[]" ? "" : r[1] || r[0])
}

function LT(n) {
    const r = {},
        s = Object.keys(n);
    let o;
    const l = s.length;
    let d;
    for (o = 0; o < l; o++) d = s[o], r[d] = n[d];
    return r
}

function Cg(n) {
    function r(s, o, l, d) {
        let c = s[d++];
        if (c === "__proto__") return !0;
        const h = Number.isFinite(+c),
            p = d >= s.length;
        return c = !c && N.isArray(l) ? l.length : c, p ? (N.hasOwnProp(l, c) ? l[c] = [l[c], o] : l[c] = o, !h) : ((!l[c] || !N.isObject(l[c])) && (l[c] = []), r(s, o, l[c], d) && N.isArray(l[c]) && (l[c] = LT(l[c])), !h)
    }
    if (N.isFormData(n) && N.isFunction(n.entries)) {
        const s = {};
        return N.forEachEntry(n, (o, l) => {
            r(NT(o), l, s, 0)
        }), s
    }
    return null
}

function OT(n, r, s) {
    if (N.isString(n)) try {
        return (r || JSON.parse)(n), N.trim(n)
    } catch (o) {
        if (o.name !== "SyntaxError") throw o
    }
    return (s || JSON.stringify)(n)
}
const bi = {
    transitional: Eg,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(r, s) {
        const o = s.getContentType() || "",
            l = o.indexOf("application/json") > -1,
            d = N.isObject(r);
        if (d && N.isHTMLForm(r) && (r = new FormData(r)), N.isFormData(r)) return l ? JSON.stringify(Cg(r)) : r;
        if (N.isArrayBuffer(r) || N.isBuffer(r) || N.isStream(r) || N.isFile(r) || N.isBlob(r) || N.isReadableStream(r)) return r;
        if (N.isArrayBufferView(r)) return r.buffer;
        if (N.isURLSearchParams(r)) return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
        let h;
        if (d) {
            if (o.indexOf("application/x-www-form-urlencoded") > -1) return DT(r, this.formSerializer).toString();
            if ((h = N.isFileList(r)) || o.indexOf("multipart/form-data") > -1) {
                const p = this.env && this.env.FormData;
                return Ro(h ? {
                    "files[]": r
                } : r, p && new p, this.formSerializer)
            }
        }
        return d || l ? (s.setContentType("application/json", !1), OT(r)) : r
    }],
    transformResponse: [function(r) {
        const s = this.transitional || bi.transitional,
            o = s && s.forcedJSONParsing,
            l = this.responseType === "json";
        if (N.isResponse(r) || N.isReadableStream(r)) return r;
        if (r && N.isString(r) && (o && !this.responseType || l)) {
            const c = !(s && s.silentJSONParsing) && l;
            try {
                return JSON.parse(r)
            } catch (h) {
                if (c) throw h.name === "SyntaxError" ? se.from(h, se.ERR_BAD_RESPONSE, this, null, this.response) : h
            }
        }
        return r
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Xe.classes.FormData,
        Blob: Xe.classes.Blob
    },
    validateStatus: function(r) {
        return r >= 200 && r < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
N.forEach(["delete", "get", "head", "post", "put", "patch"], n => {
    bi.headers[n] = {}
});
const jT = N.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    _T = n => {
        const r = {};
        let s, o, l;
        return n && n.split(`
`).forEach(function(c) {
            l = c.indexOf(":"), s = c.substring(0, l).trim().toLowerCase(), o = c.substring(l + 1).trim(), !(!s || r[s] && jT[s]) && (s === "set-cookie" ? r[s] ? r[s].push(o) : r[s] = [o] : r[s] = r[s] ? r[s] + ", " + o : o)
        }), r
    },
    Cp = Symbol("internals");

function Si(n) {
    return n && String(n).trim().toLowerCase()
}

function uo(n) {
    return n === !1 || n == null ? n : N.isArray(n) ? n.map(uo) : String(n)
}

function VT(n) {
    const r = Object.create(null),
        s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let o;
    for (; o = s.exec(n);) r[o[1]] = o[2];
    return r
}
const FT = n => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());

function Ul(n, r, s, o, l) {
    if (N.isFunction(o)) return o.call(this, r, s);
    if (l && (r = s), !!N.isString(r)) {
        if (N.isString(o)) return r.indexOf(o) !== -1;
        if (N.isRegExp(o)) return o.test(r)
    }
}

function IT(n) {
    return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, s, o) => s.toUpperCase() + o)
}

function BT(n, r) {
    const s = N.toCamelCase(" " + r);
    ["get", "set", "has"].forEach(o => {
        Object.defineProperty(n, o + s, {
            value: function(l, d, c) {
                return this[o].call(this, r, l, d, c)
            },
            configurable: !0
        })
    })
}
let dt = class {
    constructor(r) {
        r && this.set(r)
    }
    set(r, s, o) {
        const l = this;

        function d(h, p, y) {
            const g = Si(p);
            if (!g) throw new Error("header name must be a non-empty string");
            const v = N.findKey(l, g);
            (!v || l[v] === void 0 || y === !0 || y === void 0 && l[v] !== !1) && (l[v || p] = uo(h))
        }
        const c = (h, p) => N.forEach(h, (y, g) => d(y, g, p));
        if (N.isPlainObject(r) || r instanceof this.constructor) c(r, s);
        else if (N.isString(r) && (r = r.trim()) && !FT(r)) c(_T(r), s);
        else if (N.isObject(r) && N.isIterable(r)) {
            let h = {},
                p, y;
            for (const g of r) {
                if (!N.isArray(g)) throw TypeError("Object iterator must return a key-value pair");
                h[y = g[0]] = (p = h[y]) ? N.isArray(p) ? [...p, g[1]] : [p, g[1]] : g[1]
            }
            c(h, s)
        } else r != null && d(s, r, o);
        return this
    }
    get(r, s) {
        if (r = Si(r), r) {
            const o = N.findKey(this, r);
            if (o) {
                const l = this[o];
                if (!s) return l;
                if (s === !0) return VT(l);
                if (N.isFunction(s)) return s.call(this, l, o);
                if (N.isRegExp(s)) return s.exec(l);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(r, s) {
        if (r = Si(r), r) {
            const o = N.findKey(this, r);
            return !!(o && this[o] !== void 0 && (!s || Ul(this, this[o], o, s)))
        }
        return !1
    }
    delete(r, s) {
        const o = this;
        let l = !1;

        function d(c) {
            if (c = Si(c), c) {
                const h = N.findKey(o, c);
                h && (!s || Ul(o, o[h], h, s)) && (delete o[h], l = !0)
            }
        }
        return N.isArray(r) ? r.forEach(d) : d(r), l
    }
    clear(r) {
        const s = Object.keys(this);
        let o = s.length,
            l = !1;
        for (; o--;) {
            const d = s[o];
            (!r || Ul(this, this[d], d, r, !0)) && (delete this[d], l = !0)
        }
        return l
    }
    normalize(r) {
        const s = this,
            o = {};
        return N.forEach(this, (l, d) => {
            const c = N.findKey(o, d);
            if (c) {
                s[c] = uo(l), delete s[d];
                return
            }
            const h = r ? IT(d) : String(d).trim();
            h !== d && delete s[d], s[h] = uo(l), o[h] = !0
        }), this
    }
    concat(...r) {
        return this.constructor.concat(this, ...r)
    }
    toJSON(r) {
        const s = Object.create(null);
        return N.forEach(this, (o, l) => {
            o != null && o !== !1 && (s[l] = r && N.isArray(o) ? o.join(", ") : o)
        }), s
    } [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([r, s]) => r + ": " + s).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(r) {
        return r instanceof this ? r : new this(r)
    }
    static concat(r, ...s) {
        const o = new this(r);
        return s.forEach(l => o.set(l)), o
    }
    static accessor(r) {
        const o = (this[Cp] = this[Cp] = {
                accessors: {}
            }).accessors,
            l = this.prototype;

        function d(c) {
            const h = Si(c);
            o[h] || (BT(l, c), o[h] = !0)
        }
        return N.isArray(r) ? r.forEach(d) : d(r), this
    }
};
dt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
N.reduceDescriptors(dt.prototype, ({
    value: n
}, r) => {
    let s = r[0].toUpperCase() + r.slice(1);
    return {
        get: () => n,
        set(o) {
            this[s] = o
        }
    }
});
N.freezeMethods(dt);

function $l(n, r) {
    const s = this || bi,
        o = r || s,
        l = dt.from(o.headers);
    let d = o.data;
    return N.forEach(n, function(h) {
        d = h.call(s, d, l.normalize(), r ? r.status : void 0)
    }), l.normalize(), d
}

function kg(n) {
    return !!(n && n.__CANCEL__)
}

function Nr(n, r, s) {
    se.call(this, n ?? "canceled", se.ERR_CANCELED, r, s), this.name = "CanceledError"
}
N.inherits(Nr, se, {
    __CANCEL__: !0
});

function Pg(n, r, s) {
    const o = s.config.validateStatus;
    !s.status || !o || o(s.status) ? n(s) : r(new se("Request failed with status code " + s.status, [se.ERR_BAD_REQUEST, se.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4], s.config, s.request, s))
}

function zT(n) {
    const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
    return r && r[1] || ""
}

function UT(n, r) {
    n = n || 10;
    const s = new Array(n),
        o = new Array(n);
    let l = 0,
        d = 0,
        c;
    return r = r !== void 0 ? r : 1e3,
        function(p) {
            const y = Date.now(),
                g = o[d];
            c || (c = y), s[l] = p, o[l] = y;
            let v = d,
                S = 0;
            for (; v !== l;) S += s[v++], v = v % n;
            if (l = (l + 1) % n, l === d && (d = (d + 1) % n), y - c < r) return;
            const k = g && y - g;
            return k ? Math.round(S * 1e3 / k) : void 0
        }
}

function $T(n, r) {
    let s = 0,
        o = 1e3 / r,
        l, d;
    const c = (y, g = Date.now()) => {
        s = g, l = null, d && (clearTimeout(d), d = null), n.apply(null, y)
    };
    return [(...y) => {
        const g = Date.now(),
            v = g - s;
        v >= o ? c(y, g) : (l = y, d || (d = setTimeout(() => {
            d = null, c(l)
        }, o - v)))
    }, () => l && c(l)]
}
const yo = (n, r, s = 3) => {
        let o = 0;
        const l = UT(50, 250);
        return $T(d => {
            const c = d.loaded,
                h = d.lengthComputable ? d.total : void 0,
                p = c - o,
                y = l(p),
                g = c <= h;
            o = c;
            const v = {
                loaded: c,
                total: h,
                progress: h ? c / h : void 0,
                bytes: p,
                rate: y || void 0,
                estimated: y && h && g ? (h - c) / y : void 0,
                event: d,
                lengthComputable: h != null,
                [r ? "download" : "upload"]: !0
            };
            n(v)
        }, s)
    },
    kp = (n, r) => {
        const s = n != null;
        return [o => r[0]({
            lengthComputable: s,
            total: n,
            loaded: o
        }), r[1]]
    },
    Pp = n => (...r) => N.asap(() => n(...r)),
    bT = Xe.hasStandardBrowserEnv ? ((n, r) => s => (s = new URL(s, Xe.origin), n.protocol === s.protocol && n.host === s.host && (r || n.port === s.port)))(new URL(Xe.origin), Xe.navigator && /(msie|trident)/i.test(Xe.navigator.userAgent)) : () => !0,
    HT = Xe.hasStandardBrowserEnv ? {
        write(n, r, s, o, l, d) {
            const c = [n + "=" + encodeURIComponent(r)];
            N.isNumber(s) && c.push("expires=" + new Date(s).toGMTString()), N.isString(o) && c.push("path=" + o), N.isString(l) && c.push("domain=" + l), d === !0 && c.push("secure"), document.cookie = c.join("; ")
        },
        read(n) {
            const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
            return r ? decodeURIComponent(r[3]) : null
        },
        remove(n) {
            this.write(n, "", Date.now() - 864e5)
        }
    } : {
        write() {},
        read() {
            return null
        },
        remove() {}
    };

function WT(n) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)
}

function KT(n, r) {
    return r ? n.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : n
}

function Rg(n, r, s) {
    let o = !WT(r);
    return n && (o || s == !1) ? KT(n, r) : r
}
const Rp = n => n instanceof dt ? {
    ...n
} : n;

function Xn(n, r) {
    r = r || {};
    const s = {};

    function o(y, g, v, S) {
        return N.isPlainObject(y) && N.isPlainObject(g) ? N.merge.call({
            caseless: S
        }, y, g) : N.isPlainObject(g) ? N.merge({}, g) : N.isArray(g) ? g.slice() : g
    }

    function l(y, g, v, S) {
        if (N.isUndefined(g)) {
            if (!N.isUndefined(y)) return o(void 0, y, v, S)
        } else return o(y, g, v, S)
    }

    function d(y, g) {
        if (!N.isUndefined(g)) return o(void 0, g)
    }

    function c(y, g) {
        if (N.isUndefined(g)) {
            if (!N.isUndefined(y)) return o(void 0, y)
        } else return o(void 0, g)
    }

    function h(y, g, v) {
        if (v in r) return o(y, g);
        if (v in n) return o(void 0, y)
    }
    const p = {
        url: d,
        method: d,
        data: d,
        baseURL: c,
        transformRequest: c,
        transformResponse: c,
        paramsSerializer: c,
        timeout: c,
        timeoutMessage: c,
        withCredentials: c,
        withXSRFToken: c,
        adapter: c,
        responseType: c,
        xsrfCookieName: c,
        xsrfHeaderName: c,
        onUploadProgress: c,
        onDownloadProgress: c,
        decompress: c,
        maxContentLength: c,
        maxBodyLength: c,
        beforeRedirect: c,
        transport: c,
        httpAgent: c,
        httpsAgent: c,
        cancelToken: c,
        socketPath: c,
        responseEncoding: c,
        validateStatus: h,
        headers: (y, g, v) => l(Rp(y), Rp(g), v, !0)
    };
    return N.forEach(Object.keys(Object.assign({}, n, r)), function(g) {
        const v = p[g] || l,
            S = v(n[g], r[g], g);
        N.isUndefined(S) && v !== h || (s[g] = S)
    }), s
}
const Ag = n => {
        const r = Xn({}, n);
        let {
            data: s,
            withXSRFToken: o,
            xsrfHeaderName: l,
            xsrfCookieName: d,
            headers: c,
            auth: h
        } = r;
        r.headers = c = dt.from(c), r.url = Tg(Rg(r.baseURL, r.url, r.allowAbsoluteUrls), n.params, n.paramsSerializer), h && c.set("Authorization", "Basic " + btoa((h.username || "") + ":" + (h.password ? unescape(encodeURIComponent(h.password)) : "")));
        let p;
        if (N.isFormData(s)) {
            if (Xe.hasStandardBrowserEnv || Xe.hasStandardBrowserWebWorkerEnv) c.setContentType(void 0);
            else if ((p = c.getContentType()) !== !1) {
                const [y, ...g] = p ? p.split(";").map(v => v.trim()).filter(Boolean) : [];
                c.setContentType([y || "multipart/form-data", ...g].join("; "))
            }
        }
        if (Xe.hasStandardBrowserEnv && (o && N.isFunction(o) && (o = o(r)), o || o !== !1 && bT(r.url))) {
            const y = l && d && HT.read(d);
            y && c.set(l, y)
        }
        return r
    },
    qT = typeof XMLHttpRequest < "u",
    GT = qT && function(n) {
        return new Promise(function(s, o) {
            const l = Ag(n);
            let d = l.data;
            const c = dt.from(l.headers).normalize();
            let {
                responseType: h,
                onUploadProgress: p,
                onDownloadProgress: y
            } = l, g, v, S, k, M;

            function P() {
                k && k(), M && M(), l.cancelToken && l.cancelToken.unsubscribe(g), l.signal && l.signal.removeEventListener("abort", g)
            }
            let R = new XMLHttpRequest;
            R.open(l.method.toUpperCase(), l.url, !0), R.timeout = l.timeout;

            function L() {
                if (!R) return;
                const j = dt.from("getAllResponseHeaders" in R && R.getAllResponseHeaders()),
                    B = {
                        data: !h || h === "text" || h === "json" ? R.responseText : R.response,
                        status: R.status,
                        statusText: R.statusText,
                        headers: j,
                        config: n,
                        request: R
                    };
                Pg(function(ne) {
                    s(ne), P()
                }, function(ne) {
                    o(ne), P()
                }, B), R = null
            }
            "onloadend" in R ? R.onloadend = L : R.onreadystatechange = function() {
                !R || R.readyState !== 4 || R.status === 0 && !(R.responseURL && R.responseURL.indexOf("file:") === 0) || setTimeout(L)
            }, R.onabort = function() {
                R && (o(new se("Request aborted", se.ECONNABORTED, n, R)), R = null)
            }, R.onerror = function() {
                o(new se("Network Error", se.ERR_NETWORK, n, R)), R = null
            }, R.ontimeout = function() {
                let G = l.timeout ? "timeout of " + l.timeout + "ms exceeded" : "timeout exceeded";
                const B = l.transitional || Eg;
                l.timeoutErrorMessage && (G = l.timeoutErrorMessage), o(new se(G, B.clarifyTimeoutError ? se.ETIMEDOUT : se.ECONNABORTED, n, R)), R = null
            }, d === void 0 && c.setContentType(null), "setRequestHeader" in R && N.forEach(c.toJSON(), function(G, B) {
                R.setRequestHeader(B, G)
            }), N.isUndefined(l.withCredentials) || (R.withCredentials = !!l.withCredentials), h && h !== "json" && (R.responseType = l.responseType), y && ([S, M] = yo(y, !0), R.addEventListener("progress", S)), p && R.upload && ([v, k] = yo(p), R.upload.addEventListener("progress", v), R.upload.addEventListener("loadend", k)), (l.cancelToken || l.signal) && (g = j => {
                R && (o(!j || j.type ? new Nr(null, n, R) : j), R.abort(), R = null)
            }, l.cancelToken && l.cancelToken.subscribe(g), l.signal && (l.signal.aborted ? g() : l.signal.addEventListener("abort", g)));
            const U = zT(l.url);
            if (U && Xe.protocols.indexOf(U) === -1) {
                o(new se("Unsupported protocol " + U + ":", se.ERR_BAD_REQUEST, n));
                return
            }
            R.send(d || null)
        })
    },
    XT = (n, r) => {
        const {
            length: s
        } = n = n ? n.filter(Boolean) : [];
        if (r || s) {
            let o = new AbortController,
                l;
            const d = function(y) {
                if (!l) {
                    l = !0, h();
                    const g = y instanceof Error ? y : this.reason;
                    o.abort(g instanceof se ? g : new Nr(g instanceof Error ? g.message : g))
                }
            };
            let c = r && setTimeout(() => {
                c = null, d(new se(`timeout ${r} of ms exceeded`, se.ETIMEDOUT))
            }, r);
            const h = () => {
                n && (c && clearTimeout(c), c = null, n.forEach(y => {
                    y.unsubscribe ? y.unsubscribe(d) : y.removeEventListener("abort", d)
                }), n = null)
            };
            n.forEach(y => y.addEventListener("abort", d));
            const {
                signal: p
            } = o;
            return p.unsubscribe = () => N.asap(h), p
        }
    },
    QT = function*(n, r) {
        let s = n.byteLength;
        if (s < r) {
            yield n;
            return
        }
        let o = 0,
            l;
        for (; o < s;) l = o + r, yield n.slice(o, l), o = l
    },
    YT = async function*(n, r) {
        for await (const s of JT(n)) yield* QT(s, r)
    }, JT = async function*(n) {
        if (n[Symbol.asyncIterator]) {
            yield* n;
            return
        }
        const r = n.getReader();
        try {
            for (;;) {
                const {
                    done: s,
                    value: o
                } = await r.read();
                if (s) break;
                yield o
            }
        } finally {
            await r.cancel()
        }
    }, Ap = (n, r, s, o) => {
        const l = YT(n, r);
        let d = 0,
            c, h = p => {
                c || (c = !0, o && o(p))
            };
        return new ReadableStream({
            async pull(p) {
                try {
                    const {
                        done: y,
                        value: g
                    } = await l.next();
                    if (y) {
                        h(), p.close();
                        return
                    }
                    let v = g.byteLength;
                    if (s) {
                        let S = d += v;
                        s(S)
                    }
                    p.enqueue(new Uint8Array(g))
                } catch (y) {
                    throw h(y), y
                }
            },
            cancel(p) {
                return h(p), l.return()
            }
        }, {
            highWaterMark: 2
        })
    }, Ao = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Mg = Ao && typeof ReadableStream == "function", ZT = Ao && (typeof TextEncoder == "function" ? (n => r => n.encode(r))(new TextEncoder) : async n => new Uint8Array(await new Response(n).arrayBuffer())), Dg = (n, ...r) => {
        try {
            return !!n(...r)
        } catch {
            return !1
        }
    }, eE = Mg && Dg(() => {
        let n = !1;
        const r = new Request(Xe.origin, {
            body: new ReadableStream,
            method: "POST",
            get duplex() {
                return n = !0, "half"
            }
        }).headers.has("Content-Type");
        return n && !r
    }), Mp = 64 * 1024, hu = Mg && Dg(() => N.isReadableStream(new Response("").body)), vo = {
        stream: hu && (n => n.body)
    };
Ao && (n => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(r => {
        !vo[r] && (vo[r] = N.isFunction(n[r]) ? s => s[r]() : (s, o) => {
            throw new se(`Response type '${r}' is not supported`, se.ERR_NOT_SUPPORT, o)
        })
    })
})(new Response);
const tE = async n => {
    if (n == null) return 0;
    if (N.isBlob(n)) return n.size;
    if (N.isSpecCompliantForm(n)) return (await new Request(Xe.origin, {
        method: "POST",
        body: n
    }).arrayBuffer()).byteLength;
    if (N.isArrayBufferView(n) || N.isArrayBuffer(n)) return n.byteLength;
    if (N.isURLSearchParams(n) && (n = n + ""), N.isString(n)) return (await ZT(n)).byteLength
}, nE = async (n, r) => {
    const s = N.toFiniteNumber(n.getContentLength());
    return s ?? tE(r)
}, rE = Ao && (async n => {
    let {
        url: r,
        method: s,
        data: o,
        signal: l,
        cancelToken: d,
        timeout: c,
        onDownloadProgress: h,
        onUploadProgress: p,
        responseType: y,
        headers: g,
        withCredentials: v = "same-origin",
        fetchOptions: S
    } = Ag(n);
    y = y ? (y + "").toLowerCase() : "text";
    let k = XT([l, d && d.toAbortSignal()], c),
        M;
    const P = k && k.unsubscribe && (() => {
        k.unsubscribe()
    });
    let R;
    try {
        if (p && eE && s !== "get" && s !== "head" && (R = await nE(g, o)) !== 0) {
            let B = new Request(r, {
                    method: "POST",
                    body: o,
                    duplex: "half"
                }),
                W;
            if (N.isFormData(o) && (W = B.headers.get("content-type")) && g.setContentType(W), B.body) {
                const [ne, J] = kp(R, yo(Pp(p)));
                o = Ap(B.body, Mp, ne, J)
            }
        }
        N.isString(v) || (v = v ? "include" : "omit");
        const L = "credentials" in Request.prototype;
        M = new Request(r, {
            ...S,
            signal: k,
            method: s.toUpperCase(),
            headers: g.normalize().toJSON(),
            body: o,
            duplex: "half",
            credentials: L ? v : void 0
        });
        let U = await fetch(M);
        const j = hu && (y === "stream" || y === "response");
        if (hu && (h || j && P)) {
            const B = {};
            ["status", "statusText", "headers"].forEach(pe => {
                B[pe] = U[pe]
            });
            const W = N.toFiniteNumber(U.headers.get("content-length")),
                [ne, J] = h && kp(W, yo(Pp(h), !0)) || [];
            U = new Response(Ap(U.body, Mp, ne, () => {
                J && J(), P && P()
            }), B)
        }
        y = y || "text";
        let G = await vo[N.findKey(vo, y) || "text"](U, n);
        return !j && P && P(), await new Promise((B, W) => {
            Pg(B, W, {
                data: G,
                headers: dt.from(U.headers),
                status: U.status,
                statusText: U.statusText,
                config: n,
                request: M
            })
        })
    } catch (L) {
        throw P && P(), L && L.name === "TypeError" && /Load failed|fetch/i.test(L.message) ? Object.assign(new se("Network Error", se.ERR_NETWORK, n, M), {
            cause: L.cause || L
        }) : se.from(L, L && L.code, n, M)
    }
}), pu = {
    http: vT,
    xhr: GT,
    fetch: rE
};
N.forEach(pu, (n, r) => {
    if (n) {
        try {
            Object.defineProperty(n, "name", {
                value: r
            })
        } catch {}
        Object.defineProperty(n, "adapterName", {
            value: r
        })
    }
});
const Dp = n => `- ${n}`,
    iE = n => N.isFunction(n) || n === null || n === !1,
    Ng = {
        getAdapter: n => {
            n = N.isArray(n) ? n : [n];
            const {
                length: r
            } = n;
            let s, o;
            const l = {};
            for (let d = 0; d < r; d++) {
                s = n[d];
                let c;
                if (o = s, !iE(s) && (o = pu[(c = String(s)).toLowerCase()], o === void 0)) throw new se(`Unknown adapter '${c}'`);
                if (o) break;
                l[c || "#" + d] = o
            }
            if (!o) {
                const d = Object.entries(l).map(([h, p]) => `adapter ${h} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build"));
                let c = r ? d.length > 1 ? `since :
` + d.map(Dp).join(`
`) : " " + Dp(d[0]) : "as no adapter specified";
                throw new se("There is no suitable adapter to dispatch the request " + c, "ERR_NOT_SUPPORT")
            }
            return o
        },
        adapters: pu
    };

function bl(n) {
    if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted) throw new Nr(null, n)
}

function Np(n) {
    return bl(n), n.headers = dt.from(n.headers), n.data = $l.call(n, n.transformRequest), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Ng.getAdapter(n.adapter || bi.adapter)(n).then(function(o) {
        return bl(n), o.data = $l.call(n, n.transformResponse, o), o.headers = dt.from(o.headers), o
    }, function(o) {
        return kg(o) || (bl(n), o && o.response && (o.response.data = $l.call(n, n.transformResponse, o.response), o.response.headers = dt.from(o.response.headers))), Promise.reject(o)
    })
}
const Lg = "1.9.0",
    Mo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, r) => {
    Mo[n] = function(o) {
        return typeof o === n || "a" + (r < 1 ? "n " : " ") + n
    }
});
const Lp = {};
Mo.transitional = function(r, s, o) {
    function l(d, c) {
        return "[Axios v" + Lg + "] Transitional option '" + d + "'" + c + (o ? ". " + o : "")
    }
    return (d, c, h) => {
        if (r === !1) throw new se(l(c, " has been removed" + (s ? " in " + s : "")), se.ERR_DEPRECATED);
        return s && !Lp[c] && (Lp[c] = !0, console.warn(l(c, " has been deprecated since v" + s + " and will be removed in the near future"))), r ? r(d, c, h) : !0
    }
};
Mo.spelling = function(r) {
    return (s, o) => (console.warn(`${o} is likely a misspelling of ${r}`), !0)
};

function sE(n, r, s) {
    if (typeof n != "object") throw new se("options must be an object", se.ERR_BAD_OPTION_VALUE);
    const o = Object.keys(n);
    let l = o.length;
    for (; l-- > 0;) {
        const d = o[l],
            c = r[d];
        if (c) {
            const h = n[d],
                p = h === void 0 || c(h, d, n);
            if (p !== !0) throw new se("option " + d + " must be " + p, se.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (s !== !0) throw new se("Unknown option " + d, se.ERR_BAD_OPTION)
    }
}
const co = {
        assertOptions: sE,
        validators: Mo
    },
    bt = co.validators;
let Gn = class {
    constructor(r) {
        this.defaults = r || {}, this.interceptors = {
            request: new Ep,
            response: new Ep
        }
    }
    async request(r, s) {
        try {
            return await this._request(r, s)
        } catch (o) {
            if (o instanceof Error) {
                let l = {};
                Error.captureStackTrace ? Error.captureStackTrace(l) : l = new Error;
                const d = l.stack ? l.stack.replace(/^.+\n/, "") : "";
                try {
                    o.stack ? d && !String(o.stack).endsWith(d.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + d) : o.stack = d
                } catch {}
            }
            throw o
        }
    }
    _request(r, s) {
        typeof r == "string" ? (s = s || {}, s.url = r) : s = r || {}, s = Xn(this.defaults, s);
        const {
            transitional: o,
            paramsSerializer: l,
            headers: d
        } = s;
        o !== void 0 && co.assertOptions(o, {
            silentJSONParsing: bt.transitional(bt.boolean),
            forcedJSONParsing: bt.transitional(bt.boolean),
            clarifyTimeoutError: bt.transitional(bt.boolean)
        }, !1), l != null && (N.isFunction(l) ? s.paramsSerializer = {
            serialize: l
        } : co.assertOptions(l, {
            encode: bt.function,
            serialize: bt.function
        }, !0)), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), co.assertOptions(s, {
            baseUrl: bt.spelling("baseURL"),
            withXsrfToken: bt.spelling("withXSRFToken")
        }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
        let c = d && N.merge(d.common, d[s.method]);
        d && N.forEach(["delete", "get", "head", "post", "put", "patch", "common"], M => {
            delete d[M]
        }), s.headers = dt.concat(c, d);
        const h = [];
        let p = !0;
        this.interceptors.request.forEach(function(P) {
            typeof P.runWhen == "function" && P.runWhen(s) === !1 || (p = p && P.synchronous, h.unshift(P.fulfilled, P.rejected))
        });
        const y = [];
        this.interceptors.response.forEach(function(P) {
            y.push(P.fulfilled, P.rejected)
        });
        let g, v = 0,
            S;
        if (!p) {
            const M = [Np.bind(this), void 0];
            for (M.unshift.apply(M, h), M.push.apply(M, y), S = M.length, g = Promise.resolve(s); v < S;) g = g.then(M[v++], M[v++]);
            return g
        }
        S = h.length;
        let k = s;
        for (v = 0; v < S;) {
            const M = h[v++],
                P = h[v++];
            try {
                k = M(k)
            } catch (R) {
                P.call(this, R);
                break
            }
        }
        try {
            g = Np.call(this, k)
        } catch (M) {
            return Promise.reject(M)
        }
        for (v = 0, S = y.length; v < S;) g = g.then(y[v++], y[v++]);
        return g
    }
    getUri(r) {
        r = Xn(this.defaults, r);
        const s = Rg(r.baseURL, r.url, r.allowAbsoluteUrls);
        return Tg(s, r.params, r.paramsSerializer)
    }
};
N.forEach(["delete", "get", "head", "options"], function(r) {
    Gn.prototype[r] = function(s, o) {
        return this.request(Xn(o || {}, {
            method: r,
            url: s,
            data: (o || {}).data
        }))
    }
});
N.forEach(["post", "put", "patch"], function(r) {
    function s(o) {
        return function(d, c, h) {
            return this.request(Xn(h || {}, {
                method: r,
                headers: o ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: d,
                data: c
            }))
        }
    }
    Gn.prototype[r] = s(), Gn.prototype[r + "Form"] = s(!0)
});
let oE = class Og {
    constructor(r) {
        if (typeof r != "function") throw new TypeError("executor must be a function.");
        let s;
        this.promise = new Promise(function(d) {
            s = d
        });
        const o = this;
        this.promise.then(l => {
            if (!o._listeners) return;
            let d = o._listeners.length;
            for (; d-- > 0;) o._listeners[d](l);
            o._listeners = null
        }), this.promise.then = l => {
            let d;
            const c = new Promise(h => {
                o.subscribe(h), d = h
            }).then(l);
            return c.cancel = function() {
                o.unsubscribe(d)
            }, c
        }, r(function(d, c, h) {
            o.reason || (o.reason = new Nr(d, c, h), s(o.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(r) {
        if (this.reason) {
            r(this.reason);
            return
        }
        this._listeners ? this._listeners.push(r) : this._listeners = [r]
    }
    unsubscribe(r) {
        if (!this._listeners) return;
        const s = this._listeners.indexOf(r);
        s !== -1 && this._listeners.splice(s, 1)
    }
    toAbortSignal() {
        const r = new AbortController,
            s = o => {
                r.abort(o)
            };
        return this.subscribe(s), r.signal.unsubscribe = () => this.unsubscribe(s), r.signal
    }
    static source() {
        let r;
        return {
            token: new Og(function(l) {
                r = l
            }),
            cancel: r
        }
    }
};

function aE(n) {
    return function(s) {
        return n.apply(null, s)
    }
}

function lE(n) {
    return N.isObject(n) && n.isAxiosError === !0
}
const mu = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(mu).forEach(([n, r]) => {
    mu[r] = n
});

function jg(n) {
    const r = new Gn(n),
        s = cg(Gn.prototype.request, r);
    return N.extend(s, Gn.prototype, r, {
        allOwnKeys: !0
    }), N.extend(s, r, null, {
        allOwnKeys: !0
    }), s.create = function(l) {
        return jg(Xn(n, l))
    }, s
}
const Oe = jg(bi);
Oe.Axios = Gn;
Oe.CanceledError = Nr;
Oe.CancelToken = oE;
Oe.isCancel = kg;
Oe.VERSION = Lg;
Oe.toFormData = Ro;
Oe.AxiosError = se;
Oe.Cancel = Oe.CanceledError;
Oe.all = function(r) {
    return Promise.all(r)
};
Oe.spread = aE;
Oe.isAxiosError = lE;
Oe.mergeConfig = Xn;
Oe.AxiosHeaders = dt;
Oe.formToJSON = n => Cg(N.isHTMLForm(n) ? new FormData(n) : n);
Oe.getAdapter = Ng.getAdapter;
Oe.HttpStatusCode = mu;
Oe.default = Oe;
const {
    Axios: pE,
    AxiosError: mE,
    CanceledError: gE,
    isCancel: yE,
    CancelToken: vE,
    VERSION: wE,
    all: xE,
    Cancel: SE,
    isAxiosError: TE,
    spread: EE,
    toFormData: CE,
    AxiosHeaders: kE,
    HttpStatusCode: PE,
    formToJSON: RE,
    getAdapter: AE,
    mergeConfig: ME
} = Oe, uE = async (n, r) => {
    try {
        const s = "https://metaai.pages.dev/api/metaai";
        console.log("Sending request to:", s);
        const o = await Oe.get(s, {
            params: {
                text: n,
                conversation_id: r
            }
        });
        return {
            message: o.data.message,
            images: o.data.images || []
        }
    } catch (s) {
        throw console.error("Error fetching from Meta AI API:", s), new Error("Failed to get response from AI service")
    }
}, cE = () => {
    const [n, r] = b.useState(!1), [s, o] = b.useState(!1), [l, d] = b.useState({
        id: "",
        title: "",
        messages: []
    }), [c, h] = b.useState([]);
    b.useEffect(() => {
        try {
            const P = new URLSearchParams(window.location.search),
                R = P.get("existing"),
                L = P.get("conversation_id");
            R && L ? y(L) : g(!1), p()
        } catch (P) {
            console.error("Error during initial app load:", P);
            const L = {
                id: vi(),
                title: `Genify AI - ${new Date().toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}`,
                messages: []
            };
            d(L), xi(L)
        }
    }, []);
    const p = () => {
            const P = uu();
            h(P)
        },
        y = P => {
            const L = uu().find(U => U.id === P);
            L ? d(L) : g(!1)
        },
        g = (P = !0) => {
            const R = vi(),
                L = {
                    id: R,
                    title: `Genify AI - ${new Date().toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}`,
                    messages: []
                };
            if (d(L), xi(L), P) try {
                const U = `/?existing&conversation_id=${R}`;
                window.history.replaceState(null, "", U)
            } catch (U) {
                console.error("Error updating URL:", U)
            }
        },
        v = async P => {
            if (!P.trim()) return;
            const R = {
                    id: vi(),
                    role: "user",
                    content: P,
                    timestamp: new Date().toISOString()
                },
                L = [...l.messages, R],
                U = {
                    ...l,
                    messages: L
                };
            d(U), xi(U), p();
            try {
                const j = new Audio("/notification.mp3");
                j.volume = .2, j.play().catch(G => console.log("Audio play error:", G))
            } catch (j) {
                console.log("Audio creation error:", j)
            }
            o(!0);
            try {
                const j = await uE(P, l.id),
                    G = {
                        id: vi(),
                        role: "assistant",
                        content: j.message,
                        timestamp: new Date().toISOString(),
                        images: j.images || []
                    },
                    B = [...L, G],
                    W = {
                        ...l,
                        messages: B,
                        title: B.length <= 2 ? `${P.substring(0,20)}${P.length>20?"...":""}` : l.title
                    };
                d(W), xi(W), p()
            } catch (j) {
                console.error("Error fetching AI response:", j);
                const G = {
                        id: vi(),
                        role: "assistant",
                        content: "Sorry, I encountered an error while processing your request.",
                        timestamp: new Date().toISOString(),
                        error: !0
                    },
                    B = {
                        ...l,
                        messages: [...L, G]
                    };
                d(B), xi(B)
            } finally {
                o(!1)
            }
        }, S = P => {
            try {
                const R = `/?existing&conversation_id=${P}`;
                window.history.replaceState(null, "", R)
            } catch (R) {
                console.error("Error updating URL during conversation selection:", R)
            }
            y(P), r(!1)
        }, k = () => {
            r(!0)
        }, M = () => {
            r(!1)
        };
    return O.jsxs("div", {
        className: "flex h-screen bg-gray-950 text-white overflow-hidden",
        children: [n && O.jsx(qt.div, {
            className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            onClick: M
        }), O.jsx(Su, {
            children: (n || !window.matchMedia("(max-width: 768px)").matches) && O.jsx(qt.div, {
                className: "glass neon-border fixed inset-y-0 left-0 z-40 w-72 md:relative",
                initial: {
                    x: -300
                },
                animate: {
                    x: 0
                },
                exit: {
                    x: -300
                },
                transition: {
                    type: "spring",
                    damping: 20
                },
                children: O.jsx(AS, {
                    conversations: c,
                    activeConversationId: l.id,
                    onSelectConversation: S,
                    onNewConversation: g,
                    onClose: M,
                    isMobile: window.matchMedia("(max-width: 768px)").matches
                })
            })
        }), O.jsxs("div", {
            className: "flex flex-col flex-1 md:ml-0 relative",
            children: [O.jsxs("header", {
                className: "sticky top-0 z-20 w-full glass-card border-b border-gray-800/30 backdrop-blur-md",
                children: [O.jsxs("div", {
                    className: "flex items-center justify-between p-4",
                    children: [O.jsx("button", {
                        className: "p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 transition-colors md:hidden",
                        onClick: k,
                        "data-testid": "mobile-menu-toggle",
                        "aria-label": "Toggle sidebar",
                        children: O.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-6 w-6",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: O.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M4 6h16M4 12h16M4 18h16"
                            })
                        })
                    }), O.jsxs("div", {
                        className: "flex items-center justify-center flex-1 md:justify-start",
                        children: [O.jsx("div", {
                            className: "w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mr-3",
                            children: O.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: O.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                })
                            })
                        }), O.jsx("h1", {
                            className: "text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 neon-text",
                            children: "Genify AI"
                        })]
                    }), O.jsx("div", {
                        className: "flex items-center",
                        children: O.jsxs(qt.button, {
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: .95
                            },
                            onClick: () => g(!0),
                            className: "hidden md:flex items-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r from-indigo-600/80 to-purple-600/80 hover:from-indigo-500/80 hover:to-purple-500/80 transition-all duration-300 text-sm",
                            "data-testid": "header-new-chat-button",
                            children: [O.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-4 w-4",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: O.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
                                    clipRule: "evenodd"
                                })
                            }), "New Chat"]
                        })
                    })]
                }), l.title && O.jsx("div", {
                    className: "px-4 pb-3 text-center md:text-left",
                    children: O.jsxs("p", {
                        className: "text-sm text-gray-400 truncate",
                        children: [O.jsx("span", {
                            className: "mr-2",
                            children: "📝"
                        }), l.title]
                    })
                })]
            }), O.jsxs("main", {
                className: "flex-1 flex flex-col overflow-hidden",
                children: [O.jsx(NS, {
                    messages: l.messages,
                    isLoading: s
                }), O.jsx(LS, {
                    onSendMessage: v,
                    isLoading: s
                })]
            })]
        })]
    })
};
U0.createRoot(document.getElementById("root")).render(O.jsx(j0.StrictMode, {
    children: O.jsx(cE, {})
}));
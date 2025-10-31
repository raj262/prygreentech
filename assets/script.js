var Yu = (e) => {
  throw TypeError(e);
};
var Aa = (e, t, n) => t.has(e) || Yu("Cannot " + n);
var E = (e, t, n) => (
    Aa(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  J = (e, t, n) =>
    t.has(e)
      ? Yu("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  B = (e, t, n, r) => (
    Aa(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  Ae = (e, t, n) => (Aa(e, t, "access private method"), n);
var Di = (e, t, n, r) => ({
  set _(o) {
    B(e, t, o, n);
  },
  get _() {
    return E(e, t, r);
  },
});
function Uy(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Zf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Jf = { exports: {} },
  ea = {},
  ep = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Si = Symbol.for("react.element"),
  By = Symbol.for("react.portal"),
  Vy = Symbol.for("react.fragment"),
  Wy = Symbol.for("react.strict_mode"),
  Hy = Symbol.for("react.profiler"),
  Gy = Symbol.for("react.provider"),
  Qy = Symbol.for("react.context"),
  Ky = Symbol.for("react.forward_ref"),
  Yy = Symbol.for("react.suspense"),
  Xy = Symbol.for("react.memo"),
  qy = Symbol.for("react.lazy"),
  Xu = Symbol.iterator;
function Zy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xu && e[Xu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var tp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  np = Object.assign,
  rp = {};
function go(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rp),
    (this.updater = n || tp);
}
go.prototype.isReactComponent = {};
go.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
go.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function op() {}
op.prototype = go.prototype;
function Cc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rp),
    (this.updater = n || tp);
}
var jc = (Cc.prototype = new op());
jc.constructor = Cc;
np(jc, go.prototype);
jc.isPureReactComponent = !0;
var qu = Array.isArray,
  ip = Object.prototype.hasOwnProperty,
  Ec = { current: null },
  sp = { key: !0, ref: !0, __self: !0, __source: !0 };
function ap(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ip.call(t, r) && !sp.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Si,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Ec.current,
  };
}
function Jy(e, t) {
  return {
    $$typeof: Si,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function kc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Si;
}
function ev(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Zu = /\/+/g;
function Ia(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ev("" + e.key)
    : t.toString(36);
}
function ss(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Si:
          case By:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Ia(s, 0) : r),
      qu(o)
        ? ((n = ""),
          e != null && (n = e.replace(Zu, "$&/") + "/"),
          ss(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (kc(o) &&
            (o = Jy(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Zu, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), qu(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var c = r + Ia(i, l);
      s += ss(i, t, n, c, o);
    }
  else if (((c = Zy(e)), typeof c == "function"))
    for (e = c.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (c = r + Ia(i, l++)), (s += ss(i, t, n, c, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function zi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ss(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function tv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ge = { current: null },
  as = { transition: null },
  nv = {
    ReactCurrentDispatcher: Ge,
    ReactCurrentBatchConfig: as,
    ReactCurrentOwner: Ec,
  };
function lp() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: zi,
  forEach: function (e, t, n) {
    zi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      zi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      zi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!kc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
X.Component = go;
X.Fragment = Vy;
X.Profiler = Hy;
X.PureComponent = Cc;
X.StrictMode = Wy;
X.Suspense = Yy;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nv;
X.act = lp;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = np({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Ec.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (c in t)
      ip.call(t, c) &&
        !sp.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    l = Array(c);
    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Si, type: e.type, key: o, ref: i, props: r, _owner: s };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: Qy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Gy, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = ap;
X.createFactory = function (e) {
  var t = ap.bind(null, e);
  return (t.type = e), t;
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: Ky, render: e };
};
X.isValidElement = kc;
X.lazy = function (e) {
  return { $$typeof: qy, _payload: { _status: -1, _result: e }, _init: tv };
};
X.memo = function (e, t) {
  return { $$typeof: Xy, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = as.transition;
  as.transition = {};
  try {
    e();
  } finally {
    as.transition = t;
  }
};
X.unstable_act = lp;
X.useCallback = function (e, t) {
  return Ge.current.useCallback(e, t);
};
X.useContext = function (e) {
  return Ge.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return Ge.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return Ge.current.useEffect(e, t);
};
X.useId = function () {
  return Ge.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return Ge.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return Ge.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return Ge.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return Ge.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return Ge.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return Ge.current.useRef(e);
};
X.useState = function (e) {
  return Ge.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return Ge.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return Ge.current.useTransition();
};
X.version = "18.3.1";
ep.exports = X;
var v = ep.exports;
const O = Zf(v),
  Pc = Uy({ __proto__: null, default: O }, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rv = v,
  ov = Symbol.for("react.element"),
  iv = Symbol.for("react.fragment"),
  sv = Object.prototype.hasOwnProperty,
  av = rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  lv = { key: !0, ref: !0, __self: !0, __source: !0 };
function cp(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) sv.call(t, r) && !lv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: ov,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: av.current,
  };
}
ea.Fragment = iv;
ea.jsx = cp;
ea.jsxs = cp;
Jf.exports = ea;
var a = Jf.exports,
  up = { exports: {} },
  st = {},
  dp = { exports: {} },
  fp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, T) {
    var _ = k.length;
    k.push(T);
    e: for (; 0 < _; ) {
      var W = (_ - 1) >>> 1,
        F = k[W];
      if (0 < o(F, T)) (k[W] = T), (k[_] = F), (_ = W);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var T = k[0],
      _ = k.pop();
    if (_ !== T) {
      k[0] = _;
      e: for (var W = 0, F = k.length, Y = F >>> 1; W < Y; ) {
        var q = 2 * (W + 1) - 1,
          we = k[q],
          Me = q + 1,
          te = k[Me];
        if (0 > o(we, _))
          Me < F && 0 > o(te, we)
            ? ((k[W] = te), (k[Me] = _), (W = Me))
            : ((k[W] = we), (k[q] = _), (W = q));
        else if (Me < F && 0 > o(te, _)) (k[W] = te), (k[Me] = _), (W = Me);
        else break e;
      }
    }
    return T;
  }
  function o(k, T) {
    var _ = k.sortIndex - T.sortIndex;
    return _ !== 0 ? _ : k.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var c = [],
    u = [],
    d = 1,
    f = null,
    m = 3,
    p = !1,
    b = !1,
    x = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(k) {
    for (var T = n(u); T !== null; ) {
      if (T.callback === null) r(u);
      else if (T.startTime <= k)
        r(u), (T.sortIndex = T.expirationTime), t(c, T);
      else break;
      T = n(u);
    }
  }
  function S(k) {
    if (((x = !1), y(k), !b))
      if (n(c) !== null) (b = !0), z(N);
      else {
        var T = n(u);
        T !== null && V(S, T.startTime - k);
      }
  }
  function N(k, T) {
    (b = !1), x && ((x = !1), g(P), (P = -1)), (p = !0);
    var _ = m;
    try {
      for (
        y(T), f = n(c);
        f !== null && (!(f.expirationTime > T) || (k && !$()));

      ) {
        var W = f.callback;
        if (typeof W == "function") {
          (f.callback = null), (m = f.priorityLevel);
          var F = W(f.expirationTime <= T);
          (T = e.unstable_now()),
            typeof F == "function" ? (f.callback = F) : f === n(c) && r(c),
            y(T);
        } else r(c);
        f = n(c);
      }
      if (f !== null) var Y = !0;
      else {
        var q = n(u);
        q !== null && V(S, q.startTime - T), (Y = !1);
      }
      return Y;
    } finally {
      (f = null), (m = _), (p = !1);
    }
  }
  var C = !1,
    j = null,
    P = -1,
    A = 5,
    M = -1;
  function $() {
    return !(e.unstable_now() - M < A);
  }
  function L() {
    if (j !== null) {
      var k = e.unstable_now();
      M = k;
      var T = !0;
      try {
        T = j(!0, k);
      } finally {
        T ? G() : ((C = !1), (j = null));
      }
    } else C = !1;
  }
  var G;
  if (typeof h == "function")
    G = function () {
      h(L);
    };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(),
      K = I.port2;
    (I.port1.onmessage = L),
      (G = function () {
        K.postMessage(null);
      });
  } else
    G = function () {
      w(L, 0);
    };
  function z(k) {
    (j = k), C || ((C = !0), G());
  }
  function V(k, T) {
    P = w(function () {
      k(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || p || ((b = !0), z(N));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (k) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = m;
      }
      var _ = m;
      m = T;
      try {
        return k();
      } finally {
        m = _;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, T) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var _ = m;
      m = k;
      try {
        return T();
      } finally {
        m = _;
      }
    }),
    (e.unstable_scheduleCallback = function (k, T, _) {
      var W = e.unstable_now();
      switch (
        (typeof _ == "object" && _ !== null
          ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? W + _ : W))
          : (_ = W),
        k)
      ) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return (
        (F = _ + F),
        (k = {
          id: d++,
          callback: T,
          priorityLevel: k,
          startTime: _,
          expirationTime: F,
          sortIndex: -1,
        }),
        _ > W
          ? ((k.sortIndex = _),
            t(u, k),
            n(c) === null &&
              k === n(u) &&
              (x ? (g(P), (P = -1)) : (x = !0), V(S, _ - W)))
          : ((k.sortIndex = F), t(c, k), b || p || ((b = !0), z(N))),
        k
      );
    }),
    (e.unstable_shouldYield = $),
    (e.unstable_wrapCallback = function (k) {
      var T = m;
      return function () {
        var _ = m;
        m = T;
        try {
          return k.apply(this, arguments);
        } finally {
          m = _;
        }
      };
    });
})(fp);
dp.exports = fp;
var cv = dp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uv = v,
  it = cv;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var pp = new Set(),
  qo = {};
function wr(e, t) {
  so(e, t), so(e + "Capture", t);
}
function so(e, t) {
  for (qo[e] = t, e = 0; e < t.length; e++) pp.add(t[e]);
}
var tn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  hl = Object.prototype.hasOwnProperty,
  dv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ju = {},
  ed = {};
function fv(e) {
  return hl.call(ed, e)
    ? !0
    : hl.call(Ju, e)
    ? !1
    : dv.test(e)
    ? (ed[e] = !0)
    : ((Ju[e] = !0), !1);
}
function pv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function mv(e, t, n, r) {
  if (t === null || typeof t > "u" || pv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Qe(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new Qe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Oe[t] = new Qe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Oe[e] = new Qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Oe[e] = new Qe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new Qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Oe[e] = new Qe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Oe[e] = new Qe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Oe[e] = new Qe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Oe[e] = new Qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Tc = /[\-:]([a-z])/g;
function Rc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Tc, Rc);
    Oe[t] = new Qe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Tc, Rc);
    Oe[t] = new Qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Tc, Rc);
  Oe[t] = new Qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Oe[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new Qe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Oe[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Oc(e, t, n, r) {
  var o = Oe.hasOwnProperty(t) ? Oe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (mv(t, n, o, r) && (n = null),
    r || o === null
      ? fv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var un = uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Fi = Symbol.for("react.element"),
  Mr = Symbol.for("react.portal"),
  Ar = Symbol.for("react.fragment"),
  Mc = Symbol.for("react.strict_mode"),
  gl = Symbol.for("react.profiler"),
  mp = Symbol.for("react.provider"),
  hp = Symbol.for("react.context"),
  Ac = Symbol.for("react.forward_ref"),
  yl = Symbol.for("react.suspense"),
  vl = Symbol.for("react.suspense_list"),
  Ic = Symbol.for("react.memo"),
  bn = Symbol.for("react.lazy"),
  gp = Symbol.for("react.offscreen"),
  td = Symbol.iterator;
function Eo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (td && e[td]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var me = Object.assign,
  _a;
function Lo(e) {
  if (_a === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      _a = (t && t[1]) || "";
    }
  return (
    `
` +
    _a +
    e
  );
}
var La = !1;
function Da(e, t) {
  if (!e || La) return "";
  La = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var c =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (La = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Lo(e) : "";
}
function hv(e) {
  switch (e.tag) {
    case 5:
      return Lo(e.type);
    case 16:
      return Lo("Lazy");
    case 13:
      return Lo("Suspense");
    case 19:
      return Lo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Da(e.type, !1)), e;
    case 11:
      return (e = Da(e.type.render, !1)), e;
    case 1:
      return (e = Da(e.type, !0)), e;
    default:
      return "";
  }
}
function xl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ar:
      return "Fragment";
    case Mr:
      return "Portal";
    case gl:
      return "Profiler";
    case Mc:
      return "StrictMode";
    case yl:
      return "Suspense";
    case vl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case hp:
        return (e.displayName || "Context") + ".Consumer";
      case mp:
        return (e._context.displayName || "Context") + ".Provider";
      case Ac:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ic:
        return (
          (t = e.displayName || null), t !== null ? t : xl(e.type) || "Memo"
        );
      case bn:
        (t = e._payload), (e = e._init);
        try {
          return xl(e(t));
        } catch {}
    }
  return null;
}
function gv(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return xl(t);
    case 8:
      return t === Mc ? "StrictMode" : "Mode";
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
      if (typeof t == "string") return t;
  }
  return null;
}
function Bn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function yp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function yv(e) {
  var t = yp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function $i(e) {
  e._valueTracker || (e._valueTracker = yv(e));
}
function vp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = yp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function bs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function wl(e, t) {
  var n = t.checked;
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function nd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Bn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function xp(e, t) {
  (t = t.checked), t != null && Oc(e, "checked", t, !1);
}
function bl(e, t) {
  xp(e, t);
  var n = Bn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Sl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Sl(e, t.type, Bn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function rd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Sl(e, t, n) {
  (t !== "number" || bs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Do = Array.isArray;
function Wr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Bn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Nl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function od(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Do(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Bn(n) };
}
function wp(e, t) {
  var n = Bn(t.value),
    r = Bn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function id(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function bp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Cl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? bp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ui,
  Sp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ui = Ui || document.createElement("div"),
          Ui.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ui.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Zo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Uo = {
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
    strokeWidth: !0,
  },
  vv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Uo).forEach(function (e) {
  vv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Uo[t] = Uo[e]);
  });
});
function Np(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Uo.hasOwnProperty(e) && Uo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Cp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Np(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var xv = me(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function jl(e, t) {
  if (t) {
    if (xv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function El(e, t) {
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
      return !0;
  }
}
var kl = null;
function _c(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Pl = null,
  Hr = null,
  Gr = null;
function sd(e) {
  if ((e = ji(e))) {
    if (typeof Pl != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = ia(t)), Pl(e.stateNode, e.type, t));
  }
}
function jp(e) {
  Hr ? (Gr ? Gr.push(e) : (Gr = [e])) : (Hr = e);
}
function Ep() {
  if (Hr) {
    var e = Hr,
      t = Gr;
    if (((Gr = Hr = null), sd(e), t)) for (e = 0; e < t.length; e++) sd(t[e]);
  }
}
function kp(e, t) {
  return e(t);
}
function Pp() {}
var za = !1;
function Tp(e, t, n) {
  if (za) return e(t, n);
  za = !0;
  try {
    return kp(e, t, n);
  } finally {
    (za = !1), (Hr !== null || Gr !== null) && (Pp(), Ep());
  }
}
function Jo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ia(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var Tl = !1;
if (tn)
  try {
    var ko = {};
    Object.defineProperty(ko, "passive", {
      get: function () {
        Tl = !0;
      },
    }),
      window.addEventListener("test", ko, ko),
      window.removeEventListener("test", ko, ko);
  } catch {
    Tl = !1;
  }
function wv(e, t, n, r, o, i, s, l, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Bo = !1,
  Ss = null,
  Ns = !1,
  Rl = null,
  bv = {
    onError: function (e) {
      (Bo = !0), (Ss = e);
    },
  };
function Sv(e, t, n, r, o, i, s, l, c) {
  (Bo = !1), (Ss = null), wv.apply(bv, arguments);
}
function Nv(e, t, n, r, o, i, s, l, c) {
  if ((Sv.apply(this, arguments), Bo)) {
    if (Bo) {
      var u = Ss;
      (Bo = !1), (Ss = null);
    } else throw Error(R(198));
    Ns || ((Ns = !0), (Rl = u));
  }
}
function br(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Rp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ad(e) {
  if (br(e) !== e) throw Error(R(188));
}
function Cv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = br(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return ad(o), e;
        if (i === r) return ad(o), t;
        i = i.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function Op(e) {
  return (e = Cv(e)), e !== null ? Mp(e) : null;
}
function Mp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Mp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ap = it.unstable_scheduleCallback,
  ld = it.unstable_cancelCallback,
  jv = it.unstable_shouldYield,
  Ev = it.unstable_requestPaint,
  ye = it.unstable_now,
  kv = it.unstable_getCurrentPriorityLevel,
  Lc = it.unstable_ImmediatePriority,
  Ip = it.unstable_UserBlockingPriority,
  Cs = it.unstable_NormalPriority,
  Pv = it.unstable_LowPriority,
  _p = it.unstable_IdlePriority,
  ta = null,
  Ut = null;
function Tv(e) {
  if (Ut && typeof Ut.onCommitFiberRoot == "function")
    try {
      Ut.onCommitFiberRoot(ta, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Pt = Math.clz32 ? Math.clz32 : Mv,
  Rv = Math.log,
  Ov = Math.LN2;
function Mv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Rv(e) / Ov) | 0)) | 0;
}
var Bi = 64,
  Vi = 4194304;
function zo(e) {
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
      return e;
  }
}
function js(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = zo(l)) : ((i &= s), i !== 0 && (r = zo(i)));
  } else (s = n & ~o), s !== 0 ? (r = zo(s)) : i !== 0 && (r = zo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Pt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Av(e, t) {
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
      return -1;
  }
}
function Iv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Pt(i),
      l = 1 << s,
      c = o[s];
    c === -1
      ? (!(l & n) || l & r) && (o[s] = Av(l, t))
      : c <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function Ol(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Lp() {
  var e = Bi;
  return (Bi <<= 1), !(Bi & 4194240) && (Bi = 64), e;
}
function Fa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ni(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Pt(t)),
    (e[t] = n);
}
function _v(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Pt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Dc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Pt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ne = 0;
function Dp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var zp,
  zc,
  Fp,
  $p,
  Up,
  Ml = !1,
  Wi = [],
  An = null,
  In = null,
  _n = null,
  ei = new Map(),
  ti = new Map(),
  Nn = [],
  Lv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function cd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      An = null;
      break;
    case "dragenter":
    case "dragleave":
      In = null;
      break;
    case "mouseover":
    case "mouseout":
      _n = null;
      break;
    case "pointerover":
    case "pointerout":
      ei.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ti.delete(t.pointerId);
  }
}
function Po(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ji(t)), t !== null && zc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Dv(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (An = Po(An, e, t, n, r, o)), !0;
    case "dragenter":
      return (In = Po(In, e, t, n, r, o)), !0;
    case "mouseover":
      return (_n = Po(_n, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ei.set(i, Po(ei.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), ti.set(i, Po(ti.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Bp(e) {
  var t = nr(e.target);
  if (t !== null) {
    var n = br(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Rp(n)), t !== null)) {
          (e.blockedOn = t),
            Up(e.priority, function () {
              Fp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ls(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Al(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (kl = r), n.target.dispatchEvent(r), (kl = null);
    } else return (t = ji(n)), t !== null && zc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ud(e, t, n) {
  ls(e) && n.delete(t);
}
function zv() {
  (Ml = !1),
    An !== null && ls(An) && (An = null),
    In !== null && ls(In) && (In = null),
    _n !== null && ls(_n) && (_n = null),
    ei.forEach(ud),
    ti.forEach(ud);
}
function To(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ml ||
      ((Ml = !0),
      it.unstable_scheduleCallback(it.unstable_NormalPriority, zv)));
}
function ni(e) {
  function t(o) {
    return To(o, e);
  }
  if (0 < Wi.length) {
    To(Wi[0], e);
    for (var n = 1; n < Wi.length; n++) {
      var r = Wi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    An !== null && To(An, e),
      In !== null && To(In, e),
      _n !== null && To(_n, e),
      ei.forEach(t),
      ti.forEach(t),
      n = 0;
    n < Nn.length;
    n++
  )
    (r = Nn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Nn.length && ((n = Nn[0]), n.blockedOn === null); )
    Bp(n), n.blockedOn === null && Nn.shift();
}
var Qr = un.ReactCurrentBatchConfig,
  Es = !0;
function Fv(e, t, n, r) {
  var o = ne,
    i = Qr.transition;
  Qr.transition = null;
  try {
    (ne = 1), Fc(e, t, n, r);
  } finally {
    (ne = o), (Qr.transition = i);
  }
}
function $v(e, t, n, r) {
  var o = ne,
    i = Qr.transition;
  Qr.transition = null;
  try {
    (ne = 4), Fc(e, t, n, r);
  } finally {
    (ne = o), (Qr.transition = i);
  }
}
function Fc(e, t, n, r) {
  if (Es) {
    var o = Al(e, t, n, r);
    if (o === null) Ya(e, t, r, ks, n), cd(e, r);
    else if (Dv(o, e, t, n, r)) r.stopPropagation();
    else if ((cd(e, r), t & 4 && -1 < Lv.indexOf(e))) {
      for (; o !== null; ) {
        var i = ji(o);
        if (
          (i !== null && zp(i),
          (i = Al(e, t, n, r)),
          i === null && Ya(e, t, r, ks, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ya(e, t, r, null, n);
  }
}
var ks = null;
function Al(e, t, n, r) {
  if (((ks = null), (e = _c(r)), (e = nr(e)), e !== null))
    if (((t = br(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Rp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ks = e), null;
}
function Vp(e) {
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
      switch (kv()) {
        case Lc:
          return 1;
        case Ip:
          return 4;
        case Cs:
        case Pv:
          return 16;
        case _p:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Rn = null,
  $c = null,
  cs = null;
function Wp() {
  if (cs) return cs;
  var e,
    t = $c,
    n = t.length,
    r,
    o = "value" in Rn ? Rn.value : Rn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (cs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function us(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Hi() {
  return !0;
}
function dd() {
  return !1;
}
function at(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Hi
        : dd),
      (this.isPropagationStopped = dd),
      this
    );
  }
  return (
    me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Hi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Hi));
      },
      persist: function () {},
      isPersistent: Hi,
    }),
    t
  );
}
var yo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Uc = at(yo),
  Ci = me({}, yo, { view: 0, detail: 0 }),
  Uv = at(Ci),
  $a,
  Ua,
  Ro,
  na = me({}, Ci, {
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
    getModifierState: Bc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ro &&
            (Ro && e.type === "mousemove"
              ? (($a = e.screenX - Ro.screenX), (Ua = e.screenY - Ro.screenY))
              : (Ua = $a = 0),
            (Ro = e)),
          $a);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ua;
    },
  }),
  fd = at(na),
  Bv = me({}, na, { dataTransfer: 0 }),
  Vv = at(Bv),
  Wv = me({}, Ci, { relatedTarget: 0 }),
  Ba = at(Wv),
  Hv = me({}, yo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gv = at(Hv),
  Qv = me({}, yo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Kv = at(Qv),
  Yv = me({}, yo, { data: 0 }),
  pd = at(Yv),
  Xv = {
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
    MozPrintableKey: "Unidentified",
  },
  qv = {
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
    224: "Meta",
  },
  Zv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Jv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Zv[e]) ? !!t[e] : !1;
}
function Bc() {
  return Jv;
}
var ex = me({}, Ci, {
    key: function (e) {
      if (e.key) {
        var t = Xv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = us(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? qv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Bc,
    charCode: function (e) {
      return e.type === "keypress" ? us(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? us(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  tx = at(ex),
  nx = me({}, na, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  md = at(nx),
  rx = me({}, Ci, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Bc,
  }),
  ox = at(rx),
  ix = me({}, yo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sx = at(ix),
  ax = me({}, na, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  lx = at(ax),
  cx = [9, 13, 27, 32],
  Vc = tn && "CompositionEvent" in window,
  Vo = null;
tn && "documentMode" in document && (Vo = document.documentMode);
var ux = tn && "TextEvent" in window && !Vo,
  Hp = tn && (!Vc || (Vo && 8 < Vo && 11 >= Vo)),
  hd = " ",
  gd = !1;
function Gp(e, t) {
  switch (e) {
    case "keyup":
      return cx.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Qp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ir = !1;
function dx(e, t) {
  switch (e) {
    case "compositionend":
      return Qp(t);
    case "keypress":
      return t.which !== 32 ? null : ((gd = !0), hd);
    case "textInput":
      return (e = t.data), e === hd && gd ? null : e;
    default:
      return null;
  }
}
function fx(e, t) {
  if (Ir)
    return e === "compositionend" || (!Vc && Gp(e, t))
      ? ((e = Wp()), (cs = $c = Rn = null), (Ir = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Hp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var px = {
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
  week: !0,
};
function yd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!px[e.type] : t === "textarea";
}
function Kp(e, t, n, r) {
  jp(r),
    (t = Ps(t, "onChange")),
    0 < t.length &&
      ((n = new Uc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Wo = null,
  ri = null;
function mx(e) {
  im(e, 0);
}
function ra(e) {
  var t = Dr(e);
  if (vp(t)) return e;
}
function hx(e, t) {
  if (e === "change") return t;
}
var Yp = !1;
if (tn) {
  var Va;
  if (tn) {
    var Wa = "oninput" in document;
    if (!Wa) {
      var vd = document.createElement("div");
      vd.setAttribute("oninput", "return;"),
        (Wa = typeof vd.oninput == "function");
    }
    Va = Wa;
  } else Va = !1;
  Yp = Va && (!document.documentMode || 9 < document.documentMode);
}
function xd() {
  Wo && (Wo.detachEvent("onpropertychange", Xp), (ri = Wo = null));
}
function Xp(e) {
  if (e.propertyName === "value" && ra(ri)) {
    var t = [];
    Kp(t, ri, e, _c(e)), Tp(mx, t);
  }
}
function gx(e, t, n) {
  e === "focusin"
    ? (xd(), (Wo = t), (ri = n), Wo.attachEvent("onpropertychange", Xp))
    : e === "focusout" && xd();
}
function yx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ra(ri);
}
function vx(e, t) {
  if (e === "click") return ra(t);
}
function xx(e, t) {
  if (e === "input" || e === "change") return ra(t);
}
function wx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Rt = typeof Object.is == "function" ? Object.is : wx;
function oi(e, t) {
  if (Rt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!hl.call(t, o) || !Rt(e[o], t[o])) return !1;
  }
  return !0;
}
function wd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function bd(e, t) {
  var n = wd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = wd(n);
  }
}
function qp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? qp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Zp() {
  for (var e = window, t = bs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = bs(e.document);
  }
  return t;
}
function Wc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function bx(e) {
  var t = Zp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    qp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Wc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = bd(n, i));
        var s = bd(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Sx = tn && "documentMode" in document && 11 >= document.documentMode,
  _r = null,
  Il = null,
  Ho = null,
  _l = !1;
function Sd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _l ||
    _r == null ||
    _r !== bs(r) ||
    ((r = _r),
    "selectionStart" in r && Wc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ho && oi(Ho, r)) ||
      ((Ho = r),
      (r = Ps(Il, "onSelect")),
      0 < r.length &&
        ((t = new Uc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = _r))));
}
function Gi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Lr = {
    animationend: Gi("Animation", "AnimationEnd"),
    animationiteration: Gi("Animation", "AnimationIteration"),
    animationstart: Gi("Animation", "AnimationStart"),
    transitionend: Gi("Transition", "TransitionEnd"),
  },
  Ha = {},
  Jp = {};
tn &&
  ((Jp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Lr.animationend.animation,
    delete Lr.animationiteration.animation,
    delete Lr.animationstart.animation),
  "TransitionEvent" in window || delete Lr.transitionend.transition);
function oa(e) {
  if (Ha[e]) return Ha[e];
  if (!Lr[e]) return e;
  var t = Lr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Jp) return (Ha[e] = t[n]);
  return e;
}
var em = oa("animationend"),
  tm = oa("animationiteration"),
  nm = oa("animationstart"),
  rm = oa("transitionend"),
  om = new Map(),
  Nd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Gn(e, t) {
  om.set(e, t), wr(t, [e]);
}
for (var Ga = 0; Ga < Nd.length; Ga++) {
  var Qa = Nd[Ga],
    Nx = Qa.toLowerCase(),
    Cx = Qa[0].toUpperCase() + Qa.slice(1);
  Gn(Nx, "on" + Cx);
}
Gn(em, "onAnimationEnd");
Gn(tm, "onAnimationIteration");
Gn(nm, "onAnimationStart");
Gn("dblclick", "onDoubleClick");
Gn("focusin", "onFocus");
Gn("focusout", "onBlur");
Gn(rm, "onTransitionEnd");
so("onMouseEnter", ["mouseout", "mouseover"]);
so("onMouseLeave", ["mouseout", "mouseover"]);
so("onPointerEnter", ["pointerout", "pointerover"]);
so("onPointerLeave", ["pointerout", "pointerover"]);
wr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
wr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
wr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
wr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
wr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
wr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Fo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  jx = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));
function Cd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Nv(r, t, void 0, e), (e.currentTarget = null);
}
function im(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            c = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), c !== i && o.isPropagationStopped())) break e;
          Cd(o, l, u), (i = c);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (c = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            c !== i && o.isPropagationStopped())
          )
            break e;
          Cd(o, l, u), (i = c);
        }
    }
  }
  if (Ns) throw ((e = Rl), (Ns = !1), (Rl = null), e);
}
function ae(e, t) {
  var n = t[$l];
  n === void 0 && (n = t[$l] = new Set());
  var r = e + "__bubble";
  n.has(r) || (sm(t, e, 2, !1), n.add(r));
}
function Ka(e, t, n) {
  var r = 0;
  t && (r |= 4), sm(n, e, r, t);
}
var Qi = "_reactListening" + Math.random().toString(36).slice(2);
function ii(e) {
  if (!e[Qi]) {
    (e[Qi] = !0),
      pp.forEach(function (n) {
        n !== "selectionchange" && (jx.has(n) || Ka(n, !1, e), Ka(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qi] || ((t[Qi] = !0), Ka("selectionchange", !1, t));
  }
}
function sm(e, t, n, r) {
  switch (Vp(t)) {
    case 1:
      var o = Fv;
      break;
    case 4:
      o = $v;
      break;
    default:
      o = Fc;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Tl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Ya(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var c = s.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = s.stateNode.containerInfo),
              c === o || (c.nodeType === 8 && c.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = nr(l)), s === null)) return;
          if (((c = s.tag), c === 5 || c === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Tp(function () {
    var u = i,
      d = _c(n),
      f = [];
    e: {
      var m = om.get(e);
      if (m !== void 0) {
        var p = Uc,
          b = e;
        switch (e) {
          case "keypress":
            if (us(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = tx;
            break;
          case "focusin":
            (b = "focus"), (p = Ba);
            break;
          case "focusout":
            (b = "blur"), (p = Ba);
            break;
          case "beforeblur":
          case "afterblur":
            p = Ba;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = fd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = Vv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = ox;
            break;
          case em:
          case tm:
          case nm:
            p = Gv;
            break;
          case rm:
            p = sx;
            break;
          case "scroll":
            p = Uv;
            break;
          case "wheel":
            p = lx;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = Kv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = md;
        }
        var x = (t & 4) !== 0,
          w = !x && e === "scroll",
          g = x ? (m !== null ? m + "Capture" : null) : m;
        x = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var S = y.stateNode;
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              g !== null && ((S = Jo(h, g)), S != null && x.push(si(h, S, y)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < x.length &&
          ((m = new p(m, b, null, n, d)), f.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          m &&
            n !== kl &&
            (b = n.relatedTarget || n.fromElement) &&
            (nr(b) || b[nn]))
        )
          break e;
        if (
          (p || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          p
            ? ((b = n.relatedTarget || n.toElement),
              (p = u),
              (b = b ? nr(b) : null),
              b !== null &&
                ((w = br(b)), b !== w || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((p = null), (b = u)),
          p !== b)
        ) {
          if (
            ((x = fd),
            (S = "onMouseLeave"),
            (g = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = md),
              (S = "onPointerLeave"),
              (g = "onPointerEnter"),
              (h = "pointer")),
            (w = p == null ? m : Dr(p)),
            (y = b == null ? m : Dr(b)),
            (m = new x(S, h + "leave", p, n, d)),
            (m.target = w),
            (m.relatedTarget = y),
            (S = null),
            nr(d) === u &&
              ((x = new x(g, h + "enter", b, n, d)),
              (x.target = y),
              (x.relatedTarget = w),
              (S = x)),
            (w = S),
            p && b)
          )
            t: {
              for (x = p, g = b, h = 0, y = x; y; y = Rr(y)) h++;
              for (y = 0, S = g; S; S = Rr(S)) y++;
              for (; 0 < h - y; ) (x = Rr(x)), h--;
              for (; 0 < y - h; ) (g = Rr(g)), y--;
              for (; h--; ) {
                if (x === g || (g !== null && x === g.alternate)) break t;
                (x = Rr(x)), (g = Rr(g));
              }
              x = null;
            }
          else x = null;
          p !== null && jd(f, m, p, x, !1),
            b !== null && w !== null && jd(f, w, b, x, !0);
        }
      }
      e: {
        if (
          ((m = u ? Dr(u) : window),
          (p = m.nodeName && m.nodeName.toLowerCase()),
          p === "select" || (p === "input" && m.type === "file"))
        )
          var N = hx;
        else if (yd(m))
          if (Yp) N = xx;
          else {
            N = yx;
            var C = gx;
          }
        else
          (p = m.nodeName) &&
            p.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (N = vx);
        if (N && (N = N(e, u))) {
          Kp(f, N, n, d);
          break e;
        }
        C && C(e, m, u),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            Sl(m, "number", m.value);
      }
      switch (((C = u ? Dr(u) : window), e)) {
        case "focusin":
          (yd(C) || C.contentEditable === "true") &&
            ((_r = C), (Il = u), (Ho = null));
          break;
        case "focusout":
          Ho = Il = _r = null;
          break;
        case "mousedown":
          _l = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (_l = !1), Sd(f, n, d);
          break;
        case "selectionchange":
          if (Sx) break;
        case "keydown":
        case "keyup":
          Sd(f, n, d);
      }
      var j;
      if (Vc)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Ir
          ? Gp(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Hp &&
          n.locale !== "ko" &&
          (Ir || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Ir && (j = Wp())
            : ((Rn = d),
              ($c = "value" in Rn ? Rn.value : Rn.textContent),
              (Ir = !0))),
        (C = Ps(u, P)),
        0 < C.length &&
          ((P = new pd(P, e, null, n, d)),
          f.push({ event: P, listeners: C }),
          j ? (P.data = j) : ((j = Qp(n)), j !== null && (P.data = j)))),
        (j = ux ? dx(e, n) : fx(e, n)) &&
          ((u = Ps(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new pd("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = j)));
    }
    im(f, t);
  });
}
function si(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ps(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Jo(e, n)),
      i != null && r.unshift(si(e, i, o)),
      (i = Jo(e, t)),
      i != null && r.push(si(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Rr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function jd(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      c = l.alternate,
      u = l.stateNode;
    if (c !== null && c === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((c = Jo(n, i)), c != null && s.unshift(si(n, c, l)))
        : o || ((c = Jo(n, i)), c != null && s.push(si(n, c, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Ex = /\r\n?/g,
  kx = /\u0000|\uFFFD/g;
function Ed(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ex,
      `
`
    )
    .replace(kx, "");
}
function Ki(e, t, n) {
  if (((t = Ed(t)), Ed(e) !== t && n)) throw Error(R(425));
}
function Ts() {}
var Ll = null,
  Dl = null;
function zl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Fl = typeof setTimeout == "function" ? setTimeout : void 0,
  Px = typeof clearTimeout == "function" ? clearTimeout : void 0,
  kd = typeof Promise == "function" ? Promise : void 0,
  Tx =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof kd < "u"
      ? function (e) {
          return kd.resolve(null).then(e).catch(Rx);
        }
      : Fl;
function Rx(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xa(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ni(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ni(t);
}
function Ln(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Pd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var vo = Math.random().toString(36).slice(2),
  Ft = "__reactFiber$" + vo,
  ai = "__reactProps$" + vo,
  nn = "__reactContainer$" + vo,
  $l = "__reactEvents$" + vo,
  Ox = "__reactListeners$" + vo,
  Mx = "__reactHandles$" + vo;
function nr(e) {
  var t = e[Ft];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[nn] || n[Ft])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Pd(e); e !== null; ) {
          if ((n = e[Ft])) return n;
          e = Pd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ji(e) {
  return (
    (e = e[Ft] || e[nn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Dr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function ia(e) {
  return e[ai] || null;
}
var Ul = [],
  zr = -1;
function Qn(e) {
  return { current: e };
}
function le(e) {
  0 > zr || ((e.current = Ul[zr]), (Ul[zr] = null), zr--);
}
function ie(e, t) {
  zr++, (Ul[zr] = e.current), (e.current = t);
}
var Vn = {},
  ze = Qn(Vn),
  qe = Qn(!1),
  pr = Vn;
function ao(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ze(e) {
  return (e = e.childContextTypes), e != null;
}
function Rs() {
  le(qe), le(ze);
}
function Td(e, t, n) {
  if (ze.current !== Vn) throw Error(R(168));
  ie(ze, t), ie(qe, n);
}
function am(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, gv(e) || "Unknown", o));
  return me({}, n, r);
}
function Os(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vn),
    (pr = ze.current),
    ie(ze, e),
    ie(qe, qe.current),
    !0
  );
}
function Rd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = am(e, t, pr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      le(qe),
      le(ze),
      ie(ze, e))
    : le(qe),
    ie(qe, n);
}
var Xt = null,
  sa = !1,
  qa = !1;
function lm(e) {
  Xt === null ? (Xt = [e]) : Xt.push(e);
}
function Ax(e) {
  (sa = !0), lm(e);
}
function Kn() {
  if (!qa && Xt !== null) {
    qa = !0;
    var e = 0,
      t = ne;
    try {
      var n = Xt;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Xt = null), (sa = !1);
    } catch (o) {
      throw (Xt !== null && (Xt = Xt.slice(e + 1)), Ap(Lc, Kn), o);
    } finally {
      (ne = t), (qa = !1);
    }
  }
  return null;
}
var Fr = [],
  $r = 0,
  Ms = null,
  As = 0,
  ut = [],
  dt = 0,
  mr = null,
  Zt = 1,
  Jt = "";
function er(e, t) {
  (Fr[$r++] = As), (Fr[$r++] = Ms), (Ms = e), (As = t);
}
function cm(e, t, n) {
  (ut[dt++] = Zt), (ut[dt++] = Jt), (ut[dt++] = mr), (mr = e);
  var r = Zt;
  e = Jt;
  var o = 32 - Pt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Pt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Zt = (1 << (32 - Pt(t) + o)) | (n << o) | r),
      (Jt = i + e);
  } else (Zt = (1 << i) | (n << o) | r), (Jt = e);
}
function Hc(e) {
  e.return !== null && (er(e, 1), cm(e, 1, 0));
}
function Gc(e) {
  for (; e === Ms; )
    (Ms = Fr[--$r]), (Fr[$r] = null), (As = Fr[--$r]), (Fr[$r] = null);
  for (; e === mr; )
    (mr = ut[--dt]),
      (ut[dt] = null),
      (Jt = ut[--dt]),
      (ut[dt] = null),
      (Zt = ut[--dt]),
      (ut[dt] = null);
}
var rt = null,
  nt = null,
  ue = !1,
  kt = null;
function um(e, t) {
  var n = ft(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Od(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (rt = e), (nt = Ln(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (rt = e), (nt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = mr !== null ? { id: Zt, overflow: Jt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ft(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (rt = e),
            (nt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Bl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vl(e) {
  if (ue) {
    var t = nt;
    if (t) {
      var n = t;
      if (!Od(e, t)) {
        if (Bl(e)) throw Error(R(418));
        t = Ln(n.nextSibling);
        var r = rt;
        t && Od(e, t)
          ? um(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (rt = e));
      }
    } else {
      if (Bl(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (ue = !1), (rt = e);
    }
  }
}
function Md(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  rt = e;
}
function Yi(e) {
  if (e !== rt) return !1;
  if (!ue) return Md(e), (ue = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !zl(e.type, e.memoizedProps))),
    t && (t = nt))
  ) {
    if (Bl(e)) throw (dm(), Error(R(418)));
    for (; t; ) um(e, t), (t = Ln(t.nextSibling));
  }
  if ((Md(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              nt = Ln(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      nt = null;
    }
  } else nt = rt ? Ln(e.stateNode.nextSibling) : null;
  return !0;
}
function dm() {
  for (var e = nt; e; ) e = Ln(e.nextSibling);
}
function lo() {
  (nt = rt = null), (ue = !1);
}
function Qc(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
var Ix = un.ReactCurrentBatchConfig;
function Oo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Xi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ad(e) {
  var t = e._init;
  return t(e._payload);
}
function fm(e) {
  function t(g, h) {
    if (e) {
      var y = g.deletions;
      y === null ? ((g.deletions = [h]), (g.flags |= 16)) : y.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), (h = h.sibling);
    return null;
  }
  function r(g, h) {
    for (g = new Map(); h !== null; )
      h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
    return g;
  }
  function o(g, h) {
    return (g = $n(g, h)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, h, y) {
    return (
      (g.index = y),
      e
        ? ((y = g.alternate),
          y !== null
            ? ((y = y.index), y < h ? ((g.flags |= 2), h) : y)
            : ((g.flags |= 2), h))
        : ((g.flags |= 1048576), h)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, h, y, S) {
    return h === null || h.tag !== 6
      ? ((h = ol(y, g.mode, S)), (h.return = g), h)
      : ((h = o(h, y)), (h.return = g), h);
  }
  function c(g, h, y, S) {
    var N = y.type;
    return N === Ar
      ? d(g, h, y.props.children, S, y.key)
      : h !== null &&
        (h.elementType === N ||
          (typeof N == "object" &&
            N !== null &&
            N.$$typeof === bn &&
            Ad(N) === h.type))
      ? ((S = o(h, y.props)), (S.ref = Oo(g, h, y)), (S.return = g), S)
      : ((S = ys(y.type, y.key, y.props, null, g.mode, S)),
        (S.ref = Oo(g, h, y)),
        (S.return = g),
        S);
  }
  function u(g, h, y, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = il(y, g.mode, S)), (h.return = g), h)
      : ((h = o(h, y.children || [])), (h.return = g), h);
  }
  function d(g, h, y, S, N) {
    return h === null || h.tag !== 7
      ? ((h = fr(y, g.mode, S, N)), (h.return = g), h)
      : ((h = o(h, y)), (h.return = g), h);
  }
  function f(g, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = ol("" + h, g.mode, y)), (h.return = g), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Fi:
          return (
            (y = ys(h.type, h.key, h.props, null, g.mode, y)),
            (y.ref = Oo(g, null, h)),
            (y.return = g),
            y
          );
        case Mr:
          return (h = il(h, g.mode, y)), (h.return = g), h;
        case bn:
          var S = h._init;
          return f(g, S(h._payload), y);
      }
      if (Do(h) || Eo(h))
        return (h = fr(h, g.mode, y, null)), (h.return = g), h;
      Xi(g, h);
    }
    return null;
  }
  function m(g, h, y, S) {
    var N = h !== null ? h.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return N !== null ? null : l(g, h, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Fi:
          return y.key === N ? c(g, h, y, S) : null;
        case Mr:
          return y.key === N ? u(g, h, y, S) : null;
        case bn:
          return (N = y._init), m(g, h, N(y._payload), S);
      }
      if (Do(y) || Eo(y)) return N !== null ? null : d(g, h, y, S, null);
      Xi(g, y);
    }
    return null;
  }
  function p(g, h, y, S, N) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (g = g.get(y) || null), l(h, g, "" + S, N);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Fi:
          return (g = g.get(S.key === null ? y : S.key) || null), c(h, g, S, N);
        case Mr:
          return (g = g.get(S.key === null ? y : S.key) || null), u(h, g, S, N);
        case bn:
          var C = S._init;
          return p(g, h, y, C(S._payload), N);
      }
      if (Do(S) || Eo(S)) return (g = g.get(y) || null), d(h, g, S, N, null);
      Xi(h, S);
    }
    return null;
  }
  function b(g, h, y, S) {
    for (
      var N = null, C = null, j = h, P = (h = 0), A = null;
      j !== null && P < y.length;
      P++
    ) {
      j.index > P ? ((A = j), (j = null)) : (A = j.sibling);
      var M = m(g, j, y[P], S);
      if (M === null) {
        j === null && (j = A);
        break;
      }
      e && j && M.alternate === null && t(g, j),
        (h = i(M, h, P)),
        C === null ? (N = M) : (C.sibling = M),
        (C = M),
        (j = A);
    }
    if (P === y.length) return n(g, j), ue && er(g, P), N;
    if (j === null) {
      for (; P < y.length; P++)
        (j = f(g, y[P], S)),
          j !== null &&
            ((h = i(j, h, P)), C === null ? (N = j) : (C.sibling = j), (C = j));
      return ue && er(g, P), N;
    }
    for (j = r(g, j); P < y.length; P++)
      (A = p(j, g, P, y[P], S)),
        A !== null &&
          (e && A.alternate !== null && j.delete(A.key === null ? P : A.key),
          (h = i(A, h, P)),
          C === null ? (N = A) : (C.sibling = A),
          (C = A));
    return (
      e &&
        j.forEach(function ($) {
          return t(g, $);
        }),
      ue && er(g, P),
      N
    );
  }
  function x(g, h, y, S) {
    var N = Eo(y);
    if (typeof N != "function") throw Error(R(150));
    if (((y = N.call(y)), y == null)) throw Error(R(151));
    for (
      var C = (N = null), j = h, P = (h = 0), A = null, M = y.next();
      j !== null && !M.done;
      P++, M = y.next()
    ) {
      j.index > P ? ((A = j), (j = null)) : (A = j.sibling);
      var $ = m(g, j, M.value, S);
      if ($ === null) {
        j === null && (j = A);
        break;
      }
      e && j && $.alternate === null && t(g, j),
        (h = i($, h, P)),
        C === null ? (N = $) : (C.sibling = $),
        (C = $),
        (j = A);
    }
    if (M.done) return n(g, j), ue && er(g, P), N;
    if (j === null) {
      for (; !M.done; P++, M = y.next())
        (M = f(g, M.value, S)),
          M !== null &&
            ((h = i(M, h, P)), C === null ? (N = M) : (C.sibling = M), (C = M));
      return ue && er(g, P), N;
    }
    for (j = r(g, j); !M.done; P++, M = y.next())
      (M = p(j, g, P, M.value, S)),
        M !== null &&
          (e && M.alternate !== null && j.delete(M.key === null ? P : M.key),
          (h = i(M, h, P)),
          C === null ? (N = M) : (C.sibling = M),
          (C = M));
    return (
      e &&
        j.forEach(function (L) {
          return t(g, L);
        }),
      ue && er(g, P),
      N
    );
  }
  function w(g, h, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Ar &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Fi:
          e: {
            for (var N = y.key, C = h; C !== null; ) {
              if (C.key === N) {
                if (((N = y.type), N === Ar)) {
                  if (C.tag === 7) {
                    n(g, C.sibling),
                      (h = o(C, y.props.children)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                } else if (
                  C.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === bn &&
                    Ad(N) === C.type)
                ) {
                  n(g, C.sibling),
                    (h = o(C, y.props)),
                    (h.ref = Oo(g, C, y)),
                    (h.return = g),
                    (g = h);
                  break e;
                }
                n(g, C);
                break;
              } else t(g, C);
              C = C.sibling;
            }
            y.type === Ar
              ? ((h = fr(y.props.children, g.mode, S, y.key)),
                (h.return = g),
                (g = h))
              : ((S = ys(y.type, y.key, y.props, null, g.mode, S)),
                (S.ref = Oo(g, h, y)),
                (S.return = g),
                (g = S));
          }
          return s(g);
        case Mr:
          e: {
            for (C = y.key; h !== null; ) {
              if (h.key === C)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(g, h.sibling),
                    (h = o(h, y.children || [])),
                    (h.return = g),
                    (g = h);
                  break e;
                } else {
                  n(g, h);
                  break;
                }
              else t(g, h);
              h = h.sibling;
            }
            (h = il(y, g.mode, S)), (h.return = g), (g = h);
          }
          return s(g);
        case bn:
          return (C = y._init), w(g, h, C(y._payload), S);
      }
      if (Do(y)) return b(g, h, y, S);
      if (Eo(y)) return x(g, h, y, S);
      Xi(g, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        h !== null && h.tag === 6
          ? (n(g, h.sibling), (h = o(h, y)), (h.return = g), (g = h))
          : (n(g, h), (h = ol(y, g.mode, S)), (h.return = g), (g = h)),
        s(g))
      : n(g, h);
  }
  return w;
}
var co = fm(!0),
  pm = fm(!1),
  Is = Qn(null),
  _s = null,
  Ur = null,
  Kc = null;
function Yc() {
  Kc = Ur = _s = null;
}
function Xc(e) {
  var t = Is.current;
  le(Is), (e._currentValue = t);
}
function Wl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Kr(e, t) {
  (_s = e),
    (Kc = Ur = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xe = !0), (e.firstContext = null));
}
function mt(e) {
  var t = e._currentValue;
  if (Kc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ur === null)) {
      if (_s === null) throw Error(R(308));
      (Ur = e), (_s.dependencies = { lanes: 0, firstContext: e });
    } else Ur = Ur.next = e;
  return t;
}
var rr = null;
function qc(e) {
  rr === null ? (rr = [e]) : rr.push(e);
}
function mm(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), qc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    rn(e, r)
  );
}
function rn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Sn = !1;
function Zc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function hm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function en(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Dn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      rn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), qc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    rn(e, n)
  );
}
function ds(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Dc(e, n);
  }
}
function Id(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ls(e, t, n, r) {
  var o = e.updateQueue;
  Sn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var c = l,
      u = c.next;
    (c.next = null), s === null ? (i = u) : (s.next = u), (s = c);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== s &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = c)));
  }
  if (i !== null) {
    var f = o.baseState;
    (s = 0), (d = u = c = null), (l = i);
    do {
      var m = l.lane,
        p = l.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var b = e,
            x = l;
          switch (((m = t), (p = n), x.tag)) {
            case 1:
              if (((b = x.payload), typeof b == "function")) {
                f = b.call(p, f, m);
                break e;
              }
              f = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = x.payload),
                (m = typeof b == "function" ? b.call(p, f, m) : b),
                m == null)
              )
                break e;
              f = me({}, f, m);
              break e;
            case 2:
              Sn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [l]) : m.push(l));
      } else
        (p = {
          eventTime: p,
          lane: m,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = p), (c = f)) : (d = d.next = p),
          (s |= m);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (m = l),
          (l = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (c = f),
      (o.baseState = c),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (gr |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function _d(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(R(191, o));
        o.call(r);
      }
    }
}
var Ei = {},
  Bt = Qn(Ei),
  li = Qn(Ei),
  ci = Qn(Ei);
function or(e) {
  if (e === Ei) throw Error(R(174));
  return e;
}
function Jc(e, t) {
  switch ((ie(ci, t), ie(li, e), ie(Bt, Ei), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Cl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Cl(t, e));
  }
  le(Bt), ie(Bt, t);
}
function uo() {
  le(Bt), le(li), le(ci);
}
function gm(e) {
  or(ci.current);
  var t = or(Bt.current),
    n = Cl(t, e.type);
  t !== n && (ie(li, e), ie(Bt, n));
}
function eu(e) {
  li.current === e && (le(Bt), le(li));
}
var fe = Qn(0);
function Ds(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Za = [];
function tu() {
  for (var e = 0; e < Za.length; e++)
    Za[e]._workInProgressVersionPrimary = null;
  Za.length = 0;
}
var fs = un.ReactCurrentDispatcher,
  Ja = un.ReactCurrentBatchConfig,
  hr = 0,
  pe = null,
  Ce = null,
  ke = null,
  zs = !1,
  Go = !1,
  ui = 0,
  _x = 0;
function Ie() {
  throw Error(R(321));
}
function nu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Rt(e[n], t[n])) return !1;
  return !0;
}
function ru(e, t, n, r, o, i) {
  if (
    ((hr = i),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (fs.current = e === null || e.memoizedState === null ? Fx : $x),
    (e = n(r, o)),
    Go)
  ) {
    i = 0;
    do {
      if (((Go = !1), (ui = 0), 25 <= i)) throw Error(R(301));
      (i += 1),
        (ke = Ce = null),
        (t.updateQueue = null),
        (fs.current = Ux),
        (e = n(r, o));
    } while (Go);
  }
  if (
    ((fs.current = Fs),
    (t = Ce !== null && Ce.next !== null),
    (hr = 0),
    (ke = Ce = pe = null),
    (zs = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function ou() {
  var e = ui !== 0;
  return (ui = 0), e;
}
function _t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (pe.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function ht() {
  if (Ce === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ce.next;
  var t = ke === null ? pe.memoizedState : ke.next;
  if (t !== null) (ke = t), (Ce = e);
  else {
    if (e === null) throw Error(R(310));
    (Ce = e),
      (e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null,
      }),
      ke === null ? (pe.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function di(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function el(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = Ce,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      c = null,
      u = i;
    do {
      var d = u.lane;
      if ((hr & d) === d)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        c === null ? ((l = c = f), (s = r)) : (c = c.next = f),
          (pe.lanes |= d),
          (gr |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    c === null ? (s = r) : (c.next = l),
      Rt(r, t.memoizedState) || (Xe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = c),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (pe.lanes |= i), (gr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function tl(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Rt(i, t.memoizedState) || (Xe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ym() {}
function vm(e, t) {
  var n = pe,
    r = ht(),
    o = t(),
    i = !Rt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Xe = !0)),
    (r = r.queue),
    iu(bm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      fi(9, wm.bind(null, n, r, o, t), void 0, null),
      Pe === null)
    )
      throw Error(R(349));
    hr & 30 || xm(n, t, o);
  }
  return o;
}
function xm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function wm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Sm(t) && Nm(e);
}
function bm(e, t, n) {
  return n(function () {
    Sm(t) && Nm(e);
  });
}
function Sm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Rt(e, n);
  } catch {
    return !0;
  }
}
function Nm(e) {
  var t = rn(e, 1);
  t !== null && Tt(t, e, 1, -1);
}
function Ld(e) {
  var t = _t();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: di,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = zx.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function fi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Cm() {
  return ht().memoizedState;
}
function ps(e, t, n, r) {
  var o = _t();
  (pe.flags |= e),
    (o.memoizedState = fi(1 | t, n, void 0, r === void 0 ? null : r));
}
function aa(e, t, n, r) {
  var o = ht();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ce !== null) {
    var s = Ce.memoizedState;
    if (((i = s.destroy), r !== null && nu(r, s.deps))) {
      o.memoizedState = fi(t, n, i, r);
      return;
    }
  }
  (pe.flags |= e), (o.memoizedState = fi(1 | t, n, i, r));
}
function Dd(e, t) {
  return ps(8390656, 8, e, t);
}
function iu(e, t) {
  return aa(2048, 8, e, t);
}
function jm(e, t) {
  return aa(4, 2, e, t);
}
function Em(e, t) {
  return aa(4, 4, e, t);
}
function km(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Pm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), aa(4, 4, km.bind(null, t, e), n)
  );
}
function su() {}
function Tm(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && nu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Rm(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && nu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Om(e, t, n) {
  return hr & 21
    ? (Rt(n, t) || ((n = Lp()), (pe.lanes |= n), (gr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
}
function Lx(e, t) {
  var n = ne;
  (ne = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ja.transition;
  Ja.transition = {};
  try {
    e(!1), t();
  } finally {
    (ne = n), (Ja.transition = r);
  }
}
function Mm() {
  return ht().memoizedState;
}
function Dx(e, t, n) {
  var r = Fn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Am(e))
  )
    Im(t, n);
  else if (((n = mm(e, t, n, r)), n !== null)) {
    var o = He();
    Tt(n, e, r, o), _m(n, t, r);
  }
}
function zx(e, t, n) {
  var r = Fn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Am(e)) Im(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Rt(l, s))) {
          var c = t.interleaved;
          c === null
            ? ((o.next = o), qc(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = mm(e, t, o, r)),
      n !== null && ((o = He()), Tt(n, e, r, o), _m(n, t, r));
  }
}
function Am(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function Im(e, t) {
  Go = zs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function _m(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Dc(e, n);
  }
}
var Fs = {
    readContext: mt,
    useCallback: Ie,
    useContext: Ie,
    useEffect: Ie,
    useImperativeHandle: Ie,
    useInsertionEffect: Ie,
    useLayoutEffect: Ie,
    useMemo: Ie,
    useReducer: Ie,
    useRef: Ie,
    useState: Ie,
    useDebugValue: Ie,
    useDeferredValue: Ie,
    useTransition: Ie,
    useMutableSource: Ie,
    useSyncExternalStore: Ie,
    useId: Ie,
    unstable_isNewReconciler: !1,
  },
  Fx = {
    readContext: mt,
    useCallback: function (e, t) {
      return (_t().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: mt,
    useEffect: Dd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ps(4194308, 4, km.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ps(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ps(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = _t();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = _t();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Dx.bind(null, pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = _t();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ld,
    useDebugValue: su,
    useDeferredValue: function (e) {
      return (_t().memoizedState = e);
    },
    useTransition: function () {
      var e = Ld(!1),
        t = e[0];
      return (e = Lx.bind(null, e[1])), (_t().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = pe,
        o = _t();
      if (ue) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Pe === null)) throw Error(R(349));
        hr & 30 || xm(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Dd(bm.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        fi(9, wm.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = _t(),
        t = Pe.identifierPrefix;
      if (ue) {
        var n = Jt,
          r = Zt;
        (n = (r & ~(1 << (32 - Pt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ui++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = _x++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  $x = {
    readContext: mt,
    useCallback: Tm,
    useContext: mt,
    useEffect: iu,
    useImperativeHandle: Pm,
    useInsertionEffect: jm,
    useLayoutEffect: Em,
    useMemo: Rm,
    useReducer: el,
    useRef: Cm,
    useState: function () {
      return el(di);
    },
    useDebugValue: su,
    useDeferredValue: function (e) {
      var t = ht();
      return Om(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = el(di)[0],
        t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: ym,
    useSyncExternalStore: vm,
    useId: Mm,
    unstable_isNewReconciler: !1,
  },
  Ux = {
    readContext: mt,
    useCallback: Tm,
    useContext: mt,
    useEffect: iu,
    useImperativeHandle: Pm,
    useInsertionEffect: jm,
    useLayoutEffect: Em,
    useMemo: Rm,
    useReducer: tl,
    useRef: Cm,
    useState: function () {
      return tl(di);
    },
    useDebugValue: su,
    useDeferredValue: function (e) {
      var t = ht();
      return Ce === null ? (t.memoizedState = e) : Om(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = tl(di)[0],
        t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: ym,
    useSyncExternalStore: vm,
    useId: Mm,
    unstable_isNewReconciler: !1,
  };
function St(e, t) {
  if (e && e.defaultProps) {
    (t = me({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Hl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var la = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? br(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      o = Fn(e),
      i = en(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Dn(e, i, o)),
      t !== null && (Tt(t, e, o, r), ds(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      o = Fn(e),
      i = en(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Dn(e, i, o)),
      t !== null && (Tt(t, e, o, r), ds(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = He(),
      r = Fn(e),
      o = en(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Dn(e, o, r)),
      t !== null && (Tt(t, e, r, n), ds(t, e, r));
  },
};
function zd(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !oi(n, r) || !oi(o, i)
      : !0
  );
}
function Lm(e, t, n) {
  var r = !1,
    o = Vn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = mt(i))
      : ((o = Ze(t) ? pr : ze.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? ao(e, o) : Vn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = la),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Fd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && la.enqueueReplaceState(t, t.state, null);
}
function Gl(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Zc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = mt(i))
    : ((i = Ze(t) ? pr : ze.current), (o.context = ao(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Hl(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && la.enqueueReplaceState(o, o.state, null),
      Ls(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function fo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += hv(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function nl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ql(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Bx = typeof WeakMap == "function" ? WeakMap : Map;
function Dm(e, t, n) {
  (n = en(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Us || ((Us = !0), (rc = r)), Ql(e, t);
    }),
    n
  );
}
function zm(e, t, n) {
  (n = en(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ql(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ql(e, t),
          typeof r != "function" &&
            (zn === null ? (zn = new Set([this])) : zn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function $d(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Bx();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = n0.bind(null, e, t, n)), t.then(e, e));
}
function Ud(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = en(-1, 1)), (t.tag = 2), Dn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Vx = un.ReactCurrentOwner,
  Xe = !1;
function $e(e, t, n, r) {
  t.child = e === null ? pm(t, null, n, r) : co(t, e.child, n, r);
}
function Vd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Kr(t, o),
    (r = ru(e, t, n, r, i, o)),
    (n = ou()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        on(e, t, o))
      : (ue && n && Hc(t), (t.flags |= 1), $e(e, t, r, o), t.child)
  );
}
function Wd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !mu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Fm(e, t, i, r, o))
      : ((e = ys(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : oi), n(s, r) && e.ref === t.ref)
    )
      return on(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = $n(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Fm(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (oi(i, r) && e.ref === t.ref)
      if (((Xe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Xe = !0);
      else return (t.lanes = e.lanes), on(e, t, o);
  }
  return Kl(e, t, n, r, o);
}
function $m(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ie(Vr, et),
        (et |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ie(Vr, et),
          (et |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ie(Vr, et),
        (et |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ie(Vr, et),
      (et |= r);
  return $e(e, t, o, n), t.child;
}
function Um(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Kl(e, t, n, r, o) {
  var i = Ze(n) ? pr : ze.current;
  return (
    (i = ao(t, i)),
    Kr(t, o),
    (n = ru(e, t, n, r, i, o)),
    (r = ou()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        on(e, t, o))
      : (ue && r && Hc(t), (t.flags |= 1), $e(e, t, n, o), t.child)
  );
}
function Hd(e, t, n, r, o) {
  if (Ze(n)) {
    var i = !0;
    Os(t);
  } else i = !1;
  if ((Kr(t, o), t.stateNode === null))
    ms(e, t), Lm(t, n, r), Gl(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var c = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = mt(u))
      : ((u = Ze(n) ? pr : ze.current), (u = ao(t, u)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || c !== u) && Fd(t, s, r, u)),
      (Sn = !1);
    var m = t.memoizedState;
    (s.state = m),
      Ls(t, r, s, o),
      (c = t.memoizedState),
      l !== r || m !== c || qe.current || Sn
        ? (typeof d == "function" && (Hl(t, n, d, r), (c = t.memoizedState)),
          (l = Sn || zd(t, n, l, r, m, c, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (s.props = r),
          (s.state = c),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      hm(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : St(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (m = s.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = mt(c))
        : ((c = Ze(n) ? pr : ze.current), (c = ao(t, c)));
    var p = n.getDerivedStateFromProps;
    (d =
      typeof p == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || m !== c) && Fd(t, s, r, c)),
      (Sn = !1),
      (m = t.memoizedState),
      (s.state = m),
      Ls(t, r, s, o);
    var b = t.memoizedState;
    l !== f || m !== b || qe.current || Sn
      ? (typeof p == "function" && (Hl(t, n, p, r), (b = t.memoizedState)),
        (u = Sn || zd(t, n, u, r, m, b, c) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, b, c),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, b, c)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = b)),
        (s.props = r),
        (s.state = b),
        (s.context = c),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Yl(e, t, n, r, i, o);
}
function Yl(e, t, n, r, o, i) {
  Um(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Rd(t, n, !1), on(e, t, i);
  (r = t.stateNode), (Vx.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = co(t, e.child, null, i)), (t.child = co(t, null, l, i)))
      : $e(e, t, l, i),
    (t.memoizedState = r.state),
    o && Rd(t, n, !0),
    t.child
  );
}
function Bm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Td(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Td(e, t.context, !1),
    Jc(e, t.containerInfo);
}
function Gd(e, t, n, r, o) {
  return lo(), Qc(o), (t.flags |= 256), $e(e, t, n, r), t.child;
}
var Xl = { dehydrated: null, treeContext: null, retryLane: 0 };
function ql(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vm(e, t, n) {
  var r = t.pendingProps,
    o = fe.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ie(fe, o & 1),
    e === null)
  )
    return (
      Vl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = da(s, r, 0, null)),
              (e = fr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ql(n)),
              (t.memoizedState = Xl),
              e)
            : au(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Wx(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var c = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = $n(o, c)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = $n(l, i)) : ((i = fr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ql(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xl),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = $n(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function au(e, t) {
  return (
    (t = da({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function qi(e, t, n, r) {
  return (
    r !== null && Qc(r),
    co(t, e.child, null, n),
    (e = au(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Wx(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = nl(Error(R(422)))), qi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = da({ mode: "visible", children: r.children }, o, 0, null)),
        (i = fr(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && co(t, e.child, null, s),
        (t.child.memoizedState = ql(s)),
        (t.memoizedState = Xl),
        i);
  if (!(t.mode & 1)) return qi(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(R(419))), (r = nl(i, r, void 0)), qi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Xe || l)) {
    if (((r = Pe), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), rn(e, o), Tt(r, e, o, -1));
    }
    return pu(), (r = nl(Error(R(421)))), qi(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = r0.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (nt = Ln(o.nextSibling)),
      (rt = t),
      (ue = !0),
      (kt = null),
      e !== null &&
        ((ut[dt++] = Zt),
        (ut[dt++] = Jt),
        (ut[dt++] = mr),
        (Zt = e.id),
        (Jt = e.overflow),
        (mr = t)),
      (t = au(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Qd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Wl(e.return, t, n);
}
function rl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Wm(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if (($e(e, t, r.children, n), (r = fe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Qd(e, n, t);
        else if (e.tag === 19) Qd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ie(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ds(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          rl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ds(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        rl(t, !0, n, null, i);
        break;
      case "together":
        rl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ms(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function on(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (gr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = $n(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = $n(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Hx(e, t, n) {
  switch (t.tag) {
    case 3:
      Bm(t), lo();
      break;
    case 5:
      gm(t);
      break;
    case 1:
      Ze(t.type) && Os(t);
      break;
    case 4:
      Jc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ie(Is, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ie(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Vm(e, t, n)
          : (ie(fe, fe.current & 1),
            (e = on(e, t, n)),
            e !== null ? e.sibling : null);
      ie(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Wm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ie(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), $m(e, t, n);
  }
  return on(e, t, n);
}
var Hm, Zl, Gm, Qm;
Hm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Zl = function () {};
Gm = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), or(Bt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = wl(e, o)), (r = wl(e, r)), (i = []);
        break;
      case "select":
        (o = me({}, o, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Nl(e, o)), (r = Nl(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ts);
    }
    jl(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (qo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && c !== l && (c != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (c && c.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in c)
              c.hasOwnProperty(s) &&
                l[s] !== c[s] &&
                (n || (n = {}), (n[s] = c[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = c);
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (l = l ? l.__html : void 0),
              c != null && l !== c && (i = i || []).push(u, c))
            : u === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (i = i || []).push(u, "" + c)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (qo.hasOwnProperty(u)
                ? (c != null && u === "onScroll" && ae("scroll", e),
                  i || l === c || (i = []))
                : (i = i || []).push(u, c));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Qm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Mo(e, t) {
  if (!ue)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function _e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Gx(e, t, n) {
  var r = t.pendingProps;
  switch ((Gc(t), t.tag)) {
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
      return _e(t), null;
    case 1:
      return Ze(t.type) && Rs(), _e(t), null;
    case 3:
      return (
        (r = t.stateNode),
        uo(),
        le(qe),
        le(ze),
        tu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Yi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), kt !== null && (sc(kt), (kt = null)))),
        Zl(e, t),
        _e(t),
        null
      );
    case 5:
      eu(t);
      var o = or(ci.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Gm(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return _e(t), null;
        }
        if (((e = or(Bt.current)), Yi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ft] = t), (r[ai] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ae("cancel", r), ae("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ae("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Fo.length; o++) ae(Fo[o], r);
              break;
            case "source":
              ae("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ae("error", r), ae("load", r);
              break;
            case "details":
              ae("toggle", r);
              break;
            case "input":
              nd(r, i), ae("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ae("invalid", r);
              break;
            case "textarea":
              od(r, i), ae("invalid", r);
          }
          jl(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ki(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ki(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : qo.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  ae("scroll", r);
            }
          switch (n) {
            case "input":
              $i(r), rd(r, i, !0);
              break;
            case "textarea":
              $i(r), id(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ts);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = bp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Ft] = t),
            (e[ai] = r),
            Hm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = El(n, r)), n)) {
              case "dialog":
                ae("cancel", e), ae("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ae("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Fo.length; o++) ae(Fo[o], e);
                o = r;
                break;
              case "source":
                ae("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ae("error", e), ae("load", e), (o = r);
                break;
              case "details":
                ae("toggle", e), (o = r);
                break;
              case "input":
                nd(e, r), (o = wl(e, r)), ae("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = me({}, r, { value: void 0 })),
                  ae("invalid", e);
                break;
              case "textarea":
                od(e, r), (o = Nl(e, r)), ae("invalid", e);
                break;
              default:
                o = r;
            }
            jl(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var c = l[i];
                i === "style"
                  ? Cp(e, c)
                  : i === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && Sp(e, c))
                  : i === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && Zo(e, c)
                    : typeof c == "number" && Zo(e, "" + c)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (qo.hasOwnProperty(i)
                      ? c != null && i === "onScroll" && ae("scroll", e)
                      : c != null && Oc(e, i, c, s));
              }
            switch (n) {
              case "input":
                $i(e), rd(e, r, !1);
                break;
              case "textarea":
                $i(e), id(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Bn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Wr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Wr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ts);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return _e(t), null;
    case 6:
      if (e && t.stateNode != null) Qm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = or(ci.current)), or(Bt.current), Yi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ft] = t),
            (i = r.nodeValue !== n) && ((e = rt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ki(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ki(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ft] = t),
            (t.stateNode = r);
      }
      return _e(t), null;
    case 13:
      if (
        (le(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ue && nt !== null && t.mode & 1 && !(t.flags & 128))
          dm(), lo(), (t.flags |= 98560), (i = !1);
        else if (((i = Yi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(R(317));
            i[Ft] = t;
          } else
            lo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          _e(t), (i = !1);
        } else kt !== null && (sc(kt), (kt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? je === 0 && (je = 3) : pu())),
          t.updateQueue !== null && (t.flags |= 4),
          _e(t),
          null);
    case 4:
      return (
        uo(), Zl(e, t), e === null && ii(t.stateNode.containerInfo), _e(t), null
      );
    case 10:
      return Xc(t.type._context), _e(t), null;
    case 17:
      return Ze(t.type) && Rs(), _e(t), null;
    case 19:
      if ((le(fe), (i = t.memoizedState), i === null)) return _e(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Mo(i, !1);
        else {
          if (je !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ds(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Mo(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ie(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ye() > po &&
            ((t.flags |= 128), (r = !0), Mo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ds(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Mo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ue)
            )
              return _e(t), null;
          } else
            2 * ye() - i.renderingStartTime > po &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Mo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ye()),
          (t.sibling = null),
          (n = fe.current),
          ie(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (_e(t), null);
    case 22:
    case 23:
      return (
        fu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? et & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : _e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Qx(e, t) {
  switch ((Gc(t), t.tag)) {
    case 1:
      return (
        Ze(t.type) && Rs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        uo(),
        le(qe),
        le(ze),
        tu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return eu(t), null;
    case 13:
      if (
        (le(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        lo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return le(fe), null;
    case 4:
      return uo(), null;
    case 10:
      return Xc(t.type._context), null;
    case 22:
    case 23:
      return fu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Zi = !1,
  De = !1,
  Kx = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function Br(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ge(e, t, r);
      }
    else n.current = null;
}
function Jl(e, t, n) {
  try {
    n();
  } catch (r) {
    ge(e, t, r);
  }
}
var Kd = !1;
function Yx(e, t) {
  if (((Ll = Es), (e = Zp()), Wc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            c = -1,
            u = 0,
            d = 0,
            f = e,
            m = null;
          t: for (;;) {
            for (
              var p;
              f !== n || (o !== 0 && f.nodeType !== 3) || (l = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (c = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (p = f.firstChild) !== null;

            )
              (m = f), (f = p);
            for (;;) {
              if (f === e) break t;
              if (
                (m === n && ++u === o && (l = s),
                m === i && ++d === r && (c = s),
                (p = f.nextSibling) !== null)
              )
                break;
              (f = m), (m = f.parentNode);
            }
            f = p;
          }
          n = l === -1 || c === -1 ? null : { start: l, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Dl = { focusedElem: e, selectionRange: n }, Es = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var x = b.memoizedProps,
                    w = b.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : St(t.type, x),
                      w
                    );
                  g.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (S) {
          ge(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (b = Kd), (Kd = !1), b;
}
function Qo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Jl(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ca(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ec(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Km(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Km(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ft], delete t[ai], delete t[$l], delete t[Ox], delete t[Mx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ym(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Yd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ym(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function tc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ts));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (tc(e, t, n), e = e.sibling; e !== null; ) tc(e, t, n), (e = e.sibling);
}
function nc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (nc(e, t, n), e = e.sibling; e !== null; ) nc(e, t, n), (e = e.sibling);
}
var Te = null,
  Et = !1;
function yn(e, t, n) {
  for (n = n.child; n !== null; ) Xm(e, t, n), (n = n.sibling);
}
function Xm(e, t, n) {
  if (Ut && typeof Ut.onCommitFiberUnmount == "function")
    try {
      Ut.onCommitFiberUnmount(ta, n);
    } catch {}
  switch (n.tag) {
    case 5:
      De || Br(n, t);
    case 6:
      var r = Te,
        o = Et;
      (Te = null),
        yn(e, t, n),
        (Te = r),
        (Et = o),
        Te !== null &&
          (Et
            ? ((e = Te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Te.removeChild(n.stateNode));
      break;
    case 18:
      Te !== null &&
        (Et
          ? ((e = Te),
            (n = n.stateNode),
            e.nodeType === 8
              ? Xa(e.parentNode, n)
              : e.nodeType === 1 && Xa(e, n),
            ni(e))
          : Xa(Te, n.stateNode));
      break;
    case 4:
      (r = Te),
        (o = Et),
        (Te = n.stateNode.containerInfo),
        (Et = !0),
        yn(e, t, n),
        (Te = r),
        (Et = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !De &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Jl(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      yn(e, t, n);
      break;
    case 1:
      if (
        !De &&
        (Br(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ge(n, t, l);
        }
      yn(e, t, n);
      break;
    case 21:
      yn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((De = (r = De) || n.memoizedState !== null), yn(e, t, n), (De = r))
        : yn(e, t, n);
      break;
    default:
      yn(e, t, n);
  }
}
function Xd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Kx()),
      t.forEach(function (r) {
        var o = o0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function wt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Te = l.stateNode), (Et = !1);
              break e;
            case 3:
              (Te = l.stateNode.containerInfo), (Et = !0);
              break e;
            case 4:
              (Te = l.stateNode.containerInfo), (Et = !0);
              break e;
          }
          l = l.return;
        }
        if (Te === null) throw Error(R(160));
        Xm(i, s, o), (Te = null), (Et = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (u) {
        ge(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) qm(t, e), (t = t.sibling);
}
function qm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((wt(t, e), At(e), r & 4)) {
        try {
          Qo(3, e, e.return), ca(3, e);
        } catch (x) {
          ge(e, e.return, x);
        }
        try {
          Qo(5, e, e.return);
        } catch (x) {
          ge(e, e.return, x);
        }
      }
      break;
    case 1:
      wt(t, e), At(e), r & 512 && n !== null && Br(n, n.return);
      break;
    case 5:
      if (
        (wt(t, e),
        At(e),
        r & 512 && n !== null && Br(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Zo(o, "");
        } catch (x) {
          ge(e, e.return, x);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && xp(o, i),
              El(l, s);
            var u = El(l, i);
            for (s = 0; s < c.length; s += 2) {
              var d = c[s],
                f = c[s + 1];
              d === "style"
                ? Cp(o, f)
                : d === "dangerouslySetInnerHTML"
                ? Sp(o, f)
                : d === "children"
                ? Zo(o, f)
                : Oc(o, d, f, u);
            }
            switch (l) {
              case "input":
                bl(o, i);
                break;
              case "textarea":
                wp(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? Wr(o, !!i.multiple, p, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Wr(o, !!i.multiple, i.defaultValue, !0)
                      : Wr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ai] = i;
          } catch (x) {
            ge(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((wt(t, e), At(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (x) {
          ge(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (wt(t, e), At(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ni(t.containerInfo);
        } catch (x) {
          ge(e, e.return, x);
        }
      break;
    case 4:
      wt(t, e), At(e);
      break;
    case 13:
      wt(t, e),
        At(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (uu = ye())),
        r & 4 && Xd(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((De = (u = De) || d), wt(t, e), (De = u)) : wt(t, e),
        At(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (D = e, d = e.child; d !== null; ) {
            for (f = D = d; D !== null; ) {
              switch (((m = D), (p = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qo(4, m, m.return);
                  break;
                case 1:
                  Br(m, m.return);
                  var b = m.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount();
                    } catch (x) {
                      ge(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Br(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Zd(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = m), (D = p)) : Zd(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = f.stateNode),
                      (c = f.memoizedProps.style),
                      (s =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (l.style.display = Np("display", s)));
              } catch (x) {
                ge(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (x) {
                ge(e, e.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      wt(t, e), At(e), r & 4 && Xd(e);
      break;
    case 21:
      break;
    default:
      wt(t, e), At(e);
  }
}
function At(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ym(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Zo(o, ""), (r.flags &= -33));
          var i = Yd(e);
          nc(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Yd(e);
          tc(e, l, s);
          break;
        default:
          throw Error(R(161));
      }
    } catch (c) {
      ge(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Xx(e, t, n) {
  (D = e), Zm(e);
}
function Zm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var o = D,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Zi;
      if (!s) {
        var l = o.alternate,
          c = (l !== null && l.memoizedState !== null) || De;
        l = Zi;
        var u = De;
        if (((Zi = s), (De = c) && !u))
          for (D = o; D !== null; )
            (s = D),
              (c = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Jd(o)
                : c !== null
                ? ((c.return = s), (D = c))
                : Jd(o);
        for (; i !== null; ) (D = i), Zm(i), (i = i.sibling);
        (D = o), (Zi = l), (De = u);
      }
      qd(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (D = i)) : qd(e);
  }
}
function qd(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              De || ca(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !De)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : St(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && _d(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                _d(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && ni(f);
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
              throw Error(R(163));
          }
        De || (t.flags & 512 && ec(t));
      } catch (m) {
        ge(t, t.return, m);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function Zd(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function Jd(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ca(4, t);
          } catch (c) {
            ge(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              ge(t, o, c);
            }
          }
          var i = t.return;
          try {
            ec(t);
          } catch (c) {
            ge(t, i, c);
          }
          break;
        case 5:
          var s = t.return;
          try {
            ec(t);
          } catch (c) {
            ge(t, s, c);
          }
      }
    } catch (c) {
      ge(t, t.return, c);
    }
    if (t === e) {
      D = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (D = l);
      break;
    }
    D = t.return;
  }
}
var qx = Math.ceil,
  $s = un.ReactCurrentDispatcher,
  lu = un.ReactCurrentOwner,
  pt = un.ReactCurrentBatchConfig,
  Z = 0,
  Pe = null,
  be = null,
  Re = 0,
  et = 0,
  Vr = Qn(0),
  je = 0,
  pi = null,
  gr = 0,
  ua = 0,
  cu = 0,
  Ko = null,
  Ye = null,
  uu = 0,
  po = 1 / 0,
  Yt = null,
  Us = !1,
  rc = null,
  zn = null,
  Ji = !1,
  On = null,
  Bs = 0,
  Yo = 0,
  oc = null,
  hs = -1,
  gs = 0;
function He() {
  return Z & 6 ? ye() : hs !== -1 ? hs : (hs = ye());
}
function Fn(e) {
  return e.mode & 1
    ? Z & 2 && Re !== 0
      ? Re & -Re
      : Ix.transition !== null
      ? (gs === 0 && (gs = Lp()), gs)
      : ((e = ne),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vp(e.type))),
        e)
    : 1;
}
function Tt(e, t, n, r) {
  if (50 < Yo) throw ((Yo = 0), (oc = null), Error(R(185)));
  Ni(e, n, r),
    (!(Z & 2) || e !== Pe) &&
      (e === Pe && (!(Z & 2) && (ua |= n), je === 4 && Cn(e, Re)),
      Je(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((po = ye() + 500), sa && Kn()));
}
function Je(e, t) {
  var n = e.callbackNode;
  Iv(e, t);
  var r = js(e, e === Pe ? Re : 0);
  if (r === 0)
    n !== null && ld(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ld(n), t === 1))
      e.tag === 0 ? Ax(ef.bind(null, e)) : lm(ef.bind(null, e)),
        Tx(function () {
          !(Z & 6) && Kn();
        }),
        (n = null);
    else {
      switch (Dp(r)) {
        case 1:
          n = Lc;
          break;
        case 4:
          n = Ip;
          break;
        case 16:
          n = Cs;
          break;
        case 536870912:
          n = _p;
          break;
        default:
          n = Cs;
      }
      n = sh(n, Jm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Jm(e, t) {
  if (((hs = -1), (gs = 0), Z & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (Yr() && e.callbackNode !== n) return null;
  var r = js(e, e === Pe ? Re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Vs(e, r);
  else {
    t = r;
    var o = Z;
    Z |= 2;
    var i = th();
    (Pe !== e || Re !== t) && ((Yt = null), (po = ye() + 500), dr(e, t));
    do
      try {
        e0();
        break;
      } catch (l) {
        eh(e, l);
      }
    while (!0);
    Yc(),
      ($s.current = i),
      (Z = o),
      be !== null ? (t = 0) : ((Pe = null), (Re = 0), (t = je));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ol(e)), o !== 0 && ((r = o), (t = ic(e, o)))), t === 1)
    )
      throw ((n = pi), dr(e, 0), Cn(e, r), Je(e, ye()), n);
    if (t === 6) Cn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Zx(o) &&
          ((t = Vs(e, r)),
          t === 2 && ((i = Ol(e)), i !== 0 && ((r = i), (t = ic(e, i)))),
          t === 1))
      )
        throw ((n = pi), dr(e, 0), Cn(e, r), Je(e, ye()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          tr(e, Ye, Yt);
          break;
        case 3:
          if (
            (Cn(e, r), (r & 130023424) === r && ((t = uu + 500 - ye()), 10 < t))
          ) {
            if (js(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              He(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Fl(tr.bind(null, e, Ye, Yt), t);
            break;
          }
          tr(e, Ye, Yt);
          break;
        case 4:
          if ((Cn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Pt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ye() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * qx(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Fl(tr.bind(null, e, Ye, Yt), r);
            break;
          }
          tr(e, Ye, Yt);
          break;
        case 5:
          tr(e, Ye, Yt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Je(e, ye()), e.callbackNode === n ? Jm.bind(null, e) : null;
}
function ic(e, t) {
  var n = Ko;
  return (
    e.current.memoizedState.isDehydrated && (dr(e, t).flags |= 256),
    (e = Vs(e, t)),
    e !== 2 && ((t = Ye), (Ye = n), t !== null && sc(t)),
    e
  );
}
function sc(e) {
  Ye === null ? (Ye = e) : Ye.push.apply(Ye, e);
}
function Zx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Rt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Cn(e, t) {
  for (
    t &= ~cu,
      t &= ~ua,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Pt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ef(e) {
  if (Z & 6) throw Error(R(327));
  Yr();
  var t = js(e, 0);
  if (!(t & 1)) return Je(e, ye()), null;
  var n = Vs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ol(e);
    r !== 0 && ((t = r), (n = ic(e, r)));
  }
  if (n === 1) throw ((n = pi), dr(e, 0), Cn(e, t), Je(e, ye()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    tr(e, Ye, Yt),
    Je(e, ye()),
    null
  );
}
function du(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = n), Z === 0 && ((po = ye() + 500), sa && Kn());
  }
}
function yr(e) {
  On !== null && On.tag === 0 && !(Z & 6) && Yr();
  var t = Z;
  Z |= 1;
  var n = pt.transition,
    r = ne;
  try {
    if (((pt.transition = null), (ne = 1), e)) return e();
  } finally {
    (ne = r), (pt.transition = n), (Z = t), !(Z & 6) && Kn();
  }
}
function fu() {
  (et = Vr.current), le(Vr);
}
function dr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Px(n)), be !== null))
    for (n = be.return; n !== null; ) {
      var r = n;
      switch ((Gc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Rs();
          break;
        case 3:
          uo(), le(qe), le(ze), tu();
          break;
        case 5:
          eu(r);
          break;
        case 4:
          uo();
          break;
        case 13:
          le(fe);
          break;
        case 19:
          le(fe);
          break;
        case 10:
          Xc(r.type._context);
          break;
        case 22:
        case 23:
          fu();
      }
      n = n.return;
    }
  if (
    ((Pe = e),
    (be = e = $n(e.current, null)),
    (Re = et = t),
    (je = 0),
    (pi = null),
    (cu = ua = gr = 0),
    (Ye = Ko = null),
    rr !== null)
  ) {
    for (t = 0; t < rr.length; t++)
      if (((n = rr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    rr = null;
  }
  return e;
}
function eh(e, t) {
  do {
    var n = be;
    try {
      if ((Yc(), (fs.current = Fs), zs)) {
        for (var r = pe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        zs = !1;
      }
      if (
        ((hr = 0),
        (ke = Ce = pe = null),
        (Go = !1),
        (ui = 0),
        (lu.current = null),
        n === null || n.return === null)
      ) {
        (je = 1), (pi = t), (be = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          c = t;
        if (
          ((t = Re),
          (l.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            d = l,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var p = Ud(s);
          if (p !== null) {
            (p.flags &= -257),
              Bd(p, s, l, i, t),
              p.mode & 1 && $d(i, u, t),
              (t = p),
              (c = u);
            var b = t.updateQueue;
            if (b === null) {
              var x = new Set();
              x.add(c), (t.updateQueue = x);
            } else b.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              $d(i, u, t), pu();
              break e;
            }
            c = Error(R(426));
          }
        } else if (ue && l.mode & 1) {
          var w = Ud(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Bd(w, s, l, i, t),
              Qc(fo(c, l));
            break e;
          }
        }
        (i = c = fo(c, l)),
          je !== 4 && (je = 2),
          Ko === null ? (Ko = [i]) : Ko.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = Dm(i, c, t);
              Id(i, g);
              break e;
            case 1:
              l = c;
              var h = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (zn === null || !zn.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = zm(i, l, t);
                Id(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      rh(n);
    } catch (N) {
      (t = N), be === n && n !== null && (be = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function th() {
  var e = $s.current;
  return ($s.current = Fs), e === null ? Fs : e;
}
function pu() {
  (je === 0 || je === 3 || je === 2) && (je = 4),
    Pe === null || (!(gr & 268435455) && !(ua & 268435455)) || Cn(Pe, Re);
}
function Vs(e, t) {
  var n = Z;
  Z |= 2;
  var r = th();
  (Pe !== e || Re !== t) && ((Yt = null), dr(e, t));
  do
    try {
      Jx();
      break;
    } catch (o) {
      eh(e, o);
    }
  while (!0);
  if ((Yc(), (Z = n), ($s.current = r), be !== null)) throw Error(R(261));
  return (Pe = null), (Re = 0), je;
}
function Jx() {
  for (; be !== null; ) nh(be);
}
function e0() {
  for (; be !== null && !jv(); ) nh(be);
}
function nh(e) {
  var t = ih(e.alternate, e, et);
  (e.memoizedProps = e.pendingProps),
    t === null ? rh(e) : (be = t),
    (lu.current = null);
}
function rh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Qx(n, t)), n !== null)) {
        (n.flags &= 32767), (be = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (je = 6), (be = null);
        return;
      }
    } else if (((n = Gx(n, t, et)), n !== null)) {
      be = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  je === 0 && (je = 5);
}
function tr(e, t, n) {
  var r = ne,
    o = pt.transition;
  try {
    (pt.transition = null), (ne = 1), t0(e, t, n, r);
  } finally {
    (pt.transition = o), (ne = r);
  }
  return null;
}
function t0(e, t, n, r) {
  do Yr();
  while (On !== null);
  if (Z & 6) throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (_v(e, i),
    e === Pe && ((be = Pe = null), (Re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ji ||
      ((Ji = !0),
      sh(Cs, function () {
        return Yr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = pt.transition), (pt.transition = null);
    var s = ne;
    ne = 1;
    var l = Z;
    (Z |= 4),
      (lu.current = null),
      Yx(e, n),
      qm(n, e),
      bx(Dl),
      (Es = !!Ll),
      (Dl = Ll = null),
      (e.current = n),
      Xx(n),
      Ev(),
      (Z = l),
      (ne = s),
      (pt.transition = i);
  } else e.current = n;
  if (
    (Ji && ((Ji = !1), (On = e), (Bs = o)),
    (i = e.pendingLanes),
    i === 0 && (zn = null),
    Tv(n.stateNode),
    Je(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Us) throw ((Us = !1), (e = rc), (rc = null), e);
  return (
    Bs & 1 && e.tag !== 0 && Yr(),
    (i = e.pendingLanes),
    i & 1 ? (e === oc ? Yo++ : ((Yo = 0), (oc = e))) : (Yo = 0),
    Kn(),
    null
  );
}
function Yr() {
  if (On !== null) {
    var e = Dp(Bs),
      t = pt.transition,
      n = ne;
    try {
      if (((pt.transition = null), (ne = 16 > e ? 16 : e), On === null))
        var r = !1;
      else {
        if (((e = On), (On = null), (Bs = 0), Z & 6)) throw Error(R(331));
        var o = Z;
        for (Z |= 4, D = e.current; D !== null; ) {
          var i = D,
            s = i.child;
          if (D.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var c = 0; c < l.length; c++) {
                var u = l[c];
                for (D = u; D !== null; ) {
                  var d = D;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qo(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (D = f);
                  else
                    for (; D !== null; ) {
                      d = D;
                      var m = d.sibling,
                        p = d.return;
                      if ((Km(d), d === u)) {
                        D = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = p), (D = m);
                        break;
                      }
                      D = p;
                    }
                }
              }
              var b = i.alternate;
              if (b !== null) {
                var x = b.child;
                if (x !== null) {
                  b.child = null;
                  do {
                    var w = x.sibling;
                    (x.sibling = null), (x = w);
                  } while (x !== null);
                }
              }
              D = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (D = s);
          else
            e: for (; D !== null; ) {
              if (((i = D), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qo(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (D = g);
                break e;
              }
              D = i.return;
            }
        }
        var h = e.current;
        for (D = h; D !== null; ) {
          s = D;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (D = y);
          else
            e: for (s = h; D !== null; ) {
              if (((l = D), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ca(9, l);
                  }
                } catch (N) {
                  ge(l, l.return, N);
                }
              if (l === s) {
                D = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (D = S);
                break e;
              }
              D = l.return;
            }
        }
        if (
          ((Z = o), Kn(), Ut && typeof Ut.onPostCommitFiberRoot == "function")
        )
          try {
            Ut.onPostCommitFiberRoot(ta, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ne = n), (pt.transition = t);
    }
  }
  return !1;
}
function tf(e, t, n) {
  (t = fo(n, t)),
    (t = Dm(e, t, 1)),
    (e = Dn(e, t, 1)),
    (t = He()),
    e !== null && (Ni(e, 1, t), Je(e, t));
}
function ge(e, t, n) {
  if (e.tag === 3) tf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        tf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (zn === null || !zn.has(r)))
        ) {
          (e = fo(n, e)),
            (e = zm(t, e, 1)),
            (t = Dn(t, e, 1)),
            (e = He()),
            t !== null && (Ni(t, 1, e), Je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function n0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = He()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Pe === e &&
      (Re & n) === n &&
      (je === 4 || (je === 3 && (Re & 130023424) === Re && 500 > ye() - uu)
        ? dr(e, 0)
        : (cu |= n)),
    Je(e, t);
}
function oh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Vi), (Vi <<= 1), !(Vi & 130023424) && (Vi = 4194304))
      : (t = 1));
  var n = He();
  (e = rn(e, t)), e !== null && (Ni(e, t, n), Je(e, n));
}
function r0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), oh(e, n);
}
function o0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), oh(e, n);
}
var ih;
ih = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || qe.current) Xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), Hx(e, t, n);
      Xe = !!(e.flags & 131072);
    }
  else (Xe = !1), ue && t.flags & 1048576 && cm(t, As, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ms(e, t), (e = t.pendingProps);
      var o = ao(t, ze.current);
      Kr(t, n), (o = ru(null, t, r, e, o, n));
      var i = ou();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ze(r) ? ((i = !0), Os(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Zc(t),
            (o.updater = la),
            (t.stateNode = o),
            (o._reactInternals = t),
            Gl(t, r, e, n),
            (t = Yl(null, t, r, !0, i, n)))
          : ((t.tag = 0), ue && i && Hc(t), $e(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ms(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = s0(r)),
          (e = St(r, e)),
          o)
        ) {
          case 0:
            t = Kl(null, t, r, e, n);
            break e;
          case 1:
            t = Hd(null, t, r, e, n);
            break e;
          case 11:
            t = Vd(null, t, r, e, n);
            break e;
          case 14:
            t = Wd(null, t, r, St(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : St(r, o)),
        Kl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : St(r, o)),
        Hd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Bm(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          hm(e, t),
          Ls(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = fo(Error(R(423)), t)), (t = Gd(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = fo(Error(R(424)), t)), (t = Gd(e, t, r, n, o));
            break e;
          } else
            for (
              nt = Ln(t.stateNode.containerInfo.firstChild),
                rt = t,
                ue = !0,
                kt = null,
                n = pm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((lo(), r === o)) {
            t = on(e, t, n);
            break e;
          }
          $e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        gm(t),
        e === null && Vl(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        zl(r, o) ? (s = null) : i !== null && zl(r, i) && (t.flags |= 32),
        Um(e, t),
        $e(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Vl(t), null;
    case 13:
      return Vm(e, t, n);
    case 4:
      return (
        Jc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = co(t, null, r, n)) : $e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : St(r, o)),
        Vd(e, t, r, o, n)
      );
    case 7:
      return $e(e, t, t.pendingProps, n), t.child;
    case 8:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ie(Is, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Rt(i.value, s)) {
            if (i.children === o.children && !qe.current) {
              t = on(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var c = l.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (i.tag === 1) {
                      (c = en(-1, n & -n)), (c.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (c.next = c)
                          : ((c.next = d.next), (d.next = c)),
                          (u.pending = c);
                      }
                    }
                    (i.lanes |= n),
                      (c = i.alternate),
                      c !== null && (c.lanes |= n),
                      Wl(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(R(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Wl(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        $e(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Kr(t, n),
        (o = mt(o)),
        (r = r(o)),
        (t.flags |= 1),
        $e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = St(r, t.pendingProps)),
        (o = St(r.type, o)),
        Wd(e, t, r, o, n)
      );
    case 15:
      return Fm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : St(r, o)),
        ms(e, t),
        (t.tag = 1),
        Ze(r) ? ((e = !0), Os(t)) : (e = !1),
        Kr(t, n),
        Lm(t, r, o),
        Gl(t, r, o, n),
        Yl(null, t, r, !0, e, n)
      );
    case 19:
      return Wm(e, t, n);
    case 22:
      return $m(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function sh(e, t) {
  return Ap(e, t);
}
function i0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ft(e, t, n, r) {
  return new i0(e, t, n, r);
}
function mu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function s0(e) {
  if (typeof e == "function") return mu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ac)) return 11;
    if (e === Ic) return 14;
  }
  return 2;
}
function $n(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ft(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ys(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) mu(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Ar:
        return fr(n.children, o, i, t);
      case Mc:
        (s = 8), (o |= 8);
        break;
      case gl:
        return (
          (e = ft(12, n, t, o | 2)), (e.elementType = gl), (e.lanes = i), e
        );
      case yl:
        return (e = ft(13, n, t, o)), (e.elementType = yl), (e.lanes = i), e;
      case vl:
        return (e = ft(19, n, t, o)), (e.elementType = vl), (e.lanes = i), e;
      case gp:
        return da(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case mp:
              s = 10;
              break e;
            case hp:
              s = 9;
              break e;
            case Ac:
              s = 11;
              break e;
            case Ic:
              s = 14;
              break e;
            case bn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ft(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function fr(e, t, n, r) {
  return (e = ft(7, e, r, t)), (e.lanes = n), e;
}
function da(e, t, n, r) {
  return (
    (e = ft(22, e, r, t)),
    (e.elementType = gp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ol(e, t, n) {
  return (e = ft(6, e, null, t)), (e.lanes = n), e;
}
function il(e, t, n) {
  return (
    (t = ft(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function a0(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Fa(0)),
    (this.expirationTimes = Fa(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fa(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function hu(e, t, n, r, o, i, s, l, c) {
  return (
    (e = new a0(e, t, n, l, c)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ft(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Zc(i),
    e
  );
}
function l0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Mr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ah(e) {
  if (!e) return Vn;
  e = e._reactInternals;
  e: {
    if (br(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ze(n)) return am(e, n, t);
  }
  return t;
}
function lh(e, t, n, r, o, i, s, l, c) {
  return (
    (e = hu(n, r, !0, e, o, i, s, l, c)),
    (e.context = ah(null)),
    (n = e.current),
    (r = He()),
    (o = Fn(n)),
    (i = en(r, o)),
    (i.callback = t ?? null),
    Dn(n, i, o),
    (e.current.lanes = o),
    Ni(e, o, r),
    Je(e, r),
    e
  );
}
function fa(e, t, n, r) {
  var o = t.current,
    i = He(),
    s = Fn(o);
  return (
    (n = ah(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = en(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Dn(o, t, s)),
    e !== null && (Tt(e, o, s, i), ds(e, o, s)),
    s
  );
}
function Ws(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function nf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function gu(e, t) {
  nf(e, t), (e = e.alternate) && nf(e, t);
}
function c0() {
  return null;
}
var ch =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function yu(e) {
  this._internalRoot = e;
}
pa.prototype.render = yu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  fa(e, t, null, null);
};
pa.prototype.unmount = yu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    yr(function () {
      fa(null, e, null, null);
    }),
      (t[nn] = null);
  }
};
function pa(e) {
  this._internalRoot = e;
}
pa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = $p();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nn.length && t !== 0 && t < Nn[n].priority; n++);
    Nn.splice(n, 0, e), n === 0 && Bp(e);
  }
};
function vu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ma(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function rf() {}
function u0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ws(s);
        i.call(u);
      };
    }
    var s = lh(t, r, e, 0, null, !1, !1, "", rf);
    return (
      (e._reactRootContainer = s),
      (e[nn] = s.current),
      ii(e.nodeType === 8 ? e.parentNode : e),
      yr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Ws(c);
      l.call(u);
    };
  }
  var c = hu(e, 0, !1, null, null, !1, !1, "", rf);
  return (
    (e._reactRootContainer = c),
    (e[nn] = c.current),
    ii(e.nodeType === 8 ? e.parentNode : e),
    yr(function () {
      fa(t, c, n, r);
    }),
    c
  );
}
function ha(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var c = Ws(s);
        l.call(c);
      };
    }
    fa(t, s, e, o);
  } else s = u0(n, t, e, o, r);
  return Ws(s);
}
zp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = zo(t.pendingLanes);
        n !== 0 &&
          (Dc(t, n | 1), Je(t, ye()), !(Z & 6) && ((po = ye() + 500), Kn()));
      }
      break;
    case 13:
      yr(function () {
        var r = rn(e, 1);
        if (r !== null) {
          var o = He();
          Tt(r, e, 1, o);
        }
      }),
        gu(e, 1);
  }
};
zc = function (e) {
  if (e.tag === 13) {
    var t = rn(e, 134217728);
    if (t !== null) {
      var n = He();
      Tt(t, e, 134217728, n);
    }
    gu(e, 134217728);
  }
};
Fp = function (e) {
  if (e.tag === 13) {
    var t = Fn(e),
      n = rn(e, t);
    if (n !== null) {
      var r = He();
      Tt(n, e, t, r);
    }
    gu(e, t);
  }
};
$p = function () {
  return ne;
};
Up = function (e, t) {
  var n = ne;
  try {
    return (ne = e), t();
  } finally {
    ne = n;
  }
};
Pl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((bl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ia(r);
            if (!o) throw Error(R(90));
            vp(r), bl(r, o);
          }
        }
      }
      break;
    case "textarea":
      wp(e, n);
      break;
    case "select":
      (t = n.value), t != null && Wr(e, !!n.multiple, t, !1);
  }
};
kp = du;
Pp = yr;
var d0 = { usingClientEntryPoint: !1, Events: [ji, Dr, ia, jp, Ep, du] },
  Ao = {
    findFiberByHostInstance: nr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  f0 = {
    bundleType: Ao.bundleType,
    version: Ao.version,
    rendererPackageName: Ao.rendererPackageName,
    rendererConfig: Ao.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: un.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Op(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ao.findFiberByHostInstance || c0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var es = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!es.isDisabled && es.supportsFiber)
    try {
      (ta = es.inject(f0)), (Ut = es);
    } catch {}
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d0;
st.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!vu(t)) throw Error(R(200));
  return l0(e, t, null, n);
};
st.createRoot = function (e, t) {
  if (!vu(e)) throw Error(R(299));
  var n = !1,
    r = "",
    o = ch;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = hu(e, 1, !1, null, null, n, !1, r, o)),
    (e[nn] = t.current),
    ii(e.nodeType === 8 ? e.parentNode : e),
    new yu(t)
  );
};
st.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = Op(t)), (e = e === null ? null : e.stateNode), e;
};
st.flushSync = function (e) {
  return yr(e);
};
st.hydrate = function (e, t, n) {
  if (!ma(t)) throw Error(R(200));
  return ha(null, e, t, !0, n);
};
st.hydrateRoot = function (e, t, n) {
  if (!vu(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = ch;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = lh(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[nn] = t.current),
    ii(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new pa(t);
};
st.render = function (e, t, n) {
  if (!ma(t)) throw Error(R(200));
  return ha(null, e, t, !1, n);
};
st.unmountComponentAtNode = function (e) {
  if (!ma(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (yr(function () {
        ha(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[nn] = null);
        });
      }),
      !0)
    : !1;
};
st.unstable_batchedUpdates = du;
st.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ma(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return ha(e, t, n, !1, r);
};
st.version = "18.3.1-next-f1338f8080-20240426";
function uh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uh);
    } catch (e) {
      console.error(e);
    }
}
uh(), (up.exports = st);
var ki = up.exports;
const dh = Zf(ki);
var fh,
  of = ki;
(fh = of.createRoot), of.hydrateRoot;
const p0 = 1,
  m0 = 1e6;
let sl = 0;
function h0() {
  return (sl = (sl + 1) % Number.MAX_SAFE_INTEGER), sl.toString();
}
const al = new Map(),
  sf = (e) => {
    if (al.has(e)) return;
    const t = setTimeout(() => {
      al.delete(e), Xo({ type: "REMOVE_TOAST", toastId: e });
    }, m0);
    al.set(e, t);
  },
  g0 = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, p0) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? sf(n)
            : e.toasts.forEach((r) => {
                sf(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  vs = [];
let xs = { toasts: [] };
function Xo(e) {
  (xs = g0(xs, e)),
    vs.forEach((t) => {
      t(xs);
    });
}
function y0({ ...e }) {
  const t = h0(),
    n = (o) => Xo({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => Xo({ type: "DISMISS_TOAST", toastId: t });
  return (
    Xo({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function ph() {
  const [e, t] = v.useState(xs);
  return (
    v.useEffect(
      () => (
        vs.push(t),
        () => {
          const n = vs.indexOf(t);
          n > -1 && vs.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: y0,
      dismiss: (n) => Xo({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function oe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function af(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function mh(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = af(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : af(e[o], null);
        }
      };
  };
}
function gt(...e) {
  return v.useCallback(mh(...e), e);
}
function xo(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = v.createContext(s),
      c = n.length;
    n = [...n, s];
    const u = (f) => {
      var g;
      const { scope: m, children: p, ...b } = f,
        x = ((g = m == null ? void 0 : m[e]) == null ? void 0 : g[c]) || l,
        w = v.useMemo(() => b, Object.values(b));
      return a.jsx(x.Provider, { value: w, children: p });
    };
    u.displayName = i + "Provider";
    function d(f, m) {
      var x;
      const p = ((x = m == null ? void 0 : m[e]) == null ? void 0 : x[c]) || l,
        b = v.useContext(p);
      if (b) return b;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, d];
  }
  const o = () => {
    const i = n.map((s) => v.createContext(s));
    return function (l) {
      const c = (l == null ? void 0 : l[e]) || i;
      return v.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: c } }), [l, c]);
    };
  };
  return (o.scopeName = e), [r, v0(o, ...t)];
}
function v0(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: c, scopeName: u }) => {
        const f = c(i)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Hs(e) {
  const t = w0(e),
    n = v.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        l = v.Children.toArray(i),
        c = l.find(S0);
      if (c) {
        const u = c.props.children,
          d = l.map((f) =>
            f === c
              ? v.Children.count(u) > 1
                ? v.Children.only(null)
                : v.isValidElement(u)
                ? u.props.children
                : null
              : f
          );
        return a.jsx(t, {
          ...s,
          ref: o,
          children: v.isValidElement(u) ? v.cloneElement(u, void 0, d) : null,
        });
      }
      return a.jsx(t, { ...s, ref: o, children: i });
    });
  return (n.displayName = `${e}.Slot`), n;
}
var x0 = Hs("Slot");
function w0(e) {
  const t = v.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (v.isValidElement(o)) {
      const s = C0(o),
        l = N0(i, o.props);
      return (
        o.type !== v.Fragment && (l.ref = r ? mh(r, s) : s),
        v.cloneElement(o, l)
      );
    }
    return v.Children.count(o) > 1 ? v.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var hh = Symbol("radix.slottable");
function b0(e) {
  const t = ({ children: n }) => a.jsx(a.Fragment, { children: n });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = hh), t;
}
function S0(e) {
  return (
    v.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === hh
  );
}
function N0(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...l) => {
            const c = i(...l);
            return o(...l), c;
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function C0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function gh(e) {
  const t = e + "CollectionProvider",
    [n, r] = xo(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (x) => {
      const { scope: w, children: g } = x,
        h = O.useRef(null),
        y = O.useRef(new Map()).current;
      return a.jsx(o, { scope: w, itemMap: y, collectionRef: h, children: g });
    };
  s.displayName = t;
  const l = e + "CollectionSlot",
    c = Hs(l),
    u = O.forwardRef((x, w) => {
      const { scope: g, children: h } = x,
        y = i(l, g),
        S = gt(w, y.collectionRef);
      return a.jsx(c, { ref: S, children: h });
    });
  u.displayName = l;
  const d = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    m = Hs(d),
    p = O.forwardRef((x, w) => {
      const { scope: g, children: h, ...y } = x,
        S = O.useRef(null),
        N = gt(w, S),
        C = i(d, g);
      return (
        O.useEffect(
          () => (
            C.itemMap.set(S, { ref: S, ...y }), () => void C.itemMap.delete(S)
          )
        ),
        a.jsx(m, { [f]: "", ref: N, children: h })
      );
    });
  p.displayName = d;
  function b(x) {
    const w = i(e + "CollectionConsumer", x);
    return O.useCallback(() => {
      const h = w.collectionRef.current;
      if (!h) return [];
      const y = Array.from(h.querySelectorAll(`[${f}]`));
      return Array.from(w.itemMap.values()).sort(
        (C, j) => y.indexOf(C.ref.current) - y.indexOf(j.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: p }, b, r];
}
var j0 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  ve = j0.reduce((e, t) => {
    const n = Hs(`Primitive.${t}`),
      r = v.forwardRef((o, i) => {
        const { asChild: s, ...l } = o,
          c = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          a.jsx(c, { ...l, ref: i })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function yh(e, t) {
  e && ki.flushSync(() => e.dispatchEvent(t));
}
function sn(e) {
  const t = v.useRef(e);
  return (
    v.useEffect(() => {
      t.current = e;
    }),
    v.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function E0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = sn(e);
  v.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var k0 = "DismissableLayer",
  ac = "dismissableLayer.update",
  P0 = "dismissableLayer.pointerDownOutside",
  T0 = "dismissableLayer.focusOutside",
  lf,
  vh = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  xu = v.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: l,
        ...c
      } = e,
      u = v.useContext(vh),
      [d, f] = v.useState(null),
      m =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, p] = v.useState({}),
      b = gt(t, (j) => f(j)),
      x = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      g = x.indexOf(w),
      h = d ? x.indexOf(d) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = h >= g,
      N = O0((j) => {
        const P = j.target,
          A = [...u.branches].some((M) => M.contains(P));
        !S ||
          A ||
          (o == null || o(j),
          s == null || s(j),
          j.defaultPrevented || l == null || l());
      }, m),
      C = M0((j) => {
        const P = j.target;
        [...u.branches].some((M) => M.contains(P)) ||
          (i == null || i(j),
          s == null || s(j),
          j.defaultPrevented || l == null || l());
      }, m);
    return (
      E0((j) => {
        h === u.layers.size - 1 &&
          (r == null || r(j),
          !j.defaultPrevented && l && (j.preventDefault(), l()));
      }, m),
      v.useEffect(() => {
        if (d)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((lf = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            cf(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = lf);
            }
          );
      }, [d, m, n, u]),
      v.useEffect(
        () => () => {
          d &&
            (u.layers.delete(d),
            u.layersWithOutsidePointerEventsDisabled.delete(d),
            cf());
        },
        [d, u]
      ),
      v.useEffect(() => {
        const j = () => p({});
        return (
          document.addEventListener(ac, j),
          () => document.removeEventListener(ac, j)
        );
      }, []),
      a.jsx(ve.div, {
        ...c,
        ref: b,
        style: {
          pointerEvents: y ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: oe(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: oe(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: oe(
          e.onPointerDownCapture,
          N.onPointerDownCapture
        ),
      })
    );
  });
xu.displayName = k0;
var R0 = "DismissableLayerBranch",
  xh = v.forwardRef((e, t) => {
    const n = v.useContext(vh),
      r = v.useRef(null),
      o = gt(t, r);
    return (
      v.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      a.jsx(ve.div, { ...e, ref: o })
    );
  });
xh.displayName = R0;
function O0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = sn(e),
    r = v.useRef(!1),
    o = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const i = (l) => {
          if (l.target && !r.current) {
            let c = function () {
              wh(P0, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = c),
                t.addEventListener("click", o.current, { once: !0 }))
              : c();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function M0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = sn(e),
    r = v.useRef(!1);
  return (
    v.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          wh(T0, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function cf() {
  const e = new CustomEvent(ac);
  document.dispatchEvent(e);
}
function wh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? yh(o, i) : o.dispatchEvent(i);
}
var A0 = xu,
  I0 = xh,
  an = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {},
  _0 = "Portal",
  bh = v.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, i] = v.useState(!1);
    an(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return s ? dh.createPortal(a.jsx(ve.div, { ...r, ref: t }), s) : null;
  });
bh.displayName = _0;
function L0(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var ga = (e) => {
  const { present: t, children: n } = e,
    r = D0(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n),
    i = gt(r.ref, z0(o));
  return typeof n == "function" || r.isPresent
    ? v.cloneElement(o, { ref: i })
    : null;
};
ga.displayName = "Presence";
function D0(e) {
  const [t, n] = v.useState(),
    r = v.useRef(null),
    o = v.useRef(e),
    i = v.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [l, c] = L0(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    v.useEffect(() => {
      const u = ts(r.current);
      i.current = l === "mounted" ? u : "none";
    }, [l]),
    an(() => {
      const u = r.current,
        d = o.current;
      if (d !== e) {
        const m = i.current,
          p = ts(u);
        e
          ? c("MOUNT")
          : p === "none" || (u == null ? void 0 : u.display) === "none"
          ? c("UNMOUNT")
          : c(d && m !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, c]),
    an(() => {
      if (t) {
        let u;
        const d = t.ownerDocument.defaultView ?? window,
          f = (p) => {
            const x = ts(r.current).includes(p.animationName);
            if (p.target === t && x && (c("ANIMATION_END"), !o.current)) {
              const w = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                }));
            }
          },
          m = (p) => {
            p.target === t && (i.current = ts(r.current));
          };
        return (
          t.addEventListener("animationstart", m),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            d.clearTimeout(u),
              t.removeEventListener("animationstart", m),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else c("ANIMATION_END");
    }, [t, c]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: v.useCallback((u) => {
        (r.current = u ? getComputedStyle(u) : null), n(u);
      }, []),
    }
  );
}
function ts(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function z0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var F0 = Pc[" useInsertionEffect ".trim().toString()] || an;
function wu({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, i, s] = $0({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    c = l ? e : o;
  {
    const d = v.useRef(e !== void 0);
    v.useEffect(() => {
      const f = d.current;
      f !== l &&
        console.warn(
          `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${
            l ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (d.current = l);
    }, [l, r]);
  }
  const u = v.useCallback(
    (d) => {
      var f;
      if (l) {
        const m = U0(d) ? d(e) : d;
        m !== e && ((f = s.current) == null || f.call(s, m));
      } else i(d);
    },
    [l, e, i, s]
  );
  return [c, u];
}
function $0({ defaultProp: e, onChange: t }) {
  const [n, r] = v.useState(e),
    o = v.useRef(n),
    i = v.useRef(t);
  return (
    F0(() => {
      i.current = t;
    }, [t]),
    v.useEffect(() => {
      var s;
      o.current !== n &&
        ((s = i.current) == null || s.call(i, n), (o.current = n));
    }, [n, o]),
    [n, r, i]
  );
}
function U0(e) {
  return typeof e == "function";
}
var B0 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  V0 = "VisuallyHidden",
  ya = v.forwardRef((e, t) =>
    a.jsx(ve.span, { ...e, ref: t, style: { ...B0, ...e.style } })
  );
ya.displayName = V0;
var W0 = ya,
  bu = "ToastProvider",
  [Su, H0, G0] = gh("Toast"),
  [Sh, oC] = xo("Toast", [G0]),
  [Q0, va] = Sh(bu),
  Nh = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [l, c] = v.useState(null),
      [u, d] = v.useState(0),
      f = v.useRef(!1),
      m = v.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${bu}\`. Expected non-empty \`string\`.`
        ),
      a.jsx(Su.Provider, {
        scope: t,
        children: a.jsx(Q0, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: l,
          onViewportChange: c,
          onToastAdd: v.useCallback(() => d((p) => p + 1), []),
          onToastRemove: v.useCallback(() => d((p) => p - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: m,
          children: s,
        }),
      })
    );
  };
Nh.displayName = bu;
var Ch = "ToastViewport",
  K0 = ["F8"],
  lc = "toast.viewportPause",
  cc = "toast.viewportResume",
  jh = v.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = K0,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      s = va(Ch, n),
      l = H0(n),
      c = v.useRef(null),
      u = v.useRef(null),
      d = v.useRef(null),
      f = v.useRef(null),
      m = gt(t, f, s.onViewportChange),
      p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      b = s.toastCount > 0;
    v.useEffect(() => {
      const w = (g) => {
        var y;
        r.length !== 0 &&
          r.every((S) => g[S] || g.code === S) &&
          ((y = f.current) == null || y.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      v.useEffect(() => {
        const w = c.current,
          g = f.current;
        if (b && w && g) {
          const h = () => {
              if (!s.isClosePausedRef.current) {
                const C = new CustomEvent(lc);
                g.dispatchEvent(C), (s.isClosePausedRef.current = !0);
              }
            },
            y = () => {
              if (s.isClosePausedRef.current) {
                const C = new CustomEvent(cc);
                g.dispatchEvent(C), (s.isClosePausedRef.current = !1);
              }
            },
            S = (C) => {
              !w.contains(C.relatedTarget) && y();
            },
            N = () => {
              w.contains(document.activeElement) || y();
            };
          return (
            w.addEventListener("focusin", h),
            w.addEventListener("focusout", S),
            w.addEventListener("pointermove", h),
            w.addEventListener("pointerleave", N),
            window.addEventListener("blur", h),
            window.addEventListener("focus", y),
            () => {
              w.removeEventListener("focusin", h),
                w.removeEventListener("focusout", S),
                w.removeEventListener("pointermove", h),
                w.removeEventListener("pointerleave", N),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", y);
            }
          );
        }
      }, [b, s.isClosePausedRef]);
    const x = v.useCallback(
      ({ tabbingDirection: w }) => {
        const h = l().map((y) => {
          const S = y.ref.current,
            N = [S, ...a1(S)];
          return w === "forwards" ? N : N.reverse();
        });
        return (w === "forwards" ? h.reverse() : h).flat();
      },
      [l]
    );
    return (
      v.useEffect(() => {
        const w = f.current;
        if (w) {
          const g = (h) => {
            var N, C, j;
            const y = h.altKey || h.ctrlKey || h.metaKey;
            if (h.key === "Tab" && !y) {
              const P = document.activeElement,
                A = h.shiftKey;
              if (h.target === w && A) {
                (N = u.current) == null || N.focus();
                return;
              }
              const L = x({ tabbingDirection: A ? "backwards" : "forwards" }),
                G = L.findIndex((I) => I === P);
              ll(L.slice(G + 1))
                ? h.preventDefault()
                : A
                ? (C = u.current) == null || C.focus()
                : (j = d.current) == null || j.focus();
            }
          };
          return (
            w.addEventListener("keydown", g),
            () => w.removeEventListener("keydown", g)
          );
        }
      }, [l, x]),
      a.jsxs(I0, {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: { pointerEvents: b ? void 0 : "none" },
        children: [
          b &&
            a.jsx(uc, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = x({ tabbingDirection: "forwards" });
                ll(w);
              },
            }),
          a.jsx(Su.Slot, {
            scope: n,
            children: a.jsx(ve.ol, { tabIndex: -1, ...i, ref: m }),
          }),
          b &&
            a.jsx(uc, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const w = x({ tabbingDirection: "backwards" });
                ll(w);
              },
            }),
        ],
      })
    );
  });
jh.displayName = Ch;
var Eh = "ToastFocusProxy",
  uc = v.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = va(Eh, n);
    return a.jsx(ya, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const l = s.relatedTarget;
        !((u = i.viewport) != null && u.contains(l)) && r();
      },
    });
  });
uc.displayName = Eh;
var Pi = "Toast",
  Y0 = "toast.swipeStart",
  X0 = "toast.swipeMove",
  q0 = "toast.swipeCancel",
  Z0 = "toast.swipeEnd",
  kh = v.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
      [l, c] = wu({ prop: r, defaultProp: o ?? !0, onChange: i, caller: Pi });
    return a.jsx(ga, {
      present: n || l,
      children: a.jsx(t1, {
        open: l,
        ...s,
        ref: t,
        onClose: () => c(!1),
        onPause: sn(e.onPause),
        onResume: sn(e.onResume),
        onSwipeStart: oe(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: oe(e.onSwipeMove, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${f}px`
            );
        }),
        onSwipeCancel: oe(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: oe(e.onSwipeEnd, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${f}px`
            ),
            c(!1);
        }),
      }),
    });
  });
kh.displayName = Pi;
var [J0, e1] = Sh(Pi, { onClose() {} }),
  t1 = v.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: c,
        onResume: u,
        onSwipeStart: d,
        onSwipeMove: f,
        onSwipeCancel: m,
        onSwipeEnd: p,
        ...b
      } = e,
      x = va(Pi, n),
      [w, g] = v.useState(null),
      h = gt(t, (I) => g(I)),
      y = v.useRef(null),
      S = v.useRef(null),
      N = o || x.duration,
      C = v.useRef(0),
      j = v.useRef(N),
      P = v.useRef(0),
      { onToastAdd: A, onToastRemove: M } = x,
      $ = sn(() => {
        var K;
        (w == null ? void 0 : w.contains(document.activeElement)) &&
          ((K = x.viewport) == null || K.focus()),
          s();
      }),
      L = v.useCallback(
        (I) => {
          !I ||
            I === 1 / 0 ||
            (window.clearTimeout(P.current),
            (C.current = new Date().getTime()),
            (P.current = window.setTimeout($, I)));
        },
        [$]
      );
    v.useEffect(() => {
      const I = x.viewport;
      if (I) {
        const K = () => {
            L(j.current), u == null || u();
          },
          z = () => {
            const V = new Date().getTime() - C.current;
            (j.current = j.current - V),
              window.clearTimeout(P.current),
              c == null || c();
          };
        return (
          I.addEventListener(lc, z),
          I.addEventListener(cc, K),
          () => {
            I.removeEventListener(lc, z), I.removeEventListener(cc, K);
          }
        );
      }
    }, [x.viewport, N, c, u, L]),
      v.useEffect(() => {
        i && !x.isClosePausedRef.current && L(N);
      }, [i, N, x.isClosePausedRef, L]),
      v.useEffect(() => (A(), () => M()), [A, M]);
    const G = v.useMemo(() => (w ? Ih(w) : null), [w]);
    return x.viewport
      ? a.jsxs(a.Fragment, {
          children: [
            G &&
              a.jsx(n1, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: G,
              }),
            a.jsx(J0, {
              scope: n,
              onClose: $,
              children: ki.createPortal(
                a.jsx(Su.ItemSlot, {
                  scope: n,
                  children: a.jsx(A0, {
                    asChild: !0,
                    onEscapeKeyDown: oe(l, () => {
                      x.isFocusedToastEscapeKeyDownRef.current || $(),
                        (x.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: a.jsx(ve.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": x.swipeDirection,
                      ...b,
                      ref: h,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: oe(e.onKeyDown, (I) => {
                        I.key === "Escape" &&
                          (l == null || l(I.nativeEvent),
                          I.nativeEvent.defaultPrevented ||
                            ((x.isFocusedToastEscapeKeyDownRef.current = !0),
                            $()));
                      }),
                      onPointerDown: oe(e.onPointerDown, (I) => {
                        I.button === 0 &&
                          (y.current = { x: I.clientX, y: I.clientY });
                      }),
                      onPointerMove: oe(e.onPointerMove, (I) => {
                        if (!y.current) return;
                        const K = I.clientX - y.current.x,
                          z = I.clientY - y.current.y,
                          V = !!S.current,
                          k = ["left", "right"].includes(x.swipeDirection),
                          T = ["left", "up"].includes(x.swipeDirection)
                            ? Math.min
                            : Math.max,
                          _ = k ? T(0, K) : 0,
                          W = k ? 0 : T(0, z),
                          F = I.pointerType === "touch" ? 10 : 2,
                          Y = { x: _, y: W },
                          q = { originalEvent: I, delta: Y };
                        V
                          ? ((S.current = Y), ns(X0, f, q, { discrete: !1 }))
                          : uf(Y, x.swipeDirection, F)
                          ? ((S.current = Y),
                            ns(Y0, d, q, { discrete: !1 }),
                            I.target.setPointerCapture(I.pointerId))
                          : (Math.abs(K) > F || Math.abs(z) > F) &&
                            (y.current = null);
                      }),
                      onPointerUp: oe(e.onPointerUp, (I) => {
                        const K = S.current,
                          z = I.target;
                        if (
                          (z.hasPointerCapture(I.pointerId) &&
                            z.releasePointerCapture(I.pointerId),
                          (S.current = null),
                          (y.current = null),
                          K)
                        ) {
                          const V = I.currentTarget,
                            k = { originalEvent: I, delta: K };
                          uf(K, x.swipeDirection, x.swipeThreshold)
                            ? ns(Z0, p, k, { discrete: !0 })
                            : ns(q0, m, k, { discrete: !0 }),
                            V.addEventListener(
                              "click",
                              (T) => T.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                x.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  n1 = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = va(Pi, t),
      [i, s] = v.useState(!1),
      [l, c] = v.useState(!1);
    return (
      i1(() => s(!0)),
      v.useEffect(() => {
        const u = window.setTimeout(() => c(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : a.jsx(bh, {
            asChild: !0,
            children: a.jsx(ya, {
              ...r,
              children:
                i && a.jsxs(a.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  r1 = "ToastTitle",
  Ph = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return a.jsx(ve.div, { ...r, ref: t });
  });
Ph.displayName = r1;
var o1 = "ToastDescription",
  Th = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return a.jsx(ve.div, { ...r, ref: t });
  });
Th.displayName = o1;
var Rh = "ToastAction",
  Oh = v.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? a.jsx(Ah, {
          altText: n,
          asChild: !0,
          children: a.jsx(Nu, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Rh}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
Oh.displayName = Rh;
var Mh = "ToastClose",
  Nu = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = e1(Mh, n);
    return a.jsx(Ah, {
      asChild: !0,
      children: a.jsx(ve.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: oe(e.onClick, o.onClose),
      }),
    });
  });
Nu.displayName = Mh;
var Ah = v.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return a.jsx(ve.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function Ih(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        s1(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...Ih(r));
      }
    }),
    t
  );
}
function ns(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? yh(o, i) : o.dispatchEvent(i);
}
var uf = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function i1(e = () => {}) {
  const t = sn(e);
  an(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function s1(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function a1(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ll(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var l1 = Nh,
  _h = jh,
  Lh = kh,
  Dh = Ph,
  zh = Th,
  Fh = Oh,
  $h = Nu;
function Uh(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Uh(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Bh() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Uh(e)) && (r && (r += " "), (r += t));
  return r;
}
const df = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  ff = Bh,
  xa = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return ff(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const d = n == null ? void 0 : n[u],
          f = i == null ? void 0 : i[u];
        if (d === null) return null;
        const m = df(d) || df(f);
        return o[u][m];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, d) => {
          let [f, m] = d;
          return m === void 0 || (u[f] = m), u;
        }, {}),
      c =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, d) => {
              let { class: f, className: m, ...p } = d;
              return Object.entries(p).every((b) => {
                let [x, w] = b;
                return Array.isArray(w)
                  ? w.includes({ ...i, ...l }[x])
                  : { ...i, ...l }[x] === w;
              })
                ? [...u, f, m]
                : u;
            }, []);
    return ff(
      e,
      s,
      c,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const c1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Vh = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var u1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const d1 = v.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...l
    },
    c
  ) =>
    v.createElement(
      "svg",
      {
        ref: c,
        ...u1,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Vh("lucide", o),
        ...l,
      },
      [
        ...s.map(([u, d]) => v.createElement(u, d)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q = (e, t) => {
  const n = v.forwardRef(({ className: r, ...o }, i) =>
    v.createElement(d1, {
      ref: i,
      iconNode: t,
      className: Vh(`lucide-${c1(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wt = Q("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const f1 = Q("Atom", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  [
    "path",
    {
      d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",
      key: "1l2ple",
    },
  ],
  [
    "path",
    {
      d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",
      key: "1wam0m",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pf = Q("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p1 = Q("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wh = Q("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const m1 = Q("Building", [
  [
    "rect",
    {
      width: "16",
      height: "20",
      x: "4",
      y: "2",
      rx: "2",
      ry: "2",
      key: "76otgf",
    },
  ],
  ["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cu = Q("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const h1 = Q("ChartColumn", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g1 = Q("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y1 = Q("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ju = Q("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hh = Q("Cpu", [
  [
    "rect",
    { width: "16", height: "16", x: "4", y: "4", rx: "2", key: "14l7u7" },
  ],
  ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" }],
  ["path", { d: "M15 2v2", key: "13l42r" }],
  ["path", { d: "M15 20v2", key: "15mkzm" }],
  ["path", { d: "M2 15h2", key: "1gxd5l" }],
  ["path", { d: "M2 9h2", key: "1bbxkp" }],
  ["path", { d: "M20 15h2", key: "19e6y8" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M9 2v2", key: "165o2o" }],
  ["path", { d: "M9 20v2", key: "i2bqo8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dc = Q("Droplet", [
  [
    "path",
    {
      d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
      key: "c7niix",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v1 = Q("Facebook", [
  [
    "path",
    {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
      key: "1jg4f8",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gs = Q("Factory", [
  [
    "path",
    {
      d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "159hny",
    },
  ],
  ["path", { d: "M17 18h1", key: "uldtlt" }],
  ["path", { d: "M12 18h1", key: "s9uhes" }],
  ["path", { d: "M7 18h1", key: "1neino" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const x1 = Q("Flame", [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gh = Q("Fuel", [
  ["line", { x1: "3", x2: "15", y1: "22", y2: "22", key: "xegly4" }],
  ["line", { x1: "4", x2: "14", y1: "9", y2: "9", key: "xcnuvu" }],
  ["path", { d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18", key: "16j0yd" }],
  [
    "path",
    {
      d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",
      key: "7cu91f",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w1 = Q("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b1 = Q("Leaf", [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3",
    },
  ],
  [
    "path",
    { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qh = Q("Lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb",
    },
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S1 = Q("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Eu = Q("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ti = Q("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N1 = Q("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C1 = Q("Network", [
  [
    "rect",
    { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" },
  ],
  [
    "rect",
    { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" },
  ],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kh = Q("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j1 = Q("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E1 = Q("Ship", [
  ["path", { d: "M12 10.189V14", key: "1p8cqu" }],
  ["path", { d: "M12 2v3", key: "qbqxhf" }],
  ["path", { d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6", key: "qpkstq" }],
  [
    "path",
    {
      d: "M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76",
      key: "7tigtc",
    },
  ],
  [
    "path",
    {
      d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "1924j5",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k1 = Q("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P1 = Q("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const T1 = Q("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ku = Q("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const R1 = Q("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O1 = Q("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yh = Q("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xh = Q("Waves", [
  [
    "path",
    {
      d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "knzxuh",
    },
  ],
  [
    "path",
    {
      d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "2jd2cc",
    },
  ],
  [
    "path",
    {
      d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "rd2r6e",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qh = Q("Wind", [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zh = Q("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jh = Q("Zap", [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ]),
  Pu = "-",
  M1 = (e) => {
    const t = I1(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const l = s.split(Pu);
        return l[0] === "" && l.length !== 1 && l.shift(), eg(l, t) || A1(s);
      },
      getConflictingClassGroupIds: (s, l) => {
        const c = n[s] || [];
        return l && r[s] ? [...c, ...r[s]] : c;
      },
    };
  },
  eg = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? eg(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(Pu);
    return (s = t.validators.find(({ validator: l }) => l(i))) == null
      ? void 0
      : s.classGroupId;
  },
  mf = /^\[(.+)\]$/,
  A1 = (e) => {
    if (mf.test(e)) {
      const t = mf.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  I1 = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      L1(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        fc(s, r, i, t);
      }),
      r
    );
  },
  fc = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : hf(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (_1(o)) {
          fc(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        fc(s, hf(t, i), n, r);
      });
    });
  },
  hf = (e, t) => {
    let n = e;
    return (
      t.split(Pu).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  _1 = (e) => e.isThemeGetter,
  L1 = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([s, l]) => [t + s, l])
                )
              : i
          );
          return [n, o];
        })
      : e,
  D1 = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  tg = "!",
  z1 = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (l) => {
        const c = [];
        let u = 0,
          d = 0,
          f;
        for (let w = 0; w < l.length; w++) {
          let g = l[w];
          if (u === 0) {
            if (g === o && (r || l.slice(w, w + i) === t)) {
              c.push(l.slice(d, w)), (d = w + i);
              continue;
            }
            if (g === "/") {
              f = w;
              continue;
            }
          }
          g === "[" ? u++ : g === "]" && u--;
        }
        const m = c.length === 0 ? l : l.substring(d),
          p = m.startsWith(tg),
          b = p ? m.substring(1) : m,
          x = f && f > d ? f - d : void 0;
        return {
          modifiers: c,
          hasImportantModifier: p,
          baseClassName: b,
          maybePostfixModifierPosition: x,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: s }) : s;
  },
  F1 = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  $1 = (e) => ({ cache: D1(e.cacheSize), parseClassName: z1(e), ...M1(e) }),
  U1 = /\s+/,
  B1 = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(U1);
    let l = "";
    for (let c = s.length - 1; c >= 0; c -= 1) {
      const u = s[c],
        {
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: m,
          maybePostfixModifierPosition: p,
        } = n(u);
      let b = !!p,
        x = r(b ? m.substring(0, p) : m);
      if (!x) {
        if (!b) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((x = r(m)), !x)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        b = !1;
      }
      const w = F1(d).join(":"),
        g = f ? w + tg : w,
        h = g + x;
      if (i.includes(h)) continue;
      i.push(h);
      const y = o(x, b);
      for (let S = 0; S < y.length; ++S) {
        const N = y[S];
        i.push(g + N);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function V1() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ng(t)) && (r && (r += " "), (r += n));
  return r;
}
const ng = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ng(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function W1(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(c) {
    const u = t.reduce((d, f) => f(d), e());
    return (n = $1(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(c);
  }
  function l(c) {
    const u = r(c);
    if (u) return u;
    const d = B1(c, n);
    return o(c, d), d;
  }
  return function () {
    return i(V1.apply(null, arguments));
  };
}
const se = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  rg = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  H1 = /^\d+\/\d+$/,
  G1 = new Set(["px", "full", "screen"]),
  Q1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  K1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Y1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  X1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  q1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Qt = (e) => Xr(e) || G1.has(e) || H1.test(e),
  vn = (e) => wo(e, "length", iw),
  Xr = (e) => !!e && !Number.isNaN(Number(e)),
  cl = (e) => wo(e, "number", Xr),
  Io = (e) => !!e && Number.isInteger(Number(e)),
  Z1 = (e) => e.endsWith("%") && Xr(e.slice(0, -1)),
  H = (e) => rg.test(e),
  xn = (e) => Q1.test(e),
  J1 = new Set(["length", "size", "percentage"]),
  ew = (e) => wo(e, J1, og),
  tw = (e) => wo(e, "position", og),
  nw = new Set(["image", "url"]),
  rw = (e) => wo(e, nw, aw),
  ow = (e) => wo(e, "", sw),
  _o = () => !0,
  wo = (e, t, n) => {
    const r = rg.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  iw = (e) => K1.test(e) && !Y1.test(e),
  og = () => !1,
  sw = (e) => X1.test(e),
  aw = (e) => q1.test(e),
  lw = () => {
    const e = se("colors"),
      t = se("spacing"),
      n = se("blur"),
      r = se("brightness"),
      o = se("borderColor"),
      i = se("borderRadius"),
      s = se("borderSpacing"),
      l = se("borderWidth"),
      c = se("contrast"),
      u = se("grayscale"),
      d = se("hueRotate"),
      f = se("invert"),
      m = se("gap"),
      p = se("gradientColorStops"),
      b = se("gradientColorStopPositions"),
      x = se("inset"),
      w = se("margin"),
      g = se("opacity"),
      h = se("padding"),
      y = se("saturate"),
      S = se("scale"),
      N = se("sepia"),
      C = se("skew"),
      j = se("space"),
      P = se("translate"),
      A = () => ["auto", "contain", "none"],
      M = () => ["auto", "hidden", "clip", "visible", "scroll"],
      $ = () => ["auto", H, t],
      L = () => [H, t],
      G = () => ["", Qt, vn],
      I = () => ["auto", Xr, H],
      K = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      z = () => ["solid", "dashed", "dotted", "double", "none"],
      V = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      k = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      T = () => ["", "0", H],
      _ = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      W = () => [Xr, H];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [_o],
        spacing: [Qt, vn],
        blur: ["none", "", xn, H],
        brightness: W(),
        borderColor: [e],
        borderRadius: ["none", "", "full", xn, H],
        borderSpacing: L(),
        borderWidth: G(),
        contrast: W(),
        grayscale: T(),
        hueRotate: W(),
        invert: T(),
        gap: L(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Z1, vn],
        inset: $(),
        margin: $(),
        opacity: W(),
        padding: L(),
        saturate: W(),
        scale: W(),
        sepia: T(),
        skew: W(),
        space: L(),
        translate: L(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", H] }],
        container: ["container"],
        columns: [{ columns: [xn] }],
        "break-after": [{ "break-after": _() }],
        "break-before": [{ "break-before": _() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...K(), H] }],
        overflow: [{ overflow: M() }],
        "overflow-x": [{ "overflow-x": M() }],
        "overflow-y": [{ "overflow-y": M() }],
        overscroll: [{ overscroll: A() }],
        "overscroll-x": [{ "overscroll-x": A() }],
        "overscroll-y": [{ "overscroll-y": A() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [x] }],
        "inset-x": [{ "inset-x": [x] }],
        "inset-y": [{ "inset-y": [x] }],
        start: [{ start: [x] }],
        end: [{ end: [x] }],
        top: [{ top: [x] }],
        right: [{ right: [x] }],
        bottom: [{ bottom: [x] }],
        left: [{ left: [x] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Io, H] }],
        basis: [{ basis: $() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", H] }],
        grow: [{ grow: T() }],
        shrink: [{ shrink: T() }],
        order: [{ order: ["first", "last", "none", Io, H] }],
        "grid-cols": [{ "grid-cols": [_o] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Io, H] }, H] }],
        "col-start": [{ "col-start": I() }],
        "col-end": [{ "col-end": I() }],
        "grid-rows": [{ "grid-rows": [_o] }],
        "row-start-end": [{ row: ["auto", { span: [Io, H] }, H] }],
        "row-start": [{ "row-start": I() }],
        "row-end": [{ "row-end": I() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", H] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", H] }],
        gap: [{ gap: [m] }],
        "gap-x": [{ "gap-x": [m] }],
        "gap-y": [{ "gap-y": [m] }],
        "justify-content": [{ justify: ["normal", ...k()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...k(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...k(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [h] }],
        px: [{ px: [h] }],
        py: [{ py: [h] }],
        ps: [{ ps: [h] }],
        pe: [{ pe: [h] }],
        pt: [{ pt: [h] }],
        pr: [{ pr: [h] }],
        pb: [{ pb: [h] }],
        pl: [{ pl: [h] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [j] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [j] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t] }],
        "min-w": [{ "min-w": [H, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              H,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [xn] },
              xn,
            ],
          },
        ],
        h: [{ h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [H, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", xn, vn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              cl,
            ],
          },
        ],
        "font-family": [{ font: [_o] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              H,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Xr, cl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Qt,
              H,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", H] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", H] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [g] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [g] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...z(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Qt, vn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Qt, H] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: L() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              H,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", H] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [g] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...K(), tw] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", ew] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              rw,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [b] }],
        "gradient-via-pos": [{ via: [b] }],
        "gradient-to-pos": [{ to: [b] }],
        "gradient-from": [{ from: [p] }],
        "gradient-via": [{ via: [p] }],
        "gradient-to": [{ to: [p] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [g] }],
        "border-style": [{ border: [...z(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [g] }],
        "divide-style": [{ divide: z() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...z()] }],
        "outline-offset": [{ "outline-offset": [Qt, H] }],
        "outline-w": [{ outline: [Qt, vn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: G() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [g] }],
        "ring-offset-w": [{ "ring-offset": [Qt, vn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", xn, ow] }],
        "shadow-color": [{ shadow: [_o] }],
        opacity: [{ opacity: [g] }],
        "mix-blend": [{ "mix-blend": [...V(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": V() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [c] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", xn, H] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [N] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [c] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [g] }],
        "backdrop-saturate": [{ "backdrop-saturate": [y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [N] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              H,
            ],
          },
        ],
        duration: [{ duration: W() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", H] }],
        delay: [{ delay: W() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", H] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [Io, H] }],
        "translate-x": [{ "translate-x": [P] }],
        "translate-y": [{ "translate-y": [P] }],
        "skew-x": [{ "skew-x": [C] }],
        "skew-y": [{ "skew-y": [C] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              H,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              H,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": L() }],
        "scroll-mx": [{ "scroll-mx": L() }],
        "scroll-my": [{ "scroll-my": L() }],
        "scroll-ms": [{ "scroll-ms": L() }],
        "scroll-me": [{ "scroll-me": L() }],
        "scroll-mt": [{ "scroll-mt": L() }],
        "scroll-mr": [{ "scroll-mr": L() }],
        "scroll-mb": [{ "scroll-mb": L() }],
        "scroll-ml": [{ "scroll-ml": L() }],
        "scroll-p": [{ "scroll-p": L() }],
        "scroll-px": [{ "scroll-px": L() }],
        "scroll-py": [{ "scroll-py": L() }],
        "scroll-ps": [{ "scroll-ps": L() }],
        "scroll-pe": [{ "scroll-pe": L() }],
        "scroll-pt": [{ "scroll-pt": L() }],
        "scroll-pr": [{ "scroll-pr": L() }],
        "scroll-pb": [{ "scroll-pb": L() }],
        "scroll-pl": [{ "scroll-pl": L() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", H] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Qt, vn, cl] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  cw = W1(lw);
function xe(...e) {
  return cw(Bh(e));
}
const uw = l1,
  ig = v.forwardRef(({ className: e, ...t }, n) =>
    a.jsx(_h, {
      ref: n,
      className: xe(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
ig.displayName = _h.displayName;
const dw = xa(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  sg = v.forwardRef(({ className: e, variant: t, ...n }, r) =>
    a.jsx(Lh, { ref: r, className: xe(dw({ variant: t }), e), ...n })
  );
sg.displayName = Lh.displayName;
const fw = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(Fh, {
    ref: n,
    className: xe(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t,
  })
);
fw.displayName = Fh.displayName;
const ag = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx($h, {
    ref: n,
    className: xe(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: a.jsx(Zh, { className: "h-4 w-4" }),
  })
);
ag.displayName = $h.displayName;
const lg = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(Dh, { ref: n, className: xe("text-sm font-semibold", e), ...t })
);
lg.displayName = Dh.displayName;
const cg = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(zh, { ref: n, className: xe("text-sm opacity-90", e), ...t })
);
cg.displayName = zh.displayName;
function pw() {
  const { toasts: e } = ph();
  return a.jsxs(uw, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
        return a.jsxs(
          sg,
          {
            ...i,
            children: [
              a.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && a.jsx(lg, { children: n }),
                  r && a.jsx(cg, { children: r }),
                ],
              }),
              o,
              a.jsx(ag, {}),
            ],
          },
          t
        );
      }),
      a.jsx(ig, {}),
    ],
  });
}
var gf = ["light", "dark"],
  mw = "(prefers-color-scheme: dark)",
  hw = v.createContext(void 0),
  gw = { setTheme: (e) => {}, themes: [] },
  yw = () => {
    var e;
    return (e = v.useContext(hw)) != null ? e : gw;
  };
v.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: l,
    nonce: c,
  }) => {
    let u = i === "system",
      d =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${l
              .map((b) => `'${b}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      f = o
        ? gf.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      m = (b, x = !1, w = !0) => {
        let g = s ? s[b] : b,
          h = x ? b + "|| ''" : `'${g}'`,
          y = "";
        return (
          o &&
            w &&
            !x &&
            gf.includes(b) &&
            (y += `d.style.colorScheme = '${b}';`),
          n === "class"
            ? x || g
              ? (y += `c.add(${h})`)
              : (y += "null")
            : g && (y += `d[s](n,${h})`),
          y
        );
      },
      p = e
        ? `!function(){${d}${m(e)}}()`
        : r
        ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${mw}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m(
            "dark"
          )}}else{${m("light")}}}else if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${m(s ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + m(i, !1, !1) + "}"
          }${f}}catch(e){}}()`
        : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${m(s ? "x[e]" : "e", !0)}}else{${m(
            i,
            !1,
            !1
          )};}${f}}catch(t){}}();`;
    return v.createElement("script", {
      nonce: c,
      dangerouslySetInnerHTML: { __html: p },
    });
  }
);
var vw = (e) => {
    switch (e) {
      case "success":
        return bw;
      case "info":
        return Nw;
      case "warning":
        return Sw;
      case "error":
        return Cw;
      default:
        return null;
    }
  },
  xw = Array(12).fill(0),
  ww = ({ visible: e, className: t }) =>
    O.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      O.createElement(
        "div",
        { className: "sonner-spinner" },
        xw.map((n, r) =>
          O.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          })
        )
      )
    ),
  bw = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  Sw = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  Nw = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  Cw = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  jw = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    O.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    O.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  Ew = () => {
    let [e, t] = O.useState(document.hidden);
    return (
      O.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  pc = 1,
  kw = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : pc++,
            i = this.toasts.find((l) => l.id === o),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i
              ? (this.toasts = this.toasts.map((l) =>
                  l.id === o
                    ? (this.publish({ ...l, ...e, id: o, title: n }),
                      { ...l, ...e, id: o, dismissible: s, title: n })
                    : l
                ))
              : this.addToast({ title: n, ...r, dismissible: s, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            i,
            s = r
              .then(async (c) => {
                if (((i = ["resolve", c]), O.isValidElement(c)))
                  (o = !1), this.create({ id: n, type: "default", message: c });
                else if (Tw(c) && !c.ok) {
                  o = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${c.status}`)
                        : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${c.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: d,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(c)
                        : t.success,
                    d =
                      typeof t.description == "function"
                        ? await t.description(c)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: d,
                  });
                }
              })
              .catch(async (c) => {
                if (((i = ["reject", c]), t.error !== void 0)) {
                  o = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(c) : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(c)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: d,
                  });
                }
              })
              .finally(() => {
                var c;
                o && (this.dismiss(n), (n = void 0)),
                  (c = t.finally) == null || c.call(t);
              }),
            l = () =>
              new Promise((c, u) =>
                s.then(() => (i[0] === "reject" ? u(i[1]) : c(i[1]))).catch(u)
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: l }
            : Object.assign(n, { unwrap: l });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || pc++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  Ke = new kw(),
  Pw = (e, t) => {
    let n = (t == null ? void 0 : t.id) || pc++;
    return Ke.addToast({ title: e, ...t, id: n }), n;
  },
  Tw = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  Rw = Pw,
  Ow = () => Ke.toasts,
  Mw = () => Ke.getActiveToasts();
Object.assign(
  Rw,
  {
    success: Ke.success,
    info: Ke.info,
    warning: Ke.warning,
    error: Ke.error,
    custom: Ke.custom,
    message: Ke.message,
    promise: Ke.promise,
    dismiss: Ke.dismiss,
    loading: Ke.loading,
  },
  { getHistory: Ow, getToasts: Mw }
);
function Aw(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
Aw(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function rs(e) {
  return e.label !== void 0;
}
var Iw = 3,
  _w = "32px",
  Lw = "16px",
  yf = 4e3,
  Dw = 356,
  zw = 14,
  Fw = 20,
  $w = 200;
function bt(...e) {
  return e.filter(Boolean).join(" ");
}
function Uw(e) {
  let [t, n] = e.split("-"),
    r = [];
  return t && r.push(t), n && r.push(n), r;
}
var Bw = (e) => {
  var t, n, r, o, i, s, l, c, u, d, f;
  let {
      invert: m,
      toast: p,
      unstyled: b,
      interacting: x,
      setHeights: w,
      visibleToasts: g,
      heights: h,
      index: y,
      toasts: S,
      expanded: N,
      removeToast: C,
      defaultRichColors: j,
      closeButton: P,
      style: A,
      cancelButtonStyle: M,
      actionButtonStyle: $,
      className: L = "",
      descriptionClassName: G = "",
      duration: I,
      position: K,
      gap: z,
      loadingIcon: V,
      expandByDefault: k,
      classNames: T,
      icons: _,
      closeButtonAriaLabel: W = "Close toast",
      pauseWhenPageIsHidden: F,
    } = e,
    [Y, q] = O.useState(null),
    [we, Me] = O.useState(null),
    [te, Cr] = O.useState(!1),
    [dn, qn] = O.useState(!1),
    [fn, jr] = O.useState(!1),
    [pn, Ii] = O.useState(!1),
    [Ta, _i] = O.useState(!1),
    [Ra, Co] = O.useState(0),
    [Er, Vu] = O.useState(0),
    jo = O.useRef(p.duration || I || yf),
    Wu = O.useRef(null),
    Zn = O.useRef(null),
    My = y === 0,
    Ay = y + 1 <= g,
    lt = p.type,
    kr = p.dismissible !== !1,
    Iy = p.className || "",
    _y = p.descriptionClassName || "",
    Li = O.useMemo(
      () => h.findIndex((U) => U.toastId === p.id) || 0,
      [h, p.id]
    ),
    Ly = O.useMemo(() => {
      var U;
      return (U = p.closeButton) != null ? U : P;
    }, [p.closeButton, P]),
    Hu = O.useMemo(() => p.duration || I || yf, [p.duration, I]),
    Oa = O.useRef(0),
    Pr = O.useRef(0),
    Gu = O.useRef(0),
    Tr = O.useRef(null),
    [Dy, zy] = K.split("-"),
    Qu = O.useMemo(
      () => h.reduce((U, re, ce) => (ce >= Li ? U : U + re.height), 0),
      [h, Li]
    ),
    Ku = Ew(),
    Fy = p.invert || m,
    Ma = lt === "loading";
  (Pr.current = O.useMemo(() => Li * z + Qu, [Li, Qu])),
    O.useEffect(() => {
      jo.current = Hu;
    }, [Hu]),
    O.useEffect(() => {
      Cr(!0);
    }, []),
    O.useEffect(() => {
      let U = Zn.current;
      if (U) {
        let re = U.getBoundingClientRect().height;
        return (
          Vu(re),
          w((ce) => [
            { toastId: p.id, height: re, position: p.position },
            ...ce,
          ]),
          () => w((ce) => ce.filter((yt) => yt.toastId !== p.id))
        );
      }
    }, [w, p.id]),
    O.useLayoutEffect(() => {
      if (!te) return;
      let U = Zn.current,
        re = U.style.height;
      U.style.height = "auto";
      let ce = U.getBoundingClientRect().height;
      (U.style.height = re),
        Vu(ce),
        w((yt) =>
          yt.find((vt) => vt.toastId === p.id)
            ? yt.map((vt) => (vt.toastId === p.id ? { ...vt, height: ce } : vt))
            : [{ toastId: p.id, height: ce, position: p.position }, ...yt]
        );
    }, [te, p.title, p.description, w, p.id]);
  let mn = O.useCallback(() => {
    qn(!0),
      Co(Pr.current),
      w((U) => U.filter((re) => re.toastId !== p.id)),
      setTimeout(() => {
        C(p);
      }, $w);
  }, [p, C, w, Pr]);
  O.useEffect(() => {
    if (
      (p.promise && lt === "loading") ||
      p.duration === 1 / 0 ||
      p.type === "loading"
    )
      return;
    let U;
    return (
      N || x || (F && Ku)
        ? (() => {
            if (Gu.current < Oa.current) {
              let re = new Date().getTime() - Oa.current;
              jo.current = jo.current - re;
            }
            Gu.current = new Date().getTime();
          })()
        : jo.current !== 1 / 0 &&
          ((Oa.current = new Date().getTime()),
          (U = setTimeout(() => {
            var re;
            (re = p.onAutoClose) == null || re.call(p, p), mn();
          }, jo.current))),
      () => clearTimeout(U)
    );
  }, [N, x, p, lt, F, Ku, mn]),
    O.useEffect(() => {
      p.delete && mn();
    }, [mn, p.delete]);
  function $y() {
    var U, re, ce;
    return _ != null && _.loading
      ? O.createElement(
          "div",
          {
            className: bt(
              T == null ? void 0 : T.loader,
              (U = p == null ? void 0 : p.classNames) == null
                ? void 0
                : U.loader,
              "sonner-loader"
            ),
            "data-visible": lt === "loading",
          },
          _.loading
        )
      : V
      ? O.createElement(
          "div",
          {
            className: bt(
              T == null ? void 0 : T.loader,
              (re = p == null ? void 0 : p.classNames) == null
                ? void 0
                : re.loader,
              "sonner-loader"
            ),
            "data-visible": lt === "loading",
          },
          V
        )
      : O.createElement(ww, {
          className: bt(
            T == null ? void 0 : T.loader,
            (ce = p == null ? void 0 : p.classNames) == null
              ? void 0
              : ce.loader
          ),
          visible: lt === "loading",
        });
  }
  return O.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Zn,
      className: bt(
        L,
        Iy,
        T == null ? void 0 : T.toast,
        (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast,
        T == null ? void 0 : T.default,
        T == null ? void 0 : T[lt],
        (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[lt]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = p.richColors) != null ? r : j,
      "data-styled": !(p.jsx || p.unstyled || b),
      "data-mounted": te,
      "data-promise": !!p.promise,
      "data-swiped": Ta,
      "data-removed": dn,
      "data-visible": Ay,
      "data-y-position": Dy,
      "data-x-position": zy,
      "data-index": y,
      "data-front": My,
      "data-swiping": fn,
      "data-dismissible": kr,
      "data-type": lt,
      "data-invert": Fy,
      "data-swipe-out": pn,
      "data-swipe-direction": we,
      "data-expanded": !!(N || (k && te)),
      style: {
        "--index": y,
        "--toasts-before": y,
        "--z-index": S.length - y,
        "--offset": `${dn ? Ra : Pr.current}px`,
        "--initial-height": k ? "auto" : `${Er}px`,
        ...A,
        ...p.style,
      },
      onDragEnd: () => {
        jr(!1), q(null), (Tr.current = null);
      },
      onPointerDown: (U) => {
        Ma ||
          !kr ||
          ((Wu.current = new Date()),
          Co(Pr.current),
          U.target.setPointerCapture(U.pointerId),
          U.target.tagName !== "BUTTON" &&
            (jr(!0), (Tr.current = { x: U.clientX, y: U.clientY })));
      },
      onPointerUp: () => {
        var U, re, ce, yt;
        if (pn || !kr) return;
        Tr.current = null;
        let vt = Number(
            ((U = Zn.current) == null
              ? void 0
              : U.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          hn = Number(
            ((re = Zn.current) == null
              ? void 0
              : re.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          Jn =
            new Date().getTime() -
            ((ce = Wu.current) == null ? void 0 : ce.getTime()),
          xt = Y === "x" ? vt : hn,
          gn = Math.abs(xt) / Jn;
        if (Math.abs(xt) >= Fw || gn > 0.11) {
          Co(Pr.current),
            (yt = p.onDismiss) == null || yt.call(p, p),
            Me(
              Y === "x" ? (vt > 0 ? "right" : "left") : hn > 0 ? "down" : "up"
            ),
            mn(),
            Ii(!0),
            _i(!1);
          return;
        }
        jr(!1), q(null);
      },
      onPointerMove: (U) => {
        var re, ce, yt, vt;
        if (
          !Tr.current ||
          !kr ||
          ((re = window.getSelection()) == null
            ? void 0
            : re.toString().length) > 0
        )
          return;
        let hn = U.clientY - Tr.current.y,
          Jn = U.clientX - Tr.current.x,
          xt = (ce = e.swipeDirections) != null ? ce : Uw(K);
        !Y &&
          (Math.abs(Jn) > 1 || Math.abs(hn) > 1) &&
          q(Math.abs(Jn) > Math.abs(hn) ? "x" : "y");
        let gn = { x: 0, y: 0 };
        Y === "y"
          ? (xt.includes("top") || xt.includes("bottom")) &&
            ((xt.includes("top") && hn < 0) ||
              (xt.includes("bottom") && hn > 0)) &&
            (gn.y = hn)
          : Y === "x" &&
            (xt.includes("left") || xt.includes("right")) &&
            ((xt.includes("left") && Jn < 0) ||
              (xt.includes("right") && Jn > 0)) &&
            (gn.x = Jn),
          (Math.abs(gn.x) > 0 || Math.abs(gn.y) > 0) && _i(!0),
          (yt = Zn.current) == null ||
            yt.style.setProperty("--swipe-amount-x", `${gn.x}px`),
          (vt = Zn.current) == null ||
            vt.style.setProperty("--swipe-amount-y", `${gn.y}px`);
      },
    },
    Ly && !p.jsx
      ? O.createElement(
          "button",
          {
            "aria-label": W,
            "data-disabled": Ma,
            "data-close-button": !0,
            onClick:
              Ma || !kr
                ? () => {}
                : () => {
                    var U;
                    mn(), (U = p.onDismiss) == null || U.call(p, p);
                  },
            className: bt(
              T == null ? void 0 : T.closeButton,
              (o = p == null ? void 0 : p.classNames) == null
                ? void 0
                : o.closeButton
            ),
          },
          (i = _ == null ? void 0 : _.close) != null ? i : jw
        )
      : null,
    p.jsx || v.isValidElement(p.title)
      ? p.jsx
        ? p.jsx
        : typeof p.title == "function"
        ? p.title()
        : p.title
      : O.createElement(
          O.Fragment,
          null,
          lt || p.icon || p.promise
            ? O.createElement(
                "div",
                {
                  "data-icon": "",
                  className: bt(
                    T == null ? void 0 : T.icon,
                    (s = p == null ? void 0 : p.classNames) == null
                      ? void 0
                      : s.icon
                  ),
                },
                p.promise || (p.type === "loading" && !p.icon)
                  ? p.icon || $y()
                  : null,
                p.type !== "loading"
                  ? p.icon || (_ == null ? void 0 : _[lt]) || vw(lt)
                  : null
              )
            : null,
          O.createElement(
            "div",
            {
              "data-content": "",
              className: bt(
                T == null ? void 0 : T.content,
                (l = p == null ? void 0 : p.classNames) == null
                  ? void 0
                  : l.content
              ),
            },
            O.createElement(
              "div",
              {
                "data-title": "",
                className: bt(
                  T == null ? void 0 : T.title,
                  (c = p == null ? void 0 : p.classNames) == null
                    ? void 0
                    : c.title
                ),
              },
              typeof p.title == "function" ? p.title() : p.title
            ),
            p.description
              ? O.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: bt(
                      G,
                      _y,
                      T == null ? void 0 : T.description,
                      (u = p == null ? void 0 : p.classNames) == null
                        ? void 0
                        : u.description
                    ),
                  },
                  typeof p.description == "function"
                    ? p.description()
                    : p.description
                )
              : null
          ),
          v.isValidElement(p.cancel)
            ? p.cancel
            : p.cancel && rs(p.cancel)
            ? O.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: p.cancelButtonStyle || M,
                  onClick: (U) => {
                    var re, ce;
                    rs(p.cancel) &&
                      kr &&
                      ((ce = (re = p.cancel).onClick) == null || ce.call(re, U),
                      mn());
                  },
                  className: bt(
                    T == null ? void 0 : T.cancelButton,
                    (d = p == null ? void 0 : p.classNames) == null
                      ? void 0
                      : d.cancelButton
                  ),
                },
                p.cancel.label
              )
            : null,
          v.isValidElement(p.action)
            ? p.action
            : p.action && rs(p.action)
            ? O.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: p.actionButtonStyle || $,
                  onClick: (U) => {
                    var re, ce;
                    rs(p.action) &&
                      ((ce = (re = p.action).onClick) == null || ce.call(re, U),
                      !U.defaultPrevented && mn());
                  },
                  className: bt(
                    T == null ? void 0 : T.actionButton,
                    (f = p == null ? void 0 : p.classNames) == null
                      ? void 0
                      : f.actionButton
                  ),
                },
                p.action.label
              )
            : null
        )
  );
};
function vf() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function Vw(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, o) => {
      let i = o === 1,
        s = i ? "--mobile-offset" : "--offset",
        l = i ? Lw : _w;
      function c(u) {
        ["top", "right", "bottom", "left"].forEach((d) => {
          n[`${s}-${d}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? c(r)
        : typeof r == "object"
        ? ["top", "right", "bottom", "left"].forEach((u) => {
            r[u] === void 0
              ? (n[`${s}-${u}`] = l)
              : (n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]);
          })
        : c(l);
    }),
    n
  );
}
var Ww = v.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: o = ["altKey", "KeyT"],
      expand: i,
      closeButton: s,
      className: l,
      offset: c,
      mobileOffset: u,
      theme: d = "light",
      richColors: f,
      duration: m,
      style: p,
      visibleToasts: b = Iw,
      toastOptions: x,
      dir: w = vf(),
      gap: g = zw,
      loadingIcon: h,
      icons: y,
      containerAriaLabel: S = "Notifications",
      pauseWhenPageIsHidden: N,
    } = e,
    [C, j] = O.useState([]),
    P = O.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(C.filter((F) => F.position).map((F) => F.position))
          )
        ),
      [C, r]
    ),
    [A, M] = O.useState([]),
    [$, L] = O.useState(!1),
    [G, I] = O.useState(!1),
    [K, z] = O.useState(
      d !== "system"
        ? d
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    V = O.useRef(null),
    k = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    T = O.useRef(null),
    _ = O.useRef(!1),
    W = O.useCallback((F) => {
      j((Y) => {
        var q;
        return (
          ((q = Y.find((we) => we.id === F.id)) != null && q.delete) ||
            Ke.dismiss(F.id),
          Y.filter(({ id: we }) => we !== F.id)
        );
      });
    }, []);
  return (
    O.useEffect(
      () =>
        Ke.subscribe((F) => {
          if (F.dismiss) {
            j((Y) => Y.map((q) => (q.id === F.id ? { ...q, delete: !0 } : q)));
            return;
          }
          setTimeout(() => {
            dh.flushSync(() => {
              j((Y) => {
                let q = Y.findIndex((we) => we.id === F.id);
                return q !== -1
                  ? [...Y.slice(0, q), { ...Y[q], ...F }, ...Y.slice(q + 1)]
                  : [F, ...Y];
              });
            });
          });
        }),
      []
    ),
    O.useEffect(() => {
      if (d !== "system") {
        z(d);
        return;
      }
      if (
        (d === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? z("dark")
            : z("light")),
        typeof window > "u")
      )
        return;
      let F = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        F.addEventListener("change", ({ matches: Y }) => {
          z(Y ? "dark" : "light");
        });
      } catch {
        F.addListener(({ matches: q }) => {
          try {
            z(q ? "dark" : "light");
          } catch (we) {
            console.error(we);
          }
        });
      }
    }, [d]),
    O.useEffect(() => {
      C.length <= 1 && L(!1);
    }, [C]),
    O.useEffect(() => {
      let F = (Y) => {
        var q, we;
        o.every((Me) => Y[Me] || Y.code === Me) &&
          (L(!0), (q = V.current) == null || q.focus()),
          Y.code === "Escape" &&
            (document.activeElement === V.current ||
              ((we = V.current) != null &&
                we.contains(document.activeElement))) &&
            L(!1);
      };
      return (
        document.addEventListener("keydown", F),
        () => document.removeEventListener("keydown", F)
      );
    }, [o]),
    O.useEffect(() => {
      if (V.current)
        return () => {
          T.current &&
            (T.current.focus({ preventScroll: !0 }),
            (T.current = null),
            (_.current = !1));
        };
    }, [V.current]),
    O.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${S} ${k}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      P.map((F, Y) => {
        var q;
        let [we, Me] = F.split("-");
        return C.length
          ? O.createElement(
              "ol",
              {
                key: F,
                dir: w === "auto" ? vf() : w,
                tabIndex: -1,
                ref: V,
                className: l,
                "data-sonner-toaster": !0,
                "data-theme": K,
                "data-y-position": we,
                "data-lifted": $ && C.length > 1 && !i,
                "data-x-position": Me,
                style: {
                  "--front-toast-height": `${
                    ((q = A[0]) == null ? void 0 : q.height) || 0
                  }px`,
                  "--width": `${Dw}px`,
                  "--gap": `${g}px`,
                  ...p,
                  ...Vw(c, u),
                },
                onBlur: (te) => {
                  _.current &&
                    !te.currentTarget.contains(te.relatedTarget) &&
                    ((_.current = !1),
                    T.current &&
                      (T.current.focus({ preventScroll: !0 }),
                      (T.current = null)));
                },
                onFocus: (te) => {
                  (te.target instanceof HTMLElement &&
                    te.target.dataset.dismissible === "false") ||
                    _.current ||
                    ((_.current = !0), (T.current = te.relatedTarget));
                },
                onMouseEnter: () => L(!0),
                onMouseMove: () => L(!0),
                onMouseLeave: () => {
                  G || L(!1);
                },
                onDragEnd: () => L(!1),
                onPointerDown: (te) => {
                  (te.target instanceof HTMLElement &&
                    te.target.dataset.dismissible === "false") ||
                    I(!0);
                },
                onPointerUp: () => I(!1),
              },
              C.filter(
                (te) => (!te.position && Y === 0) || te.position === F
              ).map((te, Cr) => {
                var dn, qn;
                return O.createElement(Bw, {
                  key: te.id,
                  icons: y,
                  index: Cr,
                  toast: te,
                  defaultRichColors: f,
                  duration:
                    (dn = x == null ? void 0 : x.duration) != null ? dn : m,
                  className: x == null ? void 0 : x.className,
                  descriptionClassName:
                    x == null ? void 0 : x.descriptionClassName,
                  invert: n,
                  visibleToasts: b,
                  closeButton:
                    (qn = x == null ? void 0 : x.closeButton) != null ? qn : s,
                  interacting: G,
                  position: F,
                  style: x == null ? void 0 : x.style,
                  unstyled: x == null ? void 0 : x.unstyled,
                  classNames: x == null ? void 0 : x.classNames,
                  cancelButtonStyle: x == null ? void 0 : x.cancelButtonStyle,
                  actionButtonStyle: x == null ? void 0 : x.actionButtonStyle,
                  removeToast: W,
                  toasts: C.filter((fn) => fn.position == te.position),
                  heights: A.filter((fn) => fn.position == te.position),
                  setHeights: M,
                  expandByDefault: i,
                  gap: g,
                  loadingIcon: h,
                  expanded: $,
                  pauseWhenPageIsHidden: N,
                  swipeDirections: e.swipeDirections,
                });
              })
            )
          : null;
      })
    )
  );
});
const Hw = ({ ...e }) => {
  const { theme: t = "system" } = yw();
  return a.jsx(Ww, {
    theme: t,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...e,
  });
};
var Gw = Pc[" useId ".trim().toString()] || (() => {}),
  Qw = 0;
function ug(e) {
  const [t, n] = v.useState(Gw());
  return (
    an(() => {
      e || n((r) => r ?? String(Qw++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
const Kw = ["top", "right", "bottom", "left"],
  Wn = Math.min,
  tt = Math.max,
  Qs = Math.round,
  os = Math.floor,
  Vt = (e) => ({ x: e, y: e }),
  Yw = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Xw = { start: "end", end: "start" };
function mc(e, t, n) {
  return tt(e, Wn(t, n));
}
function ln(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function cn(e) {
  return e.split("-")[0];
}
function bo(e) {
  return e.split("-")[1];
}
function Tu(e) {
  return e === "x" ? "y" : "x";
}
function Ru(e) {
  return e === "y" ? "height" : "width";
}
const qw = new Set(["top", "bottom"]);
function $t(e) {
  return qw.has(cn(e)) ? "y" : "x";
}
function Ou(e) {
  return Tu($t(e));
}
function Zw(e, t, n) {
  n === void 0 && (n = !1);
  const r = bo(e),
    o = Ou(e),
    i = Ru(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (s = Ks(s)), [s, Ks(s)];
}
function Jw(e) {
  const t = Ks(e);
  return [hc(e), t, hc(t)];
}
function hc(e) {
  return e.replace(/start|end/g, (t) => Xw[t]);
}
const xf = ["left", "right"],
  wf = ["right", "left"],
  e2 = ["top", "bottom"],
  t2 = ["bottom", "top"];
function n2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? wf : xf) : t ? xf : wf;
    case "left":
    case "right":
      return t ? e2 : t2;
    default:
      return [];
  }
}
function r2(e, t, n, r) {
  const o = bo(e);
  let i = n2(cn(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(hc)))), i
  );
}
function Ks(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Yw[t]);
}
function o2(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function dg(e) {
  return typeof e != "number"
    ? o2(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ys(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function bf(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = $t(t),
    s = Ou(t),
    l = Ru(s),
    c = cn(t),
    u = i === "y",
    d = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    m = r[l] / 2 - o[l] / 2;
  let p;
  switch (c) {
    case "top":
      p = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      p = { x: d, y: r.y + r.height };
      break;
    case "right":
      p = { x: r.x + r.width, y: f };
      break;
    case "left":
      p = { x: r.x - o.width, y: f };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (bo(t)) {
    case "start":
      p[s] -= m * (n && u ? -1 : 1);
      break;
    case "end":
      p[s] += m * (n && u ? -1 : 1);
      break;
  }
  return p;
}
const i2 = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    l = i.filter(Boolean),
    c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: f } = bf(u, r, c),
    m = r,
    p = {},
    b = 0;
  for (let x = 0; x < l.length; x++) {
    const { name: w, fn: g } = l[x],
      {
        x: h,
        y,
        data: S,
        reset: N,
      } = await g({
        x: d,
        y: f,
        initialPlacement: r,
        placement: m,
        strategy: o,
        middlewareData: p,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (d = h ?? d),
      (f = y ?? f),
      (p = { ...p, [w]: { ...p[w], ...S } }),
      N &&
        b <= 50 &&
        (b++,
        typeof N == "object" &&
          (N.placement && (m = N.placement),
          N.rects &&
            (u =
              N.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : N.rects),
          ({ x: d, y: f } = bf(u, m, c))),
        (x = -1));
  }
  return { x: d, y: f, placement: m, strategy: o, middlewareData: p };
};
async function mi(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: l, strategy: c } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: m = !1,
      padding: p = 0,
    } = ln(t, e),
    b = dg(p),
    w = l[m ? (f === "floating" ? "reference" : "floating") : f],
    g = Ys(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: c,
      })
    ),
    h =
      f === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    y = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(l.floating)),
    S = (await (i.isElement == null ? void 0 : i.isElement(y)))
      ? (await (i.getScale == null ? void 0 : i.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    N = Ys(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: h,
            offsetParent: y,
            strategy: c,
          })
        : h
    );
  return {
    top: (g.top - N.top + b.top) / S.y,
    bottom: (N.bottom - g.bottom + b.bottom) / S.y,
    left: (g.left - N.left + b.left) / S.x,
    right: (N.right - g.right + b.right) / S.x,
  };
}
const s2 = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: l,
          middlewareData: c,
        } = t,
        { element: u, padding: d = 0 } = ln(e, t) || {};
      if (u == null) return {};
      const f = dg(d),
        m = { x: n, y: r },
        p = Ou(o),
        b = Ru(p),
        x = await s.getDimensions(u),
        w = p === "y",
        g = w ? "top" : "left",
        h = w ? "bottom" : "right",
        y = w ? "clientHeight" : "clientWidth",
        S = i.reference[b] + i.reference[p] - m[p] - i.floating[b],
        N = m[p] - i.reference[p],
        C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let j = C ? C[y] : 0;
      (!j || !(await (s.isElement == null ? void 0 : s.isElement(C)))) &&
        (j = l.floating[y] || i.floating[b]);
      const P = S / 2 - N / 2,
        A = j / 2 - x[b] / 2 - 1,
        M = Wn(f[g], A),
        $ = Wn(f[h], A),
        L = M,
        G = j - x[b] - $,
        I = j / 2 - x[b] / 2 + P,
        K = mc(L, I, G),
        z =
          !c.arrow &&
          bo(o) != null &&
          I !== K &&
          i.reference[b] / 2 - (I < L ? M : $) - x[b] / 2 < 0,
        V = z ? (I < L ? I - L : I - G) : 0;
      return {
        [p]: m[p] + V,
        data: {
          [p]: K,
          centerOffset: I - K - V,
          ...(z && { alignmentOffset: V }),
        },
        reset: z,
      };
    },
  }),
  a2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: l,
              platform: c,
              elements: u,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: f = !0,
              fallbackPlacements: m,
              fallbackStrategy: p = "bestFit",
              fallbackAxisSideDirection: b = "none",
              flipAlignment: x = !0,
              ...w
            } = ln(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const g = cn(o),
            h = $t(l),
            y = cn(l) === l,
            S = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)),
            N = m || (y || !x ? [Ks(l)] : Jw(l)),
            C = b !== "none";
          !m && C && N.push(...r2(l, x, b, S));
          const j = [l, ...N],
            P = await mi(t, w),
            A = [];
          let M = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((d && A.push(P[g]), f)) {
            const I = Zw(o, s, S);
            A.push(P[I[0]], P[I[1]]);
          }
          if (
            ((M = [...M, { placement: o, overflows: A }]),
            !A.every((I) => I <= 0))
          ) {
            var $, L;
            const I = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1,
              K = j[I];
            if (
              K &&
              (!(f === "alignment" ? h !== $t(K) : !1) ||
                M.every((k) => k.overflows[0] > 0 && $t(k.placement) === h))
            )
              return {
                data: { index: I, overflows: M },
                reset: { placement: K },
              };
            let z =
              (L = M.filter((V) => V.overflows[0] <= 0).sort(
                (V, k) => V.overflows[1] - k.overflows[1]
              )[0]) == null
                ? void 0
                : L.placement;
            if (!z)
              switch (p) {
                case "bestFit": {
                  var G;
                  const V =
                    (G = M.filter((k) => {
                      if (C) {
                        const T = $t(k.placement);
                        return T === h || T === "y";
                      }
                      return !0;
                    })
                      .map((k) => [
                        k.placement,
                        k.overflows
                          .filter((T) => T > 0)
                          .reduce((T, _) => T + _, 0),
                      ])
                      .sort((k, T) => k[1] - T[1])[0]) == null
                      ? void 0
                      : G[0];
                  V && (z = V);
                  break;
                }
                case "initialPlacement":
                  z = l;
                  break;
              }
            if (o !== z) return { reset: { placement: z } };
          }
          return {};
        },
      }
    );
  };
function Sf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Nf(e) {
  return Kw.some((t) => e[t] >= 0);
}
const l2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...o } = ln(e, t);
          switch (r) {
            case "referenceHidden": {
              const i = await mi(t, { ...o, elementContext: "reference" }),
                s = Sf(i, n.reference);
              return {
                data: { referenceHiddenOffsets: s, referenceHidden: Nf(s) },
              };
            }
            case "escaped": {
              const i = await mi(t, { ...o, altBoundary: !0 }),
                s = Sf(i, n.floating);
              return { data: { escapedOffsets: s, escaped: Nf(s) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  fg = new Set(["left", "top"]);
async function c2(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = cn(n),
    l = bo(n),
    c = $t(n) === "y",
    u = fg.has(s) ? -1 : 1,
    d = i && c ? -1 : 1,
    f = ln(t, e);
  let {
    mainAxis: m,
    crossAxis: p,
    alignmentAxis: b,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    l && typeof b == "number" && (p = l === "end" ? b * -1 : b),
    c ? { x: p * d, y: m * u } : { x: m * u, y: p * d }
  );
}
const u2 = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: l } = t,
            c = await c2(t, e);
          return s === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + c.x, y: i + c.y, data: { ...c, placement: s } };
        },
      }
    );
  },
  d2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: l = {
                fn: (w) => {
                  let { x: g, y: h } = w;
                  return { x: g, y: h };
                },
              },
              ...c
            } = ln(e, t),
            u = { x: n, y: r },
            d = await mi(t, c),
            f = $t(cn(o)),
            m = Tu(f);
          let p = u[m],
            b = u[f];
          if (i) {
            const w = m === "y" ? "top" : "left",
              g = m === "y" ? "bottom" : "right",
              h = p + d[w],
              y = p - d[g];
            p = mc(h, p, y);
          }
          if (s) {
            const w = f === "y" ? "top" : "left",
              g = f === "y" ? "bottom" : "right",
              h = b + d[w],
              y = b - d[g];
            b = mc(h, b, y);
          }
          const x = l.fn({ ...t, [m]: p, [f]: b });
          return {
            ...x,
            data: { x: x.x - n, y: x.y - r, enabled: { [m]: i, [f]: s } },
          };
        },
      }
    );
  },
  f2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: l = 0, mainAxis: c = !0, crossAxis: u = !0 } = ln(e, t),
            d = { x: n, y: r },
            f = $t(o),
            m = Tu(f);
          let p = d[m],
            b = d[f];
          const x = ln(l, t),
            w =
              typeof x == "number"
                ? { mainAxis: x, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...x };
          if (c) {
            const y = m === "y" ? "height" : "width",
              S = i.reference[m] - i.floating[y] + w.mainAxis,
              N = i.reference[m] + i.reference[y] - w.mainAxis;
            p < S ? (p = S) : p > N && (p = N);
          }
          if (u) {
            var g, h;
            const y = m === "y" ? "width" : "height",
              S = fg.has(cn(o)),
              N =
                i.reference[f] -
                i.floating[y] +
                ((S && ((g = s.offset) == null ? void 0 : g[f])) || 0) +
                (S ? 0 : w.crossAxis),
              C =
                i.reference[f] +
                i.reference[y] +
                (S ? 0 : ((h = s.offset) == null ? void 0 : h[f]) || 0) -
                (S ? w.crossAxis : 0);
            b < N ? (b = N) : b > C && (b = C);
          }
          return { [m]: p, [f]: b };
        },
      }
    );
  },
  p2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: l } = t,
            { apply: c = () => {}, ...u } = ln(e, t),
            d = await mi(t, u),
            f = cn(o),
            m = bo(o),
            p = $t(o) === "y",
            { width: b, height: x } = i.floating;
          let w, g;
          f === "top" || f === "bottom"
            ? ((w = f),
              (g =
                m ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((g = f), (w = m === "end" ? "top" : "bottom"));
          const h = x - d.top - d.bottom,
            y = b - d.left - d.right,
            S = Wn(x - d[w], h),
            N = Wn(b - d[g], y),
            C = !t.middlewareData.shift;
          let j = S,
            P = N;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (P = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (j = h),
            C && !m)
          ) {
            const M = tt(d.left, 0),
              $ = tt(d.right, 0),
              L = tt(d.top, 0),
              G = tt(d.bottom, 0);
            p
              ? (P = b - 2 * (M !== 0 || $ !== 0 ? M + $ : tt(d.left, d.right)))
              : (j =
                  x - 2 * (L !== 0 || G !== 0 ? L + G : tt(d.top, d.bottom)));
          }
          await c({ ...t, availableWidth: P, availableHeight: j });
          const A = await s.getDimensions(l.floating);
          return b !== A.width || x !== A.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function wa() {
  return typeof window < "u";
}
function So(e) {
  return pg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ot(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Gt(e) {
  var t;
  return (t = (pg(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function pg(e) {
  return wa() ? e instanceof Node || e instanceof ot(e).Node : !1;
}
function Ot(e) {
  return wa() ? e instanceof Element || e instanceof ot(e).Element : !1;
}
function Ht(e) {
  return wa() ? e instanceof HTMLElement || e instanceof ot(e).HTMLElement : !1;
}
function Cf(e) {
  return !wa() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ot(e).ShadowRoot;
}
const m2 = new Set(["inline", "contents"]);
function Ri(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Mt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !m2.has(o);
}
const h2 = new Set(["table", "td", "th"]);
function g2(e) {
  return h2.has(So(e));
}
const y2 = [":popover-open", ":modal"];
function ba(e) {
  return y2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const v2 = ["transform", "translate", "scale", "rotate", "perspective"],
  x2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  w2 = ["paint", "layout", "strict", "content"];
function Mu(e) {
  const t = Au(),
    n = Ot(e) ? Mt(e) : e;
  return (
    v2.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    x2.some((r) => (n.willChange || "").includes(r)) ||
    w2.some((r) => (n.contain || "").includes(r))
  );
}
function b2(e) {
  let t = Hn(e);
  for (; Ht(t) && !mo(t); ) {
    if (Mu(t)) return t;
    if (ba(t)) return null;
    t = Hn(t);
  }
  return null;
}
function Au() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const S2 = new Set(["html", "body", "#document"]);
function mo(e) {
  return S2.has(So(e));
}
function Mt(e) {
  return ot(e).getComputedStyle(e);
}
function Sa(e) {
  return Ot(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Hn(e) {
  if (So(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Cf(e) && e.host) || Gt(e);
  return Cf(t) ? t.host : t;
}
function mg(e) {
  const t = Hn(e);
  return mo(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Ht(t) && Ri(t)
    ? t
    : mg(t);
}
function hi(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = mg(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = ot(o);
  if (i) {
    const l = gc(s);
    return t.concat(
      s,
      s.visualViewport || [],
      Ri(o) ? o : [],
      l && n ? hi(l) : []
    );
  }
  return t.concat(o, hi(o, [], n));
}
function gc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function hg(e) {
  const t = Mt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Ht(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    l = Qs(n) !== i || Qs(r) !== s;
  return l && ((n = i), (r = s)), { width: n, height: r, $: l };
}
function Iu(e) {
  return Ot(e) ? e : e.contextElement;
}
function qr(e) {
  const t = Iu(e);
  if (!Ht(t)) return Vt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = hg(t);
  let s = (i ? Qs(n.width) : n.width) / r,
    l = (i ? Qs(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: s, y: l }
  );
}
const N2 = Vt(0);
function gg(e) {
  const t = ot(e);
  return !Au() || !t.visualViewport
    ? N2
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function C2(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== ot(e)) ? !1 : t;
}
function vr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = Iu(e);
  let s = Vt(1);
  t && (r ? Ot(r) && (s = qr(r)) : (s = qr(e)));
  const l = C2(i, n, r) ? gg(i) : Vt(0);
  let c = (o.left + l.x) / s.x,
    u = (o.top + l.y) / s.y,
    d = o.width / s.x,
    f = o.height / s.y;
  if (i) {
    const m = ot(i),
      p = r && Ot(r) ? ot(r) : r;
    let b = m,
      x = gc(b);
    for (; x && r && p !== b; ) {
      const w = qr(x),
        g = x.getBoundingClientRect(),
        h = Mt(x),
        y = g.left + (x.clientLeft + parseFloat(h.paddingLeft)) * w.x,
        S = g.top + (x.clientTop + parseFloat(h.paddingTop)) * w.y;
      (c *= w.x),
        (u *= w.y),
        (d *= w.x),
        (f *= w.y),
        (c += y),
        (u += S),
        (b = ot(x)),
        (x = gc(b));
    }
  }
  return Ys({ width: d, height: f, x: c, y: u });
}
function _u(e, t) {
  const n = Sa(e).scrollLeft;
  return t ? t.left + n : vr(Gt(e)).left + n;
}
function yg(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : _u(e, r)),
    i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function j2(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = Gt(r),
    l = t ? ba(t.floating) : !1;
  if (r === s || (l && i)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    u = Vt(1);
  const d = Vt(0),
    f = Ht(r);
  if (
    (f || (!f && !i)) &&
    ((So(r) !== "body" || Ri(s)) && (c = Sa(r)), Ht(r))
  ) {
    const p = vr(r);
    (u = qr(r)), (d.x = p.x + r.clientLeft), (d.y = p.y + r.clientTop);
  }
  const m = s && !f && !i ? yg(s, c, !0) : Vt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + d.x + m.x,
    y: n.y * u.y - c.scrollTop * u.y + d.y + m.y,
  };
}
function E2(e) {
  return Array.from(e.getClientRects());
}
function k2(e) {
  const t = Gt(e),
    n = Sa(e),
    r = e.ownerDocument.body,
    o = tt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = tt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + _u(e);
  const l = -n.scrollTop;
  return (
    Mt(r).direction === "rtl" && (s += tt(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: l }
  );
}
function P2(e, t) {
  const n = ot(e),
    r = Gt(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    c = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = Au();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (c = o.offsetTop));
  }
  return { width: i, height: s, x: l, y: c };
}
const T2 = new Set(["absolute", "fixed"]);
function R2(e, t) {
  const n = vr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Ht(e) ? qr(e) : Vt(1),
    s = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    c = o * i.x,
    u = r * i.y;
  return { width: s, height: l, x: c, y: u };
}
function jf(e, t, n) {
  let r;
  if (t === "viewport") r = P2(e, n);
  else if (t === "document") r = k2(Gt(e));
  else if (Ot(t)) r = R2(t, n);
  else {
    const o = gg(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Ys(r);
}
function vg(e, t) {
  const n = Hn(e);
  return n === t || !Ot(n) || mo(n)
    ? !1
    : Mt(n).position === "fixed" || vg(n, t);
}
function O2(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = hi(e, [], !1).filter((l) => Ot(l) && So(l) !== "body"),
    o = null;
  const i = Mt(e).position === "fixed";
  let s = i ? Hn(e) : e;
  for (; Ot(s) && !mo(s); ) {
    const l = Mt(s),
      c = Mu(s);
    !c && l.position === "fixed" && (o = null),
      (
        i
          ? !c && !o
          : (!c && l.position === "static" && !!o && T2.has(o.position)) ||
            (Ri(s) && !c && vg(e, s))
      )
        ? (r = r.filter((d) => d !== s))
        : (o = l),
      (s = Hn(s));
  }
  return t.set(e, r), r;
}
function M2(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? ba(t)
          ? []
          : O2(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = s[0],
    c = s.reduce((u, d) => {
      const f = jf(t, d, o);
      return (
        (u.top = tt(f.top, u.top)),
        (u.right = Wn(f.right, u.right)),
        (u.bottom = Wn(f.bottom, u.bottom)),
        (u.left = tt(f.left, u.left)),
        u
      );
    }, jf(t, l, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top,
  };
}
function A2(e) {
  const { width: t, height: n } = hg(e);
  return { width: t, height: n };
}
function I2(e, t, n) {
  const r = Ht(t),
    o = Gt(t),
    i = n === "fixed",
    s = vr(e, !0, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = Vt(0);
  function u() {
    c.x = _u(o);
  }
  if (r || (!r && !i))
    if (((So(t) !== "body" || Ri(o)) && (l = Sa(t)), r)) {
      const p = vr(t, !0, i, t);
      (c.x = p.x + t.clientLeft), (c.y = p.y + t.clientTop);
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? yg(o, l) : Vt(0),
    f = s.left + l.scrollLeft - c.x - d.x,
    m = s.top + l.scrollTop - c.y - d.y;
  return { x: f, y: m, width: s.width, height: s.height };
}
function ul(e) {
  return Mt(e).position === "static";
}
function Ef(e, t) {
  if (!Ht(e) || Mt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Gt(e) === n && (n = n.ownerDocument.body), n;
}
function xg(e, t) {
  const n = ot(e);
  if (ba(e)) return n;
  if (!Ht(e)) {
    let o = Hn(e);
    for (; o && !mo(o); ) {
      if (Ot(o) && !ul(o)) return o;
      o = Hn(o);
    }
    return n;
  }
  let r = Ef(e, t);
  for (; r && g2(r) && ul(r); ) r = Ef(r, t);
  return r && mo(r) && ul(r) && !Mu(r) ? n : r || b2(e) || n;
}
const _2 = async function (e) {
  const t = this.getOffsetParent || xg,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: I2(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function L2(e) {
  return Mt(e).direction === "rtl";
}
const D2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: j2,
  getDocumentElement: Gt,
  getClippingRect: M2,
  getOffsetParent: xg,
  getElementRects: _2,
  getClientRects: E2,
  getDimensions: A2,
  getScale: qr,
  isElement: Ot,
  isRTL: L2,
};
function wg(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function z2(e, t) {
  let n = null,
    r;
  const o = Gt(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function s(l, c) {
    l === void 0 && (l = !1), c === void 0 && (c = 1), i();
    const u = e.getBoundingClientRect(),
      { left: d, top: f, width: m, height: p } = u;
    if ((l || t(), !m || !p)) return;
    const b = os(f),
      x = os(o.clientWidth - (d + m)),
      w = os(o.clientHeight - (f + p)),
      g = os(d),
      y = {
        rootMargin: -b + "px " + -x + "px " + -w + "px " + -g + "px",
        threshold: tt(0, Wn(1, c)) || 1,
      };
    let S = !0;
    function N(C) {
      const j = C[0].intersectionRatio;
      if (j !== c) {
        if (!S) return s();
        j
          ? s(!1, j)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      j === 1 && !wg(u, e.getBoundingClientRect()) && s(), (S = !1);
    }
    try {
      n = new IntersectionObserver(N, { ...y, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(N, y);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function F2(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: c = !1,
    } = r,
    u = Iu(e),
    d = o || i ? [...(u ? hi(u) : []), ...hi(t)] : [];
  d.forEach((g) => {
    o && g.addEventListener("scroll", n, { passive: !0 }),
      i && g.addEventListener("resize", n);
  });
  const f = u && l ? z2(u, n) : null;
  let m = -1,
    p = null;
  s &&
    ((p = new ResizeObserver((g) => {
      let [h] = g;
      h &&
        h.target === u &&
        p &&
        (p.unobserve(t),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          var y;
          (y = p) == null || y.observe(t);
        }))),
        n();
    })),
    u && !c && p.observe(u),
    p.observe(t));
  let b,
    x = c ? vr(e) : null;
  c && w();
  function w() {
    const g = vr(e);
    x && !wg(x, g) && n(), (x = g), (b = requestAnimationFrame(w));
  }
  return (
    n(),
    () => {
      var g;
      d.forEach((h) => {
        o && h.removeEventListener("scroll", n),
          i && h.removeEventListener("resize", n);
      }),
        f == null || f(),
        (g = p) == null || g.disconnect(),
        (p = null),
        c && cancelAnimationFrame(b);
    }
  );
}
const $2 = u2,
  U2 = d2,
  B2 = a2,
  V2 = p2,
  W2 = l2,
  kf = s2,
  H2 = f2,
  G2 = (e, t, n) => {
    const r = new Map(),
      o = { platform: D2, ...n },
      i = { ...o.platform, _c: r };
    return i2(e, t, { ...o, platform: i });
  };
var Q2 = typeof document < "u",
  K2 = function () {},
  ws = Q2 ? v.useLayoutEffect : K2;
function Xs(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Xs(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Xs(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function bg(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Pf(e, t) {
  const n = bg(e);
  return Math.round(t * n) / n;
}
function dl(e) {
  const t = v.useRef(e);
  return (
    ws(() => {
      t.current = e;
    }),
    t
  );
}
function Y2(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: l = !0,
      whileElementsMounted: c,
      open: u,
    } = e,
    [d, f] = v.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [m, p] = v.useState(r);
  Xs(m, r) || p(r);
  const [b, x] = v.useState(null),
    [w, g] = v.useState(null),
    h = v.useCallback((k) => {
      k !== C.current && ((C.current = k), x(k));
    }, []),
    y = v.useCallback((k) => {
      k !== j.current && ((j.current = k), g(k));
    }, []),
    S = i || b,
    N = s || w,
    C = v.useRef(null),
    j = v.useRef(null),
    P = v.useRef(d),
    A = c != null,
    M = dl(c),
    $ = dl(o),
    L = dl(u),
    G = v.useCallback(() => {
      if (!C.current || !j.current) return;
      const k = { placement: t, strategy: n, middleware: m };
      $.current && (k.platform = $.current),
        G2(C.current, j.current, k).then((T) => {
          const _ = { ...T, isPositioned: L.current !== !1 };
          I.current &&
            !Xs(P.current, _) &&
            ((P.current = _),
            ki.flushSync(() => {
              f(_);
            }));
        });
    }, [m, t, n, $, L]);
  ws(() => {
    u === !1 &&
      P.current.isPositioned &&
      ((P.current.isPositioned = !1), f((k) => ({ ...k, isPositioned: !1 })));
  }, [u]);
  const I = v.useRef(!1);
  ws(
    () => (
      (I.current = !0),
      () => {
        I.current = !1;
      }
    ),
    []
  ),
    ws(() => {
      if ((S && (C.current = S), N && (j.current = N), S && N)) {
        if (M.current) return M.current(S, N, G);
        G();
      }
    }, [S, N, G, M, A]);
  const K = v.useMemo(
      () => ({ reference: C, floating: j, setReference: h, setFloating: y }),
      [h, y]
    ),
    z = v.useMemo(() => ({ reference: S, floating: N }), [S, N]),
    V = v.useMemo(() => {
      const k = { position: n, left: 0, top: 0 };
      if (!z.floating) return k;
      const T = Pf(z.floating, d.x),
        _ = Pf(z.floating, d.y);
      return l
        ? {
            ...k,
            transform: "translate(" + T + "px, " + _ + "px)",
            ...(bg(z.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: T, top: _ };
    }, [n, l, z.floating, d.x, d.y]);
  return v.useMemo(
    () => ({ ...d, update: G, refs: K, elements: z, floatingStyles: V }),
    [d, G, K, z, V]
  );
}
const X2 = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? kf({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? kf({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  q2 = (e, t) => ({ ...$2(e), options: [e, t] }),
  Z2 = (e, t) => ({ ...U2(e), options: [e, t] }),
  J2 = (e, t) => ({ ...H2(e), options: [e, t] }),
  eb = (e, t) => ({ ...B2(e), options: [e, t] }),
  tb = (e, t) => ({ ...V2(e), options: [e, t] }),
  nb = (e, t) => ({ ...W2(e), options: [e, t] }),
  rb = (e, t) => ({ ...X2(e), options: [e, t] });
var ob = "Arrow",
  Sg = v.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return a.jsx(ve.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : a.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Sg.displayName = ob;
var ib = Sg;
function sb(e) {
  const [t, n] = v.useState(void 0);
  return (
    an(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, l;
          if ("borderBoxSize" in i) {
            const c = i.borderBoxSize,
              u = Array.isArray(c) ? c[0] : c;
            (s = u.inlineSize), (l = u.blockSize);
          } else (s = e.offsetWidth), (l = e.offsetHeight);
          n({ width: s, height: l });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Ng = "Popper",
  [Cg, jg] = xo(Ng),
  [iC, Eg] = Cg(Ng),
  kg = "PopperAnchor",
  Pg = v.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = Eg(kg, n),
      s = v.useRef(null),
      l = gt(t, s);
    return (
      v.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : a.jsx(ve.div, { ...o, ref: l })
    );
  });
Pg.displayName = kg;
var Lu = "PopperContent",
  [ab, lb] = Cg(Lu),
  Tg = v.forwardRef((e, t) => {
    var te, Cr, dn, qn, fn, jr;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: l = 0,
        avoidCollisions: c = !0,
        collisionBoundary: u = [],
        collisionPadding: d = 0,
        sticky: f = "partial",
        hideWhenDetached: m = !1,
        updatePositionStrategy: p = "optimized",
        onPlaced: b,
        ...x
      } = e,
      w = Eg(Lu, n),
      [g, h] = v.useState(null),
      y = gt(t, (pn) => h(pn)),
      [S, N] = v.useState(null),
      C = sb(S),
      j = (C == null ? void 0 : C.width) ?? 0,
      P = (C == null ? void 0 : C.height) ?? 0,
      A = r + (i !== "center" ? "-" + i : ""),
      M =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      $ = Array.isArray(u) ? u : [u],
      L = $.length > 0,
      G = { padding: M, boundary: $.filter(ub), altBoundary: L },
      {
        refs: I,
        floatingStyles: K,
        placement: z,
        isPositioned: V,
        middlewareData: k,
      } = Y2({
        strategy: "fixed",
        placement: A,
        whileElementsMounted: (...pn) =>
          F2(...pn, { animationFrame: p === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          q2({ mainAxis: o + P, alignmentAxis: s }),
          c &&
            Z2({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? J2() : void 0,
              ...G,
            }),
          c && eb({ ...G }),
          tb({
            ...G,
            apply: ({
              elements: pn,
              rects: Ii,
              availableWidth: Ta,
              availableHeight: _i,
            }) => {
              const { width: Ra, height: Co } = Ii.reference,
                Er = pn.floating.style;
              Er.setProperty("--radix-popper-available-width", `${Ta}px`),
                Er.setProperty("--radix-popper-available-height", `${_i}px`),
                Er.setProperty("--radix-popper-anchor-width", `${Ra}px`),
                Er.setProperty("--radix-popper-anchor-height", `${Co}px`);
            },
          }),
          S && rb({ element: S, padding: l }),
          db({ arrowWidth: j, arrowHeight: P }),
          m && nb({ strategy: "referenceHidden", ...G }),
        ],
      }),
      [T, _] = Mg(z),
      W = sn(b);
    an(() => {
      V && (W == null || W());
    }, [V, W]);
    const F = (te = k.arrow) == null ? void 0 : te.x,
      Y = (Cr = k.arrow) == null ? void 0 : Cr.y,
      q = ((dn = k.arrow) == null ? void 0 : dn.centerOffset) !== 0,
      [we, Me] = v.useState();
    return (
      an(() => {
        g && Me(window.getComputedStyle(g).zIndex);
      }, [g]),
      a.jsx("div", {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: V ? K.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: we,
          "--radix-popper-transform-origin": [
            (qn = k.transformOrigin) == null ? void 0 : qn.x,
            (fn = k.transformOrigin) == null ? void 0 : fn.y,
          ].join(" "),
          ...(((jr = k.hide) == null ? void 0 : jr.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: a.jsx(ab, {
          scope: n,
          placedSide: T,
          onArrowChange: N,
          arrowX: F,
          arrowY: Y,
          shouldHideArrow: q,
          children: a.jsx(ve.div, {
            "data-side": T,
            "data-align": _,
            ...x,
            ref: y,
            style: { ...x.style, animation: V ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Tg.displayName = Lu;
var Rg = "PopperArrow",
  cb = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Og = v.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = lb(Rg, r),
      s = cb[i.placedSide];
    return a.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: a.jsx(ib, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
Og.displayName = Rg;
function ub(e) {
  return e !== null;
}
var db = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, g, h;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
      l = s ? 0 : e.arrowWidth,
      c = s ? 0 : e.arrowHeight,
      [u, d] = Mg(n),
      f = { start: "0%", center: "50%", end: "100%" }[d],
      m = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + l / 2,
      p = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + c / 2;
    let b = "",
      x = "";
    return (
      u === "bottom"
        ? ((b = s ? f : `${m}px`), (x = `${-c}px`))
        : u === "top"
        ? ((b = s ? f : `${m}px`), (x = `${r.floating.height + c}px`))
        : u === "right"
        ? ((b = `${-c}px`), (x = s ? f : `${p}px`))
        : u === "left" &&
          ((b = `${r.floating.width + c}px`), (x = s ? f : `${p}px`)),
      { data: { x: b, y: x } }
    );
  },
});
function Mg(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var fb = Pg,
  pb = Tg,
  mb = Og,
  [Na, sC] = xo("Tooltip", [jg]),
  Du = jg(),
  Ag = "TooltipProvider",
  hb = 700,
  Tf = "tooltip.open",
  [gb, Ig] = Na(Ag),
  _g = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = hb,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      s = v.useRef(!0),
      l = v.useRef(!1),
      c = v.useRef(0);
    return (
      v.useEffect(() => {
        const u = c.current;
        return () => window.clearTimeout(u);
      }, []),
      a.jsx(gb, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: v.useCallback(() => {
          window.clearTimeout(c.current), (s.current = !1);
        }, []),
        onClose: v.useCallback(() => {
          window.clearTimeout(c.current),
            (c.current = window.setTimeout(() => (s.current = !0), r));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: v.useCallback((u) => {
          l.current = u;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
_g.displayName = Ag;
var Lg = "Tooltip",
  [aC, Ca] = Na(Lg),
  yc = "TooltipTrigger",
  yb = v.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Ca(yc, n),
      i = Ig(yc, n),
      s = Du(n),
      l = v.useRef(null),
      c = gt(t, l, o.onTriggerChange),
      u = v.useRef(!1),
      d = v.useRef(!1),
      f = v.useCallback(() => (u.current = !1), []);
    return (
      v.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f]
      ),
      a.jsx(fb, {
        asChild: !0,
        ...s,
        children: a.jsx(ve.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: c,
          onPointerMove: oe(e.onPointerMove, (m) => {
            m.pointerType !== "touch" &&
              !d.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (d.current = !0));
          }),
          onPointerLeave: oe(e.onPointerLeave, () => {
            o.onTriggerLeave(), (d.current = !1);
          }),
          onPointerDown: oe(e.onPointerDown, () => {
            o.open && o.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", f, { once: !0 });
          }),
          onFocus: oe(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: oe(e.onBlur, o.onClose),
          onClick: oe(e.onClick, o.onClose),
        }),
      })
    );
  });
yb.displayName = yc;
var vb = "TooltipPortal",
  [lC, xb] = Na(vb, { forceMount: void 0 }),
  ho = "TooltipContent",
  Dg = v.forwardRef((e, t) => {
    const n = xb(ho, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      s = Ca(ho, e.__scopeTooltip);
    return a.jsx(ga, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? a.jsx(zg, { side: o, ...i, ref: t })
        : a.jsx(wb, { side: o, ...i, ref: t }),
    });
  }),
  wb = v.forwardRef((e, t) => {
    const n = Ca(ho, e.__scopeTooltip),
      r = Ig(ho, e.__scopeTooltip),
      o = v.useRef(null),
      i = gt(t, o),
      [s, l] = v.useState(null),
      { trigger: c, onClose: u } = n,
      d = o.current,
      { onPointerInTransitChange: f } = r,
      m = v.useCallback(() => {
        l(null), f(!1);
      }, [f]),
      p = v.useCallback(
        (b, x) => {
          const w = b.currentTarget,
            g = { x: b.clientX, y: b.clientY },
            h = jb(g, w.getBoundingClientRect()),
            y = Eb(g, h),
            S = kb(x.getBoundingClientRect()),
            N = Tb([...y, ...S]);
          l(N), f(!0);
        },
        [f]
      );
    return (
      v.useEffect(() => () => m(), [m]),
      v.useEffect(() => {
        if (c && d) {
          const b = (w) => p(w, d),
            x = (w) => p(w, c);
          return (
            c.addEventListener("pointerleave", b),
            d.addEventListener("pointerleave", x),
            () => {
              c.removeEventListener("pointerleave", b),
                d.removeEventListener("pointerleave", x);
            }
          );
        }
      }, [c, d, p, m]),
      v.useEffect(() => {
        if (s) {
          const b = (x) => {
            const w = x.target,
              g = { x: x.clientX, y: x.clientY },
              h =
                (c == null ? void 0 : c.contains(w)) ||
                (d == null ? void 0 : d.contains(w)),
              y = !Pb(g, s);
            h ? m() : y && (m(), u());
          };
          return (
            document.addEventListener("pointermove", b),
            () => document.removeEventListener("pointermove", b)
          );
        }
      }, [c, d, s, u, m]),
      a.jsx(zg, { ...e, ref: i })
    );
  }),
  [bb, Sb] = Na(Lg, { isInside: !1 }),
  Nb = b0("TooltipContent"),
  zg = v.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...l
      } = e,
      c = Ca(ho, n),
      u = Du(n),
      { onClose: d } = c;
    return (
      v.useEffect(
        () => (
          document.addEventListener(Tf, d),
          () => document.removeEventListener(Tf, d)
        ),
        [d]
      ),
      v.useEffect(() => {
        if (c.trigger) {
          const f = (m) => {
            const p = m.target;
            p != null && p.contains(c.trigger) && d();
          };
          return (
            window.addEventListener("scroll", f, { capture: !0 }),
            () => window.removeEventListener("scroll", f, { capture: !0 })
          );
        }
      }, [c.trigger, d]),
      a.jsx(xu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: a.jsxs(pb, {
          "data-state": c.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            a.jsx(Nb, { children: r }),
            a.jsx(bb, {
              scope: n,
              isInside: !0,
              children: a.jsx(W0, {
                id: c.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Dg.displayName = ho;
var Fg = "TooltipArrow",
  Cb = v.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Du(n);
    return Sb(Fg, n).isInside ? null : a.jsx(mb, { ...o, ...r, ref: t });
  });
Cb.displayName = Fg;
function jb(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Eb(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function kb(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function Pb(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i],
      c = t[s],
      u = l.x,
      d = l.y,
      f = c.x,
      m = c.y;
    d > r != m > r && n < ((f - u) * (r - d)) / (m - d) + u && (o = !o);
  }
  return o;
}
function Tb(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    Rb(t)
  );
}
function Rb(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var Ob = _g,
  $g = Dg;
const Mb = Ob,
  Ab = v.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    a.jsx($g, {
      ref: r,
      sideOffset: t,
      className: xe(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    })
  );
Ab.displayName = $g.displayName;
var ja = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Ea = typeof window > "u" || "Deno" in globalThis;
function Nt() {}
function Ib(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _b(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Lb(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function vc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Db(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Rf(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: l,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== zu(s, t.options)) return !1;
    } else if (!yi(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const c = t.isActive();
    if ((n === "active" && !c) || (n === "inactive" && c)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Of(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (gi(t.options.mutationKey) !== gi(i)) return !1;
    } else if (!yi(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function zu(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || gi)(e);
}
function gi(e) {
  return JSON.stringify(e, (t, n) =>
    xc(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function yi(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? Object.keys(t).every((n) => yi(e[n], t[n]))
    : !1;
}
function Ug(e, t) {
  if (e === t) return e;
  const n = Mf(e) && Mf(t);
  if (n || (xc(e) && xc(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      l = n ? [] : {},
      c = new Set(r);
    let u = 0;
    for (let d = 0; d < s; d++) {
      const f = n ? d : i[d];
      ((!n && c.has(f)) || n) && e[f] === void 0 && t[f] === void 0
        ? ((l[f] = void 0), u++)
        : ((l[f] = Ug(e[f], t[f])), l[f] === e[f] && e[f] !== void 0 && u++);
    }
    return o === s && u === o ? e : l;
  }
  return t;
}
function Mf(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function xc(e) {
  if (!Af(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Af(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Af(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function zb(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Fb(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? Ug(e, t)
    : t;
}
function $b(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Ub(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Fu = Symbol();
function Bg(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Fu
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var ir,
  jn,
  Zr,
  Wf,
  Bb =
    ((Wf = class extends ja {
      constructor() {
        super();
        J(this, ir);
        J(this, jn);
        J(this, Zr);
        B(this, Zr, (t) => {
          if (!Ea && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        E(this, jn) || this.setEventListener(E(this, Zr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = E(this, jn)) == null || t.call(this), B(this, jn, void 0));
      }
      setEventListener(t) {
        var n;
        B(this, Zr, t),
          (n = E(this, jn)) == null || n.call(this),
          B(
            this,
            jn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        E(this, ir) !== t && (B(this, ir, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof E(this, ir) == "boolean"
          ? E(this, ir)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (ir = new WeakMap()),
    (jn = new WeakMap()),
    (Zr = new WeakMap()),
    Wf),
  Vg = new Bb(),
  Jr,
  En,
  eo,
  Hf,
  Vb =
    ((Hf = class extends ja {
      constructor() {
        super();
        J(this, Jr, !0);
        J(this, En);
        J(this, eo);
        B(this, eo, (t) => {
          if (!Ea && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        E(this, En) || this.setEventListener(E(this, eo));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = E(this, En)) == null || t.call(this), B(this, En, void 0));
      }
      setEventListener(t) {
        var n;
        B(this, eo, t),
          (n = E(this, En)) == null || n.call(this),
          B(this, En, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        E(this, Jr) !== t &&
          (B(this, Jr, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return E(this, Jr);
      }
    }),
    (Jr = new WeakMap()),
    (En = new WeakMap()),
    (eo = new WeakMap()),
    Hf),
  qs = new Vb();
function Wb() {
  let e, t;
  const n = new Promise((o, i) => {
    (e = o), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (o) => {
      r({ status: "fulfilled", value: o }), e(o);
    }),
    (n.reject = (o) => {
      r({ status: "rejected", reason: o }), t(o);
    }),
    n
  );
}
function Hb(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Wg(e) {
  return (e ?? "online") === "online" ? qs.isOnline() : !0;
}
var Hg = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function fl(e) {
  return e instanceof Hg;
}
function Gg(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const i = Wb(),
    s = (x) => {
      var w;
      r || (m(new Hg(x)), (w = e.abort) == null || w.call(e));
    },
    l = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    u = () =>
      Vg.isFocused() &&
      (e.networkMode === "always" || qs.isOnline()) &&
      e.canRun(),
    d = () => Wg(e.networkMode) && e.canRun(),
    f = (x) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onSuccess) == null || w.call(e, x),
        o == null || o(),
        i.resolve(x));
    },
    m = (x) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onError) == null || w.call(e, x),
        o == null || o(),
        i.reject(x));
    },
    p = () =>
      new Promise((x) => {
        var w;
        (o = (g) => {
          (r || u()) && x(g);
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var x;
        (o = void 0), r || (x = e.onContinue) == null || x.call(e);
      }),
    b = () => {
      if (r) return;
      let x;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        x = w ?? e.fn();
      } catch (g) {
        x = Promise.reject(g);
      }
      Promise.resolve(x)
        .then(f)
        .catch((g) => {
          var C;
          if (r) return;
          const h = e.retry ?? (Ea ? 0 : 3),
            y = e.retryDelay ?? Hb,
            S = typeof y == "function" ? y(n, g) : y,
            N =
              h === !0 ||
              (typeof h == "number" && n < h) ||
              (typeof h == "function" && h(n, g));
          if (t || !N) {
            m(g);
            return;
          }
          n++,
            (C = e.onFail) == null || C.call(e, n, g),
            zb(S)
              .then(() => (u() ? void 0 : p()))
              .then(() => {
                t ? m(g) : b();
              });
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (o == null || o(), i),
    cancelRetry: l,
    continueRetry: c,
    canStart: d,
    start: () => (d() ? b() : p().then(b), i),
  };
}
var Gb = (e) => setTimeout(e, 0);
function Qb() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = Gb;
  const i = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    s = () => {
      const l = e;
      (e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((c) => {
                n(c);
              });
            });
          });
    };
  return {
    batch: (l) => {
      let c;
      t++;
      try {
        c = l();
      } finally {
        t--, t || s();
      }
      return c;
    },
    batchCalls:
      (l) =>
      (...c) => {
        i(() => {
          l(...c);
        });
      },
    schedule: i,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var Ue = Qb(),
  sr,
  Gf,
  Qg =
    ((Gf = class {
      constructor() {
        J(this, sr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          _b(this.gcTime) &&
            B(
              this,
              sr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Ea ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        E(this, sr) && (clearTimeout(E(this, sr)), B(this, sr, void 0));
      }
    }),
    (sr = new WeakMap()),
    Gf),
  to,
  ar,
  ct,
  lr,
  Le,
  wi,
  cr,
  Ct,
  Kt,
  Qf,
  Kb =
    ((Qf = class extends Qg {
      constructor(t) {
        super();
        J(this, Ct);
        J(this, to);
        J(this, ar);
        J(this, ct);
        J(this, lr);
        J(this, Le);
        J(this, wi);
        J(this, cr);
        B(this, cr, !1),
          B(this, wi, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          B(this, lr, t.client),
          B(this, ct, E(this, lr).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          B(this, to, Xb(this.options)),
          (this.state = t.state ?? E(this, to)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = E(this, Le)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...E(this, wi), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          E(this, ct).remove(this);
      }
      setData(t, n) {
        const r = Fb(this.state.data, t, this.options);
        return (
          Ae(this, Ct, Kt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Ae(this, Ct, Kt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = E(this, Le)) == null ? void 0 : r.promise;
        return (
          (o = E(this, Le)) == null || o.cancel(t),
          n ? n.then(Nt).catch(Nt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(E(this, to));
      }
      isActive() {
        return this.observers.some((t) => Db(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Fu ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => vc(t.options.staleTime, this) === "static"
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
          ? !1
          : this.state.isInvalidated
          ? !0
          : !Lb(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = E(this, Le)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = E(this, Le)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          E(this, ct).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (E(this, Le) &&
              (E(this, cr)
                ? E(this, Le).cancel({ revert: !0 })
                : E(this, Le).cancelRetry()),
            this.scheduleGc()),
          E(this, ct).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Ae(this, Ct, Kt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, d, f;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (E(this, Le))
            return E(this, Le).continueRetry(), E(this, Le).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const m = this.observers.find((p) => p.options.queryFn);
          m && this.setOptions(m.options);
        }
        const r = new AbortController(),
          o = (m) => {
            Object.defineProperty(m, "signal", {
              enumerable: !0,
              get: () => (B(this, cr, !0), r.signal),
            });
          },
          i = () => {
            const m = Bg(this.options, n),
              b = (() => {
                const x = {
                  client: E(this, lr),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return o(x), x;
              })();
            return (
              B(this, cr, !1),
              this.options.persister ? this.options.persister(m, b, this) : m(b)
            );
          },
          l = (() => {
            const m = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: E(this, lr),
              state: this.state,
              fetchFn: i,
            };
            return o(m), m;
          })();
        (u = this.options.behavior) == null || u.onFetch(l, this),
          B(this, ar, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((d = l.fetchOptions) == null ? void 0 : d.meta)) &&
            Ae(this, Ct, Kt).call(this, {
              type: "fetch",
              meta: (f = l.fetchOptions) == null ? void 0 : f.meta,
            });
        const c = (m) => {
          var p, b, x, w;
          (fl(m) && m.silent) ||
            Ae(this, Ct, Kt).call(this, { type: "error", error: m }),
            fl(m) ||
              ((b = (p = E(this, ct).config).onError) == null ||
                b.call(p, m, this),
              (w = (x = E(this, ct).config).onSettled) == null ||
                w.call(x, this.state.data, m, this)),
            this.scheduleGc();
        };
        return (
          B(
            this,
            Le,
            Gg({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: l.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (m) => {
                var p, b, x, w;
                if (m === void 0) {
                  c(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(m);
                } catch (g) {
                  c(g);
                  return;
                }
                (b = (p = E(this, ct).config).onSuccess) == null ||
                  b.call(p, m, this),
                  (w = (x = E(this, ct).config).onSettled) == null ||
                    w.call(x, m, this.state.error, this),
                  this.scheduleGc();
              },
              onError: c,
              onFail: (m, p) => {
                Ae(this, Ct, Kt).call(this, {
                  type: "failed",
                  failureCount: m,
                  error: p,
                });
              },
              onPause: () => {
                Ae(this, Ct, Kt).call(this, { type: "pause" });
              },
              onContinue: () => {
                Ae(this, Ct, Kt).call(this, { type: "continue" });
              },
              retry: l.options.retry,
              retryDelay: l.options.retryDelay,
              networkMode: l.options.networkMode,
              canRun: () => !0,
            })
          ),
          E(this, Le).start()
        );
      }
    }),
    (to = new WeakMap()),
    (ar = new WeakMap()),
    (ct = new WeakMap()),
    (lr = new WeakMap()),
    (Le = new WeakMap()),
    (wi = new WeakMap()),
    (cr = new WeakMap()),
    (Ct = new WeakSet()),
    (Kt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...Yb(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              B(this, ar, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const o = t.error;
            return fl(o) && o.revert && E(this, ar)
              ? { ...E(this, ar), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        Ue.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            E(this, ct).notify({ query: this, type: "updated", action: t });
        });
    }),
    Qf);
function Yb(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Wg(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function Xb(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Lt,
  Kf,
  qb =
    ((Kf = class extends ja {
      constructor(t = {}) {
        super();
        J(this, Lt);
        (this.config = t), B(this, Lt, new Map());
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? zu(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new Kb({
              client: t,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        E(this, Lt).has(t.queryHash) ||
          (E(this, Lt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = E(this, Lt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && E(this, Lt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Ue.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return E(this, Lt).get(t);
      }
      getAll() {
        return [...E(this, Lt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Rf(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Rf(t, r)) : n;
      }
      notify(t) {
        Ue.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Ue.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Ue.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Lt = new WeakMap()),
    Kf),
  Dt,
  Fe,
  ur,
  zt,
  wn,
  Yf,
  Zb =
    ((Yf = class extends Qg {
      constructor(t) {
        super();
        J(this, zt);
        J(this, Dt);
        J(this, Fe);
        J(this, ur);
        (this.mutationId = t.mutationId),
          B(this, Fe, t.mutationCache),
          B(this, Dt, []),
          (this.state = t.state || Jb()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        E(this, Dt).includes(t) ||
          (E(this, Dt).push(t),
          this.clearGcTimeout(),
          E(this, Fe).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        B(
          this,
          Dt,
          E(this, Dt).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          E(this, Fe).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        E(this, Dt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : E(this, Fe).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = E(this, ur)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, s, l, c, u, d, f, m, p, b, x, w, g, h, y, S, N, C, j, P;
        const n = () => {
          Ae(this, zt, wn).call(this, { type: "continue" });
        };
        B(
          this,
          ur,
          Gg({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (A, M) => {
              Ae(this, zt, wn).call(this, {
                type: "failed",
                failureCount: A,
                error: M,
              });
            },
            onPause: () => {
              Ae(this, zt, wn).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => E(this, Fe).canRun(this),
          })
        );
        const r = this.state.status === "pending",
          o = !E(this, ur).canStart();
        try {
          if (r) n();
          else {
            Ae(this, zt, wn).call(this, {
              type: "pending",
              variables: t,
              isPaused: o,
            }),
              await ((s = (i = E(this, Fe).config).onMutate) == null
                ? void 0
                : s.call(i, t, this));
            const M = await ((c = (l = this.options).onMutate) == null
              ? void 0
              : c.call(l, t));
            M !== this.state.context &&
              Ae(this, zt, wn).call(this, {
                type: "pending",
                context: M,
                variables: t,
                isPaused: o,
              });
          }
          const A = await E(this, ur).start();
          return (
            await ((d = (u = E(this, Fe).config).onSuccess) == null
              ? void 0
              : d.call(u, A, t, this.state.context, this)),
            await ((m = (f = this.options).onSuccess) == null
              ? void 0
              : m.call(f, A, t, this.state.context)),
            await ((b = (p = E(this, Fe).config).onSettled) == null
              ? void 0
              : b.call(
                  p,
                  A,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((w = (x = this.options).onSettled) == null
              ? void 0
              : w.call(x, A, null, t, this.state.context)),
            Ae(this, zt, wn).call(this, { type: "success", data: A }),
            A
          );
        } catch (A) {
          try {
            throw (
              (await ((h = (g = E(this, Fe).config).onError) == null
                ? void 0
                : h.call(g, A, t, this.state.context, this)),
              await ((S = (y = this.options).onError) == null
                ? void 0
                : S.call(y, A, t, this.state.context)),
              await ((C = (N = E(this, Fe).config).onSettled) == null
                ? void 0
                : C.call(
                    N,
                    void 0,
                    A,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((P = (j = this.options).onSettled) == null
                ? void 0
                : P.call(j, void 0, A, t, this.state.context)),
              A)
            );
          } finally {
            Ae(this, zt, wn).call(this, { type: "error", error: A });
          }
        } finally {
          E(this, Fe).runNext(this);
        }
      }
    }),
    (Dt = new WeakMap()),
    (Fe = new WeakMap()),
    (ur = new WeakMap()),
    (zt = new WeakSet()),
    (wn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        Ue.batch(() => {
          E(this, Dt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            E(this, Fe).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    Yf);
function Jb() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var qt,
  jt,
  bi,
  Xf,
  eS =
    ((Xf = class extends ja {
      constructor(t = {}) {
        super();
        J(this, qt);
        J(this, jt);
        J(this, bi);
        (this.config = t),
          B(this, qt, new Set()),
          B(this, jt, new Map()),
          B(this, bi, 0);
      }
      build(t, n, r) {
        const o = new Zb({
          mutationCache: this,
          mutationId: ++Di(this, bi)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        E(this, qt).add(t);
        const n = is(t);
        if (typeof n == "string") {
          const r = E(this, jt).get(n);
          r ? r.push(t) : E(this, jt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (E(this, qt).delete(t)) {
          const n = is(t);
          if (typeof n == "string") {
            const r = E(this, jt).get(n);
            if (r)
              if (r.length > 1) {
                const o = r.indexOf(t);
                o !== -1 && r.splice(o, 1);
              } else r[0] === t && E(this, jt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = is(t);
        if (typeof n == "string") {
          const r = E(this, jt).get(n),
            o =
              r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !o || o === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = is(t);
        if (typeof n == "string") {
          const o =
            (r = E(this, jt).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Ue.batch(() => {
          E(this, qt).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            E(this, qt).clear(),
            E(this, jt).clear();
        });
      }
      getAll() {
        return Array.from(E(this, qt));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Of(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Of(t, n));
      }
      notify(t) {
        Ue.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Ue.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Nt)))
        );
      }
    }),
    (qt = new WeakMap()),
    (jt = new WeakMap()),
    (bi = new WeakMap()),
    Xf);
function is(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function If(e) {
  return {
    onFetch: (t, n) => {
      var d, f, m, p, b;
      const r = t.options,
        o =
          (m =
            (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : f.fetchMore) == null
            ? void 0
            : m.direction,
        i = ((p = t.state.data) == null ? void 0 : p.pages) || [],
        s = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        c = 0;
      const u = async () => {
        let x = !1;
        const w = (y) => {
            Object.defineProperty(y, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (x = !0)
                  : t.signal.addEventListener("abort", () => {
                      x = !0;
                    }),
                t.signal
              ),
            });
          },
          g = Bg(t.options, t.fetchOptions),
          h = async (y, S, N) => {
            if (x) return Promise.reject();
            if (S == null && y.pages.length) return Promise.resolve(y);
            const j = (() => {
                const $ = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: S,
                  direction: N ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return w($), $;
              })(),
              P = await g(j),
              { maxPages: A } = t.options,
              M = N ? Ub : $b;
            return {
              pages: M(y.pages, P, A),
              pageParams: M(y.pageParams, S, A),
            };
          };
        if (o && i.length) {
          const y = o === "backward",
            S = y ? tS : _f,
            N = { pages: i, pageParams: s },
            C = S(r, N);
          l = await h(N, C, y);
        } else {
          const y = e ?? i.length;
          do {
            const S = c === 0 ? s[0] ?? r.initialPageParam : _f(r, l);
            if (c > 0 && S == null) break;
            (l = await h(l, S)), c++;
          } while (c < y);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var x, w;
            return (w = (x = t.options).persister) == null
              ? void 0
              : w.call(
                  x,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function _f(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function tS(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var he,
  kn,
  Pn,
  no,
  ro,
  Tn,
  oo,
  io,
  qf,
  nS =
    ((qf = class {
      constructor(e = {}) {
        J(this, he);
        J(this, kn);
        J(this, Pn);
        J(this, no);
        J(this, ro);
        J(this, Tn);
        J(this, oo);
        J(this, io);
        B(this, he, e.queryCache || new qb()),
          B(this, kn, e.mutationCache || new eS()),
          B(this, Pn, e.defaultOptions || {}),
          B(this, no, new Map()),
          B(this, ro, new Map()),
          B(this, Tn, 0);
      }
      mount() {
        Di(this, Tn)._++,
          E(this, Tn) === 1 &&
            (B(
              this,
              oo,
              Vg.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), E(this, he).onFocus());
              })
            ),
            B(
              this,
              io,
              qs.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), E(this, he).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Di(this, Tn)._--,
          E(this, Tn) === 0 &&
            ((e = E(this, oo)) == null || e.call(this),
            B(this, oo, void 0),
            (t = E(this, io)) == null || t.call(this),
            B(this, io, void 0));
      }
      isFetching(e) {
        return E(this, he).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return E(this, kn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = E(this, he).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = E(this, he).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(vc(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return E(this, he)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = E(this, he).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = Ib(t, i);
        if (s !== void 0)
          return E(this, he)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Ue.batch(() =>
          E(this, he)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = E(this, he).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = E(this, he);
        Ue.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = E(this, he);
        return Ue.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = Ue.batch(() =>
            E(this, he)
              .findAll(e)
              .map((o) => o.cancel(n))
          );
        return Promise.all(r).then(Nt).catch(Nt);
      }
      invalidateQueries(e, t = {}) {
        return Ue.batch(
          () => (
            E(this, he)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t
                )
          )
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = Ue.batch(() =>
            E(this, he)
              .findAll(e)
              .filter((o) => !o.isDisabled() && !o.isStatic())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(Nt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(Nt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = E(this, he).build(this, t);
        return n.isStaleByTime(vc(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Nt).catch(Nt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = If(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Nt).catch(Nt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = If(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return qs.isOnline()
          ? E(this, kn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return E(this, he);
      }
      getMutationCache() {
        return E(this, kn);
      }
      getDefaultOptions() {
        return E(this, Pn);
      }
      setDefaultOptions(e) {
        B(this, Pn, e);
      }
      setQueryDefaults(e, t) {
        E(this, no).set(gi(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...E(this, no).values()],
          n = {};
        return (
          t.forEach((r) => {
            yi(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        E(this, ro).set(gi(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...E(this, ro).values()],
          n = {};
        return (
          t.forEach((r) => {
            yi(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...E(this, Pn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = zu(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === Fu && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...E(this, Pn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        E(this, he).clear(), E(this, kn).clear();
      }
    }),
    (he = new WeakMap()),
    (kn = new WeakMap()),
    (Pn = new WeakMap()),
    (no = new WeakMap()),
    (ro = new WeakMap()),
    (Tn = new WeakMap()),
    (oo = new WeakMap()),
    (io = new WeakMap()),
    qf),
  rS = v.createContext(void 0),
  oS = ({ client: e, children: t }) => (
    v.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    a.jsx(rS.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vi() {
  return (
    (vi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vi.apply(this, arguments)
  );
}
var Mn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Mn || (Mn = {}));
const Lf = "popstate";
function iS(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: l } = r.location;
    return wc(
      "",
      { pathname: i, search: s, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Zs(o);
  }
  return aS(t, n, null, e);
}
function Ne(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Kg(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function sS() {
  return Math.random().toString(36).substr(2, 8);
}
function Df(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function wc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    vi(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? No(t) : t,
      { state: n, key: (t && t.key) || r || sS() }
    )
  );
}
function Zs(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function No(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function aS(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    l = Mn.Pop,
    c = null,
    u = d();
  u == null && ((u = 0), s.replaceState(vi({}, s.state, { idx: u }), ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    l = Mn.Pop;
    let w = d(),
      g = w == null ? null : w - u;
    (u = w), c && c({ action: l, location: x.location, delta: g });
  }
  function m(w, g) {
    l = Mn.Push;
    let h = wc(x.location, w, g);
    u = d() + 1;
    let y = Df(h, u),
      S = x.createHref(h);
    try {
      s.pushState(y, "", S);
    } catch (N) {
      if (N instanceof DOMException && N.name === "DataCloneError") throw N;
      o.location.assign(S);
    }
    i && c && c({ action: l, location: x.location, delta: 1 });
  }
  function p(w, g) {
    l = Mn.Replace;
    let h = wc(x.location, w, g);
    u = d();
    let y = Df(h, u),
      S = x.createHref(h);
    s.replaceState(y, "", S),
      i && c && c({ action: l, location: x.location, delta: 0 });
  }
  function b(w) {
    let g = o.location.origin !== "null" ? o.location.origin : o.location.href,
      h = typeof w == "string" ? w : Zs(w);
    return (
      (h = h.replace(/ $/, "%20")),
      Ne(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, g)
    );
  }
  let x = {
    get action() {
      return l;
    },
    get location() {
      return e(o, s);
    },
    listen(w) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Lf, f),
        (c = w),
        () => {
          o.removeEventListener(Lf, f), (c = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: b,
    encodeLocation(w) {
      let g = b(w);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: m,
    replace: p,
    go(w) {
      return s.go(w);
    },
  };
  return x;
}
var zf;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(zf || (zf = {}));
function lS(e, t, n) {
  return n === void 0 && (n = "/"), cS(e, t, n, !1);
}
function cS(e, t, n, r) {
  let o = typeof t == "string" ? No(t) : t,
    i = $u(o.pathname || "/", n);
  if (i == null) return null;
  let s = Yg(e);
  uS(s);
  let l = null;
  for (let c = 0; l == null && c < s.length; ++c) {
    let u = bS(i);
    l = xS(s[c], u, r);
  }
  return l;
}
function Yg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, l) => {
    let c = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    c.relativePath.startsWith("/") &&
      (Ne(
        c.relativePath.startsWith(r),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (c.relativePath = c.relativePath.slice(r.length)));
    let u = Un([r, c.relativePath]),
      d = n.concat(c);
    i.children &&
      i.children.length > 0 &&
      (Ne(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Yg(i.children, t, d, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: yS(u, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, s) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s);
      else for (let c of Xg(i.path)) o(i, s, c);
    }),
    t
  );
}
function Xg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = Xg(r.join("/")),
    l = [];
  return (
    l.push(...s.map((c) => (c === "" ? i : [i, c].join("/")))),
    o && l.push(...s),
    l.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function uS(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : vS(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const dS = /^:[\w-]+$/,
  fS = 3,
  pS = 2,
  mS = 1,
  hS = 10,
  gS = -2,
  Ff = (e) => e === "*";
function yS(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ff) && (r += gS),
    t && (r += pS),
    n
      .filter((o) => !Ff(o))
      .reduce((o, i) => o + (dS.test(i) ? fS : i === "" ? mS : hS), r)
  );
}
function vS(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function xS(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let l = 0; l < r.length; ++l) {
    let c = r[l],
      u = l === r.length - 1,
      d = i === "/" ? t : t.slice(i.length) || "/",
      f = $f(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: u },
        d
      ),
      m = c.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = $f(
          { path: c.relativePath, caseSensitive: c.caseSensitive, end: !1 },
          d
        )),
      !f)
    )
      return null;
    Object.assign(o, f.params),
      s.push({
        params: o,
        pathname: Un([i, f.pathname]),
        pathnameBase: jS(Un([i, f.pathnameBase])),
        route: m,
      }),
      f.pathnameBase !== "/" && (i = Un([i, f.pathnameBase]));
  }
  return s;
}
function $f(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = wS(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, d, f) => {
      let { paramName: m, isOptional: p } = d;
      if (m === "*") {
        let x = l[f] || "";
        s = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const b = l[f];
      return (
        p && !b ? (u[m] = void 0) : (u[m] = (b || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function wS(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Kg(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, c) => (
            r.push({ paramName: l, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function bS(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Kg(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function $u(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function SS(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? No(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : NS(n, t)) : t,
    search: ES(r),
    hash: kS(o),
  };
}
function NS(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function pl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function CS(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function qg(e, t) {
  let n = CS(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Zg(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = No(e))
    : ((o = vi({}, e)),
      Ne(
        !o.pathname || !o.pathname.includes("?"),
        pl("?", "pathname", "search", o)
      ),
      Ne(
        !o.pathname || !o.pathname.includes("#"),
        pl("#", "pathname", "hash", o)
      ),
      Ne(!o.search || !o.search.includes("#"), pl("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    l;
  if (s == null) l = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let m = s.split("/");
      for (; m[0] === ".."; ) m.shift(), (f -= 1);
      o.pathname = m.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let c = SS(o, l),
    u = s && s !== "/" && s.endsWith("/"),
    d = (i || s === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c;
}
const Un = (e) => e.join("/").replace(/\/\/+/g, "/"),
  jS = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  ES = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  kS = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function PS(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Jg = ["post", "put", "patch", "delete"];
new Set(Jg);
const TS = ["get", ...Jg];
new Set(TS);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xi() {
  return (
    (xi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xi.apply(this, arguments)
  );
}
const Uu = v.createContext(null),
  RS = v.createContext(null),
  Sr = v.createContext(null),
  ka = v.createContext(null),
  Nr = v.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  ey = v.createContext(null);
function OS(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Oi() || Ne(!1);
  let { basename: r, navigator: o } = v.useContext(Sr),
    { hash: i, pathname: s, search: l } = ny(e, { relative: n }),
    c = s;
  return (
    r !== "/" && (c = s === "/" ? r : Un([r, s])),
    o.createHref({ pathname: c, search: l, hash: i })
  );
}
function Oi() {
  return v.useContext(ka) != null;
}
function Mi() {
  return Oi() || Ne(!1), v.useContext(ka).location;
}
function ty(e) {
  v.useContext(Sr).static || v.useLayoutEffect(e);
}
function MS() {
  let { isDataRoute: e } = v.useContext(Nr);
  return e ? HS() : AS();
}
function AS() {
  Oi() || Ne(!1);
  let e = v.useContext(Uu),
    { basename: t, future: n, navigator: r } = v.useContext(Sr),
    { matches: o } = v.useContext(Nr),
    { pathname: i } = Mi(),
    s = JSON.stringify(qg(o, n.v7_relativeSplatPath)),
    l = v.useRef(!1);
  return (
    ty(() => {
      l.current = !0;
    }),
    v.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = Zg(u, JSON.parse(s), i, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Un([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d);
      },
      [t, r, s, i, e]
    )
  );
}
function ny(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = v.useContext(Sr),
    { matches: o } = v.useContext(Nr),
    { pathname: i } = Mi(),
    s = JSON.stringify(qg(o, r.v7_relativeSplatPath));
  return v.useMemo(() => Zg(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function IS(e, t) {
  return _S(e, t);
}
function _S(e, t, n, r) {
  Oi() || Ne(!1);
  let { navigator: o } = v.useContext(Sr),
    { matches: i } = v.useContext(Nr),
    s = i[i.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let c = s ? s.pathnameBase : "/";
  s && s.route;
  let u = Mi(),
    d;
  if (t) {
    var f;
    let w = typeof t == "string" ? No(t) : t;
    c === "/" || ((f = w.pathname) != null && f.startsWith(c)) || Ne(!1),
      (d = w);
  } else d = u;
  let m = d.pathname || "/",
    p = m;
  if (c !== "/") {
    let w = c.replace(/^\//, "").split("/");
    p = "/" + m.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let b = lS(e, { pathname: p }),
    x = $S(
      b &&
        b.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: Un([
              c,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? c
                : Un([
                    c,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && x
    ? v.createElement(
        ka.Provider,
        {
          value: {
            location: xi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: Mn.Pop,
          },
        },
        x
      )
    : x;
}
function LS() {
  let e = WS(),
    t = PS(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return v.createElement(
    v.Fragment,
    null,
    v.createElement("h2", null, "Unexpected Application Error!"),
    v.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? v.createElement("pre", { style: o }, n) : null,
    null
  );
}
const DS = v.createElement(LS, null);
class zS extends v.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? v.createElement(
          Nr.Provider,
          { value: this.props.routeContext },
          v.createElement(ey.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function FS(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = v.useContext(Uu);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    v.createElement(Nr.Provider, { value: t }, r)
  );
}
function $S(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let d = s.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0
    );
    d >= 0 || Ne(!1), (s = s.slice(0, Math.min(s.length, d + 1)));
  }
  let c = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < s.length; d++) {
      let f = s[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
        f.route.id)
      ) {
        let { loaderData: m, errors: p } = n,
          b =
            f.route.loader &&
            m[f.route.id] === void 0 &&
            (!p || p[f.route.id] === void 0);
        if (f.route.lazy || b) {
          (c = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((d, f, m) => {
    let p,
      b = !1,
      x = null,
      w = null;
    n &&
      ((p = l && f.route.id ? l[f.route.id] : void 0),
      (x = f.route.errorElement || DS),
      c &&
        (u < 0 && m === 0
          ? ((b = !0), (w = null))
          : u === m &&
            ((b = !0), (w = f.route.hydrateFallbackElement || null))));
    let g = t.concat(s.slice(0, m + 1)),
      h = () => {
        let y;
        return (
          p
            ? (y = x)
            : b
            ? (y = w)
            : f.route.Component
            ? (y = v.createElement(f.route.Component, null))
            : f.route.element
            ? (y = f.route.element)
            : (y = d),
          v.createElement(FS, {
            match: f,
            routeContext: { outlet: d, matches: g, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || m === 0)
      ? v.createElement(zS, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: p,
          children: h(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var ry = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(ry || {}),
  Js = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Js || {});
function US(e) {
  let t = v.useContext(Uu);
  return t || Ne(!1), t;
}
function BS(e) {
  let t = v.useContext(RS);
  return t || Ne(!1), t;
}
function VS(e) {
  let t = v.useContext(Nr);
  return t || Ne(!1), t;
}
function oy(e) {
  let t = VS(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ne(!1), n.route.id;
}
function WS() {
  var e;
  let t = v.useContext(ey),
    n = BS(Js.UseRouteError),
    r = oy(Js.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function HS() {
  let { router: e } = US(ry.UseNavigateStable),
    t = oy(Js.UseNavigateStable),
    n = v.useRef(!1);
  return (
    ty(() => {
      n.current = !0;
    }),
    v.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, xi({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function GS(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function It(e) {
  Ne(!1);
}
function QS(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Mn.Pop,
    navigator: i,
    static: s = !1,
    future: l,
  } = e;
  Oi() && Ne(!1);
  let c = t.replace(/^\/*/, "/"),
    u = v.useMemo(
      () => ({
        basename: c,
        navigator: i,
        static: s,
        future: xi({ v7_relativeSplatPath: !1 }, l),
      }),
      [c, l, i, s]
    );
  typeof r == "string" && (r = No(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: m = "",
      state: p = null,
      key: b = "default",
    } = r,
    x = v.useMemo(() => {
      let w = $u(d, c);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: m, state: p, key: b },
            navigationType: o,
          };
    }, [c, d, f, m, p, b, o]);
  return x == null
    ? null
    : v.createElement(
        Sr.Provider,
        { value: u },
        v.createElement(ka.Provider, { children: n, value: x })
      );
}
function KS(e) {
  let { children: t, location: n } = e;
  return IS(bc(t), n);
}
new Promise(() => {});
function bc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    v.Children.forEach(e, (r, o) => {
      if (!v.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === v.Fragment) {
        n.push.apply(n, bc(r.props.children, i));
        return;
      }
      r.type !== It && Ne(!1), !r.props.index || !r.props.children || Ne(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = bc(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Sc() {
  return (
    (Sc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Sc.apply(this, arguments)
  );
}
function YS(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function XS(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function qS(e, t) {
  return e.button === 0 && (!t || t === "_self") && !XS(e);
}
const ZS = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  JS = "6";
try {
  window.__reactRouterVersion = JS;
} catch {}
const eN = "startTransition",
  Uf = Pc[eN];
function tN(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = v.useRef();
  i.current == null && (i.current = iS({ window: o, v5Compat: !0 }));
  let s = i.current,
    [l, c] = v.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    d = v.useCallback(
      (f) => {
        u && Uf ? Uf(() => c(f)) : c(f);
      },
      [c, u]
    );
  return (
    v.useLayoutEffect(() => s.listen(d), [s, d]),
    v.useEffect(() => GS(r), [r]),
    v.createElement(QS, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  );
}
const nN =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  rN = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ee = v.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: l,
        target: c,
        to: u,
        preventScrollReset: d,
        viewTransition: f,
      } = t,
      m = YS(t, ZS),
      { basename: p } = v.useContext(Sr),
      b,
      x = !1;
    if (typeof u == "string" && rN.test(u) && ((b = u), nN))
      try {
        let y = new URL(window.location.href),
          S = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
          N = $u(S.pathname, p);
        S.origin === y.origin && N != null
          ? (u = N + S.search + S.hash)
          : (x = !0);
      } catch {}
    let w = OS(u, { relative: o }),
      g = oN(u, {
        replace: s,
        state: l,
        target: c,
        preventScrollReset: d,
        relative: o,
        viewTransition: f,
      });
    function h(y) {
      r && r(y), y.defaultPrevented || g(y);
    }
    return v.createElement(
      "a",
      Sc({}, m, { href: b || w, onClick: x || i ? r : h, ref: n, target: c })
    );
  });
var Bf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Bf || (Bf = {}));
var Vf;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Vf || (Vf = {}));
function oN(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
      viewTransition: l,
    } = t === void 0 ? {} : t,
    c = MS(),
    u = Mi(),
    d = ny(e, { relative: s });
  return v.useCallback(
    (f) => {
      if (qS(f, n)) {
        f.preventDefault();
        let m = r !== void 0 ? r : Zs(u) === Zs(d);
        c(e, {
          replace: m,
          state: o,
          preventScrollReset: i,
          relative: s,
          viewTransition: l,
        });
      }
    },
    [u, c, d, r, o, n, e, i, s, l]
  );
}
const iN = xa(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Ee = v.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
      const s = r ? x0 : "button";
      return a.jsx(s, {
        className: xe(iN({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    }
  );
Ee.displayName = "Button";
const sN = "/assets/logo-Blfj1XVr.png",
  Yn = () => {
    const [e, t] = v.useState(!1),
      n = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Industries", href: "/industries" },
        { name: "Projects", href: "/projects" },
        { name: "Insights", href: "/insights" },
        { name: "Careers", href: "/careers" },
      ];
    return a.jsx("header", {
      className:
        "sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border",
      children: a.jsxs("nav", {
        className: "container mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          a.jsxs("div", {
            className: "flex h-16 items-center justify-between",
            children: [
              a.jsx(ee, {
                to: "/",
                className: "flex items-center",
                children: a.jsx("img", {
                  src: sN,
                  alt: "PRY GreenTech LLP",
                  className: "h-10 w-auto transition-transform hover:scale-105",
                }),
              }),
              a.jsxs("div", {
                className: "hidden md:flex md:items-center md:space-x-6",
                children: [
                  n.map((r) =>
                    a.jsx(
                      ee,
                      {
                        to: r.href,
                        className:
                          "text-sm font-medium text-foreground/80 hover:text-primary transition-colors",
                        children: r.name,
                      },
                      r.name
                    )
                  ),
                  a.jsx(Ee, {
                    asChild: !0,
                    children: a.jsx(ee, {
                      to: "/contact",
                      children: "Contact Us",
                    }),
                  }),
                ],
              }),
              a.jsx("button", {
                className: "md:hidden p-2 text-foreground",
                onClick: () => t(!e),
                children: e ? a.jsx(Zh, { size: 24 }) : a.jsx(N1, { size: 24 }),
              }),
            ],
          }),
          e &&
            a.jsxs("div", {
              className: "md:hidden py-4 space-y-3 border-t border-border",
              children: [
                n.map((r) =>
                  a.jsx(
                    ee,
                    {
                      to: r.href,
                      className:
                        "block text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2",
                      onClick: () => t(!1),
                      children: r.name,
                    },
                    r.name
                  )
                ),
                a.jsx(Ee, {
                  asChild: !0,
                  className: "w-full",
                  children: a.jsx(ee, {
                    to: "/contact",
                    onClick: () => t(!1),
                    children: "Contact Us",
                  }),
                }),
              ],
            }),
        ],
      }),
    });
  },
  Xn = () =>
    a.jsx("footer", {
      className: "bg-secondary text-secondary-foreground",
      children: a.jsxs("div", {
        className: "container mx-auto px-4 sm:px-6 lg:px-8 py-12",
        children: [
          a.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
            children: [
              a.jsxs("div", {
                children: [
                  a.jsx("h3", {
                    className: "text-xl font-heading font-bold mb-4",
                    children: "PRY GreenTech",
                  }),
                  a.jsx("p", {
                    className: "text-sm text-secondary-foreground/80 mb-4",
                    children:
                      "Leading energy consulting firm specializing in renewable energy, oil & gas solutions, and sustainable infrastructure development.",
                  }),
                  a.jsxs("div", {
                    className: "flex space-x-4",
                    children: [
                      a.jsx("a", {
                        href: "#",
                        className: "hover:text-accent transition-colors",
                        children: a.jsx(S1, { size: 20 }),
                      }),
                      a.jsx("a", {
                        href: "#",
                        className: "hover:text-accent transition-colors",
                        children: a.jsx(R1, { size: 20 }),
                      }),
                      a.jsx("a", {
                        href: "#",
                        className: "hover:text-accent transition-colors",
                        children: a.jsx(v1, { size: 20 }),
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                children: [
                  a.jsx("h3", {
                    className: "text-lg font-heading font-semibold mb-4",
                    children: "Quick Links",
                  }),
                  a.jsxs("ul", {
                    className: "space-y-2 text-sm",
                    children: [
                      a.jsx("li", {
                        children: a.jsx(ee, {
                          to: "/about",
                          className: "hover:text-accent transition-colors",
                          children: "About Us",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx(ee, {
                          to: "/services",
                          className: "hover:text-accent transition-colors",
                          children: "Services",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx(ee, {
                          to: "/industries",
                          className: "hover:text-accent transition-colors",
                          children: "Industries",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx(ee, {
                          to: "/projects",
                          className: "hover:text-accent transition-colors",
                          children: "Projects",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx(ee, {
                          to: "/careers",
                          className: "hover:text-accent transition-colors",
                          children: "Careers",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                children: [
                  a.jsx("h3", {
                    className: "text-lg font-heading font-semibold mb-4",
                    children: "Resources",
                  }),
                  a.jsxs("ul", {
                    className: "space-y-2 text-sm",
                    children: [
                      a.jsx("li", {
                        children: a.jsx(ee, {
                          to: "/insights",
                          className: "hover:text-accent transition-colors",
                          children: "Insights & Blog",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx(ee, {
                          to: "/resources",
                          className: "hover:text-accent transition-colors",
                          children: "Downloads",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx(ee, {
                          to: "/privacy",
                          className: "hover:text-accent transition-colors",
                          children: "Privacy Policy",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx(ee, {
                          to: "/terms",
                          className: "hover:text-accent transition-colors",
                          children: "Terms & Conditions",
                        }),
                      }),
                      a.jsx("li", {
                        children: a.jsx(ee, {
                          to: "/sitemap",
                          className: "hover:text-accent transition-colors",
                          children: "Sitemap",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                children: [
                  a.jsx("h3", {
                    className: "text-lg font-heading font-semibold mb-4",
                    children: "Contact Us",
                  }),
                  a.jsxs("ul", {
                    className: "space-y-3 text-sm",
                    children: [
                      a.jsxs("li", {
                        className: "flex items-start space-x-3",
                        children: [
                          a.jsx(Ti, {
                            size: 16,
                            className: "mt-1 flex-shrink-0",
                          }),
                          a.jsx("span", {
                            children: "123 Energy Street, Green City, India",
                          }),
                        ],
                      }),
                      a.jsxs("li", {
                        className: "flex items-center space-x-3",
                        children: [
                          a.jsx(Kh, { size: 16, className: "flex-shrink-0" }),
                          a.jsx("span", { children: "+91 123 456 7890" }),
                        ],
                      }),
                      a.jsxs("li", {
                        className: "flex items-center space-x-3",
                        children: [
                          a.jsx(Eu, { size: 16, className: "flex-shrink-0" }),
                          a.jsx("span", { children: "info@prygreentech.com" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          a.jsx("div", {
            className:
              "border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm",
            children: a.jsxs("p", {
              children: [
                "© ",
                new Date().getFullYear(),
                " PRY GreenTech. All rights reserved.",
              ],
            }),
          }),
        ],
      }),
    }),
  aN = "/assets/hero-energy-CiOeptvs.jpg",
  lN = () =>
    a.jsxs("section", {
      className:
        "relative h-[700px] flex items-center justify-center overflow-hidden",
      children: [
        a.jsx("div", {
          className: "absolute inset-0 bg-cover bg-center animate-fade-in",
          style: { backgroundImage: `url(${aN})` },
          children: a.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-r from-secondary/95 to-primary/85",
          }),
        }),
        a.jsxs("div", {
          className:
            "relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center",
          children: [
            a.jsx("h1", {
              className:
                "text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-4xl mx-auto animate-slide-up leading-tight",
              children:
                "Powering a Sustainable Future Through Expert Energy Solutions",
            }),
            a.jsx("p", {
              className:
                "text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]",
              children:
                "Leading energy consulting firm specializing in renewable energy, oil & gas optimization, and sustainable infrastructure development across industries",
            }),
            a.jsxs("div", {
              className:
                "flex flex-col sm:flex-row gap-4 justify-center animate-slide-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]",
              children: [
                a.jsx(Ee, {
                  asChild: !0,
                  size: "lg",
                  variant: "secondary",
                  className:
                    "bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105",
                  children: a.jsxs(ee, {
                    to: "/contact",
                    children: [
                      "Get a Consultation",
                      a.jsx(Wt, { className: "ml-2", size: 20 }),
                    ],
                  }),
                }),
                a.jsx(Ee, {
                  asChild: !0,
                  size: "lg",
                  variant: "outline",
                  className:
                    "bg-white/10 text-white border-white hover:bg-white/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105",
                  children: a.jsx(ee, {
                    to: "/services",
                    children: "Explore Services",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  de = v.forwardRef(({ className: e, ...t }, n) =>
    a.jsx("div", {
      ref: n,
      className: xe(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        e
      ),
      ...t,
    })
  );
de.displayName = "Card";
const Be = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx("div", {
    ref: n,
    className: xe("flex flex-col space-y-1.5 p-6", e),
    ...t,
  })
);
Be.displayName = "CardHeader";
const Ve = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx("h3", {
    ref: n,
    className: xe("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
Ve.displayName = "CardTitle";
const We = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx("p", {
    ref: n,
    className: xe("text-sm text-muted-foreground", e),
    ...t,
  })
);
We.displayName = "CardDescription";
const Se = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx("div", { ref: n, className: xe("p-6 pt-0", e), ...t })
);
Se.displayName = "CardContent";
const cN = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx("div", { ref: n, className: xe("flex items-center p-6 pt-0", e), ...t })
);
cN.displayName = "CardFooter";
const uN = [
    {
      icon: Jh,
      title: "Energy Consulting & Advisory",
      description:
        "Strategic energy planning and optimization solutions for enhanced efficiency and sustainability",
      link: "/services/energy-consulting",
    },
    {
      icon: qh,
      title: "Renewable Energy Projects",
      description:
        "End-to-end renewable energy solutions including solar, wind, and hybrid systems",
      link: "/services/renewable-energy",
    },
    {
      icon: dc,
      title: "Oil & Gas / Downstream",
      description:
        "Comprehensive downstream consulting for refineries, terminals, and distribution networks",
      link: "/services/oil-gas",
    },
    {
      icon: C1,
      title: "Pipelines & Infrastructure",
      description:
        "Design, engineering, and optimization of pipeline networks and energy infrastructure",
      link: "/services/pipelines",
    },
    {
      icon: j1,
      title: "Project Management & FEED",
      description:
        "Front-End Engineering Design and full project lifecycle management services",
      link: "/services/project-management",
    },
    {
      icon: ku,
      title: "De-bottlenecking & Optimization",
      description:
        "Process optimization and capacity enhancement for existing facilities",
      link: "/services/optimization",
    },
  ],
  dN = () =>
    a.jsx("section", {
      className: "py-20 bg-background",
      children: a.jsxs("div", {
        className: "container mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          a.jsxs("div", {
            className: "text-center mb-16 animate-slide-up",
            children: [
              a.jsx("h2", {
                className:
                  "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4",
                children: "Our Services",
              }),
              a.jsx("p", {
                className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                children:
                  "Comprehensive energy solutions tailored to your industry needs",
              }),
            ],
          }),
          a.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: uN.map((e, t) =>
              a.jsx(
                ee,
                {
                  to: e.link,
                  className: "group",
                  children: a.jsxs(de, {
                    className:
                      "h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-2 animate-scale-in",
                    style: { animationDelay: `${t * 0.1}s` },
                    children: [
                      a.jsxs(Be, {
                        children: [
                          a.jsx("div", {
                            className:
                              "w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all group-hover:scale-110",
                            children: a.jsx(e.icon, {
                              className: "w-7 h-7 text-primary",
                            }),
                          }),
                          a.jsx(Ve, {
                            className:
                              "text-xl font-heading group-hover:text-primary transition-colors",
                            children: e.title,
                          }),
                        ],
                      }),
                      a.jsx(Se, {
                        children: a.jsx(We, {
                          className: "text-base leading-relaxed",
                          children: e.description,
                        }),
                      }),
                    ],
                  }),
                },
                e.title
              )
            ),
          }),
        ],
      }),
    }),
  fN = [
    "15+ years of industry experience across energy sectors",
    "Multi-disciplinary team of certified engineers and consultants",
    "Proven track record with Fortune 500 companies",
    "Cutting-edge technology and data-driven approach",
    "Commitment to sustainable and eco-friendly solutions",
    "Global expertise with local market knowledge",
  ],
  pN = () =>
    a.jsx("section", {
      className: "py-20 bg-muted",
      children: a.jsx("div", {
        className: "container mx-auto px-4 sm:px-6 lg:px-8",
        children: a.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
          children: [
            a.jsxs("div", {
              className: "animate-slide-in-left",
              children: [
                a.jsx("h2", {
                  className:
                    "text-3xl md:text-4xl font-heading font-bold text-foreground mb-6",
                  children: "Why Choose PRY GreenTech",
                }),
                a.jsx("p", {
                  className:
                    "text-lg text-muted-foreground mb-8 leading-relaxed",
                  children:
                    "We are a leading energy consulting firm dedicated to delivering innovative, sustainable, and cost-effective solutions across the entire energy value chain. Our expertise spans renewable energy, oil & gas, infrastructure, and industrial optimization.",
                }),
                a.jsx("div", {
                  className: "space-y-5",
                  children: fN.map((e, t) =>
                    a.jsxs(
                      "div",
                      {
                        className:
                          "flex items-start space-x-4 group animate-slide-in-left",
                        style: { animationDelay: `${t * 0.1}s` },
                        children: [
                          a.jsx(g1, {
                            className:
                              "w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform",
                          }),
                          a.jsx("p", {
                            className: "text-foreground leading-relaxed",
                            children: e,
                          }),
                        ],
                      },
                      e
                    )
                  ),
                }),
              ],
            }),
            a.jsxs("div", {
              className: "grid grid-cols-2 gap-6",
              children: [
                a.jsxs("div", {
                  className:
                    "bg-card p-8 rounded-xl border border-border text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 animate-scale-in",
                  children: [
                    a.jsx("div", {
                      className:
                        "text-5xl font-heading font-bold text-primary mb-3",
                      children: "500+",
                    }),
                    a.jsx("p", {
                      className: "text-muted-foreground font-medium",
                      children: "Projects Completed",
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className:
                    "bg-card p-8 rounded-xl border border-border text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 animate-scale-in",
                  style: { animationDelay: "0.1s" },
                  children: [
                    a.jsx("div", {
                      className:
                        "text-5xl font-heading font-bold text-primary mb-3",
                      children: "15+",
                    }),
                    a.jsx("p", {
                      className: "text-muted-foreground font-medium",
                      children: "Years Experience",
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className:
                    "bg-card p-8 rounded-xl border border-border text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 animate-scale-in",
                  style: { animationDelay: "0.2s" },
                  children: [
                    a.jsx("div", {
                      className:
                        "text-5xl font-heading font-bold text-primary mb-3",
                      children: "100+",
                    }),
                    a.jsx("p", {
                      className: "text-muted-foreground font-medium",
                      children: "Global Clients",
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className:
                    "bg-card p-8 rounded-xl border border-border text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 animate-scale-in",
                  style: { animationDelay: "0.3s" },
                  children: [
                    a.jsx("div", {
                      className:
                        "text-5xl font-heading font-bold text-primary mb-3",
                      children: "50+",
                    }),
                    a.jsx("p", {
                      className: "text-muted-foreground font-medium",
                      children: "Expert Team Members",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  mN = [
    {
      icon: Gh,
      title: "Oil & Gas",
      description:
        "Upstream, midstream, and downstream solutions for the oil and gas sector",
    },
    {
      icon: Qh,
      title: "Renewable Energy",
      description: "Solar, wind, hydro, and emerging clean energy technologies",
    },
    {
      icon: Wh,
      title: "Infrastructure",
      description:
        "Energy infrastructure for smart cities and industrial complexes",
    },
    {
      icon: Xh,
      title: "Power Generation",
      description: "Conventional and renewable power generation facilities",
    },
    {
      icon: Gs,
      title: "Chemical & Process",
      description: "Chemical plants, refineries, and process industries",
    },
    {
      icon: Hh,
      title: "Digital Solutions",
      description: "IoT, AI, and digital transformation for energy systems",
    },
  ],
  hN = () =>
    a.jsx("section", {
      className: "py-20 bg-background",
      children: a.jsxs("div", {
        className: "container mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          a.jsxs("div", {
            className: "text-center mb-12",
            children: [
              a.jsx("h2", {
                className:
                  "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4",
                children: "Industries We Serve",
              }),
              a.jsx("p", {
                className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                children:
                  "Delivering specialized solutions across diverse energy sectors",
              }),
            ],
          }),
          a.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: mN.map((e) =>
              a.jsxs(
                de,
                {
                  className: "transition-all duration-300 hover:shadow-md",
                  children: [
                    a.jsxs(Be, {
                      children: [
                        a.jsx("div", {
                          className:
                            "w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4",
                          children: a.jsx(e.icon, {
                            className: "w-6 h-6 text-secondary",
                          }),
                        }),
                        a.jsx(Ve, {
                          className: "text-xl font-heading",
                          children: e.title,
                        }),
                      ],
                    }),
                    a.jsx(Se, {
                      children: a.jsx(We, {
                        className: "text-base",
                        children: e.description,
                      }),
                    }),
                  ],
                },
                e.title
              )
            ),
          }),
        ],
      }),
    }),
  gN = xa(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
      variants: {
        variant: {
          default:
            "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
          secondary:
            "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
          destructive:
            "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
          outline: "text-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  );
function xr({ className: e, variant: t, ...n }) {
  return a.jsx("div", { className: xe(gN({ variant: t }), e), ...n });
}
const yN = [
    {
      title: "150 MW Solar Power Plant",
      category: "Renewable Energy",
      description:
        "Complete FEED and project management for a large-scale solar installation, reducing carbon emissions by 200,000 tons annually",
      results: "30% cost reduction, 6 months early completion",
    },
    {
      title: "Refinery Optimization Program",
      category: "Oil & Gas",
      description:
        "De-bottlenecking and process optimization for a major refinery, increasing throughput capacity by 15%",
      results: "$50M annual savings, 15% capacity increase",
    },
    {
      title: "Pipeline Infrastructure Design",
      category: "Infrastructure",
      description:
        "Design and engineering of 500km natural gas pipeline with advanced safety and monitoring systems",
      results: "Zero incidents, on-time delivery",
    },
  ],
  vN = () =>
    a.jsx("section", {
      className: "py-20 bg-muted",
      children: a.jsxs("div", {
        className: "container mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          a.jsxs("div", {
            className: "text-center mb-12",
            children: [
              a.jsx("h2", {
                className:
                  "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4",
                children: "Featured Projects",
              }),
              a.jsx("p", {
                className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                children:
                  "Real results from real projects across the energy spectrum",
              }),
            ],
          }),
          a.jsx("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",
            children: yN.map((e) =>
              a.jsxs(
                de,
                {
                  className: "flex flex-col",
                  children: [
                    a.jsxs(Be, {
                      children: [
                        a.jsx(xr, {
                          className: "w-fit mb-2",
                          variant: "secondary",
                          children: e.category,
                        }),
                        a.jsx(Ve, {
                          className: "text-xl font-heading",
                          children: e.title,
                        }),
                      ],
                    }),
                    a.jsxs(Se, {
                      className: "flex-1 flex flex-col",
                      children: [
                        a.jsx(We, {
                          className: "text-base mb-4 flex-1",
                          children: e.description,
                        }),
                        a.jsx("div", {
                          className: "pt-4 border-t border-border",
                          children: a.jsx("p", {
                            className: "text-sm font-medium text-primary",
                            children: e.results,
                          }),
                        }),
                      ],
                    }),
                  ],
                },
                e.title
              )
            ),
          }),
          a.jsx("div", {
            className: "text-center",
            children: a.jsx(Ee, {
              asChild: !0,
              size: "lg",
              children: a.jsxs(ee, {
                to: "/projects",
                children: [
                  "View All Projects",
                  a.jsx(Wt, { className: "ml-2", size: 20 }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  xN = [
    {
      name: "Rajesh Kumar",
      position: "VP Operations, Major Oil Refinery",
      content:
        "PRY GreenTech's expertise in refinery optimization saved us millions while improving our environmental performance. Their team's professionalism and technical depth are unmatched.",
    },
    {
      name: "Priya Sharma",
      position: "CEO, Renewable Energy Company",
      content:
        "Working with PRY GreenTech on our solar projects was a game-changer. They delivered on time, within budget, and exceeded all performance expectations.",
    },
    {
      name: "Michael Chen",
      position: "Director, Infrastructure Development",
      content:
        "The pipeline infrastructure solutions provided by PRY GreenTech demonstrated exceptional engineering excellence and innovative thinking. Highly recommended.",
    },
  ],
  wN = () =>
    a.jsx("section", {
      className: "py-20 bg-background",
      children: a.jsxs("div", {
        className: "container mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          a.jsxs("div", {
            className: "text-center mb-12",
            children: [
              a.jsx("h2", {
                className:
                  "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4",
                children: "What Our Clients Say",
              }),
              a.jsx("p", {
                className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                children: "Trusted by industry leaders worldwide",
              }),
            ],
          }),
          a.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: xN.map((e) =>
              a.jsx(
                de,
                {
                  className: "bg-card",
                  children: a.jsxs(Se, {
                    className: "pt-6",
                    children: [
                      a.jsx("div", {
                        className: "flex mb-4",
                        children: [...Array(5)].map((t, n) =>
                          a.jsx(
                            k1,
                            { className: "w-5 h-5 fill-accent text-accent" },
                            n
                          )
                        ),
                      }),
                      a.jsxs("p", {
                        className: "text-foreground mb-6 italic",
                        children: ['"', e.content, '"'],
                      }),
                      a.jsxs("div", {
                        children: [
                          a.jsx("p", {
                            className:
                              "font-heading font-semibold text-foreground",
                            children: e.name,
                          }),
                          a.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: e.position,
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                e.name
              )
            ),
          }),
        ],
      }),
    }),
  bN = [
    {
      title: "The Future of Renewable Energy in India",
      category: "Renewable Energy",
      date: "October 15, 2025",
      excerpt:
        "Exploring emerging trends and opportunities in India's renewable energy sector, from solar to wind and beyond.",
      link: "/insights/future-renewable-energy-india",
    },
    {
      title: "Optimizing Refinery Operations in 2025",
      category: "Oil & Gas",
      date: "October 10, 2025",
      excerpt:
        "Key strategies for improving efficiency and reducing costs in modern refineries through digital transformation.",
      link: "/insights/refinery-optimization-2025",
    },
    {
      title: "Pipeline Safety: Best Practices & Technologies",
      category: "Infrastructure",
      date: "October 5, 2025",
      excerpt:
        "Comprehensive guide to modern pipeline safety protocols and emerging monitoring technologies.",
      link: "/insights/pipeline-safety-guide",
    },
  ],
  SN = () =>
    a.jsx("section", {
      className: "py-20 bg-muted",
      children: a.jsxs("div", {
        className: "container mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          a.jsxs("div", {
            className: "text-center mb-12",
            children: [
              a.jsx("h2", {
                className:
                  "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4",
                children: "Latest Insights",
              }),
              a.jsx("p", {
                className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                children:
                  "Industry expertise and thought leadership from our team",
              }),
            ],
          }),
          a.jsx("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",
            children: bN.map((e) =>
              a.jsx(
                ee,
                {
                  to: e.link,
                  className: "group",
                  children: a.jsxs(de, {
                    className:
                      "h-full transition-all duration-300 hover:shadow-lg hover:border-primary",
                    children: [
                      a.jsxs(Be, {
                        children: [
                          a.jsx(xr, {
                            className: "w-fit mb-2",
                            variant: "outline",
                            children: e.category,
                          }),
                          a.jsx(Ve, {
                            className:
                              "text-xl font-heading group-hover:text-primary transition-colors",
                            children: e.title,
                          }),
                          a.jsxs("div", {
                            className:
                              "flex items-center text-sm text-muted-foreground pt-2",
                            children: [
                              a.jsx(Cu, { className: "w-4 h-4 mr-2" }),
                              e.date,
                            ],
                          }),
                        ],
                      }),
                      a.jsx(Se, {
                        children: a.jsx(We, {
                          className: "text-base",
                          children: e.excerpt,
                        }),
                      }),
                    ],
                  }),
                },
                e.title
              )
            ),
          }),
          a.jsx("div", {
            className: "text-center",
            children: a.jsx(Ee, {
              asChild: !0,
              size: "lg",
              variant: "outline",
              children: a.jsxs(ee, {
                to: "/insights",
                children: [
                  "View All Articles",
                  a.jsx(Wt, { className: "ml-2", size: 20 }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  iy = () =>
    a.jsx("section", {
      className: "py-20 bg-gradient-to-r from-primary to-secondary",
      children: a.jsxs("div", {
        className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center",
        children: [
          a.jsx("h2", {
            className:
              "text-3xl md:text-4xl font-heading font-bold text-white mb-6",
            children: "Ready to Transform Your Energy Operations?",
          }),
          a.jsx("p", {
            className: "text-lg text-white/90 mb-8 max-w-2xl mx-auto",
            children:
              "Let's discuss how our expertise can help you achieve your energy and sustainability goals. Get in touch with our team today.",
          }),
          a.jsxs("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [
              a.jsx(Ee, {
                asChild: !0,
                size: "lg",
                variant: "secondary",
                className: "bg-white hover:bg-white/90 text-primary",
                children: a.jsxs(ee, {
                  to: "/contact",
                  children: [
                    a.jsx(Eu, { className: "mr-2", size: 20 }),
                    "Get in Touch",
                  ],
                }),
              }),
              a.jsx(Ee, {
                asChild: !0,
                size: "lg",
                variant: "outline",
                className:
                  "bg-white/10 text-white border-white hover:bg-white/20",
                children: a.jsxs(ee, {
                  to: "/about",
                  children: [
                    "Learn More About Us",
                    a.jsx(Wt, { className: "ml-2", size: 20 }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  NN = () =>
    a.jsxs("div", {
      className: "flex min-h-screen flex-col",
      children: [
        a.jsx(Yn, {}),
        a.jsxs("main", {
          className: "flex-1",
          children: [
            a.jsx(lN, {}),
            a.jsx(dN, {}),
            a.jsx(pN, {}),
            a.jsx(hN, {}),
            a.jsx(vN, {}),
            a.jsx(wN, {}),
            a.jsx(SN, {}),
            a.jsx(iy, {}),
          ],
        }),
        a.jsx(Xn, {}),
      ],
    }),
  CN = () => {
    v.useEffect(() => {
      document.title =
        "About Us - PRY GreenTech LLP | Energy Consulting Experts";
      const n = document.querySelector('meta[name="description"]');
      n &&
        n.setAttribute(
          "content",
          "Learn about PRY GreenTech LLP - leading energy consultancy with expertise in renewable energy, oil & gas, and sustainable solutions across industries."
        );
    }, []);
    const e = [
        {
          icon: y1,
          title: "Excellence",
          description:
            "Delivering superior quality in every project through innovation and expertise",
        },
        {
          icon: pf,
          title: "Integrity",
          description:
            "Building trust through transparent and ethical business practices",
        },
        {
          icon: Yh,
          title: "Collaboration",
          description:
            "Working together with clients to achieve shared success",
        },
        {
          icon: T1,
          title: "Sustainability",
          description:
            "Committed to creating environmentally responsible solutions",
        },
      ],
      t = [
        {
          name: "Leadership Member 1",
          position: "CEO & Founder",
          bio: "Over 25 years of experience in energy consulting and project management",
        },
        {
          name: "Leadership Member 2",
          position: "Technical Director",
          bio: "Expert in renewable energy systems and sustainable infrastructure",
        },
        {
          name: "Leadership Member 3",
          position: "Operations Head",
          bio: "Specializes in oil & gas downstream operations and optimization",
        },
      ];
    return a.jsxs("div", {
      className: "flex min-h-screen flex-col",
      children: [
        a.jsx(Yn, {}),
        a.jsxs("main", {
          className: "flex-1",
          children: [
            a.jsxs("section", {
              className:
                "relative h-[400px] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden",
              children: [
                a.jsx("div", {
                  className:
                    "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c')] bg-cover bg-center opacity-10",
                }),
                a.jsxs("div", {
                  className:
                    "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in",
                  children: [
                    a.jsx("h1", {
                      className:
                        "text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4",
                      children: "About PRY GreenTech LLP",
                    }),
                    a.jsx("p", {
                      className: "text-xl text-white/90 max-w-3xl mx-auto",
                      children:
                        "Leading the way in energy consulting and sustainable solutions",
                    }),
                  ],
                }),
              ],
            }),
            a.jsx("section", {
              className: "py-20 bg-background",
              children: a.jsx("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: a.jsxs("div", {
                  className: "grid md:grid-cols-2 gap-12 items-center",
                  children: [
                    a.jsxs("div", {
                      className: "animate-slide-in-left",
                      children: [
                        a.jsx("h2", {
                          className:
                            "text-3xl md:text-4xl font-heading font-bold text-foreground mb-6",
                          children: "Our Story",
                        }),
                        a.jsxs("div", {
                          className: "space-y-4 text-foreground/80",
                          children: [
                            a.jsx("p", {
                              children:
                                "[Your company history and founding story goes here. Replace with your actual content about how PRY GreenTech LLP was established, the vision behind it, and the journey so far.]",
                            }),
                            a.jsx("p", {
                              children:
                                "[Continue with more details about your evolution, key milestones, and growth trajectory in the energy consulting sector.]",
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsx("div", {
                      className: "animate-scale-in",
                      style: { animationDelay: "0.2s" },
                      children: a.jsx("img", {
                        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
                        alt: "Company building and team",
                        className:
                          "rounded-lg shadow-lg w-full h-[400px] object-cover",
                      }),
                    }),
                  ],
                }),
              }),
            }),
            a.jsx("section", {
              className: "py-20 bg-muted/30",
              children: a.jsx("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: a.jsxs("div", {
                  className: "grid md:grid-cols-2 gap-8",
                  children: [
                    a.jsx(de, {
                      className:
                        "animate-slide-up hover:shadow-lg transition-all duration-300",
                      children: a.jsxs(Se, {
                        className: "p-8",
                        children: [
                          a.jsx("h2", {
                            className:
                              "text-3xl font-heading font-bold text-foreground mb-4",
                            children: "Our Vision",
                          }),
                          a.jsx("p", {
                            className: "text-foreground/80 leading-relaxed",
                            children:
                              "[Your vision statement - what you aspire to achieve, your long-term goals, and the impact you want to make in the energy sector.]",
                          }),
                        ],
                      }),
                    }),
                    a.jsx(de, {
                      className:
                        "animate-slide-up hover:shadow-lg transition-all duration-300",
                      style: { animationDelay: "0.1s" },
                      children: a.jsxs(Se, {
                        className: "p-8",
                        children: [
                          a.jsx("h2", {
                            className:
                              "text-3xl font-heading font-bold text-foreground mb-4",
                            children: "Our Mission",
                          }),
                          a.jsx("p", {
                            className: "text-foreground/80 leading-relaxed",
                            children:
                              "[Your mission statement - your purpose, how you serve clients, and the principles that guide your daily operations and service delivery.]",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            a.jsx("section", {
              className: "py-20 bg-background",
              children: a.jsxs("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                  a.jsxs("div", {
                    className: "text-center mb-12 animate-slide-up",
                    children: [
                      a.jsx("h2", {
                        className:
                          "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4",
                        children: "Our Values",
                      }),
                      a.jsx("p", {
                        className: "text-foreground/70 max-w-2xl mx-auto",
                        children: "The principles that guide everything we do",
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: e.map((n, r) =>
                      a.jsx(
                        de,
                        {
                          className:
                            "animate-scale-in hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
                          style: { animationDelay: `${r * 0.1}s` },
                          children: a.jsxs(Se, {
                            className: "p-6 text-center",
                            children: [
                              a.jsx(n.icon, {
                                className:
                                  "w-12 h-12 text-primary mx-auto mb-4",
                              }),
                              a.jsx("h3", {
                                className:
                                  "text-xl font-heading font-bold text-foreground mb-2",
                                children: n.title,
                              }),
                              a.jsx("p", {
                                className: "text-sm text-foreground/70",
                                children: n.description,
                              }),
                            ],
                          }),
                        },
                        r
                      )
                    ),
                  }),
                ],
              }),
            }),
            a.jsx("section", {
              className: "py-20 bg-muted/30",
              children: a.jsxs("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                  a.jsxs("div", {
                    className: "text-center mb-12 animate-slide-up",
                    children: [
                      a.jsx("h2", {
                        className:
                          "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4",
                        children: "Leadership Team",
                      }),
                      a.jsx("p", {
                        className: "text-foreground/70 max-w-2xl mx-auto",
                        children: "Meet the experts driving our success",
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: t.map((n, r) =>
                      a.jsx(
                        de,
                        {
                          className:
                            "animate-slide-up hover:shadow-lg transition-all duration-300",
                          style: { animationDelay: `${r * 0.1}s` },
                          children: a.jsxs(Se, {
                            className: "p-6 text-center",
                            children: [
                              a.jsx("div", {
                                className:
                                  "w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4",
                              }),
                              a.jsx("h3", {
                                className:
                                  "text-xl font-heading font-bold text-foreground mb-1",
                                children: n.name,
                              }),
                              a.jsx("p", {
                                className: "text-primary font-medium mb-3",
                                children: n.position,
                              }),
                              a.jsx("p", {
                                className: "text-sm text-foreground/70",
                                children: n.bio,
                              }),
                            ],
                          }),
                        },
                        r
                      )
                    ),
                  }),
                ],
              }),
            }),
            a.jsx("section", {
              className: "py-20 bg-background",
              children: a.jsxs("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                  a.jsxs("div", {
                    className: "text-center mb-12 animate-slide-up",
                    children: [
                      a.jsx("h2", {
                        className:
                          "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4",
                        children: "Certifications & Partnerships",
                      }),
                      a.jsx("p", {
                        className: "text-foreground/70 max-w-2xl mx-auto",
                        children:
                          "Recognized excellence and trusted collaborations",
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "grid md:grid-cols-4 gap-6",
                    children: [1, 2, 3, 4].map((n, r) =>
                      a.jsx(
                        de,
                        {
                          className:
                            "animate-scale-in hover:shadow-lg transition-all duration-300",
                          style: { animationDelay: `${r * 0.1}s` },
                          children: a.jsx(Se, {
                            className:
                              "p-6 flex items-center justify-center h-32",
                            children: a.jsx("div", {
                              className:
                                "w-full h-full bg-muted/50 rounded flex items-center justify-center",
                              children: a.jsx(pf, {
                                className: "w-12 h-12 text-primary/50",
                              }),
                            }),
                          }),
                        },
                        r
                      )
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
        a.jsx(Xn, {}),
      ],
    });
  };
var jN = v.createContext(void 0);
function sy(e) {
  const t = v.useContext(jN);
  return e || t || "ltr";
}
var ml = "rovingFocusGroup.onEntryFocus",
  EN = { bubbles: !1, cancelable: !0 },
  Ai = "RovingFocusGroup",
  [Nc, ay, kN] = gh(Ai),
  [PN, ly] = xo(Ai, [kN]),
  [TN, RN] = PN(Ai),
  cy = v.forwardRef((e, t) =>
    a.jsx(Nc.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: a.jsx(Nc.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: a.jsx(ON, { ...e, ref: t }),
      }),
    })
  );
cy.displayName = Ai;
var ON = v.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: i,
        currentTabStopId: s,
        defaultCurrentTabStopId: l,
        onCurrentTabStopIdChange: c,
        onEntryFocus: u,
        preventScrollOnEntryFocus: d = !1,
        ...f
      } = e,
      m = v.useRef(null),
      p = gt(t, m),
      b = sy(i),
      [x, w] = wu({ prop: s, defaultProp: l ?? null, onChange: c, caller: Ai }),
      [g, h] = v.useState(!1),
      y = sn(u),
      S = ay(n),
      N = v.useRef(!1),
      [C, j] = v.useState(0);
    return (
      v.useEffect(() => {
        const P = m.current;
        if (P)
          return P.addEventListener(ml, y), () => P.removeEventListener(ml, y);
      }, [y]),
      a.jsx(TN, {
        scope: n,
        orientation: r,
        dir: b,
        loop: o,
        currentTabStopId: x,
        onItemFocus: v.useCallback((P) => w(P), [w]),
        onItemShiftTab: v.useCallback(() => h(!0), []),
        onFocusableItemAdd: v.useCallback(() => j((P) => P + 1), []),
        onFocusableItemRemove: v.useCallback(() => j((P) => P - 1), []),
        children: a.jsx(ve.div, {
          tabIndex: g || C === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: oe(e.onMouseDown, () => {
            N.current = !0;
          }),
          onFocus: oe(e.onFocus, (P) => {
            const A = !N.current;
            if (P.target === P.currentTarget && A && !g) {
              const M = new CustomEvent(ml, EN);
              if ((P.currentTarget.dispatchEvent(M), !M.defaultPrevented)) {
                const $ = S().filter((z) => z.focusable),
                  L = $.find((z) => z.active),
                  G = $.find((z) => z.id === x),
                  K = [L, G, ...$].filter(Boolean).map((z) => z.ref.current);
                fy(K, d);
              }
            }
            N.current = !1;
          }),
          onBlur: oe(e.onBlur, () => h(!1)),
        }),
      })
    );
  }),
  uy = "RovingFocusGroupItem",
  dy = v.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: i,
        children: s,
        ...l
      } = e,
      c = ug(),
      u = i || c,
      d = RN(uy, n),
      f = d.currentTabStopId === u,
      m = ay(n),
      {
        onFocusableItemAdd: p,
        onFocusableItemRemove: b,
        currentTabStopId: x,
      } = d;
    return (
      v.useEffect(() => {
        if (r) return p(), () => b();
      }, [r, p, b]),
      a.jsx(Nc.ItemSlot, {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: a.jsx(ve.span, {
          tabIndex: f ? 0 : -1,
          "data-orientation": d.orientation,
          ...l,
          ref: t,
          onMouseDown: oe(e.onMouseDown, (w) => {
            r ? d.onItemFocus(u) : w.preventDefault();
          }),
          onFocus: oe(e.onFocus, () => d.onItemFocus(u)),
          onKeyDown: oe(e.onKeyDown, (w) => {
            if (w.key === "Tab" && w.shiftKey) {
              d.onItemShiftTab();
              return;
            }
            if (w.target !== w.currentTarget) return;
            const g = IN(w, d.orientation, d.dir);
            if (g !== void 0) {
              if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
              w.preventDefault();
              let y = m()
                .filter((S) => S.focusable)
                .map((S) => S.ref.current);
              if (g === "last") y.reverse();
              else if (g === "prev" || g === "next") {
                g === "prev" && y.reverse();
                const S = y.indexOf(w.currentTarget);
                y = d.loop ? _N(y, S + 1) : y.slice(S + 1);
              }
              setTimeout(() => fy(y));
            }
          }),
          children:
            typeof s == "function"
              ? s({ isCurrentTabStop: f, hasTabStop: x != null })
              : s,
        }),
      })
    );
  });
dy.displayName = uy;
var MN = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function AN(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
    ? "ArrowRight"
    : e === "ArrowRight"
    ? "ArrowLeft"
    : e;
}
function IN(e, t, n) {
  const r = AN(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return MN[r];
}
function fy(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function _N(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var LN = cy,
  DN = dy,
  Pa = "Tabs",
  [zN, cC] = xo(Pa, [ly]),
  py = ly(),
  [FN, Bu] = zN(Pa),
  my = v.forwardRef((e, t) => {
    const {
        __scopeTabs: n,
        value: r,
        onValueChange: o,
        defaultValue: i,
        orientation: s = "horizontal",
        dir: l,
        activationMode: c = "automatic",
        ...u
      } = e,
      d = sy(l),
      [f, m] = wu({ prop: r, onChange: o, defaultProp: i ?? "", caller: Pa });
    return a.jsx(FN, {
      scope: n,
      baseId: ug(),
      value: f,
      onValueChange: m,
      orientation: s,
      dir: d,
      activationMode: c,
      children: a.jsx(ve.div, { dir: d, "data-orientation": s, ...u, ref: t }),
    });
  });
my.displayName = Pa;
var hy = "TabsList",
  gy = v.forwardRef((e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e,
      i = Bu(hy, n),
      s = py(n);
    return a.jsx(LN, {
      asChild: !0,
      ...s,
      orientation: i.orientation,
      dir: i.dir,
      loop: r,
      children: a.jsx(ve.div, {
        role: "tablist",
        "aria-orientation": i.orientation,
        ...o,
        ref: t,
      }),
    });
  });
gy.displayName = hy;
var yy = "TabsTrigger",
  vy = v.forwardRef((e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...i } = e,
      s = Bu(yy, n),
      l = py(n),
      c = by(s.baseId, r),
      u = Sy(s.baseId, r),
      d = r === s.value;
    return a.jsx(DN, {
      asChild: !0,
      ...l,
      focusable: !o,
      active: d,
      children: a.jsx(ve.button, {
        type: "button",
        role: "tab",
        "aria-selected": d,
        "aria-controls": u,
        "data-state": d ? "active" : "inactive",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        id: c,
        ...i,
        ref: t,
        onMouseDown: oe(e.onMouseDown, (f) => {
          !o && f.button === 0 && f.ctrlKey === !1
            ? s.onValueChange(r)
            : f.preventDefault();
        }),
        onKeyDown: oe(e.onKeyDown, (f) => {
          [" ", "Enter"].includes(f.key) && s.onValueChange(r);
        }),
        onFocus: oe(e.onFocus, () => {
          const f = s.activationMode !== "manual";
          !d && !o && f && s.onValueChange(r);
        }),
      }),
    });
  });
vy.displayName = yy;
var xy = "TabsContent",
  wy = v.forwardRef((e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: i, ...s } = e,
      l = Bu(xy, n),
      c = by(l.baseId, r),
      u = Sy(l.baseId, r),
      d = r === l.value,
      f = v.useRef(d);
    return (
      v.useEffect(() => {
        const m = requestAnimationFrame(() => (f.current = !1));
        return () => cancelAnimationFrame(m);
      }, []),
      a.jsx(ga, {
        present: o || d,
        children: ({ present: m }) =>
          a.jsx(ve.div, {
            "data-state": d ? "active" : "inactive",
            "data-orientation": l.orientation,
            role: "tabpanel",
            "aria-labelledby": c,
            hidden: !m,
            id: u,
            tabIndex: 0,
            ...s,
            ref: t,
            style: { ...e.style, animationDuration: f.current ? "0s" : void 0 },
            children: m && i,
          }),
      })
    );
  });
wy.displayName = xy;
function by(e, t) {
  return `${e}-trigger-${t}`;
}
function Sy(e, t) {
  return `${e}-content-${t}`;
}
var $N = my,
  Ny = gy,
  Cy = vy,
  jy = wy;
const UN = $N,
  Ey = v.forwardRef(({ className: e, ...t }, n) =>
    a.jsx(Ny, {
      ref: n,
      className: xe(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        e
      ),
      ...t,
    })
  );
Ey.displayName = Ny.displayName;
const ky = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(Cy, {
    ref: n,
    className: xe(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t,
  })
);
ky.displayName = Cy.displayName;
const Py = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(jy, {
    ref: n,
    className: xe(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t,
  })
);
Py.displayName = jy.displayName;
const BN = () => {
    v.useEffect(() => {
      window.scrollTo(0, 0),
        (document.title =
          "Our Services - PRY Green Tech | Energy Consulting & Engineering Solutions");
      const r = document.querySelector('meta[name="description"]');
      r &&
        r.setAttribute(
          "content",
          "Comprehensive energy consulting, engineering, and digital transformation services across renewable energy, oil & gas, thermal power, and sustainable infrastructure."
        );
    }, []);
    const e = [
        {
          id: "cgd",
          icon: a.jsx(dc, { className: "h-6 w-6" }),
          title: "City Gas Distribution (CGD)",
          category: "Gas Infrastructure",
          description:
            "End-to-end CGD consultancy, engineering, and digital transformation solutions for reliable and sustainable natural gas distribution.",
          capabilities: [
            "Feasibility & Master Planning",
            "Front-End Engineering & Detailed Design",
            "Project Management & Execution Support",
            "Operations & Maintenance Optimization",
            "Regulatory & Licensing Support",
            "IoT-enabled remote monitoring and SCADA integration",
          ],
        },
        {
          id: "thermal",
          icon: a.jsx(x1, { className: "h-6 w-6" }),
          title: "Thermal Energy",
          category: "Power Generation",
          description:
            "Comprehensive consultancy, engineering, and digital transformation solutions for thermal power plants and co-generation facilities.",
          capabilities: [
            "Feasibility & Strategic Planning",
            "Engineering & Project Management",
            "Plant Optimization & Upgradation",
            "O&M and Asset Reliability Advisory",
            "Regulatory, Safety & ESG Compliance",
            "Advanced process control and optimization systems",
          ],
        },
        {
          id: "solar",
          icon: a.jsx(P1, { className: "h-6 w-6" }),
          title: "Solar Energy",
          category: "Renewable Energy",
          description:
            "End-to-end solar energy solutions from feasibility to digital performance optimization for utility-scale and hybrid projects.",
          capabilities: [
            "Solar resource mapping and irradiation studies",
            "Project Planning & Engineering",
            "Construction & Commissioning Support",
            "Operations & Performance Optimization",
            "Hybrid system integration with wind or hydrogen",
            "AI-powered monitoring and predictive analytics",
          ],
        },
        {
          id: "wind",
          icon: a.jsx(qh, { className: "h-6 w-6" }),
          title: "Wind Energy",
          category: "Renewable Energy",
          description:
            "Complete wind energy solutions for onshore and offshore projects, supporting high-performance, bankable wind assets.",
          capabilities: [
            "Wind resource assessment and micro-siting",
            "Project Planning & Engineering",
            "Construction & Commissioning Support",
            "Operations & Asset Optimization",
            "Turbine technology selection and layout optimization",
            "Predictive maintenance using digital analytics",
          ],
        },
        {
          id: "nuclear",
          icon: a.jsx(f1, { className: "h-6 w-6" }),
          title: "Nuclear Energy",
          category: "Power Generation",
          description:
            "Specialized consultancy, engineering, and technical advisory for safe, efficient nuclear energy infrastructure.",
          capabilities: [
            "Feasibility & Strategic Planning",
            "Engineering & Project Development",
            "Safety, Licensing & Regulatory Compliance",
            "Operations & Performance Optimization",
            "Technology evaluation including Gen III+, SMRs",
            "Digital twin modeling and predictive diagnostics",
          ],
        },
        {
          id: "biomass",
          icon: a.jsx(b1, { className: "h-6 w-6" }),
          title: "Biomass Energy",
          category: "Renewable Energy",
          description:
            "End-to-end biomass energy solutions that are technically robust, environmentally sustainable, and economically viable.",
          capabilities: [
            "Feasibility & Resource Assessment",
            "Project Development & Engineering",
            "Technology Evaluation & Selection",
            "Regulatory & Sustainability Compliance",
            "CHP system design and integration",
            "Carbon capture integration",
          ],
        },
        {
          id: "lng-cng",
          icon: a.jsx(Jh, { className: "h-6 w-6" }),
          title: "LNG and CNG",
          category: "Gas Infrastructure",
          description:
            "Complete LNG and CNG consultancy, engineering, and project execution support for infrastructure development.",
          capabilities: [
            "Feasibility & Strategic Planning",
            "LNG Receiving, Storage & Regasification Terminals",
            "CNG Stations & Distribution Networks",
            "Pipeline & Transportation Engineering",
            "Safety & Process Control Systems",
            "Real-time monitoring and logistics optimization",
          ],
        },
        {
          id: "crude-trading",
          icon: a.jsx(h1, { className: "h-6 w-6" }),
          title: "Crude Oil Trading",
          category: "Trading & Logistics",
          description:
            "Specialized crude oil trading advisory and strategic support for optimized procurement and trading performance.",
          capabilities: [
            "Market Analysis & Strategy",
            "Supply Chain & Logistics Advisory",
            "Commercial Structuring & Trading Support",
            "Regulatory & Compliance Advisory",
            "Real-time market signal analysis",
            "Predictive analytics for supply-demand balancing",
          ],
        },
        {
          id: "offshore-pipelines",
          icon: a.jsx(Ti, { className: "h-6 w-6" }),
          title: "Offshore Pipelines",
          category: "Oil & Gas Infrastructure",
          description:
            "End-to-end engineering and consultancy for offshore pipeline infrastructure from concept to life-cycle management.",
          capabilities: [
            "Concept & Feasibility Studies",
            "Engineering & Design (FEED & Detailed)",
            "Installation Engineering & Sea Operations Support",
            "Integrity Management & O&M",
            "Flow assurance and hydraulic modeling",
            "Digital twin and integrity monitoring systems",
          ],
        },
        {
          id: "chemical-fertilizer",
          icon: a.jsx(Gs, { className: "h-6 w-6" }),
          title: "Chemical & Fertilizer Plants",
          category: "Industrial Plants",
          description:
            "End-to-end engineering, consultancy, and digital modernization for chemical and fertilizer plants.",
          capabilities: [
            "Feasibility & Concept Development",
            "Process Design & Engineering",
            "Plant Construction & Commissioning Support",
            "Revamp & Debottlenecking",
            "Safety & Environmental Compliance",
            "Advanced process control and optimization",
          ],
        },
        {
          id: "offshore-oil-gas",
          icon: a.jsx(dc, { className: "h-6 w-6" }),
          title: "Offshore Oil & Gas",
          category: "Oil & Gas Infrastructure",
          description:
            "End-to-end consultancy and engineering for offshore oil and gas projects with technical precision and safety.",
          capabilities: [
            "Field Development & Feasibility Studies",
            "Engineering & Design (Topsides, Subsea)",
            "Construction, Installation & Commissioning",
            "Operations & Asset Integrity Management",
            "Floating and fixed platform design",
            "Digital monitoring and predictive maintenance",
          ],
        },
        {
          id: "refinery",
          icon: a.jsx(Gs, { className: "h-6 w-6" }),
          title: "Oil Refinery & Downstream",
          category: "Oil & Gas Infrastructure",
          description:
            "Comprehensive consultancy and engineering for refinery and downstream operations with focus on efficiency and sustainability.",
          capabilities: [
            "Feasibility & Concept Development",
            "Refinery Design & Engineering",
            "Construction & Commissioning Support",
            "Operations Optimization & Digital Integration",
            "Process configuration and technology selection",
            "Decarbonization and CCUS integration",
          ],
        },
        {
          id: "ports",
          icon: a.jsx(E1, { className: "h-6 w-6" }),
          title: "Ports & Terminals",
          category: "Logistics Infrastructure",
          description:
            "End-to-end consultancy and engineering for marine terminals, cargo handling, and energy export/import infrastructure.",
          capabilities: [
            "Feasibility & Master Planning",
            "Marine & Civil Engineering Design",
            "Oil, Gas & Chemical Terminal Systems",
            "Cargo Handling & Automation",
            "Operations & Digital Integration",
            "Smart terminal management systems",
          ],
        },
        {
          id: "digital-transformation",
          icon: a.jsx(m1, { className: "h-6 w-6" }),
          title: "Digital Transformation",
          category: "Technology Solutions",
          description:
            "Technology-driven solutions empowering energy-intensive industries to achieve world-class performance.",
          capabilities: [
            "Industrial IoT & Smart Monitoring",
            "Energy Dashboards & SaaS Analytics",
            "AI-Powered Predictive Maintenance",
            "ERP & Enterprise Integration",
            "Digital twin modeling",
            "Cloud-based performance monitoring",
          ],
        },
      ],
      t = [
        "All Services",
        "Renewable Energy",
        "Power Generation",
        "Gas Infrastructure",
        "Oil & Gas Infrastructure",
        "Industrial Plants",
        "Logistics Infrastructure",
        "Trading & Logistics",
        "Technology Solutions",
      ],
      n = (r) => (r === "All Services" ? e : e.filter((o) => o.category === r));
    return a.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [
        a.jsx(Yn, {}),
        a.jsxs("main", {
          className: "flex-grow",
          children: [
            a.jsx("section", {
              className:
                "relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10",
              children: a.jsx("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: a.jsxs("div", {
                  className: "max-w-4xl mx-auto text-center animate-fade-in",
                  children: [
                    a.jsx("h1", {
                      className:
                        "text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6",
                      children: "Our Services",
                    }),
                    a.jsx("p", {
                      className:
                        "text-lg md:text-xl text-muted-foreground mb-8",
                      children:
                        "Comprehensive energy consulting, engineering, and digital transformation solutions across renewable energy, oil & gas, thermal power, and sustainable infrastructure.",
                    }),
                  ],
                }),
              }),
            }),
            a.jsx("section", {
              className: "py-20",
              children: a.jsx("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: a.jsxs(UN, {
                  defaultValue: "All Services",
                  className: "w-full",
                  children: [
                    a.jsx(Ey, {
                      className:
                        "w-full flex-wrap h-auto justify-start gap-2 mb-12 bg-muted",
                      children: t.map((r) =>
                        a.jsx(
                          ky,
                          {
                            value: r,
                            className:
                              "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2",
                            children: r,
                          },
                          r
                        )
                      ),
                    }),
                    t.map((r) =>
                      a.jsx(
                        Py,
                        {
                          value: r,
                          className: "mt-8 animate-fade-in",
                          children: a.jsx("div", {
                            className:
                              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: n(r).map((o, i) =>
                              a.jsxs(
                                de,
                                {
                                  className:
                                    "group hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
                                  style: { animationDelay: `${i * 100}ms` },
                                  children: [
                                    a.jsxs(Be, {
                                      children: [
                                        a.jsxs("div", {
                                          className:
                                            "flex items-center gap-3 mb-3",
                                          children: [
                                            a.jsx("div", {
                                              className:
                                                "p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors",
                                              children: o.icon,
                                            }),
                                            a.jsx("span", {
                                              className:
                                                "text-sm font-medium text-muted-foreground",
                                              children: o.category,
                                            }),
                                          ],
                                        }),
                                        a.jsx(Ve, {
                                          className: "text-xl font-heading",
                                          children: o.title,
                                        }),
                                        a.jsx(We, {
                                          className: "text-base",
                                          children: o.description,
                                        }),
                                      ],
                                    }),
                                    a.jsx(Se, {
                                      children: a.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                          a.jsx("p", {
                                            className:
                                              "font-semibold text-sm text-muted-foreground mb-3",
                                            children: "Key Capabilities:",
                                          }),
                                          a.jsxs("ul", {
                                            className: "space-y-2",
                                            children: [
                                              o.capabilities
                                                .slice(0, 4)
                                                .map((s, l) =>
                                                  a.jsxs(
                                                    "li",
                                                    {
                                                      className:
                                                        "text-sm flex items-start gap-2",
                                                      children: [
                                                        a.jsx("span", {
                                                          className:
                                                            "text-primary mt-1",
                                                          children: "•",
                                                        }),
                                                        a.jsx("span", {
                                                          children: s,
                                                        }),
                                                      ],
                                                    },
                                                    l
                                                  )
                                                ),
                                              o.capabilities.length > 4 &&
                                                a.jsxs("li", {
                                                  className:
                                                    "text-sm text-muted-foreground italic",
                                                  children: [
                                                    "+ ",
                                                    o.capabilities.length - 4,
                                                    " more capabilities",
                                                  ],
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                },
                                o.id
                              )
                            ),
                          }),
                        },
                        r
                      )
                    ),
                  ],
                }),
              }),
            }),
            a.jsx("section", {
              className: "py-20 bg-muted/30",
              children: a.jsxs("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                  a.jsxs("div", {
                    className: "max-w-4xl mx-auto text-center mb-12",
                    children: [
                      a.jsx("h2", {
                        className:
                          "text-3xl md:text-4xl font-heading font-bold mb-4",
                        children: "Why Choose PRY Green Tech?",
                      }),
                      a.jsx("p", {
                        className: "text-lg text-muted-foreground",
                        children:
                          "Our expertise and commitment set us apart in the energy consulting industry",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: [
                      a.jsx(de, {
                        className: "text-center",
                        children: a.jsxs(Be, {
                          children: [
                            a.jsx(Ve, {
                              className: "text-4xl font-bold text-primary mb-2",
                              children: "500+",
                            }),
                            a.jsx(We, { children: "Projects Delivered" }),
                          ],
                        }),
                      }),
                      a.jsx(de, {
                        className: "text-center",
                        children: a.jsxs(Be, {
                          children: [
                            a.jsx(Ve, {
                              className: "text-4xl font-bold text-primary mb-2",
                              children: "50+",
                            }),
                            a.jsx(We, { children: "Industry Experts" }),
                          ],
                        }),
                      }),
                      a.jsx(de, {
                        className: "text-center",
                        children: a.jsxs(Be, {
                          children: [
                            a.jsx(Ve, {
                              className: "text-4xl font-bold text-primary mb-2",
                              children: "25+",
                            }),
                            a.jsx(We, { children: "Years Experience" }),
                          ],
                        }),
                      }),
                      a.jsx(de, {
                        className: "text-center",
                        children: a.jsxs(Be, {
                          children: [
                            a.jsx(Ve, {
                              className: "text-4xl font-bold text-primary mb-2",
                              children: "100%",
                            }),
                            a.jsx(We, { children: "Client Satisfaction" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            a.jsx(iy, {}),
          ],
        }),
        a.jsx(Xn, {}),
      ],
    });
  },
  $o = v.forwardRef(({ className: e, type: t, ...n }, r) =>
    a.jsx("input", {
      type: t,
      className: xe(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ref: r,
      ...n,
    })
  );
$o.displayName = "Input";
const Ty = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx("textarea", {
    className: xe(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...t,
  })
);
Ty.displayName = "Textarea";
var VN = "Label",
  Ry = v.forwardRef((e, t) =>
    a.jsx(ve.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var o;
        n.target.closest("button, input, select, textarea") ||
          ((o = e.onMouseDown) == null || o.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    })
  );
Ry.displayName = VN;
var Oy = Ry;
const WN = xa(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  Or = v.forwardRef(({ className: e, ...t }, n) =>
    a.jsx(Oy, { ref: n, className: xe(WN(), e), ...t })
  );
Or.displayName = Oy.displayName;
const HN = () => {
    const { toast: e } = ph(),
      [t, n] = v.useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    v.useEffect(() => {
      document.title = "Contact Us - PRY GreenTech LLP | Get in Touch";
      const s = document.querySelector('meta[name="description"]');
      s &&
        s.setAttribute(
          "content",
          "Contact PRY GreenTech LLP for expert energy consulting services. Reach out to discuss your project needs and sustainability goals."
        );
    }, []);
    const r = (s) => {
        s.preventDefault(),
          e({
            title: "Message Sent!",
            description:
              "Thank you for reaching out. We'll get back to you soon.",
          }),
          n({ name: "", email: "", phone: "", company: "", message: "" });
      },
      o = (s) => {
        n((l) => ({ ...l, [s.target.name]: s.target.value }));
      },
      i = [
        {
          icon: Ti,
          title: "Office Address",
          details: [
            "[Your Office Address Line 1]",
            "[City, State, PIN Code]",
            "[Country]",
          ],
        },
        {
          icon: Kh,
          title: "Phone Numbers",
          details: ["[+XX XXX XXX XXXX]", "[+XX XXX XXX XXXX]"],
        },
        {
          icon: Eu,
          title: "Email Addresses",
          details: ["info@prygreentech.com", "contact@prygreentech.com"],
        },
        {
          icon: ju,
          title: "Business Hours",
          details: [
            "Monday - Friday: 9:00 AM - 6:00 PM",
            "Saturday: 9:00 AM - 1:00 PM",
            "Sunday: Closed",
          ],
        },
      ];
    return a.jsxs("div", {
      className: "flex min-h-screen flex-col",
      children: [
        a.jsx(Yn, {}),
        a.jsxs("main", {
          className: "flex-1",
          children: [
            a.jsxs("section", {
              className:
                "relative h-[300px] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden",
              children: [
                a.jsx("div", {
                  className:
                    "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a')] bg-cover bg-center opacity-10",
                }),
                a.jsxs("div", {
                  className:
                    "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in",
                  children: [
                    a.jsx("h1", {
                      className:
                        "text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4",
                      children: "Contact Us",
                    }),
                    a.jsx("p", {
                      className: "text-xl text-white/90 max-w-3xl mx-auto",
                      children:
                        "Let's discuss how we can help with your energy needs",
                    }),
                  ],
                }),
              ],
            }),
            a.jsx("section", {
              className: "py-20 bg-background",
              children: a.jsx("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: a.jsxs("div", {
                  className: "grid lg:grid-cols-2 gap-12",
                  children: [
                    a.jsxs("div", {
                      className: "animate-slide-in-left",
                      children: [
                        a.jsx("h2", {
                          className:
                            "text-3xl font-heading font-bold text-foreground mb-6",
                          children: "Send Us a Message",
                        }),
                        a.jsx(de, {
                          children: a.jsx(Se, {
                            className: "p-6",
                            children: a.jsxs("form", {
                              onSubmit: r,
                              className: "space-y-6",
                              children: [
                                a.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    a.jsx(Or, {
                                      htmlFor: "name",
                                      children: "Full Name *",
                                    }),
                                    a.jsx($o, {
                                      id: "name",
                                      name: "name",
                                      value: t.name,
                                      onChange: o,
                                      required: !0,
                                      placeholder: "John Doe",
                                    }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    a.jsx(Or, {
                                      htmlFor: "email",
                                      children: "Email Address *",
                                    }),
                                    a.jsx($o, {
                                      id: "email",
                                      name: "email",
                                      type: "email",
                                      value: t.email,
                                      onChange: o,
                                      required: !0,
                                      placeholder: "john@example.com",
                                    }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    a.jsx(Or, {
                                      htmlFor: "phone",
                                      children: "Phone Number",
                                    }),
                                    a.jsx($o, {
                                      id: "phone",
                                      name: "phone",
                                      type: "tel",
                                      value: t.phone,
                                      onChange: o,
                                      placeholder: "+1 234 567 8900",
                                    }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    a.jsx(Or, {
                                      htmlFor: "company",
                                      children: "Company Name",
                                    }),
                                    a.jsx($o, {
                                      id: "company",
                                      name: "company",
                                      value: t.company,
                                      onChange: o,
                                      placeholder: "Your Company",
                                    }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    a.jsx(Or, {
                                      htmlFor: "message",
                                      children: "Message *",
                                    }),
                                    a.jsx(Ty, {
                                      id: "message",
                                      name: "message",
                                      value: t.message,
                                      onChange: o,
                                      required: !0,
                                      rows: 5,
                                      placeholder:
                                        "Tell us about your project or inquiry...",
                                    }),
                                  ],
                                }),
                                a.jsx(Ee, {
                                  type: "submit",
                                  size: "lg",
                                  className: "w-full",
                                  children: "Send Message",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        a.jsxs("div", {
                          className: "animate-slide-up",
                          children: [
                            a.jsx("h2", {
                              className:
                                "text-3xl font-heading font-bold text-foreground mb-6",
                              children: "Get in Touch",
                            }),
                            a.jsx("p", {
                              className: "text-foreground/70 mb-8",
                              children:
                                "[Add your contact introduction text here - encourage visitors to reach out, mention your availability, response time, etc.]",
                            }),
                          ],
                        }),
                        a.jsx("div", {
                          className: "space-y-4",
                          children: i.map((s, l) =>
                            a.jsx(
                              de,
                              {
                                className:
                                  "animate-scale-in hover:shadow-lg transition-all duration-300",
                                style: { animationDelay: `${l * 0.1}s` },
                                children: a.jsx(Se, {
                                  className: "p-6",
                                  children: a.jsxs("div", {
                                    className: "flex items-start",
                                    children: [
                                      a.jsx("div", {
                                        className:
                                          "w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0",
                                        children: a.jsx(s.icon, {
                                          className: "w-6 h-6 text-white",
                                        }),
                                      }),
                                      a.jsxs("div", {
                                        className: "ml-4",
                                        children: [
                                          a.jsx("h3", {
                                            className:
                                              "font-heading font-bold text-foreground mb-2",
                                            children: s.title,
                                          }),
                                          s.details.map((c, u) =>
                                            a.jsx(
                                              "p",
                                              {
                                                className:
                                                  "text-sm text-foreground/70",
                                                children: c,
                                              },
                                              u
                                            )
                                          ),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              },
                              l
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            a.jsx("section", {
              className: "py-20 bg-muted/30",
              children: a.jsxs("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                  a.jsxs("div", {
                    className: "text-center mb-12",
                    children: [
                      a.jsx("h2", {
                        className:
                          "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4",
                        children: "Visit Our Office",
                      }),
                      a.jsx("p", {
                        className: "text-foreground/70 max-w-2xl mx-auto",
                        children:
                          "[Add text about visiting your office, directions, parking information, etc.]",
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className:
                      "rounded-lg overflow-hidden shadow-lg h-[400px] bg-muted flex items-center justify-center",
                    children: a.jsx("p", {
                      className: "text-foreground/50",
                      children:
                        "[Embed Google Maps here - Replace with actual map embed code]",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        a.jsx(Xn, {}),
      ],
    });
  },
  GN = () => {
    v.useEffect(() => {
      document.title = "Careers - PRY GreenTech LLP | Join Our Team";
      const n = document.querySelector('meta[name="description"]');
      n &&
        n.setAttribute(
          "content",
          "Explore career opportunities at PRY GreenTech LLP. Join our team of energy consulting professionals and make an impact in sustainable solutions."
        );
    }, []);
    const e = [
        {
          icon: ku,
          title: "Career Growth",
          description: "Continuous learning and development opportunities",
        },
        {
          icon: Yh,
          title: "Collaborative Culture",
          description: "Work with industry experts and thought leaders",
        },
        {
          icon: w1,
          title: "Work-Life Balance",
          description: "Flexible work arrangements and comprehensive benefits",
        },
        {
          icon: p1,
          title: "Challenging Projects",
          description:
            "Work on cutting-edge energy and sustainability projects",
        },
      ],
      t = [
        {
          title: "Senior Energy Consultant",
          department: "Consulting",
          location: "Mumbai, India",
          type: "Full-time",
          experience: "5-8 years",
          description:
            "Lead energy consulting projects for major clients in renewable energy and oil & gas sectors.",
        },
        {
          title: "Project Manager - Renewable Energy",
          department: "Project Management",
          location: "Bangalore, India",
          type: "Full-time",
          experience: "7-10 years",
          description:
            "Manage large-scale renewable energy projects from conception to commissioning.",
        },
        {
          title: "Pipeline Engineer",
          department: "Engineering",
          location: "Delhi, India",
          type: "Full-time",
          experience: "3-5 years",
          description:
            "Design and oversee pipeline infrastructure projects for oil, gas, and water systems.",
        },
        {
          title: "Sustainability Analyst",
          department: "Research & Analysis",
          location: "Remote",
          type: "Full-time",
          experience: "2-4 years",
          description:
            "Analyze and develop sustainability strategies for clients across various industries.",
        },
      ];
    return a.jsxs("div", {
      className: "flex min-h-screen flex-col",
      children: [
        a.jsx(Yn, {}),
        a.jsxs("main", {
          className: "flex-1",
          children: [
            a.jsxs("section", {
              className:
                "relative h-[400px] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden",
              children: [
                a.jsx("div", {
                  className:
                    "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')] bg-cover bg-center opacity-10",
                }),
                a.jsxs("div", {
                  className:
                    "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in",
                  children: [
                    a.jsx("h1", {
                      className:
                        "text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4",
                      children: "Join Our Team",
                    }),
                    a.jsx("p", {
                      className: "text-xl text-white/90 max-w-3xl mx-auto",
                      children:
                        "Build your career with leaders in energy consulting",
                    }),
                  ],
                }),
              ],
            }),
            a.jsx("section", {
              className: "py-20 bg-background",
              children: a.jsxs("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                  a.jsxs("div", {
                    className: "text-center mb-12 animate-slide-up",
                    children: [
                      a.jsx("h2", {
                        className:
                          "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4",
                        children: "Why Work With Us?",
                      }),
                      a.jsx("p", {
                        className:
                          "text-lg text-foreground/70 max-w-3xl mx-auto",
                        children:
                          "[Add text about your company culture, values, and what makes PRY GreenTech a great place to work]",
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: e.map((n, r) =>
                      a.jsx(
                        de,
                        {
                          className:
                            "animate-scale-in hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
                          style: { animationDelay: `${r * 0.1}s` },
                          children: a.jsxs(Se, {
                            className: "p-6 text-center",
                            children: [
                              a.jsx("div", {
                                className:
                                  "w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4",
                                children: a.jsx(n.icon, {
                                  className: "w-8 h-8 text-white",
                                }),
                              }),
                              a.jsx("h3", {
                                className:
                                  "text-xl font-heading font-bold text-foreground mb-2",
                                children: n.title,
                              }),
                              a.jsx("p", {
                                className: "text-sm text-foreground/70",
                                children: n.description,
                              }),
                            ],
                          }),
                        },
                        r
                      )
                    ),
                  }),
                ],
              }),
            }),
            a.jsx("section", {
              className: "py-20 bg-muted/30",
              children: a.jsxs("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                  a.jsxs("div", {
                    className: "text-center mb-12 animate-slide-up",
                    children: [
                      a.jsx("h2", {
                        className:
                          "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4",
                        children: "Current Openings",
                      }),
                      a.jsx("p", {
                        className:
                          "text-lg text-foreground/70 max-w-3xl mx-auto",
                        children:
                          "Explore exciting opportunities to grow your career with us",
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "space-y-6 max-w-4xl mx-auto",
                    children: t.map((n, r) =>
                      a.jsxs(
                        de,
                        {
                          className:
                            "animate-slide-up hover:shadow-lg transition-all duration-300",
                          style: { animationDelay: `${r * 0.1}s` },
                          children: [
                            a.jsx(Be, {
                              children: a.jsx("div", {
                                className:
                                  "flex flex-wrap items-start justify-between gap-4",
                                children: a.jsxs("div", {
                                  children: [
                                    a.jsx(Ve, {
                                      className: "text-2xl mb-2",
                                      children: n.title,
                                    }),
                                    a.jsxs("div", {
                                      className: "flex flex-wrap gap-2 mb-3",
                                      children: [
                                        a.jsx(xr, {
                                          variant: "secondary",
                                          children: n.department,
                                        }),
                                        a.jsx(xr, {
                                          variant: "outline",
                                          children: n.type,
                                        }),
                                      ],
                                    }),
                                    a.jsx(We, {
                                      className: "text-base",
                                      children: n.description,
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            a.jsxs(Se, {
                              children: [
                                a.jsxs("div", {
                                  className:
                                    "flex flex-wrap gap-6 mb-4 text-sm text-foreground/70",
                                  children: [
                                    a.jsxs("div", {
                                      className: "flex items-center",
                                      children: [
                                        a.jsx(Ti, {
                                          className:
                                            "w-4 h-4 mr-2 text-primary",
                                        }),
                                        n.location,
                                      ],
                                    }),
                                    a.jsxs("div", {
                                      className: "flex items-center",
                                      children: [
                                        a.jsx(ju, {
                                          className:
                                            "w-4 h-4 mr-2 text-primary",
                                        }),
                                        n.experience,
                                      ],
                                    }),
                                  ],
                                }),
                                a.jsx(Ee, {
                                  asChild: !0,
                                  children: a.jsx(ee, {
                                    to: "/contact",
                                    children: "Apply Now",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        r
                      )
                    ),
                  }),
                  a.jsxs("div", {
                    className: "text-center mt-12",
                    children: [
                      a.jsx("p", {
                        className: "text-foreground/70 mb-4",
                        children:
                          "Don't see a role that fits? We're always looking for talented individuals.",
                      }),
                      a.jsx(Ee, {
                        asChild: !0,
                        variant: "outline",
                        size: "lg",
                        children: a.jsx(ee, {
                          to: "/contact",
                          children: "Send Us Your Resume",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            a.jsx("section", {
              className: "py-20 bg-background",
              children: a.jsx("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: a.jsxs("div", {
                  className: "grid md:grid-cols-2 gap-12 items-center",
                  children: [
                    a.jsxs("div", {
                      className: "animate-slide-in-left",
                      children: [
                        a.jsx("h2", {
                          className:
                            "text-3xl md:text-4xl font-heading font-bold text-foreground mb-6",
                          children: "Internship & Training Programs",
                        }),
                        a.jsx("p", {
                          className: "text-foreground/70 mb-6",
                          children:
                            "[Add text about your internship programs, training opportunities, and how you develop fresh talent in the energy sector]",
                        }),
                        a.jsxs("ul", {
                          className: "space-y-3 mb-6",
                          children: [
                            a.jsxs("li", {
                              className: "flex items-start",
                              children: [
                                a.jsx("span", {
                                  className:
                                    "w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0",
                                }),
                                a.jsx("span", {
                                  className: "text-foreground/70",
                                  children:
                                    "Hands-on experience on real projects",
                                }),
                              ],
                            }),
                            a.jsxs("li", {
                              className: "flex items-start",
                              children: [
                                a.jsx("span", {
                                  className:
                                    "w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0",
                                }),
                                a.jsx("span", {
                                  className: "text-foreground/70",
                                  children: "Mentorship from industry experts",
                                }),
                              ],
                            }),
                            a.jsxs("li", {
                              className: "flex items-start",
                              children: [
                                a.jsx("span", {
                                  className:
                                    "w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0",
                                }),
                                a.jsx("span", {
                                  className: "text-foreground/70",
                                  children:
                                    "Structured learning and development",
                                }),
                              ],
                            }),
                            a.jsxs("li", {
                              className: "flex items-start",
                              children: [
                                a.jsx("span", {
                                  className:
                                    "w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0",
                                }),
                                a.jsx("span", {
                                  className: "text-foreground/70",
                                  children:
                                    "Potential for full-time employment",
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsx(Ee, {
                          asChild: !0,
                          size: "lg",
                          children: a.jsx(ee, {
                            to: "/contact",
                            children: "Learn About Internships",
                          }),
                        }),
                      ],
                    }),
                    a.jsx("div", {
                      className: "animate-scale-in",
                      style: { animationDelay: "0.2s" },
                      children: a.jsx("img", {
                        src: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
                        alt: "Team collaboration",
                        className:
                          "rounded-lg shadow-lg w-full h-[400px] object-cover",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        a.jsx(Xn, {}),
      ],
    });
  },
  QN = [
    {
      icon: Gh,
      title: "Oil & Gas",
      description:
        "Comprehensive solutions for upstream, midstream, and downstream operations",
      services: [
        "Exploration & Production optimization",
        "Refinery process engineering",
        "Pipeline design & integrity management",
        "HSE & risk assessment",
      ],
    },
    {
      icon: Qh,
      title: "Renewable Energy",
      description: "Future-focused solutions for clean energy transition",
      services: [
        "Solar & wind farm development",
        "Hydro power projects",
        "Energy storage systems",
        "Grid integration studies",
      ],
    },
    {
      icon: Wh,
      title: "Infrastructure",
      description: "Smart and sustainable energy infrastructure development",
      services: [
        "Smart city energy systems",
        "Industrial park utilities",
        "District cooling/heating",
        "Critical infrastructure protection",
      ],
    },
    {
      icon: Xh,
      title: "Power Generation",
      description: "Reliable and efficient power generation solutions",
      services: [
        "Thermal & combined cycle plants",
        "Cogeneration systems",
        "Distributed generation",
        "Power plant optimization",
      ],
    },
    {
      icon: Gs,
      title: "Chemical & Process",
      description: "Advanced engineering for process industries",
      services: [
        "Petrochemical facilities",
        "Specialty chemicals",
        "Process optimization",
        "Safety & compliance",
      ],
    },
    {
      icon: Hh,
      title: "Digital Solutions",
      description: "Cutting-edge digital transformation for energy sector",
      services: [
        "IoT & sensor networks",
        "AI-powered analytics",
        "Digital twin technology",
        "Predictive maintenance",
      ],
    },
  ],
  KN = () => (
    v.useEffect(() => {
      document.title = "Industries We Serve | PRY Green Tech";
      const e = document.querySelector('meta[name="description"]');
      e &&
        e.setAttribute(
          "content",
          "Specialized engineering and consulting solutions across oil & gas, renewable energy, infrastructure, power generation, chemical processing, and digital transformation sectors."
        );
    }, []),
    a.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [
        a.jsx(Yn, {}),
        a.jsxs("main", {
          className: "flex-1",
          children: [
            a.jsx("section", {
              className:
                "bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20",
              children: a.jsx("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: a.jsxs("div", {
                  className: "max-w-3xl mx-auto text-center animate-slide-up",
                  children: [
                    a.jsx("h1", {
                      className:
                        "text-4xl md:text-5xl font-heading font-bold text-foreground mb-6",
                      children: "Industries We Serve",
                    }),
                    a.jsx("p", {
                      className: "text-lg text-muted-foreground mb-8",
                      children:
                        "Delivering specialized engineering and consulting solutions across diverse energy sectors with deep industry expertise and innovative approaches",
                    }),
                  ],
                }),
              }),
            }),
            a.jsx("section", {
              className: "py-20 bg-background",
              children: a.jsx("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: a.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                  children: QN.map((e, t) =>
                    a.jsxs(
                      de,
                      {
                        className:
                          "transition-all duration-300 hover:shadow-xl hover:border-primary/50 animate-scale-in group",
                        style: { animationDelay: `${t * 100}ms` },
                        children: [
                          a.jsxs(Be, {
                            children: [
                              a.jsx("div", {
                                className:
                                  "w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",
                                children: a.jsx(e.icon, {
                                  className: "w-8 h-8 text-primary",
                                }),
                              }),
                              a.jsx(Ve, {
                                className:
                                  "text-2xl font-heading group-hover:text-primary transition-colors",
                                children: e.title,
                              }),
                              a.jsx(We, {
                                className: "text-base pt-2",
                                children: e.description,
                              }),
                            ],
                          }),
                          a.jsx(Se, {
                            children: a.jsx("ul", {
                              className: "space-y-2",
                              children: e.services.map((n) =>
                                a.jsxs(
                                  "li",
                                  {
                                    className:
                                      "flex items-start text-sm text-muted-foreground",
                                    children: [
                                      a.jsx(Wt, {
                                        className:
                                          "w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0",
                                      }),
                                      a.jsx("span", { children: n }),
                                    ],
                                  },
                                  n
                                )
                              ),
                            }),
                          }),
                        ],
                      },
                      e.title
                    )
                  ),
                }),
              }),
            }),
            a.jsx("section", {
              className:
                "py-20 bg-gradient-to-br from-primary/5 to-secondary/5",
              children: a.jsx("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center",
                children: a.jsxs("div", {
                  className: "max-w-3xl mx-auto animate-slide-up",
                  children: [
                    a.jsx("h2", {
                      className:
                        "text-3xl md:text-4xl font-heading font-bold text-foreground mb-6",
                      children: "Partner with Industry Experts",
                    }),
                    a.jsx("p", {
                      className: "text-lg text-muted-foreground mb-8",
                      children:
                        "Let's discuss how our specialized expertise can drive success in your industry",
                    }),
                    a.jsxs("div", {
                      className:
                        "flex flex-col sm:flex-row gap-4 justify-center",
                      children: [
                        a.jsx(Ee, {
                          asChild: !0,
                          size: "lg",
                          className:
                            "shadow-lg hover:shadow-xl transition-shadow",
                          children: a.jsxs(ee, {
                            to: "/contact",
                            children: [
                              "Get in Touch",
                              a.jsx(Wt, { className: "ml-2", size: 20 }),
                            ],
                          }),
                        }),
                        a.jsx(Ee, {
                          asChild: !0,
                          size: "lg",
                          variant: "outline",
                          children: a.jsx(ee, {
                            to: "/projects",
                            children: "View Our Projects",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        a.jsx(Xn, {}),
      ],
    })
  ),
  YN = [
    {
      title: "150 MW Solar Power Plant",
      category: "Renewable Energy",
      location: "Rajasthan, India",
      year: "2024",
      description:
        "Complete FEED and project management for a large-scale solar installation, reducing carbon emissions by 200,000 tons annually. Implemented advanced tracking systems and optimized panel layouts for maximum efficiency.",
      results: [
        "30% cost reduction",
        "6 months early completion",
        "200,000 tons CO2 reduction/year",
      ],
      scope: [
        "FEED Study",
        "EPC Management",
        "Commissioning",
        "Performance Testing",
      ],
    },
    {
      title: "Refinery Optimization Program",
      category: "Oil & Gas",
      location: "Gujarat, India",
      year: "2023-2024",
      description:
        "De-bottlenecking and process optimization for a major refinery, increasing throughput capacity by 15%. Implemented advanced process control systems and upgraded critical equipment.",
      results: [
        "$50M annual savings",
        "15% capacity increase",
        "20% energy efficiency improvement",
      ],
      scope: [
        "Process Analysis",
        "Equipment Upgrade",
        "Safety Enhancement",
        "Training",
      ],
    },
    {
      title: "Pipeline Infrastructure Design",
      category: "Infrastructure",
      location: "Maharashtra, India",
      year: "2023",
      description:
        "Design and engineering of 500km natural gas pipeline with advanced safety and monitoring systems. Included environmental impact assessment and stakeholder management.",
      results: ["Zero incidents", "On-time delivery", "15% under budget"],
      scope: [
        "Route Survey",
        "Detailed Engineering",
        "Safety Systems",
        "Commissioning",
      ],
    },
    {
      title: "Wind Farm Development",
      category: "Renewable Energy",
      location: "Tamil Nadu, India",
      year: "2022-2023",
      description:
        "Complete project lifecycle support for 200 MW wind farm including site assessment, turbine selection, and grid integration. Implemented state-of-the-art SCADA systems.",
      results: [
        "200 MW capacity",
        "25-year PPA secured",
        "Local employment for 500+",
      ],
      scope: [
        "Wind Resource Assessment",
        "Layout Optimization",
        "Grid Studies",
        "EPC Support",
      ],
    },
    {
      title: "Petrochemical Plant Expansion",
      category: "Chemical & Process",
      location: "Odisha, India",
      year: "2022",
      description:
        "Engineering and project management for petrochemical complex expansion, adding new production lines while maintaining operations. Enhanced safety systems and environmental controls.",
      results: [
        "40% capacity increase",
        "Zero downtime",
        "ISO 14001 certification",
      ],
      scope: [
        "Brownfield Engineering",
        "Tie-ins",
        "Commissioning",
        "Operator Training",
      ],
    },
    {
      title: "Smart Grid Implementation",
      category: "Digital Solutions",
      location: "Karnataka, India",
      year: "2021-2022",
      description:
        "Digital transformation project implementing IoT sensors, AI analytics, and predictive maintenance systems across distribution network. Reduced outages by 60%.",
      results: [
        "60% reduction in outages",
        "$10M savings",
        "99.8% uptime achieved",
      ],
      scope: [
        "IoT Deployment",
        "Analytics Platform",
        "Integration",
        "Change Management",
      ],
    },
  ],
  XN = () => (
    v.useEffect(() => {
      document.title = "Featured Projects | PRY Green Tech";
      const e = document.querySelector('meta[name="description"]');
      e &&
        e.setAttribute(
          "content",
          "Explore our portfolio of successful energy projects across renewable energy, oil & gas, infrastructure, and digital transformation with proven results and industry-leading outcomes."
        );
    }, []),
    a.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [
        a.jsx(Yn, {}),
        a.jsxs("main", {
          className: "flex-1",
          children: [
            a.jsx("section", {
              className:
                "bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20",
              children: a.jsx("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: a.jsxs("div", {
                  className: "max-w-3xl mx-auto text-center animate-slide-up",
                  children: [
                    a.jsx("h1", {
                      className:
                        "text-4xl md:text-5xl font-heading font-bold text-foreground mb-6",
                      children: "Featured Projects",
                    }),
                    a.jsx("p", {
                      className: "text-lg text-muted-foreground mb-8",
                      children:
                        "Real results from real projects across the energy spectrum. See how we deliver exceptional outcomes for our clients.",
                    }),
                  ],
                }),
              }),
            }),
            a.jsx("section", {
              className: "py-20 bg-background",
              children: a.jsx("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: a.jsx("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                  children: YN.map((e, t) =>
                    a.jsxs(
                      de,
                      {
                        className:
                          "flex flex-col transition-all duration-300 hover:shadow-xl hover:border-primary/50 animate-scale-in",
                        style: { animationDelay: `${t * 100}ms` },
                        children: [
                          a.jsxs(Be, {
                            children: [
                              a.jsxs("div", {
                                className:
                                  "flex items-start justify-between mb-3",
                                children: [
                                  a.jsx(xr, {
                                    variant: "secondary",
                                    className: "font-semibold",
                                    children: e.category,
                                  }),
                                  a.jsxs("div", {
                                    className:
                                      "text-sm text-muted-foreground flex items-center",
                                    children: [
                                      a.jsx(Cu, { className: "w-4 h-4 mr-1" }),
                                      e.year,
                                    ],
                                  }),
                                ],
                              }),
                              a.jsx(Ve, {
                                className: "text-2xl font-heading mb-2",
                                children: e.title,
                              }),
                              a.jsxs("div", {
                                className:
                                  "flex items-center text-sm text-muted-foreground mb-3",
                                children: [
                                  a.jsx(Ti, { className: "w-4 h-4 mr-1" }),
                                  e.location,
                                ],
                              }),
                              a.jsx(We, {
                                className: "text-base",
                                children: e.description,
                              }),
                            ],
                          }),
                          a.jsxs(Se, {
                            className: "flex-1 flex flex-col",
                            children: [
                              a.jsxs("div", {
                                className: "mb-6",
                                children: [
                                  a.jsxs("h4", {
                                    className:
                                      "font-semibold text-sm mb-3 flex items-center",
                                    children: [
                                      a.jsx(ku, {
                                        className: "w-4 h-4 mr-2 text-primary",
                                      }),
                                      "Key Results",
                                    ],
                                  }),
                                  a.jsx("div", {
                                    className: "space-y-2",
                                    children: e.results.map((n) =>
                                      a.jsxs(
                                        "div",
                                        {
                                          className: "flex items-start text-sm",
                                          children: [
                                            a.jsx(Wt, {
                                              className:
                                                "w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0",
                                            }),
                                            a.jsx("span", {
                                              className:
                                                "text-muted-foreground",
                                              children: n,
                                            }),
                                          ],
                                        },
                                        n
                                      )
                                    ),
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                className: "pt-4 border-t border-border",
                                children: [
                                  a.jsx("h4", {
                                    className: "font-semibold text-sm mb-3",
                                    children: "Scope of Work",
                                  }),
                                  a.jsx("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: e.scope.map((n) =>
                                      a.jsx(
                                        xr,
                                        {
                                          variant: "outline",
                                          className: "text-xs",
                                          children: n,
                                        },
                                        n
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      e.title
                    )
                  ),
                }),
              }),
            }),
            a.jsx("section", {
              className:
                "py-20 bg-gradient-to-br from-primary/5 to-secondary/5",
              children: a.jsx("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center",
                children: a.jsxs("div", {
                  className: "max-w-3xl mx-auto animate-slide-up",
                  children: [
                    a.jsx("h2", {
                      className:
                        "text-3xl md:text-4xl font-heading font-bold text-foreground mb-6",
                      children: "Ready to Start Your Project?",
                    }),
                    a.jsx("p", {
                      className: "text-lg text-muted-foreground mb-8",
                      children:
                        "Let's discuss how we can deliver exceptional results for your next energy project",
                    }),
                    a.jsx(Ee, {
                      asChild: !0,
                      size: "lg",
                      className: "shadow-lg hover:shadow-xl transition-shadow",
                      children: a.jsxs(ee, {
                        to: "/contact",
                        children: [
                          "Discuss Your Project",
                          a.jsx(Wt, { className: "ml-2", size: 20 }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        a.jsx(Xn, {}),
      ],
    })
  ),
  qN = [
    {
      title: "The Future of Renewable Energy in India",
      category: "Renewable Energy",
      date: "October 15, 2025",
      readTime: "8 min read",
      author: "Dr. Rajesh Kumar",
      excerpt:
        "Exploring emerging trends and opportunities in India's renewable energy sector, from solar to wind and beyond. Analysis of policy changes, technological advancements, and market dynamics shaping the clean energy transition.",
      link: "/insights/future-renewable-energy-india",
    },
    {
      title: "Optimizing Refinery Operations in 2025",
      category: "Oil & Gas",
      date: "October 10, 2025",
      readTime: "10 min read",
      author: "Priya Sharma",
      excerpt:
        "Key strategies for improving efficiency and reducing costs in modern refineries through digital transformation. Deep dive into process optimization, predictive maintenance, and advanced analytics implementation.",
      link: "/insights/refinery-optimization-2025",
    },
    {
      title: "Pipeline Safety: Best Practices & Technologies",
      category: "Infrastructure",
      date: "October 5, 2025",
      readTime: "12 min read",
      author: "Amit Patel",
      excerpt:
        "Comprehensive guide to modern pipeline safety protocols and emerging monitoring technologies. Covering regulatory compliance, integrity management, and incident prevention strategies.",
      link: "/insights/pipeline-safety-guide",
    },
    {
      title: "Digital Twin Technology in Energy Sector",
      category: "Digital Solutions",
      date: "September 28, 2025",
      readTime: "9 min read",
      author: "Dr. Sneha Verma",
      excerpt:
        "How digital twin technology is revolutionizing asset management and predictive maintenance in energy infrastructure. Real-world case studies and implementation roadmap.",
      link: "/insights/digital-twin-energy",
    },
    {
      title: "Hydrogen Economy: India's Green Fuel Future",
      category: "Renewable Energy",
      date: "September 20, 2025",
      readTime: "11 min read",
      author: "Dr. Rajesh Kumar",
      excerpt:
        "Analyzing India's hydrogen mission, production pathways, and potential applications across industries. Investment opportunities and technology considerations for stakeholders.",
      link: "/insights/hydrogen-economy-india",
    },
    {
      title: "ESG Compliance in Energy Projects",
      category: "Sustainability",
      date: "September 12, 2025",
      readTime: "7 min read",
      author: "Meera Reddy",
      excerpt:
        "Essential guidelines for meeting environmental, social, and governance requirements in modern energy projects. Framework for sustainable development and stakeholder engagement.",
      link: "/insights/esg-compliance-guide",
    },
    {
      title: "Smart Grid Implementation Challenges",
      category: "Infrastructure",
      date: "September 5, 2025",
      readTime: "10 min read",
      author: "Amit Patel",
      excerpt:
        "Navigating technical, financial, and regulatory challenges in smart grid deployment. Lessons learned from successful implementations and strategies for overcoming common obstacles.",
      link: "/insights/smart-grid-challenges",
    },
    {
      title: "Solar Power Purchase Agreements: A Guide",
      category: "Renewable Energy",
      date: "August 28, 2025",
      readTime: "8 min read",
      author: "Priya Sharma",
      excerpt:
        "Everything you need to know about structuring solar PPAs - terms, risks, and negotiation strategies. Comparative analysis of different PPA structures and market trends.",
      link: "/insights/solar-ppa-guide",
    },
    {
      title: "Process Safety Management in Chemical Plants",
      category: "Oil & Gas",
      date: "August 20, 2025",
      readTime: "13 min read",
      author: "Dr. Sneha Verma",
      excerpt:
        "Comprehensive framework for implementing process safety management systems. Best practices, regulatory requirements, and incident prevention methodologies.",
      link: "/insights/process-safety-management",
    },
  ],
  ZN = [
    "All",
    "Renewable Energy",
    "Oil & Gas",
    "Infrastructure",
    "Digital Solutions",
    "Sustainability",
  ],
  JN = () => (
    v.useEffect(() => {
      document.title = "Industry Insights & Articles | PRY Green Tech";
      const e = document.querySelector('meta[name="description"]');
      e &&
        e.setAttribute(
          "content",
          "Expert insights, industry analysis, and thought leadership on renewable energy, oil & gas, infrastructure, digital transformation, and sustainability in the energy sector."
        );
    }, []),
    a.jsxs("div", {
      className: "min-h-screen flex flex-col",
      children: [
        a.jsx(Yn, {}),
        a.jsxs("main", {
          className: "flex-1",
          children: [
            a.jsx("section", {
              className:
                "bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20",
              children: a.jsx("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: a.jsxs("div", {
                  className: "max-w-3xl mx-auto text-center animate-slide-up",
                  children: [
                    a.jsx("h1", {
                      className:
                        "text-4xl md:text-5xl font-heading font-bold text-foreground mb-6",
                      children: "Industry Insights",
                    }),
                    a.jsx("p", {
                      className: "text-lg text-muted-foreground mb-8",
                      children:
                        "Expert analysis, thought leadership, and practical insights from our team of energy sector specialists",
                    }),
                  ],
                }),
              }),
            }),
            a.jsx("section", {
              className: "py-8 bg-background border-b border-border",
              children: a.jsx("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: a.jsx("div", {
                  className: "flex flex-wrap gap-3 justify-center",
                  children: ZN.map((e, t) =>
                    a.jsx(
                      Ee,
                      {
                        variant: t === 0 ? "default" : "outline",
                        size: "sm",
                        className: "animate-scale-in",
                        style: { animationDelay: `${t * 50}ms` },
                        children: e,
                      },
                      e
                    )
                  ),
                }),
              }),
            }),
            a.jsx("section", {
              className: "py-20 bg-background",
              children: a.jsx("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: a.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                  children: qN.map((e, t) =>
                    a.jsx(
                      ee,
                      {
                        to: e.link,
                        className: "group animate-scale-in",
                        style: { animationDelay: `${t * 100}ms` },
                        children: a.jsxs(de, {
                          className:
                            "h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1",
                          children: [
                            a.jsxs(Be, {
                              children: [
                                a.jsxs("div", {
                                  className:
                                    "flex items-center justify-between mb-3",
                                  children: [
                                    a.jsx(xr, {
                                      variant: "outline",
                                      className: "font-semibold",
                                      children: e.category,
                                    }),
                                    a.jsxs("div", {
                                      className:
                                        "flex items-center text-xs text-muted-foreground",
                                      children: [
                                        a.jsx(ju, {
                                          className: "w-3 h-3 mr-1",
                                        }),
                                        e.readTime,
                                      ],
                                    }),
                                  ],
                                }),
                                a.jsx(Ve, {
                                  className:
                                    "text-xl font-heading group-hover:text-primary transition-colors line-clamp-2",
                                  children: e.title,
                                }),
                                a.jsx("div", {
                                  className:
                                    "flex items-center gap-4 text-sm text-muted-foreground pt-2",
                                  children: a.jsxs("div", {
                                    className: "flex items-center",
                                    children: [
                                      a.jsx(Cu, { className: "w-4 h-4 mr-1" }),
                                      e.date,
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            a.jsxs(Se, {
                              children: [
                                a.jsx(We, {
                                  className: "text-base mb-4 line-clamp-3",
                                  children: e.excerpt,
                                }),
                                a.jsxs("div", {
                                  className:
                                    "flex items-center text-sm text-muted-foreground pt-4 border-t border-border",
                                  children: [
                                    a.jsx(O1, { className: "w-4 h-4 mr-2" }),
                                    a.jsx("span", { children: e.author }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  className:
                                    "mt-4 flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform",
                                  children: [
                                    "Read Article",
                                    a.jsx(Wt, { className: "ml-2 w-4 h-4" }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      e.title
                    )
                  ),
                }),
              }),
            }),
            a.jsx("section", {
              className:
                "py-20 bg-gradient-to-br from-primary/5 to-secondary/5",
              children: a.jsx("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                children: a.jsxs(de, {
                  className: "max-w-3xl mx-auto animate-slide-up",
                  children: [
                    a.jsxs(Be, {
                      className: "text-center",
                      children: [
                        a.jsx(Ve, {
                          className: "text-3xl font-heading mb-4",
                          children: "Stay Updated with Our Insights",
                        }),
                        a.jsx(We, {
                          className: "text-base",
                          children:
                            "Subscribe to our newsletter and get the latest industry insights delivered to your inbox",
                        }),
                      ],
                    }),
                    a.jsxs(Se, {
                      className:
                        "flex flex-col sm:flex-row gap-4 justify-center",
                      children: [
                        a.jsx(Ee, {
                          asChild: !0,
                          size: "lg",
                          className:
                            "shadow-lg hover:shadow-xl transition-shadow",
                          children: a.jsxs(ee, {
                            to: "/contact",
                            children: [
                              "Subscribe Now",
                              a.jsx(Wt, { className: "ml-2", size: 20 }),
                            ],
                          }),
                        }),
                        a.jsx(Ee, {
                          asChild: !0,
                          size: "lg",
                          variant: "outline",
                          children: a.jsx(ee, {
                            to: "/about",
                            children: "Learn About Our Team",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        a.jsx(Xn, {}),
      ],
    })
  ),
  eC = () => {
    const e = Mi();
    return (
      v.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname
        );
      }, [e.pathname]),
      a.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-gray-100",
        children: a.jsxs("div", {
          className: "text-center",
          children: [
            a.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            a.jsx("p", {
              className: "mb-4 text-xl text-gray-600",
              children: "Oops! Page not found",
            }),
            a.jsx("a", {
              href: "/",
              className: "text-blue-500 underline hover:text-blue-700",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  tC = new nS(),
  nC = () =>
    a.jsx(oS, {
      client: tC,
      children: a.jsxs(Mb, {
        children: [
          a.jsx(pw, {}),
          a.jsx(Hw, {}),
          a.jsx(tN, {
            children: a.jsxs(KS, {
              children: [
                a.jsx(It, { path: "/", element: a.jsx(NN, {}) }),
                a.jsx(It, { path: "/about", element: a.jsx(CN, {}) }),
                a.jsx(It, { path: "/services", element: a.jsx(BN, {}) }),
                a.jsx(It, { path: "/industries", element: a.jsx(KN, {}) }),
                a.jsx(It, { path: "/projects", element: a.jsx(XN, {}) }),
                a.jsx(It, { path: "/insights", element: a.jsx(JN, {}) }),
                a.jsx(It, { path: "/contact", element: a.jsx(HN, {}) }),
                a.jsx(It, { path: "/careers", element: a.jsx(GN, {}) }),
                a.jsx(It, { path: "*", element: a.jsx(eC, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
fh(document.getElementById("root")).render(a.jsx(nC, {}));

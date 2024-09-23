(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return s(3086)
            }])
        },
        3086: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Feature: function() {
                    return J
                },
                default: function() {
                    return E
                }
            });
            var r = s(5893),
                l = s(1954),
                a = s(1664),
                n = s.n(a),
                i = s(9755),
                o = s.n(i),
                c = s(7294),
                d = s(4853),
                x = s(3152);

            function u() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                return t.filter(Boolean).join(" ")
            }

            function m(e) {
                let {
                    enabled: t,
                    onChange: s
                } = e;
                return (0, r.jsxs)(x.r, {
                    checked: t,
                    onChange: s,
                    className: u(t ? "bg-white" : "bg-black", "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-white transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white"),
                    children: [(0, r.jsx)("span", {
                        className: "sr-only",
                        children: "Use setting"
                    }), (0, r.jsxs)("span", {
                        className: u(t ? "translate-x-5 bg-black" : "translate-x-0 bg-white", "pointer-events-none relative inline-block h-5 w-5 transform rounded-full ring-0 transition duration-200 ease-in-out"),
                        children: [(0, r.jsx)("span", {
                            className: u(t ? "opacity-0 duration-100 ease-out" : "opacity-100 duration-200 ease-in", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"),
                            "aria-hidden": "true",
                            children: (0, r.jsx)("svg", {
                                className: "h-3 w-3 text-black",
                                fill: "none",
                                viewBox: "0 0 12 12",
                                children: (0, r.jsx)("path", {
                                    d: "M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            })
                        }), (0, r.jsx)("span", {
                            className: u(t ? "opacity-100 duration-200 ease-in" : "opacity-0 duration-100 ease-out", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"),
                            "aria-hidden": "true",
                            children: (0, r.jsx)("svg", {
                                className: "h-3 w-3 text-white",
                                fill: "currentColor",
                                viewBox: "0 0 12 12",
                                children: (0, r.jsx)("path", {
                                    d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                })
                            })
                        })]
                    })]
                })
            }
            var h = s(5989),
                f = s(8665),
                p = s(1163),
                b = s(4829),
                w = s(2630),
                v = s(4487);

            function g(e) {
                let {
                    show: t,
                    setShow: s,
                    recaptchaRef: a
                } = e, [n, i] = (0, c.useState)(1), [o, d] = (0, c.useState)("initial"), [x, u] = (0, c.useState)(""), [m, g] = (0, c.useState)(""), j = (0, p.useRouter)(), y = async () => {
                    let e;
                    if (isNaN(n)) return;
                    d("processing");
                    let t = await a.current.executeAsync();
                    if (!t) {
                        d("error");
                        return
                    }
                    try {
                        e = await (await fetch("/api/purchase/crypto", {
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            },
                            method: "POST",
                            body: JSON.stringify({
                                email: x,
                                count: n,
                                captcha: t
                            })
                        })).json()
                    } catch (s) {
                        a.current.reset(), v.Tb(s), d("error");
                        return
                    }
                    a.current.reset(), "ok" === e.status ? (g(e.url), d("done"), setTimeout(() => j.push(e.url), 1e3)) : (v.uT("Got ".concat(e.code, " while trying to purchase via crypto")), console.log(e.code), d("error"))
                };
                return (0, r.jsx)(b.u.Root, {
                    show: t,
                    as: c.Fragment,
                    children: (0, r.jsxs)(w.V, {
                        as: "div",
                        className: "fixed z-30",
                        onClose() {
                            s(!1)
                        },
                        children: [(0, r.jsx)(b.u.Child, {
                            as: c.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, r.jsx)("div", {
                                className: "fixed inset-0 bg-black bg-opacity-70 transition-opacity"
                            })
                        }), (0, r.jsx)("div", {
                            className: "fixed inset-0 z-30 overflow-y-auto",
                            children: (0, r.jsx)("div", {
                                className: "flex min-h-full max-w-full items-center justify-center p-4 text-center",
                                children: (0, r.jsx)(b.u.Child, {
                                    as: c.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                                    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    children: (0, r.jsx)(w.V.Panel, {
                                        className: "relative transform items-center overflow-hidden rounded-lg border-2 border-amber-500 bg-black px-4 pt-5 pb-4 text-center shadow-2xl shadow-xl shadow-amber-900/70 transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6",
                                        children: (0, r.jsxs)("div", {
                                            className: "flex flex-col space-y-4 divide-y divide-white/70",
                                            children: [(0, r.jsxs)("div", {
                                                className: "flex flex-col items-center justify-center text-center text-white",
                                                children: [(0, r.jsx)(l.JO, {
                                                    className: "h-12 w-12 text-6xl",
                                                    icon: "bxl:bitcoin"
                                                }), (0, r.jsx)("div", {
                                                    className: "mt-2 text-center",
                                                    children: (0, r.jsx)(w.V.Title, {
                                                        as: "h3",
                                                        className: "text-lg font-medium leading-6",
                                                        children: "Buy with Crypto"
                                                    })
                                                })]
                                            }), (0, r.jsx)("div", {
                                                className: "pt-2",
                                                children: (0, r.jsx)(h.Z, {
                                                    mode: "out-in",
                                                    children: (0, r.jsx)(f.Z, {
                                                        classNames: "fade",
                                                        addEndListener: (e, t) => e.addEventListener("transitionend", t, !1),
                                                        timeout: 1e3,
                                                        children: (() => {
                                                            switch (o) {
                                                                case "initial":
                                                                    default:
                                                                        return (0, r.jsx)("div", {
                                                                            className: "text-left",
                                                                            children: (0, r.jsx)("form", {
                                                                                onSubmit(e) {
                                                                                    e.preventDefault(), d("count");
                                                                                },
                                                                                children: (0, r.jsxs)("div", {
                                                                                    className: "space-y-4 divide-y divide-white/70",
                                                                                    children: [(0, r.jsxs)("div", {
                                                                                        className: "",
                                                                                        children: [(0, r.jsxs)("div", {
                                                                                            className: "flex justify-center gap-x-2",
                                                                                            children: [(0, r.jsx)("button", {
                                                                                                type: "button",
                                                                                                onClick: e => (e.preventDefault(), s(!1)),
                                                                                                className: "flex w-full items-center justify-center gap-2 rounded-lg border-2 border-slate-600 px-4 py-2 text-base font-medium text-white hover:border-slate-500 hover:shadow-lg hover:shadow-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600 sm:text-sm",
                                                                                                children: [(0, r.jsx)(l.JO, {
                                                                                                    className: "text-xl",
                                                                                                    icon: "fluent:arrow-step-back-20-filled"
                                                                                                }), "Back"]
                                                                                            }), (0, r.jsxs)("button", {
                                                                                                type: "submit",
                                                                                                className: "flex w-full items-center justify-center gap-2 rounded-md border-2 border-green-600 px-4 py-2 text-base font-medium text-white hover:border-green-500 hover:shadow-lg hover:shadow-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm",
                                                                                                children: [(0, r.jsx)(l.JO, {
                                                                                                    className: "text-xl",
                                                                                                    icon: "fluent:checkmark-20-filled"
                                                                                                }), "Submit"]
                                                                                            })]
                                                                                        })]
                                                                                    })]
                                                                                })
                                                                            })
                                                                        });
                                                                case "count":
                                                                    return (0, r.jsx)("div", {
                                                                        className: "flex w-full flex-col pt-2",
                                                                        children: (0, r.jsx)("form", {
                                                                            className: "flex w-full flex-col items-center justify-center",
                                                                            onSubmit: e => (e.preventDefault(), y()),
                                                                            onKeyDown(e) {
                                                                                "Enter" === e.key && (e.preventDefault(), y())
                                                                            },
                                                                            children: (0, r.jsxs)("div", {
                                                                                className: "flex w-full flex-col space-y-4 divide-y divide-white/70",
                                                                                children: [(0, r.jsxs)("div", {
                                                                                    className: "flex flex-col space-y-2",
                                                                                    children: [(0, r.jsxs)("div", {
                                                                                        className: "flex justify-center gap-x-2",
                                                                                        children: [(0, r.jsx)("button", {
                                                                                            onClick(e) {
                                                                                                e.preventDefault(), isNaN(n) ? i(1) : i(e => Math.max(1, e - 1))
                                                                                            },
                                                                                            className: "items-center rounded-full border-2 border-white/80 p-2 text-xl text-white hover:border-white/60",
                                                                                            children: (0, r.jsx)(l.JO, {
                                                                                                icon: "fluent:subtract-12-filled"
                                                                                            })
                                                                                        }), (0, r.jsx)("input", {
                                                                                            type: "number",
                                                                                            className: "w-20 shrink items-center items-center rounded-lg border-2 border-white/80 bg-black px-4 text-center text-xl text-white invalid:ring-2 invalid:ring-red-500 focus:outline-none",
                                                                                            value: n,
                                                                                            min: "1",
                                                                                            max: "100",
                                                                                            onChange(e) {
                                                                                                e.target.checkValidity() && i(e.target.valueAsNumber)
                                                                                            }
                                                                                        }), (0, r.jsx)("button", {
                                                                                            onClick(e) {
                                                                                                e.preventDefault(), isNaN(n) ? i(1) : i(e => Math.min(e + 1, 100))
                                                                                            },
                                                                                            className: "rounded-full border-2 border-white/80 p-2 text-xl text-white hover:border-white/60",
                                                                                            children: (0, r.jsx)(l.JO, {
                                                                                                icon: "fluent:add-12-filled"
                                                                                            })
                                                                                        })]
                                                                                    }), (0, r.jsxs)("div", {
                                                                                        hidden: isNaN(n),
                                                                                        className: "text-center text-white",
                                                                                        children: ["Total: ≅ $", 15 * n, " USD"]
                                                                                    })]
                                                                                }), (0, r.jsxs)("div", {
                                                                                    className: "flex w-full justify-center space-x-2 pt-4",
                                                                                    children: [(0, r.jsxs)("button", {
                                                                                        onClick: e => (e.preventDefault(), d("initial")),
                                                                                        className: "flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-slate-700 px-4 py-2 text-center text-white shadow-sm shadow-slate-900 hover:border-slate-600 hover:shadow-xl hover:shadow-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600 sm:text-sm",
                                                                                        children: [(0, r.jsx)(l.JO, {
                                                                                            className: "text-xl",
                                                                                            icon: "fluent:arrow-step-back-20-filled"
                                                                                        }), "Back"]
                                                                                    }), (0, r.jsxs)("button", {
                                                                                        type: "submit",
                                                                                        className: "flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-green-700 px-4 py-2 text-center text-white hover:border-green-600 hover:shadow-xl hover:shadow-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm",
                                                                                        children: [(0, r.jsx)(l.JO, {
                                                                                            className: "text-xl",
                                                                                            icon: "fluent:wallet-credit-card-20-filled"
                                                                                        }), "Purchase"]
                                                                                    })]
                                                                                })]
                                                                            })
                                                                        })
                                                                    });
                                                                case "processing":
                                                                    return (0, r.jsx)("div", {
                                                                        className: "flex w-full flex-col items-center justify-center text-center",
                                                                        children: (0, r.jsx)(l.JO, {
                                                                            className: "spinner text-6xl text-white",
                                                                            icon: "fluent:spinner-ios-20-regular"
                                                                        })
                                                                    });
                                                                case "done":
                                                                    return (0, r.jsxs)("div", {
                                                                        className: "flex flex-col items-center justify-center text-center",
                                                                        children: [(0, r.jsx)(l.JO, {
                                                                            className: "mb-2 text-6xl text-green-600",
                                                                            icon: "fluent:arrow-circle-right-20-regular"
                                                                        }), (0, r.jsx)("span", {
                                                                            className: "text-xl font-bold",
                                                                            children: "Redirecting you to Coinbase."
                                                                        }), (0, r.jsxs)("span", {
                                                                            className: "text-md",
                                                                            children: ["Click ", (0, r.jsx)("a", {
                                                                                href: m,
                                                                                children: "here"
                                                                            }), " if you are not automatically redirected."]
                                                                        })]
                                                                    });
                                                                case "error":
                                                                    return (0, r.jsxs)("div", {
                                                                        className: "flex flex-col items-center justify-center space-y-4 divide-y divide-white/70 text-center",
                                                                        children: [(0, r.jsxs)("div", {
                                                                            className: "flex flex-col items-center justify-center text-center",
                                                                            children: [(0, r.jsx)(l.JO, {
                                                                                className: "mb-2 text-6xl text-red-500",
                                                                                icon: "fluent:dismiss-circle-20-regular"
                                                                            }), (0, r.jsx)("span", {
                                                                                className: "text-xl font-bold",
                                                                                children: "Failed to purchase."
                                                                            }), (0, r.jsx)("span", {
                                                                                className: "text-md",
                                                                                children: "Don't worry - you weren't charged. Try again later."
                                                                            })]
                                                                        }), (0, r.jsx)("div", {
                                                                            className: "flex w-full",
                                                                            children: (0, r.jsxs)("button", {
                                                                                onClick: e => (e.preventDefault(), d("count")),
                                                                                className: "mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-slate-700 px-4 py-2 text-center text-white shadow-sm shadow-slate-900 hover:border-slate-600 hover:shadow-xl hover:shadow-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600 sm:text-sm",
                                                                                children: [(0, r.jsx)(l.JO, {
                                                                                    className: "text-xl",
                                                                                    icon: "fluent:arrow-step-back-20-filled"
                                                                                }), "Back"]
                                                                            })
                                                                        })]
                                                                    })
                                                            }
                                                        })()
                                                    }, o)
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })]
                    })
                })
            }
            let j = [];
            var y = s(5518),
                N = s(5152);

            function A(e) {
                let {
                    show: t,
                    setShow: s,
                    recaptchaRef: a
                } = e, [n, i] = (0, c.useState)(y.ED ? "initial" : "non-windows-confirm"), o = (0, c.useRef)(null), [d, x] = (0, c.useState)(10), [u, m] = (0, c.useState)(""), [p, g] = (0, c.useState)(""), [N, A] = (0, c.useState)(""), {
                    loaded: k,
                    fastspring: O
                } = function(e) {
                    let {
                        storefront: t,
                        accessKey: s,
                        onPopupClose: r,
                        onError: l
                    } = e, {
                        sdkUrl: a
                    } = e;
                    a || (a = "https://d1f8f9xcsvx3ha.cloudfront.net/sbl/0.9.2/fastspring-builder.min.js");
                    let [n, i] = function(e, t) {
                        let [s, r] = (0, c.useState)({
                            error: !1,
                            loaded: !1
                        });
                        return (0, c.useEffect)(() => {
                            if (j.includes(e)) {
                                r({
                                    error: !1,
                                    loaded: !0
                                });
                                return
                            } {
                                j.push(e);
                                let s = document.createElement("script");
                                if (s.src = e, s.async = !0, t) {
                                    let l = Object.keys(t);
                                    l.forEach(e => {
                                        let r = t[e];
                                        r && s.setAttribute(e, r)
                                    })
                                }
                                let a = () => {
                                        r({
                                            error: !1,
                                            loaded: !0
                                        })
                                    },
                                    n = () => {
                                        let t = j.indexOf(e);
                                        t >= 0 && j.splice(t, 1), s.remove(), r({
                                            error: !0,
                                            loaded: !0
                                        })
                                    };
                                return s.addEventListener("load", a), s.addEventListener("error", n), document.body.appendChild(s), () => {
                                    s.removeEventListener("load", a), s.removeEventListener("error", n)
                                }
                            }
                        }, [e]), [s.loaded, s.error]
                    }(a, {
                        "data-popup-closed": "__onFSPopupClosed",
                        "data-error-callback": "__onFSError",
                        "data-storefront": t,
                        "data-access-key": s,
                        id: "fsc-api",
                        type: "text/javascript"
                    }), o = globalThis.fastspring;
                    return globalThis.__onFSPopupClosed = null != r ? r : () => null, globalThis.__onFSError = null != l ? l : () => null, {
                        loaded: n,
                        fastspring: o
                    }
                }({
                    storefront: "xsynapse.onfastspring.com/popup-xsynapse",
                    accessKey: "BTKKYMMDTK-WWJCW1ZCJLW",
                    onPopupClose() {
                        i("initial"), O.builder.clean()
                    },
                    onError(e, t) {
                        s(!0), i("error"), console.log(t)
                    }
                });
                (0, c.useEffect)(() => {
                    t && "non-windows-confirm" === n && null === o.current && (o.current = setInterval(() => {
                        x(e => (e - 1 <= 0 && clearInterval(o.current), e - 1))
                    }, 1e3))
                }, [t, n]);
                let C = async () => {
                    let e;
                    i("processing");
                    let t = await a.current.executeAsync();
                    if (!t) {
                        i("error");
                        return
                    }
                    try {
                        e = await (await fetch("/api/purchase/fastspring", {
                            method: "POST",
                            body: JSON.stringify({
                                email: u,
                                first_name: p,
                                last_name: N,
                                captcha: t
                            }),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })).json()
                    } catch (r) {
                        a.current.reset(), v.Tb(r), i("error");
                        return
                    }
                    if (a.current.reset(), !e || "ok" !== e.status) {
                        i("error");
                        return
                    }
                    O.builder.secure(e.payload, e.key), O.builder.checkout(), s(!1)
                };
                return (0, r.jsx)(b.u.Root, {
                    show: t,
                    as: c.Fragment,
                    children: (0, r.jsxs)(w.V, {
                        as: "div",
                        className: "fixed z-30",
                        onClose() {
                            s(!1)
                        },
                        children: [(0, r.jsx)(b.u.Child, {
                            as: c.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, r.jsx)("div", {
                                className: "fixed inset-0 bg-black bg-opacity-70 transition-opacity"
                            })
                        }), (0, r.jsx)("div", {
                            className: "fixed inset-0 z-30 overflow-y-auto",
                            children: (0, r.jsx)("div", {
                                className: "flex min-h-full max-w-full items-center justify-center p-4 text-center",
                                children: (0, r.jsx)(b.u.Child, {
                                    as: c.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                                    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    children: (0, r.jsx)(w.V.Panel, {
                                        className: "relative transform items-center overflow-hidden rounded-lg border-2 border-blue-500 bg-black px-4 pt-5 pb-4 text-center shadow-2xl shadow-xl shadow-blue-900/70 transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6",
                                        children: (0, r.jsxs)("div", {
                                            className: "space-y-4 divide-y divide-white/70",
                                            children: [(0, r.jsxs)("div", {
                                                className: "flex flex-col items-center justify-center text-center",
                                                children: [(0, r.jsx)(l.JO, {
                                                    className: "box-content h-12 w-12 text-6xl",
                                                    icon: "fluent:wallet-credit-card-24-regular"
                                                }), (0, r.jsx)("div", {
                                                    className: "mt-2 text-center",
                                                    children: (0, r.jsx)(w.V.Title, {
                                                        as: "h3",
                                                        className: "text-xl font-medium leading-6",
                                                        children: "Buy with card"
                                                    })
                                                })]
                                            }), (0, r.jsx)("div", {
                                                className: "pt-2",
                                                children: (0, r.jsx)(h.Z, {
                                                    mode: "out-in",
                                                    children: (0, r.jsx)(f.Z, {
                                                        classNames: "fade",
                                                        addEndListener: (e, t) => e.addEventListener("transitionend", t, !1),
                                                        timeout: 1e3,
                                                        children: (() => {
                                                            switch (n) {
                                                                case "non-windows-confirm":
                                                                    return (0, r.jsxs)("div", {
                                                                        className: "flex flex-col items-center justify-center space-y-4 divide-y divide-white/70 text-center pt-2",
                                                                        children: [(0, r.jsxs)("div", {
                                                                            className: "flex flex-col items-center justify-center text-center",
                                                                            children: [(0, r.jsx)(l.JO, {
                                                                                className: "mb-2 text-6xl text-white",
                                                                                icon: "ion:logo-windows"
                                                                            }), (0, r.jsx)("span", {
                                                                                className: "text-xl font-bold",
                                                                                children: "Unsupported device"
                                                                            }), (0, r.jsxs)("div", {
                                                                                className: "flex flex-col space-y-4 text-md",
                                                                                children: [(0, r.jsx)("span", {
                                                                                    children: "We detected that you're currently attempting to purchase Synapse on an unsupported device."
                                                                                }), (0, r.jsx)("span", {
                                                                                    children: 'Synapse XY is a Windows-only product, and we will not provide refunds for incompatible systems. By clicking "I understand", you agree that you will not be provided a refund on the basis of compatibility reasons.'
                                                                                }), (0, r.jsxs)("span", {
                                                                                    hidden: d <= 0,
                                                                                    children: ["Please wait for ", d, " second(s) before continuing."]
                                                                                })]
                                                                            })]
                                                                        }), (0, r.jsx)("div", {
                                                                            className: "min-w-full pt-4",
                                                                            children: (0, r.jsxs)("button", {
                                                                                onClick(e) {
                                                                                    e.preventDefault(), i("initial")
                                                                                },
                                                                                disabled: d > 0,
                                                                                className: "flex w-full items-center justify-center gap-2 rounded-lg border-2 border-green-600 px-4 py-2 font-medium text-white hover:border-green-400 hover:shadow-lg hover:shadow-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 sm:text-sm disabled:border-gray-700 disabled:shadow-none",
                                                                                children: [(0, r.jsx)(l.JO, {
                                                                                    className: "text-xl",
                                                                                    icon: "fluent:checkmark-20-filled"
                                                                                }), "I understand"]
                                                                            })
                                                                        })]
                                                                    });
                                                                case "initial":
                                                                    return (0, r.jsxs)("form", {
                                                                        className: "space-y-4 divide-y divide-white/70 text-left",
                                                                        async onSubmit(e) {
                                                                            e.preventDefault(), e.currentTarget.checkValidity() && await C()
                                                                        },
                                                                        children: [(0, r.jsxs)("div", {
                                                                            className: "flex flex-col space-y-2",
                                                                            children: [(0, r.jsxs)("div", {
                                                                                className: "flex space-x-2",
                                                                                children: [(0, r.jsxs)("div", {
                                                                                    children: [(0, r.jsx)("label", {
                                                                                        htmlFor: "first_name",
                                                                                        className: "text-white-500 text-center text-sm font-medium",
                                                                                        children: "First name"
                                                                                    }), (0, r.jsx)("input", {
                                                                                        className: "focus:border-white-500 focus:ring-white-500 peer form-input mt-2 block w-full rounded-md border-white/70 bg-black shadow-sm invalid:border-red-500 sm:text-sm",
                                                                                        type: "text",
                                                                                        id: "first_name",
                                                                                        value: p,
                                                                                        required: !0,
                                                                                        onChange: e => g(e.target.value)
                                                                                    }), (0, r.jsx)("p", {
                                                                                        className: "mt-2 text-xs text-red-500 peer-valid:hidden",
                                                                                        children: "Please enter a first name."
                                                                                    })]
                                                                                }), (0, r.jsxs)("div", {
                                                                                    children: [(0, r.jsx)("label", {
                                                                                        htmlFor: "last_name",
                                                                                        className: "text-white-500 text-center text-sm font-medium",
                                                                                        children: "Last name"
                                                                                    }), (0, r.jsx)("input", {
                                                                                        className: "focus:border-white-500 focus:ring-white-500 peer form-input mt-2 block w-full rounded-md border-white/70 bg-black shadow-sm invalid:border-red-500 sm:text-sm",
                                                                                        type: "text",
                                                                                        id: "last_name",
                                                                                        value: N,
                                                                                        required: !0,
                                                                                        onChange: e => A(e.target.value)
                                                                                    }), (0, r.jsx)("p", {
                                                                                        className: "mt-2 text-xs text-red-500 peer-valid:hidden",
                                                                                        children: "Please enter a last name."
                                                                                    })]
                                                                                })]
                                                                            }), (0, r.jsxs)("div", {
                                                                                children: [(0, r.jsx)("label", {
                                                                                    htmlFor: "email",
                                                                                    className: "text-white-500 text-center text-sm font-medium",
                                                                                    children: "Email address"
                                                                                }), (0, r.jsx)("input", {
                                                                                    className: "focus:border-white-500 focus:ring-white-500 peer form-input mt-2 block w-full rounded-md border-white/70 bg-black shadow-sm invalid:border-red-500 sm:text-sm",
                                                                                    type: "email",
                                                                                    id: "email",
                                                                                    value: u,
                                                                                    required: !0,
                                                                                    onChange: e => m(e.target.value)
                                                                                }), (0, r.jsx)("p", {
                                                                                    className: "mt-2 text-xs text-red-500 peer-valid:hidden",
                                                                                    children: "Please enter a valid email address."
                                                                                })]
                                                                            })]
                                                                        }), (0, r.jsxs)("div", {
                                                                            className: "flex space-x-2 pt-4",
                                                                            children: [(0, r.jsxs)("button", {
                                                                                type: "button",
                                                                                onClick: e => (e.preventDefault(), s(!1)),
                                                                                className: "flex w-full items-center justify-center gap-2 rounded-lg border-2 border-zinc-600 px-4 py-2 font-medium text-white hover:border-zinc-400 hover:shadow-lg hover:shadow-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-600 sm:text-sm",
                                                                                children: [(0, r.jsx)(l.JO, {
                                                                                    className: "text-xl",
                                                                                    icon: "fluent:arrow-step-back-20-filled"
                                                                                }), "Back"]
                                                                            }), (0, r.jsxs)("button", {
                                                                                type: "submit",
                                                                                className: "flex w-full items-center justify-center gap-2 rounded-lg border-2 border-green-600 px-4 py-2 font-medium text-white hover:border-green-400 hover:shadow-lg hover:shadow-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 sm:text-sm",
                                                                                children: [(0, r.jsx)(l.JO, {
                                                                                    className: "text-xl",
                                                                                    icon: "fluent:checkmark-20-filled"
                                                                                }), "Submit"]
                                                                            })]
                                                                        })]
                                                                    });
                                                                case "processing":
                                                                    return (0, r.jsx)("div", {
                                                                        className: "flex w-full flex-col items-center justify-center pt-4 text-center",
                                                                        children: (0, r.jsx)(l.JO, {
                                                                            className: "spinner text-6xl text-white",
                                                                            icon: "fluent:spinner-ios-20-regular"
                                                                        })
                                                                    });
                                                                case "error":
                                                                    return (0, r.jsxs)("div", {
                                                                        className: "flex flex-col items-center justify-center space-y-4 divide-y divide-white/70 text-center",
                                                                        children: [(0, r.jsxs)("div", {
                                                                            className: "flex flex-col items-center justify-center text-center",
                                                                            children: [(0, r.jsx)(l.JO, {
                                                                                className: "mb-2 text-6xl text-red-500",
                                                                                icon: "fluent:dismiss-circle-20-regular"
                                                                            }), (0, r.jsx)("span", {
                                                                                className: "text-xl font-bold",
                                                                                children: "Failed to purchase."
                                                                            }), (0, r.jsx)("span", {
                                                                                className: "text-md",
                                                                                children: "Don't worry - you weren't charged. Try again later."
                                                                            })]
                                                                        }), (0, r.jsx)("div", {
                                                                            className: "min-w-full pt-4",
                                                                            children: (0, r.jsxs)("button", {
                                                                                onClick: e => (e.preventDefault(), i("initial")),
                                                                                className: "flex w-full items-center justify-center gap-2 rounded-lg border-2 border-zinc-600 px-4 py-2 text-base font-medium text-white hover:border-zinc-400 hover:shadow-lg hover:shadow-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-600 sm:text-sm",
                                                                                children: [(0, r.jsx)(l.JO, {
                                                                                    className: "text-xl",
                                                                                    icon: "fluent:arrow-step-back-20-filled"
                                                                                }), "Back"]
                                                                            })
                                                                        })]
                                                                    })
                                                            }
                                                        })()
                                                    }, n)
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })]
                    })
                })
            }
            var k = s.n(N)()(() => Promise.resolve(A), {
                ssr: !1
            });

            function O(e) {
                let {
                    show: t,
                    setShow: s,
                    recaptchaRef: a
                } = e, [n, i] = (0, c.useState)(""), [o, d] = (0, c.useState)("initial"), x = async () => {
                    let e;
                    if (0 === n.length) {
                        d("initial");
                        return
                    }
                    d("success");
                    let t = await a.current.executeAsync();
                    if (!t) {
                        d("error");
                        return
                    }
                    try {
                        d("success");
                    } catch (s) {
                        a.current.reset(), v.Tb(s), d("error");
                        return
                    }
                    if (a.current.reset(), "ok" === e.status) {
                        d("success");
                        return
                    }
                    if ("too_recent" === e.status) {
                        d("error_too_recent");
                        return
                    }
                    d("error")
                };
                return (0, r.jsx)(b.u.Root, {
                    show: t,
                    as: c.Fragment,
                    children: (0, r.jsxs)(w.V, {
                        as: "div",
                        className: "fixed z-30",
                        onClose() {
                            s(!1)
                        },
                        children: [(0, r.jsx)(b.u.Child, {
                            as: c.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, r.jsx)("div", {
                                className: "fixed inset-0 bg-black bg-opacity-70 transition-opacity"
                            })
                        }), (0, r.jsx)("div", {
                            className: "fixed inset-0 z-30 overflow-y-auto",
                            children: (0, r.jsx)("div", {
                                className: "flex min-h-full max-w-full items-center justify-center p-4 text-center",
                                children: (0, r.jsx)(b.u.Child, {
                                    as: c.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                                    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    children: (0, r.jsx)(w.V.Panel, {
                                        className: "relative transform items-center overflow-hidden rounded-lg border-2 border-violet-500 bg-black px-4 pt-5 pb-4 text-center shadow-2xl shadow-xl shadow-violet-900/70 transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6",
                                        children: (0, r.jsxs)("div", {
                                            className: "flex flex-col space-y-4 divide-y divide-white/70",
                                            children: [(0, r.jsxs)("div", {
                                                className: "flex flex-col items-center justify-center text-center text-white",
                                                children: [(0, r.jsx)(l.JO, {
                                                    className: "h-12 w-12 text-6xl",
                                                    icon: "heroicons:arrow-down-circle"
                                                }), (0, r.jsx)("div", {
                                                    className: "mt-2 text-center",
                                                    children: (0, r.jsx)(w.V.Title, {
                                                        as: "h3",
                                                        className: "text-lg font-medium leading-6",
                                                        children: "Download Synapse XY"
                                                    })
                                                })]
                                            }), (0, r.jsx)("div", {
                                                className: "pt-2",
                                                children: (0, r.jsx)(h.Z, {
                                                    mode: "out-in",
                                                    children: (0, r.jsx)(f.Z, {
                                                        classNames: "fade",
                                                        addEndListener: (e, t) => e.addEventListener("transitionend", t, !1),
                                                        timeout: 1e3,
                                                        children: (() => {
                                                            switch (o) {
                                                                case "initial":
                                                                default:
                                                                    return (0, r.jsx)("div", {
                                                                        className: "text-left",
                                                                        children: (0, r.jsx)("form", {
                                                                            async onSubmit(e) {
                                                                                e.preventDefault(), e.currentTarget.checkValidity() && await x()
                                                                            },
                                                                            children: (0, r.jsxs)("div", {
                                                                                className: "space-y-4 divide-y divide-white/70",
                                                                                children: [(0, r.jsxs)("div", {
                                                                                    className: "",
                                                                                    children: [(0, r.jsx)("label", {
                                                                                        htmlFor: "email",
                                                                                        className: "text-white-500 text-center text-sm font-medium",
                                                                                        children: "Type anything here to prove you aren't a robot!"
                                                                                    }), (0, r.jsx)("input", {
                                                                                        className: "focus:border-white-500 focus:ring-white-500 peer form-input mt-2 block w-full rounded-md border-white/70 bg-black shadow-sm invalid:border-red-500 sm:text-sm",
                                                                                        type: "text",
                                                                                        id: "text",
                                                                                        value: n,
                                                                                        required: !1,
                                                                                        onChange: e => i(e.target.value)
                                                                                    }), (0, r.jsx)("p", {
                                                                                        className: "mt-2 text-xs text-red-500 peer-valid:hidden",
                                                                                        children: "Type anything here to prove you aren't a robot!"
                                                                                    })]
                                                                                }), (0, r.jsxs)("div", {
                                                                                    className: "flex gap-x-2 pt-4",
                                                                                    children: [(0, r.jsxs)("button", {
                                                                                        type: "button",
                                                                                        onClick: e => (e.preventDefault(), s(!1)),
                                                                                        className: "flex w-full items-center justify-center gap-2 rounded-lg border-2 border-slate-600 px-4 py-2 text-base font-medium text-white hover:border-slate-500 hover:shadow-lg hover:shadow-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600 sm:text-sm",
                                                                                        children: [(0, r.jsx)(l.JO, {
                                                                                            className: "text-xl",
                                                                                            icon: "fluent:arrow-step-back-20-filled"
                                                                                        }), "Back"]
                                                                                    }), (0, r.jsxs)("button", {
                                                                                        type: "submit",
                                                                                        className: "flex w-full items-center justify-center gap-2 rounded-md border-2 border-green-600 px-4 py-2 text-base font-medium text-white hover:border-green-500 hover:shadow-lg hover:shadow-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm",
                                                                                        children: [(0, r.jsx)(l.JO, {
                                                                                            className: "text-xl",
                                                                                            icon: "fluent:checkmark-20-filled"
                                                                                        }), "Download"]
                                                                                    })]
                                                                                })]
                                                                            })
                                                                        })
                                                                    });
                                                                case "processing":
                                                                    return (0, r.jsx)("div", {
                                                                        className: "flex w-full flex-col items-center justify-center text-center",
                                                                        children: (0, r.jsx)(l.JO, {
                                                                            className: "spinner text-6xl text-white",
                                                                            icon: "fluent:spinner-ios-20-regular"
                                                                        })
                                                                    });
                                                                case "success":
                                                                    return (0, r.jsxs)("div", {
                                                                        className: "flex flex-col items-center justify-center text-center",
                                                                        children: [(0, r.jsx)(l.JO, {
                                                                            className: "text-6xl text-green-600",
                                                                            icon: "fluent:checkmark-circle-20-regular"
                                                                        }), (0, r.jsx)("span", {
                                                                            className: "text-xl font-bold",
                                                                            children: "Redirecting you now. Thank you for downloading Synapse XY!"
                                                                        }), (0, r.jsx)("span", {
                                                                            className: "text-md",
                                                                            children: "If you weren't redirected automatically, join the discord server and download from there."
                                                                        })]
                                                                    });
                                                                case "error_too_recent":
                                                                    return (0, r.jsxs)("div", {
                                                                        className: "flex flex-col items-center justify-center space-y-4 divide-y divide-white/70 text-center",
                                                                        children: [(0, r.jsxs)("div", {
                                                                            className: "flex flex-col items-center justify-center text-center",
                                                                            children: [(0, r.jsx)(l.JO, {
                                                                                className: "text-6xl text-red-500",
                                                                                icon: "fluent:dismiss-circle-20-regular"
                                                                            }), (0, r.jsx)("span", {
                                                                                className: "text-xl font-bold",
                                                                                children: "Failed to get download."
                                                                            }), (0, r.jsx)("span", {
                                                                                className: "text-md",
                                                                                children: "A download link was already sent to the email address associated with that account recently. Try again later."
                                                                            })]
                                                                        }), (0, r.jsx)("div", {
                                                                            className: "flex w-full",
                                                                            children: (0, r.jsxs)("button", {
                                                                                onClick: e => (e.preventDefault(), d("initial")),
                                                                                className: "mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-slate-700 px-4 py-2 text-center text-base text-white shadow-sm shadow-slate-900 hover:border-slate-600 hover:shadow-xl hover:shadow-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600 sm:text-sm",
                                                                                children: [(0, r.jsx)(l.JO, {
                                                                                    className: "text-xl",
                                                                                    icon: "fluent:arrow-step-back-20-filled"
                                                                                }), "Back"]
                                                                            })
                                                                        })]
                                                                    });
                                                                case "error":
                                                                    return (0, r.jsxs)("div", {
                                                                        className: "flex flex-col items-center justify-center space-y-4 divide-y divide-white/70 text-center",
                                                                        children: [(0, r.jsxs)("div", {
                                                                            className: "flex flex-col items-center justify-center text-center",
                                                                            children: [(0, r.jsx)(l.JO, {
                                                                                className: "text-6xl text-red-500",
                                                                                icon: "fluent:dismiss-circle-20-regular"
                                                                            }), (0, r.jsx)("span", {
                                                                                className: "text-xl font-bold",
                                                                                children: "Failed to get download."
                                                                            }), (0, r.jsx)("span", {
                                                                                className: "text-md",
                                                                                children: "Please double-check the email / username that you provided, or try again later."
                                                                            })]
                                                                        }), (0, r.jsx)("div", {
                                                                            className: "flex w-full",
                                                                            children: (0, r.jsxs)("button", {
                                                                                onClick: e => (e.preventDefault(), d("initial")),
                                                                                className: "mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-slate-700 px-4 py-2 text-center text-base text-white shadow-sm shadow-slate-900 hover:border-slate-600 hover:shadow-xl hover:shadow-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600 sm:text-sm",
                                                                                children: [(0, r.jsx)(l.JO, {
                                                                                    className: "text-xl",
                                                                                    icon: "fluent:arrow-step-back-20-filled"
                                                                                }), "Back"]
                                                                            })
                                                                        })]
                                                                    })
                                                            }
                                                        })()
                                                    }, o)
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })]
                    })
                })
            }
            var C = {
                src: "_next/static/media/night.d9621833.jpg",
                height: 3215,
                width: 7680,
                blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAADAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAACAwADAAAAAAAAAAAAAAABEgADEQIFUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIRAxEAPwCY8r7D1rEhmRlG55sREpU2FJ//2Q==",
                blurWidth: 8,
                blurHeight: 3
            };

            function S(e) {
                let {
                    children: t,
                    severity: s,
                    show: l
                } = e;
                return l ? (0, r.jsx)("div", {
                    id: "banner",
                    className: "mt-16 mb-12 p-3 text-center backdrop-blur-md ".concat("notice" === s ? "bg-sky-500/20" : "warning" === s ? "bg-amber-500/20" : "bg-red-500/20"),
                    children: t
                }) : (0, r.jsx)(r.Fragment, {})
            }

            function J(e) {
                let {
                    icon: t,
                    glow: s,
                    title: a,
                    children: n
                } = e;
                return (0, r.jsxs)("div", {
                    className: "shaded-box relative mb-4 flex flex-col bg-black/40 p-8 text-left backdrop-blur-lg transition-all hover:bg-black/60 lg:mb-0 lg:max-w-xs lg:rounded-md",
                    children: [(0, r.jsxs)("div", {
                        className: "flex flex-col items-center text-2xl lg:items-start",
                        children: [(0, r.jsxs)("div", {
                            className: "relative flex",
                            children: [(0, r.jsx)("span", {
                                className: "shaded-icon-bg",
                                style: {
                                    "--bg-glow": s
                                }
                            }), (0, r.jsx)("div", {
                                className: "shaded-icon relative mb-4 w-fit rounded-md bg-black/50 p-2",
                                children: (0, r.jsx)(l.JO, {
                                    className: "text-4xl",
                                    icon: t
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "font-bold",
                            children: a
                        })]
                    }), (0, r.jsx)("div", {
                        className: "w-auto pt-2 text-left opacity-70",
                        children: n
                    })]
                })
            }

            function E() {
                let [e, t] = (0, c.useState)("main"), [s, a] = (0, c.useState)(!1), [i, x] = (0, c.useState)(!1), [u, p] = (0, c.useState)(!1), [b, w] = (0, c.useState)(0), [v, j] = (0, c.useState)(!1), [y, N] = (0, c.useState)("");
                (0, c.useRef)(null);
                let A = (0, c.useRef)(null);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o(), {
                        alt: "A night-time background",
                        priority: !0,
                        src: C,
                        placeholder: "blur",
                        layout: "fill",
                        objectFit: "cover",
                        objectPosition: "cover"
                    }), (0, r.jsx)(g, {
                        show: s,
                        setShow: a,
                        recaptchaRef: A
                    }), (0, r.jsx)(k, {
                        show: i,
                        setShow: x,
                        recaptchaRef: A
                    }), (0, r.jsx)(O, {
                        show: u,
                        setShow: p,
                        recaptchaRef: A
                    }), (0, r.jsxs)("main", {
                        className: "pt-36",
                        children: [(0, r.jsx)(S, {
                            severity: "notice",
                            show: !1,
                            children: "This is a test banner, used for announcements and such."
                        }), (0, r.jsx)("div", {
                            className: "flex flex-col items-center",
                            children: (0, r.jsxs)("div", {
                                className: "flex grow flex-col items-center gap-y-4 text-center transition-all duration-1000",
                                children: [(0, r.jsx)("div", {
                                    className: "synapse-text text-5xl font-extrabold",
                                    children: "Synapse XY"
                                }), (0, r.jsxs)("div", {
                                    className: "z-10 text-2xl font-thin drop-shadow-md",
                                    children: ["The ", (0, r.jsx)("span", {
                                        className: "font-normal",
                                        children: "classic solution"
                                    }), " to", " ", (0, r.jsx)("span", {
                                        className: "font-normal",
                                        children: "script execution."
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "flex w-full items-center justify-center",
                                    children: (0, r.jsx)(h.Z, {
                                        mode: "out-in",
                                        children: (0, r.jsx)(f.Z, {
                                            classNames: "fade",
                                            addEndListener: (e, t) => e.addEventListener("transitionend", t, !1),
                                            timeout: 1e3,
                                            children: "purchase" === e ? (0, r.jsxs)("div", {
                                                className: "flex flex-col gap-4",
                                                children: [(0, r.jsxs)("div", {
                                                    className: "flex flex-col items-center gap-2 rounded-lg border-2 border-white px-4 py-2 text-white shadow-lg shadow-zinc-600 backdrop-blur-lg lg:flex-row",
                                                    children: [(0, r.jsxs)("div", {
                                                        className: "flex cursor-pointer items-center gap-2 hover:underline",
                                                        onClick: () => window.open("", "_blank"),
                                                        children: [(0, r.jsx)(l.JO, {
                                                            icon: "fluent:info-16-filled"
                                                        }), " Please read our Terms of Service first. ", (0, r.jsx)(l.JO, {
                                                            icon: "fluent:open-16-filled"
                                                        })]
                                                    }), (0, r.jsxs)("div", {
                                                        className: "mx-auto flex items-center gap-2 font-medium lg:ml-auto lg:mr-0",
                                                        children: ["I agree ", (0, r.jsx)(m, {
                                                            enabled: v,
                                                            onChange: j
                                                        })]
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    className: "flex flex-1 flex-col gap-4 transition-opacity lg:flex-row " + (v ? "" : "pointer-events-none opacity-30"),
                                                    children: [(0, r.jsxs)("button", {
                                                        type: "button",
                                                        onClick: e => (e.preventDefault(), x(!0)),
                                                        className: "relative flex grow cursor-pointer items-center gap-4 rounded-lg border-2 border-blue-500 py-4 pr-8 pl-4 shadow-lg backdrop-blur-lg hover:border-blue-400 hover:shadow-blue-800",
                                                        children: [(0, r.jsx)(l.JO, {
                                                            className: "text-6xl",
                                                            icon: "fluent:wallet-credit-card-24-filled"
                                                        }), (0, r.jsxs)("div", {
                                                            className: "text-left",
                                                            children: [(0, r.jsx)("div", {
                                                                className: "text-xl font-medium",
                                                                children: "Buy with card"
                                                            }), (0, r.jsx)("div", {
                                                                className: "text-sm text-white/70",
                                                                children: "One copy. $20 USD."
                                                            })]
                                                        })]
                                                    }), (0, r.jsxs)("button", {
                                                        type: "button",
                                                        onClick: e => (e.preventDefault(), a(!0)),
                                                        className: "relative flex shrink-0 cursor-pointer items-center gap-4 rounded-lg border-2 border-amber-500 py-4 pr-8 pl-4 text-black shadow-lg backdrop-blur-lg hover:border-amber-400 hover:shadow-amber-800",
                                                        children: [(0, r.jsx)(l.JO, {
                                                            className: "text-6xl text-white",
                                                            icon: "bxl:bitcoin"
                                                        }), (0, r.jsxs)("div", {
                                                            className: "text-left",
                                                            children: [(0, r.jsx)("div", {
                                                                className: "text-xl text-white",
                                                                children: "Buy with Crypto"
                                                            }), (0, r.jsx)("div", {
                                                                className: "text-sm text-white/70",
                                                                children: "Can purchase in bulk. $15 USD."
                                                            })]
                                                        })]
                                                    })]
                                                }), (0, r.jsx)("div", {
                                                    className: "flex items-center text-center",
                                                    children: (0, r.jsxs)("button", {
                                                        type: "button",
                                                        onClick: () => t("main"),
                                                        className: "flex w-full flex-row items-center justify-center space-x-2 rounded-lg border-2 border-zinc-700 p-2 text-center backdrop-blur-lg hover:border-zinc-600 hover:shadow-xl hover:shadow-black/20",
                                                        children: [(0, r.jsx)(l.JO, {
                                                            icon: "fluent:arrow-step-back-20-filled"
                                                        }), (0, r.jsx)("span", {
                                                            children: "Back"
                                                        })]
                                                    })
                                                }), (0, r.jsxs)("div", {
                                                    className: "mx-auto flex flex-col items-center gap-2 text-center text-xs lg:flex-row",
                                                    children: [(0, r.jsx)(l.JO, {
                                                        icon: "bi:windows"
                                                    }), " ", (0, r.jsxs)("span", {
                                                        children: ["Synapse XY is for ", (0, r.jsx)("b", {
                                                            children: "Windows 10 (64-bit)"
                                                        }), " and above. Other platforms are not supported."]
                                                    })]
                                                })]
                                            }) : (0, r.jsxs)("div", {
                                                className: "flex flex-col items-center justify-center",
                                                children: [(0, r.jsxs)("div", {
                                                    className: "flex gap-2",
                                                    children: [(0, r.jsxs)("div", {
                                                        onClick: () => t("purchase"),
                                                        className: "flex cursor-pointer items-center gap-2 rounded-lg border-2 border-sky-600 px-4 py-2 text-lg text-white shadow-lg shadow-sky-900 hover:border-sky-400 hover:shadow-sky-700",
                                                        children: [(0, r.jsx)(l.JO, {
                                                            className: "text-xl",
                                                            icon: "bi:discord"
                                                        }), " Discord"]
                                                    }), (0, r.jsxs)("div", {
                                                        onClick: () => p(!0),
                                                        className: "flex cursor-pointer items-center gap-2 rounded-lg border-2 border-violet-600 px-4 py-2 text-lg text-white shadow-lg shadow-violet-900 hover:border-violet-400 hover:shadow-violet-700",
                                                        children: [(0, r.jsx)(l.JO, {
                                                            className: "text-xl",
                                                            icon: "heroicons:arrow-down-circle"
                                                        }), " ", "Download"]
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    className: "flex flex-col gap-x-4 pt-8 pb-0 lg:flex-row",
                                                    children: [(0, r.jsxs)(J, {
                                                        icon: "heroicons:command-line",
                                                        title: "Powerful",
                                                        glow: "rgb(248 113 113)",
                                                        children: [(0, r.jsx)("b", {
                                                            children: "Synapse XY"
                                                        }), " has everything you should need for development, analysis, and execution. Our API empowers scripts with many capabilities not otherwise offered in a pure vanilla environment."]
                                                    }), (0, r.jsxs)(J, {
                                                        icon: "heroicons:cube",
                                                        title: "Lightweight",
                                                        glow: "rgb(34 211 238)",
                                                        children: [(0, r.jsx)("b", {
                                                            children: "Synapse XY"
                                                        }), " is very simple, yet very powerful coding software. We do not decide where you get your scripts, or what you should use out of the box. We give you the tools and leave you to play."]
                                                    }), (0, r.jsxs)(J, {
                                                        icon: "heroicons:sparkles",
                                                        title: "Stable",
                                                        glow: "rgb(74 222 128)",
                                                        children: [(0, r.jsx)("b", {
                                                            children: "Synapse XY"
                                                        }), " relies on a well-tested heavy duty execution engine that can run pretty much anything you throw at it. No need to live in fear of bugs and crashes anymore with the stability of our software."]
                                                    }), (0, r.jsxs)(J, {
                                                        icon: "heroicons:lock-closed",
                                                        title: "Private",
                                                        glow: "rgb(250 204 21)",
                                                        children: [(0, r.jsx)("b", {
                                                            children: "Synapse XY"
                                                        }), " collects no personal information, aside from what is requested by our payment processors. The information we do store is very minimal and is explained in our privacy policy."]
                                                    })]
                                                })]
                                            })
                                        }, e)
                                    })
                                })]
                            })
                        }), (0, r.jsxs)("div", {
                            className: "mt-auto flex w-full flex-col items-center justify-center pt-4 text-center",
                            children: [(0, r.jsx)(d.Z, {
                                ref: A,
                                size: "invisible",
                                sitekey: "6LcDGZ4iAAAAADQBAjxedxvdRvbwxQuyp9spwkK4"
                            }), (0, r.jsx)("div", {
                                className: "flex",
                                children: (0, r.jsxs)("div", {
                                    className: "my-auto flex flex-col items-center gap-2 pb-8 text-center",
                                    children: [(0, r.jsxs)("div", {
                                        className: "opacity-70",
                                        children: ["Join the discord server for assistance."]
                                    }), (0, r.jsx)("div", {
                                        className: "text-xs opacity-50",
                                        children: "Not affiliated with Roblox Corporation or Synapse Softworks LLC. This website is not protected by copyright. Synapse XY is powered by a very modified version of the Xeno Executor.  Synapse XY is a non profit tool."
                                    }), (0, r.jsxs)("div", {
                                        className: "text-xs opacity-50",
                                        children: [""]
                                    })]
                                })
                            }), (0, r.jsxs)("div", {
                                className: "footer flex w-full flex-col items-center border-t border-t-zinc-900 bg-black/10 px-8 py-6 shadow-xl backdrop-blur-lg lg:mt-0 lg:flex-row",
                                children: [(0, r.jsxs)("div", {
                                    className: "mx-auto flex flex-col items-center gap-2 text-center lg:mx-0 lg:items-start lg:text-left",
                                    children: [(0, r.jsxs)("div", {
                                        className: "text-4xl",
                                        children: [(0, r.jsx)("span", {
                                            className: "bg-gradient-to-b from-zinc-50 to-zinc-200 bg-clip-text font-extrabold text-transparent",
                                            children: "Synapse XY"
                                        }), " ", (0, r.jsx)("span", {
                                            className: "bg-gradient-to-b from-indigo-300 to-indigo-500 bg-clip-text font-bold text-transparent",
                                            children: "1.0"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "text-xl font-thin drop-shadow",
                                        children: ["An ", (0, r.jsx)("span", {
                                            className: "font-normal",
                                            children: "evolution"
                                        }), " of", " ", (0, r.jsx)("span", {
                                            className: "font-normal",
                                            children: "execution."
                                        }), " Coming soon to a computer near you."]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "mx-auto mt-4 flex gap-4 lg:ml-auto lg:mr-0 lg:mt-0",
                                    children: [(0, r.jsxs)(n(), {
                                        href: "https://twitter.com/synsoftworks",
                                        className: "flex items-center gap-2 rounded-lg border-2 border-indigo-500 p-4 no-underline shadow-lg shadow-indigo-900 hover:border-indigo-400 hover:shadow-indigo-700",
                                        children: [(0, r.jsx)(l.JO, {
                                            icon: "bi:twitter"
                                        }), " Follow us on Twitter!"]
                                    }), (0, r.jsxs)(n(), {
                                        href: "https://getsyn.cc/discord",
                                        className: "ml-auto flex items-center gap-2 rounded-lg border-2 border-indigo-500 p-4 no-underline shadow-lg shadow-indigo-900 hover:border-indigo-400 hover:shadow-indigo-700",
                                        children: [(0, r.jsx)(l.JO, {
                                            className: "text-xl",
                                            icon: "bi:discord"
                                        }), " Join the beta."]
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [853, 823, 774, 888, 179], function() {
            return e(e.s = 8312)
        }), _N_E = e.O()
    }
]);
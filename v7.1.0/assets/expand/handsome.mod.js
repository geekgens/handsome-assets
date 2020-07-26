/*网页标题焦点变化*/
// document.addEventListener('visibilitychange', function() {
//    var isHidden = document.hidden;
//    if (isHidden) {
//        document.title = 'Error 404';
//    } else {
//        document.title = '404？这辈子都不可能404的';
//   }
// });

/*
 * 左侧栏彩色图标 pjax-pjax回调函数中
 */
let leftHeader=document.querySelectorAll("span.nav-icon>svg,span.nav-icon>i");let leftHeaderColorArr=["#FF69B4","#58c7ea","#E066FF","#FF69B4","#FFA54F","#90EE90","#0043ff","#cc00ff","#878787","#A0522D","#FF7256","#FFA500","#8B0000","#7CFC00","#4EEE94","#00FFFF","#EE0000"];leftHeader.forEach(tag=>{tagsColor=leftHeaderColorArr[Math.floor(Math.random()*leftHeaderColorArr.length)];tag.style.color=tagsColor});            


/*
 * 彩色标签云 pjax-pjax回调函数中
 */
let tags = document.querySelectorAll("#tag_cloud-2 a");
let colorArr = ["#428BCA", "#AEDCAE", "#ECA9A7", "#DA99FF", "#FFB380", "#D9B999"];
tags.forEach(tag => {
    tagsColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    tag.style.backgroundColor = tagsColor;
});

/*
 * 评论区一键打卡
 */
function a(a, b, c) {
    if (document.selection) a.focus(), sel = document.selection.createRange(), c ? sel.text = b + sel.text + c : sel.text = b, a.focus();
    else if (a.selectionStart || "0" == a.selectionStart) {
        var l = a.selectionStart,
            m = a.selectionEnd,
            n = m;
        c ? a.value = a.value.substring(0, l) + b + a.value.substring(l, m) + c + a.value.substring(m, a.value.length) : a.value = a.value.substring(0, l) + b + a.value.substring(m, a.value.length);
        c ? n += b.length + c.length : n += b.length - m + l;
        l == m && c && (n -= c.length);
        a.focus();
        a.selectionStart = n;
        a.selectionEnd = n
    } else a.value += b + c, a.focus()
}
var b = (new Date).toLocaleTimeString(),
    c = document.getElementById("comment") || 0;
window.SIMPALED = {};
window.SIMPALED.Editor = {
daka: function() {
    a(c, "滴！学生卡！打卡时间：" + b, "，请上车的乘客系好安全带~")
},
zan: function() {
    a(c, " 写得好好哟,我要给你生猴子！::funny:04:: ")
},
cai: function() {
    a(c, "骚年,我怀疑你写了一篇假的文章！::funny:03:: ")
}
};

/*
 * 文章复制弹窗提醒 需要layer
 */
 
document.body.oncopy = function() {layer.msg('复制成功,若要转载请务必保留原文链接！', function(){
   });};

/*网页标题焦点变化*/
var OriginTitile=document.title;
var titleTime;
document.addEventListener("visibilitychange",function(){
    if(document.hidden){
        OriginTitile=document.title;document.title="|･ω･｀)你看不见我……你看不见我……你看不见我……";
        clearTimeout(titleTime)
    }
    else{
        document.title="_(:3」」还是被发现了";
        titleTime=setTimeout(function(){document.title=OriginTitile},2000)
    }
});


//输入框烟花特效
(function webpackUniversalModuleDefinition(a, b) {
    if (typeof exports === "object" && typeof module === "object") {
        module.exports = b()
    } else {
        if (typeof define === "function" && define.amd) {
            define([], b)
        } else {
            if (typeof exports === "object") {
                exports["POWERMODE"] = b()
            } else {
                a["POWERMODE"] = b()
            }
        }
    }
}
)(this, function() {
    return (function(a) {
        var b = {};
        function c(e) {
            if (b[e]) {
                return b[e].exports
            }
            var d = b[e] = {
                exports: {},
                id: e,
                loaded: false
            };
            a[e].call(d.exports, d, d.exports, c);
            d.loaded = true;
            return d.exports
        }
        c.m = a;
        c.c = b;
        c.p = "";
        return c(0)
    }
    )([function(c, g, b) {
        var d = document.createElement("canvas");
        d.width = window.innerWidth;
        d.height = window.innerHeight;
        d.style.cssText = "position:fixed;top:0;left:0;pointer-events:none;z-index:999999";
        window.addEventListener("resize", function() {
            d.width = window.innerWidth;
            d.height = window.innerHeight
        });
        document.body.appendChild(d);
        var a = d.getContext("2d");
        var n = [];
        var j = 0;
        var k = 120;
        var f = k;
        var p = false;
        o.shake = true;
        function l(r, q) {
            return Math.random() * (q - r) + r
        }
        function m(r) {
            if (o.colorful) {
                var q = l(0, 360);
                return "hsla(" + l(q - 10, q + 10) + ", 100%, " + l(50, 80) + "%, " + 1 + ")"
            } else {
                return window.getComputedStyle(r).color
            }
        }
        function e() {
            var t = document.activeElement;
            var v;
            if (t.tagName === "TEXTAREA" || (t.tagName === "INPUT" && t.getAttribute("type") === "text")) {
                var u = b(1)(t, t.selectionStart);
                v = t.getBoundingClientRect();
                return {
                    x: u.left + v.left,
                    y: u.top + v.top,
                    color: m(t)
                }
            }
            var s = window.getSelection();
            if (s.rangeCount) {
                var q = s.getRangeAt(0);
                var r = q.startContainer;
                if (r.nodeType === document.TEXT_NODE) {
                    r = r.parentNode
                }
                v = q.getBoundingClientRect();
                return {
                    x: v.left,
                    y: v.top,
                    color: m(r)
                }
            }
            return {
                x: 0,
                y: 0,
                color: "transparent"
            }
        }
        function h(q, s, r) {
            return {
                x: q,
                y: s,
                alpha: 1,
                color: r,
                velocity: {
                    x: -1 + Math.random() * 2,
                    y: -3.5 + Math.random() * 2
                }
            }
        }
        function o() {
            var t = e();
            var s = 5 + Math.round(Math.random() * 10);
            while (s--) {
                n[j] = h(t.x, t.y, t.color);
                j = (j + 1) % 500
            }
            f = k;
            if (!p) {
                requestAnimationFrame(i)
            }
            if (o.shake) {
                var r = 1 + 2 * Math.random();
                var q = r * (Math.random() > 0.5 ? -1 : 1);
                var u = r * (Math.random() > 0.5 ? -1 : 1);
                document.body.style.marginLeft = q + "px";
                document.body.style.marginTop = u + "px";
                setTimeout(function() {
                    document.body.style.marginLeft = "";
                    document.body.style.marginTop = ""
                }, 75)
            }
        }
        o.colorful = false;
        function i() {
            if (f > 0) {
                requestAnimationFrame(i);
                f--;
                p = true
            } else {
                p = false
            }
            a.clearRect(0, 0, d.width, d.height);
            for (var q = 0; q < n.length; ++q) {
                var r = n[q];
                if (r.alpha <= 0.1) {
                    continue
                }
                r.velocity.y += 0.075;
                r.x += r.velocity.x;
                r.y += r.velocity.y;
                r.alpha *= 0.96;
                a.globalAlpha = r.alpha;
                a.fillStyle = r.color;
                a.fillRect(Math.round(r.x - 1.5), Math.round(r.y - 1.5), 3, 3)
            }
        }
        requestAnimationFrame(i);
        c.exports = o
    }
    , function(b, a) {
        (function() {
            var d = ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderStyle", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing", "tabSize", "MozTabSize"];
            var e = window.mozInnerScreenX != null;
            function c(k, l, o) {
                var h = o && o.debug || false;
                if (h) {
                    var i = document.querySelector("#input-textarea-caret-position-mirror-div");
                    if (i) {
                        i.parentNode.removeChild(i)
                    }
                }
                var f = document.createElement("div");
                f.id = "input-textarea-caret-position-mirror-div";
                document.body.appendChild(f);
                var g = f.style;
                var j = window.getComputedStyle ? getComputedStyle(k) : k.currentStyle;
                g.whiteSpace = "pre-wrap";
                if (k.nodeName !== "INPUT") {
                    g.wordWrap = "break-word"
                }
                g.position = "absolute";
                if (!h) {
                    g.visibility = "hidden"
                }
                d.forEach(function(p) {
                    g[p] = j[p]
                });
                if (e) {
                    if (k.scrollHeight > parseInt(j.height)) {
                        g.overflowY = "scroll"
                    }
                } else {
                    g.overflow = "hidden"
                }
                f.textContent = k.value.substring(0, l);
                if (k.nodeName === "INPUT") {
                    f.textContent = f.textContent.replace(/\s/g, "\u00a0")
                }
                var n = document.createElement("span");
                n.textContent = k.value.substring(l) || ".";
                f.appendChild(n);
                var m = {
                    top: n.offsetTop + parseInt(j["borderTopWidth"]),
                    left: n.offsetLeft + parseInt(j["borderLeftWidth"])
                };
                if (h) {
                    n.style.backgroundColor = "#aaa"
                } else {
                    document.body.removeChild(f)
                }
                return m
            }
            if (typeof b != "undefined" && typeof b.exports != "undefined") {
                b.exports = c
            } else {
                window.getCaretCoordinates = c
            }
        }())
    }
    ])
});
POWERMODE.colorful = true;
POWERMODE.shake = false;
document.body.addEventListener("input", POWERMODE);

// 鼠标点击爱心效果
!function(e, t, a) {
    function n() {
        c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),
        o(),
        r()
    }
    function r() {
        for (var e = 0; e < d.length; e++)
            d[e].alpha <= 0 ? (t.body.removeChild(d[e].el),
            d.splice(e, 1)) : (d[e].y--,
            d[e].scale += .004,
            d[e].alpha -= .013,
            d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(45deg);background:" + d[e].color + ";z-index:99999");
        requestAnimationFrame(r)
    }
    function o() {
        var t = "function" == typeof e.onclick && e.onclick;
        e.onclick = function(e) {
            t && t(),
            i(e)
        }
    }
    function i(e) {
        var a = t.createElement("div");
        a.className = "heart",
        d.push({
            el: a,
            x: e.clientX - 5,
            y: e.clientY - 5,
            scale: 1,
            alpha: 1,
            color: s()
        }),
        t.body.appendChild(a)
    }
    function c(e) {
        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e))
        } catch (t) {
            a.styleSheet.cssText = e
        }
        t.getElementsByTagName("head")[0].appendChild(a)
    }
    function s() {
        return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
    }
    var d = [];
    e.requestAnimationFrame = function() {
        return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(e) {
            setTimeout(e, 1e3 / 60)
        }
    }(),
    n()
}(window, document);

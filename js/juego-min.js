const miModulo = (() => { "use strict"; let e = []; const t = ["C", "D", "H", "S"], n = ["A", "J", "Q", "K"]; let r = []; const l = document.querySelector("#btnPedir"), o = document.querySelector("#btnDetener"), s = (document.querySelector("#btnNuevo"), document.querySelectorAll(".divCartas")), a = document.querySelectorAll("small"), d = () => { e = []; for (let n = 2; n <= 10; n++)for (let r of t) e.push(n + r); for (let r of t) for (let t of n) e.push(t + r); return _.shuffle(e) }, c = () => { if (0 === e.length) throw "No hay mas cartas en el deck"; return e.pop() }, i = (e, t) => (r[t] = r[t] + (e => { const t = e.substring(0, e.length - 1); return isNaN(t) ? "A" === t ? 11 : 10 : 1 * t })(e), a[t].innerText = `${r[t]} pts`, r[t]), u = (e, t) => { const n = document.createElement("img"); n.src = `../assets/cartas/${e}.png`, n.classList.add("carta"), s[t].append(n) }, m = e => { let t = 0; do { const e = c(); t = i(e, r.length - 1), u(e, r.length - 1) } while (t < e && e <= 21); (() => { const [e, t] = r; setTimeout(() => { t === e ? alert("Nadie gana :(") : e > 21 ? alert("Computer wins!") : t > 21 ? alert("Player wins!! :)") : alert("Computadora Gana!") }, 100) })() }; return l.addEventListener("click", () => { const e = c(), t = i(e, 0); u(e, 0), t > 21 ? (console.warn("Perdiste!"), l.disabled = !0, o.disabled = !0, m(t)) : 21 === t && (console.warn("21, Genial!"), l.disabled = !0, o.disabled = !0, m(t)) }), o.addEventListener("click", () => { l.disabled = !0, o.disabled = !0, m(r[0]) }), { nuevoJuego: (t = 2) => { e = d(), r = []; for (let e = 0; e < t; e++)r.push(0); a.forEach(e => e.innerText = 0), s.forEach(e => e.innerHTML = ""), l.disabled = !1, o.disabled = !1 } } })();
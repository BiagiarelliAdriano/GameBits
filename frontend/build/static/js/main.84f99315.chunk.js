(this.webpackJsonpmoments = this.webpackJsonpmoments || []).push([[0], {
  11(e, t, a) {
    e.exports = {
      App: 'App_App__ucaqW', Main: 'App_Main__2mzUn', Content: 'App_Content__3kRIm', FillerImage: 'App_FillerImage__2NazA', Image: 'App_Image__2QXsH',
    };
  },
  126(e, t, a) {
    a.r(t); const s = a(0); const n = a.n(s); const c = a(31); const l = a.n(c); const r = (a(96), a(11)); const o = a.n(r); const i = a(134); const d = a(13); const j = a(133); const u = `${a.p}static/media/logo.67d1f052.png`; const m = a(23); const p = a.n(m); const b = a(16); const h = a(10); const x = a(46); const O = a.n(x); O.a.defaults.baseURL = 'https://gamebits-579c6fd85599.herokuapp.com/api/', O.a.defaults.headers.post['Content-Type'] = 'multipart/form-data', O.a.defaults.withCredentials = !0, O.a.interceptors.request.use(((e) => { const t = localStorage.getItem('access_token'); return t && (e.headers.Authorization = `Bearer ${t}`), e; }), ((e) => Promise.reject(e))); const g = O.a; const v = a(1); const f = Object(s.createContext)(); const _ = Object(s.createContext)(); const N = () => Object(s.useContext)(f); const w = () => Object(s.useContext)(_); const y = (e) => { const { children: t } = e; const [a, n] = Object(s.useState)(void 0); const c = Object(b.g)(); const l = Object(s.useCallback)((async () => { try { const a = localStorage.getItem('access_token'); if (a) try { const { data: e } = await g.get('users/current/', { headers: { Authorization: `Bearer ${a}` } }); localStorage.setItem('user_id', e.id), n(e); } catch (t) { let e; if (((e = t.response) === null || void 0 === e ? void 0 : e.status) !== 401) throw t; { const e = localStorage.getItem('refresh_token'); if (!e) throw t; { const t = (await g.post('token/refresh/', { refresh: e })).data.access; localStorage.setItem('access_token', t); const { data: a } = await g.get('users/current/', { headers: { Authorization: `Bearer ${t}` } }); n(a); } } } else n(null); } catch (t) { localStorage.removeItem('access_token'), localStorage.removeItem('refresh_token'), n(null), c.push('/signin'); } }), [c]); return Object(s.useEffect)((() => { l(); }), [l]), Object(v.jsx)(f.Provider, { value: a, children: Object(v.jsx)(_.Provider, { value: n, children: t }) }); }; const C = a(84); const S = a.n(C); const k = (e) => {
      const {
        src: t, height: a = 45, text: s, alt: n = 'avatar',
      } = e; return Object(v.jsxs)('span', {
        children: [Object(v.jsx)('img', {
          className: S.a.Avatar, src: t, height: a, width: a, alt: n || s || 'user avatar',
        }), s && Object(v.jsxs)('span', { children: [' ', s, ' '] })],
      });
    }; const B = () => { const [e, t] = Object(s.useState)(!1); const a = Object(s.useRef)(null); return Object(s.useEffect)((() => { const e = (e) => { a.current && !a.current.contains(e.target) && t(!1); }; return document.addEventListener('mousedown', e), () => { document.removeEventListener('mousedown', e); }; }), [a]), { expanded: e, setExpanded: t, ref: a }; }; const $ = Object(s.createContext)(); const I = () => Object(s.useContext)($); const P = (e) => { const { children: t } = e; const [a, n] = Object(s.useState)([]); const c = Object(s.useCallback)(((e) => { const { message: t, variant: a = 'info', timeout: s = 3e3 } = e; const c = Date.now(); n(((e) => [...e, { id: c, message: t, variant: a }])), setTimeout((() => { n(((e) => e.filter(((e) => e.id !== c)))); }), s); }), []); return Object(v.jsx)($.Provider, { value: { alerts: a, showAlert: c, removeAlert: (e) => { n(((t) => t.filter(((t) => t.id !== e)))); } }, children: t }); }; const U = () => {
      const e = N(); const t = w(); const a = Object(b.g)(); const { showAlert: s } = I(); const { expanded: n, setExpanded: c, ref: l } = B(); const r = Object(v.jsxs)(h.c, {
        className: p.a.NavLink, activeClassName: p.a.Active, to: '/posts/create', children: [Object(v.jsx)('i', { className: 'fa-solid fa-circle-plus' }), ' New Post'],
      }); const o = Object(v.jsxs)(v.Fragment, {
        children: [Object(v.jsxs)(h.c, {
          className: p.a.NavLink, activeClassName: p.a.Active, to: '/feed', children: [Object(v.jsx)('i', { className: 'fa-solid fa-walkie-talkie' }), ' Feed'],
        }), Object(v.jsxs)(h.c, {
          className: p.a.NavLink, activeClassName: p.a.Active, to: '/liked', children: [Object(v.jsx)('i', { className: 'fa-solid fa-heart' }), ' Liked'],
        }), Object(v.jsxs)(h.c, {
          className: p.a.NavLink, to: '/', onClick: () => { localStorage.removeItem('access_token'), localStorage.removeItem('refresh_token'), t(null), s({ message: 'Successfully signed out.', variant: 'info' }), a.push('/signin'); }, children: [Object(v.jsx)('i', { className: 'fa-solid fa-door-open' }), ' Sign Out'],
        }), Object(v.jsx)(h.c, { className: p.a.NavLink, to: `/users/${e === null || void 0 === e ? void 0 : e.id}`, children: Object(v.jsx)(k, { src: (e === null || void 0 === e ? void 0 : e.profile_picture) || 'https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg', height: '40', alt: 'Profile' }) })],
      }); const m = Object(v.jsxs)(v.Fragment, {
        children: [Object(v.jsxs)(h.c, {
          className: p.a.NavLink, activeClassName: p.a.Active, to: '/signin', children: [Object(v.jsx)('i', { className: 'fas fa-sign-in-alt' }), ' Sign In'],
        }), Object(v.jsxs)(h.c, {
          className: p.a.NavLink, activeClassName: p.a.Active, to: '/signup', children: [Object(v.jsx)('i', { className: 'fas fa-user-plus' }), ' Sign Up'],
        })],
      }); return Object(v.jsx)(i.a, {
        expanded: n,
        className: p.a.NavBar,
        expand: 'md',
        fixed: 'top',
        children: Object(v.jsxs)(d.a, {
          className: 'd-flex justify-content-between align-items-center',
          children: [Object(v.jsx)(h.c, { to: '/', exact: !0, children: Object(v.jsx)(i.a.Brand, { className: 'mx-auto', children: Object(v.jsx)('img', { src: u, alt: 'Gamebits logo', height: '45' }) }) }), e && r, Object(v.jsx)(i.a.Toggle, { ref: l, onClick: () => c(!n), 'aria-controls': 'basic-navbar-nav' }), Object(v.jsx)(i.a.Collapse, {
            id: 'basic-navbar-nav',
            children: Object(v.jsxs)(j.a, {
              className: 'ml-auto text-left',
              children: [Object(v.jsxs)(h.c, {
                exact: !0, className: p.a.NavLink, activeClassName: p.a.Active, to: '/', children: [Object(v.jsx)('i', { className: 'fa-solid fa-house-user' }), ' Home'],
              }), e ? o : m],
            }),
          })],
        }),
      });
    }; const A = a(22); const L = a.n(A); const F = a(9); const D = a.n(F); const E = a(17); const z = a(12); const T = a(8); const G = a(14); const M = a(19); const R = a(57); const q = `${a.p}static/media/signup.27579a0d.jpg`; const H = () => {
      let e; let t; let a; let n; let c; const [l, r] = Object(s.useState)({
        username: '', email: '', password1: '', password2: '',
      }); const {
        username: i, email: j, password1: u, password2: m,
      } = l; const [p, x] = Object(s.useState)({}); const [O, f] = Object(s.useState)(!1); const _ = Object(b.g)(); const { showAlert: N } = I(); const w = (e) => { r({ ...l, [e.target.name]: e.target.value }), x(((t) => ({ ...t, [e.target.name]: null, non_field_errors: null }))); }; return Object(v.jsxs)(E.a, {
        className: L.a.Row,
        children: [Object(v.jsxs)(z.a, {
          className: 'my-auto py-2 p-md-2',
          md: 6,
          children: [Object(v.jsxs)(d.a, {
            className: `${o.a.Content} p-4 `,
            children: [Object(v.jsx)('h1', { className: L.a.Header, children: 'Sign Up' }), Object(v.jsxs)(T.a, {
              onSubmit: async (e) => { e.preventDefault(), f(!0); try { await g.post('users/register/', l), N({ message: 'Welcome to GameBits! Now, sign in!', variant: 'success' }), _.push('/signin'); } catch (a) { let t; x(((t = a.response) === null || void 0 === t ? void 0 : t.data) || {}); } finally { f(!1); } },
              children: [Object(v.jsxs)(T.a.Group, {
                controlId: 'username',
                children: [Object(v.jsx)(T.a.Label, { className: 'd-none', children: 'Username' }), Object(v.jsx)(T.a.Control, {
                  className: L.a.Input, type: 'text', placeholder: 'Username', name: 'username', value: i, onChange: w,
                })],
              }), (e = p.username) === null || void 0 === e ? void 0 : e.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', children: e }, t))), Object(v.jsxs)(T.a.Group, {
                controlId: 'email',
                children: [Object(v.jsx)(T.a.Label, { className: 'd-none', children: 'Email' }), Object(v.jsx)(T.a.Control, {
                  className: L.a.Input, type: 'email', placeholder: 'Email', name: 'email', value: j, onChange: w,
                })],
              }), (t = p.email) === null || void 0 === t ? void 0 : t.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', children: e }, t))), Object(v.jsxs)(T.a.Group, {
                controlId: 'password1',
                children: [Object(v.jsx)(T.a.Label, { className: 'd-none', children: 'Password' }), Object(v.jsx)(T.a.Control, {
                  className: L.a.Input, type: 'password', placeholder: 'Password', name: 'password1', value: u, onChange: w,
                })],
              }), (a = p.password1) === null || void 0 === a ? void 0 : a.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', children: e }, t))), Object(v.jsxs)(T.a.Group, {
                controlId: 'password2',
                children: [Object(v.jsx)(T.a.Label, { className: 'd-none', children: 'Confirm password' }), Object(v.jsx)(T.a.Control, {
                  className: L.a.Input, type: 'password', placeholder: 'Confirm password', name: 'password2', value: m, onChange: w,
                })],
              }), (n = p.password2) === null || void 0 === n ? void 0 : n.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', children: e }, t))), Object(v.jsx)(M.a, {
                className: `${D.a.Button} ${D.a.Wide} ${D.a.Bright}`, type: 'submit', disabled: O, children: O ? 'Signing Up...' : 'Sign up',
              }), (c = p.non_field_errors) === null || void 0 === c ? void 0 : c.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', className: 'mt-3', children: e }, t)))],
            })],
          }), Object(v.jsx)(d.a, { className: `mt-3 ${o.a.Content}`, children: Object(v.jsxs)(h.b, { className: L.a.Link, to: '/signin', children: ['Already have an account? ', Object(v.jsx)('span', { children: 'Sign in' })] }) })],
        }), Object(v.jsx)(z.a, { md: 6, className: `my-auto d-none d-md-block p-2 ${L.a.SignUpCol}`, children: Object(v.jsx)(R.a, { className: `${o.a.FillerImage}`, src: q, alt: 'Sign Up Illustration' }) })],
      });
    }; const W = `${a.p}static/media/signin.248386f9.jpg`; const J = function () {
      let e; let t; let a; const n = w(); const [c, l] = Object(s.useState)({ username: '', password: '' }); const { username: r, password: i } = c; const [j, u] = Object(s.useState)({}); const [m, p] = Object(s.useState)(!1); const x = Object(b.g)(); const O = Object(b.h)(); const { showAlert: f } = I(); Object(s.useEffect)((() => { let e; (e = O.state) !== null && void 0 !== e && e.alert && (f(O.state.alert), x.replace({ ...O, state: {} })); }), [O, f, x]); const _ = (e) => { l({ ...c, [e.target.name]: e.target.value }), u(((t) => ({ ...t, [e.target.name]: null, non_field_errors: null }))); }; return Object(v.jsxs)(E.a, {
        className: L.a.Row,
        children: [Object(v.jsxs)(z.a, {
          className: 'my-auto p-0 p-md-2',
          md: 6,
          children: [Object(v.jsxs)(d.a, {
            className: `${o.a.Content} p-4`,
            children: [Object(v.jsx)('h1', { className: L.a.Header, children: 'Sign In' }), Object(v.jsxs)(T.a, {
              onSubmit: async (e) => { e.preventDefault(), p(!0); try { const e = await g.post('token/', c); const { data: t } = e; localStorage.setItem('access_token', t.access), localStorage.setItem('refresh_token', t.refresh); const { data: a } = await g.get('users/current/', { headers: { Authorization: `Bearer ${t.access}` } }); n(a), f({ message: 'Successfully signed in!', variant: 'success' }), x.push('/'); } catch (a) { let t; u(((t = a.response) === null || void 0 === t ? void 0 : t.data) || {}); } finally { p(!1); } },
              children: [Object(v.jsxs)(T.a.Group, {
                controlId: 'username',
                children: [Object(v.jsx)(T.a.Label, { className: 'd-none', children: 'Username' }), Object(v.jsx)(T.a.Control, {
                  type: 'text', placeholder: 'Username', name: 'username', className: L.a.Input, value: r, onChange: _,
                })],
              }), (e = j.username) === null || void 0 === e ? void 0 : e.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', children: e }, t))), Object(v.jsxs)(T.a.Group, {
                controlId: 'password',
                children: [Object(v.jsx)(T.a.Label, { className: 'd-none', children: 'Password' }), Object(v.jsx)(T.a.Control, {
                  type: 'password', placeholder: 'Password', name: 'password', className: L.a.Input, value: i, onChange: _,
                })],
              }), (t = j.password) === null || void 0 === t ? void 0 : t.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', children: e }, t))), Object(v.jsx)(M.a, {
                className: `${D.a.Button} ${D.a.Wide} ${D.a.Bright}`, type: 'submit', disabled: m, children: m ? 'Signing In...' : 'Sign In',
              }), (a = j.non_field_errors) === null || void 0 === a ? void 0 : a.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', className: 'mt-3', children: e }, t)))],
            })],
          }), Object(v.jsx)(d.a, { className: `mt-3 ${o.a.Content}`, children: Object(v.jsxs)(h.b, { className: L.a.Link, to: '/signup', children: ["Don't have an account? ", Object(v.jsx)('span', { children: 'Sign up now!' })] }) })],
        }), Object(v.jsx)(z.a, { md: 6, className: `my-auto d-none d-md-block p-2 ${L.a.SignInCol}`, children: Object(v.jsx)(R.a, { className: `${o.a.FillerImage}`, src: W, alt: 'Sign In Illustration' }) })],
      });
    }; const Q = a(129); const K = a(86); const V = a.n(K); const X = (e) => { const { spinner: t, src: a, message: s } = e; return Object(v.jsxs)('div', { className: `${V.a.Asset} p-4`, children: [t && Object(v.jsx)(Q.a, { animation: 'border' }), a && Object(v.jsx)('img', { src: a, alt: s }), s && Object(v.jsx)('p', { className: 'mt-4', children: s })] }); }; const Y = a(58); const Z = a.n(Y); const ee = function () {
      let e; let t; let a; let n; const [c, l] = Object(s.useState)({}); const [r, i] = Object(s.useState)({
        title: '', game: '', content: '', image: '',
      }); const {
        title: j, game: u, content: m, image: p,
      } = r; const h = Object(s.useRef)(null); const x = Object(b.g)(); const O = (e) => { i({ ...r, [e.target.name]: e.target.value }); }; const [f, _] = Object(s.useState)(null); const N = Object(v.jsxs)('div', {
        className: 'text-center',
        children: [Object(v.jsxs)(T.a.Group, {
          children: [Object(v.jsx)(T.a.Label, { children: 'Title' }), Object(v.jsx)(T.a.Control, {
            type: 'text', name: 'title', placeholder: 'Type the title of your post...', value: j, onChange: O,
          })],
        }), c === null || void 0 === c || (e = c.title) === null || void 0 === e ? void 0 : e.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', children: e }, t))), Object(v.jsxs)(T.a.Group, {
          children: [Object(v.jsx)(T.a.Label, { children: 'Game' }), Object(v.jsx)(T.a.Control, {
            type: 'text', name: 'game', placeholder: 'Type the name of the game...', value: u, onChange: O,
          })],
        }), c === null || void 0 === c || (t = c.game) === null || void 0 === t ? void 0 : t.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', children: e }, t))), Object(v.jsxs)(T.a.Group, {
          children: [Object(v.jsx)(T.a.Label, { children: 'Content' }), Object(v.jsx)(T.a.Control, {
            as: 'textarea', rows: 6, name: 'content', placeholder: 'Share the story behind your post...', value: m, onChange: O,
          })],
        }), c === null || void 0 === c || (a = c.content) === null || void 0 === a ? void 0 : a.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', children: e }, t))), Object(v.jsx)(M.a, { className: `${D.a.Button} ${D.a.Blue}`, onClick: () => x.goBack(), children: 'cancel' }), Object(v.jsx)(M.a, { className: `${D.a.Button} ${D.a.Blue}`, type: 'submit', children: 'create' })],
      }); return Object(v.jsx)(T.a, {
        onSubmit: async (e) => { if (e.preventDefault(), c.image) return; const t = new FormData(); t.append('title', j), t.append('game', u), t.append('content', m), t.append('image', h.current.files[0]); try { const { data: e } = await g.post('/posts/', t, { headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}`, 'Content-Type': 'multipart/form-data' } }); x.push({ pathname: `/posts/${e.id}`, state: { alertMessage: 'Post successfully created.' } }); } catch (n) { let a; let s; if (((a = n.response) === null || void 0 === a ? void 0 : a.status) !== 401)l((s = n.response) === null || void 0 === s ? void 0 : s.data); } },
        children: Object(v.jsxs)(E.a, {
          children: [Object(v.jsx)(z.a, {
            className: 'py-2 p-0 p-md-2',
            md: 7,
            lg: 8,
            children: Object(v.jsxs)(d.a, {
              className: `${o.a.Content} ${Z.a.Container} d-flex flex-column justify-content-center`,
              children: [Object(v.jsxs)(T.a.Group, {
                className: 'text-center',
                children: [f ? Object(v.jsx)('img', {
                  src: f, alt: '', className: 'img-fluid mb-3', style: { maxHeight: '200px', objectFit: 'cover' },
                }) : Object(v.jsx)(X, { message: 'Click or tap to upload an image', spinner: !1, src: null }), Object(v.jsx)(T.a.Label, { className: `${D.a.uploadButton} ${D.a.Blue} btn mt-3`, htmlFor: 'image-upload', children: p ? 'Change the image' : Object(v.jsxs)('div', { className: 'd-flex flex-column align-items-center', children: [Object(v.jsx)('i', { className: 'fa-solid fa-upload fa-3x mb-2' }), 'Upload an image'] }) }), Object(v.jsx)(T.a.Control, {
                  id: 'image-upload', type: 'file', accept: 'image/*', onChange: (e) => { if (e.target.files.length) { const t = e.target.files[0]; if (!t.type.startsWith('image/')) return l({ image: ['Only image files are allowed.'] }), i({ ...r, image: null }), _(null), void (h.current.value = null); if (t.size > 5242880) return l({ image: ['Image is too large. Max size is 5MB.'] }), i({ ...r, image: null }), _(null), void (h.current.value = null); l(((e) => ({ ...e, image: null }))), f && URL.revokeObjectURL(f); const a = URL.createObjectURL(t); _(a), i({ ...r, image: t }); } }, ref: h, className: 'd-none',
                })],
              }), c === null || void 0 === c || (n = c.image) === null || void 0 === n ? void 0 : n.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', children: e }, t))), Object(v.jsx)('div', { className: 'd-md-none', children: N })],
            }),
          }), Object(v.jsx)(z.a, {
            md: 5, lg: 4, className: 'd-none d-md-block p-0 p-md-2', children: Object(v.jsx)(d.a, { className: o.a.Content, children: N }),
          })],
        }),
      });
    }; const te = a(51); const ae = a.n(te); const se = a(135); const ne = a(130); const ce = a(132); const le = a(131); const re = a(29); const oe = a(27); const ie = a.n(oe); const de = n.a.forwardRef(((e, t) => { const { onClick: a, className: s } = e; return Object(v.jsx)('i', { className: `fas fa-ellipsis-v ${s}`, ref: t, onClick: (e) => { e.preventDefault(), a(e); } }); })); const je = (e) => {
      const { handleEdit: t, handleDelete: a } = e; return Object(v.jsxs)(re.a, {
        className: 'ml-auto',
        drop: 'left',
        children: [Object(v.jsx)(re.a.Toggle, { className: ie.a.DropdownToggle }), Object(v.jsxs)(re.a.Menu, {
          className: `${ie.a.DropdownMenu} text-center`,
          popperConfig: { strategy: 'fixed' },
          children: [Object(v.jsxs)(re.a.Item, {
            className: ie.a.DropdownItem, onClick: t, 'aria-label': 'edit', children: [Object(v.jsx)('i', { className: 'fas fa-edit' }), ' Edit'],
          }), Object(v.jsxs)(re.a.Item, {
            className: ie.a.DropdownItem, onClick: a, 'aria-label': 'delete', children: [Object(v.jsx)('i', { className: 'fas fa-trash-alt' }), ' Delete'],
          })],
        })],
      });
    }; const ue = (e) => {
      const { id: t } = e; const a = Object(b.g)(); return Object(v.jsxs)(re.a, {
        className: `ml-auto px-3 ${ie.a.Absolute}`,
        drop: 'left',
        children: [Object(v.jsx)(re.a.Toggle, { className: ie.a.DropdownToggle, as: de }), Object(v.jsxs)(re.a.Menu, {
          className: ie.a.DropdownMenu,
          children: [Object(v.jsxs)(re.a.Item, {
            as: 'button', onClick: (e) => { e.preventDefault(), a.push(`/users/${t}/edit`); }, 'aria-label': 'edit-profile', className: ie.a.DropdownItem, children: [Object(v.jsx)('i', { className: 'fas fa-edit' }), ' Edit User'],
          }), Object(v.jsxs)(re.a.Item, {
            as: 'button', onClick: (e) => { e.preventDefault(), a.push(`/users/${t}/edit/username`); }, 'aria-label': 'edit-username', className: ie.a.DropdownItem, children: [Object(v.jsx)('i', { className: 'far fa-id-card' }), 'Change Username'],
          }), Object(v.jsxs)(re.a.Item, {
            as: 'button', onClick: (e) => { e.preventDefault(), a.push(`/users/${t}/edit/password`); }, 'aria-label': 'edit-password', className: ie.a.DropdownItem, children: [Object(v.jsx)('i', { className: 'fas fa-key' }), 'Change Password'],
          })],
        })],
      });
    }; const me = (e) => {
      const {
        id: t, author: a, author_id: n, profile_picture: c, title: l, game: r, content: o, image: i, updated_at: d, likes_count: j, has_liked: u, comments_count: m, postPage: p, setPost: x,
      } = e; const O = N(); const f = (O === null || void 0 === O ? void 0 : O.username) === a; const { showAlert: _ } = I(); const w = Object(b.g)(); const [y, C] = Object(s.useState)(j); const [S, B] = Object(s.useState)(u); const [$, P] = Object(s.useState)(!1); return Object(v.jsxs)(se.a, {
        className: ae.a.Post,
        children: [Object(v.jsx)(se.a.Body, {
          children: Object(v.jsxs)(ne.a, {
            className: 'align-items-center justify-content-between',
            children: [Object(v.jsxs)(h.b, { to: `/users/${n}`, children: [Object(v.jsx)(k, { src: c || 'https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg', height: '40', alt: 'Profile' }), a] }), Object(v.jsxs)('div', {
              className: 'd-flex align-items-center',
              children: [Object(v.jsx)('span', {
                children: new Date(d).toLocaleString(void 0, {
                  year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
                }),
              }), f && p && Object(v.jsx)(je, { handleEdit: () => { w.push(`/posts/${t}/edit`); }, handleDelete: async () => { try { await g.delete(`/posts/${t}/`), _({ message: 'Post successfully delete!', variant: 'success' }), w.push('/'); } catch (e) { console.error('Error deleting post:', e); } } })],
            })],
          }),
        }), Object(v.jsx)(h.b, { to: `/posts/${t}`, children: Object(v.jsx)(se.a.Img, { src: i, alt: l }) }), Object(v.jsxs)(se.a.Body, { children: [l && Object(v.jsx)(se.a.Title, { className: 'text-center', children: l }), r && Object(v.jsx)(se.a.Text, { children: r }), o && Object(v.jsx)(se.a.Text, { children: o }), Object(v.jsxs)('div', { className: ae.a.PostBar, children: [f ? Object(v.jsx)(ce.a, { placement: 'top', overlay: Object(v.jsx)(le.a, { children: "You can't like your own post!" }), children: Object(v.jsx)('i', { className: 'far fa-heart' }) }) : O ? Object(v.jsxs)(v.Fragment, { children: [Object(v.jsx)('span', { onClick: async () => { if (!$) { P(!0); try { const { data: e } = await g.post(`/likes/posts/${t}/like/`); x && x(p ? (t) => ({ ...t, likes_count: e.likes_count, has_liked: e.has_liked }) : (a) => ({ ...a, results: a.results.map(((a) => (a.id === t ? { ...a, likes_count: e.likes_count, has_liked: e.has_liked } : a))) })), C(e.likes_count), B(e.has_liked); } catch (e) { console.error('Error liking post:', e); } finally { P(!1); } } }, style: { pointerEvents: $ ? 'none' : 'auto' }, children: Object(v.jsx)('i', { className: S ? `fas fa-heart ${ae.a.Heart}` : `far fa-heart ${ae.a.HeartOutline}` }) }), Object(v.jsx)('span', { children: y })] }) : Object(v.jsx)(ce.a, { placement: 'top', overlay: Object(v.jsx)(le.a, { children: 'Log in to like posts!' }), children: Object(v.jsx)('i', { className: 'far fa-heart' }) }), Object(v.jsx)(h.b, { to: `/posts/${t}`, children: Object(v.jsx)('i', { className: 'far fa-comments' }) }), m] })] })],
      });
    }; const pe = a(87); const be = a(41); const he = a.n(be); const xe = function (e) {
      const [t, a] = Object(s.useState)(''); const {
        post: n, setPost: c, setComments: l, profilePicture: r,
      } = e || {}; const [o, i] = Object(s.useState)(!1); const [d, j] = Object(s.useState)(null); const u = N(); return Object(v.jsxs)(T.a, {
        className: 'mt-2',
        onSubmit: async (e) => { if (e.preventDefault(), t.trim()) { i(!0), j(null); try { const { data: e } = await g.post('/comments/', { content: t, post: n }); l(((t) => ({ ...t, results: [e, ...t.results] }))), c(((e) => ({ ...e, comments_count: e.comments_count + 1 }))), a(''); } catch (s) { console.error(s), j('Failed to post comment. Please try again.'); } finally { i(!1); } } },
        children: [Object(v.jsx)(T.a.Group, {
          children: Object(v.jsxs)(pe.a, {
            children: [Object(v.jsx)(h.b, { to: `/users/${u === null || void 0 === u ? void 0 : u.id}`, children: Object(v.jsx)(k, { src: r }) }), Object(v.jsx)(T.a.Control, {
              className: he.a.Form, placeholder: 'my comment...', as: 'textarea', value: t, onChange: (e) => { a(e.target.value), d && j(null); }, rows: 2, 'aria-label': 'Write a comment', disabled: o,
            })],
          }),
        }), d && Object(v.jsx)('div', { role: 'alert', className: 'text-danger mb-2', children: d }), Object(v.jsx)('button', {
          className: `${he.a.Button} btn d-block ml-auto`, disabled: !t.trim() || o, type: 'submit', children: o ? 'Posting...' : 'post',
        })],
      });
    }; const Oe = function (e) {
      const {
        id: t, content: a, setShowEditForm: n, setComments: c, className: l,
      } = e; const [r, o] = Object(s.useState)(a); const [i, d] = Object(s.useState)(!1); const [j, u] = Object(s.useState)(null); return Object(v.jsxs)(T.a, {
        onSubmit: async (e) => { e.preventDefault(); const a = r.trim(); if (a) { d(!0), u(null); try { await g.put(`/comments/${t}/`, { content: a }), c(((e) => ({ ...e, results: e.results.map(((e) => (e.id === t ? { ...e, content: a, updated_at: 'now' } : e))) }))), n(!1); } catch (s) { console.error(s), u('Failed to update comment. Please try again.'); } finally { d(!1); } } },
        className: l,
        children: [Object(v.jsx)(T.a.Group, {
          className: 'pr-1',
          children: Object(v.jsx)(T.a.Control, {
            className: he.a.Form, as: 'textarea', value: r, onChange: (e) => { o(e.target.value), j && u(null); }, rows: 2, 'aria-label': 'Edit comment', disabled: i,
          }),
        }), j && Object(v.jsx)('div', { role: 'alert', className: 'text-danger mb-2', children: j }), Object(v.jsxs)('div', {
          className: 'text-right',
          children: [Object(v.jsx)('button', {
            className: he.a.Button, onClick: () => n(!1), type: 'button', disabled: i, children: 'cancel',
          }), Object(v.jsx)('button', {
            className: he.a.Button, disabled: !r.trim() || i, type: 'submit', children: i ? 'Saving...' : 'save',
          })],
        })],
      });
    }; const ge = a(71); const ve = a.n(ge); const fe = (e) => {
      const {
        author_id: t, profile_picture: a, author: n, updated_at: c, content: l, id: r, setPost: o, setComments: i, postId: d,
      } = e; const [j, u] = Object(s.useState)(!1); const m = N(); const p = (m === null || void 0 === m ? void 0 : m.username) === n; const { showAlert: b } = I(); return Object(v.jsxs)(v.Fragment, {
        children: [Object(v.jsx)('hr', {}), Object(v.jsxs)(ne.a, {
          children: [Object(v.jsx)(h.b, { to: `/users/${t}`, children: Object(v.jsx)(k, { src: a || 'https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg' }) }), Object(v.jsxs)(ne.a.Body, {
            className: 'align-self-center ml-2',
            children: [Object(v.jsx)('span', { className: ve.a.Author, children: n }), Object(v.jsx)('span', { className: ve.a.Date, children: c }), j ? Object(v.jsx)('div', {
              className: ie.a.DropdownMenu,
              children: Object(v.jsx)(Oe, {
                id: r, author_id: t, content: l, profile_picture: a, setComments: i, setShowEditForm: u,
              }),
            }) : Object(v.jsx)('p', { children: l })],
          }), p && !j && Object(v.jsx)('div', { className: 'ml-auto', children: Object(v.jsx)(je, { handleEdit: () => u(!0), handleDelete: async () => { try { await g.delete(`/comments/${r}`), o(((e) => (e ? e.hasOwnProperty('results') ? { ...e, results: e.results.map(((e) => (e.id === d ? { ...e, comments_count: Math.max(0, e.comments_count - 1) } : e))) } : e.id === d ? { ...e, comments_count: Math.max(0, e.comments_count - 1) } : e : e))), i(((e) => ({ ...e, results: e.results.filter(((e) => e.id !== r)) }))), b({ message: 'Comment deleted successfully!', variant: 'success' }); } catch (e) { console.error('Error deleting comment:', e), b({ message: 'Failed to delete comment. Please try again.', variant: 'danger' }); } } }) })],
        })],
      });
    }; const _e = Object(s.createContext)(); const Ne = Object(s.createContext)(); const we = () => Object(s.useContext)(_e); const ye = (e) => { const { children: t } = e; const [a, n] = Object(s.useState)({ popularUsers: { results: [] }, pageUser: { results: [] } }); const c = N(); const l = w(); Object(s.useEffect)((() => { (async () => { try { const { data: e } = await g.get('/users/?ordering=-level'); n(((t) => ({ ...t, popularUsers: e }))); } catch (e) { console.error('Error fetching popular users:', e); } })(); }), [c]); return Object(v.jsx)(_e.Provider, { value: { pageUser: a.pageUser, popularUsers: a.popularUsers, handleFollowToggle: async (e) => { try { const { data: t } = await g.post(`follow/toggle/${e}/`); return n(((a) => { const s = a.popularUsers.results.map(((a) => (a.id === e ? { ...a, following_id: t.following_id, followers: t.followers_count } : a))); const n = a.pageUser.results.map(((a) => (a.id === e ? { ...a, following_id: t.following_id, followers: t.followers_count } : a))); return { ...a, popularUsers: { ...a.popularUsers, results: s }, pageUser: { ...a.pageUser, results: n } }; })), l(((e) => e && { ...e, following: t.is_following ? e.following + 1 : e.following - 1 })), t.message; } catch (t) { console.error('Error toggling follow:', t); } } }, children: Object(v.jsx)(Ne.Provider, { value: n, children: t }) }); }; const Ce = a(88); const Se = a.n(Ce); const ke = (e) => {
      const {
        user: t, mobile: a, imageSize: n = 55, handleFollowToggle: c,
      } = e; const { id: l, following_id: r, profile_picture: o } = t || {}; const i = N(); const [d, j] = Object(s.useState)(!1); const u = i && t.username !== i.username; return Object(v.jsxs)('div', {
        className: `my-3 d-flex align-items-center ${a ? 'flex-column text-center' : ''}`,
        children: [Object(v.jsx)('div', { children: Object(v.jsx)(h.b, { className: 'align-self-center', to: `/users/${l}`, children: Object(v.jsx)(k, { src: o || 'https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg', height: n, alt: `${t.username}'s profile picture` }) }) }), Object(v.jsx)('div', { className: `mx-2 ${Se.a.WordBreak}`, children: Object(v.jsx)('strong', { children: t.username }) }), Object(v.jsx)('div', {
          className: `${a ? 'w-100 mt-2' : 'text-right ml-auto'}`,
          children: u && Object(v.jsx)(M.a, {
            className: `${D.a.Button} ${r ? D.a.BlackOutline : D.a.Blue} ${a ? 'w-100' : ''}`, onClick: async () => { c && !d && (j(!0), await c(l), j(!1)); }, disabled: d, size: a ? 'lg' : 'sm', children: d ? r ? 'Unfollowing...' : 'Following...' : r ? 'Unfollow' : 'Follow',
          }),
        })],
      });
    }; const Be = (e) => { let t; const { mobile: a } = e; const { popularUsers: s, handleFollowToggle: n } = we(); const c = (s === null || void 0 === s || (t = s.results) === null || void 0 === t ? void 0 : t.length) > 0; return Object(v.jsx)(d.a, { className: `${o.a.Content} ${a ? 'd-lg-none text-center mb-3' : ''}`, children: c ? Object(v.jsxs)(v.Fragment, { children: [Object(v.jsx)('p', { children: 'Popular Users' }), a ? Object(v.jsx)('div', { className: 'd-flex justify-content-around', children: s.results.slice(0, 4).map(((e) => Object(v.jsx)(ke, { user: e, mobile: !0, handleFollowToggle: n }, e.id))) }) : s.results.map(((e) => Object(v.jsx)(ke, { user: e, handleFollowToggle: n }, e.id)))] }) : Object(v.jsx)(X, { message: 'No popular users yet.', spinner: !(s !== null && void 0 !== s && s.results) }) }); }; const $e = a(44); const Ie = async (e, t) => { if (e.next) try { const { data: a } = await g.get(e.next); t(((e) => ({ ...e, next: a.next, results: a.results.reduce(((e, t) => (e.some(((e) => e.id === t.id)) ? e : [...e, t])), e.results) }))); } catch (a) { console.error('Error fetching more data:', a); } }; const Pe = function () {
      let e; const { id: t } = Object(b.i)(); const [a, n] = Object(s.useState)(null); const [c, l] = Object(s.useState)({ results: [], next: null }); const [r, i] = Object(s.useState)(null); const j = (e = Object(b.h)().state) === null || void 0 === e ? void 0 : e.alertMessage; const { showAlert: u } = I(); const m = N(); const p = (m === null || void 0 === m ? void 0 : m.profile_picture) || 'https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg'; return Object(s.useEffect)((() => { j && u({ message: j, variant: 'success' }); }), [j, u]), Object(s.useEffect)((() => { let e = !0; return (async () => { try { const [{ data: a }, { data: s }] = await Promise.all([g.get(`/posts/${t}`), g.get(`/comments/?post=${t}`)]); e && (n(a), l(s)); } catch (a) { console.log(a), e && i('An error occured while loading the post.'); } })(), () => { e = !1; }; }), [t]), m ? r ? Object(v.jsx)(d.a, { className: o.a.Content, children: Object(v.jsx)('h4', { children: r }) }) : Object(v.jsxs)(E.a, {
        className: 'h-100',
        children: [Object(v.jsxs)(z.a, {
          className: 'py-2 p-0 p-lg-2',
          lg: 8,
          children: [a ? Object(v.jsx)(me, { ...a, setPost: n, postPage: !0 }) : Object(v.jsx)(X, { spinner: !0 }), Object(v.jsxs)(d.a, {
            className: o.a.Content,
            children: [m ? Object(v.jsx)(xe, {
              user_id: m.user_id, profilePicture: p, post: t, setPost: n, setComments: l,
            }) : c.results.length ? 'Comments' : null, c.results.length ? Object(v.jsx)($e.a, {
              dataLength: c.results.length,
              next: () => Ie(c, l),
              hasMore: !!c.next,
              loader: Object(v.jsx)(X, { spinner: !0 }),
              children: c.results.map(((e) => Object(v.jsx)(fe, {
                ...e, setPost: n, setComments: l, postId: a.id,
              }, e.id))),
            }) : m ? Object(v.jsx)('span', { children: 'No comments yet, be the first to comment!' }) : Object(v.jsx)('span', { children: 'No comments... yet' })],
          })],
        }), Object(v.jsx)(z.a, { lg: 4, className: 'd-none d-lg-block p-0 p-lg-2', children: Object(v.jsx)(Be, {}) })],
      }) : Object(v.jsx)(b.a, { to: '/signup' });
    }; const Ue = a(72); const Ae = a.n(Ue); const Le = function (e) {
      let t; const { message: a, filter: n = '' } = e; const [c, l] = Object(s.useState)({ results: [] }); const [r, i] = Object(s.useState)(!1); const { pathname: j } = Object(b.h)(); const [u, m] = Object(s.useState)(''); return Object(s.useEffect)((() => { i(!1); const e = setTimeout((() => { (async () => { try { const e = await g.get('/posts/', { params: { search: u, filter: n } }); e.data && Array.isArray(e.data.results) ? l(e.data) : console.error('Invalid response data format:', e.data), i(!0); } catch (e) { console.error('Error fetching posts:', e), i(!0); } })(); }), 1e3); return () => { clearTimeout(e); }; }), [n, u, j]), Object(v.jsxs)(E.a, {
        className: 'h-100',
        children: [Object(v.jsxs)(z.a, {
          className: 'py-2 p-0 p-lg-2',
          lg: 8,
          children: [Object(v.jsx)(Be, { mobile: !0 }), Object(v.jsx)('i', { className: `fas fa-search ${Ae.a.SearchIcon}` }), Object(v.jsx)(T.a, {
            className: Ae.a.SearchBar,
            onSubmit: (e) => e.preventDefault(),
            children: Object(v.jsx)(T.a.Control, {
              value: u, onChange: (e) => m(e.target.value), type: 'text', className: 'mr-sm-2', placeholder: 'Search posts...',
            }),
          }), r ? Object(v.jsx)(v.Fragment, {
            children: c !== null && void 0 !== c && (t = c.results) !== null && void 0 !== t && t.length ? Object(v.jsx)($e.a, {
              children: c.results.map(((e) => Object(v.jsx)(me, { ...e, setPosts: l }, e.id))), dataLength: c.results.length, loader: Object(v.jsx)(X, { spinner: !0 }), hasMore: !!c.next, next: () => Ie(c, l),
            }) : Object(v.jsx)(d.a, { className: o.a.Content, children: Object(v.jsx)(X, { message: a || 'No posts found.' }) }),
          }) : Object(v.jsx)(d.a, { className: o.a.Content, children: Object(v.jsx)(X, { spinner: !0 }) })],
        }), Object(v.jsx)(z.a, { md: 4, className: 'd-none d-lg-block p-0 p-lg-2', children: Object(v.jsx)(Be, {}) })],
      });
    }; const Fe = function () {
      let e; let t; let a; let n; const [c, l] = Object(s.useState)({}); const [r, i] = Object(s.useState)({
        title: '', game: '', content: '', image: '',
      }); const {
        title: j, game: u, content: m, image: p,
      } = r; const h = Object(s.useRef)(null); const x = Object(b.g)(); const { id: O } = Object(b.i)(); Object(s.useEffect)((() => {
        (async () => {
          try {
            const { data: e } = await g.get(`/posts/${O}/`); const {
              title: t, game: a, content: s, image: n, is_author: c,
            } = e; c ? i({
              title: t, game: a, content: s, image: n,
            }) : x.push('/');
          } catch (e) { console.log(e); }
        })();
      }), [x, O]); const f = (e) => { i({ ...r, [e.target.name]: e.target.value }); }; const [_, N] = Object(s.useState)(null); const w = Object(v.jsxs)('div', {
        className: 'text-center',
        children: [Object(v.jsxs)(T.a.Group, {
          children: [Object(v.jsx)(T.a.Label, { children: 'Title' }), Object(v.jsx)(T.a.Control, {
            type: 'text', name: 'title', placeholder: 'Type the title of your post...', value: j, onChange: f,
          })],
        }), c === null || void 0 === c || (e = c.title) === null || void 0 === e ? void 0 : e.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', children: e }, t))), Object(v.jsxs)(T.a.Group, {
          children: [Object(v.jsx)(T.a.Label, { children: 'Game' }), Object(v.jsx)(T.a.Control, {
            type: 'text', name: 'game', placeholder: 'Type the name of the game...', value: u, onChange: f,
          })],
        }), c === null || void 0 === c || (t = c.game) === null || void 0 === t ? void 0 : t.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', children: e }, t))), Object(v.jsxs)(T.a.Group, {
          children: [Object(v.jsx)(T.a.Label, { children: 'Content' }), Object(v.jsx)(T.a.Control, {
            as: 'textarea', rows: 6, name: 'content', placeholder: 'Share the story behind your post...', value: m, onChange: f,
          })],
        }), c === null || void 0 === c || (a = c.content) === null || void 0 === a ? void 0 : a.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', children: e }, t))), Object(v.jsx)(M.a, { className: `${D.a.Button} ${D.a.Blue}`, onClick: () => x.goBack(), children: 'cancel' }), Object(v.jsx)(M.a, { className: `${D.a.Button} ${D.a.Blue}`, type: 'submit', children: 'save' })],
      }); return Object(v.jsx)(T.a, {
        onSubmit: async (e) => {
          let t; e.preventDefault(); const a = new FormData(); const
            s = parseInt(localStorage.getItem('user_id'), 10); a.append('title', j), a.append('game', u), a.append('content', m), h !== null && void 0 !== h && (t = h.current) !== null && void 0 !== t && t.files[0] && a.append('image', h.current.files[0]), a.append('author', s); try { await g.put(`/posts/${O}/`, a, { headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}`, 'Content-Type': 'multipart/form-data' } }), x.push(`/posts/${O}`); } catch (r) { let n; let c; if (((n = r.response) === null || void 0 === n ? void 0 : n.status) !== 401)l((c = r.response) === null || void 0 === c ? void 0 : c.data); }
        },
        children: Object(v.jsxs)(E.a, {
          children: [Object(v.jsx)(z.a, {
            className: 'py-2 p-0 p-md-2',
            md: 7,
            lg: 8,
            children: Object(v.jsxs)(d.a, {
              className: `${o.a.Content} ${Z.a.Container} d-flex flex-column justify-content-center`,
              children: [Object(v.jsxs)(T.a.Group, {
                className: 'text-center',
                children: [_ ? Object(v.jsx)('img', {
                  src: _, alt: '', className: 'img-fluid mb-3', style: { maxHeight: '200px', objectFit: 'cover' },
                }) : Object(v.jsx)(X, { message: 'Click or tap to upload an image', spinner: !1, src: null }), Object(v.jsx)(T.a.Label, { className: `${D.a.uploadButton} ${D.a.Blue} btn mt-3`, htmlFor: 'image-upload', children: p ? 'Change the image' : Object(v.jsxs)('div', { className: 'd-flex flex-column align-items-center', children: [Object(v.jsx)('i', { className: 'fa-solid fa-upload fa-3x mb-2' }), 'Upload an image'] }) }), Object(v.jsx)(T.a.Control, {
                  id: 'image-upload', type: 'file', accept: 'image/*', onChange: (e) => { if (e.target.files.length) { const t = e.target.files[0]; N(URL.createObjectURL(t)), i({ ...r, image: t }); } }, ref: h, className: 'd-none',
                })],
              }), c === null || void 0 === c || (n = c.image) === null || void 0 === n ? void 0 : n.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', children: e }, t))), Object(v.jsx)('div', { className: 'd-md-none', children: w })],
            }),
          }), Object(v.jsx)(z.a, {
            md: 5, lg: 4, className: 'd-none d-md-block p-0 p-md-2', children: Object(v.jsx)(d.a, { className: o.a.Content, children: w }),
          })],
        }),
      });
    }; const De = a(89); const Ee = a.n(De); const ze = a(91); const Te = a(90); const Ge = function () {
      let e; let t; const [a, n] = Object(s.useState)(!1); const [c, l] = Object(s.useState)({ results: [] }); const r = N(); const { id: i } = Object(b.i)(); const j = Object(s.useContext)(Ne); const { pageUser: u, handleFollowToggle: m } = we(); const p = (u === null || void 0 === u || (e = u.results) === null || void 0 === e ? void 0 : e[0]) || null; const h = (r === null || void 0 === r ? void 0 : r.username) === (p === null || void 0 === p ? void 0 : p.username); Object(s.useEffect)((() => { if (!i) return; l({ results: [] }), n(!1); (async () => { try { const [{ data: e }, { data: t }] = await Promise.all([g.get(`users/${i}/`), g.get(`/posts/?author=${i}`)]); j(((t) => ({ ...t, pageUser: { results: [e] } }))), l(t), n(!0); } catch (e) { console.error('Error fetching user data:', e); } })(); }), [i, j, r]); const x = async () => { p && await m(p.id); }; const O = Object(v.jsxs)(v.Fragment, {
        children: [(p === null || void 0 === p ? void 0 : p.is_owner) && Object(v.jsx)(ue, { id: p === null || void 0 === p ? void 0 : p.id }), Object(v.jsxs)(E.a, {
          noGutters: !0,
          className: 'px-3 text-center',
          children: [Object(v.jsx)(z.a, {
            lg: 3,
            className: 'text-lg-left',
            children: Object(v.jsx)(R.a, {
              className: Ee.a.ProfilePicture, roundedCircle: !0, src: p !== null && void 0 !== p && p.profile_picture ? `${p.profile_picture}?${Date.now()}` : 'https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg', onError: (e) => { e.target.src = 'https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg'; },
            }),
          }), Object(v.jsxs)(z.a, { lg: 6, children: [Object(v.jsx)('h3', { className: 'm-2', children: (p === null || void 0 === p ? void 0 : p.username) || 'User' }), Object(v.jsxs)(E.a, { className: 'justify-content-center no-gutters', children: [Object(v.jsxs)(z.a, { xs: 3, className: 'my-2', children: [Object(v.jsx)('div', { children: p === null || void 0 === p ? void 0 : p.followers }), Object(v.jsx)('div', { children: 'followers' })] }), Object(v.jsxs)(z.a, { xs: 3, className: 'my-2', children: [Object(v.jsx)('div', { children: (t = p === null || void 0 === p ? void 0 : p.posts_count) !== null && void 0 !== t ? t : 0 }), Object(v.jsx)('div', { children: 'posts' })] }), Object(v.jsxs)(z.a, { xs: 3, className: 'my-2', children: [Object(v.jsx)('div', { children: h ? r === null || void 0 === r ? void 0 : r.following : p === null || void 0 === p ? void 0 : p.following }), Object(v.jsx)('div', { children: 'following' })] })] })] }), Object(v.jsx)(z.a, { lg: 3, className: 'text-lg-right', children: r && !h && (p !== null && void 0 !== p && p.following_id ? Object(v.jsx)(M.a, { className: `${D.a.Button} ${D.a.BlackOutline}`, onClick: x, children: 'unfollow' }) : Object(v.jsx)(M.a, { className: `${D.a.Button} ${D.a.Black}`, onClick: x, children: 'follow' })) }), (p === null || void 0 === p ? void 0 : p.bio) && Object(v.jsx)(z.a, { className: 'p-3', children: p.bio })],
        })],
      }); const f = Object(v.jsxs)(v.Fragment, {
        children: [Object(v.jsx)('hr', {}), Object(v.jsxs)('p', { className: 'text-center', children: [p === null || void 0 === p ? void 0 : p.username, "'s posts"] }), Object(v.jsx)('hr', {}), c.results.length ? Object(v.jsx)($e.a, {
          dataLength: c.results.length, next: () => Ie(c, l), hasMore: !!c.next, loader: Object(v.jsx)(X, { spinner: !0 }), children: c.results.map(((e) => Object(v.jsx)(me, { ...e, setPosts: l }, e.id))),
        }) : Object(v.jsxs)('div', { className: 'text-center p-3', children: [Object(v.jsx)(ze.a, { icon: Te.a, size: '3x' }), Object(v.jsxs)('p', { children: ['No results found, ', p === null || void 0 === p ? void 0 : p.username, " hasn't posted yet."] })] })],
      }); return Object(v.jsxs)(E.a, { children: [Object(v.jsxs)(z.a, { className: 'py-2 p-0 p-lg-2', lg: 8, children: [Object(v.jsx)(Be, { mobile: !0 }), Object(v.jsx)(d.a, { className: o.a.Content, children: a ? Object(v.jsxs)(v.Fragment, { children: [O, f] }) : Object(v.jsx)(X, { spinner: !0 }) })] }), Object(v.jsx)(z.a, { lg: 4, className: 'd-none d-lg-block p-0 p-lg-2', children: Object(v.jsx)(Be, {}) })] });
    }; function Me() {
      let e; const [t, a] = Object(s.useState)(''); const [n, c] = Object(s.useState)({}); const { showAlert: l } = I(); const r = Object(b.g)(); const { id: i } = Object(b.i)(); const j = N(); const u = w(); Object(s.useEffect)((() => { let e; (j === null || void 0 === j || (e = j.id) === null || void 0 === e ? void 0 : e.toString()) !== i && r.push('/'); }), [j, r, i]); return void 0 === j ? null : Object(v.jsx)(E.a, {
        children: Object(v.jsx)(z.a, {
          className: 'py-2 mx-auto text-center',
          md: 6,
          children: Object(v.jsx)(d.a, {
            className: o.a.Content,
            children: Object(v.jsxs)(T.a, {
              onSubmit: async (e) => { if (e.preventDefault(), t.length > 24)c({ username: ['Name too long. 24 characters maximum.'] }); else try { await g.patch('/dj-rest-auth/user/', { username: t }), u(((e) => ({ ...e, username: t }))), l({ message: 'Username successfully edited!', variant: 'success' }), r.goBack(); } catch (s) { let a; console.log(s), c(((a = s.response) === null || void 0 === a ? void 0 : a.data) || {}); } },
              className: 'my-2',
              children: [Object(v.jsxs)(T.a.Group, {
                children: [Object(v.jsx)(T.a.Label, { children: 'Change username' }), Object(v.jsx)(T.a.Control, {
                  placeholder: 'username', type: 'text', value: t, onChange: (e) => a(e.target.value), maxLength: 24, autoComplete: 'off', spellCheck: !1,
                })],
              }), n === null || void 0 === n || (e = n.username) === null || void 0 === e ? void 0 : e.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', children: e }, t))), Object(v.jsx)(M.a, {
                type: 'button', className: `${D.a.Button} ${D.a.Blue} mr-2`, onClick: () => r.goBack(), children: 'cancel',
              }), Object(v.jsx)(M.a, {
                className: `${D.a.Button} ${D.a.Blue}`, type: 'submit', disabled: !t.trim(), children: 'save',
              })],
            }),
          }),
        }),
      });
    } const Re = () => {
      let e; let t; let a; const n = Object(b.g)(); const { id: c } = Object(b.i)(); const l = N(); const [r, i] = Object(s.useState)({ new_password1: '', new_password2: '' }); const { new_password1: j, new_password2: u } = r; const [m, p] = Object(s.useState)({}); const [h, x] = Object(s.useState)(null); const [O, f] = Object(s.useState)(!1); const _ = (e) => { i({ ...r, [e.target.name]: e.target.value }), p({}), x(null); }; Object(s.useEffect)((() => { let e; (l === null || void 0 === l || (e = l.id) === null || void 0 === e ? void 0 : e.toString()) !== c && n.push('/'); }), [l, c, n]); const w = !j.trim() || !u.trim() || j !== u || O; return Object(v.jsx)(E.a, {
        children: Object(v.jsx)(z.a, {
          className: 'py-2 mx-auto text-center',
          md: 6,
          children: Object(v.jsx)(d.a, {
            className: o.a.Content,
            children: Object(v.jsxs)(T.a, {
              onSubmit: async (e) => { if (e.preventDefault(), j !== u) return p({ new_password2: ['Passwords do not match.'] }), void x(null); f(!0), p({}), x(null); try { await g.post('/dj-rest-auth/password/change/', r), x({ type: 'success', text: 'Password changed successfully!' }), f(!1), setTimeout((() => { n.goBack(); }), 1500); } catch (a) { let t; f(!1), p(((t = a.response) === null || void 0 === t ? void 0 : t.data) || { non_field_errors: ['Something went wrong. Please try again.'] }), x(null); } },
              children: [Object(v.jsxs)(T.a.Group, {
                children: [Object(v.jsx)(T.a.Label, { children: 'New password' }), Object(v.jsx)(T.a.Control, {
                  placeholder: 'new password', type: 'password', value: j, onChange: _, name: 'new_password1', autoComplete: 'new-password', disabled: O,
                })],
              }), m === null || void 0 === m || (e = m.new_password1) === null || void 0 === e ? void 0 : e.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', className: 'mt-1', children: e }, t))), Object(v.jsxs)(T.a.Group, {
                children: [Object(v.jsx)(T.a.Label, { children: 'Confirm password' }), Object(v.jsx)(T.a.Control, {
                  placeholder: 'confirm new password', type: 'password', value: u, onChange: _, name: 'new_password2', autoComplete: 'new-password', disabled: O,
                })],
              }), m === null || void 0 === m || (t = m.new_password2) === null || void 0 === t ? void 0 : t.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', className: 'mt-1', children: e }, t))), m === null || void 0 === m || (a = m.non_field_errors) === null || void 0 === a ? void 0 : a.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', className: 'mt-1', children: e }, t))), h && Object(v.jsx)(G.a, { variant: h.type === 'success' ? 'success' : 'info', className: 'mt-3', children: h.text }), Object(v.jsx)(M.a, {
                type: 'button', className: `${D.a.Button} ${D.a.Blue} mr-2`, onClick: () => n.goBack(), disabled: O, children: 'cancel',
              }), Object(v.jsx)(M.a, {
                type: 'submit', className: `${D.a.Button} ${D.a.Blue}`, disabled: w, children: O ? 'Saving...' : 'save',
              })],
            }),
          }),
        }),
      });
    }; const qe = () => {
      let e; let t; const a = N(); const n = w(); const { id: c } = Object(b.i)(); const { showAlert: l } = I(); const r = Object(b.g)(); const i = Object(s.useRef)(); const [j, u] = Object(s.useState)({ bio: '', profile_picture: '' }); const { bio: m, profile_picture: p } = j; const [h, x] = Object(s.useState)({}); const [O, f] = Object(s.useState)(!1); Object(s.useEffect)((() => () => { p && p.startsWith('blob:') && URL.revokeObjectURL(p); }), [p]), Object(s.useEffect)((() => { (async () => { let e; if ((a === null || void 0 === a || (e = a.id) === null || void 0 === e ? void 0 : e.toString()) === c) try { const { data: e } = await g.get(`/users/${c}/`); const { bio: t, profile_picture: a } = e; u({ bio: t, profile_picture: a || '' }); } catch (t) { console.log(t), r.push('/'); } else r.push('/'); })(); }), [a, r, c]); const _ = Object(v.jsxs)(v.Fragment, {
        children: [Object(v.jsxs)(T.a.Group, {
          children: [Object(v.jsx)(T.a.Label, { children: 'Bio' }), Object(v.jsx)(T.a.Control, {
            as: 'textarea', value: m, onChange: (e) => { u({ ...j, [e.target.name]: e.target.value }); }, name: 'bio', rows: 7, disabled: O,
          }), h === null || void 0 === h || (e = h.bio) === null || void 0 === e ? void 0 : e.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', children: e }, t)))],
        }), Object(v.jsx)(M.a, {
          type: 'button', className: `${D.a.Button} ${D.a.Blue} mr-2`, onClick: () => r.goBack(), disabled: O, children: 'cancel',
        }), Object(v.jsx)(M.a, {
          className: `${D.a.Button} ${D.a.Blue}`, type: 'submit', disabled: O, children: O ? 'Saving...' : 'save',
        })],
      }); return Object(v.jsx)(T.a, {
        onSubmit: async (e) => { let t; e.preventDefault(), f(!0); const a = new FormData(); a.append('bio', m), (t = i.current) !== null && void 0 !== t && t.files[0] && a.append('profile_picture', i.current.files[0]); try { const { data: e } = await g.patch(`/users/${c}/`, a, { headers: { 'Content-Type': 'multipart/form-data' } }); u({ bio: e.bio, profile_picture: e.profile_picture }), n(((t) => ({ ...t, profile_picture: e.profile_picture }))), l({ message: 'User successfully edited!', variant: 'success' }), setTimeout((() => { r.goBack(); }), 100); } catch (d) { let s; let o; console.error('Error:', (s = d.response) === null || void 0 === s ? void 0 : s.data), x(((o = d.response) === null || void 0 === o ? void 0 : o.data) || {}); } finally { f(!1); } },
        children: Object(v.jsxs)(E.a, {
          children: [Object(v.jsx)(z.a, {
            className: 'py-2 p-0 p-md-2 text-center',
            md: 7,
            lg: 6,
            children: Object(v.jsxs)(d.a, {
              className: o.a.Content,
              children: [Object(v.jsxs)(T.a.Group, {
                children: [Object(v.jsx)('figure', { children: Object(v.jsx)(R.a, { src: p || 'https://res.cloudinary.com/dumjqhvzz/image/upload/v1736331882/default_profile_snzudq.jpg', fluid: !0, alt: `${(a === null || void 0 === a ? void 0 : a.username) || 'User'}'s profile` }) }), h === null || void 0 === h || (t = h.profile_picture) === null || void 0 === t ? void 0 : t.map(((e, t) => Object(v.jsx)(G.a, { variant: 'warning', children: e }, t))), Object(v.jsx)('div', { children: Object(v.jsx)(T.a.Label, { className: `${D.a.Button} ${D.a.Blue} btn my-auto`, htmlFor: 'image-upload', children: 'Change the image' }) }), Object(v.jsx)(T.a.Control, {
                  id: 'image-upload', ref: i, type: 'file', accept: 'image/*', onChange: (e) => { e.target.files.length && u({ ...j, profile_picture: URL.createObjectURL(e.target.files[0]) }); }, disabled: O,
                })],
              }), Object(v.jsx)('div', { className: 'd-md-none', children: _ })],
            }),
          }), Object(v.jsx)(z.a, {
            md: 5, lg: 6, className: 'd-none d-md-block p-0 p-md-2 text-center', children: Object(v.jsx)(d.a, { className: o.a.Content, children: _ }),
          })],
        }),
      });
    }; function He(e) { const { component: t, ...a } = e; const s = N(); return Object(v.jsx)(b.b, { ...a, render: (e) => (s ? Object(v.jsx)(t, { ...e }) : Object(v.jsx)(b.a, { to: { pathname: '/signin', state: { from: e.location } } })) }); } function We(e) { const { component: t, ...a } = e; const s = N(); return Object(v.jsx)(b.b, { ...a, render: (e) => (s ? Object(v.jsx)(b.a, { to: '/' }) : Object(v.jsx)(t, { ...e })) }); } function Je() { return Object(v.jsxs)('div', { style: { padding: '2rem', textAlign: 'center' }, children: [Object(v.jsx)('h2', { children: '404 - Page Not Found' }), Object(v.jsx)('p', { children: 'The page you requested does not exist.' })] }); } const Qe = function () { return Object(v.jsx)(y, { children: Object(v.jsx)(ye, { children: Object(v.jsxs)('div', { className: o.a.App, children: [Object(v.jsx)(U, {}), Object(v.jsx)(d.a, { className: o.a.Main, children: Object(v.jsxs)(b.d, { children: [Object(v.jsx)(b.b, { exact: !0, path: '/', render: () => Object(v.jsx)(Le, { message: 'No results found. Adjust the search keyword.' }) }), Object(v.jsx)(b.b, { exact: !0, path: '/feed', render: () => Object(v.jsx)(Le, { message: 'No results found. Adjust the search keyword or follow a user.', filter: 'followed' }) }), Object(v.jsx)(b.b, { exact: !0, path: '/liked', render: () => Object(v.jsx)(Le, { message: 'No results found. Adjust the search keyword or like a post.', filter: 'liked' }) }), Object(v.jsx)(We, { exact: !0, path: '/signin', component: J }), Object(v.jsx)(We, { exact: !0, path: '/signup', component: H }), Object(v.jsx)(He, { exact: !0, path: '/posts/create', component: ee }), Object(v.jsx)(He, { exact: !0, path: '/posts/:id/edit', component: Fe }), Object(v.jsx)(He, { exact: !0, path: '/users/:id/edit/username', component: Me }), Object(v.jsx)(He, { exact: !0, path: '/users/:id/edit/password', component: Re }), Object(v.jsx)(He, { exact: !0, path: '/users/:id/edit', component: qe }), Object(v.jsx)(b.b, { exact: !0, path: '/posts/:id', component: Pe }), Object(v.jsx)(b.b, { exact: !0, path: '/users/:id', component: Ge }), Object(v.jsx)(b.b, { component: Je })] }) })] }) }) }); }; const Ke = (e) => {
      e && e instanceof Function && a.e(3).then(a.bind(null, 136)).then(((t) => {
        const {
          getCLS: a, getFID: s, getFCP: n, getLCP: c, getTTFB: l,
        } = t; a(e), s(e), n(e), c(e), l(e);
      }));
    }; const Ve = () => {
      const { alerts: e, removeAlert: t } = I(); return Object(v.jsx)('div', {
        style: {
          position: 'fixed', top: 70, right: 20, zIndex: 1050, minWidth: 300,
        },
        children: e.map(((e) => {
          const { id: a, message: s, variant: n } = e; return Object(v.jsx)(G.a, {
            variant: n, onClose: () => t(a), dismissible: !0, children: s,
          }, a);
        })),
      });
    }; l.a.render(Object(v.jsx)(n.a.StrictMode, { children: Object(v.jsx)(h.a, { children: Object(v.jsx)(y, { children: Object(v.jsx)(ye, { children: Object(v.jsxs)(P, { children: [Object(v.jsx)(Ve, {}), Object(v.jsx)(Qe, {})] }) }) }) }) }), document.getElementById('root')), Ke();
  },
  22(e, t, a) {
    e.exports = {
      Row: 'SignInUpForm_Row__35dpM', Input: 'SignInUpForm_Input__1lB2E', Header: 'SignInUpForm_Header__GI0pL', Link: 'SignInUpForm_Link__1yRUf', Container: 'SignInUpForm_Container__3m1ED', SignInCol: 'SignInUpForm_SignInCol__1SydU', SignUpCol: 'SignInUpForm_SignUpCol__2SJnI',
    };
  },
  23(e, t, a) { e.exports = { NavBar: 'NavBar_NavBar__2YT7V', NavLink: 'NavBar_NavLink__3rnyW', Active: 'NavBar_Active__1MQRy' }; },
  27(e, t, a) {
    e.exports = {
      DropdownMenu: 'MoreDropdown_DropdownMenu__2yU44', DropdownItem: 'MoreDropdown_DropdownItem__nx1p5', DropdownToggle: 'MoreDropdown_DropdownToggle__25VvA', Absolute: 'MoreDropdown_Absolute__3EQ-g',
    };
  },
  41(e, t, a) { e.exports = { Form: 'CommentCreateEditForm_Form__3oB5H', Button: 'CommentCreateEditForm_Button__rLi4-' }; },
  51(e, t, a) { e.exports = { Post: 'Post_Post__1L3Qu', Heart: 'Post_Heart__2s88C', HeartOutline: 'Post_HeartOutline__Brq-Z' }; },
  58(e, t, a) { e.exports = { Container: 'PostCreateEditForm_Container__1kRIO' }; },
  71(e, t, a) { e.exports = { Author: 'Comment_Author__2oH9B', Date: 'Comment_Date__2NTU3' }; },
  72(e, t, a) { e.exports = { SearchBar: 'PostsPage_SearchBar__N06WU', SearchIcon: 'PostsPage_SearchIcon__2uPqj' }; },
  84(e, t, a) { e.exports = { Avatar: 'Avatar_Avatar__28z96' }; },
  86(e, t, a) { e.exports = { Asset: 'Asset_Asset__2-QcN' }; },
  88(e, t, a) { e.exports = { WordBreak: 'User_WordBreak__4ri_F' }; },
  89(e, t, a) { e.exports = { ProfilePicture: 'UserPage_ProfilePicture__DqOAi' }; },
  9(e, t, a) {
    e.exports = {
      Button: 'Button_Button__1Hx1S', Wide: 'Button_Wide__hPrmt', Blue: 'Button_Blue__2PttK', BlueOutline: 'Button_BlueOutline__3ZnJG', Bright: 'Button_Bright__FGIXu', Black: 'Button_Black__-SJKz', BlackOutline: 'Button_BlackOutline__v9BnJ', uploadButton: 'Button_uploadButton__35bzt',
    };
  },
  96(e, t, a) {},
}, [[126, 1, 2]]]);
// # sourceMappingURL=main.84f99315.chunk.js.map

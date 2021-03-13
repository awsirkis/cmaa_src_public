import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a6ab7c9c = () => interopDefault(import('..\\pages\\admin-resources\\index.vue' /* webpackChunkName: "pages/admin-resources/index" */))
const _cf388936 = () => interopDefault(import('..\\pages\\calendar.vue' /* webpackChunkName: "pages/calendar" */))
const _63010419 = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _b317f30a = () => interopDefault(import('..\\pages\\gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _f59bd8fa = () => interopDefault(import('..\\pages\\instructors\\index.vue' /* webpackChunkName: "pages/instructors/index" */))
const _4619fef0 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _684f7dac = () => interopDefault(import('..\\pages\\programs\\index.vue' /* webpackChunkName: "pages/programs/index" */))
const _76974d34 = () => interopDefault(import('..\\pages\\resources\\index.vue' /* webpackChunkName: "pages/resources/index" */))
const _c6830976 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _524e4b8e = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _dcc7b28e = () => interopDefault(import('..\\pages\\admin-resources\\attendance.vue' /* webpackChunkName: "pages/admin-resources/attendance" */))
const _5143ce1c = () => interopDefault(import('..\\pages\\admin-resources\\blog.vue' /* webpackChunkName: "pages/admin-resources/blog" */))
const _e55a81a8 = () => interopDefault(import('..\\pages\\admin-resources\\print-certificates.vue' /* webpackChunkName: "pages/admin-resources/print-certificates" */))
const _41a57241 = () => interopDefault(import('..\\pages\\admin-resources\\store.vue' /* webpackChunkName: "pages/admin-resources/store" */))
const _5441f79a = () => interopDefault(import('..\\pages\\admin-resources\\students\\index.vue' /* webpackChunkName: "pages/admin-resources/students/index" */))
const _63c4bea2 = () => interopDefault(import('..\\pages\\admin-resources\\update-calendar.vue' /* webpackChunkName: "pages/admin-resources/update-calendar" */))
const _5f528ba8 = () => interopDefault(import('..\\pages\\admin-resources\\videos.vue' /* webpackChunkName: "pages/admin-resources/videos" */))
const _4c5f441d = () => interopDefault(import('..\\pages\\contact\\faq.vue' /* webpackChunkName: "pages/contact/faq" */))
const _1adf9d66 = () => interopDefault(import('..\\pages\\contact\\pricing.vue' /* webpackChunkName: "pages/contact/pricing" */))
const _d7960ad4 = () => interopDefault(import('..\\pages\\contact\\resources\\index.vue' /* webpackChunkName: "pages/contact/resources/index" */))
const _62ef042c = () => interopDefault(import('..\\pages\\contact\\right-martial-art.vue' /* webpackChunkName: "pages/contact/right-martial-art" */))
const _9673a83e = () => interopDefault(import('..\\pages\\contact\\signup.vue' /* webpackChunkName: "pages/contact/signup" */))
const _01989bda = () => interopDefault(import('..\\pages\\error\\400.vue' /* webpackChunkName: "pages/error/400" */))
const _017c6cd8 = () => interopDefault(import('..\\pages\\error\\401.vue' /* webpackChunkName: "pages/error/401" */))
const _01440ed4 = () => interopDefault(import('..\\pages\\error\\403.vue' /* webpackChunkName: "pages/error/403" */))
const _0127dfd2 = () => interopDefault(import('..\\pages\\error\\404.vue' /* webpackChunkName: "pages/error/404" */))
const _010bb0d0 = () => interopDefault(import('..\\pages\\error\\405.vue' /* webpackChunkName: "pages/error/405" */))
const _0120e8b6 = () => interopDefault(import('..\\pages\\error\\414.vue' /* webpackChunkName: "pages/error/414" */))
const _013d17b8 = () => interopDefault(import('..\\pages\\error\\416.vue' /* webpackChunkName: "pages/error/416" */))
const _3419ed54 = () => interopDefault(import('..\\pages\\error\\500.vue' /* webpackChunkName: "pages/error/500" */))
const _342804d5 = () => interopDefault(import('..\\pages\\error\\501.vue' /* webpackChunkName: "pages/error/501" */))
const _34361c56 = () => interopDefault(import('..\\pages\\error\\502.vue' /* webpackChunkName: "pages/error/502" */))
const _344433d7 = () => interopDefault(import('..\\pages\\error\\503.vue' /* webpackChunkName: "pages/error/503" */))
const _34524b58 = () => interopDefault(import('..\\pages\\error\\504.vue' /* webpackChunkName: "pages/error/504" */))
const _800c1324 = () => interopDefault(import('..\\pages\\instructors\\adam.vue' /* webpackChunkName: "pages/instructors/adam" */))
const _7d4f72a0 = () => interopDefault(import('..\\pages\\instructors\\kris.vue' /* webpackChunkName: "pages/instructors/kris" */))
const _222f6955 = () => interopDefault(import('..\\pages\\instructors\\max.vue' /* webpackChunkName: "pages/instructors/max" */))
const _4b9c819a = () => interopDefault(import('..\\pages\\instructors\\sensei.vue' /* webpackChunkName: "pages/instructors/sensei" */))
const _0fc1a207 = () => interopDefault(import('..\\pages\\profile\\login.vue' /* webpackChunkName: "pages/profile/login" */))
const _4663c294 = () => interopDefault(import('..\\pages\\programs\\adult.vue' /* webpackChunkName: "pages/programs/adult" */))
const _c98eceb6 = () => interopDefault(import('..\\pages\\programs\\combatives.vue' /* webpackChunkName: "pages/programs/combatives" */))
const _29a8489a = () => interopDefault(import('..\\pages\\programs\\enforcement.vue' /* webpackChunkName: "pages/programs/enforcement" */))
const _1eb9071e = () => interopDefault(import('..\\pages\\programs\\taichi.vue' /* webpackChunkName: "pages/programs/taichi" */))
const _710c3250 = () => interopDefault(import('..\\pages\\programs\\women.vue' /* webpackChunkName: "pages/programs/women" */))
const _9f0e79a6 = () => interopDefault(import('..\\pages\\programs\\youth.vue' /* webpackChunkName: "pages/programs/youth" */))
const _0844d15e = () => interopDefault(import('..\\pages\\resources\\archive\\index.vue' /* webpackChunkName: "pages/resources/archive/index" */))
const _81560d88 = () => interopDefault(import('..\\pages\\resources\\drills\\index.vue' /* webpackChunkName: "pages/resources/drills/index" */))
const _09027658 = () => interopDefault(import('..\\pages\\resources\\instructors.vue' /* webpackChunkName: "pages/resources/instructors" */))
const _af0647de = () => interopDefault(import('..\\pages\\resources\\kata\\index.vue' /* webpackChunkName: "pages/resources/kata/index" */))
const _549361a4 = () => interopDefault(import('..\\pages\\resources\\requirements\\index.vue' /* webpackChunkName: "pages/resources/requirements/index" */))
const _d70bc746 = () => interopDefault(import('..\\pages\\shop\\camps\\index.vue' /* webpackChunkName: "pages/shop/camps/index" */))
const _1fb53d7d = () => interopDefault(import('..\\pages\\shop\\cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _266f7696 = () => interopDefault(import('..\\pages\\shop\\gear\\index.vue' /* webpackChunkName: "pages/shop/gear/index" */))
const _7df609e3 = () => interopDefault(import('..\\pages\\shop\\manual.vue' /* webpackChunkName: "pages/shop/manual" */))
const _26007f66 = () => interopDefault(import('..\\pages\\shop\\uniforms\\index.vue' /* webpackChunkName: "pages/shop/uniforms/index" */))
const _63a43638 = () => interopDefault(import('..\\pages\\shop\\weapons\\index.vue' /* webpackChunkName: "pages/shop/weapons/index" */))
const _5bb14664 = () => interopDefault(import('..\\pages\\admin-resources\\students\\create.vue' /* webpackChunkName: "pages/admin-resources/students/create" */))
const _40654469 = () => interopDefault(import('..\\pages\\contact\\resources\\covid.vue' /* webpackChunkName: "pages/contact/resources/covid" */))
const _5e4844bd = () => interopDefault(import('..\\pages\\contact\\resources\\covid-pt-2.vue' /* webpackChunkName: "pages/contact/resources/covid-pt-2" */))
const _261bc48b = () => interopDefault(import('..\\pages\\contact\\resources\\does-it-work.vue' /* webpackChunkName: "pages/contact/resources/does-it-work" */))
const _49190c58 = () => interopDefault(import('..\\pages\\contact\\resources\\ettiquette.vue' /* webpackChunkName: "pages/contact/resources/ettiquette" */))
const _5ebcaa58 = () => interopDefault(import('..\\pages\\contact\\resources\\history.vue' /* webpackChunkName: "pages/contact/resources/history" */))
const _5007c417 = () => interopDefault(import('..\\pages\\contact\\resources\\ismskf.vue' /* webpackChunkName: "pages/contact/resources/ismskf" */))
const _6a37065c = () => interopDefault(import('..\\pages\\contact\\resources\\re-re-opening.vue' /* webpackChunkName: "pages/contact/resources/re-re-opening" */))
const _6388a209 = () => interopDefault(import('..\\pages\\contact\\resources\\reopening.vue' /* webpackChunkName: "pages/contact/resources/reopening" */))
const _2975a0e7 = () => interopDefault(import('..\\pages\\contact\\resources\\right-martial-art.vue' /* webpackChunkName: "pages/contact/resources/right-martial-art" */))
const _450bf13e = () => interopDefault(import('..\\pages\\contact\\resources\\uniform-maintenance.vue' /* webpackChunkName: "pages/contact/resources/uniform-maintenance" */))
const _32508464 = () => interopDefault(import('..\\pages\\contact\\resources\\weapon-maintenance.vue' /* webpackChunkName: "pages/contact/resources/weapon-maintenance" */))
const _6dc978f6 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\index.vue' /* webpackChunkName: "pages/resources/drills/aiki/index" */))
const _351cfb0c = () => interopDefault(import('..\\pages\\resources\\drills\\capoeira\\index.vue' /* webpackChunkName: "pages/resources/drills/capoeira/index" */))
const _6db4048a = () => interopDefault(import('..\\pages\\resources\\drills\\jiujitsu\\index.vue' /* webpackChunkName: "pages/resources/drills/jiujitsu/index" */))
const _550b4934 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\index.vue' /* webpackChunkName: "pages/resources/drills/judo/index" */))
const _601f4dee = () => interopDefault(import('..\\pages\\resources\\drills\\kali\\index.vue' /* webpackChunkName: "pages/resources/drills/kali/index" */))
const _1cf67812 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/index" */))
const _9713fc62 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\index.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/index" */))
const _23aff83f = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\index.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/index" */))
const _cd079028 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\index.vue' /* webpackChunkName: "pages/resources/drills/sambo/index" */))
const _0e99dd10 = () => interopDefault(import('..\\pages\\resources\\drills\\shilleleigh\\index.vue' /* webpackChunkName: "pages/resources/drills/shilleleigh/index" */))
const _832216a2 = () => interopDefault(import('..\\pages\\resources\\drills\\silat\\index.vue' /* webpackChunkName: "pages/resources/drills/silat/index" */))
const _7e0e6747 = () => interopDefault(import('..\\pages\\resources\\requirements\\1-dan.vue' /* webpackChunkName: "pages/resources/requirements/1-dan" */))
const _19b0f97d = () => interopDefault(import('..\\pages\\resources\\requirements\\1-kyu.vue' /* webpackChunkName: "pages/resources/requirements/1-kyu" */))
const _1252d648 = () => interopDefault(import('..\\pages\\resources\\requirements\\2-dan.vue' /* webpackChunkName: "pages/resources/requirements/2-dan" */))
const _a4152f04 = () => interopDefault(import('..\\pages\\resources\\requirements\\2-kyu.vue' /* webpackChunkName: "pages/resources/requirements/2-kyu" */))
const _b2d1756e = () => interopDefault(import('..\\pages\\resources\\requirements\\3-dan.vue' /* webpackChunkName: "pages/resources/requirements/3-dan" */))
const _4239d77f = () => interopDefault(import('..\\pages\\resources\\requirements\\3-kyu.vue' /* webpackChunkName: "pages/resources/requirements/3-kyu" */))
const _3adbb44a = () => interopDefault(import('..\\pages\\resources\\requirements\\4-dan.vue' /* webpackChunkName: "pages/resources/requirements/4-dan" */))
const _53037300 = () => interopDefault(import('..\\pages\\resources\\requirements\\4-kyu.vue' /* webpackChunkName: "pages/resources/requirements/4-kyu" */))
const _61bfb96a = () => interopDefault(import('..\\pages\\resources\\requirements\\5-dan.vue' /* webpackChunkName: "pages/resources/requirements/5-dan" */))
const _6ac2b581 = () => interopDefault(import('..\\pages\\resources\\requirements\\5-kyu.vue' /* webpackChunkName: "pages/resources/requirements/5-kyu" */))
const _6364924c = () => interopDefault(import('..\\pages\\resources\\requirements\\6-dan.vue' /* webpackChunkName: "pages/resources/requirements/6-dan" */))
const _01f1b6fc = () => interopDefault(import('..\\pages\\resources\\requirements\\6-kyu.vue' /* webpackChunkName: "pages/resources/requirements/6-kyu" */))
const _10adfd66 = () => interopDefault(import('..\\pages\\resources\\requirements\\7-dan.vue' /* webpackChunkName: "pages/resources/requirements/7-dan" */))
const _d968d8fa = () => interopDefault(import('..\\pages\\resources\\requirements\\7-kyu.vue' /* webpackChunkName: "pages/resources/requirements/7-kyu" */))
const _27900284 = () => interopDefault(import('..\\pages\\resources\\requirements\\8-kyu.vue' /* webpackChunkName: "pages/resources/requirements/8-kyu" */))
const _88571cf6 = () => interopDefault(import('..\\pages\\resources\\requirements\\9-kyu.vue' /* webpackChunkName: "pages/resources/requirements/9-kyu" */))
const _752d7f34 = () => interopDefault(import('..\\pages\\resources\\requirements\\karate-instructor.vue' /* webpackChunkName: "pages/resources/requirements/karate-instructor" */))
const _93d15acc = () => interopDefault(import('..\\pages\\resources\\requirements\\kobudo-instructor.vue' /* webpackChunkName: "pages/resources/requirements/kobudo-instructor" */))
const _eace7b74 = () => interopDefault(import('..\\pages\\resources\\requirements\\law-instructor.vue' /* webpackChunkName: "pages/resources/requirements/law-instructor" */))
const _752f39e2 = () => interopDefault(import('..\\pages\\resources\\requirements\\tuite-instructor.vue' /* webpackChunkName: "pages/resources/requirements/tuite-instructor" */))
const _739a0626 = () => interopDefault(import('..\\pages\\shop\\gear\\gloves.vue' /* webpackChunkName: "pages/shop/gear/gloves" */))
const _445a06cc = () => interopDefault(import('..\\pages\\shop\\gear\\head.vue' /* webpackChunkName: "pages/shop/gear/head" */))
const _2221a2de = () => interopDefault(import('..\\pages\\shop\\gear\\legs.vue' /* webpackChunkName: "pages/shop/gear/legs" */))
const _3506ddac = () => interopDefault(import('..\\pages\\shop\\gear\\mouthguard.vue' /* webpackChunkName: "pages/shop/gear/mouthguard" */))
const _60cba8b8 = () => interopDefault(import('..\\pages\\shop\\uniforms\\clothing.vue' /* webpackChunkName: "pages/shop/uniforms/clothing" */))
const _3370ba04 = () => interopDefault(import('..\\pages\\shop\\uniforms\\gi.vue' /* webpackChunkName: "pages/shop/uniforms/gi" */))
const _82240152 = () => interopDefault(import('..\\pages\\shop\\weapons\\bo.vue' /* webpackChunkName: "pages/shop/weapons/bo" */))
const _8b0dea16 = () => interopDefault(import('..\\pages\\shop\\weapons\\eku.vue' /* webpackChunkName: "pages/shop/weapons/eku" */))
const _300f7518 = () => interopDefault(import('..\\pages\\shop\\weapons\\kama.vue' /* webpackChunkName: "pages/shop/weapons/kama" */))
const _6764d008 = () => interopDefault(import('..\\pages\\shop\\weapons\\knives.vue' /* webpackChunkName: "pages/shop/weapons/knives" */))
const _1302b72e = () => interopDefault(import('..\\pages\\shop\\weapons\\nunchaku.vue' /* webpackChunkName: "pages/shop/weapons/nunchaku" */))
const _e5528f7e = () => interopDefault(import('..\\pages\\shop\\weapons\\sai.vue' /* webpackChunkName: "pages/shop/weapons/sai" */))
const _f0f2b1d8 = () => interopDefault(import('..\\pages\\shop\\weapons\\tanbo.vue' /* webpackChunkName: "pages/shop/weapons/tanbo" */))
const _d0977338 = () => interopDefault(import('..\\pages\\shop\\weapons\\tekko.vue' /* webpackChunkName: "pages/shop/weapons/tekko" */))
const _8908e7ee = () => interopDefault(import('..\\pages\\shop\\weapons\\tinberochin.vue' /* webpackChunkName: "pages/shop/weapons/tinberochin" */))
const _3be534b4 = () => interopDefault(import('..\\pages\\shop\\weapons\\tonfa.vue' /* webpackChunkName: "pages/shop/weapons/tonfa" */))
const _0fe2d096 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\index.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/index" */))
const _300a1731 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\index.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/index" */))
const _2ee8452d = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\index.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/index" */))
const _fcc961d8 = () => interopDefault(import('..\\pages\\resources\\drills\\capoeira\\drills\\index.vue' /* webpackChunkName: "pages/resources/drills/capoeira/drills/index" */))
const _0bcab084 = () => interopDefault(import('..\\pages\\resources\\drills\\capoeira\\evasions\\index.vue' /* webpackChunkName: "pages/resources/drills/capoeira/evasions/index" */))
const _44a5c38a = () => interopDefault(import('..\\pages\\resources\\drills\\capoeira\\floreios\\index.vue' /* webpackChunkName: "pages/resources/drills/capoeira/floreios/index" */))
const _4bd9defb = () => interopDefault(import('..\\pages\\resources\\drills\\capoeira\\kicks\\index.vue' /* webpackChunkName: "pages/resources/drills/capoeira/kicks/index" */))
const _26f51a32 = () => interopDefault(import('..\\pages\\resources\\drills\\capoeira\\strikes\\index.vue' /* webpackChunkName: "pages/resources/drills/capoeira/strikes/index" */))
const _6b1035c2 = () => interopDefault(import('..\\pages\\resources\\drills\\capoeira\\throws\\index.vue' /* webpackChunkName: "pages/resources/drills/capoeira/throws/index" */))
const _9dc68562 = () => interopDefault(import('..\\pages\\resources\\drills\\jiujitsu\\brazilian\\index.vue' /* webpackChunkName: "pages/resources/drills/jiujitsu/brazilian/index" */))
const _562568aa = () => interopDefault(import('..\\pages\\resources\\drills\\jiujitsu\\japanese\\index.vue' /* webpackChunkName: "pages/resources/drills/jiujitsu/japanese/index" */))
const _5c0699d2 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\chokes\\index.vue' /* webpackChunkName: "pages/resources/drills/judo/chokes/index" */))
const _7fcd15b8 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\index.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/index" */))
const _6fc58717 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hand\\index.vue' /* webpackChunkName: "pages/resources/drills/judo/hand/index" */))
const _68660f02 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hip\\index.vue' /* webpackChunkName: "pages/resources/drills/judo/hip/index" */))
const _5effdb4c = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\holds\\index.vue' /* webpackChunkName: "pages/resources/drills/judo/holds/index" */))
const _28debe74 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\locks\\index.vue' /* webpackChunkName: "pages/resources/drills/judo/locks/index" */))
const _6e42ea7c = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\rear\\index.vue' /* webpackChunkName: "pages/resources/drills/judo/rear/index" */))
const _11b4c92f = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\side\\index.vue' /* webpackChunkName: "pages/resources/drills/judo/side/index" */))
const _de09a400 = () => interopDefault(import('..\\pages\\resources\\drills\\kali\\double-knife\\index.vue' /* webpackChunkName: "pages/resources/drills/kali/double-knife/index" */))
const _1b4f6735 = () => interopDefault(import('..\\pages\\resources\\drills\\kali\\double-stick\\index.vue' /* webpackChunkName: "pages/resources/drills/kali/double-stick/index" */))
const _79ab3e2c = () => interopDefault(import('..\\pages\\resources\\drills\\kali\\footwork\\index.vue' /* webpackChunkName: "pages/resources/drills/kali/footwork/index" */))
const _237c40a4 = () => interopDefault(import('..\\pages\\resources\\drills\\kali\\karambit\\index.vue' /* webpackChunkName: "pages/resources/drills/kali/karambit/index" */))
const _5949e4ce = () => interopDefault(import('..\\pages\\resources\\drills\\kali\\open-hand\\index.vue' /* webpackChunkName: "pages/resources/drills/kali/open-hand/index" */))
const _1e897b2e = () => interopDefault(import('..\\pages\\resources\\drills\\kali\\single-knife\\index.vue' /* webpackChunkName: "pages/resources/drills/kali/single-knife/index" */))
const _7b0f7b9e = () => interopDefault(import('..\\pages\\resources\\drills\\kali\\single-stick\\index.vue' /* webpackChunkName: "pages/resources/drills/kali/single-stick/index" */))
const _5c650e83 = () => interopDefault(import('..\\pages\\resources\\drills\\kali\\stick-knife\\index.vue' /* webpackChunkName: "pages/resources/drills/kali/stick-knife/index" */))
const _722d8e9f = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\armed-manipulation.vue' /* webpackChunkName: "pages/resources/drills/mcmap/armed-manipulation" */))
const _7773efb0 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\bayonet.vue' /* webpackChunkName: "pages/resources/drills/mcmap/bayonet" */))
const _cbbd623a = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/index" */))
const _6e8f7568 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/index" */))
const _1d6e7fe0 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\choke-counters.vue' /* webpackChunkName: "pages/resources/drills/mcmap/choke-counters" */))
const _3451b042 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\chokes.vue' /* webpackChunkName: "pages/resources/drills/mcmap/chokes" */))
const _72b42a3d = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\firearms.vue' /* webpackChunkName: "pages/resources/drills/mcmap/firearms" */))
const _ce9d7542 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/index" */))
const _6f7a7b5a = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/index" */))
const _bda06012 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\ground.vue' /* webpackChunkName: "pages/resources/drills/mcmap/ground" */))
const _4ea79865 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\knife.vue' /* webpackChunkName: "pages/resources/drills/mcmap/knife" */))
const _2e66cac1 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\lower.vue' /* webpackChunkName: "pages/resources/drills/mcmap/lower" */))
const _e40f20da = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\opportunity.vue' /* webpackChunkName: "pages/resources/drills/mcmap/opportunity" */))
const _6f5a02f2 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\strike-counters.vue' /* webpackChunkName: "pages/resources/drills/mcmap/strike-counters" */))
const _5c2447fe = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/index" */))
const _48ab59bd = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\throws.vue' /* webpackChunkName: "pages/resources/drills/mcmap/throws" */))
const _d14b8310 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\unarmed-manipulation.vue' /* webpackChunkName: "pages/resources/drills/mcmap/unarmed-manipulation" */))
const _5a643fe2 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\upper.vue' /* webpackChunkName: "pages/resources/drills/mcmap/upper" */))
const _278bd482 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\buok.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/buok" */))
const _6eea92fd = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\cross-block.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/cross-block" */))
const _addf4cf2 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\djab-ko.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/djab-ko" */))
const _23a0720e = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\double-elbow.block.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/double-elbow.block" */))
const _20d8e280 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\elbow-block.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/elbow-block" */))
const _afee69e0 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\inside-leg-block.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/inside-leg-block" */))
const _fbe65296 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\khao-chiang.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/khao-chiang" */))
const _e3d90888 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\khao-khong.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/khao-khong" */))
const _448b8bd7 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\khao-loi.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/khao-loi" */))
const _5716e090 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\khao-tat.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/khao-tat" */))
const _5971b90a = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\khao-trong.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/khao-trong" */))
const _46a57b10 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\khao-yao.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/khao-yao" */))
const _7517679c = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\kradot-chok.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/kradot-chok" */))
const _5114c436 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\kradot-thip.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/kradot-thip" */))
const _4cf1c587 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\mat-nueng.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/mat-nueng" */))
const _a1e6f0bc = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\mat-soi-dao.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/mat-soi-dao" */))
const _c031ad0c = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\mat-trong.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/mat-trong" */))
const _21f61ed6 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\mat-wiang-klap.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/mat-wiang-klap" */))
const _52e9d7aa = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\mat-wiang-san.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/mat-wiang-san" */))
const _13fe8f32 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\mat-wiang-yao.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/mat-wiang-yao" */))
const _3a474d26 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\push-block.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/push-block" */))
const _74eaec98 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\sawk-klap.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/sawk-klap" */))
const _b770ae18 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\sawk-ngat.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/sawk-ngat" */))
const _77e03aca = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\sawk-sap.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/sawk-sap" */))
const _a60257e2 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\sawk-tat.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/sawk-tat" */))
const _2e24c20b = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\sok-chieng.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/sok-chieng" */))
const _9b0da014 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\sok-hud.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/sok-hud" */))
const _2bd1263b = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\sok-ku.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/sok-ku" */))
const _3a83a9c6 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\sok-ti.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/sok-ti" */))
const _51e88305 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\sok-tong.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/sok-tong" */))
const _019c300f = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\te-chiang.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/te-chiang" */))
const _4a20ed38 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\te-khao.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/te-khao" */))
const _7823b002 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\te-klap-lang.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/te-klap-lang" */))
const _036d0807 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\te-kot.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/te-kot" */))
const _70bd76c4 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\te-tat.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/te-tat" */))
const _a3cb923e = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\te-trong.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/te-trong" */))
const _67eed2b6 = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\thip-top.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/thip-top" */))
const _d2f5d06a = () => interopDefault(import('..\\pages\\resources\\drills\\muay-thai\\thip-trong.vue' /* webpackChunkName: "pages/resources/drills/muay-thai/thip-trong" */))
const _7044fecc = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\basics\\index.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/basics/index" */))
const _490a7363 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\ippon-kumite\\index.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/ippon-kumite/index" */))
const _0bf56293 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\koteatei\\index.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/koteatei/index" */))
const _52863948 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\tuite\\index.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/tuite/index" */))
const _ba0ceac0 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\index.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/index" */))
const _0711efba = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\index.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/index" */))
const _cc2fe35c = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\index.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/index" */))
const _25bc41ff = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\index.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/index" */))
const _50dbf546 = () => interopDefault(import('..\\pages\\resources\\drills\\shilleleigh\\broadsword\\index.vue' /* webpackChunkName: "pages/resources/drills/shilleleigh/broadsword/index" */))
const _8c945152 = () => interopDefault(import('..\\pages\\resources\\drills\\shilleleigh\\shortsword\\index.vue' /* webpackChunkName: "pages/resources/drills/shilleleigh/shortsword/index" */))
const _8deb4588 = () => interopDefault(import('..\\pages\\resources\\drills\\shilleleigh\\staff\\index.vue' /* webpackChunkName: "pages/resources/drills/shilleleigh/staff/index" */))
const _22e7d18c = () => interopDefault(import('..\\pages\\resources\\drills\\shilleleigh\\stick\\index.vue' /* webpackChunkName: "pages/resources/drills/shilleleigh/stick/index" */))
const _15cd06ea = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\ananku.vue' /* webpackChunkName: "pages/resources/kata/karate/ananku" */))
const _9bbb8768 = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\chinto.vue' /* webpackChunkName: "pages/resources/kata/karate/chinto" */))
const _4dd02f54 = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\fukyukata-ichi.vue' /* webpackChunkName: "pages/resources/kata/karate/fukyukata-ichi" */))
const _3aec25b4 = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\fukyukata-ni.vue' /* webpackChunkName: "pages/resources/kata/karate/fukyukata-ni" */))
const _20d61fb7 = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\fukyukata-san.vue' /* webpackChunkName: "pages/resources/kata/karate/fukyukata-san" */))
const _7e289cb1 = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\gojushiho.vue' /* webpackChunkName: "pages/resources/kata/karate/gojushiho" */))
const _613646a5 = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\jion.vue' /* webpackChunkName: "pages/resources/kata/karate/jion" */))
const _365c8aae = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\kusanku.vue' /* webpackChunkName: "pages/resources/kata/karate/kusanku" */))
const _212f4b37 = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\naihanchi-nidan.vue' /* webpackChunkName: "pages/resources/kata/karate/naihanchi-nidan" */))
const _7a8b1180 = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\naihanchi-sandan.vue' /* webpackChunkName: "pages/resources/kata/karate/naihanchi-sandan" */))
const _387aad26 = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\naihanchi-shodan.vue' /* webpackChunkName: "pages/resources/kata/karate/naihanchi-shodan" */))
const _54d82c04 = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\nijushiho.vue' /* webpackChunkName: "pages/resources/kata/karate/nijushiho" */))
const _6df806bf = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\passai-dai.vue' /* webpackChunkName: "pages/resources/kata/karate/passai-dai" */))
const _d8880e26 = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\passai-sho.vue' /* webpackChunkName: "pages/resources/kata/karate/passai-sho" */))
const _c15f0ff0 = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\pin-an-godan.vue' /* webpackChunkName: "pages/resources/kata/karate/pin-an-godan" */))
const _3de873d5 = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\pin-an-nidan.vue' /* webpackChunkName: "pages/resources/kata/karate/pin-an-nidan" */))
const _3d266262 = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\pin-an-sandan.vue' /* webpackChunkName: "pages/resources/kata/karate/pin-an-sandan" */))
const _9a32cf70 = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\pin-an-shodan.vue' /* webpackChunkName: "pages/resources/kata/karate/pin-an-shodan" */))
const _129d1b2a = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\pin-an-yondan.vue' /* webpackChunkName: "pages/resources/kata/karate/pin-an-yondan" */))
const _589f692e = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\rohai-sho.vue' /* webpackChunkName: "pages/resources/kata/karate/rohai-sho" */))
const _21f0fe30 = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\seisan.vue' /* webpackChunkName: "pages/resources/kata/karate/seisan" */))
const _3526cbe2 = () => interopDefault(import('..\\pages\\resources\\kata\\karate\\wansu.vue' /* webpackChunkName: "pages/resources/kata/karate/wansu" */))
const _41ca856c = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\bo-jitsu.vue' /* webpackChunkName: "pages/resources/kata/kobudo/bo-jitsu" */))
const _7aa234ee = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\bo-nidan.vue' /* webpackChunkName: "pages/resources/kata/kobudo/bo-nidan" */))
const _512e272e = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\bo-sandan.vue' /* webpackChunkName: "pages/resources/kata/kobudo/bo-sandan" */))
const _722345d8 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\bo-shodan.vue' /* webpackChunkName: "pages/resources/kata/kobudo/bo-shodan" */))
const _26a4dff6 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\bo-yondan.vue' /* webpackChunkName: "pages/resources/kata/kobudo/bo-yondan" */))
const _452ba12a = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\bokken-shodan.vue' /* webpackChunkName: "pages/resources/kata/kobudo/bokken-shodan" */))
const _2968f6b0 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\chatan-yara-no-sai.vue' /* webpackChunkName: "pages/resources/kata/kobudo/chatan-yara-no-sai" */))
const _4281f587 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\chiken-bo.vue' /* webpackChunkName: "pages/resources/kata/kobudo/chiken-bo" */))
const _32ba6fe0 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\eku-kihon-ichi.vue' /* webpackChunkName: "pages/resources/kata/kobudo/eku-kihon-ichi" */))
const _b8748520 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\eku-kihon-ni.vue' /* webpackChunkName: "pages/resources/kata/kobudo/eku-kihon-ni" */))
const _232aa392 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\eshigu-e-nunti.vue' /* webpackChunkName: "pages/resources/kata/kobudo/eshigu-e-nunti" */))
const _d2736b34 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\fukyu-no-kon.vue' /* webpackChunkName: "pages/resources/kata/kobudo/fukyu-no-kon" */))
const _6b6db724 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\hamahiga-no-kama.vue' /* webpackChunkName: "pages/resources/kata/kobudo/hamahiga-no-kama" */))
const _028cc4c0 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\hamahiga-no-kon.vue' /* webpackChunkName: "pages/resources/kata/kobudo/hamahiga-no-kon" */))
const _dcd75ede = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\hamahiga-no-sai.vue' /* webpackChunkName: "pages/resources/kata/kobudo/hamahiga-no-sai" */))
const _271df904 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\hamahiga-no-tonfa.vue' /* webpackChunkName: "pages/resources/kata/kobudo/hamahiga-no-tonfa" */))
const _22f103a6 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\kama-nidan.vue' /* webpackChunkName: "pages/resources/kata/kobudo/kama-nidan" */))
const _6ef00297 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\kama-shodan.vue' /* webpackChunkName: "pages/resources/kata/kobudo/kama-shodan" */))
const _1d42a50a = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\kanegawa-no-nichogama.vue' /* webpackChunkName: "pages/resources/kata/kobudo/kanegawa-no-nichogama" */))
const _7adf6430 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\kanegawa-no-timbe.vue' /* webpackChunkName: "pages/resources/kata/kobudo/kanegawa-no-timbe" */))
const _226af541 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\kise-no-nitanbo.vue' /* webpackChunkName: "pages/resources/kata/kobudo/kise-no-nitanbo" */))
const _f51dba90 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\odo-no-kama-ni.vue' /* webpackChunkName: "pages/resources/kata/kobudo/odo-no-kama-ni" */))
const _32f0c70d = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\odo-no-kama-sho.vue' /* webpackChunkName: "pages/resources/kata/kobudo/odo-no-kama-sho" */))
const _722f1bc2 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\sai-jitsu.vue' /* webpackChunkName: "pages/resources/kata/kobudo/sai-jitsu" */))
const _55c34401 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\sai-nidan.vue' /* webpackChunkName: "pages/resources/kata/kobudo/sai-nidan" */))
const _20a597b6 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\sai-sandan.vue' /* webpackChunkName: "pages/resources/kata/kobudo/sai-sandan" */))
const _d33464c8 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\sai-shodan.vue' /* webpackChunkName: "pages/resources/kata/kobudo/sai-shodan" */))
const _919bedea = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\sakugawa-no-kon-dai.vue' /* webpackChunkName: "pages/resources/kata/kobudo/sakugawa-no-kon-dai" */))
const _4614098e = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\sakugawa-no-kon-sho.vue' /* webpackChunkName: "pages/resources/kata/kobudo/sakugawa-no-kon-sho" */))
const _52aef5da = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\soken-no-nunchaku.vue' /* webpackChunkName: "pages/resources/kata/kobudo/soken-no-nunchaku" */))
const _c96c5dfc = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\syushi-no-kon-dai.vue' /* webpackChunkName: "pages/resources/kata/kobudo/syushi-no-kon-dai" */))
const _7de479a0 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\syushi-no-kon-sho.vue' /* webpackChunkName: "pages/resources/kata/kobudo/syushi-no-kon-sho" */))
const _35a86a05 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\tekko-kata.vue' /* webpackChunkName: "pages/resources/kata/kobudo/tekko-kata" */))
const _3fafb6d8 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\terukawa-no-tonfa.vue' /* webpackChunkName: "pages/resources/kata/kobudo/terukawa-no-tonfa" */))
const _6b8bb1a0 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\tokumine-no-kon.vue' /* webpackChunkName: "pages/resources/kata/kobudo/tokumine-no-kon" */))
const _89501298 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\tokushin-eku.vue' /* webpackChunkName: "pages/resources/kata/kobudo/tokushin-eku" */))
const _013ac1af = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\tokushin-no-nunti-bo.vue' /* webpackChunkName: "pages/resources/kata/kobudo/tokushin-no-nunti-bo" */))
const _f9141718 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\tonfa-nidan.vue' /* webpackChunkName: "pages/resources/kata/kobudo/tonfa-nidan" */))
const _ad6e14ba = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\tonfa-sandan.vue' /* webpackChunkName: "pages/resources/kata/kobudo/tonfa-sandan" */))
const _1f092b89 = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\tonfa-shodan.vue' /* webpackChunkName: "pages/resources/kata/kobudo/tonfa-shodan" */))
const _8111636c = () => interopDefault(import('..\\pages\\resources\\kata\\kobudo\\tsuken-sunakake-no-kon.vue' /* webpackChunkName: "pages/resources/kata/kobudo/tsuken-sunakake-no-kon" */))
const _23259630 = () => interopDefault(import('..\\pages\\resources\\kata\\tanren\\ananku-tanren.vue' /* webpackChunkName: "pages/resources/kata/tanren/ananku-tanren" */))
const _449dfc40 = () => interopDefault(import('..\\pages\\resources\\kata\\tanren\\gekisaidai-ichi.vue' /* webpackChunkName: "pages/resources/kata/tanren/gekisaidai-ichi" */))
const _3e603da0 = () => interopDefault(import('..\\pages\\resources\\kata\\tanren\\gekisaidai-ni.vue' /* webpackChunkName: "pages/resources/kata/tanren/gekisaidai-ni" */))
const _016e615e = () => interopDefault(import('..\\pages\\resources\\kata\\tanren\\pin-an-nidan-tanren.vue' /* webpackChunkName: "pages/resources/kata/tanren/pin-an-nidan-tanren" */))
const _eb4c375a = () => interopDefault(import('..\\pages\\resources\\kata\\tanren\\pin-an-shodan-tanren.vue' /* webpackChunkName: "pages/resources/kata/tanren/pin-an-shodan-tanren" */))
const _5d747fa3 = () => interopDefault(import('..\\pages\\resources\\kata\\tanren\\seisan-tanren.vue' /* webpackChunkName: "pages/resources/kata/tanren/seisan-tanren" */))
const _0a0408ac = () => interopDefault(import('..\\pages\\resources\\kata\\tanren\\wansu-tanren.vue' /* webpackChunkName: "pages/resources/kata/tanren/wansu-tanren" */))
const _ed0fe3fa = () => interopDefault(import('..\\pages\\resources\\archive\\2020\\11\\25.vue' /* webpackChunkName: "pages/resources/archive/2020/11/25" */))
const _ea331dc6 = () => interopDefault(import('..\\pages\\resources\\archive\\2020\\11\\30.vue' /* webpackChunkName: "pages/resources/archive/2020/11/30" */))
const _3271bb80 = () => interopDefault(import('..\\pages\\resources\\archive\\2020\\12\\1.vue' /* webpackChunkName: "pages/resources/archive/2020/12/1" */))
const _1bc12ee0 = () => interopDefault(import('..\\pages\\resources\\archive\\2020\\12\\10.vue' /* webpackChunkName: "pages/resources/archive/2020/12/10" */))
const _1bf98ce4 = () => interopDefault(import('..\\pages\\resources\\archive\\2020\\12\\14.vue' /* webpackChunkName: "pages/resources/archive/2020/12/14" */))
const _1c07a465 = () => interopDefault(import('..\\pages\\resources\\archive\\2020\\12\\15.vue' /* webpackChunkName: "pages/resources/archive/2020/12/15" */))
const _1c15bbe6 = () => interopDefault(import('..\\pages\\resources\\archive\\2020\\12\\16.vue' /* webpackChunkName: "pages/resources/archive/2020/12/16" */))
const _327fd301 = () => interopDefault(import('..\\pages\\resources\\archive\\2020\\12\\2.vue' /* webpackChunkName: "pages/resources/archive/2020/12/2" */))
const _328dea82 = () => interopDefault(import('..\\pages\\resources\\archive\\2020\\12\\3.vue' /* webpackChunkName: "pages/resources/archive/2020/12/3" */))
const _32d46007 = () => interopDefault(import('..\\pages\\resources\\archive\\2020\\12\\8.vue' /* webpackChunkName: "pages/resources/archive/2020/12/8" */))
const _32e27788 = () => interopDefault(import('..\\pages\\resources\\archive\\2020\\12\\9.vue' /* webpackChunkName: "pages/resources/archive/2020/12/9" */))
const _ff8c4ab4 = () => interopDefault(import('..\\pages\\resources\\archive\\2021\\01\\04.vue' /* webpackChunkName: "pages/resources/archive/2021/01/04" */))
const _ff701bb2 = () => interopDefault(import('..\\pages\\resources\\archive\\2021\\01\\05.vue' /* webpackChunkName: "pages/resources/archive/2021/01/05" */))
const _ff53ecb0 = () => interopDefault(import('..\\pages\\resources\\archive\\2021\\01\\06.vue' /* webpackChunkName: "pages/resources/archive/2021/01/06" */))
const _ff37bdae = () => interopDefault(import('..\\pages\\resources\\archive\\2021\\01\\07.vue' /* webpackChunkName: "pages/resources/archive/2021/01/07" */))
const _fc77267c = () => interopDefault(import('..\\pages\\resources\\archive\\2021\\01\\11.vue' /* webpackChunkName: "pages/resources/archive/2021/01/11" */))
const _f8808a34 = () => interopDefault(import('..\\pages\\resources\\archive\\2021\\01\\26.vue' /* webpackChunkName: "pages/resources/archive/2021/01/26" */))
const _f8645b32 = () => interopDefault(import('..\\pages\\resources\\archive\\2021\\01\\27.vue' /* webpackChunkName: "pages/resources/archive/2021/01/27" */))
const _f8482c30 = () => interopDefault(import('..\\pages\\resources\\archive\\2021\\01\\28.vue' /* webpackChunkName: "pages/resources/archive/2021/01/28" */))
const _421c7778 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\aiki-no-jutsu\\index.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/aiki-no-jutsu/index" */))
const _66f0bd66 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\daki-jime.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/daki-jime" */))
const _2c088332 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\daki-jime-dori.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/daki-jime-dori" */))
const _03fc935a = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\emono-dori.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/emono-dori" */))
const _bc2218c2 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\ganseki-otoshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/ganseki-otoshi" */))
const _ca51e274 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\gasso-dori.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/gasso-dori" */))
const _156af99a = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\gokajo\\index.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/gokajo/index" */))
const _96ef7ec6 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\gyaku-dasuki.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/gyaku-dasuki" */))
const _8155e276 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\gyaku-gasso.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/gyaku-gasso" */))
const _8bec168e = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\gyaku-gote.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/gyaku-gote" */))
const _81be79ce = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\gyaku-ude-dori.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/gyaku-ude-dori" */))
const _365e9c99 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\hanmi-nage.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/hanmi-nage" */))
const _4ca5318c = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\hiji-gaeshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/hiji-gaeshi" */))
const _3bb1f178 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\hiji-kujiki.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/hiji-kujiki" */))
const _7a5bf47c = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\hiki-otoshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/hiki-otoshi" */))
const _498852c0 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\hiza-jime.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/hiza-jime" */))
const _1056c7b9 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\ikkajo\\index.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/ikkajo/index" */))
const _11089204 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\ippon-dore-omote.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/ippon-dore-omote" */))
const _0d62515a = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\ippon-dori.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/ippon-dori" */))
const _4ad54f2c = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\ippon-dori-ura.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/ippon-dori-ura" */))
const _59812da0 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\irimi-zume.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/irimi-zume" */))
const _49b11659 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\izori.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/izori" */))
const _49e3bd9e = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\kakae-kubi.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/kakae-kubi" */))
const _00fac9fe = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\karami-nage.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/karami-nage" */))
const _398e5813 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\kata-guruma.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/kata-guruma" */))
const _c3e41450 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\kata-otoshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/kata-otoshi" */))
const _3a8ecaf7 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\kataha-dori.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/kataha-dori" */))
const _162ab2c9 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\katame-zume.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/katame-zume" */))
const _ef22ff2c = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\katate-dori-aiki-nage.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/katate-dori-aiki-nage" */))
const _5b57da05 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\kiri-gaeshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/kiri-gaeshi" */))
const _58fdcaba = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\kiriha.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/kiriha" */))
const _54cdc99c = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\konoha-gaeshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/konoha-gaeshi" */))
const _7f45b28e = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\koshi-guruma.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/koshi-guruma" */))
const _64ca0b45 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\kote-gaeshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/kote-gaeshi" */))
const _2195f34f = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\kote-zume.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/kote-zume" */))
const _735d9b0f = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\kubi-hineri.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/kubi-hineri" */))
const _e209d758 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\kubi-juji-shime-aiki-nage.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/kubi-juji-shime-aiki-nage" */))
const _c3ed919e = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\kubi-nage.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/kubi-nage" */))
const _308e3bb2 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\kubiwa.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/kubiwa" */))
const _2b57ed72 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\kuruma-daoshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/kuruma-daoshi" */))
const _c157f72e = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\makikomi-kuchiki.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/makikomi-kuchiki" */))
const _b5959d1e = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\makizume.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/makizume" */))
const _e04af802 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\mikajo\\index.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/mikajo/index" */))
const _3ef73c00 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\nikajo\\index.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/nikajo/index" */))
const _4aba4cd5 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\nikajo-ura-gyaku-dasuki.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/nikajo-ura-gyaku-dasuki" */))
const _d7763fc6 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\nukite-dori.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/nukite-dori" */))
const _26018d26 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\obi-otoshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/obi-otoshi" */))
const _3b419c75 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\ryo-hiji-gaeshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/ryo-hiji-gaeshi" */))
const _91714c10 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\ryo-kata-hineri.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/ryo-kata-hineri" */))
const _53d2fa22 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\seikujiki.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/seikujiki" */))
const _1e182885 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\sekujiki.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/sekujiki" */))
const _26a42916 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\seoi-nage.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/seoi-nage" */))
const _1b44620f = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\shiho-nage.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/shiho-nage" */))
const _6be96e68 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\shihou-nage.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/shihou-nage" */))
const _ff7108d4 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\shime-gaeshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/shime-gaeshi" */))
const _4eee7297 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\shoto-zume.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/shoto-zume" */))
const _7d1852d1 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\shuto-zume.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/shuto-zume" */))
const _378136ce = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\simoku.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/simoku" */))
const _1d336e6d = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\sukui-nage.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/sukui-nage" */))
const _fda259d0 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\suso-barai.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/suso-barai" */))
const _d059cb16 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\suso-dori.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/suso-dori" */))
const _0755859b = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\tate-eridori.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/tate-eridori" */))
const _87bf6202 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\tatsumaki.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/tatsumaki" */))
const _e6193512 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\tsuki-taoshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/tsuki-taoshi" */))
const _e4758d6c = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\tsukitaoshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/tsukitaoshi" */))
const _05a40b9b = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\uchi-gote.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/uchi-gote" */))
const _3a559f82 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\ura-otoshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/ura-otoshi" */))
const _4d7231d6 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\ushiro-ryote-dori-aiki-nage.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/ushiro-ryote-dori-aiki-nage" */))
const _57200c4b = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\waki-dori.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/waki-dori" */))
const _bd87c176 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\daito-ryu\\yokajo\\index.vue' /* webpackChunkName: "pages/resources/drills/aiki/daito-ryu/yokajo/index" */))
const _85db8d2c = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\buttou.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/buttou" */))
const _3346370a = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\byoubugaeshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/byoubugaeshi" */))
const _9e4d255e = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\chisai-choutan.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/chisai-choutan" */))
const _0b3f1c53 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\enpi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/enpi" */))
const _2f3af921 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\fumikaeshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/fumikaeshi" */))
const _747e4d13 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\furimi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/furimi" */))
const _12e8db96 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\futarimusubi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/futarimusubi" */))
const _02cf59ec = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\fuuyou.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/fuuyou" */))
const _3c7ec0a6 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\gansekiotoshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/gansekiotoshi" */))
const _217d0bbf = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\gyakuho.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/gyakuho" */))
const _325af728 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\hanaremi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/hanaremi" */))
const _33b3202a = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\hanegaeshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/hanegaeshi" */))
const _02990c00 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\hanegaeshi-bo.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/hanegaeshi-bo" */))
const _6b0b0ff4 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\hanegarami.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/hanegarami" */))
const _a98ddfaa = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\hassokutou.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/hassokutou" */))
const _27e4a15b = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\hien.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/hien" */))
const _d316944c = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\hikiotoshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/hikiotoshi" */))
const _194a2a8e = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\hikiukeotoshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/hikiukeotoshi" */))
const _0d0d2727 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\hisshi-sandan-chuu.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/hisshi-sandan-chuu" */))
const _1a1c237e = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\hogaeshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/hogaeshi" */))
const _c659041c = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\hougai.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/hougai" */))
const _56bae99b = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\ikada.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/ikada" */))
const _2fbecbe7 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\ikiaidaore.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/ikiaidaore" */))
const _8288e7be = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\junpo.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/junpo" */))
const _7490ae64 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\junrei.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/junrei" */))
const _56118864 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\kakahashi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/kakahashi" */))
const _3f780a1e = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\kiteki.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/kiteki" */))
const _b619826e = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\kohou.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/kohou" */))
const _c4a9dbcc = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\koran.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/koran" */))
const _6fae995c = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\koshihikitsurai.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/koshihikitsurai" */))
const _1256dbbb = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\kurumagaeshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/kurumagaeshi" */))
const _168af052 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\kusaridama-kenyou.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/kusaridama-kenyou" */))
const _1e86bcd4 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\kutsugaeshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/kutsugaeshi" */))
const _1b59c530 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\makubishin.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/makubishin" */))
const _07f27fe4 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\marumi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/marumi" */))
const _17c59c22 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\matsukaze.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/matsukaze" */))
const _9dba72b2 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\mizukihi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/mizukihi" */))
const _53e82b96 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\munegarami.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/munegarami" */))
const _5c005cdc = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\musubiito.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/musubiito" */))
const _6a7200ee = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\namigaeshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/namigaeshi" */))
const _6e32e42d = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\namimakura.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/namimakura" */))
const _6e813a22 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\neho.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/neho" */))
const _179c2210 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\nukiguchi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/nukiguchi" */))
const _4cb101a4 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\omokage.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/omokage" */))
const _d70916e8 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\omomi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/omomi" */))
const _78796ddf = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\ooikakeho.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/ooikakeho" */))
const _530faf1e = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\rouryuu.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/rouryuu" */))
const _bacde56e = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\ryoukidachi-tanbou.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/ryoukidachi-tanbou" */))
const _4eab5542 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\ryuubi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/ryuubi" */))
const _d9f8ce6e = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\sangetsu.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/sangetsu" */))
const _1a82219e = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\sankaku-kore-naka.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/sankaku-kore-naka" */))
const _659098a6 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\sasen.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/sasen" */))
const _39244e26 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\sashiai.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/sashiai" */))
const _2e7cda6a = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\sashiai-ni.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/sashiai-ni" */))
const _43852c31 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\soumubousou.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/soumubousou" */))
const _65daf28c = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\suikyou.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/suikyou" */))
const _4f3b0f40 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\sutemi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/sutemi" */))
const _ca4a7ff2 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\tachigari.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/tachigari" */))
const _8e7c1574 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\takiotoshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/takiotoshi" */))
const _ae60d22a = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\teki-no-kore-kasa.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/teki-no-kore-kasa" */))
const _e1c60bce = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\tokogaeshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/tokogaeshi" */))
const _989b9058 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\towaki.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/towaki" */))
const _0f44cb72 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\tsuki-nin-shiho.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/tsuki-nin-shiho" */))
const _6bf609fe = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\tsumateho.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/tsumateho" */))
const _e32f3a10 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\ukifune.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/ukifune" */))
const _945163dc = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\uranami.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/uranami" */))
const _7f523938 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\usen.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/usen" */))
const _f7ab64e0 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\ushi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/ushi" */))
const _1c57185a = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\yorimi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/yorimi" */))
const _71644512 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\yumemakura.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/yumemakura" */))
const _fe35ad3e = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\yumiteho.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/yumiteho" */))
const _151f3b40 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mubyoshi-ryu\\yuuhikigaeshi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mubyoshi-ryu/yuuhikigaeshi" */))
const _709dd742 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\ainuki.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/ainuki" */))
const _d0a897ba = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\bichuuken.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/bichuuken" */))
const _bfd9e552 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\chuuseiken.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/chuuseiken" */))
const _487b64e5 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\enkai.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/enkai" */))
const _6db58252 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\enpi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/enpi" */))
const _346a7842 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\hien.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/hien" */))
const _b911c046 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\hiryuu.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/hiryuu" */))
const _03dab7fd = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\kaerimi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/kaerimi" */))
const _18da583e = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\kakegiri.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/kakegiri" */))
const _e4889cbc = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\kasumigiri.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/kasumigiri" */))
const _a434204c = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\kenshouken.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/kenshouken" */))
const _089cc946 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\kotezume.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/kotezume" */))
const _e77ceb02 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\kumotsuke.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/kumotsuke" */))
const _90d52dd8 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\manshouken.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/manshouken" */))
const _13b0e11f = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\migikiri-hidarikiri.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/migikiri-hidarikiri" */))
const _bcd2aea4 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\ouzume.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/ouzume" */))
const _1319a428 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\raikou.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/raikou" */))
const _4760301a = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\saishouken.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/saishouken" */))
const _69825c44 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\sanpougiri.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/sanpougiri" */))
const _1a0f1050 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\sanseiken.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/sanseiken" */))
const _5ea84bb4 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\seikiken.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/seikiken" */))
const _764a793a = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\shichiyouken.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/shichiyouken" */))
const _23893fba = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\shinmyouken.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/shinmyouken" */))
const _3d5a62f3 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\surinuki.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/surinuki" */))
const _57b30f92 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\tappi.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/tappi" */))
const _1eefed16 = () => interopDefault(import('..\\pages\\resources\\drills\\aiki\\mukaku-ryu\\unryuu.vue' /* webpackChunkName: "pages/resources/drills/aiki/mukaku-ryu/unryuu" */))
const _fd84946a = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\chokes\\gyaku-juji-jime.vue' /* webpackChunkName: "pages/resources/drills/judo/chokes/gyaku-juji-jime" */))
const _20478abd = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\chokes\\hadaka-jime.vue' /* webpackChunkName: "pages/resources/drills/judo/chokes/hadaka-jime" */))
const _602e8aa8 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\chokes\\kata-ha-jime.vue' /* webpackChunkName: "pages/resources/drills/judo/chokes/kata-ha-jime" */))
const _87c3ee8a = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\chokes\\kata-juji-jime.vue' /* webpackChunkName: "pages/resources/drills/judo/chokes/kata-juji-jime" */))
const _c8723f98 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\chokes\\kata-te-jime.vue' /* webpackChunkName: "pages/resources/drills/judo/chokes/kata-te-jime" */))
const _a49c1ff2 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\chokes\\nami-juji-jime.vue' /* webpackChunkName: "pages/resources/drills/judo/chokes/nami-juji-jime" */))
const _14fa1e10 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\chokes\\okuri-eri-jime.vue' /* webpackChunkName: "pages/resources/drills/judo/chokes/okuri-eri-jime" */))
const _e73f549a = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\chokes\\ryo-te-jime.vue' /* webpackChunkName: "pages/resources/drills/judo/chokes/ryo-te-jime" */))
const _46e3b6ef = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\chokes\\sankaku-jime.vue' /* webpackChunkName: "pages/resources/drills/judo/chokes/sankaku-jime" */))
const _4e76bd3a = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\chokes\\sode-guruma-jime.vue' /* webpackChunkName: "pages/resources/drills/judo/chokes/sode-guruma-jime" */))
const _dc099858 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\chokes\\tsukkomi-jime.vue' /* webpackChunkName: "pages/resources/drills/judo/chokes/tsukkomi-jime" */))
const _14f39f45 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\ashi-guruma.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/ashi-guruma" */))
const _729eec9c = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\deashi-harai.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/deashi-harai" */))
const _0781abcd = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\hane-goshi-gaeshi.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/hane-goshi-gaeshi" */))
const _fc74fe00 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\harai-goshi-gaeshi.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/harai-goshi-gaeshi" */))
const _eed0bd6e = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\harai-tsurikomi-ashi.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/harai-tsurikomi-ashi" */))
const _3ef2f0f0 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\hiza-guruma.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/hiza-guruma" */))
const _1c78c96c = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\kosoto-gake.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/kosoto-gake" */))
const _28a313c9 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\kosoto-gari.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/kosoto-gari" */))
const _16374ede = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\kouchi-gari.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/kouchi-gari" */))
const _0834e72d = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\o-guruma.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/o-guruma" */))
const _be49fc46 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\okuriashi-harai.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/okuriashi-harai" */))
const _25fc027a = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\osoto-gaeshi.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/osoto-gaeshi" */))
const _22e3d742 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\osoto-gari.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/osoto-gari" */))
const _73a7eb76 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\osoto-guruma.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/osoto-guruma" */))
const _4fb0ed8a = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\osoto-otoshi.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/osoto-otoshi" */))
const _3201957c = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\ouchi-gaeshi.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/ouchi-gaeshi" */))
const _21b5c7ec = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\ouchi-gari.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/ouchi-gari" */))
const _44a72601 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\sasae-tsurikomi-ashi.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/sasae-tsurikomi-ashi" */))
const _15e53973 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\tsubame-gaeshi.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/tsubame-gaeshi" */))
const _fb7fb7cc = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\foot\\uchimata.vue' /* webpackChunkName: "pages/resources/drills/judo/foot/uchimata" */))
const _248b1412 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hand\\ippon-seoi-nage.vue' /* webpackChunkName: "pages/resources/drills/judo/hand/ippon-seoi-nage" */))
const _03d72c58 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hand\\kata-guruma.vue' /* webpackChunkName: "pages/resources/drills/judo/hand/kata-guruma" */))
const _1eb1ba14 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hand\\kibisu-gaeshi.vue' /* webpackChunkName: "pages/resources/drills/judo/hand/kibisu-gaeshi" */))
const _6d67e472 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hand\\kuchiki-taoshi.vue' /* webpackChunkName: "pages/resources/drills/judo/hand/kuchiki-taoshi" */))
const _8aefb69a = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hand\\morote-gari.vue' /* webpackChunkName: "pages/resources/drills/judo/hand/morote-gari" */))
const _cf0128e8 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hand\\obi-otoshi.vue' /* webpackChunkName: "pages/resources/drills/judo/hand/obi-otoshi" */))
const _46752472 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hand\\obi-tori-gaeshi.vue' /* webpackChunkName: "pages/resources/drills/judo/hand/obi-tori-gaeshi" */))
const _5d5491d2 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hand\\seoi-nage.vue' /* webpackChunkName: "pages/resources/drills/judo/hand/seoi-nage" */))
const _4de48a90 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hand\\seoi-otoshi.vue' /* webpackChunkName: "pages/resources/drills/judo/hand/seoi-otoshi" */))
const _6e98bee8 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hand\\sukui-nage.vue' /* webpackChunkName: "pages/resources/drills/judo/hand/sukui-nage" */))
const _e289d104 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hand\\sumi-otoshi.vue' /* webpackChunkName: "pages/resources/drills/judo/hand/sumi-otoshi" */))
const _13515526 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hand\\tai-otoshi.vue' /* webpackChunkName: "pages/resources/drills/judo/hand/tai-otoshi" */))
const _b5daecec = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hand\\uchimata-sukashi.vue' /* webpackChunkName: "pages/resources/drills/judo/hand/uchimata-sukashi" */))
const _464d5fcf = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hand\\uki-otoshi.vue' /* webpackChunkName: "pages/resources/drills/judo/hand/uki-otoshi" */))
const _d7bdb08c = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hand\\yama-arashi.vue' /* webpackChunkName: "pages/resources/drills/judo/hand/yama-arashi" */))
const _48719952 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hip\\hane-goshi.vue' /* webpackChunkName: "pages/resources/drills/judo/hip/hane-goshi" */))
const _18b8d126 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hip\\harai-goshi.vue' /* webpackChunkName: "pages/resources/drills/judo/hip/harai-goshi" */))
const _41e38285 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hip\\koshi-guruma.vue' /* webpackChunkName: "pages/resources/drills/judo/hip/koshi-guruma" */))
const _af39c74a = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hip\\o-goshi.vue' /* webpackChunkName: "pages/resources/drills/judo/hip/o-goshi" */))
const _b429a202 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hip\\sode-tsurikomi-goshi.vue' /* webpackChunkName: "pages/resources/drills/judo/hip/sode-tsurikomi-goshi" */))
const _59d9ce79 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hip\\tsuri-goshi.vue' /* webpackChunkName: "pages/resources/drills/judo/hip/tsuri-goshi" */))
const _bee7010e = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hip\\tsurikomi-goshi.vue' /* webpackChunkName: "pages/resources/drills/judo/hip/tsurikomi-goshi" */))
const _1613223f = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hip\\uki-goshi.vue' /* webpackChunkName: "pages/resources/drills/judo/hip/uki-goshi" */))
const _3d4ae9be = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hip\\ushiro-goshi.vue' /* webpackChunkName: "pages/resources/drills/judo/hip/ushiro-goshi" */))
const _0713c94c = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\hip\\utsuri-goshi.vue' /* webpackChunkName: "pages/resources/drills/judo/hip/utsuri-goshi" */))
const _10949ef4 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\holds\\kami-shiho-gatame.vue' /* webpackChunkName: "pages/resources/drills/judo/holds/kami-shiho-gatame" */))
const _5e61a171 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\holds\\kata-gatame.vue' /* webpackChunkName: "pages/resources/drills/judo/holds/kata-gatame" */))
const _161c56e8 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\holds\\kese-gatame.vue' /* webpackChunkName: "pages/resources/drills/judo/holds/kese-gatame" */))
const _32b8301f = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\holds\\kuzure-kami-shiho-gatame.vue' /* webpackChunkName: "pages/resources/drills/judo/holds/kuzure-kami-shiho-gatame" */))
const _8c3a375a = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\holds\\kuzure-kese-gatame.vue' /* webpackChunkName: "pages/resources/drills/judo/holds/kuzure-kese-gatame" */))
const _0f566448 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\holds\\tate-shiho-gatame.vue' /* webpackChunkName: "pages/resources/drills/judo/holds/tate-shiho-gatame" */))
const _bc27997e = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\holds\\uki-gatame.vue' /* webpackChunkName: "pages/resources/drills/judo/holds/uki-gatame" */))
const _072e9b4a = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\holds\\ushiro-kesa-gatame.vue' /* webpackChunkName: "pages/resources/drills/judo/holds/ushiro-kesa-gatame" */))
const _6be24e6c = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\holds\\yoko-shiho-gatame.vue' /* webpackChunkName: "pages/resources/drills/judo/holds/yoko-shiho-gatame" */))
const _f52becd0 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\locks\\ude-garami.vue' /* webpackChunkName: "pages/resources/drills/judo/locks/ude-garami" */))
const _466f55be = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\locks\\ude-hishigi-ashi-gatame.vue' /* webpackChunkName: "pages/resources/drills/judo/locks/ude-hishigi-ashi-gatame" */))
const _252fb32e = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\locks\\ude-hishigi-hara-gatame.vue' /* webpackChunkName: "pages/resources/drills/judo/locks/ude-hishigi-hara-gatame" */))
const _706ea769 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\locks\\ude-hishigi-hiza-gatame.vue' /* webpackChunkName: "pages/resources/drills/judo/locks/ude-hishigi-hiza-gatame" */))
const _0fe7b247 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\locks\\ude-hishigi-juji-gatame.vue' /* webpackChunkName: "pages/resources/drills/judo/locks/ude-hishigi-juji-gatame" */))
const _0d2f9292 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\locks\\ude-hishigi-sankaku-gatame.vue' /* webpackChunkName: "pages/resources/drills/judo/locks/ude-hishigi-sankaku-gatame" */))
const _14e4ff00 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\locks\\ude-hishigi-te-gatame.vue' /* webpackChunkName: "pages/resources/drills/judo/locks/ude-hishigi-te-gatame" */))
const _b2b3d83e = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\locks\\ude-hishigi-ude-gatame.vue' /* webpackChunkName: "pages/resources/drills/judo/locks/ude-hishigi-ude-gatame" */))
const _2d8944ae = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\locks\\ude-hishigi-waki-gatame.vue' /* webpackChunkName: "pages/resources/drills/judo/locks/ude-hishigi-waki-gatame" */))
const _65bc3067 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\rear\\hikikomi-gaeshi.vue' /* webpackChunkName: "pages/resources/drills/judo/rear/hikikomi-gaeshi" */))
const _4763e828 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\rear\\sumi-gaeshi.vue' /* webpackChunkName: "pages/resources/drills/judo/rear/sumi-gaeshi" */))
const _7a13cd08 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\rear\\tamoe-nage.vue' /* webpackChunkName: "pages/resources/drills/judo/rear/tamoe-nage" */))
const _c6cbc182 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\rear\\tani-otoshi.vue' /* webpackChunkName: "pages/resources/drills/judo/rear/tani-otoshi" */))
const _92358b80 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\rear\\tawara-gaeshi.vue' /* webpackChunkName: "pages/resources/drills/judo/rear/tawara-gaeshi" */))
const _02866440 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\rear\\uchi-makikomi.vue' /* webpackChunkName: "pages/resources/drills/judo/rear/uchi-makikomi" */))
const _33955f80 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\rear\\uchi-mata-makikomi.vue' /* webpackChunkName: "pages/resources/drills/judo/rear/uchi-mata-makikomi" */))
const _260802da = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\rear\\ura-nage.vue' /* webpackChunkName: "pages/resources/drills/judo/rear/ura-nage" */))
const _b328333c = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\side\\daki-wakare.vue' /* webpackChunkName: "pages/resources/drills/judo/side/daki-wakare" */))
const _7d81a48c = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\side\\hane-makikomi.vue' /* webpackChunkName: "pages/resources/drills/judo/side/hane-makikomi" */))
const _7f92b9a6 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\side\\harai-makikome.vue' /* webpackChunkName: "pages/resources/drills/judo/side/harai-makikome" */))
const _4092d929 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\side\\kouchi-makikomi.vue' /* webpackChunkName: "pages/resources/drills/judo/side/kouchi-makikomi" */))
const _1e23cf0c = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\side\\osoto-makikomi.vue' /* webpackChunkName: "pages/resources/drills/judo/side/osoto-makikomi" */))
const _3896ae85 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\side\\soto-makikomi.vue' /* webpackChunkName: "pages/resources/drills/judo/side/soto-makikomi" */))
const _ce08fec4 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\side\\uki-waza.vue' /* webpackChunkName: "pages/resources/drills/judo/side/uki-waza" */))
const _00f9ce04 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\side\\yoko-gake.vue' /* webpackChunkName: "pages/resources/drills/judo/side/yoko-gake" */))
const _62473e56 = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\side\\yoko-guruma.vue' /* webpackChunkName: "pages/resources/drills/judo/side/yoko-guruma" */))
const _335bfe9a = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\side\\yoko-otoshi.vue' /* webpackChunkName: "pages/resources/drills/judo/side/yoko-otoshi" */))
const _e492f6ba = () => interopDefault(import('..\\pages\\resources\\drills\\judo\\side\\yoko-wakare.vue' /* webpackChunkName: "pages/resources/drills/judo/side/yoko-wakare" */))
const _292a4cd8 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\chokes\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/chokes/index" */))
const _80bd3308 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\ground\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/ground/index" */))
const _8513a0e0 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\guns\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/guns/index" */))
const _20bb6d60 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\neck-crank.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/neck-crank" */))
const _19ce4e5e = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\opportunity\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/opportunity/index" */))
const _037641d0 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\sweeping-hip-throw.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/sweeping-hip-throw" */))
const _5830de6f = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\upper\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/upper/index" */))
const _6d7ac360 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\bayonet\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/bayonet/index" */))
const _ea183836 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\ground\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/ground/index" */))
const _12eaf339 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\guns\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/guns/index" */))
const _e94fa3fa = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\knife\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/knife/index" */))
const _9532f4ce = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\outside-reap-throw.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/outside-reap-throw" */))
const _081a24c4 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\unarmed-manipulation\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/unarmed-manipulation/index" */))
const _530120f8 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\ground\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/ground/index" */))
const _36f58290 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\knife\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/knife/index" */))
const _2419fb7c = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\lower-strikes.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/lower-strikes" */))
const _29203378 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\offline-buttstroke.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/offline-buttstroke" */))
const _02cbc162 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\opportunity\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/opportunity/index" */))
const _32b89988 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\shoulder-throw.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/shoulder-throw" */))
const _0545ed5e = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\side-choke.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/side-choke" */))
const _df2f58ba = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\strike-counters\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/strike-counters/index" */))
const _29018497 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\unarmed-manipulation\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/unarmed-manipulation/index" */))
const _165d84c4 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\armed-manipulation\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/armed-manipulation/index" */))
const _5922038e = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\bayonet\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/bayonet/index" */))
const _185e0ab3 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\choke-counters\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/choke-counters/index" */))
const _2a22eabe = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\front-choke.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/front-choke" */))
const _4edf2c28 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\ground\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/ground/index" */))
const _5a808929 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\hip-throw.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/hip-throw" */))
const _b2c169c8 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\knife\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/knife/index" */))
const _9ca00d80 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\lower\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/lower/index" */))
const _1be7f0ee = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\opportunity\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/opportunity/index" */))
const _5989dd2f = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\strike-counters\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/strike-counters/index" */))
const _b957daea = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\unarmed-manipulation\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/unarmed-manipulation/index" */))
const _66c8a602 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\upper\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/upper/index" */))
const _1c78fb72 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\armed-manipulation\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/armed-manipulation/index" */))
const _9fca2f6a = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\bayonet\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/bayonet/index" */))
const _32f95cb0 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\breakfalls\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/breakfalls/index" */))
const _53a7ef3e = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\choke-counters\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/choke-counters/index" */))
const _af412e9c = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\chokes\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/chokes/index" */))
const _0f0291ae = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\knife\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/knife/index" */))
const _5acfa43f = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\legsweep.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/legsweep" */))
const _1a133fd2 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\lower\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/lower/index" */))
const _557b9541 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\strike-counters\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/strike-counters/index" */))
const _df26d48e = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\unarmed-manipulation\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/unarmed-manipulation/index" */))
const _34fef391 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\upper\\index.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/upper/index" */))
const _69e63152 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\basics\\blackbelt.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/basics/blackbelt" */))
const _2275a035 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\basics\\bo.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/basics/bo" */))
const _efc9b25c = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\basics\\kama.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/basics/kama" */))
const _5638e24c = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\basics\\kyu-rank.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/basics/kyu-rank" */))
const _ca7999ba = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\basics\\sai.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/basics/sai" */))
const _bfc301d4 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\basics\\tonfa.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/basics/tonfa" */))
const _146ffda1 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\ippon-kumite\\black-belt-ippon-kumite.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/ippon-kumite/black-belt-ippon-kumite" */))
const _3d9f532a = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\ippon-kumite\\blue-belt-ippon-kumite.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/ippon-kumite/blue-belt-ippon-kumite" */))
const _a5ec30da = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\ippon-kumite\\bo-tai-bo-1.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/ippon-kumite/bo-tai-bo-1" */))
const _a5d001d8 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\ippon-kumite\\bo-tai-bo-2.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/ippon-kumite/bo-tai-bo-2" */))
const _a5b3d2d6 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\ippon-kumite\\bo-tai-bo-3.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/ippon-kumite/bo-tai-bo-3" */))
const _41906468 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\ippon-kumite\\bo-tai-kama.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/ippon-kumite/bo-tai-kama" */))
const _934e762e = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\ippon-kumite\\bo-tai-sai.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/ippon-kumite/bo-tai-sai" */))
const _2c96b75c = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\ippon-kumite\\bo-tai-tonfa.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/ippon-kumite/bo-tai-tonfa" */))
const _2e3fc8d0 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\ippon-kumite\\brown-belt-ippon-kumite.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/ippon-kumite/brown-belt-ippon-kumite" */))
const _257661a5 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\ippon-kumite\\green-belt-ippon-kumite.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/ippon-kumite/green-belt-ippon-kumite" */))
const _3db7436a = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\ippon-kumite\\white-belt-ippon-kumite.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/ippon-kumite/white-belt-ippon-kumite" */))
const _6861eef2 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\koteatei\\1.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/koteatei/1" */))
const _68700673 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\koteatei\\2.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/koteatei/2" */))
const _687e1df4 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\koteatei\\3.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/koteatei/3" */))
const _d744a7aa = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\tuite\\1-dan-tuite.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/tuite/1-dan-tuite" */))
const _3649843e = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\tuite\\1-kyu-tuite.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/tuite/1-kyu-tuite" */))
const _64dc32ab = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\tuite\\10-kyu-tuite.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/tuite/10-kyu-tuite" */))
const _238dd328 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\tuite\\2-dan-tuite.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/tuite/2-dan-tuite" */))
const _3eb6a822 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\tuite\\2-kyu-tuite.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/tuite/2-kyu-tuite" */))
const _481480ad = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\tuite\\3-dan-tuite.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/tuite/3-dan-tuite" */))
const _cedbdb3a = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\tuite\\3-kyu-tuite.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/tuite/3-kyu-tuite" */))
const _1b2506b8 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\tuite\\4-kyu-tuite.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/tuite/4-kyu-tuite" */))
const _4c48e6e5 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\tuite\\5-kyu-tuite.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/tuite/5-kyu-tuite" */))
const _b3b75db4 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\tuite\\6-kyu-tuite.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/tuite/6-kyu-tuite" */))
const _00008932 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\tuite\\7-kyu-tuite.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/tuite/7-kyu-tuite" */))
const _59db25a8 = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\tuite\\8-kyu-tuite.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/tuite/8-kyu-tuite" */))
const _9892e02e = () => interopDefault(import('..\\pages\\resources\\drills\\osmkkf\\tuite\\9-kyu-tuite.vue' /* webpackChunkName: "pages/resources/drills/osmkkf/tuite/9-kyu-tuite" */))
const _c1991184 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\187.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/187" */))
const _c160b380 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\189.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/189" */))
const _bef4a954 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\190.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/190" */))
const _be2f6046 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\197.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/197" */))
const _be133144 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\198.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/198" */))
const _73df6e00 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\200.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/200" */))
const _73a70ffc = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\202.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/202" */))
const _736eb1f8 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\204.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/204" */))
const _735282f6 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\205.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/205" */))
const _733653f4 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\206.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/206" */))
const _72fdf5f0 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\208.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/208" */))
const _7075bcc2 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\210.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/210" */))
const _703d5ebe = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\212.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/212" */))
const _700500ba = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\214.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/214" */))
const _6fcca2b6 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\216.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/216" */))
const _6f7815b0 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\219.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/219" */))
const _6cefdc82 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\221.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/221" */))
const _6cb77e7e = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\223.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/223" */))
const _6c7f207a = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\225.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/225" */))
const _6c46c276 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\227.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/227" */))
const _6c0e6472 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\229.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/229" */))
const _69862b44 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\231.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/231" */))
const _6969fc42 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\232.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/232" */))
const _694dcd40 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\233.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/233" */))
const _69319e3e = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\234.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/234" */))
const _69156f3c = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\235.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/235" */))
const _68f9403a = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\236.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/236" */))
const _68dd1138 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\237.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/237" */))
const _68c0e236 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\238.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/238" */))
const _6638a908 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\240.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/240" */))
const _66004b04 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\242.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/242" */))
const _65e41c02 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\243.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/243" */))
const _65abbdfe = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\245.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/245" */))
const _65735ffa = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\247.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/247" */))
const _655730f8 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\248.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/248" */))
const _653b01f6 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\249.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/249" */))
const _62cef7ca = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\250.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/250" */))
const _629699c6 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\252.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/252" */))
const _627a6ac4 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\253.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/253" */))
const _625e3bc2 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\254.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/254" */))
const _6225ddbe = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\256.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/256" */))
const _61d150b8 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\259.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/259" */))
const _5f49178a = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\261.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/261" */))
const _5f10b986 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\263.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/263" */))
const _5ed85b82 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\265.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/265" */))
const _5ebc2c80 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\266.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/266" */))
const _5e9ffd7e = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\267.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/267" */))
const _5e83ce7c = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\268.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/268" */))
const _5bfb954e = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\270.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/270" */))
const _5bc3374a = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\272.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/272" */))
const _5ba70848 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\273.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/273" */))
const _5b6eaa44 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\armlocks\\275.vue' /* webpackChunkName: "pages/resources/drills/sambo/armlocks/275" */))
const _7d243815 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\283.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/283" */))
const _7d406717 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\285.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/285" */))
const _7d6aad9a = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\288.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/288" */))
const _7eaeca31 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\290.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/290" */))
const _7ee72835 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\294.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/294" */))
const _7f035737 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\296.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/296" */))
const _7f116eb8 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\297.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/297" */))
const _b7710148 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\301.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/301" */))
const _b754d246 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\302.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/302" */))
const _b738a344 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\303.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/303" */))
const _b71c7442 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\304.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/304" */))
const _b6e4163e = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\306.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/306" */))
const _b6abb83a = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\308.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/308" */))
const _b4237f0c = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\310.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/310" */))
const _b3b2c304 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\314.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/314" */))
const _b3969402 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\315.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/315" */))
const _b37a6500 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\316.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/316" */))
const _b35e35fe = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\317.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/317" */))
const _b34206fc = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\318.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/318" */))
const _b325d7fa = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\319.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/319" */))
const _b09d9ecc = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\321.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/321" */))
const _b06540c8 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\breakdowns\\323.vue' /* webpackChunkName: "pages/resources/drills/sambo/breakdowns/323" */))
const _7c99fcb4 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\125.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/125" */))
const _7ca81435 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\126.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/126" */))
const _7cb62bb6 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\127.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/127" */))
const _7cc44337 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\128.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/128" */))
const _7cd25ab8 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\129.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/129" */))
const _7e16774f = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\131.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/131" */))
const _7e32a651 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\133.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/133" */))
const _7e4ed553 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\135.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/135" */))
const _7e5cecd4 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\136.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/136" */))
const _7e873357 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\139.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/139" */))
const _7fbd386d = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\140.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/140" */))
const _7fcb4fee = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\141.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/141" */))
const _7fe77ef0 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\143.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/143" */))
const _fff8a41c = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\145.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/145" */))
const _ffdc751a = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\146.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/146" */))
const _ffc04618 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\147.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/147" */))
const _ff87e814 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\149.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/149" */))
const _fd1bdde8 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\150.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/150" */))
const _fce37fe4 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\152.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/152" */))
const _fcab21e0 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\154.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/154" */))
const _fc72c3dc = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\156.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/156" */))
const _fc3a65d8 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\158.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/158" */))
const _fc1e36d6 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\159.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/159" */))
const _f995fda8 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\161.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/161" */))
const _f95d9fa4 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\163.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/163" */))
const _f92541a0 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\165.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/165" */))
const _f909129e = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\166.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/166" */))
const _f8d0b49a = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\168.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/168" */))
const _f6487b6c = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\170.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/170" */))
const _f62c4c6a = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\171.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/171" */))
const _f6101d68 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\172.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/172" */))
const _f5f3ee66 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\173.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/173" */))
const _f5d7bf64 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\174.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/174" */))
const _f59f6160 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\176.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/176" */))
const _f567035c = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\178.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/178" */))
const _f2deca2e = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\leglocks\\180.vue' /* webpackChunkName: "pages/resources/drills/sambo/leglocks/180" */))
const _55a110de = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\100.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/100" */))
const _55af285f = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\101.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/101" */))
const _55bd3fe0 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\102.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/102" */))
const _55d96ee2 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\104.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/104" */))
const _55e78663 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\105.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/105" */))
const _5603b565 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\107.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/107" */))
const _561fe467 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\109.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/109" */))
const _576400fe = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\111.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/111" */))
const _57803000 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\113.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/113" */))
const _578e4781 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\114.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/114" */))
const _57aa7683 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\116.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/116" */))
const _91fbf784 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\50.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/50" */))
const _91dfc882 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\51.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/51" */))
const _91c39980 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\52.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/52" */))
const _918b3b7c = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\54.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/54" */))
const _916f0c7a = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\55.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/55" */))
const _9152dd78 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\56.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/56" */))
const _9136ae76 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\57.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/57" */))
const _911a7f74 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\58.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/58" */))
const _90fe5072 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\59.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/59" */))
const _8e761744 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\61.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/61" */))
const _8e59e842 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\62.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/62" */))
const _8e3db940 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\63.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/63" */))
const _8e218a3e = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\64.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/64" */))
const _8de92c3a = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\66.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/66" */))
const _8db0ce36 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\68.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/68" */))
const _8d949f34 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\69.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/69" */))
const _8b289508 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\70.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/70" */))
const _8b0c6606 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\71.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/71" */))
const _8af03704 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\72.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/72" */))
const _8ad40802 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\73.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/73" */))
const _8ab7d900 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\74.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/74" */))
const _8a9ba9fe = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\75.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/75" */))
const _8a7f7afc = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\76.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/76" */))
const _8a471cf8 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\78.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/78" */))
const _87bee3ca = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\80.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/80" */))
const _87a2b4c8 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\81.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/81" */))
const _876a56c4 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\83.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/83" */))
const _874e27c2 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\84.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/84" */))
const _8731f8c0 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\85.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/85" */))
const _86f99abc = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\87.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/87" */))
const _86dd6bba = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\88.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/88" */))
const _8455328c = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\90.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/90" */))
const _8439038a = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\91.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/91" */))
const _841cd488 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\92.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/92" */))
const _8400a586 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\93.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/93" */))
const _83e47684 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\94.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/94" */))
const _83c84782 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\95.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/95" */))
const _83ac1880 = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\96.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/96" */))
const _838fe97e = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\97.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/97" */))
const _8373ba7c = () => interopDefault(import('..\\pages\\resources\\drills\\sambo\\throws\\98.vue' /* webpackChunkName: "pages/resources/drills/sambo/throws/98" */))
const _340fdb24 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\chokes\\guillotine.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/chokes/guillotine" */))
const _eb830d94 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\chokes\\triangle.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/chokes/triangle" */))
const _057320e5 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\ground\\bent-armbar.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/ground/bent-armbar" */))
const _2bfcae6f = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\ground\\face-rip.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/ground/face-rip" */))
const _43f65092 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\ground\\rolling-kneebar.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/ground/rolling-kneebar" */))
const _08134499 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\ground\\sitting-kneebar.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/ground/sitting-kneebar" */))
const _4e4d2994 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\ground\\straight-armbar.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/ground/straight-armbar" */))
const _ccdb3586 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\guns\\1-hand.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/guns/1-hand" */))
const _e4485348 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\guns\\2-hand.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/guns/2-hand" */))
const _0c8ef62e = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\opportunity\\front-garrote.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/opportunity/front-garrote" */))
const _002c52c1 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\opportunity\\rear-garrote.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/opportunity/rear-garrote" */))
const _165ad68a = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\upper\\cuphand.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/upper/cuphand" */))
const _334bb679 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\black\\upper\\smash.vue' /* webpackChunkName: "pages/resources/drills/mcmap/black/upper/smash" */))
const _33201ba4 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\bayonet\\1-2.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/bayonet/1-2" */))
const _67f83f64 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\bayonet\\2-1.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/bayonet/2-1" */))
const _680656e5 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\bayonet\\2-2.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/bayonet/2-2" */))
const _045e929a = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\ground\\front-choke.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/ground/front-choke" */))
const _519225e8 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\ground\\leglock.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/ground/leglock" */))
const _e93db54c = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\ground\\rear-ground-choke.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/ground/rear-ground-choke" */))
const _b292e2ea = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\ground\\side-choke.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/ground/side-choke" */))
const _4460c740 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\guns\\armbar.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/guns/armbar" */))
const _4e7d451e = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\guns\\blocking.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/guns/blocking" */))
const _73e85304 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\guns\\front-pistol.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/guns/front-pistol" */))
const _8214a432 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\guns\\rear-pistol.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/guns/rear-pistol" */))
const _210865db = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\guns\\ss-back.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/guns/ss-back" */))
const _8aa5d436 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\guns\\ss-front.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/guns/ss-front" */))
const _b2ae573e = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\guns\\wristlock.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/guns/wristlock" */))
const _e37763da = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\knife\\reverse-block.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/knife/reverse-block" */))
const _63be6fb7 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\knife\\thrust-block.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/knife/thrust-block" */))
const _56b3eda6 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\unarmed-manipulation\\bent-armbar.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/unarmed-manipulation/bent-armbar" */))
const _7cef323d = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\unarmed-manipulation\\forward-armbar.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/unarmed-manipulation/forward-armbar" */))
const _079fe1ee = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\unarmed-manipulation\\hollow-out.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/unarmed-manipulation/hollow-out" */))
const _9027a400 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\brown\\unarmed-manipulation\\reverse-armbar.vue' /* webpackChunkName: "pages/resources/drills/mcmap/brown/unarmed-manipulation/reverse-armbar" */))
const _c002c5ae = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\ground\\guard-armbar.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/ground/guard-armbar" */))
const _34a74f35 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\ground\\mount-armbar.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/ground/mount-armbar" */))
const _1d643832 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\knife\\forward-counter.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/knife/forward-counter" */))
const _358dced7 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\knife\\vertical-counter.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/knife/vertical-counter" */))
const _42771295 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\opportunity\\forward-block.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/opportunity/forward-block" */))
const _33da1272 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\opportunity\\reverse-block.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/opportunity/reverse-block" */))
const _0e3f2378 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\opportunity\\thrust-block.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/opportunity/thrust-block" */))
const _c2b9e1d4 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\opportunity\\vertical-block.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/opportunity/vertical-block" */))
const _2e36b5a4 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\strike-counters\\round-kick.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/strike-counters/round-kick" */))
const _d05aac80 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\strike-counters\\round-punch.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/strike-counters/round-punch" */))
const _72c30750 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\unarmed-manipulation\\controlling.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/unarmed-manipulation/controlling" */))
const _103c42be = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\unarmed-manipulation\\pain.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/unarmed-manipulation/pain" */))
const _85e2cbd8 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\green\\unarmed-manipulation\\reverse-wristlock.vue' /* webpackChunkName: "pages/resources/drills/mcmap/green/unarmed-manipulation/reverse-wristlock" */))
const _72802fb3 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\armed-manipulation\\double-pull.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/armed-manipulation/double-pull" */))
const _7e39be08 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\armed-manipulation\\double-push.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/armed-manipulation/double-push" */))
const _d3a0e908 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\armed-manipulation\\moving-pulling.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/armed-manipulation/moving-pulling" */))
const _387f42bd = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\armed-manipulation\\over-strike.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/armed-manipulation/over-strike" */))
const _2e4d7fc5 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\armed-manipulation\\under-strike.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/armed-manipulation/under-strike" */))
const _31688cc1 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\bayonet\\rush.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/bayonet/rush" */))
const _f8b96332 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\choke-counters\\bearhug.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/choke-counters/bearhug" */))
const _7e924465 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\choke-counters\\choke.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/choke-counters/choke" */))
const _61b91f3a = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\choke-counters\\headlock.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/choke-counters/headlock" */))
const _04db8382 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\ground\\guard.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/ground/guard" */))
const _23f081b3 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\ground\\mount.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/ground/mount" */))
const _2d72d0ae = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\knife\\bulldogging.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/knife/bulldogging" */))
const _68fcb182 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\knife\\forward-slash.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/knife/forward-slash" */))
const _a3ab22f4 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\knife\\forward-thrust.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/knife/forward-thrust" */))
const _8636b1c8 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\knife\\reverse-slash.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/knife/reverse-slash" */))
const _2db12b6e = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\knife\\reverse-thrust.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/knife/reverse-thrust" */))
const _098e0b80 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\lower\\axe-stomp.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/lower/axe-stomp" */))
const _692ac93a = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\lower\\horizontal-knee.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/lower/horizontal-knee" */))
const _b054e52c = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\lower\\side-kick.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/lower/side-kick" */))
const _4c9de964 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\opportunity\\forward-strike.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/opportunity/forward-strike" */))
const _14ae0711 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\opportunity\\reverse-strike.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/opportunity/reverse-strike" */))
const _e944e5b2 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\opportunity\\straight-thrust.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/opportunity/straight-thrust" */))
const _58b14185 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\opportunity\\vertical-strike.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/opportunity/vertical-strike" */))
const _55fec6e2 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\strike-counters\\lead.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/strike-counters/lead" */))
const _204ad518 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\strike-counters\\lead-kick.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/strike-counters/lead-kick" */))
const _c19af92a = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\unarmed-manipulation\\come-along.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/unarmed-manipulation/come-along" */))
const _9e6c53ee = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\unarmed-manipulation\\cuff.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/unarmed-manipulation/cuff" */))
const _7df86df3 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\unarmed-manipulation\\escort.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/unarmed-manipulation/escort" */))
const _6449191a = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\unarmed-manipulation\\escort-takedown.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/unarmed-manipulation/escort-takedown" */))
const _6bd9d141 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\upper\\knifehand.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/upper/knifehand" */))
const _12bd7b95 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\upper\\palm.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/upper/palm" */))
const _7cae3e7d = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\upper\\rear-elbow.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/upper/rear-elbow" */))
const _5185fc96 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\upper\\reverse-knifehand.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/upper/reverse-knifehand" */))
const _68551f62 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\upper\\vertical-elbow.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/upper/vertical-elbow" */))
const _38ff8ac0 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\grey\\upper\\vertical-knifehand.vue' /* webpackChunkName: "pages/resources/drills/mcmap/grey/upper/vertical-knifehand" */))
const _d30ed5d4 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\armed-manipulation\\blocks.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/armed-manipulation/blocks" */))
const _46fee7be = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\armed-manipulation\\retention.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/armed-manipulation/retention" */))
const _2f3e16ce = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\bayonet\\disrupt.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/bayonet/disrupt" */))
const _cccd690a = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\bayonet\\horizontal.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/bayonet/horizontal" */))
const _23549376 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\bayonet\\slash.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/bayonet/slash" */))
const _e9947f56 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\bayonet\\smash.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/bayonet/smash" */))
const _50b5092f = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\bayonet\\thrust.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/bayonet/thrust" */))
const _784cd18d = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\bayonet\\vertical.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/bayonet/vertical" */))
const _9ebc45fe = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\breakfalls\\back.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/breakfalls/back" */))
const _1e42837f = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\breakfalls\\front.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/breakfalls/front" */))
const _22b59d97 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\breakfalls\\roll.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/breakfalls/roll" */))
const _3f27fd71 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\breakfalls\\side.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/breakfalls/side" */))
const _05e89895 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\choke-counters\\bearhug.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/choke-counters/bearhug" */))
const _3c604213 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\choke-counters\\choke.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/choke-counters/choke" */))
const _281d1acc = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\choke-counters\\headlock.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/choke-counters/headlock" */))
const _44bb25cf = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\chokes\\figure-four.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/chokes/figure-four" */))
const _fd332a18 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\chokes\\rear.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/chokes/rear" */))
const _fb87864e = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\knife\\slash.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/knife/slash" */))
const _627ae7a8 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\knife\\thrust.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/knife/thrust" */))
const _51d271a9 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\lower\\front.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/lower/front" */))
const _49e80a8e = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\lower\\round.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/lower/round" */))
const _b1bd905e = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\lower\\stomp.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/lower/stomp" */))
const _531e78a6 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\lower\\vertical.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/lower/vertical" */))
const _0252b027 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\strike-counters\\kick.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/strike-counters/kick" */))
const _4735ff9d = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\strike-counters\\punch.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/strike-counters/punch" */))
const _108249e0 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\unarmed-manipulation\\armbar.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/unarmed-manipulation/armbar" */))
const _62082344 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\unarmed-manipulation\\compliance.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/unarmed-manipulation/compliance" */))
const _576e3fdc = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\unarmed-manipulation\\distracter.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/unarmed-manipulation/distracter" */))
const _b796cd1e = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\unarmed-manipulation\\joint.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/unarmed-manipulation/joint" */))
const _6d9536e1 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\unarmed-manipulation\\wristlock.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/unarmed-manipulation/wristlock" */))
const _0c01b72c = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\upper\\gouge.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/upper/gouge" */))
const _206a4e17 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\upper\\hammer.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/upper/hammer" */))
const _80114816 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\upper\\horizontal.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/upper/horizontal" */))
const _1e08b887 = () => interopDefault(import('..\\pages\\resources\\drills\\mcmap\\tan\\upper\\vertical.vue' /* webpackChunkName: "pages/resources/drills/mcmap/tan/upper/vertical" */))
const _1d18283b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin-resources",
    component: _a6ab7c9c,
    name: "admin-resources"
  }, {
    path: "/calendar",
    component: _cf388936,
    name: "calendar"
  }, {
    path: "/contact",
    component: _63010419,
    name: "contact"
  }, {
    path: "/gallery",
    component: _b317f30a,
    name: "gallery"
  }, {
    path: "/instructors",
    component: _f59bd8fa,
    name: "instructors"
  }, {
    path: "/profile",
    component: _4619fef0,
    name: "profile"
  }, {
    path: "/programs",
    component: _684f7dac,
    name: "programs"
  }, {
    path: "/resources",
    component: _76974d34,
    name: "resources"
  }, {
    path: "/shop",
    component: _c6830976,
    name: "shop"
  }, {
    path: "/test",
    component: _524e4b8e,
    name: "test"
  }, {
    path: "/admin-resources/attendance",
    component: _dcc7b28e,
    name: "admin-resources-attendance"
  }, {
    path: "/admin-resources/blog",
    component: _5143ce1c,
    name: "admin-resources-blog"
  }, {
    path: "/admin-resources/print-certificates",
    component: _e55a81a8,
    name: "admin-resources-print-certificates"
  }, {
    path: "/admin-resources/store",
    component: _41a57241,
    name: "admin-resources-store"
  }, {
    path: "/admin-resources/students",
    component: _5441f79a,
    name: "admin-resources-students"
  }, {
    path: "/admin-resources/update-calendar",
    component: _63c4bea2,
    name: "admin-resources-update-calendar"
  }, {
    path: "/admin-resources/videos",
    component: _5f528ba8,
    name: "admin-resources-videos"
  }, {
    path: "/contact/faq",
    component: _4c5f441d,
    name: "contact-faq"
  }, {
    path: "/contact/pricing",
    component: _1adf9d66,
    name: "contact-pricing"
  }, {
    path: "/contact/resources",
    component: _d7960ad4,
    name: "contact-resources"
  }, {
    path: "/contact/right-martial-art",
    component: _62ef042c,
    name: "contact-right-martial-art"
  }, {
    path: "/contact/signup",
    component: _9673a83e,
    name: "contact-signup"
  }, {
    path: "/error/400",
    component: _01989bda,
    name: "error-400"
  }, {
    path: "/error/401",
    component: _017c6cd8,
    name: "error-401"
  }, {
    path: "/error/403",
    component: _01440ed4,
    name: "error-403"
  }, {
    path: "/error/404",
    component: _0127dfd2,
    name: "error-404"
  }, {
    path: "/error/405",
    component: _010bb0d0,
    name: "error-405"
  }, {
    path: "/error/414",
    component: _0120e8b6,
    name: "error-414"
  }, {
    path: "/error/416",
    component: _013d17b8,
    name: "error-416"
  }, {
    path: "/error/500",
    component: _3419ed54,
    name: "error-500"
  }, {
    path: "/error/501",
    component: _342804d5,
    name: "error-501"
  }, {
    path: "/error/502",
    component: _34361c56,
    name: "error-502"
  }, {
    path: "/error/503",
    component: _344433d7,
    name: "error-503"
  }, {
    path: "/error/504",
    component: _34524b58,
    name: "error-504"
  }, {
    path: "/instructors/adam",
    component: _800c1324,
    name: "instructors-adam"
  }, {
    path: "/instructors/kris",
    component: _7d4f72a0,
    name: "instructors-kris"
  }, {
    path: "/instructors/max",
    component: _222f6955,
    name: "instructors-max"
  }, {
    path: "/instructors/sensei",
    component: _4b9c819a,
    name: "instructors-sensei"
  }, {
    path: "/profile/login",
    component: _0fc1a207,
    name: "profile-login"
  }, {
    path: "/programs/adult",
    component: _4663c294,
    name: "programs-adult"
  }, {
    path: "/programs/combatives",
    component: _c98eceb6,
    name: "programs-combatives"
  }, {
    path: "/programs/enforcement",
    component: _29a8489a,
    name: "programs-enforcement"
  }, {
    path: "/programs/taichi",
    component: _1eb9071e,
    name: "programs-taichi"
  }, {
    path: "/programs/women",
    component: _710c3250,
    name: "programs-women"
  }, {
    path: "/programs/youth",
    component: _9f0e79a6,
    name: "programs-youth"
  }, {
    path: "/resources/archive",
    component: _0844d15e,
    name: "resources-archive"
  }, {
    path: "/resources/drills",
    component: _81560d88,
    name: "resources-drills"
  }, {
    path: "/resources/instructors",
    component: _09027658,
    name: "resources-instructors"
  }, {
    path: "/resources/kata",
    component: _af0647de,
    name: "resources-kata"
  }, {
    path: "/resources/requirements",
    component: _549361a4,
    name: "resources-requirements"
  }, {
    path: "/shop/camps",
    component: _d70bc746,
    name: "shop-camps"
  }, {
    path: "/shop/cart",
    component: _1fb53d7d,
    name: "shop-cart"
  }, {
    path: "/shop/gear",
    component: _266f7696,
    name: "shop-gear"
  }, {
    path: "/shop/manual",
    component: _7df609e3,
    name: "shop-manual"
  }, {
    path: "/shop/uniforms",
    component: _26007f66,
    name: "shop-uniforms"
  }, {
    path: "/shop/weapons",
    component: _63a43638,
    name: "shop-weapons"
  }, {
    path: "/admin-resources/students/create",
    component: _5bb14664,
    name: "admin-resources-students-create"
  }, {
    path: "/contact/resources/covid",
    component: _40654469,
    name: "contact-resources-covid"
  }, {
    path: "/contact/resources/covid-pt-2",
    component: _5e4844bd,
    name: "contact-resources-covid-pt-2"
  }, {
    path: "/contact/resources/does-it-work",
    component: _261bc48b,
    name: "contact-resources-does-it-work"
  }, {
    path: "/contact/resources/ettiquette",
    component: _49190c58,
    name: "contact-resources-ettiquette"
  }, {
    path: "/contact/resources/history",
    component: _5ebcaa58,
    name: "contact-resources-history"
  }, {
    path: "/contact/resources/ismskf",
    component: _5007c417,
    name: "contact-resources-ismskf"
  }, {
    path: "/contact/resources/re-re-opening",
    component: _6a37065c,
    name: "contact-resources-re-re-opening"
  }, {
    path: "/contact/resources/reopening",
    component: _6388a209,
    name: "contact-resources-reopening"
  }, {
    path: "/contact/resources/right-martial-art",
    component: _2975a0e7,
    name: "contact-resources-right-martial-art"
  }, {
    path: "/contact/resources/uniform-maintenance",
    component: _450bf13e,
    name: "contact-resources-uniform-maintenance"
  }, {
    path: "/contact/resources/weapon-maintenance",
    component: _32508464,
    name: "contact-resources-weapon-maintenance"
  }, {
    path: "/resources/drills/aiki",
    component: _6dc978f6,
    name: "resources-drills-aiki"
  }, {
    path: "/resources/drills/capoeira",
    component: _351cfb0c,
    name: "resources-drills-capoeira"
  }, {
    path: "/resources/drills/jiujitsu",
    component: _6db4048a,
    name: "resources-drills-jiujitsu"
  }, {
    path: "/resources/drills/judo",
    component: _550b4934,
    name: "resources-drills-judo"
  }, {
    path: "/resources/drills/kali",
    component: _601f4dee,
    name: "resources-drills-kali"
  }, {
    path: "/resources/drills/mcmap",
    component: _1cf67812,
    name: "resources-drills-mcmap"
  }, {
    path: "/resources/drills/muay-thai",
    component: _9713fc62,
    name: "resources-drills-muay-thai"
  }, {
    path: "/resources/drills/osmkkf",
    component: _23aff83f,
    name: "resources-drills-osmkkf"
  }, {
    path: "/resources/drills/sambo",
    component: _cd079028,
    name: "resources-drills-sambo"
  }, {
    path: "/resources/drills/shilleleigh",
    component: _0e99dd10,
    name: "resources-drills-shilleleigh"
  }, {
    path: "/resources/drills/silat",
    component: _832216a2,
    name: "resources-drills-silat"
  }, {
    path: "/resources/requirements/1-dan",
    component: _7e0e6747,
    name: "resources-requirements-1-dan"
  }, {
    path: "/resources/requirements/1-kyu",
    component: _19b0f97d,
    name: "resources-requirements-1-kyu"
  }, {
    path: "/resources/requirements/2-dan",
    component: _1252d648,
    name: "resources-requirements-2-dan"
  }, {
    path: "/resources/requirements/2-kyu",
    component: _a4152f04,
    name: "resources-requirements-2-kyu"
  }, {
    path: "/resources/requirements/3-dan",
    component: _b2d1756e,
    name: "resources-requirements-3-dan"
  }, {
    path: "/resources/requirements/3-kyu",
    component: _4239d77f,
    name: "resources-requirements-3-kyu"
  }, {
    path: "/resources/requirements/4-dan",
    component: _3adbb44a,
    name: "resources-requirements-4-dan"
  }, {
    path: "/resources/requirements/4-kyu",
    component: _53037300,
    name: "resources-requirements-4-kyu"
  }, {
    path: "/resources/requirements/5-dan",
    component: _61bfb96a,
    name: "resources-requirements-5-dan"
  }, {
    path: "/resources/requirements/5-kyu",
    component: _6ac2b581,
    name: "resources-requirements-5-kyu"
  }, {
    path: "/resources/requirements/6-dan",
    component: _6364924c,
    name: "resources-requirements-6-dan"
  }, {
    path: "/resources/requirements/6-kyu",
    component: _01f1b6fc,
    name: "resources-requirements-6-kyu"
  }, {
    path: "/resources/requirements/7-dan",
    component: _10adfd66,
    name: "resources-requirements-7-dan"
  }, {
    path: "/resources/requirements/7-kyu",
    component: _d968d8fa,
    name: "resources-requirements-7-kyu"
  }, {
    path: "/resources/requirements/8-kyu",
    component: _27900284,
    name: "resources-requirements-8-kyu"
  }, {
    path: "/resources/requirements/9-kyu",
    component: _88571cf6,
    name: "resources-requirements-9-kyu"
  }, {
    path: "/resources/requirements/karate-instructor",
    component: _752d7f34,
    name: "resources-requirements-karate-instructor"
  }, {
    path: "/resources/requirements/kobudo-instructor",
    component: _93d15acc,
    name: "resources-requirements-kobudo-instructor"
  }, {
    path: "/resources/requirements/law-instructor",
    component: _eace7b74,
    name: "resources-requirements-law-instructor"
  }, {
    path: "/resources/requirements/tuite-instructor",
    component: _752f39e2,
    name: "resources-requirements-tuite-instructor"
  }, {
    path: "/shop/gear/gloves",
    component: _739a0626,
    name: "shop-gear-gloves"
  }, {
    path: "/shop/gear/head",
    component: _445a06cc,
    name: "shop-gear-head"
  }, {
    path: "/shop/gear/legs",
    component: _2221a2de,
    name: "shop-gear-legs"
  }, {
    path: "/shop/gear/mouthguard",
    component: _3506ddac,
    name: "shop-gear-mouthguard"
  }, {
    path: "/shop/uniforms/clothing",
    component: _60cba8b8,
    name: "shop-uniforms-clothing"
  }, {
    path: "/shop/uniforms/gi",
    component: _3370ba04,
    name: "shop-uniforms-gi"
  }, {
    path: "/shop/weapons/bo",
    component: _82240152,
    name: "shop-weapons-bo"
  }, {
    path: "/shop/weapons/eku",
    component: _8b0dea16,
    name: "shop-weapons-eku"
  }, {
    path: "/shop/weapons/kama",
    component: _300f7518,
    name: "shop-weapons-kama"
  }, {
    path: "/shop/weapons/knives",
    component: _6764d008,
    name: "shop-weapons-knives"
  }, {
    path: "/shop/weapons/nunchaku",
    component: _1302b72e,
    name: "shop-weapons-nunchaku"
  }, {
    path: "/shop/weapons/sai",
    component: _e5528f7e,
    name: "shop-weapons-sai"
  }, {
    path: "/shop/weapons/tanbo",
    component: _f0f2b1d8,
    name: "shop-weapons-tanbo"
  }, {
    path: "/shop/weapons/tekko",
    component: _d0977338,
    name: "shop-weapons-tekko"
  }, {
    path: "/shop/weapons/tinberochin",
    component: _8908e7ee,
    name: "shop-weapons-tinberochin"
  }, {
    path: "/shop/weapons/tonfa",
    component: _3be534b4,
    name: "shop-weapons-tonfa"
  }, {
    path: "/resources/drills/aiki/daito-ryu",
    component: _0fe2d096,
    name: "resources-drills-aiki-daito-ryu"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu",
    component: _300a1731,
    name: "resources-drills-aiki-mubyoshi-ryu"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu",
    component: _2ee8452d,
    name: "resources-drills-aiki-mukaku-ryu"
  }, {
    path: "/resources/drills/capoeira/drills",
    component: _fcc961d8,
    name: "resources-drills-capoeira-drills"
  }, {
    path: "/resources/drills/capoeira/evasions",
    component: _0bcab084,
    name: "resources-drills-capoeira-evasions"
  }, {
    path: "/resources/drills/capoeira/floreios",
    component: _44a5c38a,
    name: "resources-drills-capoeira-floreios"
  }, {
    path: "/resources/drills/capoeira/kicks",
    component: _4bd9defb,
    name: "resources-drills-capoeira-kicks"
  }, {
    path: "/resources/drills/capoeira/strikes",
    component: _26f51a32,
    name: "resources-drills-capoeira-strikes"
  }, {
    path: "/resources/drills/capoeira/throws",
    component: _6b1035c2,
    name: "resources-drills-capoeira-throws"
  }, {
    path: "/resources/drills/jiujitsu/brazilian",
    component: _9dc68562,
    name: "resources-drills-jiujitsu-brazilian"
  }, {
    path: "/resources/drills/jiujitsu/japanese",
    component: _562568aa,
    name: "resources-drills-jiujitsu-japanese"
  }, {
    path: "/resources/drills/judo/chokes",
    component: _5c0699d2,
    name: "resources-drills-judo-chokes"
  }, {
    path: "/resources/drills/judo/foot",
    component: _7fcd15b8,
    name: "resources-drills-judo-foot"
  }, {
    path: "/resources/drills/judo/hand",
    component: _6fc58717,
    name: "resources-drills-judo-hand"
  }, {
    path: "/resources/drills/judo/hip",
    component: _68660f02,
    name: "resources-drills-judo-hip"
  }, {
    path: "/resources/drills/judo/holds",
    component: _5effdb4c,
    name: "resources-drills-judo-holds"
  }, {
    path: "/resources/drills/judo/locks",
    component: _28debe74,
    name: "resources-drills-judo-locks"
  }, {
    path: "/resources/drills/judo/rear",
    component: _6e42ea7c,
    name: "resources-drills-judo-rear"
  }, {
    path: "/resources/drills/judo/side",
    component: _11b4c92f,
    name: "resources-drills-judo-side"
  }, {
    path: "/resources/drills/kali/double-knife",
    component: _de09a400,
    name: "resources-drills-kali-double-knife"
  }, {
    path: "/resources/drills/kali/double-stick",
    component: _1b4f6735,
    name: "resources-drills-kali-double-stick"
  }, {
    path: "/resources/drills/kali/footwork",
    component: _79ab3e2c,
    name: "resources-drills-kali-footwork"
  }, {
    path: "/resources/drills/kali/karambit",
    component: _237c40a4,
    name: "resources-drills-kali-karambit"
  }, {
    path: "/resources/drills/kali/open-hand",
    component: _5949e4ce,
    name: "resources-drills-kali-open-hand"
  }, {
    path: "/resources/drills/kali/single-knife",
    component: _1e897b2e,
    name: "resources-drills-kali-single-knife"
  }, {
    path: "/resources/drills/kali/single-stick",
    component: _7b0f7b9e,
    name: "resources-drills-kali-single-stick"
  }, {
    path: "/resources/drills/kali/stick-knife",
    component: _5c650e83,
    name: "resources-drills-kali-stick-knife"
  }, {
    path: "/resources/drills/mcmap/armed-manipulation",
    component: _722d8e9f,
    name: "resources-drills-mcmap-armed-manipulation"
  }, {
    path: "/resources/drills/mcmap/bayonet",
    component: _7773efb0,
    name: "resources-drills-mcmap-bayonet"
  }, {
    path: "/resources/drills/mcmap/black",
    component: _cbbd623a,
    name: "resources-drills-mcmap-black"
  }, {
    path: "/resources/drills/mcmap/brown",
    component: _6e8f7568,
    name: "resources-drills-mcmap-brown"
  }, {
    path: "/resources/drills/mcmap/choke-counters",
    component: _1d6e7fe0,
    name: "resources-drills-mcmap-choke-counters"
  }, {
    path: "/resources/drills/mcmap/chokes",
    component: _3451b042,
    name: "resources-drills-mcmap-chokes"
  }, {
    path: "/resources/drills/mcmap/firearms",
    component: _72b42a3d,
    name: "resources-drills-mcmap-firearms"
  }, {
    path: "/resources/drills/mcmap/green",
    component: _ce9d7542,
    name: "resources-drills-mcmap-green"
  }, {
    path: "/resources/drills/mcmap/grey",
    component: _6f7a7b5a,
    name: "resources-drills-mcmap-grey"
  }, {
    path: "/resources/drills/mcmap/ground",
    component: _bda06012,
    name: "resources-drills-mcmap-ground"
  }, {
    path: "/resources/drills/mcmap/knife",
    component: _4ea79865,
    name: "resources-drills-mcmap-knife"
  }, {
    path: "/resources/drills/mcmap/lower",
    component: _2e66cac1,
    name: "resources-drills-mcmap-lower"
  }, {
    path: "/resources/drills/mcmap/opportunity",
    component: _e40f20da,
    name: "resources-drills-mcmap-opportunity"
  }, {
    path: "/resources/drills/mcmap/strike-counters",
    component: _6f5a02f2,
    name: "resources-drills-mcmap-strike-counters"
  }, {
    path: "/resources/drills/mcmap/tan",
    component: _5c2447fe,
    name: "resources-drills-mcmap-tan"
  }, {
    path: "/resources/drills/mcmap/throws",
    component: _48ab59bd,
    name: "resources-drills-mcmap-throws"
  }, {
    path: "/resources/drills/mcmap/unarmed-manipulation",
    component: _d14b8310,
    name: "resources-drills-mcmap-unarmed-manipulation"
  }, {
    path: "/resources/drills/mcmap/upper",
    component: _5a643fe2,
    name: "resources-drills-mcmap-upper"
  }, {
    path: "/resources/drills/muay-thai/buok",
    component: _278bd482,
    name: "resources-drills-muay-thai-buok"
  }, {
    path: "/resources/drills/muay-thai/cross-block",
    component: _6eea92fd,
    name: "resources-drills-muay-thai-cross-block"
  }, {
    path: "/resources/drills/muay-thai/djab-ko",
    component: _addf4cf2,
    name: "resources-drills-muay-thai-djab-ko"
  }, {
    path: "/resources/drills/muay-thai/double-elbow.block",
    component: _23a0720e,
    name: "resources-drills-muay-thai-double-elbow.block"
  }, {
    path: "/resources/drills/muay-thai/elbow-block",
    component: _20d8e280,
    name: "resources-drills-muay-thai-elbow-block"
  }, {
    path: "/resources/drills/muay-thai/inside-leg-block",
    component: _afee69e0,
    name: "resources-drills-muay-thai-inside-leg-block"
  }, {
    path: "/resources/drills/muay-thai/khao-chiang",
    component: _fbe65296,
    name: "resources-drills-muay-thai-khao-chiang"
  }, {
    path: "/resources/drills/muay-thai/khao-khong",
    component: _e3d90888,
    name: "resources-drills-muay-thai-khao-khong"
  }, {
    path: "/resources/drills/muay-thai/khao-loi",
    component: _448b8bd7,
    name: "resources-drills-muay-thai-khao-loi"
  }, {
    path: "/resources/drills/muay-thai/khao-tat",
    component: _5716e090,
    name: "resources-drills-muay-thai-khao-tat"
  }, {
    path: "/resources/drills/muay-thai/khao-trong",
    component: _5971b90a,
    name: "resources-drills-muay-thai-khao-trong"
  }, {
    path: "/resources/drills/muay-thai/khao-yao",
    component: _46a57b10,
    name: "resources-drills-muay-thai-khao-yao"
  }, {
    path: "/resources/drills/muay-thai/kradot-chok",
    component: _7517679c,
    name: "resources-drills-muay-thai-kradot-chok"
  }, {
    path: "/resources/drills/muay-thai/kradot-thip",
    component: _5114c436,
    name: "resources-drills-muay-thai-kradot-thip"
  }, {
    path: "/resources/drills/muay-thai/mat-nueng",
    component: _4cf1c587,
    name: "resources-drills-muay-thai-mat-nueng"
  }, {
    path: "/resources/drills/muay-thai/mat-soi-dao",
    component: _a1e6f0bc,
    name: "resources-drills-muay-thai-mat-soi-dao"
  }, {
    path: "/resources/drills/muay-thai/mat-trong",
    component: _c031ad0c,
    name: "resources-drills-muay-thai-mat-trong"
  }, {
    path: "/resources/drills/muay-thai/mat-wiang-klap",
    component: _21f61ed6,
    name: "resources-drills-muay-thai-mat-wiang-klap"
  }, {
    path: "/resources/drills/muay-thai/mat-wiang-san",
    component: _52e9d7aa,
    name: "resources-drills-muay-thai-mat-wiang-san"
  }, {
    path: "/resources/drills/muay-thai/mat-wiang-yao",
    component: _13fe8f32,
    name: "resources-drills-muay-thai-mat-wiang-yao"
  }, {
    path: "/resources/drills/muay-thai/push-block",
    component: _3a474d26,
    name: "resources-drills-muay-thai-push-block"
  }, {
    path: "/resources/drills/muay-thai/sawk-klap",
    component: _74eaec98,
    name: "resources-drills-muay-thai-sawk-klap"
  }, {
    path: "/resources/drills/muay-thai/sawk-ngat",
    component: _b770ae18,
    name: "resources-drills-muay-thai-sawk-ngat"
  }, {
    path: "/resources/drills/muay-thai/sawk-sap",
    component: _77e03aca,
    name: "resources-drills-muay-thai-sawk-sap"
  }, {
    path: "/resources/drills/muay-thai/sawk-tat",
    component: _a60257e2,
    name: "resources-drills-muay-thai-sawk-tat"
  }, {
    path: "/resources/drills/muay-thai/sok-chieng",
    component: _2e24c20b,
    name: "resources-drills-muay-thai-sok-chieng"
  }, {
    path: "/resources/drills/muay-thai/sok-hud",
    component: _9b0da014,
    name: "resources-drills-muay-thai-sok-hud"
  }, {
    path: "/resources/drills/muay-thai/sok-ku",
    component: _2bd1263b,
    name: "resources-drills-muay-thai-sok-ku"
  }, {
    path: "/resources/drills/muay-thai/sok-ti",
    component: _3a83a9c6,
    name: "resources-drills-muay-thai-sok-ti"
  }, {
    path: "/resources/drills/muay-thai/sok-tong",
    component: _51e88305,
    name: "resources-drills-muay-thai-sok-tong"
  }, {
    path: "/resources/drills/muay-thai/te-chiang",
    component: _019c300f,
    name: "resources-drills-muay-thai-te-chiang"
  }, {
    path: "/resources/drills/muay-thai/te-khao",
    component: _4a20ed38,
    name: "resources-drills-muay-thai-te-khao"
  }, {
    path: "/resources/drills/muay-thai/te-klap-lang",
    component: _7823b002,
    name: "resources-drills-muay-thai-te-klap-lang"
  }, {
    path: "/resources/drills/muay-thai/te-kot",
    component: _036d0807,
    name: "resources-drills-muay-thai-te-kot"
  }, {
    path: "/resources/drills/muay-thai/te-tat",
    component: _70bd76c4,
    name: "resources-drills-muay-thai-te-tat"
  }, {
    path: "/resources/drills/muay-thai/te-trong",
    component: _a3cb923e,
    name: "resources-drills-muay-thai-te-trong"
  }, {
    path: "/resources/drills/muay-thai/thip-top",
    component: _67eed2b6,
    name: "resources-drills-muay-thai-thip-top"
  }, {
    path: "/resources/drills/muay-thai/thip-trong",
    component: _d2f5d06a,
    name: "resources-drills-muay-thai-thip-trong"
  }, {
    path: "/resources/drills/osmkkf/basics",
    component: _7044fecc,
    name: "resources-drills-osmkkf-basics"
  }, {
    path: "/resources/drills/osmkkf/ippon-kumite",
    component: _490a7363,
    name: "resources-drills-osmkkf-ippon-kumite"
  }, {
    path: "/resources/drills/osmkkf/koteatei",
    component: _0bf56293,
    name: "resources-drills-osmkkf-koteatei"
  }, {
    path: "/resources/drills/osmkkf/tuite",
    component: _52863948,
    name: "resources-drills-osmkkf-tuite"
  }, {
    path: "/resources/drills/sambo/armlocks",
    component: _ba0ceac0,
    name: "resources-drills-sambo-armlocks"
  }, {
    path: "/resources/drills/sambo/breakdowns",
    component: _0711efba,
    name: "resources-drills-sambo-breakdowns"
  }, {
    path: "/resources/drills/sambo/leglocks",
    component: _cc2fe35c,
    name: "resources-drills-sambo-leglocks"
  }, {
    path: "/resources/drills/sambo/throws",
    component: _25bc41ff,
    name: "resources-drills-sambo-throws"
  }, {
    path: "/resources/drills/shilleleigh/broadsword",
    component: _50dbf546,
    name: "resources-drills-shilleleigh-broadsword"
  }, {
    path: "/resources/drills/shilleleigh/shortsword",
    component: _8c945152,
    name: "resources-drills-shilleleigh-shortsword"
  }, {
    path: "/resources/drills/shilleleigh/staff",
    component: _8deb4588,
    name: "resources-drills-shilleleigh-staff"
  }, {
    path: "/resources/drills/shilleleigh/stick",
    component: _22e7d18c,
    name: "resources-drills-shilleleigh-stick"
  }, {
    path: "/resources/kata/karate/ananku",
    component: _15cd06ea,
    name: "resources-kata-karate-ananku"
  }, {
    path: "/resources/kata/karate/chinto",
    component: _9bbb8768,
    name: "resources-kata-karate-chinto"
  }, {
    path: "/resources/kata/karate/fukyukata-ichi",
    component: _4dd02f54,
    name: "resources-kata-karate-fukyukata-ichi"
  }, {
    path: "/resources/kata/karate/fukyukata-ni",
    component: _3aec25b4,
    name: "resources-kata-karate-fukyukata-ni"
  }, {
    path: "/resources/kata/karate/fukyukata-san",
    component: _20d61fb7,
    name: "resources-kata-karate-fukyukata-san"
  }, {
    path: "/resources/kata/karate/gojushiho",
    component: _7e289cb1,
    name: "resources-kata-karate-gojushiho"
  }, {
    path: "/resources/kata/karate/jion",
    component: _613646a5,
    name: "resources-kata-karate-jion"
  }, {
    path: "/resources/kata/karate/kusanku",
    component: _365c8aae,
    name: "resources-kata-karate-kusanku"
  }, {
    path: "/resources/kata/karate/naihanchi-nidan",
    component: _212f4b37,
    name: "resources-kata-karate-naihanchi-nidan"
  }, {
    path: "/resources/kata/karate/naihanchi-sandan",
    component: _7a8b1180,
    name: "resources-kata-karate-naihanchi-sandan"
  }, {
    path: "/resources/kata/karate/naihanchi-shodan",
    component: _387aad26,
    name: "resources-kata-karate-naihanchi-shodan"
  }, {
    path: "/resources/kata/karate/nijushiho",
    component: _54d82c04,
    name: "resources-kata-karate-nijushiho"
  }, {
    path: "/resources/kata/karate/passai-dai",
    component: _6df806bf,
    name: "resources-kata-karate-passai-dai"
  }, {
    path: "/resources/kata/karate/passai-sho",
    component: _d8880e26,
    name: "resources-kata-karate-passai-sho"
  }, {
    path: "/resources/kata/karate/pin-an-godan",
    component: _c15f0ff0,
    name: "resources-kata-karate-pin-an-godan"
  }, {
    path: "/resources/kata/karate/pin-an-nidan",
    component: _3de873d5,
    name: "resources-kata-karate-pin-an-nidan"
  }, {
    path: "/resources/kata/karate/pin-an-sandan",
    component: _3d266262,
    name: "resources-kata-karate-pin-an-sandan"
  }, {
    path: "/resources/kata/karate/pin-an-shodan",
    component: _9a32cf70,
    name: "resources-kata-karate-pin-an-shodan"
  }, {
    path: "/resources/kata/karate/pin-an-yondan",
    component: _129d1b2a,
    name: "resources-kata-karate-pin-an-yondan"
  }, {
    path: "/resources/kata/karate/rohai-sho",
    component: _589f692e,
    name: "resources-kata-karate-rohai-sho"
  }, {
    path: "/resources/kata/karate/seisan",
    component: _21f0fe30,
    name: "resources-kata-karate-seisan"
  }, {
    path: "/resources/kata/karate/wansu",
    component: _3526cbe2,
    name: "resources-kata-karate-wansu"
  }, {
    path: "/resources/kata/kobudo/bo-jitsu",
    component: _41ca856c,
    name: "resources-kata-kobudo-bo-jitsu"
  }, {
    path: "/resources/kata/kobudo/bo-nidan",
    component: _7aa234ee,
    name: "resources-kata-kobudo-bo-nidan"
  }, {
    path: "/resources/kata/kobudo/bo-sandan",
    component: _512e272e,
    name: "resources-kata-kobudo-bo-sandan"
  }, {
    path: "/resources/kata/kobudo/bo-shodan",
    component: _722345d8,
    name: "resources-kata-kobudo-bo-shodan"
  }, {
    path: "/resources/kata/kobudo/bo-yondan",
    component: _26a4dff6,
    name: "resources-kata-kobudo-bo-yondan"
  }, {
    path: "/resources/kata/kobudo/bokken-shodan",
    component: _452ba12a,
    name: "resources-kata-kobudo-bokken-shodan"
  }, {
    path: "/resources/kata/kobudo/chatan-yara-no-sai",
    component: _2968f6b0,
    name: "resources-kata-kobudo-chatan-yara-no-sai"
  }, {
    path: "/resources/kata/kobudo/chiken-bo",
    component: _4281f587,
    name: "resources-kata-kobudo-chiken-bo"
  }, {
    path: "/resources/kata/kobudo/eku-kihon-ichi",
    component: _32ba6fe0,
    name: "resources-kata-kobudo-eku-kihon-ichi"
  }, {
    path: "/resources/kata/kobudo/eku-kihon-ni",
    component: _b8748520,
    name: "resources-kata-kobudo-eku-kihon-ni"
  }, {
    path: "/resources/kata/kobudo/eshigu-e-nunti",
    component: _232aa392,
    name: "resources-kata-kobudo-eshigu-e-nunti"
  }, {
    path: "/resources/kata/kobudo/fukyu-no-kon",
    component: _d2736b34,
    name: "resources-kata-kobudo-fukyu-no-kon"
  }, {
    path: "/resources/kata/kobudo/hamahiga-no-kama",
    component: _6b6db724,
    name: "resources-kata-kobudo-hamahiga-no-kama"
  }, {
    path: "/resources/kata/kobudo/hamahiga-no-kon",
    component: _028cc4c0,
    name: "resources-kata-kobudo-hamahiga-no-kon"
  }, {
    path: "/resources/kata/kobudo/hamahiga-no-sai",
    component: _dcd75ede,
    name: "resources-kata-kobudo-hamahiga-no-sai"
  }, {
    path: "/resources/kata/kobudo/hamahiga-no-tonfa",
    component: _271df904,
    name: "resources-kata-kobudo-hamahiga-no-tonfa"
  }, {
    path: "/resources/kata/kobudo/kama-nidan",
    component: _22f103a6,
    name: "resources-kata-kobudo-kama-nidan"
  }, {
    path: "/resources/kata/kobudo/kama-shodan",
    component: _6ef00297,
    name: "resources-kata-kobudo-kama-shodan"
  }, {
    path: "/resources/kata/kobudo/kanegawa-no-nichogama",
    component: _1d42a50a,
    name: "resources-kata-kobudo-kanegawa-no-nichogama"
  }, {
    path: "/resources/kata/kobudo/kanegawa-no-timbe",
    component: _7adf6430,
    name: "resources-kata-kobudo-kanegawa-no-timbe"
  }, {
    path: "/resources/kata/kobudo/kise-no-nitanbo",
    component: _226af541,
    name: "resources-kata-kobudo-kise-no-nitanbo"
  }, {
    path: "/resources/kata/kobudo/odo-no-kama-ni",
    component: _f51dba90,
    name: "resources-kata-kobudo-odo-no-kama-ni"
  }, {
    path: "/resources/kata/kobudo/odo-no-kama-sho",
    component: _32f0c70d,
    name: "resources-kata-kobudo-odo-no-kama-sho"
  }, {
    path: "/resources/kata/kobudo/sai-jitsu",
    component: _722f1bc2,
    name: "resources-kata-kobudo-sai-jitsu"
  }, {
    path: "/resources/kata/kobudo/sai-nidan",
    component: _55c34401,
    name: "resources-kata-kobudo-sai-nidan"
  }, {
    path: "/resources/kata/kobudo/sai-sandan",
    component: _20a597b6,
    name: "resources-kata-kobudo-sai-sandan"
  }, {
    path: "/resources/kata/kobudo/sai-shodan",
    component: _d33464c8,
    name: "resources-kata-kobudo-sai-shodan"
  }, {
    path: "/resources/kata/kobudo/sakugawa-no-kon-dai",
    component: _919bedea,
    name: "resources-kata-kobudo-sakugawa-no-kon-dai"
  }, {
    path: "/resources/kata/kobudo/sakugawa-no-kon-sho",
    component: _4614098e,
    name: "resources-kata-kobudo-sakugawa-no-kon-sho"
  }, {
    path: "/resources/kata/kobudo/soken-no-nunchaku",
    component: _52aef5da,
    name: "resources-kata-kobudo-soken-no-nunchaku"
  }, {
    path: "/resources/kata/kobudo/syushi-no-kon-dai",
    component: _c96c5dfc,
    name: "resources-kata-kobudo-syushi-no-kon-dai"
  }, {
    path: "/resources/kata/kobudo/syushi-no-kon-sho",
    component: _7de479a0,
    name: "resources-kata-kobudo-syushi-no-kon-sho"
  }, {
    path: "/resources/kata/kobudo/tekko-kata",
    component: _35a86a05,
    name: "resources-kata-kobudo-tekko-kata"
  }, {
    path: "/resources/kata/kobudo/terukawa-no-tonfa",
    component: _3fafb6d8,
    name: "resources-kata-kobudo-terukawa-no-tonfa"
  }, {
    path: "/resources/kata/kobudo/tokumine-no-kon",
    component: _6b8bb1a0,
    name: "resources-kata-kobudo-tokumine-no-kon"
  }, {
    path: "/resources/kata/kobudo/tokushin-eku",
    component: _89501298,
    name: "resources-kata-kobudo-tokushin-eku"
  }, {
    path: "/resources/kata/kobudo/tokushin-no-nunti-bo",
    component: _013ac1af,
    name: "resources-kata-kobudo-tokushin-no-nunti-bo"
  }, {
    path: "/resources/kata/kobudo/tonfa-nidan",
    component: _f9141718,
    name: "resources-kata-kobudo-tonfa-nidan"
  }, {
    path: "/resources/kata/kobudo/tonfa-sandan",
    component: _ad6e14ba,
    name: "resources-kata-kobudo-tonfa-sandan"
  }, {
    path: "/resources/kata/kobudo/tonfa-shodan",
    component: _1f092b89,
    name: "resources-kata-kobudo-tonfa-shodan"
  }, {
    path: "/resources/kata/kobudo/tsuken-sunakake-no-kon",
    component: _8111636c,
    name: "resources-kata-kobudo-tsuken-sunakake-no-kon"
  }, {
    path: "/resources/kata/tanren/ananku-tanren",
    component: _23259630,
    name: "resources-kata-tanren-ananku-tanren"
  }, {
    path: "/resources/kata/tanren/gekisaidai-ichi",
    component: _449dfc40,
    name: "resources-kata-tanren-gekisaidai-ichi"
  }, {
    path: "/resources/kata/tanren/gekisaidai-ni",
    component: _3e603da0,
    name: "resources-kata-tanren-gekisaidai-ni"
  }, {
    path: "/resources/kata/tanren/pin-an-nidan-tanren",
    component: _016e615e,
    name: "resources-kata-tanren-pin-an-nidan-tanren"
  }, {
    path: "/resources/kata/tanren/pin-an-shodan-tanren",
    component: _eb4c375a,
    name: "resources-kata-tanren-pin-an-shodan-tanren"
  }, {
    path: "/resources/kata/tanren/seisan-tanren",
    component: _5d747fa3,
    name: "resources-kata-tanren-seisan-tanren"
  }, {
    path: "/resources/kata/tanren/wansu-tanren",
    component: _0a0408ac,
    name: "resources-kata-tanren-wansu-tanren"
  }, {
    path: "/resources/archive/2020/11/25",
    component: _ed0fe3fa,
    name: "resources-archive-2020-11-25"
  }, {
    path: "/resources/archive/2020/11/30",
    component: _ea331dc6,
    name: "resources-archive-2020-11-30"
  }, {
    path: "/resources/archive/2020/12/1",
    component: _3271bb80,
    name: "resources-archive-2020-12-1"
  }, {
    path: "/resources/archive/2020/12/10",
    component: _1bc12ee0,
    name: "resources-archive-2020-12-10"
  }, {
    path: "/resources/archive/2020/12/14",
    component: _1bf98ce4,
    name: "resources-archive-2020-12-14"
  }, {
    path: "/resources/archive/2020/12/15",
    component: _1c07a465,
    name: "resources-archive-2020-12-15"
  }, {
    path: "/resources/archive/2020/12/16",
    component: _1c15bbe6,
    name: "resources-archive-2020-12-16"
  }, {
    path: "/resources/archive/2020/12/2",
    component: _327fd301,
    name: "resources-archive-2020-12-2"
  }, {
    path: "/resources/archive/2020/12/3",
    component: _328dea82,
    name: "resources-archive-2020-12-3"
  }, {
    path: "/resources/archive/2020/12/8",
    component: _32d46007,
    name: "resources-archive-2020-12-8"
  }, {
    path: "/resources/archive/2020/12/9",
    component: _32e27788,
    name: "resources-archive-2020-12-9"
  }, {
    path: "/resources/archive/2021/01/04",
    component: _ff8c4ab4,
    name: "resources-archive-2021-01-04"
  }, {
    path: "/resources/archive/2021/01/05",
    component: _ff701bb2,
    name: "resources-archive-2021-01-05"
  }, {
    path: "/resources/archive/2021/01/06",
    component: _ff53ecb0,
    name: "resources-archive-2021-01-06"
  }, {
    path: "/resources/archive/2021/01/07",
    component: _ff37bdae,
    name: "resources-archive-2021-01-07"
  }, {
    path: "/resources/archive/2021/01/11",
    component: _fc77267c,
    name: "resources-archive-2021-01-11"
  }, {
    path: "/resources/archive/2021/01/26",
    component: _f8808a34,
    name: "resources-archive-2021-01-26"
  }, {
    path: "/resources/archive/2021/01/27",
    component: _f8645b32,
    name: "resources-archive-2021-01-27"
  }, {
    path: "/resources/archive/2021/01/28",
    component: _f8482c30,
    name: "resources-archive-2021-01-28"
  }, {
    path: "/resources/drills/aiki/daito-ryu/aiki-no-jutsu",
    component: _421c7778,
    name: "resources-drills-aiki-daito-ryu-aiki-no-jutsu"
  }, {
    path: "/resources/drills/aiki/daito-ryu/daki-jime",
    component: _66f0bd66,
    name: "resources-drills-aiki-daito-ryu-daki-jime"
  }, {
    path: "/resources/drills/aiki/daito-ryu/daki-jime-dori",
    component: _2c088332,
    name: "resources-drills-aiki-daito-ryu-daki-jime-dori"
  }, {
    path: "/resources/drills/aiki/daito-ryu/emono-dori",
    component: _03fc935a,
    name: "resources-drills-aiki-daito-ryu-emono-dori"
  }, {
    path: "/resources/drills/aiki/daito-ryu/ganseki-otoshi",
    component: _bc2218c2,
    name: "resources-drills-aiki-daito-ryu-ganseki-otoshi"
  }, {
    path: "/resources/drills/aiki/daito-ryu/gasso-dori",
    component: _ca51e274,
    name: "resources-drills-aiki-daito-ryu-gasso-dori"
  }, {
    path: "/resources/drills/aiki/daito-ryu/gokajo",
    component: _156af99a,
    name: "resources-drills-aiki-daito-ryu-gokajo"
  }, {
    path: "/resources/drills/aiki/daito-ryu/gyaku-dasuki",
    component: _96ef7ec6,
    name: "resources-drills-aiki-daito-ryu-gyaku-dasuki"
  }, {
    path: "/resources/drills/aiki/daito-ryu/gyaku-gasso",
    component: _8155e276,
    name: "resources-drills-aiki-daito-ryu-gyaku-gasso"
  }, {
    path: "/resources/drills/aiki/daito-ryu/gyaku-gote",
    component: _8bec168e,
    name: "resources-drills-aiki-daito-ryu-gyaku-gote"
  }, {
    path: "/resources/drills/aiki/daito-ryu/gyaku-ude-dori",
    component: _81be79ce,
    name: "resources-drills-aiki-daito-ryu-gyaku-ude-dori"
  }, {
    path: "/resources/drills/aiki/daito-ryu/hanmi-nage",
    component: _365e9c99,
    name: "resources-drills-aiki-daito-ryu-hanmi-nage"
  }, {
    path: "/resources/drills/aiki/daito-ryu/hiji-gaeshi",
    component: _4ca5318c,
    name: "resources-drills-aiki-daito-ryu-hiji-gaeshi"
  }, {
    path: "/resources/drills/aiki/daito-ryu/hiji-kujiki",
    component: _3bb1f178,
    name: "resources-drills-aiki-daito-ryu-hiji-kujiki"
  }, {
    path: "/resources/drills/aiki/daito-ryu/hiki-otoshi",
    component: _7a5bf47c,
    name: "resources-drills-aiki-daito-ryu-hiki-otoshi"
  }, {
    path: "/resources/drills/aiki/daito-ryu/hiza-jime",
    component: _498852c0,
    name: "resources-drills-aiki-daito-ryu-hiza-jime"
  }, {
    path: "/resources/drills/aiki/daito-ryu/ikkajo",
    component: _1056c7b9,
    name: "resources-drills-aiki-daito-ryu-ikkajo"
  }, {
    path: "/resources/drills/aiki/daito-ryu/ippon-dore-omote",
    component: _11089204,
    name: "resources-drills-aiki-daito-ryu-ippon-dore-omote"
  }, {
    path: "/resources/drills/aiki/daito-ryu/ippon-dori",
    component: _0d62515a,
    name: "resources-drills-aiki-daito-ryu-ippon-dori"
  }, {
    path: "/resources/drills/aiki/daito-ryu/ippon-dori-ura",
    component: _4ad54f2c,
    name: "resources-drills-aiki-daito-ryu-ippon-dori-ura"
  }, {
    path: "/resources/drills/aiki/daito-ryu/irimi-zume",
    component: _59812da0,
    name: "resources-drills-aiki-daito-ryu-irimi-zume"
  }, {
    path: "/resources/drills/aiki/daito-ryu/izori",
    component: _49b11659,
    name: "resources-drills-aiki-daito-ryu-izori"
  }, {
    path: "/resources/drills/aiki/daito-ryu/kakae-kubi",
    component: _49e3bd9e,
    name: "resources-drills-aiki-daito-ryu-kakae-kubi"
  }, {
    path: "/resources/drills/aiki/daito-ryu/karami-nage",
    component: _00fac9fe,
    name: "resources-drills-aiki-daito-ryu-karami-nage"
  }, {
    path: "/resources/drills/aiki/daito-ryu/kata-guruma",
    component: _398e5813,
    name: "resources-drills-aiki-daito-ryu-kata-guruma"
  }, {
    path: "/resources/drills/aiki/daito-ryu/kata-otoshi",
    component: _c3e41450,
    name: "resources-drills-aiki-daito-ryu-kata-otoshi"
  }, {
    path: "/resources/drills/aiki/daito-ryu/kataha-dori",
    component: _3a8ecaf7,
    name: "resources-drills-aiki-daito-ryu-kataha-dori"
  }, {
    path: "/resources/drills/aiki/daito-ryu/katame-zume",
    component: _162ab2c9,
    name: "resources-drills-aiki-daito-ryu-katame-zume"
  }, {
    path: "/resources/drills/aiki/daito-ryu/katate-dori-aiki-nage",
    component: _ef22ff2c,
    name: "resources-drills-aiki-daito-ryu-katate-dori-aiki-nage"
  }, {
    path: "/resources/drills/aiki/daito-ryu/kiri-gaeshi",
    component: _5b57da05,
    name: "resources-drills-aiki-daito-ryu-kiri-gaeshi"
  }, {
    path: "/resources/drills/aiki/daito-ryu/kiriha",
    component: _58fdcaba,
    name: "resources-drills-aiki-daito-ryu-kiriha"
  }, {
    path: "/resources/drills/aiki/daito-ryu/konoha-gaeshi",
    component: _54cdc99c,
    name: "resources-drills-aiki-daito-ryu-konoha-gaeshi"
  }, {
    path: "/resources/drills/aiki/daito-ryu/koshi-guruma",
    component: _7f45b28e,
    name: "resources-drills-aiki-daito-ryu-koshi-guruma"
  }, {
    path: "/resources/drills/aiki/daito-ryu/kote-gaeshi",
    component: _64ca0b45,
    name: "resources-drills-aiki-daito-ryu-kote-gaeshi"
  }, {
    path: "/resources/drills/aiki/daito-ryu/kote-zume",
    component: _2195f34f,
    name: "resources-drills-aiki-daito-ryu-kote-zume"
  }, {
    path: "/resources/drills/aiki/daito-ryu/kubi-hineri",
    component: _735d9b0f,
    name: "resources-drills-aiki-daito-ryu-kubi-hineri"
  }, {
    path: "/resources/drills/aiki/daito-ryu/kubi-juji-shime-aiki-nage",
    component: _e209d758,
    name: "resources-drills-aiki-daito-ryu-kubi-juji-shime-aiki-nage"
  }, {
    path: "/resources/drills/aiki/daito-ryu/kubi-nage",
    component: _c3ed919e,
    name: "resources-drills-aiki-daito-ryu-kubi-nage"
  }, {
    path: "/resources/drills/aiki/daito-ryu/kubiwa",
    component: _308e3bb2,
    name: "resources-drills-aiki-daito-ryu-kubiwa"
  }, {
    path: "/resources/drills/aiki/daito-ryu/kuruma-daoshi",
    component: _2b57ed72,
    name: "resources-drills-aiki-daito-ryu-kuruma-daoshi"
  }, {
    path: "/resources/drills/aiki/daito-ryu/makikomi-kuchiki",
    component: _c157f72e,
    name: "resources-drills-aiki-daito-ryu-makikomi-kuchiki"
  }, {
    path: "/resources/drills/aiki/daito-ryu/makizume",
    component: _b5959d1e,
    name: "resources-drills-aiki-daito-ryu-makizume"
  }, {
    path: "/resources/drills/aiki/daito-ryu/mikajo",
    component: _e04af802,
    name: "resources-drills-aiki-daito-ryu-mikajo"
  }, {
    path: "/resources/drills/aiki/daito-ryu/nikajo",
    component: _3ef73c00,
    name: "resources-drills-aiki-daito-ryu-nikajo"
  }, {
    path: "/resources/drills/aiki/daito-ryu/nikajo-ura-gyaku-dasuki",
    component: _4aba4cd5,
    name: "resources-drills-aiki-daito-ryu-nikajo-ura-gyaku-dasuki"
  }, {
    path: "/resources/drills/aiki/daito-ryu/nukite-dori",
    component: _d7763fc6,
    name: "resources-drills-aiki-daito-ryu-nukite-dori"
  }, {
    path: "/resources/drills/aiki/daito-ryu/obi-otoshi",
    component: _26018d26,
    name: "resources-drills-aiki-daito-ryu-obi-otoshi"
  }, {
    path: "/resources/drills/aiki/daito-ryu/ryo-hiji-gaeshi",
    component: _3b419c75,
    name: "resources-drills-aiki-daito-ryu-ryo-hiji-gaeshi"
  }, {
    path: "/resources/drills/aiki/daito-ryu/ryo-kata-hineri",
    component: _91714c10,
    name: "resources-drills-aiki-daito-ryu-ryo-kata-hineri"
  }, {
    path: "/resources/drills/aiki/daito-ryu/seikujiki",
    component: _53d2fa22,
    name: "resources-drills-aiki-daito-ryu-seikujiki"
  }, {
    path: "/resources/drills/aiki/daito-ryu/sekujiki",
    component: _1e182885,
    name: "resources-drills-aiki-daito-ryu-sekujiki"
  }, {
    path: "/resources/drills/aiki/daito-ryu/seoi-nage",
    component: _26a42916,
    name: "resources-drills-aiki-daito-ryu-seoi-nage"
  }, {
    path: "/resources/drills/aiki/daito-ryu/shiho-nage",
    component: _1b44620f,
    name: "resources-drills-aiki-daito-ryu-shiho-nage"
  }, {
    path: "/resources/drills/aiki/daito-ryu/shihou-nage",
    component: _6be96e68,
    name: "resources-drills-aiki-daito-ryu-shihou-nage"
  }, {
    path: "/resources/drills/aiki/daito-ryu/shime-gaeshi",
    component: _ff7108d4,
    name: "resources-drills-aiki-daito-ryu-shime-gaeshi"
  }, {
    path: "/resources/drills/aiki/daito-ryu/shoto-zume",
    component: _4eee7297,
    name: "resources-drills-aiki-daito-ryu-shoto-zume"
  }, {
    path: "/resources/drills/aiki/daito-ryu/shuto-zume",
    component: _7d1852d1,
    name: "resources-drills-aiki-daito-ryu-shuto-zume"
  }, {
    path: "/resources/drills/aiki/daito-ryu/simoku",
    component: _378136ce,
    name: "resources-drills-aiki-daito-ryu-simoku"
  }, {
    path: "/resources/drills/aiki/daito-ryu/sukui-nage",
    component: _1d336e6d,
    name: "resources-drills-aiki-daito-ryu-sukui-nage"
  }, {
    path: "/resources/drills/aiki/daito-ryu/suso-barai",
    component: _fda259d0,
    name: "resources-drills-aiki-daito-ryu-suso-barai"
  }, {
    path: "/resources/drills/aiki/daito-ryu/suso-dori",
    component: _d059cb16,
    name: "resources-drills-aiki-daito-ryu-suso-dori"
  }, {
    path: "/resources/drills/aiki/daito-ryu/tate-eridori",
    component: _0755859b,
    name: "resources-drills-aiki-daito-ryu-tate-eridori"
  }, {
    path: "/resources/drills/aiki/daito-ryu/tatsumaki",
    component: _87bf6202,
    name: "resources-drills-aiki-daito-ryu-tatsumaki"
  }, {
    path: "/resources/drills/aiki/daito-ryu/tsuki-taoshi",
    component: _e6193512,
    name: "resources-drills-aiki-daito-ryu-tsuki-taoshi"
  }, {
    path: "/resources/drills/aiki/daito-ryu/tsukitaoshi",
    component: _e4758d6c,
    name: "resources-drills-aiki-daito-ryu-tsukitaoshi"
  }, {
    path: "/resources/drills/aiki/daito-ryu/uchi-gote",
    component: _05a40b9b,
    name: "resources-drills-aiki-daito-ryu-uchi-gote"
  }, {
    path: "/resources/drills/aiki/daito-ryu/ura-otoshi",
    component: _3a559f82,
    name: "resources-drills-aiki-daito-ryu-ura-otoshi"
  }, {
    path: "/resources/drills/aiki/daito-ryu/ushiro-ryote-dori-aiki-nage",
    component: _4d7231d6,
    name: "resources-drills-aiki-daito-ryu-ushiro-ryote-dori-aiki-nage"
  }, {
    path: "/resources/drills/aiki/daito-ryu/waki-dori",
    component: _57200c4b,
    name: "resources-drills-aiki-daito-ryu-waki-dori"
  }, {
    path: "/resources/drills/aiki/daito-ryu/yokajo",
    component: _bd87c176,
    name: "resources-drills-aiki-daito-ryu-yokajo"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/buttou",
    component: _85db8d2c,
    name: "resources-drills-aiki-mubyoshi-ryu-buttou"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/byoubugaeshi",
    component: _3346370a,
    name: "resources-drills-aiki-mubyoshi-ryu-byoubugaeshi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/chisai-choutan",
    component: _9e4d255e,
    name: "resources-drills-aiki-mubyoshi-ryu-chisai-choutan"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/enpi",
    component: _0b3f1c53,
    name: "resources-drills-aiki-mubyoshi-ryu-enpi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/fumikaeshi",
    component: _2f3af921,
    name: "resources-drills-aiki-mubyoshi-ryu-fumikaeshi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/furimi",
    component: _747e4d13,
    name: "resources-drills-aiki-mubyoshi-ryu-furimi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/futarimusubi",
    component: _12e8db96,
    name: "resources-drills-aiki-mubyoshi-ryu-futarimusubi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/fuuyou",
    component: _02cf59ec,
    name: "resources-drills-aiki-mubyoshi-ryu-fuuyou"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/gansekiotoshi",
    component: _3c7ec0a6,
    name: "resources-drills-aiki-mubyoshi-ryu-gansekiotoshi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/gyakuho",
    component: _217d0bbf,
    name: "resources-drills-aiki-mubyoshi-ryu-gyakuho"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/hanaremi",
    component: _325af728,
    name: "resources-drills-aiki-mubyoshi-ryu-hanaremi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/hanegaeshi",
    component: _33b3202a,
    name: "resources-drills-aiki-mubyoshi-ryu-hanegaeshi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/hanegaeshi-bo",
    component: _02990c00,
    name: "resources-drills-aiki-mubyoshi-ryu-hanegaeshi-bo"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/hanegarami",
    component: _6b0b0ff4,
    name: "resources-drills-aiki-mubyoshi-ryu-hanegarami"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/hassokutou",
    component: _a98ddfaa,
    name: "resources-drills-aiki-mubyoshi-ryu-hassokutou"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/hien",
    component: _27e4a15b,
    name: "resources-drills-aiki-mubyoshi-ryu-hien"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/hikiotoshi",
    component: _d316944c,
    name: "resources-drills-aiki-mubyoshi-ryu-hikiotoshi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/hikiukeotoshi",
    component: _194a2a8e,
    name: "resources-drills-aiki-mubyoshi-ryu-hikiukeotoshi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/hisshi-sandan-chuu",
    component: _0d0d2727,
    name: "resources-drills-aiki-mubyoshi-ryu-hisshi-sandan-chuu"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/hogaeshi",
    component: _1a1c237e,
    name: "resources-drills-aiki-mubyoshi-ryu-hogaeshi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/hougai",
    component: _c659041c,
    name: "resources-drills-aiki-mubyoshi-ryu-hougai"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/ikada",
    component: _56bae99b,
    name: "resources-drills-aiki-mubyoshi-ryu-ikada"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/ikiaidaore",
    component: _2fbecbe7,
    name: "resources-drills-aiki-mubyoshi-ryu-ikiaidaore"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/junpo",
    component: _8288e7be,
    name: "resources-drills-aiki-mubyoshi-ryu-junpo"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/junrei",
    component: _7490ae64,
    name: "resources-drills-aiki-mubyoshi-ryu-junrei"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/kakahashi",
    component: _56118864,
    name: "resources-drills-aiki-mubyoshi-ryu-kakahashi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/kiteki",
    component: _3f780a1e,
    name: "resources-drills-aiki-mubyoshi-ryu-kiteki"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/kohou",
    component: _b619826e,
    name: "resources-drills-aiki-mubyoshi-ryu-kohou"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/koran",
    component: _c4a9dbcc,
    name: "resources-drills-aiki-mubyoshi-ryu-koran"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/koshihikitsurai",
    component: _6fae995c,
    name: "resources-drills-aiki-mubyoshi-ryu-koshihikitsurai"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/kurumagaeshi",
    component: _1256dbbb,
    name: "resources-drills-aiki-mubyoshi-ryu-kurumagaeshi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/kusaridama-kenyou",
    component: _168af052,
    name: "resources-drills-aiki-mubyoshi-ryu-kusaridama-kenyou"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/kutsugaeshi",
    component: _1e86bcd4,
    name: "resources-drills-aiki-mubyoshi-ryu-kutsugaeshi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/makubishin",
    component: _1b59c530,
    name: "resources-drills-aiki-mubyoshi-ryu-makubishin"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/marumi",
    component: _07f27fe4,
    name: "resources-drills-aiki-mubyoshi-ryu-marumi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/matsukaze",
    component: _17c59c22,
    name: "resources-drills-aiki-mubyoshi-ryu-matsukaze"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/mizukihi",
    component: _9dba72b2,
    name: "resources-drills-aiki-mubyoshi-ryu-mizukihi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/munegarami",
    component: _53e82b96,
    name: "resources-drills-aiki-mubyoshi-ryu-munegarami"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/musubiito",
    component: _5c005cdc,
    name: "resources-drills-aiki-mubyoshi-ryu-musubiito"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/namigaeshi",
    component: _6a7200ee,
    name: "resources-drills-aiki-mubyoshi-ryu-namigaeshi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/namimakura",
    component: _6e32e42d,
    name: "resources-drills-aiki-mubyoshi-ryu-namimakura"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/neho",
    component: _6e813a22,
    name: "resources-drills-aiki-mubyoshi-ryu-neho"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/nukiguchi",
    component: _179c2210,
    name: "resources-drills-aiki-mubyoshi-ryu-nukiguchi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/omokage",
    component: _4cb101a4,
    name: "resources-drills-aiki-mubyoshi-ryu-omokage"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/omomi",
    component: _d70916e8,
    name: "resources-drills-aiki-mubyoshi-ryu-omomi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/ooikakeho",
    component: _78796ddf,
    name: "resources-drills-aiki-mubyoshi-ryu-ooikakeho"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/rouryuu",
    component: _530faf1e,
    name: "resources-drills-aiki-mubyoshi-ryu-rouryuu"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/ryoukidachi-tanbou",
    component: _bacde56e,
    name: "resources-drills-aiki-mubyoshi-ryu-ryoukidachi-tanbou"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/ryuubi",
    component: _4eab5542,
    name: "resources-drills-aiki-mubyoshi-ryu-ryuubi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/sangetsu",
    component: _d9f8ce6e,
    name: "resources-drills-aiki-mubyoshi-ryu-sangetsu"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/sankaku-kore-naka",
    component: _1a82219e,
    name: "resources-drills-aiki-mubyoshi-ryu-sankaku-kore-naka"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/sasen",
    component: _659098a6,
    name: "resources-drills-aiki-mubyoshi-ryu-sasen"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/sashiai",
    component: _39244e26,
    name: "resources-drills-aiki-mubyoshi-ryu-sashiai"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/sashiai-ni",
    component: _2e7cda6a,
    name: "resources-drills-aiki-mubyoshi-ryu-sashiai-ni"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/soumubousou",
    component: _43852c31,
    name: "resources-drills-aiki-mubyoshi-ryu-soumubousou"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/suikyou",
    component: _65daf28c,
    name: "resources-drills-aiki-mubyoshi-ryu-suikyou"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/sutemi",
    component: _4f3b0f40,
    name: "resources-drills-aiki-mubyoshi-ryu-sutemi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/tachigari",
    component: _ca4a7ff2,
    name: "resources-drills-aiki-mubyoshi-ryu-tachigari"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/takiotoshi",
    component: _8e7c1574,
    name: "resources-drills-aiki-mubyoshi-ryu-takiotoshi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/teki-no-kore-kasa",
    component: _ae60d22a,
    name: "resources-drills-aiki-mubyoshi-ryu-teki-no-kore-kasa"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/tokogaeshi",
    component: _e1c60bce,
    name: "resources-drills-aiki-mubyoshi-ryu-tokogaeshi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/towaki",
    component: _989b9058,
    name: "resources-drills-aiki-mubyoshi-ryu-towaki"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/tsuki-nin-shiho",
    component: _0f44cb72,
    name: "resources-drills-aiki-mubyoshi-ryu-tsuki-nin-shiho"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/tsumateho",
    component: _6bf609fe,
    name: "resources-drills-aiki-mubyoshi-ryu-tsumateho"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/ukifune",
    component: _e32f3a10,
    name: "resources-drills-aiki-mubyoshi-ryu-ukifune"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/uranami",
    component: _945163dc,
    name: "resources-drills-aiki-mubyoshi-ryu-uranami"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/usen",
    component: _7f523938,
    name: "resources-drills-aiki-mubyoshi-ryu-usen"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/ushi",
    component: _f7ab64e0,
    name: "resources-drills-aiki-mubyoshi-ryu-ushi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/yorimi",
    component: _1c57185a,
    name: "resources-drills-aiki-mubyoshi-ryu-yorimi"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/yumemakura",
    component: _71644512,
    name: "resources-drills-aiki-mubyoshi-ryu-yumemakura"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/yumiteho",
    component: _fe35ad3e,
    name: "resources-drills-aiki-mubyoshi-ryu-yumiteho"
  }, {
    path: "/resources/drills/aiki/mubyoshi-ryu/yuuhikigaeshi",
    component: _151f3b40,
    name: "resources-drills-aiki-mubyoshi-ryu-yuuhikigaeshi"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/ainuki",
    component: _709dd742,
    name: "resources-drills-aiki-mukaku-ryu-ainuki"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/bichuuken",
    component: _d0a897ba,
    name: "resources-drills-aiki-mukaku-ryu-bichuuken"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/chuuseiken",
    component: _bfd9e552,
    name: "resources-drills-aiki-mukaku-ryu-chuuseiken"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/enkai",
    component: _487b64e5,
    name: "resources-drills-aiki-mukaku-ryu-enkai"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/enpi",
    component: _6db58252,
    name: "resources-drills-aiki-mukaku-ryu-enpi"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/hien",
    component: _346a7842,
    name: "resources-drills-aiki-mukaku-ryu-hien"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/hiryuu",
    component: _b911c046,
    name: "resources-drills-aiki-mukaku-ryu-hiryuu"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/kaerimi",
    component: _03dab7fd,
    name: "resources-drills-aiki-mukaku-ryu-kaerimi"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/kakegiri",
    component: _18da583e,
    name: "resources-drills-aiki-mukaku-ryu-kakegiri"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/kasumigiri",
    component: _e4889cbc,
    name: "resources-drills-aiki-mukaku-ryu-kasumigiri"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/kenshouken",
    component: _a434204c,
    name: "resources-drills-aiki-mukaku-ryu-kenshouken"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/kotezume",
    component: _089cc946,
    name: "resources-drills-aiki-mukaku-ryu-kotezume"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/kumotsuke",
    component: _e77ceb02,
    name: "resources-drills-aiki-mukaku-ryu-kumotsuke"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/manshouken",
    component: _90d52dd8,
    name: "resources-drills-aiki-mukaku-ryu-manshouken"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/migikiri-hidarikiri",
    component: _13b0e11f,
    name: "resources-drills-aiki-mukaku-ryu-migikiri-hidarikiri"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/ouzume",
    component: _bcd2aea4,
    name: "resources-drills-aiki-mukaku-ryu-ouzume"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/raikou",
    component: _1319a428,
    name: "resources-drills-aiki-mukaku-ryu-raikou"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/saishouken",
    component: _4760301a,
    name: "resources-drills-aiki-mukaku-ryu-saishouken"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/sanpougiri",
    component: _69825c44,
    name: "resources-drills-aiki-mukaku-ryu-sanpougiri"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/sanseiken",
    component: _1a0f1050,
    name: "resources-drills-aiki-mukaku-ryu-sanseiken"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/seikiken",
    component: _5ea84bb4,
    name: "resources-drills-aiki-mukaku-ryu-seikiken"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/shichiyouken",
    component: _764a793a,
    name: "resources-drills-aiki-mukaku-ryu-shichiyouken"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/shinmyouken",
    component: _23893fba,
    name: "resources-drills-aiki-mukaku-ryu-shinmyouken"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/surinuki",
    component: _3d5a62f3,
    name: "resources-drills-aiki-mukaku-ryu-surinuki"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/tappi",
    component: _57b30f92,
    name: "resources-drills-aiki-mukaku-ryu-tappi"
  }, {
    path: "/resources/drills/aiki/mukaku-ryu/unryuu",
    component: _1eefed16,
    name: "resources-drills-aiki-mukaku-ryu-unryuu"
  }, {
    path: "/resources/drills/judo/chokes/gyaku-juji-jime",
    component: _fd84946a,
    name: "resources-drills-judo-chokes-gyaku-juji-jime"
  }, {
    path: "/resources/drills/judo/chokes/hadaka-jime",
    component: _20478abd,
    name: "resources-drills-judo-chokes-hadaka-jime"
  }, {
    path: "/resources/drills/judo/chokes/kata-ha-jime",
    component: _602e8aa8,
    name: "resources-drills-judo-chokes-kata-ha-jime"
  }, {
    path: "/resources/drills/judo/chokes/kata-juji-jime",
    component: _87c3ee8a,
    name: "resources-drills-judo-chokes-kata-juji-jime"
  }, {
    path: "/resources/drills/judo/chokes/kata-te-jime",
    component: _c8723f98,
    name: "resources-drills-judo-chokes-kata-te-jime"
  }, {
    path: "/resources/drills/judo/chokes/nami-juji-jime",
    component: _a49c1ff2,
    name: "resources-drills-judo-chokes-nami-juji-jime"
  }, {
    path: "/resources/drills/judo/chokes/okuri-eri-jime",
    component: _14fa1e10,
    name: "resources-drills-judo-chokes-okuri-eri-jime"
  }, {
    path: "/resources/drills/judo/chokes/ryo-te-jime",
    component: _e73f549a,
    name: "resources-drills-judo-chokes-ryo-te-jime"
  }, {
    path: "/resources/drills/judo/chokes/sankaku-jime",
    component: _46e3b6ef,
    name: "resources-drills-judo-chokes-sankaku-jime"
  }, {
    path: "/resources/drills/judo/chokes/sode-guruma-jime",
    component: _4e76bd3a,
    name: "resources-drills-judo-chokes-sode-guruma-jime"
  }, {
    path: "/resources/drills/judo/chokes/tsukkomi-jime",
    component: _dc099858,
    name: "resources-drills-judo-chokes-tsukkomi-jime"
  }, {
    path: "/resources/drills/judo/foot/ashi-guruma",
    component: _14f39f45,
    name: "resources-drills-judo-foot-ashi-guruma"
  }, {
    path: "/resources/drills/judo/foot/deashi-harai",
    component: _729eec9c,
    name: "resources-drills-judo-foot-deashi-harai"
  }, {
    path: "/resources/drills/judo/foot/hane-goshi-gaeshi",
    component: _0781abcd,
    name: "resources-drills-judo-foot-hane-goshi-gaeshi"
  }, {
    path: "/resources/drills/judo/foot/harai-goshi-gaeshi",
    component: _fc74fe00,
    name: "resources-drills-judo-foot-harai-goshi-gaeshi"
  }, {
    path: "/resources/drills/judo/foot/harai-tsurikomi-ashi",
    component: _eed0bd6e,
    name: "resources-drills-judo-foot-harai-tsurikomi-ashi"
  }, {
    path: "/resources/drills/judo/foot/hiza-guruma",
    component: _3ef2f0f0,
    name: "resources-drills-judo-foot-hiza-guruma"
  }, {
    path: "/resources/drills/judo/foot/kosoto-gake",
    component: _1c78c96c,
    name: "resources-drills-judo-foot-kosoto-gake"
  }, {
    path: "/resources/drills/judo/foot/kosoto-gari",
    component: _28a313c9,
    name: "resources-drills-judo-foot-kosoto-gari"
  }, {
    path: "/resources/drills/judo/foot/kouchi-gari",
    component: _16374ede,
    name: "resources-drills-judo-foot-kouchi-gari"
  }, {
    path: "/resources/drills/judo/foot/o-guruma",
    component: _0834e72d,
    name: "resources-drills-judo-foot-o-guruma"
  }, {
    path: "/resources/drills/judo/foot/okuriashi-harai",
    component: _be49fc46,
    name: "resources-drills-judo-foot-okuriashi-harai"
  }, {
    path: "/resources/drills/judo/foot/osoto-gaeshi",
    component: _25fc027a,
    name: "resources-drills-judo-foot-osoto-gaeshi"
  }, {
    path: "/resources/drills/judo/foot/osoto-gari",
    component: _22e3d742,
    name: "resources-drills-judo-foot-osoto-gari"
  }, {
    path: "/resources/drills/judo/foot/osoto-guruma",
    component: _73a7eb76,
    name: "resources-drills-judo-foot-osoto-guruma"
  }, {
    path: "/resources/drills/judo/foot/osoto-otoshi",
    component: _4fb0ed8a,
    name: "resources-drills-judo-foot-osoto-otoshi"
  }, {
    path: "/resources/drills/judo/foot/ouchi-gaeshi",
    component: _3201957c,
    name: "resources-drills-judo-foot-ouchi-gaeshi"
  }, {
    path: "/resources/drills/judo/foot/ouchi-gari",
    component: _21b5c7ec,
    name: "resources-drills-judo-foot-ouchi-gari"
  }, {
    path: "/resources/drills/judo/foot/sasae-tsurikomi-ashi",
    component: _44a72601,
    name: "resources-drills-judo-foot-sasae-tsurikomi-ashi"
  }, {
    path: "/resources/drills/judo/foot/tsubame-gaeshi",
    component: _15e53973,
    name: "resources-drills-judo-foot-tsubame-gaeshi"
  }, {
    path: "/resources/drills/judo/foot/uchimata",
    component: _fb7fb7cc,
    name: "resources-drills-judo-foot-uchimata"
  }, {
    path: "/resources/drills/judo/hand/ippon-seoi-nage",
    component: _248b1412,
    name: "resources-drills-judo-hand-ippon-seoi-nage"
  }, {
    path: "/resources/drills/judo/hand/kata-guruma",
    component: _03d72c58,
    name: "resources-drills-judo-hand-kata-guruma"
  }, {
    path: "/resources/drills/judo/hand/kibisu-gaeshi",
    component: _1eb1ba14,
    name: "resources-drills-judo-hand-kibisu-gaeshi"
  }, {
    path: "/resources/drills/judo/hand/kuchiki-taoshi",
    component: _6d67e472,
    name: "resources-drills-judo-hand-kuchiki-taoshi"
  }, {
    path: "/resources/drills/judo/hand/morote-gari",
    component: _8aefb69a,
    name: "resources-drills-judo-hand-morote-gari"
  }, {
    path: "/resources/drills/judo/hand/obi-otoshi",
    component: _cf0128e8,
    name: "resources-drills-judo-hand-obi-otoshi"
  }, {
    path: "/resources/drills/judo/hand/obi-tori-gaeshi",
    component: _46752472,
    name: "resources-drills-judo-hand-obi-tori-gaeshi"
  }, {
    path: "/resources/drills/judo/hand/seoi-nage",
    component: _5d5491d2,
    name: "resources-drills-judo-hand-seoi-nage"
  }, {
    path: "/resources/drills/judo/hand/seoi-otoshi",
    component: _4de48a90,
    name: "resources-drills-judo-hand-seoi-otoshi"
  }, {
    path: "/resources/drills/judo/hand/sukui-nage",
    component: _6e98bee8,
    name: "resources-drills-judo-hand-sukui-nage"
  }, {
    path: "/resources/drills/judo/hand/sumi-otoshi",
    component: _e289d104,
    name: "resources-drills-judo-hand-sumi-otoshi"
  }, {
    path: "/resources/drills/judo/hand/tai-otoshi",
    component: _13515526,
    name: "resources-drills-judo-hand-tai-otoshi"
  }, {
    path: "/resources/drills/judo/hand/uchimata-sukashi",
    component: _b5daecec,
    name: "resources-drills-judo-hand-uchimata-sukashi"
  }, {
    path: "/resources/drills/judo/hand/uki-otoshi",
    component: _464d5fcf,
    name: "resources-drills-judo-hand-uki-otoshi"
  }, {
    path: "/resources/drills/judo/hand/yama-arashi",
    component: _d7bdb08c,
    name: "resources-drills-judo-hand-yama-arashi"
  }, {
    path: "/resources/drills/judo/hip/hane-goshi",
    component: _48719952,
    name: "resources-drills-judo-hip-hane-goshi"
  }, {
    path: "/resources/drills/judo/hip/harai-goshi",
    component: _18b8d126,
    name: "resources-drills-judo-hip-harai-goshi"
  }, {
    path: "/resources/drills/judo/hip/koshi-guruma",
    component: _41e38285,
    name: "resources-drills-judo-hip-koshi-guruma"
  }, {
    path: "/resources/drills/judo/hip/o-goshi",
    component: _af39c74a,
    name: "resources-drills-judo-hip-o-goshi"
  }, {
    path: "/resources/drills/judo/hip/sode-tsurikomi-goshi",
    component: _b429a202,
    name: "resources-drills-judo-hip-sode-tsurikomi-goshi"
  }, {
    path: "/resources/drills/judo/hip/tsuri-goshi",
    component: _59d9ce79,
    name: "resources-drills-judo-hip-tsuri-goshi"
  }, {
    path: "/resources/drills/judo/hip/tsurikomi-goshi",
    component: _bee7010e,
    name: "resources-drills-judo-hip-tsurikomi-goshi"
  }, {
    path: "/resources/drills/judo/hip/uki-goshi",
    component: _1613223f,
    name: "resources-drills-judo-hip-uki-goshi"
  }, {
    path: "/resources/drills/judo/hip/ushiro-goshi",
    component: _3d4ae9be,
    name: "resources-drills-judo-hip-ushiro-goshi"
  }, {
    path: "/resources/drills/judo/hip/utsuri-goshi",
    component: _0713c94c,
    name: "resources-drills-judo-hip-utsuri-goshi"
  }, {
    path: "/resources/drills/judo/holds/kami-shiho-gatame",
    component: _10949ef4,
    name: "resources-drills-judo-holds-kami-shiho-gatame"
  }, {
    path: "/resources/drills/judo/holds/kata-gatame",
    component: _5e61a171,
    name: "resources-drills-judo-holds-kata-gatame"
  }, {
    path: "/resources/drills/judo/holds/kese-gatame",
    component: _161c56e8,
    name: "resources-drills-judo-holds-kese-gatame"
  }, {
    path: "/resources/drills/judo/holds/kuzure-kami-shiho-gatame",
    component: _32b8301f,
    name: "resources-drills-judo-holds-kuzure-kami-shiho-gatame"
  }, {
    path: "/resources/drills/judo/holds/kuzure-kese-gatame",
    component: _8c3a375a,
    name: "resources-drills-judo-holds-kuzure-kese-gatame"
  }, {
    path: "/resources/drills/judo/holds/tate-shiho-gatame",
    component: _0f566448,
    name: "resources-drills-judo-holds-tate-shiho-gatame"
  }, {
    path: "/resources/drills/judo/holds/uki-gatame",
    component: _bc27997e,
    name: "resources-drills-judo-holds-uki-gatame"
  }, {
    path: "/resources/drills/judo/holds/ushiro-kesa-gatame",
    component: _072e9b4a,
    name: "resources-drills-judo-holds-ushiro-kesa-gatame"
  }, {
    path: "/resources/drills/judo/holds/yoko-shiho-gatame",
    component: _6be24e6c,
    name: "resources-drills-judo-holds-yoko-shiho-gatame"
  }, {
    path: "/resources/drills/judo/locks/ude-garami",
    component: _f52becd0,
    name: "resources-drills-judo-locks-ude-garami"
  }, {
    path: "/resources/drills/judo/locks/ude-hishigi-ashi-gatame",
    component: _466f55be,
    name: "resources-drills-judo-locks-ude-hishigi-ashi-gatame"
  }, {
    path: "/resources/drills/judo/locks/ude-hishigi-hara-gatame",
    component: _252fb32e,
    name: "resources-drills-judo-locks-ude-hishigi-hara-gatame"
  }, {
    path: "/resources/drills/judo/locks/ude-hishigi-hiza-gatame",
    component: _706ea769,
    name: "resources-drills-judo-locks-ude-hishigi-hiza-gatame"
  }, {
    path: "/resources/drills/judo/locks/ude-hishigi-juji-gatame",
    component: _0fe7b247,
    name: "resources-drills-judo-locks-ude-hishigi-juji-gatame"
  }, {
    path: "/resources/drills/judo/locks/ude-hishigi-sankaku-gatame",
    component: _0d2f9292,
    name: "resources-drills-judo-locks-ude-hishigi-sankaku-gatame"
  }, {
    path: "/resources/drills/judo/locks/ude-hishigi-te-gatame",
    component: _14e4ff00,
    name: "resources-drills-judo-locks-ude-hishigi-te-gatame"
  }, {
    path: "/resources/drills/judo/locks/ude-hishigi-ude-gatame",
    component: _b2b3d83e,
    name: "resources-drills-judo-locks-ude-hishigi-ude-gatame"
  }, {
    path: "/resources/drills/judo/locks/ude-hishigi-waki-gatame",
    component: _2d8944ae,
    name: "resources-drills-judo-locks-ude-hishigi-waki-gatame"
  }, {
    path: "/resources/drills/judo/rear/hikikomi-gaeshi",
    component: _65bc3067,
    name: "resources-drills-judo-rear-hikikomi-gaeshi"
  }, {
    path: "/resources/drills/judo/rear/sumi-gaeshi",
    component: _4763e828,
    name: "resources-drills-judo-rear-sumi-gaeshi"
  }, {
    path: "/resources/drills/judo/rear/tamoe-nage",
    component: _7a13cd08,
    name: "resources-drills-judo-rear-tamoe-nage"
  }, {
    path: "/resources/drills/judo/rear/tani-otoshi",
    component: _c6cbc182,
    name: "resources-drills-judo-rear-tani-otoshi"
  }, {
    path: "/resources/drills/judo/rear/tawara-gaeshi",
    component: _92358b80,
    name: "resources-drills-judo-rear-tawara-gaeshi"
  }, {
    path: "/resources/drills/judo/rear/uchi-makikomi",
    component: _02866440,
    name: "resources-drills-judo-rear-uchi-makikomi"
  }, {
    path: "/resources/drills/judo/rear/uchi-mata-makikomi",
    component: _33955f80,
    name: "resources-drills-judo-rear-uchi-mata-makikomi"
  }, {
    path: "/resources/drills/judo/rear/ura-nage",
    component: _260802da,
    name: "resources-drills-judo-rear-ura-nage"
  }, {
    path: "/resources/drills/judo/side/daki-wakare",
    component: _b328333c,
    name: "resources-drills-judo-side-daki-wakare"
  }, {
    path: "/resources/drills/judo/side/hane-makikomi",
    component: _7d81a48c,
    name: "resources-drills-judo-side-hane-makikomi"
  }, {
    path: "/resources/drills/judo/side/harai-makikome",
    component: _7f92b9a6,
    name: "resources-drills-judo-side-harai-makikome"
  }, {
    path: "/resources/drills/judo/side/kouchi-makikomi",
    component: _4092d929,
    name: "resources-drills-judo-side-kouchi-makikomi"
  }, {
    path: "/resources/drills/judo/side/osoto-makikomi",
    component: _1e23cf0c,
    name: "resources-drills-judo-side-osoto-makikomi"
  }, {
    path: "/resources/drills/judo/side/soto-makikomi",
    component: _3896ae85,
    name: "resources-drills-judo-side-soto-makikomi"
  }, {
    path: "/resources/drills/judo/side/uki-waza",
    component: _ce08fec4,
    name: "resources-drills-judo-side-uki-waza"
  }, {
    path: "/resources/drills/judo/side/yoko-gake",
    component: _00f9ce04,
    name: "resources-drills-judo-side-yoko-gake"
  }, {
    path: "/resources/drills/judo/side/yoko-guruma",
    component: _62473e56,
    name: "resources-drills-judo-side-yoko-guruma"
  }, {
    path: "/resources/drills/judo/side/yoko-otoshi",
    component: _335bfe9a,
    name: "resources-drills-judo-side-yoko-otoshi"
  }, {
    path: "/resources/drills/judo/side/yoko-wakare",
    component: _e492f6ba,
    name: "resources-drills-judo-side-yoko-wakare"
  }, {
    path: "/resources/drills/mcmap/black/chokes",
    component: _292a4cd8,
    name: "resources-drills-mcmap-black-chokes"
  }, {
    path: "/resources/drills/mcmap/black/ground",
    component: _80bd3308,
    name: "resources-drills-mcmap-black-ground"
  }, {
    path: "/resources/drills/mcmap/black/guns",
    component: _8513a0e0,
    name: "resources-drills-mcmap-black-guns"
  }, {
    path: "/resources/drills/mcmap/black/neck-crank",
    component: _20bb6d60,
    name: "resources-drills-mcmap-black-neck-crank"
  }, {
    path: "/resources/drills/mcmap/black/opportunity",
    component: _19ce4e5e,
    name: "resources-drills-mcmap-black-opportunity"
  }, {
    path: "/resources/drills/mcmap/black/sweeping-hip-throw",
    component: _037641d0,
    name: "resources-drills-mcmap-black-sweeping-hip-throw"
  }, {
    path: "/resources/drills/mcmap/black/upper",
    component: _5830de6f,
    name: "resources-drills-mcmap-black-upper"
  }, {
    path: "/resources/drills/mcmap/brown/bayonet",
    component: _6d7ac360,
    name: "resources-drills-mcmap-brown-bayonet"
  }, {
    path: "/resources/drills/mcmap/brown/ground",
    component: _ea183836,
    name: "resources-drills-mcmap-brown-ground"
  }, {
    path: "/resources/drills/mcmap/brown/guns",
    component: _12eaf339,
    name: "resources-drills-mcmap-brown-guns"
  }, {
    path: "/resources/drills/mcmap/brown/knife",
    component: _e94fa3fa,
    name: "resources-drills-mcmap-brown-knife"
  }, {
    path: "/resources/drills/mcmap/brown/outside-reap-throw",
    component: _9532f4ce,
    name: "resources-drills-mcmap-brown-outside-reap-throw"
  }, {
    path: "/resources/drills/mcmap/brown/unarmed-manipulation",
    component: _081a24c4,
    name: "resources-drills-mcmap-brown-unarmed-manipulation"
  }, {
    path: "/resources/drills/mcmap/green/ground",
    component: _530120f8,
    name: "resources-drills-mcmap-green-ground"
  }, {
    path: "/resources/drills/mcmap/green/knife",
    component: _36f58290,
    name: "resources-drills-mcmap-green-knife"
  }, {
    path: "/resources/drills/mcmap/green/lower-strikes",
    component: _2419fb7c,
    name: "resources-drills-mcmap-green-lower-strikes"
  }, {
    path: "/resources/drills/mcmap/green/offline-buttstroke",
    component: _29203378,
    name: "resources-drills-mcmap-green-offline-buttstroke"
  }, {
    path: "/resources/drills/mcmap/green/opportunity",
    component: _02cbc162,
    name: "resources-drills-mcmap-green-opportunity"
  }, {
    path: "/resources/drills/mcmap/green/shoulder-throw",
    component: _32b89988,
    name: "resources-drills-mcmap-green-shoulder-throw"
  }, {
    path: "/resources/drills/mcmap/green/side-choke",
    component: _0545ed5e,
    name: "resources-drills-mcmap-green-side-choke"
  }, {
    path: "/resources/drills/mcmap/green/strike-counters",
    component: _df2f58ba,
    name: "resources-drills-mcmap-green-strike-counters"
  }, {
    path: "/resources/drills/mcmap/green/unarmed-manipulation",
    component: _29018497,
    name: "resources-drills-mcmap-green-unarmed-manipulation"
  }, {
    path: "/resources/drills/mcmap/grey/armed-manipulation",
    component: _165d84c4,
    name: "resources-drills-mcmap-grey-armed-manipulation"
  }, {
    path: "/resources/drills/mcmap/grey/bayonet",
    component: _5922038e,
    name: "resources-drills-mcmap-grey-bayonet"
  }, {
    path: "/resources/drills/mcmap/grey/choke-counters",
    component: _185e0ab3,
    name: "resources-drills-mcmap-grey-choke-counters"
  }, {
    path: "/resources/drills/mcmap/grey/front-choke",
    component: _2a22eabe,
    name: "resources-drills-mcmap-grey-front-choke"
  }, {
    path: "/resources/drills/mcmap/grey/ground",
    component: _4edf2c28,
    name: "resources-drills-mcmap-grey-ground"
  }, {
    path: "/resources/drills/mcmap/grey/hip-throw",
    component: _5a808929,
    name: "resources-drills-mcmap-grey-hip-throw"
  }, {
    path: "/resources/drills/mcmap/grey/knife",
    component: _b2c169c8,
    name: "resources-drills-mcmap-grey-knife"
  }, {
    path: "/resources/drills/mcmap/grey/lower",
    component: _9ca00d80,
    name: "resources-drills-mcmap-grey-lower"
  }, {
    path: "/resources/drills/mcmap/grey/opportunity",
    component: _1be7f0ee,
    name: "resources-drills-mcmap-grey-opportunity"
  }, {
    path: "/resources/drills/mcmap/grey/strike-counters",
    component: _5989dd2f,
    name: "resources-drills-mcmap-grey-strike-counters"
  }, {
    path: "/resources/drills/mcmap/grey/unarmed-manipulation",
    component: _b957daea,
    name: "resources-drills-mcmap-grey-unarmed-manipulation"
  }, {
    path: "/resources/drills/mcmap/grey/upper",
    component: _66c8a602,
    name: "resources-drills-mcmap-grey-upper"
  }, {
    path: "/resources/drills/mcmap/tan/armed-manipulation",
    component: _1c78fb72,
    name: "resources-drills-mcmap-tan-armed-manipulation"
  }, {
    path: "/resources/drills/mcmap/tan/bayonet",
    component: _9fca2f6a,
    name: "resources-drills-mcmap-tan-bayonet"
  }, {
    path: "/resources/drills/mcmap/tan/breakfalls",
    component: _32f95cb0,
    name: "resources-drills-mcmap-tan-breakfalls"
  }, {
    path: "/resources/drills/mcmap/tan/choke-counters",
    component: _53a7ef3e,
    name: "resources-drills-mcmap-tan-choke-counters"
  }, {
    path: "/resources/drills/mcmap/tan/chokes",
    component: _af412e9c,
    name: "resources-drills-mcmap-tan-chokes"
  }, {
    path: "/resources/drills/mcmap/tan/knife",
    component: _0f0291ae,
    name: "resources-drills-mcmap-tan-knife"
  }, {
    path: "/resources/drills/mcmap/tan/legsweep",
    component: _5acfa43f,
    name: "resources-drills-mcmap-tan-legsweep"
  }, {
    path: "/resources/drills/mcmap/tan/lower",
    component: _1a133fd2,
    name: "resources-drills-mcmap-tan-lower"
  }, {
    path: "/resources/drills/mcmap/tan/strike-counters",
    component: _557b9541,
    name: "resources-drills-mcmap-tan-strike-counters"
  }, {
    path: "/resources/drills/mcmap/tan/unarmed-manipulation",
    component: _df26d48e,
    name: "resources-drills-mcmap-tan-unarmed-manipulation"
  }, {
    path: "/resources/drills/mcmap/tan/upper",
    component: _34fef391,
    name: "resources-drills-mcmap-tan-upper"
  }, {
    path: "/resources/drills/osmkkf/basics/blackbelt",
    component: _69e63152,
    name: "resources-drills-osmkkf-basics-blackbelt"
  }, {
    path: "/resources/drills/osmkkf/basics/bo",
    component: _2275a035,
    name: "resources-drills-osmkkf-basics-bo"
  }, {
    path: "/resources/drills/osmkkf/basics/kama",
    component: _efc9b25c,
    name: "resources-drills-osmkkf-basics-kama"
  }, {
    path: "/resources/drills/osmkkf/basics/kyu-rank",
    component: _5638e24c,
    name: "resources-drills-osmkkf-basics-kyu-rank"
  }, {
    path: "/resources/drills/osmkkf/basics/sai",
    component: _ca7999ba,
    name: "resources-drills-osmkkf-basics-sai"
  }, {
    path: "/resources/drills/osmkkf/basics/tonfa",
    component: _bfc301d4,
    name: "resources-drills-osmkkf-basics-tonfa"
  }, {
    path: "/resources/drills/osmkkf/ippon-kumite/black-belt-ippon-kumite",
    component: _146ffda1,
    name: "resources-drills-osmkkf-ippon-kumite-black-belt-ippon-kumite"
  }, {
    path: "/resources/drills/osmkkf/ippon-kumite/blue-belt-ippon-kumite",
    component: _3d9f532a,
    name: "resources-drills-osmkkf-ippon-kumite-blue-belt-ippon-kumite"
  }, {
    path: "/resources/drills/osmkkf/ippon-kumite/bo-tai-bo-1",
    component: _a5ec30da,
    name: "resources-drills-osmkkf-ippon-kumite-bo-tai-bo-1"
  }, {
    path: "/resources/drills/osmkkf/ippon-kumite/bo-tai-bo-2",
    component: _a5d001d8,
    name: "resources-drills-osmkkf-ippon-kumite-bo-tai-bo-2"
  }, {
    path: "/resources/drills/osmkkf/ippon-kumite/bo-tai-bo-3",
    component: _a5b3d2d6,
    name: "resources-drills-osmkkf-ippon-kumite-bo-tai-bo-3"
  }, {
    path: "/resources/drills/osmkkf/ippon-kumite/bo-tai-kama",
    component: _41906468,
    name: "resources-drills-osmkkf-ippon-kumite-bo-tai-kama"
  }, {
    path: "/resources/drills/osmkkf/ippon-kumite/bo-tai-sai",
    component: _934e762e,
    name: "resources-drills-osmkkf-ippon-kumite-bo-tai-sai"
  }, {
    path: "/resources/drills/osmkkf/ippon-kumite/bo-tai-tonfa",
    component: _2c96b75c,
    name: "resources-drills-osmkkf-ippon-kumite-bo-tai-tonfa"
  }, {
    path: "/resources/drills/osmkkf/ippon-kumite/brown-belt-ippon-kumite",
    component: _2e3fc8d0,
    name: "resources-drills-osmkkf-ippon-kumite-brown-belt-ippon-kumite"
  }, {
    path: "/resources/drills/osmkkf/ippon-kumite/green-belt-ippon-kumite",
    component: _257661a5,
    name: "resources-drills-osmkkf-ippon-kumite-green-belt-ippon-kumite"
  }, {
    path: "/resources/drills/osmkkf/ippon-kumite/white-belt-ippon-kumite",
    component: _3db7436a,
    name: "resources-drills-osmkkf-ippon-kumite-white-belt-ippon-kumite"
  }, {
    path: "/resources/drills/osmkkf/koteatei/1",
    component: _6861eef2,
    name: "resources-drills-osmkkf-koteatei-1"
  }, {
    path: "/resources/drills/osmkkf/koteatei/2",
    component: _68700673,
    name: "resources-drills-osmkkf-koteatei-2"
  }, {
    path: "/resources/drills/osmkkf/koteatei/3",
    component: _687e1df4,
    name: "resources-drills-osmkkf-koteatei-3"
  }, {
    path: "/resources/drills/osmkkf/tuite/1-dan-tuite",
    component: _d744a7aa,
    name: "resources-drills-osmkkf-tuite-1-dan-tuite"
  }, {
    path: "/resources/drills/osmkkf/tuite/1-kyu-tuite",
    component: _3649843e,
    name: "resources-drills-osmkkf-tuite-1-kyu-tuite"
  }, {
    path: "/resources/drills/osmkkf/tuite/10-kyu-tuite",
    component: _64dc32ab,
    name: "resources-drills-osmkkf-tuite-10-kyu-tuite"
  }, {
    path: "/resources/drills/osmkkf/tuite/2-dan-tuite",
    component: _238dd328,
    name: "resources-drills-osmkkf-tuite-2-dan-tuite"
  }, {
    path: "/resources/drills/osmkkf/tuite/2-kyu-tuite",
    component: _3eb6a822,
    name: "resources-drills-osmkkf-tuite-2-kyu-tuite"
  }, {
    path: "/resources/drills/osmkkf/tuite/3-dan-tuite",
    component: _481480ad,
    name: "resources-drills-osmkkf-tuite-3-dan-tuite"
  }, {
    path: "/resources/drills/osmkkf/tuite/3-kyu-tuite",
    component: _cedbdb3a,
    name: "resources-drills-osmkkf-tuite-3-kyu-tuite"
  }, {
    path: "/resources/drills/osmkkf/tuite/4-kyu-tuite",
    component: _1b2506b8,
    name: "resources-drills-osmkkf-tuite-4-kyu-tuite"
  }, {
    path: "/resources/drills/osmkkf/tuite/5-kyu-tuite",
    component: _4c48e6e5,
    name: "resources-drills-osmkkf-tuite-5-kyu-tuite"
  }, {
    path: "/resources/drills/osmkkf/tuite/6-kyu-tuite",
    component: _b3b75db4,
    name: "resources-drills-osmkkf-tuite-6-kyu-tuite"
  }, {
    path: "/resources/drills/osmkkf/tuite/7-kyu-tuite",
    component: _00008932,
    name: "resources-drills-osmkkf-tuite-7-kyu-tuite"
  }, {
    path: "/resources/drills/osmkkf/tuite/8-kyu-tuite",
    component: _59db25a8,
    name: "resources-drills-osmkkf-tuite-8-kyu-tuite"
  }, {
    path: "/resources/drills/osmkkf/tuite/9-kyu-tuite",
    component: _9892e02e,
    name: "resources-drills-osmkkf-tuite-9-kyu-tuite"
  }, {
    path: "/resources/drills/sambo/armlocks/187",
    component: _c1991184,
    name: "resources-drills-sambo-armlocks-187"
  }, {
    path: "/resources/drills/sambo/armlocks/189",
    component: _c160b380,
    name: "resources-drills-sambo-armlocks-189"
  }, {
    path: "/resources/drills/sambo/armlocks/190",
    component: _bef4a954,
    name: "resources-drills-sambo-armlocks-190"
  }, {
    path: "/resources/drills/sambo/armlocks/197",
    component: _be2f6046,
    name: "resources-drills-sambo-armlocks-197"
  }, {
    path: "/resources/drills/sambo/armlocks/198",
    component: _be133144,
    name: "resources-drills-sambo-armlocks-198"
  }, {
    path: "/resources/drills/sambo/armlocks/200",
    component: _73df6e00,
    name: "resources-drills-sambo-armlocks-200"
  }, {
    path: "/resources/drills/sambo/armlocks/202",
    component: _73a70ffc,
    name: "resources-drills-sambo-armlocks-202"
  }, {
    path: "/resources/drills/sambo/armlocks/204",
    component: _736eb1f8,
    name: "resources-drills-sambo-armlocks-204"
  }, {
    path: "/resources/drills/sambo/armlocks/205",
    component: _735282f6,
    name: "resources-drills-sambo-armlocks-205"
  }, {
    path: "/resources/drills/sambo/armlocks/206",
    component: _733653f4,
    name: "resources-drills-sambo-armlocks-206"
  }, {
    path: "/resources/drills/sambo/armlocks/208",
    component: _72fdf5f0,
    name: "resources-drills-sambo-armlocks-208"
  }, {
    path: "/resources/drills/sambo/armlocks/210",
    component: _7075bcc2,
    name: "resources-drills-sambo-armlocks-210"
  }, {
    path: "/resources/drills/sambo/armlocks/212",
    component: _703d5ebe,
    name: "resources-drills-sambo-armlocks-212"
  }, {
    path: "/resources/drills/sambo/armlocks/214",
    component: _700500ba,
    name: "resources-drills-sambo-armlocks-214"
  }, {
    path: "/resources/drills/sambo/armlocks/216",
    component: _6fcca2b6,
    name: "resources-drills-sambo-armlocks-216"
  }, {
    path: "/resources/drills/sambo/armlocks/219",
    component: _6f7815b0,
    name: "resources-drills-sambo-armlocks-219"
  }, {
    path: "/resources/drills/sambo/armlocks/221",
    component: _6cefdc82,
    name: "resources-drills-sambo-armlocks-221"
  }, {
    path: "/resources/drills/sambo/armlocks/223",
    component: _6cb77e7e,
    name: "resources-drills-sambo-armlocks-223"
  }, {
    path: "/resources/drills/sambo/armlocks/225",
    component: _6c7f207a,
    name: "resources-drills-sambo-armlocks-225"
  }, {
    path: "/resources/drills/sambo/armlocks/227",
    component: _6c46c276,
    name: "resources-drills-sambo-armlocks-227"
  }, {
    path: "/resources/drills/sambo/armlocks/229",
    component: _6c0e6472,
    name: "resources-drills-sambo-armlocks-229"
  }, {
    path: "/resources/drills/sambo/armlocks/231",
    component: _69862b44,
    name: "resources-drills-sambo-armlocks-231"
  }, {
    path: "/resources/drills/sambo/armlocks/232",
    component: _6969fc42,
    name: "resources-drills-sambo-armlocks-232"
  }, {
    path: "/resources/drills/sambo/armlocks/233",
    component: _694dcd40,
    name: "resources-drills-sambo-armlocks-233"
  }, {
    path: "/resources/drills/sambo/armlocks/234",
    component: _69319e3e,
    name: "resources-drills-sambo-armlocks-234"
  }, {
    path: "/resources/drills/sambo/armlocks/235",
    component: _69156f3c,
    name: "resources-drills-sambo-armlocks-235"
  }, {
    path: "/resources/drills/sambo/armlocks/236",
    component: _68f9403a,
    name: "resources-drills-sambo-armlocks-236"
  }, {
    path: "/resources/drills/sambo/armlocks/237",
    component: _68dd1138,
    name: "resources-drills-sambo-armlocks-237"
  }, {
    path: "/resources/drills/sambo/armlocks/238",
    component: _68c0e236,
    name: "resources-drills-sambo-armlocks-238"
  }, {
    path: "/resources/drills/sambo/armlocks/240",
    component: _6638a908,
    name: "resources-drills-sambo-armlocks-240"
  }, {
    path: "/resources/drills/sambo/armlocks/242",
    component: _66004b04,
    name: "resources-drills-sambo-armlocks-242"
  }, {
    path: "/resources/drills/sambo/armlocks/243",
    component: _65e41c02,
    name: "resources-drills-sambo-armlocks-243"
  }, {
    path: "/resources/drills/sambo/armlocks/245",
    component: _65abbdfe,
    name: "resources-drills-sambo-armlocks-245"
  }, {
    path: "/resources/drills/sambo/armlocks/247",
    component: _65735ffa,
    name: "resources-drills-sambo-armlocks-247"
  }, {
    path: "/resources/drills/sambo/armlocks/248",
    component: _655730f8,
    name: "resources-drills-sambo-armlocks-248"
  }, {
    path: "/resources/drills/sambo/armlocks/249",
    component: _653b01f6,
    name: "resources-drills-sambo-armlocks-249"
  }, {
    path: "/resources/drills/sambo/armlocks/250",
    component: _62cef7ca,
    name: "resources-drills-sambo-armlocks-250"
  }, {
    path: "/resources/drills/sambo/armlocks/252",
    component: _629699c6,
    name: "resources-drills-sambo-armlocks-252"
  }, {
    path: "/resources/drills/sambo/armlocks/253",
    component: _627a6ac4,
    name: "resources-drills-sambo-armlocks-253"
  }, {
    path: "/resources/drills/sambo/armlocks/254",
    component: _625e3bc2,
    name: "resources-drills-sambo-armlocks-254"
  }, {
    path: "/resources/drills/sambo/armlocks/256",
    component: _6225ddbe,
    name: "resources-drills-sambo-armlocks-256"
  }, {
    path: "/resources/drills/sambo/armlocks/259",
    component: _61d150b8,
    name: "resources-drills-sambo-armlocks-259"
  }, {
    path: "/resources/drills/sambo/armlocks/261",
    component: _5f49178a,
    name: "resources-drills-sambo-armlocks-261"
  }, {
    path: "/resources/drills/sambo/armlocks/263",
    component: _5f10b986,
    name: "resources-drills-sambo-armlocks-263"
  }, {
    path: "/resources/drills/sambo/armlocks/265",
    component: _5ed85b82,
    name: "resources-drills-sambo-armlocks-265"
  }, {
    path: "/resources/drills/sambo/armlocks/266",
    component: _5ebc2c80,
    name: "resources-drills-sambo-armlocks-266"
  }, {
    path: "/resources/drills/sambo/armlocks/267",
    component: _5e9ffd7e,
    name: "resources-drills-sambo-armlocks-267"
  }, {
    path: "/resources/drills/sambo/armlocks/268",
    component: _5e83ce7c,
    name: "resources-drills-sambo-armlocks-268"
  }, {
    path: "/resources/drills/sambo/armlocks/270",
    component: _5bfb954e,
    name: "resources-drills-sambo-armlocks-270"
  }, {
    path: "/resources/drills/sambo/armlocks/272",
    component: _5bc3374a,
    name: "resources-drills-sambo-armlocks-272"
  }, {
    path: "/resources/drills/sambo/armlocks/273",
    component: _5ba70848,
    name: "resources-drills-sambo-armlocks-273"
  }, {
    path: "/resources/drills/sambo/armlocks/275",
    component: _5b6eaa44,
    name: "resources-drills-sambo-armlocks-275"
  }, {
    path: "/resources/drills/sambo/breakdowns/283",
    component: _7d243815,
    name: "resources-drills-sambo-breakdowns-283"
  }, {
    path: "/resources/drills/sambo/breakdowns/285",
    component: _7d406717,
    name: "resources-drills-sambo-breakdowns-285"
  }, {
    path: "/resources/drills/sambo/breakdowns/288",
    component: _7d6aad9a,
    name: "resources-drills-sambo-breakdowns-288"
  }, {
    path: "/resources/drills/sambo/breakdowns/290",
    component: _7eaeca31,
    name: "resources-drills-sambo-breakdowns-290"
  }, {
    path: "/resources/drills/sambo/breakdowns/294",
    component: _7ee72835,
    name: "resources-drills-sambo-breakdowns-294"
  }, {
    path: "/resources/drills/sambo/breakdowns/296",
    component: _7f035737,
    name: "resources-drills-sambo-breakdowns-296"
  }, {
    path: "/resources/drills/sambo/breakdowns/297",
    component: _7f116eb8,
    name: "resources-drills-sambo-breakdowns-297"
  }, {
    path: "/resources/drills/sambo/breakdowns/301",
    component: _b7710148,
    name: "resources-drills-sambo-breakdowns-301"
  }, {
    path: "/resources/drills/sambo/breakdowns/302",
    component: _b754d246,
    name: "resources-drills-sambo-breakdowns-302"
  }, {
    path: "/resources/drills/sambo/breakdowns/303",
    component: _b738a344,
    name: "resources-drills-sambo-breakdowns-303"
  }, {
    path: "/resources/drills/sambo/breakdowns/304",
    component: _b71c7442,
    name: "resources-drills-sambo-breakdowns-304"
  }, {
    path: "/resources/drills/sambo/breakdowns/306",
    component: _b6e4163e,
    name: "resources-drills-sambo-breakdowns-306"
  }, {
    path: "/resources/drills/sambo/breakdowns/308",
    component: _b6abb83a,
    name: "resources-drills-sambo-breakdowns-308"
  }, {
    path: "/resources/drills/sambo/breakdowns/310",
    component: _b4237f0c,
    name: "resources-drills-sambo-breakdowns-310"
  }, {
    path: "/resources/drills/sambo/breakdowns/314",
    component: _b3b2c304,
    name: "resources-drills-sambo-breakdowns-314"
  }, {
    path: "/resources/drills/sambo/breakdowns/315",
    component: _b3969402,
    name: "resources-drills-sambo-breakdowns-315"
  }, {
    path: "/resources/drills/sambo/breakdowns/316",
    component: _b37a6500,
    name: "resources-drills-sambo-breakdowns-316"
  }, {
    path: "/resources/drills/sambo/breakdowns/317",
    component: _b35e35fe,
    name: "resources-drills-sambo-breakdowns-317"
  }, {
    path: "/resources/drills/sambo/breakdowns/318",
    component: _b34206fc,
    name: "resources-drills-sambo-breakdowns-318"
  }, {
    path: "/resources/drills/sambo/breakdowns/319",
    component: _b325d7fa,
    name: "resources-drills-sambo-breakdowns-319"
  }, {
    path: "/resources/drills/sambo/breakdowns/321",
    component: _b09d9ecc,
    name: "resources-drills-sambo-breakdowns-321"
  }, {
    path: "/resources/drills/sambo/breakdowns/323",
    component: _b06540c8,
    name: "resources-drills-sambo-breakdowns-323"
  }, {
    path: "/resources/drills/sambo/leglocks/125",
    component: _7c99fcb4,
    name: "resources-drills-sambo-leglocks-125"
  }, {
    path: "/resources/drills/sambo/leglocks/126",
    component: _7ca81435,
    name: "resources-drills-sambo-leglocks-126"
  }, {
    path: "/resources/drills/sambo/leglocks/127",
    component: _7cb62bb6,
    name: "resources-drills-sambo-leglocks-127"
  }, {
    path: "/resources/drills/sambo/leglocks/128",
    component: _7cc44337,
    name: "resources-drills-sambo-leglocks-128"
  }, {
    path: "/resources/drills/sambo/leglocks/129",
    component: _7cd25ab8,
    name: "resources-drills-sambo-leglocks-129"
  }, {
    path: "/resources/drills/sambo/leglocks/131",
    component: _7e16774f,
    name: "resources-drills-sambo-leglocks-131"
  }, {
    path: "/resources/drills/sambo/leglocks/133",
    component: _7e32a651,
    name: "resources-drills-sambo-leglocks-133"
  }, {
    path: "/resources/drills/sambo/leglocks/135",
    component: _7e4ed553,
    name: "resources-drills-sambo-leglocks-135"
  }, {
    path: "/resources/drills/sambo/leglocks/136",
    component: _7e5cecd4,
    name: "resources-drills-sambo-leglocks-136"
  }, {
    path: "/resources/drills/sambo/leglocks/139",
    component: _7e873357,
    name: "resources-drills-sambo-leglocks-139"
  }, {
    path: "/resources/drills/sambo/leglocks/140",
    component: _7fbd386d,
    name: "resources-drills-sambo-leglocks-140"
  }, {
    path: "/resources/drills/sambo/leglocks/141",
    component: _7fcb4fee,
    name: "resources-drills-sambo-leglocks-141"
  }, {
    path: "/resources/drills/sambo/leglocks/143",
    component: _7fe77ef0,
    name: "resources-drills-sambo-leglocks-143"
  }, {
    path: "/resources/drills/sambo/leglocks/145",
    component: _fff8a41c,
    name: "resources-drills-sambo-leglocks-145"
  }, {
    path: "/resources/drills/sambo/leglocks/146",
    component: _ffdc751a,
    name: "resources-drills-sambo-leglocks-146"
  }, {
    path: "/resources/drills/sambo/leglocks/147",
    component: _ffc04618,
    name: "resources-drills-sambo-leglocks-147"
  }, {
    path: "/resources/drills/sambo/leglocks/149",
    component: _ff87e814,
    name: "resources-drills-sambo-leglocks-149"
  }, {
    path: "/resources/drills/sambo/leglocks/150",
    component: _fd1bdde8,
    name: "resources-drills-sambo-leglocks-150"
  }, {
    path: "/resources/drills/sambo/leglocks/152",
    component: _fce37fe4,
    name: "resources-drills-sambo-leglocks-152"
  }, {
    path: "/resources/drills/sambo/leglocks/154",
    component: _fcab21e0,
    name: "resources-drills-sambo-leglocks-154"
  }, {
    path: "/resources/drills/sambo/leglocks/156",
    component: _fc72c3dc,
    name: "resources-drills-sambo-leglocks-156"
  }, {
    path: "/resources/drills/sambo/leglocks/158",
    component: _fc3a65d8,
    name: "resources-drills-sambo-leglocks-158"
  }, {
    path: "/resources/drills/sambo/leglocks/159",
    component: _fc1e36d6,
    name: "resources-drills-sambo-leglocks-159"
  }, {
    path: "/resources/drills/sambo/leglocks/161",
    component: _f995fda8,
    name: "resources-drills-sambo-leglocks-161"
  }, {
    path: "/resources/drills/sambo/leglocks/163",
    component: _f95d9fa4,
    name: "resources-drills-sambo-leglocks-163"
  }, {
    path: "/resources/drills/sambo/leglocks/165",
    component: _f92541a0,
    name: "resources-drills-sambo-leglocks-165"
  }, {
    path: "/resources/drills/sambo/leglocks/166",
    component: _f909129e,
    name: "resources-drills-sambo-leglocks-166"
  }, {
    path: "/resources/drills/sambo/leglocks/168",
    component: _f8d0b49a,
    name: "resources-drills-sambo-leglocks-168"
  }, {
    path: "/resources/drills/sambo/leglocks/170",
    component: _f6487b6c,
    name: "resources-drills-sambo-leglocks-170"
  }, {
    path: "/resources/drills/sambo/leglocks/171",
    component: _f62c4c6a,
    name: "resources-drills-sambo-leglocks-171"
  }, {
    path: "/resources/drills/sambo/leglocks/172",
    component: _f6101d68,
    name: "resources-drills-sambo-leglocks-172"
  }, {
    path: "/resources/drills/sambo/leglocks/173",
    component: _f5f3ee66,
    name: "resources-drills-sambo-leglocks-173"
  }, {
    path: "/resources/drills/sambo/leglocks/174",
    component: _f5d7bf64,
    name: "resources-drills-sambo-leglocks-174"
  }, {
    path: "/resources/drills/sambo/leglocks/176",
    component: _f59f6160,
    name: "resources-drills-sambo-leglocks-176"
  }, {
    path: "/resources/drills/sambo/leglocks/178",
    component: _f567035c,
    name: "resources-drills-sambo-leglocks-178"
  }, {
    path: "/resources/drills/sambo/leglocks/180",
    component: _f2deca2e,
    name: "resources-drills-sambo-leglocks-180"
  }, {
    path: "/resources/drills/sambo/throws/100",
    component: _55a110de,
    name: "resources-drills-sambo-throws-100"
  }, {
    path: "/resources/drills/sambo/throws/101",
    component: _55af285f,
    name: "resources-drills-sambo-throws-101"
  }, {
    path: "/resources/drills/sambo/throws/102",
    component: _55bd3fe0,
    name: "resources-drills-sambo-throws-102"
  }, {
    path: "/resources/drills/sambo/throws/104",
    component: _55d96ee2,
    name: "resources-drills-sambo-throws-104"
  }, {
    path: "/resources/drills/sambo/throws/105",
    component: _55e78663,
    name: "resources-drills-sambo-throws-105"
  }, {
    path: "/resources/drills/sambo/throws/107",
    component: _5603b565,
    name: "resources-drills-sambo-throws-107"
  }, {
    path: "/resources/drills/sambo/throws/109",
    component: _561fe467,
    name: "resources-drills-sambo-throws-109"
  }, {
    path: "/resources/drills/sambo/throws/111",
    component: _576400fe,
    name: "resources-drills-sambo-throws-111"
  }, {
    path: "/resources/drills/sambo/throws/113",
    component: _57803000,
    name: "resources-drills-sambo-throws-113"
  }, {
    path: "/resources/drills/sambo/throws/114",
    component: _578e4781,
    name: "resources-drills-sambo-throws-114"
  }, {
    path: "/resources/drills/sambo/throws/116",
    component: _57aa7683,
    name: "resources-drills-sambo-throws-116"
  }, {
    path: "/resources/drills/sambo/throws/50",
    component: _91fbf784,
    name: "resources-drills-sambo-throws-50"
  }, {
    path: "/resources/drills/sambo/throws/51",
    component: _91dfc882,
    name: "resources-drills-sambo-throws-51"
  }, {
    path: "/resources/drills/sambo/throws/52",
    component: _91c39980,
    name: "resources-drills-sambo-throws-52"
  }, {
    path: "/resources/drills/sambo/throws/54",
    component: _918b3b7c,
    name: "resources-drills-sambo-throws-54"
  }, {
    path: "/resources/drills/sambo/throws/55",
    component: _916f0c7a,
    name: "resources-drills-sambo-throws-55"
  }, {
    path: "/resources/drills/sambo/throws/56",
    component: _9152dd78,
    name: "resources-drills-sambo-throws-56"
  }, {
    path: "/resources/drills/sambo/throws/57",
    component: _9136ae76,
    name: "resources-drills-sambo-throws-57"
  }, {
    path: "/resources/drills/sambo/throws/58",
    component: _911a7f74,
    name: "resources-drills-sambo-throws-58"
  }, {
    path: "/resources/drills/sambo/throws/59",
    component: _90fe5072,
    name: "resources-drills-sambo-throws-59"
  }, {
    path: "/resources/drills/sambo/throws/61",
    component: _8e761744,
    name: "resources-drills-sambo-throws-61"
  }, {
    path: "/resources/drills/sambo/throws/62",
    component: _8e59e842,
    name: "resources-drills-sambo-throws-62"
  }, {
    path: "/resources/drills/sambo/throws/63",
    component: _8e3db940,
    name: "resources-drills-sambo-throws-63"
  }, {
    path: "/resources/drills/sambo/throws/64",
    component: _8e218a3e,
    name: "resources-drills-sambo-throws-64"
  }, {
    path: "/resources/drills/sambo/throws/66",
    component: _8de92c3a,
    name: "resources-drills-sambo-throws-66"
  }, {
    path: "/resources/drills/sambo/throws/68",
    component: _8db0ce36,
    name: "resources-drills-sambo-throws-68"
  }, {
    path: "/resources/drills/sambo/throws/69",
    component: _8d949f34,
    name: "resources-drills-sambo-throws-69"
  }, {
    path: "/resources/drills/sambo/throws/70",
    component: _8b289508,
    name: "resources-drills-sambo-throws-70"
  }, {
    path: "/resources/drills/sambo/throws/71",
    component: _8b0c6606,
    name: "resources-drills-sambo-throws-71"
  }, {
    path: "/resources/drills/sambo/throws/72",
    component: _8af03704,
    name: "resources-drills-sambo-throws-72"
  }, {
    path: "/resources/drills/sambo/throws/73",
    component: _8ad40802,
    name: "resources-drills-sambo-throws-73"
  }, {
    path: "/resources/drills/sambo/throws/74",
    component: _8ab7d900,
    name: "resources-drills-sambo-throws-74"
  }, {
    path: "/resources/drills/sambo/throws/75",
    component: _8a9ba9fe,
    name: "resources-drills-sambo-throws-75"
  }, {
    path: "/resources/drills/sambo/throws/76",
    component: _8a7f7afc,
    name: "resources-drills-sambo-throws-76"
  }, {
    path: "/resources/drills/sambo/throws/78",
    component: _8a471cf8,
    name: "resources-drills-sambo-throws-78"
  }, {
    path: "/resources/drills/sambo/throws/80",
    component: _87bee3ca,
    name: "resources-drills-sambo-throws-80"
  }, {
    path: "/resources/drills/sambo/throws/81",
    component: _87a2b4c8,
    name: "resources-drills-sambo-throws-81"
  }, {
    path: "/resources/drills/sambo/throws/83",
    component: _876a56c4,
    name: "resources-drills-sambo-throws-83"
  }, {
    path: "/resources/drills/sambo/throws/84",
    component: _874e27c2,
    name: "resources-drills-sambo-throws-84"
  }, {
    path: "/resources/drills/sambo/throws/85",
    component: _8731f8c0,
    name: "resources-drills-sambo-throws-85"
  }, {
    path: "/resources/drills/sambo/throws/87",
    component: _86f99abc,
    name: "resources-drills-sambo-throws-87"
  }, {
    path: "/resources/drills/sambo/throws/88",
    component: _86dd6bba,
    name: "resources-drills-sambo-throws-88"
  }, {
    path: "/resources/drills/sambo/throws/90",
    component: _8455328c,
    name: "resources-drills-sambo-throws-90"
  }, {
    path: "/resources/drills/sambo/throws/91",
    component: _8439038a,
    name: "resources-drills-sambo-throws-91"
  }, {
    path: "/resources/drills/sambo/throws/92",
    component: _841cd488,
    name: "resources-drills-sambo-throws-92"
  }, {
    path: "/resources/drills/sambo/throws/93",
    component: _8400a586,
    name: "resources-drills-sambo-throws-93"
  }, {
    path: "/resources/drills/sambo/throws/94",
    component: _83e47684,
    name: "resources-drills-sambo-throws-94"
  }, {
    path: "/resources/drills/sambo/throws/95",
    component: _83c84782,
    name: "resources-drills-sambo-throws-95"
  }, {
    path: "/resources/drills/sambo/throws/96",
    component: _83ac1880,
    name: "resources-drills-sambo-throws-96"
  }, {
    path: "/resources/drills/sambo/throws/97",
    component: _838fe97e,
    name: "resources-drills-sambo-throws-97"
  }, {
    path: "/resources/drills/sambo/throws/98",
    component: _8373ba7c,
    name: "resources-drills-sambo-throws-98"
  }, {
    path: "/resources/drills/mcmap/black/chokes/guillotine",
    component: _340fdb24,
    name: "resources-drills-mcmap-black-chokes-guillotine"
  }, {
    path: "/resources/drills/mcmap/black/chokes/triangle",
    component: _eb830d94,
    name: "resources-drills-mcmap-black-chokes-triangle"
  }, {
    path: "/resources/drills/mcmap/black/ground/bent-armbar",
    component: _057320e5,
    name: "resources-drills-mcmap-black-ground-bent-armbar"
  }, {
    path: "/resources/drills/mcmap/black/ground/face-rip",
    component: _2bfcae6f,
    name: "resources-drills-mcmap-black-ground-face-rip"
  }, {
    path: "/resources/drills/mcmap/black/ground/rolling-kneebar",
    component: _43f65092,
    name: "resources-drills-mcmap-black-ground-rolling-kneebar"
  }, {
    path: "/resources/drills/mcmap/black/ground/sitting-kneebar",
    component: _08134499,
    name: "resources-drills-mcmap-black-ground-sitting-kneebar"
  }, {
    path: "/resources/drills/mcmap/black/ground/straight-armbar",
    component: _4e4d2994,
    name: "resources-drills-mcmap-black-ground-straight-armbar"
  }, {
    path: "/resources/drills/mcmap/black/guns/1-hand",
    component: _ccdb3586,
    name: "resources-drills-mcmap-black-guns-1-hand"
  }, {
    path: "/resources/drills/mcmap/black/guns/2-hand",
    component: _e4485348,
    name: "resources-drills-mcmap-black-guns-2-hand"
  }, {
    path: "/resources/drills/mcmap/black/opportunity/front-garrote",
    component: _0c8ef62e,
    name: "resources-drills-mcmap-black-opportunity-front-garrote"
  }, {
    path: "/resources/drills/mcmap/black/opportunity/rear-garrote",
    component: _002c52c1,
    name: "resources-drills-mcmap-black-opportunity-rear-garrote"
  }, {
    path: "/resources/drills/mcmap/black/upper/cuphand",
    component: _165ad68a,
    name: "resources-drills-mcmap-black-upper-cuphand"
  }, {
    path: "/resources/drills/mcmap/black/upper/smash",
    component: _334bb679,
    name: "resources-drills-mcmap-black-upper-smash"
  }, {
    path: "/resources/drills/mcmap/brown/bayonet/1-2",
    component: _33201ba4,
    name: "resources-drills-mcmap-brown-bayonet-1-2"
  }, {
    path: "/resources/drills/mcmap/brown/bayonet/2-1",
    component: _67f83f64,
    name: "resources-drills-mcmap-brown-bayonet-2-1"
  }, {
    path: "/resources/drills/mcmap/brown/bayonet/2-2",
    component: _680656e5,
    name: "resources-drills-mcmap-brown-bayonet-2-2"
  }, {
    path: "/resources/drills/mcmap/brown/ground/front-choke",
    component: _045e929a,
    name: "resources-drills-mcmap-brown-ground-front-choke"
  }, {
    path: "/resources/drills/mcmap/brown/ground/leglock",
    component: _519225e8,
    name: "resources-drills-mcmap-brown-ground-leglock"
  }, {
    path: "/resources/drills/mcmap/brown/ground/rear-ground-choke",
    component: _e93db54c,
    name: "resources-drills-mcmap-brown-ground-rear-ground-choke"
  }, {
    path: "/resources/drills/mcmap/brown/ground/side-choke",
    component: _b292e2ea,
    name: "resources-drills-mcmap-brown-ground-side-choke"
  }, {
    path: "/resources/drills/mcmap/brown/guns/armbar",
    component: _4460c740,
    name: "resources-drills-mcmap-brown-guns-armbar"
  }, {
    path: "/resources/drills/mcmap/brown/guns/blocking",
    component: _4e7d451e,
    name: "resources-drills-mcmap-brown-guns-blocking"
  }, {
    path: "/resources/drills/mcmap/brown/guns/front-pistol",
    component: _73e85304,
    name: "resources-drills-mcmap-brown-guns-front-pistol"
  }, {
    path: "/resources/drills/mcmap/brown/guns/rear-pistol",
    component: _8214a432,
    name: "resources-drills-mcmap-brown-guns-rear-pistol"
  }, {
    path: "/resources/drills/mcmap/brown/guns/ss-back",
    component: _210865db,
    name: "resources-drills-mcmap-brown-guns-ss-back"
  }, {
    path: "/resources/drills/mcmap/brown/guns/ss-front",
    component: _8aa5d436,
    name: "resources-drills-mcmap-brown-guns-ss-front"
  }, {
    path: "/resources/drills/mcmap/brown/guns/wristlock",
    component: _b2ae573e,
    name: "resources-drills-mcmap-brown-guns-wristlock"
  }, {
    path: "/resources/drills/mcmap/brown/knife/reverse-block",
    component: _e37763da,
    name: "resources-drills-mcmap-brown-knife-reverse-block"
  }, {
    path: "/resources/drills/mcmap/brown/knife/thrust-block",
    component: _63be6fb7,
    name: "resources-drills-mcmap-brown-knife-thrust-block"
  }, {
    path: "/resources/drills/mcmap/brown/unarmed-manipulation/bent-armbar",
    component: _56b3eda6,
    name: "resources-drills-mcmap-brown-unarmed-manipulation-bent-armbar"
  }, {
    path: "/resources/drills/mcmap/brown/unarmed-manipulation/forward-armbar",
    component: _7cef323d,
    name: "resources-drills-mcmap-brown-unarmed-manipulation-forward-armbar"
  }, {
    path: "/resources/drills/mcmap/brown/unarmed-manipulation/hollow-out",
    component: _079fe1ee,
    name: "resources-drills-mcmap-brown-unarmed-manipulation-hollow-out"
  }, {
    path: "/resources/drills/mcmap/brown/unarmed-manipulation/reverse-armbar",
    component: _9027a400,
    name: "resources-drills-mcmap-brown-unarmed-manipulation-reverse-armbar"
  }, {
    path: "/resources/drills/mcmap/green/ground/guard-armbar",
    component: _c002c5ae,
    name: "resources-drills-mcmap-green-ground-guard-armbar"
  }, {
    path: "/resources/drills/mcmap/green/ground/mount-armbar",
    component: _34a74f35,
    name: "resources-drills-mcmap-green-ground-mount-armbar"
  }, {
    path: "/resources/drills/mcmap/green/knife/forward-counter",
    component: _1d643832,
    name: "resources-drills-mcmap-green-knife-forward-counter"
  }, {
    path: "/resources/drills/mcmap/green/knife/vertical-counter",
    component: _358dced7,
    name: "resources-drills-mcmap-green-knife-vertical-counter"
  }, {
    path: "/resources/drills/mcmap/green/opportunity/forward-block",
    component: _42771295,
    name: "resources-drills-mcmap-green-opportunity-forward-block"
  }, {
    path: "/resources/drills/mcmap/green/opportunity/reverse-block",
    component: _33da1272,
    name: "resources-drills-mcmap-green-opportunity-reverse-block"
  }, {
    path: "/resources/drills/mcmap/green/opportunity/thrust-block",
    component: _0e3f2378,
    name: "resources-drills-mcmap-green-opportunity-thrust-block"
  }, {
    path: "/resources/drills/mcmap/green/opportunity/vertical-block",
    component: _c2b9e1d4,
    name: "resources-drills-mcmap-green-opportunity-vertical-block"
  }, {
    path: "/resources/drills/mcmap/green/strike-counters/round-kick",
    component: _2e36b5a4,
    name: "resources-drills-mcmap-green-strike-counters-round-kick"
  }, {
    path: "/resources/drills/mcmap/green/strike-counters/round-punch",
    component: _d05aac80,
    name: "resources-drills-mcmap-green-strike-counters-round-punch"
  }, {
    path: "/resources/drills/mcmap/green/unarmed-manipulation/controlling",
    component: _72c30750,
    name: "resources-drills-mcmap-green-unarmed-manipulation-controlling"
  }, {
    path: "/resources/drills/mcmap/green/unarmed-manipulation/pain",
    component: _103c42be,
    name: "resources-drills-mcmap-green-unarmed-manipulation-pain"
  }, {
    path: "/resources/drills/mcmap/green/unarmed-manipulation/reverse-wristlock",
    component: _85e2cbd8,
    name: "resources-drills-mcmap-green-unarmed-manipulation-reverse-wristlock"
  }, {
    path: "/resources/drills/mcmap/grey/armed-manipulation/double-pull",
    component: _72802fb3,
    name: "resources-drills-mcmap-grey-armed-manipulation-double-pull"
  }, {
    path: "/resources/drills/mcmap/grey/armed-manipulation/double-push",
    component: _7e39be08,
    name: "resources-drills-mcmap-grey-armed-manipulation-double-push"
  }, {
    path: "/resources/drills/mcmap/grey/armed-manipulation/moving-pulling",
    component: _d3a0e908,
    name: "resources-drills-mcmap-grey-armed-manipulation-moving-pulling"
  }, {
    path: "/resources/drills/mcmap/grey/armed-manipulation/over-strike",
    component: _387f42bd,
    name: "resources-drills-mcmap-grey-armed-manipulation-over-strike"
  }, {
    path: "/resources/drills/mcmap/grey/armed-manipulation/under-strike",
    component: _2e4d7fc5,
    name: "resources-drills-mcmap-grey-armed-manipulation-under-strike"
  }, {
    path: "/resources/drills/mcmap/grey/bayonet/rush",
    component: _31688cc1,
    name: "resources-drills-mcmap-grey-bayonet-rush"
  }, {
    path: "/resources/drills/mcmap/grey/choke-counters/bearhug",
    component: _f8b96332,
    name: "resources-drills-mcmap-grey-choke-counters-bearhug"
  }, {
    path: "/resources/drills/mcmap/grey/choke-counters/choke",
    component: _7e924465,
    name: "resources-drills-mcmap-grey-choke-counters-choke"
  }, {
    path: "/resources/drills/mcmap/grey/choke-counters/headlock",
    component: _61b91f3a,
    name: "resources-drills-mcmap-grey-choke-counters-headlock"
  }, {
    path: "/resources/drills/mcmap/grey/ground/guard",
    component: _04db8382,
    name: "resources-drills-mcmap-grey-ground-guard"
  }, {
    path: "/resources/drills/mcmap/grey/ground/mount",
    component: _23f081b3,
    name: "resources-drills-mcmap-grey-ground-mount"
  }, {
    path: "/resources/drills/mcmap/grey/knife/bulldogging",
    component: _2d72d0ae,
    name: "resources-drills-mcmap-grey-knife-bulldogging"
  }, {
    path: "/resources/drills/mcmap/grey/knife/forward-slash",
    component: _68fcb182,
    name: "resources-drills-mcmap-grey-knife-forward-slash"
  }, {
    path: "/resources/drills/mcmap/grey/knife/forward-thrust",
    component: _a3ab22f4,
    name: "resources-drills-mcmap-grey-knife-forward-thrust"
  }, {
    path: "/resources/drills/mcmap/grey/knife/reverse-slash",
    component: _8636b1c8,
    name: "resources-drills-mcmap-grey-knife-reverse-slash"
  }, {
    path: "/resources/drills/mcmap/grey/knife/reverse-thrust",
    component: _2db12b6e,
    name: "resources-drills-mcmap-grey-knife-reverse-thrust"
  }, {
    path: "/resources/drills/mcmap/grey/lower/axe-stomp",
    component: _098e0b80,
    name: "resources-drills-mcmap-grey-lower-axe-stomp"
  }, {
    path: "/resources/drills/mcmap/grey/lower/horizontal-knee",
    component: _692ac93a,
    name: "resources-drills-mcmap-grey-lower-horizontal-knee"
  }, {
    path: "/resources/drills/mcmap/grey/lower/side-kick",
    component: _b054e52c,
    name: "resources-drills-mcmap-grey-lower-side-kick"
  }, {
    path: "/resources/drills/mcmap/grey/opportunity/forward-strike",
    component: _4c9de964,
    name: "resources-drills-mcmap-grey-opportunity-forward-strike"
  }, {
    path: "/resources/drills/mcmap/grey/opportunity/reverse-strike",
    component: _14ae0711,
    name: "resources-drills-mcmap-grey-opportunity-reverse-strike"
  }, {
    path: "/resources/drills/mcmap/grey/opportunity/straight-thrust",
    component: _e944e5b2,
    name: "resources-drills-mcmap-grey-opportunity-straight-thrust"
  }, {
    path: "/resources/drills/mcmap/grey/opportunity/vertical-strike",
    component: _58b14185,
    name: "resources-drills-mcmap-grey-opportunity-vertical-strike"
  }, {
    path: "/resources/drills/mcmap/grey/strike-counters/lead",
    component: _55fec6e2,
    name: "resources-drills-mcmap-grey-strike-counters-lead"
  }, {
    path: "/resources/drills/mcmap/grey/strike-counters/lead-kick",
    component: _204ad518,
    name: "resources-drills-mcmap-grey-strike-counters-lead-kick"
  }, {
    path: "/resources/drills/mcmap/grey/unarmed-manipulation/come-along",
    component: _c19af92a,
    name: "resources-drills-mcmap-grey-unarmed-manipulation-come-along"
  }, {
    path: "/resources/drills/mcmap/grey/unarmed-manipulation/cuff",
    component: _9e6c53ee,
    name: "resources-drills-mcmap-grey-unarmed-manipulation-cuff"
  }, {
    path: "/resources/drills/mcmap/grey/unarmed-manipulation/escort",
    component: _7df86df3,
    name: "resources-drills-mcmap-grey-unarmed-manipulation-escort"
  }, {
    path: "/resources/drills/mcmap/grey/unarmed-manipulation/escort-takedown",
    component: _6449191a,
    name: "resources-drills-mcmap-grey-unarmed-manipulation-escort-takedown"
  }, {
    path: "/resources/drills/mcmap/grey/upper/knifehand",
    component: _6bd9d141,
    name: "resources-drills-mcmap-grey-upper-knifehand"
  }, {
    path: "/resources/drills/mcmap/grey/upper/palm",
    component: _12bd7b95,
    name: "resources-drills-mcmap-grey-upper-palm"
  }, {
    path: "/resources/drills/mcmap/grey/upper/rear-elbow",
    component: _7cae3e7d,
    name: "resources-drills-mcmap-grey-upper-rear-elbow"
  }, {
    path: "/resources/drills/mcmap/grey/upper/reverse-knifehand",
    component: _5185fc96,
    name: "resources-drills-mcmap-grey-upper-reverse-knifehand"
  }, {
    path: "/resources/drills/mcmap/grey/upper/vertical-elbow",
    component: _68551f62,
    name: "resources-drills-mcmap-grey-upper-vertical-elbow"
  }, {
    path: "/resources/drills/mcmap/grey/upper/vertical-knifehand",
    component: _38ff8ac0,
    name: "resources-drills-mcmap-grey-upper-vertical-knifehand"
  }, {
    path: "/resources/drills/mcmap/tan/armed-manipulation/blocks",
    component: _d30ed5d4,
    name: "resources-drills-mcmap-tan-armed-manipulation-blocks"
  }, {
    path: "/resources/drills/mcmap/tan/armed-manipulation/retention",
    component: _46fee7be,
    name: "resources-drills-mcmap-tan-armed-manipulation-retention"
  }, {
    path: "/resources/drills/mcmap/tan/bayonet/disrupt",
    component: _2f3e16ce,
    name: "resources-drills-mcmap-tan-bayonet-disrupt"
  }, {
    path: "/resources/drills/mcmap/tan/bayonet/horizontal",
    component: _cccd690a,
    name: "resources-drills-mcmap-tan-bayonet-horizontal"
  }, {
    path: "/resources/drills/mcmap/tan/bayonet/slash",
    component: _23549376,
    name: "resources-drills-mcmap-tan-bayonet-slash"
  }, {
    path: "/resources/drills/mcmap/tan/bayonet/smash",
    component: _e9947f56,
    name: "resources-drills-mcmap-tan-bayonet-smash"
  }, {
    path: "/resources/drills/mcmap/tan/bayonet/thrust",
    component: _50b5092f,
    name: "resources-drills-mcmap-tan-bayonet-thrust"
  }, {
    path: "/resources/drills/mcmap/tan/bayonet/vertical",
    component: _784cd18d,
    name: "resources-drills-mcmap-tan-bayonet-vertical"
  }, {
    path: "/resources/drills/mcmap/tan/breakfalls/back",
    component: _9ebc45fe,
    name: "resources-drills-mcmap-tan-breakfalls-back"
  }, {
    path: "/resources/drills/mcmap/tan/breakfalls/front",
    component: _1e42837f,
    name: "resources-drills-mcmap-tan-breakfalls-front"
  }, {
    path: "/resources/drills/mcmap/tan/breakfalls/roll",
    component: _22b59d97,
    name: "resources-drills-mcmap-tan-breakfalls-roll"
  }, {
    path: "/resources/drills/mcmap/tan/breakfalls/side",
    component: _3f27fd71,
    name: "resources-drills-mcmap-tan-breakfalls-side"
  }, {
    path: "/resources/drills/mcmap/tan/choke-counters/bearhug",
    component: _05e89895,
    name: "resources-drills-mcmap-tan-choke-counters-bearhug"
  }, {
    path: "/resources/drills/mcmap/tan/choke-counters/choke",
    component: _3c604213,
    name: "resources-drills-mcmap-tan-choke-counters-choke"
  }, {
    path: "/resources/drills/mcmap/tan/choke-counters/headlock",
    component: _281d1acc,
    name: "resources-drills-mcmap-tan-choke-counters-headlock"
  }, {
    path: "/resources/drills/mcmap/tan/chokes/figure-four",
    component: _44bb25cf,
    name: "resources-drills-mcmap-tan-chokes-figure-four"
  }, {
    path: "/resources/drills/mcmap/tan/chokes/rear",
    component: _fd332a18,
    name: "resources-drills-mcmap-tan-chokes-rear"
  }, {
    path: "/resources/drills/mcmap/tan/knife/slash",
    component: _fb87864e,
    name: "resources-drills-mcmap-tan-knife-slash"
  }, {
    path: "/resources/drills/mcmap/tan/knife/thrust",
    component: _627ae7a8,
    name: "resources-drills-mcmap-tan-knife-thrust"
  }, {
    path: "/resources/drills/mcmap/tan/lower/front",
    component: _51d271a9,
    name: "resources-drills-mcmap-tan-lower-front"
  }, {
    path: "/resources/drills/mcmap/tan/lower/round",
    component: _49e80a8e,
    name: "resources-drills-mcmap-tan-lower-round"
  }, {
    path: "/resources/drills/mcmap/tan/lower/stomp",
    component: _b1bd905e,
    name: "resources-drills-mcmap-tan-lower-stomp"
  }, {
    path: "/resources/drills/mcmap/tan/lower/vertical",
    component: _531e78a6,
    name: "resources-drills-mcmap-tan-lower-vertical"
  }, {
    path: "/resources/drills/mcmap/tan/strike-counters/kick",
    component: _0252b027,
    name: "resources-drills-mcmap-tan-strike-counters-kick"
  }, {
    path: "/resources/drills/mcmap/tan/strike-counters/punch",
    component: _4735ff9d,
    name: "resources-drills-mcmap-tan-strike-counters-punch"
  }, {
    path: "/resources/drills/mcmap/tan/unarmed-manipulation/armbar",
    component: _108249e0,
    name: "resources-drills-mcmap-tan-unarmed-manipulation-armbar"
  }, {
    path: "/resources/drills/mcmap/tan/unarmed-manipulation/compliance",
    component: _62082344,
    name: "resources-drills-mcmap-tan-unarmed-manipulation-compliance"
  }, {
    path: "/resources/drills/mcmap/tan/unarmed-manipulation/distracter",
    component: _576e3fdc,
    name: "resources-drills-mcmap-tan-unarmed-manipulation-distracter"
  }, {
    path: "/resources/drills/mcmap/tan/unarmed-manipulation/joint",
    component: _b796cd1e,
    name: "resources-drills-mcmap-tan-unarmed-manipulation-joint"
  }, {
    path: "/resources/drills/mcmap/tan/unarmed-manipulation/wristlock",
    component: _6d9536e1,
    name: "resources-drills-mcmap-tan-unarmed-manipulation-wristlock"
  }, {
    path: "/resources/drills/mcmap/tan/upper/gouge",
    component: _0c01b72c,
    name: "resources-drills-mcmap-tan-upper-gouge"
  }, {
    path: "/resources/drills/mcmap/tan/upper/hammer",
    component: _206a4e17,
    name: "resources-drills-mcmap-tan-upper-hammer"
  }, {
    path: "/resources/drills/mcmap/tan/upper/horizontal",
    component: _80114816,
    name: "resources-drills-mcmap-tan-upper-horizontal"
  }, {
    path: "/resources/drills/mcmap/tan/upper/vertical",
    component: _1e08b887,
    name: "resources-drills-mcmap-tan-upper-vertical"
  }, {
    path: "/",
    component: _1d18283b,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

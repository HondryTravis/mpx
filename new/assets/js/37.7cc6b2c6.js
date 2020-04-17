(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{303:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"构建配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建配置"}},[t._v("#")]),t._v(" 构建配置")]),t._v(" "),a("p",[t._v("mpx深度定制开发了一个webpack插件"),a("code",[t._v("@mpxjs/webpack-plugin")]),t._v("，基于该插件使用webpack进行小程序的编译构建工作。")]),t._v(" "),a("h2",{attrs:{id:"自动配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动配置"}},[t._v("#")]),t._v(" 自动配置")]),t._v(" "),a("p",[t._v("如果你不熟悉webpack，可以通过脚手架进行"),a("RouterLink",{attrs:{to:"/start.html"}},[t._v("快速配置")]),t._v("。")],1),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"手动配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动配置"}},[t._v("#")]),t._v(" 手动配置")]),t._v(" "),a("p",[a("strong",[t._v("webpack.config.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" MpxWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@mpxjs/webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" webpackConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mpx文件必须设置正确的loader，参考下文详细的loader设置options")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意，在最新的脚手架生成的模板中，这个loader的配置在build/build.js中")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.mpx$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MpxWebpackPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          transRpx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以是对象也可以是数组，数组可以通过include/exclude对不同资源配置不同的转换")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `only`模式下，样式前加上注释/* use rpx */可将该段样式中所有的px转换为rpx")]),t._v("\n              mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'only'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              comment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use rpx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              include"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对某些第三方组件库另设转换规则")]),t._v("\n              mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              designWidth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("375")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              include"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node_modules/vant-weapp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对本地图片资源提供增强，编译成小程序支持的格式 ")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 参考下文详细的设置")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.(png|jpe?g|gif|svg)(\\?.*)?$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MpxWebpackPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("urlLoader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img/[name][hash].[ext]'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mpx主插件，必须设置，参考下文详细的插件设置options")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MpxWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微信模式下设置为`wx`，支付宝模式下设置为`ali`")]),t._v("\n      mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wx'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sourceMap: 小程序不支持eval，因此不要设置为eval相关的sourceMap类型。")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意：webpack4新增的mode属性设置为development的时候，会将devtool默认设置为eval，")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//      必须手动设置devtool为非eval相关类型来覆盖默认配置")]),t._v("\n  devtool"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// filename设置不能更改")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name].js'")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过webpack分包能力减少小程序体积，参考下文的详细介绍")]),t._v("\n  optimization"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    runtimeChunk"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    splitChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      chunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      minChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h3",{attrs:{id:"mpxjs-webpack-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mpxjs-webpack-plugin"}},[t._v("#")]),t._v(" @mpxjs/webpack-plugin")]),t._v(" "),a("p",[a("strong",[t._v("webpack.config.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" MpxWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@mpxjs/webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nwebpackconfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在脚手架生成的项目中，mpx-webpack-plugin是在在build/build.js里插入的，但是配置项可以在build/mpx.plugin.conf.js中填写，有简单的注释说明")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MpxWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" options")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("mode")]),t._v(" "),a("code",[t._v("String")]),t._v(" 目前支持的有微信小程序(wx)\\支付宝小程序(ali)\\百度小程序(swan)\\头条小程序(tt)\\QQ小程序(qq)\\H5页面(web)")]),t._v(" "),a("li",[a("strong",[t._v("srcMode")]),t._v(" "),a("code",[t._v("String")]),t._v(" 跨平台编译场景下使用，详情请看 "),a("RouterLink",{attrs:{to:"/platform.html#跨平台编译"}},[t._v("跨平台编译")]),t._v(" 一节")],1),t._v(" "),a("li",[a("strong",[t._v("resolveMode")]),t._v(" "),a("code",[t._v("String")]),t._v(' 默认值为webpack，可选值有webpack/native，这是解析依赖路径时为了解决小程序特色绝对路径所添加的，推荐使用webpack模式，更舒服一些，json中的pages/usingComponents等需要写相对路径，但是可以直接写npm包路径。如果希望使用类似小程序原始那种"绝对路径"，就可以声明为native，但是npm路径就需要在前面加一个~，类似webpack的样式引入规范，同时必须配合projectRoot参数提供项目根目录地址。')]),t._v(" "),a("li",[a("strong",[t._v("projectRoot")]),t._v(" "),a("code",[t._v("String")]),t._v(" 如果指定resolveMode为native，则必须提供此项配置为项目根目录地址。")]),t._v(" "),a("li",[a("strong",[t._v("writeMode")]),t._v(" "),a("code",[t._v("String")]),t._v(" 小程序开发者工具检测到文件'变化'就会重新编译，并不会关系文件内容是否真正变化，而webpack每次输出都是全量的，会导致项目大了后每次重编译都较慢，为了解决这个问题，在输出前在内存中对比一次剔除未变化的文件，仅输出变化的文件以提升小程序开发者工具的编译速度。建议开启。")]),t._v(" "),a("li",[a("strong",[t._v("modeRules")]),t._v(" "),a("code",[t._v("Object")]),t._v(" mpx在应用条件编译时，可能会遇到这种场景，假设同时开发微信/支付宝两个平台，用户是以微信小程序为基准来编写代码的，但是又有一个平台差异较大的地方，在支付宝平台上期望用一份支付宝原生代码来实现，这份支付宝原生代码可能在一个npm包内或者在某个文件夹下，依照mpx默认的识别方式，需要对这些文件都加中缀.ali才可以正确识别，而通过modeRules我们可以直接声明某个路径下的文件全是某种mode。")]),t._v(" "),a("li",[a("strong",[t._v("enableAutoScope")]),t._v(" "),a("code",[t._v("Boolean")]),t._v(" 支付宝小程序没有微信小程序类似的组件样式隔离机制，如果遇到样式问题，将本选项置为true将自动为支付宝添加scope，会带来略微的体积上涨")]),t._v(" "),a("li",[a("strong",[t._v("defs")]),t._v(" "),a("code",[t._v("Object")]),t._v(" 给模板和json中定义一些全局环境变量，区别于webpack.DefinePlugin的是仅支持普通扁平对象，但支持小程序的4个文件。这样根据平台注入全局变量时能为4个文件都注入，而不仅仅是JS，以此来实现编译时去除多余的其他平台的代码。")]),t._v(" "),a("li",[a("strong",[t._v("i18n")]),t._v(" "),a("code",[t._v("Object")]),t._v(" 多语言能力，提供多语言包，在编译时生成对应的wxs方法，以完善小程序的国际化能力。")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MpxWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ali'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可选值 wx/ali/swan/qq/tt/web")]),t._v("\n  srcMode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 暂时只支持微信为源mode做跨平台，为其他时mode必须和srcMode一致")]),t._v("\n  writeMode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'changed'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可选值changed / full，不建议修改")]),t._v("\n  resolveMode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可选值 native / webpack")]),t._v("\n  projectRoot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若resolveMode为native才需要传这个以指定项目的“绝对路径”绝对于谁的")]),t._v("\n  enableAutoScope"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否开启支付宝样式scope，会带来略微的体积上涨")]),t._v("\n  defs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 常量 仅支持扁平对象，内嵌的环境变量有__mpx_mode__和__mpx_src_mode__")]),t._v("\n    apiHost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'apitest.com'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以准备多个对象，在build.js里根据参数决定塞哪个以实现开发时用某一套，上线时用哪一套")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  i18n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 多语言 参考 https://didi.github.io/mpx/i18n.html")]),t._v("\n  modeRules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 批量指定文件mode，和webpack的rules相同")]),t._v("\n    ali"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      include"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vant-aliapp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h3",{attrs:{id:"mpxwebpackplugin-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mpxwebpackplugin-loader"}},[t._v("#")]),t._v(" MpxWebpackPlugin.loader")]),t._v(" "),a("p",[a("code",[t._v("@mpxjs/webpack-plugin")]),t._v("暴露了一个静态方法"),a("code",[t._v("MpxWebpackPlugin.loader")]),t._v("作为"),a("code",[t._v(".mpx")]),t._v("文件的loader")]),t._v(" "),a("p",[a("strong",[t._v("webpack.config.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" MpxWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@mpxjs/webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nwebpackconfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.mpx$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MpxWebpackPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          transRpx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("strong",[t._v("transRpx")]),a("br"),t._v(" "),a("code",[t._v("Object | Array | boolean | string")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("false")]),t._v("关闭转换rpx")]),t._v(" "),a("li",[a("code",[t._v("'all'")]),t._v("普通样式中的px全部转换为rpx，"),a("code",[t._v("rpx注释样式")]),t._v("不转换")]),t._v(" "),a("li",[a("code",[t._v("'only'")]),t._v("普通样式中的px全部"),a("strong",[t._v("不转换")]),t._v("为rpx，"),a("code",[t._v("rpx注释样式")]),t._v("转换")]),t._v(" "),a("li",[t._v("Object包含属性：mode/comment/designWidth/include/exclude\n"),a("blockquote",[a("p",[t._v("include/exclude属性的用法和webpack对module.rules里的规则是一样的，参考"),a("a",{attrs:{href:"https://webpack.js.org/configuration/module/#rule-exclude",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack文档-exclude"),a("OutboundLink")],1)])])])])])]),t._v(" "),a("p",[t._v("该loader用于处理.mpx单文件，并可以通过options控制mpx框架提供的rpx转换能力。详情见 "),a("RouterLink",{attrs:{to:"/single/style-enhance.html#rpx转换"}},[t._v("rpx转换")])],1),t._v(" "),a("h3",{attrs:{id:"mpxjs-url-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mpxjs-url-loader"}},[t._v("#")]),t._v(" @mpxjs/url-loader")]),t._v(" "),a("p",[t._v("已废弃，功能全部收集到 @mpxjs/webpack-plugin 中。")]),t._v(" "),a("blockquote",[a("p",[t._v("想深入的了解mpx框架对小程序对图片资源的支持，查看"),a("RouterLink",{attrs:{to:"/understanding/resource.html"}},[t._v("mpx图像资源处理")]),t._v("了解更多细节")],1)]),t._v(" "),a("h3",{attrs:{id:"output-filename"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-filename"}},[t._v("#")]),t._v(" output.filename")]),t._v(" "),a("p",[t._v("小程序限定"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/structure.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("描述页面的文件具有相同的路径和文件名"),a("OutboundLink")],1),t._v("，仅以后缀名进行区分。")]),t._v(" "),a("p",[t._v("因此"),a("code",[t._v("output.filename")]),t._v("中必须写为 "),a("strong",[a("code",[t._v("[name].js")])]),t._v("，基于chunk id或者hash name的filename都会导致编译后的文件无法被小程序识别")]),t._v(" "),a("p",[a("strong",[t._v("webpack.config.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("webpackconfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name].js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确 ")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[id].js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误。chunk id name")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name].[chunkhash].js'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误。hash name")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
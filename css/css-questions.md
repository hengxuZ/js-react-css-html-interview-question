# CSS 问题

欢迎提出 PR 进行建议和指正！

* [CSS 选择器的优先级是如何计算的？](#css-选择器的优先级是如何计算的)
* [重置（resetting）CSS 和 标准化（normalizing）CSS 的区别是什么？你会选择哪种方式，为什么？](#重置resettingcss-和-标准化normalizingcss-的区别是什么你会选择哪种方式为什么)
* [请阐述`Float`定位的工作原理。](#请阐述float定位的工作原理)
* [请阐述`z-index`属性，并说明如何形成层叠上下文（stacking context）。](#请阐述z-index属性并说明如何形成层叠上下文stacking-context)
* [请阐述块格式化上下文（Block Formatting Context）及其工作原理。](#请阐述块格式化上下文block-formatting-context及其工作原理)
* [有哪些清除浮动的技术，都适用哪些情况？](#有哪些清除浮动的技术都适用哪些情况)
* [请解释什么是雪碧图（css sprites），以及如何实现？](#请解释什么是雪碧图css-sprites以及如何实现)
* [如何解决不同浏览器的样式兼容性问题？](#如何解决不同浏览器的样式兼容性问题)
* [如何为功能受限的浏览器提供页面？ 使用什么样的技术和流程？](#如何为功能受限的浏览器提供页面-使用什么样的技术和流程)
* [有什么不同的方式可以隐藏内容（使其仅适用于屏幕阅读器）？](#有什么不同的方式可以隐藏内容使其仅适用于屏幕阅读器)
* [你使用过栅格系统吗？偏爱哪一个？](#你使用过栅格系统吗偏爱哪一个)
* [你是否使用过媒体查询或移动优先的布局？](#你是否使用过媒体查询或移动优先的布局)
* [你熟悉制作 SVG 吗？](#你熟悉制作-svg-吗)
* [除了`screen`，你还能说出一个 @media 属性的例子吗？](#除了screen你还能说出一个-media-属性的例子吗)
* [编写高效的 CSS 应该注意什么？](#编写高效的-css-应该注意什么)
* [使用 CSS 预处理的优缺点分别是什么？](#使用-css-预处理的优缺点分别是什么)
* [对于你使用过的 CSS 预处理，说说喜欢和不喜欢的地方？](#对于你使用过的-css-预处理说说喜欢和不喜欢的地方)
* [如何实现一个使用非标准字体的网页设计？](#如何实现一个使用非标准字体的网页设计)
* [解释浏览器如何确定哪些元素与 CSS 选择器匹配。](#解释浏览器如何确定哪些元素与-css-选择器匹配)
* [描述伪元素及其用途。](#描述伪元素及其用途)
* [说说你对盒模型的理解，以及如何告知浏览器使用不同的盒模型渲染布局。](#说说你对盒模型的理解以及如何告知浏览器使用不同的盒模型渲染布局)
* [`* { box-sizing: border-box; }`会产生怎样的效果？](#--box-sizing-border-box-会产生怎样的效果)
* [`display`的属性值都有哪些？](#display的属性值都有哪些)
* [`inline`和`inline-block`有什么区别？](#inline和inline-block有什么区别)
* [`relative`、`fixed`、`absolute`和`static`四种定位有什么区别？](#relativefixedabsolute和static四种定位有什么区别)
* [你使用过哪些现有的 CSS 框架？你是如何改进它们的？](#你使用过哪些现有的-css-框架你是如何改进它们的)
* [你了解 CSS Flexbox 和 Grid 吗？](#你了解-css-flexbox-和-grid-吗)
* [请解释在编写网站时，响应式与移动优先的区别。](#请解释在编写网站时响应式与移动优先的区别)
* [响应式设计与自适应设计有何不同？](#响应式设计与自适应设计有何不同)
* [你有没有使用过视网膜分辨率的图形？当中使用什么技术？](#你有没有使用过视网膜分辨率的图形当中使用什么技术)
* [什么情况下，用`translate()`而不用绝对定位？什么时候，情况相反。](#什么情况下用translate而不用绝对定位什么时候情况相反)
- [CSS选择器有哪些](#css选择器有哪些)
- [css sprite是什么,有什么优缺点](#css-sprite是什么有什么优缺点)
- [`display: none;`与`visibility: hidden;`的区别](#display-none与visibility-hidden的区别)
- [css hack原理及常用hack](#css-hack原理及常用hack)
- [specified value,computed value,used value计算方法](#specified-valuecomputed-valueused-value计算方法)
- [`link`与`@import`的区别](#link与@import的区别)
- [``display: block;``和``display: inline;``的区别](#display-block和display-inline的区别)
- [PNG,GIF,JPG的区别及如何选](#pnggifjpg的区别及如何选)
- [CSS有哪些继承属性](#css有哪些继承属性)
- [IE6浏览器有哪些常见的bug,缺陷或者与标准不一致的地方,如何解决](#ie6浏览器有哪些常见的bug缺陷或者与标准不一致的地方如何解决)
- [容器包含若干浮动元素时如何清理(包含)浮动](#容器包含若干浮动元素时如何清理包含浮动)
- [什么是FOUC?如何避免](#什么是fouc如何避免)
- [如何创建块级格式化上下文(block formatting context),BFC有什么用](#如何创建块级格式化上下文block-formatting-contextbfc有什么用)
- [display,float,position的关系](#displayfloatposition的关系)
- [外边距折叠(collapsing margins)](#外边距折叠collapsing-margins)
- [如何确定一个元素的包含块(containing block)](#如何确定一个元素的包含块containing-block)
- [stacking context,布局规则](#stacking-context布局规则)
- [如何水平居中一个元素](#如何水平居中一个元素)
- [如何竖直居中一个元素](#如何竖直居中一个元素)
### CSS 选择器的优先级是如何计算的？

浏览器通过优先级规则，判断元素展示哪些样式。优先级通过 4 个维度指标确定，我们假定以`a、b、c、d`命名，分别代表以下含义：

1. `a`表示是否使用内联样式（inline style）。如果使用，`a`为 1，否则为 0。
2. `b`表示 ID 选择器的数量。
3. `c`表示类选择器、属性选择器和伪类选择器数量之和。
4. `d`表示标签（类型）选择器和伪元素选择器之和。

优先级的结果并非通过以上四个值生成一个得分，而是每个值分开比较。`a、b、c、d`权重从左到右，依次减小。判断优先级时，从左到右，一一比较，直到比较出最大值，即可停止。所以，如果`b`的值不同，那么`c`和`d`不管多大，都不会对结果产生影响。比如`0，1，0，0`的优先级高于`0，0，10，10`。

当出现优先级相等的情况时，最晚出现的样式规则会被采纳。如果你在样式表里写了相同的规则（无论是在该文件内部还是其它样式文件中），那么最后出现的（在文件底部的）样式优先级更高，因此会被采纳。

在写样式时，我会使用较低的优先级，这样这些样式可以轻易地覆盖掉。尤其对写 UI 组件的时候更为重要，这样使用者就不需要通过非常复杂的优先级规则或使用`!important`的方式，去覆盖组件的样式了。

###### 参考

* https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/
* https://www.sitepoint.com/web-foundations/specificity/

[[↑] 回到顶部](#css-问题)

### 重置（resetting）CSS 和 标准化（normalizing）CSS 的区别是什么？你会选择哪种方式，为什么？

* **重置（Resetting）**： 重置意味着除去所有的浏览器默认样式。对于页面所有的元素，像`margin`、`padding`、`font-size`这些样式全部置成一样。你将必须重新定义各种元素的样式。
* **标准化（Normalizing）**： 标准化没有去掉所有的默认样式，而是保留了有用的一部分，同时还纠正了一些常见错误。

当需要实现非常个性化的网页设计时，我会选择重置的方式，因为我要写很多自定义的样式以满足设计需求，这时候就不再需要标准化的默认样式了。

###### 参考

* https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css

[[↑] 回到顶部](#css-问题)

### 请阐述`Float`定位的工作原理。

浮动（float）是 CSS 定位属性。浮动元素从网页的正常流动中移出，但是保持了部分的流动性，会影响其他元素的定位（比如文字会围绕着浮动元素）。这一点与绝对定位不同，绝对定位的元素完全从文档流中脱离。

CSS 的`clear`属性通过使用`left`、`right`、`both`，让该元素向下移动（清除浮动）到浮动元素下面。

如果父元素只包含浮动元素，那么该父元素的高度将塌缩为 0。我们可以通过清除（clear）从浮动元素后到父元素关闭前之间的浮动来修复这个问题。

有一种 hack 的方法，是自定义一个`.clearfix`类，利用伪元素选择器`::after`清除浮动。[另外还有一些方法](https://css-tricks.com/all-about-floats/#article-header-id-4)，比如添加空的`<div></div>`和设置浮动元素父元素的`overflow`属性。与这些方法不同的是，`clearfix`方法，只需要给父元素添加一个类，定义如下：

```css
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
```

值得一提的是，把父元素属性设置为`overflow: auto`或`overflow: hidden`，会使其内部的子元素形成块格式化上下文（Block Formatting Context），并且父元素会扩张自己，使其能够包围它的子元素。

###### 参考

* https://css-tricks.com/all-about-floats/

[[↑] 回到顶部](#css-问题)

### 请阐述`z-index`属性，并说明如何形成层叠上下文（stacking context）。

CSS 中的`z-index`属性控制重叠元素的垂直叠加顺序。`z-index`只能影响`position`值不是`static`的元素。

没有定义`z-index`的值时，元素按照它们出现在 DOM 中的顺序堆叠（层级越低，出现位置越靠上）。非静态定位的元素（及其子元素）将始终覆盖静态定位（static）的元素，而不管 HTML 层次结构如何。

层叠上下文是包含一组图层的元素。 在一组层叠上下文中，其子元素的`z-index`值是相对于该父元素而不是 document root 设置的。每个层叠上下文完全独立于它的兄弟元素。如果元素 B 位于元素 A 之上，则即使元素 A 的子元素 C 具有比元素 B 更高的`z-index`值，元素 C 也永远不会在元素 B 之上.

每个层叠上下文是自包含的：当元素的内容发生层叠后，整个该元素将会在父层叠上下文中按顺序进行层叠。少数 CSS 属性会触发一个新的层叠上下文，例如`opacity`小于 1，`filter`不是`none`，`transform`不是`none`。

###### 参考

* https://css-tricks.com/almanac/properties/z/z-index/
* https://philipwalton.com/articles/what-no-one-told-you-about-z-index/
* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context

[[↑] 回到顶部](#css-问题)

### 请阐述块格式化上下文（Block Formatting Context）及其工作原理。

块格式上下文（BFC）是 Web 页面的可视化 CSS 渲染的部分，是块级盒布局发生的区域，也是浮动元素与其他元素交互的区域。

一个 HTML 盒（Box）满足以下任意一条，会创建块格式化上下文：

* `float`的值不是`none`.
* `position`的值不是`static`或`relative`.
* `display`的值是`table-cell`、`table-caption`、`inline-block`、`flex`、或`inline-flex`。
* `overflow`的值不是`visible`。

在 BFC 中，每个盒的左外边缘都与其包含的块的左边缘相接。

两个相邻的块级盒在垂直方向上的边距会发生合并（collapse）。更多内容请参考[边距合并（margin collapsing）](https://www.sitepoint.com/web-foundations/collapsing-margins/)。

###### 参考

* https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context
* https://www.sitepoint.com/understanding-block-formatting-contexts-in-css/

[[↑] 回到顶部](#css-问题)

### 有哪些清除浮动的技术，都适用哪些情况？

* 空`div`方法：`<div style="clear:both;"></div>`。
* Clearfix 方法：上文使用`.clearfix`类已经提到。
* `overflow: auto`或`overflow: hidden`方法：上文已经提到。

在大型项目中，我会使用 Clearfix 方法，在需要的地方使用`.clearfix`。设置`overflow: hidden`的方法可能使其子元素显示不完整，当子元素的高度大于父元素时。

[[↑] 回到顶部](#css-问题)

### 请解释什么是雪碧图（css sprites），以及如何实现？

雪碧图是把多张图片整合到一张上的图片。它被运用在众多使用了很多小图标的网站上（Gmail 在使用）。实现方法：

1. 使用生成器将多张图片打包成一张雪碧图，并为其生成合适的 CSS。
1. 每张图片都有相应的 CSS 类，该类定义了`background-image`、`background-position`和`background-size`属性。
1. 使用图片时，将相应的类添加到你的元素中。

好处：

* 减少加载多张图片的 HTTP 请求数（一张雪碧图只需要一个请求）。但是对于 HTTP2 而言，加载多张图片不再是问题。
* 提前加载资源，防止在需要时才在开始下载引发的问题，比如只出现在`:hover`伪类中的图片，不会出现闪烁。

###### 参考

* https://css-tricks.com/css-sprites/

[[↑] 回到顶部](#css-问题)

### 如何解决不同浏览器的样式兼容性问题？

* 在确定问题原因和有问题的浏览器后，使用单独的样式表，仅供出现问题的浏览器加载。这种方法需要使用服务器端渲染。
* 使用已经处理好此类问题的库，比如 Bootstrap。
* 使用 `autoprefixer` 自动生成 CSS 属性前缀。
* 使用 Reset CSS 或 Normalize.css。

[[↑] 回到顶部](#css-问题)

### 如何为功能受限的浏览器提供页面？ 使用什么样的技术和流程？

* 优雅的降级：为现代浏览器构建应用，同时确保它在旧版浏览器中正常运行。
* 渐进式增强：构建基于用户体验的应用，但在浏览器支持时添加新增功能。
* 利用 [caniuse.com](https://caniuse.com/) 检查特性支持。
* 使用 `autoprefixer` 自动生成 CSS 属性前缀。
* 使用 [Modernizr](https://modernizr.com/)进行特性检测。

[[↑] 回到顶部](#css-问题)

### 有什么不同的方式可以隐藏内容（使其仅适用于屏幕阅读器）？

这些方法与可访问性（a11y）有关。

* `visibility: hidden`：元素仍然在页面流中，并占用空间。
* `width: 0; height: 0`：使元素不占用屏幕上的任何空间，导致不显示它。
* `position: absolute; left: -99999px`： 将它置于屏幕之外。
* `text-indent: -9999px`：这只适用于`block`元素中的文本。
* Metadata： 例如通过使用 Schema.org，RDF 和 JSON-LD。
* WAI-ARIA：如何增加网页可访问性的 W3C 技术规范。

即使 WAI-ARIA 是理想的解决方案，我也会采用绝对定位方法，因为它具有最少的注意事项，适用于大多数元素，而且使用起来非常简单。

###### 参考

* https://www.w3.org/TR/wai-aria-1.1/
* https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
* http://a11yproject.com/

[[↑] 回到顶部](#css-问题)

### 你使用过栅格系统吗？偏爱哪一个？

我使用 `float`-based 栅格系统，因为它相比 flex、grid 系统，拥有更多浏览器的支持。它已经在 Bootstrap 中使用多年，并且已经被证明是可行的。

[[↑] 回到顶部](#css-问题)

### 你是否使用过媒体查询或移动优先的布局？

是的，一个例子就是根据窗口的尺寸改变导航的样式。

[[↑] 回到顶部](#css-问题)

### 你熟悉制作 SVG 吗？

是的，你可以使用内联CSS、嵌入式CSS部分或外部CSS文件对形状进行着色（包括指定对象上的属性）。在网上大部分SVG使用的是内联CSS，不过每个类型都有优点和缺点。

通过设置`fill`和`stroke`属性，可以完成基本着色操作。`fill`可以设置内部的颜色，`stroke`可以设置周围绘制的线条的颜色。你可以使用与`HTML`中使用的CSS颜色命名方案相同的CSS颜色命名方案：颜色名称（即`red`）、RGB值（即`rgb(255,0,0)`）、十六进制值、RGBA值等等。

```html
<rect x="10" y="10" width="100" height="100" stroke="blue" 
  fill="purple" fill-opacity="0.5" stroke-opacity="0.8"/>
```

###### 参考

* https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes


[[↑] 回到顶部](#css-问题)

### 除了`screen`，你还能说出一个 @media 属性的例子吗？

TODO

[[↑] 回到顶部](#css-问题)

### 编写高效的 CSS 应该注意什么？

首先，浏览器从最右边的选择器，即关键选择器（key selector），向左依次匹配。根据关键选择器，浏览器从 DOM 中筛选出元素，然后向上遍历被选元素的父元素，判断是否匹配。选择器匹配语句链越短，浏览器的匹配速度越快。避免使用标签和通用选择器作为关键选择器，因为它们会匹配大量的元素，浏览器必须要进行大量的工作，去判断这些元素的父元素们是否匹配。

[BEM (Block Element Modifier)](https://bem.info/) methodology recommends that everything has a single class, and, where you need hierarchy, that gets baked into the name of the class as well, this naturally makes the selector efficient and easy to override.
[BEM (Block Element Modifier)](https://bem.info/)原则上建议为独立的 CSS 类命名，并且在需要层级关系时，将关系也体现在命名中，这自然会使选择器高效且易于覆盖。

搞清楚哪些 CSS 属性会触发重新布局（reflow）、重绘（repaint）和合成（compositing）。在写样式时，避免触发重新布局的可能。

###### 参考

* https://developers.google.com/web/fundamentals/performance/rendering/
* https://csstriggers.com/

[[↑] 回到顶部](#css-问题)

### 使用 CSS 预处理的优缺点分别是什么？

优点：

* 提高 CSS 可维护性。
* 易于编写嵌套选择器。
* 引入变量，增添主题功能。可以在不同的项目中共享主题文件。
* 通过混合（Mixins）生成重复的 CSS。
* Splitting your code into multiple files. CSS files can be split up too but doing so will require a HTTP request to download each CSS file.
* 将代码分割成多个文件。不进行预处理的 CSS，虽然也可以分割成多个文件，但需要建立多个 HTTP 请求加载这些文件。

缺点：

* 需要预处理工具。
* 重新编译的时间可能会很慢。

[[↑] 回到顶部](#css-问题)

### 对于你使用过的 CSS 预处理，说说喜欢和不喜欢的地方？

喜欢：

* 绝大部分优点上题以及提过。
* Less 用 JavaScript 实现，与 NodeJS 高度结合。

**Dislikes:**

* 我通过`node-sass`使用 Sass，它用 C ++ 编写的 LibSass 绑定。在 Node 版本切换时，我必须经常重新编译。
* Less 中，变量名称以`@`作为前缀，容易与 CSS 关键字混淆，如`@media`、`@import`和`@font-face`。

[[↑] 回到顶部](#css-问题)

### 如何实现一个使用非标准字体的网页设计？

使用`@font-face`并为不同的`font-weight`定义`font-family`。

[[↑] 回到顶部](#css-问题)

### 解释浏览器如何确定哪些元素与 CSS 选择器匹配。

这部分与上面关于编写高效的 CSS 有关。浏览器从最右边的选择器（关键选择器）根据关键选择器，浏览器从 DOM 中筛选出元素，然后向上遍历被选元素的父元素，判断是否匹配。选择器匹配语句链越短，浏览器的匹配速度越快。

例如，对于形如`p span`的选择器，浏览器首先找到所有`<span>`元素，并遍历它的父元素直到根元素以找到`<p>`元素。对于特定的`<span>`，只要找到一个`<p>`，就知道'<span>`已经匹配并停止继续匹配。

###### 参考

* https://stackoverflow.com/questions/5797014/why-do-browsers-match-css-selectors-from-right-to-left

[[↑] 回到顶部](#css-问题)

### 描述伪元素及其用途。

CSS 伪元素是添加到选择器的关键字，去选择元素的特定部分。它们可以用于装饰（`:first-line`，`:first-letter`）或将元素添加到标记中（与 content:...组合），而不必修改标记（`:before`，`:after`）。

* `:first-line`和`:first-letter`可以用来修饰文字。
* 上面提到的`.clearfix`方法中，使用`clear: both`来添加不占空间的元素。
* 使用`:before`和`after`展示提示中的三角箭头。鼓励关注点分离，因为三角被视为样式的一部分，而不是真正的 DOM。如果不使用额外的 HTML 元素，只用 CSS 样式绘制三角形是不太可能的。

###### 参考

* https://css-tricks.com/almanac/selectors/a/after-and-before/

[[↑] 回到顶部](#css-问题)

### 说说你对盒模型的理解，以及如何告知浏览器使用不同的盒模型渲染布局。

CSS 盒模型描述了以文档树中的元素而生成的矩形框，并根据排版模式进行布局。每个盒子都有一个内容区域（例如文本，图像等）以及周围可选的`padding`、`border`和`margin`区域。

CSS 盒模型负责计算：

* 块级元素占用多少空间。
* 边框是否重叠，边距是否合并。
* 盒子的尺寸。

盒模型有以下规则：

* 块级元素的大小由`width`、`height`、`padding`、`border`和`margin`决定。
* 如果没有指定`height`，则块级元素的高度等于其包含子元素的内容高度加上`padding`（除非有浮动元素，请参阅下文）。
* 如果没有指定`width`，则非浮动块级元素的宽度等于其父元素的宽度减去父元素的`padding`。
* 元素的`height`是由内容的`height`来计算的。
* 元素的`width`是由内容的`width`来计算的。
* 默认情况下，`padding`和`border`不是元素`width`和`height`的组成部分。

###### 参考

* https://www.smashingmagazine.com/2010/06/the-principles-of-cross-browser-css-coding/#understand-the-css-box-model

[[↑] 回到顶部](#css-问题)

### `* { box-sizing: border-box; }`会产生怎样的效果？

* 元素默认应用了`box-sizing: content-box`，元素的宽高只会决定内容（content）的大小。
* `box-sizing: border-box`改变计算元素`width`和`height`的方式，`border`和`padding`的大小也将计算在内。
* 元素的`height` = 内容（content）的高度 + 垂直方向的`padding` + 垂直方向`border`的宽度
* 元素的`width` = 内容（content）的宽度 + 水平方向的`padding` + 水平方向`border`的宽度

[[↑] 回到顶部](#css-问题)

### `display`的属性值都有哪些？

* `none`, `block`, `inline`, `inline-block`, `table`, `table-row`, `table-cell`, `list-item`.

TODO

[[↑] 回到顶部](#css-问题)

### `inline`和`inline-block`有什么区别？

我把`block`也加入其中，为了获得更好的比较。

|                                 | `block`                                                     | `inline-block`                             | `inline`                                                                                                           |
| ------------------------------- | ----------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| 大小                            | 填充其父容器的宽度。                                        | 取决于内容。                               | 取决于内容。                                                                                                       |
| 定位                            | 从新的一行开始，并且不允许旁边有 HTML 元素（除非是`float`） | 与其他内容一起流动，并允许旁边有其他元素。 | 与其他内容一起流动，并允许旁边有其他元素。                                                                         |
| 能否设置`width`和`height`       | 能                                                          | 能                                         | 不能。 设置会被忽略。                                                                                              |
| 可以使用`vertical-align`对齐    | 不可以                                                      | 可以                                       | 可以                                                                                                               |
| 边距（margin）和填充（padding） | 各个方向都存在                                              | 各个方向都存在                             | 只有水平方向存在。垂直方向会被忽略。 尽管`border`和`padding`在`content`周围，但垂直方向上的空间取决于'line-height' |
| 浮动（float）                   | -                                                           | -                                          | 就像一个`block`元素，可以设置垂直边距和填充。                                                                      |

[[↑] 回到顶部](#css-问题)

### `relative`、`fixed`、`absolute`和`static`四种定位有什么区别？

经过定位的元素，其`position`属性值必然是`relative`、`absolute`、`fixed`或`sticky`。

* `static`：默认定位属性值。该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。
* `relative`：该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。
* `absolute`：不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。
* `fixed`：不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。fixed 属性会创建新的层叠上下文。当元素祖先的 transform 属性非 none 时，容器由视口改为该祖先。
* `sticky`：盒位置根据正常流计算(这称为正常流动中的位置)，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。在所有情况下（即便被定位元素为 `table` 时），该元素定位均不对后续元素造成影响。当元素 B 被粘性定位时，后续元素的位置仍按照 B 未定位时的位置来确定。`position: sticky` 对 `table` 元素的效果与 `position: relative` 相同。

###### 参考

* https://developer.mozilla.org/en/docs/Web/CSS/position

[[↑] 回到顶部](#css-问题)

### 你使用过哪些现有的 CSS 框架？你是如何改进它们的？

* **Bootstrap**： 更新周期缓慢。Bootstrap 4 已经处于 alpha 版本将近两年了。添加了在页面中广泛使用的微调按钮组件。
* **Semantic UI**：源代码结构使得自定义主题很难理解。非常规主题系统的使用体验很差。外部库的路径需要硬编码（hard code）配置。变量重新赋值没有 Bootstrap 设计得好。
* **Bulma**： 需要很多非语义的类和标记，显得很多余。不向后兼容，以至于升级版本后，会破坏应用的正常运行。

[[↑] 回到顶部](#css-问题)

### 你了解 CSS Flexbox 和 Grid 吗？

了解。Flexbox 主要用于一维布局，而 Grid 则用于二维布局。

Flexbox 解决了 CSS 中的许多常见问题，例如容器中元素的垂直居中，粘性定位（sticky）的页脚等。Bootstrap 和 Bulma 基于 Flexbox，这是创建布局的推荐方式。我之前曾使用过 Flexbox，但在使用`flex-grow`时遇到了一些浏览器不兼容问题（Safari），我必须使用`inline-blocks`和手动计算百分比宽度，来重写我的代码，这种体验不是很好。

Grid 创建基于栅格的布局，是迄今为止最直观的方法（最好是！），但目前浏览器支持并不广泛。

###### 参考

* https://philipwalton.github.io/solved-by-flexbox/

[[↑] 回到顶部](#css-问题)

### 请解释在编写网站时，响应式与移动优先的区别。

TODO

[[↑] 回到顶部](#css-问题)

### 响应式设计与自适应设计有何不同？

响应式设计和自适应设计都以提高不同设备间的用户体验为目标，根据视窗大小、分辨率、使用环境和控制方式等参数进行优化调整。

响应式设计的适应性原则：网站应该凭借一份代码，在各种设备上都有良好的显示和使用效果。响应式网站通过使用媒体查询，自适应栅格和响应式图片，基于多种因素进行变化，创造出优良的用户体验。就像一个球通过膨胀和收缩，来适应不同大小的篮圈。

自适应设计更像是渐进式增强的现代解释。与响应式设计单一地去适配不同，自适应设计通过检测设备和其他特征，从早已定义好的一系列视窗大小和其他特性中，选出最恰当的功能和布局。与使用一个球去穿过各种的篮筐不同，自适应设计允许使用多个球，然后根据不同的篮筐大小，去选择最合适的一个。

###### 参考

* https://developer.mozilla.org/en-US/docs/Archive/Apps/Design/UI_layout_basics/Responsive_design_versus_adaptive_design
* http://mediumwell.com/responsive-adaptive-mobile/
* https://css-tricks.com/the-difference-between-responsive-and-adaptive-design/

[[↑] 回到顶部](#css-问题)

### 你有没有使用过视网膜分辨率的图形？当中使用什么技术？

我倾向于使用更高分辨率的图形（显示尺寸的两倍）来处理视网膜显示。更好的方法是使用媒体查询，像`@media only screen and (min-device-pixel-ratio: 2) { ... }`，然后改变`background-image`。

对于图标类的图形，我会尽可能使用 svg 和图标字体，因为它们在任何分辨率下，都能被渲染得十分清晰。

还有一种方法是，在检查了`window.devicePixelRatio`的值后，利用 JavaScript 将`<img>`的`src`属性修改，用更高分辨率的版本进行替换。

###### 参考

* https://www.sitepoint.com/css-techniques-for-retina-displays/

[[↑] 回到顶部](#css-问题)

### 什么情况下，用`translate()`而不用绝对定位？什么时候，情况相反。

`translate()`是`transform`的一个值。改变`transform`或`opacity`不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。而改变绝对定位会触发重新布局，进而触发重绘和复合。`transform`使浏览器为元素创建一个 GPU 图层，但改变绝对定位会使用到 CPU。 因此`translate()`更高效，可以缩短平滑动画的绘制时间。

当使用`translate()`时，元素仍然占据其原始空间（有点像`position：relative`），这与改变绝对定位不同。

###### 参考

* https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/

[[↑] 回到顶部](#css-问题)

### 其他答案

* https://neal.codes/blog/front-end-interview-css-questions
* https://quizlet.com/28293152/front-end-interview-questions-css-flash-cards/
* http://peterdoes.it/2015/12/03/a-personal-exercise-front-end-job-interview-questions-and-my-answers-all/

### CSS选择器有哪些

1. ***通用选择器**：选择所有元素，**不参与计算优先级**，兼容性IE6+
2. **#X id选择器**：选择id值为X的元素，兼容性：IE6+
3. **.X 类选择器**： 选择class包含X的元素，兼容性：IE6+
4. **X Y后代选择器**： 选择满足X选择器的后代节点中满足Y选择器的元素，兼容性：IE6+
5. **X 元素选择器**： 选择标所有签为X的元素，兼容性：IE6+
6. **:link，：visited，：focus，：hover，：active链接状态**： 选择特定状态的链接元素，顺序LoVe HAte，兼容性: IE4+
7. **X + Y直接兄弟选择器**：在**X之后第一个兄弟节点**中选择满足Y选择器的元素，兼容性： IE7+
8. **X > Y子选择器**： 选择X的子元素中满足Y选择器的元素，兼容性： IE7+
9. **X ~ Y兄弟**： 选择**X之后所有兄弟节点**中满足Y选择器的元素，兼容性： IE7+
10. **[attr]**：选择所有设置了attr属性的元素，兼容性IE7+
11. **[attr=value]**：选择属性值刚好为value的元素
12. **[attr~=value]**：选择属性值为空白符分隔，其中一个的值刚好是value的元素
13. **[attr|=value]**：选择属性值刚好为value或者value-开头的元素
14. **[attr^=value]**：选择属性值以value开头的元素
15. **[attr$=value]**：选择属性值以value结尾的元素
16. **[attr*=value]**：选择属性值中包含value的元素
17. **[:checked]**：选择单选框，复选框，下拉框中选中状态下的元素，兼容性：IE9+
18. **X:after, X::after**：after伪元素，选择元素虚拟子元素（元素的最后一个子元素），CSS3中::表示伪元素。兼容性:after为IE8+，::after为IE9+
18. **:hover**：鼠标移入状态的元素，兼容性a标签IE4+， 所有元素IE7+
19. **:not(selector)**：选择不符合selector的元素。**不参与计算优先级**，兼容性：IE9+
20. **::first-letter**：伪元素，选择块元素第一行的第一个字母，兼容性IE5.5+
21. **::first-line**：伪元素，选择块元素的第一行，兼容性IE5.5+
22. **:nth-child(an + b)**：伪类，选择前面有an + b - 1个兄弟节点的元素，其中n
&gt;= 0， 兼容性IE9+
23. **:nth-last-child(an + b)**：伪类，选择后面有an + b - 1个兄弟节点的元素
其中n &gt;= 0，兼容性IE9+
24. **X:nth-of-type(an+b)**：伪类，X为选择器，**解析得到元素标签**，选择**前面**有an + b - 1个**相同标签**兄弟节点的元素。兼容性IE9+
25. **X:nth-last-of-type(an+b)**：伪类，X为选择器，解析得到元素标签，选择**后面**有an+b-1个相同**标签**兄弟节点的元素。兼容性IE9+
26. **X:first-child**：伪类，选择满足X选择器的元素，且这个元素是其父节点的第一个子元素。兼容性IE7+
27. **X:last-child**：伪类，选择满足X选择器的元素，且这个元素是其父节点的最后一个子元素。兼容性IE9+
28. **X:only-child**：伪类，选择满足X选择器的元素，且这个元素是其父元素的唯一子元素。兼容性IE9+
29. **X:only-of-type**：伪类，选择X选择的元素，**解析得到元素标签**，如果该元素没有相同类型的兄弟节点时选中它。兼容性IE9+
30. **X:first-of-type**：伪类，选择X选择的元素，**解析得到元素标签**，如果该元素
是此此类型元素的第一个兄弟。选中它。兼容性IE9+


### css sprite是什么,有什么优缺点

概念：将多个小图片拼接到一个图片中。通过background-position和元素尺寸调节需要显示的背景图案。

优点：

1. 减少HTTP请求数，极大地提高页面加载速度
2. 增加图片信息重复度，提高压缩比，减少图片大小
3. 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现

缺点：

1. 图片合并麻烦
2. 维护麻烦，修改一个图片可能需要从新布局整个图片，样式


### `display: none;`与`visibility: hidden;`的区别
联系：它们都能让元素不可见

区别：

1. display:none;会让元素完全从渲染树中消失，渲染的时候不占据任何空间；visibility: hidden;不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见
2. display: none;是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；visibility: hidden;是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式
3. 修改常规流中元素的display通常会造成文档重排。修改visibility属性只会造成本元素的重绘。
4. 读屏器不会读取display: none;元素内容；会读取visibility: hidden;元素内容

### css hack原理及常用hack

原理：利用**不同浏览器对CSS的支持和解析结果不一样**编写针对特定浏览器样式。常见的hack有1）属性hack。2）选择器hack。3）IE条件注释

- IE条件注释：适用于[IE5, IE9]常见格式如下

```
<!--[if IE 6]>
Special instructions for IE 6 here
<![endif]-->
```

- 选择器hack：不同浏览器对选择器的支持不一样

```
/***** Selector Hacks ******/

/* IE6 and below */
* html #uno  { color: red }

/* IE7 */
*:first-child+html #dos { color: red }

/* IE7, FF, Saf, Opera  */
html>body #tres { color: red }

/* IE8, FF, Saf, Opera (Everything but IE 6,7) */
html>/**/body #cuatro { color: red }

/* Opera 9.27 and below, safari 2 */
html:first-child #cinco { color: red }

/* Safari 2-3 */
html[xmlns*=""] body:last-child #seis { color: red }

/* safari 3+, chrome 1+, opera9+, ff 3.5+ */
body:nth-of-type(1) #siete { color: red }

/* safari 3+, chrome 1+, opera9+, ff 3.5+ */
body:first-of-type #ocho {  color: red }

/* saf3+, chrome1+ */
@media screen and (-webkit-min-device-pixel-ratio:0) {
 #diez  { color: red  }
}

/* iPhone / mobile webkit */
@media screen and (max-device-width: 480px) {
 #veintiseis { color: red  }
}

/* Safari 2 - 3.1 */
html[xmlns*=""]:root #trece  { color: red  }

/* Safari 2 - 3.1, Opera 9.25 */
*|html[xmlns*=""] #catorce { color: red  }

/* Everything but IE6-8 */
:root *> #quince { color: red  }

/* IE7 */
*+html #dieciocho {  color: red }

/* Firefox only. 1+ */
#veinticuatro,  x:-moz-any-link  { color: red }

/* Firefox 3.0+ */
#veinticinco,  x:-moz-any-link, x:default  { color: red  }
```

- 属性hack：不同浏览器解析bug或方法

```
/* IE6 */
#once { _color: blue }

/* IE6, IE7 */
#doce { *color: blue; /* or #color: blue */ }

/* Everything but IE6 */
#diecisiete { color/**/: blue }

/* IE6, IE7, IE8 */
#diecinueve { color: blue\9; }

/* IE7, IE8 */
#veinte { color/*\**/: blue\9; }

/* IE6, IE7 -- acts as an !important */
#veintesiete { color: blue !ie; } /* string after ! can be anything */
```

### specified value,computed value,used value计算方法

- specified value: 计算方法如下：
    1. 如果样式表设置了一个值，使用这个值
    2. 如果没有设置值，这个属性是继承属性，从父元素继承
    3. 如果没设置，并且不是继承属性，使用css规范指定的初始值

- computed value: 以specified value根据规范定义的行为进行计算，通常将相对值计算为绝对值，例如em根据font-size进行计算。一些使用百分数并且需要布局来决定最终值的属性，如width，margin。百分数就直接作为computed value。line-height的无单位值也直接作为computed value。这些值将在计算used value时得到绝对值。**computed value的主要作用是用于继承**

- used value：属性计算后的最终值，对于大多数属性可以通过window.getComputedStyle获得，尺寸值单位为像素。以下属性依赖于布局，
    - background-position
    - bottom, left, right, top
    - height, width
    - margin-bottom, margin-left, margin-right, margin-top
    - min-height, min-width
    - padding-bottom, padding-left, padding-right, padding-top
    - text-indent

### `link`与`@import`的区别

1. ``link``是HTML方式， ``@import``是CSS方式
2. ``link``最大限度支持并行下载，``@import``过多嵌套导致串行下载，出现[FOUC](http://www.bluerobot.com/web/css/fouc.asp/)
4. ``link``可以通过``rel="alternate stylesheet"``指定候选样式
5. 浏览器对``link``支持早于``@import``，可以使用``@import``对老浏览器隐藏样式
6. ``@import``必须在样式规则之前，可以在css文件中引用其他文件
6. 总体来说：**[link优于@import](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/)**

### ``display: block;``和``display: inline;``的区别

``block``元素特点：

1.处于常规流中时，如果``width``没有设置，会自动填充满父容器
2.可以应用``margin/padding``
3.在没有设置高度的情况下会扩展高度以包含常规流中的子元素
4.处于常规流中时布局时在前后元素位置之间（独占一个水平空间）
5.忽略``vertical-align``

``inline``元素特点

1.水平方向上根据``direction``依次布局
2.不会在元素前后进行换行
3.受``white-space``控制
4.``margin/padding``在竖直方向上无效，水平方向上有效
5.``width/height``属性对非替换行内元素无效，宽度由元素内容决定
6.非替换行内元素的行框高由``line-height``确定，替换行内元素的行框高由``height``,``margin``,``padding``,``border``决定
6.浮动或绝对定位时会转换为``block``
7.``vertical-align``属性生效



### PNG,GIF,JPG的区别及如何选
参考资料： [选择正确的图片格式](http://www.yuiblog.com/blog/2008/11/04/imageopt-2/)
**GIF**:

1. 8位像素，256色
2. 无损压缩
3. 支持简单动画
4. 支持boolean透明
5. 适合简单动画

**JPEG**：

1. 颜色限于256
2. 有损压缩
3. 可控制压缩质量
4. 不支持透明
5. 适合照片

**PNG**：

1. 有PNG8和truecolor PNG
2. PNG8类似GIF颜色上限为256，文件小，支持alpha透明度，无动画
3. 适合图标、背景、按钮

### CSS有哪些继承属性

- 关于文字排版的属性如：
  +  [font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
  +  [word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
  +  [letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
  +  [text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
  +  [text-rendering](https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering)
  +  [word-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing)
  +  [white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  +  [text-indent](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
  +  [text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
  +  [text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
- [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
- [visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)
- [cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)



### IE6浏览器有哪些常见的bug,缺陷或者与标准不一致的地方,如何解决

- IE6不支持min-height，解决办法使用css hack：

```
.target {
    min-height: 100px;
    height: auto !important;
    height: 100px;   // IE6下内容高度超过会自动扩展高度
}
```

- ``ol``内``li``的序号全为1，不递增。解决方法：为li设置样式``display: list-item;``

- 未定位父元素``overflow: auto;``，包含``position: relative;``子元素，子元素高于父元素时会溢出。解决办法：1）子元素去掉``position: relative;``; 2）不能为子元素去掉定位时，父元素``position: relative;``

```
<style type="text/css">
.outer {
    width: 215px;
    height: 100px;
    border: 1px solid red;
    overflow: auto;
    position: relative;  /* 修复bug */
}
.inner {
    width: 100px;
    height: 200px;
    background-color: purple;
    position: relative;
}
</style>

<div class="outer">
    <div class="inner"></div>
</div>
```

- IE6只支持``a``标签的``:hover``伪类，解决方法：使用js为元素监听mouseenter，mouseleave事件，添加类实现效果：

```
<style type="text/css">
.p:hover,
.hover {
    background: purple;
}
</style>

<p class="p" id="target">aaaa bbbbb<span>DDDDDDDDDDDd</span> aaaa lkjlkjdf j</p>

<script type="text/javascript">
function addClass(elem, cls) {
    if (elem.className) {
        elem.className += ' ' + cls;
    } else {
        elem.className = cls;
    }
}
function removeClass(elem, cls) {
    var className = ' ' + elem.className + ' ';
    var reg = new RegExp(' +' + cls + ' +', 'g');
    elem.className = className.replace(reg, ' ').replace(/^ +| +$/, '');
}

var target = document.getElementById('target');
if (target.attachEvent) {
    target.attachEvent('onmouseenter', function () {
        addClass(target, 'hover');
    });
    target.attachEvent('onmouseleave', function () {
        removeClass(target, 'hover');
    })
}
</script>
```

- IE5-8不支持``opacity``，解决办法：

```
.opacity {
    opacity: 0.4
    filter: alpha(opacity=60); /* for IE5-7 */
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"; /* for IE 8*/
}
```

- IE6在设置``height``小于``font-size``时高度值为``font-size``，解决办法：``font-size: 0;``
- IE6不支持PNG透明背景，解决办法: **IE6下使用gif图片**
- IE6-7不支持``display: inline-block``解决办法：设置inline并触发hasLayout

```
    display: inline-block;
    *display: inline;
    *zoom: 1;
```

- IE6下浮动元素在浮动方向上与父元素边界接触元素的外边距会加倍。解决办法：
1）使用padding控制间距。
2）浮动元素``display: inline;``这样解决问题且无任何副作用：css标准规定浮动元素display:inline会自动调整为block
- 通过为块级元素设置宽度和左右margin为auto时，IE6不能实现水平居中，解决方法：为父元素设置``text-align: center;``

### 容器包含若干浮动元素时如何清理(包含)浮动

1. 容器元素闭合标签前添加额外元素并设置``clear: both``
2. 父元素触发块级格式化上下文(见块级可视化上下文部分)
3. 设置容器元素伪元素进行清理[推荐的清理浮动方法](http://nicolasgallagher.com/micro-clearfix-hack/)

```
/**
* 在标准浏览器下使用
* 1 content内容为空格用于修复opera下文档中出现
*   contenteditable属性时在清理浮动元素上下的空白
* 2 使用display使用table而不是block：可以防止容器和
*   子元素top-margin折叠,这样能使清理效果与BFC，IE6/7
*   zoom: 1;一致
**/

.clearfix:before,
.clearfix:after {
    content: " "; /* 1 */
    display: table; /* 2 */
}

.clearfix:after {
    clear: both;
}

/**
* IE 6/7下使用
* 通过触发hasLayout实现包含浮动
**/
.clearfix {
    *zoom: 1;
}
```

### 什么是FOUC?如何避免
Flash Of Unstyled Content：用户定义样式表加载之前浏览器使用默认样式显示文档，用户样式加载渲染之后再从新显示文档，造成页面闪烁。**解决方法**：把样式表放到文档的`head`

### 如何创建块级格式化上下文(block formatting context),BFC有什么用
创建规则：

1. 根元素
2. 浮动元素（``float``不是``none``）
3. 绝对定位元素（``position``取值为``absolute``或``fixed``）
4. ``display``取值为``inline-block``,``table-cell``, ``table-caption``,``flex``, ``inline-flex``之一的元素
5. ``overflow``不是``visible``的元素


作用：

1. 可以包含浮动元素
2. 不被浮动元素覆盖
3. 阻止父子元素的margin折叠

### display,float,position的关系

1. 如果``display``为none，那么position和float都不起作用，这种情况下元素不产生框
2. 否则，如果position值为absolute或者fixed，框就是绝对定位的，float的计算值为none，display根据下面的表格进行调整。
3. 否则，如果float不是none，框是浮动的，display根据下表进行调整
4. 否则，如果元素是根元素，display根据下表进行调整
5. 其他情况下display的值为指定值
总结起来：**绝对定位、浮动、根元素都需要调整``display``**
![display转换规则](/img/display-adjust.png)

### 外边距折叠(collapsing margins)
毗邻的两个或多个``margin``会合并成一个margin，叫做外边距折叠。规则如下：

1. 两个或多个毗邻的普通流中的块元素垂直方向上的margin会折叠
2. 浮动元素/inline-block元素/绝对定位元素的margin不会和垂直方向上的其他元素的margin折叠
3. 创建了块级格式化上下文的元素，不会和它的子元素发生margin折叠
4. 元素自身的margin-bottom和margin-top相邻时也会折叠

### 如何确定一个元素的包含块(containing block)

1. 根元素的包含块叫做初始包含块，在连续媒体中他的尺寸与viewport相同并且anchored at the canvas origin；对于paged media，它的尺寸等于page area。初始包含块的direction属性与根元素相同。
2. ``position``为``relative``或者``static``的元素，它的包含块由最近的块级（``display``为``block``,``list-item``, ``table``）祖先元素的**内容框**组成
3. 如果元素``position``为``fixed``。对于连续媒体，它的包含块为viewport；对于paged media，包含块为page area
4. 如果元素``position``为``absolute``，它的包含块由祖先元素中最近一个``position``为``relative``,``absolute``或者``fixed``的元素产生，规则如下：
    - 如果祖先元素为行内元素，the containing block is the bounding box around the **padding boxes** of the first and the last inline boxes generated for that element.
    - 其他情况下包含块由祖先节点的**padding edge**组成

    如果找不到定位的祖先元素，包含块为**初始包含块**

### stacking context,布局规则
z轴上的默认层叠顺序如下（从下到上）：

1. 根元素的边界和背景
2. 常规流中的元素按照html中顺序
3. 浮动块
4. positioned元素按照html中出现顺序

如何创建stacking context：

1. 根元素
2. z-index不为auto的定位元素
3. a flex item with a z-index value other than 'auto'
4. opacity小于1的元素
5. 在移动端webkit和chrome22+，z-index为auto，position: fixed也将创建新的stacking context

### 如何水平居中一个元素
- 如果需要居中的元素为**常规流中inline元素**，为父元素设置`text-align: center;`即可实现
- 如果需要居中的元素为**常规流中block元素**，1）为元素设置宽度，2）设置左右margin为auto。3）IE6下需在父元素上设置`text-align: center;`,再给子元素恢复需要的值

```
<body>
    <div class="content">
    aaaaaa aaaaaa a a a a a a a a
    </div>
</body>

<style>
    body {
        background: #DDD;
        text-align: center; /* 3 */
    }
    .content {
        width: 500px;      /* 1 */
        text-align: left;  /* 3 */
        margin: 0 auto;    /* 2 */

        background: purple;
    }
</style>
```

- 如果需要居中的元素为**浮动元素**，1）为元素设置宽度，2）`position: relative;`，3）浮动方向偏移量（left或者right）设置为50%，4）浮动方向上的margin设置为元素宽度一半乘以-1

```
<body>
    <div class="content">
    aaaaaa aaaaaa a a a a a a a a
    </div>
</body>

<style>
    body {
        background: #DDD;
    }
    .content {
        width: 500px;         /* 1 */
        float: left;

        position: relative;   /* 2 */
        left: 50%;            /* 3 */
        margin-left: -250px;  /* 4 */

        background-color: purple;
    }
</style>
```

- 如果需要居中的元素为**绝对定位元素**，1）为元素设置宽度，2）偏移量设置为50%，3）偏移方向外边距设置为元素宽度一半乘以-1

```
<body>
    <div class="content">
    aaaaaa aaaaaa a a a a a a a a
    </div>
</body>

<style>
    body {
        background: #DDD;
        position: relative;
    }
    .content {
        width: 800px;

        position: absolute;
        left: 50%;
        margin-left: -400px;

        background-color: purple;
    }
</style>
```

- 如果需要居中的元素为**绝对定位元素**，1）为元素设置宽度，2）设置左右偏移量都为0,3）设置左右外边距都为auto

```
<body>
    <div class="content">
    aaaaaa aaaaaa a a a a a a a a
    </div>
</body>

<style>
    body {
        background: #DDD;
        position: relative;
    }
    .content {
        width: 800px;

        position: absolute;
        margin: 0 auto;
        left: 0;
        right: 0;

        background-color: purple;
    }
</style>
```

### 如何竖直居中一个元素
参考资料：[6 Methods For Vertical Centering With CSS](http://www.vanseodesign.com/css/vertical-centering/)。 [盘点8种CSS实现垂直居中](http://blog.csdn.net/freshlover/article/details/11579669)

- 需要居中元素为**单行文本**，为包含文本的元素设置大于`font-size`的`line-height`：

```
<p class="text">center text</p>

<style>
.text {
    line-height: 200px;
}
</style>
```


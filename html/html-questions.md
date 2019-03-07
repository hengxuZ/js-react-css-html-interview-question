# HTML 问题

欢迎提出 PR 进行建议和指正！

* [`DOCTYPE`有什么用？](#doctype有什么用)
* [如何提供包含多种语言内容的页面？](#如何提供包含多种语言内容的页面)
* [在设计开发多语言网站时，需要留心哪些事情？](#在设计开发多语言网站时需要留心哪些事情)
* [什么是`data-`属性？](#什么是data-属性)
* [将 HTML5 看作成开放的网络平台，什么是 HTML5 的基本构件（building block）？](#将-html5-看作成开放的网络平台什么是-html5-的基本构件building-block)
* [请描述`cookie`、`sessionStorage`和`localStorage`的区别。](#请描述cookiesessionstorage和localstorage的区别)
* [请描述`<script>`、`<script async>`和`<script defer>`的区别。](#请描述scriptscript-async和script-defer的区别)
* [为什么最好把 CSS 的`<link>`标签放在`<head></head>`之间？为什么最好把 JS 的`<script>`标签恰好放在`</body>`之前，有例外情况吗？](#为什么最好把css的link标签放在headhead之间为什么最好把js的script标签恰好放在body之前有例外情况吗)
* [什么是渐进式渲染（progressive rendering）？](#什么是渐进式渲染progressive-rendering)
* [为什么在`<img>`标签中使用`srcset`属性？请描述浏览器遇到该属性后的处理过程。](#为什么在img标签中使用srcset属性请描述浏览器遇到该属性后的处理过程)
* [你有过使用不同模版语言的经历吗？](#你有过使用不同模版语言的经历吗)
* [前端需要注意哪些SEO](#前端需要注意哪些seo)
* [web开发中会话跟踪的方法有哪些](#web开发中会话跟踪的方法有哪些)
* [`<img>`的`title`和`alt`有什么区别](#img的title和alt有什么区别)
- [doctype是什么,举例常见doctype及特点](#doctype是什么举例常见doctype及特点)
- [HTML全局属性(global attribute)有哪些](#html全局属性global-attribute有哪些)
- [什么是web语义化,有什么好处](#什么是web语义化有什么好处)
- [HTTP method](#http-method)
- [从浏览器地址栏输入url到显示页面的步骤(以HTTP为例)](#从浏览器地址栏输入url到显示页面的步骤以http为例)
- [HTTP request报文结构是怎样的](#http-request报文结构是怎样的)
- [HTTP response报文结构是怎样的](#http-response报文结构是怎样的)
- [如何进行网站性能优化](#如何进行网站性能优化)
- [什么是渐进增强](#什么是渐进增强)
- [HTTP状态码及其含义](#http状态码及其含义)
### `DOCTYPE`有什么用？

`DOCTYPE`是“document type”的缩写。它是 HTML 中用来区分标准模式和[怪异模式](https://quirks.spec.whatwg.org/#history)的声明，用来告知浏览器使用标准模式渲染页面。

从中获得的启发：在页面开始处添加`<!DOCTYPE html>`即可。

###### 参考

* https://stackoverflow.com/questions/7695044/what-does-doctype-html-do
* https://www.w3.org/QA/Tips/Doctype
* https://quirks.spec.whatwg.org/#history

[[↑] 回到顶部](#html-问题)

### 如何提供包含多种语言内容的页面？

这个问题有点问得含糊其辞，我认为这是在询问最常见的情况：如何提供包含多种语言内容的页面，并保证页面内容语言的一致性。

当客户端向服务器发送 HTTP 请求时，通常会发送有关语言首选项的信息，比如使用`Accept-Language`请求头。如果替换语言存在，服务器可以利用该信息返回与之相匹配的 HTML 文档。返回的 HTML 文档还应在`<html>`标签中声明`lang`属性，比如`<html lang="en">...</html>`

在后台中，HTML 将包含`i18n`占位符和待以替换的内容，这些按照不同语言，以 YML 或 JSON 格式存储。然后，服务器将动态生成指定语言内容的 HTML 页面。整个过程通常需要借助后台框架实现。

###### 参考

* https://www.w3.org/International/getting-started/language

[[↑] 回到顶部](#html-问题)

### 在设计开发多语言网站时，需要留心哪些事情？

* 在 HTML 中使用`lang`属性。
* 引导用户切换到自己的母语——让用户能够轻松地切换到自己的国家或语言，而不用麻烦。
* 在图片中展示文本会阻碍网站规模增长——把文本放在图片中展示，仍然是一种非常流行的方式。这样做可以在所有终端上，都能显示出美观的非系统字体。然而，为了翻译图片中的文本，需要为每种语言单独创建对应的图片，这种做法很容易在图片数量不断增长的过程中失控。
* 限制词语或句子的长度——网页内容在使用其他语言表述时，文字长度会发生变化。设计时，需要警惕文字长度溢出布局的问题，最好不要使用受文字长度影响较大的设计。比如标题、标签、按钮的设计，往往很受文字长度影响，这些设计中的文字与正文或评论部分不同，一般不可以自由换行。
* 注意颜色的使用——颜色在不同的语言和文化中，意义和感受是不同的。设计时应该使用恰当的颜色。
* 日期和货币的格式化——日期在不同的国家和地区，会以不同的方式显示。比如美国的日期格式是“May 31, 2012”，而在欧洲部分地区，日期格式是“31 May 2012”。
* 不要使用连接的翻译字符串——不要做类似这样的事情，比如`“今天的日期是”+具体日期`。这样做可能会打乱其他语言的语序。替代方案是，为每种语言编写带变量替换的模版字符串。请看下面两个分别用英语和中文表示的句子：`I will travel on {% date %}`和`{% date %} 我会出发`。可以看到，语言的语法规则不同，变量的位置是不同的。
* 注意语言阅读的方向——在英语中，文字是从左向右阅读的；而在传统日语中，文字是从右向左阅读的。

###### 参考

* https://www.quora.com/What-kind-of-things-one-should-be-wary-of-when-designing-or-developing-for-multilingual-sites

[[↑] 回到顶部](#html-问题)

### 什么是`data-`属性？

在 JavaScript 框架变得流行之前，前端开发者经常使用`data-`属性，把额外数据存储在 DOM 自身中。当时没有其他 Hack 手段（比如使用非标准属性或 DOM 上额外属性）。这样做是为了将自定义数据存储到页面或应用中，对此没有其他更适当的属性或元素。

而现在，不鼓励使用`data-`属性。原因之一是，用户可以通过在浏览器中利用检查元素，轻松地修改属性值，借此修改数据。数据模型最好存储在 JavaScript 本身中，并利用框架提供的数据绑定，使之与 DOM 保持更新。

###### 参考

* http://html5doctor.com/html5-custom-data-attributes/
* https://www.w3.org/TR/html5/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes

[[↑] 回到顶部](#html-问题)

### 将 HTML5 看作成开放的网络平台，什么是 HTML5 的基本构件（building block）？

* 语义 - 提供更准确地描述内容。
* 连接 - 提供新的方式与服务器通信。
* 离线和存储 - 允许网页在本地存储数据并有效地离线运行。
* 多媒体 - 在 Open Web 中，视频和音频被视为一等公民（first-class citizens）。
* 2D/3D 图形和特效 - 提供更多种演示选项。
* 性能和集成 - 提供更快的访问速度和性能更好的计算机硬件。
* 设备访问 - 允许使用各种输入、输出设备。
* 外观 - 可以开发丰富的主题。

###### 参考

* https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5

[[↑] 回到顶部](#html-问题)

### 请描述`cookie`、`sessionStorage`和`localStorage`的区别。

上面提到的技术名词，都是在客户端以键值对存储的存储机制，并且只能将值存储为字符串。

|                                                    | `cookie`                                           | `localStorage` | `sessionStorage` |
| -------------------------------------------------- | -------------------------------------------------- | -------------- | ---------------- |
| 由谁初始化                                         | 客户端或服务器，服务器可以使用`Set-Cookie`请求头。 | 客户端         | 客户端           |
| 过期时间                                           | 手动设置                                           | 永不过期       | 当前页面关闭时   |
| 在当前浏览器会话（browser sessions）中是否保持不变 | 取决于是否设置了过期时间                           | 是             | 否               |
| 是否随着每个 HTTP 请求发送给服务器                 | 是，Cookies 会通过`Cookie`请求头，自动发送给服务器 | 否             | 否               |
| 容量（每个域名）                                   | 4kb                                                | 5MB            | 5MB              |
| 访问权限                                           | 任意窗口                                           | 任意窗口       | 当前页面窗口     |

###### 参考

* https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
* http://tutorial.techaltum.com/local-and-session-storage.html

[[↑] 回到顶部](#html-问题)

### 请描述`<script>`、`<script async>`和`<script defer>`的区别。

* `<script>` - HTML 解析中断，脚本被提取并立即执行。执行结束后，HTML 解析继续。
* `<script async>` - 脚本的提取、执行的过程与 HTML 解析过程并行，脚本执行完毕可能在 HTML 解析完毕之前。当脚本与页面上其他脚本独立时，可以使用`async`，比如用作页面统计分析。
* `<script defer>` - 脚本仅提取过程与 HTML 解析过程并行，脚本的执行将在 HTML 解析完毕后进行。如果有多个含`defer`的脚本，脚本的执行顺序将按照在 document 中出现的位置，从上到下顺序执行。

注意：没有`src`属性的脚本，`async`和`defer`属性会被忽略。

###### 参考

* http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html
* https://stackoverflow.com/questions/10808109/script-tag-async-defer
* https://bitsofco.de/async-vs-defer/

[[↑] 回到顶部](#html-问题)

### 为什么最好把 CSS 的`<link>`标签放在`<head></head>`之间？为什么最好把 JS 的`<script>`标签恰好放在`</body>`之前，有例外情况吗？

**把`<link>`放在`<head>`中**

把`<link>`标签放在`<head></head>`之间是规范要求的内容。此外，这种做法可以让页面逐步呈现，提高了用户体验。将样式表放在文档底部附近，会使许多浏览器（包括 Internet Explorer）不能逐步呈现页面。一些浏览器会阻止渲染，以避免在页面样式发生变化时，重新绘制页面中的元素。这种做法可以防止呈现给用户空白的页面或没有样式的内容。

**把`<script>`标签恰好放在`</body>`之前**

脚本在下载和执行期间会阻止 HTML 解析。把`<script>`标签放在底部，保证 HTML 首先完成解析，将页面尽早呈现给用户。

例外情况是当你的脚本里包含`document.write()`时。但是现在，`document.write()`不推荐使用。同时，将`<script>`标签放在底部，意味着浏览器不能开始下载脚本，直到整个文档（document）被解析。也许，对此比较好的做法是，`<script>`使用`defer`属性，放在`<head>`中。

###### 参考

* https://developer.yahoo.com/performance/rules.html#css_top

[[↑] 回到顶部](#html-问题)

### 什么是渐进式渲染（progressive rendering）？

渐进式渲染是用于提高网页性能（尤其是提高用户感知的加载速度），以尽快呈现页面的技术。

在以前互联网带宽较小的时期，这种技术更为普遍。如今，移动终端的盛行，而移动网络往往不稳定，渐进式渲染在现代前端开发中仍然有用武之地。

一些举例：

* 图片懒加载——页面上的图片不会一次性全部加载。当用户滚动页面到图片部分时，JavaScript 将加载并显示图像。
* 确定显示内容的优先级（分层次渲染）——为了尽快将页面呈现给用户，页面只包含基本的最少量的 CSS、脚本和内容，然后可以使用延迟加载脚本或监听`DOMContentLoaded`/`load`事件加载其他资源和内容。
* 异步加载 HTML 片段——当页面通过后台渲染时，把 HTML 拆分，通过异步请求，分块发送给浏览器。更多相关细节可以在[这里](http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/)找到。

###### 参考

* https://stackoverflow.com/questions/33651166/what-is-progressive-rendering
* http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/

[[↑] 回到顶部](#html-问题)

### 为什么在`<img>`标签中使用`srcset`属性？请描述浏览器遇到该属性后的处理过程。

因为需要设计响应式图片。我们可以使用两个新的属性——`srcset` 和 `sizes`——来提供更多额外的资源图像和提示，帮助浏览器选择正确的一个资源。

**srcset** 定义了我们允许浏览器选择的图像集，以及每个图像的大小。

**sizes** 定义了一组媒体条件（例如屏幕宽度）并且指明当某些媒体条件为真时，什么样的图片尺寸是最佳选择。

所以，有了这些属性，浏览器会：

1. 查看设备宽度
2. 检查 sizes 列表中哪个媒体条件是第一个为真
3. 查看给予该媒体查询的槽大小
4. 加载 srcset 列表中引用的最接近所选的槽大小的图像

###### 参考

* https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images

[[↑] 回到顶部](#html-问题)

### 你有过使用不同模版语言的经历吗？

有过，比如 Pug （以前叫 Jade）、 ERB、 Slim、 Handlebars、 Jinja、 Liquid 等等。在我看来，这些模版语言大多是相似的，都提供了用于展示数据的内容替换和过滤器的功能。大部分模版引擎都支持自定义过滤器，以展示自定义格式的内容。

[[↑] 回到顶部](#html-问题)

### 其它答案

* https://neal.codes/blog/front-end-interview-questions-html/
* http://peterdoes.it/2015/12/03/a-personal-exercise-front-end-job-interview-questions-and-my-answers-all/

---
### HTML全局属性(global attribute)有哪些

参考资料：[MDN: html global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)或者[W3C HTML global-attributes](http://www.w3.org/TR/html-markup/global-attributes.html#common.attrs.core)

- `accesskey`:设置快捷键，提供快速访问元素如<a href="#" accesskey="a">aaa</a>在windows下的firefox中按``alt + shift + a``可激活元素
- `class`:为元素设置类标识，多个类名用空格分开，CSS和javascript可通过class属性获取元素
- `contenteditable`: 指定元素内容是否可编辑
- `contextmenu`: 自定义鼠标右键弹出菜单内容
- `data-*`: 为元素增加自定义属性
- `dir`: 设置元素文本方向
- `draggable`: 设置元素是否可拖拽
- `dropzone`: 设置元素拖放类型： copy, move, link
- `hidden`: 表示一个元素是否与文档。样式上会导致元素不显示，但是不能用这个属性实现样式效果
- `id`: 元素id，文档内唯一
- `lang`: 元素内容的的语言
- `spellcheck`: 是否启动拼写和语法检查
- `style`: 行内css样式
- `tabindex`: 设置元素可以获得焦点，通过tab可以导航
- `title`: 元素相关的建议信息
- `translate`: 元素和子孙节点内容是否需要本地化

### 什么是web语义化,有什么好处

web语义化是指通过HTML标记表示页面包含的信息，包含了HTML标签的语义化和css命名的语义化。
HTML标签的语义化是指：通过使用包含语义的标签（如h1-h6）恰当地表示文档结构
css命名的语义化是指：为html标签添加有意义的class，id补充未表达的语义，如[Microformat](http://en.wikipedia.org/wiki/Microformats)通过添加符合规则的class描述信息
为什么需要语义化：

- 去掉样式后页面呈现清晰的结构
- 盲人使用读屏器更好地阅读
- 搜索引擎更好地理解页面，有利于收录
- 便团队项目的可持续运作及维护

### HTTP method

1. 一台服务器要与HTTP1.1兼容，只要为资源实现**GET**和**HEAD**方法即可
2. **GET**是最常用的方法，通常用于**请求服务器发送某个资源**。
3. **HEAD**与GET类似，但**服务器在响应中值返回首部，不返回实体的主体部分**
4. **PUT**让服务器**用请求的主体部分来创建一个由所请求的URL命名的新文档，或者，如果那个URL已经存在的话，就用干这个主体替代它**
5. **POST**起初是用来向服务器输入数据的。实际上，通常会用它来支持HTML的表单。表单中填好的数据通常会被送给服务器，然后由服务器将其发送到要去的地方。
6. **TRACE**会在目的服务器端发起一个环回诊断，最后一站的服务器会弹回一个TRACE响应并在响应主体中携带它收到的原始请求报文。TRACE方法主要用于诊断，用于验证请求是否如愿穿过了请求/响应链。
7. **OPTIONS**方法请求web服务器告知其支持的各种功能。可以查询服务器支持哪些方法或者对某些特殊资源支持哪些方法。
8. **DELETE**请求服务器删除请求URL指定的资源

### 从浏览器地址栏输入url到显示页面的步骤(以HTTP为例)

1. 在浏览器地址栏输入URL
2. 浏览器查看**缓存**，如果请求资源在缓存中并且新鲜，跳转到转码步骤
    1. 如果资源未缓存，发起新请求
    2. 如果已缓存，检验是否足够新鲜，足够新鲜直接提供给客户端，否则与服务器进行验证。
    3. 检验新鲜通常有两个HTTP头进行控制`Expires`和`Cache-Control`：
        - HTTP1.0提供Expires，值为一个绝对时间表示缓存新鲜日期
        - HTTP1.1增加了Cache-Control: max-age=,值为以秒为单位的最大新鲜时间
3. 浏览器**解析URL**获取协议，主机，端口，path
4. 浏览器**组装一个HTTP（GET）请求报文**
5. 浏览器**获取主机ip地址**，过程如下：
    1. 浏览器缓存
    2. 本机缓存
    3. hosts文件
    4. 路由器缓存
    5. ISP DNS缓存
    6. DNS递归查询（可能存在负载均衡导致每次IP不一样）
6. **打开一个socket与目标IP地址，端口建立TCP链接**，三次握手如下：
    1. 客户端发送一个TCP的**SYN=1，Seq=X**的包到服务器端口
    2. 服务器发回**SYN=1， ACK=X+1， Seq=Y**的响应包
    3. 客户端发送**ACK=Y+1， Seq=Z**
7. TCP链接建立后**发送HTTP请求**
8. 服务器接受请求并解析，将请求转发到服务程序，如虚拟主机使用HTTP Host头部判断请求的服务程序
9. 服务器检查**HTTP请求头是否包含缓存验证信息**如果验证缓存新鲜，返回**304**等对应状态码
10. 处理程序读取完整请求并准备HTTP响应，可能需要查询数据库等操作
11. 服务器将**响应报文通过TCP连接发送回浏览器**
12. 浏览器接收HTTP响应，然后根据情况选择**关闭TCP连接或者保留重用，关闭TCP连接的四次握手如下**：
    1. 主动方发送**Fin=1， Ack=Z， Seq= X**报文
    2. 被动方发送**ACK=X+1， Seq=Z**报文
    3. 被动方发送**Fin=1， ACK=X， Seq=Y**报文
    4. 主动方发送**ACK=Y， Seq=X**报文
13. 浏览器检查响应状态吗：是否为1XX，3XX， 4XX， 5XX，这些情况处理与2XX不同
14. 如果资源可缓存，**进行缓存**
15. 对响应进行**解码**（例如gzip压缩）
16. 根据资源类型决定如何处理（假设资源为HTML文档）
17. **解析HTML文档，构件DOM树，下载资源，构造CSSOM树，执行js脚本**，这些操作没有严格的先后顺序，以下分别解释
18. **构建DOM树**：
    1. **Tokenizing**：根据HTML规范将字符流解析为标记
    2. **Lexing**：词法分析将标记转换为对象并定义属性和规则
    3. **DOM construction**：根据HTML标记关系将对象组成DOM树
19. 解析过程中遇到图片、样式表、js文件，**启动下载**
20. 构建**CSSOM树**：
    1. **Tokenizing**：字符流转换为标记流
    2. **Node**：根据标记创建节点
    3. **CSSOM**：节点创建CSSOM树
21. **[根据DOM树和CSSOM树构建渲染树](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction)**:
    1. 从DOM树的根节点遍历所有**可见节点**，不可见节点包括：1）`script`,`meta`这样本身不可见的标签。2)被css隐藏的节点，如`display: none`
    2. 对每一个可见节点，找到恰当的CSSOM规则并应用
    3. 发布可视节点的内容和计算样式
22. **js解析如下**：
    1. 浏览器创建Document对象并解析HTML，将解析到的元素和文本节点添加到文档中，此时**document.readystate为loading**
    2. HTML解析器遇到**没有async和defer的script时**，将他们添加到文档中，然后执行行内或外部脚本。这些脚本会同步执行，并且在脚本下载和执行时解析器会暂停。这样就可以用document.write()把文本插入到输入流中。**同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作script和他们之前的文档内容**
    3. 当解析器遇到设置了**async**属性的script时，开始下载脚本并继续解析文档。脚本会在它**下载完成后尽快执行**，但是**解析器不会停下来等它下载**。异步脚本**禁止使用document.write()**，它们可以访问自己script和之前的文档元素
    4. 当文档完成解析，document.readState变成interactive
    5. 所有**defer**脚本会**按照在文档出现的顺序执行**，延迟脚本**能访问完整文档树**，禁止使用document.write()
    6. 浏览器**在Document对象上触发DOMContentLoaded事件**
    7. 此时文档完全解析完成，浏览器可能还在等待如图片等内容加载，等这些**内容完成载入并且所有异步脚本完成载入和执行**，document.readState变为complete,window触发load事件
23. **显示页面**（HTML解析过程中会逐步显示页面）

### HTTP request报文结构是怎样的
[rfc2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec5.html)中进行了定义：

1. 首行是**Request-Line**包括：**请求方法**，**请求URI**，**协议版本**，**CRLF**
2. 首行之后是若干行**请求头**，包括**general-header**，**request-header**或者**entity-header**，每个一行以CRLF结束
3. 请求头和消息实体之间有一个**CRLF分隔**
4. 根据实际请求需要可能包含一个**消息实体**
一个请求报文例子如下：

```
GET /Protocols/rfc2616/rfc2616-sec5.html HTTP/1.1
Host: www.w3.org
Connection: keep-alive
Cache-Control: max-age=0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36
Referer: https://www.google.com.hk/
Accept-Encoding: gzip,deflate,sdch
Accept-Language: zh-CN,zh;q=0.8,en;q=0.6
Cookie: authorstyle=yes
If-None-Match: "2cc8-3e3073913b100"
If-Modified-Since: Wed, 01 Sep 2004 13:24:52 GMT

name=qiu&age=25
```

### HTTP response报文结构是怎样的

[rfc2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html)中进行了定义：

1. 首行是状态行包括：**HTTP版本，状态码，状态描述**，后面跟一个CRLF
2. 首行之后是**若干行响应头**，包括：**通用头部，响应头部，实体头部**
3. 响应头部和响应实体之间用**一个CRLF空行**分隔
4. 最后是一个可能的**消息实体**
响应报文例子如下：

```
HTTP/1.1 200 OK
Date: Tue, 08 Jul 2014 05:28:43 GMT
Server: Apache/2
Last-Modified: Wed, 01 Sep 2004 13:24:52 GMT
ETag: "40d7-3e3073913b100"
Accept-Ranges: bytes
Content-Length: 16599
Cache-Control: max-age=21600
Expires: Tue, 08 Jul 2014 11:28:43 GMT
P3P: policyref="http://www.w3.org/2001/05/P3P/p3p.xml"
Content-Type: text/html; charset=iso-8859-1

{"name": "qiu", "age": 25}
```

### 如何进行网站性能优化

[雅虎Best Practices for Speeding Up Your Web Site](https://developer.yahoo.com/performance/rules.html)：

- content方面
    1. 减少HTTP请求：合并文件、CSS精灵、inline Image
    2. 减少DNS查询：DNS查询完成之前浏览器不能从这个主机下载任何任何文件。方法：DNS缓存、将资源分布到恰当数量的主机名，平衡并行下载和DNS查询
    3. 避免重定向：多余的中间访问
    4. 使Ajax可缓存
    5. 非必须组件延迟加载
    6. 未来所需组件预加载
    7. 减少DOM元素数量
    8. 将资源放到不同的域下：浏览器同时从一个域下载资源的数目有限，增加域可以提高并行下载量
    9. 减少iframe数量
    10. 不要404

- Server方面
    1. 使用CDN
    2. 添加Expires或者Cache-Control响应头
    3. 对组件使用Gzip压缩
    4. 配置ETag
    5. Flush Buffer Early
    6. Ajax使用GET进行请求
    7. 避免空src的img标签
- Cookie方面
    1. 减小cookie大小
    2. 引入资源的域名不要包含cookie
- css方面
    1. 将样式表放到页面顶部
    2. 不使用CSS表达式
    3. 使用<link>不使用@import
    4. 不使用IE的Filter
- Javascript方面
    1. 将脚本放到页面底部
    2. 将javascript和css从外部引入
    3. 压缩javascript和css
    4. 删除不需要的脚本
    5. 减少DOM访问
    6. 合理设计事件监听器
- 图片方面
    1. 优化图片：根据实际颜色需要选择色深、压缩
    2. 优化css精灵
    3. 不要在HTML中拉伸图片
    4. 保证favicon.ico小并且可缓存
- 移动方面
    1. 保证组件小于25k
    2. Pack Components into a Multipart Document


### 什么是渐进增强

渐进增强是指在web设计时强调可访问性、语义化HTML标签、外部样式表和脚本。保证所有人都能访问页面的基本内容和功能同时为高级浏览器和高带宽用户提供更好的用户体验。核心原则如下:

- 所有浏览器都必须能访问基本内容
- 所有浏览器都必须能使用基本功能
- 所有内容都包含在语义化标签中
- 通过外部CSS提供增强的布局
- 通过非侵入式、外部javascript提供增强功能
- end-user web browser preferences are respected

### HTTP状态码及其含义

参考[RFC 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)

- 1XX：信息状态码
    - **100 Continue**：客户端应当继续发送请求。这个临时相应是用来通知客户端它的部分请求已经被服务器接收，且仍未被拒绝。客户端应当继续发送请求的剩余部分，或者如果请求已经完成，忽略这个响应。服务器必须在请求万仇向客户端发送一个最终响应
    - **101 Switching Protocols**：服务器已经理解力客户端的请求，并将通过Upgrade消息头通知客户端采用不同的协议来完成这个请求。在发送完这个响应最后的空行后，服务器将会切换到Upgrade消息头中定义的那些协议。
- 2XX：成功状态码
    - **200 OK**：请求成功，请求所希望的响应头或数据体将随此响应返回
    - **201 Created**：
    - **202 Accepted**：
    - **203 Non-Authoritative Information**：
    - **204 No Content**：
    - **205 Reset Content**：
    - **206 Partial Content**：
- 3XX：重定向
    - **300 Multiple Choices**：
    - **301 Moved Permanently**：
    - **302 Found**：
    - **303 See Other**：
    - **304 Not Modified**：
    - **305 Use Proxy**：
    - **306 （unused）**：
    - **307 Temporary Redirect**：
- 4XX：客户端错误
    - **400 Bad Request**:
    - **401 Unauthorized**:
    - **402 Payment Required**:
    - **403 Forbidden**:
    - **404 Not Found**:
    - **405 Method Not Allowed**:
    - **406 Not Acceptable**:
    - **407 Proxy Authentication Required**:
    - **408 Request Timeout**:
    - **409 Conflict**:
    - **410 Gone**:
    - **411 Length Required**:
    - **412 Precondition Failed**:
    - **413 Request Entity Too Large**:
    - **414 Request-URI Too Long**:
    - **415 Unsupported Media Type**:
    - **416 Requested Range Not Satisfiable**:
    - **417 Expectation Failed**:
- 5XX: 服务器错误
    - **500 Internal Server Error**:
    - **501 Not Implemented**:
    - **502 Bad Gateway**:
    - **503 Service Unavailable**:
    - **504 Gateway Timeout**:
    - **505 HTTP Version Not Supported**:
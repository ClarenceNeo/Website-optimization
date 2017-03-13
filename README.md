# Website-optimization

网站访问地址为 [http://zyuann.com/Website-optimization/dist/index.html](http://zyuann.com/Website-optimization/dist/index.html)

---

**warning: 需要提前安装 Node, 此项目 npm 版本 2.9.1 .**

---

## 克隆项目

```
$ cd /* 项目地址 */
$ git clone https://github.com/ClarenceNeo/Website-optimization.git
```

## 安装依赖

```
npm install
```

这样就可以检测 package.json 中的 devDependencies 并安装所有依赖。

## gulp 使用说明

gulp 的配置文件为：`gulpfile.js`

- 首先使用命令行工具进入项目地址：

  `cd /* 项目地址 */`

- 使用如下命令可以监控在 `src` 文件夹中 `js` `imgages` `css` 目录中的文件修改实时压缩保存到 `dist` 相应的目录。

  `gulp 回车`

- 如下命令可以直接修改 `src` 中所对应文件夹中的文件压缩保存到对应的 `dist` 文件夹。

  `gulp uglifyjs // 压缩 src/js 中的所有 js 文件` 

  `gulp minifycss // 压缩 src/css 中的所有 css 文件`

  `gulp image // 压缩 src/img 中的所有图片文件`

## 查看项目

打开 `dist` 文件夹中的 `index.html` 文件。

## 优化说明

#### 对 index.html 优化使其在在移动设备和桌面上的 PageSpeed 分数至少为90分。

- 优化关键渲染路径
  - 异步加载 CSS、JavaScript 等文件
  - 异步加载 Google-analytics 并进行代码拆分
  - 非关键 CSS 样式，延后加载

- 压缩文件
  - 使用 Gulp 构建工具，对 CSS、JavaScript、图片资源等进行压缩 

- 网络字体优化
  - 通过使用内联样式设置 `@font-face` 属性，避免网络字体延迟。

优化后的效果 PageSpeed 分数，桌面端截图：

![](http://oeryvxt85.bkt.clouddn.com/2017-03-13-Screen%20Shot%202017-03-13%20at%203.53.01%20PM.png)

移动端截图：

![](http://oeryvxt85.bkt.clouddn.com/2017-03-13-Screen%20Shot%202017-03-13%20at%203.52.36%20PM.png)

#### 对 views/js/main.js 进行的优化可使 views/pizza.html 在滚动时保持 60fps 的帧速。

优化渲染性能，不管是使用 JavaScript、CSS 还是网络动画，在实现视觉变化时，管道针对指定帧的运行通常有三种方式：

- JS / CSS > 样式 > 布局 > 绘制 > 合成

  ![](http://oeryvxt85.bkt.clouddn.com/2017-03-13-frame-full.jpg) 
  
  如果您修改元素的“layout”属性，也就是改变了元素的几何属性（例如宽度、高度、左侧或顶部位置等），那么浏览器将必须检查所有其他元素，然后“自动重排”页面。任何受影响的部分都需要重新绘制，而且最终绘制的元素需进行合成。
  
- JS / CSS > 样式 > 绘制 > 合成

  ![](http://oeryvxt85.bkt.clouddn.com/2017-03-13-frame-no-layout.jpg)
  
  如果您修改“paint only”属性（例如背景图片、文字颜色或阴影等），即不会影响页面布局的属性，则浏览器会跳过布局，但仍将执行绘制。
- JS / CSS > 样式 > 合成

  ![](http://oeryvxt85.bkt.clouddn.com/2017-03-13-frame-no-layout-paint.jpg)

  如果您更改一个既不要布局也不要绘制的属性，则浏览器将跳到只执行合成。
  这个最后的版本开销最小，最适合于应用生命周期中的高压力点，例如动画或滚动。

按以上原则优化，最后的优化效果如下所示：

![](http://oeryvxt85.bkt.clouddn.com/2017-03-13-Screen%20Shot%202017-03-13%20at%204.34.18%20PM.png)

这样就完成了整个项目网站的优化。


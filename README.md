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


# Node环境下的Typescript项目起手式
克隆本项目后，`npm install`，然后配置WebStorm的File Watcher，参数如下：

- File to Watch:
    - File Type: Typescript
    - Score: Project Files或`/src`
- Tool to Run on Changes:
    - Program: `$ProjectFileDir$\node_modules\.bin\babel`
    - Arguments: `$FilePath$ --out-file $FileDir$\$FileNameWithoutExtension$.js --source-maps`
    - Output paths to refresh: `$FileDir$\$FileNameWithoutExtension$.js;$FileDir$\$FileNameWithoutExtension$.js.map`
    
可以将该配置保存一份Global的，以后需要使用的时候复制一份到Project级然后修改配置即可。

该项目中默认包含了依赖`axios`和`cheerio`用于处理网络请求和解析HTML文档，包含了`core-js`用于支持迭代器（主要在`async`/`await`时使用。如果没有必要的话可以在`package.json`中移除。

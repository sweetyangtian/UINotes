## 转换table格式
tableconvert，一个随意转换table格式的在线工具
[https://tableconvert.com/](https://tableconvert.com/)
![tabel_convert](./imgs/tabel_convert.png)

## 富文本编辑器
[braft-editor](https://github.com/margox/braft-editor)，美观易用的React富文本编辑器，基于draft-js开发，
可以查看[使用文档](https://www.yuque.com/braft-editor/be)，也可以查看[在线演示](https://braft.margox.cn/demos/basic)，这里很贴心的提供了一些基本使用场景的演示。

## nrm
npm registry 管理工具 nrm,  能够查看和切换当前使用的registry

    $ npm install -g nrm
    $ nrm ls
    $ nrm use cnpm 

## nvm
nvm是Linux下常用的一个node.js多版本管理工具，但是nvm不能在Windows下使用，在GitHub上有个项目叫nvm-windows，可以让我们在Windows下对node.js进行多版本管理。

在安装nvm-windows前，需要先卸载以前安装过的node，并且要把目录清理干净。

### Windows下完全卸载已安装的node.js

1.控制面板-卸载程序，右键node.js选择卸载。

2.重新启动（或者重新启动任务管理器杀死所有与节点相关的进程）。

3.从下列的目录中找到相关的内容并删除掉：

C:\Program Files (x86)\nodejs

C:\Program Files\nodejs

C:\Users\{User}\AppData\Roaming\npm（或%appdata%\npm）

C:\Users\{User}\AppData\Roaming\npm-cache（或%appdata%\npm-cache）

4.检查%PATH%环境变量以确保没有引用Nodejs或npm存在。

5.重新启动电脑。

### 安装nvm-windows并使用
nvm-windows的下载地址：[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)，选择下载nvm-setup.zip。

查看已安装的nodejs版本
    nvm list

查看可安装的nodejs版本
    nvm list available

安装指定版本的nodejs
   nvm install 10.16.3 64-bit 

使用指定版本的nodejs
    nvm use 8.11.2

删除指定版本的nodejs
    nvm uninstall 8.11.2





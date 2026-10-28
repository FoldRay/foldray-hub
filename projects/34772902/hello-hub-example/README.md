# Hello Hub 投稿示例

这是教学用的最小静态 Web 项目，用来展示一次完整投稿所需的文件。示例 PR 长期保持 Draft，仅供阅读，不合并、不申请 Hub 发布。真实投稿请创建自己的非草稿 PR。

## 文件说明

| 文件 | 用途 |
| --- | --- |
| foldray.json | 项目身份、名称、介绍、类别、许可证与源码位置 |
| README.md | 介绍你的项目、使用方式与运行条件 |
| LICENSE | 项目的完整开源许可证；保留第三方许可和必要的 NOTICE |
| source/package.json | 项目依赖和构建脚本 |
| source/index.html | Web 页面与脚本入口 |
| source/main.js | 完整项目源码；本例只是显示欢迎文字 |

## 换成你的项目

1. Fork FoldRay/foldray-hub，创建自己的分支。
2. 在 projects/<自己的 GitHub 数字 ID>/<项目 slug>/ 中放入项目。34772902 是示例作者的 ID，请替换目录和 foldray.json 的 ownerGithubId；数字 ID 不是 GitHub 用户名。可在 https://api.github.com/users/<你的用户名> 的 id 字段查看。
3. 将目录名和 foldray.json 的 slug 同时换成自己的项目标识；更新 title、description、category、license、README 和 source/ 源码。slug 只使用小写字母、数字和连字符。
4. 创建面向 FoldRay/foldray-hub 的 main 分支的非草稿 PR，只修改自己的一个项目目录。
5. 回 FoldRay 提交项目页，绑定创建 PR 的 GitHub 账号，粘贴自己的 PR 链接并提交申请，在“我的申请”查看进度。不要提交本示例的 PR 链接。

## 运行方式

本例使用 Vite 静态 Web 结构：在 source/ 中安装依赖后使用 npm run dev 开发，npm run build 构建。没有后端、外部请求或私有依赖。Hub 是否支持在线运行以实际检查结果为准。

其他类别同样需要完整源码、README 和许可证，可参考仓库 templates/other。完整限制见 [投稿指南](https://github.com/FoldRay/foldray-hub/blob/main/CONTRIBUTING.md)。请勿提交 .env、密钥、node_modules、dist 或安装包。

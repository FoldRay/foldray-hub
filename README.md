# FoldRay Hub

向本仓库提交项目源码 PR，再在 FoldRay「开源项目 → 提交项目」填写 PR 链接。平台核验作者 GitHub 身份和提交版本，完成合规审查后合并；受支持的 Web 项目在合并后部署，其他项目展示源码和外部使用链接。AI 无法判断时转人工处理。

## 项目结构

```text
projects/<GitHub 数字用户 ID>/<项目 slug>/
├── foldray.json
├── README.md
├── LICENSE
├── NOTICE                 # 原项目需要时保留
└── source/                # 项目完整源码
```

每个 PR 只修改本人一个项目目录，更新仍提交新 PR。`slug` 使用小写字母、数字与连字符，最长 64 字符。类别通过描述文件表达，改变类别无需移动目录。GitHub 用户名修改不改变数字用户 ID。

投稿要求和 Web 支持范围见 [CONTRIBUTING](CONTRIBUTING.md)。根目录 Apache-2.0 用于仓库管理文件，各项目适用自己目录内的 LICENSE、NOTICE 及第三方许可声明。

# 投稿指南

1. 登录 FoldRay，在账号设置或提交项目页绑定创建 PR 的 GitHub 账号。
2. Fork 本仓库，在 `projects/<自己的 GitHub 数字 ID>/<slug>/` 放入完整源码、说明和许可证。可参考 `templates/`；须替换模板身份、标题和项目内容。
3. 创建面向 `FoldRay/foldray-hub:main` 的非草稿 PR。所有新增、删除、重命名的路径均须位于本人同一个项目目录。
4. 在平台「开源项目 → 提交项目」填写完整 PR 链接。
5. 在「我的申请」查看进度。PR 内容变化后重新申请；部署失败不替换此前公开版本。合并并不保证 Web 构建成功。

## foldray.json v1

```json
{
  "schemaVersion": 1,
  "slug": "hello-world",
  "ownerGithubId": "123456",
  "title": "项目名称",
  "description": "用途与使用方式",
  "category": "WEB",
  "license": "MIT",
  "sourceDir": "source",
  "links": {
    "homepage": "https://example.com/",
    "documentation": "https://example.com/docs",
    "download": "https://example.com/download"
  }
}
```

类别为 `WEB`、`APP`、`BACKEND`、`SKILL`、`OTHER`。`links` 内三个字段均可省略，提供时须使用规范 HTTPS 地址且不得携带账号密码。所有字段采用固定版本合同，不能添加任意安装命令、密钥或平台配置。标题最长 60 个 Unicode 字符，描述最长 1000 个 Unicode 字符。

所有类别都提交源码；App 安装包、模型和大文件填外部下载链接。单项目最多 3000 个文件、16 MiB 总源码，单文件最多 8 MiB；README/许可证各最多 512 KiB。不要提交 node_modules、dist、.git、.env、凭据文件、符号链接、submodule 或 LFS 指针。AI 材料预算为最多 64 批，每批 24000 字符；超过预算或含二进制材料会停止自动通过。

## Web 部署

首期复用平台标准 Vite 静态项目合同。`source/` 是项目根目录，包含 package.json、index.html 和实际入口；React、Vue、Svelte、Preact、原生 Vite 项目按平台规范化检查结果处理。部署在 E2B 隔离环境安装依赖并构建；不提供常驻后端、平台密钥、私有依赖安装凭据或自定义 shell 命令。非受支持 Web 框架展示介绍、源码及外部链接；受支持项目构建失败显示部署失败。

发布预览使用每项目独立 origin。运行证据必须通过网络与预览隔离检查；依赖外部请求而无法通过检查的 Web 项目需要修改源码后新 PR。许可证与 NOTICE 须保留，投稿者须确认有权提交和发布源码。审查只涵盖违法违规内容、恶意代码、泄露凭据和许可证/授权问题，不评价代码风格或质量。

源码已提交 GitHub 的凭据即使平台拒绝也可能公开；发现泄露后须移除并轮换凭据。平台内隐藏只影响 FoldRay 展示，GitHub 中已合并的开源源码仍存在。

# Enterprise AI Assistant · Finish-2

为运营商一线人员、售前和 AI 顾问，把客户访谈记录变成业务环节拆解、AI 应用建议和下次拜访问题。核心六维：具体动作、输入、输出、达标标准、靠规则还是经验、耗时与重复度。网页和 PDF 使用同一报告模板，判断可查看访谈依据。

**最新版本：Finish-2 · 2026-11-19 · 部署前备份。尚未上线。**

[查看最新版本 Finish-2](https://github.com/1140145287/videcoing_case/tree/Finish-2) · [下载加密备份](./backups/enterprise-ai-assistant-Finish-2.zip) · [校验清单](./backups/Finish-2-manifest.json)

## 当前状态

- 已保存阶段一至四的页面、表单、进度、报告结构，以及历史报告、数据库缓存复用、登录与 PDF 下载功能。
- 阶段五只完成部分准备，尚未完成生产路由接入与上线验收；部分改动仅在独立预览中。不能将本包视为已完成安全和性能检查的生产发布版。
- 本轮重新通过 3 项规范、263 项业务测试、生产构建、隔离浏览器流程、完整版类型检查；新增 7 项阶段五组件测试通过。不是新的真实模型或 Google 外部授权验收。
- 备份包已解密检查、比对校验和，并分别从两个 Git bundle 恢复，核对完整文件树与版本标签。

## 代码与版本保存方式

| 项目 | 源码分支 | 本次提交 | 归档文件 |
|---|---|---|---|
| 完整应用 | `shipany-full` | `cf9b251` | `shipany-full.bundle` |
| 独立预览与自动化测试 | `main` | `874dd5f` | `workspace.bundle` |

公开仓库的 **main 主分支保存产品说明和加密备份**，通过 **Finish-2 标签**标识本版。Codex 对话名称“项目实战2”不是版本号。两个源码项目的 Git 历史都包含在加密包中。

项目包含 ShipAny 商业脚手架，沿用 AES-256 加密源码备份，恢复口令由维护者单独保管。源码许可不因加密备份而改变。本仓库的公开 main 不是可直接交给 Vercel 构建的源码目录；后续部署应使用恢复后的完整应用或另行配置的私有部署仓库。

## 英文部署命名

| 项目 | 名称 |
|---|---|
| 产品 | Enterprise AI Assistant |
| 部署项目 | `enterprise-ai-assistant` |
| 域名 | `aiassistant.tips` |
| 最新备份版本 | `Finish-2` |

这些是部署约定；本次没有绑定域名、申请 HTTPS 或执行部署。网页中英文切换继续保留。

## 恢复

使用支持 AES-256 加密 ZIP 的工具和 Finish-2 专属恢复口令解压后，在解压目录运行：

```sh
git clone -b shipany-full shipany-full.bundle full-app
git clone -b main workspace.bundle workspace
```

读取恢复后的 `VERSION.json` 和 `docs/changes/2026-11-19-finish-2-backup.md`，重新配置私密环境变量并安装依赖。

本包不含 `.env` 密钥、OAuth 凭据、客户数据库、依赖安装目录、构建缓存及临时输出；客户数据库和既有环境配置仍在原位置，不能仅靠源码包恢复云数据库。恢复口令没有上传。

备份 ZIP SHA-256：`e58ce07be92bedc4004365a50d99adbbe4605a37bc84e349c2243310ae3b5e87`。

## 保留的旧版本

- [Finish-1](https://github.com/1140145287/videcoing_case/tree/Finish-1)：2026-11-12，[加密包](./backups/ai-productivity-assistant-Finish-1.zip)，[清单](./backups/Finish-1-manifest.json)。
- [2026-11-11 备份](./backups/ai-opportunity-finder-2026-11-11.zip)：保持原样。

旧提交、标签和备份均保留；各版使用各自的恢复口令。

## 开发与检查

源码开发遵循 AGENTS.md、docs/PROJECT_MEMORY.md 和 docs/TESTING.md，执行 RED → GREEN → REFACTOR：先测试再实现，最后回归与重构。公开仓库只含说明与加密文件；这里的 `npm run check` 仅验证规范，不能替代归档内的业务测试。业务验证按恢复后的项目执行。本次备份记录见 [Finish-2 说明](./docs/changes/2026-11-19-finish-2-backup.md)。

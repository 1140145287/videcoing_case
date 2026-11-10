# AI 场景诊断助手

面向一线销售和售前团队。输入客户访谈要点后，可查看业务流程、适合试点的 AI 应用场景和下一次拜访提纲。登录后可下载报告，后续拜访可继续更新同一份客户档案。

## 源码备份

[下载 2026-11-11 加密备份](./backups/ai-opportunity-finder-2026-11-11.zip)。公开仓库提供产品介绍和备份包。含 ShipAny 商业脚手架的代码使用 AES-256 加密，恢复口令由项目维护者单独保管。

| 备份文件 | 内容 | 提交 |
| --- | --- | --- |
| `shipany-full.bundle` | 正在使用的完整版，含账号、数据库适配和诊断工作台 | `784d03d` |
| `workspace.bundle` | 独立预览、开发规范和自动化测试 | `427b6b6` |

备份包的 SHA-256 为 `b311b12ba3a68cdc6f3ba8cdf696bf33139093aa1bd540f725bb5a94bc91b3b2`。用支持 AES 加密 ZIP 的工具和恢复口令解压后，在解压目录执行：

```sh
git clone -b shipany-full shipany-full.bundle full-app
git clone -b main workspace.bundle workspace
```

运行所需的私密环境变量需重新配置。客户访谈数据库、云数据库内容和依赖安装目录未包含在源码备份内。

## 每次开发必须遵守

先阅读 AGENTS.md、docs/PROJECT_MEMORY.md 和 docs/TESTING.md。执行 RED → GREEN → REFACTOR：先明确验收条件并写测试，确认预期失败，再实现、回归和重构。每次代码改动后运行相关测试，交付前运行完整检查。

## 公开仓库的基础检查

需要 Node.js 22 或更新的受支持版本；当前无第三方依赖，无需 npm install。

```powershell
npm test
npm run check
npm run check:release
```

- test：验证项目规范及测试入口。
- check：运行规范测试和 testing.config.json 中的检查，按失败退出；尚未配置业务测试时明确报告。
- check:release：额外要求真实业务测试已接入；当前空项目会预期失败，用于防止误报产品可交付。

GitHub Actions 配置位于 .github/workflows/checks.yml；推送到 GitHub 后才会触发。远程仓库：https://github.com/1140145287/videcoing_case ，使用 SSH 连接，默认开发分支为 main。尚未配置分支保护。

详见 docs/TESTING.md。每项需求按 docs/changes/TEMPLATE.md 创建变更记录。

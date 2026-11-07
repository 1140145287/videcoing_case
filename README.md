# 新产品项目

项目位置：D:\PD\project2_vibe coding。当前已建立开发规则与自动化检查基础，尚无业务代码，产品名称和技术栈待确定。

## 每次开发必须遵守

先阅读 AGENTS.md、docs/PROJECT_MEMORY.md 和 docs/TESTING.md。执行 RED → GREEN → REFACTOR：先明确验收条件并写测试，确认预期失败，再实现、回归和重构。每次代码改动后运行相关测试，交付前运行完整检查。

## 自动化检查

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

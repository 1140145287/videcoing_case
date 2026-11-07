# 测试基础设施初始化

## 验收与证据

- 目录初始化前为空；未修改其他产品项目。
- 先创建 tests/governance/project.test.mjs，再运行 node --test tests/governance/project.test.mjs：3 项因规则和配置文件缺失失败（基础设施 RED）。
- 添加规则、配置、执行脚本及 CI 后运行 npm run check：3 项通过，退出码 0。
- npm run check:release：规范测试通过，但因业务测试未配置退出码 1，符合发布门禁预期。

## 边界

当前仅验证规范和检查入口，没有业务代码，因此未进行产品单元、接口或端到端测试。CI 文件尚未在远程运行；无分支保护。技术栈确定后必须完成 docs/TESTING.md 的接入清单。

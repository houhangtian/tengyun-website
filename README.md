# 北京腾云启航科技有限公司官网

这是北京腾云启航科技有限公司的官方网站项目。

## 部署说明

### 方法一：使用 Excel 一键部署（推荐）

1. 打开 `deploy-control.xlsm` 文件
2. 点击"一键部署"按钮
3. 等待部署完成（可在 GitHub Actions 中查看进度）

### 方法二：手动部署

1. 克隆仓库：
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 本地开发：
   ```bash
   npm run dev
   ```

4. 构建和部署：
   ```bash
   npm run build
   ```

## 技术栈

- Next.js 13
- React
- Tailwind CSS
- TypeScript

## 目录结构

```
├── src/
│   ├── app/              # 应用主目录
│   ├── components/       # React 组件
│   └── styles/          # 样式文件
├── public/              # 静态资源
└── .github/            # GitHub Actions 配置
```

## 开发指南

1. 所有组件都在 `src/components` 目录下
2. 页面内容在 `src/app` 目录下
3. 静态资源（图片等）放在 `public` 目录下

## 自动部署

项目配置了 GitHub Actions 自动部署流程：

1. 推送到 main 分支会自动触发部署
2. 可以在 GitHub Actions 页面手动触发部署
3. 部署完成后，网站会自动更新

## 注意事项

1. 确保已安装 Git
2. Excel 部署需要管理员权限
3. 首次使用需要配置 GitHub Token

## 联系方式

如有问题，请联系技术支持：contact@tengyun.com

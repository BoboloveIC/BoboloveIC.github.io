---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 17eb8a3ee2bb251d31f2dbde0f9ae214_ade2418d5c2011f1abc85254006c9bbf
    ReservedCode1: gJVG7Y7GCNzOKwlTQFifTeDiM3YCmvLN1jAMemVcUVv7STdWTvrlfNvVnkDpk2gQDe0QeOST0MTEkE7fghjLeeMHcXOvG/QED73/Q2a992l27lITUborgeeTjIAum1gpKaROea+zhMVObzmIqeU7tBMavBlLhjA/vmFRBDDGIbXcwkh+WJ6V81EJTj0=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 17eb8a3ee2bb251d31f2dbde0f9ae214_ade2418d5c2011f1abc85254006c9bbf
    ReservedCode2: gJVG7Y7GCNzOKwlTQFifTeDiM3YCmvLN1jAMemVcUVv7STdWTvrlfNvVnkDpk2gQDe0QeOST0MTEkE7fghjLeeMHcXOvG/QED73/Q2a992l27lITUborgeeTjIAum1gpKaROea+zhMVObzmIqeU7tBMavBlLhjA/vmFRBDDGIbXcwkh+WJ6V81EJTj0=
---

# 心驿心理 - 专业心理咨询网站

> 在困惑中找到方向，在焦虑中回归平静。

## 关于本站

心驿心理是一个专业的心理咨询服务网站，采用纯静态 HTML/CSS/JS 构建，可直接部署到 GitHub Pages。

### 网站特点

- **纯静态设计**：零外部依赖，加载速度快
- **响应式布局**：完美适配桌面、平板、手机
- **SEO 优化**：完整的 meta 标签与结构化数据
- **专业设计**：柔和温暖的配色，营造可信赖的心理咨询氛围

### 页面结构

| 页面 | 说明 |
|------|------|
| `index.html` | 首页/落地页，包含 Hero、信任区域、服务概览 |
| `about.html` | 咨询师介绍、专业背景、咨询理念 |
| `services.html` | 服务项目详情、咨询流程、收费说明 |
| `articles.html` | 心理前沿文章列表，支持搜索与分类筛选 |
| `contact.html` | 预约表单、FAQ、来访者须知 |
| `404.html` | 自定义404页面 |

## 本地预览

### 方式一：直接打开
直接用浏览器打开 `index.html` 即可预览（部分功能需要 HTTP 服务环境）。

### 方式二：本地服务器

使用 Python 启动本地服务器：

```bash
cd psy_website
python3 -m http.server 8000
```

然后在浏览器访问 `http://localhost:8000`

### 方式三：Jekyll（可选）

```bash
cd psy_website
jekyll serve
```

访问 `http://localhost:4000`

## 部署到 GitHub Pages

1. 在 GitHub 创建新仓库，命名格式为 `你的用户名.github.io`
2. 将本目录所有文件上传到仓库根目录
3. 在仓库 Settings > Pages 中启用 GitHub Pages
4. 等待 1-2 分钟，访问 `https://你的用户名.github.io`

### 自定义域名

如需绑定自定义域名，编辑 `CNAME` 文件，将你的域名写入并配置 DNS 即可。

## 技术栈

- HTML5
- CSS3（CSS 变量、Flexbox、Grid、响应式）
- 原生 JavaScript（IIFE 封装，无全局变量污染）
- Jekyll（GitHub Pages 默认兼容）

## 自定义

- 替换 `images/therapist.svg` 为咨询师真实照片
- 修改各页面的联系信息
- 更新 `articles.html` 中的文章内容

## 许可

MIT License

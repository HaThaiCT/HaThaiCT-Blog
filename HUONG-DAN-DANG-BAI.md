# Hướng dẫn đăng bài lên Hà Thái Blog

Tài liệu này hướng dẫn cách tạo, viết, kiểm tra và đăng bài mới lên blog cá nhân được xây dựng bằng Astro.

## 1. Yêu cầu môi trường

Blog sử dụng:

- Node.js 22+
- pnpm v9+
- Astro 5
- Markdown cho nội dung bài viết

Cài dependencies lần đầu:

```bash
pnpm install
```

Chạy website ở máy local:

```bash
pnpm dev
```

Sau đó mở trình duyệt tại:

```text
http://localhost:4321
```

## 2. Vị trí lưu bài viết

Tất cả bài viết nằm trong thư mục:

```text
src/content/posts/
```

Mỗi bài viết là một file Markdown có đuôi `.md`, ví dụ:

```text
src/content/posts/huong-dan-viet-bai-dau-tien.md
```

## 3. Tạo bài viết mới

Cách khuyến nghị là dùng script có sẵn:

```bash
pnpm new-post
```

Script sẽ hỏi:

```text
Nhập tên file (slug, vd: bai-viet-moi)
Nhập tiêu đề bài viết
```

Ví dụ nhập slug:

```text
hoc-astro-co-ban
```

File được tạo sẽ là:

```text
src/content/posts/hoc-astro-co-ban.md
```

### Quy tắc đặt slug

Slug chỉ nên dùng:

- chữ thường `a-z`
- số `0-9`
- dấu gạch ngang `-`

Ví dụ hợp lệ:

```text
bai-viet-moi
hoc-astro-phan-1
kinh-nghiem-lap-trinh
```

Ví dụ không nên dùng:

```text
Bai Viet Moi
bài-viết-mới
bai_viet_moi
hoc astro
```

## 4. Cấu trúc một bài viết

Một bài viết gồm hai phần:

1. **Frontmatter**: thông tin của bài viết, nằm giữa hai dòng `---` ở đầu file.
2. **Nội dung bài viết**: phần Markdown bên dưới frontmatter.

Ví dụ:

```md
---
title: Hướng dẫn viết bài đầu tiên trên blog
date: 2026-10-06T12:00:00Z
summary: Một bài viết mẫu giúp làm quen với Markdown và quy trình đăng bài.
category: Hướng dẫn
tags:
  - Blog
  - Markdown
  - Astro
comments: true
draft: false
sticky: 0
---

## Mở đầu

Đây là nội dung bài viết.

## Nội dung chính

Bạn có thể viết nội dung bằng Markdown.
```

## 5. Ý nghĩa các trường frontmatter

| Trường     | Bắt buộc | Ý nghĩa                                                        |
| ---------- | -------- | -------------------------------------------------------------- |
| `title`    | Có       | Tiêu đề bài viết                                               |
| `date`     | Có       | Ngày đăng bài                                                  |
| `lastMod`  | Không    | Ngày cập nhật gần nhất                                         |
| `summary`  | Không    | Mô tả ngắn hiển thị ở danh sách bài viết                       |
| `cover`    | Không    | Ảnh bìa của bài viết                                           |
| `category` | Không    | Danh mục bài viết                                              |
| `tags`     | Không    | Danh sách tag                                                  |
| `comments` | Không    | Bật/tắt bình luận cho riêng bài viết                           |
| `draft`    | Không    | `true` là bản nháp, `false` là bài công khai                   |
| `sticky`   | Không    | Số càng cao thì mức ưu tiên ghim càng cao nếu giao diện hỗ trợ |

### Lưu ý về draft

Nếu muốn bài viết hiển thị trên bản production, cần đặt:

```yaml
draft: false
```

Nếu đặt:

```yaml
draft: true
```

thì bài viết sẽ bị ẩn khi build production.

## 6. Viết nội dung bằng Markdown

### Tiêu đề

```md
# Tiêu đề cấp 1

## Tiêu đề cấp 2

### Tiêu đề cấp 3
```

### Danh sách

```md
- Mục thứ nhất
- Mục thứ hai
- Mục thứ ba
```

### Danh sách có số thứ tự

```md
1. Bước một
2. Bước hai
3. Bước ba
```

### In đậm và in nghiêng

```md
**Chữ in đậm**
_Chữ in nghiêng_
```

### Liên kết

```md
[Astro](https://astro.build/)
```

### Trích dẫn

```md
> Đây là một đoạn trích dẫn.
```

### Khối code

````md
```ts
const blogName = 'Hà Thái Blog'
console.log(blogName)
```
````

## 7. Thêm ảnh vào bài viết

Cách đơn giản nhất là đặt ảnh trong thư mục `public/`.

Ví dụ tạo đường dẫn:

```text
public/images/posts/astro-cover.png
```

Khi dùng trong bài viết, đường dẫn sẽ là:

```md
![Ảnh minh họa](/images/posts/astro-cover.png)
```

Không cần viết `public` trong đường dẫn.

Nếu dùng làm ảnh bìa:

```yaml
cover: /images/posts/astro-cover.png
```

## 8. Xem trước bài viết ở local

Sau khi viết bài, chạy:

```bash
pnpm dev
```

Mở:

```text
http://localhost:4321
```

Kiểm tra:

- Bài có hiển thị ở trang chủ hoặc trang lưu trữ không.
- Tiêu đề, tag, danh mục có đúng không.
- Ảnh có hiển thị đúng không.
- Code block có hiển thị đẹp không.
- Không có lỗi trong terminal.

## 9. Kiểm tra trước khi đăng

Chạy kiểm tra Astro/TypeScript:

```bash
pnpm astro check
```

Chạy build production:

```bash
pnpm build
```

Lệnh `pnpm build` sẽ:

1. Chạy `astro check`.
2. Build site bằng Astro.
3. Tạo chỉ mục tìm kiếm bằng Pagefind.

Nếu muốn xem bản production ở local:

```bash
pnpm preview
```

## 10. Commit bài viết

Kiểm tra file thay đổi:

```bash
git status
```

Stage bài viết mới:

```bash
git add src/content/posts/ten-bai-viet.md
```

Commit:

```bash
git commit -m "docs: add ten bai viet post"
```

Ví dụ:

```bash
git commit -m "docs: add astro introduction post"
```

## 11. Push lên GitHub

Đẩy thay đổi lên nhánh `main`:

```bash
git push origin main
```

Sau khi push, GitHub Actions sẽ tự động build và deploy website.

## 12. Kiểm tra deploy trên GitHub

Vào tab **Actions** của repository:

```text
https://github.com/HaThaiCT/HaThaiCT.github.io/actions
```

Kiểm tra workflow:

```text
Deploy to GitHub Pages
```

Nếu workflow chạy thành công, website sẽ được cập nhật tại:

```text
https://hathaict.github.io/
```

## 13. Cấu hình GitHub Pages đúng cho Astro

Blog này là Astro, vì vậy GitHub Pages nên dùng workflow GitHub Actions, không dùng Jekyll legacy.

Vào:

```text
Repository → Settings → Pages
```

Ở phần **Build and deployment**, chọn:

```text
Source: GitHub Actions
```

Không nên chọn:

```text
Deploy from a branch
```

Vì chế độ đó sẽ khiến GitHub Pages cố build bằng Jekyll và có thể lỗi với file `.astro`.

## 14. Quy trình nhanh mỗi lần đăng bài

```bash
pnpm new-post
# Viết nội dung trong file Markdown mới

pnpm dev
# Xem trước bài viết ở local

pnpm astro check
pnpm build

git status
git add src/content/posts/ten-bai-viet.md
git commit -m "docs: add ten bai viet post"
git push origin main
```

## 15. Checklist trước khi đăng

- [ ] Slug bài viết dùng chữ thường, số và dấu gạch ngang.
- [ ] `title` đúng và dễ hiểu.
- [ ] `date` đúng.
- [ ] `summary` ngắn gọn.
- [ ] `category` phù hợp.
- [ ] `tags` phù hợp.
- [ ] `draft: false` nếu muốn công khai bài viết.
- [ ] Ảnh trong bài hiển thị đúng.
- [ ] Đã chạy `pnpm astro check`.
- [ ] Đã chạy `pnpm build`.
- [ ] Đã push lên `main`.
- [ ] Workflow GitHub Actions deploy thành công.

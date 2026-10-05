---
title: Hướng dẫn viết bài đầu tiên trên blog
date: 2026-10-06T12:00:00Z
summary: Một bài viết mẫu giúp bạn làm quen với cấu trúc Markdown, frontmatter và quy trình đăng bài trên blog cá nhân.
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

Đây là một bài viết mẫu để bạn có thể dùng làm khuôn khi đăng bài mới trên blog. Mỗi bài viết trong blog được lưu dưới dạng file Markdown trong thư mục `src/content/posts/`.

Một bài viết thường gồm hai phần chính:

- **Frontmatter:** Phần thông tin nằm giữa hai dòng `---` ở đầu file.
- **Nội dung:** Phần bài viết chính, được viết bằng Markdown.

## Cấu trúc frontmatter

Ví dụ phần frontmatter của bài viết này:

```yaml
title: Hướng dẫn viết bài đầu tiên trên blog
date: 2026-10-06T12:00:00Z
summary: Một bài viết mẫu giúp bạn làm quen với cấu trúc Markdown, frontmatter và quy trình đăng bài trên blog cá nhân.
category: Hướng dẫn
tags:
  - Blog
  - Markdown
  - Astro
comments: true
draft: false
sticky: 0
```

Trong đó:

- `title` là tiêu đề bài viết.
- `date` là ngày đăng bài.
- `summary` là mô tả ngắn hiển thị ở danh sách bài viết.
- `category` là danh mục của bài.
- `tags` là các thẻ giúp phân loại nội dung.
- `draft: false` nghĩa là bài viết đã sẵn sàng hiển thị.

## Viết nội dung bằng Markdown

Bạn có thể dùng các cú pháp Markdown phổ biến như tiêu đề, danh sách, liên kết, ảnh và khối code.

### Danh sách

```md
- Ý tưởng thứ nhất
- Ý tưởng thứ hai
- Ý tưởng thứ ba
```

### Liên kết

```md
[Astro](https://astro.build/)
```

### Khối code

```ts
const blogName = 'Hà Thái Blog'
console.log(`Xin chào từ ${blogName}`)
```

## Gợi ý quy trình đăng bài

Khi muốn viết bài mới, bạn có thể làm theo quy trình sau:

1. Chạy `pnpm new-post` để tạo file bài viết mới.
2. Viết nội dung trong file Markdown vừa tạo.
3. Chạy `pnpm dev` để xem trước ở máy local.
4. Chạy `pnpm astro check` và `pnpm build` để kiểm tra trước khi đăng.
5. Commit và push thay đổi lên GitHub.

## Kết luận

Từ bài viết mẫu này, bạn có thể sao chép cấu trúc, thay tiêu đề, tag, mô tả và nội dung để tạo các bài viết mới cho blog của mình.

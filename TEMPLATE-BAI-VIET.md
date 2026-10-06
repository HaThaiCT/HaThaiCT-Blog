# Template bài viết

> File này dùng làm mẫu khi viết bài mới. Không đặt trực tiếp file template này vào `src/content/posts/` nếu chưa sửa nội dung, vì Astro sẽ coi nó là một bài viết thật.

## Cách dùng

1. Chạy lệnh tạo bài mới:

```bash
pnpm new-post
```

2. Mở file vừa tạo trong:

```text
src/content/posts/
```

3. Copy phần template bên dưới vào file bài viết mới.

4. Thay các giá trị mẫu như tiêu đề, ngày, mô tả, tag và nội dung.

---

## Template đầy đủ

````md
---
title: Tiêu đề bài viết
date: 2026-10-06T12:00:00Z
lastMod: 2026-10-06T12:00:00Z
summary: Viết mô tả ngắn gọn khoảng 1 đến 2 câu để giới thiệu nội dung bài viết.
cover: /images/posts/ten-bai-viet/cover.png
category: Tên danh mục
tags:
  - Tag 1
  - Tag 2
  - Tag 3
comments: true
draft: false
sticky: 0
---

## Mở đầu

Viết đoạn mở đầu ngắn gọn để giới thiệu vấn đề, bối cảnh hoặc lý do bạn viết bài này.

Gợi ý:

- Bài viết này dành cho ai?
- Người đọc sẽ học được gì?
- Vì sao chủ đề này quan trọng hoặc thú vị?

## Nội dung chính

Trình bày nội dung chính của bài viết ở đây.

Bạn có thể chia thành nhiều mục nhỏ để bài dễ đọc.

### Mục 1

Viết nội dung cho mục đầu tiên.

### Mục 2

Viết nội dung cho mục thứ hai.

### Mục 3

Viết nội dung cho mục thứ ba.

## Ví dụ

Nếu bài viết có ví dụ, hãy đặt tại đây.

```ts
const blogName = 'Hà Thái Blog'
console.log(`Xin chào từ ${blogName}`)
```

## Hình ảnh minh họa

Nếu có ảnh, đặt ảnh trong thư mục `public/images/posts/ten-bai-viet/`.

Ví dụ:

```md
![Mô tả ảnh](/images/posts/ten-bai-viet/image.png)
```

## Ghi chú quan trọng

Nếu có lưu ý, cảnh báo hoặc kinh nghiệm thực tế, hãy viết ở phần này.

> Đây là một ghi chú hoặc trích dẫn quan trọng.

## Kết luận

Tóm tắt lại nội dung chính của bài viết.

Gợi ý phần kết:

- Nhắc lại điều quan trọng nhất.
- Gợi ý bước tiếp theo cho người đọc.
- Mời người đọc thử áp dụng hoặc tìm hiểu thêm.
````

---

## Template ngắn

Dùng template này cho các bài viết nhanh, ghi chú ngắn hoặc nhật ký học tập.

```md
---
title: Tiêu đề bài viết
date: 2026-10-06T12:00:00Z
summary: Mô tả ngắn của bài viết.
category: Ghi chú
tags:
  - Tag 1
comments: true
draft: false
sticky: 0
---

## Ghi chú

Viết nội dung chính tại đây.

## Kết luận

Tóm tắt ngắn gọn điều đã học hoặc điều muốn ghi nhớ.
```

---

## Gợi ý frontmatter

| Trường     | Cách dùng                                           |
| ---------- | --------------------------------------------------- |
| `title`    | Tiêu đề hiển thị của bài viết                       |
| `date`     | Ngày đăng bài                                       |
| `lastMod`  | Ngày cập nhật gần nhất, có thể bỏ nếu không cần     |
| `summary`  | Mô tả ngắn hiển thị ngoài danh sách bài viết        |
| `cover`    | Ảnh bìa, có thể bỏ nếu bài không có ảnh bìa         |
| `category` | Danh mục chính của bài viết                         |
| `tags`     | Danh sách tag                                       |
| `comments` | `true` để cho phép bình luận, `false` để tắt        |
| `draft`    | `true` là bản nháp, `false` là công khai            |
| `sticky`   | `0` là bình thường, số cao hơn dùng để ưu tiên ghim |

## Checklist trước khi đăng

- [ ] Đã đổi `title`.
- [ ] Đã đổi `date`.
- [ ] Đã viết `summary`.
- [ ] Đã chọn `category`.
- [ ] Đã sửa danh sách `tags`.
- [ ] Đã kiểm tra `draft: false` nếu muốn công khai.
- [ ] Đã kiểm tra ảnh trong bài nếu có.
- [ ] Đã chạy `pnpm astro check`.
- [ ] Đã chạy `pnpm build`.

import { getCollection } from 'astro:content'

// Lấy tất cả bài viết
async function getAllPosts() {
  const allPosts = await getCollection('posts', ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true
  })

  return allPosts
}

// Lấy tất cả bài viết, sắp xếp theo ngày đăng tăng dần
async function getNewestPosts() {
  const allPosts = await getAllPosts()

  return allPosts.sort((a, b) => {
    return a.data.date.valueOf() - b.data.date.valueOf()
  })
}

// Lấy tất cả bài viết, sắp xếp theo ngày đăng giảm dần
export async function getOldestPosts() {
  const allPosts = await getAllPosts()

  return allPosts.sort((a, b) => {
    return b.data.date.valueOf() - a.data.date.valueOf()
  })
}

// Lấy tất cả bài viết, ưu tiên bài ghim, sắp xếp theo ngày đăng giảm dần
export async function getSortedPosts() {
  const allPosts = await getAllPosts()

  return allPosts.sort((a, b) => {
    if (a.data.sticky !== b.data.sticky) {
      return b.data.sticky - a.data.sticky
    } else {
      return b.data.date.valueOf() - a.data.date.valueOf()
    }
  })
}

// Lấy tổng số từ của tất cả bài viết
export async function getAllPostsWordCount() {
  const allPosts = await getAllPosts()

  const promises = allPosts.map((post) => {
    return post.render()
  })

  const res = await Promise.all(promises)

  const wordCount = res.reduce((count, cur) => {
    return count + cur.remarkPluginFrontmatter.words
  }, 0)

  return wordCount
}

// Chuyển đổi thành slug an toàn cho URL, bỏ dấu chấm, khoảng trắng thành gạch ngang, chữ thường
export function slugify(text: string) {
  return text.replace(/\./g, '').replace(/\s/g, '-').toLowerCase()
}

// Lấy tất cả danh mục
export async function getAllCategories() {
  const newestPosts = await getNewestPosts()

  const allCategories = newestPosts.reduce<{ slug: string; name: string; count: number }[]>(
    (acc, cur) => {
      if (cur.data.category) {
        const slug = slugify(cur.data.category)
        const index = acc.findIndex((category) => category.slug === slug)
        if (index === -1) {
          acc.push({
            slug,
            name: cur.data.category,
            count: 1,
          })
        } else {
          acc[index].count += 1
        }
      }
      return acc
    },
    [],
  )

  return allCategories
}

// Lấy tất cả thẻ (tags)
export async function getAllTags() {
  const newestPosts = await getNewestPosts()

  const allTags = newestPosts.reduce<{ slug: string; name: string; count: number }[]>(
    (acc, cur) => {
      cur.data.tags.forEach((tag) => {
        const slug = slugify(tag)
        const index = acc.findIndex((tag) => tag.slug === slug)
        if (index === -1) {
          acc.push({
            slug,
            name: tag,
            count: 1,
          })
        } else {
          acc[index].count += 1
        }
      })
      return acc
    },
    [],
  )

  return allTags
}

// Lấy các thẻ phổ biến nhất
export async function getHotTags(len = 5) {
  const allTags = await getAllTags()

  return allTags
    .sort((a, b) => {
      return b.count - a.count
    })
    .slice(0, len)
}

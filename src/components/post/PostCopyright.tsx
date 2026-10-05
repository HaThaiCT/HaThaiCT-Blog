import { getFormattedDateTime } from '@/utils/date'
import { AnimatedSignature } from '../AnimatedSignature'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Config from '@/astro-obsidian.config'

const { author, site } = Config

function getPostUrl(slug: string) {
  return new URL(slug, site.url).href
}

export function PostCopyright({
  title,
  slug,
  lastMod,
}: {
  title: string
  slug: string
  lastMod: Date
}) {
  const [lastModStr, setLastModStr] = useState('')
  const url = getPostUrl(slug)

  function handleCopyUrl() {
    navigator.clipboard.writeText(url)
    toast.success('Đã sao chép liên kết bài viết')
  }

  useEffect(() => {
    setLastModStr(getFormattedDateTime(lastMod))
  }, [lastMod])

  return (
    <section className="text-xs leading-loose text-secondary">
      <p>Tiêu đề bài viết: {title}</p>
      <p>Tác giả: {author.name}</p>
      <p>
        <span>Liên kết bài viết: {decodeURIComponent(url)} </span>
        <span
          role="button"
          className="cursor-pointer select-none text-accent hover:underline"
          onClick={handleCopyUrl}
        >
          [Sao chép]
        </span>
      </p>
      <p>Cập nhật lần cuối: {lastModStr}</p>
      <hr className="my-3 border-primary" />
      <div>
        <div className="float-right ml-4 my-2">
          <AnimatedSignature />
        </div>
        <p>
          Vui lòng ghi rõ nguồn và đính kèm liên kết gốc khi chia sẻ hoặc trích dẫn bài viết. Bạn
          được tự do sao chép, phân phối và chỉnh sửa tác phẩm cho mục đích phi thương mại theo cùng
          điều kiện giấy phép.
          <br />
          Bài viết được phát hành theo giấy phép{' '}
          <a
            className="hover:underline hover:text-accent underline-offset-2"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.vi"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-NC-SA 4.0
          </a>
          .
        </p>
      </div>
    </section>
  )
}

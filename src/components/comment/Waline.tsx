import { useEffect, useRef } from 'react'
import { init } from '@waline/client'
import '@waline/client/style'
import Config from '@/astro-obsidian.config'

const {
  comments: {
    waline: { serverURL },
  },
} = Config

export function Waline() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const walineInst = init({
      el: ref.current,
      serverURL,
      dark: "[data-theme='dark']",
      login: 'force',
      imageUploader: false,
      search: false,
      locale: {
        placeholder: 'Để lại một bình luận thân thiện (hỗ trợ Markdown)…',
      },
      emoji: ['//unpkg.com/@waline/emojis@1.1.0/bilibili'],
    })

    return () => {
      if (ref.current) {
        walineInst?.destroy()
      }
    }
  }, [serverURL])

  return <div ref={ref}></div>
}

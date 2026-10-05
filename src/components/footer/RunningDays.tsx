import { useLayoutEffect, useState } from 'react'
import { getDiffInDays } from '@/utils/date'
import Config from '@/astro-obsidian.config'

const { footer } = Config

export function RunningDays() {
  const [days, setDays] = useState(0)

  useLayoutEffect(() => {
    const diffDays = getDiffInDays(new Date(footer.startTime))
    setDays(diffDays)
  }, [])

  if (days < 0) {
    return <span>Blog vừa mới khởi tạo</span>
  }

  return <span>Đã hoạt động được {days} ngày</span>
}

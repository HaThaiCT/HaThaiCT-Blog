import { input } from '@inquirer/prompts'
import fs from 'fs'
import path from 'path'
import { isFileNameSafe } from './utils.js'

function getPostFullPath(fileName) {
  return path.join('./src/content/posts', `${fileName}.md`)
}

const fileName = await input({
  message: 'Nhập tên file (slug, vd: bai-viet-moi)',
  validate: (value) => {
    if (!isFileNameSafe(value)) {
      return 'Tên file chỉ được chứa chữ cái, số và dấu gạch ngang'
    }
    const fullPath = getPostFullPath(value)
    if (fs.existsSync(fullPath)) {
      return `${fullPath} đã tồn tại`
    }
    return true
  },
})

const title = await input({
  message: 'Nhập tiêu đề bài viết',
})

const content = `---
title: ${title}
date: ${new Date().toISOString()}
tags: []
comments: true
draft: false
---
`

const fullPath = getPostFullPath(fileName)
fs.writeFileSync(fullPath, content)
console.log(`${fullPath} đã được tạo thành công!`)

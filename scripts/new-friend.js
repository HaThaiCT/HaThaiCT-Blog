import { input } from '@inquirer/prompts'
import fs from 'fs'
import path from 'path'
import { isFileNameSafe } from './utils.js'

function getFriendFullPath(fileName) {
  return path.join('./src/content/friends', `${fileName}.yaml`)
}

const fileName = await input({
  message: 'Nhập tên định danh (slug)',
  validate: (value) => {
    if (!isFileNameSafe(value)) {
      return 'Tên file chỉ được chứa chữ cái, số và dấu gạch ngang'
    }
    const fullPath = getFriendFullPath(value)
    if (fs.existsSync(fullPath)) {
      return `${fullPath} đã tồn tại`
    }
    return true
  },
})

const title = await input({
  message: 'Nhập tên trang web bạn bè',
})
const description = await input({
  message: 'Nhập mô tả ngắn',
})
const link = await input({
  message: 'Nhập địa chỉ URL website',
})
const avatar = await input({
  message: 'Nhập đường dẫn ảnh đại diện (Avatar URL)',
})

const content = `title: ${title}
description: ${description}
link: ${link}
avatar: ${avatar}
`

const fullPath = getFriendFullPath(fileName)
fs.writeFileSync(fullPath, content)
console.log(`${fullPath} đã được tạo thành công!`)

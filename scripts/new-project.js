import { input } from '@inquirer/prompts'
import fs from 'fs'
import path from 'path'
import { isFileNameSafe } from './utils.js'

function getProjectFullPath(fileName) {
  return path.join('./src/content/projects', `${fileName}.yaml`)
}

const fileName = await input({
  message: 'Nhập tên định danh dự án (slug)',
  validate: (value) => {
    if (!isFileNameSafe(value)) {
      return 'Tên file chỉ được chứa chữ cái, số và dấu gạch ngang'
    }
    const fullPath = getProjectFullPath(value)
    if (fs.existsSync(fullPath)) {
      return `${fullPath} đã tồn tại`
    }
    return true
  },
})

const title = await input({
  message: 'Nhập tên dự án',
})
const description = await input({
  message: 'Nhập mô tả dự án',
})
const link = await input({
  message: 'Nhập địa chỉ dự án (URL)',
})
const image = await input({
  message: 'Nhập đường dẫn ảnh xem trước (Preview Image URL)',
})

const content = `title: ${title}
description: ${description}
link: ${link}
image: ${image}
`

const fullPath = getProjectFullPath(fileName)
fs.writeFileSync(fullPath, content)
console.log(`${fullPath} đã được tạo thành công!`)

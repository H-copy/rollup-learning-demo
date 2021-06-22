import dayjs from 'dayjs'
import { add, Man, print } from './utils.js'

print(add(10, 2))

new Man('coco', 24).call()

print(dayjs().format('YYYY-MM-DD dddd HH:mm:ss'))

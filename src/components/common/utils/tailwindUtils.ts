import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...classNames: clsx.ClassValue[]) {
  return twMerge(clsx(classNames))
}

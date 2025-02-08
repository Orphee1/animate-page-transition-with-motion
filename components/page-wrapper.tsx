'use client'
import { motion } from 'motion/react'
import classNames from 'classnames'

const PageWrapper = ({
  children,
  classname,
}: {
  children: React.ReactNode
  classname?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={classNames('min-h-screenHeightWithoutHeader', classname)}
    >
      {children}
    </motion.div>
  )
}

export default PageWrapper

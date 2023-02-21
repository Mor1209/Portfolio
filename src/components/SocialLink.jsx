import React from 'react'

const SocialLink = ({ icon: Icon, title, children, ...props }) => {
  return (
    <a className='-m-1 p-1' title={title} {...props}>
      <div className='flex flex-nowrap items-center gap-2 [&>*]:hover:fill-zinc-600'>
        <Icon className='h-10 w-10 fill-zinc-500 transition dark:fill-zinc-400 dark:hover:fill-zinc-300' />
        {children}
      </div>
    </a>
  )
}

export default SocialLink

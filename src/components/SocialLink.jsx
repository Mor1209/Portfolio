import React from 'react'

const SocialLink = ({ icon: Icon, ...props }) => {
  return (
    <a className='-m-1 p-1' {...props}>
      <Icon className='h-10 w-10 fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300' />
    </a>
  )
}

export default SocialLink

import React from 'react'
import SocialLink from '../SocialLink'
import { GitHubIcon, LinkedInIcon, EmailIcon } from '../SocialIcons'
import { useNav } from '../../hooks/useNav'

const ContactSection = () => {
  const contactRef = useNav('contact')
  return (
    <section id='contact' className='flex justify-center pt-[4rem] mt-[-4rem]'>
      <div className='container flex flex-col items-center justify-center p-6'>
        <h1
          ref={contactRef}
          className='text-4xl font-bold text-zinc-800 dark:text-zinc-100'
        >
          Get in Touch
        </h1>

        <div className='w-full md:w-[70%] md:grid md:grid-cols-3'>
          <div className='mt-5 md:col-span-2 md:mt-0 md:pl-6'>
            <form className='space-y-6 mt-6' action='#' method='POST'>
              <div className='grid grid-cols-6 gap-3'>
                <div className='col-span-6'>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium text-zinc-800 dark:text-zinc-100'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='John Smith'
                    autoComplete='name'
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>

                <div className='col-span-6'>
                  <label
                    htmlFor='email-address'
                    className='block text-sm font-medium  text-zinc-800 dark:text-zinc-100'
                  >
                    Email address
                  </label>
                  <input
                    type='text'
                    name='email-address'
                    id='email-address'
                    autoComplete='email'
                    placeholder='john.smith@gmail.com'
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>

                <div className='col-span-6'>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-zinc-800 dark:text-zinc-100'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    name='subject'
                    id='subject'
                    placeholder='connect, offer, request'
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>

                <div className='col-span-6'>
                  <div className='flex justify-between'>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-zinc-800 dark:text-zinc-100'
                    >
                      Message
                    </label>
                  </div>
                  <div className='mt-1'>
                    <textarea
                      id='message'
                      name='message'
                      rows={3}
                      className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className='col-span-6 flex justify-end'>
                  <button
                    type='submit'
                    className='ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className='md:col-span-1 mt-5 md:ml-20'>
            <h2 className='invisible md:visible font-medium text-zinc-800 dark:text-zinc-100'>
              Or connect through
            </h2>
            <div className='mt-2 flex md:flex-col md:gap-1'>
              <div className='md:flex items-center mt-3 md:gap-2'>
                <SocialLink
                  href='https://github.com/Mor1209'
                  icon={GitHubIcon}
                  className=''
                  title='Follow on GitHub'
                >
                  <h3 className='invisible md:visible font-medium text-zinc-800 dark:text-zinc-100'>
                    GitHub
                  </h3>
                </SocialLink>
              </div>

              <div className='md:flex md:items-center mt-3 md:gap-2'>
                <SocialLink
                  href='https://www.linkedin.com/in/moritz-hauptmann/'
                  icon={LinkedInIcon}
                  className=''
                  title='Follow on LinkedIn'
                >
                  <h3 className='invisible md:visible font-medium text-zinc-800 dark:text-zinc-100'>
                    LinkedIn
                  </h3>
                </SocialLink>
              </div>

              <div className='md:flex md:items-center mt-3 md:gap-2'>
                <SocialLink
                  href='mailto:mohauptmann@gmail.com'
                  icon={EmailIcon}
                  className=''
                  title='Email me'
                >
                  <h3 className='invisible md:visible font-medium text-zinc-800 dark:text-zinc-100'>
                    Email
                  </h3>
                </SocialLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

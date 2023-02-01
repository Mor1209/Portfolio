import React from 'react'
import emailjs from '@emailjs/browser'
import SocialLink from '../SocialLink'
import { GitHubIcon, LinkedInIcon, EmailIcon } from '../SocialIcons'
import { useNav } from '../../hooks/useNav'
import { useRef } from 'react'
import { useState } from 'react'
import useInput from '../../hooks/useInput'

const isNotEmpty = value => value.trim() !== ''
const isEmail = value => value.includes('@')

const ContactSection = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [message, setMessage] = useState()

  const contactRef = useNav('contact')
  const formRef = useRef()

  const emailjsConfig = [
    'service_gmail_personal',
    'template_default',
    formRef.current,
    '6j3trnswbhiEQbnzT',
  ]

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty)
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail)
  const {
    value: subjectValue,
    isValid: subjectIsValid,
    hasError: subjectHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubject,
  } = useInput(isNotEmpty)
  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty)

  let formIsValid = false

  if (nameIsValid && emailIsValid && subjectIsValid && messageIsValid) {
    formIsValid = true
  }

  const submitHandler = async event => {
    event.preventDefault()

    if (!formIsValid) {
      return
    }

    try {
      const result = await emailjs.sendForm(...emailjsConfig)
      console.log(result.text)
      resetName()
      resetEmail()
      resetSubject()
      resetMessage()
    } catch (error) {
      console.log(error.text)
    }
  }

  const validInputClasses =
    'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
  const invalidInputClasses =
    'border-red-300 focus:border-red-500 focus:ring-red-500'

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
            <form
              ref={formRef}
              className='space-y-6 mt-6'
              onSubmit={submitHandler}
            >
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
                    value={nameValue}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                      nameHasError ? invalidInputClasses : validInputClasses
                    }`}
                  />
                  {nameHasError && (
                    <p className='text-red-500 ml-2'>Please enter a name.</p>
                  )}
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
                    value={emailValue}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                      emailHasError ? invalidInputClasses : validInputClasses
                    }`}
                  />
                  {emailHasError && (
                    <p className='text-red-500 ml-2'>
                      Please enter a valid email address.
                    </p>
                  )}
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
                    value={subjectValue}
                    onChange={subjectChangeHandler}
                    onBlur={subjectBlurHandler}
                    className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                      subjectHasError ? invalidInputClasses : validInputClasses
                    }`}
                  />
                  {subjectHasError && (
                    <p className='text-red-500 ml-2'>Please enter a subject.</p>
                  )}
                </div>

                <div className='col-span-6'>
                  <div className='flex justify-between'>
                    <label
                      htmlFor='message'
                      onChange={e => setMessage(e.target.value)}
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
                      value={messageValue}
                      onChange={messageChangeHandler}
                      onBlur={messageBlurHandler}
                      className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                        messageHasError
                          ? invalidInputClasses
                          : validInputClasses
                      }`}
                    />
                    {messageHasError && (
                      <p className='text-red-500 ml-2'>
                        Please enter a message.
                      </p>
                    )}
                  </div>
                </div>
                <div className='col-span-6 flex justify-end'>
                  <button
                    type='submit'
                    disabled={!formIsValid}
                    className='ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-400 disabled:shadow-none'
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

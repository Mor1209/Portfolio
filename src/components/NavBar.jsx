import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  DocumentTextIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { m, AnimatePresence } from 'framer-motion'
import DarkModeToggle from './DarkModeToggle'

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function NavBar(props) {
  return (
    <AnimatePresence>
      {props.isVisible && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Disclosure
            as='nav'
            className={`bg-transparent shadow fixed w-full z-10 backdrop-blur`}
          >
            {({ open }) => (
              <>
                <div className='mx-auto container px-2 sm:px-6 lg:px-8'>
                  <div className='relative flex h-16 justify-between'>
                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                      {/* Mobile menu button */}
                      <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                        <span className='sr-only'>Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className='block h-6 w-6'
                            aria-hidden='true'
                          />
                        ) : (
                          <Bars3Icon
                            className='block h-6 w-6'
                            aria-hidden='true'
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                      <div className='flex flex-shrink-0 items-center'>
                        <h1 className='font-sono text-2xl pr-5 text-zinc-800 dark:text-zinc-100'>
                          Moritz
                        </h1>
                        {/* <img
                          className='block h-8 w-auto lg:hidden'
                          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                          alt='Your Company'
                        />
                        <img
                          className='hidden h-8 w-auto lg:block'
                          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                          alt='Your Company'
                        /> */}
                      </div>
                      <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                        {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                        <a
                          href='#'
                          className='inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-indigo-500'
                        >
                          Dashboard
                        </a>
                        <a
                          href='#'
                          className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                        >
                          Team
                        </a>
                        <a
                          href='#'
                          className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                        >
                          Projects
                        </a>
                        <a
                          href='#'
                          className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                        >
                          Calendar
                        </a>
                      </div>
                    </div>
                    <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                      <button
                        type='button'
                        className='relative inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600'
                        onClick={() => props.resumeToggleHandler(true)}
                      >
                        <DocumentTextIcon
                          className='-ml-1 mr-2 h-5 w-5'
                          aria-hidden='true'
                        />
                        <span>Resume</span>
                      </button>
                      <DarkModeToggle />
                    </div>
                  </div>
                </div>
                <Disclosure.Panel className='sm:hidden'>
                  <div className='space-y-1 pt-2 pb-4'>
                    {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                    <Disclosure.Button
                      as='a'
                      href='#'
                      className='block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700'
                    >
                      Dashboard
                    </Disclosure.Button>
                    <Disclosure.Button
                      as='a'
                      href='#'
                      className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                    >
                      Team
                    </Disclosure.Button>
                    <Disclosure.Button
                      as='a'
                      href='#'
                      className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                    >
                      Projects
                    </Disclosure.Button>
                    <Disclosure.Button
                      as='a'
                      href='#'
                      className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                    >
                      Calendar
                    </Disclosure.Button>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </m.div>
      )}
    </AnimatePresence>
  )
}

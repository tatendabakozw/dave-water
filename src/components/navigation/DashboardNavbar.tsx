import { Bars3Icon, BellIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Avatar } from '@chakra-ui/react'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface Props{
    setSidebarOpen:any   
}

const DashboardNavbar = ({setSidebarOpen}: Props) => {
    const [query, setQuery] = useState<string>('')

    const search_items_handler = (e:any) =>{
        e.preventDefault()
        console.log(query)
    }

    const logout_user = () => {
        // dispatch({ type: 'USER_LOGOUT' })
        // history.push('/')
        // Cookies.remove('userInfo')
        // window.location.reload()
    }

    const userInfo = {
        name: 'tatenda',
        photoURL: ''
    }

  return (
    <>
            <div className="relative z-10 flex-shrink-0 flex h-16 w-full border-b border-gray-200 lg:border-none">
                <button
                    type="button"
                    className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none lg:hidden"
                    onClick={() => setSidebarOpen(true)}
                >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* Search bar */}
                <div className="flex-1 md:px-8 px-4 flex justify-between">
                    <div className="flex-1 flex flex-col space-y-1 my-2">
                        <p className='text-slate-700 font-semibold'>Good morning, </p>
                        <p className='text-slate-900 text-2xl font-bold'>tatenda bako</p>
                    </div>
                    <div className="ml-4 flex items-center md:ml-6">
                        <button
                            type="button"
                            className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
                        >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="ml-3 relative">
                            <div>
                                <Menu.Button className="max-w-xs bg-white rounded-full space-x-2 flex items-center text-sm focus:outline-none lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                                    <Avatar size="sm" name={userInfo?.name} src={userInfo?.photoURL} />
                                    <div className="hidden text-gray-700 text-sm font-medium lg:block">
                                        <span className="sr-only">Open user menu for </span>
                                        {/* <Username username={userInfo?.name} /> */}
                                        {userInfo.name}
                                    </div>
                                    <ChevronDownIcon
                                        className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/profile"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Your Profile
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/dashboard/settings"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    
                                    <Menu.Item>
                                        {({ active }) => (
                                            <div onClick={logout_user}
                                                className={classNames(active ? 'bg-gray-100' : '', 'cursor-pointer block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Logout
                                            </div>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </div>
        </>
  )
}

export default DashboardNavbar
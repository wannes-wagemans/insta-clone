import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

export const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm ">
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
        <div className="relative hidden w-24 cursor-pointer lg:inline-grid">
          <Image src="/logo.png" layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden">
          <Image src="/logo-mobile.png" layout="fill" objectFit="contain" />
        </div>

        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 text-sm focus:border-black focus:ring-black md:text-base"
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <MenuIcon className="h-6 cursor-pointer md:hidden" />
          <HomeIcon className="navButton" />
          <div className="navBtn relative ">
            <PaperAirplaneIcon className="navButton rotate-45" />
            <div className="absolute -top-1 -right-2 hidden h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white md:flex">
              3
            </div>
          </div>
          <PlusCircleIcon className="navButton" />
          <UserGroupIcon className="navButton" />
          <HeartIcon className="navButton" />
          <img
            src="/logo-mobile.png"
            alt="profile pic"
            className="h-10 cursor-pointer rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

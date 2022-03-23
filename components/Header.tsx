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
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { setOpen } from '../features/openSlicer'

export const Header = () => {
  const open = useSelector((state: any) => state.open.value)
  const dispatch = useDispatch()

  const { data: session } = useSession()
  const router = useRouter()

  const signInHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    signIn()
  }
  const signOutHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    signOut()
  }

  const addNewPost = () => {
    dispatch(setOpen())
  }

  console.log(open)

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm ">
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
        <div
          onClick={() => router.push('/')}
          className="relative hidden w-24 cursor-pointer lg:inline-grid"
        >
          <Image src="/logo.png" layout="fill" objectFit="contain" />
        </div>
        <div
          onClick={() => router.push('/')}
          className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden"
        >
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
          <HomeIcon onClick={() => router.push('/')} className="navButton" />

          {session ? (
            <>
              {' '}
              <div className="navBtn relative ">
                <PaperAirplaneIcon className="navButton rotate-45" />
                <div className="absolute -top-1 -right-2 hidden h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white md:flex">
                  3
                </div>
              </div>
              <PlusCircleIcon onClick={addNewPost} className="navButton" />
              <UserGroupIcon className="navButton" />
              <HeartIcon className="navButton" />
              <button onClick={signOutHandler}>
                <img
                  src={session?.user?.image}
                  alt="profile pic"
                  className="h-10 w-10 cursor-pointer rounded-full"
                />
              </button>
            </>
          ) : (
            <button className="text-sm text-blue-400" onClick={signInHandler}>
              SIGN IN
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

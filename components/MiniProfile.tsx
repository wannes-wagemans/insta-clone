import { signOut, useSession } from 'next-auth/react'

export const MiniProfile: React.FC = () => {
  const { data: session } = useSession()
  const signOutHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    signOut()
  }
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src={session?.user?.image}
        alt="user-profile-picture"
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button
        onClick={signOutHandler}
        className="text-sm font-semibold text-blue-400"
      >
        Sign out
      </button>
    </div>
  )
}

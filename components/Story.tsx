import React from 'react'

interface StoryProps {
  username: 'string'
  img: 'string'
}

export const Story: React.FC<StoryProps> = ({ img, username }) => {
  return (
    <div>
      <img
        className="h-14 w-14 transform cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px] duration-200 ease-out hover:scale-110"
        src={img}
        alt={username}
      />
      <p className="w-14 truncate text-center text-xs">{username}</p>
    </div>
  )
}

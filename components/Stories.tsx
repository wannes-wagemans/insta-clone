import faker from '@faker-js/faker'
import { useEffect, useState } from 'react'
import { Story } from './Story'

interface StoriesProps {}

export const Stories: React.FC<StoriesProps> = ({}) => {
  const [suggestions, setSuggestions] = useState<any>([])
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-black">
      {suggestions.map((profile: any) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

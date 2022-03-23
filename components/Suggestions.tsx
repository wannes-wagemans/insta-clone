import faker from '@faker-js/faker'
import { useEffect, useState } from 'react'

export const Suggestions: React.FC = () => {
  const [suggestions, setSuggestions] = useState<any>([])

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-4 ml-10">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See all</button>
      </div>

      {suggestions.map((profile: any) => (
        <div
          key={profile.id}
          className="mt-4 flex items-center justify-between"
        >
          <img
            className="h-10 w-10 rounded-full border p-[2px]"
            src={profile.avatar}
          />
          <div className="ml-2 flex-1">
            <h2 className="text-sm font-semibold">{profile.username}</h2>
            <h3 className="truncate text-xs text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>
          <button className="ml-4 text-sm text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  )
}

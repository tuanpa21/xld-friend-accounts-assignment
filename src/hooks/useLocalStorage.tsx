import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type SetValue<T> = Dispatch<SetStateAction<T>>

export default function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  const [value, setValue] = useState<T>(initialValue)

  useEffect(() => {
    const storedValue: T = JSON.parse(window?.localStorage.getItem(key) ?? 'null')

    if (storedValue) {
      setValue(storedValue)
    }
  }, [key])

  useEffect(() => {
    window?.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

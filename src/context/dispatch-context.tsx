"use client"

import { createContext, useContext, useState } from "react"
import { SearchScope } from "@/types/search-scope"

export interface DispatchContextValue {
  search: string

  setSearch: (value: string) => void

  searchScope: SearchScope

  setSearchScope: (value: SearchScope) => void
}

const DispatchContext = 
  createContext<
    DispatchContextValue | undefined
  >(undefined)

export function DispatchProvider({
  children
}: {
  children: React.ReactNode
}) {
  const[search, setSearch] = useState("")

  const [searchScope, setSearchScope] = useState<SearchScope>("ALL")
  return(
    <DispatchContext.Provider
      value={{
        search,
        setSearch,
        searchScope,
        setSearchScope
      }}
    >
      {children}
    </DispatchContext.Provider>
  )
}

export function useDispatchContext() {
  const context = useContext(DispatchContext)

  if(!context) {
    throw new Error(
      "useDispatchContext must be used inside DispatchProvider"
    )
  }

  return context
}
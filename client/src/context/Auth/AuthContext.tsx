import { createContext, PropsWithChildren, useState } from "react"

type User = {}
type AuthContextI = User | null

const AuthContext = createContext<AuthContextI>(null)

function AuthProvider({ children }: PropsWithChildren): JSX.Element {
  const [user, setUser] = useState<AuthContextI>({})

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}
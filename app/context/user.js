"use client"

import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

const Context = createContext();

const Provider = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [id, setId] = useState(null);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [picture, setPicture] = useState(null);

  const supabaseClient = createClientComponentClient()

  const getCurrentSession = async () => {
    const res = await supabaseClient.auth.getSession()
    if (res && res.data.session) { 
      return res.data.session
    } 
    clearUser()
    return null
  }

  const getCurrentUser = async () => {
    if (id) return
    
    const res = await supabaseClient.auth.getUser()
    if (res && res.data.user) {

      const theUser = res.data.user

      setUser(theUser)
      setId(theUser.id)
      setEmail(theUser.email)
      setName(theUser.identities[0].identity_data.name)
      setPicture(theUser.identities[0].identity_data.picture)
    }
  }

  useEffect(() => {
    const isUser = async () => {
      const currentSession = await getCurrentSession()
      if (currentSession) await getCurrentUser()
    }
    isUser()
  }, [])

  const signOut = async () => {
    await supabaseClient.auth.signOut()
    clearUser()
    router.push('/')
  }

  const clearUser = () => {
    setUser(null)
    setId(null)
    setEmail(null)
    setName(null)
    setPicture(null)
  }

  const exposed = { user, id, email, name, picture, signOut };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useUser = () => useContext(Context);

export default Provider;
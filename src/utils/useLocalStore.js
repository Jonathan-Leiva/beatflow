import { useEffect, useState } from 'react'
export default function useLocalStore(key, initial){
const [state, set] = useState(()=>{ try{ const raw = localStorage.getItem(key); return raw? JSON.parse(raw): initial } catch{ return initial } })
useEffect(()=>{ try{ localStorage.setItem(key, JSON.stringify(state)) }catch{} }, [key, state])
return [state, set]
}
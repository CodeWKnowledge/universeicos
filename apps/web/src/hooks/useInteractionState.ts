import { useState, useEffect, useCallback } from 'react'

interface InteractionState {
  hasInteracted: boolean
  rememberedEmail?: string
}

const STORAGE_KEY = 'universe_interaction_state'

export function useInteractionState() {
  const [state, setState] = useState<InteractionState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        return JSON.parse(stored) as InteractionState
      }
    } catch (e) {
      console.error('Failed to parse interaction state', e)
    }
    return { hasInteracted: false }
  })

  const markInteraction = useCallback((email?: string) => {
    setState(prev => {
      const newState = {
        hasInteracted: true,
        rememberedEmail: email || prev.rememberedEmail
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
      } catch (e) {
        console.error('Failed to save interaction state', e)
      }
      return newState
    })
  }, [])

  const clearInteraction = useCallback(() => {
    setState({ hasInteracted: false })
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (e) {
      // ignore
    }
  }, [])

  return {
    ...state,
    markInteraction,
    clearInteraction
  }
}

"use client"
import { createContext, useContext, useState, ReactNode, useMemo, useCallback } from "react"
import LoadingSpinner from "../components/LoadingSpinner"

interface LoadingContextType {
    loading: boolean
    showLoading: () => void
    hideLoading: () => void
    shownOnce: boolean
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(false)
    const [shownOnce, setShownOnce] = useState(false)

    const showLoading = useCallback(() => {
        if (!shownOnce) {
            setLoading(true)
            setShownOnce(true)
        }
    }, [shownOnce])

    const hideLoading = useCallback(() => setLoading(false), [])

    const value = useMemo(() => ({
        loading,
        showLoading,
        hideLoading,
        shownOnce
    }), [loading, showLoading, hideLoading, shownOnce])

    return (
        <LoadingContext.Provider value={value}>
            {loading && <LoadingSpinner />}
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => {
    const context = useContext(LoadingContext)
    if (!context) throw new Error("useLoading debe usarse dentro de LoadingProvider")
    return context
}

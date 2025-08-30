"use client"
import { createContext, useContext, useState, ReactNode } from "react"
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

    const showLoading = () => {
        if (!shownOnce) {
            setLoading(true)
            setShownOnce(true) // marca que ya se mostró
        }
    }

    const hideLoading = () => setLoading(false)

    return (
        <LoadingContext.Provider value={{ loading, showLoading, hideLoading, shownOnce }}>
            {loading && <LoadingSpinner />} {/* solo se mostrará si loading es true */}
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => {
    const context = useContext(LoadingContext)
    if (!context) throw new Error("useLoading debe usarse dentro de LoadingProvider")
    return context
}

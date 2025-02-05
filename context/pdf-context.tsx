// src/contexts/pdf-context.tsx
'use client'

import { createContext, useContext, useCallback, useState } from 'react'
import { useQA } from '@/hooks/useQA'
// import { useChroma } from '@/hooks/useChroma'
import { usePDFUpload } from '@/hooks/usePDFUpload'

interface PDFContextType {
    processing: boolean
    progress: number
    currentFile: string | null
    processFile: (file: File) => Promise<void>
    reset: () => void
}

const PDFContext = createContext<PDFContextType | null>(null)

export function PDFProvider({ children }: { children: React.ReactNode }) {
    const [currentFile, setCurrentFile] = useState<string | null>(null)
    const { uploading, progress, handleUpload } = usePDFUpload()
    const { clearQAPairs } = useQA()

    const processFile = useCallback(async (file: File) => {
        setCurrentFile(file.name)
        await handleUpload(file)
    }, [handleUpload])

    const reset = useCallback(() => {
        setCurrentFile(null)
        clearQAPairs()
    }, [clearQAPairs])

    return (
        <PDFContext.Provider
            value={{
                processing: uploading,
                progress,
                currentFile,
                processFile,
                reset
            }}
        >
            {children}
        </PDFContext.Provider>
    )
}

export function usePDF() {
    const context = useContext(PDFContext)
    if (!context) {
        throw new Error('usePDF must be used within a PDFProvider')
    }
    return context
}

// src/app/layout.tsx


// src/app/(dashboard)/page.tsx
import { Suspense } from 'react'
import { UploadForm } from '@/components/pdf/upload-form'
import { QAList } from '@/components/qa/qa-list'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-background">
            <header className="border-b">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">PDF Q&A Generator</h1>
                    <ThemeToggle />
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <div>
                        <UploadForm />
                    </div>

                    <div>
                        <Suspense fallback={<div>Loading Q&A pairs...</div>}>
                            <QAList />
                        </Suspense>
                    </div>
                </div>
            </main>
        </div>
    )
}


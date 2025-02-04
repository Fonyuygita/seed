// src/components/layout/header.tsx
import { ThemeToggle } from '../ui/theme-toggle'
import { Button } from '../ui/button'
import { Github } from 'lucide-react'
import Link from 'next/link'

export function Header() {
    return (
        <header className="border-b bg-background">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <h1 className="text-xl font-bold">PDF Q&A Generator</h1>
                </div>

                <div className="flex items-center space-x-4">
                    <Button variant="outline" size="icon" asChild>
                        <Link
                            href="https://github.com/yourusername/pdf-qa-generator"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="h-4 w-4" />
                        </Link>
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}

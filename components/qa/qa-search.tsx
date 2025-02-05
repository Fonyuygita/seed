// src/components/qa/qa-search.tsx
'use client'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface QASearchProps {
    value: string
    onChange: (value: string) => void
}

export function QASearch({ value, onChange }: QASearchProps) {
    return (
        <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                placeholder="Search questions and answers..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="pl-8"
            />
        </div>
    )
}

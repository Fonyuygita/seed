
// src/components/qa/qa-list.tsx
'use client'

import { useState } from 'react'
// import { QACard } from './qa-card'
// import { QAFilter } from './qa-filter'
// import { QASearch } from './qa-search'
import { Download, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from "@/hooks/use-toast"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from '@/components/ui/card'
import { QASearch } from './qa-search'
import { QAFilter } from './qa-filter'
import { QACard } from '../qa-card'

export interface QAPair {
    id: string
    question: string
    answer: string
    category?: string
    confidence?: number
    timestamp: string
}

interface QAListProps {
    initialQAPairs?: QAPair[]
}

export function QAList({ initialQAPairs = [] }: QAListProps) {
    const [qaPairs, setQAPairs] = useState<QAPair[]>(initialQAPairs)
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<string>('all')
    const { toast } = useToast()

    const filteredQAPairs = qaPairs.filter(pair => {
        const matchesSearch = searchTerm === '' ||
            pair.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pair.answer.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesCategory = selectedCategory === 'all' ||
            pair.category === selectedCategory

        return matchesSearch && matchesCategory
    })

    const handleDownload = () => {
        try {
            const content = filteredQAPairs
                .map(({ question, answer }) =>
                    `Q: ${question}\nA: ${answer}\n\n`
                )
                .join('')

            const blob = new Blob([content], { type: 'text/plain' })
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `qa-pairs-${new Date().toISOString()}.txt`
            a.click()
            URL.revokeObjectURL(url)

            toast({
                title: "Download successful",
                description: "Your Q&A pairs have been downloaded",
            })
        } catch (error) {
            toast({
                title: "Download failed",
                description: "There was an error downloading your Q&A pairs",
                variant: "destructive",
            })
        }
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle>Generated Q&A Pairs</CardTitle>
                        <CardDescription>
                            {filteredQAPairs.length} pairs found
                        </CardDescription>
                    </div>
                    {qaPairs.length > 0 && (
                        <Button
                            onClick={handleDownload}
                            variant="outline"
                            className="ml-auto"
                        >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                        </Button>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <QASearch
                            value={searchTerm}
                            onChange={setSearchTerm}
                        />
                        <QAFilter
                            value={selectedCategory}
                            onChange={setSelectedCategory}
                        />
                    </div>

                    {loading ? (
                        <div className="flex justify-center p-8">
                            <Loader2 className="h-6 w-6 animate-spin" />
                        </div>
                    ) : filteredQAPairs.length === 0 ? (
                        <div className="text-center py-8 text-muted-foreground">
                            No Q&A pairs found
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {filteredQAPairs.map((pair) => (
                                <QACard
                                    key={pair.id}
                                    {...pair}
                                    // @ts-ignore
                                    onDelete={() => {
                                        setQAPairs(qaPairs.filter(p => p.id !== pair.id))
                                        toast({
                                            title: "Q&A pair deleted",
                                            description: "The Q&A pair has been removed",
                                        })
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}


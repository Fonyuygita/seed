// src/components/qa/qa-card.tsx
'use client'

import { useState } from 'react'
import { Copy, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
// import { useToast } from '@/components/ui/use-toast'
import { useToast } from "@/hooks/use-toast"


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface QACardProps {
    id: string
    question: string
    answer: string
    category?: string
    confidence?: number
    timestamp: string
    onDelete?: () => void
}

export function QACard({
    question,
    answer,
    category,
    confidence,
    timestamp,
    onDelete,
}: QACardProps) {
    const [isExpanded, setIsExpanded] = useState(false)
    const { toast } = useToast()

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            toast({
                title: "Copied to clipboard",
                description: "The content has been copied to your clipboard",
            })
        } catch (error) {
            toast({
                title: "Copy failed",
                description: "Failed to copy content to clipboard",
                variant: "destructive",
            })
        }
    }

    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
                <div className="flex items-start justify-between">
                    <div>
                        <CardTitle className="text-lg font-semibold text-primary">
                            Q: {question}
                        </CardTitle>
                        {category && (
                            <CardDescription>
                                Category: {category}
                                {confidence && ` • Confidence: ${(confidence * 100).toFixed(1)}%`}
                            </CardDescription>
                        )}
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleCopy(question)}
                    >
                        <Copy className="h-4 w-4" />
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className={`prose dark:prose-invert max-w-none ${!isExpanded && 'line-clamp-3'}`}>
                    <p className="text-muted-foreground">
                        A: {answer}
                    </p>
                </div>
                {answer.length > 200 && (
                    <Button
                        variant="ghost"
                        className="mt-2"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Show less' : 'Show more'}
                    </Button>
                )}
            </CardContent>
            <CardFooter className="flex justify-between">
                <time className="text-sm text-muted-foreground">
                    {new Date(timestamp).toLocaleString()}
                </time>
                <div className="flex gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleCopy(answer)}
                    >
                        <Copy className="h-4 w-4" />
                    </Button>
                    {onDelete && (
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Trash2 className="h-4 w-4 text-destructive" />
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Delete Q&A Pair</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Are you sure you want to delete this Q&A pair? This action cannot be undone.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={onDelete}>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    )}
                </div>
            </CardFooter>
        </Card>
    )
}
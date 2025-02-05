// src/components/pdf/upload-form.tsx
'use client'

import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
// import { usePDFUpload } from '@/hooks/usePDFUpload'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Upload, File, Loader2 } from 'lucide-react'
import { usePDFUpload } from '@/hooks/usePDFUpload'

export function UploadForm() {
    const { uploading, progress, handleUpload } = usePDFUpload()

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0]
        if (file) {
            await handleUpload(file)
        }
    }, [handleUpload])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf']
        },
        maxSize: 2 * 1024 * 1024, // 2MB
        multiple: false,
        disabled: uploading
    })

    return (
        <Card>
            <CardHeader>
                <CardTitle>Upload PDF</CardTitle>
            </CardHeader>
            <CardContent>
                <div
                    {...getRootProps()}
                    className={`
            border-2 border-dashed rounded-lg p-8 text-center
            ${isDragActive ? 'border-primary' : 'border-muted'}
            ${uploading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          `}
                >
                    <input {...getInputProps()} />
                    <div className="flex flex-col items-center gap-2">
                        {uploading ? (
                            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                        ) : (
                            <Upload className="h-8 w-8 text-muted-foreground" />
                        )}
                        <p className="text-sm text-muted-foreground">
                            {isDragActive
                                ? "Drop the PDF here"
                                : "Drag & drop a PDF here, or click to select"}
                        </p>
                    </div>
                </div>

                {uploading && (
                    <div className="mt-4 space-y-2">
                        <Progress value={progress} />
                        <p className="text-sm text-center text-muted-foreground">
                            Processing PDF...
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
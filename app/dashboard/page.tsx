import { UploadForm } from '@/components/pdf/upload-form'
import { QAContainer } from '@/components/qa/qa-container'


export default function DashboardPage() {
    return (
        <div className="container mx-auto py-8 space-y-8">
            <UploadForm />
            <QAContainer />
        </div>
    )
}
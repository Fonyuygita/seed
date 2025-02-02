import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function QACard({ question, answer }: { question: string; answer: string }) {
    return (
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800">Q: {question}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-gray-600">A: {answer}</CardDescription>
            </CardContent>
        </Card>
    );
}
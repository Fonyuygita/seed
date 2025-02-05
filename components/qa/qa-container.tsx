// src/components/qa/qa-container.tsx
'use client'

import { useQA } from '@/hooks/useQA'
// import { useChroma } from '@/hooks/useChroma'
// import { QAList } from './QaList'
import { SemanticSearch } from '../search/semantic-search'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useChroma } from '@/hooks/useChromaDb'

export function QAContainer() {
    const {
        qaPairs,
        loading: qaLoading,
        addQAPair,
        deleteQAPair,
        clearQAPairs
    } = useQA()
    const {
        results: searchResults,
        loading: searchLoading,
        search
    } = useChroma()

    return (
        <Tabs defaultValue="qa-pairs">
            <TabsList>
                <TabsTrigger value="qa-pairs">Q&A Pairs</TabsTrigger>
                <TabsTrigger value="search">Semantic Search</TabsTrigger>
            </TabsList>

            {/* <TabsContent value="qa-pairs">
                <QAList
                    // @ts-ignore
                    qaPairs={qaPairs}
                    loading={qaLoading}
                    onDelete={deleteQAPair}
                    onClear={clearQAPairs}
                />
            </TabsContent> */}

            <TabsContent value="search">
                <SemanticSearch />
            </TabsContent>
        </Tabs>
    )
}


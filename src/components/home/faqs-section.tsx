'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQsSecrion() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'clock',
            question: 'How do I know the video is worth my time?',
            answer: 'Every video is hand-picked and timestamped so you land right where your problem gets solved. No guesswork.',
        },
        {
            id: 'item-2',
            icon: 'type-outline',
            question: "What if the topic I search isn't there yet?",
            answer: "We're adding more every day. You can also request topics on descord, and we prioritize what real devs like you ask for.",
        },
        {
            id: 'item-3',
            icon: 'search',
            question: "Why not just Google or search YouTube myself?",
            answer: 'You can. But how often do you end up watching 30 minutes to maybe find your solution? We eliminate the “maybe.”',
        },
        {
            id: 'item-4',
            icon: 'sticky-note',
            question: 'Are these official or community-created videos?',
            answer: "Both — we include the best content, whether it's from YouTube creators, indie hackers, or official channels.",
        },
        {
            id: 'item-5',
            icon: 'package',
            question: 'What makes this better than documentation?',
            answer: 'Docs are great — but not always beginner-friendly. Our timestamped video solutions help you understand faster, especially when docs feel overwhelming.',
        },
        {
            id: 'item-6',
            icon: 'library-big',
            question: 'Can I use this as a beginner or is it for advanced devs only?',
            answer: 'Absolutely for beginners too! We\'ve tagged difficulty levels and you\'ll find step-by-step guidance from creators who explain things clearly.',
        },
        {
            id: 'item-7',
            icon: 'circle-dollar-sign',
            question: 'Is this free?',
            answer: 'Yes, 100% free. You\'re not paying with time, confusion, or frustration anymore.',
        },
    ]

    return (
        <section className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

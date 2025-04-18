import { Button } from '@/components/ui/shad-button'
import Image from 'next/image'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

export default function HeroSection() {
    return (
        <>
            <main>
                <div
                    aria-hidden
                    className="z-2 absolute inset-0 isolate hidden opacity-50 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>

                <section className="overflow-hidden bg-white dark:bg-transparent">
                    <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
                        <div className="relative z-10 mx-auto max-w-4xl text-center">
                            <Balancer className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">Stop <span className='dark:text-[#fde047]'>Wasting </span>your Time on the Wrong <span  className='dark:text-[#fde047]'>Youtube</span> Videos. </Balancer>
                            <Balancer className="mx-auto my-8 max-w-3xl sm:text-xl">You deserve real solutions, not endless searches. Our developer docs help you find the best YouTube tutorials, with direct timestamps, for the topic you are stuck on.</Balancer>
                            <Button
                                className='inline-flex items-center justify-center whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 active:scale-95 hover:scale-[1.02] gap-2 text-gray-50 dark:text-gray-900 dark:bg-gray-50 rounded-md transition duration-100 hover:shadow-[4px_4px_0px_0px_rgba(107,114,128)] dark:hover:shadow-[4px_4px_0px_0px_rgba(156,163,175)] font-bold'
                                asChild
                                size="lg">
                                <Link href="/docs">
                                    <span className="btn-label ">Explore Documentation</span>
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="mx-auto -mt-16 max-w-7xl">
                        <div className="perspective-distant -mr-16 pl-16 lg:-mr-56 lg:pl-56">
                            <div className="[transform:rotateX(20deg);]">
                                <div className="lg:h-176 relative skew-x-[.36rad]">
                                    <div
                                        aria-hidden
                                        className="bg-linear-to-b from-background to-background z-1 absolute -inset-16 via-transparent sm:-inset-32"
                                    />
                                    <div
                                        aria-hidden
                                        className="bg-linear-to-r from-background to-background z-1 absolute -inset-16 bg-white/50 via-transparent sm:-inset-32 dark:bg-transparent"
                                    />

                                    <div
                                        aria-hidden
                                        className="absolute -inset-16 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] [--color-border:var(--color-zinc-400)] sm:-inset-32 dark:[--color-border:color-mix(in_oklab,var(--color-white)_20%,transparent)]"
                                    />
                                    <div
                                        aria-hidden
                                        className="from-background z-11 absolute inset-0 bg-gradient-to-l"
                                    />
                                    <div
                                        aria-hidden
                                        className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
                                    />
                                    <div
                                        aria-hidden
                                        className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
                                    />

                                    <Image
                                        className="rounded-(--radius) z-1 relative border dark:hidden"
                                        src="/images/light-hero-image.png"
                                        alt="Tailark hero section"
                                        width={2880}
                                        height={2074}
                                    />
                                    <Image
                                        className="rounded-(--radius) z-1 relative hidden border dark:block"
                                        src="/images/dark-hero-image.png"
                                        alt="Tailark hero section"
                                        width={2880}
                                        height={2074}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

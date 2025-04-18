import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Clock, Search, Zap } from "lucide-react"
import { ReactNode } from "react"
import Balancer from "react-wrap-balancer"

interface FeatureCardProps {
  children: ReactNode
  className?: string
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card className={cn('group relative rounded-none shadow-zinc-950/5', className)}>
      <CardDecorator2 />
      {children}
  </Card>
)

const CardDecorator2 = () => (
  <>
      <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
      <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
      <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
      <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
  </>
)

export default function StorySection() {

  return (
    <FeatureCard className="pt-16 px-4 md:px-6 lg:px-8 mx-4 mt-8 md-mt-0 md:mx-24">
      <div className="max-w-4xl mx-auto">
      <div className="text-center sm:mb-6">
                    <Balancer className="text-balance text-3xl font-semibold lg:text-5xl">Why I Built This</Balancer>
                </div>

        <Card className="border-none shadow-none">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="bg-primary/10 p-3 rounded-full text-primary">
                <Clock className='text-black dark:text-[#fde047]' />
              </span>
              <div>
                <h3 className="text-xl font-semibold mb-2">The Breaking Point</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I remember spending over 45 minutes on a Saturday morning trying to fix a simple bug in my React app.
                  I found a YouTube video that seemed promising — 22 minutes long. I watched it all. The solution?
                  Buried at minute 18. And guess what? It didn&#39;t even apply to my problem.
                </p>
              </div>
            </div>

            <blockquote className="border-l-4 border-primary pl-4 my-10 italic text-muted-foreground ">
              That was the moment I realized something had to change.
            </blockquote>

            <div className="flex items-start gap-4 mb-6">
              <span className="bg-primary/10 p-3 rounded-full text-primary">
                <Search className='text-black dark:text-[#fde047]' />
              </span>
              <div>
                <h3 className="text-xl font-semibold mb-2">The Problem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As developers, we learn best by seeing things work. But too often we waste hours scrubbing through
                  tutorials, switching between docs, Stack Overflow, and random videos — hoping one of them finally
                  clicks. I wanted to stop guessing. I wanted something smarter, something faster.
                </p>
              </div>
            </div>
              <div className="flex items-start gap-4 mb-6">
                <span className="bg-primary/10 p-3 rounded-full text-primary">
                  <Zap className='text-black dark:text-[#fde047]' />
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">The Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    So I built this documentation hub for people like you — indie hackers, full-stack devs, side project
                    warriors. It&#39;s where you search your topic and instantly land on the right YouTube video, at the
                    right timestamp, with a solution that just works. Because your time is too valuable to waste hunting
                    answers.
                  </p>
                </div>
              </div>
          </CardContent>
        </Card>
      </div>
    </FeatureCard>
  )
}

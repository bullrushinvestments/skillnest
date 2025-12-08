import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkillNest',
  description: 'SkillNest is an innovative micro-SaaS platform that combines educational technology and mental health apps to help professionals develop niche skills while managing stress and burnout through personalized, bite-sized learning modules.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">SkillNest</h1>
      <p className="mt-4 text-lg">SkillNest is an innovative micro-SaaS platform that combines educational technology and mental health apps to help professionals develop niche skills while managing stress and burnout through personalized, bite-sized learning modules.</p>
    </main>
  )
}

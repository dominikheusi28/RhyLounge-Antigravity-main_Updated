import { Hero } from '@/components/sections/Hero';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { AngeboteGrid } from '@/components/sections/AngeboteGrid';
import { SocialProof } from '@/components/sections/SocialProof';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function HomePage() {
    return (
        <>
            <Hero />
            <ExperienceSection />
            <AngeboteGrid />
            <SocialProof />
            <FinalCTA />
        </>
    );
}

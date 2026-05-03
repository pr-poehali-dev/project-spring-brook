import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import Introduction from "@/components/Introduction"
import QuestSection from "@/components/quest/QuestSection"
import Resources from "@/components/Resources"

const Index = () => {
  return (
    <>
      <ShaderBackground>
        <Header />
        <HeroContent />
        <PulsingCircle />
      </ShaderBackground>
      <Introduction />
      <QuestSection />
      <Resources />
    </>
  )
}

export default Index
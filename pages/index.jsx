import PageHead from '~app/components/PageHead'
import Navbar from '~app/components/ui/Navbar'

import dynamic from 'next/dynamic'
const DynamicWizard = dynamic(
  () => import('~app/components/Wizard'),
  { ssr: false }
)

export default function HomePage() {
  return (
    <>
      <PageHead
        title='Forms'
        description='Evalua tu Compañía fácil y sencillo en pocos pasos'
      />

      <Navbar />

      <main>
        <DynamicWizard />
      </main>
    </>
  )
}

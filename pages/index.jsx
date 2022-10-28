import React from 'react'
import dynamic from 'next/dynamic'

import PageHead from '~app/components/PageHead'
import Navbar from '~app/components/ui/Navbar'

const DynamicWizard = dynamic(
  () => import('~app/components/Wizard'),
  { ssr: false },
)

const HomePage = () => (
  <>
    <PageHead
      title="Forms"
      description="Evalua tu Compañía fácil y sencillo en pocos pasos"
    />

    <Navbar />

    <main>
      <DynamicWizard />
    </main>
  </>
)

export default HomePage

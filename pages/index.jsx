import Home from '~app/components/Home'
import PageHead from '~app/components/PageHead'
import Navbar from '~app/components/ui/Navbar'

export default function HomePage() {
  return (
    <>
      <PageHead
        title='Graph Data | Home'
        description='Evalua tu Compañía fácil y sencillo en pocos pasos'
      />

      <Navbar />

      <main>
        <Home />
      </main>

      <footer>
        Graph Data footer
      </footer>
    </>
  )
}

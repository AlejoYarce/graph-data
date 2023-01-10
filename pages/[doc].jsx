import React from 'react'
import axios from 'axios'

import PageHead from '~app/components/PageHead'
import Navbar from '~app/components/ui/Navbar'
import Results from '~app/components/Results'
import { calculateResult } from '~app/utils/utils'

const ResultsPage = ({ data }) => {
  const { fields } = data
  const result = calculateResult(JSON.parse(fields.Flags))

  return (
    <>
      <PageHead
        title="Resultados"
        description="Evalua tu Compañía fácil y sencillo en pocos pasos"
      />

      <Navbar />

      <main>
        <Results result={result} />
      </main>
    </>
  )
}

export default ResultsPage

export async function getServerSideProps(ctx) {
  const { query } = ctx

  if (query.doc) {
    const { host } = ctx.req.headers
    const { data } = await axios.get(
      `http://${host}/api/airtable-get?id=${query.doc}`,
      { headers: { 'Content-Type': 'application/json' } },
    )

    if (data?.data) {
      return {
        props: {
          data: data?.data || {},
        },
      }
    }
  }

  const { res } = ctx
  res.writeHead(302, { Location: '/' })
  res.end()

  return {
    props: {},
  }
}

import axios from 'axios'

const dataMapper = (body) => {
  const newBody = {}
  Object.keys(body).forEach(item => {
    const value = body[item]
    newBody[item] = typeof value === 'number' ? value?.toString() : value
  })

  return newBody
}

const handler = async (req, res) => {
  const baseId = process.env.AIRTABLE_BASE_ID

  const url = `https://api.airtable.com/v0/${baseId}/Projects`
  const { data } = await axios.post(
    url,
    { records: [{ fields: dataMapper(req.body) }] },
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    },
  )

  res.status(200).json({ data })
}

export default handler

import axios from 'axios'

const handler = async (req, res) => {
  const { id } = req.query
  const baseId = process.env.AIRTABLE_BASE_ID

  const url = `https://api.airtable.com/v0/${baseId}/Projects?maxRecords=1&filterByFormula=NIT%3D'${id}'`
  const { data } = await axios.get(
    url,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
    }
  )

  res.status(200).json({ data: data.records })
}

export default handler

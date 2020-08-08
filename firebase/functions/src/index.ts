import * as functions from 'firebase-functions'

export const progress = functions.https.onRequest((request, res) => {
  let data = 0
  const req = JSON.parse(request.body)

  req.data.map((o: string | any[]) => {
    if (o && o.length > 0) data = data + 20
  })

  res.sendStatus(200).send(JSON.stringify(data))
})

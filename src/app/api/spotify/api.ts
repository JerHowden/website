const clientID = process.env.SPOTIFY_ID
const clientSecret = process.env.SPOTIFY_SECRET
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(clientID + ':' + clientSecret).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async () => {
  const tokenResponse = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=refresh_token&refresh_token=' + refreshToken,
  })

  return tokenResponse.json()
}

export const getNowPlaying = async () => {
  const token = await getAccessToken()
  console.log('\n\ntoken\n\n', token)

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  })
}

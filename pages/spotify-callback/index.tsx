import React from 'react'
import { useRouter } from 'next/router'
import { useSpotifyContext } from '../../context'

function Callback(): JSX.Element {

    const router = useRouter()
    const { state, code } = router.query
    const spotify = useSpotifyContext()
    spotify.setCallback(state, code)

    return(
        <div>
            awaiting callback...
        </div>
    )
}

export default Callback
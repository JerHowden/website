import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { getNowPlaying } from './api'

async function getServerSideProps() {
  const nowPlaying = await getNowPlaying()
  console.log({ nowPlaying })
  return nowPlaying
}

export async function Spotify() {
  const data = await getServerSideProps()

  return (
    <div
      className="flex flex-row items-center text-gray-400 gap-x-2 group"
      title={
        data?.isPlaying
          ? data?.songURL
            ? "link to what i'm listening to"
            : "what i'm listening to"
          : 'spotify inactive'
      }
    >
      <FontAwesomeIcon
        icon={faSpotify}
        className={`w-7 h-7 ${
          data?.isPlaying
            ? 'text-green-600 dark:text-green-500  animate-pulse md:h-9 md:w-9'
            : 'group-hover:animate-none'
        } ${data?.songURL ? 'group-hover:text-black dark:group-hover:text-white' : ''}`}
      />
      {data?.isPlaying ? (
        <a
          className={`flex flex-col gap-x-2 ${data?.songURL ? '' : ' pointer-events-none'}`}
          href={data?.songURL || ''}
        >
          <div
            className={`text-sm font-medium text-green-700 dark:text-green-400 md:text-base ${
              data?.songURL ? 'dark:group-hover:text-white group-hover:text-black' : ''
            }`}
          >
            {data?.title || ''}
          </div>
          <div
            className={`text-xs text-green-600 dark:font-light dark:text-green-500 ${
              data?.songURL ? 'group-hover:text-black dark:group-hover:text-white' : ''
            }`}
          >
            {data?.artist || ''}
          </div>
        </a>
      ) : (
        <div>Not Playing</div>
      )}
      <span
        className={`hidden text-xl text-black ${
          data?.isPlaying && data?.songURL ? 'group-hover:inline' : ''
        } dark:text-white`}
      >
        ↗
      </span>
    </div>
  )
}

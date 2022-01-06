import simpleWordsList from '../lib/simpleWords.json'
import useReadWords from './ReadWordsHook'

const A = () => {
  const renderReadWords = useReadWords(simpleWordsList)

  return renderReadWords
}

export default A

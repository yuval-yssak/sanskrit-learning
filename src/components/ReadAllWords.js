import allWordsList from '../lib/allWords.json'
import useReadWords from './ReadWordsHook'

const A = () => {
  const renderReadWords = useReadWords(allWordsList)

  return renderReadWords
}

export default A

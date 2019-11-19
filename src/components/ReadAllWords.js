import allWordsList from '../lib/allWords.json'
import useReadWords from './ReadWordsHook'

export default () => {
  const renderReadWords = useReadWords(allWordsList)

  return renderReadWords
}

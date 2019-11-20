import simpleWordsList from '../lib/simpleWords.json'
import useReadWords from './ReadWordsHook'

export default () => {
  const renderReadWords = useReadWords(simpleWordsList)

  return renderReadWords
}

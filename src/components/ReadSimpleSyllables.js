import simpleSyllablesList from '../lib/simpleSyllables.json'
import useReadWords from './ReadWordsHook'

const A = () => {
  const renderReadWords = useReadWords(simpleSyllablesList)

  return renderReadWords
}

export default A

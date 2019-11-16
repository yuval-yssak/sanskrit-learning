import simpleSyllablesList from '../lib/simpleSyllables.json'
import useReadWords from './ReadWordsHook'

export default () => {
  const renderReadWords = useReadWords(simpleSyllablesList)

  return renderReadWords
}

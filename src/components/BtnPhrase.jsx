import getRandomNumber from "../utils/getRandomNumber"
import quotes from '../data/phrases.json'
import photos from '../data/photos.json'

const BtnPhrase = ({setPhraseSelected, setBgSelected}) => {
 
 const changePhrase = ( ) =>{
    const indexRandom = getRandomNumber(quotes.length)
    const phraseRandom = (quotes[indexRandom])
    setPhraseSelected(phraseRandom)
    setBgSelected (photos[getRandomNumber(photos.length)])
 }

    return (
    <button className="mx-auto mt-8 mb-2 block cursor-pointer py-2 px-4 text-white font-semibold rounded-md text-lg hover:brightness-200 transition duration-300 ease-in-out bg-violet-600" onClick={changePhrase}>View other</button>
  )
}


export default BtnPhrase



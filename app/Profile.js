// Styl info
// gender
// localization
// birth date
// phone number
// images
// zainteresowania

import {View, Text, TouchableOpacity, TextInput} from "react-native";
import Wrapper from "../components/Wrapper";
import {useEffect, useState} from "react";

const Hello = () => {
  return (
    <View>
      <Text>
        Witamy w ONLYOU
      </Text>

      <View>
        <View>
          <Text>Pokaż Siebie!</Text>
          <Text>Nie udawaj kogoś kim nie jesteś. Bądź sobą. Wstaw swoje zdjęcia.</Text>
        </View>

        <View>
          <Text>Bądź ostrożny!</Text>
          <Text>Nikomu nie udostępniaj prywatnych danych osobowych, aby nie narażać się na oszustwa i wymuszenia.</Text>
        </View>

        <View>
          <Text>Szanuj wpisy innych!</Text>
          <Text>Każdy ma prawo wyrazić chęć spędzania czasu jak lubi.</Text>
        </View>

        <View>
          <Text>Bądź Fair!</Text>
          <Text>Zgłaszaj nam jeśli widzisz nieodpowiednie zachowanie. Jesteśmy po to by każdy użytkownik czuł się bezpiecznie.</Text>
        </View>

        <View>
          <Text>Poleć Nas!</Text>
          <Text>Jeśli spodoba Ci się nasza aplikacja opowiedz o niej innym! :)</Text>
        </View>
        <TouchableOpacity>Zgadzam się</TouchableOpacity>
      </View>
    </View>
  )
}
const Style = ({setAccept}) => {
  return (
    <View>
      STEP 1
      <Text>Styl spotkania zależy od ubioru</Text>
      <View>
        <Text>Imprezowicz</Text>
        <Text>Doskonała okazja aby zaszaleć! Zostań gwiazdą wieczoru</Text>
      </View>

      <View>
        <Text>Luzak</Text>
        <Text>Tutaj możesz ubrać się tak jak lubisz. Poczuj się swobodnie. Wszystkie chwyty dozwolone.</Text>
      </View>

      <View>
        <Text>Romantyk</Text>
        <Text>Lubisz wprawiać w wrażenie? Podsyć trochę atmosferę, ale zachowaj nutkę słodyczy.</Text>
      </View>

      <View>
        <Text>Sportowiec</Text>
        <Text>Sport to idealny moment do założenia luźnych lub obcisłych rzeczy. Strój nie może ograniczać Twojego zakresu ruchu.</Text>
      </View>

      <View>
        <Text>Podróżnik</Text>
        <Text>Wspólny wyjazd? Najlepszym rozwiąazniem będzie ubrać się na cebulkę. Musisz być przygotowana/y na każdą ewentualność.</Text>
      </View>

      <View>
        <Text>Elegant</Text>
        <Text>Sukienka i marynarka to idealny motyw przewodni Waszego spotkania</Text>
      </View>

      <View>
        <TouchableOpacity onPress={setAccept}>
          <Text>Dalej</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Gender = ({setGender}) => {
  const [gender, setThisGender] = useState("");

  return (
    <View>
      Step 2
      <Text>Jestem</Text>

      <TouchableOpacity onPress={()=> setThisGender("m")}><Text>Kobietą</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=> setThisGender("w")}><Text>Mężczyzną</Text></TouchableOpacity>

      <View>
        <Text>Pamiętaj</Text>
        <Text>Jeśli jesteś kobietą, w opcji "spotkanie we dwoje" będziesz widzieć tylko mężczyzn.</Text>
        <Text>Jeśli jesteś mężczyzną, w opcji "spotkanie we dwoje" będziesz widzieć tylko kobiety.</Text>
        <TouchableOpacity onPress={() => setGender(gender)}>
          <Text>Dalej</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Localization = ({setLocation}) => {

  return (
    <View>
      Step 3
      {/*<Image></Image>*/}
      <Text>
        Udostępnij lokalizację
      </Text>

      <View>
        <Text>Pamiętaj</Text>
        <Text>
          Aby korzystać z aplikacji, muszi zaakceptować jej udostępnianie. Bez tego aplikacja nie będzie poprawnie działać.
        </Text>
        <Text>Więcej informacji jak wykorzystujemy Twoją lokalizację znajdziesz tutaj.</Text>
        <TouchableOpacity onPress={setLocation}>Udostępnij Lokalizację</TouchableOpacity>
      </View>
    </View>
  )
}

const Birthday = ({setBirthday}) => {
  return (
    <View>
      Step 4
      <Text>Kiedy masz urodziny?</Text>
      <View>
        <TextInput/>
        <TextInput/>
        <TextInput/>
      </View>

      <TouchableOpacity onPress={setBirthday}>Dalej</TouchableOpacity>

    </View>
  )
}

const PhoneNumber = ({setPhoneNumber}) => {
  return (
    <View>
      Step 4
      <Text>Twój numer telefonu</Text>
      <View>
        <TextInput/>
        <TextInput/>
        <TextInput/>
      </View>

      <TouchableOpacity onPress={setPhoneNumber}>Dalej</TouchableOpacity>

    </View>
  )
}

const Gallery = () => {

}

const Interests = () => {

}

const Profile = () => {
  const [user, setUser] = useState({
    accept: null,
    gender: null,
    localization: null,
    birthday: null,
    phoneNumber: null,
    gallery: null,
    interests: null,
  });

  const step = () => {
    if(!user.accept) {  return 0; }
    if(!user.gender) {  return 1; }
    if(!user.localization) { return 2; }
    if(!user.birthday) { return 3; }
    if(!user.phoneNumber) { return 4; }
    if(!user.gallery) { return 5; }
    if(!user.interests) { return 6; }
  }

  return (
    <Wrapper>

      {step() === 0 && <Style setAccept={()=> setUser(prevState => {
        return {...prevState, accept: true}
      })}/>}
      {step() === 1 && <Gender setGender={(gender)=> setUser(prevState => {
        return {...prevState, gender: gender}
      })}/>}
      {step() === 2 && <Localization setLocation={()=> setUser(prevState => {
        return {...prevState, localization: true}
      })}/>}
      {step() === 3 && <Birthday setBirthday={()=> setUser(prevState => {
        return {...prevState, birthday: true}
      })}/>}
      {step() === 4 && <PhoneNumber setPhoneNumber={()=> setUser(prevState => {
        return {...prevState, phoneNumber: true}
      })}/>}
      {step() === 5 && <Gallery/>}
      {step() === 6 && <Interests/>}
    </Wrapper>
  )
}

export default Profile
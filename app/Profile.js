import {View, Text, TouchableOpacity, TextInput, StyleSheet} from "react-native";
import Wrapper from "../components/Wrapper";
import {useEffect, useState} from "react";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#D0D2D8',
    padding: 25,
    borderRadius: 25,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#7F7F7F',
    padding: 10,
    paddingHorizontal: 35,
    borderRadius: 15,
    fontSize: 20,
    fontFamily: 'CalibriRegular'
  },
  selectedButton: {
    backgroundColor: '#b29d9d',
  },
  buttonText: {
    color: '#FFC400',
    textTransform: 'uppercase'
  },
  headingText: {
    fontFamily: 'Caveat',
    fontSize: 28,
    textAlign: 'center'
  },
  subHeading: {
    fontFamily: 'Caveat',
    fontSize: 22,
    marginBottom: 5,
    marginTop: 20,
  },
  genderView: {
    alignItems: 'center',
    height: '50%',
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  inputsWrapper: {
    flexDirection: 'row',
    marginTop: 50,
  },
  input: {
    backgroundColor: '#7F7F7F',
    padding: 10,
    paddingHorizontal: 35,
    borderRadius: 15,
    fontSize: 20,
    fontFamily: 'CalibriRegular'
  }
})

const Hello = ({setAcceptance}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>
        Witamy w ONLYOU
      </Text>

      <View>
        <View>
          <Text style={styles.subHeading}>Pokaż Siebie!</Text>
          <Text>Nie udawaj kogoś kim nie jesteś. Bądź sobą. Wstaw swoje zdjęcia.</Text>
        </View>

        <View>
          <Text style={styles.subHeading}>Bądź ostrożny!</Text>
          <Text>Nikomu nie udostępniaj prywatnych danych osobowych, aby nie narażać się na oszustwa i wymuszenia.</Text>
        </View>

        <View>
          <Text style={styles.subHeading}>Szanuj wpisy innych!</Text>
          <Text>Każdy ma prawo wyrazić chęć spędzania czasu jak lubi.</Text>
        </View>

        <View>
          <Text style={styles.subHeading}>Bądź Fair!</Text>
          <Text>Zgłaszaj nam jeśli widzisz nieodpowiednie zachowanie. Jesteśmy po to by każdy użytkownik czuł się bezpiecznie.</Text>
        </View>

        <View>
          <Text style={styles.subHeading}>Poleć Nas!</Text>
          <Text>Jeśli spodoba Ci się nasza aplikacja opowiedz o niej innym! :)</Text>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={setAcceptance}>
            <Text style={styles.buttonText}>Zgadzam się</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const Style = ({setAccept}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Styl spotkania zależy od ubioru</Text>
      <View>
        <Text style={styles.subHeading}>Imprezowicz</Text>
        <Text>Doskonała okazja aby zaszaleć! Zostań gwiazdą wieczoru</Text>
      </View>

      <View>
        <Text style={styles.subHeading}>Luzak</Text>
        <Text>Tutaj możesz ubrać się tak jak lubisz. Poczuj się swobodnie. Wszystkie chwyty dozwolone.</Text>
      </View>

      <View>
        <Text style={styles.subHeading}>Romantyk</Text>
        <Text>Lubisz wprawiać w wrażenie? Podsyć trochę atmosferę, ale zachowaj nutkę słodyczy.</Text>
      </View>

      <View>
        <Text style={styles.subHeading}>Sportowiec</Text>
        <Text>Sport to idealny moment do założenia luźnych lub obcisłych rzeczy. Strój nie może ograniczać Twojego zakresu ruchu.</Text>
      </View>

      <View>
        <Text style={styles.subHeading}>Podróżnik</Text>
        <Text>Wspólny wyjazd? Najlepszym rozwiąazniem będzie ubrać się na cebulkę. Musisz być przygotowana/y na każdą ewentualność.</Text>
      </View>

      <View>
        <Text style={styles.subHeading}>Elegant</Text>
        <Text>Sukienka i marynarka to idealny motyw przewodni Waszego spotkania</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={setAccept}>
          <Text style={styles.buttonText}>Dalej</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Gender = ({setGender}) => {
  const [gender, setThisGender] = useState("");

  return (
    <View>

      <View style={styles.genderView}>
        <Text style={styles.headingText}>Jestem</Text>
        <TouchableOpacity style={[styles.button, gender === "m" ? styles.selectedButton : '' ]} onPress={()=> setThisGender("m")}><Text>Kobietą</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button, gender === "w" ? styles.selectedButton : '' ]} onPress={()=> setThisGender("w")}><Text>Mężczyzną</Text></TouchableOpacity>
      </View>


      <View style={styles.wrapper}>
        <Text style={styles.headingText}>Pamiętaj</Text>
        <Text>Jeśli jesteś kobietą, w opcji "spotkanie we dwoje" będziesz widzieć tylko mężczyzn.</Text>
        <Text>Jeśli jesteś mężczyzną, w opcji "spotkanie we dwoje" będziesz widzieć tylko kobiety.</Text>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={() => setGender(gender)} disabled={gender == ""}>
            <Text>Dalej</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const Localization = ({setLocation}) => {

  return (
    <View>
      {/*<Image></Image>*/}
      <Text style={styles.headingText}>
        Udostępnij lokalizację
      </Text>

      <View style={styles.wrapper}>
        <Text style={styles.headingText}>Pamiętaj</Text>
        <Text>
          Aby korzystać z aplikacji, muszi zaakceptować jej udostępnianie. Bez tego aplikacja nie będzie poprawnie działać.
        </Text>
        <Text>Więcej informacji jak wykorzystujemy Twoją lokalizację znajdziesz tutaj.</Text>
       <View style={styles.buttonWrapper}>
         <TouchableOpacity onPress={setLocation} style={styles.button}>
           <Text style={styles.buttonText}>Udostępnij Lokalizację</Text>
         </TouchableOpacity>
       </View>
      </View>
    </View>
  )
}

const Birthday = ({setBirthday}) => {
  return (
    <View>
      <Text style={styles.headingText}>Kiedy masz urodziny?</Text>
      <View style={styles.inputsWrapper}>
        <TextInput keyboardType="numeric" style={styles.input} placeholder="Dzień"/>
        <TextInput keyboardType="numeric" style={styles.input} placeholder="Miesiąc"/>
        <TextInput keyboardType="numeric" style={styles.input} placeholder="Rok"/>
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={setBirthday}>
          <Text style={styles.buttonText}>Dalej</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const PhoneNumber = ({setPhoneNumber}) => {
  return (
    <View>
      <Text>Twój numer telefonu</Text>
      <View>
        <TextInput/>
        <TextInput/>
        <TextInput/>
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={setPhoneNumber}>
          <Text style={styles.buttonText}>Dalej</Text>
        </TouchableOpacity>
      </View>


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
    style: null,
    gender: null,
    localization: null,
    birthday: null,
    phoneNumber: null,
    gallery: null,
    interests: null,
  });

  const step = () => {
    if(!user.accept) {  return 0; }
    if(!user.style) {  return 1; }
    if(!user.gender) {  return 2; }
    if(!user.localization) { return 3; }
    if(!user.birthday) { return 4; }
    if(!user.phoneNumber) { return 5; }
    if(!user.gallery) { return 6; }
    if(!user.interests) { return 7; }
  }

  return (
    <Wrapper>

      {step() === 0 && <Hello setAcceptance={()=> setUser(prevState => {
        return {...prevState, accept: true}
      })}/>}
      {step() === 1 && <Style setAccept={()=> setUser(prevState => {
        return {...prevState, style: true}
      })}/>}
      {step() === 2 && <Gender setGender={(gender)=> setUser(prevState => {
        return {...prevState, gender: gender}
      })}/>}
      {step() === 3 && <Localization setLocation={()=> setUser(prevState => {
        return {...prevState, localization: true}
      })}/>}
      {step() === 4 && <Birthday setBirthday={()=> setUser(prevState => {
        return {...prevState, birthday: true}
      })}/>}
      {step() === 5 && <PhoneNumber setPhoneNumber={()=> setUser(prevState => {
        return {...prevState, phoneNumber: true}
      })}/>}
      {step() === 6 && <Gallery/>}
      {step() === 7 && <Interests/>}
    </Wrapper>
  )
}

export default Profile
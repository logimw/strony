import React, { useState } from "react"
import Input from "./Input"
import FormMsg from "./FormMsg"

const checkTypeBool = setFile => {
  // Sprawdza, czy uploadowany plik użytkownika ma dobre rozszerzenie
  // TODO: walidować po typie pliku, a nie nazwie
  return (
    setFile.includes(".pdf") ||
    setFile.includes(".png") ||
    setFile.includes(".jpg") ||
    setFile.includes(".jpeg")
  )
}

const validate = formData => {
  if (!formData.author) {
    return "Proszę podać imię oraz nazwisko!"
  } else if (!/[A-Za-z-]{2,}/g.test(formData.author)) {
    return "Podaj dane w formacie <Imię Nazwisko>."
  }

  if (!formData.name) {
    return "Proszę podać nazwę inspiracji."
  } else if (formData.name.length < 2) {
    return "Nazwa jest za krótka."
  }

  if (!formData.description) {
    return "Proszę podać opis."
  } else if (formData.description.length < 10) {
    return "Opis jest za krótki."
  } else if (formData.description.length > 1000) {
    return "Opis jest za długi. Maksymalna długość opisu to 1000 znaków."
  }

  // if (formData.photo === "dupa") {
  //   return "Zdjęcie inspiracji jest wymagane."
  // } else if (!checkTypeBool(formData.photo)) {
  //   console.log(formData.photo)
  //   console.log("Błędny format pliku.")
  //   return "Błędny format pliku. Obsługiwane typy .jpg, .jpeg .png lub .pdf."
  // }

  if (!formData.agree) {
    return "Zgoda jest wymagana."
  }

  return null
}

const Form = () => {
  const initialState = {
    name: "",
    author: "",
    description: "",
    photo: null,
    agree: false,
  }
  const [error, setError] = useState(null)
  const [msg, setMsg] = useState(null)
  const [form, setForm] = useState(initialState)
  const [btn, setBtn] = useState({
    disabled: false
  })
  const [file, setFile] = useState(null);

  const handleFile = e => {
    return setFile(e.target.files[0])
  }

  const handleChange = e => {

    setForm({
      ...form,
      [e.target.name]: e.target.value.trim(),
    })}

  const handleSubmit = async e => {
    const errorMsg = validate(form)
    form.append("file", setFile)
    e.preventDefault()
    if (errorMsg) {
      setError(errorMsg)
      console.log("Błąd " + errorMsg)
      return
    }

    try {
      setError(null)
      setMsg("Dziękujemy za wysłanie inspiracji.")
      console.log(form)
      // setBtn({disabled: true})
      // btn.classList.add("opacity-50")
    } catch {}
    // console.log("form poszedł wysłany", form)
  }

  return (
    <form method="POST" id="add_inspiration_form" className="w-full max-w-sm" onSubmit={handleSubmit} noValidate>
      {error && <FormMsg text={error} role="error" />}
      {msg && <FormMsg text={msg} role="success" />}
      <Input
        name="name"
        label="Nazwa inspiracji"
        placeholder="Podaj nazwę inspiracji"
        // value={form.name}
        onChange={handleChange}
      />
      <Input
        name="author"
        label="Autor"
        placeholder="Imię i Nazwisko"
        // value={form.author}
        onChange={handleChange}
      />
      <Input
        name="description"
        label="Krótki opis"
        placeholder="Jakie produkty użyto do stylizacji?"
        tag="textarea"
        // value={form.description}
        onChange={handleChange}
      />
      <Input
        name="photo"
        label="Zdjęcie inspiracji"
        type="file"
        value={file}
        onChange={handleFile}
      />

      <div className="form__group my-4">
        <label className="form__label text-xs form__agree" htmlFor="agree">
          <input
            type="checkbox"
            name="agree"
            id="agree"
            required
            // value={form.agree}
            onChange={handleChange}
          />
          <p>
            Oświadczam, iż zapoznałem się i akceptuję treść Regulaminu.
            Zapoznałam/em się z warunkami udzielenia nieodpłatnej licencji
            Sprzedawcy, w ramach zamieszczonych przeze mnie zdjęć.
          </p>
        </label>
      </div>

      <button className="form__btn" type="submit" {...btn}>
        Dodaj inspirację
      </button>
    </form>
  )
}

export default Form

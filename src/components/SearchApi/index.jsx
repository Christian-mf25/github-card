import { yupResolver } from "@hookform/resolvers/yup"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import "./style.css"

import Repo from "../Repo"

const SearchApi = () => {

  const [input, setInput] = useState([])
  const [searchInput, setSearchInput] = useState([])
  const [noneRepo, setNoneRepo] = useState(false)

  const formSchema = yup.object().shape({
    repoSearch: yup.string()
      .required("Digite um repositório para a pesquisa"),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema)
  })

  const handleClick = (dataInput) => {
    setInput(dataInput.repoSearch)
    setNoneRepo(!noneRepo)
  }

  useEffect(() => {
    fetch(`https://api.github.com/repos/${input}`)
      .then((response) => response.json())
      .then((response) => setSearchInput(response))
      .catch((err) => console.log(err))
  }, [input])

  return (

    <section>

      <form
        className="search-repo"
        onSubmit={handleSubmit(handleClick)} >

        <input
          className="repo-name"
          placeholder="Nome do repositório"
          {...register("repoSearch")} />
        <p className="error-message">
          {errors.repoSearch?.message}
        </p>

        <button
          className="button-search"
          type="submit" >
          Pesquisar
        </button>

      </form>

      <Repo
        searchInput={searchInput}
        noneRepo={noneRepo} />
    </section>
  )
}

export default SearchApi
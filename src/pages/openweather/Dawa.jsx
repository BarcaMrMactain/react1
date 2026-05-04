import {useEffect, useState} from 'react'
import Loader from '../../components/Loader'
import Error from '../../components/Error'

// hook til kald api
import useRequestData from '../../hooks/useRequestData'

const Dawa = ({setZip}) => {

    const [search, setSearch] = useState("") //Søgning på zip/postnumre
    const [formIsValid, setFormIsValid] = useState( false ) // er false hvis postnummer-input ikke er validt/ligner et postnummer
    const {makeRequest, isLoading, data, error} = useRequestData()

    useEffect( () => {
        if (formIsValid === true){
            console.log("Der er fundet et postnummer: ", search)
            //kald vejrdata og hent vejret for det postnummer der fundet
            setZip(search) //send resultatet af postnummersøgning til parent via setZip (fra parent)
        } else {
            console.log("led vidre")

            makeRequest({
                url: "https://api.dataforsyningen.dk/postnumre/autocomplete",
                method: "GET",
                params: {
                    q: search
                }
            })
        }
    }, [search])

  return (
    <section className='p-4 border rounded-xl bg-black/30'>
        
        { isLoading && <Loader/> }
        { error && <Error/> }

        <form className='' onSubmit={e => e.preventDefault() }>

            <label>

            <input className='w-full px-4 py-2 border border-white rounded-lg bg-transparent text-white'
            autoComplete="off"
            list="postnummerliste"
            type="text"
            required 
            pattern="^[1-9]\d{3}$"
            value={search}
            onInput={ e => { setSearch( e.target.value); setFormIsValid( e.target.checkValidity())}}/>

            </label>            

            <datalist id="postnummerliste">
                {data && data.map( p => <option value={p.postnummer.nr}>{p.tekst}</option>)}
            </datalist>

        </form>

    </section>
  )
}

export default Dawa
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const url="https://restcountries.eu/rest/v2/all";

const Countries = () => {
    const [Countries, setCountries] = useState([]) ;

     
       const fetchCountriesData = async () =>{
          const response= await fetch(url)
          const Countries = await response.json()
          setCountries(Countries)
          console.log(Countries)
        }
     useEffect(() => {
      fetchCountriesData();
     }, [])

  return (
    <>
   <section class="grid">
 {Countries.map((Countries) => {
     const { numericCode, name, alpha2Code, flag} = Countries;

     return(
       <article key={numericCode}> 
       <div>
         <img src={flag} alt={name}/>
         <h3>Name: <span>{name}</span></h3>
         <h4>Alpha2Code:<span>{alpha2Code}</span></h4>
         <Link to ={'/Countries/${name}'} >Explore</Link>
       </div>
       
       </article>
     )
   })}

    )
   </section>

   </> 
  )
}

export default Countries;

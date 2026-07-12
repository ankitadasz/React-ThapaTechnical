import CountryFacts from "../Api/CountrData.json"
export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>
      <div className="gradient-cards">

        {
            CountryFacts.map((country)=>{
                const {id,countryName,capital,population,interestingFact}=country;
                return  (
                <div className="card" data-code={country["data-code"]} key={id}>
          <div className="container bg-blue-box">
            <h3 className="card-title">{countryName}</h3>
         
            <p>
              <span className="card-description">Capital:</span>
              {capital}
            </p>
            <p>
              <span className="card-description">Population:</span>
             {Number(population).toLocaleString()}
            </p>
            <p>
              <span className="card-description">Interesting Fact:</span>
              {interestingFact}
            </p>
          </div>
        </div>
        )

                

            })
        }
       
      </div>
    </section>
  );
};

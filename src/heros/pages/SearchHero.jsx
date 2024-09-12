import { useLocation, useNavigate } from "react-router-dom";

import { useForm } from "../../hook/useForm";
import { HeroCard } from "../components";
import queryString from "query-string";
import { getHerosByName } from "../helpers";

export const SearchHero = () => {

  const navigate = useNavigate();

  // Doing visible navigate(`?q=${ searchText }`). Getting the actual ubication
  const location = useLocation();

  // Installation 'query-string' to can draw search property
  const { q = '' } = queryString.parse( location.search );

  const heros = getHerosByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heros.length === 0;

  const { searchText, onInputChange }  = useForm({
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    // if( searchText.trim().length <= 1 ) return; 

    // Naving toward setted parameters
    navigate(`?q=${ searchText }`)
  }
  return (
    <>
      <h1>Search</h1>
      <hr />

      {/* {
        (q === '') 
        ? <div className="alert alert-primary">
          Search Hero
          </div>
          : ( heros.length === 0 ) && <div className="alert alert-danger">
          There ar en't results such <b>{ q }</b> specified
          </div>
      } */}

      

      <div className="row">
          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={ onSearchSubmit }>
                <input 
                type="text" 
                placeholder="Search Hero" 
                className="form-control" 
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
                />

                <button className="btn btn-outline-primary mt-1">
                  Search
                </button>
            </form>
        </div>

        <div className="col-7">
            <h4>Results</h4>
            <hr />

            <div style={{ display: showSearch ? '' : 'none'}}  className="alert alert-primary animate__animated animate__fadeIn">
            Search Hero 
            </div>

            <div style={{ display: showError ? '' : 'none' }}  className="alert alert-danger animate__animated animate__fadeIn">
                There ar en't results such <b>{ q }</b> specified
            </div>


            {
              heros.map(hero => (
                <HeroCard key={ hero.id } { ...hero }/>
              ))
            }
        </div>
      </div>
    </>
  )
}


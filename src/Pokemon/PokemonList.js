import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard';



class PokemonList extends Component {
    state = { 
        url: "https://pokeapi.co/api/v2/pokemon/?limit=5",
        pokemon: null,
    }

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ pokemon : res.data['results'] });
    }

    render() {

        const ButtonUp = (number) => {
            
            var pokeNum = 1;


            pokeNum = pokeNum + number;
            pokeNum++;
            console.log(pokeNum);
            
        };


        return (
            <React.Fragment>
                {this.state.pokemon ? (
                    <div>
                        {this.state.pokemon.map(pokemon => (
                            <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url}/>
                        ))}
                    </div>
                ) : (
                    <h1>Loading Pokemon</h1>
                )}

                <button type='button' onClick={() => ButtonUp(1)}>Up</button>
            </React.Fragment>
          
            
        );
    }
}

export default PokemonList;
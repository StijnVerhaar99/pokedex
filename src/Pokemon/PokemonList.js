import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard';



class PokemonList extends Component {
    state = { 
        url: "https://pokeapi.co/api/v2/pokemon/?limit=3",
        pokemon: null,
        pokeNum: 1,
    }

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ pokemon : res.data['results'] });
    }

    numberUp = () => {
        this.setState({ pokeNum : this.state.pokeNum + 1});
        console.log(this.state.pokeNum);
    }

    numberDown = () => {
        this.setState({ pokeNum : this.state.pokeNum - 1});
        console.log(this.state.pokeNum);
    }
 
    render() {

        const isEnabledUp = this.state.pokeNum < 1;
        const isEnabledDown = this.state.pokeNum > 5;

        return (
            <React.Fragment>

                <button id='up' onClick={this.numberUp} disabled={isEnabledDown}>Up</button>   
                <button id='down' onClick={this.numberDown} disabled={isEnabledUp}>Down</button>  

                {this.state.pokemon ? (
                    <div>
                        {this.state.pokemon.map(pokemon => (
                            <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} num={this.state.pokeNum}/>
                        ))}
                    </div>
                ) : (
                    <h1>Loading Pokemon</h1>
                )}


                    
            </React.Fragment>
          
            
        );
    }
}

export default PokemonList;
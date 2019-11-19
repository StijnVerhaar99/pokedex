import React, { Component } from 'react';

class PokemonCard extends Component {
    state = {
        name : ' ',
        imageUrl : ' ',
        pokemonIndex : ' '
    };

    componentDidMount() {
        const name = this.props.name;
        const url = this.props.url;
        const pokemonIndex = url.split('/')[url.split('/').length - 2 ];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

        this.setState ({
            name,
            imageUrl,
            pokemonIndex
        });
    }
    
    render() {
        return ( 
            <div>
                <h1>{this.state.name}</h1>
                <p>{this.state.pokemonIndex}</p>
                <img src={this.state.imageUrl} alt=''/>
                <p>test</p>
            </div>
        );
    }
}

export default PokemonCard;
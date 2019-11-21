import React, { Component } from 'react';

const selectedStyle = { 
    color: 'red',
}

class PokemonCard extends Component {
    state = {
        name : ' ',
        imageUrl : ' ',
        pokemonIndex : ' ',
        num : ''
    };

    componentDidMount() {
        const name = this.props.name;
        const url = this.props.url;
        const num = this.props.num;
        const pokemonIndex = url.split('/')[url.split('/').length - 2 ];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

        this.setState ({
            name,
            imageUrl,
            pokemonIndex,
            num
        });
    }
    
    render() {

        const sameNum = this.state.pokemonIndex === this.state.num;
        console.log(this.state.pokemonIndex);
        console.log(this.state.num);

        let message;

        if (sameNum) {
            message = (
                <th style={selectedStyle}>
                    {this.state.name}
                </th>
            ) } else {
                message = (
                    <th>
                        {this.state.name}
                    </th>
                )
            
        }
        
        
        return ( 
            <div>
                {/* <div className='PokemonList'>
                    <div>
                        <h1 className={this.state.pokemonIndex} style={selectedStyle}>{this.state.name}</h1>
                    </div>
                    <p>{this.state.pokemonIndex}</p>
                    <img src={this.state.imageUrl} alt=''/>
                </div>   */}
            
            <table>
                <tr id={this.state.pokemonIndex}>
                    
                    <th>
                        {message}
                    </th>
                </tr>
            </table>
            
            </div>


        );
    }
}

export default PokemonCard;
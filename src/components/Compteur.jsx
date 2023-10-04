import React, { Component } from 'react'
import Valeur from './Valeur'

export default class Compteur extends Component {
    state = {
        compteur: 0,
        pasI:1,
        pasD:1
    }

    incrementer = () => {
        this.setState({ compteur: this.state.compteur + this.state.pasI })
    }
    decrementer = () => {
        this.setState({ compteur: this.state.compteur - this.state.pasD })

    }
    initialiser = () => {
        this.setState({ compteur: 0 })

    }
    render() {
        return (
            <div>

                <Valeur val={this.state.compteur} />
                <div>
                    <button type="button" onClick={this.incrementer}>Incrementer</button>
                    <button type="button" onClick={this.decrementer}>Decrementer</button>
                    <button type="button" onClick={this.initialiser} disabled={this.state.compteur == 0}>Initialiser</button>
                </div>

                <fieldset>
                    <legend>Pas d'incrémentation</legend>
                    <button type="button" onClick={() => this.setState({pasI: 1})}>1</button>
                    <button type="button" onClick={() => this.setState({pasI: 2})}>2</button>
                    <button type="button" onClick={() => this.setState({pasI: 3})}>3</button>
                    <button type="button" onClick={() => this.setState({pasI: 4})}>4</button>
                </fieldset>

                <fieldset>
                    <legend>Pas de decrémentation</legend>
                    <button type="button" onClick={() => this.setState({pasD: 1})}>1</button>
                    <button type="button" onClick={() => this.setState({pasD: 2})}>2</button>
                    <button type="button" onClick={() => this.setState({pasD: 3})}>3</button>
                    <button type="button" onClick={() => this.setState({pasD: 4})}>4</button>
                </fieldset>
            </div>
        )
    }
}

import React, {Component} from 'react';

class Lockin extends Component {

    handleLockin = () => {
        const {champion} = this.props;      
        this.props.lockinFn(champion)
        this.props.refreshFn();
    }
    render(){
        return (
            <div >
                <img src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${this.props.champion.key}.png`} onClick ={this.handleLockin} alt={this.props.champion.name} />                
            </div>
        )
    }
}
export default Lockin
import React from "React";
class SearchBar extends React.Component{
    handleChange=(e)=>{
        this.setState({
            term:e.target.value
        });
    };
    handleSubmit=(e)=>{
        e.preventDafault;
        this.props.handleFormSubmit=(this.state.term);
    };
    render(){
        return(
            <>
            <h2>Youtube</h2>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Buscar videos</label>
                        <input onChange={this.handleChange} name="video-search" type="text" placeholder="Buscar"></input>
                    </div>
                </form>
            </div>
            </>
        )
    };
}
export default SearchBar;
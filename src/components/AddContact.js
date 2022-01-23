import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        phone: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.phone === ""){
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", phone: "" });
    };
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placegolder="Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Phone number</label>
                        <input
                            type="number"
                            name="phone"
                            placegolder="Phone"
                            value={this.state.phone}
                            onChange={(e) => this.setState({ phone: e.target.value })} />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}
export default AddContact;
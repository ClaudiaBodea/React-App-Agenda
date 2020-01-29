import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
class Activitate extends Component {
  render() {
    return (
      <>
        <h4>
          {this.props.ora} - {this.props.titlu}
        </h4>
        <h6>
          Loc: {this.props.loc}
          <MDBBtn
            color="indigo"
            className="float-right"
            id={this.props.id}
            onClick={this.props.stergeActivitate}
          >
            Șterge
          </MDBBtn>
        </h6>
        <p>Descriere: {this.props.descriere}</p>
        <hr />
      </>
    );
  }
}

export default Activitate;

//state = {  } II scoatem state, nu avem state. Probabil pt ca State avem doar in APP???

// mai departe, in return, trebuie pus codul nostru care descrie componenta

// pt ca prin this. props ea primeste niste proprietati, cand vrem sa o testam, in index.js, nu trebuie sa schimbam doar
// din App in Activitate
// ci si atributele pe care vrem sa ni le afiseze. Adica Ora, Loc, Descriere

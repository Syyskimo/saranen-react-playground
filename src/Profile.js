import React from 'react';

class Profile extends React.Component {

  render() {

    return (
        <div className="profile row">
        <form id="personform">
            <div className="section">
                <div className="radio icons">
                    <label><input required type="radio" name="gender" value="maiden" /> <i className="fa-solid fa-venus"></i> Neito</label>
                    <label><input type="radio" name="gender" value="goblin" /> <i className="fa-solid fa-mars"></i> Menninkäinen</label>
                </div>
                <div className="input">
                    <label for="weight">Paino</label>
                    <input type="number" required placeholder="Anna painosi kilogrammoissa" min="40" max="400" step="0.5" id="weight" name="weight" />
                </div>
            </div>
            <div className="section">
                <div className="input buttons">
                    <button>Tallenna</button>
                </div>

            </div>
        </form>
    </div>        

    );
  }
}

export default Profile;

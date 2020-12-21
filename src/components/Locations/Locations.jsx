import React, { Component } from 'react';
import styles from './locations.module.css';

class Locations extends Component {
  state = {
    isLoading: true,
    locations: []
  };

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/location')
      .then(data => data.json())
      .then(response => {
        this.setState(currentState => ({
          ...currentState,
          locations: response.results,
          isLoading: false
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading data...</div>
    }

    return (
      <div className={styles.locationsContainer}>
        <table className={styles.locationsTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Dimension</th>
            </tr>
          </thead>
          <tbody>
            {this.state.locations.map(location => {
              return (
                <tr key={location.id}>
                  <td>{location.name}</td>
                  <td>{location.type}</td>
                  <td>{location.dimension}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Locations;
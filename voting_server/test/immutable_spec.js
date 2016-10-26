import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {
  describe('A List', () => {

    function addMovie(currentState, movie) {
      // return currentState.set('movies', currentState.get('movies').push(movie)
      // );
      // using update provides a bit more concise code than the code above
      return currentState.update('movies', movies => movies.push(movie));
    }

    it('is immutable', () => {
      let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      let nextState = addMovie(state, 'Sunshine');
// using Map also helps to preserve the state tree with nested data structures   and provide immutability for your data
      expect(nextState).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later',
          'Sunshine'
        )
      }));
      expect(state).to.equal(Map({
        movies: List.of(
        'Trainspotting',
        '28 Days Later'
        )
      }));
    });
  });
});

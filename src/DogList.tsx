import React, { SFC } from 'react';
import { Dog } from './store/dogs';

interface Props {
  dogs: Dog[];
  addDog: (dog: Dog) => void;
  removeDog: (dog: Dog) => void;
}

const DogList: SFC<Props> = ({ dogs, addDog, removeDog }) => {
  const dogBreedRef = React.createRef<HTMLInputElement>();
  return (
    <div>
      <input ref={dogBreedRef} type="text" />
      <button onClick={() => addDog(dogBreedRef.current!.value)}>
        Add dog
      </button>
      <ul>
        {dogs.map(dog => (
          <li key={`DOG_${dog}`}>
            {dog} <button onClick={() => removeDog(dog)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;

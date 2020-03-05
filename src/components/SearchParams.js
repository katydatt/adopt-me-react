import React, { useState, useEffect } from 'react'
import useDropdown from './useDropdown'
import Results from './Results'
import pet, { ANIMALS } from '@frontendmasters/pet'

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA')
    const [breeds, setBreeds] = useState([])
    const [animal, AnimalDropdow] = useDropdown('Animal', 'dog', ANIMALS)
    const [breed, BreedDropdow, setBreed] = useDropdown('Breed', '', breeds)
    const [pets, setPets] = useState([])

    async function requestPets() {
        const { animals } = await pet.animals({
            location,
            breed,
            type: animal
        })

        setPets(animals || [])
    }

    useEffect(() => {
        setBreeds([])
        setBreed('')
        pet.breeds(animal).then(({ breeds }) => {
            const breedStrings = breeds.map(({ name }) => name)
            setBreeds(breedStrings)
        }, console.error)
    }, [animal, setBreed, setBreeds])
    // useEffect gets called every time something gets rerender, unless u specify
    // as second parameter an array of things it needs to listen before to rerender
    // const [animal, setAnimal] = useState('dog')
    // const [breed, setBreed] = useState('')
    return (
        <div className="search-params">
            <form
                onSubmit={e => {
                    e.preventDefault()
                    requestPets()
                }}
            >
                <label html-for="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Location"
                        onChange={e => setLocation(e.target.value)}
                    />
                </label>
                <AnimalDropdow />
                <BreedDropdow />
                {/* <label html-for="animal">
                    animal
                    <select
                        id="animal"
                        value={animal}
                        onBlur={e => setAnimal(e.target.value)}
                        onChange={e => setAnimal(e.target.value)}
                    >
                        <option>All</option>
                        {ANIMALS.map((animal, index) => (
                            <option key={index} value={animal}>
                                {animal}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        disabled={!breeds.length}
                        onBlur={e => setBreed(e.target.value)}
                        onChange={e => setBreed(e.target.value)}
                    >
                        <option>All</option>
                        {breeds.map((breedString, index) => {
                            return (
                                <option
                                    key={`breed-${index}`}
                                    value={breedString}
                                ></option>
                            )
                        })}
                    </select>
                </label> */}
                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
}

export default SearchParams

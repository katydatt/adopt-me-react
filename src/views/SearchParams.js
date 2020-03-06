import Results from '../components/Results'
import React, { useState, useEffect, useContext } from 'react'
import UseDropdown from '../components/UseDropdown'
import pet, { ANIMALS } from '@frontendmasters/pet'
import ThemeContext from '../components/ThemeContext'

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA')
    const [breeds, setBreeds] = useState([])
    const [animal, AnimalDropdow] = UseDropdown('Animal', 'dog', ANIMALS)
    const [breed, BreedDropdow, setBreed] = UseDropdown('Breed', '', breeds)
    const [pets, setPets] = useState([])
    const [theme, setTheme] = useContext(ThemeContext)

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
                <label htmlFor="theme">
                    ThemeContext
                    <select
                        value={theme}
                        onChange={e => setTheme(e.target.value)}
                        onBlur={e => setTheme(e.target.value)}
                    >
                        <option value="peru">Peru</option>
                        <option value="darkblue">Dark Blue</option>
                        <option value="mediumorchid">Medium Orchid</option>
                        <option value="chartreuse">Chartreuse</option>
                    </select>
                </label>
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
                <button style={{ backgroundColor: theme }}>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
}

export default SearchParams

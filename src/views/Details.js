import React from 'react'
import pet from '@frontendmasters/pet'
import Modal from '../components/Modal'
import { navigate } from '@reach/router'
import Carousel from '../components/Carousel'
import ThemeContext from '../components/ThemeContext'
import ErrorBoundary from '../components/ErrorBoundary'

class Details extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         loading: true
    //     }
    // }
    // you need to add babel configuration to use this syntax
    state = { loading: true, showModal: false }
    componentDidMount() {
        pet.animal(this.props.id).then(({ animal }) => {
            this.setState({
                url: animal.url,
                name: animal.name,
                animal: animal.type,
                location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
                description: animal.description,
                media: animal.photos,
                breed: animal.breeds.primary,
                loading: false
            })
        }, console.error)
    }
    toggleModal = () => this.setState({ showModal: !this.state.showModal })
    adopt = () => navigate(this.state.url)
    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>
        }

        const {
            animal,
            breed,
            location,
            description,
            name,
            media,
            showModal
        } = this.state
        return (
            <div className="details">
                <Carousel media={media} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <ThemeContext.Consumer>
                        {themeHook => (
                            <button
                                onClick={this.toggleModal}
                                style={{
                                    backgroundColor: themeHook[0]
                                }}
                            >
                                Adopt {name}
                            </button>
                        )}
                    </ThemeContext.Consumer>
                    <p>{description}</p>
                    {showModal ? (
                        <Modal>
                            <div>
                                <h1>Would you like to adopt {name}?</h1>
                                <div className="buttons">
                                    <button onClick={this.adopt}>Yes</button>
                                    <button onClick={this.toggleModal}>
                                        No, I'm a monster
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    ) : null}
                </div>
            </div>
        )
    }
}

export default function DetailsWithErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    )
}

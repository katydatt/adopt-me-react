import React from 'react'

class Carousel extends React.Component {
    state = {
        photos: [],
        active: 0
    }
    static getDerivedStateFromProps({ media }) {
        let photos = ['http://placecorgi.com/600/600']
        if (media.length) {
            photos = media.map(({ large }) => large)
        }
        return { photos }
    }
    handleIndexClick = evt => {
        this.setState({
            active: +evt.target.dataset.index
        })
    }
    render() {
        const { photos, active } = this.state
        return (
            <div className="carousel">
                <img src={photos[active]} alt="animal" />
                <div className="carousel-smaller">
                    {photos.map((photo, index) => (
                        <img
                            key={photo}
                            src={photo}
                            data-index={index}
                            alt="animal thumbnail"
                            onClick={this.handleIndexClick}
                            className={index === active ? 'active' : ''}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel

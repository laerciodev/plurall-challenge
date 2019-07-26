import React from 'react';

class GetImages extends React.Component {
    
    getImage(images) {
        return images.length > 0  ? images[2].url : '';  
    }
    
    render() {
        return this.props.render(this.getImage)
    }
    
}

export default GetImages;
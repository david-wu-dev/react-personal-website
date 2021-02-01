import React from 'react';

class Dropdown extends React.Component {

    constructor(props) {
      super(props)
      this.state = { isOpen: false }
    }
  
    handleOpen = () => {
      this.setState({ isOpen: true })
    }
  
    handleClose = () => {
       this.setState({ isOpen: false })
    }
  
    render() {
        return (
            <div>
                hi
            </div>
        )
          
    }
  }

  export default Dropdown
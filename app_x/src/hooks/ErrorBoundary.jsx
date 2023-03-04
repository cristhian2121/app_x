import { Container } from '@mui/material';
import { Component } from 'react';
import ErrorMessage from '../components/ErrorMessage';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, errorMessage: '' };
    }
  
    static getDerivedStateFromError(errorI) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true, errorMessage: errorI.toString() };
    }

    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <>
            <ErrorMessage errorMessage={this.state.errorMessage} />
          </>
        );
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;
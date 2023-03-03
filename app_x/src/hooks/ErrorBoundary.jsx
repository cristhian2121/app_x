import { Container } from '@mui/material';
import { Component } from 'react';
import ErrorMessage from '../components/ErrorMessage';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }

  
    render() {
      if (this.state.hasError) {
        console.log('Este es el error ')
        // You can render any custom fallback UI
        return (
            <ErrorMessage/>
        );
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;
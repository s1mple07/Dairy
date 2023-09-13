import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <React.Fragment>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            onError: () => setHasError(true),
          });
        }
        return child;
      })}
    </React.Fragment>
  );
};

export default ErrorBoundary;

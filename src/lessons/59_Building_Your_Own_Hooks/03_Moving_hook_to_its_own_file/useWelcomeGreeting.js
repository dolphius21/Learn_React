import React, { useEffect } from 'react';

export default function useWelcomeGreeting() {
  useEffect(() => {
    console.log('Welcome to my app');
  }, []);
}

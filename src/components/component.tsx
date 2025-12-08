import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  features: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<BusinessSpec>('https://api.example.com/business-spec')
      .then(response => {
        setBusinessSpec(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load business specification');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div className="flex items-center justify-center h-screen">{error}</div>;

  const renderFeatures = () => {
    return businessSpec?.features.map(feature => (
      <li key={feature} className="list-disc pl-5">
        {feature}
      </li>
    ));
  };

  return (
    <section aria-label="Business Specification" tabIndex={0}>
      <div className={`container mx-auto px-4 ${isMobile ? 'py-8' : 'py-16'} max-w-screen-lg`}>
        <h2 className="text-3xl font-bold mb-6">Business Specification</h2>
        <p className="mb-4">{businessSpec?.description}</p>
        <ul className={clsx('my-4', isMobile ? 'space-y-2' : 'space-x-5')}>
          {renderFeatures()}
        </ul>
      </div>
    </section>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  features: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<BusinessSpec>('https://api.example.com/business-spec')
      .then(response => {
        setBusinessSpec(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load business specification');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div className="flex items-center justify-center h-screen">{error}</div>;

  const renderFeatures = () => {
    return businessSpec?.features.map(feature => (
      <li key={feature} className="list-disc pl-5">
        {feature}
      </li>
    ));
  };

  return (
    <section aria-label="Business Specification" tabIndex={0}>
      <div className={`container mx-auto px-4 ${isMobile ? 'py-8' : 'py-16'} max-w-screen-lg`}>
        <h2 className="text-3xl font-bold mb-6">Business Specification</h2>
        <p className="mb-4">{businessSpec?.description}</p>
        <ul className={clsx('my-4', isMobile ? 'space-y-2' : 'space-x-5')}>
          {renderFeatures()}
        </ul>
      </div>
    </section>
  );
};

export default CreateBusinessSpecification;
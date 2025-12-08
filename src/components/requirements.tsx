import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface RequirementsForm {
  featureName: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<RequirementsForm>();

  const onSubmit: SubmitHandler<RequirementsForm> = (data) => {
    setLoading(true);
    // API call to submit requirements
    fetch('/api/submit-requirements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        reset();
        setError(null);
      }
    })
    .catch(error => {
      setError('An unexpected error occurred');
    })
    .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <div className={twMerge("mb-4", errors.featureName ? "border-red-500" : "")}>
        <label htmlFor="featureName" className="block text-sm font-medium text-gray-700">Feature Name</label>
        <input
          type="text"
          id="featureName"
          {...register("featureName", { required: true })}
          aria-invalid={errors.featureName ? "true" : "false"}
          aria-describedby={errors.featureName ? "feature-name-error" : undefined}
          className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.featureName && (
          <p id="feature-name-error" role="alert" className="mt-2 text-sm text-red-600">
          </p>
        )}
      </div>

      <div className={twMerge("mb-4", errors.description ? "border-red-500" : "")}>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          {...register("description", { required: true })}
          aria-invalid={errors.description ? "true" : "false"}
          aria-describedby={errors.description ? "description-error" : undefined}
          className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.description && (
          <p id="description-error" role="alert" className="mt-2 text-sm text-red-600">
          </p>
        )}
      </div>

      <div className={twMerge("mb-4", errors.priority ? "border-red-500" : "")}>
        <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
        <select
          id="priority"
          {...register("priority", { required: true })}
          aria-invalid={errors.priority ? "true" : "false"}
          aria-describedby={errors.priority ? "priority-error" : undefined}
          className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        {errors.priority && (
          <p id="priority-error" role="alert" className="mt-2 text-sm text-red-600">
          </p>
        )}
      </div>

      <button type="submit" disabled={loading} aria-label="Submit Requirements" className={twMerge("w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm", loading ? "cursor-not-allowed opacity-50" : "")}>
        {loading ? 'Submitting...' : 'Submit Requirements'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface RequirementsForm {
  featureName: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<RequirementsForm>();

  const onSubmit: SubmitHandler<RequirementsForm> = (data) => {
    setLoading(true);
    // API call to submit requirements
    fetch('/api/submit-requirements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        reset();
        setError(null);
      }
    })
    .catch(error => {
      setError('An unexpected error occurred');
    })
    .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <div className={twMerge("mb-4", errors.featureName ? "border-red-500" : "")}>
        <label htmlFor="featureName" className="block text-sm font-medium text-gray-700">Feature Name</label>
        <input
          type="text"
          id="featureName"
          {...register("featureName", { required: true })}
          aria-invalid={errors.featureName ? "true" : "false"}
          aria-describedby={errors.featureName ? "feature-name-error" : undefined}
          className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.featureName && (
          <p id="feature-name-error" role="alert" className="mt-2 text-sm text-red-600">
          </p>
        )}
      </div>

      <div className={twMerge("mb-4", errors.description ? "border-red-500" : "")}>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          {...register("description", { required: true })}
          aria-invalid={errors.description ? "true" : "false"}
          aria-describedby={errors.description ? "description-error" : undefined}
          className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.description && (
          <p id="description-error" role="alert" className="mt-2 text-sm text-red-600">
          </p>
        )}
      </div>

      <div className={twMerge("mb-4", errors.priority ? "border-red-500" : "")}>
        <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
        <select
          id="priority"
          {...register("priority", { required: true })}
          aria-invalid={errors.priority ? "true" : "false"}
          aria-describedby={errors.priority ? "priority-error" : undefined}
          className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        {errors.priority && (
          <p id="priority-error" role="alert" className="mt-2 text-sm text-red-600">
          </p>
        )}
      </div>

      <button type="submit" disabled={loading} aria-label="Submit Requirements" className={twMerge("w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm", loading ? "cursor-not-allowed opacity-50" : "")}>
        {loading ? 'Submitting...' : 'Submit Requirements'}
      </button>
    </form>
  );
};

export default GatherRequirements;
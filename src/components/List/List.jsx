import { List, Avatar } from 'flowbite-react';
import { jobListPropTypes } from '../../propTypes/job';
import { Link } from 'react-router-dom';

export function ListComponent({ jobs }) {
  return (
    <List unstyled className="divide-y divide-gray-200 dark:divide-gray-700">
      {jobs.map((job) => (
        <List.Item key={job.id} className="py-3 sm:py-4">
          <Link
            to={`/jobs/details/${job.id}`}
            className="flex items-center space-x-4 rtl:space-x-reverse p-2 rounded hover:bg-cyan-700 transition-colors duration-200"
          >
            <Avatar
              img={job.data ? job.data.urls.small : '/images/no-image.jpg'}
              alt="Unsplash image"
              size="md"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                {job.name}
              </p>
              <p>
                <span>Category:&nbsp;</span>
                {job.category}
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              <span>Status:&nbsp;</span>
              {job.status}
            </div>
          </Link>
        </List.Item>
      ))}
    </List>
  );
}

ListComponent.propTypes = {
  jobs: jobListPropTypes.isRequired,
};

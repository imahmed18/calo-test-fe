import PropTypes from 'prop-types';

export const jobPropTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        raw: PropTypes.string.isRequired,
        full: PropTypes.string.isRequired,
        regular: PropTypes.string.isRequired,
        small: PropTypes.string.isRequired,
        thumb: PropTypes.string.isRequired,
        small_s3: PropTypes.string.isRequired,
      }).isRequired,
    }),
    PropTypes.oneOf([null]),
  ]),
};

export const jobListPropTypes = PropTypes.arrayOf(
  PropTypes.shape(jobPropTypes)
);

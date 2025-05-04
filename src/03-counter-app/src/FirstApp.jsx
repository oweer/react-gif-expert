import PropTypes from 'prop-types';

export const FirstApp = ({ 
  name = 'Belly', 
  title = 'No hay título', 
  subTitle = 'No hay subtítulo' 
}) => {
  return (
    <>
    <h1 data-testid="test-title">{title}</h1>
    <p>{subTitle}</p>
      <p>{name}</p>
      
    </>
  );
};


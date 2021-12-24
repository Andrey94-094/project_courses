import './Cross.scss';

export default function Cross({ onClick }) {
  return (
    <div className='cross' onClick={onClick}></div>
  );
}

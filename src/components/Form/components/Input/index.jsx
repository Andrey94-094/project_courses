import './Input.scss';

export default function Input({ placeholder, value, onChange }) {
  return (
    <input className="input" placeholder={placeholder} value={value} onChange={onChange} name="name"></input>
  );
}

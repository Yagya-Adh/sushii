import { IIconInterface } from "../interface";

const ClockIcon = ({ className }: IIconInterface) => {
  return (
    <svg viewBox="0 0 512 512" className={className}>
      <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
    </svg>
  );
};

export default ClockIcon;

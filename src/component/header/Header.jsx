import Button from '../button/Button';

const Header = () => {
  return (
    <div>
      <div>
        <h1>The #1 newsletter growth platform</h1>
        <p>
          <span>The world’s best newsletter operators</span> and media brands
          rely on SparkLoop to grow their audience faster and more affordably.
          You should too.
        </p>
        <div>
          <Button text="Book a call" />
          <Button text="Start for free" styles="color: black" />
        </div>
      </div>
    </div>
  );
};

export default Header;

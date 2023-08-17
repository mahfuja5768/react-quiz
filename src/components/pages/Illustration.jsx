import signup from '../../assets/images/signup.svg';
import classes from '../../styles/Illustration.module.css'


export default function Illustration() {
    return (
      <div>
          <div className={classes.illustration}>
            <img src={signup}alt="SignupImg" />
          </div>
      </div>
    );
  }
  
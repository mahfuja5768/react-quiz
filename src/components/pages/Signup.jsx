import Illustration from "./Illustration";
import classes from '../../styles/Signup.module.css';
import Form from "./Form";


export default function Signup() {
    return (
      <div className="container">
          <h1>Create an account</h1>
          <div className="column">
            <Illustration></Illustration>
            <Form className={`${classes.Signup}`}></Form>
          </div>
      </div>
    );
  }
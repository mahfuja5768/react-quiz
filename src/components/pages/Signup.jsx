import classes from '../../styles/Signup.module.css';
import Button from '../Button';
import Checkbox from '../Checkbox';
import TextInput from "../TextInput";
import Form from "./Form";
import Illustration from "./Illustration";


export default function Signup() {
    return (
      <div className="container">
          <h1>Create an account</h1>
          <div className="column">
            <Illustration></Illustration>
            <Form className={`${classes.Signup}`}>
              <TextInput type="text" placeholder="Enter Name" icon="person"></TextInput>
              <TextInput type="text" placeholder="Enter email" icon="alternate_email"></TextInput>
              <TextInput type="password" placeholder="Enter password" icon="lock"></TextInput>
              <TextInput type="password" placeholder="Confirm password" icon="lock_clock "></TextInput>
              <Checkbox text="I agree to the Terms & Conditions"></Checkbox>
              <Button>Submit now</Button>

              <div className="info">
              Already have an account? <a href="login.html">Login</a> instead.
            </div>
            </Form>
          </div>
      </div>
    );
  }